function md(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const i=Object.getOwnPropertyDescriptor(r,l);i&&Object.defineProperty(e,l,i.get?i:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=t(l);fetch(l.href,i)}})();function vd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Bo={exports:{}},zl={},qo={exports:{}},A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xr=Symbol.for("react.element"),yd=Symbol.for("react.portal"),gd=Symbol.for("react.fragment"),xd=Symbol.for("react.strict_mode"),kd=Symbol.for("react.profiler"),wd=Symbol.for("react.provider"),jd=Symbol.for("react.context"),Nd=Symbol.for("react.forward_ref"),Sd=Symbol.for("react.suspense"),Ed=Symbol.for("react.memo"),Td=Symbol.for("react.lazy"),Na=Symbol.iterator;function Cd(e){return e===null||typeof e!="object"?null:(e=Na&&e[Na]||e["@@iterator"],typeof e=="function"?e:null)}var Wo={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qo=Object.assign,Ko={};function Tt(e,n,t){this.props=e,this.context=n,this.refs=Ko,this.updater=t||Wo}Tt.prototype.isReactComponent={};Tt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Tt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Go(){}Go.prototype=Tt.prototype;function js(e,n,t){this.props=e,this.context=n,this.refs=Ko,this.updater=t||Wo}var Ns=js.prototype=new Go;Ns.constructor=js;Qo(Ns,Tt.prototype);Ns.isPureReactComponent=!0;var Sa=Array.isArray,Xo=Object.prototype.hasOwnProperty,Ss={current:null},Yo={key:!0,ref:!0,__self:!0,__source:!0};function Zo(e,n,t){var r,l={},i=null,a=null;if(n!=null)for(r in n.ref!==void 0&&(a=n.ref),n.key!==void 0&&(i=""+n.key),n)Xo.call(n,r)&&!Yo.hasOwnProperty(r)&&(l[r]=n[r]);var u=arguments.length-2;if(u===1)l.children=t;else if(1<u){for(var o=Array(u),c=0;c<u;c++)o[c]=arguments[c+2];l.children=o}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)l[r]===void 0&&(l[r]=u[r]);return{$$typeof:xr,type:e,key:i,ref:a,props:l,_owner:Ss.current}}function _d(e,n){return{$$typeof:xr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Es(e){return typeof e=="object"&&e!==null&&e.$$typeof===xr}function zd(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Ea=/\/+/g;function Ql(e,n){return typeof e=="object"&&e!==null&&e.key!=null?zd(""+e.key):n.toString(36)}function qr(e,n,t,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case xr:case yd:a=!0}}if(a)return a=e,l=l(a),e=r===""?"."+Ql(a,0):r,Sa(l)?(t="",e!=null&&(t=e.replace(Ea,"$&/")+"/"),qr(l,n,t,"",function(c){return c})):l!=null&&(Es(l)&&(l=_d(l,t+(!l.key||a&&a.key===l.key?"":(""+l.key).replace(Ea,"$&/")+"/")+e)),n.push(l)),1;if(a=0,r=r===""?".":r+":",Sa(e))for(var u=0;u<e.length;u++){i=e[u];var o=r+Ql(i,u);a+=qr(i,n,t,o,l)}else if(o=Cd(e),typeof o=="function")for(e=o.call(e),u=0;!(i=e.next()).done;)i=i.value,o=r+Ql(i,u++),a+=qr(i,n,t,o,l);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function _r(e,n,t){if(e==null)return e;var r=[],l=0;return qr(e,r,"","",function(i){return n.call(t,i,l++)}),r}function Ld(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ve={current:null},Wr={transition:null},Pd={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:Wr,ReactCurrentOwner:Ss};function Jo(){throw Error("act(...) is not supported in production builds of React.")}A.Children={map:_r,forEach:function(e,n,t){_r(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return _r(e,function(){n++}),n},toArray:function(e){return _r(e,function(n){return n})||[]},only:function(e){if(!Es(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};A.Component=Tt;A.Fragment=gd;A.Profiler=kd;A.PureComponent=js;A.StrictMode=xd;A.Suspense=Sd;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pd;A.act=Jo;A.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Qo({},e.props),l=e.key,i=e.ref,a=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,a=Ss.current),n.key!==void 0&&(l=""+n.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(o in n)Xo.call(n,o)&&!Yo.hasOwnProperty(o)&&(r[o]=n[o]===void 0&&u!==void 0?u[o]:n[o])}var o=arguments.length-2;if(o===1)r.children=t;else if(1<o){u=Array(o);for(var c=0;c<o;c++)u[c]=arguments[c+2];r.children=u}return{$$typeof:xr,type:e.type,key:l,ref:i,props:r,_owner:a}};A.createContext=function(e){return e={$$typeof:jd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:wd,_context:e},e.Consumer=e};A.createElement=Zo;A.createFactory=function(e){var n=Zo.bind(null,e);return n.type=e,n};A.createRef=function(){return{current:null}};A.forwardRef=function(e){return{$$typeof:Nd,render:e}};A.isValidElement=Es;A.lazy=function(e){return{$$typeof:Td,_payload:{_status:-1,_result:e},_init:Ld}};A.memo=function(e,n){return{$$typeof:Ed,type:e,compare:n===void 0?null:n}};A.startTransition=function(e){var n=Wr.transition;Wr.transition={};try{e()}finally{Wr.transition=n}};A.unstable_act=Jo;A.useCallback=function(e,n){return ve.current.useCallback(e,n)};A.useContext=function(e){return ve.current.useContext(e)};A.useDebugValue=function(){};A.useDeferredValue=function(e){return ve.current.useDeferredValue(e)};A.useEffect=function(e,n){return ve.current.useEffect(e,n)};A.useId=function(){return ve.current.useId()};A.useImperativeHandle=function(e,n,t){return ve.current.useImperativeHandle(e,n,t)};A.useInsertionEffect=function(e,n){return ve.current.useInsertionEffect(e,n)};A.useLayoutEffect=function(e,n){return ve.current.useLayoutEffect(e,n)};A.useMemo=function(e,n){return ve.current.useMemo(e,n)};A.useReducer=function(e,n,t){return ve.current.useReducer(e,n,t)};A.useRef=function(e){return ve.current.useRef(e)};A.useState=function(e){return ve.current.useState(e)};A.useSyncExternalStore=function(e,n,t){return ve.current.useSyncExternalStore(e,n,t)};A.useTransition=function(){return ve.current.useTransition()};A.version="18.3.1";qo.exports=A;var y=qo.exports;const Ts=vd(y),Id=md({__proto__:null,default:Ts},[y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Od=y,Rd=Symbol.for("react.element"),Md=Symbol.for("react.fragment"),Dd=Object.prototype.hasOwnProperty,bd=Od.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Fd={key:!0,ref:!0,__self:!0,__source:!0};function eu(e,n,t){var r,l={},i=null,a=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(a=n.ref);for(r in n)Dd.call(n,r)&&!Fd.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)l[r]===void 0&&(l[r]=n[r]);return{$$typeof:Rd,type:e,key:i,ref:a,props:l,_owner:bd.current}}zl.Fragment=Md;zl.jsx=eu;zl.jsxs=eu;Bo.exports=zl;var s=Bo.exports,ji={},nu={exports:{}},ze={},tu={exports:{}},ru={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(E,j){var z=E.length;E.push(j);e:for(;0<z;){var R=z-1>>>1,b=E[R];if(0<l(b,j))E[R]=j,E[z]=b,z=R;else break e}}function t(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var j=E[0],z=E.pop();if(z!==j){E[0]=z;e:for(var R=0,b=E.length,$=b>>>1;R<$;){var On=2*(R+1)-1,Wl=E[On],Rn=On+1,Cr=E[Rn];if(0>l(Wl,z))Rn<b&&0>l(Cr,Wl)?(E[R]=Cr,E[Rn]=z,R=Rn):(E[R]=Wl,E[On]=z,R=On);else if(Rn<b&&0>l(Cr,z))E[R]=Cr,E[Rn]=z,R=Rn;else break e}}return j}function l(E,j){var z=E.sortIndex-j.sortIndex;return z!==0?z:E.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,u=a.now();e.unstable_now=function(){return a.now()-u}}var o=[],c=[],h=1,p=null,m=3,x=!1,k=!1,w=!1,g=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(E){for(var j=t(c);j!==null;){if(j.callback===null)r(c);else if(j.startTime<=E)r(c),j.sortIndex=j.expirationTime,n(o,j);else break;j=t(c)}}function N(E){if(w=!1,v(E),!k)if(t(o)!==null)k=!0,H(C);else{var j=t(c);j!==null&&_(N,j.startTime-E)}}function C(E,j){k=!1,w&&(w=!1,d(P),P=-1),x=!0;var z=m;try{for(v(j),p=t(o);p!==null&&(!(p.expirationTime>j)||E&&!D());){var R=p.callback;if(typeof R=="function"){p.callback=null,m=p.priorityLevel;var b=R(p.expirationTime<=j);j=e.unstable_now(),typeof b=="function"?p.callback=b:p===t(o)&&r(o),v(j)}else r(o);p=t(o)}if(p!==null)var $=!0;else{var On=t(c);On!==null&&_(N,On.startTime-j),$=!1}return $}finally{p=null,m=z,x=!1}}var I=!1,L=null,P=-1,M=5,S=-1;function D(){return!(e.unstable_now()-S<M)}function ge(){if(L!==null){var E=e.unstable_now();S=E;var j=!0;try{j=L(!0,E)}finally{j?xe():(I=!1,L=null)}}else I=!1}var xe;if(typeof f=="function")xe=function(){f(ge)};else if(typeof MessageChannel<"u"){var We=new MessageChannel,B=We.port2;We.port1.onmessage=ge,xe=function(){B.postMessage(null)}}else xe=function(){g(ge,0)};function H(E){L=E,I||(I=!0,xe())}function _(E,j){P=g(function(){E(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){k||x||(k=!0,H(C))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return t(o)},e.unstable_next=function(E){switch(m){case 1:case 2:case 3:var j=3;break;default:j=m}var z=m;m=j;try{return E()}finally{m=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,j){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var z=m;m=E;try{return j()}finally{m=z}},e.unstable_scheduleCallback=function(E,j,z){var R=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?R+z:R):z=R,E){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=z+b,E={id:h++,callback:j,priorityLevel:E,startTime:z,expirationTime:b,sortIndex:-1},z>R?(E.sortIndex=z,n(c,E),t(o)===null&&E===t(c)&&(w?(d(P),P=-1):w=!0,_(N,z-R))):(E.sortIndex=b,n(o,E),k||x||(k=!0,H(C))),E},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(E){var j=m;return function(){var z=m;m=j;try{return E.apply(this,arguments)}finally{m=z}}}})(ru);tu.exports=ru;var Ad=tu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ud=y,_e=Ad;function T(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var lu=new Set,er={};function Qn(e,n){gt(e,n),gt(e+"Capture",n)}function gt(e,n){for(er[e]=n,e=0;e<n.length;e++)lu.add(n[e])}var ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ni=Object.prototype.hasOwnProperty,Vd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ta={},Ca={};function Hd(e){return Ni.call(Ca,e)?!0:Ni.call(Ta,e)?!1:Vd.test(e)?Ca[e]=!0:(Ta[e]=!0,!1)}function $d(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Bd(e,n,t,r){if(n===null||typeof n>"u"||$d(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ye(e,n,t,r,l,i,a){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=a}var ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ue[e]=new ye(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ue[n]=new ye(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ue[e]=new ye(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ue[e]=new ye(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ue[e]=new ye(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ue[e]=new ye(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ue[e]=new ye(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ue[e]=new ye(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ue[e]=new ye(e,5,!1,e.toLowerCase(),null,!1,!1)});var Cs=/[\-:]([a-z])/g;function _s(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Cs,_s);ue[n]=new ye(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Cs,_s);ue[n]=new ye(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Cs,_s);ue[n]=new ye(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ue[e]=new ye(e,1,!1,e.toLowerCase(),null,!1,!1)});ue.xlinkHref=new ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ue[e]=new ye(e,1,!1,e.toLowerCase(),null,!0,!0)});function zs(e,n,t,r){var l=ue.hasOwnProperty(n)?ue[n]:null;(l!==null?l.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Bd(n,t,l,r)&&(t=null),r||l===null?Hd(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):l.mustUseProperty?e[l.propertyName]=t===null?l.type===3?!1:"":t:(n=l.attributeName,r=l.attributeNamespace,t===null?e.removeAttribute(n):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var un=Ud.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,zr=Symbol.for("react.element"),Jn=Symbol.for("react.portal"),et=Symbol.for("react.fragment"),Ls=Symbol.for("react.strict_mode"),Si=Symbol.for("react.profiler"),iu=Symbol.for("react.provider"),su=Symbol.for("react.context"),Ps=Symbol.for("react.forward_ref"),Ei=Symbol.for("react.suspense"),Ti=Symbol.for("react.suspense_list"),Is=Symbol.for("react.memo"),dn=Symbol.for("react.lazy"),au=Symbol.for("react.offscreen"),_a=Symbol.iterator;function Ot(e){return e===null||typeof e!="object"?null:(e=_a&&e[_a]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,Kl;function Vt(e){if(Kl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Kl=n&&n[1]||""}return`
`+Kl+e}var Gl=!1;function Xl(e,n){if(!e||Gl)return"";Gl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var r=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){r=c}e.call(n.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),i=r.stack.split(`
`),a=l.length-1,u=i.length-1;1<=a&&0<=u&&l[a]!==i[u];)u--;for(;1<=a&&0<=u;a--,u--)if(l[a]!==i[u]){if(a!==1||u!==1)do if(a--,u--,0>u||l[a]!==i[u]){var o=`
`+l[a].replace(" at new "," at ");return e.displayName&&o.includes("<anonymous>")&&(o=o.replace("<anonymous>",e.displayName)),o}while(1<=a&&0<=u);break}}}finally{Gl=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Vt(e):""}function qd(e){switch(e.tag){case 5:return Vt(e.type);case 16:return Vt("Lazy");case 13:return Vt("Suspense");case 19:return Vt("SuspenseList");case 0:case 2:case 15:return e=Xl(e.type,!1),e;case 11:return e=Xl(e.type.render,!1),e;case 1:return e=Xl(e.type,!0),e;default:return""}}function Ci(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case et:return"Fragment";case Jn:return"Portal";case Si:return"Profiler";case Ls:return"StrictMode";case Ei:return"Suspense";case Ti:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case su:return(e.displayName||"Context")+".Consumer";case iu:return(e._context.displayName||"Context")+".Provider";case Ps:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Is:return n=e.displayName||null,n!==null?n:Ci(e.type)||"Memo";case dn:n=e._payload,e=e._init;try{return Ci(e(n))}catch{}}return null}function Wd(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ci(n);case 8:return n===Ls?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Cn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ou(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qd(e){var n=ou(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Lr(e){e._valueTracker||(e._valueTracker=Qd(e))}function uu(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=ou(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function rl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function _i(e,n){var t=n.checked;return Y({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function za(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Cn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function cu(e,n){n=n.checked,n!=null&&zs(e,"checked",n,!1)}function zi(e,n){cu(e,n);var t=Cn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Li(e,n.type,t):n.hasOwnProperty("defaultValue")&&Li(e,n.type,Cn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function La(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Li(e,n,t){(n!=="number"||rl(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Ht=Array.isArray;function ft(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Cn(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function Pi(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(T(91));return Y({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Pa(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(T(92));if(Ht(t)){if(1<t.length)throw Error(T(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Cn(t)}}function du(e,n){var t=Cn(n.value),r=Cn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Ia(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function fu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ii(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?fu(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Pr,hu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,l){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,l)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Pr=Pr||document.createElement("div"),Pr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Pr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function nr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var qt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Kd=["Webkit","ms","Moz","O"];Object.keys(qt).forEach(function(e){Kd.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),qt[n]=qt[e]})});function pu(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||qt.hasOwnProperty(e)&&qt[e]?(""+n).trim():n+"px"}function mu(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,l=pu(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,l):e[t]=l}}var Gd=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Oi(e,n){if(n){if(Gd[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(T(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(T(61))}if(n.style!=null&&typeof n.style!="object")throw Error(T(62))}}function Ri(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mi=null;function Os(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Di=null,ht=null,pt=null;function Oa(e){if(e=jr(e)){if(typeof Di!="function")throw Error(T(280));var n=e.stateNode;n&&(n=Rl(n),Di(e.stateNode,e.type,n))}}function vu(e){ht?pt?pt.push(e):pt=[e]:ht=e}function yu(){if(ht){var e=ht,n=pt;if(pt=ht=null,Oa(e),n)for(e=0;e<n.length;e++)Oa(n[e])}}function gu(e,n){return e(n)}function xu(){}var Yl=!1;function ku(e,n,t){if(Yl)return e(n,t);Yl=!0;try{return gu(e,n,t)}finally{Yl=!1,(ht!==null||pt!==null)&&(xu(),yu())}}function tr(e,n){var t=e.stateNode;if(t===null)return null;var r=Rl(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(T(231,n,typeof t));return t}var bi=!1;if(ln)try{var Rt={};Object.defineProperty(Rt,"passive",{get:function(){bi=!0}}),window.addEventListener("test",Rt,Rt),window.removeEventListener("test",Rt,Rt)}catch{bi=!1}function Xd(e,n,t,r,l,i,a,u,o){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(h){this.onError(h)}}var Wt=!1,ll=null,il=!1,Fi=null,Yd={onError:function(e){Wt=!0,ll=e}};function Zd(e,n,t,r,l,i,a,u,o){Wt=!1,ll=null,Xd.apply(Yd,arguments)}function Jd(e,n,t,r,l,i,a,u,o){if(Zd.apply(this,arguments),Wt){if(Wt){var c=ll;Wt=!1,ll=null}else throw Error(T(198));il||(il=!0,Fi=c)}}function Kn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function wu(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Ra(e){if(Kn(e)!==e)throw Error(T(188))}function ef(e){var n=e.alternate;if(!n){if(n=Kn(e),n===null)throw Error(T(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===t)return Ra(l),e;if(i===r)return Ra(l),n;i=i.sibling}throw Error(T(188))}if(t.return!==r.return)t=l,r=i;else{for(var a=!1,u=l.child;u;){if(u===t){a=!0,t=l,r=i;break}if(u===r){a=!0,r=l,t=i;break}u=u.sibling}if(!a){for(u=i.child;u;){if(u===t){a=!0,t=i,r=l;break}if(u===r){a=!0,r=i,t=l;break}u=u.sibling}if(!a)throw Error(T(189))}}if(t.alternate!==r)throw Error(T(190))}if(t.tag!==3)throw Error(T(188));return t.stateNode.current===t?e:n}function ju(e){return e=ef(e),e!==null?Nu(e):null}function Nu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Nu(e);if(n!==null)return n;e=e.sibling}return null}var Su=_e.unstable_scheduleCallback,Ma=_e.unstable_cancelCallback,nf=_e.unstable_shouldYield,tf=_e.unstable_requestPaint,J=_e.unstable_now,rf=_e.unstable_getCurrentPriorityLevel,Rs=_e.unstable_ImmediatePriority,Eu=_e.unstable_UserBlockingPriority,sl=_e.unstable_NormalPriority,lf=_e.unstable_LowPriority,Tu=_e.unstable_IdlePriority,Ll=null,Xe=null;function sf(e){if(Xe&&typeof Xe.onCommitFiberRoot=="function")try{Xe.onCommitFiberRoot(Ll,e,void 0,(e.current.flags&128)===128)}catch{}}var $e=Math.clz32?Math.clz32:uf,af=Math.log,of=Math.LN2;function uf(e){return e>>>=0,e===0?32:31-(af(e)/of|0)|0}var Ir=64,Or=4194304;function $t(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function al(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,a=t&268435455;if(a!==0){var u=a&~l;u!==0?r=$t(u):(i&=a,i!==0&&(r=$t(i)))}else a=t&~l,a!==0?r=$t(a):i!==0&&(r=$t(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&l)&&(l=r&-r,i=n&-n,l>=i||l===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-$e(n),l=1<<t,r|=e[t],n&=~l;return r}function cf(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function df(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-$e(i),u=1<<a,o=l[a];o===-1?(!(u&t)||u&r)&&(l[a]=cf(u,n)):o<=n&&(e.expiredLanes|=u),i&=~u}}function Ai(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Cu(){var e=Ir;return Ir<<=1,!(Ir&4194240)&&(Ir=64),e}function Zl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function kr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-$e(n),e[n]=t}function ff(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var l=31-$e(t),i=1<<l;n[l]=0,r[l]=-1,e[l]=-1,t&=~i}}function Ms(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-$e(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}var V=0;function _u(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var zu,Ds,Lu,Pu,Iu,Ui=!1,Rr=[],gn=null,xn=null,kn=null,rr=new Map,lr=new Map,hn=[],hf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Da(e,n){switch(e){case"focusin":case"focusout":gn=null;break;case"dragenter":case"dragleave":xn=null;break;case"mouseover":case"mouseout":kn=null;break;case"pointerover":case"pointerout":rr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":lr.delete(n.pointerId)}}function Mt(e,n,t,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},n!==null&&(n=jr(n),n!==null&&Ds(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function pf(e,n,t,r,l){switch(n){case"focusin":return gn=Mt(gn,e,n,t,r,l),!0;case"dragenter":return xn=Mt(xn,e,n,t,r,l),!0;case"mouseover":return kn=Mt(kn,e,n,t,r,l),!0;case"pointerover":var i=l.pointerId;return rr.set(i,Mt(rr.get(i)||null,e,n,t,r,l)),!0;case"gotpointercapture":return i=l.pointerId,lr.set(i,Mt(lr.get(i)||null,e,n,t,r,l)),!0}return!1}function Ou(e){var n=bn(e.target);if(n!==null){var t=Kn(n);if(t!==null){if(n=t.tag,n===13){if(n=wu(t),n!==null){e.blockedOn=n,Iu(e.priority,function(){Lu(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Vi(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Mi=r,t.target.dispatchEvent(r),Mi=null}else return n=jr(t),n!==null&&Ds(n),e.blockedOn=t,!1;n.shift()}return!0}function ba(e,n,t){Qr(e)&&t.delete(n)}function mf(){Ui=!1,gn!==null&&Qr(gn)&&(gn=null),xn!==null&&Qr(xn)&&(xn=null),kn!==null&&Qr(kn)&&(kn=null),rr.forEach(ba),lr.forEach(ba)}function Dt(e,n){e.blockedOn===n&&(e.blockedOn=null,Ui||(Ui=!0,_e.unstable_scheduleCallback(_e.unstable_NormalPriority,mf)))}function ir(e){function n(l){return Dt(l,e)}if(0<Rr.length){Dt(Rr[0],e);for(var t=1;t<Rr.length;t++){var r=Rr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(gn!==null&&Dt(gn,e),xn!==null&&Dt(xn,e),kn!==null&&Dt(kn,e),rr.forEach(n),lr.forEach(n),t=0;t<hn.length;t++)r=hn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<hn.length&&(t=hn[0],t.blockedOn===null);)Ou(t),t.blockedOn===null&&hn.shift()}var mt=un.ReactCurrentBatchConfig,ol=!0;function vf(e,n,t,r){var l=V,i=mt.transition;mt.transition=null;try{V=1,bs(e,n,t,r)}finally{V=l,mt.transition=i}}function yf(e,n,t,r){var l=V,i=mt.transition;mt.transition=null;try{V=4,bs(e,n,t,r)}finally{V=l,mt.transition=i}}function bs(e,n,t,r){if(ol){var l=Vi(e,n,t,r);if(l===null)oi(e,n,r,ul,t),Da(e,r);else if(pf(l,e,n,t,r))r.stopPropagation();else if(Da(e,r),n&4&&-1<hf.indexOf(e)){for(;l!==null;){var i=jr(l);if(i!==null&&zu(i),i=Vi(e,n,t,r),i===null&&oi(e,n,r,ul,t),i===l)break;l=i}l!==null&&r.stopPropagation()}else oi(e,n,r,null,t)}}var ul=null;function Vi(e,n,t,r){if(ul=null,e=Os(r),e=bn(e),e!==null)if(n=Kn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=wu(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return ul=e,null}function Ru(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(rf()){case Rs:return 1;case Eu:return 4;case sl:case lf:return 16;case Tu:return 536870912;default:return 16}default:return 16}}var mn=null,Fs=null,Kr=null;function Mu(){if(Kr)return Kr;var e,n=Fs,t=n.length,r,l="value"in mn?mn.value:mn.textContent,i=l.length;for(e=0;e<t&&n[e]===l[e];e++);var a=t-e;for(r=1;r<=a&&n[t-r]===l[i-r];r++);return Kr=l.slice(e,1<r?1-r:void 0)}function Gr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Mr(){return!0}function Fa(){return!1}function Le(e){function n(t,r,l,i,a){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Mr:Fa,this.isPropagationStopped=Fa,this}return Y(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Mr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Mr)},persist:function(){},isPersistent:Mr}),n}var Ct={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},As=Le(Ct),wr=Y({},Ct,{view:0,detail:0}),gf=Le(wr),Jl,ei,bt,Pl=Y({},wr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Us,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==bt&&(bt&&e.type==="mousemove"?(Jl=e.screenX-bt.screenX,ei=e.screenY-bt.screenY):ei=Jl=0,bt=e),Jl)},movementY:function(e){return"movementY"in e?e.movementY:ei}}),Aa=Le(Pl),xf=Y({},Pl,{dataTransfer:0}),kf=Le(xf),wf=Y({},wr,{relatedTarget:0}),ni=Le(wf),jf=Y({},Ct,{animationName:0,elapsedTime:0,pseudoElement:0}),Nf=Le(jf),Sf=Y({},Ct,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ef=Le(Sf),Tf=Y({},Ct,{data:0}),Ua=Le(Tf),Cf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_f={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lf(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=zf[e])?!!n[e]:!1}function Us(){return Lf}var Pf=Y({},wr,{key:function(e){if(e.key){var n=Cf[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Gr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_f[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Us,charCode:function(e){return e.type==="keypress"?Gr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Gr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),If=Le(Pf),Of=Y({},Pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Va=Le(Of),Rf=Y({},wr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Us}),Mf=Le(Rf),Df=Y({},Ct,{propertyName:0,elapsedTime:0,pseudoElement:0}),bf=Le(Df),Ff=Y({},Pl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Af=Le(Ff),Uf=[9,13,27,32],Vs=ln&&"CompositionEvent"in window,Qt=null;ln&&"documentMode"in document&&(Qt=document.documentMode);var Vf=ln&&"TextEvent"in window&&!Qt,Du=ln&&(!Vs||Qt&&8<Qt&&11>=Qt),Ha=" ",$a=!1;function bu(e,n){switch(e){case"keyup":return Uf.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var nt=!1;function Hf(e,n){switch(e){case"compositionend":return Fu(n);case"keypress":return n.which!==32?null:($a=!0,Ha);case"textInput":return e=n.data,e===Ha&&$a?null:e;default:return null}}function $f(e,n){if(nt)return e==="compositionend"||!Vs&&bu(e,n)?(e=Mu(),Kr=Fs=mn=null,nt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Du&&n.locale!=="ko"?null:n.data;default:return null}}var Bf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ba(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Bf[e.type]:n==="textarea"}function Au(e,n,t,r){vu(r),n=cl(n,"onChange"),0<n.length&&(t=new As("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Kt=null,sr=null;function qf(e){Xu(e,0)}function Il(e){var n=lt(e);if(uu(n))return e}function Wf(e,n){if(e==="change")return n}var Uu=!1;if(ln){var ti;if(ln){var ri="oninput"in document;if(!ri){var qa=document.createElement("div");qa.setAttribute("oninput","return;"),ri=typeof qa.oninput=="function"}ti=ri}else ti=!1;Uu=ti&&(!document.documentMode||9<document.documentMode)}function Wa(){Kt&&(Kt.detachEvent("onpropertychange",Vu),sr=Kt=null)}function Vu(e){if(e.propertyName==="value"&&Il(sr)){var n=[];Au(n,sr,e,Os(e)),ku(qf,n)}}function Qf(e,n,t){e==="focusin"?(Wa(),Kt=n,sr=t,Kt.attachEvent("onpropertychange",Vu)):e==="focusout"&&Wa()}function Kf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Il(sr)}function Gf(e,n){if(e==="click")return Il(n)}function Xf(e,n){if(e==="input"||e==="change")return Il(n)}function Yf(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var qe=typeof Object.is=="function"?Object.is:Yf;function ar(e,n){if(qe(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!Ni.call(n,l)||!qe(e[l],n[l]))return!1}return!0}function Qa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ka(e,n){var t=Qa(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Qa(t)}}function Hu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Hu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function $u(){for(var e=window,n=rl();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=rl(e.document)}return n}function Hs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Zf(e){var n=$u(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Hu(t.ownerDocument.documentElement,t)){if(r!==null&&Hs(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var l=t.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=Ka(t,i);var a=Ka(t,r);l&&a&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(n=n.createRange(),n.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(a.node,a.offset)):(n.setEnd(a.node,a.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Jf=ln&&"documentMode"in document&&11>=document.documentMode,tt=null,Hi=null,Gt=null,$i=!1;function Ga(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;$i||tt==null||tt!==rl(r)||(r=tt,"selectionStart"in r&&Hs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gt&&ar(Gt,r)||(Gt=r,r=cl(Hi,"onSelect"),0<r.length&&(n=new As("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=tt)))}function Dr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var rt={animationend:Dr("Animation","AnimationEnd"),animationiteration:Dr("Animation","AnimationIteration"),animationstart:Dr("Animation","AnimationStart"),transitionend:Dr("Transition","TransitionEnd")},li={},Bu={};ln&&(Bu=document.createElement("div").style,"AnimationEvent"in window||(delete rt.animationend.animation,delete rt.animationiteration.animation,delete rt.animationstart.animation),"TransitionEvent"in window||delete rt.transitionend.transition);function Ol(e){if(li[e])return li[e];if(!rt[e])return e;var n=rt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Bu)return li[e]=n[t];return e}var qu=Ol("animationend"),Wu=Ol("animationiteration"),Qu=Ol("animationstart"),Ku=Ol("transitionend"),Gu=new Map,Xa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ln(e,n){Gu.set(e,n),Qn(n,[e])}for(var ii=0;ii<Xa.length;ii++){var si=Xa[ii],eh=si.toLowerCase(),nh=si[0].toUpperCase()+si.slice(1);Ln(eh,"on"+nh)}Ln(qu,"onAnimationEnd");Ln(Wu,"onAnimationIteration");Ln(Qu,"onAnimationStart");Ln("dblclick","onDoubleClick");Ln("focusin","onFocus");Ln("focusout","onBlur");Ln(Ku,"onTransitionEnd");gt("onMouseEnter",["mouseout","mouseover"]);gt("onMouseLeave",["mouseout","mouseover"]);gt("onPointerEnter",["pointerout","pointerover"]);gt("onPointerLeave",["pointerout","pointerover"]);Qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),th=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bt));function Ya(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Jd(r,n,void 0,e),e.currentTarget=null}function Xu(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var a=r.length-1;0<=a;a--){var u=r[a],o=u.instance,c=u.currentTarget;if(u=u.listener,o!==i&&l.isPropagationStopped())break e;Ya(l,u,c),i=o}else for(a=0;a<r.length;a++){if(u=r[a],o=u.instance,c=u.currentTarget,u=u.listener,o!==i&&l.isPropagationStopped())break e;Ya(l,u,c),i=o}}}if(il)throw e=Fi,il=!1,Fi=null,e}function W(e,n){var t=n[Ki];t===void 0&&(t=n[Ki]=new Set);var r=e+"__bubble";t.has(r)||(Yu(n,e,2,!1),t.add(r))}function ai(e,n,t){var r=0;n&&(r|=4),Yu(t,e,r,n)}var br="_reactListening"+Math.random().toString(36).slice(2);function or(e){if(!e[br]){e[br]=!0,lu.forEach(function(t){t!=="selectionchange"&&(th.has(t)||ai(t,!1,e),ai(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[br]||(n[br]=!0,ai("selectionchange",!1,n))}}function Yu(e,n,t,r){switch(Ru(n)){case 1:var l=vf;break;case 4:l=yf;break;default:l=bs}t=l.bind(null,n,t,e),l=void 0,!bi||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function oi(e,n,t,r,l){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var u=r.stateNode.containerInfo;if(u===l||u.nodeType===8&&u.parentNode===l)break;if(a===4)for(a=r.return;a!==null;){var o=a.tag;if((o===3||o===4)&&(o=a.stateNode.containerInfo,o===l||o.nodeType===8&&o.parentNode===l))return;a=a.return}for(;u!==null;){if(a=bn(u),a===null)return;if(o=a.tag,o===5||o===6){r=i=a;continue e}u=u.parentNode}}r=r.return}ku(function(){var c=i,h=Os(t),p=[];e:{var m=Gu.get(e);if(m!==void 0){var x=As,k=e;switch(e){case"keypress":if(Gr(t)===0)break e;case"keydown":case"keyup":x=If;break;case"focusin":k="focus",x=ni;break;case"focusout":k="blur",x=ni;break;case"beforeblur":case"afterblur":x=ni;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Aa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=kf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Mf;break;case qu:case Wu:case Qu:x=Nf;break;case Ku:x=bf;break;case"scroll":x=gf;break;case"wheel":x=Af;break;case"copy":case"cut":case"paste":x=Ef;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Va}var w=(n&4)!==0,g=!w&&e==="scroll",d=w?m!==null?m+"Capture":null:m;w=[];for(var f=c,v;f!==null;){v=f;var N=v.stateNode;if(v.tag===5&&N!==null&&(v=N,d!==null&&(N=tr(f,d),N!=null&&w.push(ur(f,N,v)))),g)break;f=f.return}0<w.length&&(m=new x(m,k,null,t,h),p.push({event:m,listeners:w}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&t!==Mi&&(k=t.relatedTarget||t.fromElement)&&(bn(k)||k[sn]))break e;if((x||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,x?(k=t.relatedTarget||t.toElement,x=c,k=k?bn(k):null,k!==null&&(g=Kn(k),k!==g||k.tag!==5&&k.tag!==6)&&(k=null)):(x=null,k=c),x!==k)){if(w=Aa,N="onMouseLeave",d="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(w=Va,N="onPointerLeave",d="onPointerEnter",f="pointer"),g=x==null?m:lt(x),v=k==null?m:lt(k),m=new w(N,f+"leave",x,t,h),m.target=g,m.relatedTarget=v,N=null,bn(h)===c&&(w=new w(d,f+"enter",k,t,h),w.target=v,w.relatedTarget=g,N=w),g=N,x&&k)n:{for(w=x,d=k,f=0,v=w;v;v=Zn(v))f++;for(v=0,N=d;N;N=Zn(N))v++;for(;0<f-v;)w=Zn(w),f--;for(;0<v-f;)d=Zn(d),v--;for(;f--;){if(w===d||d!==null&&w===d.alternate)break n;w=Zn(w),d=Zn(d)}w=null}else w=null;x!==null&&Za(p,m,x,w,!1),k!==null&&g!==null&&Za(p,g,k,w,!0)}}e:{if(m=c?lt(c):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var C=Wf;else if(Ba(m))if(Uu)C=Xf;else{C=Kf;var I=Qf}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(C=Gf);if(C&&(C=C(e,c))){Au(p,C,t,h);break e}I&&I(e,m,c),e==="focusout"&&(I=m._wrapperState)&&I.controlled&&m.type==="number"&&Li(m,"number",m.value)}switch(I=c?lt(c):window,e){case"focusin":(Ba(I)||I.contentEditable==="true")&&(tt=I,Hi=c,Gt=null);break;case"focusout":Gt=Hi=tt=null;break;case"mousedown":$i=!0;break;case"contextmenu":case"mouseup":case"dragend":$i=!1,Ga(p,t,h);break;case"selectionchange":if(Jf)break;case"keydown":case"keyup":Ga(p,t,h)}var L;if(Vs)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else nt?bu(e,t)&&(P="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(P="onCompositionStart");P&&(Du&&t.locale!=="ko"&&(nt||P!=="onCompositionStart"?P==="onCompositionEnd"&&nt&&(L=Mu()):(mn=h,Fs="value"in mn?mn.value:mn.textContent,nt=!0)),I=cl(c,P),0<I.length&&(P=new Ua(P,e,null,t,h),p.push({event:P,listeners:I}),L?P.data=L:(L=Fu(t),L!==null&&(P.data=L)))),(L=Vf?Hf(e,t):$f(e,t))&&(c=cl(c,"onBeforeInput"),0<c.length&&(h=new Ua("onBeforeInput","beforeinput",null,t,h),p.push({event:h,listeners:c}),h.data=L))}Xu(p,n)})}function ur(e,n,t){return{instance:e,listener:n,currentTarget:t}}function cl(e,n){for(var t=n+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=tr(e,t),i!=null&&r.unshift(ur(e,i,l)),i=tr(e,n),i!=null&&r.push(ur(e,i,l))),e=e.return}return r}function Zn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Za(e,n,t,r,l){for(var i=n._reactName,a=[];t!==null&&t!==r;){var u=t,o=u.alternate,c=u.stateNode;if(o!==null&&o===r)break;u.tag===5&&c!==null&&(u=c,l?(o=tr(t,i),o!=null&&a.unshift(ur(t,o,u))):l||(o=tr(t,i),o!=null&&a.push(ur(t,o,u)))),t=t.return}a.length!==0&&e.push({event:n,listeners:a})}var rh=/\r\n?/g,lh=/\u0000|\uFFFD/g;function Ja(e){return(typeof e=="string"?e:""+e).replace(rh,`
`).replace(lh,"")}function Fr(e,n,t){if(n=Ja(n),Ja(e)!==n&&t)throw Error(T(425))}function dl(){}var Bi=null,qi=null;function Wi(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Qi=typeof setTimeout=="function"?setTimeout:void 0,ih=typeof clearTimeout=="function"?clearTimeout:void 0,eo=typeof Promise=="function"?Promise:void 0,sh=typeof queueMicrotask=="function"?queueMicrotask:typeof eo<"u"?function(e){return eo.resolve(null).then(e).catch(ah)}:Qi;function ah(e){setTimeout(function(){throw e})}function ui(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(r===0){e.removeChild(l),ir(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=l}while(t);ir(n)}function wn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function no(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var _t=Math.random().toString(36).slice(2),Ge="__reactFiber$"+_t,cr="__reactProps$"+_t,sn="__reactContainer$"+_t,Ki="__reactEvents$"+_t,oh="__reactListeners$"+_t,uh="__reactHandles$"+_t;function bn(e){var n=e[Ge];if(n)return n;for(var t=e.parentNode;t;){if(n=t[sn]||t[Ge]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=no(e);e!==null;){if(t=e[Ge])return t;e=no(e)}return n}e=t,t=e.parentNode}return null}function jr(e){return e=e[Ge]||e[sn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function lt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function Rl(e){return e[cr]||null}var Gi=[],it=-1;function Pn(e){return{current:e}}function Q(e){0>it||(e.current=Gi[it],Gi[it]=null,it--)}function q(e,n){it++,Gi[it]=e.current,e.current=n}var _n={},he=Pn(_n),je=Pn(!1),Hn=_n;function xt(e,n){var t=e.type.contextTypes;if(!t)return _n;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in t)l[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=l),l}function Ne(e){return e=e.childContextTypes,e!=null}function fl(){Q(je),Q(he)}function to(e,n,t){if(he.current!==_n)throw Error(T(168));q(he,n),q(je,t)}function Zu(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var l in r)if(!(l in n))throw Error(T(108,Wd(e)||"Unknown",l));return Y({},t,r)}function hl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||_n,Hn=he.current,q(he,e),q(je,je.current),!0}function ro(e,n,t){var r=e.stateNode;if(!r)throw Error(T(169));t?(e=Zu(e,n,Hn),r.__reactInternalMemoizedMergedChildContext=e,Q(je),Q(he),q(he,e)):Q(je),q(je,t)}var en=null,Ml=!1,ci=!1;function Ju(e){en===null?en=[e]:en.push(e)}function ch(e){Ml=!0,Ju(e)}function In(){if(!ci&&en!==null){ci=!0;var e=0,n=V;try{var t=en;for(V=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}en=null,Ml=!1}catch(l){throw en!==null&&(en=en.slice(e+1)),Su(Rs,In),l}finally{V=n,ci=!1}}return null}var st=[],at=0,pl=null,ml=0,Ie=[],Oe=0,$n=null,nn=1,tn="";function Mn(e,n){st[at++]=ml,st[at++]=pl,pl=e,ml=n}function ec(e,n,t){Ie[Oe++]=nn,Ie[Oe++]=tn,Ie[Oe++]=$n,$n=e;var r=nn;e=tn;var l=32-$e(r)-1;r&=~(1<<l),t+=1;var i=32-$e(n)+l;if(30<i){var a=l-l%5;i=(r&(1<<a)-1).toString(32),r>>=a,l-=a,nn=1<<32-$e(n)+l|t<<l|r,tn=i+e}else nn=1<<i|t<<l|r,tn=e}function $s(e){e.return!==null&&(Mn(e,1),ec(e,1,0))}function Bs(e){for(;e===pl;)pl=st[--at],st[at]=null,ml=st[--at],st[at]=null;for(;e===$n;)$n=Ie[--Oe],Ie[Oe]=null,tn=Ie[--Oe],Ie[Oe]=null,nn=Ie[--Oe],Ie[Oe]=null}var Ce=null,Te=null,K=!1,He=null;function nc(e,n){var t=Re(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function lo(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ce=e,Te=wn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ce=e,Te=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=$n!==null?{id:nn,overflow:tn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Re(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Ce=e,Te=null,!0):!1;default:return!1}}function Xi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Yi(e){if(K){var n=Te;if(n){var t=n;if(!lo(e,n)){if(Xi(e))throw Error(T(418));n=wn(t.nextSibling);var r=Ce;n&&lo(e,n)?nc(r,t):(e.flags=e.flags&-4097|2,K=!1,Ce=e)}}else{if(Xi(e))throw Error(T(418));e.flags=e.flags&-4097|2,K=!1,Ce=e}}}function io(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ce=e}function Ar(e){if(e!==Ce)return!1;if(!K)return io(e),K=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Wi(e.type,e.memoizedProps)),n&&(n=Te)){if(Xi(e))throw tc(),Error(T(418));for(;n;)nc(e,n),n=wn(n.nextSibling)}if(io(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Te=wn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Te=null}}else Te=Ce?wn(e.stateNode.nextSibling):null;return!0}function tc(){for(var e=Te;e;)e=wn(e.nextSibling)}function kt(){Te=Ce=null,K=!1}function qs(e){He===null?He=[e]:He.push(e)}var dh=un.ReactCurrentBatchConfig;function Ft(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(T(309));var r=t.stateNode}if(!r)throw Error(T(147,e));var l=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(a){var u=l.refs;a===null?delete u[i]:u[i]=a},n._stringRef=i,n)}if(typeof e!="string")throw Error(T(284));if(!t._owner)throw Error(T(290,e))}return e}function Ur(e,n){throw e=Object.prototype.toString.call(n),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function so(e){var n=e._init;return n(e._payload)}function rc(e){function n(d,f){if(e){var v=d.deletions;v===null?(d.deletions=[f],d.flags|=16):v.push(f)}}function t(d,f){if(!e)return null;for(;f!==null;)n(d,f),f=f.sibling;return null}function r(d,f){for(d=new Map;f!==null;)f.key!==null?d.set(f.key,f):d.set(f.index,f),f=f.sibling;return d}function l(d,f){return d=En(d,f),d.index=0,d.sibling=null,d}function i(d,f,v){return d.index=v,e?(v=d.alternate,v!==null?(v=v.index,v<f?(d.flags|=2,f):v):(d.flags|=2,f)):(d.flags|=1048576,f)}function a(d){return e&&d.alternate===null&&(d.flags|=2),d}function u(d,f,v,N){return f===null||f.tag!==6?(f=yi(v,d.mode,N),f.return=d,f):(f=l(f,v),f.return=d,f)}function o(d,f,v,N){var C=v.type;return C===et?h(d,f,v.props.children,N,v.key):f!==null&&(f.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===dn&&so(C)===f.type)?(N=l(f,v.props),N.ref=Ft(d,f,v),N.return=d,N):(N=tl(v.type,v.key,v.props,null,d.mode,N),N.ref=Ft(d,f,v),N.return=d,N)}function c(d,f,v,N){return f===null||f.tag!==4||f.stateNode.containerInfo!==v.containerInfo||f.stateNode.implementation!==v.implementation?(f=gi(v,d.mode,N),f.return=d,f):(f=l(f,v.children||[]),f.return=d,f)}function h(d,f,v,N,C){return f===null||f.tag!==7?(f=Vn(v,d.mode,N,C),f.return=d,f):(f=l(f,v),f.return=d,f)}function p(d,f,v){if(typeof f=="string"&&f!==""||typeof f=="number")return f=yi(""+f,d.mode,v),f.return=d,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case zr:return v=tl(f.type,f.key,f.props,null,d.mode,v),v.ref=Ft(d,null,f),v.return=d,v;case Jn:return f=gi(f,d.mode,v),f.return=d,f;case dn:var N=f._init;return p(d,N(f._payload),v)}if(Ht(f)||Ot(f))return f=Vn(f,d.mode,v,null),f.return=d,f;Ur(d,f)}return null}function m(d,f,v,N){var C=f!==null?f.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:u(d,f,""+v,N);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case zr:return v.key===C?o(d,f,v,N):null;case Jn:return v.key===C?c(d,f,v,N):null;case dn:return C=v._init,m(d,f,C(v._payload),N)}if(Ht(v)||Ot(v))return C!==null?null:h(d,f,v,N,null);Ur(d,v)}return null}function x(d,f,v,N,C){if(typeof N=="string"&&N!==""||typeof N=="number")return d=d.get(v)||null,u(f,d,""+N,C);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case zr:return d=d.get(N.key===null?v:N.key)||null,o(f,d,N,C);case Jn:return d=d.get(N.key===null?v:N.key)||null,c(f,d,N,C);case dn:var I=N._init;return x(d,f,v,I(N._payload),C)}if(Ht(N)||Ot(N))return d=d.get(v)||null,h(f,d,N,C,null);Ur(f,N)}return null}function k(d,f,v,N){for(var C=null,I=null,L=f,P=f=0,M=null;L!==null&&P<v.length;P++){L.index>P?(M=L,L=null):M=L.sibling;var S=m(d,L,v[P],N);if(S===null){L===null&&(L=M);break}e&&L&&S.alternate===null&&n(d,L),f=i(S,f,P),I===null?C=S:I.sibling=S,I=S,L=M}if(P===v.length)return t(d,L),K&&Mn(d,P),C;if(L===null){for(;P<v.length;P++)L=p(d,v[P],N),L!==null&&(f=i(L,f,P),I===null?C=L:I.sibling=L,I=L);return K&&Mn(d,P),C}for(L=r(d,L);P<v.length;P++)M=x(L,d,P,v[P],N),M!==null&&(e&&M.alternate!==null&&L.delete(M.key===null?P:M.key),f=i(M,f,P),I===null?C=M:I.sibling=M,I=M);return e&&L.forEach(function(D){return n(d,D)}),K&&Mn(d,P),C}function w(d,f,v,N){var C=Ot(v);if(typeof C!="function")throw Error(T(150));if(v=C.call(v),v==null)throw Error(T(151));for(var I=C=null,L=f,P=f=0,M=null,S=v.next();L!==null&&!S.done;P++,S=v.next()){L.index>P?(M=L,L=null):M=L.sibling;var D=m(d,L,S.value,N);if(D===null){L===null&&(L=M);break}e&&L&&D.alternate===null&&n(d,L),f=i(D,f,P),I===null?C=D:I.sibling=D,I=D,L=M}if(S.done)return t(d,L),K&&Mn(d,P),C;if(L===null){for(;!S.done;P++,S=v.next())S=p(d,S.value,N),S!==null&&(f=i(S,f,P),I===null?C=S:I.sibling=S,I=S);return K&&Mn(d,P),C}for(L=r(d,L);!S.done;P++,S=v.next())S=x(L,d,P,S.value,N),S!==null&&(e&&S.alternate!==null&&L.delete(S.key===null?P:S.key),f=i(S,f,P),I===null?C=S:I.sibling=S,I=S);return e&&L.forEach(function(ge){return n(d,ge)}),K&&Mn(d,P),C}function g(d,f,v,N){if(typeof v=="object"&&v!==null&&v.type===et&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case zr:e:{for(var C=v.key,I=f;I!==null;){if(I.key===C){if(C=v.type,C===et){if(I.tag===7){t(d,I.sibling),f=l(I,v.props.children),f.return=d,d=f;break e}}else if(I.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===dn&&so(C)===I.type){t(d,I.sibling),f=l(I,v.props),f.ref=Ft(d,I,v),f.return=d,d=f;break e}t(d,I);break}else n(d,I);I=I.sibling}v.type===et?(f=Vn(v.props.children,d.mode,N,v.key),f.return=d,d=f):(N=tl(v.type,v.key,v.props,null,d.mode,N),N.ref=Ft(d,f,v),N.return=d,d=N)}return a(d);case Jn:e:{for(I=v.key;f!==null;){if(f.key===I)if(f.tag===4&&f.stateNode.containerInfo===v.containerInfo&&f.stateNode.implementation===v.implementation){t(d,f.sibling),f=l(f,v.children||[]),f.return=d,d=f;break e}else{t(d,f);break}else n(d,f);f=f.sibling}f=gi(v,d.mode,N),f.return=d,d=f}return a(d);case dn:return I=v._init,g(d,f,I(v._payload),N)}if(Ht(v))return k(d,f,v,N);if(Ot(v))return w(d,f,v,N);Ur(d,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,f!==null&&f.tag===6?(t(d,f.sibling),f=l(f,v),f.return=d,d=f):(t(d,f),f=yi(v,d.mode,N),f.return=d,d=f),a(d)):t(d,f)}return g}var wt=rc(!0),lc=rc(!1),vl=Pn(null),yl=null,ot=null,Ws=null;function Qs(){Ws=ot=yl=null}function Ks(e){var n=vl.current;Q(vl),e._currentValue=n}function Zi(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function vt(e,n){yl=e,Ws=ot=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(we=!0),e.firstContext=null)}function be(e){var n=e._currentValue;if(Ws!==e)if(e={context:e,memoizedValue:n,next:null},ot===null){if(yl===null)throw Error(T(308));ot=e,yl.dependencies={lanes:0,firstContext:e}}else ot=ot.next=e;return n}var Fn=null;function Gs(e){Fn===null?Fn=[e]:Fn.push(e)}function ic(e,n,t,r){var l=n.interleaved;return l===null?(t.next=t,Gs(n)):(t.next=l.next,l.next=t),n.interleaved=t,an(e,r)}function an(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var fn=!1;function Xs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function rn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function jn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,an(e,t)}return l=r.interleaved,l===null?(n.next=n,Gs(r)):(n.next=l.next,l.next=n),r.interleaved=n,an(e,t)}function Xr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Ms(e,t)}}function ao(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?l=i=a:i=i.next=a,t=t.next}while(t!==null);i===null?l=i=n:i=i.next=n}else l=i=n;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function gl(e,n,t,r){var l=e.updateQueue;fn=!1;var i=l.firstBaseUpdate,a=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var o=u,c=o.next;o.next=null,a===null?i=c:a.next=c,a=o;var h=e.alternate;h!==null&&(h=h.updateQueue,u=h.lastBaseUpdate,u!==a&&(u===null?h.firstBaseUpdate=c:u.next=c,h.lastBaseUpdate=o))}if(i!==null){var p=l.baseState;a=0,h=c=o=null,u=i;do{var m=u.lane,x=u.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:x,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var k=e,w=u;switch(m=n,x=t,w.tag){case 1:if(k=w.payload,typeof k=="function"){p=k.call(x,p,m);break e}p=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=w.payload,m=typeof k=="function"?k.call(x,p,m):k,m==null)break e;p=Y({},p,m);break e;case 2:fn=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[u]:m.push(u))}else x={eventTime:x,lane:m,tag:u.tag,payload:u.payload,callback:u.callback,next:null},h===null?(c=h=x,o=p):h=h.next=x,a|=m;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;m=u,u=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(h===null&&(o=p),l.baseState=o,l.firstBaseUpdate=c,l.lastBaseUpdate=h,n=l.shared.interleaved,n!==null){l=n;do a|=l.lane,l=l.next;while(l!==n)}else i===null&&(l.shared.lanes=0);qn|=a,e.lanes=a,e.memoizedState=p}}function oo(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],l=r.callback;if(l!==null){if(r.callback=null,r=t,typeof l!="function")throw Error(T(191,l));l.call(r)}}}var Nr={},Ye=Pn(Nr),dr=Pn(Nr),fr=Pn(Nr);function An(e){if(e===Nr)throw Error(T(174));return e}function Ys(e,n){switch(q(fr,n),q(dr,e),q(Ye,Nr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Ii(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Ii(n,e)}Q(Ye),q(Ye,n)}function jt(){Q(Ye),Q(dr),Q(fr)}function ac(e){An(fr.current);var n=An(Ye.current),t=Ii(n,e.type);n!==t&&(q(dr,e),q(Ye,t))}function Zs(e){dr.current===e&&(Q(Ye),Q(dr))}var G=Pn(0);function xl(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var di=[];function Js(){for(var e=0;e<di.length;e++)di[e]._workInProgressVersionPrimary=null;di.length=0}var Yr=un.ReactCurrentDispatcher,fi=un.ReactCurrentBatchConfig,Bn=0,X=null,te=null,le=null,kl=!1,Xt=!1,hr=0,fh=0;function ce(){throw Error(T(321))}function ea(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!qe(e[t],n[t]))return!1;return!0}function na(e,n,t,r,l,i){if(Bn=i,X=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Yr.current=e===null||e.memoizedState===null?vh:yh,e=t(r,l),Xt){i=0;do{if(Xt=!1,hr=0,25<=i)throw Error(T(301));i+=1,le=te=null,n.updateQueue=null,Yr.current=gh,e=t(r,l)}while(Xt)}if(Yr.current=wl,n=te!==null&&te.next!==null,Bn=0,le=te=X=null,kl=!1,n)throw Error(T(300));return e}function ta(){var e=hr!==0;return hr=0,e}function Ke(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?X.memoizedState=le=e:le=le.next=e,le}function Fe(){if(te===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var n=le===null?X.memoizedState:le.next;if(n!==null)le=n,te=e;else{if(e===null)throw Error(T(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},le===null?X.memoizedState=le=e:le=le.next=e}return le}function pr(e,n){return typeof n=="function"?n(e):n}function hi(e){var n=Fe(),t=n.queue;if(t===null)throw Error(T(311));t.lastRenderedReducer=e;var r=te,l=r.baseQueue,i=t.pending;if(i!==null){if(l!==null){var a=l.next;l.next=i.next,i.next=a}r.baseQueue=l=i,t.pending=null}if(l!==null){i=l.next,r=r.baseState;var u=a=null,o=null,c=i;do{var h=c.lane;if((Bn&h)===h)o!==null&&(o=o.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};o===null?(u=o=p,a=r):o=o.next=p,X.lanes|=h,qn|=h}c=c.next}while(c!==null&&c!==i);o===null?a=r:o.next=u,qe(r,n.memoizedState)||(we=!0),n.memoizedState=r,n.baseState=a,n.baseQueue=o,t.lastRenderedState=r}if(e=t.interleaved,e!==null){l=e;do i=l.lane,X.lanes|=i,qn|=i,l=l.next;while(l!==e)}else l===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function pi(e){var n=Fe(),t=n.queue;if(t===null)throw Error(T(311));t.lastRenderedReducer=e;var r=t.dispatch,l=t.pending,i=n.memoizedState;if(l!==null){t.pending=null;var a=l=l.next;do i=e(i,a.action),a=a.next;while(a!==l);qe(i,n.memoizedState)||(we=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function oc(){}function uc(e,n){var t=X,r=Fe(),l=n(),i=!qe(r.memoizedState,l);if(i&&(r.memoizedState=l,we=!0),r=r.queue,ra(fc.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||le!==null&&le.memoizedState.tag&1){if(t.flags|=2048,mr(9,dc.bind(null,t,r,l,n),void 0,null),ie===null)throw Error(T(349));Bn&30||cc(t,n,l)}return l}function cc(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=X.updateQueue,n===null?(n={lastEffect:null,stores:null},X.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function dc(e,n,t,r){n.value=t,n.getSnapshot=r,hc(n)&&pc(e)}function fc(e,n,t){return t(function(){hc(n)&&pc(e)})}function hc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!qe(e,t)}catch{return!0}}function pc(e){var n=an(e,1);n!==null&&Be(n,e,1,-1)}function uo(e){var n=Ke();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pr,lastRenderedState:e},n.queue=e,e=e.dispatch=mh.bind(null,X,e),[n.memoizedState,e]}function mr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=X.updateQueue,n===null?(n={lastEffect:null,stores:null},X.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function mc(){return Fe().memoizedState}function Zr(e,n,t,r){var l=Ke();X.flags|=e,l.memoizedState=mr(1|n,t,void 0,r===void 0?null:r)}function Dl(e,n,t,r){var l=Fe();r=r===void 0?null:r;var i=void 0;if(te!==null){var a=te.memoizedState;if(i=a.destroy,r!==null&&ea(r,a.deps)){l.memoizedState=mr(n,t,i,r);return}}X.flags|=e,l.memoizedState=mr(1|n,t,i,r)}function co(e,n){return Zr(8390656,8,e,n)}function ra(e,n){return Dl(2048,8,e,n)}function vc(e,n){return Dl(4,2,e,n)}function yc(e,n){return Dl(4,4,e,n)}function gc(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function xc(e,n,t){return t=t!=null?t.concat([e]):null,Dl(4,4,gc.bind(null,n,e),t)}function la(){}function kc(e,n){var t=Fe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&ea(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function wc(e,n){var t=Fe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&ea(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function jc(e,n,t){return Bn&21?(qe(t,n)||(t=Cu(),X.lanes|=t,qn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,we=!0),e.memoizedState=t)}function hh(e,n){var t=V;V=t!==0&&4>t?t:4,e(!0);var r=fi.transition;fi.transition={};try{e(!1),n()}finally{V=t,fi.transition=r}}function Nc(){return Fe().memoizedState}function ph(e,n,t){var r=Sn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Sc(e))Ec(n,t);else if(t=ic(e,n,t,r),t!==null){var l=me();Be(t,e,r,l),Tc(t,n,r)}}function mh(e,n,t){var r=Sn(e),l={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Sc(e))Ec(n,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var a=n.lastRenderedState,u=i(a,t);if(l.hasEagerState=!0,l.eagerState=u,qe(u,a)){var o=n.interleaved;o===null?(l.next=l,Gs(n)):(l.next=o.next,o.next=l),n.interleaved=l;return}}catch{}finally{}t=ic(e,n,l,r),t!==null&&(l=me(),Be(t,e,r,l),Tc(t,n,r))}}function Sc(e){var n=e.alternate;return e===X||n!==null&&n===X}function Ec(e,n){Xt=kl=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Tc(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Ms(e,t)}}var wl={readContext:be,useCallback:ce,useContext:ce,useEffect:ce,useImperativeHandle:ce,useInsertionEffect:ce,useLayoutEffect:ce,useMemo:ce,useReducer:ce,useRef:ce,useState:ce,useDebugValue:ce,useDeferredValue:ce,useTransition:ce,useMutableSource:ce,useSyncExternalStore:ce,useId:ce,unstable_isNewReconciler:!1},vh={readContext:be,useCallback:function(e,n){return Ke().memoizedState=[e,n===void 0?null:n],e},useContext:be,useEffect:co,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Zr(4194308,4,gc.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Zr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Zr(4,2,e,n)},useMemo:function(e,n){var t=Ke();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Ke();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=ph.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var n=Ke();return e={current:e},n.memoizedState=e},useState:uo,useDebugValue:la,useDeferredValue:function(e){return Ke().memoizedState=e},useTransition:function(){var e=uo(!1),n=e[0];return e=hh.bind(null,e[1]),Ke().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=X,l=Ke();if(K){if(t===void 0)throw Error(T(407));t=t()}else{if(t=n(),ie===null)throw Error(T(349));Bn&30||cc(r,n,t)}l.memoizedState=t;var i={value:t,getSnapshot:n};return l.queue=i,co(fc.bind(null,r,i,e),[e]),r.flags|=2048,mr(9,dc.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=Ke(),n=ie.identifierPrefix;if(K){var t=tn,r=nn;t=(r&~(1<<32-$e(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=hr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=fh++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},yh={readContext:be,useCallback:kc,useContext:be,useEffect:ra,useImperativeHandle:xc,useInsertionEffect:vc,useLayoutEffect:yc,useMemo:wc,useReducer:hi,useRef:mc,useState:function(){return hi(pr)},useDebugValue:la,useDeferredValue:function(e){var n=Fe();return jc(n,te.memoizedState,e)},useTransition:function(){var e=hi(pr)[0],n=Fe().memoizedState;return[e,n]},useMutableSource:oc,useSyncExternalStore:uc,useId:Nc,unstable_isNewReconciler:!1},gh={readContext:be,useCallback:kc,useContext:be,useEffect:ra,useImperativeHandle:xc,useInsertionEffect:vc,useLayoutEffect:yc,useMemo:wc,useReducer:pi,useRef:mc,useState:function(){return pi(pr)},useDebugValue:la,useDeferredValue:function(e){var n=Fe();return te===null?n.memoizedState=e:jc(n,te.memoizedState,e)},useTransition:function(){var e=pi(pr)[0],n=Fe().memoizedState;return[e,n]},useMutableSource:oc,useSyncExternalStore:uc,useId:Nc,unstable_isNewReconciler:!1};function Ue(e,n){if(e&&e.defaultProps){n=Y({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Ji(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:Y({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var bl={isMounted:function(e){return(e=e._reactInternals)?Kn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=me(),l=Sn(e),i=rn(r,l);i.payload=n,t!=null&&(i.callback=t),n=jn(e,i,l),n!==null&&(Be(n,e,l,r),Xr(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=me(),l=Sn(e),i=rn(r,l);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=jn(e,i,l),n!==null&&(Be(n,e,l,r),Xr(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=me(),r=Sn(e),l=rn(t,r);l.tag=2,n!=null&&(l.callback=n),n=jn(e,l,r),n!==null&&(Be(n,e,r,t),Xr(n,e,r))}};function fo(e,n,t,r,l,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):n.prototype&&n.prototype.isPureReactComponent?!ar(t,r)||!ar(l,i):!0}function Cc(e,n,t){var r=!1,l=_n,i=n.contextType;return typeof i=="object"&&i!==null?i=be(i):(l=Ne(n)?Hn:he.current,r=n.contextTypes,i=(r=r!=null)?xt(e,l):_n),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=bl,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),n}function ho(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&bl.enqueueReplaceState(n,n.state,null)}function es(e,n,t,r){var l=e.stateNode;l.props=t,l.state=e.memoizedState,l.refs={},Xs(e);var i=n.contextType;typeof i=="object"&&i!==null?l.context=be(i):(i=Ne(n)?Hn:he.current,l.context=xt(e,i)),l.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Ji(e,n,i,t),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(n=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),n!==l.state&&bl.enqueueReplaceState(l,l.state,null),gl(e,t,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Nt(e,n){try{var t="",r=n;do t+=qd(r),r=r.return;while(r);var l=t}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:l,digest:null}}function mi(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function ns(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var xh=typeof WeakMap=="function"?WeakMap:Map;function _c(e,n,t){t=rn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Nl||(Nl=!0,ds=r),ns(e,n)},t}function zc(e,n,t){t=rn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=n.value;t.payload=function(){return r(l)},t.callback=function(){ns(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){ns(e,n),typeof r!="function"&&(Nn===null?Nn=new Set([this]):Nn.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})}),t}function po(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new xh;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(t)||(l.add(t),e=Oh.bind(null,e,n,t),n.then(e,e))}function mo(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function vo(e,n,t,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=rn(-1,1),n.tag=2,jn(t,n,1))),t.lanes|=1),e)}var kh=un.ReactCurrentOwner,we=!1;function pe(e,n,t,r){n.child=e===null?lc(n,null,t,r):wt(n,e.child,t,r)}function yo(e,n,t,r,l){t=t.render;var i=n.ref;return vt(n,l),r=na(e,n,t,r,i,l),t=ta(),e!==null&&!we?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,on(e,n,l)):(K&&t&&$s(n),n.flags|=1,pe(e,n,r,l),n.child)}function go(e,n,t,r,l){if(e===null){var i=t.type;return typeof i=="function"&&!fa(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,Lc(e,n,i,r,l)):(e=tl(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&l)){var a=i.memoizedProps;if(t=t.compare,t=t!==null?t:ar,t(a,r)&&e.ref===n.ref)return on(e,n,l)}return n.flags|=1,e=En(i,r),e.ref=n.ref,e.return=n,n.child=e}function Lc(e,n,t,r,l){if(e!==null){var i=e.memoizedProps;if(ar(i,r)&&e.ref===n.ref)if(we=!1,n.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(we=!0);else return n.lanes=e.lanes,on(e,n,l)}return ts(e,n,t,r,l)}function Pc(e,n,t){var r=n.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(ct,Ee),Ee|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,q(ct,Ee),Ee|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,q(ct,Ee),Ee|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,q(ct,Ee),Ee|=r;return pe(e,n,l,t),n.child}function Ic(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function ts(e,n,t,r,l){var i=Ne(t)?Hn:he.current;return i=xt(n,i),vt(n,l),t=na(e,n,t,r,i,l),r=ta(),e!==null&&!we?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,on(e,n,l)):(K&&r&&$s(n),n.flags|=1,pe(e,n,t,l),n.child)}function xo(e,n,t,r,l){if(Ne(t)){var i=!0;hl(n)}else i=!1;if(vt(n,l),n.stateNode===null)Jr(e,n),Cc(n,t,r),es(n,t,r,l),r=!0;else if(e===null){var a=n.stateNode,u=n.memoizedProps;a.props=u;var o=a.context,c=t.contextType;typeof c=="object"&&c!==null?c=be(c):(c=Ne(t)?Hn:he.current,c=xt(n,c));var h=t.getDerivedStateFromProps,p=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(u!==r||o!==c)&&ho(n,a,r,c),fn=!1;var m=n.memoizedState;a.state=m,gl(n,r,a,l),o=n.memoizedState,u!==r||m!==o||je.current||fn?(typeof h=="function"&&(Ji(n,t,h,r),o=n.memoizedState),(u=fn||fo(n,t,u,r,m,o,c))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=o),a.props=r,a.state=o,a.context=c,r=u):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{a=n.stateNode,sc(e,n),u=n.memoizedProps,c=n.type===n.elementType?u:Ue(n.type,u),a.props=c,p=n.pendingProps,m=a.context,o=t.contextType,typeof o=="object"&&o!==null?o=be(o):(o=Ne(t)?Hn:he.current,o=xt(n,o));var x=t.getDerivedStateFromProps;(h=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(u!==p||m!==o)&&ho(n,a,r,o),fn=!1,m=n.memoizedState,a.state=m,gl(n,r,a,l);var k=n.memoizedState;u!==p||m!==k||je.current||fn?(typeof x=="function"&&(Ji(n,t,x,r),k=n.memoizedState),(c=fn||fo(n,t,c,r,m,k,o)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,k,o),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,k,o)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=k),a.props=r,a.state=k,a.context=o,r=c):(typeof a.componentDidUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),r=!1)}return rs(e,n,t,r,i,l)}function rs(e,n,t,r,l,i){Ic(e,n);var a=(n.flags&128)!==0;if(!r&&!a)return l&&ro(n,t,!1),on(e,n,i);r=n.stateNode,kh.current=n;var u=a&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&a?(n.child=wt(n,e.child,null,i),n.child=wt(n,null,u,i)):pe(e,n,u,i),n.memoizedState=r.state,l&&ro(n,t,!0),n.child}function Oc(e){var n=e.stateNode;n.pendingContext?to(e,n.pendingContext,n.pendingContext!==n.context):n.context&&to(e,n.context,!1),Ys(e,n.containerInfo)}function ko(e,n,t,r,l){return kt(),qs(l),n.flags|=256,pe(e,n,t,r),n.child}var ls={dehydrated:null,treeContext:null,retryLane:0};function is(e){return{baseLanes:e,cachePool:null,transitions:null}}function Rc(e,n,t){var r=n.pendingProps,l=G.current,i=!1,a=(n.flags&128)!==0,u;if((u=a)||(u=e!==null&&e.memoizedState===null?!1:(l&2)!==0),u?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),q(G,l&1),e===null)return Yi(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(a=r.children,e=r.fallback,i?(r=n.mode,i=n.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Ul(a,r,0,null),e=Vn(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=is(t),n.memoizedState=ls,e):ia(n,a));if(l=e.memoizedState,l!==null&&(u=l.dehydrated,u!==null))return wh(e,n,a,r,u,l,t);if(i){i=r.fallback,a=n.mode,l=e.child,u=l.sibling;var o={mode:"hidden",children:r.children};return!(a&1)&&n.child!==l?(r=n.child,r.childLanes=0,r.pendingProps=o,n.deletions=null):(r=En(l,o),r.subtreeFlags=l.subtreeFlags&14680064),u!==null?i=En(u,i):(i=Vn(i,a,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,a=e.child.memoizedState,a=a===null?is(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~t,n.memoizedState=ls,r}return i=e.child,e=i.sibling,r=En(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function ia(e,n){return n=Ul({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Vr(e,n,t,r){return r!==null&&qs(r),wt(n,e.child,null,t),e=ia(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function wh(e,n,t,r,l,i,a){if(t)return n.flags&256?(n.flags&=-257,r=mi(Error(T(422))),Vr(e,n,a,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,l=n.mode,r=Ul({mode:"visible",children:r.children},l,0,null),i=Vn(i,l,a,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&wt(n,e.child,null,a),n.child.memoizedState=is(a),n.memoizedState=ls,i);if(!(n.mode&1))return Vr(e,n,a,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var u=r.dgst;return r=u,i=Error(T(419)),r=mi(i,r,void 0),Vr(e,n,a,r)}if(u=(a&e.childLanes)!==0,we||u){if(r=ie,r!==null){switch(a&-a){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|a)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,an(e,l),Be(r,e,l,-1))}return da(),r=mi(Error(T(421))),Vr(e,n,a,r)}return l.data==="$?"?(n.flags|=128,n.child=e.child,n=Rh.bind(null,e),l._reactRetry=n,null):(e=i.treeContext,Te=wn(l.nextSibling),Ce=n,K=!0,He=null,e!==null&&(Ie[Oe++]=nn,Ie[Oe++]=tn,Ie[Oe++]=$n,nn=e.id,tn=e.overflow,$n=n),n=ia(n,r.children),n.flags|=4096,n)}function wo(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Zi(e.return,n,t)}function vi(e,n,t,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=l)}function Mc(e,n,t){var r=n.pendingProps,l=r.revealOrder,i=r.tail;if(pe(e,n,r.children,t),r=G.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wo(e,t,n);else if(e.tag===19)wo(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(q(G,r),!(n.mode&1))n.memoizedState=null;else switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&xl(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),vi(n,!1,l,t,i);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&xl(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}vi(n,!0,t,null,i);break;case"together":vi(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Jr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function on(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),qn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(T(153));if(n.child!==null){for(e=n.child,t=En(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=En(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function jh(e,n,t){switch(n.tag){case 3:Oc(n),kt();break;case 5:ac(n);break;case 1:Ne(n.type)&&hl(n);break;case 4:Ys(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,l=n.memoizedProps.value;q(vl,r._currentValue),r._currentValue=l;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(q(G,G.current&1),n.flags|=128,null):t&n.child.childLanes?Rc(e,n,t):(q(G,G.current&1),e=on(e,n,t),e!==null?e.sibling:null);q(G,G.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Mc(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),q(G,G.current),r)break;return null;case 22:case 23:return n.lanes=0,Pc(e,n,t)}return on(e,n,t)}var Dc,ss,bc,Fc;Dc=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};ss=function(){};bc=function(e,n,t,r){var l=e.memoizedProps;if(l!==r){e=n.stateNode,An(Ye.current);var i=null;switch(t){case"input":l=_i(e,l),r=_i(e,r),i=[];break;case"select":l=Y({},l,{value:void 0}),r=Y({},r,{value:void 0}),i=[];break;case"textarea":l=Pi(e,l),r=Pi(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=dl)}Oi(t,r);var a;t=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var u=l[c];for(a in u)u.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(er.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var o=r[c];if(u=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&o!==u&&(o!=null||u!=null))if(c==="style")if(u){for(a in u)!u.hasOwnProperty(a)||o&&o.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in o)o.hasOwnProperty(a)&&u[a]!==o[a]&&(t||(t={}),t[a]=o[a])}else t||(i||(i=[]),i.push(c,t)),t=o;else c==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,u=u?u.__html:void 0,o!=null&&u!==o&&(i=i||[]).push(c,o)):c==="children"?typeof o!="string"&&typeof o!="number"||(i=i||[]).push(c,""+o):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(er.hasOwnProperty(c)?(o!=null&&c==="onScroll"&&W("scroll",e),i||u===o||(i=[])):(i=i||[]).push(c,o))}t&&(i=i||[]).push("style",t);var c=i;(n.updateQueue=c)&&(n.flags|=4)}};Fc=function(e,n,t,r){t!==r&&(n.flags|=4)};function At(e,n){if(!K)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function de(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Nh(e,n,t){var r=n.pendingProps;switch(Bs(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(n),null;case 1:return Ne(n.type)&&fl(),de(n),null;case 3:return r=n.stateNode,jt(),Q(je),Q(he),Js(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ar(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,He!==null&&(ps(He),He=null))),ss(e,n),de(n),null;case 5:Zs(n);var l=An(fr.current);if(t=n.type,e!==null&&n.stateNode!=null)bc(e,n,t,r,l),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(T(166));return de(n),null}if(e=An(Ye.current),Ar(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[Ge]=n,r[cr]=i,e=(n.mode&1)!==0,t){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(l=0;l<Bt.length;l++)W(Bt[l],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":za(r,i),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},W("invalid",r);break;case"textarea":Pa(r,i),W("invalid",r)}Oi(t,i),l=null;for(var a in i)if(i.hasOwnProperty(a)){var u=i[a];a==="children"?typeof u=="string"?r.textContent!==u&&(i.suppressHydrationWarning!==!0&&Fr(r.textContent,u,e),l=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(i.suppressHydrationWarning!==!0&&Fr(r.textContent,u,e),l=["children",""+u]):er.hasOwnProperty(a)&&u!=null&&a==="onScroll"&&W("scroll",r)}switch(t){case"input":Lr(r),La(r,i,!0);break;case"textarea":Lr(r),Ia(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=dl)}r=l,n.updateQueue=r,r!==null&&(n.flags|=4)}else{a=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fu(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(t,{is:r.is}):(e=a.createElement(t),t==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,t),e[Ge]=n,e[cr]=r,Dc(e,n,!1,!1),n.stateNode=e;e:{switch(a=Ri(t,r),t){case"dialog":W("cancel",e),W("close",e),l=r;break;case"iframe":case"object":case"embed":W("load",e),l=r;break;case"video":case"audio":for(l=0;l<Bt.length;l++)W(Bt[l],e);l=r;break;case"source":W("error",e),l=r;break;case"img":case"image":case"link":W("error",e),W("load",e),l=r;break;case"details":W("toggle",e),l=r;break;case"input":za(e,r),l=_i(e,r),W("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=Y({},r,{value:void 0}),W("invalid",e);break;case"textarea":Pa(e,r),l=Pi(e,r),W("invalid",e);break;default:l=r}Oi(t,l),u=l;for(i in u)if(u.hasOwnProperty(i)){var o=u[i];i==="style"?mu(e,o):i==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,o!=null&&hu(e,o)):i==="children"?typeof o=="string"?(t!=="textarea"||o!=="")&&nr(e,o):typeof o=="number"&&nr(e,""+o):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(er.hasOwnProperty(i)?o!=null&&i==="onScroll"&&W("scroll",e):o!=null&&zs(e,i,o,a))}switch(t){case"input":Lr(e),La(e,r,!1);break;case"textarea":Lr(e),Ia(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Cn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?ft(e,!!r.multiple,i,!1):r.defaultValue!=null&&ft(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=dl)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return de(n),null;case 6:if(e&&n.stateNode!=null)Fc(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(T(166));if(t=An(fr.current),An(Ye.current),Ar(n)){if(r=n.stateNode,t=n.memoizedProps,r[Ge]=n,(i=r.nodeValue!==t)&&(e=Ce,e!==null))switch(e.tag){case 3:Fr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Fr(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Ge]=n,n.stateNode=r}return de(n),null;case 13:if(Q(G),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&Te!==null&&n.mode&1&&!(n.flags&128))tc(),kt(),n.flags|=98560,i=!1;else if(i=Ar(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(T(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(T(317));i[Ge]=n}else kt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;de(n),i=!1}else He!==null&&(ps(He),He=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||G.current&1?re===0&&(re=3):da())),n.updateQueue!==null&&(n.flags|=4),de(n),null);case 4:return jt(),ss(e,n),e===null&&or(n.stateNode.containerInfo),de(n),null;case 10:return Ks(n.type._context),de(n),null;case 17:return Ne(n.type)&&fl(),de(n),null;case 19:if(Q(G),i=n.memoizedState,i===null)return de(n),null;if(r=(n.flags&128)!==0,a=i.rendering,a===null)if(r)At(i,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(a=xl(e),a!==null){for(n.flags|=128,At(i,!1),r=a.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return q(G,G.current&1|2),n.child}e=e.sibling}i.tail!==null&&J()>St&&(n.flags|=128,r=!0,At(i,!1),n.lanes=4194304)}else{if(!r)if(e=xl(a),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),At(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!K)return de(n),null}else 2*J()-i.renderingStartTime>St&&t!==1073741824&&(n.flags|=128,r=!0,At(i,!1),n.lanes=4194304);i.isBackwards?(a.sibling=n.child,n.child=a):(t=i.last,t!==null?t.sibling=a:n.child=a,i.last=a)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=J(),n.sibling=null,t=G.current,q(G,r?t&1|2:t&1),n):(de(n),null);case 22:case 23:return ca(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Ee&1073741824&&(de(n),n.subtreeFlags&6&&(n.flags|=8192)):de(n),null;case 24:return null;case 25:return null}throw Error(T(156,n.tag))}function Sh(e,n){switch(Bs(n),n.tag){case 1:return Ne(n.type)&&fl(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return jt(),Q(je),Q(he),Js(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Zs(n),null;case 13:if(Q(G),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(T(340));kt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Q(G),null;case 4:return jt(),null;case 10:return Ks(n.type._context),null;case 22:case 23:return ca(),null;case 24:return null;default:return null}}var Hr=!1,fe=!1,Eh=typeof WeakSet=="function"?WeakSet:Set,O=null;function ut(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){Z(e,n,r)}else t.current=null}function as(e,n,t){try{t()}catch(r){Z(e,n,r)}}var jo=!1;function Th(e,n){if(Bi=ol,e=$u(),Hs(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var a=0,u=-1,o=-1,c=0,h=0,p=e,m=null;n:for(;;){for(var x;p!==t||l!==0&&p.nodeType!==3||(u=a+l),p!==i||r!==0&&p.nodeType!==3||(o=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(x=p.firstChild)!==null;)m=p,p=x;for(;;){if(p===e)break n;if(m===t&&++c===l&&(u=a),m===i&&++h===r&&(o=a),(x=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=x}t=u===-1||o===-1?null:{start:u,end:o}}else t=null}t=t||{start:0,end:0}}else t=null;for(qi={focusedElem:e,selectionRange:t},ol=!1,O=n;O!==null;)if(n=O,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,O=e;else for(;O!==null;){n=O;try{var k=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var w=k.memoizedProps,g=k.memoizedState,d=n.stateNode,f=d.getSnapshotBeforeUpdate(n.elementType===n.type?w:Ue(n.type,w),g);d.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var v=n.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(N){Z(n,n.return,N)}if(e=n.sibling,e!==null){e.return=n.return,O=e;break}O=n.return}return k=jo,jo=!1,k}function Yt(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&as(n,t,i)}l=l.next}while(l!==r)}}function Fl(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function os(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Ac(e){var n=e.alternate;n!==null&&(e.alternate=null,Ac(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ge],delete n[cr],delete n[Ki],delete n[oh],delete n[uh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Uc(e){return e.tag===5||e.tag===3||e.tag===4}function No(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Uc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function us(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=dl));else if(r!==4&&(e=e.child,e!==null))for(us(e,n,t),e=e.sibling;e!==null;)us(e,n,t),e=e.sibling}function cs(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(cs(e,n,t),e=e.sibling;e!==null;)cs(e,n,t),e=e.sibling}var se=null,Ve=!1;function cn(e,n,t){for(t=t.child;t!==null;)Vc(e,n,t),t=t.sibling}function Vc(e,n,t){if(Xe&&typeof Xe.onCommitFiberUnmount=="function")try{Xe.onCommitFiberUnmount(Ll,t)}catch{}switch(t.tag){case 5:fe||ut(t,n);case 6:var r=se,l=Ve;se=null,cn(e,n,t),se=r,Ve=l,se!==null&&(Ve?(e=se,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):se.removeChild(t.stateNode));break;case 18:se!==null&&(Ve?(e=se,t=t.stateNode,e.nodeType===8?ui(e.parentNode,t):e.nodeType===1&&ui(e,t),ir(e)):ui(se,t.stateNode));break;case 4:r=se,l=Ve,se=t.stateNode.containerInfo,Ve=!0,cn(e,n,t),se=r,Ve=l;break;case 0:case 11:case 14:case 15:if(!fe&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&as(t,n,a),l=l.next}while(l!==r)}cn(e,n,t);break;case 1:if(!fe&&(ut(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(u){Z(t,n,u)}cn(e,n,t);break;case 21:cn(e,n,t);break;case 22:t.mode&1?(fe=(r=fe)||t.memoizedState!==null,cn(e,n,t),fe=r):cn(e,n,t);break;default:cn(e,n,t)}}function So(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Eh),n.forEach(function(r){var l=Mh.bind(null,e,r);t.has(r)||(t.add(r),r.then(l,l))})}}function Ae(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];try{var i=e,a=n,u=a;e:for(;u!==null;){switch(u.tag){case 5:se=u.stateNode,Ve=!1;break e;case 3:se=u.stateNode.containerInfo,Ve=!0;break e;case 4:se=u.stateNode.containerInfo,Ve=!0;break e}u=u.return}if(se===null)throw Error(T(160));Vc(i,a,l),se=null,Ve=!1;var o=l.alternate;o!==null&&(o.return=null),l.return=null}catch(c){Z(l,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Hc(n,e),n=n.sibling}function Hc(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ae(n,e),Qe(e),r&4){try{Yt(3,e,e.return),Fl(3,e)}catch(w){Z(e,e.return,w)}try{Yt(5,e,e.return)}catch(w){Z(e,e.return,w)}}break;case 1:Ae(n,e),Qe(e),r&512&&t!==null&&ut(t,t.return);break;case 5:if(Ae(n,e),Qe(e),r&512&&t!==null&&ut(t,t.return),e.flags&32){var l=e.stateNode;try{nr(l,"")}catch(w){Z(e,e.return,w)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,a=t!==null?t.memoizedProps:i,u=e.type,o=e.updateQueue;if(e.updateQueue=null,o!==null)try{u==="input"&&i.type==="radio"&&i.name!=null&&cu(l,i),Ri(u,a);var c=Ri(u,i);for(a=0;a<o.length;a+=2){var h=o[a],p=o[a+1];h==="style"?mu(l,p):h==="dangerouslySetInnerHTML"?hu(l,p):h==="children"?nr(l,p):zs(l,h,p,c)}switch(u){case"input":zi(l,i);break;case"textarea":du(l,i);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?ft(l,!!i.multiple,x,!1):m!==!!i.multiple&&(i.defaultValue!=null?ft(l,!!i.multiple,i.defaultValue,!0):ft(l,!!i.multiple,i.multiple?[]:"",!1))}l[cr]=i}catch(w){Z(e,e.return,w)}}break;case 6:if(Ae(n,e),Qe(e),r&4){if(e.stateNode===null)throw Error(T(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(w){Z(e,e.return,w)}}break;case 3:if(Ae(n,e),Qe(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{ir(n.containerInfo)}catch(w){Z(e,e.return,w)}break;case 4:Ae(n,e),Qe(e);break;case 13:Ae(n,e),Qe(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(oa=J())),r&4&&So(e);break;case 22:if(h=t!==null&&t.memoizedState!==null,e.mode&1?(fe=(c=fe)||h,Ae(n,e),fe=c):Ae(n,e),Qe(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(O=e,h=e.child;h!==null;){for(p=O=h;O!==null;){switch(m=O,x=m.child,m.tag){case 0:case 11:case 14:case 15:Yt(4,m,m.return);break;case 1:ut(m,m.return);var k=m.stateNode;if(typeof k.componentWillUnmount=="function"){r=m,t=m.return;try{n=r,k.props=n.memoizedProps,k.state=n.memoizedState,k.componentWillUnmount()}catch(w){Z(r,t,w)}}break;case 5:ut(m,m.return);break;case 22:if(m.memoizedState!==null){To(p);continue}}x!==null?(x.return=m,O=x):To(p)}h=h.sibling}e:for(h=null,p=e;;){if(p.tag===5){if(h===null){h=p;try{l=p.stateNode,c?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(u=p.stateNode,o=p.memoizedProps.style,a=o!=null&&o.hasOwnProperty("display")?o.display:null,u.style.display=pu("display",a))}catch(w){Z(e,e.return,w)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(w){Z(e,e.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ae(n,e),Qe(e),r&4&&So(e);break;case 21:break;default:Ae(n,e),Qe(e)}}function Qe(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Uc(t)){var r=t;break e}t=t.return}throw Error(T(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(nr(l,""),r.flags&=-33);var i=No(e);cs(e,i,l);break;case 3:case 4:var a=r.stateNode.containerInfo,u=No(e);us(e,u,a);break;default:throw Error(T(161))}}catch(o){Z(e,e.return,o)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Ch(e,n,t){O=e,$c(e)}function $c(e,n,t){for(var r=(e.mode&1)!==0;O!==null;){var l=O,i=l.child;if(l.tag===22&&r){var a=l.memoizedState!==null||Hr;if(!a){var u=l.alternate,o=u!==null&&u.memoizedState!==null||fe;u=Hr;var c=fe;if(Hr=a,(fe=o)&&!c)for(O=l;O!==null;)a=O,o=a.child,a.tag===22&&a.memoizedState!==null?Co(l):o!==null?(o.return=a,O=o):Co(l);for(;i!==null;)O=i,$c(i),i=i.sibling;O=l,Hr=u,fe=c}Eo(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,O=i):Eo(e)}}function Eo(e){for(;O!==null;){var n=O;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:fe||Fl(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!fe)if(t===null)r.componentDidMount();else{var l=n.elementType===n.type?t.memoizedProps:Ue(n.type,t.memoizedProps);r.componentDidUpdate(l,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&oo(n,i,r);break;case 3:var a=n.updateQueue;if(a!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}oo(n,a,t)}break;case 5:var u=n.stateNode;if(t===null&&n.flags&4){t=u;var o=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":o.autoFocus&&t.focus();break;case"img":o.src&&(t.src=o.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&ir(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}fe||n.flags&512&&os(n)}catch(m){Z(n,n.return,m)}}if(n===e){O=null;break}if(t=n.sibling,t!==null){t.return=n.return,O=t;break}O=n.return}}function To(e){for(;O!==null;){var n=O;if(n===e){O=null;break}var t=n.sibling;if(t!==null){t.return=n.return,O=t;break}O=n.return}}function Co(e){for(;O!==null;){var n=O;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Fl(4,n)}catch(o){Z(n,t,o)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var l=n.return;try{r.componentDidMount()}catch(o){Z(n,l,o)}}var i=n.return;try{os(n)}catch(o){Z(n,i,o)}break;case 5:var a=n.return;try{os(n)}catch(o){Z(n,a,o)}}}catch(o){Z(n,n.return,o)}if(n===e){O=null;break}var u=n.sibling;if(u!==null){u.return=n.return,O=u;break}O=n.return}}var _h=Math.ceil,jl=un.ReactCurrentDispatcher,sa=un.ReactCurrentOwner,De=un.ReactCurrentBatchConfig,U=0,ie=null,ee=null,oe=0,Ee=0,ct=Pn(0),re=0,vr=null,qn=0,Al=0,aa=0,Zt=null,ke=null,oa=0,St=1/0,Je=null,Nl=!1,ds=null,Nn=null,$r=!1,vn=null,Sl=0,Jt=0,fs=null,el=-1,nl=0;function me(){return U&6?J():el!==-1?el:el=J()}function Sn(e){return e.mode&1?U&2&&oe!==0?oe&-oe:dh.transition!==null?(nl===0&&(nl=Cu()),nl):(e=V,e!==0||(e=window.event,e=e===void 0?16:Ru(e.type)),e):1}function Be(e,n,t,r){if(50<Jt)throw Jt=0,fs=null,Error(T(185));kr(e,t,r),(!(U&2)||e!==ie)&&(e===ie&&(!(U&2)&&(Al|=t),re===4&&pn(e,oe)),Se(e,r),t===1&&U===0&&!(n.mode&1)&&(St=J()+500,Ml&&In()))}function Se(e,n){var t=e.callbackNode;df(e,n);var r=al(e,e===ie?oe:0);if(r===0)t!==null&&Ma(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Ma(t),n===1)e.tag===0?ch(_o.bind(null,e)):Ju(_o.bind(null,e)),sh(function(){!(U&6)&&In()}),t=null;else{switch(_u(r)){case 1:t=Rs;break;case 4:t=Eu;break;case 16:t=sl;break;case 536870912:t=Tu;break;default:t=sl}t=Yc(t,Bc.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Bc(e,n){if(el=-1,nl=0,U&6)throw Error(T(327));var t=e.callbackNode;if(yt()&&e.callbackNode!==t)return null;var r=al(e,e===ie?oe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=El(e,r);else{n=r;var l=U;U|=2;var i=Wc();(ie!==e||oe!==n)&&(Je=null,St=J()+500,Un(e,n));do try{Ph();break}catch(u){qc(e,u)}while(!0);Qs(),jl.current=i,U=l,ee!==null?n=0:(ie=null,oe=0,n=re)}if(n!==0){if(n===2&&(l=Ai(e),l!==0&&(r=l,n=hs(e,l))),n===1)throw t=vr,Un(e,0),pn(e,r),Se(e,J()),t;if(n===6)pn(e,r);else{if(l=e.current.alternate,!(r&30)&&!zh(l)&&(n=El(e,r),n===2&&(i=Ai(e),i!==0&&(r=i,n=hs(e,i))),n===1))throw t=vr,Un(e,0),pn(e,r),Se(e,J()),t;switch(e.finishedWork=l,e.finishedLanes=r,n){case 0:case 1:throw Error(T(345));case 2:Dn(e,ke,Je);break;case 3:if(pn(e,r),(r&130023424)===r&&(n=oa+500-J(),10<n)){if(al(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){me(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Qi(Dn.bind(null,e,ke,Je),n);break}Dn(e,ke,Je);break;case 4:if(pn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,l=-1;0<r;){var a=31-$e(r);i=1<<a,a=n[a],a>l&&(l=a),r&=~i}if(r=l,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*_h(r/1960))-r,10<r){e.timeoutHandle=Qi(Dn.bind(null,e,ke,Je),r);break}Dn(e,ke,Je);break;case 5:Dn(e,ke,Je);break;default:throw Error(T(329))}}}return Se(e,J()),e.callbackNode===t?Bc.bind(null,e):null}function hs(e,n){var t=Zt;return e.current.memoizedState.isDehydrated&&(Un(e,n).flags|=256),e=El(e,n),e!==2&&(n=ke,ke=t,n!==null&&ps(n)),e}function ps(e){ke===null?ke=e:ke.push.apply(ke,e)}function zh(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var l=t[r],i=l.getSnapshot;l=l.value;try{if(!qe(i(),l))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function pn(e,n){for(n&=~aa,n&=~Al,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-$e(n),r=1<<t;e[t]=-1,n&=~r}}function _o(e){if(U&6)throw Error(T(327));yt();var n=al(e,0);if(!(n&1))return Se(e,J()),null;var t=El(e,n);if(e.tag!==0&&t===2){var r=Ai(e);r!==0&&(n=r,t=hs(e,r))}if(t===1)throw t=vr,Un(e,0),pn(e,n),Se(e,J()),t;if(t===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Dn(e,ke,Je),Se(e,J()),null}function ua(e,n){var t=U;U|=1;try{return e(n)}finally{U=t,U===0&&(St=J()+500,Ml&&In())}}function Wn(e){vn!==null&&vn.tag===0&&!(U&6)&&yt();var n=U;U|=1;var t=De.transition,r=V;try{if(De.transition=null,V=1,e)return e()}finally{V=r,De.transition=t,U=n,!(U&6)&&In()}}function ca(){Ee=ct.current,Q(ct)}function Un(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,ih(t)),ee!==null)for(t=ee.return;t!==null;){var r=t;switch(Bs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&fl();break;case 3:jt(),Q(je),Q(he),Js();break;case 5:Zs(r);break;case 4:jt();break;case 13:Q(G);break;case 19:Q(G);break;case 10:Ks(r.type._context);break;case 22:case 23:ca()}t=t.return}if(ie=e,ee=e=En(e.current,null),oe=Ee=n,re=0,vr=null,aa=Al=qn=0,ke=Zt=null,Fn!==null){for(n=0;n<Fn.length;n++)if(t=Fn[n],r=t.interleaved,r!==null){t.interleaved=null;var l=r.next,i=t.pending;if(i!==null){var a=i.next;i.next=l,r.next=a}t.pending=r}Fn=null}return e}function qc(e,n){do{var t=ee;try{if(Qs(),Yr.current=wl,kl){for(var r=X.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}kl=!1}if(Bn=0,le=te=X=null,Xt=!1,hr=0,sa.current=null,t===null||t.return===null){re=1,vr=n,ee=null;break}e:{var i=e,a=t.return,u=t,o=n;if(n=oe,u.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){var c=o,h=u,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var x=mo(a);if(x!==null){x.flags&=-257,vo(x,a,u,i,n),x.mode&1&&po(i,c,n),n=x,o=c;var k=n.updateQueue;if(k===null){var w=new Set;w.add(o),n.updateQueue=w}else k.add(o);break e}else{if(!(n&1)){po(i,c,n),da();break e}o=Error(T(426))}}else if(K&&u.mode&1){var g=mo(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),vo(g,a,u,i,n),qs(Nt(o,u));break e}}i=o=Nt(o,u),re!==4&&(re=2),Zt===null?Zt=[i]:Zt.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var d=_c(i,o,n);ao(i,d);break e;case 1:u=o;var f=i.type,v=i.stateNode;if(!(i.flags&128)&&(typeof f.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Nn===null||!Nn.has(v)))){i.flags|=65536,n&=-n,i.lanes|=n;var N=zc(i,u,n);ao(i,N);break e}}i=i.return}while(i!==null)}Kc(t)}catch(C){n=C,ee===t&&t!==null&&(ee=t=t.return);continue}break}while(!0)}function Wc(){var e=jl.current;return jl.current=wl,e===null?wl:e}function da(){(re===0||re===3||re===2)&&(re=4),ie===null||!(qn&268435455)&&!(Al&268435455)||pn(ie,oe)}function El(e,n){var t=U;U|=2;var r=Wc();(ie!==e||oe!==n)&&(Je=null,Un(e,n));do try{Lh();break}catch(l){qc(e,l)}while(!0);if(Qs(),U=t,jl.current=r,ee!==null)throw Error(T(261));return ie=null,oe=0,re}function Lh(){for(;ee!==null;)Qc(ee)}function Ph(){for(;ee!==null&&!nf();)Qc(ee)}function Qc(e){var n=Xc(e.alternate,e,Ee);e.memoizedProps=e.pendingProps,n===null?Kc(e):ee=n,sa.current=null}function Kc(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Sh(t,n),t!==null){t.flags&=32767,ee=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{re=6,ee=null;return}}else if(t=Nh(t,n,Ee),t!==null){ee=t;return}if(n=n.sibling,n!==null){ee=n;return}ee=n=e}while(n!==null);re===0&&(re=5)}function Dn(e,n,t){var r=V,l=De.transition;try{De.transition=null,V=1,Ih(e,n,t,r)}finally{De.transition=l,V=r}return null}function Ih(e,n,t,r){do yt();while(vn!==null);if(U&6)throw Error(T(327));t=e.finishedWork;var l=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(ff(e,i),e===ie&&(ee=ie=null,oe=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||$r||($r=!0,Yc(sl,function(){return yt(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=De.transition,De.transition=null;var a=V;V=1;var u=U;U|=4,sa.current=null,Th(e,t),Hc(t,e),Zf(qi),ol=!!Bi,qi=Bi=null,e.current=t,Ch(t),tf(),U=u,V=a,De.transition=i}else e.current=t;if($r&&($r=!1,vn=e,Sl=l),i=e.pendingLanes,i===0&&(Nn=null),sf(t.stateNode),Se(e,J()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)l=n[t],r(l.value,{componentStack:l.stack,digest:l.digest});if(Nl)throw Nl=!1,e=ds,ds=null,e;return Sl&1&&e.tag!==0&&yt(),i=e.pendingLanes,i&1?e===fs?Jt++:(Jt=0,fs=e):Jt=0,In(),null}function yt(){if(vn!==null){var e=_u(Sl),n=De.transition,t=V;try{if(De.transition=null,V=16>e?16:e,vn===null)var r=!1;else{if(e=vn,vn=null,Sl=0,U&6)throw Error(T(331));var l=U;for(U|=4,O=e.current;O!==null;){var i=O,a=i.child;if(O.flags&16){var u=i.deletions;if(u!==null){for(var o=0;o<u.length;o++){var c=u[o];for(O=c;O!==null;){var h=O;switch(h.tag){case 0:case 11:case 15:Yt(8,h,i)}var p=h.child;if(p!==null)p.return=h,O=p;else for(;O!==null;){h=O;var m=h.sibling,x=h.return;if(Ac(h),h===c){O=null;break}if(m!==null){m.return=x,O=m;break}O=x}}}var k=i.alternate;if(k!==null){var w=k.child;if(w!==null){k.child=null;do{var g=w.sibling;w.sibling=null,w=g}while(w!==null)}}O=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,O=a;else e:for(;O!==null;){if(i=O,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Yt(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,O=d;break e}O=i.return}}var f=e.current;for(O=f;O!==null;){a=O;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,O=v;else e:for(a=f;O!==null;){if(u=O,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Fl(9,u)}}catch(C){Z(u,u.return,C)}if(u===a){O=null;break e}var N=u.sibling;if(N!==null){N.return=u.return,O=N;break e}O=u.return}}if(U=l,In(),Xe&&typeof Xe.onPostCommitFiberRoot=="function")try{Xe.onPostCommitFiberRoot(Ll,e)}catch{}r=!0}return r}finally{V=t,De.transition=n}}return!1}function zo(e,n,t){n=Nt(t,n),n=_c(e,n,1),e=jn(e,n,1),n=me(),e!==null&&(kr(e,1,n),Se(e,n))}function Z(e,n,t){if(e.tag===3)zo(e,e,t);else for(;n!==null;){if(n.tag===3){zo(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Nn===null||!Nn.has(r))){e=Nt(t,e),e=zc(n,e,1),n=jn(n,e,1),e=me(),n!==null&&(kr(n,1,e),Se(n,e));break}}n=n.return}}function Oh(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=me(),e.pingedLanes|=e.suspendedLanes&t,ie===e&&(oe&t)===t&&(re===4||re===3&&(oe&130023424)===oe&&500>J()-oa?Un(e,0):aa|=t),Se(e,n)}function Gc(e,n){n===0&&(e.mode&1?(n=Or,Or<<=1,!(Or&130023424)&&(Or=4194304)):n=1);var t=me();e=an(e,n),e!==null&&(kr(e,n,t),Se(e,t))}function Rh(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Gc(e,t)}function Mh(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(n),Gc(e,t)}var Xc;Xc=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||je.current)we=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return we=!1,jh(e,n,t);we=!!(e.flags&131072)}else we=!1,K&&n.flags&1048576&&ec(n,ml,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Jr(e,n),e=n.pendingProps;var l=xt(n,he.current);vt(n,t),l=na(null,n,r,e,l,t);var i=ta();return n.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ne(r)?(i=!0,hl(n)):i=!1,n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Xs(n),l.updater=bl,n.stateNode=l,l._reactInternals=n,es(n,r,e,t),n=rs(null,n,r,!0,i,t)):(n.tag=0,K&&i&&$s(n),pe(null,n,l,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Jr(e,n),e=n.pendingProps,l=r._init,r=l(r._payload),n.type=r,l=n.tag=bh(r),e=Ue(r,e),l){case 0:n=ts(null,n,r,e,t);break e;case 1:n=xo(null,n,r,e,t);break e;case 11:n=yo(null,n,r,e,t);break e;case 14:n=go(null,n,r,Ue(r.type,e),t);break e}throw Error(T(306,r,""))}return n;case 0:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Ue(r,l),ts(e,n,r,l,t);case 1:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Ue(r,l),xo(e,n,r,l,t);case 3:e:{if(Oc(n),e===null)throw Error(T(387));r=n.pendingProps,i=n.memoizedState,l=i.element,sc(e,n),gl(n,r,null,t);var a=n.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){l=Nt(Error(T(423)),n),n=ko(e,n,r,t,l);break e}else if(r!==l){l=Nt(Error(T(424)),n),n=ko(e,n,r,t,l);break e}else for(Te=wn(n.stateNode.containerInfo.firstChild),Ce=n,K=!0,He=null,t=lc(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(kt(),r===l){n=on(e,n,t);break e}pe(e,n,r,t)}n=n.child}return n;case 5:return ac(n),e===null&&Yi(n),r=n.type,l=n.pendingProps,i=e!==null?e.memoizedProps:null,a=l.children,Wi(r,l)?a=null:i!==null&&Wi(r,i)&&(n.flags|=32),Ic(e,n),pe(e,n,a,t),n.child;case 6:return e===null&&Yi(n),null;case 13:return Rc(e,n,t);case 4:return Ys(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=wt(n,null,r,t):pe(e,n,r,t),n.child;case 11:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Ue(r,l),yo(e,n,r,l,t);case 7:return pe(e,n,n.pendingProps,t),n.child;case 8:return pe(e,n,n.pendingProps.children,t),n.child;case 12:return pe(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,l=n.pendingProps,i=n.memoizedProps,a=l.value,q(vl,r._currentValue),r._currentValue=a,i!==null)if(qe(i.value,a)){if(i.children===l.children&&!je.current){n=on(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var u=i.dependencies;if(u!==null){a=i.child;for(var o=u.firstContext;o!==null;){if(o.context===r){if(i.tag===1){o=rn(-1,t&-t),o.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?o.next=o:(o.next=h.next,h.next=o),c.pending=o}}i.lanes|=t,o=i.alternate,o!==null&&(o.lanes|=t),Zi(i.return,t,n),u.lanes|=t;break}o=o.next}}else if(i.tag===10)a=i.type===n.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(T(341));a.lanes|=t,u=a.alternate,u!==null&&(u.lanes|=t),Zi(a,t,n),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===n){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}pe(e,n,l.children,t),n=n.child}return n;case 9:return l=n.type,r=n.pendingProps.children,vt(n,t),l=be(l),r=r(l),n.flags|=1,pe(e,n,r,t),n.child;case 14:return r=n.type,l=Ue(r,n.pendingProps),l=Ue(r.type,l),go(e,n,r,l,t);case 15:return Lc(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Ue(r,l),Jr(e,n),n.tag=1,Ne(r)?(e=!0,hl(n)):e=!1,vt(n,t),Cc(n,r,l),es(n,r,l,t),rs(null,n,r,!0,e,t);case 19:return Mc(e,n,t);case 22:return Pc(e,n,t)}throw Error(T(156,n.tag))};function Yc(e,n){return Su(e,n)}function Dh(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Re(e,n,t,r){return new Dh(e,n,t,r)}function fa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function bh(e){if(typeof e=="function")return fa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ps)return 11;if(e===Is)return 14}return 2}function En(e,n){var t=e.alternate;return t===null?(t=Re(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function tl(e,n,t,r,l,i){var a=2;if(r=e,typeof e=="function")fa(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case et:return Vn(t.children,l,i,n);case Ls:a=8,l|=8;break;case Si:return e=Re(12,t,n,l|2),e.elementType=Si,e.lanes=i,e;case Ei:return e=Re(13,t,n,l),e.elementType=Ei,e.lanes=i,e;case Ti:return e=Re(19,t,n,l),e.elementType=Ti,e.lanes=i,e;case au:return Ul(t,l,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case iu:a=10;break e;case su:a=9;break e;case Ps:a=11;break e;case Is:a=14;break e;case dn:a=16,r=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return n=Re(a,t,n,l),n.elementType=e,n.type=r,n.lanes=i,n}function Vn(e,n,t,r){return e=Re(7,e,r,n),e.lanes=t,e}function Ul(e,n,t,r){return e=Re(22,e,r,n),e.elementType=au,e.lanes=t,e.stateNode={isHidden:!1},e}function yi(e,n,t){return e=Re(6,e,null,n),e.lanes=t,e}function gi(e,n,t){return n=Re(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Fh(e,n,t,r,l){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zl(0),this.expirationTimes=Zl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function ha(e,n,t,r,l,i,a,u,o){return e=new Fh(e,n,t,u,o),n===1?(n=1,i===!0&&(n|=8)):n=0,i=Re(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xs(i),e}function Ah(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Jn,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Zc(e){if(!e)return _n;e=e._reactInternals;e:{if(Kn(e)!==e||e.tag!==1)throw Error(T(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ne(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(T(171))}if(e.tag===1){var t=e.type;if(Ne(t))return Zu(e,t,n)}return n}function Jc(e,n,t,r,l,i,a,u,o){return e=ha(t,r,!0,e,l,i,a,u,o),e.context=Zc(null),t=e.current,r=me(),l=Sn(t),i=rn(r,l),i.callback=n??null,jn(t,i,l),e.current.lanes=l,kr(e,l,r),Se(e,r),e}function Vl(e,n,t,r){var l=n.current,i=me(),a=Sn(l);return t=Zc(t),n.context===null?n.context=t:n.pendingContext=t,n=rn(i,a),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=jn(l,n,a),e!==null&&(Be(e,l,a,i),Xr(e,l,a)),a}function Tl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Lo(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function pa(e,n){Lo(e,n),(e=e.alternate)&&Lo(e,n)}function Uh(){return null}var ed=typeof reportError=="function"?reportError:function(e){console.error(e)};function ma(e){this._internalRoot=e}Hl.prototype.render=ma.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(T(409));Vl(e,n,null,null)};Hl.prototype.unmount=ma.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Wn(function(){Vl(null,e,null,null)}),n[sn]=null}};function Hl(e){this._internalRoot=e}Hl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Pu();e={blockedOn:null,target:e,priority:n};for(var t=0;t<hn.length&&n!==0&&n<hn[t].priority;t++);hn.splice(t,0,e),t===0&&Ou(e)}};function va(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function $l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Po(){}function Vh(e,n,t,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var c=Tl(a);i.call(c)}}var a=Jc(n,r,e,0,null,!1,!1,"",Po);return e._reactRootContainer=a,e[sn]=a.current,or(e.nodeType===8?e.parentNode:e),Wn(),a}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var u=r;r=function(){var c=Tl(o);u.call(c)}}var o=ha(e,0,!1,null,null,!1,!1,"",Po);return e._reactRootContainer=o,e[sn]=o.current,or(e.nodeType===8?e.parentNode:e),Wn(function(){Vl(n,o,t,r)}),o}function Bl(e,n,t,r,l){var i=t._reactRootContainer;if(i){var a=i;if(typeof l=="function"){var u=l;l=function(){var o=Tl(a);u.call(o)}}Vl(n,a,e,l)}else a=Vh(t,n,e,l,r);return Tl(a)}zu=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=$t(n.pendingLanes);t!==0&&(Ms(n,t|1),Se(n,J()),!(U&6)&&(St=J()+500,In()))}break;case 13:Wn(function(){var r=an(e,1);if(r!==null){var l=me();Be(r,e,1,l)}}),pa(e,1)}};Ds=function(e){if(e.tag===13){var n=an(e,134217728);if(n!==null){var t=me();Be(n,e,134217728,t)}pa(e,134217728)}};Lu=function(e){if(e.tag===13){var n=Sn(e),t=an(e,n);if(t!==null){var r=me();Be(t,e,n,r)}pa(e,n)}};Pu=function(){return V};Iu=function(e,n){var t=V;try{return V=e,n()}finally{V=t}};Di=function(e,n,t){switch(n){case"input":if(zi(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=Rl(r);if(!l)throw Error(T(90));uu(r),zi(r,l)}}}break;case"textarea":du(e,t);break;case"select":n=t.value,n!=null&&ft(e,!!t.multiple,n,!1)}};gu=ua;xu=Wn;var Hh={usingClientEntryPoint:!1,Events:[jr,lt,Rl,vu,yu,ua]},Ut={findFiberByHostInstance:bn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$h={bundleType:Ut.bundleType,version:Ut.version,rendererPackageName:Ut.rendererPackageName,rendererConfig:Ut.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:un.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ju(e),e===null?null:e.stateNode},findFiberByHostInstance:Ut.findFiberByHostInstance||Uh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Br=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Br.isDisabled&&Br.supportsFiber)try{Ll=Br.inject($h),Xe=Br}catch{}}ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hh;ze.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!va(n))throw Error(T(200));return Ah(e,n,null,t)};ze.createRoot=function(e,n){if(!va(e))throw Error(T(299));var t=!1,r="",l=ed;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),n=ha(e,1,!1,null,null,t,!1,r,l),e[sn]=n.current,or(e.nodeType===8?e.parentNode:e),new ma(n)};ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=ju(n),e=e===null?null:e.stateNode,e};ze.flushSync=function(e){return Wn(e)};ze.hydrate=function(e,n,t){if(!$l(n))throw Error(T(200));return Bl(null,e,n,!0,t)};ze.hydrateRoot=function(e,n,t){if(!va(e))throw Error(T(405));var r=t!=null&&t.hydratedSources||null,l=!1,i="",a=ed;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),n=Jc(n,null,e,1,t??null,l,!1,i,a),e[sn]=n.current,or(e),r)for(e=0;e<r.length;e++)t=r[e],l=t._getVersion,l=l(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,l]:n.mutableSourceEagerHydrationData.push(t,l);return new Hl(n)};ze.render=function(e,n,t){if(!$l(n))throw Error(T(200));return Bl(null,e,n,!1,t)};ze.unmountComponentAtNode=function(e){if(!$l(e))throw Error(T(40));return e._reactRootContainer?(Wn(function(){Bl(null,null,e,!1,function(){e._reactRootContainer=null,e[sn]=null})}),!0):!1};ze.unstable_batchedUpdates=ua;ze.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!$l(t))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return Bl(e,n,t,!1,r)};ze.version="18.3.1-next-f1338f8080-20240426";function nd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nd)}catch(e){console.error(e)}}nd(),nu.exports=ze;var Bh=nu.exports,Io=Bh;ji.createRoot=Io.createRoot,ji.hydrateRoot=Io.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yr(){return yr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},yr.apply(this,arguments)}var yn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(yn||(yn={}));const Oo="popstate";function qh(e){e===void 0&&(e={});function n(r,l){let{pathname:i,search:a,hash:u}=r.location;return ms("",{pathname:i,search:a,hash:u},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function t(r,l){return typeof l=="string"?l:Cl(l)}return Qh(n,t,null,e)}function ne(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function ya(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Wh(){return Math.random().toString(36).substr(2,8)}function Ro(e,n){return{usr:e.state,key:e.key,idx:n}}function ms(e,n,t,r){return t===void 0&&(t=null),yr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?zt(n):n,{state:t,key:n&&n.key||r||Wh()})}function Cl(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function zt(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function Qh(e,n,t,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:i=!1}=r,a=l.history,u=yn.Pop,o=null,c=h();c==null&&(c=0,a.replaceState(yr({},a.state,{idx:c}),""));function h(){return(a.state||{idx:null}).idx}function p(){u=yn.Pop;let g=h(),d=g==null?null:g-c;c=g,o&&o({action:u,location:w.location,delta:d})}function m(g,d){u=yn.Push;let f=ms(w.location,g,d);c=h()+1;let v=Ro(f,c),N=w.createHref(f);try{a.pushState(v,"",N)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;l.location.assign(N)}i&&o&&o({action:u,location:w.location,delta:1})}function x(g,d){u=yn.Replace;let f=ms(w.location,g,d);c=h();let v=Ro(f,c),N=w.createHref(f);a.replaceState(v,"",N),i&&o&&o({action:u,location:w.location,delta:0})}function k(g){let d=l.location.origin!=="null"?l.location.origin:l.location.href,f=typeof g=="string"?g:Cl(g);return f=f.replace(/ $/,"%20"),ne(d,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,d)}let w={get action(){return u},get location(){return e(l,a)},listen(g){if(o)throw new Error("A history only accepts one active listener");return l.addEventListener(Oo,p),o=g,()=>{l.removeEventListener(Oo,p),o=null}},createHref(g){return n(l,g)},createURL:k,encodeLocation(g){let d=k(g);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:m,replace:x,go(g){return a.go(g)}};return w}var Mo;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Mo||(Mo={}));function Kh(e,n,t){return t===void 0&&(t="/"),Gh(e,n,t)}function Gh(e,n,t,r){let l=typeof n=="string"?zt(n):n,i=ga(l.pathname||"/",t);if(i==null)return null;let a=td(e);Xh(a);let u=null;for(let o=0;u==null&&o<a.length;++o){let c=op(i);u=ip(a[o],c)}return u}function td(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let l=(i,a,u)=>{let o={relativePath:u===void 0?i.path||"":u,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};o.relativePath.startsWith("/")&&(ne(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(r.length));let c=Tn([r,o.relativePath]),h=t.concat(o);i.children&&i.children.length>0&&(ne(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),td(i.children,n,h,c)),!(i.path==null&&!i.index)&&n.push({path:c,score:rp(c,i.index),routesMeta:h})};return e.forEach((i,a)=>{var u;if(i.path===""||!((u=i.path)!=null&&u.includes("?")))l(i,a);else for(let o of rd(i.path))l(i,a,o)}),n}function rd(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,l=t.endsWith("?"),i=t.replace(/\?$/,"");if(r.length===0)return l?[i,""]:[i];let a=rd(r.join("/")),u=[];return u.push(...a.map(o=>o===""?i:[i,o].join("/"))),l&&u.push(...a),u.map(o=>e.startsWith("/")&&o===""?"/":o)}function Xh(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:lp(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const Yh=/^:[\w-]+$/,Zh=3,Jh=2,ep=1,np=10,tp=-2,Do=e=>e==="*";function rp(e,n){let t=e.split("/"),r=t.length;return t.some(Do)&&(r+=tp),n&&(r+=Jh),t.filter(l=>!Do(l)).reduce((l,i)=>l+(Yh.test(i)?Zh:i===""?ep:np),r)}function lp(e,n){return e.length===n.length&&e.slice(0,-1).every((r,l)=>r===n[l])?e[e.length-1]-n[n.length-1]:0}function ip(e,n,t){let{routesMeta:r}=e,l={},i="/",a=[];for(let u=0;u<r.length;++u){let o=r[u],c=u===r.length-1,h=i==="/"?n:n.slice(i.length)||"/",p=sp({path:o.relativePath,caseSensitive:o.caseSensitive,end:c},h),m=o.route;if(!p)return null;Object.assign(l,p.params),a.push({params:l,pathname:Tn([i,p.pathname]),pathnameBase:hp(Tn([i,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(i=Tn([i,p.pathnameBase]))}return a}function sp(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=ap(e.path,e.caseSensitive,e.end),l=n.match(t);if(!l)return null;let i=l[0],a=i.replace(/(.)\/+$/,"$1"),u=l.slice(1);return{params:r.reduce((c,h,p)=>{let{paramName:m,isOptional:x}=h;if(m==="*"){let w=u[p]||"";a=i.slice(0,i.length-w.length).replace(/(.)\/+$/,"$1")}const k=u[p];return x&&!k?c[m]=void 0:c[m]=(k||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:a,pattern:e}}function ap(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),ya(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,u,o)=>(r.push({paramName:u,isOptional:o!=null}),o?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,n?void 0:"i"),r]}function op(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return ya(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function ga(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}const up=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,cp=e=>up.test(e);function dp(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:l=""}=typeof e=="string"?zt(e):e,i;if(t)if(cp(t))i=t;else{if(t.includes("//")){let a=t;t=t.replace(/\/\/+/g,"/"),ya(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+t))}t.startsWith("/")?i=bo(t.substring(1),"/"):i=bo(t,n)}else i=n;return{pathname:i,search:pp(r),hash:mp(l)}}function bo(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?t.length>1&&t.pop():l!=="."&&t.push(l)}),t.length>1?t.join("/"):"/"}function xi(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function fp(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function ld(e,n){let t=fp(e);return n?t.map((r,l)=>l===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function id(e,n,t,r){r===void 0&&(r=!1);let l;typeof e=="string"?l=zt(e):(l=yr({},e),ne(!l.pathname||!l.pathname.includes("?"),xi("?","pathname","search",l)),ne(!l.pathname||!l.pathname.includes("#"),xi("#","pathname","hash",l)),ne(!l.search||!l.search.includes("#"),xi("#","search","hash",l)));let i=e===""||l.pathname==="",a=i?"/":l.pathname,u;if(a==null)u=t;else{let p=n.length-1;if(!r&&a.startsWith("..")){let m=a.split("/");for(;m[0]==="..";)m.shift(),p-=1;l.pathname=m.join("/")}u=p>=0?n[p]:"/"}let o=dp(l,u),c=a&&a!=="/"&&a.endsWith("/"),h=(i||a===".")&&t.endsWith("/");return!o.pathname.endsWith("/")&&(c||h)&&(o.pathname+="/"),o}const Tn=e=>e.join("/").replace(/\/\/+/g,"/"),hp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),pp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,mp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function vp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const sd=["post","put","patch","delete"];new Set(sd);const yp=["get",...sd];new Set(yp);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gr(){return gr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},gr.apply(this,arguments)}const xa=y.createContext(null),gp=y.createContext(null),Gn=y.createContext(null),ql=y.createContext(null),Xn=y.createContext({outlet:null,matches:[],isDataRoute:!1}),ad=y.createContext(null);function xp(e,n){let{relative:t}=n===void 0?{}:n;Sr()||ne(!1);let{basename:r,navigator:l}=y.useContext(Gn),{hash:i,pathname:a,search:u}=ud(e,{relative:t}),o=a;return r!=="/"&&(o=a==="/"?r:Tn([r,a])),l.createHref({pathname:o,search:u,hash:i})}function Sr(){return y.useContext(ql)!=null}function Er(){return Sr()||ne(!1),y.useContext(ql).location}function od(e){y.useContext(Gn).static||y.useLayoutEffect(e)}function kp(){let{isDataRoute:e}=y.useContext(Xn);return e?Op():wp()}function wp(){Sr()||ne(!1);let e=y.useContext(xa),{basename:n,future:t,navigator:r}=y.useContext(Gn),{matches:l}=y.useContext(Xn),{pathname:i}=Er(),a=JSON.stringify(ld(l,t.v7_relativeSplatPath)),u=y.useRef(!1);return od(()=>{u.current=!0}),y.useCallback(function(c,h){if(h===void 0&&(h={}),!u.current)return;if(typeof c=="number"){r.go(c);return}let p=id(c,JSON.parse(a),i,h.relative==="path");e==null&&n!=="/"&&(p.pathname=p.pathname==="/"?n:Tn([n,p.pathname])),(h.replace?r.replace:r.push)(p,h.state,h)},[n,r,a,i,e])}function ud(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=y.useContext(Gn),{matches:l}=y.useContext(Xn),{pathname:i}=Er(),a=JSON.stringify(ld(l,r.v7_relativeSplatPath));return y.useMemo(()=>id(e,JSON.parse(a),i,t==="path"),[e,a,i,t])}function jp(e,n){return Np(e,n)}function Np(e,n,t,r){Sr()||ne(!1);let{navigator:l}=y.useContext(Gn),{matches:i}=y.useContext(Xn),a=i[i.length-1],u=a?a.params:{};a&&a.pathname;let o=a?a.pathnameBase:"/";a&&a.route;let c=Er(),h;if(n){var p;let g=typeof n=="string"?zt(n):n;o==="/"||(p=g.pathname)!=null&&p.startsWith(o)||ne(!1),h=g}else h=c;let m=h.pathname||"/",x=m;if(o!=="/"){let g=o.replace(/^\//,"").split("/");x="/"+m.replace(/^\//,"").split("/").slice(g.length).join("/")}let k=Kh(e,{pathname:x}),w=_p(k&&k.map(g=>Object.assign({},g,{params:Object.assign({},u,g.params),pathname:Tn([o,l.encodeLocation?l.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?o:Tn([o,l.encodeLocation?l.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),i,t,r);return n&&w?y.createElement(ql.Provider,{value:{location:gr({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:yn.Pop}},w):w}function Sp(){let e=Ip(),n=vp(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},n),t?y.createElement("pre",{style:l},t):null,null)}const Ep=y.createElement(Sp,null);class Tp extends y.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?y.createElement(Xn.Provider,{value:this.props.routeContext},y.createElement(ad.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Cp(e){let{routeContext:n,match:t,children:r}=e,l=y.useContext(xa);return l&&l.static&&l.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=t.route.id),y.createElement(Xn.Provider,{value:n},r)}function _p(e,n,t,r){var l;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var i;if(!t)return null;if(t.errors)e=t.matches;else if((i=r)!=null&&i.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let a=e,u=(l=t)==null?void 0:l.errors;if(u!=null){let h=a.findIndex(p=>p.route.id&&(u==null?void 0:u[p.route.id])!==void 0);h>=0||ne(!1),a=a.slice(0,Math.min(a.length,h+1))}let o=!1,c=-1;if(t&&r&&r.v7_partialHydration)for(let h=0;h<a.length;h++){let p=a[h];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=h),p.route.id){let{loaderData:m,errors:x}=t,k=p.route.loader&&m[p.route.id]===void 0&&(!x||x[p.route.id]===void 0);if(p.route.lazy||k){o=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((h,p,m)=>{let x,k=!1,w=null,g=null;t&&(x=u&&p.route.id?u[p.route.id]:void 0,w=p.route.errorElement||Ep,o&&(c<0&&m===0?(Rp("route-fallback"),k=!0,g=null):c===m&&(k=!0,g=p.route.hydrateFallbackElement||null)));let d=n.concat(a.slice(0,m+1)),f=()=>{let v;return x?v=w:k?v=g:p.route.Component?v=y.createElement(p.route.Component,null):p.route.element?v=p.route.element:v=h,y.createElement(Cp,{match:p,routeContext:{outlet:h,matches:d,isDataRoute:t!=null},children:v})};return t&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?y.createElement(Tp,{location:t.location,revalidation:t.revalidation,component:w,error:x,children:f(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):f()},null)}var cd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(cd||{}),dd=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(dd||{});function zp(e){let n=y.useContext(xa);return n||ne(!1),n}function Lp(e){let n=y.useContext(gp);return n||ne(!1),n}function Pp(e){let n=y.useContext(Xn);return n||ne(!1),n}function fd(e){let n=Pp(),t=n.matches[n.matches.length-1];return t.route.id||ne(!1),t.route.id}function Ip(){var e;let n=y.useContext(ad),t=Lp(),r=fd();return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function Op(){let{router:e}=zp(cd.UseNavigateStable),n=fd(dd.UseNavigateStable),t=y.useRef(!1);return od(()=>{t.current=!0}),y.useCallback(function(l,i){i===void 0&&(i={}),t.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,gr({fromRouteId:n},i)))},[e,n])}const Fo={};function Rp(e,n,t){Fo[e]||(Fo[e]=!0)}function Mp(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Pe(e){ne(!1)}function Dp(e){let{basename:n="/",children:t=null,location:r,navigationType:l=yn.Pop,navigator:i,static:a=!1,future:u}=e;Sr()&&ne(!1);let o=n.replace(/^\/*/,"/"),c=y.useMemo(()=>({basename:o,navigator:i,static:a,future:gr({v7_relativeSplatPath:!1},u)}),[o,u,i,a]);typeof r=="string"&&(r=zt(r));let{pathname:h="/",search:p="",hash:m="",state:x=null,key:k="default"}=r,w=y.useMemo(()=>{let g=ga(h,o);return g==null?null:{location:{pathname:g,search:p,hash:m,state:x,key:k},navigationType:l}},[o,h,p,m,x,k,l]);return w==null?null:y.createElement(Gn.Provider,{value:c},y.createElement(ql.Provider,{children:t,value:w}))}function bp(e){let{children:n,location:t}=e;return jp(vs(n),t)}new Promise(()=>{});function vs(e,n){n===void 0&&(n=[]);let t=[];return y.Children.forEach(e,(r,l)=>{if(!y.isValidElement(r))return;let i=[...n,l];if(r.type===y.Fragment){t.push.apply(t,vs(r.props.children,i));return}r.type!==Pe&&ne(!1),!r.props.index||!r.props.children||ne(!1);let a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=vs(r.props.children,i)),t.push(a)}),t}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ys(){return ys=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ys.apply(this,arguments)}function Fp(e,n){if(e==null)return{};var t={},r=Object.keys(e),l,i;for(i=0;i<r.length;i++)l=r[i],!(n.indexOf(l)>=0)&&(t[l]=e[l]);return t}function Ap(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Up(e,n){return e.button===0&&(!n||n==="_self")&&!Ap(e)}const Vp=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Hp="6";try{window.__reactRouterVersion=Hp}catch{}const $p="startTransition",Ao=Id[$p];function Bp(e){let{basename:n,children:t,future:r,window:l}=e,i=y.useRef();i.current==null&&(i.current=qh({window:l,v5Compat:!0}));let a=i.current,[u,o]=y.useState({action:a.action,location:a.location}),{v7_startTransition:c}=r||{},h=y.useCallback(p=>{c&&Ao?Ao(()=>o(p)):o(p)},[o,c]);return y.useLayoutEffect(()=>a.listen(h),[a,h]),y.useEffect(()=>Mp(r),[r]),y.createElement(Dp,{basename:n,children:t,location:u.location,navigationType:u.action,navigator:a,future:r})}const qp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Wp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Et=y.forwardRef(function(n,t){let{onClick:r,relative:l,reloadDocument:i,replace:a,state:u,target:o,to:c,preventScrollReset:h,viewTransition:p}=n,m=Fp(n,Vp),{basename:x}=y.useContext(Gn),k,w=!1;if(typeof c=="string"&&Wp.test(c)&&(k=c,qp))try{let v=new URL(window.location.href),N=c.startsWith("//")?new URL(v.protocol+c):new URL(c),C=ga(N.pathname,x);N.origin===v.origin&&C!=null?c=C+N.search+N.hash:w=!0}catch{}let g=xp(c,{relative:l}),d=Qp(c,{replace:a,state:u,target:o,preventScrollReset:h,relative:l,viewTransition:p});function f(v){r&&r(v),v.defaultPrevented||d(v)}return y.createElement("a",ys({},m,{href:k||g,onClick:w||i?r:f,ref:t,target:o}))});var Uo;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Uo||(Uo={}));var Vo;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Vo||(Vo={}));function Qp(e,n){let{target:t,replace:r,state:l,preventScrollReset:i,relative:a,viewTransition:u}=n===void 0?{}:n,o=kp(),c=Er(),h=ud(e,{relative:a});return y.useCallback(p=>{if(Up(p,t)){p.preventDefault();let m=r!==void 0?r:Cl(c)===Cl(h);o(e,{replace:m,state:l,preventScrollReset:i,relative:a,viewTransition:u})}},[c,o,h,r,l,t,e,i,a,u])}/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Kp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),F=(e,n)=>{const t=y.forwardRef(({color:r="currentColor",size:l=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:u="",children:o,...c},h)=>y.createElement("svg",{ref:h,...Kp,width:l,height:l,stroke:r,strokeWidth:a?Number(i)*24/Number(l):i,className:["lucide",`lucide-${Gp(e)}`,u].join(" "),...c},[...n.map(([p,m])=>y.createElement(p,m)),...Array.isArray(o)?o:[o]]));return t.displayName=`${e}`,t};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _l=F("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=F("ArrowDownNarrowWide",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h4",key:"6d7r33"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h10",key:"1438ji"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=F("ArrowRightLeft",[["path",{d:"m16 3 4 4-4 4",key:"1x1c3m"}],["path",{d:"M20 7H4",key:"zbl0bi"}],["path",{d:"m8 21-4-4 4-4",key:"h9nckh"}],["path",{d:"M4 17h16",key:"g4d7ey"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Me=F("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=F("ArrowUpNarrowWide",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M11 12h4",key:"q8tih4"}],["path",{d:"M11 16h7",key:"uosisv"}],["path",{d:"M11 20h10",key:"jvxblo"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jp=F("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const em=F("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm=F("Brain",[["path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",key:"1mhkh5"}],["path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",key:"1d6s00"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm=F("Bug",[["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",key:"xs1cw7"}],["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4",key:"k3fwyw"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=F("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=F("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=F("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=F("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=F("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om=F("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const um=F("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ho=F("FileCode",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cm=F("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dm=F("GitFork",[["circle",{cx:"12",cy:"18",r:"3",key:"1mpf1b"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9",key:"1uq4wg"}],["path",{d:"M12 12v3",key:"158kv8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ka=F("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=F("GraduationCap",[["path",{d:"M22 10v6M2 10l10-5 10 5-10 5z",key:"1ef52a"}],["path",{d:"M6 12v5c3 3 9 3 12 0v-5",key:"1f75yj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ki=F("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm=F("HeartHandshake",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",key:"12sd6o"}],["path",{d:"m18 15-2-2",key:"60u0ii"}],["path",{d:"m15 18-2-2",key:"6p76be"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn=F("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=F("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wa=F("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=F("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zn=F("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=F("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ja=F("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=F("ListOrdered",[["line",{x1:"10",x2:"21",y1:"6",y2:"6",key:"76qw6h"}],["line",{x1:"10",x2:"21",y1:"12",y2:"12",key:"16nom4"}],["line",{x1:"10",x2:"21",y1:"18",y2:"18",key:"u3jurt"}],["path",{d:"M4 6h1v4",key:"cnovpq"}],["path",{d:"M4 10h2",key:"16xx2s"}],["path",{d:"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1",key:"m9a95d"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=F("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=F("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=F("MoveUp",[["path",{d:"M8 6L12 2L16 6",key:"1yvkyx"}],["path",{d:"M12 2V22",key:"r89rzk"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $o=F("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=F("Pyramid",[["path",{d:"M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z",key:"aenxs0"}],["path",{d:"M12 2v20",key:"t6zp3m"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pd=F("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=F("Scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=F("TreeDeciduous",[["path",{d:"M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z",key:"oadzkq"}],["path",{d:"M12 19v3",key:"npa21l"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=F("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=F("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function Em(){const e=Er(),[n,t]=y.useState(!1),r=e.pathname==="/"?"home":e.pathname.replace("/","").replace("_",""),l=()=>t(!n),i=()=>t(!1);y.useEffect(()=>{const u=()=>{window.innerWidth>1024&&t(!1)};return window.addEventListener("resize",u),()=>window.removeEventListener("resize",u)},[]),y.useEffect(()=>{n?document.body.style.overflow="hidden":document.body.style.overflow=""},[n]);const a=({to:u,icon:o,children:c,pageName:h})=>{const p=r===h;return s.jsxs(Et,{to:u,className:`nav-item ${p?"active":""}`,onClick:i,children:[s.jsx(o,{}),s.jsx("span",{children:c})]})};return s.jsxs(s.Fragment,{children:[s.jsx("button",{className:"mobile-menu-toggle",id:"mobileMenuToggle","aria-label":"Toggle menu",onClick:l,children:n?s.jsx(Sm,{}):s.jsx(gm,{})}),s.jsx("div",{className:`sidebar-overlay ${n?"active":""}`,onClick:i}),s.jsxs("aside",{className:`sidebar ${n?"active":""}`,id:"sidebar",children:[s.jsx("div",{className:"sidebar-header",children:s.jsxs(Et,{to:"/",className:"logo-wrapper",onClick:i,children:[s.jsx("img",{src:"/logo.svg",alt:"DSA Visualizer Logo",className:"logo-icon"}),s.jsx("span",{className:"logo-text",children:"DSA Visualizer"})]})}),s.jsxs("nav",{className:"sidebar-nav",children:[s.jsxs("div",{className:"nav-section",children:[s.jsx("div",{className:"nav-section-title",children:"Explore"}),s.jsx(a,{to:"/",icon:pm,pageName:"home",children:"Home"}),s.jsx(a,{to:"/algorithms",icon:im,pageName:"algorithms",children:"Algorithms"})]}),s.jsxs("div",{className:"nav-section",children:[s.jsx("div",{className:"nav-section-title",children:"More"}),s.jsx(a,{to:"/contact",icon:hd,pageName:"contact",children:"Contact"}),s.jsx(a,{to:"/contributions",icon:hm,pageName:"contributions",children:"Contributions"})]})]}),s.jsxs("div",{className:"sidebar-footer",children:[s.jsxs("div",{className:"social-links-sidebar",children:[s.jsx("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",title:"GitHub",children:s.jsx(ka,{})}),s.jsx("a",{href:"https://www.linkedin.com/in/abdullah-mahfouz-5188b1306/",target:"_blank",rel:"noopener noreferrer",title:"LinkedIn",children:s.jsx(ja,{})})]}),s.jsx("p",{className:"copyright",children:"© 2026 Abdullah Mahfouz"})]})]})]})}function Tm(){return s.jsx("footer",{className:"main-footer",children:s.jsxs("div",{className:"footer-content",children:[s.jsxs("div",{className:"footer-social",children:[s.jsxs("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",className:"footer-link",children:[s.jsx(ka,{}),s.jsx("span",{children:"GitHub"})]}),s.jsxs("a",{href:"https://www.linkedin.com/in/abdullah-mahfouz-5188b1306/",target:"_blank",rel:"noopener noreferrer",className:"footer-link",children:[s.jsx(ja,{}),s.jsx("span",{children:"LinkedIn"})]})]}),s.jsx("p",{className:"footer-copyright",children:"© 2026 Abdullah Mahfouz"})]})})}function Cm(){return s.jsxs(s.Fragment,{children:[s.jsxs("section",{className:"explore-hero",children:[s.jsx("div",{className:"hero-background"}),s.jsxs("div",{className:"hero-content-wrapper",children:[s.jsxs("div",{className:"hero-badge",children:[s.jsx(fm,{}),s.jsx("span",{children:"Free Student Learning Tool"})]}),s.jsxs("h1",{className:"hero-title",children:[s.jsx("span",{className:"gradient-text",children:"Learn"})," Data Structures & Algorithms"]}),s.jsx("p",{className:"hero-description",children:"A free, interactive learning tool designed to help students master DSA concepts. Visualize and understand them step-by-step."}),s.jsxs("div",{className:"hero-actions",children:[s.jsxs(Et,{to:"/algorithms",className:"btn-primary",children:[s.jsx("span",{children:"Learn Now"}),s.jsx(Me,{})]}),s.jsxs(Et,{to:"/stack",className:"btn-secondary",children:[s.jsx("span",{children:"Try Your First Visualizer"}),s.jsx($o,{})]})]})]})]}),s.jsxs("section",{className:"features-section",children:[s.jsxs("div",{className:"section-header",children:[s.jsx("h2",{children:"How This Tool Helps Students"}),s.jsx("p",{children:"Designed specifically for students who find DSA challenging"})]}),s.jsxs("div",{className:"features-grid",children:[s.jsxs("div",{className:"feature-card",children:[s.jsx("div",{className:"feature-icon",children:s.jsx(um,{})}),s.jsx("h3",{children:"See It in Action"}),s.jsx("p",{children:"Watch how data structures work with real-time visualizations. Perfect for visual learners who struggle with abstract concepts."})]}),s.jsxs("div",{className:"feature-card",children:[s.jsx("div",{className:"feature-icon",children:s.jsx(Yn,{})}),s.jsx("h3",{children:"Step-by-Step Help"}),s.jsx("p",{children:"Detailed explanations for each operation. No more confusion about how push, pop, or insert actually work."})]}),s.jsxs("div",{className:"feature-card",children:[s.jsx("div",{className:"feature-icon",children:s.jsx(nm,{})}),s.jsx("h3",{children:"AI Study Buddy"}),s.jsx("p",{children:"Stuck on a concept? Ask our AI assistant anything about DSA. Get instant, personalized explanations."})]}),s.jsxs("div",{className:"feature-card",children:[s.jsx("div",{className:"feature-icon",children:s.jsx($o,{})}),s.jsx("h3",{children:"Learn by Doing"}),s.jsx("p",{children:"Practice makes perfect. Interact with data structures yourself to build confidence and understanding."})]})]})]})]})}function _m(){const[e,n]=y.useState(null),t=l=>{n(e===l?null:l)},r=[{id:"linear",name:"Linear Data Structures",icon:ym,description:"Elements stored sequentially where each element has a unique predecessor and successor. These are the building blocks of computer science — simple to implement yet powerful enough to solve complex problems.",color:"#6366f1",items:[{to:"/stack",icon:mm,title:"Stack",description:"LIFO (Last In, First Out) — imagine a stack of plates where you can only add or remove from the top. The most recent item is always accessed first. Push adds to top, Pop removes from top. Both operations are O(1) constant time. Essential for: browser back button (page history), undo/redo in editors, function call management in recursion, parsing expressions like (a+b)*c, and depth-first search algorithms.",available:!0},{to:"/queue",icon:Yp,title:"Queue",description:"FIFO (First In, First Out) — like waiting in line at a coffee shop. The first person to arrive gets served first. Enqueue adds to the back, Dequeue removes from front. Both O(1) operations. Used everywhere: print job scheduling, CPU task management, breadth-first search (BFS) in graphs, handling requests in web servers, and buffering data streams like video playback.",available:!0},{to:"/linkedlist",icon:vm,title:"Linked List",description:"A chain of nodes where each node stores data and a pointer to the next node. Unlike arrays, memory doesn't need to be contiguous — nodes can be scattered in memory. Insertion/deletion at known positions is O(1), but finding a position is O(n). Perfect for: implementing stacks/queues, music playlists (next/previous song), browser history, memory allocation in operating systems, and polynomial arithmetic.",available:!0}]},{id:"hash",name:"Hash-Based Structures",icon:om,description:"Revolutionary data structures that use hash functions to map keys to array indices, enabling O(1) average-case lookup, insertion, and deletion. The backbone of databases, caches, and any system requiring fast key-value access.",color:"#10b981",items:[{to:"/hashtable_linear",icon:ki,title:"Linear Probing",description:'Open addressing collision resolution: when a collision occurs (two keys hash to same index), simply check the next slot, then the next, until an empty slot is found. Pros: excellent cache performance since data is stored contiguously, simple implementation. Cons: can cause "primary clustering" where long runs of occupied slots form, degrading performance. Load factor should stay below 0.7 for efficiency.',available:!0},{to:"/hashtable_quadratic",icon:ki,title:"Quadratic Probing",description:'Instead of checking consecutive slots, probe at quadratic intervals: 1², 2², 3²... positions away from the original hash. This eliminates primary clustering but can cause "secondary clustering" where keys with the same hash follow the same probe sequence. Table size should be prime and load factor < 0.5 to guarantee finding an empty slot. Used when cache performance is less critical than even distribution.',available:!0},{to:"/hashtable_chaining",icon:ki,title:"Separate Chaining",description:"Each array slot holds a linked list (chain) of all entries that hash to that index. No limit on how many items can be stored — just grow the chains. Handles high load factors gracefully (even > 1.0). Simpler deletion than open addressing. Used in Java's HashMap, Python's dict (with optimization). Trade-off: extra memory for pointers, potentially poor cache performance with long chains.",available:!1}]},{id:"trees",name:"Tree Structures",icon:jm,description:"Hierarchical data structures where data flows from a root node down through children. Trees enable O(log n) operations on sorted data and model real-world hierarchies like file systems, organization charts, and decision trees in AI/ML.",color:"#f59e0b",items:[{to:"/binarytree",icon:cm,title:"Binary Tree Traversals",description:"Master the four fundamental ways to visit every node in a binary tree: INORDER (Left→Root→Right) visits nodes in sorted order for BST, used for expression trees; PREORDER (Root→Left→Right) processes root first, perfect for copying trees or creating prefix expressions; POSTORDER (Left→Right→Root) processes children before parent, used for deleting trees or postfix notation; LEVEL-ORDER (BFS) visits level by level, used for finding shortest paths and printing tree structure.",available:!0},{to:"/bst",icon:dm,title:"Binary Search Tree",description:`The fundamental ordered tree: every node's left subtree contains only smaller values, right subtree only larger values. This property enables O(log n) search by eliminating half the tree at each step — like binary search but in tree form. Supports efficient range queries. Caveat: can degrade to O(n) if insertions create an unbalanced "stick". Foundation for databases, symbol tables, and more advanced balanced trees.`,available:!1},{to:"/avl",icon:wm,title:"AVL Tree",description:"The first self-balancing BST, invented in 1962. Maintains strict balance: height difference between left and right subtrees ≤ 1 at every node. When insertion/deletion violates this, the tree self-corrects using rotations (single or double). Guarantees O(log n) for all operations. More rigidly balanced than Red-Black trees, so faster lookups but slightly slower insertions. Used when reads far exceed writes.",available:!1},{to:"/splay",icon:xm,title:"Splay Tree",description:`A self-adjusting BST with a clever optimization: every accessed node is "splayed" (rotated) to the root. No explicit balance condition, yet achieves O(log n) amortized time. Recently accessed items stay near the root — perfect for caches where some items are accessed repeatedly (temporal locality). Used in Windows NT's virtual memory management, GCC's implementation of certain data structures, and network routers.`,available:!1}]},{id:"heaps",name:"Heap Structures",icon:km,description:"Complete binary trees satisfying the heap property — either every parent ≥ children (max-heap) or every parent ≤ children (min-heap). Heaps power priority queues, enabling O(1) access to the extreme element and O(log n) insertions and deletions.",color:"#ec4899",items:[{to:"/minheap",icon:Xp,title:"Min Heap",description:`Every parent node is smaller than or equal to its children, so the minimum element is always at the root — accessible in O(1). Insert and extract-min are O(log n) as elements "bubble up" or "sink down" to maintain the heap property. Critical for: Dijkstra's shortest path algorithm, Prim's minimum spanning tree, job schedulers (process with smallest priority runs next), and efficiently finding the k largest elements in a stream.`,available:!1},{to:"/maxheap",icon:Zp,title:"Max Heap",description:"The mirror of min-heap: every parent ≥ children, maximum at root. Extract-max in O(1), insert and delete in O(log n). Powers: Heapsort algorithm (in-place O(n log n) sorting), priority queues where highest priority goes first, finding k smallest elements, implementing a median-finding structure (use one min-heap + one max-heap), and bandwidth management in network routers.",available:!1}]}];return s.jsxs("section",{className:"algorithms-section",children:[s.jsxs("div",{className:"section-header",children:[s.jsx("h1",{children:"Explore Data Structures"}),s.jsx("p",{children:"Choose a category to explore different data structures. Each visualizer includes step-by-step explanations and hands-on practice."})]}),s.jsx("div",{className:"categories-container",children:r.map(l=>s.jsxs("div",{className:"category-wrapper",children:[s.jsxs("button",{className:`category-header ${e===l.id?"expanded":""}`,onClick:()=>t(l.id),style:{"--category-color":l.color},children:[s.jsx("div",{className:"category-icon",style:{background:l.color},children:s.jsx(l.icon,{})}),s.jsxs("div",{className:"category-info",children:[s.jsx("h2",{children:l.name}),s.jsx("p",{children:l.description})]}),s.jsxs("div",{className:"category-meta",children:[s.jsxs("span",{className:"item-count",children:[l.items.filter(i=>i.available).length," available"]}),e===l.id?s.jsx(lm,{}):s.jsx(rm,{})]})]}),s.jsx("div",{className:`category-items ${e===l.id?"expanded":""}`,children:s.jsx("div",{className:"items-grid",children:l.items.map((i,a)=>i.available?s.jsxs(Et,{to:i.to,className:"algorithm-item",children:[s.jsx("div",{className:"item-icon",style:{background:l.color},children:s.jsx(i.icon,{})}),s.jsxs("div",{className:"item-info",children:[s.jsx("h3",{children:i.title}),s.jsx("p",{children:i.description})]}),s.jsx(Me,{className:"item-arrow"})]},a):s.jsxs("div",{className:"algorithm-item coming-soon",children:[s.jsx("div",{className:"item-icon disabled",children:s.jsx(i.icon,{})}),s.jsxs("div",{className:"item-info",children:[s.jsx("h3",{children:i.title}),s.jsx("p",{children:i.description})]}),s.jsx("span",{className:"coming-soon-badge",children:"Coming Soon"})]},a))})})]},l.id))})]})}function zm(){return s.jsxs("section",{className:"contact-section",children:[s.jsx("div",{className:"page-header",children:s.jsx("h1",{children:"Contact"})}),s.jsx("div",{className:"contact-content",children:s.jsxs("div",{className:"contact-info",children:[s.jsxs("div",{className:"info-card",children:[s.jsx("div",{className:"info-icon",children:s.jsx(hd,{})}),s.jsx("h3",{children:"Email"}),s.jsx("p",{children:"For recruitment and professional opportunities"}),s.jsx("a",{href:"mailto:abdullahmahfouz@trentu.ca",className:"info-link",children:"abdullahmahfouz@trentu.ca"})]}),s.jsxs("div",{className:"info-card",children:[s.jsx("div",{className:"info-icon",children:s.jsx(ka,{})}),s.jsx("h3",{children:"GitHub"}),s.jsx("p",{children:"View my projects and contributions"}),s.jsx("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",className:"info-link",children:"github.com/abdullahmahfouz"})]}),s.jsxs("div",{className:"info-card",children:[s.jsx("div",{className:"info-icon",children:s.jsx(ja,{})}),s.jsx("h3",{children:"LinkedIn"}),s.jsx("p",{children:"Connect for professional networking"}),s.jsx("a",{href:"https://www.linkedin.com/in/abdullah-mahfouz-5188b1306/",target:"_blank",rel:"noopener noreferrer",className:"info-link",children:"Connect on LinkedIn"})]})]})})]})}function Lm(){return s.jsxs("section",{className:"contributions-section",children:[s.jsxs("div",{className:"page-header",children:[s.jsx("h1",{children:"Contributions"}),s.jsx("p",{children:"Help us improve this free learning tool for students! Your contributions help make DSA easier to understand for everyone."})]}),s.jsxs("div",{className:"contributions-content",children:[s.jsxs("div",{className:"contribution-card",children:[s.jsx("div",{className:"contribution-icon",children:s.jsx(sm,{})}),s.jsx("h2",{children:"Code Contributions"}),s.jsx("p",{children:"Found a bug or want to add a new feature? Fork the repository, make your changes, and submit a pull request!"}),s.jsxs("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",className:"btn-primary",children:[s.jsx("span",{children:"View on GitHub"}),s.jsx(Me,{})]})]}),s.jsxs("div",{className:"contribution-card",children:[s.jsx("div",{className:"contribution-icon",children:s.jsx(Jp,{})}),s.jsx("h2",{children:"Documentation"}),s.jsx("p",{children:"Help improve our documentation, fix typos, or add examples. Every bit helps!"}),s.jsxs("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",className:"btn-primary",children:[s.jsx("span",{children:"Improve Docs"}),s.jsx(Me,{})]})]}),s.jsxs("div",{className:"contribution-card",children:[s.jsx("div",{className:"contribution-icon",children:s.jsx(tm,{})}),s.jsx("h2",{children:"Report Issues"}),s.jsx("p",{children:"Found a bug or have a suggestion? Open an issue on GitHub and let us know!"}),s.jsxs("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",className:"btn-primary",children:[s.jsx("span",{children:"Report Issue"}),s.jsx(Me,{})]})]}),s.jsxs("div",{className:"contribution-card",children:[s.jsx("div",{className:"contribution-icon",children:s.jsx(zn,{})}),s.jsx("h2",{children:"Feature Requests"}),s.jsx("p",{children:"Have an idea for a new visualizer or feature? We'd love to hear your suggestions!"}),s.jsxs(Et,{to:"/contact",className:"btn-primary",children:[s.jsx("span",{children:"Suggest Feature"}),s.jsx(Me,{})]})]})]}),s.jsxs("div",{className:"contributors-section",children:[s.jsx("h2",{children:"Contributors"}),s.jsx("div",{className:"contributors-list",children:s.jsxs("div",{className:"contributor-item",children:[s.jsx("div",{className:"contributor-avatar",children:s.jsx(Nm,{})}),s.jsxs("div",{className:"contributor-info",children:[s.jsx("h3",{children:"Abdullah Mahfouz"}),s.jsx("p",{children:"Creator & Maintainer"})]})]})}),s.jsx("p",{className:"contributors-note",children:"Want to see your name here? Start contributing today!"})]})]})}function Lt({context:e="Data Structures"}){const[n,t]=y.useState(""),[r,l]=y.useState(""),[i,a]=y.useState(!1),u=()=>{const h=e.toLowerCase();return h.includes("stack")?"e.g., How does LIFO work?":h.includes("queue")?"e.g., What is FIFO?":h.includes("linked list")?"e.g., How do I insert at the head?":h.includes("hash")?"e.g., What is a collision?":h.includes("binary tree")||h.includes("traversal")?"e.g., What is inorder traversal?":"e.g., How does this work?"},o=async()=>{if(n.trim()){a(!0),l("");try{const h=await fetch("/api/ask-ai",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:n.trim(),code:e})}),p=await h.json();h.ok?l(p.answer||"No answer returned."):l("Currently not working, try again later.")}catch{l("Currently not working, try again later.")}finally{a(!1)}}},c=h=>{h.key==="Enter"&&o()};return s.jsxs("div",{className:"ai-assistant",children:[s.jsxs("h3",{children:[s.jsx(em,{}),"AI Assistant"]}),s.jsxs("p",{children:["Ask me anything about ",e.toLowerCase(),"!"]}),s.jsxs("div",{className:"ai-input-group",children:[s.jsx("input",{type:"text",value:n,onChange:h=>t(h.target.value),onKeyPress:c,placeholder:u(),disabled:i}),s.jsx("button",{onClick:o,disabled:i,children:i?"Asking...":"Ask"})]}),s.jsxs("div",{id:"ai-response",children:[i&&s.jsx("div",{className:"ai-loading",children:"Thinking..."}),r&&s.jsx("div",{className:r.startsWith("Error")?"ai-error":"ai-answer",children:r})]})]})}const Pm=`class Stack:
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
print(stack.peek())  # 20`,Im=`class Stack {
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
console.log(stack.pop()); // 20`,Om=`import java.util.EmptyStackException;

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
System.out.println(stack.pop()); // 20`,Rm={python:Pm,javascript:Im,java:Om,"c++":`#include <iostream>
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
Console.WriteLine(stack.Pop()); // 20`},Mm=`class Queue:
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
print(queue.peek())     # 20`,Dm=`class Queue {
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
console.log(queue.dequeue()); // 10`,bm=`import java.util.NoSuchElementException;

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
System.out.println(queue.dequeue()); // 10`,Fm={python:Mm,javascript:Dm,java:bm,"c++":`#include <iostream>
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
Console.WriteLine(queue.Dequeue()); // 10`},Am=`class Node:
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
print(ll.search(20))  # 1`,Um=`class Node {
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
ll.insertAtTail(30);`,Vm=`public class SinglyLinkedList<T> {
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
ll.insertAtTail(30);`,Hm={python:Am,javascript:Um,java:Vm,"c++":`#include <iostream>
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
ll.InsertAtTail(30);`},$m=`class TreeNode:
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
print("Level:     ", tree.levelorder_traversal())  # [50, 30, 70, 20, 40, 60, 80]`,Bm=`class TreeNode {
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
console.log("Level:    ", tree.levelOrderTraversal());  // [50, 30, 70, 20, 40, 60, 80]`,qm=`import java.util.*;

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
System.out.println("Level:     " + tree.levelOrderTraversal());`,Wm={python:$m,javascript:Bm,java:qm,"c++":`#include <iostream>
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
Console.WriteLine("Level:     " + string.Join(", ", tree.LevelOrderTraversal()));`},Qm=`class HashTable:
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
print(ht.get("banana"))  # 3`,Km=`class HashTable {
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
console.log(ht.get("apple"));  // 5`,Gm=`public class HashTable<K, V> {
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
System.out.println(ht.get("apple")); // 5`,Xm={python:Qm,javascript:Km,java:Gm,"c++":`#include <iostream>
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
Console.WriteLine(ht.Get("apple")); // 5`},wi={stack:Rm,queue:Fm,linkedlist:Hm,binarytree:Wm,hashtable:Xm};function Pt({dataStructure:e}){var p;const[n,t]=y.useState("python"),[r,l]=y.useState(!1),i=["python","javascript","java","c++","c#"],a=i.filter(m=>{var x;return(x=wi[e])==null?void 0:x[m]}),u=a.length>0?a:i,o=((p=wi[e])==null?void 0:p[n])||"Code not available for this data structure";y.useEffect(()=>{var m;!((m=wi[e])!=null&&m[n])&&a.length>0&&t(a[0])},[e,n,a]);const c=m=>({python:"Python",javascript:"JavaScript",java:"Java","c++":"C++","c#":"C#"})[m]||m,h=()=>{navigator.clipboard.writeText(o),l(!0),setTimeout(()=>l(!1),2e3)};return s.jsxs("div",{className:"code-section",children:[s.jsxs("h2",{children:[s.jsx(Ho,{})," Implementation"]}),s.jsx("div",{className:"code-tabs",children:u.map(m=>s.jsxs("button",{className:`tab-btn ${n===m?"active":""}`,onClick:()=>t(m),children:[s.jsx(Ho,{}),c(m)]},m))}),s.jsx("div",{className:"code-panels",children:s.jsx("div",{className:"code-panel active",children:s.jsxs("pre",{children:[s.jsxs("button",{className:"copy-btn",onClick:h,children:[s.jsx(am,{})," ",r?"Copied!":"Copy"]}),s.jsx("code",{children:o})]})})})]})}function Tr({message:e}){if(!(e!=null&&e.text))return null;const n=e.type||"info";return s.jsx("div",{className:`message message-${n}`,children:e.text})}async function Ze(e){return await(await fetch(e)).json()}async function ae(e,n){return await(await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json()}function It(e=3e3){const[n,t]=y.useState(null),r=y.useRef(null),l=y.useCallback(()=>{t(null),r.current&&(clearTimeout(r.current),r.current=null)},[]),i=y.useCallback((a,u="info")=>{t({text:a,type:u}),r.current&&clearTimeout(r.current),r.current=setTimeout(()=>{t(null),r.current=null},e)},[e]);return y.useEffect(()=>l,[l]),{message:n,showMessage:i,clearMessage:l}}function Ym(){const[e,n]=y.useState([]),[t,r]=y.useState(0),[l,i]=y.useState("Empty"),[a]=y.useState(10),{message:u,showMessage:o}=It(3e3),[c,h]=y.useState("");y.useEffect(()=>{p()},[]);const p=async()=>{try{const d=await Ze("/api/stack");n(d.items||[]),r(d.size||0),i(d.top!==null&&d.top!==void 0?d.top:"Empty")}catch(d){console.error("Error loading stack:",d)}},m=async()=>{if(!c||c.trim()===""){o("Please enter a number!","error");return}const d=Number(c);if(isNaN(d)){o("Please enter a valid number!","error");return}try{const f=await ae("/api/stack/push",{value:d});if(f.error){o(f.error,"error");return}n(f.items||[]),r(f.size||0),i(f.top!==null&&f.top!==void 0?f.top:"Empty"),o(`Pushed ${d} to stack!`,"success"),h("")}catch(f){console.error("Push error:",f),o("Error pushing to stack. Is Flask running?","error")}},x=async()=>{try{const d=await ae("/api/stack/pop",{});if(d.error){o(d.error,"error");return}n(d.items||[]),r(d.size||0),i(d.top!==null&&d.top!==void 0?d.top:"Empty"),o(`Popped ${d.popped} from stack!`,"success")}catch{o("Error popping from stack","error")}},k=async()=>{try{const d=await Ze("/api/stack/peek");if(d.error){o(d.error,"error");return}o(`Top element is: ${d.top}`,"info")}catch{o("Error peeking stack","error")}},w=async()=>{try{await ae("/api/stack/clear",{}),n([]),r(0),i("Empty"),o("Stack cleared!","success")}catch{o("Error clearing stack","error")}},g=d=>{d.key==="Enter"&&m()};return s.jsxs("div",{className:"container",children:[s.jsxs("div",{className:"intro-layout",children:[s.jsxs("div",{className:"concept-box",children:[s.jsxs("div",{className:"concept-header",children:[s.jsx(Yn,{className:"icon-sm"}),s.jsx("span",{children:"What is a Stack?"})]}),s.jsxs("div",{className:"concept-content",children:[s.jsxs("p",{children:["A ",s.jsx("strong",{children:"Stack"})," is a linear data structure that follows the ",s.jsx("strong",{children:"LIFO"})," (Last In, First Out) principle."]}),s.jsxs("div",{className:"concept-analogy",children:[s.jsx(zn,{}),s.jsxs("span",{children:["Think of a stack of plates - you can only add or remove from the ",s.jsx("strong",{children:"top"}),"!"]})]}),s.jsxs("div",{className:"concept-operations",children:[s.jsxs("div",{className:"op-item",children:[s.jsx("span",{className:"op-name",children:"Push"}),s.jsx("span",{className:"op-desc",children:"Add to top"}),s.jsx("span",{className:"op-complexity",children:"O(1)"})]}),s.jsxs("div",{className:"op-item",children:[s.jsx("span",{className:"op-name",children:"Pop"}),s.jsx("span",{className:"op-desc",children:"Remove from top"}),s.jsx("span",{className:"op-complexity",children:"O(1)"})]}),s.jsxs("div",{className:"op-item",children:[s.jsx("span",{className:"op-name",children:"Peek"}),s.jsx("span",{className:"op-desc",children:"View top element"}),s.jsx("span",{className:"op-complexity",children:"O(1)"})]})]}),s.jsxs("div",{className:"concept-uses",children:[s.jsx("strong",{children:"Common Uses:"}),s.jsxs("ul",{children:[s.jsx("li",{children:"Browser back/forward buttons"}),s.jsx("li",{children:"Undo/Redo functionality"}),s.jsx("li",{children:"Function call stack"}),s.jsx("li",{children:"Expression evaluation"})]})]})]})]}),s.jsx(Lt,{context:"Stack data structure"})]}),s.jsxs("div",{className:"visualizer-layout",children:[s.jsxs("div",{className:"control-panel",children:[s.jsx("h2",{children:"Stack Operations"}),s.jsxs("div",{className:"operation-group",children:[s.jsx("label",{htmlFor:"pushValue",children:"Push (Add to top)"}),s.jsxs("div",{className:"input-group",children:[s.jsx("input",{type:"text",id:"pushValue",value:c,onChange:d=>h(d.target.value),onKeyPress:g,placeholder:"Enter a value"}),s.jsx("button",{onClick:m,className:"btn btn-push",children:"Push"})]})]}),s.jsxs("div",{className:"operation-group",children:[s.jsx("label",{children:"Other Operations"}),s.jsxs("div",{className:"btn-group",children:[s.jsx("button",{onClick:x,className:"btn btn-pop",children:"Pop"}),s.jsx("button",{onClick:k,className:"btn btn-peek",children:"Peek"}),s.jsx("button",{onClick:w,className:"btn btn-clear",children:"Clear"})]})]}),s.jsxs("div",{className:"info-panel",children:[s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Size:"}),s.jsx("span",{className:"info-value",children:t})]}),s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Top:"}),s.jsx("span",{className:"info-value",children:l})]}),s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Max Size:"}),s.jsx("span",{className:"info-value",children:a})]})]}),s.jsx(Tr,{message:u})]}),s.jsxs("div",{className:"visual-panel",children:[s.jsx("h2",{children:"Stack Visualization"}),s.jsxs("div",{className:"stack-container",children:[s.jsx("div",{className:"stack-visual",children:e.length===0?s.jsx("div",{className:"stack-empty",children:"Stack is empty. Push some items!"}):e.slice().reverse().map((d,f)=>s.jsx("div",{className:"stack-item",children:d},f))}),s.jsx("div",{className:"stack-base",children:s.jsx("span",{children:"BOTTOM"})})]})]})]}),s.jsx(Pt,{dataStructure:"stack"})]})}function Zm(){const[e,n]=y.useState([]),[t,r]=y.useState(0),[l,i]=y.useState("Empty"),[a]=y.useState(10),{message:u,showMessage:o}=It(3e3),[c,h]=y.useState("");y.useEffect(()=>{p()},[]);const p=async()=>{try{const g=await Ze("/api/queue");n(g.items||[]),r(g.size||0),i(g.front!==null&&g.front!==void 0?g.front:"Empty")}catch(g){console.error("Error loading queue:",g)}},m=async()=>{if(!c||c.trim()===""){o("Please enter a number!","error");return}const g=Number(c);if(isNaN(g)){o("Please enter a valid number!","error");return}try{const d=await ae("/api/queue/enqueue",{value:g});if(d.error){o(d.error,"error");return}n(d.items||[]),r(d.size||0),i(d.front!==null&&d.front!==void 0?d.front:"Empty"),o(`Enqueued ${g}!`,"success"),h("")}catch(d){console.error("Enqueue error:",d),o("Error enqueueing. Is Flask running?","error")}},x=async()=>{try{const g=await ae("/api/queue/dequeue",{});if(g.error){o(g.error,"error");return}n(g.items||[]),r(g.size||0),i(g.front!==null&&g.front!==void 0?g.front:"Empty"),o(`Dequeued ${g.dequeued} from queue!`,"success")}catch{o("Error dequeuing from queue","error")}},k=async()=>{try{const g=await Ze("/api/queue/peek");if(g.error){o(g.error,"error");return}o(`Front element is: ${g.front}`,"info")}catch{o("Error peeking queue","error")}},w=async()=>{try{await ae("/api/queue/clear",{}),n([]),r(0),i("Empty"),o("Queue cleared!","success")}catch{o("Error clearing queue","error")}};return s.jsxs("div",{className:"container",children:[s.jsxs("div",{className:"intro-layout",children:[s.jsxs("div",{className:"concept-box",children:[s.jsxs("div",{className:"concept-header",children:[s.jsx(Yn,{className:"icon-sm"}),s.jsx("span",{children:"What is a Queue?"})]}),s.jsxs("div",{className:"concept-content",children:[s.jsxs("p",{children:["A ",s.jsx("strong",{children:"Queue"})," is a linear data structure that follows the ",s.jsx("strong",{children:"FIFO"})," (First In, First Out) principle."]}),s.jsxs("div",{className:"concept-analogy",children:[s.jsx(zn,{}),s.jsxs("span",{children:["Think of a line at a store – the first person in line gets served ",s.jsx("strong",{children:"first"}),"!"]})]}),s.jsxs("div",{className:"concept-operations",children:[s.jsxs("div",{className:"op-item",children:[s.jsx("span",{className:"op-name",children:"Enqueue"}),s.jsx("span",{className:"op-desc",children:"Add to the back"}),s.jsx("span",{className:"op-complexity",children:"O(1)"})]}),s.jsxs("div",{className:"op-item",children:[s.jsx("span",{className:"op-name",children:"Dequeue"}),s.jsx("span",{className:"op-desc",children:"Remove from the front"}),s.jsx("span",{className:"op-complexity",children:"O(1)"})]}),s.jsxs("div",{className:"op-item",children:[s.jsx("span",{className:"op-name",children:"Peek"}),s.jsx("span",{className:"op-desc",children:"View the front element"}),s.jsx("span",{className:"op-complexity",children:"O(1)"})]})]})]})]}),s.jsx(Lt,{context:"Queue data structure"})]}),s.jsxs("div",{className:"visualizer-layout",children:[s.jsxs("div",{className:"control-panel",children:[s.jsx("h2",{children:"Queue Operations"}),s.jsxs("div",{className:"operation-group",children:[s.jsx("label",{htmlFor:"enqueueValue",children:"Enqueue (Add to back)"}),s.jsxs("div",{className:"input-group",children:[s.jsx("input",{type:"text",id:"enqueueValue",value:c,onChange:g=>h(g.target.value),onKeyPress:g=>g.key==="Enter"&&m(),placeholder:"Enter a value"}),s.jsx("button",{onClick:m,className:"btn btn-enqueue",children:"Enqueue"})]})]}),s.jsxs("div",{className:"operation-group",children:[s.jsx("label",{children:"Other Operations"}),s.jsxs("div",{className:"btn-group",children:[s.jsx("button",{onClick:x,className:"btn btn-dequeue",children:"Dequeue"}),s.jsx("button",{onClick:k,className:"btn btn-peek",children:"Peek"}),s.jsx("button",{onClick:w,className:"btn btn-clear",children:"Clear"})]})]}),s.jsxs("div",{className:"info-panel",children:[s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Size:"}),s.jsx("span",{className:"info-value",children:t})]}),s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Front:"}),s.jsx("span",{className:"info-value",children:l})]}),s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Max Size:"}),s.jsx("span",{className:"info-value",children:a})]})]}),s.jsx(Tr,{message:u})]}),s.jsxs("div",{className:"visual-panel",children:[s.jsx("h2",{children:"Queue Visualization"}),s.jsxs("div",{className:"queue-container",children:[s.jsx("div",{className:"queue-label",children:s.jsx("span",{className:"front-marker",children:"FRONT →"})}),s.jsx("div",{className:"queue-visual",children:e.length===0?s.jsx("div",{className:"queue-empty",children:"Queue is empty. Enqueue some items!"}):e.map((g,d)=>{const f=d===0,v=d===e.length-1;return s.jsxs("div",{className:`queue-item ${f?"queue-front":""} ${v?"queue-back":""}`,children:[f&&s.jsx("span",{className:"front-label",children:"FRONT"}),g,v&&s.jsx("span",{className:"back-label",children:"BACK"})]},d)})}),s.jsx("div",{className:"queue-label",children:s.jsx("span",{className:"back-marker",children:"← BACK"})})]})]})]}),s.jsx(Pt,{dataStructure:"queue"})]})}function Jm(){const[e,n]=y.useState([]),[t,r]=y.useState(0),[l,i]=y.useState("Empty"),{message:a,showMessage:u}=It(3e3),[o,c]=y.useState(""),[h,p]=y.useState(""),[m,x]=y.useState(""),[k,w]=y.useState(""),[g,d]=y.useState(""),[f,v]=y.useState("");y.useEffect(()=>{N()},[]);const N=async()=>{try{const S=await Ze("/api/linkedlist");n(S.items||[]),r(S.size||0),i(S.head!==null&&S.head!==void 0?S.head:"Empty")}catch(S){console.error("Error loading linked list:",S)}},C=async()=>{if(!o||o.trim()===""){u("Please enter a number!","error");return}const S=Number(o);if(isNaN(S)){u("Please enter a valid number!","error");return}try{const D=await ae("/api/linkedlist/insert/head",{value:S});if(D.error){u(D.error,"error");return}n(D.items||[]),r(D.size||0),i(D.head!==null&&D.head!==void 0?D.head:"Empty"),u(`Inserted ${S} at head!`,"success"),c("")}catch(D){console.error("Insert error:",D),u("Error inserting. Is Flask running?","error")}},I=async()=>{if(!h||h.trim()===""){u("Please enter a number!","error");return}const S=Number(h);if(isNaN(S)){u("Please enter a valid number!","error");return}try{const D=await ae("/api/linkedlist/insert/tail",{value:S});if(D.error){u(D.error,"error");return}n(D.items||[]),r(D.size||0),i(D.head!==null&&D.head!==void 0?D.head:"Empty"),u(`Inserted ${S} at tail!`,"success"),p("")}catch(D){console.error("Insert error:",D),u("Error inserting. Is Flask running?","error")}},L=async()=>{try{const S=await ae("/api/linkedlist/delete/head",{});if(S.error){u(S.error,"error");return}n(S.items||[]),r(S.size||0),i(S.head!==null&&S.head!==void 0?S.head:"Empty"),u("Deleted head!","success")}catch{u("Error deleting head","error")}},P=async()=>{try{const S=await ae("/api/linkedlist/delete/tail",{});if(S.error){u(S.error,"error");return}n(S.items||[]),r(S.size||0),i(S.head!==null&&S.head!==void 0?S.head:"Empty"),u("Deleted tail!","success")}catch{u("Error deleting tail","error")}},M=async()=>{try{await ae("/api/linkedlist/clear",{}),n([]),r(0),i("Empty"),u("List cleared!","success")}catch{u("Error clearing list","error")}};return s.jsxs("div",{className:"container",children:[s.jsxs("div",{className:"intro-layout",children:[s.jsxs("div",{className:"concept-box",children:[s.jsxs("div",{className:"concept-header",children:[s.jsx(Yn,{className:"icon-sm"}),s.jsx("span",{children:"What is a Singly Linked List?"})]}),s.jsxs("div",{className:"concept-content",children:[s.jsxs("p",{children:["A ",s.jsx("strong",{children:"Singly Linked List"})," is a linear data structure where each element contains data and a pointer to the next node."]}),s.jsxs("div",{className:"concept-analogy",children:[s.jsx(zn,{}),s.jsxs("span",{children:["Think of a treasure hunt – each clue points to the ",s.jsx("strong",{children:"next location"}),"!"]})]})]})]}),s.jsx(Lt,{context:"Singly Linked List data structure"})]}),s.jsxs("div",{className:"visualizer-layout",children:[s.jsxs("div",{className:"control-panel",children:[s.jsx("h2",{children:"Linked List Operations"}),s.jsxs("div",{className:"operation-group",children:[s.jsx("label",{htmlFor:"insertHeadValue",children:"Insert at Head"}),s.jsxs("div",{className:"input-group",children:[s.jsx("input",{type:"text",id:"insertHeadValue",value:o,onChange:S=>c(S.target.value),onKeyPress:S=>S.key==="Enter"&&C(),placeholder:"Enter a value"}),s.jsx("button",{onClick:C,className:"btn btn-insert",children:"Insert Head"})]})]}),s.jsxs("div",{className:"operation-group",children:[s.jsx("label",{htmlFor:"insertTailValue",children:"Insert at Tail"}),s.jsxs("div",{className:"input-group",children:[s.jsx("input",{type:"text",id:"insertTailValue",value:h,onChange:S=>p(S.target.value),onKeyPress:S=>S.key==="Enter"&&I(),placeholder:"Enter a value"}),s.jsx("button",{onClick:I,className:"btn btn-insert",children:"Insert Tail"})]})]}),s.jsxs("div",{className:"operation-group",children:[s.jsx("label",{children:"Delete Operations"}),s.jsxs("div",{className:"btn-group",children:[s.jsx("button",{onClick:L,className:"btn btn-delete",children:"Delete Head"}),s.jsx("button",{onClick:P,className:"btn btn-delete",children:"Delete Tail"})]})]}),s.jsx("div",{className:"operation-group",children:s.jsx("button",{onClick:M,className:"btn btn-clear full-width",children:"Clear All"})}),s.jsxs("div",{className:"info-panel",children:[s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Size:"}),s.jsx("span",{className:"info-value",children:t})]}),s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Head:"}),s.jsx("span",{className:"info-value",children:l})]})]}),s.jsx(Tr,{message:a})]}),s.jsxs("div",{className:"visual-panel",children:[s.jsx("h2",{children:"Linked List Visualization"}),s.jsx("div",{className:"linkedlist-container",children:s.jsx("div",{className:"linkedlist-visual",children:e.length===0?s.jsx("div",{className:"linkedlist-empty",children:"List is empty. Insert some nodes!"}):e.map((S,D)=>s.jsx(Ts.Fragment,{children:s.jsxs("div",{className:"linkedlist-node",children:[s.jsx("div",{className:"node-value",children:S}),D<e.length-1&&s.jsx("div",{className:"node-arrow",children:"→"})]})},D))})})]})]}),s.jsx(Pt,{dataStructure:"linkedlist"})]})}function ev(){const[e,n]=y.useState([]),[t,r]=y.useState(0),[l,i]=y.useState(0),[a,u]=y.useState(0),[o,c]=y.useState(0),{message:h,showMessage:p}=It(3e3),[m,x]=y.useState(""),[k,w]=y.useState(""),[g,d]=y.useState(""),[f,v]=y.useState(""),[N,C]=y.useState(null),[I,L]=y.useState([]),[P,M]=y.useState(null),[S,D]=y.useState(null);y.useEffect(()=>{ge()},[]);const ge=async()=>{try{const j=await Ze("/api/hashtable");n(j.table||[]),r(j.size||0),i(j.capacity||0),u(j.load_factor||0),c(j.collision_count||0)}catch(j){console.error("Error loading hashtable:",j)}},xe=j=>{if(!l||l===0)return 0;let z=0;for(let R=0;R<j.length;R++)z=(z*31+j.charCodeAt(R))%l;return z},We=(j,z)=>{const R=xe(j),b=[R];let $=R;for(;z[$]&&z[$][0]!==j&&($=($+1)%l,b.push($),!($===R||b.length>l)););return{originalHash:R,path:b,finalSlot:$}},B=async()=>{if(!m.trim()||!k.trim()){p("Please enter both key and value!","error");return}const j=l>0?xe(m.trim()):0,z=e.length>0&&e[j]&&e[j][0]!==m.trim();let R=null;z&&(R=We(m.trim(),e));try{const b=await ae("/api/hashtable/insert",{key:m.trim(),value:k.trim()});if(b.error){p(b.error,"error");return}await ge(),M(m.trim()),z&&R?(D({key:m.trim(),originalSlot:R.originalHash,probedSlots:R.path,finalSlot:R.path[R.path.length-1]}),L(R.path),p(`Collision! "${m}" hashed to ${R.originalHash}, probed ${R.path.length} slot(s)`,"warning"),setTimeout(()=>{L([]),D(null)},4e3)):(p(`Inserted "${m}" → slot ${j}`,"success"),C(j),setTimeout(()=>C(null),2e3)),x(""),w(""),setTimeout(()=>M(null),3e3)}catch{p("Error inserting. Is Flask running?","error")}},H=async()=>{if(!g.trim()){p("Please enter a key!","error");return}try{const j=await ae("/api/hashtable/delete",{key:g.trim()});if(j.error){p(j.error,"error");return}await ge(),p(`Deleted "${g}"`,"success"),d("")}catch{p("Error deleting. Is Flask running?","error")}},_=async()=>{if(!f.trim()){p("Please enter a key!","error");return}try{const j=await Ze(`/api/hashtable/get?key=${encodeURIComponent(f.trim())}`);if(j.error){p(j.error,"error");return}j.found?p(`Found: "${f}" = ${j.value}`,"success"):p(`Key "${f}" not found`,"error"),v("")}catch{p("Error searching item","error")}},E=async()=>{try{await ae("/api/hashtable/clear",{}),await ge(),L([]),D(null),p("Hashtable cleared!","success")}catch{p("Error clearing hashtable","error")}};return s.jsxs("div",{className:"container",children:[s.jsxs("div",{className:"intro-layout",children:[s.jsxs("div",{className:"intro-left",children:[s.jsxs("div",{className:"concept-box",children:[s.jsxs("div",{className:"concept-header",children:[s.jsx(Yn,{className:"icon-sm"}),s.jsx("span",{children:"What is a Hash Table?"})]}),s.jsxs("div",{className:"concept-content",children:[s.jsxs("p",{children:["A ",s.jsx("strong",{children:"Hash Table"})," maps keys to values using a hash function for O(1) lookups."]}),s.jsxs("div",{className:"concept-analogy",children:[s.jsx(zn,{}),s.jsxs("span",{children:["Like a ",s.jsx("strong",{children:"coat check"})," – give them your coat (value), get a ticket number (hash of key)!"]})]})]})]}),s.jsxs("div",{className:"concept-box",style:{marginTop:"1rem"},children:[s.jsxs("div",{className:"concept-header",children:[s.jsx(_l,{className:"icon-sm",style:{color:"#f59e0b"}}),s.jsx("span",{children:"Linear Probing"})]}),s.jsxs("div",{className:"concept-content",children:[s.jsxs("p",{children:["When two keys hash to the same slot (",s.jsx("strong",{children:"collision"}),"), we check the next slot until we find an empty one."]}),s.jsxs("div",{className:"concept-analogy",style:{marginTop:"0.5rem"},children:[s.jsx(wa,{style:{color:"#3b82f6"}}),s.jsx("span",{children:"Like parking – if spot 3 is taken, try spot 4, then 5..."})]})]})]})]}),s.jsx(Lt,{context:"Hash Table with Linear Probing"})]}),s.jsxs("div",{className:"visualizer-layout",children:[s.jsxs("div",{className:"control-panel",children:[s.jsx("h2",{children:"Operations"}),s.jsxs("div",{className:"operation-group",children:[s.jsx("label",{children:"Insert Key-Value"}),s.jsxs("div",{className:"input-group",children:[s.jsx("input",{type:"text",value:m,onChange:j=>x(j.target.value),placeholder:"Key"}),s.jsx("input",{type:"text",value:k,onChange:j=>w(j.target.value),onKeyPress:j=>j.key==="Enter"&&B(),placeholder:"Value"}),s.jsx("button",{onClick:B,className:"btn btn-insert",children:"Insert"})]})]}),s.jsxs("div",{className:"operation-group",children:[s.jsx("label",{children:"Delete Key"}),s.jsxs("div",{className:"input-group",children:[s.jsx("input",{type:"text",value:g,onChange:j=>d(j.target.value),onKeyPress:j=>j.key==="Enter"&&H(),placeholder:"Key"}),s.jsx("button",{onClick:H,className:"btn btn-delete",children:"Delete"})]})]}),s.jsxs("div",{className:"operation-group",children:[s.jsx("label",{children:"Search Key"}),s.jsxs("div",{className:"input-group",children:[s.jsx("input",{type:"text",value:f,onChange:j=>v(j.target.value),onKeyPress:j=>j.key==="Enter"&&_(),placeholder:"Key"}),s.jsx("button",{onClick:_,className:"btn btn-search",children:"Search"})]})]}),s.jsx("div",{className:"operation-group",children:s.jsx("button",{onClick:E,className:"btn btn-clear",children:"Clear Table"})}),s.jsxs("div",{className:"info-panel",children:[s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Items"}),s.jsxs("span",{className:"info-value",children:[t,"/",l]})]}),s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Load"}),s.jsxs("span",{className:"info-value",style:{color:a>=.7?"#f59e0b":"inherit"},children:[(a*100).toFixed(0),"%"]})]}),s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Collisions"}),s.jsx("span",{className:"info-value",style:{color:o>0?"#f59e0b":"inherit"},children:o})]})]}),s.jsxs("div",{className:"rehash-info-box",children:[s.jsx(pd,{size:16}),s.jsxs("div",{children:[s.jsx("strong",{children:"Rehashing Threshold: 70%"}),s.jsx("p",{children:"In practice, hash tables rehash (double capacity) when load factor reaches ~0.7 to maintain O(1) performance."}),a>=.7?s.jsxs("span",{className:"rehash-warning",children:["Current load (",(a*100).toFixed(0),"%) exceeds threshold!"]}):s.jsxs("span",{className:"rehash-safe",children:["Currently safe (",(a*100).toFixed(0),"% < 70%)"]})]})]}),s.jsx(Tr,{message:h})]}),s.jsxs("div",{className:"visual-panel",children:[s.jsx("h2",{children:"Hash Table"}),m&&s.jsxs("div",{className:"hash-demo",children:[s.jsxs("div",{className:"hash-demo-item",children:[s.jsx("span",{className:"hash-demo-label",children:"Key:"}),s.jsxs("span",{className:"hash-demo-key",children:['"',m,'"']})]}),s.jsx(Me,{className:"hash-demo-arrow"}),s.jsx("div",{className:"hash-demo-item",children:s.jsx("span",{className:"hash-demo-label",children:"hash()"})}),s.jsx(Me,{className:"hash-demo-arrow"}),s.jsxs("div",{className:"hash-demo-item",children:[s.jsx("span",{className:"hash-demo-label",children:"Slot:"}),s.jsx("span",{className:"hash-demo-index",children:xe(m)})]})]}),S&&s.jsxs("div",{className:"collision-banner",children:[s.jsx(_l,{size:18}),s.jsxs("div",{children:[s.jsx("strong",{children:"Collision Detected!"}),s.jsxs("p",{children:['"',S.key,'" hashed to slot ',s.jsx("span",{className:"slot-badge original",children:S.originalSlot}),S.probedSlots.length>1&&s.jsxs(s.Fragment,{children:[" ","- Probed: ",S.probedSlots.map((j,z)=>s.jsxs("span",{children:[s.jsx("span",{className:`slot-badge ${z===S.probedSlots.length-1?"final":"probed"}`,children:j}),z<S.probedSlots.length-1&&" > "]},z))]})]})]})]}),s.jsx("div",{className:"ht-visual",children:!e||e.length===0?s.jsx("div",{className:"ht-empty",children:"Hash table is empty. Insert some key-value pairs!"}):s.jsx("div",{className:"ht-buckets",children:e.map((j,z)=>{const R=I.includes(z),b=S&&S.originalSlot===z,$=S&&S.finalSlot===z;return s.jsxs("div",{className:`ht-row ${j?"filled":"empty"} 
                        ${N===z?"highlighted":""} 
                        ${P&&j&&j[0]===P?"just-inserted":""}
                        ${R?"probed":""}
                        ${b?"original-hash":""}
                        ${$?"final-slot":""}`,children:[R&&s.jsx("div",{className:"probe-indicator",children:b?"X":$?"O":">"}),s.jsx("div",{className:`ht-key-box ${j?"has-key":""}`,children:j&&s.jsx("span",{className:"ht-key",children:j[0]})}),s.jsx("div",{className:"ht-arrow",children:j&&s.jsx(Me,{size:20})}),s.jsx("div",{className:`ht-index ${b?"collision-index":""}`,children:z}),s.jsx("div",{className:`ht-value-box ${j?"has-value":""}`,children:j?s.jsx("span",{className:"ht-value",children:j[1]}):s.jsx("span",{className:"ht-empty-slot",children:"—"})})]},z)})})}),s.jsxs("div",{className:"ht-legend",children:[s.jsxs("div",{className:"legend-item",children:[s.jsx("div",{className:"legend-color key-color"}),s.jsx("span",{children:"Key"})]}),s.jsxs("div",{className:"legend-item",children:[s.jsx("div",{className:"legend-color index-color"}),s.jsx("span",{children:"Index"})]}),s.jsxs("div",{className:"legend-item",children:[s.jsx("div",{className:"legend-color value-color"}),s.jsx("span",{children:"Value"})]}),I.length>0&&s.jsxs("div",{className:"legend-item",children:[s.jsx("div",{className:"legend-color probe-color"}),s.jsx("span",{children:"Probing Path"})]})]})]})]}),s.jsx(Pt,{dataStructure:"hashtable"})]})}function nv(){const[e,n]=useState([]),[t,r]=useState(0),[l,i]=useState(0),[a,u]=useState(0),[o,c]=useState(0);It(3e3);const[h,p]=useState(""),[m,x]=useState(""),[k,w]=useState(""),[g,d]=useState(""),[f,v]=useState([]);useEffect(()=>{N()},[]);const N=async()=>{try{const C=await Ze("/api/hashtable_chaining");n(C.table||[]),r(C.size||0),i(C.capacity||0),u(C.load_factor||0),c(C.collision_count||0)}catch(C){console.error("Error loading hashtable:",C)}};return s.jsx("div",{children:s.jsx("h1",{children:"Hash Table Chaining"})})}function tv(){const[e,n]=y.useState([]),[t,r]=y.useState(0),[l,i]=y.useState(0),[a,u]=y.useState(0),{message:o,showMessage:c}=It(3e3),[h,p]=y.useState(""),[m,x]=y.useState(""),[k,w]=y.useState(""),[g,d]=y.useState(""),[f,v]=y.useState(null),[N,C]=y.useState([]),[I,L]=y.useState(null),[P,M]=y.useState(null);y.useEffect(()=>{S()},[]);const S=async()=>{try{const _=await Ze("/api/hashtable_quadratic");n(_.table||[]),r(_.size||0),i(_.capacity||0),u(_.load_factor||0)}catch(_){console.error("Error loading hashtable:",_)}},D=_=>{if(!l||l===0)return 0;let E=0;for(let j=0;j<_.length;j++)E=(E*31+_.charCodeAt(j))%l;return E},ge=(_,E)=>{var R;const j=D(_),z=[];for(let b=0;b<l;b++){const $=(j+b*b)%l;if(z.push({index:$,i:b,formula:`(${j} + ${b}²) % ${l} = ${$}`}),!E[$]||E[$][0]===_)break}return{originalHash:j,path:z,finalSlot:(R=z[z.length-1])==null?void 0:R.index}},xe=async()=>{if(!h.trim()||!m.trim()){c("Please enter both key and value!","error");return}const _=l>0?D(h.trim()):0,E=e.length>0&&e[_]&&e[_]!=="DELETED"&&e[_][0]!==h.trim();let j=null;E&&(j=ge(h.trim(),e));try{const z=await ae("/api/hashtable_quadratic/insert",{key:h.trim(),value:m.trim()});if(z.error){c(z.error,"error");return}await S(),L(h.trim()),E&&j?(M({key:h.trim(),originalSlot:j.originalHash,probedSlots:j.path,finalSlot:z.final_index}),C(j.path.map(R=>R.index)),c(`Collision! Quadratic probing: ${j.path.length} probe(s)`,"warning"),setTimeout(()=>{C([]),M(null)},5e3)):(c(`Inserted "${h}" → slot ${_}`,"success"),v(_),setTimeout(()=>v(null),2e3)),p(""),x(""),setTimeout(()=>L(null),3e3)}catch{c("Error inserting. Is Flask running?","error")}},We=async()=>{if(!k.trim()){c("Please enter a key!","error");return}try{const _=await ae("/api/hashtable_quadratic/delete",{key:k.trim()});if(_.error){c(_.error,"error");return}await S(),c(`Deleted "${k}"`,"success"),w("")}catch{c("Error deleting. Is Flask running?","error")}},B=async()=>{if(!g.trim()){c("Please enter a key!","error");return}try{const _=await Ze(`/api/hashtable_quadratic/get?key=${encodeURIComponent(g.trim())}`);if(_.error){c(_.error,"error");return}_.found?c(`Found: "${g}" = ${_.value}`,"success"):c(`Key "${g}" not found`,"error"),d("")}catch{c("Error searching item","error")}},H=async()=>{try{await ae("/api/hashtable_quadratic/clear",{}),await S(),C([]),M(null),c("Hashtable cleared!","success")}catch{c("Error clearing hashtable","error")}};return s.jsxs("div",{className:"container",children:[s.jsxs("div",{className:"intro-layout",children:[s.jsxs("div",{className:"intro-left",children:[s.jsxs("div",{className:"concept-box",children:[s.jsxs("div",{className:"concept-header",children:[s.jsx(Yn,{className:"icon-sm"}),s.jsx("span",{children:"What is Quadratic Probing?"})]}),s.jsxs("div",{className:"concept-content",children:[s.jsxs("p",{children:[s.jsx("strong",{children:"Quadratic Probing"})," is a collision resolution technique where we probe at quadratically increasing intervals."]}),s.jsxs("div",{style:{background:"var(--bg-tertiary)",padding:"0.75rem",borderRadius:"8px",marginTop:"0.5rem",fontFamily:"monospace",fontSize:"0.9rem"},children:[s.jsx("div",{children:"probe(i) = (hash + i²) % capacity"}),s.jsx("div",{style:{color:"var(--text-muted)",marginTop:"0.25rem"},children:"i = 0, 1, 4, 9, 16, 25..."})]}),s.jsxs("div",{className:"concept-analogy",style:{marginTop:"0.75rem"},children:[s.jsx(zn,{}),s.jsxs("span",{children:["Unlike linear probing, we jump further each time – reducing ",s.jsx("strong",{children:"clustering"}),"!"]})]})]})]}),s.jsxs("div",{className:"concept-box",style:{marginTop:"1rem"},children:[s.jsxs("div",{className:"concept-header",children:[s.jsx(wa,{className:"icon-sm",style:{color:"#3b82f6"}}),s.jsx("span",{children:"Linear vs Quadratic"})]}),s.jsxs("div",{className:"concept-content",children:[s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",fontSize:"0.85rem"},children:[s.jsxs("div",{children:[s.jsx("strong",{style:{color:"#f59e0b"},children:"Linear:"}),s.jsx("div",{style:{fontFamily:"monospace",marginTop:"0.25rem"},children:"+1, +2, +3, +4..."})]}),s.jsxs("div",{children:[s.jsx("strong",{style:{color:"#22c55e"},children:"Quadratic:"}),s.jsx("div",{style:{fontFamily:"monospace",marginTop:"0.25rem"},children:"+1, +4, +9, +16..."})]})]}),s.jsx("p",{style:{marginTop:"0.75rem",fontSize:"0.85rem"},children:"Quadratic probing spreads entries more evenly but may not find empty slots if table is over 50% full."})]})]})]}),s.jsx(Lt,{context:"Hash Table with Quadratic Probing"})]}),s.jsxs("div",{className:"visualizer-layout",children:[s.jsxs("div",{className:"control-panel",children:[s.jsx("h2",{children:"Operations"}),s.jsxs("div",{className:"operation-group",children:[s.jsx("label",{children:"Insert Key-Value"}),s.jsxs("div",{className:"input-group",children:[s.jsx("input",{type:"text",value:h,onChange:_=>p(_.target.value),placeholder:"Key"}),s.jsx("input",{type:"text",value:m,onChange:_=>x(_.target.value),onKeyPress:_=>_.key==="Enter"&&xe(),placeholder:"Value"}),s.jsx("button",{onClick:xe,className:"btn btn-insert",children:"Insert"})]})]}),s.jsxs("div",{className:"operation-group",children:[s.jsx("label",{children:"Delete Key"}),s.jsxs("div",{className:"input-group",children:[s.jsx("input",{type:"text",value:k,onChange:_=>w(_.target.value),onKeyPress:_=>_.key==="Enter"&&We(),placeholder:"Key"}),s.jsx("button",{onClick:We,className:"btn btn-delete",children:"Delete"})]})]}),s.jsxs("div",{className:"operation-group",children:[s.jsx("label",{children:"Search Key"}),s.jsxs("div",{className:"input-group",children:[s.jsx("input",{type:"text",value:g,onChange:_=>d(_.target.value),onKeyPress:_=>_.key==="Enter"&&B(),placeholder:"Key"}),s.jsx("button",{onClick:B,className:"btn btn-search",children:"Search"})]})]}),s.jsx("div",{className:"operation-group",children:s.jsx("button",{onClick:H,className:"btn btn-clear",children:"Clear Table"})}),s.jsxs("div",{className:"info-panel",children:[s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Items"}),s.jsxs("span",{className:"info-value",children:[t,"/",l]})]}),s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Load"}),s.jsxs("span",{className:"info-value",style:{color:a>=.5?"#f59e0b":"inherit"},children:[(a*100).toFixed(0),"%"]})]})]}),s.jsxs("div",{className:"rehash-info-box",children:[s.jsx(pd,{size:16}),s.jsxs("div",{children:[s.jsx("strong",{children:"Rehashing Threshold: 50%"}),s.jsx("p",{children:"Quadratic probing requires lower load factor (~0.5) to guarantee finding empty slots."}),a>=.5?s.jsxs("span",{className:"rehash-warning",children:["Load (",(a*100).toFixed(0),"%) at threshold!"]}):s.jsxs("span",{className:"rehash-safe",children:["Currently safe (",(a*100).toFixed(0),"% < 50%)"]})]})]}),s.jsx(Tr,{message:o})]}),s.jsxs("div",{className:"visual-panel",children:[s.jsx("h2",{children:"Hash Table (Quadratic Probing)"}),h&&s.jsxs("div",{className:"hash-demo",children:[s.jsxs("div",{className:"hash-demo-item",children:[s.jsx("span",{className:"hash-demo-label",children:"Key:"}),s.jsxs("span",{className:"hash-demo-key",children:['"',h,'"']})]}),s.jsx(Me,{className:"hash-demo-arrow"}),s.jsx("div",{className:"hash-demo-item",children:s.jsx("span",{className:"hash-demo-label",children:"hash()"})}),s.jsx(Me,{className:"hash-demo-arrow"}),s.jsxs("div",{className:"hash-demo-item",children:[s.jsx("span",{className:"hash-demo-label",children:"Slot:"}),s.jsx("span",{className:"hash-demo-index",children:D(h)})]})]}),P&&s.jsxs("div",{className:"collision-banner",children:[s.jsx(_l,{size:18}),s.jsxs("div",{children:[s.jsx("strong",{children:"Quadratic Probing!"}),s.jsxs("p",{children:['"',P.key,'" hashed to slot ',s.jsx("span",{className:"slot-badge original",children:P.originalSlot})]}),s.jsx("div",{style:{marginTop:"0.5rem",fontSize:"0.8rem",fontFamily:"monospace"},children:P.probedSlots.map((_,E)=>s.jsxs("div",{style:{marginBottom:"0.25rem"},children:["i=",_.i,": ",_.formula,E===P.probedSlots.length-1&&s.jsx("span",{style:{color:"#4ade80"},children:" [FOUND]"})]},E))})]})]}),s.jsx("div",{className:"ht-visual",children:!e||e.length===0?s.jsx("div",{className:"ht-empty",children:"Hash table is empty. Insert some key-value pairs!"}):s.jsx("div",{className:"ht-buckets",children:e.map((_,E)=>{const j=N.includes(E),z=P&&P.originalSlot===E,R=P&&P.finalSlot===E,b=_==="DELETED",$=_&&_!=="DELETED";return s.jsxs("div",{className:`ht-row ${$?"filled":"empty"} 
                        ${b?"deleted":""}
                        ${f===E?"highlighted":""} 
                        ${I&&$&&_[0]===I?"just-inserted":""}
                        ${j?"probed":""}
                        ${z?"original-hash":""}
                        ${R?"final-slot":""}`,children:[j&&s.jsx("div",{className:"probe-indicator",children:z?"X":R?"O":">"}),s.jsxs("div",{className:`ht-key-box ${$?"has-key":""} ${b?"deleted-slot":""}`,children:[$&&s.jsx("span",{className:"ht-key",children:_[0]}),b&&s.jsx("span",{className:"ht-deleted-text",children:"DEL"})]}),s.jsx("div",{className:"ht-arrow",children:$&&s.jsx(Me,{size:20})}),s.jsx("div",{className:`ht-index ${z?"collision-index":""}`,children:E}),s.jsx("div",{className:`ht-value-box ${$?"has-value":""} ${b?"deleted-slot":""}`,children:$?s.jsx("span",{className:"ht-value",children:_[1]}):b?s.jsx("span",{className:"ht-deleted-text",children:"DELETED"}):s.jsx("span",{className:"ht-empty-slot",children:"—"})})]},E)})})}),s.jsxs("div",{className:"ht-legend",children:[s.jsxs("div",{className:"legend-item",children:[s.jsx("div",{className:"legend-color key-color"}),s.jsx("span",{children:"Key"})]}),s.jsxs("div",{className:"legend-item",children:[s.jsx("div",{className:"legend-color index-color"}),s.jsx("span",{children:"Index"})]}),s.jsxs("div",{className:"legend-item",children:[s.jsx("div",{className:"legend-color value-color"}),s.jsx("span",{children:"Value"})]}),N.length>0&&s.jsxs("div",{className:"legend-item",children:[s.jsx("div",{className:"legend-color probe-color"}),s.jsx("span",{children:"Probe Path"})]})]})]})]}),s.jsx(Pt,{dataStructure:"hashtable"})]})}const dt=20,rv={inorder:{name:"Inorder Traversal",order:"Left → Root → Right",description:"Visit left subtree, process root, then visit right subtree. For BST, this produces sorted order.",useCase:["Get sorted elements","Validate BST","Create mirror image"],complexity:{time:"O(n)",space:"O(h)"}},preorder:{name:"Preorder Traversal",order:"Root → Left → Right",description:"Process root first, then recursively visit left and right subtrees. Useful for copying trees.",useCase:["Copy tree structure","Serialize/deserialize","Prefix expressions"],complexity:{time:"O(n)",space:"O(h)"}},postorder:{name:"Postorder Traversal",order:"Left → Right → Root",description:"Visit left subtree, right subtree, then process root. Essential for deleting nodes safely.",useCase:["Delete nodes safely","Calculate folder sizes","Postfix expressions"],complexity:{time:"O(n)",space:"O(h)"}},levelorder:{name:"Level Order Traversal",order:"Level by Level (BFS)",description:"Visit nodes level by level using a queue. Perfect for finding shortest paths.",useCase:["Shortest path","Level-wise printing","Nodes at distance K"],complexity:{time:"O(n)",space:"O(w)"}}},gs=(e,n=[])=>(e&&(gs(e.left,n),n.push(e.data),gs(e.right,n)),n),xs=(e,n=[])=>(e&&(n.push(e.data),xs(e.left,n),xs(e.right,n)),n),ks=(e,n=[])=>(e&&(ks(e.left,n),ks(e.right,n),n.push(e.data)),n),lv=e=>{if(!e)return[];const n=[],t=[e];for(;t.length;){const r=t.shift();n.push(r.data),r.left&&t.push(r.left),r.right&&t.push(r.right)}return n},ws=(e,n=0)=>e?Math.max(ws(e.left,n+1),ws(e.right,n+1)):n-1;function iv(){return s.jsxs("div",{className:"intro-left",children:[s.jsxs("div",{className:"concept-box",children:[s.jsxs("div",{className:"concept-header",children:[s.jsx(Yn,{className:"icon-sm"}),s.jsx("span",{children:"What is a Binary Tree?"})]}),s.jsxs("div",{className:"concept-content",children:[s.jsxs("p",{children:["A ",s.jsx("strong",{children:"Binary Tree"})," is a hierarchical data structure where each node has at most ",s.jsx("strong",{children:"two children"}),": left and right."]}),s.jsxs("div",{className:"concept-analogy",children:[s.jsx(zn,{}),s.jsxs("span",{children:["Think of a ",s.jsx("strong",{children:"family tree"})," – each person can have up to two children!"]})]}),s.jsxs("div",{className:"concept-key-terms",children:[s.jsx("h4",{children:"Key Terms:"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Node:"})," Contains data and links to children"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Root:"})," The topmost node (no parent)"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Leaf:"})," A node with no children"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Height:"})," Longest path from root to leaf"]})]})]})]})]}),s.jsxs("div",{className:"concept-box",style:{marginTop:"1rem"},children:[s.jsxs("div",{className:"concept-header",children:[s.jsx(wa,{className:"icon-sm"}),s.jsx("span",{children:"What are Tree Traversals?"})]}),s.jsxs("div",{className:"concept-content",children:[s.jsxs("p",{children:[s.jsx("strong",{children:"Tree Traversal"})," is visiting each node ",s.jsx("strong",{children:"exactly once"})," in a specific order."]}),s.jsxs("div",{className:"concept-why-traverse",children:[s.jsx("h4",{children:"Why Traverse?"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Search:"})," Find specific data"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Copy:"})," Duplicate the tree"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Evaluate:"})," Calculate expressions"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Delete:"})," Remove nodes properly"]})]})]}),s.jsxs("div",{className:"concept-analogy",style:{marginTop:"0.75rem"},children:[s.jsx(zn,{}),s.jsx("span",{children:"Like reading a book – you can read in different orders based on your needs!"})]})]})]})]})}function sv({insertValue:e,deleteValue:n,size:t,height:r,message:l,tree:i,isAnimating:a,visitedNodes:u,onInsertValueChange:o,onDeleteValueChange:c,onInsert:h,onDelete:p,onTraversal:m,onClear:x,onResetTraversal:k}){const w=(g,d)=>{const f=g.target.value;(f===""||f==="-"||/^-?\d*\.?\d*$/.test(f))&&d(f)};return s.jsxs("div",{className:"control-panel",children:[s.jsx("h2",{children:"Binary Tree Traversals"}),s.jsxs("div",{className:"operation-group",children:[s.jsx("label",{htmlFor:"insertValue",children:"Insert Node"}),s.jsxs("div",{className:"input-group",children:[s.jsx("input",{type:"number",id:"insertValue",value:e,onChange:g=>w(g,o),onKeyPress:g=>g.key==="Enter"&&h(),placeholder:"Enter a number"}),s.jsx("button",{onClick:h,className:"btn btn-insert",children:"Insert"})]})]}),s.jsxs("div",{className:"operation-group",children:[s.jsx("label",{htmlFor:"deleteValue",children:"Delete Node"}),s.jsxs("div",{className:"input-group",children:[s.jsx("input",{type:"number",id:"deleteValue",value:n,onChange:g=>w(g,c),onKeyPress:g=>g.key==="Enter"&&p(),placeholder:"Enter a number"}),s.jsx("button",{onClick:p,className:"btn btn-delete",children:"Delete"})]})]}),s.jsxs("div",{className:"operation-group",children:[s.jsx("label",{children:"Traversals"}),s.jsx("div",{className:"btn-group",children:["inorder","preorder","postorder","levelorder"].map(g=>s.jsx("button",{onClick:()=>m(g),className:"btn btn-traversal",disabled:a||!i,children:g==="levelorder"?"Level Order":g.charAt(0).toUpperCase()+g.slice(1)},g))}),u.length>0&&!a&&s.jsx("button",{onClick:k,className:"btn btn-secondary",style:{marginTop:"0.5rem",width:"100%"},children:"Reset Colors"})]}),s.jsxs("div",{className:"traversal-legend",children:[s.jsxs("div",{className:"legend-item",children:[s.jsx("span",{className:"legend-dot legend-dot--default"}),s.jsx("span",{children:"Not visited"})]}),s.jsxs("div",{className:"legend-item",children:[s.jsx("span",{className:"legend-dot legend-dot--visiting"}),s.jsx("span",{children:"Visiting"})]}),s.jsxs("div",{className:"legend-item",children:[s.jsx("span",{className:"legend-dot legend-dot--visited"}),s.jsx("span",{children:"Visited"})]})]}),s.jsxs("div",{className:"info-panel",children:[s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Size:"}),s.jsx("span",{className:"info-value",children:t})]}),s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Height:"}),s.jsx("span",{className:"info-value",children:r})]}),s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Max Size:"}),s.jsx("span",{className:"info-value",children:dt})]})]}),t>=dt*.8&&t<dt&&s.jsxs("div",{className:"warning-box",children:[s.jsx(_l,{size:18}),s.jsxs("div",{children:[s.jsx("strong",{children:"Tree is filling up!"})," You're at ",t,"/",dt," nodes."]})]}),s.jsx("div",{className:"operation-group",children:s.jsx("button",{onClick:x,className:"btn btn-clear",children:"Clear Tree"})}),l&&s.jsx("div",{className:`message message-${l.includes("Error")||l.includes("error")?"error":/success|complete|Inserted|Deleted|cleared/i.test(l)?"success":l.includes("full")?"warning":"info"}`,children:l})]})}function av({tree:e,currentNode:n,visitedNodes:t}){const r=o=>{const c=n===o,h=t.includes(o);return{color:c?"#f59e0b":h?"#10b981":"#6366f1",glow:c?"drop-shadow(0 0 12px #f59e0b) drop-shadow(0 0 20px #f59e0b)":h?"drop-shadow(0 0 6px #10b981)":"none",radius:c?30:25,stroke:c?3:2,fontSize:c?16:14,fontWeight:c?"bold":"normal"}},l=(o,c,h,p,m)=>{if(!o)return[];const x=Math.pow(2,m-p)*50,k=r(o.data),w=[];return o.left&&(w.push(s.jsx("line",{x1:c,y1:h,x2:c-x,y2:h+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:"2"},`l-${o.data}-l`)),w.push(...l(o.left,c-x,h+100,p+1,m))),o.right&&(w.push(s.jsx("line",{x1:c,y1:h,x2:c+x,y2:h+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:"2"},`l-${o.data}-r`)),w.push(...l(o.right,c+x,h+100,p+1,m))),w.push(s.jsxs("g",{style:{filter:k.glow,transition:"all 0.3s ease"},children:[s.jsx("circle",{cx:c,cy:h,r:k.radius,fill:k.color,stroke:"white",strokeWidth:k.stroke,style:{transition:"all 0.3s ease"}}),s.jsx("text",{x:c,y:h,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:k.fontSize,fontWeight:k.fontWeight,children:o.data})]},`n-${o.data}-${c}`)),w};if(!e)return s.jsx("div",{className:"tree-empty",children:"Tree is empty. Insert some nodes!"});const i=ws(e),a=(i+1)*100+50,u=Math.max(800,Math.pow(2,Math.max(i,1))*80);return s.jsx("svg",{width:u,height:a,className:"tree-svg",children:l(e,u/2,50,0,i)})}function ov({traversalType:e,traversalResult:n,isAnimating:t,traversalComplete:r}){if(!e||n.length===0&&!t)return null;const l=rv[e];return s.jsxs("div",{className:"traversal-output-panel",children:[s.jsxs("div",{style:{marginBottom:"1rem"},children:[s.jsxs("h3",{className:"traversal-title",children:[l==null?void 0:l.name,t&&s.jsx("span",{className:"traversal-badge traversal-badge--running",children:"Running..."}),r&&s.jsx("span",{className:"traversal-badge traversal-badge--complete",children:"Complete"})]}),s.jsxs("p",{className:"traversal-order",children:[s.jsx("strong",{children:"Order:"})," ",l==null?void 0:l.order]}),s.jsx("p",{className:"traversal-description",children:l==null?void 0:l.description})]}),s.jsxs("div",{className:"traversal-output-box",children:[s.jsx("div",{className:"traversal-output-label",children:"Output Sequence:"}),s.jsx("div",{className:"traversal-sequence-container",children:n.length===0&&t?s.jsx("span",{style:{color:"var(--text-muted)",fontStyle:"italic"},children:"Traversing..."}):n.map((i,a)=>s.jsx("span",{className:`traversal-node ${a===n.length-1&&!r?"traversal-node--current":"traversal-node--complete"}`,children:i},a))})]}),r&&n.length>0&&s.jsxs("div",{className:"traversal-array-section",children:[s.jsx("div",{className:"traversal-array-label",children:"Array Output:"}),s.jsxs("code",{className:"traversal-array-output",children:["[",n.join(", "),"]"]}),s.jsxs("p",{className:"traversal-use-case",children:["Use case: ",l==null?void 0:l.useCase.join(" • ")]}),s.jsxs("div",{className:"traversal-complexity",children:[s.jsx("strong",{children:"Time:"})," ",s.jsx("code",{className:"complexity-value",children:l==null?void 0:l.complexity.time})," (visits each node once)",s.jsx("br",{}),s.jsx("strong",{children:"Space:"})," ",s.jsx("code",{className:"complexity-value",children:l==null?void 0:l.complexity.space})," (recursion stack/queue)"]})]})]})}function uv(){const[e,n]=y.useState(null),[t,r]=y.useState(0),[l,i]=y.useState(-1),[a,u]=y.useState(""),[o,c]=y.useState(""),[h,p]=y.useState(""),[m,x]=y.useState([]),[k,w]=y.useState(!1),[g,d]=y.useState(null),[f,v]=y.useState([]),[N,C]=y.useState(null),[I,L]=y.useState(!1);y.useEffect(()=>{P()},[]);const P=async()=>{try{const H=await(await fetch("/api/binarytree")).json();n(H.tree),r(H.size||0),i(H.height!==void 0?H.height:-1)}catch(B){console.error("Error loading tree:",B)}},M=B=>{p(B),setTimeout(()=>p(""),3e3)},S=async()=>{if(!a.trim()){M("Please enter a number!");return}const B=Number(a);if(isNaN(B)){M("Please enter a valid number!");return}if(t>=dt){M(`Tree is full! Maximum size is ${dt} nodes.`);return}try{const _=await(await fetch("/api/binarytree/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:B})})).json();if(_.error){M(_.error);return}n(_.tree),r(_.size||0),i(_.height!==void 0?_.height:-1),M(`Inserted ${B}`),u("")}catch{M("Error inserting node")}},D=async()=>{if(!o.trim()){M("Please enter a number!");return}const B=Number(o);if(isNaN(B)){M("Please enter a valid number!");return}try{const _=await(await fetch("/api/binarytree/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:B})})).json();if(_.error){M(_.error);return}n(_.tree),r(_.size||0),i(_.height!==void 0?_.height:-1),M(`Deleted ${B}`),c("")}catch{M("Error deleting node")}},ge=async()=>{try{await fetch("/api/binarytree/clear",{method:"POST"}),n(null),r(0),i(-1),We(),M("Tree cleared!")}catch{M("Error clearing tree")}},xe=async B=>{if(!e){M("Tree is empty! Insert some nodes first.");return}w(!0),x([]),d(null),v([]),C(B),L(!1);let H=[];switch(B){case"inorder":H=gs(e);break;case"preorder":H=xs(e);break;case"postorder":H=ks(e);break;case"levelorder":H=lv(e);break;default:H=[]}if(H.length===0){M("Tree is empty!"),w(!1);return}for(let _=0;_<H.length;_++)d(H[_]),await new Promise(E=>setTimeout(E,600)),v(E=>[...E,H[_]]),x(E=>[...E,H[_]]),await new Promise(E=>setTimeout(E,200));d(null),L(!0),w(!1),M(`${B.charAt(0).toUpperCase()+B.slice(1)} traversal complete!`)},We=()=>{x([]),d(null),v([]),C(null),L(!1)};return s.jsxs("div",{className:"container",children:[s.jsxs("div",{className:"intro-layout",children:[s.jsx(iv,{}),s.jsx(Lt,{context:"Binary Tree data structure and traversals"})]}),s.jsxs("div",{className:"visualizer-layout",children:[s.jsx(sv,{insertValue:a,deleteValue:o,size:t,height:l,message:h,tree:e,isAnimating:k,visitedNodes:f,onInsertValueChange:u,onDeleteValueChange:c,onInsert:S,onDelete:D,onTraversal:xe,onClear:ge,onResetTraversal:We}),s.jsxs("div",{className:"visual-panel",children:[s.jsx("h2",{children:"Binary Tree Visualization"}),s.jsx("div",{className:"tree-container",children:s.jsx(av,{tree:e,currentNode:g,visitedNodes:f})}),s.jsx(ov,{traversalType:N,traversalResult:m,isAnimating:k,traversalComplete:I})]})]}),s.jsx(Pt,{dataStructure:"binarytree"})]})}function cv(){return s.jsxs("div",{className:"homepage-body",children:[s.jsx(Em,{}),s.jsxs("main",{className:"main-content",children:[s.jsxs(bp,{children:[s.jsx(Pe,{path:"/",element:s.jsx(Cm,{})}),s.jsx(Pe,{path:"/algorithms",element:s.jsx(_m,{})}),s.jsx(Pe,{path:"/contact",element:s.jsx(zm,{})}),s.jsx(Pe,{path:"/contributions",element:s.jsx(Lm,{})}),s.jsx(Pe,{path:"/stack",element:s.jsx(Ym,{})}),s.jsx(Pe,{path:"/queue",element:s.jsx(Zm,{})}),s.jsx(Pe,{path:"/linkedlist",element:s.jsx(Jm,{})}),s.jsx(Pe,{path:"/hashtable_linear",element:s.jsx(ev,{})}),s.jsx(Pe,{path:"/hashtable_quadratic",element:s.jsx(tv,{})}),s.jsx(Pe,{path:"/hashtable_chaining",element:s.jsx(nv,{})}),s.jsx(Pe,{path:"/binarytree",element:s.jsx(uv,{})})]}),s.jsx(Tm,{})]})]})}ji.createRoot(document.getElementById("root")).render(s.jsx(Ts.StrictMode,{children:s.jsx(Bp,{children:s.jsx(cv,{})})}));
