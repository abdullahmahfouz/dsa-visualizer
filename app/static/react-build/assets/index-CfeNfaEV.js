function Fp(e,t){for(var r=0;r<t.length;r++){const s=t[r];if(typeof s!="string"&&!Array.isArray(s)){for(const i in s)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(s,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>s[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function r(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(i){if(i.ep)return;i.ep=!0;const a=r(i);fetch(i.href,a)}})();function Vp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Kd={exports:{}},Fi={},Wd={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var js=Symbol.for("react.element"),Dp=Symbol.for("react.portal"),$p=Symbol.for("react.fragment"),Bp=Symbol.for("react.strict_mode"),qp=Symbol.for("react.profiler"),Hp=Symbol.for("react.provider"),Up=Symbol.for("react.context"),Kp=Symbol.for("react.forward_ref"),Wp=Symbol.for("react.suspense"),Gp=Symbol.for("react.memo"),Qp=Symbol.for("react.lazy"),cc=Symbol.iterator;function Xp(e){return e===null||typeof e!="object"?null:(e=cc&&e[cc]||e["@@iterator"],typeof e=="function"?e:null)}var Gd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qd=Object.assign,Xd={};function jr(e,t,r){this.props=e,this.context=t,this.refs=Xd,this.updater=r||Gd}jr.prototype.isReactComponent={};jr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};jr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Yd(){}Yd.prototype=jr.prototype;function to(e,t,r){this.props=e,this.context=t,this.refs=Xd,this.updater=r||Gd}var ro=to.prototype=new Yd;ro.constructor=to;Qd(ro,jr.prototype);ro.isPureReactComponent=!0;var dc=Array.isArray,Jd=Object.prototype.hasOwnProperty,so={current:null},Zd={key:!0,ref:!0,__self:!0,__source:!0};function eu(e,t,r){var s,i={},a=null,l=null;if(t!=null)for(s in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(a=""+t.key),t)Jd.call(t,s)&&!Zd.hasOwnProperty(s)&&(i[s]=t[s]);var o=arguments.length-2;if(o===1)i.children=r;else if(1<o){for(var c=Array(o),u=0;u<o;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(s in o=e.defaultProps,o)i[s]===void 0&&(i[s]=o[s]);return{$$typeof:js,type:e,key:a,ref:l,props:i,_owner:so.current}}function Yp(e,t){return{$$typeof:js,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function io(e){return typeof e=="object"&&e!==null&&e.$$typeof===js}function Jp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var uc=/\/+/g;function ra(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Jp(""+e.key):t.toString(36)}function Xs(e,t,r,s,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case js:case Dp:l=!0}}if(l)return l=e,i=i(l),e=s===""?"."+ra(l,0):s,dc(i)?(r="",e!=null&&(r=e.replace(uc,"$&/")+"/"),Xs(i,t,r,"",function(u){return u})):i!=null&&(io(i)&&(i=Yp(i,r+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(uc,"$&/")+"/")+e)),t.push(i)),1;if(l=0,s=s===""?".":s+":",dc(e))for(var o=0;o<e.length;o++){a=e[o];var c=s+ra(a,o);l+=Xs(a,t,r,c,i)}else if(c=Xp(e),typeof c=="function")for(e=c.call(e),o=0;!(a=e.next()).done;)a=a.value,c=s+ra(a,o++),l+=Xs(a,t,r,c,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Es(e,t,r){if(e==null)return e;var s=[],i=0;return Xs(e,s,"","",function(a){return t.call(r,a,i++)}),s}function Zp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Xe={current:null},Ys={transition:null},ef={ReactCurrentDispatcher:Xe,ReactCurrentBatchConfig:Ys,ReactCurrentOwner:so};function nu(){throw Error("act(...) is not supported in production builds of React.")}se.Children={map:Es,forEach:function(e,t,r){Es(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Es(e,function(){t++}),t},toArray:function(e){return Es(e,function(t){return t})||[]},only:function(e){if(!io(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};se.Component=jr;se.Fragment=$p;se.Profiler=qp;se.PureComponent=to;se.StrictMode=Bp;se.Suspense=Wp;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ef;se.act=nu;se.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=Qd({},e.props),i=e.key,a=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,l=so.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(c in t)Jd.call(t,c)&&!Zd.hasOwnProperty(c)&&(s[c]=t[c]===void 0&&o!==void 0?o[c]:t[c])}var c=arguments.length-2;if(c===1)s.children=r;else if(1<c){o=Array(c);for(var u=0;u<c;u++)o[u]=arguments[u+2];s.children=o}return{$$typeof:js,type:e.type,key:i,ref:a,props:s,_owner:l}};se.createContext=function(e){return e={$$typeof:Up,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Hp,_context:e},e.Consumer=e};se.createElement=eu;se.createFactory=function(e){var t=eu.bind(null,e);return t.type=e,t};se.createRef=function(){return{current:null}};se.forwardRef=function(e){return{$$typeof:Kp,render:e}};se.isValidElement=io;se.lazy=function(e){return{$$typeof:Qp,_payload:{_status:-1,_result:e},_init:Zp}};se.memo=function(e,t){return{$$typeof:Gp,type:e,compare:t===void 0?null:t}};se.startTransition=function(e){var t=Ys.transition;Ys.transition={};try{e()}finally{Ys.transition=t}};se.unstable_act=nu;se.useCallback=function(e,t){return Xe.current.useCallback(e,t)};se.useContext=function(e){return Xe.current.useContext(e)};se.useDebugValue=function(){};se.useDeferredValue=function(e){return Xe.current.useDeferredValue(e)};se.useEffect=function(e,t){return Xe.current.useEffect(e,t)};se.useId=function(){return Xe.current.useId()};se.useImperativeHandle=function(e,t,r){return Xe.current.useImperativeHandle(e,t,r)};se.useInsertionEffect=function(e,t){return Xe.current.useInsertionEffect(e,t)};se.useLayoutEffect=function(e,t){return Xe.current.useLayoutEffect(e,t)};se.useMemo=function(e,t){return Xe.current.useMemo(e,t)};se.useReducer=function(e,t,r){return Xe.current.useReducer(e,t,r)};se.useRef=function(e){return Xe.current.useRef(e)};se.useState=function(e){return Xe.current.useState(e)};se.useSyncExternalStore=function(e,t,r){return Xe.current.useSyncExternalStore(e,t,r)};se.useTransition=function(){return Xe.current.useTransition()};se.version="18.3.1";Wd.exports=se;var p=Wd.exports;const Ce=Vp(p),nf=Fp({__proto__:null,default:Ce},[p]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tf=p,rf=Symbol.for("react.element"),sf=Symbol.for("react.fragment"),af=Object.prototype.hasOwnProperty,lf=tf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,of={key:!0,ref:!0,__self:!0,__source:!0};function tu(e,t,r){var s,i={},a=null,l=null;r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(l=t.ref);for(s in t)af.call(t,s)&&!of.hasOwnProperty(s)&&(i[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)i[s]===void 0&&(i[s]=t[s]);return{$$typeof:rf,type:e,key:a,ref:l,props:i,_owner:lf.current}}Fi.Fragment=sf;Fi.jsx=tu;Fi.jsxs=tu;Kd.exports=Fi;var n=Kd.exports,Ka={},ru={exports:{}},cn={},su={exports:{}},iu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,E){var z=T.length;T.push(E);e:for(;0<z;){var F=z-1>>>1,B=T[F];if(0<i(B,E))T[F]=E,T[z]=B,z=F;else break e}}function r(T){return T.length===0?null:T[0]}function s(T){if(T.length===0)return null;var E=T[0],z=T.pop();if(z!==E){T[0]=z;e:for(var F=0,B=T.length,M=B>>>1;F<M;){var D=2*(F+1)-1,I=T[D],w=D+1,H=T[w];if(0>i(I,z))w<B&&0>i(H,I)?(T[F]=H,T[w]=z,F=w):(T[F]=I,T[D]=z,F=D);else if(w<B&&0>i(H,z))T[F]=H,T[w]=z,F=w;else break e}}return E}function i(T,E){var z=T.sortIndex-E.sortIndex;return z!==0?z:T.id-E.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var l=Date,o=l.now();e.unstable_now=function(){return l.now()-o}}var c=[],u=[],d=1,h=null,g=3,b=!1,N=!1,y=!1,j=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(T){for(var E=r(u);E!==null;){if(E.callback===null)s(u);else if(E.startTime<=T)s(u),E.sortIndex=E.expirationTime,t(c,E);else break;E=r(u)}}function S(T){if(y=!1,x(T),!N)if(r(c)!==null)N=!0,R(v);else{var E=r(u);E!==null&&$(S,E.startTime-T)}}function v(T,E){N=!1,y&&(y=!1,f(V),V=-1),b=!0;var z=g;try{for(x(E),h=r(c);h!==null&&(!(h.expirationTime>E)||T&&!q());){var F=h.callback;if(typeof F=="function"){h.callback=null,g=h.priorityLevel;var B=F(h.expirationTime<=E);E=e.unstable_now(),typeof B=="function"?h.callback=B:h===r(c)&&s(c),x(E)}else s(c);h=r(c)}if(h!==null)var M=!0;else{var D=r(u);D!==null&&$(S,D.startTime-E),M=!1}return M}finally{h=null,g=z,b=!1}}var P=!1,C=null,V=-1,L=5,_=-1;function q(){return!(e.unstable_now()-_<L)}function W(){if(C!==null){var T=e.unstable_now();_=T;var E=!0;try{E=C(!0,T)}finally{E?O():(P=!1,C=null)}}else P=!1}var O;if(typeof m=="function")O=function(){m(W)};else if(typeof MessageChannel<"u"){var A=new MessageChannel,k=A.port2;A.port1.onmessage=W,O=function(){k.postMessage(null)}}else O=function(){j(W,0)};function R(T){C=T,P||(P=!0,O())}function $(T,E){V=j(function(){T(e.unstable_now())},E)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){N||b||(N=!0,R(v))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(T){switch(g){case 1:case 2:case 3:var E=3;break;default:E=g}var z=g;g=E;try{return T()}finally{g=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,E){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var z=g;g=T;try{return E()}finally{g=z}},e.unstable_scheduleCallback=function(T,E,z){var F=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?F+z:F):z=F,T){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=z+B,T={id:d++,callback:E,priorityLevel:T,startTime:z,expirationTime:B,sortIndex:-1},z>F?(T.sortIndex=z,t(u,T),r(c)===null&&T===r(u)&&(y?(f(V),V=-1):y=!0,$(S,z-F))):(T.sortIndex=B,t(c,T),N||b||(N=!0,R(v))),T},e.unstable_shouldYield=q,e.unstable_wrapCallback=function(T){var E=g;return function(){var z=g;g=E;try{return T.apply(this,arguments)}finally{g=z}}}})(iu);su.exports=iu;var cf=su.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var df=p,on=cf;function K(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var au=new Set,es={};function It(e,t){pr(e,t),pr(e+"Capture",t)}function pr(e,t){for(es[e]=t,e=0;e<t.length;e++)au.add(t[e])}var Bn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wa=Object.prototype.hasOwnProperty,uf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hc={},pc={};function hf(e){return Wa.call(pc,e)?!0:Wa.call(hc,e)?!1:uf.test(e)?pc[e]=!0:(hc[e]=!0,!1)}function pf(e,t,r,s){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ff(e,t,r,s){if(t===null||typeof t>"u"||pf(e,t,r,s))return!0;if(s)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ye(e,t,r,s,i,a,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=l}var Ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ve[e]=new Ye(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ve[t]=new Ye(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ve[e]=new Ye(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ve[e]=new Ye(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ve[e]=new Ye(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ve[e]=new Ye(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ve[e]=new Ye(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ve[e]=new Ye(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ve[e]=new Ye(e,5,!1,e.toLowerCase(),null,!1,!1)});var ao=/[\-:]([a-z])/g;function lo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ao,lo);Ve[t]=new Ye(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ao,lo);Ve[t]=new Ye(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ao,lo);Ve[t]=new Ye(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ve[e]=new Ye(e,1,!1,e.toLowerCase(),null,!1,!1)});Ve.xlinkHref=new Ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ve[e]=new Ye(e,1,!1,e.toLowerCase(),null,!0,!0)});function oo(e,t,r,s){var i=Ve.hasOwnProperty(t)?Ve[t]:null;(i!==null?i.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ff(t,r,i,s)&&(r=null),s||i===null?hf(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,s=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,s?e.setAttributeNS(s,t,r):e.setAttribute(t,r))))}var Kn=df.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Os=Symbol.for("react.element"),qt=Symbol.for("react.portal"),Ht=Symbol.for("react.fragment"),co=Symbol.for("react.strict_mode"),Ga=Symbol.for("react.profiler"),lu=Symbol.for("react.provider"),ou=Symbol.for("react.context"),uo=Symbol.for("react.forward_ref"),Qa=Symbol.for("react.suspense"),Xa=Symbol.for("react.suspense_list"),ho=Symbol.for("react.memo"),Gn=Symbol.for("react.lazy"),cu=Symbol.for("react.offscreen"),fc=Symbol.iterator;function Lr(e){return e===null||typeof e!="object"?null:(e=fc&&e[fc]||e["@@iterator"],typeof e=="function"?e:null)}var be=Object.assign,sa;function Fr(e){if(sa===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);sa=t&&t[1]||""}return`
`+sa+e}var ia=!1;function aa(e,t){if(!e||ia)return"";ia=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var s=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){s=u}e.call(t.prototype)}else{try{throw Error()}catch(u){s=u}e()}}catch(u){if(u&&s&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=s.stack.split(`
`),l=i.length-1,o=a.length-1;1<=l&&0<=o&&i[l]!==a[o];)o--;for(;1<=l&&0<=o;l--,o--)if(i[l]!==a[o]){if(l!==1||o!==1)do if(l--,o--,0>o||i[l]!==a[o]){var c=`
`+i[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=o);break}}}finally{ia=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Fr(e):""}function mf(e){switch(e.tag){case 5:return Fr(e.type);case 16:return Fr("Lazy");case 13:return Fr("Suspense");case 19:return Fr("SuspenseList");case 0:case 2:case 15:return e=aa(e.type,!1),e;case 11:return e=aa(e.type.render,!1),e;case 1:return e=aa(e.type,!0),e;default:return""}}function Ya(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ht:return"Fragment";case qt:return"Portal";case Ga:return"Profiler";case co:return"StrictMode";case Qa:return"Suspense";case Xa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ou:return(e.displayName||"Context")+".Consumer";case lu:return(e._context.displayName||"Context")+".Provider";case uo:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ho:return t=e.displayName||null,t!==null?t:Ya(e.type)||"Memo";case Gn:t=e._payload,e=e._init;try{return Ya(e(t))}catch{}}return null}function gf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ya(t);case 8:return t===co?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ht(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function du(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function xf(e){var t=du(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){s=""+l,a.call(this,l)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return s},setValue:function(l){s=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Rs(e){e._valueTracker||(e._valueTracker=xf(e))}function uu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),s="";return e&&(s=du(e)?e.checked?"true":"false":e.value),e=s,e!==r?(t.setValue(e),!0):!1}function di(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ja(e,t){var r=t.checked;return be({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function mc(e,t){var r=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;r=ht(t.value!=null?t.value:r),e._wrapperState={initialChecked:s,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function hu(e,t){t=t.checked,t!=null&&oo(e,"checked",t,!1)}function Za(e,t){hu(e,t);var r=ht(t.value),s=t.type;if(r!=null)s==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?el(e,t.type,r):t.hasOwnProperty("defaultValue")&&el(e,t.type,ht(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function gc(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function el(e,t,r){(t!=="number"||di(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Vr=Array.isArray;function lr(e,t,r,s){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&s&&(e[r].defaultSelected=!0)}else{for(r=""+ht(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,s&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function nl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(K(91));return be({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function xc(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(K(92));if(Vr(r)){if(1<r.length)throw Error(K(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:ht(r)}}function pu(e,t){var r=ht(t.value),s=ht(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),s!=null&&(e.defaultValue=""+s)}function vc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function fu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function tl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?fu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ps,mu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,s,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,s,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ps=Ps||document.createElement("div"),Ps.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ps.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ns(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Hr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vf=["Webkit","ms","Moz","O"];Object.keys(Hr).forEach(function(e){vf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Hr[t]=Hr[e]})});function gu(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Hr.hasOwnProperty(e)&&Hr[e]?(""+t).trim():t+"px"}function xu(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var s=r.indexOf("--")===0,i=gu(r,t[r],s);r==="float"&&(r="cssFloat"),s?e.setProperty(r,i):e[r]=i}}var yf=be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rl(e,t){if(t){if(yf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(K(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(K(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(K(61))}if(t.style!=null&&typeof t.style!="object")throw Error(K(62))}}function sl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var il=null;function po(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var al=null,or=null,cr=null;function yc(e){if(e=ks(e)){if(typeof al!="function")throw Error(K(280));var t=e.stateNode;t&&(t=qi(t),al(e.stateNode,e.type,t))}}function vu(e){or?cr?cr.push(e):cr=[e]:or=e}function yu(){if(or){var e=or,t=cr;if(cr=or=null,yc(e),t)for(e=0;e<t.length;e++)yc(t[e])}}function ju(e,t){return e(t)}function Nu(){}var la=!1;function bu(e,t,r){if(la)return e(t,r);la=!0;try{return ju(e,t,r)}finally{la=!1,(or!==null||cr!==null)&&(Nu(),yu())}}function ts(e,t){var r=e.stateNode;if(r===null)return null;var s=qi(r);if(s===null)return null;r=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(K(231,t,typeof r));return r}var ll=!1;if(Bn)try{var Er={};Object.defineProperty(Er,"passive",{get:function(){ll=!0}}),window.addEventListener("test",Er,Er),window.removeEventListener("test",Er,Er)}catch{ll=!1}function jf(e,t,r,s,i,a,l,o,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(d){this.onError(d)}}var Ur=!1,ui=null,hi=!1,ol=null,Nf={onError:function(e){Ur=!0,ui=e}};function bf(e,t,r,s,i,a,l,o,c){Ur=!1,ui=null,jf.apply(Nf,arguments)}function kf(e,t,r,s,i,a,l,o,c){if(bf.apply(this,arguments),Ur){if(Ur){var u=ui;Ur=!1,ui=null}else throw Error(K(198));hi||(hi=!0,ol=u)}}function zt(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function ku(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function jc(e){if(zt(e)!==e)throw Error(K(188))}function wf(e){var t=e.alternate;if(!t){if(t=zt(e),t===null)throw Error(K(188));return t!==e?null:e}for(var r=e,s=t;;){var i=r.return;if(i===null)break;var a=i.alternate;if(a===null){if(s=i.return,s!==null){r=s;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===r)return jc(i),e;if(a===s)return jc(i),t;a=a.sibling}throw Error(K(188))}if(r.return!==s.return)r=i,s=a;else{for(var l=!1,o=i.child;o;){if(o===r){l=!0,r=i,s=a;break}if(o===s){l=!0,s=i,r=a;break}o=o.sibling}if(!l){for(o=a.child;o;){if(o===r){l=!0,r=a,s=i;break}if(o===s){l=!0,s=a,r=i;break}o=o.sibling}if(!l)throw Error(K(189))}}if(r.alternate!==s)throw Error(K(190))}if(r.tag!==3)throw Error(K(188));return r.stateNode.current===r?e:t}function wu(e){return e=wf(e),e!==null?Su(e):null}function Su(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Su(e);if(t!==null)return t;e=e.sibling}return null}var Cu=on.unstable_scheduleCallback,Nc=on.unstable_cancelCallback,Sf=on.unstable_shouldYield,Cf=on.unstable_requestPaint,_e=on.unstable_now,Tf=on.unstable_getCurrentPriorityLevel,fo=on.unstable_ImmediatePriority,Tu=on.unstable_UserBlockingPriority,pi=on.unstable_NormalPriority,_f=on.unstable_LowPriority,_u=on.unstable_IdlePriority,Vi=null,On=null;function Lf(e){if(On&&typeof On.onCommitFiberRoot=="function")try{On.onCommitFiberRoot(Vi,e,void 0,(e.current.flags&128)===128)}catch{}}var wn=Math.clz32?Math.clz32:Rf,Ef=Math.log,Of=Math.LN2;function Rf(e){return e>>>=0,e===0?32:31-(Ef(e)/Of|0)|0}var Is=64,zs=4194304;function Dr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function fi(e,t){var r=e.pendingLanes;if(r===0)return 0;var s=0,i=e.suspendedLanes,a=e.pingedLanes,l=r&268435455;if(l!==0){var o=l&~i;o!==0?s=Dr(o):(a&=l,a!==0&&(s=Dr(a)))}else l=r&~i,l!==0?s=Dr(l):a!==0&&(s=Dr(a));if(s===0)return 0;if(t!==0&&t!==s&&!(t&i)&&(i=s&-s,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(s&4&&(s|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)r=31-wn(t),i=1<<r,s|=e[r],t&=~i;return s}function Pf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function If(e,t){for(var r=e.suspendedLanes,s=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var l=31-wn(a),o=1<<l,c=i[l];c===-1?(!(o&r)||o&s)&&(i[l]=Pf(o,t)):c<=t&&(e.expiredLanes|=o),a&=~o}}function cl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Lu(){var e=Is;return Is<<=1,!(Is&4194240)&&(Is=64),e}function oa(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Ns(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-wn(t),e[t]=r}function zf(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-wn(r),a=1<<i;t[i]=0,s[i]=-1,e[i]=-1,r&=~a}}function mo(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var s=31-wn(r),i=1<<s;i&t|e[s]&t&&(e[s]|=t),r&=~i}}var de=0;function Eu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ou,go,Ru,Pu,Iu,dl=!1,Ms=[],tt=null,rt=null,st=null,rs=new Map,ss=new Map,Xn=[],Mf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bc(e,t){switch(e){case"focusin":case"focusout":tt=null;break;case"dragenter":case"dragleave":rt=null;break;case"mouseover":case"mouseout":st=null;break;case"pointerover":case"pointerout":rs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ss.delete(t.pointerId)}}function Or(e,t,r,s,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:r,eventSystemFlags:s,nativeEvent:a,targetContainers:[i]},t!==null&&(t=ks(t),t!==null&&go(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Af(e,t,r,s,i){switch(t){case"focusin":return tt=Or(tt,e,t,r,s,i),!0;case"dragenter":return rt=Or(rt,e,t,r,s,i),!0;case"mouseover":return st=Or(st,e,t,r,s,i),!0;case"pointerover":var a=i.pointerId;return rs.set(a,Or(rs.get(a)||null,e,t,r,s,i)),!0;case"gotpointercapture":return a=i.pointerId,ss.set(a,Or(ss.get(a)||null,e,t,r,s,i)),!0}return!1}function zu(e){var t=bt(e.target);if(t!==null){var r=zt(t);if(r!==null){if(t=r.tag,t===13){if(t=ku(r),t!==null){e.blockedOn=t,Iu(e.priority,function(){Ru(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Js(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=ul(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var s=new r.constructor(r.type,r);il=s,r.target.dispatchEvent(s),il=null}else return t=ks(r),t!==null&&go(t),e.blockedOn=r,!1;t.shift()}return!0}function kc(e,t,r){Js(e)&&r.delete(t)}function Ff(){dl=!1,tt!==null&&Js(tt)&&(tt=null),rt!==null&&Js(rt)&&(rt=null),st!==null&&Js(st)&&(st=null),rs.forEach(kc),ss.forEach(kc)}function Rr(e,t){e.blockedOn===t&&(e.blockedOn=null,dl||(dl=!0,on.unstable_scheduleCallback(on.unstable_NormalPriority,Ff)))}function is(e){function t(i){return Rr(i,e)}if(0<Ms.length){Rr(Ms[0],e);for(var r=1;r<Ms.length;r++){var s=Ms[r];s.blockedOn===e&&(s.blockedOn=null)}}for(tt!==null&&Rr(tt,e),rt!==null&&Rr(rt,e),st!==null&&Rr(st,e),rs.forEach(t),ss.forEach(t),r=0;r<Xn.length;r++)s=Xn[r],s.blockedOn===e&&(s.blockedOn=null);for(;0<Xn.length&&(r=Xn[0],r.blockedOn===null);)zu(r),r.blockedOn===null&&Xn.shift()}var dr=Kn.ReactCurrentBatchConfig,mi=!0;function Vf(e,t,r,s){var i=de,a=dr.transition;dr.transition=null;try{de=1,xo(e,t,r,s)}finally{de=i,dr.transition=a}}function Df(e,t,r,s){var i=de,a=dr.transition;dr.transition=null;try{de=4,xo(e,t,r,s)}finally{de=i,dr.transition=a}}function xo(e,t,r,s){if(mi){var i=ul(e,t,r,s);if(i===null)va(e,t,s,gi,r),bc(e,s);else if(Af(i,e,t,r,s))s.stopPropagation();else if(bc(e,s),t&4&&-1<Mf.indexOf(e)){for(;i!==null;){var a=ks(i);if(a!==null&&Ou(a),a=ul(e,t,r,s),a===null&&va(e,t,s,gi,r),a===i)break;i=a}i!==null&&s.stopPropagation()}else va(e,t,s,null,r)}}var gi=null;function ul(e,t,r,s){if(gi=null,e=po(s),e=bt(e),e!==null)if(t=zt(e),t===null)e=null;else if(r=t.tag,r===13){if(e=ku(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return gi=e,null}function Mu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Tf()){case fo:return 1;case Tu:return 4;case pi:case _f:return 16;case _u:return 536870912;default:return 16}default:return 16}}var Jn=null,vo=null,Zs=null;function Au(){if(Zs)return Zs;var e,t=vo,r=t.length,s,i="value"in Jn?Jn.value:Jn.textContent,a=i.length;for(e=0;e<r&&t[e]===i[e];e++);var l=r-e;for(s=1;s<=l&&t[r-s]===i[a-s];s++);return Zs=i.slice(e,1<s?1-s:void 0)}function ei(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function As(){return!0}function wc(){return!1}function dn(e){function t(r,s,i,a,l){this._reactName=r,this._targetInst=i,this.type=s,this.nativeEvent=a,this.target=l,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(r=e[o],this[o]=r?r(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?As:wc,this.isPropagationStopped=wc,this}return be(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=As)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=As)},persist:function(){},isPersistent:As}),t}var Nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yo=dn(Nr),bs=be({},Nr,{view:0,detail:0}),$f=dn(bs),ca,da,Pr,Di=be({},bs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pr&&(Pr&&e.type==="mousemove"?(ca=e.screenX-Pr.screenX,da=e.screenY-Pr.screenY):da=ca=0,Pr=e),ca)},movementY:function(e){return"movementY"in e?e.movementY:da}}),Sc=dn(Di),Bf=be({},Di,{dataTransfer:0}),qf=dn(Bf),Hf=be({},bs,{relatedTarget:0}),ua=dn(Hf),Uf=be({},Nr,{animationName:0,elapsedTime:0,pseudoElement:0}),Kf=dn(Uf),Wf=be({},Nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gf=dn(Wf),Qf=be({},Nr,{data:0}),Cc=dn(Qf),Xf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Jf[e])?!!t[e]:!1}function jo(){return Zf}var em=be({},bs,{key:function(e){if(e.key){var t=Xf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ei(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Yf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jo,charCode:function(e){return e.type==="keypress"?ei(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ei(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),nm=dn(em),tm=be({},Di,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tc=dn(tm),rm=be({},bs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jo}),sm=dn(rm),im=be({},Nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),am=dn(im),lm=be({},Di,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),om=dn(lm),cm=[9,13,27,32],No=Bn&&"CompositionEvent"in window,Kr=null;Bn&&"documentMode"in document&&(Kr=document.documentMode);var dm=Bn&&"TextEvent"in window&&!Kr,Fu=Bn&&(!No||Kr&&8<Kr&&11>=Kr),_c=" ",Lc=!1;function Vu(e,t){switch(e){case"keyup":return cm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Du(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ut=!1;function um(e,t){switch(e){case"compositionend":return Du(t);case"keypress":return t.which!==32?null:(Lc=!0,_c);case"textInput":return e=t.data,e===_c&&Lc?null:e;default:return null}}function hm(e,t){if(Ut)return e==="compositionend"||!No&&Vu(e,t)?(e=Au(),Zs=vo=Jn=null,Ut=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Fu&&t.locale!=="ko"?null:t.data;default:return null}}var pm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ec(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!pm[e.type]:t==="textarea"}function $u(e,t,r,s){vu(s),t=xi(t,"onChange"),0<t.length&&(r=new yo("onChange","change",null,r,s),e.push({event:r,listeners:t}))}var Wr=null,as=null;function fm(e){Ju(e,0)}function $i(e){var t=Gt(e);if(uu(t))return e}function mm(e,t){if(e==="change")return t}var Bu=!1;if(Bn){var ha;if(Bn){var pa="oninput"in document;if(!pa){var Oc=document.createElement("div");Oc.setAttribute("oninput","return;"),pa=typeof Oc.oninput=="function"}ha=pa}else ha=!1;Bu=ha&&(!document.documentMode||9<document.documentMode)}function Rc(){Wr&&(Wr.detachEvent("onpropertychange",qu),as=Wr=null)}function qu(e){if(e.propertyName==="value"&&$i(as)){var t=[];$u(t,as,e,po(e)),bu(fm,t)}}function gm(e,t,r){e==="focusin"?(Rc(),Wr=t,as=r,Wr.attachEvent("onpropertychange",qu)):e==="focusout"&&Rc()}function xm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $i(as)}function vm(e,t){if(e==="click")return $i(t)}function ym(e,t){if(e==="input"||e==="change")return $i(t)}function jm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Cn=typeof Object.is=="function"?Object.is:jm;function ls(e,t){if(Cn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(s=0;s<r.length;s++){var i=r[s];if(!Wa.call(t,i)||!Cn(e[i],t[i]))return!1}return!0}function Pc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ic(e,t){var r=Pc(e);e=0;for(var s;r;){if(r.nodeType===3){if(s=e+r.textContent.length,e<=t&&s>=t)return{node:r,offset:t-e};e=s}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Pc(r)}}function Hu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Uu(){for(var e=window,t=di();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=di(e.document)}return t}function bo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Nm(e){var t=Uu(),r=e.focusedElem,s=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Hu(r.ownerDocument.documentElement,r)){if(s!==null&&bo(r)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,a=Math.min(s.start,i);s=s.end===void 0?a:Math.min(s.end,i),!e.extend&&a>s&&(i=s,s=a,a=i),i=Ic(r,a);var l=Ic(r,s);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>s?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var bm=Bn&&"documentMode"in document&&11>=document.documentMode,Kt=null,hl=null,Gr=null,pl=!1;function zc(e,t,r){var s=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;pl||Kt==null||Kt!==di(s)||(s=Kt,"selectionStart"in s&&bo(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Gr&&ls(Gr,s)||(Gr=s,s=xi(hl,"onSelect"),0<s.length&&(t=new yo("onSelect","select",null,t,r),e.push({event:t,listeners:s}),t.target=Kt)))}function Fs(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Wt={animationend:Fs("Animation","AnimationEnd"),animationiteration:Fs("Animation","AnimationIteration"),animationstart:Fs("Animation","AnimationStart"),transitionend:Fs("Transition","TransitionEnd")},fa={},Ku={};Bn&&(Ku=document.createElement("div").style,"AnimationEvent"in window||(delete Wt.animationend.animation,delete Wt.animationiteration.animation,delete Wt.animationstart.animation),"TransitionEvent"in window||delete Wt.transitionend.transition);function Bi(e){if(fa[e])return fa[e];if(!Wt[e])return e;var t=Wt[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Ku)return fa[e]=t[r];return e}var Wu=Bi("animationend"),Gu=Bi("animationiteration"),Qu=Bi("animationstart"),Xu=Bi("transitionend"),Yu=new Map,Mc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ft(e,t){Yu.set(e,t),It(t,[e])}for(var ma=0;ma<Mc.length;ma++){var ga=Mc[ma],km=ga.toLowerCase(),wm=ga[0].toUpperCase()+ga.slice(1);ft(km,"on"+wm)}ft(Wu,"onAnimationEnd");ft(Gu,"onAnimationIteration");ft(Qu,"onAnimationStart");ft("dblclick","onDoubleClick");ft("focusin","onFocus");ft("focusout","onBlur");ft(Xu,"onTransitionEnd");pr("onMouseEnter",["mouseout","mouseover"]);pr("onMouseLeave",["mouseout","mouseover"]);pr("onPointerEnter",["pointerout","pointerover"]);pr("onPointerLeave",["pointerout","pointerover"]);It("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));It("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));It("onBeforeInput",["compositionend","keypress","textInput","paste"]);It("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));It("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));It("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $r="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sm=new Set("cancel close invalid load scroll toggle".split(" ").concat($r));function Ac(e,t,r){var s=e.type||"unknown-event";e.currentTarget=r,kf(s,t,void 0,e),e.currentTarget=null}function Ju(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var s=e[r],i=s.event;s=s.listeners;e:{var a=void 0;if(t)for(var l=s.length-1;0<=l;l--){var o=s[l],c=o.instance,u=o.currentTarget;if(o=o.listener,c!==a&&i.isPropagationStopped())break e;Ac(i,o,u),a=c}else for(l=0;l<s.length;l++){if(o=s[l],c=o.instance,u=o.currentTarget,o=o.listener,c!==a&&i.isPropagationStopped())break e;Ac(i,o,u),a=c}}}if(hi)throw e=ol,hi=!1,ol=null,e}function fe(e,t){var r=t[vl];r===void 0&&(r=t[vl]=new Set);var s=e+"__bubble";r.has(s)||(Zu(t,e,2,!1),r.add(s))}function xa(e,t,r){var s=0;t&&(s|=4),Zu(r,e,s,t)}var Vs="_reactListening"+Math.random().toString(36).slice(2);function os(e){if(!e[Vs]){e[Vs]=!0,au.forEach(function(r){r!=="selectionchange"&&(Sm.has(r)||xa(r,!1,e),xa(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Vs]||(t[Vs]=!0,xa("selectionchange",!1,t))}}function Zu(e,t,r,s){switch(Mu(t)){case 1:var i=Vf;break;case 4:i=Df;break;default:i=xo}r=i.bind(null,t,r,e),i=void 0,!ll||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),s?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function va(e,t,r,s,i){var a=s;if(!(t&1)&&!(t&2)&&s!==null)e:for(;;){if(s===null)return;var l=s.tag;if(l===3||l===4){var o=s.stateNode.containerInfo;if(o===i||o.nodeType===8&&o.parentNode===i)break;if(l===4)for(l=s.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;l=l.return}for(;o!==null;){if(l=bt(o),l===null)return;if(c=l.tag,c===5||c===6){s=a=l;continue e}o=o.parentNode}}s=s.return}bu(function(){var u=a,d=po(r),h=[];e:{var g=Yu.get(e);if(g!==void 0){var b=yo,N=e;switch(e){case"keypress":if(ei(r)===0)break e;case"keydown":case"keyup":b=nm;break;case"focusin":N="focus",b=ua;break;case"focusout":N="blur",b=ua;break;case"beforeblur":case"afterblur":b=ua;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Sc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=qf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=sm;break;case Wu:case Gu:case Qu:b=Kf;break;case Xu:b=am;break;case"scroll":b=$f;break;case"wheel":b=om;break;case"copy":case"cut":case"paste":b=Gf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Tc}var y=(t&4)!==0,j=!y&&e==="scroll",f=y?g!==null?g+"Capture":null:g;y=[];for(var m=u,x;m!==null;){x=m;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,f!==null&&(S=ts(m,f),S!=null&&y.push(cs(m,S,x)))),j)break;m=m.return}0<y.length&&(g=new b(g,N,null,r,d),h.push({event:g,listeners:y}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",g&&r!==il&&(N=r.relatedTarget||r.fromElement)&&(bt(N)||N[qn]))break e;if((b||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,b?(N=r.relatedTarget||r.toElement,b=u,N=N?bt(N):null,N!==null&&(j=zt(N),N!==j||N.tag!==5&&N.tag!==6)&&(N=null)):(b=null,N=u),b!==N)){if(y=Sc,S="onMouseLeave",f="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(y=Tc,S="onPointerLeave",f="onPointerEnter",m="pointer"),j=b==null?g:Gt(b),x=N==null?g:Gt(N),g=new y(S,m+"leave",b,r,d),g.target=j,g.relatedTarget=x,S=null,bt(d)===u&&(y=new y(f,m+"enter",N,r,d),y.target=x,y.relatedTarget=j,S=y),j=S,b&&N)n:{for(y=b,f=N,m=0,x=y;x;x=Ft(x))m++;for(x=0,S=f;S;S=Ft(S))x++;for(;0<m-x;)y=Ft(y),m--;for(;0<x-m;)f=Ft(f),x--;for(;m--;){if(y===f||f!==null&&y===f.alternate)break n;y=Ft(y),f=Ft(f)}y=null}else y=null;b!==null&&Fc(h,g,b,y,!1),N!==null&&j!==null&&Fc(h,j,N,y,!0)}}e:{if(g=u?Gt(u):window,b=g.nodeName&&g.nodeName.toLowerCase(),b==="select"||b==="input"&&g.type==="file")var v=mm;else if(Ec(g))if(Bu)v=ym;else{v=xm;var P=gm}else(b=g.nodeName)&&b.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(v=vm);if(v&&(v=v(e,u))){$u(h,v,r,d);break e}P&&P(e,g,u),e==="focusout"&&(P=g._wrapperState)&&P.controlled&&g.type==="number"&&el(g,"number",g.value)}switch(P=u?Gt(u):window,e){case"focusin":(Ec(P)||P.contentEditable==="true")&&(Kt=P,hl=u,Gr=null);break;case"focusout":Gr=hl=Kt=null;break;case"mousedown":pl=!0;break;case"contextmenu":case"mouseup":case"dragend":pl=!1,zc(h,r,d);break;case"selectionchange":if(bm)break;case"keydown":case"keyup":zc(h,r,d)}var C;if(No)e:{switch(e){case"compositionstart":var V="onCompositionStart";break e;case"compositionend":V="onCompositionEnd";break e;case"compositionupdate":V="onCompositionUpdate";break e}V=void 0}else Ut?Vu(e,r)&&(V="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(V="onCompositionStart");V&&(Fu&&r.locale!=="ko"&&(Ut||V!=="onCompositionStart"?V==="onCompositionEnd"&&Ut&&(C=Au()):(Jn=d,vo="value"in Jn?Jn.value:Jn.textContent,Ut=!0)),P=xi(u,V),0<P.length&&(V=new Cc(V,e,null,r,d),h.push({event:V,listeners:P}),C?V.data=C:(C=Du(r),C!==null&&(V.data=C)))),(C=dm?um(e,r):hm(e,r))&&(u=xi(u,"onBeforeInput"),0<u.length&&(d=new Cc("onBeforeInput","beforeinput",null,r,d),h.push({event:d,listeners:u}),d.data=C))}Ju(h,t)})}function cs(e,t,r){return{instance:e,listener:t,currentTarget:r}}function xi(e,t){for(var r=t+"Capture",s=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=ts(e,r),a!=null&&s.unshift(cs(e,a,i)),a=ts(e,t),a!=null&&s.push(cs(e,a,i))),e=e.return}return s}function Ft(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Fc(e,t,r,s,i){for(var a=t._reactName,l=[];r!==null&&r!==s;){var o=r,c=o.alternate,u=o.stateNode;if(c!==null&&c===s)break;o.tag===5&&u!==null&&(o=u,i?(c=ts(r,a),c!=null&&l.unshift(cs(r,c,o))):i||(c=ts(r,a),c!=null&&l.push(cs(r,c,o)))),r=r.return}l.length!==0&&e.push({event:t,listeners:l})}var Cm=/\r\n?/g,Tm=/\u0000|\uFFFD/g;function Vc(e){return(typeof e=="string"?e:""+e).replace(Cm,`
`).replace(Tm,"")}function Ds(e,t,r){if(t=Vc(t),Vc(e)!==t&&r)throw Error(K(425))}function vi(){}var fl=null,ml=null;function gl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xl=typeof setTimeout=="function"?setTimeout:void 0,_m=typeof clearTimeout=="function"?clearTimeout:void 0,Dc=typeof Promise=="function"?Promise:void 0,Lm=typeof queueMicrotask=="function"?queueMicrotask:typeof Dc<"u"?function(e){return Dc.resolve(null).then(e).catch(Em)}:xl;function Em(e){setTimeout(function(){throw e})}function ya(e,t){var r=t,s=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(s===0){e.removeChild(i),is(t);return}s--}else r!=="$"&&r!=="$?"&&r!=="$!"||s++;r=i}while(r);is(t)}function it(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function $c(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var br=Math.random().toString(36).slice(2),En="__reactFiber$"+br,ds="__reactProps$"+br,qn="__reactContainer$"+br,vl="__reactEvents$"+br,Om="__reactListeners$"+br,Rm="__reactHandles$"+br;function bt(e){var t=e[En];if(t)return t;for(var r=e.parentNode;r;){if(t=r[qn]||r[En]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=$c(e);e!==null;){if(r=e[En])return r;e=$c(e)}return t}e=r,r=e.parentNode}return null}function ks(e){return e=e[En]||e[qn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(K(33))}function qi(e){return e[ds]||null}var yl=[],Qt=-1;function mt(e){return{current:e}}function me(e){0>Qt||(e.current=yl[Qt],yl[Qt]=null,Qt--)}function pe(e,t){Qt++,yl[Qt]=e.current,e.current=t}var pt={},qe=mt(pt),en=mt(!1),Lt=pt;function fr(e,t){var r=e.type.contextTypes;if(!r)return pt;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in r)i[a]=t[a];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function nn(e){return e=e.childContextTypes,e!=null}function yi(){me(en),me(qe)}function Bc(e,t,r){if(qe.current!==pt)throw Error(K(168));pe(qe,t),pe(en,r)}function eh(e,t,r){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return r;s=s.getChildContext();for(var i in s)if(!(i in t))throw Error(K(108,gf(e)||"Unknown",i));return be({},r,s)}function ji(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||pt,Lt=qe.current,pe(qe,e),pe(en,en.current),!0}function qc(e,t,r){var s=e.stateNode;if(!s)throw Error(K(169));r?(e=eh(e,t,Lt),s.__reactInternalMemoizedMergedChildContext=e,me(en),me(qe),pe(qe,e)):me(en),pe(en,r)}var Mn=null,Hi=!1,ja=!1;function nh(e){Mn===null?Mn=[e]:Mn.push(e)}function Pm(e){Hi=!0,nh(e)}function gt(){if(!ja&&Mn!==null){ja=!0;var e=0,t=de;try{var r=Mn;for(de=1;e<r.length;e++){var s=r[e];do s=s(!0);while(s!==null)}Mn=null,Hi=!1}catch(i){throw Mn!==null&&(Mn=Mn.slice(e+1)),Cu(fo,gt),i}finally{de=t,ja=!1}}return null}var Xt=[],Yt=0,Ni=null,bi=0,un=[],hn=0,Et=null,Fn=1,Vn="";function jt(e,t){Xt[Yt++]=bi,Xt[Yt++]=Ni,Ni=e,bi=t}function th(e,t,r){un[hn++]=Fn,un[hn++]=Vn,un[hn++]=Et,Et=e;var s=Fn;e=Vn;var i=32-wn(s)-1;s&=~(1<<i),r+=1;var a=32-wn(t)+i;if(30<a){var l=i-i%5;a=(s&(1<<l)-1).toString(32),s>>=l,i-=l,Fn=1<<32-wn(t)+i|r<<i|s,Vn=a+e}else Fn=1<<a|r<<i|s,Vn=e}function ko(e){e.return!==null&&(jt(e,1),th(e,1,0))}function wo(e){for(;e===Ni;)Ni=Xt[--Yt],Xt[Yt]=null,bi=Xt[--Yt],Xt[Yt]=null;for(;e===Et;)Et=un[--hn],un[hn]=null,Vn=un[--hn],un[hn]=null,Fn=un[--hn],un[hn]=null}var ln=null,an=null,ge=!1,kn=null;function rh(e,t){var r=pn(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Hc(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ln=e,an=it(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ln=e,an=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Et!==null?{id:Fn,overflow:Vn}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=pn(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,ln=e,an=null,!0):!1;default:return!1}}function jl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Nl(e){if(ge){var t=an;if(t){var r=t;if(!Hc(e,t)){if(jl(e))throw Error(K(418));t=it(r.nextSibling);var s=ln;t&&Hc(e,t)?rh(s,r):(e.flags=e.flags&-4097|2,ge=!1,ln=e)}}else{if(jl(e))throw Error(K(418));e.flags=e.flags&-4097|2,ge=!1,ln=e}}}function Uc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ln=e}function $s(e){if(e!==ln)return!1;if(!ge)return Uc(e),ge=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!gl(e.type,e.memoizedProps)),t&&(t=an)){if(jl(e))throw sh(),Error(K(418));for(;t;)rh(e,t),t=it(t.nextSibling)}if(Uc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(K(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){an=it(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}an=null}}else an=ln?it(e.stateNode.nextSibling):null;return!0}function sh(){for(var e=an;e;)e=it(e.nextSibling)}function mr(){an=ln=null,ge=!1}function So(e){kn===null?kn=[e]:kn.push(e)}var Im=Kn.ReactCurrentBatchConfig;function Ir(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(K(309));var s=r.stateNode}if(!s)throw Error(K(147,e));var i=s,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(l){var o=i.refs;l===null?delete o[a]:o[a]=l},t._stringRef=a,t)}if(typeof e!="string")throw Error(K(284));if(!r._owner)throw Error(K(290,e))}return e}function Bs(e,t){throw e=Object.prototype.toString.call(t),Error(K(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Kc(e){var t=e._init;return t(e._payload)}function ih(e){function t(f,m){if(e){var x=f.deletions;x===null?(f.deletions=[m],f.flags|=16):x.push(m)}}function r(f,m){if(!e)return null;for(;m!==null;)t(f,m),m=m.sibling;return null}function s(f,m){for(f=new Map;m!==null;)m.key!==null?f.set(m.key,m):f.set(m.index,m),m=m.sibling;return f}function i(f,m){return f=ct(f,m),f.index=0,f.sibling=null,f}function a(f,m,x){return f.index=x,e?(x=f.alternate,x!==null?(x=x.index,x<m?(f.flags|=2,m):x):(f.flags|=2,m)):(f.flags|=1048576,m)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function o(f,m,x,S){return m===null||m.tag!==6?(m=Ta(x,f.mode,S),m.return=f,m):(m=i(m,x),m.return=f,m)}function c(f,m,x,S){var v=x.type;return v===Ht?d(f,m,x.props.children,S,x.key):m!==null&&(m.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===Gn&&Kc(v)===m.type)?(S=i(m,x.props),S.ref=Ir(f,m,x),S.return=f,S):(S=li(x.type,x.key,x.props,null,f.mode,S),S.ref=Ir(f,m,x),S.return=f,S)}function u(f,m,x,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==x.containerInfo||m.stateNode.implementation!==x.implementation?(m=_a(x,f.mode,S),m.return=f,m):(m=i(m,x.children||[]),m.return=f,m)}function d(f,m,x,S,v){return m===null||m.tag!==7?(m=_t(x,f.mode,S,v),m.return=f,m):(m=i(m,x),m.return=f,m)}function h(f,m,x){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Ta(""+m,f.mode,x),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Os:return x=li(m.type,m.key,m.props,null,f.mode,x),x.ref=Ir(f,null,m),x.return=f,x;case qt:return m=_a(m,f.mode,x),m.return=f,m;case Gn:var S=m._init;return h(f,S(m._payload),x)}if(Vr(m)||Lr(m))return m=_t(m,f.mode,x,null),m.return=f,m;Bs(f,m)}return null}function g(f,m,x,S){var v=m!==null?m.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return v!==null?null:o(f,m,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Os:return x.key===v?c(f,m,x,S):null;case qt:return x.key===v?u(f,m,x,S):null;case Gn:return v=x._init,g(f,m,v(x._payload),S)}if(Vr(x)||Lr(x))return v!==null?null:d(f,m,x,S,null);Bs(f,x)}return null}function b(f,m,x,S,v){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(x)||null,o(m,f,""+S,v);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Os:return f=f.get(S.key===null?x:S.key)||null,c(m,f,S,v);case qt:return f=f.get(S.key===null?x:S.key)||null,u(m,f,S,v);case Gn:var P=S._init;return b(f,m,x,P(S._payload),v)}if(Vr(S)||Lr(S))return f=f.get(x)||null,d(m,f,S,v,null);Bs(m,S)}return null}function N(f,m,x,S){for(var v=null,P=null,C=m,V=m=0,L=null;C!==null&&V<x.length;V++){C.index>V?(L=C,C=null):L=C.sibling;var _=g(f,C,x[V],S);if(_===null){C===null&&(C=L);break}e&&C&&_.alternate===null&&t(f,C),m=a(_,m,V),P===null?v=_:P.sibling=_,P=_,C=L}if(V===x.length)return r(f,C),ge&&jt(f,V),v;if(C===null){for(;V<x.length;V++)C=h(f,x[V],S),C!==null&&(m=a(C,m,V),P===null?v=C:P.sibling=C,P=C);return ge&&jt(f,V),v}for(C=s(f,C);V<x.length;V++)L=b(C,f,V,x[V],S),L!==null&&(e&&L.alternate!==null&&C.delete(L.key===null?V:L.key),m=a(L,m,V),P===null?v=L:P.sibling=L,P=L);return e&&C.forEach(function(q){return t(f,q)}),ge&&jt(f,V),v}function y(f,m,x,S){var v=Lr(x);if(typeof v!="function")throw Error(K(150));if(x=v.call(x),x==null)throw Error(K(151));for(var P=v=null,C=m,V=m=0,L=null,_=x.next();C!==null&&!_.done;V++,_=x.next()){C.index>V?(L=C,C=null):L=C.sibling;var q=g(f,C,_.value,S);if(q===null){C===null&&(C=L);break}e&&C&&q.alternate===null&&t(f,C),m=a(q,m,V),P===null?v=q:P.sibling=q,P=q,C=L}if(_.done)return r(f,C),ge&&jt(f,V),v;if(C===null){for(;!_.done;V++,_=x.next())_=h(f,_.value,S),_!==null&&(m=a(_,m,V),P===null?v=_:P.sibling=_,P=_);return ge&&jt(f,V),v}for(C=s(f,C);!_.done;V++,_=x.next())_=b(C,f,V,_.value,S),_!==null&&(e&&_.alternate!==null&&C.delete(_.key===null?V:_.key),m=a(_,m,V),P===null?v=_:P.sibling=_,P=_);return e&&C.forEach(function(W){return t(f,W)}),ge&&jt(f,V),v}function j(f,m,x,S){if(typeof x=="object"&&x!==null&&x.type===Ht&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Os:e:{for(var v=x.key,P=m;P!==null;){if(P.key===v){if(v=x.type,v===Ht){if(P.tag===7){r(f,P.sibling),m=i(P,x.props.children),m.return=f,f=m;break e}}else if(P.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===Gn&&Kc(v)===P.type){r(f,P.sibling),m=i(P,x.props),m.ref=Ir(f,P,x),m.return=f,f=m;break e}r(f,P);break}else t(f,P);P=P.sibling}x.type===Ht?(m=_t(x.props.children,f.mode,S,x.key),m.return=f,f=m):(S=li(x.type,x.key,x.props,null,f.mode,S),S.ref=Ir(f,m,x),S.return=f,f=S)}return l(f);case qt:e:{for(P=x.key;m!==null;){if(m.key===P)if(m.tag===4&&m.stateNode.containerInfo===x.containerInfo&&m.stateNode.implementation===x.implementation){r(f,m.sibling),m=i(m,x.children||[]),m.return=f,f=m;break e}else{r(f,m);break}else t(f,m);m=m.sibling}m=_a(x,f.mode,S),m.return=f,f=m}return l(f);case Gn:return P=x._init,j(f,m,P(x._payload),S)}if(Vr(x))return N(f,m,x,S);if(Lr(x))return y(f,m,x,S);Bs(f,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,m!==null&&m.tag===6?(r(f,m.sibling),m=i(m,x),m.return=f,f=m):(r(f,m),m=Ta(x,f.mode,S),m.return=f,f=m),l(f)):r(f,m)}return j}var gr=ih(!0),ah=ih(!1),ki=mt(null),wi=null,Jt=null,Co=null;function To(){Co=Jt=wi=null}function _o(e){var t=ki.current;me(ki),e._currentValue=t}function bl(e,t,r){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===r)break;e=e.return}}function ur(e,t){wi=e,Co=Jt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ze=!0),e.firstContext=null)}function mn(e){var t=e._currentValue;if(Co!==e)if(e={context:e,memoizedValue:t,next:null},Jt===null){if(wi===null)throw Error(K(308));Jt=e,wi.dependencies={lanes:0,firstContext:e}}else Jt=Jt.next=e;return t}var kt=null;function Lo(e){kt===null?kt=[e]:kt.push(e)}function lh(e,t,r,s){var i=t.interleaved;return i===null?(r.next=r,Lo(t)):(r.next=i.next,i.next=r),t.interleaved=r,Hn(e,s)}function Hn(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Qn=!1;function Eo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function oh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Dn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function at(e,t,r){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,ae&2){var i=s.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),s.pending=t,Hn(e,r)}return i=s.interleaved,i===null?(t.next=t,Lo(s)):(t.next=i.next,i.next=t),s.interleaved=t,Hn(e,r)}function ni(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,mo(e,r)}}function Wc(e,t){var r=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,r===s)){var i=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var l={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?i=a=l:a=a.next=l,r=r.next}while(r!==null);a===null?i=a=t:a=a.next=t}else i=a=t;r={baseState:s.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:s.shared,effects:s.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Si(e,t,r,s){var i=e.updateQueue;Qn=!1;var a=i.firstBaseUpdate,l=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var c=o,u=c.next;c.next=null,l===null?a=u:l.next=u,l=c;var d=e.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==l&&(o===null?d.firstBaseUpdate=u:o.next=u,d.lastBaseUpdate=c))}if(a!==null){var h=i.baseState;l=0,d=u=c=null,o=a;do{var g=o.lane,b=o.eventTime;if((s&g)===g){d!==null&&(d=d.next={eventTime:b,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var N=e,y=o;switch(g=t,b=r,y.tag){case 1:if(N=y.payload,typeof N=="function"){h=N.call(b,h,g);break e}h=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=y.payload,g=typeof N=="function"?N.call(b,h,g):N,g==null)break e;h=be({},h,g);break e;case 2:Qn=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[o]:g.push(o))}else b={eventTime:b,lane:g,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(u=d=b,c=h):d=d.next=b,l|=g;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;g=o,o=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(d===null&&(c=h),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Rt|=l,e.lanes=l,e.memoizedState=h}}function Gc(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],i=s.callback;if(i!==null){if(s.callback=null,s=r,typeof i!="function")throw Error(K(191,i));i.call(s)}}}var ws={},Rn=mt(ws),us=mt(ws),hs=mt(ws);function wt(e){if(e===ws)throw Error(K(174));return e}function Oo(e,t){switch(pe(hs,t),pe(us,e),pe(Rn,ws),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:tl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=tl(t,e)}me(Rn),pe(Rn,t)}function xr(){me(Rn),me(us),me(hs)}function ch(e){wt(hs.current);var t=wt(Rn.current),r=tl(t,e.type);t!==r&&(pe(us,e),pe(Rn,r))}function Ro(e){us.current===e&&(me(Rn),me(us))}var je=mt(0);function Ci(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Na=[];function Po(){for(var e=0;e<Na.length;e++)Na[e]._workInProgressVersionPrimary=null;Na.length=0}var ti=Kn.ReactCurrentDispatcher,ba=Kn.ReactCurrentBatchConfig,Ot=0,Ne=null,Oe=null,Ie=null,Ti=!1,Qr=!1,ps=0,zm=0;function De(){throw Error(K(321))}function Io(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Cn(e[r],t[r]))return!1;return!0}function zo(e,t,r,s,i,a){if(Ot=a,Ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ti.current=e===null||e.memoizedState===null?Vm:Dm,e=r(s,i),Qr){a=0;do{if(Qr=!1,ps=0,25<=a)throw Error(K(301));a+=1,Ie=Oe=null,t.updateQueue=null,ti.current=$m,e=r(s,i)}while(Qr)}if(ti.current=_i,t=Oe!==null&&Oe.next!==null,Ot=0,Ie=Oe=Ne=null,Ti=!1,t)throw Error(K(300));return e}function Mo(){var e=ps!==0;return ps=0,e}function Ln(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ie===null?Ne.memoizedState=Ie=e:Ie=Ie.next=e,Ie}function gn(){if(Oe===null){var e=Ne.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var t=Ie===null?Ne.memoizedState:Ie.next;if(t!==null)Ie=t,Oe=e;else{if(e===null)throw Error(K(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},Ie===null?Ne.memoizedState=Ie=e:Ie=Ie.next=e}return Ie}function fs(e,t){return typeof t=="function"?t(e):t}function ka(e){var t=gn(),r=t.queue;if(r===null)throw Error(K(311));r.lastRenderedReducer=e;var s=Oe,i=s.baseQueue,a=r.pending;if(a!==null){if(i!==null){var l=i.next;i.next=a.next,a.next=l}s.baseQueue=i=a,r.pending=null}if(i!==null){a=i.next,s=s.baseState;var o=l=null,c=null,u=a;do{var d=u.lane;if((Ot&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),s=u.hasEagerState?u.eagerState:e(s,u.action);else{var h={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(o=c=h,l=s):c=c.next=h,Ne.lanes|=d,Rt|=d}u=u.next}while(u!==null&&u!==a);c===null?l=s:c.next=o,Cn(s,t.memoizedState)||(Ze=!0),t.memoizedState=s,t.baseState=l,t.baseQueue=c,r.lastRenderedState=s}if(e=r.interleaved,e!==null){i=e;do a=i.lane,Ne.lanes|=a,Rt|=a,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function wa(e){var t=gn(),r=t.queue;if(r===null)throw Error(K(311));r.lastRenderedReducer=e;var s=r.dispatch,i=r.pending,a=t.memoizedState;if(i!==null){r.pending=null;var l=i=i.next;do a=e(a,l.action),l=l.next;while(l!==i);Cn(a,t.memoizedState)||(Ze=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),r.lastRenderedState=a}return[a,s]}function dh(){}function uh(e,t){var r=Ne,s=gn(),i=t(),a=!Cn(s.memoizedState,i);if(a&&(s.memoizedState=i,Ze=!0),s=s.queue,Ao(fh.bind(null,r,s,e),[e]),s.getSnapshot!==t||a||Ie!==null&&Ie.memoizedState.tag&1){if(r.flags|=2048,ms(9,ph.bind(null,r,s,i,t),void 0,null),ze===null)throw Error(K(349));Ot&30||hh(r,t,i)}return i}function hh(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Ne.updateQueue,t===null?(t={lastEffect:null,stores:null},Ne.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function ph(e,t,r,s){t.value=r,t.getSnapshot=s,mh(t)&&gh(e)}function fh(e,t,r){return r(function(){mh(t)&&gh(e)})}function mh(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Cn(e,r)}catch{return!0}}function gh(e){var t=Hn(e,1);t!==null&&Sn(t,e,1,-1)}function Qc(e){var t=Ln();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fs,lastRenderedState:e},t.queue=e,e=e.dispatch=Fm.bind(null,Ne,e),[t.memoizedState,e]}function ms(e,t,r,s){return e={tag:e,create:t,destroy:r,deps:s,next:null},t=Ne.updateQueue,t===null?(t={lastEffect:null,stores:null},Ne.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(s=r.next,r.next=e,e.next=s,t.lastEffect=e)),e}function xh(){return gn().memoizedState}function ri(e,t,r,s){var i=Ln();Ne.flags|=e,i.memoizedState=ms(1|t,r,void 0,s===void 0?null:s)}function Ui(e,t,r,s){var i=gn();s=s===void 0?null:s;var a=void 0;if(Oe!==null){var l=Oe.memoizedState;if(a=l.destroy,s!==null&&Io(s,l.deps)){i.memoizedState=ms(t,r,a,s);return}}Ne.flags|=e,i.memoizedState=ms(1|t,r,a,s)}function Xc(e,t){return ri(8390656,8,e,t)}function Ao(e,t){return Ui(2048,8,e,t)}function vh(e,t){return Ui(4,2,e,t)}function yh(e,t){return Ui(4,4,e,t)}function jh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Nh(e,t,r){return r=r!=null?r.concat([e]):null,Ui(4,4,jh.bind(null,t,e),r)}function Fo(){}function bh(e,t){var r=gn();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&Io(t,s[1])?s[0]:(r.memoizedState=[e,t],e)}function kh(e,t){var r=gn();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&Io(t,s[1])?s[0]:(e=e(),r.memoizedState=[e,t],e)}function wh(e,t,r){return Ot&21?(Cn(r,t)||(r=Lu(),Ne.lanes|=r,Rt|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ze=!0),e.memoizedState=r)}function Mm(e,t){var r=de;de=r!==0&&4>r?r:4,e(!0);var s=ba.transition;ba.transition={};try{e(!1),t()}finally{de=r,ba.transition=s}}function Sh(){return gn().memoizedState}function Am(e,t,r){var s=ot(e);if(r={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null},Ch(e))Th(t,r);else if(r=lh(e,t,r,s),r!==null){var i=Qe();Sn(r,e,s,i),_h(r,t,s)}}function Fm(e,t,r){var s=ot(e),i={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null};if(Ch(e))Th(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var l=t.lastRenderedState,o=a(l,r);if(i.hasEagerState=!0,i.eagerState=o,Cn(o,l)){var c=t.interleaved;c===null?(i.next=i,Lo(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}r=lh(e,t,i,s),r!==null&&(i=Qe(),Sn(r,e,s,i),_h(r,t,s))}}function Ch(e){var t=e.alternate;return e===Ne||t!==null&&t===Ne}function Th(e,t){Qr=Ti=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function _h(e,t,r){if(r&4194240){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,mo(e,r)}}var _i={readContext:mn,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useInsertionEffect:De,useLayoutEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useMutableSource:De,useSyncExternalStore:De,useId:De,unstable_isNewReconciler:!1},Vm={readContext:mn,useCallback:function(e,t){return Ln().memoizedState=[e,t===void 0?null:t],e},useContext:mn,useEffect:Xc,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,ri(4194308,4,jh.bind(null,t,e),r)},useLayoutEffect:function(e,t){return ri(4194308,4,e,t)},useInsertionEffect:function(e,t){return ri(4,2,e,t)},useMemo:function(e,t){var r=Ln();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var s=Ln();return t=r!==void 0?r(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=Am.bind(null,Ne,e),[s.memoizedState,e]},useRef:function(e){var t=Ln();return e={current:e},t.memoizedState=e},useState:Qc,useDebugValue:Fo,useDeferredValue:function(e){return Ln().memoizedState=e},useTransition:function(){var e=Qc(!1),t=e[0];return e=Mm.bind(null,e[1]),Ln().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var s=Ne,i=Ln();if(ge){if(r===void 0)throw Error(K(407));r=r()}else{if(r=t(),ze===null)throw Error(K(349));Ot&30||hh(s,t,r)}i.memoizedState=r;var a={value:r,getSnapshot:t};return i.queue=a,Xc(fh.bind(null,s,a,e),[e]),s.flags|=2048,ms(9,ph.bind(null,s,a,r,t),void 0,null),r},useId:function(){var e=Ln(),t=ze.identifierPrefix;if(ge){var r=Vn,s=Fn;r=(s&~(1<<32-wn(s)-1)).toString(32)+r,t=":"+t+"R"+r,r=ps++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=zm++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Dm={readContext:mn,useCallback:bh,useContext:mn,useEffect:Ao,useImperativeHandle:Nh,useInsertionEffect:vh,useLayoutEffect:yh,useMemo:kh,useReducer:ka,useRef:xh,useState:function(){return ka(fs)},useDebugValue:Fo,useDeferredValue:function(e){var t=gn();return wh(t,Oe.memoizedState,e)},useTransition:function(){var e=ka(fs)[0],t=gn().memoizedState;return[e,t]},useMutableSource:dh,useSyncExternalStore:uh,useId:Sh,unstable_isNewReconciler:!1},$m={readContext:mn,useCallback:bh,useContext:mn,useEffect:Ao,useImperativeHandle:Nh,useInsertionEffect:vh,useLayoutEffect:yh,useMemo:kh,useReducer:wa,useRef:xh,useState:function(){return wa(fs)},useDebugValue:Fo,useDeferredValue:function(e){var t=gn();return Oe===null?t.memoizedState=e:wh(t,Oe.memoizedState,e)},useTransition:function(){var e=wa(fs)[0],t=gn().memoizedState;return[e,t]},useMutableSource:dh,useSyncExternalStore:uh,useId:Sh,unstable_isNewReconciler:!1};function Nn(e,t){if(e&&e.defaultProps){t=be({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function kl(e,t,r,s){t=e.memoizedState,r=r(s,t),r=r==null?t:be({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ki={isMounted:function(e){return(e=e._reactInternals)?zt(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var s=Qe(),i=ot(e),a=Dn(s,i);a.payload=t,r!=null&&(a.callback=r),t=at(e,a,i),t!==null&&(Sn(t,e,i,s),ni(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var s=Qe(),i=ot(e),a=Dn(s,i);a.tag=1,a.payload=t,r!=null&&(a.callback=r),t=at(e,a,i),t!==null&&(Sn(t,e,i,s),ni(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Qe(),s=ot(e),i=Dn(r,s);i.tag=2,t!=null&&(i.callback=t),t=at(e,i,s),t!==null&&(Sn(t,e,s,r),ni(t,e,s))}};function Yc(e,t,r,s,i,a,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,a,l):t.prototype&&t.prototype.isPureReactComponent?!ls(r,s)||!ls(i,a):!0}function Lh(e,t,r){var s=!1,i=pt,a=t.contextType;return typeof a=="object"&&a!==null?a=mn(a):(i=nn(t)?Lt:qe.current,s=t.contextTypes,a=(s=s!=null)?fr(e,i):pt),t=new t(r,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ki,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Jc(e,t,r,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,s),t.state!==e&&Ki.enqueueReplaceState(t,t.state,null)}function wl(e,t,r,s){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},Eo(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=mn(a):(a=nn(t)?Lt:qe.current,i.context=fr(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(kl(e,t,a,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ki.enqueueReplaceState(i,i.state,null),Si(e,r,i,s),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function vr(e,t){try{var r="",s=t;do r+=mf(s),s=s.return;while(s);var i=r}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function Sa(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Sl(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Bm=typeof WeakMap=="function"?WeakMap:Map;function Eh(e,t,r){r=Dn(-1,r),r.tag=3,r.payload={element:null};var s=t.value;return r.callback=function(){Ei||(Ei=!0,zl=s),Sl(e,t)},r}function Oh(e,t,r){r=Dn(-1,r),r.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var i=t.value;r.payload=function(){return s(i)},r.callback=function(){Sl(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){Sl(e,t),typeof s!="function"&&(lt===null?lt=new Set([this]):lt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),r}function Zc(e,t,r){var s=e.pingCache;if(s===null){s=e.pingCache=new Bm;var i=new Set;s.set(t,i)}else i=s.get(t),i===void 0&&(i=new Set,s.set(t,i));i.has(r)||(i.add(r),e=tg.bind(null,e,t,r),t.then(e,e))}function ed(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function nd(e,t,r,s,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Dn(-1,1),t.tag=2,at(r,t,1))),r.lanes|=1),e)}var qm=Kn.ReactCurrentOwner,Ze=!1;function We(e,t,r,s){t.child=e===null?ah(t,null,r,s):gr(t,e.child,r,s)}function td(e,t,r,s,i){r=r.render;var a=t.ref;return ur(t,i),s=zo(e,t,r,s,a,i),r=Mo(),e!==null&&!Ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Un(e,t,i)):(ge&&r&&ko(t),t.flags|=1,We(e,t,s,i),t.child)}function rd(e,t,r,s,i){if(e===null){var a=r.type;return typeof a=="function"&&!Ko(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=a,Rh(e,t,a,s,i)):(e=li(r.type,null,s,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var l=a.memoizedProps;if(r=r.compare,r=r!==null?r:ls,r(l,s)&&e.ref===t.ref)return Un(e,t,i)}return t.flags|=1,e=ct(a,s),e.ref=t.ref,e.return=t,t.child=e}function Rh(e,t,r,s,i){if(e!==null){var a=e.memoizedProps;if(ls(a,s)&&e.ref===t.ref)if(Ze=!1,t.pendingProps=s=a,(e.lanes&i)!==0)e.flags&131072&&(Ze=!0);else return t.lanes=e.lanes,Un(e,t,i)}return Cl(e,t,r,s,i)}function Ph(e,t,r){var s=t.pendingProps,i=s.children,a=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(er,rn),rn|=r;else{if(!(r&1073741824))return e=a!==null?a.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,pe(er,rn),rn|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=a!==null?a.baseLanes:r,pe(er,rn),rn|=s}else a!==null?(s=a.baseLanes|r,t.memoizedState=null):s=r,pe(er,rn),rn|=s;return We(e,t,i,r),t.child}function Ih(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Cl(e,t,r,s,i){var a=nn(r)?Lt:qe.current;return a=fr(t,a),ur(t,i),r=zo(e,t,r,s,a,i),s=Mo(),e!==null&&!Ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Un(e,t,i)):(ge&&s&&ko(t),t.flags|=1,We(e,t,r,i),t.child)}function sd(e,t,r,s,i){if(nn(r)){var a=!0;ji(t)}else a=!1;if(ur(t,i),t.stateNode===null)si(e,t),Lh(t,r,s),wl(t,r,s,i),s=!0;else if(e===null){var l=t.stateNode,o=t.memoizedProps;l.props=o;var c=l.context,u=r.contextType;typeof u=="object"&&u!==null?u=mn(u):(u=nn(r)?Lt:qe.current,u=fr(t,u));var d=r.getDerivedStateFromProps,h=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==s||c!==u)&&Jc(t,l,s,u),Qn=!1;var g=t.memoizedState;l.state=g,Si(t,s,l,i),c=t.memoizedState,o!==s||g!==c||en.current||Qn?(typeof d=="function"&&(kl(t,r,d,s),c=t.memoizedState),(o=Qn||Yc(t,r,o,s,g,c,u))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=c),l.props=s,l.state=c,l.context=u,s=o):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{l=t.stateNode,oh(e,t),o=t.memoizedProps,u=t.type===t.elementType?o:Nn(t.type,o),l.props=u,h=t.pendingProps,g=l.context,c=r.contextType,typeof c=="object"&&c!==null?c=mn(c):(c=nn(r)?Lt:qe.current,c=fr(t,c));var b=r.getDerivedStateFromProps;(d=typeof b=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==h||g!==c)&&Jc(t,l,s,c),Qn=!1,g=t.memoizedState,l.state=g,Si(t,s,l,i);var N=t.memoizedState;o!==h||g!==N||en.current||Qn?(typeof b=="function"&&(kl(t,r,b,s),N=t.memoizedState),(u=Qn||Yc(t,r,u,s,g,N,c)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(s,N,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(s,N,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=N),l.props=s,l.state=N,l.context=c,s=u):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),s=!1)}return Tl(e,t,r,s,a,i)}function Tl(e,t,r,s,i,a){Ih(e,t);var l=(t.flags&128)!==0;if(!s&&!l)return i&&qc(t,r,!1),Un(e,t,a);s=t.stateNode,qm.current=t;var o=l&&typeof r.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&l?(t.child=gr(t,e.child,null,a),t.child=gr(t,null,o,a)):We(e,t,o,a),t.memoizedState=s.state,i&&qc(t,r,!0),t.child}function zh(e){var t=e.stateNode;t.pendingContext?Bc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Bc(e,t.context,!1),Oo(e,t.containerInfo)}function id(e,t,r,s,i){return mr(),So(i),t.flags|=256,We(e,t,r,s),t.child}var _l={dehydrated:null,treeContext:null,retryLane:0};function Ll(e){return{baseLanes:e,cachePool:null,transitions:null}}function Mh(e,t,r){var s=t.pendingProps,i=je.current,a=!1,l=(t.flags&128)!==0,o;if((o=l)||(o=e!==null&&e.memoizedState===null?!1:(i&2)!==0),o?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),pe(je,i&1),e===null)return Nl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=s.children,e=s.fallback,a?(s=t.mode,a=t.child,l={mode:"hidden",children:l},!(s&1)&&a!==null?(a.childLanes=0,a.pendingProps=l):a=Qi(l,s,0,null),e=_t(e,s,r,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Ll(r),t.memoizedState=_l,e):Vo(t,l));if(i=e.memoizedState,i!==null&&(o=i.dehydrated,o!==null))return Hm(e,t,l,s,o,i,r);if(a){a=s.fallback,l=t.mode,i=e.child,o=i.sibling;var c={mode:"hidden",children:s.children};return!(l&1)&&t.child!==i?(s=t.child,s.childLanes=0,s.pendingProps=c,t.deletions=null):(s=ct(i,c),s.subtreeFlags=i.subtreeFlags&14680064),o!==null?a=ct(o,a):(a=_t(a,l,r,null),a.flags|=2),a.return=t,s.return=t,s.sibling=a,t.child=s,s=a,a=t.child,l=e.child.memoizedState,l=l===null?Ll(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},a.memoizedState=l,a.childLanes=e.childLanes&~r,t.memoizedState=_l,s}return a=e.child,e=a.sibling,s=ct(a,{mode:"visible",children:s.children}),!(t.mode&1)&&(s.lanes=r),s.return=t,s.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=s,t.memoizedState=null,s}function Vo(e,t){return t=Qi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function qs(e,t,r,s){return s!==null&&So(s),gr(t,e.child,null,r),e=Vo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Hm(e,t,r,s,i,a,l){if(r)return t.flags&256?(t.flags&=-257,s=Sa(Error(K(422))),qs(e,t,l,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=s.fallback,i=t.mode,s=Qi({mode:"visible",children:s.children},i,0,null),a=_t(a,i,l,null),a.flags|=2,s.return=t,a.return=t,s.sibling=a,t.child=s,t.mode&1&&gr(t,e.child,null,l),t.child.memoizedState=Ll(l),t.memoizedState=_l,a);if(!(t.mode&1))return qs(e,t,l,null);if(i.data==="$!"){if(s=i.nextSibling&&i.nextSibling.dataset,s)var o=s.dgst;return s=o,a=Error(K(419)),s=Sa(a,s,void 0),qs(e,t,l,s)}if(o=(l&e.childLanes)!==0,Ze||o){if(s=ze,s!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(s.suspendedLanes|l)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Hn(e,i),Sn(s,e,i,-1))}return Uo(),s=Sa(Error(K(421))),qs(e,t,l,s)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=rg.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,an=it(i.nextSibling),ln=t,ge=!0,kn=null,e!==null&&(un[hn++]=Fn,un[hn++]=Vn,un[hn++]=Et,Fn=e.id,Vn=e.overflow,Et=t),t=Vo(t,s.children),t.flags|=4096,t)}function ad(e,t,r){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),bl(e.return,t,r)}function Ca(e,t,r,s,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:r,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=s,a.tail=r,a.tailMode=i)}function Ah(e,t,r){var s=t.pendingProps,i=s.revealOrder,a=s.tail;if(We(e,t,s.children,r),s=je.current,s&2)s=s&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ad(e,r,t);else if(e.tag===19)ad(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(pe(je,s),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&Ci(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),Ca(t,!1,i,r,a);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ci(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}Ca(t,!0,r,null,a);break;case"together":Ca(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function si(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Un(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Rt|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(K(153));if(t.child!==null){for(e=t.child,r=ct(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=ct(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Um(e,t,r){switch(t.tag){case 3:zh(t),mr();break;case 5:ch(t);break;case 1:nn(t.type)&&ji(t);break;case 4:Oo(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,i=t.memoizedProps.value;pe(ki,s._currentValue),s._currentValue=i;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(pe(je,je.current&1),t.flags|=128,null):r&t.child.childLanes?Mh(e,t,r):(pe(je,je.current&1),e=Un(e,t,r),e!==null?e.sibling:null);pe(je,je.current&1);break;case 19:if(s=(r&t.childLanes)!==0,e.flags&128){if(s)return Ah(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),pe(je,je.current),s)break;return null;case 22:case 23:return t.lanes=0,Ph(e,t,r)}return Un(e,t,r)}var Fh,El,Vh,Dh;Fh=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};El=function(){};Vh=function(e,t,r,s){var i=e.memoizedProps;if(i!==s){e=t.stateNode,wt(Rn.current);var a=null;switch(r){case"input":i=Ja(e,i),s=Ja(e,s),a=[];break;case"select":i=be({},i,{value:void 0}),s=be({},s,{value:void 0}),a=[];break;case"textarea":i=nl(e,i),s=nl(e,s),a=[];break;default:typeof i.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=vi)}rl(r,s);var l;r=null;for(u in i)if(!s.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var o=i[u];for(l in o)o.hasOwnProperty(l)&&(r||(r={}),r[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(es.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in s){var c=s[u];if(o=i!=null?i[u]:void 0,s.hasOwnProperty(u)&&c!==o&&(c!=null||o!=null))if(u==="style")if(o){for(l in o)!o.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(r||(r={}),r[l]="");for(l in c)c.hasOwnProperty(l)&&o[l]!==c[l]&&(r||(r={}),r[l]=c[l])}else r||(a||(a=[]),a.push(u,r)),r=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(a=a||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(a=a||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(es.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&fe("scroll",e),a||o===c||(a=[])):(a=a||[]).push(u,c))}r&&(a=a||[]).push("style",r);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};Dh=function(e,t,r,s){r!==s&&(t.flags|=4)};function zr(e,t){if(!ge)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function $e(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,s=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,s|=i.subtreeFlags&14680064,s|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,s|=i.subtreeFlags,s|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=s,e.childLanes=r,t}function Km(e,t,r){var s=t.pendingProps;switch(wo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(t),null;case 1:return nn(t.type)&&yi(),$e(t),null;case 3:return s=t.stateNode,xr(),me(en),me(qe),Po(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&($s(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,kn!==null&&(Fl(kn),kn=null))),El(e,t),$e(t),null;case 5:Ro(t);var i=wt(hs.current);if(r=t.type,e!==null&&t.stateNode!=null)Vh(e,t,r,s,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(K(166));return $e(t),null}if(e=wt(Rn.current),$s(t)){s=t.stateNode,r=t.type;var a=t.memoizedProps;switch(s[En]=t,s[ds]=a,e=(t.mode&1)!==0,r){case"dialog":fe("cancel",s),fe("close",s);break;case"iframe":case"object":case"embed":fe("load",s);break;case"video":case"audio":for(i=0;i<$r.length;i++)fe($r[i],s);break;case"source":fe("error",s);break;case"img":case"image":case"link":fe("error",s),fe("load",s);break;case"details":fe("toggle",s);break;case"input":mc(s,a),fe("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!a.multiple},fe("invalid",s);break;case"textarea":xc(s,a),fe("invalid",s)}rl(r,a),i=null;for(var l in a)if(a.hasOwnProperty(l)){var o=a[l];l==="children"?typeof o=="string"?s.textContent!==o&&(a.suppressHydrationWarning!==!0&&Ds(s.textContent,o,e),i=["children",o]):typeof o=="number"&&s.textContent!==""+o&&(a.suppressHydrationWarning!==!0&&Ds(s.textContent,o,e),i=["children",""+o]):es.hasOwnProperty(l)&&o!=null&&l==="onScroll"&&fe("scroll",s)}switch(r){case"input":Rs(s),gc(s,a,!0);break;case"textarea":Rs(s),vc(s);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(s.onclick=vi)}s=i,t.updateQueue=s,s!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fu(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=l.createElement(r,{is:s.is}):(e=l.createElement(r),r==="select"&&(l=e,s.multiple?l.multiple=!0:s.size&&(l.size=s.size))):e=l.createElementNS(e,r),e[En]=t,e[ds]=s,Fh(e,t,!1,!1),t.stateNode=e;e:{switch(l=sl(r,s),r){case"dialog":fe("cancel",e),fe("close",e),i=s;break;case"iframe":case"object":case"embed":fe("load",e),i=s;break;case"video":case"audio":for(i=0;i<$r.length;i++)fe($r[i],e);i=s;break;case"source":fe("error",e),i=s;break;case"img":case"image":case"link":fe("error",e),fe("load",e),i=s;break;case"details":fe("toggle",e),i=s;break;case"input":mc(e,s),i=Ja(e,s),fe("invalid",e);break;case"option":i=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},i=be({},s,{value:void 0}),fe("invalid",e);break;case"textarea":xc(e,s),i=nl(e,s),fe("invalid",e);break;default:i=s}rl(r,i),o=i;for(a in o)if(o.hasOwnProperty(a)){var c=o[a];a==="style"?xu(e,c):a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&mu(e,c)):a==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&ns(e,c):typeof c=="number"&&ns(e,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(es.hasOwnProperty(a)?c!=null&&a==="onScroll"&&fe("scroll",e):c!=null&&oo(e,a,c,l))}switch(r){case"input":Rs(e),gc(e,s,!1);break;case"textarea":Rs(e),vc(e);break;case"option":s.value!=null&&e.setAttribute("value",""+ht(s.value));break;case"select":e.multiple=!!s.multiple,a=s.value,a!=null?lr(e,!!s.multiple,a,!1):s.defaultValue!=null&&lr(e,!!s.multiple,s.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=vi)}switch(r){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return $e(t),null;case 6:if(e&&t.stateNode!=null)Dh(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(K(166));if(r=wt(hs.current),wt(Rn.current),$s(t)){if(s=t.stateNode,r=t.memoizedProps,s[En]=t,(a=s.nodeValue!==r)&&(e=ln,e!==null))switch(e.tag){case 3:Ds(s.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ds(s.nodeValue,r,(e.mode&1)!==0)}a&&(t.flags|=4)}else s=(r.nodeType===9?r:r.ownerDocument).createTextNode(s),s[En]=t,t.stateNode=s}return $e(t),null;case 13:if(me(je),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ge&&an!==null&&t.mode&1&&!(t.flags&128))sh(),mr(),t.flags|=98560,a=!1;else if(a=$s(t),s!==null&&s.dehydrated!==null){if(e===null){if(!a)throw Error(K(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(K(317));a[En]=t}else mr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;$e(t),a=!1}else kn!==null&&(Fl(kn),kn=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,t.mode&1&&(e===null||je.current&1?Re===0&&(Re=3):Uo())),t.updateQueue!==null&&(t.flags|=4),$e(t),null);case 4:return xr(),El(e,t),e===null&&os(t.stateNode.containerInfo),$e(t),null;case 10:return _o(t.type._context),$e(t),null;case 17:return nn(t.type)&&yi(),$e(t),null;case 19:if(me(je),a=t.memoizedState,a===null)return $e(t),null;if(s=(t.flags&128)!==0,l=a.rendering,l===null)if(s)zr(a,!1);else{if(Re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Ci(e),l!==null){for(t.flags|=128,zr(a,!1),s=l.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=r,r=t.child;r!==null;)a=r,e=s,a.flags&=14680066,l=a.alternate,l===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return pe(je,je.current&1|2),t.child}e=e.sibling}a.tail!==null&&_e()>yr&&(t.flags|=128,s=!0,zr(a,!1),t.lanes=4194304)}else{if(!s)if(e=Ci(l),e!==null){if(t.flags|=128,s=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),zr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!ge)return $e(t),null}else 2*_e()-a.renderingStartTime>yr&&r!==1073741824&&(t.flags|=128,s=!0,zr(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(r=a.last,r!==null?r.sibling=l:t.child=l,a.last=l)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=_e(),t.sibling=null,r=je.current,pe(je,s?r&1|2:r&1),t):($e(t),null);case 22:case 23:return Ho(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&t.mode&1?rn&1073741824&&($e(t),t.subtreeFlags&6&&(t.flags|=8192)):$e(t),null;case 24:return null;case 25:return null}throw Error(K(156,t.tag))}function Wm(e,t){switch(wo(t),t.tag){case 1:return nn(t.type)&&yi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xr(),me(en),me(qe),Po(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ro(t),null;case 13:if(me(je),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(K(340));mr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return me(je),null;case 4:return xr(),null;case 10:return _o(t.type._context),null;case 22:case 23:return Ho(),null;case 24:return null;default:return null}}var Hs=!1,Be=!1,Gm=typeof WeakSet=="function"?WeakSet:Set,Q=null;function Zt(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(s){Se(e,t,s)}else r.current=null}function Ol(e,t,r){try{r()}catch(s){Se(e,t,s)}}var ld=!1;function Qm(e,t){if(fl=mi,e=Uu(),bo(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var s=r.getSelection&&r.getSelection();if(s&&s.rangeCount!==0){r=s.anchorNode;var i=s.anchorOffset,a=s.focusNode;s=s.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var l=0,o=-1,c=-1,u=0,d=0,h=e,g=null;n:for(;;){for(var b;h!==r||i!==0&&h.nodeType!==3||(o=l+i),h!==a||s!==0&&h.nodeType!==3||(c=l+s),h.nodeType===3&&(l+=h.nodeValue.length),(b=h.firstChild)!==null;)g=h,h=b;for(;;){if(h===e)break n;if(g===r&&++u===i&&(o=l),g===a&&++d===s&&(c=l),(b=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=b}r=o===-1||c===-1?null:{start:o,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(ml={focusedElem:e,selectionRange:r},mi=!1,Q=t;Q!==null;)if(t=Q,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Q=e;else for(;Q!==null;){t=Q;try{var N=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var y=N.memoizedProps,j=N.memoizedState,f=t.stateNode,m=f.getSnapshotBeforeUpdate(t.elementType===t.type?y:Nn(t.type,y),j);f.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(K(163))}}catch(S){Se(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,Q=e;break}Q=t.return}return N=ld,ld=!1,N}function Xr(e,t,r){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var i=s=s.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&Ol(t,r,a)}i=i.next}while(i!==s)}}function Wi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var s=r.create;r.destroy=s()}r=r.next}while(r!==t)}}function Rl(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function $h(e){var t=e.alternate;t!==null&&(e.alternate=null,$h(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[En],delete t[ds],delete t[vl],delete t[Om],delete t[Rm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Bh(e){return e.tag===5||e.tag===3||e.tag===4}function od(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Pl(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=vi));else if(s!==4&&(e=e.child,e!==null))for(Pl(e,t,r),e=e.sibling;e!==null;)Pl(e,t,r),e=e.sibling}function Il(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(Il(e,t,r),e=e.sibling;e!==null;)Il(e,t,r),e=e.sibling}var Ae=null,bn=!1;function Wn(e,t,r){for(r=r.child;r!==null;)qh(e,t,r),r=r.sibling}function qh(e,t,r){if(On&&typeof On.onCommitFiberUnmount=="function")try{On.onCommitFiberUnmount(Vi,r)}catch{}switch(r.tag){case 5:Be||Zt(r,t);case 6:var s=Ae,i=bn;Ae=null,Wn(e,t,r),Ae=s,bn=i,Ae!==null&&(bn?(e=Ae,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Ae.removeChild(r.stateNode));break;case 18:Ae!==null&&(bn?(e=Ae,r=r.stateNode,e.nodeType===8?ya(e.parentNode,r):e.nodeType===1&&ya(e,r),is(e)):ya(Ae,r.stateNode));break;case 4:s=Ae,i=bn,Ae=r.stateNode.containerInfo,bn=!0,Wn(e,t,r),Ae=s,bn=i;break;case 0:case 11:case 14:case 15:if(!Be&&(s=r.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){i=s=s.next;do{var a=i,l=a.destroy;a=a.tag,l!==void 0&&(a&2||a&4)&&Ol(r,t,l),i=i.next}while(i!==s)}Wn(e,t,r);break;case 1:if(!Be&&(Zt(r,t),s=r.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=r.memoizedProps,s.state=r.memoizedState,s.componentWillUnmount()}catch(o){Se(r,t,o)}Wn(e,t,r);break;case 21:Wn(e,t,r);break;case 22:r.mode&1?(Be=(s=Be)||r.memoizedState!==null,Wn(e,t,r),Be=s):Wn(e,t,r);break;default:Wn(e,t,r)}}function cd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Gm),t.forEach(function(s){var i=sg.bind(null,e,s);r.has(s)||(r.add(s),s.then(i,i))})}}function yn(e,t){var r=t.deletions;if(r!==null)for(var s=0;s<r.length;s++){var i=r[s];try{var a=e,l=t,o=l;e:for(;o!==null;){switch(o.tag){case 5:Ae=o.stateNode,bn=!1;break e;case 3:Ae=o.stateNode.containerInfo,bn=!0;break e;case 4:Ae=o.stateNode.containerInfo,bn=!0;break e}o=o.return}if(Ae===null)throw Error(K(160));qh(a,l,i),Ae=null,bn=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){Se(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Hh(t,e),t=t.sibling}function Hh(e,t){var r=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(yn(t,e),_n(e),s&4){try{Xr(3,e,e.return),Wi(3,e)}catch(y){Se(e,e.return,y)}try{Xr(5,e,e.return)}catch(y){Se(e,e.return,y)}}break;case 1:yn(t,e),_n(e),s&512&&r!==null&&Zt(r,r.return);break;case 5:if(yn(t,e),_n(e),s&512&&r!==null&&Zt(r,r.return),e.flags&32){var i=e.stateNode;try{ns(i,"")}catch(y){Se(e,e.return,y)}}if(s&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,l=r!==null?r.memoizedProps:a,o=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{o==="input"&&a.type==="radio"&&a.name!=null&&hu(i,a),sl(o,l);var u=sl(o,a);for(l=0;l<c.length;l+=2){var d=c[l],h=c[l+1];d==="style"?xu(i,h):d==="dangerouslySetInnerHTML"?mu(i,h):d==="children"?ns(i,h):oo(i,d,h,u)}switch(o){case"input":Za(i,a);break;case"textarea":pu(i,a);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var b=a.value;b!=null?lr(i,!!a.multiple,b,!1):g!==!!a.multiple&&(a.defaultValue!=null?lr(i,!!a.multiple,a.defaultValue,!0):lr(i,!!a.multiple,a.multiple?[]:"",!1))}i[ds]=a}catch(y){Se(e,e.return,y)}}break;case 6:if(yn(t,e),_n(e),s&4){if(e.stateNode===null)throw Error(K(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(y){Se(e,e.return,y)}}break;case 3:if(yn(t,e),_n(e),s&4&&r!==null&&r.memoizedState.isDehydrated)try{is(t.containerInfo)}catch(y){Se(e,e.return,y)}break;case 4:yn(t,e),_n(e);break;case 13:yn(t,e),_n(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Bo=_e())),s&4&&cd(e);break;case 22:if(d=r!==null&&r.memoizedState!==null,e.mode&1?(Be=(u=Be)||d,yn(t,e),Be=u):yn(t,e),_n(e),s&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(Q=e,d=e.child;d!==null;){for(h=Q=d;Q!==null;){switch(g=Q,b=g.child,g.tag){case 0:case 11:case 14:case 15:Xr(4,g,g.return);break;case 1:Zt(g,g.return);var N=g.stateNode;if(typeof N.componentWillUnmount=="function"){s=g,r=g.return;try{t=s,N.props=t.memoizedProps,N.state=t.memoizedState,N.componentWillUnmount()}catch(y){Se(s,r,y)}}break;case 5:Zt(g,g.return);break;case 22:if(g.memoizedState!==null){ud(h);continue}}b!==null?(b.return=g,Q=b):ud(h)}d=d.sibling}e:for(d=null,h=e;;){if(h.tag===5){if(d===null){d=h;try{i=h.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(o=h.stateNode,c=h.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=gu("display",l))}catch(y){Se(e,e.return,y)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(y){Se(e,e.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:yn(t,e),_n(e),s&4&&cd(e);break;case 21:break;default:yn(t,e),_n(e)}}function _n(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Bh(r)){var s=r;break e}r=r.return}throw Error(K(160))}switch(s.tag){case 5:var i=s.stateNode;s.flags&32&&(ns(i,""),s.flags&=-33);var a=od(e);Il(e,a,i);break;case 3:case 4:var l=s.stateNode.containerInfo,o=od(e);Pl(e,o,l);break;default:throw Error(K(161))}}catch(c){Se(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Xm(e,t,r){Q=e,Uh(e)}function Uh(e,t,r){for(var s=(e.mode&1)!==0;Q!==null;){var i=Q,a=i.child;if(i.tag===22&&s){var l=i.memoizedState!==null||Hs;if(!l){var o=i.alternate,c=o!==null&&o.memoizedState!==null||Be;o=Hs;var u=Be;if(Hs=l,(Be=c)&&!u)for(Q=i;Q!==null;)l=Q,c=l.child,l.tag===22&&l.memoizedState!==null?hd(i):c!==null?(c.return=l,Q=c):hd(i);for(;a!==null;)Q=a,Uh(a),a=a.sibling;Q=i,Hs=o,Be=u}dd(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,Q=a):dd(e)}}function dd(e){for(;Q!==null;){var t=Q;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Be||Wi(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!Be)if(r===null)s.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:Nn(t.type,r.memoizedProps);s.componentDidUpdate(i,r.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Gc(t,a,s);break;case 3:var l=t.updateQueue;if(l!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Gc(t,l,r)}break;case 5:var o=t.stateNode;if(r===null&&t.flags&4){r=o;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&is(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(K(163))}Be||t.flags&512&&Rl(t)}catch(g){Se(t,t.return,g)}}if(t===e){Q=null;break}if(r=t.sibling,r!==null){r.return=t.return,Q=r;break}Q=t.return}}function ud(e){for(;Q!==null;){var t=Q;if(t===e){Q=null;break}var r=t.sibling;if(r!==null){r.return=t.return,Q=r;break}Q=t.return}}function hd(e){for(;Q!==null;){var t=Q;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Wi(4,t)}catch(c){Se(t,r,c)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var i=t.return;try{s.componentDidMount()}catch(c){Se(t,i,c)}}var a=t.return;try{Rl(t)}catch(c){Se(t,a,c)}break;case 5:var l=t.return;try{Rl(t)}catch(c){Se(t,l,c)}}}catch(c){Se(t,t.return,c)}if(t===e){Q=null;break}var o=t.sibling;if(o!==null){o.return=t.return,Q=o;break}Q=t.return}}var Ym=Math.ceil,Li=Kn.ReactCurrentDispatcher,Do=Kn.ReactCurrentOwner,fn=Kn.ReactCurrentBatchConfig,ae=0,ze=null,Le=null,Fe=0,rn=0,er=mt(0),Re=0,gs=null,Rt=0,Gi=0,$o=0,Yr=null,Je=null,Bo=0,yr=1/0,In=null,Ei=!1,zl=null,lt=null,Us=!1,Zn=null,Oi=0,Jr=0,Ml=null,ii=-1,ai=0;function Qe(){return ae&6?_e():ii!==-1?ii:ii=_e()}function ot(e){return e.mode&1?ae&2&&Fe!==0?Fe&-Fe:Im.transition!==null?(ai===0&&(ai=Lu()),ai):(e=de,e!==0||(e=window.event,e=e===void 0?16:Mu(e.type)),e):1}function Sn(e,t,r,s){if(50<Jr)throw Jr=0,Ml=null,Error(K(185));Ns(e,r,s),(!(ae&2)||e!==ze)&&(e===ze&&(!(ae&2)&&(Gi|=r),Re===4&&Yn(e,Fe)),tn(e,s),r===1&&ae===0&&!(t.mode&1)&&(yr=_e()+500,Hi&&gt()))}function tn(e,t){var r=e.callbackNode;If(e,t);var s=fi(e,e===ze?Fe:0);if(s===0)r!==null&&Nc(r),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(r!=null&&Nc(r),t===1)e.tag===0?Pm(pd.bind(null,e)):nh(pd.bind(null,e)),Lm(function(){!(ae&6)&&gt()}),r=null;else{switch(Eu(s)){case 1:r=fo;break;case 4:r=Tu;break;case 16:r=pi;break;case 536870912:r=_u;break;default:r=pi}r=Zh(r,Kh.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Kh(e,t){if(ii=-1,ai=0,ae&6)throw Error(K(327));var r=e.callbackNode;if(hr()&&e.callbackNode!==r)return null;var s=fi(e,e===ze?Fe:0);if(s===0)return null;if(s&30||s&e.expiredLanes||t)t=Ri(e,s);else{t=s;var i=ae;ae|=2;var a=Gh();(ze!==e||Fe!==t)&&(In=null,yr=_e()+500,Tt(e,t));do try{eg();break}catch(o){Wh(e,o)}while(!0);To(),Li.current=a,ae=i,Le!==null?t=0:(ze=null,Fe=0,t=Re)}if(t!==0){if(t===2&&(i=cl(e),i!==0&&(s=i,t=Al(e,i))),t===1)throw r=gs,Tt(e,0),Yn(e,s),tn(e,_e()),r;if(t===6)Yn(e,s);else{if(i=e.current.alternate,!(s&30)&&!Jm(i)&&(t=Ri(e,s),t===2&&(a=cl(e),a!==0&&(s=a,t=Al(e,a))),t===1))throw r=gs,Tt(e,0),Yn(e,s),tn(e,_e()),r;switch(e.finishedWork=i,e.finishedLanes=s,t){case 0:case 1:throw Error(K(345));case 2:Nt(e,Je,In);break;case 3:if(Yn(e,s),(s&130023424)===s&&(t=Bo+500-_e(),10<t)){if(fi(e,0)!==0)break;if(i=e.suspendedLanes,(i&s)!==s){Qe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=xl(Nt.bind(null,e,Je,In),t);break}Nt(e,Je,In);break;case 4:if(Yn(e,s),(s&4194240)===s)break;for(t=e.eventTimes,i=-1;0<s;){var l=31-wn(s);a=1<<l,l=t[l],l>i&&(i=l),s&=~a}if(s=i,s=_e()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*Ym(s/1960))-s,10<s){e.timeoutHandle=xl(Nt.bind(null,e,Je,In),s);break}Nt(e,Je,In);break;case 5:Nt(e,Je,In);break;default:throw Error(K(329))}}}return tn(e,_e()),e.callbackNode===r?Kh.bind(null,e):null}function Al(e,t){var r=Yr;return e.current.memoizedState.isDehydrated&&(Tt(e,t).flags|=256),e=Ri(e,t),e!==2&&(t=Je,Je=r,t!==null&&Fl(t)),e}function Fl(e){Je===null?Je=e:Je.push.apply(Je,e)}function Jm(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var s=0;s<r.length;s++){var i=r[s],a=i.getSnapshot;i=i.value;try{if(!Cn(a(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Yn(e,t){for(t&=~$o,t&=~Gi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-wn(t),s=1<<r;e[r]=-1,t&=~s}}function pd(e){if(ae&6)throw Error(K(327));hr();var t=fi(e,0);if(!(t&1))return tn(e,_e()),null;var r=Ri(e,t);if(e.tag!==0&&r===2){var s=cl(e);s!==0&&(t=s,r=Al(e,s))}if(r===1)throw r=gs,Tt(e,0),Yn(e,t),tn(e,_e()),r;if(r===6)throw Error(K(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Nt(e,Je,In),tn(e,_e()),null}function qo(e,t){var r=ae;ae|=1;try{return e(t)}finally{ae=r,ae===0&&(yr=_e()+500,Hi&&gt())}}function Pt(e){Zn!==null&&Zn.tag===0&&!(ae&6)&&hr();var t=ae;ae|=1;var r=fn.transition,s=de;try{if(fn.transition=null,de=1,e)return e()}finally{de=s,fn.transition=r,ae=t,!(ae&6)&&gt()}}function Ho(){rn=er.current,me(er)}function Tt(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,_m(r)),Le!==null)for(r=Le.return;r!==null;){var s=r;switch(wo(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&yi();break;case 3:xr(),me(en),me(qe),Po();break;case 5:Ro(s);break;case 4:xr();break;case 13:me(je);break;case 19:me(je);break;case 10:_o(s.type._context);break;case 22:case 23:Ho()}r=r.return}if(ze=e,Le=e=ct(e.current,null),Fe=rn=t,Re=0,gs=null,$o=Gi=Rt=0,Je=Yr=null,kt!==null){for(t=0;t<kt.length;t++)if(r=kt[t],s=r.interleaved,s!==null){r.interleaved=null;var i=s.next,a=r.pending;if(a!==null){var l=a.next;a.next=i,s.next=l}r.pending=s}kt=null}return e}function Wh(e,t){do{var r=Le;try{if(To(),ti.current=_i,Ti){for(var s=Ne.memoizedState;s!==null;){var i=s.queue;i!==null&&(i.pending=null),s=s.next}Ti=!1}if(Ot=0,Ie=Oe=Ne=null,Qr=!1,ps=0,Do.current=null,r===null||r.return===null){Re=1,gs=t,Le=null;break}e:{var a=e,l=r.return,o=r,c=t;if(t=Fe,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=o,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var b=ed(l);if(b!==null){b.flags&=-257,nd(b,l,o,a,t),b.mode&1&&Zc(a,u,t),t=b,c=u;var N=t.updateQueue;if(N===null){var y=new Set;y.add(c),t.updateQueue=y}else N.add(c);break e}else{if(!(t&1)){Zc(a,u,t),Uo();break e}c=Error(K(426))}}else if(ge&&o.mode&1){var j=ed(l);if(j!==null){!(j.flags&65536)&&(j.flags|=256),nd(j,l,o,a,t),So(vr(c,o));break e}}a=c=vr(c,o),Re!==4&&(Re=2),Yr===null?Yr=[a]:Yr.push(a),a=l;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var f=Eh(a,c,t);Wc(a,f);break e;case 1:o=c;var m=a.type,x=a.stateNode;if(!(a.flags&128)&&(typeof m.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(lt===null||!lt.has(x)))){a.flags|=65536,t&=-t,a.lanes|=t;var S=Oh(a,o,t);Wc(a,S);break e}}a=a.return}while(a!==null)}Xh(r)}catch(v){t=v,Le===r&&r!==null&&(Le=r=r.return);continue}break}while(!0)}function Gh(){var e=Li.current;return Li.current=_i,e===null?_i:e}function Uo(){(Re===0||Re===3||Re===2)&&(Re=4),ze===null||!(Rt&268435455)&&!(Gi&268435455)||Yn(ze,Fe)}function Ri(e,t){var r=ae;ae|=2;var s=Gh();(ze!==e||Fe!==t)&&(In=null,Tt(e,t));do try{Zm();break}catch(i){Wh(e,i)}while(!0);if(To(),ae=r,Li.current=s,Le!==null)throw Error(K(261));return ze=null,Fe=0,Re}function Zm(){for(;Le!==null;)Qh(Le)}function eg(){for(;Le!==null&&!Sf();)Qh(Le)}function Qh(e){var t=Jh(e.alternate,e,rn);e.memoizedProps=e.pendingProps,t===null?Xh(e):Le=t,Do.current=null}function Xh(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Wm(r,t),r!==null){r.flags&=32767,Le=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Re=6,Le=null;return}}else if(r=Km(r,t,rn),r!==null){Le=r;return}if(t=t.sibling,t!==null){Le=t;return}Le=t=e}while(t!==null);Re===0&&(Re=5)}function Nt(e,t,r){var s=de,i=fn.transition;try{fn.transition=null,de=1,ng(e,t,r,s)}finally{fn.transition=i,de=s}return null}function ng(e,t,r,s){do hr();while(Zn!==null);if(ae&6)throw Error(K(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(K(177));e.callbackNode=null,e.callbackPriority=0;var a=r.lanes|r.childLanes;if(zf(e,a),e===ze&&(Le=ze=null,Fe=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Us||(Us=!0,Zh(pi,function(){return hr(),null})),a=(r.flags&15990)!==0,r.subtreeFlags&15990||a){a=fn.transition,fn.transition=null;var l=de;de=1;var o=ae;ae|=4,Do.current=null,Qm(e,r),Hh(r,e),Nm(ml),mi=!!fl,ml=fl=null,e.current=r,Xm(r),Cf(),ae=o,de=l,fn.transition=a}else e.current=r;if(Us&&(Us=!1,Zn=e,Oi=i),a=e.pendingLanes,a===0&&(lt=null),Lf(r.stateNode),tn(e,_e()),t!==null)for(s=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],s(i.value,{componentStack:i.stack,digest:i.digest});if(Ei)throw Ei=!1,e=zl,zl=null,e;return Oi&1&&e.tag!==0&&hr(),a=e.pendingLanes,a&1?e===Ml?Jr++:(Jr=0,Ml=e):Jr=0,gt(),null}function hr(){if(Zn!==null){var e=Eu(Oi),t=fn.transition,r=de;try{if(fn.transition=null,de=16>e?16:e,Zn===null)var s=!1;else{if(e=Zn,Zn=null,Oi=0,ae&6)throw Error(K(331));var i=ae;for(ae|=4,Q=e.current;Q!==null;){var a=Q,l=a.child;if(Q.flags&16){var o=a.deletions;if(o!==null){for(var c=0;c<o.length;c++){var u=o[c];for(Q=u;Q!==null;){var d=Q;switch(d.tag){case 0:case 11:case 15:Xr(8,d,a)}var h=d.child;if(h!==null)h.return=d,Q=h;else for(;Q!==null;){d=Q;var g=d.sibling,b=d.return;if($h(d),d===u){Q=null;break}if(g!==null){g.return=b,Q=g;break}Q=b}}}var N=a.alternate;if(N!==null){var y=N.child;if(y!==null){N.child=null;do{var j=y.sibling;y.sibling=null,y=j}while(y!==null)}}Q=a}}if(a.subtreeFlags&2064&&l!==null)l.return=a,Q=l;else e:for(;Q!==null;){if(a=Q,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Xr(9,a,a.return)}var f=a.sibling;if(f!==null){f.return=a.return,Q=f;break e}Q=a.return}}var m=e.current;for(Q=m;Q!==null;){l=Q;var x=l.child;if(l.subtreeFlags&2064&&x!==null)x.return=l,Q=x;else e:for(l=m;Q!==null;){if(o=Q,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Wi(9,o)}}catch(v){Se(o,o.return,v)}if(o===l){Q=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,Q=S;break e}Q=o.return}}if(ae=i,gt(),On&&typeof On.onPostCommitFiberRoot=="function")try{On.onPostCommitFiberRoot(Vi,e)}catch{}s=!0}return s}finally{de=r,fn.transition=t}}return!1}function fd(e,t,r){t=vr(r,t),t=Eh(e,t,1),e=at(e,t,1),t=Qe(),e!==null&&(Ns(e,1,t),tn(e,t))}function Se(e,t,r){if(e.tag===3)fd(e,e,r);else for(;t!==null;){if(t.tag===3){fd(t,e,r);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(lt===null||!lt.has(s))){e=vr(r,e),e=Oh(t,e,1),t=at(t,e,1),e=Qe(),t!==null&&(Ns(t,1,e),tn(t,e));break}}t=t.return}}function tg(e,t,r){var s=e.pingCache;s!==null&&s.delete(t),t=Qe(),e.pingedLanes|=e.suspendedLanes&r,ze===e&&(Fe&r)===r&&(Re===4||Re===3&&(Fe&130023424)===Fe&&500>_e()-Bo?Tt(e,0):$o|=r),tn(e,t)}function Yh(e,t){t===0&&(e.mode&1?(t=zs,zs<<=1,!(zs&130023424)&&(zs=4194304)):t=1);var r=Qe();e=Hn(e,t),e!==null&&(Ns(e,t,r),tn(e,r))}function rg(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Yh(e,r)}function sg(e,t){var r=0;switch(e.tag){case 13:var s=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(K(314))}s!==null&&s.delete(t),Yh(e,r)}var Jh;Jh=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||en.current)Ze=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Ze=!1,Um(e,t,r);Ze=!!(e.flags&131072)}else Ze=!1,ge&&t.flags&1048576&&th(t,bi,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;si(e,t),e=t.pendingProps;var i=fr(t,qe.current);ur(t,r),i=zo(null,t,s,e,i,r);var a=Mo();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,nn(s)?(a=!0,ji(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Eo(t),i.updater=Ki,t.stateNode=i,i._reactInternals=t,wl(t,s,e,r),t=Tl(null,t,s,!0,a,r)):(t.tag=0,ge&&a&&ko(t),We(null,t,i,r),t=t.child),t;case 16:s=t.elementType;e:{switch(si(e,t),e=t.pendingProps,i=s._init,s=i(s._payload),t.type=s,i=t.tag=ag(s),e=Nn(s,e),i){case 0:t=Cl(null,t,s,e,r);break e;case 1:t=sd(null,t,s,e,r);break e;case 11:t=td(null,t,s,e,r);break e;case 14:t=rd(null,t,s,Nn(s.type,e),r);break e}throw Error(K(306,s,""))}return t;case 0:return s=t.type,i=t.pendingProps,i=t.elementType===s?i:Nn(s,i),Cl(e,t,s,i,r);case 1:return s=t.type,i=t.pendingProps,i=t.elementType===s?i:Nn(s,i),sd(e,t,s,i,r);case 3:e:{if(zh(t),e===null)throw Error(K(387));s=t.pendingProps,a=t.memoizedState,i=a.element,oh(e,t),Si(t,s,null,r);var l=t.memoizedState;if(s=l.element,a.isDehydrated)if(a={element:s,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=vr(Error(K(423)),t),t=id(e,t,s,r,i);break e}else if(s!==i){i=vr(Error(K(424)),t),t=id(e,t,s,r,i);break e}else for(an=it(t.stateNode.containerInfo.firstChild),ln=t,ge=!0,kn=null,r=ah(t,null,s,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(mr(),s===i){t=Un(e,t,r);break e}We(e,t,s,r)}t=t.child}return t;case 5:return ch(t),e===null&&Nl(t),s=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,l=i.children,gl(s,i)?l=null:a!==null&&gl(s,a)&&(t.flags|=32),Ih(e,t),We(e,t,l,r),t.child;case 6:return e===null&&Nl(t),null;case 13:return Mh(e,t,r);case 4:return Oo(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=gr(t,null,s,r):We(e,t,s,r),t.child;case 11:return s=t.type,i=t.pendingProps,i=t.elementType===s?i:Nn(s,i),td(e,t,s,i,r);case 7:return We(e,t,t.pendingProps,r),t.child;case 8:return We(e,t,t.pendingProps.children,r),t.child;case 12:return We(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(s=t.type._context,i=t.pendingProps,a=t.memoizedProps,l=i.value,pe(ki,s._currentValue),s._currentValue=l,a!==null)if(Cn(a.value,l)){if(a.children===i.children&&!en.current){t=Un(e,t,r);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var o=a.dependencies;if(o!==null){l=a.child;for(var c=o.firstContext;c!==null;){if(c.context===s){if(a.tag===1){c=Dn(-1,r&-r),c.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}a.lanes|=r,c=a.alternate,c!==null&&(c.lanes|=r),bl(a.return,r,t),o.lanes|=r;break}c=c.next}}else if(a.tag===10)l=a.type===t.type?null:a.child;else if(a.tag===18){if(l=a.return,l===null)throw Error(K(341));l.lanes|=r,o=l.alternate,o!==null&&(o.lanes|=r),bl(l,r,t),l=a.sibling}else l=a.child;if(l!==null)l.return=a;else for(l=a;l!==null;){if(l===t){l=null;break}if(a=l.sibling,a!==null){a.return=l.return,l=a;break}l=l.return}a=l}We(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,s=t.pendingProps.children,ur(t,r),i=mn(i),s=s(i),t.flags|=1,We(e,t,s,r),t.child;case 14:return s=t.type,i=Nn(s,t.pendingProps),i=Nn(s.type,i),rd(e,t,s,i,r);case 15:return Rh(e,t,t.type,t.pendingProps,r);case 17:return s=t.type,i=t.pendingProps,i=t.elementType===s?i:Nn(s,i),si(e,t),t.tag=1,nn(s)?(e=!0,ji(t)):e=!1,ur(t,r),Lh(t,s,i),wl(t,s,i,r),Tl(null,t,s,!0,e,r);case 19:return Ah(e,t,r);case 22:return Ph(e,t,r)}throw Error(K(156,t.tag))};function Zh(e,t){return Cu(e,t)}function ig(e,t,r,s){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pn(e,t,r,s){return new ig(e,t,r,s)}function Ko(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ag(e){if(typeof e=="function")return Ko(e)?1:0;if(e!=null){if(e=e.$$typeof,e===uo)return 11;if(e===ho)return 14}return 2}function ct(e,t){var r=e.alternate;return r===null?(r=pn(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function li(e,t,r,s,i,a){var l=2;if(s=e,typeof e=="function")Ko(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Ht:return _t(r.children,i,a,t);case co:l=8,i|=8;break;case Ga:return e=pn(12,r,t,i|2),e.elementType=Ga,e.lanes=a,e;case Qa:return e=pn(13,r,t,i),e.elementType=Qa,e.lanes=a,e;case Xa:return e=pn(19,r,t,i),e.elementType=Xa,e.lanes=a,e;case cu:return Qi(r,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case lu:l=10;break e;case ou:l=9;break e;case uo:l=11;break e;case ho:l=14;break e;case Gn:l=16,s=null;break e}throw Error(K(130,e==null?e:typeof e,""))}return t=pn(l,r,t,i),t.elementType=e,t.type=s,t.lanes=a,t}function _t(e,t,r,s){return e=pn(7,e,s,t),e.lanes=r,e}function Qi(e,t,r,s){return e=pn(22,e,s,t),e.elementType=cu,e.lanes=r,e.stateNode={isHidden:!1},e}function Ta(e,t,r){return e=pn(6,e,null,t),e.lanes=r,e}function _a(e,t,r){return t=pn(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function lg(e,t,r,s,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=oa(0),this.expirationTimes=oa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oa(0),this.identifierPrefix=s,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Wo(e,t,r,s,i,a,l,o,c){return e=new lg(e,t,r,o,c),t===1?(t=1,a===!0&&(t|=8)):t=0,a=pn(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:s,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Eo(a),e}function og(e,t,r){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qt,key:s==null?null:""+s,children:e,containerInfo:t,implementation:r}}function ep(e){if(!e)return pt;e=e._reactInternals;e:{if(zt(e)!==e||e.tag!==1)throw Error(K(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(nn(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(K(171))}if(e.tag===1){var r=e.type;if(nn(r))return eh(e,r,t)}return t}function np(e,t,r,s,i,a,l,o,c){return e=Wo(r,s,!0,e,i,a,l,o,c),e.context=ep(null),r=e.current,s=Qe(),i=ot(r),a=Dn(s,i),a.callback=t??null,at(r,a,i),e.current.lanes=i,Ns(e,i,s),tn(e,s),e}function Xi(e,t,r,s){var i=t.current,a=Qe(),l=ot(i);return r=ep(r),t.context===null?t.context=r:t.pendingContext=r,t=Dn(a,l),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=at(i,t,l),e!==null&&(Sn(e,i,l,a),ni(e,i,l)),l}function Pi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function md(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Go(e,t){md(e,t),(e=e.alternate)&&md(e,t)}function cg(){return null}var tp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Qo(e){this._internalRoot=e}Yi.prototype.render=Qo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(K(409));Xi(e,t,null,null)};Yi.prototype.unmount=Qo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Pt(function(){Xi(null,e,null,null)}),t[qn]=null}};function Yi(e){this._internalRoot=e}Yi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Pu();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Xn.length&&t!==0&&t<Xn[r].priority;r++);Xn.splice(r,0,e),r===0&&zu(e)}};function Xo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ji(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function gd(){}function dg(e,t,r,s,i){if(i){if(typeof s=="function"){var a=s;s=function(){var u=Pi(l);a.call(u)}}var l=np(t,s,e,0,null,!1,!1,"",gd);return e._reactRootContainer=l,e[qn]=l.current,os(e.nodeType===8?e.parentNode:e),Pt(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof s=="function"){var o=s;s=function(){var u=Pi(c);o.call(u)}}var c=Wo(e,0,!1,null,null,!1,!1,"",gd);return e._reactRootContainer=c,e[qn]=c.current,os(e.nodeType===8?e.parentNode:e),Pt(function(){Xi(t,c,r,s)}),c}function Zi(e,t,r,s,i){var a=r._reactRootContainer;if(a){var l=a;if(typeof i=="function"){var o=i;i=function(){var c=Pi(l);o.call(c)}}Xi(t,l,e,i)}else l=dg(r,t,e,i,s);return Pi(l)}Ou=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Dr(t.pendingLanes);r!==0&&(mo(t,r|1),tn(t,_e()),!(ae&6)&&(yr=_e()+500,gt()))}break;case 13:Pt(function(){var s=Hn(e,1);if(s!==null){var i=Qe();Sn(s,e,1,i)}}),Go(e,1)}};go=function(e){if(e.tag===13){var t=Hn(e,134217728);if(t!==null){var r=Qe();Sn(t,e,134217728,r)}Go(e,134217728)}};Ru=function(e){if(e.tag===13){var t=ot(e),r=Hn(e,t);if(r!==null){var s=Qe();Sn(r,e,t,s)}Go(e,t)}};Pu=function(){return de};Iu=function(e,t){var r=de;try{return de=e,t()}finally{de=r}};al=function(e,t,r){switch(t){case"input":if(Za(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var s=r[t];if(s!==e&&s.form===e.form){var i=qi(s);if(!i)throw Error(K(90));uu(s),Za(s,i)}}}break;case"textarea":pu(e,r);break;case"select":t=r.value,t!=null&&lr(e,!!r.multiple,t,!1)}};ju=qo;Nu=Pt;var ug={usingClientEntryPoint:!1,Events:[ks,Gt,qi,vu,yu,qo]},Mr={findFiberByHostInstance:bt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hg={bundleType:Mr.bundleType,version:Mr.version,rendererPackageName:Mr.rendererPackageName,rendererConfig:Mr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=wu(e),e===null?null:e.stateNode},findFiberByHostInstance:Mr.findFiberByHostInstance||cg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ks=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ks.isDisabled&&Ks.supportsFiber)try{Vi=Ks.inject(hg),On=Ks}catch{}}cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ug;cn.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xo(t))throw Error(K(200));return og(e,t,null,r)};cn.createRoot=function(e,t){if(!Xo(e))throw Error(K(299));var r=!1,s="",i=tp;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Wo(e,1,!1,null,null,r,!1,s,i),e[qn]=t.current,os(e.nodeType===8?e.parentNode:e),new Qo(t)};cn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(K(188)):(e=Object.keys(e).join(","),Error(K(268,e)));return e=wu(t),e=e===null?null:e.stateNode,e};cn.flushSync=function(e){return Pt(e)};cn.hydrate=function(e,t,r){if(!Ji(t))throw Error(K(200));return Zi(null,e,t,!0,r)};cn.hydrateRoot=function(e,t,r){if(!Xo(e))throw Error(K(405));var s=r!=null&&r.hydratedSources||null,i=!1,a="",l=tp;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),t=np(t,null,e,1,r??null,i,!1,a,l),e[qn]=t.current,os(e),s)for(e=0;e<s.length;e++)r=s[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new Yi(t)};cn.render=function(e,t,r){if(!Ji(t))throw Error(K(200));return Zi(null,e,t,!1,r)};cn.unmountComponentAtNode=function(e){if(!Ji(e))throw Error(K(40));return e._reactRootContainer?(Pt(function(){Zi(null,null,e,!1,function(){e._reactRootContainer=null,e[qn]=null})}),!0):!1};cn.unstable_batchedUpdates=qo;cn.unstable_renderSubtreeIntoContainer=function(e,t,r,s){if(!Ji(r))throw Error(K(200));if(e==null||e._reactInternals===void 0)throw Error(K(38));return Zi(e,t,r,!1,s)};cn.version="18.3.1-next-f1338f8080-20240426";function rp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rp)}catch(e){console.error(e)}}rp(),ru.exports=cn;var pg=ru.exports,xd=pg;Ka.createRoot=xd.createRoot,Ka.hydrateRoot=xd.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xs(){return xs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},xs.apply(this,arguments)}var et;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(et||(et={}));const vd="popstate";function fg(e){e===void 0&&(e={});function t(s,i){let{pathname:a,search:l,hash:o}=s.location;return Vl("",{pathname:a,search:l,hash:o},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function r(s,i){return typeof i=="string"?i:Ii(i)}return gg(t,r,null,e)}function Ee(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Yo(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function mg(){return Math.random().toString(36).substr(2,8)}function yd(e,t){return{usr:e.state,key:e.key,idx:t}}function Vl(e,t,r,s){return r===void 0&&(r=null),xs({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?kr(t):t,{state:r,key:t&&t.key||s||mg()})}function Ii(e){let{pathname:t="/",search:r="",hash:s=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),s&&s!=="#"&&(t+=s.charAt(0)==="#"?s:"#"+s),t}function kr(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let s=e.indexOf("?");s>=0&&(t.search=e.substr(s),e=e.substr(0,s)),e&&(t.pathname=e)}return t}function gg(e,t,r,s){s===void 0&&(s={});let{window:i=document.defaultView,v5Compat:a=!1}=s,l=i.history,o=et.Pop,c=null,u=d();u==null&&(u=0,l.replaceState(xs({},l.state,{idx:u}),""));function d(){return(l.state||{idx:null}).idx}function h(){o=et.Pop;let j=d(),f=j==null?null:j-u;u=j,c&&c({action:o,location:y.location,delta:f})}function g(j,f){o=et.Push;let m=Vl(y.location,j,f);u=d()+1;let x=yd(m,u),S=y.createHref(m);try{l.pushState(x,"",S)}catch(v){if(v instanceof DOMException&&v.name==="DataCloneError")throw v;i.location.assign(S)}a&&c&&c({action:o,location:y.location,delta:1})}function b(j,f){o=et.Replace;let m=Vl(y.location,j,f);u=d();let x=yd(m,u),S=y.createHref(m);l.replaceState(x,"",S),a&&c&&c({action:o,location:y.location,delta:0})}function N(j){let f=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof j=="string"?j:Ii(j);return m=m.replace(/ $/,"%20"),Ee(f,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,f)}let y={get action(){return o},get location(){return e(i,l)},listen(j){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(vd,h),c=j,()=>{i.removeEventListener(vd,h),c=null}},createHref(j){return t(i,j)},createURL:N,encodeLocation(j){let f=N(j);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:b,go(j){return l.go(j)}};return y}var jd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(jd||(jd={}));function xg(e,t,r){return r===void 0&&(r="/"),vg(e,t,r)}function vg(e,t,r,s){let i=typeof t=="string"?kr(t):t,a=Jo(i.pathname||"/",r);if(a==null)return null;let l=sp(e);yg(l);let o=null;for(let c=0;o==null&&c<l.length;++c){let u=Og(a);o=_g(l[c],u)}return o}function sp(e,t,r,s){t===void 0&&(t=[]),r===void 0&&(r=[]),s===void 0&&(s="");let i=(a,l,o)=>{let c={relativePath:o===void 0?a.path||"":o,caseSensitive:a.caseSensitive===!0,childrenIndex:l,route:a};c.relativePath.startsWith("/")&&(Ee(c.relativePath.startsWith(s),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(s.length));let u=dt([s,c.relativePath]),d=r.concat(c);a.children&&a.children.length>0&&(Ee(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),sp(a.children,t,d,u)),!(a.path==null&&!a.index)&&t.push({path:u,score:Cg(u,a.index),routesMeta:d})};return e.forEach((a,l)=>{var o;if(a.path===""||!((o=a.path)!=null&&o.includes("?")))i(a,l);else for(let c of ip(a.path))i(a,l,c)}),t}function ip(e){let t=e.split("/");if(t.length===0)return[];let[r,...s]=t,i=r.endsWith("?"),a=r.replace(/\?$/,"");if(s.length===0)return i?[a,""]:[a];let l=ip(s.join("/")),o=[];return o.push(...l.map(c=>c===""?a:[a,c].join("/"))),i&&o.push(...l),o.map(c=>e.startsWith("/")&&c===""?"/":c)}function yg(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Tg(t.routesMeta.map(s=>s.childrenIndex),r.routesMeta.map(s=>s.childrenIndex)))}const jg=/^:[\w-]+$/,Ng=3,bg=2,kg=1,wg=10,Sg=-2,Nd=e=>e==="*";function Cg(e,t){let r=e.split("/"),s=r.length;return r.some(Nd)&&(s+=Sg),t&&(s+=bg),r.filter(i=>!Nd(i)).reduce((i,a)=>i+(jg.test(a)?Ng:a===""?kg:wg),s)}function Tg(e,t){return e.length===t.length&&e.slice(0,-1).every((s,i)=>s===t[i])?e[e.length-1]-t[t.length-1]:0}function _g(e,t,r){let{routesMeta:s}=e,i={},a="/",l=[];for(let o=0;o<s.length;++o){let c=s[o],u=o===s.length-1,d=a==="/"?t:t.slice(a.length)||"/",h=Lg({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),g=c.route;if(!h)return null;Object.assign(i,h.params),l.push({params:i,pathname:dt([a,h.pathname]),pathnameBase:Mg(dt([a,h.pathnameBase])),route:g}),h.pathnameBase!=="/"&&(a=dt([a,h.pathnameBase]))}return l}function Lg(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,s]=Eg(e.path,e.caseSensitive,e.end),i=t.match(r);if(!i)return null;let a=i[0],l=a.replace(/(.)\/+$/,"$1"),o=i.slice(1);return{params:s.reduce((u,d,h)=>{let{paramName:g,isOptional:b}=d;if(g==="*"){let y=o[h]||"";l=a.slice(0,a.length-y.length).replace(/(.)\/+$/,"$1")}const N=o[h];return b&&!N?u[g]=void 0:u[g]=(N||"").replace(/%2F/g,"/"),u},{}),pathname:a,pathnameBase:l,pattern:e}}function Eg(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),Yo(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let s=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,o,c)=>(s.push({paramName:o,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(s.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),s]}function Og(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Yo(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Jo(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,s=e.charAt(r);return s&&s!=="/"?null:e.slice(r)||"/"}const Rg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Pg=e=>Rg.test(e);function Ig(e,t){t===void 0&&(t="/");let{pathname:r,search:s="",hash:i=""}=typeof e=="string"?kr(e):e,a;if(r)if(Pg(r))a=r;else{if(r.includes("//")){let l=r;r=r.replace(/\/\/+/g,"/"),Yo(!1,"Pathnames cannot have embedded double slashes - normalizing "+(l+" -> "+r))}r.startsWith("/")?a=bd(r.substring(1),"/"):a=bd(r,t)}else a=t;return{pathname:a,search:Ag(s),hash:Fg(i)}}function bd(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function La(e,t,r,s){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function zg(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function ap(e,t){let r=zg(e);return t?r.map((s,i)=>i===r.length-1?s.pathname:s.pathnameBase):r.map(s=>s.pathnameBase)}function lp(e,t,r,s){s===void 0&&(s=!1);let i;typeof e=="string"?i=kr(e):(i=xs({},e),Ee(!i.pathname||!i.pathname.includes("?"),La("?","pathname","search",i)),Ee(!i.pathname||!i.pathname.includes("#"),La("#","pathname","hash",i)),Ee(!i.search||!i.search.includes("#"),La("#","search","hash",i)));let a=e===""||i.pathname==="",l=a?"/":i.pathname,o;if(l==null)o=r;else{let h=t.length-1;if(!s&&l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),h-=1;i.pathname=g.join("/")}o=h>=0?t[h]:"/"}let c=Ig(i,o),u=l&&l!=="/"&&l.endsWith("/"),d=(a||l===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const dt=e=>e.join("/").replace(/\/\/+/g,"/"),Mg=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ag=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Fg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Vg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const op=["post","put","patch","delete"];new Set(op);const Dg=["get",...op];new Set(Dg);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vs(){return vs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},vs.apply(this,arguments)}const Zo=p.createContext(null),$g=p.createContext(null),Mt=p.createContext(null),ea=p.createContext(null),xt=p.createContext({outlet:null,matches:[],isDataRoute:!1}),cp=p.createContext(null);function Bg(e,t){let{relative:r}=t===void 0?{}:t;Ss()||Ee(!1);let{basename:s,navigator:i}=p.useContext(Mt),{hash:a,pathname:l,search:o}=hp(e,{relative:r}),c=l;return s!=="/"&&(c=l==="/"?s:dt([s,l])),i.createHref({pathname:c,search:o,hash:a})}function Ss(){return p.useContext(ea)!=null}function Cs(){return Ss()||Ee(!1),p.useContext(ea).location}function dp(e){p.useContext(Mt).static||p.useLayoutEffect(e)}function up(){let{isDataRoute:e}=p.useContext(xt);return e?tx():qg()}function qg(){Ss()||Ee(!1);let e=p.useContext(Zo),{basename:t,future:r,navigator:s}=p.useContext(Mt),{matches:i}=p.useContext(xt),{pathname:a}=Cs(),l=JSON.stringify(ap(i,r.v7_relativeSplatPath)),o=p.useRef(!1);return dp(()=>{o.current=!0}),p.useCallback(function(u,d){if(d===void 0&&(d={}),!o.current)return;if(typeof u=="number"){s.go(u);return}let h=lp(u,JSON.parse(l),a,d.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:dt([t,h.pathname])),(d.replace?s.replace:s.push)(h,d.state,d)},[t,s,l,a,e])}function Hg(){let{matches:e}=p.useContext(xt),t=e[e.length-1];return t?t.params:{}}function hp(e,t){let{relative:r}=t===void 0?{}:t,{future:s}=p.useContext(Mt),{matches:i}=p.useContext(xt),{pathname:a}=Cs(),l=JSON.stringify(ap(i,s.v7_relativeSplatPath));return p.useMemo(()=>lp(e,JSON.parse(l),a,r==="path"),[e,l,a,r])}function Ug(e,t){return Kg(e,t)}function Kg(e,t,r,s){Ss()||Ee(!1);let{navigator:i}=p.useContext(Mt),{matches:a}=p.useContext(xt),l=a[a.length-1],o=l?l.params:{};l&&l.pathname;let c=l?l.pathnameBase:"/";l&&l.route;let u=Cs(),d;if(t){var h;let j=typeof t=="string"?kr(t):t;c==="/"||(h=j.pathname)!=null&&h.startsWith(c)||Ee(!1),d=j}else d=u;let g=d.pathname||"/",b=g;if(c!=="/"){let j=c.replace(/^\//,"").split("/");b="/"+g.replace(/^\//,"").split("/").slice(j.length).join("/")}let N=xg(e,{pathname:b}),y=Yg(N&&N.map(j=>Object.assign({},j,{params:Object.assign({},o,j.params),pathname:dt([c,i.encodeLocation?i.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?c:dt([c,i.encodeLocation?i.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),a,r,s);return t&&y?p.createElement(ea.Provider,{value:{location:vs({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:et.Pop}},y):y}function Wg(){let e=nx(),t=Vg(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return p.createElement(p.Fragment,null,p.createElement("h2",null,"Unexpected Application Error!"),p.createElement("h3",{style:{fontStyle:"italic"}},t),r?p.createElement("pre",{style:i},r):null,null)}const Gg=p.createElement(Wg,null);class Qg extends p.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?p.createElement(xt.Provider,{value:this.props.routeContext},p.createElement(cp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Xg(e){let{routeContext:t,match:r,children:s}=e,i=p.useContext(Zo);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),p.createElement(xt.Provider,{value:t},s)}function Yg(e,t,r,s){var i;if(t===void 0&&(t=[]),r===void 0&&(r=null),s===void 0&&(s=null),e==null){var a;if(!r)return null;if(r.errors)e=r.matches;else if((a=s)!=null&&a.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let l=e,o=(i=r)==null?void 0:i.errors;if(o!=null){let d=l.findIndex(h=>h.route.id&&(o==null?void 0:o[h.route.id])!==void 0);d>=0||Ee(!1),l=l.slice(0,Math.min(l.length,d+1))}let c=!1,u=-1;if(r&&s&&s.v7_partialHydration)for(let d=0;d<l.length;d++){let h=l[d];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=d),h.route.id){let{loaderData:g,errors:b}=r,N=h.route.loader&&g[h.route.id]===void 0&&(!b||b[h.route.id]===void 0);if(h.route.lazy||N){c=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((d,h,g)=>{let b,N=!1,y=null,j=null;r&&(b=o&&h.route.id?o[h.route.id]:void 0,y=h.route.errorElement||Gg,c&&(u<0&&g===0?(rx("route-fallback"),N=!0,j=null):u===g&&(N=!0,j=h.route.hydrateFallbackElement||null)));let f=t.concat(l.slice(0,g+1)),m=()=>{let x;return b?x=y:N?x=j:h.route.Component?x=p.createElement(h.route.Component,null):h.route.element?x=h.route.element:x=d,p.createElement(Xg,{match:h,routeContext:{outlet:d,matches:f,isDataRoute:r!=null},children:x})};return r&&(h.route.ErrorBoundary||h.route.errorElement||g===0)?p.createElement(Qg,{location:r.location,revalidation:r.revalidation,component:y,error:b,children:m(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):m()},null)}var pp=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(pp||{}),fp=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(fp||{});function Jg(e){let t=p.useContext(Zo);return t||Ee(!1),t}function Zg(e){let t=p.useContext($g);return t||Ee(!1),t}function ex(e){let t=p.useContext(xt);return t||Ee(!1),t}function mp(e){let t=ex(),r=t.matches[t.matches.length-1];return r.route.id||Ee(!1),r.route.id}function nx(){var e;let t=p.useContext(cp),r=Zg(),s=mp();return t!==void 0?t:(e=r.errors)==null?void 0:e[s]}function tx(){let{router:e}=Jg(pp.UseNavigateStable),t=mp(fp.UseNavigateStable),r=p.useRef(!1);return dp(()=>{r.current=!0}),p.useCallback(function(i,a){a===void 0&&(a={}),r.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,vs({fromRouteId:t},a)))},[e,t])}const kd={};function rx(e,t,r){kd[e]||(kd[e]=!0)}function sx(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function ie(e){Ee(!1)}function ix(e){let{basename:t="/",children:r=null,location:s,navigationType:i=et.Pop,navigator:a,static:l=!1,future:o}=e;Ss()&&Ee(!1);let c=t.replace(/^\/*/,"/"),u=p.useMemo(()=>({basename:c,navigator:a,static:l,future:vs({v7_relativeSplatPath:!1},o)}),[c,o,a,l]);typeof s=="string"&&(s=kr(s));let{pathname:d="/",search:h="",hash:g="",state:b=null,key:N="default"}=s,y=p.useMemo(()=>{let j=Jo(d,c);return j==null?null:{location:{pathname:j,search:h,hash:g,state:b,key:N},navigationType:i}},[c,d,h,g,b,N,i]);return y==null?null:p.createElement(Mt.Provider,{value:u},p.createElement(ea.Provider,{children:r,value:y}))}function ax(e){let{children:t,location:r}=e;return Ug(Dl(t),r)}new Promise(()=>{});function Dl(e,t){t===void 0&&(t=[]);let r=[];return p.Children.forEach(e,(s,i)=>{if(!p.isValidElement(s))return;let a=[...t,i];if(s.type===p.Fragment){r.push.apply(r,Dl(s.props.children,a));return}s.type!==ie&&Ee(!1),!s.props.index||!s.props.children||Ee(!1);let l={id:s.props.id||a.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(l.children=Dl(s.props.children,a)),r.push(l)}),r}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $l(){return $l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},$l.apply(this,arguments)}function lx(e,t){if(e==null)return{};var r={},s=Object.keys(e),i,a;for(a=0;a<s.length;a++)i=s[a],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function ox(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function cx(e,t){return e.button===0&&(!t||t==="_self")&&!ox(e)}const dx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],ux="6";try{window.__reactRouterVersion=ux}catch{}const hx="startTransition",wd=nf[hx];function px(e){let{basename:t,children:r,future:s,window:i}=e,a=p.useRef();a.current==null&&(a.current=fg({window:i,v5Compat:!0}));let l=a.current,[o,c]=p.useState({action:l.action,location:l.location}),{v7_startTransition:u}=s||{},d=p.useCallback(h=>{u&&wd?wd(()=>c(h)):c(h)},[c,u]);return p.useLayoutEffect(()=>l.listen(d),[l,d]),p.useEffect(()=>sx(s),[s]),p.createElement(ix,{basename:t,children:r,location:o.location,navigationType:o.action,navigator:l,future:s})}const fx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",mx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,An=p.forwardRef(function(t,r){let{onClick:s,relative:i,reloadDocument:a,replace:l,state:o,target:c,to:u,preventScrollReset:d,viewTransition:h}=t,g=lx(t,dx),{basename:b}=p.useContext(Mt),N,y=!1;if(typeof u=="string"&&mx.test(u)&&(N=u,fx))try{let x=new URL(window.location.href),S=u.startsWith("//")?new URL(x.protocol+u):new URL(u),v=Jo(S.pathname,b);S.origin===x.origin&&v!=null?u=v+S.search+S.hash:y=!0}catch{}let j=Bg(u,{relative:i}),f=gx(u,{replace:l,state:o,target:c,preventScrollReset:d,relative:i,viewTransition:h});function m(x){s&&s(x),x.defaultPrevented||f(x)}return p.createElement("a",$l({},g,{href:N||j,onClick:y||a?s:m,ref:r,target:c}))});var Sd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Sd||(Sd={}));var Cd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Cd||(Cd={}));function gx(e,t){let{target:r,replace:s,state:i,preventScrollReset:a,relative:l,viewTransition:o}=t===void 0?{}:t,c=up(),u=Cs(),d=hp(e,{relative:l});return p.useCallback(h=>{if(cx(h,r)){h.preventDefault();let g=s!==void 0?s:Ii(u)===Ii(d);c(e,{replace:g,state:i,preventScrollReset:a,relative:l,viewTransition:o})}},[u,c,d,s,i,r,e,a,l,o])}/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var xx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),X=(e,t)=>{const r=p.forwardRef(({color:s="currentColor",size:i=24,strokeWidth:a=2,absoluteStrokeWidth:l,className:o="",children:c,...u},d)=>p.createElement("svg",{ref:d,...xx,width:i,height:i,stroke:s,strokeWidth:l?Number(a)*24/Number(i):a,className:["lucide",`lucide-${vx(e)}`,o].join(" "),...u},[...t.map(([h,g])=>p.createElement(h,g)),...Array.isArray(c)?c:[c]]));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx=X("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tn=X("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=X("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=X("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx=X("ArrowUpDown",[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx=X("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=X("BarChart2",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bl=X("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=X("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx=X("Bug",[["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",key:"xs1cw7"}],["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4",key:"k3fwyw"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zn=X("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx=X("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ec=X("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cx=X("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $n=X("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx=X("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ql=X("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=X("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oi=X("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp=X("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx=X("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=X("FileCode",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Br=X("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ex=X("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=X("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vp=X("GitMerge",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nc=X("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx=X("Grid3x3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=X("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix=X("HeartHandshake",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",key:"12sd6o"}],["path",{d:"m18 15-2-2",key:"60u0ii"}],["path",{d:"m15 18-2-2",key:"6p76be"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Me=X("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx=X("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx=X("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nt=X("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tc=X("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=X("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hl=X("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rc=X("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yp=X("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _d=X("Map",[["polygon",{points:"3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21",key:"ok2ie8"}],["line",{x1:"9",x2:"9",y1:"3",y2:"18",key:"w34qz5"}],["line",{x1:"15",x2:"15",y1:"6",y2:"21",key:"volv9a"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax=X("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx=X("MousePointer2",[["path",{d:"m4 4 7.07 17 2.51-7.39L21 11.07z",key:"1vqm48"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=X("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wr=X("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pe=X("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zi=X("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dx=X("Puzzle",[["path",{d:"M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z",key:"i0oyt7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sc=X("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xn=X("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=X("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const At=X("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx=X("ShieldCheck",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=X("SkipBack",[["polygon",{points:"19 20 9 12 19 4 19 20",key:"o2sva"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5",key:"1ocqjk"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sr=X("SkipForward",[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=X("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ul=X("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kl=X("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cr=X("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=X("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=X("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ci=X("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const na=X("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ts=X("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function Wx(){const e=Cs(),[t,r]=p.useState(!1),s=e.pathname==="/"?"home":e.pathname.replace("/","").replace("_",""),i=()=>r(!t),a=()=>r(!1);p.useEffect(()=>{const o=()=>{window.innerWidth>1024&&r(!1)};return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[]),p.useEffect(()=>{t?document.body.style.overflow="hidden":document.body.style.overflow=""},[t]);const l=({to:o,icon:c,children:u,pageName:d})=>{const h=s===d;return n.jsxs(An,{to:o,className:`nav-item ${h?"active":""}`,onClick:a,children:[n.jsx(c,{}),n.jsx("span",{children:u})]})};return n.jsxs(n.Fragment,{children:[n.jsx("button",{className:"mobile-menu-toggle",id:"mobileMenuToggle","aria-label":"Toggle menu",onClick:i,children:t?n.jsx(na,{}):n.jsx(Ax,{})}),n.jsx("div",{className:`sidebar-overlay ${t?"active":""}`,onClick:a}),n.jsxs("aside",{className:`sidebar ${t?"active":""}`,id:"sidebar",children:[n.jsx("div",{className:"sidebar-header",children:n.jsx(An,{to:"/",className:"logo-wrapper",onClick:a,children:n.jsx("span",{className:"logo-text",children:"DSA Visualizer"})})}),n.jsxs("nav",{className:"sidebar-nav",children:[n.jsxs("div",{className:"nav-section",children:[n.jsx("div",{className:"nav-section-title",children:"Explore"}),n.jsx(l,{to:"/",icon:Mx,pageName:"home",children:"Home"}),n.jsx(l,{to:"/algorithms",icon:_x,pageName:"algorithms",children:"Algorithms"}),n.jsx(l,{to:"/practice",icon:Cr,pageName:"practice",children:"Practice"}),n.jsx(l,{to:"/compare",icon:vp,pageName:"compare",children:"Compare"}),n.jsx(l,{to:"/sandbox",icon:Ul,pageName:"sandbox",children:"Sandbox"}),n.jsx(l,{to:"/resume-reviewer",icon:Br,pageName:"resume-reviewer",children:"Resume Reviewer"})]}),n.jsxs("div",{className:"nav-section",children:[n.jsx("div",{className:"nav-section-title",children:"More"}),n.jsx(l,{to:"/contact",icon:yp,pageName:"contact",children:"Contact"}),n.jsx(l,{to:"/contributions",icon:Ix,pageName:"contributions",children:"Contributions"})]})]}),n.jsxs("div",{className:"sidebar-footer",children:[n.jsxs("div",{className:"social-links-sidebar",children:[n.jsx("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",title:"GitHub",children:n.jsx(nc,{})}),n.jsx("a",{href:"https://www.linkedin.com/in/abdullah-mahfouz-5188b1306/",target:"_blank",rel:"noopener noreferrer",title:"LinkedIn",children:n.jsx(rc,{})})]}),n.jsx("p",{className:"copyright",children:"© 2026 Abdullah Mahfouz"})]})]})]})}function Gx(){return n.jsx("footer",{className:"main-footer",children:n.jsxs("div",{className:"footer-content",children:[n.jsxs("div",{className:"footer-social",children:[n.jsxs("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",className:"footer-link",children:[n.jsx(nc,{}),n.jsx("span",{children:"GitHub"})]}),n.jsxs("a",{href:"https://www.linkedin.com/in/abdullah-mahfouz-5188b1306/",target:"_blank",rel:"noopener noreferrer",className:"footer-link",children:[n.jsx(rc,{}),n.jsx("span",{children:"LinkedIn"})]})]}),n.jsx("p",{className:"footer-copyright",children:"© 2026 Abdullah Mahfouz"})]})})}const Te=({children:e,size:t,className:r,...s})=>n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:t||24,height:t||24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.75,strokeLinecap:"round",strokeLinejoin:"round",className:r,...s,children:e}),jp=e=>n.jsxs(Te,{...e,children:[n.jsx("rect",{x:"4",y:"2",width:"16",height:"5",rx:"1.5"}),n.jsx("rect",{x:"4",y:"9.5",width:"16",height:"5",rx:"1.5"}),n.jsx("rect",{x:"4",y:"17",width:"16",height:"5",rx:"1.5"})]}),Np=e=>n.jsxs(Te,{...e,children:[n.jsx("rect",{x:"1.5",y:"6",width:"5",height:"9",rx:"1.5"}),n.jsx("rect",{x:"9.5",y:"6",width:"5",height:"9",rx:"1.5"}),n.jsx("rect",{x:"17.5",y:"6",width:"5",height:"9",rx:"1.5"}),n.jsx("path",{d:"M4 19h16"}),n.jsx("path",{d:"M17.5 17l2.5 2-2.5 2"})]}),bp=e=>n.jsxs(Te,{...e,children:[n.jsx("circle",{cx:"4",cy:"12",r:"2.5"}),n.jsx("circle",{cx:"12",cy:"12",r:"2.5"}),n.jsx("circle",{cx:"20",cy:"12",r:"2.5"}),n.jsx("path",{d:"M6.5 12h3"}),n.jsx("path",{d:"M14.5 12h3"}),n.jsx("path",{d:"M8.5 10.5l1 1.5-1 1.5"}),n.jsx("path",{d:"M16.5 10.5l1 1.5-1 1.5"})]}),Qx=e=>n.jsxs(Te,{...e,children:[n.jsx("circle",{cx:"3",cy:"19",r:"1.8"}),n.jsx("circle",{cx:"9",cy:"19",r:"1.8"}),n.jsx("circle",{cx:"15",cy:"19",r:"1.8"}),n.jsx("circle",{cx:"21",cy:"19",r:"1.8"}),n.jsx("line",{x1:"4.8",y1:"19",x2:"7.2",y2:"19"}),n.jsx("line",{x1:"10.8",y1:"19",x2:"13.2",y2:"19"}),n.jsx("line",{x1:"16.8",y1:"19",x2:"19.2",y2:"19"}),n.jsx("circle",{cx:"3",cy:"12",r:"1.8"}),n.jsx("circle",{cx:"15",cy:"12",r:"1.8"}),n.jsx("line",{x1:"4.8",y1:"12",x2:"13.2",y2:"12"}),n.jsx("circle",{cx:"3",cy:"5",r:"1.8"}),n.jsx("circle",{cx:"21",cy:"5",r:"1.8"}),n.jsx("line",{x1:"4.8",y1:"5",x2:"19.2",y2:"5"}),n.jsx("line",{x1:"3",y1:"6.8",x2:"3",y2:"10.2"}),n.jsx("line",{x1:"3",y1:"13.8",x2:"3",y2:"17.2"}),n.jsx("line",{x1:"15",y1:"13.8",x2:"15",y2:"17.2"}),n.jsx("line",{x1:"21",y1:"6.8",x2:"21",y2:"17.2"})]}),kp=e=>n.jsxs(Te,{...e,children:[n.jsx("rect",{x:"13",y:"2",width:"9",height:"4.5",rx:"1"}),n.jsx("rect",{x:"13",y:"8.5",width:"9",height:"4.5",rx:"1"}),n.jsx("rect",{x:"13",y:"15",width:"9",height:"4.5",rx:"1"}),n.jsx("circle",{cx:"3.5",cy:"4.25",r:"1.5"}),n.jsx("circle",{cx:"3.5",cy:"10.75",r:"1.5"}),n.jsx("circle",{cx:"3.5",cy:"17.25",r:"1.5"}),n.jsx("path",{d:"M5 4.25h6.5"}),n.jsx("path",{d:"M11.5 4.25l1.5 6.5"}),n.jsx("path",{d:"M5 10.75h8"}),n.jsx("path",{d:"M5 17.25h6.5"}),n.jsx("path",{d:"M11.5 17.25l1.5-3"})]}),Xx=e=>n.jsxs(Te,{...e,children:[n.jsx("rect",{x:"2",y:"3",width:"6",height:"5",rx:"1"}),n.jsx("rect",{x:"2",y:"10",width:"6",height:"5",rx:"1"}),n.jsx("rect",{x:"2",y:"17",width:"6",height:"5",rx:"1"}),n.jsx("line",{x1:"8",y1:"5.5",x2:"11",y2:"5.5"}),n.jsx("circle",{cx:"13",cy:"5.5",r:"1.8"}),n.jsx("line",{x1:"14.8",y1:"5.5",x2:"17.5",y2:"5.5"}),n.jsx("circle",{cx:"19.5",cy:"5.5",r:"1.8"}),n.jsx("line",{x1:"8",y1:"12.5",x2:"11",y2:"12.5"}),n.jsx("circle",{cx:"13",cy:"12.5",r:"1.8"}),n.jsx("line",{x1:"8",y1:"19.5",x2:"10",y2:"19.5"}),n.jsx("circle",{cx:"10.5",cy:"19.5",r:"0.5",fill:"currentColor"})]}),Ld=e=>n.jsxs(Te,{...e,children:[n.jsx("rect",{x:"3",y:"8",width:"3.5",height:"8",rx:"1"}),n.jsx("rect",{x:"7.5",y:"8",width:"3.5",height:"8",rx:"1"}),n.jsx("rect",{x:"12",y:"8",width:"3.5",height:"8",rx:"1"}),n.jsx("rect",{x:"16.5",y:"8",width:"3.5",height:"8",rx:"1"}),n.jsx("line",{x1:"4",y1:"10",x2:"5.5",y2:"14"}),n.jsx("line",{x1:"5.5",y1:"10",x2:"4",y2:"14"}),n.jsx("path",{d:"M4.75 6.5 C4.75 3 9.25 3 9.25 6.5"}),n.jsx("path",{d:"M8.25 5l1 1.5-1.5 0.5"})]}),Yx=e=>n.jsxs(Te,{...e,children:[n.jsx("circle",{cx:"12",cy:"4",r:"2.5"}),n.jsx("circle",{cx:"6",cy:"13",r:"2.5"}),n.jsx("circle",{cx:"18",cy:"13",r:"2.5"}),n.jsx("circle",{cx:"3",cy:"21",r:"1.8"}),n.jsx("circle",{cx:"9",cy:"21",r:"1.8"}),n.jsx("circle",{cx:"15",cy:"21",r:"1.8"}),n.jsx("circle",{cx:"21",cy:"21",r:"1.8"}),n.jsx("line",{x1:"10.2",y1:"5.8",x2:"7.8",y2:"11.2"}),n.jsx("line",{x1:"13.8",y1:"5.8",x2:"16.2",y2:"11.2"}),n.jsx("line",{x1:"4.5",y1:"14.8",x2:"3.5",y2:"19.2"}),n.jsx("line",{x1:"7.5",y1:"14.8",x2:"8.5",y2:"19.2"}),n.jsx("line",{x1:"16.5",y1:"14.8",x2:"15.5",y2:"19.2"}),n.jsx("line",{x1:"19.5",y1:"14.8",x2:"20.5",y2:"19.2"})]}),wp=e=>n.jsxs(Te,{...e,children:[n.jsx("circle",{cx:"12",cy:"4.5",r:"2.5"}),n.jsx("circle",{cx:"7",cy:"13",r:"2.5"}),n.jsx("circle",{cx:"17",cy:"13",r:"2.5"}),n.jsx("circle",{cx:"4",cy:"20.5",r:"2"}),n.jsx("circle",{cx:"20",cy:"20.5",r:"2"}),n.jsx("line",{x1:"10.3",y1:"6.2",x2:"8.7",y2:"11.3"}),n.jsx("line",{x1:"13.7",y1:"6.2",x2:"15.3",y2:"11.3"}),n.jsx("line",{x1:"5.5",y1:"14.8",x2:"4.8",y2:"18.5"}),n.jsx("line",{x1:"18.5",y1:"14.8",x2:"19.2",y2:"18.5"})]}),Jx=e=>n.jsxs(Te,{...e,children:[n.jsx("circle",{cx:"12",cy:"4",r:"2.5"}),n.jsx("circle",{cx:"6.5",cy:"12",r:"2.5"}),n.jsx("circle",{cx:"17.5",cy:"12",r:"2.5"}),n.jsx("circle",{cx:"3.5",cy:"20",r:"2"}),n.jsx("circle",{cx:"9.5",cy:"20",r:"2"}),n.jsx("circle",{cx:"14.5",cy:"20",r:"2"}),n.jsx("circle",{cx:"20.5",cy:"20",r:"2"}),n.jsx("line",{x1:"10.2",y1:"5.7",x2:"8.3",y2:"10.3"}),n.jsx("line",{x1:"13.8",y1:"5.7",x2:"15.7",y2:"10.3"}),n.jsx("line",{x1:"5",y1:"13.8",x2:"4.2",y2:"18"}),n.jsx("line",{x1:"8",y1:"13.8",x2:"8.8",y2:"18"}),n.jsx("line",{x1:"16",y1:"13.8",x2:"15.2",y2:"18"}),n.jsx("line",{x1:"19",y1:"13.8",x2:"19.8",y2:"18"})]}),Zx=e=>n.jsxs(Te,{...e,children:[n.jsx("circle",{cx:"12",cy:"4.5",r:"2.5"}),n.jsx("circle",{cx:"12",cy:"4.5",r:"4",opacity:"0.3"}),n.jsx("circle",{cx:"6",cy:"13",r:"2.5"}),n.jsx("circle",{cx:"18",cy:"13",r:"2.5"}),n.jsx("circle",{cx:"3.5",cy:"20.5",r:"2"}),n.jsx("circle",{cx:"15.5",cy:"20.5",r:"2"}),n.jsx("line",{x1:"10.2",y1:"6.2",x2:"7.8",y2:"11.2"}),n.jsx("line",{x1:"13.8",y1:"6.2",x2:"16.2",y2:"11.2"}),n.jsx("line",{x1:"4.7",y1:"14.8",x2:"3.9",y2:"18.5"}),n.jsx("line",{x1:"16.8",y1:"14.8",x2:"16",y2:"18.5"})]}),ev=e=>n.jsxs(Te,{...e,children:[n.jsx("circle",{cx:"12",cy:"4",r:"2.5"}),n.jsx("circle",{cx:"7",cy:"12",r:"2.5"}),n.jsx("circle",{cx:"18",cy:"10",r:"2.5"}),n.jsx("circle",{cx:"4",cy:"20",r:"2"}),n.jsx("circle",{cx:"10",cy:"19",r:"2"}),n.jsx("circle",{cx:"21",cy:"17.5",r:"2"}),n.jsx("line",{x1:"10.2",y1:"5.7",x2:"8.7",y2:"10.3"}),n.jsx("line",{x1:"13.8",y1:"5.2",x2:"16.2",y2:"8.5"}),n.jsx("line",{x1:"5.5",y1:"13.8",x2:"4.6",y2:"18"}),n.jsx("line",{x1:"8.5",y1:"13.8",x2:"9.5",y2:"17"}),n.jsx("line",{x1:"19.8",y1:"12",x2:"20.6",y2:"15.5"})]}),nv=e=>n.jsxs(Te,{...e,children:[n.jsx("circle",{cx:"12",cy:"3.5",r:"2.5"}),n.jsx("circle",{cx:"6.5",cy:"12",r:"2.5"}),n.jsx("circle",{cx:"17.5",cy:"12",r:"2.5"}),n.jsx("circle",{cx:"3",cy:"20.5",r:"2"}),n.jsx("circle",{cx:"10",cy:"20.5",r:"2"}),n.jsx("circle",{cx:"14",cy:"20.5",r:"2"}),n.jsx("circle",{cx:"21",cy:"20.5",r:"2"}),n.jsx("line",{x1:"10.2",y1:"5.2",x2:"8.3",y2:"10.3"}),n.jsx("line",{x1:"13.8",y1:"5.2",x2:"15.7",y2:"10.3"}),n.jsx("line",{x1:"5",y1:"13.8",x2:"3.7",y2:"18.5"}),n.jsx("line",{x1:"8",y1:"13.8",x2:"9.3",y2:"18.5"}),n.jsx("line",{x1:"16",y1:"13.8",x2:"14.7",y2:"18.5"}),n.jsx("line",{x1:"19",y1:"13.8",x2:"20.3",y2:"18.5"}),n.jsx("path",{d:"M22 8l0-5"}),n.jsx("path",{d:"M20.5 4.5L22 3l1.5 1.5",opacity:"0.5"})]}),tv=e=>n.jsxs(Te,{...e,children:[n.jsx("circle",{cx:"12",cy:"3.5",r:"2.5"}),n.jsx("circle",{cx:"6.5",cy:"12",r:"2.5"}),n.jsx("circle",{cx:"17.5",cy:"12",r:"2.5"}),n.jsx("circle",{cx:"3",cy:"20.5",r:"2"}),n.jsx("circle",{cx:"10",cy:"20.5",r:"2"}),n.jsx("circle",{cx:"14",cy:"20.5",r:"2"}),n.jsx("circle",{cx:"21",cy:"20.5",r:"2"}),n.jsx("line",{x1:"10.2",y1:"5.2",x2:"8.3",y2:"10.3"}),n.jsx("line",{x1:"13.8",y1:"5.2",x2:"15.7",y2:"10.3"}),n.jsx("line",{x1:"5",y1:"13.8",x2:"3.7",y2:"18.5"}),n.jsx("line",{x1:"8",y1:"13.8",x2:"9.3",y2:"18.5"}),n.jsx("line",{x1:"16",y1:"13.8",x2:"14.7",y2:"18.5"}),n.jsx("line",{x1:"19",y1:"13.8",x2:"20.3",y2:"18.5"}),n.jsx("path",{d:"M22 3l0 5"}),n.jsx("path",{d:"M20.5 6.5L22 8l1.5-1.5",opacity:"0.5"})]}),Sp=e=>n.jsxs(Te,{...e,children:[n.jsx("circle",{cx:"12",cy:"3",r:"2"}),n.jsx("circle",{cx:"4",cy:"10",r:"2"}),n.jsx("circle",{cx:"20",cy:"10",r:"2"}),n.jsx("circle",{cx:"6.5",cy:"20",r:"2"}),n.jsx("circle",{cx:"17.5",cy:"20",r:"2"}),n.jsx("line",{x1:"10.2",y1:"4.2",x2:"5.8",y2:"8.8"}),n.jsx("line",{x1:"13.8",y1:"4.2",x2:"18.2",y2:"8.8"}),n.jsx("line",{x1:"4.5",y1:"12",x2:"6",y2:"18"}),n.jsx("line",{x1:"19.5",y1:"12",x2:"18",y2:"18"}),n.jsx("line",{x1:"8.5",y1:"20",x2:"15.5",y2:"20"}),n.jsx("line",{x1:"6",y1:"10.5",x2:"18",y2:"10.5",opacity:"0.4"})]}),rv=e=>n.jsxs(Te,{...e,children:[n.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"1.5"}),n.jsx("line",{x1:"7",y1:"2",x2:"7",y2:"22"}),n.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"22"}),n.jsx("line",{x1:"17",y1:"2",x2:"17",y2:"22"}),n.jsx("line",{x1:"2",y1:"7",x2:"22",y2:"7"}),n.jsx("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),n.jsx("line",{x1:"2",y1:"17",x2:"22",y2:"17"}),n.jsx("rect",{x:"7.75",y:"2.75",width:"3.5",height:"3.5",rx:"0.5",fill:"currentColor",opacity:"0.25",stroke:"none"}),n.jsx("rect",{x:"12.75",y:"7.75",width:"3.5",height:"3.5",rx:"0.5",fill:"currentColor",opacity:"0.25",stroke:"none"}),n.jsx("rect",{x:"2.75",y:"12.75",width:"3.5",height:"3.5",rx:"0.5",fill:"currentColor",opacity:"0.25",stroke:"none"}),n.jsx("rect",{x:"17.75",y:"17.75",width:"3.5",height:"3.5",rx:"0.5",fill:"currentColor",opacity:"0.25",stroke:"none"})]}),sv=e=>n.jsxs(Te,{...e,children:[n.jsx("circle",{cx:"4",cy:"5",r:"2"}),n.jsx("circle",{cx:"4",cy:"12",r:"2"}),n.jsx("circle",{cx:"4",cy:"19",r:"2"}),n.jsx("line",{x1:"6",y1:"5",x2:"9",y2:"5"}),n.jsx("line",{x1:"6",y1:"12",x2:"9",y2:"12"}),n.jsx("line",{x1:"6",y1:"19",x2:"9",y2:"19"}),n.jsx("rect",{x:"9.5",y:"2.5",width:"4.5",height:"5",rx:"1"}),n.jsx("rect",{x:"15",y:"2.5",width:"4.5",height:"5",rx:"1"}),n.jsx("rect",{x:"9.5",y:"9.5",width:"4.5",height:"5",rx:"1"}),n.jsx("rect",{x:"15",y:"9.5",width:"4.5",height:"5",rx:"1"}),n.jsx("rect",{x:"20.5",y:"9.5",width:"2",height:"5",rx:"0.5",opacity:"0.4"}),n.jsx("rect",{x:"9.5",y:"16.5",width:"4.5",height:"5",rx:"1"})]}),iv=e=>n.jsxs(Te,{...e,children:[n.jsx("circle",{cx:"12",cy:"12",r:"2.5"}),n.jsx("circle",{cx:"12",cy:"12",r:"6",opacity:"0.5",strokeDasharray:"2 2"}),n.jsx("circle",{cx:"12",cy:"12",r:"9.5",opacity:"0.25",strokeDasharray:"2 2"}),n.jsx("circle",{cx:"6",cy:"12",r:"1.5"}),n.jsx("circle",{cx:"18",cy:"12",r:"1.5"}),n.jsx("circle",{cx:"12",cy:"6",r:"1.5"}),n.jsx("circle",{cx:"12",cy:"18",r:"1.5"}),n.jsx("circle",{cx:"3.5",cy:"7",r:"1.3",opacity:"0.5"}),n.jsx("circle",{cx:"20.5",cy:"7",r:"1.3",opacity:"0.5"}),n.jsx("circle",{cx:"3.5",cy:"17",r:"1.3",opacity:"0.5"}),n.jsx("circle",{cx:"20.5",cy:"17",r:"1.3",opacity:"0.5"})]}),av=e=>n.jsxs(Te,{...e,children:[n.jsx("circle",{cx:"12",cy:"3",r:"2"}),n.jsx("circle",{cx:"6",cy:"10",r:"2"}),n.jsx("circle",{cx:"18",cy:"10",r:"2"}),n.jsx("circle",{cx:"3",cy:"17",r:"2"}),n.jsx("circle",{cx:"9",cy:"17",r:"2"}),n.jsx("circle",{cx:"6",cy:"22",r:"1.5"}),n.jsx("line",{x1:"10.5",y1:"4.5",x2:"7.5",y2:"8.5"}),n.jsx("line",{x1:"13.5",y1:"4.5",x2:"16.5",y2:"8.5"}),n.jsx("line",{x1:"4.5",y1:"11.5",x2:"3.5",y2:"15.5"}),n.jsx("line",{x1:"7.5",y1:"11.5",x2:"8.5",y2:"15.5"}),n.jsx("line",{x1:"3.5",y1:"19",x2:"5.2",y2:"20.8"}),n.jsx("path",{d:"M12 3 L6 10 L3 17 L6 22",strokeWidth:"2.5",opacity:"0.25"})]}),lv=e=>n.jsxs(Te,{...e,children:[n.jsx("rect",{x:"1",y:"9",width:"5",height:"6",rx:"1.5"}),n.jsx("rect",{x:"7.5",y:"9",width:"5",height:"6",rx:"1.5"}),n.jsx("rect",{x:"14",y:"9",width:"5",height:"6",rx:"1.5"}),n.jsx("path",{d:"M19 12h2.5"}),n.jsx("path",{d:"M20.5 10.5l1.5 1.5-1.5 1.5"})]}),ov=e=>n.jsxs(Te,{...e,children:[n.jsx("circle",{cx:"12",cy:"4",r:"2.5"}),n.jsx("circle",{cx:"5",cy:"13",r:"2.5"}),n.jsx("circle",{cx:"19",cy:"13",r:"2.5"}),n.jsx("circle",{cx:"12",cy:"21",r:"2"}),n.jsx("line",{x1:"10.2",y1:"5.8",x2:"6.8",y2:"11.2"}),n.jsx("line",{x1:"13.8",y1:"5.8",x2:"17.2",y2:"11.2"}),n.jsx("line",{x1:"6.5",y1:"15",x2:"10.5",y2:"19.5"}),n.jsx("line",{x1:"17.5",y1:"15",x2:"13.5",y2:"19.5"})]}),cv=e=>n.jsxs(Te,{...e,children:[n.jsx("circle",{cx:"12",cy:"3.5",r:"2.5"}),n.jsx("circle",{cx:"6.5",cy:"12",r:"2.5"}),n.jsx("circle",{cx:"17.5",cy:"12",r:"2.5"}),n.jsx("circle",{cx:"3.5",cy:"20.5",r:"2"}),n.jsx("circle",{cx:"9.5",cy:"20.5",r:"2"}),n.jsx("circle",{cx:"14.5",cy:"20.5",r:"2"}),n.jsx("circle",{cx:"20.5",cy:"20.5",r:"2"}),n.jsx("line",{x1:"10.3",y1:"5.2",x2:"8.3",y2:"10.3"}),n.jsx("line",{x1:"13.7",y1:"5.2",x2:"15.7",y2:"10.3"}),n.jsx("line",{x1:"5",y1:"13.8",x2:"4.2",y2:"18.5"}),n.jsx("line",{x1:"8",y1:"13.8",x2:"8.8",y2:"18.5"}),n.jsx("line",{x1:"16",y1:"13.8",x2:"15.2",y2:"18.5"}),n.jsx("line",{x1:"19",y1:"13.8",x2:"19.8",y2:"18.5"})]}),dv=[{icon:jp,name:"Stack",desc:"Last in, first out. Push, pop, and peek in constant time.",tag:"O(1)",path:"/stack"},{icon:Np,name:"Queue",desc:"First in, first out. Enqueue and dequeue operations.",tag:"O(1)",path:"/queue"},{icon:bp,name:"Linked List",desc:"Dynamic chain of nodes with pointer-based traversal.",tag:"O(1) insert",path:"/linkedlist"},{icon:wp,name:"Binary Search Tree",desc:"Ordered tree for logarithmic search and insertion.",tag:"O(log n)",path:"/bst"},{icon:kp,name:"Hash Table",desc:"Key-value mapping with collision handling strategies.",tag:"O(1) avg",path:"/hashtable_chaining"},{icon:Sp,name:"Graph Algorithms",desc:"BFS, DFS, Dijkstra, and minimum spanning trees.",tag:"Traversal",path:"/dijkstra"}];function uv(){return n.jsxs(n.Fragment,{children:[n.jsxs("section",{className:"home-hero",children:[n.jsx("div",{className:"home-hero-glow","aria-hidden":"true"}),n.jsxs("div",{className:"home-hero-inner",children:[n.jsxs("h1",{children:["Data Structures",n.jsx("br",{}),n.jsx("span",{children:"& Algorithms"})]}),n.jsx("p",{children:"Visualize operations step by step, interact with live structures, and build real intuition for how algorithms work."}),n.jsxs("div",{className:"home-hero-actions",children:[n.jsxs(An,{to:"/algorithms",className:"home-btn home-btn--primary",children:["Explore Visualizers",n.jsx(xe,{size:18})]}),n.jsxs(An,{to:"/practice",className:"home-btn home-btn--ghost",children:[n.jsx(Cr,{size:18}),"Practice Problems"]})]})]})]}),n.jsxs("section",{className:"home-section",children:[n.jsxs("header",{className:"home-section-head",children:[n.jsx("h2",{children:"Featured"}),n.jsxs(An,{to:"/algorithms",className:"home-link-muted",children:["All visualizers ",n.jsx(xe,{size:15})]})]}),n.jsx("div",{className:"home-cards",children:dv.map((e,t)=>n.jsxs(An,{to:e.path,className:"home-card",style:{"--stagger":`${t*.05}s`},children:[n.jsx("div",{className:"home-card-icon",children:n.jsx(e.icon,{})}),n.jsxs("div",{className:"home-card-body",children:[n.jsx("h3",{children:e.name}),n.jsx("p",{children:e.desc})]}),n.jsx("span",{className:"home-card-tag",children:e.tag})]},e.name))})]}),n.jsx("section",{className:"home-section home-section--alt",children:n.jsxs("div",{className:"home-banner",children:[n.jsxs("div",{children:[n.jsx("h2",{children:"Practice Problems"}),n.jsx("p",{children:"22 curated problems across arrays, trees, graphs, dynamic programming, and more. Built-in editor with instant test feedback."})]}),n.jsxs(An,{to:"/practice",className:"home-btn home-btn--primary",children:["Start Practicing",n.jsx(xe,{size:18})]})]})})]})}function hv(){const[e,t]=p.useState(null),r=i=>{t(e===i?null:i)},s=[{id:"linear",name:"Linear Data Structures",icon:lv,description:"Elements stored sequentially where each element has a unique predecessor and successor. These are the building blocks of computer science — simple to implement yet powerful enough to solve complex problems.",color:"#6366f1",items:[{to:"/stack",icon:jp,title:"Stack",description:"LIFO (Last In, First Out) — imagine a stack of plates where you can only add or remove from the top. The most recent item is always accessed first. Push adds to top, Pop removes from top. Both operations are O(1) constant time. Essential for: browser back button (page history), undo/redo in editors, function call management in recursion, parsing expressions like (a+b)*c, and depth-first search algorithms.",available:!0},{to:"/queue",icon:Np,title:"Queue",description:"FIFO (First In, First Out) — like waiting in line at a coffee shop. The first person to arrive gets served first. Enqueue adds to the back, Dequeue removes from front. Both O(1) operations. Used everywhere: print job scheduling, CPU task management, breadth-first search (BFS) in graphs, handling requests in web servers, and buffering data streams like video playback.",available:!0},{to:"/linkedlist",icon:bp,title:"Linked List",description:"A chain of nodes where each node stores data and a pointer to the next node. Unlike arrays, memory doesn't need to be contiguous — nodes can be scattered in memory. Insertion/deletion at known positions is O(1), but finding a position is O(n). Perfect for: implementing stacks/queues, music playlists (next/previous song), browser history, memory allocation in operating systems, and polynomial arithmetic.",available:!0},{to:"/skiplist",icon:Qx,title:"Skip List",description:'A probabilistic data structure that uses multiple layers of linked lists with decreasing density. Express lanes skip over elements like a train system — higher levels let you "skip" to your destination faster. Achieves O(log n) average for search, insert, and delete. Used in Redis for sorted sets, LevelDB for in-memory indexing, and concurrent data structures where lock-free operation is critical.',available:!0}]},{id:"hash",name:"Hash-Tables",icon:kp,description:"Revolutionary data structures that use hash functions to map keys to array indices, enabling O(1) average-case lookup, insertion, and deletion. The backbone of databases, caches, and any system requiring fast key-value access.",color:"#10b981",items:[{to:"/hashtable_linear",icon:Ld,title:"Linear Probing",description:'Open addressing collision resolution: when a collision occurs (two keys hash to same index), simply check the next slot, then the next, until an empty slot is found. Pros: excellent cache performance since data is stored contiguously, simple implementation. Cons: can cause "primary clustering" where long runs of occupied slots form, degrading performance. Load factor should stay below 0.7 for efficiency.',available:!0},{to:"/hashtable_quadratic",icon:Ld,title:"Quadratic Probing",description:'Instead of checking consecutive slots, probe at quadratic intervals: 1², 2², 3²... positions away from the original hash. This eliminates primary clustering but can cause "secondary clustering" where keys with the same hash follow the same probe sequence. Table size should be prime and load factor < 0.5 to guarantee finding an empty slot. Used when cache performance is less critical than even distribution.',available:!0},{to:"/hashtable_chaining",icon:Xx,title:"Separate Chaining",description:"Each array slot holds a linked list (chain) of all entries that hash to that index. No limit on how many items can be stored — just grow the chains. Handles high load factors gracefully (even > 1.0). Simpler deletion than open addressing. Used in Java's HashMap, Python's dict (with optimization). Trade-off: extra memory for pointers, potentially poor cache performance with long chains.",available:!0}]},{id:"heaps",name:"Priority Queues & Heaps",icon:cv,description:"Complete binary trees satisfying the heap property — either every parent ≥ children (max-heap) or every parent ≤ children (min-heap). Heaps power priority queues, enabling O(1) access to the extreme element and O(log n) insertions and deletions.",color:"#ec4899",items:[{to:"/minheap",icon:nv,title:"Min Heap",description:`Every parent node is smaller than or equal to its children, so the minimum element is always at the root — accessible in O(1). Insert and extract-min are O(log n) as elements "bubble up" or "sink down" to maintain the heap property. Critical for: Dijkstra's shortest path algorithm, Prim's minimum spanning tree, job schedulers (process with smallest priority runs next), and efficiently finding the k largest elements in a stream.`,available:!0},{to:"/maxheap",icon:tv,title:"Max Heap",description:"The mirror of min-heap: every parent ≥ children, maximum at root. Extract-max in O(1), insert and delete in O(log n). Powers: Heapsort algorithm (in-place O(n log n) sorting), priority queues where highest priority goes first, finding k smallest elements, implementing a median-finding structure (use one min-heap + one max-heap), and bandwidth management in network routers.",available:!0}]},{id:"trees",name:"Binary Trees",icon:ov,description:"Hierarchical data structures where data flows from a root node down through children. Trees enable O(log n) operations on sorted data and model real-world hierarchies like file systems, organization charts, and decision trees in AI/ML.",color:"#f59e0b",items:[{to:"/binarytree",icon:Yx,title:"Binary Tree Traversals",description:"Master the four fundamental ways to visit every node in a binary tree: INORDER (Left→Root→Right) visits nodes in sorted order for BST, used for expression trees; PREORDER (Root→Left→Right) processes root first, perfect for copying trees or creating prefix expressions; POSTORDER (Left→Right→Root) processes children before parent, used for deleting trees or postfix notation; LEVEL-ORDER (BFS) visits level by level, used for finding shortest paths and printing tree structure.",available:!0},{to:"/bst",icon:wp,title:"Binary Search Tree",description:`The fundamental ordered tree: every node's left subtree contains only smaller values, right subtree only larger values. This property enables O(log n) search by eliminating half the tree at each step — like binary search but in tree form. Supports efficient range queries. Caveat: can degrade to O(n) if insertions create an unbalanced "stick". Foundation for databases, symbol tables, and more advanced balanced trees.`,available:!0},{to:"/avl",icon:Jx,title:"AVL Tree",description:"The first self-balancing BST, invented in 1962. Maintains strict balance: height difference between left and right subtrees ≤ 1 at every node. When insertion/deletion violates this, the tree self-corrects using rotations (single or double). Guarantees O(log n) for all operations. More rigidly balanced than Red-Black trees, so faster lookups but slightly slower insertions. Used when reads far exceed writes.",available:!0},{to:"/splay",icon:Zx,title:"Splay Tree",description:`A self-adjusting BST with a clever optimization: every accessed node is "splayed" (rotated) to the root. No explicit balance condition, yet achieves O(log n) amortized time. Recently accessed items stay near the root — perfect for caches where some items are accessed repeatedly (temporal locality). Used in Windows NT's virtual memory management, GCC's implementation of certain data structures, and network routers.`,available:!0},{to:"/treap",icon:ev,title:"Treap",description:"A randomized BST that combines tree and heap properties. Each node has a key (BST-ordered) and a random priority (max-heap-ordered). Rotations restore heap order after insertion, giving O(log n) expected time for all operations without complex rebalancing logic. Supports efficient split and merge. Widely used in competitive programming and as a simpler alternative to AVL/Red-Black trees.",available:!0}]},{id:"Graphs",name:"Graphs",icon:Sp,description:"Graphs model relationships between objects using vertices (nodes) and edges (connections). They power social networks, GPS navigation, recommendation systems, and the internet itself. Understanding graphs unlocks solutions to complex real-world problems like finding shortest paths, detecting communities, and optimizing networks.",color:"#ef4444",items:[{to:"/adjacency-matrix",icon:rv,title:"Adjacency Matrix",description:"A 2D array used to represent a finite graph. Each cell at (i, j) indicates if there is an edge from vertex i to vertex j. Simple and fast for dense graphs, but uses O(V^2) space. Not practical for large, sparse graphs.",available:!0},{to:"/adjacency-list",icon:sv,title:"Adjacency List",description:"A space-efficient way to represent a graph. Each vertex stores a list of adjacent vertices. Ideal for sparse graphs, supports efficient iteration over neighbors. Commonly used in network routing, social networks, and recommendation systems.",available:!0},{to:"/bfs",icon:iv,title:"Breadth-First Search (BFS)",description:"A fundamental graph traversal algorithm that explores neighbors level by level. Used for finding shortest paths in unweighted graphs, peer-to-peer networks, and web crawlers.",available:!0},{to:"/dfs",icon:av,title:"Depth-First Search (DFS)",description:"A classic graph traversal technique that explores as far as possible along each branch before backtracking. Used for topological sorting, cycle detection, and solving puzzles like mazes.",available:!0}]}];return n.jsxs("section",{className:"algorithms-section",children:[n.jsxs("div",{className:"section-header",children:[n.jsx("h1",{children:"Explore Data Structures"}),n.jsx("p",{children:"Choose a category to explore different data structures. Each visualizer includes step-by-step explanations and hands-on practice."})]}),n.jsx("div",{className:"categories-container",children:s.map(i=>n.jsxs("div",{className:`category-wrapper${e===i.id?" expanded-wrapper":""}`,style:{"--item-color":i.color},children:[n.jsxs("button",{className:`category-header ${e===i.id?"expanded":""}`,onClick:()=>r(i.id),children:[n.jsx("div",{className:"category-icon",style:{background:i.color},children:n.jsx(i.icon,{})}),n.jsx("div",{className:"category-info",children:n.jsx("h2",{children:i.name})}),n.jsxs("div",{className:"category-meta",children:[n.jsxs("span",{className:"item-count",children:[i.items.filter(a=>a.available).length," visualizers"]}),e===i.id?n.jsx(Tx,{size:20}):n.jsx(ec,{size:20})]})]}),n.jsx("div",{className:`category-items ${e===i.id?"expanded":""}`,children:n.jsx("div",{className:"items-grid",children:i.items.map((a,l)=>a.available?n.jsxs(An,{to:a.to,className:"algorithm-item",children:[n.jsx("div",{className:"item-icon",style:{background:i.color},children:n.jsx(a.icon,{})}),n.jsxs("div",{className:"item-info",children:[n.jsx("h3",{children:a.title}),n.jsx("p",{children:a.description})]}),n.jsx(xe,{className:"item-arrow"})]},l):n.jsxs("div",{className:"algorithm-item coming-soon",children:[n.jsx("div",{className:"item-icon disabled",children:n.jsx(a.icon,{})}),n.jsxs("div",{className:"item-info",children:[n.jsx("h3",{children:a.title}),n.jsx("p",{children:a.description})]}),n.jsx("span",{className:"coming-soon-badge",children:"Coming Soon"})]},l))})})]},i.id))})]})}function pv(){return n.jsxs("section",{className:"contact-section",children:[n.jsx("div",{className:"page-header",children:n.jsx("h1",{children:"Contact"})}),n.jsx("div",{className:"contact-content",children:n.jsxs("div",{className:"contact-info",children:[n.jsxs("div",{className:"info-card",children:[n.jsx("div",{className:"info-icon",children:n.jsx(yp,{})}),n.jsx("h3",{children:"Email"}),n.jsx("p",{children:"For recruitment and professional opportunities"}),n.jsx("a",{href:"mailto:abdullahmahfouz@trentu.ca",className:"info-link",children:"abdullahmahfouz@trentu.ca"})]}),n.jsxs("div",{className:"info-card",children:[n.jsx("div",{className:"info-icon",children:n.jsx(nc,{})}),n.jsx("h3",{children:"GitHub"}),n.jsx("p",{children:"View my projects and contributions"}),n.jsx("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",className:"info-link",children:"github.com/abdullahmahfouz"})]}),n.jsxs("div",{className:"info-card",children:[n.jsx("div",{className:"info-icon",children:n.jsx(rc,{})}),n.jsx("h3",{children:"LinkedIn"}),n.jsx("p",{children:"Connect for professional networking"}),n.jsx("a",{href:"https://www.linkedin.com/in/abdullah-mahfouz-5188b1306/",target:"_blank",rel:"noopener noreferrer",className:"info-link",children:"Connect on LinkedIn"})]})]})})]})}function fv(){return n.jsxs("section",{className:"contributions-section",children:[n.jsxs("div",{className:"page-header",children:[n.jsx("h1",{children:"Contributions"}),n.jsx("p",{children:"Help us improve this free learning tool for students! Your contributions help make DSA easier to understand for everyone."})]}),n.jsxs("div",{className:"contributions-content",children:[n.jsxs("div",{className:"contribution-card",children:[n.jsx("div",{className:"contribution-icon",children:n.jsx(oi,{})}),n.jsx("h2",{children:"Code Contributions"}),n.jsx("p",{children:"Found a bug or want to add a new feature? Fork the repository, make your changes, and submit a pull request!"}),n.jsxs("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",className:"btn-primary",children:[n.jsx("span",{children:"View on GitHub"}),n.jsx(xe,{})]})]}),n.jsxs("div",{className:"contribution-card",children:[n.jsx("div",{className:"contribution-icon",children:n.jsx(Bl,{})}),n.jsx("h2",{children:"Documentation"}),n.jsx("p",{children:"Help improve our documentation, fix typos, or add examples. Every bit helps!"}),n.jsxs("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",className:"btn-primary",children:[n.jsx("span",{children:"Improve Docs"}),n.jsx(xe,{})]})]}),n.jsxs("div",{className:"contribution-card",children:[n.jsx("div",{className:"contribution-icon",children:n.jsx(wx,{})}),n.jsx("h2",{children:"Report Issues"}),n.jsx("p",{children:"Found a bug or have a suggestion? Open an issue on GitHub and let us know!"}),n.jsxs("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",className:"btn-primary",children:[n.jsx("span",{children:"Report Issue"}),n.jsx(xe,{})]})]}),n.jsxs("div",{className:"contribution-card",children:[n.jsx("div",{className:"contribution-icon",children:n.jsx(ve,{})}),n.jsx("h2",{children:"Feature Requests"}),n.jsx("p",{children:"Have an idea for a new visualizer or feature? We'd love to hear your suggestions!"}),n.jsxs(An,{to:"/contact",className:"btn-primary",children:[n.jsx("span",{children:"Suggest Feature"}),n.jsx(xe,{})]})]})]}),n.jsxs("div",{className:"contributors-section",children:[n.jsx("h2",{children:"Contributors"}),n.jsx("div",{className:"contributors-list",children:n.jsxs("div",{className:"contributor-item",children:[n.jsx("div",{className:"contributor-avatar",children:n.jsx(Kx,{})}),n.jsxs("div",{className:"contributor-info",children:[n.jsx("h3",{children:"Abdullah Mahfouz"}),n.jsx("p",{children:"Creator & Maintainer"})]})]})}),n.jsx("p",{className:"contributors-note",children:"Want to see your name here? Start contributing today!"})]})]})}function yt(e,t){return e.split(/(`[^`\n]+`|\*\*[^*\n]+\*\*|\*[^*\n]+\*)/g).map((s,i)=>{const a=`${t}-i${i}`;return s.startsWith("`")&&s.endsWith("`")&&s.length>2?n.jsx("code",{className:"ai-inline-code",children:s.slice(1,-1)},a):s.startsWith("**")&&s.endsWith("**")&&s.length>4?n.jsx("strong",{children:s.slice(2,-2)},a):s.startsWith("*")&&s.endsWith("*")&&s.length>2?n.jsx("em",{className:"ai-md-em",children:s.slice(1,-1)},a):s||null})}function mv(e,t){const r=e.split(`
`),s=[];let i=[],a=[],l=null;const o=()=>{const u=i.join(" ").trim();u&&s.push({type:"p",content:u}),i=[]},c=()=>{a.length&&(s.push({type:l,items:[...a]}),a=[],l=null)};for(const u of r){const d=u.trim();if(!d){o(),c();continue}const h=d.match(/^# (.+)$/),g=d.match(/^## (.+)$/),b=d.match(/^### (.+)$/),N=/^---+$/.test(d),y=d.match(/^> (.+)$/),j=d.match(/^[-*+] (.+)$/),f=d.match(/^\d+\. (.+)$/);h||g||b?(o(),c(),b?s.push({type:"h3",content:b[1]}):g?s.push({type:"h2",content:g[1]}):s.push({type:"h1",content:h[1]})):N?(o(),c(),s.push({type:"hr"})):y?(o(),c(),s.push({type:"blockquote",content:y[1]})):j?(o(),l&&l!=="ul"&&c(),l="ul",a.push(j[1])):f?(o(),l&&l!=="ol"&&c(),l="ol",a.push(f[1])):(c(),i.push(u))}return o(),c(),s.map((u,d)=>{const h=`${t}-b${d}`;switch(u.type){case"h1":return n.jsx("p",{className:"ai-md-h1",children:yt(u.content,h)},h);case"h2":return n.jsx("p",{className:"ai-md-h2",children:yt(u.content,h)},h);case"h3":return n.jsx("p",{className:"ai-md-h3",children:yt(u.content,h)},h);case"hr":return n.jsx("hr",{className:"ai-md-hr"},h);case"blockquote":return n.jsx("blockquote",{className:"ai-md-blockquote",children:yt(u.content,h)},h);case"ul":return n.jsx("ul",{className:"ai-md-ul",children:u.items.map((g,b)=>n.jsx("li",{children:yt(g,`${h}-li${b}`)},b))},h);case"ol":return n.jsx("ol",{className:"ai-md-ol",children:u.items.map((g,b)=>n.jsx("li",{children:yt(g,`${h}-li${b}`)},b))},h);case"p":return n.jsx("p",{className:"ai-md-p",children:yt(u.content,h)},h);default:return null}})}function gv(e){if(!e)return null;const t=[],r=/```(\w*)\n?([\s\S]*?)```/g;let s=0,i;for(;(i=r.exec(e))!==null;)i.index>s&&t.push({type:"text",content:e.slice(s,i.index)}),t.push({type:"code",lang:i[1]||"",content:i[2].trim()}),s=i.index+i[0].length;return s<e.length&&t.push({type:"text",content:e.slice(s)}),t.map((a,l)=>a.type==="code"?n.jsxs("div",{className:"ai-code-block",children:[a.lang&&n.jsx("div",{className:"ai-code-lang",children:a.lang}),n.jsx("pre",{children:n.jsx("code",{children:a.content})})]},l):n.jsx(Ce.Fragment,{children:mv(a.content,`s${l}`)},l))}function ye({context:e="Data Structures"}){const[t,r]=p.useState(""),[s,i]=p.useState(""),[a,l]=p.useState(!1),o=()=>{const h=e.toLowerCase();return h.includes("stack")?"e.g., How does LIFO work?":h.includes("queue")?"e.g., What is FIFO?":h.includes("linked list")?"e.g., How do I insert at the head?":h.includes("hash")?"e.g., What is a collision?":h.includes("binary tree")||h.includes("traversal")?"e.g., What is inorder traversal?":"e.g., How does this work?"},c=async()=>{if(t.trim()){l(!0),i("");try{const h=await fetch("/api/ask-ai",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:t.trim(),code:e})}),g=await h.json();i(h.ok?g.answer||"No answer returned.":"Currently not working, try again later.")}catch{i("Currently not working, try again later.")}finally{l(!1)}}},u=h=>{h.key==="Enter"&&c()},d=s.startsWith("Currently not working");return n.jsxs("div",{className:"ai-assistant",children:[n.jsxs("div",{className:"ai-header",children:[n.jsx(gp,{size:20}),n.jsx("h3",{children:"AI Assistant"})]}),n.jsxs("p",{className:"ai-subtitle",children:["Ask me anything about"," ",e.toLowerCase().includes("problem")?"this problem":e.toLowerCase(),"!"]}),n.jsxs("div",{className:"ai-input-group",children:[n.jsx("input",{type:"text",value:t,onChange:h=>r(h.target.value),onKeyDown:u,placeholder:o(),disabled:a,"aria-label":"Ask a question"}),n.jsx("button",{onClick:c,disabled:a||!t.trim(),children:a?"Asking…":"Ask"})]}),(a||s)&&n.jsxs("div",{id:"ai-response",className:s?"has-content":"",children:[a&&n.jsxs("div",{className:"ai-loading-container",children:[n.jsxs("div",{className:"ai-loading-dots",children:[n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{})]}),n.jsx("div",{className:"ai-loading-text",children:"Analyzing…"})]}),s&&n.jsx("div",{className:d?"ai-error":"ai-answer",children:d?s:gv(s)})]})]})}const xv=`class Stack:
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
print(stack.peek())  # 20`,vv=`class Stack {
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
console.log(stack.pop()); // 20`,yv=`import java.util.EmptyStackException;

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
System.out.println(stack.pop()); // 20`,jv={python:xv,javascript:vv,java:yv,"c++":`#include <iostream>
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
Console.WriteLine(stack.Pop()); // 20`},Nv=`class Queue:
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
print(queue.peek())     # 20`,bv=`class Queue {
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
console.log(queue.dequeue()); // 10`,kv=`import java.util.NoSuchElementException;

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
System.out.println(queue.dequeue()); // 10`,wv={python:Nv,javascript:bv,java:kv,"c++":`#include <iostream>
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
Console.WriteLine(queue.Dequeue()); // 10`},Sv=`class Node:
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
print(ll.search(20))  # 1`,Cv=`class Node {
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
ll.insertAtTail(30);`,Tv=`public class SinglyLinkedList<T> {
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
ll.insertAtTail(30);`,_v={python:Sv,javascript:Cv,java:Tv,"c++":`#include <iostream>
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
ll.InsertAtTail(30);`},Lv=`import random

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
        return False`,Ev=`class SkipListNode {
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
}`,Ov=`import java.util.Random;

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
}`,Rv={python:Lv,javascript:Ev,java:Ov,"c++":`#include <vector>
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
}`},Pv=`class TreeNode:
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
print("Level:     ", tree.levelorder_traversal())  # [50, 30, 70, 20, 40, 60, 80]`,Iv=`class TreeNode {
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
console.log("Level:    ", tree.levelOrderTraversal());  // [50, 30, 70, 20, 40, 60, 80]`,zv=`import java.util.*;

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
System.out.println("Level:     " + tree.levelOrderTraversal());`,Mv={python:Pv,javascript:Iv,java:zv,"c++":`#include <iostream>
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
Console.WriteLine("Level:     " + string.Join(", ", tree.LevelOrderTraversal()));`},Av=`class HashTable:
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
print(ht.get("banana"))  # 3`,Fv=`class HashTable {
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
console.log(ht.get("apple"));  // 5`,Vv=`public class HashTable<K, V> {
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
System.out.println(ht.get("apple")); // 5`,Dv={python:Av,javascript:Fv,java:Vv,"c++":`#include <iostream>
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
Console.WriteLine(ht.Get("apple")); // 5`},$v=`class Node:
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
ht.delete("banana")`,Bv=`class Node {
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
console.log(ht.search("apple"));  // 5`,qv=`public class HashTableChaining<K, V> {
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
System.out.println(ht.search("apple"));  // 5`,Hv={python:$v,javascript:Bv,java:qv,"c++":`#include <iostream>
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
Console.WriteLine(ht.Search("apple"));  // 5`},Uv=`class TreeNode:
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
print("After delete 30:", bst.inorder())  # [20, 40, 50, 60, 70, 80]`,Kv=`class TreeNode {
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
console.log("After delete 30:", bst.inorder());  // [20, 40, 50, 60, 70, 80]`,Wv=`import java.util.*;

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
System.out.println("After delete: " + bst.inorder());  // [20, 40, 50, 60, 70, 80]`,Gv={python:Uv,javascript:Kv,java:Wv,"c++":`#include <iostream>
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
Console.WriteLine("After delete: " + string.Join(", ", bst.Inorder()));`},Qv=`class AVLNode:
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
# Tree automatically balances after each insert!`,Xv=`class AVLNode {
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
[30, 20, 40, 10, 25, 35, 50].forEach(v => avl.insert(v));`,Yv=`class AVLNode {
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
for (int v : new int[]{30, 20, 40, 10, 25}) avl.insert(v);`,Jv={python:Qv,javascript:Xv,java:Yv,"c++":`#include <algorithm>
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

// Usage: var avl = new AVLTree(); foreach(var v in new[]{30,20,40}) avl.Insert(v);`},Zv=`class SplayNode:
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
print("Root:", splay.root.key)  # 20`,ey=`class SplayNode {
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
splay.search(20); // 20 moves to root`,ny=`class SplayNode {
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
st.search(20); // 20 is now root`,ty={python:Zv,javascript:ey,java:ny,"c++":`struct SplayNode {
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

// Usage: var st = new SplayTree(); foreach(var v in new[]{50,30,70}) st.Insert(v);`},ry=`class MinHeap:
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
print("New min:", heap.peek())  # 2`,sy=`class MinHeap {
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
console.log("Extract:", heap.extractMin());  // 1`,iy=`import java.util.*;

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
System.out.println("Min: " + heap.peek());  // 1`,ay={python:ry,javascript:sy,java:iy,"c++":`#include <vector>
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

// Usage: var h = new MinHeap(); foreach(var v in new[]{5,3,8,1}) h.Insert(v);`},ly=`class MaxHeap:
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
print("New max:", heap.peek())  # 8`,oy=`class MaxHeap {
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
console.log("Extract:", heap.extractMax());  // 9`,cy=`import java.util.*;

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
System.out.println("Max: " + heap.peek());  // 9`,dy={python:ly,javascript:oy,java:cy,"c++":`#include <vector>
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

// Usage: var h = new MaxHeap(); foreach(var v in new[]{5,3,8,9}) h.Insert(v);`},uy=`from collections import defaultdict

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
print(g.get_neighbors('A'))  # [('B', 1), ('C', 1)]`,hy=`class Graph {
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
console.log(g.getNeighbors('A'));`,py=`import java.util.*;

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
g.addEdge("A", "C");`,fy={python:uy,javascript:hy,java:py,"c++":`#include <iostream>
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
g.AddEdge("A", "C");`},my=`from collections import deque

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

print(bfs(graph, 'A'))  # ['A', 'B', 'C', 'D', 'E', 'F']`,gy=`function bfs(graph, start) {
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

console.log(bfs(graph, 'A')); // ['A', 'B', 'C', 'D', 'E', 'F']`,xy=`import java.util.*;

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
}`,vy={python:my,javascript:gy,java:xy,"c++":`#include <iostream>
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
}`},yy=`def dfs(graph, start):
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

print(dfs(graph, 'A'))  # ['A', 'B', 'D', 'E', 'F', 'C']`,jy=`function dfs(graph, start) {
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

console.log(dfs(graph, 'A'));`,Ny=`import java.util.*;

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
}`,by={python:yy,javascript:jy,java:Ny,"c++":`#include <iostream>
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
}`},ky=`import random

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
print("After delete 30:", treap.inorder())  # [20, 40, 50, 60, 70, 80]`,wy=`class TreapNode {
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
console.log("After delete 30:", treap.inorder());  // [20, 40, 50, 60, 70, 80]`,Sy=`import java.util.*;

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
System.out.println("After delete: " + treap.inorder());  // [20, 40, 50, 60, 70, 80]`,Cy={python:ky,javascript:wy,java:Sy,"c++":`#include <iostream>
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
Console.WriteLine("After delete: " + string.Join(", ", treap.Inorder()));`},Ea={stack:jv,queue:wv,linkedlist:_v,skiplist:Rv,binarytree:Mv,hashtable:Dv,hashtableChaining:Hv,bst:Gv,avl:Jv,splay:ty,minheap:ay,maxheap:dy,graph:fy,bfs:vy,dfs:by,treap:Cy};function ke({dataStructure:e}){var h;const[t,r]=p.useState("python"),[s,i]=p.useState(!1),a=["python","javascript","java","c++","c#"],l=a.filter(g=>{var b;return(b=Ea[e])==null?void 0:b[g]}),o=l.length>0?l:a,c=((h=Ea[e])==null?void 0:h[t])||"Code not available for this data structure";p.useEffect(()=>{var g;!((g=Ea[e])!=null&&g[t])&&l.length>0&&r(l[0])},[e,t,l]);const u=g=>({python:"Python",javascript:"JavaScript",java:"Java","c++":"C++","c#":"C#"})[g]||g,d=()=>{navigator.clipboard.writeText(c),i(!0),setTimeout(()=>i(!1),2e3)};return n.jsxs("div",{className:"code-section",children:[n.jsxs("h2",{children:[n.jsx(Td,{})," Implementation"]}),n.jsx("div",{className:"code-tabs",children:o.map(g=>n.jsxs("button",{className:`tab-btn ${t===g?"active":""}`,onClick:()=>r(g),children:[n.jsx(Td,{}),u(g)]},g))}),n.jsx("div",{className:"code-panels",children:n.jsx("div",{className:"code-panel active",children:n.jsxs("pre",{children:[n.jsxs("button",{className:"copy-btn",onClick:d,children:[n.jsx(xp,{})," ",s?"Copied!":"Copy"]}),n.jsx("code",{children:c})]})})})]})}function He({message:e}){if(!(e!=null&&e.text))return null;const t=e.type||"info";return n.jsx("div",{className:`message message-${t}`,children:e.text})}async function ue(e){return await(await fetch(e)).json()}async function te(e,t){return await(await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()}async function Mi(e,t=null){const r={method:"DELETE",headers:{"Content-Type":"application/json"}};return t&&(r.body=JSON.stringify(t)),await(await fetch(e,r)).json()}function Ue(e=3e3){const[t,r]=p.useState(null),s=p.useRef(null),i=p.useCallback(()=>{r(null),s.current&&(clearTimeout(s.current),s.current=null)},[]),a=p.useCallback((l,o="info")=>{r({text:l,type:o}),s.current&&clearTimeout(s.current),s.current=setTimeout(()=>{r(null),s.current=null},e)},[e]);return p.useEffect(()=>i,[i]),{message:t,showMessage:a,clearMessage:i}}function Ty(){const[e,t]=p.useState([]),[r,s]=p.useState(0),[i,a]=p.useState("Empty"),[l]=p.useState(10),{message:o,showMessage:c}=Ue(3e3),[u,d]=p.useState("");p.useEffect(()=>{h()},[]);const h=async()=>{try{const f=await ue("/api/stack");t(f.items||[]),s(f.size||0),a(f.top!==null&&f.top!==void 0?f.top:"Empty")}catch(f){console.error("Error loading stack:",f)}},g=async()=>{if(!u||u.trim()===""){c("Please enter a number!","error");return}const f=Number(u);if(isNaN(f)){c("Please enter a valid number!","error");return}try{const m=await te("/api/stack/push",{value:f});if(m.error){c(m.error,"error");return}t(m.items||[]),s(m.size||0),a(m.top!==null&&m.top!==void 0?m.top:"Empty"),c(`Pushed ${f} to stack!`,"success"),d("")}catch(m){console.error("Push error:",m),c("Error pushing to stack. Is Flask running?","error")}},b=async()=>{try{const f=await te("/api/stack/pop",{});if(f.error){c(f.error,"error");return}t(f.items||[]),s(f.size||0),a(f.top!==null&&f.top!==void 0?f.top:"Empty"),c(`Popped ${f.popped} from stack!`,"success")}catch{c("Error popping from stack","error")}},N=async()=>{try{const f=await ue("/api/stack/peek");if(f.error){c(f.error,"error");return}c(`Top element is: ${f.top}`,"info")}catch{c("Error peeking stack","error")}},y=async()=>{try{await te("/api/stack/clear",{}),t([]),s(0),a("Empty"),c("Stack cleared!","success")}catch{c("Error clearing stack","error")}},j=f=>{f.key==="Enter"&&g()};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Me,{className:"icon-sm"}),n.jsx("span",{children:"What is a Stack?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:["A ",n.jsx("strong",{children:"Stack"})," is a linear data structure that follows the ",n.jsx("strong",{children:"LIFO"})," (Last In, First Out) principle."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(ve,{}),n.jsxs("span",{children:["Think of a stack of plates - you can only add or remove from the ",n.jsx("strong",{children:"top"}),"!"]})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Push"}),n.jsx("span",{className:"op-desc",children:"Add to top"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Pop"}),n.jsx("span",{className:"op-desc",children:"Remove from top"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Peek"}),n.jsx("span",{className:"op-desc",children:"View top element"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]})]}),n.jsxs("div",{className:"concept-uses",children:[n.jsx("strong",{children:"Common Uses:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Browser back/forward buttons"}),n.jsx("li",{children:"Undo/Redo functionality"}),n.jsx("li",{children:"Function call stack"}),n.jsx("li",{children:"Expression evaluation"})]})]})]})]}),n.jsx(ye,{context:"Stack data structure"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Stack Operations"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"pushValue",children:"Push (Add to top)"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",id:"pushValue",value:u,onChange:f=>d(f.target.value),onKeyPress:j,placeholder:"Enter a value"}),n.jsx("button",{onClick:g,className:"btn btn-push",children:"Push"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Other Operations"}),n.jsxs("div",{className:"btn-group",children:[n.jsx("button",{onClick:b,className:"btn btn-pop",children:"Pop"}),n.jsx("button",{onClick:N,className:"btn btn-peek",children:"Peek"}),n.jsx("button",{onClick:y,className:"btn btn-clear",children:"Clear"})]})]}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Size:"}),n.jsx("span",{className:"info-value",children:r})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Top:"}),n.jsx("span",{className:"info-value",children:i})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Max Size:"}),n.jsx("span",{className:"info-value",children:l})]})]}),n.jsx(He,{message:o})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Stack Visualization"}),n.jsxs("div",{className:"stack-container",children:[n.jsx("div",{className:"stack-visual",children:e.length===0?n.jsx("div",{className:"stack-empty",children:"Stack is empty. Push some items!"}):e.slice().reverse().map((f,m)=>n.jsx("div",{className:"stack-item",children:f},m))}),n.jsx("div",{className:"stack-base",children:n.jsx("span",{children:"BOTTOM"})})]})]})]}),n.jsx(ke,{dataStructure:"stack"})]})}function _y(){const[e,t]=p.useState([]),[r,s]=p.useState(0),[i,a]=p.useState("Empty"),[l]=p.useState(10),{message:o,showMessage:c}=Ue(3e3),[u,d]=p.useState("");p.useEffect(()=>{h()},[]);const h=async()=>{try{const j=await ue("/api/queue");t(j.items||[]),s(j.size||0),a(j.front!==null&&j.front!==void 0?j.front:"Empty")}catch(j){console.error("Error loading queue:",j)}},g=async()=>{if(!u||u.trim()===""){c("Please enter a number!","error");return}const j=Number(u);if(isNaN(j)){c("Please enter a valid number!","error");return}try{const f=await te("/api/queue/enqueue",{value:j});if(f.error){c(f.error,"error");return}t(f.items||[]),s(f.size||0),a(f.front!==null&&f.front!==void 0?f.front:"Empty"),c(`Enqueued ${j}!`,"success"),d("")}catch(f){console.error("Enqueue error:",f),c("Error enqueueing. Is Flask running?","error")}},b=async()=>{try{const j=await te("/api/queue/dequeue",{});if(j.error){c(j.error,"error");return}t(j.items||[]),s(j.size||0),a(j.front!==null&&j.front!==void 0?j.front:"Empty"),c(`Dequeued ${j.dequeued} from queue!`,"success")}catch{c("Error dequeuing from queue","error")}},N=async()=>{try{const j=await ue("/api/queue/peek");if(j.error){c(j.error,"error");return}c(`Front element is: ${j.front}`,"info")}catch{c("Error peeking queue","error")}},y=async()=>{try{await te("/api/queue/clear",{}),t([]),s(0),a("Empty"),c("Queue cleared!","success")}catch{c("Error clearing queue","error")}};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Me,{className:"icon-sm"}),n.jsx("span",{children:"What is a Queue?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:["A ",n.jsx("strong",{children:"Queue"})," is a linear data structure that follows the ",n.jsx("strong",{children:"FIFO"})," (First In, First Out) principle."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(ve,{}),n.jsxs("span",{children:["Think of a line at a store – the first person in line gets served ",n.jsx("strong",{children:"first"}),"!"]})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Enqueue"}),n.jsx("span",{className:"op-desc",children:"Add to the back"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Dequeue"}),n.jsx("span",{className:"op-desc",children:"Remove from the front"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Peek"}),n.jsx("span",{className:"op-desc",children:"View the front element"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]})]})]})]}),n.jsx(ye,{context:"Queue data structure"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Queue Operations"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"enqueueValue",children:"Enqueue (Add to back)"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",id:"enqueueValue",value:u,onChange:j=>d(j.target.value),onKeyPress:j=>j.key==="Enter"&&g(),placeholder:"Enter a value"}),n.jsx("button",{onClick:g,className:"btn btn-enqueue",children:"Enqueue"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Other Operations"}),n.jsxs("div",{className:"btn-group",children:[n.jsx("button",{onClick:b,className:"btn btn-dequeue",children:"Dequeue"}),n.jsx("button",{onClick:N,className:"btn btn-peek",children:"Peek"}),n.jsx("button",{onClick:y,className:"btn btn-clear",children:"Clear"})]})]}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Size:"}),n.jsx("span",{className:"info-value",children:r})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Front:"}),n.jsx("span",{className:"info-value",children:i})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Max Size:"}),n.jsx("span",{className:"info-value",children:l})]})]}),n.jsx(He,{message:o})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Queue Visualization"}),n.jsxs("div",{className:"queue-container",children:[n.jsx("div",{className:"queue-label",children:n.jsx("span",{className:"front-marker",children:"FRONT →"})}),n.jsx("div",{className:"queue-visual",children:e.length===0?n.jsx("div",{className:"queue-empty",children:"Queue is empty. Enqueue some items!"}):e.map((j,f)=>{const m=f===0,x=f===e.length-1;return n.jsxs("div",{className:`queue-item ${m?"queue-front":""} ${x?"queue-back":""}`,children:[m&&n.jsx("span",{className:"front-label",children:"FRONT"}),j,x&&n.jsx("span",{className:"back-label",children:"BACK"})]},f)})}),n.jsx("div",{className:"queue-label",children:n.jsx("span",{className:"back-marker",children:"← BACK"})})]})]})]}),n.jsx(ke,{dataStructure:"queue"})]})}function Ly(){const[e,t]=p.useState([]),[r,s]=p.useState(0),[i,a]=p.useState("Empty"),{message:l,showMessage:o}=Ue(3e3),[c,u]=p.useState(""),[d,h]=p.useState(""),[g,b]=p.useState(""),[N,y]=p.useState(""),[j,f]=p.useState(""),[m,x]=p.useState("");p.useEffect(()=>{S()},[]);const S=async()=>{try{const _=await ue("/api/linkedlist");t(_.items||[]),s(_.size||0),a(_.head!==null&&_.head!==void 0?_.head:"Empty")}catch(_){console.error("Error loading linked list:",_)}},v=async()=>{if(!c||c.trim()===""){o("Please enter a number!","error");return}const _=Number(c);if(isNaN(_)){o("Please enter a valid number!","error");return}try{const q=await te("/api/linkedlist/insert/head",{value:_});if(q.error){o(q.error,"error");return}t(q.items||[]),s(q.size||0),a(q.head!==null&&q.head!==void 0?q.head:"Empty"),o(`Inserted ${_} at head!`,"success"),u("")}catch(q){console.error("Insert error:",q),o("Error inserting. Is Flask running?","error")}},P=async()=>{if(!d||d.trim()===""){o("Please enter a number!","error");return}const _=Number(d);if(isNaN(_)){o("Please enter a valid number!","error");return}try{const q=await te("/api/linkedlist/insert/tail",{value:_});if(q.error){o(q.error,"error");return}t(q.items||[]),s(q.size||0),a(q.head!==null&&q.head!==void 0?q.head:"Empty"),o(`Inserted ${_} at tail!`,"success"),h("")}catch(q){console.error("Insert error:",q),o("Error inserting. Is Flask running?","error")}},C=async()=>{try{const _=await te("/api/linkedlist/delete/head",{});if(_.error){o(_.error,"error");return}t(_.items||[]),s(_.size||0),a(_.head!==null&&_.head!==void 0?_.head:"Empty"),o("Deleted head!","success")}catch{o("Error deleting head","error")}},V=async()=>{try{const _=await te("/api/linkedlist/delete/tail",{});if(_.error){o(_.error,"error");return}t(_.items||[]),s(_.size||0),a(_.head!==null&&_.head!==void 0?_.head:"Empty"),o("Deleted tail!","success")}catch{o("Error deleting tail","error")}},L=async()=>{try{await te("/api/linkedlist/clear",{}),t([]),s(0),a("Empty"),o("List cleared!","success")}catch{o("Error clearing list","error")}};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Me,{className:"icon-sm"}),n.jsx("span",{children:"What is a Singly Linked List?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:["A ",n.jsx("strong",{children:"Singly Linked List"})," is a linear data structure where each element contains data and a pointer to the next node."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(ve,{}),n.jsxs("span",{children:["Think of a treasure hunt – each clue points to the ",n.jsx("strong",{children:"next location"}),"!"]})]})]})]}),n.jsx(ye,{context:"Singly Linked List data structure"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Linked List Operations"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"insertHeadValue",children:"Insert at Head"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",id:"insertHeadValue",value:c,onChange:_=>u(_.target.value),onKeyPress:_=>_.key==="Enter"&&v(),placeholder:"Enter a value"}),n.jsx("button",{onClick:v,className:"btn btn-insert",children:"Insert Head"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"insertTailValue",children:"Insert at Tail"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",id:"insertTailValue",value:d,onChange:_=>h(_.target.value),onKeyPress:_=>_.key==="Enter"&&P(),placeholder:"Enter a value"}),n.jsx("button",{onClick:P,className:"btn btn-insert",children:"Insert Tail"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Delete Operations"}),n.jsxs("div",{className:"btn-group",children:[n.jsx("button",{onClick:C,className:"btn btn-delete",children:"Delete Head"}),n.jsx("button",{onClick:V,className:"btn btn-delete",children:"Delete Tail"})]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:L,className:"btn btn-clear full-width",children:"Clear All"})}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Size:"}),n.jsx("span",{className:"info-value",children:r})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Head:"}),n.jsx("span",{className:"info-value",children:i})]})]}),n.jsx(He,{message:l})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Linked List Visualization"}),n.jsx("div",{className:"linkedlist-container",children:n.jsx("div",{className:"linkedlist-visual",children:e.length===0?n.jsx("div",{className:"linkedlist-empty",children:"List is empty. Insert some nodes!"}):e.map((_,q)=>n.jsx(Ce.Fragment,{children:n.jsxs("div",{className:"linkedlist-node",children:[n.jsx("div",{className:"node-value",children:_}),q<e.length-1&&n.jsx("div",{className:"node-arrow",children:"→"})]})},q))})})]})]}),n.jsx(ke,{dataStructure:"linkedlist"})]})}function Ey(){const[e,t]=p.useState([]),[r,s]=p.useState([]),[i,a]=p.useState(0),[l,o]=p.useState(0),{message:c,showMessage:u}=Ue(3e3),[d,h]=p.useState(""),[g,b]=p.useState(""),[N,y]=p.useState(""),[j,f]=p.useState([]),[m,x]=p.useState(null),[S,v]=p.useState(null);p.useEffect(()=>{P()},[]);const P=async()=>{try{const A=await ue("/api/skiplist");t(A.levels||[]),s(A.nodes||[]),a(A.maxLevel||0),o(A.size||0)}catch(A){console.error("Error loading skip list:",A)}},C=async()=>{if(!d||d.trim()===""){u("Please enter a number!","error");return}const A=Number(d);if(isNaN(A)||!Number.isInteger(A)){u("Please enter a valid integer!","error");return}try{const k=await te("/api/skiplist/insert",{value:A});if(k.error){u(k.error,"error");return}t(k.levels||[]),s(k.nodes||[]),a(k.maxLevel||0),o(k.size||0),v(A),u(`Inserted ${A} at level ${k.insertedLevel}!`,"success"),h(""),setTimeout(()=>v(null),2e3)}catch(k){console.error("Insert error:",k),u("Error inserting. Is Flask running?","error")}},V=async()=>{if(!g||g.trim()===""){u("Please enter a number!","error");return}const A=Number(g);if(isNaN(A)||!Number.isInteger(A)){u("Please enter a valid integer!","error");return}try{const k=await te("/api/skiplist/delete",{value:A});if(k.error){u(k.error,"error");return}t(k.levels||[]),s(k.nodes||[]),a(k.maxLevel||0),o(k.size||0),u(`Deleted ${A}!`,"success"),b("")}catch(k){console.error("Delete error:",k),u("Error deleting. Is Flask running?","error")}},L=async()=>{if(!N||N.trim()===""){u("Please enter a number!","error");return}const A=Number(N);if(isNaN(A)||!Number.isInteger(A)){u("Please enter a valid integer!","error");return}try{const k=await te("/api/skiplist/search",{value:A});f(k.path||[]),x(k.found),k.found?(v(A),u(`Found ${A}!`,"success")):u(`${A} not found`,"warning"),y(""),setTimeout(()=>{f([]),x(null),v(null)},3e3)}catch(k){console.error("Search error:",k),u("Error searching. Is Flask running?","error")}},_=async()=>{try{await te("/api/skiplist/clear",{}),t([]),s([]),a(0),o(0),f([]),x(null),v(null),u("Skip list cleared!","success")}catch{u("Error clearing skip list","error")}},q=A=>{const k=r.find(R=>R.value===A);return k?k.level:0},W=(A,k)=>{var R;return(R=e[k])==null?void 0:R.includes(A)},O=()=>e.length===0?[]:[...e[0]].sort((A,k)=>A-k);return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Me,{className:"icon-sm"}),n.jsx("span",{children:"What is a Skip List?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:["A ",n.jsx("strong",{children:"Skip List"})," is a probabilistic data structure that allows O(log n) search, insert, and delete operations by maintaining multiple layers of linked lists."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(ve,{}),n.jsx("span",{children:"Think of an express train system - express lines skip stations to get you there faster!"})]})]})]}),n.jsx(ye,{context:"Skip List data structure"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Skip List Operations"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"insertValue",children:"Insert Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",id:"insertValue",value:d,onChange:A=>h(A.target.value),onKeyPress:A=>A.key==="Enter"&&C(),placeholder:"Enter integer"}),n.jsx("button",{onClick:C,className:"btn btn-insert",children:"Insert"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"searchValue",children:"Search Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",id:"searchValue",value:N,onChange:A=>y(A.target.value),onKeyPress:A=>A.key==="Enter"&&L(),placeholder:"Enter integer"}),n.jsx("button",{onClick:L,className:"btn btn-search",children:"Search"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"deleteValue",children:"Delete Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",id:"deleteValue",value:g,onChange:A=>b(A.target.value),onKeyPress:A=>A.key==="Enter"&&V(),placeholder:"Enter integer"}),n.jsx("button",{onClick:V,className:"btn btn-delete",children:"Delete"})]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:_,className:"btn btn-clear full-width",children:"Clear All"})}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Size:"}),n.jsx("span",{className:"info-value",children:l})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Max Level:"}),n.jsx("span",{className:"info-value",children:i})]})]}),n.jsxs("div",{className:"complexity-info",children:[n.jsx("h3",{children:"Time Complexity"}),n.jsxs("div",{className:"complexity-item",children:[n.jsx("span",{children:"Search:"}),n.jsx("span",{className:"complexity-value",children:"O(log n) avg"})]}),n.jsxs("div",{className:"complexity-item",children:[n.jsx("span",{children:"Insert:"}),n.jsx("span",{className:"complexity-value",children:"O(log n) avg"})]}),n.jsxs("div",{className:"complexity-item",children:[n.jsx("span",{children:"Delete:"}),n.jsx("span",{className:"complexity-value",children:"O(log n) avg"})]})]}),n.jsx(He,{message:c})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Skip List Visualization"}),n.jsx("div",{className:"skiplist-container",children:l===0?n.jsx("div",{className:"skiplist-empty",children:"Skip list is empty. Insert some values!"}):n.jsxs("div",{className:"skiplist-visual",children:[[...Array(i+1)].reverse().map((A,k)=>{const R=i-k;return n.jsxs("div",{className:"skiplist-level",children:[n.jsxs("div",{className:"level-label",children:[n.jsx(tc,{size:14}),n.jsxs("span",{children:["L",R]})]}),n.jsxs("div",{className:"level-nodes",children:[n.jsx("div",{className:"skiplist-head",children:"HEAD"}),n.jsx("div",{className:"skiplist-arrow",children:"→"}),O().map(($,T)=>{const E=W($,R),z=S===$;return n.jsx(Ce.Fragment,{children:E?n.jsxs(n.Fragment,{children:[n.jsx("div",{className:`skiplist-node ${z?"highlighted":""}`,children:$}),n.jsx("div",{className:"skiplist-arrow",children:"→"})]}):n.jsx(n.Fragment,{children:n.jsx("div",{className:"skiplist-gap",children:n.jsx("div",{className:"gap-line"})})})},`${R}-${$}`)}),n.jsx("div",{className:"skiplist-null",children:"NULL"})]})]},R)}),n.jsx("div",{className:"vertical-connectors",children:O().map(A=>{const k=q(A);return n.jsx("div",{className:"connector-column",style:{"--node-level":k},children:[...Array(k)].map((R,$)=>n.jsx("div",{className:"vertical-line"},$))},`connector-${A}`)})})]})}),n.jsxs("div",{className:"skiplist-legend",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color head"}),n.jsx("span",{children:"Head Node"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color node"}),n.jsx("span",{children:"Data Node"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color highlighted"}),n.jsx("span",{children:"Highlighted"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color null"}),n.jsx("span",{children:"Null Pointer"})]})]})]})]}),n.jsx(ke,{dataStructure:"skiplist"})]})}function Oy(){const[e,t]=p.useState([]),[r,s]=p.useState(0),[i,a]=p.useState(0),[l,o]=p.useState(0),[c,u]=p.useState(0),{message:d,showMessage:h}=Ue(3e3),[g,b]=p.useState(""),[N,y]=p.useState(""),[j,f]=p.useState(""),[m,x]=p.useState(""),[S,v]=p.useState(null),[P,C]=p.useState([]),[V,L]=p.useState(null),[_,q]=p.useState(null);p.useEffect(()=>{W()},[]);const W=async()=>{try{const E=await ue("/api/hashtable");t(E.table||[]),s(E.size||0),a(E.capacity||0),o(E.load_factor||0),u(E.collision_count||0)}catch(E){console.error("Error loading hashtable:",E)}},O=E=>{if(!i||i===0)return 0;let z=0;for(let F=0;F<E.length;F++)z=(z*31+E.charCodeAt(F))%i;return z},A=(E,z)=>{const F=O(E),B=[F];let M=F;for(;z[M]&&z[M][0]!==E&&(M=(M+1)%i,B.push(M),!(M===F||B.length>i)););return{originalHash:F,path:B,finalSlot:M}},k=async()=>{if(!g.trim()||!N.trim()){h("Please enter both key and value!","error");return}const E=i>0?O(g.trim()):0,z=e.length>0&&e[E]&&e[E][0]!==g.trim();let F=null;z&&(F=A(g.trim(),e));try{const B=await te("/api/hashtable/insert",{key:g.trim(),value:N.trim()});if(B.error){h(B.error,"error");return}await W(),L(g.trim()),z&&F?(q({key:g.trim(),originalSlot:F.originalHash,probedSlots:F.path,finalSlot:F.path[F.path.length-1]}),C(F.path),h(`Collision! "${g}" hashed to ${F.originalHash}, probed ${F.path.length} slot(s)`,"warning"),setTimeout(()=>{C([]),q(null)},4e3)):(h(`Inserted "${g}" → slot ${E}`,"success"),v(E),setTimeout(()=>v(null),2e3)),b(""),y(""),setTimeout(()=>L(null),3e3)}catch{h("Error inserting. Is Flask running?","error")}},R=async()=>{if(!j.trim()){h("Please enter a key!","error");return}try{const E=await te("/api/hashtable/delete",{key:j.trim()});if(E.error){h(E.error,"error");return}await W(),h(`Deleted "${j}"`,"success"),f("")}catch{h("Error deleting. Is Flask running?","error")}},$=async()=>{if(!m.trim()){h("Please enter a key!","error");return}try{const E=await ue(`/api/hashtable/get?key=${encodeURIComponent(m.trim())}`);if(E.error){h(E.error,"error");return}E.found?h(`Found: "${m}" = ${E.value}`,"success"):h(`Key "${m}" not found`,"error"),x("")}catch{h("Error searching item","error")}},T=async()=>{try{await te("/api/hashtable/clear",{}),await W(),C([]),q(null),h("Hashtable cleared!","success")}catch{h("Error clearing hashtable","error")}};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"intro-left",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Me,{className:"icon-sm"}),n.jsx("span",{children:"What is a Hash Table?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:["A ",n.jsx("strong",{children:"Hash Table"})," maps keys to values using a hash function for O(1) lookups."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(ve,{}),n.jsxs("span",{children:["Like a ",n.jsx("strong",{children:"coat check"})," – give them your coat (value), get a ticket number (hash of key)!"]})]})]})]}),n.jsxs("div",{className:"concept-box",style:{marginTop:"1rem"},children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Tn,{className:"icon-sm",style:{color:"#f59e0b"}}),n.jsx("span",{children:"Linear Probing"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:["When two keys hash to the same slot (",n.jsx("strong",{children:"collision"}),"), we check the next slot until we find an empty one."]}),n.jsxs("div",{className:"concept-analogy",style:{marginTop:"0.5rem"},children:[n.jsx(nt,{style:{color:"#3b82f6"}}),n.jsx("span",{children:"Like parking – if spot 3 is taken, try spot 4, then 5..."})]})]})]})]}),n.jsx(ye,{context:"Hash Table with Linear Probing"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Operations"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Insert Key-Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",value:g,onChange:E=>b(E.target.value),placeholder:"Key"}),n.jsx("input",{type:"text",value:N,onChange:E=>y(E.target.value),onKeyPress:E=>E.key==="Enter"&&k(),placeholder:"Value"}),n.jsx("button",{onClick:k,className:"btn btn-insert",children:"Insert"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Delete Key"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",value:j,onChange:E=>f(E.target.value),onKeyPress:E=>E.key==="Enter"&&R(),placeholder:"Key"}),n.jsx("button",{onClick:R,className:"btn btn-delete",children:"Delete"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Search Key"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",value:m,onChange:E=>x(E.target.value),onKeyPress:E=>E.key==="Enter"&&$(),placeholder:"Key"}),n.jsx("button",{onClick:$,className:"btn btn-search",children:"Search"})]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:T,className:"btn btn-clear",children:"Clear Table"})}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Items"}),n.jsxs("span",{className:"info-value",children:[r,"/",i]})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Load"}),n.jsxs("span",{className:"info-value",style:{color:l>=.7?"#f59e0b":"inherit"},children:[(l*100).toFixed(0),"%"]})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Collisions"}),n.jsx("span",{className:"info-value",style:{color:c>0?"#f59e0b":"inherit"},children:c})]})]}),n.jsxs("div",{className:"rehash-info-box",children:[n.jsx(sc,{size:16}),n.jsxs("div",{children:[n.jsx("strong",{children:"Rehashing Threshold: 70%"}),n.jsx("p",{children:"In practice, hash tables rehash (double capacity) when load factor reaches ~0.7 to maintain O(1) performance."}),l>=.7?n.jsxs("span",{className:"rehash-warning",children:["Current load (",(l*100).toFixed(0),"%) exceeds threshold!"]}):n.jsxs("span",{className:"rehash-safe",children:["Currently safe (",(l*100).toFixed(0),"% < 70%)"]})]})]}),n.jsx(He,{message:d})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Hash Table"}),g&&n.jsxs("div",{className:"hash-demo",children:[n.jsxs("div",{className:"hash-demo-item",children:[n.jsx("span",{className:"hash-demo-label",children:"Key:"}),n.jsxs("span",{className:"hash-demo-key",children:['"',g,'"']})]}),n.jsx(xe,{className:"hash-demo-arrow"}),n.jsx("div",{className:"hash-demo-item",children:n.jsx("span",{className:"hash-demo-label",children:"hash()"})}),n.jsx(xe,{className:"hash-demo-arrow"}),n.jsxs("div",{className:"hash-demo-item",children:[n.jsx("span",{className:"hash-demo-label",children:"Slot:"}),n.jsx("span",{className:"hash-demo-index",children:O(g)})]})]}),_&&n.jsxs("div",{className:"collision-banner",children:[n.jsx(Tn,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Collision Detected!"}),n.jsxs("p",{children:['"',_.key,'" hashed to slot ',n.jsx("span",{className:"slot-badge original",children:_.originalSlot}),_.probedSlots.length>1&&n.jsxs(n.Fragment,{children:[" ","- Probed: ",_.probedSlots.map((E,z)=>n.jsxs("span",{children:[n.jsx("span",{className:`slot-badge ${z===_.probedSlots.length-1?"final":"probed"}`,children:E}),z<_.probedSlots.length-1&&" > "]},z))]})]})]})]}),n.jsx("div",{className:"ht-visual",children:!e||e.length===0?n.jsx("div",{className:"ht-empty",children:"Hash table is empty. Insert some key-value pairs!"}):n.jsx("div",{className:"ht-buckets",children:e.map((E,z)=>{const F=P.includes(z),B=_&&_.originalSlot===z,M=_&&_.finalSlot===z;return n.jsxs("div",{className:`ht-row ${E?"filled":"empty"} 
                        ${S===z?"highlighted":""} 
                        ${V&&E&&E[0]===V?"just-inserted":""}
                        ${F?"probed":""}
                        ${B?"original-hash":""}
                        ${M?"final-slot":""}`,children:[F&&n.jsx("div",{className:"probe-indicator",children:B?"X":M?"O":">"}),n.jsx("div",{className:`ht-key-box ${E?"has-key":""}`,children:E&&n.jsx("span",{className:"ht-key",children:E[0]})}),n.jsx("div",{className:"ht-arrow",children:E&&n.jsx(xe,{size:20})}),n.jsx("div",{className:`ht-index ${B?"collision-index":""}`,children:z}),n.jsx("div",{className:`ht-value-box ${E?"has-value":""}`,children:E?n.jsx("span",{className:"ht-value",children:E[1]}):n.jsx("span",{className:"ht-empty-slot",children:"—"})})]},z)})})}),n.jsxs("div",{className:"ht-legend",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color key-color"}),n.jsx("span",{children:"Key"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color index-color"}),n.jsx("span",{children:"Index"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color value-color"}),n.jsx("span",{children:"Value"})]}),P.length>0&&n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color probe-color"}),n.jsx("span",{children:"Probing Path"})]})]})]})]}),n.jsx(ke,{dataStructure:"hashtable"})]})}const Ry={title:"What is Chaining?",description:"Chaining handles collisions by storing multiple key-value pairs in a linked list at each slot.",codeExample:"slot[hash] → [key1, val1] → [key2, val2] → ...",analogy:"Like a coat rack - multiple coats can hang on the same hook!"},Py={title:"Chaining vs Probing",chaining:{label:"Chaining:",color:"#22c55e",points:["Uses linked lists","Load factor can exceed 1.0"]},probing:{label:"Probing:",color:"#f59e0b",points:["Finds next empty slot","Load factor must stay below 1.0"]},summary:"Chaining is simpler and handles high load factors better, but uses extra memory for pointers."},Iy={title:"Chaining Advantage",description:"With chaining, load factor can exceed 1.0 because each slot can hold multiple items in a chain.",highLoadThreshold:1.5,highLoadMessage:"High load ({loadFactor}) - chains getting long!",safeMessage:"Load factor: {loadFactor}"},zy={title:"Rehash Table",description:"Doubles the table capacity and redistributes all items to reduce chain lengths.",buttonText:"Rehash",recommendThreshold:1.5},My=[{type:"color",className:"key-color",label:"Key"},{type:"color",className:"index-color",label:"Index"},{type:"color",className:"value-color",label:"Value"},{type:"icon",icon:"Link",color:"#8b5cf6",label:"Chain (Linked List)"}],Ay={insert:{label:"Insert Key-Value",keyPlaceholder:"Key",valuePlaceholder:"Value",buttonText:"Insert"},delete:{label:"Delete Key",placeholder:"Key",buttonText:"Delete"},search:{label:"Search Key",placeholder:"Key",buttonText:"Search"},clear:{buttonText:"Clear Table"},rehash:{buttonText:"Rehash"}},Fy={items:"Items",capacity:"Capacity",load:"Load",collisions:"Collisions"},Vy={emptyTable:"Hash table is empty. Insert some key-value pairs!",insertSuccess:'Inserted "{key}" at slot {index}',insertUpdated:'Updated "{key}" at slot {index}',insertCollision:'Collision! Added "{key}" to chain at slot {index}',deleteSuccess:'Deleted "{key}"',searchFound:'Found: "{key}" = {value}',searchNotFound:'Key "{key}" not found',clearSuccess:"Hashtable cleared!",rehashSuccess:"Rehashed! Capacity: {oldCapacity} -> {newCapacity}",rehashEmpty:"Nothing to rehash - table is empty!",errorNoKey:"Please enter a key!",errorNoKeyValue:"Please enter both key and value!",errorInsert:"Error inserting. Is Flask running?",errorDelete:"Error deleting. Is Flask running?",errorSearch:"Error searching item",errorClear:"Error clearing hashtable",errorRehash:"Error rehashing. Is Flask running?"},ee={concept:Ry,comparison:Py,chainingAdvantage:Iy,rehash:zy,legend:My,operations:Ay,infoLabels:Fy,messages:Vy};function Dy(){const[e,t]=p.useState([]),[r,s]=p.useState(0),[i,a]=p.useState(0),[l,o]=p.useState(0),[c,u]=p.useState(0),{message:d,showMessage:h}=Ue(3e3),[g,b]=p.useState(""),[N,y]=p.useState(""),[j,f]=p.useState(""),[m,x]=p.useState(""),[S,v]=p.useState(null),[P,C]=p.useState(null),[V,L]=p.useState(!1);p.useEffect(()=>{_()},[]);const _=async()=>{try{const R=await ue("/api/hashtable_chaining");t(R.table||[]),s(R.size||0),a(R.capacity||0),o(R.load_factor||0),u(R.collision_count||0)}catch(R){console.error("Error loading hashtable:",R)}},q=R=>{if(!i||i===0)return 0;let $=0;for(let T=0;T<R.length;T++)$=($*31+R.charCodeAt(T))%i;return $},W=async()=>{if(!g.trim()||!N.trim()){h(ee.messages.errorNoKeyValue,"error");return}try{const R=await te("/api/hashtable_chaining/insert",{key:g.trim(),value:N.trim()});if(R.error){h(R.error,"error");return}await _(),C(g.trim()),R.updated?h(ee.messages.insertUpdated.replace("{key}",g).replace("{index}",R.index),"info"):R.collision?h(ee.messages.insertCollision.replace("{key}",g).replace("{index}",R.index),"warning"):h(ee.messages.insertSuccess.replace("{key}",g).replace("{index}",R.index),"success"),v(R.index),setTimeout(()=>{v(null),C(null)},3e3),b(""),y("")}catch{h(ee.messages.errorInsert,"error")}},O=async()=>{if(!j.trim()){h(ee.messages.errorNoKey,"error");return}try{const R=await te("/api/hashtable_chaining/delete",{key:j.trim()});if(R.error){h(R.error,"error");return}await _(),h(ee.messages.deleteSuccess.replace("{key}",j),"success"),f("")}catch{h(ee.messages.errorDelete,"error")}},A=async()=>{if(!m.trim()){h(ee.messages.errorNoKey,"error");return}try{const R=await ue(`/api/hashtable_chaining/get?key=${encodeURIComponent(m.trim())}`);if(R.error){h(R.error,"error");return}R.found?h(ee.messages.searchFound.replace("{key}",m).replace("{value}",R.value),"success"):h(ee.messages.searchNotFound.replace("{key}",m),"error"),x("")}catch{h(ee.messages.errorSearch,"error")}},k=async()=>{try{await te("/api/hashtable_chaining/clear",{}),await _(),v(null),C(null),h(ee.messages.clearSuccess,"success")}catch{h(ee.messages.errorClear,"error")}};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"intro-left",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Me,{className:"icon-sm"}),n.jsx("span",{children:ee.concept.title})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"Chaining"})," ",ee.concept.description.replace("Chaining ","")]}),n.jsx("div",{style:{background:"var(--bg-tertiary)",padding:"0.75rem",borderRadius:"8px",marginTop:"0.5rem",fontFamily:"monospace",fontSize:"0.9rem"},children:n.jsx("div",{children:ee.concept.codeExample})}),n.jsxs("div",{className:"concept-analogy",style:{marginTop:"0.75rem"},children:[n.jsx(ve,{}),n.jsx("span",{children:ee.concept.analogy})]})]})]}),n.jsxs("div",{className:"concept-box",style:{marginTop:"1rem"},children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(nt,{className:"icon-sm",style:{color:"#3b82f6"}}),n.jsx("span",{children:ee.comparison.title})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",fontSize:"0.85rem"},children:[n.jsxs("div",{children:[n.jsx("strong",{style:{color:ee.comparison.chaining.color},children:ee.comparison.chaining.label}),ee.comparison.chaining.points.map((R,$)=>n.jsx("div",{style:{marginTop:"0.25rem"},children:R},$))]}),n.jsxs("div",{children:[n.jsx("strong",{style:{color:ee.comparison.probing.color},children:ee.comparison.probing.label}),ee.comparison.probing.points.map((R,$)=>n.jsx("div",{style:{marginTop:"0.25rem"},children:R},$))]})]}),n.jsx("p",{style:{marginTop:"0.75rem",fontSize:"0.85rem"},children:ee.comparison.summary})]})]})]}),n.jsx(ye,{context:"Hash Table with Chaining"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Operations"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:ee.operations.insert.label}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",value:g,onChange:R=>b(R.target.value),placeholder:ee.operations.insert.keyPlaceholder}),n.jsx("input",{type:"text",value:N,onChange:R=>y(R.target.value),onKeyDown:R=>R.key==="Enter"&&W(),placeholder:ee.operations.insert.valuePlaceholder}),n.jsx("button",{onClick:W,className:"btn btn-insert",children:ee.operations.insert.buttonText})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:ee.operations.delete.label}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",value:j,onChange:R=>f(R.target.value),onKeyDown:R=>R.key==="Enter"&&O(),placeholder:ee.operations.delete.placeholder}),n.jsx("button",{onClick:O,className:"btn btn-delete",children:ee.operations.delete.buttonText})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:ee.operations.search.label}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",value:m,onChange:R=>x(R.target.value),onKeyDown:R=>R.key==="Enter"&&A(),placeholder:ee.operations.search.placeholder}),n.jsx("button",{onClick:A,className:"btn btn-search",children:ee.operations.search.buttonText})]})]}),n.jsx("div",{className:"operation-group",style:{display:"flex",gap:"0.5rem"},children:n.jsx("button",{onClick:k,className:"btn btn-clear",children:ee.operations.clear.buttonText})}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:ee.infoLabels.items}),n.jsx("span",{className:"info-value",children:r})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:ee.infoLabels.capacity}),n.jsx("span",{className:"info-value",children:i})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:ee.infoLabels.load}),n.jsx("span",{className:"info-value",style:{color:l>=1?"#f59e0b":"inherit"},children:l.toFixed(2)})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:ee.infoLabels.collisions}),n.jsx("span",{className:"info-value",style:{color:c>0?"#f59e0b":"inherit"},children:c})]})]}),n.jsxs("div",{className:"rehash-info-box",children:[n.jsx(Hl,{size:16}),n.jsxs("div",{children:[n.jsx("strong",{children:ee.chainingAdvantage.title}),n.jsx("p",{children:ee.chainingAdvantage.description}),l>=ee.chainingAdvantage.highLoadThreshold?n.jsxs("div",{className:"rehash-recommend",children:[n.jsx(Ts,{size:14}),n.jsx("span",{className:"rehash-warning",children:ee.chainingAdvantage.highLoadMessage.replace("{loadFactor}",l.toFixed(2))})]}):n.jsx("span",{className:"rehash-safe",children:ee.chainingAdvantage.safeMessage.replace("{loadFactor}",l.toFixed(2))})]})]}),n.jsx(He,{message:d})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Hash Table (Chaining)"}),g&&n.jsxs("div",{className:"hash-demo",children:[n.jsxs("div",{className:"hash-demo-item",children:[n.jsx("span",{className:"hash-demo-label",children:"Key:"}),n.jsxs("span",{className:"hash-demo-key",children:['"',g,'"']})]}),n.jsx(xe,{className:"hash-demo-arrow"}),n.jsx("div",{className:"hash-demo-item",children:n.jsx("span",{className:"hash-demo-label",children:"hash()"})}),n.jsx(xe,{className:"hash-demo-arrow"}),n.jsxs("div",{className:"hash-demo-item",children:[n.jsx("span",{className:"hash-demo-label",children:"Slot:"}),n.jsx("span",{className:"hash-demo-index",children:q(g)})]})]}),n.jsx("div",{className:"ht-chaining-visual",children:!e||e.length===0?n.jsx("div",{className:"ht-empty",children:ee.messages.emptyTable}):n.jsx("div",{className:"ht-chaining-buckets",children:e.map((R,$)=>{const T=S===$,E=R&&Array.isArray(R)&&R.length>0,z=E?R.length:0;return n.jsxs("div",{className:`ht-chaining-row ${E?"filled":"empty"} ${T?"highlighted":""}`,children:[n.jsxs("div",{className:"ht-chaining-index",children:[n.jsx("span",{className:"index-number",children:$}),z>1&&n.jsx("span",{className:"chain-count",children:z})]}),n.jsx("div",{className:"ht-chaining-arrow-container",children:n.jsx(xe,{size:18,className:"bucket-arrow"})}),n.jsx("div",{className:"ht-chaining-content",children:E?n.jsx("div",{className:"ht-chaining-chain",children:R.map((F,B)=>{const M=P&&F.key===P;return n.jsxs(Ce.Fragment,{children:[n.jsxs("div",{className:`ht-chaining-node ${M?"just-inserted":""} ${B>0?"collision-node":""}`,children:[n.jsx("div",{className:"node-key",children:F.key}),n.jsx("div",{className:"node-separator"}),n.jsx("div",{className:"node-value",children:F.value})]}),B<R.length-1&&n.jsx("div",{className:"chain-link",children:n.jsx(xe,{size:16})})]},B)})}):n.jsx("div",{className:"ht-chaining-empty-slot",children:n.jsx("span",{children:"Empty"})})})]},$)})})}),n.jsx("div",{className:"ht-legend",children:ee.legend.map((R,$)=>n.jsxs("div",{className:"legend-item",children:[R.type==="color"?n.jsx("div",{className:`legend-color ${R.className}`}):n.jsx(Hl,{size:14,style:{color:R.color}}),n.jsx("span",{children:R.label})]},$))})]})]}),n.jsx(ke,{dataStructure:"hashtableChaining"})]})}function $y(){const[e,t]=p.useState([]),[r,s]=p.useState(0),[i,a]=p.useState(0),[l,o]=p.useState(0),{message:c,showMessage:u}=Ue(3e3),[d,h]=p.useState(""),[g,b]=p.useState(""),[N,y]=p.useState(""),[j,f]=p.useState(""),[m,x]=p.useState(null),[S,v]=p.useState([]),[P,C]=p.useState(null),[V,L]=p.useState(null);p.useEffect(()=>{_()},[]);const _=async()=>{try{const $=await ue("/api/hashtable_quadratic");t($.table||[]),s($.size||0),a($.capacity||0),o($.load_factor||0)}catch($){console.error("Error loading hashtable:",$)}},q=$=>{if(!i||i===0)return 0;let T=0;for(let E=0;E<$.length;E++)T=(T*31+$.charCodeAt(E))%i;return T},W=($,T)=>{var F;const E=q($),z=[];for(let B=0;B<i;B++){const M=(E+B*B)%i;if(z.push({index:M,i:B,formula:`(${E} + ${B}²) % ${i} = ${M}`}),!T[M]||T[M][0]===$)break}return{originalHash:E,path:z,finalSlot:(F=z[z.length-1])==null?void 0:F.index}},O=async()=>{if(!d.trim()||!g.trim()){u("Please enter both key and value!","error");return}const $=i>0?q(d.trim()):0,T=e.length>0&&e[$]&&e[$]!=="DELETED"&&e[$][0]!==d.trim();let E=null;T&&(E=W(d.trim(),e));try{const z=await te("/api/hashtable_quadratic/insert",{key:d.trim(),value:g.trim()});if(z.error){u(z.error,"error");return}await _(),C(d.trim()),T&&E?(L({key:d.trim(),originalSlot:E.originalHash,probedSlots:E.path,finalSlot:z.final_index}),v(E.path.map(F=>F.index)),u(`Collision! Quadratic probing: ${E.path.length} probe(s)`,"warning"),setTimeout(()=>{v([]),L(null)},5e3)):(u(`Inserted "${d}" → slot ${$}`,"success"),x($),setTimeout(()=>x(null),2e3)),h(""),b(""),setTimeout(()=>C(null),3e3)}catch{u("Error inserting. Is Flask running?","error")}},A=async()=>{if(!N.trim()){u("Please enter a key!","error");return}try{const $=await te("/api/hashtable_quadratic/delete",{key:N.trim()});if($.error){u($.error,"error");return}await _(),u(`Deleted "${N}"`,"success"),y("")}catch{u("Error deleting. Is Flask running?","error")}},k=async()=>{if(!j.trim()){u("Please enter a key!","error");return}try{const $=await ue(`/api/hashtable_quadratic/get?key=${encodeURIComponent(j.trim())}`);if($.error){u($.error,"error");return}$.found?u(`Found: "${j}" = ${$.value}`,"success"):u(`Key "${j}" not found`,"error"),f("")}catch{u("Error searching item","error")}},R=async()=>{try{await te("/api/hashtable_quadratic/clear",{}),await _(),v([]),L(null),u("Hashtable cleared!","success")}catch{u("Error clearing hashtable","error")}};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"intro-left",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Me,{className:"icon-sm"}),n.jsx("span",{children:"What is Quadratic Probing?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"Quadratic Probing"})," is a collision resolution technique where we probe at quadratically increasing intervals."]}),n.jsxs("div",{style:{background:"var(--bg-tertiary)",padding:"0.75rem",borderRadius:"8px",marginTop:"0.5rem",fontFamily:"monospace",fontSize:"0.9rem"},children:[n.jsx("div",{children:"probe(i) = (hash + i²) % capacity"}),n.jsx("div",{style:{color:"var(--text-muted)",marginTop:"0.25rem"},children:"i = 0, 1, 4, 9, 16, 25..."})]}),n.jsxs("div",{className:"concept-analogy",style:{marginTop:"0.75rem"},children:[n.jsx(ve,{}),n.jsxs("span",{children:["Unlike linear probing, we jump further each time – reducing ",n.jsx("strong",{children:"clustering"}),"!"]})]})]})]}),n.jsxs("div",{className:"concept-box",style:{marginTop:"1rem"},children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(nt,{className:"icon-sm",style:{color:"#3b82f6"}}),n.jsx("span",{children:"Linear vs Quadratic"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",fontSize:"0.85rem"},children:[n.jsxs("div",{children:[n.jsx("strong",{style:{color:"#f59e0b"},children:"Linear:"}),n.jsx("div",{style:{fontFamily:"monospace",marginTop:"0.25rem"},children:"+1, +2, +3, +4..."})]}),n.jsxs("div",{children:[n.jsx("strong",{style:{color:"#22c55e"},children:"Quadratic:"}),n.jsx("div",{style:{fontFamily:"monospace",marginTop:"0.25rem"},children:"+1, +4, +9, +16..."})]})]}),n.jsx("p",{style:{marginTop:"0.75rem",fontSize:"0.85rem"},children:"Quadratic probing spreads entries more evenly but may not find empty slots if table is over 50% full."})]})]})]}),n.jsx(ye,{context:"Hash Table with Quadratic Probing"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Operations"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Insert Key-Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",value:d,onChange:$=>h($.target.value),placeholder:"Key"}),n.jsx("input",{type:"text",value:g,onChange:$=>b($.target.value),onKeyPress:$=>$.key==="Enter"&&O(),placeholder:"Value"}),n.jsx("button",{onClick:O,className:"btn btn-insert",children:"Insert"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Delete Key"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",value:N,onChange:$=>y($.target.value),onKeyPress:$=>$.key==="Enter"&&A(),placeholder:"Key"}),n.jsx("button",{onClick:A,className:"btn btn-delete",children:"Delete"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Search Key"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",value:j,onChange:$=>f($.target.value),onKeyPress:$=>$.key==="Enter"&&k(),placeholder:"Key"}),n.jsx("button",{onClick:k,className:"btn btn-search",children:"Search"})]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:R,className:"btn btn-clear",children:"Clear Table"})}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Items"}),n.jsxs("span",{className:"info-value",children:[r,"/",i]})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Load"}),n.jsxs("span",{className:"info-value",style:{color:l>=.5?"#f59e0b":"inherit"},children:[(l*100).toFixed(0),"%"]})]})]}),n.jsxs("div",{className:"rehash-info-box",children:[n.jsx(sc,{size:16}),n.jsxs("div",{children:[n.jsx("strong",{children:"Rehashing Threshold: 50%"}),n.jsx("p",{children:"Quadratic probing requires lower load factor (~0.5) to guarantee finding empty slots."}),l>=.5?n.jsxs("span",{className:"rehash-warning",children:["Load (",(l*100).toFixed(0),"%) at threshold!"]}):n.jsxs("span",{className:"rehash-safe",children:["Currently safe (",(l*100).toFixed(0),"% < 50%)"]})]})]}),n.jsx(He,{message:c})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Hash Table (Quadratic Probing)"}),d&&n.jsxs("div",{className:"hash-demo",children:[n.jsxs("div",{className:"hash-demo-item",children:[n.jsx("span",{className:"hash-demo-label",children:"Key:"}),n.jsxs("span",{className:"hash-demo-key",children:['"',d,'"']})]}),n.jsx(xe,{className:"hash-demo-arrow"}),n.jsx("div",{className:"hash-demo-item",children:n.jsx("span",{className:"hash-demo-label",children:"hash()"})}),n.jsx(xe,{className:"hash-demo-arrow"}),n.jsxs("div",{className:"hash-demo-item",children:[n.jsx("span",{className:"hash-demo-label",children:"Slot:"}),n.jsx("span",{className:"hash-demo-index",children:q(d)})]})]}),V&&n.jsxs("div",{className:"collision-banner",children:[n.jsx(Tn,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Quadratic Probing!"}),n.jsxs("p",{children:['"',V.key,'" hashed to slot ',n.jsx("span",{className:"slot-badge original",children:V.originalSlot})]}),n.jsx("div",{style:{marginTop:"0.5rem",fontSize:"0.8rem",fontFamily:"monospace"},children:V.probedSlots.map(($,T)=>n.jsxs("div",{style:{marginBottom:"0.25rem"},children:["i=",$.i,": ",$.formula,T===V.probedSlots.length-1&&n.jsx("span",{style:{color:"#4ade80"},children:" [FOUND]"})]},T))})]})]}),n.jsx("div",{className:"ht-visual",children:!e||e.length===0?n.jsx("div",{className:"ht-empty",children:"Hash table is empty. Insert some key-value pairs!"}):n.jsx("div",{className:"ht-buckets",children:e.map(($,T)=>{const E=S.includes(T),z=V&&V.originalSlot===T,F=V&&V.finalSlot===T,B=$==="DELETED",M=$&&$!=="DELETED";return n.jsxs("div",{className:`ht-row ${M?"filled":"empty"} 
                        ${B?"deleted":""}
                        ${m===T?"highlighted":""} 
                        ${P&&M&&$[0]===P?"just-inserted":""}
                        ${E?"probed":""}
                        ${z?"original-hash":""}
                        ${F?"final-slot":""}`,children:[E&&n.jsx("div",{className:"probe-indicator",children:z?"X":F?"O":">"}),n.jsxs("div",{className:`ht-key-box ${M?"has-key":""} ${B?"deleted-slot":""}`,children:[M&&n.jsx("span",{className:"ht-key",children:$[0]}),B&&n.jsx("span",{className:"ht-deleted-text",children:"DEL"})]}),n.jsx("div",{className:"ht-arrow",children:M&&n.jsx(xe,{size:20})}),n.jsx("div",{className:`ht-index ${z?"collision-index":""}`,children:T}),n.jsx("div",{className:`ht-value-box ${M?"has-value":""} ${B?"deleted-slot":""}`,children:M?n.jsx("span",{className:"ht-value",children:$[1]}):B?n.jsx("span",{className:"ht-deleted-text",children:"DELETED"}):n.jsx("span",{className:"ht-empty-slot",children:"—"})})]},T)})})}),n.jsxs("div",{className:"ht-legend",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color key-color"}),n.jsx("span",{children:"Key"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color index-color"}),n.jsx("span",{children:"Index"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color value-color"}),n.jsx("span",{children:"Value"})]}),S.length>0&&n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color probe-color"}),n.jsx("span",{children:"Probe Path"})]})]})]})]}),n.jsx(ke,{dataStructure:"hashtable"})]})}const nr=7,By={inorder:{name:"Inorder Traversal",order:"Left → Root → Right",description:"Visit left subtree, process root, then visit right subtree. For BST, this produces sorted order.",useCase:["Get sorted elements","Validate BST","Create mirror image"],complexity:{time:"O(n)",space:"O(h)"}},preorder:{name:"Preorder Traversal",order:"Root → Left → Right",description:"Process root first, then recursively visit left and right subtrees. Useful for copying trees.",useCase:["Copy tree structure","Serialize/deserialize","Prefix expressions"],complexity:{time:"O(n)",space:"O(h)"}},postorder:{name:"Postorder Traversal",order:"Left → Right → Root",description:"Visit left subtree, right subtree, then process root. Essential for deleting nodes safely.",useCase:["Delete nodes safely","Calculate folder sizes","Postfix expressions"],complexity:{time:"O(n)",space:"O(h)"}},levelorder:{name:"Level Order Traversal",order:"Level by Level (BFS)",description:"Visit nodes level by level using a queue. Perfect for finding shortest paths.",useCase:["Shortest path","Level-wise printing","Nodes at distance K"],complexity:{time:"O(n)",space:"O(w)"}}},Wl=(e,t=[])=>(e&&(Wl(e.left,t),t.push(e.data),Wl(e.right,t)),t),Gl=(e,t=[])=>(e&&(t.push(e.data),Gl(e.left,t),Gl(e.right,t)),t),Ql=(e,t=[])=>(e&&(Ql(e.left,t),Ql(e.right,t),t.push(e.data)),t),qy=e=>{if(!e)return[];const t=[],r=[e];for(;r.length;){const s=r.shift();t.push(s.data),s.left&&r.push(s.left),s.right&&r.push(s.right)}return t},Xl=(e,t=0)=>e?Math.max(Xl(e.left,t+1),Xl(e.right,t+1)):t-1;function Hy(){return n.jsxs("div",{className:"intro-left",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Me,{className:"icon-sm"}),n.jsx("span",{children:"What is a Binary Tree?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:["A ",n.jsx("strong",{children:"Binary Tree"})," is a hierarchical data structure where each node has at most ",n.jsx("strong",{children:"two children"}),": left and right."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(ve,{}),n.jsxs("span",{children:["Think of a ",n.jsx("strong",{children:"family tree"})," – each person can have up to two children!"]})]}),n.jsxs("div",{className:"concept-key-terms",children:[n.jsx("h4",{children:"Key Terms:"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Node:"})," Contains data and links to children"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Root:"})," The topmost node (no parent)"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Leaf:"})," A node with no children"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Height:"})," Longest path from root to leaf"]})]})]})]})]}),n.jsxs("div",{className:"concept-box",style:{marginTop:"1rem"},children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(nt,{className:"icon-sm"}),n.jsx("span",{children:"What are Tree Traversals?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"Tree Traversal"})," is visiting each node ",n.jsx("strong",{children:"exactly once"})," in a specific order."]}),n.jsxs("div",{className:"concept-why-traverse",children:[n.jsx("h4",{children:"Why Traverse?"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Search:"})," Find specific data"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Copy:"})," Duplicate the tree"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Evaluate:"})," Calculate expressions"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Delete:"})," Remove nodes properly"]})]})]}),n.jsxs("div",{className:"concept-analogy",style:{marginTop:"0.75rem"},children:[n.jsx(ve,{}),n.jsx("span",{children:"Like reading a book – you can read in different orders based on your needs!"})]})]})]})]})}function Uy({insertValue:e,deleteValue:t,size:r,height:s,message:i,tree:a,isAnimating:l,visitedNodes:o,onInsertValueChange:c,onDeleteValueChange:u,onInsert:d,onDelete:h,onTraversal:g,onClear:b,onResetTraversal:N}){const y=(j,f)=>{const m=j.target.value;(m===""||m==="-"||/^-?\d*\.?\d*$/.test(m))&&f(m)};return n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Binary Tree Traversals"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"insertValue",children:"Insert Node"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"insertValue",value:e,onChange:j=>y(j,c),onKeyPress:j=>j.key==="Enter"&&d(),placeholder:"Enter a number"}),n.jsx("button",{onClick:d,className:"btn btn-insert",children:"Insert"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"deleteValue",children:"Delete Node"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"deleteValue",value:t,onChange:j=>y(j,u),onKeyPress:j=>j.key==="Enter"&&h(),placeholder:"Enter a number"}),n.jsx("button",{onClick:h,className:"btn btn-delete",children:"Delete"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Traversals"}),n.jsx("div",{className:"btn-group",children:["inorder","preorder","postorder","levelorder"].map(j=>n.jsx("button",{onClick:()=>g(j),className:"btn btn-traversal",disabled:l||!a,children:j==="levelorder"?"Level Order":j.charAt(0).toUpperCase()+j.slice(1)},j))}),o.length>0&&!l&&n.jsx("button",{onClick:N,className:"btn btn-secondary",style:{marginTop:"0.5rem",width:"100%"},children:"Reset Colors"})]}),n.jsxs("div",{className:"traversal-legend",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--default"}),n.jsx("span",{children:"Not visited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--visiting"}),n.jsx("span",{children:"Visiting"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--visited"}),n.jsx("span",{children:"Visited"})]})]}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Size:"}),n.jsx("span",{className:"info-value",children:r})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Height:"}),n.jsx("span",{className:"info-value",children:s})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Max Size:"}),n.jsx("span",{className:"info-value",children:nr})]})]}),r>=nr*.8&&r<nr&&n.jsxs("div",{className:"warning-box",children:[n.jsx(Tn,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Tree is filling up!"})," You're at ",r,"/",nr," nodes."]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:b,className:"btn btn-clear",children:"Clear Tree"})}),i&&n.jsx("div",{className:`message message-${i.includes("Error")||i.includes("error")?"error":/success|complete|Inserted|Deleted|cleared/i.test(i)?"success":i.includes("full")?"warning":"info"}`,children:i})]})}function Ky({tree:e,currentNode:t,visitedNodes:r}){const s=c=>{const u=t===c,d=r.includes(c);return{color:u?"#f59e0b":d?"#10b981":"#6366f1",glow:u?"drop-shadow(0 0 12px #f59e0b) drop-shadow(0 0 20px #f59e0b)":d?"drop-shadow(0 0 6px #10b981)":"none",radius:u?30:25,stroke:u?3:2,fontSize:u?16:14,fontWeight:u?"bold":"normal"}},i=(c,u,d,h,g)=>{if(!c)return[];const b=Math.pow(2,g-h)*50,N=s(c.data),y=[];return c.left&&(y.push(n.jsx("line",{x1:u,y1:d,x2:u-b,y2:d+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:"2"},`l-${c.data}-l`)),y.push(...i(c.left,u-b,d+100,h+1,g))),c.right&&(y.push(n.jsx("line",{x1:u,y1:d,x2:u+b,y2:d+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:"2"},`l-${c.data}-r`)),y.push(...i(c.right,u+b,d+100,h+1,g))),y.push(n.jsxs("g",{style:{filter:N.glow,transition:"all 0.3s ease"},children:[n.jsx("circle",{cx:u,cy:d,r:N.radius,fill:N.color,stroke:"white",strokeWidth:N.stroke,style:{transition:"all 0.3s ease"}}),n.jsx("text",{x:u,y:d,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:N.fontSize,fontWeight:N.fontWeight,children:c.data})]},`n-${c.data}-${u}`)),y};if(!e)return n.jsx("div",{className:"tree-empty",children:"Tree is empty. Insert some nodes!"});const a=Xl(e),l=(a+1)*100+50,o=Math.max(800,Math.pow(2,Math.max(a,1))*80);return n.jsx("svg",{width:o,height:l,className:"tree-svg",children:i(e,o/2,50,0,a)})}function Wy({traversalType:e,traversalResult:t,isAnimating:r,traversalComplete:s}){if(!e||t.length===0&&!r)return null;const i=By[e];return n.jsxs("div",{className:"traversal-output-panel",children:[n.jsxs("div",{style:{marginBottom:"1rem"},children:[n.jsxs("h3",{className:"traversal-title",children:[i==null?void 0:i.name,r&&n.jsx("span",{className:"traversal-badge traversal-badge--running",children:"Running..."}),s&&n.jsx("span",{className:"traversal-badge traversal-badge--complete",children:"Complete"})]}),n.jsxs("p",{className:"traversal-order",children:[n.jsx("strong",{children:"Order:"})," ",i==null?void 0:i.order]}),n.jsx("p",{className:"traversal-description",children:i==null?void 0:i.description})]}),n.jsxs("div",{className:"traversal-output-box",children:[n.jsx("div",{className:"traversal-output-label",children:"Output Sequence:"}),n.jsx("div",{className:"traversal-sequence-container",children:t.length===0&&r?n.jsx("span",{style:{color:"var(--text-muted)",fontStyle:"italic"},children:"Traversing..."}):t.map((a,l)=>n.jsx("span",{className:`traversal-node ${l===t.length-1&&!s?"traversal-node--current":"traversal-node--complete"}`,children:a},l))})]}),s&&t.length>0&&n.jsxs("div",{className:"traversal-array-section",children:[n.jsx("div",{className:"traversal-array-label",children:"Array Output:"}),n.jsxs("code",{className:"traversal-array-output",children:["[",t.join(", "),"]"]}),n.jsxs("p",{className:"traversal-use-case",children:["Use case: ",i==null?void 0:i.useCase.join(" • ")]}),n.jsxs("div",{className:"traversal-complexity",children:[n.jsx("strong",{children:"Time:"})," ",n.jsx("code",{className:"complexity-value",children:i==null?void 0:i.complexity.time})," (visits each node once)",n.jsx("br",{}),n.jsx("strong",{children:"Space:"})," ",n.jsx("code",{className:"complexity-value",children:i==null?void 0:i.complexity.space})," (recursion stack/queue)"]})]})]})}function Gy(){const[e,t]=p.useState(null),[r,s]=p.useState(0),[i,a]=p.useState(-1),[l,o]=p.useState(""),[c,u]=p.useState(""),[d,h]=p.useState(""),[g,b]=p.useState([]),[N,y]=p.useState(!1),[j,f]=p.useState(null),[m,x]=p.useState([]),[S,v]=p.useState(null),[P,C]=p.useState(!1);p.useEffect(()=>{V()},[]);const V=async()=>{try{const R=await(await fetch("/api/binarytree")).json();t(R.tree),s(R.size||0),a(R.height!==void 0?R.height:-1)}catch(k){console.error("Error loading tree:",k)}},L=k=>{h(k),setTimeout(()=>h(""),3e3)},_=async()=>{if(!l.trim()){L("Please enter a number!");return}const k=Number(l);if(isNaN(k)){L("Please enter a valid number!");return}if(r>=nr){L(`Tree is full! Maximum size is ${nr} nodes.`);return}try{const $=await(await fetch("/api/binarytree/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:k})})).json();if($.error){L($.error);return}t($.tree),s($.size||0),a($.height!==void 0?$.height:-1),L(`Inserted ${k}`),o("")}catch{L("Error inserting node")}},q=async()=>{if(!c.trim()){L("Please enter a number!");return}const k=Number(c);if(isNaN(k)){L("Please enter a valid number!");return}try{const $=await(await fetch("/api/binarytree/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:k})})).json();if($.error){L($.error);return}t($.tree),s($.size||0),a($.height!==void 0?$.height:-1),L(`Deleted ${k}`),u("")}catch{L("Error deleting node")}},W=async()=>{try{await fetch("/api/binarytree/clear",{method:"POST"}),t(null),s(0),a(-1),A(),L("Tree cleared!")}catch{L("Error clearing tree")}},O=async k=>{if(!e){L("Tree is empty! Insert some nodes first.");return}y(!0),b([]),f(null),x([]),v(k),C(!1);let R=[];switch(k){case"inorder":R=Wl(e);break;case"preorder":R=Gl(e);break;case"postorder":R=Ql(e);break;case"levelorder":R=qy(e);break;default:R=[]}if(R.length===0){L("Tree is empty!"),y(!1);return}for(let $=0;$<R.length;$++)f(R[$]),await new Promise(T=>setTimeout(T,600)),x(T=>[...T,R[$]]),b(T=>[...T,R[$]]),await new Promise(T=>setTimeout(T,200));f(null),C(!0),y(!1),L(`${k.charAt(0).toUpperCase()+k.slice(1)} traversal complete!`)},A=()=>{b([]),f(null),x([]),v(null),C(!1)};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsx(Hy,{}),n.jsx(ye,{context:"Binary Tree data structure and traversals"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsx(Uy,{insertValue:l,deleteValue:c,size:r,height:i,message:d,tree:e,isAnimating:N,visitedNodes:m,onInsertValueChange:o,onDeleteValueChange:u,onInsert:_,onDelete:q,onTraversal:O,onClear:W,onResetTraversal:A}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Binary Tree Visualization"}),n.jsx("div",{className:"tree-container",children:n.jsx(Ky,{tree:e,currentNode:j,visitedNodes:m})}),n.jsx(Wy,{traversalType:S,traversalResult:g,isAnimating:N,traversalComplete:P})]})]}),n.jsx(ke,{dataStructure:"binarytree"})]})}const Qy={title:"What is a Stack?",description:"A Stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle.",codeExample:"push(A) → push(B) → push(C) → pop() returns C",analogy:"Like a stack of plates - you can only take the top plate off first!"},Xy={title:"Stack Properties",items:[{label:"Order",value:"LIFO (Last-In-First-Out)"},{label:"Access",value:"Top element only"},{label:"Insert",value:"Push to top - O(1)"},{label:"Remove",value:"Pop from top - O(1)"}]},Yy={title:"Common Use Cases",items:["Function call stack (recursion)","Undo/Redo operations","Browser back button","Expression evaluation","Syntax parsing"]},Jy={title:"Time Complexity",operations:[{name:"Push",time:"O(1)",description:"Add to top"},{name:"Pop",time:"O(1)",description:"Remove from top"},{name:"Peek",time:"O(1)",description:"View top element"},{name:"isEmpty",time:"O(1)",description:"Check if empty"},{name:"Search",time:"O(n)",description:"Find element"}]},Zy={push:{label:"Push Value",placeholder:"Value",buttonText:"Push"},pop:{buttonText:"Pop"},peek:{buttonText:"Peek"},clear:{buttonText:"Clear"}},e1={size:"Size",top:"Top",capacity:"Capacity"},n1={emptyStack:"Stack is empty. Push some values!",pushSuccess:'Pushed "{value}" to stack',popSuccess:'Popped "{value}" from stack',popEmpty:"Cannot pop - stack is empty!",peekSuccess:'Top element: "{value}"',peekEmpty:"Cannot peek - stack is empty!",clearSuccess:"Stack cleared!",errorNoValue:"Please enter a value!",errorPush:"Error pushing to stack",errorPop:"Error popping from stack",errorClear:"Error clearing stack",stackFull:"Stack is full!"},t1=[{type:"color",className:"top-color",label:"Top Element"},{type:"color",className:"element-color",label:"Stack Element"}],r1={concept:Qy,properties:Xy,useCases:Yy,complexity:Jy,operations:Zy,infoLabels:e1,messages:n1,legend:t1},s1={title:"What is a Queue?",description:"A Queue is a linear data structure that follows the First-In-First-Out (FIFO) principle.",codeExample:"enqueue(A) → enqueue(B) → enqueue(C) → dequeue() returns A",analogy:"Like a line at a store - first person in line gets served first!"},i1={title:"Queue Properties",items:[{label:"Order",value:"FIFO (First-In-First-Out)"},{label:"Access",value:"Front and Rear"},{label:"Insert",value:"Enqueue at rear - O(1)"},{label:"Remove",value:"Dequeue from front - O(1)"}]},a1={title:"Queue vs Stack",queue:{label:"Queue:",color:"#22c55e",points:["FIFO order","Two access points (front/rear)"]},stack:{label:"Stack:",color:"#3b82f6",points:["LIFO order","One access point (top)"]},summary:"Use Queue when order of processing matters (like task scheduling)."},l1={title:"Common Use Cases",items:["Task scheduling (CPU, print jobs)","Breadth-First Search (BFS)","Message queues","Request handling in servers","Buffering (streaming)"]},o1={title:"Time Complexity",operations:[{name:"Enqueue",time:"O(1)",description:"Add to rear"},{name:"Dequeue",time:"O(1)",description:"Remove from front"},{name:"Front",time:"O(1)",description:"View front element"},{name:"isEmpty",time:"O(1)",description:"Check if empty"},{name:"Search",time:"O(n)",description:"Find element"}]},c1={enqueue:{label:"Enqueue Value",placeholder:"Value",buttonText:"Enqueue"},dequeue:{buttonText:"Dequeue"},front:{buttonText:"Front"},clear:{buttonText:"Clear"}},d1={size:"Size",front:"Front",rear:"Rear",capacity:"Capacity"},u1={emptyQueue:"Queue is empty. Enqueue some values!",enqueueSuccess:'Enqueued "{value}"',dequeueSuccess:'Dequeued "{value}"',dequeueEmpty:"Cannot dequeue - queue is empty!",frontSuccess:'Front element: "{value}"',frontEmpty:"Cannot get front - queue is empty!",clearSuccess:"Queue cleared!",errorNoValue:"Please enter a value!",errorEnqueue:"Error enqueueing to queue",errorDequeue:"Error dequeueing from queue",errorClear:"Error clearing queue",queueFull:"Queue is full!"},h1=[{type:"color",className:"front-color",label:"Front"},{type:"color",className:"rear-color",label:"Rear"},{type:"color",className:"element-color",label:"Queue Element"}],p1={concept:s1,properties:i1,comparison:a1,useCases:l1,complexity:o1,operations:c1,infoLabels:d1,messages:u1,legend:h1},f1={title:"What is a Linked List?",description:"A Linked List is a linear data structure where elements are stored in nodes, each pointing to the next node.",codeExample:"HEAD → [A|→] → [B|→] → [C|→] → NULL",analogy:"Like a treasure hunt - each clue (node) points to the next location!"},m1={title:"Linked List Properties",items:[{label:"Structure",value:"Nodes with data + pointer"},{label:"Memory",value:"Non-contiguous allocation"},{label:"Size",value:"Dynamic (grows/shrinks)"},{label:"Access",value:"Sequential (no random access)"}]},g1={title:"Linked List vs Array",linkedlist:{label:"Linked List:",color:"#22c55e",points:["Dynamic size","O(1) insert/delete at known position","Extra memory for pointers"]},array:{label:"Array:",color:"#3b82f6",points:["Fixed size (usually)","O(1) random access by index","Contiguous memory"]},summary:"Use Linked List when you need frequent insertions/deletions and don't need random access."},x1={title:"Types of Linked Lists",items:[{name:"Singly Linked",description:"Each node points to next only"},{name:"Doubly Linked",description:"Nodes point to both next and previous"},{name:"Circular",description:"Last node points back to first"}]},v1={title:"Time Complexity",operations:[{name:"Access",time:"O(n)",description:"Traverse to find"},{name:"Search",time:"O(n)",description:"Linear search"},{name:"Insert (head)",time:"O(1)",description:"Add at beginning"},{name:"Insert (tail)",time:"O(n)",description:"Traverse then add"},{name:"Delete (head)",time:"O(1)",description:"Remove first"},{name:"Delete (by value)",time:"O(n)",description:"Find then remove"}]},y1={insertHead:{label:"Insert at Head",placeholder:"Value",buttonText:"Insert Head"},insertTail:{label:"Insert at Tail",placeholder:"Value",buttonText:"Insert Tail"},delete:{label:"Delete Value",placeholder:"Value",buttonText:"Delete"},search:{label:"Search Value",placeholder:"Value",buttonText:"Search"},clear:{buttonText:"Clear"}},j1={size:"Size",head:"Head",tail:"Tail"},N1={emptyList:"Linked list is empty. Insert some values!",insertHeadSuccess:'Inserted "{value}" at head',insertTailSuccess:'Inserted "{value}" at tail',deleteSuccess:'Deleted "{value}"',deleteNotFound:'Value "{value}" not found',searchFound:'Found "{value}" at position {position}',searchNotFound:'Value "{value}" not found',clearSuccess:"Linked list cleared!",errorNoValue:"Please enter a value!",errorInsert:"Error inserting value",errorDelete:"Error deleting value",errorSearch:"Error searching value",errorClear:"Error clearing list"},b1=[{type:"color",className:"head-color",label:"Head Node"},{type:"color",className:"node-color",label:"Node"},{type:"icon",icon:"ArrowRight",color:"#8b5cf6",label:"Pointer"}],k1={concept:f1,properties:m1,comparison:g1,types:x1,complexity:v1,operations:y1,infoLabels:j1,messages:N1,legend:b1},w1={title:"What is a Binary Tree?",description:"A Binary Tree is a hierarchical data structure where each node has at most two children (left and right).",codeExample:`       [5]
      /   \\
    [3]   [7]
   /  \\     \\
 [1]  [4]   [9]`,analogy:"Like a family tree - each person can have at most two children!"},S1={title:"Binary Tree Properties",items:[{label:"Structure",value:"Hierarchical (nodes + edges)"},{label:"Children",value:"At most 2 per node"},{label:"Root",value:"Topmost node (no parent)"},{label:"Leaf",value:"Node with no children"}]},C1={title:"Types of Binary Trees",items:[{name:"Full Binary Tree",description:"Every node has 0 or 2 children"},{name:"Complete Binary Tree",description:"All levels filled except possibly last"},{name:"Perfect Binary Tree",description:"All internal nodes have 2 children, leaves at same level"},{name:"Binary Search Tree",description:"Left < Parent < Right ordering"}]},T1={title:"Tree Traversals",items:[{name:"Inorder",order:"Left → Root → Right",use:"BST gives sorted order"},{name:"Preorder",order:"Root → Left → Right",use:"Copy tree, prefix expression"},{name:"Postorder",order:"Left → Right → Root",use:"Delete tree, postfix expression"},{name:"Level Order",order:"Level by level (BFS)",use:"Print by levels"}]},_1={title:"Time Complexity (BST)",operations:[{name:"Search",average:"O(log n)",worst:"O(n)",description:"Find element"},{name:"Insert",average:"O(log n)",worst:"O(n)",description:"Add element"},{name:"Delete",average:"O(log n)",worst:"O(n)",description:"Remove element"},{name:"Traversal",average:"O(n)",worst:"O(n)",description:"Visit all nodes"}],note:"Worst case O(n) occurs when tree becomes a linked list (unbalanced)"},L1={title:"Common Use Cases",items:["Binary Search Trees (fast lookup)","Expression trees (parsing)","Huffman coding (compression)","Heaps (priority queues)","File system structure"]},E1={insert:{label:"Insert Value",placeholder:"Value",buttonText:"Insert"},delete:{label:"Delete Value",placeholder:"Value",buttonText:"Delete"},search:{label:"Search Value",placeholder:"Value",buttonText:"Search"},traversals:{inorder:"Inorder",preorder:"Preorder",postorder:"Postorder",levelorder:"Level Order"},clear:{buttonText:"Clear"}},O1={size:"Nodes",height:"Height",root:"Root"},R1={emptyTree:"Binary tree is empty. Insert some values!",insertSuccess:"Inserted {value}",deleteSuccess:"Deleted {value}",deleteNotFound:"Value {value} not found",searchFound:"Found {value}",searchNotFound:"Value {value} not found",clearSuccess:"Tree cleared!",traversalResult:"{type} traversal: {result}",errorNoValue:"Please enter a value!",errorInsert:"Error inserting value",errorDelete:"Error deleting value",errorSearch:"Error searching value",errorClear:"Error clearing tree"},P1=[{type:"color",className:"root-color",label:"Root"},{type:"color",className:"node-color",label:"Node"},{type:"color",className:"leaf-color",label:"Leaf"},{type:"color",className:"highlight-color",label:"Current/Found"}],I1={concept:w1,properties:S1,types:C1,traversals:T1,complexity:_1,useCases:L1,operations:E1,infoLabels:O1,messages:R1,legend:P1},z1={title:"What is a Hash Table?",description:"A Hash Table is a data structure that maps keys to values using a hash function for O(1) average access time.",codeExample:'hash("apple") → 3 → table[3] = "apple"',analogy:"Like a library catalog - the book title (key) tells you exactly which shelf (index) to find it!"},M1={title:"Hash Table Properties",items:[{label:"Access",value:"O(1) average time"},{label:"Hash Function",value:"Maps key → index"},{label:"Load Factor",value:"size / capacity"},{label:"Collision",value:"When two keys hash to same index"}]},A1={title:"Collision Resolution: Linear Probing",description:"When a collision occurs, probe sequentially until an empty slot is found.",steps:["Calculate hash index","If slot occupied, try next slot","Repeat until empty slot found","Insert at empty slot"],formula:"index = (hash(key) + i) % capacity, where i = 0, 1, 2, ..."},F1={title:"Linear vs Quadratic Probing",linear:{label:"Linear Probing:",color:"#3b82f6",points:["Simple: check next slot","Primary clustering problem","Cache-friendly"]},quadratic:{label:"Quadratic Probing:",color:"#f59e0b",points:["Jump by squares: 1, 4, 9...","Reduces primary clustering","May not find empty slot"]},summary:"Linear probing is simpler but can cause clustering. Quadratic probing spreads entries better."},V1={title:"Load Factor",description:"Load factor = size / capacity. Measures how full the table is.",threshold:.7,warningMessage:"High load ({loadFactor}) - consider rehashing!",safeMessage:"Load factor: {loadFactor}"},D1={title:"Time Complexity",operations:[{name:"Insert",average:"O(1)",worst:"O(n)",description:"Add key-value"},{name:"Search",average:"O(1)",worst:"O(n)",description:"Find by key"},{name:"Delete",average:"O(1)",worst:"O(n)",description:"Remove by key"},{name:"Rehash",average:"O(n)",worst:"O(n)",description:"Resize table"}],note:"Worst case O(n) when many collisions or poor hash function"},$1={title:"Common Use Cases",items:["Dictionaries/Maps","Caching (memoization)","Database indexing","Symbol tables (compilers)","Counting frequencies"]},B1={insert:{label:"Insert Key-Value",keyPlaceholder:"Key",valuePlaceholder:"Value",buttonText:"Insert"},delete:{label:"Delete Key",placeholder:"Key",buttonText:"Delete"},search:{label:"Search Key",placeholder:"Key",buttonText:"Search"},clear:{buttonText:"Clear"},rehash:{buttonText:"Rehash"}},q1={items:"Items",capacity:"Capacity",load:"Load",collisions:"Collisions"},H1={emptyTable:"Hash table is empty. Insert some key-value pairs!",insertSuccess:'Inserted "{key}" at slot {index}',insertUpdated:'Updated "{key}" at slot {index}',insertCollision:"Collision at slot {original}! Probed to slot {index}",deleteSuccess:'Deleted "{key}"',searchFound:'Found: "{key}" = {value}',searchNotFound:'Key "{key}" not found',clearSuccess:"Hash table cleared!",rehashSuccess:"Rehashed! Capacity: {oldCapacity} → {newCapacity}",rehashEmpty:"Nothing to rehash - table is empty!",tableFull:"Table is full! Consider rehashing.",errorNoKey:"Please enter a key!",errorNoKeyValue:"Please enter both key and value!",errorInsert:"Error inserting. Is Flask running?",errorDelete:"Error deleting. Is Flask running?",errorSearch:"Error searching item",errorClear:"Error clearing hash table",errorRehash:"Error rehashing. Is Flask running?"},U1=[{type:"color",className:"key-color",label:"Key"},{type:"color",className:"index-color",label:"Index"},{type:"color",className:"value-color",label:"Value"},{type:"color",className:"probe-color",label:"Probed Slot"},{type:"color",className:"collision-color",label:"Collision"}],K1={concept:z1,properties:M1,collisionResolution:A1,comparison:F1,loadFactor:V1,complexity:D1,useCases:$1,operations:B1,infoLabels:q1,messages:H1,legend:U1},W1={title:"What is Quadratic Probing?",description:"Quadratic Probing is a collision resolution technique that uses a quadratic function to find the next available slot.",codeExample:"index = (hash(key) + i²) % capacity, where i = 0, 1, 2, 3...",analogy:"Like jumping farther each time - first 1 step, then 4, then 9, then 16!"},G1={title:"Quadratic Probing Properties",items:[{label:"Probe Sequence",value:"+1, +4, +9, +16, +25..."},{label:"Formula",value:"(hash + i²) % capacity"},{label:"Clustering",value:"Reduces primary clustering"},{label:"Load Factor",value:"Must stay below 0.5 for guarantee"}]},Q1={title:"Quadratic vs Linear Probing",quadratic:{label:"Quadratic:",color:"#f59e0b",points:["Jumps by squares: 1, 4, 9...","Less primary clustering","May miss empty slots"]},linear:{label:"Linear:",color:"#3b82f6",points:["Steps by 1 each time","Primary clustering issue","Always finds empty slot"]},summary:"Quadratic probing reduces clustering but requires load factor < 0.5 and prime table size for guaranteed insertion."},X1={title:"Clustering Problem",primary:{name:"Primary Clustering",description:"Long runs of occupied slots form clusters",cause:"Linear probing - same probe sequence for nearby hashes",solution:"Use quadratic or double hashing"},secondary:{name:"Secondary Clustering",description:"Keys with same hash follow same probe sequence",cause:"Probe sequence depends only on initial hash",solution:"Use double hashing"}},Y1={title:"Load Factor Warning",description:"Quadratic probing may fail to find empty slots if load factor > 0.5",threshold:.5,warningMessage:"Warning: Load factor ({loadFactor}) > 0.5 - insertions may fail!",safeMessage:"Load factor: {loadFactor}"},J1={title:"Time Complexity",operations:[{name:"Insert",average:"O(1)",worst:"O(n)",description:"Add key-value"},{name:"Search",average:"O(1)",worst:"O(n)",description:"Find by key"},{name:"Delete",average:"O(1)",worst:"O(n)",description:"Remove by key"},{name:"Rehash",average:"O(n)",worst:"O(n)",description:"Resize table"}],note:"Requires prime table size and load factor < 0.5 for guaranteed O(1)"},Z1={insert:{label:"Insert Key-Value",keyPlaceholder:"Key",valuePlaceholder:"Value",buttonText:"Insert"},delete:{label:"Delete Key",placeholder:"Key",buttonText:"Delete"},search:{label:"Search Key",placeholder:"Key",buttonText:"Search"},clear:{buttonText:"Clear"},rehash:{buttonText:"Rehash"}},ej={items:"Items",capacity:"Capacity",load:"Load",collisions:"Collisions"},nj={emptyTable:"Hash table is empty. Insert some key-value pairs!",insertSuccess:'Inserted "{key}" at slot {index}',insertUpdated:'Updated "{key}" at slot {index}',insertCollision:"Collision! Quadratic probed to slot {index} (i={probeCount})",deleteSuccess:'Deleted "{key}"',searchFound:'Found: "{key}" = {value}',searchNotFound:'Key "{key}" not found',clearSuccess:"Hash table cleared!",rehashSuccess:"Rehashed! Capacity: {oldCapacity} → {newCapacity}",rehashEmpty:"Nothing to rehash - table is empty!",tableFull:"Cannot insert - no empty slot found after full probe cycle!",errorNoKey:"Please enter a key!",errorNoKeyValue:"Please enter both key and value!",errorInsert:"Error inserting. Is Flask running?",errorDelete:"Error deleting. Is Flask running?",errorSearch:"Error searching item",errorClear:"Error clearing hash table",errorRehash:"Error rehashing. Is Flask running?"},tj=[{type:"color",className:"key-color",label:"Key"},{type:"color",className:"index-color",label:"Index"},{type:"color",className:"value-color",label:"Value"},{type:"color",className:"probe-color",label:"Quadratic Probe"}],rj={concept:W1,properties:G1,comparison:Q1,clustering:X1,loadFactor:Y1,complexity:J1,operations:Z1,infoLabels:ej,messages:nj,legend:tj},sj={title:"What is a Binary Search Tree?",description:"A Binary Search Tree (BST) is a binary tree where each node follows the ordering property: all left descendants < node < all right descendants.",codeExample:`       [50]
      /    \\
   [30]    [70]
   /  \\    /  \\
 [20][40][60][80]

Left < Parent < Right`,analogy:"Like a dictionary - words are sorted alphabetically, so you can quickly find any word by comparing!"},ij={title:"BST Properties",items:[{label:"Ordering",value:"Left < Parent < Right"},{label:"Search",value:"O(log n) average"},{label:"Inorder",value:"Gives sorted sequence"},{label:"No Duplicates",value:"Typically unique keys"}]},aj={insert:{label:"Insert Value",placeholder:"Value",buttonText:"Insert"},delete:{label:"Delete Value",placeholder:"Value",buttonText:"Delete"},search:{label:"Search Value",placeholder:"Value",buttonText:"Search"},traversals:{inorder:"Inorder (Sorted)",preorder:"Preorder",postorder:"Postorder",levelorder:"Level Order"},clear:{buttonText:"Clear"}},lj={title:"BST Delete Cases",items:[{name:"Leaf Node",description:"Simply remove (no children)"},{name:"One Child",description:"Replace with child"},{name:"Two Children",description:"Replace with inorder successor (smallest in right subtree)"}]},oj={title:"Tree Traversals",items:[{name:"Inorder",order:"Left -> Root -> Right",use:"Returns SORTED order in BST"},{name:"Preorder",order:"Root -> Left -> Right",use:"Copy/serialize tree"},{name:"Postorder",order:"Left -> Right -> Root",use:"Delete tree safely"},{name:"Level Order",order:"Level by level (BFS)",use:"Print by levels"}]},cj={title:"Time Complexity",operations:[{name:"Search",average:"O(log n)",worst:"O(n)",description:"Binary search principle"},{name:"Insert",average:"O(log n)",worst:"O(n)",description:"Find position + insert"},{name:"Delete",average:"O(log n)",worst:"O(n)",description:"Find + restructure"},{name:"Min/Max",average:"O(log n)",worst:"O(n)",description:"Leftmost/rightmost"}],note:"Worst case O(n) when tree is unbalanced (degenerates to linked list). Use AVL/Red-Black trees for guaranteed O(log n)."},dj={title:"Common Use Cases",items:["Database indexing (B-trees)","Symbol tables in compilers","Priority queues","Auto-complete suggestions","Range queries (find all values between X and Y)"]},uj={title:"BST vs Other Structures",items:[{vs:"Array",advantage:"O(log n) insert/delete vs O(n)"},{vs:"Hash Table",advantage:"Ordered data, range queries"},{vs:"Linked List",advantage:"O(log n) search vs O(n)"}]},hj={size:"Nodes",height:"Height",root:"Root"},pj={emptyTree:"BST is empty. Insert some values!",insertSuccess:"Inserted {value}",deleteSuccess:"Deleted {value}",deleteNotFound:"Value {value} not found",searchFound:"Found {value}",searchNotFound:"Value {value} not found",clearSuccess:"BST cleared!",traversalResult:"{type}: {result}",errorNoValue:"Please enter a value!",errorInsert:"Error inserting value",errorDelete:"Error deleting value",errorSearch:"Error searching value",errorClear:"Error clearing BST"},fj=[{type:"color",className:"root-color",label:"Root"},{type:"color",className:"node-color",label:"Node"},{type:"color",className:"leaf-color",label:"Leaf"},{type:"color",className:"highlight-color",label:"Current/Found"}],mj={concept:sj,properties:ij,operations:aj,deleteCases:lj,traversals:oj,complexity:cj,useCases:dj,comparison:uj,infoLabels:hj,messages:pj,legend:fj},gj={title:"What is an AVL Tree?",description:"An AVL Tree is a self-balancing Binary Search Tree where the height difference between left and right subtrees (balance factor) is at most 1 for every node.",codeExample:`       [50]  BF=0
      /    \\
   [30]    [70]  
  BF=0     BF=0
   /  \\      \\
 [20][40]   [80]

Balance Factor = Height(Left) - Height(Right)
BF must be -1, 0, or 1`,analogy:"Like a well-organized library that automatically reorganizes shelves whenever books are added or removed to ensure quick access!"},xj={title:"AVL Properties",items:[{label:"Balance Factor",value:"-1, 0, or 1 for all nodes"},{label:"Height",value:"O(log n) guaranteed"},{label:"Self-Balancing",value:"Rotations on insert/delete"},{label:"BST Property",value:"Left < Parent < Right"}]},vj={insert:{label:"Insert Value",placeholder:"Value",buttonText:"Insert"},delete:{label:"Delete Value",placeholder:"Value",buttonText:"Delete"},search:{label:"Search Value",placeholder:"Value",buttonText:"Search"},traversals:{inorder:"Inorder (Sorted)",preorder:"Preorder",postorder:"Postorder",levelorder:"Level Order"},clear:{buttonText:"Clear"}},yj={title:"AVL Rotations",items:[{name:"Left-Left (LL)",description:"Right rotation",when:"BF > 1, Left child BF >= 0"},{name:"Right-Right (RR)",description:"Left rotation",when:"BF < -1, Right child BF <= 0"},{name:"Left-Right (LR)",description:"Left then Right rotation",when:"BF > 1, Left child BF < 0"},{name:"Right-Left (RL)",description:"Right then Left rotation",when:"BF < -1, Right child BF > 0"}]},jj={title:"Tree Traversals",items:[{name:"Inorder",order:"Left -> Root -> Right",use:"Returns SORTED order"},{name:"Preorder",order:"Root -> Left -> Right",use:"Copy/serialize tree"},{name:"Postorder",order:"Left -> Right -> Root",use:"Delete tree safely"},{name:"Level Order",order:"Level by level (BFS)",use:"Print by levels"}]},Nj={title:"Time Complexity",operations:[{name:"Search",average:"O(log n)",worst:"O(log n)",description:"Height always balanced"},{name:"Insert",average:"O(log n)",worst:"O(log n)",description:"Insert + rebalance"},{name:"Delete",average:"O(log n)",worst:"O(log n)",description:"Delete + rebalance"},{name:"Rotation",average:"O(1)",worst:"O(1)",description:"Constant time fix"}],note:"Unlike regular BST, AVL guarantees O(log n) even in worst case because the tree is always balanced!"},bj={title:"Common Use Cases",items:["Database indexing with frequent lookups","In-memory databases","Dictionary implementations","When guaranteed O(log n) is critical","Real-time systems needing predictable performance"]},kj={title:"AVL vs Other Trees",items:[{vs:"BST",advantage:"Guaranteed O(log n) vs O(n) worst case"},{vs:"Red-Black",advantage:"More rigidly balanced (faster lookup)"},{vs:"B-Tree",advantage:"Better for in-memory operations"}]},wj={size:"Nodes",height:"Height",root:"Root"},Sj={emptyTree:"AVL Tree is empty. Insert some values!",insertSuccess:"Inserted {value} (tree rebalanced)",deleteSuccess:"Deleted {value} (tree rebalanced)",deleteNotFound:"Value {value} not found",searchFound:"Found {value}",searchNotFound:"Value {value} not found",clearSuccess:"AVL Tree cleared!",traversalResult:"{type}: {result}",errorNoValue:"Please enter a value!",errorInsert:"Error inserting value",errorDelete:"Error deleting value",errorSearch:"Error searching value",errorClear:"Error clearing AVL Tree"},Cj=[{type:"color",className:"root-color",label:"Root"},{type:"color",className:"balanced-color",label:"Balanced (|BF| <= 1)"},{type:"color",className:"leaf-color",label:"Leaf"},{type:"color",className:"highlight-color",label:"Current/Found"}],Tj={concept:gj,properties:xj,operations:vj,rotations:yj,traversals:jj,complexity:Nj,useCases:bj,comparison:kj,infoLabels:wj,messages:Sj,legend:Cj},_j={title:"What is a Splay Tree?",description:"A Splay Tree is a self-adjusting Binary Search Tree that moves frequently accessed elements closer to the root through rotations (splaying), providing amortized O(log n) performance.",codeExample:`After searching for 20:

Before:        After Splay:
   [50]           [20]
   /                  \\
 [30]                [50]
 /                   /
[20]  <-- found   [30]

Accessed node moves to root!`,analogy:"Like keeping frequently used items at the front of your desk - recently used elements stay easily accessible!"},Lj={title:"Splay Tree Properties",items:[{label:"Self-Adjusting",value:"Accessed nodes move to root"},{label:"No Balance Info",value:"No height/color stored"},{label:"Amortized O(log n)",value:"Good average performance"},{label:"Cache Friendly",value:"Hot nodes stay near root"}]},Ej={insert:{label:"Insert Value",placeholder:"Value",buttonText:"Insert"},delete:{label:"Delete Value",placeholder:"Value",buttonText:"Delete"},search:{label:"Search Value",placeholder:"Value",buttonText:"Search"},traversals:{inorder:"Inorder (Sorted)",preorder:"Preorder",postorder:"Postorder",levelorder:"Level Order"},clear:{buttonText:"Clear"}},Oj={title:"Splay Operations",items:[{name:"Zig",description:"Single rotation when parent is root",when:"Parent is root"},{name:"Zig-Zig",description:"Both node and parent are left (or both right) children",when:"Same side grandchild"},{name:"Zig-Zag",description:"Node is left child, parent is right (or vice versa)",when:"Opposite side grandchild"}]},Rj={title:"Tree Traversals",items:[{name:"Inorder",order:"Left -> Root -> Right",use:"Returns SORTED order"},{name:"Preorder",order:"Root -> Left -> Right",use:"Copy/serialize tree"},{name:"Postorder",order:"Left -> Right -> Root",use:"Delete tree safely"},{name:"Level Order",order:"Level by level (BFS)",use:"Print by levels"}]},Pj={title:"Time Complexity",operations:[{name:"Search",average:"O(log n)*",worst:"O(n)",description:"Amortized logarithmic"},{name:"Insert",average:"O(log n)*",worst:"O(n)",description:"Amortized logarithmic"},{name:"Delete",average:"O(log n)*",worst:"O(n)",description:"Amortized logarithmic"},{name:"Splay",average:"O(log n)*",worst:"O(n)",description:"Brings node to root"}],note:"* Amortized - while single operations can be O(n), any sequence of m operations takes O(m log n) total time."},Ij={title:"Common Use Cases",items:["Cache implementations (LRU-like behavior)","Garbage collectors","Network routers (IP lookup)","Situations with temporal locality","When same elements accessed repeatedly"]},zj={title:"Splay Tree vs Other Trees",items:[{vs:"AVL",advantage:"Simpler (no balance info), better for skewed access"},{vs:"Red-Black",advantage:"Self-optimizing for access patterns"},{vs:"BST",advantage:"Better amortized performance"}]},Mj={size:"Nodes",height:"Height",root:"Root"},Aj={emptyTree:"Splay Tree is empty. Insert some values!",insertSuccess:"Inserted {value} (now at root)",deleteSuccess:"Deleted {value}",deleteNotFound:"Value {value} not found",searchFound:"Found {value} (splayed to root)",searchNotFound:"Value {value} not found",clearSuccess:"Splay Tree cleared!",traversalResult:"{type}: {result}",errorNoValue:"Please enter a value!",errorInsert:"Error inserting value",errorDelete:"Error deleting value",errorSearch:"Error searching value",errorClear:"Error clearing Splay Tree"},Fj=[{type:"color",className:"root-color",label:"Root (Most Recent)"},{type:"color",className:"node-color",label:"Node"},{type:"color",className:"leaf-color",label:"Leaf"},{type:"color",className:"highlight-color",label:"Current/Found"}],Vj={concept:_j,properties:Lj,operations:Ej,splayOperations:Oj,traversals:Rj,complexity:Pj,useCases:Ij,comparison:zj,infoLabels:Mj,messages:Aj,legend:Fj},Dj={title:"What is a Min Heap?",description:"A Min Heap is a complete binary tree where each parent node is smaller than or equal to its children. The minimum element is always at the root, making it perfect for priority queues.",codeExample:`       [1]  <- Min at root
      /    \\
    [3]    [2]
   /  \\    /
 [7]  [6][4]

Array: [1, 3, 2, 7, 6, 4]
Parent always <= Children`,analogy:"Like a tournament bracket where the winner (smallest) rises to the top - the champion is always at the root!"},$j={title:"Min Heap Properties",items:[{label:"Heap Property",value:"Parent <= Children"},{label:"Complete Tree",value:"Filled level by level"},{label:"Array Storage",value:"Parent(i)=(i-1)/2"},{label:"Min Access",value:"O(1) to get minimum"}]},Bj={insert:{label:"Insert Value",placeholder:"Value",buttonText:"Insert"},extract:{label:"Extract Min",buttonText:"Extract Min"},peek:{label:"Peek Min",buttonText:"Peek"},build:{label:"Build from Array",placeholder:"e.g., 5,3,8,1,2",buttonText:"Build Heap"},clear:{buttonText:"Clear"}},qj={title:"Heap Operations",items:[{name:"Insert",description:"Add at end, bubble up (heapify up)",complexity:"O(log n)"},{name:"Extract Min",description:"Remove root, replace with last, bubble down",complexity:"O(log n)"},{name:"Peek",description:"Return root without removing",complexity:"O(1)"},{name:"Build Heap",description:"Heapify from array (bottom-up)",complexity:"O(n)"}]},Hj={title:"Array Representation",items:[{formula:"Parent(i)",value:"(i - 1) / 2"},{formula:"Left Child(i)",value:"2*i + 1"},{formula:"Right Child(i)",value:"2*i + 2"}]},Uj={title:"Time Complexity",operations:[{name:"Insert",average:"O(log n)",worst:"O(log n)",description:"Bubble up to root"},{name:"Extract Min",average:"O(log n)",worst:"O(log n)",description:"Bubble down"},{name:"Peek/Get Min",average:"O(1)",worst:"O(1)",description:"Always at root"},{name:"Build Heap",average:"O(n)",worst:"O(n)",description:"Bottom-up heapify"}],note:"Space complexity is O(n). Complete tree structure ensures height is always O(log n)."},Kj={title:"Common Use Cases",items:["Priority Queues (process by priority)","Dijkstra's shortest path algorithm","Prim's minimum spanning tree","Huffman coding (compression)","Event-driven simulation","K smallest/largest elements"]},Wj={title:"Min Heap vs Other Structures",items:[{vs:"Sorted Array",advantage:"O(log n) insert vs O(n)"},{vs:"BST",advantage:"O(1) get min vs O(log n)"},{vs:"Max Heap",advantage:"Fast min access vs fast max"}]},Gj={size:"Size",height:"Height",min:"Min"},Qj={emptyHeap:"Min Heap is empty. Insert some values!",insertSuccess:"Inserted {value}",extractSuccess:"Extracted minimum: {value}",peekSuccess:"Minimum element is {value}",buildSuccess:"Built heap from array",clearSuccess:"Heap cleared!",errorNoValue:"Please enter a value!",errorEmpty:"Heap is empty!",errorFull:"Heap is full!",errorInsert:"Error inserting value",errorExtract:"Error extracting minimum"},Xj=[{type:"color",className:"root-color",label:"Root (Min)"},{type:"color",className:"node-color",label:"Internal Node"},{type:"color",className:"leaf-color",label:"Leaf"},{type:"color",className:"highlight-color",label:"Current/Swapping"}],Yj={concept:Dj,properties:$j,operations:Bj,heapOperations:qj,arrayRepresentation:Hj,complexity:Uj,useCases:Kj,comparison:Wj,infoLabels:Gj,messages:Qj,legend:Xj},Jj={title:"What is a Max Heap?",description:"A Max Heap is a complete binary tree where each parent node is greater than or equal to its children. The maximum element is always at the root, ideal for priority queues where largest = highest priority.",codeExample:`       [9]  <- Max at root
      /    \\
    [7]    [8]
   /  \\    /
 [3]  [5][6]

Array: [9, 7, 8, 3, 5, 6]
Parent always >= Children`,analogy:"Like a corporate hierarchy - the CEO (maximum) is at the top, and each manager has authority over their subordinates!"},Zj={title:"Max Heap Properties",items:[{label:"Heap Property",value:"Parent >= Children"},{label:"Complete Tree",value:"Filled level by level"},{label:"Array Storage",value:"Parent(i)=(i-1)/2"},{label:"Max Access",value:"O(1) to get maximum"}]},e0={insert:{label:"Insert Value",placeholder:"Value",buttonText:"Insert"},extract:{label:"Extract Max",buttonText:"Extract Max"},peek:{label:"Peek Max",buttonText:"Peek"},build:{label:"Build from Array",placeholder:"e.g., 5,3,8,1,2",buttonText:"Build Heap"},clear:{buttonText:"Clear"}},n0={title:"Heap Operations",items:[{name:"Insert",description:"Add at end, bubble up (heapify up)",complexity:"O(log n)"},{name:"Extract Max",description:"Remove root, replace with last, bubble down",complexity:"O(log n)"},{name:"Peek",description:"Return root without removing",complexity:"O(1)"},{name:"Build Heap",description:"Heapify from array (bottom-up)",complexity:"O(n)"}]},t0={title:"Array Representation",items:[{formula:"Parent(i)",value:"(i - 1) / 2"},{formula:"Left Child(i)",value:"2*i + 1"},{formula:"Right Child(i)",value:"2*i + 2"}]},r0={title:"Time Complexity",operations:[{name:"Insert",average:"O(log n)",worst:"O(log n)",description:"Bubble up to root"},{name:"Extract Max",average:"O(log n)",worst:"O(log n)",description:"Bubble down"},{name:"Peek/Get Max",average:"O(1)",worst:"O(1)",description:"Always at root"},{name:"Build Heap",average:"O(n)",worst:"O(n)",description:"Bottom-up heapify"}],note:"Space complexity is O(n). Complete tree structure ensures height is always O(log n)."},s0={title:"Common Use Cases",items:["Priority Queues (largest = highest priority)","Heap Sort algorithm","Job scheduling (highest priority first)","Finding K largest elements","Median maintenance (with min heap)","Stock trading (highest bid)"]},i0={title:"Max Heap vs Other Structures",items:[{vs:"Sorted Array",advantage:"O(log n) insert vs O(n)"},{vs:"BST",advantage:"O(1) get max vs O(log n)"},{vs:"Min Heap",advantage:"Fast max access vs fast min"}]},a0={size:"Size",height:"Height",max:"Max"},l0={emptyHeap:"Max Heap is empty. Insert some values!",insertSuccess:"Inserted {value}",extractSuccess:"Extracted maximum: {value}",peekSuccess:"Maximum element is {value}",buildSuccess:"Built heap from array",clearSuccess:"Heap cleared!",errorNoValue:"Please enter a value!",errorEmpty:"Heap is empty!",errorFull:"Heap is full!",errorInsert:"Error inserting value",errorExtract:"Error extracting maximum"},o0=[{type:"color",className:"root-color",label:"Root (Max)"},{type:"color",className:"node-color",label:"Internal Node"},{type:"color",className:"leaf-color",label:"Leaf"},{type:"color",className:"highlight-color",label:"Current/Swapping"}],c0={concept:Jj,properties:Zj,operations:e0,heapOperations:n0,arrayRepresentation:t0,complexity:r0,useCases:s0,comparison:i0,infoLabels:a0,messages:l0,legend:o0},d0={title:"What is a Treap?",description:"A Treap is a combination of a Binary Search Tree (BST) and a Heap. Each node has a key (follows BST ordering: left < parent < right) and a random priority (follows max-heap ordering: parent priority >= child priority). Rotations maintain the heap property after insertions.",codeExample:`       [50, p:95]
      /          \\
  [30, p:80]   [70, p:60]
   /     \\         \\
[20,p:40][40,p:55] [80,p:30]

BST on keys | Max-Heap on priorities`,analogy:"Like a tournament bracket where seeded players (priorities) determine placement, but match order follows alphabetical (BST) rules!"},u0={title:"Treap Properties",items:[{label:"Keys",value:"BST order (Left < Parent < Right)"},{label:"Priorities",value:"Max-heap order (Parent >= Children)"},{label:"Balance",value:"Expected O(log n) height"},{label:"Randomized",value:"Priorities assigned randomly"}]},h0={title:"Time Complexity",operations:[{name:"Search",average:"O(log n)",worst:"O(n)",description:"BST search on keys"},{name:"Insert",average:"O(log n)",worst:"O(n)",description:"BST insert + rotate up"},{name:"Delete",average:"O(log n)",worst:"O(n)",description:"Rotate down + remove leaf"},{name:"Split/Merge",average:"O(log n)",worst:"O(n)",description:"Divide/combine treaps"}],note:"Random priorities give O(log n) expected height, making worst-case O(n) extremely unlikely."},p0={title:"Common Use Cases",items:["Implicit key treaps for sequence operations","Efficient split and merge operations","Randomized balanced BST without complex rebalancing","Competitive programming (flexible tree operations)","Persistent data structures"]},f0={title:"Treap vs Other Trees",items:[{vs:"BST",advantage:"Expected O(log n) balance via random priorities"},{vs:"AVL Tree",advantage:"Simpler implementation, supports split/merge"},{vs:"Red-Black Tree",advantage:"Easier to code, natural split/merge"},{vs:"Skip List",advantage:"Tree structure, supports order statistics"}]},m0={concept:d0,properties:u0,complexity:h0,useCases:p0,comparison:f0},g0={stack:r1,queue:p1,linkedlist:k1,binarytree:I1,hashtable:K1,hashtableChaining:ee,hashtableQuadratic:rj,bst:mj,avl:Tj,splay:Vj,minheap:Yj,maxheap:c0,treap:m0};function Tr({dataStructure:e}){const t=g0[e];return t?n.jsxs("div",{className:"concepts-panel",children:[t.concept&&n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Me,{className:"icon-sm"}),n.jsx("span",{children:t.concept.title})]}),n.jsxs("div",{className:"concept-content",children:[n.jsx("p",{children:t.concept.description}),t.concept.codeExample&&n.jsx("pre",{className:"concept-code-example",children:n.jsx("code",{children:t.concept.codeExample})}),t.concept.analogy&&n.jsxs("div",{className:"concept-analogy",children:[n.jsx(ve,{}),n.jsx("span",{children:t.concept.analogy})]})]})]}),t.properties&&n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(nt,{className:"icon-sm"}),n.jsx("span",{children:t.properties.title})]}),n.jsx("div",{className:"concept-content",children:n.jsx("div",{className:"properties-grid",children:t.properties.items.map((r,s)=>n.jsxs("div",{className:"property-item",children:[n.jsx("span",{className:"property-label",children:r.label}),n.jsx("span",{className:"property-value",children:r.value})]},s))})})]}),t.complexity&&n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(ql,{className:"icon-sm"}),n.jsx("span",{children:t.complexity.title})]}),n.jsxs("div",{className:"concept-content",children:[n.jsx("div",{className:"complexity-table",children:t.complexity.operations.map((r,s)=>n.jsxs("div",{className:"complexity-row",children:[n.jsx("span",{className:"complexity-name",children:r.name}),r.time&&n.jsx("code",{className:"complexity-time",children:r.time}),r.average&&n.jsxs(n.Fragment,{children:[n.jsx("code",{className:"complexity-avg",children:r.average}),r.worst&&n.jsx("code",{className:"complexity-worst",children:r.worst})]}),r.description&&n.jsx("span",{className:"complexity-desc",children:r.description})]},s))}),t.complexity.note&&n.jsx("p",{className:"complexity-note",children:t.complexity.note})]})]}),t.useCases&&n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Ts,{className:"icon-sm"}),n.jsx("span",{children:t.useCases.title})]}),n.jsx("div",{className:"concept-content",children:n.jsx("ul",{className:"use-cases-list",children:t.useCases.items.map((r,s)=>n.jsxs("li",{children:[n.jsx(zn,{className:"icon-xs"}),n.jsx("span",{children:r})]},s))})})]}),t.traversals&&n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(nt,{className:"icon-sm"}),n.jsx("span",{children:t.traversals.title})]}),n.jsx("div",{className:"concept-content",children:n.jsx("div",{className:"traversals-list",children:t.traversals.items.map((r,s)=>n.jsxs("div",{className:"traversal-item",children:[n.jsx("span",{className:"traversal-name",children:r.name}),n.jsx("span",{className:"traversal-order",children:r.order}),n.jsx("span",{className:"traversal-use",children:r.use})]},s))})})]}),t.deleteCases&&n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(nt,{className:"icon-sm"}),n.jsx("span",{children:t.deleteCases.title})]}),n.jsx("div",{className:"concept-content",children:n.jsx("div",{className:"delete-cases-grid",children:t.deleteCases.items.map((r,s)=>n.jsxs("div",{className:"delete-case-item",children:[n.jsx("span",{className:"case-number",children:s+1}),n.jsxs("div",{children:[n.jsx("strong",{children:r.name}),n.jsx("p",{children:r.description})]})]},s))})})]}),t.comparison&&n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(nt,{className:"icon-sm"}),n.jsx("span",{children:t.comparison.title})]}),n.jsx("div",{className:"concept-content",children:n.jsx("div",{className:"comparison-list",children:t.comparison.items.map((r,s)=>n.jsxs("div",{className:"comparison-item",children:[n.jsxs("span",{className:"comparison-vs",children:["vs ",r.vs]}),n.jsx("span",{className:"comparison-advantage",children:r.advantage})]},s))})})]})]}):n.jsx("div",{className:"concepts-panel",children:n.jsx("p",{children:"Concepts not available for this data structure."})})}const x0={search:"BST Search",identify_leaves:"Leaf Hunt",inorder_start:"Inorder Sequence"},v0={search:"search",identify_leaves:"leaves",inorder_start:"inorder"};function y0(){return n.jsxs("div",{className:"challenge-loading",children:[n.jsx("div",{className:"challenge-mode-dot"}),"Generating challenge…"]})}function j0({challenge:e,clickCount:t,onNewChallenge:r,onExit:s}){return n.jsxs("div",{className:"challenge-result success",children:[n.jsx("div",{className:"challenge-result-icon",children:"🎉"}),n.jsx("p",{className:"challenge-result-title",children:"Challenge Complete!"}),n.jsxs("p",{className:"challenge-result-subtitle",children:[n.jsx("em",{children:e.title})," — solved in ",t," click",t!==1?"s":""]}),n.jsxs("div",{className:"challenge-result-actions",children:[n.jsxs("button",{className:"btn btn-insert",onClick:r,children:[n.jsx(Ts,{size:13})," New Challenge"]}),n.jsx("button",{className:"btn btn-secondary",onClick:s,children:"Exit"})]})]})}function N0({challenge:e,userClicks:t,onRetry:r,onExit:s}){const i=e.expected_steps[t.length];return n.jsxs("div",{className:"challenge-result failed",children:[n.jsx("div",{className:"challenge-result-icon",children:"❌"}),n.jsx("p",{className:"challenge-result-title",children:"Wrong node!"}),n.jsx("p",{className:"challenge-result-subtitle",children:e.type==="identify_leaves"?"That node isn't part of the solution — look carefully.":`Expected step ${t.length+1} (value ${i}). Reset and try again.`}),n.jsxs("div",{className:"challenge-result-actions",children:[n.jsx("button",{className:"btn btn-insert",onClick:r,children:"Try Again"}),n.jsx("button",{className:"btn btn-secondary",onClick:s,children:"Exit"})]})]})}function b0({challenge:e,userClicks:t,onExit:r}){const[s,i]=p.useState(!1),a=e.expected_steps.length,l=t.length,o=e.type!=="identify_leaves";return n.jsxs("div",{className:"challenge-banner",children:[n.jsxs("div",{className:"challenge-header-row",children:[n.jsxs("div",{className:"challenge-title-group",children:[n.jsx("span",{className:`challenge-type-badge ${v0[e.type]||"search"}`,children:x0[e.type]||e.type}),n.jsx("h3",{className:"challenge-title",children:e.title})]}),n.jsxs("button",{className:"challenge-exit-btn",onClick:r,children:[n.jsx(na,{size:13})," Exit"]})]}),n.jsx("p",{className:"challenge-description",children:e.description}),o?n.jsxs("div",{className:"challenge-progress-row",children:[e.expected_steps.map((c,u)=>{const d=u<l,h=u===l;return n.jsxs(Ce.Fragment,{children:[u>0&&n.jsx($n,{size:11,className:"challenge-progress-arrow"}),n.jsx("div",{className:`challenge-step-dot ${d?"done":h?"next":"pending"}`,children:d?"✓":u+1})]},u)}),n.jsxs("span",{className:"challenge-step-label",children:[l,"/",a]})]}):n.jsxs("div",{className:"challenge-identify-progress",children:[n.jsx("span",{className:"challenge-identify-count",children:l}),n.jsx("span",{className:"challenge-identify-sep",children:" / "}),n.jsx("span",{className:"challenge-identify-total",children:a}),n.jsx("span",{className:"challenge-identify-label",children:" leaf nodes found"})]}),n.jsxs("div",{className:"challenge-hint-row",children:[n.jsxs("button",{className:"challenge-hint-toggle",onClick:()=>i(c=>!c),children:[n.jsx(ve,{size:12}),s?"Hide hint":"Need a hint?"]}),s&&n.jsx("p",{className:"challenge-hint-text",children:e.hint})]})]})}function k0({challenge:e,userClicks:t,status:r,onExit:s,onRetry:i,onNewChallenge:a}){return r==="loading"?n.jsx(y0,{}):r==="success"&&e?n.jsx(j0,{challenge:e,clickCount:t.length,onNewChallenge:a,onExit:s}):r==="failed"&&e?n.jsx(N0,{challenge:e,userClicks:t,onRetry:i,onExit:s}):r==="active"&&e?n.jsx(b0,{challenge:e,userClicks:t,onExit:s}):null}const tr=7,w0={inorder:{name:"Inorder Traversal",order:"Left -> Root -> Right",description:"Returns elements in SORTED order for BST. This is the key property of BST!",useCase:["Get sorted elements","Validate BST","Range queries"],complexity:{time:"O(n)",space:"O(h)"}},preorder:{name:"Preorder Traversal",order:"Root -> Left -> Right",description:"Process root first. Useful for copying/serializing the BST structure.",useCase:["Copy tree structure","Serialize BST","Prefix expressions"],complexity:{time:"O(n)",space:"O(h)"}},postorder:{name:"Postorder Traversal",order:"Left -> Right -> Root",description:"Process children before root. Essential for safely deleting the tree.",useCase:["Delete tree safely","Calculate subtree sizes","Postfix expressions"],complexity:{time:"O(n)",space:"O(h)"}},levelorder:{name:"Level Order Traversal",order:"Level by Level (BFS)",description:"Visit nodes level by level using a queue. Shows tree structure clearly.",useCase:["Level-wise printing","Find width","Serialize for reconstruction"],complexity:{time:"O(n)",space:"O(w)"}}},Yl=(e,t=0)=>e?Math.max(Yl(e.left,t+1),Yl(e.right,t+1)):t-1,S0=(e,t)=>{const r=[];let s=e;for(;s&&(r.push(s.value),s.value!==t);)t<s.value?s=s.left:s=s.right;return r};function C0({insertValue:e,deleteValue:t,searchValue:r,size:s,height:i,message:a,tree:l,isAnimating:o,visitedNodes:c,searchPath:u,searchResult:d,isChallengeMode:h,challengeStatus:g,onInsertValueChange:b,onDeleteValueChange:N,onSearchValueChange:y,onInsert:j,onDelete:f,onSearch:m,onTraversal:x,onClear:S,onResetTraversal:v,onStartChallenge:P}){const C=(L,_)=>{const q=L.target.value;(q===""||q==="-"||/^-?\d*\.?\d*$/.test(q))&&_(q)},V=o||h;return n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Binary Search Tree"}),h?n.jsxs("div",{className:"challenge-mode-indicator",children:[n.jsx("div",{className:"challenge-mode-dot"}),"Challenge Mode Active — click nodes in the tree"]}):n.jsx("div",{className:"operation-group",children:n.jsxs("button",{className:"btn btn-challenge",onClick:P,disabled:o||!l||s<2,title:s<2?"Insert at least 2 nodes first":"Start an AI-generated challenge",children:[n.jsx(Ts,{size:15})," Start Challenge"]})}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"insertValue",children:"Insert Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"insertValue",value:e,onChange:L=>C(L,b),onKeyDown:L=>L.key==="Enter"&&j(),placeholder:"Enter a number",disabled:V}),n.jsx("button",{onClick:j,className:"btn btn-insert",disabled:V,children:"Insert"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"searchValue",children:"Search Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"searchValue",value:r,onChange:L=>C(L,y),onKeyDown:L=>L.key==="Enter"&&m(),placeholder:"Enter a number",disabled:V}),n.jsxs("button",{onClick:m,className:"btn btn-search",disabled:V||!l,children:[n.jsx(At,{size:16})," Search"]})]}),u.length>0&&n.jsxs("div",{className:"search-path-display",children:[n.jsx("span",{className:"search-path-label",children:"Path:"}),n.jsx("div",{className:"search-path-nodes",children:u.map((L,_)=>n.jsxs(Ce.Fragment,{children:[n.jsx("span",{className:`search-path-node ${_===u.length-1?d?"found":"not-found":""}`,children:L}),_<u.length-1&&n.jsx(xe,{size:14,className:"search-path-arrow"})]},_))})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"deleteValue",children:"Delete Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"deleteValue",value:t,onChange:L=>C(L,N),onKeyDown:L=>L.key==="Enter"&&f(),placeholder:"Enter a number",disabled:V}),n.jsx("button",{onClick:f,className:"btn btn-delete",disabled:V,children:"Delete"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Traversals"}),n.jsx("div",{className:"btn-group",children:["inorder","preorder","postorder","levelorder"].map(L=>n.jsxs("button",{onClick:()=>x(L),className:`btn btn-traversal ${L==="inorder"?"btn-traversal-primary":""}`,disabled:V||!l,title:L==="inorder"?"Returns sorted order!":"",children:[L==="levelorder"?"Level Order":L.charAt(0).toUpperCase()+L.slice(1),L==="inorder"&&n.jsx("span",{className:"sorted-badge",children:"Sorted!"})]},L))}),c.length>0&&!V&&n.jsx("button",{onClick:v,className:"btn btn-secondary",style:{marginTop:"0.5rem",width:"100%"},children:"Reset Colors"})]}),n.jsxs("div",{className:"traversal-legend",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--default"}),n.jsx("span",{children:"Not visited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--visiting"}),n.jsx("span",{children:"Current"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--visited"}),n.jsx("span",{children:"Visited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--search"}),n.jsx("span",{children:"Search path"})]})]}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Nodes:"}),n.jsx("span",{className:"info-value",children:s})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Height:"}),n.jsx("span",{className:"info-value",children:i})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Max:"}),n.jsx("span",{className:"info-value",children:tr})]})]}),s>=tr*.8&&s<tr&&n.jsxs("div",{className:"warning-box",children:[n.jsx(Tn,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Tree filling up!"})," ",s,"/",tr," nodes."]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:S,className:"btn btn-clear",disabled:V,children:"Clear Tree"})}),a&&n.jsx("div",{className:`message message-${a.includes("Error")||a.includes("error")||a.includes("not found")?"error":/success|complete|Inserted|Deleted|cleared|Found/i.test(a)?"success":a.includes("full")?"warning":"info"}`,children:a})]})}function T0({tree:e,currentNode:t,visitedNodes:r,searchPath:s,searchResult:i,isChallengeMode:a=!1,challengeClickedNodes:l=[],challengeWrongClick:o=null,onNodeClick:c=null}){const u=N=>{if(a)return N===o?{color:"#ef4444",glow:"drop-shadow(0 0 14px rgba(239,68,68,0.9))",radius:28,stroke:3,fontSize:14,fontWeight:"bold"}:l.includes(N)?{color:"#10b981",glow:"drop-shadow(0 0 10px rgba(16,185,129,0.8))",radius:28,stroke:3,fontSize:14,fontWeight:"bold"}:{color:"#6366f1",glow:"none",radius:25,stroke:2,fontSize:14,fontWeight:"normal"};const y=t===N,j=r.includes(N),f=s.includes(N),m=s.length>0&&s[s.length-1]===N;let x="#6366f1",S="none";return y?(x="#f59e0b",S="drop-shadow(0 0 12px #f59e0b) drop-shadow(0 0 20px #f59e0b)"):m?(x=i?"#10b981":"#ef4444",S=i?"drop-shadow(0 0 12px #10b981)":"drop-shadow(0 0 12px #ef4444)"):f?(x="#3b82f6",S="drop-shadow(0 0 8px #3b82f6)"):j&&(x="#10b981",S="drop-shadow(0 0 6px #10b981)"),{color:x,glow:S,radius:y||m?30:25,stroke:y||m?3:2,fontSize:y||m?16:14,fontWeight:y||m?"bold":"normal"}},d=(N,y,j,f,m)=>{if(!N)return[];const x=Math.pow(2,m-f)*50,S=u(N.value),v=[];if(N.left){const P=!a&&s.includes(N.value)&&s.includes(N.left.value);v.push(n.jsx("line",{x1:y,y1:j,x2:y-x,y2:j+100,stroke:P?"#3b82f6":"rgba(255,255,255,0.3)",strokeWidth:P?3:2},`l-${N.value}-l`)),v.push(...d(N.left,y-x,j+100,f+1,m))}if(N.right){const P=!a&&s.includes(N.value)&&s.includes(N.right.value);v.push(n.jsx("line",{x1:y,y1:j,x2:y+x,y2:j+100,stroke:P?"#3b82f6":"rgba(255,255,255,0.3)",strokeWidth:P?3:2},`l-${N.value}-r`)),v.push(...d(N.right,y+x,j+100,f+1,m))}return v.push(n.jsxs("g",{style:{filter:S.glow,transition:"all 0.3s ease",cursor:a?"pointer":"default"},onClick:a&&c?()=>c(N.value):void 0,children:[n.jsx("circle",{cx:y,cy:j,r:S.radius,fill:S.color,stroke:"white",strokeWidth:S.stroke,style:{transition:"all 0.3s ease"}}),n.jsx("text",{x:y,y:j,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:S.fontSize,fontWeight:S.fontWeight,children:N.value})]},`n-${N.value}-${y}`)),v};if(!e)return n.jsxs("div",{className:"tree-empty",children:[n.jsx("p",{children:"BST is empty. Insert some values!"}),n.jsx("p",{className:"tree-empty-hint",children:"Try: 50, 30, 70, 20, 40, 60, 80"})]});const h=Yl(e),g=(h+1)*100+50,b=Math.max(800,Math.pow(2,Math.max(h,1))*80);return n.jsx("svg",{width:b,height:g,className:"tree-svg",children:d(e,b/2,50,0,h)})}function _0({traversalType:e,traversalResult:t,isAnimating:r,traversalComplete:s}){if(!e||t.length===0&&!r)return null;const i=w0[e];return n.jsxs("div",{className:"traversal-output-panel",children:[n.jsxs("div",{style:{marginBottom:"1rem"},children:[n.jsxs("h3",{className:"traversal-title",children:[i==null?void 0:i.name,e==="inorder"&&n.jsx("span",{className:"sorted-indicator",children:"Returns Sorted Order!"}),r&&n.jsx("span",{className:"traversal-badge traversal-badge--running",children:"Running..."}),s&&n.jsx("span",{className:"traversal-badge traversal-badge--complete",children:"Complete"})]}),n.jsxs("p",{className:"traversal-order",children:[n.jsx("strong",{children:"Order:"})," ",i==null?void 0:i.order]}),n.jsx("p",{className:"traversal-description",children:i==null?void 0:i.description})]}),n.jsxs("div",{className:"traversal-output-box",children:[n.jsx("div",{className:"traversal-output-label",children:"Output Sequence:"}),n.jsx("div",{className:"traversal-sequence-container",children:t.length===0&&r?n.jsx("span",{style:{color:"var(--text-muted)",fontStyle:"italic"},children:"Traversing..."}):t.map((a,l)=>n.jsx("span",{className:`traversal-node ${l===t.length-1&&!s?"traversal-node--current":"traversal-node--complete"}`,children:a},l))})]}),s&&t.length>0&&n.jsxs("div",{className:"traversal-array-section",children:[n.jsx("div",{className:"traversal-array-label",children:"Array Output:"}),n.jsxs("code",{className:"traversal-array-output",children:["[",t.join(", "),"]"]}),e==="inorder"&&n.jsx("p",{className:"traversal-sorted-note",children:"Notice: The output is sorted! This is the BST property."}),n.jsxs("p",{className:"traversal-use-case",children:["Use case: ",i==null?void 0:i.useCase.join(" | ")]}),n.jsxs("div",{className:"traversal-complexity",children:[n.jsx("strong",{children:"Time:"})," ",n.jsx("code",{className:"complexity-value",children:i==null?void 0:i.complexity.time}),n.jsx("br",{}),n.jsx("strong",{children:"Space:"})," ",n.jsx("code",{className:"complexity-value",children:i==null?void 0:i.complexity.space})]})]})]})}function Jl(e){return e?[...Jl(e.left),e.value,...Jl(e.right)]:[]}function L0(){const[e,t]=p.useState(null),[r,s]=p.useState(0),[i,a]=p.useState(-1),[l,o]=p.useState(""),[c,u]=p.useState(""),[d,h]=p.useState(""),[g,b]=p.useState(""),[N,y]=p.useState([]),[j,f]=p.useState(null),[m,x]=p.useState([]),[S,v]=p.useState(!1),[P,C]=p.useState(null),[V,L]=p.useState([]),[_,q]=p.useState(null),[W,O]=p.useState(!1),[A,k]=p.useState(!1),[R,$]=p.useState(null),[T,E]=p.useState([]),[z,F]=p.useState("idle"),[B,M]=p.useState(null);p.useEffect(()=>{D()},[]);const D=async()=>{try{const ce=await(await fetch("/api/bst")).json();t(ce.tree),s(ce.size||0),a(ce.height!==void 0?ce.height:-1)}catch(J){console.error("Error loading BST:",J)}},I=J=>{b(J),setTimeout(()=>b(""),3e3)},w=()=>{y([]),f(null)},H=async()=>{if(!l.trim()){I("Please enter a number!");return}const J=Number(l);if(isNaN(J)){I("Please enter a valid number!");return}if(r>=tr){I(`Tree is full! Maximum size is ${tr} nodes.`);return}w(),G();try{const he=await(await fetch("/api/bst/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:J})})).json();if(he.error){I(he.error);return}t(he.tree),s(he.size||0),a(he.height!==void 0?he.height:-1),I(`Inserted ${J}`),o("")}catch{I("Error inserting node")}},Y=async()=>{if(!c.trim()){I("Please enter a number!");return}const J=Number(c);if(isNaN(J)){I("Please enter a valid number!");return}w(),G();try{const he=await(await fetch("/api/bst/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:J})})).json();if(he.error){I(he.error);return}t(he.tree),s(he.size||0),a(he.height!==void 0?he.height:-1),I(`Deleted ${J}`),u("")}catch{I("Error deleting node")}},Z=async()=>{if(!d.trim()){I("Please enter a number!");return}const J=Number(d);if(isNaN(J)){I("Please enter a valid number!");return}if(!e){I("Tree is empty!");return}G(),v(!0);const ce=S0(e,J);for(let he=0;he<ce.length;he++)y(ce.slice(0,he+1)),await new Promise(Ke=>setTimeout(Ke,500));try{const Ke=await(await fetch(`/api/bst/search?value=${J}`)).json();f(Ke.found),I(Ke.found?`Found ${J}!`:`${J} not found in BST`)}catch{I("Error searching")}v(!1),h("")},ne=async()=>{try{await fetch("/api/bst/clear",{method:"POST"}),t(null),s(0),a(-1),G(),w(),I("BST cleared!")}catch{I("Error clearing tree")}},U=async J=>{if(!e){I("Tree is empty! Insert some nodes first.");return}w(),v(!0),x([]),C(null),L([]),q(J),O(!1);try{const Ke=(await(await fetch(`/api/bst/${J}`)).json()).traversal||[];if(Ke.length===0){I("Tree is empty!"),v(!1);return}for(let _r=0;_r<Ke.length;_r++)C(Ke[_r]),await new Promise(vt=>setTimeout(vt,600)),L(vt=>[...vt,Ke[_r]]),x(vt=>[...vt,Ke[_r]]),await new Promise(vt=>setTimeout(vt,200));C(null),O(!0),v(!1);const Ls=J.charAt(0).toUpperCase()+J.slice(1);I(`${Ls} traversal complete!${J==="inorder"?" (Sorted!)":""}`)}catch(ce){console.error("Traversal error:",ce),I("Error performing traversal"),v(!1)}},G=()=>{x([]),C(null),L([]),q(null),O(!1)},le=async()=>{if(!e||r<2){I("Insert at least 2 nodes before starting a challenge!");return}k(!0),F("loading"),$(null),E([]),M(null),G(),w();try{const J=await fetch("/api/generate-challenge",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tree_values:Jl(e),root_value:e.value,tree_dict:e})}),ce=await J.json();if(!J.ok){I(ce.error||"Failed to generate challenge"),k(!1),F("idle");return}$(ce),F("active")}catch{I("Failed to generate challenge — check your connection"),k(!1),F("idle")}},re=J=>{if(z!=="active"||!R)return;const{type:ce,expected_steps:he}=R;if(ce==="search"||ce==="inorder_start"){const Ke=he[T.length];if(J===Ke){const Ls=[...T,J];E(Ls),Ls.length===he.length&&F("success")}else M(J),setTimeout(()=>{M(null),F("failed")},600)}else if(ce==="identify_leaves"){if(T.includes(J))return;if(he.includes(J)){const Ke=[...T,J];E(Ke),Ke.length===he.length&&F("success")}else M(J),setTimeout(()=>{M(null),F("failed")},600)}},we=()=>{k(!1),$(null),E([]),F("idle"),M(null)},oe=()=>{E([]),M(null),F("active")},vn=()=>le();return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsx("div",{className:"intro-left",children:n.jsx(Tr,{dataStructure:"bst"})}),n.jsx(ye,{context:"Binary Search Tree (BST) data structure, search, insert, delete operations, and traversals"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsx(C0,{insertValue:l,deleteValue:c,searchValue:d,size:r,height:i,message:g,tree:e,isAnimating:S,visitedNodes:V,searchPath:N,searchResult:j,isChallengeMode:A,challengeStatus:z,onInsertValueChange:o,onDeleteValueChange:u,onSearchValueChange:h,onInsert:H,onDelete:Y,onSearch:Z,onTraversal:U,onClear:ne,onResetTraversal:()=>{G(),w()},onStartChallenge:le}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"BST Visualization"}),n.jsxs("p",{className:"bst-property-reminder",children:["Remember: ",n.jsxs("code",{children:["Left ","<"," Parent ","<"," Right"]})]}),A&&n.jsx(k0,{challenge:R,userClicks:T,status:z,onExit:we,onRetry:oe,onNewChallenge:vn}),n.jsx("div",{className:"tree-container",children:n.jsx(T0,{tree:e,currentNode:P,visitedNodes:V,searchPath:N,searchResult:j,isChallengeMode:A,challengeClickedNodes:T,challengeWrongClick:B,onNodeClick:re})}),n.jsx(_0,{traversalType:_,traversalResult:m,isAnimating:S,traversalComplete:W})]})]}),n.jsx(ke,{dataStructure:"bst"})]})}const rr=7,E0={inorder:{name:"Inorder Traversal",order:"Left -> Root -> Right",description:"Returns elements in SORTED order.",useCase:["Get sorted elements","Validate BST property"],complexity:{time:"O(n)",space:"O(h)"}},preorder:{name:"Preorder Traversal",order:"Root -> Left -> Right",description:"Process root first. Useful for copying tree structure.",useCase:["Copy tree structure","Serialize AVL"],complexity:{time:"O(n)",space:"O(h)"}},postorder:{name:"Postorder Traversal",order:"Left -> Right -> Root",description:"Process children before root.",useCase:["Delete tree safely","Calculate subtree info"],complexity:{time:"O(n)",space:"O(h)"}},levelorder:{name:"Level Order Traversal",order:"Level by Level (BFS)",description:"Visit nodes level by level using a queue.",useCase:["Level-wise printing","Find width"],complexity:{time:"O(n)",space:"O(w)"}}},Zl=(e,t=0)=>e?Math.max(Zl(e.left,t+1),Zl(e.right,t+1)):t-1,O0=(e,t)=>{const r=[];let s=e;for(;s&&(r.push(s.value),s.value!==t);)t<s.value?s=s.left:s=s.right;return r};function R0({insertValue:e,deleteValue:t,searchValue:r,size:s,height:i,message:a,tree:l,isAnimating:o,visitedNodes:c,searchPath:u,searchResult:d,onInsertValueChange:h,onDeleteValueChange:g,onSearchValueChange:b,onInsert:N,onDelete:y,onSearch:j,onTraversal:f,onClear:m,onResetTraversal:x}){const S=(v,P)=>{const C=v.target.value;(C===""||C==="-"||/^-?\d*\.?\d*$/.test(C))&&P(C)};return n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"AVL Tree"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"insertValue",children:"Insert Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"insertValue",value:e,onChange:v=>S(v,h),onKeyDown:v=>v.key==="Enter"&&N(),placeholder:"Enter a number",disabled:o}),n.jsx("button",{onClick:N,className:"btn btn-insert",disabled:o,children:"Insert"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"searchValue",children:"Search Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"searchValue",value:r,onChange:v=>S(v,b),onKeyDown:v=>v.key==="Enter"&&j(),placeholder:"Enter a number",disabled:o}),n.jsxs("button",{onClick:j,className:"btn btn-search",disabled:o||!l,children:[n.jsx(At,{size:16})," Search"]})]}),u.length>0&&n.jsxs("div",{className:"search-path-display",children:[n.jsx("span",{className:"search-path-label",children:"Path:"}),n.jsx("div",{className:"search-path-nodes",children:u.map((v,P)=>n.jsxs(Ce.Fragment,{children:[n.jsx("span",{className:`search-path-node ${P===u.length-1?d?"found":"not-found":""}`,children:v}),P<u.length-1&&n.jsx(xe,{size:14,className:"search-path-arrow"})]},P))})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"deleteValue",children:"Delete Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"deleteValue",value:t,onChange:v=>S(v,g),onKeyDown:v=>v.key==="Enter"&&y(),placeholder:"Enter a number",disabled:o}),n.jsx("button",{onClick:y,className:"btn btn-delete",disabled:o,children:"Delete"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Traversals"}),n.jsx("div",{className:"btn-group",children:["inorder","preorder","postorder","levelorder"].map(v=>n.jsx("button",{onClick:()=>f(v),className:"btn btn-traversal",disabled:o||!l,children:v==="levelorder"?"Level Order":v.charAt(0).toUpperCase()+v.slice(1)},v))}),c.length>0&&!o&&n.jsx("button",{onClick:x,className:"btn btn-secondary",style:{marginTop:"0.5rem",width:"100%"},children:"Reset Colors"})]}),n.jsxs("div",{className:"traversal-legend",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--default"}),n.jsx("span",{children:"Not visited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--visiting"}),n.jsx("span",{children:"Current"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--visited"}),n.jsx("span",{children:"Visited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--search"}),n.jsx("span",{children:"Search path"})]})]}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Nodes:"}),n.jsx("span",{className:"info-value",children:s})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Height:"}),n.jsx("span",{className:"info-value",children:i})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Max:"}),n.jsx("span",{className:"info-value",children:rr})]})]}),s>=rr*.8&&s<rr&&n.jsxs("div",{className:"warning-box",children:[n.jsx(Tn,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Tree filling up!"})," ",s,"/",rr," nodes."]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:m,className:"btn btn-clear",disabled:o,children:"Clear Tree"})}),a&&n.jsx("div",{className:`message message-${a.includes("Error")||a.includes("error")||a.includes("not found")?"error":/success|complete|Inserted|Deleted|cleared|Found|rebalanced/i.test(a)?"success":a.includes("full")?"warning":"info"}`,children:a})]})}function P0({tree:e,currentNode:t,visitedNodes:r,searchPath:s,searchResult:i}){const a=d=>{const h=t===d,g=r.includes(d),b=s.includes(d),N=s.length>0&&s[s.length-1]===d;let y="#8b5cf6",j="none";return h?(y="#f59e0b",j="drop-shadow(0 0 12px #f59e0b) drop-shadow(0 0 20px #f59e0b)"):N?(y=i?"#10b981":"#ef4444",j=i?"drop-shadow(0 0 12px #10b981)":"drop-shadow(0 0 12px #ef4444)"):b?(y="#3b82f6",j="drop-shadow(0 0 8px #3b82f6)"):g&&(y="#10b981",j="drop-shadow(0 0 6px #10b981)"),{color:y,glow:j,radius:h||N?30:25,stroke:h||N?3:2,fontSize:h||N?16:14,fontWeight:h||N?"bold":"normal"}},l=(d,h,g,b,N)=>{if(!d)return[];const y=Math.pow(2,N-b)*50,j=a(d.value),f=[];if(d.left){const m=s.includes(d.value)&&s.includes(d.left.value);f.push(n.jsx("line",{x1:h,y1:g,x2:h-y,y2:g+100,stroke:m?"#3b82f6":"rgba(255,255,255,0.3)",strokeWidth:m?3:2},`l-${d.value}-l`)),f.push(...l(d.left,h-y,g+100,b+1,N))}if(d.right){const m=s.includes(d.value)&&s.includes(d.right.value);f.push(n.jsx("line",{x1:h,y1:g,x2:h+y,y2:g+100,stroke:m?"#3b82f6":"rgba(255,255,255,0.3)",strokeWidth:m?3:2},`l-${d.value}-r`)),f.push(...l(d.right,h+y,g+100,b+1,N))}return f.push(n.jsxs("g",{style:{filter:j.glow,transition:"all 0.3s ease"},children:[n.jsx("circle",{cx:h,cy:g,r:j.radius,fill:j.color,stroke:"white",strokeWidth:j.stroke,style:{transition:"all 0.3s ease"}}),n.jsx("text",{x:h,y:g,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:j.fontSize,fontWeight:j.fontWeight,children:d.value}),d.balance!==void 0&&n.jsxs("g",{children:[n.jsx("circle",{cx:h+20,cy:g-20,r:10,fill:Math.abs(d.balance)<=1?"#10b981":"#ef4444"}),n.jsx("text",{x:h+20,y:g-20,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:10,fontWeight:"bold",children:d.balance})]})]},`n-${d.value}-${h}`)),f};if(!e)return n.jsxs("div",{className:"tree-empty",children:[n.jsx("p",{children:"AVL Tree is empty. Insert some values!"}),n.jsx("p",{className:"tree-empty-hint",children:"Try: 30, 20, 40, 10 (watch it balance!)"})]});const o=Zl(e),c=(o+1)*100+50,u=Math.max(800,Math.pow(2,Math.max(o,1))*80);return n.jsx("svg",{width:u,height:c,className:"tree-svg",children:l(e,u/2,50,0,o)})}function I0({traversalType:e,traversalResult:t,isAnimating:r,traversalComplete:s}){if(!e||t.length===0&&!r)return null;const i=E0[e];return n.jsxs("div",{className:"traversal-output-panel",children:[n.jsxs("div",{style:{marginBottom:"1rem"},children:[n.jsxs("h3",{className:"traversal-title",children:[i==null?void 0:i.name,r&&n.jsx("span",{className:"traversal-badge traversal-badge--running",children:"Running..."}),s&&n.jsx("span",{className:"traversal-badge traversal-badge--complete",children:"Complete"})]}),n.jsxs("p",{className:"traversal-order",children:[n.jsx("strong",{children:"Order:"})," ",i==null?void 0:i.order]}),n.jsx("p",{className:"traversal-description",children:i==null?void 0:i.description})]}),n.jsxs("div",{className:"traversal-output-box",children:[n.jsx("div",{className:"traversal-output-label",children:"Output Sequence:"}),n.jsx("div",{className:"traversal-sequence-container",children:t.length===0&&r?n.jsx("span",{style:{color:"var(--text-muted)",fontStyle:"italic"},children:"Traversing..."}):t.map((a,l)=>n.jsx("span",{className:`traversal-node ${l===t.length-1&&!s?"traversal-node--current":"traversal-node--complete"}`,children:a},l))})]}),s&&t.length>0&&n.jsxs("div",{className:"traversal-array-section",children:[n.jsx("div",{className:"traversal-array-label",children:"Array Output:"}),n.jsxs("code",{className:"traversal-array-output",children:["[",t.join(", "),"]"]}),n.jsxs("p",{className:"traversal-use-case",children:["Use case: ",i==null?void 0:i.useCase.join(" | ")]}),n.jsxs("div",{className:"traversal-complexity",children:[n.jsx("strong",{children:"Time:"})," ",n.jsx("code",{className:"complexity-value",children:i==null?void 0:i.complexity.time}),n.jsx("br",{}),n.jsx("strong",{children:"Space:"})," ",n.jsx("code",{className:"complexity-value",children:i==null?void 0:i.complexity.space})]})]})]})}function z0(){const[e,t]=p.useState(null),[r,s]=p.useState(0),[i,a]=p.useState(-1),[l,o]=p.useState(""),[c,u]=p.useState(""),[d,h]=p.useState(""),[g,b]=p.useState(""),[N,y]=p.useState([]),[j,f]=p.useState(null),[m,x]=p.useState([]),[S,v]=p.useState(!1),[P,C]=p.useState(null),[V,L]=p.useState([]),[_,q]=p.useState(null),[W,O]=p.useState(!1);p.useEffect(()=>{A()},[]);const A=async()=>{try{const D=await(await fetch("/api/avl")).json();t(D.tree),s(D.size||0),a(D.height!==void 0?D.height:-1)}catch(M){console.error("Error loading AVL:",M)}},k=M=>{b(M),setTimeout(()=>b(""),3e3)},R=()=>{y([]),f(null)},$=async()=>{if(!l.trim()){k("Please enter a number!");return}const M=Number(l);if(isNaN(M)){k("Please enter a valid number!");return}if(r>=rr){k(`Tree is full! Maximum size is ${rr} nodes.`);return}R(),B();try{const I=await(await fetch("/api/avl/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:M})})).json();if(I.error){k(I.error);return}t(I.tree),s(I.size||0),a(I.height!==void 0?I.height:-1),k(`Inserted ${M} (tree rebalanced)`),o("")}catch{k("Error inserting node")}},T=async()=>{if(!c.trim()){k("Please enter a number!");return}const M=Number(c);if(isNaN(M)){k("Please enter a valid number!");return}R(),B();try{const I=await(await fetch("/api/avl/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:M})})).json();if(I.error){k(I.error);return}t(I.tree),s(I.size||0),a(I.height!==void 0?I.height:-1),k(`Deleted ${M} (tree rebalanced)`),u("")}catch{k("Error deleting node")}},E=async()=>{if(!d.trim()){k("Please enter a number!");return}const M=Number(d);if(isNaN(M)){k("Please enter a valid number!");return}if(!e){k("Tree is empty!");return}B(),v(!0);const D=O0(e,M);for(let I=0;I<D.length;I++)y(D.slice(0,I+1)),await new Promise(w=>setTimeout(w,500));try{const w=await(await fetch(`/api/avl/search?value=${M}`)).json();f(w.found),w.found?k(`Found ${M}!`):k(`${M} not found in AVL Tree`)}catch{k("Error searching")}v(!1),h("")},z=async()=>{try{await fetch("/api/avl/clear",{method:"POST"}),t(null),s(0),a(-1),B(),R(),k("AVL Tree cleared!")}catch{k("Error clearing tree")}},F=async M=>{if(!e){k("Tree is empty! Insert some nodes first.");return}R(),v(!0),x([]),C(null),L([]),q(M),O(!1);try{const w=(await(await fetch(`/api/avl/${M}`)).json()).traversal||[];if(w.length===0){k("Tree is empty!"),v(!1);return}for(let Y=0;Y<w.length;Y++)C(w[Y]),await new Promise(Z=>setTimeout(Z,600)),L(Z=>[...Z,w[Y]]),x(Z=>[...Z,w[Y]]),await new Promise(Z=>setTimeout(Z,200));C(null),O(!0),v(!1);const H=M.charAt(0).toUpperCase()+M.slice(1);k(`${H} traversal complete!`)}catch(D){console.error("Traversal error:",D),k("Error performing traversal"),v(!1)}},B=()=>{x([]),C(null),L([]),q(null),O(!1)};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsx("div",{className:"intro-left",children:n.jsx(Tr,{dataStructure:"avl"})}),n.jsx(ye,{context:"AVL Tree data structure, self-balancing BST, rotations, balance factors, and O(log n) guaranteed operations"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsx(R0,{insertValue:l,deleteValue:c,searchValue:d,size:r,height:i,message:g,tree:e,isAnimating:S,visitedNodes:V,searchPath:N,searchResult:j,onInsertValueChange:o,onDeleteValueChange:u,onSearchValueChange:h,onInsert:$,onDelete:T,onSearch:E,onTraversal:F,onClear:z,onResetTraversal:()=>{B(),R()}}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"AVL Tree Visualization"}),n.jsxs("p",{className:"bst-property-reminder",children:["Self-balancing: ",n.jsx("code",{children:"|Balance Factor| <= 1"})," for all nodes"]}),n.jsx("div",{className:"tree-container",children:n.jsx(P0,{tree:e,currentNode:P,visitedNodes:V,searchPath:N,searchResult:j})}),n.jsx(I0,{traversalType:_,traversalResult:m,isAnimating:S,traversalComplete:W})]})]}),n.jsx(ke,{dataStructure:"avl"})]})}const sr=7,M0={inorder:{name:"Inorder Traversal",order:"Left -> Root -> Right",description:"Returns elements in SORTED order.",useCase:["Get sorted elements","Validate BST property"],complexity:{time:"O(n)",space:"O(h)"}},preorder:{name:"Preorder Traversal",order:"Root -> Left -> Right",description:"Process root first. Root shows most recently accessed!",useCase:["See access pattern","Serialize structure"],complexity:{time:"O(n)",space:"O(h)"}},postorder:{name:"Postorder Traversal",order:"Left -> Right -> Root",description:"Process children before root.",useCase:["Delete tree safely","Calculate subtree info"],complexity:{time:"O(n)",space:"O(h)"}},levelorder:{name:"Level Order Traversal",order:"Level by Level (BFS)",description:"Visit nodes level by level.",useCase:["Level-wise printing","Find width"],complexity:{time:"O(n)",space:"O(w)"}}},eo=(e,t=0)=>e?Math.max(eo(e.left,t+1),eo(e.right,t+1)):t-1;function A0({insertValue:e,deleteValue:t,searchValue:r,size:s,height:i,message:a,tree:l,isAnimating:o,visitedNodes:c,lastSplayedValue:u,onInsertValueChange:d,onDeleteValueChange:h,onSearchValueChange:g,onInsert:b,onDelete:N,onSearch:y,onTraversal:j,onClear:f,onResetTraversal:m}){const x=(S,v)=>{const P=S.target.value;(P===""||P==="-"||/^-?\d*\.?\d*$/.test(P))&&v(P)};return n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Splay Tree"}),n.jsxs("div",{className:"splay-info-box",children:[n.jsx("strong",{children:"Key Feature:"})," Accessed nodes move to root!"]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"insertValue",children:"Insert Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"insertValue",value:e,onChange:S=>x(S,d),onKeyDown:S=>S.key==="Enter"&&b(),placeholder:"Enter a number",disabled:o}),n.jsx("button",{onClick:b,className:"btn btn-insert",disabled:o,children:"Insert"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"searchValue",children:"Search Value (Splays to Root!)"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"searchValue",value:r,onChange:S=>x(S,g),onKeyDown:S=>S.key==="Enter"&&y(),placeholder:"Enter a number",disabled:o}),n.jsxs("button",{onClick:y,className:"btn btn-search",disabled:o||!l,children:[n.jsx(At,{size:16})," Search"]})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"deleteValue",children:"Delete Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"deleteValue",value:t,onChange:S=>x(S,h),onKeyDown:S=>S.key==="Enter"&&N(),placeholder:"Enter a number",disabled:o}),n.jsx("button",{onClick:N,className:"btn btn-delete",disabled:o,children:"Delete"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Traversals"}),n.jsx("div",{className:"btn-group",children:["inorder","preorder","postorder","levelorder"].map(S=>n.jsx("button",{onClick:()=>j(S),className:"btn btn-traversal",disabled:o||!l,children:S==="levelorder"?"Level Order":S.charAt(0).toUpperCase()+S.slice(1)},S))}),c.length>0&&!o&&n.jsx("button",{onClick:m,className:"btn btn-secondary",style:{marginTop:"0.5rem",width:"100%"},children:"Reset Colors"})]}),n.jsxs("div",{className:"traversal-legend",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--default"}),n.jsx("span",{children:"Not visited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--visiting"}),n.jsx("span",{children:"Current"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--visited"}),n.jsx("span",{children:"Visited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot",style:{background:"#ec4899"}}),n.jsx("span",{children:"Root (Splayed)"})]})]}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Nodes:"}),n.jsx("span",{className:"info-value",children:s})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Height:"}),n.jsx("span",{className:"info-value",children:i})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Max:"}),n.jsx("span",{className:"info-value",children:sr})]})]}),u!==null&&n.jsxs("div",{className:"splay-result-box",children:[n.jsx("strong",{children:"Root:"})," ",u," (most recently accessed)"]}),s>=sr*.8&&s<sr&&n.jsxs("div",{className:"warning-box",children:[n.jsx(Tn,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Tree filling up!"})," ",s,"/",sr," nodes."]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:f,className:"btn btn-clear",disabled:o,children:"Clear Tree"})}),a&&n.jsx("div",{className:`message message-${a.includes("Error")||a.includes("error")||a.includes("not found")?"error":/success|complete|Inserted|Deleted|cleared|Found|root/i.test(a)?"success":a.includes("full")?"warning":"info"}`,children:a})]})}function F0({tree:e,currentNode:t,visitedNodes:r,lastSplayedValue:s}){const i=(u,d)=>{const h=t===u,g=r.includes(u),b=d&&s===u;let N="#06b6d4",y="none";return h?(N="#f59e0b",y="drop-shadow(0 0 12px #f59e0b) drop-shadow(0 0 20px #f59e0b)"):b?(N="#ec4899",y="drop-shadow(0 0 15px #ec4899) drop-shadow(0 0 25px #ec4899)"):d?(N="#8b5cf6",y="drop-shadow(0 0 8px #8b5cf6)"):g&&(N="#10b981",y="drop-shadow(0 0 6px #10b981)"),{color:N,glow:y,radius:h||b?30:d?28:25,stroke:h||b?3:2,fontSize:h||b?16:14,fontWeight:h||b||d?"bold":"normal"}},a=(u,d,h,g,b,N=!1)=>{if(!u)return[];const y=Math.pow(2,b-g)*50,j=i(u.value,N),f=[];return u.left&&(f.push(n.jsx("line",{x1:d,y1:h,x2:d-y,y2:h+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:2},`l-${u.value}-l`)),f.push(...a(u.left,d-y,h+100,g+1,b,!1))),u.right&&(f.push(n.jsx("line",{x1:d,y1:h,x2:d+y,y2:h+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:2},`l-${u.value}-r`)),f.push(...a(u.right,d+y,h+100,g+1,b,!1))),f.push(n.jsxs("g",{style:{filter:j.glow,transition:"all 0.3s ease"},children:[n.jsx("circle",{cx:d,cy:h,r:j.radius,fill:j.color,stroke:"white",strokeWidth:j.stroke,style:{transition:"all 0.3s ease"}}),n.jsx("text",{x:d,y:h,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:j.fontSize,fontWeight:j.fontWeight,children:u.value}),N&&n.jsx("text",{x:d,y:h+j.radius+15,textAnchor:"middle",fill:"#ec4899",fontSize:10,fontWeight:"bold",children:"ROOT"})]},`n-${u.value}-${d}`)),f};if(!e)return n.jsxs("div",{className:"tree-empty",children:[n.jsx("p",{children:"Splay Tree is empty. Insert some values!"}),n.jsx("p",{className:"tree-empty-hint",children:"Try inserting: 50, 30, 70, then search for 30!"})]});const l=eo(e),o=(l+1)*100+70,c=Math.max(800,Math.pow(2,Math.max(l,1))*80);return n.jsx("svg",{width:c,height:o,className:"tree-svg",children:a(e,c/2,50,0,l,!0)})}function V0({traversalType:e,traversalResult:t,isAnimating:r,traversalComplete:s}){if(!e||t.length===0&&!r)return null;const i=M0[e];return n.jsxs("div",{className:"traversal-output-panel",children:[n.jsxs("div",{style:{marginBottom:"1rem"},children:[n.jsxs("h3",{className:"traversal-title",children:[i==null?void 0:i.name,r&&n.jsx("span",{className:"traversal-badge traversal-badge--running",children:"Running..."}),s&&n.jsx("span",{className:"traversal-badge traversal-badge--complete",children:"Complete"})]}),n.jsxs("p",{className:"traversal-order",children:[n.jsx("strong",{children:"Order:"})," ",i==null?void 0:i.order]}),n.jsx("p",{className:"traversal-description",children:i==null?void 0:i.description})]}),n.jsxs("div",{className:"traversal-output-box",children:[n.jsx("div",{className:"traversal-output-label",children:"Output Sequence:"}),n.jsx("div",{className:"traversal-sequence-container",children:t.length===0&&r?n.jsx("span",{style:{color:"var(--text-muted)",fontStyle:"italic"},children:"Traversing..."}):t.map((a,l)=>n.jsx("span",{className:`traversal-node ${l===t.length-1&&!s?"traversal-node--current":"traversal-node--complete"}`,children:a},l))})]}),s&&t.length>0&&n.jsxs("div",{className:"traversal-array-section",children:[n.jsx("div",{className:"traversal-array-label",children:"Array Output:"}),n.jsxs("code",{className:"traversal-array-output",children:["[",t.join(", "),"]"]}),e==="preorder"&&n.jsx("p",{className:"traversal-sorted-note",children:"Note: First element is the root (most recently accessed)!"}),n.jsxs("p",{className:"traversal-use-case",children:["Use case: ",i==null?void 0:i.useCase.join(" | ")]}),n.jsxs("div",{className:"traversal-complexity",children:[n.jsx("strong",{children:"Time:"})," ",n.jsx("code",{className:"complexity-value",children:i==null?void 0:i.complexity.time}),n.jsx("br",{}),n.jsx("strong",{children:"Space:"})," ",n.jsx("code",{className:"complexity-value",children:i==null?void 0:i.complexity.space})]})]})]})}function D0(){const[e,t]=p.useState(null),[r,s]=p.useState(0),[i,a]=p.useState(-1),[l,o]=p.useState(""),[c,u]=p.useState(""),[d,h]=p.useState(""),[g,b]=p.useState(""),[N,y]=p.useState(null),[j,f]=p.useState([]),[m,x]=p.useState(!1),[S,v]=p.useState(null),[P,C]=p.useState([]),[V,L]=p.useState(null),[_,q]=p.useState(!1);p.useEffect(()=>{W()},[]);const W=async()=>{try{const F=await(await fetch("/api/splay")).json();t(F.tree),s(F.size||0),a(F.height!==void 0?F.height:-1)}catch(z){console.error("Error loading Splay Tree:",z)}},O=z=>{b(z),setTimeout(()=>b(""),3e3)},A=async()=>{if(!l.trim()){O("Please enter a number!");return}const z=Number(l);if(isNaN(z)){O("Please enter a valid number!");return}if(r>=sr){O(`Tree is full! Maximum size is ${sr} nodes.`);return}E(),y(null);try{const B=await(await fetch("/api/splay/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:z})})).json();if(B.error){O(B.error);return}t(B.tree),s(B.size||0),a(B.height!==void 0?B.height:-1),y(z),O(`Inserted ${z} (now at root!)`),o("")}catch{O("Error inserting node")}},k=async()=>{if(!c.trim()){O("Please enter a number!");return}const z=Number(c);if(isNaN(z)){O("Please enter a valid number!");return}E(),y(null);try{const B=await(await fetch("/api/splay/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:z})})).json();if(B.error){O(B.error);return}t(B.tree),s(B.size||0),a(B.height!==void 0?B.height:-1),O(`Deleted ${z}`),u("")}catch{O("Error deleting node")}},R=async()=>{if(!d.trim()){O("Please enter a number!");return}const z=Number(d);if(isNaN(z)){O("Please enter a valid number!");return}if(!e){O("Tree is empty!");return}E(),x(!0);try{const B=await(await fetch(`/api/splay/search?value=${z}`)).json();B.tree&&t(B.tree),B.found?(y(z),O(`Found ${z}! (splayed to root)`)):(y(null),O(`${z} not found in Splay Tree`)),await W()}catch{O("Error searching")}x(!1),h("")},$=async()=>{try{await fetch("/api/splay/clear",{method:"POST"}),t(null),s(0),a(-1),E(),y(null),O("Splay Tree cleared!")}catch{O("Error clearing tree")}},T=async z=>{if(!e){O("Tree is empty! Insert some nodes first.");return}y(null),x(!0),f([]),v(null),C([]),L(z),q(!1);try{const M=(await(await fetch(`/api/splay/${z}`)).json()).traversal||[];if(M.length===0){O("Tree is empty!"),x(!1);return}for(let I=0;I<M.length;I++)v(M[I]),await new Promise(w=>setTimeout(w,600)),C(w=>[...w,M[I]]),f(w=>[...w,M[I]]),await new Promise(w=>setTimeout(w,200));v(null),q(!0),x(!1);const D=z.charAt(0).toUpperCase()+z.slice(1);O(`${D} traversal complete!`)}catch(F){console.error("Traversal error:",F),O("Error performing traversal"),x(!1)}},E=()=>{f([]),v(null),C([]),L(null),q(!1)};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsx("div",{className:"intro-left",children:n.jsx(Tr,{dataStructure:"splay"})}),n.jsx(ye,{context:"Splay Tree data structure, self-adjusting BST, splay operations, zig-zig, zig-zag rotations, amortized O(log n)"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsx(A0,{insertValue:l,deleteValue:c,searchValue:d,size:r,height:i,message:g,tree:e,isAnimating:m,visitedNodes:P,lastSplayedValue:N,onInsertValueChange:o,onDeleteValueChange:u,onSearchValueChange:h,onInsert:A,onDelete:k,onSearch:R,onTraversal:T,onClear:$,onResetTraversal:()=>{E(),y(null)}}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Splay Tree Visualization"}),n.jsxs("p",{className:"bst-property-reminder",children:["Self-adjusting: ",n.jsx("code",{children:"Recently accessed = Root"})]}),n.jsx("div",{className:"tree-container",children:n.jsx(F0,{tree:e,currentNode:S,visitedNodes:P,lastSplayedValue:N})}),n.jsx(V0,{traversalType:V,traversalResult:j,isAnimating:m,traversalComplete:_})]})]}),n.jsx(ke,{dataStructure:"splay"})]})}const ir=15,$0={inorder:{name:"Inorder Traversal",order:"Left -> Root -> Right",description:"Returns elements in SORTED order (BST property preserved in treap).",useCase:["Get sorted elements","Validate BST property","Range queries"],complexity:{time:"O(n)",space:"O(h)"}},preorder:{name:"Preorder Traversal",order:"Root -> Left -> Right",description:"Process root first. Shows the priority-based structure of the treap.",useCase:["Copy tree structure","Serialize treap","Prefix expressions"],complexity:{time:"O(n)",space:"O(h)"}},postorder:{name:"Postorder Traversal",order:"Left -> Right -> Root",description:"Process children before root. Useful for deletion operations.",useCase:["Delete tree safely","Calculate subtree sizes","Postfix expressions"],complexity:{time:"O(n)",space:"O(h)"}},levelorder:{name:"Level Order Traversal",order:"Level by Level (BFS)",description:"Visit nodes level by level. Reveals the heap-ordered priority structure.",useCase:["Level-wise printing","Verify heap property","Serialize for reconstruction"],complexity:{time:"O(n)",space:"O(w)"}}},no=(e,t=0)=>e?Math.max(no(e.left,t+1),no(e.right,t+1)):t-1,B0=(e,t)=>{const r=[];let s=e;for(;s&&(r.push(s.value),s.value!==t);)t<s.value?s=s.left:s=s.right;return r},q0=e=>{const r=40+e/100*60,s=55-e/100*15;return`hsl(260, ${r}%, ${s}%)`};function H0({insertValue:e,deleteValue:t,searchValue:r,size:s,height:i,message:a,tree:l,isAnimating:o,visitedNodes:c,searchPath:u,searchResult:d,onInsertValueChange:h,onDeleteValueChange:g,onSearchValueChange:b,onInsert:N,onDelete:y,onSearch:j,onTraversal:f,onClear:m,onResetTraversal:x}){const S=(v,P)=>{const C=v.target.value;(C===""||C==="-"||/^-?\d*\.?\d*$/.test(C))&&P(C)};return n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Treap"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"insertValue",children:"Insert Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"insertValue",value:e,onChange:v=>S(v,h),onKeyDown:v=>v.key==="Enter"&&N(),placeholder:"Enter a number",disabled:o}),n.jsx("button",{onClick:N,className:"btn btn-insert",disabled:o,children:"Insert"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"searchValue",children:"Search Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"searchValue",value:r,onChange:v=>S(v,b),onKeyDown:v=>v.key==="Enter"&&j(),placeholder:"Enter a number",disabled:o}),n.jsxs("button",{onClick:j,className:"btn btn-search",disabled:o||!l,children:[n.jsx(At,{size:16})," Search"]})]}),u.length>0&&n.jsxs("div",{className:"search-path-display",children:[n.jsx("span",{className:"search-path-label",children:"Path:"}),n.jsx("div",{className:"search-path-nodes",children:u.map((v,P)=>n.jsxs(Ce.Fragment,{children:[n.jsx("span",{className:`search-path-node ${P===u.length-1?d?"found":"not-found":""}`,children:v}),P<u.length-1&&n.jsx(xe,{size:14,className:"search-path-arrow"})]},P))})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"deleteValue",children:"Delete Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"deleteValue",value:t,onChange:v=>S(v,g),onKeyDown:v=>v.key==="Enter"&&y(),placeholder:"Enter a number",disabled:o}),n.jsx("button",{onClick:y,className:"btn btn-delete",disabled:o,children:"Delete"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Traversals"}),n.jsx("div",{className:"btn-group",children:["inorder","preorder","postorder","levelorder"].map(v=>n.jsxs("button",{onClick:()=>f(v),className:`btn btn-traversal ${v==="inorder"?"btn-traversal-primary":""}`,disabled:o||!l,title:v==="inorder"?"Returns sorted order!":"",children:[v==="levelorder"?"Level Order":v.charAt(0).toUpperCase()+v.slice(1),v==="inorder"&&n.jsx("span",{className:"sorted-badge",children:"Sorted!"})]},v))}),c.length>0&&!o&&n.jsx("button",{onClick:x,className:"btn btn-secondary",style:{marginTop:"0.5rem",width:"100%"},children:"Reset Colors"})]}),n.jsxs("div",{className:"traversal-legend",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--default"}),n.jsx("span",{children:"Not visited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--visiting"}),n.jsx("span",{children:"Current"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--visited"}),n.jsx("span",{children:"Visited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--search"}),n.jsx("span",{children:"Search path"})]})]}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Nodes:"}),n.jsx("span",{className:"info-value",children:s})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Height:"}),n.jsx("span",{className:"info-value",children:i})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Max:"}),n.jsx("span",{className:"info-value",children:ir})]})]}),s>=ir*.8&&s<ir&&n.jsxs("div",{className:"warning-box",children:[n.jsx(Tn,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Tree filling up!"})," ",s,"/",ir," nodes."]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:m,className:"btn btn-clear",disabled:o,children:"Clear Tree"})}),a&&n.jsx("div",{className:`message message-${a.includes("Error")||a.includes("error")||a.includes("not found")||a.includes("already exists")?"error":/success|complete|Inserted|Deleted|cleared|Found/i.test(a)?"success":a.includes("full")?"warning":"info"}`,children:a})]})}function U0({tree:e,currentNode:t,visitedNodes:r,searchPath:s,searchResult:i}){const a=d=>{const h=t===d,g=r.includes(d),b=s.includes(d),N=s.length>0&&s[s.length-1]===d;let y="#6366f1",j="none";return h?(y="#f59e0b",j="drop-shadow(0 0 12px #f59e0b) drop-shadow(0 0 20px #f59e0b)"):N?(y=i?"#10b981":"#ef4444",j=i?"drop-shadow(0 0 12px #10b981)":"drop-shadow(0 0 12px #ef4444)"):b?(y="#3b82f6",j="drop-shadow(0 0 8px #3b82f6)"):g&&(y="#10b981",j="drop-shadow(0 0 6px #10b981)"),{color:y,glow:j,radius:h||N?30:25,stroke:h||N?3:2,fontSize:h||N?15:13,fontWeight:h||N?"bold":"normal"}},l=(d,h,g,b,N)=>{if(!d)return[];const y=Math.pow(2,N-b)*50,j=a(d.value),f=[],x=j.color==="#6366f1"?q0(d.priority):j.color;if(d.left){const S=s.includes(d.value)&&s.includes(d.left.value);f.push(n.jsx("line",{x1:h,y1:g,x2:h-y,y2:g+100,stroke:S?"#3b82f6":"rgba(255,255,255,0.3)",strokeWidth:S?3:2},`l-${d.value}-l`)),f.push(...l(d.left,h-y,g+100,b+1,N))}if(d.right){const S=s.includes(d.value)&&s.includes(d.right.value);f.push(n.jsx("line",{x1:h,y1:g,x2:h+y,y2:g+100,stroke:S?"#3b82f6":"rgba(255,255,255,0.3)",strokeWidth:S?3:2},`l-${d.value}-r`)),f.push(...l(d.right,h+y,g+100,b+1,N))}return f.push(n.jsxs("g",{style:{filter:j.glow,transition:"all 0.3s ease"},children:[n.jsx("circle",{cx:h,cy:g,r:j.radius,fill:x,stroke:"white",strokeWidth:j.stroke,style:{transition:"all 0.3s ease"}}),n.jsx("text",{x:h,y:g-5,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:j.fontSize,fontWeight:j.fontWeight,children:d.value}),n.jsxs("text",{x:h,y:g+11,textAnchor:"middle",dominantBaseline:"middle",fill:"rgba(255,255,255,0.7)",fontSize:9,fontWeight:"normal",children:["p:",d.priority]})]},`n-${d.value}-${h}`)),f};if(!e)return n.jsxs("div",{className:"tree-empty",children:[n.jsx("p",{children:"Treap is empty. Insert some values!"}),n.jsx("p",{className:"tree-empty-hint",children:"Try: 50, 30, 70, 20, 40, 60, 80"})]});const o=no(e),c=(o+1)*100+50,u=Math.max(800,Math.pow(2,Math.max(o,1))*80);return n.jsx("svg",{width:u,height:c,className:"tree-svg",children:l(e,u/2,50,0,o)})}function K0({traversalType:e,traversalResult:t,isAnimating:r,traversalComplete:s}){if(!e||t.length===0&&!r)return null;const i=$0[e];return n.jsxs("div",{className:"traversal-output-panel",children:[n.jsxs("div",{style:{marginBottom:"1rem"},children:[n.jsxs("h3",{className:"traversal-title",children:[i==null?void 0:i.name,e==="inorder"&&n.jsx("span",{className:"sorted-indicator",children:"Returns Sorted Order!"}),r&&n.jsx("span",{className:"traversal-badge traversal-badge--running",children:"Running..."}),s&&n.jsx("span",{className:"traversal-badge traversal-badge--complete",children:"Complete"})]}),n.jsxs("p",{className:"traversal-order",children:[n.jsx("strong",{children:"Order:"})," ",i==null?void 0:i.order]}),n.jsx("p",{className:"traversal-description",children:i==null?void 0:i.description})]}),n.jsxs("div",{className:"traversal-output-box",children:[n.jsx("div",{className:"traversal-output-label",children:"Output Sequence:"}),n.jsx("div",{className:"traversal-sequence-container",children:t.length===0&&r?n.jsx("span",{style:{color:"var(--text-muted)",fontStyle:"italic"},children:"Traversing..."}):t.map((a,l)=>n.jsx("span",{className:`traversal-node ${l===t.length-1&&!s?"traversal-node--current":"traversal-node--complete"}`,children:a},l))})]}),s&&t.length>0&&n.jsxs("div",{className:"traversal-array-section",children:[n.jsx("div",{className:"traversal-array-label",children:"Array Output:"}),n.jsxs("code",{className:"traversal-array-output",children:["[",t.join(", "),"]"]}),e==="inorder"&&n.jsx("p",{className:"traversal-sorted-note",children:"Notice: The output is sorted! BST property is maintained in the treap."}),n.jsxs("p",{className:"traversal-use-case",children:["Use case: ",i==null?void 0:i.useCase.join(" | ")]}),n.jsxs("div",{className:"traversal-complexity",children:[n.jsx("strong",{children:"Time:"})," ",n.jsx("code",{className:"complexity-value",children:i==null?void 0:i.complexity.time}),n.jsx("br",{}),n.jsx("strong",{children:"Space:"})," ",n.jsx("code",{className:"complexity-value",children:i==null?void 0:i.complexity.space})]})]})]})}function W0(){const[e,t]=p.useState(null),[r,s]=p.useState(0),[i,a]=p.useState(-1),[l,o]=p.useState(""),[c,u]=p.useState(""),[d,h]=p.useState(""),[g,b]=p.useState(""),[N,y]=p.useState([]),[j,f]=p.useState(null),[m,x]=p.useState([]),[S,v]=p.useState(!1),[P,C]=p.useState(null),[V,L]=p.useState([]),[_,q]=p.useState(null),[W,O]=p.useState(!1);p.useEffect(()=>{A()},[]);const A=async()=>{try{const D=await(await fetch("/api/treap")).json();t(D.tree),s(D.size||0),a(D.height!==void 0?D.height:-1)}catch(M){console.error("Error loading Treap:",M)}},k=M=>{b(M),setTimeout(()=>b(""),3e3)},R=()=>{y([]),f(null)},$=async()=>{if(!l.trim()){k("Please enter a number!");return}const M=Number(l);if(isNaN(M)){k("Please enter a valid number!");return}if(r>=ir){k(`Tree is full! Maximum size is ${ir} nodes.`);return}R(),B();try{const I=await(await fetch("/api/treap/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:M})})).json();if(I.error){k(I.error);return}t(I.tree),s(I.size||0),a(I.height!==void 0?I.height:-1),k(`Inserted ${M}`),o("")}catch{k("Error inserting node")}},T=async()=>{if(!c.trim()){k("Please enter a number!");return}const M=Number(c);if(isNaN(M)){k("Please enter a valid number!");return}R(),B();try{const I=await(await fetch("/api/treap/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:M})})).json();if(I.error){k(I.error);return}t(I.tree),s(I.size||0),a(I.height!==void 0?I.height:-1),k(`Deleted ${M}`),u("")}catch{k("Error deleting node")}},E=async()=>{if(!d.trim()){k("Please enter a number!");return}const M=Number(d);if(isNaN(M)){k("Please enter a valid number!");return}if(!e){k("Tree is empty!");return}B(),v(!0);const D=B0(e,M);for(let I=0;I<D.length;I++)y(D.slice(0,I+1)),await new Promise(w=>setTimeout(w,500));try{const w=await(await fetch(`/api/treap/search?value=${M}`)).json();f(w.found),w.found?k(`Found ${M}!`):k(`${M} not found in treap`)}catch{k("Error searching")}v(!1),h("")},z=async()=>{try{await fetch("/api/treap/clear",{method:"POST"}),t(null),s(0),a(-1),B(),R(),k("Treap cleared!")}catch{k("Error clearing tree")}},F=async M=>{if(!e){k("Tree is empty! Insert some nodes first.");return}R(),v(!0),x([]),C(null),L([]),q(M),O(!1);try{const w=(await(await fetch(`/api/treap/${M}`)).json()).traversal||[];if(w.length===0){k("Tree is empty!"),v(!1);return}for(let Y=0;Y<w.length;Y++)C(w[Y]),await new Promise(Z=>setTimeout(Z,600)),L(Z=>[...Z,w[Y]]),x(Z=>[...Z,w[Y]]),await new Promise(Z=>setTimeout(Z,200));C(null),O(!0),v(!1);const H=M.charAt(0).toUpperCase()+M.slice(1);k(`${H} traversal complete!${M==="inorder"?" (Sorted!)":""}`)}catch(D){console.error("Traversal error:",D),k("Error performing traversal"),v(!1)}},B=()=>{x([]),C(null),L([]),q(null),O(!1)};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsx("div",{className:"intro-left",children:n.jsx(Tr,{dataStructure:"treap"})}),n.jsx(ye,{context:"Treap data structure, combining BST and heap properties, random priorities, rotations, insert, delete, search operations"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsx(H0,{insertValue:l,deleteValue:c,searchValue:d,size:r,height:i,message:g,tree:e,isAnimating:S,visitedNodes:V,searchPath:N,searchResult:j,onInsertValueChange:o,onDeleteValueChange:u,onSearchValueChange:h,onInsert:$,onDelete:T,onSearch:E,onTraversal:F,onClear:z,onResetTraversal:()=>{B(),R()}}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Treap Visualization"}),n.jsxs("p",{className:"treap-property-reminder",children:[n.jsx("code",{children:"BST"})," on keys | ",n.jsx("code",{children:"Max-Heap"})," on priorities (p:)"]}),n.jsx("div",{className:"tree-container",children:n.jsx(U0,{tree:e,currentNode:P,visitedNodes:V,searchPath:N,searchResult:j})}),n.jsx(K0,{traversalType:_,traversalResult:m,isAnimating:S,traversalComplete:W})]})]}),n.jsx(ke,{dataStructure:"treap"})]})}const St=7;function G0({insertValue:e,buildArray:t,size:r,height:s,min:i,message:a,heap:l,isAnimating:o,onInsertValueChange:c,onBuildArrayChange:u,onInsert:d,onExtract:h,onPeek:g,onBuild:b,onClear:N}){const y=(j,f)=>{const m=j.target.value;(m===""||m==="-"||/^-?\d*\.?\d*$/.test(m))&&f(m)};return n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Min Heap"}),n.jsxs("div",{className:"heap-info-box",children:[n.jsx("strong",{children:"Priority Queue:"})," Minimum always at root!"]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"insertValue",children:"Insert Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"insertValue",value:e,onChange:j=>y(j,c),onKeyDown:j=>j.key==="Enter"&&d(),placeholder:"Enter a number",disabled:o}),n.jsx("button",{onClick:d,className:"btn btn-insert",disabled:o,children:"Insert"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Heap Operations"}),n.jsxs("div",{className:"btn-group-vertical",children:[n.jsxs("button",{onClick:h,className:"btn btn-extract",disabled:o||l.length===0,children:[n.jsx(jx,{size:16})," Extract Min"]}),n.jsx("button",{onClick:g,className:"btn btn-peek",disabled:o||l.length===0,children:"Peek Min"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"buildArray",children:"Build from Array"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",id:"buildArray",value:t,onChange:j=>u(j.target.value),onKeyDown:j=>j.key==="Enter"&&b(),placeholder:"e.g., 5, 3, 8, 1, 2",disabled:o}),n.jsx("button",{onClick:b,className:"btn btn-build",disabled:o,children:"Build"})]})]}),n.jsxs("div",{className:"traversal-legend",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot",style:{background:"#10b981"}}),n.jsx("span",{children:"Root (Min)"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot",style:{background:"#6366f1"}}),n.jsx("span",{children:"Internal"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot",style:{background:"#8b5cf6"}}),n.jsx("span",{children:"Leaf"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot",style:{background:"#f59e0b"}}),n.jsx("span",{children:"Highlighted"})]})]}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Size:"}),n.jsx("span",{className:"info-value",children:r})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Height:"}),n.jsx("span",{className:"info-value",children:s})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Min:"}),n.jsx("span",{className:"info-value",children:i??"-"})]})]}),r>=St*.8&&r<St&&n.jsxs("div",{className:"warning-box",children:[n.jsx(Tn,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Heap filling up!"})," ",r,"/",St," elements."]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:N,className:"btn btn-clear",disabled:o,children:"Clear Heap"})}),a&&n.jsx("div",{className:`message message-${a.includes("Error")||a.includes("error")?"error":/success|complete|Inserted|Extracted|cleared|Built/i.test(a)?"success":a.includes("full")||a.includes("empty")?"warning":"info"}`,children:a})]})}function Q0({tree:e,heap:t,highlightedIndex:r,swappingIndices:s}){const i=d=>{const h=r===d,g=s.includes(d),b=d===0;let N="#6366f1",y="none";return h||g?(N="#f59e0b",y="drop-shadow(0 0 12px #f59e0b)"):b&&(N="#10b981",y="drop-shadow(0 0 8px #10b981)"),{color:N,glow:y,radius:h||b?28:25}},a=(d,h=0)=>d?Math.max(a(d.left,h+1),a(d.right,h+1)):h-1,l=(d,h,g,b,N)=>{if(!d)return[];const y=Math.pow(2,N-b)*50,j=i(d.index),f=[];return d.left&&(f.push(n.jsx("line",{x1:h,y1:g,x2:h-y,y2:g+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:2},`l-${d.index}-l`)),f.push(...l(d.left,h-y,g+100,b+1,N))),d.right&&(f.push(n.jsx("line",{x1:h,y1:g,x2:h+y,y2:g+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:2},`l-${d.index}-r`)),f.push(...l(d.right,h+y,g+100,b+1,N))),f.push(n.jsxs("g",{style:{filter:j.glow,transition:"all 0.3s ease"},children:[n.jsx("circle",{cx:h,cy:g,r:j.radius,fill:j.color,stroke:"white",strokeWidth:2}),n.jsx("text",{x:h,y:g,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:14,fontWeight:"bold",children:d.value}),n.jsxs("text",{x:h,y:g+j.radius+12,textAnchor:"middle",fill:"rgba(255,255,255,0.6)",fontSize:10,children:["[",d.index,"]"]})]},`n-${d.index}`)),f};if(!e||t.length===0)return n.jsxs("div",{className:"tree-empty",children:[n.jsx("p",{children:"Min Heap is empty. Insert some values!"}),n.jsx("p",{className:"tree-empty-hint",children:"Try: 5, 3, 8, 1, 2 or build from array"})]});const o=a(e),c=(o+1)*100+80,u=Math.max(600,Math.pow(2,Math.max(o,1))*70);return n.jsx("svg",{width:u,height:c,className:"tree-svg",children:l(e,u/2,50,0,o)})}function X0({heap:e,highlightedIndex:t,swappingIndices:r}){return e.length===0?n.jsx("div",{className:"heap-array-empty",children:n.jsx("code",{children:"[ ]"})}):n.jsxs("div",{className:"heap-array-container",children:[n.jsx("div",{className:"heap-array",children:e.map((s,i)=>{const a=t===i,l=r.includes(i),o=i===0;return n.jsxs("div",{className:`heap-array-cell ${a||l?"highlighted":""} ${o?"root":""}`,children:[n.jsx("span",{className:"heap-array-index",children:i}),n.jsx("span",{className:"heap-array-value",children:s})]},i)})}),n.jsxs("div",{className:"heap-array-formulas",children:[n.jsxs("div",{className:"formula-item",children:[n.jsx("strong",{children:"Parent(i):"})," ",n.jsx("code",{children:"(i - 1) / 2"})]}),n.jsxs("div",{className:"formula-item",children:[n.jsx("strong",{children:"Left(i):"})," ",n.jsx("code",{children:"2*i + 1"})]}),n.jsxs("div",{className:"formula-item",children:[n.jsx("strong",{children:"Right(i):"})," ",n.jsx("code",{children:"2*i + 2"})]})]})]})}function Y0(){const[e,t]=p.useState([]),[r,s]=p.useState(null),[i,a]=p.useState(0),[l,o]=p.useState(-1),[c,u]=p.useState(null),[d,h]=p.useState(""),[g,b]=p.useState(""),[N,y]=p.useState(""),[j,f]=p.useState(!1),[m,x]=p.useState(null),[S,v]=p.useState([]);p.useEffect(()=>{P()},[]);const P=async()=>{try{const A=await(await fetch("/api/minheap")).json();t(A.heap||[]),s(A.tree),a(A.size||0),o(A.height!==void 0?A.height:-1),u(A.min)}catch(O){console.error("Error loading Min Heap:",O)}},C=O=>{y(O),setTimeout(()=>y(""),3e3)},V=async()=>{if(!d.trim()){C("Please enter a number!");return}const O=Number(d);if(isNaN(O)){C("Please enter a valid number!");return}if(i>=St){C(`Heap is full! Maximum size is ${St}.`);return}f(!0);try{const k=await(await fetch("/api/minheap/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:O})})).json();if(k.error){C(k.error),f(!1);return}t(k.heap||[]),s(k.tree),a(k.size||0),o(k.height!==void 0?k.height:-1),u(k.min),C(`Inserted ${O}`),h("")}catch{C("Error inserting element")}f(!1)},L=async()=>{if(i===0){C("Heap is empty!");return}f(!0),x(0),await new Promise(O=>setTimeout(O,500));try{const A=await(await fetch("/api/minheap/extract",{method:"POST"})).json();if(A.error){C(A.error),f(!1),x(null);return}t(A.heap||[]),s(A.tree),a(A.size||0),o(A.height!==void 0?A.height:-1),u(A.min),C(`Extracted minimum: ${A.extracted}`)}catch{C("Error extracting minimum")}x(null),f(!1)},_=async()=>{if(i===0){C("Heap is empty!");return}x(0),C(`Minimum element is ${c}`),await new Promise(O=>setTimeout(O,1500)),x(null)},q=async()=>{if(!g.trim()){C("Please enter an array of numbers!");return}const O=g.split(",").map(A=>{const k=Number(A.trim());return isNaN(k)?null:k}).filter(A=>A!==null);if(O.length===0){C("Please enter valid numbers separated by commas!");return}if(O.length>St){C(`Array too large! Maximum size is ${St}.`);return}f(!0);try{const k=await(await fetch("/api/minheap/build",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({array:O})})).json();if(k.error){C(k.error),f(!1);return}t(k.heap||[]),s(k.tree),a(k.size||0),o(k.height!==void 0?k.height:-1),u(k.min),C("Built heap from array!"),b("")}catch{C("Error building heap")}f(!1)},W=async()=>{try{await fetch("/api/minheap/clear",{method:"POST"}),t([]),s(null),a(0),o(-1),u(null),x(null),v([]),C("Heap cleared!")}catch{C("Error clearing heap")}};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsx("div",{className:"intro-left",children:n.jsx(Tr,{dataStructure:"minheap"})}),n.jsx(ye,{context:"Min Heap data structure, priority queue, heapify operations, O(log n) insert and extract, O(1) peek minimum"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsx(G0,{insertValue:d,buildArray:g,size:i,height:l,min:c,message:N,heap:e,isAnimating:j,onInsertValueChange:h,onBuildArrayChange:b,onInsert:V,onExtract:L,onPeek:_,onBuild:q,onClear:W}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Min Heap Visualization"}),n.jsxs("p",{className:"bst-property-reminder",children:["Heap Property: ",n.jsx("code",{children:"Parent <= Children"})," (Min at root)"]}),n.jsxs("div",{className:"heap-tree-section",children:[n.jsx("h3",{children:"Tree View"}),n.jsx("div",{className:"tree-container",children:n.jsx(Q0,{tree:r,heap:e,highlightedIndex:m,swappingIndices:S})})]}),n.jsxs("div",{className:"heap-array-section",children:[n.jsx("h3",{children:"Array Representation"}),n.jsx(X0,{heap:e,highlightedIndex:m,swappingIndices:S})]})]})]}),n.jsx(ke,{dataStructure:"minheap"})]})}const Ct=7;function J0({insertValue:e,buildArray:t,size:r,height:s,max:i,message:a,heap:l,isAnimating:o,onInsertValueChange:c,onBuildArrayChange:u,onInsert:d,onExtract:h,onPeek:g,onBuild:b,onClear:N}){const y=(j,f)=>{const m=j.target.value;(m===""||m==="-"||/^-?\d*\.?\d*$/.test(m))&&f(m)};return n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Max Heap"}),n.jsxs("div",{className:"heap-info-box max-heap",children:[n.jsx("strong",{children:"Priority Queue:"})," Maximum always at root!"]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"insertValue",children:"Insert Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"insertValue",value:e,onChange:j=>y(j,c),onKeyDown:j=>j.key==="Enter"&&d(),placeholder:"Enter a number",disabled:o}),n.jsx("button",{onClick:d,className:"btn btn-insert",disabled:o,children:"Insert"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Heap Operations"}),n.jsxs("div",{className:"btn-group-vertical",children:[n.jsxs("button",{onClick:h,className:"btn btn-extract-max",disabled:o||l.length===0,children:[n.jsx(bx,{size:16})," Extract Max"]}),n.jsx("button",{onClick:g,className:"btn btn-peek",disabled:o||l.length===0,children:"Peek Max"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"buildArray",children:"Build from Array"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",id:"buildArray",value:t,onChange:j=>u(j.target.value),onKeyDown:j=>j.key==="Enter"&&b(),placeholder:"e.g., 5, 3, 8, 1, 2",disabled:o}),n.jsx("button",{onClick:b,className:"btn btn-build",disabled:o,children:"Build"})]})]}),n.jsxs("div",{className:"traversal-legend",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot",style:{background:"#ef4444"}}),n.jsx("span",{children:"Root (Max)"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot",style:{background:"#6366f1"}}),n.jsx("span",{children:"Internal"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot",style:{background:"#8b5cf6"}}),n.jsx("span",{children:"Leaf"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot",style:{background:"#f59e0b"}}),n.jsx("span",{children:"Highlighted"})]})]}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Size:"}),n.jsx("span",{className:"info-value",children:r})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Height:"}),n.jsx("span",{className:"info-value",children:s})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Max:"}),n.jsx("span",{className:"info-value",children:i??"-"})]})]}),r>=Ct*.8&&r<Ct&&n.jsxs("div",{className:"warning-box",children:[n.jsx(Tn,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Heap filling up!"})," ",r,"/",Ct," elements."]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:N,className:"btn btn-clear",disabled:o,children:"Clear Heap"})}),a&&n.jsx("div",{className:`message message-${a.includes("Error")||a.includes("error")?"error":/success|complete|Inserted|Extracted|cleared|Built/i.test(a)?"success":a.includes("full")||a.includes("empty")?"warning":"info"}`,children:a})]})}function Z0({tree:e,heap:t,highlightedIndex:r,swappingIndices:s}){const i=d=>{const h=r===d,g=s.includes(d),b=d===0;let N="#6366f1",y="none";return h||g?(N="#f59e0b",y="drop-shadow(0 0 12px #f59e0b)"):b&&(N="#ef4444",y="drop-shadow(0 0 8px #ef4444)"),{color:N,glow:y,radius:h||b?28:25}},a=(d,h=0)=>d?Math.max(a(d.left,h+1),a(d.right,h+1)):h-1,l=(d,h,g,b,N)=>{if(!d)return[];const y=Math.pow(2,N-b)*50,j=i(d.index),f=[];return d.left&&(f.push(n.jsx("line",{x1:h,y1:g,x2:h-y,y2:g+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:2},`l-${d.index}-l`)),f.push(...l(d.left,h-y,g+100,b+1,N))),d.right&&(f.push(n.jsx("line",{x1:h,y1:g,x2:h+y,y2:g+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:2},`l-${d.index}-r`)),f.push(...l(d.right,h+y,g+100,b+1,N))),f.push(n.jsxs("g",{style:{filter:j.glow,transition:"all 0.3s ease"},children:[n.jsx("circle",{cx:h,cy:g,r:j.radius,fill:j.color,stroke:"white",strokeWidth:2}),n.jsx("text",{x:h,y:g,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:14,fontWeight:"bold",children:d.value}),n.jsxs("text",{x:h,y:g+j.radius+12,textAnchor:"middle",fill:"rgba(255,255,255,0.6)",fontSize:10,children:["[",d.index,"]"]})]},`n-${d.index}`)),f};if(!e||t.length===0)return n.jsxs("div",{className:"tree-empty",children:[n.jsx("p",{children:"Max Heap is empty. Insert some values!"}),n.jsx("p",{className:"tree-empty-hint",children:"Try: 5, 3, 8, 1, 9 or build from array"})]});const o=a(e),c=(o+1)*100+80,u=Math.max(600,Math.pow(2,Math.max(o,1))*70);return n.jsx("svg",{width:u,height:c,className:"tree-svg",children:l(e,u/2,50,0,o)})}function eN({heap:e,highlightedIndex:t,swappingIndices:r}){return e.length===0?n.jsx("div",{className:"heap-array-empty",children:n.jsx("code",{children:"[ ]"})}):n.jsxs("div",{className:"heap-array-container",children:[n.jsx("div",{className:"heap-array",children:e.map((s,i)=>{const a=t===i,l=r.includes(i),o=i===0;return n.jsxs("div",{className:`heap-array-cell ${a||l?"highlighted":""} ${o?"root-max":""}`,children:[n.jsx("span",{className:"heap-array-index",children:i}),n.jsx("span",{className:"heap-array-value",children:s})]},i)})}),n.jsxs("div",{className:"heap-array-formulas",children:[n.jsxs("div",{className:"formula-item",children:[n.jsx("strong",{children:"Parent(i):"})," ",n.jsx("code",{children:"(i - 1) / 2"})]}),n.jsxs("div",{className:"formula-item",children:[n.jsx("strong",{children:"Left(i):"})," ",n.jsx("code",{children:"2*i + 1"})]}),n.jsxs("div",{className:"formula-item",children:[n.jsx("strong",{children:"Right(i):"})," ",n.jsx("code",{children:"2*i + 2"})]})]})]})}function nN(){const[e,t]=p.useState([]),[r,s]=p.useState(null),[i,a]=p.useState(0),[l,o]=p.useState(-1),[c,u]=p.useState(null),[d,h]=p.useState(""),[g,b]=p.useState(""),[N,y]=p.useState(""),[j,f]=p.useState(!1),[m,x]=p.useState(null),[S,v]=p.useState([]);p.useEffect(()=>{P()},[]);const P=async()=>{try{const A=await(await fetch("/api/maxheap")).json();t(A.heap||[]),s(A.tree),a(A.size||0),o(A.height!==void 0?A.height:-1),u(A.max)}catch(O){console.error("Error loading Max Heap:",O)}},C=O=>{y(O),setTimeout(()=>y(""),3e3)},V=async()=>{if(!d.trim()){C("Please enter a number!");return}const O=Number(d);if(isNaN(O)){C("Please enter a valid number!");return}if(i>=Ct){C(`Heap is full! Maximum size is ${Ct}.`);return}f(!0);try{const k=await(await fetch("/api/maxheap/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:O})})).json();if(k.error){C(k.error),f(!1);return}t(k.heap||[]),s(k.tree),a(k.size||0),o(k.height!==void 0?k.height:-1),u(k.max),C(`Inserted ${O}`),h("")}catch{C("Error inserting element")}f(!1)},L=async()=>{if(i===0){C("Heap is empty!");return}f(!0),x(0),await new Promise(O=>setTimeout(O,500));try{const A=await(await fetch("/api/maxheap/extract",{method:"POST"})).json();if(A.error){C(A.error),f(!1),x(null);return}t(A.heap||[]),s(A.tree),a(A.size||0),o(A.height!==void 0?A.height:-1),u(A.max),C(`Extracted maximum: ${A.extracted}`)}catch{C("Error extracting maximum")}x(null),f(!1)},_=async()=>{if(i===0){C("Heap is empty!");return}x(0),C(`Maximum element is ${c}`),await new Promise(O=>setTimeout(O,1500)),x(null)},q=async()=>{if(!g.trim()){C("Please enter an array of numbers!");return}const O=g.split(",").map(A=>{const k=Number(A.trim());return isNaN(k)?null:k}).filter(A=>A!==null);if(O.length===0){C("Please enter valid numbers separated by commas!");return}if(O.length>Ct){C(`Array too large! Maximum size is ${Ct}.`);return}f(!0);try{const k=await(await fetch("/api/maxheap/build",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({array:O})})).json();if(k.error){C(k.error),f(!1);return}t(k.heap||[]),s(k.tree),a(k.size||0),o(k.height!==void 0?k.height:-1),u(k.max),C("Built heap from array!"),b("")}catch{C("Error building heap")}f(!1)},W=async()=>{try{await fetch("/api/maxheap/clear",{method:"POST"}),t([]),s(null),a(0),o(-1),u(null),x(null),v([]),C("Heap cleared!")}catch{C("Error clearing heap")}};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsx("div",{className:"intro-left",children:n.jsx(Tr,{dataStructure:"maxheap"})}),n.jsx(ye,{context:"Max Heap data structure, priority queue, heapify operations, O(log n) insert and extract, O(1) peek maximum, heap sort"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsx(J0,{insertValue:d,buildArray:g,size:i,height:l,max:c,message:N,heap:e,isAnimating:j,onInsertValueChange:h,onBuildArrayChange:b,onInsert:V,onExtract:L,onPeek:_,onBuild:q,onClear:W}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Max Heap Visualization"}),n.jsxs("p",{className:"bst-property-reminder",children:["Heap Property: ",n.jsx("code",{children:"Parent >= Children"})," (Max at root)"]}),n.jsxs("div",{className:"heap-tree-section",children:[n.jsx("h3",{children:"Tree View"}),n.jsx("div",{className:"tree-container",children:n.jsx(Z0,{tree:r,heap:e,highlightedIndex:m,swappingIndices:S})})]}),n.jsxs("div",{className:"heap-array-section",children:[n.jsx("h3",{children:"Array Representation"}),n.jsx(eN,{heap:e,highlightedIndex:m,swappingIndices:S})]})]})]}),n.jsx(ke,{dataStructure:"maxheap"})]})}function tN(){const[e,t]=p.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=p.useState(""),[i,a]=p.useState(""),[l,o]=p.useState(""),[c,u]=p.useState("1"),[d,h]=p.useState(null),[g,b]=p.useState(null),[N,y]=p.useState(null),[j,f]=p.useState({}),{message:m,showMessage:x}=Ue(3e3);p.useEffect(()=>{v()},[]),p.useEffect(()=>{e.vertices.length>0&&S()},[e.vertices]),p.useEffect(()=>{if(d||g){const k=setTimeout(()=>{h(null),b(null),y(null)},2e3);return()=>clearTimeout(k)}},[d,g]);const S=p.useCallback(()=>{const E=Math.min(450,300)*.38,z={},F=e.vertices.length;e.vertices.forEach((B,M)=>{const D=2*Math.PI*M/F-Math.PI/2;z[B]={x:225+E*Math.cos(D),y:150+E*Math.sin(D)}}),f(z)},[e.vertices]),v=async()=>{try{const k=await ue("/api/graph");t(k)}catch(k){console.error("Error loading graph:",k)}},P=async()=>{if(!r.trim()){x("Please enter a vertex name!","error");return}try{const k=await te("/api/graph/vertex",{vertex:r.trim()});if(k.error){x(k.error,"error");return}t(k),h(r.trim().toUpperCase()),y("add-vertex"),x(`Added vertex '${r}' - Created new entry in adjacency list`,"success"),s("")}catch{x("Error adding vertex","error")}},C=async k=>{try{const R=await Mi(`/api/graph/vertex/${k}`);if(R.error){x(R.error,"error");return}t(R),x(`Removed vertex '${k}' - Deleted from list and all references`,"success")}catch{x("Error removing vertex","error")}},V=async()=>{if(!i.trim()||!l.trim()){x("Please select both vertices!","error");return}const k=parseInt(c)||1;try{const R=await te("/api/graph/edge",{from:i.trim(),to:l.trim(),weight:k});if(R.error){x(R.error,"error");return}t(R),b({from:i,to:l}),y("add-edge"),x(`Added edge ${i}→${l} (weight: ${k}) - Appended to ${i}'s neighbor list`,"success"),a(""),o(""),u("1")}catch{x("Error adding edge","error")}},L=async()=>{if(!i.trim()||!l.trim()){x("Please select both vertices!","error");return}try{const k=await Mi("/api/graph/edge",{from:i.trim(),to:l.trim()});if(k.error){x(k.error,"error");return}t(k),x(`Removed edge ${i}→${l} - Removed from neighbor lists`,"success"),a(""),o("")}catch{x("Error removing edge","error")}},_=async k=>{try{const R=await te(`/api/graph/preset/${k}`,{});if(R.error){x(R.error,"error");return}t(R),x(`Loaded '${k}' graph preset`,"success")}catch{x("Error loading preset","error")}},q=async()=>{try{const k=await te("/api/graph/clear",{});t(k),x("Graph cleared","success")}catch{x("Error clearing graph","error")}},W=(k,R)=>{k.key==="Enter"&&R()},O=k=>d===k&&N==="add-vertex"?"graph-node highlighted-new":g&&(g.from===k||g.to===k)?"graph-node highlighted-edge":"graph-node",A=(k,R)=>g&&(g.from===k&&g.to===R||g.from===R&&g.to===k)?"graph-edge highlighted":"graph-edge";return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Me,{className:"icon-sm"}),n.jsx("span",{children:"What is an Adjacency List?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:["An ",n.jsx("strong",{children:"Adjacency List"})," represents a graph using a collection of lists. Each vertex stores a list of its neighboring vertices."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(ve,{}),n.jsx("span",{children:"Like a contact list - each person has their own list of friends they're connected to!"})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Add Vertex"}),n.jsx("span",{className:"op-desc",children:"Create new list"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Add Edge"}),n.jsx("span",{className:"op-desc",children:"Append to list"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Remove Edge"}),n.jsx("span",{className:"op-desc",children:"Search & delete"}),n.jsx("span",{className:"op-complexity",children:"O(E)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Find Neighbors"}),n.jsx("span",{className:"op-desc",children:"Return list"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]})]}),n.jsxs("div",{className:"concept-uses",children:[n.jsx("strong",{children:"Why Adjacency List?"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Space efficient for sparse graphs: O(V + E)"}),n.jsx("li",{children:"Fast iteration over neighbors"}),n.jsx("li",{children:"Easy to add vertices and edges"}),n.jsx("li",{children:"Supports weighted edges naturally"})]})]})]})]}),n.jsx(ye,{context:"Adjacency List graph representation, graph data structure"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Operations"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Load Preset"}),n.jsxs("div",{className:"btn-group preset-group",children:[n.jsx("button",{onClick:()=>_("simple"),className:"btn btn-preset",children:"Simple"}),n.jsx("button",{onClick:()=>_("tree"),className:"btn btn-preset",children:"Tree"}),n.jsx("button",{onClick:()=>_("cyclic"),className:"btn btn-preset",children:"Cyclic"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsxs("label",{htmlFor:"vertexInput",children:[n.jsx(zi,{size:14})," Add Vertex"]}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",id:"vertexInput",value:r,onChange:k=>s(k.target.value.toUpperCase()),onKeyPress:k=>W(k,P),placeholder:"Name (e.g., A)",maxLength:3}),n.jsx("button",{onClick:P,className:"btn btn-add",children:"Add"})]}),n.jsx("span",{className:"operation-hint",children:"Creates a new empty list entry"})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Add/Remove Edge (with Weight)"}),n.jsxs("div",{className:"edge-inputs",children:[n.jsxs("select",{value:i,onChange:k=>a(k.target.value),className:"vertex-select",children:[n.jsx("option",{value:"",children:"From"}),e.vertices.map(k=>n.jsx("option",{value:k,children:k},k))]}),n.jsx("span",{className:"edge-arrow",children:"→"}),n.jsxs("select",{value:l,onChange:k=>o(k.target.value),className:"vertex-select",children:[n.jsx("option",{value:"",children:"To"}),e.vertices.map(k=>n.jsx("option",{value:k,children:k},k))]})]}),n.jsxs("div",{className:"weight-input",children:[n.jsx("label",{htmlFor:"weightInput",children:"Weight:"}),n.jsx("input",{type:"number",id:"weightInput",value:c,onChange:k=>u(k.target.value),min:"1",max:"99",className:"weight-field"})]}),n.jsxs("div",{className:"btn-group",children:[n.jsxs("button",{onClick:V,className:"btn btn-add",children:[n.jsx(zi,{size:14})," Add Edge"]}),n.jsxs("button",{onClick:L,className:"btn btn-remove",children:[n.jsx(Kl,{size:14})," Remove"]})]}),n.jsx("span",{className:"operation-hint",children:"Appends neighbor to the vertex's list"})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:q,className:"btn btn-clear full-width",children:"Clear Graph"})}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Vertices (V):"}),n.jsx("span",{className:"info-value",children:e.vertex_count||0})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Edges (E):"}),n.jsx("span",{className:"info-value",children:e.edge_count||0})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Space:"}),n.jsx("span",{className:"info-value",children:"O(V + E)"})]})]}),n.jsx(He,{message:m})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Graph View"}),n.jsx("div",{className:"graph-container",children:e.vertices.length===0?n.jsx("div",{className:"graph-empty",children:"Graph is empty. Add vertices or load a preset!"}):n.jsxs("svg",{className:"graph-svg",viewBox:"0 0 450 300",children:[e.edges.map(([k,R,$],T)=>{const E=j[k],z=j[R];if(!E||!z)return null;const F=(E.x+z.x)/2,B=(E.y+z.y)/2;return n.jsxs("g",{children:[n.jsx("line",{x1:E.x,y1:E.y,x2:z.x,y2:z.y,className:A(k,R)}),n.jsx("circle",{cx:F,cy:B,r:12,className:"weight-bg"}),n.jsx("text",{x:F,y:B,className:"weight-label",dominantBaseline:"central",textAnchor:"middle",children:$})]},`edge-${T}`)}),e.vertices.map(k=>{const R=j[k];return R?n.jsxs("g",{className:O(k),children:[n.jsx("circle",{cx:R.x,cy:R.y,r:22,className:"node-circle"}),n.jsx("text",{x:R.x,y:R.y,className:"node-label",dominantBaseline:"central",textAnchor:"middle",children:k})]},k):null})]})}),n.jsxs("div",{className:"adjacency-list-section",children:[n.jsx("h3",{children:"Behind the Scenes: Adjacency List Structure"}),n.jsx("p",{className:"adj-explanation",children:"Each vertex has its own linked list of neighbors. When you add an edge A→B, we append B to A's list (and A to B's list for undirected graphs)."}),n.jsx("div",{className:"adj-list-visual",children:e.vertices.length===0?n.jsx("div",{className:"adj-empty",children:"No vertices in graph"}):e.vertices.map(k=>{const R=e.adjacency_list[k]||[],$=d===k||g&&(g.from===k||g.to===k);return n.jsxs("div",{className:`adj-row-visual ${$?"highlighted":""}`,children:[n.jsx("div",{className:"adj-vertex-box",children:n.jsx("span",{className:"adj-vertex-label",children:k})}),n.jsx("div",{className:"adj-pointer",children:n.jsx(xe,{size:16})}),n.jsxs("div",{className:"adj-linked-list",children:[R.length===0?n.jsx("div",{className:"adj-null",children:"null"}):R.map(([T,E],z)=>{const F=g&&g.from===k&&g.to===T;return n.jsxs(Ce.Fragment,{children:[n.jsxs("div",{className:`adj-neighbor-node ${F?"highlighted":""}`,children:[n.jsx("span",{className:"neighbor-vertex",children:T}),n.jsxs("span",{className:"neighbor-weight",children:["w:",E]})]}),z<R.length-1&&n.jsx("div",{className:"adj-link",children:n.jsx(xe,{size:14})})]},`${k}-${T}`)}),R.length>0&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"adj-link",children:n.jsx(xe,{size:14})}),n.jsx("div",{className:"adj-null",children:"null"})]})]}),n.jsx("button",{className:"adj-remove-btn",onClick:()=>C(k),title:`Remove vertex ${k}`,children:n.jsx(Kl,{size:14})})]},k)})}),n.jsxs("div",{className:"memory-hint",children:[n.jsx("strong",{children:"Memory Layout:"})," An array/hashmap stores vertex references, each pointing to the head of a linked list containing (neighbor, weight) pairs."]})]})]})]}),n.jsx(ke,{dataStructure:"graph"})]})}function rN(){const[e,t]=p.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=p.useState([]),[i,a]=p.useState([]),[l,o]=p.useState(""),[c,u]=p.useState(""),[d,h]=p.useState(""),[g,b]=p.useState("1"),[N,y]=p.useState(null),[j,f]=p.useState(null),[m,x]=p.useState({}),{message:S,showMessage:v}=Ue(3e3);p.useEffect(()=>{C()},[]),p.useEffect(()=>{e.vertices.length>0?(V(),P()):(s([]),a([]))},[e]),p.useEffect(()=>{if(N){const T=setTimeout(()=>{y(null)},2e3);return()=>clearTimeout(T)}},[N]);const P=p.useCallback(()=>{const B=Math.min(350,250)*.38,M={},D=e.vertices.length;e.vertices.forEach((I,w)=>{const H=2*Math.PI*w/D-Math.PI/2;M[I]={x:175+B*Math.cos(H),y:125+B*Math.sin(H)}}),x(M)},[e.vertices]),C=async()=>{try{const T=await ue("/api/graph");t(T)}catch(T){console.error("Error loading graph:",T)}},V=async()=>{try{const T=await ue("/api/graph/matrix");s(T.matrix),a(T.vertices)}catch(T){console.error("Error loading matrix:",T)}},L=async()=>{if(!l.trim()){v("Please enter a vertex name!","error");return}try{const T=await te("/api/graph/vertex",{vertex:l.trim()});if(T.error){v(T.error,"error");return}t(T),v(`Added vertex '${l}' - Added new row and column to matrix`,"success"),o("")}catch{v("Error adding vertex","error")}},_=async T=>{try{const E=await Mi(`/api/graph/vertex/${T}`);if(E.error){v(E.error,"error");return}t(E),v(`Removed vertex '${T}' - Removed row and column from matrix`,"success")}catch{v("Error removing vertex","error")}},q=async()=>{if(!c.trim()||!d.trim()){v("Please select both vertices!","error");return}const T=parseInt(g)||1;try{const E=await te("/api/graph/edge",{from:c.trim(),to:d.trim(),weight:T});if(E.error){v(E.error,"error");return}t(E);const z=i.indexOf(c),F=i.indexOf(d);y({row:z,col:F}),v(`Added edge: matrix[${c}][${d}] = ${T}`,"success"),u(""),h(""),b("1")}catch{v("Error adding edge","error")}},W=async()=>{if(!c.trim()||!d.trim()){v("Please select both vertices!","error");return}try{const T=await Mi("/api/graph/edge",{from:c.trim(),to:d.trim()});if(T.error){v(T.error,"error");return}t(T),v(`Removed edge: matrix[${c}][${d}] = 0`,"success"),u(""),h("")}catch{v("Error removing edge","error")}},O=()=>{var B;if(!c.trim()||!d.trim()){v("Please select both vertices to check!","error");return}const T=i.indexOf(c),E=i.indexOf(d);if(T===-1||E===-1){v("Vertex not found!","error");return}const z=((B=r[T])==null?void 0:B[E])||0,F=z>0;y({row:T,col:E}),f({from:c,to:d,exists:F,weight:z}),v(F?`Edge exists! matrix[${c}][${d}] = ${z} (O(1) lookup)`:`No edge: matrix[${c}][${d}] = 0 (O(1) lookup)`,F?"success":"info")},A=async T=>{try{const E=await te(`/api/graph/preset/${T}`,{});if(E.error){v(E.error,"error");return}t(E),f(null),v(`Loaded '${T}' graph preset`,"success")}catch{v("Error loading preset","error")}},k=async()=>{try{const T=await te("/api/graph/clear",{});t(T),s([]),a([]),f(null),v("Graph cleared","success")}catch{v("Error clearing graph","error")}},R=(T,E)=>{T.key==="Enter"&&E()},$=(T,E,z)=>{let F="matrix-cell";return N&&N.row===T&&N.col===E&&(F+=" highlighted"),N&&N.row===E&&N.col===T&&(F+=" highlighted"),z>0&&(F+=" has-edge"),T===E&&(F+=" diagonal"),F};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Me,{className:"icon-sm"}),n.jsx("span",{children:"What is an Adjacency Matrix?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:["An ",n.jsx("strong",{children:"Adjacency Matrix"})," is a 2D array where ",n.jsx("code",{children:"matrix[i][j]"})," represents the edge weight between vertex i and j (0 if no edge)."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(ve,{}),n.jsx("span",{children:"Like a spreadsheet where rows and columns are people, and cells show if they're friends!"})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Check Edge"}),n.jsx("span",{className:"op-desc",children:"Direct lookup"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Add Edge"}),n.jsx("span",{className:"op-desc",children:"Set cell value"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Add Vertex"}),n.jsx("span",{className:"op-desc",children:"Resize matrix"}),n.jsx("span",{className:"op-complexity",children:"O(V²)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Space"}),n.jsx("span",{className:"op-desc",children:"2D array"}),n.jsx("span",{className:"op-complexity",children:"O(V²)"})]})]}),n.jsxs("div",{className:"concept-uses",children:[n.jsx("strong",{children:"When to Use:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Dense graphs (many edges)"}),n.jsx("li",{children:"Fast edge existence checks needed"}),n.jsx("li",{children:"Small number of vertices"}),n.jsx("li",{children:"Frequent edge weight updates"})]})]})]})]}),n.jsx(ye,{context:"Adjacency Matrix graph representation"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Operations"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Load Preset"}),n.jsxs("div",{className:"btn-group preset-group",children:[n.jsx("button",{onClick:()=>A("simple"),className:"btn btn-preset",children:"Simple"}),n.jsx("button",{onClick:()=>A("complete"),className:"btn btn-preset",children:"Complete"}),n.jsx("button",{onClick:()=>A("cyclic"),className:"btn btn-preset",children:"Cyclic"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsxs("label",{htmlFor:"vertexInput",children:[n.jsx(zi,{size:14})," Add Vertex"]}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",id:"vertexInput",value:l,onChange:T=>o(T.target.value.toUpperCase()),onKeyPress:T=>R(T,L),placeholder:"Name (e.g., A)",maxLength:3}),n.jsx("button",{onClick:L,className:"btn btn-add",children:"Add"})]}),n.jsx("span",{className:"operation-hint",children:"Adds new row & column (O(V²) resize)"})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Edge Operations"}),n.jsxs("div",{className:"edge-inputs",children:[n.jsxs("select",{value:c,onChange:T=>u(T.target.value),className:"vertex-select",children:[n.jsx("option",{value:"",children:"From"}),e.vertices.map(T=>n.jsx("option",{value:T,children:T},T))]}),n.jsx("span",{className:"edge-arrow",children:"→"}),n.jsxs("select",{value:d,onChange:T=>h(T.target.value),className:"vertex-select",children:[n.jsx("option",{value:"",children:"To"}),e.vertices.map(T=>n.jsx("option",{value:T,children:T},T))]})]}),n.jsxs("div",{className:"weight-input",children:[n.jsx("label",{htmlFor:"weightInput",children:"Weight:"}),n.jsx("input",{type:"number",id:"weightInput",value:g,onChange:T=>b(T.target.value),min:"1",max:"99",className:"weight-field"})]}),n.jsxs("div",{className:"btn-group",children:[n.jsxs("button",{onClick:q,className:"btn btn-add",children:[n.jsx(zi,{size:14})," Add"]}),n.jsxs("button",{onClick:W,className:"btn btn-remove",children:[n.jsx(Kl,{size:14})," Remove"]}),n.jsxs("button",{onClick:O,className:"btn btn-check",children:[n.jsx(At,{size:14})," Check"]})]}),n.jsx("span",{className:"operation-hint",children:"O(1) direct cell access"})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:k,className:"btn btn-clear full-width",children:"Clear Graph"})}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Vertices (V):"}),n.jsx("span",{className:"info-value",children:e.vertex_count||0})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Edges (E):"}),n.jsx("span",{className:"info-value",children:e.edge_count||0})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Matrix Size:"}),n.jsxs("span",{className:"info-value",children:[i.length," × ",i.length]})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Space Used:"}),n.jsxs("span",{className:"info-value",children:["O(",i.length,"²) = ",i.length*i.length," cells"]})]})]}),j&&n.jsxs("div",{className:`lookup-result ${j.exists?"exists":"not-exists"}`,children:[n.jsx("strong",{children:"Lookup Result:"}),n.jsxs("code",{children:["matrix[",j.from,"][",j.to,"] = ",j.weight]}),n.jsx("span",{children:j.exists?"Edge exists!":"No edge"})]}),n.jsx(He,{message:S})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsxs("div",{className:"mini-graph-section",children:[n.jsx("h3",{children:"Graph View"}),n.jsx("div",{className:"mini-graph-container",children:e.vertices.length===0?n.jsx("div",{className:"graph-empty-mini",children:"Empty graph"}):n.jsxs("svg",{className:"mini-graph-svg",viewBox:"0 0 350 250",children:[e.edges.map(([T,E,z],F)=>{const B=m[T],M=m[E];return!B||!M?null:n.jsx("line",{x1:B.x,y1:B.y,x2:M.x,y2:M.y,className:"mini-edge"},`edge-${F}`)}),e.vertices.map(T=>{const E=m[T];return E?n.jsxs("g",{className:"mini-node",children:[n.jsx("circle",{cx:E.x,cy:E.y,r:18}),n.jsx("text",{x:E.x,y:E.y,dominantBaseline:"central",textAnchor:"middle",children:T})]},T):null})]})})]}),n.jsxs("div",{className:"matrix-section",children:[n.jsx("h3",{children:"Adjacency Matrix"}),n.jsxs("p",{className:"matrix-explanation",children:["Each cell ",n.jsx("code",{children:"matrix[row][col]"})," stores the edge weight (0 = no edge). Undirected graphs have symmetric matrices."]}),i.length===0?n.jsx("div",{className:"matrix-empty",children:"No vertices in graph. Add vertices or load a preset!"}):n.jsx("div",{className:"matrix-container",children:n.jsxs("table",{className:"adjacency-matrix",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{className:"matrix-corner"}),i.map((T,E)=>n.jsx("th",{className:"matrix-header col-header",children:T},T))]})}),n.jsx("tbody",{children:i.map((T,E)=>n.jsxs("tr",{children:[n.jsxs("th",{className:"matrix-header row-header",children:[T,n.jsx("button",{className:"remove-vertex-btn",onClick:()=>_(T),title:`Remove ${T}`,children:"×"})]}),i.map((z,F)=>{var B,M,D;return n.jsx("td",{className:$(E,F,(B=r[E])==null?void 0:B[F]),title:`matrix[${T}][${z}] = ${((M=r[E])==null?void 0:M[F])||0}`,children:((D=r[E])==null?void 0:D[F])||0},`${E}-${F}`)})]},T))})]})}),n.jsxs("div",{className:"comparison-hint",children:[n.jsx("strong",{children:"vs Adjacency List:"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("span",{className:"pro",children:"Pro:"})," O(1) edge lookup vs O(degree) for list"]}),n.jsxs("li",{children:[n.jsx("span",{className:"con",children:"Con:"})," O(V²) space vs O(V+E) for list"]}),n.jsxs("li",{children:[n.jsx("span",{className:"pro",children:"Pro:"})," Better for dense graphs (E ≈ V²)"]}),n.jsxs("li",{children:[n.jsx("span",{className:"con",children:"Con:"})," Wastes space for sparse graphs"]})]})]})]})]})]}),n.jsx(ke,{dataStructure:"graph"})]})}const ic=Ce.memo(function({currentStepIndex:t,totalSteps:r,isPlaying:s,isAtStart:i,isAtEnd:a,currentSnapshot:l,algorithmLabel:o,onPlay:c,onPause:u,onStepForward:d,onStepBackward:h,onScrub:g,onJumpToStart:b,onJumpToEnd:N}){var m;const y=p.useCallback(x=>g(parseInt(x.target.value,10)),[g]),j=r>1?t/(r-1)*100:0,f=t+1;return n.jsxs("div",{className:"debugger-suite",children:[n.jsxs("div",{className:"debugger-header",children:[n.jsx(zx,{size:16,"aria-hidden":"true"}),n.jsx("h3",{children:"Time-Travel Debugger"}),o&&n.jsx("span",{className:"scrubber-algo-badge",children:o})]}),n.jsxs("div",{className:"scrubber-controls",children:[n.jsx("button",{onClick:b,disabled:i,className:"step-btn","aria-label":"Jump to start",title:"Jump to start",children:n.jsx(qx,{size:16})}),n.jsx("button",{onClick:h,disabled:i,className:"step-btn","aria-label":"Previous step",title:"Previous step (←)",children:n.jsx(Cx,{size:20})}),n.jsx("button",{onClick:s?u:c,className:"play-pause-btn","aria-label":s?"Pause":"Play",title:s?"Pause":"Play",children:s?n.jsx(wr,{size:20}):n.jsx(Pe,{size:20})}),n.jsx("button",{onClick:d,disabled:a,className:"step-btn","aria-label":"Next step",title:"Next step (→)",children:n.jsx($n,{size:20})}),n.jsx("button",{onClick:N,disabled:a,className:"step-btn","aria-label":"Jump to end",title:"Jump to end",children:n.jsx(Sr,{size:16})})]}),n.jsxs("div",{className:"slider-container",children:[n.jsxs("div",{className:"slider-track-wrapper",children:[n.jsx("div",{className:"slider-progress-fill",style:{width:`${j}%`},"aria-hidden":"true"}),n.jsx("input",{type:"range",min:0,max:Math.max(0,r-1),value:t<0?0:t,onChange:y,className:"history-slider","aria-label":"Algorithm step scrubber","aria-valuemin":0,"aria-valuemax":r-1,"aria-valuenow":t,"aria-valuetext":`Step ${f} of ${r}`})]}),n.jsxs("div",{className:"slider-labels",children:[n.jsxs("span",{className:"slider-step-label",children:["Step ",f]}),n.jsxs("span",{className:"slider-total-label",children:["of ",r]})]})]}),l&&n.jsxs("div",{className:"step-details",children:[n.jsx("span",{className:"step-action-badge","data-action":l.action,children:(m=l.action)==null?void 0:m.toUpperCase()}),n.jsx("p",{className:"step-description",children:l.description}),n.jsxs("div",{className:"step-state-row",children:[n.jsxs("span",{className:"state-pill state-pill--visited",children:["Visited: ",l.visited.length]}),n.jsxs("span",{className:"state-pill state-pill--frontier",children:[l.algorithm==="bfs"?"Queue":"Stack",":"," ",l.frontier.length>0?`[${l.frontier.join(" → ")}]`:"empty"]})]})]})]})});function ac(e=800){const[t,r]=p.useState([]),[s,i]=p.useState(-1),[a,l]=p.useState(!1),o=p.useRef(null),c=p.useRef(-1),u=p.useRef(0);p.useEffect(()=>{c.current=s},[s]),p.useEffect(()=>()=>{o.current&&(clearInterval(o.current),o.current=null)},[]);const d=p.useCallback(()=>{o.current&&(clearInterval(o.current),o.current=null)},[]),h=p.useCallback((V,L)=>{if(V>=L-1){l(!1);return}d(),l(!0),o.current=setInterval(()=>{const _=c.current+1;if(_>=u.current){clearInterval(o.current),o.current=null,l(!1);return}c.current=_,i(_)},e)},[e,d]),g=p.useCallback(V=>{d(),l(!1),u.current=V.length,c.current=0,r(V),i(0),requestAnimationFrame(()=>{h(0,V.length)})},[h,d]),b=p.useCallback(()=>{d(),l(!1)},[d]),N=p.useCallback(()=>{c.current<u.current-1&&h(c.current,u.current)},[h]),y=p.useCallback(()=>{l(V=>V?(d(),!1):(c.current<u.current-1&&requestAnimationFrame(()=>N()),V))},[d,N]),j=p.useCallback(()=>{d(),l(!1),i(V=>{const L=Math.min(V+1,u.current-1);return c.current=L,L})},[d]),f=p.useCallback(()=>{d(),l(!1),i(V=>{const L=Math.max(V-1,0);return c.current=L,L})},[d]),m=p.useCallback(V=>{const L=Math.max(0,Math.min(V,u.current-1));o.current&&(clearInterval(o.current),o.current=null,l(!1)),c.current=L,i(L)},[]),x=p.useCallback(()=>{d(),l(!1),r([]),i(-1),c.current=-1,u.current=0},[d]),S=t[s]??null,v=t.length,P=s<=0,C=s>=v-1&&v>0;return{history:t,currentStepIndex:s,currentSnapshot:S,isPlaying:a,totalSteps:v,isAtStart:P,isAtEnd:C,loadHistory:g,pause:b,resume:N,togglePlayPause:y,stepForward:j,stepBackward:f,scrubTo:m,reset:x}}const sN={bfs:{visit:e=>`Dequeued "${e}" from the queue. Marking visited and scanning neighbors.`,enqueue:e=>`Enqueued "${e}" → added to back of queue for later processing.`,explore:e=>`Exploring neighbors of "${e}". Unvisited neighbors will be enqueued.`,done:()=>"BFS complete. All reachable nodes have been visited."},dfs:{visit:e=>`Visiting "${e}". Exploring as deep as possible from here.`,push:e=>`Pushed "${e}" onto the stack.`,pop:e=>`Popped "${e}" from stack.`,backtrack:e=>`Backtracking from "${e}". All neighbors exhausted.`,done:()=>"DFS complete. All reachable nodes have been visited."}};function iN(e,t){const s=(sN[t]??{})[e.action];return s?s(e.vertex):`Processing node "${e.vertex}" (${e.action}).`}function aN(e,t,r,s){const i=r==="bfs",a=Object.freeze(structuredClone(e.visited??[])),l=Object.freeze(structuredClone(i?e.queue??[]:e.stack??[]));return Object.freeze({vertices:s.vertices,edges:s.edges,step:t,action:e.action,currentNode:e.action==="visit"?e.vertex:null,visited:a,frontier:l,description:iN(e,r),algorithm:r})}function Cp(e,t,r){return Object.freeze(e.map((s,i)=>aN(s,i,t,r)))}function lN(){const[e,t]=p.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=p.useState(""),[i,a]=p.useState({}),{message:l,showMessage:o}=Ue(3e3),{currentStepIndex:c,currentSnapshot:u,isPlaying:d,totalSteps:h,isAtStart:g,isAtEnd:b,loadHistory:N,pause:y,resume:j,stepForward:f,stepBackward:m,scrubTo:x,reset:S}=ac(900),v=new Set((u==null?void 0:u.visited)??[]),P=(u==null?void 0:u.currentNode)??null,C=(u==null?void 0:u.frontier)??[];p.useEffect(()=>{L()},[]),p.useEffect(()=>{e.vertices.length>0&&V()},[e.vertices]);const V=p.useCallback(()=>{const $=Math.min(500,350)*.35,T={},E=e.vertices.length;e.vertices.forEach((z,F)=>{const B=2*Math.PI*F/E-Math.PI/2;T[z]={x:250+$*Math.cos(B),y:175+$*Math.sin(B)}}),a(T)},[e.vertices]),L=async()=>{try{const O=await ue("/api/graph");O.vertices.length===0?await _("simple"):t(O)}catch(O){console.error("Error loading graph:",O)}},_=async O=>{try{const A=await te(`/api/graph/preset/${O}`,{});if(A.error){o(A.error,"error");return}t(A),S(),o(`Loaded '${O}' preset`,"success")}catch{o("Error loading preset","error")}},q=async()=>{if(!r.trim()){o("Please select a starting vertex!","error");return}try{const O=await ue(`/api/graph/bfs/${r}`);if(O.error){o(O.error,"error");return}const A=Cp(O.steps,"bfs",e);N(A),o("BFS complete — use the scrubber to explore each step.","info")}catch(O){console.error("BFS Error:",O),o("Error running BFS","error")}},W=O=>P===O?"graph-node current":v.has(O)?"graph-node visited":C.includes(O)?"graph-node queued":"graph-node";return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Me,{className:"icon-sm"}),n.jsx("span",{children:"What is Breadth-First Search?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"BFS"})," explores a graph level by level, visiting all neighbors of a node before moving to the next level."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(ve,{}),n.jsx("span",{children:"Like ripples spreading outward when you drop a stone in water!"})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Time"}),n.jsx("span",{className:"op-desc",children:"Visit all nodes"}),n.jsx("span",{className:"op-complexity",children:"O(V+E)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Space"}),n.jsx("span",{className:"op-desc",children:"Queue storage"}),n.jsx("span",{className:"op-complexity",children:"O(V)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Structure"}),n.jsx("span",{className:"op-desc",children:"Uses a Queue"}),n.jsx("span",{className:"op-complexity",children:"FIFO"})]})]})]})]}),n.jsx(ye,{context:"Breadth-First Search (BFS) algorithm on graphs"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"BFS Controls"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Load Graph Preset"}),n.jsxs("div",{className:"btn-group preset-group",children:[n.jsx("button",{onClick:()=>_("simple"),className:"btn btn-preset",disabled:d,children:"Simple"}),n.jsx("button",{onClick:()=>_("tree"),className:"btn btn-preset",disabled:d,children:"Tree"}),n.jsx("button",{onClick:()=>_("cyclic"),className:"btn btn-preset",disabled:d,children:"Cyclic"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Start BFS From"}),n.jsxs("select",{value:r,onChange:O=>s(O.target.value),className:"vertex-select full-width",disabled:d,children:[n.jsx("option",{value:"",children:"Select start vertex"}),e.vertices.map(O=>n.jsx("option",{value:O,children:O},O))]})]}),n.jsx("div",{className:"operation-group",children:n.jsxs("div",{className:"btn-group",children:[n.jsxs("button",{onClick:q,className:"btn btn-bfs",disabled:d,children:[n.jsx(Pe,{size:14})," Run BFS"]}),n.jsx("button",{onClick:S,className:"btn btn-reset",children:n.jsx(xn,{size:14})})]})}),h>0&&n.jsx(ic,{currentStepIndex:c,totalSteps:h,isPlaying:d,isAtStart:g,isAtEnd:b,currentSnapshot:u,algorithmLabel:"BFS",onPlay:j,onPause:y,onStepForward:f,onStepBackward:m,onScrub:x,onJumpToStart:()=>x(0),onJumpToEnd:()=>x(h-1)}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Vertices:"}),n.jsx("span",{className:"info-value",children:e.vertices.length})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Queue:"}),n.jsxs("span",{className:"info-value",children:["[",C.join(", "),"]"]})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Visited:"}),n.jsxs("span",{className:"info-value",children:[v.size," / ",e.vertices.length]})]})]}),n.jsx(He,{message:l})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"BFS Visualization"}),n.jsx("div",{className:"graph-container",children:e.vertices.length===0?n.jsx("div",{className:"graph-empty",children:"Loading graph..."}):n.jsxs("svg",{className:"graph-svg",viewBox:"0 0 500 350",children:[e.edges.map(([O,A],k)=>{const R=i[O],$=i[A];return!R||!$?null:n.jsx("line",{x1:R.x,y1:R.y,x2:$.x,y2:$.y,className:"graph-edge"},`edge-${k}`)}),e.vertices.map(O=>{const A=i[O];return A?n.jsxs("g",{className:W(O),children:[n.jsx("circle",{cx:A.x,cy:A.y,r:25,className:"node-circle"}),n.jsx("text",{x:A.x,y:A.y,className:"node-label",dominantBaseline:"central",textAnchor:"middle",children:O})]},O):null})]})})]})]}),n.jsx(ke,{dataStructure:"bfs"})]})}function oN(){const[e,t]=p.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=p.useState(""),[i,a]=p.useState({}),{message:l,showMessage:o}=Ue(3e3),{currentStepIndex:c,currentSnapshot:u,isPlaying:d,totalSteps:h,isAtStart:g,isAtEnd:b,loadHistory:N,pause:y,resume:j,stepForward:f,stepBackward:m,scrubTo:x,reset:S}=ac(900),v=new Set((u==null?void 0:u.visited)??[]),P=(u==null?void 0:u.currentNode)??null,C=(u==null?void 0:u.frontier)??[];p.useEffect(()=>{L()},[]),p.useEffect(()=>{e.vertices.length>0&&V()},[e.vertices]);const V=p.useCallback(()=>{const $=Math.min(500,350)*.35,T={},E=e.vertices.length;e.vertices.forEach((z,F)=>{const B=2*Math.PI*F/E-Math.PI/2;T[z]={x:250+$*Math.cos(B),y:175+$*Math.sin(B)}}),a(T)},[e.vertices]),L=async()=>{try{const O=await ue("/api/graph");O.vertices.length===0?await _("simple"):t(O)}catch(O){console.error("Error loading graph:",O)}},_=async O=>{try{const A=await te(`/api/graph/preset/${O}`,{});if(A.error){o(A.error,"error");return}t(A),S(),o(`Loaded '${O}' preset`,"success")}catch{o("Error loading preset","error")}},q=async()=>{if(!r.trim()){o("Please select a starting vertex!","error");return}try{const O=await ue(`/api/graph/dfs/${r}`);if(O.error){o(O.error,"error");return}const A=Cp(O.steps,"dfs",e);N(A),o("DFS complete — use the scrubber to explore each step.","info")}catch(O){console.error("DFS Error:",O),o("Error running DFS","error")}},W=O=>P===O?"graph-node current":v.has(O)?"graph-node visited":C.includes(O)?"graph-node stacked":"graph-node";return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Me,{className:"icon-sm"}),n.jsx("span",{children:"What is Depth-First Search?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"DFS"})," explores a graph by going as deep as possible along each branch before backtracking."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(ve,{}),n.jsx("span",{children:"Like exploring a maze by following one path to its end before trying another!"})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Time"}),n.jsx("span",{className:"op-desc",children:"Visit all nodes"}),n.jsx("span",{className:"op-complexity",children:"O(V+E)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Space"}),n.jsx("span",{className:"op-desc",children:"Stack storage"}),n.jsx("span",{className:"op-complexity",children:"O(V)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Structure"}),n.jsx("span",{className:"op-desc",children:"Uses a Stack"}),n.jsx("span",{className:"op-complexity",children:"LIFO"})]})]})]})]}),n.jsx(ye,{context:"Depth-First Search (DFS) algorithm on graphs"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"DFS Controls"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Load Graph Preset"}),n.jsxs("div",{className:"btn-group preset-group",children:[n.jsx("button",{onClick:()=>_("simple"),className:"btn btn-preset",disabled:d,children:"Simple"}),n.jsx("button",{onClick:()=>_("tree"),className:"btn btn-preset",disabled:d,children:"Tree"}),n.jsx("button",{onClick:()=>_("cyclic"),className:"btn btn-preset",disabled:d,children:"Cyclic"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Start DFS From"}),n.jsxs("select",{value:r,onChange:O=>s(O.target.value),className:"vertex-select full-width",disabled:d,children:[n.jsx("option",{value:"",children:"Select start vertex"}),e.vertices.map(O=>n.jsx("option",{value:O,children:O},O))]})]}),n.jsx("div",{className:"operation-group",children:n.jsxs("div",{className:"btn-group",children:[n.jsxs("button",{onClick:q,className:"btn btn-dfs",disabled:d,children:[n.jsx(Pe,{size:14})," Run DFS"]}),n.jsx("button",{onClick:S,className:"btn btn-reset",children:n.jsx(xn,{size:14})})]})}),h>0&&n.jsx(ic,{currentStepIndex:c,totalSteps:h,isPlaying:d,isAtStart:g,isAtEnd:b,currentSnapshot:u,algorithmLabel:"DFS",onPlay:j,onPause:y,onStepForward:f,onStepBackward:m,onScrub:x,onJumpToStart:()=>x(0),onJumpToEnd:()=>x(h-1)}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Vertices:"}),n.jsx("span",{className:"info-value",children:e.vertices.length})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Stack:"}),n.jsxs("span",{className:"info-value",children:["[",C.join(", "),"]"]})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Visited:"}),n.jsxs("span",{className:"info-value",children:[v.size," / ",e.vertices.length]})]})]}),n.jsx(He,{message:l})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"DFS Visualization"}),n.jsx("div",{className:"graph-container",children:e.vertices.length===0?n.jsx("div",{className:"graph-empty",children:"Loading graph..."}):n.jsxs("svg",{className:"graph-svg",viewBox:"0 0 500 350",children:[e.edges.map(([O,A],k)=>{const R=i[O],$=i[A];return!R||!$?null:n.jsx("line",{x1:R.x,y1:R.y,x2:$.x,y2:$.y,className:"graph-edge"},`edge-${k}`)}),e.vertices.map(O=>{const A=i[O];return A?n.jsxs("g",{className:W(O),children:[n.jsx("circle",{cx:A.x,cy:A.y,r:25,className:"node-circle"}),n.jsx("text",{x:A.x,y:A.y,className:"node-label",dominantBaseline:"central",textAnchor:"middle",children:O})]},O):null})]})})]})]}),n.jsx(ke,{dataStructure:"dfs"})]})}function cN(){const[e,t]=p.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=p.useState(""),[i,a]=p.useState(""),[l,o]=p.useState({}),[c,u]=p.useState({}),[d,h]=p.useState([]),[g,b]=p.useState(-1),[N,y]=p.useState(!1),[j,f]=p.useState(!1),[m,x]=p.useState(new Set),[S,v]=p.useState(null),[P,C]=p.useState(null),[V,L]=p.useState({}),{message:_,showMessage:q}=Ue(3e3),W=p.useRef(null),O=p.useRef(0);p.useEffect(()=>{k()},[]),p.useEffect(()=>{e.vertices.length>0&&A()},[e.vertices]);const A=p.useCallback(()=>{const ne=Math.min(500,350)*.35,U={},G=e.vertices.length;e.vertices.forEach((le,re)=>{const we=2*Math.PI*re/G-Math.PI/2;U[le]={x:250+ne*Math.cos(we),y:175+ne*Math.sin(we)}}),L(U)},[e.vertices]),k=async()=>{try{const w=await ue("/api/graph");w.vertices.length===0?await R("weighted"):t(w)}catch(w){console.error("Error loading graph:",w)}},R=async w=>{try{const H=await te(`/api/graph/preset/${w}`,{});if(H.error){q(H.error,"error");return}t(H),B(),q(`Loaded '${w}' preset`,"success")}catch{q("Error loading preset","error")}},$=async()=>{if(!r){q("Please select a start vertex!","error");return}try{const w=i?`/api/graph/dijkstra/${r}?end=${i}`:`/api/graph/dijkstra/${r}`,H=await ue(w);if(H.error){q(H.error,"error");return}o(H.distances),u(H.paths),h(H.steps),q("Starting Dijkstra's algorithm...","info"),T(H.steps)}catch{q("Error running Dijkstra's algorithm","error")}},T=w=>{W.current&&clearInterval(W.current),y(!0),f(!1),x(new Set),v(null),C(null),b(-1),O.current=0,W.current=setInterval(()=>{if(O.current>=w.length){clearInterval(W.current),y(!1),v(null),C(null),q("Dijkstra's algorithm complete!","success");return}const H=w[O.current];b(O.current),o(H.distances||{}),x(new Set(H.visited||[])),H.action==="visit"?(v(H.current),C(null)):(H.action==="check"||H.action==="update")&&(v(H.current),C({from:H.current,to:H.neighbor})),O.current++},1200)},E=()=>{j?(f(!1),z()):(f(!0),W.current&&clearInterval(W.current))},z=()=>{W.current&&clearInterval(W.current),W.current=setInterval(()=>{if(O.current>=d.length){clearInterval(W.current),y(!1),v(null),C(null);return}const w=d[O.current];b(O.current),o(w.distances||{}),x(new Set(w.visited||[])),w.action==="visit"?(v(w.current),C(null)):(w.action==="check"||w.action==="update")&&(v(w.current),C({from:w.current,to:w.neighbor})),O.current++},1200)},F=()=>{if(O.current>=d.length)return;const w=d[O.current];b(O.current),o(w.distances||{}),x(new Set(w.visited||[])),w.action==="visit"?(v(w.current),C(null)):(w.action==="check"||w.action==="update")&&(v(w.current),C({from:w.current,to:w.neighbor})),O.current++,O.current>=d.length&&(y(!1),v(null),C(null))},B=()=>{W.current&&clearInterval(W.current),o({}),u({}),h([]),b(-1),x(new Set),v(null),C(null),y(!1),f(!1),O.current=0},M=w=>S===w?"graph-node current":m.has(w)?"graph-node visited":"graph-node",D=(w,H)=>P&&(P.from===w&&P.to===H||P.from===H&&P.to===w)?"graph-edge checking":"graph-edge",I=()=>g>=0&&g<d.length?d[g].message:"";return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Me,{className:"icon-sm"}),n.jsx("span",{children:"What is Dijkstra's Algorithm?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"Dijkstra's Algorithm"})," finds the shortest path from a source vertex to all other vertices in a weighted graph with non-negative weights."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(ve,{}),n.jsx("span",{children:"Like GPS finding the quickest route - always picks the closest unvisited location!"})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Time"}),n.jsx("span",{className:"op-desc",children:"With min-heap"}),n.jsx("span",{className:"op-complexity",children:"O((V+E)logV)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Space"}),n.jsx("span",{className:"op-desc",children:"Distance array"}),n.jsx("span",{className:"op-complexity",children:"O(V)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Strategy"}),n.jsx("span",{className:"op-desc",children:"Greedy"}),n.jsx("span",{className:"op-complexity",children:"Min first"})]})]}),n.jsxs("div",{className:"concept-uses",children:[n.jsx("strong",{children:"Common Uses:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"GPS navigation systems"}),n.jsx("li",{children:"Network routing protocols"}),n.jsx("li",{children:"Social network analysis"}),n.jsx("li",{children:"Game pathfinding"})]})]})]})]}),n.jsx(ye,{context:"Dijkstra's shortest path algorithm"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Dijkstra's Algorithm"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Load Preset"}),n.jsxs("div",{className:"btn-group preset-group",children:[n.jsx("button",{onClick:()=>R("weighted"),className:"btn btn-preset",disabled:N,children:"Weighted"}),n.jsx("button",{onClick:()=>R("simple"),className:"btn btn-preset",disabled:N,children:"Simple"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Start Vertex"}),n.jsxs("select",{value:r,onChange:w=>s(w.target.value),className:"vertex-select full-width",disabled:N,children:[n.jsx("option",{value:"",children:"Select start"}),e.vertices.map(w=>n.jsx("option",{value:w,children:w},w))]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"End Vertex (Optional)"}),n.jsxs("select",{value:i,onChange:w=>a(w.target.value),className:"vertex-select full-width",disabled:N,children:[n.jsx("option",{value:"",children:"All vertices"}),e.vertices.map(w=>n.jsx("option",{value:w,children:w},w))]})]}),n.jsx("div",{className:"operation-group",children:n.jsxs("div",{className:"btn-group",children:[n.jsxs("button",{onClick:$,className:"btn btn-dijkstra",disabled:N&&!j,children:[n.jsx(Pe,{size:14})," Run"]}),N&&n.jsx("button",{onClick:E,className:"btn btn-pause",children:j?n.jsx(Pe,{size:14}):n.jsx(wr,{size:14})}),j&&n.jsx("button",{onClick:F,className:"btn btn-step",children:n.jsx(Sr,{size:14})}),n.jsx("button",{onClick:B,className:"btn btn-reset",children:n.jsx(xn,{size:14})})]})}),Object.keys(l).length>0&&n.jsxs("div",{className:"distance-table",children:[n.jsxs("h3",{children:["Distances from ",r]}),n.jsx("div",{className:"distance-grid",children:e.vertices.map(w=>n.jsxs("div",{className:`distance-item ${m.has(w)?"visited":""} ${S===w?"current":""}`,children:[n.jsx("span",{className:"vertex-label",children:w}),n.jsx("span",{className:"distance-value",children:l[w]==="inf"||l[w]===null?"∞":l[w]})]},w))})]}),g>=0&&n.jsxs("div",{className:"current-step-box",children:[n.jsxs("strong",{children:["Step ",g+1,":"]}),n.jsx("p",{children:I()})]}),n.jsx(He,{message:_}),n.jsxs("div",{className:"legend",children:[n.jsx("h3",{children:"Legend"}),n.jsxs("div",{className:"legend-items",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color unvisited"}),n.jsx("span",{children:"Unvisited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color current"}),n.jsx("span",{children:"Current"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color visited"}),n.jsx("span",{children:"Visited"})]})]})]})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Visualization"}),n.jsx("div",{className:"graph-container",children:e.vertices.length===0?n.jsx("div",{className:"graph-empty",children:"Loading graph..."}):n.jsxs("svg",{className:"graph-svg",viewBox:"0 0 500 350",children:[e.edges.map(([w,H,Y],Z)=>{const ne=V[w],U=V[H];if(!ne||!U)return null;const G=(ne.x+U.x)/2,le=(ne.y+U.y)/2;return n.jsxs("g",{children:[n.jsx("line",{x1:ne.x,y1:ne.y,x2:U.x,y2:U.y,className:D(w,H)}),n.jsx("circle",{cx:G,cy:le,r:12,className:"weight-bg"}),n.jsx("text",{x:G,y:le,className:"weight-label",dominantBaseline:"central",textAnchor:"middle",children:Y})]},`edge-${Z}`)}),e.vertices.map(w=>{const H=V[w];return H?n.jsxs("g",{className:M(w),children:[n.jsx("circle",{cx:H.x,cy:H.y,r:25,className:"node-circle"}),n.jsx("text",{x:H.x,y:H.y,className:"node-label",dominantBaseline:"central",textAnchor:"middle",children:w}),l[w]!==void 0&&n.jsxs("text",{x:H.x,y:H.y+38,className:"distance-label",dominantBaseline:"central",textAnchor:"middle",children:["d=",l[w]==="inf"||l[w]===null?"∞":l[w]]})]},w):null})]})}),Object.keys(c).length>0&&!N&&n.jsxs("div",{className:"paths-section",children:[n.jsxs("h3",{children:["Shortest Paths from ",r]}),n.jsx("div",{className:"paths-list",children:Object.entries(c).map(([w,H])=>n.jsxs("div",{className:"path-item",children:[n.jsxs("span",{className:"path-target",children:[w,":"]}),n.jsx("span",{className:"path-route",children:H.join(" → ")}),n.jsxs("span",{className:"path-distance",children:["(dist: ",l[w]===null?"∞":l[w],")"]})]},w))})]})]})]}),n.jsx(ke,{dataStructure:"dijkstra"})]})}function dN(){const[e,t]=p.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=p.useState(""),[i,a]=p.useState([]),[l,o]=p.useState(0),[c,u]=p.useState([]),[d,h]=p.useState(-1),[g,b]=p.useState(!1),[N,y]=p.useState(!1),[j,f]=p.useState(new Set),[m,x]=p.useState(null),[S,v]=p.useState(null),[P,C]=p.useState({}),{message:V,showMessage:L}=Ue(3e3),_=p.useRef(null),q=p.useRef(0);p.useEffect(()=>{O()},[]),p.useEffect(()=>{e.vertices.length>0&&W()},[e.vertices]);const W=p.useCallback(()=>{const Z=Math.min(500,350)*.35,ne={},U=e.vertices.length;e.vertices.forEach((G,le)=>{const re=2*Math.PI*le/U-Math.PI/2;ne[G]={x:250+Z*Math.cos(re),y:175+Z*Math.sin(re)}}),C(ne)},[e.vertices]),O=async()=>{try{const I=await ue("/api/graph");I.vertices.length===0?await A("weighted"):t(I)}catch(I){console.error("Error loading graph:",I)}},A=async I=>{try{const w=await te(`/api/graph/preset/${I}`,{});if(w.error){L(w.error,"error");return}t(w),z(),L(`Loaded '${I}' preset`,"success")}catch{L("Error loading preset","error")}},k=async()=>{try{const I=r?`/api/graph/mst?start=${r}`:"/api/graph/mst",w=await ue(I);if(w.error){L(w.error,"error");return}u(w.steps),L("Starting Prim's MST algorithm...","info"),R(w.steps,w.mst_edges,w.total_weight)}catch{L("Error running MST algorithm","error")}},R=(I,w,H)=>{_.current&&clearInterval(_.current),b(!0),y(!1),f(new Set),a([]),o(0),x(null),v(null),h(-1),q.current=0,_.current=setInterval(()=>{if(q.current>=I.length){clearInterval(_.current),b(!1),x(null),v(null),a(w),o(H),L(`MST complete! Total weight: ${H}`,"success");return}const Y=I[q.current];h(q.current),f(new Set(Y.visited||[])),a(Y.mst_edges||[]),o(Y.total_weight||0),Y.action==="add"?(x(Y.current),v(null)):Y.action==="consider"&&(x(Y.current),v({from:Y.current,to:Y.neighbor,weight:Y.weight})),q.current++},1e3)},$=()=>{N?(y(!1),T()):(y(!0),_.current&&clearInterval(_.current))},T=()=>{_.current&&clearInterval(_.current),_.current=setInterval(()=>{if(q.current>=c.length){clearInterval(_.current),b(!1),x(null),v(null);return}const I=c[q.current];h(q.current),f(new Set(I.visited||[])),a(I.mst_edges||[]),o(I.total_weight||0),I.action==="add"?(x(I.current),v(null)):I.action==="consider"&&(x(I.current),v({from:I.current,to:I.neighbor,weight:I.weight})),q.current++},1e3)},E=()=>{if(q.current>=c.length)return;const I=c[q.current];h(q.current),f(new Set(I.visited||[])),a(I.mst_edges||[]),o(I.total_weight||0),I.action==="add"?(x(I.current),v(null)):I.action==="consider"&&(x(I.current),v({from:I.current,to:I.neighbor,weight:I.weight})),q.current++,q.current>=c.length&&(b(!1),x(null),v(null))},z=()=>{_.current&&clearInterval(_.current),a([]),o(0),u([]),h(-1),f(new Set),x(null),v(null),b(!1),y(!1),q.current=0},F=I=>m===I?"graph-node current":j.has(I)?"graph-node visited":"graph-node",B=(I,w)=>i.some(([H,Y])=>H===I&&Y===w||H===w&&Y===I),M=(I,w)=>S&&(S.from===I&&S.to===w||S.from===w&&S.to===I)?"graph-edge considering":B(I,w)?"graph-edge mst":"graph-edge",D=()=>d>=0&&d<c.length?c[d].message:"";return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Me,{className:"icon-sm"}),n.jsx("span",{children:"What is Minimum Spanning Tree?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:["A ",n.jsx("strong",{children:"Minimum Spanning Tree (MST)"})," connects all vertices with the minimum total edge weight, without any cycles."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(ve,{}),n.jsx("span",{children:"Like finding the cheapest way to connect all cities with roads!"})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Time"}),n.jsx("span",{className:"op-desc",children:"Prim's with heap"}),n.jsx("span",{className:"op-complexity",children:"O((V+E)logV)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Edges"}),n.jsx("span",{className:"op-desc",children:"In MST"}),n.jsx("span",{className:"op-complexity",children:"V - 1"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Strategy"}),n.jsx("span",{className:"op-desc",children:"Greedy"}),n.jsx("span",{className:"op-complexity",children:"Min edge"})]})]}),n.jsxs("div",{className:"concept-uses",children:[n.jsx("strong",{children:"Common Uses:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Network design (cables, pipes)"}),n.jsx("li",{children:"Cluster analysis"}),n.jsx("li",{children:"Image segmentation"}),n.jsx("li",{children:"Approximation algorithms"})]})]})]})]}),n.jsx(ye,{context:"Minimum Spanning Tree, Prim's algorithm"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Prim's MST Algorithm"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Load Preset"}),n.jsxs("div",{className:"btn-group preset-group",children:[n.jsx("button",{onClick:()=>A("weighted"),className:"btn btn-preset",disabled:g,children:"Weighted"}),n.jsx("button",{onClick:()=>A("complete"),className:"btn btn-preset",disabled:g,children:"Complete"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Start Vertex (Optional)"}),n.jsxs("select",{value:r,onChange:I=>s(I.target.value),className:"vertex-select full-width",disabled:g,children:[n.jsx("option",{value:"",children:"Auto (first vertex)"}),e.vertices.map(I=>n.jsx("option",{value:I,children:I},I))]})]}),n.jsx("div",{className:"operation-group",children:n.jsxs("div",{className:"btn-group",children:[n.jsxs("button",{onClick:k,className:"btn btn-mst",disabled:g&&!N,children:[n.jsx(Pe,{size:14})," Run MST"]}),g&&n.jsx("button",{onClick:$,className:"btn btn-pause",children:N?n.jsx(Pe,{size:14}):n.jsx(wr,{size:14})}),N&&n.jsx("button",{onClick:E,className:"btn btn-step",children:n.jsx(Sr,{size:14})}),n.jsx("button",{onClick:z,className:"btn btn-reset",children:n.jsx(xn,{size:14})})]})}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"MST Edges:"}),n.jsxs("span",{className:"info-value",children:[i.length," / ",e.vertices.length-1]})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Total Weight:"}),n.jsx("span",{className:"info-value mst-weight",children:l})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Visited:"}),n.jsxs("span",{className:"info-value",children:[j.size," / ",e.vertices.length]})]})]}),d>=0&&n.jsxs("div",{className:"current-step-box",children:[n.jsxs("strong",{children:["Step ",d+1,":"]}),n.jsx("p",{children:D()})]}),n.jsx(He,{message:V}),n.jsxs("div",{className:"legend",children:[n.jsx("h3",{children:"Legend"}),n.jsxs("div",{className:"legend-items",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color unvisited"}),n.jsx("span",{children:"Unvisited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color current"}),n.jsx("span",{children:"Current"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color visited"}),n.jsx("span",{children:"In MST"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-line mst"}),n.jsx("span",{children:"MST Edge"})]})]})]})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Visualization"}),n.jsx("div",{className:"graph-container",children:e.vertices.length===0?n.jsx("div",{className:"graph-empty",children:"Loading graph..."}):n.jsxs("svg",{className:"graph-svg",viewBox:"0 0 500 350",children:[e.edges.map(([I,w,H],Y)=>{const Z=P[I],ne=P[w];if(!Z||!ne)return null;const U=(Z.x+ne.x)/2,G=(Z.y+ne.y)/2;return n.jsxs("g",{children:[n.jsx("line",{x1:Z.x,y1:Z.y,x2:ne.x,y2:ne.y,className:M(I,w)}),n.jsx("circle",{cx:U,cy:G,r:12,className:"weight-bg"}),n.jsx("text",{x:U,y:G,className:"weight-label",dominantBaseline:"central",textAnchor:"middle",children:H})]},`edge-${Y}`)}),e.vertices.map(I=>{const w=P[I];return w?n.jsxs("g",{className:F(I),children:[n.jsx("circle",{cx:w.x,cy:w.y,r:25,className:"node-circle"}),n.jsx("text",{x:w.x,y:w.y,className:"node-label",dominantBaseline:"central",textAnchor:"middle",children:I})]},I):null})]})}),i.length>0&&n.jsxs("div",{className:"mst-edges-section",children:[n.jsx("h3",{children:"MST Edges"}),n.jsx("div",{className:"mst-edges-list",children:i.map(([I,w,H],Y)=>n.jsxs("div",{className:"mst-edge-item",children:[n.jsxs("span",{children:[I," — ",w]}),n.jsxs("span",{className:"edge-weight",children:["(w: ",H,")"]})]},Y))}),n.jsx("div",{className:"mst-total",children:n.jsxs("strong",{children:["Total MST Weight: ",l]})})]})]})]}),n.jsx(ke,{dataStructure:"graph"})]})}function uN(){const[e,t]=p.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=p.useState([]),[i,a]=p.useState({}),[l,o]=p.useState([]),[c,u]=p.useState(-1),[d,h]=p.useState(!1),[g,b]=p.useState(!1),[N,y]=p.useState(new Set),[j,f]=p.useState(null),[m,x]=p.useState([]),[S,v]=p.useState(!1),[P,C]=p.useState({}),{message:V,showMessage:L}=Ue(3e3),_=p.useRef(null),q=p.useRef(0);p.useEffect(()=>{O()},[]),p.useEffect(()=>{e.vertices.length>0&&W()},[e.vertices]);const W=p.useCallback(()=>{const H=Math.min(500,350)*.35,Y={},Z=e.vertices.length;e.vertices.forEach((ne,U)=>{const G=2*Math.PI*U/Z-Math.PI/2;Y[ne]={x:250+H*Math.cos(G),y:175+H*Math.sin(G)}}),C(Y)},[e.vertices]),O=async()=>{try{const M=await ue("/api/graph");M.vertices.length===0?await A("dag"):t(M)}catch(M){console.error("Error loading graph:",M)}},A=async M=>{try{const D=await te(`/api/graph/preset/${M}`,{});if(D.error){L(D.error,"error");return}t(D),z(),L(`Loaded '${M}' preset`,"success")}catch{L("Error loading preset","error")}},k=async()=>{try{const M=await ue("/api/graph/topological");if(M.error){L(M.error,"error");return}if(M.has_cycle){v(!0),L("Graph has a cycle - topological sort not possible!","error");return}v(!1),s(M.sorted||[]),o(M.steps),L("Starting Topological Sort (Kahn's Algorithm)...","info"),R(M.steps)}catch{L("Error running topological sort","error")}},R=M=>{_.current&&clearInterval(_.current),h(!0),b(!1),y(new Set),f(null),x([]),a({}),u(-1),q.current=0,_.current=setInterval(()=>{if(q.current>=M.length){clearInterval(_.current),h(!1),f(null),L(`Topological Sort Complete: ${r.join(" → ")}`,"success");return}const D=M[q.current];u(q.current),a(D.in_degrees||{}),x(D.queue||[]),D.action==="process"?(f(D.vertex),y(new Set(D.result||[]))):D.action==="decrement"||D.action==="enqueue"?f(D.vertex||D.neighbor):D.action==="init"&&(a(D.in_degrees||{}),x(D.queue||[])),q.current++},1e3)},$=()=>{g?(b(!1),T()):(b(!0),_.current&&clearInterval(_.current))},T=()=>{_.current&&clearInterval(_.current),_.current=setInterval(()=>{if(q.current>=l.length){clearInterval(_.current),h(!1),f(null);return}const M=l[q.current];u(q.current),a(M.in_degrees||{}),x(M.queue||[]),M.action==="process"?(f(M.vertex),y(new Set(M.result||[]))):(M.action==="decrement"||M.action==="enqueue")&&f(M.vertex||M.neighbor),q.current++},1e3)},E=()=>{if(q.current>=l.length)return;const M=l[q.current];u(q.current),a(M.in_degrees||{}),x(M.queue||[]),M.action==="process"?(f(M.vertex),y(new Set(M.result||[]))):(M.action==="decrement"||M.action==="enqueue")&&f(M.vertex||M.neighbor),q.current++,q.current>=l.length&&(h(!1),f(null))},z=()=>{_.current&&clearInterval(_.current),s([]),a({}),o([]),u(-1),y(new Set),f(null),x([]),v(!1),h(!1),b(!1),q.current=0},F=M=>j===M?"graph-node current":N.has(M)?"graph-node visited":m.includes(M)?"graph-node queued":"graph-node",B=()=>c>=0&&c<l.length?l[c].message:"";return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Me,{className:"icon-sm"}),n.jsx("span",{children:"What is Topological Sort?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"Topological Sort"})," orders vertices in a directed acyclic graph (DAG) so that for every edge u→v, u comes before v in the ordering."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(ve,{}),n.jsx("span",{children:"Like scheduling tasks - you must complete prerequisites before dependent tasks!"})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Time"}),n.jsx("span",{className:"op-desc",children:"Kahn's Algorithm"}),n.jsx("span",{className:"op-complexity",children:"O(V+E)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Space"}),n.jsx("span",{className:"op-desc",children:"In-degree array"}),n.jsx("span",{className:"op-complexity",children:"O(V)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Requirement"}),n.jsx("span",{className:"op-desc",children:"Graph type"}),n.jsx("span",{className:"op-complexity",children:"DAG only"})]})]}),n.jsxs("div",{className:"concept-uses",children:[n.jsx("strong",{children:"Common Uses:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Task scheduling with dependencies"}),n.jsx("li",{children:"Build systems (Makefile)"}),n.jsx("li",{children:"Course prerequisite planning"}),n.jsx("li",{children:"Package dependency resolution"})]})]})]})]}),n.jsx(ye,{context:"Topological Sort using Kahn's Algorithm on directed acyclic graphs"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Topological Sort"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Load Graph Preset"}),n.jsxs("div",{className:"btn-group preset-group",children:[n.jsx("button",{onClick:()=>A("dag"),className:"btn btn-preset",disabled:d,children:"DAG"}),n.jsx("button",{onClick:()=>A("tree"),className:"btn btn-preset",disabled:d,children:"Tree"}),n.jsx("button",{onClick:()=>A("simple"),className:"btn btn-preset",disabled:d,children:"Simple"})]})]}),n.jsx("div",{className:"operation-group",children:n.jsxs("div",{className:"btn-group",children:[n.jsxs("button",{onClick:k,className:"btn btn-bfs",disabled:d&&!g,children:[n.jsx(Pe,{size:14})," Run Sort"]}),d&&n.jsx("button",{onClick:$,className:"btn btn-pause",children:g?n.jsx(Pe,{size:14}):n.jsx(wr,{size:14})}),g&&n.jsx("button",{onClick:E,className:"btn btn-step",children:n.jsx(Sr,{size:14})}),n.jsx("button",{onClick:z,className:"btn btn-reset",children:n.jsx(xn,{size:14})})]})}),Object.keys(i).length>0&&n.jsxs("div",{className:"distance-table",children:[n.jsx("h3",{children:"In-Degrees"}),n.jsx("div",{className:"distance-grid",children:e.vertices.map(M=>n.jsxs("div",{className:`distance-item ${N.has(M)?"visited":""} ${j===M?"current":""}`,children:[n.jsx("span",{className:"vertex-label",children:M}),n.jsx("span",{className:"distance-value",children:i[M]??"-"})]},M))})]}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Vertices:"}),n.jsx("span",{className:"info-value",children:e.vertex_count||e.vertices.length})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Edges:"}),n.jsx("span",{className:"info-value",children:e.edge_count||0})]}),m.length>0&&n.jsxs("div",{className:"info-item queue-display",children:[n.jsx("span",{className:"info-label",children:"Queue:"}),n.jsxs("span",{className:"info-value queue-items",children:["[",m.join(", "),"]"]})]}),r.length>0&&!d&&n.jsxs("div",{className:"info-item traversal-result",children:[n.jsx("span",{className:"info-label",children:"Order:"}),n.jsx("span",{className:"info-value",children:r.join(" → ")})]})]}),c>=0&&n.jsxs("div",{className:"current-step-box",children:[n.jsxs("strong",{children:["Step ",c+1,":"]}),n.jsx("p",{children:B()})]}),n.jsx(He,{message:V}),S&&n.jsxs("div",{className:"warning-box",children:[n.jsx("strong",{children:"Cycle Detected!"}),n.jsx("p",{children:"Topological sort is only possible on Directed Acyclic Graphs (DAGs)."})]}),n.jsxs("div",{className:"legend",children:[n.jsx("h3",{children:"Legend"}),n.jsxs("div",{className:"legend-items",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color unvisited"}),n.jsx("span",{children:"Unprocessed"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color queued"}),n.jsx("span",{children:"In Queue (in-degree 0)"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color current"}),n.jsx("span",{children:"Current"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color visited"}),n.jsx("span",{children:"Processed"})]})]})]})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Visualization"}),n.jsx("div",{className:"graph-container",children:e.vertices.length===0?n.jsx("div",{className:"graph-empty",children:"Loading graph..."}):n.jsxs("svg",{className:"graph-svg",viewBox:"0 0 500 350",children:[e.edges.map(([M,D,I],w)=>{const H=P[M],Y=P[D];if(!H||!Y)return null;const Z=Y.x-H.x,ne=Y.y-H.y,U=Math.sqrt(Z*Z+ne*ne),G=Z/U,le=ne/U,re=H.x+G*25,we=H.y+le*25,oe=Y.x-G*30,vn=Y.y-le*30;return n.jsxs("g",{children:[n.jsx("defs",{children:n.jsx("marker",{id:`arrowhead-${w}`,markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:n.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#64748b"})})}),n.jsx("line",{x1:re,y1:we,x2:oe,y2:vn,className:"graph-edge",markerEnd:`url(#arrowhead-${w})`})]},`edge-${w}`)}),e.vertices.map(M=>{const D=P[M];return D?n.jsxs("g",{className:F(M),children:[n.jsx("circle",{cx:D.x,cy:D.y,r:25,className:"node-circle"}),n.jsx("text",{x:D.x,y:D.y,className:"node-label",dominantBaseline:"central",textAnchor:"middle",children:M}),i[M]!==void 0&&n.jsxs("text",{x:D.x,y:D.y+38,className:"distance-label",dominantBaseline:"central",textAnchor:"middle",children:["in=",i[M]]})]},M):null})]})}),n.jsxs("div",{className:"algorithm-steps",children:[n.jsx("h3",{children:"Kahn's Algorithm Steps"}),n.jsx("div",{className:"steps-content",children:n.jsxs("ol",{children:[n.jsx("li",{className:c===0?"active":"",children:"Calculate in-degree for all vertices"}),n.jsx("li",{className:m.length>0?"active":"",children:"Add vertices with in-degree 0 to queue"}),n.jsx("li",{className:j?"active":"",children:"Dequeue vertex and add to result"}),n.jsx("li",{children:"Decrement in-degree of neighbors"}),n.jsx("li",{children:"Add neighbors with in-degree 0 to queue"}),n.jsx("li",{children:"Repeat until queue is empty"})]})})]})]})]}),n.jsx(ke,{dataStructure:"topological"})]})}function hN(){const[e,t]=p.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=p.useState(""),[i,a]=p.useState({}),[l,o]=p.useState({}),[c,u]=p.useState([]),[d,h]=p.useState(-1),[g,b]=p.useState(0),[N,y]=p.useState(!1),[j,f]=p.useState(!1),[m,x]=p.useState(null),[S,v]=p.useState(null),[P,C]=p.useState(!1),[V,L]=p.useState({}),{message:_,showMessage:q}=Ue(3e3),W=p.useRef(null),O=p.useRef(0);p.useEffect(()=>{k()},[]),p.useEffect(()=>{e.vertices.length>0&&A()},[e.vertices]);const A=p.useCallback(()=>{const ne=Math.min(500,350)*.35,U={},G=e.vertices.length;e.vertices.forEach((le,re)=>{const we=2*Math.PI*re/G-Math.PI/2;U[le]={x:250+ne*Math.cos(we),y:175+ne*Math.sin(we)}}),L(U)},[e.vertices]),k=async()=>{try{const w=await ue("/api/graph");w.vertices.length===0?await R("weighted"):t(w)}catch(w){console.error("Error loading graph:",w)}},R=async w=>{try{const H=await te(`/api/graph/preset/${w}`,{});if(H.error){q(H.error,"error");return}t(H),B(),q(`Loaded '${w}' preset`,"success")}catch{q("Error loading preset","error")}},$=async()=>{if(!r){q("Please select a start vertex!","error");return}try{const w=await ue(`/api/graph/bellman-ford/${r}`);if(w.error){q(w.error,"error");return}a(w.distances),o(w.paths),u(w.steps),C(w.has_negative_cycle),w.has_negative_cycle?q("Negative cycle detected in graph!","error"):q("Starting Bellman-Ford algorithm...","info"),T(w.steps)}catch{q("Error running Bellman-Ford algorithm","error")}},T=w=>{W.current&&clearInterval(W.current),y(!0),f(!1),x(null),v(null),b(0),h(-1),O.current=0,W.current=setInterval(()=>{if(O.current>=w.length){clearInterval(W.current),y(!1),x(null),v(null),P||q("Bellman-Ford algorithm complete!","success");return}const H=w[O.current];h(O.current),a(H.distances||{}),H.iteration&&b(H.iteration),H.action==="check"?(x({from:H.from,to:H.to}),v(null)):H.action==="update"?(x({from:H.from,to:H.to}),v(H.to)):H.action==="negative_cycle"?x({from:H.from,to:H.to}):(x(null),v(null)),O.current++},800)},E=()=>{j?(f(!1),z()):(f(!0),W.current&&clearInterval(W.current))},z=()=>{W.current&&clearInterval(W.current),W.current=setInterval(()=>{if(O.current>=c.length){clearInterval(W.current),y(!1),x(null),v(null);return}const w=c[O.current];h(O.current),a(w.distances||{}),w.iteration&&b(w.iteration),w.action==="check"?(x({from:w.from,to:w.to}),v(null)):w.action==="update"?(x({from:w.from,to:w.to}),v(w.to)):(x(null),v(null)),O.current++},800)},F=()=>{if(O.current>=c.length)return;const w=c[O.current];h(O.current),a(w.distances||{}),w.iteration&&b(w.iteration),w.action==="check"?(x({from:w.from,to:w.to}),v(null)):w.action==="update"?(x({from:w.from,to:w.to}),v(w.to)):(x(null),v(null)),O.current++,O.current>=c.length&&(y(!1),x(null),v(null))},B=()=>{W.current&&clearInterval(W.current),a({}),o({}),u([]),h(-1),b(0),x(null),v(null),C(!1),y(!1),f(!1),O.current=0},M=w=>S===w?"graph-node current":w===r&&!N&&Object.keys(i).length>0?"graph-node visited":"graph-node",D=(w,H)=>m&&(m.from===w&&m.to===H||m.from===H&&m.to===w)?"graph-edge checking":"graph-edge",I=()=>d>=0&&d<c.length?c[d].message:"";return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Me,{className:"icon-sm"}),n.jsx("span",{children:"What is Bellman-Ford Algorithm?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"Bellman-Ford Algorithm"})," finds shortest paths from a source vertex, even with negative edge weights. It can also detect negative cycles."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(ve,{}),n.jsx("span",{children:"Unlike Dijkstra, it checks ALL edges V-1 times - slower but handles negative weights!"})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Time"}),n.jsx("span",{className:"op-desc",children:"V-1 iterations"}),n.jsx("span",{className:"op-complexity",children:"O(V*E)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Space"}),n.jsx("span",{className:"op-desc",children:"Distance array"}),n.jsx("span",{className:"op-complexity",children:"O(V)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Feature"}),n.jsx("span",{className:"op-desc",children:"Negative weights"}),n.jsx("span",{className:"op-complexity",children:"Supported"})]})]}),n.jsxs("div",{className:"concept-uses",children:[n.jsx("strong",{children:"Common Uses:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Currency exchange arbitrage detection"}),n.jsx("li",{children:"Network routing (RIP protocol)"}),n.jsx("li",{children:"Graphs with negative weights"}),n.jsx("li",{children:"Detecting negative cycles"})]})]})]})]}),n.jsx(ye,{context:"Bellman-Ford shortest path algorithm with negative weight handling"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Bellman-Ford Algorithm"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Load Preset"}),n.jsxs("div",{className:"btn-group preset-group",children:[n.jsx("button",{onClick:()=>R("weighted"),className:"btn btn-preset",disabled:N,children:"Weighted"}),n.jsx("button",{onClick:()=>R("simple"),className:"btn btn-preset",disabled:N,children:"Simple"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Start Vertex"}),n.jsxs("select",{value:r,onChange:w=>s(w.target.value),className:"vertex-select full-width",disabled:N,children:[n.jsx("option",{value:"",children:"Select start"}),e.vertices.map(w=>n.jsx("option",{value:w,children:w},w))]})]}),n.jsx("div",{className:"operation-group",children:n.jsxs("div",{className:"btn-group",children:[n.jsxs("button",{onClick:$,className:"btn btn-dijkstra",disabled:N&&!j,children:[n.jsx(Pe,{size:14})," Run"]}),N&&n.jsx("button",{onClick:E,className:"btn btn-pause",children:j?n.jsx(Pe,{size:14}):n.jsx(wr,{size:14})}),j&&n.jsx("button",{onClick:F,className:"btn btn-step",children:n.jsx(Sr,{size:14})}),n.jsx("button",{onClick:B,className:"btn btn-reset",children:n.jsx(xn,{size:14})})]})}),g>0&&n.jsx("div",{className:"info-panel",children:n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Iteration:"}),n.jsxs("span",{className:"info-value",children:[g," / ",e.vertices.length-1]})]})}),Object.keys(i).length>0&&n.jsxs("div",{className:"distance-table",children:[n.jsxs("h3",{children:["Distances from ",r]}),n.jsx("div",{className:"distance-grid",children:e.vertices.map(w=>n.jsxs("div",{className:`distance-item ${S===w?"current":""}`,children:[n.jsx("span",{className:"vertex-label",children:w}),n.jsx("span",{className:"distance-value",children:i[w]==="inf"||i[w]===null?"∞":i[w]})]},w))})]}),d>=0&&n.jsxs("div",{className:"current-step-box",children:[n.jsxs("strong",{children:["Step ",d+1,":"]}),n.jsx("p",{children:I()})]}),n.jsx(He,{message:_}),P&&n.jsxs("div",{className:"warning-box",children:[n.jsx("strong",{children:"Negative Cycle Detected!"}),n.jsx("p",{children:"The graph contains a negative weight cycle. Shortest paths are undefined."})]}),n.jsxs("div",{className:"legend",children:[n.jsx("h3",{children:"Legend"}),n.jsxs("div",{className:"legend-items",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color unvisited"}),n.jsx("span",{children:"Unprocessed"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color current"}),n.jsx("span",{children:"Updated"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color checking"}),n.jsx("span",{children:"Checking Edge"})]})]})]})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Visualization"}),n.jsx("div",{className:"graph-container",children:e.vertices.length===0?n.jsx("div",{className:"graph-empty",children:"Loading graph..."}):n.jsxs("svg",{className:"graph-svg",viewBox:"0 0 500 350",children:[e.edges.map(([w,H,Y],Z)=>{const ne=V[w],U=V[H];if(!ne||!U)return null;const G=(ne.x+U.x)/2,le=(ne.y+U.y)/2;return n.jsxs("g",{children:[n.jsx("line",{x1:ne.x,y1:ne.y,x2:U.x,y2:U.y,className:D(w,H)}),n.jsx("circle",{cx:G,cy:le,r:12,className:"weight-bg"}),n.jsx("text",{x:G,y:le,className:"weight-label",dominantBaseline:"central",textAnchor:"middle",children:Y})]},`edge-${Z}`)}),e.vertices.map(w=>{const H=V[w];return H?n.jsxs("g",{className:M(w),children:[n.jsx("circle",{cx:H.x,cy:H.y,r:25,className:"node-circle"}),n.jsx("text",{x:H.x,y:H.y,className:"node-label",dominantBaseline:"central",textAnchor:"middle",children:w}),i[w]!==void 0&&n.jsxs("text",{x:H.x,y:H.y+38,className:"distance-label",dominantBaseline:"central",textAnchor:"middle",children:["d=",i[w]==="inf"||i[w]===null?"∞":i[w]]})]},w):null})]})}),n.jsxs("div",{className:"algorithm-steps",children:[n.jsx("h3",{children:"Bellman-Ford vs Dijkstra"}),n.jsxs("div",{className:"comparison-table",children:[n.jsxs("div",{className:"comparison-row header",children:[n.jsx("span",{children:"Feature"}),n.jsx("span",{children:"Bellman-Ford"}),n.jsx("span",{children:"Dijkstra"})]}),n.jsxs("div",{className:"comparison-row",children:[n.jsx("span",{children:"Time Complexity"}),n.jsx("span",{children:"O(V*E)"}),n.jsx("span",{children:"O((V+E)logV)"})]}),n.jsxs("div",{className:"comparison-row",children:[n.jsx("span",{children:"Negative Weights"}),n.jsx("span",{className:"yes",children:"Yes"}),n.jsx("span",{className:"no",children:"No"})]}),n.jsxs("div",{className:"comparison-row",children:[n.jsx("span",{children:"Detects Neg. Cycles"}),n.jsx("span",{className:"yes",children:"Yes"}),n.jsx("span",{className:"no",children:"No"})]})]})]}),Object.keys(l).length>0&&!N&&!P&&n.jsxs("div",{className:"paths-section",children:[n.jsxs("h3",{children:["Shortest Paths from ",r]}),n.jsx("div",{className:"paths-list",children:Object.entries(l).map(([w,H])=>n.jsxs("div",{className:"path-item",children:[n.jsxs("span",{className:"path-target",children:[w,":"]}),n.jsx("span",{className:"path-route",children:H.join(" → ")}),n.jsxs("span",{className:"path-distance",children:["(dist: ",i[w]===null?"∞":i[w],")"]})]},w))})]})]})]}),n.jsx(ke,{dataStructure:"bellman-ford"})]})}function pN(){const[e,t]=p.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=p.useState([]),[i,a]=p.useState([]),[l,o]=p.useState(0),[c,u]=p.useState([]),[d,h]=p.useState([]),[g,b]=p.useState(-1),[N,y]=p.useState(!1),[j,f]=p.useState(!1),[m,x]=p.useState(null),[S,v]=p.useState({}),{message:P,showMessage:C}=Ue(3e3),V=p.useRef(null),L=p.useRef(0);p.useEffect(()=>{q()},[]),p.useEffect(()=>{e.vertices.length>0&&_()},[e.vertices]);const _=p.useCallback(()=>{const Y=Math.min(500,350)*.35,Z={},ne=e.vertices.length;e.vertices.forEach((U,G)=>{const le=2*Math.PI*G/ne-Math.PI/2;Z[U]={x:250+Y*Math.cos(le),y:175+Y*Math.sin(le)}}),v(Z)},[e.vertices]),q=async()=>{try{const D=await ue("/api/graph");D.vertices.length===0?await W("weighted"):t(D)}catch(D){console.error("Error loading graph:",D)}},W=async D=>{try{const I=await te(`/api/graph/preset/${D}`,{});if(I.error){C(I.error,"error");return}t(I),T(),C(`Loaded '${D}' preset`,"success")}catch{C("Error loading preset","error")}},O=async()=>{try{const D=await ue("/api/graph/kruskal");if(D.error){C(D.error,"error");return}h(D.steps);const I=D.steps.find(w=>w.action==="init");I&&u(I.edges_sorted||[]),C("Starting Kruskal's MST algorithm...","info"),A(D.steps,D.mst_edges,D.total_weight)}catch{C("Error running Kruskal's algorithm","error")}},A=(D,I,w)=>{V.current&&clearInterval(V.current),y(!0),f(!1),s([]),a([]),o(0),x(null),b(-1),L.current=0,V.current=setInterval(()=>{if(L.current>=D.length){clearInterval(V.current),y(!1),x(null),s(I),o(w),C(`MST complete! Total weight: ${w}`,"success");return}const H=D[L.current];b(L.current),s(H.mst_edges||[]),o(H.total_weight||0),H.action==="consider"?x({from:H.from,to:H.to,weight:H.weight}):(H.action==="add"||H.action==="reject"&&a(Y=>[...Y,{from:H.from,to:H.to,weight:H.weight}]),x(null)),L.current++},1e3)},k=()=>{j?(f(!1),R()):(f(!0),V.current&&clearInterval(V.current))},R=()=>{V.current&&clearInterval(V.current),V.current=setInterval(()=>{if(L.current>=d.length){clearInterval(V.current),y(!1),x(null);return}const D=d[L.current];b(L.current),s(D.mst_edges||[]),o(D.total_weight||0),D.action==="consider"?x({from:D.from,to:D.to,weight:D.weight}):(D.action==="add"||D.action==="reject"&&a(I=>[...I,{from:D.from,to:D.to,weight:D.weight}]),x(null)),L.current++},1e3)},$=()=>{if(L.current>=d.length)return;const D=d[L.current];b(L.current),s(D.mst_edges||[]),o(D.total_weight||0),D.action==="consider"?x({from:D.from,to:D.to,weight:D.weight}):(D.action==="add"||D.action==="reject"&&a(I=>[...I,{from:D.from,to:D.to,weight:D.weight}]),x(null)),L.current++,L.current>=d.length&&(y(!1),x(null))},T=()=>{V.current&&clearInterval(V.current),s([]),a([]),o(0),u([]),h([]),b(-1),x(null),y(!1),f(!1),L.current=0},E=(D,I)=>r.some(([w,H])=>w===D&&H===I||w===I&&H===D),z=(D,I)=>i.some(w=>w.from===D&&w.to===I||w.from===I&&w.to===D),F=D=>r.some(([w,H])=>w===D||H===D)?"graph-node visited":"graph-node",B=(D,I)=>m&&(m.from===D&&m.to===I||m.from===I&&m.to===D)?"graph-edge considering":E(D,I)?"graph-edge mst":z(D,I)?"graph-edge rejected":"graph-edge",M=()=>g>=0&&g<d.length?d[g].message:"";return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Me,{className:"icon-sm"}),n.jsx("span",{children:"What is Kruskal's Algorithm?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"Kruskal's Algorithm"})," builds the MST by sorting all edges by weight and adding them if they don't create a cycle (using Union-Find)."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(ve,{}),n.jsx("span",{children:"Like building a network by always picking the cheapest cable that connects new areas!"})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Time"}),n.jsx("span",{className:"op-desc",children:"Sort + Union-Find"}),n.jsx("span",{className:"op-complexity",children:"O(E log E)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Space"}),n.jsx("span",{className:"op-desc",children:"Union-Find array"}),n.jsx("span",{className:"op-complexity",children:"O(V)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Strategy"}),n.jsx("span",{className:"op-desc",children:"Global greedy"}),n.jsx("span",{className:"op-complexity",children:"Min edge"})]})]}),n.jsxs("div",{className:"concept-uses",children:[n.jsx("strong",{children:"Kruskal vs Prim:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Better for sparse graphs (fewer edges)"}),n.jsx("li",{children:"Processes edges globally, not locally"}),n.jsx("li",{children:"Uses Union-Find for cycle detection"}),n.jsx("li",{children:"Easier to parallelize"})]})]})]})]}),n.jsx(ye,{context:"Kruskal's Minimum Spanning Tree algorithm with Union-Find"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Kruskal's MST Algorithm"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Load Preset"}),n.jsxs("div",{className:"btn-group preset-group",children:[n.jsx("button",{onClick:()=>W("weighted"),className:"btn btn-preset",disabled:N,children:"Weighted"}),n.jsx("button",{onClick:()=>W("complete"),className:"btn btn-preset",disabled:N,children:"Complete"})]})]}),n.jsx("div",{className:"operation-group",children:n.jsxs("div",{className:"btn-group",children:[n.jsxs("button",{onClick:O,className:"btn btn-mst",disabled:N&&!j,children:[n.jsx(Pe,{size:14})," Run Kruskal's"]}),N&&n.jsx("button",{onClick:k,className:"btn btn-pause",children:j?n.jsx(Pe,{size:14}):n.jsx(wr,{size:14})}),j&&n.jsx("button",{onClick:$,className:"btn btn-step",children:n.jsx(Sr,{size:14})}),n.jsx("button",{onClick:T,className:"btn btn-reset",children:n.jsx(xn,{size:14})})]})}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"MST Edges:"}),n.jsxs("span",{className:"info-value",children:[r.length," / ",e.vertices.length-1]})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Total Weight:"}),n.jsx("span",{className:"info-value mst-weight",children:l})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Rejected:"}),n.jsx("span",{className:"info-value",children:i.length})]})]}),c.length>0&&n.jsxs("div",{className:"sorted-edges-panel",children:[n.jsx("h3",{children:"Edges (sorted by weight)"}),n.jsx("div",{className:"sorted-edges-list",children:c.map(([D,I,w],H)=>{const Y=E(D,I),Z=z(D,I);return n.jsxs("div",{className:`sorted-edge-item ${Y?"in-mst":""} ${Z?"rejected":""}`,children:[n.jsxs("span",{children:[D,"—",I]}),n.jsxs("span",{className:"edge-weight",children:["w=",w]})]},H)})})]}),g>=0&&n.jsxs("div",{className:"current-step-box",children:[n.jsxs("strong",{children:["Step ",g+1,":"]}),n.jsx("p",{children:M()})]}),n.jsx(He,{message:P}),n.jsxs("div",{className:"legend",children:[n.jsx("h3",{children:"Legend"}),n.jsxs("div",{className:"legend-items",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color unvisited"}),n.jsx("span",{children:"Unconnected"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color visited"}),n.jsx("span",{children:"In MST"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-line considering"}),n.jsx("span",{children:"Considering"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-line mst"}),n.jsx("span",{children:"MST Edge"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-line rejected"}),n.jsx("span",{children:"Rejected (cycle)"})]})]})]})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Visualization"}),n.jsx("div",{className:"graph-container",children:e.vertices.length===0?n.jsx("div",{className:"graph-empty",children:"Loading graph..."}):n.jsxs("svg",{className:"graph-svg",viewBox:"0 0 500 350",children:[e.edges.map(([D,I,w],H)=>{const Y=S[D],Z=S[I];if(!Y||!Z)return null;const ne=(Y.x+Z.x)/2,U=(Y.y+Z.y)/2;return n.jsxs("g",{children:[n.jsx("line",{x1:Y.x,y1:Y.y,x2:Z.x,y2:Z.y,className:B(D,I)}),n.jsx("circle",{cx:ne,cy:U,r:12,className:"weight-bg"}),n.jsx("text",{x:ne,y:U,className:"weight-label",dominantBaseline:"central",textAnchor:"middle",children:w})]},`edge-${H}`)}),e.vertices.map(D=>{const I=S[D];return I?n.jsxs("g",{className:F(D),children:[n.jsx("circle",{cx:I.x,cy:I.y,r:25,className:"node-circle"}),n.jsx("text",{x:I.x,y:I.y,className:"node-label",dominantBaseline:"central",textAnchor:"middle",children:D})]},D):null})]})}),n.jsxs("div",{className:"algorithm-steps",children:[n.jsx("h3",{children:"Kruskal vs Prim"}),n.jsxs("div",{className:"comparison-table",children:[n.jsxs("div",{className:"comparison-row header",children:[n.jsx("span",{children:"Feature"}),n.jsx("span",{children:"Kruskal's"}),n.jsx("span",{children:"Prim's"})]}),n.jsxs("div",{className:"comparison-row",children:[n.jsx("span",{children:"Time Complexity"}),n.jsx("span",{children:"O(E log E)"}),n.jsx("span",{children:"O((V+E)logV)"})]}),n.jsxs("div",{className:"comparison-row",children:[n.jsx("span",{children:"Best for"}),n.jsx("span",{children:"Sparse graphs"}),n.jsx("span",{children:"Dense graphs"})]}),n.jsxs("div",{className:"comparison-row",children:[n.jsx("span",{children:"Data Structure"}),n.jsx("span",{children:"Union-Find"}),n.jsx("span",{children:"Priority Queue"})]}),n.jsxs("div",{className:"comparison-row",children:[n.jsx("span",{children:"Strategy"}),n.jsx("span",{children:"Global (all edges)"}),n.jsx("span",{children:"Local (neighbors)"})]})]})]}),r.length>0&&n.jsxs("div",{className:"mst-edges-section",children:[n.jsx("h3",{children:"MST Edges"}),n.jsx("div",{className:"mst-edges-list",children:r.map(([D,I,w],H)=>n.jsxs("div",{className:"mst-edge-item",children:[n.jsxs("span",{children:[D," — ",I]}),n.jsxs("span",{className:"edge-weight",children:["(w: ",w,")"]})]},H))}),n.jsx("div",{className:"mst-total",children:n.jsxs("strong",{children:["Total MST Weight: ",l]})})]})]})]}),n.jsx(ke,{dataStructure:"kruskal"})]})}function Ed(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,s=Array(t);r<t;r++)s[r]=e[r];return s}function fN(e){if(Array.isArray(e))return e}function mN(e,t,r){return(t=bN(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function gN(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var s,i,a,l,o=[],c=!0,u=!1;try{if(a=(r=r.call(e)).next,t!==0)for(;!(c=(s=a.call(r)).done)&&(o.push(s.value),o.length!==t);c=!0);}catch(d){u=!0,i=d}finally{try{if(!c&&r.return!=null&&(l=r.return(),Object(l)!==l))return}finally{if(u)throw i}}return o}}function xN(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Od(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,s)}return r}function Rd(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Od(Object(r),!0).forEach(function(s){mN(e,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Od(Object(r)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(r,s))})}return e}function vN(e,t){if(e==null)return{};var r,s,i=yN(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function yN(e,t){if(e==null)return{};var r={};for(var s in e)if({}.hasOwnProperty.call(e,s)){if(t.indexOf(s)!==-1)continue;r[s]=e[s]}return r}function jN(e,t){return fN(e)||gN(e,t)||kN(e,t)||xN()}function NN(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var s=r.call(e,t);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function bN(e){var t=NN(e,"string");return typeof t=="symbol"?t:t+""}function kN(e,t){if(e){if(typeof e=="string")return Ed(e,t);var r={}.toString.call(e).slice(8,-1);return r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set"?Array.from(e):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Ed(e,t):void 0}}function wN(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Pd(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,s)}return r}function Id(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Pd(Object(r),!0).forEach(function(s){wN(e,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Pd(Object(r)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(r,s))})}return e}function SN(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(s){return t.reduceRight(function(i,a){return a(i)},s)}}function qr(e){return function t(){for(var r=this,s=arguments.length,i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];return i.length>=e.length?e.apply(this,i):function(){for(var l=arguments.length,o=new Array(l),c=0;c<l;c++)o[c]=arguments[c];return t.apply(r,[].concat(i,o))}}}function Ai(e){return{}.toString.call(e).includes("Object")}function CN(e){return!Object.keys(e).length}function ys(e){return typeof e=="function"}function TN(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function _N(e,t){return Ai(t)||ut("changeType"),Object.keys(t).some(function(r){return!TN(e,r)})&&ut("changeField"),t}function LN(e){ys(e)||ut("selectorType")}function EN(e){ys(e)||Ai(e)||ut("handlerType"),Ai(e)&&Object.values(e).some(function(t){return!ys(t)})&&ut("handlersType")}function ON(e){e||ut("initialIsRequired"),Ai(e)||ut("initialType"),CN(e)&&ut("initialContent")}function RN(e,t){throw new Error(e[t]||e.default)}var PN={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},ut=qr(RN)(PN),Ws={changes:_N,selector:LN,handler:EN,initial:ON};function IN(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Ws.initial(e),Ws.handler(t);var r={current:e},s=qr(AN)(r,t),i=qr(MN)(r),a=qr(Ws.changes)(e),l=qr(zN)(r);function o(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(d){return d};return Ws.selector(u),u(r.current)}function c(u){SN(s,i,a,l)(u)}return[o,c]}function zN(e,t){return ys(t)?t(e.current):t}function MN(e,t){return e.current=Id(Id({},e.current),t),t}function AN(e,t,r){return ys(t)?t(e.current):Object.keys(r).forEach(function(s){var i;return(i=t[s])===null||i===void 0?void 0:i.call(t,e.current[s])}),r}var FN={create:IN},VN={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function DN(e){return function t(){for(var r=this,s=arguments.length,i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];return i.length>=e.length?e.apply(this,i):function(){for(var l=arguments.length,o=new Array(l),c=0;c<l;c++)o[c]=arguments[c];return t.apply(r,[].concat(i,o))}}}function $N(e){return{}.toString.call(e).includes("Object")}function BN(e){return e||zd("configIsRequired"),$N(e)||zd("configType"),e.urls?(qN(),{paths:{vs:e.urls.monacoBase}}):e}function qN(){console.warn(Tp.deprecation)}function HN(e,t){throw new Error(e[t]||e.default)}var Tp={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},zd=DN(HN)(Tp),UN={config:BN},KN=function(){for(var t=arguments.length,r=new Array(t),s=0;s<t;s++)r[s]=arguments[s];return function(i){return r.reduceRight(function(a,l){return l(a)},i)}};function _p(e,t){return Object.keys(t).forEach(function(r){t[r]instanceof Object&&e[r]&&Object.assign(t[r],_p(e[r],t[r]))}),Rd(Rd({},e),t)}var WN={type:"cancelation",msg:"operation is manually canceled"};function Oa(e){var t=!1,r=new Promise(function(s,i){e.then(function(a){return t?i(WN):s(a)}),e.catch(i)});return r.cancel=function(){return t=!0},r}var GN=["monaco"],QN=FN.create({config:VN,isInitialized:!1,resolve:null,reject:null,monaco:null}),Lp=jN(QN,2),_s=Lp[0],ta=Lp[1];function XN(e){var t=UN.config(e),r=t.monaco,s=vN(t,GN);ta(function(i){return{config:_p(i.config,s),monaco:r}})}function YN(){var e=_s(function(t){var r=t.monaco,s=t.isInitialized,i=t.resolve;return{monaco:r,isInitialized:s,resolve:i}});if(!e.isInitialized){if(ta({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),Oa(Ra);if(window.monaco&&window.monaco.editor)return Ep(window.monaco),e.resolve(window.monaco),Oa(Ra);KN(JN,eb)(nb)}return Oa(Ra)}function JN(e){return document.body.appendChild(e)}function ZN(e){var t=document.createElement("script");return e&&(t.src=e),t}function eb(e){var t=_s(function(s){var i=s.config,a=s.reject;return{config:i,reject:a}}),r=ZN("".concat(t.config.paths.vs,"/loader.js"));return r.onload=function(){return e()},r.onerror=t.reject,r}function nb(){var e=_s(function(r){var s=r.config,i=r.resolve,a=r.reject;return{config:s,resolve:i,reject:a}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(r){var s=r.m||r;Ep(s),e.resolve(s)},function(r){e.reject(r)})}function Ep(e){_s().monaco||ta({monaco:e})}function tb(){return _s(function(e){var t=e.monaco;return t})}var Ra=new Promise(function(e,t){return ta({resolve:e,reject:t})}),Op={config:XN,init:YN,__getMonacoInstance:tb},rb={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},Pa=rb,sb={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},ib=sb;function ab({children:e}){return Ce.createElement("div",{style:ib.container},e)}var lb=ab,ob=lb;function cb({width:e,height:t,isEditorReady:r,loading:s,_ref:i,className:a,wrapperProps:l}){return Ce.createElement("section",{style:{...Pa.wrapper,width:e,height:t},...l},!r&&Ce.createElement(ob,null,s),Ce.createElement("div",{ref:i,style:{...Pa.fullWidth,...!r&&Pa.hide},className:a}))}var db=cb,Rp=p.memo(db);function ub(e){p.useEffect(e,[])}var Pp=ub;function hb(e,t,r=!0){let s=p.useRef(!0);p.useEffect(s.current||!r?()=>{s.current=!1}:e,t)}var sn=hb;function Zr(){}function ar(e,t,r,s){return pb(e,s)||fb(e,t,r,s)}function pb(e,t){return e.editor.getModel(Ip(e,t))}function fb(e,t,r,s){return e.editor.createModel(t,r,s?Ip(e,s):void 0)}function Ip(e,t){return e.Uri.parse(t)}function mb({original:e,modified:t,language:r,originalLanguage:s,modifiedLanguage:i,originalModelPath:a,modifiedModelPath:l,keepCurrentOriginalModel:o=!1,keepCurrentModifiedModel:c=!1,theme:u="light",loading:d="Loading...",options:h={},height:g="100%",width:b="100%",className:N,wrapperProps:y={},beforeMount:j=Zr,onMount:f=Zr}){let[m,x]=p.useState(!1),[S,v]=p.useState(!0),P=p.useRef(null),C=p.useRef(null),V=p.useRef(null),L=p.useRef(f),_=p.useRef(j),q=p.useRef(!1);Pp(()=>{let k=Op.init();return k.then(R=>(C.current=R)&&v(!1)).catch(R=>(R==null?void 0:R.type)!=="cancelation"&&console.error("Monaco initialization: error:",R)),()=>P.current?A():k.cancel()}),sn(()=>{if(P.current&&C.current){let k=P.current.getOriginalEditor(),R=ar(C.current,e||"",s||r||"text",a||"");R!==k.getModel()&&k.setModel(R)}},[a],m),sn(()=>{if(P.current&&C.current){let k=P.current.getModifiedEditor(),R=ar(C.current,t||"",i||r||"text",l||"");R!==k.getModel()&&k.setModel(R)}},[l],m),sn(()=>{let k=P.current.getModifiedEditor();k.getOption(C.current.editor.EditorOption.readOnly)?k.setValue(t||""):t!==k.getValue()&&(k.executeEdits("",[{range:k.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),k.pushUndoStop())},[t],m),sn(()=>{var k,R;(R=(k=P.current)==null?void 0:k.getModel())==null||R.original.setValue(e||"")},[e],m),sn(()=>{let{original:k,modified:R}=P.current.getModel();C.current.editor.setModelLanguage(k,s||r||"text"),C.current.editor.setModelLanguage(R,i||r||"text")},[r,s,i],m),sn(()=>{var k;(k=C.current)==null||k.editor.setTheme(u)},[u],m),sn(()=>{var k;(k=P.current)==null||k.updateOptions(h)},[h],m);let W=p.useCallback(()=>{var $;if(!C.current)return;_.current(C.current);let k=ar(C.current,e||"",s||r||"text",a||""),R=ar(C.current,t||"",i||r||"text",l||"");($=P.current)==null||$.setModel({original:k,modified:R})},[r,t,i,e,s,a,l]),O=p.useCallback(()=>{var k;!q.current&&V.current&&(P.current=C.current.editor.createDiffEditor(V.current,{automaticLayout:!0,...h}),W(),(k=C.current)==null||k.editor.setTheme(u),x(!0),q.current=!0)},[h,u,W]);p.useEffect(()=>{m&&L.current(P.current,C.current)},[m]),p.useEffect(()=>{!S&&!m&&O()},[S,m,O]);function A(){var R,$,T,E;let k=(R=P.current)==null?void 0:R.getModel();o||(($=k==null?void 0:k.original)==null||$.dispose()),c||((T=k==null?void 0:k.modified)==null||T.dispose()),(E=P.current)==null||E.dispose()}return Ce.createElement(Rp,{width:b,height:g,isEditorReady:m,loading:d,_ref:V,className:N,wrapperProps:y})}var gb=mb;p.memo(gb);function xb(e){let t=p.useRef();return p.useEffect(()=>{t.current=e},[e]),t.current}var vb=xb,Gs=new Map;function yb({defaultValue:e,defaultLanguage:t,defaultPath:r,value:s,language:i,path:a,theme:l="light",line:o,loading:c="Loading...",options:u={},overrideServices:d={},saveViewState:h=!0,keepCurrentModel:g=!1,width:b="100%",height:N="100%",className:y,wrapperProps:j={},beforeMount:f=Zr,onMount:m=Zr,onChange:x,onValidate:S=Zr}){let[v,P]=p.useState(!1),[C,V]=p.useState(!0),L=p.useRef(null),_=p.useRef(null),q=p.useRef(null),W=p.useRef(m),O=p.useRef(f),A=p.useRef(),k=p.useRef(s),R=vb(a),$=p.useRef(!1),T=p.useRef(!1);Pp(()=>{let F=Op.init();return F.then(B=>(L.current=B)&&V(!1)).catch(B=>(B==null?void 0:B.type)!=="cancelation"&&console.error("Monaco initialization: error:",B)),()=>_.current?z():F.cancel()}),sn(()=>{var B,M,D,I;let F=ar(L.current,e||s||"",t||i||"",a||r||"");F!==((B=_.current)==null?void 0:B.getModel())&&(h&&Gs.set(R,(M=_.current)==null?void 0:M.saveViewState()),(D=_.current)==null||D.setModel(F),h&&((I=_.current)==null||I.restoreViewState(Gs.get(a))))},[a],v),sn(()=>{var F;(F=_.current)==null||F.updateOptions(u)},[u],v),sn(()=>{!_.current||s===void 0||(_.current.getOption(L.current.editor.EditorOption.readOnly)?_.current.setValue(s):s!==_.current.getValue()&&(T.current=!0,_.current.executeEdits("",[{range:_.current.getModel().getFullModelRange(),text:s,forceMoveMarkers:!0}]),_.current.pushUndoStop(),T.current=!1))},[s],v),sn(()=>{var B,M;let F=(B=_.current)==null?void 0:B.getModel();F&&i&&((M=L.current)==null||M.editor.setModelLanguage(F,i))},[i],v),sn(()=>{var F;o!==void 0&&((F=_.current)==null||F.revealLine(o))},[o],v),sn(()=>{var F;(F=L.current)==null||F.editor.setTheme(l)},[l],v);let E=p.useCallback(()=>{var F;if(!(!q.current||!L.current)&&!$.current){O.current(L.current);let B=a||r,M=ar(L.current,s||e||"",t||i||"",B||"");_.current=(F=L.current)==null?void 0:F.editor.create(q.current,{model:M,automaticLayout:!0,...u},d),h&&_.current.restoreViewState(Gs.get(B)),L.current.editor.setTheme(l),o!==void 0&&_.current.revealLine(o),P(!0),$.current=!0}},[e,t,r,s,i,a,u,d,h,l,o]);p.useEffect(()=>{v&&W.current(_.current,L.current)},[v]),p.useEffect(()=>{!C&&!v&&E()},[C,v,E]),k.current=s,p.useEffect(()=>{var F,B;v&&x&&((F=A.current)==null||F.dispose(),A.current=(B=_.current)==null?void 0:B.onDidChangeModelContent(M=>{T.current||x(_.current.getValue(),M)}))},[v,x]),p.useEffect(()=>{if(v){let F=L.current.editor.onDidChangeMarkers(B=>{var D;let M=(D=_.current.getModel())==null?void 0:D.uri;if(M&&B.find(I=>I.path===M.path)){let I=L.current.editor.getModelMarkers({resource:M});S==null||S(I)}});return()=>{F==null||F.dispose()}}return()=>{}},[v,S]);function z(){var F,B;(F=A.current)==null||F.dispose(),g?h&&Gs.set(a,_.current.saveViewState()):(B=_.current.getModel())==null||B.dispose(),_.current.dispose()}return Ce.createElement(Rp,{width:b,height:N,isEditorReady:v,loading:c,_ref:q,className:y,wrapperProps:j})}var jb=yb,Nb=p.memo(jb),zp=Nb;const Md={python:{monacoLang:"python",defaultCode:`def solution(nums):
    # Write your solution here
    pass
`}};function bb({language:e,code:t,onChange:r,decorations:s=[],onEditorMount:i,theme:a="vs-dark"}){const l=Md[e]||Md.python,o=p.useRef(null),c=p.useRef(null),u=p.useRef([]),d=(b,N)=>{o.current=b,c.current=N,i&&i(b,N)};p.useEffect(()=>{if(o.current&&c.current){const b=o.current,N=c.current;if(u.current=b.deltaDecorations(u.current,[]),s.length>0){const y=s.map(j=>({range:new N.Range(j.startLine,1,j.endLine,1),options:{isWholeLine:!0,className:j.className||"ai-code-issue-highlight",glyphMarginClassName:j.glyphClassName||"ai-code-issue-glyph",hoverMessage:{value:j.hoverMessage}}}));u.current=b.deltaDecorations([],y)}}},[s]);const h=b=>{r(b||"")},g={minimap:{enabled:!1},fontSize:14,fontFamily:"'Fira Code', 'JetBrains Mono', Consolas, monospace",fontLigatures:!0,lineNumbers:"on",roundedSelection:!0,scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,wordWrap:"on",padding:{top:16,bottom:16},glyphMargin:!0,suggest:{showKeywords:!0,showSnippets:!0}};return n.jsx("div",{className:"code-editor-container",children:n.jsx(zp,{height:"400px",language:l.monacoLang,value:t,theme:a,onMount:d,onChange:h,options:g,loading:n.jsx("div",{className:"editor-loading",children:"Loading editor..."})})})}const Ia=[{id:"arrays-hashing",title:"Arrays & Hashing",icon:"grid",color:"#10b981",description:"Foundation of DSA - array manipulation and hash maps",problems:["two-sum","valid-anagram","contains-duplicate","group-anagrams"]},{id:"two-pointers",title:"Two Pointers",icon:"pointer",color:"#3b82f6",description:"Efficient array traversal techniques",problems:["valid-palindrome","two-sum-sorted","container-with-most-water"]},{id:"stack",title:"Stack",icon:"layers",color:"#8b5cf6",description:"LIFO data structure problems",problems:["valid-parentheses","min-stack","evaluate-reverse-polish-notation"]},{id:"binary-search",title:"Binary Search",icon:"search",color:"#f59e0b",description:"Divide and conquer search technique",problems:["binary-search","search-rotated-array","find-minimum-in-rotated-sorted-array"]},{id:"linked-list",title:"Linked List",icon:"link",color:"#ec4899",description:"Pointer-based data structures",problems:["reverse-linked-list","merge-two-lists","linked-list-cycle","reorder-list"]},{id:"trees",title:"Trees",icon:"tree",color:"#14b8a6",description:"Hierarchical data structures",problems:["invert-tree","max-depth-tree","same-tree","kth-smallest-element-in-a-bst"]},{id:"graphs",title:"Graphs",icon:"network",color:"#6366f1",description:"Graph traversal and algorithms",problems:["bfs-traversal","dfs-traversal","number-of-islands"]},{id:"dynamic-programming",title:"Dynamic Programming",icon:"puzzle",color:"#ef4444",description:"Optimization through memoization",problems:["climbing-stairs","house-robber"]},{id:"sorting",title:"Sorting",icon:"sort",color:"#84cc16",description:"Classic sorting algorithms",problems:["merge-sort","quick-sort"]}],Bt={"two-sum":{id:"two-sum",title:"Two Sum",difficulty:"Easy",category:"Arrays & Hashing",description:"Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\n\nYou can return the answer in any order.",examples:[{input:"nums = [2,7,11,15], target = 9",output:"[0,1]",explanation:"Because nums[0] + nums[1] == 9, we return [0, 1]."},{input:"nums = [3,2,4], target = 6",output:"[1,2]",explanation:"Because nums[1] + nums[2] == 6, we return [1, 2]."}],constraints:["2 <= nums.length <= 10^4","-10^9 <= nums[i] <= 10^9","Only one valid answer exists."],testCases:[{input:"[2,7,11,15], 9",expected:"[0, 1]"},{input:"[3,2,4], 6",expected:"[1, 2]"},{input:"[3,3], 6",expected:"[0, 1]"}],starterCode:{python:`class Solution:
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

print(solution([3,6,8,10,1,2,1]))`}},hints:["Pick a pivot (last element is common).","Partition: smaller left, larger right.","Recurse on both partitions."]}},Mp=Object.values(Bt);[...new Set(Mp.map(e=>e.category))];const za={grid:Rx,pointer:Fx,layers:tc,search:At,link:Hl,tree:Ox,network:Vx,puzzle:Dx,sort:Nx};function Ad(){const{problemId:e}=Hg(),t=up(),[r,s]=p.useState(null),[i,a]=p.useState("python"),[l,o]=p.useState(""),[c,u]=p.useState(!1),[d,h]=p.useState(null),[g,b]=p.useState(null),[N,y]=p.useState(!1),[j,f]=p.useState(0),[m,x]=p.useState("description"),[S,v]=p.useState(!e),[P,C]=p.useState(()=>{const U=localStorage.getItem("completedProblems");return U?JSON.parse(U):[]}),[V,L]=p.useState(null),[_,q]=p.useState("map"),[W,O]=p.useState(null),[A,k]=p.useState(null),[R,$]=p.useState(!1),[T,E]=p.useState(null),[z,F]=p.useState(null),[B,M]=p.useState([]),D=p.useRef(null);p.useEffect(()=>{D.current&&(D.current.scrollTop=0)},[m,r]);const I=async()=>{if(l.trim()){$(!0),E(null),F(null),M([]);try{const U=await fetch("/api/code-review",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:l,language:i})}),G=await U.json();if(U.ok){if(E(G),G.optimizations&&Array.isArray(G.optimizations)){const le=G.optimizations.map(re=>({startLine:re.startLine,endLine:re.endLine,className:"ai-code-issue-highlight",glyphClassName:"ai-code-issue-glyph",hoverMessage:`**Issue:** ${re.issue}

**Suggestion:** ${re.suggestion}`}));M(le)}x("ai")}else F(G.error||`Review failed (${U.status})`),x("ai")}catch{F("Could not reach the review service. Is the server running?"),x("ai")}finally{$(!1)}}};p.useEffect(()=>{localStorage.setItem("completedProblems",JSON.stringify(P))},[P]),p.useEffect(()=>{if(e&&Bt[e]){const U=Bt[e];s(U),o(U.starterCode[i]||U.starterCode.python),h(null),b(null),y(!1),f(0),v(!1),window.scrollTo(0,0)}else e||(v(!0),window.scrollTo(0,0))},[e]),p.useEffect(()=>{r&&o(r.starterCode[i]||r.starterCode.python)},[i,r]);const w=U=>{P.includes(U)||C([...P,U])},H=async()=>{u(!0),h(null),b(null);try{const G=await(await fetch("/api/practice/execute",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({language:i,code:l})})).json();h({stdout:G.output||"",stderr:G.error||"",success:G.success})}catch(U){h({stdout:"",stderr:`Error: ${U.message}`,success:!1})}finally{u(!1)}},Y=async()=>{if(r){u(!0),h(null),b(null);try{const G=await(await fetch("/api/practice/run-tests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({language:i,code:l,testCases:r.testCases,functionName:"solution"})})).json();b(G),G.allPassed&&w(r.id)}catch(U){h({stdout:"",stderr:`Error running tests: ${U.message}`,success:!1})}finally{u(!1)}}},Z=()=>{r&&(o(r.starterCode[i]||r.starterCode.python),h(null),b(null))},ne=()=>{r&&j<r.hints.length&&(y(!0),f(U=>Math.min(U+1,r.hints.length)))};if(S){const U=Mp.length,G=P.length,le=Math.round(G/U*100);return n.jsx("div",{className:"practice-container",children:n.jsxs("div",{className:"roadmap-page",children:[n.jsxs("div",{className:"roadmap-header",children:[n.jsxs("div",{className:"roadmap-title",children:[n.jsx(_d,{size:32}),n.jsxs("div",{children:[n.jsx("h1",{children:"DSA Roadmap"}),n.jsx("p",{children:"Master data structures and algorithms step by step"})]})]}),n.jsx("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:n.jsxs("div",{className:"progress-stats",children:[n.jsxs("div",{className:"progress-circle",children:[n.jsxs("svg",{viewBox:"0 0 36 36",children:[n.jsx("path",{className:"progress-bg",d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"}),n.jsx("path",{className:"progress-fill",strokeDasharray:`${le}, 100`,d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"})]}),n.jsxs("span",{className:"progress-text",children:[le,"%"]})]}),n.jsxs("div",{className:"progress-info",children:[n.jsxs("span",{className:"completed-count",children:[G,"/",U]}),n.jsx("span",{className:"completed-label",children:"Problems Solved"})]})]})})]}),_==="map"&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"roadmap-visual-map",children:Ia.map(re=>{const we=re.problems.map(ce=>Bt[ce]).filter(Boolean),oe=we.filter(ce=>P.includes(ce.id)).length,vn=Math.round(oe/we.length*100),J=V===re.id;return n.jsxs("div",{className:`map-node ${J?"active":""}`,style:{"--node-color":re.color},onClick:()=>L(J?null:re.id),children:[oe===we.length?n.jsx("div",{className:"map-node-badge completed",children:n.jsx(zn,{size:14})}):oe>0?n.jsx("div",{className:"map-node-badge in-progress",children:oe}):null,n.jsxs("div",{className:"map-node-header",children:[n.jsx("span",{className:"map-node-icon",children:(()=>{const ce=za[re.icon];return ce?n.jsx(ce,{size:20}):null})()}),n.jsx("span",{className:"map-node-title",children:re.title})]}),n.jsx("p",{className:"map-node-description",children:re.description}),n.jsxs("div",{className:"map-node-progress",children:[n.jsx("div",{className:"map-node-progress-bar",children:n.jsx("div",{className:"map-node-progress-fill",style:{width:`${vn}%`}})}),n.jsxs("span",{className:"map-node-progress-text",children:[oe,"/",we.length]})]})]},re.id)})}),V&&n.jsx("div",{className:"expanded-section",children:(()=>{const re=Ia.find(oe=>oe.id===V),we=re.problems.map(oe=>Bt[oe]).filter(Boolean);return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"expanded-section-header",children:[n.jsxs("div",{className:"expanded-section-title",children:[n.jsx("span",{className:"section-icon-wrapper",children:(()=>{const oe=za[re.icon];return oe?n.jsx(oe,{size:24}):null})()}),n.jsx("h3",{children:re.title})]}),n.jsx("button",{className:"close-section-btn",onClick:oe=>{oe.stopPropagation(),L(null)},children:n.jsx(na,{size:16})})]}),n.jsx("div",{className:"problem-grid",children:we.map(oe=>{const vn=P.includes(oe.id);return n.jsxs("div",{className:`problem-item ${vn?"completed":""}`,onClick:()=>t(`/practice/${oe.id}`),children:[n.jsx("div",{className:`problem-status-icon ${vn?"done":"pending"}`,children:vn?n.jsx(zn,{size:16}):n.jsx(oi,{size:16})}),n.jsxs("div",{className:"problem-item-info",children:[n.jsx("div",{className:"problem-item-title",children:oe.title}),n.jsx("div",{className:"problem-item-meta",children:n.jsx("span",{className:`problem-item-difficulty ${oe.difficulty.toLowerCase()}`,children:oe.difficulty})})]}),n.jsx($n,{size:16,className:"problem-item-arrow"})]},oe.id)})})]})})()})]}),_==="list"&&n.jsx("div",{className:"roadmap-container",children:Ia.map((re,we)=>{const oe=re.problems.map(J=>Bt[J]).filter(Boolean),vn=oe.filter(J=>P.includes(J.id)).length;return n.jsxs("div",{className:"roadmap-section",children:[we>0&&n.jsx("div",{className:"roadmap-connector"}),n.jsxs("div",{className:"section-card",style:{"--section-color":re.color},children:[n.jsxs("div",{className:"section-header",children:[n.jsx("span",{className:"section-icon",children:(()=>{const J=za[re.icon];return J?n.jsx(J,{size:24}):null})()}),n.jsxs("div",{className:"section-info",children:[n.jsx("h2",{children:re.title}),n.jsx("p",{children:re.description})]}),n.jsx("div",{className:"section-progress",children:n.jsxs("span",{children:[vn,"/",oe.length]})})]}),n.jsx("div",{className:"section-problems",children:oe.map((J,ce)=>{const he=P.includes(J.id);return n.jsxs("div",{className:`problem-node ${he?"completed":""}`,onClick:()=>t(`/practice/${J.id}`),children:[ce>0&&n.jsx("div",{className:"node-connector"}),n.jsx("div",{className:"node-circle",children:he?n.jsx(zn,{size:16}):n.jsx("span",{className:"node-number",children:ce+1})}),n.jsxs("div",{className:"node-info",children:[n.jsx("span",{className:"node-title",children:J.title}),n.jsx("span",{className:`node-difficulty ${J.difficulty.toLowerCase()}`,children:J.difficulty})]}),n.jsx($n,{size:16,className:"node-arrow"})]},J.id)})})]})]},re.id)})})]})})}return r?n.jsx("div",{className:"practice-container",children:n.jsxs("div",{className:"practice-layout",children:[n.jsxs("div",{className:"problem-panel",children:[n.jsxs("div",{className:"problem-header",children:[n.jsxs("button",{className:"back-btn",onClick:()=>v(!0),children:[n.jsx(_d,{size:16})," Roadmap"]}),n.jsx("h1",{children:r.title}),n.jsx("span",{className:`difficulty ${r.difficulty.toLowerCase()}`,children:r.difficulty}),P.includes(r.id)&&n.jsxs("span",{className:"solved-badge",children:[n.jsx(zn,{size:14})," Solved"]})]}),n.jsxs("div",{className:"problem-tabs",children:[n.jsx("button",{className:m==="description"?"active":"",onClick:()=>x("description"),children:"Description"}),n.jsx("button",{className:m==="hints"?"active":"",onClick:()=>x("hints"),children:"Hints"}),n.jsxs("button",{className:m==="solutions"?"active":"",onClick:()=>x("solutions"),children:[n.jsx(Bl,{size:14}),"Solutions"]}),n.jsxs("button",{className:m==="ai"?"active":"",onClick:()=>x("ai"),children:[n.jsx(gp,{size:14}),"AI Assistant"]})]}),n.jsxs("div",{className:"problem-content",ref:D,children:[m==="description"&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"description",children:r.description.split(`
`).map((U,G)=>n.jsx("p",{children:U},G))}),n.jsxs("div",{className:"examples",children:[n.jsx("h3",{children:"Examples"}),r.examples.map((U,G)=>n.jsxs("div",{className:"example",children:[n.jsxs("div",{className:"example-label",children:["Example ",G+1,":"]}),n.jsxs("div",{className:"example-content",children:[n.jsxs("div",{children:[n.jsx("strong",{children:"Input:"})," ",n.jsx("code",{children:U.input})]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Output:"})," ",n.jsx("code",{children:U.output})]}),U.explanation&&n.jsxs("div",{children:[n.jsx("strong",{children:"Explanation:"})," ",U.explanation]})]})]},G))]}),n.jsxs("div",{className:"constraints",children:[n.jsx("h3",{children:"Constraints"}),n.jsx("ul",{children:r.constraints.map((U,G)=>n.jsx("li",{children:n.jsx("code",{children:U})},G))})]})]}),m==="hints"&&n.jsxs("div",{className:"hints-section",children:[n.jsxs("div",{className:"hints-header",children:[n.jsx(ve,{size:20}),n.jsx("span",{children:"Need help? Reveal hints one at a time."})]}),r.hints.slice(0,j).map((U,G)=>n.jsxs("div",{className:"hint",children:[n.jsxs("span",{className:"hint-number",children:["Hint ",G+1,":"]}),U]},G)),j<r.hints.length&&n.jsxs("button",{className:"reveal-hint-btn",onClick:ne,children:[n.jsx(ve,{size:14}),"Reveal Hint ",j+1]}),j>=r.hints.length&&n.jsx("div",{className:"all-hints-shown",children:"All hints revealed!"})]}),m==="solutions"&&r.solutions&&n.jsxs("div",{className:"solutions-section",children:[n.jsxs("div",{className:"solutions-header",children:[n.jsx(Bl,{size:20}),n.jsx("span",{children:"Multiple approaches with different time/space complexities"})]}),n.jsx("div",{className:"solutions-list",children:Object.entries(r.solutions).map(([U,G])=>{const le=W===U,re=A===U;return n.jsxs("div",{className:`solution-card ${le?"expanded":""}`,children:[n.jsxs("div",{className:"solution-card-header",onClick:()=>O(le?null:U),children:[n.jsxs("div",{className:"solution-info",children:[n.jsx("h4",{className:"solution-name",children:G.name}),n.jsxs("div",{className:"solution-complexity",children:[n.jsxs("span",{className:"complexity-badge time",children:[n.jsx(ql,{size:12}),G.timeComplexity]}),n.jsxs("span",{className:"complexity-badge space",children:[n.jsx(Lx,{size:12}),G.spaceComplexity]})]})]}),n.jsx($n,{size:18,className:`solution-expand-icon ${le?"rotated":""}`})]}),le&&n.jsxs("div",{className:"solution-card-body",children:[n.jsx("p",{className:"solution-description",children:G.description}),n.jsxs("div",{className:"solution-code-container",children:[n.jsxs("div",{className:"solution-code-header",children:[n.jsx("span",{children:"Python"}),n.jsx("button",{className:"copy-solution-btn",onClick:we=>{we.stopPropagation(),navigator.clipboard.writeText(G.code),k(U),setTimeout(()=>k(null),2e3)},children:re?n.jsxs(n.Fragment,{children:[n.jsx(Sx,{size:14}),"Copied!"]}):n.jsxs(n.Fragment,{children:[n.jsx(xp,{size:14}),"Copy"]})})]}),n.jsx("pre",{className:"solution-code",children:n.jsx("code",{children:G.code})})]}),n.jsxs("button",{className:"use-solution-btn",onClick:we=>{we.stopPropagation(),o(G.code),x("description")},children:[n.jsx(oi,{size:14}),"Use This Solution"]})]})]},U)})})]}),m==="ai"&&n.jsxs("div",{className:"ai-assistant-tab",children:[z&&n.jsxs("div",{className:"review-error-banner",children:[n.jsx(ci,{size:16}),n.jsx("span",{children:z})]}),T&&n.jsxs("div",{className:"ai-review-results",children:[n.jsxs("div",{className:"review-header",children:[n.jsxs("div",{className:"logic-score",children:[n.jsx("span",{className:"score-label",children:"Logic Score"}),n.jsxs("div",{className:"score-circle",children:[n.jsx("span",{className:"score-value",children:T.logicScore}),n.jsx("span",{className:"score-total",children:"/10"})]})]}),n.jsxs("div",{className:"complexity-info",children:[n.jsxs("div",{className:"complexity-item",children:[n.jsx(ql,{size:14}),n.jsxs("span",{children:["Time: ",n.jsx("strong",{children:T.timeComplexity})]})]}),n.jsxs("div",{className:"complexity-item",children:[n.jsx(tc,{size:14}),n.jsxs("span",{children:["Space: ",n.jsx("strong",{children:T.spaceComplexity})]})]})]})]}),n.jsxs("div",{className:"review-feedback",children:[n.jsx("h4",{children:"Senior Reviewer Feedback"}),n.jsx("p",{children:T.generalFeedback})]}),T.optimizations&&T.optimizations.length>0&&n.jsxs("div",{className:"review-optimizations",children:[n.jsx("h4",{children:"Line-by-Line Optimizations"}),n.jsx("div",{className:"optimizations-list",children:T.optimizations.map((U,G)=>n.jsxs("div",{className:"opt-card",children:[n.jsxs("div",{className:"opt-card-header",children:[n.jsxs("span",{className:"line-badge",children:["Lines ",U.startLine,"-",U.endLine]}),n.jsx(Ts,{size:14,className:"zap-icon"})]}),n.jsxs("div",{className:"opt-issue",children:[n.jsx("strong",{children:"Issue:"})," ",U.issue]}),n.jsxs("div",{className:"opt-suggestion",children:[n.jsx("strong",{children:"Suggestion:"})," ",U.suggestion]}),U.improvedCode&&n.jsx("div",{className:"opt-code",children:n.jsx("pre",{children:n.jsx("code",{children:U.improvedCode})})})]},G))})]}),n.jsx("div",{className:"review-divider",children:n.jsx("span",{children:"Chat with Assistant below"})})]}),n.jsx(ye,{context:`Problem: ${r.title}

Description: ${r.description}

User's current code (${i}):
${l}`})]})]})]}),n.jsxs("div",{className:"editor-panel",children:[n.jsxs("div",{className:"editor-header",children:[n.jsxs("div",{className:"language-selector",children:[n.jsx(oi,{size:16}),n.jsx("span",{className:"language-label",children:"Python"})]}),n.jsx("div",{className:"editor-actions",children:n.jsx("button",{className:"btn btn-reset",onClick:Z,disabled:c,title:"Reset code",children:n.jsx(xn,{size:14})})})]}),n.jsx(bb,{language:i,code:l,onChange:o,decorations:B}),n.jsxs("div",{className:"run-actions",children:[n.jsxs("button",{className:"btn btn-run",onClick:H,disabled:c||R,children:[n.jsx(Pe,{size:14}),c?"Running...":"Run Code"]}),n.jsxs("button",{className:"btn btn-submit",onClick:Y,disabled:c||R,children:[n.jsx(zn,{size:14}),c?"Testing...":"Submit"]}),n.jsxs("button",{className:`btn btn-review ${R?"loading":""}`,onClick:I,disabled:c||R,title:"Get a Senior Code Review from Gemini",children:[n.jsx(Bx,{size:14}),R?"Reviewing...":"AI Review"]})]}),n.jsxs("div",{className:"output-panel",children:[n.jsxs("div",{className:"output-header",children:[n.jsx("span",{children:"Output"}),d&&n.jsx("span",{className:`status ${d.success?"success":"error"}`,children:d.success?"Success":"Error"})]}),n.jsxs("div",{className:"output-content",children:[!d&&!g&&n.jsx("div",{className:"output-placeholder",children:"Run your code to see output here..."}),d&&n.jsxs(n.Fragment,{children:[d.stdout&&n.jsxs("div",{className:"stdout",children:[n.jsx("div",{className:"output-label",children:"stdout:"}),n.jsx("pre",{children:d.stdout})]}),d.stderr&&n.jsxs("div",{className:"stderr",children:[n.jsx("div",{className:"output-label",children:"stderr:"}),n.jsx("pre",{children:d.stderr})]})]}),g&&n.jsxs("div",{className:"test-results",children:[n.jsx("div",{className:"test-summary",children:n.jsx("span",{className:g.allPassed?"all-passed":"some-failed",children:g.allPassed?n.jsxs(n.Fragment,{children:[n.jsx(zn,{size:16})," All tests passed!"]}):n.jsxs(n.Fragment,{children:[n.jsx(ci,{size:16})," ",g.summary.passed,"/",g.summary.total," tests passed"]})})}),n.jsx("div",{className:"test-cases",children:g.results.map((U,G)=>n.jsxs("div",{className:`test-case ${U.passed?"passed":"failed"}`,children:[n.jsxs("div",{className:"test-case-header",children:[U.passed?n.jsx(zn,{size:14}):n.jsx(ci,{size:14}),n.jsxs("span",{children:["Test Case ",U.testCase]})]}),n.jsxs("div",{className:"test-case-details",children:[n.jsxs("div",{children:[n.jsx("strong",{children:"Input:"})," ",n.jsx("code",{children:U.input})]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Expected:"})," ",n.jsx("code",{children:U.expected})]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Actual:"})," ",n.jsx("code",{children:U.actual||"(empty)"})]}),U.error&&n.jsxs("div",{className:"test-error",children:[n.jsx("strong",{children:"Error:"})," ",U.error]})]})]},G))})]})]})]})]})]})}):n.jsx("div",{className:"practice-container",children:n.jsx("div",{className:"loading",children:"Loading problem..."})})}async function kb(e){const t=await fetch("/api/sandbox/run",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:e})});if(!t.ok)throw new Error(`Server error (${t.status})`);return t.json()}const wb=`# Push values onto the stack, then pop them all
for i in range(1, 6):
    my_stack.push(i * 10)

while not my_stack.is_empty:
    my_stack.pop()`,Sb=[{label:"my_stack",color:"#6366f1",methods:[{sig:"my_stack.push(value)",desc:"Push a value onto the top"},{sig:"my_stack.pop()",desc:"Remove & return the top value"},{sig:"my_stack.peek()",desc:"Return top value without removing"},{sig:"my_stack.size",desc:"Number of items (property)"},{sig:"my_stack.is_empty",desc:"True if empty (property)"}]},{label:"my_queue",color:"#06b6d4",methods:[{sig:"my_queue.enqueue(value)",desc:"Add a value to the back"},{sig:"my_queue.dequeue()",desc:"Remove & return the front value"},{sig:"my_queue.peek()",desc:"Return front value without removing"},{sig:"my_queue.size",desc:"Number of items (property)"},{sig:"my_queue.is_empty",desc:"True if empty (property)"}]},{label:"my_list",color:"#f59e0b",methods:[{sig:"my_list.insert_head(value)",desc:"Add node at the front"},{sig:"my_list.insert_tail(value)",desc:"Add node at the back"},{sig:"my_list.delete(value)",desc:"Remove first node with that value"},{sig:"my_list.find(value)",desc:"Returns True if value exists"},{sig:"my_list.size",desc:"Number of nodes (property)"},{sig:"my_list.is_empty",desc:"True if empty (property)"}]}],Cb=[{label:"Stack",code:`# Push 1–5, then pop all
for i in range(1, 6):
    my_stack.push(i * 10)

while not my_stack.is_empty:
    my_stack.pop()`},{label:"Queue",code:`# Enqueue tasks, then process them
tasks = [15, 30, 45, 60, 75]
for t in tasks:
    my_queue.enqueue(t)

while not my_queue.is_empty:
    my_queue.dequeue()`},{label:"Linked List",code:`# Build a list, search, then delete
for v in [10, 20, 30, 40, 50]:
    my_list.insert_tail(v)

my_list.find(30)
my_list.delete(30)
my_list.insert_head(5)`},{label:"All Three",code:`# Use all three structures together
for i in range(1, 4):
    my_stack.push(i)
    my_queue.enqueue(i * 10)
    my_list.insert_tail(i * 100)

my_stack.pop()
my_queue.dequeue()
my_list.delete(200)`}];function Tb({snap:e}){if(!e)return null;const r={push:"#6366f1",pop:"#6366f1",enqueue:"#06b6d4",dequeue:"#06b6d4",insertHead:"#f59e0b",insertTail:"#f59e0b",delete:"#ef4444",find:"#10b981"}[e.operation]??"var(--accent-primary)";return n.jsxs("div",{className:"sandbox-step-banner",style:{"--op-color":r},children:[n.jsx("span",{className:"sandbox-step-op",children:e.operation}),n.jsx("span",{className:"sandbox-step-desc",children:e.description}),e.lineNumber&&n.jsxs("span",{className:"sandbox-step-line",children:["line ",e.lineNumber]})]})}function Ma({title:e,color:t,children:r,defaultOpen:s=!0}){const[i,a]=p.useState(s);return n.jsxs("div",{className:"sandbox-ds-section",style:{"--ds-color":t},children:[n.jsxs("button",{className:"sandbox-ds-header",onClick:()=>a(l=>!l),children:[n.jsx("span",{className:"sandbox-ds-dot"}),n.jsx("span",{className:"sandbox-ds-title",children:e}),i?n.jsx(ec,{size:13}):n.jsx($n,{size:13})]}),i&&n.jsx("div",{className:"sandbox-ds-body",children:r})]})}function _b({items:e,activeValue:t}){const r=[...e].reverse();return n.jsxs("div",{className:"sandbox-stack-container",children:[n.jsx("div",{className:"sandbox-stack-shaft",children:r.length===0?n.jsx("p",{className:"sandbox-ds-empty",children:"Empty"}):r.map((s,i)=>{const a=i===0,l=a&&s===t;return n.jsxs("div",{className:`sandbox-stack-block${a?" sandbox-stack-block--top":""}${l?" sandbox-item--active":""}`,children:[a&&n.jsx("span",{className:"sandbox-top-badge",children:"TOP"}),n.jsx("span",{className:"sandbox-stack-val",children:String(s)})]},i)})}),n.jsx("div",{className:"sandbox-stack-base",children:n.jsx("span",{className:"sandbox-stack-base-label",children:"▲ BOTTOM ▲"})})]})}function Lb({items:e,activeValue:t}){return e.length===0?n.jsx("div",{className:"sandbox-queue-track sandbox-queue-track--empty",children:n.jsx("p",{className:"sandbox-ds-empty",children:"Empty"})}):n.jsxs("div",{className:"sandbox-queue-wrapper",children:[n.jsxs("div",{className:"sandbox-queue-track",children:[n.jsxs("div",{className:"sandbox-queue-end sandbox-queue-end--out",children:[n.jsx("span",{children:"OUT"}),n.jsx("span",{className:"sandbox-queue-end-arrow",children:"←"})]}),e.map((r,s)=>n.jsxs(Ce.Fragment,{children:[n.jsx("div",{className:`sandbox-queue-cell${r===t?" sandbox-item--active":""}`,children:String(r)}),s<e.length-1&&n.jsx("span",{className:"sandbox-queue-conn",children:"→"})]},s)),n.jsxs("div",{className:"sandbox-queue-end sandbox-queue-end--in",children:[n.jsx("span",{className:"sandbox-queue-end-arrow",children:"→"}),n.jsx("span",{children:"IN"})]})]}),n.jsxs("div",{className:"sandbox-queue-footer",children:[n.jsx("span",{className:"sandbox-queue-label",children:"FRONT (dequeue)"}),n.jsx("span",{className:"sandbox-queue-label",children:"BACK (enqueue)"})]})]})}function Eb({nodes:e,activeValue:t}){return e.length===0?n.jsx("div",{className:"sandbox-ll-empty-track",children:n.jsx("p",{className:"sandbox-ds-empty",children:"Empty"})}):n.jsx("div",{className:"sandbox-ll-container",children:e.map((r,s)=>{const i=s===0,a=s===e.length-1,l=r.value===t;return n.jsxs(Ce.Fragment,{children:[n.jsxs("div",{className:"sandbox-ll-node-wrapper",children:[n.jsxs("div",{className:`sandbox-ll-node-box${l?" sandbox-item--active":""}`,children:[n.jsx("div",{className:"sandbox-ll-data",children:String(r.value)}),n.jsx("div",{className:"sandbox-ll-ptr",children:a?"∅":"→"})]}),n.jsx("span",{className:"sandbox-ll-label",children:i&&a?"HEAD/TAIL":i?"HEAD":a?"TAIL":""})]}),!a&&n.jsxs("div",{className:"sandbox-ll-connector",children:[n.jsx("div",{className:"sandbox-ll-conn-line"}),n.jsx("span",{className:"sandbox-ll-conn-arrow",children:"▶"})]})]},r.id)})})}function Ob(){const[e,t]=p.useState(!1);return n.jsxs("div",{className:"sandbox-api-ref",children:[n.jsxs("button",{className:"sandbox-api-ref-toggle",onClick:()=>t(r=>!r),children:[e?n.jsx(ec,{size:13}):n.jsx($n,{size:13}),"Python API Reference"]}),e&&n.jsxs("div",{className:"sandbox-api-ref-body",children:[Sb.map(r=>n.jsxs("div",{className:"sandbox-api-group",children:[n.jsx("div",{className:"sandbox-api-group-label",style:{color:r.color},children:r.label}),r.methods.map(s=>n.jsxs("div",{className:"sandbox-api-row",children:[n.jsx("code",{className:"sandbox-api-sig",children:s.sig}),n.jsx("span",{className:"sandbox-api-desc",children:s.desc})]},s.sig))]},r.label)),n.jsxs("p",{className:"sandbox-api-note",children:["Built-ins available: ",n.jsx("code",{children:"range"}),", ",n.jsx("code",{children:"len"}),", ",n.jsx("code",{children:"str"}),", ",n.jsx("code",{children:"int"}),",",n.jsx("code",{children:"float"}),", ",n.jsx("code",{children:"list"}),", ",n.jsx("code",{children:"sorted"}),", ",n.jsx("code",{children:"min"}),", ",n.jsx("code",{children:"max"}),", ",n.jsx("code",{children:"sum"}),", ",n.jsx("code",{children:"enumerate"}),", ",n.jsx("code",{children:"zip"})," …"]})]})]})}function Rb(){var A,k,R,$,T,E;const[e,t]=p.useState(wb),[r,s]=p.useState(null),[i,a]=p.useState(!1),[l,o]=p.useState(""),[c,u]=p.useState(""),[d,h]=p.useState(""),g=p.useRef(null),b=p.useRef(null),N=p.useRef([]),y=ac(),j=p.useCallback(z=>{const F=b.current,B=g.current;if(!(!B||!F)){if(!z){N.current=B.deltaDecorations(N.current,[]);return}N.current=B.deltaDecorations(N.current,[{range:new F.Range(z,1,z,1),options:{isWholeLine:!0,className:"sandbox-active-line"}}])}},[]);p.useEffect(()=>{var z;j(((z=y.currentSnapshot)==null?void 0:z.lineNumber)??null)},[y.currentSnapshot,j]);const f=async()=>{y.reset(),s(null),a(!0),j(null);try{const{snapshots:z,error:F,errorLine:B}=await kb(e);if(F&&(!z||z.length===0)){s({message:F,line:B});return}(z==null?void 0:z.length)>0&&y.loadHistory(z),F&&s({message:F,line:B})}catch(z){s({message:z.message,line:null})}finally{a(!1)}},m=()=>{y.reset(),s(null),j(null)},x=async()=>{h("Saving…");try{const z=await fetch("/api/sandbox/scripts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:"Untitled",code:e})});if(!z.ok)throw new Error("Server error");const F=await z.json();o(F.id),h(`Saved! ID: ${F.id}`)}catch{h("Save failed")}},S=async()=>{if(c.trim()){h("Loading…");try{const z=await fetch(`/api/sandbox/scripts/${c.trim()}`);if(!z.ok)throw new Error("Not found");const F=await z.json();t(F.code),y.reset(),s(null),h("Loaded!")}catch{h("Script not found")}}},v=y.currentSnapshot,P=((k=(A=v==null?void 0:v.state)==null?void 0:A.stack)==null?void 0:k.items)??[],C=(($=(R=v==null?void 0:v.state)==null?void 0:R.queue)==null?void 0:$.items)??[],V=((E=(T=v==null?void 0:v.state)==null?void 0:T.linkedList)==null?void 0:E.nodes)??[],L=(v==null?void 0:v.value)??(v==null?void 0:v.result),_=(v==null?void 0:v.dsType)==="stack"?L:void 0,q=(v==null?void 0:v.dsType)==="queue"?L:void 0,W=(v==null?void 0:v.dsType)==="linkedList"?L:void 0,O=y.totalSteps>0;return n.jsxs("div",{className:"sandbox-page",children:[n.jsxs("div",{className:"sandbox-header",children:[n.jsx("div",{className:"sandbox-header-icon",children:n.jsx(Ul,{size:20})}),n.jsxs("div",{children:[n.jsx("h1",{className:"sandbox-title",children:"Python Code Sandbox"}),n.jsxs("p",{className:"sandbox-subtitle",children:["Write Python using ",n.jsx("code",{children:"my_stack"}),", ",n.jsx("code",{children:"my_queue"}),", or ",n.jsx("code",{children:"my_list"})," — step through each operation and watch your data structures animate."]})]})]}),n.jsxs("div",{className:"sandbox-examples",children:[n.jsx("span",{className:"sandbox-examples-label",children:"Examples:"}),Cb.map(z=>n.jsx("button",{className:"sandbox-example-btn",onClick:()=>{t(z.code),y.reset(),s(null)},children:z.label},z.label))]}),n.jsxs("div",{className:"sandbox-layout",children:[n.jsxs("div",{className:"sandbox-editor-panel",children:[n.jsx("div",{className:"sandbox-editor-wrapper",children:n.jsx(zp,{height:"380px",language:"python",theme:"vs-dark",value:e,onChange:z=>t(z??""),onMount:(z,F)=>{g.current=z,b.current=F},options:{minimap:{enabled:!1},fontSize:13,lineNumbers:"on",scrollBeyondLastLine:!1,wordWrap:"on",renderLineHighlight:"none"}})}),n.jsxs("div",{className:"sandbox-controls",children:[n.jsxs("div",{className:"sandbox-ctrl-left",children:[n.jsx("button",{className:"btn btn-primary sandbox-run-btn",onClick:f,disabled:i,children:i?n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"sandbox-spinner"}),"Running…"]}):n.jsxs(n.Fragment,{children:[n.jsx(Pe,{size:14}),"Run"]})}),n.jsxs("button",{className:"btn btn-secondary",onClick:y.pause,disabled:!y.isPlaying,children:[n.jsx(Hx,{size:14}),"Stop"]}),n.jsxs("button",{className:"btn btn-secondary",onClick:m,disabled:!O&&!r,children:[n.jsx(xn,{size:14}),"Reset"]})]}),n.jsxs("div",{className:"sandbox-ctrl-right",children:[n.jsxs("button",{className:"btn btn-secondary sandbox-save-btn",onClick:x,children:[n.jsx($x,{size:14}),"Save"]}),n.jsx("input",{className:"sandbox-load-input",placeholder:"Script ID…",value:c,onChange:z=>u(z.target.value),onKeyDown:z=>z.key==="Enter"&&S()}),n.jsxs("button",{className:"btn btn-secondary",onClick:S,children:[n.jsx(Ex,{size:14}),"Load"]})]})]}),d&&n.jsx("div",{className:"sandbox-save-status",children:d}),r&&n.jsxs("div",{className:"sandbox-error-banner",children:[n.jsxs("strong",{children:["Error",r.line?` (line ${r.line})`:"",":"]})," ",r.message]}),n.jsx(Ob,{})]}),n.jsx("div",{className:"sandbox-visual-panel",children:O?n.jsxs(n.Fragment,{children:[n.jsx(Tb,{snap:v}),n.jsx(Ma,{title:"Stack",color:"#6366f1",children:n.jsx(_b,{items:P,activeValue:_})}),n.jsx(Ma,{title:"Queue",color:"#06b6d4",children:n.jsx(Lb,{items:C,activeValue:q})}),n.jsx(Ma,{title:"Linked List",color:"#f59e0b",children:n.jsx(Eb,{nodes:V,activeValue:W})}),n.jsx(ic,{currentStepIndex:y.currentStepIndex,totalSteps:y.totalSteps,isPlaying:y.isPlaying,isAtStart:y.isAtStart,isAtEnd:y.isAtEnd,currentSnapshot:y.currentSnapshot,algorithmLabel:"Sandbox",onPlay:y.resume,onPause:y.pause,onStepForward:y.stepForward,onStepBackward:y.stepBackward,onScrub:y.scrubTo,onJumpToStart:()=>y.scrubTo(0),onJumpToEnd:()=>y.scrubTo(y.totalSteps-1)})]}):n.jsxs("div",{className:"sandbox-empty-state",children:[n.jsx(Ul,{size:40,className:"sandbox-empty-icon"}),n.jsx("p",{className:"sandbox-empty-title",children:"Nothing to visualize yet"}),n.jsxs("p",{className:"sandbox-empty-hint",children:["Write Python code in the editor and click ",n.jsx("strong",{children:"Run"})," to watch each operation step by step."]})]})})]})]})}const jn=11,Pb=[{label:"5 Keys",keys:["cat","dog","fox","ant","bee"]},{label:"8 Keys",keys:["cat","dog","fox","ant","bee","cow","hen","pig"]},{label:"8 Names",keys:["alice","bob","carol","dave","eve","frank","grace","hank"]}];function lc(e,t){let r=0;for(let s=0;s<e.length;s++)r=(r*31+e.charCodeAt(s))%t;return r}function Vt(e){return{cap:e,table:Array(e).fill(null),size:0,totalProbes:0,collisions:0,maxProbes:0,log:[]}}function Aa(e){return{cap:e,table:Array.from({length:e},()=>[]),size:0,totalProbes:0,collisions:0,maxChain:0,log:[]}}function Fd(e,t){if(e.size>=e.cap)return e;const{cap:r,table:s}=e;let a=lc(t,r),l=0;for(;s[a]!==null&&s[a]!==t;)if(a=(a+1)%r,l++,l>=r)return e;if(s[a]===t)return e;const o=l+1,c=l>0,u=[...s];return u[a]=t,{...e,table:u,size:e.size+1,totalProbes:e.totalProbes+o,collisions:e.collisions+(c?1:0),maxProbes:Math.max(e.maxProbes,o),log:[{key:t,slot:a,probes:o,collision:c},...e.log.slice(0,7)]}}function Vd(e,t){if(e.size>=e.cap)return e;const{cap:r,table:s}=e,i=lc(t,r);let a=0,l=i;for(let d=0;d<r&&(l=(i+d*d)%r,s[l]!==null);d++){if(s[l]===t)return e;a++}if(s[l]!==null)return e;const o=a+1,c=a>0,u=[...s];return u[l]=t,{...e,table:u,size:e.size+1,totalProbes:e.totalProbes+o,collisions:e.collisions+(c?1:0),maxProbes:Math.max(e.maxProbes,o),log:[{key:t,slot:l,probes:o,collision:c},...e.log.slice(0,7)]}}function Dd(e,t){const{cap:r,table:s}=e,i=lc(t,r),a=s[i];if(a.includes(t))return e;const l=a.length,o=a.length>0,c=s.map((u,d)=>d===i?[...u,t]:u);return{...e,table:c,size:e.size+1,totalProbes:e.totalProbes+l,collisions:e.collisions+(o?1:0),maxChain:Math.max(e.maxChain,a.length+1),log:[{key:t,slot:i,probes:l,collision:o},...e.log.slice(0,7)]}}function Qs({label:e,value:t}){return n.jsxs("div",{className:"hc-metric",children:[n.jsx("span",{className:"hc-metric-value",children:t}),n.jsx("span",{className:"hc-metric-label",children:e})]})}function Fa({name:e,formula:t,color:r,state:s,currentKey:i,isChaining:a,isWinner:l}){const o=s.log[0],c=(o==null?void 0:o.key)===i?o.slot:null,u=s.size/s.cap;return n.jsxs("div",{className:`hc-column${l&&s.size>0?" hc-column--winner":""}`,style:{"--col-color":r},children:[n.jsxs("div",{className:"hc-col-header",children:[n.jsxs("div",{className:"hc-col-title-group",children:[n.jsx("span",{className:"hc-col-dot"}),n.jsx("span",{className:"hc-col-name",children:e})]}),l&&s.size>0&&n.jsxs("span",{className:"hc-winner-badge",children:[n.jsx(Cr,{size:11})," Best"]})]}),n.jsx("p",{className:"hc-col-formula",children:t}),n.jsxs("div",{className:"hc-metrics",children:[n.jsx(Qs,{label:"Total Probes",value:s.totalProbes}),n.jsx(Qs,{label:"Collisions",value:s.collisions}),n.jsx(Qs,{label:a?"Max Chain":"Max Probes/Insert",value:a?s.maxChain:s.maxProbes}),n.jsx(Qs,{label:"Load Factor",value:`${(u*100).toFixed(0)}%`})]}),n.jsx("div",{className:"hc-load-bar",children:n.jsx("div",{className:"hc-load-fill",style:{width:`${Math.min(u*100,100)}%`,background:u>.7?"#ef4444":u>.5?"#f59e0b":r}})}),n.jsx("div",{className:"hc-slots",children:a?s.table.map((d,h)=>n.jsxs("div",{className:`hc-slot${d.length>0?" filled":" empty"}${c===h?" newly-inserted":""}`,children:[n.jsx("div",{className:"hc-slot-index",children:h}),n.jsx("div",{className:"hc-chain-items",children:d.length===0?n.jsx("span",{className:"hc-empty-label",children:"—"}):d.map((g,b)=>n.jsxs(Ce.Fragment,{children:[b>0&&n.jsx($n,{size:9,className:"hc-chain-sep"}),n.jsx("span",{className:`hc-chain-key${g===i?" hc-new-key":""}`,children:g})]},b))})]},h)):s.table.map((d,h)=>n.jsxs("div",{className:`hc-slot${d?" filled":" empty"}${c===h?" newly-inserted":""}`,children:[n.jsx("div",{className:"hc-slot-index",children:h}),n.jsx("div",{className:"hc-slot-key",children:d?n.jsx("span",{className:d===i?"hc-new-key":"",children:d}):n.jsx("span",{className:"hc-empty-label",children:"—"})})]},h))}),s.log.length>0&&n.jsxs("div",{className:"hc-log",children:[n.jsx("div",{className:"hc-log-title",children:"Recent Inserts"}),s.log.slice(0,5).map((d,h)=>n.jsxs("div",{className:`hc-log-entry${d.collision?" hc-log-collision":""}`,children:[n.jsxs("span",{className:"hc-log-key",children:['"',d.key,'"']}),n.jsxs("span",{className:"hc-log-detail",children:["→ [",d.slot,"] · ",d.probes,"p"]}),d.collision&&n.jsx("span",{className:"hc-log-flag",children:"col"})]},h))]})]})}function Ib(){const[e,t]=p.useState(()=>Vt(jn)),[r,s]=p.useState(()=>Vt(jn)),[i,a]=p.useState(()=>Aa(jn)),[l,o]=p.useState(null),[c,u]=p.useState(""),[d,h]=p.useState(!1),g=()=>{const v=c.trim();!v||d||(o(v),t(P=>Fd(P,v)),s(P=>Vd(P,v)),a(P=>Dd(P,v)),u(""),setTimeout(()=>o(P=>P===v?null:P),1400))},b=async v=>{if(d)return;h(!0);let P=Vt(jn),C=Vt(jn),V=Aa(jn);t(P),s(C),a(V),o(null),await new Promise(L=>setTimeout(L,60));for(const L of v)P=Fd(P,L),C=Vd(C,L),V=Dd(V,L),o(L),t(P),s(C),a(V),await new Promise(_=>setTimeout(_,300));o(null),h(!1)},N=()=>{d||(t(Vt(jn)),s(Vt(jn)),a(Aa(jn)),o(null),u(""))},y=e.size>0,j=y?Math.min(e.totalProbes,r.totalProbes,i.totalProbes):-1,f=y&&e.totalProbes===j,m=y&&r.totalProbes===j,x=y&&i.totalProbes===j,S=[f&&"Linear",m&&"Quadratic",x&&"Chaining"].filter(Boolean).join(" & ");return n.jsxs("div",{className:"container hc-page",children:[n.jsxs("div",{className:"hc-header",children:[n.jsx("div",{className:"hc-header-icon",children:n.jsx(vp,{size:22})}),n.jsxs("div",{children:[n.jsx("h1",{className:"hc-title",children:"Hash Table Comparison"}),n.jsxs("p",{className:"hc-subtitle",children:["Insert the same keys into all three collision strategies simultaneously. Table size: ",n.jsx("strong",{children:jn})," (prime) ·"," ","Hash: ",n.jsxs("code",{children:["h = (h × 31 + charCode) % ",jn]})]})]})]}),n.jsxs("div",{className:"hc-controls",children:[n.jsxs("div",{className:"hc-input-row",children:[n.jsx("input",{className:"hc-key-input",type:"text",placeholder:"Type a key…",value:c,onChange:v=>u(v.target.value),onKeyDown:v=>v.key==="Enter"&&g(),disabled:d}),n.jsx("button",{className:"btn btn-insert hc-insert-btn",onClick:g,disabled:!c.trim()||d,children:"Insert into All"})]}),n.jsxs("div",{className:"hc-preset-row",children:[n.jsx("span",{className:"hc-preset-label",children:"Presets:"}),Pb.map(v=>n.jsxs("button",{className:"btn hc-preset-btn",onClick:()=>b(v.keys),disabled:d,children:[n.jsx(Pe,{size:11})," ",v.label]},v.label)),n.jsxs("button",{className:"btn btn-clear hc-reset-btn",onClick:N,disabled:d,children:[n.jsx(sc,{size:12})," Reset"]})]})]}),y&&n.jsxs("div",{className:"hc-winner-banner",children:[n.jsx(Cr,{size:14}),n.jsxs("span",{children:[n.jsx("strong",{children:S})," used fewest total probes (",j,")"]})]}),l&&n.jsxs("div",{className:"hc-current-key-banner",children:["Inserting ",n.jsxs("strong",{children:['"',l,'"']}),"…"]}),n.jsxs("div",{className:"hc-grid",children:[n.jsx(Fa,{name:"Linear Probing",formula:"h(k,i) = (h₀ + i) % cap",color:"#6366f1",state:e,currentKey:l,isChaining:!1,isWinner:f}),n.jsx(Fa,{name:"Quadratic Probing",formula:"h(k,i) = (h₀ + i²) % cap",color:"#f59e0b",state:r,currentKey:l,isChaining:!1,isWinner:m}),n.jsx(Fa,{name:"Separate Chaining",formula:"slot = h(k) % cap, chain appended",color:"#10b981",state:i,currentKey:l,isChaining:!0,isWinner:x})]}),n.jsxs("div",{className:"hc-legend",children:[n.jsx("span",{className:"hc-legend-title",children:"Probe count:"}),n.jsx("span",{className:"hc-legend-item",children:"Open addressing — slots examined until empty slot found (min 1)"}),n.jsx("span",{className:"hc-legend-sep",children:"·"}),n.jsx("span",{className:"hc-legend-item",children:"Chaining — nodes traversed in chain before appending (0 if bucket empty)"})]})]})}const zb=[{id:"sorting",label:"Sorting Race",Icon:kx},{id:"searching",label:"Searching",Icon:At},{id:"hashing",label:"Hash Tables",Icon:Px}],Dt=["bubble","insertion","merge","quick"],Mb={bubble:{label:"Bubble Sort",color:"#6366f1",complexity:"O(n²)",swap:"Swaps"},insertion:{label:"Insertion Sort",color:"#f59e0b",complexity:"O(n²)",swap:"Swaps"},merge:{label:"Merge Sort",color:"#10b981",complexity:"O(n log n)",swap:"Writes"},quick:{label:"Quick Sort",color:"#ef4444",complexity:"O(n log n)",swap:"Swaps"}},$d=[{label:"Fast",ms:8},{label:"Medium",ms:30},{label:"Slow",ms:80}];function Va(e){return Array.from({length:e},()=>Math.floor(Math.random()*80)+15)}function Ap(e){return Array.from({length:e},(t,r)=>Math.round(15+r/(e-1)*80))}function Ab(e){return Ap(e).reverse()}function Ge(e,t,r,s,i,a=!1){return{array:[...e],comparing:t,swapping:r,comparisons:s,swaps:i,done:a}}function Fb(e){const t=[],r=[...e],s=r.length;let i=0,a=0;for(let l=0;l<s-1;l++)for(let o=0;o<s-l-1;o++)i++,t.push(Ge(r,[o,o+1],[],i,a)),r[o]>r[o+1]&&([r[o],r[o+1]]=[r[o+1],r[o]],a++,t.push(Ge(r,[],[o,o+1],i,a)));return t.push(Ge(r,[],[],i,a,!0)),t}function Vb(e){const t=[],r=[...e];let s=0,i=0;for(let a=1;a<r.length;a++){let l=a;for(;l>0&&(s++,t.push(Ge(r,[l-1,l],[],s,i)),r[l-1]>r[l]);)[r[l-1],r[l]]=[r[l],r[l-1]],i++,t.push(Ge(r,[],[l-1,l],s,i)),l--}return t.push(Ge(r,[],[],s,i,!0)),t}function Db(e){const t=[],r=[...e];let s=0,i=0;function a(o,c,u){const d=r.slice(o,c+1),h=r.slice(c+1,u+1);let g=0,b=0,N=o;for(;g<d.length&&b<h.length;)s++,t.push(Ge(r,[o+g,c+1+b],[],s,i)),r[N++]=d[g]<=h[b]?d[g++]:h[b++],i++,t.push(Ge(r,[],[N-1],s,i));for(;g<d.length;)r[N++]=d[g++],i++,t.push(Ge(r,[],[N-1],s,i));for(;b<h.length;)r[N++]=h[b++],i++,t.push(Ge(r,[],[N-1],s,i))}function l(o,c){if(o>=c)return;const u=o+c>>1;l(o,u),l(u+1,c),a(o,u,c)}return l(0,r.length-1),t.push(Ge(r,[],[],s,i,!0)),t}function $b(e){const t=[],r=[...e];let s=0,i=0;function a(o,c){const u=r[c];let d=o-1;for(let h=o;h<c;h++)s++,t.push(Ge(r,[h,c],[],s,i)),r[h]<=u&&(d++,d!==h&&([r[d],r[h]]=[r[h],r[d]],i++,t.push(Ge(r,[],[d,h],s,i))));return[r[d+1],r[c]]=[r[c],r[d+1]],i++,t.push(Ge(r,[],[d+1,c],s,i)),d+1}function l(o,c){if(o>=c)return;const u=a(o,c);l(o,u-1),l(u+1,c)}return l(0,r.length-1),t.push(Ge(r,[],[],s,i,!0)),t}const Bb={bubble:Fb,insertion:Vb,merge:Db,quick:$b},Da=18;function Bd(e){return{array:[...e],comparing:[],swapping:[],comparisons:0,swaps:0,done:!1}}function qb(){const[e,t]=p.useState(Da),[r,s]=p.useState(1),[i,a]=p.useState(!1),[l,o]=p.useState(()=>Va(Da)),[c,u]=p.useState(()=>Object.fromEntries(Dt.map(m=>[m,Bd(Va(Da))]))),d=p.useRef({}),h=p.useRef({}),g=p.useRef(null),b=()=>{clearInterval(g.current),g.current=null},N=(m,x=e)=>{b(),a(!1);const S=m==="sorted"?Ap(x):m==="reverse"?Ab(x):Va(x);o(S),u(Object.fromEntries(Dt.map(v=>[v,Bd(S)]))),d.current={},h.current={}},y=()=>{if(!i){for(const m of Dt)d.current[m]=Bb[m](l),h.current[m]=0;u(Object.fromEntries(Dt.map(m=>[m,{...d.current[m][0],done:!1}]))),a(!0),g.current=setInterval(()=>{const m={};let x=!0;for(const S of Dt){const v=d.current[S],P=h.current[S],C=Math.min(P+1,v.length-1);h.current[S]=C,m[S]=v[C],C<v.length-1&&(x=!1)}u(m),x&&(b(),a(!1))},$d[r].ms)}},j=()=>N("random"),f=Math.max(...l,1);return n.jsxs("div",{className:"ac-section",children:[n.jsxs("div",{className:"ac-controls",children:[n.jsxs("div",{className:"ac-ctrl-row",children:[n.jsxs("div",{className:"ac-ctrl-group",children:[n.jsxs("span",{className:"ac-label",children:["Array size: ",n.jsx("strong",{children:e})]}),n.jsx("input",{type:"range",min:8,max:30,value:e,className:"ac-range",disabled:i,onChange:m=>{const x=+m.target.value;t(x),N("random",x)}})]}),n.jsxs("div",{className:"ac-ctrl-group",children:[n.jsx("span",{className:"ac-label",children:"Speed"}),n.jsx("div",{className:"ac-btn-group",children:$d.map((m,x)=>n.jsx("button",{className:`ac-tog-btn ${r===x?"active":""}`,onClick:()=>s(x),disabled:i,children:m.label},m.label))})]}),n.jsxs("div",{className:"ac-ctrl-group",children:[n.jsx("span",{className:"ac-label",children:"Array type"}),n.jsx("div",{className:"ac-btn-group",children:["random","sorted","reverse"].map(m=>n.jsx("button",{className:"ac-tog-btn",onClick:()=>N(m),disabled:i,children:m.charAt(0).toUpperCase()+m.slice(1)},m))})]})]}),n.jsxs("div",{className:"ac-action-row",children:[n.jsxs("button",{className:"btn btn-insert ac-run-btn",onClick:y,disabled:i,children:[n.jsx(Pe,{size:13})," Start Race"]}),n.jsxs("button",{className:"btn btn-clear",onClick:j,disabled:i,children:[n.jsx(xn,{size:12})," Reset"]})]})]}),n.jsx("div",{className:"ac-sort-grid",children:Dt.map(m=>{const x=Mb[m],S=c[m];return S?n.jsxs("div",{className:`ac-sort-col${S.done?" ac-sort-col--done":""}`,style:{"--sort-color":x.color},children:[n.jsxs("div",{className:"ac-sort-header",children:[n.jsx("span",{className:"ac-sort-name",children:x.label}),n.jsx("span",{className:"ac-badge",children:x.complexity})]}),S.done&&n.jsx("div",{className:"ac-done-badge",children:"Done ✓"}),n.jsx("div",{className:"ac-bars",children:S.array.map((v,P)=>{const C=S.comparing.includes(P),V=S.swapping.includes(P);return n.jsx("div",{className:`ac-bar${C?" ac-bar--cmp":""}${V?" ac-bar--swp":""}${S.done?" ac-bar--done":""}`,style:{height:`${v/f*100}%`}},P)})}),n.jsxs("div",{className:"ac-sort-metrics",children:[n.jsxs("div",{className:"ac-sm",children:[n.jsx("span",{className:"ac-sm-val",children:S.comparisons}),n.jsx("span",{className:"ac-sm-lbl",children:"Comparisons"})]}),n.jsxs("div",{className:"ac-sm",children:[n.jsx("span",{className:"ac-sm-val",children:S.swaps}),n.jsx("span",{className:"ac-sm-lbl",children:x.swap})]})]})]},m):null})}),n.jsxs("div",{className:"ac-legend",children:[n.jsxs("span",{className:"ac-leg",children:[n.jsx("span",{className:"ac-leg-dot",style:{background:"#fbbf24"}}),"Comparing"]}),n.jsxs("span",{className:"ac-leg",children:[n.jsx("span",{className:"ac-leg-dot",style:{background:"#ef4444"}}),"Swapping/Writing"]}),n.jsxs("span",{className:"ac-leg",children:[n.jsx("span",{className:"ac-leg-dot",style:{background:"#10b981"}}),"Sorted"]})]})]})}const Hb=16;function Ub(){const e=new Set;for(;e.size<Hb;)e.add(Math.floor(Math.random()*85)+10);return[...e].sort((t,r)=>t-r)}function Kb(e,t){const r=[];for(let s=0;s<e.length;s++){const i=e[s]===t;if(r.push({checking:s,found:i,done:i,notFound:!1,comparisons:s+1}),i)return r}return r.push({checking:-1,found:!1,done:!0,notFound:!0,comparisons:e.length}),r}function Wb(e,t){const r=[];let s=0,i=e.length-1,a=0;for(;s<=i;){const l=s+i>>1;a++;const o=e[l]===t;if(r.push({lo:s,hi:i,mid:l,found:o,done:o,notFound:!1,comparisons:a}),o)return r;e[l]<t?s=l+1:i=l-1}return r.push({lo:-1,hi:-1,mid:-1,found:!1,done:!0,notFound:!0,comparisons:a}),r}const $a={checking:-1,found:!1,done:!1,notFound:!1,comparisons:0},Ba={lo:-1,hi:-1,mid:-1,found:!1,done:!1,notFound:!1,comparisons:0};function Gb(){const[e]=p.useState(Ub),[t,r]=p.useState(""),[s,i]=p.useState($a),[a,l]=p.useState(Ba),[o,c]=p.useState(!1),u=p.useRef(0),d=p.useRef(0),h=p.useRef([]),g=p.useRef([]),b=p.useRef(null),N=()=>{const f=parseInt(t,10);isNaN(f)||(clearInterval(b.current),h.current=Kb(e,f),g.current=Wb(e,f),u.current=0,d.current=0,i($a),l({...Ba,lo:0,hi:e.length-1}),c(!0),b.current=setInterval(()=>{const m=u.current,x=d.current,S=h.current,v=g.current;m<S.length&&(i(S[m]),u.current=m+1),x<v.length&&(l(v[x]),d.current=x+1),m>=S.length-1&&x>=v.length-1&&(clearInterval(b.current),c(!1))},400))},y=()=>{clearInterval(b.current),c(!1),r(""),i($a),l(Ba)},j=({state:f,isLinear:m})=>f.notFound?n.jsxs("span",{className:"ac-result-notfound",children:["Not found — ",f.comparisons," step",f.comparisons!==1?"s":""]}):f.found?n.jsxs("span",{className:"ac-result-found",children:["Found in ",f.comparisons," step",f.comparisons!==1?"s":"","!"]}):f.comparisons>0?n.jsxs("span",{className:"ac-result-idle",children:[f.comparisons," step",f.comparisons!==1?"s":"","…"]}):n.jsx("span",{className:"ac-result-idle",children:"Awaiting search"});return n.jsxs("div",{className:"ac-section",children:[n.jsx("div",{className:"ac-controls",children:n.jsxs("div",{className:"ac-ctrl-row",children:[n.jsxs("div",{className:"ac-ctrl-group",children:[n.jsx("span",{className:"ac-label",children:"Target value"}),n.jsxs("div",{className:"ac-search-input-row",children:[n.jsx("input",{type:"number",className:"ac-num-input",placeholder:"Enter a number…",value:t,onChange:f=>r(f.target.value),onKeyDown:f=>f.key==="Enter"&&!o&&N(),disabled:o}),n.jsxs("button",{className:"btn btn-insert",onClick:N,disabled:o||!t,children:[n.jsx(Pe,{size:13})," Search"]}),n.jsxs("button",{className:"btn btn-clear",onClick:y,children:[n.jsx(xn,{size:12})," Reset"]})]})]}),n.jsx("p",{className:"ac-search-hint",children:"Click a value below to autofill, or type any number (even one not in the array)."})]})}),n.jsx("div",{className:"ac-search-label",children:"Sorted array (click a value to target it):"}),n.jsx("div",{className:"ac-arr-pills",children:e.map((f,m)=>n.jsx("button",{className:"ac-pill",onClick:()=>r(String(f)),disabled:o,children:f},m))}),n.jsxs("div",{className:"ac-search-grid",children:[n.jsxs("div",{className:"ac-search-col",style:{"--sc":"#6366f1"},children:[n.jsxs("div",{className:"ac-search-col-hd",children:[n.jsx("span",{className:"ac-search-col-dot"}),n.jsx("span",{className:"ac-search-col-name",children:"Linear Search"}),n.jsx("span",{className:"ac-badge",children:"O(n)"})]}),n.jsx("div",{className:"ac-search-vis",children:e.map((f,m)=>{const x=s.checking===m,S=s.found&&x,v=!s.notFound&&s.checking>m;return n.jsx("div",{className:`ac-sv-box${S?" ac-sv--found":x?" ac-sv--checking":v?" ac-sv--past":""}`,children:f},m)})}),n.jsx("div",{className:"ac-result",children:n.jsx(j,{state:s,isLinear:!0})})]}),n.jsxs("div",{className:"ac-search-col",style:{"--sc":"#10b981"},children:[n.jsxs("div",{className:"ac-search-col-hd",children:[n.jsx("span",{className:"ac-search-col-dot"}),n.jsx("span",{className:"ac-search-col-name",children:"Binary Search"}),n.jsx("span",{className:"ac-badge",children:"O(log n)"})]}),n.jsx("div",{className:"ac-search-vis",children:e.map((f,m)=>{const x=a.lo!==-1&&m>=a.lo&&m<=a.hi,S=a.mid===m,v=a.found&&S,P=a.lo!==-1&&!x;return n.jsx("div",{className:`ac-sv-box${v?" ac-sv--found":S?" ac-sv--checking":P?" ac-sv--elim":x?" ac-sv--range":""}`,children:f},m)})}),n.jsx("div",{className:"ac-result",children:n.jsx(j,{state:a})})]})]}),n.jsxs("div",{className:"ac-legend",children:[n.jsxs("span",{className:"ac-leg",children:[n.jsx("span",{className:"ac-leg-dot",style:{background:"#fbbf24"}}),"Checking"]}),n.jsxs("span",{className:"ac-leg",children:[n.jsx("span",{className:"ac-leg-dot",style:{background:"#10b981"}}),"Found"]}),n.jsxs("span",{className:"ac-leg",children:[n.jsx("span",{className:"ac-leg-dot",style:{background:"#6b7280"}}),"Eliminated"]}),n.jsxs("span",{className:"ac-leg",children:[n.jsx("span",{className:"ac-leg-dot",style:{background:"#6366f1",opacity:.4}}),"Active range (binary)"]})]})]})}const Pn=11,Qb=[{label:"5 Keys",keys:["cat","dog","fox","ant","bee"]},{label:"8 Keys",keys:["cat","dog","fox","ant","bee","cow","hen","pig"]},{label:"8 Names",keys:["alice","bob","carol","dave","eve","frank","grace","hank"]}];function oc(e,t){let r=0;for(let s=0;s<e.length;s++)r=(r*31+e.charCodeAt(s))%t;return r}function $t(e){return{cap:e,table:Array(e).fill(null),size:0,totalProbes:0,collisions:0,maxProbes:0,log:[]}}function qa(e){return{cap:e,table:Array.from({length:e},()=>[]),size:0,totalProbes:0,collisions:0,maxChain:0,log:[]}}function qd(e,t){if(e.size>=e.cap)return e;let s=oc(t,e.cap),i=0;for(;e.table[s]!==null&&e.table[s]!==t;)if(s=(s+1)%e.cap,i++,i>=e.cap)return e;if(e.table[s]===t)return e;const a=i+1,l=i>0,o=[...e.table];return o[s]=t,{...e,table:o,size:e.size+1,totalProbes:e.totalProbes+a,collisions:e.collisions+(l?1:0),maxProbes:Math.max(e.maxProbes,a),log:[{key:t,slot:s,probes:a,collision:l},...e.log.slice(0,6)]}}function Hd(e,t){if(e.size>=e.cap)return e;const r=oc(t,e.cap);let s=0,i=r;for(let c=0;c<e.cap&&(i=(r+c*c)%e.cap,e.table[i]!==null);c++){if(e.table[i]===t)return e;s++}if(e.table[i]!==null)return e;const a=s+1,l=s>0,o=[...e.table];return o[i]=t,{...e,table:o,size:e.size+1,totalProbes:e.totalProbes+a,collisions:e.collisions+(l?1:0),maxProbes:Math.max(e.maxProbes,a),log:[{key:t,slot:i,probes:a,collision:l},...e.log.slice(0,6)]}}function Ud(e,t){const r=oc(t,e.cap),s=e.table[r];if(s.includes(t))return e;const i=s.length,a=s.length>0,l=e.table.map((o,c)=>c===r?[...o,t]:o);return{...e,table:l,size:e.size+1,totalProbes:e.totalProbes+i,collisions:e.collisions+(a?1:0),maxChain:Math.max(e.maxChain,s.length+1),log:[{key:t,slot:r,probes:i,collision:a},...e.log.slice(0,6)]}}function Ha({name:e,formula:t,color:r,state:s,currentKey:i,isChaining:a,isWinner:l}){const o=s.log[0],c=(o==null?void 0:o.key)===i?o.slot:null,u=s.size/s.cap;return n.jsxs("div",{className:`hc-column${l&&s.size>0?" hc-column--winner":""}`,style:{"--col-color":r},children:[n.jsxs("div",{className:"hc-col-header",children:[n.jsxs("div",{className:"hc-col-title-group",children:[n.jsx("span",{className:"hc-col-dot"}),n.jsx("span",{className:"hc-col-name",children:e})]}),l&&s.size>0&&n.jsxs("span",{className:"hc-winner-badge",children:[n.jsx(Cr,{size:11})," Best"]})]}),n.jsx("p",{className:"hc-col-formula",children:t}),n.jsxs("div",{className:"hc-metrics",children:[n.jsxs("div",{className:"hc-metric",children:[n.jsx("span",{className:"hc-metric-value",children:s.totalProbes}),n.jsx("span",{className:"hc-metric-label",children:"Total Probes"})]}),n.jsxs("div",{className:"hc-metric",children:[n.jsx("span",{className:"hc-metric-value",children:s.collisions}),n.jsx("span",{className:"hc-metric-label",children:"Collisions"})]}),n.jsxs("div",{className:"hc-metric",children:[n.jsx("span",{className:"hc-metric-value",children:a?s.maxChain:s.maxProbes}),n.jsx("span",{className:"hc-metric-label",children:a?"Max Chain":"Max Probes"})]}),n.jsxs("div",{className:"hc-metric",children:[n.jsx("span",{className:"hc-metric-value",children:`${(u*100).toFixed(0)}%`}),n.jsx("span",{className:"hc-metric-label",children:"Load Factor"})]})]}),n.jsx("div",{className:"hc-load-bar",children:n.jsx("div",{className:"hc-load-fill",style:{width:`${Math.min(u*100,100)}%`,background:u>.7?"#ef4444":u>.5?"#f59e0b":r}})}),n.jsx("div",{className:"hc-slots",children:a?s.table.map((d,h)=>n.jsxs("div",{className:`hc-slot${d.length>0?" filled":" empty"}${c===h?" newly-inserted":""}`,children:[n.jsx("div",{className:"hc-slot-index",children:h}),n.jsx("div",{className:"hc-chain-items",children:d.length===0?n.jsx("span",{className:"hc-empty-label",children:"—"}):d.map((g,b)=>n.jsxs(Ce.Fragment,{children:[b>0&&n.jsx($n,{size:9,className:"hc-chain-sep"}),n.jsx("span",{className:`hc-chain-key${g===i?" hc-new-key":""}`,children:g})]},b))})]},h)):s.table.map((d,h)=>n.jsxs("div",{className:`hc-slot${d?" filled":" empty"}${c===h?" newly-inserted":""}`,children:[n.jsx("div",{className:"hc-slot-index",children:h}),n.jsx("div",{className:"hc-slot-key",children:d?n.jsx("span",{className:d===i?"hc-new-key":"",children:d}):n.jsx("span",{className:"hc-empty-label",children:"—"})})]},h))})]})}function Xb(){const[e,t]=p.useState(()=>$t(Pn)),[r,s]=p.useState(()=>$t(Pn)),[i,a]=p.useState(()=>qa(Pn)),[l,o]=p.useState(null),[c,u]=p.useState(""),[d,h]=p.useState(!1),g=()=>{const v=c.trim();!v||d||(o(v),t(P=>qd(P,v)),s(P=>Hd(P,v)),a(P=>Ud(P,v)),u(""),setTimeout(()=>o(P=>P===v?null:P),1400))},b=async v=>{if(d)return;h(!0);let P=$t(Pn),C=$t(Pn),V=qa(Pn);t(P),s(C),a(V),o(null),await new Promise(L=>setTimeout(L,60));for(const L of v)P=qd(P,L),C=Hd(C,L),V=Ud(V,L),o(L),t(P),s(C),a(V),await new Promise(_=>setTimeout(_,300));o(null),h(!1)},N=()=>{d||(t($t(Pn)),s($t(Pn)),a(qa(Pn)),o(null),u(""))},y=e.size>0,j=y?Math.min(e.totalProbes,r.totalProbes,i.totalProbes):-1,f=y&&e.totalProbes===j,m=y&&r.totalProbes===j,x=y&&i.totalProbes===j,S=[f&&"Linear",m&&"Quadratic",x&&"Chaining"].filter(Boolean).join(" & ");return n.jsxs("div",{className:"ac-section",children:[n.jsx("div",{className:"ac-controls",children:n.jsxs("div",{className:"ac-ctrl-row ac-hash-row",children:[n.jsx("input",{className:"hc-key-input",type:"text",placeholder:"Type a key…",value:c,onChange:v=>u(v.target.value),onKeyDown:v=>v.key==="Enter"&&g(),disabled:d}),n.jsx("button",{className:"btn btn-insert",onClick:g,disabled:!c.trim()||d,children:"Insert into All"}),Qb.map(v=>n.jsxs("button",{className:"btn hc-preset-btn",onClick:()=>b(v.keys),disabled:d,children:[n.jsx(Pe,{size:11})," ",v.label]},v.label)),n.jsxs("button",{className:"btn btn-clear",onClick:N,disabled:d,children:[n.jsx(xn,{size:12})," Reset"]})]})}),y&&n.jsxs("div",{className:"hc-winner-banner",children:[n.jsx(Cr,{size:14}),n.jsxs("span",{children:[n.jsx("strong",{children:S})," used fewest total probes (",j,")"]})]}),l&&n.jsxs("div",{className:"hc-current-key-banner",children:["Inserting ",n.jsxs("strong",{children:['"',l,'"']}),"…"]}),n.jsxs("div",{className:"hc-grid",children:[n.jsx(Ha,{name:"Linear Probing",formula:"h(k,i) = (h₀ + i) % cap",color:"#6366f1",state:e,currentKey:l,isChaining:!1,isWinner:f}),n.jsx(Ha,{name:"Quadratic Probing",formula:"h(k,i) = (h₀ + i²) % cap",color:"#f59e0b",state:r,currentKey:l,isChaining:!1,isWinner:m}),n.jsx(Ha,{name:"Separate Chaining",formula:"slot = h(k), chain append",color:"#10b981",state:i,currentKey:l,isChaining:!0,isWinner:x})]}),n.jsxs("div",{className:"hc-legend",children:[n.jsx("span",{className:"hc-legend-title",children:"Probe count:"}),n.jsx("span",{className:"hc-legend-item",children:"Open addressing — slots examined (min 1)"}),n.jsx("span",{className:"hc-legend-sep",children:"·"}),n.jsx("span",{className:"hc-legend-item",children:"Chaining — chain nodes traversed before append (0 if empty)"})]})]})}function Yb(){const[e,t]=p.useState("sorting");return n.jsxs("div",{className:"container ac-page",children:[n.jsxs("div",{className:"ac-header",children:[n.jsx("h1",{className:"ac-title",children:"Algorithm Comparison"}),n.jsx("p",{className:"ac-subtitle",children:"Run algorithms side-by-side on the same data — watch how they differ in speed, comparisons, and strategy in real time."})]}),n.jsx("div",{className:"ac-tab-bar",children:zb.map(({id:r,label:s,Icon:i})=>n.jsxs("button",{className:`ac-tab-btn${e===r?" active":""}`,onClick:()=>t(r),children:[n.jsx(i,{size:15})," ",s]},r))}),e==="sorting"&&n.jsx(qb,{}),e==="searching"&&n.jsx(Gb,{}),e==="hashing"&&n.jsx(Xb,{})]})}function Ar(e,t){return e.split(/(`[^`\n]+`|\*\*[^*\n]+\*\*|\*[^*\n]+\*)/g).map((s,i)=>{const a=`${t}-i${i}`;return s.startsWith("`")&&s.endsWith("`")&&s.length>2?n.jsx("code",{className:"ai-inline-code",children:s.slice(1,-1)},a):s.startsWith("**")&&s.endsWith("**")&&s.length>4?n.jsx("strong",{children:s.slice(2,-2)},a):s.startsWith("*")&&s.endsWith("*")&&s.length>2?n.jsx("em",{className:"ai-md-em",children:s.slice(1,-1)},a):s||null})}function Jb(e,t){const r=e.split(`
`),s=[];let i=[],a=[],l=null;const o=()=>{const u=i.join(" ").trim();u&&s.push({type:"p",content:u}),i=[]},c=()=>{a.length&&(s.push({type:l,items:[...a]}),a=[],l=null)};for(const u of r){const d=u.trim();if(!d){o(),c();continue}const h=d.match(/^## (.+)$/),g=d.match(/^### (.+)$/),b=d.match(/^[-*+] (.+)$/),N=d.match(/^\d+\. (.+)$/);h||g?(o(),c(),s.push({type:g?"h3":"h2",content:(g||h)[1]})):b?(o(),l&&l!=="ul"&&c(),l="ul",a.push(b[1])):N?(o(),l&&l!=="ol"&&c(),l="ol",a.push(N[1])):(c(),i.push(u))}return o(),c(),s.map((u,d)=>{const h=`${t}-b${d}`;switch(u.type){case"h2":return n.jsx("p",{className:"ai-md-h2",children:Ar(u.content,h)},h);case"h3":return n.jsx("p",{className:"ai-md-h3",children:Ar(u.content,h)},h);case"ul":return n.jsx("ul",{className:"ai-md-ul",children:u.items.map((g,b)=>n.jsx("li",{children:Ar(g,`${h}-li${b}`)},b))},h);case"ol":return n.jsx("ol",{className:"ai-md-ol",children:u.items.map((g,b)=>n.jsx("li",{children:Ar(g,`${h}-li${b}`)},b))},h);case"p":return n.jsx("p",{className:"ai-md-p",children:Ar(u.content,h)},h);default:return null}})}function Zb(e){return e>=8?"var(--success)":e>=6?"var(--warning)":"var(--danger)"}function ek({score:e}){const r=2*Math.PI*28,s=e/10*r,i=Zb(e);return n.jsxs("div",{className:"rr-score-circle",children:[n.jsxs("svg",{width:"72",height:"72",viewBox:"0 0 72 72",children:[n.jsx("circle",{className:"rr-score-circle-bg",cx:"36",cy:"36",r:28}),n.jsx("circle",{className:"rr-score-circle-fill",cx:"36",cy:"36",r:28,stroke:i,strokeDasharray:r,strokeDashoffset:r-s})]}),n.jsxs("span",{className:"rr-score-number",style:{color:i},children:[e,"/10"]})]})}const Ua=2e4,nk=".pdf,.docx,.txt";function tk(){const[e,t]=p.useState(""),[r,s]=p.useState(""),[i,a]=p.useState(!1),[l,o]=p.useState(null),[c,u]=p.useState(""),[d,h]=p.useState(null),[g,b]=p.useState(!1),[N,y]=p.useState(!1),j=p.useRef(null),f=L=>{t(L.target.value),d&&h(null),l&&o(null),c&&u("")},m=async L=>{if(!L)return;const _=L.name.split(".").pop().toLowerCase();if(!["pdf","docx","txt"].includes(_)){u("Unsupported file type. Please upload a PDF, DOCX, or TXT file.");return}b(!0),u(""),o(null);try{const q=new FormData;q.append("file",L);const W=await fetch("/api/resume-upload",{method:"POST",body:q}),O=await W.json();if(!W.ok){u(O.error||"Failed to parse file.");return}t(O.text),h(L.name)}catch{u("Network error. Make sure the server is running.")}finally{b(!1)}},x=L=>m(L.target.files[0]),S=L=>{L.preventDefault(),y(!1),m(L.dataTransfer.files[0])},v=()=>{h(null),t(""),o(null),u(""),j.current&&(j.current.value="")},P=async()=>{if(e.trim()){a(!0),o(null),u("");try{const L=await fetch("/api/resume-review",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({resume:e,targetRole:r})}),_=await L.json();if(!L.ok){u(_.error||"Something went wrong. Please try again.");return}o(_)}catch{u("Network error. Make sure the server is running.")}finally{a(!1)}}},C=e.length,V=C>Ua*.85;return n.jsxs("div",{className:"rr-page",children:[n.jsxs("div",{className:"rr-header",children:[n.jsx("div",{className:"rr-header-icon",children:n.jsx(Br,{size:22})}),n.jsxs("div",{children:[n.jsx("h1",{className:"rr-title",children:"Resume Reviewer"}),n.jsx("p",{className:"rr-subtitle",children:"Get honest, brutally direct feedback from an AI with 15+ years of hiring experience. Paste your resume below and we'll tell you exactly what works, what doesn't, and what to fix."})]})]}),n.jsxs("div",{className:"rr-layout",children:[n.jsxs("div",{className:"rr-input-panel",children:[n.jsxs("div",{children:[n.jsx("div",{className:"rr-panel-label",children:"Your Resume"}),n.jsxs("div",{className:`rr-upload-zone${N?" rr-upload-dragging":""}`,onClick:()=>{var L;return!g&&((L=j.current)==null?void 0:L.click())},onDragOver:L=>{L.preventDefault(),y(!0)},onDragLeave:()=>y(!1),onDrop:S,children:[n.jsx("input",{ref:j,type:"file",accept:nk,style:{display:"none"},onChange:x}),g?n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"rr-spinner rr-spinner-upload"}),n.jsx("span",{children:"Extracting text…"})]}):d?n.jsxs(n.Fragment,{children:[n.jsx(Br,{size:18,className:"rr-upload-icon-success"}),n.jsx("span",{className:"rr-upload-filename",children:d}),n.jsx("button",{className:"rr-upload-clear",onClick:L=>{L.stopPropagation(),v()},title:"Remove file",children:n.jsx(na,{size:14})})]}):n.jsxs(n.Fragment,{children:[n.jsx(Ux,{size:18}),n.jsxs("span",{children:[n.jsx("strong",{children:"Upload resume"})," or drag & drop"]}),n.jsx("span",{className:"rr-upload-hint",children:"PDF, DOCX, or TXT"})]})]}),n.jsx("div",{className:"rr-divider",children:n.jsx("span",{children:"or paste text below"})}),n.jsx("textarea",{className:"rr-textarea",placeholder:`Paste your resume text here...

Tip: Copy-paste from your PDF or Word document. Include all sections: contact info, summary, experience, education, skills, projects.`,value:e,onChange:f,maxLength:Ua,spellCheck:!1})]}),n.jsxs("div",{className:"rr-role-row",children:[n.jsx("div",{className:"rr-panel-label",children:"Target Role (optional)"}),n.jsx("input",{type:"text",className:"rr-role-input",placeholder:"e.g. Backend Software Engineer, ML Intern, Frontend Developer",value:r,onChange:L=>s(L.target.value)})]}),n.jsxs("div",{className:`rr-char-count ${V?"rr-char-warn":""}`,children:[C.toLocaleString()," / ",Ua.toLocaleString()," characters"]}),n.jsx("button",{className:"rr-submit-btn",onClick:P,disabled:i||!e.trim(),children:i?n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"rr-spinner"}),"Analyzing..."]}):n.jsxs(n.Fragment,{children:[n.jsx(Br,{size:16}),"Review My Resume"]})})]}),n.jsxs("div",{className:"rr-results-panel",children:[c&&n.jsxs("div",{className:"rr-error",children:[n.jsx(yx,{size:16}),c]}),!l&&!c&&n.jsxs("div",{className:"rr-empty",children:[n.jsx("div",{className:"rr-empty-icon",children:n.jsx(Br,{size:48})}),n.jsxs("p",{children:["Paste your resume on the left and click ",n.jsx("strong",{children:"Review My Resume"}),".",n.jsx("br",{}),"You'll get an honest score, specific strengths, improvements, and detailed feedback."]})]}),l&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"rr-score-card",children:[n.jsx(ek,{score:l.overall_score}),n.jsxs("div",{className:"rr-score-info",children:[n.jsx("div",{className:"rr-score-label",children:"Overall Score"}),n.jsx("p",{className:"rr-score-summary",children:l.summary})]})]}),n.jsxs("div",{className:"rr-cards-row",children:[n.jsxs("div",{className:"rr-card rr-card-green",children:[n.jsxs("div",{className:"rr-card-header",children:[n.jsx(zn,{size:14}),n.jsx("span",{className:"rr-card-title",children:"Strengths"})]}),n.jsx("ul",{children:l.strengths.map((L,_)=>n.jsx("li",{children:L},_))})]}),n.jsxs("div",{className:"rr-card rr-card-amber",children:[n.jsxs("div",{className:"rr-card-header",children:[n.jsx(Tn,{size:14}),n.jsx("span",{className:"rr-card-title",children:"Improvements"})]}),n.jsx("ul",{children:l.improvements.map((L,_)=>n.jsx("li",{children:L},_))})]}),l.missing_sections&&l.missing_sections.length>0&&n.jsxs("div",{className:"rr-card rr-card-red rr-card-full",children:[n.jsxs("div",{className:"rr-card-header",children:[n.jsx(ci,{size:14}),n.jsx("span",{className:"rr-card-title",children:"Missing / Weak Sections"})]}),n.jsx("ul",{children:l.missing_sections.map((L,_)=>n.jsx("li",{children:L},_))})]})]}),n.jsxs("div",{className:"rr-feedback-box",children:[n.jsxs("div",{className:"rr-feedback-header",children:[n.jsx(ve,{size:16}),n.jsx("span",{className:"rr-feedback-title",children:"Detailed Feedback"})]}),n.jsx("div",{className:"rr-feedback-content",children:Jb(l.actionable_feedback,"feedback")})]})]})]})]})]})}function rk(){return n.jsxs("div",{className:"homepage-body",children:[n.jsx(Wx,{}),n.jsxs("main",{className:"main-content",children:[n.jsxs(ax,{children:[n.jsx(ie,{path:"/",element:n.jsx(uv,{})}),n.jsx(ie,{path:"/algorithms",element:n.jsx(hv,{})}),n.jsx(ie,{path:"/contact",element:n.jsx(pv,{})}),n.jsx(ie,{path:"/contributions",element:n.jsx(fv,{})}),n.jsx(ie,{path:"/stack",element:n.jsx(Ty,{})}),n.jsx(ie,{path:"/queue",element:n.jsx(_y,{})}),n.jsx(ie,{path:"/linkedlist",element:n.jsx(Ly,{})}),n.jsx(ie,{path:"/skiplist",element:n.jsx(Ey,{})}),n.jsx(ie,{path:"/hashtable_linear",element:n.jsx(Oy,{})}),n.jsx(ie,{path:"/hashtable_quadratic",element:n.jsx($y,{})}),n.jsx(ie,{path:"/hashtable_chaining",element:n.jsx(Dy,{})}),n.jsx(ie,{path:"/binarytree",element:n.jsx(Gy,{})}),n.jsx(ie,{path:"/bst",element:n.jsx(L0,{})}),n.jsx(ie,{path:"/avl",element:n.jsx(z0,{})}),n.jsx(ie,{path:"/splay",element:n.jsx(D0,{})}),n.jsx(ie,{path:"/treap",element:n.jsx(W0,{})}),n.jsx(ie,{path:"/minheap",element:n.jsx(Y0,{})}),n.jsx(ie,{path:"/maxheap",element:n.jsx(nN,{})}),n.jsx(ie,{path:"/adjacency-list",element:n.jsx(tN,{})}),n.jsx(ie,{path:"/adjacency-matrix",element:n.jsx(rN,{})}),n.jsx(ie,{path:"/bfs",element:n.jsx(lN,{})}),n.jsx(ie,{path:"/dfs",element:n.jsx(oN,{})}),n.jsx(ie,{path:"/dijkstra",element:n.jsx(cN,{})}),n.jsx(ie,{path:"/bellman-ford",element:n.jsx(hN,{})}),n.jsx(ie,{path:"/prim-mst",element:n.jsx(dN,{})}),n.jsx(ie,{path:"/kruskal-mst",element:n.jsx(pN,{})}),n.jsx(ie,{path:"/topological-sort",element:n.jsx(uN,{})}),n.jsx(ie,{path:"/practice",element:n.jsx(Ad,{})}),n.jsx(ie,{path:"/practice/:problemId",element:n.jsx(Ad,{})}),n.jsx(ie,{path:"/sandbox",element:n.jsx(Rb,{})}),n.jsx(ie,{path:"/compare-hash",element:n.jsx(Ib,{})}),n.jsx(ie,{path:"/compare",element:n.jsx(Yb,{})}),n.jsx(ie,{path:"/resume-reviewer",element:n.jsx(tk,{})})]}),n.jsx(Gx,{})]})]})}Ka.createRoot(document.getElementById("root")).render(n.jsx(Ce.StrictMode,{children:n.jsx(px,{children:n.jsx(rk,{})})}));
