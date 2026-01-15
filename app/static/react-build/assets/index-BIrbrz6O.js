function jd(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const i=Object.getOwnPropertyDescriptor(r,l);i&&Object.defineProperty(e,l,i.get?i:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=t(l);fetch(l.href,i)}})();function wd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Xo={exports:{}},Fs={},Yo={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Er=Symbol.for("react.element"),Sd=Symbol.for("react.portal"),Td=Symbol.for("react.fragment"),bd=Symbol.for("react.strict_mode"),Cd=Symbol.for("react.profiler"),Ed=Symbol.for("react.provider"),Ld=Symbol.for("react.context"),_d=Symbol.for("react.forward_ref"),zd=Symbol.for("react.suspense"),Pd=Symbol.for("react.memo"),Od=Symbol.for("react.lazy"),La=Symbol.iterator;function Id(e){return e===null||typeof e!="object"?null:(e=La&&e[La]||e["@@iterator"],typeof e=="function"?e:null)}var Jo={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zo=Object.assign,eu={};function It(e,n,t){this.props=e,this.context=n,this.refs=eu,this.updater=t||Jo}It.prototype.isReactComponent={};It.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};It.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function nu(){}nu.prototype=It.prototype;function _i(e,n,t){this.props=e,this.context=n,this.refs=eu,this.updater=t||Jo}var zi=_i.prototype=new nu;zi.constructor=_i;Zo(zi,It.prototype);zi.isPureReactComponent=!0;var _a=Array.isArray,tu=Object.prototype.hasOwnProperty,Pi={current:null},ru={key:!0,ref:!0,__self:!0,__source:!0};function su(e,n,t){var r,l={},i=null,a=null;if(n!=null)for(r in n.ref!==void 0&&(a=n.ref),n.key!==void 0&&(i=""+n.key),n)tu.call(n,r)&&!ru.hasOwnProperty(r)&&(l[r]=n[r]);var o=arguments.length-2;if(o===1)l.children=t;else if(1<o){for(var u=Array(o),c=0;c<o;c++)u[c]=arguments[c+2];l.children=u}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)l[r]===void 0&&(l[r]=o[r]);return{$$typeof:Er,type:e,key:i,ref:a,props:l,_owner:Pi.current}}function Rd(e,n){return{$$typeof:Er,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Oi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Er}function Fd(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var za=/\/+/g;function Zs(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Fd(""+e.key):n.toString(36)}function Zr(e,n,t,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Er:case Sd:a=!0}}if(a)return a=e,l=l(a),e=r===""?"."+Zs(a,0):r,_a(l)?(t="",e!=null&&(t=e.replace(za,"$&/")+"/"),Zr(l,n,t,"",function(c){return c})):l!=null&&(Oi(l)&&(l=Rd(l,t+(!l.key||a&&a.key===l.key?"":(""+l.key).replace(za,"$&/")+"/")+e)),n.push(l)),1;if(a=0,r=r===""?".":r+":",_a(e))for(var o=0;o<e.length;o++){i=e[o];var u=r+Zs(i,o);a+=Zr(i,n,t,u,l)}else if(u=Id(e),typeof u=="function")for(e=u.call(e),o=0;!(i=e.next()).done;)i=i.value,u=r+Zs(i,o++),a+=Zr(i,n,t,u,l);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function Fr(e,n,t){if(e==null)return e;var r=[],l=0;return Zr(e,r,"","",function(i){return n.call(t,i,l++)}),r}function Dd(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Se={current:null},es={transition:null},Md={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:es,ReactCurrentOwner:Pi};function lu(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:Fr,forEach:function(e,n,t){Fr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Fr(e,function(){n++}),n},toArray:function(e){return Fr(e,function(n){return n})||[]},only:function(e){if(!Oi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=It;B.Fragment=Td;B.Profiler=Cd;B.PureComponent=_i;B.StrictMode=bd;B.Suspense=zd;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Md;B.act=lu;B.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Zo({},e.props),l=e.key,i=e.ref,a=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,a=Pi.current),n.key!==void 0&&(l=""+n.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(u in n)tu.call(n,u)&&!ru.hasOwnProperty(u)&&(r[u]=n[u]===void 0&&o!==void 0?o[u]:n[u])}var u=arguments.length-2;if(u===1)r.children=t;else if(1<u){o=Array(u);for(var c=0;c<u;c++)o[c]=arguments[c+2];r.children=o}return{$$typeof:Er,type:e.type,key:l,ref:i,props:r,_owner:a}};B.createContext=function(e){return e={$$typeof:Ld,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ed,_context:e},e.Consumer=e};B.createElement=su;B.createFactory=function(e){var n=su.bind(null,e);return n.type=e,n};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:_d,render:e}};B.isValidElement=Oi;B.lazy=function(e){return{$$typeof:Od,_payload:{_status:-1,_result:e},_init:Dd}};B.memo=function(e,n){return{$$typeof:Pd,type:e,compare:n===void 0?null:n}};B.startTransition=function(e){var n=es.transition;es.transition={};try{e()}finally{es.transition=n}};B.unstable_act=lu;B.useCallback=function(e,n){return Se.current.useCallback(e,n)};B.useContext=function(e){return Se.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return Se.current.useDeferredValue(e)};B.useEffect=function(e,n){return Se.current.useEffect(e,n)};B.useId=function(){return Se.current.useId()};B.useImperativeHandle=function(e,n,t){return Se.current.useImperativeHandle(e,n,t)};B.useInsertionEffect=function(e,n){return Se.current.useInsertionEffect(e,n)};B.useLayoutEffect=function(e,n){return Se.current.useLayoutEffect(e,n)};B.useMemo=function(e,n){return Se.current.useMemo(e,n)};B.useReducer=function(e,n,t){return Se.current.useReducer(e,n,t)};B.useRef=function(e){return Se.current.useRef(e)};B.useState=function(e){return Se.current.useState(e)};B.useSyncExternalStore=function(e,n,t){return Se.current.useSyncExternalStore(e,n,t)};B.useTransition=function(){return Se.current.useTransition()};B.version="18.3.1";Yo.exports=B;var v=Yo.exports;const Lr=wd(v),Vd=jd({__proto__:null,default:Lr},[v]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $d=v,Ad=Symbol.for("react.element"),Hd=Symbol.for("react.fragment"),Bd=Object.prototype.hasOwnProperty,Ud=$d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qd={key:!0,ref:!0,__self:!0,__source:!0};function iu(e,n,t){var r,l={},i=null,a=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(a=n.ref);for(r in n)Bd.call(n,r)&&!qd.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)l[r]===void 0&&(l[r]=n[r]);return{$$typeof:Ad,type:e,key:i,ref:a,props:l,_owner:Ud.current}}Fs.Fragment=Hd;Fs.jsx=iu;Fs.jsxs=iu;Xo.exports=Fs;var s=Xo.exports,El={},au={exports:{}},Fe={},ou={exports:{}},uu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(b,j){var P=b.length;b.push(j);e:for(;0<P;){var R=P-1>>>1,D=b[R];if(0<l(D,j))b[R]=j,b[P]=D,P=R;else break e}}function t(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var j=b[0],P=b.pop();if(P!==j){b[0]=P;e:for(var R=0,D=b.length,F=D>>>1;R<F;){var ee=2*(R+1)-1,G=b[ee],ce=ee+1,st=b[ce];if(0>l(G,P))ce<D&&0>l(st,G)?(b[R]=st,b[ce]=P,R=ce):(b[R]=G,b[ee]=P,R=ee);else if(ce<D&&0>l(st,P))b[R]=st,b[ce]=P,R=ce;else break e}}return j}function l(b,j){var P=b.sortIndex-j.sortIndex;return P!==0?P:b.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,o=a.now();e.unstable_now=function(){return a.now()-o}}var u=[],c=[],f=1,p=null,m=3,N=!1,x=!1,k=!1,g=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(b){for(var j=t(c);j!==null;){if(j.callback===null)r(c);else if(j.startTime<=b)r(c),j.sortIndex=j.expirationTime,n(u,j);else break;j=t(c)}}function w(b){if(k=!1,y(b),!x)if(t(u)!==null)x=!0,C(S);else{var j=t(c);j!==null&&E(w,j.startTime-b)}}function S(b,j){x=!1,k&&(k=!1,d(O),O=-1),N=!0;var P=m;try{for(y(j),p=t(u);p!==null&&(!(p.expirationTime>j)||b&&!$());){var R=p.callback;if(typeof R=="function"){p.callback=null,m=p.priorityLevel;var D=R(p.expirationTime<=j);j=e.unstable_now(),typeof D=="function"?p.callback=D:p===t(u)&&r(u),y(j)}else r(u);p=t(u)}if(p!==null)var F=!0;else{var ee=t(c);ee!==null&&E(w,ee.startTime-j),F=!1}return F}finally{p=null,m=P,N=!1}}var z=!1,_=null,O=-1,M=5,T=-1;function $(){return!(e.unstable_now()-T<M)}function ae(){if(_!==null){var b=e.unstable_now();T=b;var j=!0;try{j=_(!0,b)}finally{j?te():(z=!1,_=null)}}else z=!1}var te;if(typeof h=="function")te=function(){h(ae)};else if(typeof MessageChannel<"u"){var Ne=new MessageChannel,V=Ne.port2;Ne.port1.onmessage=ae,te=function(){V.postMessage(null)}}else te=function(){g(ae,0)};function C(b){_=b,z||(z=!0,te())}function E(b,j){O=g(function(){b(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(b){b.callback=null},e.unstable_continueExecution=function(){x||N||(x=!0,C(S))},e.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<b?Math.floor(1e3/b):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return t(u)},e.unstable_next=function(b){switch(m){case 1:case 2:case 3:var j=3;break;default:j=m}var P=m;m=j;try{return b()}finally{m=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(b,j){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var P=m;m=b;try{return j()}finally{m=P}},e.unstable_scheduleCallback=function(b,j,P){var R=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?R+P:R):P=R,b){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=P+D,b={id:f++,callback:j,priorityLevel:b,startTime:P,expirationTime:D,sortIndex:-1},P>R?(b.sortIndex=P,n(c,b),t(u)===null&&b===t(c)&&(k?(d(O),O=-1):k=!0,E(w,P-R))):(b.sortIndex=D,n(u,b),x||N||(x=!0,C(S))),b},e.unstable_shouldYield=$,e.unstable_wrapCallback=function(b){var j=m;return function(){var P=m;m=j;try{return b.apply(this,arguments)}finally{m=P}}}})(uu);ou.exports=uu;var Kd=ou.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wd=v,Re=Kd;function L(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cu=new Set,or={};function et(e,n){bt(e,n),bt(e+"Capture",n)}function bt(e,n){for(or[e]=n,e=0;e<n.length;e++)cu.add(n[e])}var cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ll=Object.prototype.hasOwnProperty,Qd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Pa={},Oa={};function Gd(e){return Ll.call(Oa,e)?!0:Ll.call(Pa,e)?!1:Qd.test(e)?Oa[e]=!0:(Pa[e]=!0,!1)}function Xd(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Yd(e,n,t,r){if(n===null||typeof n>"u"||Xd(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Te(e,n,t,r,l,i,a){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=a}var ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ye[e]=new Te(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ye[n]=new Te(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ye[e]=new Te(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ye[e]=new Te(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ye[e]=new Te(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ye[e]=new Te(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ye[e]=new Te(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ye[e]=new Te(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ye[e]=new Te(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ii=/[\-:]([a-z])/g;function Ri(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Ii,Ri);ye[n]=new Te(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Ii,Ri);ye[n]=new Te(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Ii,Ri);ye[n]=new Te(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ye[e]=new Te(e,1,!1,e.toLowerCase(),null,!1,!1)});ye.xlinkHref=new Te("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ye[e]=new Te(e,1,!1,e.toLowerCase(),null,!0,!0)});function Fi(e,n,t,r){var l=ye.hasOwnProperty(n)?ye[n]:null;(l!==null?l.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Yd(n,t,l,r)&&(t=null),r||l===null?Gd(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):l.mustUseProperty?e[l.propertyName]=t===null?l.type===3?!1:"":t:(n=l.attributeName,r=l.attributeNamespace,t===null?e.removeAttribute(n):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var fn=Wd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Dr=Symbol.for("react.element"),it=Symbol.for("react.portal"),at=Symbol.for("react.fragment"),Di=Symbol.for("react.strict_mode"),_l=Symbol.for("react.profiler"),du=Symbol.for("react.provider"),hu=Symbol.for("react.context"),Mi=Symbol.for("react.forward_ref"),zl=Symbol.for("react.suspense"),Pl=Symbol.for("react.suspense_list"),Vi=Symbol.for("react.memo"),vn=Symbol.for("react.lazy"),pu=Symbol.for("react.offscreen"),Ia=Symbol.iterator;function At(e){return e===null||typeof e!="object"?null:(e=Ia&&e[Ia]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,el;function Gt(e){if(el===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);el=n&&n[1]||""}return`
`+el+e}var nl=!1;function tl(e,n){if(!e||nl)return"";nl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var r=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){r=c}e.call(n.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),i=r.stack.split(`
`),a=l.length-1,o=i.length-1;1<=a&&0<=o&&l[a]!==i[o];)o--;for(;1<=a&&0<=o;a--,o--)if(l[a]!==i[o]){if(a!==1||o!==1)do if(a--,o--,0>o||l[a]!==i[o]){var u=`
`+l[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=o);break}}}finally{nl=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Gt(e):""}function Jd(e){switch(e.tag){case 5:return Gt(e.type);case 16:return Gt("Lazy");case 13:return Gt("Suspense");case 19:return Gt("SuspenseList");case 0:case 2:case 15:return e=tl(e.type,!1),e;case 11:return e=tl(e.type.render,!1),e;case 1:return e=tl(e.type,!0),e;default:return""}}function Ol(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case at:return"Fragment";case it:return"Portal";case _l:return"Profiler";case Di:return"StrictMode";case zl:return"Suspense";case Pl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case hu:return(e.displayName||"Context")+".Consumer";case du:return(e._context.displayName||"Context")+".Provider";case Mi:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Vi:return n=e.displayName||null,n!==null?n:Ol(e.type)||"Memo";case vn:n=e._payload,e=e._init;try{return Ol(e(n))}catch{}}return null}function Zd(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ol(n);case 8:return n===Di?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function In(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fu(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function eh(e){var n=fu(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Mr(e){e._valueTracker||(e._valueTracker=eh(e))}function mu(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=fu(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function ds(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Il(e,n){var t=n.checked;return Z({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Ra(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=In(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function yu(e,n){n=n.checked,n!=null&&Fi(e,"checked",n,!1)}function Rl(e,n){yu(e,n);var t=In(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Fl(e,n.type,t):n.hasOwnProperty("defaultValue")&&Fl(e,n.type,In(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Fa(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Fl(e,n,t){(n!=="number"||ds(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Xt=Array.isArray;function kt(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{for(t=""+In(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function Dl(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(L(91));return Z({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Da(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(L(92));if(Xt(t)){if(1<t.length)throw Error(L(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:In(t)}}function vu(e,n){var t=In(n.value),r=In(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Ma(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function gu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ml(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?gu(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Vr,xu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,l){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,l)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Vr=Vr||document.createElement("div"),Vr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Vr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function ur(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Zt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nh=["Webkit","ms","Moz","O"];Object.keys(Zt).forEach(function(e){nh.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Zt[n]=Zt[e]})});function ku(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Zt.hasOwnProperty(e)&&Zt[e]?(""+n).trim():n+"px"}function Nu(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,l=ku(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,l):e[t]=l}}var th=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vl(e,n){if(n){if(th[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(L(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(L(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(L(61))}if(n.style!=null&&typeof n.style!="object")throw Error(L(62))}}function $l(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Al=null;function $i(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hl=null,Nt=null,jt=null;function Va(e){if(e=Pr(e)){if(typeof Hl!="function")throw Error(L(280));var n=e.stateNode;n&&(n=As(n),Hl(e.stateNode,e.type,n))}}function ju(e){Nt?jt?jt.push(e):jt=[e]:Nt=e}function wu(){if(Nt){var e=Nt,n=jt;if(jt=Nt=null,Va(e),n)for(e=0;e<n.length;e++)Va(n[e])}}function Su(e,n){return e(n)}function Tu(){}var rl=!1;function bu(e,n,t){if(rl)return e(n,t);rl=!0;try{return Su(e,n,t)}finally{rl=!1,(Nt!==null||jt!==null)&&(Tu(),wu())}}function cr(e,n){var t=e.stateNode;if(t===null)return null;var r=As(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(L(231,n,typeof t));return t}var Bl=!1;if(cn)try{var Ht={};Object.defineProperty(Ht,"passive",{get:function(){Bl=!0}}),window.addEventListener("test",Ht,Ht),window.removeEventListener("test",Ht,Ht)}catch{Bl=!1}function rh(e,n,t,r,l,i,a,o,u){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(f){this.onError(f)}}var er=!1,hs=null,ps=!1,Ul=null,sh={onError:function(e){er=!0,hs=e}};function lh(e,n,t,r,l,i,a,o,u){er=!1,hs=null,rh.apply(sh,arguments)}function ih(e,n,t,r,l,i,a,o,u){if(lh.apply(this,arguments),er){if(er){var c=hs;er=!1,hs=null}else throw Error(L(198));ps||(ps=!0,Ul=c)}}function nt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Cu(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function $a(e){if(nt(e)!==e)throw Error(L(188))}function ah(e){var n=e.alternate;if(!n){if(n=nt(e),n===null)throw Error(L(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===t)return $a(l),e;if(i===r)return $a(l),n;i=i.sibling}throw Error(L(188))}if(t.return!==r.return)t=l,r=i;else{for(var a=!1,o=l.child;o;){if(o===t){a=!0,t=l,r=i;break}if(o===r){a=!0,r=l,t=i;break}o=o.sibling}if(!a){for(o=i.child;o;){if(o===t){a=!0,t=i,r=l;break}if(o===r){a=!0,r=i,t=l;break}o=o.sibling}if(!a)throw Error(L(189))}}if(t.alternate!==r)throw Error(L(190))}if(t.tag!==3)throw Error(L(188));return t.stateNode.current===t?e:n}function Eu(e){return e=ah(e),e!==null?Lu(e):null}function Lu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Lu(e);if(n!==null)return n;e=e.sibling}return null}var _u=Re.unstable_scheduleCallback,Aa=Re.unstable_cancelCallback,oh=Re.unstable_shouldYield,uh=Re.unstable_requestPaint,re=Re.unstable_now,ch=Re.unstable_getCurrentPriorityLevel,Ai=Re.unstable_ImmediatePriority,zu=Re.unstable_UserBlockingPriority,fs=Re.unstable_NormalPriority,dh=Re.unstable_LowPriority,Pu=Re.unstable_IdlePriority,Ds=null,nn=null;function hh(e){if(nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(Ds,e,void 0,(e.current.flags&128)===128)}catch{}}var Qe=Math.clz32?Math.clz32:mh,ph=Math.log,fh=Math.LN2;function mh(e){return e>>>=0,e===0?32:31-(ph(e)/fh|0)|0}var $r=64,Ar=4194304;function Yt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ms(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,a=t&268435455;if(a!==0){var o=a&~l;o!==0?r=Yt(o):(i&=a,i!==0&&(r=Yt(i)))}else a=t&~l,a!==0?r=Yt(a):i!==0&&(r=Yt(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&l)&&(l=r&-r,i=n&-n,l>=i||l===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Qe(n),l=1<<t,r|=e[t],n&=~l;return r}function yh(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vh(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Qe(i),o=1<<a,u=l[a];u===-1?(!(o&t)||o&r)&&(l[a]=yh(o,n)):u<=n&&(e.expiredLanes|=o),i&=~o}}function ql(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ou(){var e=$r;return $r<<=1,!($r&4194240)&&($r=64),e}function sl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function _r(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Qe(n),e[n]=t}function gh(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var l=31-Qe(t),i=1<<l;n[l]=0,r[l]=-1,e[l]=-1,t&=~i}}function Hi(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Qe(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}var q=0;function Iu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ru,Bi,Fu,Du,Mu,Kl=!1,Hr=[],Tn=null,bn=null,Cn=null,dr=new Map,hr=new Map,xn=[],xh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ha(e,n){switch(e){case"focusin":case"focusout":Tn=null;break;case"dragenter":case"dragleave":bn=null;break;case"mouseover":case"mouseout":Cn=null;break;case"pointerover":case"pointerout":dr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":hr.delete(n.pointerId)}}function Bt(e,n,t,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},n!==null&&(n=Pr(n),n!==null&&Bi(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function kh(e,n,t,r,l){switch(n){case"focusin":return Tn=Bt(Tn,e,n,t,r,l),!0;case"dragenter":return bn=Bt(bn,e,n,t,r,l),!0;case"mouseover":return Cn=Bt(Cn,e,n,t,r,l),!0;case"pointerover":var i=l.pointerId;return dr.set(i,Bt(dr.get(i)||null,e,n,t,r,l)),!0;case"gotpointercapture":return i=l.pointerId,hr.set(i,Bt(hr.get(i)||null,e,n,t,r,l)),!0}return!1}function Vu(e){var n=Un(e.target);if(n!==null){var t=nt(n);if(t!==null){if(n=t.tag,n===13){if(n=Cu(t),n!==null){e.blockedOn=n,Mu(e.priority,function(){Fu(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ns(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Wl(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Al=r,t.target.dispatchEvent(r),Al=null}else return n=Pr(t),n!==null&&Bi(n),e.blockedOn=t,!1;n.shift()}return!0}function Ba(e,n,t){ns(e)&&t.delete(n)}function Nh(){Kl=!1,Tn!==null&&ns(Tn)&&(Tn=null),bn!==null&&ns(bn)&&(bn=null),Cn!==null&&ns(Cn)&&(Cn=null),dr.forEach(Ba),hr.forEach(Ba)}function Ut(e,n){e.blockedOn===n&&(e.blockedOn=null,Kl||(Kl=!0,Re.unstable_scheduleCallback(Re.unstable_NormalPriority,Nh)))}function pr(e){function n(l){return Ut(l,e)}if(0<Hr.length){Ut(Hr[0],e);for(var t=1;t<Hr.length;t++){var r=Hr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Tn!==null&&Ut(Tn,e),bn!==null&&Ut(bn,e),Cn!==null&&Ut(Cn,e),dr.forEach(n),hr.forEach(n),t=0;t<xn.length;t++)r=xn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<xn.length&&(t=xn[0],t.blockedOn===null);)Vu(t),t.blockedOn===null&&xn.shift()}var wt=fn.ReactCurrentBatchConfig,ys=!0;function jh(e,n,t,r){var l=q,i=wt.transition;wt.transition=null;try{q=1,Ui(e,n,t,r)}finally{q=l,wt.transition=i}}function wh(e,n,t,r){var l=q,i=wt.transition;wt.transition=null;try{q=4,Ui(e,n,t,r)}finally{q=l,wt.transition=i}}function Ui(e,n,t,r){if(ys){var l=Wl(e,n,t,r);if(l===null)fl(e,n,r,vs,t),Ha(e,r);else if(kh(l,e,n,t,r))r.stopPropagation();else if(Ha(e,r),n&4&&-1<xh.indexOf(e)){for(;l!==null;){var i=Pr(l);if(i!==null&&Ru(i),i=Wl(e,n,t,r),i===null&&fl(e,n,r,vs,t),i===l)break;l=i}l!==null&&r.stopPropagation()}else fl(e,n,r,null,t)}}var vs=null;function Wl(e,n,t,r){if(vs=null,e=$i(r),e=Un(e),e!==null)if(n=nt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Cu(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return vs=e,null}function $u(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ch()){case Ai:return 1;case zu:return 4;case fs:case dh:return 16;case Pu:return 536870912;default:return 16}default:return 16}}var Nn=null,qi=null,ts=null;function Au(){if(ts)return ts;var e,n=qi,t=n.length,r,l="value"in Nn?Nn.value:Nn.textContent,i=l.length;for(e=0;e<t&&n[e]===l[e];e++);var a=t-e;for(r=1;r<=a&&n[t-r]===l[i-r];r++);return ts=l.slice(e,1<r?1-r:void 0)}function rs(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Br(){return!0}function Ua(){return!1}function De(e){function n(t,r,l,i,a){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Br:Ua,this.isPropagationStopped=Ua,this}return Z(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Br)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Br)},persist:function(){},isPersistent:Br}),n}var Rt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ki=De(Rt),zr=Z({},Rt,{view:0,detail:0}),Sh=De(zr),ll,il,qt,Ms=Z({},zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==qt&&(qt&&e.type==="mousemove"?(ll=e.screenX-qt.screenX,il=e.screenY-qt.screenY):il=ll=0,qt=e),ll)},movementY:function(e){return"movementY"in e?e.movementY:il}}),qa=De(Ms),Th=Z({},Ms,{dataTransfer:0}),bh=De(Th),Ch=Z({},zr,{relatedTarget:0}),al=De(Ch),Eh=Z({},Rt,{animationName:0,elapsedTime:0,pseudoElement:0}),Lh=De(Eh),_h=Z({},Rt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),zh=De(_h),Ph=Z({},Rt,{data:0}),Ka=De(Ph),Oh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ih={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fh(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Rh[e])?!!n[e]:!1}function Wi(){return Fh}var Dh=Z({},zr,{key:function(e){if(e.key){var n=Oh[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=rs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ih[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wi,charCode:function(e){return e.type==="keypress"?rs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?rs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Mh=De(Dh),Vh=Z({},Ms,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wa=De(Vh),$h=Z({},zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wi}),Ah=De($h),Hh=Z({},Rt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bh=De(Hh),Uh=Z({},Ms,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),qh=De(Uh),Kh=[9,13,27,32],Qi=cn&&"CompositionEvent"in window,nr=null;cn&&"documentMode"in document&&(nr=document.documentMode);var Wh=cn&&"TextEvent"in window&&!nr,Hu=cn&&(!Qi||nr&&8<nr&&11>=nr),Qa=" ",Ga=!1;function Bu(e,n){switch(e){case"keyup":return Kh.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ot=!1;function Qh(e,n){switch(e){case"compositionend":return Uu(n);case"keypress":return n.which!==32?null:(Ga=!0,Qa);case"textInput":return e=n.data,e===Qa&&Ga?null:e;default:return null}}function Gh(e,n){if(ot)return e==="compositionend"||!Qi&&Bu(e,n)?(e=Au(),ts=qi=Nn=null,ot=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Hu&&n.locale!=="ko"?null:n.data;default:return null}}var Xh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xa(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Xh[e.type]:n==="textarea"}function qu(e,n,t,r){ju(r),n=gs(n,"onChange"),0<n.length&&(t=new Ki("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var tr=null,fr=null;function Yh(e){tc(e,0)}function Vs(e){var n=dt(e);if(mu(n))return e}function Jh(e,n){if(e==="change")return n}var Ku=!1;if(cn){var ol;if(cn){var ul="oninput"in document;if(!ul){var Ya=document.createElement("div");Ya.setAttribute("oninput","return;"),ul=typeof Ya.oninput=="function"}ol=ul}else ol=!1;Ku=ol&&(!document.documentMode||9<document.documentMode)}function Ja(){tr&&(tr.detachEvent("onpropertychange",Wu),fr=tr=null)}function Wu(e){if(e.propertyName==="value"&&Vs(fr)){var n=[];qu(n,fr,e,$i(e)),bu(Yh,n)}}function Zh(e,n,t){e==="focusin"?(Ja(),tr=n,fr=t,tr.attachEvent("onpropertychange",Wu)):e==="focusout"&&Ja()}function ep(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Vs(fr)}function np(e,n){if(e==="click")return Vs(n)}function tp(e,n){if(e==="input"||e==="change")return Vs(n)}function rp(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Xe=typeof Object.is=="function"?Object.is:rp;function mr(e,n){if(Xe(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!Ll.call(n,l)||!Xe(e[l],n[l]))return!1}return!0}function Za(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function eo(e,n){var t=Za(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Za(t)}}function Qu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Qu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Gu(){for(var e=window,n=ds();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=ds(e.document)}return n}function Gi(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function sp(e){var n=Gu(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Qu(t.ownerDocument.documentElement,t)){if(r!==null&&Gi(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var l=t.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=eo(t,i);var a=eo(t,r);l&&a&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(n=n.createRange(),n.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(a.node,a.offset)):(n.setEnd(a.node,a.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var lp=cn&&"documentMode"in document&&11>=document.documentMode,ut=null,Ql=null,rr=null,Gl=!1;function no(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Gl||ut==null||ut!==ds(r)||(r=ut,"selectionStart"in r&&Gi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),rr&&mr(rr,r)||(rr=r,r=gs(Ql,"onSelect"),0<r.length&&(n=new Ki("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=ut)))}function Ur(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var ct={animationend:Ur("Animation","AnimationEnd"),animationiteration:Ur("Animation","AnimationIteration"),animationstart:Ur("Animation","AnimationStart"),transitionend:Ur("Transition","TransitionEnd")},cl={},Xu={};cn&&(Xu=document.createElement("div").style,"AnimationEvent"in window||(delete ct.animationend.animation,delete ct.animationiteration.animation,delete ct.animationstart.animation),"TransitionEvent"in window||delete ct.transitionend.transition);function $s(e){if(cl[e])return cl[e];if(!ct[e])return e;var n=ct[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Xu)return cl[e]=n[t];return e}var Yu=$s("animationend"),Ju=$s("animationiteration"),Zu=$s("animationstart"),ec=$s("transitionend"),nc=new Map,to="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fn(e,n){nc.set(e,n),et(n,[e])}for(var dl=0;dl<to.length;dl++){var hl=to[dl],ip=hl.toLowerCase(),ap=hl[0].toUpperCase()+hl.slice(1);Fn(ip,"on"+ap)}Fn(Yu,"onAnimationEnd");Fn(Ju,"onAnimationIteration");Fn(Zu,"onAnimationStart");Fn("dblclick","onDoubleClick");Fn("focusin","onFocus");Fn("focusout","onBlur");Fn(ec,"onTransitionEnd");bt("onMouseEnter",["mouseout","mouseover"]);bt("onMouseLeave",["mouseout","mouseover"]);bt("onPointerEnter",["pointerout","pointerover"]);bt("onPointerLeave",["pointerout","pointerover"]);et("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));et("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));et("onBeforeInput",["compositionend","keypress","textInput","paste"]);et("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));et("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));et("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),op=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jt));function ro(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,ih(r,n,void 0,e),e.currentTarget=null}function tc(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var a=r.length-1;0<=a;a--){var o=r[a],u=o.instance,c=o.currentTarget;if(o=o.listener,u!==i&&l.isPropagationStopped())break e;ro(l,o,c),i=u}else for(a=0;a<r.length;a++){if(o=r[a],u=o.instance,c=o.currentTarget,o=o.listener,u!==i&&l.isPropagationStopped())break e;ro(l,o,c),i=u}}}if(ps)throw e=Ul,ps=!1,Ul=null,e}function W(e,n){var t=n[ei];t===void 0&&(t=n[ei]=new Set);var r=e+"__bubble";t.has(r)||(rc(n,e,2,!1),t.add(r))}function pl(e,n,t){var r=0;n&&(r|=4),rc(t,e,r,n)}var qr="_reactListening"+Math.random().toString(36).slice(2);function yr(e){if(!e[qr]){e[qr]=!0,cu.forEach(function(t){t!=="selectionchange"&&(op.has(t)||pl(t,!1,e),pl(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[qr]||(n[qr]=!0,pl("selectionchange",!1,n))}}function rc(e,n,t,r){switch($u(n)){case 1:var l=jh;break;case 4:l=wh;break;default:l=Ui}t=l.bind(null,n,t,e),l=void 0,!Bl||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function fl(e,n,t,r,l){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var o=r.stateNode.containerInfo;if(o===l||o.nodeType===8&&o.parentNode===l)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;a=a.return}for(;o!==null;){if(a=Un(o),a===null)return;if(u=a.tag,u===5||u===6){r=i=a;continue e}o=o.parentNode}}r=r.return}bu(function(){var c=i,f=$i(t),p=[];e:{var m=nc.get(e);if(m!==void 0){var N=Ki,x=e;switch(e){case"keypress":if(rs(t)===0)break e;case"keydown":case"keyup":N=Mh;break;case"focusin":x="focus",N=al;break;case"focusout":x="blur",N=al;break;case"beforeblur":case"afterblur":N=al;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=qa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=bh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=Ah;break;case Yu:case Ju:case Zu:N=Lh;break;case ec:N=Bh;break;case"scroll":N=Sh;break;case"wheel":N=qh;break;case"copy":case"cut":case"paste":N=zh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=Wa}var k=(n&4)!==0,g=!k&&e==="scroll",d=k?m!==null?m+"Capture":null:m;k=[];for(var h=c,y;h!==null;){y=h;var w=y.stateNode;if(y.tag===5&&w!==null&&(y=w,d!==null&&(w=cr(h,d),w!=null&&k.push(vr(h,w,y)))),g)break;h=h.return}0<k.length&&(m=new N(m,x,null,t,f),p.push({event:m,listeners:k}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",m&&t!==Al&&(x=t.relatedTarget||t.fromElement)&&(Un(x)||x[dn]))break e;if((N||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,N?(x=t.relatedTarget||t.toElement,N=c,x=x?Un(x):null,x!==null&&(g=nt(x),x!==g||x.tag!==5&&x.tag!==6)&&(x=null)):(N=null,x=c),N!==x)){if(k=qa,w="onMouseLeave",d="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(k=Wa,w="onPointerLeave",d="onPointerEnter",h="pointer"),g=N==null?m:dt(N),y=x==null?m:dt(x),m=new k(w,h+"leave",N,t,f),m.target=g,m.relatedTarget=y,w=null,Un(f)===c&&(k=new k(d,h+"enter",x,t,f),k.target=y,k.relatedTarget=g,w=k),g=w,N&&x)n:{for(k=N,d=x,h=0,y=k;y;y=lt(y))h++;for(y=0,w=d;w;w=lt(w))y++;for(;0<h-y;)k=lt(k),h--;for(;0<y-h;)d=lt(d),y--;for(;h--;){if(k===d||d!==null&&k===d.alternate)break n;k=lt(k),d=lt(d)}k=null}else k=null;N!==null&&so(p,m,N,k,!1),x!==null&&g!==null&&so(p,g,x,k,!0)}}e:{if(m=c?dt(c):window,N=m.nodeName&&m.nodeName.toLowerCase(),N==="select"||N==="input"&&m.type==="file")var S=Jh;else if(Xa(m))if(Ku)S=tp;else{S=ep;var z=Zh}else(N=m.nodeName)&&N.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=np);if(S&&(S=S(e,c))){qu(p,S,t,f);break e}z&&z(e,m,c),e==="focusout"&&(z=m._wrapperState)&&z.controlled&&m.type==="number"&&Fl(m,"number",m.value)}switch(z=c?dt(c):window,e){case"focusin":(Xa(z)||z.contentEditable==="true")&&(ut=z,Ql=c,rr=null);break;case"focusout":rr=Ql=ut=null;break;case"mousedown":Gl=!0;break;case"contextmenu":case"mouseup":case"dragend":Gl=!1,no(p,t,f);break;case"selectionchange":if(lp)break;case"keydown":case"keyup":no(p,t,f)}var _;if(Qi)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else ot?Bu(e,t)&&(O="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(O="onCompositionStart");O&&(Hu&&t.locale!=="ko"&&(ot||O!=="onCompositionStart"?O==="onCompositionEnd"&&ot&&(_=Au()):(Nn=f,qi="value"in Nn?Nn.value:Nn.textContent,ot=!0)),z=gs(c,O),0<z.length&&(O=new Ka(O,e,null,t,f),p.push({event:O,listeners:z}),_?O.data=_:(_=Uu(t),_!==null&&(O.data=_)))),(_=Wh?Qh(e,t):Gh(e,t))&&(c=gs(c,"onBeforeInput"),0<c.length&&(f=new Ka("onBeforeInput","beforeinput",null,t,f),p.push({event:f,listeners:c}),f.data=_))}tc(p,n)})}function vr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function gs(e,n){for(var t=n+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=cr(e,t),i!=null&&r.unshift(vr(e,i,l)),i=cr(e,n),i!=null&&r.push(vr(e,i,l))),e=e.return}return r}function lt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function so(e,n,t,r,l){for(var i=n._reactName,a=[];t!==null&&t!==r;){var o=t,u=o.alternate,c=o.stateNode;if(u!==null&&u===r)break;o.tag===5&&c!==null&&(o=c,l?(u=cr(t,i),u!=null&&a.unshift(vr(t,u,o))):l||(u=cr(t,i),u!=null&&a.push(vr(t,u,o)))),t=t.return}a.length!==0&&e.push({event:n,listeners:a})}var up=/\r\n?/g,cp=/\u0000|\uFFFD/g;function lo(e){return(typeof e=="string"?e:""+e).replace(up,`
`).replace(cp,"")}function Kr(e,n,t){if(n=lo(n),lo(e)!==n&&t)throw Error(L(425))}function xs(){}var Xl=null,Yl=null;function Jl(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Zl=typeof setTimeout=="function"?setTimeout:void 0,dp=typeof clearTimeout=="function"?clearTimeout:void 0,io=typeof Promise=="function"?Promise:void 0,hp=typeof queueMicrotask=="function"?queueMicrotask:typeof io<"u"?function(e){return io.resolve(null).then(e).catch(pp)}:Zl;function pp(e){setTimeout(function(){throw e})}function ml(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(r===0){e.removeChild(l),pr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=l}while(t);pr(n)}function En(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function ao(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Ft=Math.random().toString(36).slice(2),en="__reactFiber$"+Ft,gr="__reactProps$"+Ft,dn="__reactContainer$"+Ft,ei="__reactEvents$"+Ft,fp="__reactListeners$"+Ft,mp="__reactHandles$"+Ft;function Un(e){var n=e[en];if(n)return n;for(var t=e.parentNode;t;){if(n=t[dn]||t[en]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=ao(e);e!==null;){if(t=e[en])return t;e=ao(e)}return n}e=t,t=e.parentNode}return null}function Pr(e){return e=e[en]||e[dn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function dt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(L(33))}function As(e){return e[gr]||null}var ni=[],ht=-1;function Dn(e){return{current:e}}function Q(e){0>ht||(e.current=ni[ht],ni[ht]=null,ht--)}function K(e,n){ht++,ni[ht]=e.current,e.current=n}var Rn={},ke=Dn(Rn),Ee=Dn(!1),Gn=Rn;function Ct(e,n){var t=e.type.contextTypes;if(!t)return Rn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in t)l[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=l),l}function Le(e){return e=e.childContextTypes,e!=null}function ks(){Q(Ee),Q(ke)}function oo(e,n,t){if(ke.current!==Rn)throw Error(L(168));K(ke,n),K(Ee,t)}function sc(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var l in r)if(!(l in n))throw Error(L(108,Zd(e)||"Unknown",l));return Z({},t,r)}function Ns(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Rn,Gn=ke.current,K(ke,e),K(Ee,Ee.current),!0}function uo(e,n,t){var r=e.stateNode;if(!r)throw Error(L(169));t?(e=sc(e,n,Gn),r.__reactInternalMemoizedMergedChildContext=e,Q(Ee),Q(ke),K(ke,e)):Q(Ee),K(Ee,t)}var ln=null,Hs=!1,yl=!1;function lc(e){ln===null?ln=[e]:ln.push(e)}function yp(e){Hs=!0,lc(e)}function Mn(){if(!yl&&ln!==null){yl=!0;var e=0,n=q;try{var t=ln;for(q=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}ln=null,Hs=!1}catch(l){throw ln!==null&&(ln=ln.slice(e+1)),_u(Ai,Mn),l}finally{q=n,yl=!1}}return null}var pt=[],ft=0,js=null,ws=0,Me=[],Ve=0,Xn=null,an=1,on="";function Hn(e,n){pt[ft++]=ws,pt[ft++]=js,js=e,ws=n}function ic(e,n,t){Me[Ve++]=an,Me[Ve++]=on,Me[Ve++]=Xn,Xn=e;var r=an;e=on;var l=32-Qe(r)-1;r&=~(1<<l),t+=1;var i=32-Qe(n)+l;if(30<i){var a=l-l%5;i=(r&(1<<a)-1).toString(32),r>>=a,l-=a,an=1<<32-Qe(n)+l|t<<l|r,on=i+e}else an=1<<i|t<<l|r,on=e}function Xi(e){e.return!==null&&(Hn(e,1),ic(e,1,0))}function Yi(e){for(;e===js;)js=pt[--ft],pt[ft]=null,ws=pt[--ft],pt[ft]=null;for(;e===Xn;)Xn=Me[--Ve],Me[Ve]=null,on=Me[--Ve],Me[Ve]=null,an=Me[--Ve],Me[Ve]=null}var Ie=null,Oe=null,X=!1,We=null;function ac(e,n){var t=$e(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function co(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ie=e,Oe=En(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ie=e,Oe=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Xn!==null?{id:an,overflow:on}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=$e(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Ie=e,Oe=null,!0):!1;default:return!1}}function ti(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ri(e){if(X){var n=Oe;if(n){var t=n;if(!co(e,n)){if(ti(e))throw Error(L(418));n=En(t.nextSibling);var r=Ie;n&&co(e,n)?ac(r,t):(e.flags=e.flags&-4097|2,X=!1,Ie=e)}}else{if(ti(e))throw Error(L(418));e.flags=e.flags&-4097|2,X=!1,Ie=e}}}function ho(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ie=e}function Wr(e){if(e!==Ie)return!1;if(!X)return ho(e),X=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Jl(e.type,e.memoizedProps)),n&&(n=Oe)){if(ti(e))throw oc(),Error(L(418));for(;n;)ac(e,n),n=En(n.nextSibling)}if(ho(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(L(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Oe=En(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Oe=null}}else Oe=Ie?En(e.stateNode.nextSibling):null;return!0}function oc(){for(var e=Oe;e;)e=En(e.nextSibling)}function Et(){Oe=Ie=null,X=!1}function Ji(e){We===null?We=[e]:We.push(e)}var vp=fn.ReactCurrentBatchConfig;function Kt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(L(309));var r=t.stateNode}if(!r)throw Error(L(147,e));var l=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(a){var o=l.refs;a===null?delete o[i]:o[i]=a},n._stringRef=i,n)}if(typeof e!="string")throw Error(L(284));if(!t._owner)throw Error(L(290,e))}return e}function Qr(e,n){throw e=Object.prototype.toString.call(n),Error(L(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function po(e){var n=e._init;return n(e._payload)}function uc(e){function n(d,h){if(e){var y=d.deletions;y===null?(d.deletions=[h],d.flags|=16):y.push(h)}}function t(d,h){if(!e)return null;for(;h!==null;)n(d,h),h=h.sibling;return null}function r(d,h){for(d=new Map;h!==null;)h.key!==null?d.set(h.key,h):d.set(h.index,h),h=h.sibling;return d}function l(d,h){return d=Pn(d,h),d.index=0,d.sibling=null,d}function i(d,h,y){return d.index=y,e?(y=d.alternate,y!==null?(y=y.index,y<h?(d.flags|=2,h):y):(d.flags|=2,h)):(d.flags|=1048576,h)}function a(d){return e&&d.alternate===null&&(d.flags|=2),d}function o(d,h,y,w){return h===null||h.tag!==6?(h=wl(y,d.mode,w),h.return=d,h):(h=l(h,y),h.return=d,h)}function u(d,h,y,w){var S=y.type;return S===at?f(d,h,y.props.children,w,y.key):h!==null&&(h.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===vn&&po(S)===h.type)?(w=l(h,y.props),w.ref=Kt(d,h,y),w.return=d,w):(w=cs(y.type,y.key,y.props,null,d.mode,w),w.ref=Kt(d,h,y),w.return=d,w)}function c(d,h,y,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==y.containerInfo||h.stateNode.implementation!==y.implementation?(h=Sl(y,d.mode,w),h.return=d,h):(h=l(h,y.children||[]),h.return=d,h)}function f(d,h,y,w,S){return h===null||h.tag!==7?(h=Qn(y,d.mode,w,S),h.return=d,h):(h=l(h,y),h.return=d,h)}function p(d,h,y){if(typeof h=="string"&&h!==""||typeof h=="number")return h=wl(""+h,d.mode,y),h.return=d,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Dr:return y=cs(h.type,h.key,h.props,null,d.mode,y),y.ref=Kt(d,null,h),y.return=d,y;case it:return h=Sl(h,d.mode,y),h.return=d,h;case vn:var w=h._init;return p(d,w(h._payload),y)}if(Xt(h)||At(h))return h=Qn(h,d.mode,y,null),h.return=d,h;Qr(d,h)}return null}function m(d,h,y,w){var S=h!==null?h.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return S!==null?null:o(d,h,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Dr:return y.key===S?u(d,h,y,w):null;case it:return y.key===S?c(d,h,y,w):null;case vn:return S=y._init,m(d,h,S(y._payload),w)}if(Xt(y)||At(y))return S!==null?null:f(d,h,y,w,null);Qr(d,y)}return null}function N(d,h,y,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return d=d.get(y)||null,o(h,d,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Dr:return d=d.get(w.key===null?y:w.key)||null,u(h,d,w,S);case it:return d=d.get(w.key===null?y:w.key)||null,c(h,d,w,S);case vn:var z=w._init;return N(d,h,y,z(w._payload),S)}if(Xt(w)||At(w))return d=d.get(y)||null,f(h,d,w,S,null);Qr(h,w)}return null}function x(d,h,y,w){for(var S=null,z=null,_=h,O=h=0,M=null;_!==null&&O<y.length;O++){_.index>O?(M=_,_=null):M=_.sibling;var T=m(d,_,y[O],w);if(T===null){_===null&&(_=M);break}e&&_&&T.alternate===null&&n(d,_),h=i(T,h,O),z===null?S=T:z.sibling=T,z=T,_=M}if(O===y.length)return t(d,_),X&&Hn(d,O),S;if(_===null){for(;O<y.length;O++)_=p(d,y[O],w),_!==null&&(h=i(_,h,O),z===null?S=_:z.sibling=_,z=_);return X&&Hn(d,O),S}for(_=r(d,_);O<y.length;O++)M=N(_,d,O,y[O],w),M!==null&&(e&&M.alternate!==null&&_.delete(M.key===null?O:M.key),h=i(M,h,O),z===null?S=M:z.sibling=M,z=M);return e&&_.forEach(function($){return n(d,$)}),X&&Hn(d,O),S}function k(d,h,y,w){var S=At(y);if(typeof S!="function")throw Error(L(150));if(y=S.call(y),y==null)throw Error(L(151));for(var z=S=null,_=h,O=h=0,M=null,T=y.next();_!==null&&!T.done;O++,T=y.next()){_.index>O?(M=_,_=null):M=_.sibling;var $=m(d,_,T.value,w);if($===null){_===null&&(_=M);break}e&&_&&$.alternate===null&&n(d,_),h=i($,h,O),z===null?S=$:z.sibling=$,z=$,_=M}if(T.done)return t(d,_),X&&Hn(d,O),S;if(_===null){for(;!T.done;O++,T=y.next())T=p(d,T.value,w),T!==null&&(h=i(T,h,O),z===null?S=T:z.sibling=T,z=T);return X&&Hn(d,O),S}for(_=r(d,_);!T.done;O++,T=y.next())T=N(_,d,O,T.value,w),T!==null&&(e&&T.alternate!==null&&_.delete(T.key===null?O:T.key),h=i(T,h,O),z===null?S=T:z.sibling=T,z=T);return e&&_.forEach(function(ae){return n(d,ae)}),X&&Hn(d,O),S}function g(d,h,y,w){if(typeof y=="object"&&y!==null&&y.type===at&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Dr:e:{for(var S=y.key,z=h;z!==null;){if(z.key===S){if(S=y.type,S===at){if(z.tag===7){t(d,z.sibling),h=l(z,y.props.children),h.return=d,d=h;break e}}else if(z.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===vn&&po(S)===z.type){t(d,z.sibling),h=l(z,y.props),h.ref=Kt(d,z,y),h.return=d,d=h;break e}t(d,z);break}else n(d,z);z=z.sibling}y.type===at?(h=Qn(y.props.children,d.mode,w,y.key),h.return=d,d=h):(w=cs(y.type,y.key,y.props,null,d.mode,w),w.ref=Kt(d,h,y),w.return=d,d=w)}return a(d);case it:e:{for(z=y.key;h!==null;){if(h.key===z)if(h.tag===4&&h.stateNode.containerInfo===y.containerInfo&&h.stateNode.implementation===y.implementation){t(d,h.sibling),h=l(h,y.children||[]),h.return=d,d=h;break e}else{t(d,h);break}else n(d,h);h=h.sibling}h=Sl(y,d.mode,w),h.return=d,d=h}return a(d);case vn:return z=y._init,g(d,h,z(y._payload),w)}if(Xt(y))return x(d,h,y,w);if(At(y))return k(d,h,y,w);Qr(d,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,h!==null&&h.tag===6?(t(d,h.sibling),h=l(h,y),h.return=d,d=h):(t(d,h),h=wl(y,d.mode,w),h.return=d,d=h),a(d)):t(d,h)}return g}var Lt=uc(!0),cc=uc(!1),Ss=Dn(null),Ts=null,mt=null,Zi=null;function ea(){Zi=mt=Ts=null}function na(e){var n=Ss.current;Q(Ss),e._currentValue=n}function si(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function St(e,n){Ts=e,Zi=mt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Ce=!0),e.firstContext=null)}function He(e){var n=e._currentValue;if(Zi!==e)if(e={context:e,memoizedValue:n,next:null},mt===null){if(Ts===null)throw Error(L(308));mt=e,Ts.dependencies={lanes:0,firstContext:e}}else mt=mt.next=e;return n}var qn=null;function ta(e){qn===null?qn=[e]:qn.push(e)}function dc(e,n,t,r){var l=n.interleaved;return l===null?(t.next=t,ta(n)):(t.next=l.next,l.next=t),n.interleaved=t,hn(e,r)}function hn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var gn=!1;function ra(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function un(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Ln(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,hn(e,t)}return l=r.interleaved,l===null?(n.next=n,ta(r)):(n.next=l.next,l.next=n),r.interleaved=n,hn(e,t)}function ss(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Hi(e,t)}}function fo(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?l=i=a:i=i.next=a,t=t.next}while(t!==null);i===null?l=i=n:i=i.next=n}else l=i=n;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function bs(e,n,t,r){var l=e.updateQueue;gn=!1;var i=l.firstBaseUpdate,a=l.lastBaseUpdate,o=l.shared.pending;if(o!==null){l.shared.pending=null;var u=o,c=u.next;u.next=null,a===null?i=c:a.next=c,a=u;var f=e.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==a&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=u))}if(i!==null){var p=l.baseState;a=0,f=c=u=null,o=i;do{var m=o.lane,N=o.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:N,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var x=e,k=o;switch(m=n,N=t,k.tag){case 1:if(x=k.payload,typeof x=="function"){p=x.call(N,p,m);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=k.payload,m=typeof x=="function"?x.call(N,p,m):x,m==null)break e;p=Z({},p,m);break e;case 2:gn=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[o]:m.push(o))}else N={eventTime:N,lane:m,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=N,u=p):f=f.next=N,a|=m;if(o=o.next,o===null){if(o=l.shared.pending,o===null)break;m=o,o=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(f===null&&(u=p),l.baseState=u,l.firstBaseUpdate=c,l.lastBaseUpdate=f,n=l.shared.interleaved,n!==null){l=n;do a|=l.lane,l=l.next;while(l!==n)}else i===null&&(l.shared.lanes=0);Jn|=a,e.lanes=a,e.memoizedState=p}}function mo(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],l=r.callback;if(l!==null){if(r.callback=null,r=t,typeof l!="function")throw Error(L(191,l));l.call(r)}}}var Or={},tn=Dn(Or),xr=Dn(Or),kr=Dn(Or);function Kn(e){if(e===Or)throw Error(L(174));return e}function sa(e,n){switch(K(kr,n),K(xr,e),K(tn,Or),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Ml(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Ml(n,e)}Q(tn),K(tn,n)}function _t(){Q(tn),Q(xr),Q(kr)}function pc(e){Kn(kr.current);var n=Kn(tn.current),t=Ml(n,e.type);n!==t&&(K(xr,e),K(tn,t))}function la(e){xr.current===e&&(Q(tn),Q(xr))}var Y=Dn(0);function Cs(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var vl=[];function ia(){for(var e=0;e<vl.length;e++)vl[e]._workInProgressVersionPrimary=null;vl.length=0}var ls=fn.ReactCurrentDispatcher,gl=fn.ReactCurrentBatchConfig,Yn=0,J=null,oe=null,de=null,Es=!1,sr=!1,Nr=0,gp=0;function ve(){throw Error(L(321))}function aa(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Xe(e[t],n[t]))return!1;return!0}function oa(e,n,t,r,l,i){if(Yn=i,J=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,ls.current=e===null||e.memoizedState===null?jp:wp,e=t(r,l),sr){i=0;do{if(sr=!1,Nr=0,25<=i)throw Error(L(301));i+=1,de=oe=null,n.updateQueue=null,ls.current=Sp,e=t(r,l)}while(sr)}if(ls.current=Ls,n=oe!==null&&oe.next!==null,Yn=0,de=oe=J=null,Es=!1,n)throw Error(L(300));return e}function ua(){var e=Nr!==0;return Nr=0,e}function Ze(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?J.memoizedState=de=e:de=de.next=e,de}function Be(){if(oe===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var n=de===null?J.memoizedState:de.next;if(n!==null)de=n,oe=e;else{if(e===null)throw Error(L(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},de===null?J.memoizedState=de=e:de=de.next=e}return de}function jr(e,n){return typeof n=="function"?n(e):n}function xl(e){var n=Be(),t=n.queue;if(t===null)throw Error(L(311));t.lastRenderedReducer=e;var r=oe,l=r.baseQueue,i=t.pending;if(i!==null){if(l!==null){var a=l.next;l.next=i.next,i.next=a}r.baseQueue=l=i,t.pending=null}if(l!==null){i=l.next,r=r.baseState;var o=a=null,u=null,c=i;do{var f=c.lane;if((Yn&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(o=u=p,a=r):u=u.next=p,J.lanes|=f,Jn|=f}c=c.next}while(c!==null&&c!==i);u===null?a=r:u.next=o,Xe(r,n.memoizedState)||(Ce=!0),n.memoizedState=r,n.baseState=a,n.baseQueue=u,t.lastRenderedState=r}if(e=t.interleaved,e!==null){l=e;do i=l.lane,J.lanes|=i,Jn|=i,l=l.next;while(l!==e)}else l===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function kl(e){var n=Be(),t=n.queue;if(t===null)throw Error(L(311));t.lastRenderedReducer=e;var r=t.dispatch,l=t.pending,i=n.memoizedState;if(l!==null){t.pending=null;var a=l=l.next;do i=e(i,a.action),a=a.next;while(a!==l);Xe(i,n.memoizedState)||(Ce=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function fc(){}function mc(e,n){var t=J,r=Be(),l=n(),i=!Xe(r.memoizedState,l);if(i&&(r.memoizedState=l,Ce=!0),r=r.queue,ca(gc.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||de!==null&&de.memoizedState.tag&1){if(t.flags|=2048,wr(9,vc.bind(null,t,r,l,n),void 0,null),he===null)throw Error(L(349));Yn&30||yc(t,n,l)}return l}function yc(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=J.updateQueue,n===null?(n={lastEffect:null,stores:null},J.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function vc(e,n,t,r){n.value=t,n.getSnapshot=r,xc(n)&&kc(e)}function gc(e,n,t){return t(function(){xc(n)&&kc(e)})}function xc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Xe(e,t)}catch{return!0}}function kc(e){var n=hn(e,1);n!==null&&Ge(n,e,1,-1)}function yo(e){var n=Ze();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:jr,lastRenderedState:e},n.queue=e,e=e.dispatch=Np.bind(null,J,e),[n.memoizedState,e]}function wr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=J.updateQueue,n===null?(n={lastEffect:null,stores:null},J.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Nc(){return Be().memoizedState}function is(e,n,t,r){var l=Ze();J.flags|=e,l.memoizedState=wr(1|n,t,void 0,r===void 0?null:r)}function Bs(e,n,t,r){var l=Be();r=r===void 0?null:r;var i=void 0;if(oe!==null){var a=oe.memoizedState;if(i=a.destroy,r!==null&&aa(r,a.deps)){l.memoizedState=wr(n,t,i,r);return}}J.flags|=e,l.memoizedState=wr(1|n,t,i,r)}function vo(e,n){return is(8390656,8,e,n)}function ca(e,n){return Bs(2048,8,e,n)}function jc(e,n){return Bs(4,2,e,n)}function wc(e,n){return Bs(4,4,e,n)}function Sc(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Tc(e,n,t){return t=t!=null?t.concat([e]):null,Bs(4,4,Sc.bind(null,n,e),t)}function da(){}function bc(e,n){var t=Be();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&aa(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Cc(e,n){var t=Be();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&aa(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Ec(e,n,t){return Yn&21?(Xe(t,n)||(t=Ou(),J.lanes|=t,Jn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Ce=!0),e.memoizedState=t)}function xp(e,n){var t=q;q=t!==0&&4>t?t:4,e(!0);var r=gl.transition;gl.transition={};try{e(!1),n()}finally{q=t,gl.transition=r}}function Lc(){return Be().memoizedState}function kp(e,n,t){var r=zn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},_c(e))zc(n,t);else if(t=dc(e,n,t,r),t!==null){var l=we();Ge(t,e,r,l),Pc(t,n,r)}}function Np(e,n,t){var r=zn(e),l={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(_c(e))zc(n,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var a=n.lastRenderedState,o=i(a,t);if(l.hasEagerState=!0,l.eagerState=o,Xe(o,a)){var u=n.interleaved;u===null?(l.next=l,ta(n)):(l.next=u.next,u.next=l),n.interleaved=l;return}}catch{}finally{}t=dc(e,n,l,r),t!==null&&(l=we(),Ge(t,e,r,l),Pc(t,n,r))}}function _c(e){var n=e.alternate;return e===J||n!==null&&n===J}function zc(e,n){sr=Es=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Pc(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Hi(e,t)}}var Ls={readContext:He,useCallback:ve,useContext:ve,useEffect:ve,useImperativeHandle:ve,useInsertionEffect:ve,useLayoutEffect:ve,useMemo:ve,useReducer:ve,useRef:ve,useState:ve,useDebugValue:ve,useDeferredValue:ve,useTransition:ve,useMutableSource:ve,useSyncExternalStore:ve,useId:ve,unstable_isNewReconciler:!1},jp={readContext:He,useCallback:function(e,n){return Ze().memoizedState=[e,n===void 0?null:n],e},useContext:He,useEffect:vo,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,is(4194308,4,Sc.bind(null,n,e),t)},useLayoutEffect:function(e,n){return is(4194308,4,e,n)},useInsertionEffect:function(e,n){return is(4,2,e,n)},useMemo:function(e,n){var t=Ze();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Ze();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=kp.bind(null,J,e),[r.memoizedState,e]},useRef:function(e){var n=Ze();return e={current:e},n.memoizedState=e},useState:yo,useDebugValue:da,useDeferredValue:function(e){return Ze().memoizedState=e},useTransition:function(){var e=yo(!1),n=e[0];return e=xp.bind(null,e[1]),Ze().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=J,l=Ze();if(X){if(t===void 0)throw Error(L(407));t=t()}else{if(t=n(),he===null)throw Error(L(349));Yn&30||yc(r,n,t)}l.memoizedState=t;var i={value:t,getSnapshot:n};return l.queue=i,vo(gc.bind(null,r,i,e),[e]),r.flags|=2048,wr(9,vc.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=Ze(),n=he.identifierPrefix;if(X){var t=on,r=an;t=(r&~(1<<32-Qe(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Nr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=gp++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},wp={readContext:He,useCallback:bc,useContext:He,useEffect:ca,useImperativeHandle:Tc,useInsertionEffect:jc,useLayoutEffect:wc,useMemo:Cc,useReducer:xl,useRef:Nc,useState:function(){return xl(jr)},useDebugValue:da,useDeferredValue:function(e){var n=Be();return Ec(n,oe.memoizedState,e)},useTransition:function(){var e=xl(jr)[0],n=Be().memoizedState;return[e,n]},useMutableSource:fc,useSyncExternalStore:mc,useId:Lc,unstable_isNewReconciler:!1},Sp={readContext:He,useCallback:bc,useContext:He,useEffect:ca,useImperativeHandle:Tc,useInsertionEffect:jc,useLayoutEffect:wc,useMemo:Cc,useReducer:kl,useRef:Nc,useState:function(){return kl(jr)},useDebugValue:da,useDeferredValue:function(e){var n=Be();return oe===null?n.memoizedState=e:Ec(n,oe.memoizedState,e)},useTransition:function(){var e=kl(jr)[0],n=Be().memoizedState;return[e,n]},useMutableSource:fc,useSyncExternalStore:mc,useId:Lc,unstable_isNewReconciler:!1};function qe(e,n){if(e&&e.defaultProps){n=Z({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function li(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:Z({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Us={isMounted:function(e){return(e=e._reactInternals)?nt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=we(),l=zn(e),i=un(r,l);i.payload=n,t!=null&&(i.callback=t),n=Ln(e,i,l),n!==null&&(Ge(n,e,l,r),ss(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=we(),l=zn(e),i=un(r,l);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=Ln(e,i,l),n!==null&&(Ge(n,e,l,r),ss(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=we(),r=zn(e),l=un(t,r);l.tag=2,n!=null&&(l.callback=n),n=Ln(e,l,r),n!==null&&(Ge(n,e,r,t),ss(n,e,r))}};function go(e,n,t,r,l,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):n.prototype&&n.prototype.isPureReactComponent?!mr(t,r)||!mr(l,i):!0}function Oc(e,n,t){var r=!1,l=Rn,i=n.contextType;return typeof i=="object"&&i!==null?i=He(i):(l=Le(n)?Gn:ke.current,r=n.contextTypes,i=(r=r!=null)?Ct(e,l):Rn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Us,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),n}function xo(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Us.enqueueReplaceState(n,n.state,null)}function ii(e,n,t,r){var l=e.stateNode;l.props=t,l.state=e.memoizedState,l.refs={},ra(e);var i=n.contextType;typeof i=="object"&&i!==null?l.context=He(i):(i=Le(n)?Gn:ke.current,l.context=Ct(e,i)),l.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(li(e,n,i,t),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(n=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),n!==l.state&&Us.enqueueReplaceState(l,l.state,null),bs(e,t,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function zt(e,n){try{var t="",r=n;do t+=Jd(r),r=r.return;while(r);var l=t}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:l,digest:null}}function Nl(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function ai(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Tp=typeof WeakMap=="function"?WeakMap:Map;function Ic(e,n,t){t=un(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){zs||(zs=!0,vi=r),ai(e,n)},t}function Rc(e,n,t){t=un(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=n.value;t.payload=function(){return r(l)},t.callback=function(){ai(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){ai(e,n),typeof r!="function"&&(_n===null?_n=new Set([this]):_n.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})}),t}function ko(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Tp;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(t)||(l.add(t),e=Vp.bind(null,e,n,t),n.then(e,e))}function No(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function jo(e,n,t,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=un(-1,1),n.tag=2,Ln(t,n,1))),t.lanes|=1),e)}var bp=fn.ReactCurrentOwner,Ce=!1;function je(e,n,t,r){n.child=e===null?cc(n,null,t,r):Lt(n,e.child,t,r)}function wo(e,n,t,r,l){t=t.render;var i=n.ref;return St(n,l),r=oa(e,n,t,r,i,l),t=ua(),e!==null&&!Ce?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,pn(e,n,l)):(X&&t&&Xi(n),n.flags|=1,je(e,n,r,l),n.child)}function So(e,n,t,r,l){if(e===null){var i=t.type;return typeof i=="function"&&!xa(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,Fc(e,n,i,r,l)):(e=cs(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&l)){var a=i.memoizedProps;if(t=t.compare,t=t!==null?t:mr,t(a,r)&&e.ref===n.ref)return pn(e,n,l)}return n.flags|=1,e=Pn(i,r),e.ref=n.ref,e.return=n,n.child=e}function Fc(e,n,t,r,l){if(e!==null){var i=e.memoizedProps;if(mr(i,r)&&e.ref===n.ref)if(Ce=!1,n.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(Ce=!0);else return n.lanes=e.lanes,pn(e,n,l)}return oi(e,n,t,r,l)}function Dc(e,n,t){var r=n.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(vt,Pe),Pe|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,K(vt,Pe),Pe|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,K(vt,Pe),Pe|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,K(vt,Pe),Pe|=r;return je(e,n,l,t),n.child}function Mc(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function oi(e,n,t,r,l){var i=Le(t)?Gn:ke.current;return i=Ct(n,i),St(n,l),t=oa(e,n,t,r,i,l),r=ua(),e!==null&&!Ce?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,pn(e,n,l)):(X&&r&&Xi(n),n.flags|=1,je(e,n,t,l),n.child)}function To(e,n,t,r,l){if(Le(t)){var i=!0;Ns(n)}else i=!1;if(St(n,l),n.stateNode===null)as(e,n),Oc(n,t,r),ii(n,t,r,l),r=!0;else if(e===null){var a=n.stateNode,o=n.memoizedProps;a.props=o;var u=a.context,c=t.contextType;typeof c=="object"&&c!==null?c=He(c):(c=Le(t)?Gn:ke.current,c=Ct(n,c));var f=t.getDerivedStateFromProps,p=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==r||u!==c)&&xo(n,a,r,c),gn=!1;var m=n.memoizedState;a.state=m,bs(n,r,a,l),u=n.memoizedState,o!==r||m!==u||Ee.current||gn?(typeof f=="function"&&(li(n,t,f,r),u=n.memoizedState),(o=gn||go(n,t,o,r,m,u,c))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=u),a.props=r,a.state=u,a.context=c,r=o):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{a=n.stateNode,hc(e,n),o=n.memoizedProps,c=n.type===n.elementType?o:qe(n.type,o),a.props=c,p=n.pendingProps,m=a.context,u=t.contextType,typeof u=="object"&&u!==null?u=He(u):(u=Le(t)?Gn:ke.current,u=Ct(n,u));var N=t.getDerivedStateFromProps;(f=typeof N=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==p||m!==u)&&xo(n,a,r,u),gn=!1,m=n.memoizedState,a.state=m,bs(n,r,a,l);var x=n.memoizedState;o!==p||m!==x||Ee.current||gn?(typeof N=="function"&&(li(n,t,N,r),x=n.memoizedState),(c=gn||go(n,t,c,r,m,x,u)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,x,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,x,u)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=x),a.props=r,a.state=x,a.context=u,r=c):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),r=!1)}return ui(e,n,t,r,i,l)}function ui(e,n,t,r,l,i){Mc(e,n);var a=(n.flags&128)!==0;if(!r&&!a)return l&&uo(n,t,!1),pn(e,n,i);r=n.stateNode,bp.current=n;var o=a&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&a?(n.child=Lt(n,e.child,null,i),n.child=Lt(n,null,o,i)):je(e,n,o,i),n.memoizedState=r.state,l&&uo(n,t,!0),n.child}function Vc(e){var n=e.stateNode;n.pendingContext?oo(e,n.pendingContext,n.pendingContext!==n.context):n.context&&oo(e,n.context,!1),sa(e,n.containerInfo)}function bo(e,n,t,r,l){return Et(),Ji(l),n.flags|=256,je(e,n,t,r),n.child}var ci={dehydrated:null,treeContext:null,retryLane:0};function di(e){return{baseLanes:e,cachePool:null,transitions:null}}function $c(e,n,t){var r=n.pendingProps,l=Y.current,i=!1,a=(n.flags&128)!==0,o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:(l&2)!==0),o?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),K(Y,l&1),e===null)return ri(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(a=r.children,e=r.fallback,i?(r=n.mode,i=n.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Ws(a,r,0,null),e=Qn(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=di(t),n.memoizedState=ci,e):ha(n,a));if(l=e.memoizedState,l!==null&&(o=l.dehydrated,o!==null))return Cp(e,n,a,r,o,l,t);if(i){i=r.fallback,a=n.mode,l=e.child,o=l.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&n.child!==l?(r=n.child,r.childLanes=0,r.pendingProps=u,n.deletions=null):(r=Pn(l,u),r.subtreeFlags=l.subtreeFlags&14680064),o!==null?i=Pn(o,i):(i=Qn(i,a,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,a=e.child.memoizedState,a=a===null?di(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~t,n.memoizedState=ci,r}return i=e.child,e=i.sibling,r=Pn(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function ha(e,n){return n=Ws({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Gr(e,n,t,r){return r!==null&&Ji(r),Lt(n,e.child,null,t),e=ha(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Cp(e,n,t,r,l,i,a){if(t)return n.flags&256?(n.flags&=-257,r=Nl(Error(L(422))),Gr(e,n,a,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,l=n.mode,r=Ws({mode:"visible",children:r.children},l,0,null),i=Qn(i,l,a,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&Lt(n,e.child,null,a),n.child.memoizedState=di(a),n.memoizedState=ci,i);if(!(n.mode&1))return Gr(e,n,a,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var o=r.dgst;return r=o,i=Error(L(419)),r=Nl(i,r,void 0),Gr(e,n,a,r)}if(o=(a&e.childLanes)!==0,Ce||o){if(r=he,r!==null){switch(a&-a){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|a)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,hn(e,l),Ge(r,e,l,-1))}return ga(),r=Nl(Error(L(421))),Gr(e,n,a,r)}return l.data==="$?"?(n.flags|=128,n.child=e.child,n=$p.bind(null,e),l._reactRetry=n,null):(e=i.treeContext,Oe=En(l.nextSibling),Ie=n,X=!0,We=null,e!==null&&(Me[Ve++]=an,Me[Ve++]=on,Me[Ve++]=Xn,an=e.id,on=e.overflow,Xn=n),n=ha(n,r.children),n.flags|=4096,n)}function Co(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),si(e.return,n,t)}function jl(e,n,t,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=l)}function Ac(e,n,t){var r=n.pendingProps,l=r.revealOrder,i=r.tail;if(je(e,n,r.children,t),r=Y.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Co(e,t,n);else if(e.tag===19)Co(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(K(Y,r),!(n.mode&1))n.memoizedState=null;else switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&Cs(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),jl(n,!1,l,t,i);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&Cs(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}jl(n,!0,t,null,i);break;case"together":jl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function as(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function pn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Jn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(L(153));if(n.child!==null){for(e=n.child,t=Pn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Pn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Ep(e,n,t){switch(n.tag){case 3:Vc(n),Et();break;case 5:pc(n);break;case 1:Le(n.type)&&Ns(n);break;case 4:sa(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,l=n.memoizedProps.value;K(Ss,r._currentValue),r._currentValue=l;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(K(Y,Y.current&1),n.flags|=128,null):t&n.child.childLanes?$c(e,n,t):(K(Y,Y.current&1),e=pn(e,n,t),e!==null?e.sibling:null);K(Y,Y.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Ac(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),K(Y,Y.current),r)break;return null;case 22:case 23:return n.lanes=0,Dc(e,n,t)}return pn(e,n,t)}var Hc,hi,Bc,Uc;Hc=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};hi=function(){};Bc=function(e,n,t,r){var l=e.memoizedProps;if(l!==r){e=n.stateNode,Kn(tn.current);var i=null;switch(t){case"input":l=Il(e,l),r=Il(e,r),i=[];break;case"select":l=Z({},l,{value:void 0}),r=Z({},r,{value:void 0}),i=[];break;case"textarea":l=Dl(e,l),r=Dl(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=xs)}Vl(t,r);var a;t=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var o=l[c];for(a in o)o.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(or.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(o=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&u!==o&&(u!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in u)u.hasOwnProperty(a)&&o[a]!==u[a]&&(t||(t={}),t[a]=u[a])}else t||(i||(i=[]),i.push(c,t)),t=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,o=o?o.__html:void 0,u!=null&&o!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(or.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&W("scroll",e),i||o===u||(i=[])):(i=i||[]).push(c,u))}t&&(i=i||[]).push("style",t);var c=i;(n.updateQueue=c)&&(n.flags|=4)}};Uc=function(e,n,t,r){t!==r&&(n.flags|=4)};function Wt(e,n){if(!X)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ge(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Lp(e,n,t){var r=n.pendingProps;switch(Yi(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ge(n),null;case 1:return Le(n.type)&&ks(),ge(n),null;case 3:return r=n.stateNode,_t(),Q(Ee),Q(ke),ia(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Wr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,We!==null&&(ki(We),We=null))),hi(e,n),ge(n),null;case 5:la(n);var l=Kn(kr.current);if(t=n.type,e!==null&&n.stateNode!=null)Bc(e,n,t,r,l),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(L(166));return ge(n),null}if(e=Kn(tn.current),Wr(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[en]=n,r[gr]=i,e=(n.mode&1)!==0,t){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(l=0;l<Jt.length;l++)W(Jt[l],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":Ra(r,i),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},W("invalid",r);break;case"textarea":Da(r,i),W("invalid",r)}Vl(t,i),l=null;for(var a in i)if(i.hasOwnProperty(a)){var o=i[a];a==="children"?typeof o=="string"?r.textContent!==o&&(i.suppressHydrationWarning!==!0&&Kr(r.textContent,o,e),l=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(i.suppressHydrationWarning!==!0&&Kr(r.textContent,o,e),l=["children",""+o]):or.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&W("scroll",r)}switch(t){case"input":Mr(r),Fa(r,i,!0);break;case"textarea":Mr(r),Ma(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=xs)}r=l,n.updateQueue=r,r!==null&&(n.flags|=4)}else{a=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=gu(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(t,{is:r.is}):(e=a.createElement(t),t==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,t),e[en]=n,e[gr]=r,Hc(e,n,!1,!1),n.stateNode=e;e:{switch(a=$l(t,r),t){case"dialog":W("cancel",e),W("close",e),l=r;break;case"iframe":case"object":case"embed":W("load",e),l=r;break;case"video":case"audio":for(l=0;l<Jt.length;l++)W(Jt[l],e);l=r;break;case"source":W("error",e),l=r;break;case"img":case"image":case"link":W("error",e),W("load",e),l=r;break;case"details":W("toggle",e),l=r;break;case"input":Ra(e,r),l=Il(e,r),W("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=Z({},r,{value:void 0}),W("invalid",e);break;case"textarea":Da(e,r),l=Dl(e,r),W("invalid",e);break;default:l=r}Vl(t,l),o=l;for(i in o)if(o.hasOwnProperty(i)){var u=o[i];i==="style"?Nu(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&xu(e,u)):i==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&ur(e,u):typeof u=="number"&&ur(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(or.hasOwnProperty(i)?u!=null&&i==="onScroll"&&W("scroll",e):u!=null&&Fi(e,i,u,a))}switch(t){case"input":Mr(e),Fa(e,r,!1);break;case"textarea":Mr(e),Ma(e);break;case"option":r.value!=null&&e.setAttribute("value",""+In(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?kt(e,!!r.multiple,i,!1):r.defaultValue!=null&&kt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=xs)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ge(n),null;case 6:if(e&&n.stateNode!=null)Uc(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(L(166));if(t=Kn(kr.current),Kn(tn.current),Wr(n)){if(r=n.stateNode,t=n.memoizedProps,r[en]=n,(i=r.nodeValue!==t)&&(e=Ie,e!==null))switch(e.tag){case 3:Kr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Kr(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[en]=n,n.stateNode=r}return ge(n),null;case 13:if(Q(Y),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(X&&Oe!==null&&n.mode&1&&!(n.flags&128))oc(),Et(),n.flags|=98560,i=!1;else if(i=Wr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(L(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(L(317));i[en]=n}else Et(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ge(n),i=!1}else We!==null&&(ki(We),We=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||Y.current&1?ue===0&&(ue=3):ga())),n.updateQueue!==null&&(n.flags|=4),ge(n),null);case 4:return _t(),hi(e,n),e===null&&yr(n.stateNode.containerInfo),ge(n),null;case 10:return na(n.type._context),ge(n),null;case 17:return Le(n.type)&&ks(),ge(n),null;case 19:if(Q(Y),i=n.memoizedState,i===null)return ge(n),null;if(r=(n.flags&128)!==0,a=i.rendering,a===null)if(r)Wt(i,!1);else{if(ue!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(a=Cs(e),a!==null){for(n.flags|=128,Wt(i,!1),r=a.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return K(Y,Y.current&1|2),n.child}e=e.sibling}i.tail!==null&&re()>Pt&&(n.flags|=128,r=!0,Wt(i,!1),n.lanes=4194304)}else{if(!r)if(e=Cs(a),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Wt(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!X)return ge(n),null}else 2*re()-i.renderingStartTime>Pt&&t!==1073741824&&(n.flags|=128,r=!0,Wt(i,!1),n.lanes=4194304);i.isBackwards?(a.sibling=n.child,n.child=a):(t=i.last,t!==null?t.sibling=a:n.child=a,i.last=a)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=re(),n.sibling=null,t=Y.current,K(Y,r?t&1|2:t&1),n):(ge(n),null);case 22:case 23:return va(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Pe&1073741824&&(ge(n),n.subtreeFlags&6&&(n.flags|=8192)):ge(n),null;case 24:return null;case 25:return null}throw Error(L(156,n.tag))}function _p(e,n){switch(Yi(n),n.tag){case 1:return Le(n.type)&&ks(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return _t(),Q(Ee),Q(ke),ia(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return la(n),null;case 13:if(Q(Y),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(L(340));Et()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Q(Y),null;case 4:return _t(),null;case 10:return na(n.type._context),null;case 22:case 23:return va(),null;case 24:return null;default:return null}}var Xr=!1,xe=!1,zp=typeof WeakSet=="function"?WeakSet:Set,I=null;function yt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){ne(e,n,r)}else t.current=null}function pi(e,n,t){try{t()}catch(r){ne(e,n,r)}}var Eo=!1;function Pp(e,n){if(Xl=ys,e=Gu(),Gi(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var a=0,o=-1,u=-1,c=0,f=0,p=e,m=null;n:for(;;){for(var N;p!==t||l!==0&&p.nodeType!==3||(o=a+l),p!==i||r!==0&&p.nodeType!==3||(u=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(N=p.firstChild)!==null;)m=p,p=N;for(;;){if(p===e)break n;if(m===t&&++c===l&&(o=a),m===i&&++f===r&&(u=a),(N=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=N}t=o===-1||u===-1?null:{start:o,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(Yl={focusedElem:e,selectionRange:t},ys=!1,I=n;I!==null;)if(n=I,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,I=e;else for(;I!==null;){n=I;try{var x=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var k=x.memoizedProps,g=x.memoizedState,d=n.stateNode,h=d.getSnapshotBeforeUpdate(n.elementType===n.type?k:qe(n.type,k),g);d.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var y=n.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(w){ne(n,n.return,w)}if(e=n.sibling,e!==null){e.return=n.return,I=e;break}I=n.return}return x=Eo,Eo=!1,x}function lr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&pi(n,t,i)}l=l.next}while(l!==r)}}function qs(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function fi(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function qc(e){var n=e.alternate;n!==null&&(e.alternate=null,qc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[en],delete n[gr],delete n[ei],delete n[fp],delete n[mp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Kc(e){return e.tag===5||e.tag===3||e.tag===4}function Lo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Kc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function mi(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=xs));else if(r!==4&&(e=e.child,e!==null))for(mi(e,n,t),e=e.sibling;e!==null;)mi(e,n,t),e=e.sibling}function yi(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(yi(e,n,t),e=e.sibling;e!==null;)yi(e,n,t),e=e.sibling}var pe=null,Ke=!1;function yn(e,n,t){for(t=t.child;t!==null;)Wc(e,n,t),t=t.sibling}function Wc(e,n,t){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(Ds,t)}catch{}switch(t.tag){case 5:xe||yt(t,n);case 6:var r=pe,l=Ke;pe=null,yn(e,n,t),pe=r,Ke=l,pe!==null&&(Ke?(e=pe,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):pe.removeChild(t.stateNode));break;case 18:pe!==null&&(Ke?(e=pe,t=t.stateNode,e.nodeType===8?ml(e.parentNode,t):e.nodeType===1&&ml(e,t),pr(e)):ml(pe,t.stateNode));break;case 4:r=pe,l=Ke,pe=t.stateNode.containerInfo,Ke=!0,yn(e,n,t),pe=r,Ke=l;break;case 0:case 11:case 14:case 15:if(!xe&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&pi(t,n,a),l=l.next}while(l!==r)}yn(e,n,t);break;case 1:if(!xe&&(yt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(o){ne(t,n,o)}yn(e,n,t);break;case 21:yn(e,n,t);break;case 22:t.mode&1?(xe=(r=xe)||t.memoizedState!==null,yn(e,n,t),xe=r):yn(e,n,t);break;default:yn(e,n,t)}}function _o(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new zp),n.forEach(function(r){var l=Ap.bind(null,e,r);t.has(r)||(t.add(r),r.then(l,l))})}}function Ue(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];try{var i=e,a=n,o=a;e:for(;o!==null;){switch(o.tag){case 5:pe=o.stateNode,Ke=!1;break e;case 3:pe=o.stateNode.containerInfo,Ke=!0;break e;case 4:pe=o.stateNode.containerInfo,Ke=!0;break e}o=o.return}if(pe===null)throw Error(L(160));Wc(i,a,l),pe=null,Ke=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(c){ne(l,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Qc(n,e),n=n.sibling}function Qc(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ue(n,e),Je(e),r&4){try{lr(3,e,e.return),qs(3,e)}catch(k){ne(e,e.return,k)}try{lr(5,e,e.return)}catch(k){ne(e,e.return,k)}}break;case 1:Ue(n,e),Je(e),r&512&&t!==null&&yt(t,t.return);break;case 5:if(Ue(n,e),Je(e),r&512&&t!==null&&yt(t,t.return),e.flags&32){var l=e.stateNode;try{ur(l,"")}catch(k){ne(e,e.return,k)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,a=t!==null?t.memoizedProps:i,o=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{o==="input"&&i.type==="radio"&&i.name!=null&&yu(l,i),$l(o,a);var c=$l(o,i);for(a=0;a<u.length;a+=2){var f=u[a],p=u[a+1];f==="style"?Nu(l,p):f==="dangerouslySetInnerHTML"?xu(l,p):f==="children"?ur(l,p):Fi(l,f,p,c)}switch(o){case"input":Rl(l,i);break;case"textarea":vu(l,i);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var N=i.value;N!=null?kt(l,!!i.multiple,N,!1):m!==!!i.multiple&&(i.defaultValue!=null?kt(l,!!i.multiple,i.defaultValue,!0):kt(l,!!i.multiple,i.multiple?[]:"",!1))}l[gr]=i}catch(k){ne(e,e.return,k)}}break;case 6:if(Ue(n,e),Je(e),r&4){if(e.stateNode===null)throw Error(L(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(k){ne(e,e.return,k)}}break;case 3:if(Ue(n,e),Je(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{pr(n.containerInfo)}catch(k){ne(e,e.return,k)}break;case 4:Ue(n,e),Je(e);break;case 13:Ue(n,e),Je(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(ma=re())),r&4&&_o(e);break;case 22:if(f=t!==null&&t.memoizedState!==null,e.mode&1?(xe=(c=xe)||f,Ue(n,e),xe=c):Ue(n,e),Je(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!f&&e.mode&1)for(I=e,f=e.child;f!==null;){for(p=I=f;I!==null;){switch(m=I,N=m.child,m.tag){case 0:case 11:case 14:case 15:lr(4,m,m.return);break;case 1:yt(m,m.return);var x=m.stateNode;if(typeof x.componentWillUnmount=="function"){r=m,t=m.return;try{n=r,x.props=n.memoizedProps,x.state=n.memoizedState,x.componentWillUnmount()}catch(k){ne(r,t,k)}}break;case 5:yt(m,m.return);break;case 22:if(m.memoizedState!==null){Po(p);continue}}N!==null?(N.return=m,I=N):Po(p)}f=f.sibling}e:for(f=null,p=e;;){if(p.tag===5){if(f===null){f=p;try{l=p.stateNode,c?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(o=p.stateNode,u=p.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,o.style.display=ku("display",a))}catch(k){ne(e,e.return,k)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(k){ne(e,e.return,k)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ue(n,e),Je(e),r&4&&_o(e);break;case 21:break;default:Ue(n,e),Je(e)}}function Je(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Kc(t)){var r=t;break e}t=t.return}throw Error(L(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(ur(l,""),r.flags&=-33);var i=Lo(e);yi(e,i,l);break;case 3:case 4:var a=r.stateNode.containerInfo,o=Lo(e);mi(e,o,a);break;default:throw Error(L(161))}}catch(u){ne(e,e.return,u)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Op(e,n,t){I=e,Gc(e)}function Gc(e,n,t){for(var r=(e.mode&1)!==0;I!==null;){var l=I,i=l.child;if(l.tag===22&&r){var a=l.memoizedState!==null||Xr;if(!a){var o=l.alternate,u=o!==null&&o.memoizedState!==null||xe;o=Xr;var c=xe;if(Xr=a,(xe=u)&&!c)for(I=l;I!==null;)a=I,u=a.child,a.tag===22&&a.memoizedState!==null?Oo(l):u!==null?(u.return=a,I=u):Oo(l);for(;i!==null;)I=i,Gc(i),i=i.sibling;I=l,Xr=o,xe=c}zo(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,I=i):zo(e)}}function zo(e){for(;I!==null;){var n=I;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:xe||qs(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!xe)if(t===null)r.componentDidMount();else{var l=n.elementType===n.type?t.memoizedProps:qe(n.type,t.memoizedProps);r.componentDidUpdate(l,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&mo(n,i,r);break;case 3:var a=n.updateQueue;if(a!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}mo(n,a,t)}break;case 5:var o=n.stateNode;if(t===null&&n.flags&4){t=o;var u=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&pr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}xe||n.flags&512&&fi(n)}catch(m){ne(n,n.return,m)}}if(n===e){I=null;break}if(t=n.sibling,t!==null){t.return=n.return,I=t;break}I=n.return}}function Po(e){for(;I!==null;){var n=I;if(n===e){I=null;break}var t=n.sibling;if(t!==null){t.return=n.return,I=t;break}I=n.return}}function Oo(e){for(;I!==null;){var n=I;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{qs(4,n)}catch(u){ne(n,t,u)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var l=n.return;try{r.componentDidMount()}catch(u){ne(n,l,u)}}var i=n.return;try{fi(n)}catch(u){ne(n,i,u)}break;case 5:var a=n.return;try{fi(n)}catch(u){ne(n,a,u)}}}catch(u){ne(n,n.return,u)}if(n===e){I=null;break}var o=n.sibling;if(o!==null){o.return=n.return,I=o;break}I=n.return}}var Ip=Math.ceil,_s=fn.ReactCurrentDispatcher,pa=fn.ReactCurrentOwner,Ae=fn.ReactCurrentBatchConfig,U=0,he=null,se=null,me=0,Pe=0,vt=Dn(0),ue=0,Sr=null,Jn=0,Ks=0,fa=0,ir=null,be=null,ma=0,Pt=1/0,sn=null,zs=!1,vi=null,_n=null,Yr=!1,jn=null,Ps=0,ar=0,gi=null,os=-1,us=0;function we(){return U&6?re():os!==-1?os:os=re()}function zn(e){return e.mode&1?U&2&&me!==0?me&-me:vp.transition!==null?(us===0&&(us=Ou()),us):(e=q,e!==0||(e=window.event,e=e===void 0?16:$u(e.type)),e):1}function Ge(e,n,t,r){if(50<ar)throw ar=0,gi=null,Error(L(185));_r(e,t,r),(!(U&2)||e!==he)&&(e===he&&(!(U&2)&&(Ks|=t),ue===4&&kn(e,me)),_e(e,r),t===1&&U===0&&!(n.mode&1)&&(Pt=re()+500,Hs&&Mn()))}function _e(e,n){var t=e.callbackNode;vh(e,n);var r=ms(e,e===he?me:0);if(r===0)t!==null&&Aa(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Aa(t),n===1)e.tag===0?yp(Io.bind(null,e)):lc(Io.bind(null,e)),hp(function(){!(U&6)&&Mn()}),t=null;else{switch(Iu(r)){case 1:t=Ai;break;case 4:t=zu;break;case 16:t=fs;break;case 536870912:t=Pu;break;default:t=fs}t=rd(t,Xc.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Xc(e,n){if(os=-1,us=0,U&6)throw Error(L(327));var t=e.callbackNode;if(Tt()&&e.callbackNode!==t)return null;var r=ms(e,e===he?me:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Os(e,r);else{n=r;var l=U;U|=2;var i=Jc();(he!==e||me!==n)&&(sn=null,Pt=re()+500,Wn(e,n));do try{Dp();break}catch(o){Yc(e,o)}while(!0);ea(),_s.current=i,U=l,se!==null?n=0:(he=null,me=0,n=ue)}if(n!==0){if(n===2&&(l=ql(e),l!==0&&(r=l,n=xi(e,l))),n===1)throw t=Sr,Wn(e,0),kn(e,r),_e(e,re()),t;if(n===6)kn(e,r);else{if(l=e.current.alternate,!(r&30)&&!Rp(l)&&(n=Os(e,r),n===2&&(i=ql(e),i!==0&&(r=i,n=xi(e,i))),n===1))throw t=Sr,Wn(e,0),kn(e,r),_e(e,re()),t;switch(e.finishedWork=l,e.finishedLanes=r,n){case 0:case 1:throw Error(L(345));case 2:Bn(e,be,sn);break;case 3:if(kn(e,r),(r&130023424)===r&&(n=ma+500-re(),10<n)){if(ms(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){we(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Zl(Bn.bind(null,e,be,sn),n);break}Bn(e,be,sn);break;case 4:if(kn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,l=-1;0<r;){var a=31-Qe(r);i=1<<a,a=n[a],a>l&&(l=a),r&=~i}if(r=l,r=re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ip(r/1960))-r,10<r){e.timeoutHandle=Zl(Bn.bind(null,e,be,sn),r);break}Bn(e,be,sn);break;case 5:Bn(e,be,sn);break;default:throw Error(L(329))}}}return _e(e,re()),e.callbackNode===t?Xc.bind(null,e):null}function xi(e,n){var t=ir;return e.current.memoizedState.isDehydrated&&(Wn(e,n).flags|=256),e=Os(e,n),e!==2&&(n=be,be=t,n!==null&&ki(n)),e}function ki(e){be===null?be=e:be.push.apply(be,e)}function Rp(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var l=t[r],i=l.getSnapshot;l=l.value;try{if(!Xe(i(),l))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function kn(e,n){for(n&=~fa,n&=~Ks,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Qe(n),r=1<<t;e[t]=-1,n&=~r}}function Io(e){if(U&6)throw Error(L(327));Tt();var n=ms(e,0);if(!(n&1))return _e(e,re()),null;var t=Os(e,n);if(e.tag!==0&&t===2){var r=ql(e);r!==0&&(n=r,t=xi(e,r))}if(t===1)throw t=Sr,Wn(e,0),kn(e,n),_e(e,re()),t;if(t===6)throw Error(L(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Bn(e,be,sn),_e(e,re()),null}function ya(e,n){var t=U;U|=1;try{return e(n)}finally{U=t,U===0&&(Pt=re()+500,Hs&&Mn())}}function Zn(e){jn!==null&&jn.tag===0&&!(U&6)&&Tt();var n=U;U|=1;var t=Ae.transition,r=q;try{if(Ae.transition=null,q=1,e)return e()}finally{q=r,Ae.transition=t,U=n,!(U&6)&&Mn()}}function va(){Pe=vt.current,Q(vt)}function Wn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,dp(t)),se!==null)for(t=se.return;t!==null;){var r=t;switch(Yi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ks();break;case 3:_t(),Q(Ee),Q(ke),ia();break;case 5:la(r);break;case 4:_t();break;case 13:Q(Y);break;case 19:Q(Y);break;case 10:na(r.type._context);break;case 22:case 23:va()}t=t.return}if(he=e,se=e=Pn(e.current,null),me=Pe=n,ue=0,Sr=null,fa=Ks=Jn=0,be=ir=null,qn!==null){for(n=0;n<qn.length;n++)if(t=qn[n],r=t.interleaved,r!==null){t.interleaved=null;var l=r.next,i=t.pending;if(i!==null){var a=i.next;i.next=l,r.next=a}t.pending=r}qn=null}return e}function Yc(e,n){do{var t=se;try{if(ea(),ls.current=Ls,Es){for(var r=J.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Es=!1}if(Yn=0,de=oe=J=null,sr=!1,Nr=0,pa.current=null,t===null||t.return===null){ue=1,Sr=n,se=null;break}e:{var i=e,a=t.return,o=t,u=n;if(n=me,o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=o,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var N=No(a);if(N!==null){N.flags&=-257,jo(N,a,o,i,n),N.mode&1&&ko(i,c,n),n=N,u=c;var x=n.updateQueue;if(x===null){var k=new Set;k.add(u),n.updateQueue=k}else x.add(u);break e}else{if(!(n&1)){ko(i,c,n),ga();break e}u=Error(L(426))}}else if(X&&o.mode&1){var g=No(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),jo(g,a,o,i,n),Ji(zt(u,o));break e}}i=u=zt(u,o),ue!==4&&(ue=2),ir===null?ir=[i]:ir.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var d=Ic(i,u,n);fo(i,d);break e;case 1:o=u;var h=i.type,y=i.stateNode;if(!(i.flags&128)&&(typeof h.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(_n===null||!_n.has(y)))){i.flags|=65536,n&=-n,i.lanes|=n;var w=Rc(i,o,n);fo(i,w);break e}}i=i.return}while(i!==null)}ed(t)}catch(S){n=S,se===t&&t!==null&&(se=t=t.return);continue}break}while(!0)}function Jc(){var e=_s.current;return _s.current=Ls,e===null?Ls:e}function ga(){(ue===0||ue===3||ue===2)&&(ue=4),he===null||!(Jn&268435455)&&!(Ks&268435455)||kn(he,me)}function Os(e,n){var t=U;U|=2;var r=Jc();(he!==e||me!==n)&&(sn=null,Wn(e,n));do try{Fp();break}catch(l){Yc(e,l)}while(!0);if(ea(),U=t,_s.current=r,se!==null)throw Error(L(261));return he=null,me=0,ue}function Fp(){for(;se!==null;)Zc(se)}function Dp(){for(;se!==null&&!oh();)Zc(se)}function Zc(e){var n=td(e.alternate,e,Pe);e.memoizedProps=e.pendingProps,n===null?ed(e):se=n,pa.current=null}function ed(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=_p(t,n),t!==null){t.flags&=32767,se=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ue=6,se=null;return}}else if(t=Lp(t,n,Pe),t!==null){se=t;return}if(n=n.sibling,n!==null){se=n;return}se=n=e}while(n!==null);ue===0&&(ue=5)}function Bn(e,n,t){var r=q,l=Ae.transition;try{Ae.transition=null,q=1,Mp(e,n,t,r)}finally{Ae.transition=l,q=r}return null}function Mp(e,n,t,r){do Tt();while(jn!==null);if(U&6)throw Error(L(327));t=e.finishedWork;var l=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(L(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(gh(e,i),e===he&&(se=he=null,me=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Yr||(Yr=!0,rd(fs,function(){return Tt(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=Ae.transition,Ae.transition=null;var a=q;q=1;var o=U;U|=4,pa.current=null,Pp(e,t),Qc(t,e),sp(Yl),ys=!!Xl,Yl=Xl=null,e.current=t,Op(t),uh(),U=o,q=a,Ae.transition=i}else e.current=t;if(Yr&&(Yr=!1,jn=e,Ps=l),i=e.pendingLanes,i===0&&(_n=null),hh(t.stateNode),_e(e,re()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)l=n[t],r(l.value,{componentStack:l.stack,digest:l.digest});if(zs)throw zs=!1,e=vi,vi=null,e;return Ps&1&&e.tag!==0&&Tt(),i=e.pendingLanes,i&1?e===gi?ar++:(ar=0,gi=e):ar=0,Mn(),null}function Tt(){if(jn!==null){var e=Iu(Ps),n=Ae.transition,t=q;try{if(Ae.transition=null,q=16>e?16:e,jn===null)var r=!1;else{if(e=jn,jn=null,Ps=0,U&6)throw Error(L(331));var l=U;for(U|=4,I=e.current;I!==null;){var i=I,a=i.child;if(I.flags&16){var o=i.deletions;if(o!==null){for(var u=0;u<o.length;u++){var c=o[u];for(I=c;I!==null;){var f=I;switch(f.tag){case 0:case 11:case 15:lr(8,f,i)}var p=f.child;if(p!==null)p.return=f,I=p;else for(;I!==null;){f=I;var m=f.sibling,N=f.return;if(qc(f),f===c){I=null;break}if(m!==null){m.return=N,I=m;break}I=N}}}var x=i.alternate;if(x!==null){var k=x.child;if(k!==null){x.child=null;do{var g=k.sibling;k.sibling=null,k=g}while(k!==null)}}I=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,I=a;else e:for(;I!==null;){if(i=I,i.flags&2048)switch(i.tag){case 0:case 11:case 15:lr(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,I=d;break e}I=i.return}}var h=e.current;for(I=h;I!==null;){a=I;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,I=y;else e:for(a=h;I!==null;){if(o=I,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:qs(9,o)}}catch(S){ne(o,o.return,S)}if(o===a){I=null;break e}var w=o.sibling;if(w!==null){w.return=o.return,I=w;break e}I=o.return}}if(U=l,Mn(),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(Ds,e)}catch{}r=!0}return r}finally{q=t,Ae.transition=n}}return!1}function Ro(e,n,t){n=zt(t,n),n=Ic(e,n,1),e=Ln(e,n,1),n=we(),e!==null&&(_r(e,1,n),_e(e,n))}function ne(e,n,t){if(e.tag===3)Ro(e,e,t);else for(;n!==null;){if(n.tag===3){Ro(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(_n===null||!_n.has(r))){e=zt(t,e),e=Rc(n,e,1),n=Ln(n,e,1),e=we(),n!==null&&(_r(n,1,e),_e(n,e));break}}n=n.return}}function Vp(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=we(),e.pingedLanes|=e.suspendedLanes&t,he===e&&(me&t)===t&&(ue===4||ue===3&&(me&130023424)===me&&500>re()-ma?Wn(e,0):fa|=t),_e(e,n)}function nd(e,n){n===0&&(e.mode&1?(n=Ar,Ar<<=1,!(Ar&130023424)&&(Ar=4194304)):n=1);var t=we();e=hn(e,n),e!==null&&(_r(e,n,t),_e(e,t))}function $p(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),nd(e,t)}function Ap(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(n),nd(e,t)}var td;td=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ee.current)Ce=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Ce=!1,Ep(e,n,t);Ce=!!(e.flags&131072)}else Ce=!1,X&&n.flags&1048576&&ic(n,ws,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;as(e,n),e=n.pendingProps;var l=Ct(n,ke.current);St(n,t),l=oa(null,n,r,e,l,t);var i=ua();return n.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Le(r)?(i=!0,Ns(n)):i=!1,n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,ra(n),l.updater=Us,n.stateNode=l,l._reactInternals=n,ii(n,r,e,t),n=ui(null,n,r,!0,i,t)):(n.tag=0,X&&i&&Xi(n),je(null,n,l,t),n=n.child),n;case 16:r=n.elementType;e:{switch(as(e,n),e=n.pendingProps,l=r._init,r=l(r._payload),n.type=r,l=n.tag=Bp(r),e=qe(r,e),l){case 0:n=oi(null,n,r,e,t);break e;case 1:n=To(null,n,r,e,t);break e;case 11:n=wo(null,n,r,e,t);break e;case 14:n=So(null,n,r,qe(r.type,e),t);break e}throw Error(L(306,r,""))}return n;case 0:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:qe(r,l),oi(e,n,r,l,t);case 1:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:qe(r,l),To(e,n,r,l,t);case 3:e:{if(Vc(n),e===null)throw Error(L(387));r=n.pendingProps,i=n.memoizedState,l=i.element,hc(e,n),bs(n,r,null,t);var a=n.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){l=zt(Error(L(423)),n),n=bo(e,n,r,t,l);break e}else if(r!==l){l=zt(Error(L(424)),n),n=bo(e,n,r,t,l);break e}else for(Oe=En(n.stateNode.containerInfo.firstChild),Ie=n,X=!0,We=null,t=cc(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Et(),r===l){n=pn(e,n,t);break e}je(e,n,r,t)}n=n.child}return n;case 5:return pc(n),e===null&&ri(n),r=n.type,l=n.pendingProps,i=e!==null?e.memoizedProps:null,a=l.children,Jl(r,l)?a=null:i!==null&&Jl(r,i)&&(n.flags|=32),Mc(e,n),je(e,n,a,t),n.child;case 6:return e===null&&ri(n),null;case 13:return $c(e,n,t);case 4:return sa(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Lt(n,null,r,t):je(e,n,r,t),n.child;case 11:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:qe(r,l),wo(e,n,r,l,t);case 7:return je(e,n,n.pendingProps,t),n.child;case 8:return je(e,n,n.pendingProps.children,t),n.child;case 12:return je(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,l=n.pendingProps,i=n.memoizedProps,a=l.value,K(Ss,r._currentValue),r._currentValue=a,i!==null)if(Xe(i.value,a)){if(i.children===l.children&&!Ee.current){n=pn(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var o=i.dependencies;if(o!==null){a=i.child;for(var u=o.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=un(-1,t&-t),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}i.lanes|=t,u=i.alternate,u!==null&&(u.lanes|=t),si(i.return,t,n),o.lanes|=t;break}u=u.next}}else if(i.tag===10)a=i.type===n.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(L(341));a.lanes|=t,o=a.alternate,o!==null&&(o.lanes|=t),si(a,t,n),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===n){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}je(e,n,l.children,t),n=n.child}return n;case 9:return l=n.type,r=n.pendingProps.children,St(n,t),l=He(l),r=r(l),n.flags|=1,je(e,n,r,t),n.child;case 14:return r=n.type,l=qe(r,n.pendingProps),l=qe(r.type,l),So(e,n,r,l,t);case 15:return Fc(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:qe(r,l),as(e,n),n.tag=1,Le(r)?(e=!0,Ns(n)):e=!1,St(n,t),Oc(n,r,l),ii(n,r,l,t),ui(null,n,r,!0,e,t);case 19:return Ac(e,n,t);case 22:return Dc(e,n,t)}throw Error(L(156,n.tag))};function rd(e,n){return _u(e,n)}function Hp(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $e(e,n,t,r){return new Hp(e,n,t,r)}function xa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Bp(e){if(typeof e=="function")return xa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Mi)return 11;if(e===Vi)return 14}return 2}function Pn(e,n){var t=e.alternate;return t===null?(t=$e(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function cs(e,n,t,r,l,i){var a=2;if(r=e,typeof e=="function")xa(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case at:return Qn(t.children,l,i,n);case Di:a=8,l|=8;break;case _l:return e=$e(12,t,n,l|2),e.elementType=_l,e.lanes=i,e;case zl:return e=$e(13,t,n,l),e.elementType=zl,e.lanes=i,e;case Pl:return e=$e(19,t,n,l),e.elementType=Pl,e.lanes=i,e;case pu:return Ws(t,l,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case du:a=10;break e;case hu:a=9;break e;case Mi:a=11;break e;case Vi:a=14;break e;case vn:a=16,r=null;break e}throw Error(L(130,e==null?e:typeof e,""))}return n=$e(a,t,n,l),n.elementType=e,n.type=r,n.lanes=i,n}function Qn(e,n,t,r){return e=$e(7,e,r,n),e.lanes=t,e}function Ws(e,n,t,r){return e=$e(22,e,r,n),e.elementType=pu,e.lanes=t,e.stateNode={isHidden:!1},e}function wl(e,n,t){return e=$e(6,e,null,n),e.lanes=t,e}function Sl(e,n,t){return n=$e(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Up(e,n,t,r,l){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sl(0),this.expirationTimes=sl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function ka(e,n,t,r,l,i,a,o,u){return e=new Up(e,n,t,o,u),n===1?(n=1,i===!0&&(n|=8)):n=0,i=$e(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ra(i),e}function qp(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:it,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function sd(e){if(!e)return Rn;e=e._reactInternals;e:{if(nt(e)!==e||e.tag!==1)throw Error(L(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Le(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(L(171))}if(e.tag===1){var t=e.type;if(Le(t))return sc(e,t,n)}return n}function ld(e,n,t,r,l,i,a,o,u){return e=ka(t,r,!0,e,l,i,a,o,u),e.context=sd(null),t=e.current,r=we(),l=zn(t),i=un(r,l),i.callback=n??null,Ln(t,i,l),e.current.lanes=l,_r(e,l,r),_e(e,r),e}function Qs(e,n,t,r){var l=n.current,i=we(),a=zn(l);return t=sd(t),n.context===null?n.context=t:n.pendingContext=t,n=un(i,a),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Ln(l,n,a),e!==null&&(Ge(e,l,a,i),ss(e,l,a)),a}function Is(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Fo(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Na(e,n){Fo(e,n),(e=e.alternate)&&Fo(e,n)}function Kp(){return null}var id=typeof reportError=="function"?reportError:function(e){console.error(e)};function ja(e){this._internalRoot=e}Gs.prototype.render=ja.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(L(409));Qs(e,n,null,null)};Gs.prototype.unmount=ja.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Zn(function(){Qs(null,e,null,null)}),n[dn]=null}};function Gs(e){this._internalRoot=e}Gs.prototype.unstable_scheduleHydration=function(e){if(e){var n=Du();e={blockedOn:null,target:e,priority:n};for(var t=0;t<xn.length&&n!==0&&n<xn[t].priority;t++);xn.splice(t,0,e),t===0&&Vu(e)}};function wa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Xs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Do(){}function Wp(e,n,t,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var c=Is(a);i.call(c)}}var a=ld(n,r,e,0,null,!1,!1,"",Do);return e._reactRootContainer=a,e[dn]=a.current,yr(e.nodeType===8?e.parentNode:e),Zn(),a}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var o=r;r=function(){var c=Is(u);o.call(c)}}var u=ka(e,0,!1,null,null,!1,!1,"",Do);return e._reactRootContainer=u,e[dn]=u.current,yr(e.nodeType===8?e.parentNode:e),Zn(function(){Qs(n,u,t,r)}),u}function Ys(e,n,t,r,l){var i=t._reactRootContainer;if(i){var a=i;if(typeof l=="function"){var o=l;l=function(){var u=Is(a);o.call(u)}}Qs(n,a,e,l)}else a=Wp(t,n,e,l,r);return Is(a)}Ru=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Yt(n.pendingLanes);t!==0&&(Hi(n,t|1),_e(n,re()),!(U&6)&&(Pt=re()+500,Mn()))}break;case 13:Zn(function(){var r=hn(e,1);if(r!==null){var l=we();Ge(r,e,1,l)}}),Na(e,1)}};Bi=function(e){if(e.tag===13){var n=hn(e,134217728);if(n!==null){var t=we();Ge(n,e,134217728,t)}Na(e,134217728)}};Fu=function(e){if(e.tag===13){var n=zn(e),t=hn(e,n);if(t!==null){var r=we();Ge(t,e,n,r)}Na(e,n)}};Du=function(){return q};Mu=function(e,n){var t=q;try{return q=e,n()}finally{q=t}};Hl=function(e,n,t){switch(n){case"input":if(Rl(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=As(r);if(!l)throw Error(L(90));mu(r),Rl(r,l)}}}break;case"textarea":vu(e,t);break;case"select":n=t.value,n!=null&&kt(e,!!t.multiple,n,!1)}};Su=ya;Tu=Zn;var Qp={usingClientEntryPoint:!1,Events:[Pr,dt,As,ju,wu,ya]},Qt={findFiberByHostInstance:Un,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Gp={bundleType:Qt.bundleType,version:Qt.version,rendererPackageName:Qt.rendererPackageName,rendererConfig:Qt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Eu(e),e===null?null:e.stateNode},findFiberByHostInstance:Qt.findFiberByHostInstance||Kp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jr.isDisabled&&Jr.supportsFiber)try{Ds=Jr.inject(Gp),nn=Jr}catch{}}Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qp;Fe.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wa(n))throw Error(L(200));return qp(e,n,null,t)};Fe.createRoot=function(e,n){if(!wa(e))throw Error(L(299));var t=!1,r="",l=id;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),n=ka(e,1,!1,null,null,t,!1,r,l),e[dn]=n.current,yr(e.nodeType===8?e.parentNode:e),new ja(n)};Fe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(L(188)):(e=Object.keys(e).join(","),Error(L(268,e)));return e=Eu(n),e=e===null?null:e.stateNode,e};Fe.flushSync=function(e){return Zn(e)};Fe.hydrate=function(e,n,t){if(!Xs(n))throw Error(L(200));return Ys(null,e,n,!0,t)};Fe.hydrateRoot=function(e,n,t){if(!wa(e))throw Error(L(405));var r=t!=null&&t.hydratedSources||null,l=!1,i="",a=id;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),n=ld(n,null,e,1,t??null,l,!1,i,a),e[dn]=n.current,yr(e),r)for(e=0;e<r.length;e++)t=r[e],l=t._getVersion,l=l(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,l]:n.mutableSourceEagerHydrationData.push(t,l);return new Gs(n)};Fe.render=function(e,n,t){if(!Xs(n))throw Error(L(200));return Ys(null,e,n,!1,t)};Fe.unmountComponentAtNode=function(e){if(!Xs(e))throw Error(L(40));return e._reactRootContainer?(Zn(function(){Ys(null,null,e,!1,function(){e._reactRootContainer=null,e[dn]=null})}),!0):!1};Fe.unstable_batchedUpdates=ya;Fe.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Xs(t))throw Error(L(200));if(e==null||e._reactInternals===void 0)throw Error(L(38));return Ys(e,n,t,!1,r)};Fe.version="18.3.1-next-f1338f8080-20240426";function ad(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ad)}catch(e){console.error(e)}}ad(),au.exports=Fe;var Xp=au.exports,Mo=Xp;El.createRoot=Mo.createRoot,El.hydrateRoot=Mo.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Tr(){return Tr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Tr.apply(this,arguments)}var wn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(wn||(wn={}));const Vo="popstate";function Yp(e){e===void 0&&(e={});function n(r,l){let{pathname:i,search:a,hash:o}=r.location;return Ni("",{pathname:i,search:a,hash:o},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function t(r,l){return typeof l=="string"?l:Rs(l)}return Zp(n,t,null,e)}function ie(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Sa(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Jp(){return Math.random().toString(36).substr(2,8)}function $o(e,n){return{usr:e.state,key:e.key,idx:n}}function Ni(e,n,t,r){return t===void 0&&(t=null),Tr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?Dt(n):n,{state:t,key:n&&n.key||r||Jp()})}function Rs(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function Dt(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function Zp(e,n,t,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:i=!1}=r,a=l.history,o=wn.Pop,u=null,c=f();c==null&&(c=0,a.replaceState(Tr({},a.state,{idx:c}),""));function f(){return(a.state||{idx:null}).idx}function p(){o=wn.Pop;let g=f(),d=g==null?null:g-c;c=g,u&&u({action:o,location:k.location,delta:d})}function m(g,d){o=wn.Push;let h=Ni(k.location,g,d);c=f()+1;let y=$o(h,c),w=k.createHref(h);try{a.pushState(y,"",w)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;l.location.assign(w)}i&&u&&u({action:o,location:k.location,delta:1})}function N(g,d){o=wn.Replace;let h=Ni(k.location,g,d);c=f();let y=$o(h,c),w=k.createHref(h);a.replaceState(y,"",w),i&&u&&u({action:o,location:k.location,delta:0})}function x(g){let d=l.location.origin!=="null"?l.location.origin:l.location.href,h=typeof g=="string"?g:Rs(g);return h=h.replace(/ $/,"%20"),ie(d,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,d)}let k={get action(){return o},get location(){return e(l,a)},listen(g){if(u)throw new Error("A history only accepts one active listener");return l.addEventListener(Vo,p),u=g,()=>{l.removeEventListener(Vo,p),u=null}},createHref(g){return n(l,g)},createURL:x,encodeLocation(g){let d=x(g);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:m,replace:N,go(g){return a.go(g)}};return k}var Ao;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ao||(Ao={}));function ef(e,n,t){return t===void 0&&(t="/"),nf(e,n,t)}function nf(e,n,t,r){let l=typeof n=="string"?Dt(n):n,i=Ta(l.pathname||"/",t);if(i==null)return null;let a=od(e);tf(a);let o=null;for(let u=0;o==null&&u<a.length;++u){let c=mf(i);o=hf(a[u],c)}return o}function od(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let l=(i,a,o)=>{let u={relativePath:o===void 0?i.path||"":o,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};u.relativePath.startsWith("/")&&(ie(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=On([r,u.relativePath]),f=t.concat(u);i.children&&i.children.length>0&&(ie(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),od(i.children,n,f,c)),!(i.path==null&&!i.index)&&n.push({path:c,score:cf(c,i.index),routesMeta:f})};return e.forEach((i,a)=>{var o;if(i.path===""||!((o=i.path)!=null&&o.includes("?")))l(i,a);else for(let u of ud(i.path))l(i,a,u)}),n}function ud(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,l=t.endsWith("?"),i=t.replace(/\?$/,"");if(r.length===0)return l?[i,""]:[i];let a=ud(r.join("/")),o=[];return o.push(...a.map(u=>u===""?i:[i,u].join("/"))),l&&o.push(...a),o.map(u=>e.startsWith("/")&&u===""?"/":u)}function tf(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:df(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const rf=/^:[\w-]+$/,sf=3,lf=2,af=1,of=10,uf=-2,Ho=e=>e==="*";function cf(e,n){let t=e.split("/"),r=t.length;return t.some(Ho)&&(r+=uf),n&&(r+=lf),t.filter(l=>!Ho(l)).reduce((l,i)=>l+(rf.test(i)?sf:i===""?af:of),r)}function df(e,n){return e.length===n.length&&e.slice(0,-1).every((r,l)=>r===n[l])?e[e.length-1]-n[n.length-1]:0}function hf(e,n,t){let{routesMeta:r}=e,l={},i="/",a=[];for(let o=0;o<r.length;++o){let u=r[o],c=o===r.length-1,f=i==="/"?n:n.slice(i.length)||"/",p=pf({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},f),m=u.route;if(!p)return null;Object.assign(l,p.params),a.push({params:l,pathname:On([i,p.pathname]),pathnameBase:kf(On([i,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(i=On([i,p.pathnameBase]))}return a}function pf(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=ff(e.path,e.caseSensitive,e.end),l=n.match(t);if(!l)return null;let i=l[0],a=i.replace(/(.)\/+$/,"$1"),o=l.slice(1);return{params:r.reduce((c,f,p)=>{let{paramName:m,isOptional:N}=f;if(m==="*"){let k=o[p]||"";a=i.slice(0,i.length-k.length).replace(/(.)\/+$/,"$1")}const x=o[p];return N&&!x?c[m]=void 0:c[m]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:a,pattern:e}}function ff(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),Sa(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,u)=>(r.push({paramName:o,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,n?void 0:"i"),r]}function mf(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Sa(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function Ta(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}const yf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,vf=e=>yf.test(e);function gf(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:l=""}=typeof e=="string"?Dt(e):e,i;if(t)if(vf(t))i=t;else{if(t.includes("//")){let a=t;t=t.replace(/\/\/+/g,"/"),Sa(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+t))}t.startsWith("/")?i=Bo(t.substring(1),"/"):i=Bo(t,n)}else i=n;return{pathname:i,search:Nf(r),hash:jf(l)}}function Bo(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?t.length>1&&t.pop():l!=="."&&t.push(l)}),t.length>1?t.join("/"):"/"}function Tl(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function xf(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function cd(e,n){let t=xf(e);return n?t.map((r,l)=>l===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function dd(e,n,t,r){r===void 0&&(r=!1);let l;typeof e=="string"?l=Dt(e):(l=Tr({},e),ie(!l.pathname||!l.pathname.includes("?"),Tl("?","pathname","search",l)),ie(!l.pathname||!l.pathname.includes("#"),Tl("#","pathname","hash",l)),ie(!l.search||!l.search.includes("#"),Tl("#","search","hash",l)));let i=e===""||l.pathname==="",a=i?"/":l.pathname,o;if(a==null)o=t;else{let p=n.length-1;if(!r&&a.startsWith("..")){let m=a.split("/");for(;m[0]==="..";)m.shift(),p-=1;l.pathname=m.join("/")}o=p>=0?n[p]:"/"}let u=gf(l,o),c=a&&a!=="/"&&a.endsWith("/"),f=(i||a===".")&&t.endsWith("/");return!u.pathname.endsWith("/")&&(c||f)&&(u.pathname+="/"),u}const On=e=>e.join("/").replace(/\/\/+/g,"/"),kf=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Nf=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,jf=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function wf(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const hd=["post","put","patch","delete"];new Set(hd);const Sf=["get",...hd];new Set(Sf);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function br(){return br=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},br.apply(this,arguments)}const ba=v.createContext(null),Tf=v.createContext(null),tt=v.createContext(null),Js=v.createContext(null),rt=v.createContext({outlet:null,matches:[],isDataRoute:!1}),pd=v.createContext(null);function bf(e,n){let{relative:t}=n===void 0?{}:n;Ir()||ie(!1);let{basename:r,navigator:l}=v.useContext(tt),{hash:i,pathname:a,search:o}=md(e,{relative:t}),u=a;return r!=="/"&&(u=a==="/"?r:On([r,a])),l.createHref({pathname:u,search:o,hash:i})}function Ir(){return v.useContext(Js)!=null}function Rr(){return Ir()||ie(!1),v.useContext(Js).location}function fd(e){v.useContext(tt).static||v.useLayoutEffect(e)}function Cf(){let{isDataRoute:e}=v.useContext(rt);return e?$f():Ef()}function Ef(){Ir()||ie(!1);let e=v.useContext(ba),{basename:n,future:t,navigator:r}=v.useContext(tt),{matches:l}=v.useContext(rt),{pathname:i}=Rr(),a=JSON.stringify(cd(l,t.v7_relativeSplatPath)),o=v.useRef(!1);return fd(()=>{o.current=!0}),v.useCallback(function(c,f){if(f===void 0&&(f={}),!o.current)return;if(typeof c=="number"){r.go(c);return}let p=dd(c,JSON.parse(a),i,f.relative==="path");e==null&&n!=="/"&&(p.pathname=p.pathname==="/"?n:On([n,p.pathname])),(f.replace?r.replace:r.push)(p,f.state,f)},[n,r,a,i,e])}function md(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=v.useContext(tt),{matches:l}=v.useContext(rt),{pathname:i}=Rr(),a=JSON.stringify(cd(l,r.v7_relativeSplatPath));return v.useMemo(()=>dd(e,JSON.parse(a),i,t==="path"),[e,a,i,t])}function Lf(e,n){return _f(e,n)}function _f(e,n,t,r){Ir()||ie(!1);let{navigator:l}=v.useContext(tt),{matches:i}=v.useContext(rt),a=i[i.length-1],o=a?a.params:{};a&&a.pathname;let u=a?a.pathnameBase:"/";a&&a.route;let c=Rr(),f;if(n){var p;let g=typeof n=="string"?Dt(n):n;u==="/"||(p=g.pathname)!=null&&p.startsWith(u)||ie(!1),f=g}else f=c;let m=f.pathname||"/",N=m;if(u!=="/"){let g=u.replace(/^\//,"").split("/");N="/"+m.replace(/^\//,"").split("/").slice(g.length).join("/")}let x=ef(e,{pathname:N}),k=Rf(x&&x.map(g=>Object.assign({},g,{params:Object.assign({},o,g.params),pathname:On([u,l.encodeLocation?l.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?u:On([u,l.encodeLocation?l.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),i,t,r);return n&&k?v.createElement(Js.Provider,{value:{location:br({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:wn.Pop}},k):k}function zf(){let e=Vf(),n=wf(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},n),t?v.createElement("pre",{style:l},t):null,null)}const Pf=v.createElement(zf,null);class Of extends v.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?v.createElement(rt.Provider,{value:this.props.routeContext},v.createElement(pd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function If(e){let{routeContext:n,match:t,children:r}=e,l=v.useContext(ba);return l&&l.static&&l.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=t.route.id),v.createElement(rt.Provider,{value:n},r)}function Rf(e,n,t,r){var l;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var i;if(!t)return null;if(t.errors)e=t.matches;else if((i=r)!=null&&i.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let a=e,o=(l=t)==null?void 0:l.errors;if(o!=null){let f=a.findIndex(p=>p.route.id&&(o==null?void 0:o[p.route.id])!==void 0);f>=0||ie(!1),a=a.slice(0,Math.min(a.length,f+1))}let u=!1,c=-1;if(t&&r&&r.v7_partialHydration)for(let f=0;f<a.length;f++){let p=a[f];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=f),p.route.id){let{loaderData:m,errors:N}=t,x=p.route.loader&&m[p.route.id]===void 0&&(!N||N[p.route.id]===void 0);if(p.route.lazy||x){u=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((f,p,m)=>{let N,x=!1,k=null,g=null;t&&(N=o&&p.route.id?o[p.route.id]:void 0,k=p.route.errorElement||Pf,u&&(c<0&&m===0?(Af("route-fallback"),x=!0,g=null):c===m&&(x=!0,g=p.route.hydrateFallbackElement||null)));let d=n.concat(a.slice(0,m+1)),h=()=>{let y;return N?y=k:x?y=g:p.route.Component?y=v.createElement(p.route.Component,null):p.route.element?y=p.route.element:y=f,v.createElement(If,{match:p,routeContext:{outlet:f,matches:d,isDataRoute:t!=null},children:y})};return t&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?v.createElement(Of,{location:t.location,revalidation:t.revalidation,component:k,error:N,children:h(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):h()},null)}var yd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(yd||{}),vd=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(vd||{});function Ff(e){let n=v.useContext(ba);return n||ie(!1),n}function Df(e){let n=v.useContext(Tf);return n||ie(!1),n}function Mf(e){let n=v.useContext(rt);return n||ie(!1),n}function gd(e){let n=Mf(),t=n.matches[n.matches.length-1];return t.route.id||ie(!1),t.route.id}function Vf(){var e;let n=v.useContext(pd),t=Df(),r=gd();return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function $f(){let{router:e}=Ff(yd.UseNavigateStable),n=gd(vd.UseNavigateStable),t=v.useRef(!1);return fd(()=>{t.current=!0}),v.useCallback(function(l,i){i===void 0&&(i={}),t.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,br({fromRouteId:n},i)))},[e,n])}const Uo={};function Af(e,n,t){Uo[e]||(Uo[e]=!0)}function Hf(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function ze(e){ie(!1)}function Bf(e){let{basename:n="/",children:t=null,location:r,navigationType:l=wn.Pop,navigator:i,static:a=!1,future:o}=e;Ir()&&ie(!1);let u=n.replace(/^\/*/,"/"),c=v.useMemo(()=>({basename:u,navigator:i,static:a,future:br({v7_relativeSplatPath:!1},o)}),[u,o,i,a]);typeof r=="string"&&(r=Dt(r));let{pathname:f="/",search:p="",hash:m="",state:N=null,key:x="default"}=r,k=v.useMemo(()=>{let g=Ta(f,u);return g==null?null:{location:{pathname:g,search:p,hash:m,state:N,key:x},navigationType:l}},[u,f,p,m,N,x,l]);return k==null?null:v.createElement(tt.Provider,{value:c},v.createElement(Js.Provider,{children:t,value:k}))}function Uf(e){let{children:n,location:t}=e;return Lf(ji(n),t)}new Promise(()=>{});function ji(e,n){n===void 0&&(n=[]);let t=[];return v.Children.forEach(e,(r,l)=>{if(!v.isValidElement(r))return;let i=[...n,l];if(r.type===v.Fragment){t.push.apply(t,ji(r.props.children,i));return}r.type!==ze&&ie(!1),!r.props.index||!r.props.children||ie(!1);let a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=ji(r.props.children,i)),t.push(a)}),t}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wi(){return wi=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},wi.apply(this,arguments)}function qf(e,n){if(e==null)return{};var t={},r=Object.keys(e),l,i;for(i=0;i<r.length;i++)l=r[i],!(n.indexOf(l)>=0)&&(t[l]=e[l]);return t}function Kf(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Wf(e,n){return e.button===0&&(!n||n==="_self")&&!Kf(e)}const Qf=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Gf="6";try{window.__reactRouterVersion=Gf}catch{}const Xf="startTransition",qo=Vd[Xf];function Yf(e){let{basename:n,children:t,future:r,window:l}=e,i=v.useRef();i.current==null&&(i.current=Yp({window:l,v5Compat:!0}));let a=i.current,[o,u]=v.useState({action:a.action,location:a.location}),{v7_startTransition:c}=r||{},f=v.useCallback(p=>{c&&qo?qo(()=>u(p)):u(p)},[u,c]);return v.useLayoutEffect(()=>a.listen(f),[a,f]),v.useEffect(()=>Hf(r),[r]),v.createElement(Bf,{basename:n,children:t,location:o.location,navigationType:o.action,navigator:a,future:r})}const Jf=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Zf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ot=v.forwardRef(function(n,t){let{onClick:r,relative:l,reloadDocument:i,replace:a,state:o,target:u,to:c,preventScrollReset:f,viewTransition:p}=n,m=qf(n,Qf),{basename:N}=v.useContext(tt),x,k=!1;if(typeof c=="string"&&Zf.test(c)&&(x=c,Jf))try{let y=new URL(window.location.href),w=c.startsWith("//")?new URL(y.protocol+c):new URL(c),S=Ta(w.pathname,N);w.origin===y.origin&&S!=null?c=S+w.search+w.hash:k=!0}catch{}let g=bf(c,{relative:l}),d=em(c,{replace:a,state:o,target:u,preventScrollReset:f,relative:l,viewTransition:p});function h(y){r&&r(y),y.defaultPrevented||d(y)}return v.createElement("a",wi({},m,{href:x||g,onClick:k||i?r:h,ref:t,target:u}))});var Ko;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ko||(Ko={}));var Wo;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Wo||(Wo={}));function em(e,n){let{target:t,replace:r,state:l,preventScrollReset:i,relative:a,viewTransition:o}=n===void 0?{}:n,u=Cf(),c=Rr(),f=md(e,{relative:a});return v.useCallback(p=>{if(Wf(p,t)){p.preventDefault();let m=r!==void 0?r:Rs(c)===Rs(f);u(e,{replace:m,state:l,preventScrollReset:i,relative:a,viewTransition:o})}},[c,u,f,r,l,t,e,i,a,o])}/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var nm={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),H=(e,n)=>{const t=v.forwardRef(({color:r="currentColor",size:l=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:o="",children:u,...c},f)=>v.createElement("svg",{ref:f,...nm,width:l,height:l,stroke:r,strokeWidth:a?Number(i)*24/Number(l):i,className:["lucide",`lucide-${tm(e)}`,o].join(" "),...c},[...n.map(([p,m])=>v.createElement(p,m)),...Array.isArray(u)?u:[u]]));return t.displayName=`${e}`,t};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cr=H("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=H("ArrowDownNarrowWide",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h4",key:"6d7r33"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h10",key:"1438ji"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=H("ArrowRightLeft",[["path",{d:"m16 3 4 4-4 4",key:"1x1c3m"}],["path",{d:"M20 7H4",key:"zbl0bi"}],["path",{d:"m8 21-4-4 4-4",key:"h9nckh"}],["path",{d:"M4 17h16",key:"g4d7ey"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=H("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=H("ArrowUpNarrowWide",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M11 12h4",key:"q8tih4"}],["path",{d:"M11 16h7",key:"uosisv"}],["path",{d:"M11 20h10",key:"jvxblo"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=H("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=H("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om=H("Brain",[["path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",key:"1mhkh5"}],["path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",key:"1d6s00"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const um=H("Bug",[["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",key:"xs1cw7"}],["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4",key:"k3fwyw"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cm=H("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dm=H("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm=H("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=H("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=H("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=H("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=H("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=H("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=H("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qo=H("FileCode",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=H("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=H("GitFork",[["circle",{cx:"12",cy:"18",r:"3",key:"1mpf1b"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9",key:"1uq4wg"}],["path",{d:"M12 12v3",key:"158kv8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ca=H("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=H("GraduationCap",[["path",{d:"M22 10v6M2 10l10-5 10 5-10 5z",key:"1ef52a"}],["path",{d:"M6 12v5c3 3 9 3 12 0v-5",key:"1f75yj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bl=H("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=H("HeartHandshake",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",key:"12sd6o"}],["path",{d:"m18 15-2-2",key:"60u0ii"}],["path",{d:"m15 18-2-2",key:"6p76be"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mn=H("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=H("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sn=H("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=H("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rn=H("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Si=H("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ea=H("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=H("ListOrdered",[["line",{x1:"10",x2:"21",y1:"6",y2:"6",key:"76qw6h"}],["line",{x1:"10",x2:"21",y1:"12",y2:"12",key:"16nom4"}],["line",{x1:"10",x2:"21",y1:"18",y2:"18",key:"u3jurt"}],["path",{d:"M4 6h1v4",key:"cnovpq"}],["path",{d:"M4 10h2",key:"16xx2s"}],["path",{d:"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1",key:"m9a95d"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xd=H("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=H("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=H("MoveUp",[["path",{d:"M8 6L12 2L16 6",key:"1yvkyx"}],["path",{d:"M12 2V22",key:"r89rzk"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Go=H("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=H("Pyramid",[["path",{d:"M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z",key:"aenxs0"}],["path",{d:"M12 2v20",key:"t6zp3m"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kd=H("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=H("Scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _m=H("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zm=H("TreeDeciduous",[["path",{d:"M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z",key:"oadzkq"}],["path",{d:"M12 19v3",key:"npa21l"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm=H("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=H("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nd=H("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function Im(){const e=Rr(),[n,t]=v.useState(!1),r=e.pathname==="/"?"home":e.pathname.replace("/","").replace("_",""),l=()=>t(!n),i=()=>t(!1);v.useEffect(()=>{const o=()=>{window.innerWidth>1024&&t(!1)};return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[]),v.useEffect(()=>{n?document.body.style.overflow="hidden":document.body.style.overflow=""},[n]);const a=({to:o,icon:u,children:c,pageName:f})=>{const p=r===f;return s.jsxs(Ot,{to:o,className:`nav-item ${p?"active":""}`,onClick:i,children:[s.jsx(u,{}),s.jsx("span",{children:c})]})};return s.jsxs(s.Fragment,{children:[s.jsx("button",{className:"mobile-menu-toggle",id:"mobileMenuToggle","aria-label":"Toggle menu",onClick:l,children:n?s.jsx(Om,{}):s.jsx(bm,{})}),s.jsx("div",{className:`sidebar-overlay ${n?"active":""}`,onClick:i}),s.jsxs("aside",{className:`sidebar ${n?"active":""}`,id:"sidebar",children:[s.jsx("div",{className:"sidebar-header",children:s.jsxs(Ot,{to:"/",className:"logo-wrapper",onClick:i,children:[s.jsx("img",{src:"/logo.svg",alt:"DSA Visualizer Logo",className:"logo-icon"}),s.jsx("span",{className:"logo-text",children:"DSA Visualizer"})]})}),s.jsxs("nav",{className:"sidebar-nav",children:[s.jsxs("div",{className:"nav-section",children:[s.jsx("div",{className:"nav-section-title",children:"Explore"}),s.jsx(a,{to:"/",icon:wm,pageName:"home",children:"Home"}),s.jsx(a,{to:"/algorithms",icon:fm,pageName:"algorithms",children:"Algorithms"})]}),s.jsxs("div",{className:"nav-section",children:[s.jsx("div",{className:"nav-section-title",children:"More"}),s.jsx(a,{to:"/contact",icon:xd,pageName:"contact",children:"Contact"}),s.jsx(a,{to:"/contributions",icon:jm,pageName:"contributions",children:"Contributions"})]})]}),s.jsxs("div",{className:"sidebar-footer",children:[s.jsxs("div",{className:"social-links-sidebar",children:[s.jsx("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",title:"GitHub",children:s.jsx(Ca,{})}),s.jsx("a",{href:"https://www.linkedin.com/in/abdullah-mahfouz-5188b1306/",target:"_blank",rel:"noopener noreferrer",title:"LinkedIn",children:s.jsx(Ea,{})})]}),s.jsx("p",{className:"copyright",children:"© 2026 Abdullah Mahfouz"})]})]})]})}function Rm(){return s.jsx("footer",{className:"main-footer",children:s.jsxs("div",{className:"footer-content",children:[s.jsxs("div",{className:"footer-social",children:[s.jsxs("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",className:"footer-link",children:[s.jsx(Ca,{}),s.jsx("span",{children:"GitHub"})]}),s.jsxs("a",{href:"https://www.linkedin.com/in/abdullah-mahfouz-5188b1306/",target:"_blank",rel:"noopener noreferrer",className:"footer-link",children:[s.jsx(Ea,{}),s.jsx("span",{children:"LinkedIn"})]})]}),s.jsx("p",{className:"footer-copyright",children:"© 2026 Abdullah Mahfouz"})]})})}function Fm(){return s.jsxs(s.Fragment,{children:[s.jsxs("section",{className:"explore-hero",children:[s.jsx("div",{className:"hero-background"}),s.jsxs("div",{className:"hero-content-wrapper",children:[s.jsxs("div",{className:"hero-badge",children:[s.jsx(Nm,{}),s.jsx("span",{children:"Free Student Learning Tool"})]}),s.jsxs("h1",{className:"hero-title",children:[s.jsx("span",{className:"gradient-text",children:"Learn"})," Data Structures & Algorithms"]}),s.jsx("p",{className:"hero-description",children:"A free, interactive learning tool designed to help students master DSA concepts. Visualize and understand them step-by-step."}),s.jsxs("div",{className:"hero-actions",children:[s.jsxs(Ot,{to:"/algorithms",className:"btn-primary",children:[s.jsx("span",{children:"Learn Now"}),s.jsx(fe,{})]}),s.jsxs(Ot,{to:"/stack",className:"btn-secondary",children:[s.jsx("span",{children:"Try Your First Visualizer"}),s.jsx(Go,{})]})]})]})]}),s.jsxs("section",{className:"features-section",children:[s.jsxs("div",{className:"section-header",children:[s.jsx("h2",{children:"How This Tool Helps Students"}),s.jsx("p",{children:"Designed specifically for students who find DSA challenging"})]}),s.jsxs("div",{className:"features-grid",children:[s.jsxs("div",{className:"feature-card",children:[s.jsx("div",{className:"feature-icon",children:s.jsx(gm,{})}),s.jsx("h3",{children:"See It in Action"}),s.jsx("p",{children:"Watch how data structures work with real-time visualizations. Perfect for visual learners who struggle with abstract concepts."})]}),s.jsxs("div",{className:"feature-card",children:[s.jsx("div",{className:"feature-icon",children:s.jsx(mn,{})}),s.jsx("h3",{children:"Step-by-Step Help"}),s.jsx("p",{children:"Detailed explanations for each operation. No more confusion about how push, pop, or insert actually work."})]}),s.jsxs("div",{className:"feature-card",children:[s.jsx("div",{className:"feature-icon",children:s.jsx(om,{})}),s.jsx("h3",{children:"AI Study Buddy"}),s.jsx("p",{children:"Stuck on a concept? Ask our AI assistant anything about DSA. Get instant, personalized explanations."})]}),s.jsxs("div",{className:"feature-card",children:[s.jsx("div",{className:"feature-icon",children:s.jsx(Go,{})}),s.jsx("h3",{children:"Learn by Doing"}),s.jsx("p",{children:"Practice makes perfect. Interact with data structures yourself to build confidence and understanding."})]})]})]})]})}function Dm(){const[e,n]=v.useState(null),t=l=>{n(e===l?null:l)},r=[{id:"linear",name:"Linear Data Structures",icon:Tm,description:"Elements stored sequentially where each element has a unique predecessor and successor. These are the building blocks of computer science — simple to implement yet powerful enough to solve complex problems.",color:"#6366f1",items:[{to:"/stack",icon:Sm,title:"Stack",description:"LIFO (Last In, First Out) — imagine a stack of plates where you can only add or remove from the top. The most recent item is always accessed first. Push adds to top, Pop removes from top. Both operations are O(1) constant time. Essential for: browser back button (page history), undo/redo in editors, function call management in recursion, parsing expressions like (a+b)*c, and depth-first search algorithms.",available:!0},{to:"/queue",icon:sm,title:"Queue",description:"FIFO (First In, First Out) — like waiting in line at a coffee shop. The first person to arrive gets served first. Enqueue adds to the back, Dequeue removes from front. Both O(1) operations. Used everywhere: print job scheduling, CPU task management, breadth-first search (BFS) in graphs, handling requests in web servers, and buffering data streams like video playback.",available:!0},{to:"/linkedlist",icon:Si,title:"Linked List",description:"A chain of nodes where each node stores data and a pointer to the next node. Unlike arrays, memory doesn't need to be contiguous — nodes can be scattered in memory. Insertion/deletion at known positions is O(1), but finding a position is O(n). Perfect for: implementing stacks/queues, music playlists (next/previous song), browser history, memory allocation in operating systems, and polynomial arithmetic.",available:!0}]},{id:"hash",name:"Hash-Based Structures",icon:vm,description:"Revolutionary data structures that use hash functions to map keys to array indices, enabling O(1) average-case lookup, insertion, and deletion. The backbone of databases, caches, and any system requiring fast key-value access.",color:"#10b981",items:[{to:"/hashtable_linear",icon:bl,title:"Linear Probing",description:'Open addressing collision resolution: when a collision occurs (two keys hash to same index), simply check the next slot, then the next, until an empty slot is found. Pros: excellent cache performance since data is stored contiguously, simple implementation. Cons: can cause "primary clustering" where long runs of occupied slots form, degrading performance. Load factor should stay below 0.7 for efficiency.',available:!0},{to:"/hashtable_quadratic",icon:bl,title:"Quadratic Probing",description:'Instead of checking consecutive slots, probe at quadratic intervals: 1², 2², 3²... positions away from the original hash. This eliminates primary clustering but can cause "secondary clustering" where keys with the same hash follow the same probe sequence. Table size should be prime and load factor < 0.5 to guarantee finding an empty slot. Used when cache performance is less critical than even distribution.',available:!0},{to:"/hashtable_chaining",icon:bl,title:"Separate Chaining",description:"Each array slot holds a linked list (chain) of all entries that hash to that index. No limit on how many items can be stored — just grow the chains. Handles high load factors gracefully (even > 1.0). Simpler deletion than open addressing. Used in Java's HashMap, Python's dict (with optimization). Trade-off: extra memory for pointers, potentially poor cache performance with long chains.",available:!0}]},{id:"trees",name:"Tree Structures",icon:zm,description:"Hierarchical data structures where data flows from a root node down through children. Trees enable O(log n) operations on sorted data and model real-world hierarchies like file systems, organization charts, and decision trees in AI/ML.",color:"#f59e0b",items:[{to:"/binarytree",icon:xm,title:"Binary Tree Traversals",description:"Master the four fundamental ways to visit every node in a binary tree: INORDER (Left→Root→Right) visits nodes in sorted order for BST, used for expression trees; PREORDER (Root→Left→Right) processes root first, perfect for copying trees or creating prefix expressions; POSTORDER (Left→Right→Root) processes children before parent, used for deleting trees or postfix notation; LEVEL-ORDER (BFS) visits level by level, used for finding shortest paths and printing tree structure.",available:!0},{to:"/bst",icon:km,title:"Binary Search Tree",description:`The fundamental ordered tree: every node's left subtree contains only smaller values, right subtree only larger values. This property enables O(log n) search by eliminating half the tree at each step — like binary search but in tree form. Supports efficient range queries. Caveat: can degrade to O(n) if insertions create an unbalanced "stick". Foundation for databases, symbol tables, and more advanced balanced trees.`,available:!0},{to:"/avl",icon:Lm,title:"AVL Tree",description:"The first self-balancing BST, invented in 1962. Maintains strict balance: height difference between left and right subtrees ≤ 1 at every node. When insertion/deletion violates this, the tree self-corrects using rotations (single or double). Guarantees O(log n) for all operations. More rigidly balanced than Red-Black trees, so faster lookups but slightly slower insertions. Used when reads far exceed writes.",available:!1},{to:"/splay",icon:Cm,title:"Splay Tree",description:`A self-adjusting BST with a clever optimization: every accessed node is "splayed" (rotated) to the root. No explicit balance condition, yet achieves O(log n) amortized time. Recently accessed items stay near the root — perfect for caches where some items are accessed repeatedly (temporal locality). Used in Windows NT's virtual memory management, GCC's implementation of certain data structures, and network routers.`,available:!1}]},{id:"heaps",name:"Heap Structures",icon:Em,description:"Complete binary trees satisfying the heap property — either every parent ≥ children (max-heap) or every parent ≤ children (min-heap). Heaps power priority queues, enabling O(1) access to the extreme element and O(log n) insertions and deletions.",color:"#ec4899",items:[{to:"/minheap",icon:rm,title:"Min Heap",description:`Every parent node is smaller than or equal to its children, so the minimum element is always at the root — accessible in O(1). Insert and extract-min are O(log n) as elements "bubble up" or "sink down" to maintain the heap property. Critical for: Dijkstra's shortest path algorithm, Prim's minimum spanning tree, job schedulers (process with smallest priority runs next), and efficiently finding the k largest elements in a stream.`,available:!1},{to:"/maxheap",icon:lm,title:"Max Heap",description:"The mirror of min-heap: every parent ≥ children, maximum at root. Extract-max in O(1), insert and delete in O(log n). Powers: Heapsort algorithm (in-place O(n log n) sorting), priority queues where highest priority goes first, finding k smallest elements, implementing a median-finding structure (use one min-heap + one max-heap), and bandwidth management in network routers.",available:!1}]}];return s.jsxs("section",{className:"algorithms-section",children:[s.jsxs("div",{className:"section-header",children:[s.jsx("h1",{children:"Explore Data Structures"}),s.jsx("p",{children:"Choose a category to explore different data structures. Each visualizer includes step-by-step explanations and hands-on practice."})]}),s.jsx("div",{className:"categories-container",children:r.map(l=>s.jsxs("div",{className:"category-wrapper",children:[s.jsxs("button",{className:`category-header ${e===l.id?"expanded":""}`,onClick:()=>t(l.id),style:{"--category-color":l.color},children:[s.jsx("div",{className:"category-icon",style:{background:l.color},children:s.jsx(l.icon,{})}),s.jsxs("div",{className:"category-info",children:[s.jsx("h2",{children:l.name}),s.jsx("p",{children:l.description})]}),s.jsxs("div",{className:"category-meta",children:[s.jsxs("span",{className:"item-count",children:[l.items.filter(i=>i.available).length," available"]}),e===l.id?s.jsx(hm,{}):s.jsx(dm,{})]})]}),s.jsx("div",{className:`category-items ${e===l.id?"expanded":""}`,children:s.jsx("div",{className:"items-grid",children:l.items.map((i,a)=>i.available?s.jsxs(Ot,{to:i.to,className:"algorithm-item",children:[s.jsx("div",{className:"item-icon",style:{background:l.color},children:s.jsx(i.icon,{})}),s.jsxs("div",{className:"item-info",children:[s.jsx("h3",{children:i.title}),s.jsx("p",{children:i.description})]}),s.jsx(fe,{className:"item-arrow"})]},a):s.jsxs("div",{className:"algorithm-item coming-soon",children:[s.jsx("div",{className:"item-icon disabled",children:s.jsx(i.icon,{})}),s.jsxs("div",{className:"item-info",children:[s.jsx("h3",{children:i.title}),s.jsx("p",{children:i.description})]}),s.jsx("span",{className:"coming-soon-badge",children:"Coming Soon"})]},a))})})]},l.id))})]})}function Mm(){return s.jsxs("section",{className:"contact-section",children:[s.jsx("div",{className:"page-header",children:s.jsx("h1",{children:"Contact"})}),s.jsx("div",{className:"contact-content",children:s.jsxs("div",{className:"contact-info",children:[s.jsxs("div",{className:"info-card",children:[s.jsx("div",{className:"info-icon",children:s.jsx(xd,{})}),s.jsx("h3",{children:"Email"}),s.jsx("p",{children:"For recruitment and professional opportunities"}),s.jsx("a",{href:"mailto:abdullahmahfouz@trentu.ca",className:"info-link",children:"abdullahmahfouz@trentu.ca"})]}),s.jsxs("div",{className:"info-card",children:[s.jsx("div",{className:"info-icon",children:s.jsx(Ca,{})}),s.jsx("h3",{children:"GitHub"}),s.jsx("p",{children:"View my projects and contributions"}),s.jsx("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",className:"info-link",children:"github.com/abdullahmahfouz"})]}),s.jsxs("div",{className:"info-card",children:[s.jsx("div",{className:"info-icon",children:s.jsx(Ea,{})}),s.jsx("h3",{children:"LinkedIn"}),s.jsx("p",{children:"Connect for professional networking"}),s.jsx("a",{href:"https://www.linkedin.com/in/abdullah-mahfouz-5188b1306/",target:"_blank",rel:"noopener noreferrer",className:"info-link",children:"Connect on LinkedIn"})]})]})})]})}function Vm(){return s.jsxs("section",{className:"contributions-section",children:[s.jsxs("div",{className:"page-header",children:[s.jsx("h1",{children:"Contributions"}),s.jsx("p",{children:"Help us improve this free learning tool for students! Your contributions help make DSA easier to understand for everyone."})]}),s.jsxs("div",{className:"contributions-content",children:[s.jsxs("div",{className:"contribution-card",children:[s.jsx("div",{className:"contribution-icon",children:s.jsx(mm,{})}),s.jsx("h2",{children:"Code Contributions"}),s.jsx("p",{children:"Found a bug or want to add a new feature? Fork the repository, make your changes, and submit a pull request!"}),s.jsxs("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",className:"btn-primary",children:[s.jsx("span",{children:"View on GitHub"}),s.jsx(fe,{})]})]}),s.jsxs("div",{className:"contribution-card",children:[s.jsx("div",{className:"contribution-icon",children:s.jsx(im,{})}),s.jsx("h2",{children:"Documentation"}),s.jsx("p",{children:"Help improve our documentation, fix typos, or add examples. Every bit helps!"}),s.jsxs("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",className:"btn-primary",children:[s.jsx("span",{children:"Improve Docs"}),s.jsx(fe,{})]})]}),s.jsxs("div",{className:"contribution-card",children:[s.jsx("div",{className:"contribution-icon",children:s.jsx(um,{})}),s.jsx("h2",{children:"Report Issues"}),s.jsx("p",{children:"Found a bug or have a suggestion? Open an issue on GitHub and let us know!"}),s.jsxs("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",className:"btn-primary",children:[s.jsx("span",{children:"Report Issue"}),s.jsx(fe,{})]})]}),s.jsxs("div",{className:"contribution-card",children:[s.jsx("div",{className:"contribution-icon",children:s.jsx(rn,{})}),s.jsx("h2",{children:"Feature Requests"}),s.jsx("p",{children:"Have an idea for a new visualizer or feature? We'd love to hear your suggestions!"}),s.jsxs(Ot,{to:"/contact",className:"btn-primary",children:[s.jsx("span",{children:"Suggest Feature"}),s.jsx(fe,{})]})]})]}),s.jsxs("div",{className:"contributors-section",children:[s.jsx("h2",{children:"Contributors"}),s.jsx("div",{className:"contributors-list",children:s.jsxs("div",{className:"contributor-item",children:[s.jsx("div",{className:"contributor-avatar",children:s.jsx(Pm,{})}),s.jsxs("div",{className:"contributor-info",children:[s.jsx("h3",{children:"Abdullah Mahfouz"}),s.jsx("p",{children:"Creator & Maintainer"})]})]})}),s.jsx("p",{className:"contributors-note",children:"Want to see your name here? Start contributing today!"})]})]})}function Vn({context:e="Data Structures"}){const[n,t]=v.useState(""),[r,l]=v.useState(""),[i,a]=v.useState(!1),o=()=>{const f=e.toLowerCase();return f.includes("stack")?"e.g., How does LIFO work?":f.includes("queue")?"e.g., What is FIFO?":f.includes("linked list")?"e.g., How do I insert at the head?":f.includes("hash")?"e.g., What is a collision?":f.includes("binary tree")||f.includes("traversal")?"e.g., What is inorder traversal?":"e.g., How does this work?"},u=async()=>{if(n.trim()){a(!0),l("");try{const f=await fetch("/api/ask-ai",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:n.trim(),code:e})}),p=await f.json();f.ok?l(p.answer||"No answer returned."):l("Currently not working, try again later.")}catch{l("Currently not working, try again later.")}finally{a(!1)}}},c=f=>{f.key==="Enter"&&u()};return s.jsxs("div",{className:"ai-assistant",children:[s.jsxs("h3",{children:[s.jsx(am,{}),"AI Assistant"]}),s.jsxs("p",{children:["Ask me anything about ",e.toLowerCase(),"!"]}),s.jsxs("div",{className:"ai-input-group",children:[s.jsx("input",{type:"text",value:n,onChange:f=>t(f.target.value),onKeyPress:c,placeholder:o(),disabled:i}),s.jsx("button",{onClick:u,disabled:i,children:i?"Asking...":"Ask"})]}),s.jsxs("div",{id:"ai-response",children:[i&&s.jsx("div",{className:"ai-loading",children:"Thinking..."}),r&&s.jsx("div",{className:r.startsWith("Error")?"ai-error":"ai-answer",children:r})]})]})}const $m=`class Stack:
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
print(stack.peek())  # 20`,Am=`class Stack {
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
console.log(stack.pop()); // 20`,Hm=`import java.util.EmptyStackException;

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
System.out.println(stack.pop()); // 20`,Bm={python:$m,javascript:Am,java:Hm,"c++":`#include <iostream>
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
Console.WriteLine(stack.Pop()); // 20`},Um=`class Queue:
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
print(queue.peek())     # 20`,qm=`class Queue {
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
console.log(queue.dequeue()); // 10`,Km=`import java.util.NoSuchElementException;

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
System.out.println(queue.dequeue()); // 10`,Wm={python:Um,javascript:qm,java:Km,"c++":`#include <iostream>
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
Console.WriteLine(queue.Dequeue()); // 10`},Qm=`class Node:
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
print(ll.search(20))  # 1`,Gm=`class Node {
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
ll.insertAtTail(30);`,Xm=`public class SinglyLinkedList<T> {
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
ll.insertAtTail(30);`,Ym={python:Qm,javascript:Gm,java:Xm,"c++":`#include <iostream>
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
ll.InsertAtTail(30);`},Jm=`class TreeNode:
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
print("Level:     ", tree.levelorder_traversal())  # [50, 30, 70, 20, 40, 60, 80]`,Zm=`class TreeNode {
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
console.log("Level:    ", tree.levelOrderTraversal());  // [50, 30, 70, 20, 40, 60, 80]`,ey=`import java.util.*;

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
System.out.println("Level:     " + tree.levelOrderTraversal());`,ny={python:Jm,javascript:Zm,java:ey,"c++":`#include <iostream>
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
Console.WriteLine("Level:     " + string.Join(", ", tree.LevelOrderTraversal()));`},ty=`class HashTable:
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
print(ht.get("banana"))  # 3`,ry=`class HashTable {
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
console.log(ht.get("apple"));  // 5`,sy=`public class HashTable<K, V> {
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
System.out.println(ht.get("apple")); // 5`,ly={python:ty,javascript:ry,java:sy,"c++":`#include <iostream>
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
Console.WriteLine(ht.Get("apple")); // 5`},iy=`class Node:
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
ht.delete("banana")`,ay=`class Node {
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
console.log(ht.search("apple"));  // 5`,oy=`public class HashTableChaining<K, V> {
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
System.out.println(ht.search("apple"));  // 5`,uy={python:iy,javascript:ay,java:oy,"c++":`#include <iostream>
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
Console.WriteLine(ht.Search("apple"));  // 5`},cy=`class TreeNode:
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
print("After delete 30:", bst.inorder())  # [20, 40, 50, 60, 70, 80]`,dy=`class TreeNode {
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
console.log("After delete 30:", bst.inorder());  // [20, 40, 50, 60, 70, 80]`,hy=`import java.util.*;

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
System.out.println("After delete: " + bst.inorder());  // [20, 40, 50, 60, 70, 80]`,py={python:cy,javascript:dy,java:hy,"c++":`#include <iostream>
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
Console.WriteLine("After delete: " + string.Join(", ", bst.Inorder()));`},Cl={stack:Bm,queue:Wm,linkedlist:Ym,binarytree:ny,hashtable:ly,hashtableChaining:uy,bst:py};function $n({dataStructure:e}){var p;const[n,t]=v.useState("python"),[r,l]=v.useState(!1),i=["python","javascript","java","c++","c#"],a=i.filter(m=>{var N;return(N=Cl[e])==null?void 0:N[m]}),o=a.length>0?a:i,u=((p=Cl[e])==null?void 0:p[n])||"Code not available for this data structure";v.useEffect(()=>{var m;!((m=Cl[e])!=null&&m[n])&&a.length>0&&t(a[0])},[e,n,a]);const c=m=>({python:"Python",javascript:"JavaScript",java:"Java","c++":"C++","c#":"C#"})[m]||m,f=()=>{navigator.clipboard.writeText(u),l(!0),setTimeout(()=>l(!1),2e3)};return s.jsxs("div",{className:"code-section",children:[s.jsxs("h2",{children:[s.jsx(Qo,{})," Implementation"]}),s.jsx("div",{className:"code-tabs",children:o.map(m=>s.jsxs("button",{className:`tab-btn ${n===m?"active":""}`,onClick:()=>t(m),children:[s.jsx(Qo,{}),c(m)]},m))}),s.jsx("div",{className:"code-panels",children:s.jsx("div",{className:"code-panel active",children:s.jsxs("pre",{children:[s.jsxs("button",{className:"copy-btn",onClick:f,children:[s.jsx(ym,{})," ",r?"Copied!":"Copy"]}),s.jsx("code",{children:u})]})})})]})}function Mt({message:e}){if(!(e!=null&&e.text))return null;const n=e.type||"info";return s.jsx("div",{className:`message message-${n}`,children:e.text})}async function Ye(e){return await(await fetch(e)).json()}async function le(e,n){return await(await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json()}function Vt(e=3e3){const[n,t]=v.useState(null),r=v.useRef(null),l=v.useCallback(()=>{t(null),r.current&&(clearTimeout(r.current),r.current=null)},[]),i=v.useCallback((a,o="info")=>{t({text:a,type:o}),r.current&&clearTimeout(r.current),r.current=setTimeout(()=>{t(null),r.current=null},e)},[e]);return v.useEffect(()=>l,[l]),{message:n,showMessage:i,clearMessage:l}}function fy(){const[e,n]=v.useState([]),[t,r]=v.useState(0),[l,i]=v.useState("Empty"),[a]=v.useState(10),{message:o,showMessage:u}=Vt(3e3),[c,f]=v.useState("");v.useEffect(()=>{p()},[]);const p=async()=>{try{const d=await Ye("/api/stack");n(d.items||[]),r(d.size||0),i(d.top!==null&&d.top!==void 0?d.top:"Empty")}catch(d){console.error("Error loading stack:",d)}},m=async()=>{if(!c||c.trim()===""){u("Please enter a number!","error");return}const d=Number(c);if(isNaN(d)){u("Please enter a valid number!","error");return}try{const h=await le("/api/stack/push",{value:d});if(h.error){u(h.error,"error");return}n(h.items||[]),r(h.size||0),i(h.top!==null&&h.top!==void 0?h.top:"Empty"),u(`Pushed ${d} to stack!`,"success"),f("")}catch(h){console.error("Push error:",h),u("Error pushing to stack. Is Flask running?","error")}},N=async()=>{try{const d=await le("/api/stack/pop",{});if(d.error){u(d.error,"error");return}n(d.items||[]),r(d.size||0),i(d.top!==null&&d.top!==void 0?d.top:"Empty"),u(`Popped ${d.popped} from stack!`,"success")}catch{u("Error popping from stack","error")}},x=async()=>{try{const d=await Ye("/api/stack/peek");if(d.error){u(d.error,"error");return}u(`Top element is: ${d.top}`,"info")}catch{u("Error peeking stack","error")}},k=async()=>{try{await le("/api/stack/clear",{}),n([]),r(0),i("Empty"),u("Stack cleared!","success")}catch{u("Error clearing stack","error")}},g=d=>{d.key==="Enter"&&m()};return s.jsxs("div",{className:"container",children:[s.jsxs("div",{className:"intro-layout",children:[s.jsxs("div",{className:"concept-box",children:[s.jsxs("div",{className:"concept-header",children:[s.jsx(mn,{className:"icon-sm"}),s.jsx("span",{children:"What is a Stack?"})]}),s.jsxs("div",{className:"concept-content",children:[s.jsxs("p",{children:["A ",s.jsx("strong",{children:"Stack"})," is a linear data structure that follows the ",s.jsx("strong",{children:"LIFO"})," (Last In, First Out) principle."]}),s.jsxs("div",{className:"concept-analogy",children:[s.jsx(rn,{}),s.jsxs("span",{children:["Think of a stack of plates - you can only add or remove from the ",s.jsx("strong",{children:"top"}),"!"]})]}),s.jsxs("div",{className:"concept-operations",children:[s.jsxs("div",{className:"op-item",children:[s.jsx("span",{className:"op-name",children:"Push"}),s.jsx("span",{className:"op-desc",children:"Add to top"}),s.jsx("span",{className:"op-complexity",children:"O(1)"})]}),s.jsxs("div",{className:"op-item",children:[s.jsx("span",{className:"op-name",children:"Pop"}),s.jsx("span",{className:"op-desc",children:"Remove from top"}),s.jsx("span",{className:"op-complexity",children:"O(1)"})]}),s.jsxs("div",{className:"op-item",children:[s.jsx("span",{className:"op-name",children:"Peek"}),s.jsx("span",{className:"op-desc",children:"View top element"}),s.jsx("span",{className:"op-complexity",children:"O(1)"})]})]}),s.jsxs("div",{className:"concept-uses",children:[s.jsx("strong",{children:"Common Uses:"}),s.jsxs("ul",{children:[s.jsx("li",{children:"Browser back/forward buttons"}),s.jsx("li",{children:"Undo/Redo functionality"}),s.jsx("li",{children:"Function call stack"}),s.jsx("li",{children:"Expression evaluation"})]})]})]})]}),s.jsx(Vn,{context:"Stack data structure"})]}),s.jsxs("div",{className:"visualizer-layout",children:[s.jsxs("div",{className:"control-panel",children:[s.jsx("h2",{children:"Stack Operations"}),s.jsxs("div",{className:"operation-group",children:[s.jsx("label",{htmlFor:"pushValue",children:"Push (Add to top)"}),s.jsxs("div",{className:"input-group",children:[s.jsx("input",{type:"text",id:"pushValue",value:c,onChange:d=>f(d.target.value),onKeyPress:g,placeholder:"Enter a value"}),s.jsx("button",{onClick:m,className:"btn btn-push",children:"Push"})]})]}),s.jsxs("div",{className:"operation-group",children:[s.jsx("label",{children:"Other Operations"}),s.jsxs("div",{className:"btn-group",children:[s.jsx("button",{onClick:N,className:"btn btn-pop",children:"Pop"}),s.jsx("button",{onClick:x,className:"btn btn-peek",children:"Peek"}),s.jsx("button",{onClick:k,className:"btn btn-clear",children:"Clear"})]})]}),s.jsxs("div",{className:"info-panel",children:[s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Size:"}),s.jsx("span",{className:"info-value",children:t})]}),s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Top:"}),s.jsx("span",{className:"info-value",children:l})]}),s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Max Size:"}),s.jsx("span",{className:"info-value",children:a})]})]}),s.jsx(Mt,{message:o})]}),s.jsxs("div",{className:"visual-panel",children:[s.jsx("h2",{children:"Stack Visualization"}),s.jsxs("div",{className:"stack-container",children:[s.jsx("div",{className:"stack-visual",children:e.length===0?s.jsx("div",{className:"stack-empty",children:"Stack is empty. Push some items!"}):e.slice().reverse().map((d,h)=>s.jsx("div",{className:"stack-item",children:d},h))}),s.jsx("div",{className:"stack-base",children:s.jsx("span",{children:"BOTTOM"})})]})]})]}),s.jsx($n,{dataStructure:"stack"})]})}function my(){const[e,n]=v.useState([]),[t,r]=v.useState(0),[l,i]=v.useState("Empty"),[a]=v.useState(10),{message:o,showMessage:u}=Vt(3e3),[c,f]=v.useState("");v.useEffect(()=>{p()},[]);const p=async()=>{try{const g=await Ye("/api/queue");n(g.items||[]),r(g.size||0),i(g.front!==null&&g.front!==void 0?g.front:"Empty")}catch(g){console.error("Error loading queue:",g)}},m=async()=>{if(!c||c.trim()===""){u("Please enter a number!","error");return}const g=Number(c);if(isNaN(g)){u("Please enter a valid number!","error");return}try{const d=await le("/api/queue/enqueue",{value:g});if(d.error){u(d.error,"error");return}n(d.items||[]),r(d.size||0),i(d.front!==null&&d.front!==void 0?d.front:"Empty"),u(`Enqueued ${g}!`,"success"),f("")}catch(d){console.error("Enqueue error:",d),u("Error enqueueing. Is Flask running?","error")}},N=async()=>{try{const g=await le("/api/queue/dequeue",{});if(g.error){u(g.error,"error");return}n(g.items||[]),r(g.size||0),i(g.front!==null&&g.front!==void 0?g.front:"Empty"),u(`Dequeued ${g.dequeued} from queue!`,"success")}catch{u("Error dequeuing from queue","error")}},x=async()=>{try{const g=await Ye("/api/queue/peek");if(g.error){u(g.error,"error");return}u(`Front element is: ${g.front}`,"info")}catch{u("Error peeking queue","error")}},k=async()=>{try{await le("/api/queue/clear",{}),n([]),r(0),i("Empty"),u("Queue cleared!","success")}catch{u("Error clearing queue","error")}};return s.jsxs("div",{className:"container",children:[s.jsxs("div",{className:"intro-layout",children:[s.jsxs("div",{className:"concept-box",children:[s.jsxs("div",{className:"concept-header",children:[s.jsx(mn,{className:"icon-sm"}),s.jsx("span",{children:"What is a Queue?"})]}),s.jsxs("div",{className:"concept-content",children:[s.jsxs("p",{children:["A ",s.jsx("strong",{children:"Queue"})," is a linear data structure that follows the ",s.jsx("strong",{children:"FIFO"})," (First In, First Out) principle."]}),s.jsxs("div",{className:"concept-analogy",children:[s.jsx(rn,{}),s.jsxs("span",{children:["Think of a line at a store – the first person in line gets served ",s.jsx("strong",{children:"first"}),"!"]})]}),s.jsxs("div",{className:"concept-operations",children:[s.jsxs("div",{className:"op-item",children:[s.jsx("span",{className:"op-name",children:"Enqueue"}),s.jsx("span",{className:"op-desc",children:"Add to the back"}),s.jsx("span",{className:"op-complexity",children:"O(1)"})]}),s.jsxs("div",{className:"op-item",children:[s.jsx("span",{className:"op-name",children:"Dequeue"}),s.jsx("span",{className:"op-desc",children:"Remove from the front"}),s.jsx("span",{className:"op-complexity",children:"O(1)"})]}),s.jsxs("div",{className:"op-item",children:[s.jsx("span",{className:"op-name",children:"Peek"}),s.jsx("span",{className:"op-desc",children:"View the front element"}),s.jsx("span",{className:"op-complexity",children:"O(1)"})]})]})]})]}),s.jsx(Vn,{context:"Queue data structure"})]}),s.jsxs("div",{className:"visualizer-layout",children:[s.jsxs("div",{className:"control-panel",children:[s.jsx("h2",{children:"Queue Operations"}),s.jsxs("div",{className:"operation-group",children:[s.jsx("label",{htmlFor:"enqueueValue",children:"Enqueue (Add to back)"}),s.jsxs("div",{className:"input-group",children:[s.jsx("input",{type:"text",id:"enqueueValue",value:c,onChange:g=>f(g.target.value),onKeyPress:g=>g.key==="Enter"&&m(),placeholder:"Enter a value"}),s.jsx("button",{onClick:m,className:"btn btn-enqueue",children:"Enqueue"})]})]}),s.jsxs("div",{className:"operation-group",children:[s.jsx("label",{children:"Other Operations"}),s.jsxs("div",{className:"btn-group",children:[s.jsx("button",{onClick:N,className:"btn btn-dequeue",children:"Dequeue"}),s.jsx("button",{onClick:x,className:"btn btn-peek",children:"Peek"}),s.jsx("button",{onClick:k,className:"btn btn-clear",children:"Clear"})]})]}),s.jsxs("div",{className:"info-panel",children:[s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Size:"}),s.jsx("span",{className:"info-value",children:t})]}),s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Front:"}),s.jsx("span",{className:"info-value",children:l})]}),s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Max Size:"}),s.jsx("span",{className:"info-value",children:a})]})]}),s.jsx(Mt,{message:o})]}),s.jsxs("div",{className:"visual-panel",children:[s.jsx("h2",{children:"Queue Visualization"}),s.jsxs("div",{className:"queue-container",children:[s.jsx("div",{className:"queue-label",children:s.jsx("span",{className:"front-marker",children:"FRONT →"})}),s.jsx("div",{className:"queue-visual",children:e.length===0?s.jsx("div",{className:"queue-empty",children:"Queue is empty. Enqueue some items!"}):e.map((g,d)=>{const h=d===0,y=d===e.length-1;return s.jsxs("div",{className:`queue-item ${h?"queue-front":""} ${y?"queue-back":""}`,children:[h&&s.jsx("span",{className:"front-label",children:"FRONT"}),g,y&&s.jsx("span",{className:"back-label",children:"BACK"})]},d)})}),s.jsx("div",{className:"queue-label",children:s.jsx("span",{className:"back-marker",children:"← BACK"})})]})]})]}),s.jsx($n,{dataStructure:"queue"})]})}function yy(){const[e,n]=v.useState([]),[t,r]=v.useState(0),[l,i]=v.useState("Empty"),{message:a,showMessage:o}=Vt(3e3),[u,c]=v.useState(""),[f,p]=v.useState(""),[m,N]=v.useState(""),[x,k]=v.useState(""),[g,d]=v.useState(""),[h,y]=v.useState("");v.useEffect(()=>{w()},[]);const w=async()=>{try{const T=await Ye("/api/linkedlist");n(T.items||[]),r(T.size||0),i(T.head!==null&&T.head!==void 0?T.head:"Empty")}catch(T){console.error("Error loading linked list:",T)}},S=async()=>{if(!u||u.trim()===""){o("Please enter a number!","error");return}const T=Number(u);if(isNaN(T)){o("Please enter a valid number!","error");return}try{const $=await le("/api/linkedlist/insert/head",{value:T});if($.error){o($.error,"error");return}n($.items||[]),r($.size||0),i($.head!==null&&$.head!==void 0?$.head:"Empty"),o(`Inserted ${T} at head!`,"success"),c("")}catch($){console.error("Insert error:",$),o("Error inserting. Is Flask running?","error")}},z=async()=>{if(!f||f.trim()===""){o("Please enter a number!","error");return}const T=Number(f);if(isNaN(T)){o("Please enter a valid number!","error");return}try{const $=await le("/api/linkedlist/insert/tail",{value:T});if($.error){o($.error,"error");return}n($.items||[]),r($.size||0),i($.head!==null&&$.head!==void 0?$.head:"Empty"),o(`Inserted ${T} at tail!`,"success"),p("")}catch($){console.error("Insert error:",$),o("Error inserting. Is Flask running?","error")}},_=async()=>{try{const T=await le("/api/linkedlist/delete/head",{});if(T.error){o(T.error,"error");return}n(T.items||[]),r(T.size||0),i(T.head!==null&&T.head!==void 0?T.head:"Empty"),o("Deleted head!","success")}catch{o("Error deleting head","error")}},O=async()=>{try{const T=await le("/api/linkedlist/delete/tail",{});if(T.error){o(T.error,"error");return}n(T.items||[]),r(T.size||0),i(T.head!==null&&T.head!==void 0?T.head:"Empty"),o("Deleted tail!","success")}catch{o("Error deleting tail","error")}},M=async()=>{try{await le("/api/linkedlist/clear",{}),n([]),r(0),i("Empty"),o("List cleared!","success")}catch{o("Error clearing list","error")}};return s.jsxs("div",{className:"container",children:[s.jsxs("div",{className:"intro-layout",children:[s.jsxs("div",{className:"concept-box",children:[s.jsxs("div",{className:"concept-header",children:[s.jsx(mn,{className:"icon-sm"}),s.jsx("span",{children:"What is a Singly Linked List?"})]}),s.jsxs("div",{className:"concept-content",children:[s.jsxs("p",{children:["A ",s.jsx("strong",{children:"Singly Linked List"})," is a linear data structure where each element contains data and a pointer to the next node."]}),s.jsxs("div",{className:"concept-analogy",children:[s.jsx(rn,{}),s.jsxs("span",{children:["Think of a treasure hunt – each clue points to the ",s.jsx("strong",{children:"next location"}),"!"]})]})]})]}),s.jsx(Vn,{context:"Singly Linked List data structure"})]}),s.jsxs("div",{className:"visualizer-layout",children:[s.jsxs("div",{className:"control-panel",children:[s.jsx("h2",{children:"Linked List Operations"}),s.jsxs("div",{className:"operation-group",children:[s.jsx("label",{htmlFor:"insertHeadValue",children:"Insert at Head"}),s.jsxs("div",{className:"input-group",children:[s.jsx("input",{type:"text",id:"insertHeadValue",value:u,onChange:T=>c(T.target.value),onKeyPress:T=>T.key==="Enter"&&S(),placeholder:"Enter a value"}),s.jsx("button",{onClick:S,className:"btn btn-insert",children:"Insert Head"})]})]}),s.jsxs("div",{className:"operation-group",children:[s.jsx("label",{htmlFor:"insertTailValue",children:"Insert at Tail"}),s.jsxs("div",{className:"input-group",children:[s.jsx("input",{type:"text",id:"insertTailValue",value:f,onChange:T=>p(T.target.value),onKeyPress:T=>T.key==="Enter"&&z(),placeholder:"Enter a value"}),s.jsx("button",{onClick:z,className:"btn btn-insert",children:"Insert Tail"})]})]}),s.jsxs("div",{className:"operation-group",children:[s.jsx("label",{children:"Delete Operations"}),s.jsxs("div",{className:"btn-group",children:[s.jsx("button",{onClick:_,className:"btn btn-delete",children:"Delete Head"}),s.jsx("button",{onClick:O,className:"btn btn-delete",children:"Delete Tail"})]})]}),s.jsx("div",{className:"operation-group",children:s.jsx("button",{onClick:M,className:"btn btn-clear full-width",children:"Clear All"})}),s.jsxs("div",{className:"info-panel",children:[s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Size:"}),s.jsx("span",{className:"info-value",children:t})]}),s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Head:"}),s.jsx("span",{className:"info-value",children:l})]})]}),s.jsx(Mt,{message:a})]}),s.jsxs("div",{className:"visual-panel",children:[s.jsx("h2",{children:"Linked List Visualization"}),s.jsx("div",{className:"linkedlist-container",children:s.jsx("div",{className:"linkedlist-visual",children:e.length===0?s.jsx("div",{className:"linkedlist-empty",children:"List is empty. Insert some nodes!"}):e.map((T,$)=>s.jsx(Lr.Fragment,{children:s.jsxs("div",{className:"linkedlist-node",children:[s.jsx("div",{className:"node-value",children:T}),$<e.length-1&&s.jsx("div",{className:"node-arrow",children:"→"})]})},$))})})]})]}),s.jsx($n,{dataStructure:"linkedlist"})]})}function vy(){const[e,n]=v.useState([]),[t,r]=v.useState(0),[l,i]=v.useState(0),[a,o]=v.useState(0),[u,c]=v.useState(0),{message:f,showMessage:p}=Vt(3e3),[m,N]=v.useState(""),[x,k]=v.useState(""),[g,d]=v.useState(""),[h,y]=v.useState(""),[w,S]=v.useState(null),[z,_]=v.useState([]),[O,M]=v.useState(null),[T,$]=v.useState(null);v.useEffect(()=>{ae()},[]);const ae=async()=>{try{const j=await Ye("/api/hashtable");n(j.table||[]),r(j.size||0),i(j.capacity||0),o(j.load_factor||0),c(j.collision_count||0)}catch(j){console.error("Error loading hashtable:",j)}},te=j=>{if(!l||l===0)return 0;let P=0;for(let R=0;R<j.length;R++)P=(P*31+j.charCodeAt(R))%l;return P},Ne=(j,P)=>{const R=te(j),D=[R];let F=R;for(;P[F]&&P[F][0]!==j&&(F=(F+1)%l,D.push(F),!(F===R||D.length>l)););return{originalHash:R,path:D,finalSlot:F}},V=async()=>{if(!m.trim()||!x.trim()){p("Please enter both key and value!","error");return}const j=l>0?te(m.trim()):0,P=e.length>0&&e[j]&&e[j][0]!==m.trim();let R=null;P&&(R=Ne(m.trim(),e));try{const D=await le("/api/hashtable/insert",{key:m.trim(),value:x.trim()});if(D.error){p(D.error,"error");return}await ae(),M(m.trim()),P&&R?($({key:m.trim(),originalSlot:R.originalHash,probedSlots:R.path,finalSlot:R.path[R.path.length-1]}),_(R.path),p(`Collision! "${m}" hashed to ${R.originalHash}, probed ${R.path.length} slot(s)`,"warning"),setTimeout(()=>{_([]),$(null)},4e3)):(p(`Inserted "${m}" → slot ${j}`,"success"),S(j),setTimeout(()=>S(null),2e3)),N(""),k(""),setTimeout(()=>M(null),3e3)}catch{p("Error inserting. Is Flask running?","error")}},C=async()=>{if(!g.trim()){p("Please enter a key!","error");return}try{const j=await le("/api/hashtable/delete",{key:g.trim()});if(j.error){p(j.error,"error");return}await ae(),p(`Deleted "${g}"`,"success"),d("")}catch{p("Error deleting. Is Flask running?","error")}},E=async()=>{if(!h.trim()){p("Please enter a key!","error");return}try{const j=await Ye(`/api/hashtable/get?key=${encodeURIComponent(h.trim())}`);if(j.error){p(j.error,"error");return}j.found?p(`Found: "${h}" = ${j.value}`,"success"):p(`Key "${h}" not found`,"error"),y("")}catch{p("Error searching item","error")}},b=async()=>{try{await le("/api/hashtable/clear",{}),await ae(),_([]),$(null),p("Hashtable cleared!","success")}catch{p("Error clearing hashtable","error")}};return s.jsxs("div",{className:"container",children:[s.jsxs("div",{className:"intro-layout",children:[s.jsxs("div",{className:"intro-left",children:[s.jsxs("div",{className:"concept-box",children:[s.jsxs("div",{className:"concept-header",children:[s.jsx(mn,{className:"icon-sm"}),s.jsx("span",{children:"What is a Hash Table?"})]}),s.jsxs("div",{className:"concept-content",children:[s.jsxs("p",{children:["A ",s.jsx("strong",{children:"Hash Table"})," maps keys to values using a hash function for O(1) lookups."]}),s.jsxs("div",{className:"concept-analogy",children:[s.jsx(rn,{}),s.jsxs("span",{children:["Like a ",s.jsx("strong",{children:"coat check"})," – give them your coat (value), get a ticket number (hash of key)!"]})]})]})]}),s.jsxs("div",{className:"concept-box",style:{marginTop:"1rem"},children:[s.jsxs("div",{className:"concept-header",children:[s.jsx(Cr,{className:"icon-sm",style:{color:"#f59e0b"}}),s.jsx("span",{children:"Linear Probing"})]}),s.jsxs("div",{className:"concept-content",children:[s.jsxs("p",{children:["When two keys hash to the same slot (",s.jsx("strong",{children:"collision"}),"), we check the next slot until we find an empty one."]}),s.jsxs("div",{className:"concept-analogy",style:{marginTop:"0.5rem"},children:[s.jsx(Sn,{style:{color:"#3b82f6"}}),s.jsx("span",{children:"Like parking – if spot 3 is taken, try spot 4, then 5..."})]})]})]})]}),s.jsx(Vn,{context:"Hash Table with Linear Probing"})]}),s.jsxs("div",{className:"visualizer-layout",children:[s.jsxs("div",{className:"control-panel",children:[s.jsx("h2",{children:"Operations"}),s.jsxs("div",{className:"operation-group",children:[s.jsx("label",{children:"Insert Key-Value"}),s.jsxs("div",{className:"input-group",children:[s.jsx("input",{type:"text",value:m,onChange:j=>N(j.target.value),placeholder:"Key"}),s.jsx("input",{type:"text",value:x,onChange:j=>k(j.target.value),onKeyPress:j=>j.key==="Enter"&&V(),placeholder:"Value"}),s.jsx("button",{onClick:V,className:"btn btn-insert",children:"Insert"})]})]}),s.jsxs("div",{className:"operation-group",children:[s.jsx("label",{children:"Delete Key"}),s.jsxs("div",{className:"input-group",children:[s.jsx("input",{type:"text",value:g,onChange:j=>d(j.target.value),onKeyPress:j=>j.key==="Enter"&&C(),placeholder:"Key"}),s.jsx("button",{onClick:C,className:"btn btn-delete",children:"Delete"})]})]}),s.jsxs("div",{className:"operation-group",children:[s.jsx("label",{children:"Search Key"}),s.jsxs("div",{className:"input-group",children:[s.jsx("input",{type:"text",value:h,onChange:j=>y(j.target.value),onKeyPress:j=>j.key==="Enter"&&E(),placeholder:"Key"}),s.jsx("button",{onClick:E,className:"btn btn-search",children:"Search"})]})]}),s.jsx("div",{className:"operation-group",children:s.jsx("button",{onClick:b,className:"btn btn-clear",children:"Clear Table"})}),s.jsxs("div",{className:"info-panel",children:[s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Items"}),s.jsxs("span",{className:"info-value",children:[t,"/",l]})]}),s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Load"}),s.jsxs("span",{className:"info-value",style:{color:a>=.7?"#f59e0b":"inherit"},children:[(a*100).toFixed(0),"%"]})]}),s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Collisions"}),s.jsx("span",{className:"info-value",style:{color:u>0?"#f59e0b":"inherit"},children:u})]})]}),s.jsxs("div",{className:"rehash-info-box",children:[s.jsx(kd,{size:16}),s.jsxs("div",{children:[s.jsx("strong",{children:"Rehashing Threshold: 70%"}),s.jsx("p",{children:"In practice, hash tables rehash (double capacity) when load factor reaches ~0.7 to maintain O(1) performance."}),a>=.7?s.jsxs("span",{className:"rehash-warning",children:["Current load (",(a*100).toFixed(0),"%) exceeds threshold!"]}):s.jsxs("span",{className:"rehash-safe",children:["Currently safe (",(a*100).toFixed(0),"% < 70%)"]})]})]}),s.jsx(Mt,{message:f})]}),s.jsxs("div",{className:"visual-panel",children:[s.jsx("h2",{children:"Hash Table"}),m&&s.jsxs("div",{className:"hash-demo",children:[s.jsxs("div",{className:"hash-demo-item",children:[s.jsx("span",{className:"hash-demo-label",children:"Key:"}),s.jsxs("span",{className:"hash-demo-key",children:['"',m,'"']})]}),s.jsx(fe,{className:"hash-demo-arrow"}),s.jsx("div",{className:"hash-demo-item",children:s.jsx("span",{className:"hash-demo-label",children:"hash()"})}),s.jsx(fe,{className:"hash-demo-arrow"}),s.jsxs("div",{className:"hash-demo-item",children:[s.jsx("span",{className:"hash-demo-label",children:"Slot:"}),s.jsx("span",{className:"hash-demo-index",children:te(m)})]})]}),T&&s.jsxs("div",{className:"collision-banner",children:[s.jsx(Cr,{size:18}),s.jsxs("div",{children:[s.jsx("strong",{children:"Collision Detected!"}),s.jsxs("p",{children:['"',T.key,'" hashed to slot ',s.jsx("span",{className:"slot-badge original",children:T.originalSlot}),T.probedSlots.length>1&&s.jsxs(s.Fragment,{children:[" ","- Probed: ",T.probedSlots.map((j,P)=>s.jsxs("span",{children:[s.jsx("span",{className:`slot-badge ${P===T.probedSlots.length-1?"final":"probed"}`,children:j}),P<T.probedSlots.length-1&&" > "]},P))]})]})]})]}),s.jsx("div",{className:"ht-visual",children:!e||e.length===0?s.jsx("div",{className:"ht-empty",children:"Hash table is empty. Insert some key-value pairs!"}):s.jsx("div",{className:"ht-buckets",children:e.map((j,P)=>{const R=z.includes(P),D=T&&T.originalSlot===P,F=T&&T.finalSlot===P;return s.jsxs("div",{className:`ht-row ${j?"filled":"empty"} 
                        ${w===P?"highlighted":""} 
                        ${O&&j&&j[0]===O?"just-inserted":""}
                        ${R?"probed":""}
                        ${D?"original-hash":""}
                        ${F?"final-slot":""}`,children:[R&&s.jsx("div",{className:"probe-indicator",children:D?"X":F?"O":">"}),s.jsx("div",{className:`ht-key-box ${j?"has-key":""}`,children:j&&s.jsx("span",{className:"ht-key",children:j[0]})}),s.jsx("div",{className:"ht-arrow",children:j&&s.jsx(fe,{size:20})}),s.jsx("div",{className:`ht-index ${D?"collision-index":""}`,children:P}),s.jsx("div",{className:`ht-value-box ${j?"has-value":""}`,children:j?s.jsx("span",{className:"ht-value",children:j[1]}):s.jsx("span",{className:"ht-empty-slot",children:"—"})})]},P)})})}),s.jsxs("div",{className:"ht-legend",children:[s.jsxs("div",{className:"legend-item",children:[s.jsx("div",{className:"legend-color key-color"}),s.jsx("span",{children:"Key"})]}),s.jsxs("div",{className:"legend-item",children:[s.jsx("div",{className:"legend-color index-color"}),s.jsx("span",{children:"Index"})]}),s.jsxs("div",{className:"legend-item",children:[s.jsx("div",{className:"legend-color value-color"}),s.jsx("span",{children:"Value"})]}),z.length>0&&s.jsxs("div",{className:"legend-item",children:[s.jsx("div",{className:"legend-color probe-color"}),s.jsx("span",{children:"Probing Path"})]})]})]})]}),s.jsx($n,{dataStructure:"hashtable"})]})}const gy={title:"What is Chaining?",description:"Chaining handles collisions by storing multiple key-value pairs in a linked list at each slot.",codeExample:"slot[hash] → [key1, val1] → [key2, val2] → ...",analogy:"Like a coat rack - multiple coats can hang on the same hook!"},xy={title:"Chaining vs Probing",chaining:{label:"Chaining:",color:"#22c55e",points:["Uses linked lists","Load factor can exceed 1.0"]},probing:{label:"Probing:",color:"#f59e0b",points:["Finds next empty slot","Load factor must stay below 1.0"]},summary:"Chaining is simpler and handles high load factors better, but uses extra memory for pointers."},ky={title:"Chaining Advantage",description:"With chaining, load factor can exceed 1.0 because each slot can hold multiple items in a chain.",highLoadThreshold:1.5,highLoadMessage:"High load ({loadFactor}) - chains getting long!",safeMessage:"Load factor: {loadFactor}"},Ny={title:"Rehash Table",description:"Doubles the table capacity and redistributes all items to reduce chain lengths.",buttonText:"Rehash",recommendThreshold:1.5},jy=[{type:"color",className:"key-color",label:"Key"},{type:"color",className:"index-color",label:"Index"},{type:"color",className:"value-color",label:"Value"},{type:"icon",icon:"Link",color:"#8b5cf6",label:"Chain (Linked List)"}],wy={insert:{label:"Insert Key-Value",keyPlaceholder:"Key",valuePlaceholder:"Value",buttonText:"Insert"},delete:{label:"Delete Key",placeholder:"Key",buttonText:"Delete"},search:{label:"Search Key",placeholder:"Key",buttonText:"Search"},clear:{buttonText:"Clear Table"},rehash:{buttonText:"Rehash"}},Sy={items:"Items",capacity:"Capacity",load:"Load",collisions:"Collisions"},Ty={emptyTable:"Hash table is empty. Insert some key-value pairs!",insertSuccess:'Inserted "{key}" at slot {index}',insertUpdated:'Updated "{key}" at slot {index}',insertCollision:'Collision! Added "{key}" to chain at slot {index}',deleteSuccess:'Deleted "{key}"',searchFound:'Found: "{key}" = {value}',searchNotFound:'Key "{key}" not found',clearSuccess:"Hashtable cleared!",rehashSuccess:"Rehashed! Capacity: {oldCapacity} -> {newCapacity}",rehashEmpty:"Nothing to rehash - table is empty!",errorNoKey:"Please enter a key!",errorNoKeyValue:"Please enter both key and value!",errorInsert:"Error inserting. Is Flask running?",errorDelete:"Error deleting. Is Flask running?",errorSearch:"Error searching item",errorClear:"Error clearing hashtable",errorRehash:"Error rehashing. Is Flask running?"},A={concept:gy,comparison:xy,chainingAdvantage:ky,rehash:Ny,legend:jy,operations:wy,infoLabels:Sy,messages:Ty};function by(){const[e,n]=v.useState([]),[t,r]=v.useState(0),[l,i]=v.useState(0),[a,o]=v.useState(0),[u,c]=v.useState(0),{message:f,showMessage:p}=Vt(3e3),[m,N]=v.useState(""),[x,k]=v.useState(""),[g,d]=v.useState(""),[h,y]=v.useState(""),[w,S]=v.useState(null),[z,_]=v.useState(null),[O,M]=v.useState(!1);v.useEffect(()=>{T()},[]);const T=async()=>{try{const C=await Ye("/api/hashtable_chaining");n(C.table||[]),r(C.size||0),i(C.capacity||0),o(C.load_factor||0),c(C.collision_count||0)}catch(C){console.error("Error loading hashtable:",C)}},$=C=>{if(!l||l===0)return 0;let E=0;for(let b=0;b<C.length;b++)E=(E*31+C.charCodeAt(b))%l;return E},ae=async()=>{if(!m.trim()||!x.trim()){p(A.messages.errorNoKeyValue,"error");return}try{const C=await le("/api/hashtable_chaining/insert",{key:m.trim(),value:x.trim()});if(C.error){p(C.error,"error");return}await T(),_(m.trim()),C.updated?p(A.messages.insertUpdated.replace("{key}",m).replace("{index}",C.index),"info"):C.collision?p(A.messages.insertCollision.replace("{key}",m).replace("{index}",C.index),"warning"):p(A.messages.insertSuccess.replace("{key}",m).replace("{index}",C.index),"success"),S(C.index),setTimeout(()=>{S(null),_(null)},3e3),N(""),k("")}catch{p(A.messages.errorInsert,"error")}},te=async()=>{if(!g.trim()){p(A.messages.errorNoKey,"error");return}try{const C=await le("/api/hashtable_chaining/delete",{key:g.trim()});if(C.error){p(C.error,"error");return}await T(),p(A.messages.deleteSuccess.replace("{key}",g),"success"),d("")}catch{p(A.messages.errorDelete,"error")}},Ne=async()=>{if(!h.trim()){p(A.messages.errorNoKey,"error");return}try{const C=await Ye(`/api/hashtable_chaining/get?key=${encodeURIComponent(h.trim())}`);if(C.error){p(C.error,"error");return}C.found?p(A.messages.searchFound.replace("{key}",h).replace("{value}",C.value),"success"):p(A.messages.searchNotFound.replace("{key}",h),"error"),y("")}catch{p(A.messages.errorSearch,"error")}},V=async()=>{try{await le("/api/hashtable_chaining/clear",{}),await T(),S(null),_(null),p(A.messages.clearSuccess,"success")}catch{p(A.messages.errorClear,"error")}};return s.jsxs("div",{className:"container",children:[s.jsxs("div",{className:"intro-layout",children:[s.jsxs("div",{className:"intro-left",children:[s.jsxs("div",{className:"concept-box",children:[s.jsxs("div",{className:"concept-header",children:[s.jsx(mn,{className:"icon-sm"}),s.jsx("span",{children:A.concept.title})]}),s.jsxs("div",{className:"concept-content",children:[s.jsxs("p",{children:[s.jsx("strong",{children:"Chaining"})," ",A.concept.description.replace("Chaining ","")]}),s.jsx("div",{style:{background:"var(--bg-tertiary)",padding:"0.75rem",borderRadius:"8px",marginTop:"0.5rem",fontFamily:"monospace",fontSize:"0.9rem"},children:s.jsx("div",{children:A.concept.codeExample})}),s.jsxs("div",{className:"concept-analogy",style:{marginTop:"0.75rem"},children:[s.jsx(rn,{}),s.jsx("span",{children:A.concept.analogy})]})]})]}),s.jsxs("div",{className:"concept-box",style:{marginTop:"1rem"},children:[s.jsxs("div",{className:"concept-header",children:[s.jsx(Sn,{className:"icon-sm",style:{color:"#3b82f6"}}),s.jsx("span",{children:A.comparison.title})]}),s.jsxs("div",{className:"concept-content",children:[s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",fontSize:"0.85rem"},children:[s.jsxs("div",{children:[s.jsx("strong",{style:{color:A.comparison.chaining.color},children:A.comparison.chaining.label}),A.comparison.chaining.points.map((C,E)=>s.jsx("div",{style:{marginTop:"0.25rem"},children:C},E))]}),s.jsxs("div",{children:[s.jsx("strong",{style:{color:A.comparison.probing.color},children:A.comparison.probing.label}),A.comparison.probing.points.map((C,E)=>s.jsx("div",{style:{marginTop:"0.25rem"},children:C},E))]})]}),s.jsx("p",{style:{marginTop:"0.75rem",fontSize:"0.85rem"},children:A.comparison.summary})]})]})]}),s.jsx(Vn,{context:"Hash Table with Chaining"})]}),s.jsxs("div",{className:"visualizer-layout",children:[s.jsxs("div",{className:"control-panel",children:[s.jsx("h2",{children:"Operations"}),s.jsxs("div",{className:"operation-group",children:[s.jsx("label",{children:A.operations.insert.label}),s.jsxs("div",{className:"input-group",children:[s.jsx("input",{type:"text",value:m,onChange:C=>N(C.target.value),placeholder:A.operations.insert.keyPlaceholder}),s.jsx("input",{type:"text",value:x,onChange:C=>k(C.target.value),onKeyDown:C=>C.key==="Enter"&&ae(),placeholder:A.operations.insert.valuePlaceholder}),s.jsx("button",{onClick:ae,className:"btn btn-insert",children:A.operations.insert.buttonText})]})]}),s.jsxs("div",{className:"operation-group",children:[s.jsx("label",{children:A.operations.delete.label}),s.jsxs("div",{className:"input-group",children:[s.jsx("input",{type:"text",value:g,onChange:C=>d(C.target.value),onKeyDown:C=>C.key==="Enter"&&te(),placeholder:A.operations.delete.placeholder}),s.jsx("button",{onClick:te,className:"btn btn-delete",children:A.operations.delete.buttonText})]})]}),s.jsxs("div",{className:"operation-group",children:[s.jsx("label",{children:A.operations.search.label}),s.jsxs("div",{className:"input-group",children:[s.jsx("input",{type:"text",value:h,onChange:C=>y(C.target.value),onKeyDown:C=>C.key==="Enter"&&Ne(),placeholder:A.operations.search.placeholder}),s.jsx("button",{onClick:Ne,className:"btn btn-search",children:A.operations.search.buttonText})]})]}),s.jsx("div",{className:"operation-group",style:{display:"flex",gap:"0.5rem"},children:s.jsx("button",{onClick:V,className:"btn btn-clear",children:A.operations.clear.buttonText})}),s.jsxs("div",{className:"info-panel",children:[s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:A.infoLabels.items}),s.jsx("span",{className:"info-value",children:t})]}),s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:A.infoLabels.capacity}),s.jsx("span",{className:"info-value",children:l})]}),s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:A.infoLabels.load}),s.jsx("span",{className:"info-value",style:{color:a>=1?"#f59e0b":"inherit"},children:a.toFixed(2)})]}),s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:A.infoLabels.collisions}),s.jsx("span",{className:"info-value",style:{color:u>0?"#f59e0b":"inherit"},children:u})]})]}),s.jsxs("div",{className:"rehash-info-box",children:[s.jsx(Si,{size:16}),s.jsxs("div",{children:[s.jsx("strong",{children:A.chainingAdvantage.title}),s.jsx("p",{children:A.chainingAdvantage.description}),a>=A.chainingAdvantage.highLoadThreshold?s.jsxs("div",{className:"rehash-recommend",children:[s.jsx(Nd,{size:14}),s.jsx("span",{className:"rehash-warning",children:A.chainingAdvantage.highLoadMessage.replace("{loadFactor}",a.toFixed(2))})]}):s.jsx("span",{className:"rehash-safe",children:A.chainingAdvantage.safeMessage.replace("{loadFactor}",a.toFixed(2))})]})]}),s.jsx(Mt,{message:f})]}),s.jsxs("div",{className:"visual-panel",children:[s.jsx("h2",{children:"Hash Table (Chaining)"}),m&&s.jsxs("div",{className:"hash-demo",children:[s.jsxs("div",{className:"hash-demo-item",children:[s.jsx("span",{className:"hash-demo-label",children:"Key:"}),s.jsxs("span",{className:"hash-demo-key",children:['"',m,'"']})]}),s.jsx(fe,{className:"hash-demo-arrow"}),s.jsx("div",{className:"hash-demo-item",children:s.jsx("span",{className:"hash-demo-label",children:"hash()"})}),s.jsx(fe,{className:"hash-demo-arrow"}),s.jsxs("div",{className:"hash-demo-item",children:[s.jsx("span",{className:"hash-demo-label",children:"Slot:"}),s.jsx("span",{className:"hash-demo-index",children:$(m)})]})]}),s.jsx("div",{className:"ht-chaining-visual",children:!e||e.length===0?s.jsx("div",{className:"ht-empty",children:A.messages.emptyTable}):s.jsx("div",{className:"ht-chaining-buckets",children:e.map((C,E)=>{const b=w===E,j=C&&Array.isArray(C)&&C.length>0,P=j?C.length:0;return s.jsxs("div",{className:`ht-chaining-row ${j?"filled":"empty"} ${b?"highlighted":""}`,children:[s.jsxs("div",{className:"ht-chaining-index",children:[s.jsx("span",{className:"index-number",children:E}),P>1&&s.jsx("span",{className:"chain-count",children:P})]}),s.jsx("div",{className:"ht-chaining-arrow-container",children:s.jsx(fe,{size:18,className:"bucket-arrow"})}),s.jsx("div",{className:"ht-chaining-content",children:j?s.jsx("div",{className:"ht-chaining-chain",children:C.map((R,D)=>{const F=z&&R.key===z;return s.jsxs(Lr.Fragment,{children:[s.jsxs("div",{className:`ht-chaining-node ${F?"just-inserted":""} ${D>0?"collision-node":""}`,children:[s.jsx("div",{className:"node-key",children:R.key}),s.jsx("div",{className:"node-separator"}),s.jsx("div",{className:"node-value",children:R.value})]}),D<C.length-1&&s.jsx("div",{className:"chain-link",children:s.jsx(fe,{size:16})})]},D)})}):s.jsx("div",{className:"ht-chaining-empty-slot",children:s.jsx("span",{children:"Empty"})})})]},E)})})}),s.jsx("div",{className:"ht-legend",children:A.legend.map((C,E)=>s.jsxs("div",{className:"legend-item",children:[C.type==="color"?s.jsx("div",{className:`legend-color ${C.className}`}):s.jsx(Si,{size:14,style:{color:C.color}}),s.jsx("span",{children:C.label})]},E))})]})]}),s.jsx($n,{dataStructure:"hashtableChaining"})]})}function Cy(){const[e,n]=v.useState([]),[t,r]=v.useState(0),[l,i]=v.useState(0),[a,o]=v.useState(0),{message:u,showMessage:c}=Vt(3e3),[f,p]=v.useState(""),[m,N]=v.useState(""),[x,k]=v.useState(""),[g,d]=v.useState(""),[h,y]=v.useState(null),[w,S]=v.useState([]),[z,_]=v.useState(null),[O,M]=v.useState(null);v.useEffect(()=>{T()},[]);const T=async()=>{try{const E=await Ye("/api/hashtable_quadratic");n(E.table||[]),r(E.size||0),i(E.capacity||0),o(E.load_factor||0)}catch(E){console.error("Error loading hashtable:",E)}},$=E=>{if(!l||l===0)return 0;let b=0;for(let j=0;j<E.length;j++)b=(b*31+E.charCodeAt(j))%l;return b},ae=(E,b)=>{var R;const j=$(E),P=[];for(let D=0;D<l;D++){const F=(j+D*D)%l;if(P.push({index:F,i:D,formula:`(${j} + ${D}²) % ${l} = ${F}`}),!b[F]||b[F][0]===E)break}return{originalHash:j,path:P,finalSlot:(R=P[P.length-1])==null?void 0:R.index}},te=async()=>{if(!f.trim()||!m.trim()){c("Please enter both key and value!","error");return}const E=l>0?$(f.trim()):0,b=e.length>0&&e[E]&&e[E]!=="DELETED"&&e[E][0]!==f.trim();let j=null;b&&(j=ae(f.trim(),e));try{const P=await le("/api/hashtable_quadratic/insert",{key:f.trim(),value:m.trim()});if(P.error){c(P.error,"error");return}await T(),_(f.trim()),b&&j?(M({key:f.trim(),originalSlot:j.originalHash,probedSlots:j.path,finalSlot:P.final_index}),S(j.path.map(R=>R.index)),c(`Collision! Quadratic probing: ${j.path.length} probe(s)`,"warning"),setTimeout(()=>{S([]),M(null)},5e3)):(c(`Inserted "${f}" → slot ${E}`,"success"),y(E),setTimeout(()=>y(null),2e3)),p(""),N(""),setTimeout(()=>_(null),3e3)}catch{c("Error inserting. Is Flask running?","error")}},Ne=async()=>{if(!x.trim()){c("Please enter a key!","error");return}try{const E=await le("/api/hashtable_quadratic/delete",{key:x.trim()});if(E.error){c(E.error,"error");return}await T(),c(`Deleted "${x}"`,"success"),k("")}catch{c("Error deleting. Is Flask running?","error")}},V=async()=>{if(!g.trim()){c("Please enter a key!","error");return}try{const E=await Ye(`/api/hashtable_quadratic/get?key=${encodeURIComponent(g.trim())}`);if(E.error){c(E.error,"error");return}E.found?c(`Found: "${g}" = ${E.value}`,"success"):c(`Key "${g}" not found`,"error"),d("")}catch{c("Error searching item","error")}},C=async()=>{try{await le("/api/hashtable_quadratic/clear",{}),await T(),S([]),M(null),c("Hashtable cleared!","success")}catch{c("Error clearing hashtable","error")}};return s.jsxs("div",{className:"container",children:[s.jsxs("div",{className:"intro-layout",children:[s.jsxs("div",{className:"intro-left",children:[s.jsxs("div",{className:"concept-box",children:[s.jsxs("div",{className:"concept-header",children:[s.jsx(mn,{className:"icon-sm"}),s.jsx("span",{children:"What is Quadratic Probing?"})]}),s.jsxs("div",{className:"concept-content",children:[s.jsxs("p",{children:[s.jsx("strong",{children:"Quadratic Probing"})," is a collision resolution technique where we probe at quadratically increasing intervals."]}),s.jsxs("div",{style:{background:"var(--bg-tertiary)",padding:"0.75rem",borderRadius:"8px",marginTop:"0.5rem",fontFamily:"monospace",fontSize:"0.9rem"},children:[s.jsx("div",{children:"probe(i) = (hash + i²) % capacity"}),s.jsx("div",{style:{color:"var(--text-muted)",marginTop:"0.25rem"},children:"i = 0, 1, 4, 9, 16, 25..."})]}),s.jsxs("div",{className:"concept-analogy",style:{marginTop:"0.75rem"},children:[s.jsx(rn,{}),s.jsxs("span",{children:["Unlike linear probing, we jump further each time – reducing ",s.jsx("strong",{children:"clustering"}),"!"]})]})]})]}),s.jsxs("div",{className:"concept-box",style:{marginTop:"1rem"},children:[s.jsxs("div",{className:"concept-header",children:[s.jsx(Sn,{className:"icon-sm",style:{color:"#3b82f6"}}),s.jsx("span",{children:"Linear vs Quadratic"})]}),s.jsxs("div",{className:"concept-content",children:[s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",fontSize:"0.85rem"},children:[s.jsxs("div",{children:[s.jsx("strong",{style:{color:"#f59e0b"},children:"Linear:"}),s.jsx("div",{style:{fontFamily:"monospace",marginTop:"0.25rem"},children:"+1, +2, +3, +4..."})]}),s.jsxs("div",{children:[s.jsx("strong",{style:{color:"#22c55e"},children:"Quadratic:"}),s.jsx("div",{style:{fontFamily:"monospace",marginTop:"0.25rem"},children:"+1, +4, +9, +16..."})]})]}),s.jsx("p",{style:{marginTop:"0.75rem",fontSize:"0.85rem"},children:"Quadratic probing spreads entries more evenly but may not find empty slots if table is over 50% full."})]})]})]}),s.jsx(Vn,{context:"Hash Table with Quadratic Probing"})]}),s.jsxs("div",{className:"visualizer-layout",children:[s.jsxs("div",{className:"control-panel",children:[s.jsx("h2",{children:"Operations"}),s.jsxs("div",{className:"operation-group",children:[s.jsx("label",{children:"Insert Key-Value"}),s.jsxs("div",{className:"input-group",children:[s.jsx("input",{type:"text",value:f,onChange:E=>p(E.target.value),placeholder:"Key"}),s.jsx("input",{type:"text",value:m,onChange:E=>N(E.target.value),onKeyPress:E=>E.key==="Enter"&&te(),placeholder:"Value"}),s.jsx("button",{onClick:te,className:"btn btn-insert",children:"Insert"})]})]}),s.jsxs("div",{className:"operation-group",children:[s.jsx("label",{children:"Delete Key"}),s.jsxs("div",{className:"input-group",children:[s.jsx("input",{type:"text",value:x,onChange:E=>k(E.target.value),onKeyPress:E=>E.key==="Enter"&&Ne(),placeholder:"Key"}),s.jsx("button",{onClick:Ne,className:"btn btn-delete",children:"Delete"})]})]}),s.jsxs("div",{className:"operation-group",children:[s.jsx("label",{children:"Search Key"}),s.jsxs("div",{className:"input-group",children:[s.jsx("input",{type:"text",value:g,onChange:E=>d(E.target.value),onKeyPress:E=>E.key==="Enter"&&V(),placeholder:"Key"}),s.jsx("button",{onClick:V,className:"btn btn-search",children:"Search"})]})]}),s.jsx("div",{className:"operation-group",children:s.jsx("button",{onClick:C,className:"btn btn-clear",children:"Clear Table"})}),s.jsxs("div",{className:"info-panel",children:[s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Items"}),s.jsxs("span",{className:"info-value",children:[t,"/",l]})]}),s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Load"}),s.jsxs("span",{className:"info-value",style:{color:a>=.5?"#f59e0b":"inherit"},children:[(a*100).toFixed(0),"%"]})]})]}),s.jsxs("div",{className:"rehash-info-box",children:[s.jsx(kd,{size:16}),s.jsxs("div",{children:[s.jsx("strong",{children:"Rehashing Threshold: 50%"}),s.jsx("p",{children:"Quadratic probing requires lower load factor (~0.5) to guarantee finding empty slots."}),a>=.5?s.jsxs("span",{className:"rehash-warning",children:["Load (",(a*100).toFixed(0),"%) at threshold!"]}):s.jsxs("span",{className:"rehash-safe",children:["Currently safe (",(a*100).toFixed(0),"% < 50%)"]})]})]}),s.jsx(Mt,{message:u})]}),s.jsxs("div",{className:"visual-panel",children:[s.jsx("h2",{children:"Hash Table (Quadratic Probing)"}),f&&s.jsxs("div",{className:"hash-demo",children:[s.jsxs("div",{className:"hash-demo-item",children:[s.jsx("span",{className:"hash-demo-label",children:"Key:"}),s.jsxs("span",{className:"hash-demo-key",children:['"',f,'"']})]}),s.jsx(fe,{className:"hash-demo-arrow"}),s.jsx("div",{className:"hash-demo-item",children:s.jsx("span",{className:"hash-demo-label",children:"hash()"})}),s.jsx(fe,{className:"hash-demo-arrow"}),s.jsxs("div",{className:"hash-demo-item",children:[s.jsx("span",{className:"hash-demo-label",children:"Slot:"}),s.jsx("span",{className:"hash-demo-index",children:$(f)})]})]}),O&&s.jsxs("div",{className:"collision-banner",children:[s.jsx(Cr,{size:18}),s.jsxs("div",{children:[s.jsx("strong",{children:"Quadratic Probing!"}),s.jsxs("p",{children:['"',O.key,'" hashed to slot ',s.jsx("span",{className:"slot-badge original",children:O.originalSlot})]}),s.jsx("div",{style:{marginTop:"0.5rem",fontSize:"0.8rem",fontFamily:"monospace"},children:O.probedSlots.map((E,b)=>s.jsxs("div",{style:{marginBottom:"0.25rem"},children:["i=",E.i,": ",E.formula,b===O.probedSlots.length-1&&s.jsx("span",{style:{color:"#4ade80"},children:" [FOUND]"})]},b))})]})]}),s.jsx("div",{className:"ht-visual",children:!e||e.length===0?s.jsx("div",{className:"ht-empty",children:"Hash table is empty. Insert some key-value pairs!"}):s.jsx("div",{className:"ht-buckets",children:e.map((E,b)=>{const j=w.includes(b),P=O&&O.originalSlot===b,R=O&&O.finalSlot===b,D=E==="DELETED",F=E&&E!=="DELETED";return s.jsxs("div",{className:`ht-row ${F?"filled":"empty"} 
                        ${D?"deleted":""}
                        ${h===b?"highlighted":""} 
                        ${z&&F&&E[0]===z?"just-inserted":""}
                        ${j?"probed":""}
                        ${P?"original-hash":""}
                        ${R?"final-slot":""}`,children:[j&&s.jsx("div",{className:"probe-indicator",children:P?"X":R?"O":">"}),s.jsxs("div",{className:`ht-key-box ${F?"has-key":""} ${D?"deleted-slot":""}`,children:[F&&s.jsx("span",{className:"ht-key",children:E[0]}),D&&s.jsx("span",{className:"ht-deleted-text",children:"DEL"})]}),s.jsx("div",{className:"ht-arrow",children:F&&s.jsx(fe,{size:20})}),s.jsx("div",{className:`ht-index ${P?"collision-index":""}`,children:b}),s.jsx("div",{className:`ht-value-box ${F?"has-value":""} ${D?"deleted-slot":""}`,children:F?s.jsx("span",{className:"ht-value",children:E[1]}):D?s.jsx("span",{className:"ht-deleted-text",children:"DELETED"}):s.jsx("span",{className:"ht-empty-slot",children:"—"})})]},b)})})}),s.jsxs("div",{className:"ht-legend",children:[s.jsxs("div",{className:"legend-item",children:[s.jsx("div",{className:"legend-color key-color"}),s.jsx("span",{children:"Key"})]}),s.jsxs("div",{className:"legend-item",children:[s.jsx("div",{className:"legend-color index-color"}),s.jsx("span",{children:"Index"})]}),s.jsxs("div",{className:"legend-item",children:[s.jsx("div",{className:"legend-color value-color"}),s.jsx("span",{children:"Value"})]}),w.length>0&&s.jsxs("div",{className:"legend-item",children:[s.jsx("div",{className:"legend-color probe-color"}),s.jsx("span",{children:"Probe Path"})]})]})]})]}),s.jsx($n,{dataStructure:"hashtable"})]})}const gt=20,Ey={inorder:{name:"Inorder Traversal",order:"Left → Root → Right",description:"Visit left subtree, process root, then visit right subtree. For BST, this produces sorted order.",useCase:["Get sorted elements","Validate BST","Create mirror image"],complexity:{time:"O(n)",space:"O(h)"}},preorder:{name:"Preorder Traversal",order:"Root → Left → Right",description:"Process root first, then recursively visit left and right subtrees. Useful for copying trees.",useCase:["Copy tree structure","Serialize/deserialize","Prefix expressions"],complexity:{time:"O(n)",space:"O(h)"}},postorder:{name:"Postorder Traversal",order:"Left → Right → Root",description:"Visit left subtree, right subtree, then process root. Essential for deleting nodes safely.",useCase:["Delete nodes safely","Calculate folder sizes","Postfix expressions"],complexity:{time:"O(n)",space:"O(h)"}},levelorder:{name:"Level Order Traversal",order:"Level by Level (BFS)",description:"Visit nodes level by level using a queue. Perfect for finding shortest paths.",useCase:["Shortest path","Level-wise printing","Nodes at distance K"],complexity:{time:"O(n)",space:"O(w)"}}},Ti=(e,n=[])=>(e&&(Ti(e.left,n),n.push(e.data),Ti(e.right,n)),n),bi=(e,n=[])=>(e&&(n.push(e.data),bi(e.left,n),bi(e.right,n)),n),Ci=(e,n=[])=>(e&&(Ci(e.left,n),Ci(e.right,n),n.push(e.data)),n),Ly=e=>{if(!e)return[];const n=[],t=[e];for(;t.length;){const r=t.shift();n.push(r.data),r.left&&t.push(r.left),r.right&&t.push(r.right)}return n},Ei=(e,n=0)=>e?Math.max(Ei(e.left,n+1),Ei(e.right,n+1)):n-1;function _y(){return s.jsxs("div",{className:"intro-left",children:[s.jsxs("div",{className:"concept-box",children:[s.jsxs("div",{className:"concept-header",children:[s.jsx(mn,{className:"icon-sm"}),s.jsx("span",{children:"What is a Binary Tree?"})]}),s.jsxs("div",{className:"concept-content",children:[s.jsxs("p",{children:["A ",s.jsx("strong",{children:"Binary Tree"})," is a hierarchical data structure where each node has at most ",s.jsx("strong",{children:"two children"}),": left and right."]}),s.jsxs("div",{className:"concept-analogy",children:[s.jsx(rn,{}),s.jsxs("span",{children:["Think of a ",s.jsx("strong",{children:"family tree"})," – each person can have up to two children!"]})]}),s.jsxs("div",{className:"concept-key-terms",children:[s.jsx("h4",{children:"Key Terms:"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Node:"})," Contains data and links to children"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Root:"})," The topmost node (no parent)"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Leaf:"})," A node with no children"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Height:"})," Longest path from root to leaf"]})]})]})]})]}),s.jsxs("div",{className:"concept-box",style:{marginTop:"1rem"},children:[s.jsxs("div",{className:"concept-header",children:[s.jsx(Sn,{className:"icon-sm"}),s.jsx("span",{children:"What are Tree Traversals?"})]}),s.jsxs("div",{className:"concept-content",children:[s.jsxs("p",{children:[s.jsx("strong",{children:"Tree Traversal"})," is visiting each node ",s.jsx("strong",{children:"exactly once"})," in a specific order."]}),s.jsxs("div",{className:"concept-why-traverse",children:[s.jsx("h4",{children:"Why Traverse?"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Search:"})," Find specific data"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Copy:"})," Duplicate the tree"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Evaluate:"})," Calculate expressions"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Delete:"})," Remove nodes properly"]})]})]}),s.jsxs("div",{className:"concept-analogy",style:{marginTop:"0.75rem"},children:[s.jsx(rn,{}),s.jsx("span",{children:"Like reading a book – you can read in different orders based on your needs!"})]})]})]})]})}function zy({insertValue:e,deleteValue:n,size:t,height:r,message:l,tree:i,isAnimating:a,visitedNodes:o,onInsertValueChange:u,onDeleteValueChange:c,onInsert:f,onDelete:p,onTraversal:m,onClear:N,onResetTraversal:x}){const k=(g,d)=>{const h=g.target.value;(h===""||h==="-"||/^-?\d*\.?\d*$/.test(h))&&d(h)};return s.jsxs("div",{className:"control-panel",children:[s.jsx("h2",{children:"Binary Tree Traversals"}),s.jsxs("div",{className:"operation-group",children:[s.jsx("label",{htmlFor:"insertValue",children:"Insert Node"}),s.jsxs("div",{className:"input-group",children:[s.jsx("input",{type:"number",id:"insertValue",value:e,onChange:g=>k(g,u),onKeyPress:g=>g.key==="Enter"&&f(),placeholder:"Enter a number"}),s.jsx("button",{onClick:f,className:"btn btn-insert",children:"Insert"})]})]}),s.jsxs("div",{className:"operation-group",children:[s.jsx("label",{htmlFor:"deleteValue",children:"Delete Node"}),s.jsxs("div",{className:"input-group",children:[s.jsx("input",{type:"number",id:"deleteValue",value:n,onChange:g=>k(g,c),onKeyPress:g=>g.key==="Enter"&&p(),placeholder:"Enter a number"}),s.jsx("button",{onClick:p,className:"btn btn-delete",children:"Delete"})]})]}),s.jsxs("div",{className:"operation-group",children:[s.jsx("label",{children:"Traversals"}),s.jsx("div",{className:"btn-group",children:["inorder","preorder","postorder","levelorder"].map(g=>s.jsx("button",{onClick:()=>m(g),className:"btn btn-traversal",disabled:a||!i,children:g==="levelorder"?"Level Order":g.charAt(0).toUpperCase()+g.slice(1)},g))}),o.length>0&&!a&&s.jsx("button",{onClick:x,className:"btn btn-secondary",style:{marginTop:"0.5rem",width:"100%"},children:"Reset Colors"})]}),s.jsxs("div",{className:"traversal-legend",children:[s.jsxs("div",{className:"legend-item",children:[s.jsx("span",{className:"legend-dot legend-dot--default"}),s.jsx("span",{children:"Not visited"})]}),s.jsxs("div",{className:"legend-item",children:[s.jsx("span",{className:"legend-dot legend-dot--visiting"}),s.jsx("span",{children:"Visiting"})]}),s.jsxs("div",{className:"legend-item",children:[s.jsx("span",{className:"legend-dot legend-dot--visited"}),s.jsx("span",{children:"Visited"})]})]}),s.jsxs("div",{className:"info-panel",children:[s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Size:"}),s.jsx("span",{className:"info-value",children:t})]}),s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Height:"}),s.jsx("span",{className:"info-value",children:r})]}),s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Max Size:"}),s.jsx("span",{className:"info-value",children:gt})]})]}),t>=gt*.8&&t<gt&&s.jsxs("div",{className:"warning-box",children:[s.jsx(Cr,{size:18}),s.jsxs("div",{children:[s.jsx("strong",{children:"Tree is filling up!"})," You're at ",t,"/",gt," nodes."]})]}),s.jsx("div",{className:"operation-group",children:s.jsx("button",{onClick:N,className:"btn btn-clear",children:"Clear Tree"})}),l&&s.jsx("div",{className:`message message-${l.includes("Error")||l.includes("error")?"error":/success|complete|Inserted|Deleted|cleared/i.test(l)?"success":l.includes("full")?"warning":"info"}`,children:l})]})}function Py({tree:e,currentNode:n,visitedNodes:t}){const r=u=>{const c=n===u,f=t.includes(u);return{color:c?"#f59e0b":f?"#10b981":"#6366f1",glow:c?"drop-shadow(0 0 12px #f59e0b) drop-shadow(0 0 20px #f59e0b)":f?"drop-shadow(0 0 6px #10b981)":"none",radius:c?30:25,stroke:c?3:2,fontSize:c?16:14,fontWeight:c?"bold":"normal"}},l=(u,c,f,p,m)=>{if(!u)return[];const N=Math.pow(2,m-p)*50,x=r(u.data),k=[];return u.left&&(k.push(s.jsx("line",{x1:c,y1:f,x2:c-N,y2:f+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:"2"},`l-${u.data}-l`)),k.push(...l(u.left,c-N,f+100,p+1,m))),u.right&&(k.push(s.jsx("line",{x1:c,y1:f,x2:c+N,y2:f+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:"2"},`l-${u.data}-r`)),k.push(...l(u.right,c+N,f+100,p+1,m))),k.push(s.jsxs("g",{style:{filter:x.glow,transition:"all 0.3s ease"},children:[s.jsx("circle",{cx:c,cy:f,r:x.radius,fill:x.color,stroke:"white",strokeWidth:x.stroke,style:{transition:"all 0.3s ease"}}),s.jsx("text",{x:c,y:f,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:x.fontSize,fontWeight:x.fontWeight,children:u.data})]},`n-${u.data}-${c}`)),k};if(!e)return s.jsx("div",{className:"tree-empty",children:"Tree is empty. Insert some nodes!"});const i=Ei(e),a=(i+1)*100+50,o=Math.max(800,Math.pow(2,Math.max(i,1))*80);return s.jsx("svg",{width:o,height:a,className:"tree-svg",children:l(e,o/2,50,0,i)})}function Oy({traversalType:e,traversalResult:n,isAnimating:t,traversalComplete:r}){if(!e||n.length===0&&!t)return null;const l=Ey[e];return s.jsxs("div",{className:"traversal-output-panel",children:[s.jsxs("div",{style:{marginBottom:"1rem"},children:[s.jsxs("h3",{className:"traversal-title",children:[l==null?void 0:l.name,t&&s.jsx("span",{className:"traversal-badge traversal-badge--running",children:"Running..."}),r&&s.jsx("span",{className:"traversal-badge traversal-badge--complete",children:"Complete"})]}),s.jsxs("p",{className:"traversal-order",children:[s.jsx("strong",{children:"Order:"})," ",l==null?void 0:l.order]}),s.jsx("p",{className:"traversal-description",children:l==null?void 0:l.description})]}),s.jsxs("div",{className:"traversal-output-box",children:[s.jsx("div",{className:"traversal-output-label",children:"Output Sequence:"}),s.jsx("div",{className:"traversal-sequence-container",children:n.length===0&&t?s.jsx("span",{style:{color:"var(--text-muted)",fontStyle:"italic"},children:"Traversing..."}):n.map((i,a)=>s.jsx("span",{className:`traversal-node ${a===n.length-1&&!r?"traversal-node--current":"traversal-node--complete"}`,children:i},a))})]}),r&&n.length>0&&s.jsxs("div",{className:"traversal-array-section",children:[s.jsx("div",{className:"traversal-array-label",children:"Array Output:"}),s.jsxs("code",{className:"traversal-array-output",children:["[",n.join(", "),"]"]}),s.jsxs("p",{className:"traversal-use-case",children:["Use case: ",l==null?void 0:l.useCase.join(" • ")]}),s.jsxs("div",{className:"traversal-complexity",children:[s.jsx("strong",{children:"Time:"})," ",s.jsx("code",{className:"complexity-value",children:l==null?void 0:l.complexity.time})," (visits each node once)",s.jsx("br",{}),s.jsx("strong",{children:"Space:"})," ",s.jsx("code",{className:"complexity-value",children:l==null?void 0:l.complexity.space})," (recursion stack/queue)"]})]})]})}function Iy(){const[e,n]=v.useState(null),[t,r]=v.useState(0),[l,i]=v.useState(-1),[a,o]=v.useState(""),[u,c]=v.useState(""),[f,p]=v.useState(""),[m,N]=v.useState([]),[x,k]=v.useState(!1),[g,d]=v.useState(null),[h,y]=v.useState([]),[w,S]=v.useState(null),[z,_]=v.useState(!1);v.useEffect(()=>{O()},[]);const O=async()=>{try{const C=await(await fetch("/api/binarytree")).json();n(C.tree),r(C.size||0),i(C.height!==void 0?C.height:-1)}catch(V){console.error("Error loading tree:",V)}},M=V=>{p(V),setTimeout(()=>p(""),3e3)},T=async()=>{if(!a.trim()){M("Please enter a number!");return}const V=Number(a);if(isNaN(V)){M("Please enter a valid number!");return}if(t>=gt){M(`Tree is full! Maximum size is ${gt} nodes.`);return}try{const E=await(await fetch("/api/binarytree/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:V})})).json();if(E.error){M(E.error);return}n(E.tree),r(E.size||0),i(E.height!==void 0?E.height:-1),M(`Inserted ${V}`),o("")}catch{M("Error inserting node")}},$=async()=>{if(!u.trim()){M("Please enter a number!");return}const V=Number(u);if(isNaN(V)){M("Please enter a valid number!");return}try{const E=await(await fetch("/api/binarytree/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:V})})).json();if(E.error){M(E.error);return}n(E.tree),r(E.size||0),i(E.height!==void 0?E.height:-1),M(`Deleted ${V}`),c("")}catch{M("Error deleting node")}},ae=async()=>{try{await fetch("/api/binarytree/clear",{method:"POST"}),n(null),r(0),i(-1),Ne(),M("Tree cleared!")}catch{M("Error clearing tree")}},te=async V=>{if(!e){M("Tree is empty! Insert some nodes first.");return}k(!0),N([]),d(null),y([]),S(V),_(!1);let C=[];switch(V){case"inorder":C=Ti(e);break;case"preorder":C=bi(e);break;case"postorder":C=Ci(e);break;case"levelorder":C=Ly(e);break;default:C=[]}if(C.length===0){M("Tree is empty!"),k(!1);return}for(let E=0;E<C.length;E++)d(C[E]),await new Promise(b=>setTimeout(b,600)),y(b=>[...b,C[E]]),N(b=>[...b,C[E]]),await new Promise(b=>setTimeout(b,200));d(null),_(!0),k(!1),M(`${V.charAt(0).toUpperCase()+V.slice(1)} traversal complete!`)},Ne=()=>{N([]),d(null),y([]),S(null),_(!1)};return s.jsxs("div",{className:"container",children:[s.jsxs("div",{className:"intro-layout",children:[s.jsx(_y,{}),s.jsx(Vn,{context:"Binary Tree data structure and traversals"})]}),s.jsxs("div",{className:"visualizer-layout",children:[s.jsx(zy,{insertValue:a,deleteValue:u,size:t,height:l,message:f,tree:e,isAnimating:x,visitedNodes:h,onInsertValueChange:o,onDeleteValueChange:c,onInsert:T,onDelete:$,onTraversal:te,onClear:ae,onResetTraversal:Ne}),s.jsxs("div",{className:"visual-panel",children:[s.jsx("h2",{children:"Binary Tree Visualization"}),s.jsx("div",{className:"tree-container",children:s.jsx(Py,{tree:e,currentNode:g,visitedNodes:h})}),s.jsx(Oy,{traversalType:w,traversalResult:m,isAnimating:x,traversalComplete:z})]})]}),s.jsx($n,{dataStructure:"binarytree"})]})}const Ry={title:"What is a Stack?",description:"A Stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle.",codeExample:"push(A) → push(B) → push(C) → pop() returns C",analogy:"Like a stack of plates - you can only take the top plate off first!"},Fy={title:"Stack Properties",items:[{label:"Order",value:"LIFO (Last-In-First-Out)"},{label:"Access",value:"Top element only"},{label:"Insert",value:"Push to top - O(1)"},{label:"Remove",value:"Pop from top - O(1)"}]},Dy={title:"Common Use Cases",items:["Function call stack (recursion)","Undo/Redo operations","Browser back button","Expression evaluation","Syntax parsing"]},My={title:"Time Complexity",operations:[{name:"Push",time:"O(1)",description:"Add to top"},{name:"Pop",time:"O(1)",description:"Remove from top"},{name:"Peek",time:"O(1)",description:"View top element"},{name:"isEmpty",time:"O(1)",description:"Check if empty"},{name:"Search",time:"O(n)",description:"Find element"}]},Vy={push:{label:"Push Value",placeholder:"Value",buttonText:"Push"},pop:{buttonText:"Pop"},peek:{buttonText:"Peek"},clear:{buttonText:"Clear"}},$y={size:"Size",top:"Top",capacity:"Capacity"},Ay={emptyStack:"Stack is empty. Push some values!",pushSuccess:'Pushed "{value}" to stack',popSuccess:'Popped "{value}" from stack',popEmpty:"Cannot pop - stack is empty!",peekSuccess:'Top element: "{value}"',peekEmpty:"Cannot peek - stack is empty!",clearSuccess:"Stack cleared!",errorNoValue:"Please enter a value!",errorPush:"Error pushing to stack",errorPop:"Error popping from stack",errorClear:"Error clearing stack",stackFull:"Stack is full!"},Hy=[{type:"color",className:"top-color",label:"Top Element"},{type:"color",className:"element-color",label:"Stack Element"}],By={concept:Ry,properties:Fy,useCases:Dy,complexity:My,operations:Vy,infoLabels:$y,messages:Ay,legend:Hy},Uy={title:"What is a Queue?",description:"A Queue is a linear data structure that follows the First-In-First-Out (FIFO) principle.",codeExample:"enqueue(A) → enqueue(B) → enqueue(C) → dequeue() returns A",analogy:"Like a line at a store - first person in line gets served first!"},qy={title:"Queue Properties",items:[{label:"Order",value:"FIFO (First-In-First-Out)"},{label:"Access",value:"Front and Rear"},{label:"Insert",value:"Enqueue at rear - O(1)"},{label:"Remove",value:"Dequeue from front - O(1)"}]},Ky={title:"Queue vs Stack",queue:{label:"Queue:",color:"#22c55e",points:["FIFO order","Two access points (front/rear)"]},stack:{label:"Stack:",color:"#3b82f6",points:["LIFO order","One access point (top)"]},summary:"Use Queue when order of processing matters (like task scheduling)."},Wy={title:"Common Use Cases",items:["Task scheduling (CPU, print jobs)","Breadth-First Search (BFS)","Message queues","Request handling in servers","Buffering (streaming)"]},Qy={title:"Time Complexity",operations:[{name:"Enqueue",time:"O(1)",description:"Add to rear"},{name:"Dequeue",time:"O(1)",description:"Remove from front"},{name:"Front",time:"O(1)",description:"View front element"},{name:"isEmpty",time:"O(1)",description:"Check if empty"},{name:"Search",time:"O(n)",description:"Find element"}]},Gy={enqueue:{label:"Enqueue Value",placeholder:"Value",buttonText:"Enqueue"},dequeue:{buttonText:"Dequeue"},front:{buttonText:"Front"},clear:{buttonText:"Clear"}},Xy={size:"Size",front:"Front",rear:"Rear",capacity:"Capacity"},Yy={emptyQueue:"Queue is empty. Enqueue some values!",enqueueSuccess:'Enqueued "{value}"',dequeueSuccess:'Dequeued "{value}"',dequeueEmpty:"Cannot dequeue - queue is empty!",frontSuccess:'Front element: "{value}"',frontEmpty:"Cannot get front - queue is empty!",clearSuccess:"Queue cleared!",errorNoValue:"Please enter a value!",errorEnqueue:"Error enqueueing to queue",errorDequeue:"Error dequeueing from queue",errorClear:"Error clearing queue",queueFull:"Queue is full!"},Jy=[{type:"color",className:"front-color",label:"Front"},{type:"color",className:"rear-color",label:"Rear"},{type:"color",className:"element-color",label:"Queue Element"}],Zy={concept:Uy,properties:qy,comparison:Ky,useCases:Wy,complexity:Qy,operations:Gy,infoLabels:Xy,messages:Yy,legend:Jy},ev={title:"What is a Linked List?",description:"A Linked List is a linear data structure where elements are stored in nodes, each pointing to the next node.",codeExample:"HEAD → [A|→] → [B|→] → [C|→] → NULL",analogy:"Like a treasure hunt - each clue (node) points to the next location!"},nv={title:"Linked List Properties",items:[{label:"Structure",value:"Nodes with data + pointer"},{label:"Memory",value:"Non-contiguous allocation"},{label:"Size",value:"Dynamic (grows/shrinks)"},{label:"Access",value:"Sequential (no random access)"}]},tv={title:"Linked List vs Array",linkedlist:{label:"Linked List:",color:"#22c55e",points:["Dynamic size","O(1) insert/delete at known position","Extra memory for pointers"]},array:{label:"Array:",color:"#3b82f6",points:["Fixed size (usually)","O(1) random access by index","Contiguous memory"]},summary:"Use Linked List when you need frequent insertions/deletions and don't need random access."},rv={title:"Types of Linked Lists",items:[{name:"Singly Linked",description:"Each node points to next only"},{name:"Doubly Linked",description:"Nodes point to both next and previous"},{name:"Circular",description:"Last node points back to first"}]},sv={title:"Time Complexity",operations:[{name:"Access",time:"O(n)",description:"Traverse to find"},{name:"Search",time:"O(n)",description:"Linear search"},{name:"Insert (head)",time:"O(1)",description:"Add at beginning"},{name:"Insert (tail)",time:"O(n)",description:"Traverse then add"},{name:"Delete (head)",time:"O(1)",description:"Remove first"},{name:"Delete (by value)",time:"O(n)",description:"Find then remove"}]},lv={insertHead:{label:"Insert at Head",placeholder:"Value",buttonText:"Insert Head"},insertTail:{label:"Insert at Tail",placeholder:"Value",buttonText:"Insert Tail"},delete:{label:"Delete Value",placeholder:"Value",buttonText:"Delete"},search:{label:"Search Value",placeholder:"Value",buttonText:"Search"},clear:{buttonText:"Clear"}},iv={size:"Size",head:"Head",tail:"Tail"},av={emptyList:"Linked list is empty. Insert some values!",insertHeadSuccess:'Inserted "{value}" at head',insertTailSuccess:'Inserted "{value}" at tail',deleteSuccess:'Deleted "{value}"',deleteNotFound:'Value "{value}" not found',searchFound:'Found "{value}" at position {position}',searchNotFound:'Value "{value}" not found',clearSuccess:"Linked list cleared!",errorNoValue:"Please enter a value!",errorInsert:"Error inserting value",errorDelete:"Error deleting value",errorSearch:"Error searching value",errorClear:"Error clearing list"},ov=[{type:"color",className:"head-color",label:"Head Node"},{type:"color",className:"node-color",label:"Node"},{type:"icon",icon:"ArrowRight",color:"#8b5cf6",label:"Pointer"}],uv={concept:ev,properties:nv,comparison:tv,types:rv,complexity:sv,operations:lv,infoLabels:iv,messages:av,legend:ov},cv={title:"What is a Binary Tree?",description:"A Binary Tree is a hierarchical data structure where each node has at most two children (left and right).",codeExample:`       [5]
      /   \\
    [3]   [7]
   /  \\     \\
 [1]  [4]   [9]`,analogy:"Like a family tree - each person can have at most two children!"},dv={title:"Binary Tree Properties",items:[{label:"Structure",value:"Hierarchical (nodes + edges)"},{label:"Children",value:"At most 2 per node"},{label:"Root",value:"Topmost node (no parent)"},{label:"Leaf",value:"Node with no children"}]},hv={title:"Types of Binary Trees",items:[{name:"Full Binary Tree",description:"Every node has 0 or 2 children"},{name:"Complete Binary Tree",description:"All levels filled except possibly last"},{name:"Perfect Binary Tree",description:"All internal nodes have 2 children, leaves at same level"},{name:"Binary Search Tree",description:"Left < Parent < Right ordering"}]},pv={title:"Tree Traversals",items:[{name:"Inorder",order:"Left → Root → Right",use:"BST gives sorted order"},{name:"Preorder",order:"Root → Left → Right",use:"Copy tree, prefix expression"},{name:"Postorder",order:"Left → Right → Root",use:"Delete tree, postfix expression"},{name:"Level Order",order:"Level by level (BFS)",use:"Print by levels"}]},fv={title:"Time Complexity (BST)",operations:[{name:"Search",average:"O(log n)",worst:"O(n)",description:"Find element"},{name:"Insert",average:"O(log n)",worst:"O(n)",description:"Add element"},{name:"Delete",average:"O(log n)",worst:"O(n)",description:"Remove element"},{name:"Traversal",average:"O(n)",worst:"O(n)",description:"Visit all nodes"}],note:"Worst case O(n) occurs when tree becomes a linked list (unbalanced)"},mv={title:"Common Use Cases",items:["Binary Search Trees (fast lookup)","Expression trees (parsing)","Huffman coding (compression)","Heaps (priority queues)","File system structure"]},yv={insert:{label:"Insert Value",placeholder:"Value",buttonText:"Insert"},delete:{label:"Delete Value",placeholder:"Value",buttonText:"Delete"},search:{label:"Search Value",placeholder:"Value",buttonText:"Search"},traversals:{inorder:"Inorder",preorder:"Preorder",postorder:"Postorder",levelorder:"Level Order"},clear:{buttonText:"Clear"}},vv={size:"Nodes",height:"Height",root:"Root"},gv={emptyTree:"Binary tree is empty. Insert some values!",insertSuccess:"Inserted {value}",deleteSuccess:"Deleted {value}",deleteNotFound:"Value {value} not found",searchFound:"Found {value}",searchNotFound:"Value {value} not found",clearSuccess:"Tree cleared!",traversalResult:"{type} traversal: {result}",errorNoValue:"Please enter a value!",errorInsert:"Error inserting value",errorDelete:"Error deleting value",errorSearch:"Error searching value",errorClear:"Error clearing tree"},xv=[{type:"color",className:"root-color",label:"Root"},{type:"color",className:"node-color",label:"Node"},{type:"color",className:"leaf-color",label:"Leaf"},{type:"color",className:"highlight-color",label:"Current/Found"}],kv={concept:cv,properties:dv,types:hv,traversals:pv,complexity:fv,useCases:mv,operations:yv,infoLabels:vv,messages:gv,legend:xv},Nv={title:"What is a Hash Table?",description:"A Hash Table is a data structure that maps keys to values using a hash function for O(1) average access time.",codeExample:'hash("apple") → 3 → table[3] = "apple"',analogy:"Like a library catalog - the book title (key) tells you exactly which shelf (index) to find it!"},jv={title:"Hash Table Properties",items:[{label:"Access",value:"O(1) average time"},{label:"Hash Function",value:"Maps key → index"},{label:"Load Factor",value:"size / capacity"},{label:"Collision",value:"When two keys hash to same index"}]},wv={title:"Collision Resolution: Linear Probing",description:"When a collision occurs, probe sequentially until an empty slot is found.",steps:["Calculate hash index","If slot occupied, try next slot","Repeat until empty slot found","Insert at empty slot"],formula:"index = (hash(key) + i) % capacity, where i = 0, 1, 2, ..."},Sv={title:"Linear vs Quadratic Probing",linear:{label:"Linear Probing:",color:"#3b82f6",points:["Simple: check next slot","Primary clustering problem","Cache-friendly"]},quadratic:{label:"Quadratic Probing:",color:"#f59e0b",points:["Jump by squares: 1, 4, 9...","Reduces primary clustering","May not find empty slot"]},summary:"Linear probing is simpler but can cause clustering. Quadratic probing spreads entries better."},Tv={title:"Load Factor",description:"Load factor = size / capacity. Measures how full the table is.",threshold:.7,warningMessage:"High load ({loadFactor}) - consider rehashing!",safeMessage:"Load factor: {loadFactor}"},bv={title:"Time Complexity",operations:[{name:"Insert",average:"O(1)",worst:"O(n)",description:"Add key-value"},{name:"Search",average:"O(1)",worst:"O(n)",description:"Find by key"},{name:"Delete",average:"O(1)",worst:"O(n)",description:"Remove by key"},{name:"Rehash",average:"O(n)",worst:"O(n)",description:"Resize table"}],note:"Worst case O(n) when many collisions or poor hash function"},Cv={title:"Common Use Cases",items:["Dictionaries/Maps","Caching (memoization)","Database indexing","Symbol tables (compilers)","Counting frequencies"]},Ev={insert:{label:"Insert Key-Value",keyPlaceholder:"Key",valuePlaceholder:"Value",buttonText:"Insert"},delete:{label:"Delete Key",placeholder:"Key",buttonText:"Delete"},search:{label:"Search Key",placeholder:"Key",buttonText:"Search"},clear:{buttonText:"Clear"},rehash:{buttonText:"Rehash"}},Lv={items:"Items",capacity:"Capacity",load:"Load",collisions:"Collisions"},_v={emptyTable:"Hash table is empty. Insert some key-value pairs!",insertSuccess:'Inserted "{key}" at slot {index}',insertUpdated:'Updated "{key}" at slot {index}',insertCollision:"Collision at slot {original}! Probed to slot {index}",deleteSuccess:'Deleted "{key}"',searchFound:'Found: "{key}" = {value}',searchNotFound:'Key "{key}" not found',clearSuccess:"Hash table cleared!",rehashSuccess:"Rehashed! Capacity: {oldCapacity} → {newCapacity}",rehashEmpty:"Nothing to rehash - table is empty!",tableFull:"Table is full! Consider rehashing.",errorNoKey:"Please enter a key!",errorNoKeyValue:"Please enter both key and value!",errorInsert:"Error inserting. Is Flask running?",errorDelete:"Error deleting. Is Flask running?",errorSearch:"Error searching item",errorClear:"Error clearing hash table",errorRehash:"Error rehashing. Is Flask running?"},zv=[{type:"color",className:"key-color",label:"Key"},{type:"color",className:"index-color",label:"Index"},{type:"color",className:"value-color",label:"Value"},{type:"color",className:"probe-color",label:"Probed Slot"},{type:"color",className:"collision-color",label:"Collision"}],Pv={concept:Nv,properties:jv,collisionResolution:wv,comparison:Sv,loadFactor:Tv,complexity:bv,useCases:Cv,operations:Ev,infoLabels:Lv,messages:_v,legend:zv},Ov={title:"What is Quadratic Probing?",description:"Quadratic Probing is a collision resolution technique that uses a quadratic function to find the next available slot.",codeExample:"index = (hash(key) + i²) % capacity, where i = 0, 1, 2, 3...",analogy:"Like jumping farther each time - first 1 step, then 4, then 9, then 16!"},Iv={title:"Quadratic Probing Properties",items:[{label:"Probe Sequence",value:"+1, +4, +9, +16, +25..."},{label:"Formula",value:"(hash + i²) % capacity"},{label:"Clustering",value:"Reduces primary clustering"},{label:"Load Factor",value:"Must stay below 0.5 for guarantee"}]},Rv={title:"Quadratic vs Linear Probing",quadratic:{label:"Quadratic:",color:"#f59e0b",points:["Jumps by squares: 1, 4, 9...","Less primary clustering","May miss empty slots"]},linear:{label:"Linear:",color:"#3b82f6",points:["Steps by 1 each time","Primary clustering issue","Always finds empty slot"]},summary:"Quadratic probing reduces clustering but requires load factor < 0.5 and prime table size for guaranteed insertion."},Fv={title:"Clustering Problem",primary:{name:"Primary Clustering",description:"Long runs of occupied slots form clusters",cause:"Linear probing - same probe sequence for nearby hashes",solution:"Use quadratic or double hashing"},secondary:{name:"Secondary Clustering",description:"Keys with same hash follow same probe sequence",cause:"Probe sequence depends only on initial hash",solution:"Use double hashing"}},Dv={title:"Load Factor Warning",description:"Quadratic probing may fail to find empty slots if load factor > 0.5",threshold:.5,warningMessage:"Warning: Load factor ({loadFactor}) > 0.5 - insertions may fail!",safeMessage:"Load factor: {loadFactor}"},Mv={title:"Time Complexity",operations:[{name:"Insert",average:"O(1)",worst:"O(n)",description:"Add key-value"},{name:"Search",average:"O(1)",worst:"O(n)",description:"Find by key"},{name:"Delete",average:"O(1)",worst:"O(n)",description:"Remove by key"},{name:"Rehash",average:"O(n)",worst:"O(n)",description:"Resize table"}],note:"Requires prime table size and load factor < 0.5 for guaranteed O(1)"},Vv={insert:{label:"Insert Key-Value",keyPlaceholder:"Key",valuePlaceholder:"Value",buttonText:"Insert"},delete:{label:"Delete Key",placeholder:"Key",buttonText:"Delete"},search:{label:"Search Key",placeholder:"Key",buttonText:"Search"},clear:{buttonText:"Clear"},rehash:{buttonText:"Rehash"}},$v={items:"Items",capacity:"Capacity",load:"Load",collisions:"Collisions"},Av={emptyTable:"Hash table is empty. Insert some key-value pairs!",insertSuccess:'Inserted "{key}" at slot {index}',insertUpdated:'Updated "{key}" at slot {index}',insertCollision:"Collision! Quadratic probed to slot {index} (i={probeCount})",deleteSuccess:'Deleted "{key}"',searchFound:'Found: "{key}" = {value}',searchNotFound:'Key "{key}" not found',clearSuccess:"Hash table cleared!",rehashSuccess:"Rehashed! Capacity: {oldCapacity} → {newCapacity}",rehashEmpty:"Nothing to rehash - table is empty!",tableFull:"Cannot insert - no empty slot found after full probe cycle!",errorNoKey:"Please enter a key!",errorNoKeyValue:"Please enter both key and value!",errorInsert:"Error inserting. Is Flask running?",errorDelete:"Error deleting. Is Flask running?",errorSearch:"Error searching item",errorClear:"Error clearing hash table",errorRehash:"Error rehashing. Is Flask running?"},Hv=[{type:"color",className:"key-color",label:"Key"},{type:"color",className:"index-color",label:"Index"},{type:"color",className:"value-color",label:"Value"},{type:"color",className:"probe-color",label:"Quadratic Probe"}],Bv={concept:Ov,properties:Iv,comparison:Rv,clustering:Fv,loadFactor:Dv,complexity:Mv,operations:Vv,infoLabels:$v,messages:Av,legend:Hv},Uv={title:"What is a Binary Search Tree?",description:"A Binary Search Tree (BST) is a binary tree where each node follows the ordering property: all left descendants < node < all right descendants.",codeExample:`       [50]
      /    \\
   [30]    [70]
   /  \\    /  \\
 [20][40][60][80]

Left < Parent < Right`,analogy:"Like a dictionary - words are sorted alphabetically, so you can quickly find any word by comparing!"},qv={title:"BST Properties",items:[{label:"Ordering",value:"Left < Parent < Right"},{label:"Search",value:"O(log n) average"},{label:"Inorder",value:"Gives sorted sequence"},{label:"No Duplicates",value:"Typically unique keys"}]},Kv={insert:{label:"Insert Value",placeholder:"Value",buttonText:"Insert"},delete:{label:"Delete Value",placeholder:"Value",buttonText:"Delete"},search:{label:"Search Value",placeholder:"Value",buttonText:"Search"},traversals:{inorder:"Inorder (Sorted)",preorder:"Preorder",postorder:"Postorder",levelorder:"Level Order"},clear:{buttonText:"Clear"}},Wv={title:"BST Delete Cases",items:[{name:"Leaf Node",description:"Simply remove (no children)"},{name:"One Child",description:"Replace with child"},{name:"Two Children",description:"Replace with inorder successor (smallest in right subtree)"}]},Qv={title:"Tree Traversals",items:[{name:"Inorder",order:"Left -> Root -> Right",use:"Returns SORTED order in BST"},{name:"Preorder",order:"Root -> Left -> Right",use:"Copy/serialize tree"},{name:"Postorder",order:"Left -> Right -> Root",use:"Delete tree safely"},{name:"Level Order",order:"Level by level (BFS)",use:"Print by levels"}]},Gv={title:"Time Complexity",operations:[{name:"Search",average:"O(log n)",worst:"O(n)",description:"Binary search principle"},{name:"Insert",average:"O(log n)",worst:"O(n)",description:"Find position + insert"},{name:"Delete",average:"O(log n)",worst:"O(n)",description:"Find + restructure"},{name:"Min/Max",average:"O(log n)",worst:"O(n)",description:"Leftmost/rightmost"}],note:"Worst case O(n) when tree is unbalanced (degenerates to linked list). Use AVL/Red-Black trees for guaranteed O(log n)."},Xv={title:"Common Use Cases",items:["Database indexing (B-trees)","Symbol tables in compilers","Priority queues","Auto-complete suggestions","Range queries (find all values between X and Y)"]},Yv={title:"BST vs Other Structures",items:[{vs:"Array",advantage:"O(log n) insert/delete vs O(n)"},{vs:"Hash Table",advantage:"Ordered data, range queries"},{vs:"Linked List",advantage:"O(log n) search vs O(n)"}]},Jv={size:"Nodes",height:"Height",root:"Root"},Zv={emptyTree:"BST is empty. Insert some values!",insertSuccess:"Inserted {value}",deleteSuccess:"Deleted {value}",deleteNotFound:"Value {value} not found",searchFound:"Found {value}",searchNotFound:"Value {value} not found",clearSuccess:"BST cleared!",traversalResult:"{type}: {result}",errorNoValue:"Please enter a value!",errorInsert:"Error inserting value",errorDelete:"Error deleting value",errorSearch:"Error searching value",errorClear:"Error clearing BST"},eg=[{type:"color",className:"root-color",label:"Root"},{type:"color",className:"node-color",label:"Node"},{type:"color",className:"leaf-color",label:"Leaf"},{type:"color",className:"highlight-color",label:"Current/Found"}],ng={concept:Uv,properties:qv,operations:Kv,deleteCases:Wv,traversals:Qv,complexity:Gv,useCases:Xv,comparison:Yv,infoLabels:Jv,messages:Zv,legend:eg},tg={stack:By,queue:Zy,linkedlist:uv,binarytree:kv,hashtable:Pv,hashtableChaining:A,hashtableQuadratic:Bv,bst:ng};function rg({dataStructure:e}){const n=tg[e];return n?s.jsxs("div",{className:"concepts-panel",children:[n.concept&&s.jsxs("div",{className:"concept-box",children:[s.jsxs("div",{className:"concept-header",children:[s.jsx(mn,{className:"icon-sm"}),s.jsx("span",{children:n.concept.title})]}),s.jsxs("div",{className:"concept-content",children:[s.jsx("p",{children:n.concept.description}),n.concept.codeExample&&s.jsx("pre",{className:"concept-code-example",children:s.jsx("code",{children:n.concept.codeExample})}),n.concept.analogy&&s.jsxs("div",{className:"concept-analogy",children:[s.jsx(rn,{}),s.jsx("span",{children:n.concept.analogy})]})]})]}),n.properties&&s.jsxs("div",{className:"concept-box",children:[s.jsxs("div",{className:"concept-header",children:[s.jsx(Sn,{className:"icon-sm"}),s.jsx("span",{children:n.properties.title})]}),s.jsx("div",{className:"concept-content",children:s.jsx("div",{className:"properties-grid",children:n.properties.items.map((t,r)=>s.jsxs("div",{className:"property-item",children:[s.jsx("span",{className:"property-label",children:t.label}),s.jsx("span",{className:"property-value",children:t.value})]},r))})})]}),n.complexity&&s.jsxs("div",{className:"concept-box",children:[s.jsxs("div",{className:"concept-header",children:[s.jsx(pm,{className:"icon-sm"}),s.jsx("span",{children:n.complexity.title})]}),s.jsxs("div",{className:"concept-content",children:[s.jsx("div",{className:"complexity-table",children:n.complexity.operations.map((t,r)=>s.jsxs("div",{className:"complexity-row",children:[s.jsx("span",{className:"complexity-name",children:t.name}),t.time&&s.jsx("code",{className:"complexity-time",children:t.time}),t.average&&s.jsxs(s.Fragment,{children:[s.jsx("code",{className:"complexity-avg",children:t.average}),t.worst&&s.jsx("code",{className:"complexity-worst",children:t.worst})]}),t.description&&s.jsx("span",{className:"complexity-desc",children:t.description})]},r))}),n.complexity.note&&s.jsx("p",{className:"complexity-note",children:n.complexity.note})]})]}),n.useCases&&s.jsxs("div",{className:"concept-box",children:[s.jsxs("div",{className:"concept-header",children:[s.jsx(Nd,{className:"icon-sm"}),s.jsx("span",{children:n.useCases.title})]}),s.jsx("div",{className:"concept-content",children:s.jsx("ul",{className:"use-cases-list",children:n.useCases.items.map((t,r)=>s.jsxs("li",{children:[s.jsx(cm,{className:"icon-xs"}),s.jsx("span",{children:t})]},r))})})]}),n.traversals&&s.jsxs("div",{className:"concept-box",children:[s.jsxs("div",{className:"concept-header",children:[s.jsx(Sn,{className:"icon-sm"}),s.jsx("span",{children:n.traversals.title})]}),s.jsx("div",{className:"concept-content",children:s.jsx("div",{className:"traversals-list",children:n.traversals.items.map((t,r)=>s.jsxs("div",{className:"traversal-item",children:[s.jsx("span",{className:"traversal-name",children:t.name}),s.jsx("span",{className:"traversal-order",children:t.order}),s.jsx("span",{className:"traversal-use",children:t.use})]},r))})})]}),n.deleteCases&&s.jsxs("div",{className:"concept-box",children:[s.jsxs("div",{className:"concept-header",children:[s.jsx(Sn,{className:"icon-sm"}),s.jsx("span",{children:n.deleteCases.title})]}),s.jsx("div",{className:"concept-content",children:s.jsx("div",{className:"delete-cases-grid",children:n.deleteCases.items.map((t,r)=>s.jsxs("div",{className:"delete-case-item",children:[s.jsx("span",{className:"case-number",children:r+1}),s.jsxs("div",{children:[s.jsx("strong",{children:t.name}),s.jsx("p",{children:t.description})]})]},r))})})]}),n.comparison&&s.jsxs("div",{className:"concept-box",children:[s.jsxs("div",{className:"concept-header",children:[s.jsx(Sn,{className:"icon-sm"}),s.jsx("span",{children:n.comparison.title})]}),s.jsx("div",{className:"concept-content",children:s.jsx("div",{className:"comparison-list",children:n.comparison.items.map((t,r)=>s.jsxs("div",{className:"comparison-item",children:[s.jsxs("span",{className:"comparison-vs",children:["vs ",t.vs]}),s.jsx("span",{className:"comparison-advantage",children:t.advantage})]},r))})})]})]}):s.jsx("div",{className:"concepts-panel",children:s.jsx("p",{children:"Concepts not available for this data structure."})})}const xt=20,sg={inorder:{name:"Inorder Traversal",order:"Left -> Root -> Right",description:"Returns elements in SORTED order for BST. This is the key property of BST!",useCase:["Get sorted elements","Validate BST","Range queries"],complexity:{time:"O(n)",space:"O(h)"}},preorder:{name:"Preorder Traversal",order:"Root -> Left -> Right",description:"Process root first. Useful for copying/serializing the BST structure.",useCase:["Copy tree structure","Serialize BST","Prefix expressions"],complexity:{time:"O(n)",space:"O(h)"}},postorder:{name:"Postorder Traversal",order:"Left -> Right -> Root",description:"Process children before root. Essential for safely deleting the tree.",useCase:["Delete tree safely","Calculate subtree sizes","Postfix expressions"],complexity:{time:"O(n)",space:"O(h)"}},levelorder:{name:"Level Order Traversal",order:"Level by Level (BFS)",description:"Visit nodes level by level using a queue. Shows tree structure clearly.",useCase:["Level-wise printing","Find width","Serialize for reconstruction"],complexity:{time:"O(n)",space:"O(w)"}}},Li=(e,n=0)=>e?Math.max(Li(e.left,n+1),Li(e.right,n+1)):n-1,lg=(e,n)=>{const t=[];let r=e;for(;r&&(t.push(r.value),r.value!==n);)n<r.value?r=r.left:r=r.right;return t};function ig({insertValue:e,deleteValue:n,searchValue:t,size:r,height:l,message:i,tree:a,isAnimating:o,visitedNodes:u,searchPath:c,searchResult:f,onInsertValueChange:p,onDeleteValueChange:m,onSearchValueChange:N,onInsert:x,onDelete:k,onSearch:g,onTraversal:d,onClear:h,onResetTraversal:y}){const w=(S,z)=>{const _=S.target.value;(_===""||_==="-"||/^-?\d*\.?\d*$/.test(_))&&z(_)};return s.jsxs("div",{className:"control-panel",children:[s.jsx("h2",{children:"Binary Search Tree"}),s.jsxs("div",{className:"operation-group",children:[s.jsx("label",{htmlFor:"insertValue",children:"Insert Value"}),s.jsxs("div",{className:"input-group",children:[s.jsx("input",{type:"number",id:"insertValue",value:e,onChange:S=>w(S,p),onKeyDown:S=>S.key==="Enter"&&x(),placeholder:"Enter a number",disabled:o}),s.jsx("button",{onClick:x,className:"btn btn-insert",disabled:o,children:"Insert"})]})]}),s.jsxs("div",{className:"operation-group",children:[s.jsx("label",{htmlFor:"searchValue",children:"Search Value"}),s.jsxs("div",{className:"input-group",children:[s.jsx("input",{type:"number",id:"searchValue",value:t,onChange:S=>w(S,N),onKeyDown:S=>S.key==="Enter"&&g(),placeholder:"Enter a number",disabled:o}),s.jsxs("button",{onClick:g,className:"btn btn-search",disabled:o||!a,children:[s.jsx(_m,{size:16})," Search"]})]}),c.length>0&&s.jsxs("div",{className:"search-path-display",children:[s.jsx("span",{className:"search-path-label",children:"Path:"}),s.jsx("div",{className:"search-path-nodes",children:c.map((S,z)=>s.jsxs(Lr.Fragment,{children:[s.jsx("span",{className:`search-path-node ${z===c.length-1?f?"found":"not-found":""}`,children:S}),z<c.length-1&&s.jsx(fe,{size:14,className:"search-path-arrow"})]},z))})]})]}),s.jsxs("div",{className:"operation-group",children:[s.jsx("label",{htmlFor:"deleteValue",children:"Delete Value"}),s.jsxs("div",{className:"input-group",children:[s.jsx("input",{type:"number",id:"deleteValue",value:n,onChange:S=>w(S,m),onKeyDown:S=>S.key==="Enter"&&k(),placeholder:"Enter a number",disabled:o}),s.jsx("button",{onClick:k,className:"btn btn-delete",disabled:o,children:"Delete"})]})]}),s.jsxs("div",{className:"operation-group",children:[s.jsx("label",{children:"Traversals"}),s.jsx("div",{className:"btn-group",children:["inorder","preorder","postorder","levelorder"].map(S=>s.jsxs("button",{onClick:()=>d(S),className:`btn btn-traversal ${S==="inorder"?"btn-traversal-primary":""}`,disabled:o||!a,title:S==="inorder"?"Returns sorted order!":"",children:[S==="levelorder"?"Level Order":S.charAt(0).toUpperCase()+S.slice(1),S==="inorder"&&s.jsx("span",{className:"sorted-badge",children:"Sorted!"})]},S))}),u.length>0&&!o&&s.jsx("button",{onClick:y,className:"btn btn-secondary",style:{marginTop:"0.5rem",width:"100%"},children:"Reset Colors"})]}),s.jsxs("div",{className:"traversal-legend",children:[s.jsxs("div",{className:"legend-item",children:[s.jsx("span",{className:"legend-dot legend-dot--default"}),s.jsx("span",{children:"Not visited"})]}),s.jsxs("div",{className:"legend-item",children:[s.jsx("span",{className:"legend-dot legend-dot--visiting"}),s.jsx("span",{children:"Current"})]}),s.jsxs("div",{className:"legend-item",children:[s.jsx("span",{className:"legend-dot legend-dot--visited"}),s.jsx("span",{children:"Visited"})]}),s.jsxs("div",{className:"legend-item",children:[s.jsx("span",{className:"legend-dot legend-dot--search"}),s.jsx("span",{children:"Search path"})]})]}),s.jsxs("div",{className:"info-panel",children:[s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Nodes:"}),s.jsx("span",{className:"info-value",children:r})]}),s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Height:"}),s.jsx("span",{className:"info-value",children:l})]}),s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Max:"}),s.jsx("span",{className:"info-value",children:xt})]})]}),r>=xt*.8&&r<xt&&s.jsxs("div",{className:"warning-box",children:[s.jsx(Cr,{size:18}),s.jsxs("div",{children:[s.jsx("strong",{children:"Tree filling up!"})," ",r,"/",xt," nodes."]})]}),s.jsx("div",{className:"operation-group",children:s.jsx("button",{onClick:h,className:"btn btn-clear",disabled:o,children:"Clear Tree"})}),i&&s.jsx("div",{className:`message message-${i.includes("Error")||i.includes("error")||i.includes("not found")?"error":/success|complete|Inserted|Deleted|cleared|Found/i.test(i)?"success":i.includes("full")?"warning":"info"}`,children:i})]})}function ag({tree:e,currentNode:n,visitedNodes:t,searchPath:r,searchResult:l}){const i=f=>{const p=n===f,m=t.includes(f),N=r.includes(f),x=r.length>0&&r[r.length-1]===f;let k="#6366f1",g="none";return p?(k="#f59e0b",g="drop-shadow(0 0 12px #f59e0b) drop-shadow(0 0 20px #f59e0b)"):x?(k=l?"#10b981":"#ef4444",g=l?"drop-shadow(0 0 12px #10b981)":"drop-shadow(0 0 12px #ef4444)"):N?(k="#3b82f6",g="drop-shadow(0 0 8px #3b82f6)"):m&&(k="#10b981",g="drop-shadow(0 0 6px #10b981)"),{color:k,glow:g,radius:p||x?30:25,stroke:p||x?3:2,fontSize:p||x?16:14,fontWeight:p||x?"bold":"normal"}},a=(f,p,m,N,x)=>{if(!f)return[];const k=Math.pow(2,x-N)*50,g=i(f.value),d=[];if(f.left){const h=r.includes(f.value)&&r.includes(f.left.value);d.push(s.jsx("line",{x1:p,y1:m,x2:p-k,y2:m+100,stroke:h?"#3b82f6":"rgba(255,255,255,0.3)",strokeWidth:h?3:2},`l-${f.value}-l`)),d.push(...a(f.left,p-k,m+100,N+1,x))}if(f.right){const h=r.includes(f.value)&&r.includes(f.right.value);d.push(s.jsx("line",{x1:p,y1:m,x2:p+k,y2:m+100,stroke:h?"#3b82f6":"rgba(255,255,255,0.3)",strokeWidth:h?3:2},`l-${f.value}-r`)),d.push(...a(f.right,p+k,m+100,N+1,x))}return d.push(s.jsxs("g",{style:{filter:g.glow,transition:"all 0.3s ease"},children:[s.jsx("circle",{cx:p,cy:m,r:g.radius,fill:g.color,stroke:"white",strokeWidth:g.stroke,style:{transition:"all 0.3s ease"}}),s.jsx("text",{x:p,y:m,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:g.fontSize,fontWeight:g.fontWeight,children:f.value})]},`n-${f.value}-${p}`)),d};if(!e)return s.jsxs("div",{className:"tree-empty",children:[s.jsx("p",{children:"BST is empty. Insert some values!"}),s.jsx("p",{className:"tree-empty-hint",children:"Try: 50, 30, 70, 20, 40, 60, 80"})]});const o=Li(e),u=(o+1)*100+50,c=Math.max(800,Math.pow(2,Math.max(o,1))*80);return s.jsx("svg",{width:c,height:u,className:"tree-svg",children:a(e,c/2,50,0,o)})}function og({traversalType:e,traversalResult:n,isAnimating:t,traversalComplete:r}){if(!e||n.length===0&&!t)return null;const l=sg[e];return s.jsxs("div",{className:"traversal-output-panel",children:[s.jsxs("div",{style:{marginBottom:"1rem"},children:[s.jsxs("h3",{className:"traversal-title",children:[l==null?void 0:l.name,e==="inorder"&&s.jsx("span",{className:"sorted-indicator",children:"Returns Sorted Order!"}),t&&s.jsx("span",{className:"traversal-badge traversal-badge--running",children:"Running..."}),r&&s.jsx("span",{className:"traversal-badge traversal-badge--complete",children:"Complete"})]}),s.jsxs("p",{className:"traversal-order",children:[s.jsx("strong",{children:"Order:"})," ",l==null?void 0:l.order]}),s.jsx("p",{className:"traversal-description",children:l==null?void 0:l.description})]}),s.jsxs("div",{className:"traversal-output-box",children:[s.jsx("div",{className:"traversal-output-label",children:"Output Sequence:"}),s.jsx("div",{className:"traversal-sequence-container",children:n.length===0&&t?s.jsx("span",{style:{color:"var(--text-muted)",fontStyle:"italic"},children:"Traversing..."}):n.map((i,a)=>s.jsx("span",{className:`traversal-node ${a===n.length-1&&!r?"traversal-node--current":"traversal-node--complete"}`,children:i},a))})]}),r&&n.length>0&&s.jsxs("div",{className:"traversal-array-section",children:[s.jsx("div",{className:"traversal-array-label",children:"Array Output:"}),s.jsxs("code",{className:"traversal-array-output",children:["[",n.join(", "),"]"]}),e==="inorder"&&s.jsx("p",{className:"traversal-sorted-note",children:"Notice: The output is sorted! This is the BST property."}),s.jsxs("p",{className:"traversal-use-case",children:["Use case: ",l==null?void 0:l.useCase.join(" | ")]}),s.jsxs("div",{className:"traversal-complexity",children:[s.jsx("strong",{children:"Time:"})," ",s.jsx("code",{className:"complexity-value",children:l==null?void 0:l.complexity.time}),s.jsx("br",{}),s.jsx("strong",{children:"Space:"})," ",s.jsx("code",{className:"complexity-value",children:l==null?void 0:l.complexity.space})]})]})]})}function ug(){const[e,n]=v.useState(null),[t,r]=v.useState(0),[l,i]=v.useState(-1),[a,o]=v.useState(""),[u,c]=v.useState(""),[f,p]=v.useState(""),[m,N]=v.useState(""),[x,k]=v.useState([]),[g,d]=v.useState(null),[h,y]=v.useState([]),[w,S]=v.useState(!1),[z,_]=v.useState(null),[O,M]=v.useState([]),[T,$]=v.useState(null),[ae,te]=v.useState(!1);v.useEffect(()=>{Ne()},[]);const Ne=async()=>{try{const ee=await(await fetch("/api/bst")).json();n(ee.tree),r(ee.size||0),i(ee.height!==void 0?ee.height:-1)}catch(F){console.error("Error loading BST:",F)}},V=F=>{N(F),setTimeout(()=>N(""),3e3)},C=()=>{k([]),d(null)},E=async()=>{if(!a.trim()){V("Please enter a number!");return}const F=Number(a);if(isNaN(F)){V("Please enter a valid number!");return}if(t>=xt){V(`Tree is full! Maximum size is ${xt} nodes.`);return}C(),D();try{const G=await(await fetch("/api/bst/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:F})})).json();if(G.error){V(G.error);return}n(G.tree),r(G.size||0),i(G.height!==void 0?G.height:-1),V(`Inserted ${F}`),o("")}catch{V("Error inserting node")}},b=async()=>{if(!u.trim()){V("Please enter a number!");return}const F=Number(u);if(isNaN(F)){V("Please enter a valid number!");return}C(),D();try{const G=await(await fetch("/api/bst/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:F})})).json();if(G.error){V(G.error);return}n(G.tree),r(G.size||0),i(G.height!==void 0?G.height:-1),V(`Deleted ${F}`),c("")}catch{V("Error deleting node")}},j=async()=>{if(!f.trim()){V("Please enter a number!");return}const F=Number(f);if(isNaN(F)){V("Please enter a valid number!");return}if(!e){V("Tree is empty!");return}D(),S(!0);const ee=lg(e,F);for(let G=0;G<ee.length;G++)k(ee.slice(0,G+1)),await new Promise(ce=>setTimeout(ce,500));try{const ce=await(await fetch(`/api/bst/search?value=${F}`)).json();d(ce.found),ce.found?V(`Found ${F}!`):V(`${F} not found in BST`)}catch{V("Error searching")}S(!1),p("")},P=async()=>{try{await fetch("/api/bst/clear",{method:"POST"}),n(null),r(0),i(-1),D(),C(),V("BST cleared!")}catch{V("Error clearing tree")}},R=async F=>{if(!e){V("Tree is empty! Insert some nodes first.");return}C(),S(!0),y([]),_(null),M([]),$(F),te(!1);try{const ce=(await(await fetch(`/api/bst/${F}`)).json()).traversal||[];if(ce.length===0){V("Tree is empty!"),S(!1);return}for(let $t=0;$t<ce.length;$t++)_(ce[$t]),await new Promise(An=>setTimeout(An,600)),M(An=>[...An,ce[$t]]),y(An=>[...An,ce[$t]]),await new Promise(An=>setTimeout(An,200));_(null),te(!0),S(!1);const st=F.charAt(0).toUpperCase()+F.slice(1);V(`${st} traversal complete!${F==="inorder"?" (Sorted!)":""}`)}catch(ee){console.error("Traversal error:",ee),V("Error performing traversal"),S(!1)}},D=()=>{y([]),_(null),M([]),$(null),te(!1)};return s.jsxs("div",{className:"container",children:[s.jsxs("div",{className:"intro-layout",children:[s.jsx("div",{className:"intro-left",children:s.jsx(rg,{dataStructure:"bst"})}),s.jsx(Vn,{context:"Binary Search Tree (BST) data structure, search, insert, delete operations, and traversals"})]}),s.jsxs("div",{className:"visualizer-layout",children:[s.jsx(ig,{insertValue:a,deleteValue:u,searchValue:f,size:t,height:l,message:m,tree:e,isAnimating:w,visitedNodes:O,searchPath:x,searchResult:g,onInsertValueChange:o,onDeleteValueChange:c,onSearchValueChange:p,onInsert:E,onDelete:b,onSearch:j,onTraversal:R,onClear:P,onResetTraversal:()=>{D(),C()}}),s.jsxs("div",{className:"visual-panel",children:[s.jsx("h2",{children:"BST Visualization"}),s.jsxs("p",{className:"bst-property-reminder",children:["Remember: ",s.jsxs("code",{children:["Left ","<"," Parent ","<"," Right"]})]}),s.jsx("div",{className:"tree-container",children:s.jsx(ag,{tree:e,currentNode:z,visitedNodes:O,searchPath:x,searchResult:g})}),s.jsx(og,{traversalType:T,traversalResult:h,isAnimating:w,traversalComplete:ae})]})]}),s.jsx($n,{dataStructure:"bst"})]})}function cg(){return s.jsxs("div",{className:"homepage-body",children:[s.jsx(Im,{}),s.jsxs("main",{className:"main-content",children:[s.jsxs(Uf,{children:[s.jsx(ze,{path:"/",element:s.jsx(Fm,{})}),s.jsx(ze,{path:"/algorithms",element:s.jsx(Dm,{})}),s.jsx(ze,{path:"/contact",element:s.jsx(Mm,{})}),s.jsx(ze,{path:"/contributions",element:s.jsx(Vm,{})}),s.jsx(ze,{path:"/stack",element:s.jsx(fy,{})}),s.jsx(ze,{path:"/queue",element:s.jsx(my,{})}),s.jsx(ze,{path:"/linkedlist",element:s.jsx(yy,{})}),s.jsx(ze,{path:"/hashtable_linear",element:s.jsx(vy,{})}),s.jsx(ze,{path:"/hashtable_quadratic",element:s.jsx(Cy,{})}),s.jsx(ze,{path:"/hashtable_chaining",element:s.jsx(by,{})}),s.jsx(ze,{path:"/binarytree",element:s.jsx(Iy,{})}),s.jsx(ze,{path:"/bst",element:s.jsx(ug,{})})]}),s.jsx(Rm,{})]})]})}El.createRoot(document.getElementById("root")).render(s.jsx(Lr.StrictMode,{children:s.jsx(Yf,{children:s.jsx(cg,{})})}));
