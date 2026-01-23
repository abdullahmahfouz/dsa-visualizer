function $h(e,t){for(var r=0;r<t.length;r++){const s=t[r];if(typeof s!="string"&&!Array.isArray(s)){for(const a in s)if(a!=="default"&&!(a in e)){const i=Object.getOwnPropertyDescriptor(s,a);i&&Object.defineProperty(e,a,i.get?i:{enumerable:!0,get:()=>s[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}})();function Bh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var td={exports:{}},va={},rd={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ts=Symbol.for("react.element"),Hh=Symbol.for("react.portal"),qh=Symbol.for("react.fragment"),Uh=Symbol.for("react.strict_mode"),Kh=Symbol.for("react.profiler"),Wh=Symbol.for("react.provider"),Gh=Symbol.for("react.context"),Qh=Symbol.for("react.forward_ref"),Yh=Symbol.for("react.suspense"),Xh=Symbol.for("react.memo"),Jh=Symbol.for("react.lazy"),Co=Symbol.iterator;function Zh(e){return e===null||typeof e!="object"?null:(e=Co&&e[Co]||e["@@iterator"],typeof e=="function"?e:null)}var sd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ad=Object.assign,id={};function ar(e,t,r){this.props=e,this.context=t,this.refs=id,this.updater=r||sd}ar.prototype.isReactComponent={};ar.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ar.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ld(){}ld.prototype=ar.prototype;function Sl(e,t,r){this.props=e,this.context=t,this.refs=id,this.updater=r||sd}var Cl=Sl.prototype=new ld;Cl.constructor=Sl;ad(Cl,ar.prototype);Cl.isPureReactComponent=!0;var To=Array.isArray,od=Object.prototype.hasOwnProperty,Tl={current:null},cd={key:!0,ref:!0,__self:!0,__source:!0};function dd(e,t,r){var s,a={},i=null,l=null;if(t!=null)for(s in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)od.call(t,s)&&!cd.hasOwnProperty(s)&&(a[s]=t[s]);var o=arguments.length-2;if(o===1)a.children=r;else if(1<o){for(var c=Array(o),h=0;h<o;h++)c[h]=arguments[h+2];a.children=c}if(e&&e.defaultProps)for(s in o=e.defaultProps,o)a[s]===void 0&&(a[s]=o[s]);return{$$typeof:ts,type:e,key:i,ref:l,props:a,_owner:Tl.current}}function ep(e,t){return{$$typeof:ts,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function El(e){return typeof e=="object"&&e!==null&&e.$$typeof===ts}function np(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Eo=/\/+/g;function za(e,t){return typeof e=="object"&&e!==null&&e.key!=null?np(""+e.key):t.toString(36)}function Os(e,t,r,s,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case ts:case Hh:l=!0}}if(l)return l=e,a=a(l),e=s===""?"."+za(l,0):s,To(a)?(r="",e!=null&&(r=e.replace(Eo,"$&/")+"/"),Os(a,t,r,"",function(h){return h})):a!=null&&(El(a)&&(a=ep(a,r+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(Eo,"$&/")+"/")+e)),t.push(a)),1;if(l=0,s=s===""?".":s+":",To(e))for(var o=0;o<e.length;o++){i=e[o];var c=s+za(i,o);l+=Os(i,t,r,c,a)}else if(c=Zh(e),typeof c=="function")for(e=c.call(e),o=0;!(i=e.next()).done;)i=i.value,c=s+za(i,o++),l+=Os(i,t,r,c,a);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function hs(e,t,r){if(e==null)return e;var s=[],a=0;return Os(e,s,"","",function(i){return t.call(r,i,a++)}),s}function tp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var De={current:null},Rs={transition:null},rp={ReactCurrentDispatcher:De,ReactCurrentBatchConfig:Rs,ReactCurrentOwner:Tl};function ud(){throw Error("act(...) is not supported in production builds of React.")}Z.Children={map:hs,forEach:function(e,t,r){hs(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return hs(e,function(){t++}),t},toArray:function(e){return hs(e,function(t){return t})||[]},only:function(e){if(!El(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Z.Component=ar;Z.Fragment=qh;Z.Profiler=Kh;Z.PureComponent=Sl;Z.StrictMode=Uh;Z.Suspense=Yh;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rp;Z.act=ud;Z.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=ad({},e.props),a=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Tl.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(c in t)od.call(t,c)&&!cd.hasOwnProperty(c)&&(s[c]=t[c]===void 0&&o!==void 0?o[c]:t[c])}var c=arguments.length-2;if(c===1)s.children=r;else if(1<c){o=Array(c);for(var h=0;h<c;h++)o[h]=arguments[h+2];s.children=o}return{$$typeof:ts,type:e.type,key:a,ref:i,props:s,_owner:l}};Z.createContext=function(e){return e={$$typeof:Gh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Wh,_context:e},e.Consumer=e};Z.createElement=dd;Z.createFactory=function(e){var t=dd.bind(null,e);return t.type=e,t};Z.createRef=function(){return{current:null}};Z.forwardRef=function(e){return{$$typeof:Qh,render:e}};Z.isValidElement=El;Z.lazy=function(e){return{$$typeof:Jh,_payload:{_status:-1,_result:e},_init:tp}};Z.memo=function(e,t){return{$$typeof:Xh,type:e,compare:t===void 0?null:t}};Z.startTransition=function(e){var t=Rs.transition;Rs.transition={};try{e()}finally{Rs.transition=t}};Z.unstable_act=ud;Z.useCallback=function(e,t){return De.current.useCallback(e,t)};Z.useContext=function(e){return De.current.useContext(e)};Z.useDebugValue=function(){};Z.useDeferredValue=function(e){return De.current.useDeferredValue(e)};Z.useEffect=function(e,t){return De.current.useEffect(e,t)};Z.useId=function(){return De.current.useId()};Z.useImperativeHandle=function(e,t,r){return De.current.useImperativeHandle(e,t,r)};Z.useInsertionEffect=function(e,t){return De.current.useInsertionEffect(e,t)};Z.useLayoutEffect=function(e,t){return De.current.useLayoutEffect(e,t)};Z.useMemo=function(e,t){return De.current.useMemo(e,t)};Z.useReducer=function(e,t,r){return De.current.useReducer(e,t,r)};Z.useRef=function(e){return De.current.useRef(e)};Z.useState=function(e){return De.current.useState(e)};Z.useSyncExternalStore=function(e,t,r){return De.current.useSyncExternalStore(e,t,r)};Z.useTransition=function(){return De.current.useTransition()};Z.version="18.3.1";rd.exports=Z;var u=rd.exports;const Je=Bh(u),sp=$h({__proto__:null,default:Je},[u]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ap=u,ip=Symbol.for("react.element"),lp=Symbol.for("react.fragment"),op=Object.prototype.hasOwnProperty,cp=ap.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,dp={key:!0,ref:!0,__self:!0,__source:!0};function hd(e,t,r){var s,a={},i=null,l=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(s in t)op.call(t,s)&&!dp.hasOwnProperty(s)&&(a[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)a[s]===void 0&&(a[s]=t[s]);return{$$typeof:ip,type:e,key:i,ref:l,props:a,_owner:cp.current}}va.Fragment=lp;va.jsx=hd;va.jsxs=hd;td.exports=va;var n=td.exports,mi={},pd={exports:{}},nn={},fd={exports:{}},md={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,E){var y=C.length;C.push(E);e:for(;0<y;){var O=y-1>>>1,A=C[O];if(0<a(A,E))C[O]=E,C[y]=A,y=O;else break e}}function r(C){return C.length===0?null:C[0]}function s(C){if(C.length===0)return null;var E=C[0],y=C.pop();if(y!==E){C[0]=y;e:for(var O=0,A=C.length,L=A>>>1;O<L;){var R=2*(O+1)-1,_=C[R],j=R+1,B=C[j];if(0>a(_,y))j<A&&0>a(B,_)?(C[O]=B,C[j]=y,O=j):(C[O]=_,C[R]=y,O=R);else if(j<A&&0>a(B,y))C[O]=B,C[j]=y,O=j;else break e}}return E}function a(C,E){var y=C.sortIndex-E.sortIndex;return y!==0?y:C.id-E.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,o=l.now();e.unstable_now=function(){return l.now()-o}}var c=[],h=[],d=1,p=null,m=3,S=!1,w=!1,N=!1,x=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(C){for(var E=r(h);E!==null;){if(E.callback===null)s(h);else if(E.startTime<=C)s(h),E.sortIndex=E.expirationTime,t(c,E);else break;E=r(h)}}function P(C){if(N=!1,v(C),!w)if(r(c)!==null)w=!0,z(k);else{var E=r(h);E!==null&&M(P,E.startTime-C)}}function k(C,E){w=!1,N&&(N=!1,f(D),D=-1),S=!0;var y=m;try{for(v(E),p=r(c);p!==null&&(!(p.expirationTime>E)||C&&!H());){var O=p.callback;if(typeof O=="function"){p.callback=null,m=p.priorityLevel;var A=O(p.expirationTime<=E);E=e.unstable_now(),typeof A=="function"?p.callback=A:p===r(c)&&s(c),v(E)}else s(c);p=r(c)}if(p!==null)var L=!0;else{var R=r(h);R!==null&&M(P,R.startTime-E),L=!1}return L}finally{p=null,m=y,S=!1}}var V=!1,T=null,D=-1,F=5,I=-1;function H(){return!(e.unstable_now()-I<F)}function K(){if(T!==null){var C=e.unstable_now();I=C;var E=!0;try{E=T(!0,C)}finally{E?$():(V=!1,T=null)}}else V=!1}var $;if(typeof g=="function")$=function(){g(K)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,b=q.port2;q.port1.onmessage=K,$=function(){b.postMessage(null)}}else $=function(){x(K,0)};function z(C){T=C,V||(V=!0,$())}function M(C,E){D=x(function(){C(e.unstable_now())},E)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){w||S||(w=!0,z(k))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(C){switch(m){case 1:case 2:case 3:var E=3;break;default:E=m}var y=m;m=E;try{return C()}finally{m=y}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,E){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var y=m;m=C;try{return E()}finally{m=y}},e.unstable_scheduleCallback=function(C,E,y){var O=e.unstable_now();switch(typeof y=="object"&&y!==null?(y=y.delay,y=typeof y=="number"&&0<y?O+y:O):y=O,C){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=y+A,C={id:d++,callback:E,priorityLevel:C,startTime:y,expirationTime:A,sortIndex:-1},y>O?(C.sortIndex=y,t(h,C),r(c)===null&&C===r(h)&&(N?(f(D),D=-1):N=!0,M(P,y-O))):(C.sortIndex=A,t(c,C),w||S||(w=!0,z(k))),C},e.unstable_shouldYield=H,e.unstable_wrapCallback=function(C){var E=m;return function(){var y=m;m=E;try{return C.apply(this,arguments)}finally{m=y}}}})(md);fd.exports=md;var up=fd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hp=u,en=up;function U(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var gd=new Set,zr={};function Nt(e,t){Jt(e,t),Jt(e+"Capture",t)}function Jt(e,t){for(zr[e]=t,e=0;e<t.length;e++)gd.add(t[e])}var Tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gi=Object.prototype.hasOwnProperty,pp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Lo={},Po={};function fp(e){return gi.call(Po,e)?!0:gi.call(Lo,e)?!1:pp.test(e)?Po[e]=!0:(Lo[e]=!0,!1)}function mp(e,t,r,s){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function gp(e,t,r,s){if(t===null||typeof t>"u"||mp(e,t,r,s))return!0;if(s)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function $e(e,t,r,s,a,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var Pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Pe[e]=new $e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Pe[t]=new $e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Pe[e]=new $e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Pe[e]=new $e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Pe[e]=new $e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Pe[e]=new $e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Pe[e]=new $e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Pe[e]=new $e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Pe[e]=new $e(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ll=/[\-:]([a-z])/g;function Pl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ll,Pl);Pe[t]=new $e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ll,Pl);Pe[t]=new $e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ll,Pl);Pe[t]=new $e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Pe[e]=new $e(e,1,!1,e.toLowerCase(),null,!1,!1)});Pe.xlinkHref=new $e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Pe[e]=new $e(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ol(e,t,r,s){var a=Pe.hasOwnProperty(t)?Pe[t]:null;(a!==null?a.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(gp(t,r,a,s)&&(r=null),s||a===null?fp(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):a.mustUseProperty?e[a.propertyName]=r===null?a.type===3?!1:"":r:(t=a.attributeName,s=a.attributeNamespace,r===null?e.removeAttribute(t):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,s?e.setAttributeNS(s,t,r):e.setAttribute(t,r))))}var Rn=hp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ps=Symbol.for("react.element"),Et=Symbol.for("react.portal"),Lt=Symbol.for("react.fragment"),Rl=Symbol.for("react.strict_mode"),vi=Symbol.for("react.profiler"),vd=Symbol.for("react.provider"),xd=Symbol.for("react.context"),Il=Symbol.for("react.forward_ref"),xi=Symbol.for("react.suspense"),yi=Symbol.for("react.suspense_list"),_l=Symbol.for("react.memo"),zn=Symbol.for("react.lazy"),yd=Symbol.for("react.offscreen"),Oo=Symbol.iterator;function cr(e){return e===null||typeof e!="object"?null:(e=Oo&&e[Oo]||e["@@iterator"],typeof e=="function"?e:null)}var pe=Object.assign,Ma;function vr(e){if(Ma===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Ma=t&&t[1]||""}return`
`+Ma+e}var Aa=!1;function Va(e,t){if(!e||Aa)return"";Aa=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(h){var s=h}Reflect.construct(e,[],t)}else{try{t.call()}catch(h){s=h}e.call(t.prototype)}else{try{throw Error()}catch(h){s=h}e()}}catch(h){if(h&&s&&typeof h.stack=="string"){for(var a=h.stack.split(`
`),i=s.stack.split(`
`),l=a.length-1,o=i.length-1;1<=l&&0<=o&&a[l]!==i[o];)o--;for(;1<=l&&0<=o;l--,o--)if(a[l]!==i[o]){if(l!==1||o!==1)do if(l--,o--,0>o||a[l]!==i[o]){var c=`
`+a[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=o);break}}}finally{Aa=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?vr(e):""}function vp(e){switch(e.tag){case 5:return vr(e.type);case 16:return vr("Lazy");case 13:return vr("Suspense");case 19:return vr("SuspenseList");case 0:case 2:case 15:return e=Va(e.type,!1),e;case 11:return e=Va(e.type.render,!1),e;case 1:return e=Va(e.type,!0),e;default:return""}}function ji(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Lt:return"Fragment";case Et:return"Portal";case vi:return"Profiler";case Rl:return"StrictMode";case xi:return"Suspense";case yi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case xd:return(e.displayName||"Context")+".Consumer";case vd:return(e._context.displayName||"Context")+".Provider";case Il:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _l:return t=e.displayName||null,t!==null?t:ji(e.type)||"Memo";case zn:t=e._payload,e=e._init;try{return ji(e(t))}catch{}}return null}function xp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ji(t);case 8:return t===Rl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Zn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function jd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function yp(e){var t=jd(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(l){s=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return s},setValue:function(l){s=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function fs(e){e._valueTracker||(e._valueTracker=yp(e))}function Nd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),s="";return e&&(s=jd(e)?e.checked?"true":"false":e.value),e=s,e!==r?(t.setValue(e),!0):!1}function Hs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ni(e,t){var r=t.checked;return pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Ro(e,t){var r=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;r=Zn(t.value!=null?t.value:r),e._wrapperState={initialChecked:s,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function kd(e,t){t=t.checked,t!=null&&Ol(e,"checked",t,!1)}function ki(e,t){kd(e,t);var r=Zn(t.value),s=t.type;if(r!=null)s==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?bi(e,t.type,r):t.hasOwnProperty("defaultValue")&&bi(e,t.type,Zn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Io(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function bi(e,t,r){(t!=="number"||Hs(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var xr=Array.isArray;function Ut(e,t,r,s){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&s&&(e[r].defaultSelected=!0)}else{for(r=""+Zn(r),t=null,a=0;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,s&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function wi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(U(91));return pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function _o(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(U(92));if(xr(r)){if(1<r.length)throw Error(U(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Zn(r)}}function bd(e,t){var r=Zn(t.value),s=Zn(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),s!=null&&(e.defaultValue=""+s)}function zo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function wd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Si(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?wd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ms,Sd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,s,a){MSApp.execUnsafeLocalFunction(function(){return e(t,r,s,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ms=ms||document.createElement("div"),ms.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ms.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Mr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var br={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jp=["Webkit","ms","Moz","O"];Object.keys(br).forEach(function(e){jp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),br[t]=br[e]})});function Cd(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||br.hasOwnProperty(e)&&br[e]?(""+t).trim():t+"px"}function Td(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var s=r.indexOf("--")===0,a=Cd(r,t[r],s);r==="float"&&(r="cssFloat"),s?e.setProperty(r,a):e[r]=a}}var Np=pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ci(e,t){if(t){if(Np[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(U(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(U(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(U(61))}if(t.style!=null&&typeof t.style!="object")throw Error(U(62))}}function Ti(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ei=null;function zl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Li=null,Kt=null,Wt=null;function Mo(e){if(e=as(e)){if(typeof Li!="function")throw Error(U(280));var t=e.stateNode;t&&(t=ka(t),Li(e.stateNode,e.type,t))}}function Ed(e){Kt?Wt?Wt.push(e):Wt=[e]:Kt=e}function Ld(){if(Kt){var e=Kt,t=Wt;if(Wt=Kt=null,Mo(e),t)for(e=0;e<t.length;e++)Mo(t[e])}}function Pd(e,t){return e(t)}function Od(){}var Fa=!1;function Rd(e,t,r){if(Fa)return e(t,r);Fa=!0;try{return Pd(e,t,r)}finally{Fa=!1,(Kt!==null||Wt!==null)&&(Od(),Ld())}}function Ar(e,t){var r=e.stateNode;if(r===null)return null;var s=ka(r);if(s===null)return null;r=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(U(231,t,typeof r));return r}var Pi=!1;if(Tn)try{var dr={};Object.defineProperty(dr,"passive",{get:function(){Pi=!0}}),window.addEventListener("test",dr,dr),window.removeEventListener("test",dr,dr)}catch{Pi=!1}function kp(e,t,r,s,a,i,l,o,c){var h=Array.prototype.slice.call(arguments,3);try{t.apply(r,h)}catch(d){this.onError(d)}}var wr=!1,qs=null,Us=!1,Oi=null,bp={onError:function(e){wr=!0,qs=e}};function wp(e,t,r,s,a,i,l,o,c){wr=!1,qs=null,kp.apply(bp,arguments)}function Sp(e,t,r,s,a,i,l,o,c){if(wp.apply(this,arguments),wr){if(wr){var h=qs;wr=!1,qs=null}else throw Error(U(198));Us||(Us=!0,Oi=h)}}function kt(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Id(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ao(e){if(kt(e)!==e)throw Error(U(188))}function Cp(e){var t=e.alternate;if(!t){if(t=kt(e),t===null)throw Error(U(188));return t!==e?null:e}for(var r=e,s=t;;){var a=r.return;if(a===null)break;var i=a.alternate;if(i===null){if(s=a.return,s!==null){r=s;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===r)return Ao(a),e;if(i===s)return Ao(a),t;i=i.sibling}throw Error(U(188))}if(r.return!==s.return)r=a,s=i;else{for(var l=!1,o=a.child;o;){if(o===r){l=!0,r=a,s=i;break}if(o===s){l=!0,s=a,r=i;break}o=o.sibling}if(!l){for(o=i.child;o;){if(o===r){l=!0,r=i,s=a;break}if(o===s){l=!0,s=i,r=a;break}o=o.sibling}if(!l)throw Error(U(189))}}if(r.alternate!==s)throw Error(U(190))}if(r.tag!==3)throw Error(U(188));return r.stateNode.current===r?e:t}function _d(e){return e=Cp(e),e!==null?zd(e):null}function zd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=zd(e);if(t!==null)return t;e=e.sibling}return null}var Md=en.unstable_scheduleCallback,Vo=en.unstable_cancelCallback,Tp=en.unstable_shouldYield,Ep=en.unstable_requestPaint,ge=en.unstable_now,Lp=en.unstable_getCurrentPriorityLevel,Ml=en.unstable_ImmediatePriority,Ad=en.unstable_UserBlockingPriority,Ks=en.unstable_NormalPriority,Pp=en.unstable_LowPriority,Vd=en.unstable_IdlePriority,xa=null,jn=null;function Op(e){if(jn&&typeof jn.onCommitFiberRoot=="function")try{jn.onCommitFiberRoot(xa,e,void 0,(e.current.flags&128)===128)}catch{}}var fn=Math.clz32?Math.clz32:_p,Rp=Math.log,Ip=Math.LN2;function _p(e){return e>>>=0,e===0?32:31-(Rp(e)/Ip|0)|0}var gs=64,vs=4194304;function yr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ws(e,t){var r=e.pendingLanes;if(r===0)return 0;var s=0,a=e.suspendedLanes,i=e.pingedLanes,l=r&268435455;if(l!==0){var o=l&~a;o!==0?s=yr(o):(i&=l,i!==0&&(s=yr(i)))}else l=r&~a,l!==0?s=yr(l):i!==0&&(s=yr(i));if(s===0)return 0;if(t!==0&&t!==s&&!(t&a)&&(a=s&-s,i=t&-t,a>=i||a===16&&(i&4194240)!==0))return t;if(s&4&&(s|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)r=31-fn(t),a=1<<r,s|=e[r],t&=~a;return s}function zp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mp(e,t){for(var r=e.suspendedLanes,s=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-fn(i),o=1<<l,c=a[l];c===-1?(!(o&r)||o&s)&&(a[l]=zp(o,t)):c<=t&&(e.expiredLanes|=o),i&=~o}}function Ri(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Fd(){var e=gs;return gs<<=1,!(gs&4194240)&&(gs=64),e}function Da(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function rs(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-fn(t),e[t]=r}function Ap(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-fn(r),i=1<<a;t[a]=0,s[a]=-1,e[a]=-1,r&=~i}}function Al(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var s=31-fn(r),a=1<<s;a&t|e[s]&t&&(e[s]|=t),r&=~a}}var se=0;function Dd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var $d,Vl,Bd,Hd,qd,Ii=!1,xs=[],Hn=null,qn=null,Un=null,Vr=new Map,Fr=new Map,An=[],Vp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fo(e,t){switch(e){case"focusin":case"focusout":Hn=null;break;case"dragenter":case"dragleave":qn=null;break;case"mouseover":case"mouseout":Un=null;break;case"pointerover":case"pointerout":Vr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fr.delete(t.pointerId)}}function ur(e,t,r,s,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:s,nativeEvent:i,targetContainers:[a]},t!==null&&(t=as(t),t!==null&&Vl(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Fp(e,t,r,s,a){switch(t){case"focusin":return Hn=ur(Hn,e,t,r,s,a),!0;case"dragenter":return qn=ur(qn,e,t,r,s,a),!0;case"mouseover":return Un=ur(Un,e,t,r,s,a),!0;case"pointerover":var i=a.pointerId;return Vr.set(i,ur(Vr.get(i)||null,e,t,r,s,a)),!0;case"gotpointercapture":return i=a.pointerId,Fr.set(i,ur(Fr.get(i)||null,e,t,r,s,a)),!0}return!1}function Ud(e){var t=ct(e.target);if(t!==null){var r=kt(t);if(r!==null){if(t=r.tag,t===13){if(t=Id(r),t!==null){e.blockedOn=t,qd(e.priority,function(){Bd(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Is(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=_i(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var s=new r.constructor(r.type,r);Ei=s,r.target.dispatchEvent(s),Ei=null}else return t=as(r),t!==null&&Vl(t),e.blockedOn=r,!1;t.shift()}return!0}function Do(e,t,r){Is(e)&&r.delete(t)}function Dp(){Ii=!1,Hn!==null&&Is(Hn)&&(Hn=null),qn!==null&&Is(qn)&&(qn=null),Un!==null&&Is(Un)&&(Un=null),Vr.forEach(Do),Fr.forEach(Do)}function hr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ii||(Ii=!0,en.unstable_scheduleCallback(en.unstable_NormalPriority,Dp)))}function Dr(e){function t(a){return hr(a,e)}if(0<xs.length){hr(xs[0],e);for(var r=1;r<xs.length;r++){var s=xs[r];s.blockedOn===e&&(s.blockedOn=null)}}for(Hn!==null&&hr(Hn,e),qn!==null&&hr(qn,e),Un!==null&&hr(Un,e),Vr.forEach(t),Fr.forEach(t),r=0;r<An.length;r++)s=An[r],s.blockedOn===e&&(s.blockedOn=null);for(;0<An.length&&(r=An[0],r.blockedOn===null);)Ud(r),r.blockedOn===null&&An.shift()}var Gt=Rn.ReactCurrentBatchConfig,Gs=!0;function $p(e,t,r,s){var a=se,i=Gt.transition;Gt.transition=null;try{se=1,Fl(e,t,r,s)}finally{se=a,Gt.transition=i}}function Bp(e,t,r,s){var a=se,i=Gt.transition;Gt.transition=null;try{se=4,Fl(e,t,r,s)}finally{se=a,Gt.transition=i}}function Fl(e,t,r,s){if(Gs){var a=_i(e,t,r,s);if(a===null)Ya(e,t,s,Qs,r),Fo(e,s);else if(Fp(a,e,t,r,s))s.stopPropagation();else if(Fo(e,s),t&4&&-1<Vp.indexOf(e)){for(;a!==null;){var i=as(a);if(i!==null&&$d(i),i=_i(e,t,r,s),i===null&&Ya(e,t,s,Qs,r),i===a)break;a=i}a!==null&&s.stopPropagation()}else Ya(e,t,s,null,r)}}var Qs=null;function _i(e,t,r,s){if(Qs=null,e=zl(s),e=ct(e),e!==null)if(t=kt(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Id(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Qs=e,null}function Kd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Lp()){case Ml:return 1;case Ad:return 4;case Ks:case Pp:return 16;case Vd:return 536870912;default:return 16}default:return 16}}var Fn=null,Dl=null,_s=null;function Wd(){if(_s)return _s;var e,t=Dl,r=t.length,s,a="value"in Fn?Fn.value:Fn.textContent,i=a.length;for(e=0;e<r&&t[e]===a[e];e++);var l=r-e;for(s=1;s<=l&&t[r-s]===a[i-s];s++);return _s=a.slice(e,1<s?1-s:void 0)}function zs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ys(){return!0}function $o(){return!1}function tn(e){function t(r,s,a,i,l){this._reactName=r,this._targetInst=a,this.type=s,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(r=e[o],this[o]=r?r(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ys:$o,this.isPropagationStopped=$o,this}return pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ys)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ys)},persist:function(){},isPersistent:ys}),t}var ir={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$l=tn(ir),ss=pe({},ir,{view:0,detail:0}),Hp=tn(ss),$a,Ba,pr,ya=pe({},ss,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==pr&&(pr&&e.type==="mousemove"?($a=e.screenX-pr.screenX,Ba=e.screenY-pr.screenY):Ba=$a=0,pr=e),$a)},movementY:function(e){return"movementY"in e?e.movementY:Ba}}),Bo=tn(ya),qp=pe({},ya,{dataTransfer:0}),Up=tn(qp),Kp=pe({},ss,{relatedTarget:0}),Ha=tn(Kp),Wp=pe({},ir,{animationName:0,elapsedTime:0,pseudoElement:0}),Gp=tn(Wp),Qp=pe({},ir,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Yp=tn(Qp),Xp=pe({},ir,{data:0}),Ho=tn(Xp),Jp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ef={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ef[e])?!!t[e]:!1}function Bl(){return nf}var tf=pe({},ss,{key:function(e){if(e.key){var t=Jp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=zs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Zp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bl,charCode:function(e){return e.type==="keypress"?zs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),rf=tn(tf),sf=pe({},ya,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qo=tn(sf),af=pe({},ss,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bl}),lf=tn(af),of=pe({},ir,{propertyName:0,elapsedTime:0,pseudoElement:0}),cf=tn(of),df=pe({},ya,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),uf=tn(df),hf=[9,13,27,32],Hl=Tn&&"CompositionEvent"in window,Sr=null;Tn&&"documentMode"in document&&(Sr=document.documentMode);var pf=Tn&&"TextEvent"in window&&!Sr,Gd=Tn&&(!Hl||Sr&&8<Sr&&11>=Sr),Uo=" ",Ko=!1;function Qd(e,t){switch(e){case"keyup":return hf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pt=!1;function ff(e,t){switch(e){case"compositionend":return Yd(t);case"keypress":return t.which!==32?null:(Ko=!0,Uo);case"textInput":return e=t.data,e===Uo&&Ko?null:e;default:return null}}function mf(e,t){if(Pt)return e==="compositionend"||!Hl&&Qd(e,t)?(e=Wd(),_s=Dl=Fn=null,Pt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Gd&&t.locale!=="ko"?null:t.data;default:return null}}var gf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!gf[e.type]:t==="textarea"}function Xd(e,t,r,s){Ed(s),t=Ys(t,"onChange"),0<t.length&&(r=new $l("onChange","change",null,r,s),e.push({event:r,listeners:t}))}var Cr=null,$r=null;function vf(e){ou(e,0)}function ja(e){var t=It(e);if(Nd(t))return e}function xf(e,t){if(e==="change")return t}var Jd=!1;if(Tn){var qa;if(Tn){var Ua="oninput"in document;if(!Ua){var Go=document.createElement("div");Go.setAttribute("oninput","return;"),Ua=typeof Go.oninput=="function"}qa=Ua}else qa=!1;Jd=qa&&(!document.documentMode||9<document.documentMode)}function Qo(){Cr&&(Cr.detachEvent("onpropertychange",Zd),$r=Cr=null)}function Zd(e){if(e.propertyName==="value"&&ja($r)){var t=[];Xd(t,$r,e,zl(e)),Rd(vf,t)}}function yf(e,t,r){e==="focusin"?(Qo(),Cr=t,$r=r,Cr.attachEvent("onpropertychange",Zd)):e==="focusout"&&Qo()}function jf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ja($r)}function Nf(e,t){if(e==="click")return ja(t)}function kf(e,t){if(e==="input"||e==="change")return ja(t)}function bf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gn=typeof Object.is=="function"?Object.is:bf;function Br(e,t){if(gn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(s=0;s<r.length;s++){var a=r[s];if(!gi.call(t,a)||!gn(e[a],t[a]))return!1}return!0}function Yo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xo(e,t){var r=Yo(e);e=0;for(var s;r;){if(r.nodeType===3){if(s=e+r.textContent.length,e<=t&&s>=t)return{node:r,offset:t-e};e=s}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Yo(r)}}function eu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?eu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function nu(){for(var e=window,t=Hs();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Hs(e.document)}return t}function ql(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function wf(e){var t=nu(),r=e.focusedElem,s=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&eu(r.ownerDocument.documentElement,r)){if(s!==null&&ql(r)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=r.textContent.length,i=Math.min(s.start,a);s=s.end===void 0?i:Math.min(s.end,a),!e.extend&&i>s&&(a=s,s=i,i=a),a=Xo(r,i);var l=Xo(r,s);a&&l&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),i>s?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Sf=Tn&&"documentMode"in document&&11>=document.documentMode,Ot=null,zi=null,Tr=null,Mi=!1;function Jo(e,t,r){var s=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Mi||Ot==null||Ot!==Hs(s)||(s=Ot,"selectionStart"in s&&ql(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Tr&&Br(Tr,s)||(Tr=s,s=Ys(zi,"onSelect"),0<s.length&&(t=new $l("onSelect","select",null,t,r),e.push({event:t,listeners:s}),t.target=Ot)))}function js(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Rt={animationend:js("Animation","AnimationEnd"),animationiteration:js("Animation","AnimationIteration"),animationstart:js("Animation","AnimationStart"),transitionend:js("Transition","TransitionEnd")},Ka={},tu={};Tn&&(tu=document.createElement("div").style,"AnimationEvent"in window||(delete Rt.animationend.animation,delete Rt.animationiteration.animation,delete Rt.animationstart.animation),"TransitionEvent"in window||delete Rt.transitionend.transition);function Na(e){if(Ka[e])return Ka[e];if(!Rt[e])return e;var t=Rt[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in tu)return Ka[e]=t[r];return e}var ru=Na("animationend"),su=Na("animationiteration"),au=Na("animationstart"),iu=Na("transitionend"),lu=new Map,Zo="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nt(e,t){lu.set(e,t),Nt(t,[e])}for(var Wa=0;Wa<Zo.length;Wa++){var Ga=Zo[Wa],Cf=Ga.toLowerCase(),Tf=Ga[0].toUpperCase()+Ga.slice(1);nt(Cf,"on"+Tf)}nt(ru,"onAnimationEnd");nt(su,"onAnimationIteration");nt(au,"onAnimationStart");nt("dblclick","onDoubleClick");nt("focusin","onFocus");nt("focusout","onBlur");nt(iu,"onTransitionEnd");Jt("onMouseEnter",["mouseout","mouseover"]);Jt("onMouseLeave",["mouseout","mouseover"]);Jt("onPointerEnter",["pointerout","pointerover"]);Jt("onPointerLeave",["pointerout","pointerover"]);Nt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Nt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Nt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Nt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Nt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Nt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ef=new Set("cancel close invalid load scroll toggle".split(" ").concat(jr));function ec(e,t,r){var s=e.type||"unknown-event";e.currentTarget=r,Sp(s,t,void 0,e),e.currentTarget=null}function ou(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var s=e[r],a=s.event;s=s.listeners;e:{var i=void 0;if(t)for(var l=s.length-1;0<=l;l--){var o=s[l],c=o.instance,h=o.currentTarget;if(o=o.listener,c!==i&&a.isPropagationStopped())break e;ec(a,o,h),i=c}else for(l=0;l<s.length;l++){if(o=s[l],c=o.instance,h=o.currentTarget,o=o.listener,c!==i&&a.isPropagationStopped())break e;ec(a,o,h),i=c}}}if(Us)throw e=Oi,Us=!1,Oi=null,e}function oe(e,t){var r=t[$i];r===void 0&&(r=t[$i]=new Set);var s=e+"__bubble";r.has(s)||(cu(t,e,2,!1),r.add(s))}function Qa(e,t,r){var s=0;t&&(s|=4),cu(r,e,s,t)}var Ns="_reactListening"+Math.random().toString(36).slice(2);function Hr(e){if(!e[Ns]){e[Ns]=!0,gd.forEach(function(r){r!=="selectionchange"&&(Ef.has(r)||Qa(r,!1,e),Qa(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ns]||(t[Ns]=!0,Qa("selectionchange",!1,t))}}function cu(e,t,r,s){switch(Kd(t)){case 1:var a=$p;break;case 4:a=Bp;break;default:a=Fl}r=a.bind(null,t,r,e),a=void 0,!Pi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),s?a!==void 0?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):a!==void 0?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function Ya(e,t,r,s,a){var i=s;if(!(t&1)&&!(t&2)&&s!==null)e:for(;;){if(s===null)return;var l=s.tag;if(l===3||l===4){var o=s.stateNode.containerInfo;if(o===a||o.nodeType===8&&o.parentNode===a)break;if(l===4)for(l=s.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;l=l.return}for(;o!==null;){if(l=ct(o),l===null)return;if(c=l.tag,c===5||c===6){s=i=l;continue e}o=o.parentNode}}s=s.return}Rd(function(){var h=i,d=zl(r),p=[];e:{var m=lu.get(e);if(m!==void 0){var S=$l,w=e;switch(e){case"keypress":if(zs(r)===0)break e;case"keydown":case"keyup":S=rf;break;case"focusin":w="focus",S=Ha;break;case"focusout":w="blur",S=Ha;break;case"beforeblur":case"afterblur":S=Ha;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Bo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=Up;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=lf;break;case ru:case su:case au:S=Gp;break;case iu:S=cf;break;case"scroll":S=Hp;break;case"wheel":S=uf;break;case"copy":case"cut":case"paste":S=Yp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=qo}var N=(t&4)!==0,x=!N&&e==="scroll",f=N?m!==null?m+"Capture":null:m;N=[];for(var g=h,v;g!==null;){v=g;var P=v.stateNode;if(v.tag===5&&P!==null&&(v=P,f!==null&&(P=Ar(g,f),P!=null&&N.push(qr(g,P,v)))),x)break;g=g.return}0<N.length&&(m=new S(m,w,null,r,d),p.push({event:m,listeners:N}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",m&&r!==Ei&&(w=r.relatedTarget||r.fromElement)&&(ct(w)||w[En]))break e;if((S||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,S?(w=r.relatedTarget||r.toElement,S=h,w=w?ct(w):null,w!==null&&(x=kt(w),w!==x||w.tag!==5&&w.tag!==6)&&(w=null)):(S=null,w=h),S!==w)){if(N=Bo,P="onMouseLeave",f="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(N=qo,P="onPointerLeave",f="onPointerEnter",g="pointer"),x=S==null?m:It(S),v=w==null?m:It(w),m=new N(P,g+"leave",S,r,d),m.target=x,m.relatedTarget=v,P=null,ct(d)===h&&(N=new N(f,g+"enter",w,r,d),N.target=v,N.relatedTarget=x,P=N),x=P,S&&w)n:{for(N=S,f=w,g=0,v=N;v;v=Ct(v))g++;for(v=0,P=f;P;P=Ct(P))v++;for(;0<g-v;)N=Ct(N),g--;for(;0<v-g;)f=Ct(f),v--;for(;g--;){if(N===f||f!==null&&N===f.alternate)break n;N=Ct(N),f=Ct(f)}N=null}else N=null;S!==null&&nc(p,m,S,N,!1),w!==null&&x!==null&&nc(p,x,w,N,!0)}}e:{if(m=h?It(h):window,S=m.nodeName&&m.nodeName.toLowerCase(),S==="select"||S==="input"&&m.type==="file")var k=xf;else if(Wo(m))if(Jd)k=kf;else{k=jf;var V=yf}else(S=m.nodeName)&&S.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(k=Nf);if(k&&(k=k(e,h))){Xd(p,k,r,d);break e}V&&V(e,m,h),e==="focusout"&&(V=m._wrapperState)&&V.controlled&&m.type==="number"&&bi(m,"number",m.value)}switch(V=h?It(h):window,e){case"focusin":(Wo(V)||V.contentEditable==="true")&&(Ot=V,zi=h,Tr=null);break;case"focusout":Tr=zi=Ot=null;break;case"mousedown":Mi=!0;break;case"contextmenu":case"mouseup":case"dragend":Mi=!1,Jo(p,r,d);break;case"selectionchange":if(Sf)break;case"keydown":case"keyup":Jo(p,r,d)}var T;if(Hl)e:{switch(e){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else Pt?Qd(e,r)&&(D="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(D="onCompositionStart");D&&(Gd&&r.locale!=="ko"&&(Pt||D!=="onCompositionStart"?D==="onCompositionEnd"&&Pt&&(T=Wd()):(Fn=d,Dl="value"in Fn?Fn.value:Fn.textContent,Pt=!0)),V=Ys(h,D),0<V.length&&(D=new Ho(D,e,null,r,d),p.push({event:D,listeners:V}),T?D.data=T:(T=Yd(r),T!==null&&(D.data=T)))),(T=pf?ff(e,r):mf(e,r))&&(h=Ys(h,"onBeforeInput"),0<h.length&&(d=new Ho("onBeforeInput","beforeinput",null,r,d),p.push({event:d,listeners:h}),d.data=T))}ou(p,t)})}function qr(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Ys(e,t){for(var r=t+"Capture",s=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=Ar(e,r),i!=null&&s.unshift(qr(e,i,a)),i=Ar(e,t),i!=null&&s.push(qr(e,i,a))),e=e.return}return s}function Ct(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function nc(e,t,r,s,a){for(var i=t._reactName,l=[];r!==null&&r!==s;){var o=r,c=o.alternate,h=o.stateNode;if(c!==null&&c===s)break;o.tag===5&&h!==null&&(o=h,a?(c=Ar(r,i),c!=null&&l.unshift(qr(r,c,o))):a||(c=Ar(r,i),c!=null&&l.push(qr(r,c,o)))),r=r.return}l.length!==0&&e.push({event:t,listeners:l})}var Lf=/\r\n?/g,Pf=/\u0000|\uFFFD/g;function tc(e){return(typeof e=="string"?e:""+e).replace(Lf,`
`).replace(Pf,"")}function ks(e,t,r){if(t=tc(t),tc(e)!==t&&r)throw Error(U(425))}function Xs(){}var Ai=null,Vi=null;function Fi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Di=typeof setTimeout=="function"?setTimeout:void 0,Of=typeof clearTimeout=="function"?clearTimeout:void 0,rc=typeof Promise=="function"?Promise:void 0,Rf=typeof queueMicrotask=="function"?queueMicrotask:typeof rc<"u"?function(e){return rc.resolve(null).then(e).catch(If)}:Di;function If(e){setTimeout(function(){throw e})}function Xa(e,t){var r=t,s=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(s===0){e.removeChild(a),Dr(t);return}s--}else r!=="$"&&r!=="$?"&&r!=="$!"||s++;r=a}while(r);Dr(t)}function Kn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function sc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var lr=Math.random().toString(36).slice(2),yn="__reactFiber$"+lr,Ur="__reactProps$"+lr,En="__reactContainer$"+lr,$i="__reactEvents$"+lr,_f="__reactListeners$"+lr,zf="__reactHandles$"+lr;function ct(e){var t=e[yn];if(t)return t;for(var r=e.parentNode;r;){if(t=r[En]||r[yn]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=sc(e);e!==null;){if(r=e[yn])return r;e=sc(e)}return t}e=r,r=e.parentNode}return null}function as(e){return e=e[yn]||e[En],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function It(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(U(33))}function ka(e){return e[Ur]||null}var Bi=[],_t=-1;function tt(e){return{current:e}}function ce(e){0>_t||(e.current=Bi[_t],Bi[_t]=null,_t--)}function le(e,t){_t++,Bi[_t]=e.current,e.current=t}var et={},Me=tt(et),Ke=tt(!1),gt=et;function Zt(e,t){var r=e.type.contextTypes;if(!r)return et;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in r)a[i]=t[i];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function We(e){return e=e.childContextTypes,e!=null}function Js(){ce(Ke),ce(Me)}function ac(e,t,r){if(Me.current!==et)throw Error(U(168));le(Me,t),le(Ke,r)}function du(e,t,r){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return r;s=s.getChildContext();for(var a in s)if(!(a in t))throw Error(U(108,xp(e)||"Unknown",a));return pe({},r,s)}function Zs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||et,gt=Me.current,le(Me,e),le(Ke,Ke.current),!0}function ic(e,t,r){var s=e.stateNode;if(!s)throw Error(U(169));r?(e=du(e,t,gt),s.__reactInternalMemoizedMergedChildContext=e,ce(Ke),ce(Me),le(Me,e)):ce(Ke),le(Ke,r)}var bn=null,ba=!1,Ja=!1;function uu(e){bn===null?bn=[e]:bn.push(e)}function Mf(e){ba=!0,uu(e)}function rt(){if(!Ja&&bn!==null){Ja=!0;var e=0,t=se;try{var r=bn;for(se=1;e<r.length;e++){var s=r[e];do s=s(!0);while(s!==null)}bn=null,ba=!1}catch(a){throw bn!==null&&(bn=bn.slice(e+1)),Md(Ml,rt),a}finally{se=t,Ja=!1}}return null}var zt=[],Mt=0,ea=null,na=0,rn=[],sn=0,vt=null,wn=1,Sn="";function lt(e,t){zt[Mt++]=na,zt[Mt++]=ea,ea=e,na=t}function hu(e,t,r){rn[sn++]=wn,rn[sn++]=Sn,rn[sn++]=vt,vt=e;var s=wn;e=Sn;var a=32-fn(s)-1;s&=~(1<<a),r+=1;var i=32-fn(t)+a;if(30<i){var l=a-a%5;i=(s&(1<<l)-1).toString(32),s>>=l,a-=l,wn=1<<32-fn(t)+a|r<<a|s,Sn=i+e}else wn=1<<i|r<<a|s,Sn=e}function Ul(e){e.return!==null&&(lt(e,1),hu(e,1,0))}function Kl(e){for(;e===ea;)ea=zt[--Mt],zt[Mt]=null,na=zt[--Mt],zt[Mt]=null;for(;e===vt;)vt=rn[--sn],rn[sn]=null,Sn=rn[--sn],rn[sn]=null,wn=rn[--sn],rn[sn]=null}var Ze=null,Xe=null,de=!1,pn=null;function pu(e,t){var r=an(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function lc(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ze=e,Xe=Kn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ze=e,Xe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=vt!==null?{id:wn,overflow:Sn}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=an(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Ze=e,Xe=null,!0):!1;default:return!1}}function Hi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function qi(e){if(de){var t=Xe;if(t){var r=t;if(!lc(e,t)){if(Hi(e))throw Error(U(418));t=Kn(r.nextSibling);var s=Ze;t&&lc(e,t)?pu(s,r):(e.flags=e.flags&-4097|2,de=!1,Ze=e)}}else{if(Hi(e))throw Error(U(418));e.flags=e.flags&-4097|2,de=!1,Ze=e}}}function oc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ze=e}function bs(e){if(e!==Ze)return!1;if(!de)return oc(e),de=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Fi(e.type,e.memoizedProps)),t&&(t=Xe)){if(Hi(e))throw fu(),Error(U(418));for(;t;)pu(e,t),t=Kn(t.nextSibling)}if(oc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(U(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Xe=Kn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Xe=null}}else Xe=Ze?Kn(e.stateNode.nextSibling):null;return!0}function fu(){for(var e=Xe;e;)e=Kn(e.nextSibling)}function er(){Xe=Ze=null,de=!1}function Wl(e){pn===null?pn=[e]:pn.push(e)}var Af=Rn.ReactCurrentBatchConfig;function fr(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(U(309));var s=r.stateNode}if(!s)throw Error(U(147,e));var a=s,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var o=a.refs;l===null?delete o[i]:o[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(U(284));if(!r._owner)throw Error(U(290,e))}return e}function ws(e,t){throw e=Object.prototype.toString.call(t),Error(U(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function cc(e){var t=e._init;return t(e._payload)}function mu(e){function t(f,g){if(e){var v=f.deletions;v===null?(f.deletions=[g],f.flags|=16):v.push(g)}}function r(f,g){if(!e)return null;for(;g!==null;)t(f,g),g=g.sibling;return null}function s(f,g){for(f=new Map;g!==null;)g.key!==null?f.set(g.key,g):f.set(g.index,g),g=g.sibling;return f}function a(f,g){return f=Yn(f,g),f.index=0,f.sibling=null,f}function i(f,g,v){return f.index=v,e?(v=f.alternate,v!==null?(v=v.index,v<g?(f.flags|=2,g):v):(f.flags|=2,g)):(f.flags|=1048576,g)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function o(f,g,v,P){return g===null||g.tag!==6?(g=ai(v,f.mode,P),g.return=f,g):(g=a(g,v),g.return=f,g)}function c(f,g,v,P){var k=v.type;return k===Lt?d(f,g,v.props.children,P,v.key):g!==null&&(g.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===zn&&cc(k)===g.type)?(P=a(g,v.props),P.ref=fr(f,g,v),P.return=f,P):(P=Bs(v.type,v.key,v.props,null,f.mode,P),P.ref=fr(f,g,v),P.return=f,P)}function h(f,g,v,P){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=ii(v,f.mode,P),g.return=f,g):(g=a(g,v.children||[]),g.return=f,g)}function d(f,g,v,P,k){return g===null||g.tag!==7?(g=mt(v,f.mode,P,k),g.return=f,g):(g=a(g,v),g.return=f,g)}function p(f,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=ai(""+g,f.mode,v),g.return=f,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ps:return v=Bs(g.type,g.key,g.props,null,f.mode,v),v.ref=fr(f,null,g),v.return=f,v;case Et:return g=ii(g,f.mode,v),g.return=f,g;case zn:var P=g._init;return p(f,P(g._payload),v)}if(xr(g)||cr(g))return g=mt(g,f.mode,v,null),g.return=f,g;ws(f,g)}return null}function m(f,g,v,P){var k=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return k!==null?null:o(f,g,""+v,P);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ps:return v.key===k?c(f,g,v,P):null;case Et:return v.key===k?h(f,g,v,P):null;case zn:return k=v._init,m(f,g,k(v._payload),P)}if(xr(v)||cr(v))return k!==null?null:d(f,g,v,P,null);ws(f,v)}return null}function S(f,g,v,P,k){if(typeof P=="string"&&P!==""||typeof P=="number")return f=f.get(v)||null,o(g,f,""+P,k);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case ps:return f=f.get(P.key===null?v:P.key)||null,c(g,f,P,k);case Et:return f=f.get(P.key===null?v:P.key)||null,h(g,f,P,k);case zn:var V=P._init;return S(f,g,v,V(P._payload),k)}if(xr(P)||cr(P))return f=f.get(v)||null,d(g,f,P,k,null);ws(g,P)}return null}function w(f,g,v,P){for(var k=null,V=null,T=g,D=g=0,F=null;T!==null&&D<v.length;D++){T.index>D?(F=T,T=null):F=T.sibling;var I=m(f,T,v[D],P);if(I===null){T===null&&(T=F);break}e&&T&&I.alternate===null&&t(f,T),g=i(I,g,D),V===null?k=I:V.sibling=I,V=I,T=F}if(D===v.length)return r(f,T),de&&lt(f,D),k;if(T===null){for(;D<v.length;D++)T=p(f,v[D],P),T!==null&&(g=i(T,g,D),V===null?k=T:V.sibling=T,V=T);return de&&lt(f,D),k}for(T=s(f,T);D<v.length;D++)F=S(T,f,D,v[D],P),F!==null&&(e&&F.alternate!==null&&T.delete(F.key===null?D:F.key),g=i(F,g,D),V===null?k=F:V.sibling=F,V=F);return e&&T.forEach(function(H){return t(f,H)}),de&&lt(f,D),k}function N(f,g,v,P){var k=cr(v);if(typeof k!="function")throw Error(U(150));if(v=k.call(v),v==null)throw Error(U(151));for(var V=k=null,T=g,D=g=0,F=null,I=v.next();T!==null&&!I.done;D++,I=v.next()){T.index>D?(F=T,T=null):F=T.sibling;var H=m(f,T,I.value,P);if(H===null){T===null&&(T=F);break}e&&T&&H.alternate===null&&t(f,T),g=i(H,g,D),V===null?k=H:V.sibling=H,V=H,T=F}if(I.done)return r(f,T),de&&lt(f,D),k;if(T===null){for(;!I.done;D++,I=v.next())I=p(f,I.value,P),I!==null&&(g=i(I,g,D),V===null?k=I:V.sibling=I,V=I);return de&&lt(f,D),k}for(T=s(f,T);!I.done;D++,I=v.next())I=S(T,f,D,I.value,P),I!==null&&(e&&I.alternate!==null&&T.delete(I.key===null?D:I.key),g=i(I,g,D),V===null?k=I:V.sibling=I,V=I);return e&&T.forEach(function(K){return t(f,K)}),de&&lt(f,D),k}function x(f,g,v,P){if(typeof v=="object"&&v!==null&&v.type===Lt&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ps:e:{for(var k=v.key,V=g;V!==null;){if(V.key===k){if(k=v.type,k===Lt){if(V.tag===7){r(f,V.sibling),g=a(V,v.props.children),g.return=f,f=g;break e}}else if(V.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===zn&&cc(k)===V.type){r(f,V.sibling),g=a(V,v.props),g.ref=fr(f,V,v),g.return=f,f=g;break e}r(f,V);break}else t(f,V);V=V.sibling}v.type===Lt?(g=mt(v.props.children,f.mode,P,v.key),g.return=f,f=g):(P=Bs(v.type,v.key,v.props,null,f.mode,P),P.ref=fr(f,g,v),P.return=f,f=P)}return l(f);case Et:e:{for(V=v.key;g!==null;){if(g.key===V)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){r(f,g.sibling),g=a(g,v.children||[]),g.return=f,f=g;break e}else{r(f,g);break}else t(f,g);g=g.sibling}g=ii(v,f.mode,P),g.return=f,f=g}return l(f);case zn:return V=v._init,x(f,g,V(v._payload),P)}if(xr(v))return w(f,g,v,P);if(cr(v))return N(f,g,v,P);ws(f,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(r(f,g.sibling),g=a(g,v),g.return=f,f=g):(r(f,g),g=ai(v,f.mode,P),g.return=f,f=g),l(f)):r(f,g)}return x}var nr=mu(!0),gu=mu(!1),ta=tt(null),ra=null,At=null,Gl=null;function Ql(){Gl=At=ra=null}function Yl(e){var t=ta.current;ce(ta),e._currentValue=t}function Ui(e,t,r){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===r)break;e=e.return}}function Qt(e,t){ra=e,Gl=At=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ue=!0),e.firstContext=null)}function on(e){var t=e._currentValue;if(Gl!==e)if(e={context:e,memoizedValue:t,next:null},At===null){if(ra===null)throw Error(U(308));At=e,ra.dependencies={lanes:0,firstContext:e}}else At=At.next=e;return t}var dt=null;function Xl(e){dt===null?dt=[e]:dt.push(e)}function vu(e,t,r,s){var a=t.interleaved;return a===null?(r.next=r,Xl(t)):(r.next=a.next,a.next=r),t.interleaved=r,Ln(e,s)}function Ln(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Mn=!1;function Jl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Cn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Wn(e,t,r){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,ne&2){var a=s.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),s.pending=t,Ln(e,r)}return a=s.interleaved,a===null?(t.next=t,Xl(s)):(t.next=a.next,a.next=t),s.interleaved=t,Ln(e,r)}function Ms(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,Al(e,r)}}function dc(e,t){var r=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,r===s)){var a=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var l={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?a=i=l:i=i.next=l,r=r.next}while(r!==null);i===null?a=i=t:i=i.next=t}else a=i=t;r={baseState:s.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:s.shared,effects:s.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function sa(e,t,r,s){var a=e.updateQueue;Mn=!1;var i=a.firstBaseUpdate,l=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var c=o,h=c.next;c.next=null,l===null?i=h:l.next=h,l=c;var d=e.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==l&&(o===null?d.firstBaseUpdate=h:o.next=h,d.lastBaseUpdate=c))}if(i!==null){var p=a.baseState;l=0,d=h=c=null,o=i;do{var m=o.lane,S=o.eventTime;if((s&m)===m){d!==null&&(d=d.next={eventTime:S,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var w=e,N=o;switch(m=t,S=r,N.tag){case 1:if(w=N.payload,typeof w=="function"){p=w.call(S,p,m);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=N.payload,m=typeof w=="function"?w.call(S,p,m):w,m==null)break e;p=pe({},p,m);break e;case 2:Mn=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,m=a.effects,m===null?a.effects=[o]:m.push(o))}else S={eventTime:S,lane:m,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(h=d=S,c=p):d=d.next=S,l|=m;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;m=o,o=m.next,m.next=null,a.lastBaseUpdate=m,a.shared.pending=null}}while(!0);if(d===null&&(c=p),a.baseState=c,a.firstBaseUpdate=h,a.lastBaseUpdate=d,t=a.shared.interleaved,t!==null){a=t;do l|=a.lane,a=a.next;while(a!==t)}else i===null&&(a.shared.lanes=0);yt|=l,e.lanes=l,e.memoizedState=p}}function uc(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],a=s.callback;if(a!==null){if(s.callback=null,s=r,typeof a!="function")throw Error(U(191,a));a.call(s)}}}var is={},Nn=tt(is),Kr=tt(is),Wr=tt(is);function ut(e){if(e===is)throw Error(U(174));return e}function Zl(e,t){switch(le(Wr,t),le(Kr,e),le(Nn,is),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Si(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Si(t,e)}ce(Nn),le(Nn,t)}function tr(){ce(Nn),ce(Kr),ce(Wr)}function yu(e){ut(Wr.current);var t=ut(Nn.current),r=Si(t,e.type);t!==r&&(le(Kr,e),le(Nn,r))}function eo(e){Kr.current===e&&(ce(Nn),ce(Kr))}var ue=tt(0);function aa(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Za=[];function no(){for(var e=0;e<Za.length;e++)Za[e]._workInProgressVersionPrimary=null;Za.length=0}var As=Rn.ReactCurrentDispatcher,ei=Rn.ReactCurrentBatchConfig,xt=0,he=null,ke=null,we=null,ia=!1,Er=!1,Gr=0,Vf=0;function Re(){throw Error(U(321))}function to(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!gn(e[r],t[r]))return!1;return!0}function ro(e,t,r,s,a,i){if(xt=i,he=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,As.current=e===null||e.memoizedState===null?Bf:Hf,e=r(s,a),Er){i=0;do{if(Er=!1,Gr=0,25<=i)throw Error(U(301));i+=1,we=ke=null,t.updateQueue=null,As.current=qf,e=r(s,a)}while(Er)}if(As.current=la,t=ke!==null&&ke.next!==null,xt=0,we=ke=he=null,ia=!1,t)throw Error(U(300));return e}function so(){var e=Gr!==0;return Gr=0,e}function xn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?he.memoizedState=we=e:we=we.next=e,we}function cn(){if(ke===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var t=we===null?he.memoizedState:we.next;if(t!==null)we=t,ke=e;else{if(e===null)throw Error(U(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},we===null?he.memoizedState=we=e:we=we.next=e}return we}function Qr(e,t){return typeof t=="function"?t(e):t}function ni(e){var t=cn(),r=t.queue;if(r===null)throw Error(U(311));r.lastRenderedReducer=e;var s=ke,a=s.baseQueue,i=r.pending;if(i!==null){if(a!==null){var l=a.next;a.next=i.next,i.next=l}s.baseQueue=a=i,r.pending=null}if(a!==null){i=a.next,s=s.baseState;var o=l=null,c=null,h=i;do{var d=h.lane;if((xt&d)===d)c!==null&&(c=c.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),s=h.hasEagerState?h.eagerState:e(s,h.action);else{var p={lane:d,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};c===null?(o=c=p,l=s):c=c.next=p,he.lanes|=d,yt|=d}h=h.next}while(h!==null&&h!==i);c===null?l=s:c.next=o,gn(s,t.memoizedState)||(Ue=!0),t.memoizedState=s,t.baseState=l,t.baseQueue=c,r.lastRenderedState=s}if(e=r.interleaved,e!==null){a=e;do i=a.lane,he.lanes|=i,yt|=i,a=a.next;while(a!==e)}else a===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function ti(e){var t=cn(),r=t.queue;if(r===null)throw Error(U(311));r.lastRenderedReducer=e;var s=r.dispatch,a=r.pending,i=t.memoizedState;if(a!==null){r.pending=null;var l=a=a.next;do i=e(i,l.action),l=l.next;while(l!==a);gn(i,t.memoizedState)||(Ue=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),r.lastRenderedState=i}return[i,s]}function ju(){}function Nu(e,t){var r=he,s=cn(),a=t(),i=!gn(s.memoizedState,a);if(i&&(s.memoizedState=a,Ue=!0),s=s.queue,ao(wu.bind(null,r,s,e),[e]),s.getSnapshot!==t||i||we!==null&&we.memoizedState.tag&1){if(r.flags|=2048,Yr(9,bu.bind(null,r,s,a,t),void 0,null),Se===null)throw Error(U(349));xt&30||ku(r,t,a)}return a}function ku(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=he.updateQueue,t===null?(t={lastEffect:null,stores:null},he.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function bu(e,t,r,s){t.value=r,t.getSnapshot=s,Su(t)&&Cu(e)}function wu(e,t,r){return r(function(){Su(t)&&Cu(e)})}function Su(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!gn(e,r)}catch{return!0}}function Cu(e){var t=Ln(e,1);t!==null&&mn(t,e,1,-1)}function hc(e){var t=xn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qr,lastRenderedState:e},t.queue=e,e=e.dispatch=$f.bind(null,he,e),[t.memoizedState,e]}function Yr(e,t,r,s){return e={tag:e,create:t,destroy:r,deps:s,next:null},t=he.updateQueue,t===null?(t={lastEffect:null,stores:null},he.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(s=r.next,r.next=e,e.next=s,t.lastEffect=e)),e}function Tu(){return cn().memoizedState}function Vs(e,t,r,s){var a=xn();he.flags|=e,a.memoizedState=Yr(1|t,r,void 0,s===void 0?null:s)}function wa(e,t,r,s){var a=cn();s=s===void 0?null:s;var i=void 0;if(ke!==null){var l=ke.memoizedState;if(i=l.destroy,s!==null&&to(s,l.deps)){a.memoizedState=Yr(t,r,i,s);return}}he.flags|=e,a.memoizedState=Yr(1|t,r,i,s)}function pc(e,t){return Vs(8390656,8,e,t)}function ao(e,t){return wa(2048,8,e,t)}function Eu(e,t){return wa(4,2,e,t)}function Lu(e,t){return wa(4,4,e,t)}function Pu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ou(e,t,r){return r=r!=null?r.concat([e]):null,wa(4,4,Pu.bind(null,t,e),r)}function io(){}function Ru(e,t){var r=cn();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&to(t,s[1])?s[0]:(r.memoizedState=[e,t],e)}function Iu(e,t){var r=cn();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&to(t,s[1])?s[0]:(e=e(),r.memoizedState=[e,t],e)}function _u(e,t,r){return xt&21?(gn(r,t)||(r=Fd(),he.lanes|=r,yt|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ue=!0),e.memoizedState=r)}function Ff(e,t){var r=se;se=r!==0&&4>r?r:4,e(!0);var s=ei.transition;ei.transition={};try{e(!1),t()}finally{se=r,ei.transition=s}}function zu(){return cn().memoizedState}function Df(e,t,r){var s=Qn(e);if(r={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null},Mu(e))Au(t,r);else if(r=vu(e,t,r,s),r!==null){var a=Fe();mn(r,e,s,a),Vu(r,t,s)}}function $f(e,t,r){var s=Qn(e),a={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null};if(Mu(e))Au(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,o=i(l,r);if(a.hasEagerState=!0,a.eagerState=o,gn(o,l)){var c=t.interleaved;c===null?(a.next=a,Xl(t)):(a.next=c.next,c.next=a),t.interleaved=a;return}}catch{}finally{}r=vu(e,t,a,s),r!==null&&(a=Fe(),mn(r,e,s,a),Vu(r,t,s))}}function Mu(e){var t=e.alternate;return e===he||t!==null&&t===he}function Au(e,t){Er=ia=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Vu(e,t,r){if(r&4194240){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,Al(e,r)}}var la={readContext:on,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useInsertionEffect:Re,useLayoutEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useMutableSource:Re,useSyncExternalStore:Re,useId:Re,unstable_isNewReconciler:!1},Bf={readContext:on,useCallback:function(e,t){return xn().memoizedState=[e,t===void 0?null:t],e},useContext:on,useEffect:pc,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Vs(4194308,4,Pu.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Vs(4194308,4,e,t)},useInsertionEffect:function(e,t){return Vs(4,2,e,t)},useMemo:function(e,t){var r=xn();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var s=xn();return t=r!==void 0?r(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=Df.bind(null,he,e),[s.memoizedState,e]},useRef:function(e){var t=xn();return e={current:e},t.memoizedState=e},useState:hc,useDebugValue:io,useDeferredValue:function(e){return xn().memoizedState=e},useTransition:function(){var e=hc(!1),t=e[0];return e=Ff.bind(null,e[1]),xn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var s=he,a=xn();if(de){if(r===void 0)throw Error(U(407));r=r()}else{if(r=t(),Se===null)throw Error(U(349));xt&30||ku(s,t,r)}a.memoizedState=r;var i={value:r,getSnapshot:t};return a.queue=i,pc(wu.bind(null,s,i,e),[e]),s.flags|=2048,Yr(9,bu.bind(null,s,i,r,t),void 0,null),r},useId:function(){var e=xn(),t=Se.identifierPrefix;if(de){var r=Sn,s=wn;r=(s&~(1<<32-fn(s)-1)).toString(32)+r,t=":"+t+"R"+r,r=Gr++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Vf++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Hf={readContext:on,useCallback:Ru,useContext:on,useEffect:ao,useImperativeHandle:Ou,useInsertionEffect:Eu,useLayoutEffect:Lu,useMemo:Iu,useReducer:ni,useRef:Tu,useState:function(){return ni(Qr)},useDebugValue:io,useDeferredValue:function(e){var t=cn();return _u(t,ke.memoizedState,e)},useTransition:function(){var e=ni(Qr)[0],t=cn().memoizedState;return[e,t]},useMutableSource:ju,useSyncExternalStore:Nu,useId:zu,unstable_isNewReconciler:!1},qf={readContext:on,useCallback:Ru,useContext:on,useEffect:ao,useImperativeHandle:Ou,useInsertionEffect:Eu,useLayoutEffect:Lu,useMemo:Iu,useReducer:ti,useRef:Tu,useState:function(){return ti(Qr)},useDebugValue:io,useDeferredValue:function(e){var t=cn();return ke===null?t.memoizedState=e:_u(t,ke.memoizedState,e)},useTransition:function(){var e=ti(Qr)[0],t=cn().memoizedState;return[e,t]},useMutableSource:ju,useSyncExternalStore:Nu,useId:zu,unstable_isNewReconciler:!1};function un(e,t){if(e&&e.defaultProps){t=pe({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Ki(e,t,r,s){t=e.memoizedState,r=r(s,t),r=r==null?t:pe({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Sa={isMounted:function(e){return(e=e._reactInternals)?kt(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var s=Fe(),a=Qn(e),i=Cn(s,a);i.payload=t,r!=null&&(i.callback=r),t=Wn(e,i,a),t!==null&&(mn(t,e,a,s),Ms(t,e,a))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var s=Fe(),a=Qn(e),i=Cn(s,a);i.tag=1,i.payload=t,r!=null&&(i.callback=r),t=Wn(e,i,a),t!==null&&(mn(t,e,a,s),Ms(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Fe(),s=Qn(e),a=Cn(r,s);a.tag=2,t!=null&&(a.callback=t),t=Wn(e,a,s),t!==null&&(mn(t,e,s,r),Ms(t,e,s))}};function fc(e,t,r,s,a,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,i,l):t.prototype&&t.prototype.isPureReactComponent?!Br(r,s)||!Br(a,i):!0}function Fu(e,t,r){var s=!1,a=et,i=t.contextType;return typeof i=="object"&&i!==null?i=on(i):(a=We(t)?gt:Me.current,s=t.contextTypes,i=(s=s!=null)?Zt(e,a):et),t=new t(r,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Sa,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function mc(e,t,r,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,s),t.state!==e&&Sa.enqueueReplaceState(t,t.state,null)}function Wi(e,t,r,s){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs={},Jl(e);var i=t.contextType;typeof i=="object"&&i!==null?a.context=on(i):(i=We(t)?gt:Me.current,a.context=Zt(e,i)),a.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ki(e,t,i,r),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Sa.enqueueReplaceState(a,a.state,null),sa(e,r,a,s),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function rr(e,t){try{var r="",s=t;do r+=vp(s),s=s.return;while(s);var a=r}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:a,digest:null}}function ri(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Gi(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Uf=typeof WeakMap=="function"?WeakMap:Map;function Du(e,t,r){r=Cn(-1,r),r.tag=3,r.payload={element:null};var s=t.value;return r.callback=function(){ca||(ca=!0,sl=s),Gi(e,t)},r}function $u(e,t,r){r=Cn(-1,r),r.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var a=t.value;r.payload=function(){return s(a)},r.callback=function(){Gi(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){Gi(e,t),typeof s!="function"&&(Gn===null?Gn=new Set([this]):Gn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),r}function gc(e,t,r){var s=e.pingCache;if(s===null){s=e.pingCache=new Uf;var a=new Set;s.set(t,a)}else a=s.get(t),a===void 0&&(a=new Set,s.set(t,a));a.has(r)||(a.add(r),e=am.bind(null,e,t,r),t.then(e,e))}function vc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function xc(e,t,r,s,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Cn(-1,1),t.tag=2,Wn(r,t,1))),r.lanes|=1),e)}var Kf=Rn.ReactCurrentOwner,Ue=!1;function Ve(e,t,r,s){t.child=e===null?gu(t,null,r,s):nr(t,e.child,r,s)}function yc(e,t,r,s,a){r=r.render;var i=t.ref;return Qt(t,a),s=ro(e,t,r,s,i,a),r=so(),e!==null&&!Ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Pn(e,t,a)):(de&&r&&Ul(t),t.flags|=1,Ve(e,t,s,a),t.child)}function jc(e,t,r,s,a){if(e===null){var i=r.type;return typeof i=="function"&&!mo(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=i,Bu(e,t,i,s,a)):(e=Bs(r.type,null,s,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&a)){var l=i.memoizedProps;if(r=r.compare,r=r!==null?r:Br,r(l,s)&&e.ref===t.ref)return Pn(e,t,a)}return t.flags|=1,e=Yn(i,s),e.ref=t.ref,e.return=t,t.child=e}function Bu(e,t,r,s,a){if(e!==null){var i=e.memoizedProps;if(Br(i,s)&&e.ref===t.ref)if(Ue=!1,t.pendingProps=s=i,(e.lanes&a)!==0)e.flags&131072&&(Ue=!0);else return t.lanes=e.lanes,Pn(e,t,a)}return Qi(e,t,r,s,a)}function Hu(e,t,r){var s=t.pendingProps,a=s.children,i=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},le(Ft,Qe),Qe|=r;else{if(!(r&1073741824))return e=i!==null?i.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,le(Ft,Qe),Qe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=i!==null?i.baseLanes:r,le(Ft,Qe),Qe|=s}else i!==null?(s=i.baseLanes|r,t.memoizedState=null):s=r,le(Ft,Qe),Qe|=s;return Ve(e,t,a,r),t.child}function qu(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Qi(e,t,r,s,a){var i=We(r)?gt:Me.current;return i=Zt(t,i),Qt(t,a),r=ro(e,t,r,s,i,a),s=so(),e!==null&&!Ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Pn(e,t,a)):(de&&s&&Ul(t),t.flags|=1,Ve(e,t,r,a),t.child)}function Nc(e,t,r,s,a){if(We(r)){var i=!0;Zs(t)}else i=!1;if(Qt(t,a),t.stateNode===null)Fs(e,t),Fu(t,r,s),Wi(t,r,s,a),s=!0;else if(e===null){var l=t.stateNode,o=t.memoizedProps;l.props=o;var c=l.context,h=r.contextType;typeof h=="object"&&h!==null?h=on(h):(h=We(r)?gt:Me.current,h=Zt(t,h));var d=r.getDerivedStateFromProps,p=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==s||c!==h)&&mc(t,l,s,h),Mn=!1;var m=t.memoizedState;l.state=m,sa(t,s,l,a),c=t.memoizedState,o!==s||m!==c||Ke.current||Mn?(typeof d=="function"&&(Ki(t,r,d,s),c=t.memoizedState),(o=Mn||fc(t,r,o,s,m,c,h))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=c),l.props=s,l.state=c,l.context=h,s=o):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{l=t.stateNode,xu(e,t),o=t.memoizedProps,h=t.type===t.elementType?o:un(t.type,o),l.props=h,p=t.pendingProps,m=l.context,c=r.contextType,typeof c=="object"&&c!==null?c=on(c):(c=We(r)?gt:Me.current,c=Zt(t,c));var S=r.getDerivedStateFromProps;(d=typeof S=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==p||m!==c)&&mc(t,l,s,c),Mn=!1,m=t.memoizedState,l.state=m,sa(t,s,l,a);var w=t.memoizedState;o!==p||m!==w||Ke.current||Mn?(typeof S=="function"&&(Ki(t,r,S,s),w=t.memoizedState),(h=Mn||fc(t,r,h,s,m,w,c)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(s,w,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(s,w,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=w),l.props=s,l.state=w,l.context=c,s=h):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),s=!1)}return Yi(e,t,r,s,i,a)}function Yi(e,t,r,s,a,i){qu(e,t);var l=(t.flags&128)!==0;if(!s&&!l)return a&&ic(t,r,!1),Pn(e,t,i);s=t.stateNode,Kf.current=t;var o=l&&typeof r.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&l?(t.child=nr(t,e.child,null,i),t.child=nr(t,null,o,i)):Ve(e,t,o,i),t.memoizedState=s.state,a&&ic(t,r,!0),t.child}function Uu(e){var t=e.stateNode;t.pendingContext?ac(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ac(e,t.context,!1),Zl(e,t.containerInfo)}function kc(e,t,r,s,a){return er(),Wl(a),t.flags|=256,Ve(e,t,r,s),t.child}var Xi={dehydrated:null,treeContext:null,retryLane:0};function Ji(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ku(e,t,r){var s=t.pendingProps,a=ue.current,i=!1,l=(t.flags&128)!==0,o;if((o=l)||(o=e!==null&&e.memoizedState===null?!1:(a&2)!==0),o?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),le(ue,a&1),e===null)return qi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=s.children,e=s.fallback,i?(s=t.mode,i=t.child,l={mode:"hidden",children:l},!(s&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Ea(l,s,0,null),e=mt(e,s,r,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ji(r),t.memoizedState=Xi,e):lo(t,l));if(a=e.memoizedState,a!==null&&(o=a.dehydrated,o!==null))return Wf(e,t,l,s,o,a,r);if(i){i=s.fallback,l=t.mode,a=e.child,o=a.sibling;var c={mode:"hidden",children:s.children};return!(l&1)&&t.child!==a?(s=t.child,s.childLanes=0,s.pendingProps=c,t.deletions=null):(s=Yn(a,c),s.subtreeFlags=a.subtreeFlags&14680064),o!==null?i=Yn(o,i):(i=mt(i,l,r,null),i.flags|=2),i.return=t,s.return=t,s.sibling=i,t.child=s,s=i,i=t.child,l=e.child.memoizedState,l=l===null?Ji(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~r,t.memoizedState=Xi,s}return i=e.child,e=i.sibling,s=Yn(i,{mode:"visible",children:s.children}),!(t.mode&1)&&(s.lanes=r),s.return=t,s.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=s,t.memoizedState=null,s}function lo(e,t){return t=Ea({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ss(e,t,r,s){return s!==null&&Wl(s),nr(t,e.child,null,r),e=lo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Wf(e,t,r,s,a,i,l){if(r)return t.flags&256?(t.flags&=-257,s=ri(Error(U(422))),Ss(e,t,l,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=s.fallback,a=t.mode,s=Ea({mode:"visible",children:s.children},a,0,null),i=mt(i,a,l,null),i.flags|=2,s.return=t,i.return=t,s.sibling=i,t.child=s,t.mode&1&&nr(t,e.child,null,l),t.child.memoizedState=Ji(l),t.memoizedState=Xi,i);if(!(t.mode&1))return Ss(e,t,l,null);if(a.data==="$!"){if(s=a.nextSibling&&a.nextSibling.dataset,s)var o=s.dgst;return s=o,i=Error(U(419)),s=ri(i,s,void 0),Ss(e,t,l,s)}if(o=(l&e.childLanes)!==0,Ue||o){if(s=Se,s!==null){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(s.suspendedLanes|l)?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,Ln(e,a),mn(s,e,a,-1))}return fo(),s=ri(Error(U(421))),Ss(e,t,l,s)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=im.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,Xe=Kn(a.nextSibling),Ze=t,de=!0,pn=null,e!==null&&(rn[sn++]=wn,rn[sn++]=Sn,rn[sn++]=vt,wn=e.id,Sn=e.overflow,vt=t),t=lo(t,s.children),t.flags|=4096,t)}function bc(e,t,r){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),Ui(e.return,t,r)}function si(e,t,r,s,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:r,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=s,i.tail=r,i.tailMode=a)}function Wu(e,t,r){var s=t.pendingProps,a=s.revealOrder,i=s.tail;if(Ve(e,t,s.children,r),s=ue.current,s&2)s=s&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bc(e,r,t);else if(e.tag===19)bc(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(le(ue,s),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(r=t.child,a=null;r!==null;)e=r.alternate,e!==null&&aa(e)===null&&(a=r),r=r.sibling;r=a,r===null?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),si(t,!1,a,r,i);break;case"backwards":for(r=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&aa(e)===null){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}si(t,!0,r,null,i);break;case"together":si(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Fs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Pn(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),yt|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(U(153));if(t.child!==null){for(e=t.child,r=Yn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Yn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Gf(e,t,r){switch(t.tag){case 3:Uu(t),er();break;case 5:yu(t);break;case 1:We(t.type)&&Zs(t);break;case 4:Zl(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,a=t.memoizedProps.value;le(ta,s._currentValue),s._currentValue=a;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(le(ue,ue.current&1),t.flags|=128,null):r&t.child.childLanes?Ku(e,t,r):(le(ue,ue.current&1),e=Pn(e,t,r),e!==null?e.sibling:null);le(ue,ue.current&1);break;case 19:if(s=(r&t.childLanes)!==0,e.flags&128){if(s)return Wu(e,t,r);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),le(ue,ue.current),s)break;return null;case 22:case 23:return t.lanes=0,Hu(e,t,r)}return Pn(e,t,r)}var Gu,Zi,Qu,Yu;Gu=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Zi=function(){};Qu=function(e,t,r,s){var a=e.memoizedProps;if(a!==s){e=t.stateNode,ut(Nn.current);var i=null;switch(r){case"input":a=Ni(e,a),s=Ni(e,s),i=[];break;case"select":a=pe({},a,{value:void 0}),s=pe({},s,{value:void 0}),i=[];break;case"textarea":a=wi(e,a),s=wi(e,s),i=[];break;default:typeof a.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Xs)}Ci(r,s);var l;r=null;for(h in a)if(!s.hasOwnProperty(h)&&a.hasOwnProperty(h)&&a[h]!=null)if(h==="style"){var o=a[h];for(l in o)o.hasOwnProperty(l)&&(r||(r={}),r[l]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(zr.hasOwnProperty(h)?i||(i=[]):(i=i||[]).push(h,null));for(h in s){var c=s[h];if(o=a!=null?a[h]:void 0,s.hasOwnProperty(h)&&c!==o&&(c!=null||o!=null))if(h==="style")if(o){for(l in o)!o.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(r||(r={}),r[l]="");for(l in c)c.hasOwnProperty(l)&&o[l]!==c[l]&&(r||(r={}),r[l]=c[l])}else r||(i||(i=[]),i.push(h,r)),r=c;else h==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(i=i||[]).push(h,c)):h==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(h,""+c):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(zr.hasOwnProperty(h)?(c!=null&&h==="onScroll"&&oe("scroll",e),i||o===c||(i=[])):(i=i||[]).push(h,c))}r&&(i=i||[]).push("style",r);var h=i;(t.updateQueue=h)&&(t.flags|=4)}};Yu=function(e,t,r,s){r!==s&&(t.flags|=4)};function mr(e,t){if(!de)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,s=0;if(t)for(var a=e.child;a!==null;)r|=a.lanes|a.childLanes,s|=a.subtreeFlags&14680064,s|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)r|=a.lanes|a.childLanes,s|=a.subtreeFlags,s|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=s,e.childLanes=r,t}function Qf(e,t,r){var s=t.pendingProps;switch(Kl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(t),null;case 1:return We(t.type)&&Js(),Ie(t),null;case 3:return s=t.stateNode,tr(),ce(Ke),ce(Me),no(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(bs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,pn!==null&&(ll(pn),pn=null))),Zi(e,t),Ie(t),null;case 5:eo(t);var a=ut(Wr.current);if(r=t.type,e!==null&&t.stateNode!=null)Qu(e,t,r,s,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(U(166));return Ie(t),null}if(e=ut(Nn.current),bs(t)){s=t.stateNode,r=t.type;var i=t.memoizedProps;switch(s[yn]=t,s[Ur]=i,e=(t.mode&1)!==0,r){case"dialog":oe("cancel",s),oe("close",s);break;case"iframe":case"object":case"embed":oe("load",s);break;case"video":case"audio":for(a=0;a<jr.length;a++)oe(jr[a],s);break;case"source":oe("error",s);break;case"img":case"image":case"link":oe("error",s),oe("load",s);break;case"details":oe("toggle",s);break;case"input":Ro(s,i),oe("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!i.multiple},oe("invalid",s);break;case"textarea":_o(s,i),oe("invalid",s)}Ci(r,i),a=null;for(var l in i)if(i.hasOwnProperty(l)){var o=i[l];l==="children"?typeof o=="string"?s.textContent!==o&&(i.suppressHydrationWarning!==!0&&ks(s.textContent,o,e),a=["children",o]):typeof o=="number"&&s.textContent!==""+o&&(i.suppressHydrationWarning!==!0&&ks(s.textContent,o,e),a=["children",""+o]):zr.hasOwnProperty(l)&&o!=null&&l==="onScroll"&&oe("scroll",s)}switch(r){case"input":fs(s),Io(s,i,!0);break;case"textarea":fs(s),zo(s);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(s.onclick=Xs)}s=a,t.updateQueue=s,s!==null&&(t.flags|=4)}else{l=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=wd(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=l.createElement(r,{is:s.is}):(e=l.createElement(r),r==="select"&&(l=e,s.multiple?l.multiple=!0:s.size&&(l.size=s.size))):e=l.createElementNS(e,r),e[yn]=t,e[Ur]=s,Gu(e,t,!1,!1),t.stateNode=e;e:{switch(l=Ti(r,s),r){case"dialog":oe("cancel",e),oe("close",e),a=s;break;case"iframe":case"object":case"embed":oe("load",e),a=s;break;case"video":case"audio":for(a=0;a<jr.length;a++)oe(jr[a],e);a=s;break;case"source":oe("error",e),a=s;break;case"img":case"image":case"link":oe("error",e),oe("load",e),a=s;break;case"details":oe("toggle",e),a=s;break;case"input":Ro(e,s),a=Ni(e,s),oe("invalid",e);break;case"option":a=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},a=pe({},s,{value:void 0}),oe("invalid",e);break;case"textarea":_o(e,s),a=wi(e,s),oe("invalid",e);break;default:a=s}Ci(r,a),o=a;for(i in o)if(o.hasOwnProperty(i)){var c=o[i];i==="style"?Td(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Sd(e,c)):i==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&Mr(e,c):typeof c=="number"&&Mr(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(zr.hasOwnProperty(i)?c!=null&&i==="onScroll"&&oe("scroll",e):c!=null&&Ol(e,i,c,l))}switch(r){case"input":fs(e),Io(e,s,!1);break;case"textarea":fs(e),zo(e);break;case"option":s.value!=null&&e.setAttribute("value",""+Zn(s.value));break;case"select":e.multiple=!!s.multiple,i=s.value,i!=null?Ut(e,!!s.multiple,i,!1):s.defaultValue!=null&&Ut(e,!!s.multiple,s.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Xs)}switch(r){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ie(t),null;case 6:if(e&&t.stateNode!=null)Yu(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(U(166));if(r=ut(Wr.current),ut(Nn.current),bs(t)){if(s=t.stateNode,r=t.memoizedProps,s[yn]=t,(i=s.nodeValue!==r)&&(e=Ze,e!==null))switch(e.tag){case 3:ks(s.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ks(s.nodeValue,r,(e.mode&1)!==0)}i&&(t.flags|=4)}else s=(r.nodeType===9?r:r.ownerDocument).createTextNode(s),s[yn]=t,t.stateNode=s}return Ie(t),null;case 13:if(ce(ue),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(de&&Xe!==null&&t.mode&1&&!(t.flags&128))fu(),er(),t.flags|=98560,i=!1;else if(i=bs(t),s!==null&&s.dehydrated!==null){if(e===null){if(!i)throw Error(U(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(U(317));i[yn]=t}else er(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ie(t),i=!1}else pn!==null&&(ll(pn),pn=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,t.mode&1&&(e===null||ue.current&1?be===0&&(be=3):fo())),t.updateQueue!==null&&(t.flags|=4),Ie(t),null);case 4:return tr(),Zi(e,t),e===null&&Hr(t.stateNode.containerInfo),Ie(t),null;case 10:return Yl(t.type._context),Ie(t),null;case 17:return We(t.type)&&Js(),Ie(t),null;case 19:if(ce(ue),i=t.memoizedState,i===null)return Ie(t),null;if(s=(t.flags&128)!==0,l=i.rendering,l===null)if(s)mr(i,!1);else{if(be!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=aa(e),l!==null){for(t.flags|=128,mr(i,!1),s=l.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=r,r=t.child;r!==null;)i=r,e=s,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return le(ue,ue.current&1|2),t.child}e=e.sibling}i.tail!==null&&ge()>sr&&(t.flags|=128,s=!0,mr(i,!1),t.lanes=4194304)}else{if(!s)if(e=aa(l),e!==null){if(t.flags|=128,s=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),mr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!de)return Ie(t),null}else 2*ge()-i.renderingStartTime>sr&&r!==1073741824&&(t.flags|=128,s=!0,mr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(r=i.last,r!==null?r.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ge(),t.sibling=null,r=ue.current,le(ue,s?r&1|2:r&1),t):(Ie(t),null);case 22:case 23:return po(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&t.mode&1?Qe&1073741824&&(Ie(t),t.subtreeFlags&6&&(t.flags|=8192)):Ie(t),null;case 24:return null;case 25:return null}throw Error(U(156,t.tag))}function Yf(e,t){switch(Kl(t),t.tag){case 1:return We(t.type)&&Js(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return tr(),ce(Ke),ce(Me),no(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return eo(t),null;case 13:if(ce(ue),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(U(340));er()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ce(ue),null;case 4:return tr(),null;case 10:return Yl(t.type._context),null;case 22:case 23:return po(),null;case 24:return null;default:return null}}var Cs=!1,ze=!1,Xf=typeof WeakSet=="function"?WeakSet:Set,G=null;function Vt(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(s){me(e,t,s)}else r.current=null}function el(e,t,r){try{r()}catch(s){me(e,t,s)}}var wc=!1;function Jf(e,t){if(Ai=Gs,e=nu(),ql(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var s=r.getSelection&&r.getSelection();if(s&&s.rangeCount!==0){r=s.anchorNode;var a=s.anchorOffset,i=s.focusNode;s=s.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var l=0,o=-1,c=-1,h=0,d=0,p=e,m=null;n:for(;;){for(var S;p!==r||a!==0&&p.nodeType!==3||(o=l+a),p!==i||s!==0&&p.nodeType!==3||(c=l+s),p.nodeType===3&&(l+=p.nodeValue.length),(S=p.firstChild)!==null;)m=p,p=S;for(;;){if(p===e)break n;if(m===r&&++h===a&&(o=l),m===i&&++d===s&&(c=l),(S=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=S}r=o===-1||c===-1?null:{start:o,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(Vi={focusedElem:e,selectionRange:r},Gs=!1,G=t;G!==null;)if(t=G,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,G=e;else for(;G!==null;){t=G;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var N=w.memoizedProps,x=w.memoizedState,f=t.stateNode,g=f.getSnapshotBeforeUpdate(t.elementType===t.type?N:un(t.type,N),x);f.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(P){me(t,t.return,P)}if(e=t.sibling,e!==null){e.return=t.return,G=e;break}G=t.return}return w=wc,wc=!1,w}function Lr(e,t,r){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&el(t,r,i)}a=a.next}while(a!==s)}}function Ca(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var s=r.create;r.destroy=s()}r=r.next}while(r!==t)}}function nl(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Xu(e){var t=e.alternate;t!==null&&(e.alternate=null,Xu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[yn],delete t[Ur],delete t[$i],delete t[_f],delete t[zf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ju(e){return e.tag===5||e.tag===3||e.tag===4}function Sc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ju(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tl(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Xs));else if(s!==4&&(e=e.child,e!==null))for(tl(e,t,r),e=e.sibling;e!==null;)tl(e,t,r),e=e.sibling}function rl(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(rl(e,t,r),e=e.sibling;e!==null;)rl(e,t,r),e=e.sibling}var Ee=null,hn=!1;function _n(e,t,r){for(r=r.child;r!==null;)Zu(e,t,r),r=r.sibling}function Zu(e,t,r){if(jn&&typeof jn.onCommitFiberUnmount=="function")try{jn.onCommitFiberUnmount(xa,r)}catch{}switch(r.tag){case 5:ze||Vt(r,t);case 6:var s=Ee,a=hn;Ee=null,_n(e,t,r),Ee=s,hn=a,Ee!==null&&(hn?(e=Ee,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Ee.removeChild(r.stateNode));break;case 18:Ee!==null&&(hn?(e=Ee,r=r.stateNode,e.nodeType===8?Xa(e.parentNode,r):e.nodeType===1&&Xa(e,r),Dr(e)):Xa(Ee,r.stateNode));break;case 4:s=Ee,a=hn,Ee=r.stateNode.containerInfo,hn=!0,_n(e,t,r),Ee=s,hn=a;break;case 0:case 11:case 14:case 15:if(!ze&&(s=r.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){a=s=s.next;do{var i=a,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&el(r,t,l),a=a.next}while(a!==s)}_n(e,t,r);break;case 1:if(!ze&&(Vt(r,t),s=r.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=r.memoizedProps,s.state=r.memoizedState,s.componentWillUnmount()}catch(o){me(r,t,o)}_n(e,t,r);break;case 21:_n(e,t,r);break;case 22:r.mode&1?(ze=(s=ze)||r.memoizedState!==null,_n(e,t,r),ze=s):_n(e,t,r);break;default:_n(e,t,r)}}function Cc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Xf),t.forEach(function(s){var a=lm.bind(null,e,s);r.has(s)||(r.add(s),s.then(a,a))})}}function dn(e,t){var r=t.deletions;if(r!==null)for(var s=0;s<r.length;s++){var a=r[s];try{var i=e,l=t,o=l;e:for(;o!==null;){switch(o.tag){case 5:Ee=o.stateNode,hn=!1;break e;case 3:Ee=o.stateNode.containerInfo,hn=!0;break e;case 4:Ee=o.stateNode.containerInfo,hn=!0;break e}o=o.return}if(Ee===null)throw Error(U(160));Zu(i,l,a),Ee=null,hn=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(h){me(a,t,h)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)eh(t,e),t=t.sibling}function eh(e,t){var r=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(dn(t,e),vn(e),s&4){try{Lr(3,e,e.return),Ca(3,e)}catch(N){me(e,e.return,N)}try{Lr(5,e,e.return)}catch(N){me(e,e.return,N)}}break;case 1:dn(t,e),vn(e),s&512&&r!==null&&Vt(r,r.return);break;case 5:if(dn(t,e),vn(e),s&512&&r!==null&&Vt(r,r.return),e.flags&32){var a=e.stateNode;try{Mr(a,"")}catch(N){me(e,e.return,N)}}if(s&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,l=r!==null?r.memoizedProps:i,o=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{o==="input"&&i.type==="radio"&&i.name!=null&&kd(a,i),Ti(o,l);var h=Ti(o,i);for(l=0;l<c.length;l+=2){var d=c[l],p=c[l+1];d==="style"?Td(a,p):d==="dangerouslySetInnerHTML"?Sd(a,p):d==="children"?Mr(a,p):Ol(a,d,p,h)}switch(o){case"input":ki(a,i);break;case"textarea":bd(a,i);break;case"select":var m=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var S=i.value;S!=null?Ut(a,!!i.multiple,S,!1):m!==!!i.multiple&&(i.defaultValue!=null?Ut(a,!!i.multiple,i.defaultValue,!0):Ut(a,!!i.multiple,i.multiple?[]:"",!1))}a[Ur]=i}catch(N){me(e,e.return,N)}}break;case 6:if(dn(t,e),vn(e),s&4){if(e.stateNode===null)throw Error(U(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(N){me(e,e.return,N)}}break;case 3:if(dn(t,e),vn(e),s&4&&r!==null&&r.memoizedState.isDehydrated)try{Dr(t.containerInfo)}catch(N){me(e,e.return,N)}break;case 4:dn(t,e),vn(e);break;case 13:dn(t,e),vn(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(uo=ge())),s&4&&Cc(e);break;case 22:if(d=r!==null&&r.memoizedState!==null,e.mode&1?(ze=(h=ze)||d,dn(t,e),ze=h):dn(t,e),vn(e),s&8192){if(h=e.memoizedState!==null,(e.stateNode.isHidden=h)&&!d&&e.mode&1)for(G=e,d=e.child;d!==null;){for(p=G=d;G!==null;){switch(m=G,S=m.child,m.tag){case 0:case 11:case 14:case 15:Lr(4,m,m.return);break;case 1:Vt(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){s=m,r=m.return;try{t=s,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(N){me(s,r,N)}}break;case 5:Vt(m,m.return);break;case 22:if(m.memoizedState!==null){Ec(p);continue}}S!==null?(S.return=m,G=S):Ec(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{a=p.stateNode,h?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(o=p.stateNode,c=p.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=Cd("display",l))}catch(N){me(e,e.return,N)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=h?"":p.memoizedProps}catch(N){me(e,e.return,N)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:dn(t,e),vn(e),s&4&&Cc(e);break;case 21:break;default:dn(t,e),vn(e)}}function vn(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Ju(r)){var s=r;break e}r=r.return}throw Error(U(160))}switch(s.tag){case 5:var a=s.stateNode;s.flags&32&&(Mr(a,""),s.flags&=-33);var i=Sc(e);rl(e,i,a);break;case 3:case 4:var l=s.stateNode.containerInfo,o=Sc(e);tl(e,o,l);break;default:throw Error(U(161))}}catch(c){me(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Zf(e,t,r){G=e,nh(e)}function nh(e,t,r){for(var s=(e.mode&1)!==0;G!==null;){var a=G,i=a.child;if(a.tag===22&&s){var l=a.memoizedState!==null||Cs;if(!l){var o=a.alternate,c=o!==null&&o.memoizedState!==null||ze;o=Cs;var h=ze;if(Cs=l,(ze=c)&&!h)for(G=a;G!==null;)l=G,c=l.child,l.tag===22&&l.memoizedState!==null?Lc(a):c!==null?(c.return=l,G=c):Lc(a);for(;i!==null;)G=i,nh(i),i=i.sibling;G=a,Cs=o,ze=h}Tc(e)}else a.subtreeFlags&8772&&i!==null?(i.return=a,G=i):Tc(e)}}function Tc(e){for(;G!==null;){var t=G;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ze||Ca(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!ze)if(r===null)s.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:un(t.type,r.memoizedProps);s.componentDidUpdate(a,r.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&uc(t,i,s);break;case 3:var l=t.updateQueue;if(l!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}uc(t,l,r)}break;case 5:var o=t.stateNode;if(r===null&&t.flags&4){r=o;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var h=t.alternate;if(h!==null){var d=h.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Dr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}ze||t.flags&512&&nl(t)}catch(m){me(t,t.return,m)}}if(t===e){G=null;break}if(r=t.sibling,r!==null){r.return=t.return,G=r;break}G=t.return}}function Ec(e){for(;G!==null;){var t=G;if(t===e){G=null;break}var r=t.sibling;if(r!==null){r.return=t.return,G=r;break}G=t.return}}function Lc(e){for(;G!==null;){var t=G;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Ca(4,t)}catch(c){me(t,r,c)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var a=t.return;try{s.componentDidMount()}catch(c){me(t,a,c)}}var i=t.return;try{nl(t)}catch(c){me(t,i,c)}break;case 5:var l=t.return;try{nl(t)}catch(c){me(t,l,c)}}}catch(c){me(t,t.return,c)}if(t===e){G=null;break}var o=t.sibling;if(o!==null){o.return=t.return,G=o;break}G=t.return}}var em=Math.ceil,oa=Rn.ReactCurrentDispatcher,oo=Rn.ReactCurrentOwner,ln=Rn.ReactCurrentBatchConfig,ne=0,Se=null,je=null,Le=0,Qe=0,Ft=tt(0),be=0,Xr=null,yt=0,Ta=0,co=0,Pr=null,qe=null,uo=0,sr=1/0,kn=null,ca=!1,sl=null,Gn=null,Ts=!1,Dn=null,da=0,Or=0,al=null,Ds=-1,$s=0;function Fe(){return ne&6?ge():Ds!==-1?Ds:Ds=ge()}function Qn(e){return e.mode&1?ne&2&&Le!==0?Le&-Le:Af.transition!==null?($s===0&&($s=Fd()),$s):(e=se,e!==0||(e=window.event,e=e===void 0?16:Kd(e.type)),e):1}function mn(e,t,r,s){if(50<Or)throw Or=0,al=null,Error(U(185));rs(e,r,s),(!(ne&2)||e!==Se)&&(e===Se&&(!(ne&2)&&(Ta|=r),be===4&&Vn(e,Le)),Ge(e,s),r===1&&ne===0&&!(t.mode&1)&&(sr=ge()+500,ba&&rt()))}function Ge(e,t){var r=e.callbackNode;Mp(e,t);var s=Ws(e,e===Se?Le:0);if(s===0)r!==null&&Vo(r),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(r!=null&&Vo(r),t===1)e.tag===0?Mf(Pc.bind(null,e)):uu(Pc.bind(null,e)),Rf(function(){!(ne&6)&&rt()}),r=null;else{switch(Dd(s)){case 1:r=Ml;break;case 4:r=Ad;break;case 16:r=Ks;break;case 536870912:r=Vd;break;default:r=Ks}r=ch(r,th.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function th(e,t){if(Ds=-1,$s=0,ne&6)throw Error(U(327));var r=e.callbackNode;if(Yt()&&e.callbackNode!==r)return null;var s=Ws(e,e===Se?Le:0);if(s===0)return null;if(s&30||s&e.expiredLanes||t)t=ua(e,s);else{t=s;var a=ne;ne|=2;var i=sh();(Se!==e||Le!==t)&&(kn=null,sr=ge()+500,ft(e,t));do try{rm();break}catch(o){rh(e,o)}while(!0);Ql(),oa.current=i,ne=a,je!==null?t=0:(Se=null,Le=0,t=be)}if(t!==0){if(t===2&&(a=Ri(e),a!==0&&(s=a,t=il(e,a))),t===1)throw r=Xr,ft(e,0),Vn(e,s),Ge(e,ge()),r;if(t===6)Vn(e,s);else{if(a=e.current.alternate,!(s&30)&&!nm(a)&&(t=ua(e,s),t===2&&(i=Ri(e),i!==0&&(s=i,t=il(e,i))),t===1))throw r=Xr,ft(e,0),Vn(e,s),Ge(e,ge()),r;switch(e.finishedWork=a,e.finishedLanes=s,t){case 0:case 1:throw Error(U(345));case 2:ot(e,qe,kn);break;case 3:if(Vn(e,s),(s&130023424)===s&&(t=uo+500-ge(),10<t)){if(Ws(e,0)!==0)break;if(a=e.suspendedLanes,(a&s)!==s){Fe(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Di(ot.bind(null,e,qe,kn),t);break}ot(e,qe,kn);break;case 4:if(Vn(e,s),(s&4194240)===s)break;for(t=e.eventTimes,a=-1;0<s;){var l=31-fn(s);i=1<<l,l=t[l],l>a&&(a=l),s&=~i}if(s=a,s=ge()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*em(s/1960))-s,10<s){e.timeoutHandle=Di(ot.bind(null,e,qe,kn),s);break}ot(e,qe,kn);break;case 5:ot(e,qe,kn);break;default:throw Error(U(329))}}}return Ge(e,ge()),e.callbackNode===r?th.bind(null,e):null}function il(e,t){var r=Pr;return e.current.memoizedState.isDehydrated&&(ft(e,t).flags|=256),e=ua(e,t),e!==2&&(t=qe,qe=r,t!==null&&ll(t)),e}function ll(e){qe===null?qe=e:qe.push.apply(qe,e)}function nm(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var s=0;s<r.length;s++){var a=r[s],i=a.getSnapshot;a=a.value;try{if(!gn(i(),a))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Vn(e,t){for(t&=~co,t&=~Ta,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-fn(t),s=1<<r;e[r]=-1,t&=~s}}function Pc(e){if(ne&6)throw Error(U(327));Yt();var t=Ws(e,0);if(!(t&1))return Ge(e,ge()),null;var r=ua(e,t);if(e.tag!==0&&r===2){var s=Ri(e);s!==0&&(t=s,r=il(e,s))}if(r===1)throw r=Xr,ft(e,0),Vn(e,t),Ge(e,ge()),r;if(r===6)throw Error(U(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ot(e,qe,kn),Ge(e,ge()),null}function ho(e,t){var r=ne;ne|=1;try{return e(t)}finally{ne=r,ne===0&&(sr=ge()+500,ba&&rt())}}function jt(e){Dn!==null&&Dn.tag===0&&!(ne&6)&&Yt();var t=ne;ne|=1;var r=ln.transition,s=se;try{if(ln.transition=null,se=1,e)return e()}finally{se=s,ln.transition=r,ne=t,!(ne&6)&&rt()}}function po(){Qe=Ft.current,ce(Ft)}function ft(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Of(r)),je!==null)for(r=je.return;r!==null;){var s=r;switch(Kl(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Js();break;case 3:tr(),ce(Ke),ce(Me),no();break;case 5:eo(s);break;case 4:tr();break;case 13:ce(ue);break;case 19:ce(ue);break;case 10:Yl(s.type._context);break;case 22:case 23:po()}r=r.return}if(Se=e,je=e=Yn(e.current,null),Le=Qe=t,be=0,Xr=null,co=Ta=yt=0,qe=Pr=null,dt!==null){for(t=0;t<dt.length;t++)if(r=dt[t],s=r.interleaved,s!==null){r.interleaved=null;var a=s.next,i=r.pending;if(i!==null){var l=i.next;i.next=a,s.next=l}r.pending=s}dt=null}return e}function rh(e,t){do{var r=je;try{if(Ql(),As.current=la,ia){for(var s=he.memoizedState;s!==null;){var a=s.queue;a!==null&&(a.pending=null),s=s.next}ia=!1}if(xt=0,we=ke=he=null,Er=!1,Gr=0,oo.current=null,r===null||r.return===null){be=1,Xr=t,je=null;break}e:{var i=e,l=r.return,o=r,c=t;if(t=Le,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var h=c,d=o,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var S=vc(l);if(S!==null){S.flags&=-257,xc(S,l,o,i,t),S.mode&1&&gc(i,h,t),t=S,c=h;var w=t.updateQueue;if(w===null){var N=new Set;N.add(c),t.updateQueue=N}else w.add(c);break e}else{if(!(t&1)){gc(i,h,t),fo();break e}c=Error(U(426))}}else if(de&&o.mode&1){var x=vc(l);if(x!==null){!(x.flags&65536)&&(x.flags|=256),xc(x,l,o,i,t),Wl(rr(c,o));break e}}i=c=rr(c,o),be!==4&&(be=2),Pr===null?Pr=[i]:Pr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Du(i,c,t);dc(i,f);break e;case 1:o=c;var g=i.type,v=i.stateNode;if(!(i.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Gn===null||!Gn.has(v)))){i.flags|=65536,t&=-t,i.lanes|=t;var P=$u(i,o,t);dc(i,P);break e}}i=i.return}while(i!==null)}ih(r)}catch(k){t=k,je===r&&r!==null&&(je=r=r.return);continue}break}while(!0)}function sh(){var e=oa.current;return oa.current=la,e===null?la:e}function fo(){(be===0||be===3||be===2)&&(be=4),Se===null||!(yt&268435455)&&!(Ta&268435455)||Vn(Se,Le)}function ua(e,t){var r=ne;ne|=2;var s=sh();(Se!==e||Le!==t)&&(kn=null,ft(e,t));do try{tm();break}catch(a){rh(e,a)}while(!0);if(Ql(),ne=r,oa.current=s,je!==null)throw Error(U(261));return Se=null,Le=0,be}function tm(){for(;je!==null;)ah(je)}function rm(){for(;je!==null&&!Tp();)ah(je)}function ah(e){var t=oh(e.alternate,e,Qe);e.memoizedProps=e.pendingProps,t===null?ih(e):je=t,oo.current=null}function ih(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Yf(r,t),r!==null){r.flags&=32767,je=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{be=6,je=null;return}}else if(r=Qf(r,t,Qe),r!==null){je=r;return}if(t=t.sibling,t!==null){je=t;return}je=t=e}while(t!==null);be===0&&(be=5)}function ot(e,t,r){var s=se,a=ln.transition;try{ln.transition=null,se=1,sm(e,t,r,s)}finally{ln.transition=a,se=s}return null}function sm(e,t,r,s){do Yt();while(Dn!==null);if(ne&6)throw Error(U(327));r=e.finishedWork;var a=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(U(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(Ap(e,i),e===Se&&(je=Se=null,Le=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Ts||(Ts=!0,ch(Ks,function(){return Yt(),null})),i=(r.flags&15990)!==0,r.subtreeFlags&15990||i){i=ln.transition,ln.transition=null;var l=se;se=1;var o=ne;ne|=4,oo.current=null,Jf(e,r),eh(r,e),wf(Vi),Gs=!!Ai,Vi=Ai=null,e.current=r,Zf(r),Ep(),ne=o,se=l,ln.transition=i}else e.current=r;if(Ts&&(Ts=!1,Dn=e,da=a),i=e.pendingLanes,i===0&&(Gn=null),Op(r.stateNode),Ge(e,ge()),t!==null)for(s=e.onRecoverableError,r=0;r<t.length;r++)a=t[r],s(a.value,{componentStack:a.stack,digest:a.digest});if(ca)throw ca=!1,e=sl,sl=null,e;return da&1&&e.tag!==0&&Yt(),i=e.pendingLanes,i&1?e===al?Or++:(Or=0,al=e):Or=0,rt(),null}function Yt(){if(Dn!==null){var e=Dd(da),t=ln.transition,r=se;try{if(ln.transition=null,se=16>e?16:e,Dn===null)var s=!1;else{if(e=Dn,Dn=null,da=0,ne&6)throw Error(U(331));var a=ne;for(ne|=4,G=e.current;G!==null;){var i=G,l=i.child;if(G.flags&16){var o=i.deletions;if(o!==null){for(var c=0;c<o.length;c++){var h=o[c];for(G=h;G!==null;){var d=G;switch(d.tag){case 0:case 11:case 15:Lr(8,d,i)}var p=d.child;if(p!==null)p.return=d,G=p;else for(;G!==null;){d=G;var m=d.sibling,S=d.return;if(Xu(d),d===h){G=null;break}if(m!==null){m.return=S,G=m;break}G=S}}}var w=i.alternate;if(w!==null){var N=w.child;if(N!==null){w.child=null;do{var x=N.sibling;N.sibling=null,N=x}while(N!==null)}}G=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,G=l;else e:for(;G!==null;){if(i=G,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Lr(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,G=f;break e}G=i.return}}var g=e.current;for(G=g;G!==null;){l=G;var v=l.child;if(l.subtreeFlags&2064&&v!==null)v.return=l,G=v;else e:for(l=g;G!==null;){if(o=G,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Ca(9,o)}}catch(k){me(o,o.return,k)}if(o===l){G=null;break e}var P=o.sibling;if(P!==null){P.return=o.return,G=P;break e}G=o.return}}if(ne=a,rt(),jn&&typeof jn.onPostCommitFiberRoot=="function")try{jn.onPostCommitFiberRoot(xa,e)}catch{}s=!0}return s}finally{se=r,ln.transition=t}}return!1}function Oc(e,t,r){t=rr(r,t),t=Du(e,t,1),e=Wn(e,t,1),t=Fe(),e!==null&&(rs(e,1,t),Ge(e,t))}function me(e,t,r){if(e.tag===3)Oc(e,e,r);else for(;t!==null;){if(t.tag===3){Oc(t,e,r);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Gn===null||!Gn.has(s))){e=rr(r,e),e=$u(t,e,1),t=Wn(t,e,1),e=Fe(),t!==null&&(rs(t,1,e),Ge(t,e));break}}t=t.return}}function am(e,t,r){var s=e.pingCache;s!==null&&s.delete(t),t=Fe(),e.pingedLanes|=e.suspendedLanes&r,Se===e&&(Le&r)===r&&(be===4||be===3&&(Le&130023424)===Le&&500>ge()-uo?ft(e,0):co|=r),Ge(e,t)}function lh(e,t){t===0&&(e.mode&1?(t=vs,vs<<=1,!(vs&130023424)&&(vs=4194304)):t=1);var r=Fe();e=Ln(e,t),e!==null&&(rs(e,t,r),Ge(e,r))}function im(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),lh(e,r)}function lm(e,t){var r=0;switch(e.tag){case 13:var s=e.stateNode,a=e.memoizedState;a!==null&&(r=a.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(U(314))}s!==null&&s.delete(t),lh(e,r)}var oh;oh=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ke.current)Ue=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Ue=!1,Gf(e,t,r);Ue=!!(e.flags&131072)}else Ue=!1,de&&t.flags&1048576&&hu(t,na,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;Fs(e,t),e=t.pendingProps;var a=Zt(t,Me.current);Qt(t,r),a=ro(null,t,s,e,a,r);var i=so();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,We(s)?(i=!0,Zs(t)):i=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Jl(t),a.updater=Sa,t.stateNode=a,a._reactInternals=t,Wi(t,s,e,r),t=Yi(null,t,s,!0,i,r)):(t.tag=0,de&&i&&Ul(t),Ve(null,t,a,r),t=t.child),t;case 16:s=t.elementType;e:{switch(Fs(e,t),e=t.pendingProps,a=s._init,s=a(s._payload),t.type=s,a=t.tag=cm(s),e=un(s,e),a){case 0:t=Qi(null,t,s,e,r);break e;case 1:t=Nc(null,t,s,e,r);break e;case 11:t=yc(null,t,s,e,r);break e;case 14:t=jc(null,t,s,un(s.type,e),r);break e}throw Error(U(306,s,""))}return t;case 0:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:un(s,a),Qi(e,t,s,a,r);case 1:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:un(s,a),Nc(e,t,s,a,r);case 3:e:{if(Uu(t),e===null)throw Error(U(387));s=t.pendingProps,i=t.memoizedState,a=i.element,xu(e,t),sa(t,s,null,r);var l=t.memoizedState;if(s=l.element,i.isDehydrated)if(i={element:s,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){a=rr(Error(U(423)),t),t=kc(e,t,s,r,a);break e}else if(s!==a){a=rr(Error(U(424)),t),t=kc(e,t,s,r,a);break e}else for(Xe=Kn(t.stateNode.containerInfo.firstChild),Ze=t,de=!0,pn=null,r=gu(t,null,s,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(er(),s===a){t=Pn(e,t,r);break e}Ve(e,t,s,r)}t=t.child}return t;case 5:return yu(t),e===null&&qi(t),s=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,l=a.children,Fi(s,a)?l=null:i!==null&&Fi(s,i)&&(t.flags|=32),qu(e,t),Ve(e,t,l,r),t.child;case 6:return e===null&&qi(t),null;case 13:return Ku(e,t,r);case 4:return Zl(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=nr(t,null,s,r):Ve(e,t,s,r),t.child;case 11:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:un(s,a),yc(e,t,s,a,r);case 7:return Ve(e,t,t.pendingProps,r),t.child;case 8:return Ve(e,t,t.pendingProps.children,r),t.child;case 12:return Ve(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(s=t.type._context,a=t.pendingProps,i=t.memoizedProps,l=a.value,le(ta,s._currentValue),s._currentValue=l,i!==null)if(gn(i.value,l)){if(i.children===a.children&&!Ke.current){t=Pn(e,t,r);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var o=i.dependencies;if(o!==null){l=i.child;for(var c=o.firstContext;c!==null;){if(c.context===s){if(i.tag===1){c=Cn(-1,r&-r),c.tag=2;var h=i.updateQueue;if(h!==null){h=h.shared;var d=h.pending;d===null?c.next=c:(c.next=d.next,d.next=c),h.pending=c}}i.lanes|=r,c=i.alternate,c!==null&&(c.lanes|=r),Ui(i.return,r,t),o.lanes|=r;break}c=c.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(U(341));l.lanes|=r,o=l.alternate,o!==null&&(o.lanes|=r),Ui(l,r,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Ve(e,t,a.children,r),t=t.child}return t;case 9:return a=t.type,s=t.pendingProps.children,Qt(t,r),a=on(a),s=s(a),t.flags|=1,Ve(e,t,s,r),t.child;case 14:return s=t.type,a=un(s,t.pendingProps),a=un(s.type,a),jc(e,t,s,a,r);case 15:return Bu(e,t,t.type,t.pendingProps,r);case 17:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:un(s,a),Fs(e,t),t.tag=1,We(s)?(e=!0,Zs(t)):e=!1,Qt(t,r),Fu(t,s,a),Wi(t,s,a,r),Yi(null,t,s,!0,e,r);case 19:return Wu(e,t,r);case 22:return Hu(e,t,r)}throw Error(U(156,t.tag))};function ch(e,t){return Md(e,t)}function om(e,t,r,s){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function an(e,t,r,s){return new om(e,t,r,s)}function mo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function cm(e){if(typeof e=="function")return mo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Il)return 11;if(e===_l)return 14}return 2}function Yn(e,t){var r=e.alternate;return r===null?(r=an(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Bs(e,t,r,s,a,i){var l=2;if(s=e,typeof e=="function")mo(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Lt:return mt(r.children,a,i,t);case Rl:l=8,a|=8;break;case vi:return e=an(12,r,t,a|2),e.elementType=vi,e.lanes=i,e;case xi:return e=an(13,r,t,a),e.elementType=xi,e.lanes=i,e;case yi:return e=an(19,r,t,a),e.elementType=yi,e.lanes=i,e;case yd:return Ea(r,a,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case vd:l=10;break e;case xd:l=9;break e;case Il:l=11;break e;case _l:l=14;break e;case zn:l=16,s=null;break e}throw Error(U(130,e==null?e:typeof e,""))}return t=an(l,r,t,a),t.elementType=e,t.type=s,t.lanes=i,t}function mt(e,t,r,s){return e=an(7,e,s,t),e.lanes=r,e}function Ea(e,t,r,s){return e=an(22,e,s,t),e.elementType=yd,e.lanes=r,e.stateNode={isHidden:!1},e}function ai(e,t,r){return e=an(6,e,null,t),e.lanes=r,e}function ii(e,t,r){return t=an(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function dm(e,t,r,s,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Da(0),this.expirationTimes=Da(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Da(0),this.identifierPrefix=s,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function go(e,t,r,s,a,i,l,o,c){return e=new dm(e,t,r,o,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=an(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:s,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jl(i),e}function um(e,t,r){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Et,key:s==null?null:""+s,children:e,containerInfo:t,implementation:r}}function dh(e){if(!e)return et;e=e._reactInternals;e:{if(kt(e)!==e||e.tag!==1)throw Error(U(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(We(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(U(171))}if(e.tag===1){var r=e.type;if(We(r))return du(e,r,t)}return t}function uh(e,t,r,s,a,i,l,o,c){return e=go(r,s,!0,e,a,i,l,o,c),e.context=dh(null),r=e.current,s=Fe(),a=Qn(r),i=Cn(s,a),i.callback=t??null,Wn(r,i,a),e.current.lanes=a,rs(e,a,s),Ge(e,s),e}function La(e,t,r,s){var a=t.current,i=Fe(),l=Qn(a);return r=dh(r),t.context===null?t.context=r:t.pendingContext=r,t=Cn(i,l),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=Wn(a,t,l),e!==null&&(mn(e,a,l,i),Ms(e,a,l)),l}function ha(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Rc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function vo(e,t){Rc(e,t),(e=e.alternate)&&Rc(e,t)}function hm(){return null}var hh=typeof reportError=="function"?reportError:function(e){console.error(e)};function xo(e){this._internalRoot=e}Pa.prototype.render=xo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(U(409));La(e,t,null,null)};Pa.prototype.unmount=xo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jt(function(){La(null,e,null,null)}),t[En]=null}};function Pa(e){this._internalRoot=e}Pa.prototype.unstable_scheduleHydration=function(e){if(e){var t=Hd();e={blockedOn:null,target:e,priority:t};for(var r=0;r<An.length&&t!==0&&t<An[r].priority;r++);An.splice(r,0,e),r===0&&Ud(e)}};function yo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Oa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ic(){}function pm(e,t,r,s,a){if(a){if(typeof s=="function"){var i=s;s=function(){var h=ha(l);i.call(h)}}var l=uh(t,s,e,0,null,!1,!1,"",Ic);return e._reactRootContainer=l,e[En]=l.current,Hr(e.nodeType===8?e.parentNode:e),jt(),l}for(;a=e.lastChild;)e.removeChild(a);if(typeof s=="function"){var o=s;s=function(){var h=ha(c);o.call(h)}}var c=go(e,0,!1,null,null,!1,!1,"",Ic);return e._reactRootContainer=c,e[En]=c.current,Hr(e.nodeType===8?e.parentNode:e),jt(function(){La(t,c,r,s)}),c}function Ra(e,t,r,s,a){var i=r._reactRootContainer;if(i){var l=i;if(typeof a=="function"){var o=a;a=function(){var c=ha(l);o.call(c)}}La(t,l,e,a)}else l=pm(r,t,e,a,s);return ha(l)}$d=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=yr(t.pendingLanes);r!==0&&(Al(t,r|1),Ge(t,ge()),!(ne&6)&&(sr=ge()+500,rt()))}break;case 13:jt(function(){var s=Ln(e,1);if(s!==null){var a=Fe();mn(s,e,1,a)}}),vo(e,1)}};Vl=function(e){if(e.tag===13){var t=Ln(e,134217728);if(t!==null){var r=Fe();mn(t,e,134217728,r)}vo(e,134217728)}};Bd=function(e){if(e.tag===13){var t=Qn(e),r=Ln(e,t);if(r!==null){var s=Fe();mn(r,e,t,s)}vo(e,t)}};Hd=function(){return se};qd=function(e,t){var r=se;try{return se=e,t()}finally{se=r}};Li=function(e,t,r){switch(t){case"input":if(ki(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var s=r[t];if(s!==e&&s.form===e.form){var a=ka(s);if(!a)throw Error(U(90));Nd(s),ki(s,a)}}}break;case"textarea":bd(e,r);break;case"select":t=r.value,t!=null&&Ut(e,!!r.multiple,t,!1)}};Pd=ho;Od=jt;var fm={usingClientEntryPoint:!1,Events:[as,It,ka,Ed,Ld,ho]},gr={findFiberByHostInstance:ct,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},mm={bundleType:gr.bundleType,version:gr.version,rendererPackageName:gr.rendererPackageName,rendererConfig:gr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=_d(e),e===null?null:e.stateNode},findFiberByHostInstance:gr.findFiberByHostInstance||hm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Es=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Es.isDisabled&&Es.supportsFiber)try{xa=Es.inject(mm),jn=Es}catch{}}nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fm;nn.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yo(t))throw Error(U(200));return um(e,t,null,r)};nn.createRoot=function(e,t){if(!yo(e))throw Error(U(299));var r=!1,s="",a=hh;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=go(e,1,!1,null,null,r,!1,s,a),e[En]=t.current,Hr(e.nodeType===8?e.parentNode:e),new xo(t)};nn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(U(188)):(e=Object.keys(e).join(","),Error(U(268,e)));return e=_d(t),e=e===null?null:e.stateNode,e};nn.flushSync=function(e){return jt(e)};nn.hydrate=function(e,t,r){if(!Oa(t))throw Error(U(200));return Ra(null,e,t,!0,r)};nn.hydrateRoot=function(e,t,r){if(!yo(e))throw Error(U(405));var s=r!=null&&r.hydratedSources||null,a=!1,i="",l=hh;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),t=uh(t,null,e,1,r??null,a,!1,i,l),e[En]=t.current,Hr(e),s)for(e=0;e<s.length;e++)r=s[e],a=r._getVersion,a=a(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new Pa(t)};nn.render=function(e,t,r){if(!Oa(t))throw Error(U(200));return Ra(null,e,t,!1,r)};nn.unmountComponentAtNode=function(e){if(!Oa(e))throw Error(U(40));return e._reactRootContainer?(jt(function(){Ra(null,null,e,!1,function(){e._reactRootContainer=null,e[En]=null})}),!0):!1};nn.unstable_batchedUpdates=ho;nn.unstable_renderSubtreeIntoContainer=function(e,t,r,s){if(!Oa(r))throw Error(U(200));if(e==null||e._reactInternals===void 0)throw Error(U(38));return Ra(e,t,r,!1,s)};nn.version="18.3.1-next-f1338f8080-20240426";function ph(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ph)}catch(e){console.error(e)}}ph(),pd.exports=nn;var gm=pd.exports,_c=gm;mi.createRoot=_c.createRoot,mi.hydrateRoot=_c.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jr(){return Jr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},Jr.apply(this,arguments)}var $n;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})($n||($n={}));const zc="popstate";function vm(e){e===void 0&&(e={});function t(s,a){let{pathname:i,search:l,hash:o}=s.location;return ol("",{pathname:i,search:l,hash:o},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function r(s,a){return typeof a=="string"?a:pa(a)}return ym(t,r,null,e)}function Ne(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function jo(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function xm(){return Math.random().toString(36).substr(2,8)}function Mc(e,t){return{usr:e.state,key:e.key,idx:t}}function ol(e,t,r,s){return r===void 0&&(r=null),Jr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?or(t):t,{state:r,key:t&&t.key||s||xm()})}function pa(e){let{pathname:t="/",search:r="",hash:s=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),s&&s!=="#"&&(t+=s.charAt(0)==="#"?s:"#"+s),t}function or(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let s=e.indexOf("?");s>=0&&(t.search=e.substr(s),e=e.substr(0,s)),e&&(t.pathname=e)}return t}function ym(e,t,r,s){s===void 0&&(s={});let{window:a=document.defaultView,v5Compat:i=!1}=s,l=a.history,o=$n.Pop,c=null,h=d();h==null&&(h=0,l.replaceState(Jr({},l.state,{idx:h}),""));function d(){return(l.state||{idx:null}).idx}function p(){o=$n.Pop;let x=d(),f=x==null?null:x-h;h=x,c&&c({action:o,location:N.location,delta:f})}function m(x,f){o=$n.Push;let g=ol(N.location,x,f);h=d()+1;let v=Mc(g,h),P=N.createHref(g);try{l.pushState(v,"",P)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;a.location.assign(P)}i&&c&&c({action:o,location:N.location,delta:1})}function S(x,f){o=$n.Replace;let g=ol(N.location,x,f);h=d();let v=Mc(g,h),P=N.createHref(g);l.replaceState(v,"",P),i&&c&&c({action:o,location:N.location,delta:0})}function w(x){let f=a.location.origin!=="null"?a.location.origin:a.location.href,g=typeof x=="string"?x:pa(x);return g=g.replace(/ $/,"%20"),Ne(f,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,f)}let N={get action(){return o},get location(){return e(a,l)},listen(x){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(zc,p),c=x,()=>{a.removeEventListener(zc,p),c=null}},createHref(x){return t(a,x)},createURL:w,encodeLocation(x){let f=w(x);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:m,replace:S,go(x){return l.go(x)}};return N}var Ac;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ac||(Ac={}));function jm(e,t,r){return r===void 0&&(r="/"),Nm(e,t,r)}function Nm(e,t,r,s){let a=typeof t=="string"?or(t):t,i=No(a.pathname||"/",r);if(i==null)return null;let l=fh(e);km(l);let o=null;for(let c=0;o==null&&c<l.length;++c){let h=_m(i);o=Om(l[c],h)}return o}function fh(e,t,r,s){t===void 0&&(t=[]),r===void 0&&(r=[]),s===void 0&&(s="");let a=(i,l,o)=>{let c={relativePath:o===void 0?i.path||"":o,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};c.relativePath.startsWith("/")&&(Ne(c.relativePath.startsWith(s),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(s.length));let h=Xn([s,c.relativePath]),d=r.concat(c);i.children&&i.children.length>0&&(Ne(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),fh(i.children,t,d,h)),!(i.path==null&&!i.index)&&t.push({path:h,score:Lm(h,i.index),routesMeta:d})};return e.forEach((i,l)=>{var o;if(i.path===""||!((o=i.path)!=null&&o.includes("?")))a(i,l);else for(let c of mh(i.path))a(i,l,c)}),t}function mh(e){let t=e.split("/");if(t.length===0)return[];let[r,...s]=t,a=r.endsWith("?"),i=r.replace(/\?$/,"");if(s.length===0)return a?[i,""]:[i];let l=mh(s.join("/")),o=[];return o.push(...l.map(c=>c===""?i:[i,c].join("/"))),a&&o.push(...l),o.map(c=>e.startsWith("/")&&c===""?"/":c)}function km(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Pm(t.routesMeta.map(s=>s.childrenIndex),r.routesMeta.map(s=>s.childrenIndex)))}const bm=/^:[\w-]+$/,wm=3,Sm=2,Cm=1,Tm=10,Em=-2,Vc=e=>e==="*";function Lm(e,t){let r=e.split("/"),s=r.length;return r.some(Vc)&&(s+=Em),t&&(s+=Sm),r.filter(a=>!Vc(a)).reduce((a,i)=>a+(bm.test(i)?wm:i===""?Cm:Tm),s)}function Pm(e,t){return e.length===t.length&&e.slice(0,-1).every((s,a)=>s===t[a])?e[e.length-1]-t[t.length-1]:0}function Om(e,t,r){let{routesMeta:s}=e,a={},i="/",l=[];for(let o=0;o<s.length;++o){let c=s[o],h=o===s.length-1,d=i==="/"?t:t.slice(i.length)||"/",p=Rm({path:c.relativePath,caseSensitive:c.caseSensitive,end:h},d),m=c.route;if(!p)return null;Object.assign(a,p.params),l.push({params:a,pathname:Xn([i,p.pathname]),pathnameBase:Fm(Xn([i,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(i=Xn([i,p.pathnameBase]))}return l}function Rm(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,s]=Im(e.path,e.caseSensitive,e.end),a=t.match(r);if(!a)return null;let i=a[0],l=i.replace(/(.)\/+$/,"$1"),o=a.slice(1);return{params:s.reduce((h,d,p)=>{let{paramName:m,isOptional:S}=d;if(m==="*"){let N=o[p]||"";l=i.slice(0,i.length-N.length).replace(/(.)\/+$/,"$1")}const w=o[p];return S&&!w?h[m]=void 0:h[m]=(w||"").replace(/%2F/g,"/"),h},{}),pathname:i,pathnameBase:l,pattern:e}}function Im(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),jo(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let s=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,o,c)=>(s.push({paramName:o,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(s.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),s]}function _m(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return jo(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function No(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,s=e.charAt(r);return s&&s!=="/"?null:e.slice(r)||"/"}const zm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Mm=e=>zm.test(e);function Am(e,t){t===void 0&&(t="/");let{pathname:r,search:s="",hash:a=""}=typeof e=="string"?or(e):e,i;if(r)if(Mm(r))i=r;else{if(r.includes("//")){let l=r;r=r.replace(/\/\/+/g,"/"),jo(!1,"Pathnames cannot have embedded double slashes - normalizing "+(l+" -> "+r))}r.startsWith("/")?i=Fc(r.substring(1),"/"):i=Fc(r,t)}else i=t;return{pathname:i,search:Dm(s),hash:$m(a)}}function Fc(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}function li(e,t,r,s){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Vm(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function gh(e,t){let r=Vm(e);return t?r.map((s,a)=>a===r.length-1?s.pathname:s.pathnameBase):r.map(s=>s.pathnameBase)}function vh(e,t,r,s){s===void 0&&(s=!1);let a;typeof e=="string"?a=or(e):(a=Jr({},e),Ne(!a.pathname||!a.pathname.includes("?"),li("?","pathname","search",a)),Ne(!a.pathname||!a.pathname.includes("#"),li("#","pathname","hash",a)),Ne(!a.search||!a.search.includes("#"),li("#","search","hash",a)));let i=e===""||a.pathname==="",l=i?"/":a.pathname,o;if(l==null)o=r;else{let p=t.length-1;if(!s&&l.startsWith("..")){let m=l.split("/");for(;m[0]==="..";)m.shift(),p-=1;a.pathname=m.join("/")}o=p>=0?t[p]:"/"}let c=Am(a,o),h=l&&l!=="/"&&l.endsWith("/"),d=(i||l===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(h||d)&&(c.pathname+="/"),c}const Xn=e=>e.join("/").replace(/\/\/+/g,"/"),Fm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Dm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,$m=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Bm(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const xh=["post","put","patch","delete"];new Set(xh);const Hm=["get",...xh];new Set(Hm);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zr(){return Zr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},Zr.apply(this,arguments)}const ko=u.createContext(null),qm=u.createContext(null),bt=u.createContext(null),Ia=u.createContext(null),st=u.createContext({outlet:null,matches:[],isDataRoute:!1}),yh=u.createContext(null);function Um(e,t){let{relative:r}=t===void 0?{}:t;ls()||Ne(!1);let{basename:s,navigator:a}=u.useContext(bt),{hash:i,pathname:l,search:o}=kh(e,{relative:r}),c=l;return s!=="/"&&(c=l==="/"?s:Xn([s,l])),a.createHref({pathname:c,search:o,hash:i})}function ls(){return u.useContext(Ia)!=null}function os(){return ls()||Ne(!1),u.useContext(Ia).location}function jh(e){u.useContext(bt).static||u.useLayoutEffect(e)}function Nh(){let{isDataRoute:e}=u.useContext(st);return e?ag():Km()}function Km(){ls()||Ne(!1);let e=u.useContext(ko),{basename:t,future:r,navigator:s}=u.useContext(bt),{matches:a}=u.useContext(st),{pathname:i}=os(),l=JSON.stringify(gh(a,r.v7_relativeSplatPath)),o=u.useRef(!1);return jh(()=>{o.current=!0}),u.useCallback(function(h,d){if(d===void 0&&(d={}),!o.current)return;if(typeof h=="number"){s.go(h);return}let p=vh(h,JSON.parse(l),i,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Xn([t,p.pathname])),(d.replace?s.replace:s.push)(p,d.state,d)},[t,s,l,i,e])}function Wm(){let{matches:e}=u.useContext(st),t=e[e.length-1];return t?t.params:{}}function kh(e,t){let{relative:r}=t===void 0?{}:t,{future:s}=u.useContext(bt),{matches:a}=u.useContext(st),{pathname:i}=os(),l=JSON.stringify(gh(a,s.v7_relativeSplatPath));return u.useMemo(()=>vh(e,JSON.parse(l),i,r==="path"),[e,l,i,r])}function Gm(e,t){return Qm(e,t)}function Qm(e,t,r,s){ls()||Ne(!1);let{navigator:a}=u.useContext(bt),{matches:i}=u.useContext(st),l=i[i.length-1],o=l?l.params:{};l&&l.pathname;let c=l?l.pathnameBase:"/";l&&l.route;let h=os(),d;if(t){var p;let x=typeof t=="string"?or(t):t;c==="/"||(p=x.pathname)!=null&&p.startsWith(c)||Ne(!1),d=x}else d=h;let m=d.pathname||"/",S=m;if(c!=="/"){let x=c.replace(/^\//,"").split("/");S="/"+m.replace(/^\//,"").split("/").slice(x.length).join("/")}let w=jm(e,{pathname:S}),N=eg(w&&w.map(x=>Object.assign({},x,{params:Object.assign({},o,x.params),pathname:Xn([c,a.encodeLocation?a.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?c:Xn([c,a.encodeLocation?a.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),i,r,s);return t&&N?u.createElement(Ia.Provider,{value:{location:Zr({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:$n.Pop}},N):N}function Ym(){let e=sg(),t=Bm(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return u.createElement(u.Fragment,null,u.createElement("h2",null,"Unexpected Application Error!"),u.createElement("h3",{style:{fontStyle:"italic"}},t),r?u.createElement("pre",{style:a},r):null,null)}const Xm=u.createElement(Ym,null);class Jm extends u.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?u.createElement(st.Provider,{value:this.props.routeContext},u.createElement(yh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Zm(e){let{routeContext:t,match:r,children:s}=e,a=u.useContext(ko);return a&&a.static&&a.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=r.route.id),u.createElement(st.Provider,{value:t},s)}function eg(e,t,r,s){var a;if(t===void 0&&(t=[]),r===void 0&&(r=null),s===void 0&&(s=null),e==null){var i;if(!r)return null;if(r.errors)e=r.matches;else if((i=s)!=null&&i.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let l=e,o=(a=r)==null?void 0:a.errors;if(o!=null){let d=l.findIndex(p=>p.route.id&&(o==null?void 0:o[p.route.id])!==void 0);d>=0||Ne(!1),l=l.slice(0,Math.min(l.length,d+1))}let c=!1,h=-1;if(r&&s&&s.v7_partialHydration)for(let d=0;d<l.length;d++){let p=l[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(h=d),p.route.id){let{loaderData:m,errors:S}=r,w=p.route.loader&&m[p.route.id]===void 0&&(!S||S[p.route.id]===void 0);if(p.route.lazy||w){c=!0,h>=0?l=l.slice(0,h+1):l=[l[0]];break}}}return l.reduceRight((d,p,m)=>{let S,w=!1,N=null,x=null;r&&(S=o&&p.route.id?o[p.route.id]:void 0,N=p.route.errorElement||Xm,c&&(h<0&&m===0?(ig("route-fallback"),w=!0,x=null):h===m&&(w=!0,x=p.route.hydrateFallbackElement||null)));let f=t.concat(l.slice(0,m+1)),g=()=>{let v;return S?v=N:w?v=x:p.route.Component?v=u.createElement(p.route.Component,null):p.route.element?v=p.route.element:v=d,u.createElement(Zm,{match:p,routeContext:{outlet:d,matches:f,isDataRoute:r!=null},children:v})};return r&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?u.createElement(Jm,{location:r.location,revalidation:r.revalidation,component:N,error:S,children:g(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):g()},null)}var bh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(bh||{}),wh=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(wh||{});function ng(e){let t=u.useContext(ko);return t||Ne(!1),t}function tg(e){let t=u.useContext(qm);return t||Ne(!1),t}function rg(e){let t=u.useContext(st);return t||Ne(!1),t}function Sh(e){let t=rg(),r=t.matches[t.matches.length-1];return r.route.id||Ne(!1),r.route.id}function sg(){var e;let t=u.useContext(yh),r=tg(),s=Sh();return t!==void 0?t:(e=r.errors)==null?void 0:e[s]}function ag(){let{router:e}=ng(bh.UseNavigateStable),t=Sh(wh.UseNavigateStable),r=u.useRef(!1);return jh(()=>{r.current=!0}),u.useCallback(function(a,i){i===void 0&&(i={}),r.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,Zr({fromRouteId:t},i)))},[e,t])}const Dc={};function ig(e,t,r){Dc[e]||(Dc[e]=!0)}function lg(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function ae(e){Ne(!1)}function og(e){let{basename:t="/",children:r=null,location:s,navigationType:a=$n.Pop,navigator:i,static:l=!1,future:o}=e;ls()&&Ne(!1);let c=t.replace(/^\/*/,"/"),h=u.useMemo(()=>({basename:c,navigator:i,static:l,future:Zr({v7_relativeSplatPath:!1},o)}),[c,o,i,l]);typeof s=="string"&&(s=or(s));let{pathname:d="/",search:p="",hash:m="",state:S=null,key:w="default"}=s,N=u.useMemo(()=>{let x=No(d,c);return x==null?null:{location:{pathname:x,search:p,hash:m,state:S,key:w},navigationType:a}},[c,d,p,m,S,w,a]);return N==null?null:u.createElement(bt.Provider,{value:h},u.createElement(Ia.Provider,{children:r,value:N}))}function cg(e){let{children:t,location:r}=e;return Gm(cl(t),r)}new Promise(()=>{});function cl(e,t){t===void 0&&(t=[]);let r=[];return u.Children.forEach(e,(s,a)=>{if(!u.isValidElement(s))return;let i=[...t,a];if(s.type===u.Fragment){r.push.apply(r,cl(s.props.children,i));return}s.type!==ae&&Ne(!1),!s.props.index||!s.props.children||Ne(!1);let l={id:s.props.id||i.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(l.children=cl(s.props.children,i)),r.push(l)}),r}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function dl(){return dl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},dl.apply(this,arguments)}function dg(e,t){if(e==null)return{};var r={},s=Object.keys(e),a,i;for(i=0;i<s.length;i++)a=s[i],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}function ug(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function hg(e,t){return e.button===0&&(!t||t==="_self")&&!ug(e)}const pg=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],fg="6";try{window.__reactRouterVersion=fg}catch{}const mg="startTransition",$c=sp[mg];function gg(e){let{basename:t,children:r,future:s,window:a}=e,i=u.useRef();i.current==null&&(i.current=vm({window:a,v5Compat:!0}));let l=i.current,[o,c]=u.useState({action:l.action,location:l.location}),{v7_startTransition:h}=s||{},d=u.useCallback(p=>{h&&$c?$c(()=>c(p)):c(p)},[c,h]);return u.useLayoutEffect(()=>l.listen(d),[l,d]),u.useEffect(()=>lg(s),[s]),u.createElement(og,{basename:t,children:r,location:o.location,navigationType:o.action,navigator:l,future:s})}const vg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",xg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Te=u.forwardRef(function(t,r){let{onClick:s,relative:a,reloadDocument:i,replace:l,state:o,target:c,to:h,preventScrollReset:d,viewTransition:p}=t,m=dg(t,pg),{basename:S}=u.useContext(bt),w,N=!1;if(typeof h=="string"&&xg.test(h)&&(w=h,vg))try{let v=new URL(window.location.href),P=h.startsWith("//")?new URL(v.protocol+h):new URL(h),k=No(P.pathname,S);P.origin===v.origin&&k!=null?h=k+P.search+P.hash:N=!0}catch{}let x=Um(h,{relative:a}),f=yg(h,{replace:l,state:o,target:c,preventScrollReset:d,relative:a,viewTransition:p});function g(v){s&&s(v),v.defaultPrevented||f(v)}return u.createElement("a",dl({},m,{href:w||x,onClick:N||i?s:g,ref:r,target:c}))});var Bc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Bc||(Bc={}));var Hc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Hc||(Hc={}));function yg(e,t){let{target:r,replace:s,state:a,preventScrollReset:i,relative:l,viewTransition:o}=t===void 0?{}:t,c=Nh(),h=os(),d=kh(e,{relative:l});return u.useCallback(p=>{if(hg(p,r)){p.preventDefault();let m=s!==void 0?s:pa(h)===pa(d);c(e,{replace:m,state:a,preventScrollReset:i,relative:l,viewTransition:o})}},[h,c,d,s,a,r,e,i,l,o])}/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var jg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),W=(e,t)=>{const r=u.forwardRef(({color:s="currentColor",size:a=24,strokeWidth:i=2,absoluteStrokeWidth:l,className:o="",children:c,...h},d)=>u.createElement("svg",{ref:d,...jg,width:a,height:a,stroke:s,strokeWidth:l?Number(i)*24/Number(a):i,className:["lucide",`lucide-${Ng(e)}`,o].join(" "),...h},[...t.map(([p,m])=>u.createElement(p,m)),...Array.isArray(c)?c:[c]]));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const On=W("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg=W("ArrowDownNarrowWide",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h4",key:"6d7r33"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h10",key:"1438ji"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=W("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qc=W("ArrowRightLeft",[["path",{d:"m16 3 4 4-4 4",key:"1x1c3m"}],["path",{d:"M20 7H4",key:"zbl0bi"}],["path",{d:"m8 21-4-4 4-4",key:"h9nckh"}],["path",{d:"M4 17h16",key:"g4d7ey"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=W("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=W("ArrowUpDown",[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=W("ArrowUpNarrowWide",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M11 12h4",key:"q8tih4"}],["path",{d:"M11 16h7",key:"uosisv"}],["path",{d:"M11 20h10",key:"jvxblo"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=W("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uc=W("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=W("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=W("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=W("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=W("Brain",[["path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",key:"1mhkh5"}],["path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",key:"1d6s00"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=W("Bug",[["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",key:"xs1cw7"}],["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4",key:"k3fwyw"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _e=W("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=W("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ul=W("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=W("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=W("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hl=W("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pl=W("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=W("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=W("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fl=W("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oi=W("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kc=W("FileCode",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xt=W("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=W("GitFork",[["circle",{cx:"12",cy:"18",r:"3",key:"1mpf1b"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9",key:"1uq4wg"}],["path",{d:"M12 12v3",key:"158kv8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=W("GitGraph",[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M5 9v6",key:"158jrl"}],["circle",{cx:"5",cy:"18",r:"3",key:"104gr9"}],["path",{d:"M12 3v18",key:"108xh3"}],["circle",{cx:"19",cy:"6",r:"3",key:"108a5v"}],["path",{d:"M16 15.7A9 9 0 0 0 19 9",key:"1e3vqb"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bo=W("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=W("GraduationCap",[["path",{d:"M22 10v6M2 10l10-5 10 5-10 5z",key:"1ef52a"}],["path",{d:"M6 12v5c3 3 9 3 12 0v-5",key:"1f75yj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=W("Grid3x3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rr=W("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=W("HeartHandshake",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",key:"12sd6o"}],["path",{d:"m18 15-2-2",key:"60u0ii"}],["path",{d:"m15 18-2-2",key:"6p76be"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=W("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g=W("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bn=W("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ir=W("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=W("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=W("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const es=W("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wo=W("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=W("ListOrdered",[["line",{x1:"10",x2:"21",y1:"6",y2:"6",key:"76qw6h"}],["line",{x1:"10",x2:"21",y1:"12",y2:"12",key:"16nom4"}],["line",{x1:"10",x2:"21",y1:"18",y2:"18",key:"u3jurt"}],["path",{d:"M4 6h1v4",key:"cnovpq"}],["path",{d:"M4 10h2",key:"16xx2s"}],["path",{d:"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1",key:"m9a95d"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=W("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=W("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wc=W("Map",[["polygon",{points:"3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21",key:"ok2ie8"}],["line",{x1:"9",x2:"9",y1:"3",y2:"18",key:"w34qz5"}],["line",{x1:"15",x2:"15",y1:"6",y2:"21",key:"volv9a"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=W("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=W("MousePointer2",[["path",{d:"m4 4 7.07 17 2.51-7.39L21 11.07z",key:"1vqm48"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=W("MoveUp",[["path",{d:"M8 6L12 2L16 6",key:"1yvkyx"}],["path",{d:"M12 2V22",key:"r89rzk"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ml=W("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=W("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ae=W("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fa=W("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=W("Puzzle",[["path",{d:"M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z",key:"i0oyt7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg=W("Pyramid",[["path",{d:"M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z",key:"aenxs0"}],["path",{d:"M12 2v20",key:"t6zp3m"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=W("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const at=W("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=W("Scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cs=W("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const St=W("SkipForward",[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=W("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg=W("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gl=W("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg=W("TreeDeciduous",[["path",{d:"M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z",key:"oadzkq"}],["path",{d:"M12 19v3",key:"npa21l"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=W("TreePine",[["path",{d:"m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z",key:"cpyugq"}],["path",{d:"M12 22v-3",key:"kmzjlo"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nr=W("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=W("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gc=W("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=W("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const So=W("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function tv(){const e=os(),[t,r]=u.useState(!1),s=e.pathname==="/"?"home":e.pathname.replace("/","").replace("_",""),a=()=>r(!t),i=()=>r(!1);u.useEffect(()=>{const o=()=>{window.innerWidth>1024&&r(!1)};return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[]),u.useEffect(()=>{t?document.body.style.overflow="hidden":document.body.style.overflow=""},[t]);const l=({to:o,icon:c,children:h,pageName:d})=>{const p=s===d;return n.jsxs(Te,{to:o,className:`nav-item ${p?"active":""}`,onClick:i,children:[n.jsx(c,{}),n.jsx("span",{children:h})]})};return n.jsxs(n.Fragment,{children:[n.jsx("button",{className:"mobile-menu-toggle",id:"mobileMenuToggle","aria-label":"Toggle menu",onClick:a,children:t?n.jsx(Lh,{}):n.jsx(Ug,{})}),n.jsx("div",{className:`sidebar-overlay ${t?"active":""}`,onClick:i}),n.jsxs("aside",{className:`sidebar ${t?"active":""}`,id:"sidebar",children:[n.jsx("div",{className:"sidebar-header",children:n.jsxs(Te,{to:"/",className:"logo-wrapper",onClick:i,children:[n.jsx("img",{src:"/logo.svg",alt:"DSA Visualizer Logo",className:"logo-icon"}),n.jsx("span",{className:"logo-text",children:"DSA Visualizer"})]})}),n.jsxs("nav",{className:"sidebar-nav",children:[n.jsxs("div",{className:"nav-section",children:[n.jsx("div",{className:"nav-section-title",children:"Explore"}),n.jsx(l,{to:"/",icon:$g,pageName:"home",children:"Home"}),n.jsx(l,{to:"/algorithms",icon:hl,pageName:"algorithms",children:"Algorithms"}),n.jsx(l,{to:"/practice",icon:Nr,pageName:"practice",children:"Practice"})]}),n.jsxs("div",{className:"nav-section",children:[n.jsx("div",{className:"nav-section-title",children:"More"}),n.jsx(l,{to:"/contact",icon:Th,pageName:"contact",children:"Contact"}),n.jsx(l,{to:"/contributions",icon:Dg,pageName:"contributions",children:"Contributions"})]})]}),n.jsxs("div",{className:"sidebar-footer",children:[n.jsxs("div",{className:"social-links-sidebar",children:[n.jsx("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",title:"GitHub",children:n.jsx(bo,{})}),n.jsx("a",{href:"https://www.linkedin.com/in/abdullah-mahfouz-5188b1306/",target:"_blank",rel:"noopener noreferrer",title:"LinkedIn",children:n.jsx(wo,{})})]}),n.jsx("p",{className:"copyright",children:"© 2026 Abdullah Mahfouz"})]})]})]})}function rv(){return n.jsx("footer",{className:"main-footer",children:n.jsxs("div",{className:"footer-content",children:[n.jsxs("div",{className:"footer-social",children:[n.jsxs("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",className:"footer-link",children:[n.jsx(bo,{}),n.jsx("span",{children:"GitHub"})]}),n.jsxs("a",{href:"https://www.linkedin.com/in/abdullah-mahfouz-5188b1306/",target:"_blank",rel:"noopener noreferrer",className:"footer-link",children:[n.jsx(wo,{}),n.jsx("span",{children:"LinkedIn"})]})]}),n.jsx("p",{className:"footer-copyright",children:"© 2026 Abdullah Mahfouz"})]})})}function sv(){const[e,t]=u.useState(0);u.useEffect(()=>{const s=setInterval(()=>{t(a=>(a+1)%4)},3e3);return()=>clearInterval(s)},[]);const r=[{icon:Ir,name:"Stack",color:"#6366f1",description:"LIFO Operations"},{icon:Xt,name:"Binary Tree",color:"#10b981",description:"Tree Traversals"},{icon:Rr,name:"Hash Table",color:"#f59e0b",description:"Key-Value Mapping"},{icon:fl,name:"Heap",color:"#ec4899",description:"Priority Queue"}];return n.jsxs(n.Fragment,{children:[n.jsxs("section",{className:"hero-advanced",children:[n.jsxs("div",{className:"hero-bg-effects",children:[n.jsx("div",{className:"gradient-orb orb-1"}),n.jsx("div",{className:"gradient-orb orb-2"}),n.jsx("div",{className:"gradient-orb orb-3"}),n.jsx("div",{className:"grid-overlay"}),n.jsx("div",{className:"noise-overlay"})]}),n.jsxs("div",{className:"hero-content-advanced",children:[n.jsxs("div",{className:"hero-badge-advanced",children:[n.jsx(Vg,{className:"badge-icon"}),n.jsx("span",{children:"Interactive Learning Platform"})]}),n.jsxs("h1",{className:"hero-title-advanced",children:[n.jsx("span",{className:"title-line",children:"Learn"}),n.jsx("span",{className:"title-line gradient-text-animated",children:"Data Structures"}),n.jsxs("span",{className:"title-line",children:["& ",n.jsx("span",{className:"gradient-text-animated",children:"Algorithms"})]})]}),n.jsx("p",{className:"hero-description-advanced",children:"The complete DSA learning platform. Visualize data structures in real-time, practice coding problems, and master algorithms with step-by-step animations."}),n.jsxs("div",{className:"hero-cta-group",children:[n.jsxs(Te,{to:"/algorithms",className:"btn-glow-primary",children:[n.jsx(oi,{className:"btn-icon-left"}),n.jsx("span",{children:"Explore Visualizers"})]}),n.jsxs(Te,{to:"/practice",className:"btn-glass",children:[n.jsx(Nr,{className:"btn-icon-left"}),n.jsx("span",{children:"Practice Problems"})]})]}),n.jsxs("div",{className:"hero-stats",children:[n.jsxs("div",{className:"stat-item",children:[n.jsx("span",{className:"stat-number",children:"12+"}),n.jsx("span",{className:"stat-label",children:"Visualizers"})]}),n.jsx("div",{className:"stat-divider"}),n.jsxs("div",{className:"stat-item",children:[n.jsx("span",{className:"stat-number",children:"22+"}),n.jsx("span",{className:"stat-label",children:"Practice Problems"})]}),n.jsx("div",{className:"stat-divider"}),n.jsxs("div",{className:"stat-item",children:[n.jsx("span",{className:"stat-number",children:"9"}),n.jsx("span",{className:"stat-label",children:"Topic Categories"})]})]})]}),n.jsxs("div",{className:"hero-showcase",children:[n.jsxs("div",{className:"showcase-window",children:[n.jsxs("div",{className:"window-header",children:[n.jsxs("div",{className:"window-dots",children:[n.jsx("span",{className:"dot red"}),n.jsx("span",{className:"dot yellow"}),n.jsx("span",{className:"dot green"})]}),n.jsxs("span",{className:"window-title",children:[n.jsx(Jg,{size:14}),"DSA Visualizer"]})]}),n.jsx("div",{className:"showcase-content",children:r.map((s,a)=>n.jsxs("div",{className:`showcase-card ${a===e?"active":""}`,style:{"--card-color":s.color},children:[n.jsx("div",{className:"showcase-card-icon",children:n.jsx(s.icon,{})}),n.jsxs("div",{className:"showcase-card-info",children:[n.jsx("h4",{children:s.name}),n.jsx("p",{children:s.description})]}),n.jsx(ul,{className:"showcase-arrow"})]},s.name))})]}),n.jsx("div",{className:"floating-element float-1",children:n.jsx(hl,{})}),n.jsx("div",{className:"floating-element float-2",children:n.jsx(Nr,{})}),n.jsx("div",{className:"floating-element float-3",children:n.jsx(Eg,{})})]})]}),n.jsxs("section",{className:"main-features-section",children:[n.jsxs("div",{className:"section-header-advanced",children:[n.jsx("span",{className:"section-tag",children:"What We Offer"}),n.jsx("h2",{children:"Two Ways to Master DSA"}),n.jsx("p",{children:"Combine visual learning with hands-on practice for complete understanding"})]}),n.jsxs("div",{className:"main-features-grid",children:[n.jsxs(Te,{to:"/algorithms",className:"main-feature-card",children:[n.jsx("div",{className:"main-feature-card-bg visualizers"}),n.jsxs("div",{className:"main-feature-content",children:[n.jsx("div",{className:"main-feature-icon",style:{"--feature-color":"#6366f1"},children:n.jsx(oi,{})}),n.jsx("div",{className:"main-feature-badge",children:"12+ Structures"}),n.jsx("h3",{children:"Interactive Visualizers"}),n.jsx("p",{children:"Watch data structures come alive with real-time animations. See exactly how operations like push, pop, insert, and delete work at every step."}),n.jsxs("ul",{className:"main-feature-list",children:[n.jsxs("li",{children:[n.jsx(_e,{size:16})," Stack, Queue, Linked List"]}),n.jsxs("li",{children:[n.jsx(_e,{size:16})," Binary Trees, BST, AVL, Heaps"]}),n.jsxs("li",{children:[n.jsx(_e,{size:16})," Hash Tables with collision handling"]}),n.jsxs("li",{children:[n.jsx(_e,{size:16})," Graph algorithms (BFS, DFS, Dijkstra)"]})]}),n.jsxs("div",{className:"main-feature-cta",children:[n.jsx("span",{children:"Start Visualizing"}),n.jsx(re,{})]})]})]}),n.jsxs(Te,{to:"/practice",className:"main-feature-card",children:[n.jsx("div",{className:"main-feature-card-bg practice"}),n.jsxs("div",{className:"main-feature-content",children:[n.jsx("div",{className:"main-feature-icon",style:{"--feature-color":"#10b981"},children:n.jsx(Nr,{})}),n.jsx("div",{className:"main-feature-badge",children:"22+ Problems"}),n.jsx("h3",{children:"Practice Problems"}),n.jsx("p",{children:"Solve curated coding challenges organized in a structured roadmap. Write code, run tests, and track your progress as you level up your skills."}),n.jsxs("ul",{className:"main-feature-list",children:[n.jsxs("li",{children:[n.jsx(_e,{size:16})," NeetCode-style learning roadmap"]}),n.jsxs("li",{children:[n.jsx(_e,{size:16})," Built-in code editor with syntax highlighting"]}),n.jsxs("li",{children:[n.jsx(_e,{size:16})," Instant test case feedback"]}),n.jsxs("li",{children:[n.jsx(_e,{size:16})," Hints and solution guidance"]})]}),n.jsxs("div",{className:"main-feature-cta",children:[n.jsx("span",{children:"Start Practicing"}),n.jsx(re,{})]})]})]})]})]}),n.jsxs("section",{className:"ds-showcase-section",children:[n.jsxs("div",{className:"section-header-advanced",children:[n.jsx("span",{className:"section-tag",children:"Visualizers"}),n.jsx("h2",{children:"Interactive Data Structures"}),n.jsx("p",{children:"Click to visualize, interact, and truly understand how each structure works"})]}),n.jsxs("div",{className:"ds-showcase-grid",children:[n.jsxs(Te,{to:"/stack",className:"ds-card",style:{"--ds-color":"#6366f1"},children:[n.jsx("div",{className:"ds-card-glow"}),n.jsxs("div",{className:"ds-card-content",children:[n.jsx("div",{className:"ds-icon",children:n.jsx(Ir,{})}),n.jsx("h3",{children:"Stack"}),n.jsx("p",{children:"Last In, First Out"}),n.jsxs("div",{className:"ds-card-footer",children:[n.jsx("span",{className:"ds-complexity",children:"O(1) push/pop"}),n.jsx(re,{className:"ds-arrow"})]})]})]}),n.jsxs(Te,{to:"/queue",className:"ds-card",style:{"--ds-color":"#10b981"},children:[n.jsx("div",{className:"ds-card-glow"}),n.jsxs("div",{className:"ds-card-content",children:[n.jsx("div",{className:"ds-icon",children:n.jsx(Xt,{})}),n.jsx("h3",{children:"Queue"}),n.jsx("p",{children:"First In, First Out"}),n.jsxs("div",{className:"ds-card-footer",children:[n.jsx("span",{className:"ds-complexity",children:"O(1) enqueue"}),n.jsx(re,{className:"ds-arrow"})]})]})]}),n.jsxs(Te,{to:"/linkedlist",className:"ds-card",style:{"--ds-color":"#f59e0b"},children:[n.jsx("div",{className:"ds-card-glow"}),n.jsxs("div",{className:"ds-card-content",children:[n.jsx("div",{className:"ds-icon",children:n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("circle",{cx:"5",cy:"12",r:"3"}),n.jsx("circle",{cx:"19",cy:"12",r:"3"}),n.jsx("line",{x1:"8",y1:"12",x2:"16",y2:"12"})]})}),n.jsx("h3",{children:"Linked List"}),n.jsx("p",{children:"Dynamic Node Chain"}),n.jsxs("div",{className:"ds-card-footer",children:[n.jsx("span",{className:"ds-complexity",children:"O(1) insert"}),n.jsx(re,{className:"ds-arrow"})]})]})]}),n.jsxs(Te,{to:"/bst",className:"ds-card",style:{"--ds-color":"#ec4899"},children:[n.jsx("div",{className:"ds-card-glow"}),n.jsxs("div",{className:"ds-card-content",children:[n.jsx("div",{className:"ds-icon",children:n.jsx(ev,{})}),n.jsx("h3",{children:"Binary Search Tree"}),n.jsx("p",{children:"Ordered Tree Structure"}),n.jsxs("div",{className:"ds-card-footer",children:[n.jsx("span",{className:"ds-complexity",children:"O(log n) search"}),n.jsx(re,{className:"ds-arrow"})]})]})]}),n.jsxs(Te,{to:"/hashtable_chaining",className:"ds-card",style:{"--ds-color":"#8b5cf6"},children:[n.jsx("div",{className:"ds-card-glow"}),n.jsxs("div",{className:"ds-card-content",children:[n.jsx("div",{className:"ds-icon",children:n.jsx(Rr,{})}),n.jsx("h3",{children:"Hash Table"}),n.jsx("p",{children:"Key-Value Mapping"}),n.jsxs("div",{className:"ds-card-footer",children:[n.jsx("span",{className:"ds-complexity",children:"O(1) average"}),n.jsx(re,{className:"ds-arrow"})]})]})]}),n.jsxs(Te,{to:"/dijkstra",className:"ds-card",style:{"--ds-color":"#06b6d4"},children:[n.jsx("div",{className:"ds-card-glow"}),n.jsxs("div",{className:"ds-card-content",children:[n.jsx("div",{className:"ds-icon",children:n.jsx(ml,{})}),n.jsx("h3",{children:"Graph Algorithms"}),n.jsx("p",{children:"BFS, DFS, Dijkstra"}),n.jsxs("div",{className:"ds-card-footer",children:[n.jsx("span",{className:"ds-complexity",children:"Pathfinding"}),n.jsx(re,{className:"ds-arrow"})]})]})]})]}),n.jsx("div",{className:"showcase-cta",children:n.jsxs(Te,{to:"/algorithms",className:"btn-outline-glow",children:[n.jsx("span",{children:"View All Visualizers"}),n.jsx(re,{})]})})]}),n.jsxs("section",{className:"practice-preview-section",children:[n.jsxs("div",{className:"section-header-advanced",children:[n.jsx("span",{className:"section-tag",children:"Practice"}),n.jsx("h2",{children:"Structured Learning Roadmap"}),n.jsx("p",{children:"Follow a proven path to master DSA concepts step by step"})]}),n.jsxs("div",{className:"roadmap-preview-grid",children:[n.jsxs("div",{className:"roadmap-preview-item",style:{"--item-color":"#10b981"},children:[n.jsx("div",{className:"roadmap-preview-icon",children:n.jsx(Xg,{size:20})}),n.jsxs("div",{className:"roadmap-preview-info",children:[n.jsx("h4",{children:"Arrays & Hashing"}),n.jsx("span",{children:"3 problems"})]})]}),n.jsxs("div",{className:"roadmap-preview-item",style:{"--item-color":"#3b82f6"},children:[n.jsx("div",{className:"roadmap-preview-icon",children:n.jsx(zg,{size:20})}),n.jsxs("div",{className:"roadmap-preview-info",children:[n.jsx("h4",{children:"Two Pointers"}),n.jsx("span",{children:"2 problems"})]})]}),n.jsxs("div",{className:"roadmap-preview-item",style:{"--item-color":"#8b5cf6"},children:[n.jsx("div",{className:"roadmap-preview-icon",children:n.jsx(Ir,{size:20})}),n.jsxs("div",{className:"roadmap-preview-info",children:[n.jsx("h4",{children:"Stack"}),n.jsx("span",{children:"2 problems"})]})]}),n.jsxs("div",{className:"roadmap-preview-item",style:{"--item-color":"#f59e0b"},children:[n.jsx("div",{className:"roadmap-preview-icon",children:n.jsx(Uc,{size:20})}),n.jsxs("div",{className:"roadmap-preview-info",children:[n.jsx("h4",{children:"Binary Search"}),n.jsx("span",{children:"2 problems"})]})]}),n.jsxs("div",{className:"roadmap-preview-item",style:{"--item-color":"#ec4899"},children:[n.jsx("div",{className:"roadmap-preview-icon",children:n.jsx(Xt,{size:20})}),n.jsxs("div",{className:"roadmap-preview-info",children:[n.jsx("h4",{children:"Trees"}),n.jsx("span",{children:"3 problems"})]})]}),n.jsxs("div",{className:"roadmap-preview-item",style:{"--item-color":"#6366f1"},children:[n.jsx("div",{className:"roadmap-preview-icon",children:n.jsx(ml,{size:20})}),n.jsxs("div",{className:"roadmap-preview-info",children:[n.jsx("h4",{children:"Graphs"}),n.jsx("span",{children:"3 problems"})]})]}),n.jsxs("div",{className:"roadmap-preview-item",style:{"--item-color":"#ef4444"},children:[n.jsx("div",{className:"roadmap-preview-icon",children:n.jsx(Lg,{size:20})}),n.jsxs("div",{className:"roadmap-preview-info",children:[n.jsx("h4",{children:"Dynamic Programming"}),n.jsx("span",{children:"2 problems"})]})]}),n.jsxs("div",{className:"roadmap-preview-item",style:{"--item-color":"#84cc16"},children:[n.jsx("div",{className:"roadmap-preview-icon",children:n.jsx(Uc,{size:20})}),n.jsxs("div",{className:"roadmap-preview-info",children:[n.jsx("h4",{children:"Sorting"}),n.jsx("span",{children:"2 problems"})]})]})]}),n.jsx("div",{className:"showcase-cta",children:n.jsxs(Te,{to:"/practice",className:"btn-glow-primary",children:[n.jsx(Nr,{className:"btn-icon-left"}),n.jsx("span",{children:"Start the Roadmap"})]})})]}),n.jsxs("section",{className:"features-section-advanced",children:[n.jsxs("div",{className:"section-header-advanced",children:[n.jsx("span",{className:"section-tag",children:"Features"}),n.jsx("h2",{children:"Everything You Need"}),n.jsx("p",{children:"Built for visual learners who want to truly understand DSA"})]}),n.jsxs("div",{className:"features-grid-advanced",children:[n.jsxs("div",{className:"feature-card-advanced",children:[n.jsx("div",{className:"feature-card-bg"}),n.jsx("div",{className:"feature-icon-advanced",style:{"--icon-color":"#6366f1"},children:n.jsx(oi,{})}),n.jsx("h3",{children:"Real-Time Visualization"}),n.jsx("p",{children:"Watch data structures come alive with smooth animations that show exactly what happens during each operation."})]}),n.jsxs("div",{className:"feature-card-advanced",children:[n.jsx("div",{className:"feature-card-bg"}),n.jsx("div",{className:"feature-icon-advanced",style:{"--icon-color":"#10b981"},children:n.jsx(hl,{})}),n.jsx("h3",{children:"Built-in Code Editor"}),n.jsx("p",{children:"Write and test your solutions with a full-featured editor supporting Python, JavaScript, C++, and more."})]}),n.jsxs("div",{className:"feature-card-advanced",children:[n.jsx("div",{className:"feature-card-bg"}),n.jsx("div",{className:"feature-icon-advanced",style:{"--icon-color":"#f59e0b"},children:n.jsx(So,{})}),n.jsx("h3",{children:"Instant Feedback"}),n.jsx("p",{children:"Run your code against test cases and get immediate results. See exactly what passed and what failed."})]}),n.jsxs("div",{className:"feature-card-advanced",children:[n.jsx("div",{className:"feature-card-bg"}),n.jsx("div",{className:"feature-icon-advanced",style:{"--icon-color":"#ec4899"},children:n.jsx(Ch,{})}),n.jsx("h3",{children:"Structured Learning"}),n.jsx("p",{children:"Follow a curated roadmap that builds your skills progressively from fundamentals to advanced topics."})]})]})]}),n.jsxs("section",{className:"how-it-works-section",children:[n.jsxs("div",{className:"section-header-advanced",children:[n.jsx("span",{className:"section-tag",children:"Get Started"}),n.jsx("h2",{children:"Start Learning in Seconds"}),n.jsx("p",{children:"No signup required. Just pick what you want to learn."})]}),n.jsxs("div",{className:"steps-container",children:[n.jsxs("div",{className:"step-card",children:[n.jsx("div",{className:"step-number",children:"1"}),n.jsx("h3",{children:"Choose Your Path"}),n.jsx("p",{children:"Explore visualizers to understand concepts or practice problems to test your skills"})]}),n.jsx("div",{className:"step-connector"}),n.jsxs("div",{className:"step-card",children:[n.jsx("div",{className:"step-number",children:"2"}),n.jsx("h3",{children:"Learn Interactively"}),n.jsx("p",{children:"Visualize operations step-by-step or solve coding challenges with instant feedback"})]}),n.jsx("div",{className:"step-connector"}),n.jsxs("div",{className:"step-card",children:[n.jsx("div",{className:"step-number",children:"3"}),n.jsx("h3",{children:"Track Progress"}),n.jsx("p",{children:"Complete problems, mark them as solved, and watch your skills grow"})]})]}),n.jsx("div",{className:"final-cta",children:n.jsxs(Te,{to:"/algorithms",className:"btn-glow-large",children:[n.jsx(Ae,{className:"btn-icon-left"}),n.jsx("span",{children:"Start Learning Now"})]})})]})]})}function av(){const[e,t]=u.useState(null),r=a=>{t(e===a?null:a)},s=[{id:"linear",name:"Linear Data Structures",icon:Hg,description:"Elements stored sequentially where each element has a unique predecessor and successor. These are the building blocks of computer science — simple to implement yet powerful enough to solve complex problems.",color:"#6366f1",items:[{to:"/stack",icon:Ir,title:"Stack",description:"LIFO (Last In, First Out) — imagine a stack of plates where you can only add or remove from the top. The most recent item is always accessed first. Push adds to top, Pop removes from top. Both operations are O(1) constant time. Essential for: browser back button (page history), undo/redo in editors, function call management in recursion, parsing expressions like (a+b)*c, and depth-first search algorithms.",available:!0},{to:"/queue",icon:qc,title:"Queue",description:"FIFO (First In, First Out) — like waiting in line at a coffee shop. The first person to arrive gets served first. Enqueue adds to the back, Dequeue removes from front. Both O(1) operations. Used everywhere: print job scheduling, CPU task management, breadth-first search (BFS) in graphs, handling requests in web servers, and buffering data streams like video playback.",available:!0},{to:"/linkedlist",icon:es,title:"Linked List",description:"A chain of nodes where each node stores data and a pointer to the next node. Unlike arrays, memory doesn't need to be contiguous — nodes can be scattered in memory. Insertion/deletion at known positions is O(1), but finding a position is O(n). Perfect for: implementing stacks/queues, music playlists (next/previous song), browser history, memory allocation in operating systems, and polynomial arithmetic.",available:!0}]},{id:"hash",name:"Hash-Tables",icon:fl,description:"Revolutionary data structures that use hash functions to map keys to array indices, enabling O(1) average-case lookup, insertion, and deletion. The backbone of databases, caches, and any system requiring fast key-value access.",color:"#10b981",items:[{to:"/hashtable_linear",icon:Rr,title:"Linear Probing",description:'Open addressing collision resolution: when a collision occurs (two keys hash to same index), simply check the next slot, then the next, until an empty slot is found. Pros: excellent cache performance since data is stored contiguously, simple implementation. Cons: can cause "primary clustering" where long runs of occupied slots form, degrading performance. Load factor should stay below 0.7 for efficiency.',available:!0},{to:"/hashtable_quadratic",icon:Rr,title:"Quadratic Probing",description:'Instead of checking consecutive slots, probe at quadratic intervals: 1², 2², 3²... positions away from the original hash. This eliminates primary clustering but can cause "secondary clustering" where keys with the same hash follow the same probe sequence. Table size should be prime and load factor < 0.5 to guarantee finding an empty slot. Used when cache performance is less critical than even distribution.',available:!0},{to:"/hashtable_chaining",icon:Rr,title:"Separate Chaining",description:"Each array slot holds a linked list (chain) of all entries that hash to that index. No limit on how many items can be stored — just grow the chains. Handles high load factors gracefully (even > 1.0). Simpler deletion than open addressing. Used in Java's HashMap, Python's dict (with optimization). Trade-off: extra memory for pointers, potentially poor cache performance with long chains.",available:!0}]},{id:"heaps",name:"Priority Queues & Heaps",icon:Qg,description:"Complete binary trees satisfying the heap property — either every parent ≥ children (max-heap) or every parent ≤ children (min-heap). Heaps power priority queues, enabling O(1) access to the extreme element and O(log n) insertions and deletions.",color:"#ec4899",items:[{to:"/minheap",icon:kg,title:"Min Heap",description:`Every parent node is smaller than or equal to its children, so the minimum element is always at the root — accessible in O(1). Insert and extract-min are O(log n) as elements "bubble up" or "sink down" to maintain the heap property. Critical for: Dijkstra's shortest path algorithm, Prim's minimum spanning tree, job schedulers (process with smallest priority runs next), and efficiently finding the k largest elements in a stream.`,available:!0},{to:"/maxheap",icon:Sg,title:"Max Heap",description:"The mirror of min-heap: every parent ≥ children, maximum at root. Extract-max in O(1), insert and delete in O(log n). Powers: Heapsort algorithm (in-place O(n log n) sorting), priority queues where highest priority goes first, finding k smallest elements, implementing a median-finding structure (use one min-heap + one max-heap), and bandwidth management in network routers.",available:!0}]},{id:"trees",name:"Binary Trees",icon:Zg,description:"Hierarchical data structures where data flows from a root node down through children. Trees enable O(log n) operations on sorted data and model real-world hierarchies like file systems, organization charts, and decision trees in AI/ML.",color:"#f59e0b",items:[{to:"/binarytree",icon:Xt,title:"Binary Tree Traversals",description:"Master the four fundamental ways to visit every node in a binary tree: INORDER (Left→Root→Right) visits nodes in sorted order for BST, used for expression trees; PREORDER (Root→Left→Right) processes root first, perfect for copying trees or creating prefix expressions; POSTORDER (Left→Right→Root) processes children before parent, used for deleting trees or postfix notation; LEVEL-ORDER (BFS) visits level by level, used for finding shortest paths and printing tree structure.",available:!0},{to:"/bst",icon:Mg,title:"Binary Search Tree",description:`The fundamental ordered tree: every node's left subtree contains only smaller values, right subtree only larger values. This property enables O(log n) search by eliminating half the tree at each step — like binary search but in tree form. Supports efficient range queries. Caveat: can degrade to O(n) if insertions create an unbalanced "stick". Foundation for databases, symbol tables, and more advanced balanced trees.`,available:!0},{to:"/avl",icon:Yg,title:"AVL Tree",description:"The first self-balancing BST, invented in 1962. Maintains strict balance: height difference between left and right subtrees ≤ 1 at every node. When insertion/deletion violates this, the tree self-corrects using rotations (single or double). Guarantees O(log n) for all operations. More rigidly balanced than Red-Black trees, so faster lookups but slightly slower insertions. Used when reads far exceed writes.",available:!0},{to:"/splay",icon:Wg,title:"Splay Tree",description:`A self-adjusting BST with a clever optimization: every accessed node is "splayed" (rotated) to the root. No explicit balance condition, yet achieves O(log n) amortized time. Recently accessed items stay near the root — perfect for caches where some items are accessed repeatedly (temporal locality). Used in Windows NT's virtual memory management, GCC's implementation of certain data structures, and network routers.`,available:!0}]},{id:"Graphs",name:"Graphs",icon:Ag,description:"Graphs model relationships between objects using vertices (nodes) and edges (connections). They power social networks, GPS navigation, recommendation systems, and the internet itself. Understanding graphs unlocks solutions to complex real-world problems like finding shortest paths, detecting communities, and optimizing networks.",color:"#ef4444",items:[{to:"/adjacency-matrix",icon:fl,title:"Adjacency Matrix",description:"A 2D array used to represent a finite graph. Each cell at (i, j) indicates if there is an edge from vertex i to vertex j. Simple and fast for dense graphs, but uses O(V^2) space. Not practical for large, sparse graphs.",available:!0},{to:"/adjacency-list",icon:es,title:"Adjacency List",description:"A space-efficient way to represent a graph. Each vertex stores a list of adjacent vertices. Ideal for sparse graphs, supports efficient iteration over neighbors. Commonly used in network routing, social networks, and recommendation systems.",available:!0},{to:"/bfs",icon:qc,title:"Breadth-First Search (BFS)",description:"A fundamental graph traversal algorithm that explores neighbors level by level. Used for finding shortest paths in unweighted graphs, peer-to-peer networks, and web crawlers.",available:!0},{to:"/dfs",icon:Xt,title:"Depth-First Search (DFS)",description:"A classic graph traversal technique that explores as far as possible along each branch before backtracking. Used for topological sorting, cycle detection, and solving puzzles like mazes.",available:!0}]}];return n.jsxs("section",{className:"algorithms-section",children:[n.jsxs("div",{className:"section-header",children:[n.jsx("h1",{children:"Explore Data Structures"}),n.jsx("p",{children:"Choose a category to explore different data structures. Each visualizer includes step-by-step explanations and hands-on practice."})]}),n.jsx("div",{className:"categories-container",children:s.map(a=>n.jsxs("div",{className:"category-wrapper",children:[n.jsxs("button",{className:`category-header ${e===a.id?"expanded":""}`,onClick:()=>r(a.id),style:{"--category-color":a.color},children:[n.jsx("div",{className:"category-icon",style:{background:a.color},children:n.jsx(a.icon,{})}),n.jsxs("div",{className:"category-info",children:[n.jsx("h2",{children:a.name}),n.jsx("p",{children:a.description})]}),n.jsxs("div",{className:"category-meta",children:[n.jsxs("span",{className:"item-count",children:[a.items.filter(i=>i.available).length," available"]}),e===a.id?n.jsx(Rg,{}):n.jsx(Og,{})]})]}),n.jsx("div",{className:`category-items ${e===a.id?"expanded":""}`,children:n.jsx("div",{className:"items-grid",children:a.items.map((i,l)=>i.available?n.jsxs(Te,{to:i.to,className:"algorithm-item",children:[n.jsx("div",{className:"item-icon",style:{background:a.color},children:n.jsx(i.icon,{})}),n.jsxs("div",{className:"item-info",children:[n.jsx("h3",{children:i.title}),n.jsx("p",{children:i.description})]}),n.jsx(re,{className:"item-arrow"})]},l):n.jsxs("div",{className:"algorithm-item coming-soon",children:[n.jsx("div",{className:"item-icon disabled",children:n.jsx(i.icon,{})}),n.jsxs("div",{className:"item-info",children:[n.jsx("h3",{children:i.title}),n.jsx("p",{children:i.description})]}),n.jsx("span",{className:"coming-soon-badge",children:"Coming Soon"})]},l))})})]},a.id))})]})}function iv(){return n.jsxs("section",{className:"contact-section",children:[n.jsx("div",{className:"page-header",children:n.jsx("h1",{children:"Contact"})}),n.jsx("div",{className:"contact-content",children:n.jsxs("div",{className:"contact-info",children:[n.jsxs("div",{className:"info-card",children:[n.jsx("div",{className:"info-icon",children:n.jsx(Th,{})}),n.jsx("h3",{children:"Email"}),n.jsx("p",{children:"For recruitment and professional opportunities"}),n.jsx("a",{href:"mailto:abdullahmahfouz@trentu.ca",className:"info-link",children:"abdullahmahfouz@trentu.ca"})]}),n.jsxs("div",{className:"info-card",children:[n.jsx("div",{className:"info-icon",children:n.jsx(bo,{})}),n.jsx("h3",{children:"GitHub"}),n.jsx("p",{children:"View my projects and contributions"}),n.jsx("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",className:"info-link",children:"github.com/abdullahmahfouz"})]}),n.jsxs("div",{className:"info-card",children:[n.jsx("div",{className:"info-icon",children:n.jsx(wo,{})}),n.jsx("h3",{children:"LinkedIn"}),n.jsx("p",{children:"Connect for professional networking"}),n.jsx("a",{href:"https://www.linkedin.com/in/abdullah-mahfouz-5188b1306/",target:"_blank",rel:"noopener noreferrer",className:"info-link",children:"Connect on LinkedIn"})]})]})})]})}function lv(){return n.jsxs("section",{className:"contributions-section",children:[n.jsxs("div",{className:"page-header",children:[n.jsx("h1",{children:"Contributions"}),n.jsx("p",{children:"Help us improve this free learning tool for students! Your contributions help make DSA easier to understand for everyone."})]}),n.jsxs("div",{className:"contributions-content",children:[n.jsxs("div",{className:"contribution-card",children:[n.jsx("div",{className:"contribution-icon",children:n.jsx(pl,{})}),n.jsx("h2",{children:"Code Contributions"}),n.jsx("p",{children:"Found a bug or want to add a new feature? Fork the repository, make your changes, and submit a pull request!"}),n.jsxs("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",className:"btn-primary",children:[n.jsx("span",{children:"View on GitHub"}),n.jsx(re,{})]})]}),n.jsxs("div",{className:"contribution-card",children:[n.jsx("div",{className:"contribution-icon",children:n.jsx(Ch,{})}),n.jsx("h2",{children:"Documentation"}),n.jsx("p",{children:"Help improve our documentation, fix typos, or add examples. Every bit helps!"}),n.jsxs("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",className:"btn-primary",children:[n.jsx("span",{children:"Improve Docs"}),n.jsx(re,{})]})]}),n.jsxs("div",{className:"contribution-card",children:[n.jsx("div",{className:"contribution-icon",children:n.jsx(Pg,{})}),n.jsx("h2",{children:"Report Issues"}),n.jsx("p",{children:"Found a bug or have a suggestion? Open an issue on GitHub and let us know!"}),n.jsxs("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",className:"btn-primary",children:[n.jsx("span",{children:"Report Issue"}),n.jsx(re,{})]})]}),n.jsxs("div",{className:"contribution-card",children:[n.jsx("div",{className:"contribution-icon",children:n.jsx(ve,{})}),n.jsx("h2",{children:"Feature Requests"}),n.jsx("p",{children:"Have an idea for a new visualizer or feature? We'd love to hear your suggestions!"}),n.jsxs(Te,{to:"/contact",className:"btn-primary",children:[n.jsx("span",{children:"Suggest Feature"}),n.jsx(re,{})]})]})]}),n.jsxs("div",{className:"contributors-section",children:[n.jsx("h2",{children:"Contributors"}),n.jsx("div",{className:"contributors-list",children:n.jsxs("div",{className:"contributor-item",children:[n.jsx("div",{className:"contributor-avatar",children:n.jsx(nv,{})}),n.jsxs("div",{className:"contributor-info",children:[n.jsx("h3",{children:"Abdullah Mahfouz"}),n.jsx("p",{children:"Creator & Maintainer"})]})]})}),n.jsx("p",{className:"contributors-note",children:"Want to see your name here? Start contributing today!"})]})]})}function xe({context:e="Data Structures"}){const[t,r]=u.useState(""),[s,a]=u.useState(""),[i,l]=u.useState(!1),o=()=>{const d=e.toLowerCase();return d.includes("stack")?"e.g., How does LIFO work?":d.includes("queue")?"e.g., What is FIFO?":d.includes("linked list")?"e.g., How do I insert at the head?":d.includes("hash")?"e.g., What is a collision?":d.includes("binary tree")||d.includes("traversal")?"e.g., What is inorder traversal?":"e.g., How does this work?"},c=async()=>{if(t.trim()){l(!0),a("");try{const d=await fetch("/api/ask-ai",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:t.trim(),code:e})}),p=await d.json();d.ok?a(p.answer||"No answer returned."):a("Currently not working, try again later.")}catch{a("Currently not working, try again later.")}finally{l(!1)}}},h=d=>{d.key==="Enter"&&c()};return n.jsxs("div",{className:"ai-assistant",children:[n.jsxs("h3",{children:[n.jsx(Tg,{}),"AI Assistant"]}),n.jsxs("p",{children:["Ask me anything about ",e.toLowerCase(),"!"]}),n.jsxs("div",{className:"ai-input-group",children:[n.jsx("input",{type:"text",value:t,onChange:d=>r(d.target.value),onKeyPress:h,placeholder:o(),disabled:i}),n.jsx("button",{onClick:c,disabled:i,children:i?"Asking...":"Ask"})]}),n.jsxs("div",{id:"ai-response",children:[i&&n.jsx("div",{className:"ai-loading",children:"Thinking..."}),s&&n.jsx("div",{className:s.startsWith("Error")?"ai-error":"ai-answer",children:s})]})]})}const ov=`class Stack:
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
print(stack.peek())  # 20`,cv=`class Stack {
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
console.log(stack.pop()); // 20`,dv=`import java.util.EmptyStackException;

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
System.out.println(stack.pop()); // 20`,uv={python:ov,javascript:cv,java:dv,"c++":`#include <iostream>
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
Console.WriteLine(stack.Pop()); // 20`},hv=`class Queue:
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
print(queue.peek())     # 20`,pv=`class Queue {
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
console.log(queue.dequeue()); // 10`,fv=`import java.util.NoSuchElementException;

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
System.out.println(queue.dequeue()); // 10`,mv={python:hv,javascript:pv,java:fv,"c++":`#include <iostream>
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
Console.WriteLine(queue.Dequeue()); // 10`},gv=`class Node:
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
print(ll.search(20))  # 1`,vv=`class Node {
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
ll.insertAtTail(30);`,xv=`public class SinglyLinkedList<T> {
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
ll.insertAtTail(30);`,yv={python:gv,javascript:vv,java:xv,"c++":`#include <iostream>
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
ll.InsertAtTail(30);`},jv=`class TreeNode:
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
print("Level:     ", tree.levelorder_traversal())  # [50, 30, 70, 20, 40, 60, 80]`,Nv=`class TreeNode {
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
console.log("Level:    ", tree.levelOrderTraversal());  // [50, 30, 70, 20, 40, 60, 80]`,kv=`import java.util.*;

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
System.out.println("Level:     " + tree.levelOrderTraversal());`,bv={python:jv,javascript:Nv,java:kv,"c++":`#include <iostream>
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
Console.WriteLine("Level:     " + string.Join(", ", tree.LevelOrderTraversal()));`},wv=`class HashTable:
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
print(ht.get("banana"))  # 3`,Sv=`class HashTable {
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
console.log(ht.get("apple"));  // 5`,Cv=`public class HashTable<K, V> {
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
System.out.println(ht.get("apple")); // 5`,Tv={python:wv,javascript:Sv,java:Cv,"c++":`#include <iostream>
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
Console.WriteLine(ht.Get("apple")); // 5`},Ev=`class Node:
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
ht.delete("banana")`,Lv=`class Node {
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
console.log(ht.search("apple"));  // 5`,Pv=`public class HashTableChaining<K, V> {
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
System.out.println(ht.search("apple"));  // 5`,Ov={python:Ev,javascript:Lv,java:Pv,"c++":`#include <iostream>
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
Console.WriteLine(ht.Search("apple"));  // 5`},Rv=`class TreeNode:
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
print("After delete 30:", bst.inorder())  # [20, 40, 50, 60, 70, 80]`,Iv=`class TreeNode {
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
console.log("After delete 30:", bst.inorder());  // [20, 40, 50, 60, 70, 80]`,_v=`import java.util.*;

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
System.out.println("After delete: " + bst.inorder());  // [20, 40, 50, 60, 70, 80]`,zv={python:Rv,javascript:Iv,java:_v,"c++":`#include <iostream>
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
Console.WriteLine("After delete: " + string.Join(", ", bst.Inorder()));`},Mv=`class AVLNode:
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
# Tree automatically balances after each insert!`,Av=`class AVLNode {
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
[30, 20, 40, 10, 25, 35, 50].forEach(v => avl.insert(v));`,Vv=`class AVLNode {
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
for (int v : new int[]{30, 20, 40, 10, 25}) avl.insert(v);`,Fv={python:Mv,javascript:Av,java:Vv,"c++":`#include <algorithm>
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

// Usage: var avl = new AVLTree(); foreach(var v in new[]{30,20,40}) avl.Insert(v);`},Dv=`class SplayNode:
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
print("Root:", splay.root.key)  # 20`,$v=`class SplayNode {
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
splay.search(20); // 20 moves to root`,Bv=`class SplayNode {
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
st.search(20); // 20 is now root`,Hv={python:Dv,javascript:$v,java:Bv,"c++":`struct SplayNode {
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

// Usage: var st = new SplayTree(); foreach(var v in new[]{50,30,70}) st.Insert(v);`},qv=`class MinHeap:
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
print("New min:", heap.peek())  # 2`,Uv=`class MinHeap {
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
console.log("Extract:", heap.extractMin());  // 1`,Kv=`import java.util.*;

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
System.out.println("Min: " + heap.peek());  // 1`,Wv={python:qv,javascript:Uv,java:Kv,"c++":`#include <vector>
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

// Usage: var h = new MinHeap(); foreach(var v in new[]{5,3,8,1}) h.Insert(v);`},Gv=`class MaxHeap:
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
print("New max:", heap.peek())  # 8`,Qv=`class MaxHeap {
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
console.log("Extract:", heap.extractMax());  // 9`,Yv=`import java.util.*;

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
System.out.println("Max: " + heap.peek());  // 9`,Xv={python:Gv,javascript:Qv,java:Yv,"c++":`#include <vector>
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

// Usage: var h = new MaxHeap(); foreach(var v in new[]{5,3,8,9}) h.Insert(v);`},Jv=`from collections import defaultdict

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
print(g.get_neighbors('A'))  # [('B', 1), ('C', 1)]`,Zv=`class Graph {
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
console.log(g.getNeighbors('A'));`,ex=`import java.util.*;

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
g.addEdge("A", "C");`,nx={python:Jv,javascript:Zv,java:ex,"c++":`#include <iostream>
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
g.AddEdge("A", "C");`},tx=`from collections import deque

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

print(bfs(graph, 'A'))  # ['A', 'B', 'C', 'D', 'E', 'F']`,rx=`function bfs(graph, start) {
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

console.log(bfs(graph, 'A')); // ['A', 'B', 'C', 'D', 'E', 'F']`,sx=`import java.util.*;

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
}`,ax={python:tx,javascript:rx,java:sx,"c++":`#include <iostream>
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
}`},ix=`def dfs(graph, start):
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

print(dfs(graph, 'A'))  # ['A', 'B', 'D', 'E', 'F', 'C']`,lx=`function dfs(graph, start) {
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

console.log(dfs(graph, 'A'));`,ox=`import java.util.*;

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
}`,cx={python:ix,javascript:lx,java:ox,"c++":`#include <iostream>
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
}`},ci={stack:uv,queue:mv,linkedlist:yv,binarytree:bv,hashtable:Tv,hashtableChaining:Ov,bst:zv,avl:Fv,splay:Hv,minheap:Wv,maxheap:Xv,graph:nx,bfs:ax,dfs:cx};function ye({dataStructure:e}){var p;const[t,r]=u.useState("python"),[s,a]=u.useState(!1),i=["python","javascript","java","c++","c#"],l=i.filter(m=>{var S;return(S=ci[e])==null?void 0:S[m]}),o=l.length>0?l:i,c=((p=ci[e])==null?void 0:p[t])||"Code not available for this data structure";u.useEffect(()=>{var m;!((m=ci[e])!=null&&m[t])&&l.length>0&&r(l[0])},[e,t,l]);const h=m=>({python:"Python",javascript:"JavaScript",java:"Java","c++":"C++","c#":"C#"})[m]||m,d=()=>{navigator.clipboard.writeText(c),a(!0),setTimeout(()=>a(!1),2e3)};return n.jsxs("div",{className:"code-section",children:[n.jsxs("h2",{children:[n.jsx(Kc,{})," Implementation"]}),n.jsx("div",{className:"code-tabs",children:o.map(m=>n.jsxs("button",{className:`tab-btn ${t===m?"active":""}`,onClick:()=>r(m),children:[n.jsx(Kc,{}),h(m)]},m))}),n.jsx("div",{className:"code-panels",children:n.jsx("div",{className:"code-panel active",children:n.jsxs("pre",{children:[n.jsxs("button",{className:"copy-btn",onClick:d,children:[n.jsx(_g,{})," ",s?"Copied!":"Copy"]}),n.jsx("code",{children:c})]})})})]})}function Be({message:e}){if(!(e!=null&&e.text))return null;const t=e.type||"info";return n.jsx("div",{className:`message message-${t}`,children:e.text})}async function ie(e){return await(await fetch(e)).json()}async function ee(e,t){return await(await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()}async function ma(e,t=null){const r={method:"DELETE",headers:{"Content-Type":"application/json"}};return t&&(r.body=JSON.stringify(t)),await(await fetch(e,r)).json()}function He(e=3e3){const[t,r]=u.useState(null),s=u.useRef(null),a=u.useCallback(()=>{r(null),s.current&&(clearTimeout(s.current),s.current=null)},[]),i=u.useCallback((l,o="info")=>{r({text:l,type:o}),s.current&&clearTimeout(s.current),s.current=setTimeout(()=>{r(null),s.current=null},e)},[e]);return u.useEffect(()=>a,[a]),{message:t,showMessage:i,clearMessage:a}}function dx(){const[e,t]=u.useState([]),[r,s]=u.useState(0),[a,i]=u.useState("Empty"),[l]=u.useState(10),{message:o,showMessage:c}=He(3e3),[h,d]=u.useState("");u.useEffect(()=>{p()},[]);const p=async()=>{try{const f=await ie("/api/stack");t(f.items||[]),s(f.size||0),i(f.top!==null&&f.top!==void 0?f.top:"Empty")}catch(f){console.error("Error loading stack:",f)}},m=async()=>{if(!h||h.trim()===""){c("Please enter a number!","error");return}const f=Number(h);if(isNaN(f)){c("Please enter a valid number!","error");return}try{const g=await ee("/api/stack/push",{value:f});if(g.error){c(g.error,"error");return}t(g.items||[]),s(g.size||0),i(g.top!==null&&g.top!==void 0?g.top:"Empty"),c(`Pushed ${f} to stack!`,"success"),d("")}catch(g){console.error("Push error:",g),c("Error pushing to stack. Is Flask running?","error")}},S=async()=>{try{const f=await ee("/api/stack/pop",{});if(f.error){c(f.error,"error");return}t(f.items||[]),s(f.size||0),i(f.top!==null&&f.top!==void 0?f.top:"Empty"),c(`Popped ${f.popped} from stack!`,"success")}catch{c("Error popping from stack","error")}},w=async()=>{try{const f=await ie("/api/stack/peek");if(f.error){c(f.error,"error");return}c(`Top element is: ${f.top}`,"info")}catch{c("Error peeking stack","error")}},N=async()=>{try{await ee("/api/stack/clear",{}),t([]),s(0),i("Empty"),c("Stack cleared!","success")}catch{c("Error clearing stack","error")}},x=f=>{f.key==="Enter"&&m()};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Oe,{className:"icon-sm"}),n.jsx("span",{children:"What is a Stack?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:["A ",n.jsx("strong",{children:"Stack"})," is a linear data structure that follows the ",n.jsx("strong",{children:"LIFO"})," (Last In, First Out) principle."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(ve,{}),n.jsxs("span",{children:["Think of a stack of plates - you can only add or remove from the ",n.jsx("strong",{children:"top"}),"!"]})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Push"}),n.jsx("span",{className:"op-desc",children:"Add to top"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Pop"}),n.jsx("span",{className:"op-desc",children:"Remove from top"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Peek"}),n.jsx("span",{className:"op-desc",children:"View top element"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]})]}),n.jsxs("div",{className:"concept-uses",children:[n.jsx("strong",{children:"Common Uses:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Browser back/forward buttons"}),n.jsx("li",{children:"Undo/Redo functionality"}),n.jsx("li",{children:"Function call stack"}),n.jsx("li",{children:"Expression evaluation"})]})]})]})]}),n.jsx(xe,{context:"Stack data structure"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Stack Operations"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"pushValue",children:"Push (Add to top)"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",id:"pushValue",value:h,onChange:f=>d(f.target.value),onKeyPress:x,placeholder:"Enter a value"}),n.jsx("button",{onClick:m,className:"btn btn-push",children:"Push"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Other Operations"}),n.jsxs("div",{className:"btn-group",children:[n.jsx("button",{onClick:S,className:"btn btn-pop",children:"Pop"}),n.jsx("button",{onClick:w,className:"btn btn-peek",children:"Peek"}),n.jsx("button",{onClick:N,className:"btn btn-clear",children:"Clear"})]})]}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Size:"}),n.jsx("span",{className:"info-value",children:r})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Top:"}),n.jsx("span",{className:"info-value",children:a})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Max Size:"}),n.jsx("span",{className:"info-value",children:l})]})]}),n.jsx(Be,{message:o})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Stack Visualization"}),n.jsxs("div",{className:"stack-container",children:[n.jsx("div",{className:"stack-visual",children:e.length===0?n.jsx("div",{className:"stack-empty",children:"Stack is empty. Push some items!"}):e.slice().reverse().map((f,g)=>n.jsx("div",{className:"stack-item",children:f},g))}),n.jsx("div",{className:"stack-base",children:n.jsx("span",{children:"BOTTOM"})})]})]})]}),n.jsx(ye,{dataStructure:"stack"})]})}function ux(){const[e,t]=u.useState([]),[r,s]=u.useState(0),[a,i]=u.useState("Empty"),[l]=u.useState(10),{message:o,showMessage:c}=He(3e3),[h,d]=u.useState("");u.useEffect(()=>{p()},[]);const p=async()=>{try{const x=await ie("/api/queue");t(x.items||[]),s(x.size||0),i(x.front!==null&&x.front!==void 0?x.front:"Empty")}catch(x){console.error("Error loading queue:",x)}},m=async()=>{if(!h||h.trim()===""){c("Please enter a number!","error");return}const x=Number(h);if(isNaN(x)){c("Please enter a valid number!","error");return}try{const f=await ee("/api/queue/enqueue",{value:x});if(f.error){c(f.error,"error");return}t(f.items||[]),s(f.size||0),i(f.front!==null&&f.front!==void 0?f.front:"Empty"),c(`Enqueued ${x}!`,"success"),d("")}catch(f){console.error("Enqueue error:",f),c("Error enqueueing. Is Flask running?","error")}},S=async()=>{try{const x=await ee("/api/queue/dequeue",{});if(x.error){c(x.error,"error");return}t(x.items||[]),s(x.size||0),i(x.front!==null&&x.front!==void 0?x.front:"Empty"),c(`Dequeued ${x.dequeued} from queue!`,"success")}catch{c("Error dequeuing from queue","error")}},w=async()=>{try{const x=await ie("/api/queue/peek");if(x.error){c(x.error,"error");return}c(`Front element is: ${x.front}`,"info")}catch{c("Error peeking queue","error")}},N=async()=>{try{await ee("/api/queue/clear",{}),t([]),s(0),i("Empty"),c("Queue cleared!","success")}catch{c("Error clearing queue","error")}};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Oe,{className:"icon-sm"}),n.jsx("span",{children:"What is a Queue?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:["A ",n.jsx("strong",{children:"Queue"})," is a linear data structure that follows the ",n.jsx("strong",{children:"FIFO"})," (First In, First Out) principle."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(ve,{}),n.jsxs("span",{children:["Think of a line at a store – the first person in line gets served ",n.jsx("strong",{children:"first"}),"!"]})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Enqueue"}),n.jsx("span",{className:"op-desc",children:"Add to the back"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Dequeue"}),n.jsx("span",{className:"op-desc",children:"Remove from the front"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Peek"}),n.jsx("span",{className:"op-desc",children:"View the front element"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]})]})]})]}),n.jsx(xe,{context:"Queue data structure"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Queue Operations"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"enqueueValue",children:"Enqueue (Add to back)"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",id:"enqueueValue",value:h,onChange:x=>d(x.target.value),onKeyPress:x=>x.key==="Enter"&&m(),placeholder:"Enter a value"}),n.jsx("button",{onClick:m,className:"btn btn-enqueue",children:"Enqueue"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Other Operations"}),n.jsxs("div",{className:"btn-group",children:[n.jsx("button",{onClick:S,className:"btn btn-dequeue",children:"Dequeue"}),n.jsx("button",{onClick:w,className:"btn btn-peek",children:"Peek"}),n.jsx("button",{onClick:N,className:"btn btn-clear",children:"Clear"})]})]}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Size:"}),n.jsx("span",{className:"info-value",children:r})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Front:"}),n.jsx("span",{className:"info-value",children:a})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Max Size:"}),n.jsx("span",{className:"info-value",children:l})]})]}),n.jsx(Be,{message:o})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Queue Visualization"}),n.jsxs("div",{className:"queue-container",children:[n.jsx("div",{className:"queue-label",children:n.jsx("span",{className:"front-marker",children:"FRONT →"})}),n.jsx("div",{className:"queue-visual",children:e.length===0?n.jsx("div",{className:"queue-empty",children:"Queue is empty. Enqueue some items!"}):e.map((x,f)=>{const g=f===0,v=f===e.length-1;return n.jsxs("div",{className:`queue-item ${g?"queue-front":""} ${v?"queue-back":""}`,children:[g&&n.jsx("span",{className:"front-label",children:"FRONT"}),x,v&&n.jsx("span",{className:"back-label",children:"BACK"})]},f)})}),n.jsx("div",{className:"queue-label",children:n.jsx("span",{className:"back-marker",children:"← BACK"})})]})]})]}),n.jsx(ye,{dataStructure:"queue"})]})}function hx(){const[e,t]=u.useState([]),[r,s]=u.useState(0),[a,i]=u.useState("Empty"),{message:l,showMessage:o}=He(3e3),[c,h]=u.useState(""),[d,p]=u.useState(""),[m,S]=u.useState(""),[w,N]=u.useState(""),[x,f]=u.useState(""),[g,v]=u.useState("");u.useEffect(()=>{P()},[]);const P=async()=>{try{const I=await ie("/api/linkedlist");t(I.items||[]),s(I.size||0),i(I.head!==null&&I.head!==void 0?I.head:"Empty")}catch(I){console.error("Error loading linked list:",I)}},k=async()=>{if(!c||c.trim()===""){o("Please enter a number!","error");return}const I=Number(c);if(isNaN(I)){o("Please enter a valid number!","error");return}try{const H=await ee("/api/linkedlist/insert/head",{value:I});if(H.error){o(H.error,"error");return}t(H.items||[]),s(H.size||0),i(H.head!==null&&H.head!==void 0?H.head:"Empty"),o(`Inserted ${I} at head!`,"success"),h("")}catch(H){console.error("Insert error:",H),o("Error inserting. Is Flask running?","error")}},V=async()=>{if(!d||d.trim()===""){o("Please enter a number!","error");return}const I=Number(d);if(isNaN(I)){o("Please enter a valid number!","error");return}try{const H=await ee("/api/linkedlist/insert/tail",{value:I});if(H.error){o(H.error,"error");return}t(H.items||[]),s(H.size||0),i(H.head!==null&&H.head!==void 0?H.head:"Empty"),o(`Inserted ${I} at tail!`,"success"),p("")}catch(H){console.error("Insert error:",H),o("Error inserting. Is Flask running?","error")}},T=async()=>{try{const I=await ee("/api/linkedlist/delete/head",{});if(I.error){o(I.error,"error");return}t(I.items||[]),s(I.size||0),i(I.head!==null&&I.head!==void 0?I.head:"Empty"),o("Deleted head!","success")}catch{o("Error deleting head","error")}},D=async()=>{try{const I=await ee("/api/linkedlist/delete/tail",{});if(I.error){o(I.error,"error");return}t(I.items||[]),s(I.size||0),i(I.head!==null&&I.head!==void 0?I.head:"Empty"),o("Deleted tail!","success")}catch{o("Error deleting tail","error")}},F=async()=>{try{await ee("/api/linkedlist/clear",{}),t([]),s(0),i("Empty"),o("List cleared!","success")}catch{o("Error clearing list","error")}};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Oe,{className:"icon-sm"}),n.jsx("span",{children:"What is a Singly Linked List?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:["A ",n.jsx("strong",{children:"Singly Linked List"})," is a linear data structure where each element contains data and a pointer to the next node."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(ve,{}),n.jsxs("span",{children:["Think of a treasure hunt – each clue points to the ",n.jsx("strong",{children:"next location"}),"!"]})]})]})]}),n.jsx(xe,{context:"Singly Linked List data structure"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Linked List Operations"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"insertHeadValue",children:"Insert at Head"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",id:"insertHeadValue",value:c,onChange:I=>h(I.target.value),onKeyPress:I=>I.key==="Enter"&&k(),placeholder:"Enter a value"}),n.jsx("button",{onClick:k,className:"btn btn-insert",children:"Insert Head"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"insertTailValue",children:"Insert at Tail"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",id:"insertTailValue",value:d,onChange:I=>p(I.target.value),onKeyPress:I=>I.key==="Enter"&&V(),placeholder:"Enter a value"}),n.jsx("button",{onClick:V,className:"btn btn-insert",children:"Insert Tail"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Delete Operations"}),n.jsxs("div",{className:"btn-group",children:[n.jsx("button",{onClick:T,className:"btn btn-delete",children:"Delete Head"}),n.jsx("button",{onClick:D,className:"btn btn-delete",children:"Delete Tail"})]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:F,className:"btn btn-clear full-width",children:"Clear All"})}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Size:"}),n.jsx("span",{className:"info-value",children:r})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Head:"}),n.jsx("span",{className:"info-value",children:a})]})]}),n.jsx(Be,{message:l})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Linked List Visualization"}),n.jsx("div",{className:"linkedlist-container",children:n.jsx("div",{className:"linkedlist-visual",children:e.length===0?n.jsx("div",{className:"linkedlist-empty",children:"List is empty. Insert some nodes!"}):e.map((I,H)=>n.jsx(Je.Fragment,{children:n.jsxs("div",{className:"linkedlist-node",children:[n.jsx("div",{className:"node-value",children:I}),H<e.length-1&&n.jsx("div",{className:"node-arrow",children:"→"})]})},H))})})]})]}),n.jsx(ye,{dataStructure:"linkedlist"})]})}function px(){const[e,t]=u.useState([]),[r,s]=u.useState(0),[a,i]=u.useState(0),[l,o]=u.useState(0),[c,h]=u.useState(0),{message:d,showMessage:p}=He(3e3),[m,S]=u.useState(""),[w,N]=u.useState(""),[x,f]=u.useState(""),[g,v]=u.useState(""),[P,k]=u.useState(null),[V,T]=u.useState([]),[D,F]=u.useState(null),[I,H]=u.useState(null);u.useEffect(()=>{K()},[]);const K=async()=>{try{const E=await ie("/api/hashtable");t(E.table||[]),s(E.size||0),i(E.capacity||0),o(E.load_factor||0),h(E.collision_count||0)}catch(E){console.error("Error loading hashtable:",E)}},$=E=>{if(!a||a===0)return 0;let y=0;for(let O=0;O<E.length;O++)y=(y*31+E.charCodeAt(O))%a;return y},q=(E,y)=>{const O=$(E),A=[O];let L=O;for(;y[L]&&y[L][0]!==E&&(L=(L+1)%a,A.push(L),!(L===O||A.length>a)););return{originalHash:O,path:A,finalSlot:L}},b=async()=>{if(!m.trim()||!w.trim()){p("Please enter both key and value!","error");return}const E=a>0?$(m.trim()):0,y=e.length>0&&e[E]&&e[E][0]!==m.trim();let O=null;y&&(O=q(m.trim(),e));try{const A=await ee("/api/hashtable/insert",{key:m.trim(),value:w.trim()});if(A.error){p(A.error,"error");return}await K(),F(m.trim()),y&&O?(H({key:m.trim(),originalSlot:O.originalHash,probedSlots:O.path,finalSlot:O.path[O.path.length-1]}),T(O.path),p(`Collision! "${m}" hashed to ${O.originalHash}, probed ${O.path.length} slot(s)`,"warning"),setTimeout(()=>{T([]),H(null)},4e3)):(p(`Inserted "${m}" → slot ${E}`,"success"),k(E),setTimeout(()=>k(null),2e3)),S(""),N(""),setTimeout(()=>F(null),3e3)}catch{p("Error inserting. Is Flask running?","error")}},z=async()=>{if(!x.trim()){p("Please enter a key!","error");return}try{const E=await ee("/api/hashtable/delete",{key:x.trim()});if(E.error){p(E.error,"error");return}await K(),p(`Deleted "${x}"`,"success"),f("")}catch{p("Error deleting. Is Flask running?","error")}},M=async()=>{if(!g.trim()){p("Please enter a key!","error");return}try{const E=await ie(`/api/hashtable/get?key=${encodeURIComponent(g.trim())}`);if(E.error){p(E.error,"error");return}E.found?p(`Found: "${g}" = ${E.value}`,"success"):p(`Key "${g}" not found`,"error"),v("")}catch{p("Error searching item","error")}},C=async()=>{try{await ee("/api/hashtable/clear",{}),await K(),T([]),H(null),p("Hashtable cleared!","success")}catch{p("Error clearing hashtable","error")}};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"intro-left",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Oe,{className:"icon-sm"}),n.jsx("span",{children:"What is a Hash Table?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:["A ",n.jsx("strong",{children:"Hash Table"})," maps keys to values using a hash function for O(1) lookups."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(ve,{}),n.jsxs("span",{children:["Like a ",n.jsx("strong",{children:"coat check"})," – give them your coat (value), get a ticket number (hash of key)!"]})]})]})]}),n.jsxs("div",{className:"concept-box",style:{marginTop:"1rem"},children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(On,{className:"icon-sm",style:{color:"#f59e0b"}}),n.jsx("span",{children:"Linear Probing"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:["When two keys hash to the same slot (",n.jsx("strong",{children:"collision"}),"), we check the next slot until we find an empty one."]}),n.jsxs("div",{className:"concept-analogy",style:{marginTop:"0.5rem"},children:[n.jsx(Bn,{style:{color:"#3b82f6"}}),n.jsx("span",{children:"Like parking – if spot 3 is taken, try spot 4, then 5..."})]})]})]})]}),n.jsx(xe,{context:"Hash Table with Linear Probing"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Operations"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Insert Key-Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",value:m,onChange:E=>S(E.target.value),placeholder:"Key"}),n.jsx("input",{type:"text",value:w,onChange:E=>N(E.target.value),onKeyPress:E=>E.key==="Enter"&&b(),placeholder:"Value"}),n.jsx("button",{onClick:b,className:"btn btn-insert",children:"Insert"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Delete Key"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",value:x,onChange:E=>f(E.target.value),onKeyPress:E=>E.key==="Enter"&&z(),placeholder:"Key"}),n.jsx("button",{onClick:z,className:"btn btn-delete",children:"Delete"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Search Key"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",value:g,onChange:E=>v(E.target.value),onKeyPress:E=>E.key==="Enter"&&M(),placeholder:"Key"}),n.jsx("button",{onClick:M,className:"btn btn-search",children:"Search"})]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:C,className:"btn btn-clear",children:"Clear Table"})}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Items"}),n.jsxs("span",{className:"info-value",children:[r,"/",a]})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Load"}),n.jsxs("span",{className:"info-value",style:{color:l>=.7?"#f59e0b":"inherit"},children:[(l*100).toFixed(0),"%"]})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Collisions"}),n.jsx("span",{className:"info-value",style:{color:c>0?"#f59e0b":"inherit"},children:c})]})]}),n.jsxs("div",{className:"rehash-info-box",children:[n.jsx(Eh,{size:16}),n.jsxs("div",{children:[n.jsx("strong",{children:"Rehashing Threshold: 70%"}),n.jsx("p",{children:"In practice, hash tables rehash (double capacity) when load factor reaches ~0.7 to maintain O(1) performance."}),l>=.7?n.jsxs("span",{className:"rehash-warning",children:["Current load (",(l*100).toFixed(0),"%) exceeds threshold!"]}):n.jsxs("span",{className:"rehash-safe",children:["Currently safe (",(l*100).toFixed(0),"% < 70%)"]})]})]}),n.jsx(Be,{message:d})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Hash Table"}),m&&n.jsxs("div",{className:"hash-demo",children:[n.jsxs("div",{className:"hash-demo-item",children:[n.jsx("span",{className:"hash-demo-label",children:"Key:"}),n.jsxs("span",{className:"hash-demo-key",children:['"',m,'"']})]}),n.jsx(re,{className:"hash-demo-arrow"}),n.jsx("div",{className:"hash-demo-item",children:n.jsx("span",{className:"hash-demo-label",children:"hash()"})}),n.jsx(re,{className:"hash-demo-arrow"}),n.jsxs("div",{className:"hash-demo-item",children:[n.jsx("span",{className:"hash-demo-label",children:"Slot:"}),n.jsx("span",{className:"hash-demo-index",children:$(m)})]})]}),I&&n.jsxs("div",{className:"collision-banner",children:[n.jsx(On,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Collision Detected!"}),n.jsxs("p",{children:['"',I.key,'" hashed to slot ',n.jsx("span",{className:"slot-badge original",children:I.originalSlot}),I.probedSlots.length>1&&n.jsxs(n.Fragment,{children:[" ","- Probed: ",I.probedSlots.map((E,y)=>n.jsxs("span",{children:[n.jsx("span",{className:`slot-badge ${y===I.probedSlots.length-1?"final":"probed"}`,children:E}),y<I.probedSlots.length-1&&" > "]},y))]})]})]})]}),n.jsx("div",{className:"ht-visual",children:!e||e.length===0?n.jsx("div",{className:"ht-empty",children:"Hash table is empty. Insert some key-value pairs!"}):n.jsx("div",{className:"ht-buckets",children:e.map((E,y)=>{const O=V.includes(y),A=I&&I.originalSlot===y,L=I&&I.finalSlot===y;return n.jsxs("div",{className:`ht-row ${E?"filled":"empty"} 
                        ${P===y?"highlighted":""} 
                        ${D&&E&&E[0]===D?"just-inserted":""}
                        ${O?"probed":""}
                        ${A?"original-hash":""}
                        ${L?"final-slot":""}`,children:[O&&n.jsx("div",{className:"probe-indicator",children:A?"X":L?"O":">"}),n.jsx("div",{className:`ht-key-box ${E?"has-key":""}`,children:E&&n.jsx("span",{className:"ht-key",children:E[0]})}),n.jsx("div",{className:"ht-arrow",children:E&&n.jsx(re,{size:20})}),n.jsx("div",{className:`ht-index ${A?"collision-index":""}`,children:y}),n.jsx("div",{className:`ht-value-box ${E?"has-value":""}`,children:E?n.jsx("span",{className:"ht-value",children:E[1]}):n.jsx("span",{className:"ht-empty-slot",children:"—"})})]},y)})})}),n.jsxs("div",{className:"ht-legend",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color key-color"}),n.jsx("span",{children:"Key"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color index-color"}),n.jsx("span",{children:"Index"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color value-color"}),n.jsx("span",{children:"Value"})]}),V.length>0&&n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color probe-color"}),n.jsx("span",{children:"Probing Path"})]})]})]})]}),n.jsx(ye,{dataStructure:"hashtable"})]})}const fx={title:"What is Chaining?",description:"Chaining handles collisions by storing multiple key-value pairs in a linked list at each slot.",codeExample:"slot[hash] → [key1, val1] → [key2, val2] → ...",analogy:"Like a coat rack - multiple coats can hang on the same hook!"},mx={title:"Chaining vs Probing",chaining:{label:"Chaining:",color:"#22c55e",points:["Uses linked lists","Load factor can exceed 1.0"]},probing:{label:"Probing:",color:"#f59e0b",points:["Finds next empty slot","Load factor must stay below 1.0"]},summary:"Chaining is simpler and handles high load factors better, but uses extra memory for pointers."},gx={title:"Chaining Advantage",description:"With chaining, load factor can exceed 1.0 because each slot can hold multiple items in a chain.",highLoadThreshold:1.5,highLoadMessage:"High load ({loadFactor}) - chains getting long!",safeMessage:"Load factor: {loadFactor}"},vx={title:"Rehash Table",description:"Doubles the table capacity and redistributes all items to reduce chain lengths.",buttonText:"Rehash",recommendThreshold:1.5},xx=[{type:"color",className:"key-color",label:"Key"},{type:"color",className:"index-color",label:"Index"},{type:"color",className:"value-color",label:"Value"},{type:"icon",icon:"Link",color:"#8b5cf6",label:"Chain (Linked List)"}],yx={insert:{label:"Insert Key-Value",keyPlaceholder:"Key",valuePlaceholder:"Value",buttonText:"Insert"},delete:{label:"Delete Key",placeholder:"Key",buttonText:"Delete"},search:{label:"Search Key",placeholder:"Key",buttonText:"Search"},clear:{buttonText:"Clear Table"},rehash:{buttonText:"Rehash"}},jx={items:"Items",capacity:"Capacity",load:"Load",collisions:"Collisions"},Nx={emptyTable:"Hash table is empty. Insert some key-value pairs!",insertSuccess:'Inserted "{key}" at slot {index}',insertUpdated:'Updated "{key}" at slot {index}',insertCollision:'Collision! Added "{key}" to chain at slot {index}',deleteSuccess:'Deleted "{key}"',searchFound:'Found: "{key}" = {value}',searchNotFound:'Key "{key}" not found',clearSuccess:"Hashtable cleared!",rehashSuccess:"Rehashed! Capacity: {oldCapacity} -> {newCapacity}",rehashEmpty:"Nothing to rehash - table is empty!",errorNoKey:"Please enter a key!",errorNoKeyValue:"Please enter both key and value!",errorInsert:"Error inserting. Is Flask running?",errorDelete:"Error deleting. Is Flask running?",errorSearch:"Error searching item",errorClear:"Error clearing hashtable",errorRehash:"Error rehashing. Is Flask running?"},X={concept:fx,comparison:mx,chainingAdvantage:gx,rehash:vx,legend:xx,operations:yx,infoLabels:jx,messages:Nx};function kx(){const[e,t]=u.useState([]),[r,s]=u.useState(0),[a,i]=u.useState(0),[l,o]=u.useState(0),[c,h]=u.useState(0),{message:d,showMessage:p}=He(3e3),[m,S]=u.useState(""),[w,N]=u.useState(""),[x,f]=u.useState(""),[g,v]=u.useState(""),[P,k]=u.useState(null),[V,T]=u.useState(null),[D,F]=u.useState(!1);u.useEffect(()=>{I()},[]);const I=async()=>{try{const z=await ie("/api/hashtable_chaining");t(z.table||[]),s(z.size||0),i(z.capacity||0),o(z.load_factor||0),h(z.collision_count||0)}catch(z){console.error("Error loading hashtable:",z)}},H=z=>{if(!a||a===0)return 0;let M=0;for(let C=0;C<z.length;C++)M=(M*31+z.charCodeAt(C))%a;return M},K=async()=>{if(!m.trim()||!w.trim()){p(X.messages.errorNoKeyValue,"error");return}try{const z=await ee("/api/hashtable_chaining/insert",{key:m.trim(),value:w.trim()});if(z.error){p(z.error,"error");return}await I(),T(m.trim()),z.updated?p(X.messages.insertUpdated.replace("{key}",m).replace("{index}",z.index),"info"):z.collision?p(X.messages.insertCollision.replace("{key}",m).replace("{index}",z.index),"warning"):p(X.messages.insertSuccess.replace("{key}",m).replace("{index}",z.index),"success"),k(z.index),setTimeout(()=>{k(null),T(null)},3e3),S(""),N("")}catch{p(X.messages.errorInsert,"error")}},$=async()=>{if(!x.trim()){p(X.messages.errorNoKey,"error");return}try{const z=await ee("/api/hashtable_chaining/delete",{key:x.trim()});if(z.error){p(z.error,"error");return}await I(),p(X.messages.deleteSuccess.replace("{key}",x),"success"),f("")}catch{p(X.messages.errorDelete,"error")}},q=async()=>{if(!g.trim()){p(X.messages.errorNoKey,"error");return}try{const z=await ie(`/api/hashtable_chaining/get?key=${encodeURIComponent(g.trim())}`);if(z.error){p(z.error,"error");return}z.found?p(X.messages.searchFound.replace("{key}",g).replace("{value}",z.value),"success"):p(X.messages.searchNotFound.replace("{key}",g),"error"),v("")}catch{p(X.messages.errorSearch,"error")}},b=async()=>{try{await ee("/api/hashtable_chaining/clear",{}),await I(),k(null),T(null),p(X.messages.clearSuccess,"success")}catch{p(X.messages.errorClear,"error")}};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"intro-left",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Oe,{className:"icon-sm"}),n.jsx("span",{children:X.concept.title})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"Chaining"})," ",X.concept.description.replace("Chaining ","")]}),n.jsx("div",{style:{background:"var(--bg-tertiary)",padding:"0.75rem",borderRadius:"8px",marginTop:"0.5rem",fontFamily:"monospace",fontSize:"0.9rem"},children:n.jsx("div",{children:X.concept.codeExample})}),n.jsxs("div",{className:"concept-analogy",style:{marginTop:"0.75rem"},children:[n.jsx(ve,{}),n.jsx("span",{children:X.concept.analogy})]})]})]}),n.jsxs("div",{className:"concept-box",style:{marginTop:"1rem"},children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Bn,{className:"icon-sm",style:{color:"#3b82f6"}}),n.jsx("span",{children:X.comparison.title})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",fontSize:"0.85rem"},children:[n.jsxs("div",{children:[n.jsx("strong",{style:{color:X.comparison.chaining.color},children:X.comparison.chaining.label}),X.comparison.chaining.points.map((z,M)=>n.jsx("div",{style:{marginTop:"0.25rem"},children:z},M))]}),n.jsxs("div",{children:[n.jsx("strong",{style:{color:X.comparison.probing.color},children:X.comparison.probing.label}),X.comparison.probing.points.map((z,M)=>n.jsx("div",{style:{marginTop:"0.25rem"},children:z},M))]})]}),n.jsx("p",{style:{marginTop:"0.75rem",fontSize:"0.85rem"},children:X.comparison.summary})]})]})]}),n.jsx(xe,{context:"Hash Table with Chaining"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Operations"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:X.operations.insert.label}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",value:m,onChange:z=>S(z.target.value),placeholder:X.operations.insert.keyPlaceholder}),n.jsx("input",{type:"text",value:w,onChange:z=>N(z.target.value),onKeyDown:z=>z.key==="Enter"&&K(),placeholder:X.operations.insert.valuePlaceholder}),n.jsx("button",{onClick:K,className:"btn btn-insert",children:X.operations.insert.buttonText})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:X.operations.delete.label}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",value:x,onChange:z=>f(z.target.value),onKeyDown:z=>z.key==="Enter"&&$(),placeholder:X.operations.delete.placeholder}),n.jsx("button",{onClick:$,className:"btn btn-delete",children:X.operations.delete.buttonText})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:X.operations.search.label}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",value:g,onChange:z=>v(z.target.value),onKeyDown:z=>z.key==="Enter"&&q(),placeholder:X.operations.search.placeholder}),n.jsx("button",{onClick:q,className:"btn btn-search",children:X.operations.search.buttonText})]})]}),n.jsx("div",{className:"operation-group",style:{display:"flex",gap:"0.5rem"},children:n.jsx("button",{onClick:b,className:"btn btn-clear",children:X.operations.clear.buttonText})}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:X.infoLabels.items}),n.jsx("span",{className:"info-value",children:r})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:X.infoLabels.capacity}),n.jsx("span",{className:"info-value",children:a})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:X.infoLabels.load}),n.jsx("span",{className:"info-value",style:{color:l>=1?"#f59e0b":"inherit"},children:l.toFixed(2)})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:X.infoLabels.collisions}),n.jsx("span",{className:"info-value",style:{color:c>0?"#f59e0b":"inherit"},children:c})]})]}),n.jsxs("div",{className:"rehash-info-box",children:[n.jsx(es,{size:16}),n.jsxs("div",{children:[n.jsx("strong",{children:X.chainingAdvantage.title}),n.jsx("p",{children:X.chainingAdvantage.description}),l>=X.chainingAdvantage.highLoadThreshold?n.jsxs("div",{className:"rehash-recommend",children:[n.jsx(So,{size:14}),n.jsx("span",{className:"rehash-warning",children:X.chainingAdvantage.highLoadMessage.replace("{loadFactor}",l.toFixed(2))})]}):n.jsx("span",{className:"rehash-safe",children:X.chainingAdvantage.safeMessage.replace("{loadFactor}",l.toFixed(2))})]})]}),n.jsx(Be,{message:d})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Hash Table (Chaining)"}),m&&n.jsxs("div",{className:"hash-demo",children:[n.jsxs("div",{className:"hash-demo-item",children:[n.jsx("span",{className:"hash-demo-label",children:"Key:"}),n.jsxs("span",{className:"hash-demo-key",children:['"',m,'"']})]}),n.jsx(re,{className:"hash-demo-arrow"}),n.jsx("div",{className:"hash-demo-item",children:n.jsx("span",{className:"hash-demo-label",children:"hash()"})}),n.jsx(re,{className:"hash-demo-arrow"}),n.jsxs("div",{className:"hash-demo-item",children:[n.jsx("span",{className:"hash-demo-label",children:"Slot:"}),n.jsx("span",{className:"hash-demo-index",children:H(m)})]})]}),n.jsx("div",{className:"ht-chaining-visual",children:!e||e.length===0?n.jsx("div",{className:"ht-empty",children:X.messages.emptyTable}):n.jsx("div",{className:"ht-chaining-buckets",children:e.map((z,M)=>{const C=P===M,E=z&&Array.isArray(z)&&z.length>0,y=E?z.length:0;return n.jsxs("div",{className:`ht-chaining-row ${E?"filled":"empty"} ${C?"highlighted":""}`,children:[n.jsxs("div",{className:"ht-chaining-index",children:[n.jsx("span",{className:"index-number",children:M}),y>1&&n.jsx("span",{className:"chain-count",children:y})]}),n.jsx("div",{className:"ht-chaining-arrow-container",children:n.jsx(re,{size:18,className:"bucket-arrow"})}),n.jsx("div",{className:"ht-chaining-content",children:E?n.jsx("div",{className:"ht-chaining-chain",children:z.map((O,A)=>{const L=V&&O.key===V;return n.jsxs(Je.Fragment,{children:[n.jsxs("div",{className:`ht-chaining-node ${L?"just-inserted":""} ${A>0?"collision-node":""}`,children:[n.jsx("div",{className:"node-key",children:O.key}),n.jsx("div",{className:"node-separator"}),n.jsx("div",{className:"node-value",children:O.value})]}),A<z.length-1&&n.jsx("div",{className:"chain-link",children:n.jsx(re,{size:16})})]},A)})}):n.jsx("div",{className:"ht-chaining-empty-slot",children:n.jsx("span",{children:"Empty"})})})]},M)})})}),n.jsx("div",{className:"ht-legend",children:X.legend.map((z,M)=>n.jsxs("div",{className:"legend-item",children:[z.type==="color"?n.jsx("div",{className:`legend-color ${z.className}`}):n.jsx(es,{size:14,style:{color:z.color}}),n.jsx("span",{children:z.label})]},M))})]})]}),n.jsx(ye,{dataStructure:"hashtableChaining"})]})}function bx(){const[e,t]=u.useState([]),[r,s]=u.useState(0),[a,i]=u.useState(0),[l,o]=u.useState(0),{message:c,showMessage:h}=He(3e3),[d,p]=u.useState(""),[m,S]=u.useState(""),[w,N]=u.useState(""),[x,f]=u.useState(""),[g,v]=u.useState(null),[P,k]=u.useState([]),[V,T]=u.useState(null),[D,F]=u.useState(null);u.useEffect(()=>{I()},[]);const I=async()=>{try{const M=await ie("/api/hashtable_quadratic");t(M.table||[]),s(M.size||0),i(M.capacity||0),o(M.load_factor||0)}catch(M){console.error("Error loading hashtable:",M)}},H=M=>{if(!a||a===0)return 0;let C=0;for(let E=0;E<M.length;E++)C=(C*31+M.charCodeAt(E))%a;return C},K=(M,C)=>{var O;const E=H(M),y=[];for(let A=0;A<a;A++){const L=(E+A*A)%a;if(y.push({index:L,i:A,formula:`(${E} + ${A}²) % ${a} = ${L}`}),!C[L]||C[L][0]===M)break}return{originalHash:E,path:y,finalSlot:(O=y[y.length-1])==null?void 0:O.index}},$=async()=>{if(!d.trim()||!m.trim()){h("Please enter both key and value!","error");return}const M=a>0?H(d.trim()):0,C=e.length>0&&e[M]&&e[M]!=="DELETED"&&e[M][0]!==d.trim();let E=null;C&&(E=K(d.trim(),e));try{const y=await ee("/api/hashtable_quadratic/insert",{key:d.trim(),value:m.trim()});if(y.error){h(y.error,"error");return}await I(),T(d.trim()),C&&E?(F({key:d.trim(),originalSlot:E.originalHash,probedSlots:E.path,finalSlot:y.final_index}),k(E.path.map(O=>O.index)),h(`Collision! Quadratic probing: ${E.path.length} probe(s)`,"warning"),setTimeout(()=>{k([]),F(null)},5e3)):(h(`Inserted "${d}" → slot ${M}`,"success"),v(M),setTimeout(()=>v(null),2e3)),p(""),S(""),setTimeout(()=>T(null),3e3)}catch{h("Error inserting. Is Flask running?","error")}},q=async()=>{if(!w.trim()){h("Please enter a key!","error");return}try{const M=await ee("/api/hashtable_quadratic/delete",{key:w.trim()});if(M.error){h(M.error,"error");return}await I(),h(`Deleted "${w}"`,"success"),N("")}catch{h("Error deleting. Is Flask running?","error")}},b=async()=>{if(!x.trim()){h("Please enter a key!","error");return}try{const M=await ie(`/api/hashtable_quadratic/get?key=${encodeURIComponent(x.trim())}`);if(M.error){h(M.error,"error");return}M.found?h(`Found: "${x}" = ${M.value}`,"success"):h(`Key "${x}" not found`,"error"),f("")}catch{h("Error searching item","error")}},z=async()=>{try{await ee("/api/hashtable_quadratic/clear",{}),await I(),k([]),F(null),h("Hashtable cleared!","success")}catch{h("Error clearing hashtable","error")}};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"intro-left",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Oe,{className:"icon-sm"}),n.jsx("span",{children:"What is Quadratic Probing?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"Quadratic Probing"})," is a collision resolution technique where we probe at quadratically increasing intervals."]}),n.jsxs("div",{style:{background:"var(--bg-tertiary)",padding:"0.75rem",borderRadius:"8px",marginTop:"0.5rem",fontFamily:"monospace",fontSize:"0.9rem"},children:[n.jsx("div",{children:"probe(i) = (hash + i²) % capacity"}),n.jsx("div",{style:{color:"var(--text-muted)",marginTop:"0.25rem"},children:"i = 0, 1, 4, 9, 16, 25..."})]}),n.jsxs("div",{className:"concept-analogy",style:{marginTop:"0.75rem"},children:[n.jsx(ve,{}),n.jsxs("span",{children:["Unlike linear probing, we jump further each time – reducing ",n.jsx("strong",{children:"clustering"}),"!"]})]})]})]}),n.jsxs("div",{className:"concept-box",style:{marginTop:"1rem"},children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Bn,{className:"icon-sm",style:{color:"#3b82f6"}}),n.jsx("span",{children:"Linear vs Quadratic"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",fontSize:"0.85rem"},children:[n.jsxs("div",{children:[n.jsx("strong",{style:{color:"#f59e0b"},children:"Linear:"}),n.jsx("div",{style:{fontFamily:"monospace",marginTop:"0.25rem"},children:"+1, +2, +3, +4..."})]}),n.jsxs("div",{children:[n.jsx("strong",{style:{color:"#22c55e"},children:"Quadratic:"}),n.jsx("div",{style:{fontFamily:"monospace",marginTop:"0.25rem"},children:"+1, +4, +9, +16..."})]})]}),n.jsx("p",{style:{marginTop:"0.75rem",fontSize:"0.85rem"},children:"Quadratic probing spreads entries more evenly but may not find empty slots if table is over 50% full."})]})]})]}),n.jsx(xe,{context:"Hash Table with Quadratic Probing"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Operations"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Insert Key-Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",value:d,onChange:M=>p(M.target.value),placeholder:"Key"}),n.jsx("input",{type:"text",value:m,onChange:M=>S(M.target.value),onKeyPress:M=>M.key==="Enter"&&$(),placeholder:"Value"}),n.jsx("button",{onClick:$,className:"btn btn-insert",children:"Insert"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Delete Key"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",value:w,onChange:M=>N(M.target.value),onKeyPress:M=>M.key==="Enter"&&q(),placeholder:"Key"}),n.jsx("button",{onClick:q,className:"btn btn-delete",children:"Delete"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Search Key"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",value:x,onChange:M=>f(M.target.value),onKeyPress:M=>M.key==="Enter"&&b(),placeholder:"Key"}),n.jsx("button",{onClick:b,className:"btn btn-search",children:"Search"})]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:z,className:"btn btn-clear",children:"Clear Table"})}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Items"}),n.jsxs("span",{className:"info-value",children:[r,"/",a]})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Load"}),n.jsxs("span",{className:"info-value",style:{color:l>=.5?"#f59e0b":"inherit"},children:[(l*100).toFixed(0),"%"]})]})]}),n.jsxs("div",{className:"rehash-info-box",children:[n.jsx(Eh,{size:16}),n.jsxs("div",{children:[n.jsx("strong",{children:"Rehashing Threshold: 50%"}),n.jsx("p",{children:"Quadratic probing requires lower load factor (~0.5) to guarantee finding empty slots."}),l>=.5?n.jsxs("span",{className:"rehash-warning",children:["Load (",(l*100).toFixed(0),"%) at threshold!"]}):n.jsxs("span",{className:"rehash-safe",children:["Currently safe (",(l*100).toFixed(0),"% < 50%)"]})]})]}),n.jsx(Be,{message:c})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Hash Table (Quadratic Probing)"}),d&&n.jsxs("div",{className:"hash-demo",children:[n.jsxs("div",{className:"hash-demo-item",children:[n.jsx("span",{className:"hash-demo-label",children:"Key:"}),n.jsxs("span",{className:"hash-demo-key",children:['"',d,'"']})]}),n.jsx(re,{className:"hash-demo-arrow"}),n.jsx("div",{className:"hash-demo-item",children:n.jsx("span",{className:"hash-demo-label",children:"hash()"})}),n.jsx(re,{className:"hash-demo-arrow"}),n.jsxs("div",{className:"hash-demo-item",children:[n.jsx("span",{className:"hash-demo-label",children:"Slot:"}),n.jsx("span",{className:"hash-demo-index",children:H(d)})]})]}),D&&n.jsxs("div",{className:"collision-banner",children:[n.jsx(On,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Quadratic Probing!"}),n.jsxs("p",{children:['"',D.key,'" hashed to slot ',n.jsx("span",{className:"slot-badge original",children:D.originalSlot})]}),n.jsx("div",{style:{marginTop:"0.5rem",fontSize:"0.8rem",fontFamily:"monospace"},children:D.probedSlots.map((M,C)=>n.jsxs("div",{style:{marginBottom:"0.25rem"},children:["i=",M.i,": ",M.formula,C===D.probedSlots.length-1&&n.jsx("span",{style:{color:"#4ade80"},children:" [FOUND]"})]},C))})]})]}),n.jsx("div",{className:"ht-visual",children:!e||e.length===0?n.jsx("div",{className:"ht-empty",children:"Hash table is empty. Insert some key-value pairs!"}):n.jsx("div",{className:"ht-buckets",children:e.map((M,C)=>{const E=P.includes(C),y=D&&D.originalSlot===C,O=D&&D.finalSlot===C,A=M==="DELETED",L=M&&M!=="DELETED";return n.jsxs("div",{className:`ht-row ${L?"filled":"empty"} 
                        ${A?"deleted":""}
                        ${g===C?"highlighted":""} 
                        ${V&&L&&M[0]===V?"just-inserted":""}
                        ${E?"probed":""}
                        ${y?"original-hash":""}
                        ${O?"final-slot":""}`,children:[E&&n.jsx("div",{className:"probe-indicator",children:y?"X":O?"O":">"}),n.jsxs("div",{className:`ht-key-box ${L?"has-key":""} ${A?"deleted-slot":""}`,children:[L&&n.jsx("span",{className:"ht-key",children:M[0]}),A&&n.jsx("span",{className:"ht-deleted-text",children:"DEL"})]}),n.jsx("div",{className:"ht-arrow",children:L&&n.jsx(re,{size:20})}),n.jsx("div",{className:`ht-index ${y?"collision-index":""}`,children:C}),n.jsx("div",{className:`ht-value-box ${L?"has-value":""} ${A?"deleted-slot":""}`,children:L?n.jsx("span",{className:"ht-value",children:M[1]}):A?n.jsx("span",{className:"ht-deleted-text",children:"DELETED"}):n.jsx("span",{className:"ht-empty-slot",children:"—"})})]},C)})})}),n.jsxs("div",{className:"ht-legend",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color key-color"}),n.jsx("span",{children:"Key"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color index-color"}),n.jsx("span",{children:"Index"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color value-color"}),n.jsx("span",{children:"Value"})]}),P.length>0&&n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color probe-color"}),n.jsx("span",{children:"Probe Path"})]})]})]})]}),n.jsx(ye,{dataStructure:"hashtable"})]})}const Dt=7,wx={inorder:{name:"Inorder Traversal",order:"Left → Root → Right",description:"Visit left subtree, process root, then visit right subtree. For BST, this produces sorted order.",useCase:["Get sorted elements","Validate BST","Create mirror image"],complexity:{time:"O(n)",space:"O(h)"}},preorder:{name:"Preorder Traversal",order:"Root → Left → Right",description:"Process root first, then recursively visit left and right subtrees. Useful for copying trees.",useCase:["Copy tree structure","Serialize/deserialize","Prefix expressions"],complexity:{time:"O(n)",space:"O(h)"}},postorder:{name:"Postorder Traversal",order:"Left → Right → Root",description:"Visit left subtree, right subtree, then process root. Essential for deleting nodes safely.",useCase:["Delete nodes safely","Calculate folder sizes","Postfix expressions"],complexity:{time:"O(n)",space:"O(h)"}},levelorder:{name:"Level Order Traversal",order:"Level by Level (BFS)",description:"Visit nodes level by level using a queue. Perfect for finding shortest paths.",useCase:["Shortest path","Level-wise printing","Nodes at distance K"],complexity:{time:"O(n)",space:"O(w)"}}},vl=(e,t=[])=>(e&&(vl(e.left,t),t.push(e.data),vl(e.right,t)),t),xl=(e,t=[])=>(e&&(t.push(e.data),xl(e.left,t),xl(e.right,t)),t),yl=(e,t=[])=>(e&&(yl(e.left,t),yl(e.right,t),t.push(e.data)),t),Sx=e=>{if(!e)return[];const t=[],r=[e];for(;r.length;){const s=r.shift();t.push(s.data),s.left&&r.push(s.left),s.right&&r.push(s.right)}return t},jl=(e,t=0)=>e?Math.max(jl(e.left,t+1),jl(e.right,t+1)):t-1;function Cx(){return n.jsxs("div",{className:"intro-left",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Oe,{className:"icon-sm"}),n.jsx("span",{children:"What is a Binary Tree?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:["A ",n.jsx("strong",{children:"Binary Tree"})," is a hierarchical data structure where each node has at most ",n.jsx("strong",{children:"two children"}),": left and right."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(ve,{}),n.jsxs("span",{children:["Think of a ",n.jsx("strong",{children:"family tree"})," – each person can have up to two children!"]})]}),n.jsxs("div",{className:"concept-key-terms",children:[n.jsx("h4",{children:"Key Terms:"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Node:"})," Contains data and links to children"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Root:"})," The topmost node (no parent)"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Leaf:"})," A node with no children"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Height:"})," Longest path from root to leaf"]})]})]})]})]}),n.jsxs("div",{className:"concept-box",style:{marginTop:"1rem"},children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Bn,{className:"icon-sm"}),n.jsx("span",{children:"What are Tree Traversals?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"Tree Traversal"})," is visiting each node ",n.jsx("strong",{children:"exactly once"})," in a specific order."]}),n.jsxs("div",{className:"concept-why-traverse",children:[n.jsx("h4",{children:"Why Traverse?"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Search:"})," Find specific data"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Copy:"})," Duplicate the tree"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Evaluate:"})," Calculate expressions"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Delete:"})," Remove nodes properly"]})]})]}),n.jsxs("div",{className:"concept-analogy",style:{marginTop:"0.75rem"},children:[n.jsx(ve,{}),n.jsx("span",{children:"Like reading a book – you can read in different orders based on your needs!"})]})]})]})]})}function Tx({insertValue:e,deleteValue:t,size:r,height:s,message:a,tree:i,isAnimating:l,visitedNodes:o,onInsertValueChange:c,onDeleteValueChange:h,onInsert:d,onDelete:p,onTraversal:m,onClear:S,onResetTraversal:w}){const N=(x,f)=>{const g=x.target.value;(g===""||g==="-"||/^-?\d*\.?\d*$/.test(g))&&f(g)};return n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Binary Tree Traversals"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"insertValue",children:"Insert Node"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"insertValue",value:e,onChange:x=>N(x,c),onKeyPress:x=>x.key==="Enter"&&d(),placeholder:"Enter a number"}),n.jsx("button",{onClick:d,className:"btn btn-insert",children:"Insert"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"deleteValue",children:"Delete Node"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"deleteValue",value:t,onChange:x=>N(x,h),onKeyPress:x=>x.key==="Enter"&&p(),placeholder:"Enter a number"}),n.jsx("button",{onClick:p,className:"btn btn-delete",children:"Delete"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Traversals"}),n.jsx("div",{className:"btn-group",children:["inorder","preorder","postorder","levelorder"].map(x=>n.jsx("button",{onClick:()=>m(x),className:"btn btn-traversal",disabled:l||!i,children:x==="levelorder"?"Level Order":x.charAt(0).toUpperCase()+x.slice(1)},x))}),o.length>0&&!l&&n.jsx("button",{onClick:w,className:"btn btn-secondary",style:{marginTop:"0.5rem",width:"100%"},children:"Reset Colors"})]}),n.jsxs("div",{className:"traversal-legend",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--default"}),n.jsx("span",{children:"Not visited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--visiting"}),n.jsx("span",{children:"Visiting"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--visited"}),n.jsx("span",{children:"Visited"})]})]}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Size:"}),n.jsx("span",{className:"info-value",children:r})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Height:"}),n.jsx("span",{className:"info-value",children:s})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Max Size:"}),n.jsx("span",{className:"info-value",children:Dt})]})]}),r>=Dt*.8&&r<Dt&&n.jsxs("div",{className:"warning-box",children:[n.jsx(On,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Tree is filling up!"})," You're at ",r,"/",Dt," nodes."]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:S,className:"btn btn-clear",children:"Clear Tree"})}),a&&n.jsx("div",{className:`message message-${a.includes("Error")||a.includes("error")?"error":/success|complete|Inserted|Deleted|cleared/i.test(a)?"success":a.includes("full")?"warning":"info"}`,children:a})]})}function Ex({tree:e,currentNode:t,visitedNodes:r}){const s=c=>{const h=t===c,d=r.includes(c);return{color:h?"#f59e0b":d?"#10b981":"#6366f1",glow:h?"drop-shadow(0 0 12px #f59e0b) drop-shadow(0 0 20px #f59e0b)":d?"drop-shadow(0 0 6px #10b981)":"none",radius:h?30:25,stroke:h?3:2,fontSize:h?16:14,fontWeight:h?"bold":"normal"}},a=(c,h,d,p,m)=>{if(!c)return[];const S=Math.pow(2,m-p)*50,w=s(c.data),N=[];return c.left&&(N.push(n.jsx("line",{x1:h,y1:d,x2:h-S,y2:d+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:"2"},`l-${c.data}-l`)),N.push(...a(c.left,h-S,d+100,p+1,m))),c.right&&(N.push(n.jsx("line",{x1:h,y1:d,x2:h+S,y2:d+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:"2"},`l-${c.data}-r`)),N.push(...a(c.right,h+S,d+100,p+1,m))),N.push(n.jsxs("g",{style:{filter:w.glow,transition:"all 0.3s ease"},children:[n.jsx("circle",{cx:h,cy:d,r:w.radius,fill:w.color,stroke:"white",strokeWidth:w.stroke,style:{transition:"all 0.3s ease"}}),n.jsx("text",{x:h,y:d,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:w.fontSize,fontWeight:w.fontWeight,children:c.data})]},`n-${c.data}-${h}`)),N};if(!e)return n.jsx("div",{className:"tree-empty",children:"Tree is empty. Insert some nodes!"});const i=jl(e),l=(i+1)*100+50,o=Math.max(800,Math.pow(2,Math.max(i,1))*80);return n.jsx("svg",{width:o,height:l,className:"tree-svg",children:a(e,o/2,50,0,i)})}function Lx({traversalType:e,traversalResult:t,isAnimating:r,traversalComplete:s}){if(!e||t.length===0&&!r)return null;const a=wx[e];return n.jsxs("div",{className:"traversal-output-panel",children:[n.jsxs("div",{style:{marginBottom:"1rem"},children:[n.jsxs("h3",{className:"traversal-title",children:[a==null?void 0:a.name,r&&n.jsx("span",{className:"traversal-badge traversal-badge--running",children:"Running..."}),s&&n.jsx("span",{className:"traversal-badge traversal-badge--complete",children:"Complete"})]}),n.jsxs("p",{className:"traversal-order",children:[n.jsx("strong",{children:"Order:"})," ",a==null?void 0:a.order]}),n.jsx("p",{className:"traversal-description",children:a==null?void 0:a.description})]}),n.jsxs("div",{className:"traversal-output-box",children:[n.jsx("div",{className:"traversal-output-label",children:"Output Sequence:"}),n.jsx("div",{className:"traversal-sequence-container",children:t.length===0&&r?n.jsx("span",{style:{color:"var(--text-muted)",fontStyle:"italic"},children:"Traversing..."}):t.map((i,l)=>n.jsx("span",{className:`traversal-node ${l===t.length-1&&!s?"traversal-node--current":"traversal-node--complete"}`,children:i},l))})]}),s&&t.length>0&&n.jsxs("div",{className:"traversal-array-section",children:[n.jsx("div",{className:"traversal-array-label",children:"Array Output:"}),n.jsxs("code",{className:"traversal-array-output",children:["[",t.join(", "),"]"]}),n.jsxs("p",{className:"traversal-use-case",children:["Use case: ",a==null?void 0:a.useCase.join(" • ")]}),n.jsxs("div",{className:"traversal-complexity",children:[n.jsx("strong",{children:"Time:"})," ",n.jsx("code",{className:"complexity-value",children:a==null?void 0:a.complexity.time})," (visits each node once)",n.jsx("br",{}),n.jsx("strong",{children:"Space:"})," ",n.jsx("code",{className:"complexity-value",children:a==null?void 0:a.complexity.space})," (recursion stack/queue)"]})]})]})}function Px(){const[e,t]=u.useState(null),[r,s]=u.useState(0),[a,i]=u.useState(-1),[l,o]=u.useState(""),[c,h]=u.useState(""),[d,p]=u.useState(""),[m,S]=u.useState([]),[w,N]=u.useState(!1),[x,f]=u.useState(null),[g,v]=u.useState([]),[P,k]=u.useState(null),[V,T]=u.useState(!1);u.useEffect(()=>{D()},[]);const D=async()=>{try{const z=await(await fetch("/api/binarytree")).json();t(z.tree),s(z.size||0),i(z.height!==void 0?z.height:-1)}catch(b){console.error("Error loading tree:",b)}},F=b=>{p(b),setTimeout(()=>p(""),3e3)},I=async()=>{if(!l.trim()){F("Please enter a number!");return}const b=Number(l);if(isNaN(b)){F("Please enter a valid number!");return}if(r>=Dt){F(`Tree is full! Maximum size is ${Dt} nodes.`);return}try{const M=await(await fetch("/api/binarytree/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:b})})).json();if(M.error){F(M.error);return}t(M.tree),s(M.size||0),i(M.height!==void 0?M.height:-1),F(`Inserted ${b}`),o("")}catch{F("Error inserting node")}},H=async()=>{if(!c.trim()){F("Please enter a number!");return}const b=Number(c);if(isNaN(b)){F("Please enter a valid number!");return}try{const M=await(await fetch("/api/binarytree/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:b})})).json();if(M.error){F(M.error);return}t(M.tree),s(M.size||0),i(M.height!==void 0?M.height:-1),F(`Deleted ${b}`),h("")}catch{F("Error deleting node")}},K=async()=>{try{await fetch("/api/binarytree/clear",{method:"POST"}),t(null),s(0),i(-1),q(),F("Tree cleared!")}catch{F("Error clearing tree")}},$=async b=>{if(!e){F("Tree is empty! Insert some nodes first.");return}N(!0),S([]),f(null),v([]),k(b),T(!1);let z=[];switch(b){case"inorder":z=vl(e);break;case"preorder":z=xl(e);break;case"postorder":z=yl(e);break;case"levelorder":z=Sx(e);break;default:z=[]}if(z.length===0){F("Tree is empty!"),N(!1);return}for(let M=0;M<z.length;M++)f(z[M]),await new Promise(C=>setTimeout(C,600)),v(C=>[...C,z[M]]),S(C=>[...C,z[M]]),await new Promise(C=>setTimeout(C,200));f(null),T(!0),N(!1),F(`${b.charAt(0).toUpperCase()+b.slice(1)} traversal complete!`)},q=()=>{S([]),f(null),v([]),k(null),T(!1)};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsx(Cx,{}),n.jsx(xe,{context:"Binary Tree data structure and traversals"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsx(Tx,{insertValue:l,deleteValue:c,size:r,height:a,message:d,tree:e,isAnimating:w,visitedNodes:g,onInsertValueChange:o,onDeleteValueChange:h,onInsert:I,onDelete:H,onTraversal:$,onClear:K,onResetTraversal:q}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Binary Tree Visualization"}),n.jsx("div",{className:"tree-container",children:n.jsx(Ex,{tree:e,currentNode:x,visitedNodes:g})}),n.jsx(Lx,{traversalType:P,traversalResult:m,isAnimating:w,traversalComplete:V})]})]}),n.jsx(ye,{dataStructure:"binarytree"})]})}const Ox={title:"What is a Stack?",description:"A Stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle.",codeExample:"push(A) → push(B) → push(C) → pop() returns C",analogy:"Like a stack of plates - you can only take the top plate off first!"},Rx={title:"Stack Properties",items:[{label:"Order",value:"LIFO (Last-In-First-Out)"},{label:"Access",value:"Top element only"},{label:"Insert",value:"Push to top - O(1)"},{label:"Remove",value:"Pop from top - O(1)"}]},Ix={title:"Common Use Cases",items:["Function call stack (recursion)","Undo/Redo operations","Browser back button","Expression evaluation","Syntax parsing"]},_x={title:"Time Complexity",operations:[{name:"Push",time:"O(1)",description:"Add to top"},{name:"Pop",time:"O(1)",description:"Remove from top"},{name:"Peek",time:"O(1)",description:"View top element"},{name:"isEmpty",time:"O(1)",description:"Check if empty"},{name:"Search",time:"O(n)",description:"Find element"}]},zx={push:{label:"Push Value",placeholder:"Value",buttonText:"Push"},pop:{buttonText:"Pop"},peek:{buttonText:"Peek"},clear:{buttonText:"Clear"}},Mx={size:"Size",top:"Top",capacity:"Capacity"},Ax={emptyStack:"Stack is empty. Push some values!",pushSuccess:'Pushed "{value}" to stack',popSuccess:'Popped "{value}" from stack',popEmpty:"Cannot pop - stack is empty!",peekSuccess:'Top element: "{value}"',peekEmpty:"Cannot peek - stack is empty!",clearSuccess:"Stack cleared!",errorNoValue:"Please enter a value!",errorPush:"Error pushing to stack",errorPop:"Error popping from stack",errorClear:"Error clearing stack",stackFull:"Stack is full!"},Vx=[{type:"color",className:"top-color",label:"Top Element"},{type:"color",className:"element-color",label:"Stack Element"}],Fx={concept:Ox,properties:Rx,useCases:Ix,complexity:_x,operations:zx,infoLabels:Mx,messages:Ax,legend:Vx},Dx={title:"What is a Queue?",description:"A Queue is a linear data structure that follows the First-In-First-Out (FIFO) principle.",codeExample:"enqueue(A) → enqueue(B) → enqueue(C) → dequeue() returns A",analogy:"Like a line at a store - first person in line gets served first!"},$x={title:"Queue Properties",items:[{label:"Order",value:"FIFO (First-In-First-Out)"},{label:"Access",value:"Front and Rear"},{label:"Insert",value:"Enqueue at rear - O(1)"},{label:"Remove",value:"Dequeue from front - O(1)"}]},Bx={title:"Queue vs Stack",queue:{label:"Queue:",color:"#22c55e",points:["FIFO order","Two access points (front/rear)"]},stack:{label:"Stack:",color:"#3b82f6",points:["LIFO order","One access point (top)"]},summary:"Use Queue when order of processing matters (like task scheduling)."},Hx={title:"Common Use Cases",items:["Task scheduling (CPU, print jobs)","Breadth-First Search (BFS)","Message queues","Request handling in servers","Buffering (streaming)"]},qx={title:"Time Complexity",operations:[{name:"Enqueue",time:"O(1)",description:"Add to rear"},{name:"Dequeue",time:"O(1)",description:"Remove from front"},{name:"Front",time:"O(1)",description:"View front element"},{name:"isEmpty",time:"O(1)",description:"Check if empty"},{name:"Search",time:"O(n)",description:"Find element"}]},Ux={enqueue:{label:"Enqueue Value",placeholder:"Value",buttonText:"Enqueue"},dequeue:{buttonText:"Dequeue"},front:{buttonText:"Front"},clear:{buttonText:"Clear"}},Kx={size:"Size",front:"Front",rear:"Rear",capacity:"Capacity"},Wx={emptyQueue:"Queue is empty. Enqueue some values!",enqueueSuccess:'Enqueued "{value}"',dequeueSuccess:'Dequeued "{value}"',dequeueEmpty:"Cannot dequeue - queue is empty!",frontSuccess:'Front element: "{value}"',frontEmpty:"Cannot get front - queue is empty!",clearSuccess:"Queue cleared!",errorNoValue:"Please enter a value!",errorEnqueue:"Error enqueueing to queue",errorDequeue:"Error dequeueing from queue",errorClear:"Error clearing queue",queueFull:"Queue is full!"},Gx=[{type:"color",className:"front-color",label:"Front"},{type:"color",className:"rear-color",label:"Rear"},{type:"color",className:"element-color",label:"Queue Element"}],Qx={concept:Dx,properties:$x,comparison:Bx,useCases:Hx,complexity:qx,operations:Ux,infoLabels:Kx,messages:Wx,legend:Gx},Yx={title:"What is a Linked List?",description:"A Linked List is a linear data structure where elements are stored in nodes, each pointing to the next node.",codeExample:"HEAD → [A|→] → [B|→] → [C|→] → NULL",analogy:"Like a treasure hunt - each clue (node) points to the next location!"},Xx={title:"Linked List Properties",items:[{label:"Structure",value:"Nodes with data + pointer"},{label:"Memory",value:"Non-contiguous allocation"},{label:"Size",value:"Dynamic (grows/shrinks)"},{label:"Access",value:"Sequential (no random access)"}]},Jx={title:"Linked List vs Array",linkedlist:{label:"Linked List:",color:"#22c55e",points:["Dynamic size","O(1) insert/delete at known position","Extra memory for pointers"]},array:{label:"Array:",color:"#3b82f6",points:["Fixed size (usually)","O(1) random access by index","Contiguous memory"]},summary:"Use Linked List when you need frequent insertions/deletions and don't need random access."},Zx={title:"Types of Linked Lists",items:[{name:"Singly Linked",description:"Each node points to next only"},{name:"Doubly Linked",description:"Nodes point to both next and previous"},{name:"Circular",description:"Last node points back to first"}]},ey={title:"Time Complexity",operations:[{name:"Access",time:"O(n)",description:"Traverse to find"},{name:"Search",time:"O(n)",description:"Linear search"},{name:"Insert (head)",time:"O(1)",description:"Add at beginning"},{name:"Insert (tail)",time:"O(n)",description:"Traverse then add"},{name:"Delete (head)",time:"O(1)",description:"Remove first"},{name:"Delete (by value)",time:"O(n)",description:"Find then remove"}]},ny={insertHead:{label:"Insert at Head",placeholder:"Value",buttonText:"Insert Head"},insertTail:{label:"Insert at Tail",placeholder:"Value",buttonText:"Insert Tail"},delete:{label:"Delete Value",placeholder:"Value",buttonText:"Delete"},search:{label:"Search Value",placeholder:"Value",buttonText:"Search"},clear:{buttonText:"Clear"}},ty={size:"Size",head:"Head",tail:"Tail"},ry={emptyList:"Linked list is empty. Insert some values!",insertHeadSuccess:'Inserted "{value}" at head',insertTailSuccess:'Inserted "{value}" at tail',deleteSuccess:'Deleted "{value}"',deleteNotFound:'Value "{value}" not found',searchFound:'Found "{value}" at position {position}',searchNotFound:'Value "{value}" not found',clearSuccess:"Linked list cleared!",errorNoValue:"Please enter a value!",errorInsert:"Error inserting value",errorDelete:"Error deleting value",errorSearch:"Error searching value",errorClear:"Error clearing list"},sy=[{type:"color",className:"head-color",label:"Head Node"},{type:"color",className:"node-color",label:"Node"},{type:"icon",icon:"ArrowRight",color:"#8b5cf6",label:"Pointer"}],ay={concept:Yx,properties:Xx,comparison:Jx,types:Zx,complexity:ey,operations:ny,infoLabels:ty,messages:ry,legend:sy},iy={title:"What is a Binary Tree?",description:"A Binary Tree is a hierarchical data structure where each node has at most two children (left and right).",codeExample:`       [5]
      /   \\
    [3]   [7]
   /  \\     \\
 [1]  [4]   [9]`,analogy:"Like a family tree - each person can have at most two children!"},ly={title:"Binary Tree Properties",items:[{label:"Structure",value:"Hierarchical (nodes + edges)"},{label:"Children",value:"At most 2 per node"},{label:"Root",value:"Topmost node (no parent)"},{label:"Leaf",value:"Node with no children"}]},oy={title:"Types of Binary Trees",items:[{name:"Full Binary Tree",description:"Every node has 0 or 2 children"},{name:"Complete Binary Tree",description:"All levels filled except possibly last"},{name:"Perfect Binary Tree",description:"All internal nodes have 2 children, leaves at same level"},{name:"Binary Search Tree",description:"Left < Parent < Right ordering"}]},cy={title:"Tree Traversals",items:[{name:"Inorder",order:"Left → Root → Right",use:"BST gives sorted order"},{name:"Preorder",order:"Root → Left → Right",use:"Copy tree, prefix expression"},{name:"Postorder",order:"Left → Right → Root",use:"Delete tree, postfix expression"},{name:"Level Order",order:"Level by level (BFS)",use:"Print by levels"}]},dy={title:"Time Complexity (BST)",operations:[{name:"Search",average:"O(log n)",worst:"O(n)",description:"Find element"},{name:"Insert",average:"O(log n)",worst:"O(n)",description:"Add element"},{name:"Delete",average:"O(log n)",worst:"O(n)",description:"Remove element"},{name:"Traversal",average:"O(n)",worst:"O(n)",description:"Visit all nodes"}],note:"Worst case O(n) occurs when tree becomes a linked list (unbalanced)"},uy={title:"Common Use Cases",items:["Binary Search Trees (fast lookup)","Expression trees (parsing)","Huffman coding (compression)","Heaps (priority queues)","File system structure"]},hy={insert:{label:"Insert Value",placeholder:"Value",buttonText:"Insert"},delete:{label:"Delete Value",placeholder:"Value",buttonText:"Delete"},search:{label:"Search Value",placeholder:"Value",buttonText:"Search"},traversals:{inorder:"Inorder",preorder:"Preorder",postorder:"Postorder",levelorder:"Level Order"},clear:{buttonText:"Clear"}},py={size:"Nodes",height:"Height",root:"Root"},fy={emptyTree:"Binary tree is empty. Insert some values!",insertSuccess:"Inserted {value}",deleteSuccess:"Deleted {value}",deleteNotFound:"Value {value} not found",searchFound:"Found {value}",searchNotFound:"Value {value} not found",clearSuccess:"Tree cleared!",traversalResult:"{type} traversal: {result}",errorNoValue:"Please enter a value!",errorInsert:"Error inserting value",errorDelete:"Error deleting value",errorSearch:"Error searching value",errorClear:"Error clearing tree"},my=[{type:"color",className:"root-color",label:"Root"},{type:"color",className:"node-color",label:"Node"},{type:"color",className:"leaf-color",label:"Leaf"},{type:"color",className:"highlight-color",label:"Current/Found"}],gy={concept:iy,properties:ly,types:oy,traversals:cy,complexity:dy,useCases:uy,operations:hy,infoLabels:py,messages:fy,legend:my},vy={title:"What is a Hash Table?",description:"A Hash Table is a data structure that maps keys to values using a hash function for O(1) average access time.",codeExample:'hash("apple") → 3 → table[3] = "apple"',analogy:"Like a library catalog - the book title (key) tells you exactly which shelf (index) to find it!"},xy={title:"Hash Table Properties",items:[{label:"Access",value:"O(1) average time"},{label:"Hash Function",value:"Maps key → index"},{label:"Load Factor",value:"size / capacity"},{label:"Collision",value:"When two keys hash to same index"}]},yy={title:"Collision Resolution: Linear Probing",description:"When a collision occurs, probe sequentially until an empty slot is found.",steps:["Calculate hash index","If slot occupied, try next slot","Repeat until empty slot found","Insert at empty slot"],formula:"index = (hash(key) + i) % capacity, where i = 0, 1, 2, ..."},jy={title:"Linear vs Quadratic Probing",linear:{label:"Linear Probing:",color:"#3b82f6",points:["Simple: check next slot","Primary clustering problem","Cache-friendly"]},quadratic:{label:"Quadratic Probing:",color:"#f59e0b",points:["Jump by squares: 1, 4, 9...","Reduces primary clustering","May not find empty slot"]},summary:"Linear probing is simpler but can cause clustering. Quadratic probing spreads entries better."},Ny={title:"Load Factor",description:"Load factor = size / capacity. Measures how full the table is.",threshold:.7,warningMessage:"High load ({loadFactor}) - consider rehashing!",safeMessage:"Load factor: {loadFactor}"},ky={title:"Time Complexity",operations:[{name:"Insert",average:"O(1)",worst:"O(n)",description:"Add key-value"},{name:"Search",average:"O(1)",worst:"O(n)",description:"Find by key"},{name:"Delete",average:"O(1)",worst:"O(n)",description:"Remove by key"},{name:"Rehash",average:"O(n)",worst:"O(n)",description:"Resize table"}],note:"Worst case O(n) when many collisions or poor hash function"},by={title:"Common Use Cases",items:["Dictionaries/Maps","Caching (memoization)","Database indexing","Symbol tables (compilers)","Counting frequencies"]},wy={insert:{label:"Insert Key-Value",keyPlaceholder:"Key",valuePlaceholder:"Value",buttonText:"Insert"},delete:{label:"Delete Key",placeholder:"Key",buttonText:"Delete"},search:{label:"Search Key",placeholder:"Key",buttonText:"Search"},clear:{buttonText:"Clear"},rehash:{buttonText:"Rehash"}},Sy={items:"Items",capacity:"Capacity",load:"Load",collisions:"Collisions"},Cy={emptyTable:"Hash table is empty. Insert some key-value pairs!",insertSuccess:'Inserted "{key}" at slot {index}',insertUpdated:'Updated "{key}" at slot {index}',insertCollision:"Collision at slot {original}! Probed to slot {index}",deleteSuccess:'Deleted "{key}"',searchFound:'Found: "{key}" = {value}',searchNotFound:'Key "{key}" not found',clearSuccess:"Hash table cleared!",rehashSuccess:"Rehashed! Capacity: {oldCapacity} → {newCapacity}",rehashEmpty:"Nothing to rehash - table is empty!",tableFull:"Table is full! Consider rehashing.",errorNoKey:"Please enter a key!",errorNoKeyValue:"Please enter both key and value!",errorInsert:"Error inserting. Is Flask running?",errorDelete:"Error deleting. Is Flask running?",errorSearch:"Error searching item",errorClear:"Error clearing hash table",errorRehash:"Error rehashing. Is Flask running?"},Ty=[{type:"color",className:"key-color",label:"Key"},{type:"color",className:"index-color",label:"Index"},{type:"color",className:"value-color",label:"Value"},{type:"color",className:"probe-color",label:"Probed Slot"},{type:"color",className:"collision-color",label:"Collision"}],Ey={concept:vy,properties:xy,collisionResolution:yy,comparison:jy,loadFactor:Ny,complexity:ky,useCases:by,operations:wy,infoLabels:Sy,messages:Cy,legend:Ty},Ly={title:"What is Quadratic Probing?",description:"Quadratic Probing is a collision resolution technique that uses a quadratic function to find the next available slot.",codeExample:"index = (hash(key) + i²) % capacity, where i = 0, 1, 2, 3...",analogy:"Like jumping farther each time - first 1 step, then 4, then 9, then 16!"},Py={title:"Quadratic Probing Properties",items:[{label:"Probe Sequence",value:"+1, +4, +9, +16, +25..."},{label:"Formula",value:"(hash + i²) % capacity"},{label:"Clustering",value:"Reduces primary clustering"},{label:"Load Factor",value:"Must stay below 0.5 for guarantee"}]},Oy={title:"Quadratic vs Linear Probing",quadratic:{label:"Quadratic:",color:"#f59e0b",points:["Jumps by squares: 1, 4, 9...","Less primary clustering","May miss empty slots"]},linear:{label:"Linear:",color:"#3b82f6",points:["Steps by 1 each time","Primary clustering issue","Always finds empty slot"]},summary:"Quadratic probing reduces clustering but requires load factor < 0.5 and prime table size for guaranteed insertion."},Ry={title:"Clustering Problem",primary:{name:"Primary Clustering",description:"Long runs of occupied slots form clusters",cause:"Linear probing - same probe sequence for nearby hashes",solution:"Use quadratic or double hashing"},secondary:{name:"Secondary Clustering",description:"Keys with same hash follow same probe sequence",cause:"Probe sequence depends only on initial hash",solution:"Use double hashing"}},Iy={title:"Load Factor Warning",description:"Quadratic probing may fail to find empty slots if load factor > 0.5",threshold:.5,warningMessage:"Warning: Load factor ({loadFactor}) > 0.5 - insertions may fail!",safeMessage:"Load factor: {loadFactor}"},_y={title:"Time Complexity",operations:[{name:"Insert",average:"O(1)",worst:"O(n)",description:"Add key-value"},{name:"Search",average:"O(1)",worst:"O(n)",description:"Find by key"},{name:"Delete",average:"O(1)",worst:"O(n)",description:"Remove by key"},{name:"Rehash",average:"O(n)",worst:"O(n)",description:"Resize table"}],note:"Requires prime table size and load factor < 0.5 for guaranteed O(1)"},zy={insert:{label:"Insert Key-Value",keyPlaceholder:"Key",valuePlaceholder:"Value",buttonText:"Insert"},delete:{label:"Delete Key",placeholder:"Key",buttonText:"Delete"},search:{label:"Search Key",placeholder:"Key",buttonText:"Search"},clear:{buttonText:"Clear"},rehash:{buttonText:"Rehash"}},My={items:"Items",capacity:"Capacity",load:"Load",collisions:"Collisions"},Ay={emptyTable:"Hash table is empty. Insert some key-value pairs!",insertSuccess:'Inserted "{key}" at slot {index}',insertUpdated:'Updated "{key}" at slot {index}',insertCollision:"Collision! Quadratic probed to slot {index} (i={probeCount})",deleteSuccess:'Deleted "{key}"',searchFound:'Found: "{key}" = {value}',searchNotFound:'Key "{key}" not found',clearSuccess:"Hash table cleared!",rehashSuccess:"Rehashed! Capacity: {oldCapacity} → {newCapacity}",rehashEmpty:"Nothing to rehash - table is empty!",tableFull:"Cannot insert - no empty slot found after full probe cycle!",errorNoKey:"Please enter a key!",errorNoKeyValue:"Please enter both key and value!",errorInsert:"Error inserting. Is Flask running?",errorDelete:"Error deleting. Is Flask running?",errorSearch:"Error searching item",errorClear:"Error clearing hash table",errorRehash:"Error rehashing. Is Flask running?"},Vy=[{type:"color",className:"key-color",label:"Key"},{type:"color",className:"index-color",label:"Index"},{type:"color",className:"value-color",label:"Value"},{type:"color",className:"probe-color",label:"Quadratic Probe"}],Fy={concept:Ly,properties:Py,comparison:Oy,clustering:Ry,loadFactor:Iy,complexity:_y,operations:zy,infoLabels:My,messages:Ay,legend:Vy},Dy={title:"What is a Binary Search Tree?",description:"A Binary Search Tree (BST) is a binary tree where each node follows the ordering property: all left descendants < node < all right descendants.",codeExample:`       [50]
      /    \\
   [30]    [70]
   /  \\    /  \\
 [20][40][60][80]

Left < Parent < Right`,analogy:"Like a dictionary - words are sorted alphabetically, so you can quickly find any word by comparing!"},$y={title:"BST Properties",items:[{label:"Ordering",value:"Left < Parent < Right"},{label:"Search",value:"O(log n) average"},{label:"Inorder",value:"Gives sorted sequence"},{label:"No Duplicates",value:"Typically unique keys"}]},By={insert:{label:"Insert Value",placeholder:"Value",buttonText:"Insert"},delete:{label:"Delete Value",placeholder:"Value",buttonText:"Delete"},search:{label:"Search Value",placeholder:"Value",buttonText:"Search"},traversals:{inorder:"Inorder (Sorted)",preorder:"Preorder",postorder:"Postorder",levelorder:"Level Order"},clear:{buttonText:"Clear"}},Hy={title:"BST Delete Cases",items:[{name:"Leaf Node",description:"Simply remove (no children)"},{name:"One Child",description:"Replace with child"},{name:"Two Children",description:"Replace with inorder successor (smallest in right subtree)"}]},qy={title:"Tree Traversals",items:[{name:"Inorder",order:"Left -> Root -> Right",use:"Returns SORTED order in BST"},{name:"Preorder",order:"Root -> Left -> Right",use:"Copy/serialize tree"},{name:"Postorder",order:"Left -> Right -> Root",use:"Delete tree safely"},{name:"Level Order",order:"Level by level (BFS)",use:"Print by levels"}]},Uy={title:"Time Complexity",operations:[{name:"Search",average:"O(log n)",worst:"O(n)",description:"Binary search principle"},{name:"Insert",average:"O(log n)",worst:"O(n)",description:"Find position + insert"},{name:"Delete",average:"O(log n)",worst:"O(n)",description:"Find + restructure"},{name:"Min/Max",average:"O(log n)",worst:"O(n)",description:"Leftmost/rightmost"}],note:"Worst case O(n) when tree is unbalanced (degenerates to linked list). Use AVL/Red-Black trees for guaranteed O(log n)."},Ky={title:"Common Use Cases",items:["Database indexing (B-trees)","Symbol tables in compilers","Priority queues","Auto-complete suggestions","Range queries (find all values between X and Y)"]},Wy={title:"BST vs Other Structures",items:[{vs:"Array",advantage:"O(log n) insert/delete vs O(n)"},{vs:"Hash Table",advantage:"Ordered data, range queries"},{vs:"Linked List",advantage:"O(log n) search vs O(n)"}]},Gy={size:"Nodes",height:"Height",root:"Root"},Qy={emptyTree:"BST is empty. Insert some values!",insertSuccess:"Inserted {value}",deleteSuccess:"Deleted {value}",deleteNotFound:"Value {value} not found",searchFound:"Found {value}",searchNotFound:"Value {value} not found",clearSuccess:"BST cleared!",traversalResult:"{type}: {result}",errorNoValue:"Please enter a value!",errorInsert:"Error inserting value",errorDelete:"Error deleting value",errorSearch:"Error searching value",errorClear:"Error clearing BST"},Yy=[{type:"color",className:"root-color",label:"Root"},{type:"color",className:"node-color",label:"Node"},{type:"color",className:"leaf-color",label:"Leaf"},{type:"color",className:"highlight-color",label:"Current/Found"}],Xy={concept:Dy,properties:$y,operations:By,deleteCases:Hy,traversals:qy,complexity:Uy,useCases:Ky,comparison:Wy,infoLabels:Gy,messages:Qy,legend:Yy},Jy={title:"What is an AVL Tree?",description:"An AVL Tree is a self-balancing Binary Search Tree where the height difference between left and right subtrees (balance factor) is at most 1 for every node.",codeExample:`       [50]  BF=0
      /    \\
   [30]    [70]  
  BF=0     BF=0
   /  \\      \\
 [20][40]   [80]

Balance Factor = Height(Left) - Height(Right)
BF must be -1, 0, or 1`,analogy:"Like a well-organized library that automatically reorganizes shelves whenever books are added or removed to ensure quick access!"},Zy={title:"AVL Properties",items:[{label:"Balance Factor",value:"-1, 0, or 1 for all nodes"},{label:"Height",value:"O(log n) guaranteed"},{label:"Self-Balancing",value:"Rotations on insert/delete"},{label:"BST Property",value:"Left < Parent < Right"}]},ej={insert:{label:"Insert Value",placeholder:"Value",buttonText:"Insert"},delete:{label:"Delete Value",placeholder:"Value",buttonText:"Delete"},search:{label:"Search Value",placeholder:"Value",buttonText:"Search"},traversals:{inorder:"Inorder (Sorted)",preorder:"Preorder",postorder:"Postorder",levelorder:"Level Order"},clear:{buttonText:"Clear"}},nj={title:"AVL Rotations",items:[{name:"Left-Left (LL)",description:"Right rotation",when:"BF > 1, Left child BF >= 0"},{name:"Right-Right (RR)",description:"Left rotation",when:"BF < -1, Right child BF <= 0"},{name:"Left-Right (LR)",description:"Left then Right rotation",when:"BF > 1, Left child BF < 0"},{name:"Right-Left (RL)",description:"Right then Left rotation",when:"BF < -1, Right child BF > 0"}]},tj={title:"Tree Traversals",items:[{name:"Inorder",order:"Left -> Root -> Right",use:"Returns SORTED order"},{name:"Preorder",order:"Root -> Left -> Right",use:"Copy/serialize tree"},{name:"Postorder",order:"Left -> Right -> Root",use:"Delete tree safely"},{name:"Level Order",order:"Level by level (BFS)",use:"Print by levels"}]},rj={title:"Time Complexity",operations:[{name:"Search",average:"O(log n)",worst:"O(log n)",description:"Height always balanced"},{name:"Insert",average:"O(log n)",worst:"O(log n)",description:"Insert + rebalance"},{name:"Delete",average:"O(log n)",worst:"O(log n)",description:"Delete + rebalance"},{name:"Rotation",average:"O(1)",worst:"O(1)",description:"Constant time fix"}],note:"Unlike regular BST, AVL guarantees O(log n) even in worst case because the tree is always balanced!"},sj={title:"Common Use Cases",items:["Database indexing with frequent lookups","In-memory databases","Dictionary implementations","When guaranteed O(log n) is critical","Real-time systems needing predictable performance"]},aj={title:"AVL vs Other Trees",items:[{vs:"BST",advantage:"Guaranteed O(log n) vs O(n) worst case"},{vs:"Red-Black",advantage:"More rigidly balanced (faster lookup)"},{vs:"B-Tree",advantage:"Better for in-memory operations"}]},ij={size:"Nodes",height:"Height",root:"Root"},lj={emptyTree:"AVL Tree is empty. Insert some values!",insertSuccess:"Inserted {value} (tree rebalanced)",deleteSuccess:"Deleted {value} (tree rebalanced)",deleteNotFound:"Value {value} not found",searchFound:"Found {value}",searchNotFound:"Value {value} not found",clearSuccess:"AVL Tree cleared!",traversalResult:"{type}: {result}",errorNoValue:"Please enter a value!",errorInsert:"Error inserting value",errorDelete:"Error deleting value",errorSearch:"Error searching value",errorClear:"Error clearing AVL Tree"},oj=[{type:"color",className:"root-color",label:"Root"},{type:"color",className:"balanced-color",label:"Balanced (|BF| <= 1)"},{type:"color",className:"leaf-color",label:"Leaf"},{type:"color",className:"highlight-color",label:"Current/Found"}],cj={concept:Jy,properties:Zy,operations:ej,rotations:nj,traversals:tj,complexity:rj,useCases:sj,comparison:aj,infoLabels:ij,messages:lj,legend:oj},dj={title:"What is a Splay Tree?",description:"A Splay Tree is a self-adjusting Binary Search Tree that moves frequently accessed elements closer to the root through rotations (splaying), providing amortized O(log n) performance.",codeExample:`After searching for 20:

Before:        After Splay:
   [50]           [20]
   /                  \\
 [30]                [50]
 /                   /
[20]  <-- found   [30]

Accessed node moves to root!`,analogy:"Like keeping frequently used items at the front of your desk - recently used elements stay easily accessible!"},uj={title:"Splay Tree Properties",items:[{label:"Self-Adjusting",value:"Accessed nodes move to root"},{label:"No Balance Info",value:"No height/color stored"},{label:"Amortized O(log n)",value:"Good average performance"},{label:"Cache Friendly",value:"Hot nodes stay near root"}]},hj={insert:{label:"Insert Value",placeholder:"Value",buttonText:"Insert"},delete:{label:"Delete Value",placeholder:"Value",buttonText:"Delete"},search:{label:"Search Value",placeholder:"Value",buttonText:"Search"},traversals:{inorder:"Inorder (Sorted)",preorder:"Preorder",postorder:"Postorder",levelorder:"Level Order"},clear:{buttonText:"Clear"}},pj={title:"Splay Operations",items:[{name:"Zig",description:"Single rotation when parent is root",when:"Parent is root"},{name:"Zig-Zig",description:"Both node and parent are left (or both right) children",when:"Same side grandchild"},{name:"Zig-Zag",description:"Node is left child, parent is right (or vice versa)",when:"Opposite side grandchild"}]},fj={title:"Tree Traversals",items:[{name:"Inorder",order:"Left -> Root -> Right",use:"Returns SORTED order"},{name:"Preorder",order:"Root -> Left -> Right",use:"Copy/serialize tree"},{name:"Postorder",order:"Left -> Right -> Root",use:"Delete tree safely"},{name:"Level Order",order:"Level by level (BFS)",use:"Print by levels"}]},mj={title:"Time Complexity",operations:[{name:"Search",average:"O(log n)*",worst:"O(n)",description:"Amortized logarithmic"},{name:"Insert",average:"O(log n)*",worst:"O(n)",description:"Amortized logarithmic"},{name:"Delete",average:"O(log n)*",worst:"O(n)",description:"Amortized logarithmic"},{name:"Splay",average:"O(log n)*",worst:"O(n)",description:"Brings node to root"}],note:"* Amortized - while single operations can be O(n), any sequence of m operations takes O(m log n) total time."},gj={title:"Common Use Cases",items:["Cache implementations (LRU-like behavior)","Garbage collectors","Network routers (IP lookup)","Situations with temporal locality","When same elements accessed repeatedly"]},vj={title:"Splay Tree vs Other Trees",items:[{vs:"AVL",advantage:"Simpler (no balance info), better for skewed access"},{vs:"Red-Black",advantage:"Self-optimizing for access patterns"},{vs:"BST",advantage:"Better amortized performance"}]},xj={size:"Nodes",height:"Height",root:"Root"},yj={emptyTree:"Splay Tree is empty. Insert some values!",insertSuccess:"Inserted {value} (now at root)",deleteSuccess:"Deleted {value}",deleteNotFound:"Value {value} not found",searchFound:"Found {value} (splayed to root)",searchNotFound:"Value {value} not found",clearSuccess:"Splay Tree cleared!",traversalResult:"{type}: {result}",errorNoValue:"Please enter a value!",errorInsert:"Error inserting value",errorDelete:"Error deleting value",errorSearch:"Error searching value",errorClear:"Error clearing Splay Tree"},jj=[{type:"color",className:"root-color",label:"Root (Most Recent)"},{type:"color",className:"node-color",label:"Node"},{type:"color",className:"leaf-color",label:"Leaf"},{type:"color",className:"highlight-color",label:"Current/Found"}],Nj={concept:dj,properties:uj,operations:hj,splayOperations:pj,traversals:fj,complexity:mj,useCases:gj,comparison:vj,infoLabels:xj,messages:yj,legend:jj},kj={title:"What is a Min Heap?",description:"A Min Heap is a complete binary tree where each parent node is smaller than or equal to its children. The minimum element is always at the root, making it perfect for priority queues.",codeExample:`       [1]  <- Min at root
      /    \\
    [3]    [2]
   /  \\    /
 [7]  [6][4]

Array: [1, 3, 2, 7, 6, 4]
Parent always <= Children`,analogy:"Like a tournament bracket where the winner (smallest) rises to the top - the champion is always at the root!"},bj={title:"Min Heap Properties",items:[{label:"Heap Property",value:"Parent <= Children"},{label:"Complete Tree",value:"Filled level by level"},{label:"Array Storage",value:"Parent(i)=(i-1)/2"},{label:"Min Access",value:"O(1) to get minimum"}]},wj={insert:{label:"Insert Value",placeholder:"Value",buttonText:"Insert"},extract:{label:"Extract Min",buttonText:"Extract Min"},peek:{label:"Peek Min",buttonText:"Peek"},build:{label:"Build from Array",placeholder:"e.g., 5,3,8,1,2",buttonText:"Build Heap"},clear:{buttonText:"Clear"}},Sj={title:"Heap Operations",items:[{name:"Insert",description:"Add at end, bubble up (heapify up)",complexity:"O(log n)"},{name:"Extract Min",description:"Remove root, replace with last, bubble down",complexity:"O(log n)"},{name:"Peek",description:"Return root without removing",complexity:"O(1)"},{name:"Build Heap",description:"Heapify from array (bottom-up)",complexity:"O(n)"}]},Cj={title:"Array Representation",items:[{formula:"Parent(i)",value:"(i - 1) / 2"},{formula:"Left Child(i)",value:"2*i + 1"},{formula:"Right Child(i)",value:"2*i + 2"}]},Tj={title:"Time Complexity",operations:[{name:"Insert",average:"O(log n)",worst:"O(log n)",description:"Bubble up to root"},{name:"Extract Min",average:"O(log n)",worst:"O(log n)",description:"Bubble down"},{name:"Peek/Get Min",average:"O(1)",worst:"O(1)",description:"Always at root"},{name:"Build Heap",average:"O(n)",worst:"O(n)",description:"Bottom-up heapify"}],note:"Space complexity is O(n). Complete tree structure ensures height is always O(log n)."},Ej={title:"Common Use Cases",items:["Priority Queues (process by priority)","Dijkstra's shortest path algorithm","Prim's minimum spanning tree","Huffman coding (compression)","Event-driven simulation","K smallest/largest elements"]},Lj={title:"Min Heap vs Other Structures",items:[{vs:"Sorted Array",advantage:"O(log n) insert vs O(n)"},{vs:"BST",advantage:"O(1) get min vs O(log n)"},{vs:"Max Heap",advantage:"Fast min access vs fast max"}]},Pj={size:"Size",height:"Height",min:"Min"},Oj={emptyHeap:"Min Heap is empty. Insert some values!",insertSuccess:"Inserted {value}",extractSuccess:"Extracted minimum: {value}",peekSuccess:"Minimum element is {value}",buildSuccess:"Built heap from array",clearSuccess:"Heap cleared!",errorNoValue:"Please enter a value!",errorEmpty:"Heap is empty!",errorFull:"Heap is full!",errorInsert:"Error inserting value",errorExtract:"Error extracting minimum"},Rj=[{type:"color",className:"root-color",label:"Root (Min)"},{type:"color",className:"node-color",label:"Internal Node"},{type:"color",className:"leaf-color",label:"Leaf"},{type:"color",className:"highlight-color",label:"Current/Swapping"}],Ij={concept:kj,properties:bj,operations:wj,heapOperations:Sj,arrayRepresentation:Cj,complexity:Tj,useCases:Ej,comparison:Lj,infoLabels:Pj,messages:Oj,legend:Rj},_j={title:"What is a Max Heap?",description:"A Max Heap is a complete binary tree where each parent node is greater than or equal to its children. The maximum element is always at the root, ideal for priority queues where largest = highest priority.",codeExample:`       [9]  <- Max at root
      /    \\
    [7]    [8]
   /  \\    /
 [3]  [5][6]

Array: [9, 7, 8, 3, 5, 6]
Parent always >= Children`,analogy:"Like a corporate hierarchy - the CEO (maximum) is at the top, and each manager has authority over their subordinates!"},zj={title:"Max Heap Properties",items:[{label:"Heap Property",value:"Parent >= Children"},{label:"Complete Tree",value:"Filled level by level"},{label:"Array Storage",value:"Parent(i)=(i-1)/2"},{label:"Max Access",value:"O(1) to get maximum"}]},Mj={insert:{label:"Insert Value",placeholder:"Value",buttonText:"Insert"},extract:{label:"Extract Max",buttonText:"Extract Max"},peek:{label:"Peek Max",buttonText:"Peek"},build:{label:"Build from Array",placeholder:"e.g., 5,3,8,1,2",buttonText:"Build Heap"},clear:{buttonText:"Clear"}},Aj={title:"Heap Operations",items:[{name:"Insert",description:"Add at end, bubble up (heapify up)",complexity:"O(log n)"},{name:"Extract Max",description:"Remove root, replace with last, bubble down",complexity:"O(log n)"},{name:"Peek",description:"Return root without removing",complexity:"O(1)"},{name:"Build Heap",description:"Heapify from array (bottom-up)",complexity:"O(n)"}]},Vj={title:"Array Representation",items:[{formula:"Parent(i)",value:"(i - 1) / 2"},{formula:"Left Child(i)",value:"2*i + 1"},{formula:"Right Child(i)",value:"2*i + 2"}]},Fj={title:"Time Complexity",operations:[{name:"Insert",average:"O(log n)",worst:"O(log n)",description:"Bubble up to root"},{name:"Extract Max",average:"O(log n)",worst:"O(log n)",description:"Bubble down"},{name:"Peek/Get Max",average:"O(1)",worst:"O(1)",description:"Always at root"},{name:"Build Heap",average:"O(n)",worst:"O(n)",description:"Bottom-up heapify"}],note:"Space complexity is O(n). Complete tree structure ensures height is always O(log n)."},Dj={title:"Common Use Cases",items:["Priority Queues (largest = highest priority)","Heap Sort algorithm","Job scheduling (highest priority first)","Finding K largest elements","Median maintenance (with min heap)","Stock trading (highest bid)"]},$j={title:"Max Heap vs Other Structures",items:[{vs:"Sorted Array",advantage:"O(log n) insert vs O(n)"},{vs:"BST",advantage:"O(1) get max vs O(log n)"},{vs:"Min Heap",advantage:"Fast max access vs fast min"}]},Bj={size:"Size",height:"Height",max:"Max"},Hj={emptyHeap:"Max Heap is empty. Insert some values!",insertSuccess:"Inserted {value}",extractSuccess:"Extracted maximum: {value}",peekSuccess:"Maximum element is {value}",buildSuccess:"Built heap from array",clearSuccess:"Heap cleared!",errorNoValue:"Please enter a value!",errorEmpty:"Heap is empty!",errorFull:"Heap is full!",errorInsert:"Error inserting value",errorExtract:"Error extracting maximum"},qj=[{type:"color",className:"root-color",label:"Root (Max)"},{type:"color",className:"node-color",label:"Internal Node"},{type:"color",className:"leaf-color",label:"Leaf"},{type:"color",className:"highlight-color",label:"Current/Swapping"}],Uj={concept:_j,properties:zj,operations:Mj,heapOperations:Aj,arrayRepresentation:Vj,complexity:Fj,useCases:Dj,comparison:$j,infoLabels:Bj,messages:Hj,legend:qj},Kj={stack:Fx,queue:Qx,linkedlist:ay,binarytree:gy,hashtable:Ey,hashtableChaining:X,hashtableQuadratic:Fy,bst:Xy,avl:cj,splay:Nj,minheap:Ij,maxheap:Uj};function ds({dataStructure:e}){const t=Kj[e];return t?n.jsxs("div",{className:"concepts-panel",children:[t.concept&&n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Oe,{className:"icon-sm"}),n.jsx("span",{children:t.concept.title})]}),n.jsxs("div",{className:"concept-content",children:[n.jsx("p",{children:t.concept.description}),t.concept.codeExample&&n.jsx("pre",{className:"concept-code-example",children:n.jsx("code",{children:t.concept.codeExample})}),t.concept.analogy&&n.jsxs("div",{className:"concept-analogy",children:[n.jsx(ve,{}),n.jsx("span",{children:t.concept.analogy})]})]})]}),t.properties&&n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Bn,{className:"icon-sm"}),n.jsx("span",{children:t.properties.title})]}),n.jsx("div",{className:"concept-content",children:n.jsx("div",{className:"properties-grid",children:t.properties.items.map((r,s)=>n.jsxs("div",{className:"property-item",children:[n.jsx("span",{className:"property-label",children:r.label}),n.jsx("span",{className:"property-value",children:r.value})]},s))})})]}),t.complexity&&n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Ig,{className:"icon-sm"}),n.jsx("span",{children:t.complexity.title})]}),n.jsxs("div",{className:"concept-content",children:[n.jsx("div",{className:"complexity-table",children:t.complexity.operations.map((r,s)=>n.jsxs("div",{className:"complexity-row",children:[n.jsx("span",{className:"complexity-name",children:r.name}),r.time&&n.jsx("code",{className:"complexity-time",children:r.time}),r.average&&n.jsxs(n.Fragment,{children:[n.jsx("code",{className:"complexity-avg",children:r.average}),r.worst&&n.jsx("code",{className:"complexity-worst",children:r.worst})]}),r.description&&n.jsx("span",{className:"complexity-desc",children:r.description})]},s))}),t.complexity.note&&n.jsx("p",{className:"complexity-note",children:t.complexity.note})]})]}),t.useCases&&n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(So,{className:"icon-sm"}),n.jsx("span",{children:t.useCases.title})]}),n.jsx("div",{className:"concept-content",children:n.jsx("ul",{className:"use-cases-list",children:t.useCases.items.map((r,s)=>n.jsxs("li",{children:[n.jsx(_e,{className:"icon-xs"}),n.jsx("span",{children:r})]},s))})})]}),t.traversals&&n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Bn,{className:"icon-sm"}),n.jsx("span",{children:t.traversals.title})]}),n.jsx("div",{className:"concept-content",children:n.jsx("div",{className:"traversals-list",children:t.traversals.items.map((r,s)=>n.jsxs("div",{className:"traversal-item",children:[n.jsx("span",{className:"traversal-name",children:r.name}),n.jsx("span",{className:"traversal-order",children:r.order}),n.jsx("span",{className:"traversal-use",children:r.use})]},s))})})]}),t.deleteCases&&n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Bn,{className:"icon-sm"}),n.jsx("span",{children:t.deleteCases.title})]}),n.jsx("div",{className:"concept-content",children:n.jsx("div",{className:"delete-cases-grid",children:t.deleteCases.items.map((r,s)=>n.jsxs("div",{className:"delete-case-item",children:[n.jsx("span",{className:"case-number",children:s+1}),n.jsxs("div",{children:[n.jsx("strong",{children:r.name}),n.jsx("p",{children:r.description})]})]},s))})})]}),t.comparison&&n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Bn,{className:"icon-sm"}),n.jsx("span",{children:t.comparison.title})]}),n.jsx("div",{className:"concept-content",children:n.jsx("div",{className:"comparison-list",children:t.comparison.items.map((r,s)=>n.jsxs("div",{className:"comparison-item",children:[n.jsxs("span",{className:"comparison-vs",children:["vs ",r.vs]}),n.jsx("span",{className:"comparison-advantage",children:r.advantage})]},s))})})]})]}):n.jsx("div",{className:"concepts-panel",children:n.jsx("p",{children:"Concepts not available for this data structure."})})}const $t=7,Wj={inorder:{name:"Inorder Traversal",order:"Left -> Root -> Right",description:"Returns elements in SORTED order for BST. This is the key property of BST!",useCase:["Get sorted elements","Validate BST","Range queries"],complexity:{time:"O(n)",space:"O(h)"}},preorder:{name:"Preorder Traversal",order:"Root -> Left -> Right",description:"Process root first. Useful for copying/serializing the BST structure.",useCase:["Copy tree structure","Serialize BST","Prefix expressions"],complexity:{time:"O(n)",space:"O(h)"}},postorder:{name:"Postorder Traversal",order:"Left -> Right -> Root",description:"Process children before root. Essential for safely deleting the tree.",useCase:["Delete tree safely","Calculate subtree sizes","Postfix expressions"],complexity:{time:"O(n)",space:"O(h)"}},levelorder:{name:"Level Order Traversal",order:"Level by Level (BFS)",description:"Visit nodes level by level using a queue. Shows tree structure clearly.",useCase:["Level-wise printing","Find width","Serialize for reconstruction"],complexity:{time:"O(n)",space:"O(w)"}}},Nl=(e,t=0)=>e?Math.max(Nl(e.left,t+1),Nl(e.right,t+1)):t-1,Gj=(e,t)=>{const r=[];let s=e;for(;s&&(r.push(s.value),s.value!==t);)t<s.value?s=s.left:s=s.right;return r};function Qj({insertValue:e,deleteValue:t,searchValue:r,size:s,height:a,message:i,tree:l,isAnimating:o,visitedNodes:c,searchPath:h,searchResult:d,onInsertValueChange:p,onDeleteValueChange:m,onSearchValueChange:S,onInsert:w,onDelete:N,onSearch:x,onTraversal:f,onClear:g,onResetTraversal:v}){const P=(k,V)=>{const T=k.target.value;(T===""||T==="-"||/^-?\d*\.?\d*$/.test(T))&&V(T)};return n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Binary Search Tree"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"insertValue",children:"Insert Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"insertValue",value:e,onChange:k=>P(k,p),onKeyDown:k=>k.key==="Enter"&&w(),placeholder:"Enter a number",disabled:o}),n.jsx("button",{onClick:w,className:"btn btn-insert",disabled:o,children:"Insert"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"searchValue",children:"Search Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"searchValue",value:r,onChange:k=>P(k,S),onKeyDown:k=>k.key==="Enter"&&x(),placeholder:"Enter a number",disabled:o}),n.jsxs("button",{onClick:x,className:"btn btn-search",disabled:o||!l,children:[n.jsx(cs,{size:16})," Search"]})]}),h.length>0&&n.jsxs("div",{className:"search-path-display",children:[n.jsx("span",{className:"search-path-label",children:"Path:"}),n.jsx("div",{className:"search-path-nodes",children:h.map((k,V)=>n.jsxs(Je.Fragment,{children:[n.jsx("span",{className:`search-path-node ${V===h.length-1?d?"found":"not-found":""}`,children:k}),V<h.length-1&&n.jsx(re,{size:14,className:"search-path-arrow"})]},V))})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"deleteValue",children:"Delete Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"deleteValue",value:t,onChange:k=>P(k,m),onKeyDown:k=>k.key==="Enter"&&N(),placeholder:"Enter a number",disabled:o}),n.jsx("button",{onClick:N,className:"btn btn-delete",disabled:o,children:"Delete"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Traversals"}),n.jsx("div",{className:"btn-group",children:["inorder","preorder","postorder","levelorder"].map(k=>n.jsxs("button",{onClick:()=>f(k),className:`btn btn-traversal ${k==="inorder"?"btn-traversal-primary":""}`,disabled:o||!l,title:k==="inorder"?"Returns sorted order!":"",children:[k==="levelorder"?"Level Order":k.charAt(0).toUpperCase()+k.slice(1),k==="inorder"&&n.jsx("span",{className:"sorted-badge",children:"Sorted!"})]},k))}),c.length>0&&!o&&n.jsx("button",{onClick:v,className:"btn btn-secondary",style:{marginTop:"0.5rem",width:"100%"},children:"Reset Colors"})]}),n.jsxs("div",{className:"traversal-legend",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--default"}),n.jsx("span",{children:"Not visited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--visiting"}),n.jsx("span",{children:"Current"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--visited"}),n.jsx("span",{children:"Visited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--search"}),n.jsx("span",{children:"Search path"})]})]}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Nodes:"}),n.jsx("span",{className:"info-value",children:s})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Height:"}),n.jsx("span",{className:"info-value",children:a})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Max:"}),n.jsx("span",{className:"info-value",children:$t})]})]}),s>=$t*.8&&s<$t&&n.jsxs("div",{className:"warning-box",children:[n.jsx(On,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Tree filling up!"})," ",s,"/",$t," nodes."]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:g,className:"btn btn-clear",disabled:o,children:"Clear Tree"})}),i&&n.jsx("div",{className:`message message-${i.includes("Error")||i.includes("error")||i.includes("not found")?"error":/success|complete|Inserted|Deleted|cleared|Found/i.test(i)?"success":i.includes("full")?"warning":"info"}`,children:i})]})}function Yj({tree:e,currentNode:t,visitedNodes:r,searchPath:s,searchResult:a}){const i=d=>{const p=t===d,m=r.includes(d),S=s.includes(d),w=s.length>0&&s[s.length-1]===d;let N="#6366f1",x="none";return p?(N="#f59e0b",x="drop-shadow(0 0 12px #f59e0b) drop-shadow(0 0 20px #f59e0b)"):w?(N=a?"#10b981":"#ef4444",x=a?"drop-shadow(0 0 12px #10b981)":"drop-shadow(0 0 12px #ef4444)"):S?(N="#3b82f6",x="drop-shadow(0 0 8px #3b82f6)"):m&&(N="#10b981",x="drop-shadow(0 0 6px #10b981)"),{color:N,glow:x,radius:p||w?30:25,stroke:p||w?3:2,fontSize:p||w?16:14,fontWeight:p||w?"bold":"normal"}},l=(d,p,m,S,w)=>{if(!d)return[];const N=Math.pow(2,w-S)*50,x=i(d.value),f=[];if(d.left){const g=s.includes(d.value)&&s.includes(d.left.value);f.push(n.jsx("line",{x1:p,y1:m,x2:p-N,y2:m+100,stroke:g?"#3b82f6":"rgba(255,255,255,0.3)",strokeWidth:g?3:2},`l-${d.value}-l`)),f.push(...l(d.left,p-N,m+100,S+1,w))}if(d.right){const g=s.includes(d.value)&&s.includes(d.right.value);f.push(n.jsx("line",{x1:p,y1:m,x2:p+N,y2:m+100,stroke:g?"#3b82f6":"rgba(255,255,255,0.3)",strokeWidth:g?3:2},`l-${d.value}-r`)),f.push(...l(d.right,p+N,m+100,S+1,w))}return f.push(n.jsxs("g",{style:{filter:x.glow,transition:"all 0.3s ease"},children:[n.jsx("circle",{cx:p,cy:m,r:x.radius,fill:x.color,stroke:"white",strokeWidth:x.stroke,style:{transition:"all 0.3s ease"}}),n.jsx("text",{x:p,y:m,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:x.fontSize,fontWeight:x.fontWeight,children:d.value})]},`n-${d.value}-${p}`)),f};if(!e)return n.jsxs("div",{className:"tree-empty",children:[n.jsx("p",{children:"BST is empty. Insert some values!"}),n.jsx("p",{className:"tree-empty-hint",children:"Try: 50, 30, 70, 20, 40, 60, 80"})]});const o=Nl(e),c=(o+1)*100+50,h=Math.max(800,Math.pow(2,Math.max(o,1))*80);return n.jsx("svg",{width:h,height:c,className:"tree-svg",children:l(e,h/2,50,0,o)})}function Xj({traversalType:e,traversalResult:t,isAnimating:r,traversalComplete:s}){if(!e||t.length===0&&!r)return null;const a=Wj[e];return n.jsxs("div",{className:"traversal-output-panel",children:[n.jsxs("div",{style:{marginBottom:"1rem"},children:[n.jsxs("h3",{className:"traversal-title",children:[a==null?void 0:a.name,e==="inorder"&&n.jsx("span",{className:"sorted-indicator",children:"Returns Sorted Order!"}),r&&n.jsx("span",{className:"traversal-badge traversal-badge--running",children:"Running..."}),s&&n.jsx("span",{className:"traversal-badge traversal-badge--complete",children:"Complete"})]}),n.jsxs("p",{className:"traversal-order",children:[n.jsx("strong",{children:"Order:"})," ",a==null?void 0:a.order]}),n.jsx("p",{className:"traversal-description",children:a==null?void 0:a.description})]}),n.jsxs("div",{className:"traversal-output-box",children:[n.jsx("div",{className:"traversal-output-label",children:"Output Sequence:"}),n.jsx("div",{className:"traversal-sequence-container",children:t.length===0&&r?n.jsx("span",{style:{color:"var(--text-muted)",fontStyle:"italic"},children:"Traversing..."}):t.map((i,l)=>n.jsx("span",{className:`traversal-node ${l===t.length-1&&!s?"traversal-node--current":"traversal-node--complete"}`,children:i},l))})]}),s&&t.length>0&&n.jsxs("div",{className:"traversal-array-section",children:[n.jsx("div",{className:"traversal-array-label",children:"Array Output:"}),n.jsxs("code",{className:"traversal-array-output",children:["[",t.join(", "),"]"]}),e==="inorder"&&n.jsx("p",{className:"traversal-sorted-note",children:"Notice: The output is sorted! This is the BST property."}),n.jsxs("p",{className:"traversal-use-case",children:["Use case: ",a==null?void 0:a.useCase.join(" | ")]}),n.jsxs("div",{className:"traversal-complexity",children:[n.jsx("strong",{children:"Time:"})," ",n.jsx("code",{className:"complexity-value",children:a==null?void 0:a.complexity.time}),n.jsx("br",{}),n.jsx("strong",{children:"Space:"})," ",n.jsx("code",{className:"complexity-value",children:a==null?void 0:a.complexity.space})]})]})]})}function Jj(){const[e,t]=u.useState(null),[r,s]=u.useState(0),[a,i]=u.useState(-1),[l,o]=u.useState(""),[c,h]=u.useState(""),[d,p]=u.useState(""),[m,S]=u.useState(""),[w,N]=u.useState([]),[x,f]=u.useState(null),[g,v]=u.useState([]),[P,k]=u.useState(!1),[V,T]=u.useState(null),[D,F]=u.useState([]),[I,H]=u.useState(null),[K,$]=u.useState(!1);u.useEffect(()=>{q()},[]);const q=async()=>{try{const R=await(await fetch("/api/bst")).json();t(R.tree),s(R.size||0),i(R.height!==void 0?R.height:-1)}catch(L){console.error("Error loading BST:",L)}},b=L=>{S(L),setTimeout(()=>S(""),3e3)},z=()=>{N([]),f(null)},M=async()=>{if(!l.trim()){b("Please enter a number!");return}const L=Number(l);if(isNaN(L)){b("Please enter a valid number!");return}if(r>=$t){b(`Tree is full! Maximum size is ${$t} nodes.`);return}z(),A();try{const _=await(await fetch("/api/bst/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:L})})).json();if(_.error){b(_.error);return}t(_.tree),s(_.size||0),i(_.height!==void 0?_.height:-1),b(`Inserted ${L}`),o("")}catch{b("Error inserting node")}},C=async()=>{if(!c.trim()){b("Please enter a number!");return}const L=Number(c);if(isNaN(L)){b("Please enter a valid number!");return}z(),A();try{const _=await(await fetch("/api/bst/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:L})})).json();if(_.error){b(_.error);return}t(_.tree),s(_.size||0),i(_.height!==void 0?_.height:-1),b(`Deleted ${L}`),h("")}catch{b("Error deleting node")}},E=async()=>{if(!d.trim()){b("Please enter a number!");return}const L=Number(d);if(isNaN(L)){b("Please enter a valid number!");return}if(!e){b("Tree is empty!");return}A(),k(!0);const R=Gj(e,L);for(let _=0;_<R.length;_++)N(R.slice(0,_+1)),await new Promise(j=>setTimeout(j,500));try{const j=await(await fetch(`/api/bst/search?value=${L}`)).json();f(j.found),j.found?b(`Found ${L}!`):b(`${L} not found in BST`)}catch{b("Error searching")}k(!1),p("")},y=async()=>{try{await fetch("/api/bst/clear",{method:"POST"}),t(null),s(0),i(-1),A(),z(),b("BST cleared!")}catch{b("Error clearing tree")}},O=async L=>{if(!e){b("Tree is empty! Insert some nodes first.");return}z(),k(!0),v([]),T(null),F([]),H(L),$(!1);try{const j=(await(await fetch(`/api/bst/${L}`)).json()).traversal||[];if(j.length===0){b("Tree is empty!"),k(!1);return}for(let Q=0;Q<j.length;Q++)T(j[Q]),await new Promise(Y=>setTimeout(Y,600)),F(Y=>[...Y,j[Q]]),v(Y=>[...Y,j[Q]]),await new Promise(Y=>setTimeout(Y,200));T(null),$(!0),k(!1);const B=L.charAt(0).toUpperCase()+L.slice(1);b(`${B} traversal complete!${L==="inorder"?" (Sorted!)":""}`)}catch(R){console.error("Traversal error:",R),b("Error performing traversal"),k(!1)}},A=()=>{v([]),T(null),F([]),H(null),$(!1)};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsx("div",{className:"intro-left",children:n.jsx(ds,{dataStructure:"bst"})}),n.jsx(xe,{context:"Binary Search Tree (BST) data structure, search, insert, delete operations, and traversals"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsx(Qj,{insertValue:l,deleteValue:c,searchValue:d,size:r,height:a,message:m,tree:e,isAnimating:P,visitedNodes:D,searchPath:w,searchResult:x,onInsertValueChange:o,onDeleteValueChange:h,onSearchValueChange:p,onInsert:M,onDelete:C,onSearch:E,onTraversal:O,onClear:y,onResetTraversal:()=>{A(),z()}}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"BST Visualization"}),n.jsxs("p",{className:"bst-property-reminder",children:["Remember: ",n.jsxs("code",{children:["Left ","<"," Parent ","<"," Right"]})]}),n.jsx("div",{className:"tree-container",children:n.jsx(Yj,{tree:e,currentNode:V,visitedNodes:D,searchPath:w,searchResult:x})}),n.jsx(Xj,{traversalType:I,traversalResult:g,isAnimating:P,traversalComplete:K})]})]}),n.jsx(ye,{dataStructure:"bst"})]})}const Bt=7,Zj={inorder:{name:"Inorder Traversal",order:"Left -> Root -> Right",description:"Returns elements in SORTED order.",useCase:["Get sorted elements","Validate BST property"],complexity:{time:"O(n)",space:"O(h)"}},preorder:{name:"Preorder Traversal",order:"Root -> Left -> Right",description:"Process root first. Useful for copying tree structure.",useCase:["Copy tree structure","Serialize AVL"],complexity:{time:"O(n)",space:"O(h)"}},postorder:{name:"Postorder Traversal",order:"Left -> Right -> Root",description:"Process children before root.",useCase:["Delete tree safely","Calculate subtree info"],complexity:{time:"O(n)",space:"O(h)"}},levelorder:{name:"Level Order Traversal",order:"Level by Level (BFS)",description:"Visit nodes level by level using a queue.",useCase:["Level-wise printing","Find width"],complexity:{time:"O(n)",space:"O(w)"}}},kl=(e,t=0)=>e?Math.max(kl(e.left,t+1),kl(e.right,t+1)):t-1,e0=(e,t)=>{const r=[];let s=e;for(;s&&(r.push(s.value),s.value!==t);)t<s.value?s=s.left:s=s.right;return r};function n0({insertValue:e,deleteValue:t,searchValue:r,size:s,height:a,message:i,tree:l,isAnimating:o,visitedNodes:c,searchPath:h,searchResult:d,onInsertValueChange:p,onDeleteValueChange:m,onSearchValueChange:S,onInsert:w,onDelete:N,onSearch:x,onTraversal:f,onClear:g,onResetTraversal:v}){const P=(k,V)=>{const T=k.target.value;(T===""||T==="-"||/^-?\d*\.?\d*$/.test(T))&&V(T)};return n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"AVL Tree"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"insertValue",children:"Insert Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"insertValue",value:e,onChange:k=>P(k,p),onKeyDown:k=>k.key==="Enter"&&w(),placeholder:"Enter a number",disabled:o}),n.jsx("button",{onClick:w,className:"btn btn-insert",disabled:o,children:"Insert"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"searchValue",children:"Search Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"searchValue",value:r,onChange:k=>P(k,S),onKeyDown:k=>k.key==="Enter"&&x(),placeholder:"Enter a number",disabled:o}),n.jsxs("button",{onClick:x,className:"btn btn-search",disabled:o||!l,children:[n.jsx(cs,{size:16})," Search"]})]}),h.length>0&&n.jsxs("div",{className:"search-path-display",children:[n.jsx("span",{className:"search-path-label",children:"Path:"}),n.jsx("div",{className:"search-path-nodes",children:h.map((k,V)=>n.jsxs(Je.Fragment,{children:[n.jsx("span",{className:`search-path-node ${V===h.length-1?d?"found":"not-found":""}`,children:k}),V<h.length-1&&n.jsx(re,{size:14,className:"search-path-arrow"})]},V))})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"deleteValue",children:"Delete Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"deleteValue",value:t,onChange:k=>P(k,m),onKeyDown:k=>k.key==="Enter"&&N(),placeholder:"Enter a number",disabled:o}),n.jsx("button",{onClick:N,className:"btn btn-delete",disabled:o,children:"Delete"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Traversals"}),n.jsx("div",{className:"btn-group",children:["inorder","preorder","postorder","levelorder"].map(k=>n.jsx("button",{onClick:()=>f(k),className:"btn btn-traversal",disabled:o||!l,children:k==="levelorder"?"Level Order":k.charAt(0).toUpperCase()+k.slice(1)},k))}),c.length>0&&!o&&n.jsx("button",{onClick:v,className:"btn btn-secondary",style:{marginTop:"0.5rem",width:"100%"},children:"Reset Colors"})]}),n.jsxs("div",{className:"traversal-legend",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--default"}),n.jsx("span",{children:"Not visited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--visiting"}),n.jsx("span",{children:"Current"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--visited"}),n.jsx("span",{children:"Visited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--search"}),n.jsx("span",{children:"Search path"})]})]}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Nodes:"}),n.jsx("span",{className:"info-value",children:s})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Height:"}),n.jsx("span",{className:"info-value",children:a})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Max:"}),n.jsx("span",{className:"info-value",children:Bt})]})]}),s>=Bt*.8&&s<Bt&&n.jsxs("div",{className:"warning-box",children:[n.jsx(On,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Tree filling up!"})," ",s,"/",Bt," nodes."]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:g,className:"btn btn-clear",disabled:o,children:"Clear Tree"})}),i&&n.jsx("div",{className:`message message-${i.includes("Error")||i.includes("error")||i.includes("not found")?"error":/success|complete|Inserted|Deleted|cleared|Found|rebalanced/i.test(i)?"success":i.includes("full")?"warning":"info"}`,children:i})]})}function t0({tree:e,currentNode:t,visitedNodes:r,searchPath:s,searchResult:a}){const i=d=>{const p=t===d,m=r.includes(d),S=s.includes(d),w=s.length>0&&s[s.length-1]===d;let N="#8b5cf6",x="none";return p?(N="#f59e0b",x="drop-shadow(0 0 12px #f59e0b) drop-shadow(0 0 20px #f59e0b)"):w?(N=a?"#10b981":"#ef4444",x=a?"drop-shadow(0 0 12px #10b981)":"drop-shadow(0 0 12px #ef4444)"):S?(N="#3b82f6",x="drop-shadow(0 0 8px #3b82f6)"):m&&(N="#10b981",x="drop-shadow(0 0 6px #10b981)"),{color:N,glow:x,radius:p||w?30:25,stroke:p||w?3:2,fontSize:p||w?16:14,fontWeight:p||w?"bold":"normal"}},l=(d,p,m,S,w)=>{if(!d)return[];const N=Math.pow(2,w-S)*50,x=i(d.value),f=[];if(d.left){const g=s.includes(d.value)&&s.includes(d.left.value);f.push(n.jsx("line",{x1:p,y1:m,x2:p-N,y2:m+100,stroke:g?"#3b82f6":"rgba(255,255,255,0.3)",strokeWidth:g?3:2},`l-${d.value}-l`)),f.push(...l(d.left,p-N,m+100,S+1,w))}if(d.right){const g=s.includes(d.value)&&s.includes(d.right.value);f.push(n.jsx("line",{x1:p,y1:m,x2:p+N,y2:m+100,stroke:g?"#3b82f6":"rgba(255,255,255,0.3)",strokeWidth:g?3:2},`l-${d.value}-r`)),f.push(...l(d.right,p+N,m+100,S+1,w))}return f.push(n.jsxs("g",{style:{filter:x.glow,transition:"all 0.3s ease"},children:[n.jsx("circle",{cx:p,cy:m,r:x.radius,fill:x.color,stroke:"white",strokeWidth:x.stroke,style:{transition:"all 0.3s ease"}}),n.jsx("text",{x:p,y:m,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:x.fontSize,fontWeight:x.fontWeight,children:d.value}),d.balance!==void 0&&n.jsxs("g",{children:[n.jsx("circle",{cx:p+20,cy:m-20,r:10,fill:Math.abs(d.balance)<=1?"#10b981":"#ef4444"}),n.jsx("text",{x:p+20,y:m-20,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:10,fontWeight:"bold",children:d.balance})]})]},`n-${d.value}-${p}`)),f};if(!e)return n.jsxs("div",{className:"tree-empty",children:[n.jsx("p",{children:"AVL Tree is empty. Insert some values!"}),n.jsx("p",{className:"tree-empty-hint",children:"Try: 30, 20, 40, 10 (watch it balance!)"})]});const o=kl(e),c=(o+1)*100+50,h=Math.max(800,Math.pow(2,Math.max(o,1))*80);return n.jsx("svg",{width:h,height:c,className:"tree-svg",children:l(e,h/2,50,0,o)})}function r0({traversalType:e,traversalResult:t,isAnimating:r,traversalComplete:s}){if(!e||t.length===0&&!r)return null;const a=Zj[e];return n.jsxs("div",{className:"traversal-output-panel",children:[n.jsxs("div",{style:{marginBottom:"1rem"},children:[n.jsxs("h3",{className:"traversal-title",children:[a==null?void 0:a.name,r&&n.jsx("span",{className:"traversal-badge traversal-badge--running",children:"Running..."}),s&&n.jsx("span",{className:"traversal-badge traversal-badge--complete",children:"Complete"})]}),n.jsxs("p",{className:"traversal-order",children:[n.jsx("strong",{children:"Order:"})," ",a==null?void 0:a.order]}),n.jsx("p",{className:"traversal-description",children:a==null?void 0:a.description})]}),n.jsxs("div",{className:"traversal-output-box",children:[n.jsx("div",{className:"traversal-output-label",children:"Output Sequence:"}),n.jsx("div",{className:"traversal-sequence-container",children:t.length===0&&r?n.jsx("span",{style:{color:"var(--text-muted)",fontStyle:"italic"},children:"Traversing..."}):t.map((i,l)=>n.jsx("span",{className:`traversal-node ${l===t.length-1&&!s?"traversal-node--current":"traversal-node--complete"}`,children:i},l))})]}),s&&t.length>0&&n.jsxs("div",{className:"traversal-array-section",children:[n.jsx("div",{className:"traversal-array-label",children:"Array Output:"}),n.jsxs("code",{className:"traversal-array-output",children:["[",t.join(", "),"]"]}),n.jsxs("p",{className:"traversal-use-case",children:["Use case: ",a==null?void 0:a.useCase.join(" | ")]}),n.jsxs("div",{className:"traversal-complexity",children:[n.jsx("strong",{children:"Time:"})," ",n.jsx("code",{className:"complexity-value",children:a==null?void 0:a.complexity.time}),n.jsx("br",{}),n.jsx("strong",{children:"Space:"})," ",n.jsx("code",{className:"complexity-value",children:a==null?void 0:a.complexity.space})]})]})]})}function s0(){const[e,t]=u.useState(null),[r,s]=u.useState(0),[a,i]=u.useState(-1),[l,o]=u.useState(""),[c,h]=u.useState(""),[d,p]=u.useState(""),[m,S]=u.useState(""),[w,N]=u.useState([]),[x,f]=u.useState(null),[g,v]=u.useState([]),[P,k]=u.useState(!1),[V,T]=u.useState(null),[D,F]=u.useState([]),[I,H]=u.useState(null),[K,$]=u.useState(!1);u.useEffect(()=>{q()},[]);const q=async()=>{try{const R=await(await fetch("/api/avl")).json();t(R.tree),s(R.size||0),i(R.height!==void 0?R.height:-1)}catch(L){console.error("Error loading AVL:",L)}},b=L=>{S(L),setTimeout(()=>S(""),3e3)},z=()=>{N([]),f(null)},M=async()=>{if(!l.trim()){b("Please enter a number!");return}const L=Number(l);if(isNaN(L)){b("Please enter a valid number!");return}if(r>=Bt){b(`Tree is full! Maximum size is ${Bt} nodes.`);return}z(),A();try{const _=await(await fetch("/api/avl/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:L})})).json();if(_.error){b(_.error);return}t(_.tree),s(_.size||0),i(_.height!==void 0?_.height:-1),b(`Inserted ${L} (tree rebalanced)`),o("")}catch{b("Error inserting node")}},C=async()=>{if(!c.trim()){b("Please enter a number!");return}const L=Number(c);if(isNaN(L)){b("Please enter a valid number!");return}z(),A();try{const _=await(await fetch("/api/avl/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:L})})).json();if(_.error){b(_.error);return}t(_.tree),s(_.size||0),i(_.height!==void 0?_.height:-1),b(`Deleted ${L} (tree rebalanced)`),h("")}catch{b("Error deleting node")}},E=async()=>{if(!d.trim()){b("Please enter a number!");return}const L=Number(d);if(isNaN(L)){b("Please enter a valid number!");return}if(!e){b("Tree is empty!");return}A(),k(!0);const R=e0(e,L);for(let _=0;_<R.length;_++)N(R.slice(0,_+1)),await new Promise(j=>setTimeout(j,500));try{const j=await(await fetch(`/api/avl/search?value=${L}`)).json();f(j.found),j.found?b(`Found ${L}!`):b(`${L} not found in AVL Tree`)}catch{b("Error searching")}k(!1),p("")},y=async()=>{try{await fetch("/api/avl/clear",{method:"POST"}),t(null),s(0),i(-1),A(),z(),b("AVL Tree cleared!")}catch{b("Error clearing tree")}},O=async L=>{if(!e){b("Tree is empty! Insert some nodes first.");return}z(),k(!0),v([]),T(null),F([]),H(L),$(!1);try{const j=(await(await fetch(`/api/avl/${L}`)).json()).traversal||[];if(j.length===0){b("Tree is empty!"),k(!1);return}for(let Q=0;Q<j.length;Q++)T(j[Q]),await new Promise(Y=>setTimeout(Y,600)),F(Y=>[...Y,j[Q]]),v(Y=>[...Y,j[Q]]),await new Promise(Y=>setTimeout(Y,200));T(null),$(!0),k(!1);const B=L.charAt(0).toUpperCase()+L.slice(1);b(`${B} traversal complete!`)}catch(R){console.error("Traversal error:",R),b("Error performing traversal"),k(!1)}},A=()=>{v([]),T(null),F([]),H(null),$(!1)};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsx("div",{className:"intro-left",children:n.jsx(ds,{dataStructure:"avl"})}),n.jsx(xe,{context:"AVL Tree data structure, self-balancing BST, rotations, balance factors, and O(log n) guaranteed operations"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsx(n0,{insertValue:l,deleteValue:c,searchValue:d,size:r,height:a,message:m,tree:e,isAnimating:P,visitedNodes:D,searchPath:w,searchResult:x,onInsertValueChange:o,onDeleteValueChange:h,onSearchValueChange:p,onInsert:M,onDelete:C,onSearch:E,onTraversal:O,onClear:y,onResetTraversal:()=>{A(),z()}}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"AVL Tree Visualization"}),n.jsxs("p",{className:"bst-property-reminder",children:["Self-balancing: ",n.jsx("code",{children:"|Balance Factor| <= 1"})," for all nodes"]}),n.jsx("div",{className:"tree-container",children:n.jsx(t0,{tree:e,currentNode:V,visitedNodes:D,searchPath:w,searchResult:x})}),n.jsx(r0,{traversalType:I,traversalResult:g,isAnimating:P,traversalComplete:K})]})]}),n.jsx(ye,{dataStructure:"avl"})]})}const Ht=7,a0={inorder:{name:"Inorder Traversal",order:"Left -> Root -> Right",description:"Returns elements in SORTED order.",useCase:["Get sorted elements","Validate BST property"],complexity:{time:"O(n)",space:"O(h)"}},preorder:{name:"Preorder Traversal",order:"Root -> Left -> Right",description:"Process root first. Root shows most recently accessed!",useCase:["See access pattern","Serialize structure"],complexity:{time:"O(n)",space:"O(h)"}},postorder:{name:"Postorder Traversal",order:"Left -> Right -> Root",description:"Process children before root.",useCase:["Delete tree safely","Calculate subtree info"],complexity:{time:"O(n)",space:"O(h)"}},levelorder:{name:"Level Order Traversal",order:"Level by Level (BFS)",description:"Visit nodes level by level.",useCase:["Level-wise printing","Find width"],complexity:{time:"O(n)",space:"O(w)"}}},bl=(e,t=0)=>e?Math.max(bl(e.left,t+1),bl(e.right,t+1)):t-1;function i0({insertValue:e,deleteValue:t,searchValue:r,size:s,height:a,message:i,tree:l,isAnimating:o,visitedNodes:c,lastSplayedValue:h,onInsertValueChange:d,onDeleteValueChange:p,onSearchValueChange:m,onInsert:S,onDelete:w,onSearch:N,onTraversal:x,onClear:f,onResetTraversal:g}){const v=(P,k)=>{const V=P.target.value;(V===""||V==="-"||/^-?\d*\.?\d*$/.test(V))&&k(V)};return n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Splay Tree"}),n.jsxs("div",{className:"splay-info-box",children:[n.jsx("strong",{children:"Key Feature:"})," Accessed nodes move to root!"]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"insertValue",children:"Insert Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"insertValue",value:e,onChange:P=>v(P,d),onKeyDown:P=>P.key==="Enter"&&S(),placeholder:"Enter a number",disabled:o}),n.jsx("button",{onClick:S,className:"btn btn-insert",disabled:o,children:"Insert"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"searchValue",children:"Search Value (Splays to Root!)"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"searchValue",value:r,onChange:P=>v(P,m),onKeyDown:P=>P.key==="Enter"&&N(),placeholder:"Enter a number",disabled:o}),n.jsxs("button",{onClick:N,className:"btn btn-search",disabled:o||!l,children:[n.jsx(cs,{size:16})," Search"]})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"deleteValue",children:"Delete Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"deleteValue",value:t,onChange:P=>v(P,p),onKeyDown:P=>P.key==="Enter"&&w(),placeholder:"Enter a number",disabled:o}),n.jsx("button",{onClick:w,className:"btn btn-delete",disabled:o,children:"Delete"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Traversals"}),n.jsx("div",{className:"btn-group",children:["inorder","preorder","postorder","levelorder"].map(P=>n.jsx("button",{onClick:()=>x(P),className:"btn btn-traversal",disabled:o||!l,children:P==="levelorder"?"Level Order":P.charAt(0).toUpperCase()+P.slice(1)},P))}),c.length>0&&!o&&n.jsx("button",{onClick:g,className:"btn btn-secondary",style:{marginTop:"0.5rem",width:"100%"},children:"Reset Colors"})]}),n.jsxs("div",{className:"traversal-legend",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--default"}),n.jsx("span",{children:"Not visited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--visiting"}),n.jsx("span",{children:"Current"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--visited"}),n.jsx("span",{children:"Visited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot",style:{background:"#ec4899"}}),n.jsx("span",{children:"Root (Splayed)"})]})]}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Nodes:"}),n.jsx("span",{className:"info-value",children:s})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Height:"}),n.jsx("span",{className:"info-value",children:a})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Max:"}),n.jsx("span",{className:"info-value",children:Ht})]})]}),h!==null&&n.jsxs("div",{className:"splay-result-box",children:[n.jsx("strong",{children:"Root:"})," ",h," (most recently accessed)"]}),s>=Ht*.8&&s<Ht&&n.jsxs("div",{className:"warning-box",children:[n.jsx(On,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Tree filling up!"})," ",s,"/",Ht," nodes."]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:f,className:"btn btn-clear",disabled:o,children:"Clear Tree"})}),i&&n.jsx("div",{className:`message message-${i.includes("Error")||i.includes("error")||i.includes("not found")?"error":/success|complete|Inserted|Deleted|cleared|Found|root/i.test(i)?"success":i.includes("full")?"warning":"info"}`,children:i})]})}function l0({tree:e,currentNode:t,visitedNodes:r,lastSplayedValue:s}){const a=(h,d)=>{const p=t===h,m=r.includes(h),S=d&&s===h;let w="#06b6d4",N="none";return p?(w="#f59e0b",N="drop-shadow(0 0 12px #f59e0b) drop-shadow(0 0 20px #f59e0b)"):S?(w="#ec4899",N="drop-shadow(0 0 15px #ec4899) drop-shadow(0 0 25px #ec4899)"):d?(w="#8b5cf6",N="drop-shadow(0 0 8px #8b5cf6)"):m&&(w="#10b981",N="drop-shadow(0 0 6px #10b981)"),{color:w,glow:N,radius:p||S?30:d?28:25,stroke:p||S?3:2,fontSize:p||S?16:14,fontWeight:p||S||d?"bold":"normal"}},i=(h,d,p,m,S,w=!1)=>{if(!h)return[];const N=Math.pow(2,S-m)*50,x=a(h.value,w),f=[];return h.left&&(f.push(n.jsx("line",{x1:d,y1:p,x2:d-N,y2:p+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:2},`l-${h.value}-l`)),f.push(...i(h.left,d-N,p+100,m+1,S,!1))),h.right&&(f.push(n.jsx("line",{x1:d,y1:p,x2:d+N,y2:p+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:2},`l-${h.value}-r`)),f.push(...i(h.right,d+N,p+100,m+1,S,!1))),f.push(n.jsxs("g",{style:{filter:x.glow,transition:"all 0.3s ease"},children:[n.jsx("circle",{cx:d,cy:p,r:x.radius,fill:x.color,stroke:"white",strokeWidth:x.stroke,style:{transition:"all 0.3s ease"}}),n.jsx("text",{x:d,y:p,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:x.fontSize,fontWeight:x.fontWeight,children:h.value}),w&&n.jsx("text",{x:d,y:p+x.radius+15,textAnchor:"middle",fill:"#ec4899",fontSize:10,fontWeight:"bold",children:"ROOT"})]},`n-${h.value}-${d}`)),f};if(!e)return n.jsxs("div",{className:"tree-empty",children:[n.jsx("p",{children:"Splay Tree is empty. Insert some values!"}),n.jsx("p",{className:"tree-empty-hint",children:"Try inserting: 50, 30, 70, then search for 30!"})]});const l=bl(e),o=(l+1)*100+70,c=Math.max(800,Math.pow(2,Math.max(l,1))*80);return n.jsx("svg",{width:c,height:o,className:"tree-svg",children:i(e,c/2,50,0,l,!0)})}function o0({traversalType:e,traversalResult:t,isAnimating:r,traversalComplete:s}){if(!e||t.length===0&&!r)return null;const a=a0[e];return n.jsxs("div",{className:"traversal-output-panel",children:[n.jsxs("div",{style:{marginBottom:"1rem"},children:[n.jsxs("h3",{className:"traversal-title",children:[a==null?void 0:a.name,r&&n.jsx("span",{className:"traversal-badge traversal-badge--running",children:"Running..."}),s&&n.jsx("span",{className:"traversal-badge traversal-badge--complete",children:"Complete"})]}),n.jsxs("p",{className:"traversal-order",children:[n.jsx("strong",{children:"Order:"})," ",a==null?void 0:a.order]}),n.jsx("p",{className:"traversal-description",children:a==null?void 0:a.description})]}),n.jsxs("div",{className:"traversal-output-box",children:[n.jsx("div",{className:"traversal-output-label",children:"Output Sequence:"}),n.jsx("div",{className:"traversal-sequence-container",children:t.length===0&&r?n.jsx("span",{style:{color:"var(--text-muted)",fontStyle:"italic"},children:"Traversing..."}):t.map((i,l)=>n.jsx("span",{className:`traversal-node ${l===t.length-1&&!s?"traversal-node--current":"traversal-node--complete"}`,children:i},l))})]}),s&&t.length>0&&n.jsxs("div",{className:"traversal-array-section",children:[n.jsx("div",{className:"traversal-array-label",children:"Array Output:"}),n.jsxs("code",{className:"traversal-array-output",children:["[",t.join(", "),"]"]}),e==="preorder"&&n.jsx("p",{className:"traversal-sorted-note",children:"Note: First element is the root (most recently accessed)!"}),n.jsxs("p",{className:"traversal-use-case",children:["Use case: ",a==null?void 0:a.useCase.join(" | ")]}),n.jsxs("div",{className:"traversal-complexity",children:[n.jsx("strong",{children:"Time:"})," ",n.jsx("code",{className:"complexity-value",children:a==null?void 0:a.complexity.time}),n.jsx("br",{}),n.jsx("strong",{children:"Space:"})," ",n.jsx("code",{className:"complexity-value",children:a==null?void 0:a.complexity.space})]})]})]})}function c0(){const[e,t]=u.useState(null),[r,s]=u.useState(0),[a,i]=u.useState(-1),[l,o]=u.useState(""),[c,h]=u.useState(""),[d,p]=u.useState(""),[m,S]=u.useState(""),[w,N]=u.useState(null),[x,f]=u.useState([]),[g,v]=u.useState(!1),[P,k]=u.useState(null),[V,T]=u.useState([]),[D,F]=u.useState(null),[I,H]=u.useState(!1);u.useEffect(()=>{K()},[]);const K=async()=>{try{const O=await(await fetch("/api/splay")).json();t(O.tree),s(O.size||0),i(O.height!==void 0?O.height:-1)}catch(y){console.error("Error loading Splay Tree:",y)}},$=y=>{S(y),setTimeout(()=>S(""),3e3)},q=async()=>{if(!l.trim()){$("Please enter a number!");return}const y=Number(l);if(isNaN(y)){$("Please enter a valid number!");return}if(r>=Ht){$(`Tree is full! Maximum size is ${Ht} nodes.`);return}E(),N(null);try{const A=await(await fetch("/api/splay/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:y})})).json();if(A.error){$(A.error);return}t(A.tree),s(A.size||0),i(A.height!==void 0?A.height:-1),N(y),$(`Inserted ${y} (now at root!)`),o("")}catch{$("Error inserting node")}},b=async()=>{if(!c.trim()){$("Please enter a number!");return}const y=Number(c);if(isNaN(y)){$("Please enter a valid number!");return}E(),N(null);try{const A=await(await fetch("/api/splay/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:y})})).json();if(A.error){$(A.error);return}t(A.tree),s(A.size||0),i(A.height!==void 0?A.height:-1),$(`Deleted ${y}`),h("")}catch{$("Error deleting node")}},z=async()=>{if(!d.trim()){$("Please enter a number!");return}const y=Number(d);if(isNaN(y)){$("Please enter a valid number!");return}if(!e){$("Tree is empty!");return}E(),v(!0);try{const A=await(await fetch(`/api/splay/search?value=${y}`)).json();A.tree&&t(A.tree),A.found?(N(y),$(`Found ${y}! (splayed to root)`)):(N(null),$(`${y} not found in Splay Tree`)),await K()}catch{$("Error searching")}v(!1),p("")},M=async()=>{try{await fetch("/api/splay/clear",{method:"POST"}),t(null),s(0),i(-1),E(),N(null),$("Splay Tree cleared!")}catch{$("Error clearing tree")}},C=async y=>{if(!e){$("Tree is empty! Insert some nodes first.");return}N(null),v(!0),f([]),k(null),T([]),F(y),H(!1);try{const L=(await(await fetch(`/api/splay/${y}`)).json()).traversal||[];if(L.length===0){$("Tree is empty!"),v(!1);return}for(let _=0;_<L.length;_++)k(L[_]),await new Promise(j=>setTimeout(j,600)),T(j=>[...j,L[_]]),f(j=>[...j,L[_]]),await new Promise(j=>setTimeout(j,200));k(null),H(!0),v(!1);const R=y.charAt(0).toUpperCase()+y.slice(1);$(`${R} traversal complete!`)}catch(O){console.error("Traversal error:",O),$("Error performing traversal"),v(!1)}},E=()=>{f([]),k(null),T([]),F(null),H(!1)};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsx("div",{className:"intro-left",children:n.jsx(ds,{dataStructure:"splay"})}),n.jsx(xe,{context:"Splay Tree data structure, self-adjusting BST, splay operations, zig-zig, zig-zag rotations, amortized O(log n)"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsx(i0,{insertValue:l,deleteValue:c,searchValue:d,size:r,height:a,message:m,tree:e,isAnimating:g,visitedNodes:V,lastSplayedValue:w,onInsertValueChange:o,onDeleteValueChange:h,onSearchValueChange:p,onInsert:q,onDelete:b,onSearch:z,onTraversal:C,onClear:M,onResetTraversal:()=>{E(),N(null)}}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Splay Tree Visualization"}),n.jsxs("p",{className:"bst-property-reminder",children:["Self-adjusting: ",n.jsx("code",{children:"Recently accessed = Root"})]}),n.jsx("div",{className:"tree-container",children:n.jsx(l0,{tree:e,currentNode:P,visitedNodes:V,lastSplayedValue:w})}),n.jsx(o0,{traversalType:D,traversalResult:x,isAnimating:g,traversalComplete:I})]})]}),n.jsx(ye,{dataStructure:"splay"})]})}const ht=7;function d0({insertValue:e,buildArray:t,size:r,height:s,min:a,message:i,heap:l,isAnimating:o,onInsertValueChange:c,onBuildArrayChange:h,onInsert:d,onExtract:p,onPeek:m,onBuild:S,onClear:w}){const N=(x,f)=>{const g=x.target.value;(g===""||g==="-"||/^-?\d*\.?\d*$/.test(g))&&f(g)};return n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Min Heap"}),n.jsxs("div",{className:"heap-info-box",children:[n.jsx("strong",{children:"Priority Queue:"})," Minimum always at root!"]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"insertValue",children:"Insert Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"insertValue",value:e,onChange:x=>N(x,c),onKeyDown:x=>x.key==="Enter"&&d(),placeholder:"Enter a number",disabled:o}),n.jsx("button",{onClick:d,className:"btn btn-insert",disabled:o,children:"Insert"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Heap Operations"}),n.jsxs("div",{className:"btn-group-vertical",children:[n.jsxs("button",{onClick:p,className:"btn btn-extract",disabled:o||l.length===0,children:[n.jsx(bg,{size:16})," Extract Min"]}),n.jsx("button",{onClick:m,className:"btn btn-peek",disabled:o||l.length===0,children:"Peek Min"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"buildArray",children:"Build from Array"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",id:"buildArray",value:t,onChange:x=>h(x.target.value),onKeyDown:x=>x.key==="Enter"&&S(),placeholder:"e.g., 5, 3, 8, 1, 2",disabled:o}),n.jsx("button",{onClick:S,className:"btn btn-build",disabled:o,children:"Build"})]})]}),n.jsxs("div",{className:"traversal-legend",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot",style:{background:"#10b981"}}),n.jsx("span",{children:"Root (Min)"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot",style:{background:"#6366f1"}}),n.jsx("span",{children:"Internal"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot",style:{background:"#8b5cf6"}}),n.jsx("span",{children:"Leaf"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot",style:{background:"#f59e0b"}}),n.jsx("span",{children:"Highlighted"})]})]}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Size:"}),n.jsx("span",{className:"info-value",children:r})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Height:"}),n.jsx("span",{className:"info-value",children:s})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Min:"}),n.jsx("span",{className:"info-value",children:a??"-"})]})]}),r>=ht*.8&&r<ht&&n.jsxs("div",{className:"warning-box",children:[n.jsx(On,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Heap filling up!"})," ",r,"/",ht," elements."]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:w,className:"btn btn-clear",disabled:o,children:"Clear Heap"})}),i&&n.jsx("div",{className:`message message-${i.includes("Error")||i.includes("error")?"error":/success|complete|Inserted|Extracted|cleared|Built/i.test(i)?"success":i.includes("full")||i.includes("empty")?"warning":"info"}`,children:i})]})}function u0({tree:e,heap:t,highlightedIndex:r,swappingIndices:s}){const a=d=>{const p=r===d,m=s.includes(d),S=d===0;let w="#6366f1",N="none";return p||m?(w="#f59e0b",N="drop-shadow(0 0 12px #f59e0b)"):S&&(w="#10b981",N="drop-shadow(0 0 8px #10b981)"),{color:w,glow:N,radius:p||S?28:25}},i=(d,p=0)=>d?Math.max(i(d.left,p+1),i(d.right,p+1)):p-1,l=(d,p,m,S,w)=>{if(!d)return[];const N=Math.pow(2,w-S)*50,x=a(d.index),f=[];return d.left&&(f.push(n.jsx("line",{x1:p,y1:m,x2:p-N,y2:m+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:2},`l-${d.index}-l`)),f.push(...l(d.left,p-N,m+100,S+1,w))),d.right&&(f.push(n.jsx("line",{x1:p,y1:m,x2:p+N,y2:m+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:2},`l-${d.index}-r`)),f.push(...l(d.right,p+N,m+100,S+1,w))),f.push(n.jsxs("g",{style:{filter:x.glow,transition:"all 0.3s ease"},children:[n.jsx("circle",{cx:p,cy:m,r:x.radius,fill:x.color,stroke:"white",strokeWidth:2}),n.jsx("text",{x:p,y:m,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:14,fontWeight:"bold",children:d.value}),n.jsxs("text",{x:p,y:m+x.radius+12,textAnchor:"middle",fill:"rgba(255,255,255,0.6)",fontSize:10,children:["[",d.index,"]"]})]},`n-${d.index}`)),f};if(!e||t.length===0)return n.jsxs("div",{className:"tree-empty",children:[n.jsx("p",{children:"Min Heap is empty. Insert some values!"}),n.jsx("p",{className:"tree-empty-hint",children:"Try: 5, 3, 8, 1, 2 or build from array"})]});const o=i(e),c=(o+1)*100+80,h=Math.max(600,Math.pow(2,Math.max(o,1))*70);return n.jsx("svg",{width:h,height:c,className:"tree-svg",children:l(e,h/2,50,0,o)})}function h0({heap:e,highlightedIndex:t,swappingIndices:r}){return e.length===0?n.jsx("div",{className:"heap-array-empty",children:n.jsx("code",{children:"[ ]"})}):n.jsxs("div",{className:"heap-array-container",children:[n.jsx("div",{className:"heap-array",children:e.map((s,a)=>{const i=t===a,l=r.includes(a),o=a===0;return n.jsxs("div",{className:`heap-array-cell ${i||l?"highlighted":""} ${o?"root":""}`,children:[n.jsx("span",{className:"heap-array-index",children:a}),n.jsx("span",{className:"heap-array-value",children:s})]},a)})}),n.jsxs("div",{className:"heap-array-formulas",children:[n.jsxs("div",{className:"formula-item",children:[n.jsx("strong",{children:"Parent(i):"})," ",n.jsx("code",{children:"(i - 1) / 2"})]}),n.jsxs("div",{className:"formula-item",children:[n.jsx("strong",{children:"Left(i):"})," ",n.jsx("code",{children:"2*i + 1"})]}),n.jsxs("div",{className:"formula-item",children:[n.jsx("strong",{children:"Right(i):"})," ",n.jsx("code",{children:"2*i + 2"})]})]})]})}function p0(){const[e,t]=u.useState([]),[r,s]=u.useState(null),[a,i]=u.useState(0),[l,o]=u.useState(-1),[c,h]=u.useState(null),[d,p]=u.useState(""),[m,S]=u.useState(""),[w,N]=u.useState(""),[x,f]=u.useState(!1),[g,v]=u.useState(null),[P,k]=u.useState([]);u.useEffect(()=>{V()},[]);const V=async()=>{try{const q=await(await fetch("/api/minheap")).json();t(q.heap||[]),s(q.tree),i(q.size||0),o(q.height!==void 0?q.height:-1),h(q.min)}catch($){console.error("Error loading Min Heap:",$)}},T=$=>{N($),setTimeout(()=>N(""),3e3)},D=async()=>{if(!d.trim()){T("Please enter a number!");return}const $=Number(d);if(isNaN($)){T("Please enter a valid number!");return}if(a>=ht){T(`Heap is full! Maximum size is ${ht}.`);return}f(!0);try{const b=await(await fetch("/api/minheap/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:$})})).json();if(b.error){T(b.error),f(!1);return}t(b.heap||[]),s(b.tree),i(b.size||0),o(b.height!==void 0?b.height:-1),h(b.min),T(`Inserted ${$}`),p("")}catch{T("Error inserting element")}f(!1)},F=async()=>{if(a===0){T("Heap is empty!");return}f(!0),v(0),await new Promise($=>setTimeout($,500));try{const q=await(await fetch("/api/minheap/extract",{method:"POST"})).json();if(q.error){T(q.error),f(!1),v(null);return}t(q.heap||[]),s(q.tree),i(q.size||0),o(q.height!==void 0?q.height:-1),h(q.min),T(`Extracted minimum: ${q.extracted}`)}catch{T("Error extracting minimum")}v(null),f(!1)},I=async()=>{if(a===0){T("Heap is empty!");return}v(0),T(`Minimum element is ${c}`),await new Promise($=>setTimeout($,1500)),v(null)},H=async()=>{if(!m.trim()){T("Please enter an array of numbers!");return}const $=m.split(",").map(q=>{const b=Number(q.trim());return isNaN(b)?null:b}).filter(q=>q!==null);if($.length===0){T("Please enter valid numbers separated by commas!");return}if($.length>ht){T(`Array too large! Maximum size is ${ht}.`);return}f(!0);try{const b=await(await fetch("/api/minheap/build",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({array:$})})).json();if(b.error){T(b.error),f(!1);return}t(b.heap||[]),s(b.tree),i(b.size||0),o(b.height!==void 0?b.height:-1),h(b.min),T("Built heap from array!"),S("")}catch{T("Error building heap")}f(!1)},K=async()=>{try{await fetch("/api/minheap/clear",{method:"POST"}),t([]),s(null),i(0),o(-1),h(null),v(null),k([]),T("Heap cleared!")}catch{T("Error clearing heap")}};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsx("div",{className:"intro-left",children:n.jsx(ds,{dataStructure:"minheap"})}),n.jsx(xe,{context:"Min Heap data structure, priority queue, heapify operations, O(log n) insert and extract, O(1) peek minimum"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsx(d0,{insertValue:d,buildArray:m,size:a,height:l,min:c,message:w,heap:e,isAnimating:x,onInsertValueChange:p,onBuildArrayChange:S,onInsert:D,onExtract:F,onPeek:I,onBuild:H,onClear:K}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Min Heap Visualization"}),n.jsxs("p",{className:"bst-property-reminder",children:["Heap Property: ",n.jsx("code",{children:"Parent <= Children"})," (Min at root)"]}),n.jsxs("div",{className:"heap-tree-section",children:[n.jsx("h3",{children:"Tree View"}),n.jsx("div",{className:"tree-container",children:n.jsx(u0,{tree:r,heap:e,highlightedIndex:g,swappingIndices:P})})]}),n.jsxs("div",{className:"heap-array-section",children:[n.jsx("h3",{children:"Array Representation"}),n.jsx(h0,{heap:e,highlightedIndex:g,swappingIndices:P})]})]})]}),n.jsx(ye,{dataStructure:"minheap"})]})}const pt=7;function f0({insertValue:e,buildArray:t,size:r,height:s,max:a,message:i,heap:l,isAnimating:o,onInsertValueChange:c,onBuildArrayChange:h,onInsert:d,onExtract:p,onPeek:m,onBuild:S,onClear:w}){const N=(x,f)=>{const g=x.target.value;(g===""||g==="-"||/^-?\d*\.?\d*$/.test(g))&&f(g)};return n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Max Heap"}),n.jsxs("div",{className:"heap-info-box max-heap",children:[n.jsx("strong",{children:"Priority Queue:"})," Maximum always at root!"]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"insertValue",children:"Insert Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"insertValue",value:e,onChange:x=>N(x,c),onKeyDown:x=>x.key==="Enter"&&d(),placeholder:"Enter a number",disabled:o}),n.jsx("button",{onClick:d,className:"btn btn-insert",disabled:o,children:"Insert"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Heap Operations"}),n.jsxs("div",{className:"btn-group-vertical",children:[n.jsxs("button",{onClick:p,className:"btn btn-extract-max",disabled:o||l.length===0,children:[n.jsx(Cg,{size:16})," Extract Max"]}),n.jsx("button",{onClick:m,className:"btn btn-peek",disabled:o||l.length===0,children:"Peek Max"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"buildArray",children:"Build from Array"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",id:"buildArray",value:t,onChange:x=>h(x.target.value),onKeyDown:x=>x.key==="Enter"&&S(),placeholder:"e.g., 5, 3, 8, 1, 2",disabled:o}),n.jsx("button",{onClick:S,className:"btn btn-build",disabled:o,children:"Build"})]})]}),n.jsxs("div",{className:"traversal-legend",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot",style:{background:"#ef4444"}}),n.jsx("span",{children:"Root (Max)"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot",style:{background:"#6366f1"}}),n.jsx("span",{children:"Internal"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot",style:{background:"#8b5cf6"}}),n.jsx("span",{children:"Leaf"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot",style:{background:"#f59e0b"}}),n.jsx("span",{children:"Highlighted"})]})]}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Size:"}),n.jsx("span",{className:"info-value",children:r})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Height:"}),n.jsx("span",{className:"info-value",children:s})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Max:"}),n.jsx("span",{className:"info-value",children:a??"-"})]})]}),r>=pt*.8&&r<pt&&n.jsxs("div",{className:"warning-box",children:[n.jsx(On,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Heap filling up!"})," ",r,"/",pt," elements."]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:w,className:"btn btn-clear",disabled:o,children:"Clear Heap"})}),i&&n.jsx("div",{className:`message message-${i.includes("Error")||i.includes("error")?"error":/success|complete|Inserted|Extracted|cleared|Built/i.test(i)?"success":i.includes("full")||i.includes("empty")?"warning":"info"}`,children:i})]})}function m0({tree:e,heap:t,highlightedIndex:r,swappingIndices:s}){const a=d=>{const p=r===d,m=s.includes(d),S=d===0;let w="#6366f1",N="none";return p||m?(w="#f59e0b",N="drop-shadow(0 0 12px #f59e0b)"):S&&(w="#ef4444",N="drop-shadow(0 0 8px #ef4444)"),{color:w,glow:N,radius:p||S?28:25}},i=(d,p=0)=>d?Math.max(i(d.left,p+1),i(d.right,p+1)):p-1,l=(d,p,m,S,w)=>{if(!d)return[];const N=Math.pow(2,w-S)*50,x=a(d.index),f=[];return d.left&&(f.push(n.jsx("line",{x1:p,y1:m,x2:p-N,y2:m+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:2},`l-${d.index}-l`)),f.push(...l(d.left,p-N,m+100,S+1,w))),d.right&&(f.push(n.jsx("line",{x1:p,y1:m,x2:p+N,y2:m+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:2},`l-${d.index}-r`)),f.push(...l(d.right,p+N,m+100,S+1,w))),f.push(n.jsxs("g",{style:{filter:x.glow,transition:"all 0.3s ease"},children:[n.jsx("circle",{cx:p,cy:m,r:x.radius,fill:x.color,stroke:"white",strokeWidth:2}),n.jsx("text",{x:p,y:m,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:14,fontWeight:"bold",children:d.value}),n.jsxs("text",{x:p,y:m+x.radius+12,textAnchor:"middle",fill:"rgba(255,255,255,0.6)",fontSize:10,children:["[",d.index,"]"]})]},`n-${d.index}`)),f};if(!e||t.length===0)return n.jsxs("div",{className:"tree-empty",children:[n.jsx("p",{children:"Max Heap is empty. Insert some values!"}),n.jsx("p",{className:"tree-empty-hint",children:"Try: 5, 3, 8, 1, 9 or build from array"})]});const o=i(e),c=(o+1)*100+80,h=Math.max(600,Math.pow(2,Math.max(o,1))*70);return n.jsx("svg",{width:h,height:c,className:"tree-svg",children:l(e,h/2,50,0,o)})}function g0({heap:e,highlightedIndex:t,swappingIndices:r}){return e.length===0?n.jsx("div",{className:"heap-array-empty",children:n.jsx("code",{children:"[ ]"})}):n.jsxs("div",{className:"heap-array-container",children:[n.jsx("div",{className:"heap-array",children:e.map((s,a)=>{const i=t===a,l=r.includes(a),o=a===0;return n.jsxs("div",{className:`heap-array-cell ${i||l?"highlighted":""} ${o?"root-max":""}`,children:[n.jsx("span",{className:"heap-array-index",children:a}),n.jsx("span",{className:"heap-array-value",children:s})]},a)})}),n.jsxs("div",{className:"heap-array-formulas",children:[n.jsxs("div",{className:"formula-item",children:[n.jsx("strong",{children:"Parent(i):"})," ",n.jsx("code",{children:"(i - 1) / 2"})]}),n.jsxs("div",{className:"formula-item",children:[n.jsx("strong",{children:"Left(i):"})," ",n.jsx("code",{children:"2*i + 1"})]}),n.jsxs("div",{className:"formula-item",children:[n.jsx("strong",{children:"Right(i):"})," ",n.jsx("code",{children:"2*i + 2"})]})]})]})}function v0(){const[e,t]=u.useState([]),[r,s]=u.useState(null),[a,i]=u.useState(0),[l,o]=u.useState(-1),[c,h]=u.useState(null),[d,p]=u.useState(""),[m,S]=u.useState(""),[w,N]=u.useState(""),[x,f]=u.useState(!1),[g,v]=u.useState(null),[P,k]=u.useState([]);u.useEffect(()=>{V()},[]);const V=async()=>{try{const q=await(await fetch("/api/maxheap")).json();t(q.heap||[]),s(q.tree),i(q.size||0),o(q.height!==void 0?q.height:-1),h(q.max)}catch($){console.error("Error loading Max Heap:",$)}},T=$=>{N($),setTimeout(()=>N(""),3e3)},D=async()=>{if(!d.trim()){T("Please enter a number!");return}const $=Number(d);if(isNaN($)){T("Please enter a valid number!");return}if(a>=pt){T(`Heap is full! Maximum size is ${pt}.`);return}f(!0);try{const b=await(await fetch("/api/maxheap/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:$})})).json();if(b.error){T(b.error),f(!1);return}t(b.heap||[]),s(b.tree),i(b.size||0),o(b.height!==void 0?b.height:-1),h(b.max),T(`Inserted ${$}`),p("")}catch{T("Error inserting element")}f(!1)},F=async()=>{if(a===0){T("Heap is empty!");return}f(!0),v(0),await new Promise($=>setTimeout($,500));try{const q=await(await fetch("/api/maxheap/extract",{method:"POST"})).json();if(q.error){T(q.error),f(!1),v(null);return}t(q.heap||[]),s(q.tree),i(q.size||0),o(q.height!==void 0?q.height:-1),h(q.max),T(`Extracted maximum: ${q.extracted}`)}catch{T("Error extracting maximum")}v(null),f(!1)},I=async()=>{if(a===0){T("Heap is empty!");return}v(0),T(`Maximum element is ${c}`),await new Promise($=>setTimeout($,1500)),v(null)},H=async()=>{if(!m.trim()){T("Please enter an array of numbers!");return}const $=m.split(",").map(q=>{const b=Number(q.trim());return isNaN(b)?null:b}).filter(q=>q!==null);if($.length===0){T("Please enter valid numbers separated by commas!");return}if($.length>pt){T(`Array too large! Maximum size is ${pt}.`);return}f(!0);try{const b=await(await fetch("/api/maxheap/build",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({array:$})})).json();if(b.error){T(b.error),f(!1);return}t(b.heap||[]),s(b.tree),i(b.size||0),o(b.height!==void 0?b.height:-1),h(b.max),T("Built heap from array!"),S("")}catch{T("Error building heap")}f(!1)},K=async()=>{try{await fetch("/api/maxheap/clear",{method:"POST"}),t([]),s(null),i(0),o(-1),h(null),v(null),k([]),T("Heap cleared!")}catch{T("Error clearing heap")}};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsx("div",{className:"intro-left",children:n.jsx(ds,{dataStructure:"maxheap"})}),n.jsx(xe,{context:"Max Heap data structure, priority queue, heapify operations, O(log n) insert and extract, O(1) peek maximum, heap sort"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsx(f0,{insertValue:d,buildArray:m,size:a,height:l,max:c,message:w,heap:e,isAnimating:x,onInsertValueChange:p,onBuildArrayChange:S,onInsert:D,onExtract:F,onPeek:I,onBuild:H,onClear:K}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Max Heap Visualization"}),n.jsxs("p",{className:"bst-property-reminder",children:["Heap Property: ",n.jsx("code",{children:"Parent >= Children"})," (Max at root)"]}),n.jsxs("div",{className:"heap-tree-section",children:[n.jsx("h3",{children:"Tree View"}),n.jsx("div",{className:"tree-container",children:n.jsx(m0,{tree:r,heap:e,highlightedIndex:g,swappingIndices:P})})]}),n.jsxs("div",{className:"heap-array-section",children:[n.jsx("h3",{children:"Array Representation"}),n.jsx(g0,{heap:e,highlightedIndex:g,swappingIndices:P})]})]})]}),n.jsx(ye,{dataStructure:"maxheap"})]})}function x0(){const[e,t]=u.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=u.useState(""),[a,i]=u.useState(""),[l,o]=u.useState(""),[c,h]=u.useState("1"),[d,p]=u.useState(null),[m,S]=u.useState(null),[w,N]=u.useState(null),[x,f]=u.useState({}),{message:g,showMessage:v}=He(3e3);u.useEffect(()=>{k()},[]),u.useEffect(()=>{e.vertices.length>0&&P()},[e.vertices]),u.useEffect(()=>{if(d||m){const b=setTimeout(()=>{p(null),S(null),N(null)},2e3);return()=>clearTimeout(b)}},[d,m]);const P=u.useCallback(()=>{const E=Math.min(450,300)*.38,y={},O=e.vertices.length;e.vertices.forEach((A,L)=>{const R=2*Math.PI*L/O-Math.PI/2;y[A]={x:225+E*Math.cos(R),y:150+E*Math.sin(R)}}),f(y)},[e.vertices]),k=async()=>{try{const b=await ie("/api/graph");t(b)}catch(b){console.error("Error loading graph:",b)}},V=async()=>{if(!r.trim()){v("Please enter a vertex name!","error");return}try{const b=await ee("/api/graph/vertex",{vertex:r.trim()});if(b.error){v(b.error,"error");return}t(b),p(r.trim().toUpperCase()),N("add-vertex"),v(`Added vertex '${r}' - Created new entry in adjacency list`,"success"),s("")}catch{v("Error adding vertex","error")}},T=async b=>{try{const z=await ma(`/api/graph/vertex/${b}`);if(z.error){v(z.error,"error");return}t(z),v(`Removed vertex '${b}' - Deleted from list and all references`,"success")}catch{v("Error removing vertex","error")}},D=async()=>{if(!a.trim()||!l.trim()){v("Please select both vertices!","error");return}const b=parseInt(c)||1;try{const z=await ee("/api/graph/edge",{from:a.trim(),to:l.trim(),weight:b});if(z.error){v(z.error,"error");return}t(z),S({from:a,to:l}),N("add-edge"),v(`Added edge ${a}→${l} (weight: ${b}) - Appended to ${a}'s neighbor list`,"success"),i(""),o(""),h("1")}catch{v("Error adding edge","error")}},F=async()=>{if(!a.trim()||!l.trim()){v("Please select both vertices!","error");return}try{const b=await ma("/api/graph/edge",{from:a.trim(),to:l.trim()});if(b.error){v(b.error,"error");return}t(b),v(`Removed edge ${a}→${l} - Removed from neighbor lists`,"success"),i(""),o("")}catch{v("Error removing edge","error")}},I=async b=>{try{const z=await ee(`/api/graph/preset/${b}`,{});if(z.error){v(z.error,"error");return}t(z),v(`Loaded '${b}' graph preset`,"success")}catch{v("Error loading preset","error")}},H=async()=>{try{const b=await ee("/api/graph/clear",{});t(b),v("Graph cleared","success")}catch{v("Error clearing graph","error")}},K=(b,z)=>{b.key==="Enter"&&z()},$=b=>d===b&&w==="add-vertex"?"graph-node highlighted-new":m&&(m.from===b||m.to===b)?"graph-node highlighted-edge":"graph-node",q=(b,z)=>m&&(m.from===b&&m.to===z||m.from===z&&m.to===b)?"graph-edge highlighted":"graph-edge";return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Oe,{className:"icon-sm"}),n.jsx("span",{children:"What is an Adjacency List?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:["An ",n.jsx("strong",{children:"Adjacency List"})," represents a graph using a collection of lists. Each vertex stores a list of its neighboring vertices."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(ve,{}),n.jsx("span",{children:"Like a contact list - each person has their own list of friends they're connected to!"})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Add Vertex"}),n.jsx("span",{className:"op-desc",children:"Create new list"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Add Edge"}),n.jsx("span",{className:"op-desc",children:"Append to list"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Remove Edge"}),n.jsx("span",{className:"op-desc",children:"Search & delete"}),n.jsx("span",{className:"op-complexity",children:"O(E)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Find Neighbors"}),n.jsx("span",{className:"op-desc",children:"Return list"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]})]}),n.jsxs("div",{className:"concept-uses",children:[n.jsx("strong",{children:"Why Adjacency List?"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Space efficient for sparse graphs: O(V + E)"}),n.jsx("li",{children:"Fast iteration over neighbors"}),n.jsx("li",{children:"Easy to add vertices and edges"}),n.jsx("li",{children:"Supports weighted edges naturally"})]})]})]})]}),n.jsx(xe,{context:"Adjacency List graph representation, graph data structure"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Operations"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Load Preset"}),n.jsxs("div",{className:"btn-group preset-group",children:[n.jsx("button",{onClick:()=>I("simple"),className:"btn btn-preset",children:"Simple"}),n.jsx("button",{onClick:()=>I("tree"),className:"btn btn-preset",children:"Tree"}),n.jsx("button",{onClick:()=>I("cyclic"),className:"btn btn-preset",children:"Cyclic"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsxs("label",{htmlFor:"vertexInput",children:[n.jsx(fa,{size:14})," Add Vertex"]}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",id:"vertexInput",value:r,onChange:b=>s(b.target.value.toUpperCase()),onKeyPress:b=>K(b,V),placeholder:"Name (e.g., A)",maxLength:3}),n.jsx("button",{onClick:V,className:"btn btn-add",children:"Add"})]}),n.jsx("span",{className:"operation-hint",children:"Creates a new empty list entry"})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Add/Remove Edge (with Weight)"}),n.jsxs("div",{className:"edge-inputs",children:[n.jsxs("select",{value:a,onChange:b=>i(b.target.value),className:"vertex-select",children:[n.jsx("option",{value:"",children:"From"}),e.vertices.map(b=>n.jsx("option",{value:b,children:b},b))]}),n.jsx("span",{className:"edge-arrow",children:"→"}),n.jsxs("select",{value:l,onChange:b=>o(b.target.value),className:"vertex-select",children:[n.jsx("option",{value:"",children:"To"}),e.vertices.map(b=>n.jsx("option",{value:b,children:b},b))]})]}),n.jsxs("div",{className:"weight-input",children:[n.jsx("label",{htmlFor:"weightInput",children:"Weight:"}),n.jsx("input",{type:"number",id:"weightInput",value:c,onChange:b=>h(b.target.value),min:"1",max:"99",className:"weight-field"})]}),n.jsxs("div",{className:"btn-group",children:[n.jsxs("button",{onClick:D,className:"btn btn-add",children:[n.jsx(fa,{size:14})," Add Edge"]}),n.jsxs("button",{onClick:F,className:"btn btn-remove",children:[n.jsx(gl,{size:14})," Remove"]})]}),n.jsx("span",{className:"operation-hint",children:"Appends neighbor to the vertex's list"})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:H,className:"btn btn-clear full-width",children:"Clear Graph"})}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Vertices (V):"}),n.jsx("span",{className:"info-value",children:e.vertex_count||0})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Edges (E):"}),n.jsx("span",{className:"info-value",children:e.edge_count||0})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Space:"}),n.jsx("span",{className:"info-value",children:"O(V + E)"})]})]}),n.jsx(Be,{message:g})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Graph View"}),n.jsx("div",{className:"graph-container",children:e.vertices.length===0?n.jsx("div",{className:"graph-empty",children:"Graph is empty. Add vertices or load a preset!"}):n.jsxs("svg",{className:"graph-svg",viewBox:"0 0 450 300",children:[e.edges.map(([b,z,M],C)=>{const E=x[b],y=x[z];if(!E||!y)return null;const O=(E.x+y.x)/2,A=(E.y+y.y)/2;return n.jsxs("g",{children:[n.jsx("line",{x1:E.x,y1:E.y,x2:y.x,y2:y.y,className:q(b,z)}),n.jsx("circle",{cx:O,cy:A,r:12,className:"weight-bg"}),n.jsx("text",{x:O,y:A,className:"weight-label",dominantBaseline:"central",textAnchor:"middle",children:M})]},`edge-${C}`)}),e.vertices.map(b=>{const z=x[b];return z?n.jsxs("g",{className:$(b),children:[n.jsx("circle",{cx:z.x,cy:z.y,r:22,className:"node-circle"}),n.jsx("text",{x:z.x,y:z.y,className:"node-label",dominantBaseline:"central",textAnchor:"middle",children:b})]},b):null})]})}),n.jsxs("div",{className:"adjacency-list-section",children:[n.jsx("h3",{children:"Behind the Scenes: Adjacency List Structure"}),n.jsx("p",{className:"adj-explanation",children:"Each vertex has its own linked list of neighbors. When you add an edge A→B, we append B to A's list (and A to B's list for undirected graphs)."}),n.jsx("div",{className:"adj-list-visual",children:e.vertices.length===0?n.jsx("div",{className:"adj-empty",children:"No vertices in graph"}):e.vertices.map(b=>{const z=e.adjacency_list[b]||[],M=d===b||m&&(m.from===b||m.to===b);return n.jsxs("div",{className:`adj-row-visual ${M?"highlighted":""}`,children:[n.jsx("div",{className:"adj-vertex-box",children:n.jsx("span",{className:"adj-vertex-label",children:b})}),n.jsx("div",{className:"adj-pointer",children:n.jsx(re,{size:16})}),n.jsxs("div",{className:"adj-linked-list",children:[z.length===0?n.jsx("div",{className:"adj-null",children:"null"}):z.map(([C,E],y)=>{const O=m&&m.from===b&&m.to===C;return n.jsxs(Je.Fragment,{children:[n.jsxs("div",{className:`adj-neighbor-node ${O?"highlighted":""}`,children:[n.jsx("span",{className:"neighbor-vertex",children:C}),n.jsxs("span",{className:"neighbor-weight",children:["w:",E]})]}),y<z.length-1&&n.jsx("div",{className:"adj-link",children:n.jsx(re,{size:14})})]},`${b}-${C}`)}),z.length>0&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"adj-link",children:n.jsx(re,{size:14})}),n.jsx("div",{className:"adj-null",children:"null"})]})]}),n.jsx("button",{className:"adj-remove-btn",onClick:()=>T(b),title:`Remove vertex ${b}`,children:n.jsx(gl,{size:14})})]},b)})}),n.jsxs("div",{className:"memory-hint",children:[n.jsx("strong",{children:"Memory Layout:"})," An array/hashmap stores vertex references, each pointing to the head of a linked list containing (neighbor, weight) pairs."]})]})]})]}),n.jsx(ye,{dataStructure:"graph"})]})}function y0(){const[e,t]=u.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=u.useState([]),[a,i]=u.useState([]),[l,o]=u.useState(""),[c,h]=u.useState(""),[d,p]=u.useState(""),[m,S]=u.useState("1"),[w,N]=u.useState(null),[x,f]=u.useState(null),[g,v]=u.useState({}),{message:P,showMessage:k}=He(3e3);u.useEffect(()=>{T()},[]),u.useEffect(()=>{e.vertices.length>0?(D(),V()):(s([]),i([]))},[e]),u.useEffect(()=>{if(w){const C=setTimeout(()=>{N(null)},2e3);return()=>clearTimeout(C)}},[w]);const V=u.useCallback(()=>{const A=Math.min(350,250)*.38,L={},R=e.vertices.length;e.vertices.forEach((_,j)=>{const B=2*Math.PI*j/R-Math.PI/2;L[_]={x:175+A*Math.cos(B),y:125+A*Math.sin(B)}}),v(L)},[e.vertices]),T=async()=>{try{const C=await ie("/api/graph");t(C)}catch(C){console.error("Error loading graph:",C)}},D=async()=>{try{const C=await ie("/api/graph/matrix");s(C.matrix),i(C.vertices)}catch(C){console.error("Error loading matrix:",C)}},F=async()=>{if(!l.trim()){k("Please enter a vertex name!","error");return}try{const C=await ee("/api/graph/vertex",{vertex:l.trim()});if(C.error){k(C.error,"error");return}t(C),k(`Added vertex '${l}' - Added new row and column to matrix`,"success"),o("")}catch{k("Error adding vertex","error")}},I=async C=>{try{const E=await ma(`/api/graph/vertex/${C}`);if(E.error){k(E.error,"error");return}t(E),k(`Removed vertex '${C}' - Removed row and column from matrix`,"success")}catch{k("Error removing vertex","error")}},H=async()=>{if(!c.trim()||!d.trim()){k("Please select both vertices!","error");return}const C=parseInt(m)||1;try{const E=await ee("/api/graph/edge",{from:c.trim(),to:d.trim(),weight:C});if(E.error){k(E.error,"error");return}t(E);const y=a.indexOf(c),O=a.indexOf(d);N({row:y,col:O}),k(`Added edge: matrix[${c}][${d}] = ${C}`,"success"),h(""),p(""),S("1")}catch{k("Error adding edge","error")}},K=async()=>{if(!c.trim()||!d.trim()){k("Please select both vertices!","error");return}try{const C=await ma("/api/graph/edge",{from:c.trim(),to:d.trim()});if(C.error){k(C.error,"error");return}t(C),k(`Removed edge: matrix[${c}][${d}] = 0`,"success"),h(""),p("")}catch{k("Error removing edge","error")}},$=()=>{var A;if(!c.trim()||!d.trim()){k("Please select both vertices to check!","error");return}const C=a.indexOf(c),E=a.indexOf(d);if(C===-1||E===-1){k("Vertex not found!","error");return}const y=((A=r[C])==null?void 0:A[E])||0,O=y>0;N({row:C,col:E}),f({from:c,to:d,exists:O,weight:y}),k(O?`Edge exists! matrix[${c}][${d}] = ${y} (O(1) lookup)`:`No edge: matrix[${c}][${d}] = 0 (O(1) lookup)`,O?"success":"info")},q=async C=>{try{const E=await ee(`/api/graph/preset/${C}`,{});if(E.error){k(E.error,"error");return}t(E),f(null),k(`Loaded '${C}' graph preset`,"success")}catch{k("Error loading preset","error")}},b=async()=>{try{const C=await ee("/api/graph/clear",{});t(C),s([]),i([]),f(null),k("Graph cleared","success")}catch{k("Error clearing graph","error")}},z=(C,E)=>{C.key==="Enter"&&E()},M=(C,E,y)=>{let O="matrix-cell";return w&&w.row===C&&w.col===E&&(O+=" highlighted"),w&&w.row===E&&w.col===C&&(O+=" highlighted"),y>0&&(O+=" has-edge"),C===E&&(O+=" diagonal"),O};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Oe,{className:"icon-sm"}),n.jsx("span",{children:"What is an Adjacency Matrix?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:["An ",n.jsx("strong",{children:"Adjacency Matrix"})," is a 2D array where ",n.jsx("code",{children:"matrix[i][j]"})," represents the edge weight between vertex i and j (0 if no edge)."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(ve,{}),n.jsx("span",{children:"Like a spreadsheet where rows and columns are people, and cells show if they're friends!"})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Check Edge"}),n.jsx("span",{className:"op-desc",children:"Direct lookup"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Add Edge"}),n.jsx("span",{className:"op-desc",children:"Set cell value"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Add Vertex"}),n.jsx("span",{className:"op-desc",children:"Resize matrix"}),n.jsx("span",{className:"op-complexity",children:"O(V²)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Space"}),n.jsx("span",{className:"op-desc",children:"2D array"}),n.jsx("span",{className:"op-complexity",children:"O(V²)"})]})]}),n.jsxs("div",{className:"concept-uses",children:[n.jsx("strong",{children:"When to Use:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Dense graphs (many edges)"}),n.jsx("li",{children:"Fast edge existence checks needed"}),n.jsx("li",{children:"Small number of vertices"}),n.jsx("li",{children:"Frequent edge weight updates"})]})]})]})]}),n.jsx(xe,{context:"Adjacency Matrix graph representation"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Operations"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Load Preset"}),n.jsxs("div",{className:"btn-group preset-group",children:[n.jsx("button",{onClick:()=>q("simple"),className:"btn btn-preset",children:"Simple"}),n.jsx("button",{onClick:()=>q("complete"),className:"btn btn-preset",children:"Complete"}),n.jsx("button",{onClick:()=>q("cyclic"),className:"btn btn-preset",children:"Cyclic"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsxs("label",{htmlFor:"vertexInput",children:[n.jsx(fa,{size:14})," Add Vertex"]}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",id:"vertexInput",value:l,onChange:C=>o(C.target.value.toUpperCase()),onKeyPress:C=>z(C,F),placeholder:"Name (e.g., A)",maxLength:3}),n.jsx("button",{onClick:F,className:"btn btn-add",children:"Add"})]}),n.jsx("span",{className:"operation-hint",children:"Adds new row & column (O(V²) resize)"})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Edge Operations"}),n.jsxs("div",{className:"edge-inputs",children:[n.jsxs("select",{value:c,onChange:C=>h(C.target.value),className:"vertex-select",children:[n.jsx("option",{value:"",children:"From"}),e.vertices.map(C=>n.jsx("option",{value:C,children:C},C))]}),n.jsx("span",{className:"edge-arrow",children:"→"}),n.jsxs("select",{value:d,onChange:C=>p(C.target.value),className:"vertex-select",children:[n.jsx("option",{value:"",children:"To"}),e.vertices.map(C=>n.jsx("option",{value:C,children:C},C))]})]}),n.jsxs("div",{className:"weight-input",children:[n.jsx("label",{htmlFor:"weightInput",children:"Weight:"}),n.jsx("input",{type:"number",id:"weightInput",value:m,onChange:C=>S(C.target.value),min:"1",max:"99",className:"weight-field"})]}),n.jsxs("div",{className:"btn-group",children:[n.jsxs("button",{onClick:H,className:"btn btn-add",children:[n.jsx(fa,{size:14})," Add"]}),n.jsxs("button",{onClick:K,className:"btn btn-remove",children:[n.jsx(gl,{size:14})," Remove"]}),n.jsxs("button",{onClick:$,className:"btn btn-check",children:[n.jsx(cs,{size:14})," Check"]})]}),n.jsx("span",{className:"operation-hint",children:"O(1) direct cell access"})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:b,className:"btn btn-clear full-width",children:"Clear Graph"})}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Vertices (V):"}),n.jsx("span",{className:"info-value",children:e.vertex_count||0})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Edges (E):"}),n.jsx("span",{className:"info-value",children:e.edge_count||0})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Matrix Size:"}),n.jsxs("span",{className:"info-value",children:[a.length," × ",a.length]})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Space Used:"}),n.jsxs("span",{className:"info-value",children:["O(",a.length,"²) = ",a.length*a.length," cells"]})]})]}),x&&n.jsxs("div",{className:`lookup-result ${x.exists?"exists":"not-exists"}`,children:[n.jsx("strong",{children:"Lookup Result:"}),n.jsxs("code",{children:["matrix[",x.from,"][",x.to,"] = ",x.weight]}),n.jsx("span",{children:x.exists?"Edge exists!":"No edge"})]}),n.jsx(Be,{message:P})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsxs("div",{className:"mini-graph-section",children:[n.jsx("h3",{children:"Graph View"}),n.jsx("div",{className:"mini-graph-container",children:e.vertices.length===0?n.jsx("div",{className:"graph-empty-mini",children:"Empty graph"}):n.jsxs("svg",{className:"mini-graph-svg",viewBox:"0 0 350 250",children:[e.edges.map(([C,E,y],O)=>{const A=g[C],L=g[E];return!A||!L?null:n.jsx("line",{x1:A.x,y1:A.y,x2:L.x,y2:L.y,className:"mini-edge"},`edge-${O}`)}),e.vertices.map(C=>{const E=g[C];return E?n.jsxs("g",{className:"mini-node",children:[n.jsx("circle",{cx:E.x,cy:E.y,r:18}),n.jsx("text",{x:E.x,y:E.y,dominantBaseline:"central",textAnchor:"middle",children:C})]},C):null})]})})]}),n.jsxs("div",{className:"matrix-section",children:[n.jsx("h3",{children:"Adjacency Matrix"}),n.jsxs("p",{className:"matrix-explanation",children:["Each cell ",n.jsx("code",{children:"matrix[row][col]"})," stores the edge weight (0 = no edge). Undirected graphs have symmetric matrices."]}),a.length===0?n.jsx("div",{className:"matrix-empty",children:"No vertices in graph. Add vertices or load a preset!"}):n.jsx("div",{className:"matrix-container",children:n.jsxs("table",{className:"adjacency-matrix",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{className:"matrix-corner"}),a.map((C,E)=>n.jsx("th",{className:"matrix-header col-header",children:C},C))]})}),n.jsx("tbody",{children:a.map((C,E)=>n.jsxs("tr",{children:[n.jsxs("th",{className:"matrix-header row-header",children:[C,n.jsx("button",{className:"remove-vertex-btn",onClick:()=>I(C),title:`Remove ${C}`,children:"×"})]}),a.map((y,O)=>{var A,L,R;return n.jsx("td",{className:M(E,O,(A=r[E])==null?void 0:A[O]),title:`matrix[${C}][${y}] = ${((L=r[E])==null?void 0:L[O])||0}`,children:((R=r[E])==null?void 0:R[O])||0},`${E}-${O}`)})]},C))})]})}),n.jsxs("div",{className:"comparison-hint",children:[n.jsx("strong",{children:"vs Adjacency List:"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("span",{className:"pro",children:"Pro:"})," O(1) edge lookup vs O(degree) for list"]}),n.jsxs("li",{children:[n.jsx("span",{className:"con",children:"Con:"})," O(V²) space vs O(V+E) for list"]}),n.jsxs("li",{children:[n.jsx("span",{className:"pro",children:"Pro:"})," Better for dense graphs (E ≈ V²)"]}),n.jsxs("li",{children:[n.jsx("span",{className:"con",children:"Con:"})," Wastes space for sparse graphs"]})]})]})]})]})]}),n.jsx(ye,{dataStructure:"graph"})]})}function j0(){const[e,t]=u.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=u.useState(""),[a,i]=u.useState([]),[l,o]=u.useState([]),[c,h]=u.useState(-1),[d,p]=u.useState(!1),[m,S]=u.useState(!1),[w,N]=u.useState(new Set),[x,f]=u.useState(null),[g,v]=u.useState([]),[P,k]=u.useState({}),{message:V,showMessage:T}=He(3e3),D=u.useRef(null),F=u.useRef(0);u.useEffect(()=>{H()},[]),u.useEffect(()=>{e.vertices.length>0&&I()},[e.vertices]);const I=u.useCallback(()=>{const R=Math.min(500,350)*.35,_={},j=e.vertices.length;e.vertices.forEach((B,Q)=>{const Y=2*Math.PI*Q/j-Math.PI/2;_[B]={x:250+R*Math.cos(Y),y:175+R*Math.sin(Y)}}),k(_)},[e.vertices]),H=async()=>{try{const y=await ie("/api/graph");y.vertices.length===0?await K("simple"):t(y)}catch(y){console.error("Error loading graph:",y)}},K=async y=>{try{const O=await ee(`/api/graph/preset/${y}`,{});if(O.error){T(O.error,"error");return}t(O),C(),T(`Loaded '${y}' preset`,"success")}catch{T("Error loading preset","error")}},$=async()=>{if(!r.trim()){T("Please select a starting vertex!","error");return}try{const y=await ie(`/api/graph/bfs/${r}`);if(y.error){T(y.error,"error");return}i(y.traversal),o(y.steps),T("Starting BFS traversal...","info"),q(y.steps)}catch{T("Error running BFS","error")}},q=y=>{D.current&&clearInterval(D.current),p(!0),S(!1),N(new Set),f(null),v([]),h(-1),F.current=0,D.current=setInterval(()=>{if(F.current>=y.length){clearInterval(D.current),p(!1),f(null),T(`BFS Complete: ${a.join(" → ")}`,"success");return}const O=y[F.current];h(F.current),O.action==="visit"?(f(O.vertex),N(new Set(O.visited)),v(O.queue||[])):O.action==="enqueue"&&v(O.queue||[]),F.current++},1e3)},b=()=>{m?(S(!1),z()):(S(!0),D.current&&clearInterval(D.current))},z=()=>{D.current&&clearInterval(D.current),D.current=setInterval(()=>{if(F.current>=l.length){clearInterval(D.current),p(!1),f(null);return}const y=l[F.current];h(F.current),y.action==="visit"?(f(y.vertex),N(new Set(y.visited)),v(y.queue||[])):y.action==="enqueue"&&v(y.queue||[]),F.current++},1e3)},M=()=>{if(F.current>=l.length)return;const y=l[F.current];h(F.current),y.action==="visit"?(f(y.vertex),N(new Set(y.visited)),v(y.queue||[])):y.action==="enqueue"&&v(y.queue||[]),F.current++,F.current>=l.length&&(p(!1),f(null))},C=()=>{D.current&&clearInterval(D.current),i([]),o([]),h(-1),N(new Set),f(null),v([]),p(!1),S(!1),F.current=0},E=y=>x===y?"graph-node current":w.has(y)?"graph-node visited":g.includes(y)?"graph-node queued":"graph-node";return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Oe,{className:"icon-sm"}),n.jsx("span",{children:"What is Breadth-First Search?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"BFS"})," explores a graph level by level, visiting all neighbors of a node before moving to the next level."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(ve,{}),n.jsx("span",{children:"Like ripples spreading outward when you drop a stone in water!"})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Time"}),n.jsx("span",{className:"op-desc",children:"Visit all nodes"}),n.jsx("span",{className:"op-complexity",children:"O(V+E)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Space"}),n.jsx("span",{className:"op-desc",children:"Queue storage"}),n.jsx("span",{className:"op-complexity",children:"O(V)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Structure"}),n.jsx("span",{className:"op-desc",children:"Uses a Queue"}),n.jsx("span",{className:"op-complexity",children:"FIFO"})]})]}),n.jsxs("div",{className:"concept-uses",children:[n.jsx("strong",{children:"Common Uses:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Shortest path in unweighted graphs"}),n.jsx("li",{children:"Level-order tree traversal"}),n.jsx("li",{children:"Finding connected components"}),n.jsx("li",{children:"Web crawlers"})]})]})]})]}),n.jsx(xe,{context:"Breadth-First Search (BFS) algorithm on graphs"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"BFS Controls"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Load Graph Preset"}),n.jsxs("div",{className:"btn-group preset-group",children:[n.jsx("button",{onClick:()=>K("simple"),className:"btn btn-preset",disabled:d,children:"Simple"}),n.jsx("button",{onClick:()=>K("tree"),className:"btn btn-preset",disabled:d,children:"Tree"}),n.jsx("button",{onClick:()=>K("cyclic"),className:"btn btn-preset",disabled:d,children:"Cyclic"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Start BFS From"}),n.jsxs("select",{value:r,onChange:y=>s(y.target.value),className:"vertex-select full-width",disabled:d,children:[n.jsx("option",{value:"",children:"Select start vertex"}),e.vertices.map(y=>n.jsx("option",{value:y,children:y},y))]})]}),n.jsx("div",{className:"operation-group",children:n.jsxs("div",{className:"btn-group",children:[n.jsxs("button",{onClick:$,className:"btn btn-bfs",disabled:d&&!m,children:[n.jsx(Ae,{size:14})," Run BFS"]}),d&&n.jsx("button",{onClick:b,className:"btn btn-pause",children:m?n.jsx(Ae,{size:14}):n.jsx(wt,{size:14})}),m&&n.jsx("button",{onClick:M,className:"btn btn-step",children:n.jsx(St,{size:14})}),n.jsx("button",{onClick:C,className:"btn btn-reset",children:n.jsx(at,{size:14})})]})}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Vertices:"}),n.jsx("span",{className:"info-value",children:e.vertex_count||e.vertices.length})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Edges:"}),n.jsx("span",{className:"info-value",children:e.edge_count||0})]}),g.length>0&&n.jsxs("div",{className:"info-item queue-display",children:[n.jsx("span",{className:"info-label",children:"Queue:"}),n.jsxs("span",{className:"info-value queue-items",children:["[",g.join(", "),"]"]})]}),a.length>0&&n.jsxs("div",{className:"info-item traversal-result",children:[n.jsx("span",{className:"info-label",children:"Order:"}),n.jsx("span",{className:"info-value",children:a.join(" → ")})]})]}),n.jsx(Be,{message:V}),n.jsxs("div",{className:"legend",children:[n.jsx("h3",{children:"Legend"}),n.jsxs("div",{className:"legend-items",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color unvisited"}),n.jsx("span",{children:"Unvisited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color queued"}),n.jsx("span",{children:"In Queue"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color current"}),n.jsx("span",{children:"Current"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color visited"}),n.jsx("span",{children:"Visited"})]})]})]})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"BFS Visualization"}),n.jsx("div",{className:"graph-container",children:e.vertices.length===0?n.jsx("div",{className:"graph-empty",children:"Loading graph..."}):n.jsxs("svg",{className:"graph-svg",viewBox:"0 0 500 350",children:[e.edges.map(([y,O],A)=>{const L=P[y],R=P[O];return!L||!R?null:n.jsx("line",{x1:L.x,y1:L.y,x2:R.x,y2:R.y,className:"graph-edge"},`edge-${A}`)}),e.vertices.map(y=>{const O=P[y];return O?n.jsxs("g",{className:E(y),children:[n.jsx("circle",{cx:O.x,cy:O.y,r:25,className:"node-circle"}),n.jsx("text",{x:O.x,y:O.y,className:"node-label",dominantBaseline:"central",textAnchor:"middle",children:y})]},y):null})]})}),n.jsxs("div",{className:"algorithm-steps",children:[n.jsx("h3",{children:"BFS Algorithm Steps"}),n.jsx("div",{className:"steps-content",children:n.jsxs("ol",{children:[n.jsx("li",{className:c>=0?"active":"",children:"Start at the selected vertex"}),n.jsx("li",{className:g.length>0?"active":"",children:"Add it to a queue and mark as visited"}),n.jsx("li",{className:x?"active":"",children:"Dequeue a vertex and explore its neighbors"}),n.jsx("li",{children:"Add unvisited neighbors to the queue"}),n.jsx("li",{children:"Repeat until queue is empty"})]})})]})]})]}),n.jsx(ye,{dataStructure:"bfs"})]})}function N0(){const[e,t]=u.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=u.useState(""),[a,i]=u.useState([]),[l,o]=u.useState([]),[c,h]=u.useState(-1),[d,p]=u.useState(!1),[m,S]=u.useState(!1),[w,N]=u.useState(new Set),[x,f]=u.useState(null),[g,v]=u.useState([]),[P,k]=u.useState({}),{message:V,showMessage:T}=He(3e3),D=u.useRef(null),F=u.useRef(0);u.useEffect(()=>{H()},[]),u.useEffect(()=>{e.vertices.length>0&&I()},[e.vertices]);const I=u.useCallback(()=>{const R=Math.min(500,350)*.35,_={},j=e.vertices.length;e.vertices.forEach((B,Q)=>{const Y=2*Math.PI*Q/j-Math.PI/2;_[B]={x:250+R*Math.cos(Y),y:175+R*Math.sin(Y)}}),k(_)},[e.vertices]),H=async()=>{try{const y=await ie("/api/graph");y.vertices.length===0?await K("simple"):t(y)}catch(y){console.error("Error loading graph:",y)}},K=async y=>{try{const O=await ee(`/api/graph/preset/${y}`,{});if(O.error){T(O.error,"error");return}t(O),C(),T(`Loaded '${y}' preset`,"success")}catch{T("Error loading preset","error")}},$=async()=>{if(!r.trim()){T("Please select a starting vertex!","error");return}try{const y=await ie(`/api/graph/dfs/${r}`);if(y.error){T(y.error,"error");return}i(y.traversal),o(y.steps),T("Starting DFS traversal...","info"),q(y.steps)}catch{T("Error running DFS","error")}},q=y=>{D.current&&clearInterval(D.current),p(!0),S(!1),N(new Set),f(null),v([]),h(-1),F.current=0,D.current=setInterval(()=>{if(F.current>=y.length){clearInterval(D.current),p(!1),f(null),T(`DFS Complete: ${a.join(" → ")}`,"success");return}const O=y[F.current];h(F.current),O.action==="visit"?(f(O.vertex),N(new Set(O.visited)),v(O.stack||[])):O.action==="push"&&v(O.stack||[]),F.current++},1e3)},b=()=>{m?(S(!1),z()):(S(!0),D.current&&clearInterval(D.current))},z=()=>{D.current&&clearInterval(D.current),D.current=setInterval(()=>{if(F.current>=l.length){clearInterval(D.current),p(!1),f(null);return}const y=l[F.current];h(F.current),y.action==="visit"?(f(y.vertex),N(new Set(y.visited)),v(y.stack||[])):y.action==="push"&&v(y.stack||[]),F.current++},1e3)},M=()=>{if(F.current>=l.length)return;const y=l[F.current];h(F.current),y.action==="visit"?(f(y.vertex),N(new Set(y.visited)),v(y.stack||[])):y.action==="push"&&v(y.stack||[]),F.current++,F.current>=l.length&&(p(!1),f(null))},C=()=>{D.current&&clearInterval(D.current),i([]),o([]),h(-1),N(new Set),f(null),v([]),p(!1),S(!1),F.current=0},E=y=>x===y?"graph-node current":w.has(y)?"graph-node visited":g.includes(y)?"graph-node stacked":"graph-node";return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Oe,{className:"icon-sm"}),n.jsx("span",{children:"What is Depth-First Search?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"DFS"})," explores a graph by going as deep as possible along each branch before backtracking."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(ve,{}),n.jsx("span",{children:"Like exploring a maze by following one path to its end before trying another!"})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Time"}),n.jsx("span",{className:"op-desc",children:"Visit all nodes"}),n.jsx("span",{className:"op-complexity",children:"O(V+E)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Space"}),n.jsx("span",{className:"op-desc",children:"Stack storage"}),n.jsx("span",{className:"op-complexity",children:"O(V)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Structure"}),n.jsx("span",{className:"op-desc",children:"Uses a Stack"}),n.jsx("span",{className:"op-complexity",children:"LIFO"})]})]}),n.jsxs("div",{className:"concept-uses",children:[n.jsx("strong",{children:"Common Uses:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Topological sorting"}),n.jsx("li",{children:"Cycle detection"}),n.jsx("li",{children:"Solving mazes and puzzles"}),n.jsx("li",{children:"Finding connected components"})]})]})]})]}),n.jsx(xe,{context:"Depth-First Search (DFS) algorithm on graphs"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"DFS Controls"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Load Graph Preset"}),n.jsxs("div",{className:"btn-group preset-group",children:[n.jsx("button",{onClick:()=>K("simple"),className:"btn btn-preset",disabled:d,children:"Simple"}),n.jsx("button",{onClick:()=>K("tree"),className:"btn btn-preset",disabled:d,children:"Tree"}),n.jsx("button",{onClick:()=>K("cyclic"),className:"btn btn-preset",disabled:d,children:"Cyclic"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Start DFS From"}),n.jsxs("select",{value:r,onChange:y=>s(y.target.value),className:"vertex-select full-width",disabled:d,children:[n.jsx("option",{value:"",children:"Select start vertex"}),e.vertices.map(y=>n.jsx("option",{value:y,children:y},y))]})]}),n.jsx("div",{className:"operation-group",children:n.jsxs("div",{className:"btn-group",children:[n.jsxs("button",{onClick:$,className:"btn btn-dfs",disabled:d&&!m,children:[n.jsx(Ae,{size:14})," Run DFS"]}),d&&n.jsx("button",{onClick:b,className:"btn btn-pause",children:m?n.jsx(Ae,{size:14}):n.jsx(wt,{size:14})}),m&&n.jsx("button",{onClick:M,className:"btn btn-step",children:n.jsx(St,{size:14})}),n.jsx("button",{onClick:C,className:"btn btn-reset",children:n.jsx(at,{size:14})})]})}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Vertices:"}),n.jsx("span",{className:"info-value",children:e.vertex_count||e.vertices.length})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Edges:"}),n.jsx("span",{className:"info-value",children:e.edge_count||0})]}),g.length>0&&n.jsxs("div",{className:"info-item stack-display",children:[n.jsx("span",{className:"info-label",children:"Stack:"}),n.jsxs("span",{className:"info-value stack-items",children:["[",g.join(", "),"]"]})]}),a.length>0&&n.jsxs("div",{className:"info-item traversal-result",children:[n.jsx("span",{className:"info-label",children:"Order:"}),n.jsx("span",{className:"info-value",children:a.join(" → ")})]})]}),n.jsx(Be,{message:V}),n.jsxs("div",{className:"legend",children:[n.jsx("h3",{children:"Legend"}),n.jsxs("div",{className:"legend-items",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color unvisited"}),n.jsx("span",{children:"Unvisited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color stacked"}),n.jsx("span",{children:"In Stack"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color current"}),n.jsx("span",{children:"Current"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color visited"}),n.jsx("span",{children:"Visited"})]})]})]})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"DFS Visualization"}),n.jsx("div",{className:"graph-container",children:e.vertices.length===0?n.jsx("div",{className:"graph-empty",children:"Loading graph..."}):n.jsxs("svg",{className:"graph-svg",viewBox:"0 0 500 350",children:[e.edges.map(([y,O],A)=>{const L=P[y],R=P[O];return!L||!R?null:n.jsx("line",{x1:L.x,y1:L.y,x2:R.x,y2:R.y,className:"graph-edge"},`edge-${A}`)}),e.vertices.map(y=>{const O=P[y];return O?n.jsxs("g",{className:E(y),children:[n.jsx("circle",{cx:O.x,cy:O.y,r:25,className:"node-circle"}),n.jsx("text",{x:O.x,y:O.y,className:"node-label",dominantBaseline:"central",textAnchor:"middle",children:y})]},y):null})]})}),n.jsxs("div",{className:"algorithm-steps",children:[n.jsx("h3",{children:"DFS Algorithm Steps"}),n.jsx("div",{className:"steps-content",children:n.jsxs("ol",{children:[n.jsx("li",{className:c>=0?"active":"",children:"Start at the selected vertex"}),n.jsx("li",{className:g.length>0?"active":"",children:"Push it to a stack and mark as visited"}),n.jsx("li",{className:x?"active":"",children:"Pop a vertex and explore one unvisited neighbor"}),n.jsx("li",{children:"Push the neighbor to stack and repeat"}),n.jsx("li",{children:"Backtrack when no unvisited neighbors remain"})]})})]})]})]}),n.jsx(ye,{dataStructure:"dfs"})]})}function k0(){const[e,t]=u.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=u.useState(""),[a,i]=u.useState(""),[l,o]=u.useState({}),[c,h]=u.useState({}),[d,p]=u.useState([]),[m,S]=u.useState(-1),[w,N]=u.useState(!1),[x,f]=u.useState(!1),[g,v]=u.useState(new Set),[P,k]=u.useState(null),[V,T]=u.useState(null),[D,F]=u.useState({}),{message:I,showMessage:H}=He(3e3),K=u.useRef(null),$=u.useRef(0);u.useEffect(()=>{b()},[]),u.useEffect(()=>{e.vertices.length>0&&q()},[e.vertices]);const q=u.useCallback(()=>{const J=Math.min(500,350)*.35,te={},fe=e.vertices.length;e.vertices.forEach((Ce,In)=>{const it=2*Math.PI*In/fe-Math.PI/2;te[Ce]={x:250+J*Math.cos(it),y:175+J*Math.sin(it)}}),F(te)},[e.vertices]),b=async()=>{try{const j=await ie("/api/graph");j.vertices.length===0?await z("weighted"):t(j)}catch(j){console.error("Error loading graph:",j)}},z=async j=>{try{const B=await ee(`/api/graph/preset/${j}`,{});if(B.error){H(B.error,"error");return}t(B),A(),H(`Loaded '${j}' preset`,"success")}catch{H("Error loading preset","error")}},M=async()=>{if(!r){H("Please select a start vertex!","error");return}try{const j=a?`/api/graph/dijkstra/${r}?end=${a}`:`/api/graph/dijkstra/${r}`,B=await ie(j);if(B.error){H(B.error,"error");return}o(B.distances),h(B.paths),p(B.steps),H("Starting Dijkstra's algorithm...","info"),C(B.steps)}catch{H("Error running Dijkstra's algorithm","error")}},C=j=>{K.current&&clearInterval(K.current),N(!0),f(!1),v(new Set),k(null),T(null),S(-1),$.current=0,K.current=setInterval(()=>{if($.current>=j.length){clearInterval(K.current),N(!1),k(null),T(null),H("Dijkstra's algorithm complete!","success");return}const B=j[$.current];S($.current),o(B.distances||{}),v(new Set(B.visited||[])),B.action==="visit"?(k(B.current),T(null)):(B.action==="check"||B.action==="update")&&(k(B.current),T({from:B.current,to:B.neighbor})),$.current++},1200)},E=()=>{x?(f(!1),y()):(f(!0),K.current&&clearInterval(K.current))},y=()=>{K.current&&clearInterval(K.current),K.current=setInterval(()=>{if($.current>=d.length){clearInterval(K.current),N(!1),k(null),T(null);return}const j=d[$.current];S($.current),o(j.distances||{}),v(new Set(j.visited||[])),j.action==="visit"?(k(j.current),T(null)):(j.action==="check"||j.action==="update")&&(k(j.current),T({from:j.current,to:j.neighbor})),$.current++},1200)},O=()=>{if($.current>=d.length)return;const j=d[$.current];S($.current),o(j.distances||{}),v(new Set(j.visited||[])),j.action==="visit"?(k(j.current),T(null)):(j.action==="check"||j.action==="update")&&(k(j.current),T({from:j.current,to:j.neighbor})),$.current++,$.current>=d.length&&(N(!1),k(null),T(null))},A=()=>{K.current&&clearInterval(K.current),o({}),h({}),p([]),S(-1),v(new Set),k(null),T(null),N(!1),f(!1),$.current=0},L=j=>P===j?"graph-node current":g.has(j)?"graph-node visited":"graph-node",R=(j,B)=>V&&(V.from===j&&V.to===B||V.from===B&&V.to===j)?"graph-edge checking":"graph-edge",_=()=>m>=0&&m<d.length?d[m].message:"";return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Oe,{className:"icon-sm"}),n.jsx("span",{children:"What is Dijkstra's Algorithm?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"Dijkstra's Algorithm"})," finds the shortest path from a source vertex to all other vertices in a weighted graph with non-negative weights."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(ve,{}),n.jsx("span",{children:"Like GPS finding the quickest route - always picks the closest unvisited location!"})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Time"}),n.jsx("span",{className:"op-desc",children:"With min-heap"}),n.jsx("span",{className:"op-complexity",children:"O((V+E)logV)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Space"}),n.jsx("span",{className:"op-desc",children:"Distance array"}),n.jsx("span",{className:"op-complexity",children:"O(V)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Strategy"}),n.jsx("span",{className:"op-desc",children:"Greedy"}),n.jsx("span",{className:"op-complexity",children:"Min first"})]})]}),n.jsxs("div",{className:"concept-uses",children:[n.jsx("strong",{children:"Common Uses:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"GPS navigation systems"}),n.jsx("li",{children:"Network routing protocols"}),n.jsx("li",{children:"Social network analysis"}),n.jsx("li",{children:"Game pathfinding"})]})]})]})]}),n.jsx(xe,{context:"Dijkstra's shortest path algorithm"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Dijkstra's Algorithm"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Load Preset"}),n.jsxs("div",{className:"btn-group preset-group",children:[n.jsx("button",{onClick:()=>z("weighted"),className:"btn btn-preset",disabled:w,children:"Weighted"}),n.jsx("button",{onClick:()=>z("simple"),className:"btn btn-preset",disabled:w,children:"Simple"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Start Vertex"}),n.jsxs("select",{value:r,onChange:j=>s(j.target.value),className:"vertex-select full-width",disabled:w,children:[n.jsx("option",{value:"",children:"Select start"}),e.vertices.map(j=>n.jsx("option",{value:j,children:j},j))]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"End Vertex (Optional)"}),n.jsxs("select",{value:a,onChange:j=>i(j.target.value),className:"vertex-select full-width",disabled:w,children:[n.jsx("option",{value:"",children:"All vertices"}),e.vertices.map(j=>n.jsx("option",{value:j,children:j},j))]})]}),n.jsx("div",{className:"operation-group",children:n.jsxs("div",{className:"btn-group",children:[n.jsxs("button",{onClick:M,className:"btn btn-dijkstra",disabled:w&&!x,children:[n.jsx(Ae,{size:14})," Run"]}),w&&n.jsx("button",{onClick:E,className:"btn btn-pause",children:x?n.jsx(Ae,{size:14}):n.jsx(wt,{size:14})}),x&&n.jsx("button",{onClick:O,className:"btn btn-step",children:n.jsx(St,{size:14})}),n.jsx("button",{onClick:A,className:"btn btn-reset",children:n.jsx(at,{size:14})})]})}),Object.keys(l).length>0&&n.jsxs("div",{className:"distance-table",children:[n.jsxs("h3",{children:["Distances from ",r]}),n.jsx("div",{className:"distance-grid",children:e.vertices.map(j=>n.jsxs("div",{className:`distance-item ${g.has(j)?"visited":""} ${P===j?"current":""}`,children:[n.jsx("span",{className:"vertex-label",children:j}),n.jsx("span",{className:"distance-value",children:l[j]==="inf"||l[j]===null?"∞":l[j]})]},j))})]}),m>=0&&n.jsxs("div",{className:"current-step-box",children:[n.jsxs("strong",{children:["Step ",m+1,":"]}),n.jsx("p",{children:_()})]}),n.jsx(Be,{message:I}),n.jsxs("div",{className:"legend",children:[n.jsx("h3",{children:"Legend"}),n.jsxs("div",{className:"legend-items",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color unvisited"}),n.jsx("span",{children:"Unvisited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color current"}),n.jsx("span",{children:"Current"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color visited"}),n.jsx("span",{children:"Visited"})]})]})]})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Visualization"}),n.jsx("div",{className:"graph-container",children:e.vertices.length===0?n.jsx("div",{className:"graph-empty",children:"Loading graph..."}):n.jsxs("svg",{className:"graph-svg",viewBox:"0 0 500 350",children:[e.edges.map(([j,B,Q],Y)=>{const J=D[j],te=D[B];if(!J||!te)return null;const fe=(J.x+te.x)/2,Ce=(J.y+te.y)/2;return n.jsxs("g",{children:[n.jsx("line",{x1:J.x,y1:J.y,x2:te.x,y2:te.y,className:R(j,B)}),n.jsx("circle",{cx:fe,cy:Ce,r:12,className:"weight-bg"}),n.jsx("text",{x:fe,y:Ce,className:"weight-label",dominantBaseline:"central",textAnchor:"middle",children:Q})]},`edge-${Y}`)}),e.vertices.map(j=>{const B=D[j];return B?n.jsxs("g",{className:L(j),children:[n.jsx("circle",{cx:B.x,cy:B.y,r:25,className:"node-circle"}),n.jsx("text",{x:B.x,y:B.y,className:"node-label",dominantBaseline:"central",textAnchor:"middle",children:j}),l[j]!==void 0&&n.jsxs("text",{x:B.x,y:B.y+38,className:"distance-label",dominantBaseline:"central",textAnchor:"middle",children:["d=",l[j]==="inf"||l[j]===null?"∞":l[j]]})]},j):null})]})}),Object.keys(c).length>0&&!w&&n.jsxs("div",{className:"paths-section",children:[n.jsxs("h3",{children:["Shortest Paths from ",r]}),n.jsx("div",{className:"paths-list",children:Object.entries(c).map(([j,B])=>n.jsxs("div",{className:"path-item",children:[n.jsxs("span",{className:"path-target",children:[j,":"]}),n.jsx("span",{className:"path-route",children:B.join(" → ")}),n.jsxs("span",{className:"path-distance",children:["(dist: ",l[j]===null?"∞":l[j],")"]})]},j))})]})]})]}),n.jsx(ye,{dataStructure:"dijkstra"})]})}function b0(){const[e,t]=u.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=u.useState(""),[a,i]=u.useState([]),[l,o]=u.useState(0),[c,h]=u.useState([]),[d,p]=u.useState(-1),[m,S]=u.useState(!1),[w,N]=u.useState(!1),[x,f]=u.useState(new Set),[g,v]=u.useState(null),[P,k]=u.useState(null),[V,T]=u.useState({}),{message:D,showMessage:F}=He(3e3),I=u.useRef(null),H=u.useRef(0);u.useEffect(()=>{$()},[]),u.useEffect(()=>{e.vertices.length>0&&K()},[e.vertices]);const K=u.useCallback(()=>{const Y=Math.min(500,350)*.35,J={},te=e.vertices.length;e.vertices.forEach((fe,Ce)=>{const In=2*Math.PI*Ce/te-Math.PI/2;J[fe]={x:250+Y*Math.cos(In),y:175+Y*Math.sin(In)}}),T(J)},[e.vertices]),$=async()=>{try{const _=await ie("/api/graph");_.vertices.length===0?await q("weighted"):t(_)}catch(_){console.error("Error loading graph:",_)}},q=async _=>{try{const j=await ee(`/api/graph/preset/${_}`,{});if(j.error){F(j.error,"error");return}t(j),y(),F(`Loaded '${_}' preset`,"success")}catch{F("Error loading preset","error")}},b=async()=>{try{const _=r?`/api/graph/mst?start=${r}`:"/api/graph/mst",j=await ie(_);if(j.error){F(j.error,"error");return}h(j.steps),F("Starting Prim's MST algorithm...","info"),z(j.steps,j.mst_edges,j.total_weight)}catch{F("Error running MST algorithm","error")}},z=(_,j,B)=>{I.current&&clearInterval(I.current),S(!0),N(!1),f(new Set),i([]),o(0),v(null),k(null),p(-1),H.current=0,I.current=setInterval(()=>{if(H.current>=_.length){clearInterval(I.current),S(!1),v(null),k(null),i(j),o(B),F(`MST complete! Total weight: ${B}`,"success");return}const Q=_[H.current];p(H.current),f(new Set(Q.visited||[])),i(Q.mst_edges||[]),o(Q.total_weight||0),Q.action==="add"?(v(Q.current),k(null)):Q.action==="consider"&&(v(Q.current),k({from:Q.current,to:Q.neighbor,weight:Q.weight})),H.current++},1e3)},M=()=>{w?(N(!1),C()):(N(!0),I.current&&clearInterval(I.current))},C=()=>{I.current&&clearInterval(I.current),I.current=setInterval(()=>{if(H.current>=c.length){clearInterval(I.current),S(!1),v(null),k(null);return}const _=c[H.current];p(H.current),f(new Set(_.visited||[])),i(_.mst_edges||[]),o(_.total_weight||0),_.action==="add"?(v(_.current),k(null)):_.action==="consider"&&(v(_.current),k({from:_.current,to:_.neighbor,weight:_.weight})),H.current++},1e3)},E=()=>{if(H.current>=c.length)return;const _=c[H.current];p(H.current),f(new Set(_.visited||[])),i(_.mst_edges||[]),o(_.total_weight||0),_.action==="add"?(v(_.current),k(null)):_.action==="consider"&&(v(_.current),k({from:_.current,to:_.neighbor,weight:_.weight})),H.current++,H.current>=c.length&&(S(!1),v(null),k(null))},y=()=>{I.current&&clearInterval(I.current),i([]),o(0),h([]),p(-1),f(new Set),v(null),k(null),S(!1),N(!1),H.current=0},O=_=>g===_?"graph-node current":x.has(_)?"graph-node visited":"graph-node",A=(_,j)=>a.some(([B,Q])=>B===_&&Q===j||B===j&&Q===_),L=(_,j)=>P&&(P.from===_&&P.to===j||P.from===j&&P.to===_)?"graph-edge considering":A(_,j)?"graph-edge mst":"graph-edge",R=()=>d>=0&&d<c.length?c[d].message:"";return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Oe,{className:"icon-sm"}),n.jsx("span",{children:"What is Minimum Spanning Tree?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:["A ",n.jsx("strong",{children:"Minimum Spanning Tree (MST)"})," connects all vertices with the minimum total edge weight, without any cycles."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(ve,{}),n.jsx("span",{children:"Like finding the cheapest way to connect all cities with roads!"})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Time"}),n.jsx("span",{className:"op-desc",children:"Prim's with heap"}),n.jsx("span",{className:"op-complexity",children:"O((V+E)logV)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Edges"}),n.jsx("span",{className:"op-desc",children:"In MST"}),n.jsx("span",{className:"op-complexity",children:"V - 1"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Strategy"}),n.jsx("span",{className:"op-desc",children:"Greedy"}),n.jsx("span",{className:"op-complexity",children:"Min edge"})]})]}),n.jsxs("div",{className:"concept-uses",children:[n.jsx("strong",{children:"Common Uses:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Network design (cables, pipes)"}),n.jsx("li",{children:"Cluster analysis"}),n.jsx("li",{children:"Image segmentation"}),n.jsx("li",{children:"Approximation algorithms"})]})]})]})]}),n.jsx(xe,{context:"Minimum Spanning Tree, Prim's algorithm"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Prim's MST Algorithm"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Load Preset"}),n.jsxs("div",{className:"btn-group preset-group",children:[n.jsx("button",{onClick:()=>q("weighted"),className:"btn btn-preset",disabled:m,children:"Weighted"}),n.jsx("button",{onClick:()=>q("complete"),className:"btn btn-preset",disabled:m,children:"Complete"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Start Vertex (Optional)"}),n.jsxs("select",{value:r,onChange:_=>s(_.target.value),className:"vertex-select full-width",disabled:m,children:[n.jsx("option",{value:"",children:"Auto (first vertex)"}),e.vertices.map(_=>n.jsx("option",{value:_,children:_},_))]})]}),n.jsx("div",{className:"operation-group",children:n.jsxs("div",{className:"btn-group",children:[n.jsxs("button",{onClick:b,className:"btn btn-mst",disabled:m&&!w,children:[n.jsx(Ae,{size:14})," Run MST"]}),m&&n.jsx("button",{onClick:M,className:"btn btn-pause",children:w?n.jsx(Ae,{size:14}):n.jsx(wt,{size:14})}),w&&n.jsx("button",{onClick:E,className:"btn btn-step",children:n.jsx(St,{size:14})}),n.jsx("button",{onClick:y,className:"btn btn-reset",children:n.jsx(at,{size:14})})]})}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"MST Edges:"}),n.jsxs("span",{className:"info-value",children:[a.length," / ",e.vertices.length-1]})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Total Weight:"}),n.jsx("span",{className:"info-value mst-weight",children:l})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Visited:"}),n.jsxs("span",{className:"info-value",children:[x.size," / ",e.vertices.length]})]})]}),d>=0&&n.jsxs("div",{className:"current-step-box",children:[n.jsxs("strong",{children:["Step ",d+1,":"]}),n.jsx("p",{children:R()})]}),n.jsx(Be,{message:D}),n.jsxs("div",{className:"legend",children:[n.jsx("h3",{children:"Legend"}),n.jsxs("div",{className:"legend-items",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color unvisited"}),n.jsx("span",{children:"Unvisited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color current"}),n.jsx("span",{children:"Current"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color visited"}),n.jsx("span",{children:"In MST"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-line mst"}),n.jsx("span",{children:"MST Edge"})]})]})]})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Visualization"}),n.jsx("div",{className:"graph-container",children:e.vertices.length===0?n.jsx("div",{className:"graph-empty",children:"Loading graph..."}):n.jsxs("svg",{className:"graph-svg",viewBox:"0 0 500 350",children:[e.edges.map(([_,j,B],Q)=>{const Y=V[_],J=V[j];if(!Y||!J)return null;const te=(Y.x+J.x)/2,fe=(Y.y+J.y)/2;return n.jsxs("g",{children:[n.jsx("line",{x1:Y.x,y1:Y.y,x2:J.x,y2:J.y,className:L(_,j)}),n.jsx("circle",{cx:te,cy:fe,r:12,className:"weight-bg"}),n.jsx("text",{x:te,y:fe,className:"weight-label",dominantBaseline:"central",textAnchor:"middle",children:B})]},`edge-${Q}`)}),e.vertices.map(_=>{const j=V[_];return j?n.jsxs("g",{className:O(_),children:[n.jsx("circle",{cx:j.x,cy:j.y,r:25,className:"node-circle"}),n.jsx("text",{x:j.x,y:j.y,className:"node-label",dominantBaseline:"central",textAnchor:"middle",children:_})]},_):null})]})}),a.length>0&&n.jsxs("div",{className:"mst-edges-section",children:[n.jsx("h3",{children:"MST Edges"}),n.jsx("div",{className:"mst-edges-list",children:a.map(([_,j,B],Q)=>n.jsxs("div",{className:"mst-edge-item",children:[n.jsxs("span",{children:[_," — ",j]}),n.jsxs("span",{className:"edge-weight",children:["(w: ",B,")"]})]},Q))}),n.jsx("div",{className:"mst-total",children:n.jsxs("strong",{children:["Total MST Weight: ",l]})})]})]})]}),n.jsx(ye,{dataStructure:"graph"})]})}function w0(){const[e,t]=u.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=u.useState([]),[a,i]=u.useState({}),[l,o]=u.useState([]),[c,h]=u.useState(-1),[d,p]=u.useState(!1),[m,S]=u.useState(!1),[w,N]=u.useState(new Set),[x,f]=u.useState(null),[g,v]=u.useState([]),[P,k]=u.useState(!1),[V,T]=u.useState({}),{message:D,showMessage:F}=He(3e3),I=u.useRef(null),H=u.useRef(0);u.useEffect(()=>{$()},[]),u.useEffect(()=>{e.vertices.length>0&&K()},[e.vertices]);const K=u.useCallback(()=>{const B=Math.min(500,350)*.35,Q={},Y=e.vertices.length;e.vertices.forEach((J,te)=>{const fe=2*Math.PI*te/Y-Math.PI/2;Q[J]={x:250+B*Math.cos(fe),y:175+B*Math.sin(fe)}}),T(Q)},[e.vertices]),$=async()=>{try{const L=await ie("/api/graph");L.vertices.length===0?await q("dag"):t(L)}catch(L){console.error("Error loading graph:",L)}},q=async L=>{try{const R=await ee(`/api/graph/preset/${L}`,{});if(R.error){F(R.error,"error");return}t(R),y(),F(`Loaded '${L}' preset`,"success")}catch{F("Error loading preset","error")}},b=async()=>{try{const L=await ie("/api/graph/topological");if(L.error){F(L.error,"error");return}if(L.has_cycle){k(!0),F("Graph has a cycle - topological sort not possible!","error");return}k(!1),s(L.sorted||[]),o(L.steps),F("Starting Topological Sort (Kahn's Algorithm)...","info"),z(L.steps)}catch{F("Error running topological sort","error")}},z=L=>{I.current&&clearInterval(I.current),p(!0),S(!1),N(new Set),f(null),v([]),i({}),h(-1),H.current=0,I.current=setInterval(()=>{if(H.current>=L.length){clearInterval(I.current),p(!1),f(null),F(`Topological Sort Complete: ${r.join(" → ")}`,"success");return}const R=L[H.current];h(H.current),i(R.in_degrees||{}),v(R.queue||[]),R.action==="process"?(f(R.vertex),N(new Set(R.result||[]))):R.action==="decrement"||R.action==="enqueue"?f(R.vertex||R.neighbor):R.action==="init"&&(i(R.in_degrees||{}),v(R.queue||[])),H.current++},1e3)},M=()=>{m?(S(!1),C()):(S(!0),I.current&&clearInterval(I.current))},C=()=>{I.current&&clearInterval(I.current),I.current=setInterval(()=>{if(H.current>=l.length){clearInterval(I.current),p(!1),f(null);return}const L=l[H.current];h(H.current),i(L.in_degrees||{}),v(L.queue||[]),L.action==="process"?(f(L.vertex),N(new Set(L.result||[]))):(L.action==="decrement"||L.action==="enqueue")&&f(L.vertex||L.neighbor),H.current++},1e3)},E=()=>{if(H.current>=l.length)return;const L=l[H.current];h(H.current),i(L.in_degrees||{}),v(L.queue||[]),L.action==="process"?(f(L.vertex),N(new Set(L.result||[]))):(L.action==="decrement"||L.action==="enqueue")&&f(L.vertex||L.neighbor),H.current++,H.current>=l.length&&(p(!1),f(null))},y=()=>{I.current&&clearInterval(I.current),s([]),i({}),o([]),h(-1),N(new Set),f(null),v([]),k(!1),p(!1),S(!1),H.current=0},O=L=>x===L?"graph-node current":w.has(L)?"graph-node visited":g.includes(L)?"graph-node queued":"graph-node",A=()=>c>=0&&c<l.length?l[c].message:"";return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Oe,{className:"icon-sm"}),n.jsx("span",{children:"What is Topological Sort?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"Topological Sort"})," orders vertices in a directed acyclic graph (DAG) so that for every edge u→v, u comes before v in the ordering."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(ve,{}),n.jsx("span",{children:"Like scheduling tasks - you must complete prerequisites before dependent tasks!"})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Time"}),n.jsx("span",{className:"op-desc",children:"Kahn's Algorithm"}),n.jsx("span",{className:"op-complexity",children:"O(V+E)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Space"}),n.jsx("span",{className:"op-desc",children:"In-degree array"}),n.jsx("span",{className:"op-complexity",children:"O(V)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Requirement"}),n.jsx("span",{className:"op-desc",children:"Graph type"}),n.jsx("span",{className:"op-complexity",children:"DAG only"})]})]}),n.jsxs("div",{className:"concept-uses",children:[n.jsx("strong",{children:"Common Uses:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Task scheduling with dependencies"}),n.jsx("li",{children:"Build systems (Makefile)"}),n.jsx("li",{children:"Course prerequisite planning"}),n.jsx("li",{children:"Package dependency resolution"})]})]})]})]}),n.jsx(xe,{context:"Topological Sort using Kahn's Algorithm on directed acyclic graphs"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Topological Sort"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Load Graph Preset"}),n.jsxs("div",{className:"btn-group preset-group",children:[n.jsx("button",{onClick:()=>q("dag"),className:"btn btn-preset",disabled:d,children:"DAG"}),n.jsx("button",{onClick:()=>q("tree"),className:"btn btn-preset",disabled:d,children:"Tree"}),n.jsx("button",{onClick:()=>q("simple"),className:"btn btn-preset",disabled:d,children:"Simple"})]})]}),n.jsx("div",{className:"operation-group",children:n.jsxs("div",{className:"btn-group",children:[n.jsxs("button",{onClick:b,className:"btn btn-bfs",disabled:d&&!m,children:[n.jsx(Ae,{size:14})," Run Sort"]}),d&&n.jsx("button",{onClick:M,className:"btn btn-pause",children:m?n.jsx(Ae,{size:14}):n.jsx(wt,{size:14})}),m&&n.jsx("button",{onClick:E,className:"btn btn-step",children:n.jsx(St,{size:14})}),n.jsx("button",{onClick:y,className:"btn btn-reset",children:n.jsx(at,{size:14})})]})}),Object.keys(a).length>0&&n.jsxs("div",{className:"distance-table",children:[n.jsx("h3",{children:"In-Degrees"}),n.jsx("div",{className:"distance-grid",children:e.vertices.map(L=>n.jsxs("div",{className:`distance-item ${w.has(L)?"visited":""} ${x===L?"current":""}`,children:[n.jsx("span",{className:"vertex-label",children:L}),n.jsx("span",{className:"distance-value",children:a[L]??"-"})]},L))})]}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Vertices:"}),n.jsx("span",{className:"info-value",children:e.vertex_count||e.vertices.length})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Edges:"}),n.jsx("span",{className:"info-value",children:e.edge_count||0})]}),g.length>0&&n.jsxs("div",{className:"info-item queue-display",children:[n.jsx("span",{className:"info-label",children:"Queue:"}),n.jsxs("span",{className:"info-value queue-items",children:["[",g.join(", "),"]"]})]}),r.length>0&&!d&&n.jsxs("div",{className:"info-item traversal-result",children:[n.jsx("span",{className:"info-label",children:"Order:"}),n.jsx("span",{className:"info-value",children:r.join(" → ")})]})]}),c>=0&&n.jsxs("div",{className:"current-step-box",children:[n.jsxs("strong",{children:["Step ",c+1,":"]}),n.jsx("p",{children:A()})]}),n.jsx(Be,{message:D}),P&&n.jsxs("div",{className:"warning-box",children:[n.jsx("strong",{children:"Cycle Detected!"}),n.jsx("p",{children:"Topological sort is only possible on Directed Acyclic Graphs (DAGs)."})]}),n.jsxs("div",{className:"legend",children:[n.jsx("h3",{children:"Legend"}),n.jsxs("div",{className:"legend-items",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color unvisited"}),n.jsx("span",{children:"Unprocessed"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color queued"}),n.jsx("span",{children:"In Queue (in-degree 0)"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color current"}),n.jsx("span",{children:"Current"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color visited"}),n.jsx("span",{children:"Processed"})]})]})]})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Visualization"}),n.jsx("div",{className:"graph-container",children:e.vertices.length===0?n.jsx("div",{className:"graph-empty",children:"Loading graph..."}):n.jsxs("svg",{className:"graph-svg",viewBox:"0 0 500 350",children:[e.edges.map(([L,R,_],j)=>{const B=V[L],Q=V[R];if(!B||!Q)return null;const Y=Q.x-B.x,J=Q.y-B.y,te=Math.sqrt(Y*Y+J*J),fe=Y/te,Ce=J/te,In=B.x+fe*25,it=B.y+Ce*25,Fh=Q.x-fe*30,Dh=Q.y-Ce*30;return n.jsxs("g",{children:[n.jsx("defs",{children:n.jsx("marker",{id:`arrowhead-${j}`,markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:n.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#64748b"})})}),n.jsx("line",{x1:In,y1:it,x2:Fh,y2:Dh,className:"graph-edge",markerEnd:`url(#arrowhead-${j})`})]},`edge-${j}`)}),e.vertices.map(L=>{const R=V[L];return R?n.jsxs("g",{className:O(L),children:[n.jsx("circle",{cx:R.x,cy:R.y,r:25,className:"node-circle"}),n.jsx("text",{x:R.x,y:R.y,className:"node-label",dominantBaseline:"central",textAnchor:"middle",children:L}),a[L]!==void 0&&n.jsxs("text",{x:R.x,y:R.y+38,className:"distance-label",dominantBaseline:"central",textAnchor:"middle",children:["in=",a[L]]})]},L):null})]})}),n.jsxs("div",{className:"algorithm-steps",children:[n.jsx("h3",{children:"Kahn's Algorithm Steps"}),n.jsx("div",{className:"steps-content",children:n.jsxs("ol",{children:[n.jsx("li",{className:c===0?"active":"",children:"Calculate in-degree for all vertices"}),n.jsx("li",{className:g.length>0?"active":"",children:"Add vertices with in-degree 0 to queue"}),n.jsx("li",{className:x?"active":"",children:"Dequeue vertex and add to result"}),n.jsx("li",{children:"Decrement in-degree of neighbors"}),n.jsx("li",{children:"Add neighbors with in-degree 0 to queue"}),n.jsx("li",{children:"Repeat until queue is empty"})]})})]})]})]}),n.jsx(ye,{dataStructure:"topological"})]})}function S0(){const[e,t]=u.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=u.useState(""),[a,i]=u.useState({}),[l,o]=u.useState({}),[c,h]=u.useState([]),[d,p]=u.useState(-1),[m,S]=u.useState(0),[w,N]=u.useState(!1),[x,f]=u.useState(!1),[g,v]=u.useState(null),[P,k]=u.useState(null),[V,T]=u.useState(!1),[D,F]=u.useState({}),{message:I,showMessage:H}=He(3e3),K=u.useRef(null),$=u.useRef(0);u.useEffect(()=>{b()},[]),u.useEffect(()=>{e.vertices.length>0&&q()},[e.vertices]);const q=u.useCallback(()=>{const J=Math.min(500,350)*.35,te={},fe=e.vertices.length;e.vertices.forEach((Ce,In)=>{const it=2*Math.PI*In/fe-Math.PI/2;te[Ce]={x:250+J*Math.cos(it),y:175+J*Math.sin(it)}}),F(te)},[e.vertices]),b=async()=>{try{const j=await ie("/api/graph");j.vertices.length===0?await z("weighted"):t(j)}catch(j){console.error("Error loading graph:",j)}},z=async j=>{try{const B=await ee(`/api/graph/preset/${j}`,{});if(B.error){H(B.error,"error");return}t(B),A(),H(`Loaded '${j}' preset`,"success")}catch{H("Error loading preset","error")}},M=async()=>{if(!r){H("Please select a start vertex!","error");return}try{const j=await ie(`/api/graph/bellman-ford/${r}`);if(j.error){H(j.error,"error");return}i(j.distances),o(j.paths),h(j.steps),T(j.has_negative_cycle),j.has_negative_cycle?H("Negative cycle detected in graph!","error"):H("Starting Bellman-Ford algorithm...","info"),C(j.steps)}catch{H("Error running Bellman-Ford algorithm","error")}},C=j=>{K.current&&clearInterval(K.current),N(!0),f(!1),v(null),k(null),S(0),p(-1),$.current=0,K.current=setInterval(()=>{if($.current>=j.length){clearInterval(K.current),N(!1),v(null),k(null),V||H("Bellman-Ford algorithm complete!","success");return}const B=j[$.current];p($.current),i(B.distances||{}),B.iteration&&S(B.iteration),B.action==="check"?(v({from:B.from,to:B.to}),k(null)):B.action==="update"?(v({from:B.from,to:B.to}),k(B.to)):B.action==="negative_cycle"?v({from:B.from,to:B.to}):(v(null),k(null)),$.current++},800)},E=()=>{x?(f(!1),y()):(f(!0),K.current&&clearInterval(K.current))},y=()=>{K.current&&clearInterval(K.current),K.current=setInterval(()=>{if($.current>=c.length){clearInterval(K.current),N(!1),v(null),k(null);return}const j=c[$.current];p($.current),i(j.distances||{}),j.iteration&&S(j.iteration),j.action==="check"?(v({from:j.from,to:j.to}),k(null)):j.action==="update"?(v({from:j.from,to:j.to}),k(j.to)):(v(null),k(null)),$.current++},800)},O=()=>{if($.current>=c.length)return;const j=c[$.current];p($.current),i(j.distances||{}),j.iteration&&S(j.iteration),j.action==="check"?(v({from:j.from,to:j.to}),k(null)):j.action==="update"?(v({from:j.from,to:j.to}),k(j.to)):(v(null),k(null)),$.current++,$.current>=c.length&&(N(!1),v(null),k(null))},A=()=>{K.current&&clearInterval(K.current),i({}),o({}),h([]),p(-1),S(0),v(null),k(null),T(!1),N(!1),f(!1),$.current=0},L=j=>P===j?"graph-node current":j===r&&!w&&Object.keys(a).length>0?"graph-node visited":"graph-node",R=(j,B)=>g&&(g.from===j&&g.to===B||g.from===B&&g.to===j)?"graph-edge checking":"graph-edge",_=()=>d>=0&&d<c.length?c[d].message:"";return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Oe,{className:"icon-sm"}),n.jsx("span",{children:"What is Bellman-Ford Algorithm?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"Bellman-Ford Algorithm"})," finds shortest paths from a source vertex, even with negative edge weights. It can also detect negative cycles."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(ve,{}),n.jsx("span",{children:"Unlike Dijkstra, it checks ALL edges V-1 times - slower but handles negative weights!"})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Time"}),n.jsx("span",{className:"op-desc",children:"V-1 iterations"}),n.jsx("span",{className:"op-complexity",children:"O(V*E)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Space"}),n.jsx("span",{className:"op-desc",children:"Distance array"}),n.jsx("span",{className:"op-complexity",children:"O(V)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Feature"}),n.jsx("span",{className:"op-desc",children:"Negative weights"}),n.jsx("span",{className:"op-complexity",children:"Supported"})]})]}),n.jsxs("div",{className:"concept-uses",children:[n.jsx("strong",{children:"Common Uses:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Currency exchange arbitrage detection"}),n.jsx("li",{children:"Network routing (RIP protocol)"}),n.jsx("li",{children:"Graphs with negative weights"}),n.jsx("li",{children:"Detecting negative cycles"})]})]})]})]}),n.jsx(xe,{context:"Bellman-Ford shortest path algorithm with negative weight handling"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Bellman-Ford Algorithm"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Load Preset"}),n.jsxs("div",{className:"btn-group preset-group",children:[n.jsx("button",{onClick:()=>z("weighted"),className:"btn btn-preset",disabled:w,children:"Weighted"}),n.jsx("button",{onClick:()=>z("simple"),className:"btn btn-preset",disabled:w,children:"Simple"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Start Vertex"}),n.jsxs("select",{value:r,onChange:j=>s(j.target.value),className:"vertex-select full-width",disabled:w,children:[n.jsx("option",{value:"",children:"Select start"}),e.vertices.map(j=>n.jsx("option",{value:j,children:j},j))]})]}),n.jsx("div",{className:"operation-group",children:n.jsxs("div",{className:"btn-group",children:[n.jsxs("button",{onClick:M,className:"btn btn-dijkstra",disabled:w&&!x,children:[n.jsx(Ae,{size:14})," Run"]}),w&&n.jsx("button",{onClick:E,className:"btn btn-pause",children:x?n.jsx(Ae,{size:14}):n.jsx(wt,{size:14})}),x&&n.jsx("button",{onClick:O,className:"btn btn-step",children:n.jsx(St,{size:14})}),n.jsx("button",{onClick:A,className:"btn btn-reset",children:n.jsx(at,{size:14})})]})}),m>0&&n.jsx("div",{className:"info-panel",children:n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Iteration:"}),n.jsxs("span",{className:"info-value",children:[m," / ",e.vertices.length-1]})]})}),Object.keys(a).length>0&&n.jsxs("div",{className:"distance-table",children:[n.jsxs("h3",{children:["Distances from ",r]}),n.jsx("div",{className:"distance-grid",children:e.vertices.map(j=>n.jsxs("div",{className:`distance-item ${P===j?"current":""}`,children:[n.jsx("span",{className:"vertex-label",children:j}),n.jsx("span",{className:"distance-value",children:a[j]==="inf"||a[j]===null?"∞":a[j]})]},j))})]}),d>=0&&n.jsxs("div",{className:"current-step-box",children:[n.jsxs("strong",{children:["Step ",d+1,":"]}),n.jsx("p",{children:_()})]}),n.jsx(Be,{message:I}),V&&n.jsxs("div",{className:"warning-box",children:[n.jsx("strong",{children:"Negative Cycle Detected!"}),n.jsx("p",{children:"The graph contains a negative weight cycle. Shortest paths are undefined."})]}),n.jsxs("div",{className:"legend",children:[n.jsx("h3",{children:"Legend"}),n.jsxs("div",{className:"legend-items",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color unvisited"}),n.jsx("span",{children:"Unprocessed"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color current"}),n.jsx("span",{children:"Updated"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color checking"}),n.jsx("span",{children:"Checking Edge"})]})]})]})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Visualization"}),n.jsx("div",{className:"graph-container",children:e.vertices.length===0?n.jsx("div",{className:"graph-empty",children:"Loading graph..."}):n.jsxs("svg",{className:"graph-svg",viewBox:"0 0 500 350",children:[e.edges.map(([j,B,Q],Y)=>{const J=D[j],te=D[B];if(!J||!te)return null;const fe=(J.x+te.x)/2,Ce=(J.y+te.y)/2;return n.jsxs("g",{children:[n.jsx("line",{x1:J.x,y1:J.y,x2:te.x,y2:te.y,className:R(j,B)}),n.jsx("circle",{cx:fe,cy:Ce,r:12,className:"weight-bg"}),n.jsx("text",{x:fe,y:Ce,className:"weight-label",dominantBaseline:"central",textAnchor:"middle",children:Q})]},`edge-${Y}`)}),e.vertices.map(j=>{const B=D[j];return B?n.jsxs("g",{className:L(j),children:[n.jsx("circle",{cx:B.x,cy:B.y,r:25,className:"node-circle"}),n.jsx("text",{x:B.x,y:B.y,className:"node-label",dominantBaseline:"central",textAnchor:"middle",children:j}),a[j]!==void 0&&n.jsxs("text",{x:B.x,y:B.y+38,className:"distance-label",dominantBaseline:"central",textAnchor:"middle",children:["d=",a[j]==="inf"||a[j]===null?"∞":a[j]]})]},j):null})]})}),n.jsxs("div",{className:"algorithm-steps",children:[n.jsx("h3",{children:"Bellman-Ford vs Dijkstra"}),n.jsxs("div",{className:"comparison-table",children:[n.jsxs("div",{className:"comparison-row header",children:[n.jsx("span",{children:"Feature"}),n.jsx("span",{children:"Bellman-Ford"}),n.jsx("span",{children:"Dijkstra"})]}),n.jsxs("div",{className:"comparison-row",children:[n.jsx("span",{children:"Time Complexity"}),n.jsx("span",{children:"O(V*E)"}),n.jsx("span",{children:"O((V+E)logV)"})]}),n.jsxs("div",{className:"comparison-row",children:[n.jsx("span",{children:"Negative Weights"}),n.jsx("span",{className:"yes",children:"Yes"}),n.jsx("span",{className:"no",children:"No"})]}),n.jsxs("div",{className:"comparison-row",children:[n.jsx("span",{children:"Detects Neg. Cycles"}),n.jsx("span",{className:"yes",children:"Yes"}),n.jsx("span",{className:"no",children:"No"})]})]})]}),Object.keys(l).length>0&&!w&&!V&&n.jsxs("div",{className:"paths-section",children:[n.jsxs("h3",{children:["Shortest Paths from ",r]}),n.jsx("div",{className:"paths-list",children:Object.entries(l).map(([j,B])=>n.jsxs("div",{className:"path-item",children:[n.jsxs("span",{className:"path-target",children:[j,":"]}),n.jsx("span",{className:"path-route",children:B.join(" → ")}),n.jsxs("span",{className:"path-distance",children:["(dist: ",a[j]===null?"∞":a[j],")"]})]},j))})]})]})]}),n.jsx(ye,{dataStructure:"bellman-ford"})]})}function C0(){const[e,t]=u.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=u.useState([]),[a,i]=u.useState([]),[l,o]=u.useState(0),[c,h]=u.useState([]),[d,p]=u.useState([]),[m,S]=u.useState(-1),[w,N]=u.useState(!1),[x,f]=u.useState(!1),[g,v]=u.useState(null),[P,k]=u.useState({}),{message:V,showMessage:T}=He(3e3),D=u.useRef(null),F=u.useRef(0);u.useEffect(()=>{H()},[]),u.useEffect(()=>{e.vertices.length>0&&I()},[e.vertices]);const I=u.useCallback(()=>{const Q=Math.min(500,350)*.35,Y={},J=e.vertices.length;e.vertices.forEach((te,fe)=>{const Ce=2*Math.PI*fe/J-Math.PI/2;Y[te]={x:250+Q*Math.cos(Ce),y:175+Q*Math.sin(Ce)}}),k(Y)},[e.vertices]),H=async()=>{try{const R=await ie("/api/graph");R.vertices.length===0?await K("weighted"):t(R)}catch(R){console.error("Error loading graph:",R)}},K=async R=>{try{const _=await ee(`/api/graph/preset/${R}`,{});if(_.error){T(_.error,"error");return}t(_),C(),T(`Loaded '${R}' preset`,"success")}catch{T("Error loading preset","error")}},$=async()=>{try{const R=await ie("/api/graph/kruskal");if(R.error){T(R.error,"error");return}p(R.steps);const _=R.steps.find(j=>j.action==="init");_&&h(_.edges_sorted||[]),T("Starting Kruskal's MST algorithm...","info"),q(R.steps,R.mst_edges,R.total_weight)}catch{T("Error running Kruskal's algorithm","error")}},q=(R,_,j)=>{D.current&&clearInterval(D.current),N(!0),f(!1),s([]),i([]),o(0),v(null),S(-1),F.current=0,D.current=setInterval(()=>{if(F.current>=R.length){clearInterval(D.current),N(!1),v(null),s(_),o(j),T(`MST complete! Total weight: ${j}`,"success");return}const B=R[F.current];S(F.current),s(B.mst_edges||[]),o(B.total_weight||0),B.action==="consider"?v({from:B.from,to:B.to,weight:B.weight}):(B.action==="add"||B.action==="reject"&&i(Q=>[...Q,{from:B.from,to:B.to,weight:B.weight}]),v(null)),F.current++},1e3)},b=()=>{x?(f(!1),z()):(f(!0),D.current&&clearInterval(D.current))},z=()=>{D.current&&clearInterval(D.current),D.current=setInterval(()=>{if(F.current>=d.length){clearInterval(D.current),N(!1),v(null);return}const R=d[F.current];S(F.current),s(R.mst_edges||[]),o(R.total_weight||0),R.action==="consider"?v({from:R.from,to:R.to,weight:R.weight}):(R.action==="add"||R.action==="reject"&&i(_=>[..._,{from:R.from,to:R.to,weight:R.weight}]),v(null)),F.current++},1e3)},M=()=>{if(F.current>=d.length)return;const R=d[F.current];S(F.current),s(R.mst_edges||[]),o(R.total_weight||0),R.action==="consider"?v({from:R.from,to:R.to,weight:R.weight}):(R.action==="add"||R.action==="reject"&&i(_=>[..._,{from:R.from,to:R.to,weight:R.weight}]),v(null)),F.current++,F.current>=d.length&&(N(!1),v(null))},C=()=>{D.current&&clearInterval(D.current),s([]),i([]),o(0),h([]),p([]),S(-1),v(null),N(!1),f(!1),F.current=0},E=(R,_)=>r.some(([j,B])=>j===R&&B===_||j===_&&B===R),y=(R,_)=>a.some(j=>j.from===R&&j.to===_||j.from===_&&j.to===R),O=R=>r.some(([j,B])=>j===R||B===R)?"graph-node visited":"graph-node",A=(R,_)=>g&&(g.from===R&&g.to===_||g.from===_&&g.to===R)?"graph-edge considering":E(R,_)?"graph-edge mst":y(R,_)?"graph-edge rejected":"graph-edge",L=()=>m>=0&&m<d.length?d[m].message:"";return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Oe,{className:"icon-sm"}),n.jsx("span",{children:"What is Kruskal's Algorithm?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"Kruskal's Algorithm"})," builds the MST by sorting all edges by weight and adding them if they don't create a cycle (using Union-Find)."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(ve,{}),n.jsx("span",{children:"Like building a network by always picking the cheapest cable that connects new areas!"})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Time"}),n.jsx("span",{className:"op-desc",children:"Sort + Union-Find"}),n.jsx("span",{className:"op-complexity",children:"O(E log E)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Space"}),n.jsx("span",{className:"op-desc",children:"Union-Find array"}),n.jsx("span",{className:"op-complexity",children:"O(V)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Strategy"}),n.jsx("span",{className:"op-desc",children:"Global greedy"}),n.jsx("span",{className:"op-complexity",children:"Min edge"})]})]}),n.jsxs("div",{className:"concept-uses",children:[n.jsx("strong",{children:"Kruskal vs Prim:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Better for sparse graphs (fewer edges)"}),n.jsx("li",{children:"Processes edges globally, not locally"}),n.jsx("li",{children:"Uses Union-Find for cycle detection"}),n.jsx("li",{children:"Easier to parallelize"})]})]})]})]}),n.jsx(xe,{context:"Kruskal's Minimum Spanning Tree algorithm with Union-Find"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Kruskal's MST Algorithm"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Load Preset"}),n.jsxs("div",{className:"btn-group preset-group",children:[n.jsx("button",{onClick:()=>K("weighted"),className:"btn btn-preset",disabled:w,children:"Weighted"}),n.jsx("button",{onClick:()=>K("complete"),className:"btn btn-preset",disabled:w,children:"Complete"})]})]}),n.jsx("div",{className:"operation-group",children:n.jsxs("div",{className:"btn-group",children:[n.jsxs("button",{onClick:$,className:"btn btn-mst",disabled:w&&!x,children:[n.jsx(Ae,{size:14})," Run Kruskal's"]}),w&&n.jsx("button",{onClick:b,className:"btn btn-pause",children:x?n.jsx(Ae,{size:14}):n.jsx(wt,{size:14})}),x&&n.jsx("button",{onClick:M,className:"btn btn-step",children:n.jsx(St,{size:14})}),n.jsx("button",{onClick:C,className:"btn btn-reset",children:n.jsx(at,{size:14})})]})}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"MST Edges:"}),n.jsxs("span",{className:"info-value",children:[r.length," / ",e.vertices.length-1]})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Total Weight:"}),n.jsx("span",{className:"info-value mst-weight",children:l})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Rejected:"}),n.jsx("span",{className:"info-value",children:a.length})]})]}),c.length>0&&n.jsxs("div",{className:"sorted-edges-panel",children:[n.jsx("h3",{children:"Edges (sorted by weight)"}),n.jsx("div",{className:"sorted-edges-list",children:c.map(([R,_,j],B)=>{const Q=E(R,_),Y=y(R,_);return n.jsxs("div",{className:`sorted-edge-item ${Q?"in-mst":""} ${Y?"rejected":""}`,children:[n.jsxs("span",{children:[R,"—",_]}),n.jsxs("span",{className:"edge-weight",children:["w=",j]})]},B)})})]}),m>=0&&n.jsxs("div",{className:"current-step-box",children:[n.jsxs("strong",{children:["Step ",m+1,":"]}),n.jsx("p",{children:L()})]}),n.jsx(Be,{message:V}),n.jsxs("div",{className:"legend",children:[n.jsx("h3",{children:"Legend"}),n.jsxs("div",{className:"legend-items",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color unvisited"}),n.jsx("span",{children:"Unconnected"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color visited"}),n.jsx("span",{children:"In MST"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-line considering"}),n.jsx("span",{children:"Considering"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-line mst"}),n.jsx("span",{children:"MST Edge"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-line rejected"}),n.jsx("span",{children:"Rejected (cycle)"})]})]})]})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Visualization"}),n.jsx("div",{className:"graph-container",children:e.vertices.length===0?n.jsx("div",{className:"graph-empty",children:"Loading graph..."}):n.jsxs("svg",{className:"graph-svg",viewBox:"0 0 500 350",children:[e.edges.map(([R,_,j],B)=>{const Q=P[R],Y=P[_];if(!Q||!Y)return null;const J=(Q.x+Y.x)/2,te=(Q.y+Y.y)/2;return n.jsxs("g",{children:[n.jsx("line",{x1:Q.x,y1:Q.y,x2:Y.x,y2:Y.y,className:A(R,_)}),n.jsx("circle",{cx:J,cy:te,r:12,className:"weight-bg"}),n.jsx("text",{x:J,y:te,className:"weight-label",dominantBaseline:"central",textAnchor:"middle",children:j})]},`edge-${B}`)}),e.vertices.map(R=>{const _=P[R];return _?n.jsxs("g",{className:O(R),children:[n.jsx("circle",{cx:_.x,cy:_.y,r:25,className:"node-circle"}),n.jsx("text",{x:_.x,y:_.y,className:"node-label",dominantBaseline:"central",textAnchor:"middle",children:R})]},R):null})]})}),n.jsxs("div",{className:"algorithm-steps",children:[n.jsx("h3",{children:"Kruskal vs Prim"}),n.jsxs("div",{className:"comparison-table",children:[n.jsxs("div",{className:"comparison-row header",children:[n.jsx("span",{children:"Feature"}),n.jsx("span",{children:"Kruskal's"}),n.jsx("span",{children:"Prim's"})]}),n.jsxs("div",{className:"comparison-row",children:[n.jsx("span",{children:"Time Complexity"}),n.jsx("span",{children:"O(E log E)"}),n.jsx("span",{children:"O((V+E)logV)"})]}),n.jsxs("div",{className:"comparison-row",children:[n.jsx("span",{children:"Best for"}),n.jsx("span",{children:"Sparse graphs"}),n.jsx("span",{children:"Dense graphs"})]}),n.jsxs("div",{className:"comparison-row",children:[n.jsx("span",{children:"Data Structure"}),n.jsx("span",{children:"Union-Find"}),n.jsx("span",{children:"Priority Queue"})]}),n.jsxs("div",{className:"comparison-row",children:[n.jsx("span",{children:"Strategy"}),n.jsx("span",{children:"Global (all edges)"}),n.jsx("span",{children:"Local (neighbors)"})]})]})]}),r.length>0&&n.jsxs("div",{className:"mst-edges-section",children:[n.jsx("h3",{children:"MST Edges"}),n.jsx("div",{className:"mst-edges-list",children:r.map(([R,_,j],B)=>n.jsxs("div",{className:"mst-edge-item",children:[n.jsxs("span",{children:[R," — ",_]}),n.jsxs("span",{className:"edge-weight",children:["(w: ",j,")"]})]},B))}),n.jsx("div",{className:"mst-total",children:n.jsxs("strong",{children:["Total MST Weight: ",l]})})]})]})]}),n.jsx(ye,{dataStructure:"kruskal"})]})}function Qc(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,s=Array(t);r<t;r++)s[r]=e[r];return s}function T0(e){if(Array.isArray(e))return e}function E0(e,t,r){return(t=z0(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function L0(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var s,a,i,l,o=[],c=!0,h=!1;try{if(i=(r=r.call(e)).next,t!==0)for(;!(c=(s=i.call(r)).done)&&(o.push(s.value),o.length!==t);c=!0);}catch(d){h=!0,a=d}finally{try{if(!c&&r.return!=null&&(l=r.return(),Object(l)!==l))return}finally{if(h)throw a}}return o}}function P0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Yc(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,s)}return r}function Xc(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Yc(Object(r),!0).forEach(function(s){E0(e,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Yc(Object(r)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(r,s))})}return e}function O0(e,t){if(e==null)return{};var r,s,a=R0(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)r=i[s],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function R0(e,t){if(e==null)return{};var r={};for(var s in e)if({}.hasOwnProperty.call(e,s)){if(t.indexOf(s)!==-1)continue;r[s]=e[s]}return r}function I0(e,t){return T0(e)||L0(e,t)||M0(e,t)||P0()}function _0(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var s=r.call(e,t);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function z0(e){var t=_0(e,"string");return typeof t=="symbol"?t:t+""}function M0(e,t){if(e){if(typeof e=="string")return Qc(e,t);var r={}.toString.call(e).slice(8,-1);return r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set"?Array.from(e):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Qc(e,t):void 0}}function A0(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Jc(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,s)}return r}function Zc(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Jc(Object(r),!0).forEach(function(s){A0(e,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Jc(Object(r)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(r,s))})}return e}function V0(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(s){return t.reduceRight(function(a,i){return i(a)},s)}}function kr(e){return function t(){for(var r=this,s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return a.length>=e.length?e.apply(this,a):function(){for(var l=arguments.length,o=new Array(l),c=0;c<l;c++)o[c]=arguments[c];return t.apply(r,[].concat(a,o))}}}function ga(e){return{}.toString.call(e).includes("Object")}function F0(e){return!Object.keys(e).length}function ns(e){return typeof e=="function"}function D0(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function $0(e,t){return ga(t)||Jn("changeType"),Object.keys(t).some(function(r){return!D0(e,r)})&&Jn("changeField"),t}function B0(e){ns(e)||Jn("selectorType")}function H0(e){ns(e)||ga(e)||Jn("handlerType"),ga(e)&&Object.values(e).some(function(t){return!ns(t)})&&Jn("handlersType")}function q0(e){e||Jn("initialIsRequired"),ga(e)||Jn("initialType"),F0(e)&&Jn("initialContent")}function U0(e,t){throw new Error(e[t]||e.default)}var K0={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},Jn=kr(U0)(K0),Ls={changes:$0,selector:B0,handler:H0,initial:q0};function W0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Ls.initial(e),Ls.handler(t);var r={current:e},s=kr(Y0)(r,t),a=kr(Q0)(r),i=kr(Ls.changes)(e),l=kr(G0)(r);function o(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(d){return d};return Ls.selector(h),h(r.current)}function c(h){V0(s,a,i,l)(h)}return[o,c]}function G0(e,t){return ns(t)?t(e.current):t}function Q0(e,t){return e.current=Zc(Zc({},e.current),t),t}function Y0(e,t,r){return ns(t)?t(e.current):Object.keys(r).forEach(function(s){var a;return(a=t[s])===null||a===void 0?void 0:a.call(t,e.current[s])}),r}var X0={create:W0},J0={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function Z0(e){return function t(){for(var r=this,s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return a.length>=e.length?e.apply(this,a):function(){for(var l=arguments.length,o=new Array(l),c=0;c<l;c++)o[c]=arguments[c];return t.apply(r,[].concat(a,o))}}}function e1(e){return{}.toString.call(e).includes("Object")}function n1(e){return e||ed("configIsRequired"),e1(e)||ed("configType"),e.urls?(t1(),{paths:{vs:e.urls.monacoBase}}):e}function t1(){console.warn(Ph.deprecation)}function r1(e,t){throw new Error(e[t]||e.default)}var Ph={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},ed=Z0(r1)(Ph),s1={config:n1},a1=function(){for(var t=arguments.length,r=new Array(t),s=0;s<t;s++)r[s]=arguments[s];return function(a){return r.reduceRight(function(i,l){return l(i)},a)}};function Oh(e,t){return Object.keys(t).forEach(function(r){t[r]instanceof Object&&e[r]&&Object.assign(t[r],Oh(e[r],t[r]))}),Xc(Xc({},e),t)}var i1={type:"cancelation",msg:"operation is manually canceled"};function di(e){var t=!1,r=new Promise(function(s,a){e.then(function(i){return t?a(i1):s(i)}),e.catch(a)});return r.cancel=function(){return t=!0},r}var l1=["monaco"],o1=X0.create({config:J0,isInitialized:!1,resolve:null,reject:null,monaco:null}),Rh=I0(o1,2),us=Rh[0],_a=Rh[1];function c1(e){var t=s1.config(e),r=t.monaco,s=O0(t,l1);_a(function(a){return{config:Oh(a.config,s),monaco:r}})}function d1(){var e=us(function(t){var r=t.monaco,s=t.isInitialized,a=t.resolve;return{monaco:r,isInitialized:s,resolve:a}});if(!e.isInitialized){if(_a({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),di(ui);if(window.monaco&&window.monaco.editor)return Ih(window.monaco),e.resolve(window.monaco),di(ui);a1(u1,p1)(f1)}return di(ui)}function u1(e){return document.body.appendChild(e)}function h1(e){var t=document.createElement("script");return e&&(t.src=e),t}function p1(e){var t=us(function(s){var a=s.config,i=s.reject;return{config:a,reject:i}}),r=h1("".concat(t.config.paths.vs,"/loader.js"));return r.onload=function(){return e()},r.onerror=t.reject,r}function f1(){var e=us(function(r){var s=r.config,a=r.resolve,i=r.reject;return{config:s,resolve:a,reject:i}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(r){var s=r.m||r;Ih(s),e.resolve(s)},function(r){e.reject(r)})}function Ih(e){us().monaco||_a({monaco:e})}function m1(){return us(function(e){var t=e.monaco;return t})}var ui=new Promise(function(e,t){return _a({resolve:e,reject:t})}),_h={config:c1,init:d1,__getMonacoInstance:m1},g1={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},hi=g1,v1={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},x1=v1;function y1({children:e}){return Je.createElement("div",{style:x1.container},e)}var j1=y1,N1=j1;function k1({width:e,height:t,isEditorReady:r,loading:s,_ref:a,className:i,wrapperProps:l}){return Je.createElement("section",{style:{...hi.wrapper,width:e,height:t},...l},!r&&Je.createElement(N1,null,s),Je.createElement("div",{ref:a,style:{...hi.fullWidth,...!r&&hi.hide},className:i}))}var b1=k1,zh=u.memo(b1);function w1(e){u.useEffect(e,[])}var Mh=w1;function S1(e,t,r=!0){let s=u.useRef(!0);u.useEffect(s.current||!r?()=>{s.current=!1}:e,t)}var Ye=S1;function _r(){}function qt(e,t,r,s){return C1(e,s)||T1(e,t,r,s)}function C1(e,t){return e.editor.getModel(Ah(e,t))}function T1(e,t,r,s){return e.editor.createModel(t,r,s?Ah(e,s):void 0)}function Ah(e,t){return e.Uri.parse(t)}function E1({original:e,modified:t,language:r,originalLanguage:s,modifiedLanguage:a,originalModelPath:i,modifiedModelPath:l,keepCurrentOriginalModel:o=!1,keepCurrentModifiedModel:c=!1,theme:h="light",loading:d="Loading...",options:p={},height:m="100%",width:S="100%",className:w,wrapperProps:N={},beforeMount:x=_r,onMount:f=_r}){let[g,v]=u.useState(!1),[P,k]=u.useState(!0),V=u.useRef(null),T=u.useRef(null),D=u.useRef(null),F=u.useRef(f),I=u.useRef(x),H=u.useRef(!1);Mh(()=>{let b=_h.init();return b.then(z=>(T.current=z)&&k(!1)).catch(z=>(z==null?void 0:z.type)!=="cancelation"&&console.error("Monaco initialization: error:",z)),()=>V.current?q():b.cancel()}),Ye(()=>{if(V.current&&T.current){let b=V.current.getOriginalEditor(),z=qt(T.current,e||"",s||r||"text",i||"");z!==b.getModel()&&b.setModel(z)}},[i],g),Ye(()=>{if(V.current&&T.current){let b=V.current.getModifiedEditor(),z=qt(T.current,t||"",a||r||"text",l||"");z!==b.getModel()&&b.setModel(z)}},[l],g),Ye(()=>{let b=V.current.getModifiedEditor();b.getOption(T.current.editor.EditorOption.readOnly)?b.setValue(t||""):t!==b.getValue()&&(b.executeEdits("",[{range:b.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),b.pushUndoStop())},[t],g),Ye(()=>{var b,z;(z=(b=V.current)==null?void 0:b.getModel())==null||z.original.setValue(e||"")},[e],g),Ye(()=>{let{original:b,modified:z}=V.current.getModel();T.current.editor.setModelLanguage(b,s||r||"text"),T.current.editor.setModelLanguage(z,a||r||"text")},[r,s,a],g),Ye(()=>{var b;(b=T.current)==null||b.editor.setTheme(h)},[h],g),Ye(()=>{var b;(b=V.current)==null||b.updateOptions(p)},[p],g);let K=u.useCallback(()=>{var M;if(!T.current)return;I.current(T.current);let b=qt(T.current,e||"",s||r||"text",i||""),z=qt(T.current,t||"",a||r||"text",l||"");(M=V.current)==null||M.setModel({original:b,modified:z})},[r,t,a,e,s,i,l]),$=u.useCallback(()=>{var b;!H.current&&D.current&&(V.current=T.current.editor.createDiffEditor(D.current,{automaticLayout:!0,...p}),K(),(b=T.current)==null||b.editor.setTheme(h),v(!0),H.current=!0)},[p,h,K]);u.useEffect(()=>{g&&F.current(V.current,T.current)},[g]),u.useEffect(()=>{!P&&!g&&$()},[P,g,$]);function q(){var z,M,C,E;let b=(z=V.current)==null?void 0:z.getModel();o||((M=b==null?void 0:b.original)==null||M.dispose()),c||((C=b==null?void 0:b.modified)==null||C.dispose()),(E=V.current)==null||E.dispose()}return Je.createElement(zh,{width:S,height:m,isEditorReady:g,loading:d,_ref:D,className:w,wrapperProps:N})}var L1=E1;u.memo(L1);function P1(e){let t=u.useRef();return u.useEffect(()=>{t.current=e},[e]),t.current}var O1=P1,Ps=new Map;function R1({defaultValue:e,defaultLanguage:t,defaultPath:r,value:s,language:a,path:i,theme:l="light",line:o,loading:c="Loading...",options:h={},overrideServices:d={},saveViewState:p=!0,keepCurrentModel:m=!1,width:S="100%",height:w="100%",className:N,wrapperProps:x={},beforeMount:f=_r,onMount:g=_r,onChange:v,onValidate:P=_r}){let[k,V]=u.useState(!1),[T,D]=u.useState(!0),F=u.useRef(null),I=u.useRef(null),H=u.useRef(null),K=u.useRef(g),$=u.useRef(f),q=u.useRef(),b=u.useRef(s),z=O1(i),M=u.useRef(!1),C=u.useRef(!1);Mh(()=>{let O=_h.init();return O.then(A=>(F.current=A)&&D(!1)).catch(A=>(A==null?void 0:A.type)!=="cancelation"&&console.error("Monaco initialization: error:",A)),()=>I.current?y():O.cancel()}),Ye(()=>{var A,L,R,_;let O=qt(F.current,e||s||"",t||a||"",i||r||"");O!==((A=I.current)==null?void 0:A.getModel())&&(p&&Ps.set(z,(L=I.current)==null?void 0:L.saveViewState()),(R=I.current)==null||R.setModel(O),p&&((_=I.current)==null||_.restoreViewState(Ps.get(i))))},[i],k),Ye(()=>{var O;(O=I.current)==null||O.updateOptions(h)},[h],k),Ye(()=>{!I.current||s===void 0||(I.current.getOption(F.current.editor.EditorOption.readOnly)?I.current.setValue(s):s!==I.current.getValue()&&(C.current=!0,I.current.executeEdits("",[{range:I.current.getModel().getFullModelRange(),text:s,forceMoveMarkers:!0}]),I.current.pushUndoStop(),C.current=!1))},[s],k),Ye(()=>{var A,L;let O=(A=I.current)==null?void 0:A.getModel();O&&a&&((L=F.current)==null||L.editor.setModelLanguage(O,a))},[a],k),Ye(()=>{var O;o!==void 0&&((O=I.current)==null||O.revealLine(o))},[o],k),Ye(()=>{var O;(O=F.current)==null||O.editor.setTheme(l)},[l],k);let E=u.useCallback(()=>{var O;if(!(!H.current||!F.current)&&!M.current){$.current(F.current);let A=i||r,L=qt(F.current,s||e||"",t||a||"",A||"");I.current=(O=F.current)==null?void 0:O.editor.create(H.current,{model:L,automaticLayout:!0,...h},d),p&&I.current.restoreViewState(Ps.get(A)),F.current.editor.setTheme(l),o!==void 0&&I.current.revealLine(o),V(!0),M.current=!0}},[e,t,r,s,a,i,h,d,p,l,o]);u.useEffect(()=>{k&&K.current(I.current,F.current)},[k]),u.useEffect(()=>{!T&&!k&&E()},[T,k,E]),b.current=s,u.useEffect(()=>{var O,A;k&&v&&((O=q.current)==null||O.dispose(),q.current=(A=I.current)==null?void 0:A.onDidChangeModelContent(L=>{C.current||v(I.current.getValue(),L)}))},[k,v]),u.useEffect(()=>{if(k){let O=F.current.editor.onDidChangeMarkers(A=>{var R;let L=(R=I.current.getModel())==null?void 0:R.uri;if(L&&A.find(_=>_.path===L.path)){let _=F.current.editor.getModelMarkers({resource:L});P==null||P(_)}});return()=>{O==null||O.dispose()}}return()=>{}},[k,P]);function y(){var O,A;(O=q.current)==null||O.dispose(),m?p&&Ps.set(i,I.current.saveViewState()):(A=I.current.getModel())==null||A.dispose(),I.current.dispose()}return Je.createElement(zh,{width:S,height:w,isEditorReady:k,loading:c,_ref:H,className:N,wrapperProps:x})}var I1=R1,_1=u.memo(I1),z1=_1;const wl={python:{monacoLang:"python",defaultCode:`def solution(nums):
    # Write your solution here
    pass
`},javascript:{monacoLang:"javascript",defaultCode:`function solution(nums) {
    // Write your solution here

}
`},cpp:{monacoLang:"cpp",defaultCode:`#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    vector<int> solution(vector<int>& nums) {
        // Write your solution here

    }
};
`},java:{monacoLang:"java",defaultCode:`class Solution {
    public int[] solution(int[] nums) {
        // Write your solution here

    }
}
`},go:{monacoLang:"go",defaultCode:`package main

func solution(nums []int) []int {
    // Write your solution here

}
`},rust:{monacoLang:"rust",defaultCode:`impl Solution {
    pub fn solution(nums: Vec<i32>) -> Vec<i32> {
        // Write your solution here

    }
}
`}};function M1({language:e,code:t,onChange:r,theme:s="vs-dark"}){const a=wl[e]||wl.python,i=o=>{r(o||"")},l={minimap:{enabled:!1},fontSize:14,fontFamily:"'Fira Code', 'JetBrains Mono', Consolas, monospace",fontLigatures:!0,lineNumbers:"on",roundedSelection:!0,scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,wordWrap:"on",padding:{top:16,bottom:16},suggest:{showKeywords:!0,showSnippets:!0}};return n.jsx("div",{className:"code-editor-container",children:n.jsx(z1,{height:"400px",language:a.monacoLang,value:t,theme:s,onChange:i,options:l,loading:n.jsx("div",{className:"editor-loading",children:"Loading editor..."})})})}const pi=[{id:"arrays-hashing",title:"Arrays & Hashing",icon:"grid",color:"#10b981",description:"Foundation of DSA - array manipulation and hash maps",problems:["two-sum","valid-anagram","contains-duplicate"]},{id:"two-pointers",title:"Two Pointers",icon:"pointer",color:"#3b82f6",description:"Efficient array traversal techniques",problems:["valid-palindrome","two-sum-sorted"]},{id:"stack",title:"Stack",icon:"layers",color:"#8b5cf6",description:"LIFO data structure problems",problems:["valid-parentheses","min-stack"]},{id:"binary-search",title:"Binary Search",icon:"search",color:"#f59e0b",description:"Divide and conquer search technique",problems:["binary-search","search-rotated-array"]},{id:"linked-list",title:"Linked List",icon:"link",color:"#ec4899",description:"Pointer-based data structures",problems:["reverse-linked-list","merge-two-lists","linked-list-cycle"]},{id:"trees",title:"Trees",icon:"tree",color:"#14b8a6",description:"Hierarchical data structures",problems:["invert-tree","max-depth-tree","same-tree"]},{id:"graphs",title:"Graphs",icon:"network",color:"#6366f1",description:"Graph traversal and algorithms",problems:["bfs-traversal","dfs-traversal","number-of-islands"]},{id:"dynamic-programming",title:"Dynamic Programming",icon:"puzzle",color:"#ef4444",description:"Optimization through memoization",problems:["climbing-stairs","house-robber"]},{id:"sorting",title:"Sorting",icon:"sort",color:"#84cc16",description:"Classic sorting algorithms",problems:["merge-sort","quick-sort"]}],Tt={"two-sum":{id:"two-sum",title:"Two Sum",difficulty:"Easy",category:"Arrays & Hashing",description:"Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\n\nYou can return the answer in any order.",examples:[{input:"nums = [2,7,11,15], target = 9",output:"[0,1]",explanation:"Because nums[0] + nums[1] == 9, we return [0, 1]."},{input:"nums = [3,2,4], target = 6",output:"[1,2]",explanation:"Because nums[1] + nums[2] == 6, we return [1, 2]."}],constraints:["2 <= nums.length <= 10^4","-10^9 <= nums[i] <= 10^9","Only one valid answer exists."],testCases:[{input:"[2,7,11,15], 9",expected:"[0, 1]"},{input:"[3,2,4], 6",expected:"[1, 2]"},{input:"[3,3], 6",expected:"[0, 1]"}],starterCode:{python:`def solution(nums, target):
    # Use a hash map for O(n) time complexity
    pass

# Test
print(solution([2,7,11,15], 9))`,javascript:`function solution(nums, target) {
    // Use a hash map for O(n) time complexity

}

console.log(solution([2,7,11,15], 9));`},hints:["A brute force approach is O(n²). Can you do better with a hash map?","For each number, check if (target - number) exists in the hash map.","Store each number and its index as you iterate."]},"valid-anagram":{id:"valid-anagram",title:"Valid Anagram",difficulty:"Easy",category:"Arrays & Hashing",description:"Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.\n\nAn anagram is a word formed by rearranging the letters of another word.",examples:[{input:'s = "anagram", t = "nagaram"',output:"true",explanation:"Both contain the same letters."},{input:'s = "rat", t = "car"',output:"false",explanation:"Different letters."}],constraints:["1 <= s.length, t.length <= 5 * 10^4","s and t consist of lowercase English letters."],testCases:[{input:'"anagram", "nagaram"',expected:"True"},{input:'"rat", "car"',expected:"False"}],starterCode:{python:`def solution(s, t):
    # Count character frequencies
    pass

print(solution("anagram", "nagaram"))`,javascript:`function solution(s, t) {
    // Count character frequencies

}

console.log(solution("anagram", "nagaram"));`},hints:["Compare character frequencies in both strings.","You can use a hash map or sort both strings."]},"contains-duplicate":{id:"contains-duplicate",title:"Contains Duplicate",difficulty:"Easy",category:"Arrays & Hashing",description:"Given an integer array `nums`, return `true` if any value appears at least twice in the array, and return `false` if every element is distinct.",examples:[{input:"nums = [1,2,3,1]",output:"true",explanation:"1 appears twice."},{input:"nums = [1,2,3,4]",output:"false",explanation:"All elements are distinct."}],constraints:["1 <= nums.length <= 10^5","-10^9 <= nums[i] <= 10^9"],testCases:[{input:"[1,2,3,1]",expected:"True"},{input:"[1,2,3,4]",expected:"False"}],starterCode:{python:`def solution(nums):
    # Use a set for O(n) lookup
    pass

print(solution([1,2,3,1]))`,javascript:`function solution(nums) {
    // Use a Set for O(n) lookup

}

console.log(solution([1,2,3,1]));`},hints:["A set only stores unique values.","Compare the length of the set vs the original array."]},"valid-palindrome":{id:"valid-palindrome",title:"Valid Palindrome",difficulty:"Easy",category:"Two Pointers",description:"Given a string `s`, return `true` if it is a palindrome, or `false` otherwise.\n\nConsider only alphanumeric characters and ignore cases.",examples:[{input:'s = "A man, a plan, a canal: Panama"',output:"true",explanation:'"amanaplanacanalpanama" is a palindrome.'},{input:'s = "race a car"',output:"false",explanation:'"raceacar" is not a palindrome.'}],constraints:["1 <= s.length <= 2 * 10^5","s consists only of printable ASCII characters."],testCases:[{input:'"A man, a plan, a canal: Panama"',expected:"True"},{input:'"race a car"',expected:"False"}],starterCode:{python:`def solution(s):
    # Use two pointers from both ends
    pass

print(solution("A man, a plan, a canal: Panama"))`,javascript:`function solution(s) {
    // Use two pointers from both ends

}

console.log(solution("A man, a plan, a canal: Panama"));`},hints:["Clean the string first (remove non-alphanumeric, lowercase).","Compare characters from start and end moving inward."]},"two-sum-sorted":{id:"two-sum-sorted",title:"Two Sum II - Sorted Array",difficulty:"Medium",category:"Two Pointers",description:`Given a 1-indexed sorted array, find two numbers that add up to a target.

Return the indices of the two numbers (1-indexed).`,examples:[{input:"numbers = [2,7,11,15], target = 9",output:"[1,2]",explanation:"2 + 7 = 9"}],constraints:["2 <= numbers.length <= 3 * 10^4","numbers is sorted in non-decreasing order."],testCases:[{input:"[2,7,11,15], 9",expected:"[1, 2]"},{input:"[2,3,4], 6",expected:"[1, 3]"}],starterCode:{python:`def solution(numbers, target):
    # Two pointers - no extra space needed!
    pass

print(solution([2,7,11,15], 9))`,javascript:`function solution(numbers, target) {
    // Two pointers - no extra space needed!

}

console.log(solution([2,7,11,15], 9));`},hints:["Since array is sorted, use two pointers.","If sum < target, move left pointer. If sum > target, move right pointer."]},"valid-parentheses":{id:"valid-parentheses",title:"Valid Parentheses",difficulty:"Easy",category:"Stack",description:`Given a string containing just '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

Valid if: brackets closed by same type, in correct order.`,examples:[{input:'s = "()"',output:"true",explanation:"Valid pair."},{input:'s = "()[]{}"',output:"true",explanation:"Multiple valid pairs."},{input:'s = "(]"',output:"false",explanation:"Mismatched types."}],constraints:["1 <= s.length <= 10^4","s consists of parentheses only."],testCases:[{input:'"()"',expected:"True"},{input:'"()[]{}"',expected:"True"},{input:'"(]"',expected:"False"}],starterCode:{python:`def solution(s):
    # Use a stack to track opening brackets
    pass

print(solution("()[]{}"))`,javascript:`function solution(s) {
    // Use a stack to track opening brackets

}

console.log(solution("()[]{}"));`},hints:["Push opening brackets onto stack.","For closing brackets, check if it matches top of stack.","Stack should be empty at the end."]},"min-stack":{id:"min-stack",title:"Min Stack",difficulty:"Medium",category:"Stack",description:"Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.",examples:[{input:"push(-2), push(0), push(-3), getMin(), pop(), top(), getMin()",output:"-3, 0, -2",explanation:"Track min at each level."}],constraints:["Methods will be called at most 3 * 10^4 times."],testCases:[{input:"[[-2],[0],[-3],[],[],[],[]]",expected:"[-3, 0, -2]"}],starterCode:{python:`class MinStack:
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
print(s.getMin())  # -3`,javascript:`class MinStack {
    constructor() {

    }

    push(val) {

    }

    pop() {

    }

    top() {

    }

    getMin() {

    }
}

const s = new MinStack();
s.push(-2); s.push(0); s.push(-3);
console.log(s.getMin()); // -3`},hints:["Use two stacks - one for values, one for minimums.","Or store (value, currentMin) pairs in a single stack."]},"binary-search":{id:"binary-search",title:"Binary Search",difficulty:"Easy",category:"Binary Search",description:`Given a sorted array and a target, return the index if found, else -1.

Must be O(log n) time complexity.`,examples:[{input:"nums = [-1,0,3,5,9,12], target = 9",output:"4",explanation:"9 is at index 4."},{input:"nums = [-1,0,3,5,9,12], target = 2",output:"-1",explanation:"2 not found."}],constraints:["1 <= nums.length <= 10^4","nums is sorted in ascending order."],testCases:[{input:"[-1,0,3,5,9,12], 9",expected:"4"},{input:"[-1,0,3,5,9,12], 2",expected:"-1"}],starterCode:{python:`def solution(nums, target):
    # Classic binary search
    pass

print(solution([-1,0,3,5,9,12], 9))`,javascript:`function solution(nums, target) {
    // Classic binary search

}

console.log(solution([-1,0,3,5,9,12], 9));`},hints:["Use left and right pointers.","mid = (left + right) // 2","Adjust left or right based on comparison."]},"search-rotated-array":{id:"search-rotated-array",title:"Search in Rotated Sorted Array",difficulty:"Medium",category:"Binary Search",description:"Given a rotated sorted array (e.g., [4,5,6,7,0,1,2]), find a target in O(log n) time.",examples:[{input:"nums = [4,5,6,7,0,1,2], target = 0",output:"4",explanation:"0 is at index 4."}],constraints:["1 <= nums.length <= 5000","nums contains distinct values."],testCases:[{input:"[4,5,6,7,0,1,2], 0",expected:"4"},{input:"[4,5,6,7,0,1,2], 3",expected:"-1"}],starterCode:{python:`def solution(nums, target):
    # Modified binary search
    pass

print(solution([4,5,6,7,0,1,2], 0))`,javascript:`function solution(nums, target) {
    // Modified binary search

}

console.log(solution([4,5,6,7,0,1,2], 0));`},hints:["One half is always sorted.","Check which half is sorted, then decide which half to search."]},"reverse-linked-list":{id:"reverse-linked-list",title:"Reverse Linked List",difficulty:"Easy",category:"Linked List",description:"Given the head of a singly linked list, reverse it and return the reversed list.",examples:[{input:"head = [1,2,3,4,5]",output:"[5,4,3,2,1]",explanation:"Reversed."}],constraints:["0 <= Number of nodes <= 5000"],testCases:[{input:"[1,2,3,4,5]",expected:"[5, 4, 3, 2, 1]"},{input:"[1,2]",expected:"[2, 1]"}],starterCode:{python:`class ListNode:
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

print(to_array(solution(create_list([1,2,3,4,5]))))`,javascript:`class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function solution(head) {
    // Use three pointers: prev, curr, next

}

// Test helpers omitted for brevity
console.log("Implement and test!");`},hints:["Track previous, current, and next nodes.","Reverse the link: curr.next = prev","Move all pointers forward."]},"merge-two-lists":{id:"merge-two-lists",title:"Merge Two Sorted Lists",difficulty:"Easy",category:"Linked List",description:"Merge two sorted linked lists into one sorted list.",examples:[{input:"list1 = [1,2,4], list2 = [1,3,4]",output:"[1,1,2,3,4,4]",explanation:"Merged in order."}],constraints:["0 <= list length <= 50"],testCases:[{input:"[1,2,4], [1,3,4]",expected:"[1, 1, 2, 3, 4, 4]"}],starterCode:{python:`def solution(list1, list2):
    # Compare heads, build merged list
    pass

print("Implement merge two lists")`,javascript:`function solution(list1, list2) {
    // Compare heads, build merged list

}

console.log("Implement merge two lists");`},hints:["Use a dummy head node.","Compare values and append smaller one.","Attach remaining nodes at the end."]},"linked-list-cycle":{id:"linked-list-cycle",title:"Linked List Cycle",difficulty:"Easy",category:"Linked List",description:"Detect if a linked list has a cycle (a node's next points back to a previous node).",examples:[{input:"head = [3,2,0,-4], pos = 1",output:"true",explanation:"Tail connects to node index 1."}],constraints:["0 <= Number of nodes <= 10^4"],testCases:[{input:"[3,2,0,-4], 1",expected:"True"},{input:"[1], -1",expected:"False"}],starterCode:{python:`def solution(head):
    # Floyd's cycle detection (slow & fast pointers)
    pass

print("Implement cycle detection")`,javascript:`function solution(head) {
    // Floyd's cycle detection (slow & fast pointers)

}

console.log("Implement cycle detection");`},hints:["Use slow (1 step) and fast (2 steps) pointers.","If they meet, there's a cycle.","If fast reaches null, no cycle."]},"invert-tree":{id:"invert-tree",title:"Invert Binary Tree",difficulty:"Easy",category:"Trees",description:"Invert a binary tree (swap left and right children at every node).",examples:[{input:"root = [4,2,7,1,3,6,9]",output:"[4,7,2,9,6,3,1]",explanation:"Mirror image."}],constraints:["0 <= Number of nodes <= 100"],testCases:[{input:"[4,2,7,1,3,6,9]",expected:"[4, 7, 2, 9, 6, 3, 1]"}],starterCode:{python:`def solution(root):
    # Swap left and right recursively
    pass

print("Implement invert tree")`,javascript:`function solution(root) {
    // Swap left and right recursively

}

console.log("Implement invert tree");`},hints:["Base case: null node.","Swap left and right children.","Recursively invert both subtrees."]},"max-depth-tree":{id:"max-depth-tree",title:"Maximum Depth of Binary Tree",difficulty:"Easy",category:"Trees",description:"Find the maximum depth (longest path from root to leaf) of a binary tree.",examples:[{input:"root = [3,9,20,null,null,15,7]",output:"3",explanation:"Depth is 3."}],constraints:["0 <= Number of nodes <= 10^4"],testCases:[{input:"[3,9,20,null,null,15,7]",expected:"3"}],starterCode:{python:`def solution(root):
    # DFS: 1 + max(left depth, right depth)
    pass

print("Implement max depth")`,javascript:`function solution(root) {
    // DFS: 1 + max(left depth, right depth)

}

console.log("Implement max depth");`},hints:["Base case: null node has depth 0.","Recursively find max of left and right depths.","Add 1 for current node."]},"same-tree":{id:"same-tree",title:"Same Tree",difficulty:"Easy",category:"Trees",description:"Check if two binary trees are identical (same structure and values).",examples:[{input:"p = [1,2,3], q = [1,2,3]",output:"true",explanation:"Identical."}],constraints:["0 <= Number of nodes <= 100"],testCases:[{input:"[1,2,3], [1,2,3]",expected:"True"},{input:"[1,2], [1,null,2]",expected:"False"}],starterCode:{python:`def solution(p, q):
    # Compare nodes recursively
    pass

print("Implement same tree")`,javascript:`function solution(p, q) {
    // Compare nodes recursively

}

console.log("Implement same tree");`},hints:["Both null = same.","One null = different.","Compare values, then recurse on children."]},"bfs-traversal":{id:"bfs-traversal",title:"BFS Graph Traversal",difficulty:"Medium",category:"Graphs",description:"Implement BFS traversal on a graph (adjacency list). Return visit order.",examples:[{input:"graph = {0: [1,2], 1: [2], 2: [0,3], 3: []}, start = 2",output:"[2, 0, 3, 1]",explanation:"Level by level."}],constraints:["Graph may contain cycles."],testCases:[{input:"{0: [1,2], 1: [2], 2: [0,3], 3: [3]}, 2",expected:"[2, 0, 3, 1]"}],starterCode:{python:`from collections import deque

def solution(graph, start):
    # Use queue, track visited
    pass

graph = {0: [1,2], 1: [2], 2: [0,3], 3: [3]}
print(solution(graph, 2))`,javascript:`function solution(graph, start) {
    // Use queue, track visited

}

const graph = {0: [1,2], 1: [2], 2: [0,3], 3: [3]};
console.log(solution(graph, 2));`},hints:["Use a queue (FIFO).","Mark nodes as visited when adding to queue.","Process neighbors level by level."]},"dfs-traversal":{id:"dfs-traversal",title:"DFS Graph Traversal",difficulty:"Medium",category:"Graphs",description:"Implement DFS traversal on a graph. Return visit order.",examples:[{input:"graph = {0: [1,2], 1: [2], 2: [3], 3: []}, start = 0",output:"[0, 1, 2, 3]",explanation:"Depth first."}],constraints:["Graph may contain cycles."],testCases:[{input:"{0: [1,2], 1: [2], 2: [3], 3: []}, 0",expected:"[0, 1, 2, 3]"}],starterCode:{python:`def solution(graph, start):
    # Use stack or recursion, track visited
    pass

graph = {0: [1,2], 1: [2], 2: [3], 3: []}
print(solution(graph, 0))`,javascript:`function solution(graph, start) {
    // Use stack or recursion, track visited

}

const graph = {0: [1,2], 1: [2], 2: [3], 3: []};
console.log(solution(graph, 0));`},hints:["Use a stack (LIFO) or recursion.","Mark visited before exploring.","Go deep before going wide."]},"number-of-islands":{id:"number-of-islands",title:"Number of Islands",difficulty:"Medium",category:"Graphs",description:"Count islands in a 2D grid. '1' = land, '0' = water. Islands are surrounded by water.",examples:[{input:'grid = [["1","1","0"],["1","1","0"],["0","0","1"]]',output:"2",explanation:"Two separate islands."}],constraints:["1 <= m, n <= 300"],testCases:[{input:'[["1","1","0"],["1","1","0"],["0","0","1"]]',expected:"2"}],starterCode:{python:`def solution(grid):
    # DFS/BFS from each unvisited land cell
    pass

grid = [["1","1","0"],["1","1","0"],["0","0","1"]]
print(solution(grid))`,javascript:`function solution(grid) {
    // DFS/BFS from each unvisited land cell

}

const grid = [["1","1","0"],["1","1","0"],["0","0","1"]];
console.log(solution(grid));`},hints:["Iterate through grid.",'When you find "1", increment count and flood-fill (DFS/BFS) to mark all connected land.']},"climbing-stairs":{id:"climbing-stairs",title:"Climbing Stairs",difficulty:"Easy",category:"Dynamic Programming",description:"You can climb 1 or 2 steps at a time. How many distinct ways to reach step n?",examples:[{input:"n = 3",output:"3",explanation:"1+1+1, 1+2, 2+1"}],constraints:["1 <= n <= 45"],testCases:[{input:"2",expected:"2"},{input:"3",expected:"3"}],starterCode:{python:`def solution(n):
    # Fibonacci pattern! dp[i] = dp[i-1] + dp[i-2]
    pass

print(solution(3))`,javascript:`function solution(n) {
    // Fibonacci pattern! dp[i] = dp[i-1] + dp[i-2]

}

console.log(solution(3));`},hints:["Base cases: dp[1]=1, dp[2]=2","dp[i] = ways to reach from i-1 + ways from i-2","This is Fibonacci!"]},"house-robber":{id:"house-robber",title:"House Robber",difficulty:"Medium",category:"Dynamic Programming",description:"Rob houses for max money, but can't rob adjacent houses.",examples:[{input:"nums = [1,2,3,1]",output:"4",explanation:"Rob house 0 and 2: 1+3=4"}],constraints:["1 <= nums.length <= 100"],testCases:[{input:"[1,2,3,1]",expected:"4"},{input:"[2,7,9,3,1]",expected:"12"}],starterCode:{python:`def solution(nums):
    # dp[i] = max(rob this + dp[i-2], skip + dp[i-1])
    pass

print(solution([1,2,3,1]))`,javascript:`function solution(nums) {
    // dp[i] = max(rob this + dp[i-2], skip + dp[i-1])

}

console.log(solution([1,2,3,1]));`},hints:["At each house: rob it or skip it.","Rob: nums[i] + dp[i-2]","Skip: dp[i-1]","Take the max."]},"merge-sort":{id:"merge-sort",title:"Merge Sort",difficulty:"Medium",category:"Sorting",description:"Implement merge sort. Divide array, sort halves, merge.",examples:[{input:"nums = [5,2,3,1]",output:"[1,2,3,5]",explanation:"Sorted."}],constraints:["1 <= nums.length <= 5 * 10^4"],testCases:[{input:"[5,2,3,1]",expected:"[1, 2, 3, 5]"}],starterCode:{python:`def solution(nums):
    # Divide, conquer, merge
    pass

print(solution([5,2,3,1]))`,javascript:`function solution(nums) {
    // Divide, conquer, merge

}

console.log(solution([5,2,3,1]));`},hints:["Base case: length <= 1.","Split at mid, recursively sort both.","Merge by comparing heads of both sorted halves."]},"quick-sort":{id:"quick-sort",title:"Quick Sort",difficulty:"Medium",category:"Sorting",description:"Implement quick sort. Pick pivot, partition, recurse.",examples:[{input:"nums = [3,6,8,10,1,2,1]",output:"[1,1,2,3,6,8,10]",explanation:"Sorted."}],constraints:["1 <= nums.length <= 5 * 10^4"],testCases:[{input:"[3,6,8,10,1,2,1]",expected:"[1, 1, 2, 3, 6, 8, 10]"}],starterCode:{python:`def solution(nums):
    # Partition around pivot, recurse
    pass

print(solution([3,6,8,10,1,2,1]))`,javascript:`function solution(nums) {
    // Partition around pivot, recurse

}

console.log(solution([3,6,8,10,1,2,1]));`},hints:["Pick a pivot (last element is common).","Partition: smaller left, larger right.","Recurse on both partitions."]}},Vh=Object.values(Tt);[...new Set(Vh.map(e=>e.category))];const fi={grid:Fg,pointer:Kg,layers:Ir,search:cs,link:es,tree:Xt,network:ml,puzzle:Gg,sort:wg};function nd(){const{problemId:e}=Wm(),t=Nh(),[r,s]=u.useState(null),[a,i]=u.useState("python"),[l,o]=u.useState(""),[c,h]=u.useState(!1),[d,p]=u.useState(null),[m,S]=u.useState(null),[w,N]=u.useState(!1),[x,f]=u.useState(0),[g,v]=u.useState("description"),[P,k]=u.useState(!e),[V,T]=u.useState(()=>{const M=localStorage.getItem("completedProblems");return M?JSON.parse(M):[]}),[D,F]=u.useState(null),[I,H]=u.useState("map");u.useEffect(()=>{localStorage.setItem("completedProblems",JSON.stringify(V))},[V]),u.useEffect(()=>{if(e&&Tt[e]){const M=Tt[e];s(M),o(M.starterCode[a]||M.starterCode.python),p(null),S(null),N(!1),f(0),k(!1)}else e||k(!0)},[e]),u.useEffect(()=>{r&&o(r.starterCode[a]||r.starterCode.python)},[a,r]);const K=M=>{V.includes(M)||T([...V,M])},$=async()=>{h(!0),p(null),S(null);try{const C=await(await fetch("/api/practice/execute",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({language:a,code:l})})).json();p({stdout:C.output||"",stderr:C.error||"",success:C.success})}catch(M){p({stdout:"",stderr:`Error: ${M.message}`,success:!1})}finally{h(!1)}},q=async()=>{if(r){h(!0),p(null),S(null);try{const C=await(await fetch("/api/practice/run-tests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({language:a,code:l,testCases:r.testCases,functionName:"solution"})})).json();S(C),C.allPassed&&K(r.id)}catch(M){p({stdout:"",stderr:`Error running tests: ${M.message}`,success:!1})}finally{h(!1)}}},b=()=>{r&&(o(r.starterCode[a]||r.starterCode.python),p(null),S(null))},z=()=>{r&&x<r.hints.length&&(N(!0),f(M=>Math.min(M+1,r.hints.length)))};if(P){const M=Vh.length,C=V.length,E=Math.round(C/M*100);return n.jsx("div",{className:"practice-container",children:n.jsxs("div",{className:"roadmap-page",children:[n.jsxs("div",{className:"roadmap-header",children:[n.jsxs("div",{className:"roadmap-title",children:[n.jsx(Wc,{size:32}),n.jsxs("div",{children:[n.jsx("h1",{children:"DSA Roadmap"}),n.jsx("p",{children:"Master data structures and algorithms step by step"})]})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[n.jsxs("div",{className:"view-toggle",children:[n.jsxs("button",{className:`view-toggle-btn ${I==="map"?"active":""}`,onClick:()=>H("map"),children:[n.jsx(Bg,{size:16}),"Map"]}),n.jsxs("button",{className:`view-toggle-btn ${I==="list"?"active":""}`,onClick:()=>H("list"),children:[n.jsx(qg,{size:16}),"List"]})]}),n.jsxs("div",{className:"progress-stats",children:[n.jsxs("div",{className:"progress-circle",children:[n.jsxs("svg",{viewBox:"0 0 36 36",children:[n.jsx("path",{className:"progress-bg",d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"}),n.jsx("path",{className:"progress-fill",strokeDasharray:`${E}, 100`,d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"})]}),n.jsxs("span",{className:"progress-text",children:[E,"%"]})]}),n.jsxs("div",{className:"progress-info",children:[n.jsxs("span",{className:"completed-count",children:[C,"/",M]}),n.jsx("span",{className:"completed-label",children:"Problems Solved"})]})]})]})]}),I==="map"&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"roadmap-visual-map",children:pi.map(y=>{const O=y.problems.map(_=>Tt[_]).filter(Boolean),A=O.filter(_=>V.includes(_.id)).length,L=Math.round(A/O.length*100),R=D===y.id;return n.jsxs("div",{className:`map-node ${R?"active":""}`,style:{"--node-color":y.color},onClick:()=>F(R?null:y.id),children:[A===O.length?n.jsx("div",{className:"map-node-badge completed",children:n.jsx(_e,{size:14})}):A>0?n.jsx("div",{className:"map-node-badge in-progress",children:A}):null,n.jsxs("div",{className:"map-node-header",children:[n.jsx("span",{className:"map-node-icon",children:(()=>{const _=fi[y.icon];return _?n.jsx(_,{size:20}):null})()}),n.jsx("span",{className:"map-node-title",children:y.title})]}),n.jsx("p",{className:"map-node-description",children:y.description}),n.jsxs("div",{className:"map-node-progress",children:[n.jsx("div",{className:"map-node-progress-bar",children:n.jsx("div",{className:"map-node-progress-fill",style:{width:`${L}%`}})}),n.jsxs("span",{className:"map-node-progress-text",children:[A,"/",O.length]})]})]},y.id)})}),D&&n.jsx("div",{className:"expanded-section",children:(()=>{const y=pi.find(A=>A.id===D),O=y.problems.map(A=>Tt[A]).filter(Boolean);return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"expanded-section-header",children:[n.jsxs("div",{className:"expanded-section-title",children:[n.jsx("span",{className:"section-icon-wrapper",children:(()=>{const A=fi[y.icon];return A?n.jsx(A,{size:24}):null})()}),n.jsx("h3",{children:y.title})]}),n.jsx("button",{className:"close-section-btn",onClick:A=>{A.stopPropagation(),F(null)},children:n.jsx(Lh,{size:16})})]}),n.jsx("div",{className:"problem-grid",children:O.map(A=>{const L=V.includes(A.id);return n.jsxs("div",{className:`problem-item ${L?"completed":""}`,onClick:()=>t(`/practice/${A.id}`),children:[n.jsx("div",{className:`problem-status-icon ${L?"done":"pending"}`,children:L?n.jsx(_e,{size:16}):n.jsx(pl,{size:16})}),n.jsxs("div",{className:"problem-item-info",children:[n.jsx("div",{className:"problem-item-title",children:A.title}),n.jsx("div",{className:"problem-item-meta",children:n.jsx("span",{className:`problem-item-difficulty ${A.difficulty.toLowerCase()}`,children:A.difficulty})})]}),n.jsx(ul,{size:16,className:"problem-item-arrow"})]},A.id)})})]})})()})]}),I==="list"&&n.jsx("div",{className:"roadmap-container",children:pi.map((y,O)=>{const A=y.problems.map(R=>Tt[R]).filter(Boolean),L=A.filter(R=>V.includes(R.id)).length;return n.jsxs("div",{className:"roadmap-section",children:[O>0&&n.jsx("div",{className:"roadmap-connector"}),n.jsxs("div",{className:"section-card",style:{"--section-color":y.color},children:[n.jsxs("div",{className:"section-header",children:[n.jsx("span",{className:"section-icon",children:(()=>{const R=fi[y.icon];return R?n.jsx(R,{size:24}):null})()}),n.jsxs("div",{className:"section-info",children:[n.jsx("h2",{children:y.title}),n.jsx("p",{children:y.description})]}),n.jsx("div",{className:"section-progress",children:n.jsxs("span",{children:[L,"/",A.length]})})]}),n.jsx("div",{className:"section-problems",children:A.map((R,_)=>{const j=V.includes(R.id);return n.jsxs("div",{className:`problem-node ${j?"completed":""}`,onClick:()=>t(`/practice/${R.id}`),children:[_>0&&n.jsx("div",{className:"node-connector"}),n.jsx("div",{className:"node-circle",children:j?n.jsx(_e,{size:16}):n.jsx("span",{className:"node-number",children:_+1})}),n.jsxs("div",{className:"node-info",children:[n.jsx("span",{className:"node-title",children:R.title}),n.jsx("span",{className:`node-difficulty ${R.difficulty.toLowerCase()}`,children:R.difficulty})]}),n.jsx(ul,{size:16,className:"node-arrow"})]},R.id)})})]})]},y.id)})})]})})}return r?n.jsx("div",{className:"practice-container",children:n.jsxs("div",{className:"practice-layout",children:[n.jsxs("div",{className:"problem-panel",children:[n.jsxs("div",{className:"problem-header",children:[n.jsxs("button",{className:"back-btn",onClick:()=>k(!0),children:[n.jsx(Wc,{size:16})," Roadmap"]}),n.jsx("h1",{children:r.title}),n.jsx("span",{className:`difficulty ${r.difficulty.toLowerCase()}`,children:r.difficulty}),V.includes(r.id)&&n.jsxs("span",{className:"solved-badge",children:[n.jsx(_e,{size:14})," Solved"]})]}),n.jsxs("div",{className:"problem-tabs",children:[n.jsx("button",{className:g==="description"?"active":"",onClick:()=>v("description"),children:"Description"}),n.jsx("button",{className:g==="hints"?"active":"",onClick:()=>v("hints"),children:"Hints"})]}),n.jsxs("div",{className:"problem-content",children:[g==="description"&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"description",children:r.description.split(`
`).map((M,C)=>n.jsx("p",{children:M},C))}),n.jsxs("div",{className:"examples",children:[n.jsx("h3",{children:"Examples"}),r.examples.map((M,C)=>n.jsxs("div",{className:"example",children:[n.jsxs("div",{className:"example-label",children:["Example ",C+1,":"]}),n.jsxs("div",{className:"example-content",children:[n.jsxs("div",{children:[n.jsx("strong",{children:"Input:"})," ",n.jsx("code",{children:M.input})]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Output:"})," ",n.jsx("code",{children:M.output})]}),M.explanation&&n.jsxs("div",{children:[n.jsx("strong",{children:"Explanation:"})," ",M.explanation]})]})]},C))]}),n.jsxs("div",{className:"constraints",children:[n.jsx("h3",{children:"Constraints"}),n.jsx("ul",{children:r.constraints.map((M,C)=>n.jsx("li",{children:n.jsx("code",{children:M})},C))})]})]}),g==="hints"&&n.jsxs("div",{className:"hints-section",children:[n.jsxs("div",{className:"hints-header",children:[n.jsx(ve,{size:20}),n.jsx("span",{children:"Need help? Reveal hints one at a time."})]}),r.hints.slice(0,x).map((M,C)=>n.jsxs("div",{className:"hint",children:[n.jsxs("span",{className:"hint-number",children:["Hint ",C+1,":"]}),M]},C)),x<r.hints.length&&n.jsxs("button",{className:"reveal-hint-btn",onClick:z,children:[n.jsx(ve,{size:14}),"Reveal Hint ",x+1]}),x>=r.hints.length&&n.jsx("div",{className:"all-hints-shown",children:"All hints revealed!"})]})]})]}),n.jsxs("div",{className:"editor-panel",children:[n.jsxs("div",{className:"editor-header",children:[n.jsxs("div",{className:"language-selector",children:[n.jsx(pl,{size:16}),n.jsx("select",{value:a,onChange:M=>i(M.target.value),children:Object.keys(wl).map(M=>n.jsx("option",{value:M,children:M.charAt(0).toUpperCase()+M.slice(1)},M))})]}),n.jsx("div",{className:"editor-actions",children:n.jsx("button",{className:"btn btn-reset",onClick:b,disabled:c,title:"Reset code",children:n.jsx(at,{size:14})})})]}),n.jsx(M1,{language:a,code:l,onChange:o}),n.jsxs("div",{className:"run-actions",children:[n.jsxs("button",{className:"btn btn-run",onClick:$,disabled:c,children:[n.jsx(Ae,{size:14}),c?"Running...":"Run Code"]}),n.jsxs("button",{className:"btn btn-submit",onClick:q,disabled:c,children:[n.jsx(_e,{size:14}),c?"Testing...":"Submit"]})]}),n.jsxs("div",{className:"output-panel",children:[n.jsxs("div",{className:"output-header",children:[n.jsx("span",{children:"Output"}),d&&n.jsx("span",{className:`status ${d.success?"success":"error"}`,children:d.success?"Success":"Error"})]}),n.jsxs("div",{className:"output-content",children:[!d&&!m&&n.jsx("div",{className:"output-placeholder",children:"Run your code to see output here..."}),d&&n.jsxs(n.Fragment,{children:[d.stdout&&n.jsxs("div",{className:"stdout",children:[n.jsx("div",{className:"output-label",children:"stdout:"}),n.jsx("pre",{children:d.stdout})]}),d.stderr&&n.jsxs("div",{className:"stderr",children:[n.jsx("div",{className:"output-label",children:"stderr:"}),n.jsx("pre",{children:d.stderr})]})]}),m&&n.jsxs("div",{className:"test-results",children:[n.jsx("div",{className:"test-summary",children:n.jsx("span",{className:m.allPassed?"all-passed":"some-failed",children:m.allPassed?n.jsxs(n.Fragment,{children:[n.jsx(_e,{size:16})," All tests passed!"]}):n.jsxs(n.Fragment,{children:[n.jsx(Gc,{size:16})," ",m.summary.passed,"/",m.summary.total," tests passed"]})})}),n.jsx("div",{className:"test-cases",children:m.results.map((M,C)=>n.jsxs("div",{className:`test-case ${M.passed?"passed":"failed"}`,children:[n.jsxs("div",{className:"test-case-header",children:[M.passed?n.jsx(_e,{size:14}):n.jsx(Gc,{size:14}),n.jsxs("span",{children:["Test Case ",M.testCase]})]}),n.jsxs("div",{className:"test-case-details",children:[n.jsxs("div",{children:[n.jsx("strong",{children:"Input:"})," ",n.jsx("code",{children:M.input})]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Expected:"})," ",n.jsx("code",{children:M.expected})]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Actual:"})," ",n.jsx("code",{children:M.actual||"(empty)"})]}),M.error&&n.jsxs("div",{className:"test-error",children:[n.jsx("strong",{children:"Error:"})," ",M.error]})]})]},C))})]})]})]})]})]})}):n.jsx("div",{className:"practice-container",children:n.jsx("div",{className:"loading",children:"Loading problem..."})})}function A1(){return n.jsxs("div",{className:"homepage-body",children:[n.jsx(tv,{}),n.jsxs("main",{className:"main-content",children:[n.jsxs(cg,{children:[n.jsx(ae,{path:"/",element:n.jsx(sv,{})}),n.jsx(ae,{path:"/algorithms",element:n.jsx(av,{})}),n.jsx(ae,{path:"/contact",element:n.jsx(iv,{})}),n.jsx(ae,{path:"/contributions",element:n.jsx(lv,{})}),n.jsx(ae,{path:"/stack",element:n.jsx(dx,{})}),n.jsx(ae,{path:"/queue",element:n.jsx(ux,{})}),n.jsx(ae,{path:"/linkedlist",element:n.jsx(hx,{})}),n.jsx(ae,{path:"/hashtable_linear",element:n.jsx(px,{})}),n.jsx(ae,{path:"/hashtable_quadratic",element:n.jsx(bx,{})}),n.jsx(ae,{path:"/hashtable_chaining",element:n.jsx(kx,{})}),n.jsx(ae,{path:"/binarytree",element:n.jsx(Px,{})}),n.jsx(ae,{path:"/bst",element:n.jsx(Jj,{})}),n.jsx(ae,{path:"/avl",element:n.jsx(s0,{})}),n.jsx(ae,{path:"/splay",element:n.jsx(c0,{})}),n.jsx(ae,{path:"/minheap",element:n.jsx(p0,{})}),n.jsx(ae,{path:"/maxheap",element:n.jsx(v0,{})}),n.jsx(ae,{path:"/adjacency-list",element:n.jsx(x0,{})}),n.jsx(ae,{path:"/adjacency-matrix",element:n.jsx(y0,{})}),n.jsx(ae,{path:"/bfs",element:n.jsx(j0,{})}),n.jsx(ae,{path:"/dfs",element:n.jsx(N0,{})}),n.jsx(ae,{path:"/dijkstra",element:n.jsx(k0,{})}),n.jsx(ae,{path:"/bellman-ford",element:n.jsx(S0,{})}),n.jsx(ae,{path:"/prim-mst",element:n.jsx(b0,{})}),n.jsx(ae,{path:"/kruskal-mst",element:n.jsx(C0,{})}),n.jsx(ae,{path:"/topological-sort",element:n.jsx(w0,{})}),n.jsx(ae,{path:"/practice",element:n.jsx(nd,{})}),n.jsx(ae,{path:"/practice/:problemId",element:n.jsx(nd,{})})]}),n.jsx(rv,{})]})]})}mi.createRoot(document.getElementById("root")).render(n.jsx(Je.StrictMode,{children:n.jsx(gg,{children:n.jsx(A1,{})})}));
