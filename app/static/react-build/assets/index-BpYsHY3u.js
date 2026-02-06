function Kh(e,t){for(var r=0;r<t.length;r++){const s=t[r];if(typeof s!="string"&&!Array.isArray(s)){for(const i in s)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(s,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>s[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function r(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(i){if(i.ep)return;i.ep=!0;const a=r(i);fetch(i.href,a)}})();function Wh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ad={exports:{}},ki={},ld={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var is=Symbol.for("react.element"),Gh=Symbol.for("react.portal"),Qh=Symbol.for("react.fragment"),Xh=Symbol.for("react.strict_mode"),Yh=Symbol.for("react.profiler"),Jh=Symbol.for("react.provider"),Zh=Symbol.for("react.context"),ep=Symbol.for("react.forward_ref"),np=Symbol.for("react.suspense"),tp=Symbol.for("react.memo"),rp=Symbol.for("react.lazy"),Lo=Symbol.iterator;function sp(e){return e===null||typeof e!="object"?null:(e=Lo&&e[Lo]||e["@@iterator"],typeof e=="function"?e:null)}var od={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},cd=Object.assign,dd={};function lr(e,t,r){this.props=e,this.context=t,this.refs=dd,this.updater=r||od}lr.prototype.isReactComponent={};lr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};lr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ud(){}ud.prototype=lr.prototype;function Tl(e,t,r){this.props=e,this.context=t,this.refs=dd,this.updater=r||od}var Ll=Tl.prototype=new ud;Ll.constructor=Tl;cd(Ll,lr.prototype);Ll.isPureReactComponent=!0;var _o=Array.isArray,hd=Object.prototype.hasOwnProperty,_l={current:null},pd={key:!0,ref:!0,__self:!0,__source:!0};function fd(e,t,r){var s,i={},a=null,l=null;if(t!=null)for(s in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(a=""+t.key),t)hd.call(t,s)&&!pd.hasOwnProperty(s)&&(i[s]=t[s]);var o=arguments.length-2;if(o===1)i.children=r;else if(1<o){for(var c=Array(o),h=0;h<o;h++)c[h]=arguments[h+2];i.children=c}if(e&&e.defaultProps)for(s in o=e.defaultProps,o)i[s]===void 0&&(i[s]=o[s]);return{$$typeof:is,type:e,key:a,ref:l,props:i,_owner:_l.current}}function ip(e,t){return{$$typeof:is,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function El(e){return typeof e=="object"&&e!==null&&e.$$typeof===is}function ap(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Eo=/\/+/g;function Di(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ap(""+e.key):t.toString(36)}function Rs(e,t,r,s,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case is:case Gh:l=!0}}if(l)return l=e,i=i(l),e=s===""?"."+Di(l,0):s,_o(i)?(r="",e!=null&&(r=e.replace(Eo,"$&/")+"/"),Rs(i,t,r,"",function(h){return h})):i!=null&&(El(i)&&(i=ip(i,r+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Eo,"$&/")+"/")+e)),t.push(i)),1;if(l=0,s=s===""?".":s+":",_o(e))for(var o=0;o<e.length;o++){a=e[o];var c=s+Di(a,o);l+=Rs(a,t,r,c,i)}else if(c=sp(e),typeof c=="function")for(e=c.call(e),o=0;!(a=e.next()).done;)a=a.value,c=s+Di(a,o++),l+=Rs(a,t,r,c,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function ps(e,t,r){if(e==null)return e;var s=[],i=0;return Rs(e,s,"","",function(a){return t.call(r,a,i++)}),s}function lp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var He={current:null},Ps={transition:null},op={ReactCurrentDispatcher:He,ReactCurrentBatchConfig:Ps,ReactCurrentOwner:_l};function md(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:ps,forEach:function(e,t,r){ps(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return ps(e,function(){t++}),t},toArray:function(e){return ps(e,function(t){return t})||[]},only:function(e){if(!El(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ee.Component=lr;ee.Fragment=Qh;ee.Profiler=Yh;ee.PureComponent=Tl;ee.StrictMode=Xh;ee.Suspense=np;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=op;ee.act=md;ee.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=cd({},e.props),i=e.key,a=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,l=_l.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(c in t)hd.call(t,c)&&!pd.hasOwnProperty(c)&&(s[c]=t[c]===void 0&&o!==void 0?o[c]:t[c])}var c=arguments.length-2;if(c===1)s.children=r;else if(1<c){o=Array(c);for(var h=0;h<c;h++)o[h]=arguments[h+2];s.children=o}return{$$typeof:is,type:e.type,key:i,ref:a,props:s,_owner:l}};ee.createContext=function(e){return e={$$typeof:Zh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Jh,_context:e},e.Consumer=e};ee.createElement=fd;ee.createFactory=function(e){var t=fd.bind(null,e);return t.type=e,t};ee.createRef=function(){return{current:null}};ee.forwardRef=function(e){return{$$typeof:ep,render:e}};ee.isValidElement=El;ee.lazy=function(e){return{$$typeof:rp,_payload:{_status:-1,_result:e},_init:lp}};ee.memo=function(e,t){return{$$typeof:tp,type:e,compare:t===void 0?null:t}};ee.startTransition=function(e){var t=Ps.transition;Ps.transition={};try{e()}finally{Ps.transition=t}};ee.unstable_act=md;ee.useCallback=function(e,t){return He.current.useCallback(e,t)};ee.useContext=function(e){return He.current.useContext(e)};ee.useDebugValue=function(){};ee.useDeferredValue=function(e){return He.current.useDeferredValue(e)};ee.useEffect=function(e,t){return He.current.useEffect(e,t)};ee.useId=function(){return He.current.useId()};ee.useImperativeHandle=function(e,t,r){return He.current.useImperativeHandle(e,t,r)};ee.useInsertionEffect=function(e,t){return He.current.useInsertionEffect(e,t)};ee.useLayoutEffect=function(e,t){return He.current.useLayoutEffect(e,t)};ee.useMemo=function(e,t){return He.current.useMemo(e,t)};ee.useReducer=function(e,t,r){return He.current.useReducer(e,t,r)};ee.useRef=function(e){return He.current.useRef(e)};ee.useState=function(e){return He.current.useState(e)};ee.useSyncExternalStore=function(e,t,r){return He.current.useSyncExternalStore(e,t,r)};ee.useTransition=function(){return He.current.useTransition()};ee.version="18.3.1";ld.exports=ee;var u=ld.exports;const $e=Wh(u),cp=Kh({__proto__:null,default:$e},[u]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dp=u,up=Symbol.for("react.element"),hp=Symbol.for("react.fragment"),pp=Object.prototype.hasOwnProperty,fp=dp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mp={key:!0,ref:!0,__self:!0,__source:!0};function gd(e,t,r){var s,i={},a=null,l=null;r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(l=t.ref);for(s in t)pp.call(t,s)&&!mp.hasOwnProperty(s)&&(i[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)i[s]===void 0&&(i[s]=t[s]);return{$$typeof:up,type:e,key:a,ref:l,props:i,_owner:fp.current}}ki.Fragment=hp;ki.jsx=gd;ki.jsxs=gd;ad.exports=ki;var n=ad.exports,ja={},vd={exports:{}},nn={},xd={exports:{}},yd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,O){var S=_.length;_.push(O);e:for(;0<S;){var M=S-1>>>1,z=_[M];if(0<i(z,O))_[M]=O,_[S]=z,S=M;else break e}}function r(_){return _.length===0?null:_[0]}function s(_){if(_.length===0)return null;var O=_[0],S=_.pop();if(S!==O){_[0]=S;e:for(var M=0,z=_.length,C=z>>>1;M<C;){var P=2*(M+1)-1,L=_[P],N=P+1,F=_[N];if(0>i(L,S))N<z&&0>i(F,L)?(_[M]=F,_[N]=S,M=N):(_[M]=L,_[P]=S,M=P);else if(N<z&&0>i(F,S))_[M]=F,_[N]=S,M=N;else break e}}return O}function i(_,O){var S=_.sortIndex-O.sortIndex;return S!==0?S:_.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var l=Date,o=l.now();e.unstable_now=function(){return l.now()-o}}var c=[],h=[],d=1,p=null,m=3,b=!1,w=!1,k=!1,j=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(_){for(var O=r(h);O!==null;){if(O.callback===null)s(h);else if(O.startTime<=_)s(h),O.sortIndex=O.expirationTime,t(c,O);else break;O=r(h)}}function E(_){if(k=!1,v(_),!w)if(r(c)!==null)w=!0,R(y);else{var O=r(h);O!==null&&H(E,O.startTime-_)}}function y(_,O){w=!1,k&&(k=!1,f(D),D=-1),b=!0;var S=m;try{for(v(O),p=r(c);p!==null&&(!(p.expirationTime>O)||_&&!q());){var M=p.callback;if(typeof M=="function"){p.callback=null,m=p.priorityLevel;var z=M(p.expirationTime<=O);O=e.unstable_now(),typeof z=="function"?p.callback=z:p===r(c)&&s(c),v(O)}else s(c);p=r(c)}if(p!==null)var C=!0;else{var P=r(h);P!==null&&H(E,P.startTime-O),C=!1}return C}finally{p=null,m=S,b=!1}}var V=!1,T=null,D=-1,A=5,I=-1;function q(){return!(e.unstable_now()-I<A)}function K(){if(T!==null){var _=e.unstable_now();I=_;var O=!0;try{O=T(!0,_)}finally{O?B():(V=!1,T=null)}}else V=!1}var B;if(typeof g=="function")B=function(){g(K)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,x=$.port2;$.port1.onmessage=K,B=function(){x.postMessage(null)}}else B=function(){j(K,0)};function R(_){T=_,V||(V=!0,B())}function H(_,O){D=j(function(){_(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){w||b||(w=!0,R(y))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(_){switch(m){case 1:case 2:case 3:var O=3;break;default:O=m}var S=m;m=O;try{return _()}finally{m=S}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,O){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var S=m;m=_;try{return O()}finally{m=S}},e.unstable_scheduleCallback=function(_,O,S){var M=e.unstable_now();switch(typeof S=="object"&&S!==null?(S=S.delay,S=typeof S=="number"&&0<S?M+S:M):S=M,_){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=S+z,_={id:d++,callback:O,priorityLevel:_,startTime:S,expirationTime:z,sortIndex:-1},S>M?(_.sortIndex=S,t(h,_),r(c)===null&&_===r(h)&&(k?(f(D),D=-1):k=!0,H(E,S-M))):(_.sortIndex=z,t(c,_),w||b||(w=!0,R(y))),_},e.unstable_shouldYield=q,e.unstable_wrapCallback=function(_){var O=m;return function(){var S=m;m=O;try{return _.apply(this,arguments)}finally{m=S}}}})(yd);xd.exports=yd;var gp=xd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vp=u,en=gp;function U(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jd=new Set,Ar={};function kt(e,t){er(e,t),er(e+"Capture",t)}function er(e,t){for(Ar[e]=t,e=0;e<t.length;e++)jd.add(t[e])}var Ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Na=Object.prototype.hasOwnProperty,xp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Oo={},Ro={};function yp(e){return Na.call(Ro,e)?!0:Na.call(Oo,e)?!1:xp.test(e)?Ro[e]=!0:(Oo[e]=!0,!1)}function jp(e,t,r,s){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Np(e,t,r,s){if(t===null||typeof t>"u"||jp(e,t,r,s))return!0;if(s)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function qe(e,t,r,s,i,a,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=l}var Oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Oe[e]=new qe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Oe[t]=new qe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Oe[e]=new qe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Oe[e]=new qe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Oe[e]=new qe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Oe[e]=new qe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Oe[e]=new qe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Oe[e]=new qe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Oe[e]=new qe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ol=/[\-:]([a-z])/g;function Rl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ol,Rl);Oe[t]=new qe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ol,Rl);Oe[t]=new qe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ol,Rl);Oe[t]=new qe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Oe[e]=new qe(e,1,!1,e.toLowerCase(),null,!1,!1)});Oe.xlinkHref=new qe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Oe[e]=new qe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Pl(e,t,r,s){var i=Oe.hasOwnProperty(t)?Oe[t]:null;(i!==null?i.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Np(t,r,i,s)&&(r=null),s||i===null?yp(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,s=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,s?e.setAttributeNS(s,t,r):e.setAttribute(t,r))))}var Rn=vp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fs=Symbol.for("react.element"),_t=Symbol.for("react.portal"),Et=Symbol.for("react.fragment"),Il=Symbol.for("react.strict_mode"),ka=Symbol.for("react.profiler"),Nd=Symbol.for("react.provider"),kd=Symbol.for("react.context"),zl=Symbol.for("react.forward_ref"),wa=Symbol.for("react.suspense"),ba=Symbol.for("react.suspense_list"),Ml=Symbol.for("react.memo"),zn=Symbol.for("react.lazy"),wd=Symbol.for("react.offscreen"),Po=Symbol.iterator;function pr(e){return e===null||typeof e!="object"?null:(e=Po&&e[Po]||e["@@iterator"],typeof e=="function"?e:null)}var pe=Object.assign,$i;function Nr(e){if($i===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);$i=t&&t[1]||""}return`
`+$i+e}var Bi=!1;function Hi(e,t){if(!e||Bi)return"";Bi=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(h){var s=h}Reflect.construct(e,[],t)}else{try{t.call()}catch(h){s=h}e.call(t.prototype)}else{try{throw Error()}catch(h){s=h}e()}}catch(h){if(h&&s&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),a=s.stack.split(`
`),l=i.length-1,o=a.length-1;1<=l&&0<=o&&i[l]!==a[o];)o--;for(;1<=l&&0<=o;l--,o--)if(i[l]!==a[o]){if(l!==1||o!==1)do if(l--,o--,0>o||i[l]!==a[o]){var c=`
`+i[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=o);break}}}finally{Bi=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Nr(e):""}function kp(e){switch(e.tag){case 5:return Nr(e.type);case 16:return Nr("Lazy");case 13:return Nr("Suspense");case 19:return Nr("SuspenseList");case 0:case 2:case 15:return e=Hi(e.type,!1),e;case 11:return e=Hi(e.type.render,!1),e;case 1:return e=Hi(e.type,!0),e;default:return""}}function Sa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Et:return"Fragment";case _t:return"Portal";case ka:return"Profiler";case Il:return"StrictMode";case wa:return"Suspense";case ba:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case kd:return(e.displayName||"Context")+".Consumer";case Nd:return(e._context.displayName||"Context")+".Provider";case zl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ml:return t=e.displayName||null,t!==null?t:Sa(e.type)||"Memo";case zn:t=e._payload,e=e._init;try{return Sa(e(t))}catch{}}return null}function wp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Sa(t);case 8:return t===Il?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Zn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function bd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function bp(e){var t=bd(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){s=""+l,a.call(this,l)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return s},setValue:function(l){s=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ms(e){e._valueTracker||(e._valueTracker=bp(e))}function Sd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),s="";return e&&(s=bd(e)?e.checked?"true":"false":e.value),e=s,e!==r?(t.setValue(e),!0):!1}function Ks(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ca(e,t){var r=t.checked;return pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Io(e,t){var r=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;r=Zn(t.value!=null?t.value:r),e._wrapperState={initialChecked:s,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Cd(e,t){t=t.checked,t!=null&&Pl(e,"checked",t,!1)}function Ta(e,t){Cd(e,t);var r=Zn(t.value),s=t.type;if(r!=null)s==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?La(e,t.type,r):t.hasOwnProperty("defaultValue")&&La(e,t.type,Zn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function zo(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function La(e,t,r){(t!=="number"||Ks(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var kr=Array.isArray;function Wt(e,t,r,s){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&s&&(e[r].defaultSelected=!0)}else{for(r=""+Zn(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,s&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function _a(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(U(91));return pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Mo(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(U(92));if(kr(r)){if(1<r.length)throw Error(U(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Zn(r)}}function Td(e,t){var r=Zn(t.value),s=Zn(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),s!=null&&(e.defaultValue=""+s)}function Vo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ld(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ea(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ld(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var gs,_d=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,s,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,s,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(gs=gs||document.createElement("div"),gs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=gs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Fr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Tr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sp=["Webkit","ms","Moz","O"];Object.keys(Tr).forEach(function(e){Sp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Tr[t]=Tr[e]})});function Ed(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Tr.hasOwnProperty(e)&&Tr[e]?(""+t).trim():t+"px"}function Od(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var s=r.indexOf("--")===0,i=Ed(r,t[r],s);r==="float"&&(r="cssFloat"),s?e.setProperty(r,i):e[r]=i}}var Cp=pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Oa(e,t){if(t){if(Cp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(U(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(U(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(U(61))}if(t.style!=null&&typeof t.style!="object")throw Error(U(62))}}function Ra(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pa=null;function Vl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ia=null,Gt=null,Qt=null;function Ao(e){if(e=os(e)){if(typeof Ia!="function")throw Error(U(280));var t=e.stateNode;t&&(t=Ti(t),Ia(e.stateNode,e.type,t))}}function Rd(e){Gt?Qt?Qt.push(e):Qt=[e]:Gt=e}function Pd(){if(Gt){var e=Gt,t=Qt;if(Qt=Gt=null,Ao(e),t)for(e=0;e<t.length;e++)Ao(t[e])}}function Id(e,t){return e(t)}function zd(){}var qi=!1;function Md(e,t,r){if(qi)return e(t,r);qi=!0;try{return Id(e,t,r)}finally{qi=!1,(Gt!==null||Qt!==null)&&(zd(),Pd())}}function Dr(e,t){var r=e.stateNode;if(r===null)return null;var s=Ti(r);if(s===null)return null;r=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(U(231,t,typeof r));return r}var za=!1;if(Ln)try{var fr={};Object.defineProperty(fr,"passive",{get:function(){za=!0}}),window.addEventListener("test",fr,fr),window.removeEventListener("test",fr,fr)}catch{za=!1}function Tp(e,t,r,s,i,a,l,o,c){var h=Array.prototype.slice.call(arguments,3);try{t.apply(r,h)}catch(d){this.onError(d)}}var Lr=!1,Ws=null,Gs=!1,Ma=null,Lp={onError:function(e){Lr=!0,Ws=e}};function _p(e,t,r,s,i,a,l,o,c){Lr=!1,Ws=null,Tp.apply(Lp,arguments)}function Ep(e,t,r,s,i,a,l,o,c){if(_p.apply(this,arguments),Lr){if(Lr){var h=Ws;Lr=!1,Ws=null}else throw Error(U(198));Gs||(Gs=!0,Ma=h)}}function wt(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Vd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Fo(e){if(wt(e)!==e)throw Error(U(188))}function Op(e){var t=e.alternate;if(!t){if(t=wt(e),t===null)throw Error(U(188));return t!==e?null:e}for(var r=e,s=t;;){var i=r.return;if(i===null)break;var a=i.alternate;if(a===null){if(s=i.return,s!==null){r=s;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===r)return Fo(i),e;if(a===s)return Fo(i),t;a=a.sibling}throw Error(U(188))}if(r.return!==s.return)r=i,s=a;else{for(var l=!1,o=i.child;o;){if(o===r){l=!0,r=i,s=a;break}if(o===s){l=!0,s=i,r=a;break}o=o.sibling}if(!l){for(o=a.child;o;){if(o===r){l=!0,r=a,s=i;break}if(o===s){l=!0,s=a,r=i;break}o=o.sibling}if(!l)throw Error(U(189))}}if(r.alternate!==s)throw Error(U(190))}if(r.tag!==3)throw Error(U(188));return r.stateNode.current===r?e:t}function Ad(e){return e=Op(e),e!==null?Fd(e):null}function Fd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Fd(e);if(t!==null)return t;e=e.sibling}return null}var Dd=en.unstable_scheduleCallback,Do=en.unstable_cancelCallback,Rp=en.unstable_shouldYield,Pp=en.unstable_requestPaint,ye=en.unstable_now,Ip=en.unstable_getCurrentPriorityLevel,Al=en.unstable_ImmediatePriority,$d=en.unstable_UserBlockingPriority,Qs=en.unstable_NormalPriority,zp=en.unstable_LowPriority,Bd=en.unstable_IdlePriority,wi=null,jn=null;function Mp(e){if(jn&&typeof jn.onCommitFiberRoot=="function")try{jn.onCommitFiberRoot(wi,e,void 0,(e.current.flags&128)===128)}catch{}}var fn=Math.clz32?Math.clz32:Fp,Vp=Math.log,Ap=Math.LN2;function Fp(e){return e>>>=0,e===0?32:31-(Vp(e)/Ap|0)|0}var vs=64,xs=4194304;function wr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Xs(e,t){var r=e.pendingLanes;if(r===0)return 0;var s=0,i=e.suspendedLanes,a=e.pingedLanes,l=r&268435455;if(l!==0){var o=l&~i;o!==0?s=wr(o):(a&=l,a!==0&&(s=wr(a)))}else l=r&~i,l!==0?s=wr(l):a!==0&&(s=wr(a));if(s===0)return 0;if(t!==0&&t!==s&&!(t&i)&&(i=s&-s,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(s&4&&(s|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)r=31-fn(t),i=1<<r,s|=e[r],t&=~i;return s}function Dp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $p(e,t){for(var r=e.suspendedLanes,s=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var l=31-fn(a),o=1<<l,c=i[l];c===-1?(!(o&r)||o&s)&&(i[l]=Dp(o,t)):c<=t&&(e.expiredLanes|=o),a&=~o}}function Va(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Hd(){var e=vs;return vs<<=1,!(vs&4194240)&&(vs=64),e}function Ui(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function as(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-fn(t),e[t]=r}function Bp(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-fn(r),a=1<<i;t[i]=0,s[i]=-1,e[i]=-1,r&=~a}}function Fl(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var s=31-fn(r),i=1<<s;i&t|e[s]&t&&(e[s]|=t),r&=~i}}var ie=0;function qd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ud,Dl,Kd,Wd,Gd,Aa=!1,ys=[],Hn=null,qn=null,Un=null,$r=new Map,Br=new Map,Vn=[],Hp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $o(e,t){switch(e){case"focusin":case"focusout":Hn=null;break;case"dragenter":case"dragleave":qn=null;break;case"mouseover":case"mouseout":Un=null;break;case"pointerover":case"pointerout":$r.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Br.delete(t.pointerId)}}function mr(e,t,r,s,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:r,eventSystemFlags:s,nativeEvent:a,targetContainers:[i]},t!==null&&(t=os(t),t!==null&&Dl(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function qp(e,t,r,s,i){switch(t){case"focusin":return Hn=mr(Hn,e,t,r,s,i),!0;case"dragenter":return qn=mr(qn,e,t,r,s,i),!0;case"mouseover":return Un=mr(Un,e,t,r,s,i),!0;case"pointerover":var a=i.pointerId;return $r.set(a,mr($r.get(a)||null,e,t,r,s,i)),!0;case"gotpointercapture":return a=i.pointerId,Br.set(a,mr(Br.get(a)||null,e,t,r,s,i)),!0}return!1}function Qd(e){var t=ct(e.target);if(t!==null){var r=wt(t);if(r!==null){if(t=r.tag,t===13){if(t=Vd(r),t!==null){e.blockedOn=t,Gd(e.priority,function(){Kd(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Is(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Fa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var s=new r.constructor(r.type,r);Pa=s,r.target.dispatchEvent(s),Pa=null}else return t=os(r),t!==null&&Dl(t),e.blockedOn=r,!1;t.shift()}return!0}function Bo(e,t,r){Is(e)&&r.delete(t)}function Up(){Aa=!1,Hn!==null&&Is(Hn)&&(Hn=null),qn!==null&&Is(qn)&&(qn=null),Un!==null&&Is(Un)&&(Un=null),$r.forEach(Bo),Br.forEach(Bo)}function gr(e,t){e.blockedOn===t&&(e.blockedOn=null,Aa||(Aa=!0,en.unstable_scheduleCallback(en.unstable_NormalPriority,Up)))}function Hr(e){function t(i){return gr(i,e)}if(0<ys.length){gr(ys[0],e);for(var r=1;r<ys.length;r++){var s=ys[r];s.blockedOn===e&&(s.blockedOn=null)}}for(Hn!==null&&gr(Hn,e),qn!==null&&gr(qn,e),Un!==null&&gr(Un,e),$r.forEach(t),Br.forEach(t),r=0;r<Vn.length;r++)s=Vn[r],s.blockedOn===e&&(s.blockedOn=null);for(;0<Vn.length&&(r=Vn[0],r.blockedOn===null);)Qd(r),r.blockedOn===null&&Vn.shift()}var Xt=Rn.ReactCurrentBatchConfig,Ys=!0;function Kp(e,t,r,s){var i=ie,a=Xt.transition;Xt.transition=null;try{ie=1,$l(e,t,r,s)}finally{ie=i,Xt.transition=a}}function Wp(e,t,r,s){var i=ie,a=Xt.transition;Xt.transition=null;try{ie=4,$l(e,t,r,s)}finally{ie=i,Xt.transition=a}}function $l(e,t,r,s){if(Ys){var i=Fa(e,t,r,s);if(i===null)na(e,t,s,Js,r),$o(e,s);else if(qp(i,e,t,r,s))s.stopPropagation();else if($o(e,s),t&4&&-1<Hp.indexOf(e)){for(;i!==null;){var a=os(i);if(a!==null&&Ud(a),a=Fa(e,t,r,s),a===null&&na(e,t,s,Js,r),a===i)break;i=a}i!==null&&s.stopPropagation()}else na(e,t,s,null,r)}}var Js=null;function Fa(e,t,r,s){if(Js=null,e=Vl(s),e=ct(e),e!==null)if(t=wt(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Vd(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Js=e,null}function Xd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ip()){case Al:return 1;case $d:return 4;case Qs:case zp:return 16;case Bd:return 536870912;default:return 16}default:return 16}}var Fn=null,Bl=null,zs=null;function Yd(){if(zs)return zs;var e,t=Bl,r=t.length,s,i="value"in Fn?Fn.value:Fn.textContent,a=i.length;for(e=0;e<r&&t[e]===i[e];e++);var l=r-e;for(s=1;s<=l&&t[r-s]===i[a-s];s++);return zs=i.slice(e,1<s?1-s:void 0)}function Ms(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function js(){return!0}function Ho(){return!1}function tn(e){function t(r,s,i,a,l){this._reactName=r,this._targetInst=i,this.type=s,this.nativeEvent=a,this.target=l,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(r=e[o],this[o]=r?r(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?js:Ho,this.isPropagationStopped=Ho,this}return pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=js)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=js)},persist:function(){},isPersistent:js}),t}var or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hl=tn(or),ls=pe({},or,{view:0,detail:0}),Gp=tn(ls),Ki,Wi,vr,bi=pe({},ls,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ql,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vr&&(vr&&e.type==="mousemove"?(Ki=e.screenX-vr.screenX,Wi=e.screenY-vr.screenY):Wi=Ki=0,vr=e),Ki)},movementY:function(e){return"movementY"in e?e.movementY:Wi}}),qo=tn(bi),Qp=pe({},bi,{dataTransfer:0}),Xp=tn(Qp),Yp=pe({},ls,{relatedTarget:0}),Gi=tn(Yp),Jp=pe({},or,{animationName:0,elapsedTime:0,pseudoElement:0}),Zp=tn(Jp),ef=pe({},or,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),nf=tn(ef),tf=pe({},or,{data:0}),Uo=tn(tf),rf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},af={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=af[e])?!!t[e]:!1}function ql(){return lf}var of=pe({},ls,{key:function(e){if(e.key){var t=rf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ms(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?sf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ql,charCode:function(e){return e.type==="keypress"?Ms(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ms(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),cf=tn(of),df=pe({},bi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ko=tn(df),uf=pe({},ls,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ql}),hf=tn(uf),pf=pe({},or,{propertyName:0,elapsedTime:0,pseudoElement:0}),ff=tn(pf),mf=pe({},bi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),gf=tn(mf),vf=[9,13,27,32],Ul=Ln&&"CompositionEvent"in window,_r=null;Ln&&"documentMode"in document&&(_r=document.documentMode);var xf=Ln&&"TextEvent"in window&&!_r,Jd=Ln&&(!Ul||_r&&8<_r&&11>=_r),Wo=" ",Go=!1;function Zd(e,t){switch(e){case"keyup":return vf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function eu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ot=!1;function yf(e,t){switch(e){case"compositionend":return eu(t);case"keypress":return t.which!==32?null:(Go=!0,Wo);case"textInput":return e=t.data,e===Wo&&Go?null:e;default:return null}}function jf(e,t){if(Ot)return e==="compositionend"||!Ul&&Zd(e,t)?(e=Yd(),zs=Bl=Fn=null,Ot=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Jd&&t.locale!=="ko"?null:t.data;default:return null}}var Nf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Nf[e.type]:t==="textarea"}function nu(e,t,r,s){Rd(s),t=Zs(t,"onChange"),0<t.length&&(r=new Hl("onChange","change",null,r,s),e.push({event:r,listeners:t}))}var Er=null,qr=null;function kf(e){hu(e,0)}function Si(e){var t=It(e);if(Sd(t))return e}function wf(e,t){if(e==="change")return t}var tu=!1;if(Ln){var Qi;if(Ln){var Xi="oninput"in document;if(!Xi){var Xo=document.createElement("div");Xo.setAttribute("oninput","return;"),Xi=typeof Xo.oninput=="function"}Qi=Xi}else Qi=!1;tu=Qi&&(!document.documentMode||9<document.documentMode)}function Yo(){Er&&(Er.detachEvent("onpropertychange",ru),qr=Er=null)}function ru(e){if(e.propertyName==="value"&&Si(qr)){var t=[];nu(t,qr,e,Vl(e)),Md(kf,t)}}function bf(e,t,r){e==="focusin"?(Yo(),Er=t,qr=r,Er.attachEvent("onpropertychange",ru)):e==="focusout"&&Yo()}function Sf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Si(qr)}function Cf(e,t){if(e==="click")return Si(t)}function Tf(e,t){if(e==="input"||e==="change")return Si(t)}function Lf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gn=typeof Object.is=="function"?Object.is:Lf;function Ur(e,t){if(gn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(s=0;s<r.length;s++){var i=r[s];if(!Na.call(t,i)||!gn(e[i],t[i]))return!1}return!0}function Jo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zo(e,t){var r=Jo(e);e=0;for(var s;r;){if(r.nodeType===3){if(s=e+r.textContent.length,e<=t&&s>=t)return{node:r,offset:t-e};e=s}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Jo(r)}}function su(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?su(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function iu(){for(var e=window,t=Ks();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Ks(e.document)}return t}function Kl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function _f(e){var t=iu(),r=e.focusedElem,s=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&su(r.ownerDocument.documentElement,r)){if(s!==null&&Kl(r)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,a=Math.min(s.start,i);s=s.end===void 0?a:Math.min(s.end,i),!e.extend&&a>s&&(i=s,s=a,a=i),i=Zo(r,a);var l=Zo(r,s);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>s?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ef=Ln&&"documentMode"in document&&11>=document.documentMode,Rt=null,Da=null,Or=null,$a=!1;function ec(e,t,r){var s=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;$a||Rt==null||Rt!==Ks(s)||(s=Rt,"selectionStart"in s&&Kl(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Or&&Ur(Or,s)||(Or=s,s=Zs(Da,"onSelect"),0<s.length&&(t=new Hl("onSelect","select",null,t,r),e.push({event:t,listeners:s}),t.target=Rt)))}function Ns(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Pt={animationend:Ns("Animation","AnimationEnd"),animationiteration:Ns("Animation","AnimationIteration"),animationstart:Ns("Animation","AnimationStart"),transitionend:Ns("Transition","TransitionEnd")},Yi={},au={};Ln&&(au=document.createElement("div").style,"AnimationEvent"in window||(delete Pt.animationend.animation,delete Pt.animationiteration.animation,delete Pt.animationstart.animation),"TransitionEvent"in window||delete Pt.transitionend.transition);function Ci(e){if(Yi[e])return Yi[e];if(!Pt[e])return e;var t=Pt[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in au)return Yi[e]=t[r];return e}var lu=Ci("animationend"),ou=Ci("animationiteration"),cu=Ci("animationstart"),du=Ci("transitionend"),uu=new Map,nc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nt(e,t){uu.set(e,t),kt(t,[e])}for(var Ji=0;Ji<nc.length;Ji++){var Zi=nc[Ji],Of=Zi.toLowerCase(),Rf=Zi[0].toUpperCase()+Zi.slice(1);nt(Of,"on"+Rf)}nt(lu,"onAnimationEnd");nt(ou,"onAnimationIteration");nt(cu,"onAnimationStart");nt("dblclick","onDoubleClick");nt("focusin","onFocus");nt("focusout","onBlur");nt(du,"onTransitionEnd");er("onMouseEnter",["mouseout","mouseover"]);er("onMouseLeave",["mouseout","mouseover"]);er("onPointerEnter",["pointerout","pointerover"]);er("onPointerLeave",["pointerout","pointerover"]);kt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));kt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));kt("onBeforeInput",["compositionend","keypress","textInput","paste"]);kt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));kt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));kt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var br="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Pf=new Set("cancel close invalid load scroll toggle".split(" ").concat(br));function tc(e,t,r){var s=e.type||"unknown-event";e.currentTarget=r,Ep(s,t,void 0,e),e.currentTarget=null}function hu(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var s=e[r],i=s.event;s=s.listeners;e:{var a=void 0;if(t)for(var l=s.length-1;0<=l;l--){var o=s[l],c=o.instance,h=o.currentTarget;if(o=o.listener,c!==a&&i.isPropagationStopped())break e;tc(i,o,h),a=c}else for(l=0;l<s.length;l++){if(o=s[l],c=o.instance,h=o.currentTarget,o=o.listener,c!==a&&i.isPropagationStopped())break e;tc(i,o,h),a=c}}}if(Gs)throw e=Ma,Gs=!1,Ma=null,e}function oe(e,t){var r=t[Ka];r===void 0&&(r=t[Ka]=new Set);var s=e+"__bubble";r.has(s)||(pu(t,e,2,!1),r.add(s))}function ea(e,t,r){var s=0;t&&(s|=4),pu(r,e,s,t)}var ks="_reactListening"+Math.random().toString(36).slice(2);function Kr(e){if(!e[ks]){e[ks]=!0,jd.forEach(function(r){r!=="selectionchange"&&(Pf.has(r)||ea(r,!1,e),ea(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ks]||(t[ks]=!0,ea("selectionchange",!1,t))}}function pu(e,t,r,s){switch(Xd(t)){case 1:var i=Kp;break;case 4:i=Wp;break;default:i=$l}r=i.bind(null,t,r,e),i=void 0,!za||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),s?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function na(e,t,r,s,i){var a=s;if(!(t&1)&&!(t&2)&&s!==null)e:for(;;){if(s===null)return;var l=s.tag;if(l===3||l===4){var o=s.stateNode.containerInfo;if(o===i||o.nodeType===8&&o.parentNode===i)break;if(l===4)for(l=s.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;l=l.return}for(;o!==null;){if(l=ct(o),l===null)return;if(c=l.tag,c===5||c===6){s=a=l;continue e}o=o.parentNode}}s=s.return}Md(function(){var h=a,d=Vl(r),p=[];e:{var m=uu.get(e);if(m!==void 0){var b=Hl,w=e;switch(e){case"keypress":if(Ms(r)===0)break e;case"keydown":case"keyup":b=cf;break;case"focusin":w="focus",b=Gi;break;case"focusout":w="blur",b=Gi;break;case"beforeblur":case"afterblur":b=Gi;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=qo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=Xp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=hf;break;case lu:case ou:case cu:b=Zp;break;case du:b=ff;break;case"scroll":b=Gp;break;case"wheel":b=gf;break;case"copy":case"cut":case"paste":b=nf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Ko}var k=(t&4)!==0,j=!k&&e==="scroll",f=k?m!==null?m+"Capture":null:m;k=[];for(var g=h,v;g!==null;){v=g;var E=v.stateNode;if(v.tag===5&&E!==null&&(v=E,f!==null&&(E=Dr(g,f),E!=null&&k.push(Wr(g,E,v)))),j)break;g=g.return}0<k.length&&(m=new b(m,w,null,r,d),p.push({event:m,listeners:k}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",m&&r!==Pa&&(w=r.relatedTarget||r.fromElement)&&(ct(w)||w[_n]))break e;if((b||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,b?(w=r.relatedTarget||r.toElement,b=h,w=w?ct(w):null,w!==null&&(j=wt(w),w!==j||w.tag!==5&&w.tag!==6)&&(w=null)):(b=null,w=h),b!==w)){if(k=qo,E="onMouseLeave",f="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(k=Ko,E="onPointerLeave",f="onPointerEnter",g="pointer"),j=b==null?m:It(b),v=w==null?m:It(w),m=new k(E,g+"leave",b,r,d),m.target=j,m.relatedTarget=v,E=null,ct(d)===h&&(k=new k(f,g+"enter",w,r,d),k.target=v,k.relatedTarget=j,E=k),j=E,b&&w)n:{for(k=b,f=w,g=0,v=k;v;v=Tt(v))g++;for(v=0,E=f;E;E=Tt(E))v++;for(;0<g-v;)k=Tt(k),g--;for(;0<v-g;)f=Tt(f),v--;for(;g--;){if(k===f||f!==null&&k===f.alternate)break n;k=Tt(k),f=Tt(f)}k=null}else k=null;b!==null&&rc(p,m,b,k,!1),w!==null&&j!==null&&rc(p,j,w,k,!0)}}e:{if(m=h?It(h):window,b=m.nodeName&&m.nodeName.toLowerCase(),b==="select"||b==="input"&&m.type==="file")var y=wf;else if(Qo(m))if(tu)y=Tf;else{y=Sf;var V=bf}else(b=m.nodeName)&&b.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(y=Cf);if(y&&(y=y(e,h))){nu(p,y,r,d);break e}V&&V(e,m,h),e==="focusout"&&(V=m._wrapperState)&&V.controlled&&m.type==="number"&&La(m,"number",m.value)}switch(V=h?It(h):window,e){case"focusin":(Qo(V)||V.contentEditable==="true")&&(Rt=V,Da=h,Or=null);break;case"focusout":Or=Da=Rt=null;break;case"mousedown":$a=!0;break;case"contextmenu":case"mouseup":case"dragend":$a=!1,ec(p,r,d);break;case"selectionchange":if(Ef)break;case"keydown":case"keyup":ec(p,r,d)}var T;if(Ul)e:{switch(e){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else Ot?Zd(e,r)&&(D="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(D="onCompositionStart");D&&(Jd&&r.locale!=="ko"&&(Ot||D!=="onCompositionStart"?D==="onCompositionEnd"&&Ot&&(T=Yd()):(Fn=d,Bl="value"in Fn?Fn.value:Fn.textContent,Ot=!0)),V=Zs(h,D),0<V.length&&(D=new Uo(D,e,null,r,d),p.push({event:D,listeners:V}),T?D.data=T:(T=eu(r),T!==null&&(D.data=T)))),(T=xf?yf(e,r):jf(e,r))&&(h=Zs(h,"onBeforeInput"),0<h.length&&(d=new Uo("onBeforeInput","beforeinput",null,r,d),p.push({event:d,listeners:h}),d.data=T))}hu(p,t)})}function Wr(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Zs(e,t){for(var r=t+"Capture",s=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Dr(e,r),a!=null&&s.unshift(Wr(e,a,i)),a=Dr(e,t),a!=null&&s.push(Wr(e,a,i))),e=e.return}return s}function Tt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function rc(e,t,r,s,i){for(var a=t._reactName,l=[];r!==null&&r!==s;){var o=r,c=o.alternate,h=o.stateNode;if(c!==null&&c===s)break;o.tag===5&&h!==null&&(o=h,i?(c=Dr(r,a),c!=null&&l.unshift(Wr(r,c,o))):i||(c=Dr(r,a),c!=null&&l.push(Wr(r,c,o)))),r=r.return}l.length!==0&&e.push({event:t,listeners:l})}var If=/\r\n?/g,zf=/\u0000|\uFFFD/g;function sc(e){return(typeof e=="string"?e:""+e).replace(If,`
`).replace(zf,"")}function ws(e,t,r){if(t=sc(t),sc(e)!==t&&r)throw Error(U(425))}function ei(){}var Ba=null,Ha=null;function qa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ua=typeof setTimeout=="function"?setTimeout:void 0,Mf=typeof clearTimeout=="function"?clearTimeout:void 0,ic=typeof Promise=="function"?Promise:void 0,Vf=typeof queueMicrotask=="function"?queueMicrotask:typeof ic<"u"?function(e){return ic.resolve(null).then(e).catch(Af)}:Ua;function Af(e){setTimeout(function(){throw e})}function ta(e,t){var r=t,s=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(s===0){e.removeChild(i),Hr(t);return}s--}else r!=="$"&&r!=="$?"&&r!=="$!"||s++;r=i}while(r);Hr(t)}function Kn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ac(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var cr=Math.random().toString(36).slice(2),yn="__reactFiber$"+cr,Gr="__reactProps$"+cr,_n="__reactContainer$"+cr,Ka="__reactEvents$"+cr,Ff="__reactListeners$"+cr,Df="__reactHandles$"+cr;function ct(e){var t=e[yn];if(t)return t;for(var r=e.parentNode;r;){if(t=r[_n]||r[yn]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=ac(e);e!==null;){if(r=e[yn])return r;e=ac(e)}return t}e=r,r=e.parentNode}return null}function os(e){return e=e[yn]||e[_n],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function It(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(U(33))}function Ti(e){return e[Gr]||null}var Wa=[],zt=-1;function tt(e){return{current:e}}function ce(e){0>zt||(e.current=Wa[zt],Wa[zt]=null,zt--)}function le(e,t){zt++,Wa[zt]=e.current,e.current=t}var et={},Me=tt(et),We=tt(!1),vt=et;function nr(e,t){var r=e.type.contextTypes;if(!r)return et;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in r)i[a]=t[a];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ge(e){return e=e.childContextTypes,e!=null}function ni(){ce(We),ce(Me)}function lc(e,t,r){if(Me.current!==et)throw Error(U(168));le(Me,t),le(We,r)}function fu(e,t,r){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return r;s=s.getChildContext();for(var i in s)if(!(i in t))throw Error(U(108,wp(e)||"Unknown",i));return pe({},r,s)}function ti(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||et,vt=Me.current,le(Me,e),le(We,We.current),!0}function oc(e,t,r){var s=e.stateNode;if(!s)throw Error(U(169));r?(e=fu(e,t,vt),s.__reactInternalMemoizedMergedChildContext=e,ce(We),ce(Me),le(Me,e)):ce(We),le(We,r)}var bn=null,Li=!1,ra=!1;function mu(e){bn===null?bn=[e]:bn.push(e)}function $f(e){Li=!0,mu(e)}function rt(){if(!ra&&bn!==null){ra=!0;var e=0,t=ie;try{var r=bn;for(ie=1;e<r.length;e++){var s=r[e];do s=s(!0);while(s!==null)}bn=null,Li=!1}catch(i){throw bn!==null&&(bn=bn.slice(e+1)),Dd(Al,rt),i}finally{ie=t,ra=!1}}return null}var Mt=[],Vt=0,ri=null,si=0,rn=[],sn=0,xt=null,Sn=1,Cn="";function lt(e,t){Mt[Vt++]=si,Mt[Vt++]=ri,ri=e,si=t}function gu(e,t,r){rn[sn++]=Sn,rn[sn++]=Cn,rn[sn++]=xt,xt=e;var s=Sn;e=Cn;var i=32-fn(s)-1;s&=~(1<<i),r+=1;var a=32-fn(t)+i;if(30<a){var l=i-i%5;a=(s&(1<<l)-1).toString(32),s>>=l,i-=l,Sn=1<<32-fn(t)+i|r<<i|s,Cn=a+e}else Sn=1<<a|r<<i|s,Cn=e}function Wl(e){e.return!==null&&(lt(e,1),gu(e,1,0))}function Gl(e){for(;e===ri;)ri=Mt[--Vt],Mt[Vt]=null,si=Mt[--Vt],Mt[Vt]=null;for(;e===xt;)xt=rn[--sn],rn[sn]=null,Cn=rn[--sn],rn[sn]=null,Sn=rn[--sn],rn[sn]=null}var Ze=null,Je=null,de=!1,pn=null;function vu(e,t){var r=an(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function cc(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ze=e,Je=Kn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ze=e,Je=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=xt!==null?{id:Sn,overflow:Cn}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=an(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Ze=e,Je=null,!0):!1;default:return!1}}function Ga(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Qa(e){if(de){var t=Je;if(t){var r=t;if(!cc(e,t)){if(Ga(e))throw Error(U(418));t=Kn(r.nextSibling);var s=Ze;t&&cc(e,t)?vu(s,r):(e.flags=e.flags&-4097|2,de=!1,Ze=e)}}else{if(Ga(e))throw Error(U(418));e.flags=e.flags&-4097|2,de=!1,Ze=e}}}function dc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ze=e}function bs(e){if(e!==Ze)return!1;if(!de)return dc(e),de=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!qa(e.type,e.memoizedProps)),t&&(t=Je)){if(Ga(e))throw xu(),Error(U(418));for(;t;)vu(e,t),t=Kn(t.nextSibling)}if(dc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(U(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Je=Kn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Je=null}}else Je=Ze?Kn(e.stateNode.nextSibling):null;return!0}function xu(){for(var e=Je;e;)e=Kn(e.nextSibling)}function tr(){Je=Ze=null,de=!1}function Ql(e){pn===null?pn=[e]:pn.push(e)}var Bf=Rn.ReactCurrentBatchConfig;function xr(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(U(309));var s=r.stateNode}if(!s)throw Error(U(147,e));var i=s,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(l){var o=i.refs;l===null?delete o[a]:o[a]=l},t._stringRef=a,t)}if(typeof e!="string")throw Error(U(284));if(!r._owner)throw Error(U(290,e))}return e}function Ss(e,t){throw e=Object.prototype.toString.call(t),Error(U(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function uc(e){var t=e._init;return t(e._payload)}function yu(e){function t(f,g){if(e){var v=f.deletions;v===null?(f.deletions=[g],f.flags|=16):v.push(g)}}function r(f,g){if(!e)return null;for(;g!==null;)t(f,g),g=g.sibling;return null}function s(f,g){for(f=new Map;g!==null;)g.key!==null?f.set(g.key,g):f.set(g.index,g),g=g.sibling;return f}function i(f,g){return f=Xn(f,g),f.index=0,f.sibling=null,f}function a(f,g,v){return f.index=v,e?(v=f.alternate,v!==null?(v=v.index,v<g?(f.flags|=2,g):v):(f.flags|=2,g)):(f.flags|=1048576,g)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function o(f,g,v,E){return g===null||g.tag!==6?(g=da(v,f.mode,E),g.return=f,g):(g=i(g,v),g.return=f,g)}function c(f,g,v,E){var y=v.type;return y===Et?d(f,g,v.props.children,E,v.key):g!==null&&(g.elementType===y||typeof y=="object"&&y!==null&&y.$$typeof===zn&&uc(y)===g.type)?(E=i(g,v.props),E.ref=xr(f,g,v),E.return=f,E):(E=Hs(v.type,v.key,v.props,null,f.mode,E),E.ref=xr(f,g,v),E.return=f,E)}function h(f,g,v,E){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=ua(v,f.mode,E),g.return=f,g):(g=i(g,v.children||[]),g.return=f,g)}function d(f,g,v,E,y){return g===null||g.tag!==7?(g=mt(v,f.mode,E,y),g.return=f,g):(g=i(g,v),g.return=f,g)}function p(f,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=da(""+g,f.mode,v),g.return=f,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case fs:return v=Hs(g.type,g.key,g.props,null,f.mode,v),v.ref=xr(f,null,g),v.return=f,v;case _t:return g=ua(g,f.mode,v),g.return=f,g;case zn:var E=g._init;return p(f,E(g._payload),v)}if(kr(g)||pr(g))return g=mt(g,f.mode,v,null),g.return=f,g;Ss(f,g)}return null}function m(f,g,v,E){var y=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return y!==null?null:o(f,g,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case fs:return v.key===y?c(f,g,v,E):null;case _t:return v.key===y?h(f,g,v,E):null;case zn:return y=v._init,m(f,g,y(v._payload),E)}if(kr(v)||pr(v))return y!==null?null:d(f,g,v,E,null);Ss(f,v)}return null}function b(f,g,v,E,y){if(typeof E=="string"&&E!==""||typeof E=="number")return f=f.get(v)||null,o(g,f,""+E,y);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case fs:return f=f.get(E.key===null?v:E.key)||null,c(g,f,E,y);case _t:return f=f.get(E.key===null?v:E.key)||null,h(g,f,E,y);case zn:var V=E._init;return b(f,g,v,V(E._payload),y)}if(kr(E)||pr(E))return f=f.get(v)||null,d(g,f,E,y,null);Ss(g,E)}return null}function w(f,g,v,E){for(var y=null,V=null,T=g,D=g=0,A=null;T!==null&&D<v.length;D++){T.index>D?(A=T,T=null):A=T.sibling;var I=m(f,T,v[D],E);if(I===null){T===null&&(T=A);break}e&&T&&I.alternate===null&&t(f,T),g=a(I,g,D),V===null?y=I:V.sibling=I,V=I,T=A}if(D===v.length)return r(f,T),de&&lt(f,D),y;if(T===null){for(;D<v.length;D++)T=p(f,v[D],E),T!==null&&(g=a(T,g,D),V===null?y=T:V.sibling=T,V=T);return de&&lt(f,D),y}for(T=s(f,T);D<v.length;D++)A=b(T,f,D,v[D],E),A!==null&&(e&&A.alternate!==null&&T.delete(A.key===null?D:A.key),g=a(A,g,D),V===null?y=A:V.sibling=A,V=A);return e&&T.forEach(function(q){return t(f,q)}),de&&lt(f,D),y}function k(f,g,v,E){var y=pr(v);if(typeof y!="function")throw Error(U(150));if(v=y.call(v),v==null)throw Error(U(151));for(var V=y=null,T=g,D=g=0,A=null,I=v.next();T!==null&&!I.done;D++,I=v.next()){T.index>D?(A=T,T=null):A=T.sibling;var q=m(f,T,I.value,E);if(q===null){T===null&&(T=A);break}e&&T&&q.alternate===null&&t(f,T),g=a(q,g,D),V===null?y=q:V.sibling=q,V=q,T=A}if(I.done)return r(f,T),de&&lt(f,D),y;if(T===null){for(;!I.done;D++,I=v.next())I=p(f,I.value,E),I!==null&&(g=a(I,g,D),V===null?y=I:V.sibling=I,V=I);return de&&lt(f,D),y}for(T=s(f,T);!I.done;D++,I=v.next())I=b(T,f,D,I.value,E),I!==null&&(e&&I.alternate!==null&&T.delete(I.key===null?D:I.key),g=a(I,g,D),V===null?y=I:V.sibling=I,V=I);return e&&T.forEach(function(K){return t(f,K)}),de&&lt(f,D),y}function j(f,g,v,E){if(typeof v=="object"&&v!==null&&v.type===Et&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case fs:e:{for(var y=v.key,V=g;V!==null;){if(V.key===y){if(y=v.type,y===Et){if(V.tag===7){r(f,V.sibling),g=i(V,v.props.children),g.return=f,f=g;break e}}else if(V.elementType===y||typeof y=="object"&&y!==null&&y.$$typeof===zn&&uc(y)===V.type){r(f,V.sibling),g=i(V,v.props),g.ref=xr(f,V,v),g.return=f,f=g;break e}r(f,V);break}else t(f,V);V=V.sibling}v.type===Et?(g=mt(v.props.children,f.mode,E,v.key),g.return=f,f=g):(E=Hs(v.type,v.key,v.props,null,f.mode,E),E.ref=xr(f,g,v),E.return=f,f=E)}return l(f);case _t:e:{for(V=v.key;g!==null;){if(g.key===V)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){r(f,g.sibling),g=i(g,v.children||[]),g.return=f,f=g;break e}else{r(f,g);break}else t(f,g);g=g.sibling}g=ua(v,f.mode,E),g.return=f,f=g}return l(f);case zn:return V=v._init,j(f,g,V(v._payload),E)}if(kr(v))return w(f,g,v,E);if(pr(v))return k(f,g,v,E);Ss(f,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(r(f,g.sibling),g=i(g,v),g.return=f,f=g):(r(f,g),g=da(v,f.mode,E),g.return=f,f=g),l(f)):r(f,g)}return j}var rr=yu(!0),ju=yu(!1),ii=tt(null),ai=null,At=null,Xl=null;function Yl(){Xl=At=ai=null}function Jl(e){var t=ii.current;ce(ii),e._currentValue=t}function Xa(e,t,r){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===r)break;e=e.return}}function Yt(e,t){ai=e,Xl=At=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ke=!0),e.firstContext=null)}function on(e){var t=e._currentValue;if(Xl!==e)if(e={context:e,memoizedValue:t,next:null},At===null){if(ai===null)throw Error(U(308));At=e,ai.dependencies={lanes:0,firstContext:e}}else At=At.next=e;return t}var dt=null;function Zl(e){dt===null?dt=[e]:dt.push(e)}function Nu(e,t,r,s){var i=t.interleaved;return i===null?(r.next=r,Zl(t)):(r.next=i.next,i.next=r),t.interleaved=r,En(e,s)}function En(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Mn=!1;function eo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ku(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Tn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Wn(e,t,r){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,te&2){var i=s.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),s.pending=t,En(e,r)}return i=s.interleaved,i===null?(t.next=t,Zl(s)):(t.next=i.next,i.next=t),s.interleaved=t,En(e,r)}function Vs(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,Fl(e,r)}}function hc(e,t){var r=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,r===s)){var i=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var l={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?i=a=l:a=a.next=l,r=r.next}while(r!==null);a===null?i=a=t:a=a.next=t}else i=a=t;r={baseState:s.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:s.shared,effects:s.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function li(e,t,r,s){var i=e.updateQueue;Mn=!1;var a=i.firstBaseUpdate,l=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var c=o,h=c.next;c.next=null,l===null?a=h:l.next=h,l=c;var d=e.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==l&&(o===null?d.firstBaseUpdate=h:o.next=h,d.lastBaseUpdate=c))}if(a!==null){var p=i.baseState;l=0,d=h=c=null,o=a;do{var m=o.lane,b=o.eventTime;if((s&m)===m){d!==null&&(d=d.next={eventTime:b,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var w=e,k=o;switch(m=t,b=r,k.tag){case 1:if(w=k.payload,typeof w=="function"){p=w.call(b,p,m);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=k.payload,m=typeof w=="function"?w.call(b,p,m):w,m==null)break e;p=pe({},p,m);break e;case 2:Mn=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[o]:m.push(o))}else b={eventTime:b,lane:m,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(h=d=b,c=p):d=d.next=b,l|=m;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;m=o,o=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(c=p),i.baseState=c,i.firstBaseUpdate=h,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);jt|=l,e.lanes=l,e.memoizedState=p}}function pc(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],i=s.callback;if(i!==null){if(s.callback=null,s=r,typeof i!="function")throw Error(U(191,i));i.call(s)}}}var cs={},Nn=tt(cs),Qr=tt(cs),Xr=tt(cs);function ut(e){if(e===cs)throw Error(U(174));return e}function no(e,t){switch(le(Xr,t),le(Qr,e),le(Nn,cs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ea(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ea(t,e)}ce(Nn),le(Nn,t)}function sr(){ce(Nn),ce(Qr),ce(Xr)}function wu(e){ut(Xr.current);var t=ut(Nn.current),r=Ea(t,e.type);t!==r&&(le(Qr,e),le(Nn,r))}function to(e){Qr.current===e&&(ce(Nn),ce(Qr))}var ue=tt(0);function oi(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var sa=[];function ro(){for(var e=0;e<sa.length;e++)sa[e]._workInProgressVersionPrimary=null;sa.length=0}var As=Rn.ReactCurrentDispatcher,ia=Rn.ReactCurrentBatchConfig,yt=0,he=null,ke=null,be=null,ci=!1,Rr=!1,Yr=0,Hf=0;function Re(){throw Error(U(321))}function so(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!gn(e[r],t[r]))return!1;return!0}function io(e,t,r,s,i,a){if(yt=a,he=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,As.current=e===null||e.memoizedState===null?Wf:Gf,e=r(s,i),Rr){a=0;do{if(Rr=!1,Yr=0,25<=a)throw Error(U(301));a+=1,be=ke=null,t.updateQueue=null,As.current=Qf,e=r(s,i)}while(Rr)}if(As.current=di,t=ke!==null&&ke.next!==null,yt=0,be=ke=he=null,ci=!1,t)throw Error(U(300));return e}function ao(){var e=Yr!==0;return Yr=0,e}function xn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return be===null?he.memoizedState=be=e:be=be.next=e,be}function cn(){if(ke===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var t=be===null?he.memoizedState:be.next;if(t!==null)be=t,ke=e;else{if(e===null)throw Error(U(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},be===null?he.memoizedState=be=e:be=be.next=e}return be}function Jr(e,t){return typeof t=="function"?t(e):t}function aa(e){var t=cn(),r=t.queue;if(r===null)throw Error(U(311));r.lastRenderedReducer=e;var s=ke,i=s.baseQueue,a=r.pending;if(a!==null){if(i!==null){var l=i.next;i.next=a.next,a.next=l}s.baseQueue=i=a,r.pending=null}if(i!==null){a=i.next,s=s.baseState;var o=l=null,c=null,h=a;do{var d=h.lane;if((yt&d)===d)c!==null&&(c=c.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),s=h.hasEagerState?h.eagerState:e(s,h.action);else{var p={lane:d,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};c===null?(o=c=p,l=s):c=c.next=p,he.lanes|=d,jt|=d}h=h.next}while(h!==null&&h!==a);c===null?l=s:c.next=o,gn(s,t.memoizedState)||(Ke=!0),t.memoizedState=s,t.baseState=l,t.baseQueue=c,r.lastRenderedState=s}if(e=r.interleaved,e!==null){i=e;do a=i.lane,he.lanes|=a,jt|=a,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function la(e){var t=cn(),r=t.queue;if(r===null)throw Error(U(311));r.lastRenderedReducer=e;var s=r.dispatch,i=r.pending,a=t.memoizedState;if(i!==null){r.pending=null;var l=i=i.next;do a=e(a,l.action),l=l.next;while(l!==i);gn(a,t.memoizedState)||(Ke=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),r.lastRenderedState=a}return[a,s]}function bu(){}function Su(e,t){var r=he,s=cn(),i=t(),a=!gn(s.memoizedState,i);if(a&&(s.memoizedState=i,Ke=!0),s=s.queue,lo(Lu.bind(null,r,s,e),[e]),s.getSnapshot!==t||a||be!==null&&be.memoizedState.tag&1){if(r.flags|=2048,Zr(9,Tu.bind(null,r,s,i,t),void 0,null),Se===null)throw Error(U(349));yt&30||Cu(r,t,i)}return i}function Cu(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=he.updateQueue,t===null?(t={lastEffect:null,stores:null},he.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Tu(e,t,r,s){t.value=r,t.getSnapshot=s,_u(t)&&Eu(e)}function Lu(e,t,r){return r(function(){_u(t)&&Eu(e)})}function _u(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!gn(e,r)}catch{return!0}}function Eu(e){var t=En(e,1);t!==null&&mn(t,e,1,-1)}function fc(e){var t=xn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jr,lastRenderedState:e},t.queue=e,e=e.dispatch=Kf.bind(null,he,e),[t.memoizedState,e]}function Zr(e,t,r,s){return e={tag:e,create:t,destroy:r,deps:s,next:null},t=he.updateQueue,t===null?(t={lastEffect:null,stores:null},he.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(s=r.next,r.next=e,e.next=s,t.lastEffect=e)),e}function Ou(){return cn().memoizedState}function Fs(e,t,r,s){var i=xn();he.flags|=e,i.memoizedState=Zr(1|t,r,void 0,s===void 0?null:s)}function _i(e,t,r,s){var i=cn();s=s===void 0?null:s;var a=void 0;if(ke!==null){var l=ke.memoizedState;if(a=l.destroy,s!==null&&so(s,l.deps)){i.memoizedState=Zr(t,r,a,s);return}}he.flags|=e,i.memoizedState=Zr(1|t,r,a,s)}function mc(e,t){return Fs(8390656,8,e,t)}function lo(e,t){return _i(2048,8,e,t)}function Ru(e,t){return _i(4,2,e,t)}function Pu(e,t){return _i(4,4,e,t)}function Iu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function zu(e,t,r){return r=r!=null?r.concat([e]):null,_i(4,4,Iu.bind(null,t,e),r)}function oo(){}function Mu(e,t){var r=cn();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&so(t,s[1])?s[0]:(r.memoizedState=[e,t],e)}function Vu(e,t){var r=cn();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&so(t,s[1])?s[0]:(e=e(),r.memoizedState=[e,t],e)}function Au(e,t,r){return yt&21?(gn(r,t)||(r=Hd(),he.lanes|=r,jt|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ke=!0),e.memoizedState=r)}function qf(e,t){var r=ie;ie=r!==0&&4>r?r:4,e(!0);var s=ia.transition;ia.transition={};try{e(!1),t()}finally{ie=r,ia.transition=s}}function Fu(){return cn().memoizedState}function Uf(e,t,r){var s=Qn(e);if(r={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null},Du(e))$u(t,r);else if(r=Nu(e,t,r,s),r!==null){var i=Be();mn(r,e,s,i),Bu(r,t,s)}}function Kf(e,t,r){var s=Qn(e),i={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null};if(Du(e))$u(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var l=t.lastRenderedState,o=a(l,r);if(i.hasEagerState=!0,i.eagerState=o,gn(o,l)){var c=t.interleaved;c===null?(i.next=i,Zl(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}r=Nu(e,t,i,s),r!==null&&(i=Be(),mn(r,e,s,i),Bu(r,t,s))}}function Du(e){var t=e.alternate;return e===he||t!==null&&t===he}function $u(e,t){Rr=ci=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Bu(e,t,r){if(r&4194240){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,Fl(e,r)}}var di={readContext:on,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useInsertionEffect:Re,useLayoutEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useMutableSource:Re,useSyncExternalStore:Re,useId:Re,unstable_isNewReconciler:!1},Wf={readContext:on,useCallback:function(e,t){return xn().memoizedState=[e,t===void 0?null:t],e},useContext:on,useEffect:mc,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Fs(4194308,4,Iu.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Fs(4194308,4,e,t)},useInsertionEffect:function(e,t){return Fs(4,2,e,t)},useMemo:function(e,t){var r=xn();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var s=xn();return t=r!==void 0?r(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=Uf.bind(null,he,e),[s.memoizedState,e]},useRef:function(e){var t=xn();return e={current:e},t.memoizedState=e},useState:fc,useDebugValue:oo,useDeferredValue:function(e){return xn().memoizedState=e},useTransition:function(){var e=fc(!1),t=e[0];return e=qf.bind(null,e[1]),xn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var s=he,i=xn();if(de){if(r===void 0)throw Error(U(407));r=r()}else{if(r=t(),Se===null)throw Error(U(349));yt&30||Cu(s,t,r)}i.memoizedState=r;var a={value:r,getSnapshot:t};return i.queue=a,mc(Lu.bind(null,s,a,e),[e]),s.flags|=2048,Zr(9,Tu.bind(null,s,a,r,t),void 0,null),r},useId:function(){var e=xn(),t=Se.identifierPrefix;if(de){var r=Cn,s=Sn;r=(s&~(1<<32-fn(s)-1)).toString(32)+r,t=":"+t+"R"+r,r=Yr++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Hf++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Gf={readContext:on,useCallback:Mu,useContext:on,useEffect:lo,useImperativeHandle:zu,useInsertionEffect:Ru,useLayoutEffect:Pu,useMemo:Vu,useReducer:aa,useRef:Ou,useState:function(){return aa(Jr)},useDebugValue:oo,useDeferredValue:function(e){var t=cn();return Au(t,ke.memoizedState,e)},useTransition:function(){var e=aa(Jr)[0],t=cn().memoizedState;return[e,t]},useMutableSource:bu,useSyncExternalStore:Su,useId:Fu,unstable_isNewReconciler:!1},Qf={readContext:on,useCallback:Mu,useContext:on,useEffect:lo,useImperativeHandle:zu,useInsertionEffect:Ru,useLayoutEffect:Pu,useMemo:Vu,useReducer:la,useRef:Ou,useState:function(){return la(Jr)},useDebugValue:oo,useDeferredValue:function(e){var t=cn();return ke===null?t.memoizedState=e:Au(t,ke.memoizedState,e)},useTransition:function(){var e=la(Jr)[0],t=cn().memoizedState;return[e,t]},useMutableSource:bu,useSyncExternalStore:Su,useId:Fu,unstable_isNewReconciler:!1};function un(e,t){if(e&&e.defaultProps){t=pe({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Ya(e,t,r,s){t=e.memoizedState,r=r(s,t),r=r==null?t:pe({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ei={isMounted:function(e){return(e=e._reactInternals)?wt(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var s=Be(),i=Qn(e),a=Tn(s,i);a.payload=t,r!=null&&(a.callback=r),t=Wn(e,a,i),t!==null&&(mn(t,e,i,s),Vs(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var s=Be(),i=Qn(e),a=Tn(s,i);a.tag=1,a.payload=t,r!=null&&(a.callback=r),t=Wn(e,a,i),t!==null&&(mn(t,e,i,s),Vs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Be(),s=Qn(e),i=Tn(r,s);i.tag=2,t!=null&&(i.callback=t),t=Wn(e,i,s),t!==null&&(mn(t,e,s,r),Vs(t,e,s))}};function gc(e,t,r,s,i,a,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,a,l):t.prototype&&t.prototype.isPureReactComponent?!Ur(r,s)||!Ur(i,a):!0}function Hu(e,t,r){var s=!1,i=et,a=t.contextType;return typeof a=="object"&&a!==null?a=on(a):(i=Ge(t)?vt:Me.current,s=t.contextTypes,a=(s=s!=null)?nr(e,i):et),t=new t(r,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ei,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function vc(e,t,r,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,s),t.state!==e&&Ei.enqueueReplaceState(t,t.state,null)}function Ja(e,t,r,s){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},eo(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=on(a):(a=Ge(t)?vt:Me.current,i.context=nr(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Ya(e,t,a,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ei.enqueueReplaceState(i,i.state,null),li(e,r,i,s),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ir(e,t){try{var r="",s=t;do r+=kp(s),s=s.return;while(s);var i=r}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function oa(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Za(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Xf=typeof WeakMap=="function"?WeakMap:Map;function qu(e,t,r){r=Tn(-1,r),r.tag=3,r.payload={element:null};var s=t.value;return r.callback=function(){hi||(hi=!0,cl=s),Za(e,t)},r}function Uu(e,t,r){r=Tn(-1,r),r.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var i=t.value;r.payload=function(){return s(i)},r.callback=function(){Za(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){Za(e,t),typeof s!="function"&&(Gn===null?Gn=new Set([this]):Gn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),r}function xc(e,t,r){var s=e.pingCache;if(s===null){s=e.pingCache=new Xf;var i=new Set;s.set(t,i)}else i=s.get(t),i===void 0&&(i=new Set,s.set(t,i));i.has(r)||(i.add(r),e=dm.bind(null,e,t,r),t.then(e,e))}function yc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function jc(e,t,r,s,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Tn(-1,1),t.tag=2,Wn(r,t,1))),r.lanes|=1),e)}var Yf=Rn.ReactCurrentOwner,Ke=!1;function De(e,t,r,s){t.child=e===null?ju(t,null,r,s):rr(t,e.child,r,s)}function Nc(e,t,r,s,i){r=r.render;var a=t.ref;return Yt(t,i),s=io(e,t,r,s,a,i),r=ao(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,On(e,t,i)):(de&&r&&Wl(t),t.flags|=1,De(e,t,s,i),t.child)}function kc(e,t,r,s,i){if(e===null){var a=r.type;return typeof a=="function"&&!vo(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=a,Ku(e,t,a,s,i)):(e=Hs(r.type,null,s,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var l=a.memoizedProps;if(r=r.compare,r=r!==null?r:Ur,r(l,s)&&e.ref===t.ref)return On(e,t,i)}return t.flags|=1,e=Xn(a,s),e.ref=t.ref,e.return=t,t.child=e}function Ku(e,t,r,s,i){if(e!==null){var a=e.memoizedProps;if(Ur(a,s)&&e.ref===t.ref)if(Ke=!1,t.pendingProps=s=a,(e.lanes&i)!==0)e.flags&131072&&(Ke=!0);else return t.lanes=e.lanes,On(e,t,i)}return el(e,t,r,s,i)}function Wu(e,t,r){var s=t.pendingProps,i=s.children,a=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},le(Dt,Xe),Xe|=r;else{if(!(r&1073741824))return e=a!==null?a.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,le(Dt,Xe),Xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=a!==null?a.baseLanes:r,le(Dt,Xe),Xe|=s}else a!==null?(s=a.baseLanes|r,t.memoizedState=null):s=r,le(Dt,Xe),Xe|=s;return De(e,t,i,r),t.child}function Gu(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function el(e,t,r,s,i){var a=Ge(r)?vt:Me.current;return a=nr(t,a),Yt(t,i),r=io(e,t,r,s,a,i),s=ao(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,On(e,t,i)):(de&&s&&Wl(t),t.flags|=1,De(e,t,r,i),t.child)}function wc(e,t,r,s,i){if(Ge(r)){var a=!0;ti(t)}else a=!1;if(Yt(t,i),t.stateNode===null)Ds(e,t),Hu(t,r,s),Ja(t,r,s,i),s=!0;else if(e===null){var l=t.stateNode,o=t.memoizedProps;l.props=o;var c=l.context,h=r.contextType;typeof h=="object"&&h!==null?h=on(h):(h=Ge(r)?vt:Me.current,h=nr(t,h));var d=r.getDerivedStateFromProps,p=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==s||c!==h)&&vc(t,l,s,h),Mn=!1;var m=t.memoizedState;l.state=m,li(t,s,l,i),c=t.memoizedState,o!==s||m!==c||We.current||Mn?(typeof d=="function"&&(Ya(t,r,d,s),c=t.memoizedState),(o=Mn||gc(t,r,o,s,m,c,h))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=c),l.props=s,l.state=c,l.context=h,s=o):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{l=t.stateNode,ku(e,t),o=t.memoizedProps,h=t.type===t.elementType?o:un(t.type,o),l.props=h,p=t.pendingProps,m=l.context,c=r.contextType,typeof c=="object"&&c!==null?c=on(c):(c=Ge(r)?vt:Me.current,c=nr(t,c));var b=r.getDerivedStateFromProps;(d=typeof b=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==p||m!==c)&&vc(t,l,s,c),Mn=!1,m=t.memoizedState,l.state=m,li(t,s,l,i);var w=t.memoizedState;o!==p||m!==w||We.current||Mn?(typeof b=="function"&&(Ya(t,r,b,s),w=t.memoizedState),(h=Mn||gc(t,r,h,s,m,w,c)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(s,w,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(s,w,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=w),l.props=s,l.state=w,l.context=c,s=h):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),s=!1)}return nl(e,t,r,s,a,i)}function nl(e,t,r,s,i,a){Gu(e,t);var l=(t.flags&128)!==0;if(!s&&!l)return i&&oc(t,r,!1),On(e,t,a);s=t.stateNode,Yf.current=t;var o=l&&typeof r.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&l?(t.child=rr(t,e.child,null,a),t.child=rr(t,null,o,a)):De(e,t,o,a),t.memoizedState=s.state,i&&oc(t,r,!0),t.child}function Qu(e){var t=e.stateNode;t.pendingContext?lc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&lc(e,t.context,!1),no(e,t.containerInfo)}function bc(e,t,r,s,i){return tr(),Ql(i),t.flags|=256,De(e,t,r,s),t.child}var tl={dehydrated:null,treeContext:null,retryLane:0};function rl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Xu(e,t,r){var s=t.pendingProps,i=ue.current,a=!1,l=(t.flags&128)!==0,o;if((o=l)||(o=e!==null&&e.memoizedState===null?!1:(i&2)!==0),o?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),le(ue,i&1),e===null)return Qa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=s.children,e=s.fallback,a?(s=t.mode,a=t.child,l={mode:"hidden",children:l},!(s&1)&&a!==null?(a.childLanes=0,a.pendingProps=l):a=Pi(l,s,0,null),e=mt(e,s,r,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=rl(r),t.memoizedState=tl,e):co(t,l));if(i=e.memoizedState,i!==null&&(o=i.dehydrated,o!==null))return Jf(e,t,l,s,o,i,r);if(a){a=s.fallback,l=t.mode,i=e.child,o=i.sibling;var c={mode:"hidden",children:s.children};return!(l&1)&&t.child!==i?(s=t.child,s.childLanes=0,s.pendingProps=c,t.deletions=null):(s=Xn(i,c),s.subtreeFlags=i.subtreeFlags&14680064),o!==null?a=Xn(o,a):(a=mt(a,l,r,null),a.flags|=2),a.return=t,s.return=t,s.sibling=a,t.child=s,s=a,a=t.child,l=e.child.memoizedState,l=l===null?rl(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},a.memoizedState=l,a.childLanes=e.childLanes&~r,t.memoizedState=tl,s}return a=e.child,e=a.sibling,s=Xn(a,{mode:"visible",children:s.children}),!(t.mode&1)&&(s.lanes=r),s.return=t,s.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=s,t.memoizedState=null,s}function co(e,t){return t=Pi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Cs(e,t,r,s){return s!==null&&Ql(s),rr(t,e.child,null,r),e=co(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Jf(e,t,r,s,i,a,l){if(r)return t.flags&256?(t.flags&=-257,s=oa(Error(U(422))),Cs(e,t,l,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=s.fallback,i=t.mode,s=Pi({mode:"visible",children:s.children},i,0,null),a=mt(a,i,l,null),a.flags|=2,s.return=t,a.return=t,s.sibling=a,t.child=s,t.mode&1&&rr(t,e.child,null,l),t.child.memoizedState=rl(l),t.memoizedState=tl,a);if(!(t.mode&1))return Cs(e,t,l,null);if(i.data==="$!"){if(s=i.nextSibling&&i.nextSibling.dataset,s)var o=s.dgst;return s=o,a=Error(U(419)),s=oa(a,s,void 0),Cs(e,t,l,s)}if(o=(l&e.childLanes)!==0,Ke||o){if(s=Se,s!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(s.suspendedLanes|l)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,En(e,i),mn(s,e,i,-1))}return go(),s=oa(Error(U(421))),Cs(e,t,l,s)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=um.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,Je=Kn(i.nextSibling),Ze=t,de=!0,pn=null,e!==null&&(rn[sn++]=Sn,rn[sn++]=Cn,rn[sn++]=xt,Sn=e.id,Cn=e.overflow,xt=t),t=co(t,s.children),t.flags|=4096,t)}function Sc(e,t,r){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),Xa(e.return,t,r)}function ca(e,t,r,s,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:r,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=s,a.tail=r,a.tailMode=i)}function Yu(e,t,r){var s=t.pendingProps,i=s.revealOrder,a=s.tail;if(De(e,t,s.children,r),s=ue.current,s&2)s=s&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sc(e,r,t);else if(e.tag===19)Sc(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(le(ue,s),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&oi(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),ca(t,!1,i,r,a);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&oi(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}ca(t,!0,r,null,a);break;case"together":ca(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ds(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function On(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),jt|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(U(153));if(t.child!==null){for(e=t.child,r=Xn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Xn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Zf(e,t,r){switch(t.tag){case 3:Qu(t),tr();break;case 5:wu(t);break;case 1:Ge(t.type)&&ti(t);break;case 4:no(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,i=t.memoizedProps.value;le(ii,s._currentValue),s._currentValue=i;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(le(ue,ue.current&1),t.flags|=128,null):r&t.child.childLanes?Xu(e,t,r):(le(ue,ue.current&1),e=On(e,t,r),e!==null?e.sibling:null);le(ue,ue.current&1);break;case 19:if(s=(r&t.childLanes)!==0,e.flags&128){if(s)return Yu(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),le(ue,ue.current),s)break;return null;case 22:case 23:return t.lanes=0,Wu(e,t,r)}return On(e,t,r)}var Ju,sl,Zu,eh;Ju=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};sl=function(){};Zu=function(e,t,r,s){var i=e.memoizedProps;if(i!==s){e=t.stateNode,ut(Nn.current);var a=null;switch(r){case"input":i=Ca(e,i),s=Ca(e,s),a=[];break;case"select":i=pe({},i,{value:void 0}),s=pe({},s,{value:void 0}),a=[];break;case"textarea":i=_a(e,i),s=_a(e,s),a=[];break;default:typeof i.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=ei)}Oa(r,s);var l;r=null;for(h in i)if(!s.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var o=i[h];for(l in o)o.hasOwnProperty(l)&&(r||(r={}),r[l]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Ar.hasOwnProperty(h)?a||(a=[]):(a=a||[]).push(h,null));for(h in s){var c=s[h];if(o=i!=null?i[h]:void 0,s.hasOwnProperty(h)&&c!==o&&(c!=null||o!=null))if(h==="style")if(o){for(l in o)!o.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(r||(r={}),r[l]="");for(l in c)c.hasOwnProperty(l)&&o[l]!==c[l]&&(r||(r={}),r[l]=c[l])}else r||(a||(a=[]),a.push(h,r)),r=c;else h==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(a=a||[]).push(h,c)):h==="children"?typeof c!="string"&&typeof c!="number"||(a=a||[]).push(h,""+c):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Ar.hasOwnProperty(h)?(c!=null&&h==="onScroll"&&oe("scroll",e),a||o===c||(a=[])):(a=a||[]).push(h,c))}r&&(a=a||[]).push("style",r);var h=a;(t.updateQueue=h)&&(t.flags|=4)}};eh=function(e,t,r,s){r!==s&&(t.flags|=4)};function yr(e,t){if(!de)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,s=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,s|=i.subtreeFlags&14680064,s|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,s|=i.subtreeFlags,s|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=s,e.childLanes=r,t}function em(e,t,r){var s=t.pendingProps;switch(Gl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(t),null;case 1:return Ge(t.type)&&ni(),Pe(t),null;case 3:return s=t.stateNode,sr(),ce(We),ce(Me),ro(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(bs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,pn!==null&&(hl(pn),pn=null))),sl(e,t),Pe(t),null;case 5:to(t);var i=ut(Xr.current);if(r=t.type,e!==null&&t.stateNode!=null)Zu(e,t,r,s,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(U(166));return Pe(t),null}if(e=ut(Nn.current),bs(t)){s=t.stateNode,r=t.type;var a=t.memoizedProps;switch(s[yn]=t,s[Gr]=a,e=(t.mode&1)!==0,r){case"dialog":oe("cancel",s),oe("close",s);break;case"iframe":case"object":case"embed":oe("load",s);break;case"video":case"audio":for(i=0;i<br.length;i++)oe(br[i],s);break;case"source":oe("error",s);break;case"img":case"image":case"link":oe("error",s),oe("load",s);break;case"details":oe("toggle",s);break;case"input":Io(s,a),oe("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!a.multiple},oe("invalid",s);break;case"textarea":Mo(s,a),oe("invalid",s)}Oa(r,a),i=null;for(var l in a)if(a.hasOwnProperty(l)){var o=a[l];l==="children"?typeof o=="string"?s.textContent!==o&&(a.suppressHydrationWarning!==!0&&ws(s.textContent,o,e),i=["children",o]):typeof o=="number"&&s.textContent!==""+o&&(a.suppressHydrationWarning!==!0&&ws(s.textContent,o,e),i=["children",""+o]):Ar.hasOwnProperty(l)&&o!=null&&l==="onScroll"&&oe("scroll",s)}switch(r){case"input":ms(s),zo(s,a,!0);break;case"textarea":ms(s),Vo(s);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(s.onclick=ei)}s=i,t.updateQueue=s,s!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ld(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=l.createElement(r,{is:s.is}):(e=l.createElement(r),r==="select"&&(l=e,s.multiple?l.multiple=!0:s.size&&(l.size=s.size))):e=l.createElementNS(e,r),e[yn]=t,e[Gr]=s,Ju(e,t,!1,!1),t.stateNode=e;e:{switch(l=Ra(r,s),r){case"dialog":oe("cancel",e),oe("close",e),i=s;break;case"iframe":case"object":case"embed":oe("load",e),i=s;break;case"video":case"audio":for(i=0;i<br.length;i++)oe(br[i],e);i=s;break;case"source":oe("error",e),i=s;break;case"img":case"image":case"link":oe("error",e),oe("load",e),i=s;break;case"details":oe("toggle",e),i=s;break;case"input":Io(e,s),i=Ca(e,s),oe("invalid",e);break;case"option":i=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},i=pe({},s,{value:void 0}),oe("invalid",e);break;case"textarea":Mo(e,s),i=_a(e,s),oe("invalid",e);break;default:i=s}Oa(r,i),o=i;for(a in o)if(o.hasOwnProperty(a)){var c=o[a];a==="style"?Od(e,c):a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&_d(e,c)):a==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&Fr(e,c):typeof c=="number"&&Fr(e,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Ar.hasOwnProperty(a)?c!=null&&a==="onScroll"&&oe("scroll",e):c!=null&&Pl(e,a,c,l))}switch(r){case"input":ms(e),zo(e,s,!1);break;case"textarea":ms(e),Vo(e);break;case"option":s.value!=null&&e.setAttribute("value",""+Zn(s.value));break;case"select":e.multiple=!!s.multiple,a=s.value,a!=null?Wt(e,!!s.multiple,a,!1):s.defaultValue!=null&&Wt(e,!!s.multiple,s.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ei)}switch(r){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Pe(t),null;case 6:if(e&&t.stateNode!=null)eh(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(U(166));if(r=ut(Xr.current),ut(Nn.current),bs(t)){if(s=t.stateNode,r=t.memoizedProps,s[yn]=t,(a=s.nodeValue!==r)&&(e=Ze,e!==null))switch(e.tag){case 3:ws(s.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ws(s.nodeValue,r,(e.mode&1)!==0)}a&&(t.flags|=4)}else s=(r.nodeType===9?r:r.ownerDocument).createTextNode(s),s[yn]=t,t.stateNode=s}return Pe(t),null;case 13:if(ce(ue),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(de&&Je!==null&&t.mode&1&&!(t.flags&128))xu(),tr(),t.flags|=98560,a=!1;else if(a=bs(t),s!==null&&s.dehydrated!==null){if(e===null){if(!a)throw Error(U(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(U(317));a[yn]=t}else tr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Pe(t),a=!1}else pn!==null&&(hl(pn),pn=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,t.mode&1&&(e===null||ue.current&1?we===0&&(we=3):go())),t.updateQueue!==null&&(t.flags|=4),Pe(t),null);case 4:return sr(),sl(e,t),e===null&&Kr(t.stateNode.containerInfo),Pe(t),null;case 10:return Jl(t.type._context),Pe(t),null;case 17:return Ge(t.type)&&ni(),Pe(t),null;case 19:if(ce(ue),a=t.memoizedState,a===null)return Pe(t),null;if(s=(t.flags&128)!==0,l=a.rendering,l===null)if(s)yr(a,!1);else{if(we!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=oi(e),l!==null){for(t.flags|=128,yr(a,!1),s=l.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=r,r=t.child;r!==null;)a=r,e=s,a.flags&=14680066,l=a.alternate,l===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return le(ue,ue.current&1|2),t.child}e=e.sibling}a.tail!==null&&ye()>ar&&(t.flags|=128,s=!0,yr(a,!1),t.lanes=4194304)}else{if(!s)if(e=oi(l),e!==null){if(t.flags|=128,s=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),yr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!de)return Pe(t),null}else 2*ye()-a.renderingStartTime>ar&&r!==1073741824&&(t.flags|=128,s=!0,yr(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(r=a.last,r!==null?r.sibling=l:t.child=l,a.last=l)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ye(),t.sibling=null,r=ue.current,le(ue,s?r&1|2:r&1),t):(Pe(t),null);case 22:case 23:return mo(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&t.mode&1?Xe&1073741824&&(Pe(t),t.subtreeFlags&6&&(t.flags|=8192)):Pe(t),null;case 24:return null;case 25:return null}throw Error(U(156,t.tag))}function nm(e,t){switch(Gl(t),t.tag){case 1:return Ge(t.type)&&ni(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return sr(),ce(We),ce(Me),ro(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return to(t),null;case 13:if(ce(ue),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(U(340));tr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ce(ue),null;case 4:return sr(),null;case 10:return Jl(t.type._context),null;case 22:case 23:return mo(),null;case 24:return null;default:return null}}var Ts=!1,ze=!1,tm=typeof WeakSet=="function"?WeakSet:Set,X=null;function Ft(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(s){ve(e,t,s)}else r.current=null}function il(e,t,r){try{r()}catch(s){ve(e,t,s)}}var Cc=!1;function rm(e,t){if(Ba=Ys,e=iu(),Kl(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var s=r.getSelection&&r.getSelection();if(s&&s.rangeCount!==0){r=s.anchorNode;var i=s.anchorOffset,a=s.focusNode;s=s.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var l=0,o=-1,c=-1,h=0,d=0,p=e,m=null;n:for(;;){for(var b;p!==r||i!==0&&p.nodeType!==3||(o=l+i),p!==a||s!==0&&p.nodeType!==3||(c=l+s),p.nodeType===3&&(l+=p.nodeValue.length),(b=p.firstChild)!==null;)m=p,p=b;for(;;){if(p===e)break n;if(m===r&&++h===i&&(o=l),m===a&&++d===s&&(c=l),(b=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=b}r=o===-1||c===-1?null:{start:o,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(Ha={focusedElem:e,selectionRange:r},Ys=!1,X=t;X!==null;)if(t=X,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,X=e;else for(;X!==null;){t=X;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var k=w.memoizedProps,j=w.memoizedState,f=t.stateNode,g=f.getSnapshotBeforeUpdate(t.elementType===t.type?k:un(t.type,k),j);f.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(E){ve(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,X=e;break}X=t.return}return w=Cc,Cc=!1,w}function Pr(e,t,r){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var i=s=s.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&il(t,r,a)}i=i.next}while(i!==s)}}function Oi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var s=r.create;r.destroy=s()}r=r.next}while(r!==t)}}function al(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function nh(e){var t=e.alternate;t!==null&&(e.alternate=null,nh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[yn],delete t[Gr],delete t[Ka],delete t[Ff],delete t[Df])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function th(e){return e.tag===5||e.tag===3||e.tag===4}function Tc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||th(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ll(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=ei));else if(s!==4&&(e=e.child,e!==null))for(ll(e,t,r),e=e.sibling;e!==null;)ll(e,t,r),e=e.sibling}function ol(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(ol(e,t,r),e=e.sibling;e!==null;)ol(e,t,r),e=e.sibling}var _e=null,hn=!1;function In(e,t,r){for(r=r.child;r!==null;)rh(e,t,r),r=r.sibling}function rh(e,t,r){if(jn&&typeof jn.onCommitFiberUnmount=="function")try{jn.onCommitFiberUnmount(wi,r)}catch{}switch(r.tag){case 5:ze||Ft(r,t);case 6:var s=_e,i=hn;_e=null,In(e,t,r),_e=s,hn=i,_e!==null&&(hn?(e=_e,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):_e.removeChild(r.stateNode));break;case 18:_e!==null&&(hn?(e=_e,r=r.stateNode,e.nodeType===8?ta(e.parentNode,r):e.nodeType===1&&ta(e,r),Hr(e)):ta(_e,r.stateNode));break;case 4:s=_e,i=hn,_e=r.stateNode.containerInfo,hn=!0,In(e,t,r),_e=s,hn=i;break;case 0:case 11:case 14:case 15:if(!ze&&(s=r.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){i=s=s.next;do{var a=i,l=a.destroy;a=a.tag,l!==void 0&&(a&2||a&4)&&il(r,t,l),i=i.next}while(i!==s)}In(e,t,r);break;case 1:if(!ze&&(Ft(r,t),s=r.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=r.memoizedProps,s.state=r.memoizedState,s.componentWillUnmount()}catch(o){ve(r,t,o)}In(e,t,r);break;case 21:In(e,t,r);break;case 22:r.mode&1?(ze=(s=ze)||r.memoizedState!==null,In(e,t,r),ze=s):In(e,t,r);break;default:In(e,t,r)}}function Lc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new tm),t.forEach(function(s){var i=hm.bind(null,e,s);r.has(s)||(r.add(s),s.then(i,i))})}}function dn(e,t){var r=t.deletions;if(r!==null)for(var s=0;s<r.length;s++){var i=r[s];try{var a=e,l=t,o=l;e:for(;o!==null;){switch(o.tag){case 5:_e=o.stateNode,hn=!1;break e;case 3:_e=o.stateNode.containerInfo,hn=!0;break e;case 4:_e=o.stateNode.containerInfo,hn=!0;break e}o=o.return}if(_e===null)throw Error(U(160));rh(a,l,i),_e=null,hn=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(h){ve(i,t,h)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)sh(t,e),t=t.sibling}function sh(e,t){var r=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(dn(t,e),vn(e),s&4){try{Pr(3,e,e.return),Oi(3,e)}catch(k){ve(e,e.return,k)}try{Pr(5,e,e.return)}catch(k){ve(e,e.return,k)}}break;case 1:dn(t,e),vn(e),s&512&&r!==null&&Ft(r,r.return);break;case 5:if(dn(t,e),vn(e),s&512&&r!==null&&Ft(r,r.return),e.flags&32){var i=e.stateNode;try{Fr(i,"")}catch(k){ve(e,e.return,k)}}if(s&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,l=r!==null?r.memoizedProps:a,o=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{o==="input"&&a.type==="radio"&&a.name!=null&&Cd(i,a),Ra(o,l);var h=Ra(o,a);for(l=0;l<c.length;l+=2){var d=c[l],p=c[l+1];d==="style"?Od(i,p):d==="dangerouslySetInnerHTML"?_d(i,p):d==="children"?Fr(i,p):Pl(i,d,p,h)}switch(o){case"input":Ta(i,a);break;case"textarea":Td(i,a);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var b=a.value;b!=null?Wt(i,!!a.multiple,b,!1):m!==!!a.multiple&&(a.defaultValue!=null?Wt(i,!!a.multiple,a.defaultValue,!0):Wt(i,!!a.multiple,a.multiple?[]:"",!1))}i[Gr]=a}catch(k){ve(e,e.return,k)}}break;case 6:if(dn(t,e),vn(e),s&4){if(e.stateNode===null)throw Error(U(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(k){ve(e,e.return,k)}}break;case 3:if(dn(t,e),vn(e),s&4&&r!==null&&r.memoizedState.isDehydrated)try{Hr(t.containerInfo)}catch(k){ve(e,e.return,k)}break;case 4:dn(t,e),vn(e);break;case 13:dn(t,e),vn(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(po=ye())),s&4&&Lc(e);break;case 22:if(d=r!==null&&r.memoizedState!==null,e.mode&1?(ze=(h=ze)||d,dn(t,e),ze=h):dn(t,e),vn(e),s&8192){if(h=e.memoizedState!==null,(e.stateNode.isHidden=h)&&!d&&e.mode&1)for(X=e,d=e.child;d!==null;){for(p=X=d;X!==null;){switch(m=X,b=m.child,m.tag){case 0:case 11:case 14:case 15:Pr(4,m,m.return);break;case 1:Ft(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){s=m,r=m.return;try{t=s,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(k){ve(s,r,k)}}break;case 5:Ft(m,m.return);break;case 22:if(m.memoizedState!==null){Ec(p);continue}}b!==null?(b.return=m,X=b):Ec(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,h?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(o=p.stateNode,c=p.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=Ed("display",l))}catch(k){ve(e,e.return,k)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=h?"":p.memoizedProps}catch(k){ve(e,e.return,k)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:dn(t,e),vn(e),s&4&&Lc(e);break;case 21:break;default:dn(t,e),vn(e)}}function vn(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(th(r)){var s=r;break e}r=r.return}throw Error(U(160))}switch(s.tag){case 5:var i=s.stateNode;s.flags&32&&(Fr(i,""),s.flags&=-33);var a=Tc(e);ol(e,a,i);break;case 3:case 4:var l=s.stateNode.containerInfo,o=Tc(e);ll(e,o,l);break;default:throw Error(U(161))}}catch(c){ve(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function sm(e,t,r){X=e,ih(e)}function ih(e,t,r){for(var s=(e.mode&1)!==0;X!==null;){var i=X,a=i.child;if(i.tag===22&&s){var l=i.memoizedState!==null||Ts;if(!l){var o=i.alternate,c=o!==null&&o.memoizedState!==null||ze;o=Ts;var h=ze;if(Ts=l,(ze=c)&&!h)for(X=i;X!==null;)l=X,c=l.child,l.tag===22&&l.memoizedState!==null?Oc(i):c!==null?(c.return=l,X=c):Oc(i);for(;a!==null;)X=a,ih(a),a=a.sibling;X=i,Ts=o,ze=h}_c(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,X=a):_c(e)}}function _c(e){for(;X!==null;){var t=X;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ze||Oi(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!ze)if(r===null)s.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:un(t.type,r.memoizedProps);s.componentDidUpdate(i,r.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&pc(t,a,s);break;case 3:var l=t.updateQueue;if(l!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}pc(t,l,r)}break;case 5:var o=t.stateNode;if(r===null&&t.flags&4){r=o;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var h=t.alternate;if(h!==null){var d=h.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Hr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}ze||t.flags&512&&al(t)}catch(m){ve(t,t.return,m)}}if(t===e){X=null;break}if(r=t.sibling,r!==null){r.return=t.return,X=r;break}X=t.return}}function Ec(e){for(;X!==null;){var t=X;if(t===e){X=null;break}var r=t.sibling;if(r!==null){r.return=t.return,X=r;break}X=t.return}}function Oc(e){for(;X!==null;){var t=X;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Oi(4,t)}catch(c){ve(t,r,c)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var i=t.return;try{s.componentDidMount()}catch(c){ve(t,i,c)}}var a=t.return;try{al(t)}catch(c){ve(t,a,c)}break;case 5:var l=t.return;try{al(t)}catch(c){ve(t,l,c)}}}catch(c){ve(t,t.return,c)}if(t===e){X=null;break}var o=t.sibling;if(o!==null){o.return=t.return,X=o;break}X=t.return}}var im=Math.ceil,ui=Rn.ReactCurrentDispatcher,uo=Rn.ReactCurrentOwner,ln=Rn.ReactCurrentBatchConfig,te=0,Se=null,je=null,Ee=0,Xe=0,Dt=tt(0),we=0,es=null,jt=0,Ri=0,ho=0,Ir=null,Ue=null,po=0,ar=1/0,wn=null,hi=!1,cl=null,Gn=null,Ls=!1,Dn=null,pi=0,zr=0,dl=null,$s=-1,Bs=0;function Be(){return te&6?ye():$s!==-1?$s:$s=ye()}function Qn(e){return e.mode&1?te&2&&Ee!==0?Ee&-Ee:Bf.transition!==null?(Bs===0&&(Bs=Hd()),Bs):(e=ie,e!==0||(e=window.event,e=e===void 0?16:Xd(e.type)),e):1}function mn(e,t,r,s){if(50<zr)throw zr=0,dl=null,Error(U(185));as(e,r,s),(!(te&2)||e!==Se)&&(e===Se&&(!(te&2)&&(Ri|=r),we===4&&An(e,Ee)),Qe(e,s),r===1&&te===0&&!(t.mode&1)&&(ar=ye()+500,Li&&rt()))}function Qe(e,t){var r=e.callbackNode;$p(e,t);var s=Xs(e,e===Se?Ee:0);if(s===0)r!==null&&Do(r),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(r!=null&&Do(r),t===1)e.tag===0?$f(Rc.bind(null,e)):mu(Rc.bind(null,e)),Vf(function(){!(te&6)&&rt()}),r=null;else{switch(qd(s)){case 1:r=Al;break;case 4:r=$d;break;case 16:r=Qs;break;case 536870912:r=Bd;break;default:r=Qs}r=ph(r,ah.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function ah(e,t){if($s=-1,Bs=0,te&6)throw Error(U(327));var r=e.callbackNode;if(Jt()&&e.callbackNode!==r)return null;var s=Xs(e,e===Se?Ee:0);if(s===0)return null;if(s&30||s&e.expiredLanes||t)t=fi(e,s);else{t=s;var i=te;te|=2;var a=oh();(Se!==e||Ee!==t)&&(wn=null,ar=ye()+500,ft(e,t));do try{om();break}catch(o){lh(e,o)}while(!0);Yl(),ui.current=a,te=i,je!==null?t=0:(Se=null,Ee=0,t=we)}if(t!==0){if(t===2&&(i=Va(e),i!==0&&(s=i,t=ul(e,i))),t===1)throw r=es,ft(e,0),An(e,s),Qe(e,ye()),r;if(t===6)An(e,s);else{if(i=e.current.alternate,!(s&30)&&!am(i)&&(t=fi(e,s),t===2&&(a=Va(e),a!==0&&(s=a,t=ul(e,a))),t===1))throw r=es,ft(e,0),An(e,s),Qe(e,ye()),r;switch(e.finishedWork=i,e.finishedLanes=s,t){case 0:case 1:throw Error(U(345));case 2:ot(e,Ue,wn);break;case 3:if(An(e,s),(s&130023424)===s&&(t=po+500-ye(),10<t)){if(Xs(e,0)!==0)break;if(i=e.suspendedLanes,(i&s)!==s){Be(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ua(ot.bind(null,e,Ue,wn),t);break}ot(e,Ue,wn);break;case 4:if(An(e,s),(s&4194240)===s)break;for(t=e.eventTimes,i=-1;0<s;){var l=31-fn(s);a=1<<l,l=t[l],l>i&&(i=l),s&=~a}if(s=i,s=ye()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*im(s/1960))-s,10<s){e.timeoutHandle=Ua(ot.bind(null,e,Ue,wn),s);break}ot(e,Ue,wn);break;case 5:ot(e,Ue,wn);break;default:throw Error(U(329))}}}return Qe(e,ye()),e.callbackNode===r?ah.bind(null,e):null}function ul(e,t){var r=Ir;return e.current.memoizedState.isDehydrated&&(ft(e,t).flags|=256),e=fi(e,t),e!==2&&(t=Ue,Ue=r,t!==null&&hl(t)),e}function hl(e){Ue===null?Ue=e:Ue.push.apply(Ue,e)}function am(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var s=0;s<r.length;s++){var i=r[s],a=i.getSnapshot;i=i.value;try{if(!gn(a(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function An(e,t){for(t&=~ho,t&=~Ri,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-fn(t),s=1<<r;e[r]=-1,t&=~s}}function Rc(e){if(te&6)throw Error(U(327));Jt();var t=Xs(e,0);if(!(t&1))return Qe(e,ye()),null;var r=fi(e,t);if(e.tag!==0&&r===2){var s=Va(e);s!==0&&(t=s,r=ul(e,s))}if(r===1)throw r=es,ft(e,0),An(e,t),Qe(e,ye()),r;if(r===6)throw Error(U(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ot(e,Ue,wn),Qe(e,ye()),null}function fo(e,t){var r=te;te|=1;try{return e(t)}finally{te=r,te===0&&(ar=ye()+500,Li&&rt())}}function Nt(e){Dn!==null&&Dn.tag===0&&!(te&6)&&Jt();var t=te;te|=1;var r=ln.transition,s=ie;try{if(ln.transition=null,ie=1,e)return e()}finally{ie=s,ln.transition=r,te=t,!(te&6)&&rt()}}function mo(){Xe=Dt.current,ce(Dt)}function ft(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Mf(r)),je!==null)for(r=je.return;r!==null;){var s=r;switch(Gl(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&ni();break;case 3:sr(),ce(We),ce(Me),ro();break;case 5:to(s);break;case 4:sr();break;case 13:ce(ue);break;case 19:ce(ue);break;case 10:Jl(s.type._context);break;case 22:case 23:mo()}r=r.return}if(Se=e,je=e=Xn(e.current,null),Ee=Xe=t,we=0,es=null,ho=Ri=jt=0,Ue=Ir=null,dt!==null){for(t=0;t<dt.length;t++)if(r=dt[t],s=r.interleaved,s!==null){r.interleaved=null;var i=s.next,a=r.pending;if(a!==null){var l=a.next;a.next=i,s.next=l}r.pending=s}dt=null}return e}function lh(e,t){do{var r=je;try{if(Yl(),As.current=di,ci){for(var s=he.memoizedState;s!==null;){var i=s.queue;i!==null&&(i.pending=null),s=s.next}ci=!1}if(yt=0,be=ke=he=null,Rr=!1,Yr=0,uo.current=null,r===null||r.return===null){we=1,es=t,je=null;break}e:{var a=e,l=r.return,o=r,c=t;if(t=Ee,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var h=c,d=o,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var b=yc(l);if(b!==null){b.flags&=-257,jc(b,l,o,a,t),b.mode&1&&xc(a,h,t),t=b,c=h;var w=t.updateQueue;if(w===null){var k=new Set;k.add(c),t.updateQueue=k}else w.add(c);break e}else{if(!(t&1)){xc(a,h,t),go();break e}c=Error(U(426))}}else if(de&&o.mode&1){var j=yc(l);if(j!==null){!(j.flags&65536)&&(j.flags|=256),jc(j,l,o,a,t),Ql(ir(c,o));break e}}a=c=ir(c,o),we!==4&&(we=2),Ir===null?Ir=[a]:Ir.push(a),a=l;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var f=qu(a,c,t);hc(a,f);break e;case 1:o=c;var g=a.type,v=a.stateNode;if(!(a.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Gn===null||!Gn.has(v)))){a.flags|=65536,t&=-t,a.lanes|=t;var E=Uu(a,o,t);hc(a,E);break e}}a=a.return}while(a!==null)}dh(r)}catch(y){t=y,je===r&&r!==null&&(je=r=r.return);continue}break}while(!0)}function oh(){var e=ui.current;return ui.current=di,e===null?di:e}function go(){(we===0||we===3||we===2)&&(we=4),Se===null||!(jt&268435455)&&!(Ri&268435455)||An(Se,Ee)}function fi(e,t){var r=te;te|=2;var s=oh();(Se!==e||Ee!==t)&&(wn=null,ft(e,t));do try{lm();break}catch(i){lh(e,i)}while(!0);if(Yl(),te=r,ui.current=s,je!==null)throw Error(U(261));return Se=null,Ee=0,we}function lm(){for(;je!==null;)ch(je)}function om(){for(;je!==null&&!Rp();)ch(je)}function ch(e){var t=hh(e.alternate,e,Xe);e.memoizedProps=e.pendingProps,t===null?dh(e):je=t,uo.current=null}function dh(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=nm(r,t),r!==null){r.flags&=32767,je=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{we=6,je=null;return}}else if(r=em(r,t,Xe),r!==null){je=r;return}if(t=t.sibling,t!==null){je=t;return}je=t=e}while(t!==null);we===0&&(we=5)}function ot(e,t,r){var s=ie,i=ln.transition;try{ln.transition=null,ie=1,cm(e,t,r,s)}finally{ln.transition=i,ie=s}return null}function cm(e,t,r,s){do Jt();while(Dn!==null);if(te&6)throw Error(U(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(U(177));e.callbackNode=null,e.callbackPriority=0;var a=r.lanes|r.childLanes;if(Bp(e,a),e===Se&&(je=Se=null,Ee=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Ls||(Ls=!0,ph(Qs,function(){return Jt(),null})),a=(r.flags&15990)!==0,r.subtreeFlags&15990||a){a=ln.transition,ln.transition=null;var l=ie;ie=1;var o=te;te|=4,uo.current=null,rm(e,r),sh(r,e),_f(Ha),Ys=!!Ba,Ha=Ba=null,e.current=r,sm(r),Pp(),te=o,ie=l,ln.transition=a}else e.current=r;if(Ls&&(Ls=!1,Dn=e,pi=i),a=e.pendingLanes,a===0&&(Gn=null),Mp(r.stateNode),Qe(e,ye()),t!==null)for(s=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],s(i.value,{componentStack:i.stack,digest:i.digest});if(hi)throw hi=!1,e=cl,cl=null,e;return pi&1&&e.tag!==0&&Jt(),a=e.pendingLanes,a&1?e===dl?zr++:(zr=0,dl=e):zr=0,rt(),null}function Jt(){if(Dn!==null){var e=qd(pi),t=ln.transition,r=ie;try{if(ln.transition=null,ie=16>e?16:e,Dn===null)var s=!1;else{if(e=Dn,Dn=null,pi=0,te&6)throw Error(U(331));var i=te;for(te|=4,X=e.current;X!==null;){var a=X,l=a.child;if(X.flags&16){var o=a.deletions;if(o!==null){for(var c=0;c<o.length;c++){var h=o[c];for(X=h;X!==null;){var d=X;switch(d.tag){case 0:case 11:case 15:Pr(8,d,a)}var p=d.child;if(p!==null)p.return=d,X=p;else for(;X!==null;){d=X;var m=d.sibling,b=d.return;if(nh(d),d===h){X=null;break}if(m!==null){m.return=b,X=m;break}X=b}}}var w=a.alternate;if(w!==null){var k=w.child;if(k!==null){w.child=null;do{var j=k.sibling;k.sibling=null,k=j}while(k!==null)}}X=a}}if(a.subtreeFlags&2064&&l!==null)l.return=a,X=l;else e:for(;X!==null;){if(a=X,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Pr(9,a,a.return)}var f=a.sibling;if(f!==null){f.return=a.return,X=f;break e}X=a.return}}var g=e.current;for(X=g;X!==null;){l=X;var v=l.child;if(l.subtreeFlags&2064&&v!==null)v.return=l,X=v;else e:for(l=g;X!==null;){if(o=X,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Oi(9,o)}}catch(y){ve(o,o.return,y)}if(o===l){X=null;break e}var E=o.sibling;if(E!==null){E.return=o.return,X=E;break e}X=o.return}}if(te=i,rt(),jn&&typeof jn.onPostCommitFiberRoot=="function")try{jn.onPostCommitFiberRoot(wi,e)}catch{}s=!0}return s}finally{ie=r,ln.transition=t}}return!1}function Pc(e,t,r){t=ir(r,t),t=qu(e,t,1),e=Wn(e,t,1),t=Be(),e!==null&&(as(e,1,t),Qe(e,t))}function ve(e,t,r){if(e.tag===3)Pc(e,e,r);else for(;t!==null;){if(t.tag===3){Pc(t,e,r);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Gn===null||!Gn.has(s))){e=ir(r,e),e=Uu(t,e,1),t=Wn(t,e,1),e=Be(),t!==null&&(as(t,1,e),Qe(t,e));break}}t=t.return}}function dm(e,t,r){var s=e.pingCache;s!==null&&s.delete(t),t=Be(),e.pingedLanes|=e.suspendedLanes&r,Se===e&&(Ee&r)===r&&(we===4||we===3&&(Ee&130023424)===Ee&&500>ye()-po?ft(e,0):ho|=r),Qe(e,t)}function uh(e,t){t===0&&(e.mode&1?(t=xs,xs<<=1,!(xs&130023424)&&(xs=4194304)):t=1);var r=Be();e=En(e,t),e!==null&&(as(e,t,r),Qe(e,r))}function um(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),uh(e,r)}function hm(e,t){var r=0;switch(e.tag){case 13:var s=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(U(314))}s!==null&&s.delete(t),uh(e,r)}var hh;hh=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||We.current)Ke=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Ke=!1,Zf(e,t,r);Ke=!!(e.flags&131072)}else Ke=!1,de&&t.flags&1048576&&gu(t,si,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;Ds(e,t),e=t.pendingProps;var i=nr(t,Me.current);Yt(t,r),i=io(null,t,s,e,i,r);var a=ao();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ge(s)?(a=!0,ti(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,eo(t),i.updater=Ei,t.stateNode=i,i._reactInternals=t,Ja(t,s,e,r),t=nl(null,t,s,!0,a,r)):(t.tag=0,de&&a&&Wl(t),De(null,t,i,r),t=t.child),t;case 16:s=t.elementType;e:{switch(Ds(e,t),e=t.pendingProps,i=s._init,s=i(s._payload),t.type=s,i=t.tag=fm(s),e=un(s,e),i){case 0:t=el(null,t,s,e,r);break e;case 1:t=wc(null,t,s,e,r);break e;case 11:t=Nc(null,t,s,e,r);break e;case 14:t=kc(null,t,s,un(s.type,e),r);break e}throw Error(U(306,s,""))}return t;case 0:return s=t.type,i=t.pendingProps,i=t.elementType===s?i:un(s,i),el(e,t,s,i,r);case 1:return s=t.type,i=t.pendingProps,i=t.elementType===s?i:un(s,i),wc(e,t,s,i,r);case 3:e:{if(Qu(t),e===null)throw Error(U(387));s=t.pendingProps,a=t.memoizedState,i=a.element,ku(e,t),li(t,s,null,r);var l=t.memoizedState;if(s=l.element,a.isDehydrated)if(a={element:s,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=ir(Error(U(423)),t),t=bc(e,t,s,r,i);break e}else if(s!==i){i=ir(Error(U(424)),t),t=bc(e,t,s,r,i);break e}else for(Je=Kn(t.stateNode.containerInfo.firstChild),Ze=t,de=!0,pn=null,r=ju(t,null,s,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(tr(),s===i){t=On(e,t,r);break e}De(e,t,s,r)}t=t.child}return t;case 5:return wu(t),e===null&&Qa(t),s=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,l=i.children,qa(s,i)?l=null:a!==null&&qa(s,a)&&(t.flags|=32),Gu(e,t),De(e,t,l,r),t.child;case 6:return e===null&&Qa(t),null;case 13:return Xu(e,t,r);case 4:return no(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=rr(t,null,s,r):De(e,t,s,r),t.child;case 11:return s=t.type,i=t.pendingProps,i=t.elementType===s?i:un(s,i),Nc(e,t,s,i,r);case 7:return De(e,t,t.pendingProps,r),t.child;case 8:return De(e,t,t.pendingProps.children,r),t.child;case 12:return De(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(s=t.type._context,i=t.pendingProps,a=t.memoizedProps,l=i.value,le(ii,s._currentValue),s._currentValue=l,a!==null)if(gn(a.value,l)){if(a.children===i.children&&!We.current){t=On(e,t,r);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var o=a.dependencies;if(o!==null){l=a.child;for(var c=o.firstContext;c!==null;){if(c.context===s){if(a.tag===1){c=Tn(-1,r&-r),c.tag=2;var h=a.updateQueue;if(h!==null){h=h.shared;var d=h.pending;d===null?c.next=c:(c.next=d.next,d.next=c),h.pending=c}}a.lanes|=r,c=a.alternate,c!==null&&(c.lanes|=r),Xa(a.return,r,t),o.lanes|=r;break}c=c.next}}else if(a.tag===10)l=a.type===t.type?null:a.child;else if(a.tag===18){if(l=a.return,l===null)throw Error(U(341));l.lanes|=r,o=l.alternate,o!==null&&(o.lanes|=r),Xa(l,r,t),l=a.sibling}else l=a.child;if(l!==null)l.return=a;else for(l=a;l!==null;){if(l===t){l=null;break}if(a=l.sibling,a!==null){a.return=l.return,l=a;break}l=l.return}a=l}De(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,s=t.pendingProps.children,Yt(t,r),i=on(i),s=s(i),t.flags|=1,De(e,t,s,r),t.child;case 14:return s=t.type,i=un(s,t.pendingProps),i=un(s.type,i),kc(e,t,s,i,r);case 15:return Ku(e,t,t.type,t.pendingProps,r);case 17:return s=t.type,i=t.pendingProps,i=t.elementType===s?i:un(s,i),Ds(e,t),t.tag=1,Ge(s)?(e=!0,ti(t)):e=!1,Yt(t,r),Hu(t,s,i),Ja(t,s,i,r),nl(null,t,s,!0,e,r);case 19:return Yu(e,t,r);case 22:return Wu(e,t,r)}throw Error(U(156,t.tag))};function ph(e,t){return Dd(e,t)}function pm(e,t,r,s){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function an(e,t,r,s){return new pm(e,t,r,s)}function vo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function fm(e){if(typeof e=="function")return vo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===zl)return 11;if(e===Ml)return 14}return 2}function Xn(e,t){var r=e.alternate;return r===null?(r=an(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Hs(e,t,r,s,i,a){var l=2;if(s=e,typeof e=="function")vo(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Et:return mt(r.children,i,a,t);case Il:l=8,i|=8;break;case ka:return e=an(12,r,t,i|2),e.elementType=ka,e.lanes=a,e;case wa:return e=an(13,r,t,i),e.elementType=wa,e.lanes=a,e;case ba:return e=an(19,r,t,i),e.elementType=ba,e.lanes=a,e;case wd:return Pi(r,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Nd:l=10;break e;case kd:l=9;break e;case zl:l=11;break e;case Ml:l=14;break e;case zn:l=16,s=null;break e}throw Error(U(130,e==null?e:typeof e,""))}return t=an(l,r,t,i),t.elementType=e,t.type=s,t.lanes=a,t}function mt(e,t,r,s){return e=an(7,e,s,t),e.lanes=r,e}function Pi(e,t,r,s){return e=an(22,e,s,t),e.elementType=wd,e.lanes=r,e.stateNode={isHidden:!1},e}function da(e,t,r){return e=an(6,e,null,t),e.lanes=r,e}function ua(e,t,r){return t=an(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function mm(e,t,r,s,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ui(0),this.expirationTimes=Ui(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ui(0),this.identifierPrefix=s,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function xo(e,t,r,s,i,a,l,o,c){return e=new mm(e,t,r,o,c),t===1?(t=1,a===!0&&(t|=8)):t=0,a=an(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:s,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},eo(a),e}function gm(e,t,r){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_t,key:s==null?null:""+s,children:e,containerInfo:t,implementation:r}}function fh(e){if(!e)return et;e=e._reactInternals;e:{if(wt(e)!==e||e.tag!==1)throw Error(U(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ge(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(U(171))}if(e.tag===1){var r=e.type;if(Ge(r))return fu(e,r,t)}return t}function mh(e,t,r,s,i,a,l,o,c){return e=xo(r,s,!0,e,i,a,l,o,c),e.context=fh(null),r=e.current,s=Be(),i=Qn(r),a=Tn(s,i),a.callback=t??null,Wn(r,a,i),e.current.lanes=i,as(e,i,s),Qe(e,s),e}function Ii(e,t,r,s){var i=t.current,a=Be(),l=Qn(i);return r=fh(r),t.context===null?t.context=r:t.pendingContext=r,t=Tn(a,l),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=Wn(i,t,l),e!==null&&(mn(e,i,l,a),Vs(e,i,l)),l}function mi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ic(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function yo(e,t){Ic(e,t),(e=e.alternate)&&Ic(e,t)}function vm(){return null}var gh=typeof reportError=="function"?reportError:function(e){console.error(e)};function jo(e){this._internalRoot=e}zi.prototype.render=jo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(U(409));Ii(e,t,null,null)};zi.prototype.unmount=jo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Nt(function(){Ii(null,e,null,null)}),t[_n]=null}};function zi(e){this._internalRoot=e}zi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Wd();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Vn.length&&t!==0&&t<Vn[r].priority;r++);Vn.splice(r,0,e),r===0&&Qd(e)}};function No(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Mi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function zc(){}function xm(e,t,r,s,i){if(i){if(typeof s=="function"){var a=s;s=function(){var h=mi(l);a.call(h)}}var l=mh(t,s,e,0,null,!1,!1,"",zc);return e._reactRootContainer=l,e[_n]=l.current,Kr(e.nodeType===8?e.parentNode:e),Nt(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof s=="function"){var o=s;s=function(){var h=mi(c);o.call(h)}}var c=xo(e,0,!1,null,null,!1,!1,"",zc);return e._reactRootContainer=c,e[_n]=c.current,Kr(e.nodeType===8?e.parentNode:e),Nt(function(){Ii(t,c,r,s)}),c}function Vi(e,t,r,s,i){var a=r._reactRootContainer;if(a){var l=a;if(typeof i=="function"){var o=i;i=function(){var c=mi(l);o.call(c)}}Ii(t,l,e,i)}else l=xm(r,t,e,i,s);return mi(l)}Ud=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=wr(t.pendingLanes);r!==0&&(Fl(t,r|1),Qe(t,ye()),!(te&6)&&(ar=ye()+500,rt()))}break;case 13:Nt(function(){var s=En(e,1);if(s!==null){var i=Be();mn(s,e,1,i)}}),yo(e,1)}};Dl=function(e){if(e.tag===13){var t=En(e,134217728);if(t!==null){var r=Be();mn(t,e,134217728,r)}yo(e,134217728)}};Kd=function(e){if(e.tag===13){var t=Qn(e),r=En(e,t);if(r!==null){var s=Be();mn(r,e,t,s)}yo(e,t)}};Wd=function(){return ie};Gd=function(e,t){var r=ie;try{return ie=e,t()}finally{ie=r}};Ia=function(e,t,r){switch(t){case"input":if(Ta(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var s=r[t];if(s!==e&&s.form===e.form){var i=Ti(s);if(!i)throw Error(U(90));Sd(s),Ta(s,i)}}}break;case"textarea":Td(e,r);break;case"select":t=r.value,t!=null&&Wt(e,!!r.multiple,t,!1)}};Id=fo;zd=Nt;var ym={usingClientEntryPoint:!1,Events:[os,It,Ti,Rd,Pd,fo]},jr={findFiberByHostInstance:ct,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jm={bundleType:jr.bundleType,version:jr.version,rendererPackageName:jr.rendererPackageName,rendererConfig:jr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ad(e),e===null?null:e.stateNode},findFiberByHostInstance:jr.findFiberByHostInstance||vm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _s=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_s.isDisabled&&_s.supportsFiber)try{wi=_s.inject(jm),jn=_s}catch{}}nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ym;nn.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!No(t))throw Error(U(200));return gm(e,t,null,r)};nn.createRoot=function(e,t){if(!No(e))throw Error(U(299));var r=!1,s="",i=gh;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=xo(e,1,!1,null,null,r,!1,s,i),e[_n]=t.current,Kr(e.nodeType===8?e.parentNode:e),new jo(t)};nn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(U(188)):(e=Object.keys(e).join(","),Error(U(268,e)));return e=Ad(t),e=e===null?null:e.stateNode,e};nn.flushSync=function(e){return Nt(e)};nn.hydrate=function(e,t,r){if(!Mi(t))throw Error(U(200));return Vi(null,e,t,!0,r)};nn.hydrateRoot=function(e,t,r){if(!No(e))throw Error(U(405));var s=r!=null&&r.hydratedSources||null,i=!1,a="",l=gh;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),t=mh(t,null,e,1,r??null,i,!1,a,l),e[_n]=t.current,Kr(e),s)for(e=0;e<s.length;e++)r=s[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new zi(t)};nn.render=function(e,t,r){if(!Mi(t))throw Error(U(200));return Vi(null,e,t,!1,r)};nn.unmountComponentAtNode=function(e){if(!Mi(e))throw Error(U(40));return e._reactRootContainer?(Nt(function(){Vi(null,null,e,!1,function(){e._reactRootContainer=null,e[_n]=null})}),!0):!1};nn.unstable_batchedUpdates=fo;nn.unstable_renderSubtreeIntoContainer=function(e,t,r,s){if(!Mi(r))throw Error(U(200));if(e==null||e._reactInternals===void 0)throw Error(U(38));return Vi(e,t,r,!1,s)};nn.version="18.3.1-next-f1338f8080-20240426";function vh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vh)}catch(e){console.error(e)}}vh(),vd.exports=nn;var Nm=vd.exports,Mc=Nm;ja.createRoot=Mc.createRoot,ja.hydrateRoot=Mc.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ns(){return ns=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},ns.apply(this,arguments)}var $n;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})($n||($n={}));const Vc="popstate";function km(e){e===void 0&&(e={});function t(s,i){let{pathname:a,search:l,hash:o}=s.location;return pl("",{pathname:a,search:l,hash:o},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function r(s,i){return typeof i=="string"?i:gi(i)}return bm(t,r,null,e)}function Ne(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ko(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function wm(){return Math.random().toString(36).substr(2,8)}function Ac(e,t){return{usr:e.state,key:e.key,idx:t}}function pl(e,t,r,s){return r===void 0&&(r=null),ns({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?dr(t):t,{state:r,key:t&&t.key||s||wm()})}function gi(e){let{pathname:t="/",search:r="",hash:s=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),s&&s!=="#"&&(t+=s.charAt(0)==="#"?s:"#"+s),t}function dr(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let s=e.indexOf("?");s>=0&&(t.search=e.substr(s),e=e.substr(0,s)),e&&(t.pathname=e)}return t}function bm(e,t,r,s){s===void 0&&(s={});let{window:i=document.defaultView,v5Compat:a=!1}=s,l=i.history,o=$n.Pop,c=null,h=d();h==null&&(h=0,l.replaceState(ns({},l.state,{idx:h}),""));function d(){return(l.state||{idx:null}).idx}function p(){o=$n.Pop;let j=d(),f=j==null?null:j-h;h=j,c&&c({action:o,location:k.location,delta:f})}function m(j,f){o=$n.Push;let g=pl(k.location,j,f);h=d()+1;let v=Ac(g,h),E=k.createHref(g);try{l.pushState(v,"",E)}catch(y){if(y instanceof DOMException&&y.name==="DataCloneError")throw y;i.location.assign(E)}a&&c&&c({action:o,location:k.location,delta:1})}function b(j,f){o=$n.Replace;let g=pl(k.location,j,f);h=d();let v=Ac(g,h),E=k.createHref(g);l.replaceState(v,"",E),a&&c&&c({action:o,location:k.location,delta:0})}function w(j){let f=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof j=="string"?j:gi(j);return g=g.replace(/ $/,"%20"),Ne(f,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,f)}let k={get action(){return o},get location(){return e(i,l)},listen(j){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Vc,p),c=j,()=>{i.removeEventListener(Vc,p),c=null}},createHref(j){return t(i,j)},createURL:w,encodeLocation(j){let f=w(j);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:m,replace:b,go(j){return l.go(j)}};return k}var Fc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Fc||(Fc={}));function Sm(e,t,r){return r===void 0&&(r="/"),Cm(e,t,r)}function Cm(e,t,r,s){let i=typeof t=="string"?dr(t):t,a=wo(i.pathname||"/",r);if(a==null)return null;let l=xh(e);Tm(l);let o=null;for(let c=0;o==null&&c<l.length;++c){let h=Fm(a);o=Mm(l[c],h)}return o}function xh(e,t,r,s){t===void 0&&(t=[]),r===void 0&&(r=[]),s===void 0&&(s="");let i=(a,l,o)=>{let c={relativePath:o===void 0?a.path||"":o,caseSensitive:a.caseSensitive===!0,childrenIndex:l,route:a};c.relativePath.startsWith("/")&&(Ne(c.relativePath.startsWith(s),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(s.length));let h=Yn([s,c.relativePath]),d=r.concat(c);a.children&&a.children.length>0&&(Ne(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),xh(a.children,t,d,h)),!(a.path==null&&!a.index)&&t.push({path:h,score:Im(h,a.index),routesMeta:d})};return e.forEach((a,l)=>{var o;if(a.path===""||!((o=a.path)!=null&&o.includes("?")))i(a,l);else for(let c of yh(a.path))i(a,l,c)}),t}function yh(e){let t=e.split("/");if(t.length===0)return[];let[r,...s]=t,i=r.endsWith("?"),a=r.replace(/\?$/,"");if(s.length===0)return i?[a,""]:[a];let l=yh(s.join("/")),o=[];return o.push(...l.map(c=>c===""?a:[a,c].join("/"))),i&&o.push(...l),o.map(c=>e.startsWith("/")&&c===""?"/":c)}function Tm(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:zm(t.routesMeta.map(s=>s.childrenIndex),r.routesMeta.map(s=>s.childrenIndex)))}const Lm=/^:[\w-]+$/,_m=3,Em=2,Om=1,Rm=10,Pm=-2,Dc=e=>e==="*";function Im(e,t){let r=e.split("/"),s=r.length;return r.some(Dc)&&(s+=Pm),t&&(s+=Em),r.filter(i=>!Dc(i)).reduce((i,a)=>i+(Lm.test(a)?_m:a===""?Om:Rm),s)}function zm(e,t){return e.length===t.length&&e.slice(0,-1).every((s,i)=>s===t[i])?e[e.length-1]-t[t.length-1]:0}function Mm(e,t,r){let{routesMeta:s}=e,i={},a="/",l=[];for(let o=0;o<s.length;++o){let c=s[o],h=o===s.length-1,d=a==="/"?t:t.slice(a.length)||"/",p=Vm({path:c.relativePath,caseSensitive:c.caseSensitive,end:h},d),m=c.route;if(!p)return null;Object.assign(i,p.params),l.push({params:i,pathname:Yn([a,p.pathname]),pathnameBase:qm(Yn([a,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(a=Yn([a,p.pathnameBase]))}return l}function Vm(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,s]=Am(e.path,e.caseSensitive,e.end),i=t.match(r);if(!i)return null;let a=i[0],l=a.replace(/(.)\/+$/,"$1"),o=i.slice(1);return{params:s.reduce((h,d,p)=>{let{paramName:m,isOptional:b}=d;if(m==="*"){let k=o[p]||"";l=a.slice(0,a.length-k.length).replace(/(.)\/+$/,"$1")}const w=o[p];return b&&!w?h[m]=void 0:h[m]=(w||"").replace(/%2F/g,"/"),h},{}),pathname:a,pathnameBase:l,pattern:e}}function Am(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),ko(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let s=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,o,c)=>(s.push({paramName:o,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(s.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),s]}function Fm(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ko(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function wo(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,s=e.charAt(r);return s&&s!=="/"?null:e.slice(r)||"/"}const Dm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$m=e=>Dm.test(e);function Bm(e,t){t===void 0&&(t="/");let{pathname:r,search:s="",hash:i=""}=typeof e=="string"?dr(e):e,a;if(r)if($m(r))a=r;else{if(r.includes("//")){let l=r;r=r.replace(/\/\/+/g,"/"),ko(!1,"Pathnames cannot have embedded double slashes - normalizing "+(l+" -> "+r))}r.startsWith("/")?a=$c(r.substring(1),"/"):a=$c(r,t)}else a=t;return{pathname:a,search:Um(s),hash:Km(i)}}function $c(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function ha(e,t,r,s){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Hm(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function jh(e,t){let r=Hm(e);return t?r.map((s,i)=>i===r.length-1?s.pathname:s.pathnameBase):r.map(s=>s.pathnameBase)}function Nh(e,t,r,s){s===void 0&&(s=!1);let i;typeof e=="string"?i=dr(e):(i=ns({},e),Ne(!i.pathname||!i.pathname.includes("?"),ha("?","pathname","search",i)),Ne(!i.pathname||!i.pathname.includes("#"),ha("#","pathname","hash",i)),Ne(!i.search||!i.search.includes("#"),ha("#","search","hash",i)));let a=e===""||i.pathname==="",l=a?"/":i.pathname,o;if(l==null)o=r;else{let p=t.length-1;if(!s&&l.startsWith("..")){let m=l.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}o=p>=0?t[p]:"/"}let c=Bm(i,o),h=l&&l!=="/"&&l.endsWith("/"),d=(a||l===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(h||d)&&(c.pathname+="/"),c}const Yn=e=>e.join("/").replace(/\/\/+/g,"/"),qm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Um=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Km=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Wm(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const kh=["post","put","patch","delete"];new Set(kh);const Gm=["get",...kh];new Set(Gm);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ts(){return ts=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},ts.apply(this,arguments)}const bo=u.createContext(null),Qm=u.createContext(null),bt=u.createContext(null),Ai=u.createContext(null),st=u.createContext({outlet:null,matches:[],isDataRoute:!1}),wh=u.createContext(null);function Xm(e,t){let{relative:r}=t===void 0?{}:t;ds()||Ne(!1);let{basename:s,navigator:i}=u.useContext(bt),{hash:a,pathname:l,search:o}=Ch(e,{relative:r}),c=l;return s!=="/"&&(c=l==="/"?s:Yn([s,l])),i.createHref({pathname:c,search:o,hash:a})}function ds(){return u.useContext(Ai)!=null}function us(){return ds()||Ne(!1),u.useContext(Ai).location}function bh(e){u.useContext(bt).static||u.useLayoutEffect(e)}function Sh(){let{isDataRoute:e}=u.useContext(st);return e?dg():Ym()}function Ym(){ds()||Ne(!1);let e=u.useContext(bo),{basename:t,future:r,navigator:s}=u.useContext(bt),{matches:i}=u.useContext(st),{pathname:a}=us(),l=JSON.stringify(jh(i,r.v7_relativeSplatPath)),o=u.useRef(!1);return bh(()=>{o.current=!0}),u.useCallback(function(h,d){if(d===void 0&&(d={}),!o.current)return;if(typeof h=="number"){s.go(h);return}let p=Nh(h,JSON.parse(l),a,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Yn([t,p.pathname])),(d.replace?s.replace:s.push)(p,d.state,d)},[t,s,l,a,e])}function Jm(){let{matches:e}=u.useContext(st),t=e[e.length-1];return t?t.params:{}}function Ch(e,t){let{relative:r}=t===void 0?{}:t,{future:s}=u.useContext(bt),{matches:i}=u.useContext(st),{pathname:a}=us(),l=JSON.stringify(jh(i,s.v7_relativeSplatPath));return u.useMemo(()=>Nh(e,JSON.parse(l),a,r==="path"),[e,l,a,r])}function Zm(e,t){return eg(e,t)}function eg(e,t,r,s){ds()||Ne(!1);let{navigator:i}=u.useContext(bt),{matches:a}=u.useContext(st),l=a[a.length-1],o=l?l.params:{};l&&l.pathname;let c=l?l.pathnameBase:"/";l&&l.route;let h=us(),d;if(t){var p;let j=typeof t=="string"?dr(t):t;c==="/"||(p=j.pathname)!=null&&p.startsWith(c)||Ne(!1),d=j}else d=h;let m=d.pathname||"/",b=m;if(c!=="/"){let j=c.replace(/^\//,"").split("/");b="/"+m.replace(/^\//,"").split("/").slice(j.length).join("/")}let w=Sm(e,{pathname:b}),k=ig(w&&w.map(j=>Object.assign({},j,{params:Object.assign({},o,j.params),pathname:Yn([c,i.encodeLocation?i.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?c:Yn([c,i.encodeLocation?i.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),a,r,s);return t&&k?u.createElement(Ai.Provider,{value:{location:ts({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:$n.Pop}},k):k}function ng(){let e=cg(),t=Wm(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return u.createElement(u.Fragment,null,u.createElement("h2",null,"Unexpected Application Error!"),u.createElement("h3",{style:{fontStyle:"italic"}},t),r?u.createElement("pre",{style:i},r):null,null)}const tg=u.createElement(ng,null);class rg extends u.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?u.createElement(st.Provider,{value:this.props.routeContext},u.createElement(wh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function sg(e){let{routeContext:t,match:r,children:s}=e,i=u.useContext(bo);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),u.createElement(st.Provider,{value:t},s)}function ig(e,t,r,s){var i;if(t===void 0&&(t=[]),r===void 0&&(r=null),s===void 0&&(s=null),e==null){var a;if(!r)return null;if(r.errors)e=r.matches;else if((a=s)!=null&&a.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let l=e,o=(i=r)==null?void 0:i.errors;if(o!=null){let d=l.findIndex(p=>p.route.id&&(o==null?void 0:o[p.route.id])!==void 0);d>=0||Ne(!1),l=l.slice(0,Math.min(l.length,d+1))}let c=!1,h=-1;if(r&&s&&s.v7_partialHydration)for(let d=0;d<l.length;d++){let p=l[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(h=d),p.route.id){let{loaderData:m,errors:b}=r,w=p.route.loader&&m[p.route.id]===void 0&&(!b||b[p.route.id]===void 0);if(p.route.lazy||w){c=!0,h>=0?l=l.slice(0,h+1):l=[l[0]];break}}}return l.reduceRight((d,p,m)=>{let b,w=!1,k=null,j=null;r&&(b=o&&p.route.id?o[p.route.id]:void 0,k=p.route.errorElement||tg,c&&(h<0&&m===0?(ug("route-fallback"),w=!0,j=null):h===m&&(w=!0,j=p.route.hydrateFallbackElement||null)));let f=t.concat(l.slice(0,m+1)),g=()=>{let v;return b?v=k:w?v=j:p.route.Component?v=u.createElement(p.route.Component,null):p.route.element?v=p.route.element:v=d,u.createElement(sg,{match:p,routeContext:{outlet:d,matches:f,isDataRoute:r!=null},children:v})};return r&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?u.createElement(rg,{location:r.location,revalidation:r.revalidation,component:k,error:b,children:g(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):g()},null)}var Th=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Th||{}),Lh=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Lh||{});function ag(e){let t=u.useContext(bo);return t||Ne(!1),t}function lg(e){let t=u.useContext(Qm);return t||Ne(!1),t}function og(e){let t=u.useContext(st);return t||Ne(!1),t}function _h(e){let t=og(),r=t.matches[t.matches.length-1];return r.route.id||Ne(!1),r.route.id}function cg(){var e;let t=u.useContext(wh),r=lg(),s=_h();return t!==void 0?t:(e=r.errors)==null?void 0:e[s]}function dg(){let{router:e}=ag(Th.UseNavigateStable),t=_h(Lh.UseNavigateStable),r=u.useRef(!1);return bh(()=>{r.current=!0}),u.useCallback(function(i,a){a===void 0&&(a={}),r.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ts({fromRouteId:t},a)))},[e,t])}const Bc={};function ug(e,t,r){Bc[e]||(Bc[e]=!0)}function hg(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function re(e){Ne(!1)}function pg(e){let{basename:t="/",children:r=null,location:s,navigationType:i=$n.Pop,navigator:a,static:l=!1,future:o}=e;ds()&&Ne(!1);let c=t.replace(/^\/*/,"/"),h=u.useMemo(()=>({basename:c,navigator:a,static:l,future:ts({v7_relativeSplatPath:!1},o)}),[c,o,a,l]);typeof s=="string"&&(s=dr(s));let{pathname:d="/",search:p="",hash:m="",state:b=null,key:w="default"}=s,k=u.useMemo(()=>{let j=wo(d,c);return j==null?null:{location:{pathname:j,search:p,hash:m,state:b,key:w},navigationType:i}},[c,d,p,m,b,w,i]);return k==null?null:u.createElement(bt.Provider,{value:h},u.createElement(Ai.Provider,{children:r,value:k}))}function fg(e){let{children:t,location:r}=e;return Zm(fl(t),r)}new Promise(()=>{});function fl(e,t){t===void 0&&(t=[]);let r=[];return u.Children.forEach(e,(s,i)=>{if(!u.isValidElement(s))return;let a=[...t,i];if(s.type===u.Fragment){r.push.apply(r,fl(s.props.children,a));return}s.type!==re&&Ne(!1),!s.props.index||!s.props.children||Ne(!1);let l={id:s.props.id||a.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(l.children=fl(s.props.children,a)),r.push(l)}),r}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ml(){return ml=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},ml.apply(this,arguments)}function mg(e,t){if(e==null)return{};var r={},s=Object.keys(e),i,a;for(a=0;a<s.length;a++)i=s[a],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function gg(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function vg(e,t){return e.button===0&&(!t||t==="_self")&&!gg(e)}const xg=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],yg="6";try{window.__reactRouterVersion=yg}catch{}const jg="startTransition",Hc=cp[jg];function Ng(e){let{basename:t,children:r,future:s,window:i}=e,a=u.useRef();a.current==null&&(a.current=km({window:i,v5Compat:!0}));let l=a.current,[o,c]=u.useState({action:l.action,location:l.location}),{v7_startTransition:h}=s||{},d=u.useCallback(p=>{h&&Hc?Hc(()=>c(p)):c(p)},[c,h]);return u.useLayoutEffect(()=>l.listen(d),[l,d]),u.useEffect(()=>hg(s),[s]),u.createElement(pg,{basename:t,children:r,location:o.location,navigationType:o.action,navigator:l,future:s})}const kg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",wg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Le=u.forwardRef(function(t,r){let{onClick:s,relative:i,reloadDocument:a,replace:l,state:o,target:c,to:h,preventScrollReset:d,viewTransition:p}=t,m=mg(t,xg),{basename:b}=u.useContext(bt),w,k=!1;if(typeof h=="string"&&wg.test(h)&&(w=h,kg))try{let v=new URL(window.location.href),E=h.startsWith("//")?new URL(v.protocol+h):new URL(h),y=wo(E.pathname,b);E.origin===v.origin&&y!=null?h=y+E.search+E.hash:k=!0}catch{}let j=Xm(h,{relative:i}),f=bg(h,{replace:l,state:o,target:c,preventScrollReset:d,relative:i,viewTransition:p});function g(v){s&&s(v),v.defaultPrevented||f(v)}return u.createElement("a",ml({},m,{href:w||j,onClick:k||a?s:g,ref:r,target:c}))});var qc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(qc||(qc={}));var Uc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Uc||(Uc={}));function bg(e,t){let{target:r,replace:s,state:i,preventScrollReset:a,relative:l,viewTransition:o}=t===void 0?{}:t,c=Sh(),h=us(),d=Ch(e,{relative:l});return u.useCallback(p=>{if(vg(p,r)){p.preventDefault();let m=s!==void 0?s:gi(h)===gi(d);c(e,{replace:m,state:i,preventScrollReset:a,relative:l,viewTransition:o})}},[h,c,d,s,i,r,e,a,l,o])}/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Sg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Q=(e,t)=>{const r=u.forwardRef(({color:s="currentColor",size:i=24,strokeWidth:a=2,absoluteStrokeWidth:l,className:o="",children:c,...h},d)=>u.createElement("svg",{ref:d,...Sg,width:i,height:i,stroke:s,strokeWidth:l?Number(a)*24/Number(i):a,className:["lucide",`lucide-${Cg(e)}`,o].join(" "),...h},[...t.map(([p,m])=>u.createElement(p,m)),...Array.isArray(c)?c:[c]]));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kn=Q("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=Q("ArrowDownNarrowWide",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h4",key:"6d7r33"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h10",key:"1438ji"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=Q("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kc=Q("ArrowRightLeft",[["path",{d:"m16 3 4 4-4 4",key:"1x1c3m"}],["path",{d:"M20 7H4",key:"zbl0bi"}],["path",{d:"m8 21-4-4 4-4",key:"h9nckh"}],["path",{d:"M4 17h16",key:"g4d7ey"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=Q("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=Q("ArrowUpDown",[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=Q("ArrowUpNarrowWide",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M11 12h4",key:"q8tih4"}],["path",{d:"M11 16h7",key:"uosisv"}],["path",{d:"M11 20h10",key:"jvxblo"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=Q("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wc=Q("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vi=Q("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=Q("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=Q("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=Q("Brain",[["path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",key:"1mhkh5"}],["path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",key:"1d6s00"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=Q("Bug",[["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",key:"xs1cw7"}],["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4",key:"k3fwyw"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ie=Q("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=Q("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=Q("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qs=Q("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=Q("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=Q("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gl=Q("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Us=Q("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=Q("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=Q("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xi=Q("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pa=Q("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gc=Q("FileCode",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zt=Q("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qc=Q("GitFork",[["circle",{cx:"12",cy:"18",r:"3",key:"1mpf1b"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9",key:"1uq4wg"}],["path",{d:"M12 12v3",key:"158kv8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=Q("GitGraph",[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M5 9v6",key:"158jrl"}],["circle",{cx:"5",cy:"18",r:"3",key:"104gr9"}],["path",{d:"M12 3v18",key:"108xh3"}],["circle",{cx:"19",cy:"6",r:"3",key:"108a5v"}],["path",{d:"M16 15.7A9 9 0 0 0 19 9",key:"1e3vqb"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const So=Q("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g=Q("GraduationCap",[["path",{d:"M22 10v6M2 10l10-5 10 5-10 5z",key:"1ef52a"}],["path",{d:"M6 12v5c3 3 9 3 12 0v-5",key:"1f75yj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=Q("Grid3x3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mr=Q("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=Q("HeartHandshake",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",key:"12sd6o"}],["path",{d:"m18 15-2-2",key:"60u0ii"}],["path",{d:"m15 18-2-2",key:"6p76be"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ce=Q("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=Q("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bn=Q("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gt=Q("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=Q("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=Q("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rs=Q("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Co=Q("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=Q("ListOrdered",[["line",{x1:"10",x2:"21",y1:"6",y2:"6",key:"76qw6h"}],["line",{x1:"10",x2:"21",y1:"12",y2:"12",key:"16nom4"}],["line",{x1:"10",x2:"21",y1:"18",y2:"18",key:"u3jurt"}],["path",{d:"M4 6h1v4",key:"cnovpq"}],["path",{d:"M4 10h2",key:"16xx2s"}],["path",{d:"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1",key:"m9a95d"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=Q("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=Q("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xc=Q("Map",[["polygon",{points:"3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21",key:"ok2ie8"}],["line",{x1:"9",x2:"9",y1:"3",y2:"18",key:"w34qz5"}],["line",{x1:"15",x2:"15",y1:"6",y2:"21",key:"volv9a"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=Q("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg=Q("MousePointer2",[["path",{d:"m4 4 7.07 17 2.51-7.39L21 11.07z",key:"1vqm48"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=Q("MoveUp",[["path",{d:"M8 6L12 2L16 6",key:"1yvkyx"}],["path",{d:"M12 2V22",key:"r89rzk"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vl=Q("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const St=Q("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=Q("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yi=Q("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=Q("Puzzle",[["path",{d:"M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z",key:"i0oyt7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg=Q("Pyramid",[["path",{d:"M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z",key:"aenxs0"}],["path",{d:"M12 2v20",key:"t6zp3m"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=Q("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const it=Q("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg=Q("Scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ur=Q("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ct=Q("SkipForward",[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=Q("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=Q("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xl=Q("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=Q("TreeDeciduous",[["path",{d:"M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z",key:"oadzkq"}],["path",{d:"M12 19v3",key:"npa21l"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=Q("TreePine",[["path",{d:"m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z",key:"cpyugq"}],["path",{d:"M12 22v-3",key:"kmzjlo"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sr=Q("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=Q("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yc=Q("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=Q("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const To=Q("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function iv(){const e=us(),[t,r]=u.useState(!1),s=e.pathname==="/"?"home":e.pathname.replace("/","").replace("_",""),i=()=>r(!t),a=()=>r(!1);u.useEffect(()=>{const o=()=>{window.innerWidth>1024&&r(!1)};return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[]),u.useEffect(()=>{t?document.body.style.overflow="hidden":document.body.style.overflow=""},[t]);const l=({to:o,icon:c,children:h,pageName:d})=>{const p=s===d;return n.jsxs(Le,{to:o,className:`nav-item ${p?"active":""}`,onClick:a,children:[n.jsx(c,{}),n.jsx("span",{children:h})]})};return n.jsxs(n.Fragment,{children:[n.jsx("button",{className:"mobile-menu-toggle",id:"mobileMenuToggle","aria-label":"Toggle menu",onClick:i,children:t?n.jsx(Ih,{}):n.jsx(Gg,{})}),n.jsx("div",{className:`sidebar-overlay ${t?"active":""}`,onClick:a}),n.jsxs("aside",{className:`sidebar ${t?"active":""}`,id:"sidebar",children:[n.jsx("div",{className:"sidebar-header",children:n.jsxs(Le,{to:"/",className:"logo-wrapper",onClick:a,children:[n.jsx("img",{src:"/logo.svg",alt:"DSA Visualizer Logo",className:"logo-icon"}),n.jsx("span",{className:"logo-text",children:"DSA Visualizer"})]})}),n.jsxs("nav",{className:"sidebar-nav",children:[n.jsxs("div",{className:"nav-section",children:[n.jsx("div",{className:"nav-section-title",children:"Explore"}),n.jsx(l,{to:"/",icon:qg,pageName:"home",children:"Home"}),n.jsx(l,{to:"/algorithms",icon:gl,pageName:"algorithms",children:"Algorithms"}),n.jsx(l,{to:"/practice",icon:Sr,pageName:"practice",children:"Practice"})]}),n.jsxs("div",{className:"nav-section",children:[n.jsx("div",{className:"nav-section-title",children:"More"}),n.jsx(l,{to:"/contact",icon:Rh,pageName:"contact",children:"Contact"}),n.jsx(l,{to:"/contributions",icon:Hg,pageName:"contributions",children:"Contributions"})]})]}),n.jsxs("div",{className:"sidebar-footer",children:[n.jsxs("div",{className:"social-links-sidebar",children:[n.jsx("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",title:"GitHub",children:n.jsx(So,{})}),n.jsx("a",{href:"https://www.linkedin.com/in/abdullah-mahfouz-5188b1306/",target:"_blank",rel:"noopener noreferrer",title:"LinkedIn",children:n.jsx(Co,{})})]}),n.jsx("p",{className:"copyright",children:"© 2026 Abdullah Mahfouz"})]})]})]})}function av(){return n.jsx("footer",{className:"main-footer",children:n.jsxs("div",{className:"footer-content",children:[n.jsxs("div",{className:"footer-social",children:[n.jsxs("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",className:"footer-link",children:[n.jsx(So,{}),n.jsx("span",{children:"GitHub"})]}),n.jsxs("a",{href:"https://www.linkedin.com/in/abdullah-mahfouz-5188b1306/",target:"_blank",rel:"noopener noreferrer",className:"footer-link",children:[n.jsx(Co,{}),n.jsx("span",{children:"LinkedIn"})]})]}),n.jsx("p",{className:"footer-copyright",children:"© 2026 Abdullah Mahfouz"})]})})}function lv(){const[e,t]=u.useState(0);u.useEffect(()=>{const s=setInterval(()=>{t(i=>(i+1)%4)},3e3);return()=>clearInterval(s)},[]);const r=[{icon:gt,name:"Stack",color:"#6366f1",description:"LIFO Operations"},{icon:Zt,name:"Binary Tree",color:"#10b981",description:"Tree Traversals"},{icon:Mr,name:"Hash Table",color:"#f59e0b",description:"Key-Value Mapping"},{icon:xi,name:"Heap",color:"#ec4899",description:"Priority Queue"}];return n.jsxs(n.Fragment,{children:[n.jsxs("section",{className:"hero-advanced",children:[n.jsxs("div",{className:"hero-bg-effects",children:[n.jsx("div",{className:"gradient-orb orb-1"}),n.jsx("div",{className:"gradient-orb orb-2"}),n.jsx("div",{className:"gradient-orb orb-3"}),n.jsx("div",{className:"grid-overlay"}),n.jsx("div",{className:"noise-overlay"})]}),n.jsxs("div",{className:"hero-content-advanced",children:[n.jsxs("div",{className:"hero-badge-advanced",children:[n.jsx($g,{className:"badge-icon"}),n.jsx("span",{children:"Interactive Learning Platform"})]}),n.jsxs("h1",{className:"hero-title-advanced",children:[n.jsx("span",{className:"title-line",children:"Learn"}),n.jsx("span",{className:"title-line gradient-text-animated",children:"Data Structures"}),n.jsxs("span",{className:"title-line",children:["& ",n.jsx("span",{className:"gradient-text-animated",children:"Algorithms"})]})]}),n.jsx("p",{className:"hero-description-advanced",children:"The complete DSA learning platform. Visualize data structures in real-time, practice coding problems, and master algorithms with step-by-step animations."}),n.jsxs("div",{className:"hero-cta-group",children:[n.jsxs(Le,{to:"/algorithms",className:"btn-glow-primary",children:[n.jsx(pa,{className:"btn-icon-left"}),n.jsx("span",{children:"Explore Visualizers"})]}),n.jsxs(Le,{to:"/practice",className:"btn-glass",children:[n.jsx(Sr,{className:"btn-icon-left"}),n.jsx("span",{children:"Practice Problems"})]})]}),n.jsxs("div",{className:"hero-stats",children:[n.jsxs("div",{className:"stat-item",children:[n.jsx("span",{className:"stat-number",children:"12+"}),n.jsx("span",{className:"stat-label",children:"Visualizers"})]}),n.jsx("div",{className:"stat-divider"}),n.jsxs("div",{className:"stat-item",children:[n.jsx("span",{className:"stat-number",children:"22+"}),n.jsx("span",{className:"stat-label",children:"Practice Problems"})]}),n.jsx("div",{className:"stat-divider"}),n.jsxs("div",{className:"stat-item",children:[n.jsx("span",{className:"stat-number",children:"9"}),n.jsx("span",{className:"stat-label",children:"Topic Categories"})]})]})]}),n.jsxs("div",{className:"hero-showcase",children:[n.jsxs("div",{className:"showcase-window",children:[n.jsxs("div",{className:"window-header",children:[n.jsxs("div",{className:"window-dots",children:[n.jsx("span",{className:"dot red"}),n.jsx("span",{className:"dot yellow"}),n.jsx("span",{className:"dot green"})]}),n.jsxs("span",{className:"window-title",children:[n.jsx(nv,{size:14}),"DSA Visualizer"]})]}),n.jsx("div",{className:"showcase-content",children:r.map((s,i)=>n.jsxs("div",{className:`showcase-card ${i===e?"active":""}`,style:{"--card-color":s.color},children:[n.jsx("div",{className:"showcase-card-icon",children:n.jsx(s.icon,{})}),n.jsxs("div",{className:"showcase-card-info",children:[n.jsx("h4",{children:s.name}),n.jsx("p",{children:s.description})]}),n.jsx(qs,{className:"showcase-arrow"})]},s.name))})]}),n.jsx("div",{className:"floating-element float-1",children:n.jsx(gl,{})}),n.jsx("div",{className:"floating-element float-2",children:n.jsx(Sr,{})}),n.jsx("div",{className:"floating-element float-3",children:n.jsx(Pg,{})})]})]}),n.jsxs("section",{className:"main-features-section",children:[n.jsxs("div",{className:"section-header-advanced",children:[n.jsx("span",{className:"section-tag",children:"What We Offer"}),n.jsx("h2",{children:"Two Ways to Master DSA"}),n.jsx("p",{children:"Combine visual learning with hands-on practice for complete understanding"})]}),n.jsxs("div",{className:"main-features-grid",children:[n.jsxs(Le,{to:"/algorithms",className:"main-feature-card",children:[n.jsx("div",{className:"main-feature-card-bg visualizers"}),n.jsxs("div",{className:"main-feature-content",children:[n.jsx("div",{className:"main-feature-icon",style:{"--feature-color":"#6366f1"},children:n.jsx(pa,{})}),n.jsx("div",{className:"main-feature-badge",children:"12+ Structures"}),n.jsx("h3",{children:"Interactive Visualizers"}),n.jsx("p",{children:"Watch data structures come alive with real-time animations. See exactly how operations like push, pop, insert, and delete work at every step."}),n.jsxs("ul",{className:"main-feature-list",children:[n.jsxs("li",{children:[n.jsx(Ie,{size:16})," Stack, Queue, Linked List"]}),n.jsxs("li",{children:[n.jsx(Ie,{size:16})," Binary Trees, BST, AVL, Heaps"]}),n.jsxs("li",{children:[n.jsx(Ie,{size:16})," Hash Tables with collision handling"]}),n.jsxs("li",{children:[n.jsx(Ie,{size:16})," Graph algorithms (BFS, DFS, Dijkstra)"]})]}),n.jsxs("div",{className:"main-feature-cta",children:[n.jsx("span",{children:"Start Visualizing"}),n.jsx(se,{})]})]})]}),n.jsxs(Le,{to:"/practice",className:"main-feature-card",children:[n.jsx("div",{className:"main-feature-card-bg practice"}),n.jsxs("div",{className:"main-feature-content",children:[n.jsx("div",{className:"main-feature-icon",style:{"--feature-color":"#10b981"},children:n.jsx(Sr,{})}),n.jsx("div",{className:"main-feature-badge",children:"22+ Problems"}),n.jsx("h3",{children:"Practice Problems"}),n.jsx("p",{children:"Solve curated coding challenges organized in a structured roadmap. Write code, run tests, and track your progress as you level up your skills."}),n.jsxs("ul",{className:"main-feature-list",children:[n.jsxs("li",{children:[n.jsx(Ie,{size:16})," NeetCode-style learning roadmap"]}),n.jsxs("li",{children:[n.jsx(Ie,{size:16})," Built-in code editor with syntax highlighting"]}),n.jsxs("li",{children:[n.jsx(Ie,{size:16})," Instant test case feedback"]}),n.jsxs("li",{children:[n.jsx(Ie,{size:16})," Hints and solution guidance"]})]}),n.jsxs("div",{className:"main-feature-cta",children:[n.jsx("span",{children:"Start Practicing"}),n.jsx(se,{})]})]})]})]})]}),n.jsxs("section",{className:"ds-showcase-section",children:[n.jsxs("div",{className:"section-header-advanced",children:[n.jsx("span",{className:"section-tag",children:"Visualizers"}),n.jsx("h2",{children:"Interactive Data Structures"}),n.jsx("p",{children:"Click to visualize, interact, and truly understand how each structure works"})]}),n.jsxs("div",{className:"ds-showcase-grid",children:[n.jsxs(Le,{to:"/stack",className:"ds-card",style:{"--ds-color":"#6366f1"},children:[n.jsx("div",{className:"ds-card-glow"}),n.jsxs("div",{className:"ds-card-content",children:[n.jsx("div",{className:"ds-icon",children:n.jsx(gt,{})}),n.jsx("h3",{children:"Stack"}),n.jsx("p",{children:"Last In, First Out"}),n.jsxs("div",{className:"ds-card-footer",children:[n.jsx("span",{className:"ds-complexity",children:"O(1) push/pop"}),n.jsx(se,{className:"ds-arrow"})]})]})]}),n.jsxs(Le,{to:"/queue",className:"ds-card",style:{"--ds-color":"#10b981"},children:[n.jsx("div",{className:"ds-card-glow"}),n.jsxs("div",{className:"ds-card-content",children:[n.jsx("div",{className:"ds-icon",children:n.jsx(Zt,{})}),n.jsx("h3",{children:"Queue"}),n.jsx("p",{children:"First In, First Out"}),n.jsxs("div",{className:"ds-card-footer",children:[n.jsx("span",{className:"ds-complexity",children:"O(1) enqueue"}),n.jsx(se,{className:"ds-arrow"})]})]})]}),n.jsxs(Le,{to:"/linkedlist",className:"ds-card",style:{"--ds-color":"#f59e0b"},children:[n.jsx("div",{className:"ds-card-glow"}),n.jsxs("div",{className:"ds-card-content",children:[n.jsx("div",{className:"ds-icon",children:n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("circle",{cx:"5",cy:"12",r:"3"}),n.jsx("circle",{cx:"19",cy:"12",r:"3"}),n.jsx("line",{x1:"8",y1:"12",x2:"16",y2:"12"})]})}),n.jsx("h3",{children:"Linked List"}),n.jsx("p",{children:"Dynamic Node Chain"}),n.jsxs("div",{className:"ds-card-footer",children:[n.jsx("span",{className:"ds-complexity",children:"O(1) insert"}),n.jsx(se,{className:"ds-arrow"})]})]})]}),n.jsxs(Le,{to:"/bst",className:"ds-card",style:{"--ds-color":"#ec4899"},children:[n.jsx("div",{className:"ds-card-glow"}),n.jsxs("div",{className:"ds-card-content",children:[n.jsx("div",{className:"ds-icon",children:n.jsx(rv,{})}),n.jsx("h3",{children:"Binary Search Tree"}),n.jsx("p",{children:"Ordered Tree Structure"}),n.jsxs("div",{className:"ds-card-footer",children:[n.jsx("span",{className:"ds-complexity",children:"O(log n) search"}),n.jsx(se,{className:"ds-arrow"})]})]})]}),n.jsxs(Le,{to:"/hashtable_chaining",className:"ds-card",style:{"--ds-color":"#8b5cf6"},children:[n.jsx("div",{className:"ds-card-glow"}),n.jsxs("div",{className:"ds-card-content",children:[n.jsx("div",{className:"ds-icon",children:n.jsx(Mr,{})}),n.jsx("h3",{children:"Hash Table"}),n.jsx("p",{children:"Key-Value Mapping"}),n.jsxs("div",{className:"ds-card-footer",children:[n.jsx("span",{className:"ds-complexity",children:"O(1) average"}),n.jsx(se,{className:"ds-arrow"})]})]})]}),n.jsxs(Le,{to:"/dijkstra",className:"ds-card",style:{"--ds-color":"#06b6d4"},children:[n.jsx("div",{className:"ds-card-glow"}),n.jsxs("div",{className:"ds-card-content",children:[n.jsx("div",{className:"ds-icon",children:n.jsx(vl,{})}),n.jsx("h3",{children:"Graph Algorithms"}),n.jsx("p",{children:"BFS, DFS, Dijkstra"}),n.jsxs("div",{className:"ds-card-footer",children:[n.jsx("span",{className:"ds-complexity",children:"Pathfinding"}),n.jsx(se,{className:"ds-arrow"})]})]})]})]}),n.jsx("div",{className:"showcase-cta",children:n.jsxs(Le,{to:"/algorithms",className:"btn-outline-glow",children:[n.jsx("span",{children:"View All Visualizers"}),n.jsx(se,{})]})})]}),n.jsxs("section",{className:"practice-preview-section",children:[n.jsxs("div",{className:"section-header-advanced",children:[n.jsx("span",{className:"section-tag",children:"Practice"}),n.jsx("h2",{children:"Structured Learning Roadmap"}),n.jsx("p",{children:"Follow a proven path to master DSA concepts step by step"})]}),n.jsxs("div",{className:"roadmap-preview-grid",children:[n.jsxs("div",{className:"roadmap-preview-item",style:{"--item-color":"#10b981"},children:[n.jsx("div",{className:"roadmap-preview-icon",children:n.jsx(ev,{size:20})}),n.jsxs("div",{className:"roadmap-preview-info",children:[n.jsx("h4",{children:"Arrays & Hashing"}),n.jsx("span",{children:"3 problems"})]})]}),n.jsxs("div",{className:"roadmap-preview-item",style:{"--item-color":"#3b82f6"},children:[n.jsx("div",{className:"roadmap-preview-icon",children:n.jsx(Fg,{size:20})}),n.jsxs("div",{className:"roadmap-preview-info",children:[n.jsx("h4",{children:"Two Pointers"}),n.jsx("span",{children:"2 problems"})]})]}),n.jsxs("div",{className:"roadmap-preview-item",style:{"--item-color":"#8b5cf6"},children:[n.jsx("div",{className:"roadmap-preview-icon",children:n.jsx(gt,{size:20})}),n.jsxs("div",{className:"roadmap-preview-info",children:[n.jsx("h4",{children:"Stack"}),n.jsx("span",{children:"2 problems"})]})]}),n.jsxs("div",{className:"roadmap-preview-item",style:{"--item-color":"#f59e0b"},children:[n.jsx("div",{className:"roadmap-preview-icon",children:n.jsx(Wc,{size:20})}),n.jsxs("div",{className:"roadmap-preview-info",children:[n.jsx("h4",{children:"Binary Search"}),n.jsx("span",{children:"2 problems"})]})]}),n.jsxs("div",{className:"roadmap-preview-item",style:{"--item-color":"#ec4899"},children:[n.jsx("div",{className:"roadmap-preview-icon",children:n.jsx(Zt,{size:20})}),n.jsxs("div",{className:"roadmap-preview-info",children:[n.jsx("h4",{children:"Trees"}),n.jsx("span",{children:"3 problems"})]})]}),n.jsxs("div",{className:"roadmap-preview-item",style:{"--item-color":"#6366f1"},children:[n.jsx("div",{className:"roadmap-preview-icon",children:n.jsx(vl,{size:20})}),n.jsxs("div",{className:"roadmap-preview-info",children:[n.jsx("h4",{children:"Graphs"}),n.jsx("span",{children:"3 problems"})]})]}),n.jsxs("div",{className:"roadmap-preview-item",style:{"--item-color":"#ef4444"},children:[n.jsx("div",{className:"roadmap-preview-icon",children:n.jsx(Ig,{size:20})}),n.jsxs("div",{className:"roadmap-preview-info",children:[n.jsx("h4",{children:"Dynamic Programming"}),n.jsx("span",{children:"2 problems"})]})]}),n.jsxs("div",{className:"roadmap-preview-item",style:{"--item-color":"#84cc16"},children:[n.jsx("div",{className:"roadmap-preview-icon",children:n.jsx(Wc,{size:20})}),n.jsxs("div",{className:"roadmap-preview-info",children:[n.jsx("h4",{children:"Sorting"}),n.jsx("span",{children:"2 problems"})]})]})]}),n.jsx("div",{className:"showcase-cta",children:n.jsxs(Le,{to:"/practice",className:"btn-glow-primary",children:[n.jsx(Sr,{className:"btn-icon-left"}),n.jsx("span",{children:"Start the Roadmap"})]})})]}),n.jsxs("section",{className:"features-section-advanced",children:[n.jsxs("div",{className:"section-header-advanced",children:[n.jsx("span",{className:"section-tag",children:"Features"}),n.jsx("h2",{children:"Everything You Need"}),n.jsx("p",{children:"Built for visual learners who want to truly understand DSA"})]}),n.jsxs("div",{className:"features-grid-advanced",children:[n.jsxs("div",{className:"feature-card-advanced",children:[n.jsx("div",{className:"feature-card-bg"}),n.jsx("div",{className:"feature-icon-advanced",style:{"--icon-color":"#6366f1"},children:n.jsx(pa,{})}),n.jsx("h3",{children:"Real-Time Visualization"}),n.jsx("p",{children:"Watch data structures come alive with smooth animations that show exactly what happens during each operation."})]}),n.jsxs("div",{className:"feature-card-advanced",children:[n.jsx("div",{className:"feature-card-bg"}),n.jsx("div",{className:"feature-icon-advanced",style:{"--icon-color":"#10b981"},children:n.jsx(gl,{})}),n.jsx("h3",{children:"Built-in Code Editor"}),n.jsx("p",{children:"Write and test your solutions with a full-featured editor supporting Python, JavaScript, C++, and more."})]}),n.jsxs("div",{className:"feature-card-advanced",children:[n.jsx("div",{className:"feature-card-bg"}),n.jsx("div",{className:"feature-icon-advanced",style:{"--icon-color":"#f59e0b"},children:n.jsx(To,{})}),n.jsx("h3",{children:"Instant Feedback"}),n.jsx("p",{children:"Run your code against test cases and get immediate results. See exactly what passed and what failed."})]}),n.jsxs("div",{className:"feature-card-advanced",children:[n.jsx("div",{className:"feature-card-bg"}),n.jsx("div",{className:"feature-icon-advanced",style:{"--icon-color":"#ec4899"},children:n.jsx(vi,{})}),n.jsx("h3",{children:"Structured Learning"}),n.jsx("p",{children:"Follow a curated roadmap that builds your skills progressively from fundamentals to advanced topics."})]})]})]}),n.jsxs("section",{className:"how-it-works-section",children:[n.jsxs("div",{className:"section-header-advanced",children:[n.jsx("span",{className:"section-tag",children:"Get Started"}),n.jsx("h2",{children:"Start Learning in Seconds"}),n.jsx("p",{children:"No signup required. Just pick what you want to learn."})]}),n.jsxs("div",{className:"steps-container",children:[n.jsxs("div",{className:"step-card",children:[n.jsx("div",{className:"step-number",children:"1"}),n.jsx("h3",{children:"Choose Your Path"}),n.jsx("p",{children:"Explore visualizers to understand concepts or practice problems to test your skills"})]}),n.jsx("div",{className:"step-connector"}),n.jsxs("div",{className:"step-card",children:[n.jsx("div",{className:"step-number",children:"2"}),n.jsx("h3",{children:"Learn Interactively"}),n.jsx("p",{children:"Visualize operations step-by-step or solve coding challenges with instant feedback"})]}),n.jsx("div",{className:"step-connector"}),n.jsxs("div",{className:"step-card",children:[n.jsx("div",{className:"step-number",children:"3"}),n.jsx("h3",{children:"Track Progress"}),n.jsx("p",{children:"Complete problems, mark them as solved, and watch your skills grow"})]})]}),n.jsx("div",{className:"final-cta",children:n.jsxs(Le,{to:"/algorithms",className:"btn-glow-large",children:[n.jsx(Ve,{className:"btn-icon-left"}),n.jsx("span",{children:"Start Learning Now"})]})})]})]})}function ov(){const[e,t]=u.useState(null),r=i=>{t(e===i?null:i)},s=[{id:"linear",name:"Linear Data Structures",icon:Kg,description:"Elements stored sequentially where each element has a unique predecessor and successor. These are the building blocks of computer science — simple to implement yet powerful enough to solve complex problems.",color:"#6366f1",items:[{to:"/stack",icon:gt,title:"Stack",description:"LIFO (Last In, First Out) — imagine a stack of plates where you can only add or remove from the top. The most recent item is always accessed first. Push adds to top, Pop removes from top. Both operations are O(1) constant time. Essential for: browser back button (page history), undo/redo in editors, function call management in recursion, parsing expressions like (a+b)*c, and depth-first search algorithms.",available:!0},{to:"/queue",icon:Kc,title:"Queue",description:"FIFO (First In, First Out) — like waiting in line at a coffee shop. The first person to arrive gets served first. Enqueue adds to the back, Dequeue removes from front. Both O(1) operations. Used everywhere: print job scheduling, CPU task management, breadth-first search (BFS) in graphs, handling requests in web servers, and buffering data streams like video playback.",available:!0},{to:"/linkedlist",icon:rs,title:"Linked List",description:"A chain of nodes where each node stores data and a pointer to the next node. Unlike arrays, memory doesn't need to be contiguous — nodes can be scattered in memory. Insertion/deletion at known positions is O(1), but finding a position is O(n). Perfect for: implementing stacks/queues, music playlists (next/previous song), browser history, memory allocation in operating systems, and polynomial arithmetic.",available:!0},{to:"/skiplist",icon:gt,title:"Skip List",description:'A probabilistic data structure that uses multiple layers of linked lists with decreasing density. Express lanes skip over elements like a train system — higher levels let you "skip" to your destination faster. Achieves O(log n) average for search, insert, and delete. Used in Redis for sorted sets, LevelDB for in-memory indexing, and concurrent data structures where lock-free operation is critical.',available:!0}]},{id:"hash",name:"Hash-Tables",icon:xi,description:"Revolutionary data structures that use hash functions to map keys to array indices, enabling O(1) average-case lookup, insertion, and deletion. The backbone of databases, caches, and any system requiring fast key-value access.",color:"#10b981",items:[{to:"/hashtable_linear",icon:Mr,title:"Linear Probing",description:'Open addressing collision resolution: when a collision occurs (two keys hash to same index), simply check the next slot, then the next, until an empty slot is found. Pros: excellent cache performance since data is stored contiguously, simple implementation. Cons: can cause "primary clustering" where long runs of occupied slots form, degrading performance. Load factor should stay below 0.7 for efficiency.',available:!0},{to:"/hashtable_quadratic",icon:Mr,title:"Quadratic Probing",description:'Instead of checking consecutive slots, probe at quadratic intervals: 1², 2², 3²... positions away from the original hash. This eliminates primary clustering but can cause "secondary clustering" where keys with the same hash follow the same probe sequence. Table size should be prime and load factor < 0.5 to guarantee finding an empty slot. Used when cache performance is less critical than even distribution.',available:!0},{to:"/hashtable_chaining",icon:Mr,title:"Separate Chaining",description:"Each array slot holds a linked list (chain) of all entries that hash to that index. No limit on how many items can be stored — just grow the chains. Handles high load factors gracefully (even > 1.0). Simpler deletion than open addressing. Used in Java's HashMap, Python's dict (with optimization). Trade-off: extra memory for pointers, potentially poor cache performance with long chains.",available:!0}]},{id:"heaps",name:"Priority Queues & Heaps",icon:Jg,description:"Complete binary trees satisfying the heap property — either every parent ≥ children (max-heap) or every parent ≤ children (min-heap). Heaps power priority queues, enabling O(1) access to the extreme element and O(log n) insertions and deletions.",color:"#ec4899",items:[{to:"/minheap",icon:Tg,title:"Min Heap",description:`Every parent node is smaller than or equal to its children, so the minimum element is always at the root — accessible in O(1). Insert and extract-min are O(log n) as elements "bubble up" or "sink down" to maintain the heap property. Critical for: Dijkstra's shortest path algorithm, Prim's minimum spanning tree, job schedulers (process with smallest priority runs next), and efficiently finding the k largest elements in a stream.`,available:!0},{to:"/maxheap",icon:Eg,title:"Max Heap",description:"The mirror of min-heap: every parent ≥ children, maximum at root. Extract-max in O(1), insert and delete in O(log n). Powers: Heapsort algorithm (in-place O(n log n) sorting), priority queues where highest priority goes first, finding k smallest elements, implementing a median-finding structure (use one min-heap + one max-heap), and bandwidth management in network routers.",available:!0}]},{id:"trees",name:"Binary Trees",icon:tv,description:"Hierarchical data structures where data flows from a root node down through children. Trees enable O(log n) operations on sorted data and model real-world hierarchies like file systems, organization charts, and decision trees in AI/ML.",color:"#f59e0b",items:[{to:"/binarytree",icon:Zt,title:"Binary Tree Traversals",description:"Master the four fundamental ways to visit every node in a binary tree: INORDER (Left→Root→Right) visits nodes in sorted order for BST, used for expression trees; PREORDER (Root→Left→Right) processes root first, perfect for copying trees or creating prefix expressions; POSTORDER (Left→Right→Root) processes children before parent, used for deleting trees or postfix notation; LEVEL-ORDER (BFS) visits level by level, used for finding shortest paths and printing tree structure.",available:!0},{to:"/bst",icon:Qc,title:"Binary Search Tree",description:`The fundamental ordered tree: every node's left subtree contains only smaller values, right subtree only larger values. This property enables O(log n) search by eliminating half the tree at each step — like binary search but in tree form. Supports efficient range queries. Caveat: can degrade to O(n) if insertions create an unbalanced "stick". Foundation for databases, symbol tables, and more advanced balanced trees.`,available:!0},{to:"/avl",icon:Zg,title:"AVL Tree",description:"The first self-balancing BST, invented in 1962. Maintains strict balance: height difference between left and right subtrees ≤ 1 at every node. When insertion/deletion violates this, the tree self-corrects using rotations (single or double). Guarantees O(log n) for all operations. More rigidly balanced than Red-Black trees, so faster lookups but slightly slower insertions. Used when reads far exceed writes.",available:!0},{to:"/splay",icon:Xg,title:"Splay Tree",description:`A self-adjusting BST with a clever optimization: every accessed node is "splayed" (rotated) to the root. No explicit balance condition, yet achieves O(log n) amortized time. Recently accessed items stay near the root — perfect for caches where some items are accessed repeatedly (temporal locality). Used in Windows NT's virtual memory management, GCC's implementation of certain data structures, and network routers.`,available:!0},{to:"/treap",icon:Qc,title:"Treap",description:"A randomized BST that combines tree and heap properties. Each node has a key (BST-ordered) and a random priority (max-heap-ordered). Rotations restore heap order after insertion, giving O(log n) expected time for all operations without complex rebalancing logic. Supports efficient split and merge. Widely used in competitive programming and as a simpler alternative to AVL/Red-Black trees.",available:!0}]},{id:"Graphs",name:"Graphs",icon:Dg,description:"Graphs model relationships between objects using vertices (nodes) and edges (connections). They power social networks, GPS navigation, recommendation systems, and the internet itself. Understanding graphs unlocks solutions to complex real-world problems like finding shortest paths, detecting communities, and optimizing networks.",color:"#ef4444",items:[{to:"/adjacency-matrix",icon:xi,title:"Adjacency Matrix",description:"A 2D array used to represent a finite graph. Each cell at (i, j) indicates if there is an edge from vertex i to vertex j. Simple and fast for dense graphs, but uses O(V^2) space. Not practical for large, sparse graphs.",available:!0},{to:"/adjacency-list",icon:rs,title:"Adjacency List",description:"A space-efficient way to represent a graph. Each vertex stores a list of adjacent vertices. Ideal for sparse graphs, supports efficient iteration over neighbors. Commonly used in network routing, social networks, and recommendation systems.",available:!0},{to:"/bfs",icon:Kc,title:"Breadth-First Search (BFS)",description:"A fundamental graph traversal algorithm that explores neighbors level by level. Used for finding shortest paths in unweighted graphs, peer-to-peer networks, and web crawlers.",available:!0},{to:"/dfs",icon:Zt,title:"Depth-First Search (DFS)",description:"A classic graph traversal technique that explores as far as possible along each branch before backtracking. Used for topological sorting, cycle detection, and solving puzzles like mazes.",available:!0}]}];return n.jsxs("section",{className:"algorithms-section",children:[n.jsxs("div",{className:"section-header",children:[n.jsx("h1",{children:"Explore Data Structures"}),n.jsx("p",{children:"Choose a category to explore different data structures. Each visualizer includes step-by-step explanations and hands-on practice."})]}),n.jsx("div",{className:"categories-container",children:s.map(i=>n.jsxs("div",{className:"category-wrapper",children:[n.jsxs("button",{className:`category-header ${e===i.id?"expanded":""}`,onClick:()=>r(i.id),style:{"--category-color":i.color},children:[n.jsx("div",{className:"category-icon",style:{background:i.color},children:n.jsx(i.icon,{})}),n.jsxs("div",{className:"category-info",children:[n.jsx("h2",{children:i.name}),n.jsx("p",{children:i.description})]}),n.jsxs("div",{className:"category-meta",children:[n.jsxs("span",{className:"item-count",children:[i.items.filter(a=>a.available).length," available"]}),e===i.id?n.jsx(Ag,{}):n.jsx(Vg,{})]})]}),n.jsx("div",{className:`category-items ${e===i.id?"expanded":""}`,children:n.jsx("div",{className:"items-grid",children:i.items.map((a,l)=>a.available?n.jsxs(Le,{to:a.to,className:"algorithm-item",children:[n.jsx("div",{className:"item-icon",style:{background:i.color},children:n.jsx(a.icon,{})}),n.jsxs("div",{className:"item-info",children:[n.jsx("h3",{children:a.title}),n.jsx("p",{children:a.description})]}),n.jsx(se,{className:"item-arrow"})]},l):n.jsxs("div",{className:"algorithm-item coming-soon",children:[n.jsx("div",{className:"item-icon disabled",children:n.jsx(a.icon,{})}),n.jsxs("div",{className:"item-info",children:[n.jsx("h3",{children:a.title}),n.jsx("p",{children:a.description})]}),n.jsx("span",{className:"coming-soon-badge",children:"Coming Soon"})]},l))})})]},i.id))})]})}function cv(){return n.jsxs("section",{className:"contact-section",children:[n.jsx("div",{className:"page-header",children:n.jsx("h1",{children:"Contact"})}),n.jsx("div",{className:"contact-content",children:n.jsxs("div",{className:"contact-info",children:[n.jsxs("div",{className:"info-card",children:[n.jsx("div",{className:"info-icon",children:n.jsx(Rh,{})}),n.jsx("h3",{children:"Email"}),n.jsx("p",{children:"For recruitment and professional opportunities"}),n.jsx("a",{href:"mailto:abdullahmahfouz@trentu.ca",className:"info-link",children:"abdullahmahfouz@trentu.ca"})]}),n.jsxs("div",{className:"info-card",children:[n.jsx("div",{className:"info-icon",children:n.jsx(So,{})}),n.jsx("h3",{children:"GitHub"}),n.jsx("p",{children:"View my projects and contributions"}),n.jsx("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",className:"info-link",children:"github.com/abdullahmahfouz"})]}),n.jsxs("div",{className:"info-card",children:[n.jsx("div",{className:"info-icon",children:n.jsx(Co,{})}),n.jsx("h3",{children:"LinkedIn"}),n.jsx("p",{children:"Connect for professional networking"}),n.jsx("a",{href:"https://www.linkedin.com/in/abdullah-mahfouz-5188b1306/",target:"_blank",rel:"noopener noreferrer",className:"info-link",children:"Connect on LinkedIn"})]})]})})]})}function dv(){return n.jsxs("section",{className:"contributions-section",children:[n.jsxs("div",{className:"page-header",children:[n.jsx("h1",{children:"Contributions"}),n.jsx("p",{children:"Help us improve this free learning tool for students! Your contributions help make DSA easier to understand for everyone."})]}),n.jsxs("div",{className:"contributions-content",children:[n.jsxs("div",{className:"contribution-card",children:[n.jsx("div",{className:"contribution-icon",children:n.jsx(Us,{})}),n.jsx("h2",{children:"Code Contributions"}),n.jsx("p",{children:"Found a bug or want to add a new feature? Fork the repository, make your changes, and submit a pull request!"}),n.jsxs("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",className:"btn-primary",children:[n.jsx("span",{children:"View on GitHub"}),n.jsx(se,{})]})]}),n.jsxs("div",{className:"contribution-card",children:[n.jsx("div",{className:"contribution-icon",children:n.jsx(vi,{})}),n.jsx("h2",{children:"Documentation"}),n.jsx("p",{children:"Help improve our documentation, fix typos, or add examples. Every bit helps!"}),n.jsxs("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",className:"btn-primary",children:[n.jsx("span",{children:"Improve Docs"}),n.jsx(se,{})]})]}),n.jsxs("div",{className:"contribution-card",children:[n.jsx("div",{className:"contribution-icon",children:n.jsx(zg,{})}),n.jsx("h2",{children:"Report Issues"}),n.jsx("p",{children:"Found a bug or have a suggestion? Open an issue on GitHub and let us know!"}),n.jsxs("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",className:"btn-primary",children:[n.jsx("span",{children:"Report Issue"}),n.jsx(se,{})]})]}),n.jsxs("div",{className:"contribution-card",children:[n.jsx("div",{className:"contribution-icon",children:n.jsx(xe,{})}),n.jsx("h2",{children:"Feature Requests"}),n.jsx("p",{children:"Have an idea for a new visualizer or feature? We'd love to hear your suggestions!"}),n.jsxs(Le,{to:"/contact",className:"btn-primary",children:[n.jsx("span",{children:"Suggest Feature"}),n.jsx(se,{})]})]})]}),n.jsxs("div",{className:"contributors-section",children:[n.jsx("h2",{children:"Contributors"}),n.jsx("div",{className:"contributors-list",children:n.jsxs("div",{className:"contributor-item",children:[n.jsx("div",{className:"contributor-avatar",children:n.jsx(sv,{})}),n.jsxs("div",{className:"contributor-info",children:[n.jsx("h3",{children:"Abdullah Mahfouz"}),n.jsx("p",{children:"Creator & Maintainer"})]})]})}),n.jsx("p",{className:"contributors-note",children:"Want to see your name here? Start contributing today!"})]})]})}function fe({context:e="Data Structures"}){const[t,r]=u.useState(""),[s,i]=u.useState(""),[a,l]=u.useState(!1),o=()=>{const d=e.toLowerCase();return d.includes("stack")?"e.g., How does LIFO work?":d.includes("queue")?"e.g., What is FIFO?":d.includes("linked list")?"e.g., How do I insert at the head?":d.includes("hash")?"e.g., What is a collision?":d.includes("binary tree")||d.includes("traversal")?"e.g., What is inorder traversal?":"e.g., How does this work?"},c=async()=>{if(t.trim()){l(!0),i("");try{const d=await fetch("/api/ask-ai",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:t.trim(),code:e})}),p=await d.json();d.ok?i(p.answer||"No answer returned."):i("Currently not working, try again later.")}catch{i("Currently not working, try again later.")}finally{l(!1)}}},h=d=>{d.key==="Enter"&&c()};return n.jsxs("div",{className:"ai-assistant",children:[n.jsxs("h3",{children:[n.jsx(Rg,{}),"AI Assistant"]}),n.jsxs("p",{children:["Ask me anything about ",e.toLowerCase(),"!"]}),n.jsxs("div",{className:"ai-input-group",children:[n.jsx("input",{type:"text",value:t,onChange:d=>r(d.target.value),onKeyPress:h,placeholder:o(),disabled:a}),n.jsx("button",{onClick:c,disabled:a,children:a?"Asking...":"Ask"})]}),n.jsxs("div",{id:"ai-response",children:[a&&n.jsx("div",{className:"ai-loading",children:"Thinking..."}),s&&n.jsx("div",{className:s.startsWith("Error")?"ai-error":"ai-answer",children:s})]})]})}const uv=`class Stack:
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
print(stack.peek())  # 20`,hv=`class Stack {
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
console.log(stack.pop()); // 20`,pv=`import java.util.EmptyStackException;

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
System.out.println(stack.pop()); // 20`,fv={python:uv,javascript:hv,java:pv,"c++":`#include <iostream>
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
Console.WriteLine(stack.Pop()); // 20`},mv=`class Queue:
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
print(queue.peek())     # 20`,gv=`class Queue {
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
console.log(queue.dequeue()); // 10`,vv=`import java.util.NoSuchElementException;

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
System.out.println(queue.dequeue()); // 10`,xv={python:mv,javascript:gv,java:vv,"c++":`#include <iostream>
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
Console.WriteLine(queue.Dequeue()); // 10`},yv=`class Node:
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
print(ll.search(20))  # 1`,jv=`class Node {
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
ll.insertAtTail(30);`,Nv=`public class SinglyLinkedList<T> {
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
ll.insertAtTail(30);`,kv={python:yv,javascript:jv,java:Nv,"c++":`#include <iostream>
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
ll.InsertAtTail(30);`},wv=`import random

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
        return False`,bv=`class SkipListNode {
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
}`,Sv=`import java.util.Random;

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
}`,Cv={python:wv,javascript:bv,java:Sv,"c++":`#include <vector>
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
}`},Tv=`class TreeNode:
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
print("Level:     ", tree.levelorder_traversal())  # [50, 30, 70, 20, 40, 60, 80]`,Lv=`class TreeNode {
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
console.log("Level:    ", tree.levelOrderTraversal());  // [50, 30, 70, 20, 40, 60, 80]`,_v=`import java.util.*;

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
System.out.println("Level:     " + tree.levelOrderTraversal());`,Ev={python:Tv,javascript:Lv,java:_v,"c++":`#include <iostream>
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
Console.WriteLine("Level:     " + string.Join(", ", tree.LevelOrderTraversal()));`},Ov=`class HashTable:
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
print(ht.get("banana"))  # 3`,Rv=`class HashTable {
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
console.log(ht.get("apple"));  // 5`,Pv=`public class HashTable<K, V> {
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
System.out.println(ht.get("apple")); // 5`,Iv={python:Ov,javascript:Rv,java:Pv,"c++":`#include <iostream>
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
Console.WriteLine(ht.Get("apple")); // 5`},zv=`class Node:
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
ht.delete("banana")`,Mv=`class Node {
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
console.log(ht.search("apple"));  // 5`,Vv=`public class HashTableChaining<K, V> {
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
System.out.println(ht.search("apple"));  // 5`,Av={python:zv,javascript:Mv,java:Vv,"c++":`#include <iostream>
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
Console.WriteLine(ht.Search("apple"));  // 5`},Fv=`class TreeNode:
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
print("After delete 30:", bst.inorder())  # [20, 40, 50, 60, 70, 80]`,Dv=`class TreeNode {
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
console.log("After delete 30:", bst.inorder());  // [20, 40, 50, 60, 70, 80]`,$v=`import java.util.*;

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
System.out.println("After delete: " + bst.inorder());  // [20, 40, 50, 60, 70, 80]`,Bv={python:Fv,javascript:Dv,java:$v,"c++":`#include <iostream>
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
Console.WriteLine("After delete: " + string.Join(", ", bst.Inorder()));`},Hv=`class AVLNode:
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
# Tree automatically balances after each insert!`,qv=`class AVLNode {
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
[30, 20, 40, 10, 25, 35, 50].forEach(v => avl.insert(v));`,Uv=`class AVLNode {
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
for (int v : new int[]{30, 20, 40, 10, 25}) avl.insert(v);`,Kv={python:Hv,javascript:qv,java:Uv,"c++":`#include <algorithm>
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

// Usage: var avl = new AVLTree(); foreach(var v in new[]{30,20,40}) avl.Insert(v);`},Wv=`class SplayNode:
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
print("Root:", splay.root.key)  # 20`,Gv=`class SplayNode {
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
splay.search(20); // 20 moves to root`,Qv=`class SplayNode {
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
st.search(20); // 20 is now root`,Xv={python:Wv,javascript:Gv,java:Qv,"c++":`struct SplayNode {
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

// Usage: var st = new SplayTree(); foreach(var v in new[]{50,30,70}) st.Insert(v);`},Yv=`class MinHeap:
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
print("New min:", heap.peek())  # 2`,Jv=`class MinHeap {
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
console.log("Extract:", heap.extractMin());  // 1`,Zv=`import java.util.*;

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
System.out.println("Min: " + heap.peek());  // 1`,ex={python:Yv,javascript:Jv,java:Zv,"c++":`#include <vector>
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

// Usage: var h = new MinHeap(); foreach(var v in new[]{5,3,8,1}) h.Insert(v);`},nx=`class MaxHeap:
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
print("New max:", heap.peek())  # 8`,tx=`class MaxHeap {
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
console.log("Extract:", heap.extractMax());  // 9`,rx=`import java.util.*;

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
System.out.println("Max: " + heap.peek());  // 9`,sx={python:nx,javascript:tx,java:rx,"c++":`#include <vector>
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

// Usage: var h = new MaxHeap(); foreach(var v in new[]{5,3,8,9}) h.Insert(v);`},ix=`from collections import defaultdict

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
print(g.get_neighbors('A'))  # [('B', 1), ('C', 1)]`,ax=`class Graph {
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
console.log(g.getNeighbors('A'));`,lx=`import java.util.*;

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
g.addEdge("A", "C");`,ox={python:ix,javascript:ax,java:lx,"c++":`#include <iostream>
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
g.AddEdge("A", "C");`},cx=`from collections import deque

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

print(bfs(graph, 'A'))  # ['A', 'B', 'C', 'D', 'E', 'F']`,dx=`function bfs(graph, start) {
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

console.log(bfs(graph, 'A')); // ['A', 'B', 'C', 'D', 'E', 'F']`,ux=`import java.util.*;

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
}`,hx={python:cx,javascript:dx,java:ux,"c++":`#include <iostream>
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
}`},px=`def dfs(graph, start):
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

print(dfs(graph, 'A'))  # ['A', 'B', 'D', 'E', 'F', 'C']`,fx=`function dfs(graph, start) {
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

console.log(dfs(graph, 'A'));`,mx=`import java.util.*;

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
}`,gx={python:px,javascript:fx,java:mx,"c++":`#include <iostream>
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
}`},vx=`import random

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
print("After delete 30:", treap.inorder())  # [20, 40, 50, 60, 70, 80]`,xx=`class TreapNode {
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
console.log("After delete 30:", treap.inorder());  // [20, 40, 50, 60, 70, 80]`,yx=`import java.util.*;

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
System.out.println("After delete: " + treap.inorder());  // [20, 40, 50, 60, 70, 80]`,jx={python:vx,javascript:xx,java:yx,"c++":`#include <iostream>
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
Console.WriteLine("After delete: " + string.Join(", ", treap.Inorder()));`},fa={stack:fv,queue:xv,linkedlist:kv,skiplist:Cv,binarytree:Ev,hashtable:Iv,hashtableChaining:Av,bst:Bv,avl:Kv,splay:Xv,minheap:ex,maxheap:sx,graph:ox,bfs:hx,dfs:gx,treap:jx};function me({dataStructure:e}){var p;const[t,r]=u.useState("python"),[s,i]=u.useState(!1),a=["python","javascript","java","c++","c#"],l=a.filter(m=>{var b;return(b=fa[e])==null?void 0:b[m]}),o=l.length>0?l:a,c=((p=fa[e])==null?void 0:p[t])||"Code not available for this data structure";u.useEffect(()=>{var m;!((m=fa[e])!=null&&m[t])&&l.length>0&&r(l[0])},[e,t,l]);const h=m=>({python:"Python",javascript:"JavaScript",java:"Java","c++":"C++","c#":"C#"})[m]||m,d=()=>{navigator.clipboard.writeText(c),i(!0),setTimeout(()=>i(!1),2e3)};return n.jsxs("div",{className:"code-section",children:[n.jsxs("h2",{children:[n.jsx(Gc,{})," Implementation"]}),n.jsx("div",{className:"code-tabs",children:o.map(m=>n.jsxs("button",{className:`tab-btn ${t===m?"active":""}`,onClick:()=>r(m),children:[n.jsx(Gc,{}),h(m)]},m))}),n.jsx("div",{className:"code-panels",children:n.jsx("div",{className:"code-panel active",children:n.jsxs("pre",{children:[n.jsxs("button",{className:"copy-btn",onClick:d,children:[n.jsx(Oh,{})," ",s?"Copied!":"Copy"]}),n.jsx("code",{children:c})]})})})]})}function Ae({message:e}){if(!(e!=null&&e.text))return null;const t=e.type||"info";return n.jsx("div",{className:`message message-${t}`,children:e.text})}async function ae(e){return await(await fetch(e)).json()}async function Z(e,t){return await(await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()}async function ji(e,t=null){const r={method:"DELETE",headers:{"Content-Type":"application/json"}};return t&&(r.body=JSON.stringify(t)),await(await fetch(e,r)).json()}function Fe(e=3e3){const[t,r]=u.useState(null),s=u.useRef(null),i=u.useCallback(()=>{r(null),s.current&&(clearTimeout(s.current),s.current=null)},[]),a=u.useCallback((l,o="info")=>{r({text:l,type:o}),s.current&&clearTimeout(s.current),s.current=setTimeout(()=>{r(null),s.current=null},e)},[e]);return u.useEffect(()=>i,[i]),{message:t,showMessage:a,clearMessage:i}}function Nx(){const[e,t]=u.useState([]),[r,s]=u.useState(0),[i,a]=u.useState("Empty"),[l]=u.useState(10),{message:o,showMessage:c}=Fe(3e3),[h,d]=u.useState("");u.useEffect(()=>{p()},[]);const p=async()=>{try{const f=await ae("/api/stack");t(f.items||[]),s(f.size||0),a(f.top!==null&&f.top!==void 0?f.top:"Empty")}catch(f){console.error("Error loading stack:",f)}},m=async()=>{if(!h||h.trim()===""){c("Please enter a number!","error");return}const f=Number(h);if(isNaN(f)){c("Please enter a valid number!","error");return}try{const g=await Z("/api/stack/push",{value:f});if(g.error){c(g.error,"error");return}t(g.items||[]),s(g.size||0),a(g.top!==null&&g.top!==void 0?g.top:"Empty"),c(`Pushed ${f} to stack!`,"success"),d("")}catch(g){console.error("Push error:",g),c("Error pushing to stack. Is Flask running?","error")}},b=async()=>{try{const f=await Z("/api/stack/pop",{});if(f.error){c(f.error,"error");return}t(f.items||[]),s(f.size||0),a(f.top!==null&&f.top!==void 0?f.top:"Empty"),c(`Popped ${f.popped} from stack!`,"success")}catch{c("Error popping from stack","error")}},w=async()=>{try{const f=await ae("/api/stack/peek");if(f.error){c(f.error,"error");return}c(`Top element is: ${f.top}`,"info")}catch{c("Error peeking stack","error")}},k=async()=>{try{await Z("/api/stack/clear",{}),t([]),s(0),a("Empty"),c("Stack cleared!","success")}catch{c("Error clearing stack","error")}},j=f=>{f.key==="Enter"&&m()};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Ce,{className:"icon-sm"}),n.jsx("span",{children:"What is a Stack?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:["A ",n.jsx("strong",{children:"Stack"})," is a linear data structure that follows the ",n.jsx("strong",{children:"LIFO"})," (Last In, First Out) principle."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(xe,{}),n.jsxs("span",{children:["Think of a stack of plates - you can only add or remove from the ",n.jsx("strong",{children:"top"}),"!"]})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Push"}),n.jsx("span",{className:"op-desc",children:"Add to top"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Pop"}),n.jsx("span",{className:"op-desc",children:"Remove from top"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Peek"}),n.jsx("span",{className:"op-desc",children:"View top element"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]})]}),n.jsxs("div",{className:"concept-uses",children:[n.jsx("strong",{children:"Common Uses:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Browser back/forward buttons"}),n.jsx("li",{children:"Undo/Redo functionality"}),n.jsx("li",{children:"Function call stack"}),n.jsx("li",{children:"Expression evaluation"})]})]})]})]}),n.jsx(fe,{context:"Stack data structure"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Stack Operations"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"pushValue",children:"Push (Add to top)"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",id:"pushValue",value:h,onChange:f=>d(f.target.value),onKeyPress:j,placeholder:"Enter a value"}),n.jsx("button",{onClick:m,className:"btn btn-push",children:"Push"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Other Operations"}),n.jsxs("div",{className:"btn-group",children:[n.jsx("button",{onClick:b,className:"btn btn-pop",children:"Pop"}),n.jsx("button",{onClick:w,className:"btn btn-peek",children:"Peek"}),n.jsx("button",{onClick:k,className:"btn btn-clear",children:"Clear"})]})]}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Size:"}),n.jsx("span",{className:"info-value",children:r})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Top:"}),n.jsx("span",{className:"info-value",children:i})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Max Size:"}),n.jsx("span",{className:"info-value",children:l})]})]}),n.jsx(Ae,{message:o})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Stack Visualization"}),n.jsxs("div",{className:"stack-container",children:[n.jsx("div",{className:"stack-visual",children:e.length===0?n.jsx("div",{className:"stack-empty",children:"Stack is empty. Push some items!"}):e.slice().reverse().map((f,g)=>n.jsx("div",{className:"stack-item",children:f},g))}),n.jsx("div",{className:"stack-base",children:n.jsx("span",{children:"BOTTOM"})})]})]})]}),n.jsx(me,{dataStructure:"stack"})]})}function kx(){const[e,t]=u.useState([]),[r,s]=u.useState(0),[i,a]=u.useState("Empty"),[l]=u.useState(10),{message:o,showMessage:c}=Fe(3e3),[h,d]=u.useState("");u.useEffect(()=>{p()},[]);const p=async()=>{try{const j=await ae("/api/queue");t(j.items||[]),s(j.size||0),a(j.front!==null&&j.front!==void 0?j.front:"Empty")}catch(j){console.error("Error loading queue:",j)}},m=async()=>{if(!h||h.trim()===""){c("Please enter a number!","error");return}const j=Number(h);if(isNaN(j)){c("Please enter a valid number!","error");return}try{const f=await Z("/api/queue/enqueue",{value:j});if(f.error){c(f.error,"error");return}t(f.items||[]),s(f.size||0),a(f.front!==null&&f.front!==void 0?f.front:"Empty"),c(`Enqueued ${j}!`,"success"),d("")}catch(f){console.error("Enqueue error:",f),c("Error enqueueing. Is Flask running?","error")}},b=async()=>{try{const j=await Z("/api/queue/dequeue",{});if(j.error){c(j.error,"error");return}t(j.items||[]),s(j.size||0),a(j.front!==null&&j.front!==void 0?j.front:"Empty"),c(`Dequeued ${j.dequeued} from queue!`,"success")}catch{c("Error dequeuing from queue","error")}},w=async()=>{try{const j=await ae("/api/queue/peek");if(j.error){c(j.error,"error");return}c(`Front element is: ${j.front}`,"info")}catch{c("Error peeking queue","error")}},k=async()=>{try{await Z("/api/queue/clear",{}),t([]),s(0),a("Empty"),c("Queue cleared!","success")}catch{c("Error clearing queue","error")}};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Ce,{className:"icon-sm"}),n.jsx("span",{children:"What is a Queue?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:["A ",n.jsx("strong",{children:"Queue"})," is a linear data structure that follows the ",n.jsx("strong",{children:"FIFO"})," (First In, First Out) principle."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(xe,{}),n.jsxs("span",{children:["Think of a line at a store – the first person in line gets served ",n.jsx("strong",{children:"first"}),"!"]})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Enqueue"}),n.jsx("span",{className:"op-desc",children:"Add to the back"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Dequeue"}),n.jsx("span",{className:"op-desc",children:"Remove from the front"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Peek"}),n.jsx("span",{className:"op-desc",children:"View the front element"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]})]})]})]}),n.jsx(fe,{context:"Queue data structure"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Queue Operations"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"enqueueValue",children:"Enqueue (Add to back)"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",id:"enqueueValue",value:h,onChange:j=>d(j.target.value),onKeyPress:j=>j.key==="Enter"&&m(),placeholder:"Enter a value"}),n.jsx("button",{onClick:m,className:"btn btn-enqueue",children:"Enqueue"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Other Operations"}),n.jsxs("div",{className:"btn-group",children:[n.jsx("button",{onClick:b,className:"btn btn-dequeue",children:"Dequeue"}),n.jsx("button",{onClick:w,className:"btn btn-peek",children:"Peek"}),n.jsx("button",{onClick:k,className:"btn btn-clear",children:"Clear"})]})]}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Size:"}),n.jsx("span",{className:"info-value",children:r})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Front:"}),n.jsx("span",{className:"info-value",children:i})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Max Size:"}),n.jsx("span",{className:"info-value",children:l})]})]}),n.jsx(Ae,{message:o})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Queue Visualization"}),n.jsxs("div",{className:"queue-container",children:[n.jsx("div",{className:"queue-label",children:n.jsx("span",{className:"front-marker",children:"FRONT →"})}),n.jsx("div",{className:"queue-visual",children:e.length===0?n.jsx("div",{className:"queue-empty",children:"Queue is empty. Enqueue some items!"}):e.map((j,f)=>{const g=f===0,v=f===e.length-1;return n.jsxs("div",{className:`queue-item ${g?"queue-front":""} ${v?"queue-back":""}`,children:[g&&n.jsx("span",{className:"front-label",children:"FRONT"}),j,v&&n.jsx("span",{className:"back-label",children:"BACK"})]},f)})}),n.jsx("div",{className:"queue-label",children:n.jsx("span",{className:"back-marker",children:"← BACK"})})]})]})]}),n.jsx(me,{dataStructure:"queue"})]})}function wx(){const[e,t]=u.useState([]),[r,s]=u.useState(0),[i,a]=u.useState("Empty"),{message:l,showMessage:o}=Fe(3e3),[c,h]=u.useState(""),[d,p]=u.useState(""),[m,b]=u.useState(""),[w,k]=u.useState(""),[j,f]=u.useState(""),[g,v]=u.useState("");u.useEffect(()=>{E()},[]);const E=async()=>{try{const I=await ae("/api/linkedlist");t(I.items||[]),s(I.size||0),a(I.head!==null&&I.head!==void 0?I.head:"Empty")}catch(I){console.error("Error loading linked list:",I)}},y=async()=>{if(!c||c.trim()===""){o("Please enter a number!","error");return}const I=Number(c);if(isNaN(I)){o("Please enter a valid number!","error");return}try{const q=await Z("/api/linkedlist/insert/head",{value:I});if(q.error){o(q.error,"error");return}t(q.items||[]),s(q.size||0),a(q.head!==null&&q.head!==void 0?q.head:"Empty"),o(`Inserted ${I} at head!`,"success"),h("")}catch(q){console.error("Insert error:",q),o("Error inserting. Is Flask running?","error")}},V=async()=>{if(!d||d.trim()===""){o("Please enter a number!","error");return}const I=Number(d);if(isNaN(I)){o("Please enter a valid number!","error");return}try{const q=await Z("/api/linkedlist/insert/tail",{value:I});if(q.error){o(q.error,"error");return}t(q.items||[]),s(q.size||0),a(q.head!==null&&q.head!==void 0?q.head:"Empty"),o(`Inserted ${I} at tail!`,"success"),p("")}catch(q){console.error("Insert error:",q),o("Error inserting. Is Flask running?","error")}},T=async()=>{try{const I=await Z("/api/linkedlist/delete/head",{});if(I.error){o(I.error,"error");return}t(I.items||[]),s(I.size||0),a(I.head!==null&&I.head!==void 0?I.head:"Empty"),o("Deleted head!","success")}catch{o("Error deleting head","error")}},D=async()=>{try{const I=await Z("/api/linkedlist/delete/tail",{});if(I.error){o(I.error,"error");return}t(I.items||[]),s(I.size||0),a(I.head!==null&&I.head!==void 0?I.head:"Empty"),o("Deleted tail!","success")}catch{o("Error deleting tail","error")}},A=async()=>{try{await Z("/api/linkedlist/clear",{}),t([]),s(0),a("Empty"),o("List cleared!","success")}catch{o("Error clearing list","error")}};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Ce,{className:"icon-sm"}),n.jsx("span",{children:"What is a Singly Linked List?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:["A ",n.jsx("strong",{children:"Singly Linked List"})," is a linear data structure where each element contains data and a pointer to the next node."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(xe,{}),n.jsxs("span",{children:["Think of a treasure hunt – each clue points to the ",n.jsx("strong",{children:"next location"}),"!"]})]})]})]}),n.jsx(fe,{context:"Singly Linked List data structure"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Linked List Operations"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"insertHeadValue",children:"Insert at Head"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",id:"insertHeadValue",value:c,onChange:I=>h(I.target.value),onKeyPress:I=>I.key==="Enter"&&y(),placeholder:"Enter a value"}),n.jsx("button",{onClick:y,className:"btn btn-insert",children:"Insert Head"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"insertTailValue",children:"Insert at Tail"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",id:"insertTailValue",value:d,onChange:I=>p(I.target.value),onKeyPress:I=>I.key==="Enter"&&V(),placeholder:"Enter a value"}),n.jsx("button",{onClick:V,className:"btn btn-insert",children:"Insert Tail"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Delete Operations"}),n.jsxs("div",{className:"btn-group",children:[n.jsx("button",{onClick:T,className:"btn btn-delete",children:"Delete Head"}),n.jsx("button",{onClick:D,className:"btn btn-delete",children:"Delete Tail"})]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:A,className:"btn btn-clear full-width",children:"Clear All"})}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Size:"}),n.jsx("span",{className:"info-value",children:r})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Head:"}),n.jsx("span",{className:"info-value",children:i})]})]}),n.jsx(Ae,{message:l})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Linked List Visualization"}),n.jsx("div",{className:"linkedlist-container",children:n.jsx("div",{className:"linkedlist-visual",children:e.length===0?n.jsx("div",{className:"linkedlist-empty",children:"List is empty. Insert some nodes!"}):e.map((I,q)=>n.jsx($e.Fragment,{children:n.jsxs("div",{className:"linkedlist-node",children:[n.jsx("div",{className:"node-value",children:I}),q<e.length-1&&n.jsx("div",{className:"node-arrow",children:"→"})]})},q))})})]})]}),n.jsx(me,{dataStructure:"linkedlist"})]})}function bx(){const[e,t]=u.useState([]),[r,s]=u.useState([]),[i,a]=u.useState(0),[l,o]=u.useState(0),{message:c,showMessage:h}=Fe(3e3),[d,p]=u.useState(""),[m,b]=u.useState(""),[w,k]=u.useState(""),[j,f]=u.useState([]),[g,v]=u.useState(null),[E,y]=u.useState(null);u.useEffect(()=>{V()},[]);const V=async()=>{try{const $=await ae("/api/skiplist");t($.levels||[]),s($.nodes||[]),a($.maxLevel||0),o($.size||0)}catch($){console.error("Error loading skip list:",$)}},T=async()=>{if(!d||d.trim()===""){h("Please enter a number!","error");return}const $=Number(d);if(isNaN($)||!Number.isInteger($)){h("Please enter a valid integer!","error");return}try{const x=await Z("/api/skiplist/insert",{value:$});if(x.error){h(x.error,"error");return}t(x.levels||[]),s(x.nodes||[]),a(x.maxLevel||0),o(x.size||0),y($),h(`Inserted ${$} at level ${x.insertedLevel}!`,"success"),p(""),setTimeout(()=>y(null),2e3)}catch(x){console.error("Insert error:",x),h("Error inserting. Is Flask running?","error")}},D=async()=>{if(!m||m.trim()===""){h("Please enter a number!","error");return}const $=Number(m);if(isNaN($)||!Number.isInteger($)){h("Please enter a valid integer!","error");return}try{const x=await Z("/api/skiplist/delete",{value:$});if(x.error){h(x.error,"error");return}t(x.levels||[]),s(x.nodes||[]),a(x.maxLevel||0),o(x.size||0),h(`Deleted ${$}!`,"success"),b("")}catch(x){console.error("Delete error:",x),h("Error deleting. Is Flask running?","error")}},A=async()=>{if(!w||w.trim()===""){h("Please enter a number!","error");return}const $=Number(w);if(isNaN($)||!Number.isInteger($)){h("Please enter a valid integer!","error");return}try{const x=await Z("/api/skiplist/search",{value:$});f(x.path||[]),v(x.found),x.found?(y($),h(`Found ${$}!`,"success")):h(`${$} not found`,"warning"),k(""),setTimeout(()=>{f([]),v(null),y(null)},3e3)}catch(x){console.error("Search error:",x),h("Error searching. Is Flask running?","error")}},I=async()=>{try{await Z("/api/skiplist/clear",{}),t([]),s([]),a(0),o(0),f([]),v(null),y(null),h("Skip list cleared!","success")}catch{h("Error clearing skip list","error")}},q=$=>{const x=r.find(R=>R.value===$);return x?x.level:0},K=($,x)=>{var R;return(R=e[x])==null?void 0:R.includes($)},B=()=>e.length===0?[]:[...e[0]].sort(($,x)=>$-x);return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Ce,{className:"icon-sm"}),n.jsx("span",{children:"What is a Skip List?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:["A ",n.jsx("strong",{children:"Skip List"})," is a probabilistic data structure that allows O(log n) search, insert, and delete operations by maintaining multiple layers of linked lists."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(xe,{}),n.jsx("span",{children:"Think of an express train system - express lines skip stations to get you there faster!"})]})]})]}),n.jsx(fe,{context:"Skip List data structure"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Skip List Operations"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"insertValue",children:"Insert Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",id:"insertValue",value:d,onChange:$=>p($.target.value),onKeyPress:$=>$.key==="Enter"&&T(),placeholder:"Enter integer"}),n.jsx("button",{onClick:T,className:"btn btn-insert",children:"Insert"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"searchValue",children:"Search Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",id:"searchValue",value:w,onChange:$=>k($.target.value),onKeyPress:$=>$.key==="Enter"&&A(),placeholder:"Enter integer"}),n.jsx("button",{onClick:A,className:"btn btn-search",children:"Search"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"deleteValue",children:"Delete Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",id:"deleteValue",value:m,onChange:$=>b($.target.value),onKeyPress:$=>$.key==="Enter"&&D(),placeholder:"Enter integer"}),n.jsx("button",{onClick:D,className:"btn btn-delete",children:"Delete"})]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:I,className:"btn btn-clear full-width",children:"Clear All"})}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Size:"}),n.jsx("span",{className:"info-value",children:l})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Max Level:"}),n.jsx("span",{className:"info-value",children:i})]})]}),n.jsxs("div",{className:"complexity-info",children:[n.jsx("h3",{children:"Time Complexity"}),n.jsxs("div",{className:"complexity-item",children:[n.jsx("span",{children:"Search:"}),n.jsx("span",{className:"complexity-value",children:"O(log n) avg"})]}),n.jsxs("div",{className:"complexity-item",children:[n.jsx("span",{children:"Insert:"}),n.jsx("span",{className:"complexity-value",children:"O(log n) avg"})]}),n.jsxs("div",{className:"complexity-item",children:[n.jsx("span",{children:"Delete:"}),n.jsx("span",{className:"complexity-value",children:"O(log n) avg"})]})]}),n.jsx(Ae,{message:c})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Skip List Visualization"}),n.jsx("div",{className:"skiplist-container",children:l===0?n.jsx("div",{className:"skiplist-empty",children:"Skip list is empty. Insert some values!"}):n.jsxs("div",{className:"skiplist-visual",children:[[...Array(i+1)].reverse().map(($,x)=>{const R=i-x;return n.jsxs("div",{className:"skiplist-level",children:[n.jsxs("div",{className:"level-label",children:[n.jsx(gt,{size:14}),n.jsxs("span",{children:["L",R]})]}),n.jsxs("div",{className:"level-nodes",children:[n.jsx("div",{className:"skiplist-head",children:"HEAD"}),n.jsx("div",{className:"skiplist-arrow",children:"→"}),B().map((H,_)=>{const O=K(H,R),S=E===H;return n.jsx($e.Fragment,{children:O?n.jsxs(n.Fragment,{children:[n.jsx("div",{className:`skiplist-node ${S?"highlighted":""}`,children:H}),n.jsx("div",{className:"skiplist-arrow",children:"→"})]}):n.jsx(n.Fragment,{children:n.jsx("div",{className:"skiplist-gap",children:n.jsx("div",{className:"gap-line"})})})},`${R}-${H}`)}),n.jsx("div",{className:"skiplist-null",children:"NULL"})]})]},R)}),n.jsx("div",{className:"vertical-connectors",children:B().map($=>{const x=q($);return n.jsx("div",{className:"connector-column",style:{"--node-level":x},children:[...Array(x)].map((R,H)=>n.jsx("div",{className:"vertical-line"},H))},`connector-${$}`)})})]})}),n.jsxs("div",{className:"skiplist-legend",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color head"}),n.jsx("span",{children:"Head Node"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color node"}),n.jsx("span",{children:"Data Node"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color highlighted"}),n.jsx("span",{children:"Highlighted"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color null"}),n.jsx("span",{children:"Null Pointer"})]})]})]})]}),n.jsx(me,{dataStructure:"skiplist"})]})}function Sx(){const[e,t]=u.useState([]),[r,s]=u.useState(0),[i,a]=u.useState(0),[l,o]=u.useState(0),[c,h]=u.useState(0),{message:d,showMessage:p}=Fe(3e3),[m,b]=u.useState(""),[w,k]=u.useState(""),[j,f]=u.useState(""),[g,v]=u.useState(""),[E,y]=u.useState(null),[V,T]=u.useState([]),[D,A]=u.useState(null),[I,q]=u.useState(null);u.useEffect(()=>{K()},[]);const K=async()=>{try{const O=await ae("/api/hashtable");t(O.table||[]),s(O.size||0),a(O.capacity||0),o(O.load_factor||0),h(O.collision_count||0)}catch(O){console.error("Error loading hashtable:",O)}},B=O=>{if(!i||i===0)return 0;let S=0;for(let M=0;M<O.length;M++)S=(S*31+O.charCodeAt(M))%i;return S},$=(O,S)=>{const M=B(O),z=[M];let C=M;for(;S[C]&&S[C][0]!==O&&(C=(C+1)%i,z.push(C),!(C===M||z.length>i)););return{originalHash:M,path:z,finalSlot:C}},x=async()=>{if(!m.trim()||!w.trim()){p("Please enter both key and value!","error");return}const O=i>0?B(m.trim()):0,S=e.length>0&&e[O]&&e[O][0]!==m.trim();let M=null;S&&(M=$(m.trim(),e));try{const z=await Z("/api/hashtable/insert",{key:m.trim(),value:w.trim()});if(z.error){p(z.error,"error");return}await K(),A(m.trim()),S&&M?(q({key:m.trim(),originalSlot:M.originalHash,probedSlots:M.path,finalSlot:M.path[M.path.length-1]}),T(M.path),p(`Collision! "${m}" hashed to ${M.originalHash}, probed ${M.path.length} slot(s)`,"warning"),setTimeout(()=>{T([]),q(null)},4e3)):(p(`Inserted "${m}" → slot ${O}`,"success"),y(O),setTimeout(()=>y(null),2e3)),b(""),k(""),setTimeout(()=>A(null),3e3)}catch{p("Error inserting. Is Flask running?","error")}},R=async()=>{if(!j.trim()){p("Please enter a key!","error");return}try{const O=await Z("/api/hashtable/delete",{key:j.trim()});if(O.error){p(O.error,"error");return}await K(),p(`Deleted "${j}"`,"success"),f("")}catch{p("Error deleting. Is Flask running?","error")}},H=async()=>{if(!g.trim()){p("Please enter a key!","error");return}try{const O=await ae(`/api/hashtable/get?key=${encodeURIComponent(g.trim())}`);if(O.error){p(O.error,"error");return}O.found?p(`Found: "${g}" = ${O.value}`,"success"):p(`Key "${g}" not found`,"error"),v("")}catch{p("Error searching item","error")}},_=async()=>{try{await Z("/api/hashtable/clear",{}),await K(),T([]),q(null),p("Hashtable cleared!","success")}catch{p("Error clearing hashtable","error")}};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"intro-left",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Ce,{className:"icon-sm"}),n.jsx("span",{children:"What is a Hash Table?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:["A ",n.jsx("strong",{children:"Hash Table"})," maps keys to values using a hash function for O(1) lookups."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(xe,{}),n.jsxs("span",{children:["Like a ",n.jsx("strong",{children:"coat check"})," – give them your coat (value), get a ticket number (hash of key)!"]})]})]})]}),n.jsxs("div",{className:"concept-box",style:{marginTop:"1rem"},children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(kn,{className:"icon-sm",style:{color:"#f59e0b"}}),n.jsx("span",{children:"Linear Probing"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:["When two keys hash to the same slot (",n.jsx("strong",{children:"collision"}),"), we check the next slot until we find an empty one."]}),n.jsxs("div",{className:"concept-analogy",style:{marginTop:"0.5rem"},children:[n.jsx(Bn,{style:{color:"#3b82f6"}}),n.jsx("span",{children:"Like parking – if spot 3 is taken, try spot 4, then 5..."})]})]})]})]}),n.jsx(fe,{context:"Hash Table with Linear Probing"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Operations"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Insert Key-Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",value:m,onChange:O=>b(O.target.value),placeholder:"Key"}),n.jsx("input",{type:"text",value:w,onChange:O=>k(O.target.value),onKeyPress:O=>O.key==="Enter"&&x(),placeholder:"Value"}),n.jsx("button",{onClick:x,className:"btn btn-insert",children:"Insert"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Delete Key"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",value:j,onChange:O=>f(O.target.value),onKeyPress:O=>O.key==="Enter"&&R(),placeholder:"Key"}),n.jsx("button",{onClick:R,className:"btn btn-delete",children:"Delete"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Search Key"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",value:g,onChange:O=>v(O.target.value),onKeyPress:O=>O.key==="Enter"&&H(),placeholder:"Key"}),n.jsx("button",{onClick:H,className:"btn btn-search",children:"Search"})]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:_,className:"btn btn-clear",children:"Clear Table"})}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Items"}),n.jsxs("span",{className:"info-value",children:[r,"/",i]})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Load"}),n.jsxs("span",{className:"info-value",style:{color:l>=.7?"#f59e0b":"inherit"},children:[(l*100).toFixed(0),"%"]})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Collisions"}),n.jsx("span",{className:"info-value",style:{color:c>0?"#f59e0b":"inherit"},children:c})]})]}),n.jsxs("div",{className:"rehash-info-box",children:[n.jsx(Ph,{size:16}),n.jsxs("div",{children:[n.jsx("strong",{children:"Rehashing Threshold: 70%"}),n.jsx("p",{children:"In practice, hash tables rehash (double capacity) when load factor reaches ~0.7 to maintain O(1) performance."}),l>=.7?n.jsxs("span",{className:"rehash-warning",children:["Current load (",(l*100).toFixed(0),"%) exceeds threshold!"]}):n.jsxs("span",{className:"rehash-safe",children:["Currently safe (",(l*100).toFixed(0),"% < 70%)"]})]})]}),n.jsx(Ae,{message:d})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Hash Table"}),m&&n.jsxs("div",{className:"hash-demo",children:[n.jsxs("div",{className:"hash-demo-item",children:[n.jsx("span",{className:"hash-demo-label",children:"Key:"}),n.jsxs("span",{className:"hash-demo-key",children:['"',m,'"']})]}),n.jsx(se,{className:"hash-demo-arrow"}),n.jsx("div",{className:"hash-demo-item",children:n.jsx("span",{className:"hash-demo-label",children:"hash()"})}),n.jsx(se,{className:"hash-demo-arrow"}),n.jsxs("div",{className:"hash-demo-item",children:[n.jsx("span",{className:"hash-demo-label",children:"Slot:"}),n.jsx("span",{className:"hash-demo-index",children:B(m)})]})]}),I&&n.jsxs("div",{className:"collision-banner",children:[n.jsx(kn,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Collision Detected!"}),n.jsxs("p",{children:['"',I.key,'" hashed to slot ',n.jsx("span",{className:"slot-badge original",children:I.originalSlot}),I.probedSlots.length>1&&n.jsxs(n.Fragment,{children:[" ","- Probed: ",I.probedSlots.map((O,S)=>n.jsxs("span",{children:[n.jsx("span",{className:`slot-badge ${S===I.probedSlots.length-1?"final":"probed"}`,children:O}),S<I.probedSlots.length-1&&" > "]},S))]})]})]})]}),n.jsx("div",{className:"ht-visual",children:!e||e.length===0?n.jsx("div",{className:"ht-empty",children:"Hash table is empty. Insert some key-value pairs!"}):n.jsx("div",{className:"ht-buckets",children:e.map((O,S)=>{const M=V.includes(S),z=I&&I.originalSlot===S,C=I&&I.finalSlot===S;return n.jsxs("div",{className:`ht-row ${O?"filled":"empty"} 
                        ${E===S?"highlighted":""} 
                        ${D&&O&&O[0]===D?"just-inserted":""}
                        ${M?"probed":""}
                        ${z?"original-hash":""}
                        ${C?"final-slot":""}`,children:[M&&n.jsx("div",{className:"probe-indicator",children:z?"X":C?"O":">"}),n.jsx("div",{className:`ht-key-box ${O?"has-key":""}`,children:O&&n.jsx("span",{className:"ht-key",children:O[0]})}),n.jsx("div",{className:"ht-arrow",children:O&&n.jsx(se,{size:20})}),n.jsx("div",{className:`ht-index ${z?"collision-index":""}`,children:S}),n.jsx("div",{className:`ht-value-box ${O?"has-value":""}`,children:O?n.jsx("span",{className:"ht-value",children:O[1]}):n.jsx("span",{className:"ht-empty-slot",children:"—"})})]},S)})})}),n.jsxs("div",{className:"ht-legend",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color key-color"}),n.jsx("span",{children:"Key"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color index-color"}),n.jsx("span",{children:"Index"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color value-color"}),n.jsx("span",{children:"Value"})]}),V.length>0&&n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color probe-color"}),n.jsx("span",{children:"Probing Path"})]})]})]})]}),n.jsx(me,{dataStructure:"hashtable"})]})}const Cx={title:"What is Chaining?",description:"Chaining handles collisions by storing multiple key-value pairs in a linked list at each slot.",codeExample:"slot[hash] → [key1, val1] → [key2, val2] → ...",analogy:"Like a coat rack - multiple coats can hang on the same hook!"},Tx={title:"Chaining vs Probing",chaining:{label:"Chaining:",color:"#22c55e",points:["Uses linked lists","Load factor can exceed 1.0"]},probing:{label:"Probing:",color:"#f59e0b",points:["Finds next empty slot","Load factor must stay below 1.0"]},summary:"Chaining is simpler and handles high load factors better, but uses extra memory for pointers."},Lx={title:"Chaining Advantage",description:"With chaining, load factor can exceed 1.0 because each slot can hold multiple items in a chain.",highLoadThreshold:1.5,highLoadMessage:"High load ({loadFactor}) - chains getting long!",safeMessage:"Load factor: {loadFactor}"},_x={title:"Rehash Table",description:"Doubles the table capacity and redistributes all items to reduce chain lengths.",buttonText:"Rehash",recommendThreshold:1.5},Ex=[{type:"color",className:"key-color",label:"Key"},{type:"color",className:"index-color",label:"Index"},{type:"color",className:"value-color",label:"Value"},{type:"icon",icon:"Link",color:"#8b5cf6",label:"Chain (Linked List)"}],Ox={insert:{label:"Insert Key-Value",keyPlaceholder:"Key",valuePlaceholder:"Value",buttonText:"Insert"},delete:{label:"Delete Key",placeholder:"Key",buttonText:"Delete"},search:{label:"Search Key",placeholder:"Key",buttonText:"Search"},clear:{buttonText:"Clear Table"},rehash:{buttonText:"Rehash"}},Rx={items:"Items",capacity:"Capacity",load:"Load",collisions:"Collisions"},Px={emptyTable:"Hash table is empty. Insert some key-value pairs!",insertSuccess:'Inserted "{key}" at slot {index}',insertUpdated:'Updated "{key}" at slot {index}',insertCollision:'Collision! Added "{key}" to chain at slot {index}',deleteSuccess:'Deleted "{key}"',searchFound:'Found: "{key}" = {value}',searchNotFound:'Key "{key}" not found',clearSuccess:"Hashtable cleared!",rehashSuccess:"Rehashed! Capacity: {oldCapacity} -> {newCapacity}",rehashEmpty:"Nothing to rehash - table is empty!",errorNoKey:"Please enter a key!",errorNoKeyValue:"Please enter both key and value!",errorInsert:"Error inserting. Is Flask running?",errorDelete:"Error deleting. Is Flask running?",errorSearch:"Error searching item",errorClear:"Error clearing hashtable",errorRehash:"Error rehashing. Is Flask running?"},Y={concept:Cx,comparison:Tx,chainingAdvantage:Lx,rehash:_x,legend:Ex,operations:Ox,infoLabels:Rx,messages:Px};function Ix(){const[e,t]=u.useState([]),[r,s]=u.useState(0),[i,a]=u.useState(0),[l,o]=u.useState(0),[c,h]=u.useState(0),{message:d,showMessage:p}=Fe(3e3),[m,b]=u.useState(""),[w,k]=u.useState(""),[j,f]=u.useState(""),[g,v]=u.useState(""),[E,y]=u.useState(null),[V,T]=u.useState(null),[D,A]=u.useState(!1);u.useEffect(()=>{I()},[]);const I=async()=>{try{const R=await ae("/api/hashtable_chaining");t(R.table||[]),s(R.size||0),a(R.capacity||0),o(R.load_factor||0),h(R.collision_count||0)}catch(R){console.error("Error loading hashtable:",R)}},q=R=>{if(!i||i===0)return 0;let H=0;for(let _=0;_<R.length;_++)H=(H*31+R.charCodeAt(_))%i;return H},K=async()=>{if(!m.trim()||!w.trim()){p(Y.messages.errorNoKeyValue,"error");return}try{const R=await Z("/api/hashtable_chaining/insert",{key:m.trim(),value:w.trim()});if(R.error){p(R.error,"error");return}await I(),T(m.trim()),R.updated?p(Y.messages.insertUpdated.replace("{key}",m).replace("{index}",R.index),"info"):R.collision?p(Y.messages.insertCollision.replace("{key}",m).replace("{index}",R.index),"warning"):p(Y.messages.insertSuccess.replace("{key}",m).replace("{index}",R.index),"success"),y(R.index),setTimeout(()=>{y(null),T(null)},3e3),b(""),k("")}catch{p(Y.messages.errorInsert,"error")}},B=async()=>{if(!j.trim()){p(Y.messages.errorNoKey,"error");return}try{const R=await Z("/api/hashtable_chaining/delete",{key:j.trim()});if(R.error){p(R.error,"error");return}await I(),p(Y.messages.deleteSuccess.replace("{key}",j),"success"),f("")}catch{p(Y.messages.errorDelete,"error")}},$=async()=>{if(!g.trim()){p(Y.messages.errorNoKey,"error");return}try{const R=await ae(`/api/hashtable_chaining/get?key=${encodeURIComponent(g.trim())}`);if(R.error){p(R.error,"error");return}R.found?p(Y.messages.searchFound.replace("{key}",g).replace("{value}",R.value),"success"):p(Y.messages.searchNotFound.replace("{key}",g),"error"),v("")}catch{p(Y.messages.errorSearch,"error")}},x=async()=>{try{await Z("/api/hashtable_chaining/clear",{}),await I(),y(null),T(null),p(Y.messages.clearSuccess,"success")}catch{p(Y.messages.errorClear,"error")}};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"intro-left",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Ce,{className:"icon-sm"}),n.jsx("span",{children:Y.concept.title})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"Chaining"})," ",Y.concept.description.replace("Chaining ","")]}),n.jsx("div",{style:{background:"var(--bg-tertiary)",padding:"0.75rem",borderRadius:"8px",marginTop:"0.5rem",fontFamily:"monospace",fontSize:"0.9rem"},children:n.jsx("div",{children:Y.concept.codeExample})}),n.jsxs("div",{className:"concept-analogy",style:{marginTop:"0.75rem"},children:[n.jsx(xe,{}),n.jsx("span",{children:Y.concept.analogy})]})]})]}),n.jsxs("div",{className:"concept-box",style:{marginTop:"1rem"},children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Bn,{className:"icon-sm",style:{color:"#3b82f6"}}),n.jsx("span",{children:Y.comparison.title})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",fontSize:"0.85rem"},children:[n.jsxs("div",{children:[n.jsx("strong",{style:{color:Y.comparison.chaining.color},children:Y.comparison.chaining.label}),Y.comparison.chaining.points.map((R,H)=>n.jsx("div",{style:{marginTop:"0.25rem"},children:R},H))]}),n.jsxs("div",{children:[n.jsx("strong",{style:{color:Y.comparison.probing.color},children:Y.comparison.probing.label}),Y.comparison.probing.points.map((R,H)=>n.jsx("div",{style:{marginTop:"0.25rem"},children:R},H))]})]}),n.jsx("p",{style:{marginTop:"0.75rem",fontSize:"0.85rem"},children:Y.comparison.summary})]})]})]}),n.jsx(fe,{context:"Hash Table with Chaining"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Operations"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:Y.operations.insert.label}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",value:m,onChange:R=>b(R.target.value),placeholder:Y.operations.insert.keyPlaceholder}),n.jsx("input",{type:"text",value:w,onChange:R=>k(R.target.value),onKeyDown:R=>R.key==="Enter"&&K(),placeholder:Y.operations.insert.valuePlaceholder}),n.jsx("button",{onClick:K,className:"btn btn-insert",children:Y.operations.insert.buttonText})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:Y.operations.delete.label}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",value:j,onChange:R=>f(R.target.value),onKeyDown:R=>R.key==="Enter"&&B(),placeholder:Y.operations.delete.placeholder}),n.jsx("button",{onClick:B,className:"btn btn-delete",children:Y.operations.delete.buttonText})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:Y.operations.search.label}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",value:g,onChange:R=>v(R.target.value),onKeyDown:R=>R.key==="Enter"&&$(),placeholder:Y.operations.search.placeholder}),n.jsx("button",{onClick:$,className:"btn btn-search",children:Y.operations.search.buttonText})]})]}),n.jsx("div",{className:"operation-group",style:{display:"flex",gap:"0.5rem"},children:n.jsx("button",{onClick:x,className:"btn btn-clear",children:Y.operations.clear.buttonText})}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:Y.infoLabels.items}),n.jsx("span",{className:"info-value",children:r})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:Y.infoLabels.capacity}),n.jsx("span",{className:"info-value",children:i})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:Y.infoLabels.load}),n.jsx("span",{className:"info-value",style:{color:l>=1?"#f59e0b":"inherit"},children:l.toFixed(2)})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:Y.infoLabels.collisions}),n.jsx("span",{className:"info-value",style:{color:c>0?"#f59e0b":"inherit"},children:c})]})]}),n.jsxs("div",{className:"rehash-info-box",children:[n.jsx(rs,{size:16}),n.jsxs("div",{children:[n.jsx("strong",{children:Y.chainingAdvantage.title}),n.jsx("p",{children:Y.chainingAdvantage.description}),l>=Y.chainingAdvantage.highLoadThreshold?n.jsxs("div",{className:"rehash-recommend",children:[n.jsx(To,{size:14}),n.jsx("span",{className:"rehash-warning",children:Y.chainingAdvantage.highLoadMessage.replace("{loadFactor}",l.toFixed(2))})]}):n.jsx("span",{className:"rehash-safe",children:Y.chainingAdvantage.safeMessage.replace("{loadFactor}",l.toFixed(2))})]})]}),n.jsx(Ae,{message:d})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Hash Table (Chaining)"}),m&&n.jsxs("div",{className:"hash-demo",children:[n.jsxs("div",{className:"hash-demo-item",children:[n.jsx("span",{className:"hash-demo-label",children:"Key:"}),n.jsxs("span",{className:"hash-demo-key",children:['"',m,'"']})]}),n.jsx(se,{className:"hash-demo-arrow"}),n.jsx("div",{className:"hash-demo-item",children:n.jsx("span",{className:"hash-demo-label",children:"hash()"})}),n.jsx(se,{className:"hash-demo-arrow"}),n.jsxs("div",{className:"hash-demo-item",children:[n.jsx("span",{className:"hash-demo-label",children:"Slot:"}),n.jsx("span",{className:"hash-demo-index",children:q(m)})]})]}),n.jsx("div",{className:"ht-chaining-visual",children:!e||e.length===0?n.jsx("div",{className:"ht-empty",children:Y.messages.emptyTable}):n.jsx("div",{className:"ht-chaining-buckets",children:e.map((R,H)=>{const _=E===H,O=R&&Array.isArray(R)&&R.length>0,S=O?R.length:0;return n.jsxs("div",{className:`ht-chaining-row ${O?"filled":"empty"} ${_?"highlighted":""}`,children:[n.jsxs("div",{className:"ht-chaining-index",children:[n.jsx("span",{className:"index-number",children:H}),S>1&&n.jsx("span",{className:"chain-count",children:S})]}),n.jsx("div",{className:"ht-chaining-arrow-container",children:n.jsx(se,{size:18,className:"bucket-arrow"})}),n.jsx("div",{className:"ht-chaining-content",children:O?n.jsx("div",{className:"ht-chaining-chain",children:R.map((M,z)=>{const C=V&&M.key===V;return n.jsxs($e.Fragment,{children:[n.jsxs("div",{className:`ht-chaining-node ${C?"just-inserted":""} ${z>0?"collision-node":""}`,children:[n.jsx("div",{className:"node-key",children:M.key}),n.jsx("div",{className:"node-separator"}),n.jsx("div",{className:"node-value",children:M.value})]}),z<R.length-1&&n.jsx("div",{className:"chain-link",children:n.jsx(se,{size:16})})]},z)})}):n.jsx("div",{className:"ht-chaining-empty-slot",children:n.jsx("span",{children:"Empty"})})})]},H)})})}),n.jsx("div",{className:"ht-legend",children:Y.legend.map((R,H)=>n.jsxs("div",{className:"legend-item",children:[R.type==="color"?n.jsx("div",{className:`legend-color ${R.className}`}):n.jsx(rs,{size:14,style:{color:R.color}}),n.jsx("span",{children:R.label})]},H))})]})]}),n.jsx(me,{dataStructure:"hashtableChaining"})]})}function zx(){const[e,t]=u.useState([]),[r,s]=u.useState(0),[i,a]=u.useState(0),[l,o]=u.useState(0),{message:c,showMessage:h}=Fe(3e3),[d,p]=u.useState(""),[m,b]=u.useState(""),[w,k]=u.useState(""),[j,f]=u.useState(""),[g,v]=u.useState(null),[E,y]=u.useState([]),[V,T]=u.useState(null),[D,A]=u.useState(null);u.useEffect(()=>{I()},[]);const I=async()=>{try{const H=await ae("/api/hashtable_quadratic");t(H.table||[]),s(H.size||0),a(H.capacity||0),o(H.load_factor||0)}catch(H){console.error("Error loading hashtable:",H)}},q=H=>{if(!i||i===0)return 0;let _=0;for(let O=0;O<H.length;O++)_=(_*31+H.charCodeAt(O))%i;return _},K=(H,_)=>{var M;const O=q(H),S=[];for(let z=0;z<i;z++){const C=(O+z*z)%i;if(S.push({index:C,i:z,formula:`(${O} + ${z}²) % ${i} = ${C}`}),!_[C]||_[C][0]===H)break}return{originalHash:O,path:S,finalSlot:(M=S[S.length-1])==null?void 0:M.index}},B=async()=>{if(!d.trim()||!m.trim()){h("Please enter both key and value!","error");return}const H=i>0?q(d.trim()):0,_=e.length>0&&e[H]&&e[H]!=="DELETED"&&e[H][0]!==d.trim();let O=null;_&&(O=K(d.trim(),e));try{const S=await Z("/api/hashtable_quadratic/insert",{key:d.trim(),value:m.trim()});if(S.error){h(S.error,"error");return}await I(),T(d.trim()),_&&O?(A({key:d.trim(),originalSlot:O.originalHash,probedSlots:O.path,finalSlot:S.final_index}),y(O.path.map(M=>M.index)),h(`Collision! Quadratic probing: ${O.path.length} probe(s)`,"warning"),setTimeout(()=>{y([]),A(null)},5e3)):(h(`Inserted "${d}" → slot ${H}`,"success"),v(H),setTimeout(()=>v(null),2e3)),p(""),b(""),setTimeout(()=>T(null),3e3)}catch{h("Error inserting. Is Flask running?","error")}},$=async()=>{if(!w.trim()){h("Please enter a key!","error");return}try{const H=await Z("/api/hashtable_quadratic/delete",{key:w.trim()});if(H.error){h(H.error,"error");return}await I(),h(`Deleted "${w}"`,"success"),k("")}catch{h("Error deleting. Is Flask running?","error")}},x=async()=>{if(!j.trim()){h("Please enter a key!","error");return}try{const H=await ae(`/api/hashtable_quadratic/get?key=${encodeURIComponent(j.trim())}`);if(H.error){h(H.error,"error");return}H.found?h(`Found: "${j}" = ${H.value}`,"success"):h(`Key "${j}" not found`,"error"),f("")}catch{h("Error searching item","error")}},R=async()=>{try{await Z("/api/hashtable_quadratic/clear",{}),await I(),y([]),A(null),h("Hashtable cleared!","success")}catch{h("Error clearing hashtable","error")}};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"intro-left",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Ce,{className:"icon-sm"}),n.jsx("span",{children:"What is Quadratic Probing?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"Quadratic Probing"})," is a collision resolution technique where we probe at quadratically increasing intervals."]}),n.jsxs("div",{style:{background:"var(--bg-tertiary)",padding:"0.75rem",borderRadius:"8px",marginTop:"0.5rem",fontFamily:"monospace",fontSize:"0.9rem"},children:[n.jsx("div",{children:"probe(i) = (hash + i²) % capacity"}),n.jsx("div",{style:{color:"var(--text-muted)",marginTop:"0.25rem"},children:"i = 0, 1, 4, 9, 16, 25..."})]}),n.jsxs("div",{className:"concept-analogy",style:{marginTop:"0.75rem"},children:[n.jsx(xe,{}),n.jsxs("span",{children:["Unlike linear probing, we jump further each time – reducing ",n.jsx("strong",{children:"clustering"}),"!"]})]})]})]}),n.jsxs("div",{className:"concept-box",style:{marginTop:"1rem"},children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Bn,{className:"icon-sm",style:{color:"#3b82f6"}}),n.jsx("span",{children:"Linear vs Quadratic"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",fontSize:"0.85rem"},children:[n.jsxs("div",{children:[n.jsx("strong",{style:{color:"#f59e0b"},children:"Linear:"}),n.jsx("div",{style:{fontFamily:"monospace",marginTop:"0.25rem"},children:"+1, +2, +3, +4..."})]}),n.jsxs("div",{children:[n.jsx("strong",{style:{color:"#22c55e"},children:"Quadratic:"}),n.jsx("div",{style:{fontFamily:"monospace",marginTop:"0.25rem"},children:"+1, +4, +9, +16..."})]})]}),n.jsx("p",{style:{marginTop:"0.75rem",fontSize:"0.85rem"},children:"Quadratic probing spreads entries more evenly but may not find empty slots if table is over 50% full."})]})]})]}),n.jsx(fe,{context:"Hash Table with Quadratic Probing"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Operations"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Insert Key-Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",value:d,onChange:H=>p(H.target.value),placeholder:"Key"}),n.jsx("input",{type:"text",value:m,onChange:H=>b(H.target.value),onKeyPress:H=>H.key==="Enter"&&B(),placeholder:"Value"}),n.jsx("button",{onClick:B,className:"btn btn-insert",children:"Insert"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Delete Key"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",value:w,onChange:H=>k(H.target.value),onKeyPress:H=>H.key==="Enter"&&$(),placeholder:"Key"}),n.jsx("button",{onClick:$,className:"btn btn-delete",children:"Delete"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Search Key"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",value:j,onChange:H=>f(H.target.value),onKeyPress:H=>H.key==="Enter"&&x(),placeholder:"Key"}),n.jsx("button",{onClick:x,className:"btn btn-search",children:"Search"})]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:R,className:"btn btn-clear",children:"Clear Table"})}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Items"}),n.jsxs("span",{className:"info-value",children:[r,"/",i]})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Load"}),n.jsxs("span",{className:"info-value",style:{color:l>=.5?"#f59e0b":"inherit"},children:[(l*100).toFixed(0),"%"]})]})]}),n.jsxs("div",{className:"rehash-info-box",children:[n.jsx(Ph,{size:16}),n.jsxs("div",{children:[n.jsx("strong",{children:"Rehashing Threshold: 50%"}),n.jsx("p",{children:"Quadratic probing requires lower load factor (~0.5) to guarantee finding empty slots."}),l>=.5?n.jsxs("span",{className:"rehash-warning",children:["Load (",(l*100).toFixed(0),"%) at threshold!"]}):n.jsxs("span",{className:"rehash-safe",children:["Currently safe (",(l*100).toFixed(0),"% < 50%)"]})]})]}),n.jsx(Ae,{message:c})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Hash Table (Quadratic Probing)"}),d&&n.jsxs("div",{className:"hash-demo",children:[n.jsxs("div",{className:"hash-demo-item",children:[n.jsx("span",{className:"hash-demo-label",children:"Key:"}),n.jsxs("span",{className:"hash-demo-key",children:['"',d,'"']})]}),n.jsx(se,{className:"hash-demo-arrow"}),n.jsx("div",{className:"hash-demo-item",children:n.jsx("span",{className:"hash-demo-label",children:"hash()"})}),n.jsx(se,{className:"hash-demo-arrow"}),n.jsxs("div",{className:"hash-demo-item",children:[n.jsx("span",{className:"hash-demo-label",children:"Slot:"}),n.jsx("span",{className:"hash-demo-index",children:q(d)})]})]}),D&&n.jsxs("div",{className:"collision-banner",children:[n.jsx(kn,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Quadratic Probing!"}),n.jsxs("p",{children:['"',D.key,'" hashed to slot ',n.jsx("span",{className:"slot-badge original",children:D.originalSlot})]}),n.jsx("div",{style:{marginTop:"0.5rem",fontSize:"0.8rem",fontFamily:"monospace"},children:D.probedSlots.map((H,_)=>n.jsxs("div",{style:{marginBottom:"0.25rem"},children:["i=",H.i,": ",H.formula,_===D.probedSlots.length-1&&n.jsx("span",{style:{color:"#4ade80"},children:" [FOUND]"})]},_))})]})]}),n.jsx("div",{className:"ht-visual",children:!e||e.length===0?n.jsx("div",{className:"ht-empty",children:"Hash table is empty. Insert some key-value pairs!"}):n.jsx("div",{className:"ht-buckets",children:e.map((H,_)=>{const O=E.includes(_),S=D&&D.originalSlot===_,M=D&&D.finalSlot===_,z=H==="DELETED",C=H&&H!=="DELETED";return n.jsxs("div",{className:`ht-row ${C?"filled":"empty"} 
                        ${z?"deleted":""}
                        ${g===_?"highlighted":""} 
                        ${V&&C&&H[0]===V?"just-inserted":""}
                        ${O?"probed":""}
                        ${S?"original-hash":""}
                        ${M?"final-slot":""}`,children:[O&&n.jsx("div",{className:"probe-indicator",children:S?"X":M?"O":">"}),n.jsxs("div",{className:`ht-key-box ${C?"has-key":""} ${z?"deleted-slot":""}`,children:[C&&n.jsx("span",{className:"ht-key",children:H[0]}),z&&n.jsx("span",{className:"ht-deleted-text",children:"DEL"})]}),n.jsx("div",{className:"ht-arrow",children:C&&n.jsx(se,{size:20})}),n.jsx("div",{className:`ht-index ${S?"collision-index":""}`,children:_}),n.jsx("div",{className:`ht-value-box ${C?"has-value":""} ${z?"deleted-slot":""}`,children:C?n.jsx("span",{className:"ht-value",children:H[1]}):z?n.jsx("span",{className:"ht-deleted-text",children:"DELETED"}):n.jsx("span",{className:"ht-empty-slot",children:"—"})})]},_)})})}),n.jsxs("div",{className:"ht-legend",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color key-color"}),n.jsx("span",{children:"Key"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color index-color"}),n.jsx("span",{children:"Index"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color value-color"}),n.jsx("span",{children:"Value"})]}),E.length>0&&n.jsxs("div",{className:"legend-item",children:[n.jsx("div",{className:"legend-color probe-color"}),n.jsx("span",{children:"Probe Path"})]})]})]})]}),n.jsx(me,{dataStructure:"hashtable"})]})}const $t=7,Mx={inorder:{name:"Inorder Traversal",order:"Left → Root → Right",description:"Visit left subtree, process root, then visit right subtree. For BST, this produces sorted order.",useCase:["Get sorted elements","Validate BST","Create mirror image"],complexity:{time:"O(n)",space:"O(h)"}},preorder:{name:"Preorder Traversal",order:"Root → Left → Right",description:"Process root first, then recursively visit left and right subtrees. Useful for copying trees.",useCase:["Copy tree structure","Serialize/deserialize","Prefix expressions"],complexity:{time:"O(n)",space:"O(h)"}},postorder:{name:"Postorder Traversal",order:"Left → Right → Root",description:"Visit left subtree, right subtree, then process root. Essential for deleting nodes safely.",useCase:["Delete nodes safely","Calculate folder sizes","Postfix expressions"],complexity:{time:"O(n)",space:"O(h)"}},levelorder:{name:"Level Order Traversal",order:"Level by Level (BFS)",description:"Visit nodes level by level using a queue. Perfect for finding shortest paths.",useCase:["Shortest path","Level-wise printing","Nodes at distance K"],complexity:{time:"O(n)",space:"O(w)"}}},yl=(e,t=[])=>(e&&(yl(e.left,t),t.push(e.data),yl(e.right,t)),t),jl=(e,t=[])=>(e&&(t.push(e.data),jl(e.left,t),jl(e.right,t)),t),Nl=(e,t=[])=>(e&&(Nl(e.left,t),Nl(e.right,t),t.push(e.data)),t),Vx=e=>{if(!e)return[];const t=[],r=[e];for(;r.length;){const s=r.shift();t.push(s.data),s.left&&r.push(s.left),s.right&&r.push(s.right)}return t},kl=(e,t=0)=>e?Math.max(kl(e.left,t+1),kl(e.right,t+1)):t-1;function Ax(){return n.jsxs("div",{className:"intro-left",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Ce,{className:"icon-sm"}),n.jsx("span",{children:"What is a Binary Tree?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:["A ",n.jsx("strong",{children:"Binary Tree"})," is a hierarchical data structure where each node has at most ",n.jsx("strong",{children:"two children"}),": left and right."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(xe,{}),n.jsxs("span",{children:["Think of a ",n.jsx("strong",{children:"family tree"})," – each person can have up to two children!"]})]}),n.jsxs("div",{className:"concept-key-terms",children:[n.jsx("h4",{children:"Key Terms:"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Node:"})," Contains data and links to children"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Root:"})," The topmost node (no parent)"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Leaf:"})," A node with no children"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Height:"})," Longest path from root to leaf"]})]})]})]})]}),n.jsxs("div",{className:"concept-box",style:{marginTop:"1rem"},children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Bn,{className:"icon-sm"}),n.jsx("span",{children:"What are Tree Traversals?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"Tree Traversal"})," is visiting each node ",n.jsx("strong",{children:"exactly once"})," in a specific order."]}),n.jsxs("div",{className:"concept-why-traverse",children:[n.jsx("h4",{children:"Why Traverse?"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Search:"})," Find specific data"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Copy:"})," Duplicate the tree"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Evaluate:"})," Calculate expressions"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Delete:"})," Remove nodes properly"]})]})]}),n.jsxs("div",{className:"concept-analogy",style:{marginTop:"0.75rem"},children:[n.jsx(xe,{}),n.jsx("span",{children:"Like reading a book – you can read in different orders based on your needs!"})]})]})]})]})}function Fx({insertValue:e,deleteValue:t,size:r,height:s,message:i,tree:a,isAnimating:l,visitedNodes:o,onInsertValueChange:c,onDeleteValueChange:h,onInsert:d,onDelete:p,onTraversal:m,onClear:b,onResetTraversal:w}){const k=(j,f)=>{const g=j.target.value;(g===""||g==="-"||/^-?\d*\.?\d*$/.test(g))&&f(g)};return n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Binary Tree Traversals"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"insertValue",children:"Insert Node"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"insertValue",value:e,onChange:j=>k(j,c),onKeyPress:j=>j.key==="Enter"&&d(),placeholder:"Enter a number"}),n.jsx("button",{onClick:d,className:"btn btn-insert",children:"Insert"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"deleteValue",children:"Delete Node"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"deleteValue",value:t,onChange:j=>k(j,h),onKeyPress:j=>j.key==="Enter"&&p(),placeholder:"Enter a number"}),n.jsx("button",{onClick:p,className:"btn btn-delete",children:"Delete"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Traversals"}),n.jsx("div",{className:"btn-group",children:["inorder","preorder","postorder","levelorder"].map(j=>n.jsx("button",{onClick:()=>m(j),className:"btn btn-traversal",disabled:l||!a,children:j==="levelorder"?"Level Order":j.charAt(0).toUpperCase()+j.slice(1)},j))}),o.length>0&&!l&&n.jsx("button",{onClick:w,className:"btn btn-secondary",style:{marginTop:"0.5rem",width:"100%"},children:"Reset Colors"})]}),n.jsxs("div",{className:"traversal-legend",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--default"}),n.jsx("span",{children:"Not visited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--visiting"}),n.jsx("span",{children:"Visiting"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--visited"}),n.jsx("span",{children:"Visited"})]})]}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Size:"}),n.jsx("span",{className:"info-value",children:r})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Height:"}),n.jsx("span",{className:"info-value",children:s})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Max Size:"}),n.jsx("span",{className:"info-value",children:$t})]})]}),r>=$t*.8&&r<$t&&n.jsxs("div",{className:"warning-box",children:[n.jsx(kn,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Tree is filling up!"})," You're at ",r,"/",$t," nodes."]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:b,className:"btn btn-clear",children:"Clear Tree"})}),i&&n.jsx("div",{className:`message message-${i.includes("Error")||i.includes("error")?"error":/success|complete|Inserted|Deleted|cleared/i.test(i)?"success":i.includes("full")?"warning":"info"}`,children:i})]})}function Dx({tree:e,currentNode:t,visitedNodes:r}){const s=c=>{const h=t===c,d=r.includes(c);return{color:h?"#f59e0b":d?"#10b981":"#6366f1",glow:h?"drop-shadow(0 0 12px #f59e0b) drop-shadow(0 0 20px #f59e0b)":d?"drop-shadow(0 0 6px #10b981)":"none",radius:h?30:25,stroke:h?3:2,fontSize:h?16:14,fontWeight:h?"bold":"normal"}},i=(c,h,d,p,m)=>{if(!c)return[];const b=Math.pow(2,m-p)*50,w=s(c.data),k=[];return c.left&&(k.push(n.jsx("line",{x1:h,y1:d,x2:h-b,y2:d+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:"2"},`l-${c.data}-l`)),k.push(...i(c.left,h-b,d+100,p+1,m))),c.right&&(k.push(n.jsx("line",{x1:h,y1:d,x2:h+b,y2:d+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:"2"},`l-${c.data}-r`)),k.push(...i(c.right,h+b,d+100,p+1,m))),k.push(n.jsxs("g",{style:{filter:w.glow,transition:"all 0.3s ease"},children:[n.jsx("circle",{cx:h,cy:d,r:w.radius,fill:w.color,stroke:"white",strokeWidth:w.stroke,style:{transition:"all 0.3s ease"}}),n.jsx("text",{x:h,y:d,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:w.fontSize,fontWeight:w.fontWeight,children:c.data})]},`n-${c.data}-${h}`)),k};if(!e)return n.jsx("div",{className:"tree-empty",children:"Tree is empty. Insert some nodes!"});const a=kl(e),l=(a+1)*100+50,o=Math.max(800,Math.pow(2,Math.max(a,1))*80);return n.jsx("svg",{width:o,height:l,className:"tree-svg",children:i(e,o/2,50,0,a)})}function $x({traversalType:e,traversalResult:t,isAnimating:r,traversalComplete:s}){if(!e||t.length===0&&!r)return null;const i=Mx[e];return n.jsxs("div",{className:"traversal-output-panel",children:[n.jsxs("div",{style:{marginBottom:"1rem"},children:[n.jsxs("h3",{className:"traversal-title",children:[i==null?void 0:i.name,r&&n.jsx("span",{className:"traversal-badge traversal-badge--running",children:"Running..."}),s&&n.jsx("span",{className:"traversal-badge traversal-badge--complete",children:"Complete"})]}),n.jsxs("p",{className:"traversal-order",children:[n.jsx("strong",{children:"Order:"})," ",i==null?void 0:i.order]}),n.jsx("p",{className:"traversal-description",children:i==null?void 0:i.description})]}),n.jsxs("div",{className:"traversal-output-box",children:[n.jsx("div",{className:"traversal-output-label",children:"Output Sequence:"}),n.jsx("div",{className:"traversal-sequence-container",children:t.length===0&&r?n.jsx("span",{style:{color:"var(--text-muted)",fontStyle:"italic"},children:"Traversing..."}):t.map((a,l)=>n.jsx("span",{className:`traversal-node ${l===t.length-1&&!s?"traversal-node--current":"traversal-node--complete"}`,children:a},l))})]}),s&&t.length>0&&n.jsxs("div",{className:"traversal-array-section",children:[n.jsx("div",{className:"traversal-array-label",children:"Array Output:"}),n.jsxs("code",{className:"traversal-array-output",children:["[",t.join(", "),"]"]}),n.jsxs("p",{className:"traversal-use-case",children:["Use case: ",i==null?void 0:i.useCase.join(" • ")]}),n.jsxs("div",{className:"traversal-complexity",children:[n.jsx("strong",{children:"Time:"})," ",n.jsx("code",{className:"complexity-value",children:i==null?void 0:i.complexity.time})," (visits each node once)",n.jsx("br",{}),n.jsx("strong",{children:"Space:"})," ",n.jsx("code",{className:"complexity-value",children:i==null?void 0:i.complexity.space})," (recursion stack/queue)"]})]})]})}function Bx(){const[e,t]=u.useState(null),[r,s]=u.useState(0),[i,a]=u.useState(-1),[l,o]=u.useState(""),[c,h]=u.useState(""),[d,p]=u.useState(""),[m,b]=u.useState([]),[w,k]=u.useState(!1),[j,f]=u.useState(null),[g,v]=u.useState([]),[E,y]=u.useState(null),[V,T]=u.useState(!1);u.useEffect(()=>{D()},[]);const D=async()=>{try{const R=await(await fetch("/api/binarytree")).json();t(R.tree),s(R.size||0),a(R.height!==void 0?R.height:-1)}catch(x){console.error("Error loading tree:",x)}},A=x=>{p(x),setTimeout(()=>p(""),3e3)},I=async()=>{if(!l.trim()){A("Please enter a number!");return}const x=Number(l);if(isNaN(x)){A("Please enter a valid number!");return}if(r>=$t){A(`Tree is full! Maximum size is ${$t} nodes.`);return}try{const H=await(await fetch("/api/binarytree/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:x})})).json();if(H.error){A(H.error);return}t(H.tree),s(H.size||0),a(H.height!==void 0?H.height:-1),A(`Inserted ${x}`),o("")}catch{A("Error inserting node")}},q=async()=>{if(!c.trim()){A("Please enter a number!");return}const x=Number(c);if(isNaN(x)){A("Please enter a valid number!");return}try{const H=await(await fetch("/api/binarytree/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:x})})).json();if(H.error){A(H.error);return}t(H.tree),s(H.size||0),a(H.height!==void 0?H.height:-1),A(`Deleted ${x}`),h("")}catch{A("Error deleting node")}},K=async()=>{try{await fetch("/api/binarytree/clear",{method:"POST"}),t(null),s(0),a(-1),$(),A("Tree cleared!")}catch{A("Error clearing tree")}},B=async x=>{if(!e){A("Tree is empty! Insert some nodes first.");return}k(!0),b([]),f(null),v([]),y(x),T(!1);let R=[];switch(x){case"inorder":R=yl(e);break;case"preorder":R=jl(e);break;case"postorder":R=Nl(e);break;case"levelorder":R=Vx(e);break;default:R=[]}if(R.length===0){A("Tree is empty!"),k(!1);return}for(let H=0;H<R.length;H++)f(R[H]),await new Promise(_=>setTimeout(_,600)),v(_=>[..._,R[H]]),b(_=>[..._,R[H]]),await new Promise(_=>setTimeout(_,200));f(null),T(!0),k(!1),A(`${x.charAt(0).toUpperCase()+x.slice(1)} traversal complete!`)},$=()=>{b([]),f(null),v([]),y(null),T(!1)};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsx(Ax,{}),n.jsx(fe,{context:"Binary Tree data structure and traversals"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsx(Fx,{insertValue:l,deleteValue:c,size:r,height:i,message:d,tree:e,isAnimating:w,visitedNodes:g,onInsertValueChange:o,onDeleteValueChange:h,onInsert:I,onDelete:q,onTraversal:B,onClear:K,onResetTraversal:$}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Binary Tree Visualization"}),n.jsx("div",{className:"tree-container",children:n.jsx(Dx,{tree:e,currentNode:j,visitedNodes:g})}),n.jsx($x,{traversalType:E,traversalResult:m,isAnimating:w,traversalComplete:V})]})]}),n.jsx(me,{dataStructure:"binarytree"})]})}const Hx={title:"What is a Stack?",description:"A Stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle.",codeExample:"push(A) → push(B) → push(C) → pop() returns C",analogy:"Like a stack of plates - you can only take the top plate off first!"},qx={title:"Stack Properties",items:[{label:"Order",value:"LIFO (Last-In-First-Out)"},{label:"Access",value:"Top element only"},{label:"Insert",value:"Push to top - O(1)"},{label:"Remove",value:"Pop from top - O(1)"}]},Ux={title:"Common Use Cases",items:["Function call stack (recursion)","Undo/Redo operations","Browser back button","Expression evaluation","Syntax parsing"]},Kx={title:"Time Complexity",operations:[{name:"Push",time:"O(1)",description:"Add to top"},{name:"Pop",time:"O(1)",description:"Remove from top"},{name:"Peek",time:"O(1)",description:"View top element"},{name:"isEmpty",time:"O(1)",description:"Check if empty"},{name:"Search",time:"O(n)",description:"Find element"}]},Wx={push:{label:"Push Value",placeholder:"Value",buttonText:"Push"},pop:{buttonText:"Pop"},peek:{buttonText:"Peek"},clear:{buttonText:"Clear"}},Gx={size:"Size",top:"Top",capacity:"Capacity"},Qx={emptyStack:"Stack is empty. Push some values!",pushSuccess:'Pushed "{value}" to stack',popSuccess:'Popped "{value}" from stack',popEmpty:"Cannot pop - stack is empty!",peekSuccess:'Top element: "{value}"',peekEmpty:"Cannot peek - stack is empty!",clearSuccess:"Stack cleared!",errorNoValue:"Please enter a value!",errorPush:"Error pushing to stack",errorPop:"Error popping from stack",errorClear:"Error clearing stack",stackFull:"Stack is full!"},Xx=[{type:"color",className:"top-color",label:"Top Element"},{type:"color",className:"element-color",label:"Stack Element"}],Yx={concept:Hx,properties:qx,useCases:Ux,complexity:Kx,operations:Wx,infoLabels:Gx,messages:Qx,legend:Xx},Jx={title:"What is a Queue?",description:"A Queue is a linear data structure that follows the First-In-First-Out (FIFO) principle.",codeExample:"enqueue(A) → enqueue(B) → enqueue(C) → dequeue() returns A",analogy:"Like a line at a store - first person in line gets served first!"},Zx={title:"Queue Properties",items:[{label:"Order",value:"FIFO (First-In-First-Out)"},{label:"Access",value:"Front and Rear"},{label:"Insert",value:"Enqueue at rear - O(1)"},{label:"Remove",value:"Dequeue from front - O(1)"}]},ey={title:"Queue vs Stack",queue:{label:"Queue:",color:"#22c55e",points:["FIFO order","Two access points (front/rear)"]},stack:{label:"Stack:",color:"#3b82f6",points:["LIFO order","One access point (top)"]},summary:"Use Queue when order of processing matters (like task scheduling)."},ny={title:"Common Use Cases",items:["Task scheduling (CPU, print jobs)","Breadth-First Search (BFS)","Message queues","Request handling in servers","Buffering (streaming)"]},ty={title:"Time Complexity",operations:[{name:"Enqueue",time:"O(1)",description:"Add to rear"},{name:"Dequeue",time:"O(1)",description:"Remove from front"},{name:"Front",time:"O(1)",description:"View front element"},{name:"isEmpty",time:"O(1)",description:"Check if empty"},{name:"Search",time:"O(n)",description:"Find element"}]},ry={enqueue:{label:"Enqueue Value",placeholder:"Value",buttonText:"Enqueue"},dequeue:{buttonText:"Dequeue"},front:{buttonText:"Front"},clear:{buttonText:"Clear"}},sy={size:"Size",front:"Front",rear:"Rear",capacity:"Capacity"},iy={emptyQueue:"Queue is empty. Enqueue some values!",enqueueSuccess:'Enqueued "{value}"',dequeueSuccess:'Dequeued "{value}"',dequeueEmpty:"Cannot dequeue - queue is empty!",frontSuccess:'Front element: "{value}"',frontEmpty:"Cannot get front - queue is empty!",clearSuccess:"Queue cleared!",errorNoValue:"Please enter a value!",errorEnqueue:"Error enqueueing to queue",errorDequeue:"Error dequeueing from queue",errorClear:"Error clearing queue",queueFull:"Queue is full!"},ay=[{type:"color",className:"front-color",label:"Front"},{type:"color",className:"rear-color",label:"Rear"},{type:"color",className:"element-color",label:"Queue Element"}],ly={concept:Jx,properties:Zx,comparison:ey,useCases:ny,complexity:ty,operations:ry,infoLabels:sy,messages:iy,legend:ay},oy={title:"What is a Linked List?",description:"A Linked List is a linear data structure where elements are stored in nodes, each pointing to the next node.",codeExample:"HEAD → [A|→] → [B|→] → [C|→] → NULL",analogy:"Like a treasure hunt - each clue (node) points to the next location!"},cy={title:"Linked List Properties",items:[{label:"Structure",value:"Nodes with data + pointer"},{label:"Memory",value:"Non-contiguous allocation"},{label:"Size",value:"Dynamic (grows/shrinks)"},{label:"Access",value:"Sequential (no random access)"}]},dy={title:"Linked List vs Array",linkedlist:{label:"Linked List:",color:"#22c55e",points:["Dynamic size","O(1) insert/delete at known position","Extra memory for pointers"]},array:{label:"Array:",color:"#3b82f6",points:["Fixed size (usually)","O(1) random access by index","Contiguous memory"]},summary:"Use Linked List when you need frequent insertions/deletions and don't need random access."},uy={title:"Types of Linked Lists",items:[{name:"Singly Linked",description:"Each node points to next only"},{name:"Doubly Linked",description:"Nodes point to both next and previous"},{name:"Circular",description:"Last node points back to first"}]},hy={title:"Time Complexity",operations:[{name:"Access",time:"O(n)",description:"Traverse to find"},{name:"Search",time:"O(n)",description:"Linear search"},{name:"Insert (head)",time:"O(1)",description:"Add at beginning"},{name:"Insert (tail)",time:"O(n)",description:"Traverse then add"},{name:"Delete (head)",time:"O(1)",description:"Remove first"},{name:"Delete (by value)",time:"O(n)",description:"Find then remove"}]},py={insertHead:{label:"Insert at Head",placeholder:"Value",buttonText:"Insert Head"},insertTail:{label:"Insert at Tail",placeholder:"Value",buttonText:"Insert Tail"},delete:{label:"Delete Value",placeholder:"Value",buttonText:"Delete"},search:{label:"Search Value",placeholder:"Value",buttonText:"Search"},clear:{buttonText:"Clear"}},fy={size:"Size",head:"Head",tail:"Tail"},my={emptyList:"Linked list is empty. Insert some values!",insertHeadSuccess:'Inserted "{value}" at head',insertTailSuccess:'Inserted "{value}" at tail',deleteSuccess:'Deleted "{value}"',deleteNotFound:'Value "{value}" not found',searchFound:'Found "{value}" at position {position}',searchNotFound:'Value "{value}" not found',clearSuccess:"Linked list cleared!",errorNoValue:"Please enter a value!",errorInsert:"Error inserting value",errorDelete:"Error deleting value",errorSearch:"Error searching value",errorClear:"Error clearing list"},gy=[{type:"color",className:"head-color",label:"Head Node"},{type:"color",className:"node-color",label:"Node"},{type:"icon",icon:"ArrowRight",color:"#8b5cf6",label:"Pointer"}],vy={concept:oy,properties:cy,comparison:dy,types:uy,complexity:hy,operations:py,infoLabels:fy,messages:my,legend:gy},xy={title:"What is a Binary Tree?",description:"A Binary Tree is a hierarchical data structure where each node has at most two children (left and right).",codeExample:`       [5]
      /   \\
    [3]   [7]
   /  \\     \\
 [1]  [4]   [9]`,analogy:"Like a family tree - each person can have at most two children!"},yy={title:"Binary Tree Properties",items:[{label:"Structure",value:"Hierarchical (nodes + edges)"},{label:"Children",value:"At most 2 per node"},{label:"Root",value:"Topmost node (no parent)"},{label:"Leaf",value:"Node with no children"}]},jy={title:"Types of Binary Trees",items:[{name:"Full Binary Tree",description:"Every node has 0 or 2 children"},{name:"Complete Binary Tree",description:"All levels filled except possibly last"},{name:"Perfect Binary Tree",description:"All internal nodes have 2 children, leaves at same level"},{name:"Binary Search Tree",description:"Left < Parent < Right ordering"}]},Ny={title:"Tree Traversals",items:[{name:"Inorder",order:"Left → Root → Right",use:"BST gives sorted order"},{name:"Preorder",order:"Root → Left → Right",use:"Copy tree, prefix expression"},{name:"Postorder",order:"Left → Right → Root",use:"Delete tree, postfix expression"},{name:"Level Order",order:"Level by level (BFS)",use:"Print by levels"}]},ky={title:"Time Complexity (BST)",operations:[{name:"Search",average:"O(log n)",worst:"O(n)",description:"Find element"},{name:"Insert",average:"O(log n)",worst:"O(n)",description:"Add element"},{name:"Delete",average:"O(log n)",worst:"O(n)",description:"Remove element"},{name:"Traversal",average:"O(n)",worst:"O(n)",description:"Visit all nodes"}],note:"Worst case O(n) occurs when tree becomes a linked list (unbalanced)"},wy={title:"Common Use Cases",items:["Binary Search Trees (fast lookup)","Expression trees (parsing)","Huffman coding (compression)","Heaps (priority queues)","File system structure"]},by={insert:{label:"Insert Value",placeholder:"Value",buttonText:"Insert"},delete:{label:"Delete Value",placeholder:"Value",buttonText:"Delete"},search:{label:"Search Value",placeholder:"Value",buttonText:"Search"},traversals:{inorder:"Inorder",preorder:"Preorder",postorder:"Postorder",levelorder:"Level Order"},clear:{buttonText:"Clear"}},Sy={size:"Nodes",height:"Height",root:"Root"},Cy={emptyTree:"Binary tree is empty. Insert some values!",insertSuccess:"Inserted {value}",deleteSuccess:"Deleted {value}",deleteNotFound:"Value {value} not found",searchFound:"Found {value}",searchNotFound:"Value {value} not found",clearSuccess:"Tree cleared!",traversalResult:"{type} traversal: {result}",errorNoValue:"Please enter a value!",errorInsert:"Error inserting value",errorDelete:"Error deleting value",errorSearch:"Error searching value",errorClear:"Error clearing tree"},Ty=[{type:"color",className:"root-color",label:"Root"},{type:"color",className:"node-color",label:"Node"},{type:"color",className:"leaf-color",label:"Leaf"},{type:"color",className:"highlight-color",label:"Current/Found"}],Ly={concept:xy,properties:yy,types:jy,traversals:Ny,complexity:ky,useCases:wy,operations:by,infoLabels:Sy,messages:Cy,legend:Ty},_y={title:"What is a Hash Table?",description:"A Hash Table is a data structure that maps keys to values using a hash function for O(1) average access time.",codeExample:'hash("apple") → 3 → table[3] = "apple"',analogy:"Like a library catalog - the book title (key) tells you exactly which shelf (index) to find it!"},Ey={title:"Hash Table Properties",items:[{label:"Access",value:"O(1) average time"},{label:"Hash Function",value:"Maps key → index"},{label:"Load Factor",value:"size / capacity"},{label:"Collision",value:"When two keys hash to same index"}]},Oy={title:"Collision Resolution: Linear Probing",description:"When a collision occurs, probe sequentially until an empty slot is found.",steps:["Calculate hash index","If slot occupied, try next slot","Repeat until empty slot found","Insert at empty slot"],formula:"index = (hash(key) + i) % capacity, where i = 0, 1, 2, ..."},Ry={title:"Linear vs Quadratic Probing",linear:{label:"Linear Probing:",color:"#3b82f6",points:["Simple: check next slot","Primary clustering problem","Cache-friendly"]},quadratic:{label:"Quadratic Probing:",color:"#f59e0b",points:["Jump by squares: 1, 4, 9...","Reduces primary clustering","May not find empty slot"]},summary:"Linear probing is simpler but can cause clustering. Quadratic probing spreads entries better."},Py={title:"Load Factor",description:"Load factor = size / capacity. Measures how full the table is.",threshold:.7,warningMessage:"High load ({loadFactor}) - consider rehashing!",safeMessage:"Load factor: {loadFactor}"},Iy={title:"Time Complexity",operations:[{name:"Insert",average:"O(1)",worst:"O(n)",description:"Add key-value"},{name:"Search",average:"O(1)",worst:"O(n)",description:"Find by key"},{name:"Delete",average:"O(1)",worst:"O(n)",description:"Remove by key"},{name:"Rehash",average:"O(n)",worst:"O(n)",description:"Resize table"}],note:"Worst case O(n) when many collisions or poor hash function"},zy={title:"Common Use Cases",items:["Dictionaries/Maps","Caching (memoization)","Database indexing","Symbol tables (compilers)","Counting frequencies"]},My={insert:{label:"Insert Key-Value",keyPlaceholder:"Key",valuePlaceholder:"Value",buttonText:"Insert"},delete:{label:"Delete Key",placeholder:"Key",buttonText:"Delete"},search:{label:"Search Key",placeholder:"Key",buttonText:"Search"},clear:{buttonText:"Clear"},rehash:{buttonText:"Rehash"}},Vy={items:"Items",capacity:"Capacity",load:"Load",collisions:"Collisions"},Ay={emptyTable:"Hash table is empty. Insert some key-value pairs!",insertSuccess:'Inserted "{key}" at slot {index}',insertUpdated:'Updated "{key}" at slot {index}',insertCollision:"Collision at slot {original}! Probed to slot {index}",deleteSuccess:'Deleted "{key}"',searchFound:'Found: "{key}" = {value}',searchNotFound:'Key "{key}" not found',clearSuccess:"Hash table cleared!",rehashSuccess:"Rehashed! Capacity: {oldCapacity} → {newCapacity}",rehashEmpty:"Nothing to rehash - table is empty!",tableFull:"Table is full! Consider rehashing.",errorNoKey:"Please enter a key!",errorNoKeyValue:"Please enter both key and value!",errorInsert:"Error inserting. Is Flask running?",errorDelete:"Error deleting. Is Flask running?",errorSearch:"Error searching item",errorClear:"Error clearing hash table",errorRehash:"Error rehashing. Is Flask running?"},Fy=[{type:"color",className:"key-color",label:"Key"},{type:"color",className:"index-color",label:"Index"},{type:"color",className:"value-color",label:"Value"},{type:"color",className:"probe-color",label:"Probed Slot"},{type:"color",className:"collision-color",label:"Collision"}],Dy={concept:_y,properties:Ey,collisionResolution:Oy,comparison:Ry,loadFactor:Py,complexity:Iy,useCases:zy,operations:My,infoLabels:Vy,messages:Ay,legend:Fy},$y={title:"What is Quadratic Probing?",description:"Quadratic Probing is a collision resolution technique that uses a quadratic function to find the next available slot.",codeExample:"index = (hash(key) + i²) % capacity, where i = 0, 1, 2, 3...",analogy:"Like jumping farther each time - first 1 step, then 4, then 9, then 16!"},By={title:"Quadratic Probing Properties",items:[{label:"Probe Sequence",value:"+1, +4, +9, +16, +25..."},{label:"Formula",value:"(hash + i²) % capacity"},{label:"Clustering",value:"Reduces primary clustering"},{label:"Load Factor",value:"Must stay below 0.5 for guarantee"}]},Hy={title:"Quadratic vs Linear Probing",quadratic:{label:"Quadratic:",color:"#f59e0b",points:["Jumps by squares: 1, 4, 9...","Less primary clustering","May miss empty slots"]},linear:{label:"Linear:",color:"#3b82f6",points:["Steps by 1 each time","Primary clustering issue","Always finds empty slot"]},summary:"Quadratic probing reduces clustering but requires load factor < 0.5 and prime table size for guaranteed insertion."},qy={title:"Clustering Problem",primary:{name:"Primary Clustering",description:"Long runs of occupied slots form clusters",cause:"Linear probing - same probe sequence for nearby hashes",solution:"Use quadratic or double hashing"},secondary:{name:"Secondary Clustering",description:"Keys with same hash follow same probe sequence",cause:"Probe sequence depends only on initial hash",solution:"Use double hashing"}},Uy={title:"Load Factor Warning",description:"Quadratic probing may fail to find empty slots if load factor > 0.5",threshold:.5,warningMessage:"Warning: Load factor ({loadFactor}) > 0.5 - insertions may fail!",safeMessage:"Load factor: {loadFactor}"},Ky={title:"Time Complexity",operations:[{name:"Insert",average:"O(1)",worst:"O(n)",description:"Add key-value"},{name:"Search",average:"O(1)",worst:"O(n)",description:"Find by key"},{name:"Delete",average:"O(1)",worst:"O(n)",description:"Remove by key"},{name:"Rehash",average:"O(n)",worst:"O(n)",description:"Resize table"}],note:"Requires prime table size and load factor < 0.5 for guaranteed O(1)"},Wy={insert:{label:"Insert Key-Value",keyPlaceholder:"Key",valuePlaceholder:"Value",buttonText:"Insert"},delete:{label:"Delete Key",placeholder:"Key",buttonText:"Delete"},search:{label:"Search Key",placeholder:"Key",buttonText:"Search"},clear:{buttonText:"Clear"},rehash:{buttonText:"Rehash"}},Gy={items:"Items",capacity:"Capacity",load:"Load",collisions:"Collisions"},Qy={emptyTable:"Hash table is empty. Insert some key-value pairs!",insertSuccess:'Inserted "{key}" at slot {index}',insertUpdated:'Updated "{key}" at slot {index}',insertCollision:"Collision! Quadratic probed to slot {index} (i={probeCount})",deleteSuccess:'Deleted "{key}"',searchFound:'Found: "{key}" = {value}',searchNotFound:'Key "{key}" not found',clearSuccess:"Hash table cleared!",rehashSuccess:"Rehashed! Capacity: {oldCapacity} → {newCapacity}",rehashEmpty:"Nothing to rehash - table is empty!",tableFull:"Cannot insert - no empty slot found after full probe cycle!",errorNoKey:"Please enter a key!",errorNoKeyValue:"Please enter both key and value!",errorInsert:"Error inserting. Is Flask running?",errorDelete:"Error deleting. Is Flask running?",errorSearch:"Error searching item",errorClear:"Error clearing hash table",errorRehash:"Error rehashing. Is Flask running?"},Xy=[{type:"color",className:"key-color",label:"Key"},{type:"color",className:"index-color",label:"Index"},{type:"color",className:"value-color",label:"Value"},{type:"color",className:"probe-color",label:"Quadratic Probe"}],Yy={concept:$y,properties:By,comparison:Hy,clustering:qy,loadFactor:Uy,complexity:Ky,operations:Wy,infoLabels:Gy,messages:Qy,legend:Xy},Jy={title:"What is a Binary Search Tree?",description:"A Binary Search Tree (BST) is a binary tree where each node follows the ordering property: all left descendants < node < all right descendants.",codeExample:`       [50]
      /    \\
   [30]    [70]
   /  \\    /  \\
 [20][40][60][80]

Left < Parent < Right`,analogy:"Like a dictionary - words are sorted alphabetically, so you can quickly find any word by comparing!"},Zy={title:"BST Properties",items:[{label:"Ordering",value:"Left < Parent < Right"},{label:"Search",value:"O(log n) average"},{label:"Inorder",value:"Gives sorted sequence"},{label:"No Duplicates",value:"Typically unique keys"}]},ej={insert:{label:"Insert Value",placeholder:"Value",buttonText:"Insert"},delete:{label:"Delete Value",placeholder:"Value",buttonText:"Delete"},search:{label:"Search Value",placeholder:"Value",buttonText:"Search"},traversals:{inorder:"Inorder (Sorted)",preorder:"Preorder",postorder:"Postorder",levelorder:"Level Order"},clear:{buttonText:"Clear"}},nj={title:"BST Delete Cases",items:[{name:"Leaf Node",description:"Simply remove (no children)"},{name:"One Child",description:"Replace with child"},{name:"Two Children",description:"Replace with inorder successor (smallest in right subtree)"}]},tj={title:"Tree Traversals",items:[{name:"Inorder",order:"Left -> Root -> Right",use:"Returns SORTED order in BST"},{name:"Preorder",order:"Root -> Left -> Right",use:"Copy/serialize tree"},{name:"Postorder",order:"Left -> Right -> Root",use:"Delete tree safely"},{name:"Level Order",order:"Level by level (BFS)",use:"Print by levels"}]},rj={title:"Time Complexity",operations:[{name:"Search",average:"O(log n)",worst:"O(n)",description:"Binary search principle"},{name:"Insert",average:"O(log n)",worst:"O(n)",description:"Find position + insert"},{name:"Delete",average:"O(log n)",worst:"O(n)",description:"Find + restructure"},{name:"Min/Max",average:"O(log n)",worst:"O(n)",description:"Leftmost/rightmost"}],note:"Worst case O(n) when tree is unbalanced (degenerates to linked list). Use AVL/Red-Black trees for guaranteed O(log n)."},sj={title:"Common Use Cases",items:["Database indexing (B-trees)","Symbol tables in compilers","Priority queues","Auto-complete suggestions","Range queries (find all values between X and Y)"]},ij={title:"BST vs Other Structures",items:[{vs:"Array",advantage:"O(log n) insert/delete vs O(n)"},{vs:"Hash Table",advantage:"Ordered data, range queries"},{vs:"Linked List",advantage:"O(log n) search vs O(n)"}]},aj={size:"Nodes",height:"Height",root:"Root"},lj={emptyTree:"BST is empty. Insert some values!",insertSuccess:"Inserted {value}",deleteSuccess:"Deleted {value}",deleteNotFound:"Value {value} not found",searchFound:"Found {value}",searchNotFound:"Value {value} not found",clearSuccess:"BST cleared!",traversalResult:"{type}: {result}",errorNoValue:"Please enter a value!",errorInsert:"Error inserting value",errorDelete:"Error deleting value",errorSearch:"Error searching value",errorClear:"Error clearing BST"},oj=[{type:"color",className:"root-color",label:"Root"},{type:"color",className:"node-color",label:"Node"},{type:"color",className:"leaf-color",label:"Leaf"},{type:"color",className:"highlight-color",label:"Current/Found"}],cj={concept:Jy,properties:Zy,operations:ej,deleteCases:nj,traversals:tj,complexity:rj,useCases:sj,comparison:ij,infoLabels:aj,messages:lj,legend:oj},dj={title:"What is an AVL Tree?",description:"An AVL Tree is a self-balancing Binary Search Tree where the height difference between left and right subtrees (balance factor) is at most 1 for every node.",codeExample:`       [50]  BF=0
      /    \\
   [30]    [70]  
  BF=0     BF=0
   /  \\      \\
 [20][40]   [80]

Balance Factor = Height(Left) - Height(Right)
BF must be -1, 0, or 1`,analogy:"Like a well-organized library that automatically reorganizes shelves whenever books are added or removed to ensure quick access!"},uj={title:"AVL Properties",items:[{label:"Balance Factor",value:"-1, 0, or 1 for all nodes"},{label:"Height",value:"O(log n) guaranteed"},{label:"Self-Balancing",value:"Rotations on insert/delete"},{label:"BST Property",value:"Left < Parent < Right"}]},hj={insert:{label:"Insert Value",placeholder:"Value",buttonText:"Insert"},delete:{label:"Delete Value",placeholder:"Value",buttonText:"Delete"},search:{label:"Search Value",placeholder:"Value",buttonText:"Search"},traversals:{inorder:"Inorder (Sorted)",preorder:"Preorder",postorder:"Postorder",levelorder:"Level Order"},clear:{buttonText:"Clear"}},pj={title:"AVL Rotations",items:[{name:"Left-Left (LL)",description:"Right rotation",when:"BF > 1, Left child BF >= 0"},{name:"Right-Right (RR)",description:"Left rotation",when:"BF < -1, Right child BF <= 0"},{name:"Left-Right (LR)",description:"Left then Right rotation",when:"BF > 1, Left child BF < 0"},{name:"Right-Left (RL)",description:"Right then Left rotation",when:"BF < -1, Right child BF > 0"}]},fj={title:"Tree Traversals",items:[{name:"Inorder",order:"Left -> Root -> Right",use:"Returns SORTED order"},{name:"Preorder",order:"Root -> Left -> Right",use:"Copy/serialize tree"},{name:"Postorder",order:"Left -> Right -> Root",use:"Delete tree safely"},{name:"Level Order",order:"Level by level (BFS)",use:"Print by levels"}]},mj={title:"Time Complexity",operations:[{name:"Search",average:"O(log n)",worst:"O(log n)",description:"Height always balanced"},{name:"Insert",average:"O(log n)",worst:"O(log n)",description:"Insert + rebalance"},{name:"Delete",average:"O(log n)",worst:"O(log n)",description:"Delete + rebalance"},{name:"Rotation",average:"O(1)",worst:"O(1)",description:"Constant time fix"}],note:"Unlike regular BST, AVL guarantees O(log n) even in worst case because the tree is always balanced!"},gj={title:"Common Use Cases",items:["Database indexing with frequent lookups","In-memory databases","Dictionary implementations","When guaranteed O(log n) is critical","Real-time systems needing predictable performance"]},vj={title:"AVL vs Other Trees",items:[{vs:"BST",advantage:"Guaranteed O(log n) vs O(n) worst case"},{vs:"Red-Black",advantage:"More rigidly balanced (faster lookup)"},{vs:"B-Tree",advantage:"Better for in-memory operations"}]},xj={size:"Nodes",height:"Height",root:"Root"},yj={emptyTree:"AVL Tree is empty. Insert some values!",insertSuccess:"Inserted {value} (tree rebalanced)",deleteSuccess:"Deleted {value} (tree rebalanced)",deleteNotFound:"Value {value} not found",searchFound:"Found {value}",searchNotFound:"Value {value} not found",clearSuccess:"AVL Tree cleared!",traversalResult:"{type}: {result}",errorNoValue:"Please enter a value!",errorInsert:"Error inserting value",errorDelete:"Error deleting value",errorSearch:"Error searching value",errorClear:"Error clearing AVL Tree"},jj=[{type:"color",className:"root-color",label:"Root"},{type:"color",className:"balanced-color",label:"Balanced (|BF| <= 1)"},{type:"color",className:"leaf-color",label:"Leaf"},{type:"color",className:"highlight-color",label:"Current/Found"}],Nj={concept:dj,properties:uj,operations:hj,rotations:pj,traversals:fj,complexity:mj,useCases:gj,comparison:vj,infoLabels:xj,messages:yj,legend:jj},kj={title:"What is a Splay Tree?",description:"A Splay Tree is a self-adjusting Binary Search Tree that moves frequently accessed elements closer to the root through rotations (splaying), providing amortized O(log n) performance.",codeExample:`After searching for 20:

Before:        After Splay:
   [50]           [20]
   /                  \\
 [30]                [50]
 /                   /
[20]  <-- found   [30]

Accessed node moves to root!`,analogy:"Like keeping frequently used items at the front of your desk - recently used elements stay easily accessible!"},wj={title:"Splay Tree Properties",items:[{label:"Self-Adjusting",value:"Accessed nodes move to root"},{label:"No Balance Info",value:"No height/color stored"},{label:"Amortized O(log n)",value:"Good average performance"},{label:"Cache Friendly",value:"Hot nodes stay near root"}]},bj={insert:{label:"Insert Value",placeholder:"Value",buttonText:"Insert"},delete:{label:"Delete Value",placeholder:"Value",buttonText:"Delete"},search:{label:"Search Value",placeholder:"Value",buttonText:"Search"},traversals:{inorder:"Inorder (Sorted)",preorder:"Preorder",postorder:"Postorder",levelorder:"Level Order"},clear:{buttonText:"Clear"}},Sj={title:"Splay Operations",items:[{name:"Zig",description:"Single rotation when parent is root",when:"Parent is root"},{name:"Zig-Zig",description:"Both node and parent are left (or both right) children",when:"Same side grandchild"},{name:"Zig-Zag",description:"Node is left child, parent is right (or vice versa)",when:"Opposite side grandchild"}]},Cj={title:"Tree Traversals",items:[{name:"Inorder",order:"Left -> Root -> Right",use:"Returns SORTED order"},{name:"Preorder",order:"Root -> Left -> Right",use:"Copy/serialize tree"},{name:"Postorder",order:"Left -> Right -> Root",use:"Delete tree safely"},{name:"Level Order",order:"Level by level (BFS)",use:"Print by levels"}]},Tj={title:"Time Complexity",operations:[{name:"Search",average:"O(log n)*",worst:"O(n)",description:"Amortized logarithmic"},{name:"Insert",average:"O(log n)*",worst:"O(n)",description:"Amortized logarithmic"},{name:"Delete",average:"O(log n)*",worst:"O(n)",description:"Amortized logarithmic"},{name:"Splay",average:"O(log n)*",worst:"O(n)",description:"Brings node to root"}],note:"* Amortized - while single operations can be O(n), any sequence of m operations takes O(m log n) total time."},Lj={title:"Common Use Cases",items:["Cache implementations (LRU-like behavior)","Garbage collectors","Network routers (IP lookup)","Situations with temporal locality","When same elements accessed repeatedly"]},_j={title:"Splay Tree vs Other Trees",items:[{vs:"AVL",advantage:"Simpler (no balance info), better for skewed access"},{vs:"Red-Black",advantage:"Self-optimizing for access patterns"},{vs:"BST",advantage:"Better amortized performance"}]},Ej={size:"Nodes",height:"Height",root:"Root"},Oj={emptyTree:"Splay Tree is empty. Insert some values!",insertSuccess:"Inserted {value} (now at root)",deleteSuccess:"Deleted {value}",deleteNotFound:"Value {value} not found",searchFound:"Found {value} (splayed to root)",searchNotFound:"Value {value} not found",clearSuccess:"Splay Tree cleared!",traversalResult:"{type}: {result}",errorNoValue:"Please enter a value!",errorInsert:"Error inserting value",errorDelete:"Error deleting value",errorSearch:"Error searching value",errorClear:"Error clearing Splay Tree"},Rj=[{type:"color",className:"root-color",label:"Root (Most Recent)"},{type:"color",className:"node-color",label:"Node"},{type:"color",className:"leaf-color",label:"Leaf"},{type:"color",className:"highlight-color",label:"Current/Found"}],Pj={concept:kj,properties:wj,operations:bj,splayOperations:Sj,traversals:Cj,complexity:Tj,useCases:Lj,comparison:_j,infoLabels:Ej,messages:Oj,legend:Rj},Ij={title:"What is a Min Heap?",description:"A Min Heap is a complete binary tree where each parent node is smaller than or equal to its children. The minimum element is always at the root, making it perfect for priority queues.",codeExample:`       [1]  <- Min at root
      /    \\
    [3]    [2]
   /  \\    /
 [7]  [6][4]

Array: [1, 3, 2, 7, 6, 4]
Parent always <= Children`,analogy:"Like a tournament bracket where the winner (smallest) rises to the top - the champion is always at the root!"},zj={title:"Min Heap Properties",items:[{label:"Heap Property",value:"Parent <= Children"},{label:"Complete Tree",value:"Filled level by level"},{label:"Array Storage",value:"Parent(i)=(i-1)/2"},{label:"Min Access",value:"O(1) to get minimum"}]},Mj={insert:{label:"Insert Value",placeholder:"Value",buttonText:"Insert"},extract:{label:"Extract Min",buttonText:"Extract Min"},peek:{label:"Peek Min",buttonText:"Peek"},build:{label:"Build from Array",placeholder:"e.g., 5,3,8,1,2",buttonText:"Build Heap"},clear:{buttonText:"Clear"}},Vj={title:"Heap Operations",items:[{name:"Insert",description:"Add at end, bubble up (heapify up)",complexity:"O(log n)"},{name:"Extract Min",description:"Remove root, replace with last, bubble down",complexity:"O(log n)"},{name:"Peek",description:"Return root without removing",complexity:"O(1)"},{name:"Build Heap",description:"Heapify from array (bottom-up)",complexity:"O(n)"}]},Aj={title:"Array Representation",items:[{formula:"Parent(i)",value:"(i - 1) / 2"},{formula:"Left Child(i)",value:"2*i + 1"},{formula:"Right Child(i)",value:"2*i + 2"}]},Fj={title:"Time Complexity",operations:[{name:"Insert",average:"O(log n)",worst:"O(log n)",description:"Bubble up to root"},{name:"Extract Min",average:"O(log n)",worst:"O(log n)",description:"Bubble down"},{name:"Peek/Get Min",average:"O(1)",worst:"O(1)",description:"Always at root"},{name:"Build Heap",average:"O(n)",worst:"O(n)",description:"Bottom-up heapify"}],note:"Space complexity is O(n). Complete tree structure ensures height is always O(log n)."},Dj={title:"Common Use Cases",items:["Priority Queues (process by priority)","Dijkstra's shortest path algorithm","Prim's minimum spanning tree","Huffman coding (compression)","Event-driven simulation","K smallest/largest elements"]},$j={title:"Min Heap vs Other Structures",items:[{vs:"Sorted Array",advantage:"O(log n) insert vs O(n)"},{vs:"BST",advantage:"O(1) get min vs O(log n)"},{vs:"Max Heap",advantage:"Fast min access vs fast max"}]},Bj={size:"Size",height:"Height",min:"Min"},Hj={emptyHeap:"Min Heap is empty. Insert some values!",insertSuccess:"Inserted {value}",extractSuccess:"Extracted minimum: {value}",peekSuccess:"Minimum element is {value}",buildSuccess:"Built heap from array",clearSuccess:"Heap cleared!",errorNoValue:"Please enter a value!",errorEmpty:"Heap is empty!",errorFull:"Heap is full!",errorInsert:"Error inserting value",errorExtract:"Error extracting minimum"},qj=[{type:"color",className:"root-color",label:"Root (Min)"},{type:"color",className:"node-color",label:"Internal Node"},{type:"color",className:"leaf-color",label:"Leaf"},{type:"color",className:"highlight-color",label:"Current/Swapping"}],Uj={concept:Ij,properties:zj,operations:Mj,heapOperations:Vj,arrayRepresentation:Aj,complexity:Fj,useCases:Dj,comparison:$j,infoLabels:Bj,messages:Hj,legend:qj},Kj={title:"What is a Max Heap?",description:"A Max Heap is a complete binary tree where each parent node is greater than or equal to its children. The maximum element is always at the root, ideal for priority queues where largest = highest priority.",codeExample:`       [9]  <- Max at root
      /    \\
    [7]    [8]
   /  \\    /
 [3]  [5][6]

Array: [9, 7, 8, 3, 5, 6]
Parent always >= Children`,analogy:"Like a corporate hierarchy - the CEO (maximum) is at the top, and each manager has authority over their subordinates!"},Wj={title:"Max Heap Properties",items:[{label:"Heap Property",value:"Parent >= Children"},{label:"Complete Tree",value:"Filled level by level"},{label:"Array Storage",value:"Parent(i)=(i-1)/2"},{label:"Max Access",value:"O(1) to get maximum"}]},Gj={insert:{label:"Insert Value",placeholder:"Value",buttonText:"Insert"},extract:{label:"Extract Max",buttonText:"Extract Max"},peek:{label:"Peek Max",buttonText:"Peek"},build:{label:"Build from Array",placeholder:"e.g., 5,3,8,1,2",buttonText:"Build Heap"},clear:{buttonText:"Clear"}},Qj={title:"Heap Operations",items:[{name:"Insert",description:"Add at end, bubble up (heapify up)",complexity:"O(log n)"},{name:"Extract Max",description:"Remove root, replace with last, bubble down",complexity:"O(log n)"},{name:"Peek",description:"Return root without removing",complexity:"O(1)"},{name:"Build Heap",description:"Heapify from array (bottom-up)",complexity:"O(n)"}]},Xj={title:"Array Representation",items:[{formula:"Parent(i)",value:"(i - 1) / 2"},{formula:"Left Child(i)",value:"2*i + 1"},{formula:"Right Child(i)",value:"2*i + 2"}]},Yj={title:"Time Complexity",operations:[{name:"Insert",average:"O(log n)",worst:"O(log n)",description:"Bubble up to root"},{name:"Extract Max",average:"O(log n)",worst:"O(log n)",description:"Bubble down"},{name:"Peek/Get Max",average:"O(1)",worst:"O(1)",description:"Always at root"},{name:"Build Heap",average:"O(n)",worst:"O(n)",description:"Bottom-up heapify"}],note:"Space complexity is O(n). Complete tree structure ensures height is always O(log n)."},Jj={title:"Common Use Cases",items:["Priority Queues (largest = highest priority)","Heap Sort algorithm","Job scheduling (highest priority first)","Finding K largest elements","Median maintenance (with min heap)","Stock trading (highest bid)"]},Zj={title:"Max Heap vs Other Structures",items:[{vs:"Sorted Array",advantage:"O(log n) insert vs O(n)"},{vs:"BST",advantage:"O(1) get max vs O(log n)"},{vs:"Min Heap",advantage:"Fast max access vs fast min"}]},e0={size:"Size",height:"Height",max:"Max"},n0={emptyHeap:"Max Heap is empty. Insert some values!",insertSuccess:"Inserted {value}",extractSuccess:"Extracted maximum: {value}",peekSuccess:"Maximum element is {value}",buildSuccess:"Built heap from array",clearSuccess:"Heap cleared!",errorNoValue:"Please enter a value!",errorEmpty:"Heap is empty!",errorFull:"Heap is full!",errorInsert:"Error inserting value",errorExtract:"Error extracting maximum"},t0=[{type:"color",className:"root-color",label:"Root (Max)"},{type:"color",className:"node-color",label:"Internal Node"},{type:"color",className:"leaf-color",label:"Leaf"},{type:"color",className:"highlight-color",label:"Current/Swapping"}],r0={concept:Kj,properties:Wj,operations:Gj,heapOperations:Qj,arrayRepresentation:Xj,complexity:Yj,useCases:Jj,comparison:Zj,infoLabels:e0,messages:n0,legend:t0},s0={title:"What is a Treap?",description:"A Treap is a combination of a Binary Search Tree (BST) and a Heap. Each node has a key (follows BST ordering: left < parent < right) and a random priority (follows max-heap ordering: parent priority >= child priority). Rotations maintain the heap property after insertions.",codeExample:`       [50, p:95]
      /          \\
  [30, p:80]   [70, p:60]
   /     \\         \\
[20,p:40][40,p:55] [80,p:30]

BST on keys | Max-Heap on priorities`,analogy:"Like a tournament bracket where seeded players (priorities) determine placement, but match order follows alphabetical (BST) rules!"},i0={title:"Treap Properties",items:[{label:"Keys",value:"BST order (Left < Parent < Right)"},{label:"Priorities",value:"Max-heap order (Parent >= Children)"},{label:"Balance",value:"Expected O(log n) height"},{label:"Randomized",value:"Priorities assigned randomly"}]},a0={title:"Time Complexity",operations:[{name:"Search",average:"O(log n)",worst:"O(n)",description:"BST search on keys"},{name:"Insert",average:"O(log n)",worst:"O(n)",description:"BST insert + rotate up"},{name:"Delete",average:"O(log n)",worst:"O(n)",description:"Rotate down + remove leaf"},{name:"Split/Merge",average:"O(log n)",worst:"O(n)",description:"Divide/combine treaps"}],note:"Random priorities give O(log n) expected height, making worst-case O(n) extremely unlikely."},l0={title:"Common Use Cases",items:["Implicit key treaps for sequence operations","Efficient split and merge operations","Randomized balanced BST without complex rebalancing","Competitive programming (flexible tree operations)","Persistent data structures"]},o0={title:"Treap vs Other Trees",items:[{vs:"BST",advantage:"Expected O(log n) balance via random priorities"},{vs:"AVL Tree",advantage:"Simpler implementation, supports split/merge"},{vs:"Red-Black Tree",advantage:"Easier to code, natural split/merge"},{vs:"Skip List",advantage:"Tree structure, supports order statistics"}]},c0={concept:s0,properties:i0,complexity:a0,useCases:l0,comparison:o0},d0={stack:Yx,queue:ly,linkedlist:vy,binarytree:Ly,hashtable:Dy,hashtableChaining:Y,hashtableQuadratic:Yy,bst:cj,avl:Nj,splay:Pj,minheap:Uj,maxheap:r0,treap:c0};function hr({dataStructure:e}){const t=d0[e];return t?n.jsxs("div",{className:"concepts-panel",children:[t.concept&&n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Ce,{className:"icon-sm"}),n.jsx("span",{children:t.concept.title})]}),n.jsxs("div",{className:"concept-content",children:[n.jsx("p",{children:t.concept.description}),t.concept.codeExample&&n.jsx("pre",{className:"concept-code-example",children:n.jsx("code",{children:t.concept.codeExample})}),t.concept.analogy&&n.jsxs("div",{className:"concept-analogy",children:[n.jsx(xe,{}),n.jsx("span",{children:t.concept.analogy})]})]})]}),t.properties&&n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Bn,{className:"icon-sm"}),n.jsx("span",{children:t.properties.title})]}),n.jsx("div",{className:"concept-content",children:n.jsx("div",{className:"properties-grid",children:t.properties.items.map((r,s)=>n.jsxs("div",{className:"property-item",children:[n.jsx("span",{className:"property-label",children:r.label}),n.jsx("span",{className:"property-value",children:r.value})]},s))})})]}),t.complexity&&n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Eh,{className:"icon-sm"}),n.jsx("span",{children:t.complexity.title})]}),n.jsxs("div",{className:"concept-content",children:[n.jsx("div",{className:"complexity-table",children:t.complexity.operations.map((r,s)=>n.jsxs("div",{className:"complexity-row",children:[n.jsx("span",{className:"complexity-name",children:r.name}),r.time&&n.jsx("code",{className:"complexity-time",children:r.time}),r.average&&n.jsxs(n.Fragment,{children:[n.jsx("code",{className:"complexity-avg",children:r.average}),r.worst&&n.jsx("code",{className:"complexity-worst",children:r.worst})]}),r.description&&n.jsx("span",{className:"complexity-desc",children:r.description})]},s))}),t.complexity.note&&n.jsx("p",{className:"complexity-note",children:t.complexity.note})]})]}),t.useCases&&n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(To,{className:"icon-sm"}),n.jsx("span",{children:t.useCases.title})]}),n.jsx("div",{className:"concept-content",children:n.jsx("ul",{className:"use-cases-list",children:t.useCases.items.map((r,s)=>n.jsxs("li",{children:[n.jsx(Ie,{className:"icon-xs"}),n.jsx("span",{children:r})]},s))})})]}),t.traversals&&n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Bn,{className:"icon-sm"}),n.jsx("span",{children:t.traversals.title})]}),n.jsx("div",{className:"concept-content",children:n.jsx("div",{className:"traversals-list",children:t.traversals.items.map((r,s)=>n.jsxs("div",{className:"traversal-item",children:[n.jsx("span",{className:"traversal-name",children:r.name}),n.jsx("span",{className:"traversal-order",children:r.order}),n.jsx("span",{className:"traversal-use",children:r.use})]},s))})})]}),t.deleteCases&&n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Bn,{className:"icon-sm"}),n.jsx("span",{children:t.deleteCases.title})]}),n.jsx("div",{className:"concept-content",children:n.jsx("div",{className:"delete-cases-grid",children:t.deleteCases.items.map((r,s)=>n.jsxs("div",{className:"delete-case-item",children:[n.jsx("span",{className:"case-number",children:s+1}),n.jsxs("div",{children:[n.jsx("strong",{children:r.name}),n.jsx("p",{children:r.description})]})]},s))})})]}),t.comparison&&n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Bn,{className:"icon-sm"}),n.jsx("span",{children:t.comparison.title})]}),n.jsx("div",{className:"concept-content",children:n.jsx("div",{className:"comparison-list",children:t.comparison.items.map((r,s)=>n.jsxs("div",{className:"comparison-item",children:[n.jsxs("span",{className:"comparison-vs",children:["vs ",r.vs]}),n.jsx("span",{className:"comparison-advantage",children:r.advantage})]},s))})})]})]}):n.jsx("div",{className:"concepts-panel",children:n.jsx("p",{children:"Concepts not available for this data structure."})})}const Bt=7,u0={inorder:{name:"Inorder Traversal",order:"Left -> Root -> Right",description:"Returns elements in SORTED order for BST. This is the key property of BST!",useCase:["Get sorted elements","Validate BST","Range queries"],complexity:{time:"O(n)",space:"O(h)"}},preorder:{name:"Preorder Traversal",order:"Root -> Left -> Right",description:"Process root first. Useful for copying/serializing the BST structure.",useCase:["Copy tree structure","Serialize BST","Prefix expressions"],complexity:{time:"O(n)",space:"O(h)"}},postorder:{name:"Postorder Traversal",order:"Left -> Right -> Root",description:"Process children before root. Essential for safely deleting the tree.",useCase:["Delete tree safely","Calculate subtree sizes","Postfix expressions"],complexity:{time:"O(n)",space:"O(h)"}},levelorder:{name:"Level Order Traversal",order:"Level by Level (BFS)",description:"Visit nodes level by level using a queue. Shows tree structure clearly.",useCase:["Level-wise printing","Find width","Serialize for reconstruction"],complexity:{time:"O(n)",space:"O(w)"}}},wl=(e,t=0)=>e?Math.max(wl(e.left,t+1),wl(e.right,t+1)):t-1,h0=(e,t)=>{const r=[];let s=e;for(;s&&(r.push(s.value),s.value!==t);)t<s.value?s=s.left:s=s.right;return r};function p0({insertValue:e,deleteValue:t,searchValue:r,size:s,height:i,message:a,tree:l,isAnimating:o,visitedNodes:c,searchPath:h,searchResult:d,onInsertValueChange:p,onDeleteValueChange:m,onSearchValueChange:b,onInsert:w,onDelete:k,onSearch:j,onTraversal:f,onClear:g,onResetTraversal:v}){const E=(y,V)=>{const T=y.target.value;(T===""||T==="-"||/^-?\d*\.?\d*$/.test(T))&&V(T)};return n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Binary Search Tree"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"insertValue",children:"Insert Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"insertValue",value:e,onChange:y=>E(y,p),onKeyDown:y=>y.key==="Enter"&&w(),placeholder:"Enter a number",disabled:o}),n.jsx("button",{onClick:w,className:"btn btn-insert",disabled:o,children:"Insert"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"searchValue",children:"Search Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"searchValue",value:r,onChange:y=>E(y,b),onKeyDown:y=>y.key==="Enter"&&j(),placeholder:"Enter a number",disabled:o}),n.jsxs("button",{onClick:j,className:"btn btn-search",disabled:o||!l,children:[n.jsx(ur,{size:16})," Search"]})]}),h.length>0&&n.jsxs("div",{className:"search-path-display",children:[n.jsx("span",{className:"search-path-label",children:"Path:"}),n.jsx("div",{className:"search-path-nodes",children:h.map((y,V)=>n.jsxs($e.Fragment,{children:[n.jsx("span",{className:`search-path-node ${V===h.length-1?d?"found":"not-found":""}`,children:y}),V<h.length-1&&n.jsx(se,{size:14,className:"search-path-arrow"})]},V))})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"deleteValue",children:"Delete Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"deleteValue",value:t,onChange:y=>E(y,m),onKeyDown:y=>y.key==="Enter"&&k(),placeholder:"Enter a number",disabled:o}),n.jsx("button",{onClick:k,className:"btn btn-delete",disabled:o,children:"Delete"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Traversals"}),n.jsx("div",{className:"btn-group",children:["inorder","preorder","postorder","levelorder"].map(y=>n.jsxs("button",{onClick:()=>f(y),className:`btn btn-traversal ${y==="inorder"?"btn-traversal-primary":""}`,disabled:o||!l,title:y==="inorder"?"Returns sorted order!":"",children:[y==="levelorder"?"Level Order":y.charAt(0).toUpperCase()+y.slice(1),y==="inorder"&&n.jsx("span",{className:"sorted-badge",children:"Sorted!"})]},y))}),c.length>0&&!o&&n.jsx("button",{onClick:v,className:"btn btn-secondary",style:{marginTop:"0.5rem",width:"100%"},children:"Reset Colors"})]}),n.jsxs("div",{className:"traversal-legend",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--default"}),n.jsx("span",{children:"Not visited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--visiting"}),n.jsx("span",{children:"Current"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--visited"}),n.jsx("span",{children:"Visited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--search"}),n.jsx("span",{children:"Search path"})]})]}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Nodes:"}),n.jsx("span",{className:"info-value",children:s})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Height:"}),n.jsx("span",{className:"info-value",children:i})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Max:"}),n.jsx("span",{className:"info-value",children:Bt})]})]}),s>=Bt*.8&&s<Bt&&n.jsxs("div",{className:"warning-box",children:[n.jsx(kn,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Tree filling up!"})," ",s,"/",Bt," nodes."]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:g,className:"btn btn-clear",disabled:o,children:"Clear Tree"})}),a&&n.jsx("div",{className:`message message-${a.includes("Error")||a.includes("error")||a.includes("not found")?"error":/success|complete|Inserted|Deleted|cleared|Found/i.test(a)?"success":a.includes("full")?"warning":"info"}`,children:a})]})}function f0({tree:e,currentNode:t,visitedNodes:r,searchPath:s,searchResult:i}){const a=d=>{const p=t===d,m=r.includes(d),b=s.includes(d),w=s.length>0&&s[s.length-1]===d;let k="#6366f1",j="none";return p?(k="#f59e0b",j="drop-shadow(0 0 12px #f59e0b) drop-shadow(0 0 20px #f59e0b)"):w?(k=i?"#10b981":"#ef4444",j=i?"drop-shadow(0 0 12px #10b981)":"drop-shadow(0 0 12px #ef4444)"):b?(k="#3b82f6",j="drop-shadow(0 0 8px #3b82f6)"):m&&(k="#10b981",j="drop-shadow(0 0 6px #10b981)"),{color:k,glow:j,radius:p||w?30:25,stroke:p||w?3:2,fontSize:p||w?16:14,fontWeight:p||w?"bold":"normal"}},l=(d,p,m,b,w)=>{if(!d)return[];const k=Math.pow(2,w-b)*50,j=a(d.value),f=[];if(d.left){const g=s.includes(d.value)&&s.includes(d.left.value);f.push(n.jsx("line",{x1:p,y1:m,x2:p-k,y2:m+100,stroke:g?"#3b82f6":"rgba(255,255,255,0.3)",strokeWidth:g?3:2},`l-${d.value}-l`)),f.push(...l(d.left,p-k,m+100,b+1,w))}if(d.right){const g=s.includes(d.value)&&s.includes(d.right.value);f.push(n.jsx("line",{x1:p,y1:m,x2:p+k,y2:m+100,stroke:g?"#3b82f6":"rgba(255,255,255,0.3)",strokeWidth:g?3:2},`l-${d.value}-r`)),f.push(...l(d.right,p+k,m+100,b+1,w))}return f.push(n.jsxs("g",{style:{filter:j.glow,transition:"all 0.3s ease"},children:[n.jsx("circle",{cx:p,cy:m,r:j.radius,fill:j.color,stroke:"white",strokeWidth:j.stroke,style:{transition:"all 0.3s ease"}}),n.jsx("text",{x:p,y:m,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:j.fontSize,fontWeight:j.fontWeight,children:d.value})]},`n-${d.value}-${p}`)),f};if(!e)return n.jsxs("div",{className:"tree-empty",children:[n.jsx("p",{children:"BST is empty. Insert some values!"}),n.jsx("p",{className:"tree-empty-hint",children:"Try: 50, 30, 70, 20, 40, 60, 80"})]});const o=wl(e),c=(o+1)*100+50,h=Math.max(800,Math.pow(2,Math.max(o,1))*80);return n.jsx("svg",{width:h,height:c,className:"tree-svg",children:l(e,h/2,50,0,o)})}function m0({traversalType:e,traversalResult:t,isAnimating:r,traversalComplete:s}){if(!e||t.length===0&&!r)return null;const i=u0[e];return n.jsxs("div",{className:"traversal-output-panel",children:[n.jsxs("div",{style:{marginBottom:"1rem"},children:[n.jsxs("h3",{className:"traversal-title",children:[i==null?void 0:i.name,e==="inorder"&&n.jsx("span",{className:"sorted-indicator",children:"Returns Sorted Order!"}),r&&n.jsx("span",{className:"traversal-badge traversal-badge--running",children:"Running..."}),s&&n.jsx("span",{className:"traversal-badge traversal-badge--complete",children:"Complete"})]}),n.jsxs("p",{className:"traversal-order",children:[n.jsx("strong",{children:"Order:"})," ",i==null?void 0:i.order]}),n.jsx("p",{className:"traversal-description",children:i==null?void 0:i.description})]}),n.jsxs("div",{className:"traversal-output-box",children:[n.jsx("div",{className:"traversal-output-label",children:"Output Sequence:"}),n.jsx("div",{className:"traversal-sequence-container",children:t.length===0&&r?n.jsx("span",{style:{color:"var(--text-muted)",fontStyle:"italic"},children:"Traversing..."}):t.map((a,l)=>n.jsx("span",{className:`traversal-node ${l===t.length-1&&!s?"traversal-node--current":"traversal-node--complete"}`,children:a},l))})]}),s&&t.length>0&&n.jsxs("div",{className:"traversal-array-section",children:[n.jsx("div",{className:"traversal-array-label",children:"Array Output:"}),n.jsxs("code",{className:"traversal-array-output",children:["[",t.join(", "),"]"]}),e==="inorder"&&n.jsx("p",{className:"traversal-sorted-note",children:"Notice: The output is sorted! This is the BST property."}),n.jsxs("p",{className:"traversal-use-case",children:["Use case: ",i==null?void 0:i.useCase.join(" | ")]}),n.jsxs("div",{className:"traversal-complexity",children:[n.jsx("strong",{children:"Time:"})," ",n.jsx("code",{className:"complexity-value",children:i==null?void 0:i.complexity.time}),n.jsx("br",{}),n.jsx("strong",{children:"Space:"})," ",n.jsx("code",{className:"complexity-value",children:i==null?void 0:i.complexity.space})]})]})]})}function g0(){const[e,t]=u.useState(null),[r,s]=u.useState(0),[i,a]=u.useState(-1),[l,o]=u.useState(""),[c,h]=u.useState(""),[d,p]=u.useState(""),[m,b]=u.useState(""),[w,k]=u.useState([]),[j,f]=u.useState(null),[g,v]=u.useState([]),[E,y]=u.useState(!1),[V,T]=u.useState(null),[D,A]=u.useState([]),[I,q]=u.useState(null),[K,B]=u.useState(!1);u.useEffect(()=>{$()},[]);const $=async()=>{try{const P=await(await fetch("/api/bst")).json();t(P.tree),s(P.size||0),a(P.height!==void 0?P.height:-1)}catch(C){console.error("Error loading BST:",C)}},x=C=>{b(C),setTimeout(()=>b(""),3e3)},R=()=>{k([]),f(null)},H=async()=>{if(!l.trim()){x("Please enter a number!");return}const C=Number(l);if(isNaN(C)){x("Please enter a valid number!");return}if(r>=Bt){x(`Tree is full! Maximum size is ${Bt} nodes.`);return}R(),z();try{const L=await(await fetch("/api/bst/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:C})})).json();if(L.error){x(L.error);return}t(L.tree),s(L.size||0),a(L.height!==void 0?L.height:-1),x(`Inserted ${C}`),o("")}catch{x("Error inserting node")}},_=async()=>{if(!c.trim()){x("Please enter a number!");return}const C=Number(c);if(isNaN(C)){x("Please enter a valid number!");return}R(),z();try{const L=await(await fetch("/api/bst/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:C})})).json();if(L.error){x(L.error);return}t(L.tree),s(L.size||0),a(L.height!==void 0?L.height:-1),x(`Deleted ${C}`),h("")}catch{x("Error deleting node")}},O=async()=>{if(!d.trim()){x("Please enter a number!");return}const C=Number(d);if(isNaN(C)){x("Please enter a valid number!");return}if(!e){x("Tree is empty!");return}z(),y(!0);const P=h0(e,C);for(let L=0;L<P.length;L++)k(P.slice(0,L+1)),await new Promise(N=>setTimeout(N,500));try{const N=await(await fetch(`/api/bst/search?value=${C}`)).json();f(N.found),N.found?x(`Found ${C}!`):x(`${C} not found in BST`)}catch{x("Error searching")}y(!1),p("")},S=async()=>{try{await fetch("/api/bst/clear",{method:"POST"}),t(null),s(0),a(-1),z(),R(),x("BST cleared!")}catch{x("Error clearing tree")}},M=async C=>{if(!e){x("Tree is empty! Insert some nodes first.");return}R(),y(!0),v([]),T(null),A([]),q(C),B(!1);try{const N=(await(await fetch(`/api/bst/${C}`)).json()).traversal||[];if(N.length===0){x("Tree is empty!"),y(!1);return}for(let G=0;G<N.length;G++)T(N[G]),await new Promise(W=>setTimeout(W,600)),A(W=>[...W,N[G]]),v(W=>[...W,N[G]]),await new Promise(W=>setTimeout(W,200));T(null),B(!0),y(!1);const F=C.charAt(0).toUpperCase()+C.slice(1);x(`${F} traversal complete!${C==="inorder"?" (Sorted!)":""}`)}catch(P){console.error("Traversal error:",P),x("Error performing traversal"),y(!1)}},z=()=>{v([]),T(null),A([]),q(null),B(!1)};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsx("div",{className:"intro-left",children:n.jsx(hr,{dataStructure:"bst"})}),n.jsx(fe,{context:"Binary Search Tree (BST) data structure, search, insert, delete operations, and traversals"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsx(p0,{insertValue:l,deleteValue:c,searchValue:d,size:r,height:i,message:m,tree:e,isAnimating:E,visitedNodes:D,searchPath:w,searchResult:j,onInsertValueChange:o,onDeleteValueChange:h,onSearchValueChange:p,onInsert:H,onDelete:_,onSearch:O,onTraversal:M,onClear:S,onResetTraversal:()=>{z(),R()}}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"BST Visualization"}),n.jsxs("p",{className:"bst-property-reminder",children:["Remember: ",n.jsxs("code",{children:["Left ","<"," Parent ","<"," Right"]})]}),n.jsx("div",{className:"tree-container",children:n.jsx(f0,{tree:e,currentNode:V,visitedNodes:D,searchPath:w,searchResult:j})}),n.jsx(m0,{traversalType:I,traversalResult:g,isAnimating:E,traversalComplete:K})]})]}),n.jsx(me,{dataStructure:"bst"})]})}const Ht=7,v0={inorder:{name:"Inorder Traversal",order:"Left -> Root -> Right",description:"Returns elements in SORTED order.",useCase:["Get sorted elements","Validate BST property"],complexity:{time:"O(n)",space:"O(h)"}},preorder:{name:"Preorder Traversal",order:"Root -> Left -> Right",description:"Process root first. Useful for copying tree structure.",useCase:["Copy tree structure","Serialize AVL"],complexity:{time:"O(n)",space:"O(h)"}},postorder:{name:"Postorder Traversal",order:"Left -> Right -> Root",description:"Process children before root.",useCase:["Delete tree safely","Calculate subtree info"],complexity:{time:"O(n)",space:"O(h)"}},levelorder:{name:"Level Order Traversal",order:"Level by Level (BFS)",description:"Visit nodes level by level using a queue.",useCase:["Level-wise printing","Find width"],complexity:{time:"O(n)",space:"O(w)"}}},bl=(e,t=0)=>e?Math.max(bl(e.left,t+1),bl(e.right,t+1)):t-1,x0=(e,t)=>{const r=[];let s=e;for(;s&&(r.push(s.value),s.value!==t);)t<s.value?s=s.left:s=s.right;return r};function y0({insertValue:e,deleteValue:t,searchValue:r,size:s,height:i,message:a,tree:l,isAnimating:o,visitedNodes:c,searchPath:h,searchResult:d,onInsertValueChange:p,onDeleteValueChange:m,onSearchValueChange:b,onInsert:w,onDelete:k,onSearch:j,onTraversal:f,onClear:g,onResetTraversal:v}){const E=(y,V)=>{const T=y.target.value;(T===""||T==="-"||/^-?\d*\.?\d*$/.test(T))&&V(T)};return n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"AVL Tree"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"insertValue",children:"Insert Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"insertValue",value:e,onChange:y=>E(y,p),onKeyDown:y=>y.key==="Enter"&&w(),placeholder:"Enter a number",disabled:o}),n.jsx("button",{onClick:w,className:"btn btn-insert",disabled:o,children:"Insert"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"searchValue",children:"Search Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"searchValue",value:r,onChange:y=>E(y,b),onKeyDown:y=>y.key==="Enter"&&j(),placeholder:"Enter a number",disabled:o}),n.jsxs("button",{onClick:j,className:"btn btn-search",disabled:o||!l,children:[n.jsx(ur,{size:16})," Search"]})]}),h.length>0&&n.jsxs("div",{className:"search-path-display",children:[n.jsx("span",{className:"search-path-label",children:"Path:"}),n.jsx("div",{className:"search-path-nodes",children:h.map((y,V)=>n.jsxs($e.Fragment,{children:[n.jsx("span",{className:`search-path-node ${V===h.length-1?d?"found":"not-found":""}`,children:y}),V<h.length-1&&n.jsx(se,{size:14,className:"search-path-arrow"})]},V))})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"deleteValue",children:"Delete Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"deleteValue",value:t,onChange:y=>E(y,m),onKeyDown:y=>y.key==="Enter"&&k(),placeholder:"Enter a number",disabled:o}),n.jsx("button",{onClick:k,className:"btn btn-delete",disabled:o,children:"Delete"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Traversals"}),n.jsx("div",{className:"btn-group",children:["inorder","preorder","postorder","levelorder"].map(y=>n.jsx("button",{onClick:()=>f(y),className:"btn btn-traversal",disabled:o||!l,children:y==="levelorder"?"Level Order":y.charAt(0).toUpperCase()+y.slice(1)},y))}),c.length>0&&!o&&n.jsx("button",{onClick:v,className:"btn btn-secondary",style:{marginTop:"0.5rem",width:"100%"},children:"Reset Colors"})]}),n.jsxs("div",{className:"traversal-legend",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--default"}),n.jsx("span",{children:"Not visited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--visiting"}),n.jsx("span",{children:"Current"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--visited"}),n.jsx("span",{children:"Visited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--search"}),n.jsx("span",{children:"Search path"})]})]}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Nodes:"}),n.jsx("span",{className:"info-value",children:s})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Height:"}),n.jsx("span",{className:"info-value",children:i})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Max:"}),n.jsx("span",{className:"info-value",children:Ht})]})]}),s>=Ht*.8&&s<Ht&&n.jsxs("div",{className:"warning-box",children:[n.jsx(kn,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Tree filling up!"})," ",s,"/",Ht," nodes."]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:g,className:"btn btn-clear",disabled:o,children:"Clear Tree"})}),a&&n.jsx("div",{className:`message message-${a.includes("Error")||a.includes("error")||a.includes("not found")?"error":/success|complete|Inserted|Deleted|cleared|Found|rebalanced/i.test(a)?"success":a.includes("full")?"warning":"info"}`,children:a})]})}function j0({tree:e,currentNode:t,visitedNodes:r,searchPath:s,searchResult:i}){const a=d=>{const p=t===d,m=r.includes(d),b=s.includes(d),w=s.length>0&&s[s.length-1]===d;let k="#8b5cf6",j="none";return p?(k="#f59e0b",j="drop-shadow(0 0 12px #f59e0b) drop-shadow(0 0 20px #f59e0b)"):w?(k=i?"#10b981":"#ef4444",j=i?"drop-shadow(0 0 12px #10b981)":"drop-shadow(0 0 12px #ef4444)"):b?(k="#3b82f6",j="drop-shadow(0 0 8px #3b82f6)"):m&&(k="#10b981",j="drop-shadow(0 0 6px #10b981)"),{color:k,glow:j,radius:p||w?30:25,stroke:p||w?3:2,fontSize:p||w?16:14,fontWeight:p||w?"bold":"normal"}},l=(d,p,m,b,w)=>{if(!d)return[];const k=Math.pow(2,w-b)*50,j=a(d.value),f=[];if(d.left){const g=s.includes(d.value)&&s.includes(d.left.value);f.push(n.jsx("line",{x1:p,y1:m,x2:p-k,y2:m+100,stroke:g?"#3b82f6":"rgba(255,255,255,0.3)",strokeWidth:g?3:2},`l-${d.value}-l`)),f.push(...l(d.left,p-k,m+100,b+1,w))}if(d.right){const g=s.includes(d.value)&&s.includes(d.right.value);f.push(n.jsx("line",{x1:p,y1:m,x2:p+k,y2:m+100,stroke:g?"#3b82f6":"rgba(255,255,255,0.3)",strokeWidth:g?3:2},`l-${d.value}-r`)),f.push(...l(d.right,p+k,m+100,b+1,w))}return f.push(n.jsxs("g",{style:{filter:j.glow,transition:"all 0.3s ease"},children:[n.jsx("circle",{cx:p,cy:m,r:j.radius,fill:j.color,stroke:"white",strokeWidth:j.stroke,style:{transition:"all 0.3s ease"}}),n.jsx("text",{x:p,y:m,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:j.fontSize,fontWeight:j.fontWeight,children:d.value}),d.balance!==void 0&&n.jsxs("g",{children:[n.jsx("circle",{cx:p+20,cy:m-20,r:10,fill:Math.abs(d.balance)<=1?"#10b981":"#ef4444"}),n.jsx("text",{x:p+20,y:m-20,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:10,fontWeight:"bold",children:d.balance})]})]},`n-${d.value}-${p}`)),f};if(!e)return n.jsxs("div",{className:"tree-empty",children:[n.jsx("p",{children:"AVL Tree is empty. Insert some values!"}),n.jsx("p",{className:"tree-empty-hint",children:"Try: 30, 20, 40, 10 (watch it balance!)"})]});const o=bl(e),c=(o+1)*100+50,h=Math.max(800,Math.pow(2,Math.max(o,1))*80);return n.jsx("svg",{width:h,height:c,className:"tree-svg",children:l(e,h/2,50,0,o)})}function N0({traversalType:e,traversalResult:t,isAnimating:r,traversalComplete:s}){if(!e||t.length===0&&!r)return null;const i=v0[e];return n.jsxs("div",{className:"traversal-output-panel",children:[n.jsxs("div",{style:{marginBottom:"1rem"},children:[n.jsxs("h3",{className:"traversal-title",children:[i==null?void 0:i.name,r&&n.jsx("span",{className:"traversal-badge traversal-badge--running",children:"Running..."}),s&&n.jsx("span",{className:"traversal-badge traversal-badge--complete",children:"Complete"})]}),n.jsxs("p",{className:"traversal-order",children:[n.jsx("strong",{children:"Order:"})," ",i==null?void 0:i.order]}),n.jsx("p",{className:"traversal-description",children:i==null?void 0:i.description})]}),n.jsxs("div",{className:"traversal-output-box",children:[n.jsx("div",{className:"traversal-output-label",children:"Output Sequence:"}),n.jsx("div",{className:"traversal-sequence-container",children:t.length===0&&r?n.jsx("span",{style:{color:"var(--text-muted)",fontStyle:"italic"},children:"Traversing..."}):t.map((a,l)=>n.jsx("span",{className:`traversal-node ${l===t.length-1&&!s?"traversal-node--current":"traversal-node--complete"}`,children:a},l))})]}),s&&t.length>0&&n.jsxs("div",{className:"traversal-array-section",children:[n.jsx("div",{className:"traversal-array-label",children:"Array Output:"}),n.jsxs("code",{className:"traversal-array-output",children:["[",t.join(", "),"]"]}),n.jsxs("p",{className:"traversal-use-case",children:["Use case: ",i==null?void 0:i.useCase.join(" | ")]}),n.jsxs("div",{className:"traversal-complexity",children:[n.jsx("strong",{children:"Time:"})," ",n.jsx("code",{className:"complexity-value",children:i==null?void 0:i.complexity.time}),n.jsx("br",{}),n.jsx("strong",{children:"Space:"})," ",n.jsx("code",{className:"complexity-value",children:i==null?void 0:i.complexity.space})]})]})]})}function k0(){const[e,t]=u.useState(null),[r,s]=u.useState(0),[i,a]=u.useState(-1),[l,o]=u.useState(""),[c,h]=u.useState(""),[d,p]=u.useState(""),[m,b]=u.useState(""),[w,k]=u.useState([]),[j,f]=u.useState(null),[g,v]=u.useState([]),[E,y]=u.useState(!1),[V,T]=u.useState(null),[D,A]=u.useState([]),[I,q]=u.useState(null),[K,B]=u.useState(!1);u.useEffect(()=>{$()},[]);const $=async()=>{try{const P=await(await fetch("/api/avl")).json();t(P.tree),s(P.size||0),a(P.height!==void 0?P.height:-1)}catch(C){console.error("Error loading AVL:",C)}},x=C=>{b(C),setTimeout(()=>b(""),3e3)},R=()=>{k([]),f(null)},H=async()=>{if(!l.trim()){x("Please enter a number!");return}const C=Number(l);if(isNaN(C)){x("Please enter a valid number!");return}if(r>=Ht){x(`Tree is full! Maximum size is ${Ht} nodes.`);return}R(),z();try{const L=await(await fetch("/api/avl/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:C})})).json();if(L.error){x(L.error);return}t(L.tree),s(L.size||0),a(L.height!==void 0?L.height:-1),x(`Inserted ${C} (tree rebalanced)`),o("")}catch{x("Error inserting node")}},_=async()=>{if(!c.trim()){x("Please enter a number!");return}const C=Number(c);if(isNaN(C)){x("Please enter a valid number!");return}R(),z();try{const L=await(await fetch("/api/avl/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:C})})).json();if(L.error){x(L.error);return}t(L.tree),s(L.size||0),a(L.height!==void 0?L.height:-1),x(`Deleted ${C} (tree rebalanced)`),h("")}catch{x("Error deleting node")}},O=async()=>{if(!d.trim()){x("Please enter a number!");return}const C=Number(d);if(isNaN(C)){x("Please enter a valid number!");return}if(!e){x("Tree is empty!");return}z(),y(!0);const P=x0(e,C);for(let L=0;L<P.length;L++)k(P.slice(0,L+1)),await new Promise(N=>setTimeout(N,500));try{const N=await(await fetch(`/api/avl/search?value=${C}`)).json();f(N.found),N.found?x(`Found ${C}!`):x(`${C} not found in AVL Tree`)}catch{x("Error searching")}y(!1),p("")},S=async()=>{try{await fetch("/api/avl/clear",{method:"POST"}),t(null),s(0),a(-1),z(),R(),x("AVL Tree cleared!")}catch{x("Error clearing tree")}},M=async C=>{if(!e){x("Tree is empty! Insert some nodes first.");return}R(),y(!0),v([]),T(null),A([]),q(C),B(!1);try{const N=(await(await fetch(`/api/avl/${C}`)).json()).traversal||[];if(N.length===0){x("Tree is empty!"),y(!1);return}for(let G=0;G<N.length;G++)T(N[G]),await new Promise(W=>setTimeout(W,600)),A(W=>[...W,N[G]]),v(W=>[...W,N[G]]),await new Promise(W=>setTimeout(W,200));T(null),B(!0),y(!1);const F=C.charAt(0).toUpperCase()+C.slice(1);x(`${F} traversal complete!`)}catch(P){console.error("Traversal error:",P),x("Error performing traversal"),y(!1)}},z=()=>{v([]),T(null),A([]),q(null),B(!1)};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsx("div",{className:"intro-left",children:n.jsx(hr,{dataStructure:"avl"})}),n.jsx(fe,{context:"AVL Tree data structure, self-balancing BST, rotations, balance factors, and O(log n) guaranteed operations"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsx(y0,{insertValue:l,deleteValue:c,searchValue:d,size:r,height:i,message:m,tree:e,isAnimating:E,visitedNodes:D,searchPath:w,searchResult:j,onInsertValueChange:o,onDeleteValueChange:h,onSearchValueChange:p,onInsert:H,onDelete:_,onSearch:O,onTraversal:M,onClear:S,onResetTraversal:()=>{z(),R()}}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"AVL Tree Visualization"}),n.jsxs("p",{className:"bst-property-reminder",children:["Self-balancing: ",n.jsx("code",{children:"|Balance Factor| <= 1"})," for all nodes"]}),n.jsx("div",{className:"tree-container",children:n.jsx(j0,{tree:e,currentNode:V,visitedNodes:D,searchPath:w,searchResult:j})}),n.jsx(N0,{traversalType:I,traversalResult:g,isAnimating:E,traversalComplete:K})]})]}),n.jsx(me,{dataStructure:"avl"})]})}const qt=7,w0={inorder:{name:"Inorder Traversal",order:"Left -> Root -> Right",description:"Returns elements in SORTED order.",useCase:["Get sorted elements","Validate BST property"],complexity:{time:"O(n)",space:"O(h)"}},preorder:{name:"Preorder Traversal",order:"Root -> Left -> Right",description:"Process root first. Root shows most recently accessed!",useCase:["See access pattern","Serialize structure"],complexity:{time:"O(n)",space:"O(h)"}},postorder:{name:"Postorder Traversal",order:"Left -> Right -> Root",description:"Process children before root.",useCase:["Delete tree safely","Calculate subtree info"],complexity:{time:"O(n)",space:"O(h)"}},levelorder:{name:"Level Order Traversal",order:"Level by Level (BFS)",description:"Visit nodes level by level.",useCase:["Level-wise printing","Find width"],complexity:{time:"O(n)",space:"O(w)"}}},Sl=(e,t=0)=>e?Math.max(Sl(e.left,t+1),Sl(e.right,t+1)):t-1;function b0({insertValue:e,deleteValue:t,searchValue:r,size:s,height:i,message:a,tree:l,isAnimating:o,visitedNodes:c,lastSplayedValue:h,onInsertValueChange:d,onDeleteValueChange:p,onSearchValueChange:m,onInsert:b,onDelete:w,onSearch:k,onTraversal:j,onClear:f,onResetTraversal:g}){const v=(E,y)=>{const V=E.target.value;(V===""||V==="-"||/^-?\d*\.?\d*$/.test(V))&&y(V)};return n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Splay Tree"}),n.jsxs("div",{className:"splay-info-box",children:[n.jsx("strong",{children:"Key Feature:"})," Accessed nodes move to root!"]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"insertValue",children:"Insert Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"insertValue",value:e,onChange:E=>v(E,d),onKeyDown:E=>E.key==="Enter"&&b(),placeholder:"Enter a number",disabled:o}),n.jsx("button",{onClick:b,className:"btn btn-insert",disabled:o,children:"Insert"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"searchValue",children:"Search Value (Splays to Root!)"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"searchValue",value:r,onChange:E=>v(E,m),onKeyDown:E=>E.key==="Enter"&&k(),placeholder:"Enter a number",disabled:o}),n.jsxs("button",{onClick:k,className:"btn btn-search",disabled:o||!l,children:[n.jsx(ur,{size:16})," Search"]})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"deleteValue",children:"Delete Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"deleteValue",value:t,onChange:E=>v(E,p),onKeyDown:E=>E.key==="Enter"&&w(),placeholder:"Enter a number",disabled:o}),n.jsx("button",{onClick:w,className:"btn btn-delete",disabled:o,children:"Delete"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Traversals"}),n.jsx("div",{className:"btn-group",children:["inorder","preorder","postorder","levelorder"].map(E=>n.jsx("button",{onClick:()=>j(E),className:"btn btn-traversal",disabled:o||!l,children:E==="levelorder"?"Level Order":E.charAt(0).toUpperCase()+E.slice(1)},E))}),c.length>0&&!o&&n.jsx("button",{onClick:g,className:"btn btn-secondary",style:{marginTop:"0.5rem",width:"100%"},children:"Reset Colors"})]}),n.jsxs("div",{className:"traversal-legend",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--default"}),n.jsx("span",{children:"Not visited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--visiting"}),n.jsx("span",{children:"Current"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--visited"}),n.jsx("span",{children:"Visited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot",style:{background:"#ec4899"}}),n.jsx("span",{children:"Root (Splayed)"})]})]}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Nodes:"}),n.jsx("span",{className:"info-value",children:s})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Height:"}),n.jsx("span",{className:"info-value",children:i})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Max:"}),n.jsx("span",{className:"info-value",children:qt})]})]}),h!==null&&n.jsxs("div",{className:"splay-result-box",children:[n.jsx("strong",{children:"Root:"})," ",h," (most recently accessed)"]}),s>=qt*.8&&s<qt&&n.jsxs("div",{className:"warning-box",children:[n.jsx(kn,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Tree filling up!"})," ",s,"/",qt," nodes."]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:f,className:"btn btn-clear",disabled:o,children:"Clear Tree"})}),a&&n.jsx("div",{className:`message message-${a.includes("Error")||a.includes("error")||a.includes("not found")?"error":/success|complete|Inserted|Deleted|cleared|Found|root/i.test(a)?"success":a.includes("full")?"warning":"info"}`,children:a})]})}function S0({tree:e,currentNode:t,visitedNodes:r,lastSplayedValue:s}){const i=(h,d)=>{const p=t===h,m=r.includes(h),b=d&&s===h;let w="#06b6d4",k="none";return p?(w="#f59e0b",k="drop-shadow(0 0 12px #f59e0b) drop-shadow(0 0 20px #f59e0b)"):b?(w="#ec4899",k="drop-shadow(0 0 15px #ec4899) drop-shadow(0 0 25px #ec4899)"):d?(w="#8b5cf6",k="drop-shadow(0 0 8px #8b5cf6)"):m&&(w="#10b981",k="drop-shadow(0 0 6px #10b981)"),{color:w,glow:k,radius:p||b?30:d?28:25,stroke:p||b?3:2,fontSize:p||b?16:14,fontWeight:p||b||d?"bold":"normal"}},a=(h,d,p,m,b,w=!1)=>{if(!h)return[];const k=Math.pow(2,b-m)*50,j=i(h.value,w),f=[];return h.left&&(f.push(n.jsx("line",{x1:d,y1:p,x2:d-k,y2:p+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:2},`l-${h.value}-l`)),f.push(...a(h.left,d-k,p+100,m+1,b,!1))),h.right&&(f.push(n.jsx("line",{x1:d,y1:p,x2:d+k,y2:p+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:2},`l-${h.value}-r`)),f.push(...a(h.right,d+k,p+100,m+1,b,!1))),f.push(n.jsxs("g",{style:{filter:j.glow,transition:"all 0.3s ease"},children:[n.jsx("circle",{cx:d,cy:p,r:j.radius,fill:j.color,stroke:"white",strokeWidth:j.stroke,style:{transition:"all 0.3s ease"}}),n.jsx("text",{x:d,y:p,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:j.fontSize,fontWeight:j.fontWeight,children:h.value}),w&&n.jsx("text",{x:d,y:p+j.radius+15,textAnchor:"middle",fill:"#ec4899",fontSize:10,fontWeight:"bold",children:"ROOT"})]},`n-${h.value}-${d}`)),f};if(!e)return n.jsxs("div",{className:"tree-empty",children:[n.jsx("p",{children:"Splay Tree is empty. Insert some values!"}),n.jsx("p",{className:"tree-empty-hint",children:"Try inserting: 50, 30, 70, then search for 30!"})]});const l=Sl(e),o=(l+1)*100+70,c=Math.max(800,Math.pow(2,Math.max(l,1))*80);return n.jsx("svg",{width:c,height:o,className:"tree-svg",children:a(e,c/2,50,0,l,!0)})}function C0({traversalType:e,traversalResult:t,isAnimating:r,traversalComplete:s}){if(!e||t.length===0&&!r)return null;const i=w0[e];return n.jsxs("div",{className:"traversal-output-panel",children:[n.jsxs("div",{style:{marginBottom:"1rem"},children:[n.jsxs("h3",{className:"traversal-title",children:[i==null?void 0:i.name,r&&n.jsx("span",{className:"traversal-badge traversal-badge--running",children:"Running..."}),s&&n.jsx("span",{className:"traversal-badge traversal-badge--complete",children:"Complete"})]}),n.jsxs("p",{className:"traversal-order",children:[n.jsx("strong",{children:"Order:"})," ",i==null?void 0:i.order]}),n.jsx("p",{className:"traversal-description",children:i==null?void 0:i.description})]}),n.jsxs("div",{className:"traversal-output-box",children:[n.jsx("div",{className:"traversal-output-label",children:"Output Sequence:"}),n.jsx("div",{className:"traversal-sequence-container",children:t.length===0&&r?n.jsx("span",{style:{color:"var(--text-muted)",fontStyle:"italic"},children:"Traversing..."}):t.map((a,l)=>n.jsx("span",{className:`traversal-node ${l===t.length-1&&!s?"traversal-node--current":"traversal-node--complete"}`,children:a},l))})]}),s&&t.length>0&&n.jsxs("div",{className:"traversal-array-section",children:[n.jsx("div",{className:"traversal-array-label",children:"Array Output:"}),n.jsxs("code",{className:"traversal-array-output",children:["[",t.join(", "),"]"]}),e==="preorder"&&n.jsx("p",{className:"traversal-sorted-note",children:"Note: First element is the root (most recently accessed)!"}),n.jsxs("p",{className:"traversal-use-case",children:["Use case: ",i==null?void 0:i.useCase.join(" | ")]}),n.jsxs("div",{className:"traversal-complexity",children:[n.jsx("strong",{children:"Time:"})," ",n.jsx("code",{className:"complexity-value",children:i==null?void 0:i.complexity.time}),n.jsx("br",{}),n.jsx("strong",{children:"Space:"})," ",n.jsx("code",{className:"complexity-value",children:i==null?void 0:i.complexity.space})]})]})]})}function T0(){const[e,t]=u.useState(null),[r,s]=u.useState(0),[i,a]=u.useState(-1),[l,o]=u.useState(""),[c,h]=u.useState(""),[d,p]=u.useState(""),[m,b]=u.useState(""),[w,k]=u.useState(null),[j,f]=u.useState([]),[g,v]=u.useState(!1),[E,y]=u.useState(null),[V,T]=u.useState([]),[D,A]=u.useState(null),[I,q]=u.useState(!1);u.useEffect(()=>{K()},[]);const K=async()=>{try{const M=await(await fetch("/api/splay")).json();t(M.tree),s(M.size||0),a(M.height!==void 0?M.height:-1)}catch(S){console.error("Error loading Splay Tree:",S)}},B=S=>{b(S),setTimeout(()=>b(""),3e3)},$=async()=>{if(!l.trim()){B("Please enter a number!");return}const S=Number(l);if(isNaN(S)){B("Please enter a valid number!");return}if(r>=qt){B(`Tree is full! Maximum size is ${qt} nodes.`);return}O(),k(null);try{const z=await(await fetch("/api/splay/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:S})})).json();if(z.error){B(z.error);return}t(z.tree),s(z.size||0),a(z.height!==void 0?z.height:-1),k(S),B(`Inserted ${S} (now at root!)`),o("")}catch{B("Error inserting node")}},x=async()=>{if(!c.trim()){B("Please enter a number!");return}const S=Number(c);if(isNaN(S)){B("Please enter a valid number!");return}O(),k(null);try{const z=await(await fetch("/api/splay/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:S})})).json();if(z.error){B(z.error);return}t(z.tree),s(z.size||0),a(z.height!==void 0?z.height:-1),B(`Deleted ${S}`),h("")}catch{B("Error deleting node")}},R=async()=>{if(!d.trim()){B("Please enter a number!");return}const S=Number(d);if(isNaN(S)){B("Please enter a valid number!");return}if(!e){B("Tree is empty!");return}O(),v(!0);try{const z=await(await fetch(`/api/splay/search?value=${S}`)).json();z.tree&&t(z.tree),z.found?(k(S),B(`Found ${S}! (splayed to root)`)):(k(null),B(`${S} not found in Splay Tree`)),await K()}catch{B("Error searching")}v(!1),p("")},H=async()=>{try{await fetch("/api/splay/clear",{method:"POST"}),t(null),s(0),a(-1),O(),k(null),B("Splay Tree cleared!")}catch{B("Error clearing tree")}},_=async S=>{if(!e){B("Tree is empty! Insert some nodes first.");return}k(null),v(!0),f([]),y(null),T([]),A(S),q(!1);try{const C=(await(await fetch(`/api/splay/${S}`)).json()).traversal||[];if(C.length===0){B("Tree is empty!"),v(!1);return}for(let L=0;L<C.length;L++)y(C[L]),await new Promise(N=>setTimeout(N,600)),T(N=>[...N,C[L]]),f(N=>[...N,C[L]]),await new Promise(N=>setTimeout(N,200));y(null),q(!0),v(!1);const P=S.charAt(0).toUpperCase()+S.slice(1);B(`${P} traversal complete!`)}catch(M){console.error("Traversal error:",M),B("Error performing traversal"),v(!1)}},O=()=>{f([]),y(null),T([]),A(null),q(!1)};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsx("div",{className:"intro-left",children:n.jsx(hr,{dataStructure:"splay"})}),n.jsx(fe,{context:"Splay Tree data structure, self-adjusting BST, splay operations, zig-zig, zig-zag rotations, amortized O(log n)"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsx(b0,{insertValue:l,deleteValue:c,searchValue:d,size:r,height:i,message:m,tree:e,isAnimating:g,visitedNodes:V,lastSplayedValue:w,onInsertValueChange:o,onDeleteValueChange:h,onSearchValueChange:p,onInsert:$,onDelete:x,onSearch:R,onTraversal:_,onClear:H,onResetTraversal:()=>{O(),k(null)}}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Splay Tree Visualization"}),n.jsxs("p",{className:"bst-property-reminder",children:["Self-adjusting: ",n.jsx("code",{children:"Recently accessed = Root"})]}),n.jsx("div",{className:"tree-container",children:n.jsx(S0,{tree:e,currentNode:E,visitedNodes:V,lastSplayedValue:w})}),n.jsx(C0,{traversalType:D,traversalResult:j,isAnimating:g,traversalComplete:I})]})]}),n.jsx(me,{dataStructure:"splay"})]})}const Ut=15,L0={inorder:{name:"Inorder Traversal",order:"Left -> Root -> Right",description:"Returns elements in SORTED order (BST property preserved in treap).",useCase:["Get sorted elements","Validate BST property","Range queries"],complexity:{time:"O(n)",space:"O(h)"}},preorder:{name:"Preorder Traversal",order:"Root -> Left -> Right",description:"Process root first. Shows the priority-based structure of the treap.",useCase:["Copy tree structure","Serialize treap","Prefix expressions"],complexity:{time:"O(n)",space:"O(h)"}},postorder:{name:"Postorder Traversal",order:"Left -> Right -> Root",description:"Process children before root. Useful for deletion operations.",useCase:["Delete tree safely","Calculate subtree sizes","Postfix expressions"],complexity:{time:"O(n)",space:"O(h)"}},levelorder:{name:"Level Order Traversal",order:"Level by Level (BFS)",description:"Visit nodes level by level. Reveals the heap-ordered priority structure.",useCase:["Level-wise printing","Verify heap property","Serialize for reconstruction"],complexity:{time:"O(n)",space:"O(w)"}}},Cl=(e,t=0)=>e?Math.max(Cl(e.left,t+1),Cl(e.right,t+1)):t-1,_0=(e,t)=>{const r=[];let s=e;for(;s&&(r.push(s.value),s.value!==t);)t<s.value?s=s.left:s=s.right;return r},E0=e=>{const r=40+e/100*60,s=55-e/100*15;return`hsl(260, ${r}%, ${s}%)`};function O0({insertValue:e,deleteValue:t,searchValue:r,size:s,height:i,message:a,tree:l,isAnimating:o,visitedNodes:c,searchPath:h,searchResult:d,onInsertValueChange:p,onDeleteValueChange:m,onSearchValueChange:b,onInsert:w,onDelete:k,onSearch:j,onTraversal:f,onClear:g,onResetTraversal:v}){const E=(y,V)=>{const T=y.target.value;(T===""||T==="-"||/^-?\d*\.?\d*$/.test(T))&&V(T)};return n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Treap"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"insertValue",children:"Insert Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"insertValue",value:e,onChange:y=>E(y,p),onKeyDown:y=>y.key==="Enter"&&w(),placeholder:"Enter a number",disabled:o}),n.jsx("button",{onClick:w,className:"btn btn-insert",disabled:o,children:"Insert"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"searchValue",children:"Search Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"searchValue",value:r,onChange:y=>E(y,b),onKeyDown:y=>y.key==="Enter"&&j(),placeholder:"Enter a number",disabled:o}),n.jsxs("button",{onClick:j,className:"btn btn-search",disabled:o||!l,children:[n.jsx(ur,{size:16})," Search"]})]}),h.length>0&&n.jsxs("div",{className:"search-path-display",children:[n.jsx("span",{className:"search-path-label",children:"Path:"}),n.jsx("div",{className:"search-path-nodes",children:h.map((y,V)=>n.jsxs($e.Fragment,{children:[n.jsx("span",{className:`search-path-node ${V===h.length-1?d?"found":"not-found":""}`,children:y}),V<h.length-1&&n.jsx(se,{size:14,className:"search-path-arrow"})]},V))})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"deleteValue",children:"Delete Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"deleteValue",value:t,onChange:y=>E(y,m),onKeyDown:y=>y.key==="Enter"&&k(),placeholder:"Enter a number",disabled:o}),n.jsx("button",{onClick:k,className:"btn btn-delete",disabled:o,children:"Delete"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Traversals"}),n.jsx("div",{className:"btn-group",children:["inorder","preorder","postorder","levelorder"].map(y=>n.jsxs("button",{onClick:()=>f(y),className:`btn btn-traversal ${y==="inorder"?"btn-traversal-primary":""}`,disabled:o||!l,title:y==="inorder"?"Returns sorted order!":"",children:[y==="levelorder"?"Level Order":y.charAt(0).toUpperCase()+y.slice(1),y==="inorder"&&n.jsx("span",{className:"sorted-badge",children:"Sorted!"})]},y))}),c.length>0&&!o&&n.jsx("button",{onClick:v,className:"btn btn-secondary",style:{marginTop:"0.5rem",width:"100%"},children:"Reset Colors"})]}),n.jsxs("div",{className:"traversal-legend",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--default"}),n.jsx("span",{children:"Not visited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--visiting"}),n.jsx("span",{children:"Current"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--visited"}),n.jsx("span",{children:"Visited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot legend-dot--search"}),n.jsx("span",{children:"Search path"})]})]}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Nodes:"}),n.jsx("span",{className:"info-value",children:s})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Height:"}),n.jsx("span",{className:"info-value",children:i})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Max:"}),n.jsx("span",{className:"info-value",children:Ut})]})]}),s>=Ut*.8&&s<Ut&&n.jsxs("div",{className:"warning-box",children:[n.jsx(kn,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Tree filling up!"})," ",s,"/",Ut," nodes."]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:g,className:"btn btn-clear",disabled:o,children:"Clear Tree"})}),a&&n.jsx("div",{className:`message message-${a.includes("Error")||a.includes("error")||a.includes("not found")||a.includes("already exists")?"error":/success|complete|Inserted|Deleted|cleared|Found/i.test(a)?"success":a.includes("full")?"warning":"info"}`,children:a})]})}function R0({tree:e,currentNode:t,visitedNodes:r,searchPath:s,searchResult:i}){const a=d=>{const p=t===d,m=r.includes(d),b=s.includes(d),w=s.length>0&&s[s.length-1]===d;let k="#6366f1",j="none";return p?(k="#f59e0b",j="drop-shadow(0 0 12px #f59e0b) drop-shadow(0 0 20px #f59e0b)"):w?(k=i?"#10b981":"#ef4444",j=i?"drop-shadow(0 0 12px #10b981)":"drop-shadow(0 0 12px #ef4444)"):b?(k="#3b82f6",j="drop-shadow(0 0 8px #3b82f6)"):m&&(k="#10b981",j="drop-shadow(0 0 6px #10b981)"),{color:k,glow:j,radius:p||w?30:25,stroke:p||w?3:2,fontSize:p||w?15:13,fontWeight:p||w?"bold":"normal"}},l=(d,p,m,b,w)=>{if(!d)return[];const k=Math.pow(2,w-b)*50,j=a(d.value),f=[],v=j.color==="#6366f1"?E0(d.priority):j.color;if(d.left){const E=s.includes(d.value)&&s.includes(d.left.value);f.push(n.jsx("line",{x1:p,y1:m,x2:p-k,y2:m+100,stroke:E?"#3b82f6":"rgba(255,255,255,0.3)",strokeWidth:E?3:2},`l-${d.value}-l`)),f.push(...l(d.left,p-k,m+100,b+1,w))}if(d.right){const E=s.includes(d.value)&&s.includes(d.right.value);f.push(n.jsx("line",{x1:p,y1:m,x2:p+k,y2:m+100,stroke:E?"#3b82f6":"rgba(255,255,255,0.3)",strokeWidth:E?3:2},`l-${d.value}-r`)),f.push(...l(d.right,p+k,m+100,b+1,w))}return f.push(n.jsxs("g",{style:{filter:j.glow,transition:"all 0.3s ease"},children:[n.jsx("circle",{cx:p,cy:m,r:j.radius,fill:v,stroke:"white",strokeWidth:j.stroke,style:{transition:"all 0.3s ease"}}),n.jsx("text",{x:p,y:m-5,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:j.fontSize,fontWeight:j.fontWeight,children:d.value}),n.jsxs("text",{x:p,y:m+11,textAnchor:"middle",dominantBaseline:"middle",fill:"rgba(255,255,255,0.7)",fontSize:9,fontWeight:"normal",children:["p:",d.priority]})]},`n-${d.value}-${p}`)),f};if(!e)return n.jsxs("div",{className:"tree-empty",children:[n.jsx("p",{children:"Treap is empty. Insert some values!"}),n.jsx("p",{className:"tree-empty-hint",children:"Try: 50, 30, 70, 20, 40, 60, 80"})]});const o=Cl(e),c=(o+1)*100+50,h=Math.max(800,Math.pow(2,Math.max(o,1))*80);return n.jsx("svg",{width:h,height:c,className:"tree-svg",children:l(e,h/2,50,0,o)})}function P0({traversalType:e,traversalResult:t,isAnimating:r,traversalComplete:s}){if(!e||t.length===0&&!r)return null;const i=L0[e];return n.jsxs("div",{className:"traversal-output-panel",children:[n.jsxs("div",{style:{marginBottom:"1rem"},children:[n.jsxs("h3",{className:"traversal-title",children:[i==null?void 0:i.name,e==="inorder"&&n.jsx("span",{className:"sorted-indicator",children:"Returns Sorted Order!"}),r&&n.jsx("span",{className:"traversal-badge traversal-badge--running",children:"Running..."}),s&&n.jsx("span",{className:"traversal-badge traversal-badge--complete",children:"Complete"})]}),n.jsxs("p",{className:"traversal-order",children:[n.jsx("strong",{children:"Order:"})," ",i==null?void 0:i.order]}),n.jsx("p",{className:"traversal-description",children:i==null?void 0:i.description})]}),n.jsxs("div",{className:"traversal-output-box",children:[n.jsx("div",{className:"traversal-output-label",children:"Output Sequence:"}),n.jsx("div",{className:"traversal-sequence-container",children:t.length===0&&r?n.jsx("span",{style:{color:"var(--text-muted)",fontStyle:"italic"},children:"Traversing..."}):t.map((a,l)=>n.jsx("span",{className:`traversal-node ${l===t.length-1&&!s?"traversal-node--current":"traversal-node--complete"}`,children:a},l))})]}),s&&t.length>0&&n.jsxs("div",{className:"traversal-array-section",children:[n.jsx("div",{className:"traversal-array-label",children:"Array Output:"}),n.jsxs("code",{className:"traversal-array-output",children:["[",t.join(", "),"]"]}),e==="inorder"&&n.jsx("p",{className:"traversal-sorted-note",children:"Notice: The output is sorted! BST property is maintained in the treap."}),n.jsxs("p",{className:"traversal-use-case",children:["Use case: ",i==null?void 0:i.useCase.join(" | ")]}),n.jsxs("div",{className:"traversal-complexity",children:[n.jsx("strong",{children:"Time:"})," ",n.jsx("code",{className:"complexity-value",children:i==null?void 0:i.complexity.time}),n.jsx("br",{}),n.jsx("strong",{children:"Space:"})," ",n.jsx("code",{className:"complexity-value",children:i==null?void 0:i.complexity.space})]})]})]})}function I0(){const[e,t]=u.useState(null),[r,s]=u.useState(0),[i,a]=u.useState(-1),[l,o]=u.useState(""),[c,h]=u.useState(""),[d,p]=u.useState(""),[m,b]=u.useState(""),[w,k]=u.useState([]),[j,f]=u.useState(null),[g,v]=u.useState([]),[E,y]=u.useState(!1),[V,T]=u.useState(null),[D,A]=u.useState([]),[I,q]=u.useState(null),[K,B]=u.useState(!1);u.useEffect(()=>{$()},[]);const $=async()=>{try{const P=await(await fetch("/api/treap")).json();t(P.tree),s(P.size||0),a(P.height!==void 0?P.height:-1)}catch(C){console.error("Error loading Treap:",C)}},x=C=>{b(C),setTimeout(()=>b(""),3e3)},R=()=>{k([]),f(null)},H=async()=>{if(!l.trim()){x("Please enter a number!");return}const C=Number(l);if(isNaN(C)){x("Please enter a valid number!");return}if(r>=Ut){x(`Tree is full! Maximum size is ${Ut} nodes.`);return}R(),z();try{const L=await(await fetch("/api/treap/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:C})})).json();if(L.error){x(L.error);return}t(L.tree),s(L.size||0),a(L.height!==void 0?L.height:-1),x(`Inserted ${C}`),o("")}catch{x("Error inserting node")}},_=async()=>{if(!c.trim()){x("Please enter a number!");return}const C=Number(c);if(isNaN(C)){x("Please enter a valid number!");return}R(),z();try{const L=await(await fetch("/api/treap/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:C})})).json();if(L.error){x(L.error);return}t(L.tree),s(L.size||0),a(L.height!==void 0?L.height:-1),x(`Deleted ${C}`),h("")}catch{x("Error deleting node")}},O=async()=>{if(!d.trim()){x("Please enter a number!");return}const C=Number(d);if(isNaN(C)){x("Please enter a valid number!");return}if(!e){x("Tree is empty!");return}z(),y(!0);const P=_0(e,C);for(let L=0;L<P.length;L++)k(P.slice(0,L+1)),await new Promise(N=>setTimeout(N,500));try{const N=await(await fetch(`/api/treap/search?value=${C}`)).json();f(N.found),N.found?x(`Found ${C}!`):x(`${C} not found in treap`)}catch{x("Error searching")}y(!1),p("")},S=async()=>{try{await fetch("/api/treap/clear",{method:"POST"}),t(null),s(0),a(-1),z(),R(),x("Treap cleared!")}catch{x("Error clearing tree")}},M=async C=>{if(!e){x("Tree is empty! Insert some nodes first.");return}R(),y(!0),v([]),T(null),A([]),q(C),B(!1);try{const N=(await(await fetch(`/api/treap/${C}`)).json()).traversal||[];if(N.length===0){x("Tree is empty!"),y(!1);return}for(let G=0;G<N.length;G++)T(N[G]),await new Promise(W=>setTimeout(W,600)),A(W=>[...W,N[G]]),v(W=>[...W,N[G]]),await new Promise(W=>setTimeout(W,200));T(null),B(!0),y(!1);const F=C.charAt(0).toUpperCase()+C.slice(1);x(`${F} traversal complete!${C==="inorder"?" (Sorted!)":""}`)}catch(P){console.error("Traversal error:",P),x("Error performing traversal"),y(!1)}},z=()=>{v([]),T(null),A([]),q(null),B(!1)};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsx("div",{className:"intro-left",children:n.jsx(hr,{dataStructure:"treap"})}),n.jsx(fe,{context:"Treap data structure, combining BST and heap properties, random priorities, rotations, insert, delete, search operations"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsx(O0,{insertValue:l,deleteValue:c,searchValue:d,size:r,height:i,message:m,tree:e,isAnimating:E,visitedNodes:D,searchPath:w,searchResult:j,onInsertValueChange:o,onDeleteValueChange:h,onSearchValueChange:p,onInsert:H,onDelete:_,onSearch:O,onTraversal:M,onClear:S,onResetTraversal:()=>{z(),R()}}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Treap Visualization"}),n.jsxs("p",{className:"treap-property-reminder",children:[n.jsx("code",{children:"BST"})," on keys | ",n.jsx("code",{children:"Max-Heap"})," on priorities (p:)"]}),n.jsx("div",{className:"tree-container",children:n.jsx(R0,{tree:e,currentNode:V,visitedNodes:D,searchPath:w,searchResult:j})}),n.jsx(P0,{traversalType:I,traversalResult:g,isAnimating:E,traversalComplete:K})]})]}),n.jsx(me,{dataStructure:"treap"})]})}const ht=7;function z0({insertValue:e,buildArray:t,size:r,height:s,min:i,message:a,heap:l,isAnimating:o,onInsertValueChange:c,onBuildArrayChange:h,onInsert:d,onExtract:p,onPeek:m,onBuild:b,onClear:w}){const k=(j,f)=>{const g=j.target.value;(g===""||g==="-"||/^-?\d*\.?\d*$/.test(g))&&f(g)};return n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Min Heap"}),n.jsxs("div",{className:"heap-info-box",children:[n.jsx("strong",{children:"Priority Queue:"})," Minimum always at root!"]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"insertValue",children:"Insert Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"insertValue",value:e,onChange:j=>k(j,c),onKeyDown:j=>j.key==="Enter"&&d(),placeholder:"Enter a number",disabled:o}),n.jsx("button",{onClick:d,className:"btn btn-insert",disabled:o,children:"Insert"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Heap Operations"}),n.jsxs("div",{className:"btn-group-vertical",children:[n.jsxs("button",{onClick:p,className:"btn btn-extract",disabled:o||l.length===0,children:[n.jsx(Lg,{size:16})," Extract Min"]}),n.jsx("button",{onClick:m,className:"btn btn-peek",disabled:o||l.length===0,children:"Peek Min"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"buildArray",children:"Build from Array"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",id:"buildArray",value:t,onChange:j=>h(j.target.value),onKeyDown:j=>j.key==="Enter"&&b(),placeholder:"e.g., 5, 3, 8, 1, 2",disabled:o}),n.jsx("button",{onClick:b,className:"btn btn-build",disabled:o,children:"Build"})]})]}),n.jsxs("div",{className:"traversal-legend",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot",style:{background:"#10b981"}}),n.jsx("span",{children:"Root (Min)"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot",style:{background:"#6366f1"}}),n.jsx("span",{children:"Internal"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot",style:{background:"#8b5cf6"}}),n.jsx("span",{children:"Leaf"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot",style:{background:"#f59e0b"}}),n.jsx("span",{children:"Highlighted"})]})]}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Size:"}),n.jsx("span",{className:"info-value",children:r})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Height:"}),n.jsx("span",{className:"info-value",children:s})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Min:"}),n.jsx("span",{className:"info-value",children:i??"-"})]})]}),r>=ht*.8&&r<ht&&n.jsxs("div",{className:"warning-box",children:[n.jsx(kn,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Heap filling up!"})," ",r,"/",ht," elements."]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:w,className:"btn btn-clear",disabled:o,children:"Clear Heap"})}),a&&n.jsx("div",{className:`message message-${a.includes("Error")||a.includes("error")?"error":/success|complete|Inserted|Extracted|cleared|Built/i.test(a)?"success":a.includes("full")||a.includes("empty")?"warning":"info"}`,children:a})]})}function M0({tree:e,heap:t,highlightedIndex:r,swappingIndices:s}){const i=d=>{const p=r===d,m=s.includes(d),b=d===0;let w="#6366f1",k="none";return p||m?(w="#f59e0b",k="drop-shadow(0 0 12px #f59e0b)"):b&&(w="#10b981",k="drop-shadow(0 0 8px #10b981)"),{color:w,glow:k,radius:p||b?28:25}},a=(d,p=0)=>d?Math.max(a(d.left,p+1),a(d.right,p+1)):p-1,l=(d,p,m,b,w)=>{if(!d)return[];const k=Math.pow(2,w-b)*50,j=i(d.index),f=[];return d.left&&(f.push(n.jsx("line",{x1:p,y1:m,x2:p-k,y2:m+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:2},`l-${d.index}-l`)),f.push(...l(d.left,p-k,m+100,b+1,w))),d.right&&(f.push(n.jsx("line",{x1:p,y1:m,x2:p+k,y2:m+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:2},`l-${d.index}-r`)),f.push(...l(d.right,p+k,m+100,b+1,w))),f.push(n.jsxs("g",{style:{filter:j.glow,transition:"all 0.3s ease"},children:[n.jsx("circle",{cx:p,cy:m,r:j.radius,fill:j.color,stroke:"white",strokeWidth:2}),n.jsx("text",{x:p,y:m,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:14,fontWeight:"bold",children:d.value}),n.jsxs("text",{x:p,y:m+j.radius+12,textAnchor:"middle",fill:"rgba(255,255,255,0.6)",fontSize:10,children:["[",d.index,"]"]})]},`n-${d.index}`)),f};if(!e||t.length===0)return n.jsxs("div",{className:"tree-empty",children:[n.jsx("p",{children:"Min Heap is empty. Insert some values!"}),n.jsx("p",{className:"tree-empty-hint",children:"Try: 5, 3, 8, 1, 2 or build from array"})]});const o=a(e),c=(o+1)*100+80,h=Math.max(600,Math.pow(2,Math.max(o,1))*70);return n.jsx("svg",{width:h,height:c,className:"tree-svg",children:l(e,h/2,50,0,o)})}function V0({heap:e,highlightedIndex:t,swappingIndices:r}){return e.length===0?n.jsx("div",{className:"heap-array-empty",children:n.jsx("code",{children:"[ ]"})}):n.jsxs("div",{className:"heap-array-container",children:[n.jsx("div",{className:"heap-array",children:e.map((s,i)=>{const a=t===i,l=r.includes(i),o=i===0;return n.jsxs("div",{className:`heap-array-cell ${a||l?"highlighted":""} ${o?"root":""}`,children:[n.jsx("span",{className:"heap-array-index",children:i}),n.jsx("span",{className:"heap-array-value",children:s})]},i)})}),n.jsxs("div",{className:"heap-array-formulas",children:[n.jsxs("div",{className:"formula-item",children:[n.jsx("strong",{children:"Parent(i):"})," ",n.jsx("code",{children:"(i - 1) / 2"})]}),n.jsxs("div",{className:"formula-item",children:[n.jsx("strong",{children:"Left(i):"})," ",n.jsx("code",{children:"2*i + 1"})]}),n.jsxs("div",{className:"formula-item",children:[n.jsx("strong",{children:"Right(i):"})," ",n.jsx("code",{children:"2*i + 2"})]})]})]})}function A0(){const[e,t]=u.useState([]),[r,s]=u.useState(null),[i,a]=u.useState(0),[l,o]=u.useState(-1),[c,h]=u.useState(null),[d,p]=u.useState(""),[m,b]=u.useState(""),[w,k]=u.useState(""),[j,f]=u.useState(!1),[g,v]=u.useState(null),[E,y]=u.useState([]);u.useEffect(()=>{V()},[]);const V=async()=>{try{const $=await(await fetch("/api/minheap")).json();t($.heap||[]),s($.tree),a($.size||0),o($.height!==void 0?$.height:-1),h($.min)}catch(B){console.error("Error loading Min Heap:",B)}},T=B=>{k(B),setTimeout(()=>k(""),3e3)},D=async()=>{if(!d.trim()){T("Please enter a number!");return}const B=Number(d);if(isNaN(B)){T("Please enter a valid number!");return}if(i>=ht){T(`Heap is full! Maximum size is ${ht}.`);return}f(!0);try{const x=await(await fetch("/api/minheap/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:B})})).json();if(x.error){T(x.error),f(!1);return}t(x.heap||[]),s(x.tree),a(x.size||0),o(x.height!==void 0?x.height:-1),h(x.min),T(`Inserted ${B}`),p("")}catch{T("Error inserting element")}f(!1)},A=async()=>{if(i===0){T("Heap is empty!");return}f(!0),v(0),await new Promise(B=>setTimeout(B,500));try{const $=await(await fetch("/api/minheap/extract",{method:"POST"})).json();if($.error){T($.error),f(!1),v(null);return}t($.heap||[]),s($.tree),a($.size||0),o($.height!==void 0?$.height:-1),h($.min),T(`Extracted minimum: ${$.extracted}`)}catch{T("Error extracting minimum")}v(null),f(!1)},I=async()=>{if(i===0){T("Heap is empty!");return}v(0),T(`Minimum element is ${c}`),await new Promise(B=>setTimeout(B,1500)),v(null)},q=async()=>{if(!m.trim()){T("Please enter an array of numbers!");return}const B=m.split(",").map($=>{const x=Number($.trim());return isNaN(x)?null:x}).filter($=>$!==null);if(B.length===0){T("Please enter valid numbers separated by commas!");return}if(B.length>ht){T(`Array too large! Maximum size is ${ht}.`);return}f(!0);try{const x=await(await fetch("/api/minheap/build",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({array:B})})).json();if(x.error){T(x.error),f(!1);return}t(x.heap||[]),s(x.tree),a(x.size||0),o(x.height!==void 0?x.height:-1),h(x.min),T("Built heap from array!"),b("")}catch{T("Error building heap")}f(!1)},K=async()=>{try{await fetch("/api/minheap/clear",{method:"POST"}),t([]),s(null),a(0),o(-1),h(null),v(null),y([]),T("Heap cleared!")}catch{T("Error clearing heap")}};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsx("div",{className:"intro-left",children:n.jsx(hr,{dataStructure:"minheap"})}),n.jsx(fe,{context:"Min Heap data structure, priority queue, heapify operations, O(log n) insert and extract, O(1) peek minimum"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsx(z0,{insertValue:d,buildArray:m,size:i,height:l,min:c,message:w,heap:e,isAnimating:j,onInsertValueChange:p,onBuildArrayChange:b,onInsert:D,onExtract:A,onPeek:I,onBuild:q,onClear:K}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Min Heap Visualization"}),n.jsxs("p",{className:"bst-property-reminder",children:["Heap Property: ",n.jsx("code",{children:"Parent <= Children"})," (Min at root)"]}),n.jsxs("div",{className:"heap-tree-section",children:[n.jsx("h3",{children:"Tree View"}),n.jsx("div",{className:"tree-container",children:n.jsx(M0,{tree:r,heap:e,highlightedIndex:g,swappingIndices:E})})]}),n.jsxs("div",{className:"heap-array-section",children:[n.jsx("h3",{children:"Array Representation"}),n.jsx(V0,{heap:e,highlightedIndex:g,swappingIndices:E})]})]})]}),n.jsx(me,{dataStructure:"minheap"})]})}const pt=7;function F0({insertValue:e,buildArray:t,size:r,height:s,max:i,message:a,heap:l,isAnimating:o,onInsertValueChange:c,onBuildArrayChange:h,onInsert:d,onExtract:p,onPeek:m,onBuild:b,onClear:w}){const k=(j,f)=>{const g=j.target.value;(g===""||g==="-"||/^-?\d*\.?\d*$/.test(g))&&f(g)};return n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Max Heap"}),n.jsxs("div",{className:"heap-info-box max-heap",children:[n.jsx("strong",{children:"Priority Queue:"})," Maximum always at root!"]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"insertValue",children:"Insert Value"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"insertValue",value:e,onChange:j=>k(j,c),onKeyDown:j=>j.key==="Enter"&&d(),placeholder:"Enter a number",disabled:o}),n.jsx("button",{onClick:d,className:"btn btn-insert",disabled:o,children:"Insert"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Heap Operations"}),n.jsxs("div",{className:"btn-group-vertical",children:[n.jsxs("button",{onClick:p,className:"btn btn-extract-max",disabled:o||l.length===0,children:[n.jsx(Og,{size:16})," Extract Max"]}),n.jsx("button",{onClick:m,className:"btn btn-peek",disabled:o||l.length===0,children:"Peek Max"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{htmlFor:"buildArray",children:"Build from Array"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",id:"buildArray",value:t,onChange:j=>h(j.target.value),onKeyDown:j=>j.key==="Enter"&&b(),placeholder:"e.g., 5, 3, 8, 1, 2",disabled:o}),n.jsx("button",{onClick:b,className:"btn btn-build",disabled:o,children:"Build"})]})]}),n.jsxs("div",{className:"traversal-legend",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot",style:{background:"#ef4444"}}),n.jsx("span",{children:"Root (Max)"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot",style:{background:"#6366f1"}}),n.jsx("span",{children:"Internal"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot",style:{background:"#8b5cf6"}}),n.jsx("span",{children:"Leaf"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-dot",style:{background:"#f59e0b"}}),n.jsx("span",{children:"Highlighted"})]})]}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Size:"}),n.jsx("span",{className:"info-value",children:r})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Height:"}),n.jsx("span",{className:"info-value",children:s})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Max:"}),n.jsx("span",{className:"info-value",children:i??"-"})]})]}),r>=pt*.8&&r<pt&&n.jsxs("div",{className:"warning-box",children:[n.jsx(kn,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Heap filling up!"})," ",r,"/",pt," elements."]})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:w,className:"btn btn-clear",disabled:o,children:"Clear Heap"})}),a&&n.jsx("div",{className:`message message-${a.includes("Error")||a.includes("error")?"error":/success|complete|Inserted|Extracted|cleared|Built/i.test(a)?"success":a.includes("full")||a.includes("empty")?"warning":"info"}`,children:a})]})}function D0({tree:e,heap:t,highlightedIndex:r,swappingIndices:s}){const i=d=>{const p=r===d,m=s.includes(d),b=d===0;let w="#6366f1",k="none";return p||m?(w="#f59e0b",k="drop-shadow(0 0 12px #f59e0b)"):b&&(w="#ef4444",k="drop-shadow(0 0 8px #ef4444)"),{color:w,glow:k,radius:p||b?28:25}},a=(d,p=0)=>d?Math.max(a(d.left,p+1),a(d.right,p+1)):p-1,l=(d,p,m,b,w)=>{if(!d)return[];const k=Math.pow(2,w-b)*50,j=i(d.index),f=[];return d.left&&(f.push(n.jsx("line",{x1:p,y1:m,x2:p-k,y2:m+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:2},`l-${d.index}-l`)),f.push(...l(d.left,p-k,m+100,b+1,w))),d.right&&(f.push(n.jsx("line",{x1:p,y1:m,x2:p+k,y2:m+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:2},`l-${d.index}-r`)),f.push(...l(d.right,p+k,m+100,b+1,w))),f.push(n.jsxs("g",{style:{filter:j.glow,transition:"all 0.3s ease"},children:[n.jsx("circle",{cx:p,cy:m,r:j.radius,fill:j.color,stroke:"white",strokeWidth:2}),n.jsx("text",{x:p,y:m,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:14,fontWeight:"bold",children:d.value}),n.jsxs("text",{x:p,y:m+j.radius+12,textAnchor:"middle",fill:"rgba(255,255,255,0.6)",fontSize:10,children:["[",d.index,"]"]})]},`n-${d.index}`)),f};if(!e||t.length===0)return n.jsxs("div",{className:"tree-empty",children:[n.jsx("p",{children:"Max Heap is empty. Insert some values!"}),n.jsx("p",{className:"tree-empty-hint",children:"Try: 5, 3, 8, 1, 9 or build from array"})]});const o=a(e),c=(o+1)*100+80,h=Math.max(600,Math.pow(2,Math.max(o,1))*70);return n.jsx("svg",{width:h,height:c,className:"tree-svg",children:l(e,h/2,50,0,o)})}function $0({heap:e,highlightedIndex:t,swappingIndices:r}){return e.length===0?n.jsx("div",{className:"heap-array-empty",children:n.jsx("code",{children:"[ ]"})}):n.jsxs("div",{className:"heap-array-container",children:[n.jsx("div",{className:"heap-array",children:e.map((s,i)=>{const a=t===i,l=r.includes(i),o=i===0;return n.jsxs("div",{className:`heap-array-cell ${a||l?"highlighted":""} ${o?"root-max":""}`,children:[n.jsx("span",{className:"heap-array-index",children:i}),n.jsx("span",{className:"heap-array-value",children:s})]},i)})}),n.jsxs("div",{className:"heap-array-formulas",children:[n.jsxs("div",{className:"formula-item",children:[n.jsx("strong",{children:"Parent(i):"})," ",n.jsx("code",{children:"(i - 1) / 2"})]}),n.jsxs("div",{className:"formula-item",children:[n.jsx("strong",{children:"Left(i):"})," ",n.jsx("code",{children:"2*i + 1"})]}),n.jsxs("div",{className:"formula-item",children:[n.jsx("strong",{children:"Right(i):"})," ",n.jsx("code",{children:"2*i + 2"})]})]})]})}function B0(){const[e,t]=u.useState([]),[r,s]=u.useState(null),[i,a]=u.useState(0),[l,o]=u.useState(-1),[c,h]=u.useState(null),[d,p]=u.useState(""),[m,b]=u.useState(""),[w,k]=u.useState(""),[j,f]=u.useState(!1),[g,v]=u.useState(null),[E,y]=u.useState([]);u.useEffect(()=>{V()},[]);const V=async()=>{try{const $=await(await fetch("/api/maxheap")).json();t($.heap||[]),s($.tree),a($.size||0),o($.height!==void 0?$.height:-1),h($.max)}catch(B){console.error("Error loading Max Heap:",B)}},T=B=>{k(B),setTimeout(()=>k(""),3e3)},D=async()=>{if(!d.trim()){T("Please enter a number!");return}const B=Number(d);if(isNaN(B)){T("Please enter a valid number!");return}if(i>=pt){T(`Heap is full! Maximum size is ${pt}.`);return}f(!0);try{const x=await(await fetch("/api/maxheap/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:B})})).json();if(x.error){T(x.error),f(!1);return}t(x.heap||[]),s(x.tree),a(x.size||0),o(x.height!==void 0?x.height:-1),h(x.max),T(`Inserted ${B}`),p("")}catch{T("Error inserting element")}f(!1)},A=async()=>{if(i===0){T("Heap is empty!");return}f(!0),v(0),await new Promise(B=>setTimeout(B,500));try{const $=await(await fetch("/api/maxheap/extract",{method:"POST"})).json();if($.error){T($.error),f(!1),v(null);return}t($.heap||[]),s($.tree),a($.size||0),o($.height!==void 0?$.height:-1),h($.max),T(`Extracted maximum: ${$.extracted}`)}catch{T("Error extracting maximum")}v(null),f(!1)},I=async()=>{if(i===0){T("Heap is empty!");return}v(0),T(`Maximum element is ${c}`),await new Promise(B=>setTimeout(B,1500)),v(null)},q=async()=>{if(!m.trim()){T("Please enter an array of numbers!");return}const B=m.split(",").map($=>{const x=Number($.trim());return isNaN(x)?null:x}).filter($=>$!==null);if(B.length===0){T("Please enter valid numbers separated by commas!");return}if(B.length>pt){T(`Array too large! Maximum size is ${pt}.`);return}f(!0);try{const x=await(await fetch("/api/maxheap/build",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({array:B})})).json();if(x.error){T(x.error),f(!1);return}t(x.heap||[]),s(x.tree),a(x.size||0),o(x.height!==void 0?x.height:-1),h(x.max),T("Built heap from array!"),b("")}catch{T("Error building heap")}f(!1)},K=async()=>{try{await fetch("/api/maxheap/clear",{method:"POST"}),t([]),s(null),a(0),o(-1),h(null),v(null),y([]),T("Heap cleared!")}catch{T("Error clearing heap")}};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsx("div",{className:"intro-left",children:n.jsx(hr,{dataStructure:"maxheap"})}),n.jsx(fe,{context:"Max Heap data structure, priority queue, heapify operations, O(log n) insert and extract, O(1) peek maximum, heap sort"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsx(F0,{insertValue:d,buildArray:m,size:i,height:l,max:c,message:w,heap:e,isAnimating:j,onInsertValueChange:p,onBuildArrayChange:b,onInsert:D,onExtract:A,onPeek:I,onBuild:q,onClear:K}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Max Heap Visualization"}),n.jsxs("p",{className:"bst-property-reminder",children:["Heap Property: ",n.jsx("code",{children:"Parent >= Children"})," (Max at root)"]}),n.jsxs("div",{className:"heap-tree-section",children:[n.jsx("h3",{children:"Tree View"}),n.jsx("div",{className:"tree-container",children:n.jsx(D0,{tree:r,heap:e,highlightedIndex:g,swappingIndices:E})})]}),n.jsxs("div",{className:"heap-array-section",children:[n.jsx("h3",{children:"Array Representation"}),n.jsx($0,{heap:e,highlightedIndex:g,swappingIndices:E})]})]})]}),n.jsx(me,{dataStructure:"maxheap"})]})}function H0(){const[e,t]=u.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=u.useState(""),[i,a]=u.useState(""),[l,o]=u.useState(""),[c,h]=u.useState("1"),[d,p]=u.useState(null),[m,b]=u.useState(null),[w,k]=u.useState(null),[j,f]=u.useState({}),{message:g,showMessage:v}=Fe(3e3);u.useEffect(()=>{y()},[]),u.useEffect(()=>{e.vertices.length>0&&E()},[e.vertices]),u.useEffect(()=>{if(d||m){const x=setTimeout(()=>{p(null),b(null),k(null)},2e3);return()=>clearTimeout(x)}},[d,m]);const E=u.useCallback(()=>{const O=Math.min(450,300)*.38,S={},M=e.vertices.length;e.vertices.forEach((z,C)=>{const P=2*Math.PI*C/M-Math.PI/2;S[z]={x:225+O*Math.cos(P),y:150+O*Math.sin(P)}}),f(S)},[e.vertices]),y=async()=>{try{const x=await ae("/api/graph");t(x)}catch(x){console.error("Error loading graph:",x)}},V=async()=>{if(!r.trim()){v("Please enter a vertex name!","error");return}try{const x=await Z("/api/graph/vertex",{vertex:r.trim()});if(x.error){v(x.error,"error");return}t(x),p(r.trim().toUpperCase()),k("add-vertex"),v(`Added vertex '${r}' - Created new entry in adjacency list`,"success"),s("")}catch{v("Error adding vertex","error")}},T=async x=>{try{const R=await ji(`/api/graph/vertex/${x}`);if(R.error){v(R.error,"error");return}t(R),v(`Removed vertex '${x}' - Deleted from list and all references`,"success")}catch{v("Error removing vertex","error")}},D=async()=>{if(!i.trim()||!l.trim()){v("Please select both vertices!","error");return}const x=parseInt(c)||1;try{const R=await Z("/api/graph/edge",{from:i.trim(),to:l.trim(),weight:x});if(R.error){v(R.error,"error");return}t(R),b({from:i,to:l}),k("add-edge"),v(`Added edge ${i}→${l} (weight: ${x}) - Appended to ${i}'s neighbor list`,"success"),a(""),o(""),h("1")}catch{v("Error adding edge","error")}},A=async()=>{if(!i.trim()||!l.trim()){v("Please select both vertices!","error");return}try{const x=await ji("/api/graph/edge",{from:i.trim(),to:l.trim()});if(x.error){v(x.error,"error");return}t(x),v(`Removed edge ${i}→${l} - Removed from neighbor lists`,"success"),a(""),o("")}catch{v("Error removing edge","error")}},I=async x=>{try{const R=await Z(`/api/graph/preset/${x}`,{});if(R.error){v(R.error,"error");return}t(R),v(`Loaded '${x}' graph preset`,"success")}catch{v("Error loading preset","error")}},q=async()=>{try{const x=await Z("/api/graph/clear",{});t(x),v("Graph cleared","success")}catch{v("Error clearing graph","error")}},K=(x,R)=>{x.key==="Enter"&&R()},B=x=>d===x&&w==="add-vertex"?"graph-node highlighted-new":m&&(m.from===x||m.to===x)?"graph-node highlighted-edge":"graph-node",$=(x,R)=>m&&(m.from===x&&m.to===R||m.from===R&&m.to===x)?"graph-edge highlighted":"graph-edge";return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Ce,{className:"icon-sm"}),n.jsx("span",{children:"What is an Adjacency List?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:["An ",n.jsx("strong",{children:"Adjacency List"})," represents a graph using a collection of lists. Each vertex stores a list of its neighboring vertices."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(xe,{}),n.jsx("span",{children:"Like a contact list - each person has their own list of friends they're connected to!"})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Add Vertex"}),n.jsx("span",{className:"op-desc",children:"Create new list"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Add Edge"}),n.jsx("span",{className:"op-desc",children:"Append to list"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Remove Edge"}),n.jsx("span",{className:"op-desc",children:"Search & delete"}),n.jsx("span",{className:"op-complexity",children:"O(E)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Find Neighbors"}),n.jsx("span",{className:"op-desc",children:"Return list"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]})]}),n.jsxs("div",{className:"concept-uses",children:[n.jsx("strong",{children:"Why Adjacency List?"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Space efficient for sparse graphs: O(V + E)"}),n.jsx("li",{children:"Fast iteration over neighbors"}),n.jsx("li",{children:"Easy to add vertices and edges"}),n.jsx("li",{children:"Supports weighted edges naturally"})]})]})]})]}),n.jsx(fe,{context:"Adjacency List graph representation, graph data structure"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Operations"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Load Preset"}),n.jsxs("div",{className:"btn-group preset-group",children:[n.jsx("button",{onClick:()=>I("simple"),className:"btn btn-preset",children:"Simple"}),n.jsx("button",{onClick:()=>I("tree"),className:"btn btn-preset",children:"Tree"}),n.jsx("button",{onClick:()=>I("cyclic"),className:"btn btn-preset",children:"Cyclic"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsxs("label",{htmlFor:"vertexInput",children:[n.jsx(yi,{size:14})," Add Vertex"]}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",id:"vertexInput",value:r,onChange:x=>s(x.target.value.toUpperCase()),onKeyPress:x=>K(x,V),placeholder:"Name (e.g., A)",maxLength:3}),n.jsx("button",{onClick:V,className:"btn btn-add",children:"Add"})]}),n.jsx("span",{className:"operation-hint",children:"Creates a new empty list entry"})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Add/Remove Edge (with Weight)"}),n.jsxs("div",{className:"edge-inputs",children:[n.jsxs("select",{value:i,onChange:x=>a(x.target.value),className:"vertex-select",children:[n.jsx("option",{value:"",children:"From"}),e.vertices.map(x=>n.jsx("option",{value:x,children:x},x))]}),n.jsx("span",{className:"edge-arrow",children:"→"}),n.jsxs("select",{value:l,onChange:x=>o(x.target.value),className:"vertex-select",children:[n.jsx("option",{value:"",children:"To"}),e.vertices.map(x=>n.jsx("option",{value:x,children:x},x))]})]}),n.jsxs("div",{className:"weight-input",children:[n.jsx("label",{htmlFor:"weightInput",children:"Weight:"}),n.jsx("input",{type:"number",id:"weightInput",value:c,onChange:x=>h(x.target.value),min:"1",max:"99",className:"weight-field"})]}),n.jsxs("div",{className:"btn-group",children:[n.jsxs("button",{onClick:D,className:"btn btn-add",children:[n.jsx(yi,{size:14})," Add Edge"]}),n.jsxs("button",{onClick:A,className:"btn btn-remove",children:[n.jsx(xl,{size:14})," Remove"]})]}),n.jsx("span",{className:"operation-hint",children:"Appends neighbor to the vertex's list"})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:q,className:"btn btn-clear full-width",children:"Clear Graph"})}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Vertices (V):"}),n.jsx("span",{className:"info-value",children:e.vertex_count||0})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Edges (E):"}),n.jsx("span",{className:"info-value",children:e.edge_count||0})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Space:"}),n.jsx("span",{className:"info-value",children:"O(V + E)"})]})]}),n.jsx(Ae,{message:g})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Graph View"}),n.jsx("div",{className:"graph-container",children:e.vertices.length===0?n.jsx("div",{className:"graph-empty",children:"Graph is empty. Add vertices or load a preset!"}):n.jsxs("svg",{className:"graph-svg",viewBox:"0 0 450 300",children:[e.edges.map(([x,R,H],_)=>{const O=j[x],S=j[R];if(!O||!S)return null;const M=(O.x+S.x)/2,z=(O.y+S.y)/2;return n.jsxs("g",{children:[n.jsx("line",{x1:O.x,y1:O.y,x2:S.x,y2:S.y,className:$(x,R)}),n.jsx("circle",{cx:M,cy:z,r:12,className:"weight-bg"}),n.jsx("text",{x:M,y:z,className:"weight-label",dominantBaseline:"central",textAnchor:"middle",children:H})]},`edge-${_}`)}),e.vertices.map(x=>{const R=j[x];return R?n.jsxs("g",{className:B(x),children:[n.jsx("circle",{cx:R.x,cy:R.y,r:22,className:"node-circle"}),n.jsx("text",{x:R.x,y:R.y,className:"node-label",dominantBaseline:"central",textAnchor:"middle",children:x})]},x):null})]})}),n.jsxs("div",{className:"adjacency-list-section",children:[n.jsx("h3",{children:"Behind the Scenes: Adjacency List Structure"}),n.jsx("p",{className:"adj-explanation",children:"Each vertex has its own linked list of neighbors. When you add an edge A→B, we append B to A's list (and A to B's list for undirected graphs)."}),n.jsx("div",{className:"adj-list-visual",children:e.vertices.length===0?n.jsx("div",{className:"adj-empty",children:"No vertices in graph"}):e.vertices.map(x=>{const R=e.adjacency_list[x]||[],H=d===x||m&&(m.from===x||m.to===x);return n.jsxs("div",{className:`adj-row-visual ${H?"highlighted":""}`,children:[n.jsx("div",{className:"adj-vertex-box",children:n.jsx("span",{className:"adj-vertex-label",children:x})}),n.jsx("div",{className:"adj-pointer",children:n.jsx(se,{size:16})}),n.jsxs("div",{className:"adj-linked-list",children:[R.length===0?n.jsx("div",{className:"adj-null",children:"null"}):R.map(([_,O],S)=>{const M=m&&m.from===x&&m.to===_;return n.jsxs($e.Fragment,{children:[n.jsxs("div",{className:`adj-neighbor-node ${M?"highlighted":""}`,children:[n.jsx("span",{className:"neighbor-vertex",children:_}),n.jsxs("span",{className:"neighbor-weight",children:["w:",O]})]}),S<R.length-1&&n.jsx("div",{className:"adj-link",children:n.jsx(se,{size:14})})]},`${x}-${_}`)}),R.length>0&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"adj-link",children:n.jsx(se,{size:14})}),n.jsx("div",{className:"adj-null",children:"null"})]})]}),n.jsx("button",{className:"adj-remove-btn",onClick:()=>T(x),title:`Remove vertex ${x}`,children:n.jsx(xl,{size:14})})]},x)})}),n.jsxs("div",{className:"memory-hint",children:[n.jsx("strong",{children:"Memory Layout:"})," An array/hashmap stores vertex references, each pointing to the head of a linked list containing (neighbor, weight) pairs."]})]})]})]}),n.jsx(me,{dataStructure:"graph"})]})}function q0(){const[e,t]=u.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=u.useState([]),[i,a]=u.useState([]),[l,o]=u.useState(""),[c,h]=u.useState(""),[d,p]=u.useState(""),[m,b]=u.useState("1"),[w,k]=u.useState(null),[j,f]=u.useState(null),[g,v]=u.useState({}),{message:E,showMessage:y}=Fe(3e3);u.useEffect(()=>{T()},[]),u.useEffect(()=>{e.vertices.length>0?(D(),V()):(s([]),a([]))},[e]),u.useEffect(()=>{if(w){const _=setTimeout(()=>{k(null)},2e3);return()=>clearTimeout(_)}},[w]);const V=u.useCallback(()=>{const z=Math.min(350,250)*.38,C={},P=e.vertices.length;e.vertices.forEach((L,N)=>{const F=2*Math.PI*N/P-Math.PI/2;C[L]={x:175+z*Math.cos(F),y:125+z*Math.sin(F)}}),v(C)},[e.vertices]),T=async()=>{try{const _=await ae("/api/graph");t(_)}catch(_){console.error("Error loading graph:",_)}},D=async()=>{try{const _=await ae("/api/graph/matrix");s(_.matrix),a(_.vertices)}catch(_){console.error("Error loading matrix:",_)}},A=async()=>{if(!l.trim()){y("Please enter a vertex name!","error");return}try{const _=await Z("/api/graph/vertex",{vertex:l.trim()});if(_.error){y(_.error,"error");return}t(_),y(`Added vertex '${l}' - Added new row and column to matrix`,"success"),o("")}catch{y("Error adding vertex","error")}},I=async _=>{try{const O=await ji(`/api/graph/vertex/${_}`);if(O.error){y(O.error,"error");return}t(O),y(`Removed vertex '${_}' - Removed row and column from matrix`,"success")}catch{y("Error removing vertex","error")}},q=async()=>{if(!c.trim()||!d.trim()){y("Please select both vertices!","error");return}const _=parseInt(m)||1;try{const O=await Z("/api/graph/edge",{from:c.trim(),to:d.trim(),weight:_});if(O.error){y(O.error,"error");return}t(O);const S=i.indexOf(c),M=i.indexOf(d);k({row:S,col:M}),y(`Added edge: matrix[${c}][${d}] = ${_}`,"success"),h(""),p(""),b("1")}catch{y("Error adding edge","error")}},K=async()=>{if(!c.trim()||!d.trim()){y("Please select both vertices!","error");return}try{const _=await ji("/api/graph/edge",{from:c.trim(),to:d.trim()});if(_.error){y(_.error,"error");return}t(_),y(`Removed edge: matrix[${c}][${d}] = 0`,"success"),h(""),p("")}catch{y("Error removing edge","error")}},B=()=>{var z;if(!c.trim()||!d.trim()){y("Please select both vertices to check!","error");return}const _=i.indexOf(c),O=i.indexOf(d);if(_===-1||O===-1){y("Vertex not found!","error");return}const S=((z=r[_])==null?void 0:z[O])||0,M=S>0;k({row:_,col:O}),f({from:c,to:d,exists:M,weight:S}),y(M?`Edge exists! matrix[${c}][${d}] = ${S} (O(1) lookup)`:`No edge: matrix[${c}][${d}] = 0 (O(1) lookup)`,M?"success":"info")},$=async _=>{try{const O=await Z(`/api/graph/preset/${_}`,{});if(O.error){y(O.error,"error");return}t(O),f(null),y(`Loaded '${_}' graph preset`,"success")}catch{y("Error loading preset","error")}},x=async()=>{try{const _=await Z("/api/graph/clear",{});t(_),s([]),a([]),f(null),y("Graph cleared","success")}catch{y("Error clearing graph","error")}},R=(_,O)=>{_.key==="Enter"&&O()},H=(_,O,S)=>{let M="matrix-cell";return w&&w.row===_&&w.col===O&&(M+=" highlighted"),w&&w.row===O&&w.col===_&&(M+=" highlighted"),S>0&&(M+=" has-edge"),_===O&&(M+=" diagonal"),M};return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Ce,{className:"icon-sm"}),n.jsx("span",{children:"What is an Adjacency Matrix?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:["An ",n.jsx("strong",{children:"Adjacency Matrix"})," is a 2D array where ",n.jsx("code",{children:"matrix[i][j]"})," represents the edge weight between vertex i and j (0 if no edge)."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(xe,{}),n.jsx("span",{children:"Like a spreadsheet where rows and columns are people, and cells show if they're friends!"})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Check Edge"}),n.jsx("span",{className:"op-desc",children:"Direct lookup"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Add Edge"}),n.jsx("span",{className:"op-desc",children:"Set cell value"}),n.jsx("span",{className:"op-complexity",children:"O(1)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Add Vertex"}),n.jsx("span",{className:"op-desc",children:"Resize matrix"}),n.jsx("span",{className:"op-complexity",children:"O(V²)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Space"}),n.jsx("span",{className:"op-desc",children:"2D array"}),n.jsx("span",{className:"op-complexity",children:"O(V²)"})]})]}),n.jsxs("div",{className:"concept-uses",children:[n.jsx("strong",{children:"When to Use:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Dense graphs (many edges)"}),n.jsx("li",{children:"Fast edge existence checks needed"}),n.jsx("li",{children:"Small number of vertices"}),n.jsx("li",{children:"Frequent edge weight updates"})]})]})]})]}),n.jsx(fe,{context:"Adjacency Matrix graph representation"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Operations"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Load Preset"}),n.jsxs("div",{className:"btn-group preset-group",children:[n.jsx("button",{onClick:()=>$("simple"),className:"btn btn-preset",children:"Simple"}),n.jsx("button",{onClick:()=>$("complete"),className:"btn btn-preset",children:"Complete"}),n.jsx("button",{onClick:()=>$("cyclic"),className:"btn btn-preset",children:"Cyclic"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsxs("label",{htmlFor:"vertexInput",children:[n.jsx(yi,{size:14})," Add Vertex"]}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",id:"vertexInput",value:l,onChange:_=>o(_.target.value.toUpperCase()),onKeyPress:_=>R(_,A),placeholder:"Name (e.g., A)",maxLength:3}),n.jsx("button",{onClick:A,className:"btn btn-add",children:"Add"})]}),n.jsx("span",{className:"operation-hint",children:"Adds new row & column (O(V²) resize)"})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Edge Operations"}),n.jsxs("div",{className:"edge-inputs",children:[n.jsxs("select",{value:c,onChange:_=>h(_.target.value),className:"vertex-select",children:[n.jsx("option",{value:"",children:"From"}),e.vertices.map(_=>n.jsx("option",{value:_,children:_},_))]}),n.jsx("span",{className:"edge-arrow",children:"→"}),n.jsxs("select",{value:d,onChange:_=>p(_.target.value),className:"vertex-select",children:[n.jsx("option",{value:"",children:"To"}),e.vertices.map(_=>n.jsx("option",{value:_,children:_},_))]})]}),n.jsxs("div",{className:"weight-input",children:[n.jsx("label",{htmlFor:"weightInput",children:"Weight:"}),n.jsx("input",{type:"number",id:"weightInput",value:m,onChange:_=>b(_.target.value),min:"1",max:"99",className:"weight-field"})]}),n.jsxs("div",{className:"btn-group",children:[n.jsxs("button",{onClick:q,className:"btn btn-add",children:[n.jsx(yi,{size:14})," Add"]}),n.jsxs("button",{onClick:K,className:"btn btn-remove",children:[n.jsx(xl,{size:14})," Remove"]}),n.jsxs("button",{onClick:B,className:"btn btn-check",children:[n.jsx(ur,{size:14})," Check"]})]}),n.jsx("span",{className:"operation-hint",children:"O(1) direct cell access"})]}),n.jsx("div",{className:"operation-group",children:n.jsx("button",{onClick:x,className:"btn btn-clear full-width",children:"Clear Graph"})}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Vertices (V):"}),n.jsx("span",{className:"info-value",children:e.vertex_count||0})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Edges (E):"}),n.jsx("span",{className:"info-value",children:e.edge_count||0})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Matrix Size:"}),n.jsxs("span",{className:"info-value",children:[i.length," × ",i.length]})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Space Used:"}),n.jsxs("span",{className:"info-value",children:["O(",i.length,"²) = ",i.length*i.length," cells"]})]})]}),j&&n.jsxs("div",{className:`lookup-result ${j.exists?"exists":"not-exists"}`,children:[n.jsx("strong",{children:"Lookup Result:"}),n.jsxs("code",{children:["matrix[",j.from,"][",j.to,"] = ",j.weight]}),n.jsx("span",{children:j.exists?"Edge exists!":"No edge"})]}),n.jsx(Ae,{message:E})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsxs("div",{className:"mini-graph-section",children:[n.jsx("h3",{children:"Graph View"}),n.jsx("div",{className:"mini-graph-container",children:e.vertices.length===0?n.jsx("div",{className:"graph-empty-mini",children:"Empty graph"}):n.jsxs("svg",{className:"mini-graph-svg",viewBox:"0 0 350 250",children:[e.edges.map(([_,O,S],M)=>{const z=g[_],C=g[O];return!z||!C?null:n.jsx("line",{x1:z.x,y1:z.y,x2:C.x,y2:C.y,className:"mini-edge"},`edge-${M}`)}),e.vertices.map(_=>{const O=g[_];return O?n.jsxs("g",{className:"mini-node",children:[n.jsx("circle",{cx:O.x,cy:O.y,r:18}),n.jsx("text",{x:O.x,y:O.y,dominantBaseline:"central",textAnchor:"middle",children:_})]},_):null})]})})]}),n.jsxs("div",{className:"matrix-section",children:[n.jsx("h3",{children:"Adjacency Matrix"}),n.jsxs("p",{className:"matrix-explanation",children:["Each cell ",n.jsx("code",{children:"matrix[row][col]"})," stores the edge weight (0 = no edge). Undirected graphs have symmetric matrices."]}),i.length===0?n.jsx("div",{className:"matrix-empty",children:"No vertices in graph. Add vertices or load a preset!"}):n.jsx("div",{className:"matrix-container",children:n.jsxs("table",{className:"adjacency-matrix",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{className:"matrix-corner"}),i.map((_,O)=>n.jsx("th",{className:"matrix-header col-header",children:_},_))]})}),n.jsx("tbody",{children:i.map((_,O)=>n.jsxs("tr",{children:[n.jsxs("th",{className:"matrix-header row-header",children:[_,n.jsx("button",{className:"remove-vertex-btn",onClick:()=>I(_),title:`Remove ${_}`,children:"×"})]}),i.map((S,M)=>{var z,C,P;return n.jsx("td",{className:H(O,M,(z=r[O])==null?void 0:z[M]),title:`matrix[${_}][${S}] = ${((C=r[O])==null?void 0:C[M])||0}`,children:((P=r[O])==null?void 0:P[M])||0},`${O}-${M}`)})]},_))})]})}),n.jsxs("div",{className:"comparison-hint",children:[n.jsx("strong",{children:"vs Adjacency List:"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("span",{className:"pro",children:"Pro:"})," O(1) edge lookup vs O(degree) for list"]}),n.jsxs("li",{children:[n.jsx("span",{className:"con",children:"Con:"})," O(V²) space vs O(V+E) for list"]}),n.jsxs("li",{children:[n.jsx("span",{className:"pro",children:"Pro:"})," Better for dense graphs (E ≈ V²)"]}),n.jsxs("li",{children:[n.jsx("span",{className:"con",children:"Con:"})," Wastes space for sparse graphs"]})]})]})]})]})]}),n.jsx(me,{dataStructure:"graph"})]})}function U0(){const[e,t]=u.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=u.useState(""),[i,a]=u.useState([]),[l,o]=u.useState([]),[c,h]=u.useState(-1),[d,p]=u.useState(!1),[m,b]=u.useState(!1),[w,k]=u.useState(new Set),[j,f]=u.useState(null),[g,v]=u.useState([]),[E,y]=u.useState({}),{message:V,showMessage:T}=Fe(3e3),D=u.useRef(null),A=u.useRef(0);u.useEffect(()=>{q()},[]),u.useEffect(()=>{e.vertices.length>0&&I()},[e.vertices]);const I=u.useCallback(()=>{const P=Math.min(500,350)*.35,L={},N=e.vertices.length;e.vertices.forEach((F,G)=>{const W=2*Math.PI*G/N-Math.PI/2;L[F]={x:250+P*Math.cos(W),y:175+P*Math.sin(W)}}),y(L)},[e.vertices]),q=async()=>{try{const S=await ae("/api/graph");S.vertices.length===0?await K("simple"):t(S)}catch(S){console.error("Error loading graph:",S)}},K=async S=>{try{const M=await Z(`/api/graph/preset/${S}`,{});if(M.error){T(M.error,"error");return}t(M),_(),T(`Loaded '${S}' preset`,"success")}catch{T("Error loading preset","error")}},B=async()=>{if(!r.trim()){T("Please select a starting vertex!","error");return}try{const S=await ae(`/api/graph/bfs/${r}`);if(S.error){T(S.error,"error");return}a(S.traversal),o(S.steps),T("Starting BFS traversal...","info"),$(S.steps)}catch{T("Error running BFS","error")}},$=S=>{D.current&&clearInterval(D.current),p(!0),b(!1),k(new Set),f(null),v([]),h(-1),A.current=0,D.current=setInterval(()=>{if(A.current>=S.length){clearInterval(D.current),p(!1),f(null),T(`BFS Complete: ${i.join(" → ")}`,"success");return}const M=S[A.current];h(A.current),M.action==="visit"?(f(M.vertex),k(new Set(M.visited)),v(M.queue||[])):M.action==="enqueue"&&v(M.queue||[]),A.current++},1e3)},x=()=>{m?(b(!1),R()):(b(!0),D.current&&clearInterval(D.current))},R=()=>{D.current&&clearInterval(D.current),D.current=setInterval(()=>{if(A.current>=l.length){clearInterval(D.current),p(!1),f(null);return}const S=l[A.current];h(A.current),S.action==="visit"?(f(S.vertex),k(new Set(S.visited)),v(S.queue||[])):S.action==="enqueue"&&v(S.queue||[]),A.current++},1e3)},H=()=>{if(A.current>=l.length)return;const S=l[A.current];h(A.current),S.action==="visit"?(f(S.vertex),k(new Set(S.visited)),v(S.queue||[])):S.action==="enqueue"&&v(S.queue||[]),A.current++,A.current>=l.length&&(p(!1),f(null))},_=()=>{D.current&&clearInterval(D.current),a([]),o([]),h(-1),k(new Set),f(null),v([]),p(!1),b(!1),A.current=0},O=S=>j===S?"graph-node current":w.has(S)?"graph-node visited":g.includes(S)?"graph-node queued":"graph-node";return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Ce,{className:"icon-sm"}),n.jsx("span",{children:"What is Breadth-First Search?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"BFS"})," explores a graph level by level, visiting all neighbors of a node before moving to the next level."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(xe,{}),n.jsx("span",{children:"Like ripples spreading outward when you drop a stone in water!"})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Time"}),n.jsx("span",{className:"op-desc",children:"Visit all nodes"}),n.jsx("span",{className:"op-complexity",children:"O(V+E)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Space"}),n.jsx("span",{className:"op-desc",children:"Queue storage"}),n.jsx("span",{className:"op-complexity",children:"O(V)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Structure"}),n.jsx("span",{className:"op-desc",children:"Uses a Queue"}),n.jsx("span",{className:"op-complexity",children:"FIFO"})]})]}),n.jsxs("div",{className:"concept-uses",children:[n.jsx("strong",{children:"Common Uses:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Shortest path in unweighted graphs"}),n.jsx("li",{children:"Level-order tree traversal"}),n.jsx("li",{children:"Finding connected components"}),n.jsx("li",{children:"Web crawlers"})]})]})]})]}),n.jsx(fe,{context:"Breadth-First Search (BFS) algorithm on graphs"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"BFS Controls"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Load Graph Preset"}),n.jsxs("div",{className:"btn-group preset-group",children:[n.jsx("button",{onClick:()=>K("simple"),className:"btn btn-preset",disabled:d,children:"Simple"}),n.jsx("button",{onClick:()=>K("tree"),className:"btn btn-preset",disabled:d,children:"Tree"}),n.jsx("button",{onClick:()=>K("cyclic"),className:"btn btn-preset",disabled:d,children:"Cyclic"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Start BFS From"}),n.jsxs("select",{value:r,onChange:S=>s(S.target.value),className:"vertex-select full-width",disabled:d,children:[n.jsx("option",{value:"",children:"Select start vertex"}),e.vertices.map(S=>n.jsx("option",{value:S,children:S},S))]})]}),n.jsx("div",{className:"operation-group",children:n.jsxs("div",{className:"btn-group",children:[n.jsxs("button",{onClick:B,className:"btn btn-bfs",disabled:d&&!m,children:[n.jsx(Ve,{size:14})," Run BFS"]}),d&&n.jsx("button",{onClick:x,className:"btn btn-pause",children:m?n.jsx(Ve,{size:14}):n.jsx(St,{size:14})}),m&&n.jsx("button",{onClick:H,className:"btn btn-step",children:n.jsx(Ct,{size:14})}),n.jsx("button",{onClick:_,className:"btn btn-reset",children:n.jsx(it,{size:14})})]})}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Vertices:"}),n.jsx("span",{className:"info-value",children:e.vertex_count||e.vertices.length})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Edges:"}),n.jsx("span",{className:"info-value",children:e.edge_count||0})]}),g.length>0&&n.jsxs("div",{className:"info-item queue-display",children:[n.jsx("span",{className:"info-label",children:"Queue:"}),n.jsxs("span",{className:"info-value queue-items",children:["[",g.join(", "),"]"]})]}),i.length>0&&n.jsxs("div",{className:"info-item traversal-result",children:[n.jsx("span",{className:"info-label",children:"Order:"}),n.jsx("span",{className:"info-value",children:i.join(" → ")})]})]}),n.jsx(Ae,{message:V}),n.jsxs("div",{className:"legend",children:[n.jsx("h3",{children:"Legend"}),n.jsxs("div",{className:"legend-items",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color unvisited"}),n.jsx("span",{children:"Unvisited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color queued"}),n.jsx("span",{children:"In Queue"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color current"}),n.jsx("span",{children:"Current"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color visited"}),n.jsx("span",{children:"Visited"})]})]})]})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"BFS Visualization"}),n.jsx("div",{className:"graph-container",children:e.vertices.length===0?n.jsx("div",{className:"graph-empty",children:"Loading graph..."}):n.jsxs("svg",{className:"graph-svg",viewBox:"0 0 500 350",children:[e.edges.map(([S,M],z)=>{const C=E[S],P=E[M];return!C||!P?null:n.jsx("line",{x1:C.x,y1:C.y,x2:P.x,y2:P.y,className:"graph-edge"},`edge-${z}`)}),e.vertices.map(S=>{const M=E[S];return M?n.jsxs("g",{className:O(S),children:[n.jsx("circle",{cx:M.x,cy:M.y,r:25,className:"node-circle"}),n.jsx("text",{x:M.x,y:M.y,className:"node-label",dominantBaseline:"central",textAnchor:"middle",children:S})]},S):null})]})}),n.jsxs("div",{className:"algorithm-steps",children:[n.jsx("h3",{children:"BFS Algorithm Steps"}),n.jsx("div",{className:"steps-content",children:n.jsxs("ol",{children:[n.jsx("li",{className:c>=0?"active":"",children:"Start at the selected vertex"}),n.jsx("li",{className:g.length>0?"active":"",children:"Add it to a queue and mark as visited"}),n.jsx("li",{className:j?"active":"",children:"Dequeue a vertex and explore its neighbors"}),n.jsx("li",{children:"Add unvisited neighbors to the queue"}),n.jsx("li",{children:"Repeat until queue is empty"})]})})]})]})]}),n.jsx(me,{dataStructure:"bfs"})]})}function K0(){const[e,t]=u.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=u.useState(""),[i,a]=u.useState([]),[l,o]=u.useState([]),[c,h]=u.useState(-1),[d,p]=u.useState(!1),[m,b]=u.useState(!1),[w,k]=u.useState(new Set),[j,f]=u.useState(null),[g,v]=u.useState([]),[E,y]=u.useState({}),{message:V,showMessage:T}=Fe(3e3),D=u.useRef(null),A=u.useRef(0);u.useEffect(()=>{q()},[]),u.useEffect(()=>{e.vertices.length>0&&I()},[e.vertices]);const I=u.useCallback(()=>{const P=Math.min(500,350)*.35,L={},N=e.vertices.length;e.vertices.forEach((F,G)=>{const W=2*Math.PI*G/N-Math.PI/2;L[F]={x:250+P*Math.cos(W),y:175+P*Math.sin(W)}}),y(L)},[e.vertices]),q=async()=>{try{const S=await ae("/api/graph");S.vertices.length===0?await K("simple"):t(S)}catch(S){console.error("Error loading graph:",S)}},K=async S=>{try{const M=await Z(`/api/graph/preset/${S}`,{});if(M.error){T(M.error,"error");return}t(M),_(),T(`Loaded '${S}' preset`,"success")}catch{T("Error loading preset","error")}},B=async()=>{if(!r.trim()){T("Please select a starting vertex!","error");return}try{const S=await ae(`/api/graph/dfs/${r}`);if(S.error){T(S.error,"error");return}a(S.traversal),o(S.steps),T("Starting DFS traversal...","info"),$(S.steps)}catch{T("Error running DFS","error")}},$=S=>{D.current&&clearInterval(D.current),p(!0),b(!1),k(new Set),f(null),v([]),h(-1),A.current=0,D.current=setInterval(()=>{if(A.current>=S.length){clearInterval(D.current),p(!1),f(null),T(`DFS Complete: ${i.join(" → ")}`,"success");return}const M=S[A.current];h(A.current),M.action==="visit"?(f(M.vertex),k(new Set(M.visited)),v(M.stack||[])):M.action==="push"&&v(M.stack||[]),A.current++},1e3)},x=()=>{m?(b(!1),R()):(b(!0),D.current&&clearInterval(D.current))},R=()=>{D.current&&clearInterval(D.current),D.current=setInterval(()=>{if(A.current>=l.length){clearInterval(D.current),p(!1),f(null);return}const S=l[A.current];h(A.current),S.action==="visit"?(f(S.vertex),k(new Set(S.visited)),v(S.stack||[])):S.action==="push"&&v(S.stack||[]),A.current++},1e3)},H=()=>{if(A.current>=l.length)return;const S=l[A.current];h(A.current),S.action==="visit"?(f(S.vertex),k(new Set(S.visited)),v(S.stack||[])):S.action==="push"&&v(S.stack||[]),A.current++,A.current>=l.length&&(p(!1),f(null))},_=()=>{D.current&&clearInterval(D.current),a([]),o([]),h(-1),k(new Set),f(null),v([]),p(!1),b(!1),A.current=0},O=S=>j===S?"graph-node current":w.has(S)?"graph-node visited":g.includes(S)?"graph-node stacked":"graph-node";return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Ce,{className:"icon-sm"}),n.jsx("span",{children:"What is Depth-First Search?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"DFS"})," explores a graph by going as deep as possible along each branch before backtracking."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(xe,{}),n.jsx("span",{children:"Like exploring a maze by following one path to its end before trying another!"})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Time"}),n.jsx("span",{className:"op-desc",children:"Visit all nodes"}),n.jsx("span",{className:"op-complexity",children:"O(V+E)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Space"}),n.jsx("span",{className:"op-desc",children:"Stack storage"}),n.jsx("span",{className:"op-complexity",children:"O(V)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Structure"}),n.jsx("span",{className:"op-desc",children:"Uses a Stack"}),n.jsx("span",{className:"op-complexity",children:"LIFO"})]})]}),n.jsxs("div",{className:"concept-uses",children:[n.jsx("strong",{children:"Common Uses:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Topological sorting"}),n.jsx("li",{children:"Cycle detection"}),n.jsx("li",{children:"Solving mazes and puzzles"}),n.jsx("li",{children:"Finding connected components"})]})]})]})]}),n.jsx(fe,{context:"Depth-First Search (DFS) algorithm on graphs"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"DFS Controls"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Load Graph Preset"}),n.jsxs("div",{className:"btn-group preset-group",children:[n.jsx("button",{onClick:()=>K("simple"),className:"btn btn-preset",disabled:d,children:"Simple"}),n.jsx("button",{onClick:()=>K("tree"),className:"btn btn-preset",disabled:d,children:"Tree"}),n.jsx("button",{onClick:()=>K("cyclic"),className:"btn btn-preset",disabled:d,children:"Cyclic"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Start DFS From"}),n.jsxs("select",{value:r,onChange:S=>s(S.target.value),className:"vertex-select full-width",disabled:d,children:[n.jsx("option",{value:"",children:"Select start vertex"}),e.vertices.map(S=>n.jsx("option",{value:S,children:S},S))]})]}),n.jsx("div",{className:"operation-group",children:n.jsxs("div",{className:"btn-group",children:[n.jsxs("button",{onClick:B,className:"btn btn-dfs",disabled:d&&!m,children:[n.jsx(Ve,{size:14})," Run DFS"]}),d&&n.jsx("button",{onClick:x,className:"btn btn-pause",children:m?n.jsx(Ve,{size:14}):n.jsx(St,{size:14})}),m&&n.jsx("button",{onClick:H,className:"btn btn-step",children:n.jsx(Ct,{size:14})}),n.jsx("button",{onClick:_,className:"btn btn-reset",children:n.jsx(it,{size:14})})]})}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Vertices:"}),n.jsx("span",{className:"info-value",children:e.vertex_count||e.vertices.length})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Edges:"}),n.jsx("span",{className:"info-value",children:e.edge_count||0})]}),g.length>0&&n.jsxs("div",{className:"info-item stack-display",children:[n.jsx("span",{className:"info-label",children:"Stack:"}),n.jsxs("span",{className:"info-value stack-items",children:["[",g.join(", "),"]"]})]}),i.length>0&&n.jsxs("div",{className:"info-item traversal-result",children:[n.jsx("span",{className:"info-label",children:"Order:"}),n.jsx("span",{className:"info-value",children:i.join(" → ")})]})]}),n.jsx(Ae,{message:V}),n.jsxs("div",{className:"legend",children:[n.jsx("h3",{children:"Legend"}),n.jsxs("div",{className:"legend-items",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color unvisited"}),n.jsx("span",{children:"Unvisited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color stacked"}),n.jsx("span",{children:"In Stack"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color current"}),n.jsx("span",{children:"Current"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color visited"}),n.jsx("span",{children:"Visited"})]})]})]})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"DFS Visualization"}),n.jsx("div",{className:"graph-container",children:e.vertices.length===0?n.jsx("div",{className:"graph-empty",children:"Loading graph..."}):n.jsxs("svg",{className:"graph-svg",viewBox:"0 0 500 350",children:[e.edges.map(([S,M],z)=>{const C=E[S],P=E[M];return!C||!P?null:n.jsx("line",{x1:C.x,y1:C.y,x2:P.x,y2:P.y,className:"graph-edge"},`edge-${z}`)}),e.vertices.map(S=>{const M=E[S];return M?n.jsxs("g",{className:O(S),children:[n.jsx("circle",{cx:M.x,cy:M.y,r:25,className:"node-circle"}),n.jsx("text",{x:M.x,y:M.y,className:"node-label",dominantBaseline:"central",textAnchor:"middle",children:S})]},S):null})]})}),n.jsxs("div",{className:"algorithm-steps",children:[n.jsx("h3",{children:"DFS Algorithm Steps"}),n.jsx("div",{className:"steps-content",children:n.jsxs("ol",{children:[n.jsx("li",{className:c>=0?"active":"",children:"Start at the selected vertex"}),n.jsx("li",{className:g.length>0?"active":"",children:"Push it to a stack and mark as visited"}),n.jsx("li",{className:j?"active":"",children:"Pop a vertex and explore one unvisited neighbor"}),n.jsx("li",{children:"Push the neighbor to stack and repeat"}),n.jsx("li",{children:"Backtrack when no unvisited neighbors remain"})]})})]})]})]}),n.jsx(me,{dataStructure:"dfs"})]})}function W0(){const[e,t]=u.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=u.useState(""),[i,a]=u.useState(""),[l,o]=u.useState({}),[c,h]=u.useState({}),[d,p]=u.useState([]),[m,b]=u.useState(-1),[w,k]=u.useState(!1),[j,f]=u.useState(!1),[g,v]=u.useState(new Set),[E,y]=u.useState(null),[V,T]=u.useState(null),[D,A]=u.useState({}),{message:I,showMessage:q}=Fe(3e3),K=u.useRef(null),B=u.useRef(0);u.useEffect(()=>{x()},[]),u.useEffect(()=>{e.vertices.length>0&&$()},[e.vertices]);const $=u.useCallback(()=>{const J=Math.min(500,350)*.35,ne={},ge=e.vertices.length;e.vertices.forEach((Te,Pn)=>{const at=2*Math.PI*Pn/ge-Math.PI/2;ne[Te]={x:250+J*Math.cos(at),y:175+J*Math.sin(at)}}),A(ne)},[e.vertices]),x=async()=>{try{const N=await ae("/api/graph");N.vertices.length===0?await R("weighted"):t(N)}catch(N){console.error("Error loading graph:",N)}},R=async N=>{try{const F=await Z(`/api/graph/preset/${N}`,{});if(F.error){q(F.error,"error");return}t(F),z(),q(`Loaded '${N}' preset`,"success")}catch{q("Error loading preset","error")}},H=async()=>{if(!r){q("Please select a start vertex!","error");return}try{const N=i?`/api/graph/dijkstra/${r}?end=${i}`:`/api/graph/dijkstra/${r}`,F=await ae(N);if(F.error){q(F.error,"error");return}o(F.distances),h(F.paths),p(F.steps),q("Starting Dijkstra's algorithm...","info"),_(F.steps)}catch{q("Error running Dijkstra's algorithm","error")}},_=N=>{K.current&&clearInterval(K.current),k(!0),f(!1),v(new Set),y(null),T(null),b(-1),B.current=0,K.current=setInterval(()=>{if(B.current>=N.length){clearInterval(K.current),k(!1),y(null),T(null),q("Dijkstra's algorithm complete!","success");return}const F=N[B.current];b(B.current),o(F.distances||{}),v(new Set(F.visited||[])),F.action==="visit"?(y(F.current),T(null)):(F.action==="check"||F.action==="update")&&(y(F.current),T({from:F.current,to:F.neighbor})),B.current++},1200)},O=()=>{j?(f(!1),S()):(f(!0),K.current&&clearInterval(K.current))},S=()=>{K.current&&clearInterval(K.current),K.current=setInterval(()=>{if(B.current>=d.length){clearInterval(K.current),k(!1),y(null),T(null);return}const N=d[B.current];b(B.current),o(N.distances||{}),v(new Set(N.visited||[])),N.action==="visit"?(y(N.current),T(null)):(N.action==="check"||N.action==="update")&&(y(N.current),T({from:N.current,to:N.neighbor})),B.current++},1200)},M=()=>{if(B.current>=d.length)return;const N=d[B.current];b(B.current),o(N.distances||{}),v(new Set(N.visited||[])),N.action==="visit"?(y(N.current),T(null)):(N.action==="check"||N.action==="update")&&(y(N.current),T({from:N.current,to:N.neighbor})),B.current++,B.current>=d.length&&(k(!1),y(null),T(null))},z=()=>{K.current&&clearInterval(K.current),o({}),h({}),p([]),b(-1),v(new Set),y(null),T(null),k(!1),f(!1),B.current=0},C=N=>E===N?"graph-node current":g.has(N)?"graph-node visited":"graph-node",P=(N,F)=>V&&(V.from===N&&V.to===F||V.from===F&&V.to===N)?"graph-edge checking":"graph-edge",L=()=>m>=0&&m<d.length?d[m].message:"";return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Ce,{className:"icon-sm"}),n.jsx("span",{children:"What is Dijkstra's Algorithm?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"Dijkstra's Algorithm"})," finds the shortest path from a source vertex to all other vertices in a weighted graph with non-negative weights."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(xe,{}),n.jsx("span",{children:"Like GPS finding the quickest route - always picks the closest unvisited location!"})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Time"}),n.jsx("span",{className:"op-desc",children:"With min-heap"}),n.jsx("span",{className:"op-complexity",children:"O((V+E)logV)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Space"}),n.jsx("span",{className:"op-desc",children:"Distance array"}),n.jsx("span",{className:"op-complexity",children:"O(V)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Strategy"}),n.jsx("span",{className:"op-desc",children:"Greedy"}),n.jsx("span",{className:"op-complexity",children:"Min first"})]})]}),n.jsxs("div",{className:"concept-uses",children:[n.jsx("strong",{children:"Common Uses:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"GPS navigation systems"}),n.jsx("li",{children:"Network routing protocols"}),n.jsx("li",{children:"Social network analysis"}),n.jsx("li",{children:"Game pathfinding"})]})]})]})]}),n.jsx(fe,{context:"Dijkstra's shortest path algorithm"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Dijkstra's Algorithm"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Load Preset"}),n.jsxs("div",{className:"btn-group preset-group",children:[n.jsx("button",{onClick:()=>R("weighted"),className:"btn btn-preset",disabled:w,children:"Weighted"}),n.jsx("button",{onClick:()=>R("simple"),className:"btn btn-preset",disabled:w,children:"Simple"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Start Vertex"}),n.jsxs("select",{value:r,onChange:N=>s(N.target.value),className:"vertex-select full-width",disabled:w,children:[n.jsx("option",{value:"",children:"Select start"}),e.vertices.map(N=>n.jsx("option",{value:N,children:N},N))]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"End Vertex (Optional)"}),n.jsxs("select",{value:i,onChange:N=>a(N.target.value),className:"vertex-select full-width",disabled:w,children:[n.jsx("option",{value:"",children:"All vertices"}),e.vertices.map(N=>n.jsx("option",{value:N,children:N},N))]})]}),n.jsx("div",{className:"operation-group",children:n.jsxs("div",{className:"btn-group",children:[n.jsxs("button",{onClick:H,className:"btn btn-dijkstra",disabled:w&&!j,children:[n.jsx(Ve,{size:14})," Run"]}),w&&n.jsx("button",{onClick:O,className:"btn btn-pause",children:j?n.jsx(Ve,{size:14}):n.jsx(St,{size:14})}),j&&n.jsx("button",{onClick:M,className:"btn btn-step",children:n.jsx(Ct,{size:14})}),n.jsx("button",{onClick:z,className:"btn btn-reset",children:n.jsx(it,{size:14})})]})}),Object.keys(l).length>0&&n.jsxs("div",{className:"distance-table",children:[n.jsxs("h3",{children:["Distances from ",r]}),n.jsx("div",{className:"distance-grid",children:e.vertices.map(N=>n.jsxs("div",{className:`distance-item ${g.has(N)?"visited":""} ${E===N?"current":""}`,children:[n.jsx("span",{className:"vertex-label",children:N}),n.jsx("span",{className:"distance-value",children:l[N]==="inf"||l[N]===null?"∞":l[N]})]},N))})]}),m>=0&&n.jsxs("div",{className:"current-step-box",children:[n.jsxs("strong",{children:["Step ",m+1,":"]}),n.jsx("p",{children:L()})]}),n.jsx(Ae,{message:I}),n.jsxs("div",{className:"legend",children:[n.jsx("h3",{children:"Legend"}),n.jsxs("div",{className:"legend-items",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color unvisited"}),n.jsx("span",{children:"Unvisited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color current"}),n.jsx("span",{children:"Current"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color visited"}),n.jsx("span",{children:"Visited"})]})]})]})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Visualization"}),n.jsx("div",{className:"graph-container",children:e.vertices.length===0?n.jsx("div",{className:"graph-empty",children:"Loading graph..."}):n.jsxs("svg",{className:"graph-svg",viewBox:"0 0 500 350",children:[e.edges.map(([N,F,G],W)=>{const J=D[N],ne=D[F];if(!J||!ne)return null;const ge=(J.x+ne.x)/2,Te=(J.y+ne.y)/2;return n.jsxs("g",{children:[n.jsx("line",{x1:J.x,y1:J.y,x2:ne.x,y2:ne.y,className:P(N,F)}),n.jsx("circle",{cx:ge,cy:Te,r:12,className:"weight-bg"}),n.jsx("text",{x:ge,y:Te,className:"weight-label",dominantBaseline:"central",textAnchor:"middle",children:G})]},`edge-${W}`)}),e.vertices.map(N=>{const F=D[N];return F?n.jsxs("g",{className:C(N),children:[n.jsx("circle",{cx:F.x,cy:F.y,r:25,className:"node-circle"}),n.jsx("text",{x:F.x,y:F.y,className:"node-label",dominantBaseline:"central",textAnchor:"middle",children:N}),l[N]!==void 0&&n.jsxs("text",{x:F.x,y:F.y+38,className:"distance-label",dominantBaseline:"central",textAnchor:"middle",children:["d=",l[N]==="inf"||l[N]===null?"∞":l[N]]})]},N):null})]})}),Object.keys(c).length>0&&!w&&n.jsxs("div",{className:"paths-section",children:[n.jsxs("h3",{children:["Shortest Paths from ",r]}),n.jsx("div",{className:"paths-list",children:Object.entries(c).map(([N,F])=>n.jsxs("div",{className:"path-item",children:[n.jsxs("span",{className:"path-target",children:[N,":"]}),n.jsx("span",{className:"path-route",children:F.join(" → ")}),n.jsxs("span",{className:"path-distance",children:["(dist: ",l[N]===null?"∞":l[N],")"]})]},N))})]})]})]}),n.jsx(me,{dataStructure:"dijkstra"})]})}function G0(){const[e,t]=u.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=u.useState(""),[i,a]=u.useState([]),[l,o]=u.useState(0),[c,h]=u.useState([]),[d,p]=u.useState(-1),[m,b]=u.useState(!1),[w,k]=u.useState(!1),[j,f]=u.useState(new Set),[g,v]=u.useState(null),[E,y]=u.useState(null),[V,T]=u.useState({}),{message:D,showMessage:A}=Fe(3e3),I=u.useRef(null),q=u.useRef(0);u.useEffect(()=>{B()},[]),u.useEffect(()=>{e.vertices.length>0&&K()},[e.vertices]);const K=u.useCallback(()=>{const W=Math.min(500,350)*.35,J={},ne=e.vertices.length;e.vertices.forEach((ge,Te)=>{const Pn=2*Math.PI*Te/ne-Math.PI/2;J[ge]={x:250+W*Math.cos(Pn),y:175+W*Math.sin(Pn)}}),T(J)},[e.vertices]),B=async()=>{try{const L=await ae("/api/graph");L.vertices.length===0?await $("weighted"):t(L)}catch(L){console.error("Error loading graph:",L)}},$=async L=>{try{const N=await Z(`/api/graph/preset/${L}`,{});if(N.error){A(N.error,"error");return}t(N),S(),A(`Loaded '${L}' preset`,"success")}catch{A("Error loading preset","error")}},x=async()=>{try{const L=r?`/api/graph/mst?start=${r}`:"/api/graph/mst",N=await ae(L);if(N.error){A(N.error,"error");return}h(N.steps),A("Starting Prim's MST algorithm...","info"),R(N.steps,N.mst_edges,N.total_weight)}catch{A("Error running MST algorithm","error")}},R=(L,N,F)=>{I.current&&clearInterval(I.current),b(!0),k(!1),f(new Set),a([]),o(0),v(null),y(null),p(-1),q.current=0,I.current=setInterval(()=>{if(q.current>=L.length){clearInterval(I.current),b(!1),v(null),y(null),a(N),o(F),A(`MST complete! Total weight: ${F}`,"success");return}const G=L[q.current];p(q.current),f(new Set(G.visited||[])),a(G.mst_edges||[]),o(G.total_weight||0),G.action==="add"?(v(G.current),y(null)):G.action==="consider"&&(v(G.current),y({from:G.current,to:G.neighbor,weight:G.weight})),q.current++},1e3)},H=()=>{w?(k(!1),_()):(k(!0),I.current&&clearInterval(I.current))},_=()=>{I.current&&clearInterval(I.current),I.current=setInterval(()=>{if(q.current>=c.length){clearInterval(I.current),b(!1),v(null),y(null);return}const L=c[q.current];p(q.current),f(new Set(L.visited||[])),a(L.mst_edges||[]),o(L.total_weight||0),L.action==="add"?(v(L.current),y(null)):L.action==="consider"&&(v(L.current),y({from:L.current,to:L.neighbor,weight:L.weight})),q.current++},1e3)},O=()=>{if(q.current>=c.length)return;const L=c[q.current];p(q.current),f(new Set(L.visited||[])),a(L.mst_edges||[]),o(L.total_weight||0),L.action==="add"?(v(L.current),y(null)):L.action==="consider"&&(v(L.current),y({from:L.current,to:L.neighbor,weight:L.weight})),q.current++,q.current>=c.length&&(b(!1),v(null),y(null))},S=()=>{I.current&&clearInterval(I.current),a([]),o(0),h([]),p(-1),f(new Set),v(null),y(null),b(!1),k(!1),q.current=0},M=L=>g===L?"graph-node current":j.has(L)?"graph-node visited":"graph-node",z=(L,N)=>i.some(([F,G])=>F===L&&G===N||F===N&&G===L),C=(L,N)=>E&&(E.from===L&&E.to===N||E.from===N&&E.to===L)?"graph-edge considering":z(L,N)?"graph-edge mst":"graph-edge",P=()=>d>=0&&d<c.length?c[d].message:"";return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Ce,{className:"icon-sm"}),n.jsx("span",{children:"What is Minimum Spanning Tree?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:["A ",n.jsx("strong",{children:"Minimum Spanning Tree (MST)"})," connects all vertices with the minimum total edge weight, without any cycles."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(xe,{}),n.jsx("span",{children:"Like finding the cheapest way to connect all cities with roads!"})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Time"}),n.jsx("span",{className:"op-desc",children:"Prim's with heap"}),n.jsx("span",{className:"op-complexity",children:"O((V+E)logV)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Edges"}),n.jsx("span",{className:"op-desc",children:"In MST"}),n.jsx("span",{className:"op-complexity",children:"V - 1"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Strategy"}),n.jsx("span",{className:"op-desc",children:"Greedy"}),n.jsx("span",{className:"op-complexity",children:"Min edge"})]})]}),n.jsxs("div",{className:"concept-uses",children:[n.jsx("strong",{children:"Common Uses:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Network design (cables, pipes)"}),n.jsx("li",{children:"Cluster analysis"}),n.jsx("li",{children:"Image segmentation"}),n.jsx("li",{children:"Approximation algorithms"})]})]})]})]}),n.jsx(fe,{context:"Minimum Spanning Tree, Prim's algorithm"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Prim's MST Algorithm"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Load Preset"}),n.jsxs("div",{className:"btn-group preset-group",children:[n.jsx("button",{onClick:()=>$("weighted"),className:"btn btn-preset",disabled:m,children:"Weighted"}),n.jsx("button",{onClick:()=>$("complete"),className:"btn btn-preset",disabled:m,children:"Complete"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Start Vertex (Optional)"}),n.jsxs("select",{value:r,onChange:L=>s(L.target.value),className:"vertex-select full-width",disabled:m,children:[n.jsx("option",{value:"",children:"Auto (first vertex)"}),e.vertices.map(L=>n.jsx("option",{value:L,children:L},L))]})]}),n.jsx("div",{className:"operation-group",children:n.jsxs("div",{className:"btn-group",children:[n.jsxs("button",{onClick:x,className:"btn btn-mst",disabled:m&&!w,children:[n.jsx(Ve,{size:14})," Run MST"]}),m&&n.jsx("button",{onClick:H,className:"btn btn-pause",children:w?n.jsx(Ve,{size:14}):n.jsx(St,{size:14})}),w&&n.jsx("button",{onClick:O,className:"btn btn-step",children:n.jsx(Ct,{size:14})}),n.jsx("button",{onClick:S,className:"btn btn-reset",children:n.jsx(it,{size:14})})]})}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"MST Edges:"}),n.jsxs("span",{className:"info-value",children:[i.length," / ",e.vertices.length-1]})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Total Weight:"}),n.jsx("span",{className:"info-value mst-weight",children:l})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Visited:"}),n.jsxs("span",{className:"info-value",children:[j.size," / ",e.vertices.length]})]})]}),d>=0&&n.jsxs("div",{className:"current-step-box",children:[n.jsxs("strong",{children:["Step ",d+1,":"]}),n.jsx("p",{children:P()})]}),n.jsx(Ae,{message:D}),n.jsxs("div",{className:"legend",children:[n.jsx("h3",{children:"Legend"}),n.jsxs("div",{className:"legend-items",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color unvisited"}),n.jsx("span",{children:"Unvisited"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color current"}),n.jsx("span",{children:"Current"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color visited"}),n.jsx("span",{children:"In MST"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-line mst"}),n.jsx("span",{children:"MST Edge"})]})]})]})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Visualization"}),n.jsx("div",{className:"graph-container",children:e.vertices.length===0?n.jsx("div",{className:"graph-empty",children:"Loading graph..."}):n.jsxs("svg",{className:"graph-svg",viewBox:"0 0 500 350",children:[e.edges.map(([L,N,F],G)=>{const W=V[L],J=V[N];if(!W||!J)return null;const ne=(W.x+J.x)/2,ge=(W.y+J.y)/2;return n.jsxs("g",{children:[n.jsx("line",{x1:W.x,y1:W.y,x2:J.x,y2:J.y,className:C(L,N)}),n.jsx("circle",{cx:ne,cy:ge,r:12,className:"weight-bg"}),n.jsx("text",{x:ne,y:ge,className:"weight-label",dominantBaseline:"central",textAnchor:"middle",children:F})]},`edge-${G}`)}),e.vertices.map(L=>{const N=V[L];return N?n.jsxs("g",{className:M(L),children:[n.jsx("circle",{cx:N.x,cy:N.y,r:25,className:"node-circle"}),n.jsx("text",{x:N.x,y:N.y,className:"node-label",dominantBaseline:"central",textAnchor:"middle",children:L})]},L):null})]})}),i.length>0&&n.jsxs("div",{className:"mst-edges-section",children:[n.jsx("h3",{children:"MST Edges"}),n.jsx("div",{className:"mst-edges-list",children:i.map(([L,N,F],G)=>n.jsxs("div",{className:"mst-edge-item",children:[n.jsxs("span",{children:[L," — ",N]}),n.jsxs("span",{className:"edge-weight",children:["(w: ",F,")"]})]},G))}),n.jsx("div",{className:"mst-total",children:n.jsxs("strong",{children:["Total MST Weight: ",l]})})]})]})]}),n.jsx(me,{dataStructure:"graph"})]})}function Q0(){const[e,t]=u.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=u.useState([]),[i,a]=u.useState({}),[l,o]=u.useState([]),[c,h]=u.useState(-1),[d,p]=u.useState(!1),[m,b]=u.useState(!1),[w,k]=u.useState(new Set),[j,f]=u.useState(null),[g,v]=u.useState([]),[E,y]=u.useState(!1),[V,T]=u.useState({}),{message:D,showMessage:A}=Fe(3e3),I=u.useRef(null),q=u.useRef(0);u.useEffect(()=>{B()},[]),u.useEffect(()=>{e.vertices.length>0&&K()},[e.vertices]);const K=u.useCallback(()=>{const F=Math.min(500,350)*.35,G={},W=e.vertices.length;e.vertices.forEach((J,ne)=>{const ge=2*Math.PI*ne/W-Math.PI/2;G[J]={x:250+F*Math.cos(ge),y:175+F*Math.sin(ge)}}),T(G)},[e.vertices]),B=async()=>{try{const C=await ae("/api/graph");C.vertices.length===0?await $("dag"):t(C)}catch(C){console.error("Error loading graph:",C)}},$=async C=>{try{const P=await Z(`/api/graph/preset/${C}`,{});if(P.error){A(P.error,"error");return}t(P),S(),A(`Loaded '${C}' preset`,"success")}catch{A("Error loading preset","error")}},x=async()=>{try{const C=await ae("/api/graph/topological");if(C.error){A(C.error,"error");return}if(C.has_cycle){y(!0),A("Graph has a cycle - topological sort not possible!","error");return}y(!1),s(C.sorted||[]),o(C.steps),A("Starting Topological Sort (Kahn's Algorithm)...","info"),R(C.steps)}catch{A("Error running topological sort","error")}},R=C=>{I.current&&clearInterval(I.current),p(!0),b(!1),k(new Set),f(null),v([]),a({}),h(-1),q.current=0,I.current=setInterval(()=>{if(q.current>=C.length){clearInterval(I.current),p(!1),f(null),A(`Topological Sort Complete: ${r.join(" → ")}`,"success");return}const P=C[q.current];h(q.current),a(P.in_degrees||{}),v(P.queue||[]),P.action==="process"?(f(P.vertex),k(new Set(P.result||[]))):P.action==="decrement"||P.action==="enqueue"?f(P.vertex||P.neighbor):P.action==="init"&&(a(P.in_degrees||{}),v(P.queue||[])),q.current++},1e3)},H=()=>{m?(b(!1),_()):(b(!0),I.current&&clearInterval(I.current))},_=()=>{I.current&&clearInterval(I.current),I.current=setInterval(()=>{if(q.current>=l.length){clearInterval(I.current),p(!1),f(null);return}const C=l[q.current];h(q.current),a(C.in_degrees||{}),v(C.queue||[]),C.action==="process"?(f(C.vertex),k(new Set(C.result||[]))):(C.action==="decrement"||C.action==="enqueue")&&f(C.vertex||C.neighbor),q.current++},1e3)},O=()=>{if(q.current>=l.length)return;const C=l[q.current];h(q.current),a(C.in_degrees||{}),v(C.queue||[]),C.action==="process"?(f(C.vertex),k(new Set(C.result||[]))):(C.action==="decrement"||C.action==="enqueue")&&f(C.vertex||C.neighbor),q.current++,q.current>=l.length&&(p(!1),f(null))},S=()=>{I.current&&clearInterval(I.current),s([]),a({}),o([]),h(-1),k(new Set),f(null),v([]),y(!1),p(!1),b(!1),q.current=0},M=C=>j===C?"graph-node current":w.has(C)?"graph-node visited":g.includes(C)?"graph-node queued":"graph-node",z=()=>c>=0&&c<l.length?l[c].message:"";return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Ce,{className:"icon-sm"}),n.jsx("span",{children:"What is Topological Sort?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"Topological Sort"})," orders vertices in a directed acyclic graph (DAG) so that for every edge u→v, u comes before v in the ordering."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(xe,{}),n.jsx("span",{children:"Like scheduling tasks - you must complete prerequisites before dependent tasks!"})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Time"}),n.jsx("span",{className:"op-desc",children:"Kahn's Algorithm"}),n.jsx("span",{className:"op-complexity",children:"O(V+E)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Space"}),n.jsx("span",{className:"op-desc",children:"In-degree array"}),n.jsx("span",{className:"op-complexity",children:"O(V)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Requirement"}),n.jsx("span",{className:"op-desc",children:"Graph type"}),n.jsx("span",{className:"op-complexity",children:"DAG only"})]})]}),n.jsxs("div",{className:"concept-uses",children:[n.jsx("strong",{children:"Common Uses:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Task scheduling with dependencies"}),n.jsx("li",{children:"Build systems (Makefile)"}),n.jsx("li",{children:"Course prerequisite planning"}),n.jsx("li",{children:"Package dependency resolution"})]})]})]})]}),n.jsx(fe,{context:"Topological Sort using Kahn's Algorithm on directed acyclic graphs"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Topological Sort"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Load Graph Preset"}),n.jsxs("div",{className:"btn-group preset-group",children:[n.jsx("button",{onClick:()=>$("dag"),className:"btn btn-preset",disabled:d,children:"DAG"}),n.jsx("button",{onClick:()=>$("tree"),className:"btn btn-preset",disabled:d,children:"Tree"}),n.jsx("button",{onClick:()=>$("simple"),className:"btn btn-preset",disabled:d,children:"Simple"})]})]}),n.jsx("div",{className:"operation-group",children:n.jsxs("div",{className:"btn-group",children:[n.jsxs("button",{onClick:x,className:"btn btn-bfs",disabled:d&&!m,children:[n.jsx(Ve,{size:14})," Run Sort"]}),d&&n.jsx("button",{onClick:H,className:"btn btn-pause",children:m?n.jsx(Ve,{size:14}):n.jsx(St,{size:14})}),m&&n.jsx("button",{onClick:O,className:"btn btn-step",children:n.jsx(Ct,{size:14})}),n.jsx("button",{onClick:S,className:"btn btn-reset",children:n.jsx(it,{size:14})})]})}),Object.keys(i).length>0&&n.jsxs("div",{className:"distance-table",children:[n.jsx("h3",{children:"In-Degrees"}),n.jsx("div",{className:"distance-grid",children:e.vertices.map(C=>n.jsxs("div",{className:`distance-item ${w.has(C)?"visited":""} ${j===C?"current":""}`,children:[n.jsx("span",{className:"vertex-label",children:C}),n.jsx("span",{className:"distance-value",children:i[C]??"-"})]},C))})]}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Vertices:"}),n.jsx("span",{className:"info-value",children:e.vertex_count||e.vertices.length})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Edges:"}),n.jsx("span",{className:"info-value",children:e.edge_count||0})]}),g.length>0&&n.jsxs("div",{className:"info-item queue-display",children:[n.jsx("span",{className:"info-label",children:"Queue:"}),n.jsxs("span",{className:"info-value queue-items",children:["[",g.join(", "),"]"]})]}),r.length>0&&!d&&n.jsxs("div",{className:"info-item traversal-result",children:[n.jsx("span",{className:"info-label",children:"Order:"}),n.jsx("span",{className:"info-value",children:r.join(" → ")})]})]}),c>=0&&n.jsxs("div",{className:"current-step-box",children:[n.jsxs("strong",{children:["Step ",c+1,":"]}),n.jsx("p",{children:z()})]}),n.jsx(Ae,{message:D}),E&&n.jsxs("div",{className:"warning-box",children:[n.jsx("strong",{children:"Cycle Detected!"}),n.jsx("p",{children:"Topological sort is only possible on Directed Acyclic Graphs (DAGs)."})]}),n.jsxs("div",{className:"legend",children:[n.jsx("h3",{children:"Legend"}),n.jsxs("div",{className:"legend-items",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color unvisited"}),n.jsx("span",{children:"Unprocessed"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color queued"}),n.jsx("span",{children:"In Queue (in-degree 0)"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color current"}),n.jsx("span",{children:"Current"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color visited"}),n.jsx("span",{children:"Processed"})]})]})]})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Visualization"}),n.jsx("div",{className:"graph-container",children:e.vertices.length===0?n.jsx("div",{className:"graph-empty",children:"Loading graph..."}):n.jsxs("svg",{className:"graph-svg",viewBox:"0 0 500 350",children:[e.edges.map(([C,P,L],N)=>{const F=V[C],G=V[P];if(!F||!G)return null;const W=G.x-F.x,J=G.y-F.y,ne=Math.sqrt(W*W+J*J),ge=W/ne,Te=J/ne,Pn=F.x+ge*25,at=F.y+Te*25,qh=G.x-ge*30,Uh=G.y-Te*30;return n.jsxs("g",{children:[n.jsx("defs",{children:n.jsx("marker",{id:`arrowhead-${N}`,markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:n.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#64748b"})})}),n.jsx("line",{x1:Pn,y1:at,x2:qh,y2:Uh,className:"graph-edge",markerEnd:`url(#arrowhead-${N})`})]},`edge-${N}`)}),e.vertices.map(C=>{const P=V[C];return P?n.jsxs("g",{className:M(C),children:[n.jsx("circle",{cx:P.x,cy:P.y,r:25,className:"node-circle"}),n.jsx("text",{x:P.x,y:P.y,className:"node-label",dominantBaseline:"central",textAnchor:"middle",children:C}),i[C]!==void 0&&n.jsxs("text",{x:P.x,y:P.y+38,className:"distance-label",dominantBaseline:"central",textAnchor:"middle",children:["in=",i[C]]})]},C):null})]})}),n.jsxs("div",{className:"algorithm-steps",children:[n.jsx("h3",{children:"Kahn's Algorithm Steps"}),n.jsx("div",{className:"steps-content",children:n.jsxs("ol",{children:[n.jsx("li",{className:c===0?"active":"",children:"Calculate in-degree for all vertices"}),n.jsx("li",{className:g.length>0?"active":"",children:"Add vertices with in-degree 0 to queue"}),n.jsx("li",{className:j?"active":"",children:"Dequeue vertex and add to result"}),n.jsx("li",{children:"Decrement in-degree of neighbors"}),n.jsx("li",{children:"Add neighbors with in-degree 0 to queue"}),n.jsx("li",{children:"Repeat until queue is empty"})]})})]})]})]}),n.jsx(me,{dataStructure:"topological"})]})}function X0(){const[e,t]=u.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=u.useState(""),[i,a]=u.useState({}),[l,o]=u.useState({}),[c,h]=u.useState([]),[d,p]=u.useState(-1),[m,b]=u.useState(0),[w,k]=u.useState(!1),[j,f]=u.useState(!1),[g,v]=u.useState(null),[E,y]=u.useState(null),[V,T]=u.useState(!1),[D,A]=u.useState({}),{message:I,showMessage:q}=Fe(3e3),K=u.useRef(null),B=u.useRef(0);u.useEffect(()=>{x()},[]),u.useEffect(()=>{e.vertices.length>0&&$()},[e.vertices]);const $=u.useCallback(()=>{const J=Math.min(500,350)*.35,ne={},ge=e.vertices.length;e.vertices.forEach((Te,Pn)=>{const at=2*Math.PI*Pn/ge-Math.PI/2;ne[Te]={x:250+J*Math.cos(at),y:175+J*Math.sin(at)}}),A(ne)},[e.vertices]),x=async()=>{try{const N=await ae("/api/graph");N.vertices.length===0?await R("weighted"):t(N)}catch(N){console.error("Error loading graph:",N)}},R=async N=>{try{const F=await Z(`/api/graph/preset/${N}`,{});if(F.error){q(F.error,"error");return}t(F),z(),q(`Loaded '${N}' preset`,"success")}catch{q("Error loading preset","error")}},H=async()=>{if(!r){q("Please select a start vertex!","error");return}try{const N=await ae(`/api/graph/bellman-ford/${r}`);if(N.error){q(N.error,"error");return}a(N.distances),o(N.paths),h(N.steps),T(N.has_negative_cycle),N.has_negative_cycle?q("Negative cycle detected in graph!","error"):q("Starting Bellman-Ford algorithm...","info"),_(N.steps)}catch{q("Error running Bellman-Ford algorithm","error")}},_=N=>{K.current&&clearInterval(K.current),k(!0),f(!1),v(null),y(null),b(0),p(-1),B.current=0,K.current=setInterval(()=>{if(B.current>=N.length){clearInterval(K.current),k(!1),v(null),y(null),V||q("Bellman-Ford algorithm complete!","success");return}const F=N[B.current];p(B.current),a(F.distances||{}),F.iteration&&b(F.iteration),F.action==="check"?(v({from:F.from,to:F.to}),y(null)):F.action==="update"?(v({from:F.from,to:F.to}),y(F.to)):F.action==="negative_cycle"?v({from:F.from,to:F.to}):(v(null),y(null)),B.current++},800)},O=()=>{j?(f(!1),S()):(f(!0),K.current&&clearInterval(K.current))},S=()=>{K.current&&clearInterval(K.current),K.current=setInterval(()=>{if(B.current>=c.length){clearInterval(K.current),k(!1),v(null),y(null);return}const N=c[B.current];p(B.current),a(N.distances||{}),N.iteration&&b(N.iteration),N.action==="check"?(v({from:N.from,to:N.to}),y(null)):N.action==="update"?(v({from:N.from,to:N.to}),y(N.to)):(v(null),y(null)),B.current++},800)},M=()=>{if(B.current>=c.length)return;const N=c[B.current];p(B.current),a(N.distances||{}),N.iteration&&b(N.iteration),N.action==="check"?(v({from:N.from,to:N.to}),y(null)):N.action==="update"?(v({from:N.from,to:N.to}),y(N.to)):(v(null),y(null)),B.current++,B.current>=c.length&&(k(!1),v(null),y(null))},z=()=>{K.current&&clearInterval(K.current),a({}),o({}),h([]),p(-1),b(0),v(null),y(null),T(!1),k(!1),f(!1),B.current=0},C=N=>E===N?"graph-node current":N===r&&!w&&Object.keys(i).length>0?"graph-node visited":"graph-node",P=(N,F)=>g&&(g.from===N&&g.to===F||g.from===F&&g.to===N)?"graph-edge checking":"graph-edge",L=()=>d>=0&&d<c.length?c[d].message:"";return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Ce,{className:"icon-sm"}),n.jsx("span",{children:"What is Bellman-Ford Algorithm?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"Bellman-Ford Algorithm"})," finds shortest paths from a source vertex, even with negative edge weights. It can also detect negative cycles."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(xe,{}),n.jsx("span",{children:"Unlike Dijkstra, it checks ALL edges V-1 times - slower but handles negative weights!"})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Time"}),n.jsx("span",{className:"op-desc",children:"V-1 iterations"}),n.jsx("span",{className:"op-complexity",children:"O(V*E)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Space"}),n.jsx("span",{className:"op-desc",children:"Distance array"}),n.jsx("span",{className:"op-complexity",children:"O(V)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Feature"}),n.jsx("span",{className:"op-desc",children:"Negative weights"}),n.jsx("span",{className:"op-complexity",children:"Supported"})]})]}),n.jsxs("div",{className:"concept-uses",children:[n.jsx("strong",{children:"Common Uses:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Currency exchange arbitrage detection"}),n.jsx("li",{children:"Network routing (RIP protocol)"}),n.jsx("li",{children:"Graphs with negative weights"}),n.jsx("li",{children:"Detecting negative cycles"})]})]})]})]}),n.jsx(fe,{context:"Bellman-Ford shortest path algorithm with negative weight handling"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Bellman-Ford Algorithm"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Load Preset"}),n.jsxs("div",{className:"btn-group preset-group",children:[n.jsx("button",{onClick:()=>R("weighted"),className:"btn btn-preset",disabled:w,children:"Weighted"}),n.jsx("button",{onClick:()=>R("simple"),className:"btn btn-preset",disabled:w,children:"Simple"})]})]}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Start Vertex"}),n.jsxs("select",{value:r,onChange:N=>s(N.target.value),className:"vertex-select full-width",disabled:w,children:[n.jsx("option",{value:"",children:"Select start"}),e.vertices.map(N=>n.jsx("option",{value:N,children:N},N))]})]}),n.jsx("div",{className:"operation-group",children:n.jsxs("div",{className:"btn-group",children:[n.jsxs("button",{onClick:H,className:"btn btn-dijkstra",disabled:w&&!j,children:[n.jsx(Ve,{size:14})," Run"]}),w&&n.jsx("button",{onClick:O,className:"btn btn-pause",children:j?n.jsx(Ve,{size:14}):n.jsx(St,{size:14})}),j&&n.jsx("button",{onClick:M,className:"btn btn-step",children:n.jsx(Ct,{size:14})}),n.jsx("button",{onClick:z,className:"btn btn-reset",children:n.jsx(it,{size:14})})]})}),m>0&&n.jsx("div",{className:"info-panel",children:n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Iteration:"}),n.jsxs("span",{className:"info-value",children:[m," / ",e.vertices.length-1]})]})}),Object.keys(i).length>0&&n.jsxs("div",{className:"distance-table",children:[n.jsxs("h3",{children:["Distances from ",r]}),n.jsx("div",{className:"distance-grid",children:e.vertices.map(N=>n.jsxs("div",{className:`distance-item ${E===N?"current":""}`,children:[n.jsx("span",{className:"vertex-label",children:N}),n.jsx("span",{className:"distance-value",children:i[N]==="inf"||i[N]===null?"∞":i[N]})]},N))})]}),d>=0&&n.jsxs("div",{className:"current-step-box",children:[n.jsxs("strong",{children:["Step ",d+1,":"]}),n.jsx("p",{children:L()})]}),n.jsx(Ae,{message:I}),V&&n.jsxs("div",{className:"warning-box",children:[n.jsx("strong",{children:"Negative Cycle Detected!"}),n.jsx("p",{children:"The graph contains a negative weight cycle. Shortest paths are undefined."})]}),n.jsxs("div",{className:"legend",children:[n.jsx("h3",{children:"Legend"}),n.jsxs("div",{className:"legend-items",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color unvisited"}),n.jsx("span",{children:"Unprocessed"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color current"}),n.jsx("span",{children:"Updated"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color checking"}),n.jsx("span",{children:"Checking Edge"})]})]})]})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Visualization"}),n.jsx("div",{className:"graph-container",children:e.vertices.length===0?n.jsx("div",{className:"graph-empty",children:"Loading graph..."}):n.jsxs("svg",{className:"graph-svg",viewBox:"0 0 500 350",children:[e.edges.map(([N,F,G],W)=>{const J=D[N],ne=D[F];if(!J||!ne)return null;const ge=(J.x+ne.x)/2,Te=(J.y+ne.y)/2;return n.jsxs("g",{children:[n.jsx("line",{x1:J.x,y1:J.y,x2:ne.x,y2:ne.y,className:P(N,F)}),n.jsx("circle",{cx:ge,cy:Te,r:12,className:"weight-bg"}),n.jsx("text",{x:ge,y:Te,className:"weight-label",dominantBaseline:"central",textAnchor:"middle",children:G})]},`edge-${W}`)}),e.vertices.map(N=>{const F=D[N];return F?n.jsxs("g",{className:C(N),children:[n.jsx("circle",{cx:F.x,cy:F.y,r:25,className:"node-circle"}),n.jsx("text",{x:F.x,y:F.y,className:"node-label",dominantBaseline:"central",textAnchor:"middle",children:N}),i[N]!==void 0&&n.jsxs("text",{x:F.x,y:F.y+38,className:"distance-label",dominantBaseline:"central",textAnchor:"middle",children:["d=",i[N]==="inf"||i[N]===null?"∞":i[N]]})]},N):null})]})}),n.jsxs("div",{className:"algorithm-steps",children:[n.jsx("h3",{children:"Bellman-Ford vs Dijkstra"}),n.jsxs("div",{className:"comparison-table",children:[n.jsxs("div",{className:"comparison-row header",children:[n.jsx("span",{children:"Feature"}),n.jsx("span",{children:"Bellman-Ford"}),n.jsx("span",{children:"Dijkstra"})]}),n.jsxs("div",{className:"comparison-row",children:[n.jsx("span",{children:"Time Complexity"}),n.jsx("span",{children:"O(V*E)"}),n.jsx("span",{children:"O((V+E)logV)"})]}),n.jsxs("div",{className:"comparison-row",children:[n.jsx("span",{children:"Negative Weights"}),n.jsx("span",{className:"yes",children:"Yes"}),n.jsx("span",{className:"no",children:"No"})]}),n.jsxs("div",{className:"comparison-row",children:[n.jsx("span",{children:"Detects Neg. Cycles"}),n.jsx("span",{className:"yes",children:"Yes"}),n.jsx("span",{className:"no",children:"No"})]})]})]}),Object.keys(l).length>0&&!w&&!V&&n.jsxs("div",{className:"paths-section",children:[n.jsxs("h3",{children:["Shortest Paths from ",r]}),n.jsx("div",{className:"paths-list",children:Object.entries(l).map(([N,F])=>n.jsxs("div",{className:"path-item",children:[n.jsxs("span",{className:"path-target",children:[N,":"]}),n.jsx("span",{className:"path-route",children:F.join(" → ")}),n.jsxs("span",{className:"path-distance",children:["(dist: ",i[N]===null?"∞":i[N],")"]})]},N))})]})]})]}),n.jsx(me,{dataStructure:"bellman-ford"})]})}function Y0(){const[e,t]=u.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=u.useState([]),[i,a]=u.useState([]),[l,o]=u.useState(0),[c,h]=u.useState([]),[d,p]=u.useState([]),[m,b]=u.useState(-1),[w,k]=u.useState(!1),[j,f]=u.useState(!1),[g,v]=u.useState(null),[E,y]=u.useState({}),{message:V,showMessage:T}=Fe(3e3),D=u.useRef(null),A=u.useRef(0);u.useEffect(()=>{q()},[]),u.useEffect(()=>{e.vertices.length>0&&I()},[e.vertices]);const I=u.useCallback(()=>{const G=Math.min(500,350)*.35,W={},J=e.vertices.length;e.vertices.forEach((ne,ge)=>{const Te=2*Math.PI*ge/J-Math.PI/2;W[ne]={x:250+G*Math.cos(Te),y:175+G*Math.sin(Te)}}),y(W)},[e.vertices]),q=async()=>{try{const P=await ae("/api/graph");P.vertices.length===0?await K("weighted"):t(P)}catch(P){console.error("Error loading graph:",P)}},K=async P=>{try{const L=await Z(`/api/graph/preset/${P}`,{});if(L.error){T(L.error,"error");return}t(L),_(),T(`Loaded '${P}' preset`,"success")}catch{T("Error loading preset","error")}},B=async()=>{try{const P=await ae("/api/graph/kruskal");if(P.error){T(P.error,"error");return}p(P.steps);const L=P.steps.find(N=>N.action==="init");L&&h(L.edges_sorted||[]),T("Starting Kruskal's MST algorithm...","info"),$(P.steps,P.mst_edges,P.total_weight)}catch{T("Error running Kruskal's algorithm","error")}},$=(P,L,N)=>{D.current&&clearInterval(D.current),k(!0),f(!1),s([]),a([]),o(0),v(null),b(-1),A.current=0,D.current=setInterval(()=>{if(A.current>=P.length){clearInterval(D.current),k(!1),v(null),s(L),o(N),T(`MST complete! Total weight: ${N}`,"success");return}const F=P[A.current];b(A.current),s(F.mst_edges||[]),o(F.total_weight||0),F.action==="consider"?v({from:F.from,to:F.to,weight:F.weight}):(F.action==="add"||F.action==="reject"&&a(G=>[...G,{from:F.from,to:F.to,weight:F.weight}]),v(null)),A.current++},1e3)},x=()=>{j?(f(!1),R()):(f(!0),D.current&&clearInterval(D.current))},R=()=>{D.current&&clearInterval(D.current),D.current=setInterval(()=>{if(A.current>=d.length){clearInterval(D.current),k(!1),v(null);return}const P=d[A.current];b(A.current),s(P.mst_edges||[]),o(P.total_weight||0),P.action==="consider"?v({from:P.from,to:P.to,weight:P.weight}):(P.action==="add"||P.action==="reject"&&a(L=>[...L,{from:P.from,to:P.to,weight:P.weight}]),v(null)),A.current++},1e3)},H=()=>{if(A.current>=d.length)return;const P=d[A.current];b(A.current),s(P.mst_edges||[]),o(P.total_weight||0),P.action==="consider"?v({from:P.from,to:P.to,weight:P.weight}):(P.action==="add"||P.action==="reject"&&a(L=>[...L,{from:P.from,to:P.to,weight:P.weight}]),v(null)),A.current++,A.current>=d.length&&(k(!1),v(null))},_=()=>{D.current&&clearInterval(D.current),s([]),a([]),o(0),h([]),p([]),b(-1),v(null),k(!1),f(!1),A.current=0},O=(P,L)=>r.some(([N,F])=>N===P&&F===L||N===L&&F===P),S=(P,L)=>i.some(N=>N.from===P&&N.to===L||N.from===L&&N.to===P),M=P=>r.some(([N,F])=>N===P||F===P)?"graph-node visited":"graph-node",z=(P,L)=>g&&(g.from===P&&g.to===L||g.from===L&&g.to===P)?"graph-edge considering":O(P,L)?"graph-edge mst":S(P,L)?"graph-edge rejected":"graph-edge",C=()=>m>=0&&m<d.length?d[m].message:"";return n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"intro-layout",children:[n.jsxs("div",{className:"concept-box",children:[n.jsxs("div",{className:"concept-header",children:[n.jsx(Ce,{className:"icon-sm"}),n.jsx("span",{children:"What is Kruskal's Algorithm?"})]}),n.jsxs("div",{className:"concept-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"Kruskal's Algorithm"})," builds the MST by sorting all edges by weight and adding them if they don't create a cycle (using Union-Find)."]}),n.jsxs("div",{className:"concept-analogy",children:[n.jsx(xe,{}),n.jsx("span",{children:"Like building a network by always picking the cheapest cable that connects new areas!"})]}),n.jsxs("div",{className:"concept-operations",children:[n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Time"}),n.jsx("span",{className:"op-desc",children:"Sort + Union-Find"}),n.jsx("span",{className:"op-complexity",children:"O(E log E)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Space"}),n.jsx("span",{className:"op-desc",children:"Union-Find array"}),n.jsx("span",{className:"op-complexity",children:"O(V)"})]}),n.jsxs("div",{className:"op-item",children:[n.jsx("span",{className:"op-name",children:"Strategy"}),n.jsx("span",{className:"op-desc",children:"Global greedy"}),n.jsx("span",{className:"op-complexity",children:"Min edge"})]})]}),n.jsxs("div",{className:"concept-uses",children:[n.jsx("strong",{children:"Kruskal vs Prim:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Better for sparse graphs (fewer edges)"}),n.jsx("li",{children:"Processes edges globally, not locally"}),n.jsx("li",{children:"Uses Union-Find for cycle detection"}),n.jsx("li",{children:"Easier to parallelize"})]})]})]})]}),n.jsx(fe,{context:"Kruskal's Minimum Spanning Tree algorithm with Union-Find"})]}),n.jsxs("div",{className:"visualizer-layout",children:[n.jsxs("div",{className:"control-panel",children:[n.jsx("h2",{children:"Kruskal's MST Algorithm"}),n.jsxs("div",{className:"operation-group",children:[n.jsx("label",{children:"Load Preset"}),n.jsxs("div",{className:"btn-group preset-group",children:[n.jsx("button",{onClick:()=>K("weighted"),className:"btn btn-preset",disabled:w,children:"Weighted"}),n.jsx("button",{onClick:()=>K("complete"),className:"btn btn-preset",disabled:w,children:"Complete"})]})]}),n.jsx("div",{className:"operation-group",children:n.jsxs("div",{className:"btn-group",children:[n.jsxs("button",{onClick:B,className:"btn btn-mst",disabled:w&&!j,children:[n.jsx(Ve,{size:14})," Run Kruskal's"]}),w&&n.jsx("button",{onClick:x,className:"btn btn-pause",children:j?n.jsx(Ve,{size:14}):n.jsx(St,{size:14})}),j&&n.jsx("button",{onClick:H,className:"btn btn-step",children:n.jsx(Ct,{size:14})}),n.jsx("button",{onClick:_,className:"btn btn-reset",children:n.jsx(it,{size:14})})]})}),n.jsxs("div",{className:"info-panel",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"MST Edges:"}),n.jsxs("span",{className:"info-value",children:[r.length," / ",e.vertices.length-1]})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Total Weight:"}),n.jsx("span",{className:"info-value mst-weight",children:l})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Rejected:"}),n.jsx("span",{className:"info-value",children:i.length})]})]}),c.length>0&&n.jsxs("div",{className:"sorted-edges-panel",children:[n.jsx("h3",{children:"Edges (sorted by weight)"}),n.jsx("div",{className:"sorted-edges-list",children:c.map(([P,L,N],F)=>{const G=O(P,L),W=S(P,L);return n.jsxs("div",{className:`sorted-edge-item ${G?"in-mst":""} ${W?"rejected":""}`,children:[n.jsxs("span",{children:[P,"—",L]}),n.jsxs("span",{className:"edge-weight",children:["w=",N]})]},F)})})]}),m>=0&&n.jsxs("div",{className:"current-step-box",children:[n.jsxs("strong",{children:["Step ",m+1,":"]}),n.jsx("p",{children:C()})]}),n.jsx(Ae,{message:V}),n.jsxs("div",{className:"legend",children:[n.jsx("h3",{children:"Legend"}),n.jsxs("div",{className:"legend-items",children:[n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color unvisited"}),n.jsx("span",{children:"Unconnected"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-color visited"}),n.jsx("span",{children:"In MST"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-line considering"}),n.jsx("span",{children:"Considering"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-line mst"}),n.jsx("span",{children:"MST Edge"})]}),n.jsxs("div",{className:"legend-item",children:[n.jsx("span",{className:"legend-line rejected"}),n.jsx("span",{children:"Rejected (cycle)"})]})]})]})]}),n.jsxs("div",{className:"visual-panel",children:[n.jsx("h2",{children:"Visualization"}),n.jsx("div",{className:"graph-container",children:e.vertices.length===0?n.jsx("div",{className:"graph-empty",children:"Loading graph..."}):n.jsxs("svg",{className:"graph-svg",viewBox:"0 0 500 350",children:[e.edges.map(([P,L,N],F)=>{const G=E[P],W=E[L];if(!G||!W)return null;const J=(G.x+W.x)/2,ne=(G.y+W.y)/2;return n.jsxs("g",{children:[n.jsx("line",{x1:G.x,y1:G.y,x2:W.x,y2:W.y,className:z(P,L)}),n.jsx("circle",{cx:J,cy:ne,r:12,className:"weight-bg"}),n.jsx("text",{x:J,y:ne,className:"weight-label",dominantBaseline:"central",textAnchor:"middle",children:N})]},`edge-${F}`)}),e.vertices.map(P=>{const L=E[P];return L?n.jsxs("g",{className:M(P),children:[n.jsx("circle",{cx:L.x,cy:L.y,r:25,className:"node-circle"}),n.jsx("text",{x:L.x,y:L.y,className:"node-label",dominantBaseline:"central",textAnchor:"middle",children:P})]},P):null})]})}),n.jsxs("div",{className:"algorithm-steps",children:[n.jsx("h3",{children:"Kruskal vs Prim"}),n.jsxs("div",{className:"comparison-table",children:[n.jsxs("div",{className:"comparison-row header",children:[n.jsx("span",{children:"Feature"}),n.jsx("span",{children:"Kruskal's"}),n.jsx("span",{children:"Prim's"})]}),n.jsxs("div",{className:"comparison-row",children:[n.jsx("span",{children:"Time Complexity"}),n.jsx("span",{children:"O(E log E)"}),n.jsx("span",{children:"O((V+E)logV)"})]}),n.jsxs("div",{className:"comparison-row",children:[n.jsx("span",{children:"Best for"}),n.jsx("span",{children:"Sparse graphs"}),n.jsx("span",{children:"Dense graphs"})]}),n.jsxs("div",{className:"comparison-row",children:[n.jsx("span",{children:"Data Structure"}),n.jsx("span",{children:"Union-Find"}),n.jsx("span",{children:"Priority Queue"})]}),n.jsxs("div",{className:"comparison-row",children:[n.jsx("span",{children:"Strategy"}),n.jsx("span",{children:"Global (all edges)"}),n.jsx("span",{children:"Local (neighbors)"})]})]})]}),r.length>0&&n.jsxs("div",{className:"mst-edges-section",children:[n.jsx("h3",{children:"MST Edges"}),n.jsx("div",{className:"mst-edges-list",children:r.map(([P,L,N],F)=>n.jsxs("div",{className:"mst-edge-item",children:[n.jsxs("span",{children:[P," — ",L]}),n.jsxs("span",{className:"edge-weight",children:["(w: ",N,")"]})]},F))}),n.jsx("div",{className:"mst-total",children:n.jsxs("strong",{children:["Total MST Weight: ",l]})})]})]})]}),n.jsx(me,{dataStructure:"kruskal"})]})}function Jc(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,s=Array(t);r<t;r++)s[r]=e[r];return s}function J0(e){if(Array.isArray(e))return e}function Z0(e,t,r){return(t=a1(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function e1(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var s,i,a,l,o=[],c=!0,h=!1;try{if(a=(r=r.call(e)).next,t!==0)for(;!(c=(s=a.call(r)).done)&&(o.push(s.value),o.length!==t);c=!0);}catch(d){h=!0,i=d}finally{try{if(!c&&r.return!=null&&(l=r.return(),Object(l)!==l))return}finally{if(h)throw i}}return o}}function n1(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Zc(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,s)}return r}function ed(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Zc(Object(r),!0).forEach(function(s){Z0(e,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Zc(Object(r)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(r,s))})}return e}function t1(e,t){if(e==null)return{};var r,s,i=r1(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function r1(e,t){if(e==null)return{};var r={};for(var s in e)if({}.hasOwnProperty.call(e,s)){if(t.indexOf(s)!==-1)continue;r[s]=e[s]}return r}function s1(e,t){return J0(e)||e1(e,t)||l1(e,t)||n1()}function i1(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var s=r.call(e,t);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function a1(e){var t=i1(e,"string");return typeof t=="symbol"?t:t+""}function l1(e,t){if(e){if(typeof e=="string")return Jc(e,t);var r={}.toString.call(e).slice(8,-1);return r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set"?Array.from(e):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Jc(e,t):void 0}}function o1(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function nd(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,s)}return r}function td(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?nd(Object(r),!0).forEach(function(s){o1(e,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):nd(Object(r)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(r,s))})}return e}function c1(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(s){return t.reduceRight(function(i,a){return a(i)},s)}}function Cr(e){return function t(){for(var r=this,s=arguments.length,i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];return i.length>=e.length?e.apply(this,i):function(){for(var l=arguments.length,o=new Array(l),c=0;c<l;c++)o[c]=arguments[c];return t.apply(r,[].concat(i,o))}}}function Ni(e){return{}.toString.call(e).includes("Object")}function d1(e){return!Object.keys(e).length}function ss(e){return typeof e=="function"}function u1(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function h1(e,t){return Ni(t)||Jn("changeType"),Object.keys(t).some(function(r){return!u1(e,r)})&&Jn("changeField"),t}function p1(e){ss(e)||Jn("selectorType")}function f1(e){ss(e)||Ni(e)||Jn("handlerType"),Ni(e)&&Object.values(e).some(function(t){return!ss(t)})&&Jn("handlersType")}function m1(e){e||Jn("initialIsRequired"),Ni(e)||Jn("initialType"),d1(e)&&Jn("initialContent")}function g1(e,t){throw new Error(e[t]||e.default)}var v1={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},Jn=Cr(g1)(v1),Es={changes:h1,selector:p1,handler:f1,initial:m1};function x1(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Es.initial(e),Es.handler(t);var r={current:e},s=Cr(N1)(r,t),i=Cr(j1)(r),a=Cr(Es.changes)(e),l=Cr(y1)(r);function o(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(d){return d};return Es.selector(h),h(r.current)}function c(h){c1(s,i,a,l)(h)}return[o,c]}function y1(e,t){return ss(t)?t(e.current):t}function j1(e,t){return e.current=td(td({},e.current),t),t}function N1(e,t,r){return ss(t)?t(e.current):Object.keys(r).forEach(function(s){var i;return(i=t[s])===null||i===void 0?void 0:i.call(t,e.current[s])}),r}var k1={create:x1},w1={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function b1(e){return function t(){for(var r=this,s=arguments.length,i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];return i.length>=e.length?e.apply(this,i):function(){for(var l=arguments.length,o=new Array(l),c=0;c<l;c++)o[c]=arguments[c];return t.apply(r,[].concat(i,o))}}}function S1(e){return{}.toString.call(e).includes("Object")}function C1(e){return e||rd("configIsRequired"),S1(e)||rd("configType"),e.urls?(T1(),{paths:{vs:e.urls.monacoBase}}):e}function T1(){console.warn(zh.deprecation)}function L1(e,t){throw new Error(e[t]||e.default)}var zh={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},rd=b1(L1)(zh),_1={config:C1},E1=function(){for(var t=arguments.length,r=new Array(t),s=0;s<t;s++)r[s]=arguments[s];return function(i){return r.reduceRight(function(a,l){return l(a)},i)}};function Mh(e,t){return Object.keys(t).forEach(function(r){t[r]instanceof Object&&e[r]&&Object.assign(t[r],Mh(e[r],t[r]))}),ed(ed({},e),t)}var O1={type:"cancelation",msg:"operation is manually canceled"};function ma(e){var t=!1,r=new Promise(function(s,i){e.then(function(a){return t?i(O1):s(a)}),e.catch(i)});return r.cancel=function(){return t=!0},r}var R1=["monaco"],P1=k1.create({config:w1,isInitialized:!1,resolve:null,reject:null,monaco:null}),Vh=s1(P1,2),hs=Vh[0],Fi=Vh[1];function I1(e){var t=_1.config(e),r=t.monaco,s=t1(t,R1);Fi(function(i){return{config:Mh(i.config,s),monaco:r}})}function z1(){var e=hs(function(t){var r=t.monaco,s=t.isInitialized,i=t.resolve;return{monaco:r,isInitialized:s,resolve:i}});if(!e.isInitialized){if(Fi({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),ma(ga);if(window.monaco&&window.monaco.editor)return Ah(window.monaco),e.resolve(window.monaco),ma(ga);E1(M1,A1)(F1)}return ma(ga)}function M1(e){return document.body.appendChild(e)}function V1(e){var t=document.createElement("script");return e&&(t.src=e),t}function A1(e){var t=hs(function(s){var i=s.config,a=s.reject;return{config:i,reject:a}}),r=V1("".concat(t.config.paths.vs,"/loader.js"));return r.onload=function(){return e()},r.onerror=t.reject,r}function F1(){var e=hs(function(r){var s=r.config,i=r.resolve,a=r.reject;return{config:s,resolve:i,reject:a}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(r){var s=r.m||r;Ah(s),e.resolve(s)},function(r){e.reject(r)})}function Ah(e){hs().monaco||Fi({monaco:e})}function D1(){return hs(function(e){var t=e.monaco;return t})}var ga=new Promise(function(e,t){return Fi({resolve:e,reject:t})}),Fh={config:I1,init:z1,__getMonacoInstance:D1},$1={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},va=$1,B1={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},H1=B1;function q1({children:e}){return $e.createElement("div",{style:H1.container},e)}var U1=q1,K1=U1;function W1({width:e,height:t,isEditorReady:r,loading:s,_ref:i,className:a,wrapperProps:l}){return $e.createElement("section",{style:{...va.wrapper,width:e,height:t},...l},!r&&$e.createElement(K1,null,s),$e.createElement("div",{ref:i,style:{...va.fullWidth,...!r&&va.hide},className:a}))}var G1=W1,Dh=u.memo(G1);function Q1(e){u.useEffect(e,[])}var $h=Q1;function X1(e,t,r=!0){let s=u.useRef(!0);u.useEffect(s.current||!r?()=>{s.current=!1}:e,t)}var Ye=X1;function Vr(){}function Kt(e,t,r,s){return Y1(e,s)||J1(e,t,r,s)}function Y1(e,t){return e.editor.getModel(Bh(e,t))}function J1(e,t,r,s){return e.editor.createModel(t,r,s?Bh(e,s):void 0)}function Bh(e,t){return e.Uri.parse(t)}function Z1({original:e,modified:t,language:r,originalLanguage:s,modifiedLanguage:i,originalModelPath:a,modifiedModelPath:l,keepCurrentOriginalModel:o=!1,keepCurrentModifiedModel:c=!1,theme:h="light",loading:d="Loading...",options:p={},height:m="100%",width:b="100%",className:w,wrapperProps:k={},beforeMount:j=Vr,onMount:f=Vr}){let[g,v]=u.useState(!1),[E,y]=u.useState(!0),V=u.useRef(null),T=u.useRef(null),D=u.useRef(null),A=u.useRef(f),I=u.useRef(j),q=u.useRef(!1);$h(()=>{let x=Fh.init();return x.then(R=>(T.current=R)&&y(!1)).catch(R=>(R==null?void 0:R.type)!=="cancelation"&&console.error("Monaco initialization: error:",R)),()=>V.current?$():x.cancel()}),Ye(()=>{if(V.current&&T.current){let x=V.current.getOriginalEditor(),R=Kt(T.current,e||"",s||r||"text",a||"");R!==x.getModel()&&x.setModel(R)}},[a],g),Ye(()=>{if(V.current&&T.current){let x=V.current.getModifiedEditor(),R=Kt(T.current,t||"",i||r||"text",l||"");R!==x.getModel()&&x.setModel(R)}},[l],g),Ye(()=>{let x=V.current.getModifiedEditor();x.getOption(T.current.editor.EditorOption.readOnly)?x.setValue(t||""):t!==x.getValue()&&(x.executeEdits("",[{range:x.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),x.pushUndoStop())},[t],g),Ye(()=>{var x,R;(R=(x=V.current)==null?void 0:x.getModel())==null||R.original.setValue(e||"")},[e],g),Ye(()=>{let{original:x,modified:R}=V.current.getModel();T.current.editor.setModelLanguage(x,s||r||"text"),T.current.editor.setModelLanguage(R,i||r||"text")},[r,s,i],g),Ye(()=>{var x;(x=T.current)==null||x.editor.setTheme(h)},[h],g),Ye(()=>{var x;(x=V.current)==null||x.updateOptions(p)},[p],g);let K=u.useCallback(()=>{var H;if(!T.current)return;I.current(T.current);let x=Kt(T.current,e||"",s||r||"text",a||""),R=Kt(T.current,t||"",i||r||"text",l||"");(H=V.current)==null||H.setModel({original:x,modified:R})},[r,t,i,e,s,a,l]),B=u.useCallback(()=>{var x;!q.current&&D.current&&(V.current=T.current.editor.createDiffEditor(D.current,{automaticLayout:!0,...p}),K(),(x=T.current)==null||x.editor.setTheme(h),v(!0),q.current=!0)},[p,h,K]);u.useEffect(()=>{g&&A.current(V.current,T.current)},[g]),u.useEffect(()=>{!E&&!g&&B()},[E,g,B]);function $(){var R,H,_,O;let x=(R=V.current)==null?void 0:R.getModel();o||((H=x==null?void 0:x.original)==null||H.dispose()),c||((_=x==null?void 0:x.modified)==null||_.dispose()),(O=V.current)==null||O.dispose()}return $e.createElement(Dh,{width:b,height:m,isEditorReady:g,loading:d,_ref:D,className:w,wrapperProps:k})}var eN=Z1;u.memo(eN);function nN(e){let t=u.useRef();return u.useEffect(()=>{t.current=e},[e]),t.current}var tN=nN,Os=new Map;function rN({defaultValue:e,defaultLanguage:t,defaultPath:r,value:s,language:i,path:a,theme:l="light",line:o,loading:c="Loading...",options:h={},overrideServices:d={},saveViewState:p=!0,keepCurrentModel:m=!1,width:b="100%",height:w="100%",className:k,wrapperProps:j={},beforeMount:f=Vr,onMount:g=Vr,onChange:v,onValidate:E=Vr}){let[y,V]=u.useState(!1),[T,D]=u.useState(!0),A=u.useRef(null),I=u.useRef(null),q=u.useRef(null),K=u.useRef(g),B=u.useRef(f),$=u.useRef(),x=u.useRef(s),R=tN(a),H=u.useRef(!1),_=u.useRef(!1);$h(()=>{let M=Fh.init();return M.then(z=>(A.current=z)&&D(!1)).catch(z=>(z==null?void 0:z.type)!=="cancelation"&&console.error("Monaco initialization: error:",z)),()=>I.current?S():M.cancel()}),Ye(()=>{var z,C,P,L;let M=Kt(A.current,e||s||"",t||i||"",a||r||"");M!==((z=I.current)==null?void 0:z.getModel())&&(p&&Os.set(R,(C=I.current)==null?void 0:C.saveViewState()),(P=I.current)==null||P.setModel(M),p&&((L=I.current)==null||L.restoreViewState(Os.get(a))))},[a],y),Ye(()=>{var M;(M=I.current)==null||M.updateOptions(h)},[h],y),Ye(()=>{!I.current||s===void 0||(I.current.getOption(A.current.editor.EditorOption.readOnly)?I.current.setValue(s):s!==I.current.getValue()&&(_.current=!0,I.current.executeEdits("",[{range:I.current.getModel().getFullModelRange(),text:s,forceMoveMarkers:!0}]),I.current.pushUndoStop(),_.current=!1))},[s],y),Ye(()=>{var z,C;let M=(z=I.current)==null?void 0:z.getModel();M&&i&&((C=A.current)==null||C.editor.setModelLanguage(M,i))},[i],y),Ye(()=>{var M;o!==void 0&&((M=I.current)==null||M.revealLine(o))},[o],y),Ye(()=>{var M;(M=A.current)==null||M.editor.setTheme(l)},[l],y);let O=u.useCallback(()=>{var M;if(!(!q.current||!A.current)&&!H.current){B.current(A.current);let z=a||r,C=Kt(A.current,s||e||"",t||i||"",z||"");I.current=(M=A.current)==null?void 0:M.editor.create(q.current,{model:C,automaticLayout:!0,...h},d),p&&I.current.restoreViewState(Os.get(z)),A.current.editor.setTheme(l),o!==void 0&&I.current.revealLine(o),V(!0),H.current=!0}},[e,t,r,s,i,a,h,d,p,l,o]);u.useEffect(()=>{y&&K.current(I.current,A.current)},[y]),u.useEffect(()=>{!T&&!y&&O()},[T,y,O]),x.current=s,u.useEffect(()=>{var M,z;y&&v&&((M=$.current)==null||M.dispose(),$.current=(z=I.current)==null?void 0:z.onDidChangeModelContent(C=>{_.current||v(I.current.getValue(),C)}))},[y,v]),u.useEffect(()=>{if(y){let M=A.current.editor.onDidChangeMarkers(z=>{var P;let C=(P=I.current.getModel())==null?void 0:P.uri;if(C&&z.find(L=>L.path===C.path)){let L=A.current.editor.getModelMarkers({resource:C});E==null||E(L)}});return()=>{M==null||M.dispose()}}return()=>{}},[y,E]);function S(){var M,z;(M=$.current)==null||M.dispose(),m?p&&Os.set(a,I.current.saveViewState()):(z=I.current.getModel())==null||z.dispose(),I.current.dispose()}return $e.createElement(Dh,{width:b,height:w,isEditorReady:y,loading:c,_ref:q,className:k,wrapperProps:j})}var sN=rN,iN=u.memo(sN),aN=iN;const sd={python:{monacoLang:"python",defaultCode:`def solution(nums):
    # Write your solution here
    pass
`}};function lN({language:e,code:t,onChange:r,theme:s="vs-dark"}){const i=sd[e]||sd.python,a=o=>{r(o||"")},l={minimap:{enabled:!1},fontSize:14,fontFamily:"'Fira Code', 'JetBrains Mono', Consolas, monospace",fontLigatures:!0,lineNumbers:"on",roundedSelection:!0,scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,wordWrap:"on",padding:{top:16,bottom:16},suggest:{showKeywords:!0,showSnippets:!0}};return n.jsx("div",{className:"code-editor-container",children:n.jsx(aN,{height:"400px",language:i.monacoLang,value:t,theme:s,onChange:a,options:l,loading:n.jsx("div",{className:"editor-loading",children:"Loading editor..."})})})}const xa=[{id:"arrays-hashing",title:"Arrays & Hashing",icon:"grid",color:"#10b981",description:"Foundation of DSA - array manipulation and hash maps",problems:["two-sum","valid-anagram","contains-duplicate"]},{id:"two-pointers",title:"Two Pointers",icon:"pointer",color:"#3b82f6",description:"Efficient array traversal techniques",problems:["valid-palindrome","two-sum-sorted"]},{id:"stack",title:"Stack",icon:"layers",color:"#8b5cf6",description:"LIFO data structure problems",problems:["valid-parentheses","min-stack"]},{id:"binary-search",title:"Binary Search",icon:"search",color:"#f59e0b",description:"Divide and conquer search technique",problems:["binary-search","search-rotated-array"]},{id:"linked-list",title:"Linked List",icon:"link",color:"#ec4899",description:"Pointer-based data structures",problems:["reverse-linked-list","merge-two-lists","linked-list-cycle"]},{id:"trees",title:"Trees",icon:"tree",color:"#14b8a6",description:"Hierarchical data structures",problems:["invert-tree","max-depth-tree","same-tree"]},{id:"graphs",title:"Graphs",icon:"network",color:"#6366f1",description:"Graph traversal and algorithms",problems:["bfs-traversal","dfs-traversal","number-of-islands"]},{id:"dynamic-programming",title:"Dynamic Programming",icon:"puzzle",color:"#ef4444",description:"Optimization through memoization",problems:["climbing-stairs","house-robber"]},{id:"sorting",title:"Sorting",icon:"sort",color:"#84cc16",description:"Classic sorting algorithms",problems:["merge-sort","quick-sort"]}],Lt={"two-sum":{id:"two-sum",title:"Two Sum",difficulty:"Easy",category:"Arrays & Hashing",description:"Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\n\nYou can return the answer in any order.",examples:[{input:"nums = [2,7,11,15], target = 9",output:"[0,1]",explanation:"Because nums[0] + nums[1] == 9, we return [0, 1]."},{input:"nums = [3,2,4], target = 6",output:"[1,2]",explanation:"Because nums[1] + nums[2] == 6, we return [1, 2]."}],constraints:["2 <= nums.length <= 10^4","-10^9 <= nums[i] <= 10^9","Only one valid answer exists."],testCases:[{input:"[2,7,11,15], 9",expected:"[0, 1]"},{input:"[3,2,4], 6",expected:"[1, 2]"},{input:"[3,3], 6",expected:"[0, 1]"}],starterCode:{python:`class Solution:
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
print(s.solution([1,2,3,1]))`}},hints:["A set only stores unique values.","Compare the length of the set vs the original array."]},"valid-palindrome":{id:"valid-palindrome",title:"Valid Palindrome",difficulty:"Easy",category:"Two Pointers",description:"Given a string `s`, return `true` if it is a palindrome, or `false` otherwise.\n\nConsider only alphanumeric characters and ignore cases.",examples:[{input:'s = "A man, a plan, a canal: Panama"',output:"true",explanation:'"amanaplanacanalpanama" is a palindrome.'},{input:'s = "race a car"',output:"false",explanation:'"raceacar" is not a palindrome.'}],constraints:["1 <= s.length <= 2 * 10^5","s consists only of printable ASCII characters."],testCases:[{input:'"A man, a plan, a canal: Panama"',expected:"True"},{input:'"race a car"',expected:"False"}],starterCode:{python:`def solution(s):
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

print(solution([3,6,8,10,1,2,1]))`}},hints:["Pick a pivot (last element is common).","Partition: smaller left, larger right.","Recurse on both partitions."]}},Hh=Object.values(Lt);[...new Set(Hh.map(e=>e.category))];const ya={grid:Bg,pointer:Qg,layers:gt,search:ur,link:rs,tree:Zt,network:vl,puzzle:Yg,sort:_g};function id(){const{problemId:e}=Jm(),t=Sh(),[r,s]=u.useState(null),[i,a]=u.useState("python"),[l,o]=u.useState(""),[c,h]=u.useState(!1),[d,p]=u.useState(null),[m,b]=u.useState(null),[w,k]=u.useState(!1),[j,f]=u.useState(0),[g,v]=u.useState("description"),[E,y]=u.useState(!e),[V,T]=u.useState(()=>{const z=localStorage.getItem("completedProblems");return z?JSON.parse(z):[]}),[D,A]=u.useState(null),[I,q]=u.useState("map"),[K,B]=u.useState(null),[$,x]=u.useState(null),R=u.useRef(null);u.useEffect(()=>{R.current&&(R.current.scrollTop=0)},[g,r]),u.useEffect(()=>{localStorage.setItem("completedProblems",JSON.stringify(V))},[V]),u.useEffect(()=>{if(e&&Lt[e]){const z=Lt[e];s(z),o(z.starterCode[i]||z.starterCode.python),p(null),b(null),k(!1),f(0),y(!1),window.scrollTo(0,0)}else e||(y(!0),window.scrollTo(0,0))},[e]),u.useEffect(()=>{r&&o(r.starterCode[i]||r.starterCode.python)},[i,r]);const H=z=>{V.includes(z)||T([...V,z])},_=async()=>{h(!0),p(null),b(null);try{const C=await(await fetch("/api/practice/execute",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({language:i,code:l})})).json();p({stdout:C.output||"",stderr:C.error||"",success:C.success})}catch(z){p({stdout:"",stderr:`Error: ${z.message}`,success:!1})}finally{h(!1)}},O=async()=>{if(r){h(!0),p(null),b(null);try{const C=await(await fetch("/api/practice/run-tests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({language:i,code:l,testCases:r.testCases,functionName:"solution"})})).json();b(C),C.allPassed&&H(r.id)}catch(z){p({stdout:"",stderr:`Error running tests: ${z.message}`,success:!1})}finally{h(!1)}}},S=()=>{r&&(o(r.starterCode[i]||r.starterCode.python),p(null),b(null))},M=()=>{r&&j<r.hints.length&&(k(!0),f(z=>Math.min(z+1,r.hints.length)))};if(E){const z=Hh.length,C=V.length,P=Math.round(C/z*100);return n.jsx("div",{className:"practice-container",children:n.jsxs("div",{className:"roadmap-page",children:[n.jsxs("div",{className:"roadmap-header",children:[n.jsxs("div",{className:"roadmap-title",children:[n.jsx(Xc,{size:32}),n.jsxs("div",{children:[n.jsx("h1",{children:"DSA Roadmap"}),n.jsx("p",{children:"Master data structures and algorithms step by step"})]})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[n.jsxs("div",{className:"view-toggle",children:[n.jsxs("button",{className:`view-toggle-btn ${I==="map"?"active":""}`,onClick:()=>q("map"),children:[n.jsx(Ug,{size:16}),"Map"]}),n.jsxs("button",{className:`view-toggle-btn ${I==="list"?"active":""}`,onClick:()=>q("list"),children:[n.jsx(Wg,{size:16}),"List"]})]}),n.jsxs("div",{className:"progress-stats",children:[n.jsxs("div",{className:"progress-circle",children:[n.jsxs("svg",{viewBox:"0 0 36 36",children:[n.jsx("path",{className:"progress-bg",d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"}),n.jsx("path",{className:"progress-fill",strokeDasharray:`${P}, 100`,d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"})]}),n.jsxs("span",{className:"progress-text",children:[P,"%"]})]}),n.jsxs("div",{className:"progress-info",children:[n.jsxs("span",{className:"completed-count",children:[C,"/",z]}),n.jsx("span",{className:"completed-label",children:"Problems Solved"})]})]})]})]}),I==="map"&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"roadmap-visual-map",children:xa.map(L=>{const N=L.problems.map(J=>Lt[J]).filter(Boolean),F=N.filter(J=>V.includes(J.id)).length,G=Math.round(F/N.length*100),W=D===L.id;return n.jsxs("div",{className:`map-node ${W?"active":""}`,style:{"--node-color":L.color},onClick:()=>A(W?null:L.id),children:[F===N.length?n.jsx("div",{className:"map-node-badge completed",children:n.jsx(Ie,{size:14})}):F>0?n.jsx("div",{className:"map-node-badge in-progress",children:F}):null,n.jsxs("div",{className:"map-node-header",children:[n.jsx("span",{className:"map-node-icon",children:(()=>{const J=ya[L.icon];return J?n.jsx(J,{size:20}):null})()}),n.jsx("span",{className:"map-node-title",children:L.title})]}),n.jsx("p",{className:"map-node-description",children:L.description}),n.jsxs("div",{className:"map-node-progress",children:[n.jsx("div",{className:"map-node-progress-bar",children:n.jsx("div",{className:"map-node-progress-fill",style:{width:`${G}%`}})}),n.jsxs("span",{className:"map-node-progress-text",children:[F,"/",N.length]})]})]},L.id)})}),D&&n.jsx("div",{className:"expanded-section",children:(()=>{const L=xa.find(F=>F.id===D),N=L.problems.map(F=>Lt[F]).filter(Boolean);return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"expanded-section-header",children:[n.jsxs("div",{className:"expanded-section-title",children:[n.jsx("span",{className:"section-icon-wrapper",children:(()=>{const F=ya[L.icon];return F?n.jsx(F,{size:24}):null})()}),n.jsx("h3",{children:L.title})]}),n.jsx("button",{className:"close-section-btn",onClick:F=>{F.stopPropagation(),A(null)},children:n.jsx(Ih,{size:16})})]}),n.jsx("div",{className:"problem-grid",children:N.map(F=>{const G=V.includes(F.id);return n.jsxs("div",{className:`problem-item ${G?"completed":""}`,onClick:()=>t(`/practice/${F.id}`),children:[n.jsx("div",{className:`problem-status-icon ${G?"done":"pending"}`,children:G?n.jsx(Ie,{size:16}):n.jsx(Us,{size:16})}),n.jsxs("div",{className:"problem-item-info",children:[n.jsx("div",{className:"problem-item-title",children:F.title}),n.jsx("div",{className:"problem-item-meta",children:n.jsx("span",{className:`problem-item-difficulty ${F.difficulty.toLowerCase()}`,children:F.difficulty})})]}),n.jsx(qs,{size:16,className:"problem-item-arrow"})]},F.id)})})]})})()})]}),I==="list"&&n.jsx("div",{className:"roadmap-container",children:xa.map((L,N)=>{const F=L.problems.map(W=>Lt[W]).filter(Boolean),G=F.filter(W=>V.includes(W.id)).length;return n.jsxs("div",{className:"roadmap-section",children:[N>0&&n.jsx("div",{className:"roadmap-connector"}),n.jsxs("div",{className:"section-card",style:{"--section-color":L.color},children:[n.jsxs("div",{className:"section-header",children:[n.jsx("span",{className:"section-icon",children:(()=>{const W=ya[L.icon];return W?n.jsx(W,{size:24}):null})()}),n.jsxs("div",{className:"section-info",children:[n.jsx("h2",{children:L.title}),n.jsx("p",{children:L.description})]}),n.jsx("div",{className:"section-progress",children:n.jsxs("span",{children:[G,"/",F.length]})})]}),n.jsx("div",{className:"section-problems",children:F.map((W,J)=>{const ne=V.includes(W.id);return n.jsxs("div",{className:`problem-node ${ne?"completed":""}`,onClick:()=>t(`/practice/${W.id}`),children:[J>0&&n.jsx("div",{className:"node-connector"}),n.jsx("div",{className:"node-circle",children:ne?n.jsx(Ie,{size:16}):n.jsx("span",{className:"node-number",children:J+1})}),n.jsxs("div",{className:"node-info",children:[n.jsx("span",{className:"node-title",children:W.title}),n.jsx("span",{className:`node-difficulty ${W.difficulty.toLowerCase()}`,children:W.difficulty})]}),n.jsx(qs,{size:16,className:"node-arrow"})]},W.id)})})]})]},L.id)})})]})})}return r?n.jsx("div",{className:"practice-container",children:n.jsxs("div",{className:"practice-layout",children:[n.jsxs("div",{className:"problem-panel",children:[n.jsxs("div",{className:"problem-header",children:[n.jsxs("button",{className:"back-btn",onClick:()=>y(!0),children:[n.jsx(Xc,{size:16})," Roadmap"]}),n.jsx("h1",{children:r.title}),n.jsx("span",{className:`difficulty ${r.difficulty.toLowerCase()}`,children:r.difficulty}),V.includes(r.id)&&n.jsxs("span",{className:"solved-badge",children:[n.jsx(Ie,{size:14})," Solved"]})]}),n.jsxs("div",{className:"problem-tabs",children:[n.jsx("button",{className:g==="description"?"active":"",onClick:()=>v("description"),children:"Description"}),n.jsx("button",{className:g==="hints"?"active":"",onClick:()=>v("hints"),children:"Hints"}),n.jsxs("button",{className:g==="solutions"?"active":"",onClick:()=>v("solutions"),children:[n.jsx(vi,{size:14}),"Solutions"]})]}),n.jsxs("div",{className:"problem-content",ref:R,children:[g==="description"&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"description",children:r.description.split(`
`).map((z,C)=>n.jsx("p",{children:z},C))}),n.jsxs("div",{className:"examples",children:[n.jsx("h3",{children:"Examples"}),r.examples.map((z,C)=>n.jsxs("div",{className:"example",children:[n.jsxs("div",{className:"example-label",children:["Example ",C+1,":"]}),n.jsxs("div",{className:"example-content",children:[n.jsxs("div",{children:[n.jsx("strong",{children:"Input:"})," ",n.jsx("code",{children:z.input})]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Output:"})," ",n.jsx("code",{children:z.output})]}),z.explanation&&n.jsxs("div",{children:[n.jsx("strong",{children:"Explanation:"})," ",z.explanation]})]})]},C))]}),n.jsxs("div",{className:"constraints",children:[n.jsx("h3",{children:"Constraints"}),n.jsx("ul",{children:r.constraints.map((z,C)=>n.jsx("li",{children:n.jsx("code",{children:z})},C))})]})]}),g==="hints"&&n.jsxs("div",{className:"hints-section",children:[n.jsxs("div",{className:"hints-header",children:[n.jsx(xe,{size:20}),n.jsx("span",{children:"Need help? Reveal hints one at a time."})]}),r.hints.slice(0,j).map((z,C)=>n.jsxs("div",{className:"hint",children:[n.jsxs("span",{className:"hint-number",children:["Hint ",C+1,":"]}),z]},C)),j<r.hints.length&&n.jsxs("button",{className:"reveal-hint-btn",onClick:M,children:[n.jsx(xe,{size:14}),"Reveal Hint ",j+1]}),j>=r.hints.length&&n.jsx("div",{className:"all-hints-shown",children:"All hints revealed!"})]}),g==="solutions"&&r.solutions&&n.jsxs("div",{className:"solutions-section",children:[n.jsxs("div",{className:"solutions-header",children:[n.jsx(vi,{size:20}),n.jsx("span",{children:"Multiple approaches with different time/space complexities"})]}),n.jsx("div",{className:"solutions-list",children:Object.entries(r.solutions).map(([z,C])=>{const P=K===z,L=$===z;return n.jsxs("div",{className:`solution-card ${P?"expanded":""}`,children:[n.jsxs("div",{className:"solution-card-header",onClick:()=>B(P?null:z),children:[n.jsxs("div",{className:"solution-info",children:[n.jsx("h4",{className:"solution-name",children:C.name}),n.jsxs("div",{className:"solution-complexity",children:[n.jsxs("span",{className:"complexity-badge time",children:[n.jsx(Eh,{size:12}),C.timeComplexity]}),n.jsxs("span",{className:"complexity-badge space",children:[n.jsx(xi,{size:12}),C.spaceComplexity]})]})]}),n.jsx(qs,{size:18,className:`solution-expand-icon ${P?"rotated":""}`})]}),P&&n.jsxs("div",{className:"solution-card-body",children:[n.jsx("p",{className:"solution-description",children:C.description}),n.jsxs("div",{className:"solution-code-container",children:[n.jsxs("div",{className:"solution-code-header",children:[n.jsx("span",{children:"Python"}),n.jsx("button",{className:"copy-solution-btn",onClick:N=>{N.stopPropagation(),navigator.clipboard.writeText(C.code),x(z),setTimeout(()=>x(null),2e3)},children:L?n.jsxs(n.Fragment,{children:[n.jsx(Mg,{size:14}),"Copied!"]}):n.jsxs(n.Fragment,{children:[n.jsx(Oh,{size:14}),"Copy"]})})]}),n.jsx("pre",{className:"solution-code",children:n.jsx("code",{children:C.code})})]}),n.jsxs("button",{className:"use-solution-btn",onClick:N=>{N.stopPropagation(),o(C.code),v("description")},children:[n.jsx(Us,{size:14}),"Use This Solution"]})]})]},z)})})]})]})]}),n.jsxs("div",{className:"editor-panel",children:[n.jsxs("div",{className:"editor-header",children:[n.jsxs("div",{className:"language-selector",children:[n.jsx(Us,{size:16}),n.jsx("span",{className:"language-label",children:"Python"})]}),n.jsx("div",{className:"editor-actions",children:n.jsx("button",{className:"btn btn-reset",onClick:S,disabled:c,title:"Reset code",children:n.jsx(it,{size:14})})})]}),n.jsx(lN,{language:i,code:l,onChange:o}),n.jsxs("div",{className:"run-actions",children:[n.jsxs("button",{className:"btn btn-run",onClick:_,disabled:c,children:[n.jsx(Ve,{size:14}),c?"Running...":"Run Code"]}),n.jsxs("button",{className:"btn btn-submit",onClick:O,disabled:c,children:[n.jsx(Ie,{size:14}),c?"Testing...":"Submit"]})]}),n.jsxs("div",{className:"output-panel",children:[n.jsxs("div",{className:"output-header",children:[n.jsx("span",{children:"Output"}),d&&n.jsx("span",{className:`status ${d.success?"success":"error"}`,children:d.success?"Success":"Error"})]}),n.jsxs("div",{className:"output-content",children:[!d&&!m&&n.jsx("div",{className:"output-placeholder",children:"Run your code to see output here..."}),d&&n.jsxs(n.Fragment,{children:[d.stdout&&n.jsxs("div",{className:"stdout",children:[n.jsx("div",{className:"output-label",children:"stdout:"}),n.jsx("pre",{children:d.stdout})]}),d.stderr&&n.jsxs("div",{className:"stderr",children:[n.jsx("div",{className:"output-label",children:"stderr:"}),n.jsx("pre",{children:d.stderr})]})]}),m&&n.jsxs("div",{className:"test-results",children:[n.jsx("div",{className:"test-summary",children:n.jsx("span",{className:m.allPassed?"all-passed":"some-failed",children:m.allPassed?n.jsxs(n.Fragment,{children:[n.jsx(Ie,{size:16})," All tests passed!"]}):n.jsxs(n.Fragment,{children:[n.jsx(Yc,{size:16})," ",m.summary.passed,"/",m.summary.total," tests passed"]})})}),n.jsx("div",{className:"test-cases",children:m.results.map((z,C)=>n.jsxs("div",{className:`test-case ${z.passed?"passed":"failed"}`,children:[n.jsxs("div",{className:"test-case-header",children:[z.passed?n.jsx(Ie,{size:14}):n.jsx(Yc,{size:14}),n.jsxs("span",{children:["Test Case ",z.testCase]})]}),n.jsxs("div",{className:"test-case-details",children:[n.jsxs("div",{children:[n.jsx("strong",{children:"Input:"})," ",n.jsx("code",{children:z.input})]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Expected:"})," ",n.jsx("code",{children:z.expected})]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Actual:"})," ",n.jsx("code",{children:z.actual||"(empty)"})]}),z.error&&n.jsxs("div",{className:"test-error",children:[n.jsx("strong",{children:"Error:"})," ",z.error]})]})]},C))})]})]})]})]})]})}):n.jsx("div",{className:"practice-container",children:n.jsx("div",{className:"loading",children:"Loading problem..."})})}function oN(){return n.jsxs("div",{className:"homepage-body",children:[n.jsx(iv,{}),n.jsxs("main",{className:"main-content",children:[n.jsxs(fg,{children:[n.jsx(re,{path:"/",element:n.jsx(lv,{})}),n.jsx(re,{path:"/algorithms",element:n.jsx(ov,{})}),n.jsx(re,{path:"/contact",element:n.jsx(cv,{})}),n.jsx(re,{path:"/contributions",element:n.jsx(dv,{})}),n.jsx(re,{path:"/stack",element:n.jsx(Nx,{})}),n.jsx(re,{path:"/queue",element:n.jsx(kx,{})}),n.jsx(re,{path:"/linkedlist",element:n.jsx(wx,{})}),n.jsx(re,{path:"/skiplist",element:n.jsx(bx,{})}),n.jsx(re,{path:"/hashtable_linear",element:n.jsx(Sx,{})}),n.jsx(re,{path:"/hashtable_quadratic",element:n.jsx(zx,{})}),n.jsx(re,{path:"/hashtable_chaining",element:n.jsx(Ix,{})}),n.jsx(re,{path:"/binarytree",element:n.jsx(Bx,{})}),n.jsx(re,{path:"/bst",element:n.jsx(g0,{})}),n.jsx(re,{path:"/avl",element:n.jsx(k0,{})}),n.jsx(re,{path:"/splay",element:n.jsx(T0,{})}),n.jsx(re,{path:"/treap",element:n.jsx(I0,{})}),n.jsx(re,{path:"/minheap",element:n.jsx(A0,{})}),n.jsx(re,{path:"/maxheap",element:n.jsx(B0,{})}),n.jsx(re,{path:"/adjacency-list",element:n.jsx(H0,{})}),n.jsx(re,{path:"/adjacency-matrix",element:n.jsx(q0,{})}),n.jsx(re,{path:"/bfs",element:n.jsx(U0,{})}),n.jsx(re,{path:"/dfs",element:n.jsx(K0,{})}),n.jsx(re,{path:"/dijkstra",element:n.jsx(W0,{})}),n.jsx(re,{path:"/bellman-ford",element:n.jsx(X0,{})}),n.jsx(re,{path:"/prim-mst",element:n.jsx(G0,{})}),n.jsx(re,{path:"/kruskal-mst",element:n.jsx(Y0,{})}),n.jsx(re,{path:"/topological-sort",element:n.jsx(Q0,{})}),n.jsx(re,{path:"/practice",element:n.jsx(id,{})}),n.jsx(re,{path:"/practice/:problemId",element:n.jsx(id,{})})]}),n.jsx(av,{})]})]})}ja.createRoot(document.getElementById("root")).render(n.jsx($e.StrictMode,{children:n.jsx(Ng,{children:n.jsx(oN,{})})}));
