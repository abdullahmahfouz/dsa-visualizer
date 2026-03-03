function Zh(e,t){for(var r=0;r<t.length;r++){const s=t[r];if(typeof s!="string"&&!Array.isArray(s)){for(const i in s)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(s,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>s[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function r(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(i){if(i.ep)return;i.ep=!0;const a=r(i);fetch(i.href,a)}})();function ep(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var id={exports:{}},Ni={},ad={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var as=Symbol.for("react.element"),np=Symbol.for("react.portal"),tp=Symbol.for("react.fragment"),rp=Symbol.for("react.strict_mode"),sp=Symbol.for("react.profiler"),ip=Symbol.for("react.provider"),ap=Symbol.for("react.context"),lp=Symbol.for("react.forward_ref"),op=Symbol.for("react.suspense"),cp=Symbol.for("react.memo"),dp=Symbol.for("react.lazy"),Eo=Symbol.iterator;function up(e){return e===null||typeof e!="object"?null:(e=Eo&&e[Eo]||e["@@iterator"],typeof e=="function"?e:null)}var ld={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},od=Object.assign,cd={};function cr(e,t,r){this.props=e,this.context=t,this.refs=cd,this.updater=r||ld}cr.prototype.isReactComponent={};cr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};cr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function dd(){}dd.prototype=cr.prototype;function Tl(e,t,r){this.props=e,this.context=t,this.refs=cd,this.updater=r||ld}var _l=Tl.prototype=new dd;_l.constructor=Tl;od(_l,cr.prototype);_l.isPureReactComponent=!0;var Oo=Array.isArray,ud=Object.prototype.hasOwnProperty,Ll={current:null},hd={key:!0,ref:!0,__self:!0,__source:!0};function pd(e,t,r){var s,i={},a=null,l=null;if(t!=null)for(s in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(a=""+t.key),t)ud.call(t,s)&&!hd.hasOwnProperty(s)&&(i[s]=t[s]);var o=arguments.length-2;if(o===1)i.children=r;else if(1<o){for(var c=Array(o),u=0;u<o;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(s in o=e.defaultProps,o)i[s]===void 0&&(i[s]=o[s]);return{$$typeof:as,type:e,key:a,ref:l,props:i,_owner:Ll.current}}function hp(e,t){return{$$typeof:as,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function El(e){return typeof e=="object"&&e!==null&&e.$$typeof===as}function pp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Ro=/\/+/g;function Vi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?pp(""+e.key):t.toString(36)}function Ps(e,t,r,s,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case as:case np:l=!0}}if(l)return l=e,i=i(l),e=s===""?"."+Vi(l,0):s,Oo(i)?(r="",e!=null&&(r=e.replace(Ro,"$&/")+"/"),Ps(i,t,r,"",function(u){return u})):i!=null&&(El(i)&&(i=hp(i,r+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Ro,"$&/")+"/")+e)),t.push(i)),1;if(l=0,s=s===""?".":s+":",Oo(e))for(var o=0;o<e.length;o++){a=e[o];var c=s+Vi(a,o);l+=Ps(a,t,r,c,i)}else if(c=up(e),typeof c=="function")for(e=c.call(e),o=0;!(a=e.next()).done;)a=a.value,c=s+Vi(a,o++),l+=Ps(a,t,r,c,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function fs(e,t,r){if(e==null)return e;var s=[],i=0;return Ps(e,s,"","",function(a){return t.call(r,a,i++)}),s}function fp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ue={current:null},Is={transition:null},mp={ReactCurrentDispatcher:Ue,ReactCurrentBatchConfig:Is,ReactCurrentOwner:Ll};function fd(){throw Error("act(...) is not supported in production builds of React.")}te.Children={map:fs,forEach:function(e,t,r){fs(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return fs(e,function(){t++}),t},toArray:function(e){return fs(e,function(t){return t})||[]},only:function(e){if(!El(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};te.Component=cr;te.Fragment=tp;te.Profiler=sp;te.PureComponent=Tl;te.StrictMode=rp;te.Suspense=op;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mp;te.act=fd;te.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=od({},e.props),i=e.key,a=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,l=Ll.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(c in t)ud.call(t,c)&&!hd.hasOwnProperty(c)&&(s[c]=t[c]===void 0&&o!==void 0?o[c]:t[c])}var c=arguments.length-2;if(c===1)s.children=r;else if(1<c){o=Array(c);for(var u=0;u<c;u++)o[u]=arguments[u+2];s.children=o}return{$$typeof:as,type:e.type,key:i,ref:a,props:s,_owner:l}};te.createContext=function(e){return e={$$typeof:ap,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ip,_context:e},e.Consumer=e};te.createElement=pd;te.createFactory=function(e){var t=pd.bind(null,e);return t.type=e,t};te.createRef=function(){return{current:null}};te.forwardRef=function(e){return{$$typeof:lp,render:e}};te.isValidElement=El;te.lazy=function(e){return{$$typeof:dp,_payload:{_status:-1,_result:e},_init:fp}};te.memo=function(e,t){return{$$typeof:cp,type:e,compare:t===void 0?null:t}};te.startTransition=function(e){var t=Is.transition;Is.transition={};try{e()}finally{Is.transition=t}};te.unstable_act=fd;te.useCallback=function(e,t){return Ue.current.useCallback(e,t)};te.useContext=function(e){return Ue.current.useContext(e)};te.useDebugValue=function(){};te.useDeferredValue=function(e){return Ue.current.useDeferredValue(e)};te.useEffect=function(e,t){return Ue.current.useEffect(e,t)};te.useId=function(){return Ue.current.useId()};te.useImperativeHandle=function(e,t,r){return Ue.current.useImperativeHandle(e,t,r)};te.useInsertionEffect=function(e,t){return Ue.current.useInsertionEffect(e,t)};te.useLayoutEffect=function(e,t){return Ue.current.useLayoutEffect(e,t)};te.useMemo=function(e,t){return Ue.current.useMemo(e,t)};te.useReducer=function(e,t,r){return Ue.current.useReducer(e,t,r)};te.useRef=function(e){return Ue.current.useRef(e)};te.useState=function(e){return Ue.current.useState(e)};te.useSyncExternalStore=function(e,t,r){return Ue.current.useSyncExternalStore(e,t,r)};te.useTransition=function(){return Ue.current.useTransition()};te.version="18.3.1";ad.exports=te;var p=ad.exports;const Pe=ep(p),gp=Zh({__proto__:null,default:Pe},[p]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xp=p,vp=Symbol.for("react.element"),yp=Symbol.for("react.fragment"),jp=Object.prototype.hasOwnProperty,Np=xp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,kp={key:!0,ref:!0,__self:!0,__source:!0};function md(e,t,r){var s,i={},a=null,l=null;r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(l=t.ref);for(s in t)jp.call(t,s)&&!kp.hasOwnProperty(s)&&(i[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)i[s]===void 0&&(i[s]=t[s]);return{$$typeof:vp,type:e,key:a,ref:l,props:i,_owner:Np.current}}Ni.Fragment=yp;Ni.jsx=md;Ni.jsxs=md;id.exports=Ni;var n=id.exports,ya={},gd={exports:{}},sn={},xd={exports:{}},vd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(S,L){var F=S.length;S.push(L);e:for(;0<F;){var V=F-1>>>1,B=S[V];if(0<i(B,L))S[V]=L,S[F]=B,F=V;else break e}}function r(S){return S.length===0?null:S[0]}function s(S){if(S.length===0)return null;var L=S[0],F=S.pop();if(F!==L){S[0]=F;e:for(var V=0,B=S.length,O=B>>>1;V<O;){var M=2*(V+1)-1,P=S[M],b=M+1,q=S[b];if(0>i(P,F))b<B&&0>i(q,P)?(S[V]=q,S[b]=F,V=b):(S[V]=P,S[M]=F,V=M);else if(b<B&&0>i(q,F))S[V]=q,S[b]=F,V=b;else break e}}return L}function i(S,L){var F=S.sortIndex-L.sortIndex;return F!==0?F:S.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var l=Date,o=l.now();e.unstable_now=function(){return l.now()-o}}var c=[],u=[],d=1,h=null,m=3,w=!1,k=!1,N=!1,y=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(S){for(var L=r(u);L!==null;){if(L.callback===null)s(u);else if(L.startTime<=S)s(u),L.sortIndex=L.expirationTime,t(c,L);else break;L=r(u)}}function _(S){if(N=!1,x(S),!k)if(r(c)!==null)k=!0,T(j);else{var L=r(u);L!==null&&A(_,L.startTime-S)}}function j(S,L){k=!1,N&&(N=!1,f(D),D=-1),w=!0;var F=m;try{for(x(L),h=r(c);h!==null&&(!(h.expirationTime>L)||S&&!H());){var V=h.callback;if(typeof V=="function"){h.callback=null,m=h.priorityLevel;var B=V(h.expirationTime<=L);L=e.unstable_now(),typeof B=="function"?h.callback=B:h===r(c)&&s(c),x(L)}else s(c);h=r(c)}if(h!==null)var O=!0;else{var M=r(u);M!==null&&A(_,M.startTime-L),O=!1}return O}finally{h=null,m=F,w=!1}}var z=!1,C=null,D=-1,$=5,R=-1;function H(){return!(e.unstable_now()-R<$)}function W(){if(C!==null){var S=e.unstable_now();R=S;var L=!0;try{L=C(!0,S)}finally{L?E():(z=!1,C=null)}}else z=!1}var E;if(typeof g=="function")E=function(){g(W)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,v=I.port2;I.port1.onmessage=W,E=function(){v.postMessage(null)}}else E=function(){y(W,0)};function T(S){C=S,z||(z=!0,E())}function A(S,L){D=y(function(){S(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(S){S.callback=null},e.unstable_continueExecution=function(){k||w||(k=!0,T(j))},e.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<S?Math.floor(1e3/S):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(S){switch(m){case 1:case 2:case 3:var L=3;break;default:L=m}var F=m;m=L;try{return S()}finally{m=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(S,L){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var F=m;m=S;try{return L()}finally{m=F}},e.unstable_scheduleCallback=function(S,L,F){var V=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?V+F:V):F=V,S){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=F+B,S={id:d++,callback:L,priorityLevel:S,startTime:F,expirationTime:B,sortIndex:-1},F>V?(S.sortIndex=F,t(u,S),r(c)===null&&S===r(u)&&(N?(f(D),D=-1):N=!0,A(_,F-V))):(S.sortIndex=B,t(c,S),k||w||(k=!0,T(j))),S},e.unstable_shouldYield=H,e.unstable_wrapCallback=function(S){var L=m;return function(){var F=m;m=L;try{return S.apply(this,arguments)}finally{m=F}}}})(vd);xd.exports=vd;var wp=xd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bp=p,rn=wp;function U(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var yd=new Set,Dr={};function Tt(e,t){tr(e,t),tr(e+"Capture",t)}function tr(e,t){for(Dr[e]=t,e=0;e<t.length;e++)yd.add(t[e])}var In=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ja=Object.prototype.hasOwnProperty,Sp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Po={},Io={};function Cp(e){return ja.call(Io,e)?!0:ja.call(Po,e)?!1:Sp.test(e)?Io[e]=!0:(Po[e]=!0,!1)}function Tp(e,t,r,s){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function _p(e,t,r,s){if(t===null||typeof t>"u"||Tp(e,t,r,s))return!0;if(s)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ke(e,t,r,s,i,a,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=l}var Me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Me[e]=new Ke(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Me[t]=new Ke(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Me[e]=new Ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Me[e]=new Ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Me[e]=new Ke(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Me[e]=new Ke(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Me[e]=new Ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Me[e]=new Ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Me[e]=new Ke(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ol=/[\-:]([a-z])/g;function Rl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ol,Rl);Me[t]=new Ke(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ol,Rl);Me[t]=new Ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ol,Rl);Me[t]=new Ke(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Me[e]=new Ke(e,1,!1,e.toLowerCase(),null,!1,!1)});Me.xlinkHref=new Ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Me[e]=new Ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function Pl(e,t,r,s){var i=Me.hasOwnProperty(t)?Me[t]:null;(i!==null?i.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(_p(t,r,i,s)&&(r=null),s||i===null?Cp(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,s=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,s?e.setAttributeNS(s,t,r):e.setAttribute(t,r))))}var An=bp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ms=Symbol.for("react.element"),Rt=Symbol.for("react.portal"),Pt=Symbol.for("react.fragment"),Il=Symbol.for("react.strict_mode"),Na=Symbol.for("react.profiler"),jd=Symbol.for("react.provider"),Nd=Symbol.for("react.context"),Ml=Symbol.for("react.forward_ref"),ka=Symbol.for("react.suspense"),wa=Symbol.for("react.suspense_list"),zl=Symbol.for("react.memo"),$n=Symbol.for("react.lazy"),kd=Symbol.for("react.offscreen"),Mo=Symbol.iterator;function xr(e){return e===null||typeof e!="object"?null:(e=Mo&&e[Mo]||e["@@iterator"],typeof e=="function"?e:null)}var ve=Object.assign,Di;function Sr(e){if(Di===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Di=t&&t[1]||""}return`
`+Di+e}var $i=!1;function Bi(e,t){if(!e||$i)return"";$i=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var s=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){s=u}e.call(t.prototype)}else{try{throw Error()}catch(u){s=u}e()}}catch(u){if(u&&s&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=s.stack.split(`
`),l=i.length-1,o=a.length-1;1<=l&&0<=o&&i[l]!==a[o];)o--;for(;1<=l&&0<=o;l--,o--)if(i[l]!==a[o]){if(l!==1||o!==1)do if(l--,o--,0>o||i[l]!==a[o]){var c=`
`+i[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=o);break}}}finally{$i=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Sr(e):""}function Lp(e){switch(e.tag){case 5:return Sr(e.type);case 16:return Sr("Lazy");case 13:return Sr("Suspense");case 19:return Sr("SuspenseList");case 0:case 2:case 15:return e=Bi(e.type,!1),e;case 11:return e=Bi(e.type.render,!1),e;case 1:return e=Bi(e.type,!0),e;default:return""}}function ba(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Pt:return"Fragment";case Rt:return"Portal";case Na:return"Profiler";case Il:return"StrictMode";case ka:return"Suspense";case wa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Nd:return(e.displayName||"Context")+".Consumer";case jd:return(e._context.displayName||"Context")+".Provider";case Ml:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case zl:return t=e.displayName||null,t!==null?t:ba(e.type)||"Memo";case $n:t=e._payload,e=e._init;try{return ba(e(t))}catch{}}return null}function Ep(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ba(t);case 8:return t===Il?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function it(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function wd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Op(e){var t=wd(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){s=""+l,a.call(this,l)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return s},setValue:function(l){s=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function gs(e){e._valueTracker||(e._valueTracker=Op(e))}function bd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),s="";return e&&(s=wd(e)?e.checked?"true":"false":e.value),e=s,e!==r?(t.setValue(e),!0):!1}function Ws(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Sa(e,t){var r=t.checked;return ve({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function zo(e,t){var r=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;r=it(t.value!=null?t.value:r),e._wrapperState={initialChecked:s,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Sd(e,t){t=t.checked,t!=null&&Pl(e,"checked",t,!1)}function Ca(e,t){Sd(e,t);var r=it(t.value),s=t.type;if(r!=null)s==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ta(e,t.type,r):t.hasOwnProperty("defaultValue")&&Ta(e,t.type,it(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Fo(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Ta(e,t,r){(t!=="number"||Ws(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Cr=Array.isArray;function Xt(e,t,r,s){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&s&&(e[r].defaultSelected=!0)}else{for(r=""+it(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,s&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function _a(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(U(91));return ve({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ao(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(U(92));if(Cr(r)){if(1<r.length)throw Error(U(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:it(r)}}function Cd(e,t){var r=it(t.value),s=it(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),s!=null&&(e.defaultValue=""+s)}function Vo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Td(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function La(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Td(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var xs,_d=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,s,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,s,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(xs=xs||document.createElement("div"),xs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=xs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function $r(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Er={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Rp=["Webkit","ms","Moz","O"];Object.keys(Er).forEach(function(e){Rp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Er[t]=Er[e]})});function Ld(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Er.hasOwnProperty(e)&&Er[e]?(""+t).trim():t+"px"}function Ed(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var s=r.indexOf("--")===0,i=Ld(r,t[r],s);r==="float"&&(r="cssFloat"),s?e.setProperty(r,i):e[r]=i}}var Pp=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ea(e,t){if(t){if(Pp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(U(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(U(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(U(61))}if(t.style!=null&&typeof t.style!="object")throw Error(U(62))}}function Oa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ra=null;function Fl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pa=null,Yt=null,Jt=null;function Do(e){if(e=cs(e)){if(typeof Pa!="function")throw Error(U(280));var t=e.stateNode;t&&(t=Ci(t),Pa(e.stateNode,e.type,t))}}function Od(e){Yt?Jt?Jt.push(e):Jt=[e]:Yt=e}function Rd(){if(Yt){var e=Yt,t=Jt;if(Jt=Yt=null,Do(e),t)for(e=0;e<t.length;e++)Do(t[e])}}function Pd(e,t){return e(t)}function Id(){}var Hi=!1;function Md(e,t,r){if(Hi)return e(t,r);Hi=!0;try{return Pd(e,t,r)}finally{Hi=!1,(Yt!==null||Jt!==null)&&(Id(),Rd())}}function Br(e,t){var r=e.stateNode;if(r===null)return null;var s=Ci(r);if(s===null)return null;r=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(U(231,t,typeof r));return r}var Ia=!1;if(In)try{var vr={};Object.defineProperty(vr,"passive",{get:function(){Ia=!0}}),window.addEventListener("test",vr,vr),window.removeEventListener("test",vr,vr)}catch{Ia=!1}function Ip(e,t,r,s,i,a,l,o,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(d){this.onError(d)}}var Or=!1,Gs=null,Qs=!1,Ma=null,Mp={onError:function(e){Or=!0,Gs=e}};function zp(e,t,r,s,i,a,l,o,c){Or=!1,Gs=null,Ip.apply(Mp,arguments)}function Fp(e,t,r,s,i,a,l,o,c){if(zp.apply(this,arguments),Or){if(Or){var u=Gs;Or=!1,Gs=null}else throw Error(U(198));Qs||(Qs=!0,Ma=u)}}function _t(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function zd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function $o(e){if(_t(e)!==e)throw Error(U(188))}function Ap(e){var t=e.alternate;if(!t){if(t=_t(e),t===null)throw Error(U(188));return t!==e?null:e}for(var r=e,s=t;;){var i=r.return;if(i===null)break;var a=i.alternate;if(a===null){if(s=i.return,s!==null){r=s;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===r)return $o(i),e;if(a===s)return $o(i),t;a=a.sibling}throw Error(U(188))}if(r.return!==s.return)r=i,s=a;else{for(var l=!1,o=i.child;o;){if(o===r){l=!0,r=i,s=a;break}if(o===s){l=!0,s=i,r=a;break}o=o.sibling}if(!l){for(o=a.child;o;){if(o===r){l=!0,r=a,s=i;break}if(o===s){l=!0,s=a,r=i;break}o=o.sibling}if(!l)throw Error(U(189))}}if(r.alternate!==s)throw Error(U(190))}if(r.tag!==3)throw Error(U(188));return r.stateNode.current===r?e:t}function Fd(e){return e=Ap(e),e!==null?Ad(e):null}function Ad(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ad(e);if(t!==null)return t;e=e.sibling}return null}var Vd=rn.unstable_scheduleCallback,Bo=rn.unstable_cancelCallback,Vp=rn.unstable_shouldYield,Dp=rn.unstable_requestPaint,we=rn.unstable_now,$p=rn.unstable_getCurrentPriorityLevel,Al=rn.unstable_ImmediatePriority,Dd=rn.unstable_UserBlockingPriority,Xs=rn.unstable_NormalPriority,Bp=rn.unstable_LowPriority,$d=rn.unstable_IdlePriority,ki=null,wn=null;function Hp(e){if(wn&&typeof wn.onCommitFiberRoot=="function")try{wn.onCommitFiberRoot(ki,e,void 0,(e.current.flags&128)===128)}catch{}}var xn=Math.clz32?Math.clz32:Kp,qp=Math.log,Up=Math.LN2;function Kp(e){return e>>>=0,e===0?32:31-(qp(e)/Up|0)|0}var vs=64,ys=4194304;function Tr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ys(e,t){var r=e.pendingLanes;if(r===0)return 0;var s=0,i=e.suspendedLanes,a=e.pingedLanes,l=r&268435455;if(l!==0){var o=l&~i;o!==0?s=Tr(o):(a&=l,a!==0&&(s=Tr(a)))}else l=r&~i,l!==0?s=Tr(l):a!==0&&(s=Tr(a));if(s===0)return 0;if(t!==0&&t!==s&&!(t&i)&&(i=s&-s,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(s&4&&(s|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)r=31-xn(t),i=1<<r,s|=e[r],t&=~i;return s}function Wp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gp(e,t){for(var r=e.suspendedLanes,s=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var l=31-xn(a),o=1<<l,c=i[l];c===-1?(!(o&r)||o&s)&&(i[l]=Wp(o,t)):c<=t&&(e.expiredLanes|=o),a&=~o}}function za(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Bd(){var e=vs;return vs<<=1,!(vs&4194240)&&(vs=64),e}function qi(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function ls(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-xn(t),e[t]=r}function Qp(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-xn(r),a=1<<i;t[i]=0,s[i]=-1,e[i]=-1,r&=~a}}function Vl(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var s=31-xn(r),i=1<<s;i&t|e[s]&t&&(e[s]|=t),r&=~i}}var ae=0;function Hd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var qd,Dl,Ud,Kd,Wd,Fa=!1,js=[],Qn=null,Xn=null,Yn=null,Hr=new Map,qr=new Map,Hn=[],Xp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ho(e,t){switch(e){case"focusin":case"focusout":Qn=null;break;case"dragenter":case"dragleave":Xn=null;break;case"mouseover":case"mouseout":Yn=null;break;case"pointerover":case"pointerout":Hr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":qr.delete(t.pointerId)}}function yr(e,t,r,s,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:r,eventSystemFlags:s,nativeEvent:a,targetContainers:[i]},t!==null&&(t=cs(t),t!==null&&Dl(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Yp(e,t,r,s,i){switch(t){case"focusin":return Qn=yr(Qn,e,t,r,s,i),!0;case"dragenter":return Xn=yr(Xn,e,t,r,s,i),!0;case"mouseover":return Yn=yr(Yn,e,t,r,s,i),!0;case"pointerover":var a=i.pointerId;return Hr.set(a,yr(Hr.get(a)||null,e,t,r,s,i)),!0;case"gotpointercapture":return a=i.pointerId,qr.set(a,yr(qr.get(a)||null,e,t,r,s,i)),!0}return!1}function Gd(e){var t=mt(e.target);if(t!==null){var r=_t(t);if(r!==null){if(t=r.tag,t===13){if(t=zd(r),t!==null){e.blockedOn=t,Wd(e.priority,function(){Ud(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ms(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Aa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var s=new r.constructor(r.type,r);Ra=s,r.target.dispatchEvent(s),Ra=null}else return t=cs(r),t!==null&&Dl(t),e.blockedOn=r,!1;t.shift()}return!0}function qo(e,t,r){Ms(e)&&r.delete(t)}function Jp(){Fa=!1,Qn!==null&&Ms(Qn)&&(Qn=null),Xn!==null&&Ms(Xn)&&(Xn=null),Yn!==null&&Ms(Yn)&&(Yn=null),Hr.forEach(qo),qr.forEach(qo)}function jr(e,t){e.blockedOn===t&&(e.blockedOn=null,Fa||(Fa=!0,rn.unstable_scheduleCallback(rn.unstable_NormalPriority,Jp)))}function Ur(e){function t(i){return jr(i,e)}if(0<js.length){jr(js[0],e);for(var r=1;r<js.length;r++){var s=js[r];s.blockedOn===e&&(s.blockedOn=null)}}for(Qn!==null&&jr(Qn,e),Xn!==null&&jr(Xn,e),Yn!==null&&jr(Yn,e),Hr.forEach(t),qr.forEach(t),r=0;r<Hn.length;r++)s=Hn[r],s.blockedOn===e&&(s.blockedOn=null);for(;0<Hn.length&&(r=Hn[0],r.blockedOn===null);)Gd(r),r.blockedOn===null&&Hn.shift()}var Zt=An.ReactCurrentBatchConfig,Js=!0;function Zp(e,t,r,s){var i=ae,a=Zt.transition;Zt.transition=null;try{ae=1,$l(e,t,r,s)}finally{ae=i,Zt.transition=a}}function ef(e,t,r,s){var i=ae,a=Zt.transition;Zt.transition=null;try{ae=4,$l(e,t,r,s)}finally{ae=i,Zt.transition=a}}function $l(e,t,r,s){if(Js){var i=Aa(e,t,r,s);if(i===null)ea(e,t,s,Zs,r),Ho(e,s);else if(Yp(i,e,t,r,s))s.stopPropagation();else if(Ho(e,s),t&4&&-1<Xp.indexOf(e)){for(;i!==null;){var a=cs(i);if(a!==null&&qd(a),a=Aa(e,t,r,s),a===null&&ea(e,t,s,Zs,r),a===i)break;i=a}i!==null&&s.stopPropagation()}else ea(e,t,s,null,r)}}var Zs=null;function Aa(e,t,r,s){if(Zs=null,e=Fl(s),e=mt(e),e!==null)if(t=_t(e),t===null)e=null;else if(r=t.tag,r===13){if(e=zd(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Zs=e,null}function Qd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($p()){case Al:return 1;case Dd:return 4;case Xs:case Bp:return 16;case $d:return 536870912;default:return 16}default:return 16}}var Un=null,Bl=null,zs=null;function Xd(){if(zs)return zs;var e,t=Bl,r=t.length,s,i="value"in Un?Un.value:Un.textContent,a=i.length;for(e=0;e<r&&t[e]===i[e];e++);var l=r-e;for(s=1;s<=l&&t[r-s]===i[a-s];s++);return zs=i.slice(e,1<s?1-s:void 0)}function Fs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ns(){return!0}function Uo(){return!1}function an(e){function t(r,s,i,a,l){this._reactName=r,this._targetInst=i,this.type=s,this.nativeEvent=a,this.target=l,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(r=e[o],this[o]=r?r(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Ns:Uo,this.isPropagationStopped=Uo,this}return ve(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Ns)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Ns)},persist:function(){},isPersistent:Ns}),t}var dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hl=an(dr),os=ve({},dr,{view:0,detail:0}),nf=an(os),Ui,Ki,Nr,wi=ve({},os,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ql,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Nr&&(Nr&&e.type==="mousemove"?(Ui=e.screenX-Nr.screenX,Ki=e.screenY-Nr.screenY):Ki=Ui=0,Nr=e),Ui)},movementY:function(e){return"movementY"in e?e.movementY:Ki}}),Ko=an(wi),tf=ve({},wi,{dataTransfer:0}),rf=an(tf),sf=ve({},os,{relatedTarget:0}),Wi=an(sf),af=ve({},dr,{animationName:0,elapsedTime:0,pseudoElement:0}),lf=an(af),of=ve({},dr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),cf=an(of),df=ve({},dr,{data:0}),Wo=an(df),uf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ff(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=pf[e])?!!t[e]:!1}function ql(){return ff}var mf=ve({},os,{key:function(e){if(e.key){var t=uf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ql,charCode:function(e){return e.type==="keypress"?Fs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gf=an(mf),xf=ve({},wi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Go=an(xf),vf=ve({},os,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ql}),yf=an(vf),jf=ve({},dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nf=an(jf),kf=ve({},wi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wf=an(kf),bf=[9,13,27,32],Ul=In&&"CompositionEvent"in window,Rr=null;In&&"documentMode"in document&&(Rr=document.documentMode);var Sf=In&&"TextEvent"in window&&!Rr,Yd=In&&(!Ul||Rr&&8<Rr&&11>=Rr),Qo=" ",Xo=!1;function Jd(e,t){switch(e){case"keyup":return bf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var It=!1;function Cf(e,t){switch(e){case"compositionend":return Zd(t);case"keypress":return t.which!==32?null:(Xo=!0,Qo);case"textInput":return e=t.data,e===Qo&&Xo?null:e;default:return null}}function Tf(e,t){if(It)return e==="compositionend"||!Ul&&Jd(e,t)?(e=Xd(),zs=Bl=Un=null,It=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Yd&&t.locale!=="ko"?null:t.data;default:return null}}var _f={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_f[e.type]:t==="textarea"}function eu(e,t,r,s){Od(s),t=ei(t,"onChange"),0<t.length&&(r=new Hl("onChange","change",null,r,s),e.push({event:r,listeners:t}))}var Pr=null,Kr=null;function Lf(e){uu(e,0)}function bi(e){var t=Ft(e);if(bd(t))return e}function Ef(e,t){if(e==="change")return t}var nu=!1;if(In){var Gi;if(In){var Qi="oninput"in document;if(!Qi){var Jo=document.createElement("div");Jo.setAttribute("oninput","return;"),Qi=typeof Jo.oninput=="function"}Gi=Qi}else Gi=!1;nu=Gi&&(!document.documentMode||9<document.documentMode)}function Zo(){Pr&&(Pr.detachEvent("onpropertychange",tu),Kr=Pr=null)}function tu(e){if(e.propertyName==="value"&&bi(Kr)){var t=[];eu(t,Kr,e,Fl(e)),Md(Lf,t)}}function Of(e,t,r){e==="focusin"?(Zo(),Pr=t,Kr=r,Pr.attachEvent("onpropertychange",tu)):e==="focusout"&&Zo()}function Rf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bi(Kr)}function Pf(e,t){if(e==="click")return bi(t)}function If(e,t){if(e==="input"||e==="change")return bi(t)}function Mf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var yn=typeof Object.is=="function"?Object.is:Mf;function Wr(e,t){if(yn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(s=0;s<r.length;s++){var i=r[s];if(!ja.call(t,i)||!yn(e[i],t[i]))return!1}return!0}function ec(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nc(e,t){var r=ec(e);e=0;for(var s;r;){if(r.nodeType===3){if(s=e+r.textContent.length,e<=t&&s>=t)return{node:r,offset:t-e};e=s}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ec(r)}}function ru(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ru(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function su(){for(var e=window,t=Ws();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Ws(e.document)}return t}function Kl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function zf(e){var t=su(),r=e.focusedElem,s=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&ru(r.ownerDocument.documentElement,r)){if(s!==null&&Kl(r)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,a=Math.min(s.start,i);s=s.end===void 0?a:Math.min(s.end,i),!e.extend&&a>s&&(i=s,s=a,a=i),i=nc(r,a);var l=nc(r,s);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>s?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ff=In&&"documentMode"in document&&11>=document.documentMode,Mt=null,Va=null,Ir=null,Da=!1;function tc(e,t,r){var s=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Da||Mt==null||Mt!==Ws(s)||(s=Mt,"selectionStart"in s&&Kl(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Ir&&Wr(Ir,s)||(Ir=s,s=ei(Va,"onSelect"),0<s.length&&(t=new Hl("onSelect","select",null,t,r),e.push({event:t,listeners:s}),t.target=Mt)))}function ks(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var zt={animationend:ks("Animation","AnimationEnd"),animationiteration:ks("Animation","AnimationIteration"),animationstart:ks("Animation","AnimationStart"),transitionend:ks("Transition","TransitionEnd")},Xi={},iu={};In&&(iu=document.createElement("div").style,"AnimationEvent"in window||(delete zt.animationend.animation,delete zt.animationiteration.animation,delete zt.animationstart.animation),"TransitionEvent"in window||delete zt.transitionend.transition);function Si(e){if(Xi[e])return Xi[e];if(!zt[e])return e;var t=zt[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in iu)return Xi[e]=t[r];return e}var au=Si("animationend"),lu=Si("animationiteration"),ou=Si("animationstart"),cu=Si("transitionend"),du=new Map,rc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function lt(e,t){du.set(e,t),Tt(t,[e])}for(var Yi=0;Yi<rc.length;Yi++){var Ji=rc[Yi],Af=Ji.toLowerCase(),Vf=Ji[0].toUpperCase()+Ji.slice(1);lt(Af,"on"+Vf)}lt(au,"onAnimationEnd");lt(lu,"onAnimationIteration");lt(ou,"onAnimationStart");lt("dblclick","onDoubleClick");lt("focusin","onFocus");lt("focusout","onBlur");lt(cu,"onTransitionEnd");tr("onMouseEnter",["mouseout","mouseover"]);tr("onMouseLeave",["mouseout","mouseover"]);tr("onPointerEnter",["pointerout","pointerover"]);tr("onPointerLeave",["pointerout","pointerover"]);Tt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _r="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Df=new Set("cancel close invalid load scroll toggle".split(" ").concat(_r));function sc(e,t,r){var s=e.type||"unknown-event";e.currentTarget=r,Fp(s,t,void 0,e),e.currentTarget=null}function uu(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var s=e[r],i=s.event;s=s.listeners;e:{var a=void 0;if(t)for(var l=s.length-1;0<=l;l--){var o=s[l],c=o.instance,u=o.currentTarget;if(o=o.listener,c!==a&&i.isPropagationStopped())break e;sc(i,o,u),a=c}else for(l=0;l<s.length;l++){if(o=s[l],c=o.instance,u=o.currentTarget,o=o.listener,c!==a&&i.isPropagationStopped())break e;sc(i,o,u),a=c}}}if(Qs)throw e=Ma,Qs=!1,Ma=null,e}function ue(e,t){var r=t[Ua];r===void 0&&(r=t[Ua]=new Set);var s=e+"__bubble";r.has(s)||(hu(t,e,2,!1),r.add(s))}function Zi(e,t,r){var s=0;t&&(s|=4),hu(r,e,s,t)}var ws="_reactListening"+Math.random().toString(36).slice(2);function Gr(e){if(!e[ws]){e[ws]=!0,yd.forEach(function(r){r!=="selectionchange"&&(Df.has(r)||Zi(r,!1,e),Zi(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ws]||(t[ws]=!0,Zi("selectionchange",!1,t))}}function hu(e,t,r,s){switch(Qd(t)){case 1:var i=Zp;break;case 4:i=ef;break;default:i=$l}r=i.bind(null,t,r,e),i=void 0,!Ia||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),s?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function ea(e,t,r,s,i){var a=s;if(!(t&1)&&!(t&2)&&s!==null)e:for(;;){if(s===null)return;var l=s.tag;if(l===3||l===4){var o=s.stateNode.containerInfo;if(o===i||o.nodeType===8&&o.parentNode===i)break;if(l===4)for(l=s.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;l=l.return}for(;o!==null;){if(l=mt(o),l===null)return;if(c=l.tag,c===5||c===6){s=a=l;continue e}o=o.parentNode}}s=s.return}Md(function(){var u=a,d=Fl(r),h=[];e:{var m=du.get(e);if(m!==void 0){var w=Hl,k=e;switch(e){case"keypress":if(Fs(r)===0)break e;case"keydown":case"keyup":w=gf;break;case"focusin":k="focus",w=Wi;break;case"focusout":k="blur",w=Wi;break;case"beforeblur":case"afterblur":w=Wi;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Ko;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=rf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=yf;break;case au:case lu:case ou:w=lf;break;case cu:w=Nf;break;case"scroll":w=nf;break;case"wheel":w=wf;break;case"copy":case"cut":case"paste":w=cf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Go}var N=(t&4)!==0,y=!N&&e==="scroll",f=N?m!==null?m+"Capture":null:m;N=[];for(var g=u,x;g!==null;){x=g;var _=x.stateNode;if(x.tag===5&&_!==null&&(x=_,f!==null&&(_=Br(g,f),_!=null&&N.push(Qr(g,_,x)))),y)break;g=g.return}0<N.length&&(m=new w(m,k,null,r,d),h.push({event:m,listeners:N}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",m&&r!==Ra&&(k=r.relatedTarget||r.fromElement)&&(mt(k)||k[Mn]))break e;if((w||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,w?(k=r.relatedTarget||r.toElement,w=u,k=k?mt(k):null,k!==null&&(y=_t(k),k!==y||k.tag!==5&&k.tag!==6)&&(k=null)):(w=null,k=u),w!==k)){if(N=Ko,_="onMouseLeave",f="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(N=Go,_="onPointerLeave",f="onPointerEnter",g="pointer"),y=w==null?m:Ft(w),x=k==null?m:Ft(k),m=new N(_,g+"leave",w,r,d),m.target=y,m.relatedTarget=x,_=null,mt(d)===u&&(N=new N(f,g+"enter",k,r,d),N.target=x,N.relatedTarget=y,_=N),y=_,w&&k)n:{for(N=w,f=k,g=0,x=N;x;x=Et(x))g++;for(x=0,_=f;_;_=Et(_))x++;for(;0<g-x;)N=Et(N),g--;for(;0<x-g;)f=Et(f),x--;for(;g--;){if(N===f||f!==null&&N===f.alternate)break n;N=Et(N),f=Et(f)}N=null}else N=null;w!==null&&ic(h,m,w,N,!1),k!==null&&y!==null&&ic(h,y,k,N,!0)}}e:{if(m=u?Ft(u):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var j=Ef;else if(Yo(m))if(nu)j=If;else{j=Rf;var z=Of}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(j=Pf);if(j&&(j=j(e,u))){eu(h,j,r,d);break e}z&&z(e,m,u),e==="focusout"&&(z=m._wrapperState)&&z.controlled&&m.type==="number"&&Ta(m,"number",m.value)}switch(z=u?Ft(u):window,e){case"focusin":(Yo(z)||z.contentEditable==="true")&&(Mt=z,Va=u,Ir=null);break;case"focusout":Ir=Va=Mt=null;break;case"mousedown":Da=!0;break;case"contextmenu":case"mouseup":case"dragend":Da=!1,tc(h,r,d);break;case"selectionchange":if(Ff)break;case"keydown":case"keyup":tc(h,r,d)}var C;if(Ul)e:{switch(e){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else It?Jd(e,r)&&(D="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(D="onCompositionStart");D&&(Yd&&r.locale!=="ko"&&(It||D!=="onCompositionStart"?D==="onCompositionEnd"&&It&&(C=Xd()):(Un=d,Bl="value"in Un?Un.value:Un.textContent,It=!0)),z=ei(u,D),0<z.length&&(D=new Wo(D,e,null,r,d),h.push({event:D,listeners:z}),C?D.data=C:(C=Zd(r),C!==null&&(D.data=C)))),(C=Sf?Cf(e,r):Tf(e,r))&&(u=ei(u,"onBeforeInput"),0<u.length&&(d=new Wo("onBeforeInput","beforeinput",null,r,d),h.push({event:d,listeners:u}),d.data=C))}uu(h,t)})}function Qr(e,t,r){return{instance:e,listener:t,currentTarget:r}}function ei(e,t){for(var r=t+"Capture",s=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Br(e,r),a!=null&&s.unshift(Qr(e,a,i)),a=Br(e,t),a!=null&&s.push(Qr(e,a,i))),e=e.return}return s}function Et(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ic(e,t,r,s,i){for(var a=t._reactName,l=[];r!==null&&r!==s;){var o=r,c=o.alternate,u=o.stateNode;if(c!==null&&c===s)break;o.tag===5&&u!==null&&(o=u,i?(c=Br(r,a),c!=null&&l.unshift(Qr(r,c,o))):i||(c=Br(r,a),c!=null&&l.push(Qr(r,c,o)))),r=r.return}l.length!==0&&e.push({event:t,listeners:l})}var $f=/\r\n?/g,Bf=/\u0000|\uFFFD/g;function ac(e){return(typeof e=="string"?e:""+e).replace($f,`
`).replace(Bf,"")}function bs(e,t,r){if(t=ac(t),ac(e)!==t&&r)throw Error(U(425))}function ni(){}var $a=null,Ba=null;function Ha(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var qa=typeof setTimeout=="function"?setTimeout:void 0,Hf=typeof clearTimeout=="function"?clearTimeout:void 0,lc=typeof Promise=="function"?Promise:void 0,qf=typeof queueMicrotask=="function"?queueMicrotask:typeof lc<"u"?function(e){return lc.resolve(null).then(e).catch(Uf)}:qa;function Uf(e){setTimeout(function(){throw e})}function na(e,t){var r=t,s=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(s===0){e.removeChild(i),Ur(t);return}s--}else r!=="$"&&r!=="$?"&&r!=="$!"||s++;r=i}while(r);Ur(t)}function Jn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function oc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var ur=Math.random().toString(36).slice(2),kn="__reactFiber$"+ur,Xr="__reactProps$"+ur,Mn="__reactContainer$"+ur,Ua="__reactEvents$"+ur,Kf="__reactListeners$"+ur,Wf="__reactHandles$"+ur;function mt(e){var t=e[kn];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Mn]||r[kn]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=oc(e);e!==null;){if(r=e[kn])return r;e=oc(e)}return t}e=r,r=e.parentNode}return null}function cs(e){return e=e[kn]||e[Mn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ft(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(U(33))}function Ci(e){return e[Xr]||null}var Ka=[],At=-1;function ot(e){return{current:e}}function he(e){0>At||(e.current=Ka[At],Ka[At]=null,At--)}function de(e,t){At++,Ka[At]=e.current,e.current=t}var at={},De=ot(at),Qe=ot(!1),kt=at;function rr(e,t){var r=e.type.contextTypes;if(!r)return at;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in r)i[a]=t[a];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Xe(e){return e=e.childContextTypes,e!=null}function ti(){he(Qe),he(De)}function cc(e,t,r){if(De.current!==at)throw Error(U(168));de(De,t),de(Qe,r)}function pu(e,t,r){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return r;s=s.getChildContext();for(var i in s)if(!(i in t))throw Error(U(108,Ep(e)||"Unknown",i));return ve({},r,s)}function ri(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||at,kt=De.current,de(De,e),de(Qe,Qe.current),!0}function dc(e,t,r){var s=e.stateNode;if(!s)throw Error(U(169));r?(e=pu(e,t,kt),s.__reactInternalMemoizedMergedChildContext=e,he(Qe),he(De),de(De,e)):he(Qe),de(Qe,r)}var Ln=null,Ti=!1,ta=!1;function fu(e){Ln===null?Ln=[e]:Ln.push(e)}function Gf(e){Ti=!0,fu(e)}function ct(){if(!ta&&Ln!==null){ta=!0;var e=0,t=ae;try{var r=Ln;for(ae=1;e<r.length;e++){var s=r[e];do s=s(!0);while(s!==null)}Ln=null,Ti=!1}catch(i){throw Ln!==null&&(Ln=Ln.slice(e+1)),Vd(Al,ct),i}finally{ae=t,ta=!1}}return null}var Vt=[],Dt=0,si=null,ii=0,ln=[],on=0,wt=null,On=1,Rn="";function pt(e,t){Vt[Dt++]=ii,Vt[Dt++]=si,si=e,ii=t}function mu(e,t,r){ln[on++]=On,ln[on++]=Rn,ln[on++]=wt,wt=e;var s=On;e=Rn;var i=32-xn(s)-1;s&=~(1<<i),r+=1;var a=32-xn(t)+i;if(30<a){var l=i-i%5;a=(s&(1<<l)-1).toString(32),s>>=l,i-=l,On=1<<32-xn(t)+i|r<<i|s,Rn=a+e}else On=1<<a|r<<i|s,Rn=e}function Wl(e){e.return!==null&&(pt(e,1),mu(e,1,0))}function Gl(e){for(;e===si;)si=Vt[--Dt],Vt[Dt]=null,ii=Vt[--Dt],Vt[Dt]=null;for(;e===wt;)wt=ln[--on],ln[on]=null,Rn=ln[--on],ln[on]=null,On=ln[--on],ln[on]=null}var tn=null,nn=null,pe=!1,gn=null;function gu(e,t){var r=cn(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function uc(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,tn=e,nn=Jn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,tn=e,nn=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=wt!==null?{id:On,overflow:Rn}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=cn(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,tn=e,nn=null,!0):!1;default:return!1}}function Wa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ga(e){if(pe){var t=nn;if(t){var r=t;if(!uc(e,t)){if(Wa(e))throw Error(U(418));t=Jn(r.nextSibling);var s=tn;t&&uc(e,t)?gu(s,r):(e.flags=e.flags&-4097|2,pe=!1,tn=e)}}else{if(Wa(e))throw Error(U(418));e.flags=e.flags&-4097|2,pe=!1,tn=e}}}function hc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;tn=e}function Ss(e){if(e!==tn)return!1;if(!pe)return hc(e),pe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ha(e.type,e.memoizedProps)),t&&(t=nn)){if(Wa(e))throw xu(),Error(U(418));for(;t;)gu(e,t),t=Jn(t.nextSibling)}if(hc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(U(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){nn=Jn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}nn=null}}else nn=tn?Jn(e.stateNode.nextSibling):null;return!0}function xu(){for(var e=nn;e;)e=Jn(e.nextSibling)}function sr(){nn=tn=null,pe=!1}function Ql(e){gn===null?gn=[e]:gn.push(e)}var Qf=An.ReactCurrentBatchConfig;function kr(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(U(309));var s=r.stateNode}if(!s)throw Error(U(147,e));var i=s,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(l){var o=i.refs;l===null?delete o[a]:o[a]=l},t._stringRef=a,t)}if(typeof e!="string")throw Error(U(284));if(!r._owner)throw Error(U(290,e))}return e}function Cs(e,t){throw e=Object.prototype.toString.call(t),Error(U(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function pc(e){var t=e._init;return t(e._payload)}function vu(e){function t(f,g){if(e){var x=f.deletions;x===null?(f.deletions=[g],f.flags|=16):x.push(g)}}function r(f,g){if(!e)return null;for(;g!==null;)t(f,g),g=g.sibling;return null}function s(f,g){for(f=new Map;g!==null;)g.key!==null?f.set(g.key,g):f.set(g.index,g),g=g.sibling;return f}function i(f,g){return f=tt(f,g),f.index=0,f.sibling=null,f}function a(f,g,x){return f.index=x,e?(x=f.alternate,x!==null?(x=x.index,x<g?(f.flags|=2,g):x):(f.flags|=2,g)):(f.flags|=1048576,g)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function o(f,g,x,_){return g===null||g.tag!==6?(g=ca(x,f.mode,_),g.return=f,g):(g=i(g,x),g.return=f,g)}function c(f,g,x,_){var j=x.type;return j===Pt?d(f,g,x.props.children,_,x.key):g!==null&&(g.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===$n&&pc(j)===g.type)?(_=i(g,x.props),_.ref=kr(f,g,x),_.return=f,_):(_=qs(x.type,x.key,x.props,null,f.mode,_),_.ref=kr(f,g,x),_.return=f,_)}function u(f,g,x,_){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=da(x,f.mode,_),g.return=f,g):(g=i(g,x.children||[]),g.return=f,g)}function d(f,g,x,_,j){return g===null||g.tag!==7?(g=Nt(x,f.mode,_,j),g.return=f,g):(g=i(g,x),g.return=f,g)}function h(f,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return g=ca(""+g,f.mode,x),g.return=f,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ms:return x=qs(g.type,g.key,g.props,null,f.mode,x),x.ref=kr(f,null,g),x.return=f,x;case Rt:return g=da(g,f.mode,x),g.return=f,g;case $n:var _=g._init;return h(f,_(g._payload),x)}if(Cr(g)||xr(g))return g=Nt(g,f.mode,x,null),g.return=f,g;Cs(f,g)}return null}function m(f,g,x,_){var j=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return j!==null?null:o(f,g,""+x,_);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ms:return x.key===j?c(f,g,x,_):null;case Rt:return x.key===j?u(f,g,x,_):null;case $n:return j=x._init,m(f,g,j(x._payload),_)}if(Cr(x)||xr(x))return j!==null?null:d(f,g,x,_,null);Cs(f,x)}return null}function w(f,g,x,_,j){if(typeof _=="string"&&_!==""||typeof _=="number")return f=f.get(x)||null,o(g,f,""+_,j);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ms:return f=f.get(_.key===null?x:_.key)||null,c(g,f,_,j);case Rt:return f=f.get(_.key===null?x:_.key)||null,u(g,f,_,j);case $n:var z=_._init;return w(f,g,x,z(_._payload),j)}if(Cr(_)||xr(_))return f=f.get(x)||null,d(g,f,_,j,null);Cs(g,_)}return null}function k(f,g,x,_){for(var j=null,z=null,C=g,D=g=0,$=null;C!==null&&D<x.length;D++){C.index>D?($=C,C=null):$=C.sibling;var R=m(f,C,x[D],_);if(R===null){C===null&&(C=$);break}e&&C&&R.alternate===null&&t(f,C),g=a(R,g,D),z===null?j=R:z.sibling=R,z=R,C=$}if(D===x.length)return r(f,C),pe&&pt(f,D),j;if(C===null){for(;D<x.length;D++)C=h(f,x[D],_),C!==null&&(g=a(C,g,D),z===null?j=C:z.sibling=C,z=C);return pe&&pt(f,D),j}for(C=s(f,C);D<x.length;D++)$=w(C,f,D,x[D],_),$!==null&&(e&&$.alternate!==null&&C.delete($.key===null?D:$.key),g=a($,g,D),z===null?j=$:z.sibling=$,z=$);return e&&C.forEach(function(H){return t(f,H)}),pe&&pt(f,D),j}function N(f,g,x,_){var j=xr(x);if(typeof j!="function")throw Error(U(150));if(x=j.call(x),x==null)throw Error(U(151));for(var z=j=null,C=g,D=g=0,$=null,R=x.next();C!==null&&!R.done;D++,R=x.next()){C.index>D?($=C,C=null):$=C.sibling;var H=m(f,C,R.value,_);if(H===null){C===null&&(C=$);break}e&&C&&H.alternate===null&&t(f,C),g=a(H,g,D),z===null?j=H:z.sibling=H,z=H,C=$}if(R.done)return r(f,C),pe&&pt(f,D),j;if(C===null){for(;!R.done;D++,R=x.next())R=h(f,R.value,_),R!==null&&(g=a(R,g,D),z===null?j=R:z.sibling=R,z=R);return pe&&pt(f,D),j}for(C=s(f,C);!R.done;D++,R=x.next())R=w(C,f,D,R.value,_),R!==null&&(e&&R.alternate!==null&&C.delete(R.key===null?D:R.key),g=a(R,g,D),z===null?j=R:z.sibling=R,z=R);return e&&C.forEach(function(W){return t(f,W)}),pe&&pt(f,D),j}function y(f,g,x,_){if(typeof x=="object"&&x!==null&&x.type===Pt&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case ms:e:{for(var j=x.key,z=g;z!==null;){if(z.key===j){if(j=x.type,j===Pt){if(z.tag===7){r(f,z.sibling),g=i(z,x.props.children),g.return=f,f=g;break e}}else if(z.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===$n&&pc(j)===z.type){r(f,z.sibling),g=i(z,x.props),g.ref=kr(f,z,x),g.return=f,f=g;break e}r(f,z);break}else t(f,z);z=z.sibling}x.type===Pt?(g=Nt(x.props.children,f.mode,_,x.key),g.return=f,f=g):(_=qs(x.type,x.key,x.props,null,f.mode,_),_.ref=kr(f,g,x),_.return=f,f=_)}return l(f);case Rt:e:{for(z=x.key;g!==null;){if(g.key===z)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){r(f,g.sibling),g=i(g,x.children||[]),g.return=f,f=g;break e}else{r(f,g);break}else t(f,g);g=g.sibling}g=da(x,f.mode,_),g.return=f,f=g}return l(f);case $n:return z=x._init,y(f,g,z(x._payload),_)}if(Cr(x))return k(f,g,x,_);if(xr(x))return N(f,g,x,_);Cs(f,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,g!==null&&g.tag===6?(r(f,g.sibling),g=i(g,x),g.return=f,f=g):(r(f,g),g=ca(x,f.mode,_),g.return=f,f=g),l(f)):r(f,g)}return y}var ir=vu(!0),yu=vu(!1),ai=ot(null),li=null,$t=null,Xl=null;function Yl(){Xl=$t=li=null}function Jl(e){var t=ai.current;he(ai),e._currentValue=t}function Qa(e,t,r){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===r)break;e=e.return}}function er(e,t){li=e,Xl=$t=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ge=!0),e.firstContext=null)}function un(e){var t=e._currentValue;if(Xl!==e)if(e={context:e,memoizedValue:t,next:null},$t===null){if(li===null)throw Error(U(308));$t=e,li.dependencies={lanes:0,firstContext:e}}else $t=$t.next=e;return t}var gt=null;function Zl(e){gt===null?gt=[e]:gt.push(e)}function ju(e,t,r,s){var i=t.interleaved;return i===null?(r.next=r,Zl(t)):(r.next=i.next,i.next=r),t.interleaved=r,zn(e,s)}function zn(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Bn=!1;function eo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Nu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Pn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Zn(e,t,r){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,se&2){var i=s.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),s.pending=t,zn(e,r)}return i=s.interleaved,i===null?(t.next=t,Zl(s)):(t.next=i.next,i.next=t),s.interleaved=t,zn(e,r)}function As(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,Vl(e,r)}}function fc(e,t){var r=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,r===s)){var i=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var l={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?i=a=l:a=a.next=l,r=r.next}while(r!==null);a===null?i=a=t:a=a.next=t}else i=a=t;r={baseState:s.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:s.shared,effects:s.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function oi(e,t,r,s){var i=e.updateQueue;Bn=!1;var a=i.firstBaseUpdate,l=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var c=o,u=c.next;c.next=null,l===null?a=u:l.next=u,l=c;var d=e.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==l&&(o===null?d.firstBaseUpdate=u:o.next=u,d.lastBaseUpdate=c))}if(a!==null){var h=i.baseState;l=0,d=u=c=null,o=a;do{var m=o.lane,w=o.eventTime;if((s&m)===m){d!==null&&(d=d.next={eventTime:w,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var k=e,N=o;switch(m=t,w=r,N.tag){case 1:if(k=N.payload,typeof k=="function"){h=k.call(w,h,m);break e}h=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=N.payload,m=typeof k=="function"?k.call(w,h,m):k,m==null)break e;h=ve({},h,m);break e;case 2:Bn=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[o]:m.push(o))}else w={eventTime:w,lane:m,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(u=d=w,c=h):d=d.next=w,l|=m;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;m=o,o=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(c=h),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);St|=l,e.lanes=l,e.memoizedState=h}}function mc(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],i=s.callback;if(i!==null){if(s.callback=null,s=r,typeof i!="function")throw Error(U(191,i));i.call(s)}}}var ds={},bn=ot(ds),Yr=ot(ds),Jr=ot(ds);function xt(e){if(e===ds)throw Error(U(174));return e}function no(e,t){switch(de(Jr,t),de(Yr,e),de(bn,ds),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:La(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=La(t,e)}he(bn),de(bn,t)}function ar(){he(bn),he(Yr),he(Jr)}function ku(e){xt(Jr.current);var t=xt(bn.current),r=La(t,e.type);t!==r&&(de(Yr,e),de(bn,r))}function to(e){Yr.current===e&&(he(bn),he(Yr))}var ge=ot(0);function ci(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ra=[];function ro(){for(var e=0;e<ra.length;e++)ra[e]._workInProgressVersionPrimary=null;ra.length=0}var Vs=An.ReactCurrentDispatcher,sa=An.ReactCurrentBatchConfig,bt=0,xe=null,Te=null,Le=null,di=!1,Mr=!1,Zr=0,Xf=0;function Fe(){throw Error(U(321))}function so(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!yn(e[r],t[r]))return!1;return!0}function io(e,t,r,s,i,a){if(bt=a,xe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Vs.current=e===null||e.memoizedState===null?em:nm,e=r(s,i),Mr){a=0;do{if(Mr=!1,Zr=0,25<=a)throw Error(U(301));a+=1,Le=Te=null,t.updateQueue=null,Vs.current=tm,e=r(s,i)}while(Mr)}if(Vs.current=ui,t=Te!==null&&Te.next!==null,bt=0,Le=Te=xe=null,di=!1,t)throw Error(U(300));return e}function ao(){var e=Zr!==0;return Zr=0,e}function Nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?xe.memoizedState=Le=e:Le=Le.next=e,Le}function hn(){if(Te===null){var e=xe.alternate;e=e!==null?e.memoizedState:null}else e=Te.next;var t=Le===null?xe.memoizedState:Le.next;if(t!==null)Le=t,Te=e;else{if(e===null)throw Error(U(310));Te=e,e={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},Le===null?xe.memoizedState=Le=e:Le=Le.next=e}return Le}function es(e,t){return typeof t=="function"?t(e):t}function ia(e){var t=hn(),r=t.queue;if(r===null)throw Error(U(311));r.lastRenderedReducer=e;var s=Te,i=s.baseQueue,a=r.pending;if(a!==null){if(i!==null){var l=i.next;i.next=a.next,a.next=l}s.baseQueue=i=a,r.pending=null}if(i!==null){a=i.next,s=s.baseState;var o=l=null,c=null,u=a;do{var d=u.lane;if((bt&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),s=u.hasEagerState?u.eagerState:e(s,u.action);else{var h={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(o=c=h,l=s):c=c.next=h,xe.lanes|=d,St|=d}u=u.next}while(u!==null&&u!==a);c===null?l=s:c.next=o,yn(s,t.memoizedState)||(Ge=!0),t.memoizedState=s,t.baseState=l,t.baseQueue=c,r.lastRenderedState=s}if(e=r.interleaved,e!==null){i=e;do a=i.lane,xe.lanes|=a,St|=a,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function aa(e){var t=hn(),r=t.queue;if(r===null)throw Error(U(311));r.lastRenderedReducer=e;var s=r.dispatch,i=r.pending,a=t.memoizedState;if(i!==null){r.pending=null;var l=i=i.next;do a=e(a,l.action),l=l.next;while(l!==i);yn(a,t.memoizedState)||(Ge=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),r.lastRenderedState=a}return[a,s]}function wu(){}function bu(e,t){var r=xe,s=hn(),i=t(),a=!yn(s.memoizedState,i);if(a&&(s.memoizedState=i,Ge=!0),s=s.queue,lo(Tu.bind(null,r,s,e),[e]),s.getSnapshot!==t||a||Le!==null&&Le.memoizedState.tag&1){if(r.flags|=2048,ns(9,Cu.bind(null,r,s,i,t),void 0,null),Ee===null)throw Error(U(349));bt&30||Su(r,t,i)}return i}function Su(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=xe.updateQueue,t===null?(t={lastEffect:null,stores:null},xe.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Cu(e,t,r,s){t.value=r,t.getSnapshot=s,_u(t)&&Lu(e)}function Tu(e,t,r){return r(function(){_u(t)&&Lu(e)})}function _u(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!yn(e,r)}catch{return!0}}function Lu(e){var t=zn(e,1);t!==null&&vn(t,e,1,-1)}function gc(e){var t=Nn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:e},t.queue=e,e=e.dispatch=Zf.bind(null,xe,e),[t.memoizedState,e]}function ns(e,t,r,s){return e={tag:e,create:t,destroy:r,deps:s,next:null},t=xe.updateQueue,t===null?(t={lastEffect:null,stores:null},xe.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(s=r.next,r.next=e,e.next=s,t.lastEffect=e)),e}function Eu(){return hn().memoizedState}function Ds(e,t,r,s){var i=Nn();xe.flags|=e,i.memoizedState=ns(1|t,r,void 0,s===void 0?null:s)}function _i(e,t,r,s){var i=hn();s=s===void 0?null:s;var a=void 0;if(Te!==null){var l=Te.memoizedState;if(a=l.destroy,s!==null&&so(s,l.deps)){i.memoizedState=ns(t,r,a,s);return}}xe.flags|=e,i.memoizedState=ns(1|t,r,a,s)}function xc(e,t){return Ds(8390656,8,e,t)}function lo(e,t){return _i(2048,8,e,t)}function Ou(e,t){return _i(4,2,e,t)}function Ru(e,t){return _i(4,4,e,t)}function Pu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Iu(e,t,r){return r=r!=null?r.concat([e]):null,_i(4,4,Pu.bind(null,t,e),r)}function oo(){}function Mu(e,t){var r=hn();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&so(t,s[1])?s[0]:(r.memoizedState=[e,t],e)}function zu(e,t){var r=hn();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&so(t,s[1])?s[0]:(e=e(),r.memoizedState=[e,t],e)}function Fu(e,t,r){return bt&21?(yn(r,t)||(r=Bd(),xe.lanes|=r,St|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ge=!0),e.memoizedState=r)}function Yf(e,t){var r=ae;ae=r!==0&&4>r?r:4,e(!0);var s=sa.transition;sa.transition={};try{e(!1),t()}finally{ae=r,sa.transition=s}}function Au(){return hn().memoizedState}function Jf(e,t,r){var s=nt(e);if(r={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null},Vu(e))Du(t,r);else if(r=ju(e,t,r,s),r!==null){var i=qe();vn(r,e,s,i),$u(r,t,s)}}function Zf(e,t,r){var s=nt(e),i={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null};if(Vu(e))Du(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var l=t.lastRenderedState,o=a(l,r);if(i.hasEagerState=!0,i.eagerState=o,yn(o,l)){var c=t.interleaved;c===null?(i.next=i,Zl(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}r=ju(e,t,i,s),r!==null&&(i=qe(),vn(r,e,s,i),$u(r,t,s))}}function Vu(e){var t=e.alternate;return e===xe||t!==null&&t===xe}function Du(e,t){Mr=di=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function $u(e,t,r){if(r&4194240){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,Vl(e,r)}}var ui={readContext:un,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useInsertionEffect:Fe,useLayoutEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useMutableSource:Fe,useSyncExternalStore:Fe,useId:Fe,unstable_isNewReconciler:!1},em={readContext:un,useCallback:function(e,t){return Nn().memoizedState=[e,t===void 0?null:t],e},useContext:un,useEffect:xc,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Ds(4194308,4,Pu.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Ds(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ds(4,2,e,t)},useMemo:function(e,t){var r=Nn();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var s=Nn();return t=r!==void 0?r(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=Jf.bind(null,xe,e),[s.memoizedState,e]},useRef:function(e){var t=Nn();return e={current:e},t.memoizedState=e},useState:gc,useDebugValue:oo,useDeferredValue:function(e){return Nn().memoizedState=e},useTransition:function(){var e=gc(!1),t=e[0];return e=Yf.bind(null,e[1]),Nn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var s=xe,i=Nn();if(pe){if(r===void 0)throw Error(U(407));r=r()}else{if(r=t(),Ee===null)throw Error(U(349));bt&30||Su(s,t,r)}i.memoizedState=r;var a={value:r,getSnapshot:t};return i.queue=a,xc(Tu.bind(null,s,a,e),[e]),s.flags|=2048,ns(9,Cu.bind(null,s,a,r,t),void 0,null),r},useId:function(){var e=Nn(),t=Ee.identifierPrefix;if(pe){var r=Rn,s=On;r=(s&~(1<<32-xn(s)-1)).toString(32)+r,t=":"+t+"R"+r,r=Zr++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Xf++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},nm={readContext:un,useCallback:Mu,useContext:un,useEffect:lo,useImperativeHandle:Iu,useInsertionEffect:Ou,useLayoutEffect:Ru,useMemo:zu,useReducer:ia,useRef:Eu,useState:function(){return ia(es)},useDebugValue:oo,useDeferredValue:function(e){var t=hn();return Fu(t,Te.memoizedState,e)},useTransition:function(){var e=ia(es)[0],t=hn().memoizedState;return[e,t]},useMutableSource:wu,useSyncExternalStore:bu,useId:Au,unstable_isNewReconciler:!1},tm={readContext:un,useCallback:Mu,useContext:un,useEffect:lo,useImperativeHandle:Iu,useInsertionEffect:Ou,useLayoutEffect:Ru,useMemo:zu,useReducer:aa,useRef:Eu,useState:function(){return aa(es)},useDebugValue:oo,useDeferredValue:function(e){var t=hn();return Te===null?t.memoizedState=e:Fu(t,Te.memoizedState,e)},useTransition:function(){var e=aa(es)[0],t=hn().memoizedState;return[e,t]},useMutableSource:wu,useSyncExternalStore:bu,useId:Au,unstable_isNewReconciler:!1};function fn(e,t){if(e&&e.defaultProps){t=ve({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Xa(e,t,r,s){t=e.memoizedState,r=r(s,t),r=r==null?t:ve({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Li={isMounted:function(e){return(e=e._reactInternals)?_t(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var s=qe(),i=nt(e),a=Pn(s,i);a.payload=t,r!=null&&(a.callback=r),t=Zn(e,a,i),t!==null&&(vn(t,e,i,s),As(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var s=qe(),i=nt(e),a=Pn(s,i);a.tag=1,a.payload=t,r!=null&&(a.callback=r),t=Zn(e,a,i),t!==null&&(vn(t,e,i,s),As(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=qe(),s=nt(e),i=Pn(r,s);i.tag=2,t!=null&&(i.callback=t),t=Zn(e,i,s),t!==null&&(vn(t,e,s,r),As(t,e,s))}};function vc(e,t,r,s,i,a,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,a,l):t.prototype&&t.prototype.isPureReactComponent?!Wr(r,s)||!Wr(i,a):!0}function Bu(e,t,r){var s=!1,i=at,a=t.contextType;return typeof a=="object"&&a!==null?a=un(a):(i=Xe(t)?kt:De.current,s=t.contextTypes,a=(s=s!=null)?rr(e,i):at),t=new t(r,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Li,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function yc(e,t,r,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,s),t.state!==e&&Li.enqueueReplaceState(t,t.state,null)}function Ya(e,t,r,s){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},eo(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=un(a):(a=Xe(t)?kt:De.current,i.context=rr(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Xa(e,t,a,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Li.enqueueReplaceState(i,i.state,null),oi(e,r,i,s),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function lr(e,t){try{var r="",s=t;do r+=Lp(s),s=s.return;while(s);var i=r}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function la(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Ja(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var rm=typeof WeakMap=="function"?WeakMap:Map;function Hu(e,t,r){r=Pn(-1,r),r.tag=3,r.payload={element:null};var s=t.value;return r.callback=function(){pi||(pi=!0,ol=s),Ja(e,t)},r}function qu(e,t,r){r=Pn(-1,r),r.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var i=t.value;r.payload=function(){return s(i)},r.callback=function(){Ja(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){Ja(e,t),typeof s!="function"&&(et===null?et=new Set([this]):et.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),r}function jc(e,t,r){var s=e.pingCache;if(s===null){s=e.pingCache=new rm;var i=new Set;s.set(t,i)}else i=s.get(t),i===void 0&&(i=new Set,s.set(t,i));i.has(r)||(i.add(r),e=xm.bind(null,e,t,r),t.then(e,e))}function Nc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function kc(e,t,r,s,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Pn(-1,1),t.tag=2,Zn(r,t,1))),r.lanes|=1),e)}var sm=An.ReactCurrentOwner,Ge=!1;function He(e,t,r,s){t.child=e===null?yu(t,null,r,s):ir(t,e.child,r,s)}function wc(e,t,r,s,i){r=r.render;var a=t.ref;return er(t,i),s=io(e,t,r,s,a,i),r=ao(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Fn(e,t,i)):(pe&&r&&Wl(t),t.flags|=1,He(e,t,s,i),t.child)}function bc(e,t,r,s,i){if(e===null){var a=r.type;return typeof a=="function"&&!xo(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=a,Uu(e,t,a,s,i)):(e=qs(r.type,null,s,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var l=a.memoizedProps;if(r=r.compare,r=r!==null?r:Wr,r(l,s)&&e.ref===t.ref)return Fn(e,t,i)}return t.flags|=1,e=tt(a,s),e.ref=t.ref,e.return=t,t.child=e}function Uu(e,t,r,s,i){if(e!==null){var a=e.memoizedProps;if(Wr(a,s)&&e.ref===t.ref)if(Ge=!1,t.pendingProps=s=a,(e.lanes&i)!==0)e.flags&131072&&(Ge=!0);else return t.lanes=e.lanes,Fn(e,t,i)}return Za(e,t,r,s,i)}function Ku(e,t,r){var s=t.pendingProps,i=s.children,a=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(Ht,Ze),Ze|=r;else{if(!(r&1073741824))return e=a!==null?a.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,de(Ht,Ze),Ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=a!==null?a.baseLanes:r,de(Ht,Ze),Ze|=s}else a!==null?(s=a.baseLanes|r,t.memoizedState=null):s=r,de(Ht,Ze),Ze|=s;return He(e,t,i,r),t.child}function Wu(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Za(e,t,r,s,i){var a=Xe(r)?kt:De.current;return a=rr(t,a),er(t,i),r=io(e,t,r,s,a,i),s=ao(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Fn(e,t,i)):(pe&&s&&Wl(t),t.flags|=1,He(e,t,r,i),t.child)}function Sc(e,t,r,s,i){if(Xe(r)){var a=!0;ri(t)}else a=!1;if(er(t,i),t.stateNode===null)$s(e,t),Bu(t,r,s),Ya(t,r,s,i),s=!0;else if(e===null){var l=t.stateNode,o=t.memoizedProps;l.props=o;var c=l.context,u=r.contextType;typeof u=="object"&&u!==null?u=un(u):(u=Xe(r)?kt:De.current,u=rr(t,u));var d=r.getDerivedStateFromProps,h=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==s||c!==u)&&yc(t,l,s,u),Bn=!1;var m=t.memoizedState;l.state=m,oi(t,s,l,i),c=t.memoizedState,o!==s||m!==c||Qe.current||Bn?(typeof d=="function"&&(Xa(t,r,d,s),c=t.memoizedState),(o=Bn||vc(t,r,o,s,m,c,u))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=c),l.props=s,l.state=c,l.context=u,s=o):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{l=t.stateNode,Nu(e,t),o=t.memoizedProps,u=t.type===t.elementType?o:fn(t.type,o),l.props=u,h=t.pendingProps,m=l.context,c=r.contextType,typeof c=="object"&&c!==null?c=un(c):(c=Xe(r)?kt:De.current,c=rr(t,c));var w=r.getDerivedStateFromProps;(d=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==h||m!==c)&&yc(t,l,s,c),Bn=!1,m=t.memoizedState,l.state=m,oi(t,s,l,i);var k=t.memoizedState;o!==h||m!==k||Qe.current||Bn?(typeof w=="function"&&(Xa(t,r,w,s),k=t.memoizedState),(u=Bn||vc(t,r,u,s,m,k,c)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(s,k,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(s,k,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=k),l.props=s,l.state=k,l.context=c,s=u):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),s=!1)}return el(e,t,r,s,a,i)}function el(e,t,r,s,i,a){Wu(e,t);var l=(t.flags&128)!==0;if(!s&&!l)return i&&dc(t,r,!1),Fn(e,t,a);s=t.stateNode,sm.current=t;var o=l&&typeof r.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&l?(t.child=ir(t,e.child,null,a),t.child=ir(t,null,o,a)):He(e,t,o,a),t.memoizedState=s.state,i&&dc(t,r,!0),t.child}function Gu(e){var t=e.stateNode;t.pendingContext?cc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&cc(e,t.context,!1),no(e,t.containerInfo)}function Cc(e,t,r,s,i){return sr(),Ql(i),t.flags|=256,He(e,t,r,s),t.child}var nl={dehydrated:null,treeContext:null,retryLane:0};function tl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Qu(e,t,r){var s=t.pendingProps,i=ge.current,a=!1,l=(t.flags&128)!==0,o;if((o=l)||(o=e!==null&&e.memoizedState===null?!1:(i&2)!==0),o?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),de(ge,i&1),e===null)return Ga(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=s.children,e=s.fallback,a?(s=t.mode,a=t.child,l={mode:"hidden",children:l},!(s&1)&&a!==null?(a.childLanes=0,a.pendingProps=l):a=Ri(l,s,0,null),e=Nt(e,s,r,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=tl(r),t.memoizedState=nl,e):co(t,l));if(i=e.memoizedState,i!==null&&(o=i.dehydrated,o!==null))return im(e,t,l,s,o,i,r);if(a){a=s.fallback,l=t.mode,i=e.child,o=i.sibling;var c={mode:"hidden",children:s.children};return!(l&1)&&t.child!==i?(s=t.child,s.childLanes=0,s.pendingProps=c,t.deletions=null):(s=tt(i,c),s.subtreeFlags=i.subtreeFlags&14680064),o!==null?a=tt(o,a):(a=Nt(a,l,r,null),a.flags|=2),a.return=t,s.return=t,s.sibling=a,t.child=s,s=a,a=t.child,l=e.child.memoizedState,l=l===null?tl(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},a.memoizedState=l,a.childLanes=e.childLanes&~r,t.memoizedState=nl,s}return a=e.child,e=a.sibling,s=tt(a,{mode:"visible",children:s.children}),!(t.mode&1)&&(s.lanes=r),s.return=t,s.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=s,t.memoizedState=null,s}function co(e,t){return t=Ri({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ts(e,t,r,s){return s!==null&&Ql(s),ir(t,e.child,null,r),e=co(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function im(e,t,r,s,i,a,l){if(r)return t.flags&256?(t.flags&=-257,s=la(Error(U(422))),Ts(e,t,l,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=s.fallback,i=t.mode,s=Ri({mode:"visible",children:s.children},i,0,null),a=Nt(a,i,l,null),a.flags|=2,s.return=t,a.return=t,s.sibling=a,t.child=s,t.mode&1&&ir(t,e.child,null,l),t.child.memoizedState=tl(l),t.memoizedState=nl,a);if(!(t.mode&1))return Ts(e,t,l,null);if(i.data==="$!"){if(s=i.nextSibling&&i.nextSibling.dataset,s)var o=s.dgst;return s=o,a=Error(U(419)),s=la(a,s,void 0),Ts(e,t,l,s)}if(o=(l&e.childLanes)!==0,Ge||o){if(s=Ee,s!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(s.suspendedLanes|l)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,zn(e,i),vn(s,e,i,-1))}return go(),s=la(Error(U(421))),Ts(e,t,l,s)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=vm.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,nn=Jn(i.nextSibling),tn=t,pe=!0,gn=null,e!==null&&(ln[on++]=On,ln[on++]=Rn,ln[on++]=wt,On=e.id,Rn=e.overflow,wt=t),t=co(t,s.children),t.flags|=4096,t)}function Tc(e,t,r){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),Qa(e.return,t,r)}function oa(e,t,r,s,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:r,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=s,a.tail=r,a.tailMode=i)}function Xu(e,t,r){var s=t.pendingProps,i=s.revealOrder,a=s.tail;if(He(e,t,s.children,r),s=ge.current,s&2)s=s&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Tc(e,r,t);else if(e.tag===19)Tc(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(de(ge,s),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&ci(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),oa(t,!1,i,r,a);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ci(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}oa(t,!0,r,null,a);break;case"together":oa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function $s(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Fn(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),St|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(U(153));if(t.child!==null){for(e=t.child,r=tt(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=tt(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function am(e,t,r){switch(t.tag){case 3:Gu(t),sr();break;case 5:ku(t);break;case 1:Xe(t.type)&&ri(t);break;case 4:no(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,i=t.memoizedProps.value;de(ai,s._currentValue),s._currentValue=i;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(de(ge,ge.current&1),t.flags|=128,null):r&t.child.childLanes?Qu(e,t,r):(de(ge,ge.current&1),e=Fn(e,t,r),e!==null?e.sibling:null);de(ge,ge.current&1);break;case 19:if(s=(r&t.childLanes)!==0,e.flags&128){if(s)return Xu(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),de(ge,ge.current),s)break;return null;case 22:case 23:return t.lanes=0,Ku(e,t,r)}return Fn(e,t,r)}var Yu,rl,Ju,Zu;Yu=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};rl=function(){};Ju=function(e,t,r,s){var i=e.memoizedProps;if(i!==s){e=t.stateNode,xt(bn.current);var a=null;switch(r){case"input":i=Sa(e,i),s=Sa(e,s),a=[];break;case"select":i=ve({},i,{value:void 0}),s=ve({},s,{value:void 0}),a=[];break;case"textarea":i=_a(e,i),s=_a(e,s),a=[];break;default:typeof i.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=ni)}Ea(r,s);var l;r=null;for(u in i)if(!s.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var o=i[u];for(l in o)o.hasOwnProperty(l)&&(r||(r={}),r[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Dr.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in s){var c=s[u];if(o=i!=null?i[u]:void 0,s.hasOwnProperty(u)&&c!==o&&(c!=null||o!=null))if(u==="style")if(o){for(l in o)!o.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(r||(r={}),r[l]="");for(l in c)c.hasOwnProperty(l)&&o[l]!==c[l]&&(r||(r={}),r[l]=c[l])}else r||(a||(a=[]),a.push(u,r)),r=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(a=a||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(a=a||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Dr.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&ue("scroll",e),a||o===c||(a=[])):(a=a||[]).push(u,c))}r&&(a=a||[]).push("style",r);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};Zu=function(e,t,r,s){r!==s&&(t.flags|=4)};function wr(e,t){if(!pe)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,s=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,s|=i.subtreeFlags&14680064,s|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,s|=i.subtreeFlags,s|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=s,e.childLanes=r,t}function lm(e,t,r){var s=t.pendingProps;switch(Gl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(t),null;case 1:return Xe(t.type)&&ti(),Ae(t),null;case 3:return s=t.stateNode,ar(),he(Qe),he(De),ro(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Ss(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,gn!==null&&(ul(gn),gn=null))),rl(e,t),Ae(t),null;case 5:to(t);var i=xt(Jr.current);if(r=t.type,e!==null&&t.stateNode!=null)Ju(e,t,r,s,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(U(166));return Ae(t),null}if(e=xt(bn.current),Ss(t)){s=t.stateNode,r=t.type;var a=t.memoizedProps;switch(s[kn]=t,s[Xr]=a,e=(t.mode&1)!==0,r){case"dialog":ue("cancel",s),ue("close",s);break;case"iframe":case"object":case"embed":ue("load",s);break;case"video":case"audio":for(i=0;i<_r.length;i++)ue(_r[i],s);break;case"source":ue("error",s);break;case"img":case"image":case"link":ue("error",s),ue("load",s);break;case"details":ue("toggle",s);break;case"input":zo(s,a),ue("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!a.multiple},ue("invalid",s);break;case"textarea":Ao(s,a),ue("invalid",s)}Ea(r,a),i=null;for(var l in a)if(a.hasOwnProperty(l)){var o=a[l];l==="children"?typeof o=="string"?s.textContent!==o&&(a.suppressHydrationWarning!==!0&&bs(s.textContent,o,e),i=["children",o]):typeof o=="number"&&s.textContent!==""+o&&(a.suppressHydrationWarning!==!0&&bs(s.textContent,o,e),i=["children",""+o]):Dr.hasOwnProperty(l)&&o!=null&&l==="onScroll"&&ue("scroll",s)}switch(r){case"input":gs(s),Fo(s,a,!0);break;case"textarea":gs(s),Vo(s);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(s.onclick=ni)}s=i,t.updateQueue=s,s!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Td(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=l.createElement(r,{is:s.is}):(e=l.createElement(r),r==="select"&&(l=e,s.multiple?l.multiple=!0:s.size&&(l.size=s.size))):e=l.createElementNS(e,r),e[kn]=t,e[Xr]=s,Yu(e,t,!1,!1),t.stateNode=e;e:{switch(l=Oa(r,s),r){case"dialog":ue("cancel",e),ue("close",e),i=s;break;case"iframe":case"object":case"embed":ue("load",e),i=s;break;case"video":case"audio":for(i=0;i<_r.length;i++)ue(_r[i],e);i=s;break;case"source":ue("error",e),i=s;break;case"img":case"image":case"link":ue("error",e),ue("load",e),i=s;break;case"details":ue("toggle",e),i=s;break;case"input":zo(e,s),i=Sa(e,s),ue("invalid",e);break;case"option":i=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},i=ve({},s,{value:void 0}),ue("invalid",e);break;case"textarea":Ao(e,s),i=_a(e,s),ue("invalid",e);break;default:i=s}Ea(r,i),o=i;for(a in o)if(o.hasOwnProperty(a)){var c=o[a];a==="style"?Ed(e,c):a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&_d(e,c)):a==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&$r(e,c):typeof c=="number"&&$r(e,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Dr.hasOwnProperty(a)?c!=null&&a==="onScroll"&&ue("scroll",e):c!=null&&Pl(e,a,c,l))}switch(r){case"input":gs(e),Fo(e,s,!1);break;case"textarea":gs(e),Vo(e);break;case"option":s.value!=null&&e.setAttribute("value",""+it(s.value));break;case"select":e.multiple=!!s.multiple,a=s.value,a!=null?Xt(e,!!s.multiple,a,!1):s.defaultValue!=null&&Xt(e,!!s.multiple,s.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ni)}switch(r){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ae(t),null;case 6:if(e&&t.stateNode!=null)Zu(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(U(166));if(r=xt(Jr.current),xt(bn.current),Ss(t)){if(s=t.stateNode,r=t.memoizedProps,s[kn]=t,(a=s.nodeValue!==r)&&(e=tn,e!==null))switch(e.tag){case 3:bs(s.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&bs(s.nodeValue,r,(e.mode&1)!==0)}a&&(t.flags|=4)}else s=(r.nodeType===9?r:r.ownerDocument).createTextNode(s),s[kn]=t,t.stateNode=s}return Ae(t),null;case 13:if(he(ge),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(pe&&nn!==null&&t.mode&1&&!(t.flags&128))xu(),sr(),t.flags|=98560,a=!1;else if(a=Ss(t),s!==null&&s.dehydrated!==null){if(e===null){if(!a)throw Error(U(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(U(317));a[kn]=t}else sr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ae(t),a=!1}else gn!==null&&(ul(gn),gn=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,t.mode&1&&(e===null||ge.current&1?_e===0&&(_e=3):go())),t.updateQueue!==null&&(t.flags|=4),Ae(t),null);case 4:return ar(),rl(e,t),e===null&&Gr(t.stateNode.containerInfo),Ae(t),null;case 10:return Jl(t.type._context),Ae(t),null;case 17:return Xe(t.type)&&ti(),Ae(t),null;case 19:if(he(ge),a=t.memoizedState,a===null)return Ae(t),null;if(s=(t.flags&128)!==0,l=a.rendering,l===null)if(s)wr(a,!1);else{if(_e!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=ci(e),l!==null){for(t.flags|=128,wr(a,!1),s=l.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=r,r=t.child;r!==null;)a=r,e=s,a.flags&=14680066,l=a.alternate,l===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return de(ge,ge.current&1|2),t.child}e=e.sibling}a.tail!==null&&we()>or&&(t.flags|=128,s=!0,wr(a,!1),t.lanes=4194304)}else{if(!s)if(e=ci(l),e!==null){if(t.flags|=128,s=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),wr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!pe)return Ae(t),null}else 2*we()-a.renderingStartTime>or&&r!==1073741824&&(t.flags|=128,s=!0,wr(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(r=a.last,r!==null?r.sibling=l:t.child=l,a.last=l)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=we(),t.sibling=null,r=ge.current,de(ge,s?r&1|2:r&1),t):(Ae(t),null);case 22:case 23:return mo(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&t.mode&1?Ze&1073741824&&(Ae(t),t.subtreeFlags&6&&(t.flags|=8192)):Ae(t),null;case 24:return null;case 25:return null}throw Error(U(156,t.tag))}function om(e,t){switch(Gl(t),t.tag){case 1:return Xe(t.type)&&ti(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ar(),he(Qe),he(De),ro(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return to(t),null;case 13:if(he(ge),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(U(340));sr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return he(ge),null;case 4:return ar(),null;case 10:return Jl(t.type._context),null;case 22:case 23:return mo(),null;case 24:return null;default:return null}}var _s=!1,Ve=!1,cm=typeof WeakSet=="function"?WeakSet:Set,Q=null;function Bt(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(s){je(e,t,s)}else r.current=null}function sl(e,t,r){try{r()}catch(s){je(e,t,s)}}var _c=!1;function dm(e,t){if($a=Js,e=su(),Kl(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var s=r.getSelection&&r.getSelection();if(s&&s.rangeCount!==0){r=s.anchorNode;var i=s.anchorOffset,a=s.focusNode;s=s.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var l=0,o=-1,c=-1,u=0,d=0,h=e,m=null;n:for(;;){for(var w;h!==r||i!==0&&h.nodeType!==3||(o=l+i),h!==a||s!==0&&h.nodeType!==3||(c=l+s),h.nodeType===3&&(l+=h.nodeValue.length),(w=h.firstChild)!==null;)m=h,h=w;for(;;){if(h===e)break n;if(m===r&&++u===i&&(o=l),m===a&&++d===s&&(c=l),(w=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=w}r=o===-1||c===-1?null:{start:o,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(Ba={focusedElem:e,selectionRange:r},Js=!1,Q=t;Q!==null;)if(t=Q,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Q=e;else for(;Q!==null;){t=Q;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var N=k.memoizedProps,y=k.memoizedState,f=t.stateNode,g=f.getSnapshotBeforeUpdate(t.elementType===t.type?N:fn(t.type,N),y);f.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(_){je(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,Q=e;break}Q=t.return}return k=_c,_c=!1,k}function zr(e,t,r){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var i=s=s.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&sl(t,r,a)}i=i.next}while(i!==s)}}function Ei(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var s=r.create;r.destroy=s()}r=r.next}while(r!==t)}}function il(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function eh(e){var t=e.alternate;t!==null&&(e.alternate=null,eh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[kn],delete t[Xr],delete t[Ua],delete t[Kf],delete t[Wf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function nh(e){return e.tag===5||e.tag===3||e.tag===4}function Lc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||nh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function al(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=ni));else if(s!==4&&(e=e.child,e!==null))for(al(e,t,r),e=e.sibling;e!==null;)al(e,t,r),e=e.sibling}function ll(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(ll(e,t,r),e=e.sibling;e!==null;)ll(e,t,r),e=e.sibling}var Re=null,mn=!1;function Vn(e,t,r){for(r=r.child;r!==null;)th(e,t,r),r=r.sibling}function th(e,t,r){if(wn&&typeof wn.onCommitFiberUnmount=="function")try{wn.onCommitFiberUnmount(ki,r)}catch{}switch(r.tag){case 5:Ve||Bt(r,t);case 6:var s=Re,i=mn;Re=null,Vn(e,t,r),Re=s,mn=i,Re!==null&&(mn?(e=Re,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Re.removeChild(r.stateNode));break;case 18:Re!==null&&(mn?(e=Re,r=r.stateNode,e.nodeType===8?na(e.parentNode,r):e.nodeType===1&&na(e,r),Ur(e)):na(Re,r.stateNode));break;case 4:s=Re,i=mn,Re=r.stateNode.containerInfo,mn=!0,Vn(e,t,r),Re=s,mn=i;break;case 0:case 11:case 14:case 15:if(!Ve&&(s=r.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){i=s=s.next;do{var a=i,l=a.destroy;a=a.tag,l!==void 0&&(a&2||a&4)&&sl(r,t,l),i=i.next}while(i!==s)}Vn(e,t,r);break;case 1:if(!Ve&&(Bt(r,t),s=r.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=r.memoizedProps,s.state=r.memoizedState,s.componentWillUnmount()}catch(o){je(r,t,o)}Vn(e,t,r);break;case 21:Vn(e,t,r);break;case 22:r.mode&1?(Ve=(s=Ve)||r.memoizedState!==null,Vn(e,t,r),Ve=s):Vn(e,t,r);break;default:Vn(e,t,r)}}function Ec(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new cm),t.forEach(function(s){var i=ym.bind(null,e,s);r.has(s)||(r.add(s),s.then(i,i))})}}function pn(e,t){var r=t.deletions;if(r!==null)for(var s=0;s<r.length;s++){var i=r[s];try{var a=e,l=t,o=l;e:for(;o!==null;){switch(o.tag){case 5:Re=o.stateNode,mn=!1;break e;case 3:Re=o.stateNode.containerInfo,mn=!0;break e;case 4:Re=o.stateNode.containerInfo,mn=!0;break e}o=o.return}if(Re===null)throw Error(U(160));th(a,l,i),Re=null,mn=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){je(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)rh(t,e),t=t.sibling}function rh(e,t){var r=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(pn(t,e),jn(e),s&4){try{zr(3,e,e.return),Ei(3,e)}catch(N){je(e,e.return,N)}try{zr(5,e,e.return)}catch(N){je(e,e.return,N)}}break;case 1:pn(t,e),jn(e),s&512&&r!==null&&Bt(r,r.return);break;case 5:if(pn(t,e),jn(e),s&512&&r!==null&&Bt(r,r.return),e.flags&32){var i=e.stateNode;try{$r(i,"")}catch(N){je(e,e.return,N)}}if(s&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,l=r!==null?r.memoizedProps:a,o=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{o==="input"&&a.type==="radio"&&a.name!=null&&Sd(i,a),Oa(o,l);var u=Oa(o,a);for(l=0;l<c.length;l+=2){var d=c[l],h=c[l+1];d==="style"?Ed(i,h):d==="dangerouslySetInnerHTML"?_d(i,h):d==="children"?$r(i,h):Pl(i,d,h,u)}switch(o){case"input":Ca(i,a);break;case"textarea":Cd(i,a);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var w=a.value;w!=null?Xt(i,!!a.multiple,w,!1):m!==!!a.multiple&&(a.defaultValue!=null?Xt(i,!!a.multiple,a.defaultValue,!0):Xt(i,!!a.multiple,a.multiple?[]:"",!1))}i[Xr]=a}catch(N){je(e,e.return,N)}}break;case 6:if(pn(t,e),jn(e),s&4){if(e.stateNode===null)throw Error(U(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(N){je(e,e.return,N)}}break;case 3:if(pn(t,e),jn(e),s&4&&r!==null&&r.memoizedState.isDehydrated)try{Ur(t.containerInfo)}catch(N){je(e,e.return,N)}break;case 4:pn(t,e),jn(e);break;case 13:pn(t,e),jn(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(po=we())),s&4&&Ec(e);break;case 22:if(d=r!==null&&r.memoizedState!==null,e.mode&1?(Ve=(u=Ve)||d,pn(t,e),Ve=u):pn(t,e),jn(e),s&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(Q=e,d=e.child;d!==null;){for(h=Q=d;Q!==null;){switch(m=Q,w=m.child,m.tag){case 0:case 11:case 14:case 15:zr(4,m,m.return);break;case 1:Bt(m,m.return);var k=m.stateNode;if(typeof k.componentWillUnmount=="function"){s=m,r=m.return;try{t=s,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(N){je(s,r,N)}}break;case 5:Bt(m,m.return);break;case 22:if(m.memoizedState!==null){Rc(h);continue}}w!==null?(w.return=m,Q=w):Rc(h)}d=d.sibling}e:for(d=null,h=e;;){if(h.tag===5){if(d===null){d=h;try{i=h.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(o=h.stateNode,c=h.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=Ld("display",l))}catch(N){je(e,e.return,N)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(N){je(e,e.return,N)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:pn(t,e),jn(e),s&4&&Ec(e);break;case 21:break;default:pn(t,e),jn(e)}}function jn(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(nh(r)){var s=r;break e}r=r.return}throw Error(U(160))}switch(s.tag){case 5:var i=s.stateNode;s.flags&32&&($r(i,""),s.flags&=-33);var a=Lc(e);ll(e,a,i);break;case 3:case 4:var l=s.stateNode.containerInfo,o=Lc(e);al(e,o,l);break;default:throw Error(U(161))}}catch(c){je(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function um(e,t,r){Q=e,sh(e)}function sh(e,t,r){for(var s=(e.mode&1)!==0;Q!==null;){var i=Q,a=i.child;if(i.tag===22&&s){var l=i.memoizedState!==null||_s;if(!l){var o=i.alternate,c=o!==null&&o.memoizedState!==null||Ve;o=_s;var u=Ve;if(_s=l,(Ve=c)&&!u)for(Q=i;Q!==null;)l=Q,c=l.child,l.tag===22&&l.memoizedState!==null?Pc(i):c!==null?(c.return=l,Q=c):Pc(i);for(;a!==null;)Q=a,sh(a),a=a.sibling;Q=i,_s=o,Ve=u}Oc(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,Q=a):Oc(e)}}function Oc(e){for(;Q!==null;){var t=Q;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ve||Ei(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!Ve)if(r===null)s.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:fn(t.type,r.memoizedProps);s.componentDidUpdate(i,r.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&mc(t,a,s);break;case 3:var l=t.updateQueue;if(l!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}mc(t,l,r)}break;case 5:var o=t.stateNode;if(r===null&&t.flags&4){r=o;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&Ur(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}Ve||t.flags&512&&il(t)}catch(m){je(t,t.return,m)}}if(t===e){Q=null;break}if(r=t.sibling,r!==null){r.return=t.return,Q=r;break}Q=t.return}}function Rc(e){for(;Q!==null;){var t=Q;if(t===e){Q=null;break}var r=t.sibling;if(r!==null){r.return=t.return,Q=r;break}Q=t.return}}function Pc(e){for(;Q!==null;){var t=Q;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Ei(4,t)}catch(c){je(t,r,c)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var i=t.return;try{s.componentDidMount()}catch(c){je(t,i,c)}}var a=t.return;try{il(t)}catch(c){je(t,a,c)}break;case 5:var l=t.return;try{il(t)}catch(c){je(t,l,c)}}}catch(c){je(t,t.return,c)}if(t===e){Q=null;break}var o=t.sibling;if(o!==null){o.return=t.return,Q=o;break}Q=t.return}}var hm=Math.ceil,hi=An.ReactCurrentDispatcher,uo=An.ReactCurrentOwner,dn=An.ReactCurrentBatchConfig,se=0,Ee=null,Se=null,Ie=0,Ze=0,Ht=ot(0),_e=0,ts=null,St=0,Oi=0,ho=0,Fr=null,We=null,po=0,or=1/0,_n=null,pi=!1,ol=null,et=null,Ls=!1,Kn=null,fi=0,Ar=0,cl=null,Bs=-1,Hs=0;function qe(){return se&6?we():Bs!==-1?Bs:Bs=we()}function nt(e){return e.mode&1?se&2&&Ie!==0?Ie&-Ie:Qf.transition!==null?(Hs===0&&(Hs=Bd()),Hs):(e=ae,e!==0||(e=window.event,e=e===void 0?16:Qd(e.type)),e):1}function vn(e,t,r,s){if(50<Ar)throw Ar=0,cl=null,Error(U(185));ls(e,r,s),(!(se&2)||e!==Ee)&&(e===Ee&&(!(se&2)&&(Oi|=r),_e===4&&qn(e,Ie)),Ye(e,s),r===1&&se===0&&!(t.mode&1)&&(or=we()+500,Ti&&ct()))}function Ye(e,t){var r=e.callbackNode;Gp(e,t);var s=Ys(e,e===Ee?Ie:0);if(s===0)r!==null&&Bo(r),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(r!=null&&Bo(r),t===1)e.tag===0?Gf(Ic.bind(null,e)):fu(Ic.bind(null,e)),qf(function(){!(se&6)&&ct()}),r=null;else{switch(Hd(s)){case 1:r=Al;break;case 4:r=Dd;break;case 16:r=Xs;break;case 536870912:r=$d;break;default:r=Xs}r=hh(r,ih.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function ih(e,t){if(Bs=-1,Hs=0,se&6)throw Error(U(327));var r=e.callbackNode;if(nr()&&e.callbackNode!==r)return null;var s=Ys(e,e===Ee?Ie:0);if(s===0)return null;if(s&30||s&e.expiredLanes||t)t=mi(e,s);else{t=s;var i=se;se|=2;var a=lh();(Ee!==e||Ie!==t)&&(_n=null,or=we()+500,jt(e,t));do try{mm();break}catch(o){ah(e,o)}while(!0);Yl(),hi.current=a,se=i,Se!==null?t=0:(Ee=null,Ie=0,t=_e)}if(t!==0){if(t===2&&(i=za(e),i!==0&&(s=i,t=dl(e,i))),t===1)throw r=ts,jt(e,0),qn(e,s),Ye(e,we()),r;if(t===6)qn(e,s);else{if(i=e.current.alternate,!(s&30)&&!pm(i)&&(t=mi(e,s),t===2&&(a=za(e),a!==0&&(s=a,t=dl(e,a))),t===1))throw r=ts,jt(e,0),qn(e,s),Ye(e,we()),r;switch(e.finishedWork=i,e.finishedLanes=s,t){case 0:case 1:throw Error(U(345));case 2:ft(e,We,_n);break;case 3:if(qn(e,s),(s&130023424)===s&&(t=po+500-we(),10<t)){if(Ys(e,0)!==0)break;if(i=e.suspendedLanes,(i&s)!==s){qe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=qa(ft.bind(null,e,We,_n),t);break}ft(e,We,_n);break;case 4:if(qn(e,s),(s&4194240)===s)break;for(t=e.eventTimes,i=-1;0<s;){var l=31-xn(s);a=1<<l,l=t[l],l>i&&(i=l),s&=~a}if(s=i,s=we()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*hm(s/1960))-s,10<s){e.timeoutHandle=qa(ft.bind(null,e,We,_n),s);break}ft(e,We,_n);break;case 5:ft(e,We,_n);break;default:throw Error(U(329))}}}return Ye(e,we()),e.callbackNode===r?ih.bind(null,e):null}function dl(e,t){var r=Fr;return e.current.memoizedState.isDehydrated&&(jt(e,t).flags|=256),e=mi(e,t),e!==2&&(t=We,We=r,t!==null&&ul(t)),e}function ul(e){We===null?We=e:We.push.apply(We,e)}function pm(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var s=0;s<r.length;s++){var i=r[s],a=i.getSnapshot;i=i.value;try{if(!yn(a(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function qn(e,t){for(t&=~ho,t&=~Oi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-xn(t),s=1<<r;e[r]=-1,t&=~s}}function Ic(e){if(se&6)throw Error(U(327));nr();var t=Ys(e,0);if(!(t&1))return Ye(e,we()),null;var r=mi(e,t);if(e.tag!==0&&r===2){var s=za(e);s!==0&&(t=s,r=dl(e,s))}if(r===1)throw r=ts,jt(e,0),qn(e,t),Ye(e,we()),r;if(r===6)throw Error(U(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ft(e,We,_n),Ye(e,we()),null}function fo(e,t){var r=se;se|=1;try{return e(t)}finally{se=r,se===0&&(or=we()+500,Ti&&ct())}}function Ct(e){Kn!==null&&Kn.tag===0&&!(se&6)&&nr();var t=se;se|=1;var r=dn.transition,s=ae;try{if(dn.transition=null,ae=1,e)return e()}finally{ae=s,dn.transition=r,se=t,!(se&6)&&ct()}}function mo(){Ze=Ht.current,he(Ht)}function jt(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Hf(r)),Se!==null)for(r=Se.return;r!==null;){var s=r;switch(Gl(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&ti();break;case 3:ar(),he(Qe),he(De),ro();break;case 5:to(s);break;case 4:ar();break;case 13:he(ge);break;case 19:he(ge);break;case 10:Jl(s.type._context);break;case 22:case 23:mo()}r=r.return}if(Ee=e,Se=e=tt(e.current,null),Ie=Ze=t,_e=0,ts=null,ho=Oi=St=0,We=Fr=null,gt!==null){for(t=0;t<gt.length;t++)if(r=gt[t],s=r.interleaved,s!==null){r.interleaved=null;var i=s.next,a=r.pending;if(a!==null){var l=a.next;a.next=i,s.next=l}r.pending=s}gt=null}return e}function ah(e,t){do{var r=Se;try{if(Yl(),Vs.current=ui,di){for(var s=xe.memoizedState;s!==null;){var i=s.queue;i!==null&&(i.pending=null),s=s.next}di=!1}if(bt=0,Le=Te=xe=null,Mr=!1,Zr=0,uo.current=null,r===null||r.return===null){_e=1,ts=t,Se=null;break}e:{var a=e,l=r.return,o=r,c=t;if(t=Ie,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=o,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var w=Nc(l);if(w!==null){w.flags&=-257,kc(w,l,o,a,t),w.mode&1&&jc(a,u,t),t=w,c=u;var k=t.updateQueue;if(k===null){var N=new Set;N.add(c),t.updateQueue=N}else k.add(c);break e}else{if(!(t&1)){jc(a,u,t),go();break e}c=Error(U(426))}}else if(pe&&o.mode&1){var y=Nc(l);if(y!==null){!(y.flags&65536)&&(y.flags|=256),kc(y,l,o,a,t),Ql(lr(c,o));break e}}a=c=lr(c,o),_e!==4&&(_e=2),Fr===null?Fr=[a]:Fr.push(a),a=l;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var f=Hu(a,c,t);fc(a,f);break e;case 1:o=c;var g=a.type,x=a.stateNode;if(!(a.flags&128)&&(typeof g.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(et===null||!et.has(x)))){a.flags|=65536,t&=-t,a.lanes|=t;var _=qu(a,o,t);fc(a,_);break e}}a=a.return}while(a!==null)}ch(r)}catch(j){t=j,Se===r&&r!==null&&(Se=r=r.return);continue}break}while(!0)}function lh(){var e=hi.current;return hi.current=ui,e===null?ui:e}function go(){(_e===0||_e===3||_e===2)&&(_e=4),Ee===null||!(St&268435455)&&!(Oi&268435455)||qn(Ee,Ie)}function mi(e,t){var r=se;se|=2;var s=lh();(Ee!==e||Ie!==t)&&(_n=null,jt(e,t));do try{fm();break}catch(i){ah(e,i)}while(!0);if(Yl(),se=r,hi.current=s,Se!==null)throw Error(U(261));return Ee=null,Ie=0,_e}function fm(){for(;Se!==null;)oh(Se)}function mm(){for(;Se!==null&&!Vp();)oh(Se)}function oh(e){var t=uh(e.alternate,e,Ze);e.memoizedProps=e.pendingProps,t===null?ch(e):Se=t,uo.current=null}function ch(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=om(r,t),r!==null){r.flags&=32767,Se=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{_e=6,Se=null;return}}else if(r=lm(r,t,Ze),r!==null){Se=r;return}if(t=t.sibling,t!==null){Se=t;return}Se=t=e}while(t!==null);_e===0&&(_e=5)}function ft(e,t,r){var s=ae,i=dn.transition;try{dn.transition=null,ae=1,gm(e,t,r,s)}finally{dn.transition=i,ae=s}return null}function gm(e,t,r,s){do nr();while(Kn!==null);if(se&6)throw Error(U(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(U(177));e.callbackNode=null,e.callbackPriority=0;var a=r.lanes|r.childLanes;if(Qp(e,a),e===Ee&&(Se=Ee=null,Ie=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Ls||(Ls=!0,hh(Xs,function(){return nr(),null})),a=(r.flags&15990)!==0,r.subtreeFlags&15990||a){a=dn.transition,dn.transition=null;var l=ae;ae=1;var o=se;se|=4,uo.current=null,dm(e,r),rh(r,e),zf(Ba),Js=!!$a,Ba=$a=null,e.current=r,um(r),Dp(),se=o,ae=l,dn.transition=a}else e.current=r;if(Ls&&(Ls=!1,Kn=e,fi=i),a=e.pendingLanes,a===0&&(et=null),Hp(r.stateNode),Ye(e,we()),t!==null)for(s=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],s(i.value,{componentStack:i.stack,digest:i.digest});if(pi)throw pi=!1,e=ol,ol=null,e;return fi&1&&e.tag!==0&&nr(),a=e.pendingLanes,a&1?e===cl?Ar++:(Ar=0,cl=e):Ar=0,ct(),null}function nr(){if(Kn!==null){var e=Hd(fi),t=dn.transition,r=ae;try{if(dn.transition=null,ae=16>e?16:e,Kn===null)var s=!1;else{if(e=Kn,Kn=null,fi=0,se&6)throw Error(U(331));var i=se;for(se|=4,Q=e.current;Q!==null;){var a=Q,l=a.child;if(Q.flags&16){var o=a.deletions;if(o!==null){for(var c=0;c<o.length;c++){var u=o[c];for(Q=u;Q!==null;){var d=Q;switch(d.tag){case 0:case 11:case 15:zr(8,d,a)}var h=d.child;if(h!==null)h.return=d,Q=h;else for(;Q!==null;){d=Q;var m=d.sibling,w=d.return;if(eh(d),d===u){Q=null;break}if(m!==null){m.return=w,Q=m;break}Q=w}}}var k=a.alternate;if(k!==null){var N=k.child;if(N!==null){k.child=null;do{var y=N.sibling;N.sibling=null,N=y}while(N!==null)}}Q=a}}if(a.subtreeFlags&2064&&l!==null)l.return=a,Q=l;else e:for(;Q!==null;){if(a=Q,a.flags&2048)switch(a.tag){case 0:case 11:case 15:zr(9,a,a.return)}var f=a.sibling;if(f!==null){f.return=a.return,Q=f;break e}Q=a.return}}var g=e.current;for(Q=g;Q!==null;){l=Q;var x=l.child;if(l.subtreeFlags&2064&&x!==null)x.return=l,Q=x;else e:for(l=g;Q!==null;){if(o=Q,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Ei(9,o)}}catch(j){je(o,o.return,j)}if(o===l){Q=null;break e}var _=o.sibling;if(_!==null){_.return=o.return,Q=_;break e}Q=o.return}}if(se=i,ct(),wn&&typeof wn.onPostCommitFiberRoot=="function")try{wn.onPostCommitFiberRoot(ki,e)}catch{}s=!0}return s}finally{ae=r,dn.transition=t}}return!1}function Mc(e,t,r){t=lr(r,t),t=Hu(e,t,1),e=Zn(e,t,1),t=qe(),e!==null&&(ls(e,1,t),Ye(e,t))}function je(e,t,r){if(e.tag===3)Mc(e,e,r);else for(;t!==null;){if(t.tag===3){Mc(t,e,r);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(et===null||!et.has(s))){e=lr(r,e),e=qu(t,e,1),t=Zn(t,e,1),e=qe(),t!==null&&(ls(t,1,e),Ye(t,e));break}}t=t.return}}function xm(e,t,r){var s=e.pingCache;s!==null&&s.delete(t),t=qe(),e.pingedLanes|=e.suspendedLanes&r,Ee===e&&(Ie&r)===r&&(_e===4||_e===3&&(Ie&130023424)===Ie&&500>we()-po?jt(e,0):ho|=r),Ye(e,t)}function dh(e,t){t===0&&(e.mode&1?(t=ys,ys<<=1,!(ys&130023424)&&(ys=4194304)):t=1);var r=qe();e=zn(e,t),e!==null&&(ls(e,t,r),Ye(e,r))}function vm(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),dh(e,r)}function ym(e,t){var r=0;switch(e.tag){case 13:var s=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(U(314))}s!==null&&s.delete(t),dh(e,r)}var uh;uh=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Qe.current)Ge=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Ge=!1,am(e,t,r);Ge=!!(e.flags&131072)}else Ge=!1,pe&&t.flags&1048576&&mu(t,ii,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;$s(e,t),e=t.pendingProps;var i=rr(t,De.current);er(t,r),i=io(null,t,s,e,i,r);var a=ao();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Xe(s)?(a=!0,ri(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,eo(t),i.updater=Li,t.stateNode=i,i._reactInternals=t,Ya(t,s,e,r),t=el(null,t,s,!0,a,r)):(t.tag=0,pe&&a&&Wl(t),He(null,t,i,r),t=t.child),t;case 16:s=t.elementType;e:{switch($s(e,t),e=t.pendingProps,i=s._init,s=i(s._payload),t.type=s,i=t.tag=Nm(s),e=fn(s,e),i){case 0:t=Za(null,t,s,e,r);break e;case 1:t=Sc(null,t,s,e,r);break e;case 11:t=wc(null,t,s,e,r);break e;case 14:t=bc(null,t,s,fn(s.type,e),r);break e}throw Error(U(306,s,""))}return t;case 0:return s=t.type,i=t.pendingProps,i=t.elementType===s?i:fn(s,i),Za(e,t,s,i,r);case 1:return s=t.type,i=t.pendingProps,i=t.elementType===s?i:fn(s,i),Sc(e,t,s,i,r);case 3:e:{if(Gu(t),e===null)throw Error(U(387));s=t.pendingProps,a=t.memoizedState,i=a.element,Nu(e,t),oi(t,s,null,r);var l=t.memoizedState;if(s=l.element,a.isDehydrated)if(a={element:s,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=lr(Error(U(423)),t),t=Cc(e,t,s,r,i);break e}else if(s!==i){i=lr(Error(U(424)),t),t=Cc(e,t,s,r,i);break e}else for(nn=Jn(t.stateNode.containerInfo.firstChild),tn=t,pe=!0,gn=null,r=yu(t,null,s,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(sr(),s===i){t=Fn(e,t,r);break e}He(e,t,s,r)}t=t.child}return t;case 5:return ku(t),e===null&&Ga(t),s=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,l=i.children,Ha(s,i)?l=null:a!==null&&Ha(s,a)&&(t.flags|=32),Wu(e,t),He(e,t,l,r),t.child;case 6:return e===null&&Ga(t),null;case 13:return Qu(e,t,r);case 4:return no(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=ir(t,null,s,r):He(e,t,s,r),t.child;case 11:return s=t.type,i=t.pendingProps,i=t.elementType===s?i:fn(s,i),wc(e,t,s,i,r);case 7:return He(e,t,t.pendingProps,r),t.child;case 8:return He(e,t,t.pendingProps.children,r),t.child;case 12:return He(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(s=t.type._context,i=t.pendingProps,a=t.memoizedProps,l=i.value,de(ai,s._currentValue),s._currentValue=l,a!==null)if(yn(a.value,l)){if(a.children===i.children&&!Qe.current){t=Fn(e,t,r);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var o=a.dependencies;if(o!==null){l=a.child;for(var c=o.firstContext;c!==null;){if(c.context===s){if(a.tag===1){c=Pn(-1,r&-r),c.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}a.lanes|=r,c=a.alternate,c!==null&&(c.lanes|=r),Qa(a.return,r,t),o.lanes|=r;break}c=c.next}}else if(a.tag===10)l=a.type===t.type?null:a.child;else if(a.tag===18){if(l=a.return,l===null)throw Error(U(341));l.lanes|=r,o=l.alternate,o!==null&&(o.lanes|=r),Qa(l,r,t),l=a.sibling}else l=a.child;if(l!==null)l.return=a;else for(l=a;l!==null;){if(l===t){l=null;break}if(a=l.sibling,a!==null){a.return=l.return,l=a;break}l=l.return}a=l}He(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,s=t.pendingProps.children,er(t,r),i=un(i),s=s(i),t.flags|=1,He(e,t,s,r),t.child;case 14:return s=t.type,i=fn(s,t.pendingProps),i=fn(s.type,i),bc(e,t,s,i,r);case 15:return Uu(e,t,t.type,t.pendingProps,r);case 17:return s=t.type,i=t.pendingProps,i=t.elementType===s?i:fn(s,i),$s(e,t),t.tag=1,Xe(s)?(e=!0,ri(t)):e=!1,er(t,r),Bu(t,s,i),Ya(t,s,i,r),el(null,t,s,!0,e,r);case 19:return Xu(e,t,r);case 22:return Ku(e,t,r)}throw Error(U(156,t.tag))};function hh(e,t){return Vd(e,t)}function jm(e,t,r,s){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function cn(e,t,r,s){return new jm(e,t,r,s)}function xo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Nm(e){if(typeof e=="function")return xo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ml)return 11;if(e===zl)return 14}return 2}function tt(e,t){var r=e.alternate;return r===null?(r=cn(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function qs(e,t,r,s,i,a){var l=2;if(s=e,typeof e=="function")xo(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Pt:return Nt(r.children,i,a,t);case Il:l=8,i|=8;break;case Na:return e=cn(12,r,t,i|2),e.elementType=Na,e.lanes=a,e;case ka:return e=cn(13,r,t,i),e.elementType=ka,e.lanes=a,e;case wa:return e=cn(19,r,t,i),e.elementType=wa,e.lanes=a,e;case kd:return Ri(r,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case jd:l=10;break e;case Nd:l=9;break e;case Ml:l=11;break e;case zl:l=14;break e;case $n:l=16,s=null;break e}throw Error(U(130,e==null?e:typeof e,""))}return t=cn(l,r,t,i),t.elementType=e,t.type=s,t.lanes=a,t}function Nt(e,t,r,s){return e=cn(7,e,s,t),e.lanes=r,e}function Ri(e,t,r,s){return e=cn(22,e,s,t),e.elementType=kd,e.lanes=r,e.stateNode={isHidden:!1},e}function ca(e,t,r){return e=cn(6,e,null,t),e.lanes=r,e}function da(e,t,r){return t=cn(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function km(e,t,r,s,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qi(0),this.expirationTimes=qi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qi(0),this.identifierPrefix=s,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function vo(e,t,r,s,i,a,l,o,c){return e=new km(e,t,r,o,c),t===1?(t=1,a===!0&&(t|=8)):t=0,a=cn(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:s,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},eo(a),e}function wm(e,t,r){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rt,key:s==null?null:""+s,children:e,containerInfo:t,implementation:r}}function ph(e){if(!e)return at;e=e._reactInternals;e:{if(_t(e)!==e||e.tag!==1)throw Error(U(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(U(171))}if(e.tag===1){var r=e.type;if(Xe(r))return pu(e,r,t)}return t}function fh(e,t,r,s,i,a,l,o,c){return e=vo(r,s,!0,e,i,a,l,o,c),e.context=ph(null),r=e.current,s=qe(),i=nt(r),a=Pn(s,i),a.callback=t??null,Zn(r,a,i),e.current.lanes=i,ls(e,i,s),Ye(e,s),e}function Pi(e,t,r,s){var i=t.current,a=qe(),l=nt(i);return r=ph(r),t.context===null?t.context=r:t.pendingContext=r,t=Pn(a,l),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=Zn(i,t,l),e!==null&&(vn(e,i,l,a),As(e,i,l)),l}function gi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function zc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function yo(e,t){zc(e,t),(e=e.alternate)&&zc(e,t)}function bm(){return null}var mh=typeof reportError=="function"?reportError:function(e){console.error(e)};function jo(e){this._internalRoot=e}Ii.prototype.render=jo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(U(409));Pi(e,t,null,null)};Ii.prototype.unmount=jo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ct(function(){Pi(null,e,null,null)}),t[Mn]=null}};function Ii(e){this._internalRoot=e}Ii.prototype.unstable_scheduleHydration=function(e){if(e){var t=Kd();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Hn.length&&t!==0&&t<Hn[r].priority;r++);Hn.splice(r,0,e),r===0&&Gd(e)}};function No(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Mi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Fc(){}function Sm(e,t,r,s,i){if(i){if(typeof s=="function"){var a=s;s=function(){var u=gi(l);a.call(u)}}var l=fh(t,s,e,0,null,!1,!1,"",Fc);return e._reactRootContainer=l,e[Mn]=l.current,Gr(e.nodeType===8?e.parentNode:e),Ct(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof s=="function"){var o=s;s=function(){var u=gi(c);o.call(u)}}var c=vo(e,0,!1,null,null,!1,!1,"",Fc);return e._reactRootContainer=c,e[Mn]=c.current,Gr(e.nodeType===8?e.parentNode:e),Ct(function(){Pi(t,c,r,s)}),c}function zi(e,t,r,s,i){var a=r._reactRootContainer;if(a){var l=a;if(typeof i=="function"){var o=i;i=function(){var c=gi(l);o.call(c)}}Pi(t,l,e,i)}else l=Sm(r,t,e,i,s);return gi(l)}qd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Tr(t.pendingLanes);r!==0&&(Vl(t,r|1),Ye(t,we()),!(se&6)&&(or=we()+500,ct()))}break;case 13:Ct(function(){var s=zn(e,1);if(s!==null){var i=qe();vn(s,e,1,i)}}),yo(e,1)}};Dl=function(e){if(e.tag===13){var t=zn(e,134217728);if(t!==null){var r=qe();vn(t,e,134217728,r)}yo(e,134217728)}};Ud=function(e){if(e.tag===13){var t=nt(e),r=zn(e,t);if(r!==null){var s=qe();vn(r,e,t,s)}yo(e,t)}};Kd=function(){return ae};Wd=function(e,t){var r=ae;try{return ae=e,t()}finally{ae=r}};Pa=function(e,t,r){switch(t){case"input":if(Ca(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var s=r[t];if(s!==e&&s.form===e.form){var i=Ci(s);if(!i)throw Error(U(90));bd(s),Ca(s,i)}}}break;case"textarea":Cd(e,r);break;case"select":t=r.value,t!=null&&Xt(e,!!r.multiple,t,!1)}};Pd=fo;Id=Ct;var Cm={usingClientEntryPoint:!1,Events:[cs,Ft,Ci,Od,Rd,fo]},br={findFiberByHostInstance:mt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Tm={bundleType:br.bundleType,version:br.version,rendererPackageName:br.rendererPackageName,rendererConfig:br.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:An.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Fd(e),e===null?null:e.stateNode},findFiberByHostInstance:br.findFiberByHostInstance||bm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Es=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Es.isDisabled&&Es.supportsFiber)try{ki=Es.inject(Tm),wn=Es}catch{}}sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cm;sn.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!No(t))throw Error(U(200));return wm(e,t,null,r)};sn.createRoot=function(e,t){if(!No(e))throw Error(U(299));var r=!1,s="",i=mh;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=vo(e,1,!1,null,null,r,!1,s,i),e[Mn]=t.current,Gr(e.nodeType===8?e.parentNode:e),new jo(t)};sn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(U(188)):(e=Object.keys(e).join(","),Error(U(268,e)));return e=Fd(t),e=e===null?null:e.stateNode,e};sn.flushSync=function(e){return Ct(e)};sn.hydrate=function(e,t,r){if(!Mi(t))throw Error(U(200));return zi(null,e,t,!0,r)};sn.hydrateRoot=function(e,t,r){if(!No(e))throw Error(U(405));var s=r!=null&&r.hydratedSources||null,i=!1,a="",l=mh;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),t=fh(t,null,e,1,r??null,i,!1,a,l),e[Mn]=t.current,Gr(e),s)for(e=0;e<s.length;e++)r=s[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new Ii(t)};sn.render=function(e,t,r){if(!Mi(t))throw Error(U(200));return zi(null,e,t,!1,r)};sn.unmountComponentAtNode=function(e){if(!Mi(e))throw Error(U(40));return e._reactRootContainer?(Ct(function(){zi(null,null,e,!1,function(){e._reactRootContainer=null,e[Mn]=null})}),!0):!1};sn.unstable_batchedUpdates=fo;sn.unstable_renderSubtreeIntoContainer=function(e,t,r,s){if(!Mi(r))throw Error(U(200));if(e==null||e._reactInternals===void 0)throw Error(U(38));return zi(e,t,r,!1,s)};sn.version="18.3.1-next-f1338f8080-20240426";function gh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gh)}catch(e){console.error(e)}}gh(),gd.exports=sn;var _m=gd.exports,Ac=_m;ya.createRoot=Ac.createRoot,ya.hydrateRoot=Ac.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rs(){return rs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},rs.apply(this,arguments)}var Wn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Wn||(Wn={}));const Vc="popstate";function Lm(e){e===void 0&&(e={});function t(s,i){let{pathname:a,search:l,hash:o}=s.location;return hl("",{pathname:a,search:l,hash:o},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function r(s,i){return typeof i=="string"?i:xi(i)}return Om(t,r,null,e)}function Ce(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ko(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Em(){return Math.random().toString(36).substr(2,8)}function Dc(e,t){return{usr:e.state,key:e.key,idx:t}}function hl(e,t,r,s){return r===void 0&&(r=null),rs({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?hr(t):t,{state:r,key:t&&t.key||s||Em()})}function xi(e){let{pathname:t="/",search:r="",hash:s=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),s&&s!=="#"&&(t+=s.charAt(0)==="#"?s:"#"+s),t}function hr(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let s=e.indexOf("?");s>=0&&(t.search=e.substr(s),e=e.substr(0,s)),e&&(t.pathname=e)}return t}function Om(e,t,r,s){s===void 0&&(s={});let{window:i=document.defaultView,v5Compat:a=!1}=s,l=i.history,o=Wn.Pop,c=null,u=d();u==null&&(u=0,l.replaceState(rs({},l.state,{idx:u}),""));function d(){return(l.state||{idx:null}).idx}function h(){o=Wn.Pop;let y=d(),f=y==null?null:y-u;u=y,c&&c({action:o,location:N.location,delta:f})}function m(y,f){o=Wn.Push;let g=hl(N.location,y,f);u=d()+1;let x=Dc(g,u),_=N.createHref(g);try{l.pushState(x,"",_)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(_)}a&&c&&c({action:o,location:N.location,delta:1})}function w(y,f){o=Wn.Replace;let g=hl(N.location,y,f);u=d();let x=Dc(g,u),_=N.createHref(g);l.replaceState(x,"",_),a&&c&&c({action:o,location:N.location,delta:0})}function k(y){let f=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof y=="string"?y:xi(y);return g=g.replace(/ $/,"%20"),Ce(f,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,f)}let N={get action(){return o},get location(){return e(i,l)},listen(y){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Vc,h),c=y,()=>{i.removeEventListener(Vc,h),c=null}},createHref(y){return t(i,y)},createURL:k,encodeLocation(y){let f=k(y);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:m,replace:w,go(y){return l.go(y)}};return N}var $c;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})($c||($c={}));function Rm(e,t,r){return r===void 0&&(r="/"),Pm(e,t,r)}function Pm(e,t,r,s){let i=typeof t=="string"?hr(t):t,a=wo(i.pathname||"/",r);if(a==null)return null;let l=xh(e);Im(l);let o=null;for(let c=0;o==null&&c<l.length;++c){let u=Km(a);o=Hm(l[c],u)}return o}function xh(e,t,r,s){t===void 0&&(t=[]),r===void 0&&(r=[]),s===void 0&&(s="");let i=(a,l,o)=>{let c={relativePath:o===void 0?a.path||"":o,caseSensitive:a.caseSensitive===!0,childrenIndex:l,route:a};c.relativePath.startsWith("/")&&(Ce(c.relativePath.startsWith(s),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(s.length));let u=rt([s,c.relativePath]),d=r.concat(c);a.children&&a.children.length>0&&(Ce(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),xh(a.children,t,d,u)),!(a.path==null&&!a.index)&&t.push({path:u,score:$m(u,a.index),routesMeta:d})};return e.forEach((a,l)=>{var o;if(a.path===""||!((o=a.path)!=null&&o.includes("?")))i(a,l);else for(let c of vh(a.path))i(a,l,c)}),t}function vh(e){let t=e.split("/");if(t.length===0)return[];let[r,...s]=t,i=r.endsWith("?"),a=r.replace(/\?$/,"");if(s.length===0)return i?[a,""]:[a];let l=vh(s.join("/")),o=[];return o.push(...l.map(c=>c===""?a:[a,c].join("/"))),i&&o.push(...l),o.map(c=>e.startsWith("/")&&c===""?"/":c)}function Im(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Bm(t.routesMeta.map(s=>s.childrenIndex),r.routesMeta.map(s=>s.childrenIndex)))}const Mm=/^:[\w-]+$/,zm=3,Fm=2,Am=1,Vm=10,Dm=-2,Bc=e=>e==="*";function $m(e,t){let r=e.split("/"),s=r.length;return r.some(Bc)&&(s+=Dm),t&&(s+=Fm),r.filter(i=>!Bc(i)).reduce((i,a)=>i+(Mm.test(a)?zm:a===""?Am:Vm),s)}function Bm(e,t){return e.length===t.length&&e.slice(0,-1).every((s,i)=>s===t[i])?e[e.length-1]-t[t.length-1]:0}function Hm(e,t,r){let{routesMeta:s}=e,i={},a="/",l=[];for(let o=0;o<s.length;++o){let c=s[o],u=o===s.length-1,d=a==="/"?t:t.slice(a.length)||"/",h=qm({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),m=c.route;if(!h)return null;Object.assign(i,h.params),l.push({params:i,pathname:rt([a,h.pathname]),pathnameBase:Ym(rt([a,h.pathnameBase])),route:m}),h.pathnameBase!=="/"&&(a=rt([a,h.pathnameBase]))}return l}function qm(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,s]=Um(e.path,e.caseSensitive,e.end),i=t.match(r);if(!i)return null;let a=i[0],l=a.replace(/(.)\/+$/,"$1"),o=i.slice(1);return{params:s.reduce((u,d,h)=>{let{paramName:m,isOptional:w}=d;if(m==="*"){let N=o[h]||"";l=a.slice(0,a.length-N.length).replace(/(.)\/+$/,"$1")}const k=o[h];return w&&!k?u[m]=void 0:u[m]=(k||"").replace(/%2F/g,"/"),u},{}),pathname:a,pathnameBase:l,pattern:e}}function Um(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),ko(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let s=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,o,c)=>(s.push({paramName:o,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(s.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),s]}function Km(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ko(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function wo(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,s=e.charAt(r);return s&&s!=="/"?null:e.slice(r)||"/"}const Wm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Gm=e=>Wm.test(e);function Qm(e,t){t===void 0&&(t="/");let{pathname:r,search:s="",hash:i=""}=typeof e=="string"?hr(e):e,a;if(r)if(Gm(r))a=r;else{if(r.includes("//")){let l=r;r=r.replace(/\/\/+/g,"/"),ko(!1,"Pathnames cannot have embedded double slashes - normalizing "+(l+" -> "+r))}r.startsWith("/")?a=Hc(r.substring(1),"/"):a=Hc(r,t)}else a=t;return{pathname:a,search:Jm(s),hash:Zm(i)}}function Hc(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function ua(e,t,r,s){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Xm(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function yh(e,t){let r=Xm(e);return t?r.map((s,i)=>i===r.length-1?s.pathname:s.pathnameBase):r.map(s=>s.pathnameBase)}function jh(e,t,r,s){s===void 0&&(s=!1);let i;typeof e=="string"?i=hr(e):(i=rs({},e),Ce(!i.pathname||!i.pathname.includes("?"),ua("?","pathname","search",i)),Ce(!i.pathname||!i.pathname.includes("#"),ua("#","pathname","hash",i)),Ce(!i.search||!i.search.includes("#"),ua("#","search","hash",i)));let a=e===""||i.pathname==="",l=a?"/":i.pathname,o;if(l==null)o=r;else{let h=t.length-1;if(!s&&l.startsWith("..")){let m=l.split("/");for(;m[0]==="..";)m.shift(),h-=1;i.pathname=m.join("/")}o=h>=0?t[h]:"/"}let c=Qm(i,o),u=l&&l!=="/"&&l.endsWith("/"),d=(a||l===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const rt=e=>e.join("/").replace(/\/\/+/g,"/"),Ym=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Jm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Zm=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function eg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Nh=["post","put","patch","delete"];new Set(Nh);const ng=["get",...Nh];new Set(ng);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ss(){return ss=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},ss.apply(this,arguments)}const bo=p.createContext(null),tg=p.createContext(null),Lt=p.createContext(null),Fi=p.createContext(null),dt=p.createContext({outlet:null,matches:[],isDataRoute:!1}),kh=p.createContext(null);function rg(e,t){let{relative:r}=t===void 0?{}:t;us()||Ce(!1);let{basename:s,navigator:i}=p.useContext(Lt),{hash:a,pathname:l,search:o}=Sh(e,{relative:r}),c=l;return s!=="/"&&(c=l==="/"?s:rt([s,l])),i.createHref({pathname:c,search:o,hash:a})}function us(){return p.useContext(Fi)!=null}function hs(){return us()||Ce(!1),p.useContext(Fi).location}function wh(e){p.useContext(Lt).static||p.useLayoutEffect(e)}function bh(){let{isDataRoute:e}=p.useContext(dt);return e?xg():sg()}function sg(){us()||Ce(!1);let e=p.useContext(bo),{basename:t,future:r,navigator:s}=p.useContext(Lt),{matches:i}=p.useContext(dt),{pathname:a}=hs(),l=JSON.stringify(yh(i,r.v7_relativeSplatPath)),o=p.useRef(!1);return wh(()=>{o.current=!0}),p.useCallback(function(u,d){if(d===void 0&&(d={}),!o.current)return;if(typeof u=="number"){s.go(u);return}let h=jh(u,JSON.parse(l),a,d.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:rt([t,h.pathname])),(d.replace?s.replace:s.push)(h,d.state,d)},[t,s,l,a,e])}function ig(){let{matches:e}=p.useContext(dt),t=e[e.length-1];return t?t.params:{}}function Sh(e,t){let{relative:r}=t===void 0?{}:t,{future:s}=p.useContext(Lt),{matches:i}=p.useContext(dt),{pathname:a}=hs(),l=JSON.stringify(yh(i,s.v7_relativeSplatPath));return p.useMemo(()=>jh(e,JSON.parse(l),a,r==="path"),[e,l,a,r])}function ag(e,t){return lg(e,t)}function lg(e,t,r,s){us()||Ce(!1);let{navigator:i}=p.useContext(Lt),{matches:a}=p.useContext(dt),l=a[a.length-1],o=l?l.params:{};l&&l.pathname;let c=l?l.pathnameBase:"/";l&&l.route;let u=hs(),d;if(t){var h;let y=typeof t=="string"?hr(t):t;c==="/"||(h=y.pathname)!=null&&h.startsWith(c)||Ce(!1),d=y}else d=u;let m=d.pathname||"/",w=m;if(c!=="/"){let y=c.replace(/^\//,"").split("/");w="/"+m.replace(/^\//,"").split("/").slice(y.length).join("/")}let k=Rm(e,{pathname:w}),N=hg(k&&k.map(y=>Object.assign({},y,{params:Object.assign({},o,y.params),pathname:rt([c,i.encodeLocation?i.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?c:rt([c,i.encodeLocation?i.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),a,r,s);return t&&N?p.createElement(Fi.Provider,{value:{location:ss({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Wn.Pop}},N):N}function og(){let e=gg(),t=eg(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return p.createElement(p.Fragment,null,p.createElement("h2",null,"Unexpected Application Error!"),p.createElement("h3",{style:{fontStyle:"italic"}},t),r?p.createElement("pre",{style:i},r):null,null)}const cg=p.createElement(og,null);class dg extends p.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?p.createElement(dt.Provider,{value:this.props.routeContext},p.createElement(kh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ug(e){let{routeContext:t,match:r,children:s}=e,i=p.useContext(bo);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),p.createElement(dt.Provider,{value:t},s)}function hg(e,t,r,s){var i;if(t===void 0&&(t=[]),r===void 0&&(r=null),s===void 0&&(s=null),e==null){var a;if(!r)return null;if(r.errors)e=r.matches;else if((a=s)!=null&&a.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let l=e,o=(i=r)==null?void 0:i.errors;if(o!=null){let d=l.findIndex(h=>h.route.id&&(o==null?void 0:o[h.route.id])!==void 0);d>=0||Ce(!1),l=l.slice(0,Math.min(l.length,d+1))}let c=!1,u=-1;if(r&&s&&s.v7_partialHydration)for(let d=0;d<l.length;d++){let h=l[d];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=d),h.route.id){let{loaderData:m,errors:w}=r,k=h.route.loader&&m[h.route.id]===void 0&&(!w||w[h.route.id]===void 0);if(h.route.lazy||k){c=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((d,h,m)=>{let w,k=!1,N=null,y=null;r&&(w=o&&h.route.id?o[h.route.id]:void 0,N=h.route.errorElement||cg,c&&(u<0&&m===0?(vg("route-fallback"),k=!0,y=null):u===m&&(k=!0,y=h.route.hydrateFallbackElement||null)));let f=t.concat(l.slice(0,m+1)),g=()=>{let x;return w?x=N:k?x=y:h.route.Component?x=p.createElement(h.route.Component,null):h.route.element?x=h.route.element:x=d,p.createElement(ug,{match:h,routeContext:{outlet:d,matches:f,isDataRoute:r!=null},children:x})};return r&&(h.route.ErrorBoundary||h.route.errorElement||m===0)?p.createElement(dg,{location:r.location,revalidation:r.revalidation,component:N,error:w,children:g(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):g()},null)}var Ch=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Ch||{}),Th=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Th||{});function pg(e){let t=p.useContext(bo);return t||Ce(!1),t}function fg(e){let t=p.useContext(tg);return t||Ce(!1),t}function mg(e){let t=p.useContext(dt);return t||Ce(!1),t}function _h(e){let t=mg(),r=t.matches[t.matches.length-1];return r.route.id||Ce(!1),r.route.id}function gg(){var e;let t=p.useContext(kh),r=fg(),s=_h();return t!==void 0?t:(e=r.errors)==null?void 0:e[s]}function xg(){let{router:e}=pg(Ch.UseNavigateStable),t=_h(Th.UseNavigateStable),r=p.useRef(!1);return wh(()=>{r.current=!0}),p.useCallback(function(i,a){a===void 0&&(a={}),r.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ss({fromRouteId:t},a)))},[e,t])}const qc={};function vg(e,t,r){qc[e]||(qc[e]=!0)}function yg(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function ie(e){Ce(!1)}function jg(e){let{basename:t="/",children:r=null,location:s,navigationType:i=Wn.Pop,navigator:a,static:l=!1,future:o}=e;us()&&Ce(!1);let c=t.replace(/^\/*/,"/"),u=p.useMemo(()=>({basename:c,navigator:a,static:l,future:ss({v7_relativeSplatPath:!1},o)}),[c,o,a,l]);typeof s=="string"&&(s=hr(s));let{pathname:d="/",search:h="",hash:m="",state:w=null,key:k="default"}=s,N=p.useMemo(()=>{let y=wo(d,c);return y==null?null:{location:{pathname:y,search:h,hash:m,state:w,key:k},navigationType:i}},[c,d,h,m,w,k,i]);return N==null?null:p.createElement(Lt.Provider,{value:u},p.createElement(Fi.Provider,{children:r,value:N}))}function Ng(e){let{children:t,location:r}=e;return ag(pl(t),r)}new Promise(()=>{});function pl(e,t){t===void 0&&(t=[]);let r=[];return p.Children.forEach(e,(s,i)=>{if(!p.isValidElement(s))return;let a=[...t,i];if(s.type===p.Fragment){r.push.apply(r,pl(s.props.children,a));return}s.type!==ie&&Ce(!1),!s.props.index||!s.props.children||Ce(!1);let l={id:s.props.id||a.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(l.children=pl(s.props.children,a)),r.push(l)}),r}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fl(){return fl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},fl.apply(this,arguments)}function kg(e,t){if(e==null)return{};var r={},s=Object.keys(e),i,a;for(a=0;a<s.length;a++)i=s[a],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function wg(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function bg(e,t){return e.button===0&&(!t||t==="_self")&&!wg(e)}const Sg=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Cg="6";try{window.__reactRouterVersion=Cg}catch{}const Tg="startTransition",Uc=gp[Tg];function _g(e){let{basename:t,children:r,future:s,window:i}=e,a=p.useRef();a.current==null&&(a.current=Lm({window:i,v5Compat:!0}));let l=a.current,[o,c]=p.useState({action:l.action,location:l.location}),{v7_startTransition:u}=s||{},d=p.useCallback(h=>{u&&Uc?Uc(()=>c(h)):c(h)},[c,u]);return p.useLayoutEffect(()=>l.listen(d),[l,d]),p.useEffect(()=>yg(s),[s]),p.createElement(jg,{basename:t,children:r,location:o.location,navigationType:o.action,navigator:l,future:s})}const Lg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Eg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,En=p.forwardRef(function(t,r){let{onClick:s,relative:i,reloadDocument:a,replace:l,state:o,target:c,to:u,preventScrollReset:d,viewTransition:h}=t,m=kg(t,Sg),{basename:w}=p.useContext(Lt),k,N=!1;if(typeof u=="string"&&Eg.test(u)&&(k=u,Lg))try{let x=new URL(window.location.href),_=u.startsWith("//")?new URL(x.protocol+u):new URL(u),j=wo(_.pathname,w);_.origin===x.origin&&j!=null?u=j+_.search+_.hash:N=!0}catch{}let y=rg(u,{relative:i}),f=Og(u,{replace:l,state:o,target:c,preventScrollReset:d,relative:i,viewTransition:h});function g(x){s&&s(x),x.defaultPrevented||f(x)}return p.createElement("a",fl({},m,{href:k||y,onClick:N||a?s:g,ref:r,target:c}))});var Kc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Kc||(Kc={}));var Wc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Wc||(Wc={}));function Og(e,t){let{target:r,replace:s,state:i,preventScrollReset:a,relative:l,viewTransition:o}=t===void 0?{}:t,c=bh(),u=hs(),d=Sh(e,{relative:l});return p.useCallback(h=>{if(bg(h,r)){h.preventDefault();let m=s!==void 0?s:xi(u)===xi(d);c(e,{replace:m,state:i,preventScrollReset:a,relative:l,viewTransition:o})}},[u,c,d,s,i,r,e,a,l,o])}/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Rg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),J=(e,t)=>{const r=p.forwardRef(({color:s="currentColor",size:i=24,strokeWidth:a=2,absoluteStrokeWidth:l,className:o="",children:c,...u},d)=>p.createElement("svg",{ref:d,...Rg,width:i,height:i,stroke:s,strokeWidth:l?Number(a)*24/Number(i):a,className:["lucide",`lucide-${Pg(e)}`,o].join(" "),...u},[...t.map(([h,m])=>p.createElement(h,m)),...Array.isArray(c)?c:[c]]));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sn=J("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=J("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=J("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=J("ArrowUpDown",[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=J("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ml=J("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=J("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=J("Bug",[["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",key:"xs1cw7"}],["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4",key:"k3fwyw"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dn=J("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=J("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=J("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=J("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Us=J("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g=J("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gl=J("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=J("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ks=J("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=J("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=J("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gc=J("FileCode",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=J("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const So=J("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=J("Grid3x3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=J("HeartHandshake",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",key:"12sd6o"}],["path",{d:"m18 15-2-2",key:"60u0ii"}],["path",{d:"m15 18-2-2",key:"6p76be"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=J("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=J("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=J("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gn=J("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Co=J("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ne=J("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xl=J("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const To=J("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=J("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qc=J("Map",[["polygon",{points:"3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21",key:"ok2ie8"}],["line",{x1:"9",x2:"9",y1:"3",y2:"18",key:"w34qz5"}],["line",{x1:"15",x2:"15",y1:"6",y2:"21",key:"volv9a"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg=J("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=J("MousePointer2",[["path",{d:"m4 4 7.07 17 2.51-7.39L21 11.07z",key:"1vqm48"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=J("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pr=J("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Je=J("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vi=J("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg=J("Puzzle",[["path",{d:"M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z",key:"i0oyt7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=J("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ut=J("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fr=J("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg=J("ShieldCheck",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ex=J("SkipBack",[["polygon",{points:"19 20 9 12 19 4 19 20",key:"o2sva"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5",key:"1ocqjk"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mr=J("SkipForward",[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vl=J("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=J("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nx=J("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ha=J("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=J("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _o=J("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function tx(){const e=hs(),[t,r]=p.useState(!1),s=e.pathname==="/"?"home":e.pathname.replace("/","").replace("_",""),i=()=>r(!t),a=()=>r(!1);p.useEffect(()=>{const o=()=>{window.innerWidth>1024&&r(!1)};return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[]),p.useEffect(()=>{t?document.body.style.overflow="hidden":document.body.style.overflow=""},[t]);const l=({to:o,icon:c,children:u,pageName:d})=>{const h=s===d;return n.jsxs(En,{to:o,className:`nav-item ${h?"active":""}`,onClick:a,children:[n.jsx(c,{}),n.jsx("span",{children:u})]})};return n.jsxs(n.Fragment,{children:[n.jsx("button",{className:"mobile-menu-toggle",id:"mobileMenuToggle","aria-label":"Toggle menu",onClick:i,children:t?n.jsx(Ih,{}):n.jsx(Qg,{})}),n.jsx("div",{className:`sidebar-overlay ${t?"active":""}`,onClick:a}),n.jsxs("aside",{className:`sidebar ${t?"active":""}`,id:"sidebar",children:[n.jsx("div",{className:"sidebar-header",children:n.jsx(En,{to:"/",className:"logo-wrapper",onClick:a,children:n.jsx("span",{className:"logo-text",children:"DSA Visualizer"})})}),n.jsxs("nav",{className:"sidebar-nav",children:[n.jsxs("div",{className:"nav-section",children:[n.jsx("div",{className:"nav-section-title",children:"Explore"}),n.jsx(l,{to:"/",icon:Gg,pageName:"home",children:"Home"}),n.jsx(l,{to:"/algorithms",icon:Bg,pageName:"algorithms",children:"Algorithms"}),n.jsx(l,{to:"/practice",icon:Ph,pageName:"practice",children:"Practice"})]}),n.jsxs("div",{className:"nav-section",children:[n.jsx("div",{className:"nav-section-title",children:"More"}),n.jsx(l,{to:"/contact",icon:Oh,pageName:"contact",children:"Contact"}),n.jsx(l,{to:"/contributions",icon:Kg,pageName:"contributions",children:"Contributions"})]})]}),n.jsxs("div",{className:"sidebar-footer",children:[n.jsxs("div",{className:"social-links-sidebar",children:[n.jsx("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",title:"GitHub",children:n.jsx(So,{})}),n.jsx("a",{href:"https://www.linkedin.com/in/abdullah-mahfouz-5188b1306/",target:"_blank",rel:"noopener noreferrer",title:"LinkedIn",children:n.jsx(To,{})})]}),n.jsx("p",{className:"copyright",children:"© 2026 Abdullah Mahfouz"})]})]})]})}function rx(){return n.jsx("footer",{className:"main-footer",children:n.jsxs("div",{className:"footer-content",children:[n.jsxs("div",{className:"footer-social",children:[n.jsxs("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",className:"footer-link",children:[n.jsx(So,{}),n.jsx("span",{children:"GitHub"})]}),n.jsxs("a",{href:"https://www.linkedin.com/in/abdullah-mahfouz-5188b1306/",target:"_blank",rel:"noopener noreferrer",className:"footer-link",children:[n.jsx(To,{}),n.jsx("span",{children:"LinkedIn"})]})]}),n.jsx("p",{className:"footer-copyright",children:"© 2026 Abdullah Mahfouz"})]})})}const ke=({children:e,size:t,className:r,...s})=>n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:t||24,height:t||24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.75,strokeLinecap:"round",strokeLinejoin:"round",className:r,...s,children:e}),Mh=e=>n.jsxs(ke,{...e,children:[n.jsx("rect",{x:"4",y:"2",width:"16",height:"5",rx:"1.5"}),n.jsx("rect",{x:"4",y:"9.5",width:"16",height:"5",rx:"1.5"}),n.jsx("rect",{x:"4",y:"17",width:"16",height:"5",rx:"1.5"})]}),zh=e=>n.jsxs(ke,{...e,children:[n.jsx("rect",{x:"1.5",y:"6",width:"5",height:"9",rx:"1.5"}),n.jsx("rect",{x:"9.5",y:"6",width:"5",height:"9",rx:"1.5"}),n.jsx("rect",{x:"17.5",y:"6",width:"5",height:"9",rx:"1.5"}),n.jsx("path",{d:"M4 19h16"}),n.jsx("path",{d:"M17.5 17l2.5 2-2.5 2"})]}),Fh=e=>n.jsxs(ke,{...e,children:[n.jsx("circle",{cx:"4",cy:"12",r:"2.5"}),n.jsx("circle",{cx:"12",cy:"12",r:"2.5"}),n.jsx("circle",{cx:"20",cy:"12",r:"2.5"}),n.jsx("path",{d:"M6.5 12h3"}),n.jsx("path",{d:"M14.5 12h3"}),n.jsx("path",{d:"M8.5 10.5l1 1.5-1 1.5"}),n.jsx("path",{d:"M16.5 10.5l1 1.5-1 1.5"})]}),sx=e=>n.jsxs(ke,{...e,children:[n.jsx("circle",{cx:"3",cy:"19",r:"1.8"}),n.jsx("circle",{cx:"9",cy:"19",r:"1.8"}),n.jsx("circle",{cx:"15",cy:"19",r:"1.8"}),n.jsx("circle",{cx:"21",cy:"19",r:"1.8"}),n.jsx("line",{x1:"4.8",y1:"19",x2:"7.2",y2:"19"}),n.jsx("line",{x1:"10.8",y1:"19",x2:"13.2",y2:"19"}),n.jsx("line",{x1:"16.8",y1:"19",x2:"19.2",y2:"19"}),n.jsx("circle",{cx:"3",cy:"12",r:"1.8"}),n.jsx("circle",{cx:"15",cy:"12",r:"1.8"}),n.jsx("line",{x1:"4.8",y1:"12",x2:"13.2",y2:"12"}),n.jsx("circle",{cx:"3",cy:"5",r:"1.8"}),n.jsx("circle",{cx:"21",cy:"5",r:"1.8"}),n.jsx("line",{x1:"4.8",y1:"5",x2:"19.2",y2:"5"}),n.jsx("line",{x1:"3",y1:"6.8",x2:"3",y2:"10.2"}),n.jsx("line",{x1:"3",y1:"13.8",x2:"3",y2:"17.2"}),n.jsx("line",{x1:"15",y1:"13.8",x2:"15",y2:"17.2"}),n.jsx("line",{x1:"21",y1:"6.8",x2:"21",y2:"17.2"})]}),Ah=e=>n.jsxs(ke,{...e,children:[n.jsx("rect",{x:"13",y:"2",width:"9",height:"4.5",rx:"1"}),n.jsx("rect",{x:"13",y:"8.5",width:"9",height:"4.5",rx:"1"}),n.jsx("rect",{x:"13",y:"15",width:"9",height:"4.5",rx:"1"}),n.jsx("circle",{cx:"3.5",cy:"4.25",r:"1.5"}),n.jsx("circle",{cx:"3.5",cy:"10.75",r:"1.5"}),n.jsx("circle",{cx:"3.5",cy:"17.25",r:"1.5"}),n.jsx("path",{d:"M5 4.25h6.5"}),n.jsx("path",{d:"M11.5 4.25l1.5 6.5"}),n.jsx("path",{d:"M5 10.75h8"}),n.jsx("path",{d:"M5 17.25h6.5"}),n.jsx("path",{d:"M11.5 17.25l1.5-3"})]}),ix=e=>n.jsxs(ke,{...e,children:[n.jsx("rect",{x:"2",y:"3",width:"6",height:"5",rx:"1"}),n.jsx("rect",{x:"2",y:"10",width:"6",height:"5",rx:"1"}),n.jsx("rect",{x:"2",y:"17",width:"6",height:"5",rx:"1"}),n.jsx("line",{x1:"8",y1:"5.5",x2:"11",y2:"5.5"}),n.jsx("circle",{cx:"13",cy:"5.5",r:"1.8"}),n.jsx("line",{x1:"14.8",y1:"5.5",x2:"17.5",y2:"5.5"}),n.jsx("circle",{cx:"19.5",cy:"5.5",r:"1.8"}),n.jsx("line",{x1:"8",y1:"12.5",x2:"11",y2:"12.5"}),n.jsx("circle",{cx:"13",cy:"12.5",r:"1.8"}),n.jsx("line",{x1:"8",y1:"19.5",x2:"10",y2:"19.5"}),n.jsx("circle",{cx:"10.5",cy:"19.5",r:"0.5",fill:"currentColor"})]}),Xc=e=>n.jsxs(ke,{...e,children:[n.jsx("rect",{x:"3",y:"8",width:"3.5",height:"8",rx:"1"}),n.jsx("rect",{x:"7.5",y:"8",width:"3.5",height:"8",rx:"1"}),n.jsx("rect",{x:"12",y:"8",width:"3.5",height:"8",rx:"1"}),n.jsx("rect",{x:"16.5",y:"8",width:"3.5",height:"8",rx:"1"}),n.jsx("line",{x1:"4",y1:"10",x2:"5.5",y2:"14"}),n.jsx("line",{x1:"5.5",y1:"10",x2:"4",y2:"14"}),n.jsx("path",{d:"M4.75 6.5 C4.75 3 9.25 3 9.25 6.5"}),n.jsx("path",{d:"M8.25 5l1 1.5-1.5 0.5"})]}),ax=e=>n.jsxs(ke,{...e,children:[n.jsx("circle",{cx:"12",cy:"4",r:"2.5"}),n.jsx("circle",{cx:"6",cy:"13",r:"2.5"}),n.jsx("circle",{cx:"18",cy:"13",r:"2.5"}),n.jsx("circle",{cx:"3",cy:"21",r:"1.8"}),n.jsx("circle",{cx:"9",cy:"21",r:"1.8"}),n.jsx("circle",{cx:"15",cy:"21",r:"1.8"}),n.jsx("circle",{cx:"21",cy:"21",r:"1.8"}),n.jsx("line",{x1:"10.2",y1:"5.8",x2:"7.8",y2:"11.2"}),n.jsx("line",{x1:"13.8",y1:"5.8",x2:"16.2",y2:"11.2"}),n.jsx("line",{x1:"4.5",y1:"14.8",x2:"3.5",y2:"19.2"}),n.jsx("line",{x1:"7.5",y1:"14.8",x2:"8.5",y2:"19.2"}),n.jsx("line",{x1:"16.5",y1:"14.8",x2:"15.5",y2:"19.2"}),n.jsx("line",{x1:"19.5",y1:"14.8",x2:"20.5",y2:"19.2"})]}),Vh=e=>n.jsxs(ke,{...e,children:[n.jsx("circle",{cx:"12",cy:"4.5",r:"2.5"}),n.jsx("circle",{cx:"7",cy:"13",r:"2.5"}),n.jsx("circle",{cx:"17",cy:"13",r:"2.5"}),n.jsx("circle",{cx:"4",cy:"20.5",r:"2"}),n.jsx("circle",{cx:"20",cy:"20.5",r:"2"}),n.jsx("line",{x1:"10.3",y1:"6.2",x2:"8.7",y2:"11.3"}),n.jsx("line",{x1:"13.7",y1:"6.2",x2:"15.3",y2:"11.3"}),n.jsx("line",{x1:"5.5",y1:"14.8",x2:"4.8",y2:"18.5"}),n.jsx("line",{x1:"18.5",y1:"14.8",x2:"19.2",y2:"18.5"})]}),lx=e=>n.jsxs(ke,{...e,children:[n.jsx("circle",{cx:"12",cy:"4",r:"2.5"}),n.jsx("circle",{cx:"6.5",cy:"12",r:"2.5"}),n.jsx("circle",{cx:"17.5",cy:"12",r:"2.5"}),n.jsx("circle",{cx:"3.5",cy:"20",r:"2"}),n.jsx("circle",{cx:"9.5",cy:"20",r:"2"}),n.jsx("circle",{cx:"14.5",cy:"20",r:"2"}),n.jsx("circle",{cx:"20.5",cy:"20",r:"2"}),n.jsx("line",{x1:"10.2",y1:"5.7",x2:"8.3",y2:"10.3"}),n.jsx("line",{x1:"13.8",y1:"5.7",x2:"15.7",y2:"10.3"}),n.jsx("line",{x1:"5",y1:"13.8",x2:"4.2",y2:"18"}),n.jsx("line",{x1:"8",y1:"13.8",x2:"8.8",y2:"18"}),n.jsx("line",{x1:"16",y1:"13.8",x2:"15.2",y2:"18"}),n.jsx("line",{x1:"19",y1:"13.8",x2:"19.8",y2:"18"})]}),ox=e=>n.jsxs(ke,{...e,children:[n.jsx("circle",{cx:"12",cy:"4.5",r:"2.5"}),n.jsx("circle",{cx:"12",cy:"4.5",r:"4",opacity:"0.3"}),n.jsx("circle",{cx:"6",cy:"13",r:"2.5"}),n.jsx("circle",{cx:"18",cy:"13",r:"2.5"}),n.jsx("circle",{cx:"3.5",cy:"20.5",r:"2"}),n.jsx("circle",{cx:"15.5",cy:"20.5",r:"2"}),n.jsx("line",{x1:"10.2",y1:"6.2",x2:"7.8",y2:"11.2"}),n.jsx("line",{x1:"13.8",y1:"6.2",x2:"16.2",y2:"11.2"}),n.jsx("line",{x1:"4.7",y1:"14.8",x2:"3.9",y2:"18.5"}),n.jsx("line",{x1:"16.8",y1:"14.8",x2:"16",y2:"18.5"})]}),cx=e=>n.jsxs(ke,{...e,children:[n.jsx("circle",{cx:"12",cy:"4",r:"2.5"}),n.jsx("circle",{cx:"7",cy:"12",r:"2.5"}),n.jsx("circle",{cx:"18",cy:"10",r:"2.5"}),n.jsx("circle",{cx:"4",cy:"20",r:"2"}),n.jsx("circle",{cx:"10",cy:"19",r:"2"}),n.jsx("circle",{cx:"21",cy:"17.5",r:"2"}),n.jsx("line",{x1:"10.2",y1:"5.7",x2:"8.7",y2:"10.3"}),n.jsx("line",{x1:"13.8",y1:"5.2",x2:"16.2",y2:"8.5"}),n.jsx("line",{x1:"5.5",y1:"13.8",x2:"4.6",y2:"18"}),n.jsx("line",{x1:"8.5",y1:"13.8",x2:"9.5",y2:"17"}),n.jsx("line",{x1:"19.8",y1:"12",x2:"20.6",y2:"15.5"})]}),dx=e=>n.jsxs(ke,{...e,children:[n.jsx("circle",{cx:"12",cy:"3.5",r:"2.5"}),n.jsx("circle",{cx:"6.5",cy:"12",r:"2.5"}),n.jsx("circle",{cx:"17.5",cy:"12",r:"2.5"}),n.jsx("circle",{cx:"3",cy:"20.5",r:"2"}),n.jsx("circle",{cx:"10",cy:"20.5",r:"2"}),n.jsx("circle",{cx:"14",cy:"20.5",r:"2"}),n.jsx("circle",{cx:"21",cy:"20.5",r:"2"}),n.jsx("line",{x1:"10.2",y1:"5.2",x2:"8.3",y2:"10.3"}),n.jsx("line",{x1:"13.8",y1:"5.2",x2:"15.7",y2:"10.3"}),n.jsx("line",{x1:"5",y1:"13.8",x2:"3.7",y2:"18.5"}),n.jsx("line",{x1:"8",y1:"13.8",x2:"9.3",y2:"18.5"}),n.jsx("line",{x1:"16",y1:"13.8",x2:"14.7",y2:"18.5"}),n.jsx("line",{x1:"19",y1:"13.8",x2:"20.3",y2:"18.5"}),n.jsx("path",{d:"M22 8l0-5"}),n.jsx("path",{d:"M20.5 4.5L22 3l1.5 1.5",opacity:"0.5"})]}),ux=e=>n.jsxs(ke,{...e,children:[n.jsx("circle",{cx:"12",cy:"3.5",r:"2.5"}),n.jsx("circle",{cx:"6.5",cy:"12",r:"2.5"}),n.jsx("circle",{cx:"17.5",cy:"12",r:"2.5"}),n.jsx("circle",{cx:"3",cy:"20.5",r:"2"}),n.jsx("circle",{cx:"10",cy:"20.5",r:"2"}),n.jsx("circle",{cx:"14",cy:"20.5",r:"2"}),n.jsx("circle",{cx:"21",cy:"20.5",r:"2"}),n.jsx("line",{x1:"10.2",y1:"5.2",x2:"8.3",y2:"10.3"}),n.jsx("line",{x1:"13.8",y1:"5.2",x2:"15.7",y2:"10.3"}),n.jsx("line",{x1:"5",y1:"13.8",x2:"3.7",y2:"18.5"}),n.jsx("line",{x1:"8",y1:"13.8",x2:"9.3",y2:"18.5"}),n.jsx("line",{x1:"16",y1:"13.8",x2:"14.7",y2:"18.5"}),n.jsx("line",{x1:"19",y1:"13.8",x2:"20.3",y2:"18.5"}),n.jsx("path",{d:"M22 3l0 5"}),n.jsx("path",{d:"M20.5 6.5L22 8l1.5-1.5",opacity:"0.5"})]}),Dh=e=>n.jsxs(ke,{...e,children:[n.jsx("circle",{cx:"12",cy:"3",r:"2"}),n.jsx("circle",{cx:"4",cy:"10",r:"2"}),n.jsx("circle",{cx:"20",cy:"10",r:"2"}),n.jsx("circle",{cx:"6.5",cy:"20",r:"2"}),n.jsx("circle",{cx:"17.5",cy:"20",r:"2"}),n.jsx("line",{x1:"10.2",y1:"4.2",x2:"5.8",y2:"8.8"}),n.jsx("line",{x1:"13.8",y1:"4.2",x2:"18.2",y2:"8.8"}),n.jsx("line",{x1:"4.5",y1:"12",x2:"6",y2:"18"}),n.jsx("line",{x1:"19.5",y1:"12",x2:"18",y2:"18"}),n.jsx("line",{x1:"8.5",y1:"20",x2:"15.5",y2:"20"}),n.jsx("line",{x1:"6",y1:"10.5",x2:"18",y2:"10.5",opacity:"0.4"})]}),hx=e=>n.jsxs(ke,{...e,children:[n.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"1.5"}),n.jsx("line",{x1:"7",y1:"2",x2:"7",y2:"22"}),n.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"22"}),n.jsx("line",{x1:"17",y1:"2",x2:"17",y2:"22"}),n.jsx("line",{x1:"2",y1:"7",x2:"22",y2:"7"}),n.jsx("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),n.jsx("line",{x1:"2",y1:"17",x2:"22",y2:"17"}),n.jsx("rect",{x:"7.75",y:"2.75",width:"3.5",height:"3.5",rx:"0.5",fill:"currentColor",opacity:"0.25",stroke:"none"}),n.jsx("rect",{x:"12.75",y:"7.75",width:"3.5",height:"3.5",rx:"0.5",fill:"currentColor",opacity:"0.25",stroke:"none"}),n.jsx("rect",{x:"2.75",y:"12.75",width:"3.5",height:"3.5",rx:"0.5",fill:"currentColor",opacity:"0.25",stroke:"none"}),n.jsx("rect",{x:"17.75",y:"17.75",width:"3.5",height:"3.5",rx:"0.5",fill:"currentColor",opacity:"0.25",stroke:"none"})]}),px=e=>n.jsxs(ke,{...e,children:[n.jsx("circle",{cx:"4",cy:"5",r:"2"}),n.jsx("circle",{cx:"4",cy:"12",r:"2"}),n.jsx("circle",{cx:"4",cy:"19",r:"2"}),n.jsx("line",{x1:"6",y1:"5",x2:"9",y2:"5"}),n.jsx("line",{x1:"6",y1:"12",x2:"9",y2:"12"}),n.jsx("line",{x1:"6",y1:"19",x2:"9",y2:"19"}),n.jsx("rect",{x:"9.5",y:"2.5",width:"4.5",height:"5",rx:"1"}),n.jsx("rect",{x:"15",y:"2.5",width:"4.5",height:"5",rx:"1"}),n.jsx("rect",{x:"9.5",y:"9.5",width:"4.5",height:"5",rx:"1"}),n.jsx("rect",{x:"15",y:"9.5",width:"4.5",height:"5",rx:"1"}),n.jsx("rect",{x:"20.5",y:"9.5",width:"2",height:"5",rx:"0.5",opacity:"0.4"}),n.jsx("rect",{x:"9.5",y:"16.5",width:"4.5",height:"5",rx:"1"})]}),fx=e=>n.jsxs(ke,{...e,children:[n.jsx("circle",{cx:"12",cy:"12",r:"2.5"}),n.jsx("circle",{cx:"12",cy:"12",r:"6",opacity:"0.5",strokeDasharray:"2 2"}),n.jsx("circle",{cx:"12",cy:"12",r:"9.5",opacity:"0.25",strokeDasharray:"2 2"}),n.jsx("circle",{cx:"6",cy:"12",r:"1.5"}),n.jsx("circle",{cx:"18",cy:"12",r:"1.5"}),n.jsx("circle",{cx:"12",cy:"6",r:"1.5"}),n.jsx("circle",{cx:"12",cy:"18",r:"1.5"}),n.jsx("circle",{cx:"3.5",cy:"7",r:"1.3",opacity:"0.5"}),n.jsx("circle",{cx:"20.5",cy:"7",r:"1.3",opacity:"0.5"}),n.jsx("circle",{cx:"3.5",cy:"17",r:"1.3",opacity:"0.5"}),n.jsx("circle",{cx:"20.5",cy:"17",r:"1.3",opacity:"0.5"})]}),mx=e=>n.jsxs(ke,{...e,children:[n.jsx("circle",{cx:"12",cy:"3",r:"2"}),n.jsx("circle",{cx:"6",cy:"10",r:"2"}),n.jsx("circle",{cx:"18",cy:"10",r:"2"}),n.jsx("circle",{cx:"3",cy:"17",r:"2"}),n.jsx("circle",{cx:"9",cy:"17",r:"2"}),n.jsx("circle",{cx:"6",cy:"22",r:"1.5"}),n.jsx("line",{x1:"10.5",y1:"4.5",x2:"7.5",y2:"8.5"}),n.jsx("line",{x1:"13.5",y1:"4.5",x2:"16.5",y2:"8.5"}),n.jsx("line",{x1:"4.5",y1:"11.5",x2:"3.5",y2:"15.5"}),n.jsx("line",{x1:"7.5",y1:"11.5",x2:"8.5",y2:"15.5"}),n.jsx("line",{x1:"3.5",y1:"19",x2:"5.2",y2:"20.8"}),n.jsx("path",{d:"M12 3 L6 10 L3 17 L6 22",strokeWidth:"2.5",opacity:"0.25"})]}),gx=e=>n.jsxs(ke,{...e,children:[n.jsx("rect",{x:"1",y:"9",width:"5",height:"6",rx:"1.5"}),n.jsx("rect",{x:"7.5",y:"9",width:"5",height:"6",rx:"1.5"}),n.jsx("rect",{x:"14",y:"9",width:"5",height:"6",rx:"1.5"}),n.jsx("path",{d:"M19 12h2.5"}),n.jsx("path",{d:"M20.5 10.5l1.5 1.5-1.5 1.5"})]}),xx=e=>n.jsxs(ke,{...e,children:[n.jsx("circle",{cx:"12",cy:"4",r:"2.5"}),n.jsx("circle",{cx:"5",cy:"13",r:"2.5"}),n.jsx("circle",{cx:"19",cy:"13",r:"2.5"}),n.jsx("circle",{cx:"12",cy:"21",r:"2"}),n.jsx("line",{x1:"10.2",y1:"5.8",x2:"6.8",y2:"11.2"}),n.jsx("line",{x1:"13.8",y1:"5.8",x2:"17.2",y2:"11.2"}),n.jsx("line",{x1:"6.5",y1:"15",x2:"10.5",y2:"19.5"}),n.jsx("line",{x1:"17.5",y1:"15",x2:"13.5",y2:"19.5"})]}),vx=e=>n.jsxs(ke,{...e,children:[n.jsx("circle",{cx:"12",cy:"3.5",r:"2.5"}),n.jsx("circle",{cx:"6.5",cy:"12",r:"2.5"}),n.jsx("circle",{cx:"17.5",cy:"12",r:"2.5"}),n.jsx("circle",{cx:"3.5",cy:"20.5",r:"2"}),n.jsx("circle",{cx:"9.5",cy:"20.5",r:"2"}),n.jsx("circle",{cx:"14.5",cy:"20.5",r:"2"}),n.jsx("circle",{cx:"20.5",cy:"20.5",r:"2"}),n.jsx("line",{x1:"10.3",y1:"5.2",x2:"8.3",y2:"10.3"}),n.jsx("line",{x1:"13.7",y1:"5.2",x2:"15.7",y2:"10.3"}),n.jsx("line",{x1:"5",y1:"13.8",x2:"4.2",y2:"18.5"}),n.jsx("line",{x1:"8",y1:"13.8",x2:"8.8",y2:"18.5"}),n.jsx("line",{x1:"16",y1:"13.8",x2:"15.2",y2:"18.5"}),n.jsx("line",{x1:"19",y1:"13.8",x2:"19.8",y2:"18.5"})]}),yx=[{icon:Mh,name:"Stack",desc:"Last in, first out. Push, pop, and peek in constant time.",tag:"O(1)",path:"/stack"},{icon:zh,name:"Queue",desc:"First in, first out. Enqueue and dequeue operations.",tag:"O(1)",path:"/queue"},{icon:Fh,name:"Linked List",desc:"Dynamic chain of nodes with pointer-based traversal.",tag:"O(1) insert",path:"/linkedlist"},{icon:Vh,name:"Binary Search Tree",desc:"Ordered tree for logarithmic search and insertion.",tag:"O(log n)",path:"/bst"},{icon:Ah,name:"Hash Table",desc:"Key-value mapping with collision handling strategies.",tag:"O(1) avg",path:"/hashtable_chaining"},{icon:Dh,name:"Graph Algorithms",desc:"BFS, DFS, Dijkstra, and minimum spanning trees.",tag:"Traversal",path:"/dijkstra"}];function jx(){return n.jsxs(n.Fragment,{children:[n.jsxs("section",{className:"home-hero",children:[n.jsx("div",{className:"home-hero-glow","aria-hidden":"true"}),n.jsxs("div",{className:"home-hero-inner",children:[n.jsxs("h1",{children:["Data Structures",n.jsx("br",{}),n.jsx("span",{children:"& Algorithms"})]}),n.jsx("p",{children:"Visualize operations step by step, interact with live structures, and build real intuition for how algorithms work."}),n.jsxs("div",{className:"home-hero-actions",children:[n.jsxs(En,{to:"/algorithms",className:"home-btn home-btn--primary",children:["Explore Visualizers",n.jsx(fe,{size:18})]}),n.jsxs(En,{to:"/practice",className:"home-btn home-btn--ghost",children:[n.jsx(Ph,{size:18}),"Practice Problems"]})]})]})]}),n.jsxs("section",{className:"home-section",children:[n.jsxs("header",{className:"home-section-head",children:[n.jsx("h2",{children:"Featured"}),n.jsxs(En,{to:"/algorithms",className:"home-link-muted",children:["All visualizers ",n.jsx(fe,{size:15})]})]}),n.jsx("div",{className:"home-cards",children:yx.map((e,t)=>n.jsxs(En,{to:e.path,className:"home-card",style:{"--stagger":`${t*.05}s`},children:[n.jsx("div",{className:"home-card-icon",children:n.jsx(e.icon,{})}),n.jsxs("div",{className:"home-card-body",children:[n.jsx("h3",{children:e.name}),n.jsx("p",{children:e.desc})]}),n.jsx("span",{className:"home-card-tag",children:e.tag})]},e.name))})]}),n.jsx("section",{className:"home-section home-section--alt",children:n.jsxs("div",{className:"home-banner",children:[n.jsxs("div",{children:[n.jsx("h2",{children:"Practice Problems"}),n.jsx("p",{children:"22 curated problems across arrays, trees, graphs, dynamic programming, and more. Built-in editor with instant test feedback."})]}),n.jsxs(En,{to:"/practice",className:"home-btn home-btn--primary",children:["Start Practicing",n.jsx(fe,{size:18})]})]})})]})}function Nx(){const[e,t]=p.useState(null),r=i=>{t(e===i?null:i)},s=[{id:"linear",name:"Linear Data Structures",icon:gx,description:"Elements stored sequentially where each element has a unique predecessor and successor. These are the building blocks of computer science — simple to implement yet powerful enough to solve complex problems.",color:"#6366f1",items:[{to:"/stack",icon:Mh,title:"Stack",description:"LIFO (Last In, First Out) — imagine a stack of plates where you can only add or remove from the top. The most recent item is always accessed first. Push adds to top, Pop removes from top. Both operations are O(1) constant time. Essential for: browser back button (page history), undo/redo in editors, function call management in recursion, parsing expressions like (a+b)*c, and depth-first search algorithms.",available:!0},{to:"/queue",icon:zh,title:"Queue",description:"FIFO (First In, First Out) — like waiting in line at a coffee shop. The first person to arrive gets served first. Enqueue adds to the back, Dequeue removes from front. Both O(1) operations. Used everywhere: print job scheduling, CPU task management, breadth-first search (BFS) in graphs, handling requests in web servers, and buffering data streams like video playback.",available:!0},{to:"/linkedlist",icon:Fh,title:"Linked List",description:"A chain of nodes where each node stores data and a pointer to the next node. Unlike arrays, memory doesn't need to be contiguous — nodes can be scattered in memory. Insertion/deletion at known positions is O(1), but finding a position is O(n). Perfect for: implementing stacks/queues, music playlists (next/previous song), browser history, memory allocation in operating systems, and polynomial arithmetic.",available:!0},{to:"/skiplist",icon:sx,title:"Skip List",description:'A probabilistic data structure that uses multiple layers of linked lists with decreasing density. Express lanes skip over elements like a train system — higher levels let you "skip" to your destination faster. Achieves O(log n) average for search, insert, and delete. Used in Redis for sorted sets, LevelDB for in-memory indexing, and concurrent data structures where lock-free operation is critical.',available:!0}]},{id:"hash",name:"Hash-Tables",icon:Ah,description:"Revolutionary data structures that use hash functions to map keys to array indices, enabling O(1) average-case lookup, insertion, and deletion. The backbone of databases, caches, and any system requiring fast key-value access.",color:"#10b981",items:[{to:"/hashtable_linear",icon:Xc,title:"Linear Probing",description:'Open addressing collision resolution: when a collision occurs (two keys hash to same index), simply check the next slot, then the next, until an empty slot is found. Pros: excellent cache performance since data is stored contiguously, simple implementation. Cons: can cause "primary clustering" where long runs of occupied slots form, degrading performance. Load factor should stay below 0.7 for efficiency.',available:!0},{to:"/hashtable_quadratic",icon:Xc,title:"Quadratic Probing",description:'Instead of checking consecutive slots, probe at quadratic intervals: 1², 2², 3²... positions away from the original hash. This eliminates primary clustering but can cause "secondary clustering" where keys with the same hash follow the same probe sequence. Table size should be prime and load factor < 0.5 to guarantee finding an empty slot. Used when cache performance is less critical than even distribution.',available:!0},{to:"/hashtable_chaining",icon:ix,title:"Separate Chaining",description:"Each array slot holds a linked list (chain) of all entries that hash to that index. No limit on how many items can be stored — just grow the chains. Handles high load factors gracefully (even > 1.0). Simpler deletion than open addressing. Used in Java's HashMap, Python's dict (with optimization). Trade-off: extra memory for pointers, potentially poor cache performance with long chains.",available:!0}]},{id:"heaps",name:"Priority Queues & Heaps",icon:vx,description:"Complete binary trees satisfying the heap property — either every parent ≥ children (max-heap) or every parent ≤ children (min-heap). Heaps power priority queues, enabling O(1) access to the extreme element and O(log n) insertions and deletions.",color:"#ec4899",items:[{to:"/minheap",icon:dx,title:"Min Heap",description:`Every parent node is smaller than or equal to its children, so the minimum element is always at the root — accessible in O(1). Insert and extract-min are O(log n) as elements "bubble up" or "sink down" to maintain the heap property. Critical for: Dijkstra's shortest path algorithm, Prim's minimum spanning tree, job schedulers (process with smallest priority runs next), and efficiently finding the k largest elements in a stream.`,available:!0},{to:"/maxheap",icon:ux,title:"Max Heap",description:"The mirror of min-heap: every parent ≥ children, maximum at root. Extract-max in O(1), insert and delete in O(log n). Powers: Heapsort algorithm (in-place O(n log n) sorting), priority queues where highest priority goes first, finding k smallest elements, implementing a median-finding structure (use one min-heap + one max-heap), and bandwidth management in network routers.",available:!0}]},{id:"trees",name:"Binary Trees",icon:xx,description:"Hierarchical data structures where data flows from a root node down through children. Trees enable O(log n) operations on sorted data and model real-world hierarchies like file systems, organization charts, and decision trees in AI/ML.",color:"#f59e0b",items:[{to:"/binarytree",icon:ax,title:"Binary Tree Traversals",description:"Master the four fundamental ways to visit every node in a binary tree: INORDER (Left→Root→Right) visits nodes in sorted order for BST, used for expression trees; PREORDER (Root→Left→Right) processes root first, perfect for copying trees or creating prefix expressions; POSTORDER (Left→Right→Root) processes children before parent, used for deleting trees or postfix notation; LEVEL-ORDER (BFS) visits level by level, used for finding shortest paths and printing tree structure.",available:!0},{to:"/bst",icon:Vh,title:"Binary Search Tree",description:`The fundamental ordered tree: every node's left subtree contains only smaller values, right subtree only larger values. This property enables O(log n) search by eliminating half the tree at each step — like binary search but in tree form. Supports efficient range queries. Caveat: can degrade to O(n) if insertions create an unbalanced "stick". Foundation for databases, symbol tables, and more advanced balanced trees.`,available:!0},{to:"/avl",icon:lx,title:"AVL Tree",description:"The first self-balancing BST, invented in 1962. Maintains strict balance: height difference between left and right subtrees ≤ 1 at every node. When insertion/deletion violates this, the tree self-corrects using rotations (single or double). Guarantees O(log n) for all operations. More rigidly balanced than Red-Black trees, so faster lookups but slightly slower insertions. Used when reads far exceed writes.",available:!0},{to:"/splay",icon:ox,title:"Splay Tree",description:`A self-adjusting BST with a clever optimization: every accessed node is "splayed" (rotated) to the root. No explicit balance condition, yet achieves O(log n) amortized time. Recently accessed items stay near the root — perfect for caches where some items are accessed repeatedly (temporal locality). Used in Windows NT's virtual memory management, GCC's implementation of certain data structures, and network routers.`,available:!0},{to:"/treap",icon:cx,title:"Treap",description:"A randomized BST that combines tree and heap properties. Each node has a key (BST-ordered) and a random priority (max-heap-ordered). Rotations restore heap order after insertion, giving O(log n) expected time for all operations without complex rebalancing logic. Supports efficient split and merge. Widely used in competitive programming and as a simpler alternative to AVL/Red-Black trees.",available:!0}]},{id:"Graphs",name:"Graphs",icon:Dh,description:"Graphs model relationships between objects using vertices (nodes) and edges (connections). They power social networks, GPS navigation, recommendation systems, and the internet itself. Understanding graphs unlocks solutions to complex real-world problems like finding shortest paths, detecting communities, and optimizing networks.",color:"#ef4444",items:[{to:"/adjacency-matrix",icon:hx,title:"Adjacency Matrix",description:"A 2D array used to represent a finite graph. Each cell at (i, j) indicates if there is an edge from vertex i to vertex j. Simple and fast for dense graphs, but uses O(V^2) space. Not practical for large, sparse graphs.",available:!0},{to:"/adjacency-list",icon:px,title:"Adjacency List",description:"A space-efficient way to represent a graph. Each vertex stores a list of adjacent vertices. Ideal for sparse graphs, supports efficient iteration over neighbors. Commonly used in network routing, social networks, and recommendation systems.",available:!0},{to:"/bfs",icon:fx,title:"Breadth-First Search (BFS)",description:"A fundamental graph traversal algorithm that explores neighbors level by level. Used for finding shortest paths in unweighted graphs, peer-to-peer networks, and web crawlers.",available:!0},{to:"/dfs",icon:mx,title:"Depth-First Search (DFS)",description:"A classic graph traversal technique that explores as far as possible along each branch before backtracking. Used for topological sorting, cycle detection, and solving puzzles like mazes.",available:!0}]}];return n.jsxs("section",{className:"algorithms-section",children:[n.jsxs("div",{className:"section-header",children:[n.jsx("h1",{children:"Explore Data Structures"}),n.jsx("p",{children:"Choose a category to explore different data structures. Each visualizer includes step-by-step explanations and hands-on practice."})]}),n.jsx("div",{className:"categories-container",children:s.map(i=>n.jsxs("div",{className:`category-wrapper${e===i.id?" expanded-wrapper":""}`,style:{"--item-color":i.color},children:[n.jsxs("button",{className:`category-header ${e===i.id?"expanded":""}`,onClick:()=>r(i.id),children:[n.jsx("div",{className:"category-icon",style:{background:i.color},children:n.jsx(i.icon,{})}),n.jsx("div",{className:"category-info",children:n.jsx("h2",{children:i.name})}),n.jsxs("div",{className:"category-meta",children:[n.jsxs("span",{className:"item-count",children:[i.items.filter(a=>a.available).length," visualizers"]}),e===i.id?n.jsx($g,{size:20}):n.jsx(Vg,{size:20})]})]}),n.jsx("div",{className:`category-items ${e===i.id?"expanded":""}`,children:n.jsx("div",{className:"items-grid",children:i.items.map((a,l)=>a.available?n.jsxs(En,{to:a.to,className:"algorithm-item",children:[n.jsx("div",{className:"item-icon",style:{background:i.color},children:n.jsx(a.icon,{})}),n.jsxs("div",{className:"item-info",children:[n.jsx("h3",{children:a.title}),n.jsx("p",{children:a.description})]}),n.jsx(fe,{className:"item-arrow"})]},l):n.jsxs("div",{className:"algorithm-item coming-soon",children:[n.jsx("div",{className:"item-icon disabled",children:n.jsx(a.icon,{})}),n.jsxs("div",{className:"item-info",children:[n.jsx("h3",{children:a.title}),n.jsx("p",{children:a.description})]}),n.jsx("span",{className:"coming-soon-badge",children:"Coming Soon"})]},l))})})]},i.id))})]})}function kx(){return n.jsxs("section",{className:"contact-section",children:[n.jsx("div",{className:"page-header",children:n.jsx("h1",{children:"Contact"})}),n.jsx("div",{className:"contact-content",children:n.jsxs("div",{className:"contact-info",children:[n.jsxs("div",{className:"info-card",children:[n.jsx("div",{className:"info-icon",children:n.jsx(Oh,{})}),n.jsx("h3",{children:"Email"}),n.jsx("p",{children:"For recruitment and professional opportunities"}),n.jsx("a",{href:"mailto:abdullahmahfouz@trentu.ca",className:"info-link",children:"abdullahmahfouz@trentu.ca"})]}),n.jsxs("div",{className:"info-card",children:[n.jsx("div",{className:"info-icon",children:n.jsx(So,{})}),n.jsx("h3",{children:"GitHub"}),n.jsx("p",{children:"View my projects and contributions"}),n.jsx("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",className:"info-link",children:"github.com/abdullahmahfouz"})]}),n.jsxs("div",{className:"info-card",children:[n.jsx("div",{className:"info-icon",children:n.jsx(To,{})}),n.jsx("h3",{children:"LinkedIn"}),n.jsx("p",{children:"Connect for professional networking"}),n.jsx("a",{href:"https://www.linkedin.com/in/abdullah-mahfouz-5188b1306/",target:"_blank",rel:"noopener noreferrer",className:"info-link",children:"Connect on LinkedIn"})]})]})})]})}function wx(){return n.jsxs("section",{className:"contributions-section",children:[n.jsxs("div",{className:"page-header",children:[n.jsx("h1",{children:"Contributions"}),n.jsx("p",{children:"Help us improve this free learning tool for students! Your contributions help make DSA easier to understand for everyone."})]}),n.jsxs("div",{className:"contributions-content",children:[n.jsxs("div",{className:"contribution-card",children:[n.jsx("div",{className:"contribution-icon",children:n.jsx(Ks,{})}),n.jsx("h2",{children:"Code Contributions"}),n.jsx("p",{children:"Found a bug or want to add a new feature? Fork the repository, make your changes, and submit a pull request!"}),n.jsxs("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",className:"btn-primary",children:[n.jsx("span",{children:"View on GitHub"}),n.jsx(fe,{})]})]}),n.jsxs("div",{className:"contribution-card",children:[n.jsx("div",{className:"contribution-icon",children:n.jsx(ml,{})}),n.jsx("h2",{children:"Documentation"}),n.jsx("p",{children:"Help improve our documentation, fix typos, or add examples. Every bit helps!"}),n.jsxs("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",className:"btn-primary",children:[n.jsx("span",{children:"Improve Docs"}),n.jsx(fe,{})]})]}),n.jsxs("div",{className:"contribution-card",children:[n.jsx("div",{className:"contribution-icon",children:n.jsx(Fg,{})}),n.jsx("h2",{children:"Report Issues"}),n.jsx("p",{children:"Found a bug or have a suggestion? Open an issue on GitHub and let us know!"}),n.jsxs("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",className:"btn-primary",children:[n.jsx("span",{children:"Report Issue"}),n.jsx(fe,{})]})]}),n.jsxs("div",{className:"contribution-card",children:[n.jsx("div",{className:"contribution-icon",children:n.jsx(Ne,{})}),n.jsx("h2",{children:"Feature Requests"}),n.jsx("p",{children:"Have an idea for a new visualizer or feature? We'd love to hear your suggestions!"}),n.jsxs(En,{to:"/contact",className:"btn-primary",children:[n.jsx("span",{children:"Suggest Feature"}),n.jsx(fe,{})]})]})]}),n.jsxs("div",{className:"contributors-section",children:[n.jsx("h2",{children:"Contributors"}),n.jsx("div",{className:"contributors-list",children:n.jsxs("div",{className:"contributor-item",children:[n.jsx("div",{className:"contributor-avatar",children:n.jsx(nx,{})}),n.jsxs("div",{className:"contributor-info",children:[n.jsx("h3",{children:"Abdullah Mahfouz"}),n.jsx("p",{children:"Creator & Maintainer"})]})]})}),n.jsx("p",{className:"contributors-note",children:"Want to see your name here? Start contributing today!"})]})]})}function ht(e,t){return e.split(/(`[^`\n]+`|\*\*[^*\n]+\*\*|\*[^*\n]+\*)/g).map((s,i)=>{const a=`${t}-i${i}`;return s.startsWith("`")&&s.endsWith("`")&&s.length>2?n.jsx("code",{className:"ai-inline-code",children:s.slice(1,-1)},a):s.startsWith("**")&&s.endsWith("**")&&s.length>4?n.jsx("strong",{children:s.slice(2,-2)},a):s.startsWith("*")&&s.endsWith("*")&&s.length>2?n.jsx("em",{className:"ai-md-em",children:s.slice(1,-1)},a):s||null})}function bx(e,t){const r=e.split(`
`),s=[];let i=[],a=[],l=null;const o=()=>{const u=i.join(" ").trim();u&&s.push({type:"p",content:u}),i=[]},c=()=>{a.length&&(s.push({type:l,items:[...a]}),a=[],l=null)};for(const u of r){const d=u.trim();if(!d){o(),c();continue}const h=d.match(/^# (.+)$/),m=d.match(/^## (.+)$/),w=d.match(/^### (.+)$/),k=/^---+$/.test(d),N=d.match(/^> (.+)$/),y=d.match(/^[-*+] (.+)$/),f=d.match(/^\d+\. (.+)$/);h||m||w?(o(),c(),w?s.push({type:"h3",content:w[1]}):m?s.push({type:"h2",content:m[1]}):s.push({type:"h1",content:h[1]})):k?(o(),c(),s.push({type:"hr"})):N?(o(),c(),s.push({type:"blockquote",content:N[1]})):y?(o(),l&&l!=="ul"&&c(),l="ul",a.push(y[1])):f?(o(),l&&l!=="ol"&&c(),l="ol",a.push(f[1])):(c(),i.push(u))}return o(),c(),s.map((u,d)=>{const h=`${t}-b${d}`;switch(u.type){case"h1":return n.jsx("p",{className:"ai-md-h1",children:ht(u.content,h)},h);case"h2":return n.jsx("p",{className:"ai-md-h2",children:ht(u.content,h)},h);case"h3":return n.jsx("p",{className:"ai-md-h3",children:ht(u.content,h)},h);case"hr":return n.jsx("hr",{className:"ai-md-hr"},h);case"blockquote":return n.jsx("blockquote",{className:"ai-md-blockquote",children:ht(u.content,h)},h);case"ul":return n.jsx("ul",{className:"ai-md-ul",children:u.items.map((m,w)=>n.jsx("li",{children:ht(m,`${h}-li${w}`)},w))},h);case"ol":return n.jsx("ol",{className:"ai-md-ol",children:u.items.map((m,w)=>n.jsx("li",{children:ht(m,`${h}-li${w}`)},w))},h);case"p":return n.jsx("p",{className:"ai-md-p",children:ht(u.content,h)},h);default:return null}})}function Sx(e){if(!e)return null;const t=[],r=/```(\w*)\n?([\s\S]*?)```/g;let s=0,i;for(;(i=r.exec(e))!==null;)i.index>s&&t.push({type:"text",content:e.slice(s,i.index)}),t.push({type:"code",lang:i[1]||"",content:i[2].trim()}),s=i.index+i[0].length;return s<e.length&&t.push({type:"text",content:e.slice(s)}),t.map((a,l)=>a.type==="code"?n.jsxs("div",{className:"ai-code-block",children:[a.lang&&n.jsx("div",{className:"ai-code-lang",children:a.lang}),n.jsx("pre",{children:n.jsx("code",{children:a.content})})]},l):n.jsx(Pe.Fragment,{children:bx(a.content,`s${l}`)},l))}function me({context:e="Data Structures"}){const[t,r]=p.useState(""),[s,i]=p.useState(""),[a,l]=p.useState(!1),o=()=>{const h=e.toLowerCase();return h.includes("stack")?"e.g., How does LIFO work?":h.includes("queue")?"e.g., What is FIFO?":h.includes("linked list")?"e.g., How do I insert at the head?":h.includes("hash")?"e.g., What is a collision?":h.includes("binary tree")||h.includes("traversal")?"e.g., What is inorder traversal?":"e.g., How does this work?"},c=async()=>{if(t.trim()){l(!0),i("");try{const h=await fetch("/api/ask-ai",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:t.trim(),code:e})}),m=await h.json();i(h.ok?m.answer||"No answer returned.":"Currently not working, try again later.")}catch{i("Currently not working, try again later.")}finally{l(!1)}}},u=h=>{h.key==="Enter"&&c()},d=s.startsWith("Currently not working");return n.jsxs("div",{className:"ai-assistant",children:[n.jsxs("div",{className:"ai-header",children:[n.jsx(Lh,{size:20}),n.jsx("h3",{children:"AI Assistant"})]}),n.jsxs("p",{className:"ai-subtitle",children:["Ask me anything about"," ",e.toLowerCase().includes("problem")?"this problem":e.toLowerCase(),"!"]}),n.jsxs("div",{className:"ai-input-group",children:[n.jsx("input",{type:"text",value:t,onChange:h=>r(h.target.value),onKeyDown:u,placeholder:o(),disabled:a,"aria-label":"Ask a question"}),n.jsx("button",{onClick:c,disabled:a||!t.trim(),children:a?"Asking…":"Ask"})]}),(a||s)&&n.jsxs("div",{id:"ai-response",className:s?"has-content":"",children:[a&&n.jsxs("div",{className:"ai-loading-container",children:[n.jsxs("div",{className:"ai-loading-dots",children:[n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{})]}),n.jsx("div",{className:"ai-loading-text",children:"Analyzing…"})]}),s&&n.jsx("div",{className:d?"ai-error":"ai-answer",children:d?s:Sx(s)})]})]})}const Cx=`class Stack:
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
print(stack.peek())  # 20`,Tx=`class Stack {
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
console.log(stack.pop()); // 20`,_x=`import java.util.EmptyStackException;

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
System.out.println(stack.pop()); // 20`,Lx={python:Cx,javascript:Tx,java:_x,"c++":`#include <iostream>
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
Console.WriteLine(stack.Pop()); // 20`},Ex=`class Queue:
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
print(queue.peek())     # 20`,Ox=`class Queue {
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
console.log(queue.dequeue()); // 10`,Rx=`import java.util.NoSuchElementException;

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
System.out.println(queue.dequeue()); // 10`,Px={python:Ex,javascript:Ox,java:Rx,"c++":`#include <iostream>
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
Console.WriteLine(queue.Dequeue()); // 10`},Ix=`class Node:
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
print(ll.search(20))  # 1`,Mx=`class Node {
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
ll.insertAtTail(30);`,zx=`public class SinglyLinkedList<T> {
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
ll.insertAtTail(30);`,Fx={python:Ix,javascript:Mx,java:zx,"c++":`#include <iostream>
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
ll.InsertAtTail(30);`},Ax=`import random

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
        return False`,Vx=`class SkipListNode {
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
}`,Dx=`import java.util.Random;

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
}`,$x={python:Ax,javascript:Vx,java:Dx,"c++":`#include <vector>
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
}`},Bx=`class TreeNode:
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
print("Level:     ", tree.levelorder_traversal())  # [50, 30, 70, 20, 40, 60, 80]`,Hx=`class TreeNode {
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
console.log("Level:    ", tree.levelOrderTraversal());  // [50, 30, 70, 20, 40, 60, 80]`,qx=`import java.util.*;

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
System.out.println("Level:     " + tree.levelOrderTraversal());`,Ux={python:Bx,javascript:Hx,java:qx,"c++":`#include <iostream>
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
Console.WriteLine("Level:     " + string.Join(", ", tree.LevelOrderTraversal()));`},Kx=`class HashTable:
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
print(ht.get("banana"))  # 3`,Wx=`class HashTable {
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
console.log(ht.get("apple"));  // 5`,Gx=`public class HashTable<K, V> {
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
System.out.println(ht.get("apple")); // 5`,Qx={python:Kx,javascript:Wx,java:Gx,"c++":`#include <iostream>
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
Console.WriteLine(ht.Get("apple")); // 5`},Xx=`class Node:
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
ht.delete("banana")`,Yx=`class Node {
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
console.log(ht.search("apple"));  // 5`,Jx=`public class HashTableChaining<K, V> {
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
System.out.println(ht.search("apple"));  // 5`,Zx={python:Xx,javascript:Yx,java:Jx,"c++":`#include <iostream>
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
Console.WriteLine(ht.Search("apple"));  // 5`},ev=`class TreeNode:
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
print("After delete 30:", bst.inorder())  # [20, 40, 50, 60, 70, 80]`,nv=`class TreeNode {
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
console.log("After delete 30:", bst.inorder());  // [20, 40, 50, 60, 70, 80]`,tv=`import java.util.*;

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
System.out.println("After delete: " + bst.inorder());  // [20, 40, 50, 60, 70, 80]`,rv={python:ev,javascript:nv,java:tv,"c++":`#include <iostream>
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
Console.WriteLine("After delete: " + string.Join(", ", bst.Inorder()));`},sv=`class AVLNode:
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
# Tree automatically balances after each insert!`,iv=`class AVLNode {
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
[30, 20, 40, 10, 25, 35, 50].forEach(v => avl.insert(v));`,av=`class AVLNode {
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
for (int v : new int[]{30, 20, 40, 10, 25}) avl.insert(v);`,lv={python:sv,javascript:iv,java:av,"c++":`#include <algorithm>
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

// Usage: var avl = new AVLTree(); foreach(var v in new[]{30,20,40}) avl.Insert(v);`},ov=`class SplayNode:
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
print("Root:", splay.root.key)  # 20`,cv=`class SplayNode {
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
splay.search(20); // 20 moves to root`,dv=`class SplayNode {
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
st.search(20); // 20 is now root`,uv={python:ov,javascript:cv,java:dv,"c++":`struct SplayNode {
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

// Usage: var st = new SplayTree(); foreach(var v in new[]{50,30,70}) st.Insert(v);`},hv=`class MinHeap:
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
print("New min:", heap.peek())  # 2`,pv=`class MinHeap {
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
console.log("Extract:", heap.extractMin());  // 1`,fv=`import java.util.*;

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
System.out.println("Min: " + heap.peek());  // 1`,mv={python:hv,javascript:pv,java:fv,"c++":`#include <vector>
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

// Usage: var h = new MinHeap(); foreach(var v in new[]{5,3,8,1}) h.Insert(v);`},gv=`class MaxHeap:
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
print("New max:", heap.peek())  # 8`,xv=`class MaxHeap {
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
console.log("Extract:", heap.extractMax());  // 9`,vv=`import java.util.*;

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
System.out.println("Max: " + heap.peek());  // 9`,yv={python:gv,javascript:xv,java:vv,"c++":`#include <vector>
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

// Usage: var h = new MaxHeap(); foreach(var v in new[]{5,3,8,9}) h.Insert(v);`},jv=`from collections import defaultdict

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
print(g.get_neighbors('A'))  # [('B', 1), ('C', 1)]`,Nv=`class Graph {
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
console.log(g.getNeighbors('A'));`,kv=`import java.util.*;

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
g.addEdge("A", "C");`,wv={python:jv,javascript:Nv,java:kv,"c++":`#include <iostream>
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
g.AddEdge("A", "C");`},bv=`from collections import deque

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

print(bfs(graph, 'A'))  # ['A', 'B', 'C', 'D', 'E', 'F']`,Sv=`function bfs(graph, start) {
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

console.log(bfs(graph, 'A')); // ['A', 'B', 'C', 'D', 'E', 'F']`,Cv=`import java.util.*;

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
}`,Tv={python:bv,javascript:Sv,java:Cv,"c++":`#include <iostream>
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
}`},_v=`def dfs(graph, start):
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

print(dfs(graph, 'A'))  # ['A', 'B', 'D', 'E', 'F', 'C']`,Lv=`function dfs(graph, start) {
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

console.log(dfs(graph, 'A'));`,Ev=`import java.util.*;

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
}`,Ov={python:_v,javascript:Lv,java:Ev,"c++":`#include <iostream>
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
}`},Rv=`import random

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
print("After delete 30:", treap.inorder())  # [20, 40, 50, 60, 70, 80]`,Pv=`class TreapNode {
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
console.log("After delete 30:", treap.inorder());  // [20, 40, 50, 60, 70, 80]`,Iv=`import java.util.*;

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
System.out.println("After delete: " + treap.inorder());  // [20, 40, 50, 60, 70, 80]`,Mv={python:Rv,javascript:Pv,java:Iv,"c++":`#include <iostream>
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
Console.WriteLine("After delete: " + string.Join(", ", treap.Inorder()));`},pa={stack:Lx,queue:Px,linkedlist:Fx,skiplist:$x,binarytree:Ux,hashtable:Qx,hashtableChaining:Zx,bst:rv,avl:lv,splay:uv,minheap:mv,maxheap:yv,graph:wv,bfs:Tv,dfs:Ov,treap:Mv};function ye({dataStructure:e}){var h;const[t,r]=p.useState("python"),[s,i]=p.useState(!1),a=["python","javascript","java","c++","c#"],l=a.filter(m=>{var w;return(w=pa[e])==null?void 0:w[m]}),o=l.length>0?l:a,c=((h=pa[e])==null?void 0:h[t])||"Code not available for this data structure";p.useEffect(()=>{var m;!((m=pa[e])!=null&&m[t])&&l.length>0&&r(l[0])},[e,t,l]);const u=m=>({python:"Python",javascript:"JavaScript",java:"Java","c++":"C++","c#":"C#"})[m]||m,d=()=>{navigator.clipboard.writeText(c),i(!0),setTimeout(()=>i(!1),2e3)};return n.jsxs("div",{className:"code-section",children:[n.jsxs("h2",{children:[n.jsx(Gc,{})," Implementation"]}),n.jsx("div",{className:"code-tabs",children:o.map(m=>n.jsxs("button",{className:`tab-btn ${t===m?"active":""}`,onClick:()=>r(m),children:[n.jsx(Gc,{}),u(m)]},m))}),n.jsx("div",{className:"code-panels",children:n.jsx("div",{className:"code-panel active",children:n.jsxs("pre",{children:[n.jsxs("button",{className:"copy-btn",onClick:d,children:[n.jsx(Eh,{})," ",s?"Copied!":"Copy"]}),n.jsx("code",{children:c})]})})})]})}function $e({message:e}){if(!(e!=null&&e.text))return null;const t=e.type||"info";return n.jsx("div",{className:`message message-${t}`,children:e.text})}async function le(e){return await(await fetch(e)).json()}async function ne(e,t){return await(await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()}async function yi(e,t=null){const r={method:"DELETE",headers:{"Content-Type":"application/json"}};return t&&(r.body=JSON.stringify(t)),await(await fetch(e,r)).json()}function Be(e=3e3){const[t,r]=p.useState(null),s=p.useRef(null),i=p.useCallback(()=>{r(null),s.current&&(clearTimeout(s.current),s.current=null)},[]),a=p.useCallback((l,o="info")=>{r({text:l,type:o}),s.current&&clearTimeout(s.current),s.current=setTimeout(()=>{r(null),s.current=null},e)},[e]);return p.useEffect(()=>i,[i]),{message:t,showMessage:a,clearMessage:i}}function zv(){const[e,t]=p.useState([]),[r,s]=p.useState(0),[i,a]=p.useState("Empty"),[l]=p.useState(10),{message:o,showMessage:c}=Be(3e3),[u,d]=p.useState("");p.useEffect(()=>{h()},[]);const h=async()=>{try{const f=await le("/api/stack");t(f.items||[]),s(f.size||0),a(f.top!==null&&f.top!==void 0?f.top:"Empty")}catch(f){console.error("Error loading stack:",f)}},m=async()=>{if(!u||u.trim()===""){c("Please enter a number!","error");return}const f=Number(u);if(isNaN(f)){c("Please enter a valid number!","error");return}try{const g=await ne("/api/stack/push",{value:f});if(g.error){c(g.error,"error");return}t(g.items||[]),s(g.size||0),a(g.top!==null&&g.top!==void 0?g.top:"Empty"),c(`Pushed ${f} to stack!`,"success"),d("")}catch(g){console.error("Push error:",g),c("Error pushing to stack. Is Flask running?","error")}},w=async()=>{try{const f=await ne("/api/stack/pop",{});if(f.error){c(f.error,"error");return}t(f.items||[]),s(f.size||0),a(f.top!==null&&f.top!==void 0?f.top:"Empty"),c(`Popped ${f.popped} from stack!`,"success")}catch{c("Error popping from stack","error")}},k=async()=>{try{const f=await le("/api/stack/peek");if(f.error){c(f.error,"error");return}c(`Top element is: ${f.top}`,"info")}catch{c("Error peeking stack","error")}},N=async()=>{try{await ne("/api/stack/clear",{}),t([]),s(0),a("Empty"),c("Stack cleared!","success")}catch{c("Error clearing stack","error")}},y=f=>{f.key==="Enter"&&m()};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Oe,{className:"icon-sm"}),n.jsx("span",{children:"What is a Stack?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:["A ",n.jsx("strong",{children:"Stack"})," is a linear data structure that follows the ",n.jsx("strong",{children:"LIFO"})," (Last In, First Out) principle."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(Ne,{}),n.jsxs("span",{children:["Think of a stack of plates - you can only add or remove from the ",n.jsx("strong",{children:"top"}),"!"]})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Push"}),n.jsx("span",{className:"op-desc",children:"Add to top"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Pop"}),n.jsx("span",{className:"op-desc",children:"Remove from top"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Peek"}),n.jsx("span",{className:"op-desc",children:"View top element"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]})]}),n.jsxs("div",{className:"concept-uses",children:[n.jsx("strong",{children:"Common Uses:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Browser back/forward buttons"}),n.jsx("li",{children:"Undo/Redo functionality"}),n.jsx("li",{children:"Function call stack"}),n.jsx("li",{children:"Expression evaluation"})]})]})]})]}),n.jsx(me,{context:"Stack data structure"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Stack Operations"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"pushValue",children:"Push (Add to top)"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",id:"pushValue",value:u,onChange:f=>d(f.target.value),onKeyPress:y,placeholder:"Enter a value"}),n.jsx("button",{onClick:m,className:"btn btn-push",children:"Push"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Other Operations"}),n.jsxs("div",{className:"btn-group",children:[n.jsx("button",{onClick:w,className:"btn btn-pop",children:"Pop"}),n.jsx("button",{onClick:k,className:"btn btn-peek",children:"Peek"}),n.jsx("button",{onClick:N,className:"btn btn-clear",children:"Clear"})]})]}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Size:"}),n.jsx("span",{className:"info-value",children:r})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Top:"}),n.jsx("span",{className:"info-value",children:i})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Max Size:"}),n.jsx("span",{className:"info-value",children:l})]})]}),n.jsx($e,{message:o})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Stack Visualization"}),n.jsxs("div",{className:"stack-container",children:[n.jsx("div",{className:"stack-visual",children:e.length===0?n.jsx("div",{className:"stack-empty",children:"Stack is empty. Push some items!"}):e.slice().reverse().map((f,g)=>n.jsx("div",{className:"stack-item",children:f},g))}),n.jsx("div",{className:"stack-base",children:n.jsx("span",{children:"BOTTOM"})})]})]})]}),n.jsx(ye,{dataStructure:"stack"})]})}function Fv(){const[e,t]=p.useState([]),[r,s]=p.useState(0),[i,a]=p.useState("Empty"),[l]=p.useState(10),{message:o,showMessage:c}=Be(3e3),[u,d]=p.useState("");p.useEffect(()=>{h()},[]);const h=async()=>{try{const y=await le("/api/queue");t(y.items||[]),s(y.size||0),a(y.front!==null&&y.front!==void 0?y.front:"Empty")}catch(y){console.error("Error loading queue:",y)}},m=async()=>{if(!u||u.trim()===""){c("Please enter a number!","error");return}const y=Number(u);if(isNaN(y)){c("Please enter a valid number!","error");return}try{const f=await ne("/api/queue/enqueue",{value:y});if(f.error){c(f.error,"error");return}t(f.items||[]),s(f.size||0),a(f.front!==null&&f.front!==void 0?f.front:"Empty"),c(`Enqueued ${y}!`,"success"),d("")}catch(f){console.error("Enqueue error:",f),c("Error enqueueing. Is Flask running?","error")}},w=async()=>{try{const y=await ne("/api/queue/dequeue",{});if(y.error){c(y.error,"error");return}t(y.items||[]),s(y.size||0),a(y.front!==null&&y.front!==void 0?y.front:"Empty"),c(`Dequeued ${y.dequeued} from queue!`,"success")}catch{c("Error dequeuing from queue","error")}},k=async()=>{try{const y=await le("/api/queue/peek");if(y.error){c(y.error,"error");return}c(`Front element is: ${y.front}`,"info")}catch{c("Error peeking queue","error")}},N=async()=>{try{await ne("/api/queue/clear",{}),t([]),s(0),a("Empty"),c("Queue cleared!","success")}catch{c("Error clearing queue","error")}};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Oe,{className:"icon-sm"}),n.jsx("span",{children:"What is a Queue?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:["A ",n.jsx("strong",{children:"Queue"})," is a linear data structure that follows the ",n.jsx("strong",{children:"FIFO"})," (First In, First Out) principle."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(Ne,{}),n.jsxs("span",{children:["Think of a line at a store – the first person in line gets served ",n.jsx("strong",{children:"first"}),"!"]})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Enqueue"}),n.jsx("span",{className:"op-desc",children:"Add to the back"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Dequeue"}),n.jsx("span",{className:"op-desc",children:"Remove from the front"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Peek"}),n.jsx("span",{className:"op-desc",children:"View the front element"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]})]})]})]}),n.jsx(me,{context:"Queue data structure"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Queue Operations"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"enqueueValue",children:"Enqueue (Add to back)"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",id:"enqueueValue",value:u,onChange:y=>d(y.target.value),onKeyPress:y=>y.key==="Enter"&&m(),placeholder:"Enter a value"}),n.jsx("button",{onClick:m,className:"btn btn-enqueue",children:"Enqueue"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Other Operations"}),n.jsxs("div",{className:"btn-group",children:[n.jsx("button",{onClick:w,className:"btn btn-dequeue",children:"Dequeue"}),n.jsx("button",{onClick:k,className:"btn btn-peek",children:"Peek"}),n.jsx("button",{onClick:N,className:"btn btn-clear",children:"Clear"})]})]}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Size:"}),n.jsx("span",{className:"info-value",children:r})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Front:"}),n.jsx("span",{className:"info-value",children:i})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Max Size:"}),n.jsx("span",{className:"info-value",children:l})]})]}),n.jsx($e,{message:o})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Queue Visualization"}),n.jsxs("div",{className:"queue-container",children:[n.jsx("div",{className:"queue-label",children:n.jsx("span",{className:"front-marker",children:"FRONT →"})}),n.jsx("div",{className:"queue-visual",children:e.length===0?n.jsx("div",{className:"queue-empty",children:"Queue is empty. Enqueue some items!"}):e.map((y,f)=>{const g=f===0,x=f===e.length-1;return n.jsxs("div",{className:`queue-item ${g?"queue-front":""} ${x?"queue-back":""}`,children:[g&&n.jsx("span",{className:"front-label",children:"FRONT"}),y,x&&n.jsx("span",{className:"back-label",children:"BACK"})]},f)})}),n.jsx("div",{className:"queue-label",children:n.jsx("span",{className:"back-marker",children:"← BACK"})})]})]})]}),n.jsx(ye,{dataStructure:"queue"})]})}function Av(){const[e,t]=p.useState([]),[r,s]=p.useState(0),[i,a]=p.useState("Empty"),{message:l,showMessage:o}=Be(3e3),[c,u]=p.useState(""),[d,h]=p.useState(""),[m,w]=p.useState(""),[k,N]=p.useState(""),[y,f]=p.useState(""),[g,x]=p.useState("");p.useEffect(()=>{_()},[]);const _=async()=>{try{const R=await le("/api/linkedlist");t(R.items||[]),s(R.size||0),a(R.head!==null&&R.head!==void 0?R.head:"Empty")}catch(R){console.error("Error loading linked list:",R)}},j=async()=>{if(!c||c.trim()===""){o("Please enter a number!","error");return}const R=Number(c);if(isNaN(R)){o("Please enter a valid number!","error");return}try{const H=await ne("/api/linkedlist/insert/head",{value:R});if(H.error){o(H.error,"error");return}t(H.items||[]),s(H.size||0),a(H.head!==null&&H.head!==void 0?H.head:"Empty"),o(`Inserted ${R} at head!`,"success"),u("")}catch(H){console.error("Insert error:",H),o("Error inserting. Is Flask running?","error")}},z=async()=>{if(!d||d.trim()===""){o("Please enter a number!","error");return}const R=Number(d);if(isNaN(R)){o("Please enter a valid number!","error");return}try{const H=await ne("/api/linkedlist/insert/tail",{value:R});if(H.error){o(H.error,"error");return}t(H.items||[]),s(H.size||0),a(H.head!==null&&H.head!==void 0?H.head:"Empty"),o(`Inserted ${R} at tail!`,"success"),h("")}catch(H){console.error("Insert error:",H),o("Error inserting. Is Flask running?","error")}},C=async()=>{try{const R=await ne("/api/linkedlist/delete/head",{});if(R.error){o(R.error,"error");return}t(R.items||[]),s(R.size||0),a(R.head!==null&&R.head!==void 0?R.head:"Empty"),o("Deleted head!","success")}catch{o("Error deleting head","error")}},D=async()=>{try{const R=await ne("/api/linkedlist/delete/tail",{});if(R.error){o(R.error,"error");return}t(R.items||[]),s(R.size||0),a(R.head!==null&&R.head!==void 0?R.head:"Empty"),o("Deleted tail!","success")}catch{o("Error deleting tail","error")}},$=async()=>{try{await ne("/api/linkedlist/clear",{}),t([]),s(0),a("Empty"),o("List cleared!","success")}catch{o("Error clearing list","error")}};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Oe,{className:"icon-sm"}),n.jsx("span",{children:"What is a Singly Linked List?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:["A ",n.jsx("strong",{children:"Singly Linked List"})," is a linear data structure where each element contains data and a pointer to the next node."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(Ne,{}),n.jsxs("span",{children:["Think of a treasure hunt – each clue points to the ",n.jsx("strong",{children:"next location"}),"!"]})]})]})]}),n.jsx(me,{context:"Singly Linked List data structure"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Linked List Operations"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"insertHeadValue",children:"Insert at Head"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",id:"insertHeadValue",value:c,onChange:R=>u(R.target.value),onKeyPress:R=>R.key==="Enter"&&j(),placeholder:"Enter a value"}),n.jsx("button",{onClick:j,className:"btn btn-insert",children:"Insert Head"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"insertTailValue",children:"Insert at Tail"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",id:"insertTailValue",value:d,onChange:R=>h(R.target.value),onKeyPress:R=>R.key==="Enter"&&z(),placeholder:"Enter a value"}),n.jsx("button",{onClick:z,className:"btn btn-insert",children:"Insert Tail"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Delete Operations"}),n.jsxs("div",{className:"btn-group",children:[n.jsx("button",{onClick:C,className:"btn btn-delete",children:"Delete Head"}),n.jsx("button",{onClick:D,className:"btn btn-delete",children:"Delete Tail"})]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:$,className:"btn btn-clear full-width",children:"Clear All"})}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Size:"}),n.jsx("span",{className:"info-value",children:r})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Head:"}),n.jsx("span",{className:"info-value",children:i})]})]}),n.jsx($e,{message:l})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Linked List Visualization"}),n.jsx("div",{className:"linkedlist-container",children:n.jsx("div",{className:"linkedlist-visual",children:e.length===0?n.jsx("div",{className:"linkedlist-empty",children:"List is empty. Insert some nodes!"}):e.map((R,H)=>n.jsx(Pe.Fragment,{children:n.jsxs("div",{className:"linkedlist-node",children:[n.jsx("div",{className:"node-value",children:R}),H<e.length-1&&n.jsx("div",{className:"node-arrow",children:"→"})]})},H))})})]})]}),n.jsx(ye,{dataStructure:"linkedlist"})]})}function Vv(){const[e,t]=p.useState([]),[r,s]=p.useState([]),[i,a]=p.useState(0),[l,o]=p.useState(0),{message:c,showMessage:u}=Be(3e3),[d,h]=p.useState(""),[m,w]=p.useState(""),[k,N]=p.useState(""),[y,f]=p.useState([]),[g,x]=p.useState(null),[_,j]=p.useState(null);p.useEffect(()=>{z()},[]);const z=async()=>{try{const I=await le("/api/skiplist");t(I.levels||[]),s(I.nodes||[]),a(I.maxLevel||0),o(I.size||0)}catch(I){console.error("Error loading skip list:",I)}},C=async()=>{if(!d||d.trim()===""){u("Please enter a number!","error");return}const I=Number(d);if(isNaN(I)||!Number.isInteger(I)){u("Please enter a valid integer!","error");return}try{const v=await ne("/api/skiplist/insert",{value:I});if(v.error){u(v.error,"error");return}t(v.levels||[]),s(v.nodes||[]),a(v.maxLevel||0),o(v.size||0),j(I),u(`Inserted ${I} at level ${v.insertedLevel}!`,"success"),h(""),setTimeout(()=>j(null),2e3)}catch(v){console.error("Insert error:",v),u("Error inserting. Is Flask running?","error")}},D=async()=>{if(!m||m.trim()===""){u("Please enter a number!","error");return}const I=Number(m);if(isNaN(I)||!Number.isInteger(I)){u("Please enter a valid integer!","error");return}try{const v=await ne("/api/skiplist/delete",{value:I});if(v.error){u(v.error,"error");return}t(v.levels||[]),s(v.nodes||[]),a(v.maxLevel||0),o(v.size||0),u(`Deleted ${I}!`,"success"),w("")}catch(v){console.error("Delete error:",v),u("Error deleting. Is Flask running?","error")}},$=async()=>{if(!k||k.trim()===""){u("Please enter a number!","error");return}const I=Number(k);if(isNaN(I)||!Number.isInteger(I)){u("Please enter a valid integer!","error");return}try{const v=await ne("/api/skiplist/search",{value:I});f(v.path||[]),x(v.found),v.found?(j(I),u(`Found ${I}!`,"success")):u(`${I} not found`,"warning"),N(""),setTimeout(()=>{f([]),x(null),j(null)},3e3)}catch(v){console.error("Search error:",v),u("Error searching. Is Flask running?","error")}},R=async()=>{try{await ne("/api/skiplist/clear",{}),t([]),s([]),a(0),o(0),f([]),x(null),j(null),u("Skip list cleared!","success")}catch{u("Error clearing skip list","error")}},H=I=>{const v=r.find(T=>T.value===I);return v?v.level:0},W=(I,v)=>{var T;return(T=e[v])==null?void 0:T.includes(I)},E=()=>e.length===0?[]:[...e[0]].sort((I,v)=>I-v);return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Oe,{className:"icon-sm"}),n.jsx("span",{children:"What is a Skip List?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:["A ",n.jsx("strong",{children:"Skip List"})," is a probabilistic data structure that allows O(log n) search, insert, and delete operations by maintaining multiple layers of linked lists."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(Ne,{}),n.jsx("span",{children:"Think of an express train system - express lines skip stations to get you there faster!"})]})]})]}),n.jsx(me,{context:"Skip List data structure"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Skip List Operations"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"insertValue",children:"Insert Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",id:"insertValue",value:d,onChange:I=>h(I.target.value),onKeyPress:I=>I.key==="Enter"&&C(),placeholder:"Enter integer"}),n.jsx("button",{onClick:C,className:"btn btn-insert",children:"Insert"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"searchValue",children:"Search Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",id:"searchValue",value:k,onChange:I=>N(I.target.value),onKeyPress:I=>I.key==="Enter"&&$(),placeholder:"Enter integer"}),n.jsx("button",{onClick:$,className:"btn btn-search",children:"Search"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"deleteValue",children:"Delete Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",id:"deleteValue",value:m,onChange:I=>w(I.target.value),onKeyPress:I=>I.key==="Enter"&&D(),placeholder:"Enter integer"}),n.jsx("button",{onClick:D,className:"btn btn-delete",children:"Delete"})]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:R,className:"btn btn-clear full-width",children:"Clear All"})}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Size:"}),n.jsx("span",{className:"info-value",children:l})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Max Level:"}),n.jsx("span",{className:"info-value",children:i})]})]}),n.jsxs("div",{className:"complexity-info",children:[n.jsx("h3",{children:"Time Complexity"}),n.jsxs("div",{className:"complexity-item",children:[n.jsx("span",{children:"Search:"}),n.jsx("span",{className:"complexity-value",children:"O(log n) avg"})]}),n.jsxs("div",{className:"complexity-item",children:[n.jsx("span",{children:"Insert:"}),n.jsx("span",{className:"complexity-value",children:"O(log n) avg"})]}),n.jsxs("div",{className:"complexity-item",children:[n.jsx("span",{children:"Delete:"}),n.jsx("span",{className:"complexity-value",children:"O(log n) avg"})]})]}),n.jsx($e,{message:c})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Skip List Visualization"}),n.jsx("div",{className:"skiplist-container",children:l===0?n.jsx("div",{className:"skiplist-empty",children:"Skip list is empty. Insert some values!"}):n.jsxs("div",{className:"skiplist-visual",children:[[...Array(i+1)].reverse().map((I,v)=>{const T=i-v;return n.jsxs("div",{className:"skiplist-level",children:[n.jsxs("div",{className:"level-label",children:[n.jsx(Co,{size:14}),n.jsxs("span",{children:["L",T]})]}),n.jsxs("div",{className:"level-nodes",children:[n.jsx("div",{className:"skiplist-head",children:"HEAD"}),n.jsx("div",{className:"skiplist-arrow",children:"→"}),E().map((A,S)=>{const L=W(A,T),F=_===A;return n.jsx(Pe.Fragment,{children:L?n.jsxs(n.Fragment,{children:[n.jsx("div",{className:`skiplist-node ${F?"highlighted":""}`,children:A}),n.jsx("div",{className:"skiplist-arrow",children:"→"})]}):n.jsx(n.Fragment,{children:n.jsx("div",{className:"skiplist-gap",children:n.jsx("div",{className:"gap-line"})})})},`${T}-${A}`)}),n.jsx("div",{className:"skiplist-null",children:"NULL"})]})]},T)}),n.jsx("div",{className:"vertical-connectors",children:E().map(I=>{const v=H(I);return n.jsx("div",{className:"connector-column",style:{"--node-level":v},children:[...Array(v)].map((T,A)=>n.jsx("div",{className:"vertical-line"},A))},`connector-${I}`)})})]})}),n.jsxs("div",{className:"skiplist-legend",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color head"}),n.jsx("span",{children:"Head Node"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color node"}),n.jsx("span",{children:"Data Node"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color highlighted"}),n.jsx("span",{children:"Highlighted"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color null"}),n.jsx("span",{children:"Null Pointer"})]})]})]})]}),n.jsx(ye,{dataStructure:"skiplist"})]})}function Dv(){const[e,t]=p.useState([]),[r,s]=p.useState(0),[i,a]=p.useState(0),[l,o]=p.useState(0),[c,u]=p.useState(0),{message:d,showMessage:h}=Be(3e3),[m,w]=p.useState(""),[k,N]=p.useState(""),[y,f]=p.useState(""),[g,x]=p.useState(""),[_,j]=p.useState(null),[z,C]=p.useState([]),[D,$]=p.useState(null),[R,H]=p.useState(null);p.useEffect(()=>{W()},[]);const W=async()=>{try{const L=await le("/api/hashtable");t(L.table||[]),s(L.size||0),a(L.capacity||0),o(L.load_factor||0),u(L.collision_count||0)}catch(L){console.error("Error loading hashtable:",L)}},E=L=>{if(!i||i===0)return 0;let F=0;for(let V=0;V<L.length;V++)F=(F*31+L.charCodeAt(V))%i;return F},I=(L,F)=>{const V=E(L),B=[V];let O=V;for(;F[O]&&F[O][0]!==L&&(O=(O+1)%i,B.push(O),!(O===V||B.length>i)););return{originalHash:V,path:B,finalSlot:O}},v=async()=>{if(!m.trim()||!k.trim()){h("Please enter both key and value!","error");return}const L=i>0?E(m.trim()):0,F=e.length>0&&e[L]&&e[L][0]!==m.trim();let V=null;F&&(V=I(m.trim(),e));try{const B=await ne("/api/hashtable/insert",{key:m.trim(),value:k.trim()});if(B.error){h(B.error,"error");return}await W(),$(m.trim()),F&&V?(H({key:m.trim(),originalSlot:V.originalHash,probedSlots:V.path,finalSlot:V.path[V.path.length-1]}),C(V.path),h(`Collision! "${m}" hashed to ${V.originalHash}, probed ${V.path.length} slot(s)`,"warning"),setTimeout(()=>{C([]),H(null)},4e3)):(h(`Inserted "${m}" → slot ${L}`,"success"),j(L),setTimeout(()=>j(null),2e3)),w(""),N(""),setTimeout(()=>$(null),3e3)}catch{h("Error inserting. Is Flask running?","error")}},T=async()=>{if(!y.trim()){h("Please enter a key!","error");return}try{const L=await ne("/api/hashtable/delete",{key:y.trim()});if(L.error){h(L.error,"error");return}await W(),h(`Deleted "${y}"`,"success"),f("")}catch{h("Error deleting. Is Flask running?","error")}},A=async()=>{if(!g.trim()){h("Please enter a key!","error");return}try{const L=await le(`/api/hashtable/get?key=${encodeURIComponent(g.trim())}`);if(L.error){h(L.error,"error");return}L.found?h(`Found: "${g}" = ${L.value}`,"success"):h(`Key "${g}" not found`,"error"),x("")}catch{h("Error searching item","error")}},S=async()=>{try{await ne("/api/hashtable/clear",{}),await W(),C([]),H(null),h("Hashtable cleared!","success")}catch{h("Error clearing hashtable","error")}};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"intro-left",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Oe,{className:"icon-sm"}),n.jsx("span",{children:"What is a Hash Table?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:["A ",n.jsx("strong",{children:"Hash Table"})," maps keys to values using a hash function for O(1) lookups."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(Ne,{}),n.jsxs("span",{children:["Like a ",n.jsx("strong",{children:"coat check"})," – give them your coat (value), get a ticket number (hash of key)!"]})]})]})]}),n.jsxs("div",{className:"concept-box",style:{marginTop:"1rem"},children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Sn,{className:"icon-sm",style:{color:"#f59e0b"}}),n.jsx("span",{children:"Linear Probing"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:["When two keys hash to the same slot (",n.jsx("strong",{children:"collision"}),"), we check the next slot until we find an empty one."]}),n.jsxs("div",{className:"concept-analogy",style:{marginTop:"0.5rem"},children:[n.jsx(Gn,{style:{color:"#3b82f6"}}),n.jsx("span",{children:"Like parking – if spot 3 is taken, try spot 4, then 5..."})]})]})]})]}),n.jsx(me,{context:"Hash Table with Linear Probing"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Operations"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Insert Key-Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",value:m,onChange:L=>w(L.target.value),placeholder:"Key"}),n.jsx("input",{type:"text",value:k,onChange:L=>N(L.target.value),onKeyPress:L=>L.key==="Enter"&&v(),placeholder:"Value"}),n.jsx("button",{onClick:v,className:"btn btn-insert",children:"Insert"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Delete Key"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",value:y,onChange:L=>f(L.target.value),onKeyPress:L=>L.key==="Enter"&&T(),placeholder:"Key"}),n.jsx("button",{onClick:T,className:"btn btn-delete",children:"Delete"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Search Key"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",value:g,onChange:L=>x(L.target.value),onKeyPress:L=>L.key==="Enter"&&A(),placeholder:"Key"}),n.jsx("button",{onClick:A,className:"btn btn-search",children:"Search"})]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:S,className:"btn btn-clear",children:"Clear Table"})}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Items"}),n.jsxs("span",{className:"info-value",children:[r,"/",i]})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Load"}),n.jsxs("span",{className:"info-value",style:{color:l>=.7?"#f59e0b":"inherit"},children:[(l*100).toFixed(0),"%"]})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Collisions"}),n.jsx("span",{className:"info-value",style:{color:c>0?"#f59e0b":"inherit"},children:c})]})]}),n.jsxs("div",{className:"rehash-info-box",children:[n.jsx(Rh,{size:16}),n.jsxs("div",{children:[n.jsx("strong",{children:"Rehashing Threshold: 70%"}),n.jsx("p",{children:"In practice, hash tables rehash (double capacity) when load factor reaches ~0.7 to maintain O(1) performance."}),l>=.7?n.jsxs("span",{className:"rehash-warning",children:["Current load (",(l*100).toFixed(0),"%) exceeds threshold!"]}):n.jsxs("span",{className:"rehash-safe",children:["Currently safe (",(l*100).toFixed(0),"% < 70%)"]})]})]}),n.jsx($e,{message:d})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Hash Table"}),m&&n.jsxs("div",{className:"hash-demo",children:[n.jsxs("div",{className:"hash-demo-item",children:[n.jsx("span",{className:"hash-demo-label",children:"Key:"}),n.jsxs("span",{className:"hash-demo-key",children:['"',m,'"']})]}),n.jsx(fe,{className:"hash-demo-arrow"}),n.jsx("div",{className:"hash-demo-item",children:n.jsx("span",{className:"hash-demo-label",children:"hash()"})}),n.jsx(fe,{className:"hash-demo-arrow"}),n.jsxs("div",{className:"hash-demo-item",children:[n.jsx("span",{className:"hash-demo-label",children:"Slot:"}),n.jsx("span",{className:"hash-demo-index",children:E(m)})]})]}),R&&n.jsxs("div",{className:"collision-banner",children:[n.jsx(Sn,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Collision Detected!"}),n.jsxs("p",{children:['"',R.key,'" hashed to slot ',n.jsx("span",{className:"slot-badge original",children:R.originalSlot}),R.probedSlots.length>1&&n.jsxs(n.Fragment,{children:[" ","- Probed: ",R.probedSlots.map((L,F)=>n.jsxs("span",{children:[n.jsx("span",{className:`slot-badge ${F===R.probedSlots.length-1?"final":"probed"}`,children:L}),F<R.probedSlots.length-1&&" > "]},F))]})]})]})]}),n.jsx("div",{className:"ht-visual",children:!e||e.length===0?n.jsx("div",{className:"ht-empty",children:"Hash table is empty. Insert some key-value pairs!"}):n.jsx("div",{className:"ht-buckets",children:e.map((L,F)=>{const V=z.includes(F),B=R&&R.originalSlot===F,O=R&&R.finalSlot===F;return n.jsxs("div",{className:`ht-row ${L?"filled":"empty"} 
                        ${_===F?"highlighted":""} 
                        ${D&&L&&L[0]===D?"just-inserted":""}
                        ${V?"probed":""}
                        ${B?"original-hash":""}
                        ${O?"final-slot":""}`,children:[V&&n.jsx("div",{className:"probe-indicator",children:B?"X":O?"O":">"}),n.jsx("div",{className:`ht-key-box ${L?"has-key":""}`,children:L&&n.jsx("span",{className:"ht-key",children:L[0]})}),n.jsx("div",{className:"ht-arrow",children:L&&n.jsx(fe,{size:20})}),n.jsx("div",{className:`ht-index ${B?"collision-index":""}`,children:F}),n.jsx("div",{className:`ht-value-box ${L?"has-value":""}`,children:L?n.jsx("span",{className:"ht-value",children:L[1]}):n.jsx("span",{className:"ht-empty-slot",children:"—"})})]},F)})})}),n.jsxs("div",{className:"ht-legend",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color key-color"}),n.jsx("span",{children:"Key"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color index-color"}),n.jsx("span",{children:"Index"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color value-color"}),n.jsx("span",{children:"Value"})]}),z.length>0&&n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color probe-color"}),n.jsx("span",{children:"Probing Path"})]})]})]})]}),n.jsx(ye,{dataStructure:"hashtable"})]})}const $v={title:"What is Chaining?",description:"Chaining handles collisions by storing multiple key-value pairs in a linked list at each slot.",codeExample:"slot[hash] → [key1, val1] → [key2, val2] → ...",analogy:"Like a coat rack - multiple coats can hang on the same hook!"},Bv={title:"Chaining vs Probing",chaining:{label:"Chaining:",color:"#22c55e",points:["Uses linked lists","Load factor can exceed 1.0"]},probing:{label:"Probing:",color:"#f59e0b",points:["Finds next empty slot","Load factor must stay below 1.0"]},summary:"Chaining is simpler and handles high load factors better, but uses extra memory for pointers."},Hv={title:"Chaining Advantage",description:"With chaining, load factor can exceed 1.0 because each slot can hold multiple items in a chain.",highLoadThreshold:1.5,highLoadMessage:"High load ({loadFactor}) - chains getting long!",safeMessage:"Load factor: {loadFactor}"},qv={title:"Rehash Table",description:"Doubles the table capacity and redistributes all items to reduce chain lengths.",buttonText:"Rehash",recommendThreshold:1.5},Uv=[{type:"color",className:"key-color",label:"Key"},{type:"color",className:"index-color",label:"Index"},{type:"color",className:"value-color",label:"Value"},{type:"icon",icon:"Link",color:"#8b5cf6",label:"Chain (Linked List)"}],Kv={insert:{label:"Insert Key-Value",keyPlaceholder:"Key",valuePlaceholder:"Value",buttonText:"Insert"},delete:{label:"Delete Key",placeholder:"Key",buttonText:"Delete"},search:{label:"Search Key",placeholder:"Key",buttonText:"Search"},clear:{buttonText:"Clear Table"},rehash:{buttonText:"Rehash"}},Wv={items:"Items",capacity:"Capacity",load:"Load",collisions:"Collisions"},Gv={emptyTable:"Hash table is empty. Insert some key-value pairs!",insertSuccess:'Inserted "{key}" at slot {index}',insertUpdated:'Updated "{key}" at slot {index}',insertCollision:'Collision! Added "{key}" to chain at slot {index}',deleteSuccess:'Deleted "{key}"',searchFound:'Found: "{key}" = {value}',searchNotFound:'Key "{key}" not found',clearSuccess:"Hashtable cleared!",rehashSuccess:"Rehashed! Capacity: {oldCapacity} -> {newCapacity}",rehashEmpty:"Nothing to rehash - table is empty!",errorNoKey:"Please enter a key!",errorNoKeyValue:"Please enter both key and value!",errorInsert:"Error inserting. Is Flask running?",errorDelete:"Error deleting. Is Flask running?",errorSearch:"Error searching item",errorClear:"Error clearing hashtable",errorRehash:"Error rehashing. Is Flask running?"},Z={concept:$v,comparison:Bv,chainingAdvantage:Hv,rehash:qv,legend:Uv,operations:Kv,infoLabels:Wv,messages:Gv};function Qv(){const[e,t]=p.useState([]),[r,s]=p.useState(0),[i,a]=p.useState(0),[l,o]=p.useState(0),[c,u]=p.useState(0),{message:d,showMessage:h}=Be(3e3),[m,w]=p.useState(""),[k,N]=p.useState(""),[y,f]=p.useState(""),[g,x]=p.useState(""),[_,j]=p.useState(null),[z,C]=p.useState(null),[D,$]=p.useState(!1);p.useEffect(()=>{R()},[]);const R=async()=>{try{const T=await le("/api/hashtable_chaining");t(T.table||[]),s(T.size||0),a(T.capacity||0),o(T.load_factor||0),u(T.collision_count||0)}catch(T){console.error("Error loading hashtable:",T)}},H=T=>{if(!i||i===0)return 0;let A=0;for(let S=0;S<T.length;S++)A=(A*31+T.charCodeAt(S))%i;return A},W=async()=>{if(!m.trim()||!k.trim()){h(Z.messages.errorNoKeyValue,"error");return}try{const T=await ne("/api/hashtable_chaining/insert",{key:m.trim(),value:k.trim()});if(T.error){h(T.error,"error");return}await R(),C(m.trim()),T.updated?h(Z.messages.insertUpdated.replace("{key}",m).replace("{index}",T.index),"info"):T.collision?h(Z.messages.insertCollision.replace("{key}",m).replace("{index}",T.index),"warning"):h(Z.messages.insertSuccess.replace("{key}",m).replace("{index}",T.index),"success"),j(T.index),setTimeout(()=>{j(null),C(null)},3e3),w(""),N("")}catch{h(Z.messages.errorInsert,"error")}},E=async()=>{if(!y.trim()){h(Z.messages.errorNoKey,"error");return}try{const T=await ne("/api/hashtable_chaining/delete",{key:y.trim()});if(T.error){h(T.error,"error");return}await R(),h(Z.messages.deleteSuccess.replace("{key}",y),"success"),f("")}catch{h(Z.messages.errorDelete,"error")}},I=async()=>{if(!g.trim()){h(Z.messages.errorNoKey,"error");return}try{const T=await le(`/api/hashtable_chaining/get?key=${encodeURIComponent(g.trim())}`);if(T.error){h(T.error,"error");return}T.found?h(Z.messages.searchFound.replace("{key}",g).replace("{value}",T.value),"success"):h(Z.messages.searchNotFound.replace("{key}",g),"error"),x("")}catch{h(Z.messages.errorSearch,"error")}},v=async()=>{try{await ne("/api/hashtable_chaining/clear",{}),await R(),j(null),C(null),h(Z.messages.clearSuccess,"success")}catch{h(Z.messages.errorClear,"error")}};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"intro-left",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Oe,{className:"icon-sm"}),n.jsx("span",{children:Z.concept.title})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"Chaining"})," ",Z.concept.description.replace("Chaining ","")]}),n.jsx("div",{style:{background:"var(--bg-tertiary)",padding:"0.75rem",borderRadius:"8px",marginTop:"0.5rem",fontFamily:"monospace",fontSize:"0.9rem"},children:n.jsx("div",{children:Z.concept.codeExample})}),n.jsxs("div",{className:"concept-analogy",style:{marginTop:"0.75rem"},children:[n.jsx(Ne,{}),n.jsx("span",{children:Z.concept.analogy})]})]})]}),n.jsxs("div",{className:"concept-box",style:{marginTop:"1rem"},children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Gn,{className:"icon-sm",style:{color:"#3b82f6"}}),n.jsx("span",{children:Z.comparison.title})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",fontSize:"0.85rem"},children:[n.jsxs("div",{children:[n.jsx("strong",{style:{color:Z.comparison.chaining.color},children:Z.comparison.chaining.label}),Z.comparison.chaining.points.map((T,A)=>n.jsx("div",{style:{marginTop:"0.25rem"},children:T},A))]}),n.jsxs("div",{children:[n.jsx("strong",{style:{color:Z.comparison.probing.color},children:Z.comparison.probing.label}),Z.comparison.probing.points.map((T,A)=>n.jsx("div",{style:{marginTop:"0.25rem"},children:T},A))]})]}),n.jsx("p",{style:{marginTop:"0.75rem",fontSize:"0.85rem"},children:Z.comparison.summary})]})]})]}),n.jsx(me,{context:"Hash Table with Chaining"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Operations"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:Z.operations.insert.label}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",value:m,onChange:T=>w(T.target.value),placeholder:Z.operations.insert.keyPlaceholder}),n.jsx("input",{type:"text",value:k,onChange:T=>N(T.target.value),onKeyDown:T=>T.key==="Enter"&&W(),placeholder:Z.operations.insert.valuePlaceholder}),n.jsx("button",{onClick:W,className:"btn btn-insert",children:Z.operations.insert.buttonText})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:Z.operations.delete.label}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",value:y,onChange:T=>f(T.target.value),onKeyDown:T=>T.key==="Enter"&&E(),placeholder:Z.operations.delete.placeholder}),n.jsx("button",{onClick:E,className:"btn btn-delete",children:Z.operations.delete.buttonText})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:Z.operations.search.label}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",value:g,onChange:T=>x(T.target.value),onKeyDown:T=>T.key==="Enter"&&I(),placeholder:Z.operations.search.placeholder}),n.jsx("button",{onClick:I,className:"btn btn-search",children:Z.operations.search.buttonText})]})]}),n.jsx("div",{className:"operation-group",style:{display:"flex",gap:"0.5rem"},children:n.jsx("button",{onClick:v,className:"btn btn-clear",children:Z.operations.clear.buttonText})}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:Z.infoLabels.items}),n.jsx("span",{className:"info-value",children:r})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:Z.infoLabels.capacity}),n.jsx("span",{className:"info-value",children:i})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:Z.infoLabels.load}),n.jsx("span",{className:"info-value",style:{color:l>=1?"#f59e0b":"inherit"},children:l.toFixed(2)})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:Z.infoLabels.collisions}),n.jsx("span",{className:"info-value",style:{color:c>0?"#f59e0b":"inherit"},children:c})]})]}),n.jsxs("div",{className:"rehash-info-box",children:[n.jsx(xl,{size:16}),n.jsxs("div",{children:[n.jsx("strong",{children:Z.chainingAdvantage.title}),n.jsx("p",{children:Z.chainingAdvantage.description}),l>=Z.chainingAdvantage.highLoadThreshold?n.jsxs("div",{className:"rehash-recommend",children:[n.jsx(_o,{size:14}),n.jsx("span",{className:"rehash-warning",children:Z.chainingAdvantage.highLoadMessage.replace("{loadFactor}",l.toFixed(2))})]}):n.jsx("span",{className:"rehash-safe",children:Z.chainingAdvantage.safeMessage.replace("{loadFactor}",l.toFixed(2))})]})]}),n.jsx($e,{message:d})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Hash Table (Chaining)"}),m&&n.jsxs("div",{className:"hash-demo",children:[n.jsxs("div",{className:"hash-demo-item",children:[n.jsx("span",{className:"hash-demo-label",children:"Key:"}),n.jsxs("span",{className:"hash-demo-key",children:['"',m,'"']})]}),n.jsx(fe,{className:"hash-demo-arrow"}),n.jsx("div",{className:"hash-demo-item",children:n.jsx("span",{className:"hash-demo-label",children:"hash()"})}),n.jsx(fe,{className:"hash-demo-arrow"}),n.jsxs("div",{className:"hash-demo-item",children:[n.jsx("span",{className:"hash-demo-label",children:"Slot:"}),n.jsx("span",{className:"hash-demo-index",children:H(m)})]})]}),n.jsx("div",{className:"ht-chaining-visual",children:!e||e.length===0?n.jsx("div",{className:"ht-empty",children:Z.messages.emptyTable}):n.jsx("div",{className:"ht-chaining-buckets",children:e.map((T,A)=>{const S=_===A,L=T&&Array.isArray(T)&&T.length>0,F=L?T.length:0;return n.jsxs("div",{className:`ht-chaining-row ${L?"filled":"empty"} ${S?"highlighted":""}`,children:[n.jsxs("div",{className:"ht-chaining-index",children:[n.jsx("span",{className:"index-number",children:A}),F>1&&n.jsx("span",{className:"chain-count",children:F})]}),n.jsx("div",{className:"ht-chaining-arrow-container",children:n.jsx(fe,{size:18,className:"bucket-arrow"})}),n.jsx("div",{className:"ht-chaining-content",children:L?n.jsx("div",{className:"ht-chaining-chain",children:T.map((V,B)=>{const O=z&&V.key===z;return n.jsxs(Pe.Fragment,{children:[n.jsxs("div",{className:`ht-chaining-node ${O?"just-inserted":""} ${B>0?"collision-node":""}`,children:[n.jsx("div",{className:"node-key",children:V.key}),n.jsx("div",{className:"node-separator"}),n.jsx("div",{className:"node-value",children:V.value})]}),B<T.length-1&&n.jsx("div",{className:"chain-link",children:n.jsx(fe,{size:16})})]},B)})}):n.jsx("div",{className:"ht-chaining-empty-slot",children:n.jsx("span",{children:"Empty"})})})]},A)})})}),n.jsx("div",{className:"ht-legend",children:Z.legend.map((T,A)=>n.jsxs("div",{className:"legend-item",children:[T.type==="color"?n.jsx("div",{className:`legend-color ${T.className}`}):n.jsx(xl,{size:14,style:{color:T.color}}),n.jsx("span",{children:T.label})]},A))})]})]}),n.jsx(ye,{dataStructure:"hashtableChaining"})]})}function Xv(){const[e,t]=p.useState([]),[r,s]=p.useState(0),[i,a]=p.useState(0),[l,o]=p.useState(0),{message:c,showMessage:u}=Be(3e3),[d,h]=p.useState(""),[m,w]=p.useState(""),[k,N]=p.useState(""),[y,f]=p.useState(""),[g,x]=p.useState(null),[_,j]=p.useState([]),[z,C]=p.useState(null),[D,$]=p.useState(null);p.useEffect(()=>{R()},[]);const R=async()=>{try{const A=await le("/api/hashtable_quadratic");t(A.table||[]),s(A.size||0),a(A.capacity||0),o(A.load_factor||0)}catch(A){console.error("Error loading hashtable:",A)}},H=A=>{if(!i||i===0)return 0;let S=0;for(let L=0;L<A.length;L++)S=(S*31+A.charCodeAt(L))%i;return S},W=(A,S)=>{var V;const L=H(A),F=[];for(let B=0;B<i;B++){const O=(L+B*B)%i;if(F.push({index:O,i:B,formula:`(${L} + ${B}²) % ${i} = ${O}`}),!S[O]||S[O][0]===A)break}return{originalHash:L,path:F,finalSlot:(V=F[F.length-1])==null?void 0:V.index}},E=async()=>{if(!d.trim()||!m.trim()){u("Please enter both key and value!","error");return}const A=i>0?H(d.trim()):0,S=e.length>0&&e[A]&&e[A]!=="DELETED"&&e[A][0]!==d.trim();let L=null;S&&(L=W(d.trim(),e));try{const F=await ne("/api/hashtable_quadratic/insert",{key:d.trim(),value:m.trim()});if(F.error){u(F.error,"error");return}await R(),C(d.trim()),S&&L?($({key:d.trim(),originalSlot:L.originalHash,probedSlots:L.path,finalSlot:F.final_index}),j(L.path.map(V=>V.index)),u(`Collision! Quadratic probing: ${L.path.length} probe(s)`,"warning"),setTimeout(()=>{j([]),$(null)},5e3)):(u(`Inserted "${d}" → slot ${A}`,"success"),x(A),setTimeout(()=>x(null),2e3)),h(""),w(""),setTimeout(()=>C(null),3e3)}catch{u("Error inserting. Is Flask running?","error")}},I=async()=>{if(!k.trim()){u("Please enter a key!","error");return}try{const A=await ne("/api/hashtable_quadratic/delete",{key:k.trim()});if(A.error){u(A.error,"error");return}await R(),u(`Deleted "${k}"`,"success"),N("")}catch{u("Error deleting. Is Flask running?","error")}},v=async()=>{if(!y.trim()){u("Please enter a key!","error");return}try{const A=await le(`/api/hashtable_quadratic/get?key=${encodeURIComponent(y.trim())}`);if(A.error){u(A.error,"error");return}A.found?u(`Found: "${y}" = ${A.value}`,"success"):u(`Key "${y}" not found`,"error"),f("")}catch{u("Error searching item","error")}},T=async()=>{try{await ne("/api/hashtable_quadratic/clear",{}),await R(),j([]),$(null),u("Hashtable cleared!","success")}catch{u("Error clearing hashtable","error")}};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"intro-left",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Oe,{className:"icon-sm"}),n.jsx("span",{children:"What is Quadratic Probing?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"Quadratic Probing"})," is a collision resolution technique where we probe at quadratically increasing intervals."]}),n.jsxs("div",{style:{background:"var(--bg-tertiary)",padding:"0.75rem",borderRadius:"8px",marginTop:"0.5rem",fontFamily:"monospace",fontSize:"0.9rem"},children:[n.jsx("div",{children:"probe(i) = (hash + i²) % capacity"}),n.jsx("div",{style:{color:"var(--text-muted)",marginTop:"0.25rem"},children:"i = 0, 1, 4, 9, 16, 25..."})]}),n.jsxs("div",{className:"concept-analogy",style:{marginTop:"0.75rem"},children:[n.jsx(Ne,{}),n.jsxs("span",{children:["Unlike linear probing, we jump further each time – reducing ",n.jsx("strong",{children:"clustering"}),"!"]})]})]})]}),n.jsxs("div",{className:"concept-box",style:{marginTop:"1rem"},children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Gn,{className:"icon-sm",style:{color:"#3b82f6"}}),n.jsx("span",{children:"Linear vs Quadratic"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",fontSize:"0.85rem"},children:[n.jsxs("div",{children:[n.jsx("strong",{style:{color:"#f59e0b"},children:"Linear:"}),n.jsx("div",{style:{fontFamily:"monospace",marginTop:"0.25rem"},children:"+1, +2, +3, +4..."})]}),n.jsxs("div",{children:[n.jsx("strong",{style:{color:"#22c55e"},children:"Quadratic:"}),n.jsx("div",{style:{fontFamily:"monospace",marginTop:"0.25rem"},children:"+1, +4, +9, +16..."})]})]}),n.jsx("p",{style:{marginTop:"0.75rem",fontSize:"0.85rem"},children:"Quadratic probing spreads entries more evenly but may not find empty slots if table is over 50% full."})]})]})]}),n.jsx(me,{context:"Hash Table with Quadratic Probing"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Operations"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Insert Key-Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",value:d,onChange:A=>h(A.target.value),placeholder:"Key"}),n.jsx("input",{type:"text",value:m,onChange:A=>w(A.target.value),onKeyPress:A=>A.key==="Enter"&&E(),placeholder:"Value"}),n.jsx("button",{onClick:E,className:"btn btn-insert",children:"Insert"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Delete Key"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",value:k,onChange:A=>N(A.target.value),onKeyPress:A=>A.key==="Enter"&&I(),placeholder:"Key"}),n.jsx("button",{onClick:I,className:"btn btn-delete",children:"Delete"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Search Key"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",value:y,onChange:A=>f(A.target.value),onKeyPress:A=>A.key==="Enter"&&v(),placeholder:"Key"}),n.jsx("button",{onClick:v,className:"btn btn-search",children:"Search"})]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:T,className:"btn btn-clear",children:"Clear Table"})}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Items"}),n.jsxs("span",{className:"info-value",children:[r,"/",i]})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Load"}),n.jsxs("span",{className:"info-value",style:{color:l>=.5?"#f59e0b":"inherit"},children:[(l*100).toFixed(0),"%"]})]})]}),n.jsxs("div",{className:"rehash-info-box",children:[n.jsx(Rh,{size:16}),n.jsxs("div",{children:[n.jsx("strong",{children:"Rehashing Threshold: 50%"}),n.jsx("p",{children:"Quadratic probing requires lower load factor (~0.5) to guarantee finding empty slots."}),l>=.5?n.jsxs("span",{className:"rehash-warning",children:["Load (",(l*100).toFixed(0),"%) at threshold!"]}):n.jsxs("span",{className:"rehash-safe",children:["Currently safe (",(l*100).toFixed(0),"% < 50%)"]})]})]}),n.jsx($e,{message:c})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Hash Table (Quadratic Probing)"}),d&&n.jsxs("div",{className:"hash-demo",children:[n.jsxs("div",{className:"hash-demo-item",children:[n.jsx("span",{className:"hash-demo-label",children:"Key:"}),n.jsxs("span",{className:"hash-demo-key",children:['"',d,'"']})]}),n.jsx(fe,{className:"hash-demo-arrow"}),n.jsx("div",{className:"hash-demo-item",children:n.jsx("span",{className:"hash-demo-label",children:"hash()"})}),n.jsx(fe,{className:"hash-demo-arrow"}),n.jsxs("div",{className:"hash-demo-item",children:[n.jsx("span",{className:"hash-demo-label",children:"Slot:"}),n.jsx("span",{className:"hash-demo-index",children:H(d)})]})]}),D&&n.jsxs("div",{className:"collision-banner",children:[n.jsx(Sn,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Quadratic Probing!"}),n.jsxs("p",{children:['"',D.key,'" hashed to slot ',n.jsx("span",{className:"slot-badge original",children:D.originalSlot})]}),n.jsx("div",{style:{marginTop:"0.5rem",fontSize:"0.8rem",fontFamily:"monospace"},children:D.probedSlots.map((A,S)=>n.jsxs("div",{style:{marginBottom:"0.25rem"},children:["i=",A.i,": ",A.formula,S===D.probedSlots.length-1&&n.jsx("span",{style:{color:"#4ade80"},children:" [FOUND]"})]},S))})]})]}),n.jsx("div",{className:"ht-visual",children:!e||e.length===0?n.jsx("div",{className:"ht-empty",children:"Hash table is empty. Insert some key-value pairs!"}):n.jsx("div",{className:"ht-buckets",children:e.map((A,S)=>{const L=_.includes(S),F=D&&D.originalSlot===S,V=D&&D.finalSlot===S,B=A==="DELETED",O=A&&A!=="DELETED";return n.jsxs("div",{className:`ht-row ${O?"filled":"empty"} 
                        ${B?"deleted":""}
                        ${g===S?"highlighted":""} 
                        ${z&&O&&A[0]===z?"just-inserted":""}
                        ${L?"probed":""}
                        ${F?"original-hash":""}
                        ${V?"final-slot":""}`,children:[L&&n.jsx("div",{className:"probe-indicator",children:F?"X":V?"O":">"}),n.jsxs("div",{className:`ht-key-box ${O?"has-key":""} ${B?"deleted-slot":""}`,children:[O&&n.jsx("span",{className:"ht-key",children:A[0]}),B&&n.jsx("span",{className:"ht-deleted-text",children:"DEL"})]}),n.jsx("div",{className:"ht-arrow",children:O&&n.jsx(fe,{size:20})}),n.jsx("div",{className:`ht-index ${F?"collision-index":""}`,children:S}),n.jsx("div",{className:`ht-value-box ${O?"has-value":""} ${B?"deleted-slot":""}`,children:O?n.jsx("span",{className:"ht-value",children:A[1]}):B?n.jsx("span",{className:"ht-deleted-text",children:"DELETED"}):n.jsx("span",{className:"ht-empty-slot",children:"—"})})]},S)})})}),n.jsxs("div",{className:"ht-legend",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color key-color"}),n.jsx("span",{children:"Key"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color index-color"}),n.jsx("span",{children:"Index"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color value-color"}),n.jsx("span",{children:"Value"})]}),_.length>0&&n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color probe-color"}),n.jsx("span",{children:"Probe Path"})]})]})]})]}),n.jsx(ye,{dataStructure:"hashtable"})]})}const qt=7,Yv={inorder:{name:"Inorder Traversal",order:"Left → Root → Right",description:"Visit left subtree, process root, then visit right subtree. For BST, this produces sorted order.",useCase:["Get sorted elements","Validate BST","Create mirror image"],complexity:{time:"O(n)",space:"O(h)"}},preorder:{name:"Preorder Traversal",order:"Root → Left → Right",description:"Process root first, then recursively visit left and right subtrees. Useful for copying trees.",useCase:["Copy tree structure","Serialize/deserialize","Prefix expressions"],complexity:{time:"O(n)",space:"O(h)"}},postorder:{name:"Postorder Traversal",order:"Left → Right → Root",description:"Visit left subtree, right subtree, then process root. Essential for deleting nodes safely.",useCase:["Delete nodes safely","Calculate folder sizes","Postfix expressions"],complexity:{time:"O(n)",space:"O(h)"}},levelorder:{name:"Level Order Traversal",order:"Level by Level (BFS)",description:"Visit nodes level by level using a queue. Perfect for finding shortest paths.",useCase:["Shortest path","Level-wise printing","Nodes at distance K"],complexity:{time:"O(n)",space:"O(w)"}}},yl=(e,t=[])=>(e&&(yl(e.left,t),t.push(e.data),yl(e.right,t)),t),jl=(e,t=[])=>(e&&(t.push(e.data),jl(e.left,t),jl(e.right,t)),t),Nl=(e,t=[])=>(e&&(Nl(e.left,t),Nl(e.right,t),t.push(e.data)),t),Jv=e=>{if(!e)return[];const t=[],r=[e];for(;r.length;){const s=r.shift();t.push(s.data),s.left&&r.push(s.left),s.right&&r.push(s.right)}return t},kl=(e,t=0)=>e?Math.max(kl(e.left,t+1),kl(e.right,t+1)):t-1;function Zv(){return n.jsxs("div",{className:"intro-left",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Oe,{className:"icon-sm"}),n.jsx("span",{children:"What is a Binary Tree?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:["A ",n.jsx("strong",{children:"Binary Tree"})," is a hierarchical data structure where each node has at most ",n.jsx("strong",{children:"two children"}),": left and right."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(Ne,{}),n.jsxs("span",{children:["Think of a ",n.jsx("strong",{children:"family tree"})," – each person can have up to two children!"]})]}),n.jsxs("div",{className:"concept-key-terms",children:[n.jsx("h4",{children:"Key Terms:"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Node:"})," Contains data and links to children"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Root:"})," The topmost node (no parent)"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Leaf:"})," A node with no children"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Height:"})," Longest path from root to leaf"]})]})]})]})]}),n.jsxs("div",{className:"concept-box",style:{marginTop:"1rem"},children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Gn,{className:"icon-sm"}),n.jsx("span",{children:"What are Tree Traversals?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"Tree Traversal"})," is visiting each node ",n.jsx("strong",{children:"exactly once"})," in a specific order."]}),n.jsxs("div",{className:"concept-why-traverse",children:[n.jsx("h4",{children:"Why Traverse?"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Search:"})," Find specific data"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Copy:"})," Duplicate the tree"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Evaluate:"})," Calculate expressions"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Delete:"})," Remove nodes properly"]})]})]}),n.jsxs("div",{className:"concept-analogy",style:{marginTop:"0.75rem"},children:[n.jsx(Ne,{}),n.jsx("span",{children:"Like reading a book – you can read in different orders based on your needs!"})]})]})]})]})}function ey({insertValue:e,deleteValue:t,size:r,height:s,message:i,tree:a,isAnimating:l,visitedNodes:o,onInsertValueChange:c,onDeleteValueChange:u,onInsert:d,onDelete:h,onTraversal:m,onClear:w,onResetTraversal:k}){const N=(y,f)=>{const g=y.target.value;(g===""||g==="-"||/^-?\d*\.?\d*$/.test(g))&&f(g)};return n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Binary Tree Traversals"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"insertValue",children:"Insert Node"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"insertValue",value:e,onChange:y=>N(y,c),onKeyPress:y=>y.key==="Enter"&&d(),placeholder:"Enter a number"}),n.jsx("button",{onClick:d,className:"btn btn-insert",children:"Insert"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"deleteValue",children:"Delete Node"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"deleteValue",value:t,onChange:y=>N(y,u),onKeyPress:y=>y.key==="Enter"&&h(),placeholder:"Enter a number"}),n.jsx("button",{onClick:h,className:"btn btn-delete",children:"Delete"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Traversals"}),n.jsx("div",{className:"btn-group",children:["inorder","preorder","postorder","levelorder"].map(y=>n.jsx("button",{onClick:()=>m(y),className:"btn btn-traversal",disabled:l||!a,children:y==="levelorder"?"Level Order":y.charAt(0).toUpperCase()+y.slice(1)},y))}),o.length>0&&!l&&n.jsx("button",{onClick:k,className:"btn btn-secondary",style:{marginTop:"0.5rem",width:"100%"},children:"Reset Colors"})]}),n.jsxs("div",{className:"traversal-legend",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--default"}),n.jsx("span",{children:"Not visited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--visiting"}),n.jsx("span",{children:"Visiting"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--visited"}),n.jsx("span",{children:"Visited"})]})]}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Size:"}),n.jsx("span",{className:"info-value",children:r})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Height:"}),n.jsx("span",{className:"info-value",children:s})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Max Size:"}),n.jsx("span",{className:"info-value",children:qt})]})]}),r>=qt*.8&&r<qt&&n.jsxs("div",{className:"warning-box",children:[n.jsx(Sn,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Tree is filling up!"})," You're at ",r,"/",qt," nodes."]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:w,className:"btn btn-clear",children:"Clear Tree"})}),i&&n.jsx("div",{className:`message message-${i.includes("Error")||i.includes("error")?"error":/success|complete|Inserted|Deleted|cleared/i.test(i)?"success":i.includes("full")?"warning":"info"}`,children:i})]})}function ny({tree:e,currentNode:t,visitedNodes:r}){const s=c=>{const u=t===c,d=r.includes(c);return{color:u?"#f59e0b":d?"#10b981":"#6366f1",glow:u?"drop-shadow(0 0 12px #f59e0b) drop-shadow(0 0 20px #f59e0b)":d?"drop-shadow(0 0 6px #10b981)":"none",radius:u?30:25,stroke:u?3:2,fontSize:u?16:14,fontWeight:u?"bold":"normal"}},i=(c,u,d,h,m)=>{if(!c)return[];const w=Math.pow(2,m-h)*50,k=s(c.data),N=[];return c.left&&(N.push(n.jsx("line",{x1:u,y1:d,x2:u-w,y2:d+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:"2"},`l-${c.data}-l`)),N.push(...i(c.left,u-w,d+100,h+1,m))),c.right&&(N.push(n.jsx("line",{x1:u,y1:d,x2:u+w,y2:d+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:"2"},`l-${c.data}-r`)),N.push(...i(c.right,u+w,d+100,h+1,m))),N.push(n.jsxs("g",{style:{filter:k.glow,transition:"all 0.3s ease"},children:[n.jsx("circle",{cx:u,cy:d,r:k.radius,fill:k.color,stroke:"white",strokeWidth:k.stroke,style:{transition:"all 0.3s ease"}}),n.jsx("text",{x:u,y:d,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:k.fontSize,fontWeight:k.fontWeight,children:c.data})]},`n-${c.data}-${u}`)),N};if(!e)return n.jsx("div",{className:"tree-empty",children:"Tree is empty. Insert some nodes!"});const a=kl(e),l=(a+1)*100+50,o=Math.max(800,Math.pow(2,Math.max(a,1))*80);return n.jsx("svg",{width:o,height:l,className:"tree-svg",children:i(e,o/2,50,0,a)})}function ty({traversalType:e,traversalResult:t,isAnimating:r,traversalComplete:s}){if(!e||t.length===0&&!r)return null;const i=Yv[e];return n.jsxs("div",{className:"traversal-output-panel",children:[n.jsxs("div",{style:{marginBottom:"1rem"},children:[n.jsxs("h3",{className:"traversal-title",children:[i==null?void 0:i.name,r&&n.jsx("span",{className:"traversal-badge traversal-badge--running",children:"Running..."}),s&&n.jsx("span",{className:"traversal-badge traversal-badge--complete",children:"Complete"})]}),n.jsxs("p",{className:"traversal-order",children:[n.jsx("strong",{children:"Order:"})," ",i==null?void 0:i.order]}),n.jsx("p",{className:"traversal-description",children:i==null?void 0:i.description})]}),n.jsxs("div",{className:"traversal-output-box",children:[n.jsx("div",{className:"traversal-output-label",children:"Output Sequence:"}),n.jsx("div",{className:"traversal-sequence-container",children:t.length===0&&r?n.jsx("span",{style:{color:"var(--text-muted)",fontStyle:"italic"},children:"Traversing..."}):t.map((a,l)=>n.jsx("span",{className:`traversal-node ${l===t.length-1&&!s?"traversal-node--current":"traversal-node--complete"}`,children:a},l))})]}),s&&t.length>0&&n.jsxs("div",{className:"traversal-array-section",children:[n.jsx("div",{className:"traversal-array-label",children:"Array Output:"}),n.jsxs("code",{className:"traversal-array-output",children:["[",t.join(", "),"]"]}),n.jsxs("p",{className:"traversal-use-case",children:["Use case: ",i==null?void 0:i.useCase.join(" • ")]}),n.jsxs("div",{className:"traversal-complexity",children:[n.jsx("strong",{children:"Time:"})," ",n.jsx("code",{className:"complexity-value",children:i==null?void 0:i.complexity.time})," (visits each node once)",n.jsx("br",{}),n.jsx("strong",{children:"Space:"})," ",n.jsx("code",{className:"complexity-value",children:i==null?void 0:i.complexity.space})," (recursion stack/queue)"]})]})]})}function ry(){const[e,t]=p.useState(null),[r,s]=p.useState(0),[i,a]=p.useState(-1),[l,o]=p.useState(""),[c,u]=p.useState(""),[d,h]=p.useState(""),[m,w]=p.useState([]),[k,N]=p.useState(!1),[y,f]=p.useState(null),[g,x]=p.useState([]),[_,j]=p.useState(null),[z,C]=p.useState(!1);p.useEffect(()=>{D()},[]);const D=async()=>{try{const T=await(await fetch("/api/binarytree")).json();t(T.tree),s(T.size||0),a(T.height!==void 0?T.height:-1)}catch(v){console.error("Error loading tree:",v)}},$=v=>{h(v),setTimeout(()=>h(""),3e3)},R=async()=>{if(!l.trim()){$("Please enter a number!");return}const v=Number(l);if(isNaN(v)){$("Please enter a valid number!");return}if(r>=qt){$(`Tree is full! Maximum size is ${qt} nodes.`);return}try{const A=await(await fetch("/api/binarytree/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:v})})).json();if(A.error){$(A.error);return}t(A.tree),s(A.size||0),a(A.height!==void 0?A.height:-1),$(`Inserted ${v}`),o("")}catch{$("Error inserting node")}},H=async()=>{if(!c.trim()){$("Please enter a number!");return}const v=Number(c);if(isNaN(v)){$("Please enter a valid number!");return}try{const A=await(await fetch("/api/binarytree/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:v})})).json();if(A.error){$(A.error);return}t(A.tree),s(A.size||0),a(A.height!==void 0?A.height:-1),$(`Deleted ${v}`),u("")}catch{$("Error deleting node")}},W=async()=>{try{await fetch("/api/binarytree/clear",{method:"POST"}),t(null),s(0),a(-1),I(),$("Tree cleared!")}catch{$("Error clearing tree")}},E=async v=>{if(!e){$("Tree is empty! Insert some nodes first.");return}N(!0),w([]),f(null),x([]),j(v),C(!1);let T=[];switch(v){case"inorder":T=yl(e);break;case"preorder":T=jl(e);break;case"postorder":T=Nl(e);break;case"levelorder":T=Jv(e);break;default:T=[]}if(T.length===0){$("Tree is empty!"),N(!1);return}for(let A=0;A<T.length;A++)f(T[A]),await new Promise(S=>setTimeout(S,600)),x(S=>[...S,T[A]]),w(S=>[...S,T[A]]),await new Promise(S=>setTimeout(S,200));f(null),C(!0),N(!1),$(`${v.charAt(0).toUpperCase()+v.slice(1)} traversal complete!`)},I=()=>{w([]),f(null),x([]),j(null),C(!1)};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsx(Zv,{}),n.jsx(me,{context:"Binary Tree data structure and traversals"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsx(ey,{insertValue:l,deleteValue:c,size:r,height:i,message:d,tree:e,isAnimating:k,visitedNodes:g,onInsertValueChange:o,onDeleteValueChange:u,onInsert:R,onDelete:H,onTraversal:E,onClear:W,onResetTraversal:I}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Binary Tree Visualization"}),n.jsx("div",{className:"tree-container",children:n.jsx(ny,{tree:e,currentNode:y,visitedNodes:g})}),n.jsx(ty,{traversalType:_,traversalResult:m,isAnimating:k,traversalComplete:z})]})]}),n.jsx(ye,{dataStructure:"binarytree"})]})}const sy={title:"What is a Stack?",description:"A Stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle.",codeExample:"push(A) → push(B) → push(C) → pop() returns C",analogy:"Like a stack of plates - you can only take the top plate off first!"},iy={title:"Stack Properties",items:[{label:"Order",value:"LIFO (Last-In-First-Out)"},{label:"Access",value:"Top element only"},{label:"Insert",value:"Push to top - O(1)"},{label:"Remove",value:"Pop from top - O(1)"}]},ay={title:"Common Use Cases",items:["Function call stack (recursion)","Undo/Redo operations","Browser back button","Expression evaluation","Syntax parsing"]},ly={title:"Time Complexity",operations:[{name:"Push",time:"O(1)",description:"Add to top"},{name:"Pop",time:"O(1)",description:"Remove from top"},{name:"Peek",time:"O(1)",description:"View top element"},{name:"isEmpty",time:"O(1)",description:"Check if empty"},{name:"Search",time:"O(n)",description:"Find element"}]},oy={push:{label:"Push Value",placeholder:"Value",buttonText:"Push"},pop:{buttonText:"Pop"},peek:{buttonText:"Peek"},clear:{buttonText:"Clear"}},cy={size:"Size",top:"Top",capacity:"Capacity"},dy={emptyStack:"Stack is empty. Push some values!",pushSuccess:'Pushed "{value}" to stack',popSuccess:'Popped "{value}" from stack',popEmpty:"Cannot pop - stack is empty!",peekSuccess:'Top element: "{value}"',peekEmpty:"Cannot peek - stack is empty!",clearSuccess:"Stack cleared!",errorNoValue:"Please enter a value!",errorPush:"Error pushing to stack",errorPop:"Error popping from stack",errorClear:"Error clearing stack",stackFull:"Stack is full!"},uy=[{type:"color",className:"top-color",label:"Top Element"},{type:"color",className:"element-color",label:"Stack Element"}],hy={concept:sy,properties:iy,useCases:ay,complexity:ly,operations:oy,infoLabels:cy,messages:dy,legend:uy},py={title:"What is a Queue?",description:"A Queue is a linear data structure that follows the First-In-First-Out (FIFO) principle.",codeExample:"enqueue(A) → enqueue(B) → enqueue(C) → dequeue() returns A",analogy:"Like a line at a store - first person in line gets served first!"},fy={title:"Queue Properties",items:[{label:"Order",value:"FIFO (First-In-First-Out)"},{label:"Access",value:"Front and Rear"},{label:"Insert",value:"Enqueue at rear - O(1)"},{label:"Remove",value:"Dequeue from front - O(1)"}]},my={title:"Queue vs Stack",queue:{label:"Queue:",color:"#22c55e",points:["FIFO order","Two access points (front/rear)"]},stack:{label:"Stack:",color:"#3b82f6",points:["LIFO order","One access point (top)"]},summary:"Use Queue when order of processing matters (like task scheduling)."},gy={title:"Common Use Cases",items:["Task scheduling (CPU, print jobs)","Breadth-First Search (BFS)","Message queues","Request handling in servers","Buffering (streaming)"]},xy={title:"Time Complexity",operations:[{name:"Enqueue",time:"O(1)",description:"Add to rear"},{name:"Dequeue",time:"O(1)",description:"Remove from front"},{name:"Front",time:"O(1)",description:"View front element"},{name:"isEmpty",time:"O(1)",description:"Check if empty"},{name:"Search",time:"O(n)",description:"Find element"}]},vy={enqueue:{label:"Enqueue Value",placeholder:"Value",buttonText:"Enqueue"},dequeue:{buttonText:"Dequeue"},front:{buttonText:"Front"},clear:{buttonText:"Clear"}},yy={size:"Size",front:"Front",rear:"Rear",capacity:"Capacity"},jy={emptyQueue:"Queue is empty. Enqueue some values!",enqueueSuccess:'Enqueued "{value}"',dequeueSuccess:'Dequeued "{value}"',dequeueEmpty:"Cannot dequeue - queue is empty!",frontSuccess:'Front element: "{value}"',frontEmpty:"Cannot get front - queue is empty!",clearSuccess:"Queue cleared!",errorNoValue:"Please enter a value!",errorEnqueue:"Error enqueueing to queue",errorDequeue:"Error dequeueing from queue",errorClear:"Error clearing queue",queueFull:"Queue is full!"},Ny=[{type:"color",className:"front-color",label:"Front"},{type:"color",className:"rear-color",label:"Rear"},{type:"color",className:"element-color",label:"Queue Element"}],ky={concept:py,properties:fy,comparison:my,useCases:gy,complexity:xy,operations:vy,infoLabels:yy,messages:jy,legend:Ny},wy={title:"What is a Linked List?",description:"A Linked List is a linear data structure where elements are stored in nodes, each pointing to the next node.",codeExample:"HEAD → [A|→] → [B|→] → [C|→] → NULL",analogy:"Like a treasure hunt - each clue (node) points to the next location!"},by={title:"Linked List Properties",items:[{label:"Structure",value:"Nodes with data + pointer"},{label:"Memory",value:"Non-contiguous allocation"},{label:"Size",value:"Dynamic (grows/shrinks)"},{label:"Access",value:"Sequential (no random access)"}]},Sy={title:"Linked List vs Array",linkedlist:{label:"Linked List:",color:"#22c55e",points:["Dynamic size","O(1) insert/delete at known position","Extra memory for pointers"]},array:{label:"Array:",color:"#3b82f6",points:["Fixed size (usually)","O(1) random access by index","Contiguous memory"]},summary:"Use Linked List when you need frequent insertions/deletions and don't need random access."},Cy={title:"Types of Linked Lists",items:[{name:"Singly Linked",description:"Each node points to next only"},{name:"Doubly Linked",description:"Nodes point to both next and previous"},{name:"Circular",description:"Last node points back to first"}]},Ty={title:"Time Complexity",operations:[{name:"Access",time:"O(n)",description:"Traverse to find"},{name:"Search",time:"O(n)",description:"Linear search"},{name:"Insert (head)",time:"O(1)",description:"Add at beginning"},{name:"Insert (tail)",time:"O(n)",description:"Traverse then add"},{name:"Delete (head)",time:"O(1)",description:"Remove first"},{name:"Delete (by value)",time:"O(n)",description:"Find then remove"}]},_y={insertHead:{label:"Insert at Head",placeholder:"Value",buttonText:"Insert Head"},insertTail:{label:"Insert at Tail",placeholder:"Value",buttonText:"Insert Tail"},delete:{label:"Delete Value",placeholder:"Value",buttonText:"Delete"},search:{label:"Search Value",placeholder:"Value",buttonText:"Search"},clear:{buttonText:"Clear"}},Ly={size:"Size",head:"Head",tail:"Tail"},Ey={emptyList:"Linked list is empty. Insert some values!",insertHeadSuccess:'Inserted "{value}" at head',insertTailSuccess:'Inserted "{value}" at tail',deleteSuccess:'Deleted "{value}"',deleteNotFound:'Value "{value}" not found',searchFound:'Found "{value}" at position {position}',searchNotFound:'Value "{value}" not found',clearSuccess:"Linked list cleared!",errorNoValue:"Please enter a value!",errorInsert:"Error inserting value",errorDelete:"Error deleting value",errorSearch:"Error searching value",errorClear:"Error clearing list"},Oy=[{type:"color",className:"head-color",label:"Head Node"},{type:"color",className:"node-color",label:"Node"},{type:"icon",icon:"ArrowRight",color:"#8b5cf6",label:"Pointer"}],Ry={concept:wy,properties:by,comparison:Sy,types:Cy,complexity:Ty,operations:_y,infoLabels:Ly,messages:Ey,legend:Oy},Py={title:"What is a Binary Tree?",description:"A Binary Tree is a hierarchical data structure where each node has at most two children (left and right).",codeExample:`       [5]
      /   \\
    [3]   [7]
   /  \\     \\
 [1]  [4]   [9]`,analogy:"Like a family tree - each person can have at most two children!"},Iy={title:"Binary Tree Properties",items:[{label:"Structure",value:"Hierarchical (nodes + edges)"},{label:"Children",value:"At most 2 per node"},{label:"Root",value:"Topmost node (no parent)"},{label:"Leaf",value:"Node with no children"}]},My={title:"Types of Binary Trees",items:[{name:"Full Binary Tree",description:"Every node has 0 or 2 children"},{name:"Complete Binary Tree",description:"All levels filled except possibly last"},{name:"Perfect Binary Tree",description:"All internal nodes have 2 children, leaves at same level"},{name:"Binary Search Tree",description:"Left < Parent < Right ordering"}]},zy={title:"Tree Traversals",items:[{name:"Inorder",order:"Left → Root → Right",use:"BST gives sorted order"},{name:"Preorder",order:"Root → Left → Right",use:"Copy tree, prefix expression"},{name:"Postorder",order:"Left → Right → Root",use:"Delete tree, postfix expression"},{name:"Level Order",order:"Level by level (BFS)",use:"Print by levels"}]},Fy={title:"Time Complexity (BST)",operations:[{name:"Search",average:"O(log n)",worst:"O(n)",description:"Find element"},{name:"Insert",average:"O(log n)",worst:"O(n)",description:"Add element"},{name:"Delete",average:"O(log n)",worst:"O(n)",description:"Remove element"},{name:"Traversal",average:"O(n)",worst:"O(n)",description:"Visit all nodes"}],note:"Worst case O(n) occurs when tree becomes a linked list (unbalanced)"},Ay={title:"Common Use Cases",items:["Binary Search Trees (fast lookup)","Expression trees (parsing)","Huffman coding (compression)","Heaps (priority queues)","File system structure"]},Vy={insert:{label:"Insert Value",placeholder:"Value",buttonText:"Insert"},delete:{label:"Delete Value",placeholder:"Value",buttonText:"Delete"},search:{label:"Search Value",placeholder:"Value",buttonText:"Search"},traversals:{inorder:"Inorder",preorder:"Preorder",postorder:"Postorder",levelorder:"Level Order"},clear:{buttonText:"Clear"}},Dy={size:"Nodes",height:"Height",root:"Root"},$y={emptyTree:"Binary tree is empty. Insert some values!",insertSuccess:"Inserted {value}",deleteSuccess:"Deleted {value}",deleteNotFound:"Value {value} not found",searchFound:"Found {value}",searchNotFound:"Value {value} not found",clearSuccess:"Tree cleared!",traversalResult:"{type} traversal: {result}",errorNoValue:"Please enter a value!",errorInsert:"Error inserting value",errorDelete:"Error deleting value",errorSearch:"Error searching value",errorClear:"Error clearing tree"},By=[{type:"color",className:"root-color",label:"Root"},{type:"color",className:"node-color",label:"Node"},{type:"color",className:"leaf-color",label:"Leaf"},{type:"color",className:"highlight-color",label:"Current/Found"}],Hy={concept:Py,properties:Iy,types:My,traversals:zy,complexity:Fy,useCases:Ay,operations:Vy,infoLabels:Dy,messages:$y,legend:By},qy={title:"What is a Hash Table?",description:"A Hash Table is a data structure that maps keys to values using a hash function for O(1) average access time.",codeExample:'hash("apple") → 3 → table[3] = "apple"',analogy:"Like a library catalog - the book title (key) tells you exactly which shelf (index) to find it!"},Uy={title:"Hash Table Properties",items:[{label:"Access",value:"O(1) average time"},{label:"Hash Function",value:"Maps key → index"},{label:"Load Factor",value:"size / capacity"},{label:"Collision",value:"When two keys hash to same index"}]},Ky={title:"Collision Resolution: Linear Probing",description:"When a collision occurs, probe sequentially until an empty slot is found.",steps:["Calculate hash index","If slot occupied, try next slot","Repeat until empty slot found","Insert at empty slot"],formula:"index = (hash(key) + i) % capacity, where i = 0, 1, 2, ..."},Wy={title:"Linear vs Quadratic Probing",linear:{label:"Linear Probing:",color:"#3b82f6",points:["Simple: check next slot","Primary clustering problem","Cache-friendly"]},quadratic:{label:"Quadratic Probing:",color:"#f59e0b",points:["Jump by squares: 1, 4, 9...","Reduces primary clustering","May not find empty slot"]},summary:"Linear probing is simpler but can cause clustering. Quadratic probing spreads entries better."},Gy={title:"Load Factor",description:"Load factor = size / capacity. Measures how full the table is.",threshold:.7,warningMessage:"High load ({loadFactor}) - consider rehashing!",safeMessage:"Load factor: {loadFactor}"},Qy={title:"Time Complexity",operations:[{name:"Insert",average:"O(1)",worst:"O(n)",description:"Add key-value"},{name:"Search",average:"O(1)",worst:"O(n)",description:"Find by key"},{name:"Delete",average:"O(1)",worst:"O(n)",description:"Remove by key"},{name:"Rehash",average:"O(n)",worst:"O(n)",description:"Resize table"}],note:"Worst case O(n) when many collisions or poor hash function"},Xy={title:"Common Use Cases",items:["Dictionaries/Maps","Caching (memoization)","Database indexing","Symbol tables (compilers)","Counting frequencies"]},Yy={insert:{label:"Insert Key-Value",keyPlaceholder:"Key",valuePlaceholder:"Value",buttonText:"Insert"},delete:{label:"Delete Key",placeholder:"Key",buttonText:"Delete"},search:{label:"Search Key",placeholder:"Key",buttonText:"Search"},clear:{buttonText:"Clear"},rehash:{buttonText:"Rehash"}},Jy={items:"Items",capacity:"Capacity",load:"Load",collisions:"Collisions"},Zy={emptyTable:"Hash table is empty. Insert some key-value pairs!",insertSuccess:'Inserted "{key}" at slot {index}',insertUpdated:'Updated "{key}" at slot {index}',insertCollision:"Collision at slot {original}! Probed to slot {index}",deleteSuccess:'Deleted "{key}"',searchFound:'Found: "{key}" = {value}',searchNotFound:'Key "{key}" not found',clearSuccess:"Hash table cleared!",rehashSuccess:"Rehashed! Capacity: {oldCapacity} → {newCapacity}",rehashEmpty:"Nothing to rehash - table is empty!",tableFull:"Table is full! Consider rehashing.",errorNoKey:"Please enter a key!",errorNoKeyValue:"Please enter both key and value!",errorInsert:"Error inserting. Is Flask running?",errorDelete:"Error deleting. Is Flask running?",errorSearch:"Error searching item",errorClear:"Error clearing hash table",errorRehash:"Error rehashing. Is Flask running?"},e1=[{type:"color",className:"key-color",label:"Key"},{type:"color",className:"index-color",label:"Index"},{type:"color",className:"value-color",label:"Value"},{type:"color",className:"probe-color",label:"Probed Slot"},{type:"color",className:"collision-color",label:"Collision"}],n1={concept:qy,properties:Uy,collisionResolution:Ky,comparison:Wy,loadFactor:Gy,complexity:Qy,useCases:Xy,operations:Yy,infoLabels:Jy,messages:Zy,legend:e1},t1={title:"What is Quadratic Probing?",description:"Quadratic Probing is a collision resolution technique that uses a quadratic function to find the next available slot.",codeExample:"index = (hash(key) + i²) % capacity, where i = 0, 1, 2, 3...",analogy:"Like jumping farther each time - first 1 step, then 4, then 9, then 16!"},r1={title:"Quadratic Probing Properties",items:[{label:"Probe Sequence",value:"+1, +4, +9, +16, +25..."},{label:"Formula",value:"(hash + i²) % capacity"},{label:"Clustering",value:"Reduces primary clustering"},{label:"Load Factor",value:"Must stay below 0.5 for guarantee"}]},s1={title:"Quadratic vs Linear Probing",quadratic:{label:"Quadratic:",color:"#f59e0b",points:["Jumps by squares: 1, 4, 9...","Less primary clustering","May miss empty slots"]},linear:{label:"Linear:",color:"#3b82f6",points:["Steps by 1 each time","Primary clustering issue","Always finds empty slot"]},summary:"Quadratic probing reduces clustering but requires load factor < 0.5 and prime table size for guaranteed insertion."},i1={title:"Clustering Problem",primary:{name:"Primary Clustering",description:"Long runs of occupied slots form clusters",cause:"Linear probing - same probe sequence for nearby hashes",solution:"Use quadratic or double hashing"},secondary:{name:"Secondary Clustering",description:"Keys with same hash follow same probe sequence",cause:"Probe sequence depends only on initial hash",solution:"Use double hashing"}},a1={title:"Load Factor Warning",description:"Quadratic probing may fail to find empty slots if load factor > 0.5",threshold:.5,warningMessage:"Warning: Load factor ({loadFactor}) > 0.5 - insertions may fail!",safeMessage:"Load factor: {loadFactor}"},l1={title:"Time Complexity",operations:[{name:"Insert",average:"O(1)",worst:"O(n)",description:"Add key-value"},{name:"Search",average:"O(1)",worst:"O(n)",description:"Find by key"},{name:"Delete",average:"O(1)",worst:"O(n)",description:"Remove by key"},{name:"Rehash",average:"O(n)",worst:"O(n)",description:"Resize table"}],note:"Requires prime table size and load factor < 0.5 for guaranteed O(1)"},o1={insert:{label:"Insert Key-Value",keyPlaceholder:"Key",valuePlaceholder:"Value",buttonText:"Insert"},delete:{label:"Delete Key",placeholder:"Key",buttonText:"Delete"},search:{label:"Search Key",placeholder:"Key",buttonText:"Search"},clear:{buttonText:"Clear"},rehash:{buttonText:"Rehash"}},c1={items:"Items",capacity:"Capacity",load:"Load",collisions:"Collisions"},d1={emptyTable:"Hash table is empty. Insert some key-value pairs!",insertSuccess:'Inserted "{key}" at slot {index}',insertUpdated:'Updated "{key}" at slot {index}',insertCollision:"Collision! Quadratic probed to slot {index} (i={probeCount})",deleteSuccess:'Deleted "{key}"',searchFound:'Found: "{key}" = {value}',searchNotFound:'Key "{key}" not found',clearSuccess:"Hash table cleared!",rehashSuccess:"Rehashed! Capacity: {oldCapacity} → {newCapacity}",rehashEmpty:"Nothing to rehash - table is empty!",tableFull:"Cannot insert - no empty slot found after full probe cycle!",errorNoKey:"Please enter a key!",errorNoKeyValue:"Please enter both key and value!",errorInsert:"Error inserting. Is Flask running?",errorDelete:"Error deleting. Is Flask running?",errorSearch:"Error searching item",errorClear:"Error clearing hash table",errorRehash:"Error rehashing. Is Flask running?"},u1=[{type:"color",className:"key-color",label:"Key"},{type:"color",className:"index-color",label:"Index"},{type:"color",className:"value-color",label:"Value"},{type:"color",className:"probe-color",label:"Quadratic Probe"}],h1={concept:t1,properties:r1,comparison:s1,clustering:i1,loadFactor:a1,complexity:l1,operations:o1,infoLabels:c1,messages:d1,legend:u1},p1={title:"What is a Binary Search Tree?",description:"A Binary Search Tree (BST) is a binary tree where each node follows the ordering property: all left descendants < node < all right descendants.",codeExample:`       [50]
      /    \\
   [30]    [70]
   /  \\    /  \\
 [20][40][60][80]

Left < Parent < Right`,analogy:"Like a dictionary - words are sorted alphabetically, so you can quickly find any word by comparing!"},f1={title:"BST Properties",items:[{label:"Ordering",value:"Left < Parent < Right"},{label:"Search",value:"O(log n) average"},{label:"Inorder",value:"Gives sorted sequence"},{label:"No Duplicates",value:"Typically unique keys"}]},m1={insert:{label:"Insert Value",placeholder:"Value",buttonText:"Insert"},delete:{label:"Delete Value",placeholder:"Value",buttonText:"Delete"},search:{label:"Search Value",placeholder:"Value",buttonText:"Search"},traversals:{inorder:"Inorder (Sorted)",preorder:"Preorder",postorder:"Postorder",levelorder:"Level Order"},clear:{buttonText:"Clear"}},g1={title:"BST Delete Cases",items:[{name:"Leaf Node",description:"Simply remove (no children)"},{name:"One Child",description:"Replace with child"},{name:"Two Children",description:"Replace with inorder successor (smallest in right subtree)"}]},x1={title:"Tree Traversals",items:[{name:"Inorder",order:"Left -> Root -> Right",use:"Returns SORTED order in BST"},{name:"Preorder",order:"Root -> Left -> Right",use:"Copy/serialize tree"},{name:"Postorder",order:"Left -> Right -> Root",use:"Delete tree safely"},{name:"Level Order",order:"Level by level (BFS)",use:"Print by levels"}]},v1={title:"Time Complexity",operations:[{name:"Search",average:"O(log n)",worst:"O(n)",description:"Binary search principle"},{name:"Insert",average:"O(log n)",worst:"O(n)",description:"Find position + insert"},{name:"Delete",average:"O(log n)",worst:"O(n)",description:"Find + restructure"},{name:"Min/Max",average:"O(log n)",worst:"O(n)",description:"Leftmost/rightmost"}],note:"Worst case O(n) when tree is unbalanced (degenerates to linked list). Use AVL/Red-Black trees for guaranteed O(log n)."},y1={title:"Common Use Cases",items:["Database indexing (B-trees)","Symbol tables in compilers","Priority queues","Auto-complete suggestions","Range queries (find all values between X and Y)"]},j1={title:"BST vs Other Structures",items:[{vs:"Array",advantage:"O(log n) insert/delete vs O(n)"},{vs:"Hash Table",advantage:"Ordered data, range queries"},{vs:"Linked List",advantage:"O(log n) search vs O(n)"}]},N1={size:"Nodes",height:"Height",root:"Root"},k1={emptyTree:"BST is empty. Insert some values!",insertSuccess:"Inserted {value}",deleteSuccess:"Deleted {value}",deleteNotFound:"Value {value} not found",searchFound:"Found {value}",searchNotFound:"Value {value} not found",clearSuccess:"BST cleared!",traversalResult:"{type}: {result}",errorNoValue:"Please enter a value!",errorInsert:"Error inserting value",errorDelete:"Error deleting value",errorSearch:"Error searching value",errorClear:"Error clearing BST"},w1=[{type:"color",className:"root-color",label:"Root"},{type:"color",className:"node-color",label:"Node"},{type:"color",className:"leaf-color",label:"Leaf"},{type:"color",className:"highlight-color",label:"Current/Found"}],b1={concept:p1,properties:f1,operations:m1,deleteCases:g1,traversals:x1,complexity:v1,useCases:y1,comparison:j1,infoLabels:N1,messages:k1,legend:w1},S1={title:"What is an AVL Tree?",description:"An AVL Tree is a self-balancing Binary Search Tree where the height difference between left and right subtrees (balance factor) is at most 1 for every node.",codeExample:`       [50]  BF=0
      /    \\
   [30]    [70]  
  BF=0     BF=0
   /  \\      \\
 [20][40]   [80]

Balance Factor = Height(Left) - Height(Right)
BF must be -1, 0, or 1`,analogy:"Like a well-organized library that automatically reorganizes shelves whenever books are added or removed to ensure quick access!"},C1={title:"AVL Properties",items:[{label:"Balance Factor",value:"-1, 0, or 1 for all nodes"},{label:"Height",value:"O(log n) guaranteed"},{label:"Self-Balancing",value:"Rotations on insert/delete"},{label:"BST Property",value:"Left < Parent < Right"}]},T1={insert:{label:"Insert Value",placeholder:"Value",buttonText:"Insert"},delete:{label:"Delete Value",placeholder:"Value",buttonText:"Delete"},search:{label:"Search Value",placeholder:"Value",buttonText:"Search"},traversals:{inorder:"Inorder (Sorted)",preorder:"Preorder",postorder:"Postorder",levelorder:"Level Order"},clear:{buttonText:"Clear"}},_1={title:"AVL Rotations",items:[{name:"Left-Left (LL)",description:"Right rotation",when:"BF > 1, Left child BF >= 0"},{name:"Right-Right (RR)",description:"Left rotation",when:"BF < -1, Right child BF <= 0"},{name:"Left-Right (LR)",description:"Left then Right rotation",when:"BF > 1, Left child BF < 0"},{name:"Right-Left (RL)",description:"Right then Left rotation",when:"BF < -1, Right child BF > 0"}]},L1={title:"Tree Traversals",items:[{name:"Inorder",order:"Left -> Root -> Right",use:"Returns SORTED order"},{name:"Preorder",order:"Root -> Left -> Right",use:"Copy/serialize tree"},{name:"Postorder",order:"Left -> Right -> Root",use:"Delete tree safely"},{name:"Level Order",order:"Level by level (BFS)",use:"Print by levels"}]},E1={title:"Time Complexity",operations:[{name:"Search",average:"O(log n)",worst:"O(log n)",description:"Height always balanced"},{name:"Insert",average:"O(log n)",worst:"O(log n)",description:"Insert + rebalance"},{name:"Delete",average:"O(log n)",worst:"O(log n)",description:"Delete + rebalance"},{name:"Rotation",average:"O(1)",worst:"O(1)",description:"Constant time fix"}],note:"Unlike regular BST, AVL guarantees O(log n) even in worst case because the tree is always balanced!"},O1={title:"Common Use Cases",items:["Database indexing with frequent lookups","In-memory databases","Dictionary implementations","When guaranteed O(log n) is critical","Real-time systems needing predictable performance"]},R1={title:"AVL vs Other Trees",items:[{vs:"BST",advantage:"Guaranteed O(log n) vs O(n) worst case"},{vs:"Red-Black",advantage:"More rigidly balanced (faster lookup)"},{vs:"B-Tree",advantage:"Better for in-memory operations"}]},P1={size:"Nodes",height:"Height",root:"Root"},I1={emptyTree:"AVL Tree is empty. Insert some values!",insertSuccess:"Inserted {value} (tree rebalanced)",deleteSuccess:"Deleted {value} (tree rebalanced)",deleteNotFound:"Value {value} not found",searchFound:"Found {value}",searchNotFound:"Value {value} not found",clearSuccess:"AVL Tree cleared!",traversalResult:"{type}: {result}",errorNoValue:"Please enter a value!",errorInsert:"Error inserting value",errorDelete:"Error deleting value",errorSearch:"Error searching value",errorClear:"Error clearing AVL Tree"},M1=[{type:"color",className:"root-color",label:"Root"},{type:"color",className:"balanced-color",label:"Balanced (|BF| <= 1)"},{type:"color",className:"leaf-color",label:"Leaf"},{type:"color",className:"highlight-color",label:"Current/Found"}],z1={concept:S1,properties:C1,operations:T1,rotations:_1,traversals:L1,complexity:E1,useCases:O1,comparison:R1,infoLabels:P1,messages:I1,legend:M1},F1={title:"What is a Splay Tree?",description:"A Splay Tree is a self-adjusting Binary Search Tree that moves frequently accessed elements closer to the root through rotations (splaying), providing amortized O(log n) performance.",codeExample:`After searching for 20:

Before:        After Splay:
   [50]           [20]
   /                  \\
 [30]                [50]
 /                   /
[20]  <-- found   [30]

Accessed node moves to root!`,analogy:"Like keeping frequently used items at the front of your desk - recently used elements stay easily accessible!"},A1={title:"Splay Tree Properties",items:[{label:"Self-Adjusting",value:"Accessed nodes move to root"},{label:"No Balance Info",value:"No height/color stored"},{label:"Amortized O(log n)",value:"Good average performance"},{label:"Cache Friendly",value:"Hot nodes stay near root"}]},V1={insert:{label:"Insert Value",placeholder:"Value",buttonText:"Insert"},delete:{label:"Delete Value",placeholder:"Value",buttonText:"Delete"},search:{label:"Search Value",placeholder:"Value",buttonText:"Search"},traversals:{inorder:"Inorder (Sorted)",preorder:"Preorder",postorder:"Postorder",levelorder:"Level Order"},clear:{buttonText:"Clear"}},D1={title:"Splay Operations",items:[{name:"Zig",description:"Single rotation when parent is root",when:"Parent is root"},{name:"Zig-Zig",description:"Both node and parent are left (or both right) children",when:"Same side grandchild"},{name:"Zig-Zag",description:"Node is left child, parent is right (or vice versa)",when:"Opposite side grandchild"}]},$1={title:"Tree Traversals",items:[{name:"Inorder",order:"Left -> Root -> Right",use:"Returns SORTED order"},{name:"Preorder",order:"Root -> Left -> Right",use:"Copy/serialize tree"},{name:"Postorder",order:"Left -> Right -> Root",use:"Delete tree safely"},{name:"Level Order",order:"Level by level (BFS)",use:"Print by levels"}]},B1={title:"Time Complexity",operations:[{name:"Search",average:"O(log n)*",worst:"O(n)",description:"Amortized logarithmic"},{name:"Insert",average:"O(log n)*",worst:"O(n)",description:"Amortized logarithmic"},{name:"Delete",average:"O(log n)*",worst:"O(n)",description:"Amortized logarithmic"},{name:"Splay",average:"O(log n)*",worst:"O(n)",description:"Brings node to root"}],note:"* Amortized - while single operations can be O(n), any sequence of m operations takes O(m log n) total time."},H1={title:"Common Use Cases",items:["Cache implementations (LRU-like behavior)","Garbage collectors","Network routers (IP lookup)","Situations with temporal locality","When same elements accessed repeatedly"]},q1={title:"Splay Tree vs Other Trees",items:[{vs:"AVL",advantage:"Simpler (no balance info), better for skewed access"},{vs:"Red-Black",advantage:"Self-optimizing for access patterns"},{vs:"BST",advantage:"Better amortized performance"}]},U1={size:"Nodes",height:"Height",root:"Root"},K1={emptyTree:"Splay Tree is empty. Insert some values!",insertSuccess:"Inserted {value} (now at root)",deleteSuccess:"Deleted {value}",deleteNotFound:"Value {value} not found",searchFound:"Found {value} (splayed to root)",searchNotFound:"Value {value} not found",clearSuccess:"Splay Tree cleared!",traversalResult:"{type}: {result}",errorNoValue:"Please enter a value!",errorInsert:"Error inserting value",errorDelete:"Error deleting value",errorSearch:"Error searching value",errorClear:"Error clearing Splay Tree"},W1=[{type:"color",className:"root-color",label:"Root (Most Recent)"},{type:"color",className:"node-color",label:"Node"},{type:"color",className:"leaf-color",label:"Leaf"},{type:"color",className:"highlight-color",label:"Current/Found"}],G1={concept:F1,properties:A1,operations:V1,splayOperations:D1,traversals:$1,complexity:B1,useCases:H1,comparison:q1,infoLabels:U1,messages:K1,legend:W1},Q1={title:"What is a Min Heap?",description:"A Min Heap is a complete binary tree where each parent node is smaller than or equal to its children. The minimum element is always at the root, making it perfect for priority queues.",codeExample:`       [1]  <- Min at root
      /    \\
    [3]    [2]
   /  \\    /
 [7]  [6][4]

Array: [1, 3, 2, 7, 6, 4]
Parent always <= Children`,analogy:"Like a tournament bracket where the winner (smallest) rises to the top - the champion is always at the root!"},X1={title:"Min Heap Properties",items:[{label:"Heap Property",value:"Parent <= Children"},{label:"Complete Tree",value:"Filled level by level"},{label:"Array Storage",value:"Parent(i)=(i-1)/2"},{label:"Min Access",value:"O(1) to get minimum"}]},Y1={insert:{label:"Insert Value",placeholder:"Value",buttonText:"Insert"},extract:{label:"Extract Min",buttonText:"Extract Min"},peek:{label:"Peek Min",buttonText:"Peek"},build:{label:"Build from Array",placeholder:"e.g., 5,3,8,1,2",buttonText:"Build Heap"},clear:{buttonText:"Clear"}},J1={title:"Heap Operations",items:[{name:"Insert",description:"Add at end, bubble up (heapify up)",complexity:"O(log n)"},{name:"Extract Min",description:"Remove root, replace with last, bubble down",complexity:"O(log n)"},{name:"Peek",description:"Return root without removing",complexity:"O(1)"},{name:"Build Heap",description:"Heapify from array (bottom-up)",complexity:"O(n)"}]},Z1={title:"Array Representation",items:[{formula:"Parent(i)",value:"(i - 1) / 2"},{formula:"Left Child(i)",value:"2*i + 1"},{formula:"Right Child(i)",value:"2*i + 2"}]},ej={title:"Time Complexity",operations:[{name:"Insert",average:"O(log n)",worst:"O(log n)",description:"Bubble up to root"},{name:"Extract Min",average:"O(log n)",worst:"O(log n)",description:"Bubble down"},{name:"Peek/Get Min",average:"O(1)",worst:"O(1)",description:"Always at root"},{name:"Build Heap",average:"O(n)",worst:"O(n)",description:"Bottom-up heapify"}],note:"Space complexity is O(n). Complete tree structure ensures height is always O(log n)."},nj={title:"Common Use Cases",items:["Priority Queues (process by priority)","Dijkstra's shortest path algorithm","Prim's minimum spanning tree","Huffman coding (compression)","Event-driven simulation","K smallest/largest elements"]},tj={title:"Min Heap vs Other Structures",items:[{vs:"Sorted Array",advantage:"O(log n) insert vs O(n)"},{vs:"BST",advantage:"O(1) get min vs O(log n)"},{vs:"Max Heap",advantage:"Fast min access vs fast max"}]},rj={size:"Size",height:"Height",min:"Min"},sj={emptyHeap:"Min Heap is empty. Insert some values!",insertSuccess:"Inserted {value}",extractSuccess:"Extracted minimum: {value}",peekSuccess:"Minimum element is {value}",buildSuccess:"Built heap from array",clearSuccess:"Heap cleared!",errorNoValue:"Please enter a value!",errorEmpty:"Heap is empty!",errorFull:"Heap is full!",errorInsert:"Error inserting value",errorExtract:"Error extracting minimum"},ij=[{type:"color",className:"root-color",label:"Root (Min)"},{type:"color",className:"node-color",label:"Internal Node"},{type:"color",className:"leaf-color",label:"Leaf"},{type:"color",className:"highlight-color",label:"Current/Swapping"}],aj={concept:Q1,properties:X1,operations:Y1,heapOperations:J1,arrayRepresentation:Z1,complexity:ej,useCases:nj,comparison:tj,infoLabels:rj,messages:sj,legend:ij},lj={title:"What is a Max Heap?",description:"A Max Heap is a complete binary tree where each parent node is greater than or equal to its children. The maximum element is always at the root, ideal for priority queues where largest = highest priority.",codeExample:`       [9]  <- Max at root
      /    \\
    [7]    [8]
   /  \\    /
 [3]  [5][6]

Array: [9, 7, 8, 3, 5, 6]
Parent always >= Children`,analogy:"Like a corporate hierarchy - the CEO (maximum) is at the top, and each manager has authority over their subordinates!"},oj={title:"Max Heap Properties",items:[{label:"Heap Property",value:"Parent >= Children"},{label:"Complete Tree",value:"Filled level by level"},{label:"Array Storage",value:"Parent(i)=(i-1)/2"},{label:"Max Access",value:"O(1) to get maximum"}]},cj={insert:{label:"Insert Value",placeholder:"Value",buttonText:"Insert"},extract:{label:"Extract Max",buttonText:"Extract Max"},peek:{label:"Peek Max",buttonText:"Peek"},build:{label:"Build from Array",placeholder:"e.g., 5,3,8,1,2",buttonText:"Build Heap"},clear:{buttonText:"Clear"}},dj={title:"Heap Operations",items:[{name:"Insert",description:"Add at end, bubble up (heapify up)",complexity:"O(log n)"},{name:"Extract Max",description:"Remove root, replace with last, bubble down",complexity:"O(log n)"},{name:"Peek",description:"Return root without removing",complexity:"O(1)"},{name:"Build Heap",description:"Heapify from array (bottom-up)",complexity:"O(n)"}]},uj={title:"Array Representation",items:[{formula:"Parent(i)",value:"(i - 1) / 2"},{formula:"Left Child(i)",value:"2*i + 1"},{formula:"Right Child(i)",value:"2*i + 2"}]},hj={title:"Time Complexity",operations:[{name:"Insert",average:"O(log n)",worst:"O(log n)",description:"Bubble up to root"},{name:"Extract Max",average:"O(log n)",worst:"O(log n)",description:"Bubble down"},{name:"Peek/Get Max",average:"O(1)",worst:"O(1)",description:"Always at root"},{name:"Build Heap",average:"O(n)",worst:"O(n)",description:"Bottom-up heapify"}],note:"Space complexity is O(n). Complete tree structure ensures height is always O(log n)."},pj={title:"Common Use Cases",items:["Priority Queues (largest = highest priority)","Heap Sort algorithm","Job scheduling (highest priority first)","Finding K largest elements","Median maintenance (with min heap)","Stock trading (highest bid)"]},fj={title:"Max Heap vs Other Structures",items:[{vs:"Sorted Array",advantage:"O(log n) insert vs O(n)"},{vs:"BST",advantage:"O(1) get max vs O(log n)"},{vs:"Min Heap",advantage:"Fast max access vs fast min"}]},mj={size:"Size",height:"Height",max:"Max"},gj={emptyHeap:"Max Heap is empty. Insert some values!",insertSuccess:"Inserted {value}",extractSuccess:"Extracted maximum: {value}",peekSuccess:"Maximum element is {value}",buildSuccess:"Built heap from array",clearSuccess:"Heap cleared!",errorNoValue:"Please enter a value!",errorEmpty:"Heap is empty!",errorFull:"Heap is full!",errorInsert:"Error inserting value",errorExtract:"Error extracting maximum"},xj=[{type:"color",className:"root-color",label:"Root (Max)"},{type:"color",className:"node-color",label:"Internal Node"},{type:"color",className:"leaf-color",label:"Leaf"},{type:"color",className:"highlight-color",label:"Current/Swapping"}],vj={concept:lj,properties:oj,operations:cj,heapOperations:dj,arrayRepresentation:uj,complexity:hj,useCases:pj,comparison:fj,infoLabels:mj,messages:gj,legend:xj},yj={title:"What is a Treap?",description:"A Treap is a combination of a Binary Search Tree (BST) and a Heap. Each node has a key (follows BST ordering: left < parent < right) and a random priority (follows max-heap ordering: parent priority >= child priority). Rotations maintain the heap property after insertions.",codeExample:`       [50, p:95]
      /          \\
  [30, p:80]   [70, p:60]
   /     \\         \\
[20,p:40][40,p:55] [80,p:30]

BST on keys | Max-Heap on priorities`,analogy:"Like a tournament bracket where seeded players (priorities) determine placement, but match order follows alphabetical (BST) rules!"},jj={title:"Treap Properties",items:[{label:"Keys",value:"BST order (Left < Parent < Right)"},{label:"Priorities",value:"Max-heap order (Parent >= Children)"},{label:"Balance",value:"Expected O(log n) height"},{label:"Randomized",value:"Priorities assigned randomly"}]},Nj={title:"Time Complexity",operations:[{name:"Search",average:"O(log n)",worst:"O(n)",description:"BST search on keys"},{name:"Insert",average:"O(log n)",worst:"O(n)",description:"BST insert + rotate up"},{name:"Delete",average:"O(log n)",worst:"O(n)",description:"Rotate down + remove leaf"},{name:"Split/Merge",average:"O(log n)",worst:"O(n)",description:"Divide/combine treaps"}],note:"Random priorities give O(log n) expected height, making worst-case O(n) extremely unlikely."},kj={title:"Common Use Cases",items:["Implicit key treaps for sequence operations","Efficient split and merge operations","Randomized balanced BST without complex rebalancing","Competitive programming (flexible tree operations)","Persistent data structures"]},wj={title:"Treap vs Other Trees",items:[{vs:"BST",advantage:"Expected O(log n) balance via random priorities"},{vs:"AVL Tree",advantage:"Simpler implementation, supports split/merge"},{vs:"Red-Black Tree",advantage:"Easier to code, natural split/merge"},{vs:"Skip List",advantage:"Tree structure, supports order statistics"}]},bj={concept:yj,properties:jj,complexity:Nj,useCases:kj,comparison:wj},Sj={stack:hy,queue:ky,linkedlist:Ry,binarytree:Hy,hashtable:n1,hashtableChaining:Z,hashtableQuadratic:h1,bst:b1,avl:z1,splay:G1,minheap:aj,maxheap:vj,treap:bj};function gr({dataStructure:e}){const t=Sj[e];return t?n.jsxs("div",{className:"concepts-panel",children:[t.concept&&n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Oe,{className:"icon-sm"}),n.jsx("span",{children:t.concept.title})]}),n.jsxs("div",{className:"concept-content",children:[n.jsx("p",{children:t.concept.description}),t.concept.codeExample&&n.jsx("pre",{className:"concept-code-example",children:n.jsx("code",{children:t.concept.codeExample})}),t.concept.analogy&&n.jsxs("div",{className:"concept-analogy",children:[n.jsx(Ne,{}),n.jsx("span",{children:t.concept.analogy})]})]})]}),t.properties&&n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Gn,{className:"icon-sm"}),n.jsx("span",{children:t.properties.title})]}),n.jsx("div",{className:"concept-content",children:n.jsx("div",{className:"properties-grid",children:t.properties.items.map((r,s)=>n.jsxs("div",{className:"property-item",children:[n.jsx("span",{className:"property-label",children:r.label}),n.jsx("span",{className:"property-value",children:r.value})]},s))})})]}),t.complexity&&n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(gl,{className:"icon-sm"}),n.jsx("span",{children:t.complexity.title})]}),n.jsxs("div",{className:"concept-content",children:[n.jsx("div",{className:"complexity-table",children:t.complexity.operations.map((r,s)=>n.jsxs("div",{className:"complexity-row",children:[n.jsx("span",{className:"complexity-name",children:r.name}),r.time&&n.jsx("code",{className:"complexity-time",children:r.time}),r.average&&n.jsxs(n.Fragment,{children:[n.jsx("code",{className:"complexity-avg",children:r.average}),r.worst&&n.jsx("code",{className:"complexity-worst",children:r.worst})]}),r.description&&n.jsx("span",{className:"complexity-desc",children:r.description})]},s))}),t.complexity.note&&n.jsx("p",{className:"complexity-note",children:t.complexity.note})]})]}),t.useCases&&n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(_o,{className:"icon-sm"}),n.jsx("span",{children:t.useCases.title})]}),n.jsx("div",{className:"concept-content",children:n.jsx("ul",{className:"use-cases-list",children:t.useCases.items.map((r,s)=>n.jsxs("li",{children:[n.jsx(Dn,{className:"icon-xs"}),n.jsx("span",{children:r})]},s))})})]}),t.traversals&&n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Gn,{className:"icon-sm"}),n.jsx("span",{children:t.traversals.title})]}),n.jsx("div",{className:"concept-content",children:n.jsx("div",{className:"traversals-list",children:t.traversals.items.map((r,s)=>n.jsxs("div",{className:"traversal-item",children:[n.jsx("span",{className:"traversal-name",children:r.name}),n.jsx("span",{className:"traversal-order",children:r.order}),n.jsx("span",{className:"traversal-use",children:r.use})]},s))})})]}),t.deleteCases&&n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Gn,{className:"icon-sm"}),n.jsx("span",{children:t.deleteCases.title})]}),n.jsx("div",{className:"concept-content",children:n.jsx("div",{className:"delete-cases-grid",children:t.deleteCases.items.map((r,s)=>n.jsxs("div",{className:"delete-case-item",children:[n.jsx("span",{className:"case-number",children:s+1}),n.jsxs("div",{children:[n.jsx("strong",{children:r.name}),n.jsx("p",{children:r.description})]})]},s))})})]}),t.comparison&&n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Gn,{className:"icon-sm"}),n.jsx("span",{children:t.comparison.title})]}),n.jsx("div",{className:"concept-content",children:n.jsx("div",{className:"comparison-list",children:t.comparison.items.map((r,s)=>n.jsxs("div",{className:"comparison-item",children:[n.jsxs("span",{className:"comparison-vs",children:["vs ",r.vs]}),n.jsx("span",{className:"comparison-advantage",children:r.advantage})]},s))})})]})]}):n.jsx("div",{className:"concepts-panel",children:n.jsx("p",{children:"Concepts not available for this data structure."})})}const Ut=7,Cj={inorder:{name:"Inorder Traversal",order:"Left -> Root -> Right",description:"Returns elements in SORTED order for BST. This is the key property of BST!",useCase:["Get sorted elements","Validate BST","Range queries"],complexity:{time:"O(n)",space:"O(h)"}},preorder:{name:"Preorder Traversal",order:"Root -> Left -> Right",description:"Process root first. Useful for copying/serializing the BST structure.",useCase:["Copy tree structure","Serialize BST","Prefix expressions"],complexity:{time:"O(n)",space:"O(h)"}},postorder:{name:"Postorder Traversal",order:"Left -> Right -> Root",description:"Process children before root. Essential for safely deleting the tree.",useCase:["Delete tree safely","Calculate subtree sizes","Postfix expressions"],complexity:{time:"O(n)",space:"O(h)"}},levelorder:{name:"Level Order Traversal",order:"Level by Level (BFS)",description:"Visit nodes level by level using a queue. Shows tree structure clearly.",useCase:["Level-wise printing","Find width","Serialize for reconstruction"],complexity:{time:"O(n)",space:"O(w)"}}},wl=(e,t=0)=>e?Math.max(wl(e.left,t+1),wl(e.right,t+1)):t-1,Tj=(e,t)=>{const r=[];let s=e;for(;s&&(r.push(s.value),s.value!==t);)t<s.value?s=s.left:s=s.right;return r};function _j({insertValue:e,deleteValue:t,searchValue:r,size:s,height:i,message:a,tree:l,isAnimating:o,visitedNodes:c,searchPath:u,searchResult:d,onInsertValueChange:h,onDeleteValueChange:m,onSearchValueChange:w,onInsert:k,onDelete:N,onSearch:y,onTraversal:f,onClear:g,onResetTraversal:x}){const _=(j,z)=>{const C=j.target.value;(C===""||C==="-"||/^-?\d*\.?\d*$/.test(C))&&z(C)};return n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Binary Search Tree"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"insertValue",children:"Insert Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"insertValue",value:e,onChange:j=>_(j,h),onKeyDown:j=>j.key==="Enter"&&k(),placeholder:"Enter a number",disabled:o}),n.jsx("button",{onClick:k,className:"btn btn-insert",disabled:o,children:"Insert"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"searchValue",children:"Search Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"searchValue",value:r,onChange:j=>_(j,w),onKeyDown:j=>j.key==="Enter"&&y(),placeholder:"Enter a number",disabled:o}),n.jsxs("button",{onClick:y,className:"btn btn-search",disabled:o||!l,children:[n.jsx(fr,{size:16})," Search"]})]}),u.length>0&&n.jsxs("div",{className:"search-path-display",children:[n.jsx("span",{className:"search-path-label",children:"Path:"}),n.jsx("div",{className:"search-path-nodes",children:u.map((j,z)=>n.jsxs(Pe.Fragment,{children:[n.jsx("span",{className:`search-path-node ${z===u.length-1?d?"found":"not-found":""}`,children:j}),z<u.length-1&&n.jsx(fe,{size:14,className:"search-path-arrow"})]},z))})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"deleteValue",children:"Delete Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"deleteValue",value:t,onChange:j=>_(j,m),onKeyDown:j=>j.key==="Enter"&&N(),placeholder:"Enter a number",disabled:o}),n.jsx("button",{onClick:N,className:"btn btn-delete",disabled:o,children:"Delete"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Traversals"}),n.jsx("div",{className:"btn-group",children:["inorder","preorder","postorder","levelorder"].map(j=>n.jsxs("button",{onClick:()=>f(j),className:`btn btn-traversal ${j==="inorder"?"btn-traversal-primary":""}`,disabled:o||!l,title:j==="inorder"?"Returns sorted order!":"",children:[j==="levelorder"?"Level Order":j.charAt(0).toUpperCase()+j.slice(1),j==="inorder"&&n.jsx("span",{className:"sorted-badge",children:"Sorted!"})]},j))}),c.length>0&&!o&&n.jsx("button",{onClick:x,className:"btn btn-secondary",style:{marginTop:"0.5rem",width:"100%"},children:"Reset Colors"})]}),n.jsxs("div",{className:"traversal-legend",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--default"}),n.jsx("span",{children:"Not visited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--visiting"}),n.jsx("span",{children:"Current"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--visited"}),n.jsx("span",{children:"Visited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--search"}),n.jsx("span",{children:"Search path"})]})]}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Nodes:"}),n.jsx("span",{className:"info-value",children:s})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Height:"}),n.jsx("span",{className:"info-value",children:i})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Max:"}),n.jsx("span",{className:"info-value",children:Ut})]})]}),s>=Ut*.8&&s<Ut&&n.jsxs("div",{className:"warning-box",children:[n.jsx(Sn,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Tree filling up!"})," ",s,"/",Ut," nodes."]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:g,className:"btn btn-clear",disabled:o,children:"Clear Tree"})}),a&&n.jsx("div",{className:`message message-${a.includes("Error")||a.includes("error")||a.includes("not found")?"error":/success|complete|Inserted|Deleted|cleared|Found/i.test(a)?"success":a.includes("full")?"warning":"info"}`,children:a})]})}function Lj({tree:e,currentNode:t,visitedNodes:r,searchPath:s,searchResult:i}){const a=d=>{const h=t===d,m=r.includes(d),w=s.includes(d),k=s.length>0&&s[s.length-1]===d;let N="#6366f1",y="none";return h?(N="#f59e0b",y="drop-shadow(0 0 12px #f59e0b) drop-shadow(0 0 20px #f59e0b)"):k?(N=i?"#10b981":"#ef4444",y=i?"drop-shadow(0 0 12px #10b981)":"drop-shadow(0 0 12px #ef4444)"):w?(N="#3b82f6",y="drop-shadow(0 0 8px #3b82f6)"):m&&(N="#10b981",y="drop-shadow(0 0 6px #10b981)"),{color:N,glow:y,radius:h||k?30:25,stroke:h||k?3:2,fontSize:h||k?16:14,fontWeight:h||k?"bold":"normal"}},l=(d,h,m,w,k)=>{if(!d)return[];const N=Math.pow(2,k-w)*50,y=a(d.value),f=[];if(d.left){const g=s.includes(d.value)&&s.includes(d.left.value);f.push(n.jsx("line",{x1:h,y1:m,x2:h-N,y2:m+100,stroke:g?"#3b82f6":"rgba(255,255,255,0.3)",strokeWidth:g?3:2},`l-${d.value}-l`)),f.push(...l(d.left,h-N,m+100,w+1,k))}if(d.right){const g=s.includes(d.value)&&s.includes(d.right.value);f.push(n.jsx("line",{x1:h,y1:m,x2:h+N,y2:m+100,stroke:g?"#3b82f6":"rgba(255,255,255,0.3)",strokeWidth:g?3:2},`l-${d.value}-r`)),f.push(...l(d.right,h+N,m+100,w+1,k))}return f.push(n.jsxs("g",{style:{filter:y.glow,transition:"all 0.3s ease"},children:[n.jsx("circle",{cx:h,cy:m,r:y.radius,fill:y.color,stroke:"white",strokeWidth:y.stroke,style:{transition:"all 0.3s ease"}}),n.jsx("text",{x:h,y:m,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:y.fontSize,fontWeight:y.fontWeight,children:d.value})]},`n-${d.value}-${h}`)),f};if(!e)return n.jsxs("div",{className:"tree-empty",children:[n.jsx("p",{children:"BST is empty. Insert some values!"}),n.jsx("p",{className:"tree-empty-hint",children:"Try: 50, 30, 70, 20, 40, 60, 80"})]});const o=wl(e),c=(o+1)*100+50,u=Math.max(800,Math.pow(2,Math.max(o,1))*80);return n.jsx("svg",{width:u,height:c,className:"tree-svg",children:l(e,u/2,50,0,o)})}function Ej({traversalType:e,traversalResult:t,isAnimating:r,traversalComplete:s}){if(!e||t.length===0&&!r)return null;const i=Cj[e];return n.jsxs("div",{className:"traversal-output-panel",children:[n.jsxs("div",{style:{marginBottom:"1rem"},children:[n.jsxs("h3",{className:"traversal-title",children:[i==null?void 0:i.name,e==="inorder"&&n.jsx("span",{className:"sorted-indicator",children:"Returns Sorted Order!"}),r&&n.jsx("span",{className:"traversal-badge traversal-badge--running",children:"Running..."}),s&&n.jsx("span",{className:"traversal-badge traversal-badge--complete",children:"Complete"})]}),n.jsxs("p",{className:"traversal-order",children:[n.jsx("strong",{children:"Order:"})," ",i==null?void 0:i.order]}),n.jsx("p",{className:"traversal-description",children:i==null?void 0:i.description})]}),n.jsxs("div",{className:"traversal-output-box",children:[n.jsx("div",{className:"traversal-output-label",children:"Output Sequence:"}),n.jsx("div",{className:"traversal-sequence-container",children:t.length===0&&r?n.jsx("span",{style:{color:"var(--text-muted)",fontStyle:"italic"},children:"Traversing..."}):t.map((a,l)=>n.jsx("span",{className:`traversal-node ${l===t.length-1&&!s?"traversal-node--current":"traversal-node--complete"}`,children:a},l))})]}),s&&t.length>0&&n.jsxs("div",{className:"traversal-array-section",children:[n.jsx("div",{className:"traversal-array-label",children:"Array Output:"}),n.jsxs("code",{className:"traversal-array-output",children:["[",t.join(", "),"]"]}),e==="inorder"&&n.jsx("p",{className:"traversal-sorted-note",children:"Notice: The output is sorted! This is the BST property."}),n.jsxs("p",{className:"traversal-use-case",children:["Use case: ",i==null?void 0:i.useCase.join(" | ")]}),n.jsxs("div",{className:"traversal-complexity",children:[n.jsx("strong",{children:"Time:"})," ",n.jsx("code",{className:"complexity-value",children:i==null?void 0:i.complexity.time}),n.jsx("br",{}),n.jsx("strong",{children:"Space:"})," ",n.jsx("code",{className:"complexity-value",children:i==null?void 0:i.complexity.space})]})]})]})}function Oj(){const[e,t]=p.useState(null),[r,s]=p.useState(0),[i,a]=p.useState(-1),[l,o]=p.useState(""),[c,u]=p.useState(""),[d,h]=p.useState(""),[m,w]=p.useState(""),[k,N]=p.useState([]),[y,f]=p.useState(null),[g,x]=p.useState([]),[_,j]=p.useState(!1),[z,C]=p.useState(null),[D,$]=p.useState([]),[R,H]=p.useState(null),[W,E]=p.useState(!1);p.useEffect(()=>{I()},[]);const I=async()=>{try{const M=await(await fetch("/api/bst")).json();t(M.tree),s(M.size||0),a(M.height!==void 0?M.height:-1)}catch(O){console.error("Error loading BST:",O)}},v=O=>{w(O),setTimeout(()=>w(""),3e3)},T=()=>{N([]),f(null)},A=async()=>{if(!l.trim()){v("Please enter a number!");return}const O=Number(l);if(isNaN(O)){v("Please enter a valid number!");return}if(r>=Ut){v(`Tree is full! Maximum size is ${Ut} nodes.`);return}T(),B();try{const P=await(await fetch("/api/bst/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:O})})).json();if(P.error){v(P.error);return}t(P.tree),s(P.size||0),a(P.height!==void 0?P.height:-1),v(`Inserted ${O}`),o("")}catch{v("Error inserting node")}},S=async()=>{if(!c.trim()){v("Please enter a number!");return}const O=Number(c);if(isNaN(O)){v("Please enter a valid number!");return}T(),B();try{const P=await(await fetch("/api/bst/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:O})})).json();if(P.error){v(P.error);return}t(P.tree),s(P.size||0),a(P.height!==void 0?P.height:-1),v(`Deleted ${O}`),u("")}catch{v("Error deleting node")}},L=async()=>{if(!d.trim()){v("Please enter a number!");return}const O=Number(d);if(isNaN(O)){v("Please enter a valid number!");return}if(!e){v("Tree is empty!");return}B(),j(!0);const M=Tj(e,O);for(let P=0;P<M.length;P++)N(M.slice(0,P+1)),await new Promise(b=>setTimeout(b,500));try{const b=await(await fetch(`/api/bst/search?value=${O}`)).json();f(b.found),b.found?v(`Found ${O}!`):v(`${O} not found in BST`)}catch{v("Error searching")}j(!1),h("")},F=async()=>{try{await fetch("/api/bst/clear",{method:"POST"}),t(null),s(0),a(-1),B(),T(),v("BST cleared!")}catch{v("Error clearing tree")}},V=async O=>{if(!e){v("Tree is empty! Insert some nodes first.");return}T(),j(!0),x([]),C(null),$([]),H(O),E(!1);try{const b=(await(await fetch(`/api/bst/${O}`)).json()).traversal||[];if(b.length===0){v("Tree is empty!"),j(!1);return}for(let G=0;G<b.length;G++)C(b[G]),await new Promise(Y=>setTimeout(Y,600)),$(Y=>[...Y,b[G]]),x(Y=>[...Y,b[G]]),await new Promise(Y=>setTimeout(Y,200));C(null),E(!0),j(!1);const q=O.charAt(0).toUpperCase()+O.slice(1);v(`${q} traversal complete!${O==="inorder"?" (Sorted!)":""}`)}catch(M){console.error("Traversal error:",M),v("Error performing traversal"),j(!1)}},B=()=>{x([]),C(null),$([]),H(null),E(!1)};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsx("div",{className:"intro-left",children:n.jsx(gr,{dataStructure:"bst"})}),n.jsx(me,{context:"Binary Search Tree (BST) data structure, search, insert, delete operations, and traversals"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsx(_j,{insertValue:l,deleteValue:c,searchValue:d,size:r,height:i,message:m,tree:e,isAnimating:_,visitedNodes:D,searchPath:k,searchResult:y,onInsertValueChange:o,onDeleteValueChange:u,onSearchValueChange:h,onInsert:A,onDelete:S,onSearch:L,onTraversal:V,onClear:F,onResetTraversal:()=>{B(),T()}}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"BST Visualization"}),n.jsxs("p",{className:"bst-property-reminder",children:["Remember: ",n.jsxs("code",{children:["Left ","<"," Parent ","<"," Right"]})]}),n.jsx("div",{className:"tree-container",children:n.jsx(Lj,{tree:e,currentNode:z,visitedNodes:D,searchPath:k,searchResult:y})}),n.jsx(Ej,{traversalType:R,traversalResult:g,isAnimating:_,traversalComplete:W})]})]}),n.jsx(ye,{dataStructure:"bst"})]})}const Kt=7,Rj={inorder:{name:"Inorder Traversal",order:"Left -> Root -> Right",description:"Returns elements in SORTED order.",useCase:["Get sorted elements","Validate BST property"],complexity:{time:"O(n)",space:"O(h)"}},preorder:{name:"Preorder Traversal",order:"Root -> Left -> Right",description:"Process root first. Useful for copying tree structure.",useCase:["Copy tree structure","Serialize AVL"],complexity:{time:"O(n)",space:"O(h)"}},postorder:{name:"Postorder Traversal",order:"Left -> Right -> Root",description:"Process children before root.",useCase:["Delete tree safely","Calculate subtree info"],complexity:{time:"O(n)",space:"O(h)"}},levelorder:{name:"Level Order Traversal",order:"Level by Level (BFS)",description:"Visit nodes level by level using a queue.",useCase:["Level-wise printing","Find width"],complexity:{time:"O(n)",space:"O(w)"}}},bl=(e,t=0)=>e?Math.max(bl(e.left,t+1),bl(e.right,t+1)):t-1,Pj=(e,t)=>{const r=[];let s=e;for(;s&&(r.push(s.value),s.value!==t);)t<s.value?s=s.left:s=s.right;return r};function Ij({insertValue:e,deleteValue:t,searchValue:r,size:s,height:i,message:a,tree:l,isAnimating:o,visitedNodes:c,searchPath:u,searchResult:d,onInsertValueChange:h,onDeleteValueChange:m,onSearchValueChange:w,onInsert:k,onDelete:N,onSearch:y,onTraversal:f,onClear:g,onResetTraversal:x}){const _=(j,z)=>{const C=j.target.value;(C===""||C==="-"||/^-?\d*\.?\d*$/.test(C))&&z(C)};return n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"AVL Tree"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"insertValue",children:"Insert Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"insertValue",value:e,onChange:j=>_(j,h),onKeyDown:j=>j.key==="Enter"&&k(),placeholder:"Enter a number",disabled:o}),n.jsx("button",{onClick:k,className:"btn btn-insert",disabled:o,children:"Insert"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"searchValue",children:"Search Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"searchValue",value:r,onChange:j=>_(j,w),onKeyDown:j=>j.key==="Enter"&&y(),placeholder:"Enter a number",disabled:o}),n.jsxs("button",{onClick:y,className:"btn btn-search",disabled:o||!l,children:[n.jsx(fr,{size:16})," Search"]})]}),u.length>0&&n.jsxs("div",{className:"search-path-display",children:[n.jsx("span",{className:"search-path-label",children:"Path:"}),n.jsx("div",{className:"search-path-nodes",children:u.map((j,z)=>n.jsxs(Pe.Fragment,{children:[n.jsx("span",{className:`search-path-node ${z===u.length-1?d?"found":"not-found":""}`,children:j}),z<u.length-1&&n.jsx(fe,{size:14,className:"search-path-arrow"})]},z))})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"deleteValue",children:"Delete Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"deleteValue",value:t,onChange:j=>_(j,m),onKeyDown:j=>j.key==="Enter"&&N(),placeholder:"Enter a number",disabled:o}),n.jsx("button",{onClick:N,className:"btn btn-delete",disabled:o,children:"Delete"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Traversals"}),n.jsx("div",{className:"btn-group",children:["inorder","preorder","postorder","levelorder"].map(j=>n.jsx("button",{onClick:()=>f(j),className:"btn btn-traversal",disabled:o||!l,children:j==="levelorder"?"Level Order":j.charAt(0).toUpperCase()+j.slice(1)},j))}),c.length>0&&!o&&n.jsx("button",{onClick:x,className:"btn btn-secondary",style:{marginTop:"0.5rem",width:"100%"},children:"Reset Colors"})]}),n.jsxs("div",{className:"traversal-legend",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--default"}),n.jsx("span",{children:"Not visited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--visiting"}),n.jsx("span",{children:"Current"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--visited"}),n.jsx("span",{children:"Visited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--search"}),n.jsx("span",{children:"Search path"})]})]}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Nodes:"}),n.jsx("span",{className:"info-value",children:s})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Height:"}),n.jsx("span",{className:"info-value",children:i})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Max:"}),n.jsx("span",{className:"info-value",children:Kt})]})]}),s>=Kt*.8&&s<Kt&&n.jsxs("div",{className:"warning-box",children:[n.jsx(Sn,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Tree filling up!"})," ",s,"/",Kt," nodes."]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:g,className:"btn btn-clear",disabled:o,children:"Clear Tree"})}),a&&n.jsx("div",{className:`message message-${a.includes("Error")||a.includes("error")||a.includes("not found")?"error":/success|complete|Inserted|Deleted|cleared|Found|rebalanced/i.test(a)?"success":a.includes("full")?"warning":"info"}`,children:a})]})}function Mj({tree:e,currentNode:t,visitedNodes:r,searchPath:s,searchResult:i}){const a=d=>{const h=t===d,m=r.includes(d),w=s.includes(d),k=s.length>0&&s[s.length-1]===d;let N="#8b5cf6",y="none";return h?(N="#f59e0b",y="drop-shadow(0 0 12px #f59e0b) drop-shadow(0 0 20px #f59e0b)"):k?(N=i?"#10b981":"#ef4444",y=i?"drop-shadow(0 0 12px #10b981)":"drop-shadow(0 0 12px #ef4444)"):w?(N="#3b82f6",y="drop-shadow(0 0 8px #3b82f6)"):m&&(N="#10b981",y="drop-shadow(0 0 6px #10b981)"),{color:N,glow:y,radius:h||k?30:25,stroke:h||k?3:2,fontSize:h||k?16:14,fontWeight:h||k?"bold":"normal"}},l=(d,h,m,w,k)=>{if(!d)return[];const N=Math.pow(2,k-w)*50,y=a(d.value),f=[];if(d.left){const g=s.includes(d.value)&&s.includes(d.left.value);f.push(n.jsx("line",{x1:h,y1:m,x2:h-N,y2:m+100,stroke:g?"#3b82f6":"rgba(255,255,255,0.3)",strokeWidth:g?3:2},`l-${d.value}-l`)),f.push(...l(d.left,h-N,m+100,w+1,k))}if(d.right){const g=s.includes(d.value)&&s.includes(d.right.value);f.push(n.jsx("line",{x1:h,y1:m,x2:h+N,y2:m+100,stroke:g?"#3b82f6":"rgba(255,255,255,0.3)",strokeWidth:g?3:2},`l-${d.value}-r`)),f.push(...l(d.right,h+N,m+100,w+1,k))}return f.push(n.jsxs("g",{style:{filter:y.glow,transition:"all 0.3s ease"},children:[n.jsx("circle",{cx:h,cy:m,r:y.radius,fill:y.color,stroke:"white",strokeWidth:y.stroke,style:{transition:"all 0.3s ease"}}),n.jsx("text",{x:h,y:m,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:y.fontSize,fontWeight:y.fontWeight,children:d.value}),d.balance!==void 0&&n.jsxs("g",{children:[n.jsx("circle",{cx:h+20,cy:m-20,r:10,fill:Math.abs(d.balance)<=1?"#10b981":"#ef4444"}),n.jsx("text",{x:h+20,y:m-20,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:10,fontWeight:"bold",children:d.balance})]})]},`n-${d.value}-${h}`)),f};if(!e)return n.jsxs("div",{className:"tree-empty",children:[n.jsx("p",{children:"AVL Tree is empty. Insert some values!"}),n.jsx("p",{className:"tree-empty-hint",children:"Try: 30, 20, 40, 10 (watch it balance!)"})]});const o=bl(e),c=(o+1)*100+50,u=Math.max(800,Math.pow(2,Math.max(o,1))*80);return n.jsx("svg",{width:u,height:c,className:"tree-svg",children:l(e,u/2,50,0,o)})}function zj({traversalType:e,traversalResult:t,isAnimating:r,traversalComplete:s}){if(!e||t.length===0&&!r)return null;const i=Rj[e];return n.jsxs("div",{className:"traversal-output-panel",children:[n.jsxs("div",{style:{marginBottom:"1rem"},children:[n.jsxs("h3",{className:"traversal-title",children:[i==null?void 0:i.name,r&&n.jsx("span",{className:"traversal-badge traversal-badge--running",children:"Running..."}),s&&n.jsx("span",{className:"traversal-badge traversal-badge--complete",children:"Complete"})]}),n.jsxs("p",{className:"traversal-order",children:[n.jsx("strong",{children:"Order:"})," ",i==null?void 0:i.order]}),n.jsx("p",{className:"traversal-description",children:i==null?void 0:i.description})]}),n.jsxs("div",{className:"traversal-output-box",children:[n.jsx("div",{className:"traversal-output-label",children:"Output Sequence:"}),n.jsx("div",{className:"traversal-sequence-container",children:t.length===0&&r?n.jsx("span",{style:{color:"var(--text-muted)",fontStyle:"italic"},children:"Traversing..."}):t.map((a,l)=>n.jsx("span",{className:`traversal-node ${l===t.length-1&&!s?"traversal-node--current":"traversal-node--complete"}`,children:a},l))})]}),s&&t.length>0&&n.jsxs("div",{className:"traversal-array-section",children:[n.jsx("div",{className:"traversal-array-label",children:"Array Output:"}),n.jsxs("code",{className:"traversal-array-output",children:["[",t.join(", "),"]"]}),n.jsxs("p",{className:"traversal-use-case",children:["Use case: ",i==null?void 0:i.useCase.join(" | ")]}),n.jsxs("div",{className:"traversal-complexity",children:[n.jsx("strong",{children:"Time:"})," ",n.jsx("code",{className:"complexity-value",children:i==null?void 0:i.complexity.time}),n.jsx("br",{}),n.jsx("strong",{children:"Space:"})," ",n.jsx("code",{className:"complexity-value",children:i==null?void 0:i.complexity.space})]})]})]})}function Fj(){const[e,t]=p.useState(null),[r,s]=p.useState(0),[i,a]=p.useState(-1),[l,o]=p.useState(""),[c,u]=p.useState(""),[d,h]=p.useState(""),[m,w]=p.useState(""),[k,N]=p.useState([]),[y,f]=p.useState(null),[g,x]=p.useState([]),[_,j]=p.useState(!1),[z,C]=p.useState(null),[D,$]=p.useState([]),[R,H]=p.useState(null),[W,E]=p.useState(!1);p.useEffect(()=>{I()},[]);const I=async()=>{try{const M=await(await fetch("/api/avl")).json();t(M.tree),s(M.size||0),a(M.height!==void 0?M.height:-1)}catch(O){console.error("Error loading AVL:",O)}},v=O=>{w(O),setTimeout(()=>w(""),3e3)},T=()=>{N([]),f(null)},A=async()=>{if(!l.trim()){v("Please enter a number!");return}const O=Number(l);if(isNaN(O)){v("Please enter a valid number!");return}if(r>=Kt){v(`Tree is full! Maximum size is ${Kt} nodes.`);return}T(),B();try{const P=await(await fetch("/api/avl/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:O})})).json();if(P.error){v(P.error);return}t(P.tree),s(P.size||0),a(P.height!==void 0?P.height:-1),v(`Inserted ${O} (tree rebalanced)`),o("")}catch{v("Error inserting node")}},S=async()=>{if(!c.trim()){v("Please enter a number!");return}const O=Number(c);if(isNaN(O)){v("Please enter a valid number!");return}T(),B();try{const P=await(await fetch("/api/avl/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:O})})).json();if(P.error){v(P.error);return}t(P.tree),s(P.size||0),a(P.height!==void 0?P.height:-1),v(`Deleted ${O} (tree rebalanced)`),u("")}catch{v("Error deleting node")}},L=async()=>{if(!d.trim()){v("Please enter a number!");return}const O=Number(d);if(isNaN(O)){v("Please enter a valid number!");return}if(!e){v("Tree is empty!");return}B(),j(!0);const M=Pj(e,O);for(let P=0;P<M.length;P++)N(M.slice(0,P+1)),await new Promise(b=>setTimeout(b,500));try{const b=await(await fetch(`/api/avl/search?value=${O}`)).json();f(b.found),b.found?v(`Found ${O}!`):v(`${O} not found in AVL Tree`)}catch{v("Error searching")}j(!1),h("")},F=async()=>{try{await fetch("/api/avl/clear",{method:"POST"}),t(null),s(0),a(-1),B(),T(),v("AVL Tree cleared!")}catch{v("Error clearing tree")}},V=async O=>{if(!e){v("Tree is empty! Insert some nodes first.");return}T(),j(!0),x([]),C(null),$([]),H(O),E(!1);try{const b=(await(await fetch(`/api/avl/${O}`)).json()).traversal||[];if(b.length===0){v("Tree is empty!"),j(!1);return}for(let G=0;G<b.length;G++)C(b[G]),await new Promise(Y=>setTimeout(Y,600)),$(Y=>[...Y,b[G]]),x(Y=>[...Y,b[G]]),await new Promise(Y=>setTimeout(Y,200));C(null),E(!0),j(!1);const q=O.charAt(0).toUpperCase()+O.slice(1);v(`${q} traversal complete!`)}catch(M){console.error("Traversal error:",M),v("Error performing traversal"),j(!1)}},B=()=>{x([]),C(null),$([]),H(null),E(!1)};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsx("div",{className:"intro-left",children:n.jsx(gr,{dataStructure:"avl"})}),n.jsx(me,{context:"AVL Tree data structure, self-balancing BST, rotations, balance factors, and O(log n) guaranteed operations"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsx(Ij,{insertValue:l,deleteValue:c,searchValue:d,size:r,height:i,message:m,tree:e,isAnimating:_,visitedNodes:D,searchPath:k,searchResult:y,onInsertValueChange:o,onDeleteValueChange:u,onSearchValueChange:h,onInsert:A,onDelete:S,onSearch:L,onTraversal:V,onClear:F,onResetTraversal:()=>{B(),T()}}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"AVL Tree Visualization"}),n.jsxs("p",{className:"bst-property-reminder",children:["Self-balancing: ",n.jsx("code",{children:"|Balance Factor| <= 1"})," for all nodes"]}),n.jsx("div",{className:"tree-container",children:n.jsx(Mj,{tree:e,currentNode:z,visitedNodes:D,searchPath:k,searchResult:y})}),n.jsx(zj,{traversalType:R,traversalResult:g,isAnimating:_,traversalComplete:W})]})]}),n.jsx(ye,{dataStructure:"avl"})]})}const Wt=7,Aj={inorder:{name:"Inorder Traversal",order:"Left -> Root -> Right",description:"Returns elements in SORTED order.",useCase:["Get sorted elements","Validate BST property"],complexity:{time:"O(n)",space:"O(h)"}},preorder:{name:"Preorder Traversal",order:"Root -> Left -> Right",description:"Process root first. Root shows most recently accessed!",useCase:["See access pattern","Serialize structure"],complexity:{time:"O(n)",space:"O(h)"}},postorder:{name:"Postorder Traversal",order:"Left -> Right -> Root",description:"Process children before root.",useCase:["Delete tree safely","Calculate subtree info"],complexity:{time:"O(n)",space:"O(h)"}},levelorder:{name:"Level Order Traversal",order:"Level by Level (BFS)",description:"Visit nodes level by level.",useCase:["Level-wise printing","Find width"],complexity:{time:"O(n)",space:"O(w)"}}},Sl=(e,t=0)=>e?Math.max(Sl(e.left,t+1),Sl(e.right,t+1)):t-1;function Vj({insertValue:e,deleteValue:t,searchValue:r,size:s,height:i,message:a,tree:l,isAnimating:o,visitedNodes:c,lastSplayedValue:u,onInsertValueChange:d,onDeleteValueChange:h,onSearchValueChange:m,onInsert:w,onDelete:k,onSearch:N,onTraversal:y,onClear:f,onResetTraversal:g}){const x=(_,j)=>{const z=_.target.value;(z===""||z==="-"||/^-?\d*\.?\d*$/.test(z))&&j(z)};return n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Splay Tree"}),n.jsxs("div",{className:"splay-info-box",children:[n.jsx("strong",{children:"Key Feature:"})," Accessed nodes move to root!"]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"insertValue",children:"Insert Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"insertValue",value:e,onChange:_=>x(_,d),onKeyDown:_=>_.key==="Enter"&&w(),placeholder:"Enter a number",disabled:o}),n.jsx("button",{onClick:w,className:"btn btn-insert",disabled:o,children:"Insert"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"searchValue",children:"Search Value (Splays to Root!)"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"searchValue",value:r,onChange:_=>x(_,m),onKeyDown:_=>_.key==="Enter"&&N(),placeholder:"Enter a number",disabled:o}),n.jsxs("button",{onClick:N,className:"btn btn-search",disabled:o||!l,children:[n.jsx(fr,{size:16})," Search"]})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"deleteValue",children:"Delete Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"deleteValue",value:t,onChange:_=>x(_,h),onKeyDown:_=>_.key==="Enter"&&k(),placeholder:"Enter a number",disabled:o}),n.jsx("button",{onClick:k,className:"btn btn-delete",disabled:o,children:"Delete"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Traversals"}),n.jsx("div",{className:"btn-group",children:["inorder","preorder","postorder","levelorder"].map(_=>n.jsx("button",{onClick:()=>y(_),className:"btn btn-traversal",disabled:o||!l,children:_==="levelorder"?"Level Order":_.charAt(0).toUpperCase()+_.slice(1)},_))}),c.length>0&&!o&&n.jsx("button",{onClick:g,className:"btn btn-secondary",style:{marginTop:"0.5rem",width:"100%"},children:"Reset Colors"})]}),n.jsxs("div",{className:"traversal-legend",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--default"}),n.jsx("span",{children:"Not visited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--visiting"}),n.jsx("span",{children:"Current"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--visited"}),n.jsx("span",{children:"Visited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot",style:{background:"#ec4899"}}),n.jsx("span",{children:"Root (Splayed)"})]})]}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Nodes:"}),n.jsx("span",{className:"info-value",children:s})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Height:"}),n.jsx("span",{className:"info-value",children:i})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Max:"}),n.jsx("span",{className:"info-value",children:Wt})]})]}),u!==null&&n.jsxs("div",{className:"splay-result-box",children:[n.jsx("strong",{children:"Root:"})," ",u," (most recently accessed)"]}),s>=Wt*.8&&s<Wt&&n.jsxs("div",{className:"warning-box",children:[n.jsx(Sn,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Tree filling up!"})," ",s,"/",Wt," nodes."]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:f,className:"btn btn-clear",disabled:o,children:"Clear Tree"})}),a&&n.jsx("div",{className:`message message-${a.includes("Error")||a.includes("error")||a.includes("not found")?"error":/success|complete|Inserted|Deleted|cleared|Found|root/i.test(a)?"success":a.includes("full")?"warning":"info"}`,children:a})]})}function Dj({tree:e,currentNode:t,visitedNodes:r,lastSplayedValue:s}){const i=(u,d)=>{const h=t===u,m=r.includes(u),w=d&&s===u;let k="#06b6d4",N="none";return h?(k="#f59e0b",N="drop-shadow(0 0 12px #f59e0b) drop-shadow(0 0 20px #f59e0b)"):w?(k="#ec4899",N="drop-shadow(0 0 15px #ec4899) drop-shadow(0 0 25px #ec4899)"):d?(k="#8b5cf6",N="drop-shadow(0 0 8px #8b5cf6)"):m&&(k="#10b981",N="drop-shadow(0 0 6px #10b981)"),{color:k,glow:N,radius:h||w?30:d?28:25,stroke:h||w?3:2,fontSize:h||w?16:14,fontWeight:h||w||d?"bold":"normal"}},a=(u,d,h,m,w,k=!1)=>{if(!u)return[];const N=Math.pow(2,w-m)*50,y=i(u.value,k),f=[];return u.left&&(f.push(n.jsx("line",{x1:d,y1:h,x2:d-N,y2:h+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:2},`l-${u.value}-l`)),f.push(...a(u.left,d-N,h+100,m+1,w,!1))),u.right&&(f.push(n.jsx("line",{x1:d,y1:h,x2:d+N,y2:h+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:2},`l-${u.value}-r`)),f.push(...a(u.right,d+N,h+100,m+1,w,!1))),f.push(n.jsxs("g",{style:{filter:y.glow,transition:"all 0.3s ease"},children:[n.jsx("circle",{cx:d,cy:h,r:y.radius,fill:y.color,stroke:"white",strokeWidth:y.stroke,style:{transition:"all 0.3s ease"}}),n.jsx("text",{x:d,y:h,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:y.fontSize,fontWeight:y.fontWeight,children:u.value}),k&&n.jsx("text",{x:d,y:h+y.radius+15,textAnchor:"middle",fill:"#ec4899",fontSize:10,fontWeight:"bold",children:"ROOT"})]},`n-${u.value}-${d}`)),f};if(!e)return n.jsxs("div",{className:"tree-empty",children:[n.jsx("p",{children:"Splay Tree is empty. Insert some values!"}),n.jsx("p",{className:"tree-empty-hint",children:"Try inserting: 50, 30, 70, then search for 30!"})]});const l=Sl(e),o=(l+1)*100+70,c=Math.max(800,Math.pow(2,Math.max(l,1))*80);return n.jsx("svg",{width:c,height:o,className:"tree-svg",children:a(e,c/2,50,0,l,!0)})}function $j({traversalType:e,traversalResult:t,isAnimating:r,traversalComplete:s}){if(!e||t.length===0&&!r)return null;const i=Aj[e];return n.jsxs("div",{className:"traversal-output-panel",children:[n.jsxs("div",{style:{marginBottom:"1rem"},children:[n.jsxs("h3",{className:"traversal-title",children:[i==null?void 0:i.name,r&&n.jsx("span",{className:"traversal-badge traversal-badge--running",children:"Running..."}),s&&n.jsx("span",{className:"traversal-badge traversal-badge--complete",children:"Complete"})]}),n.jsxs("p",{className:"traversal-order",children:[n.jsx("strong",{children:"Order:"})," ",i==null?void 0:i.order]}),n.jsx("p",{className:"traversal-description",children:i==null?void 0:i.description})]}),n.jsxs("div",{className:"traversal-output-box",children:[n.jsx("div",{className:"traversal-output-label",children:"Output Sequence:"}),n.jsx("div",{className:"traversal-sequence-container",children:t.length===0&&r?n.jsx("span",{style:{color:"var(--text-muted)",fontStyle:"italic"},children:"Traversing..."}):t.map((a,l)=>n.jsx("span",{className:`traversal-node ${l===t.length-1&&!s?"traversal-node--current":"traversal-node--complete"}`,children:a},l))})]}),s&&t.length>0&&n.jsxs("div",{className:"traversal-array-section",children:[n.jsx("div",{className:"traversal-array-label",children:"Array Output:"}),n.jsxs("code",{className:"traversal-array-output",children:["[",t.join(", "),"]"]}),e==="preorder"&&n.jsx("p",{className:"traversal-sorted-note",children:"Note: First element is the root (most recently accessed)!"}),n.jsxs("p",{className:"traversal-use-case",children:["Use case: ",i==null?void 0:i.useCase.join(" | ")]}),n.jsxs("div",{className:"traversal-complexity",children:[n.jsx("strong",{children:"Time:"})," ",n.jsx("code",{className:"complexity-value",children:i==null?void 0:i.complexity.time}),n.jsx("br",{}),n.jsx("strong",{children:"Space:"})," ",n.jsx("code",{className:"complexity-value",children:i==null?void 0:i.complexity.space})]})]})]})}function Bj(){const[e,t]=p.useState(null),[r,s]=p.useState(0),[i,a]=p.useState(-1),[l,o]=p.useState(""),[c,u]=p.useState(""),[d,h]=p.useState(""),[m,w]=p.useState(""),[k,N]=p.useState(null),[y,f]=p.useState([]),[g,x]=p.useState(!1),[_,j]=p.useState(null),[z,C]=p.useState([]),[D,$]=p.useState(null),[R,H]=p.useState(!1);p.useEffect(()=>{W()},[]);const W=async()=>{try{const V=await(await fetch("/api/splay")).json();t(V.tree),s(V.size||0),a(V.height!==void 0?V.height:-1)}catch(F){console.error("Error loading Splay Tree:",F)}},E=F=>{w(F),setTimeout(()=>w(""),3e3)},I=async()=>{if(!l.trim()){E("Please enter a number!");return}const F=Number(l);if(isNaN(F)){E("Please enter a valid number!");return}if(r>=Wt){E(`Tree is full! Maximum size is ${Wt} nodes.`);return}L(),N(null);try{const B=await(await fetch("/api/splay/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:F})})).json();if(B.error){E(B.error);return}t(B.tree),s(B.size||0),a(B.height!==void 0?B.height:-1),N(F),E(`Inserted ${F} (now at root!)`),o("")}catch{E("Error inserting node")}},v=async()=>{if(!c.trim()){E("Please enter a number!");return}const F=Number(c);if(isNaN(F)){E("Please enter a valid number!");return}L(),N(null);try{const B=await(await fetch("/api/splay/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:F})})).json();if(B.error){E(B.error);return}t(B.tree),s(B.size||0),a(B.height!==void 0?B.height:-1),E(`Deleted ${F}`),u("")}catch{E("Error deleting node")}},T=async()=>{if(!d.trim()){E("Please enter a number!");return}const F=Number(d);if(isNaN(F)){E("Please enter a valid number!");return}if(!e){E("Tree is empty!");return}L(),x(!0);try{const B=await(await fetch(`/api/splay/search?value=${F}`)).json();B.tree&&t(B.tree),B.found?(N(F),E(`Found ${F}! (splayed to root)`)):(N(null),E(`${F} not found in Splay Tree`)),await W()}catch{E("Error searching")}x(!1),h("")},A=async()=>{try{await fetch("/api/splay/clear",{method:"POST"}),t(null),s(0),a(-1),L(),N(null),E("Splay Tree cleared!")}catch{E("Error clearing tree")}},S=async F=>{if(!e){E("Tree is empty! Insert some nodes first.");return}N(null),x(!0),f([]),j(null),C([]),$(F),H(!1);try{const O=(await(await fetch(`/api/splay/${F}`)).json()).traversal||[];if(O.length===0){E("Tree is empty!"),x(!1);return}for(let P=0;P<O.length;P++)j(O[P]),await new Promise(b=>setTimeout(b,600)),C(b=>[...b,O[P]]),f(b=>[...b,O[P]]),await new Promise(b=>setTimeout(b,200));j(null),H(!0),x(!1);const M=F.charAt(0).toUpperCase()+F.slice(1);E(`${M} traversal complete!`)}catch(V){console.error("Traversal error:",V),E("Error performing traversal"),x(!1)}},L=()=>{f([]),j(null),C([]),$(null),H(!1)};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsx("div",{className:"intro-left",children:n.jsx(gr,{dataStructure:"splay"})}),n.jsx(me,{context:"Splay Tree data structure, self-adjusting BST, splay operations, zig-zig, zig-zag rotations, amortized O(log n)"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsx(Vj,{insertValue:l,deleteValue:c,searchValue:d,size:r,height:i,message:m,tree:e,isAnimating:g,visitedNodes:z,lastSplayedValue:k,onInsertValueChange:o,onDeleteValueChange:u,onSearchValueChange:h,onInsert:I,onDelete:v,onSearch:T,onTraversal:S,onClear:A,onResetTraversal:()=>{L(),N(null)}}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Splay Tree Visualization"}),n.jsxs("p",{className:"bst-property-reminder",children:["Self-adjusting: ",n.jsx("code",{children:"Recently accessed = Root"})]}),n.jsx("div",{className:"tree-container",children:n.jsx(Dj,{tree:e,currentNode:_,visitedNodes:z,lastSplayedValue:k})}),n.jsx($j,{traversalType:D,traversalResult:y,isAnimating:g,traversalComplete:R})]})]}),n.jsx(ye,{dataStructure:"splay"})]})}const Gt=15,Hj={inorder:{name:"Inorder Traversal",order:"Left -> Root -> Right",description:"Returns elements in SORTED order (BST property preserved in treap).",useCase:["Get sorted elements","Validate BST property","Range queries"],complexity:{time:"O(n)",space:"O(h)"}},preorder:{name:"Preorder Traversal",order:"Root -> Left -> Right",description:"Process root first. Shows the priority-based structure of the treap.",useCase:["Copy tree structure","Serialize treap","Prefix expressions"],complexity:{time:"O(n)",space:"O(h)"}},postorder:{name:"Postorder Traversal",order:"Left -> Right -> Root",description:"Process children before root. Useful for deletion operations.",useCase:["Delete tree safely","Calculate subtree sizes","Postfix expressions"],complexity:{time:"O(n)",space:"O(h)"}},levelorder:{name:"Level Order Traversal",order:"Level by Level (BFS)",description:"Visit nodes level by level. Reveals the heap-ordered priority structure.",useCase:["Level-wise printing","Verify heap property","Serialize for reconstruction"],complexity:{time:"O(n)",space:"O(w)"}}},Cl=(e,t=0)=>e?Math.max(Cl(e.left,t+1),Cl(e.right,t+1)):t-1,qj=(e,t)=>{const r=[];let s=e;for(;s&&(r.push(s.value),s.value!==t);)t<s.value?s=s.left:s=s.right;return r},Uj=e=>{const r=40+e/100*60,s=55-e/100*15;return`hsl(260, ${r}%, ${s}%)`};function Kj({insertValue:e,deleteValue:t,searchValue:r,size:s,height:i,message:a,tree:l,isAnimating:o,visitedNodes:c,searchPath:u,searchResult:d,onInsertValueChange:h,onDeleteValueChange:m,onSearchValueChange:w,onInsert:k,onDelete:N,onSearch:y,onTraversal:f,onClear:g,onResetTraversal:x}){const _=(j,z)=>{const C=j.target.value;(C===""||C==="-"||/^-?\d*\.?\d*$/.test(C))&&z(C)};return n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Treap"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"insertValue",children:"Insert Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"insertValue",value:e,onChange:j=>_(j,h),onKeyDown:j=>j.key==="Enter"&&k(),placeholder:"Enter a number",disabled:o}),n.jsx("button",{onClick:k,className:"btn btn-insert",disabled:o,children:"Insert"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"searchValue",children:"Search Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"searchValue",value:r,onChange:j=>_(j,w),onKeyDown:j=>j.key==="Enter"&&y(),placeholder:"Enter a number",disabled:o}),n.jsxs("button",{onClick:y,className:"btn btn-search",disabled:o||!l,children:[n.jsx(fr,{size:16})," Search"]})]}),u.length>0&&n.jsxs("div",{className:"search-path-display",children:[n.jsx("span",{className:"search-path-label",children:"Path:"}),n.jsx("div",{className:"search-path-nodes",children:u.map((j,z)=>n.jsxs(Pe.Fragment,{children:[n.jsx("span",{className:`search-path-node ${z===u.length-1?d?"found":"not-found":""}`,children:j}),z<u.length-1&&n.jsx(fe,{size:14,className:"search-path-arrow"})]},z))})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"deleteValue",children:"Delete Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"deleteValue",value:t,onChange:j=>_(j,m),onKeyDown:j=>j.key==="Enter"&&N(),placeholder:"Enter a number",disabled:o}),n.jsx("button",{onClick:N,className:"btn btn-delete",disabled:o,children:"Delete"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Traversals"}),n.jsx("div",{className:"btn-group",children:["inorder","preorder","postorder","levelorder"].map(j=>n.jsxs("button",{onClick:()=>f(j),className:`btn btn-traversal ${j==="inorder"?"btn-traversal-primary":""}`,disabled:o||!l,title:j==="inorder"?"Returns sorted order!":"",children:[j==="levelorder"?"Level Order":j.charAt(0).toUpperCase()+j.slice(1),j==="inorder"&&n.jsx("span",{className:"sorted-badge",children:"Sorted!"})]},j))}),c.length>0&&!o&&n.jsx("button",{onClick:x,className:"btn btn-secondary",style:{marginTop:"0.5rem",width:"100%"},children:"Reset Colors"})]}),n.jsxs("div",{className:"traversal-legend",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--default"}),n.jsx("span",{children:"Not visited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--visiting"}),n.jsx("span",{children:"Current"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--visited"}),n.jsx("span",{children:"Visited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--search"}),n.jsx("span",{children:"Search path"})]})]}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Nodes:"}),n.jsx("span",{className:"info-value",children:s})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Height:"}),n.jsx("span",{className:"info-value",children:i})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Max:"}),n.jsx("span",{className:"info-value",children:Gt})]})]}),s>=Gt*.8&&s<Gt&&n.jsxs("div",{className:"warning-box",children:[n.jsx(Sn,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Tree filling up!"})," ",s,"/",Gt," nodes."]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:g,className:"btn btn-clear",disabled:o,children:"Clear Tree"})}),a&&n.jsx("div",{className:`message message-${a.includes("Error")||a.includes("error")||a.includes("not found")||a.includes("already exists")?"error":/success|complete|Inserted|Deleted|cleared|Found/i.test(a)?"success":a.includes("full")?"warning":"info"}`,children:a})]})}function Wj({tree:e,currentNode:t,visitedNodes:r,searchPath:s,searchResult:i}){const a=d=>{const h=t===d,m=r.includes(d),w=s.includes(d),k=s.length>0&&s[s.length-1]===d;let N="#6366f1",y="none";return h?(N="#f59e0b",y="drop-shadow(0 0 12px #f59e0b) drop-shadow(0 0 20px #f59e0b)"):k?(N=i?"#10b981":"#ef4444",y=i?"drop-shadow(0 0 12px #10b981)":"drop-shadow(0 0 12px #ef4444)"):w?(N="#3b82f6",y="drop-shadow(0 0 8px #3b82f6)"):m&&(N="#10b981",y="drop-shadow(0 0 6px #10b981)"),{color:N,glow:y,radius:h||k?30:25,stroke:h||k?3:2,fontSize:h||k?15:13,fontWeight:h||k?"bold":"normal"}},l=(d,h,m,w,k)=>{if(!d)return[];const N=Math.pow(2,k-w)*50,y=a(d.value),f=[],x=y.color==="#6366f1"?Uj(d.priority):y.color;if(d.left){const _=s.includes(d.value)&&s.includes(d.left.value);f.push(n.jsx("line",{x1:h,y1:m,x2:h-N,y2:m+100,stroke:_?"#3b82f6":"rgba(255,255,255,0.3)",strokeWidth:_?3:2},`l-${d.value}-l`)),f.push(...l(d.left,h-N,m+100,w+1,k))}if(d.right){const _=s.includes(d.value)&&s.includes(d.right.value);f.push(n.jsx("line",{x1:h,y1:m,x2:h+N,y2:m+100,stroke:_?"#3b82f6":"rgba(255,255,255,0.3)",strokeWidth:_?3:2},`l-${d.value}-r`)),f.push(...l(d.right,h+N,m+100,w+1,k))}return f.push(n.jsxs("g",{style:{filter:y.glow,transition:"all 0.3s ease"},children:[n.jsx("circle",{cx:h,cy:m,r:y.radius,fill:x,stroke:"white",strokeWidth:y.stroke,style:{transition:"all 0.3s ease"}}),n.jsx("text",{x:h,y:m-5,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:y.fontSize,fontWeight:y.fontWeight,children:d.value}),n.jsxs("text",{x:h,y:m+11,textAnchor:"middle",dominantBaseline:"middle",fill:"rgba(255,255,255,0.7)",fontSize:9,fontWeight:"normal",children:["p:",d.priority]})]},`n-${d.value}-${h}`)),f};if(!e)return n.jsxs("div",{className:"tree-empty",children:[n.jsx("p",{children:"Treap is empty. Insert some values!"}),n.jsx("p",{className:"tree-empty-hint",children:"Try: 50, 30, 70, 20, 40, 60, 80"})]});const o=Cl(e),c=(o+1)*100+50,u=Math.max(800,Math.pow(2,Math.max(o,1))*80);return n.jsx("svg",{width:u,height:c,className:"tree-svg",children:l(e,u/2,50,0,o)})}function Gj({traversalType:e,traversalResult:t,isAnimating:r,traversalComplete:s}){if(!e||t.length===0&&!r)return null;const i=Hj[e];return n.jsxs("div",{className:"traversal-output-panel",children:[n.jsxs("div",{style:{marginBottom:"1rem"},children:[n.jsxs("h3",{className:"traversal-title",children:[i==null?void 0:i.name,e==="inorder"&&n.jsx("span",{className:"sorted-indicator",children:"Returns Sorted Order!"}),r&&n.jsx("span",{className:"traversal-badge traversal-badge--running",children:"Running..."}),s&&n.jsx("span",{className:"traversal-badge traversal-badge--complete",children:"Complete"})]}),n.jsxs("p",{className:"traversal-order",children:[n.jsx("strong",{children:"Order:"})," ",i==null?void 0:i.order]}),n.jsx("p",{className:"traversal-description",children:i==null?void 0:i.description})]}),n.jsxs("div",{className:"traversal-output-box",children:[n.jsx("div",{className:"traversal-output-label",children:"Output Sequence:"}),n.jsx("div",{className:"traversal-sequence-container",children:t.length===0&&r?n.jsx("span",{style:{color:"var(--text-muted)",fontStyle:"italic"},children:"Traversing..."}):t.map((a,l)=>n.jsx("span",{className:`traversal-node ${l===t.length-1&&!s?"traversal-node--current":"traversal-node--complete"}`,children:a},l))})]}),s&&t.length>0&&n.jsxs("div",{className:"traversal-array-section",children:[n.jsx("div",{className:"traversal-array-label",children:"Array Output:"}),n.jsxs("code",{className:"traversal-array-output",children:["[",t.join(", "),"]"]}),e==="inorder"&&n.jsx("p",{className:"traversal-sorted-note",children:"Notice: The output is sorted! BST property is maintained in the treap."}),n.jsxs("p",{className:"traversal-use-case",children:["Use case: ",i==null?void 0:i.useCase.join(" | ")]}),n.jsxs("div",{className:"traversal-complexity",children:[n.jsx("strong",{children:"Time:"})," ",n.jsx("code",{className:"complexity-value",children:i==null?void 0:i.complexity.time}),n.jsx("br",{}),n.jsx("strong",{children:"Space:"})," ",n.jsx("code",{className:"complexity-value",children:i==null?void 0:i.complexity.space})]})]})]})}function Qj(){const[e,t]=p.useState(null),[r,s]=p.useState(0),[i,a]=p.useState(-1),[l,o]=p.useState(""),[c,u]=p.useState(""),[d,h]=p.useState(""),[m,w]=p.useState(""),[k,N]=p.useState([]),[y,f]=p.useState(null),[g,x]=p.useState([]),[_,j]=p.useState(!1),[z,C]=p.useState(null),[D,$]=p.useState([]),[R,H]=p.useState(null),[W,E]=p.useState(!1);p.useEffect(()=>{I()},[]);const I=async()=>{try{const M=await(await fetch("/api/treap")).json();t(M.tree),s(M.size||0),a(M.height!==void 0?M.height:-1)}catch(O){console.error("Error loading Treap:",O)}},v=O=>{w(O),setTimeout(()=>w(""),3e3)},T=()=>{N([]),f(null)},A=async()=>{if(!l.trim()){v("Please enter a number!");return}const O=Number(l);if(isNaN(O)){v("Please enter a valid number!");return}if(r>=Gt){v(`Tree is full! Maximum size is ${Gt} nodes.`);return}T(),B();try{const P=await(await fetch("/api/treap/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:O})})).json();if(P.error){v(P.error);return}t(P.tree),s(P.size||0),a(P.height!==void 0?P.height:-1),v(`Inserted ${O}`),o("")}catch{v("Error inserting node")}},S=async()=>{if(!c.trim()){v("Please enter a number!");return}const O=Number(c);if(isNaN(O)){v("Please enter a valid number!");return}T(),B();try{const P=await(await fetch("/api/treap/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:O})})).json();if(P.error){v(P.error);return}t(P.tree),s(P.size||0),a(P.height!==void 0?P.height:-1),v(`Deleted ${O}`),u("")}catch{v("Error deleting node")}},L=async()=>{if(!d.trim()){v("Please enter a number!");return}const O=Number(d);if(isNaN(O)){v("Please enter a valid number!");return}if(!e){v("Tree is empty!");return}B(),j(!0);const M=qj(e,O);for(let P=0;P<M.length;P++)N(M.slice(0,P+1)),await new Promise(b=>setTimeout(b,500));try{const b=await(await fetch(`/api/treap/search?value=${O}`)).json();f(b.found),b.found?v(`Found ${O}!`):v(`${O} not found in treap`)}catch{v("Error searching")}j(!1),h("")},F=async()=>{try{await fetch("/api/treap/clear",{method:"POST"}),t(null),s(0),a(-1),B(),T(),v("Treap cleared!")}catch{v("Error clearing tree")}},V=async O=>{if(!e){v("Tree is empty! Insert some nodes first.");return}T(),j(!0),x([]),C(null),$([]),H(O),E(!1);try{const b=(await(await fetch(`/api/treap/${O}`)).json()).traversal||[];if(b.length===0){v("Tree is empty!"),j(!1);return}for(let G=0;G<b.length;G++)C(b[G]),await new Promise(Y=>setTimeout(Y,600)),$(Y=>[...Y,b[G]]),x(Y=>[...Y,b[G]]),await new Promise(Y=>setTimeout(Y,200));C(null),E(!0),j(!1);const q=O.charAt(0).toUpperCase()+O.slice(1);v(`${q} traversal complete!${O==="inorder"?" (Sorted!)":""}`)}catch(M){console.error("Traversal error:",M),v("Error performing traversal"),j(!1)}},B=()=>{x([]),C(null),$([]),H(null),E(!1)};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsx("div",{className:"intro-left",children:n.jsx(gr,{dataStructure:"treap"})}),n.jsx(me,{context:"Treap data structure, combining BST and heap properties, random priorities, rotations, insert, delete, search operations"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsx(Kj,{insertValue:l,deleteValue:c,searchValue:d,size:r,height:i,message:m,tree:e,isAnimating:_,visitedNodes:D,searchPath:k,searchResult:y,onInsertValueChange:o,onDeleteValueChange:u,onSearchValueChange:h,onInsert:A,onDelete:S,onSearch:L,onTraversal:V,onClear:F,onResetTraversal:()=>{B(),T()}}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Treap Visualization"}),n.jsxs("p",{className:"treap-property-reminder",children:[n.jsx("code",{children:"BST"})," on keys | ",n.jsx("code",{children:"Max-Heap"})," on priorities (p:)"]}),n.jsx("div",{className:"tree-container",children:n.jsx(Wj,{tree:e,currentNode:z,visitedNodes:D,searchPath:k,searchResult:y})}),n.jsx(Gj,{traversalType:R,traversalResult:g,isAnimating:_,traversalComplete:W})]})]}),n.jsx(ye,{dataStructure:"treap"})]})}const vt=7;function Xj({insertValue:e,buildArray:t,size:r,height:s,min:i,message:a,heap:l,isAnimating:o,onInsertValueChange:c,onBuildArrayChange:u,onInsert:d,onExtract:h,onPeek:m,onBuild:w,onClear:k}){const N=(y,f)=>{const g=y.target.value;(g===""||g==="-"||/^-?\d*\.?\d*$/.test(g))&&f(g)};return n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Min Heap"}),n.jsxs("div",{className:"heap-info-box",children:[n.jsx("strong",{children:"Priority Queue:"})," Minimum always at root!"]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"insertValue",children:"Insert Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"insertValue",value:e,onChange:y=>N(y,c),onKeyDown:y=>y.key==="Enter"&&d(),placeholder:"Enter a number",disabled:o}),n.jsx("button",{onClick:d,className:"btn btn-insert",disabled:o,children:"Insert"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Heap Operations"}),n.jsxs("div",{className:"btn-group-vertical",children:[n.jsxs("button",{onClick:h,className:"btn btn-extract",disabled:o||l.length===0,children:[n.jsx(Ig,{size:16})," Extract Min"]}),n.jsx("button",{onClick:m,className:"btn btn-peek",disabled:o||l.length===0,children:"Peek Min"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"buildArray",children:"Build from Array"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",id:"buildArray",value:t,onChange:y=>u(y.target.value),onKeyDown:y=>y.key==="Enter"&&w(),placeholder:"e.g., 5, 3, 8, 1, 2",disabled:o}),n.jsx("button",{onClick:w,className:"btn btn-build",disabled:o,children:"Build"})]})]}),n.jsxs("div",{className:"traversal-legend",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot",style:{background:"#10b981"}}),n.jsx("span",{children:"Root (Min)"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot",style:{background:"#6366f1"}}),n.jsx("span",{children:"Internal"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot",style:{background:"#8b5cf6"}}),n.jsx("span",{children:"Leaf"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot",style:{background:"#f59e0b"}}),n.jsx("span",{children:"Highlighted"})]})]}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Size:"}),n.jsx("span",{className:"info-value",children:r})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Height:"}),n.jsx("span",{className:"info-value",children:s})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Min:"}),n.jsx("span",{className:"info-value",children:i??"-"})]})]}),r>=vt*.8&&r<vt&&n.jsxs("div",{className:"warning-box",children:[n.jsx(Sn,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Heap filling up!"})," ",r,"/",vt," elements."]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:k,className:"btn btn-clear",disabled:o,children:"Clear Heap"})}),a&&n.jsx("div",{className:`message message-${a.includes("Error")||a.includes("error")?"error":/success|complete|Inserted|Extracted|cleared|Built/i.test(a)?"success":a.includes("full")||a.includes("empty")?"warning":"info"}`,children:a})]})}function Yj({tree:e,heap:t,highlightedIndex:r,swappingIndices:s}){const i=d=>{const h=r===d,m=s.includes(d),w=d===0;let k="#6366f1",N="none";return h||m?(k="#f59e0b",N="drop-shadow(0 0 12px #f59e0b)"):w&&(k="#10b981",N="drop-shadow(0 0 8px #10b981)"),{color:k,glow:N,radius:h||w?28:25}},a=(d,h=0)=>d?Math.max(a(d.left,h+1),a(d.right,h+1)):h-1,l=(d,h,m,w,k)=>{if(!d)return[];const N=Math.pow(2,k-w)*50,y=i(d.index),f=[];return d.left&&(f.push(n.jsx("line",{x1:h,y1:m,x2:h-N,y2:m+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:2},`l-${d.index}-l`)),f.push(...l(d.left,h-N,m+100,w+1,k))),d.right&&(f.push(n.jsx("line",{x1:h,y1:m,x2:h+N,y2:m+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:2},`l-${d.index}-r`)),f.push(...l(d.right,h+N,m+100,w+1,k))),f.push(n.jsxs("g",{style:{filter:y.glow,transition:"all 0.3s ease"},children:[n.jsx("circle",{cx:h,cy:m,r:y.radius,fill:y.color,stroke:"white",strokeWidth:2}),n.jsx("text",{x:h,y:m,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:14,fontWeight:"bold",children:d.value}),n.jsxs("text",{x:h,y:m+y.radius+12,textAnchor:"middle",fill:"rgba(255,255,255,0.6)",fontSize:10,children:["[",d.index,"]"]})]},`n-${d.index}`)),f};if(!e||t.length===0)return n.jsxs("div",{className:"tree-empty",children:[n.jsx("p",{children:"Min Heap is empty. Insert some values!"}),n.jsx("p",{className:"tree-empty-hint",children:"Try: 5, 3, 8, 1, 2 or build from array"})]});const o=a(e),c=(o+1)*100+80,u=Math.max(600,Math.pow(2,Math.max(o,1))*70);return n.jsx("svg",{width:u,height:c,className:"tree-svg",children:l(e,u/2,50,0,o)})}function Jj({heap:e,highlightedIndex:t,swappingIndices:r}){return e.length===0?n.jsx("div",{className:"heap-array-empty",children:n.jsx("code",{children:"[ ]"})}):n.jsxs("div",{className:"heap-array-container",children:[n.jsx("div",{className:"heap-array",children:e.map((s,i)=>{const a=t===i,l=r.includes(i),o=i===0;return n.jsxs("div",{className:`heap-array-cell ${a||l?"highlighted":""} ${o?"root":""}`,children:[n.jsx("span",{className:"heap-array-index",children:i}),n.jsx("span",{className:"heap-array-value",children:s})]},i)})}),n.jsxs("div",{className:"heap-array-formulas",children:[n.jsxs("div",{className:"formula-item",children:[n.jsx("strong",{children:"Parent(i):"})," ",n.jsx("code",{children:"(i - 1) / 2"})]}),n.jsxs("div",{className:"formula-item",children:[n.jsx("strong",{children:"Left(i):"})," ",n.jsx("code",{children:"2*i + 1"})]}),n.jsxs("div",{className:"formula-item",children:[n.jsx("strong",{children:"Right(i):"})," ",n.jsx("code",{children:"2*i + 2"})]})]})]})}function Zj(){const[e,t]=p.useState([]),[r,s]=p.useState(null),[i,a]=p.useState(0),[l,o]=p.useState(-1),[c,u]=p.useState(null),[d,h]=p.useState(""),[m,w]=p.useState(""),[k,N]=p.useState(""),[y,f]=p.useState(!1),[g,x]=p.useState(null),[_,j]=p.useState([]);p.useEffect(()=>{z()},[]);const z=async()=>{try{const I=await(await fetch("/api/minheap")).json();t(I.heap||[]),s(I.tree),a(I.size||0),o(I.height!==void 0?I.height:-1),u(I.min)}catch(E){console.error("Error loading Min Heap:",E)}},C=E=>{N(E),setTimeout(()=>N(""),3e3)},D=async()=>{if(!d.trim()){C("Please enter a number!");return}const E=Number(d);if(isNaN(E)){C("Please enter a valid number!");return}if(i>=vt){C(`Heap is full! Maximum size is ${vt}.`);return}f(!0);try{const v=await(await fetch("/api/minheap/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:E})})).json();if(v.error){C(v.error),f(!1);return}t(v.heap||[]),s(v.tree),a(v.size||0),o(v.height!==void 0?v.height:-1),u(v.min),C(`Inserted ${E}`),h("")}catch{C("Error inserting element")}f(!1)},$=async()=>{if(i===0){C("Heap is empty!");return}f(!0),x(0),await new Promise(E=>setTimeout(E,500));try{const I=await(await fetch("/api/minheap/extract",{method:"POST"})).json();if(I.error){C(I.error),f(!1),x(null);return}t(I.heap||[]),s(I.tree),a(I.size||0),o(I.height!==void 0?I.height:-1),u(I.min),C(`Extracted minimum: ${I.extracted}`)}catch{C("Error extracting minimum")}x(null),f(!1)},R=async()=>{if(i===0){C("Heap is empty!");return}x(0),C(`Minimum element is ${c}`),await new Promise(E=>setTimeout(E,1500)),x(null)},H=async()=>{if(!m.trim()){C("Please enter an array of numbers!");return}const E=m.split(",").map(I=>{const v=Number(I.trim());return isNaN(v)?null:v}).filter(I=>I!==null);if(E.length===0){C("Please enter valid numbers separated by commas!");return}if(E.length>vt){C(`Array too large! Maximum size is ${vt}.`);return}f(!0);try{const v=await(await fetch("/api/minheap/build",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({array:E})})).json();if(v.error){C(v.error),f(!1);return}t(v.heap||[]),s(v.tree),a(v.size||0),o(v.height!==void 0?v.height:-1),u(v.min),C("Built heap from array!"),w("")}catch{C("Error building heap")}f(!1)},W=async()=>{try{await fetch("/api/minheap/clear",{method:"POST"}),t([]),s(null),a(0),o(-1),u(null),x(null),j([]),C("Heap cleared!")}catch{C("Error clearing heap")}};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsx("div",{className:"intro-left",children:n.jsx(gr,{dataStructure:"minheap"})}),n.jsx(me,{context:"Min Heap data structure, priority queue, heapify operations, O(log n) insert and extract, O(1) peek minimum"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsx(Xj,{insertValue:d,buildArray:m,size:i,height:l,min:c,message:k,heap:e,isAnimating:y,onInsertValueChange:h,onBuildArrayChange:w,onInsert:D,onExtract:$,onPeek:R,onBuild:H,onClear:W}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Min Heap Visualization"}),n.jsxs("p",{className:"bst-property-reminder",children:["Heap Property: ",n.jsx("code",{children:"Parent <= Children"})," (Min at root)"]}),n.jsxs("div",{className:"heap-tree-section",children:[n.jsx("h3",{children:"Tree View"}),n.jsx("div",{className:"tree-container",children:n.jsx(Yj,{tree:r,heap:e,highlightedIndex:g,swappingIndices:_})})]}),n.jsxs("div",{className:"heap-array-section",children:[n.jsx("h3",{children:"Array Representation"}),n.jsx(Jj,{heap:e,highlightedIndex:g,swappingIndices:_})]})]})]}),n.jsx(ye,{dataStructure:"minheap"})]})}const yt=7;function e0({insertValue:e,buildArray:t,size:r,height:s,max:i,message:a,heap:l,isAnimating:o,onInsertValueChange:c,onBuildArrayChange:u,onInsert:d,onExtract:h,onPeek:m,onBuild:w,onClear:k}){const N=(y,f)=>{const g=y.target.value;(g===""||g==="-"||/^-?\d*\.?\d*$/.test(g))&&f(g)};return n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Max Heap"}),n.jsxs("div",{className:"heap-info-box max-heap",children:[n.jsx("strong",{children:"Priority Queue:"})," Maximum always at root!"]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"insertValue",children:"Insert Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"insertValue",value:e,onChange:y=>N(y,c),onKeyDown:y=>y.key==="Enter"&&d(),placeholder:"Enter a number",disabled:o}),n.jsx("button",{onClick:d,className:"btn btn-insert",disabled:o,children:"Insert"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Heap Operations"}),n.jsxs("div",{className:"btn-group-vertical",children:[n.jsxs("button",{onClick:h,className:"btn btn-extract-max",disabled:o||l.length===0,children:[n.jsx(zg,{size:16})," Extract Max"]}),n.jsx("button",{onClick:m,className:"btn btn-peek",disabled:o||l.length===0,children:"Peek Max"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"buildArray",children:"Build from Array"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",id:"buildArray",value:t,onChange:y=>u(y.target.value),onKeyDown:y=>y.key==="Enter"&&w(),placeholder:"e.g., 5, 3, 8, 1, 2",disabled:o}),n.jsx("button",{onClick:w,className:"btn btn-build",disabled:o,children:"Build"})]})]}),n.jsxs("div",{className:"traversal-legend",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot",style:{background:"#ef4444"}}),n.jsx("span",{children:"Root (Max)"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot",style:{background:"#6366f1"}}),n.jsx("span",{children:"Internal"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot",style:{background:"#8b5cf6"}}),n.jsx("span",{children:"Leaf"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot",style:{background:"#f59e0b"}}),n.jsx("span",{children:"Highlighted"})]})]}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Size:"}),n.jsx("span",{className:"info-value",children:r})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Height:"}),n.jsx("span",{className:"info-value",children:s})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Max:"}),n.jsx("span",{className:"info-value",children:i??"-"})]})]}),r>=yt*.8&&r<yt&&n.jsxs("div",{className:"warning-box",children:[n.jsx(Sn,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Heap filling up!"})," ",r,"/",yt," elements."]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:k,className:"btn btn-clear",disabled:o,children:"Clear Heap"})}),a&&n.jsx("div",{className:`message message-${a.includes("Error")||a.includes("error")?"error":/success|complete|Inserted|Extracted|cleared|Built/i.test(a)?"success":a.includes("full")||a.includes("empty")?"warning":"info"}`,children:a})]})}function n0({tree:e,heap:t,highlightedIndex:r,swappingIndices:s}){const i=d=>{const h=r===d,m=s.includes(d),w=d===0;let k="#6366f1",N="none";return h||m?(k="#f59e0b",N="drop-shadow(0 0 12px #f59e0b)"):w&&(k="#ef4444",N="drop-shadow(0 0 8px #ef4444)"),{color:k,glow:N,radius:h||w?28:25}},a=(d,h=0)=>d?Math.max(a(d.left,h+1),a(d.right,h+1)):h-1,l=(d,h,m,w,k)=>{if(!d)return[];const N=Math.pow(2,k-w)*50,y=i(d.index),f=[];return d.left&&(f.push(n.jsx("line",{x1:h,y1:m,x2:h-N,y2:m+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:2},`l-${d.index}-l`)),f.push(...l(d.left,h-N,m+100,w+1,k))),d.right&&(f.push(n.jsx("line",{x1:h,y1:m,x2:h+N,y2:m+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:2},`l-${d.index}-r`)),f.push(...l(d.right,h+N,m+100,w+1,k))),f.push(n.jsxs("g",{style:{filter:y.glow,transition:"all 0.3s ease"},children:[n.jsx("circle",{cx:h,cy:m,r:y.radius,fill:y.color,stroke:"white",strokeWidth:2}),n.jsx("text",{x:h,y:m,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:14,fontWeight:"bold",children:d.value}),n.jsxs("text",{x:h,y:m+y.radius+12,textAnchor:"middle",fill:"rgba(255,255,255,0.6)",fontSize:10,children:["[",d.index,"]"]})]},`n-${d.index}`)),f};if(!e||t.length===0)return n.jsxs("div",{className:"tree-empty",children:[n.jsx("p",{children:"Max Heap is empty. Insert some values!"}),n.jsx("p",{className:"tree-empty-hint",children:"Try: 5, 3, 8, 1, 9 or build from array"})]});const o=a(e),c=(o+1)*100+80,u=Math.max(600,Math.pow(2,Math.max(o,1))*70);return n.jsx("svg",{width:u,height:c,className:"tree-svg",children:l(e,u/2,50,0,o)})}function t0({heap:e,highlightedIndex:t,swappingIndices:r}){return e.length===0?n.jsx("div",{className:"heap-array-empty",children:n.jsx("code",{children:"[ ]"})}):n.jsxs("div",{className:"heap-array-container",children:[n.jsx("div",{className:"heap-array",children:e.map((s,i)=>{const a=t===i,l=r.includes(i),o=i===0;return n.jsxs("div",{className:`heap-array-cell ${a||l?"highlighted":""} ${o?"root-max":""}`,children:[n.jsx("span",{className:"heap-array-index",children:i}),n.jsx("span",{className:"heap-array-value",children:s})]},i)})}),n.jsxs("div",{className:"heap-array-formulas",children:[n.jsxs("div",{className:"formula-item",children:[n.jsx("strong",{children:"Parent(i):"})," ",n.jsx("code",{children:"(i - 1) / 2"})]}),n.jsxs("div",{className:"formula-item",children:[n.jsx("strong",{children:"Left(i):"})," ",n.jsx("code",{children:"2*i + 1"})]}),n.jsxs("div",{className:"formula-item",children:[n.jsx("strong",{children:"Right(i):"})," ",n.jsx("code",{children:"2*i + 2"})]})]})]})}function r0(){const[e,t]=p.useState([]),[r,s]=p.useState(null),[i,a]=p.useState(0),[l,o]=p.useState(-1),[c,u]=p.useState(null),[d,h]=p.useState(""),[m,w]=p.useState(""),[k,N]=p.useState(""),[y,f]=p.useState(!1),[g,x]=p.useState(null),[_,j]=p.useState([]);p.useEffect(()=>{z()},[]);const z=async()=>{try{const I=await(await fetch("/api/maxheap")).json();t(I.heap||[]),s(I.tree),a(I.size||0),o(I.height!==void 0?I.height:-1),u(I.max)}catch(E){console.error("Error loading Max Heap:",E)}},C=E=>{N(E),setTimeout(()=>N(""),3e3)},D=async()=>{if(!d.trim()){C("Please enter a number!");return}const E=Number(d);if(isNaN(E)){C("Please enter a valid number!");return}if(i>=yt){C(`Heap is full! Maximum size is ${yt}.`);return}f(!0);try{const v=await(await fetch("/api/maxheap/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:E})})).json();if(v.error){C(v.error),f(!1);return}t(v.heap||[]),s(v.tree),a(v.size||0),o(v.height!==void 0?v.height:-1),u(v.max),C(`Inserted ${E}`),h("")}catch{C("Error inserting element")}f(!1)},$=async()=>{if(i===0){C("Heap is empty!");return}f(!0),x(0),await new Promise(E=>setTimeout(E,500));try{const I=await(await fetch("/api/maxheap/extract",{method:"POST"})).json();if(I.error){C(I.error),f(!1),x(null);return}t(I.heap||[]),s(I.tree),a(I.size||0),o(I.height!==void 0?I.height:-1),u(I.max),C(`Extracted maximum: ${I.extracted}`)}catch{C("Error extracting maximum")}x(null),f(!1)},R=async()=>{if(i===0){C("Heap is empty!");return}x(0),C(`Maximum element is ${c}`),await new Promise(E=>setTimeout(E,1500)),x(null)},H=async()=>{if(!m.trim()){C("Please enter an array of numbers!");return}const E=m.split(",").map(I=>{const v=Number(I.trim());return isNaN(v)?null:v}).filter(I=>I!==null);if(E.length===0){C("Please enter valid numbers separated by commas!");return}if(E.length>yt){C(`Array too large! Maximum size is ${yt}.`);return}f(!0);try{const v=await(await fetch("/api/maxheap/build",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({array:E})})).json();if(v.error){C(v.error),f(!1);return}t(v.heap||[]),s(v.tree),a(v.size||0),o(v.height!==void 0?v.height:-1),u(v.max),C("Built heap from array!"),w("")}catch{C("Error building heap")}f(!1)},W=async()=>{try{await fetch("/api/maxheap/clear",{method:"POST"}),t([]),s(null),a(0),o(-1),u(null),x(null),j([]),C("Heap cleared!")}catch{C("Error clearing heap")}};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsx("div",{className:"intro-left",children:n.jsx(gr,{dataStructure:"maxheap"})}),n.jsx(me,{context:"Max Heap data structure, priority queue, heapify operations, O(log n) insert and extract, O(1) peek maximum, heap sort"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsx(e0,{insertValue:d,buildArray:m,size:i,height:l,max:c,message:k,heap:e,isAnimating:y,onInsertValueChange:h,onBuildArrayChange:w,onInsert:D,onExtract:$,onPeek:R,onBuild:H,onClear:W}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Max Heap Visualization"}),n.jsxs("p",{className:"bst-property-reminder",children:["Heap Property: ",n.jsx("code",{children:"Parent >= Children"})," (Max at root)"]}),n.jsxs("div",{className:"heap-tree-section",children:[n.jsx("h3",{children:"Tree View"}),n.jsx("div",{className:"tree-container",children:n.jsx(n0,{tree:r,heap:e,highlightedIndex:g,swappingIndices:_})})]}),n.jsxs("div",{className:"heap-array-section",children:[n.jsx("h3",{children:"Array Representation"}),n.jsx(t0,{heap:e,highlightedIndex:g,swappingIndices:_})]})]})]}),n.jsx(ye,{dataStructure:"maxheap"})]})}function s0(){const[e,t]=p.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=p.useState(""),[i,a]=p.useState(""),[l,o]=p.useState(""),[c,u]=p.useState("1"),[d,h]=p.useState(null),[m,w]=p.useState(null),[k,N]=p.useState(null),[y,f]=p.useState({}),{message:g,showMessage:x}=Be(3e3);p.useEffect(()=>{j()},[]),p.useEffect(()=>{e.vertices.length>0&&_()},[e.vertices]),p.useEffect(()=>{if(d||m){const v=setTimeout(()=>{h(null),w(null),N(null)},2e3);return()=>clearTimeout(v)}},[d,m]);const _=p.useCallback(()=>{const L=Math.min(450,300)*.38,F={},V=e.vertices.length;e.vertices.forEach((B,O)=>{const M=2*Math.PI*O/V-Math.PI/2;F[B]={x:225+L*Math.cos(M),y:150+L*Math.sin(M)}}),f(F)},[e.vertices]),j=async()=>{try{const v=await le("/api/graph");t(v)}catch(v){console.error("Error loading graph:",v)}},z=async()=>{if(!r.trim()){x("Please enter a vertex name!","error");return}try{const v=await ne("/api/graph/vertex",{vertex:r.trim()});if(v.error){x(v.error,"error");return}t(v),h(r.trim().toUpperCase()),N("add-vertex"),x(`Added vertex '${r}' - Created new entry in adjacency list`,"success"),s("")}catch{x("Error adding vertex","error")}},C=async v=>{try{const T=await yi(`/api/graph/vertex/${v}`);if(T.error){x(T.error,"error");return}t(T),x(`Removed vertex '${v}' - Deleted from list and all references`,"success")}catch{x("Error removing vertex","error")}},D=async()=>{if(!i.trim()||!l.trim()){x("Please select both vertices!","error");return}const v=parseInt(c)||1;try{const T=await ne("/api/graph/edge",{from:i.trim(),to:l.trim(),weight:v});if(T.error){x(T.error,"error");return}t(T),w({from:i,to:l}),N("add-edge"),x(`Added edge ${i}→${l} (weight: ${v}) - Appended to ${i}'s neighbor list`,"success"),a(""),o(""),u("1")}catch{x("Error adding edge","error")}},$=async()=>{if(!i.trim()||!l.trim()){x("Please select both vertices!","error");return}try{const v=await yi("/api/graph/edge",{from:i.trim(),to:l.trim()});if(v.error){x(v.error,"error");return}t(v),x(`Removed edge ${i}→${l} - Removed from neighbor lists`,"success"),a(""),o("")}catch{x("Error removing edge","error")}},R=async v=>{try{const T=await ne(`/api/graph/preset/${v}`,{});if(T.error){x(T.error,"error");return}t(T),x(`Loaded '${v}' graph preset`,"success")}catch{x("Error loading preset","error")}},H=async()=>{try{const v=await ne("/api/graph/clear",{});t(v),x("Graph cleared","success")}catch{x("Error clearing graph","error")}},W=(v,T)=>{v.key==="Enter"&&T()},E=v=>d===v&&k==="add-vertex"?"graph-node highlighted-new":m&&(m.from===v||m.to===v)?"graph-node highlighted-edge":"graph-node",I=(v,T)=>m&&(m.from===v&&m.to===T||m.from===T&&m.to===v)?"graph-edge highlighted":"graph-edge";return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Oe,{className:"icon-sm"}),n.jsx("span",{children:"What is an Adjacency List?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:["An ",n.jsx("strong",{children:"Adjacency List"})," represents a graph using a collection of lists. Each vertex stores a list of its neighboring vertices."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(Ne,{}),n.jsx("span",{children:"Like a contact list - each person has their own list of friends they're connected to!"})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Add Vertex"}),n.jsx("span",{className:"op-desc",children:"Create new list"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Add Edge"}),n.jsx("span",{className:"op-desc",children:"Append to list"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Remove Edge"}),n.jsx("span",{className:"op-desc",children:"Search & delete"}),n.jsx("span",{className:"op-complexity",children:"O(E)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Find Neighbors"}),n.jsx("span",{className:"op-desc",children:"Return list"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]})]}),n.jsxs("div",{className:"concept-uses",children:[n.jsx("strong",{children:"Why Adjacency List?"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Space efficient for sparse graphs: O(V + E)"}),n.jsx("li",{children:"Fast iteration over neighbors"}),n.jsx("li",{children:"Easy to add vertices and edges"}),n.jsx("li",{children:"Supports weighted edges naturally"})]})]})]})]}),n.jsx(me,{context:"Adjacency List graph representation, graph data structure"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Operations"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Load Preset"}),n.jsxs("div",{className:"btn-group preset-group",children:[n.jsx("button",{onClick:()=>R("simple"),className:"btn btn-preset",children:"Simple"}),n.jsx("button",{onClick:()=>R("tree"),className:"btn btn-preset",children:"Tree"}),n.jsx("button",{onClick:()=>R("cyclic"),className:"btn btn-preset",children:"Cyclic"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsxs("label",{htmlFor:"vertexInput",children:[n.jsx(vi,{size:14})," Add Vertex"]}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",id:"vertexInput",value:r,onChange:v=>s(v.target.value.toUpperCase()),onKeyPress:v=>W(v,z),placeholder:"Name (e.g., A)",maxLength:3}),n.jsx("button",{onClick:z,className:"btn btn-add",children:"Add"})]}),n.jsx("span",{className:"operation-hint",children:"Creates a new empty list entry"})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Add/Remove Edge (with Weight)"}),n.jsxs("div",{className:"edge-inputs",children:[n.jsxs("select",{value:i,onChange:v=>a(v.target.value),className:"vertex-select",children:[n.jsx("option",{value:"",children:"From"}),e.vertices.map(v=>n.jsx("option",{value:v,children:v},v))]}),n.jsx("span",{className:"edge-arrow",children:"→"}),n.jsxs("select",{value:l,onChange:v=>o(v.target.value),className:"vertex-select",children:[n.jsx("option",{value:"",children:"To"}),e.vertices.map(v=>n.jsx("option",{value:v,children:v},v))]})]}),n.jsxs("div",{className:"weight-input",children:[n.jsx("label",{htmlFor:"weightInput",children:"Weight:"}),n.jsx("input",{type:"number",id:"weightInput",value:c,onChange:v=>u(v.target.value),min:"1",max:"99",className:"weight-field"})]}),n.jsxs("div",{className:"btn-group",children:[n.jsxs("button",{onClick:D,className:"btn btn-add",children:[n.jsx(vi,{size:14})," Add Edge"]}),n.jsxs("button",{onClick:$,className:"btn btn-remove",children:[n.jsx(vl,{size:14})," Remove"]})]}),n.jsx("span",{className:"operation-hint",children:"Appends neighbor to the vertex's list"})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:H,className:"btn btn-clear full-width",children:"Clear Graph"})}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Vertices (V):"}),n.jsx("span",{className:"info-value",children:e.vertex_count||0})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Edges (E):"}),n.jsx("span",{className:"info-value",children:e.edge_count||0})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Space:"}),n.jsx("span",{className:"info-value",children:"O(V + E)"})]})]}),n.jsx($e,{message:g})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Graph View"}),n.jsx("div",{className:"graph-container",children:e.vertices.length===0?n.jsx("div",{className:"graph-empty",children:"Graph is empty. Add vertices or load a preset!"}):n.jsxs("svg",{className:"graph-svg",viewBox:"0 0 450 300",children:[e.edges.map(([v,T,A],S)=>{const L=y[v],F=y[T];if(!L||!F)return null;const V=(L.x+F.x)/2,B=(L.y+F.y)/2;return n.jsxs("g",{children:[n.jsx("line",{x1:L.x,y1:L.y,x2:F.x,y2:F.y,className:I(v,T)}),n.jsx("circle",{cx:V,cy:B,r:12,className:"weight-bg"}),n.jsx("text",{x:V,y:B,className:"weight-label",dominantBaseline:"central",textAnchor:"middle",children:A})]},`edge-${S}`)}),e.vertices.map(v=>{const T=y[v];return T?n.jsxs("g",{className:E(v),children:[n.jsx("circle",{cx:T.x,cy:T.y,r:22,className:"node-circle"}),n.jsx("text",{x:T.x,y:T.y,className:"node-label",dominantBaseline:"central",textAnchor:"middle",children:v})]},v):null})]})}),n.jsxs("div",{className:"adjacency-list-section",children:[n.jsx("h3",{children:"Behind the Scenes: Adjacency List Structure"}),n.jsx("p",{className:"adj-explanation",children:"Each vertex has its own linked list of neighbors. When you add an edge A→B, we append B to A's list (and A to B's list for undirected graphs)."}),n.jsx("div",{className:"adj-list-visual",children:e.vertices.length===0?n.jsx("div",{className:"adj-empty",children:"No vertices in graph"}):e.vertices.map(v=>{const T=e.adjacency_list[v]||[],A=d===v||m&&(m.from===v||m.to===v);return n.jsxs("div",{className:`adj-row-visual ${A?"highlighted":""}`,children:[n.jsx("div",{className:"adj-vertex-box",children:n.jsx("span",{className:"adj-vertex-label",children:v})}),n.jsx("div",{className:"adj-pointer",children:n.jsx(fe,{size:16})}),n.jsxs("div",{className:"adj-linked-list",children:[T.length===0?n.jsx("div",{className:"adj-null",children:"null"}):T.map(([S,L],F)=>{const V=m&&m.from===v&&m.to===S;return n.jsxs(Pe.Fragment,{children:[n.jsxs("div",{className:`adj-neighbor-node ${V?"highlighted":""}`,children:[n.jsx("span",{className:"neighbor-vertex",children:S}),n.jsxs("span",{className:"neighbor-weight",children:["w:",L]})]}),F<T.length-1&&n.jsx("div",{className:"adj-link",children:n.jsx(fe,{size:14})})]},`${v}-${S}`)}),T.length>0&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"adj-link",children:n.jsx(fe,{size:14})}),n.jsx("div",{className:"adj-null",children:"null"})]})]}),n.jsx("button",{className:"adj-remove-btn",onClick:()=>C(v),title:`Remove vertex ${v}`,children:n.jsx(vl,{size:14})})]},v)})}),n.jsxs("div",{className:"memory-hint",children:[n.jsx("strong",{children:"Memory Layout:"})," An array/hashmap stores vertex references, each pointing to the head of a linked list containing (neighbor, weight) pairs."]})]})]})]}),n.jsx(ye,{dataStructure:"graph"})]})}function i0(){const[e,t]=p.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=p.useState([]),[i,a]=p.useState([]),[l,o]=p.useState(""),[c,u]=p.useState(""),[d,h]=p.useState(""),[m,w]=p.useState("1"),[k,N]=p.useState(null),[y,f]=p.useState(null),[g,x]=p.useState({}),{message:_,showMessage:j}=Be(3e3);p.useEffect(()=>{C()},[]),p.useEffect(()=>{e.vertices.length>0?(D(),z()):(s([]),a([]))},[e]),p.useEffect(()=>{if(k){const S=setTimeout(()=>{N(null)},2e3);return()=>clearTimeout(S)}},[k]);const z=p.useCallback(()=>{const B=Math.min(350,250)*.38,O={},M=e.vertices.length;e.vertices.forEach((P,b)=>{const q=2*Math.PI*b/M-Math.PI/2;O[P]={x:175+B*Math.cos(q),y:125+B*Math.sin(q)}}),x(O)},[e.vertices]),C=async()=>{try{const S=await le("/api/graph");t(S)}catch(S){console.error("Error loading graph:",S)}},D=async()=>{try{const S=await le("/api/graph/matrix");s(S.matrix),a(S.vertices)}catch(S){console.error("Error loading matrix:",S)}},$=async()=>{if(!l.trim()){j("Please enter a vertex name!","error");return}try{const S=await ne("/api/graph/vertex",{vertex:l.trim()});if(S.error){j(S.error,"error");return}t(S),j(`Added vertex '${l}' - Added new row and column to matrix`,"success"),o("")}catch{j("Error adding vertex","error")}},R=async S=>{try{const L=await yi(`/api/graph/vertex/${S}`);if(L.error){j(L.error,"error");return}t(L),j(`Removed vertex '${S}' - Removed row and column from matrix`,"success")}catch{j("Error removing vertex","error")}},H=async()=>{if(!c.trim()||!d.trim()){j("Please select both vertices!","error");return}const S=parseInt(m)||1;try{const L=await ne("/api/graph/edge",{from:c.trim(),to:d.trim(),weight:S});if(L.error){j(L.error,"error");return}t(L);const F=i.indexOf(c),V=i.indexOf(d);N({row:F,col:V}),j(`Added edge: matrix[${c}][${d}] = ${S}`,"success"),u(""),h(""),w("1")}catch{j("Error adding edge","error")}},W=async()=>{if(!c.trim()||!d.trim()){j("Please select both vertices!","error");return}try{const S=await yi("/api/graph/edge",{from:c.trim(),to:d.trim()});if(S.error){j(S.error,"error");return}t(S),j(`Removed edge: matrix[${c}][${d}] = 0`,"success"),u(""),h("")}catch{j("Error removing edge","error")}},E=()=>{var B;if(!c.trim()||!d.trim()){j("Please select both vertices to check!","error");return}const S=i.indexOf(c),L=i.indexOf(d);if(S===-1||L===-1){j("Vertex not found!","error");return}const F=((B=r[S])==null?void 0:B[L])||0,V=F>0;N({row:S,col:L}),f({from:c,to:d,exists:V,weight:F}),j(V?`Edge exists! matrix[${c}][${d}] = ${F} (O(1) lookup)`:`No edge: matrix[${c}][${d}] = 0 (O(1) lookup)`,V?"success":"info")},I=async S=>{try{const L=await ne(`/api/graph/preset/${S}`,{});if(L.error){j(L.error,"error");return}t(L),f(null),j(`Loaded '${S}' graph preset`,"success")}catch{j("Error loading preset","error")}},v=async()=>{try{const S=await ne("/api/graph/clear",{});t(S),s([]),a([]),f(null),j("Graph cleared","success")}catch{j("Error clearing graph","error")}},T=(S,L)=>{S.key==="Enter"&&L()},A=(S,L,F)=>{let V="matrix-cell";return k&&k.row===S&&k.col===L&&(V+=" highlighted"),k&&k.row===L&&k.col===S&&(V+=" highlighted"),F>0&&(V+=" has-edge"),S===L&&(V+=" diagonal"),V};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Oe,{className:"icon-sm"}),n.jsx("span",{children:"What is an Adjacency Matrix?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:["An ",n.jsx("strong",{children:"Adjacency Matrix"})," is a 2D array where ",n.jsx("code",{children:"matrix[i][j]"})," represents the edge weight between vertex i and j (0 if no edge)."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(Ne,{}),n.jsx("span",{children:"Like a spreadsheet where rows and columns are people, and cells show if they're friends!"})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Check Edge"}),n.jsx("span",{className:"op-desc",children:"Direct lookup"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Add Edge"}),n.jsx("span",{className:"op-desc",children:"Set cell value"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Add Vertex"}),n.jsx("span",{className:"op-desc",children:"Resize matrix"}),n.jsx("span",{className:"op-complexity",children:"O(V²)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Space"}),n.jsx("span",{className:"op-desc",children:"2D array"}),n.jsx("span",{className:"op-complexity",children:"O(V²)"})]})]}),n.jsxs("div",{className:"concept-uses",children:[n.jsx("strong",{children:"When to Use:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Dense graphs (many edges)"}),n.jsx("li",{children:"Fast edge existence checks needed"}),n.jsx("li",{children:"Small number of vertices"}),n.jsx("li",{children:"Frequent edge weight updates"})]})]})]})]}),n.jsx(me,{context:"Adjacency Matrix graph representation"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Operations"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Load Preset"}),n.jsxs("div",{className:"btn-group preset-group",children:[n.jsx("button",{onClick:()=>I("simple"),className:"btn btn-preset",children:"Simple"}),n.jsx("button",{onClick:()=>I("complete"),className:"btn btn-preset",children:"Complete"}),n.jsx("button",{onClick:()=>I("cyclic"),className:"btn btn-preset",children:"Cyclic"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsxs("label",{htmlFor:"vertexInput",children:[n.jsx(vi,{size:14})," Add Vertex"]}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",id:"vertexInput",value:l,onChange:S=>o(S.target.value.toUpperCase()),onKeyPress:S=>T(S,$),placeholder:"Name (e.g., A)",maxLength:3}),n.jsx("button",{onClick:$,className:"btn btn-add",children:"Add"})]}),n.jsx("span",{className:"operation-hint",children:"Adds new row & column (O(V²) resize)"})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Edge Operations"}),n.jsxs("div",{className:"edge-inputs",children:[n.jsxs("select",{value:c,onChange:S=>u(S.target.value),className:"vertex-select",children:[n.jsx("option",{value:"",children:"From"}),e.vertices.map(S=>n.jsx("option",{value:S,children:S},S))]}),n.jsx("span",{className:"edge-arrow",children:"→"}),n.jsxs("select",{value:d,onChange:S=>h(S.target.value),className:"vertex-select",children:[n.jsx("option",{value:"",children:"To"}),e.vertices.map(S=>n.jsx("option",{value:S,children:S},S))]})]}),n.jsxs("div",{className:"weight-input",children:[n.jsx("label",{htmlFor:"weightInput",children:"Weight:"}),n.jsx("input",{type:"number",id:"weightInput",value:m,onChange:S=>w(S.target.value),min:"1",max:"99",className:"weight-field"})]}),n.jsxs("div",{className:"btn-group",children:[n.jsxs("button",{onClick:H,className:"btn btn-add",children:[n.jsx(vi,{size:14})," Add"]}),n.jsxs("button",{onClick:W,className:"btn btn-remove",children:[n.jsx(vl,{size:14})," Remove"]}),n.jsxs("button",{onClick:E,className:"btn btn-check",children:[n.jsx(fr,{size:14})," Check"]})]}),n.jsx("span",{className:"operation-hint",children:"O(1) direct cell access"})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:v,className:"btn btn-clear full-width",children:"Clear Graph"})}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Vertices (V):"}),n.jsx("span",{className:"info-value",children:e.vertex_count||0})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Edges (E):"}),n.jsx("span",{className:"info-value",children:e.edge_count||0})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Matrix Size:"}),n.jsxs("span",{className:"info-value",children:[i.length," × ",i.length]})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Space Used:"}),n.jsxs("span",{className:"info-value",children:["O(",i.length,"²) = ",i.length*i.length," cells"]})]})]}),y&&n.jsxs("div",{className:`lookup-result ${y.exists?"exists":"not-exists"}`,children:[n.jsx("strong",{children:"Lookup Result:"}),n.jsxs("code",{children:["matrix[",y.from,"][",y.to,"] = ",y.weight]}),n.jsx("span",{children:y.exists?"Edge exists!":"No edge"})]}),n.jsx($e,{message:_})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsxs("div",{className:"mini-graph-section",children:[n.jsx("h3",{children:"Graph View"}),n.jsx("div",{className:"mini-graph-container",children:e.vertices.length===0?n.jsx("div",{className:"graph-empty-mini",children:"Empty graph"}):n.jsxs("svg",{className:"mini-graph-svg",viewBox:"0 0 350 250",children:[e.edges.map(([S,L,F],V)=>{const B=g[S],O=g[L];return!B||!O?null:n.jsx("line",{x1:B.x,y1:B.y,x2:O.x,y2:O.y,className:"mini-edge"},`edge-${V}`)}),e.vertices.map(S=>{const L=g[S];return L?n.jsxs("g",{className:"mini-node",children:[n.jsx("circle",{cx:L.x,cy:L.y,r:18}),n.jsx("text",{x:L.x,y:L.y,dominantBaseline:"central",textAnchor:"middle",children:S})]},S):null})]})})]}),n.jsxs("div",{className:"matrix-section",children:[n.jsx("h3",{children:"Adjacency Matrix"}),n.jsxs("p",{className:"matrix-explanation",children:["Each cell ",n.jsx("code",{children:"matrix[row][col]"})," stores the edge weight (0 = no edge). Undirected graphs have symmetric matrices."]}),i.length===0?n.jsx("div",{className:"matrix-empty",children:"No vertices in graph. Add vertices or load a preset!"}):n.jsx("div",{className:"matrix-container",children:n.jsxs("table",{className:"adjacency-matrix",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{className:"matrix-corner"}),i.map((S,L)=>n.jsx("th",{className:"matrix-header col-header",children:S},S))]})}),n.jsx("tbody",{children:i.map((S,L)=>n.jsxs("tr",{children:[n.jsxs("th",{className:"matrix-header row-header",children:[S,n.jsx("button",{className:"remove-vertex-btn",onClick:()=>R(S),title:`Remove ${S}`,children:"×"})]}),i.map((F,V)=>{var B,O,M;return n.jsx("td",{className:A(L,V,(B=r[L])==null?void 0:B[V]),title:`matrix[${S}][${F}] = ${((O=r[L])==null?void 0:O[V])||0}`,children:((M=r[L])==null?void 0:M[V])||0},`${L}-${V}`)})]},S))})]})}),n.jsxs("div",{className:"comparison-hint",children:[n.jsx("strong",{children:"vs Adjacency List:"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("span",{className:"pro",children:"Pro:"})," O(1) edge lookup vs O(degree) for list"]}),n.jsxs("li",{children:[n.jsx("span",{className:"con",children:"Con:"})," O(V²) space vs O(V+E) for list"]}),n.jsxs("li",{children:[n.jsx("span",{className:"pro",children:"Pro:"})," Better for dense graphs (E ≈ V²)"]}),n.jsxs("li",{children:[n.jsx("span",{className:"con",children:"Con:"})," Wastes space for sparse graphs"]})]})]})]})]})]}),n.jsx(ye,{dataStructure:"graph"})]})}const $h=Pe.memo(function({currentStepIndex:t,totalSteps:r,isPlaying:s,isAtStart:i,isAtEnd:a,currentSnapshot:l,algorithmLabel:o,onPlay:c,onPause:u,onStepForward:d,onStepBackward:h,onScrub:m,onJumpToStart:w,onJumpToEnd:k}){var g;const N=p.useCallback(x=>m(parseInt(x.target.value,10)),[m]),y=r>1?t/(r-1)*100:0,f=t+1;return n.jsxs("div",{className:"debugger-suite",children:[n.jsxs("div",{className:"debugger-header",children:[n.jsx(Wg,{size:16,"aria-hidden":"true"}),n.jsx("h3",{children:"Time-Travel Debugger"}),o&&n.jsx("span",{className:"scrubber-algo-badge",children:o})]}),n.jsxs("div",{className:"scrubber-controls",children:[n.jsx("button",{onClick:w,disabled:i,className:"step-btn","aria-label":"Jump to start",title:"Jump to start",children:n.jsx(ex,{size:16})}),n.jsx("button",{onClick:h,disabled:i,className:"step-btn","aria-label":"Previous step",title:"Previous step (←)",children:n.jsx(Dg,{size:20})}),n.jsx("button",{onClick:s?u:c,className:"play-pause-btn","aria-label":s?"Pause":"Play",title:s?"Pause":"Play",children:s?n.jsx(pr,{size:20}):n.jsx(Je,{size:20})}),n.jsx("button",{onClick:d,disabled:a,className:"step-btn","aria-label":"Next step",title:"Next step (→)",children:n.jsx(Us,{size:20})}),n.jsx("button",{onClick:k,disabled:a,className:"step-btn","aria-label":"Jump to end",title:"Jump to end",children:n.jsx(mr,{size:16})})]}),n.jsxs("div",{className:"slider-container",children:[n.jsxs("div",{className:"slider-track-wrapper",children:[n.jsx("div",{className:"slider-progress-fill",style:{width:`${y}%`},"aria-hidden":"true"}),n.jsx("input",{type:"range",min:0,max:Math.max(0,r-1),value:t<0?0:t,onChange:N,className:"history-slider","aria-label":"Algorithm step scrubber","aria-valuemin":0,"aria-valuemax":r-1,"aria-valuenow":t,"aria-valuetext":`Step ${f} of ${r}`})]}),n.jsxs("div",{className:"slider-labels",children:[n.jsxs("span",{className:"slider-step-label",children:["Step ",f]}),n.jsxs("span",{className:"slider-total-label",children:["of ",r]})]})]}),l&&n.jsxs("div",{className:"step-details",children:[n.jsx("span",{className:"step-action-badge","data-action":l.action,children:(g=l.action)==null?void 0:g.toUpperCase()}),n.jsx("p",{className:"step-description",children:l.description}),n.jsxs("div",{className:"step-state-row",children:[n.jsxs("span",{className:"state-pill state-pill--visited",children:["Visited: ",l.visited.length]}),n.jsxs("span",{className:"state-pill state-pill--frontier",children:[l.algorithm==="bfs"?"Queue":"Stack",":"," ",l.frontier.length>0?`[${l.frontier.join(" → ")}]`:"empty"]})]})]})]})});function Bh(e=800){const[t,r]=p.useState([]),[s,i]=p.useState(-1),[a,l]=p.useState(!1),o=p.useRef(null),c=p.useRef(-1),u=p.useRef(0);p.useEffect(()=>{c.current=s},[s]),p.useEffect(()=>()=>{o.current&&(clearInterval(o.current),o.current=null)},[]);const d=p.useCallback(()=>{o.current&&(clearInterval(o.current),o.current=null)},[]),h=p.useCallback((D,$)=>{if(D>=$-1){l(!1);return}d(),l(!0),o.current=setInterval(()=>{const R=c.current+1;if(R>=u.current){clearInterval(o.current),o.current=null,l(!1);return}c.current=R,i(R)},e)},[e,d]),m=p.useCallback(D=>{d(),l(!1),u.current=D.length,c.current=0,r(D),i(0),requestAnimationFrame(()=>{h(0,D.length)})},[h,d]),w=p.useCallback(()=>{d(),l(!1)},[d]),k=p.useCallback(()=>{c.current<u.current-1&&h(c.current,u.current)},[h]),N=p.useCallback(()=>{l(D=>D?(d(),!1):(c.current<u.current-1&&requestAnimationFrame(()=>k()),D))},[d,k]),y=p.useCallback(()=>{d(),l(!1),i(D=>{const $=Math.min(D+1,u.current-1);return c.current=$,$})},[d]),f=p.useCallback(()=>{d(),l(!1),i(D=>{const $=Math.max(D-1,0);return c.current=$,$})},[d]),g=p.useCallback(D=>{const $=Math.max(0,Math.min(D,u.current-1));o.current&&(clearInterval(o.current),o.current=null,l(!1)),c.current=$,i($)},[]),x=p.useCallback(()=>{d(),l(!1),r([]),i(-1),c.current=-1,u.current=0},[d]),_=t[s]??null,j=t.length,z=s<=0,C=s>=j-1&&j>0;return{history:t,currentStepIndex:s,currentSnapshot:_,isPlaying:a,totalSteps:j,isAtStart:z,isAtEnd:C,loadHistory:m,pause:w,resume:k,togglePlayPause:N,stepForward:y,stepBackward:f,scrubTo:g,reset:x}}const a0={bfs:{visit:e=>`Dequeued "${e}" from the queue. Marking visited and scanning neighbors.`,enqueue:e=>`Enqueued "${e}" → added to back of queue for later processing.`,explore:e=>`Exploring neighbors of "${e}". Unvisited neighbors will be enqueued.`,done:()=>"BFS complete. All reachable nodes have been visited."},dfs:{visit:e=>`Visiting "${e}". Exploring as deep as possible from here.`,push:e=>`Pushed "${e}" onto the stack.`,pop:e=>`Popped "${e}" from stack.`,backtrack:e=>`Backtracking from "${e}". All neighbors exhausted.`,done:()=>"DFS complete. All reachable nodes have been visited."}};function l0(e,t){const s=(a0[t]??{})[e.action];return s?s(e.vertex):`Processing node "${e.vertex}" (${e.action}).`}function o0(e,t,r,s){const i=r==="bfs",a=Object.freeze(structuredClone(e.visited??[])),l=Object.freeze(structuredClone(i?e.queue??[]:e.stack??[]));return Object.freeze({vertices:s.vertices,edges:s.edges,step:t,action:e.action,currentNode:e.action==="visit"?e.vertex:null,visited:a,frontier:l,description:l0(e,r),algorithm:r})}function Hh(e,t,r){return Object.freeze(e.map((s,i)=>o0(s,i,t,r)))}function c0(){const[e,t]=p.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=p.useState(""),[i,a]=p.useState({}),{message:l,showMessage:o}=Be(3e3),{currentStepIndex:c,currentSnapshot:u,isPlaying:d,totalSteps:h,isAtStart:m,isAtEnd:w,loadHistory:k,pause:N,resume:y,stepForward:f,stepBackward:g,scrubTo:x,reset:_}=Bh(900),j=new Set((u==null?void 0:u.visited)??[]),z=(u==null?void 0:u.currentNode)??null,C=(u==null?void 0:u.frontier)??[];p.useEffect(()=>{$()},[]),p.useEffect(()=>{e.vertices.length>0&&D()},[e.vertices]);const D=p.useCallback(()=>{const A=Math.min(500,350)*.35,S={},L=e.vertices.length;e.vertices.forEach((F,V)=>{const B=2*Math.PI*V/L-Math.PI/2;S[F]={x:250+A*Math.cos(B),y:175+A*Math.sin(B)}}),a(S)},[e.vertices]),$=async()=>{try{const E=await le("/api/graph");E.vertices.length===0?await R("simple"):t(E)}catch(E){console.error("Error loading graph:",E)}},R=async E=>{try{const I=await ne(`/api/graph/preset/${E}`,{});if(I.error){o(I.error,"error");return}t(I),_(),o(`Loaded '${E}' preset`,"success")}catch{o("Error loading preset","error")}},H=async()=>{if(!r.trim()){o("Please select a starting vertex!","error");return}try{const E=await le(`/api/graph/bfs/${r}`);if(E.error){o(E.error,"error");return}const I=Hh(E.steps,"bfs",e);k(I),o("BFS complete — use the scrubber to explore each step.","info")}catch(E){console.error("BFS Error:",E),o("Error running BFS","error")}},W=E=>z===E?"graph-node current":j.has(E)?"graph-node visited":C.includes(E)?"graph-node queued":"graph-node";return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Oe,{className:"icon-sm"}),n.jsx("span",{children:"What is Breadth-First Search?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"BFS"})," explores a graph level by level, visiting all neighbors of a node before moving to the next level."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(Ne,{}),n.jsx("span",{children:"Like ripples spreading outward when you drop a stone in water!"})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Time"}),n.jsx("span",{className:"op-desc",children:"Visit all nodes"}),n.jsx("span",{className:"op-complexity",children:"O(V+E)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Space"}),n.jsx("span",{className:"op-desc",children:"Queue storage"}),n.jsx("span",{className:"op-complexity",children:"O(V)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Structure"}),n.jsx("span",{className:"op-desc",children:"Uses a Queue"}),n.jsx("span",{className:"op-complexity",children:"FIFO"})]})]})]})]}),n.jsx(me,{context:"Breadth-First Search (BFS) algorithm on graphs"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"BFS Controls"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Load Graph Preset"}),n.jsxs("div",{className:"btn-group preset-group",children:[n.jsx("button",{onClick:()=>R("simple"),className:"btn btn-preset",disabled:d,children:"Simple"}),n.jsx("button",{onClick:()=>R("tree"),className:"btn btn-preset",disabled:d,children:"Tree"}),n.jsx("button",{onClick:()=>R("cyclic"),className:"btn btn-preset",disabled:d,children:"Cyclic"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Start BFS From"}),n.jsxs("select",{value:r,onChange:E=>s(E.target.value),className:"vertex-select full-width",disabled:d,children:[n.jsx("option",{value:"",children:"Select start vertex"}),e.vertices.map(E=>n.jsx("option",{value:E,children:E},E))]})]}),n.jsx("div",{className:"operation-group",children:n.jsxs("div",{className:"btn-group",children:[n.jsxs("button",{onClick:H,className:"btn btn-bfs",disabled:d,children:[n.jsx(Je,{size:14})," Run BFS"]}),n.jsx("button",{onClick:_,className:"btn btn-reset",children:n.jsx(ut,{size:14})})]})}),h>0&&n.jsx($h,{currentStepIndex:c,totalSteps:h,isPlaying:d,isAtStart:m,isAtEnd:w,currentSnapshot:u,algorithmLabel:"BFS",onPlay:y,onPause:N,onStepForward:f,onStepBackward:g,onScrub:x,onJumpToStart:()=>x(0),onJumpToEnd:()=>x(h-1)}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Vertices:"}),n.jsx("span",{className:"info-value",children:e.vertices.length})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Queue:"}),n.jsxs("span",{className:"info-value",children:["[",C.join(", "),"]"]})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Visited:"}),n.jsxs("span",{className:"info-value",children:[j.size," / ",e.vertices.length]})]})]}),n.jsx($e,{message:l})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"BFS Visualization"}),n.jsx("div",{className:"graph-container",children:e.vertices.length===0?n.jsx("div",{className:"graph-empty",children:"Loading graph..."}):n.jsxs("svg",{className:"graph-svg",viewBox:"0 0 500 350",children:[e.edges.map(([E,I],v)=>{const T=i[E],A=i[I];return!T||!A?null:n.jsx("line",{x1:T.x,y1:T.y,x2:A.x,y2:A.y,className:"graph-edge"},`edge-${v}`)}),e.vertices.map(E=>{const I=i[E];return I?n.jsxs("g",{className:W(E),children:[n.jsx("circle",{cx:I.x,cy:I.y,r:25,className:"node-circle"}),n.jsx("text",{x:I.x,y:I.y,className:"node-label",dominantBaseline:"central",textAnchor:"middle",children:E})]},E):null})]})})]})]}),n.jsx(ye,{dataStructure:"bfs"})]})}function d0(){const[e,t]=p.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=p.useState(""),[i,a]=p.useState({}),{message:l,showMessage:o}=Be(3e3),{currentStepIndex:c,currentSnapshot:u,isPlaying:d,totalSteps:h,isAtStart:m,isAtEnd:w,loadHistory:k,pause:N,resume:y,stepForward:f,stepBackward:g,scrubTo:x,reset:_}=Bh(900),j=new Set((u==null?void 0:u.visited)??[]),z=(u==null?void 0:u.currentNode)??null,C=(u==null?void 0:u.frontier)??[];p.useEffect(()=>{$()},[]),p.useEffect(()=>{e.vertices.length>0&&D()},[e.vertices]);const D=p.useCallback(()=>{const A=Math.min(500,350)*.35,S={},L=e.vertices.length;e.vertices.forEach((F,V)=>{const B=2*Math.PI*V/L-Math.PI/2;S[F]={x:250+A*Math.cos(B),y:175+A*Math.sin(B)}}),a(S)},[e.vertices]),$=async()=>{try{const E=await le("/api/graph");E.vertices.length===0?await R("simple"):t(E)}catch(E){console.error("Error loading graph:",E)}},R=async E=>{try{const I=await ne(`/api/graph/preset/${E}`,{});if(I.error){o(I.error,"error");return}t(I),_(),o(`Loaded '${E}' preset`,"success")}catch{o("Error loading preset","error")}},H=async()=>{if(!r.trim()){o("Please select a starting vertex!","error");return}try{const E=await le(`/api/graph/dfs/${r}`);if(E.error){o(E.error,"error");return}const I=Hh(E.steps,"dfs",e);k(I),o("DFS complete — use the scrubber to explore each step.","info")}catch(E){console.error("DFS Error:",E),o("Error running DFS","error")}},W=E=>z===E?"graph-node current":j.has(E)?"graph-node visited":C.includes(E)?"graph-node stacked":"graph-node";return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Oe,{className:"icon-sm"}),n.jsx("span",{children:"What is Depth-First Search?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"DFS"})," explores a graph by going as deep as possible along each branch before backtracking."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(Ne,{}),n.jsx("span",{children:"Like exploring a maze by following one path to its end before trying another!"})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Time"}),n.jsx("span",{className:"op-desc",children:"Visit all nodes"}),n.jsx("span",{className:"op-complexity",children:"O(V+E)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Space"}),n.jsx("span",{className:"op-desc",children:"Stack storage"}),n.jsx("span",{className:"op-complexity",children:"O(V)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Structure"}),n.jsx("span",{className:"op-desc",children:"Uses a Stack"}),n.jsx("span",{className:"op-complexity",children:"LIFO"})]})]})]})]}),n.jsx(me,{context:"Depth-First Search (DFS) algorithm on graphs"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"DFS Controls"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Load Graph Preset"}),n.jsxs("div",{className:"btn-group preset-group",children:[n.jsx("button",{onClick:()=>R("simple"),className:"btn btn-preset",disabled:d,children:"Simple"}),n.jsx("button",{onClick:()=>R("tree"),className:"btn btn-preset",disabled:d,children:"Tree"}),n.jsx("button",{onClick:()=>R("cyclic"),className:"btn btn-preset",disabled:d,children:"Cyclic"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Start DFS From"}),n.jsxs("select",{value:r,onChange:E=>s(E.target.value),className:"vertex-select full-width",disabled:d,children:[n.jsx("option",{value:"",children:"Select start vertex"}),e.vertices.map(E=>n.jsx("option",{value:E,children:E},E))]})]}),n.jsx("div",{className:"operation-group",children:n.jsxs("div",{className:"btn-group",children:[n.jsxs("button",{onClick:H,className:"btn btn-dfs",disabled:d,children:[n.jsx(Je,{size:14})," Run DFS"]}),n.jsx("button",{onClick:_,className:"btn btn-reset",children:n.jsx(ut,{size:14})})]})}),h>0&&n.jsx($h,{currentStepIndex:c,totalSteps:h,isPlaying:d,isAtStart:m,isAtEnd:w,currentSnapshot:u,algorithmLabel:"DFS",onPlay:y,onPause:N,onStepForward:f,onStepBackward:g,onScrub:x,onJumpToStart:()=>x(0),onJumpToEnd:()=>x(h-1)}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Vertices:"}),n.jsx("span",{className:"info-value",children:e.vertices.length})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Stack:"}),n.jsxs("span",{className:"info-value",children:["[",C.join(", "),"]"]})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Visited:"}),n.jsxs("span",{className:"info-value",children:[j.size," / ",e.vertices.length]})]})]}),n.jsx($e,{message:l})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"DFS Visualization"}),n.jsx("div",{className:"graph-container",children:e.vertices.length===0?n.jsx("div",{className:"graph-empty",children:"Loading graph..."}):n.jsxs("svg",{className:"graph-svg",viewBox:"0 0 500 350",children:[e.edges.map(([E,I],v)=>{const T=i[E],A=i[I];return!T||!A?null:n.jsx("line",{x1:T.x,y1:T.y,x2:A.x,y2:A.y,className:"graph-edge"},`edge-${v}`)}),e.vertices.map(E=>{const I=i[E];return I?n.jsxs("g",{className:W(E),children:[n.jsx("circle",{cx:I.x,cy:I.y,r:25,className:"node-circle"}),n.jsx("text",{x:I.x,y:I.y,className:"node-label",dominantBaseline:"central",textAnchor:"middle",children:E})]},E):null})]})})]})]}),n.jsx(ye,{dataStructure:"dfs"})]})}function u0(){const[e,t]=p.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=p.useState(""),[i,a]=p.useState(""),[l,o]=p.useState({}),[c,u]=p.useState({}),[d,h]=p.useState([]),[m,w]=p.useState(-1),[k,N]=p.useState(!1),[y,f]=p.useState(!1),[g,x]=p.useState(new Set),[_,j]=p.useState(null),[z,C]=p.useState(null),[D,$]=p.useState({}),{message:R,showMessage:H}=Be(3e3),W=p.useRef(null),E=p.useRef(0);p.useEffect(()=>{v()},[]),p.useEffect(()=>{e.vertices.length>0&&I()},[e.vertices]);const I=p.useCallback(()=>{const ee=Math.min(500,350)*.35,K={},X=e.vertices.length;e.vertices.forEach((oe,re)=>{const be=2*Math.PI*re/X-Math.PI/2;K[oe]={x:250+ee*Math.cos(be),y:175+ee*Math.sin(be)}}),$(K)},[e.vertices]),v=async()=>{try{const b=await le("/api/graph");b.vertices.length===0?await T("weighted"):t(b)}catch(b){console.error("Error loading graph:",b)}},T=async b=>{try{const q=await ne(`/api/graph/preset/${b}`,{});if(q.error){H(q.error,"error");return}t(q),B(),H(`Loaded '${b}' preset`,"success")}catch{H("Error loading preset","error")}},A=async()=>{if(!r){H("Please select a start vertex!","error");return}try{const b=i?`/api/graph/dijkstra/${r}?end=${i}`:`/api/graph/dijkstra/${r}`,q=await le(b);if(q.error){H(q.error,"error");return}o(q.distances),u(q.paths),h(q.steps),H("Starting Dijkstra's algorithm...","info"),S(q.steps)}catch{H("Error running Dijkstra's algorithm","error")}},S=b=>{W.current&&clearInterval(W.current),N(!0),f(!1),x(new Set),j(null),C(null),w(-1),E.current=0,W.current=setInterval(()=>{if(E.current>=b.length){clearInterval(W.current),N(!1),j(null),C(null),H("Dijkstra's algorithm complete!","success");return}const q=b[E.current];w(E.current),o(q.distances||{}),x(new Set(q.visited||[])),q.action==="visit"?(j(q.current),C(null)):(q.action==="check"||q.action==="update")&&(j(q.current),C({from:q.current,to:q.neighbor})),E.current++},1200)},L=()=>{y?(f(!1),F()):(f(!0),W.current&&clearInterval(W.current))},F=()=>{W.current&&clearInterval(W.current),W.current=setInterval(()=>{if(E.current>=d.length){clearInterval(W.current),N(!1),j(null),C(null);return}const b=d[E.current];w(E.current),o(b.distances||{}),x(new Set(b.visited||[])),b.action==="visit"?(j(b.current),C(null)):(b.action==="check"||b.action==="update")&&(j(b.current),C({from:b.current,to:b.neighbor})),E.current++},1200)},V=()=>{if(E.current>=d.length)return;const b=d[E.current];w(E.current),o(b.distances||{}),x(new Set(b.visited||[])),b.action==="visit"?(j(b.current),C(null)):(b.action==="check"||b.action==="update")&&(j(b.current),C({from:b.current,to:b.neighbor})),E.current++,E.current>=d.length&&(N(!1),j(null),C(null))},B=()=>{W.current&&clearInterval(W.current),o({}),u({}),h([]),w(-1),x(new Set),j(null),C(null),N(!1),f(!1),E.current=0},O=b=>_===b?"graph-node current":g.has(b)?"graph-node visited":"graph-node",M=(b,q)=>z&&(z.from===b&&z.to===q||z.from===q&&z.to===b)?"graph-edge checking":"graph-edge",P=()=>m>=0&&m<d.length?d[m].message:"";return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Oe,{className:"icon-sm"}),n.jsx("span",{children:"What is Dijkstra's Algorithm?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"Dijkstra's Algorithm"})," finds the shortest path from a source vertex to all other vertices in a weighted graph with non-negative weights."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(Ne,{}),n.jsx("span",{children:"Like GPS finding the quickest route - always picks the closest unvisited location!"})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Time"}),n.jsx("span",{className:"op-desc",children:"With min-heap"}),n.jsx("span",{className:"op-complexity",children:"O((V+E)logV)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Space"}),n.jsx("span",{className:"op-desc",children:"Distance array"}),n.jsx("span",{className:"op-complexity",children:"O(V)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Strategy"}),n.jsx("span",{className:"op-desc",children:"Greedy"}),n.jsx("span",{className:"op-complexity",children:"Min first"})]})]}),n.jsxs("div",{className:"concept-uses",children:[n.jsx("strong",{children:"Common Uses:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"GPS navigation systems"}),n.jsx("li",{children:"Network routing protocols"}),n.jsx("li",{children:"Social network analysis"}),n.jsx("li",{children:"Game pathfinding"})]})]})]})]}),n.jsx(me,{context:"Dijkstra's shortest path algorithm"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Dijkstra's Algorithm"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Load Preset"}),n.jsxs("div",{className:"btn-group preset-group",children:[n.jsx("button",{onClick:()=>T("weighted"),className:"btn btn-preset",disabled:k,children:"Weighted"}),n.jsx("button",{onClick:()=>T("simple"),className:"btn btn-preset",disabled:k,children:"Simple"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Start Vertex"}),n.jsxs("select",{value:r,onChange:b=>s(b.target.value),className:"vertex-select full-width",disabled:k,children:[n.jsx("option",{value:"",children:"Select start"}),e.vertices.map(b=>n.jsx("option",{value:b,children:b},b))]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"End Vertex (Optional)"}),n.jsxs("select",{value:i,onChange:b=>a(b.target.value),className:"vertex-select full-width",disabled:k,children:[n.jsx("option",{value:"",children:"All vertices"}),e.vertices.map(b=>n.jsx("option",{value:b,children:b},b))]})]}),n.jsx("div",{className:"operation-group",children:n.jsxs("div",{className:"btn-group",children:[n.jsxs("button",{onClick:A,className:"btn btn-dijkstra",disabled:k&&!y,children:[n.jsx(Je,{size:14})," Run"]}),k&&n.jsx("button",{onClick:L,className:"btn btn-pause",children:y?n.jsx(Je,{size:14}):n.jsx(pr,{size:14})}),y&&n.jsx("button",{onClick:V,className:"btn btn-step",children:n.jsx(mr,{size:14})}),n.jsx("button",{onClick:B,className:"btn btn-reset",children:n.jsx(ut,{size:14})})]})}),Object.keys(l).length>0&&n.jsxs("div",{className:"distance-table",children:[n.jsxs("h3",{children:["Distances from ",r]}),n.jsx("div",{className:"distance-grid",children:e.vertices.map(b=>n.jsxs("div",{className:`distance-item ${g.has(b)?"visited":""} ${_===b?"current":""}`,children:[n.jsx("span",{className:"vertex-label",children:b}),n.jsx("span",{className:"distance-value",children:l[b]==="inf"||l[b]===null?"∞":l[b]})]},b))})]}),m>=0&&n.jsxs("div",{className:"current-step-box",children:[n.jsxs("strong",{children:["Step ",m+1,":"]}),n.jsx("p",{children:P()})]}),n.jsx($e,{message:R}),n.jsxs("div",{className:"legend",children:[n.jsx("h3",{children:"Legend"}),n.jsxs("div",{className:"legend-items",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color unvisited"}),n.jsx("span",{children:"Unvisited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color current"}),n.jsx("span",{children:"Current"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color visited"}),n.jsx("span",{children:"Visited"})]})]})]})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Visualization"}),n.jsx("div",{className:"graph-container",children:e.vertices.length===0?n.jsx("div",{className:"graph-empty",children:"Loading graph..."}):n.jsxs("svg",{className:"graph-svg",viewBox:"0 0 500 350",children:[e.edges.map(([b,q,G],Y)=>{const ee=D[b],K=D[q];if(!ee||!K)return null;const X=(ee.x+K.x)/2,oe=(ee.y+K.y)/2;return n.jsxs("g",{children:[n.jsx("line",{x1:ee.x,y1:ee.y,x2:K.x,y2:K.y,className:M(b,q)}),n.jsx("circle",{cx:X,cy:oe,r:12,className:"weight-bg"}),n.jsx("text",{x:X,y:oe,className:"weight-label",dominantBaseline:"central",textAnchor:"middle",children:G})]},`edge-${Y}`)}),e.vertices.map(b=>{const q=D[b];return q?n.jsxs("g",{className:O(b),children:[n.jsx("circle",{cx:q.x,cy:q.y,r:25,className:"node-circle"}),n.jsx("text",{x:q.x,y:q.y,className:"node-label",dominantBaseline:"central",textAnchor:"middle",children:b}),l[b]!==void 0&&n.jsxs("text",{x:q.x,y:q.y+38,className:"distance-label",dominantBaseline:"central",textAnchor:"middle",children:["d=",l[b]==="inf"||l[b]===null?"∞":l[b]]})]},b):null})]})}),Object.keys(c).length>0&&!k&&n.jsxs("div",{className:"paths-section",children:[n.jsxs("h3",{children:["Shortest Paths from ",r]}),n.jsx("div",{className:"paths-list",children:Object.entries(c).map(([b,q])=>n.jsxs("div",{className:"path-item",children:[n.jsxs("span",{className:"path-target",children:[b,":"]}),n.jsx("span",{className:"path-route",children:q.join(" → ")}),n.jsxs("span",{className:"path-distance",children:["(dist: ",l[b]===null?"∞":l[b],")"]})]},b))})]})]})]}),n.jsx(ye,{dataStructure:"dijkstra"})]})}function h0(){const[e,t]=p.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=p.useState(""),[i,a]=p.useState([]),[l,o]=p.useState(0),[c,u]=p.useState([]),[d,h]=p.useState(-1),[m,w]=p.useState(!1),[k,N]=p.useState(!1),[y,f]=p.useState(new Set),[g,x]=p.useState(null),[_,j]=p.useState(null),[z,C]=p.useState({}),{message:D,showMessage:$}=Be(3e3),R=p.useRef(null),H=p.useRef(0);p.useEffect(()=>{E()},[]),p.useEffect(()=>{e.vertices.length>0&&W()},[e.vertices]);const W=p.useCallback(()=>{const Y=Math.min(500,350)*.35,ee={},K=e.vertices.length;e.vertices.forEach((X,oe)=>{const re=2*Math.PI*oe/K-Math.PI/2;ee[X]={x:250+Y*Math.cos(re),y:175+Y*Math.sin(re)}}),C(ee)},[e.vertices]),E=async()=>{try{const P=await le("/api/graph");P.vertices.length===0?await I("weighted"):t(P)}catch(P){console.error("Error loading graph:",P)}},I=async P=>{try{const b=await ne(`/api/graph/preset/${P}`,{});if(b.error){$(b.error,"error");return}t(b),F(),$(`Loaded '${P}' preset`,"success")}catch{$("Error loading preset","error")}},v=async()=>{try{const P=r?`/api/graph/mst?start=${r}`:"/api/graph/mst",b=await le(P);if(b.error){$(b.error,"error");return}u(b.steps),$("Starting Prim's MST algorithm...","info"),T(b.steps,b.mst_edges,b.total_weight)}catch{$("Error running MST algorithm","error")}},T=(P,b,q)=>{R.current&&clearInterval(R.current),w(!0),N(!1),f(new Set),a([]),o(0),x(null),j(null),h(-1),H.current=0,R.current=setInterval(()=>{if(H.current>=P.length){clearInterval(R.current),w(!1),x(null),j(null),a(b),o(q),$(`MST complete! Total weight: ${q}`,"success");return}const G=P[H.current];h(H.current),f(new Set(G.visited||[])),a(G.mst_edges||[]),o(G.total_weight||0),G.action==="add"?(x(G.current),j(null)):G.action==="consider"&&(x(G.current),j({from:G.current,to:G.neighbor,weight:G.weight})),H.current++},1e3)},A=()=>{k?(N(!1),S()):(N(!0),R.current&&clearInterval(R.current))},S=()=>{R.current&&clearInterval(R.current),R.current=setInterval(()=>{if(H.current>=c.length){clearInterval(R.current),w(!1),x(null),j(null);return}const P=c[H.current];h(H.current),f(new Set(P.visited||[])),a(P.mst_edges||[]),o(P.total_weight||0),P.action==="add"?(x(P.current),j(null)):P.action==="consider"&&(x(P.current),j({from:P.current,to:P.neighbor,weight:P.weight})),H.current++},1e3)},L=()=>{if(H.current>=c.length)return;const P=c[H.current];h(H.current),f(new Set(P.visited||[])),a(P.mst_edges||[]),o(P.total_weight||0),P.action==="add"?(x(P.current),j(null)):P.action==="consider"&&(x(P.current),j({from:P.current,to:P.neighbor,weight:P.weight})),H.current++,H.current>=c.length&&(w(!1),x(null),j(null))},F=()=>{R.current&&clearInterval(R.current),a([]),o(0),u([]),h(-1),f(new Set),x(null),j(null),w(!1),N(!1),H.current=0},V=P=>g===P?"graph-node current":y.has(P)?"graph-node visited":"graph-node",B=(P,b)=>i.some(([q,G])=>q===P&&G===b||q===b&&G===P),O=(P,b)=>_&&(_.from===P&&_.to===b||_.from===b&&_.to===P)?"graph-edge considering":B(P,b)?"graph-edge mst":"graph-edge",M=()=>d>=0&&d<c.length?c[d].message:"";return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Oe,{className:"icon-sm"}),n.jsx("span",{children:"What is Minimum Spanning Tree?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:["A ",n.jsx("strong",{children:"Minimum Spanning Tree (MST)"})," connects all vertices with the minimum total edge weight, without any cycles."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(Ne,{}),n.jsx("span",{children:"Like finding the cheapest way to connect all cities with roads!"})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Time"}),n.jsx("span",{className:"op-desc",children:"Prim's with heap"}),n.jsx("span",{className:"op-complexity",children:"O((V+E)logV)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Edges"}),n.jsx("span",{className:"op-desc",children:"In MST"}),n.jsx("span",{className:"op-complexity",children:"V - 1"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Strategy"}),n.jsx("span",{className:"op-desc",children:"Greedy"}),n.jsx("span",{className:"op-complexity",children:"Min edge"})]})]}),n.jsxs("div",{className:"concept-uses",children:[n.jsx("strong",{children:"Common Uses:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Network design (cables, pipes)"}),n.jsx("li",{children:"Cluster analysis"}),n.jsx("li",{children:"Image segmentation"}),n.jsx("li",{children:"Approximation algorithms"})]})]})]})]}),n.jsx(me,{context:"Minimum Spanning Tree, Prim's algorithm"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Prim's MST Algorithm"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Load Preset"}),n.jsxs("div",{className:"btn-group preset-group",children:[n.jsx("button",{onClick:()=>I("weighted"),className:"btn btn-preset",disabled:m,children:"Weighted"}),n.jsx("button",{onClick:()=>I("complete"),className:"btn btn-preset",disabled:m,children:"Complete"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Start Vertex (Optional)"}),n.jsxs("select",{value:r,onChange:P=>s(P.target.value),className:"vertex-select full-width",disabled:m,children:[n.jsx("option",{value:"",children:"Auto (first vertex)"}),e.vertices.map(P=>n.jsx("option",{value:P,children:P},P))]})]}),n.jsx("div",{className:"operation-group",children:n.jsxs("div",{className:"btn-group",children:[n.jsxs("button",{onClick:v,className:"btn btn-mst",disabled:m&&!k,children:[n.jsx(Je,{size:14})," Run MST"]}),m&&n.jsx("button",{onClick:A,className:"btn btn-pause",children:k?n.jsx(Je,{size:14}):n.jsx(pr,{size:14})}),k&&n.jsx("button",{onClick:L,className:"btn btn-step",children:n.jsx(mr,{size:14})}),n.jsx("button",{onClick:F,className:"btn btn-reset",children:n.jsx(ut,{size:14})})]})}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"MST Edges:"}),n.jsxs("span",{className:"info-value",children:[i.length," / ",e.vertices.length-1]})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Total Weight:"}),n.jsx("span",{className:"info-value mst-weight",children:l})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Visited:"}),n.jsxs("span",{className:"info-value",children:[y.size," / ",e.vertices.length]})]})]}),d>=0&&n.jsxs("div",{className:"current-step-box",children:[n.jsxs("strong",{children:["Step ",d+1,":"]}),n.jsx("p",{children:M()})]}),n.jsx($e,{message:D}),n.jsxs("div",{className:"legend",children:[n.jsx("h3",{children:"Legend"}),n.jsxs("div",{className:"legend-items",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color unvisited"}),n.jsx("span",{children:"Unvisited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color current"}),n.jsx("span",{children:"Current"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color visited"}),n.jsx("span",{children:"In MST"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-line mst"}),n.jsx("span",{children:"MST Edge"})]})]})]})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Visualization"}),n.jsx("div",{className:"graph-container",children:e.vertices.length===0?n.jsx("div",{className:"graph-empty",children:"Loading graph..."}):n.jsxs("svg",{className:"graph-svg",viewBox:"0 0 500 350",children:[e.edges.map(([P,b,q],G)=>{const Y=z[P],ee=z[b];if(!Y||!ee)return null;const K=(Y.x+ee.x)/2,X=(Y.y+ee.y)/2;return n.jsxs("g",{children:[n.jsx("line",{x1:Y.x,y1:Y.y,x2:ee.x,y2:ee.y,className:O(P,b)}),n.jsx("circle",{cx:K,cy:X,r:12,className:"weight-bg"}),n.jsx("text",{x:K,y:X,className:"weight-label",dominantBaseline:"central",textAnchor:"middle",children:q})]},`edge-${G}`)}),e.vertices.map(P=>{const b=z[P];return b?n.jsxs("g",{className:V(P),children:[n.jsx("circle",{cx:b.x,cy:b.y,r:25,className:"node-circle"}),n.jsx("text",{x:b.x,y:b.y,className:"node-label",dominantBaseline:"central",textAnchor:"middle",children:P})]},P):null})]})}),i.length>0&&n.jsxs("div",{className:"mst-edges-section",children:[n.jsx("h3",{children:"MST Edges"}),n.jsx("div",{className:"mst-edges-list",children:i.map(([P,b,q],G)=>n.jsxs("div",{className:"mst-edge-item",children:[n.jsxs("span",{children:[P," — ",b]}),n.jsxs("span",{className:"edge-weight",children:["(w: ",q,")"]})]},G))}),n.jsx("div",{className:"mst-total",children:n.jsxs("strong",{children:["Total MST Weight: ",l]})})]})]})]}),n.jsx(ye,{dataStructure:"graph"})]})}function p0(){const[e,t]=p.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=p.useState([]),[i,a]=p.useState({}),[l,o]=p.useState([]),[c,u]=p.useState(-1),[d,h]=p.useState(!1),[m,w]=p.useState(!1),[k,N]=p.useState(new Set),[y,f]=p.useState(null),[g,x]=p.useState([]),[_,j]=p.useState(!1),[z,C]=p.useState({}),{message:D,showMessage:$}=Be(3e3),R=p.useRef(null),H=p.useRef(0);p.useEffect(()=>{E()},[]),p.useEffect(()=>{e.vertices.length>0&&W()},[e.vertices]);const W=p.useCallback(()=>{const q=Math.min(500,350)*.35,G={},Y=e.vertices.length;e.vertices.forEach((ee,K)=>{const X=2*Math.PI*K/Y-Math.PI/2;G[ee]={x:250+q*Math.cos(X),y:175+q*Math.sin(X)}}),C(G)},[e.vertices]),E=async()=>{try{const O=await le("/api/graph");O.vertices.length===0?await I("dag"):t(O)}catch(O){console.error("Error loading graph:",O)}},I=async O=>{try{const M=await ne(`/api/graph/preset/${O}`,{});if(M.error){$(M.error,"error");return}t(M),F(),$(`Loaded '${O}' preset`,"success")}catch{$("Error loading preset","error")}},v=async()=>{try{const O=await le("/api/graph/topological");if(O.error){$(O.error,"error");return}if(O.has_cycle){j(!0),$("Graph has a cycle - topological sort not possible!","error");return}j(!1),s(O.sorted||[]),o(O.steps),$("Starting Topological Sort (Kahn's Algorithm)...","info"),T(O.steps)}catch{$("Error running topological sort","error")}},T=O=>{R.current&&clearInterval(R.current),h(!0),w(!1),N(new Set),f(null),x([]),a({}),u(-1),H.current=0,R.current=setInterval(()=>{if(H.current>=O.length){clearInterval(R.current),h(!1),f(null),$(`Topological Sort Complete: ${r.join(" → ")}`,"success");return}const M=O[H.current];u(H.current),a(M.in_degrees||{}),x(M.queue||[]),M.action==="process"?(f(M.vertex),N(new Set(M.result||[]))):M.action==="decrement"||M.action==="enqueue"?f(M.vertex||M.neighbor):M.action==="init"&&(a(M.in_degrees||{}),x(M.queue||[])),H.current++},1e3)},A=()=>{m?(w(!1),S()):(w(!0),R.current&&clearInterval(R.current))},S=()=>{R.current&&clearInterval(R.current),R.current=setInterval(()=>{if(H.current>=l.length){clearInterval(R.current),h(!1),f(null);return}const O=l[H.current];u(H.current),a(O.in_degrees||{}),x(O.queue||[]),O.action==="process"?(f(O.vertex),N(new Set(O.result||[]))):(O.action==="decrement"||O.action==="enqueue")&&f(O.vertex||O.neighbor),H.current++},1e3)},L=()=>{if(H.current>=l.length)return;const O=l[H.current];u(H.current),a(O.in_degrees||{}),x(O.queue||[]),O.action==="process"?(f(O.vertex),N(new Set(O.result||[]))):(O.action==="decrement"||O.action==="enqueue")&&f(O.vertex||O.neighbor),H.current++,H.current>=l.length&&(h(!1),f(null))},F=()=>{R.current&&clearInterval(R.current),s([]),a({}),o([]),u(-1),N(new Set),f(null),x([]),j(!1),h(!1),w(!1),H.current=0},V=O=>y===O?"graph-node current":k.has(O)?"graph-node visited":g.includes(O)?"graph-node queued":"graph-node",B=()=>c>=0&&c<l.length?l[c].message:"";return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Oe,{className:"icon-sm"}),n.jsx("span",{children:"What is Topological Sort?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"Topological Sort"})," orders vertices in a directed acyclic graph (DAG) so that for every edge u→v, u comes before v in the ordering."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(Ne,{}),n.jsx("span",{children:"Like scheduling tasks - you must complete prerequisites before dependent tasks!"})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Time"}),n.jsx("span",{className:"op-desc",children:"Kahn's Algorithm"}),n.jsx("span",{className:"op-complexity",children:"O(V+E)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Space"}),n.jsx("span",{className:"op-desc",children:"In-degree array"}),n.jsx("span",{className:"op-complexity",children:"O(V)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Requirement"}),n.jsx("span",{className:"op-desc",children:"Graph type"}),n.jsx("span",{className:"op-complexity",children:"DAG only"})]})]}),n.jsxs("div",{className:"concept-uses",children:[n.jsx("strong",{children:"Common Uses:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Task scheduling with dependencies"}),n.jsx("li",{children:"Build systems (Makefile)"}),n.jsx("li",{children:"Course prerequisite planning"}),n.jsx("li",{children:"Package dependency resolution"})]})]})]})]}),n.jsx(me,{context:"Topological Sort using Kahn's Algorithm on directed acyclic graphs"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Topological Sort"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Load Graph Preset"}),n.jsxs("div",{className:"btn-group preset-group",children:[n.jsx("button",{onClick:()=>I("dag"),className:"btn btn-preset",disabled:d,children:"DAG"}),n.jsx("button",{onClick:()=>I("tree"),className:"btn btn-preset",disabled:d,children:"Tree"}),n.jsx("button",{onClick:()=>I("simple"),className:"btn btn-preset",disabled:d,children:"Simple"})]})]}),n.jsx("div",{className:"operation-group",children:n.jsxs("div",{className:"btn-group",children:[n.jsxs("button",{onClick:v,className:"btn btn-bfs",disabled:d&&!m,children:[n.jsx(Je,{size:14})," Run Sort"]}),d&&n.jsx("button",{onClick:A,className:"btn btn-pause",children:m?n.jsx(Je,{size:14}):n.jsx(pr,{size:14})}),m&&n.jsx("button",{onClick:L,className:"btn btn-step",children:n.jsx(mr,{size:14})}),n.jsx("button",{onClick:F,className:"btn btn-reset",children:n.jsx(ut,{size:14})})]})}),Object.keys(i).length>0&&n.jsxs("div",{className:"distance-table",children:[n.jsx("h3",{children:"In-Degrees"}),n.jsx("div",{className:"distance-grid",children:e.vertices.map(O=>n.jsxs("div",{className:`distance-item ${k.has(O)?"visited":""} ${y===O?"current":""}`,children:[n.jsx("span",{className:"vertex-label",children:O}),n.jsx("span",{className:"distance-value",children:i[O]??"-"})]},O))})]}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Vertices:"}),n.jsx("span",{className:"info-value",children:e.vertex_count||e.vertices.length})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Edges:"}),n.jsx("span",{className:"info-value",children:e.edge_count||0})]}),g.length>0&&n.jsxs("div",{className:"info-item queue-display",children:[n.jsx("span",{className:"info-label",children:"Queue:"}),n.jsxs("span",{className:"info-value queue-items",children:["[",g.join(", "),"]"]})]}),r.length>0&&!d&&n.jsxs("div",{className:"info-item traversal-result",children:[n.jsx("span",{className:"info-label",children:"Order:"}),n.jsx("span",{className:"info-value",children:r.join(" → ")})]})]}),c>=0&&n.jsxs("div",{className:"current-step-box",children:[n.jsxs("strong",{children:["Step ",c+1,":"]}),n.jsx("p",{children:B()})]}),n.jsx($e,{message:D}),_&&n.jsxs("div",{className:"warning-box",children:[n.jsx("strong",{children:"Cycle Detected!"}),n.jsx("p",{children:"Topological sort is only possible on Directed Acyclic Graphs (DAGs)."})]}),n.jsxs("div",{className:"legend",children:[n.jsx("h3",{children:"Legend"}),n.jsxs("div",{className:"legend-items",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color unvisited"}),n.jsx("span",{children:"Unprocessed"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color queued"}),n.jsx("span",{children:"In Queue (in-degree 0)"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color current"}),n.jsx("span",{children:"Current"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color visited"}),n.jsx("span",{children:"Processed"})]})]})]})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Visualization"}),n.jsx("div",{className:"graph-container",children:e.vertices.length===0?n.jsx("div",{className:"graph-empty",children:"Loading graph..."}):n.jsxs("svg",{className:"graph-svg",viewBox:"0 0 500 350",children:[e.edges.map(([O,M,P],b)=>{const q=z[O],G=z[M];if(!q||!G)return null;const Y=G.x-q.x,ee=G.y-q.y,K=Math.sqrt(Y*Y+ee*ee),X=Y/K,oe=ee/K,re=q.x+X*25,be=q.y+oe*25,ce=G.x-X*30,Cn=G.y-oe*30;return n.jsxs("g",{children:[n.jsx("defs",{children:n.jsx("marker",{id:`arrowhead-${b}`,markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:n.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#64748b"})})}),n.jsx("line",{x1:re,y1:be,x2:ce,y2:Cn,className:"graph-edge",markerEnd:`url(#arrowhead-${b})`})]},`edge-${b}`)}),e.vertices.map(O=>{const M=z[O];return M?n.jsxs("g",{className:V(O),children:[n.jsx("circle",{cx:M.x,cy:M.y,r:25,className:"node-circle"}),n.jsx("text",{x:M.x,y:M.y,className:"node-label",dominantBaseline:"central",textAnchor:"middle",children:O}),i[O]!==void 0&&n.jsxs("text",{x:M.x,y:M.y+38,className:"distance-label",dominantBaseline:"central",textAnchor:"middle",children:["in=",i[O]]})]},O):null})]})}),n.jsxs("div",{className:"algorithm-steps",children:[n.jsx("h3",{children:"Kahn's Algorithm Steps"}),n.jsx("div",{className:"steps-content",children:n.jsxs("ol",{children:[n.jsx("li",{className:c===0?"active":"",children:"Calculate in-degree for all vertices"}),n.jsx("li",{className:g.length>0?"active":"",children:"Add vertices with in-degree 0 to queue"}),n.jsx("li",{className:y?"active":"",children:"Dequeue vertex and add to result"}),n.jsx("li",{children:"Decrement in-degree of neighbors"}),n.jsx("li",{children:"Add neighbors with in-degree 0 to queue"}),n.jsx("li",{children:"Repeat until queue is empty"})]})})]})]})]}),n.jsx(ye,{dataStructure:"topological"})]})}function f0(){const[e,t]=p.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=p.useState(""),[i,a]=p.useState({}),[l,o]=p.useState({}),[c,u]=p.useState([]),[d,h]=p.useState(-1),[m,w]=p.useState(0),[k,N]=p.useState(!1),[y,f]=p.useState(!1),[g,x]=p.useState(null),[_,j]=p.useState(null),[z,C]=p.useState(!1),[D,$]=p.useState({}),{message:R,showMessage:H}=Be(3e3),W=p.useRef(null),E=p.useRef(0);p.useEffect(()=>{v()},[]),p.useEffect(()=>{e.vertices.length>0&&I()},[e.vertices]);const I=p.useCallback(()=>{const ee=Math.min(500,350)*.35,K={},X=e.vertices.length;e.vertices.forEach((oe,re)=>{const be=2*Math.PI*re/X-Math.PI/2;K[oe]={x:250+ee*Math.cos(be),y:175+ee*Math.sin(be)}}),$(K)},[e.vertices]),v=async()=>{try{const b=await le("/api/graph");b.vertices.length===0?await T("weighted"):t(b)}catch(b){console.error("Error loading graph:",b)}},T=async b=>{try{const q=await ne(`/api/graph/preset/${b}`,{});if(q.error){H(q.error,"error");return}t(q),B(),H(`Loaded '${b}' preset`,"success")}catch{H("Error loading preset","error")}},A=async()=>{if(!r){H("Please select a start vertex!","error");return}try{const b=await le(`/api/graph/bellman-ford/${r}`);if(b.error){H(b.error,"error");return}a(b.distances),o(b.paths),u(b.steps),C(b.has_negative_cycle),b.has_negative_cycle?H("Negative cycle detected in graph!","error"):H("Starting Bellman-Ford algorithm...","info"),S(b.steps)}catch{H("Error running Bellman-Ford algorithm","error")}},S=b=>{W.current&&clearInterval(W.current),N(!0),f(!1),x(null),j(null),w(0),h(-1),E.current=0,W.current=setInterval(()=>{if(E.current>=b.length){clearInterval(W.current),N(!1),x(null),j(null),z||H("Bellman-Ford algorithm complete!","success");return}const q=b[E.current];h(E.current),a(q.distances||{}),q.iteration&&w(q.iteration),q.action==="check"?(x({from:q.from,to:q.to}),j(null)):q.action==="update"?(x({from:q.from,to:q.to}),j(q.to)):q.action==="negative_cycle"?x({from:q.from,to:q.to}):(x(null),j(null)),E.current++},800)},L=()=>{y?(f(!1),F()):(f(!0),W.current&&clearInterval(W.current))},F=()=>{W.current&&clearInterval(W.current),W.current=setInterval(()=>{if(E.current>=c.length){clearInterval(W.current),N(!1),x(null),j(null);return}const b=c[E.current];h(E.current),a(b.distances||{}),b.iteration&&w(b.iteration),b.action==="check"?(x({from:b.from,to:b.to}),j(null)):b.action==="update"?(x({from:b.from,to:b.to}),j(b.to)):(x(null),j(null)),E.current++},800)},V=()=>{if(E.current>=c.length)return;const b=c[E.current];h(E.current),a(b.distances||{}),b.iteration&&w(b.iteration),b.action==="check"?(x({from:b.from,to:b.to}),j(null)):b.action==="update"?(x({from:b.from,to:b.to}),j(b.to)):(x(null),j(null)),E.current++,E.current>=c.length&&(N(!1),x(null),j(null))},B=()=>{W.current&&clearInterval(W.current),a({}),o({}),u([]),h(-1),w(0),x(null),j(null),C(!1),N(!1),f(!1),E.current=0},O=b=>_===b?"graph-node current":b===r&&!k&&Object.keys(i).length>0?"graph-node visited":"graph-node",M=(b,q)=>g&&(g.from===b&&g.to===q||g.from===q&&g.to===b)?"graph-edge checking":"graph-edge",P=()=>d>=0&&d<c.length?c[d].message:"";return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Oe,{className:"icon-sm"}),n.jsx("span",{children:"What is Bellman-Ford Algorithm?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"Bellman-Ford Algorithm"})," finds shortest paths from a source vertex, even with negative edge weights. It can also detect negative cycles."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(Ne,{}),n.jsx("span",{children:"Unlike Dijkstra, it checks ALL edges V-1 times - slower but handles negative weights!"})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Time"}),n.jsx("span",{className:"op-desc",children:"V-1 iterations"}),n.jsx("span",{className:"op-complexity",children:"O(V*E)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Space"}),n.jsx("span",{className:"op-desc",children:"Distance array"}),n.jsx("span",{className:"op-complexity",children:"O(V)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Feature"}),n.jsx("span",{className:"op-desc",children:"Negative weights"}),n.jsx("span",{className:"op-complexity",children:"Supported"})]})]}),n.jsxs("div",{className:"concept-uses",children:[n.jsx("strong",{children:"Common Uses:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Currency exchange arbitrage detection"}),n.jsx("li",{children:"Network routing (RIP protocol)"}),n.jsx("li",{children:"Graphs with negative weights"}),n.jsx("li",{children:"Detecting negative cycles"})]})]})]})]}),n.jsx(me,{context:"Bellman-Ford shortest path algorithm with negative weight handling"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Bellman-Ford Algorithm"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Load Preset"}),n.jsxs("div",{className:"btn-group preset-group",children:[n.jsx("button",{onClick:()=>T("weighted"),className:"btn btn-preset",disabled:k,children:"Weighted"}),n.jsx("button",{onClick:()=>T("simple"),className:"btn btn-preset",disabled:k,children:"Simple"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Start Vertex"}),n.jsxs("select",{value:r,onChange:b=>s(b.target.value),className:"vertex-select full-width",disabled:k,children:[n.jsx("option",{value:"",children:"Select start"}),e.vertices.map(b=>n.jsx("option",{value:b,children:b},b))]})]}),n.jsx("div",{className:"operation-group",children:n.jsxs("div",{className:"btn-group",children:[n.jsxs("button",{onClick:A,className:"btn btn-dijkstra",disabled:k&&!y,children:[n.jsx(Je,{size:14})," Run"]}),k&&n.jsx("button",{onClick:L,className:"btn btn-pause",children:y?n.jsx(Je,{size:14}):n.jsx(pr,{size:14})}),y&&n.jsx("button",{onClick:V,className:"btn btn-step",children:n.jsx(mr,{size:14})}),n.jsx("button",{onClick:B,className:"btn btn-reset",children:n.jsx(ut,{size:14})})]})}),m>0&&n.jsx("div",{className:"info-panel",children:n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Iteration:"}),n.jsxs("span",{className:"info-value",children:[m," / ",e.vertices.length-1]})]})}),Object.keys(i).length>0&&n.jsxs("div",{className:"distance-table",children:[n.jsxs("h3",{children:["Distances from ",r]}),n.jsx("div",{className:"distance-grid",children:e.vertices.map(b=>n.jsxs("div",{className:`distance-item ${_===b?"current":""}`,children:[n.jsx("span",{className:"vertex-label",children:b}),n.jsx("span",{className:"distance-value",children:i[b]==="inf"||i[b]===null?"∞":i[b]})]},b))})]}),d>=0&&n.jsxs("div",{className:"current-step-box",children:[n.jsxs("strong",{children:["Step ",d+1,":"]}),n.jsx("p",{children:P()})]}),n.jsx($e,{message:R}),z&&n.jsxs("div",{className:"warning-box",children:[n.jsx("strong",{children:"Negative Cycle Detected!"}),n.jsx("p",{children:"The graph contains a negative weight cycle. Shortest paths are undefined."})]}),n.jsxs("div",{className:"legend",children:[n.jsx("h3",{children:"Legend"}),n.jsxs("div",{className:"legend-items",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color unvisited"}),n.jsx("span",{children:"Unprocessed"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color current"}),n.jsx("span",{children:"Updated"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color checking"}),n.jsx("span",{children:"Checking Edge"})]})]})]})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Visualization"}),n.jsx("div",{className:"graph-container",children:e.vertices.length===0?n.jsx("div",{className:"graph-empty",children:"Loading graph..."}):n.jsxs("svg",{className:"graph-svg",viewBox:"0 0 500 350",children:[e.edges.map(([b,q,G],Y)=>{const ee=D[b],K=D[q];if(!ee||!K)return null;const X=(ee.x+K.x)/2,oe=(ee.y+K.y)/2;return n.jsxs("g",{children:[n.jsx("line",{x1:ee.x,y1:ee.y,x2:K.x,y2:K.y,className:M(b,q)}),n.jsx("circle",{cx:X,cy:oe,r:12,className:"weight-bg"}),n.jsx("text",{x:X,y:oe,className:"weight-label",dominantBaseline:"central",textAnchor:"middle",children:G})]},`edge-${Y}`)}),e.vertices.map(b=>{const q=D[b];return q?n.jsxs("g",{className:O(b),children:[n.jsx("circle",{cx:q.x,cy:q.y,r:25,className:"node-circle"}),n.jsx("text",{x:q.x,y:q.y,className:"node-label",dominantBaseline:"central",textAnchor:"middle",children:b}),i[b]!==void 0&&n.jsxs("text",{x:q.x,y:q.y+38,className:"distance-label",dominantBaseline:"central",textAnchor:"middle",children:["d=",i[b]==="inf"||i[b]===null?"∞":i[b]]})]},b):null})]})}),n.jsxs("div",{className:"algorithm-steps",children:[n.jsx("h3",{children:"Bellman-Ford vs Dijkstra"}),n.jsxs("div",{className:"comparison-table",children:[n.jsxs("div",{className:"comparison-row header",children:[n.jsx("span",{children:"Feature"}),n.jsx("span",{children:"Bellman-Ford"}),n.jsx("span",{children:"Dijkstra"})]}),n.jsxs("div",{className:"comparison-row",children:[n.jsx("span",{children:"Time Complexity"}),n.jsx("span",{children:"O(V*E)"}),n.jsx("span",{children:"O((V+E)logV)"})]}),n.jsxs("div",{className:"comparison-row",children:[n.jsx("span",{children:"Negative Weights"}),n.jsx("span",{className:"yes",children:"Yes"}),n.jsx("span",{className:"no",children:"No"})]}),n.jsxs("div",{className:"comparison-row",children:[n.jsx("span",{children:"Detects Neg. Cycles"}),n.jsx("span",{className:"yes",children:"Yes"}),n.jsx("span",{className:"no",children:"No"})]})]})]}),Object.keys(l).length>0&&!k&&!z&&n.jsxs("div",{className:"paths-section",children:[n.jsxs("h3",{children:["Shortest Paths from ",r]}),n.jsx("div",{className:"paths-list",children:Object.entries(l).map(([b,q])=>n.jsxs("div",{className:"path-item",children:[n.jsxs("span",{className:"path-target",children:[b,":"]}),n.jsx("span",{className:"path-route",children:q.join(" → ")}),n.jsxs("span",{className:"path-distance",children:["(dist: ",i[b]===null?"∞":i[b],")"]})]},b))})]})]})]}),n.jsx(ye,{dataStructure:"bellman-ford"})]})}function m0(){const[e,t]=p.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=p.useState([]),[i,a]=p.useState([]),[l,o]=p.useState(0),[c,u]=p.useState([]),[d,h]=p.useState([]),[m,w]=p.useState(-1),[k,N]=p.useState(!1),[y,f]=p.useState(!1),[g,x]=p.useState(null),[_,j]=p.useState({}),{message:z,showMessage:C}=Be(3e3),D=p.useRef(null),$=p.useRef(0);p.useEffect(()=>{H()},[]),p.useEffect(()=>{e.vertices.length>0&&R()},[e.vertices]);const R=p.useCallback(()=>{const G=Math.min(500,350)*.35,Y={},ee=e.vertices.length;e.vertices.forEach((K,X)=>{const oe=2*Math.PI*X/ee-Math.PI/2;Y[K]={x:250+G*Math.cos(oe),y:175+G*Math.sin(oe)}}),j(Y)},[e.vertices]),H=async()=>{try{const M=await le("/api/graph");M.vertices.length===0?await W("weighted"):t(M)}catch(M){console.error("Error loading graph:",M)}},W=async M=>{try{const P=await ne(`/api/graph/preset/${M}`,{});if(P.error){C(P.error,"error");return}t(P),S(),C(`Loaded '${M}' preset`,"success")}catch{C("Error loading preset","error")}},E=async()=>{try{const M=await le("/api/graph/kruskal");if(M.error){C(M.error,"error");return}h(M.steps);const P=M.steps.find(b=>b.action==="init");P&&u(P.edges_sorted||[]),C("Starting Kruskal's MST algorithm...","info"),I(M.steps,M.mst_edges,M.total_weight)}catch{C("Error running Kruskal's algorithm","error")}},I=(M,P,b)=>{D.current&&clearInterval(D.current),N(!0),f(!1),s([]),a([]),o(0),x(null),w(-1),$.current=0,D.current=setInterval(()=>{if($.current>=M.length){clearInterval(D.current),N(!1),x(null),s(P),o(b),C(`MST complete! Total weight: ${b}`,"success");return}const q=M[$.current];w($.current),s(q.mst_edges||[]),o(q.total_weight||0),q.action==="consider"?x({from:q.from,to:q.to,weight:q.weight}):(q.action==="add"||q.action==="reject"&&a(G=>[...G,{from:q.from,to:q.to,weight:q.weight}]),x(null)),$.current++},1e3)},v=()=>{y?(f(!1),T()):(f(!0),D.current&&clearInterval(D.current))},T=()=>{D.current&&clearInterval(D.current),D.current=setInterval(()=>{if($.current>=d.length){clearInterval(D.current),N(!1),x(null);return}const M=d[$.current];w($.current),s(M.mst_edges||[]),o(M.total_weight||0),M.action==="consider"?x({from:M.from,to:M.to,weight:M.weight}):(M.action==="add"||M.action==="reject"&&a(P=>[...P,{from:M.from,to:M.to,weight:M.weight}]),x(null)),$.current++},1e3)},A=()=>{if($.current>=d.length)return;const M=d[$.current];w($.current),s(M.mst_edges||[]),o(M.total_weight||0),M.action==="consider"?x({from:M.from,to:M.to,weight:M.weight}):(M.action==="add"||M.action==="reject"&&a(P=>[...P,{from:M.from,to:M.to,weight:M.weight}]),x(null)),$.current++,$.current>=d.length&&(N(!1),x(null))},S=()=>{D.current&&clearInterval(D.current),s([]),a([]),o(0),u([]),h([]),w(-1),x(null),N(!1),f(!1),$.current=0},L=(M,P)=>r.some(([b,q])=>b===M&&q===P||b===P&&q===M),F=(M,P)=>i.some(b=>b.from===M&&b.to===P||b.from===P&&b.to===M),V=M=>r.some(([b,q])=>b===M||q===M)?"graph-node visited":"graph-node",B=(M,P)=>g&&(g.from===M&&g.to===P||g.from===P&&g.to===M)?"graph-edge considering":L(M,P)?"graph-edge mst":F(M,P)?"graph-edge rejected":"graph-edge",O=()=>m>=0&&m<d.length?d[m].message:"";return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Oe,{className:"icon-sm"}),n.jsx("span",{children:"What is Kruskal's Algorithm?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"Kruskal's Algorithm"})," builds the MST by sorting all edges by weight and adding them if they don't create a cycle (using Union-Find)."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(Ne,{}),n.jsx("span",{children:"Like building a network by always picking the cheapest cable that connects new areas!"})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Time"}),n.jsx("span",{className:"op-desc",children:"Sort + Union-Find"}),n.jsx("span",{className:"op-complexity",children:"O(E log E)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Space"}),n.jsx("span",{className:"op-desc",children:"Union-Find array"}),n.jsx("span",{className:"op-complexity",children:"O(V)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Strategy"}),n.jsx("span",{className:"op-desc",children:"Global greedy"}),n.jsx("span",{className:"op-complexity",children:"Min edge"})]})]}),n.jsxs("div",{className:"concept-uses",children:[n.jsx("strong",{children:"Kruskal vs Prim:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Better for sparse graphs (fewer edges)"}),n.jsx("li",{children:"Processes edges globally, not locally"}),n.jsx("li",{children:"Uses Union-Find for cycle detection"}),n.jsx("li",{children:"Easier to parallelize"})]})]})]})]}),n.jsx(me,{context:"Kruskal's Minimum Spanning Tree algorithm with Union-Find"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Kruskal's MST Algorithm"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Load Preset"}),n.jsxs("div",{className:"btn-group preset-group",children:[n.jsx("button",{onClick:()=>W("weighted"),className:"btn btn-preset",disabled:k,children:"Weighted"}),n.jsx("button",{onClick:()=>W("complete"),className:"btn btn-preset",disabled:k,children:"Complete"})]})]}),n.jsx("div",{className:"operation-group",children:n.jsxs("div",{className:"btn-group",children:[n.jsxs("button",{onClick:E,className:"btn btn-mst",disabled:k&&!y,children:[n.jsx(Je,{size:14})," Run Kruskal's"]}),k&&n.jsx("button",{onClick:v,className:"btn btn-pause",children:y?n.jsx(Je,{size:14}):n.jsx(pr,{size:14})}),y&&n.jsx("button",{onClick:A,className:"btn btn-step",children:n.jsx(mr,{size:14})}),n.jsx("button",{onClick:S,className:"btn btn-reset",children:n.jsx(ut,{size:14})})]})}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"MST Edges:"}),n.jsxs("span",{className:"info-value",children:[r.length," / ",e.vertices.length-1]})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Total Weight:"}),n.jsx("span",{className:"info-value mst-weight",children:l})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Rejected:"}),n.jsx("span",{className:"info-value",children:i.length})]})]}),c.length>0&&n.jsxs("div",{className:"sorted-edges-panel",children:[n.jsx("h3",{children:"Edges (sorted by weight)"}),n.jsx("div",{className:"sorted-edges-list",children:c.map(([M,P,b],q)=>{const G=L(M,P),Y=F(M,P);return n.jsxs("div",{className:`sorted-edge-item ${G?"in-mst":""} ${Y?"rejected":""}`,children:[n.jsxs("span",{children:[M,"—",P]}),n.jsxs("span",{className:"edge-weight",children:["w=",b]})]},q)})})]}),m>=0&&n.jsxs("div",{className:"current-step-box",children:[n.jsxs("strong",{children:["Step ",m+1,":"]}),n.jsx("p",{children:O()})]}),n.jsx($e,{message:z}),n.jsxs("div",{className:"legend",children:[n.jsx("h3",{children:"Legend"}),n.jsxs("div",{className:"legend-items",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color unvisited"}),n.jsx("span",{children:"Unconnected"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color visited"}),n.jsx("span",{children:"In MST"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-line considering"}),n.jsx("span",{children:"Considering"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-line mst"}),n.jsx("span",{children:"MST Edge"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-line rejected"}),n.jsx("span",{children:"Rejected (cycle)"})]})]})]})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Visualization"}),n.jsx("div",{className:"graph-container",children:e.vertices.length===0?n.jsx("div",{className:"graph-empty",children:"Loading graph..."}):n.jsxs("svg",{className:"graph-svg",viewBox:"0 0 500 350",children:[e.edges.map(([M,P,b],q)=>{const G=_[M],Y=_[P];if(!G||!Y)return null;const ee=(G.x+Y.x)/2,K=(G.y+Y.y)/2;return n.jsxs("g",{children:[n.jsx("line",{x1:G.x,y1:G.y,x2:Y.x,y2:Y.y,className:B(M,P)}),n.jsx("circle",{cx:ee,cy:K,r:12,className:"weight-bg"}),n.jsx("text",{x:ee,y:K,className:"weight-label",dominantBaseline:"central",textAnchor:"middle",children:b})]},`edge-${q}`)}),e.vertices.map(M=>{const P=_[M];return P?n.jsxs("g",{className:V(M),children:[n.jsx("circle",{cx:P.x,cy:P.y,r:25,className:"node-circle"}),n.jsx("text",{x:P.x,y:P.y,className:"node-label",dominantBaseline:"central",textAnchor:"middle",children:M})]},M):null})]})}),n.jsxs("div",{className:"algorithm-steps",children:[n.jsx("h3",{children:"Kruskal vs Prim"}),n.jsxs("div",{className:"comparison-table",children:[n.jsxs("div",{className:"comparison-row header",children:[n.jsx("span",{children:"Feature"}),n.jsx("span",{children:"Kruskal's"}),n.jsx("span",{children:"Prim's"})]}),n.jsxs("div",{className:"comparison-row",children:[n.jsx("span",{children:"Time Complexity"}),n.jsx("span",{children:"O(E log E)"}),n.jsx("span",{children:"O((V+E)logV)"})]}),n.jsxs("div",{className:"comparison-row",children:[n.jsx("span",{children:"Best for"}),n.jsx("span",{children:"Sparse graphs"}),n.jsx("span",{children:"Dense graphs"})]}),n.jsxs("div",{className:"comparison-row",children:[n.jsx("span",{children:"Data Structure"}),n.jsx("span",{children:"Union-Find"}),n.jsx("span",{children:"Priority Queue"})]}),n.jsxs("div",{className:"comparison-row",children:[n.jsx("span",{children:"Strategy"}),n.jsx("span",{children:"Global (all edges)"}),n.jsx("span",{children:"Local (neighbors)"})]})]})]}),r.length>0&&n.jsxs("div",{className:"mst-edges-section",children:[n.jsx("h3",{children:"MST Edges"}),n.jsx("div",{className:"mst-edges-list",children:r.map(([M,P,b],q)=>n.jsxs("div",{className:"mst-edge-item",children:[n.jsxs("span",{children:[M," — ",P]}),n.jsxs("span",{className:"edge-weight",children:["(w: ",b,")"]})]},q))}),n.jsx("div",{className:"mst-total",children:n.jsxs("strong",{children:["Total MST Weight: ",l]})})]})]})]}),n.jsx(ye,{dataStructure:"kruskal"})]})}function Yc(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,s=Array(t);r<t;r++)s[r]=e[r];return s}function g0(e){if(Array.isArray(e))return e}function x0(e,t,r){return(t=b0(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v0(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var s,i,a,l,o=[],c=!0,u=!1;try{if(a=(r=r.call(e)).next,t!==0)for(;!(c=(s=a.call(r)).done)&&(o.push(s.value),o.length!==t);c=!0);}catch(d){u=!0,i=d}finally{try{if(!c&&r.return!=null&&(l=r.return(),Object(l)!==l))return}finally{if(u)throw i}}return o}}function y0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Jc(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,s)}return r}function Zc(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Jc(Object(r),!0).forEach(function(s){x0(e,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Jc(Object(r)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(r,s))})}return e}function j0(e,t){if(e==null)return{};var r,s,i=N0(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function N0(e,t){if(e==null)return{};var r={};for(var s in e)if({}.hasOwnProperty.call(e,s)){if(t.indexOf(s)!==-1)continue;r[s]=e[s]}return r}function k0(e,t){return g0(e)||v0(e,t)||S0(e,t)||y0()}function w0(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var s=r.call(e,t);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function b0(e){var t=w0(e,"string");return typeof t=="symbol"?t:t+""}function S0(e,t){if(e){if(typeof e=="string")return Yc(e,t);var r={}.toString.call(e).slice(8,-1);return r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set"?Array.from(e):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Yc(e,t):void 0}}function C0(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ed(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,s)}return r}function nd(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?ed(Object(r),!0).forEach(function(s){C0(e,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ed(Object(r)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(r,s))})}return e}function T0(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(s){return t.reduceRight(function(i,a){return a(i)},s)}}function Lr(e){return function t(){for(var r=this,s=arguments.length,i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];return i.length>=e.length?e.apply(this,i):function(){for(var l=arguments.length,o=new Array(l),c=0;c<l;c++)o[c]=arguments[c];return t.apply(r,[].concat(i,o))}}}function ji(e){return{}.toString.call(e).includes("Object")}function _0(e){return!Object.keys(e).length}function is(e){return typeof e=="function"}function L0(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function E0(e,t){return ji(t)||st("changeType"),Object.keys(t).some(function(r){return!L0(e,r)})&&st("changeField"),t}function O0(e){is(e)||st("selectorType")}function R0(e){is(e)||ji(e)||st("handlerType"),ji(e)&&Object.values(e).some(function(t){return!is(t)})&&st("handlersType")}function P0(e){e||st("initialIsRequired"),ji(e)||st("initialType"),_0(e)&&st("initialContent")}function I0(e,t){throw new Error(e[t]||e.default)}var M0={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},st=Lr(I0)(M0),Os={changes:E0,selector:O0,handler:R0,initial:P0};function z0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Os.initial(e),Os.handler(t);var r={current:e},s=Lr(V0)(r,t),i=Lr(A0)(r),a=Lr(Os.changes)(e),l=Lr(F0)(r);function o(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(d){return d};return Os.selector(u),u(r.current)}function c(u){T0(s,i,a,l)(u)}return[o,c]}function F0(e,t){return is(t)?t(e.current):t}function A0(e,t){return e.current=nd(nd({},e.current),t),t}function V0(e,t,r){return is(t)?t(e.current):Object.keys(r).forEach(function(s){var i;return(i=t[s])===null||i===void 0?void 0:i.call(t,e.current[s])}),r}var D0={create:z0},$0={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function B0(e){return function t(){for(var r=this,s=arguments.length,i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];return i.length>=e.length?e.apply(this,i):function(){for(var l=arguments.length,o=new Array(l),c=0;c<l;c++)o[c]=arguments[c];return t.apply(r,[].concat(i,o))}}}function H0(e){return{}.toString.call(e).includes("Object")}function q0(e){return e||td("configIsRequired"),H0(e)||td("configType"),e.urls?(U0(),{paths:{vs:e.urls.monacoBase}}):e}function U0(){console.warn(qh.deprecation)}function K0(e,t){throw new Error(e[t]||e.default)}var qh={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},td=B0(K0)(qh),W0={config:q0},G0=function(){for(var t=arguments.length,r=new Array(t),s=0;s<t;s++)r[s]=arguments[s];return function(i){return r.reduceRight(function(a,l){return l(a)},i)}};function Uh(e,t){return Object.keys(t).forEach(function(r){t[r]instanceof Object&&e[r]&&Object.assign(t[r],Uh(e[r],t[r]))}),Zc(Zc({},e),t)}var Q0={type:"cancelation",msg:"operation is manually canceled"};function fa(e){var t=!1,r=new Promise(function(s,i){e.then(function(a){return t?i(Q0):s(a)}),e.catch(i)});return r.cancel=function(){return t=!0},r}var X0=["monaco"],Y0=D0.create({config:$0,isInitialized:!1,resolve:null,reject:null,monaco:null}),Kh=k0(Y0,2),ps=Kh[0],Ai=Kh[1];function J0(e){var t=W0.config(e),r=t.monaco,s=j0(t,X0);Ai(function(i){return{config:Uh(i.config,s),monaco:r}})}function Z0(){var e=ps(function(t){var r=t.monaco,s=t.isInitialized,i=t.resolve;return{monaco:r,isInitialized:s,resolve:i}});if(!e.isInitialized){if(Ai({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),fa(ma);if(window.monaco&&window.monaco.editor)return Wh(window.monaco),e.resolve(window.monaco),fa(ma);G0(eN,tN)(rN)}return fa(ma)}function eN(e){return document.body.appendChild(e)}function nN(e){var t=document.createElement("script");return e&&(t.src=e),t}function tN(e){var t=ps(function(s){var i=s.config,a=s.reject;return{config:i,reject:a}}),r=nN("".concat(t.config.paths.vs,"/loader.js"));return r.onload=function(){return e()},r.onerror=t.reject,r}function rN(){var e=ps(function(r){var s=r.config,i=r.resolve,a=r.reject;return{config:s,resolve:i,reject:a}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(r){var s=r.m||r;Wh(s),e.resolve(s)},function(r){e.reject(r)})}function Wh(e){ps().monaco||Ai({monaco:e})}function sN(){return ps(function(e){var t=e.monaco;return t})}var ma=new Promise(function(e,t){return Ai({resolve:e,reject:t})}),Gh={config:J0,init:Z0,__getMonacoInstance:sN},iN={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},ga=iN,aN={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},lN=aN;function oN({children:e}){return Pe.createElement("div",{style:lN.container},e)}var cN=oN,dN=cN;function uN({width:e,height:t,isEditorReady:r,loading:s,_ref:i,className:a,wrapperProps:l}){return Pe.createElement("section",{style:{...ga.wrapper,width:e,height:t},...l},!r&&Pe.createElement(dN,null,s),Pe.createElement("div",{ref:i,style:{...ga.fullWidth,...!r&&ga.hide},className:a}))}var hN=uN,Qh=p.memo(hN);function pN(e){p.useEffect(e,[])}var Xh=pN;function fN(e,t,r=!0){let s=p.useRef(!0);p.useEffect(s.current||!r?()=>{s.current=!1}:e,t)}var en=fN;function Vr(){}function Qt(e,t,r,s){return mN(e,s)||gN(e,t,r,s)}function mN(e,t){return e.editor.getModel(Yh(e,t))}function gN(e,t,r,s){return e.editor.createModel(t,r,s?Yh(e,s):void 0)}function Yh(e,t){return e.Uri.parse(t)}function xN({original:e,modified:t,language:r,originalLanguage:s,modifiedLanguage:i,originalModelPath:a,modifiedModelPath:l,keepCurrentOriginalModel:o=!1,keepCurrentModifiedModel:c=!1,theme:u="light",loading:d="Loading...",options:h={},height:m="100%",width:w="100%",className:k,wrapperProps:N={},beforeMount:y=Vr,onMount:f=Vr}){let[g,x]=p.useState(!1),[_,j]=p.useState(!0),z=p.useRef(null),C=p.useRef(null),D=p.useRef(null),$=p.useRef(f),R=p.useRef(y),H=p.useRef(!1);Xh(()=>{let v=Gh.init();return v.then(T=>(C.current=T)&&j(!1)).catch(T=>(T==null?void 0:T.type)!=="cancelation"&&console.error("Monaco initialization: error:",T)),()=>z.current?I():v.cancel()}),en(()=>{if(z.current&&C.current){let v=z.current.getOriginalEditor(),T=Qt(C.current,e||"",s||r||"text",a||"");T!==v.getModel()&&v.setModel(T)}},[a],g),en(()=>{if(z.current&&C.current){let v=z.current.getModifiedEditor(),T=Qt(C.current,t||"",i||r||"text",l||"");T!==v.getModel()&&v.setModel(T)}},[l],g),en(()=>{let v=z.current.getModifiedEditor();v.getOption(C.current.editor.EditorOption.readOnly)?v.setValue(t||""):t!==v.getValue()&&(v.executeEdits("",[{range:v.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),v.pushUndoStop())},[t],g),en(()=>{var v,T;(T=(v=z.current)==null?void 0:v.getModel())==null||T.original.setValue(e||"")},[e],g),en(()=>{let{original:v,modified:T}=z.current.getModel();C.current.editor.setModelLanguage(v,s||r||"text"),C.current.editor.setModelLanguage(T,i||r||"text")},[r,s,i],g),en(()=>{var v;(v=C.current)==null||v.editor.setTheme(u)},[u],g),en(()=>{var v;(v=z.current)==null||v.updateOptions(h)},[h],g);let W=p.useCallback(()=>{var A;if(!C.current)return;R.current(C.current);let v=Qt(C.current,e||"",s||r||"text",a||""),T=Qt(C.current,t||"",i||r||"text",l||"");(A=z.current)==null||A.setModel({original:v,modified:T})},[r,t,i,e,s,a,l]),E=p.useCallback(()=>{var v;!H.current&&D.current&&(z.current=C.current.editor.createDiffEditor(D.current,{automaticLayout:!0,...h}),W(),(v=C.current)==null||v.editor.setTheme(u),x(!0),H.current=!0)},[h,u,W]);p.useEffect(()=>{g&&$.current(z.current,C.current)},[g]),p.useEffect(()=>{!_&&!g&&E()},[_,g,E]);function I(){var T,A,S,L;let v=(T=z.current)==null?void 0:T.getModel();o||((A=v==null?void 0:v.original)==null||A.dispose()),c||((S=v==null?void 0:v.modified)==null||S.dispose()),(L=z.current)==null||L.dispose()}return Pe.createElement(Qh,{width:w,height:m,isEditorReady:g,loading:d,_ref:D,className:k,wrapperProps:N})}var vN=xN;p.memo(vN);function yN(e){let t=p.useRef();return p.useEffect(()=>{t.current=e},[e]),t.current}var jN=yN,Rs=new Map;function NN({defaultValue:e,defaultLanguage:t,defaultPath:r,value:s,language:i,path:a,theme:l="light",line:o,loading:c="Loading...",options:u={},overrideServices:d={},saveViewState:h=!0,keepCurrentModel:m=!1,width:w="100%",height:k="100%",className:N,wrapperProps:y={},beforeMount:f=Vr,onMount:g=Vr,onChange:x,onValidate:_=Vr}){let[j,z]=p.useState(!1),[C,D]=p.useState(!0),$=p.useRef(null),R=p.useRef(null),H=p.useRef(null),W=p.useRef(g),E=p.useRef(f),I=p.useRef(),v=p.useRef(s),T=jN(a),A=p.useRef(!1),S=p.useRef(!1);Xh(()=>{let V=Gh.init();return V.then(B=>($.current=B)&&D(!1)).catch(B=>(B==null?void 0:B.type)!=="cancelation"&&console.error("Monaco initialization: error:",B)),()=>R.current?F():V.cancel()}),en(()=>{var B,O,M,P;let V=Qt($.current,e||s||"",t||i||"",a||r||"");V!==((B=R.current)==null?void 0:B.getModel())&&(h&&Rs.set(T,(O=R.current)==null?void 0:O.saveViewState()),(M=R.current)==null||M.setModel(V),h&&((P=R.current)==null||P.restoreViewState(Rs.get(a))))},[a],j),en(()=>{var V;(V=R.current)==null||V.updateOptions(u)},[u],j),en(()=>{!R.current||s===void 0||(R.current.getOption($.current.editor.EditorOption.readOnly)?R.current.setValue(s):s!==R.current.getValue()&&(S.current=!0,R.current.executeEdits("",[{range:R.current.getModel().getFullModelRange(),text:s,forceMoveMarkers:!0}]),R.current.pushUndoStop(),S.current=!1))},[s],j),en(()=>{var B,O;let V=(B=R.current)==null?void 0:B.getModel();V&&i&&((O=$.current)==null||O.editor.setModelLanguage(V,i))},[i],j),en(()=>{var V;o!==void 0&&((V=R.current)==null||V.revealLine(o))},[o],j),en(()=>{var V;(V=$.current)==null||V.editor.setTheme(l)},[l],j);let L=p.useCallback(()=>{var V;if(!(!H.current||!$.current)&&!A.current){E.current($.current);let B=a||r,O=Qt($.current,s||e||"",t||i||"",B||"");R.current=(V=$.current)==null?void 0:V.editor.create(H.current,{model:O,automaticLayout:!0,...u},d),h&&R.current.restoreViewState(Rs.get(B)),$.current.editor.setTheme(l),o!==void 0&&R.current.revealLine(o),z(!0),A.current=!0}},[e,t,r,s,i,a,u,d,h,l,o]);p.useEffect(()=>{j&&W.current(R.current,$.current)},[j]),p.useEffect(()=>{!C&&!j&&L()},[C,j,L]),v.current=s,p.useEffect(()=>{var V,B;j&&x&&((V=I.current)==null||V.dispose(),I.current=(B=R.current)==null?void 0:B.onDidChangeModelContent(O=>{S.current||x(R.current.getValue(),O)}))},[j,x]),p.useEffect(()=>{if(j){let V=$.current.editor.onDidChangeMarkers(B=>{var M;let O=(M=R.current.getModel())==null?void 0:M.uri;if(O&&B.find(P=>P.path===O.path)){let P=$.current.editor.getModelMarkers({resource:O});_==null||_(P)}});return()=>{V==null||V.dispose()}}return()=>{}},[j,_]);function F(){var V,B;(V=I.current)==null||V.dispose(),m?h&&Rs.set(a,R.current.saveViewState()):(B=R.current.getModel())==null||B.dispose(),R.current.dispose()}return Pe.createElement(Qh,{width:w,height:k,isEditorReady:j,loading:c,_ref:H,className:N,wrapperProps:y})}var kN=NN,wN=p.memo(kN),bN=wN;const rd={python:{monacoLang:"python",defaultCode:`def solution(nums):
    # Write your solution here
    pass
`}};function SN({language:e,code:t,onChange:r,decorations:s=[],onEditorMount:i,theme:a="vs-dark"}){const l=rd[e]||rd.python,o=p.useRef(null),c=p.useRef(null),u=p.useRef([]),d=(w,k)=>{o.current=w,c.current=k,i&&i(w,k)};p.useEffect(()=>{if(o.current&&c.current){const w=o.current,k=c.current;if(u.current=w.deltaDecorations(u.current,[]),s.length>0){const N=s.map(y=>({range:new k.Range(y.startLine,1,y.endLine,1),options:{isWholeLine:!0,className:y.className||"ai-code-issue-highlight",glyphMarginClassName:y.glyphClassName||"ai-code-issue-glyph",hoverMessage:{value:y.hoverMessage}}}));u.current=w.deltaDecorations([],N)}}},[s]);const h=w=>{r(w||"")},m={minimap:{enabled:!1},fontSize:14,fontFamily:"'Fira Code', 'JetBrains Mono', Consolas, monospace",fontLigatures:!0,lineNumbers:"on",roundedSelection:!0,scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,wordWrap:"on",padding:{top:16,bottom:16},glyphMargin:!0,suggest:{showKeywords:!0,showSnippets:!0}};return n.jsx("div",{className:"code-editor-container",children:n.jsx(bN,{height:"400px",language:l.monacoLang,value:t,theme:a,onMount:d,onChange:h,options:m,loading:n.jsx("div",{className:"editor-loading",children:"Loading editor..."})})})}const xa=[{id:"arrays-hashing",title:"Arrays & Hashing",icon:"grid",color:"#10b981",description:"Foundation of DSA - array manipulation and hash maps",problems:["two-sum","valid-anagram","contains-duplicate","group-anagrams"]},{id:"two-pointers",title:"Two Pointers",icon:"pointer",color:"#3b82f6",description:"Efficient array traversal techniques",problems:["valid-palindrome","two-sum-sorted","container-with-most-water"]},{id:"stack",title:"Stack",icon:"layers",color:"#8b5cf6",description:"LIFO data structure problems",problems:["valid-parentheses","min-stack","evaluate-reverse-polish-notation"]},{id:"binary-search",title:"Binary Search",icon:"search",color:"#f59e0b",description:"Divide and conquer search technique",problems:["binary-search","search-rotated-array","find-minimum-in-rotated-sorted-array"]},{id:"linked-list",title:"Linked List",icon:"link",color:"#ec4899",description:"Pointer-based data structures",problems:["reverse-linked-list","merge-two-lists","linked-list-cycle","reorder-list"]},{id:"trees",title:"Trees",icon:"tree",color:"#14b8a6",description:"Hierarchical data structures",problems:["invert-tree","max-depth-tree","same-tree","kth-smallest-element-in-a-bst"]},{id:"graphs",title:"Graphs",icon:"network",color:"#6366f1",description:"Graph traversal and algorithms",problems:["bfs-traversal","dfs-traversal","number-of-islands"]},{id:"dynamic-programming",title:"Dynamic Programming",icon:"puzzle",color:"#ef4444",description:"Optimization through memoization",problems:["climbing-stairs","house-robber"]},{id:"sorting",title:"Sorting",icon:"sort",color:"#84cc16",description:"Classic sorting algorithms",problems:["merge-sort","quick-sort"]}],Ot={"two-sum":{id:"two-sum",title:"Two Sum",difficulty:"Easy",category:"Arrays & Hashing",description:"Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\n\nYou can return the answer in any order.",examples:[{input:"nums = [2,7,11,15], target = 9",output:"[0,1]",explanation:"Because nums[0] + nums[1] == 9, we return [0, 1]."},{input:"nums = [3,2,4], target = 6",output:"[1,2]",explanation:"Because nums[1] + nums[2] == 6, we return [1, 2]."}],constraints:["2 <= nums.length <= 10^4","-10^9 <= nums[i] <= 10^9","Only one valid answer exists."],testCases:[{input:"[2,7,11,15], 9",expected:"[0, 1]"},{input:"[3,2,4], 6",expected:"[1, 2]"},{input:"[3,3], 6",expected:"[0, 1]"}],starterCode:{python:`class Solution:
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

print(solution([3,6,8,10,1,2,1]))`}},hints:["Pick a pivot (last element is common).","Partition: smaller left, larger right.","Recurse on both partitions."]}},Jh=Object.values(Ot);[...new Set(Jh.map(e=>e.category))];const va={grid:Ug,pointer:Xg,layers:Co,search:fr,link:xl,tree:qg,network:Yg,puzzle:Jg,sort:Mg};function sd(){const{problemId:e}=ig(),t=bh(),[r,s]=p.useState(null),[i,a]=p.useState("python"),[l,o]=p.useState(""),[c,u]=p.useState(!1),[d,h]=p.useState(null),[m,w]=p.useState(null),[k,N]=p.useState(!1),[y,f]=p.useState(0),[g,x]=p.useState("description"),[_,j]=p.useState(!e),[z,C]=p.useState(()=>{const K=localStorage.getItem("completedProblems");return K?JSON.parse(K):[]}),[D,$]=p.useState(null),[R,H]=p.useState("map"),[W,E]=p.useState(null),[I,v]=p.useState(null),[T,A]=p.useState(!1),[S,L]=p.useState(null),[F,V]=p.useState(null),[B,O]=p.useState([]),M=p.useRef(null);p.useEffect(()=>{M.current&&(M.current.scrollTop=0)},[g,r]);const P=async()=>{if(l.trim()){A(!0),L(null),V(null),O([]);try{const K=await fetch("/api/code-review",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:l,language:i})}),X=await K.json();if(K.ok){if(L(X),X.optimizations&&Array.isArray(X.optimizations)){const oe=X.optimizations.map(re=>({startLine:re.startLine,endLine:re.endLine,className:"ai-code-issue-highlight",glyphClassName:"ai-code-issue-glyph",hoverMessage:`**Issue:** ${re.issue}

**Suggestion:** ${re.suggestion}`}));O(oe)}x("ai")}else V(X.error||`Review failed (${K.status})`),x("ai")}catch{V("Could not reach the review service. Is the server running?"),x("ai")}finally{A(!1)}}};p.useEffect(()=>{localStorage.setItem("completedProblems",JSON.stringify(z))},[z]),p.useEffect(()=>{if(e&&Ot[e]){const K=Ot[e];s(K),o(K.starterCode[i]||K.starterCode.python),h(null),w(null),N(!1),f(0),j(!1),window.scrollTo(0,0)}else e||(j(!0),window.scrollTo(0,0))},[e]),p.useEffect(()=>{r&&o(r.starterCode[i]||r.starterCode.python)},[i,r]);const b=K=>{z.includes(K)||C([...z,K])},q=async()=>{u(!0),h(null),w(null);try{const X=await(await fetch("/api/practice/execute",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({language:i,code:l})})).json();h({stdout:X.output||"",stderr:X.error||"",success:X.success})}catch(K){h({stdout:"",stderr:`Error: ${K.message}`,success:!1})}finally{u(!1)}},G=async()=>{if(r){u(!0),h(null),w(null);try{const X=await(await fetch("/api/practice/run-tests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({language:i,code:l,testCases:r.testCases,functionName:"solution"})})).json();w(X),X.allPassed&&b(r.id)}catch(K){h({stdout:"",stderr:`Error running tests: ${K.message}`,success:!1})}finally{u(!1)}}},Y=()=>{r&&(o(r.starterCode[i]||r.starterCode.python),h(null),w(null))},ee=()=>{r&&y<r.hints.length&&(N(!0),f(K=>Math.min(K+1,r.hints.length)))};if(_){const K=Jh.length,X=z.length,oe=Math.round(X/K*100);return n.jsx("div",{className:"practice-container",children:n.jsxs("div",{className:"roadmap-page",children:[n.jsxs("div",{className:"roadmap-header",children:[n.jsxs("div",{className:"roadmap-title",children:[n.jsx(Qc,{size:32}),n.jsxs("div",{children:[n.jsx("h1",{children:"DSA Roadmap"}),n.jsx("p",{children:"Master data structures and algorithms step by step"})]})]}),n.jsx("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:n.jsxs("div",{className:"progress-stats",children:[n.jsxs("div",{className:"progress-circle",children:[n.jsxs("svg",{viewBox:"0 0 36 36",children:[n.jsx("path",{className:"progress-bg",d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"}),n.jsx("path",{className:"progress-fill",strokeDasharray:`${oe}, 100`,d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"})]}),n.jsxs("span",{className:"progress-text",children:[oe,"%"]})]}),n.jsxs("div",{className:"progress-info",children:[n.jsxs("span",{className:"completed-count",children:[X,"/",K]}),n.jsx("span",{className:"completed-label",children:"Problems Solved"})]})]})})]}),R==="map"&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"roadmap-visual-map",children:xa.map(re=>{const be=re.problems.map(Tn=>Ot[Tn]).filter(Boolean),ce=be.filter(Tn=>z.includes(Tn.id)).length,Cn=Math.round(ce/be.length*100),ze=D===re.id;return n.jsxs("div",{className:`map-node ${ze?"active":""}`,style:{"--node-color":re.color},onClick:()=>$(ze?null:re.id),children:[ce===be.length?n.jsx("div",{className:"map-node-badge completed",children:n.jsx(Dn,{size:14})}):ce>0?n.jsx("div",{className:"map-node-badge in-progress",children:ce}):null,n.jsxs("div",{className:"map-node-header",children:[n.jsx("span",{className:"map-node-icon",children:(()=>{const Tn=va[re.icon];return Tn?n.jsx(Tn,{size:20}):null})()}),n.jsx("span",{className:"map-node-title",children:re.title})]}),n.jsx("p",{className:"map-node-description",children:re.description}),n.jsxs("div",{className:"map-node-progress",children:[n.jsx("div",{className:"map-node-progress-bar",children:n.jsx("div",{className:"map-node-progress-fill",style:{width:`${Cn}%`}})}),n.jsxs("span",{className:"map-node-progress-text",children:[ce,"/",be.length]})]})]},re.id)})}),D&&n.jsx("div",{className:"expanded-section",children:(()=>{const re=xa.find(ce=>ce.id===D),be=re.problems.map(ce=>Ot[ce]).filter(Boolean);return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"expanded-section-header",children:[n.jsxs("div",{className:"expanded-section-title",children:[n.jsx("span",{className:"section-icon-wrapper",children:(()=>{const ce=va[re.icon];return ce?n.jsx(ce,{size:24}):null})()}),n.jsx("h3",{children:re.title})]}),n.jsx("button",{className:"close-section-btn",onClick:ce=>{ce.stopPropagation(),$(null)},children:n.jsx(Ih,{size:16})})]}),n.jsx("div",{className:"problem-grid",children:be.map(ce=>{const Cn=z.includes(ce.id);return n.jsxs("div",{className:`problem-item ${Cn?"completed":""}`,onClick:()=>t(`/practice/${ce.id}`),children:[n.jsx("div",{className:`problem-status-icon ${Cn?"done":"pending"}`,children:Cn?n.jsx(Dn,{size:16}):n.jsx(Ks,{size:16})}),n.jsxs("div",{className:"problem-item-info",children:[n.jsx("div",{className:"problem-item-title",children:ce.title}),n.jsx("div",{className:"problem-item-meta",children:n.jsx("span",{className:`problem-item-difficulty ${ce.difficulty.toLowerCase()}`,children:ce.difficulty})})]}),n.jsx(Us,{size:16,className:"problem-item-arrow"})]},ce.id)})})]})})()})]}),R==="list"&&n.jsx("div",{className:"roadmap-container",children:xa.map((re,be)=>{const ce=re.problems.map(ze=>Ot[ze]).filter(Boolean),Cn=ce.filter(ze=>z.includes(ze.id)).length;return n.jsxs("div",{className:"roadmap-section",children:[be>0&&n.jsx("div",{className:"roadmap-connector"}),n.jsxs("div",{className:"section-card",style:{"--section-color":re.color},children:[n.jsxs("div",{className:"section-header",children:[n.jsx("span",{className:"section-icon",children:(()=>{const ze=va[re.icon];return ze?n.jsx(ze,{size:24}):null})()}),n.jsxs("div",{className:"section-info",children:[n.jsx("h2",{children:re.title}),n.jsx("p",{children:re.description})]}),n.jsx("div",{className:"section-progress",children:n.jsxs("span",{children:[Cn,"/",ce.length]})})]}),n.jsx("div",{className:"section-problems",children:ce.map((ze,Tn)=>{const Lo=z.includes(ze.id);return n.jsxs("div",{className:`problem-node ${Lo?"completed":""}`,onClick:()=>t(`/practice/${ze.id}`),children:[Tn>0&&n.jsx("div",{className:"node-connector"}),n.jsx("div",{className:"node-circle",children:Lo?n.jsx(Dn,{size:16}):n.jsx("span",{className:"node-number",children:Tn+1})}),n.jsxs("div",{className:"node-info",children:[n.jsx("span",{className:"node-title",children:ze.title}),n.jsx("span",{className:`node-difficulty ${ze.difficulty.toLowerCase()}`,children:ze.difficulty})]}),n.jsx(Us,{size:16,className:"node-arrow"})]},ze.id)})})]})]},re.id)})})]})})}return r?n.jsx("div",{className:"practice-container",children:n.jsxs("div",{className:"practice-layout",children:[n.jsxs("div",{className:"problem-panel",children:[n.jsxs("div",{className:"problem-header",children:[n.jsxs("button",{className:"back-btn",onClick:()=>j(!0),children:[n.jsx(Qc,{size:16})," Roadmap"]}),n.jsx("h1",{children:r.title}),n.jsx("span",{className:`difficulty ${r.difficulty.toLowerCase()}`,children:r.difficulty}),z.includes(r.id)&&n.jsxs("span",{className:"solved-badge",children:[n.jsx(Dn,{size:14})," Solved"]})]}),n.jsxs("div",{className:"problem-tabs",children:[n.jsx("button",{className:g==="description"?"active":"",onClick:()=>x("description"),children:"Description"}),n.jsx("button",{className:g==="hints"?"active":"",onClick:()=>x("hints"),children:"Hints"}),n.jsxs("button",{className:g==="solutions"?"active":"",onClick:()=>x("solutions"),children:[n.jsx(ml,{size:14}),"Solutions"]}),n.jsxs("button",{className:g==="ai"?"active":"",onClick:()=>x("ai"),children:[n.jsx(Lh,{size:14}),"AI Assistant"]})]}),n.jsxs("div",{className:"problem-content",ref:M,children:[g==="description"&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"description",children:r.description.split(`
`).map((K,X)=>n.jsx("p",{children:K},X))}),n.jsxs("div",{className:"examples",children:[n.jsx("h3",{children:"Examples"}),r.examples.map((K,X)=>n.jsxs("div",{className:"example",children:[n.jsxs("div",{className:"example-label",children:["Example ",X+1,":"]}),n.jsxs("div",{className:"example-content",children:[n.jsxs("div",{children:[n.jsx("strong",{children:"Input:"})," ",n.jsx("code",{children:K.input})]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Output:"})," ",n.jsx("code",{children:K.output})]}),K.explanation&&n.jsxs("div",{children:[n.jsx("strong",{children:"Explanation:"})," ",K.explanation]})]})]},X))]}),n.jsxs("div",{className:"constraints",children:[n.jsx("h3",{children:"Constraints"}),n.jsx("ul",{children:r.constraints.map((K,X)=>n.jsx("li",{children:n.jsx("code",{children:K})},X))})]})]}),g==="hints"&&n.jsxs("div",{className:"hints-section",children:[n.jsxs("div",{className:"hints-header",children:[n.jsx(Ne,{size:20}),n.jsx("span",{children:"Need help? Reveal hints one at a time."})]}),r.hints.slice(0,y).map((K,X)=>n.jsxs("div",{className:"hint",children:[n.jsxs("span",{className:"hint-number",children:["Hint ",X+1,":"]}),K]},X)),y<r.hints.length&&n.jsxs("button",{className:"reveal-hint-btn",onClick:ee,children:[n.jsx(Ne,{size:14}),"Reveal Hint ",y+1]}),y>=r.hints.length&&n.jsx("div",{className:"all-hints-shown",children:"All hints revealed!"})]}),g==="solutions"&&r.solutions&&n.jsxs("div",{className:"solutions-section",children:[n.jsxs("div",{className:"solutions-header",children:[n.jsx(ml,{size:20}),n.jsx("span",{children:"Multiple approaches with different time/space complexities"})]}),n.jsx("div",{className:"solutions-list",children:Object.entries(r.solutions).map(([K,X])=>{const oe=W===K,re=I===K;return n.jsxs("div",{className:`solution-card ${oe?"expanded":""}`,children:[n.jsxs("div",{className:"solution-card-header",onClick:()=>E(oe?null:K),children:[n.jsxs("div",{className:"solution-info",children:[n.jsx("h4",{className:"solution-name",children:X.name}),n.jsxs("div",{className:"solution-complexity",children:[n.jsxs("span",{className:"complexity-badge time",children:[n.jsx(gl,{size:12}),X.timeComplexity]}),n.jsxs("span",{className:"complexity-badge space",children:[n.jsx(Hg,{size:12}),X.spaceComplexity]})]})]}),n.jsx(Us,{size:18,className:`solution-expand-icon ${oe?"rotated":""}`})]}),oe&&n.jsxs("div",{className:"solution-card-body",children:[n.jsx("p",{className:"solution-description",children:X.description}),n.jsxs("div",{className:"solution-code-container",children:[n.jsxs("div",{className:"solution-code-header",children:[n.jsx("span",{children:"Python"}),n.jsx("button",{className:"copy-solution-btn",onClick:be=>{be.stopPropagation(),navigator.clipboard.writeText(X.code),v(K),setTimeout(()=>v(null),2e3)},children:re?n.jsxs(n.Fragment,{children:[n.jsx(Ag,{size:14}),"Copied!"]}):n.jsxs(n.Fragment,{children:[n.jsx(Eh,{size:14}),"Copy"]})})]}),n.jsx("pre",{className:"solution-code",children:n.jsx("code",{children:X.code})})]}),n.jsxs("button",{className:"use-solution-btn",onClick:be=>{be.stopPropagation(),o(X.code),x("description")},children:[n.jsx(Ks,{size:14}),"Use This Solution"]})]})]},K)})})]}),g==="ai"&&n.jsxs("div",{className:"ai-assistant-tab",children:[F&&n.jsxs("div",{className:"review-error-banner",children:[n.jsx(ha,{size:16}),n.jsx("span",{children:F})]}),S&&n.jsxs("div",{className:"ai-review-results",children:[n.jsxs("div",{className:"review-header",children:[n.jsxs("div",{className:"logic-score",children:[n.jsx("span",{className:"score-label",children:"Logic Score"}),n.jsxs("div",{className:"score-circle",children:[n.jsx("span",{className:"score-value",children:S.logicScore}),n.jsx("span",{className:"score-total",children:"/10"})]})]}),n.jsxs("div",{className:"complexity-info",children:[n.jsxs("div",{className:"complexity-item",children:[n.jsx(gl,{size:14}),n.jsxs("span",{children:["Time: ",n.jsx("strong",{children:S.timeComplexity})]})]}),n.jsxs("div",{className:"complexity-item",children:[n.jsx(Co,{size:14}),n.jsxs("span",{children:["Space: ",n.jsx("strong",{children:S.spaceComplexity})]})]})]})]}),n.jsxs("div",{className:"review-feedback",children:[n.jsx("h4",{children:"Senior Reviewer Feedback"}),n.jsx("p",{children:S.generalFeedback})]}),S.optimizations&&S.optimizations.length>0&&n.jsxs("div",{className:"review-optimizations",children:[n.jsx("h4",{children:"Line-by-Line Optimizations"}),n.jsx("div",{className:"optimizations-list",children:S.optimizations.map((K,X)=>n.jsxs("div",{className:"opt-card",children:[n.jsxs("div",{className:"opt-card-header",children:[n.jsxs("span",{className:"line-badge",children:["Lines ",K.startLine,"-",K.endLine]}),n.jsx(_o,{size:14,className:"zap-icon"})]}),n.jsxs("div",{className:"opt-issue",children:[n.jsx("strong",{children:"Issue:"})," ",K.issue]}),n.jsxs("div",{className:"opt-suggestion",children:[n.jsx("strong",{children:"Suggestion:"})," ",K.suggestion]}),K.improvedCode&&n.jsx("div",{className:"opt-code",children:n.jsx("pre",{children:n.jsx("code",{children:K.improvedCode})})})]},X))})]}),n.jsx("div",{className:"review-divider",children:n.jsx("span",{children:"Chat with Assistant below"})})]}),n.jsx(me,{context:`Problem: ${r.title}

Description: ${r.description}

User's current code (${i}):
${l}`})]})]})]}),n.jsxs("div",{className:"editor-panel",children:[n.jsxs("div",{className:"editor-header",children:[n.jsxs("div",{className:"language-selector",children:[n.jsx(Ks,{size:16}),n.jsx("span",{className:"language-label",children:"Python"})]}),n.jsx("div",{className:"editor-actions",children:n.jsx("button",{className:"btn btn-reset",onClick:Y,disabled:c,title:"Reset code",children:n.jsx(ut,{size:14})})})]}),n.jsx(SN,{language:i,code:l,onChange:o,decorations:B}),n.jsxs("div",{className:"run-actions",children:[n.jsxs("button",{className:"btn btn-run",onClick:q,disabled:c||T,children:[n.jsx(Je,{size:14}),c?"Running...":"Run Code"]}),n.jsxs("button",{className:"btn btn-submit",onClick:G,disabled:c||T,children:[n.jsx(Dn,{size:14}),c?"Testing...":"Submit"]}),n.jsxs("button",{className:`btn btn-review ${T?"loading":""}`,onClick:P,disabled:c||T,title:"Get a Senior Code Review from Gemini",children:[n.jsx(Zg,{size:14}),T?"Reviewing...":"AI Review"]})]}),n.jsxs("div",{className:"output-panel",children:[n.jsxs("div",{className:"output-header",children:[n.jsx("span",{children:"Output"}),d&&n.jsx("span",{className:`status ${d.success?"success":"error"}`,children:d.success?"Success":"Error"})]}),n.jsxs("div",{className:"output-content",children:[!d&&!m&&n.jsx("div",{className:"output-placeholder",children:"Run your code to see output here..."}),d&&n.jsxs(n.Fragment,{children:[d.stdout&&n.jsxs("div",{className:"stdout",children:[n.jsx("div",{className:"output-label",children:"stdout:"}),n.jsx("pre",{children:d.stdout})]}),d.stderr&&n.jsxs("div",{className:"stderr",children:[n.jsx("div",{className:"output-label",children:"stderr:"}),n.jsx("pre",{children:d.stderr})]})]}),m&&n.jsxs("div",{className:"test-results",children:[n.jsx("div",{className:"test-summary",children:n.jsx("span",{className:m.allPassed?"all-passed":"some-failed",children:m.allPassed?n.jsxs(n.Fragment,{children:[n.jsx(Dn,{size:16})," All tests passed!"]}):n.jsxs(n.Fragment,{children:[n.jsx(ha,{size:16})," ",m.summary.passed,"/",m.summary.total," tests passed"]})})}),n.jsx("div",{className:"test-cases",children:m.results.map((K,X)=>n.jsxs("div",{className:`test-case ${K.passed?"passed":"failed"}`,children:[n.jsxs("div",{className:"test-case-header",children:[K.passed?n.jsx(Dn,{size:14}):n.jsx(ha,{size:14}),n.jsxs("span",{children:["Test Case ",K.testCase]})]}),n.jsxs("div",{className:"test-case-details",children:[n.jsxs("div",{children:[n.jsx("strong",{children:"Input:"})," ",n.jsx("code",{children:K.input})]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Expected:"})," ",n.jsx("code",{children:K.expected})]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Actual:"})," ",n.jsx("code",{children:K.actual||"(empty)"})]}),K.error&&n.jsxs("div",{className:"test-error",children:[n.jsx("strong",{children:"Error:"})," ",K.error]})]})]},X))})]})]})]})]})]})}):n.jsx("div",{className:"practice-container",children:n.jsx("div",{className:"loading",children:"Loading problem..."})})}function CN(){return n.jsxs("div",{className:"homepage-body",children:[n.jsx(tx,{}),n.jsxs("main",{className:"main-content",children:[n.jsxs(Ng,{children:[n.jsx(ie,{path:"/",element:n.jsx(jx,{})}),n.jsx(ie,{path:"/algorithms",element:n.jsx(Nx,{})}),n.jsx(ie,{path:"/contact",element:n.jsx(kx,{})}),n.jsx(ie,{path:"/contributions",element:n.jsx(wx,{})}),n.jsx(ie,{path:"/stack",element:n.jsx(zv,{})}),n.jsx(ie,{path:"/queue",element:n.jsx(Fv,{})}),n.jsx(ie,{path:"/linkedlist",element:n.jsx(Av,{})}),n.jsx(ie,{path:"/skiplist",element:n.jsx(Vv,{})}),n.jsx(ie,{path:"/hashtable_linear",element:n.jsx(Dv,{})}),n.jsx(ie,{path:"/hashtable_quadratic",element:n.jsx(Xv,{})}),n.jsx(ie,{path:"/hashtable_chaining",element:n.jsx(Qv,{})}),n.jsx(ie,{path:"/binarytree",element:n.jsx(ry,{})}),n.jsx(ie,{path:"/bst",element:n.jsx(Oj,{})}),n.jsx(ie,{path:"/avl",element:n.jsx(Fj,{})}),n.jsx(ie,{path:"/splay",element:n.jsx(Bj,{})}),n.jsx(ie,{path:"/treap",element:n.jsx(Qj,{})}),n.jsx(ie,{path:"/minheap",element:n.jsx(Zj,{})}),n.jsx(ie,{path:"/maxheap",element:n.jsx(r0,{})}),n.jsx(ie,{path:"/adjacency-list",element:n.jsx(s0,{})}),n.jsx(ie,{path:"/adjacency-matrix",element:n.jsx(i0,{})}),n.jsx(ie,{path:"/bfs",element:n.jsx(c0,{})}),n.jsx(ie,{path:"/dfs",element:n.jsx(d0,{})}),n.jsx(ie,{path:"/dijkstra",element:n.jsx(u0,{})}),n.jsx(ie,{path:"/bellman-ford",element:n.jsx(f0,{})}),n.jsx(ie,{path:"/prim-mst",element:n.jsx(h0,{})}),n.jsx(ie,{path:"/kruskal-mst",element:n.jsx(m0,{})}),n.jsx(ie,{path:"/topological-sort",element:n.jsx(p0,{})}),n.jsx(ie,{path:"/practice",element:n.jsx(sd,{})}),n.jsx(ie,{path:"/practice/:problemId",element:n.jsx(sd,{})})]}),n.jsx(rx,{})]})]})}ya.createRoot(document.getElementById("root")).render(n.jsx(Pe.StrictMode,{children:n.jsx(_g,{children:n.jsx(CN,{})})}));
