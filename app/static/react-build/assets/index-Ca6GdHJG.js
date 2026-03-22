function lf(n,t){for(var r=0;r<t.length;r++){const s=t[r];if(typeof s!="string"&&!Array.isArray(s)){for(const i in s)if(i!=="default"&&!(i in n)){const a=Object.getOwnPropertyDescriptor(s,i);a&&Object.defineProperty(n,i,a.get?a:{enumerable:!0,get:()=>s[i]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function r(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(i){if(i.ep)return;i.ep=!0;const a=r(i);fetch(i.href,a)}})();function of(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var fu={exports:{}},Gi={},mu={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ls=Symbol.for("react.element"),cf=Symbol.for("react.portal"),df=Symbol.for("react.fragment"),uf=Symbol.for("react.strict_mode"),hf=Symbol.for("react.profiler"),pf=Symbol.for("react.provider"),ff=Symbol.for("react.context"),mf=Symbol.for("react.forward_ref"),gf=Symbol.for("react.suspense"),xf=Symbol.for("react.memo"),vf=Symbol.for("react.lazy"),Tc=Symbol.iterator;function yf(n){return n===null||typeof n!="object"?null:(n=Tc&&n[Tc]||n["@@iterator"],typeof n=="function"?n:null)}var gu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xu=Object.assign,vu={};function Lr(n,t,r){this.props=n,this.context=t,this.refs=vu,this.updater=r||gu}Lr.prototype.isReactComponent={};Lr.prototype.setState=function(n,t){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,t,"setState")};Lr.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function yu(){}yu.prototype=Lr.prototype;function fo(n,t,r){this.props=n,this.context=t,this.refs=vu,this.updater=r||gu}var mo=fo.prototype=new yu;mo.constructor=fo;xu(mo,Lr.prototype);mo.isPureReactComponent=!0;var _c=Array.isArray,ju=Object.prototype.hasOwnProperty,go={current:null},Nu={key:!0,ref:!0,__self:!0,__source:!0};function bu(n,t,r){var s,i={},a=null,l=null;if(t!=null)for(s in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(a=""+t.key),t)ju.call(t,s)&&!Nu.hasOwnProperty(s)&&(i[s]=t[s]);var o=arguments.length-2;if(o===1)i.children=r;else if(1<o){for(var c=Array(o),d=0;d<o;d++)c[d]=arguments[d+2];i.children=c}if(n&&n.defaultProps)for(s in o=n.defaultProps,o)i[s]===void 0&&(i[s]=o[s]);return{$$typeof:Ls,type:n,key:a,ref:l,props:i,_owner:go.current}}function jf(n,t){return{$$typeof:Ls,type:n.type,key:t,ref:n.ref,props:n.props,_owner:n._owner}}function xo(n){return typeof n=="object"&&n!==null&&n.$$typeof===Ls}function Nf(n){var t={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(r){return t[r]})}var Lc=/\/+/g;function ha(n,t){return typeof n=="object"&&n!==null&&n.key!=null?Nf(""+n.key):t.toString(36)}function ai(n,t,r,s,i){var a=typeof n;(a==="undefined"||a==="boolean")&&(n=null);var l=!1;if(n===null)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(n.$$typeof){case Ls:case cf:l=!0}}if(l)return l=n,i=i(l),n=s===""?"."+ha(l,0):s,_c(i)?(r="",n!=null&&(r=n.replace(Lc,"$&/")+"/"),ai(i,t,r,"",function(d){return d})):i!=null&&(xo(i)&&(i=jf(i,r+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Lc,"$&/")+"/")+n)),t.push(i)),1;if(l=0,s=s===""?".":s+":",_c(n))for(var o=0;o<n.length;o++){a=n[o];var c=s+ha(a,o);l+=ai(a,t,r,c,i)}else if(c=yf(n),typeof c=="function")for(n=c.call(n),o=0;!(a=n.next()).done;)a=a.value,c=s+ha(a,o++),l+=ai(a,t,r,c,i);else if(a==="object")throw t=String(n),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Ds(n,t,r){if(n==null)return n;var s=[],i=0;return ai(n,s,"","",function(a){return t.call(r,a,i++)}),s}function bf(n){if(n._status===-1){var t=n._result;t=t(),t.then(function(r){(n._status===0||n._status===-1)&&(n._status=1,n._result=r)},function(r){(n._status===0||n._status===-1)&&(n._status=2,n._result=r)}),n._status===-1&&(n._status=0,n._result=t)}if(n._status===1)return n._result.default;throw n._result}var Je={current:null},li={transition:null},kf={ReactCurrentDispatcher:Je,ReactCurrentBatchConfig:li,ReactCurrentOwner:go};function ku(){throw Error("act(...) is not supported in production builds of React.")}ae.Children={map:Ds,forEach:function(n,t,r){Ds(n,function(){t.apply(this,arguments)},r)},count:function(n){var t=0;return Ds(n,function(){t++}),t},toArray:function(n){return Ds(n,function(t){return t})||[]},only:function(n){if(!xo(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};ae.Component=Lr;ae.Fragment=df;ae.Profiler=hf;ae.PureComponent=fo;ae.StrictMode=uf;ae.Suspense=gf;ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kf;ae.act=ku;ae.cloneElement=function(n,t,r){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var s=xu({},n.props),i=n.key,a=n.ref,l=n._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,l=go.current),t.key!==void 0&&(i=""+t.key),n.type&&n.type.defaultProps)var o=n.type.defaultProps;for(c in t)ju.call(t,c)&&!Nu.hasOwnProperty(c)&&(s[c]=t[c]===void 0&&o!==void 0?o[c]:t[c])}var c=arguments.length-2;if(c===1)s.children=r;else if(1<c){o=Array(c);for(var d=0;d<c;d++)o[d]=arguments[d+2];s.children=o}return{$$typeof:Ls,type:n.type,key:i,ref:a,props:s,_owner:l}};ae.createContext=function(n){return n={$$typeof:ff,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:pf,_context:n},n.Consumer=n};ae.createElement=bu;ae.createFactory=function(n){var t=bu.bind(null,n);return t.type=n,t};ae.createRef=function(){return{current:null}};ae.forwardRef=function(n){return{$$typeof:mf,render:n}};ae.isValidElement=xo;ae.lazy=function(n){return{$$typeof:vf,_payload:{_status:-1,_result:n},_init:bf}};ae.memo=function(n,t){return{$$typeof:xf,type:n,compare:t===void 0?null:t}};ae.startTransition=function(n){var t=li.transition;li.transition={};try{n()}finally{li.transition=t}};ae.unstable_act=ku;ae.useCallback=function(n,t){return Je.current.useCallback(n,t)};ae.useContext=function(n){return Je.current.useContext(n)};ae.useDebugValue=function(){};ae.useDeferredValue=function(n){return Je.current.useDeferredValue(n)};ae.useEffect=function(n,t){return Je.current.useEffect(n,t)};ae.useId=function(){return Je.current.useId()};ae.useImperativeHandle=function(n,t,r){return Je.current.useImperativeHandle(n,t,r)};ae.useInsertionEffect=function(n,t){return Je.current.useInsertionEffect(n,t)};ae.useLayoutEffect=function(n,t){return Je.current.useLayoutEffect(n,t)};ae.useMemo=function(n,t){return Je.current.useMemo(n,t)};ae.useReducer=function(n,t,r){return Je.current.useReducer(n,t,r)};ae.useRef=function(n){return Je.current.useRef(n)};ae.useState=function(n){return Je.current.useState(n)};ae.useSyncExternalStore=function(n,t,r){return Je.current.useSyncExternalStore(n,t,r)};ae.useTransition=function(){return Je.current.useTransition()};ae.version="18.3.1";mu.exports=ae;var p=mu.exports;const _e=of(p),wf=lf({__proto__:null,default:_e},[p]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sf=p,Cf=Symbol.for("react.element"),Tf=Symbol.for("react.fragment"),_f=Object.prototype.hasOwnProperty,Lf=Sf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ef={key:!0,ref:!0,__self:!0,__source:!0};function wu(n,t,r){var s,i={},a=null,l=null;r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(l=t.ref);for(s in t)_f.call(t,s)&&!Ef.hasOwnProperty(s)&&(i[s]=t[s]);if(n&&n.defaultProps)for(s in t=n.defaultProps,t)i[s]===void 0&&(i[s]=t[s]);return{$$typeof:Cf,type:n,key:a,ref:l,props:i,_owner:Lf.current}}Gi.Fragment=Tf;Gi.jsx=wu;Gi.jsxs=wu;fu.exports=Gi;var e=fu.exports,tl={},Su={exports:{}},pn={},Cu={exports:{}},Tu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function t(T,_){var z=T.length;T.push(_);e:for(;0<z;){var F=z-1>>>1,B=T[F];if(0<i(B,_))T[F]=_,T[z]=B,z=F;else break e}}function r(T){return T.length===0?null:T[0]}function s(T){if(T.length===0)return null;var _=T[0],z=T.pop();if(z!==_){T[0]=z;e:for(var F=0,B=T.length,I=B>>>1;F<I;){var $=2*(F+1)-1,R=T[$],w=$+1,H=T[w];if(0>i(R,z))w<B&&0>i(H,R)?(T[F]=H,T[w]=z,F=w):(T[F]=R,T[$]=z,F=$);else if(w<B&&0>i(H,z))T[F]=H,T[w]=z,F=w;else break e}}return _}function i(T,_){var z=T.sortIndex-_.sortIndex;return z!==0?z:T.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var l=Date,o=l.now();n.unstable_now=function(){return l.now()-o}}var c=[],d=[],u=1,h=null,g=3,b=!1,N=!1,y=!1,j=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(T){for(var _=r(d);_!==null;){if(_.callback===null)s(d);else if(_.startTime<=T)s(d),_.sortIndex=_.expirationTime,t(c,_);else break;_=r(d)}}function C(T){if(y=!1,x(T),!N)if(r(c)!==null)N=!0,L(v);else{var _=r(d);_!==null&&V(C,_.startTime-T)}}function v(T,_){N=!1,y&&(y=!1,f(D),D=-1),b=!0;var z=g;try{for(x(_),h=r(c);h!==null&&(!(h.expirationTime>_)||T&&!q());){var F=h.callback;if(typeof F=="function"){h.callback=null,g=h.priorityLevel;var B=F(h.expirationTime<=_);_=n.unstable_now(),typeof B=="function"?h.callback=B:h===r(c)&&s(c),x(_)}else s(c);h=r(c)}if(h!==null)var I=!0;else{var $=r(d);$!==null&&V(C,$.startTime-_),I=!1}return I}finally{h=null,g=z,b=!1}}var P=!1,S=null,D=-1,M=5,E=-1;function q(){return!(n.unstable_now()-E<M)}function K(){if(S!==null){var T=n.unstable_now();E=T;var _=!0;try{_=S(!0,T)}finally{_?O():(P=!1,S=null)}}else P=!1}var O;if(typeof m=="function")O=function(){m(K)};else if(typeof MessageChannel<"u"){var A=new MessageChannel,k=A.port2;A.port1.onmessage=K,O=function(){k.postMessage(null)}}else O=function(){j(K,0)};function L(T){S=T,P||(P=!0,O())}function V(T,_){D=j(function(){T(n.unstable_now())},_)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(T){T.callback=null},n.unstable_continueExecution=function(){N||b||(N=!0,L(v))},n.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<T?Math.floor(1e3/T):5},n.unstable_getCurrentPriorityLevel=function(){return g},n.unstable_getFirstCallbackNode=function(){return r(c)},n.unstable_next=function(T){switch(g){case 1:case 2:case 3:var _=3;break;default:_=g}var z=g;g=_;try{return T()}finally{g=z}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(T,_){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var z=g;g=T;try{return _()}finally{g=z}},n.unstable_scheduleCallback=function(T,_,z){var F=n.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?F+z:F):z=F,T){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=z+B,T={id:u++,callback:_,priorityLevel:T,startTime:z,expirationTime:B,sortIndex:-1},z>F?(T.sortIndex=z,t(d,T),r(c)===null&&T===r(d)&&(y?(f(D),D=-1):y=!0,V(C,z-F))):(T.sortIndex=B,t(c,T),N||b||(N=!0,L(v))),T},n.unstable_shouldYield=q,n.unstable_wrapCallback=function(T){var _=g;return function(){var z=g;g=_;try{return T.apply(this,arguments)}finally{g=z}}}})(Tu);Cu.exports=Tu;var Of=Cu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rf=p,hn=Of;function W(n){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+n,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+n+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _u=new Set,cs={};function Dt(n,t){br(n,t),br(n+"Capture",t)}function br(n,t){for(cs[n]=t,n=0;n<t.length;n++)_u.add(t[n])}var Un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rl=Object.prototype.hasOwnProperty,Pf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ec={},Oc={};function If(n){return rl.call(Oc,n)?!0:rl.call(Ec,n)?!1:Pf.test(n)?Oc[n]=!0:(Ec[n]=!0,!1)}function zf(n,t,r,s){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:r!==null?!r.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Mf(n,t,r,s){if(t===null||typeof t>"u"||zf(n,t,r,s))return!0;if(s)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ze(n,t,r,s,i,a,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=n,this.type=t,this.sanitizeURL=a,this.removeEmptyString=l}var Be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Be[n]=new Ze(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var t=n[0];Be[t]=new Ze(t,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Be[n]=new Ze(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Be[n]=new Ze(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Be[n]=new Ze(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Be[n]=new Ze(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Be[n]=new Ze(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Be[n]=new Ze(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Be[n]=new Ze(n,5,!1,n.toLowerCase(),null,!1,!1)});var vo=/[\-:]([a-z])/g;function yo(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var t=n.replace(vo,yo);Be[t]=new Ze(t,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var t=n.replace(vo,yo);Be[t]=new Ze(t,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var t=n.replace(vo,yo);Be[t]=new Ze(t,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Be[n]=new Ze(n,1,!1,n.toLowerCase(),null,!1,!1)});Be.xlinkHref=new Ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Be[n]=new Ze(n,1,!1,n.toLowerCase(),null,!0,!0)});function jo(n,t,r,s){var i=Be.hasOwnProperty(t)?Be[t]:null;(i!==null?i.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Mf(t,r,i,s)&&(r=null),s||i===null?If(t)&&(r===null?n.removeAttribute(t):n.setAttribute(t,""+r)):i.mustUseProperty?n[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,s=i.attributeNamespace,r===null?n.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,s?n.setAttributeNS(s,t,r):n.setAttribute(t,r))))}var Qn=Rf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vs=Symbol.for("react.element"),Xt=Symbol.for("react.portal"),Yt=Symbol.for("react.fragment"),No=Symbol.for("react.strict_mode"),sl=Symbol.for("react.profiler"),Lu=Symbol.for("react.provider"),Eu=Symbol.for("react.context"),bo=Symbol.for("react.forward_ref"),il=Symbol.for("react.suspense"),al=Symbol.for("react.suspense_list"),ko=Symbol.for("react.memo"),Jn=Symbol.for("react.lazy"),Ou=Symbol.for("react.offscreen"),Rc=Symbol.iterator;function Fr(n){return n===null||typeof n!="object"?null:(n=Rc&&n[Rc]||n["@@iterator"],typeof n=="function"?n:null)}var Se=Object.assign,pa;function Gr(n){if(pa===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);pa=t&&t[1]||""}return`
`+pa+n}var fa=!1;function ma(n,t){if(!n||fa)return"";fa=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var s=d}Reflect.construct(n,[],t)}else{try{t.call()}catch(d){s=d}n.call(t.prototype)}else{try{throw Error()}catch(d){s=d}n()}}catch(d){if(d&&s&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),a=s.stack.split(`
`),l=i.length-1,o=a.length-1;1<=l&&0<=o&&i[l]!==a[o];)o--;for(;1<=l&&0<=o;l--,o--)if(i[l]!==a[o]){if(l!==1||o!==1)do if(l--,o--,0>o||i[l]!==a[o]){var c=`
`+i[l].replace(" at new "," at ");return n.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",n.displayName)),c}while(1<=l&&0<=o);break}}}finally{fa=!1,Error.prepareStackTrace=r}return(n=n?n.displayName||n.name:"")?Gr(n):""}function Af(n){switch(n.tag){case 5:return Gr(n.type);case 16:return Gr("Lazy");case 13:return Gr("Suspense");case 19:return Gr("SuspenseList");case 0:case 2:case 15:return n=ma(n.type,!1),n;case 11:return n=ma(n.type.render,!1),n;case 1:return n=ma(n.type,!0),n;default:return""}}function ll(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Yt:return"Fragment";case Xt:return"Portal";case sl:return"Profiler";case No:return"StrictMode";case il:return"Suspense";case al:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Eu:return(n.displayName||"Context")+".Consumer";case Lu:return(n._context.displayName||"Context")+".Provider";case bo:var t=n.render;return n=n.displayName,n||(n=t.displayName||t.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ko:return t=n.displayName||null,t!==null?t:ll(n.type)||"Memo";case Jn:t=n._payload,n=n._init;try{return ll(n(t))}catch{}}return null}function Ff(n){var t=n.type;switch(n.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=t.render,n=n.displayName||n.name||"",t.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ll(t);case 8:return t===No?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function gt(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ru(n){var t=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Df(n){var t=Ru(n)?"checked":"value",r=Object.getOwnPropertyDescriptor(n.constructor.prototype,t),s=""+n[t];if(!n.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,a=r.set;return Object.defineProperty(n,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){s=""+l,a.call(this,l)}}),Object.defineProperty(n,t,{enumerable:r.enumerable}),{getValue:function(){return s},setValue:function(l){s=""+l},stopTracking:function(){n._valueTracker=null,delete n[t]}}}}function $s(n){n._valueTracker||(n._valueTracker=Df(n))}function Pu(n){if(!n)return!1;var t=n._valueTracker;if(!t)return!0;var r=t.getValue(),s="";return n&&(s=Ru(n)?n.checked?"true":"false":n.value),n=s,n!==r?(t.setValue(n),!0):!1}function yi(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ol(n,t){var r=t.checked;return Se({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??n._wrapperState.initialChecked})}function Pc(n,t){var r=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;r=gt(t.value!=null?t.value:r),n._wrapperState={initialChecked:s,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Iu(n,t){t=t.checked,t!=null&&jo(n,"checked",t,!1)}function cl(n,t){Iu(n,t);var r=gt(t.value),s=t.type;if(r!=null)s==="number"?(r===0&&n.value===""||n.value!=r)&&(n.value=""+r):n.value!==""+r&&(n.value=""+r);else if(s==="submit"||s==="reset"){n.removeAttribute("value");return}t.hasOwnProperty("value")?dl(n,t.type,r):t.hasOwnProperty("defaultValue")&&dl(n,t.type,gt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(n.defaultChecked=!!t.defaultChecked)}function Ic(n,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+n._wrapperState.initialValue,r||t===n.value||(n.value=t),n.defaultValue=t}r=n.name,r!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,r!==""&&(n.name=r)}function dl(n,t,r){(t!=="number"||yi(n.ownerDocument)!==n)&&(r==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+r&&(n.defaultValue=""+r))}var Qr=Array.isArray;function mr(n,t,r,s){if(n=n.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<n.length;r++)i=t.hasOwnProperty("$"+n[r].value),n[r].selected!==i&&(n[r].selected=i),i&&s&&(n[r].defaultSelected=!0)}else{for(r=""+gt(r),t=null,i=0;i<n.length;i++){if(n[i].value===r){n[i].selected=!0,s&&(n[i].defaultSelected=!0);return}t!==null||n[i].disabled||(t=n[i])}t!==null&&(t.selected=!0)}}function ul(n,t){if(t.dangerouslySetInnerHTML!=null)throw Error(W(91));return Se({},t,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function zc(n,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(W(92));if(Qr(r)){if(1<r.length)throw Error(W(93));r=r[0]}t=r}t==null&&(t=""),r=t}n._wrapperState={initialValue:gt(r)}}function zu(n,t){var r=gt(t.value),s=gt(t.defaultValue);r!=null&&(r=""+r,r!==n.value&&(n.value=r),t.defaultValue==null&&n.defaultValue!==r&&(n.defaultValue=r)),s!=null&&(n.defaultValue=""+s)}function Mc(n){var t=n.textContent;t===n._wrapperState.initialValue&&t!==""&&t!==null&&(n.value=t)}function Mu(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hl(n,t){return n==null||n==="http://www.w3.org/1999/xhtml"?Mu(t):n==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Bs,Au=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,s,i){MSApp.execUnsafeLocalFunction(function(){return n(t,r,s,i)})}:n}(function(n,t){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=t;else{for(Bs=Bs||document.createElement("div"),Bs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Bs.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;t.firstChild;)n.appendChild(t.firstChild)}});function ds(n,t){if(t){var r=n.firstChild;if(r&&r===n.lastChild&&r.nodeType===3){r.nodeValue=t;return}}n.textContent=t}var Zr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vf=["Webkit","ms","Moz","O"];Object.keys(Zr).forEach(function(n){Vf.forEach(function(t){t=t+n.charAt(0).toUpperCase()+n.substring(1),Zr[t]=Zr[n]})});function Fu(n,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Zr.hasOwnProperty(n)&&Zr[n]?(""+t).trim():t+"px"}function Du(n,t){n=n.style;for(var r in t)if(t.hasOwnProperty(r)){var s=r.indexOf("--")===0,i=Fu(r,t[r],s);r==="float"&&(r="cssFloat"),s?n.setProperty(r,i):n[r]=i}}var $f=Se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pl(n,t){if(t){if($f[n]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(W(137,n));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(W(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(W(61))}if(t.style!=null&&typeof t.style!="object")throw Error(W(62))}}function fl(n,t){if(n.indexOf("-")===-1)return typeof t.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ml=null;function wo(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var gl=null,gr=null,xr=null;function Ac(n){if(n=Rs(n)){if(typeof gl!="function")throw Error(W(280));var t=n.stateNode;t&&(t=Zi(t),gl(n.stateNode,n.type,t))}}function Vu(n){gr?xr?xr.push(n):xr=[n]:gr=n}function $u(){if(gr){var n=gr,t=xr;if(xr=gr=null,Ac(n),t)for(n=0;n<t.length;n++)Ac(t[n])}}function Bu(n,t){return n(t)}function qu(){}var ga=!1;function Hu(n,t,r){if(ga)return n(t,r);ga=!0;try{return Bu(n,t,r)}finally{ga=!1,(gr!==null||xr!==null)&&(qu(),$u())}}function us(n,t){var r=n.stateNode;if(r===null)return null;var s=Zi(r);if(s===null)return null;r=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(n=n.type,s=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!s;break e;default:n=!1}if(n)return null;if(r&&typeof r!="function")throw Error(W(231,t,typeof r));return r}var xl=!1;if(Un)try{var Dr={};Object.defineProperty(Dr,"passive",{get:function(){xl=!0}}),window.addEventListener("test",Dr,Dr),window.removeEventListener("test",Dr,Dr)}catch{xl=!1}function Bf(n,t,r,s,i,a,l,o,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(r,d)}catch(u){this.onError(u)}}var es=!1,ji=null,Ni=!1,vl=null,qf={onError:function(n){es=!0,ji=n}};function Hf(n,t,r,s,i,a,l,o,c){es=!1,ji=null,Bf.apply(qf,arguments)}function Uf(n,t,r,s,i,a,l,o,c){if(Hf.apply(this,arguments),es){if(es){var d=ji;es=!1,ji=null}else throw Error(W(198));Ni||(Ni=!0,vl=d)}}function Vt(n){var t=n,r=n;if(n.alternate)for(;t.return;)t=t.return;else{n=t;do t=n,t.flags&4098&&(r=t.return),n=t.return;while(n)}return t.tag===3?r:null}function Uu(n){if(n.tag===13){var t=n.memoizedState;if(t===null&&(n=n.alternate,n!==null&&(t=n.memoizedState)),t!==null)return t.dehydrated}return null}function Fc(n){if(Vt(n)!==n)throw Error(W(188))}function Wf(n){var t=n.alternate;if(!t){if(t=Vt(n),t===null)throw Error(W(188));return t!==n?null:n}for(var r=n,s=t;;){var i=r.return;if(i===null)break;var a=i.alternate;if(a===null){if(s=i.return,s!==null){r=s;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===r)return Fc(i),n;if(a===s)return Fc(i),t;a=a.sibling}throw Error(W(188))}if(r.return!==s.return)r=i,s=a;else{for(var l=!1,o=i.child;o;){if(o===r){l=!0,r=i,s=a;break}if(o===s){l=!0,s=i,r=a;break}o=o.sibling}if(!l){for(o=a.child;o;){if(o===r){l=!0,r=a,s=i;break}if(o===s){l=!0,s=a,r=i;break}o=o.sibling}if(!l)throw Error(W(189))}}if(r.alternate!==s)throw Error(W(190))}if(r.tag!==3)throw Error(W(188));return r.stateNode.current===r?n:t}function Wu(n){return n=Wf(n),n!==null?Ku(n):null}function Ku(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var t=Ku(n);if(t!==null)return t;n=n.sibling}return null}var Gu=hn.unstable_scheduleCallback,Dc=hn.unstable_cancelCallback,Kf=hn.unstable_shouldYield,Gf=hn.unstable_requestPaint,Ee=hn.unstable_now,Qf=hn.unstable_getCurrentPriorityLevel,So=hn.unstable_ImmediatePriority,Qu=hn.unstable_UserBlockingPriority,bi=hn.unstable_NormalPriority,Xf=hn.unstable_LowPriority,Xu=hn.unstable_IdlePriority,Qi=null,zn=null;function Yf(n){if(zn&&typeof zn.onCommitFiberRoot=="function")try{zn.onCommitFiberRoot(Qi,n,void 0,(n.current.flags&128)===128)}catch{}}var _n=Math.clz32?Math.clz32:em,Jf=Math.log,Zf=Math.LN2;function em(n){return n>>>=0,n===0?32:31-(Jf(n)/Zf|0)|0}var qs=64,Hs=4194304;function Xr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ki(n,t){var r=n.pendingLanes;if(r===0)return 0;var s=0,i=n.suspendedLanes,a=n.pingedLanes,l=r&268435455;if(l!==0){var o=l&~i;o!==0?s=Xr(o):(a&=l,a!==0&&(s=Xr(a)))}else l=r&~i,l!==0?s=Xr(l):a!==0&&(s=Xr(a));if(s===0)return 0;if(t!==0&&t!==s&&!(t&i)&&(i=s&-s,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(s&4&&(s|=r&16),t=n.entangledLanes,t!==0)for(n=n.entanglements,t&=s;0<t;)r=31-_n(t),i=1<<r,s|=n[r],t&=~i;return s}function nm(n,t){switch(n){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tm(n,t){for(var r=n.suspendedLanes,s=n.pingedLanes,i=n.expirationTimes,a=n.pendingLanes;0<a;){var l=31-_n(a),o=1<<l,c=i[l];c===-1?(!(o&r)||o&s)&&(i[l]=nm(o,t)):c<=t&&(n.expiredLanes|=o),a&=~o}}function yl(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Yu(){var n=qs;return qs<<=1,!(qs&4194240)&&(qs=64),n}function xa(n){for(var t=[],r=0;31>r;r++)t.push(n);return t}function Es(n,t,r){n.pendingLanes|=t,t!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,t=31-_n(t),n[t]=r}function rm(n,t){var r=n.pendingLanes&~t;n.pendingLanes=t,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=t,n.mutableReadLanes&=t,n.entangledLanes&=t,t=n.entanglements;var s=n.eventTimes;for(n=n.expirationTimes;0<r;){var i=31-_n(r),a=1<<i;t[i]=0,s[i]=-1,n[i]=-1,r&=~a}}function Co(n,t){var r=n.entangledLanes|=t;for(n=n.entanglements;r;){var s=31-_n(r),i=1<<s;i&t|n[s]&t&&(n[s]|=t),r&=~i}}var pe=0;function Ju(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Zu,To,eh,nh,th,jl=!1,Us=[],at=null,lt=null,ot=null,hs=new Map,ps=new Map,et=[],sm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vc(n,t){switch(n){case"focusin":case"focusout":at=null;break;case"dragenter":case"dragleave":lt=null;break;case"mouseover":case"mouseout":ot=null;break;case"pointerover":case"pointerout":hs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ps.delete(t.pointerId)}}function Vr(n,t,r,s,i,a){return n===null||n.nativeEvent!==a?(n={blockedOn:t,domEventName:r,eventSystemFlags:s,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Rs(t),t!==null&&To(t)),n):(n.eventSystemFlags|=s,t=n.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),n)}function im(n,t,r,s,i){switch(t){case"focusin":return at=Vr(at,n,t,r,s,i),!0;case"dragenter":return lt=Vr(lt,n,t,r,s,i),!0;case"mouseover":return ot=Vr(ot,n,t,r,s,i),!0;case"pointerover":var a=i.pointerId;return hs.set(a,Vr(hs.get(a)||null,n,t,r,s,i)),!0;case"gotpointercapture":return a=i.pointerId,ps.set(a,Vr(ps.get(a)||null,n,t,r,s,i)),!0}return!1}function rh(n){var t=Tt(n.target);if(t!==null){var r=Vt(t);if(r!==null){if(t=r.tag,t===13){if(t=Uu(r),t!==null){n.blockedOn=t,th(n.priority,function(){eh(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){n.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}n.blockedOn=null}function oi(n){if(n.blockedOn!==null)return!1;for(var t=n.targetContainers;0<t.length;){var r=Nl(n.domEventName,n.eventSystemFlags,t[0],n.nativeEvent);if(r===null){r=n.nativeEvent;var s=new r.constructor(r.type,r);ml=s,r.target.dispatchEvent(s),ml=null}else return t=Rs(r),t!==null&&To(t),n.blockedOn=r,!1;t.shift()}return!0}function $c(n,t,r){oi(n)&&r.delete(t)}function am(){jl=!1,at!==null&&oi(at)&&(at=null),lt!==null&&oi(lt)&&(lt=null),ot!==null&&oi(ot)&&(ot=null),hs.forEach($c),ps.forEach($c)}function $r(n,t){n.blockedOn===t&&(n.blockedOn=null,jl||(jl=!0,hn.unstable_scheduleCallback(hn.unstable_NormalPriority,am)))}function fs(n){function t(i){return $r(i,n)}if(0<Us.length){$r(Us[0],n);for(var r=1;r<Us.length;r++){var s=Us[r];s.blockedOn===n&&(s.blockedOn=null)}}for(at!==null&&$r(at,n),lt!==null&&$r(lt,n),ot!==null&&$r(ot,n),hs.forEach(t),ps.forEach(t),r=0;r<et.length;r++)s=et[r],s.blockedOn===n&&(s.blockedOn=null);for(;0<et.length&&(r=et[0],r.blockedOn===null);)rh(r),r.blockedOn===null&&et.shift()}var vr=Qn.ReactCurrentBatchConfig,wi=!0;function lm(n,t,r,s){var i=pe,a=vr.transition;vr.transition=null;try{pe=1,_o(n,t,r,s)}finally{pe=i,vr.transition=a}}function om(n,t,r,s){var i=pe,a=vr.transition;vr.transition=null;try{pe=4,_o(n,t,r,s)}finally{pe=i,vr.transition=a}}function _o(n,t,r,s){if(wi){var i=Nl(n,t,r,s);if(i===null)Ta(n,t,s,Si,r),Vc(n,s);else if(im(i,n,t,r,s))s.stopPropagation();else if(Vc(n,s),t&4&&-1<sm.indexOf(n)){for(;i!==null;){var a=Rs(i);if(a!==null&&Zu(a),a=Nl(n,t,r,s),a===null&&Ta(n,t,s,Si,r),a===i)break;i=a}i!==null&&s.stopPropagation()}else Ta(n,t,s,null,r)}}var Si=null;function Nl(n,t,r,s){if(Si=null,n=wo(s),n=Tt(n),n!==null)if(t=Vt(n),t===null)n=null;else if(r=t.tag,r===13){if(n=Uu(t),n!==null)return n;n=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;n=null}else t!==n&&(n=null);return Si=n,null}function sh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qf()){case So:return 1;case Qu:return 4;case bi:case Xf:return 16;case Xu:return 536870912;default:return 16}default:return 16}}var tt=null,Lo=null,ci=null;function ih(){if(ci)return ci;var n,t=Lo,r=t.length,s,i="value"in tt?tt.value:tt.textContent,a=i.length;for(n=0;n<r&&t[n]===i[n];n++);var l=r-n;for(s=1;s<=l&&t[r-s]===i[a-s];s++);return ci=i.slice(n,1<s?1-s:void 0)}function di(n){var t=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&t===13&&(n=13)):n=t,n===10&&(n=13),32<=n||n===13?n:0}function Ws(){return!0}function Bc(){return!1}function fn(n){function t(r,s,i,a,l){this._reactName=r,this._targetInst=i,this.type=s,this.nativeEvent=a,this.target=l,this.currentTarget=null;for(var o in n)n.hasOwnProperty(o)&&(r=n[o],this[o]=r?r(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Ws:Bc,this.isPropagationStopped=Bc,this}return Se(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Ws)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Ws)},persist:function(){},isPersistent:Ws}),t}var Er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Eo=fn(Er),Os=Se({},Er,{view:0,detail:0}),cm=fn(Os),va,ya,Br,Xi=Se({},Os,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Oo,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Br&&(Br&&n.type==="mousemove"?(va=n.screenX-Br.screenX,ya=n.screenY-Br.screenY):ya=va=0,Br=n),va)},movementY:function(n){return"movementY"in n?n.movementY:ya}}),qc=fn(Xi),dm=Se({},Xi,{dataTransfer:0}),um=fn(dm),hm=Se({},Os,{relatedTarget:0}),ja=fn(hm),pm=Se({},Er,{animationName:0,elapsedTime:0,pseudoElement:0}),fm=fn(pm),mm=Se({},Er,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),gm=fn(mm),xm=Se({},Er,{data:0}),Hc=fn(xm),vm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ym={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nm(n){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(n):(n=jm[n])?!!t[n]:!1}function Oo(){return Nm}var bm=Se({},Os,{key:function(n){if(n.key){var t=vm[n.key]||n.key;if(t!=="Unidentified")return t}return n.type==="keypress"?(n=di(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?ym[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Oo,charCode:function(n){return n.type==="keypress"?di(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?di(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),km=fn(bm),wm=Se({},Xi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uc=fn(wm),Sm=Se({},Os,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Oo}),Cm=fn(Sm),Tm=Se({},Er,{propertyName:0,elapsedTime:0,pseudoElement:0}),_m=fn(Tm),Lm=Se({},Xi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Em=fn(Lm),Om=[9,13,27,32],Ro=Un&&"CompositionEvent"in window,ns=null;Un&&"documentMode"in document&&(ns=document.documentMode);var Rm=Un&&"TextEvent"in window&&!ns,ah=Un&&(!Ro||ns&&8<ns&&11>=ns),Wc=" ",Kc=!1;function lh(n,t){switch(n){case"keyup":return Om.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function oh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Jt=!1;function Pm(n,t){switch(n){case"compositionend":return oh(t);case"keypress":return t.which!==32?null:(Kc=!0,Wc);case"textInput":return n=t.data,n===Wc&&Kc?null:n;default:return null}}function Im(n,t){if(Jt)return n==="compositionend"||!Ro&&lh(n,t)?(n=ih(),ci=Lo=tt=null,Jt=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ah&&t.locale!=="ko"?null:t.data;default:return null}}var zm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gc(n){var t=n&&n.nodeName&&n.nodeName.toLowerCase();return t==="input"?!!zm[n.type]:t==="textarea"}function ch(n,t,r,s){Vu(s),t=Ci(t,"onChange"),0<t.length&&(r=new Eo("onChange","change",null,r,s),n.push({event:r,listeners:t}))}var ts=null,ms=null;function Mm(n){jh(n,0)}function Yi(n){var t=nr(n);if(Pu(t))return n}function Am(n,t){if(n==="change")return t}var dh=!1;if(Un){var Na;if(Un){var ba="oninput"in document;if(!ba){var Qc=document.createElement("div");Qc.setAttribute("oninput","return;"),ba=typeof Qc.oninput=="function"}Na=ba}else Na=!1;dh=Na&&(!document.documentMode||9<document.documentMode)}function Xc(){ts&&(ts.detachEvent("onpropertychange",uh),ms=ts=null)}function uh(n){if(n.propertyName==="value"&&Yi(ms)){var t=[];ch(t,ms,n,wo(n)),Hu(Mm,t)}}function Fm(n,t,r){n==="focusin"?(Xc(),ts=t,ms=r,ts.attachEvent("onpropertychange",uh)):n==="focusout"&&Xc()}function Dm(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Yi(ms)}function Vm(n,t){if(n==="click")return Yi(t)}function $m(n,t){if(n==="input"||n==="change")return Yi(t)}function Bm(n,t){return n===t&&(n!==0||1/n===1/t)||n!==n&&t!==t}var En=typeof Object.is=="function"?Object.is:Bm;function gs(n,t){if(En(n,t))return!0;if(typeof n!="object"||n===null||typeof t!="object"||t===null)return!1;var r=Object.keys(n),s=Object.keys(t);if(r.length!==s.length)return!1;for(s=0;s<r.length;s++){var i=r[s];if(!rl.call(t,i)||!En(n[i],t[i]))return!1}return!0}function Yc(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Jc(n,t){var r=Yc(n);n=0;for(var s;r;){if(r.nodeType===3){if(s=n+r.textContent.length,n<=t&&s>=t)return{node:r,offset:t-n};n=s}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Yc(r)}}function hh(n,t){return n&&t?n===t?!0:n&&n.nodeType===3?!1:t&&t.nodeType===3?hh(n,t.parentNode):"contains"in n?n.contains(t):n.compareDocumentPosition?!!(n.compareDocumentPosition(t)&16):!1:!1}function ph(){for(var n=window,t=yi();t instanceof n.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)n=t.contentWindow;else break;t=yi(n.document)}return t}function Po(n){var t=n&&n.nodeName&&n.nodeName.toLowerCase();return t&&(t==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||t==="textarea"||n.contentEditable==="true")}function qm(n){var t=ph(),r=n.focusedElem,s=n.selectionRange;if(t!==r&&r&&r.ownerDocument&&hh(r.ownerDocument.documentElement,r)){if(s!==null&&Po(r)){if(t=s.start,n=s.end,n===void 0&&(n=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(n,r.value.length);else if(n=(t=r.ownerDocument||document)&&t.defaultView||window,n.getSelection){n=n.getSelection();var i=r.textContent.length,a=Math.min(s.start,i);s=s.end===void 0?a:Math.min(s.end,i),!n.extend&&a>s&&(i=s,s=a,a=i),i=Jc(r,a);var l=Jc(r,s);i&&l&&(n.rangeCount!==1||n.anchorNode!==i.node||n.anchorOffset!==i.offset||n.focusNode!==l.node||n.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),n.removeAllRanges(),a>s?(n.addRange(t),n.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),n.addRange(t)))}}for(t=[],n=r;n=n.parentNode;)n.nodeType===1&&t.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)n=t[r],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Hm=Un&&"documentMode"in document&&11>=document.documentMode,Zt=null,bl=null,rs=null,kl=!1;function Zc(n,t,r){var s=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;kl||Zt==null||Zt!==yi(s)||(s=Zt,"selectionStart"in s&&Po(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),rs&&gs(rs,s)||(rs=s,s=Ci(bl,"onSelect"),0<s.length&&(t=new Eo("onSelect","select",null,t,r),n.push({event:t,listeners:s}),t.target=Zt)))}function Ks(n,t){var r={};return r[n.toLowerCase()]=t.toLowerCase(),r["Webkit"+n]="webkit"+t,r["Moz"+n]="moz"+t,r}var er={animationend:Ks("Animation","AnimationEnd"),animationiteration:Ks("Animation","AnimationIteration"),animationstart:Ks("Animation","AnimationStart"),transitionend:Ks("Transition","TransitionEnd")},ka={},fh={};Un&&(fh=document.createElement("div").style,"AnimationEvent"in window||(delete er.animationend.animation,delete er.animationiteration.animation,delete er.animationstart.animation),"TransitionEvent"in window||delete er.transitionend.transition);function Ji(n){if(ka[n])return ka[n];if(!er[n])return n;var t=er[n],r;for(r in t)if(t.hasOwnProperty(r)&&r in fh)return ka[n]=t[r];return n}var mh=Ji("animationend"),gh=Ji("animationiteration"),xh=Ji("animationstart"),vh=Ji("transitionend"),yh=new Map,ed="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vt(n,t){yh.set(n,t),Dt(t,[n])}for(var wa=0;wa<ed.length;wa++){var Sa=ed[wa],Um=Sa.toLowerCase(),Wm=Sa[0].toUpperCase()+Sa.slice(1);vt(Um,"on"+Wm)}vt(mh,"onAnimationEnd");vt(gh,"onAnimationIteration");vt(xh,"onAnimationStart");vt("dblclick","onDoubleClick");vt("focusin","onFocus");vt("focusout","onBlur");vt(vh,"onTransitionEnd");br("onMouseEnter",["mouseout","mouseover"]);br("onMouseLeave",["mouseout","mouseover"]);br("onPointerEnter",["pointerout","pointerover"]);br("onPointerLeave",["pointerout","pointerover"]);Dt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Km=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yr));function nd(n,t,r){var s=n.type||"unknown-event";n.currentTarget=r,Uf(s,t,void 0,n),n.currentTarget=null}function jh(n,t){t=(t&4)!==0;for(var r=0;r<n.length;r++){var s=n[r],i=s.event;s=s.listeners;e:{var a=void 0;if(t)for(var l=s.length-1;0<=l;l--){var o=s[l],c=o.instance,d=o.currentTarget;if(o=o.listener,c!==a&&i.isPropagationStopped())break e;nd(i,o,d),a=c}else for(l=0;l<s.length;l++){if(o=s[l],c=o.instance,d=o.currentTarget,o=o.listener,c!==a&&i.isPropagationStopped())break e;nd(i,o,d),a=c}}}if(Ni)throw n=vl,Ni=!1,vl=null,n}function xe(n,t){var r=t[_l];r===void 0&&(r=t[_l]=new Set);var s=n+"__bubble";r.has(s)||(Nh(t,n,2,!1),r.add(s))}function Ca(n,t,r){var s=0;t&&(s|=4),Nh(r,n,s,t)}var Gs="_reactListening"+Math.random().toString(36).slice(2);function xs(n){if(!n[Gs]){n[Gs]=!0,_u.forEach(function(r){r!=="selectionchange"&&(Km.has(r)||Ca(r,!1,n),Ca(r,!0,n))});var t=n.nodeType===9?n:n.ownerDocument;t===null||t[Gs]||(t[Gs]=!0,Ca("selectionchange",!1,t))}}function Nh(n,t,r,s){switch(sh(t)){case 1:var i=lm;break;case 4:i=om;break;default:i=_o}r=i.bind(null,t,r,n),i=void 0,!xl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),s?i!==void 0?n.addEventListener(t,r,{capture:!0,passive:i}):n.addEventListener(t,r,!0):i!==void 0?n.addEventListener(t,r,{passive:i}):n.addEventListener(t,r,!1)}function Ta(n,t,r,s,i){var a=s;if(!(t&1)&&!(t&2)&&s!==null)e:for(;;){if(s===null)return;var l=s.tag;if(l===3||l===4){var o=s.stateNode.containerInfo;if(o===i||o.nodeType===8&&o.parentNode===i)break;if(l===4)for(l=s.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;l=l.return}for(;o!==null;){if(l=Tt(o),l===null)return;if(c=l.tag,c===5||c===6){s=a=l;continue e}o=o.parentNode}}s=s.return}Hu(function(){var d=a,u=wo(r),h=[];e:{var g=yh.get(n);if(g!==void 0){var b=Eo,N=n;switch(n){case"keypress":if(di(r)===0)break e;case"keydown":case"keyup":b=km;break;case"focusin":N="focus",b=ja;break;case"focusout":N="blur",b=ja;break;case"beforeblur":case"afterblur":b=ja;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=qc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=um;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=Cm;break;case mh:case gh:case xh:b=fm;break;case vh:b=_m;break;case"scroll":b=cm;break;case"wheel":b=Em;break;case"copy":case"cut":case"paste":b=gm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Uc}var y=(t&4)!==0,j=!y&&n==="scroll",f=y?g!==null?g+"Capture":null:g;y=[];for(var m=d,x;m!==null;){x=m;var C=x.stateNode;if(x.tag===5&&C!==null&&(x=C,f!==null&&(C=us(m,f),C!=null&&y.push(vs(m,C,x)))),j)break;m=m.return}0<y.length&&(g=new b(g,N,null,r,u),h.push({event:g,listeners:y}))}}if(!(t&7)){e:{if(g=n==="mouseover"||n==="pointerover",b=n==="mouseout"||n==="pointerout",g&&r!==ml&&(N=r.relatedTarget||r.fromElement)&&(Tt(N)||N[Wn]))break e;if((b||g)&&(g=u.window===u?u:(g=u.ownerDocument)?g.defaultView||g.parentWindow:window,b?(N=r.relatedTarget||r.toElement,b=d,N=N?Tt(N):null,N!==null&&(j=Vt(N),N!==j||N.tag!==5&&N.tag!==6)&&(N=null)):(b=null,N=d),b!==N)){if(y=qc,C="onMouseLeave",f="onMouseEnter",m="mouse",(n==="pointerout"||n==="pointerover")&&(y=Uc,C="onPointerLeave",f="onPointerEnter",m="pointer"),j=b==null?g:nr(b),x=N==null?g:nr(N),g=new y(C,m+"leave",b,r,u),g.target=j,g.relatedTarget=x,C=null,Tt(u)===d&&(y=new y(f,m+"enter",N,r,u),y.target=x,y.relatedTarget=j,C=y),j=C,b&&N)n:{for(y=b,f=N,m=0,x=y;x;x=Ht(x))m++;for(x=0,C=f;C;C=Ht(C))x++;for(;0<m-x;)y=Ht(y),m--;for(;0<x-m;)f=Ht(f),x--;for(;m--;){if(y===f||f!==null&&y===f.alternate)break n;y=Ht(y),f=Ht(f)}y=null}else y=null;b!==null&&td(h,g,b,y,!1),N!==null&&j!==null&&td(h,j,N,y,!0)}}e:{if(g=d?nr(d):window,b=g.nodeName&&g.nodeName.toLowerCase(),b==="select"||b==="input"&&g.type==="file")var v=Am;else if(Gc(g))if(dh)v=$m;else{v=Dm;var P=Fm}else(b=g.nodeName)&&b.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(v=Vm);if(v&&(v=v(n,d))){ch(h,v,r,u);break e}P&&P(n,g,d),n==="focusout"&&(P=g._wrapperState)&&P.controlled&&g.type==="number"&&dl(g,"number",g.value)}switch(P=d?nr(d):window,n){case"focusin":(Gc(P)||P.contentEditable==="true")&&(Zt=P,bl=d,rs=null);break;case"focusout":rs=bl=Zt=null;break;case"mousedown":kl=!0;break;case"contextmenu":case"mouseup":case"dragend":kl=!1,Zc(h,r,u);break;case"selectionchange":if(Hm)break;case"keydown":case"keyup":Zc(h,r,u)}var S;if(Ro)e:{switch(n){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else Jt?lh(n,r)&&(D="onCompositionEnd"):n==="keydown"&&r.keyCode===229&&(D="onCompositionStart");D&&(ah&&r.locale!=="ko"&&(Jt||D!=="onCompositionStart"?D==="onCompositionEnd"&&Jt&&(S=ih()):(tt=u,Lo="value"in tt?tt.value:tt.textContent,Jt=!0)),P=Ci(d,D),0<P.length&&(D=new Hc(D,n,null,r,u),h.push({event:D,listeners:P}),S?D.data=S:(S=oh(r),S!==null&&(D.data=S)))),(S=Rm?Pm(n,r):Im(n,r))&&(d=Ci(d,"onBeforeInput"),0<d.length&&(u=new Hc("onBeforeInput","beforeinput",null,r,u),h.push({event:u,listeners:d}),u.data=S))}jh(h,t)})}function vs(n,t,r){return{instance:n,listener:t,currentTarget:r}}function Ci(n,t){for(var r=t+"Capture",s=[];n!==null;){var i=n,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=us(n,r),a!=null&&s.unshift(vs(n,a,i)),a=us(n,t),a!=null&&s.push(vs(n,a,i))),n=n.return}return s}function Ht(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function td(n,t,r,s,i){for(var a=t._reactName,l=[];r!==null&&r!==s;){var o=r,c=o.alternate,d=o.stateNode;if(c!==null&&c===s)break;o.tag===5&&d!==null&&(o=d,i?(c=us(r,a),c!=null&&l.unshift(vs(r,c,o))):i||(c=us(r,a),c!=null&&l.push(vs(r,c,o)))),r=r.return}l.length!==0&&n.push({event:t,listeners:l})}var Gm=/\r\n?/g,Qm=/\u0000|\uFFFD/g;function rd(n){return(typeof n=="string"?n:""+n).replace(Gm,`
`).replace(Qm,"")}function Qs(n,t,r){if(t=rd(t),rd(n)!==t&&r)throw Error(W(425))}function Ti(){}var wl=null,Sl=null;function Cl(n,t){return n==="textarea"||n==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Tl=typeof setTimeout=="function"?setTimeout:void 0,Xm=typeof clearTimeout=="function"?clearTimeout:void 0,sd=typeof Promise=="function"?Promise:void 0,Ym=typeof queueMicrotask=="function"?queueMicrotask:typeof sd<"u"?function(n){return sd.resolve(null).then(n).catch(Jm)}:Tl;function Jm(n){setTimeout(function(){throw n})}function _a(n,t){var r=t,s=0;do{var i=r.nextSibling;if(n.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(s===0){n.removeChild(i),fs(t);return}s--}else r!=="$"&&r!=="$?"&&r!=="$!"||s++;r=i}while(r);fs(t)}function ct(n){for(;n!=null;n=n.nextSibling){var t=n.nodeType;if(t===1||t===3)break;if(t===8){if(t=n.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return n}function id(n){n=n.previousSibling;for(var t=0;n;){if(n.nodeType===8){var r=n.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return n;t--}else r==="/$"&&t++}n=n.previousSibling}return null}var Or=Math.random().toString(36).slice(2),In="__reactFiber$"+Or,ys="__reactProps$"+Or,Wn="__reactContainer$"+Or,_l="__reactEvents$"+Or,Zm="__reactListeners$"+Or,eg="__reactHandles$"+Or;function Tt(n){var t=n[In];if(t)return t;for(var r=n.parentNode;r;){if(t=r[Wn]||r[In]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(n=id(n);n!==null;){if(r=n[In])return r;n=id(n)}return t}n=r,r=n.parentNode}return null}function Rs(n){return n=n[In]||n[Wn],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function nr(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(W(33))}function Zi(n){return n[ys]||null}var Ll=[],tr=-1;function yt(n){return{current:n}}function ve(n){0>tr||(n.current=Ll[tr],Ll[tr]=null,tr--)}function ge(n,t){tr++,Ll[tr]=n.current,n.current=t}var xt={},We=yt(xt),rn=yt(!1),It=xt;function kr(n,t){var r=n.type.contextTypes;if(!r)return xt;var s=n.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in r)i[a]=t[a];return s&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=t,n.__reactInternalMemoizedMaskedChildContext=i),i}function sn(n){return n=n.childContextTypes,n!=null}function _i(){ve(rn),ve(We)}function ad(n,t,r){if(We.current!==xt)throw Error(W(168));ge(We,t),ge(rn,r)}function bh(n,t,r){var s=n.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return r;s=s.getChildContext();for(var i in s)if(!(i in t))throw Error(W(108,Ff(n)||"Unknown",i));return Se({},r,s)}function Li(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||xt,It=We.current,ge(We,n),ge(rn,rn.current),!0}function ld(n,t,r){var s=n.stateNode;if(!s)throw Error(W(169));r?(n=bh(n,t,It),s.__reactInternalMemoizedMergedChildContext=n,ve(rn),ve(We),ge(We,n)):ve(rn),ge(rn,r)}var Dn=null,ea=!1,La=!1;function kh(n){Dn===null?Dn=[n]:Dn.push(n)}function ng(n){ea=!0,kh(n)}function jt(){if(!La&&Dn!==null){La=!0;var n=0,t=pe;try{var r=Dn;for(pe=1;n<r.length;n++){var s=r[n];do s=s(!0);while(s!==null)}Dn=null,ea=!1}catch(i){throw Dn!==null&&(Dn=Dn.slice(n+1)),Gu(So,jt),i}finally{pe=t,La=!1}}return null}var rr=[],sr=0,Ei=null,Oi=0,gn=[],xn=0,zt=null,$n=1,Bn="";function wt(n,t){rr[sr++]=Oi,rr[sr++]=Ei,Ei=n,Oi=t}function wh(n,t,r){gn[xn++]=$n,gn[xn++]=Bn,gn[xn++]=zt,zt=n;var s=$n;n=Bn;var i=32-_n(s)-1;s&=~(1<<i),r+=1;var a=32-_n(t)+i;if(30<a){var l=i-i%5;a=(s&(1<<l)-1).toString(32),s>>=l,i-=l,$n=1<<32-_n(t)+i|r<<i|s,Bn=a+n}else $n=1<<a|r<<i|s,Bn=n}function Io(n){n.return!==null&&(wt(n,1),wh(n,1,0))}function zo(n){for(;n===Ei;)Ei=rr[--sr],rr[sr]=null,Oi=rr[--sr],rr[sr]=null;for(;n===zt;)zt=gn[--xn],gn[xn]=null,Bn=gn[--xn],gn[xn]=null,$n=gn[--xn],gn[xn]=null}var un=null,dn=null,Ne=!1,Tn=null;function Sh(n,t){var r=vn(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=n,t=n.deletions,t===null?(n.deletions=[r],n.flags|=16):t.push(r)}function od(n,t){switch(n.tag){case 5:var r=n.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(n.stateNode=t,un=n,dn=ct(t.firstChild),!0):!1;case 6:return t=n.pendingProps===""||t.nodeType!==3?null:t,t!==null?(n.stateNode=t,un=n,dn=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=zt!==null?{id:$n,overflow:Bn}:null,n.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=vn(18,null,null,0),r.stateNode=t,r.return=n,n.child=r,un=n,dn=null,!0):!1;default:return!1}}function El(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Ol(n){if(Ne){var t=dn;if(t){var r=t;if(!od(n,t)){if(El(n))throw Error(W(418));t=ct(r.nextSibling);var s=un;t&&od(n,t)?Sh(s,r):(n.flags=n.flags&-4097|2,Ne=!1,un=n)}}else{if(El(n))throw Error(W(418));n.flags=n.flags&-4097|2,Ne=!1,un=n}}}function cd(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;un=n}function Xs(n){if(n!==un)return!1;if(!Ne)return cd(n),Ne=!0,!1;var t;if((t=n.tag!==3)&&!(t=n.tag!==5)&&(t=n.type,t=t!=="head"&&t!=="body"&&!Cl(n.type,n.memoizedProps)),t&&(t=dn)){if(El(n))throw Ch(),Error(W(418));for(;t;)Sh(n,t),t=ct(t.nextSibling)}if(cd(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(W(317));e:{for(n=n.nextSibling,t=0;n;){if(n.nodeType===8){var r=n.data;if(r==="/$"){if(t===0){dn=ct(n.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}n=n.nextSibling}dn=null}}else dn=un?ct(n.stateNode.nextSibling):null;return!0}function Ch(){for(var n=dn;n;)n=ct(n.nextSibling)}function wr(){dn=un=null,Ne=!1}function Mo(n){Tn===null?Tn=[n]:Tn.push(n)}var tg=Qn.ReactCurrentBatchConfig;function qr(n,t,r){if(n=r.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(W(309));var s=r.stateNode}if(!s)throw Error(W(147,n));var i=s,a=""+n;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(l){var o=i.refs;l===null?delete o[a]:o[a]=l},t._stringRef=a,t)}if(typeof n!="string")throw Error(W(284));if(!r._owner)throw Error(W(290,n))}return n}function Ys(n,t){throw n=Object.prototype.toString.call(t),Error(W(31,n==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":n))}function dd(n){var t=n._init;return t(n._payload)}function Th(n){function t(f,m){if(n){var x=f.deletions;x===null?(f.deletions=[m],f.flags|=16):x.push(m)}}function r(f,m){if(!n)return null;for(;m!==null;)t(f,m),m=m.sibling;return null}function s(f,m){for(f=new Map;m!==null;)m.key!==null?f.set(m.key,m):f.set(m.index,m),m=m.sibling;return f}function i(f,m){return f=pt(f,m),f.index=0,f.sibling=null,f}function a(f,m,x){return f.index=x,n?(x=f.alternate,x!==null?(x=x.index,x<m?(f.flags|=2,m):x):(f.flags|=2,m)):(f.flags|=1048576,m)}function l(f){return n&&f.alternate===null&&(f.flags|=2),f}function o(f,m,x,C){return m===null||m.tag!==6?(m=Ma(x,f.mode,C),m.return=f,m):(m=i(m,x),m.return=f,m)}function c(f,m,x,C){var v=x.type;return v===Yt?u(f,m,x.props.children,C,x.key):m!==null&&(m.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===Jn&&dd(v)===m.type)?(C=i(m,x.props),C.ref=qr(f,m,x),C.return=f,C):(C=xi(x.type,x.key,x.props,null,f.mode,C),C.ref=qr(f,m,x),C.return=f,C)}function d(f,m,x,C){return m===null||m.tag!==4||m.stateNode.containerInfo!==x.containerInfo||m.stateNode.implementation!==x.implementation?(m=Aa(x,f.mode,C),m.return=f,m):(m=i(m,x.children||[]),m.return=f,m)}function u(f,m,x,C,v){return m===null||m.tag!==7?(m=Pt(x,f.mode,C,v),m.return=f,m):(m=i(m,x),m.return=f,m)}function h(f,m,x){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Ma(""+m,f.mode,x),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Vs:return x=xi(m.type,m.key,m.props,null,f.mode,x),x.ref=qr(f,null,m),x.return=f,x;case Xt:return m=Aa(m,f.mode,x),m.return=f,m;case Jn:var C=m._init;return h(f,C(m._payload),x)}if(Qr(m)||Fr(m))return m=Pt(m,f.mode,x,null),m.return=f,m;Ys(f,m)}return null}function g(f,m,x,C){var v=m!==null?m.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return v!==null?null:o(f,m,""+x,C);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Vs:return x.key===v?c(f,m,x,C):null;case Xt:return x.key===v?d(f,m,x,C):null;case Jn:return v=x._init,g(f,m,v(x._payload),C)}if(Qr(x)||Fr(x))return v!==null?null:u(f,m,x,C,null);Ys(f,x)}return null}function b(f,m,x,C,v){if(typeof C=="string"&&C!==""||typeof C=="number")return f=f.get(x)||null,o(m,f,""+C,v);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Vs:return f=f.get(C.key===null?x:C.key)||null,c(m,f,C,v);case Xt:return f=f.get(C.key===null?x:C.key)||null,d(m,f,C,v);case Jn:var P=C._init;return b(f,m,x,P(C._payload),v)}if(Qr(C)||Fr(C))return f=f.get(x)||null,u(m,f,C,v,null);Ys(m,C)}return null}function N(f,m,x,C){for(var v=null,P=null,S=m,D=m=0,M=null;S!==null&&D<x.length;D++){S.index>D?(M=S,S=null):M=S.sibling;var E=g(f,S,x[D],C);if(E===null){S===null&&(S=M);break}n&&S&&E.alternate===null&&t(f,S),m=a(E,m,D),P===null?v=E:P.sibling=E,P=E,S=M}if(D===x.length)return r(f,S),Ne&&wt(f,D),v;if(S===null){for(;D<x.length;D++)S=h(f,x[D],C),S!==null&&(m=a(S,m,D),P===null?v=S:P.sibling=S,P=S);return Ne&&wt(f,D),v}for(S=s(f,S);D<x.length;D++)M=b(S,f,D,x[D],C),M!==null&&(n&&M.alternate!==null&&S.delete(M.key===null?D:M.key),m=a(M,m,D),P===null?v=M:P.sibling=M,P=M);return n&&S.forEach(function(q){return t(f,q)}),Ne&&wt(f,D),v}function y(f,m,x,C){var v=Fr(x);if(typeof v!="function")throw Error(W(150));if(x=v.call(x),x==null)throw Error(W(151));for(var P=v=null,S=m,D=m=0,M=null,E=x.next();S!==null&&!E.done;D++,E=x.next()){S.index>D?(M=S,S=null):M=S.sibling;var q=g(f,S,E.value,C);if(q===null){S===null&&(S=M);break}n&&S&&q.alternate===null&&t(f,S),m=a(q,m,D),P===null?v=q:P.sibling=q,P=q,S=M}if(E.done)return r(f,S),Ne&&wt(f,D),v;if(S===null){for(;!E.done;D++,E=x.next())E=h(f,E.value,C),E!==null&&(m=a(E,m,D),P===null?v=E:P.sibling=E,P=E);return Ne&&wt(f,D),v}for(S=s(f,S);!E.done;D++,E=x.next())E=b(S,f,D,E.value,C),E!==null&&(n&&E.alternate!==null&&S.delete(E.key===null?D:E.key),m=a(E,m,D),P===null?v=E:P.sibling=E,P=E);return n&&S.forEach(function(K){return t(f,K)}),Ne&&wt(f,D),v}function j(f,m,x,C){if(typeof x=="object"&&x!==null&&x.type===Yt&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Vs:e:{for(var v=x.key,P=m;P!==null;){if(P.key===v){if(v=x.type,v===Yt){if(P.tag===7){r(f,P.sibling),m=i(P,x.props.children),m.return=f,f=m;break e}}else if(P.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===Jn&&dd(v)===P.type){r(f,P.sibling),m=i(P,x.props),m.ref=qr(f,P,x),m.return=f,f=m;break e}r(f,P);break}else t(f,P);P=P.sibling}x.type===Yt?(m=Pt(x.props.children,f.mode,C,x.key),m.return=f,f=m):(C=xi(x.type,x.key,x.props,null,f.mode,C),C.ref=qr(f,m,x),C.return=f,f=C)}return l(f);case Xt:e:{for(P=x.key;m!==null;){if(m.key===P)if(m.tag===4&&m.stateNode.containerInfo===x.containerInfo&&m.stateNode.implementation===x.implementation){r(f,m.sibling),m=i(m,x.children||[]),m.return=f,f=m;break e}else{r(f,m);break}else t(f,m);m=m.sibling}m=Aa(x,f.mode,C),m.return=f,f=m}return l(f);case Jn:return P=x._init,j(f,m,P(x._payload),C)}if(Qr(x))return N(f,m,x,C);if(Fr(x))return y(f,m,x,C);Ys(f,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,m!==null&&m.tag===6?(r(f,m.sibling),m=i(m,x),m.return=f,f=m):(r(f,m),m=Ma(x,f.mode,C),m.return=f,f=m),l(f)):r(f,m)}return j}var Sr=Th(!0),_h=Th(!1),Ri=yt(null),Pi=null,ir=null,Ao=null;function Fo(){Ao=ir=Pi=null}function Do(n){var t=Ri.current;ve(Ri),n._currentValue=t}function Rl(n,t,r){for(;n!==null;){var s=n.alternate;if((n.childLanes&t)!==t?(n.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),n===r)break;n=n.return}}function yr(n,t){Pi=n,Ao=ir=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&t&&(tn=!0),n.firstContext=null)}function jn(n){var t=n._currentValue;if(Ao!==n)if(n={context:n,memoizedValue:t,next:null},ir===null){if(Pi===null)throw Error(W(308));ir=n,Pi.dependencies={lanes:0,firstContext:n}}else ir=ir.next=n;return t}var _t=null;function Vo(n){_t===null?_t=[n]:_t.push(n)}function Lh(n,t,r,s){var i=t.interleaved;return i===null?(r.next=r,Vo(t)):(r.next=i.next,i.next=r),t.interleaved=r,Kn(n,s)}function Kn(n,t){n.lanes|=t;var r=n.alternate;for(r!==null&&(r.lanes|=t),r=n,n=n.return;n!==null;)n.childLanes|=t,r=n.alternate,r!==null&&(r.childLanes|=t),r=n,n=n.return;return r.tag===3?r.stateNode:null}var Zn=!1;function $o(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Eh(n,t){n=n.updateQueue,t.updateQueue===n&&(t.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function qn(n,t){return{eventTime:n,lane:t,tag:0,payload:null,callback:null,next:null}}function dt(n,t,r){var s=n.updateQueue;if(s===null)return null;if(s=s.shared,oe&2){var i=s.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),s.pending=t,Kn(n,r)}return i=s.interleaved,i===null?(t.next=t,Vo(s)):(t.next=i.next,i.next=t),s.interleaved=t,Kn(n,r)}function ui(n,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var s=t.lanes;s&=n.pendingLanes,r|=s,t.lanes=r,Co(n,r)}}function ud(n,t){var r=n.updateQueue,s=n.alternate;if(s!==null&&(s=s.updateQueue,r===s)){var i=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var l={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?i=a=l:a=a.next=l,r=r.next}while(r!==null);a===null?i=a=t:a=a.next=t}else i=a=t;r={baseState:s.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:s.shared,effects:s.effects},n.updateQueue=r;return}n=r.lastBaseUpdate,n===null?r.firstBaseUpdate=t:n.next=t,r.lastBaseUpdate=t}function Ii(n,t,r,s){var i=n.updateQueue;Zn=!1;var a=i.firstBaseUpdate,l=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var c=o,d=c.next;c.next=null,l===null?a=d:l.next=d,l=c;var u=n.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==l&&(o===null?u.firstBaseUpdate=d:o.next=d,u.lastBaseUpdate=c))}if(a!==null){var h=i.baseState;l=0,u=d=c=null,o=a;do{var g=o.lane,b=o.eventTime;if((s&g)===g){u!==null&&(u=u.next={eventTime:b,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var N=n,y=o;switch(g=t,b=r,y.tag){case 1:if(N=y.payload,typeof N=="function"){h=N.call(b,h,g);break e}h=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=y.payload,g=typeof N=="function"?N.call(b,h,g):N,g==null)break e;h=Se({},h,g);break e;case 2:Zn=!0}}o.callback!==null&&o.lane!==0&&(n.flags|=64,g=i.effects,g===null?i.effects=[o]:g.push(o))}else b={eventTime:b,lane:g,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(d=u=b,c=h):u=u.next=b,l|=g;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;g=o,o=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(u===null&&(c=h),i.baseState=c,i.firstBaseUpdate=d,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);At|=l,n.lanes=l,n.memoizedState=h}}function hd(n,t,r){if(n=t.effects,t.effects=null,n!==null)for(t=0;t<n.length;t++){var s=n[t],i=s.callback;if(i!==null){if(s.callback=null,s=r,typeof i!="function")throw Error(W(191,i));i.call(s)}}}var Ps={},Mn=yt(Ps),js=yt(Ps),Ns=yt(Ps);function Lt(n){if(n===Ps)throw Error(W(174));return n}function Bo(n,t){switch(ge(Ns,t),ge(js,n),ge(Mn,Ps),n=t.nodeType,n){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:hl(null,"");break;default:n=n===8?t.parentNode:t,t=n.namespaceURI||null,n=n.tagName,t=hl(t,n)}ve(Mn),ge(Mn,t)}function Cr(){ve(Mn),ve(js),ve(Ns)}function Oh(n){Lt(Ns.current);var t=Lt(Mn.current),r=hl(t,n.type);t!==r&&(ge(js,n),ge(Mn,r))}function qo(n){js.current===n&&(ve(Mn),ve(js))}var ke=yt(0);function zi(n){for(var t=n;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ea=[];function Ho(){for(var n=0;n<Ea.length;n++)Ea[n]._workInProgressVersionPrimary=null;Ea.length=0}var hi=Qn.ReactCurrentDispatcher,Oa=Qn.ReactCurrentBatchConfig,Mt=0,we=null,Pe=null,Me=null,Mi=!1,ss=!1,bs=0,rg=0;function qe(){throw Error(W(321))}function Uo(n,t){if(t===null)return!1;for(var r=0;r<t.length&&r<n.length;r++)if(!En(n[r],t[r]))return!1;return!0}function Wo(n,t,r,s,i,a){if(Mt=a,we=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,hi.current=n===null||n.memoizedState===null?lg:og,n=r(s,i),ss){a=0;do{if(ss=!1,bs=0,25<=a)throw Error(W(301));a+=1,Me=Pe=null,t.updateQueue=null,hi.current=cg,n=r(s,i)}while(ss)}if(hi.current=Ai,t=Pe!==null&&Pe.next!==null,Mt=0,Me=Pe=we=null,Mi=!1,t)throw Error(W(300));return n}function Ko(){var n=bs!==0;return bs=0,n}function Pn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?we.memoizedState=Me=n:Me=Me.next=n,Me}function Nn(){if(Pe===null){var n=we.alternate;n=n!==null?n.memoizedState:null}else n=Pe.next;var t=Me===null?we.memoizedState:Me.next;if(t!==null)Me=t,Pe=n;else{if(n===null)throw Error(W(310));Pe=n,n={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},Me===null?we.memoizedState=Me=n:Me=Me.next=n}return Me}function ks(n,t){return typeof t=="function"?t(n):t}function Ra(n){var t=Nn(),r=t.queue;if(r===null)throw Error(W(311));r.lastRenderedReducer=n;var s=Pe,i=s.baseQueue,a=r.pending;if(a!==null){if(i!==null){var l=i.next;i.next=a.next,a.next=l}s.baseQueue=i=a,r.pending=null}if(i!==null){a=i.next,s=s.baseState;var o=l=null,c=null,d=a;do{var u=d.lane;if((Mt&u)===u)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),s=d.hasEagerState?d.eagerState:n(s,d.action);else{var h={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(o=c=h,l=s):c=c.next=h,we.lanes|=u,At|=u}d=d.next}while(d!==null&&d!==a);c===null?l=s:c.next=o,En(s,t.memoizedState)||(tn=!0),t.memoizedState=s,t.baseState=l,t.baseQueue=c,r.lastRenderedState=s}if(n=r.interleaved,n!==null){i=n;do a=i.lane,we.lanes|=a,At|=a,i=i.next;while(i!==n)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Pa(n){var t=Nn(),r=t.queue;if(r===null)throw Error(W(311));r.lastRenderedReducer=n;var s=r.dispatch,i=r.pending,a=t.memoizedState;if(i!==null){r.pending=null;var l=i=i.next;do a=n(a,l.action),l=l.next;while(l!==i);En(a,t.memoizedState)||(tn=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),r.lastRenderedState=a}return[a,s]}function Rh(){}function Ph(n,t){var r=we,s=Nn(),i=t(),a=!En(s.memoizedState,i);if(a&&(s.memoizedState=i,tn=!0),s=s.queue,Go(Mh.bind(null,r,s,n),[n]),s.getSnapshot!==t||a||Me!==null&&Me.memoizedState.tag&1){if(r.flags|=2048,ws(9,zh.bind(null,r,s,i,t),void 0,null),Ae===null)throw Error(W(349));Mt&30||Ih(r,t,i)}return i}function Ih(n,t,r){n.flags|=16384,n={getSnapshot:t,value:r},t=we.updateQueue,t===null?(t={lastEffect:null,stores:null},we.updateQueue=t,t.stores=[n]):(r=t.stores,r===null?t.stores=[n]:r.push(n))}function zh(n,t,r,s){t.value=r,t.getSnapshot=s,Ah(t)&&Fh(n)}function Mh(n,t,r){return r(function(){Ah(t)&&Fh(n)})}function Ah(n){var t=n.getSnapshot;n=n.value;try{var r=t();return!En(n,r)}catch{return!0}}function Fh(n){var t=Kn(n,1);t!==null&&Ln(t,n,1,-1)}function pd(n){var t=Pn();return typeof n=="function"&&(n=n()),t.memoizedState=t.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ks,lastRenderedState:n},t.queue=n,n=n.dispatch=ag.bind(null,we,n),[t.memoizedState,n]}function ws(n,t,r,s){return n={tag:n,create:t,destroy:r,deps:s,next:null},t=we.updateQueue,t===null?(t={lastEffect:null,stores:null},we.updateQueue=t,t.lastEffect=n.next=n):(r=t.lastEffect,r===null?t.lastEffect=n.next=n:(s=r.next,r.next=n,n.next=s,t.lastEffect=n)),n}function Dh(){return Nn().memoizedState}function pi(n,t,r,s){var i=Pn();we.flags|=n,i.memoizedState=ws(1|t,r,void 0,s===void 0?null:s)}function na(n,t,r,s){var i=Nn();s=s===void 0?null:s;var a=void 0;if(Pe!==null){var l=Pe.memoizedState;if(a=l.destroy,s!==null&&Uo(s,l.deps)){i.memoizedState=ws(t,r,a,s);return}}we.flags|=n,i.memoizedState=ws(1|t,r,a,s)}function fd(n,t){return pi(8390656,8,n,t)}function Go(n,t){return na(2048,8,n,t)}function Vh(n,t){return na(4,2,n,t)}function $h(n,t){return na(4,4,n,t)}function Bh(n,t){if(typeof t=="function")return n=n(),t(n),function(){t(null)};if(t!=null)return n=n(),t.current=n,function(){t.current=null}}function qh(n,t,r){return r=r!=null?r.concat([n]):null,na(4,4,Bh.bind(null,t,n),r)}function Qo(){}function Hh(n,t){var r=Nn();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&Uo(t,s[1])?s[0]:(r.memoizedState=[n,t],n)}function Uh(n,t){var r=Nn();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&Uo(t,s[1])?s[0]:(n=n(),r.memoizedState=[n,t],n)}function Wh(n,t,r){return Mt&21?(En(r,t)||(r=Yu(),we.lanes|=r,At|=r,n.baseState=!0),t):(n.baseState&&(n.baseState=!1,tn=!0),n.memoizedState=r)}function sg(n,t){var r=pe;pe=r!==0&&4>r?r:4,n(!0);var s=Oa.transition;Oa.transition={};try{n(!1),t()}finally{pe=r,Oa.transition=s}}function Kh(){return Nn().memoizedState}function ig(n,t,r){var s=ht(n);if(r={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null},Gh(n))Qh(t,r);else if(r=Lh(n,t,r,s),r!==null){var i=Ye();Ln(r,n,s,i),Xh(r,t,s)}}function ag(n,t,r){var s=ht(n),i={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null};if(Gh(n))Qh(t,i);else{var a=n.alternate;if(n.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var l=t.lastRenderedState,o=a(l,r);if(i.hasEagerState=!0,i.eagerState=o,En(o,l)){var c=t.interleaved;c===null?(i.next=i,Vo(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}r=Lh(n,t,i,s),r!==null&&(i=Ye(),Ln(r,n,s,i),Xh(r,t,s))}}function Gh(n){var t=n.alternate;return n===we||t!==null&&t===we}function Qh(n,t){ss=Mi=!0;var r=n.pending;r===null?t.next=t:(t.next=r.next,r.next=t),n.pending=t}function Xh(n,t,r){if(r&4194240){var s=t.lanes;s&=n.pendingLanes,r|=s,t.lanes=r,Co(n,r)}}var Ai={readContext:jn,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useInsertionEffect:qe,useLayoutEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useMutableSource:qe,useSyncExternalStore:qe,useId:qe,unstable_isNewReconciler:!1},lg={readContext:jn,useCallback:function(n,t){return Pn().memoizedState=[n,t===void 0?null:t],n},useContext:jn,useEffect:fd,useImperativeHandle:function(n,t,r){return r=r!=null?r.concat([n]):null,pi(4194308,4,Bh.bind(null,t,n),r)},useLayoutEffect:function(n,t){return pi(4194308,4,n,t)},useInsertionEffect:function(n,t){return pi(4,2,n,t)},useMemo:function(n,t){var r=Pn();return t=t===void 0?null:t,n=n(),r.memoizedState=[n,t],n},useReducer:function(n,t,r){var s=Pn();return t=r!==void 0?r(t):t,s.memoizedState=s.baseState=t,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:t},s.queue=n,n=n.dispatch=ig.bind(null,we,n),[s.memoizedState,n]},useRef:function(n){var t=Pn();return n={current:n},t.memoizedState=n},useState:pd,useDebugValue:Qo,useDeferredValue:function(n){return Pn().memoizedState=n},useTransition:function(){var n=pd(!1),t=n[0];return n=sg.bind(null,n[1]),Pn().memoizedState=n,[t,n]},useMutableSource:function(){},useSyncExternalStore:function(n,t,r){var s=we,i=Pn();if(Ne){if(r===void 0)throw Error(W(407));r=r()}else{if(r=t(),Ae===null)throw Error(W(349));Mt&30||Ih(s,t,r)}i.memoizedState=r;var a={value:r,getSnapshot:t};return i.queue=a,fd(Mh.bind(null,s,a,n),[n]),s.flags|=2048,ws(9,zh.bind(null,s,a,r,t),void 0,null),r},useId:function(){var n=Pn(),t=Ae.identifierPrefix;if(Ne){var r=Bn,s=$n;r=(s&~(1<<32-_n(s)-1)).toString(32)+r,t=":"+t+"R"+r,r=bs++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=rg++,t=":"+t+"r"+r.toString(32)+":";return n.memoizedState=t},unstable_isNewReconciler:!1},og={readContext:jn,useCallback:Hh,useContext:jn,useEffect:Go,useImperativeHandle:qh,useInsertionEffect:Vh,useLayoutEffect:$h,useMemo:Uh,useReducer:Ra,useRef:Dh,useState:function(){return Ra(ks)},useDebugValue:Qo,useDeferredValue:function(n){var t=Nn();return Wh(t,Pe.memoizedState,n)},useTransition:function(){var n=Ra(ks)[0],t=Nn().memoizedState;return[n,t]},useMutableSource:Rh,useSyncExternalStore:Ph,useId:Kh,unstable_isNewReconciler:!1},cg={readContext:jn,useCallback:Hh,useContext:jn,useEffect:Go,useImperativeHandle:qh,useInsertionEffect:Vh,useLayoutEffect:$h,useMemo:Uh,useReducer:Pa,useRef:Dh,useState:function(){return Pa(ks)},useDebugValue:Qo,useDeferredValue:function(n){var t=Nn();return Pe===null?t.memoizedState=n:Wh(t,Pe.memoizedState,n)},useTransition:function(){var n=Pa(ks)[0],t=Nn().memoizedState;return[n,t]},useMutableSource:Rh,useSyncExternalStore:Ph,useId:Kh,unstable_isNewReconciler:!1};function Sn(n,t){if(n&&n.defaultProps){t=Se({},t),n=n.defaultProps;for(var r in n)t[r]===void 0&&(t[r]=n[r]);return t}return t}function Pl(n,t,r,s){t=n.memoizedState,r=r(s,t),r=r==null?t:Se({},t,r),n.memoizedState=r,n.lanes===0&&(n.updateQueue.baseState=r)}var ta={isMounted:function(n){return(n=n._reactInternals)?Vt(n)===n:!1},enqueueSetState:function(n,t,r){n=n._reactInternals;var s=Ye(),i=ht(n),a=qn(s,i);a.payload=t,r!=null&&(a.callback=r),t=dt(n,a,i),t!==null&&(Ln(t,n,i,s),ui(t,n,i))},enqueueReplaceState:function(n,t,r){n=n._reactInternals;var s=Ye(),i=ht(n),a=qn(s,i);a.tag=1,a.payload=t,r!=null&&(a.callback=r),t=dt(n,a,i),t!==null&&(Ln(t,n,i,s),ui(t,n,i))},enqueueForceUpdate:function(n,t){n=n._reactInternals;var r=Ye(),s=ht(n),i=qn(r,s);i.tag=2,t!=null&&(i.callback=t),t=dt(n,i,s),t!==null&&(Ln(t,n,s,r),ui(t,n,s))}};function md(n,t,r,s,i,a,l){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(s,a,l):t.prototype&&t.prototype.isPureReactComponent?!gs(r,s)||!gs(i,a):!0}function Yh(n,t,r){var s=!1,i=xt,a=t.contextType;return typeof a=="object"&&a!==null?a=jn(a):(i=sn(t)?It:We.current,s=t.contextTypes,a=(s=s!=null)?kr(n,i):xt),t=new t(r,a),n.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ta,n.stateNode=t,t._reactInternals=n,s&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=a),t}function gd(n,t,r,s){n=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,s),t.state!==n&&ta.enqueueReplaceState(t,t.state,null)}function Il(n,t,r,s){var i=n.stateNode;i.props=r,i.state=n.memoizedState,i.refs={},$o(n);var a=t.contextType;typeof a=="object"&&a!==null?i.context=jn(a):(a=sn(t)?It:We.current,i.context=kr(n,a)),i.state=n.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Pl(n,t,a,r),i.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ta.enqueueReplaceState(i,i.state,null),Ii(n,r,i,s),i.state=n.memoizedState),typeof i.componentDidMount=="function"&&(n.flags|=4194308)}function Tr(n,t){try{var r="",s=t;do r+=Af(s),s=s.return;while(s);var i=r}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:n,source:t,stack:i,digest:null}}function Ia(n,t,r){return{value:n,source:null,stack:r??null,digest:t??null}}function zl(n,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var dg=typeof WeakMap=="function"?WeakMap:Map;function Jh(n,t,r){r=qn(-1,r),r.tag=3,r.payload={element:null};var s=t.value;return r.callback=function(){Di||(Di=!0,Ul=s),zl(n,t)},r}function Zh(n,t,r){r=qn(-1,r),r.tag=3;var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var i=t.value;r.payload=function(){return s(i)},r.callback=function(){zl(n,t)}}var a=n.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){zl(n,t),typeof s!="function"&&(ut===null?ut=new Set([this]):ut.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),r}function xd(n,t,r){var s=n.pingCache;if(s===null){s=n.pingCache=new dg;var i=new Set;s.set(t,i)}else i=s.get(t),i===void 0&&(i=new Set,s.set(t,i));i.has(r)||(i.add(r),n=wg.bind(null,n,t,r),t.then(n,n))}function vd(n){do{var t;if((t=n.tag===13)&&(t=n.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return n;n=n.return}while(n!==null);return null}function yd(n,t,r,s,i){return n.mode&1?(n.flags|=65536,n.lanes=i,n):(n===t?n.flags|=65536:(n.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=qn(-1,1),t.tag=2,dt(r,t,1))),r.lanes|=1),n)}var ug=Qn.ReactCurrentOwner,tn=!1;function Qe(n,t,r,s){t.child=n===null?_h(t,null,r,s):Sr(t,n.child,r,s)}function jd(n,t,r,s,i){r=r.render;var a=t.ref;return yr(t,i),s=Wo(n,t,r,s,a,i),r=Ko(),n!==null&&!tn?(t.updateQueue=n.updateQueue,t.flags&=-2053,n.lanes&=~i,Gn(n,t,i)):(Ne&&r&&Io(t),t.flags|=1,Qe(n,t,s,i),t.child)}function Nd(n,t,r,s,i){if(n===null){var a=r.type;return typeof a=="function"&&!rc(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=a,ep(n,t,a,s,i)):(n=xi(r.type,null,s,t,t.mode,i),n.ref=t.ref,n.return=t,t.child=n)}if(a=n.child,!(n.lanes&i)){var l=a.memoizedProps;if(r=r.compare,r=r!==null?r:gs,r(l,s)&&n.ref===t.ref)return Gn(n,t,i)}return t.flags|=1,n=pt(a,s),n.ref=t.ref,n.return=t,t.child=n}function ep(n,t,r,s,i){if(n!==null){var a=n.memoizedProps;if(gs(a,s)&&n.ref===t.ref)if(tn=!1,t.pendingProps=s=a,(n.lanes&i)!==0)n.flags&131072&&(tn=!0);else return t.lanes=n.lanes,Gn(n,t,i)}return Ml(n,t,r,s,i)}function np(n,t,r){var s=t.pendingProps,i=s.children,a=n!==null?n.memoizedState:null;if(s.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(lr,on),on|=r;else{if(!(r&1073741824))return n=a!==null?a.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:n,cachePool:null,transitions:null},t.updateQueue=null,ge(lr,on),on|=n,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=a!==null?a.baseLanes:r,ge(lr,on),on|=s}else a!==null?(s=a.baseLanes|r,t.memoizedState=null):s=r,ge(lr,on),on|=s;return Qe(n,t,i,r),t.child}function tp(n,t){var r=t.ref;(n===null&&r!==null||n!==null&&n.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Ml(n,t,r,s,i){var a=sn(r)?It:We.current;return a=kr(t,a),yr(t,i),r=Wo(n,t,r,s,a,i),s=Ko(),n!==null&&!tn?(t.updateQueue=n.updateQueue,t.flags&=-2053,n.lanes&=~i,Gn(n,t,i)):(Ne&&s&&Io(t),t.flags|=1,Qe(n,t,r,i),t.child)}function bd(n,t,r,s,i){if(sn(r)){var a=!0;Li(t)}else a=!1;if(yr(t,i),t.stateNode===null)fi(n,t),Yh(t,r,s),Il(t,r,s,i),s=!0;else if(n===null){var l=t.stateNode,o=t.memoizedProps;l.props=o;var c=l.context,d=r.contextType;typeof d=="object"&&d!==null?d=jn(d):(d=sn(r)?It:We.current,d=kr(t,d));var u=r.getDerivedStateFromProps,h=typeof u=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==s||c!==d)&&gd(t,l,s,d),Zn=!1;var g=t.memoizedState;l.state=g,Ii(t,s,l,i),c=t.memoizedState,o!==s||g!==c||rn.current||Zn?(typeof u=="function"&&(Pl(t,r,u,s),c=t.memoizedState),(o=Zn||md(t,r,o,s,g,c,d))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=c),l.props=s,l.state=c,l.context=d,s=o):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{l=t.stateNode,Eh(n,t),o=t.memoizedProps,d=t.type===t.elementType?o:Sn(t.type,o),l.props=d,h=t.pendingProps,g=l.context,c=r.contextType,typeof c=="object"&&c!==null?c=jn(c):(c=sn(r)?It:We.current,c=kr(t,c));var b=r.getDerivedStateFromProps;(u=typeof b=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==h||g!==c)&&gd(t,l,s,c),Zn=!1,g=t.memoizedState,l.state=g,Ii(t,s,l,i);var N=t.memoizedState;o!==h||g!==N||rn.current||Zn?(typeof b=="function"&&(Pl(t,r,b,s),N=t.memoizedState),(d=Zn||md(t,r,d,s,g,N,c)||!1)?(u||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(s,N,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(s,N,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||o===n.memoizedProps&&g===n.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&g===n.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=N),l.props=s,l.state=N,l.context=c,s=d):(typeof l.componentDidUpdate!="function"||o===n.memoizedProps&&g===n.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&g===n.memoizedState||(t.flags|=1024),s=!1)}return Al(n,t,r,s,a,i)}function Al(n,t,r,s,i,a){tp(n,t);var l=(t.flags&128)!==0;if(!s&&!l)return i&&ld(t,r,!1),Gn(n,t,a);s=t.stateNode,ug.current=t;var o=l&&typeof r.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,n!==null&&l?(t.child=Sr(t,n.child,null,a),t.child=Sr(t,null,o,a)):Qe(n,t,o,a),t.memoizedState=s.state,i&&ld(t,r,!0),t.child}function rp(n){var t=n.stateNode;t.pendingContext?ad(n,t.pendingContext,t.pendingContext!==t.context):t.context&&ad(n,t.context,!1),Bo(n,t.containerInfo)}function kd(n,t,r,s,i){return wr(),Mo(i),t.flags|=256,Qe(n,t,r,s),t.child}var Fl={dehydrated:null,treeContext:null,retryLane:0};function Dl(n){return{baseLanes:n,cachePool:null,transitions:null}}function sp(n,t,r){var s=t.pendingProps,i=ke.current,a=!1,l=(t.flags&128)!==0,o;if((o=l)||(o=n!==null&&n.memoizedState===null?!1:(i&2)!==0),o?(a=!0,t.flags&=-129):(n===null||n.memoizedState!==null)&&(i|=1),ge(ke,i&1),n===null)return Ol(t),n=t.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(t.mode&1?n.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=s.children,n=s.fallback,a?(s=t.mode,a=t.child,l={mode:"hidden",children:l},!(s&1)&&a!==null?(a.childLanes=0,a.pendingProps=l):a=ia(l,s,0,null),n=Pt(n,s,r,null),a.return=t,n.return=t,a.sibling=n,t.child=a,t.child.memoizedState=Dl(r),t.memoizedState=Fl,n):Xo(t,l));if(i=n.memoizedState,i!==null&&(o=i.dehydrated,o!==null))return hg(n,t,l,s,o,i,r);if(a){a=s.fallback,l=t.mode,i=n.child,o=i.sibling;var c={mode:"hidden",children:s.children};return!(l&1)&&t.child!==i?(s=t.child,s.childLanes=0,s.pendingProps=c,t.deletions=null):(s=pt(i,c),s.subtreeFlags=i.subtreeFlags&14680064),o!==null?a=pt(o,a):(a=Pt(a,l,r,null),a.flags|=2),a.return=t,s.return=t,s.sibling=a,t.child=s,s=a,a=t.child,l=n.child.memoizedState,l=l===null?Dl(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},a.memoizedState=l,a.childLanes=n.childLanes&~r,t.memoizedState=Fl,s}return a=n.child,n=a.sibling,s=pt(a,{mode:"visible",children:s.children}),!(t.mode&1)&&(s.lanes=r),s.return=t,s.sibling=null,n!==null&&(r=t.deletions,r===null?(t.deletions=[n],t.flags|=16):r.push(n)),t.child=s,t.memoizedState=null,s}function Xo(n,t){return t=ia({mode:"visible",children:t},n.mode,0,null),t.return=n,n.child=t}function Js(n,t,r,s){return s!==null&&Mo(s),Sr(t,n.child,null,r),n=Xo(t,t.pendingProps.children),n.flags|=2,t.memoizedState=null,n}function hg(n,t,r,s,i,a,l){if(r)return t.flags&256?(t.flags&=-257,s=Ia(Error(W(422))),Js(n,t,l,s)):t.memoizedState!==null?(t.child=n.child,t.flags|=128,null):(a=s.fallback,i=t.mode,s=ia({mode:"visible",children:s.children},i,0,null),a=Pt(a,i,l,null),a.flags|=2,s.return=t,a.return=t,s.sibling=a,t.child=s,t.mode&1&&Sr(t,n.child,null,l),t.child.memoizedState=Dl(l),t.memoizedState=Fl,a);if(!(t.mode&1))return Js(n,t,l,null);if(i.data==="$!"){if(s=i.nextSibling&&i.nextSibling.dataset,s)var o=s.dgst;return s=o,a=Error(W(419)),s=Ia(a,s,void 0),Js(n,t,l,s)}if(o=(l&n.childLanes)!==0,tn||o){if(s=Ae,s!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(s.suspendedLanes|l)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Kn(n,i),Ln(s,n,i,-1))}return tc(),s=Ia(Error(W(421))),Js(n,t,l,s)}return i.data==="$?"?(t.flags|=128,t.child=n.child,t=Sg.bind(null,n),i._reactRetry=t,null):(n=a.treeContext,dn=ct(i.nextSibling),un=t,Ne=!0,Tn=null,n!==null&&(gn[xn++]=$n,gn[xn++]=Bn,gn[xn++]=zt,$n=n.id,Bn=n.overflow,zt=t),t=Xo(t,s.children),t.flags|=4096,t)}function wd(n,t,r){n.lanes|=t;var s=n.alternate;s!==null&&(s.lanes|=t),Rl(n.return,t,r)}function za(n,t,r,s,i){var a=n.memoizedState;a===null?n.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:r,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=s,a.tail=r,a.tailMode=i)}function ip(n,t,r){var s=t.pendingProps,i=s.revealOrder,a=s.tail;if(Qe(n,t,s.children,r),s=ke.current,s&2)s=s&1|2,t.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=t.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&wd(n,r,t);else if(n.tag===19)wd(n,r,t);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}s&=1}if(ge(ke,s),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)n=r.alternate,n!==null&&zi(n)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),za(t,!1,i,r,a);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(n=i.alternate,n!==null&&zi(n)===null){t.child=i;break}n=i.sibling,i.sibling=r,r=i,i=n}za(t,!0,r,null,a);break;case"together":za(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function fi(n,t){!(t.mode&1)&&n!==null&&(n.alternate=null,t.alternate=null,t.flags|=2)}function Gn(n,t,r){if(n!==null&&(t.dependencies=n.dependencies),At|=t.lanes,!(r&t.childLanes))return null;if(n!==null&&t.child!==n.child)throw Error(W(153));if(t.child!==null){for(n=t.child,r=pt(n,n.pendingProps),t.child=r,r.return=t;n.sibling!==null;)n=n.sibling,r=r.sibling=pt(n,n.pendingProps),r.return=t;r.sibling=null}return t.child}function pg(n,t,r){switch(t.tag){case 3:rp(t),wr();break;case 5:Oh(t);break;case 1:sn(t.type)&&Li(t);break;case 4:Bo(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,i=t.memoizedProps.value;ge(Ri,s._currentValue),s._currentValue=i;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(ge(ke,ke.current&1),t.flags|=128,null):r&t.child.childLanes?sp(n,t,r):(ge(ke,ke.current&1),n=Gn(n,t,r),n!==null?n.sibling:null);ge(ke,ke.current&1);break;case 19:if(s=(r&t.childLanes)!==0,n.flags&128){if(s)return ip(n,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(ke,ke.current),s)break;return null;case 22:case 23:return t.lanes=0,np(n,t,r)}return Gn(n,t,r)}var ap,Vl,lp,op;ap=function(n,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)n.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Vl=function(){};lp=function(n,t,r,s){var i=n.memoizedProps;if(i!==s){n=t.stateNode,Lt(Mn.current);var a=null;switch(r){case"input":i=ol(n,i),s=ol(n,s),a=[];break;case"select":i=Se({},i,{value:void 0}),s=Se({},s,{value:void 0}),a=[];break;case"textarea":i=ul(n,i),s=ul(n,s),a=[];break;default:typeof i.onClick!="function"&&typeof s.onClick=="function"&&(n.onclick=Ti)}pl(r,s);var l;r=null;for(d in i)if(!s.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var o=i[d];for(l in o)o.hasOwnProperty(l)&&(r||(r={}),r[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(cs.hasOwnProperty(d)?a||(a=[]):(a=a||[]).push(d,null));for(d in s){var c=s[d];if(o=i!=null?i[d]:void 0,s.hasOwnProperty(d)&&c!==o&&(c!=null||o!=null))if(d==="style")if(o){for(l in o)!o.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(r||(r={}),r[l]="");for(l in c)c.hasOwnProperty(l)&&o[l]!==c[l]&&(r||(r={}),r[l]=c[l])}else r||(a||(a=[]),a.push(d,r)),r=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(a=a||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(a=a||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(cs.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&xe("scroll",n),a||o===c||(a=[])):(a=a||[]).push(d,c))}r&&(a=a||[]).push("style",r);var d=a;(t.updateQueue=d)&&(t.flags|=4)}};op=function(n,t,r,s){r!==s&&(t.flags|=4)};function Hr(n,t){if(!Ne)switch(n.tailMode){case"hidden":t=n.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n.tail=null:r.sibling=null;break;case"collapsed":r=n.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?t||n.tail===null?n.tail=null:n.tail.sibling=null:s.sibling=null}}function He(n){var t=n.alternate!==null&&n.alternate.child===n.child,r=0,s=0;if(t)for(var i=n.child;i!==null;)r|=i.lanes|i.childLanes,s|=i.subtreeFlags&14680064,s|=i.flags&14680064,i.return=n,i=i.sibling;else for(i=n.child;i!==null;)r|=i.lanes|i.childLanes,s|=i.subtreeFlags,s|=i.flags,i.return=n,i=i.sibling;return n.subtreeFlags|=s,n.childLanes=r,t}function fg(n,t,r){var s=t.pendingProps;switch(zo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(t),null;case 1:return sn(t.type)&&_i(),He(t),null;case 3:return s=t.stateNode,Cr(),ve(rn),ve(We),Ho(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(n===null||n.child===null)&&(Xs(t)?t.flags|=4:n===null||n.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Tn!==null&&(Gl(Tn),Tn=null))),Vl(n,t),He(t),null;case 5:qo(t);var i=Lt(Ns.current);if(r=t.type,n!==null&&t.stateNode!=null)lp(n,t,r,s,i),n.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(W(166));return He(t),null}if(n=Lt(Mn.current),Xs(t)){s=t.stateNode,r=t.type;var a=t.memoizedProps;switch(s[In]=t,s[ys]=a,n=(t.mode&1)!==0,r){case"dialog":xe("cancel",s),xe("close",s);break;case"iframe":case"object":case"embed":xe("load",s);break;case"video":case"audio":for(i=0;i<Yr.length;i++)xe(Yr[i],s);break;case"source":xe("error",s);break;case"img":case"image":case"link":xe("error",s),xe("load",s);break;case"details":xe("toggle",s);break;case"input":Pc(s,a),xe("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!a.multiple},xe("invalid",s);break;case"textarea":zc(s,a),xe("invalid",s)}pl(r,a),i=null;for(var l in a)if(a.hasOwnProperty(l)){var o=a[l];l==="children"?typeof o=="string"?s.textContent!==o&&(a.suppressHydrationWarning!==!0&&Qs(s.textContent,o,n),i=["children",o]):typeof o=="number"&&s.textContent!==""+o&&(a.suppressHydrationWarning!==!0&&Qs(s.textContent,o,n),i=["children",""+o]):cs.hasOwnProperty(l)&&o!=null&&l==="onScroll"&&xe("scroll",s)}switch(r){case"input":$s(s),Ic(s,a,!0);break;case"textarea":$s(s),Mc(s);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(s.onclick=Ti)}s=i,t.updateQueue=s,s!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Mu(r)),n==="http://www.w3.org/1999/xhtml"?r==="script"?(n=l.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof s.is=="string"?n=l.createElement(r,{is:s.is}):(n=l.createElement(r),r==="select"&&(l=n,s.multiple?l.multiple=!0:s.size&&(l.size=s.size))):n=l.createElementNS(n,r),n[In]=t,n[ys]=s,ap(n,t,!1,!1),t.stateNode=n;e:{switch(l=fl(r,s),r){case"dialog":xe("cancel",n),xe("close",n),i=s;break;case"iframe":case"object":case"embed":xe("load",n),i=s;break;case"video":case"audio":for(i=0;i<Yr.length;i++)xe(Yr[i],n);i=s;break;case"source":xe("error",n),i=s;break;case"img":case"image":case"link":xe("error",n),xe("load",n),i=s;break;case"details":xe("toggle",n),i=s;break;case"input":Pc(n,s),i=ol(n,s),xe("invalid",n);break;case"option":i=s;break;case"select":n._wrapperState={wasMultiple:!!s.multiple},i=Se({},s,{value:void 0}),xe("invalid",n);break;case"textarea":zc(n,s),i=ul(n,s),xe("invalid",n);break;default:i=s}pl(r,i),o=i;for(a in o)if(o.hasOwnProperty(a)){var c=o[a];a==="style"?Du(n,c):a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Au(n,c)):a==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&ds(n,c):typeof c=="number"&&ds(n,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(cs.hasOwnProperty(a)?c!=null&&a==="onScroll"&&xe("scroll",n):c!=null&&jo(n,a,c,l))}switch(r){case"input":$s(n),Ic(n,s,!1);break;case"textarea":$s(n),Mc(n);break;case"option":s.value!=null&&n.setAttribute("value",""+gt(s.value));break;case"select":n.multiple=!!s.multiple,a=s.value,a!=null?mr(n,!!s.multiple,a,!1):s.defaultValue!=null&&mr(n,!!s.multiple,s.defaultValue,!0);break;default:typeof i.onClick=="function"&&(n.onclick=Ti)}switch(r){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return He(t),null;case 6:if(n&&t.stateNode!=null)op(n,t,n.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(W(166));if(r=Lt(Ns.current),Lt(Mn.current),Xs(t)){if(s=t.stateNode,r=t.memoizedProps,s[In]=t,(a=s.nodeValue!==r)&&(n=un,n!==null))switch(n.tag){case 3:Qs(s.nodeValue,r,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Qs(s.nodeValue,r,(n.mode&1)!==0)}a&&(t.flags|=4)}else s=(r.nodeType===9?r:r.ownerDocument).createTextNode(s),s[In]=t,t.stateNode=s}return He(t),null;case 13:if(ve(ke),s=t.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ne&&dn!==null&&t.mode&1&&!(t.flags&128))Ch(),wr(),t.flags|=98560,a=!1;else if(a=Xs(t),s!==null&&s.dehydrated!==null){if(n===null){if(!a)throw Error(W(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(W(317));a[In]=t}else wr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;He(t),a=!1}else Tn!==null&&(Gl(Tn),Tn=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(s=s!==null,s!==(n!==null&&n.memoizedState!==null)&&s&&(t.child.flags|=8192,t.mode&1&&(n===null||ke.current&1?Ie===0&&(Ie=3):tc())),t.updateQueue!==null&&(t.flags|=4),He(t),null);case 4:return Cr(),Vl(n,t),n===null&&xs(t.stateNode.containerInfo),He(t),null;case 10:return Do(t.type._context),He(t),null;case 17:return sn(t.type)&&_i(),He(t),null;case 19:if(ve(ke),a=t.memoizedState,a===null)return He(t),null;if(s=(t.flags&128)!==0,l=a.rendering,l===null)if(s)Hr(a,!1);else{if(Ie!==0||n!==null&&n.flags&128)for(n=t.child;n!==null;){if(l=zi(n),l!==null){for(t.flags|=128,Hr(a,!1),s=l.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=r,r=t.child;r!==null;)a=r,n=s,a.flags&=14680066,l=a.alternate,l===null?(a.childLanes=0,a.lanes=n,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,n=l.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),r=r.sibling;return ge(ke,ke.current&1|2),t.child}n=n.sibling}a.tail!==null&&Ee()>_r&&(t.flags|=128,s=!0,Hr(a,!1),t.lanes=4194304)}else{if(!s)if(n=zi(l),n!==null){if(t.flags|=128,s=!0,r=n.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Hr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!Ne)return He(t),null}else 2*Ee()-a.renderingStartTime>_r&&r!==1073741824&&(t.flags|=128,s=!0,Hr(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(r=a.last,r!==null?r.sibling=l:t.child=l,a.last=l)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Ee(),t.sibling=null,r=ke.current,ge(ke,s?r&1|2:r&1),t):(He(t),null);case 22:case 23:return nc(),s=t.memoizedState!==null,n!==null&&n.memoizedState!==null!==s&&(t.flags|=8192),s&&t.mode&1?on&1073741824&&(He(t),t.subtreeFlags&6&&(t.flags|=8192)):He(t),null;case 24:return null;case 25:return null}throw Error(W(156,t.tag))}function mg(n,t){switch(zo(t),t.tag){case 1:return sn(t.type)&&_i(),n=t.flags,n&65536?(t.flags=n&-65537|128,t):null;case 3:return Cr(),ve(rn),ve(We),Ho(),n=t.flags,n&65536&&!(n&128)?(t.flags=n&-65537|128,t):null;case 5:return qo(t),null;case 13:if(ve(ke),n=t.memoizedState,n!==null&&n.dehydrated!==null){if(t.alternate===null)throw Error(W(340));wr()}return n=t.flags,n&65536?(t.flags=n&-65537|128,t):null;case 19:return ve(ke),null;case 4:return Cr(),null;case 10:return Do(t.type._context),null;case 22:case 23:return nc(),null;case 24:return null;default:return null}}var Zs=!1,Ue=!1,gg=typeof WeakSet=="function"?WeakSet:Set,X=null;function ar(n,t){var r=n.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(s){Te(n,t,s)}else r.current=null}function $l(n,t,r){try{r()}catch(s){Te(n,t,s)}}var Sd=!1;function xg(n,t){if(wl=wi,n=ph(),Po(n)){if("selectionStart"in n)var r={start:n.selectionStart,end:n.selectionEnd};else e:{r=(r=n.ownerDocument)&&r.defaultView||window;var s=r.getSelection&&r.getSelection();if(s&&s.rangeCount!==0){r=s.anchorNode;var i=s.anchorOffset,a=s.focusNode;s=s.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var l=0,o=-1,c=-1,d=0,u=0,h=n,g=null;n:for(;;){for(var b;h!==r||i!==0&&h.nodeType!==3||(o=l+i),h!==a||s!==0&&h.nodeType!==3||(c=l+s),h.nodeType===3&&(l+=h.nodeValue.length),(b=h.firstChild)!==null;)g=h,h=b;for(;;){if(h===n)break n;if(g===r&&++d===i&&(o=l),g===a&&++u===s&&(c=l),(b=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=b}r=o===-1||c===-1?null:{start:o,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(Sl={focusedElem:n,selectionRange:r},wi=!1,X=t;X!==null;)if(t=X,n=t.child,(t.subtreeFlags&1028)!==0&&n!==null)n.return=t,X=n;else for(;X!==null;){t=X;try{var N=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var y=N.memoizedProps,j=N.memoizedState,f=t.stateNode,m=f.getSnapshotBeforeUpdate(t.elementType===t.type?y:Sn(t.type,y),j);f.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(W(163))}}catch(C){Te(t,t.return,C)}if(n=t.sibling,n!==null){n.return=t.return,X=n;break}X=t.return}return N=Sd,Sd=!1,N}function is(n,t,r){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var i=s=s.next;do{if((i.tag&n)===n){var a=i.destroy;i.destroy=void 0,a!==void 0&&$l(t,r,a)}i=i.next}while(i!==s)}}function ra(n,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&n)===n){var s=r.create;r.destroy=s()}r=r.next}while(r!==t)}}function Bl(n){var t=n.ref;if(t!==null){var r=n.stateNode;switch(n.tag){case 5:n=r;break;default:n=r}typeof t=="function"?t(n):t.current=n}}function cp(n){var t=n.alternate;t!==null&&(n.alternate=null,cp(t)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(t=n.stateNode,t!==null&&(delete t[In],delete t[ys],delete t[_l],delete t[Zm],delete t[eg])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function dp(n){return n.tag===5||n.tag===3||n.tag===4}function Cd(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||dp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function ql(n,t,r){var s=n.tag;if(s===5||s===6)n=n.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(n,t):r.insertBefore(n,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(n,r)):(t=r,t.appendChild(n)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Ti));else if(s!==4&&(n=n.child,n!==null))for(ql(n,t,r),n=n.sibling;n!==null;)ql(n,t,r),n=n.sibling}function Hl(n,t,r){var s=n.tag;if(s===5||s===6)n=n.stateNode,t?r.insertBefore(n,t):r.appendChild(n);else if(s!==4&&(n=n.child,n!==null))for(Hl(n,t,r),n=n.sibling;n!==null;)Hl(n,t,r),n=n.sibling}var Ve=null,Cn=!1;function Yn(n,t,r){for(r=r.child;r!==null;)up(n,t,r),r=r.sibling}function up(n,t,r){if(zn&&typeof zn.onCommitFiberUnmount=="function")try{zn.onCommitFiberUnmount(Qi,r)}catch{}switch(r.tag){case 5:Ue||ar(r,t);case 6:var s=Ve,i=Cn;Ve=null,Yn(n,t,r),Ve=s,Cn=i,Ve!==null&&(Cn?(n=Ve,r=r.stateNode,n.nodeType===8?n.parentNode.removeChild(r):n.removeChild(r)):Ve.removeChild(r.stateNode));break;case 18:Ve!==null&&(Cn?(n=Ve,r=r.stateNode,n.nodeType===8?_a(n.parentNode,r):n.nodeType===1&&_a(n,r),fs(n)):_a(Ve,r.stateNode));break;case 4:s=Ve,i=Cn,Ve=r.stateNode.containerInfo,Cn=!0,Yn(n,t,r),Ve=s,Cn=i;break;case 0:case 11:case 14:case 15:if(!Ue&&(s=r.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){i=s=s.next;do{var a=i,l=a.destroy;a=a.tag,l!==void 0&&(a&2||a&4)&&$l(r,t,l),i=i.next}while(i!==s)}Yn(n,t,r);break;case 1:if(!Ue&&(ar(r,t),s=r.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=r.memoizedProps,s.state=r.memoizedState,s.componentWillUnmount()}catch(o){Te(r,t,o)}Yn(n,t,r);break;case 21:Yn(n,t,r);break;case 22:r.mode&1?(Ue=(s=Ue)||r.memoizedState!==null,Yn(n,t,r),Ue=s):Yn(n,t,r);break;default:Yn(n,t,r)}}function Td(n){var t=n.updateQueue;if(t!==null){n.updateQueue=null;var r=n.stateNode;r===null&&(r=n.stateNode=new gg),t.forEach(function(s){var i=Cg.bind(null,n,s);r.has(s)||(r.add(s),s.then(i,i))})}}function kn(n,t){var r=t.deletions;if(r!==null)for(var s=0;s<r.length;s++){var i=r[s];try{var a=n,l=t,o=l;e:for(;o!==null;){switch(o.tag){case 5:Ve=o.stateNode,Cn=!1;break e;case 3:Ve=o.stateNode.containerInfo,Cn=!0;break e;case 4:Ve=o.stateNode.containerInfo,Cn=!0;break e}o=o.return}if(Ve===null)throw Error(W(160));up(a,l,i),Ve=null,Cn=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(d){Te(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)hp(t,n),t=t.sibling}function hp(n,t){var r=n.alternate,s=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(kn(t,n),Rn(n),s&4){try{is(3,n,n.return),ra(3,n)}catch(y){Te(n,n.return,y)}try{is(5,n,n.return)}catch(y){Te(n,n.return,y)}}break;case 1:kn(t,n),Rn(n),s&512&&r!==null&&ar(r,r.return);break;case 5:if(kn(t,n),Rn(n),s&512&&r!==null&&ar(r,r.return),n.flags&32){var i=n.stateNode;try{ds(i,"")}catch(y){Te(n,n.return,y)}}if(s&4&&(i=n.stateNode,i!=null)){var a=n.memoizedProps,l=r!==null?r.memoizedProps:a,o=n.type,c=n.updateQueue;if(n.updateQueue=null,c!==null)try{o==="input"&&a.type==="radio"&&a.name!=null&&Iu(i,a),fl(o,l);var d=fl(o,a);for(l=0;l<c.length;l+=2){var u=c[l],h=c[l+1];u==="style"?Du(i,h):u==="dangerouslySetInnerHTML"?Au(i,h):u==="children"?ds(i,h):jo(i,u,h,d)}switch(o){case"input":cl(i,a);break;case"textarea":zu(i,a);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var b=a.value;b!=null?mr(i,!!a.multiple,b,!1):g!==!!a.multiple&&(a.defaultValue!=null?mr(i,!!a.multiple,a.defaultValue,!0):mr(i,!!a.multiple,a.multiple?[]:"",!1))}i[ys]=a}catch(y){Te(n,n.return,y)}}break;case 6:if(kn(t,n),Rn(n),s&4){if(n.stateNode===null)throw Error(W(162));i=n.stateNode,a=n.memoizedProps;try{i.nodeValue=a}catch(y){Te(n,n.return,y)}}break;case 3:if(kn(t,n),Rn(n),s&4&&r!==null&&r.memoizedState.isDehydrated)try{fs(t.containerInfo)}catch(y){Te(n,n.return,y)}break;case 4:kn(t,n),Rn(n);break;case 13:kn(t,n),Rn(n),i=n.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Zo=Ee())),s&4&&Td(n);break;case 22:if(u=r!==null&&r.memoizedState!==null,n.mode&1?(Ue=(d=Ue)||u,kn(t,n),Ue=d):kn(t,n),Rn(n),s&8192){if(d=n.memoizedState!==null,(n.stateNode.isHidden=d)&&!u&&n.mode&1)for(X=n,u=n.child;u!==null;){for(h=X=u;X!==null;){switch(g=X,b=g.child,g.tag){case 0:case 11:case 14:case 15:is(4,g,g.return);break;case 1:ar(g,g.return);var N=g.stateNode;if(typeof N.componentWillUnmount=="function"){s=g,r=g.return;try{t=s,N.props=t.memoizedProps,N.state=t.memoizedState,N.componentWillUnmount()}catch(y){Te(s,r,y)}}break;case 5:ar(g,g.return);break;case 22:if(g.memoizedState!==null){Ld(h);continue}}b!==null?(b.return=g,X=b):Ld(h)}u=u.sibling}e:for(u=null,h=n;;){if(h.tag===5){if(u===null){u=h;try{i=h.stateNode,d?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(o=h.stateNode,c=h.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=Fu("display",l))}catch(y){Te(n,n.return,y)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(y){Te(n,n.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===n)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break e;for(;h.sibling===null;){if(h.return===null||h.return===n)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:kn(t,n),Rn(n),s&4&&Td(n);break;case 21:break;default:kn(t,n),Rn(n)}}function Rn(n){var t=n.flags;if(t&2){try{e:{for(var r=n.return;r!==null;){if(dp(r)){var s=r;break e}r=r.return}throw Error(W(160))}switch(s.tag){case 5:var i=s.stateNode;s.flags&32&&(ds(i,""),s.flags&=-33);var a=Cd(n);Hl(n,a,i);break;case 3:case 4:var l=s.stateNode.containerInfo,o=Cd(n);ql(n,o,l);break;default:throw Error(W(161))}}catch(c){Te(n,n.return,c)}n.flags&=-3}t&4096&&(n.flags&=-4097)}function vg(n,t,r){X=n,pp(n)}function pp(n,t,r){for(var s=(n.mode&1)!==0;X!==null;){var i=X,a=i.child;if(i.tag===22&&s){var l=i.memoizedState!==null||Zs;if(!l){var o=i.alternate,c=o!==null&&o.memoizedState!==null||Ue;o=Zs;var d=Ue;if(Zs=l,(Ue=c)&&!d)for(X=i;X!==null;)l=X,c=l.child,l.tag===22&&l.memoizedState!==null?Ed(i):c!==null?(c.return=l,X=c):Ed(i);for(;a!==null;)X=a,pp(a),a=a.sibling;X=i,Zs=o,Ue=d}_d(n)}else i.subtreeFlags&8772&&a!==null?(a.return=i,X=a):_d(n)}}function _d(n){for(;X!==null;){var t=X;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ue||ra(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!Ue)if(r===null)s.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:Sn(t.type,r.memoizedProps);s.componentDidUpdate(i,r.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&hd(t,a,s);break;case 3:var l=t.updateQueue;if(l!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}hd(t,l,r)}break;case 5:var o=t.stateNode;if(r===null&&t.flags&4){r=o;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var u=d.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&fs(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(W(163))}Ue||t.flags&512&&Bl(t)}catch(g){Te(t,t.return,g)}}if(t===n){X=null;break}if(r=t.sibling,r!==null){r.return=t.return,X=r;break}X=t.return}}function Ld(n){for(;X!==null;){var t=X;if(t===n){X=null;break}var r=t.sibling;if(r!==null){r.return=t.return,X=r;break}X=t.return}}function Ed(n){for(;X!==null;){var t=X;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{ra(4,t)}catch(c){Te(t,r,c)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var i=t.return;try{s.componentDidMount()}catch(c){Te(t,i,c)}}var a=t.return;try{Bl(t)}catch(c){Te(t,a,c)}break;case 5:var l=t.return;try{Bl(t)}catch(c){Te(t,l,c)}}}catch(c){Te(t,t.return,c)}if(t===n){X=null;break}var o=t.sibling;if(o!==null){o.return=t.return,X=o;break}X=t.return}}var yg=Math.ceil,Fi=Qn.ReactCurrentDispatcher,Yo=Qn.ReactCurrentOwner,yn=Qn.ReactCurrentBatchConfig,oe=0,Ae=null,Oe=null,$e=0,on=0,lr=yt(0),Ie=0,Ss=null,At=0,sa=0,Jo=0,as=null,nn=null,Zo=0,_r=1/0,Fn=null,Di=!1,Ul=null,ut=null,ei=!1,rt=null,Vi=0,ls=0,Wl=null,mi=-1,gi=0;function Ye(){return oe&6?Ee():mi!==-1?mi:mi=Ee()}function ht(n){return n.mode&1?oe&2&&$e!==0?$e&-$e:tg.transition!==null?(gi===0&&(gi=Yu()),gi):(n=pe,n!==0||(n=window.event,n=n===void 0?16:sh(n.type)),n):1}function Ln(n,t,r,s){if(50<ls)throw ls=0,Wl=null,Error(W(185));Es(n,r,s),(!(oe&2)||n!==Ae)&&(n===Ae&&(!(oe&2)&&(sa|=r),Ie===4&&nt(n,$e)),an(n,s),r===1&&oe===0&&!(t.mode&1)&&(_r=Ee()+500,ea&&jt()))}function an(n,t){var r=n.callbackNode;tm(n,t);var s=ki(n,n===Ae?$e:0);if(s===0)r!==null&&Dc(r),n.callbackNode=null,n.callbackPriority=0;else if(t=s&-s,n.callbackPriority!==t){if(r!=null&&Dc(r),t===1)n.tag===0?ng(Od.bind(null,n)):kh(Od.bind(null,n)),Ym(function(){!(oe&6)&&jt()}),r=null;else{switch(Ju(s)){case 1:r=So;break;case 4:r=Qu;break;case 16:r=bi;break;case 536870912:r=Xu;break;default:r=bi}r=Np(r,fp.bind(null,n))}n.callbackPriority=t,n.callbackNode=r}}function fp(n,t){if(mi=-1,gi=0,oe&6)throw Error(W(327));var r=n.callbackNode;if(jr()&&n.callbackNode!==r)return null;var s=ki(n,n===Ae?$e:0);if(s===0)return null;if(s&30||s&n.expiredLanes||t)t=$i(n,s);else{t=s;var i=oe;oe|=2;var a=gp();(Ae!==n||$e!==t)&&(Fn=null,_r=Ee()+500,Rt(n,t));do try{bg();break}catch(o){mp(n,o)}while(!0);Fo(),Fi.current=a,oe=i,Oe!==null?t=0:(Ae=null,$e=0,t=Ie)}if(t!==0){if(t===2&&(i=yl(n),i!==0&&(s=i,t=Kl(n,i))),t===1)throw r=Ss,Rt(n,0),nt(n,s),an(n,Ee()),r;if(t===6)nt(n,s);else{if(i=n.current.alternate,!(s&30)&&!jg(i)&&(t=$i(n,s),t===2&&(a=yl(n),a!==0&&(s=a,t=Kl(n,a))),t===1))throw r=Ss,Rt(n,0),nt(n,s),an(n,Ee()),r;switch(n.finishedWork=i,n.finishedLanes=s,t){case 0:case 1:throw Error(W(345));case 2:St(n,nn,Fn);break;case 3:if(nt(n,s),(s&130023424)===s&&(t=Zo+500-Ee(),10<t)){if(ki(n,0)!==0)break;if(i=n.suspendedLanes,(i&s)!==s){Ye(),n.pingedLanes|=n.suspendedLanes&i;break}n.timeoutHandle=Tl(St.bind(null,n,nn,Fn),t);break}St(n,nn,Fn);break;case 4:if(nt(n,s),(s&4194240)===s)break;for(t=n.eventTimes,i=-1;0<s;){var l=31-_n(s);a=1<<l,l=t[l],l>i&&(i=l),s&=~a}if(s=i,s=Ee()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*yg(s/1960))-s,10<s){n.timeoutHandle=Tl(St.bind(null,n,nn,Fn),s);break}St(n,nn,Fn);break;case 5:St(n,nn,Fn);break;default:throw Error(W(329))}}}return an(n,Ee()),n.callbackNode===r?fp.bind(null,n):null}function Kl(n,t){var r=as;return n.current.memoizedState.isDehydrated&&(Rt(n,t).flags|=256),n=$i(n,t),n!==2&&(t=nn,nn=r,t!==null&&Gl(t)),n}function Gl(n){nn===null?nn=n:nn.push.apply(nn,n)}function jg(n){for(var t=n;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var s=0;s<r.length;s++){var i=r[s],a=i.getSnapshot;i=i.value;try{if(!En(a(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nt(n,t){for(t&=~Jo,t&=~sa,n.suspendedLanes|=t,n.pingedLanes&=~t,n=n.expirationTimes;0<t;){var r=31-_n(t),s=1<<r;n[r]=-1,t&=~s}}function Od(n){if(oe&6)throw Error(W(327));jr();var t=ki(n,0);if(!(t&1))return an(n,Ee()),null;var r=$i(n,t);if(n.tag!==0&&r===2){var s=yl(n);s!==0&&(t=s,r=Kl(n,s))}if(r===1)throw r=Ss,Rt(n,0),nt(n,t),an(n,Ee()),r;if(r===6)throw Error(W(345));return n.finishedWork=n.current.alternate,n.finishedLanes=t,St(n,nn,Fn),an(n,Ee()),null}function ec(n,t){var r=oe;oe|=1;try{return n(t)}finally{oe=r,oe===0&&(_r=Ee()+500,ea&&jt())}}function Ft(n){rt!==null&&rt.tag===0&&!(oe&6)&&jr();var t=oe;oe|=1;var r=yn.transition,s=pe;try{if(yn.transition=null,pe=1,n)return n()}finally{pe=s,yn.transition=r,oe=t,!(oe&6)&&jt()}}function nc(){on=lr.current,ve(lr)}function Rt(n,t){n.finishedWork=null,n.finishedLanes=0;var r=n.timeoutHandle;if(r!==-1&&(n.timeoutHandle=-1,Xm(r)),Oe!==null)for(r=Oe.return;r!==null;){var s=r;switch(zo(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&_i();break;case 3:Cr(),ve(rn),ve(We),Ho();break;case 5:qo(s);break;case 4:Cr();break;case 13:ve(ke);break;case 19:ve(ke);break;case 10:Do(s.type._context);break;case 22:case 23:nc()}r=r.return}if(Ae=n,Oe=n=pt(n.current,null),$e=on=t,Ie=0,Ss=null,Jo=sa=At=0,nn=as=null,_t!==null){for(t=0;t<_t.length;t++)if(r=_t[t],s=r.interleaved,s!==null){r.interleaved=null;var i=s.next,a=r.pending;if(a!==null){var l=a.next;a.next=i,s.next=l}r.pending=s}_t=null}return n}function mp(n,t){do{var r=Oe;try{if(Fo(),hi.current=Ai,Mi){for(var s=we.memoizedState;s!==null;){var i=s.queue;i!==null&&(i.pending=null),s=s.next}Mi=!1}if(Mt=0,Me=Pe=we=null,ss=!1,bs=0,Yo.current=null,r===null||r.return===null){Ie=1,Ss=t,Oe=null;break}e:{var a=n,l=r.return,o=r,c=t;if(t=$e,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,u=o,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var g=u.alternate;g?(u.updateQueue=g.updateQueue,u.memoizedState=g.memoizedState,u.lanes=g.lanes):(u.updateQueue=null,u.memoizedState=null)}var b=vd(l);if(b!==null){b.flags&=-257,yd(b,l,o,a,t),b.mode&1&&xd(a,d,t),t=b,c=d;var N=t.updateQueue;if(N===null){var y=new Set;y.add(c),t.updateQueue=y}else N.add(c);break e}else{if(!(t&1)){xd(a,d,t),tc();break e}c=Error(W(426))}}else if(Ne&&o.mode&1){var j=vd(l);if(j!==null){!(j.flags&65536)&&(j.flags|=256),yd(j,l,o,a,t),Mo(Tr(c,o));break e}}a=c=Tr(c,o),Ie!==4&&(Ie=2),as===null?as=[a]:as.push(a),a=l;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var f=Jh(a,c,t);ud(a,f);break e;case 1:o=c;var m=a.type,x=a.stateNode;if(!(a.flags&128)&&(typeof m.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(ut===null||!ut.has(x)))){a.flags|=65536,t&=-t,a.lanes|=t;var C=Zh(a,o,t);ud(a,C);break e}}a=a.return}while(a!==null)}vp(r)}catch(v){t=v,Oe===r&&r!==null&&(Oe=r=r.return);continue}break}while(!0)}function gp(){var n=Fi.current;return Fi.current=Ai,n===null?Ai:n}function tc(){(Ie===0||Ie===3||Ie===2)&&(Ie=4),Ae===null||!(At&268435455)&&!(sa&268435455)||nt(Ae,$e)}function $i(n,t){var r=oe;oe|=2;var s=gp();(Ae!==n||$e!==t)&&(Fn=null,Rt(n,t));do try{Ng();break}catch(i){mp(n,i)}while(!0);if(Fo(),oe=r,Fi.current=s,Oe!==null)throw Error(W(261));return Ae=null,$e=0,Ie}function Ng(){for(;Oe!==null;)xp(Oe)}function bg(){for(;Oe!==null&&!Kf();)xp(Oe)}function xp(n){var t=jp(n.alternate,n,on);n.memoizedProps=n.pendingProps,t===null?vp(n):Oe=t,Yo.current=null}function vp(n){var t=n;do{var r=t.alternate;if(n=t.return,t.flags&32768){if(r=mg(r,t),r!==null){r.flags&=32767,Oe=r;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Ie=6,Oe=null;return}}else if(r=fg(r,t,on),r!==null){Oe=r;return}if(t=t.sibling,t!==null){Oe=t;return}Oe=t=n}while(t!==null);Ie===0&&(Ie=5)}function St(n,t,r){var s=pe,i=yn.transition;try{yn.transition=null,pe=1,kg(n,t,r,s)}finally{yn.transition=i,pe=s}return null}function kg(n,t,r,s){do jr();while(rt!==null);if(oe&6)throw Error(W(327));r=n.finishedWork;var i=n.finishedLanes;if(r===null)return null;if(n.finishedWork=null,n.finishedLanes=0,r===n.current)throw Error(W(177));n.callbackNode=null,n.callbackPriority=0;var a=r.lanes|r.childLanes;if(rm(n,a),n===Ae&&(Oe=Ae=null,$e=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||ei||(ei=!0,Np(bi,function(){return jr(),null})),a=(r.flags&15990)!==0,r.subtreeFlags&15990||a){a=yn.transition,yn.transition=null;var l=pe;pe=1;var o=oe;oe|=4,Yo.current=null,xg(n,r),hp(r,n),qm(Sl),wi=!!wl,Sl=wl=null,n.current=r,vg(r),Gf(),oe=o,pe=l,yn.transition=a}else n.current=r;if(ei&&(ei=!1,rt=n,Vi=i),a=n.pendingLanes,a===0&&(ut=null),Yf(r.stateNode),an(n,Ee()),t!==null)for(s=n.onRecoverableError,r=0;r<t.length;r++)i=t[r],s(i.value,{componentStack:i.stack,digest:i.digest});if(Di)throw Di=!1,n=Ul,Ul=null,n;return Vi&1&&n.tag!==0&&jr(),a=n.pendingLanes,a&1?n===Wl?ls++:(ls=0,Wl=n):ls=0,jt(),null}function jr(){if(rt!==null){var n=Ju(Vi),t=yn.transition,r=pe;try{if(yn.transition=null,pe=16>n?16:n,rt===null)var s=!1;else{if(n=rt,rt=null,Vi=0,oe&6)throw Error(W(331));var i=oe;for(oe|=4,X=n.current;X!==null;){var a=X,l=a.child;if(X.flags&16){var o=a.deletions;if(o!==null){for(var c=0;c<o.length;c++){var d=o[c];for(X=d;X!==null;){var u=X;switch(u.tag){case 0:case 11:case 15:is(8,u,a)}var h=u.child;if(h!==null)h.return=u,X=h;else for(;X!==null;){u=X;var g=u.sibling,b=u.return;if(cp(u),u===d){X=null;break}if(g!==null){g.return=b,X=g;break}X=b}}}var N=a.alternate;if(N!==null){var y=N.child;if(y!==null){N.child=null;do{var j=y.sibling;y.sibling=null,y=j}while(y!==null)}}X=a}}if(a.subtreeFlags&2064&&l!==null)l.return=a,X=l;else e:for(;X!==null;){if(a=X,a.flags&2048)switch(a.tag){case 0:case 11:case 15:is(9,a,a.return)}var f=a.sibling;if(f!==null){f.return=a.return,X=f;break e}X=a.return}}var m=n.current;for(X=m;X!==null;){l=X;var x=l.child;if(l.subtreeFlags&2064&&x!==null)x.return=l,X=x;else e:for(l=m;X!==null;){if(o=X,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:ra(9,o)}}catch(v){Te(o,o.return,v)}if(o===l){X=null;break e}var C=o.sibling;if(C!==null){C.return=o.return,X=C;break e}X=o.return}}if(oe=i,jt(),zn&&typeof zn.onPostCommitFiberRoot=="function")try{zn.onPostCommitFiberRoot(Qi,n)}catch{}s=!0}return s}finally{pe=r,yn.transition=t}}return!1}function Rd(n,t,r){t=Tr(r,t),t=Jh(n,t,1),n=dt(n,t,1),t=Ye(),n!==null&&(Es(n,1,t),an(n,t))}function Te(n,t,r){if(n.tag===3)Rd(n,n,r);else for(;t!==null;){if(t.tag===3){Rd(t,n,r);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ut===null||!ut.has(s))){n=Tr(r,n),n=Zh(t,n,1),t=dt(t,n,1),n=Ye(),t!==null&&(Es(t,1,n),an(t,n));break}}t=t.return}}function wg(n,t,r){var s=n.pingCache;s!==null&&s.delete(t),t=Ye(),n.pingedLanes|=n.suspendedLanes&r,Ae===n&&($e&r)===r&&(Ie===4||Ie===3&&($e&130023424)===$e&&500>Ee()-Zo?Rt(n,0):Jo|=r),an(n,t)}function yp(n,t){t===0&&(n.mode&1?(t=Hs,Hs<<=1,!(Hs&130023424)&&(Hs=4194304)):t=1);var r=Ye();n=Kn(n,t),n!==null&&(Es(n,t,r),an(n,r))}function Sg(n){var t=n.memoizedState,r=0;t!==null&&(r=t.retryLane),yp(n,r)}function Cg(n,t){var r=0;switch(n.tag){case 13:var s=n.stateNode,i=n.memoizedState;i!==null&&(r=i.retryLane);break;case 19:s=n.stateNode;break;default:throw Error(W(314))}s!==null&&s.delete(t),yp(n,r)}var jp;jp=function(n,t,r){if(n!==null)if(n.memoizedProps!==t.pendingProps||rn.current)tn=!0;else{if(!(n.lanes&r)&&!(t.flags&128))return tn=!1,pg(n,t,r);tn=!!(n.flags&131072)}else tn=!1,Ne&&t.flags&1048576&&wh(t,Oi,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;fi(n,t),n=t.pendingProps;var i=kr(t,We.current);yr(t,r),i=Wo(null,t,s,n,i,r);var a=Ko();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,sn(s)?(a=!0,Li(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,$o(t),i.updater=ta,t.stateNode=i,i._reactInternals=t,Il(t,s,n,r),t=Al(null,t,s,!0,a,r)):(t.tag=0,Ne&&a&&Io(t),Qe(null,t,i,r),t=t.child),t;case 16:s=t.elementType;e:{switch(fi(n,t),n=t.pendingProps,i=s._init,s=i(s._payload),t.type=s,i=t.tag=_g(s),n=Sn(s,n),i){case 0:t=Ml(null,t,s,n,r);break e;case 1:t=bd(null,t,s,n,r);break e;case 11:t=jd(null,t,s,n,r);break e;case 14:t=Nd(null,t,s,Sn(s.type,n),r);break e}throw Error(W(306,s,""))}return t;case 0:return s=t.type,i=t.pendingProps,i=t.elementType===s?i:Sn(s,i),Ml(n,t,s,i,r);case 1:return s=t.type,i=t.pendingProps,i=t.elementType===s?i:Sn(s,i),bd(n,t,s,i,r);case 3:e:{if(rp(t),n===null)throw Error(W(387));s=t.pendingProps,a=t.memoizedState,i=a.element,Eh(n,t),Ii(t,s,null,r);var l=t.memoizedState;if(s=l.element,a.isDehydrated)if(a={element:s,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=Tr(Error(W(423)),t),t=kd(n,t,s,r,i);break e}else if(s!==i){i=Tr(Error(W(424)),t),t=kd(n,t,s,r,i);break e}else for(dn=ct(t.stateNode.containerInfo.firstChild),un=t,Ne=!0,Tn=null,r=_h(t,null,s,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(wr(),s===i){t=Gn(n,t,r);break e}Qe(n,t,s,r)}t=t.child}return t;case 5:return Oh(t),n===null&&Ol(t),s=t.type,i=t.pendingProps,a=n!==null?n.memoizedProps:null,l=i.children,Cl(s,i)?l=null:a!==null&&Cl(s,a)&&(t.flags|=32),tp(n,t),Qe(n,t,l,r),t.child;case 6:return n===null&&Ol(t),null;case 13:return sp(n,t,r);case 4:return Bo(t,t.stateNode.containerInfo),s=t.pendingProps,n===null?t.child=Sr(t,null,s,r):Qe(n,t,s,r),t.child;case 11:return s=t.type,i=t.pendingProps,i=t.elementType===s?i:Sn(s,i),jd(n,t,s,i,r);case 7:return Qe(n,t,t.pendingProps,r),t.child;case 8:return Qe(n,t,t.pendingProps.children,r),t.child;case 12:return Qe(n,t,t.pendingProps.children,r),t.child;case 10:e:{if(s=t.type._context,i=t.pendingProps,a=t.memoizedProps,l=i.value,ge(Ri,s._currentValue),s._currentValue=l,a!==null)if(En(a.value,l)){if(a.children===i.children&&!rn.current){t=Gn(n,t,r);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var o=a.dependencies;if(o!==null){l=a.child;for(var c=o.firstContext;c!==null;){if(c.context===s){if(a.tag===1){c=qn(-1,r&-r),c.tag=2;var d=a.updateQueue;if(d!==null){d=d.shared;var u=d.pending;u===null?c.next=c:(c.next=u.next,u.next=c),d.pending=c}}a.lanes|=r,c=a.alternate,c!==null&&(c.lanes|=r),Rl(a.return,r,t),o.lanes|=r;break}c=c.next}}else if(a.tag===10)l=a.type===t.type?null:a.child;else if(a.tag===18){if(l=a.return,l===null)throw Error(W(341));l.lanes|=r,o=l.alternate,o!==null&&(o.lanes|=r),Rl(l,r,t),l=a.sibling}else l=a.child;if(l!==null)l.return=a;else for(l=a;l!==null;){if(l===t){l=null;break}if(a=l.sibling,a!==null){a.return=l.return,l=a;break}l=l.return}a=l}Qe(n,t,i.children,r),t=t.child}return t;case 9:return i=t.type,s=t.pendingProps.children,yr(t,r),i=jn(i),s=s(i),t.flags|=1,Qe(n,t,s,r),t.child;case 14:return s=t.type,i=Sn(s,t.pendingProps),i=Sn(s.type,i),Nd(n,t,s,i,r);case 15:return ep(n,t,t.type,t.pendingProps,r);case 17:return s=t.type,i=t.pendingProps,i=t.elementType===s?i:Sn(s,i),fi(n,t),t.tag=1,sn(s)?(n=!0,Li(t)):n=!1,yr(t,r),Yh(t,s,i),Il(t,s,i,r),Al(null,t,s,!0,n,r);case 19:return ip(n,t,r);case 22:return np(n,t,r)}throw Error(W(156,t.tag))};function Np(n,t){return Gu(n,t)}function Tg(n,t,r,s){this.tag=n,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vn(n,t,r,s){return new Tg(n,t,r,s)}function rc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function _g(n){if(typeof n=="function")return rc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===bo)return 11;if(n===ko)return 14}return 2}function pt(n,t){var r=n.alternate;return r===null?(r=vn(n.tag,t,n.key,n.mode),r.elementType=n.elementType,r.type=n.type,r.stateNode=n.stateNode,r.alternate=n,n.alternate=r):(r.pendingProps=t,r.type=n.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=n.flags&14680064,r.childLanes=n.childLanes,r.lanes=n.lanes,r.child=n.child,r.memoizedProps=n.memoizedProps,r.memoizedState=n.memoizedState,r.updateQueue=n.updateQueue,t=n.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=n.sibling,r.index=n.index,r.ref=n.ref,r}function xi(n,t,r,s,i,a){var l=2;if(s=n,typeof n=="function")rc(n)&&(l=1);else if(typeof n=="string")l=5;else e:switch(n){case Yt:return Pt(r.children,i,a,t);case No:l=8,i|=8;break;case sl:return n=vn(12,r,t,i|2),n.elementType=sl,n.lanes=a,n;case il:return n=vn(13,r,t,i),n.elementType=il,n.lanes=a,n;case al:return n=vn(19,r,t,i),n.elementType=al,n.lanes=a,n;case Ou:return ia(r,i,a,t);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Lu:l=10;break e;case Eu:l=9;break e;case bo:l=11;break e;case ko:l=14;break e;case Jn:l=16,s=null;break e}throw Error(W(130,n==null?n:typeof n,""))}return t=vn(l,r,t,i),t.elementType=n,t.type=s,t.lanes=a,t}function Pt(n,t,r,s){return n=vn(7,n,s,t),n.lanes=r,n}function ia(n,t,r,s){return n=vn(22,n,s,t),n.elementType=Ou,n.lanes=r,n.stateNode={isHidden:!1},n}function Ma(n,t,r){return n=vn(6,n,null,t),n.lanes=r,n}function Aa(n,t,r){return t=vn(4,n.children!==null?n.children:[],n.key,t),t.lanes=r,t.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},t}function Lg(n,t,r,s,i){this.tag=t,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xa(0),this.expirationTimes=xa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xa(0),this.identifierPrefix=s,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function sc(n,t,r,s,i,a,l,o,c){return n=new Lg(n,t,r,o,c),t===1?(t=1,a===!0&&(t|=8)):t=0,a=vn(3,null,null,t),n.current=a,a.stateNode=n,a.memoizedState={element:s,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},$o(a),n}function Eg(n,t,r){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xt,key:s==null?null:""+s,children:n,containerInfo:t,implementation:r}}function bp(n){if(!n)return xt;n=n._reactInternals;e:{if(Vt(n)!==n||n.tag!==1)throw Error(W(170));var t=n;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(sn(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(W(171))}if(n.tag===1){var r=n.type;if(sn(r))return bh(n,r,t)}return t}function kp(n,t,r,s,i,a,l,o,c){return n=sc(r,s,!0,n,i,a,l,o,c),n.context=bp(null),r=n.current,s=Ye(),i=ht(r),a=qn(s,i),a.callback=t??null,dt(r,a,i),n.current.lanes=i,Es(n,i,s),an(n,s),n}function aa(n,t,r,s){var i=t.current,a=Ye(),l=ht(i);return r=bp(r),t.context===null?t.context=r:t.pendingContext=r,t=qn(a,l),t.payload={element:n},s=s===void 0?null:s,s!==null&&(t.callback=s),n=dt(i,t,l),n!==null&&(Ln(n,i,l,a),ui(n,i,l)),l}function Bi(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Pd(n,t){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var r=n.retryLane;n.retryLane=r!==0&&r<t?r:t}}function ic(n,t){Pd(n,t),(n=n.alternate)&&Pd(n,t)}function Og(){return null}var wp=typeof reportError=="function"?reportError:function(n){console.error(n)};function ac(n){this._internalRoot=n}la.prototype.render=ac.prototype.render=function(n){var t=this._internalRoot;if(t===null)throw Error(W(409));aa(n,t,null,null)};la.prototype.unmount=ac.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var t=n.containerInfo;Ft(function(){aa(null,n,null,null)}),t[Wn]=null}};function la(n){this._internalRoot=n}la.prototype.unstable_scheduleHydration=function(n){if(n){var t=nh();n={blockedOn:null,target:n,priority:t};for(var r=0;r<et.length&&t!==0&&t<et[r].priority;r++);et.splice(r,0,n),r===0&&rh(n)}};function lc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function oa(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Id(){}function Rg(n,t,r,s,i){if(i){if(typeof s=="function"){var a=s;s=function(){var d=Bi(l);a.call(d)}}var l=kp(t,s,n,0,null,!1,!1,"",Id);return n._reactRootContainer=l,n[Wn]=l.current,xs(n.nodeType===8?n.parentNode:n),Ft(),l}for(;i=n.lastChild;)n.removeChild(i);if(typeof s=="function"){var o=s;s=function(){var d=Bi(c);o.call(d)}}var c=sc(n,0,!1,null,null,!1,!1,"",Id);return n._reactRootContainer=c,n[Wn]=c.current,xs(n.nodeType===8?n.parentNode:n),Ft(function(){aa(t,c,r,s)}),c}function ca(n,t,r,s,i){var a=r._reactRootContainer;if(a){var l=a;if(typeof i=="function"){var o=i;i=function(){var c=Bi(l);o.call(c)}}aa(t,l,n,i)}else l=Rg(r,t,n,i,s);return Bi(l)}Zu=function(n){switch(n.tag){case 3:var t=n.stateNode;if(t.current.memoizedState.isDehydrated){var r=Xr(t.pendingLanes);r!==0&&(Co(t,r|1),an(t,Ee()),!(oe&6)&&(_r=Ee()+500,jt()))}break;case 13:Ft(function(){var s=Kn(n,1);if(s!==null){var i=Ye();Ln(s,n,1,i)}}),ic(n,1)}};To=function(n){if(n.tag===13){var t=Kn(n,134217728);if(t!==null){var r=Ye();Ln(t,n,134217728,r)}ic(n,134217728)}};eh=function(n){if(n.tag===13){var t=ht(n),r=Kn(n,t);if(r!==null){var s=Ye();Ln(r,n,t,s)}ic(n,t)}};nh=function(){return pe};th=function(n,t){var r=pe;try{return pe=n,t()}finally{pe=r}};gl=function(n,t,r){switch(t){case"input":if(cl(n,r),t=r.name,r.type==="radio"&&t!=null){for(r=n;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var s=r[t];if(s!==n&&s.form===n.form){var i=Zi(s);if(!i)throw Error(W(90));Pu(s),cl(s,i)}}}break;case"textarea":zu(n,r);break;case"select":t=r.value,t!=null&&mr(n,!!r.multiple,t,!1)}};Bu=ec;qu=Ft;var Pg={usingClientEntryPoint:!1,Events:[Rs,nr,Zi,Vu,$u,ec]},Ur={findFiberByHostInstance:Tt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ig={bundleType:Ur.bundleType,version:Ur.version,rendererPackageName:Ur.rendererPackageName,rendererConfig:Ur.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qn.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Wu(n),n===null?null:n.stateNode},findFiberByHostInstance:Ur.findFiberByHostInstance||Og,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ni=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ni.isDisabled&&ni.supportsFiber)try{Qi=ni.inject(Ig),zn=ni}catch{}}pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pg;pn.createPortal=function(n,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lc(t))throw Error(W(200));return Eg(n,t,null,r)};pn.createRoot=function(n,t){if(!lc(n))throw Error(W(299));var r=!1,s="",i=wp;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=sc(n,1,!1,null,null,r,!1,s,i),n[Wn]=t.current,xs(n.nodeType===8?n.parentNode:n),new ac(t)};pn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var t=n._reactInternals;if(t===void 0)throw typeof n.render=="function"?Error(W(188)):(n=Object.keys(n).join(","),Error(W(268,n)));return n=Wu(t),n=n===null?null:n.stateNode,n};pn.flushSync=function(n){return Ft(n)};pn.hydrate=function(n,t,r){if(!oa(t))throw Error(W(200));return ca(null,n,t,!0,r)};pn.hydrateRoot=function(n,t,r){if(!lc(n))throw Error(W(405));var s=r!=null&&r.hydratedSources||null,i=!1,a="",l=wp;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),t=kp(t,null,n,1,r??null,i,!1,a,l),n[Wn]=t.current,xs(n),s)for(n=0;n<s.length;n++)r=s[n],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new la(t)};pn.render=function(n,t,r){if(!oa(t))throw Error(W(200));return ca(null,n,t,!1,r)};pn.unmountComponentAtNode=function(n){if(!oa(n))throw Error(W(40));return n._reactRootContainer?(Ft(function(){ca(null,null,n,!1,function(){n._reactRootContainer=null,n[Wn]=null})}),!0):!1};pn.unstable_batchedUpdates=ec;pn.unstable_renderSubtreeIntoContainer=function(n,t,r,s){if(!oa(r))throw Error(W(200));if(n==null||n._reactInternals===void 0)throw Error(W(38));return ca(n,t,r,!1,s)};pn.version="18.3.1-next-f1338f8080-20240426";function Sp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sp)}catch(n){console.error(n)}}Sp(),Su.exports=pn;var zg=Su.exports,zd=zg;tl.createRoot=zd.createRoot,tl.hydrateRoot=zd.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cs(){return Cs=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(n[s]=r[s])}return n},Cs.apply(this,arguments)}var st;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(st||(st={}));const Md="popstate";function Mg(n){n===void 0&&(n={});function t(s,i){let{pathname:a,search:l,hash:o}=s.location;return Ql("",{pathname:a,search:l,hash:o},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function r(s,i){return typeof i=="string"?i:qi(i)}return Fg(t,r,null,n)}function Re(n,t){if(n===!1||n===null||typeof n>"u")throw new Error(t)}function oc(n,t){if(!n){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Ag(){return Math.random().toString(36).substr(2,8)}function Ad(n,t){return{usr:n.state,key:n.key,idx:t}}function Ql(n,t,r,s){return r===void 0&&(r=null),Cs({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof t=="string"?Rr(t):t,{state:r,key:t&&t.key||s||Ag()})}function qi(n){let{pathname:t="/",search:r="",hash:s=""}=n;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),s&&s!=="#"&&(t+=s.charAt(0)==="#"?s:"#"+s),t}function Rr(n){let t={};if(n){let r=n.indexOf("#");r>=0&&(t.hash=n.substr(r),n=n.substr(0,r));let s=n.indexOf("?");s>=0&&(t.search=n.substr(s),n=n.substr(0,s)),n&&(t.pathname=n)}return t}function Fg(n,t,r,s){s===void 0&&(s={});let{window:i=document.defaultView,v5Compat:a=!1}=s,l=i.history,o=st.Pop,c=null,d=u();d==null&&(d=0,l.replaceState(Cs({},l.state,{idx:d}),""));function u(){return(l.state||{idx:null}).idx}function h(){o=st.Pop;let j=u(),f=j==null?null:j-d;d=j,c&&c({action:o,location:y.location,delta:f})}function g(j,f){o=st.Push;let m=Ql(y.location,j,f);d=u()+1;let x=Ad(m,d),C=y.createHref(m);try{l.pushState(x,"",C)}catch(v){if(v instanceof DOMException&&v.name==="DataCloneError")throw v;i.location.assign(C)}a&&c&&c({action:o,location:y.location,delta:1})}function b(j,f){o=st.Replace;let m=Ql(y.location,j,f);d=u();let x=Ad(m,d),C=y.createHref(m);l.replaceState(x,"",C),a&&c&&c({action:o,location:y.location,delta:0})}function N(j){let f=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof j=="string"?j:qi(j);return m=m.replace(/ $/,"%20"),Re(f,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,f)}let y={get action(){return o},get location(){return n(i,l)},listen(j){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Md,h),c=j,()=>{i.removeEventListener(Md,h),c=null}},createHref(j){return t(i,j)},createURL:N,encodeLocation(j){let f=N(j);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:b,go(j){return l.go(j)}};return y}var Fd;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(Fd||(Fd={}));function Dg(n,t,r){return r===void 0&&(r="/"),Vg(n,t,r)}function Vg(n,t,r,s){let i=typeof t=="string"?Rr(t):t,a=cc(i.pathname||"/",r);if(a==null)return null;let l=Cp(n);$g(l);let o=null;for(let c=0;o==null&&c<l.length;++c){let d=Zg(a);o=Xg(l[c],d)}return o}function Cp(n,t,r,s){t===void 0&&(t=[]),r===void 0&&(r=[]),s===void 0&&(s="");let i=(a,l,o)=>{let c={relativePath:o===void 0?a.path||"":o,caseSensitive:a.caseSensitive===!0,childrenIndex:l,route:a};c.relativePath.startsWith("/")&&(Re(c.relativePath.startsWith(s),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(s.length));let d=ft([s,c.relativePath]),u=r.concat(c);a.children&&a.children.length>0&&(Re(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Cp(a.children,t,u,d)),!(a.path==null&&!a.index)&&t.push({path:d,score:Gg(d,a.index),routesMeta:u})};return n.forEach((a,l)=>{var o;if(a.path===""||!((o=a.path)!=null&&o.includes("?")))i(a,l);else for(let c of Tp(a.path))i(a,l,c)}),t}function Tp(n){let t=n.split("/");if(t.length===0)return[];let[r,...s]=t,i=r.endsWith("?"),a=r.replace(/\?$/,"");if(s.length===0)return i?[a,""]:[a];let l=Tp(s.join("/")),o=[];return o.push(...l.map(c=>c===""?a:[a,c].join("/"))),i&&o.push(...l),o.map(c=>n.startsWith("/")&&c===""?"/":c)}function $g(n){n.sort((t,r)=>t.score!==r.score?r.score-t.score:Qg(t.routesMeta.map(s=>s.childrenIndex),r.routesMeta.map(s=>s.childrenIndex)))}const Bg=/^:[\w-]+$/,qg=3,Hg=2,Ug=1,Wg=10,Kg=-2,Dd=n=>n==="*";function Gg(n,t){let r=n.split("/"),s=r.length;return r.some(Dd)&&(s+=Kg),t&&(s+=Hg),r.filter(i=>!Dd(i)).reduce((i,a)=>i+(Bg.test(a)?qg:a===""?Ug:Wg),s)}function Qg(n,t){return n.length===t.length&&n.slice(0,-1).every((s,i)=>s===t[i])?n[n.length-1]-t[t.length-1]:0}function Xg(n,t,r){let{routesMeta:s}=n,i={},a="/",l=[];for(let o=0;o<s.length;++o){let c=s[o],d=o===s.length-1,u=a==="/"?t:t.slice(a.length)||"/",h=Yg({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},u),g=c.route;if(!h)return null;Object.assign(i,h.params),l.push({params:i,pathname:ft([a,h.pathname]),pathnameBase:sx(ft([a,h.pathnameBase])),route:g}),h.pathnameBase!=="/"&&(a=ft([a,h.pathnameBase]))}return l}function Yg(n,t){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[r,s]=Jg(n.path,n.caseSensitive,n.end),i=t.match(r);if(!i)return null;let a=i[0],l=a.replace(/(.)\/+$/,"$1"),o=i.slice(1);return{params:s.reduce((d,u,h)=>{let{paramName:g,isOptional:b}=u;if(g==="*"){let y=o[h]||"";l=a.slice(0,a.length-y.length).replace(/(.)\/+$/,"$1")}const N=o[h];return b&&!N?d[g]=void 0:d[g]=(N||"").replace(/%2F/g,"/"),d},{}),pathname:a,pathnameBase:l,pattern:n}}function Jg(n,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),oc(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let s=[],i="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,o,c)=>(s.push({paramName:o,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(s.push({paramName:"*"}),i+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":n!==""&&n!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),s]}function Zg(n){try{return n.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return oc(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),n}}function cc(n,t){if(t==="/")return n;if(!n.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,s=n.charAt(r);return s&&s!=="/"?null:n.slice(r)||"/"}const ex=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,nx=n=>ex.test(n);function tx(n,t){t===void 0&&(t="/");let{pathname:r,search:s="",hash:i=""}=typeof n=="string"?Rr(n):n,a;if(r)if(nx(r))a=r;else{if(r.includes("//")){let l=r;r=r.replace(/\/\/+/g,"/"),oc(!1,"Pathnames cannot have embedded double slashes - normalizing "+(l+" -> "+r))}r.startsWith("/")?a=Vd(r.substring(1),"/"):a=Vd(r,t)}else a=t;return{pathname:a,search:ix(s),hash:ax(i)}}function Vd(n,t){let r=t.replace(/\/+$/,"").split("/");return n.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function Fa(n,t,r,s){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function rx(n){return n.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function _p(n,t){let r=rx(n);return t?r.map((s,i)=>i===r.length-1?s.pathname:s.pathnameBase):r.map(s=>s.pathnameBase)}function Lp(n,t,r,s){s===void 0&&(s=!1);let i;typeof n=="string"?i=Rr(n):(i=Cs({},n),Re(!i.pathname||!i.pathname.includes("?"),Fa("?","pathname","search",i)),Re(!i.pathname||!i.pathname.includes("#"),Fa("#","pathname","hash",i)),Re(!i.search||!i.search.includes("#"),Fa("#","search","hash",i)));let a=n===""||i.pathname==="",l=a?"/":i.pathname,o;if(l==null)o=r;else{let h=t.length-1;if(!s&&l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),h-=1;i.pathname=g.join("/")}o=h>=0?t[h]:"/"}let c=tx(i,o),d=l&&l!=="/"&&l.endsWith("/"),u=(a||l===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(d||u)&&(c.pathname+="/"),c}const ft=n=>n.join("/").replace(/\/\/+/g,"/"),sx=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),ix=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,ax=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function lx(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const Ep=["post","put","patch","delete"];new Set(Ep);const ox=["get",...Ep];new Set(ox);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ts(){return Ts=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(n[s]=r[s])}return n},Ts.apply(this,arguments)}const dc=p.createContext(null),cx=p.createContext(null),$t=p.createContext(null),da=p.createContext(null),Nt=p.createContext({outlet:null,matches:[],isDataRoute:!1}),Op=p.createContext(null);function dx(n,t){let{relative:r}=t===void 0?{}:t;Is()||Re(!1);let{basename:s,navigator:i}=p.useContext($t),{hash:a,pathname:l,search:o}=Ip(n,{relative:r}),c=l;return s!=="/"&&(c=l==="/"?s:ft([s,l])),i.createHref({pathname:c,search:o,hash:a})}function Is(){return p.useContext(da)!=null}function zs(){return Is()||Re(!1),p.useContext(da).location}function Rp(n){p.useContext($t).static||p.useLayoutEffect(n)}function Pp(){let{isDataRoute:n}=p.useContext(Nt);return n?wx():ux()}function ux(){Is()||Re(!1);let n=p.useContext(dc),{basename:t,future:r,navigator:s}=p.useContext($t),{matches:i}=p.useContext(Nt),{pathname:a}=zs(),l=JSON.stringify(_p(i,r.v7_relativeSplatPath)),o=p.useRef(!1);return Rp(()=>{o.current=!0}),p.useCallback(function(d,u){if(u===void 0&&(u={}),!o.current)return;if(typeof d=="number"){s.go(d);return}let h=Lp(d,JSON.parse(l),a,u.relative==="path");n==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:ft([t,h.pathname])),(u.replace?s.replace:s.push)(h,u.state,u)},[t,s,l,a,n])}function hx(){let{matches:n}=p.useContext(Nt),t=n[n.length-1];return t?t.params:{}}function Ip(n,t){let{relative:r}=t===void 0?{}:t,{future:s}=p.useContext($t),{matches:i}=p.useContext(Nt),{pathname:a}=zs(),l=JSON.stringify(_p(i,s.v7_relativeSplatPath));return p.useMemo(()=>Lp(n,JSON.parse(l),a,r==="path"),[n,l,a,r])}function px(n,t){return fx(n,t)}function fx(n,t,r,s){Is()||Re(!1);let{navigator:i}=p.useContext($t),{matches:a}=p.useContext(Nt),l=a[a.length-1],o=l?l.params:{};l&&l.pathname;let c=l?l.pathnameBase:"/";l&&l.route;let d=zs(),u;if(t){var h;let j=typeof t=="string"?Rr(t):t;c==="/"||(h=j.pathname)!=null&&h.startsWith(c)||Re(!1),u=j}else u=d;let g=u.pathname||"/",b=g;if(c!=="/"){let j=c.replace(/^\//,"").split("/");b="/"+g.replace(/^\//,"").split("/").slice(j.length).join("/")}let N=Dg(n,{pathname:b}),y=yx(N&&N.map(j=>Object.assign({},j,{params:Object.assign({},o,j.params),pathname:ft([c,i.encodeLocation?i.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?c:ft([c,i.encodeLocation?i.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),a,r,s);return t&&y?p.createElement(da.Provider,{value:{location:Ts({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:st.Pop}},y):y}function mx(){let n=kx(),t=lx(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),r=n instanceof Error?n.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return p.createElement(p.Fragment,null,p.createElement("h2",null,"Unexpected Application Error!"),p.createElement("h3",{style:{fontStyle:"italic"}},t),r?p.createElement("pre",{style:i},r):null,null)}const gx=p.createElement(mx,null);class xx extends p.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?p.createElement(Nt.Provider,{value:this.props.routeContext},p.createElement(Op.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function vx(n){let{routeContext:t,match:r,children:s}=n,i=p.useContext(dc);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),p.createElement(Nt.Provider,{value:t},s)}function yx(n,t,r,s){var i;if(t===void 0&&(t=[]),r===void 0&&(r=null),s===void 0&&(s=null),n==null){var a;if(!r)return null;if(r.errors)n=r.matches;else if((a=s)!=null&&a.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)n=r.matches;else return null}let l=n,o=(i=r)==null?void 0:i.errors;if(o!=null){let u=l.findIndex(h=>h.route.id&&(o==null?void 0:o[h.route.id])!==void 0);u>=0||Re(!1),l=l.slice(0,Math.min(l.length,u+1))}let c=!1,d=-1;if(r&&s&&s.v7_partialHydration)for(let u=0;u<l.length;u++){let h=l[u];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(d=u),h.route.id){let{loaderData:g,errors:b}=r,N=h.route.loader&&g[h.route.id]===void 0&&(!b||b[h.route.id]===void 0);if(h.route.lazy||N){c=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((u,h,g)=>{let b,N=!1,y=null,j=null;r&&(b=o&&h.route.id?o[h.route.id]:void 0,y=h.route.errorElement||gx,c&&(d<0&&g===0?(Sx("route-fallback"),N=!0,j=null):d===g&&(N=!0,j=h.route.hydrateFallbackElement||null)));let f=t.concat(l.slice(0,g+1)),m=()=>{let x;return b?x=y:N?x=j:h.route.Component?x=p.createElement(h.route.Component,null):h.route.element?x=h.route.element:x=u,p.createElement(vx,{match:h,routeContext:{outlet:u,matches:f,isDataRoute:r!=null},children:x})};return r&&(h.route.ErrorBoundary||h.route.errorElement||g===0)?p.createElement(xx,{location:r.location,revalidation:r.revalidation,component:y,error:b,children:m(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):m()},null)}var zp=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(zp||{}),Mp=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(Mp||{});function jx(n){let t=p.useContext(dc);return t||Re(!1),t}function Nx(n){let t=p.useContext(cx);return t||Re(!1),t}function bx(n){let t=p.useContext(Nt);return t||Re(!1),t}function Ap(n){let t=bx(),r=t.matches[t.matches.length-1];return r.route.id||Re(!1),r.route.id}function kx(){var n;let t=p.useContext(Op),r=Nx(),s=Ap();return t!==void 0?t:(n=r.errors)==null?void 0:n[s]}function wx(){let{router:n}=jx(zp.UseNavigateStable),t=Ap(Mp.UseNavigateStable),r=p.useRef(!1);return Rp(()=>{r.current=!0}),p.useCallback(function(i,a){a===void 0&&(a={}),r.current&&(typeof i=="number"?n.navigate(i):n.navigate(i,Ts({fromRouteId:t},a)))},[n,t])}const $d={};function Sx(n,t,r){$d[n]||($d[n]=!0)}function Cx(n,t){n==null||n.v7_startTransition,n==null||n.v7_relativeSplatPath}function le(n){Re(!1)}function Tx(n){let{basename:t="/",children:r=null,location:s,navigationType:i=st.Pop,navigator:a,static:l=!1,future:o}=n;Is()&&Re(!1);let c=t.replace(/^\/*/,"/"),d=p.useMemo(()=>({basename:c,navigator:a,static:l,future:Ts({v7_relativeSplatPath:!1},o)}),[c,o,a,l]);typeof s=="string"&&(s=Rr(s));let{pathname:u="/",search:h="",hash:g="",state:b=null,key:N="default"}=s,y=p.useMemo(()=>{let j=cc(u,c);return j==null?null:{location:{pathname:j,search:h,hash:g,state:b,key:N},navigationType:i}},[c,u,h,g,b,N,i]);return y==null?null:p.createElement($t.Provider,{value:d},p.createElement(da.Provider,{children:r,value:y}))}function _x(n){let{children:t,location:r}=n;return px(Xl(t),r)}new Promise(()=>{});function Xl(n,t){t===void 0&&(t=[]);let r=[];return p.Children.forEach(n,(s,i)=>{if(!p.isValidElement(s))return;let a=[...t,i];if(s.type===p.Fragment){r.push.apply(r,Xl(s.props.children,a));return}s.type!==le&&Re(!1),!s.props.index||!s.props.children||Re(!1);let l={id:s.props.id||a.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(l.children=Xl(s.props.children,a)),r.push(l)}),r}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yl(){return Yl=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(n[s]=r[s])}return n},Yl.apply(this,arguments)}function Lx(n,t){if(n==null)return{};var r={},s=Object.keys(n),i,a;for(a=0;a<s.length;a++)i=s[a],!(t.indexOf(i)>=0)&&(r[i]=n[i]);return r}function Ex(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function Ox(n,t){return n.button===0&&(!t||t==="_self")&&!Ex(n)}const Rx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Px="6";try{window.__reactRouterVersion=Px}catch{}const Ix="startTransition",Bd=wf[Ix];function zx(n){let{basename:t,children:r,future:s,window:i}=n,a=p.useRef();a.current==null&&(a.current=Mg({window:i,v5Compat:!0}));let l=a.current,[o,c]=p.useState({action:l.action,location:l.location}),{v7_startTransition:d}=s||{},u=p.useCallback(h=>{d&&Bd?Bd(()=>c(h)):c(h)},[c,d]);return p.useLayoutEffect(()=>l.listen(u),[l,u]),p.useEffect(()=>Cx(s),[s]),p.createElement(Tx,{basename:t,children:r,location:o.location,navigationType:o.action,navigator:l,future:s})}const Mx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ax=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Vn=p.forwardRef(function(t,r){let{onClick:s,relative:i,reloadDocument:a,replace:l,state:o,target:c,to:d,preventScrollReset:u,viewTransition:h}=t,g=Lx(t,Rx),{basename:b}=p.useContext($t),N,y=!1;if(typeof d=="string"&&Ax.test(d)&&(N=d,Mx))try{let x=new URL(window.location.href),C=d.startsWith("//")?new URL(x.protocol+d):new URL(d),v=cc(C.pathname,b);C.origin===x.origin&&v!=null?d=v+C.search+C.hash:y=!0}catch{}let j=dx(d,{relative:i}),f=Fx(d,{replace:l,state:o,target:c,preventScrollReset:u,relative:i,viewTransition:h});function m(x){s&&s(x),x.defaultPrevented||f(x)}return p.createElement("a",Yl({},g,{href:N||j,onClick:y||a?s:m,ref:r,target:c}))});var qd;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(qd||(qd={}));var Hd;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(Hd||(Hd={}));function Fx(n,t){let{target:r,replace:s,state:i,preventScrollReset:a,relative:l,viewTransition:o}=t===void 0?{}:t,c=Pp(),d=zs(),u=Ip(n,{relative:l});return p.useCallback(h=>{if(Ox(h,r)){h.preventDefault();let g=s!==void 0?s:qi(d)===qi(u);c(n,{replace:g,state:i,preventScrollReset:a,relative:l,viewTransition:o})}},[d,c,u,s,i,r,n,a,l,o])}/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Dx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),G=(n,t)=>{const r=p.forwardRef(({color:s="currentColor",size:i=24,strokeWidth:a=2,absoluteStrokeWidth:l,className:o="",children:c,...d},u)=>p.createElement("svg",{ref:u,...Dx,width:i,height:i,stroke:s,strokeWidth:l?Number(a)*24/Number(i):a,className:["lucide",`lucide-${Vx(n)}`,o].join(" "),...d},[...t.map(([h,g])=>p.createElement(h,g)),...Array.isArray(c)?c:[c]]));return r.displayName=`${n}`,r};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wr=G("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bn=G("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=G("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=G("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx=G("ArrowUpDown",[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=G("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=G("BarChart2",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hi=G("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=G("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=G("Bug",[["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",key:"xs1cw7"}],["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4",key:"k3fwyw"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const en=G("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uc=G("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ms=G("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=G("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hn=G("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hc=G("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jl=G("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=G("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vi=G("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pc=G("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=G("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dp=G("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=G("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=G("FileCode",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const or=G("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=G("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=G("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=G("GitMerge",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fc=G("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=G("Grid3x3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=G("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=G("HeartHandshake",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",key:"12sd6o"}],["path",{d:"m18 15-2-2",key:"60u0ii"}],["path",{d:"m15 18-2-2",key:"6p76be"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=G("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=G("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=G("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const it=G("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mc=G("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=G("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zl=G("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gc=G("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=G("ListChecks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=G("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=G("Map",[["polygon",{points:"3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21",key:"ok2ie8"}],["line",{x1:"9",x2:"9",y1:"3",y2:"18",key:"w34qz5"}],["line",{x1:"15",x2:"15",y1:"6",y2:"21",key:"volv9a"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=G("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=G("MousePointer2",[["path",{d:"m4 4 7.07 17 2.51-7.39L21 11.07z",key:"1vqm48"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=G("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pr=G("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd=G("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ze=G("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ui=G("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=G("Puzzle",[["path",{d:"M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z",key:"i0oyt7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xc=G("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mn=G("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=G("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bt=G("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=G("ShieldCheck",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=G("SkipBack",[["polygon",{points:"19 20 9 12 19 4 19 20",key:"o2sva"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5",key:"1ocqjk"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ir=G("SkipForward",[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ti=G("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=G("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=G("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=G("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eo=G("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const no=G("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zr=G("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=G("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=G("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ut=G("Wand2",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z",key:"1bcowg"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nr=G("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const As=G("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mr=G("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function mv(){const n=zs(),[t,r]=p.useState(!1),s=n.pathname==="/"?"home":n.pathname.replace("/","").replace("_",""),i=()=>r(!t),a=()=>r(!1);p.useEffect(()=>{const o=()=>{window.innerWidth>1024&&r(!1)};return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[]),p.useEffect(()=>{t?document.body.style.overflow="hidden":document.body.style.overflow=""},[t]);const l=({to:o,icon:c,children:d,pageName:u})=>{const h=s===u;return e.jsxs(Vn,{to:o,className:`nav-item ${h?"active":""}`,onClick:a,children:[e.jsx(c,{}),e.jsx("span",{children:d})]})};return e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"mobile-menu-toggle",id:"mobileMenuToggle","aria-label":"Toggle menu",onClick:i,children:t?e.jsx(As,{}):e.jsx(rv,{})}),e.jsx("div",{className:`sidebar-overlay ${t?"active":""}`,onClick:a}),e.jsxs("aside",{className:`sidebar ${t?"active":""}`,id:"sidebar",children:[e.jsx("div",{className:"sidebar-header",children:e.jsx(Vn,{to:"/",className:"logo-wrapper",onClick:a,children:e.jsx("span",{className:"logo-text",children:"DSA Visualizer"})})}),e.jsxs("nav",{className:"sidebar-nav",children:[e.jsxs("div",{className:"nav-section",children:[e.jsx("div",{className:"nav-section-title",children:"Explore"}),e.jsx(l,{to:"/",icon:nv,pageName:"home",children:"Home"}),e.jsx(l,{to:"/algorithms",icon:Kx,pageName:"algorithms",children:"Algorithms"}),e.jsx(l,{to:"/practice",icon:zr,pageName:"practice",children:"Practice"}),e.jsx(l,{to:"/compare",icon:Vp,pageName:"compare",children:"Compare"}),e.jsx(l,{to:"/sandbox",icon:eo,pageName:"sandbox",children:"Sandbox"}),e.jsx(l,{to:"/resume-reviewer",icon:or,pageName:"resume-reviewer",children:"Resume Reviewer"})]}),e.jsxs("div",{className:"nav-section",children:[e.jsx("div",{className:"nav-section-title",children:"More"}),e.jsx(l,{to:"/contact",icon:$p,pageName:"contact",children:"Contact"}),e.jsx(l,{to:"/contributions",icon:Zx,pageName:"contributions",children:"Contributions"})]})]}),e.jsxs("div",{className:"sidebar-footer",children:[e.jsxs("div",{className:"social-links-sidebar",children:[e.jsx("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",title:"GitHub",children:e.jsx(fc,{})}),e.jsx("a",{href:"https://www.linkedin.com/in/abdullah-mahfouz-5188b1306/",target:"_blank",rel:"noopener noreferrer",title:"LinkedIn",children:e.jsx(gc,{})})]}),e.jsx("p",{className:"copyright",children:"© 2026 Abdullah Mahfouz"})]})]})]})}function gv(){return e.jsx("footer",{className:"main-footer",children:e.jsxs("div",{className:"footer-content",children:[e.jsxs("div",{className:"footer-social",children:[e.jsxs("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",className:"footer-link",children:[e.jsx(fc,{}),e.jsx("span",{children:"GitHub"})]}),e.jsxs("a",{href:"https://www.linkedin.com/in/abdullah-mahfouz-5188b1306/",target:"_blank",rel:"noopener noreferrer",className:"footer-link",children:[e.jsx(gc,{}),e.jsx("span",{children:"LinkedIn"})]})]}),e.jsx("p",{className:"footer-copyright",children:"© 2026 Abdullah Mahfouz"})]})})}const Le=({children:n,size:t,className:r,...s})=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:t||24,height:t||24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.75,strokeLinecap:"round",strokeLinejoin:"round",className:r,...s,children:n}),Bp=n=>e.jsxs(Le,{...n,children:[e.jsx("rect",{x:"4",y:"2",width:"16",height:"5",rx:"1.5"}),e.jsx("rect",{x:"4",y:"9.5",width:"16",height:"5",rx:"1.5"}),e.jsx("rect",{x:"4",y:"17",width:"16",height:"5",rx:"1.5"})]}),qp=n=>e.jsxs(Le,{...n,children:[e.jsx("rect",{x:"1.5",y:"6",width:"5",height:"9",rx:"1.5"}),e.jsx("rect",{x:"9.5",y:"6",width:"5",height:"9",rx:"1.5"}),e.jsx("rect",{x:"17.5",y:"6",width:"5",height:"9",rx:"1.5"}),e.jsx("path",{d:"M4 19h16"}),e.jsx("path",{d:"M17.5 17l2.5 2-2.5 2"})]}),Hp=n=>e.jsxs(Le,{...n,children:[e.jsx("circle",{cx:"4",cy:"12",r:"2.5"}),e.jsx("circle",{cx:"12",cy:"12",r:"2.5"}),e.jsx("circle",{cx:"20",cy:"12",r:"2.5"}),e.jsx("path",{d:"M6.5 12h3"}),e.jsx("path",{d:"M14.5 12h3"}),e.jsx("path",{d:"M8.5 10.5l1 1.5-1 1.5"}),e.jsx("path",{d:"M16.5 10.5l1 1.5-1 1.5"})]}),xv=n=>e.jsxs(Le,{...n,children:[e.jsx("circle",{cx:"3",cy:"19",r:"1.8"}),e.jsx("circle",{cx:"9",cy:"19",r:"1.8"}),e.jsx("circle",{cx:"15",cy:"19",r:"1.8"}),e.jsx("circle",{cx:"21",cy:"19",r:"1.8"}),e.jsx("line",{x1:"4.8",y1:"19",x2:"7.2",y2:"19"}),e.jsx("line",{x1:"10.8",y1:"19",x2:"13.2",y2:"19"}),e.jsx("line",{x1:"16.8",y1:"19",x2:"19.2",y2:"19"}),e.jsx("circle",{cx:"3",cy:"12",r:"1.8"}),e.jsx("circle",{cx:"15",cy:"12",r:"1.8"}),e.jsx("line",{x1:"4.8",y1:"12",x2:"13.2",y2:"12"}),e.jsx("circle",{cx:"3",cy:"5",r:"1.8"}),e.jsx("circle",{cx:"21",cy:"5",r:"1.8"}),e.jsx("line",{x1:"4.8",y1:"5",x2:"19.2",y2:"5"}),e.jsx("line",{x1:"3",y1:"6.8",x2:"3",y2:"10.2"}),e.jsx("line",{x1:"3",y1:"13.8",x2:"3",y2:"17.2"}),e.jsx("line",{x1:"15",y1:"13.8",x2:"15",y2:"17.2"}),e.jsx("line",{x1:"21",y1:"6.8",x2:"21",y2:"17.2"})]}),Up=n=>e.jsxs(Le,{...n,children:[e.jsx("rect",{x:"13",y:"2",width:"9",height:"4.5",rx:"1"}),e.jsx("rect",{x:"13",y:"8.5",width:"9",height:"4.5",rx:"1"}),e.jsx("rect",{x:"13",y:"15",width:"9",height:"4.5",rx:"1"}),e.jsx("circle",{cx:"3.5",cy:"4.25",r:"1.5"}),e.jsx("circle",{cx:"3.5",cy:"10.75",r:"1.5"}),e.jsx("circle",{cx:"3.5",cy:"17.25",r:"1.5"}),e.jsx("path",{d:"M5 4.25h6.5"}),e.jsx("path",{d:"M11.5 4.25l1.5 6.5"}),e.jsx("path",{d:"M5 10.75h8"}),e.jsx("path",{d:"M5 17.25h6.5"}),e.jsx("path",{d:"M11.5 17.25l1.5-3"})]}),vv=n=>e.jsxs(Le,{...n,children:[e.jsx("rect",{x:"2",y:"3",width:"6",height:"5",rx:"1"}),e.jsx("rect",{x:"2",y:"10",width:"6",height:"5",rx:"1"}),e.jsx("rect",{x:"2",y:"17",width:"6",height:"5",rx:"1"}),e.jsx("line",{x1:"8",y1:"5.5",x2:"11",y2:"5.5"}),e.jsx("circle",{cx:"13",cy:"5.5",r:"1.8"}),e.jsx("line",{x1:"14.8",y1:"5.5",x2:"17.5",y2:"5.5"}),e.jsx("circle",{cx:"19.5",cy:"5.5",r:"1.8"}),e.jsx("line",{x1:"8",y1:"12.5",x2:"11",y2:"12.5"}),e.jsx("circle",{cx:"13",cy:"12.5",r:"1.8"}),e.jsx("line",{x1:"8",y1:"19.5",x2:"10",y2:"19.5"}),e.jsx("circle",{cx:"10.5",cy:"19.5",r:"0.5",fill:"currentColor"})]}),Qd=n=>e.jsxs(Le,{...n,children:[e.jsx("rect",{x:"3",y:"8",width:"3.5",height:"8",rx:"1"}),e.jsx("rect",{x:"7.5",y:"8",width:"3.5",height:"8",rx:"1"}),e.jsx("rect",{x:"12",y:"8",width:"3.5",height:"8",rx:"1"}),e.jsx("rect",{x:"16.5",y:"8",width:"3.5",height:"8",rx:"1"}),e.jsx("line",{x1:"4",y1:"10",x2:"5.5",y2:"14"}),e.jsx("line",{x1:"5.5",y1:"10",x2:"4",y2:"14"}),e.jsx("path",{d:"M4.75 6.5 C4.75 3 9.25 3 9.25 6.5"}),e.jsx("path",{d:"M8.25 5l1 1.5-1.5 0.5"})]}),yv=n=>e.jsxs(Le,{...n,children:[e.jsx("circle",{cx:"12",cy:"4",r:"2.5"}),e.jsx("circle",{cx:"6",cy:"13",r:"2.5"}),e.jsx("circle",{cx:"18",cy:"13",r:"2.5"}),e.jsx("circle",{cx:"3",cy:"21",r:"1.8"}),e.jsx("circle",{cx:"9",cy:"21",r:"1.8"}),e.jsx("circle",{cx:"15",cy:"21",r:"1.8"}),e.jsx("circle",{cx:"21",cy:"21",r:"1.8"}),e.jsx("line",{x1:"10.2",y1:"5.8",x2:"7.8",y2:"11.2"}),e.jsx("line",{x1:"13.8",y1:"5.8",x2:"16.2",y2:"11.2"}),e.jsx("line",{x1:"4.5",y1:"14.8",x2:"3.5",y2:"19.2"}),e.jsx("line",{x1:"7.5",y1:"14.8",x2:"8.5",y2:"19.2"}),e.jsx("line",{x1:"16.5",y1:"14.8",x2:"15.5",y2:"19.2"}),e.jsx("line",{x1:"19.5",y1:"14.8",x2:"20.5",y2:"19.2"})]}),Wp=n=>e.jsxs(Le,{...n,children:[e.jsx("circle",{cx:"12",cy:"4.5",r:"2.5"}),e.jsx("circle",{cx:"7",cy:"13",r:"2.5"}),e.jsx("circle",{cx:"17",cy:"13",r:"2.5"}),e.jsx("circle",{cx:"4",cy:"20.5",r:"2"}),e.jsx("circle",{cx:"20",cy:"20.5",r:"2"}),e.jsx("line",{x1:"10.3",y1:"6.2",x2:"8.7",y2:"11.3"}),e.jsx("line",{x1:"13.7",y1:"6.2",x2:"15.3",y2:"11.3"}),e.jsx("line",{x1:"5.5",y1:"14.8",x2:"4.8",y2:"18.5"}),e.jsx("line",{x1:"18.5",y1:"14.8",x2:"19.2",y2:"18.5"})]}),jv=n=>e.jsxs(Le,{...n,children:[e.jsx("circle",{cx:"12",cy:"4",r:"2.5"}),e.jsx("circle",{cx:"6.5",cy:"12",r:"2.5"}),e.jsx("circle",{cx:"17.5",cy:"12",r:"2.5"}),e.jsx("circle",{cx:"3.5",cy:"20",r:"2"}),e.jsx("circle",{cx:"9.5",cy:"20",r:"2"}),e.jsx("circle",{cx:"14.5",cy:"20",r:"2"}),e.jsx("circle",{cx:"20.5",cy:"20",r:"2"}),e.jsx("line",{x1:"10.2",y1:"5.7",x2:"8.3",y2:"10.3"}),e.jsx("line",{x1:"13.8",y1:"5.7",x2:"15.7",y2:"10.3"}),e.jsx("line",{x1:"5",y1:"13.8",x2:"4.2",y2:"18"}),e.jsx("line",{x1:"8",y1:"13.8",x2:"8.8",y2:"18"}),e.jsx("line",{x1:"16",y1:"13.8",x2:"15.2",y2:"18"}),e.jsx("line",{x1:"19",y1:"13.8",x2:"19.8",y2:"18"})]}),Nv=n=>e.jsxs(Le,{...n,children:[e.jsx("circle",{cx:"12",cy:"4.5",r:"2.5"}),e.jsx("circle",{cx:"12",cy:"4.5",r:"4",opacity:"0.3"}),e.jsx("circle",{cx:"6",cy:"13",r:"2.5"}),e.jsx("circle",{cx:"18",cy:"13",r:"2.5"}),e.jsx("circle",{cx:"3.5",cy:"20.5",r:"2"}),e.jsx("circle",{cx:"15.5",cy:"20.5",r:"2"}),e.jsx("line",{x1:"10.2",y1:"6.2",x2:"7.8",y2:"11.2"}),e.jsx("line",{x1:"13.8",y1:"6.2",x2:"16.2",y2:"11.2"}),e.jsx("line",{x1:"4.7",y1:"14.8",x2:"3.9",y2:"18.5"}),e.jsx("line",{x1:"16.8",y1:"14.8",x2:"16",y2:"18.5"})]}),bv=n=>e.jsxs(Le,{...n,children:[e.jsx("circle",{cx:"12",cy:"4",r:"2.5"}),e.jsx("circle",{cx:"7",cy:"12",r:"2.5"}),e.jsx("circle",{cx:"18",cy:"10",r:"2.5"}),e.jsx("circle",{cx:"4",cy:"20",r:"2"}),e.jsx("circle",{cx:"10",cy:"19",r:"2"}),e.jsx("circle",{cx:"21",cy:"17.5",r:"2"}),e.jsx("line",{x1:"10.2",y1:"5.7",x2:"8.7",y2:"10.3"}),e.jsx("line",{x1:"13.8",y1:"5.2",x2:"16.2",y2:"8.5"}),e.jsx("line",{x1:"5.5",y1:"13.8",x2:"4.6",y2:"18"}),e.jsx("line",{x1:"8.5",y1:"13.8",x2:"9.5",y2:"17"}),e.jsx("line",{x1:"19.8",y1:"12",x2:"20.6",y2:"15.5"})]}),kv=n=>e.jsxs(Le,{...n,children:[e.jsx("circle",{cx:"12",cy:"3.5",r:"2.5"}),e.jsx("circle",{cx:"6.5",cy:"12",r:"2.5"}),e.jsx("circle",{cx:"17.5",cy:"12",r:"2.5"}),e.jsx("circle",{cx:"3",cy:"20.5",r:"2"}),e.jsx("circle",{cx:"10",cy:"20.5",r:"2"}),e.jsx("circle",{cx:"14",cy:"20.5",r:"2"}),e.jsx("circle",{cx:"21",cy:"20.5",r:"2"}),e.jsx("line",{x1:"10.2",y1:"5.2",x2:"8.3",y2:"10.3"}),e.jsx("line",{x1:"13.8",y1:"5.2",x2:"15.7",y2:"10.3"}),e.jsx("line",{x1:"5",y1:"13.8",x2:"3.7",y2:"18.5"}),e.jsx("line",{x1:"8",y1:"13.8",x2:"9.3",y2:"18.5"}),e.jsx("line",{x1:"16",y1:"13.8",x2:"14.7",y2:"18.5"}),e.jsx("line",{x1:"19",y1:"13.8",x2:"20.3",y2:"18.5"}),e.jsx("path",{d:"M22 8l0-5"}),e.jsx("path",{d:"M20.5 4.5L22 3l1.5 1.5",opacity:"0.5"})]}),wv=n=>e.jsxs(Le,{...n,children:[e.jsx("circle",{cx:"12",cy:"3.5",r:"2.5"}),e.jsx("circle",{cx:"6.5",cy:"12",r:"2.5"}),e.jsx("circle",{cx:"17.5",cy:"12",r:"2.5"}),e.jsx("circle",{cx:"3",cy:"20.5",r:"2"}),e.jsx("circle",{cx:"10",cy:"20.5",r:"2"}),e.jsx("circle",{cx:"14",cy:"20.5",r:"2"}),e.jsx("circle",{cx:"21",cy:"20.5",r:"2"}),e.jsx("line",{x1:"10.2",y1:"5.2",x2:"8.3",y2:"10.3"}),e.jsx("line",{x1:"13.8",y1:"5.2",x2:"15.7",y2:"10.3"}),e.jsx("line",{x1:"5",y1:"13.8",x2:"3.7",y2:"18.5"}),e.jsx("line",{x1:"8",y1:"13.8",x2:"9.3",y2:"18.5"}),e.jsx("line",{x1:"16",y1:"13.8",x2:"14.7",y2:"18.5"}),e.jsx("line",{x1:"19",y1:"13.8",x2:"20.3",y2:"18.5"}),e.jsx("path",{d:"M22 3l0 5"}),e.jsx("path",{d:"M20.5 6.5L22 8l1.5-1.5",opacity:"0.5"})]}),Kp=n=>e.jsxs(Le,{...n,children:[e.jsx("circle",{cx:"12",cy:"3",r:"2"}),e.jsx("circle",{cx:"4",cy:"10",r:"2"}),e.jsx("circle",{cx:"20",cy:"10",r:"2"}),e.jsx("circle",{cx:"6.5",cy:"20",r:"2"}),e.jsx("circle",{cx:"17.5",cy:"20",r:"2"}),e.jsx("line",{x1:"10.2",y1:"4.2",x2:"5.8",y2:"8.8"}),e.jsx("line",{x1:"13.8",y1:"4.2",x2:"18.2",y2:"8.8"}),e.jsx("line",{x1:"4.5",y1:"12",x2:"6",y2:"18"}),e.jsx("line",{x1:"19.5",y1:"12",x2:"18",y2:"18"}),e.jsx("line",{x1:"8.5",y1:"20",x2:"15.5",y2:"20"}),e.jsx("line",{x1:"6",y1:"10.5",x2:"18",y2:"10.5",opacity:"0.4"})]}),Sv=n=>e.jsxs(Le,{...n,children:[e.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"1.5"}),e.jsx("line",{x1:"7",y1:"2",x2:"7",y2:"22"}),e.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"22"}),e.jsx("line",{x1:"17",y1:"2",x2:"17",y2:"22"}),e.jsx("line",{x1:"2",y1:"7",x2:"22",y2:"7"}),e.jsx("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),e.jsx("line",{x1:"2",y1:"17",x2:"22",y2:"17"}),e.jsx("rect",{x:"7.75",y:"2.75",width:"3.5",height:"3.5",rx:"0.5",fill:"currentColor",opacity:"0.25",stroke:"none"}),e.jsx("rect",{x:"12.75",y:"7.75",width:"3.5",height:"3.5",rx:"0.5",fill:"currentColor",opacity:"0.25",stroke:"none"}),e.jsx("rect",{x:"2.75",y:"12.75",width:"3.5",height:"3.5",rx:"0.5",fill:"currentColor",opacity:"0.25",stroke:"none"}),e.jsx("rect",{x:"17.75",y:"17.75",width:"3.5",height:"3.5",rx:"0.5",fill:"currentColor",opacity:"0.25",stroke:"none"})]}),Cv=n=>e.jsxs(Le,{...n,children:[e.jsx("circle",{cx:"4",cy:"5",r:"2"}),e.jsx("circle",{cx:"4",cy:"12",r:"2"}),e.jsx("circle",{cx:"4",cy:"19",r:"2"}),e.jsx("line",{x1:"6",y1:"5",x2:"9",y2:"5"}),e.jsx("line",{x1:"6",y1:"12",x2:"9",y2:"12"}),e.jsx("line",{x1:"6",y1:"19",x2:"9",y2:"19"}),e.jsx("rect",{x:"9.5",y:"2.5",width:"4.5",height:"5",rx:"1"}),e.jsx("rect",{x:"15",y:"2.5",width:"4.5",height:"5",rx:"1"}),e.jsx("rect",{x:"9.5",y:"9.5",width:"4.5",height:"5",rx:"1"}),e.jsx("rect",{x:"15",y:"9.5",width:"4.5",height:"5",rx:"1"}),e.jsx("rect",{x:"20.5",y:"9.5",width:"2",height:"5",rx:"0.5",opacity:"0.4"}),e.jsx("rect",{x:"9.5",y:"16.5",width:"4.5",height:"5",rx:"1"})]}),Tv=n=>e.jsxs(Le,{...n,children:[e.jsx("circle",{cx:"12",cy:"12",r:"2.5"}),e.jsx("circle",{cx:"12",cy:"12",r:"6",opacity:"0.5",strokeDasharray:"2 2"}),e.jsx("circle",{cx:"12",cy:"12",r:"9.5",opacity:"0.25",strokeDasharray:"2 2"}),e.jsx("circle",{cx:"6",cy:"12",r:"1.5"}),e.jsx("circle",{cx:"18",cy:"12",r:"1.5"}),e.jsx("circle",{cx:"12",cy:"6",r:"1.5"}),e.jsx("circle",{cx:"12",cy:"18",r:"1.5"}),e.jsx("circle",{cx:"3.5",cy:"7",r:"1.3",opacity:"0.5"}),e.jsx("circle",{cx:"20.5",cy:"7",r:"1.3",opacity:"0.5"}),e.jsx("circle",{cx:"3.5",cy:"17",r:"1.3",opacity:"0.5"}),e.jsx("circle",{cx:"20.5",cy:"17",r:"1.3",opacity:"0.5"})]}),_v=n=>e.jsxs(Le,{...n,children:[e.jsx("circle",{cx:"12",cy:"3",r:"2"}),e.jsx("circle",{cx:"6",cy:"10",r:"2"}),e.jsx("circle",{cx:"18",cy:"10",r:"2"}),e.jsx("circle",{cx:"3",cy:"17",r:"2"}),e.jsx("circle",{cx:"9",cy:"17",r:"2"}),e.jsx("circle",{cx:"6",cy:"22",r:"1.5"}),e.jsx("line",{x1:"10.5",y1:"4.5",x2:"7.5",y2:"8.5"}),e.jsx("line",{x1:"13.5",y1:"4.5",x2:"16.5",y2:"8.5"}),e.jsx("line",{x1:"4.5",y1:"11.5",x2:"3.5",y2:"15.5"}),e.jsx("line",{x1:"7.5",y1:"11.5",x2:"8.5",y2:"15.5"}),e.jsx("line",{x1:"3.5",y1:"19",x2:"5.2",y2:"20.8"}),e.jsx("path",{d:"M12 3 L6 10 L3 17 L6 22",strokeWidth:"2.5",opacity:"0.25"})]}),Lv=n=>e.jsxs(Le,{...n,children:[e.jsx("rect",{x:"1",y:"9",width:"5",height:"6",rx:"1.5"}),e.jsx("rect",{x:"7.5",y:"9",width:"5",height:"6",rx:"1.5"}),e.jsx("rect",{x:"14",y:"9",width:"5",height:"6",rx:"1.5"}),e.jsx("path",{d:"M19 12h2.5"}),e.jsx("path",{d:"M20.5 10.5l1.5 1.5-1.5 1.5"})]}),Ev=n=>e.jsxs(Le,{...n,children:[e.jsx("circle",{cx:"12",cy:"4",r:"2.5"}),e.jsx("circle",{cx:"5",cy:"13",r:"2.5"}),e.jsx("circle",{cx:"19",cy:"13",r:"2.5"}),e.jsx("circle",{cx:"12",cy:"21",r:"2"}),e.jsx("line",{x1:"10.2",y1:"5.8",x2:"6.8",y2:"11.2"}),e.jsx("line",{x1:"13.8",y1:"5.8",x2:"17.2",y2:"11.2"}),e.jsx("line",{x1:"6.5",y1:"15",x2:"10.5",y2:"19.5"}),e.jsx("line",{x1:"17.5",y1:"15",x2:"13.5",y2:"19.5"})]}),Ov=n=>e.jsxs(Le,{...n,children:[e.jsx("circle",{cx:"12",cy:"3.5",r:"2.5"}),e.jsx("circle",{cx:"6.5",cy:"12",r:"2.5"}),e.jsx("circle",{cx:"17.5",cy:"12",r:"2.5"}),e.jsx("circle",{cx:"3.5",cy:"20.5",r:"2"}),e.jsx("circle",{cx:"9.5",cy:"20.5",r:"2"}),e.jsx("circle",{cx:"14.5",cy:"20.5",r:"2"}),e.jsx("circle",{cx:"20.5",cy:"20.5",r:"2"}),e.jsx("line",{x1:"10.3",y1:"5.2",x2:"8.3",y2:"10.3"}),e.jsx("line",{x1:"13.7",y1:"5.2",x2:"15.7",y2:"10.3"}),e.jsx("line",{x1:"5",y1:"13.8",x2:"4.2",y2:"18.5"}),e.jsx("line",{x1:"8",y1:"13.8",x2:"8.8",y2:"18.5"}),e.jsx("line",{x1:"16",y1:"13.8",x2:"15.2",y2:"18.5"}),e.jsx("line",{x1:"19",y1:"13.8",x2:"19.8",y2:"18.5"})]}),Rv=[{icon:Bp,name:"Stack",desc:"Last in, first out. Push, pop, and peek in constant time.",tag:"O(1)",path:"/stack"},{icon:qp,name:"Queue",desc:"First in, first out. Enqueue and dequeue operations.",tag:"O(1)",path:"/queue"},{icon:Hp,name:"Linked List",desc:"Dynamic chain of nodes with pointer-based traversal.",tag:"O(1) insert",path:"/linkedlist"},{icon:Wp,name:"Binary Search Tree",desc:"Ordered tree for logarithmic search and insertion.",tag:"O(log n)",path:"/bst"},{icon:Up,name:"Hash Table",desc:"Key-value mapping with collision handling strategies.",tag:"O(1) avg",path:"/hashtable_chaining"},{icon:Kp,name:"Graph Algorithms",desc:"BFS, DFS, Dijkstra, and minimum spanning trees.",tag:"Traversal",path:"/dijkstra"}];function Pv(){return e.jsxs(e.Fragment,{children:[e.jsxs("section",{className:"home-hero",children:[e.jsx("div",{className:"home-hero-glow","aria-hidden":"true"}),e.jsxs("div",{className:"home-hero-inner",children:[e.jsxs("h1",{children:["Data Structures",e.jsx("br",{}),e.jsx("span",{children:"& Algorithms"})]}),e.jsx("p",{children:"Visualize operations step by step, interact with live structures, and build real intuition for how algorithms work."}),e.jsxs("div",{className:"home-hero-actions",children:[e.jsxs(Vn,{to:"/algorithms",className:"home-btn home-btn--primary",children:["Explore Visualizers",e.jsx(me,{size:18})]}),e.jsxs(Vn,{to:"/practice",className:"home-btn home-btn--ghost",children:[e.jsx(zr,{size:18}),"Practice Problems"]})]})]})]}),e.jsxs("section",{className:"home-section",children:[e.jsxs("header",{className:"home-section-head",children:[e.jsx("h2",{children:"Featured"}),e.jsxs(Vn,{to:"/algorithms",className:"home-link-muted",children:["All visualizers ",e.jsx(me,{size:15})]})]}),e.jsx("div",{className:"home-cards",children:Rv.map((n,t)=>e.jsxs(Vn,{to:n.path,className:"home-card",style:{"--stagger":`${t*.05}s`},children:[e.jsx("div",{className:"home-card-icon",children:e.jsx(n.icon,{})}),e.jsxs("div",{className:"home-card-body",children:[e.jsx("h3",{children:n.name}),e.jsx("p",{children:n.desc})]}),e.jsx("span",{className:"home-card-tag",children:n.tag})]},n.name))})]}),e.jsx("section",{className:"home-section home-section--alt",children:e.jsxs("div",{className:"home-banner",children:[e.jsxs("div",{children:[e.jsx("h2",{children:"Practice Problems"}),e.jsx("p",{children:"22 curated problems across arrays, trees, graphs, dynamic programming, and more. Built-in editor with instant test feedback."})]}),e.jsxs(Vn,{to:"/practice",className:"home-btn home-btn--primary",children:["Start Practicing",e.jsx(me,{size:18})]})]})})]})}function Iv(){const[n,t]=p.useState(null),r=i=>{t(n===i?null:i)},s=[{id:"linear",name:"Linear Data Structures",icon:Lv,description:"Elements stored sequentially where each element has a unique predecessor and successor. These are the building blocks of computer science — simple to implement yet powerful enough to solve complex problems.",color:"#6366f1",items:[{to:"/stack",icon:Bp,title:"Stack",description:"LIFO (Last In, First Out) — imagine a stack of plates where you can only add or remove from the top. The most recent item is always accessed first. Push adds to top, Pop removes from top. Both operations are O(1) constant time. Essential for: browser back button (page history), undo/redo in editors, function call management in recursion, parsing expressions like (a+b)*c, and depth-first search algorithms.",available:!0},{to:"/queue",icon:qp,title:"Queue",description:"FIFO (First In, First Out) — like waiting in line at a coffee shop. The first person to arrive gets served first. Enqueue adds to the back, Dequeue removes from front. Both O(1) operations. Used everywhere: print job scheduling, CPU task management, breadth-first search (BFS) in graphs, handling requests in web servers, and buffering data streams like video playback.",available:!0},{to:"/linkedlist",icon:Hp,title:"Linked List",description:"A chain of nodes where each node stores data and a pointer to the next node. Unlike arrays, memory doesn't need to be contiguous — nodes can be scattered in memory. Insertion/deletion at known positions is O(1), but finding a position is O(n). Perfect for: implementing stacks/queues, music playlists (next/previous song), browser history, memory allocation in operating systems, and polynomial arithmetic.",available:!0},{to:"/skiplist",icon:xv,title:"Skip List",description:'A probabilistic data structure that uses multiple layers of linked lists with decreasing density. Express lanes skip over elements like a train system — higher levels let you "skip" to your destination faster. Achieves O(log n) average for search, insert, and delete. Used in Redis for sorted sets, LevelDB for in-memory indexing, and concurrent data structures where lock-free operation is critical.',available:!0}]},{id:"hash",name:"Hash-Tables",icon:Up,description:"Revolutionary data structures that use hash functions to map keys to array indices, enabling O(1) average-case lookup, insertion, and deletion. The backbone of databases, caches, and any system requiring fast key-value access.",color:"#10b981",items:[{to:"/hashtable_linear",icon:Qd,title:"Linear Probing",description:'Open addressing collision resolution: when a collision occurs (two keys hash to same index), simply check the next slot, then the next, until an empty slot is found. Pros: excellent cache performance since data is stored contiguously, simple implementation. Cons: can cause "primary clustering" where long runs of occupied slots form, degrading performance. Load factor should stay below 0.7 for efficiency.',available:!0},{to:"/hashtable_quadratic",icon:Qd,title:"Quadratic Probing",description:'Instead of checking consecutive slots, probe at quadratic intervals: 1², 2², 3²... positions away from the original hash. This eliminates primary clustering but can cause "secondary clustering" where keys with the same hash follow the same probe sequence. Table size should be prime and load factor < 0.5 to guarantee finding an empty slot. Used when cache performance is less critical than even distribution.',available:!0},{to:"/hashtable_chaining",icon:vv,title:"Separate Chaining",description:"Each array slot holds a linked list (chain) of all entries that hash to that index. No limit on how many items can be stored — just grow the chains. Handles high load factors gracefully (even > 1.0). Simpler deletion than open addressing. Used in Java's HashMap, Python's dict (with optimization). Trade-off: extra memory for pointers, potentially poor cache performance with long chains.",available:!0}]},{id:"heaps",name:"Priority Queues & Heaps",icon:Ov,description:"Complete binary trees satisfying the heap property — either every parent ≥ children (max-heap) or every parent ≤ children (min-heap). Heaps power priority queues, enabling O(1) access to the extreme element and O(log n) insertions and deletions.",color:"#ec4899",items:[{to:"/minheap",icon:kv,title:"Min Heap",description:`Every parent node is smaller than or equal to its children, so the minimum element is always at the root — accessible in O(1). Insert and extract-min are O(log n) as elements "bubble up" or "sink down" to maintain the heap property. Critical for: Dijkstra's shortest path algorithm, Prim's minimum spanning tree, job schedulers (process with smallest priority runs next), and efficiently finding the k largest elements in a stream.`,available:!0},{to:"/maxheap",icon:wv,title:"Max Heap",description:"The mirror of min-heap: every parent ≥ children, maximum at root. Extract-max in O(1), insert and delete in O(log n). Powers: Heapsort algorithm (in-place O(n log n) sorting), priority queues where highest priority goes first, finding k smallest elements, implementing a median-finding structure (use one min-heap + one max-heap), and bandwidth management in network routers.",available:!0}]},{id:"trees",name:"Binary Trees",icon:Ev,description:"Hierarchical data structures where data flows from a root node down through children. Trees enable O(log n) operations on sorted data and model real-world hierarchies like file systems, organization charts, and decision trees in AI/ML.",color:"#f59e0b",items:[{to:"/binarytree",icon:yv,title:"Binary Tree Traversals",description:"Master the four fundamental ways to visit every node in a binary tree: INORDER (Left→Root→Right) visits nodes in sorted order for BST, used for expression trees; PREORDER (Root→Left→Right) processes root first, perfect for copying trees or creating prefix expressions; POSTORDER (Left→Right→Root) processes children before parent, used for deleting trees or postfix notation; LEVEL-ORDER (BFS) visits level by level, used for finding shortest paths and printing tree structure.",available:!0},{to:"/bst",icon:Wp,title:"Binary Search Tree",description:`The fundamental ordered tree: every node's left subtree contains only smaller values, right subtree only larger values. This property enables O(log n) search by eliminating half the tree at each step — like binary search but in tree form. Supports efficient range queries. Caveat: can degrade to O(n) if insertions create an unbalanced "stick". Foundation for databases, symbol tables, and more advanced balanced trees.`,available:!0},{to:"/avl",icon:jv,title:"AVL Tree",description:"The first self-balancing BST, invented in 1962. Maintains strict balance: height difference between left and right subtrees ≤ 1 at every node. When insertion/deletion violates this, the tree self-corrects using rotations (single or double). Guarantees O(log n) for all operations. More rigidly balanced than Red-Black trees, so faster lookups but slightly slower insertions. Used when reads far exceed writes.",available:!0},{to:"/splay",icon:Nv,title:"Splay Tree",description:`A self-adjusting BST with a clever optimization: every accessed node is "splayed" (rotated) to the root. No explicit balance condition, yet achieves O(log n) amortized time. Recently accessed items stay near the root — perfect for caches where some items are accessed repeatedly (temporal locality). Used in Windows NT's virtual memory management, GCC's implementation of certain data structures, and network routers.`,available:!0},{to:"/treap",icon:bv,title:"Treap",description:"A randomized BST that combines tree and heap properties. Each node has a key (BST-ordered) and a random priority (max-heap-ordered). Rotations restore heap order after insertion, giving O(log n) expected time for all operations without complex rebalancing logic. Supports efficient split and merge. Widely used in competitive programming and as a simpler alternative to AVL/Red-Black trees.",available:!0}]},{id:"Graphs",name:"Graphs",icon:Kp,description:"Graphs model relationships between objects using vertices (nodes) and edges (connections). They power social networks, GPS navigation, recommendation systems, and the internet itself. Understanding graphs unlocks solutions to complex real-world problems like finding shortest paths, detecting communities, and optimizing networks.",color:"#ef4444",items:[{to:"/adjacency-matrix",icon:Sv,title:"Adjacency Matrix",description:"A 2D array used to represent a finite graph. Each cell at (i, j) indicates if there is an edge from vertex i to vertex j. Simple and fast for dense graphs, but uses O(V^2) space. Not practical for large, sparse graphs.",available:!0},{to:"/adjacency-list",icon:Cv,title:"Adjacency List",description:"A space-efficient way to represent a graph. Each vertex stores a list of adjacent vertices. Ideal for sparse graphs, supports efficient iteration over neighbors. Commonly used in network routing, social networks, and recommendation systems.",available:!0},{to:"/bfs",icon:Tv,title:"Breadth-First Search (BFS)",description:"A fundamental graph traversal algorithm that explores neighbors level by level. Used for finding shortest paths in unweighted graphs, peer-to-peer networks, and web crawlers.",available:!0},{to:"/dfs",icon:_v,title:"Depth-First Search (DFS)",description:"A classic graph traversal technique that explores as far as possible along each branch before backtracking. Used for topological sorting, cycle detection, and solving puzzles like mazes.",available:!0}]}];return e.jsxs("section",{className:"algorithms-section",children:[e.jsxs("div",{className:"section-header",children:[e.jsx("h1",{children:"Explore Data Structures"}),e.jsx("p",{children:"Choose a category to explore different data structures. Each visualizer includes step-by-step explanations and hands-on practice."})]}),e.jsx("div",{className:"categories-container",children:s.map(i=>e.jsxs("div",{className:`category-wrapper${n===i.id?" expanded-wrapper":""}`,style:{"--item-color":i.color},children:[e.jsxs("button",{className:`category-header ${n===i.id?"expanded":""}`,onClick:()=>r(i.id),children:[e.jsx("div",{className:"category-icon",style:{background:i.color},children:e.jsx(i.icon,{})}),e.jsx("div",{className:"category-info",children:e.jsx("h2",{children:i.name})}),e.jsxs("div",{className:"category-meta",children:[e.jsxs("span",{className:"item-count",children:[i.items.filter(a=>a.available).length," visualizers"]}),n===i.id?e.jsx(hc,{size:20}):e.jsx(Ms,{size:20})]})]}),e.jsx("div",{className:`category-items ${n===i.id?"expanded":""}`,children:e.jsx("div",{className:"items-grid",children:i.items.map((a,l)=>a.available?e.jsxs(Vn,{to:a.to,className:"algorithm-item",children:[e.jsx("div",{className:"item-icon",style:{background:i.color},children:e.jsx(a.icon,{})}),e.jsxs("div",{className:"item-info",children:[e.jsx("h3",{children:a.title}),e.jsx("p",{children:a.description})]}),e.jsx(me,{className:"item-arrow"})]},l):e.jsxs("div",{className:"algorithm-item coming-soon",children:[e.jsx("div",{className:"item-icon disabled",children:e.jsx(a.icon,{})}),e.jsxs("div",{className:"item-info",children:[e.jsx("h3",{children:a.title}),e.jsx("p",{children:a.description})]}),e.jsx("span",{className:"coming-soon-badge",children:"Coming Soon"})]},l))})})]},i.id))})]})}function zv(){return e.jsxs("section",{className:"contact-section",children:[e.jsx("div",{className:"page-header",children:e.jsx("h1",{children:"Contact"})}),e.jsx("div",{className:"contact-content",children:e.jsxs("div",{className:"contact-info",children:[e.jsxs("div",{className:"info-card",children:[e.jsx("div",{className:"info-icon",children:e.jsx($p,{})}),e.jsx("h3",{children:"Email"}),e.jsx("p",{children:"For recruitment and professional opportunities"}),e.jsx("a",{href:"mailto:abdullahmahfouz@trentu.ca",className:"info-link",children:"abdullahmahfouz@trentu.ca"})]}),e.jsxs("div",{className:"info-card",children:[e.jsx("div",{className:"info-icon",children:e.jsx(fc,{})}),e.jsx("h3",{children:"GitHub"}),e.jsx("p",{children:"View my projects and contributions"}),e.jsx("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",className:"info-link",children:"github.com/abdullahmahfouz"})]}),e.jsxs("div",{className:"info-card",children:[e.jsx("div",{className:"info-icon",children:e.jsx(gc,{})}),e.jsx("h3",{children:"LinkedIn"}),e.jsx("p",{children:"Connect for professional networking"}),e.jsx("a",{href:"https://www.linkedin.com/in/abdullah-mahfouz-5188b1306/",target:"_blank",rel:"noopener noreferrer",className:"info-link",children:"Connect on LinkedIn"})]})]})})]})}function Mv(){return e.jsxs("section",{className:"contributions-section",children:[e.jsxs("div",{className:"page-header",children:[e.jsx("h1",{children:"Contributions"}),e.jsx("p",{children:"Help us improve this free learning tool for students! Your contributions help make DSA easier to understand for everyone."})]}),e.jsxs("div",{className:"contributions-content",children:[e.jsxs("div",{className:"contribution-card",children:[e.jsx("div",{className:"contribution-icon",children:e.jsx(vi,{})}),e.jsx("h2",{children:"Code Contributions"}),e.jsx("p",{children:"Found a bug or want to add a new feature? Fork the repository, make your changes, and submit a pull request!"}),e.jsxs("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",className:"btn-primary",children:[e.jsx("span",{children:"View on GitHub"}),e.jsx(me,{})]})]}),e.jsxs("div",{className:"contribution-card",children:[e.jsx("div",{className:"contribution-icon",children:e.jsx(Hi,{})}),e.jsx("h2",{children:"Documentation"}),e.jsx("p",{children:"Help improve our documentation, fix typos, or add examples. Every bit helps!"}),e.jsxs("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",className:"btn-primary",children:[e.jsx("span",{children:"Improve Docs"}),e.jsx(me,{})]})]}),e.jsxs("div",{className:"contribution-card",children:[e.jsx("div",{className:"contribution-icon",children:e.jsx(Ux,{})}),e.jsx("h2",{children:"Report Issues"}),e.jsx("p",{children:"Found a bug or have a suggestion? Open an issue on GitHub and let us know!"}),e.jsxs("a",{href:"https://github.com/abdullahmahfouz",target:"_blank",rel:"noopener noreferrer",className:"btn-primary",children:[e.jsx("span",{children:"Report Issue"}),e.jsx(me,{})]})]}),e.jsxs("div",{className:"contribution-card",children:[e.jsx("div",{className:"contribution-icon",children:e.jsx(ye,{})}),e.jsx("h2",{children:"Feature Requests"}),e.jsx("p",{children:"Have an idea for a new visualizer or feature? We'd love to hear your suggestions!"}),e.jsxs(Vn,{to:"/contact",className:"btn-primary",children:[e.jsx("span",{children:"Suggest Feature"}),e.jsx(me,{})]})]})]}),e.jsxs("div",{className:"contributors-section",children:[e.jsx("h2",{children:"Contributors"}),e.jsx("div",{className:"contributors-list",children:e.jsxs("div",{className:"contributor-item",children:[e.jsx("div",{className:"contributor-avatar",children:e.jsx(fv,{})}),e.jsxs("div",{className:"contributor-info",children:[e.jsx("h3",{children:"Abdullah Mahfouz"}),e.jsx("p",{children:"Creator & Maintainer"})]})]})}),e.jsx("p",{className:"contributors-note",children:"Want to see your name here? Start contributing today!"})]})]})}function kt(n,t){return n.split(/(`[^`\n]+`|\*\*[^*\n]+\*\*|\*[^*\n]+\*)/g).map((s,i)=>{const a=`${t}-i${i}`;return s.startsWith("`")&&s.endsWith("`")&&s.length>2?e.jsx("code",{className:"ai-inline-code",children:s.slice(1,-1)},a):s.startsWith("**")&&s.endsWith("**")&&s.length>4?e.jsx("strong",{children:s.slice(2,-2)},a):s.startsWith("*")&&s.endsWith("*")&&s.length>2?e.jsx("em",{className:"ai-md-em",children:s.slice(1,-1)},a):s||null})}function Av(n,t){const r=n.split(`
`),s=[];let i=[],a=[],l=null;const o=()=>{const d=i.join(" ").trim();d&&s.push({type:"p",content:d}),i=[]},c=()=>{a.length&&(s.push({type:l,items:[...a]}),a=[],l=null)};for(const d of r){const u=d.trim();if(!u){o(),c();continue}const h=u.match(/^# (.+)$/),g=u.match(/^## (.+)$/),b=u.match(/^### (.+)$/),N=/^---+$/.test(u),y=u.match(/^> (.+)$/),j=u.match(/^[-*+] (.+)$/),f=u.match(/^\d+\. (.+)$/);h||g||b?(o(),c(),b?s.push({type:"h3",content:b[1]}):g?s.push({type:"h2",content:g[1]}):s.push({type:"h1",content:h[1]})):N?(o(),c(),s.push({type:"hr"})):y?(o(),c(),s.push({type:"blockquote",content:y[1]})):j?(o(),l&&l!=="ul"&&c(),l="ul",a.push(j[1])):f?(o(),l&&l!=="ol"&&c(),l="ol",a.push(f[1])):(c(),i.push(d))}return o(),c(),s.map((d,u)=>{const h=`${t}-b${u}`;switch(d.type){case"h1":return e.jsx("p",{className:"ai-md-h1",children:kt(d.content,h)},h);case"h2":return e.jsx("p",{className:"ai-md-h2",children:kt(d.content,h)},h);case"h3":return e.jsx("p",{className:"ai-md-h3",children:kt(d.content,h)},h);case"hr":return e.jsx("hr",{className:"ai-md-hr"},h);case"blockquote":return e.jsx("blockquote",{className:"ai-md-blockquote",children:kt(d.content,h)},h);case"ul":return e.jsx("ul",{className:"ai-md-ul",children:d.items.map((g,b)=>e.jsx("li",{children:kt(g,`${h}-li${b}`)},b))},h);case"ol":return e.jsx("ol",{className:"ai-md-ol",children:d.items.map((g,b)=>e.jsx("li",{children:kt(g,`${h}-li${b}`)},b))},h);case"p":return e.jsx("p",{className:"ai-md-p",children:kt(d.content,h)},h);default:return null}})}function Fv(n){if(!n)return null;const t=[],r=/```(\w*)\n?([\s\S]*?)```/g;let s=0,i;for(;(i=r.exec(n))!==null;)i.index>s&&t.push({type:"text",content:n.slice(s,i.index)}),t.push({type:"code",lang:i[1]||"",content:i[2].trim()}),s=i.index+i[0].length;return s<n.length&&t.push({type:"text",content:n.slice(s)}),t.map((a,l)=>a.type==="code"?e.jsxs("div",{className:"ai-code-block",children:[a.lang&&e.jsx("div",{className:"ai-code-lang",children:a.lang}),e.jsx("pre",{children:e.jsx("code",{children:a.content})})]},l):e.jsx(_e.Fragment,{children:Av(a.content,`s${l}`)},l))}function be({context:n="Data Structures"}){const[t,r]=p.useState(""),[s,i]=p.useState(""),[a,l]=p.useState(!1),o=()=>{const h=n.toLowerCase();return h.includes("stack")?"e.g., How does LIFO work?":h.includes("queue")?"e.g., What is FIFO?":h.includes("linked list")?"e.g., How do I insert at the head?":h.includes("hash")?"e.g., What is a collision?":h.includes("binary tree")||h.includes("traversal")?"e.g., What is inorder traversal?":"e.g., How does this work?"},c=async()=>{if(t.trim()){l(!0),i("");try{const h=await fetch("/api/ask-ai",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:t.trim(),code:n})}),g=await h.json();i(h.ok?g.answer||"No answer returned.":"Currently not working, try again later.")}catch{i("Currently not working, try again later.")}finally{l(!1)}}},d=h=>{h.key==="Enter"&&c()},u=s.startsWith("Currently not working");return e.jsxs("div",{className:"ai-assistant",children:[e.jsxs("div",{className:"ai-header",children:[e.jsx(Fp,{size:20}),e.jsx("h3",{children:"AI Assistant"})]}),e.jsxs("p",{className:"ai-subtitle",children:["Ask me anything about"," ",n.toLowerCase().includes("problem")?"this problem":n.toLowerCase(),"!"]}),e.jsxs("div",{className:"ai-input-group",children:[e.jsx("input",{type:"text",value:t,onChange:h=>r(h.target.value),onKeyDown:d,placeholder:o(),disabled:a,"aria-label":"Ask a question"}),e.jsx("button",{onClick:c,disabled:a||!t.trim(),children:a?"Asking…":"Ask"})]}),(a||s)&&e.jsxs("div",{id:"ai-response",className:s?"has-content":"",children:[a&&e.jsxs("div",{className:"ai-loading-container",children:[e.jsxs("div",{className:"ai-loading-dots",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]}),e.jsx("div",{className:"ai-loading-text",children:"Analyzing…"})]}),s&&e.jsx("div",{className:u?"ai-error":"ai-answer",children:u?s:Fv(s)})]})]})}const Dv=`class Stack:
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
print(stack.peek())  # 20`,Vv=`class Stack {
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
console.log(stack.pop()); // 20`,$v=`import java.util.EmptyStackException;

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
System.out.println(stack.pop()); // 20`,Bv={python:Dv,javascript:Vv,java:$v,"c++":`#include <iostream>
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
Console.WriteLine(stack.Pop()); // 20`},qv=`class Queue:
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
print(queue.peek())     # 20`,Hv=`class Queue {
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
console.log(queue.dequeue()); // 10`,Uv=`import java.util.NoSuchElementException;

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
System.out.println(queue.dequeue()); // 10`,Wv={python:qv,javascript:Hv,java:Uv,"c++":`#include <iostream>
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
Console.WriteLine(queue.Dequeue()); // 10`},Kv=`class Node:
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
print(ll.search(20))  # 1`,Gv=`class Node {
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
ll.insertAtTail(30);`,Qv=`public class SinglyLinkedList<T> {
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
ll.insertAtTail(30);`,Xv={python:Kv,javascript:Gv,java:Qv,"c++":`#include <iostream>
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
ll.InsertAtTail(30);`},Yv=`import random

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
        return False`,Jv=`class SkipListNode {
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
}`,Zv=`import java.util.Random;

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
}`,ey={python:Yv,javascript:Jv,java:Zv,"c++":`#include <vector>
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
}`},ny=`class TreeNode:
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
print("Level:     ", tree.levelorder_traversal())  # [50, 30, 70, 20, 40, 60, 80]`,ty=`class TreeNode {
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
console.log("Level:    ", tree.levelOrderTraversal());  // [50, 30, 70, 20, 40, 60, 80]`,ry=`import java.util.*;

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
System.out.println("Level:     " + tree.levelOrderTraversal());`,sy={python:ny,javascript:ty,java:ry,"c++":`#include <iostream>
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
Console.WriteLine("Level:     " + string.Join(", ", tree.LevelOrderTraversal()));`},iy=`class HashTable:
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
print(ht.get("banana"))  # 3`,ay=`class HashTable {
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
console.log(ht.get("apple"));  // 5`,ly=`public class HashTable<K, V> {
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
System.out.println(ht.get("apple")); // 5`,oy={python:iy,javascript:ay,java:ly,"c++":`#include <iostream>
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
Console.WriteLine(ht.Get("apple")); // 5`},cy=`class Node:
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
ht.delete("banana")`,dy=`class Node {
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
console.log(ht.search("apple"));  // 5`,uy=`public class HashTableChaining<K, V> {
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
System.out.println(ht.search("apple"));  // 5`,hy={python:cy,javascript:dy,java:uy,"c++":`#include <iostream>
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
Console.WriteLine(ht.Search("apple"));  // 5`},py=`class TreeNode:
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
print("After delete 30:", bst.inorder())  # [20, 40, 50, 60, 70, 80]`,fy=`class TreeNode {
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
console.log("After delete 30:", bst.inorder());  // [20, 40, 50, 60, 70, 80]`,my=`import java.util.*;

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
System.out.println("After delete: " + bst.inorder());  // [20, 40, 50, 60, 70, 80]`,gy={python:py,javascript:fy,java:my,"c++":`#include <iostream>
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
Console.WriteLine("After delete: " + string.Join(", ", bst.Inorder()));`},xy=`class AVLNode:
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
# Tree automatically balances after each insert!`,vy=`class AVLNode {
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
[30, 20, 40, 10, 25, 35, 50].forEach(v => avl.insert(v));`,yy=`class AVLNode {
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
for (int v : new int[]{30, 20, 40, 10, 25}) avl.insert(v);`,jy={python:xy,javascript:vy,java:yy,"c++":`#include <algorithm>
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

// Usage: var avl = new AVLTree(); foreach(var v in new[]{30,20,40}) avl.Insert(v);`},Ny=`class SplayNode:
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
print("Root:", splay.root.key)  # 20`,by=`class SplayNode {
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
splay.search(20); // 20 moves to root`,ky=`class SplayNode {
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
st.search(20); // 20 is now root`,wy={python:Ny,javascript:by,java:ky,"c++":`struct SplayNode {
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

// Usage: var st = new SplayTree(); foreach(var v in new[]{50,30,70}) st.Insert(v);`},Sy=`class MinHeap:
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
print("New min:", heap.peek())  # 2`,Cy=`class MinHeap {
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
console.log("Extract:", heap.extractMin());  // 1`,Ty=`import java.util.*;

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
System.out.println("Min: " + heap.peek());  // 1`,_y={python:Sy,javascript:Cy,java:Ty,"c++":`#include <vector>
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

// Usage: var h = new MinHeap(); foreach(var v in new[]{5,3,8,1}) h.Insert(v);`},Ly=`class MaxHeap:
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
print("New max:", heap.peek())  # 8`,Ey=`class MaxHeap {
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
console.log("Extract:", heap.extractMax());  // 9`,Oy=`import java.util.*;

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
System.out.println("Max: " + heap.peek());  // 9`,Ry={python:Ly,javascript:Ey,java:Oy,"c++":`#include <vector>
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

// Usage: var h = new MaxHeap(); foreach(var v in new[]{5,3,8,9}) h.Insert(v);`},Py=`from collections import defaultdict

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
print(g.get_neighbors('A'))  # [('B', 1), ('C', 1)]`,Iy=`class Graph {
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
console.log(g.getNeighbors('A'));`,zy=`import java.util.*;

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
g.addEdge("A", "C");`,My={python:Py,javascript:Iy,java:zy,"c++":`#include <iostream>
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
g.AddEdge("A", "C");`},Ay=`from collections import deque

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

print(bfs(graph, 'A'))  # ['A', 'B', 'C', 'D', 'E', 'F']`,Fy=`function bfs(graph, start) {
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

console.log(bfs(graph, 'A')); // ['A', 'B', 'C', 'D', 'E', 'F']`,Dy=`import java.util.*;

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
}`,Vy={python:Ay,javascript:Fy,java:Dy,"c++":`#include <iostream>
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
}`},$y=`def dfs(graph, start):
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

print(dfs(graph, 'A'))  # ['A', 'B', 'D', 'E', 'F', 'C']`,By=`function dfs(graph, start) {
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

console.log(dfs(graph, 'A'));`,qy=`import java.util.*;

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
}`,Hy={python:$y,javascript:By,java:qy,"c++":`#include <iostream>
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
}`},Uy=`import random

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
print("After delete 30:", treap.inorder())  # [20, 40, 50, 60, 70, 80]`,Wy=`class TreapNode {
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
console.log("After delete 30:", treap.inorder());  // [20, 40, 50, 60, 70, 80]`,Ky=`import java.util.*;

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
System.out.println("After delete: " + treap.inorder());  // [20, 40, 50, 60, 70, 80]`,Gy={python:Uy,javascript:Wy,java:Ky,"c++":`#include <iostream>
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
Console.WriteLine("After delete: " + string.Join(", ", treap.Inorder()));`},Da={stack:Bv,queue:Wv,linkedlist:Xv,skiplist:ey,binarytree:sy,hashtable:oy,hashtableChaining:hy,bst:gy,avl:jy,splay:wy,minheap:_y,maxheap:Ry,graph:My,bfs:Vy,dfs:Hy,treap:Gy};function Ce({dataStructure:n}){var h;const[t,r]=p.useState("python"),[s,i]=p.useState(!1),a=["python","javascript","java","c++","c#"],l=a.filter(g=>{var b;return(b=Da[n])==null?void 0:b[g]}),o=l.length>0?l:a,c=((h=Da[n])==null?void 0:h[t])||"Code not available for this data structure";p.useEffect(()=>{var g;!((g=Da[n])!=null&&g[t])&&l.length>0&&r(l[0])},[n,t,l]);const d=g=>({python:"Python",javascript:"JavaScript",java:"Java","c++":"C++","c#":"C#"})[g]||g,u=()=>{navigator.clipboard.writeText(c),i(!0),setTimeout(()=>i(!1),2e3)};return e.jsxs("div",{className:"code-section",children:[e.jsxs("h2",{children:[e.jsx(Wd,{})," Implementation"]}),e.jsx("div",{className:"code-tabs",children:o.map(g=>e.jsxs("button",{className:`tab-btn ${t===g?"active":""}`,onClick:()=>r(g),children:[e.jsx(Wd,{}),d(g)]},g))}),e.jsx("div",{className:"code-panels",children:e.jsx("div",{className:"code-panel active",children:e.jsxs("pre",{children:[e.jsxs("button",{className:"copy-btn",onClick:u,children:[e.jsx(pc,{})," ",s?"Copied!":"Copy"]}),e.jsx("code",{children:c})]})})})]})}function Ke({message:n}){if(!(n!=null&&n.text))return null;const t=n.type||"info";return e.jsx("div",{className:`message message-${t}`,children:n.text})}async function fe(n){return await(await fetch(n)).json()}async function se(n,t){return await(await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()}async function Wi(n,t=null){const r={method:"DELETE",headers:{"Content-Type":"application/json"}};return t&&(r.body=JSON.stringify(t)),await(await fetch(n,r)).json()}function Ge(n=3e3){const[t,r]=p.useState(null),s=p.useRef(null),i=p.useCallback(()=>{r(null),s.current&&(clearTimeout(s.current),s.current=null)},[]),a=p.useCallback((l,o="info")=>{r({text:l,type:o}),s.current&&clearTimeout(s.current),s.current=setTimeout(()=>{r(null),s.current=null},n)},[n]);return p.useEffect(()=>i,[i]),{message:t,showMessage:a,clearMessage:i}}function Qy(){const[n,t]=p.useState([]),[r,s]=p.useState(0),[i,a]=p.useState("Empty"),[l]=p.useState(10),{message:o,showMessage:c}=Ge(3e3),[d,u]=p.useState("");p.useEffect(()=>{h()},[]);const h=async()=>{try{const f=await fe("/api/stack");t(f.items||[]),s(f.size||0),a(f.top!==null&&f.top!==void 0?f.top:"Empty")}catch(f){console.error("Error loading stack:",f)}},g=async()=>{if(!d||d.trim()===""){c("Please enter a number!","error");return}const f=Number(d);if(isNaN(f)){c("Please enter a valid number!","error");return}try{const m=await se("/api/stack/push",{value:f});if(m.error){c(m.error,"error");return}t(m.items||[]),s(m.size||0),a(m.top!==null&&m.top!==void 0?m.top:"Empty"),c(`Pushed ${f} to stack!`,"success"),u("")}catch(m){console.error("Push error:",m),c("Error pushing to stack. Is Flask running?","error")}},b=async()=>{try{const f=await se("/api/stack/pop",{});if(f.error){c(f.error,"error");return}t(f.items||[]),s(f.size||0),a(f.top!==null&&f.top!==void 0?f.top:"Empty"),c(`Popped ${f.popped} from stack!`,"success")}catch{c("Error popping from stack","error")}},N=async()=>{try{const f=await fe("/api/stack/peek");if(f.error){c(f.error,"error");return}c(`Top element is: ${f.top}`,"info")}catch{c("Error peeking stack","error")}},y=async()=>{try{await se("/api/stack/clear",{}),t([]),s(0),a("Empty"),c("Stack cleared!","success")}catch{c("Error clearing stack","error")}},j=f=>{f.key==="Enter"&&g()};return e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"intro-layout",children:[e.jsxs("div",{className:"concept-box",children:[e.jsxs("div",{className:"concept-header",children:[e.jsx(Fe,{className:"icon-sm"}),e.jsx("span",{children:"What is a Stack?"})]}),e.jsxs("div",{className:"concept-content",children:[e.jsxs("p",{children:["A ",e.jsx("strong",{children:"Stack"})," is a linear data structure that follows the ",e.jsx("strong",{children:"LIFO"})," (Last In, First Out) principle."]}),e.jsxs("div",{className:"concept-analogy",children:[e.jsx(ye,{}),e.jsxs("span",{children:["Think of a stack of plates - you can only add or remove from the ",e.jsx("strong",{children:"top"}),"!"]})]}),e.jsxs("div",{className:"concept-operations",children:[e.jsxs("div",{className:"op-item",children:[e.jsx("span",{className:"op-name",children:"Push"}),e.jsx("span",{className:"op-desc",children:"Add to top"}),e.jsx("span",{className:"op-complexity",children:"O(1)"})]}),e.jsxs("div",{className:"op-item",children:[e.jsx("span",{className:"op-name",children:"Pop"}),e.jsx("span",{className:"op-desc",children:"Remove from top"}),e.jsx("span",{className:"op-complexity",children:"O(1)"})]}),e.jsxs("div",{className:"op-item",children:[e.jsx("span",{className:"op-name",children:"Peek"}),e.jsx("span",{className:"op-desc",children:"View top element"}),e.jsx("span",{className:"op-complexity",children:"O(1)"})]})]}),e.jsxs("div",{className:"concept-uses",children:[e.jsx("strong",{children:"Common Uses:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Browser back/forward buttons"}),e.jsx("li",{children:"Undo/Redo functionality"}),e.jsx("li",{children:"Function call stack"}),e.jsx("li",{children:"Expression evaluation"})]})]})]})]}),e.jsx(be,{context:"Stack data structure"})]}),e.jsxs("div",{className:"visualizer-layout",children:[e.jsxs("div",{className:"control-panel",children:[e.jsx("h2",{children:"Stack Operations"}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{htmlFor:"pushValue",children:"Push (Add to top)"}),e.jsxs("div",{className:"input-group",children:[e.jsx("input",{type:"text",id:"pushValue",value:d,onChange:f=>u(f.target.value),onKeyPress:j,placeholder:"Enter a value"}),e.jsx("button",{onClick:g,className:"btn btn-push",children:"Push"})]})]}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{children:"Other Operations"}),e.jsxs("div",{className:"btn-group",children:[e.jsx("button",{onClick:b,className:"btn btn-pop",children:"Pop"}),e.jsx("button",{onClick:N,className:"btn btn-peek",children:"Peek"}),e.jsx("button",{onClick:y,className:"btn btn-clear",children:"Clear"})]})]}),e.jsxs("div",{className:"info-panel",children:[e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Size:"}),e.jsx("span",{className:"info-value",children:r})]}),e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Top:"}),e.jsx("span",{className:"info-value",children:i})]}),e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Max Size:"}),e.jsx("span",{className:"info-value",children:l})]})]}),e.jsx(Ke,{message:o})]}),e.jsxs("div",{className:"visual-panel",children:[e.jsx("h2",{children:"Stack Visualization"}),e.jsxs("div",{className:"stack-container",children:[e.jsx("div",{className:"stack-visual",children:n.length===0?e.jsx("div",{className:"stack-empty",children:"Stack is empty. Push some items!"}):n.slice().reverse().map((f,m)=>e.jsx("div",{className:"stack-item",children:f},m))}),e.jsx("div",{className:"stack-base",children:e.jsx("span",{children:"BOTTOM"})})]})]})]}),e.jsx(Ce,{dataStructure:"stack"})]})}function Xy(){const[n,t]=p.useState([]),[r,s]=p.useState(0),[i,a]=p.useState("Empty"),[l]=p.useState(10),{message:o,showMessage:c}=Ge(3e3),[d,u]=p.useState("");p.useEffect(()=>{h()},[]);const h=async()=>{try{const j=await fe("/api/queue");t(j.items||[]),s(j.size||0),a(j.front!==null&&j.front!==void 0?j.front:"Empty")}catch(j){console.error("Error loading queue:",j)}},g=async()=>{if(!d||d.trim()===""){c("Please enter a number!","error");return}const j=Number(d);if(isNaN(j)){c("Please enter a valid number!","error");return}try{const f=await se("/api/queue/enqueue",{value:j});if(f.error){c(f.error,"error");return}t(f.items||[]),s(f.size||0),a(f.front!==null&&f.front!==void 0?f.front:"Empty"),c(`Enqueued ${j}!`,"success"),u("")}catch(f){console.error("Enqueue error:",f),c("Error enqueueing. Is Flask running?","error")}},b=async()=>{try{const j=await se("/api/queue/dequeue",{});if(j.error){c(j.error,"error");return}t(j.items||[]),s(j.size||0),a(j.front!==null&&j.front!==void 0?j.front:"Empty"),c(`Dequeued ${j.dequeued} from queue!`,"success")}catch{c("Error dequeuing from queue","error")}},N=async()=>{try{const j=await fe("/api/queue/peek");if(j.error){c(j.error,"error");return}c(`Front element is: ${j.front}`,"info")}catch{c("Error peeking queue","error")}},y=async()=>{try{await se("/api/queue/clear",{}),t([]),s(0),a("Empty"),c("Queue cleared!","success")}catch{c("Error clearing queue","error")}};return e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"intro-layout",children:[e.jsxs("div",{className:"concept-box",children:[e.jsxs("div",{className:"concept-header",children:[e.jsx(Fe,{className:"icon-sm"}),e.jsx("span",{children:"What is a Queue?"})]}),e.jsxs("div",{className:"concept-content",children:[e.jsxs("p",{children:["A ",e.jsx("strong",{children:"Queue"})," is a linear data structure that follows the ",e.jsx("strong",{children:"FIFO"})," (First In, First Out) principle."]}),e.jsxs("div",{className:"concept-analogy",children:[e.jsx(ye,{}),e.jsxs("span",{children:["Think of a line at a store – the first person in line gets served ",e.jsx("strong",{children:"first"}),"!"]})]}),e.jsxs("div",{className:"concept-operations",children:[e.jsxs("div",{className:"op-item",children:[e.jsx("span",{className:"op-name",children:"Enqueue"}),e.jsx("span",{className:"op-desc",children:"Add to the back"}),e.jsx("span",{className:"op-complexity",children:"O(1)"})]}),e.jsxs("div",{className:"op-item",children:[e.jsx("span",{className:"op-name",children:"Dequeue"}),e.jsx("span",{className:"op-desc",children:"Remove from the front"}),e.jsx("span",{className:"op-complexity",children:"O(1)"})]}),e.jsxs("div",{className:"op-item",children:[e.jsx("span",{className:"op-name",children:"Peek"}),e.jsx("span",{className:"op-desc",children:"View the front element"}),e.jsx("span",{className:"op-complexity",children:"O(1)"})]})]})]})]}),e.jsx(be,{context:"Queue data structure"})]}),e.jsxs("div",{className:"visualizer-layout",children:[e.jsxs("div",{className:"control-panel",children:[e.jsx("h2",{children:"Queue Operations"}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{htmlFor:"enqueueValue",children:"Enqueue (Add to back)"}),e.jsxs("div",{className:"input-group",children:[e.jsx("input",{type:"text",id:"enqueueValue",value:d,onChange:j=>u(j.target.value),onKeyPress:j=>j.key==="Enter"&&g(),placeholder:"Enter a value"}),e.jsx("button",{onClick:g,className:"btn btn-enqueue",children:"Enqueue"})]})]}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{children:"Other Operations"}),e.jsxs("div",{className:"btn-group",children:[e.jsx("button",{onClick:b,className:"btn btn-dequeue",children:"Dequeue"}),e.jsx("button",{onClick:N,className:"btn btn-peek",children:"Peek"}),e.jsx("button",{onClick:y,className:"btn btn-clear",children:"Clear"})]})]}),e.jsxs("div",{className:"info-panel",children:[e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Size:"}),e.jsx("span",{className:"info-value",children:r})]}),e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Front:"}),e.jsx("span",{className:"info-value",children:i})]}),e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Max Size:"}),e.jsx("span",{className:"info-value",children:l})]})]}),e.jsx(Ke,{message:o})]}),e.jsxs("div",{className:"visual-panel",children:[e.jsx("h2",{children:"Queue Visualization"}),e.jsxs("div",{className:"queue-container",children:[e.jsx("div",{className:"queue-label",children:e.jsx("span",{className:"front-marker",children:"FRONT →"})}),e.jsx("div",{className:"queue-visual",children:n.length===0?e.jsx("div",{className:"queue-empty",children:"Queue is empty. Enqueue some items!"}):n.map((j,f)=>{const m=f===0,x=f===n.length-1;return e.jsxs("div",{className:`queue-item ${m?"queue-front":""} ${x?"queue-back":""}`,children:[m&&e.jsx("span",{className:"front-label",children:"FRONT"}),j,x&&e.jsx("span",{className:"back-label",children:"BACK"})]},f)})}),e.jsx("div",{className:"queue-label",children:e.jsx("span",{className:"back-marker",children:"← BACK"})})]})]})]}),e.jsx(Ce,{dataStructure:"queue"})]})}function Yy(){const[n,t]=p.useState([]),[r,s]=p.useState(0),[i,a]=p.useState("Empty"),{message:l,showMessage:o}=Ge(3e3),[c,d]=p.useState(""),[u,h]=p.useState(""),[g,b]=p.useState(""),[N,y]=p.useState(""),[j,f]=p.useState(""),[m,x]=p.useState("");p.useEffect(()=>{C()},[]);const C=async()=>{try{const E=await fe("/api/linkedlist");t(E.items||[]),s(E.size||0),a(E.head!==null&&E.head!==void 0?E.head:"Empty")}catch(E){console.error("Error loading linked list:",E)}},v=async()=>{if(!c||c.trim()===""){o("Please enter a number!","error");return}const E=Number(c);if(isNaN(E)){o("Please enter a valid number!","error");return}try{const q=await se("/api/linkedlist/insert/head",{value:E});if(q.error){o(q.error,"error");return}t(q.items||[]),s(q.size||0),a(q.head!==null&&q.head!==void 0?q.head:"Empty"),o(`Inserted ${E} at head!`,"success"),d("")}catch(q){console.error("Insert error:",q),o("Error inserting. Is Flask running?","error")}},P=async()=>{if(!u||u.trim()===""){o("Please enter a number!","error");return}const E=Number(u);if(isNaN(E)){o("Please enter a valid number!","error");return}try{const q=await se("/api/linkedlist/insert/tail",{value:E});if(q.error){o(q.error,"error");return}t(q.items||[]),s(q.size||0),a(q.head!==null&&q.head!==void 0?q.head:"Empty"),o(`Inserted ${E} at tail!`,"success"),h("")}catch(q){console.error("Insert error:",q),o("Error inserting. Is Flask running?","error")}},S=async()=>{try{const E=await se("/api/linkedlist/delete/head",{});if(E.error){o(E.error,"error");return}t(E.items||[]),s(E.size||0),a(E.head!==null&&E.head!==void 0?E.head:"Empty"),o("Deleted head!","success")}catch{o("Error deleting head","error")}},D=async()=>{try{const E=await se("/api/linkedlist/delete/tail",{});if(E.error){o(E.error,"error");return}t(E.items||[]),s(E.size||0),a(E.head!==null&&E.head!==void 0?E.head:"Empty"),o("Deleted tail!","success")}catch{o("Error deleting tail","error")}},M=async()=>{try{await se("/api/linkedlist/clear",{}),t([]),s(0),a("Empty"),o("List cleared!","success")}catch{o("Error clearing list","error")}};return e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"intro-layout",children:[e.jsxs("div",{className:"concept-box",children:[e.jsxs("div",{className:"concept-header",children:[e.jsx(Fe,{className:"icon-sm"}),e.jsx("span",{children:"What is a Singly Linked List?"})]}),e.jsxs("div",{className:"concept-content",children:[e.jsxs("p",{children:["A ",e.jsx("strong",{children:"Singly Linked List"})," is a linear data structure where each element contains data and a pointer to the next node."]}),e.jsxs("div",{className:"concept-analogy",children:[e.jsx(ye,{}),e.jsxs("span",{children:["Think of a treasure hunt – each clue points to the ",e.jsx("strong",{children:"next location"}),"!"]})]})]})]}),e.jsx(be,{context:"Singly Linked List data structure"})]}),e.jsxs("div",{className:"visualizer-layout",children:[e.jsxs("div",{className:"control-panel",children:[e.jsx("h2",{children:"Linked List Operations"}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{htmlFor:"insertHeadValue",children:"Insert at Head"}),e.jsxs("div",{className:"input-group",children:[e.jsx("input",{type:"text",id:"insertHeadValue",value:c,onChange:E=>d(E.target.value),onKeyPress:E=>E.key==="Enter"&&v(),placeholder:"Enter a value"}),e.jsx("button",{onClick:v,className:"btn btn-insert",children:"Insert Head"})]})]}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{htmlFor:"insertTailValue",children:"Insert at Tail"}),e.jsxs("div",{className:"input-group",children:[e.jsx("input",{type:"text",id:"insertTailValue",value:u,onChange:E=>h(E.target.value),onKeyPress:E=>E.key==="Enter"&&P(),placeholder:"Enter a value"}),e.jsx("button",{onClick:P,className:"btn btn-insert",children:"Insert Tail"})]})]}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{children:"Delete Operations"}),e.jsxs("div",{className:"btn-group",children:[e.jsx("button",{onClick:S,className:"btn btn-delete",children:"Delete Head"}),e.jsx("button",{onClick:D,className:"btn btn-delete",children:"Delete Tail"})]})]}),e.jsx("div",{className:"operation-group",children:e.jsx("button",{onClick:M,className:"btn btn-clear full-width",children:"Clear All"})}),e.jsxs("div",{className:"info-panel",children:[e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Size:"}),e.jsx("span",{className:"info-value",children:r})]}),e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Head:"}),e.jsx("span",{className:"info-value",children:i})]})]}),e.jsx(Ke,{message:l})]}),e.jsxs("div",{className:"visual-panel",children:[e.jsx("h2",{children:"Linked List Visualization"}),e.jsx("div",{className:"linkedlist-container",children:e.jsx("div",{className:"linkedlist-visual",children:n.length===0?e.jsx("div",{className:"linkedlist-empty",children:"List is empty. Insert some nodes!"}):n.map((E,q)=>e.jsx(_e.Fragment,{children:e.jsxs("div",{className:"linkedlist-node",children:[e.jsx("div",{className:"node-value",children:E}),q<n.length-1&&e.jsx("div",{className:"node-arrow",children:"→"})]})},q))})})]})]}),e.jsx(Ce,{dataStructure:"linkedlist"})]})}function Jy(){const[n,t]=p.useState([]),[r,s]=p.useState([]),[i,a]=p.useState(0),[l,o]=p.useState(0),{message:c,showMessage:d}=Ge(3e3),[u,h]=p.useState(""),[g,b]=p.useState(""),[N,y]=p.useState(""),[j,f]=p.useState([]),[m,x]=p.useState(null),[C,v]=p.useState(null);p.useEffect(()=>{P()},[]);const P=async()=>{try{const A=await fe("/api/skiplist");t(A.levels||[]),s(A.nodes||[]),a(A.maxLevel||0),o(A.size||0)}catch(A){console.error("Error loading skip list:",A)}},S=async()=>{if(!u||u.trim()===""){d("Please enter a number!","error");return}const A=Number(u);if(isNaN(A)||!Number.isInteger(A)){d("Please enter a valid integer!","error");return}try{const k=await se("/api/skiplist/insert",{value:A});if(k.error){d(k.error,"error");return}t(k.levels||[]),s(k.nodes||[]),a(k.maxLevel||0),o(k.size||0),v(A),d(`Inserted ${A} at level ${k.insertedLevel}!`,"success"),h(""),setTimeout(()=>v(null),2e3)}catch(k){console.error("Insert error:",k),d("Error inserting. Is Flask running?","error")}},D=async()=>{if(!g||g.trim()===""){d("Please enter a number!","error");return}const A=Number(g);if(isNaN(A)||!Number.isInteger(A)){d("Please enter a valid integer!","error");return}try{const k=await se("/api/skiplist/delete",{value:A});if(k.error){d(k.error,"error");return}t(k.levels||[]),s(k.nodes||[]),a(k.maxLevel||0),o(k.size||0),d(`Deleted ${A}!`,"success"),b("")}catch(k){console.error("Delete error:",k),d("Error deleting. Is Flask running?","error")}},M=async()=>{if(!N||N.trim()===""){d("Please enter a number!","error");return}const A=Number(N);if(isNaN(A)||!Number.isInteger(A)){d("Please enter a valid integer!","error");return}try{const k=await se("/api/skiplist/search",{value:A});f(k.path||[]),x(k.found),k.found?(v(A),d(`Found ${A}!`,"success")):d(`${A} not found`,"warning"),y(""),setTimeout(()=>{f([]),x(null),v(null)},3e3)}catch(k){console.error("Search error:",k),d("Error searching. Is Flask running?","error")}},E=async()=>{try{await se("/api/skiplist/clear",{}),t([]),s([]),a(0),o(0),f([]),x(null),v(null),d("Skip list cleared!","success")}catch{d("Error clearing skip list","error")}},q=A=>{const k=r.find(L=>L.value===A);return k?k.level:0},K=(A,k)=>{var L;return(L=n[k])==null?void 0:L.includes(A)},O=()=>n.length===0?[]:[...n[0]].sort((A,k)=>A-k);return e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"intro-layout",children:[e.jsxs("div",{className:"concept-box",children:[e.jsxs("div",{className:"concept-header",children:[e.jsx(Fe,{className:"icon-sm"}),e.jsx("span",{children:"What is a Skip List?"})]}),e.jsxs("div",{className:"concept-content",children:[e.jsxs("p",{children:["A ",e.jsx("strong",{children:"Skip List"})," is a probabilistic data structure that allows O(log n) search, insert, and delete operations by maintaining multiple layers of linked lists."]}),e.jsxs("div",{className:"concept-analogy",children:[e.jsx(ye,{}),e.jsx("span",{children:"Think of an express train system - express lines skip stations to get you there faster!"})]})]})]}),e.jsx(be,{context:"Skip List data structure"})]}),e.jsxs("div",{className:"visualizer-layout",children:[e.jsxs("div",{className:"control-panel",children:[e.jsx("h2",{children:"Skip List Operations"}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{htmlFor:"insertValue",children:"Insert Value"}),e.jsxs("div",{className:"input-group",children:[e.jsx("input",{type:"text",id:"insertValue",value:u,onChange:A=>h(A.target.value),onKeyPress:A=>A.key==="Enter"&&S(),placeholder:"Enter integer"}),e.jsx("button",{onClick:S,className:"btn btn-insert",children:"Insert"})]})]}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{htmlFor:"searchValue",children:"Search Value"}),e.jsxs("div",{className:"input-group",children:[e.jsx("input",{type:"text",id:"searchValue",value:N,onChange:A=>y(A.target.value),onKeyPress:A=>A.key==="Enter"&&M(),placeholder:"Enter integer"}),e.jsx("button",{onClick:M,className:"btn btn-search",children:"Search"})]})]}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{htmlFor:"deleteValue",children:"Delete Value"}),e.jsxs("div",{className:"input-group",children:[e.jsx("input",{type:"text",id:"deleteValue",value:g,onChange:A=>b(A.target.value),onKeyPress:A=>A.key==="Enter"&&D(),placeholder:"Enter integer"}),e.jsx("button",{onClick:D,className:"btn btn-delete",children:"Delete"})]})]}),e.jsx("div",{className:"operation-group",children:e.jsx("button",{onClick:E,className:"btn btn-clear full-width",children:"Clear All"})}),e.jsxs("div",{className:"info-panel",children:[e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Size:"}),e.jsx("span",{className:"info-value",children:l})]}),e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Max Level:"}),e.jsx("span",{className:"info-value",children:i})]})]}),e.jsxs("div",{className:"complexity-info",children:[e.jsx("h3",{children:"Time Complexity"}),e.jsxs("div",{className:"complexity-item",children:[e.jsx("span",{children:"Search:"}),e.jsx("span",{className:"complexity-value",children:"O(log n) avg"})]}),e.jsxs("div",{className:"complexity-item",children:[e.jsx("span",{children:"Insert:"}),e.jsx("span",{className:"complexity-value",children:"O(log n) avg"})]}),e.jsxs("div",{className:"complexity-item",children:[e.jsx("span",{children:"Delete:"}),e.jsx("span",{className:"complexity-value",children:"O(log n) avg"})]})]}),e.jsx(Ke,{message:c})]}),e.jsxs("div",{className:"visual-panel",children:[e.jsx("h2",{children:"Skip List Visualization"}),e.jsx("div",{className:"skiplist-container",children:l===0?e.jsx("div",{className:"skiplist-empty",children:"Skip list is empty. Insert some values!"}):e.jsxs("div",{className:"skiplist-visual",children:[[...Array(i+1)].reverse().map((A,k)=>{const L=i-k;return e.jsxs("div",{className:"skiplist-level",children:[e.jsxs("div",{className:"level-label",children:[e.jsx(mc,{size:14}),e.jsxs("span",{children:["L",L]})]}),e.jsxs("div",{className:"level-nodes",children:[e.jsx("div",{className:"skiplist-head",children:"HEAD"}),e.jsx("div",{className:"skiplist-arrow",children:"→"}),O().map((V,T)=>{const _=K(V,L),z=C===V;return e.jsx(_e.Fragment,{children:_?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:`skiplist-node ${z?"highlighted":""}`,children:V}),e.jsx("div",{className:"skiplist-arrow",children:"→"})]}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"skiplist-gap",children:e.jsx("div",{className:"gap-line"})})})},`${L}-${V}`)}),e.jsx("div",{className:"skiplist-null",children:"NULL"})]})]},L)}),e.jsx("div",{className:"vertical-connectors",children:O().map(A=>{const k=q(A);return e.jsx("div",{className:"connector-column",style:{"--node-level":k},children:[...Array(k)].map((L,V)=>e.jsx("div",{className:"vertical-line"},V))},`connector-${A}`)})})]})}),e.jsxs("div",{className:"skiplist-legend",children:[e.jsxs("div",{className:"legend-item",children:[e.jsx("div",{className:"legend-color head"}),e.jsx("span",{children:"Head Node"})]}),e.jsxs("div",{className:"legend-item",children:[e.jsx("div",{className:"legend-color node"}),e.jsx("span",{children:"Data Node"})]}),e.jsxs("div",{className:"legend-item",children:[e.jsx("div",{className:"legend-color highlighted"}),e.jsx("span",{children:"Highlighted"})]}),e.jsxs("div",{className:"legend-item",children:[e.jsx("div",{className:"legend-color null"}),e.jsx("span",{children:"Null Pointer"})]})]})]})]}),e.jsx(Ce,{dataStructure:"skiplist"})]})}function Zy(){const[n,t]=p.useState([]),[r,s]=p.useState(0),[i,a]=p.useState(0),[l,o]=p.useState(0),[c,d]=p.useState(0),{message:u,showMessage:h}=Ge(3e3),[g,b]=p.useState(""),[N,y]=p.useState(""),[j,f]=p.useState(""),[m,x]=p.useState(""),[C,v]=p.useState(null),[P,S]=p.useState([]),[D,M]=p.useState(null),[E,q]=p.useState(null);p.useEffect(()=>{K()},[]);const K=async()=>{try{const _=await fe("/api/hashtable");t(_.table||[]),s(_.size||0),a(_.capacity||0),o(_.load_factor||0),d(_.collision_count||0)}catch(_){console.error("Error loading hashtable:",_)}},O=_=>{if(!i||i===0)return 0;let z=0;for(let F=0;F<_.length;F++)z=(z*31+_.charCodeAt(F))%i;return z},A=(_,z)=>{const F=O(_),B=[F];let I=F;for(;z[I]&&z[I][0]!==_&&(I=(I+1)%i,B.push(I),!(I===F||B.length>i)););return{originalHash:F,path:B,finalSlot:I}},k=async()=>{if(!g.trim()||!N.trim()){h("Please enter both key and value!","error");return}const _=i>0?O(g.trim()):0,z=n.length>0&&n[_]&&n[_][0]!==g.trim();let F=null;z&&(F=A(g.trim(),n));try{const B=await se("/api/hashtable/insert",{key:g.trim(),value:N.trim()});if(B.error){h(B.error,"error");return}await K(),M(g.trim()),z&&F?(q({key:g.trim(),originalSlot:F.originalHash,probedSlots:F.path,finalSlot:F.path[F.path.length-1]}),S(F.path),h(`Collision! "${g}" hashed to ${F.originalHash}, probed ${F.path.length} slot(s)`,"warning"),setTimeout(()=>{S([]),q(null)},4e3)):(h(`Inserted "${g}" → slot ${_}`,"success"),v(_),setTimeout(()=>v(null),2e3)),b(""),y(""),setTimeout(()=>M(null),3e3)}catch{h("Error inserting. Is Flask running?","error")}},L=async()=>{if(!j.trim()){h("Please enter a key!","error");return}try{const _=await se("/api/hashtable/delete",{key:j.trim()});if(_.error){h(_.error,"error");return}await K(),h(`Deleted "${j}"`,"success"),f("")}catch{h("Error deleting. Is Flask running?","error")}},V=async()=>{if(!m.trim()){h("Please enter a key!","error");return}try{const _=await fe(`/api/hashtable/get?key=${encodeURIComponent(m.trim())}`);if(_.error){h(_.error,"error");return}_.found?h(`Found: "${m}" = ${_.value}`,"success"):h(`Key "${m}" not found`,"error"),x("")}catch{h("Error searching item","error")}},T=async()=>{try{await se("/api/hashtable/clear",{}),await K(),S([]),q(null),h("Hashtable cleared!","success")}catch{h("Error clearing hashtable","error")}};return e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"intro-layout",children:[e.jsxs("div",{className:"intro-left",children:[e.jsxs("div",{className:"concept-box",children:[e.jsxs("div",{className:"concept-header",children:[e.jsx(Fe,{className:"icon-sm"}),e.jsx("span",{children:"What is a Hash Table?"})]}),e.jsxs("div",{className:"concept-content",children:[e.jsxs("p",{children:["A ",e.jsx("strong",{children:"Hash Table"})," maps keys to values using a hash function for O(1) lookups."]}),e.jsxs("div",{className:"concept-analogy",children:[e.jsx(ye,{}),e.jsxs("span",{children:["Like a ",e.jsx("strong",{children:"coat check"})," – give them your coat (value), get a ticket number (hash of key)!"]})]})]})]}),e.jsxs("div",{className:"concept-box",style:{marginTop:"1rem"},children:[e.jsxs("div",{className:"concept-header",children:[e.jsx(bn,{className:"icon-sm",style:{color:"#f59e0b"}}),e.jsx("span",{children:"Linear Probing"})]}),e.jsxs("div",{className:"concept-content",children:[e.jsxs("p",{children:["When two keys hash to the same slot (",e.jsx("strong",{children:"collision"}),"), we check the next slot until we find an empty one."]}),e.jsxs("div",{className:"concept-analogy",style:{marginTop:"0.5rem"},children:[e.jsx(it,{style:{color:"#3b82f6"}}),e.jsx("span",{children:"Like parking – if spot 3 is taken, try spot 4, then 5..."})]})]})]})]}),e.jsx(be,{context:"Hash Table with Linear Probing"})]}),e.jsxs("div",{className:"visualizer-layout",children:[e.jsxs("div",{className:"control-panel",children:[e.jsx("h2",{children:"Operations"}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{children:"Insert Key-Value"}),e.jsxs("div",{className:"input-group",children:[e.jsx("input",{type:"text",value:g,onChange:_=>b(_.target.value),placeholder:"Key"}),e.jsx("input",{type:"text",value:N,onChange:_=>y(_.target.value),onKeyPress:_=>_.key==="Enter"&&k(),placeholder:"Value"}),e.jsx("button",{onClick:k,className:"btn btn-insert",children:"Insert"})]})]}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{children:"Delete Key"}),e.jsxs("div",{className:"input-group",children:[e.jsx("input",{type:"text",value:j,onChange:_=>f(_.target.value),onKeyPress:_=>_.key==="Enter"&&L(),placeholder:"Key"}),e.jsx("button",{onClick:L,className:"btn btn-delete",children:"Delete"})]})]}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{children:"Search Key"}),e.jsxs("div",{className:"input-group",children:[e.jsx("input",{type:"text",value:m,onChange:_=>x(_.target.value),onKeyPress:_=>_.key==="Enter"&&V(),placeholder:"Key"}),e.jsx("button",{onClick:V,className:"btn btn-search",children:"Search"})]})]}),e.jsx("div",{className:"operation-group",children:e.jsx("button",{onClick:T,className:"btn btn-clear",children:"Clear Table"})}),e.jsxs("div",{className:"info-panel",children:[e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Items"}),e.jsxs("span",{className:"info-value",children:[r,"/",i]})]}),e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Load"}),e.jsxs("span",{className:"info-value",style:{color:l>=.7?"#f59e0b":"inherit"},children:[(l*100).toFixed(0),"%"]})]}),e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Collisions"}),e.jsx("span",{className:"info-value",style:{color:c>0?"#f59e0b":"inherit"},children:c})]})]}),e.jsxs("div",{className:"rehash-info-box",children:[e.jsx(xc,{size:16}),e.jsxs("div",{children:[e.jsx("strong",{children:"Rehashing Threshold: 70%"}),e.jsx("p",{children:"In practice, hash tables rehash (double capacity) when load factor reaches ~0.7 to maintain O(1) performance."}),l>=.7?e.jsxs("span",{className:"rehash-warning",children:["Current load (",(l*100).toFixed(0),"%) exceeds threshold!"]}):e.jsxs("span",{className:"rehash-safe",children:["Currently safe (",(l*100).toFixed(0),"% < 70%)"]})]})]}),e.jsx(Ke,{message:u})]}),e.jsxs("div",{className:"visual-panel",children:[e.jsx("h2",{children:"Hash Table"}),g&&e.jsxs("div",{className:"hash-demo",children:[e.jsxs("div",{className:"hash-demo-item",children:[e.jsx("span",{className:"hash-demo-label",children:"Key:"}),e.jsxs("span",{className:"hash-demo-key",children:['"',g,'"']})]}),e.jsx(me,{className:"hash-demo-arrow"}),e.jsx("div",{className:"hash-demo-item",children:e.jsx("span",{className:"hash-demo-label",children:"hash()"})}),e.jsx(me,{className:"hash-demo-arrow"}),e.jsxs("div",{className:"hash-demo-item",children:[e.jsx("span",{className:"hash-demo-label",children:"Slot:"}),e.jsx("span",{className:"hash-demo-index",children:O(g)})]})]}),E&&e.jsxs("div",{className:"collision-banner",children:[e.jsx(bn,{size:18}),e.jsxs("div",{children:[e.jsx("strong",{children:"Collision Detected!"}),e.jsxs("p",{children:['"',E.key,'" hashed to slot ',e.jsx("span",{className:"slot-badge original",children:E.originalSlot}),E.probedSlots.length>1&&e.jsxs(e.Fragment,{children:[" ","- Probed: ",E.probedSlots.map((_,z)=>e.jsxs("span",{children:[e.jsx("span",{className:`slot-badge ${z===E.probedSlots.length-1?"final":"probed"}`,children:_}),z<E.probedSlots.length-1&&" > "]},z))]})]})]})]}),e.jsx("div",{className:"ht-visual",children:!n||n.length===0?e.jsx("div",{className:"ht-empty",children:"Hash table is empty. Insert some key-value pairs!"}):e.jsx("div",{className:"ht-buckets",children:n.map((_,z)=>{const F=P.includes(z),B=E&&E.originalSlot===z,I=E&&E.finalSlot===z;return e.jsxs("div",{className:`ht-row ${_?"filled":"empty"} 
                        ${C===z?"highlighted":""} 
                        ${D&&_&&_[0]===D?"just-inserted":""}
                        ${F?"probed":""}
                        ${B?"original-hash":""}
                        ${I?"final-slot":""}`,children:[F&&e.jsx("div",{className:"probe-indicator",children:B?"X":I?"O":">"}),e.jsx("div",{className:`ht-key-box ${_?"has-key":""}`,children:_&&e.jsx("span",{className:"ht-key",children:_[0]})}),e.jsx("div",{className:"ht-arrow",children:_&&e.jsx(me,{size:20})}),e.jsx("div",{className:`ht-index ${B?"collision-index":""}`,children:z}),e.jsx("div",{className:`ht-value-box ${_?"has-value":""}`,children:_?e.jsx("span",{className:"ht-value",children:_[1]}):e.jsx("span",{className:"ht-empty-slot",children:"—"})})]},z)})})}),e.jsxs("div",{className:"ht-legend",children:[e.jsxs("div",{className:"legend-item",children:[e.jsx("div",{className:"legend-color key-color"}),e.jsx("span",{children:"Key"})]}),e.jsxs("div",{className:"legend-item",children:[e.jsx("div",{className:"legend-color index-color"}),e.jsx("span",{children:"Index"})]}),e.jsxs("div",{className:"legend-item",children:[e.jsx("div",{className:"legend-color value-color"}),e.jsx("span",{children:"Value"})]}),P.length>0&&e.jsxs("div",{className:"legend-item",children:[e.jsx("div",{className:"legend-color probe-color"}),e.jsx("span",{children:"Probing Path"})]})]})]})]}),e.jsx(Ce,{dataStructure:"hashtable"})]})}const e1={title:"What is Chaining?",description:"Chaining handles collisions by storing multiple key-value pairs in a linked list at each slot.",codeExample:"slot[hash] → [key1, val1] → [key2, val2] → ...",analogy:"Like a coat rack - multiple coats can hang on the same hook!"},n1={title:"Chaining vs Probing",chaining:{label:"Chaining:",color:"#22c55e",points:["Uses linked lists","Load factor can exceed 1.0"]},probing:{label:"Probing:",color:"#f59e0b",points:["Finds next empty slot","Load factor must stay below 1.0"]},summary:"Chaining is simpler and handles high load factors better, but uses extra memory for pointers."},t1={title:"Chaining Advantage",description:"With chaining, load factor can exceed 1.0 because each slot can hold multiple items in a chain.",highLoadThreshold:1.5,highLoadMessage:"High load ({loadFactor}) - chains getting long!",safeMessage:"Load factor: {loadFactor}"},r1={title:"Rehash Table",description:"Doubles the table capacity and redistributes all items to reduce chain lengths.",buttonText:"Rehash",recommendThreshold:1.5},s1=[{type:"color",className:"key-color",label:"Key"},{type:"color",className:"index-color",label:"Index"},{type:"color",className:"value-color",label:"Value"},{type:"icon",icon:"Link",color:"#8b5cf6",label:"Chain (Linked List)"}],i1={insert:{label:"Insert Key-Value",keyPlaceholder:"Key",valuePlaceholder:"Value",buttonText:"Insert"},delete:{label:"Delete Key",placeholder:"Key",buttonText:"Delete"},search:{label:"Search Key",placeholder:"Key",buttonText:"Search"},clear:{buttonText:"Clear Table"},rehash:{buttonText:"Rehash"}},a1={items:"Items",capacity:"Capacity",load:"Load",collisions:"Collisions"},l1={emptyTable:"Hash table is empty. Insert some key-value pairs!",insertSuccess:'Inserted "{key}" at slot {index}',insertUpdated:'Updated "{key}" at slot {index}',insertCollision:'Collision! Added "{key}" to chain at slot {index}',deleteSuccess:'Deleted "{key}"',searchFound:'Found: "{key}" = {value}',searchNotFound:'Key "{key}" not found',clearSuccess:"Hashtable cleared!",rehashSuccess:"Rehashed! Capacity: {oldCapacity} -> {newCapacity}",rehashEmpty:"Nothing to rehash - table is empty!",errorNoKey:"Please enter a key!",errorNoKeyValue:"Please enter both key and value!",errorInsert:"Error inserting. Is Flask running?",errorDelete:"Error deleting. Is Flask running?",errorSearch:"Error searching item",errorClear:"Error clearing hashtable",errorRehash:"Error rehashing. Is Flask running?"},ne={concept:e1,comparison:n1,chainingAdvantage:t1,rehash:r1,legend:s1,operations:i1,infoLabels:a1,messages:l1};function o1(){const[n,t]=p.useState([]),[r,s]=p.useState(0),[i,a]=p.useState(0),[l,o]=p.useState(0),[c,d]=p.useState(0),{message:u,showMessage:h}=Ge(3e3),[g,b]=p.useState(""),[N,y]=p.useState(""),[j,f]=p.useState(""),[m,x]=p.useState(""),[C,v]=p.useState(null),[P,S]=p.useState(null),[D,M]=p.useState(!1);p.useEffect(()=>{E()},[]);const E=async()=>{try{const L=await fe("/api/hashtable_chaining");t(L.table||[]),s(L.size||0),a(L.capacity||0),o(L.load_factor||0),d(L.collision_count||0)}catch(L){console.error("Error loading hashtable:",L)}},q=L=>{if(!i||i===0)return 0;let V=0;for(let T=0;T<L.length;T++)V=(V*31+L.charCodeAt(T))%i;return V},K=async()=>{if(!g.trim()||!N.trim()){h(ne.messages.errorNoKeyValue,"error");return}try{const L=await se("/api/hashtable_chaining/insert",{key:g.trim(),value:N.trim()});if(L.error){h(L.error,"error");return}await E(),S(g.trim()),L.updated?h(ne.messages.insertUpdated.replace("{key}",g).replace("{index}",L.index),"info"):L.collision?h(ne.messages.insertCollision.replace("{key}",g).replace("{index}",L.index),"warning"):h(ne.messages.insertSuccess.replace("{key}",g).replace("{index}",L.index),"success"),v(L.index),setTimeout(()=>{v(null),S(null)},3e3),b(""),y("")}catch{h(ne.messages.errorInsert,"error")}},O=async()=>{if(!j.trim()){h(ne.messages.errorNoKey,"error");return}try{const L=await se("/api/hashtable_chaining/delete",{key:j.trim()});if(L.error){h(L.error,"error");return}await E(),h(ne.messages.deleteSuccess.replace("{key}",j),"success"),f("")}catch{h(ne.messages.errorDelete,"error")}},A=async()=>{if(!m.trim()){h(ne.messages.errorNoKey,"error");return}try{const L=await fe(`/api/hashtable_chaining/get?key=${encodeURIComponent(m.trim())}`);if(L.error){h(L.error,"error");return}L.found?h(ne.messages.searchFound.replace("{key}",m).replace("{value}",L.value),"success"):h(ne.messages.searchNotFound.replace("{key}",m),"error"),x("")}catch{h(ne.messages.errorSearch,"error")}},k=async()=>{try{await se("/api/hashtable_chaining/clear",{}),await E(),v(null),S(null),h(ne.messages.clearSuccess,"success")}catch{h(ne.messages.errorClear,"error")}};return e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"intro-layout",children:[e.jsxs("div",{className:"intro-left",children:[e.jsxs("div",{className:"concept-box",children:[e.jsxs("div",{className:"concept-header",children:[e.jsx(Fe,{className:"icon-sm"}),e.jsx("span",{children:ne.concept.title})]}),e.jsxs("div",{className:"concept-content",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Chaining"})," ",ne.concept.description.replace("Chaining ","")]}),e.jsx("div",{style:{background:"var(--bg-tertiary)",padding:"0.75rem",borderRadius:"8px",marginTop:"0.5rem",fontFamily:"monospace",fontSize:"0.9rem"},children:e.jsx("div",{children:ne.concept.codeExample})}),e.jsxs("div",{className:"concept-analogy",style:{marginTop:"0.75rem"},children:[e.jsx(ye,{}),e.jsx("span",{children:ne.concept.analogy})]})]})]}),e.jsxs("div",{className:"concept-box",style:{marginTop:"1rem"},children:[e.jsxs("div",{className:"concept-header",children:[e.jsx(it,{className:"icon-sm",style:{color:"#3b82f6"}}),e.jsx("span",{children:ne.comparison.title})]}),e.jsxs("div",{className:"concept-content",children:[e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",fontSize:"0.85rem"},children:[e.jsxs("div",{children:[e.jsx("strong",{style:{color:ne.comparison.chaining.color},children:ne.comparison.chaining.label}),ne.comparison.chaining.points.map((L,V)=>e.jsx("div",{style:{marginTop:"0.25rem"},children:L},V))]}),e.jsxs("div",{children:[e.jsx("strong",{style:{color:ne.comparison.probing.color},children:ne.comparison.probing.label}),ne.comparison.probing.points.map((L,V)=>e.jsx("div",{style:{marginTop:"0.25rem"},children:L},V))]})]}),e.jsx("p",{style:{marginTop:"0.75rem",fontSize:"0.85rem"},children:ne.comparison.summary})]})]})]}),e.jsx(be,{context:"Hash Table with Chaining"})]}),e.jsxs("div",{className:"visualizer-layout",children:[e.jsxs("div",{className:"control-panel",children:[e.jsx("h2",{children:"Operations"}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{children:ne.operations.insert.label}),e.jsxs("div",{className:"input-group",children:[e.jsx("input",{type:"text",value:g,onChange:L=>b(L.target.value),placeholder:ne.operations.insert.keyPlaceholder}),e.jsx("input",{type:"text",value:N,onChange:L=>y(L.target.value),onKeyDown:L=>L.key==="Enter"&&K(),placeholder:ne.operations.insert.valuePlaceholder}),e.jsx("button",{onClick:K,className:"btn btn-insert",children:ne.operations.insert.buttonText})]})]}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{children:ne.operations.delete.label}),e.jsxs("div",{className:"input-group",children:[e.jsx("input",{type:"text",value:j,onChange:L=>f(L.target.value),onKeyDown:L=>L.key==="Enter"&&O(),placeholder:ne.operations.delete.placeholder}),e.jsx("button",{onClick:O,className:"btn btn-delete",children:ne.operations.delete.buttonText})]})]}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{children:ne.operations.search.label}),e.jsxs("div",{className:"input-group",children:[e.jsx("input",{type:"text",value:m,onChange:L=>x(L.target.value),onKeyDown:L=>L.key==="Enter"&&A(),placeholder:ne.operations.search.placeholder}),e.jsx("button",{onClick:A,className:"btn btn-search",children:ne.operations.search.buttonText})]})]}),e.jsx("div",{className:"operation-group",style:{display:"flex",gap:"0.5rem"},children:e.jsx("button",{onClick:k,className:"btn btn-clear",children:ne.operations.clear.buttonText})}),e.jsxs("div",{className:"info-panel",children:[e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:ne.infoLabels.items}),e.jsx("span",{className:"info-value",children:r})]}),e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:ne.infoLabels.capacity}),e.jsx("span",{className:"info-value",children:i})]}),e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:ne.infoLabels.load}),e.jsx("span",{className:"info-value",style:{color:l>=1?"#f59e0b":"inherit"},children:l.toFixed(2)})]}),e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:ne.infoLabels.collisions}),e.jsx("span",{className:"info-value",style:{color:c>0?"#f59e0b":"inherit"},children:c})]})]}),e.jsxs("div",{className:"rehash-info-box",children:[e.jsx(Zl,{size:16}),e.jsxs("div",{children:[e.jsx("strong",{children:ne.chainingAdvantage.title}),e.jsx("p",{children:ne.chainingAdvantage.description}),l>=ne.chainingAdvantage.highLoadThreshold?e.jsxs("div",{className:"rehash-recommend",children:[e.jsx(Mr,{size:14}),e.jsx("span",{className:"rehash-warning",children:ne.chainingAdvantage.highLoadMessage.replace("{loadFactor}",l.toFixed(2))})]}):e.jsx("span",{className:"rehash-safe",children:ne.chainingAdvantage.safeMessage.replace("{loadFactor}",l.toFixed(2))})]})]}),e.jsx(Ke,{message:u})]}),e.jsxs("div",{className:"visual-panel",children:[e.jsx("h2",{children:"Hash Table (Chaining)"}),g&&e.jsxs("div",{className:"hash-demo",children:[e.jsxs("div",{className:"hash-demo-item",children:[e.jsx("span",{className:"hash-demo-label",children:"Key:"}),e.jsxs("span",{className:"hash-demo-key",children:['"',g,'"']})]}),e.jsx(me,{className:"hash-demo-arrow"}),e.jsx("div",{className:"hash-demo-item",children:e.jsx("span",{className:"hash-demo-label",children:"hash()"})}),e.jsx(me,{className:"hash-demo-arrow"}),e.jsxs("div",{className:"hash-demo-item",children:[e.jsx("span",{className:"hash-demo-label",children:"Slot:"}),e.jsx("span",{className:"hash-demo-index",children:q(g)})]})]}),e.jsx("div",{className:"ht-chaining-visual",children:!n||n.length===0?e.jsx("div",{className:"ht-empty",children:ne.messages.emptyTable}):e.jsx("div",{className:"ht-chaining-buckets",children:n.map((L,V)=>{const T=C===V,_=L&&Array.isArray(L)&&L.length>0,z=_?L.length:0;return e.jsxs("div",{className:`ht-chaining-row ${_?"filled":"empty"} ${T?"highlighted":""}`,children:[e.jsxs("div",{className:"ht-chaining-index",children:[e.jsx("span",{className:"index-number",children:V}),z>1&&e.jsx("span",{className:"chain-count",children:z})]}),e.jsx("div",{className:"ht-chaining-arrow-container",children:e.jsx(me,{size:18,className:"bucket-arrow"})}),e.jsx("div",{className:"ht-chaining-content",children:_?e.jsx("div",{className:"ht-chaining-chain",children:L.map((F,B)=>{const I=P&&F.key===P;return e.jsxs(_e.Fragment,{children:[e.jsxs("div",{className:`ht-chaining-node ${I?"just-inserted":""} ${B>0?"collision-node":""}`,children:[e.jsx("div",{className:"node-key",children:F.key}),e.jsx("div",{className:"node-separator"}),e.jsx("div",{className:"node-value",children:F.value})]}),B<L.length-1&&e.jsx("div",{className:"chain-link",children:e.jsx(me,{size:16})})]},B)})}):e.jsx("div",{className:"ht-chaining-empty-slot",children:e.jsx("span",{children:"Empty"})})})]},V)})})}),e.jsx("div",{className:"ht-legend",children:ne.legend.map((L,V)=>e.jsxs("div",{className:"legend-item",children:[L.type==="color"?e.jsx("div",{className:`legend-color ${L.className}`}):e.jsx(Zl,{size:14,style:{color:L.color}}),e.jsx("span",{children:L.label})]},V))})]})]}),e.jsx(Ce,{dataStructure:"hashtableChaining"})]})}function c1(){const[n,t]=p.useState([]),[r,s]=p.useState(0),[i,a]=p.useState(0),[l,o]=p.useState(0),{message:c,showMessage:d}=Ge(3e3),[u,h]=p.useState(""),[g,b]=p.useState(""),[N,y]=p.useState(""),[j,f]=p.useState(""),[m,x]=p.useState(null),[C,v]=p.useState([]),[P,S]=p.useState(null),[D,M]=p.useState(null);p.useEffect(()=>{E()},[]);const E=async()=>{try{const V=await fe("/api/hashtable_quadratic");t(V.table||[]),s(V.size||0),a(V.capacity||0),o(V.load_factor||0)}catch(V){console.error("Error loading hashtable:",V)}},q=V=>{if(!i||i===0)return 0;let T=0;for(let _=0;_<V.length;_++)T=(T*31+V.charCodeAt(_))%i;return T},K=(V,T)=>{var F;const _=q(V),z=[];for(let B=0;B<i;B++){const I=(_+B*B)%i;if(z.push({index:I,i:B,formula:`(${_} + ${B}²) % ${i} = ${I}`}),!T[I]||T[I][0]===V)break}return{originalHash:_,path:z,finalSlot:(F=z[z.length-1])==null?void 0:F.index}},O=async()=>{if(!u.trim()||!g.trim()){d("Please enter both key and value!","error");return}const V=i>0?q(u.trim()):0,T=n.length>0&&n[V]&&n[V]!=="DELETED"&&n[V][0]!==u.trim();let _=null;T&&(_=K(u.trim(),n));try{const z=await se("/api/hashtable_quadratic/insert",{key:u.trim(),value:g.trim()});if(z.error){d(z.error,"error");return}await E(),S(u.trim()),T&&_?(M({key:u.trim(),originalSlot:_.originalHash,probedSlots:_.path,finalSlot:z.final_index}),v(_.path.map(F=>F.index)),d(`Collision! Quadratic probing: ${_.path.length} probe(s)`,"warning"),setTimeout(()=>{v([]),M(null)},5e3)):(d(`Inserted "${u}" → slot ${V}`,"success"),x(V),setTimeout(()=>x(null),2e3)),h(""),b(""),setTimeout(()=>S(null),3e3)}catch{d("Error inserting. Is Flask running?","error")}},A=async()=>{if(!N.trim()){d("Please enter a key!","error");return}try{const V=await se("/api/hashtable_quadratic/delete",{key:N.trim()});if(V.error){d(V.error,"error");return}await E(),d(`Deleted "${N}"`,"success"),y("")}catch{d("Error deleting. Is Flask running?","error")}},k=async()=>{if(!j.trim()){d("Please enter a key!","error");return}try{const V=await fe(`/api/hashtable_quadratic/get?key=${encodeURIComponent(j.trim())}`);if(V.error){d(V.error,"error");return}V.found?d(`Found: "${j}" = ${V.value}`,"success"):d(`Key "${j}" not found`,"error"),f("")}catch{d("Error searching item","error")}},L=async()=>{try{await se("/api/hashtable_quadratic/clear",{}),await E(),v([]),M(null),d("Hashtable cleared!","success")}catch{d("Error clearing hashtable","error")}};return e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"intro-layout",children:[e.jsxs("div",{className:"intro-left",children:[e.jsxs("div",{className:"concept-box",children:[e.jsxs("div",{className:"concept-header",children:[e.jsx(Fe,{className:"icon-sm"}),e.jsx("span",{children:"What is Quadratic Probing?"})]}),e.jsxs("div",{className:"concept-content",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Quadratic Probing"})," is a collision resolution technique where we probe at quadratically increasing intervals."]}),e.jsxs("div",{style:{background:"var(--bg-tertiary)",padding:"0.75rem",borderRadius:"8px",marginTop:"0.5rem",fontFamily:"monospace",fontSize:"0.9rem"},children:[e.jsx("div",{children:"probe(i) = (hash + i²) % capacity"}),e.jsx("div",{style:{color:"var(--text-muted)",marginTop:"0.25rem"},children:"i = 0, 1, 4, 9, 16, 25..."})]}),e.jsxs("div",{className:"concept-analogy",style:{marginTop:"0.75rem"},children:[e.jsx(ye,{}),e.jsxs("span",{children:["Unlike linear probing, we jump further each time – reducing ",e.jsx("strong",{children:"clustering"}),"!"]})]})]})]}),e.jsxs("div",{className:"concept-box",style:{marginTop:"1rem"},children:[e.jsxs("div",{className:"concept-header",children:[e.jsx(it,{className:"icon-sm",style:{color:"#3b82f6"}}),e.jsx("span",{children:"Linear vs Quadratic"})]}),e.jsxs("div",{className:"concept-content",children:[e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",fontSize:"0.85rem"},children:[e.jsxs("div",{children:[e.jsx("strong",{style:{color:"#f59e0b"},children:"Linear:"}),e.jsx("div",{style:{fontFamily:"monospace",marginTop:"0.25rem"},children:"+1, +2, +3, +4..."})]}),e.jsxs("div",{children:[e.jsx("strong",{style:{color:"#22c55e"},children:"Quadratic:"}),e.jsx("div",{style:{fontFamily:"monospace",marginTop:"0.25rem"},children:"+1, +4, +9, +16..."})]})]}),e.jsx("p",{style:{marginTop:"0.75rem",fontSize:"0.85rem"},children:"Quadratic probing spreads entries more evenly but may not find empty slots if table is over 50% full."})]})]})]}),e.jsx(be,{context:"Hash Table with Quadratic Probing"})]}),e.jsxs("div",{className:"visualizer-layout",children:[e.jsxs("div",{className:"control-panel",children:[e.jsx("h2",{children:"Operations"}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{children:"Insert Key-Value"}),e.jsxs("div",{className:"input-group",children:[e.jsx("input",{type:"text",value:u,onChange:V=>h(V.target.value),placeholder:"Key"}),e.jsx("input",{type:"text",value:g,onChange:V=>b(V.target.value),onKeyPress:V=>V.key==="Enter"&&O(),placeholder:"Value"}),e.jsx("button",{onClick:O,className:"btn btn-insert",children:"Insert"})]})]}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{children:"Delete Key"}),e.jsxs("div",{className:"input-group",children:[e.jsx("input",{type:"text",value:N,onChange:V=>y(V.target.value),onKeyPress:V=>V.key==="Enter"&&A(),placeholder:"Key"}),e.jsx("button",{onClick:A,className:"btn btn-delete",children:"Delete"})]})]}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{children:"Search Key"}),e.jsxs("div",{className:"input-group",children:[e.jsx("input",{type:"text",value:j,onChange:V=>f(V.target.value),onKeyPress:V=>V.key==="Enter"&&k(),placeholder:"Key"}),e.jsx("button",{onClick:k,className:"btn btn-search",children:"Search"})]})]}),e.jsx("div",{className:"operation-group",children:e.jsx("button",{onClick:L,className:"btn btn-clear",children:"Clear Table"})}),e.jsxs("div",{className:"info-panel",children:[e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Items"}),e.jsxs("span",{className:"info-value",children:[r,"/",i]})]}),e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Load"}),e.jsxs("span",{className:"info-value",style:{color:l>=.5?"#f59e0b":"inherit"},children:[(l*100).toFixed(0),"%"]})]})]}),e.jsxs("div",{className:"rehash-info-box",children:[e.jsx(xc,{size:16}),e.jsxs("div",{children:[e.jsx("strong",{children:"Rehashing Threshold: 50%"}),e.jsx("p",{children:"Quadratic probing requires lower load factor (~0.5) to guarantee finding empty slots."}),l>=.5?e.jsxs("span",{className:"rehash-warning",children:["Load (",(l*100).toFixed(0),"%) at threshold!"]}):e.jsxs("span",{className:"rehash-safe",children:["Currently safe (",(l*100).toFixed(0),"% < 50%)"]})]})]}),e.jsx(Ke,{message:c})]}),e.jsxs("div",{className:"visual-panel",children:[e.jsx("h2",{children:"Hash Table (Quadratic Probing)"}),u&&e.jsxs("div",{className:"hash-demo",children:[e.jsxs("div",{className:"hash-demo-item",children:[e.jsx("span",{className:"hash-demo-label",children:"Key:"}),e.jsxs("span",{className:"hash-demo-key",children:['"',u,'"']})]}),e.jsx(me,{className:"hash-demo-arrow"}),e.jsx("div",{className:"hash-demo-item",children:e.jsx("span",{className:"hash-demo-label",children:"hash()"})}),e.jsx(me,{className:"hash-demo-arrow"}),e.jsxs("div",{className:"hash-demo-item",children:[e.jsx("span",{className:"hash-demo-label",children:"Slot:"}),e.jsx("span",{className:"hash-demo-index",children:q(u)})]})]}),D&&e.jsxs("div",{className:"collision-banner",children:[e.jsx(bn,{size:18}),e.jsxs("div",{children:[e.jsx("strong",{children:"Quadratic Probing!"}),e.jsxs("p",{children:['"',D.key,'" hashed to slot ',e.jsx("span",{className:"slot-badge original",children:D.originalSlot})]}),e.jsx("div",{style:{marginTop:"0.5rem",fontSize:"0.8rem",fontFamily:"monospace"},children:D.probedSlots.map((V,T)=>e.jsxs("div",{style:{marginBottom:"0.25rem"},children:["i=",V.i,": ",V.formula,T===D.probedSlots.length-1&&e.jsx("span",{style:{color:"#4ade80"},children:" [FOUND]"})]},T))})]})]}),e.jsx("div",{className:"ht-visual",children:!n||n.length===0?e.jsx("div",{className:"ht-empty",children:"Hash table is empty. Insert some key-value pairs!"}):e.jsx("div",{className:"ht-buckets",children:n.map((V,T)=>{const _=C.includes(T),z=D&&D.originalSlot===T,F=D&&D.finalSlot===T,B=V==="DELETED",I=V&&V!=="DELETED";return e.jsxs("div",{className:`ht-row ${I?"filled":"empty"} 
                        ${B?"deleted":""}
                        ${m===T?"highlighted":""} 
                        ${P&&I&&V[0]===P?"just-inserted":""}
                        ${_?"probed":""}
                        ${z?"original-hash":""}
                        ${F?"final-slot":""}`,children:[_&&e.jsx("div",{className:"probe-indicator",children:z?"X":F?"O":">"}),e.jsxs("div",{className:`ht-key-box ${I?"has-key":""} ${B?"deleted-slot":""}`,children:[I&&e.jsx("span",{className:"ht-key",children:V[0]}),B&&e.jsx("span",{className:"ht-deleted-text",children:"DEL"})]}),e.jsx("div",{className:"ht-arrow",children:I&&e.jsx(me,{size:20})}),e.jsx("div",{className:`ht-index ${z?"collision-index":""}`,children:T}),e.jsx("div",{className:`ht-value-box ${I?"has-value":""} ${B?"deleted-slot":""}`,children:I?e.jsx("span",{className:"ht-value",children:V[1]}):B?e.jsx("span",{className:"ht-deleted-text",children:"DELETED"}):e.jsx("span",{className:"ht-empty-slot",children:"—"})})]},T)})})}),e.jsxs("div",{className:"ht-legend",children:[e.jsxs("div",{className:"legend-item",children:[e.jsx("div",{className:"legend-color key-color"}),e.jsx("span",{children:"Key"})]}),e.jsxs("div",{className:"legend-item",children:[e.jsx("div",{className:"legend-color index-color"}),e.jsx("span",{children:"Index"})]}),e.jsxs("div",{className:"legend-item",children:[e.jsx("div",{className:"legend-color value-color"}),e.jsx("span",{children:"Value"})]}),C.length>0&&e.jsxs("div",{className:"legend-item",children:[e.jsx("div",{className:"legend-color probe-color"}),e.jsx("span",{children:"Probe Path"})]})]})]})]}),e.jsx(Ce,{dataStructure:"hashtable"})]})}const cr=7,d1={inorder:{name:"Inorder Traversal",order:"Left → Root → Right",description:"Visit left subtree, process root, then visit right subtree. For BST, this produces sorted order.",useCase:["Get sorted elements","Validate BST","Create mirror image"],complexity:{time:"O(n)",space:"O(h)"}},preorder:{name:"Preorder Traversal",order:"Root → Left → Right",description:"Process root first, then recursively visit left and right subtrees. Useful for copying trees.",useCase:["Copy tree structure","Serialize/deserialize","Prefix expressions"],complexity:{time:"O(n)",space:"O(h)"}},postorder:{name:"Postorder Traversal",order:"Left → Right → Root",description:"Visit left subtree, right subtree, then process root. Essential for deleting nodes safely.",useCase:["Delete nodes safely","Calculate folder sizes","Postfix expressions"],complexity:{time:"O(n)",space:"O(h)"}},levelorder:{name:"Level Order Traversal",order:"Level by Level (BFS)",description:"Visit nodes level by level using a queue. Perfect for finding shortest paths.",useCase:["Shortest path","Level-wise printing","Nodes at distance K"],complexity:{time:"O(n)",space:"O(w)"}}},to=(n,t=[])=>(n&&(to(n.left,t),t.push(n.data),to(n.right,t)),t),ro=(n,t=[])=>(n&&(t.push(n.data),ro(n.left,t),ro(n.right,t)),t),so=(n,t=[])=>(n&&(so(n.left,t),so(n.right,t),t.push(n.data)),t),u1=n=>{if(!n)return[];const t=[],r=[n];for(;r.length;){const s=r.shift();t.push(s.data),s.left&&r.push(s.left),s.right&&r.push(s.right)}return t},io=(n,t=0)=>n?Math.max(io(n.left,t+1),io(n.right,t+1)):t-1;function h1(){return e.jsxs("div",{className:"intro-left",children:[e.jsxs("div",{className:"concept-box",children:[e.jsxs("div",{className:"concept-header",children:[e.jsx(Fe,{className:"icon-sm"}),e.jsx("span",{children:"What is a Binary Tree?"})]}),e.jsxs("div",{className:"concept-content",children:[e.jsxs("p",{children:["A ",e.jsx("strong",{children:"Binary Tree"})," is a hierarchical data structure where each node has at most ",e.jsx("strong",{children:"two children"}),": left and right."]}),e.jsxs("div",{className:"concept-analogy",children:[e.jsx(ye,{}),e.jsxs("span",{children:["Think of a ",e.jsx("strong",{children:"family tree"})," – each person can have up to two children!"]})]}),e.jsxs("div",{className:"concept-key-terms",children:[e.jsx("h4",{children:"Key Terms:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Node:"})," Contains data and links to children"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Root:"})," The topmost node (no parent)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Leaf:"})," A node with no children"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Height:"})," Longest path from root to leaf"]})]})]})]})]}),e.jsxs("div",{className:"concept-box",style:{marginTop:"1rem"},children:[e.jsxs("div",{className:"concept-header",children:[e.jsx(it,{className:"icon-sm"}),e.jsx("span",{children:"What are Tree Traversals?"})]}),e.jsxs("div",{className:"concept-content",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Tree Traversal"})," is visiting each node ",e.jsx("strong",{children:"exactly once"})," in a specific order."]}),e.jsxs("div",{className:"concept-why-traverse",children:[e.jsx("h4",{children:"Why Traverse?"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Search:"})," Find specific data"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Copy:"})," Duplicate the tree"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Evaluate:"})," Calculate expressions"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Delete:"})," Remove nodes properly"]})]})]}),e.jsxs("div",{className:"concept-analogy",style:{marginTop:"0.75rem"},children:[e.jsx(ye,{}),e.jsx("span",{children:"Like reading a book – you can read in different orders based on your needs!"})]})]})]})]})}function p1({insertValue:n,deleteValue:t,size:r,height:s,message:i,tree:a,isAnimating:l,visitedNodes:o,onInsertValueChange:c,onDeleteValueChange:d,onInsert:u,onDelete:h,onTraversal:g,onClear:b,onResetTraversal:N}){const y=(j,f)=>{const m=j.target.value;(m===""||m==="-"||/^-?\d*\.?\d*$/.test(m))&&f(m)};return e.jsxs("div",{className:"control-panel",children:[e.jsx("h2",{children:"Binary Tree Traversals"}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{htmlFor:"insertValue",children:"Insert Node"}),e.jsxs("div",{className:"input-group",children:[e.jsx("input",{type:"number",id:"insertValue",value:n,onChange:j=>y(j,c),onKeyPress:j=>j.key==="Enter"&&u(),placeholder:"Enter a number"}),e.jsx("button",{onClick:u,className:"btn btn-insert",children:"Insert"})]})]}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{htmlFor:"deleteValue",children:"Delete Node"}),e.jsxs("div",{className:"input-group",children:[e.jsx("input",{type:"number",id:"deleteValue",value:t,onChange:j=>y(j,d),onKeyPress:j=>j.key==="Enter"&&h(),placeholder:"Enter a number"}),e.jsx("button",{onClick:h,className:"btn btn-delete",children:"Delete"})]})]}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{children:"Traversals"}),e.jsx("div",{className:"btn-group",children:["inorder","preorder","postorder","levelorder"].map(j=>e.jsx("button",{onClick:()=>g(j),className:"btn btn-traversal",disabled:l||!a,children:j==="levelorder"?"Level Order":j.charAt(0).toUpperCase()+j.slice(1)},j))}),o.length>0&&!l&&e.jsx("button",{onClick:N,className:"btn btn-secondary",style:{marginTop:"0.5rem",width:"100%"},children:"Reset Colors"})]}),e.jsxs("div",{className:"traversal-legend",children:[e.jsxs("div",{className:"legend-item",children:[e.jsx("span",{className:"legend-dot legend-dot--default"}),e.jsx("span",{children:"Not visited"})]}),e.jsxs("div",{className:"legend-item",children:[e.jsx("span",{className:"legend-dot legend-dot--visiting"}),e.jsx("span",{children:"Visiting"})]}),e.jsxs("div",{className:"legend-item",children:[e.jsx("span",{className:"legend-dot legend-dot--visited"}),e.jsx("span",{children:"Visited"})]})]}),e.jsxs("div",{className:"info-panel",children:[e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Size:"}),e.jsx("span",{className:"info-value",children:r})]}),e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Height:"}),e.jsx("span",{className:"info-value",children:s})]}),e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Max Size:"}),e.jsx("span",{className:"info-value",children:cr})]})]}),r>=cr*.8&&r<cr&&e.jsxs("div",{className:"warning-box",children:[e.jsx(bn,{size:18}),e.jsxs("div",{children:[e.jsx("strong",{children:"Tree is filling up!"})," You're at ",r,"/",cr," nodes."]})]}),e.jsx("div",{className:"operation-group",children:e.jsx("button",{onClick:b,className:"btn btn-clear",children:"Clear Tree"})}),i&&e.jsx("div",{className:`message message-${i.includes("Error")||i.includes("error")?"error":/success|complete|Inserted|Deleted|cleared/i.test(i)?"success":i.includes("full")?"warning":"info"}`,children:i})]})}function f1({tree:n,currentNode:t,visitedNodes:r}){const s=c=>{const d=t===c,u=r.includes(c);return{color:d?"#f59e0b":u?"#10b981":"#6366f1",glow:d?"drop-shadow(0 0 12px #f59e0b) drop-shadow(0 0 20px #f59e0b)":u?"drop-shadow(0 0 6px #10b981)":"none",radius:d?30:25,stroke:d?3:2,fontSize:d?16:14,fontWeight:d?"bold":"normal"}},i=(c,d,u,h,g)=>{if(!c)return[];const b=Math.pow(2,g-h)*50,N=s(c.data),y=[];return c.left&&(y.push(e.jsx("line",{x1:d,y1:u,x2:d-b,y2:u+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:"2"},`l-${c.data}-l`)),y.push(...i(c.left,d-b,u+100,h+1,g))),c.right&&(y.push(e.jsx("line",{x1:d,y1:u,x2:d+b,y2:u+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:"2"},`l-${c.data}-r`)),y.push(...i(c.right,d+b,u+100,h+1,g))),y.push(e.jsxs("g",{style:{filter:N.glow,transition:"all 0.3s ease"},children:[e.jsx("circle",{cx:d,cy:u,r:N.radius,fill:N.color,stroke:"white",strokeWidth:N.stroke,style:{transition:"all 0.3s ease"}}),e.jsx("text",{x:d,y:u,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:N.fontSize,fontWeight:N.fontWeight,children:c.data})]},`n-${c.data}-${d}`)),y};if(!n)return e.jsx("div",{className:"tree-empty",children:"Tree is empty. Insert some nodes!"});const a=io(n),l=(a+1)*100+50,o=Math.max(800,Math.pow(2,Math.max(a,1))*80);return e.jsx("svg",{width:o,height:l,className:"tree-svg",children:i(n,o/2,50,0,a)})}function m1({traversalType:n,traversalResult:t,isAnimating:r,traversalComplete:s}){if(!n||t.length===0&&!r)return null;const i=d1[n];return e.jsxs("div",{className:"traversal-output-panel",children:[e.jsxs("div",{style:{marginBottom:"1rem"},children:[e.jsxs("h3",{className:"traversal-title",children:[i==null?void 0:i.name,r&&e.jsx("span",{className:"traversal-badge traversal-badge--running",children:"Running..."}),s&&e.jsx("span",{className:"traversal-badge traversal-badge--complete",children:"Complete"})]}),e.jsxs("p",{className:"traversal-order",children:[e.jsx("strong",{children:"Order:"})," ",i==null?void 0:i.order]}),e.jsx("p",{className:"traversal-description",children:i==null?void 0:i.description})]}),e.jsxs("div",{className:"traversal-output-box",children:[e.jsx("div",{className:"traversal-output-label",children:"Output Sequence:"}),e.jsx("div",{className:"traversal-sequence-container",children:t.length===0&&r?e.jsx("span",{style:{color:"var(--text-muted)",fontStyle:"italic"},children:"Traversing..."}):t.map((a,l)=>e.jsx("span",{className:`traversal-node ${l===t.length-1&&!s?"traversal-node--current":"traversal-node--complete"}`,children:a},l))})]}),s&&t.length>0&&e.jsxs("div",{className:"traversal-array-section",children:[e.jsx("div",{className:"traversal-array-label",children:"Array Output:"}),e.jsxs("code",{className:"traversal-array-output",children:["[",t.join(", "),"]"]}),e.jsxs("p",{className:"traversal-use-case",children:["Use case: ",i==null?void 0:i.useCase.join(" • ")]}),e.jsxs("div",{className:"traversal-complexity",children:[e.jsx("strong",{children:"Time:"})," ",e.jsx("code",{className:"complexity-value",children:i==null?void 0:i.complexity.time})," (visits each node once)",e.jsx("br",{}),e.jsx("strong",{children:"Space:"})," ",e.jsx("code",{className:"complexity-value",children:i==null?void 0:i.complexity.space})," (recursion stack/queue)"]})]})]})}function g1(){const[n,t]=p.useState(null),[r,s]=p.useState(0),[i,a]=p.useState(-1),[l,o]=p.useState(""),[c,d]=p.useState(""),[u,h]=p.useState(""),[g,b]=p.useState([]),[N,y]=p.useState(!1),[j,f]=p.useState(null),[m,x]=p.useState([]),[C,v]=p.useState(null),[P,S]=p.useState(!1);p.useEffect(()=>{D()},[]);const D=async()=>{try{const L=await(await fetch("/api/binarytree")).json();t(L.tree),s(L.size||0),a(L.height!==void 0?L.height:-1)}catch(k){console.error("Error loading tree:",k)}},M=k=>{h(k),setTimeout(()=>h(""),3e3)},E=async()=>{if(!l.trim()){M("Please enter a number!");return}const k=Number(l);if(isNaN(k)){M("Please enter a valid number!");return}if(r>=cr){M(`Tree is full! Maximum size is ${cr} nodes.`);return}try{const V=await(await fetch("/api/binarytree/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:k})})).json();if(V.error){M(V.error);return}t(V.tree),s(V.size||0),a(V.height!==void 0?V.height:-1),M(`Inserted ${k}`),o("")}catch{M("Error inserting node")}},q=async()=>{if(!c.trim()){M("Please enter a number!");return}const k=Number(c);if(isNaN(k)){M("Please enter a valid number!");return}try{const V=await(await fetch("/api/binarytree/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:k})})).json();if(V.error){M(V.error);return}t(V.tree),s(V.size||0),a(V.height!==void 0?V.height:-1),M(`Deleted ${k}`),d("")}catch{M("Error deleting node")}},K=async()=>{try{await fetch("/api/binarytree/clear",{method:"POST"}),t(null),s(0),a(-1),A(),M("Tree cleared!")}catch{M("Error clearing tree")}},O=async k=>{if(!n){M("Tree is empty! Insert some nodes first.");return}y(!0),b([]),f(null),x([]),v(k),S(!1);let L=[];switch(k){case"inorder":L=to(n);break;case"preorder":L=ro(n);break;case"postorder":L=so(n);break;case"levelorder":L=u1(n);break;default:L=[]}if(L.length===0){M("Tree is empty!"),y(!1);return}for(let V=0;V<L.length;V++)f(L[V]),await new Promise(T=>setTimeout(T,600)),x(T=>[...T,L[V]]),b(T=>[...T,L[V]]),await new Promise(T=>setTimeout(T,200));f(null),S(!0),y(!1),M(`${k.charAt(0).toUpperCase()+k.slice(1)} traversal complete!`)},A=()=>{b([]),f(null),x([]),v(null),S(!1)};return e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"intro-layout",children:[e.jsx(h1,{}),e.jsx(be,{context:"Binary Tree data structure and traversals"})]}),e.jsxs("div",{className:"visualizer-layout",children:[e.jsx(p1,{insertValue:l,deleteValue:c,size:r,height:i,message:u,tree:n,isAnimating:N,visitedNodes:m,onInsertValueChange:o,onDeleteValueChange:d,onInsert:E,onDelete:q,onTraversal:O,onClear:K,onResetTraversal:A}),e.jsxs("div",{className:"visual-panel",children:[e.jsx("h2",{children:"Binary Tree Visualization"}),e.jsx("div",{className:"tree-container",children:e.jsx(f1,{tree:n,currentNode:j,visitedNodes:m})}),e.jsx(m1,{traversalType:C,traversalResult:g,isAnimating:N,traversalComplete:P})]})]}),e.jsx(Ce,{dataStructure:"binarytree"})]})}const x1={title:"What is a Stack?",description:"A Stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle.",codeExample:"push(A) → push(B) → push(C) → pop() returns C",analogy:"Like a stack of plates - you can only take the top plate off first!"},v1={title:"Stack Properties",items:[{label:"Order",value:"LIFO (Last-In-First-Out)"},{label:"Access",value:"Top element only"},{label:"Insert",value:"Push to top - O(1)"},{label:"Remove",value:"Pop from top - O(1)"}]},y1={title:"Common Use Cases",items:["Function call stack (recursion)","Undo/Redo operations","Browser back button","Expression evaluation","Syntax parsing"]},j1={title:"Time Complexity",operations:[{name:"Push",time:"O(1)",description:"Add to top"},{name:"Pop",time:"O(1)",description:"Remove from top"},{name:"Peek",time:"O(1)",description:"View top element"},{name:"isEmpty",time:"O(1)",description:"Check if empty"},{name:"Search",time:"O(n)",description:"Find element"}]},N1={push:{label:"Push Value",placeholder:"Value",buttonText:"Push"},pop:{buttonText:"Pop"},peek:{buttonText:"Peek"},clear:{buttonText:"Clear"}},b1={size:"Size",top:"Top",capacity:"Capacity"},k1={emptyStack:"Stack is empty. Push some values!",pushSuccess:'Pushed "{value}" to stack',popSuccess:'Popped "{value}" from stack',popEmpty:"Cannot pop - stack is empty!",peekSuccess:'Top element: "{value}"',peekEmpty:"Cannot peek - stack is empty!",clearSuccess:"Stack cleared!",errorNoValue:"Please enter a value!",errorPush:"Error pushing to stack",errorPop:"Error popping from stack",errorClear:"Error clearing stack",stackFull:"Stack is full!"},w1=[{type:"color",className:"top-color",label:"Top Element"},{type:"color",className:"element-color",label:"Stack Element"}],S1={concept:x1,properties:v1,useCases:y1,complexity:j1,operations:N1,infoLabels:b1,messages:k1,legend:w1},C1={title:"What is a Queue?",description:"A Queue is a linear data structure that follows the First-In-First-Out (FIFO) principle.",codeExample:"enqueue(A) → enqueue(B) → enqueue(C) → dequeue() returns A",analogy:"Like a line at a store - first person in line gets served first!"},T1={title:"Queue Properties",items:[{label:"Order",value:"FIFO (First-In-First-Out)"},{label:"Access",value:"Front and Rear"},{label:"Insert",value:"Enqueue at rear - O(1)"},{label:"Remove",value:"Dequeue from front - O(1)"}]},_1={title:"Queue vs Stack",queue:{label:"Queue:",color:"#22c55e",points:["FIFO order","Two access points (front/rear)"]},stack:{label:"Stack:",color:"#3b82f6",points:["LIFO order","One access point (top)"]},summary:"Use Queue when order of processing matters (like task scheduling)."},L1={title:"Common Use Cases",items:["Task scheduling (CPU, print jobs)","Breadth-First Search (BFS)","Message queues","Request handling in servers","Buffering (streaming)"]},E1={title:"Time Complexity",operations:[{name:"Enqueue",time:"O(1)",description:"Add to rear"},{name:"Dequeue",time:"O(1)",description:"Remove from front"},{name:"Front",time:"O(1)",description:"View front element"},{name:"isEmpty",time:"O(1)",description:"Check if empty"},{name:"Search",time:"O(n)",description:"Find element"}]},O1={enqueue:{label:"Enqueue Value",placeholder:"Value",buttonText:"Enqueue"},dequeue:{buttonText:"Dequeue"},front:{buttonText:"Front"},clear:{buttonText:"Clear"}},R1={size:"Size",front:"Front",rear:"Rear",capacity:"Capacity"},P1={emptyQueue:"Queue is empty. Enqueue some values!",enqueueSuccess:'Enqueued "{value}"',dequeueSuccess:'Dequeued "{value}"',dequeueEmpty:"Cannot dequeue - queue is empty!",frontSuccess:'Front element: "{value}"',frontEmpty:"Cannot get front - queue is empty!",clearSuccess:"Queue cleared!",errorNoValue:"Please enter a value!",errorEnqueue:"Error enqueueing to queue",errorDequeue:"Error dequeueing from queue",errorClear:"Error clearing queue",queueFull:"Queue is full!"},I1=[{type:"color",className:"front-color",label:"Front"},{type:"color",className:"rear-color",label:"Rear"},{type:"color",className:"element-color",label:"Queue Element"}],z1={concept:C1,properties:T1,comparison:_1,useCases:L1,complexity:E1,operations:O1,infoLabels:R1,messages:P1,legend:I1},M1={title:"What is a Linked List?",description:"A Linked List is a linear data structure where elements are stored in nodes, each pointing to the next node.",codeExample:"HEAD → [A|→] → [B|→] → [C|→] → NULL",analogy:"Like a treasure hunt - each clue (node) points to the next location!"},A1={title:"Linked List Properties",items:[{label:"Structure",value:"Nodes with data + pointer"},{label:"Memory",value:"Non-contiguous allocation"},{label:"Size",value:"Dynamic (grows/shrinks)"},{label:"Access",value:"Sequential (no random access)"}]},F1={title:"Linked List vs Array",linkedlist:{label:"Linked List:",color:"#22c55e",points:["Dynamic size","O(1) insert/delete at known position","Extra memory for pointers"]},array:{label:"Array:",color:"#3b82f6",points:["Fixed size (usually)","O(1) random access by index","Contiguous memory"]},summary:"Use Linked List when you need frequent insertions/deletions and don't need random access."},D1={title:"Types of Linked Lists",items:[{name:"Singly Linked",description:"Each node points to next only"},{name:"Doubly Linked",description:"Nodes point to both next and previous"},{name:"Circular",description:"Last node points back to first"}]},V1={title:"Time Complexity",operations:[{name:"Access",time:"O(n)",description:"Traverse to find"},{name:"Search",time:"O(n)",description:"Linear search"},{name:"Insert (head)",time:"O(1)",description:"Add at beginning"},{name:"Insert (tail)",time:"O(n)",description:"Traverse then add"},{name:"Delete (head)",time:"O(1)",description:"Remove first"},{name:"Delete (by value)",time:"O(n)",description:"Find then remove"}]},$1={insertHead:{label:"Insert at Head",placeholder:"Value",buttonText:"Insert Head"},insertTail:{label:"Insert at Tail",placeholder:"Value",buttonText:"Insert Tail"},delete:{label:"Delete Value",placeholder:"Value",buttonText:"Delete"},search:{label:"Search Value",placeholder:"Value",buttonText:"Search"},clear:{buttonText:"Clear"}},B1={size:"Size",head:"Head",tail:"Tail"},q1={emptyList:"Linked list is empty. Insert some values!",insertHeadSuccess:'Inserted "{value}" at head',insertTailSuccess:'Inserted "{value}" at tail',deleteSuccess:'Deleted "{value}"',deleteNotFound:'Value "{value}" not found',searchFound:'Found "{value}" at position {position}',searchNotFound:'Value "{value}" not found',clearSuccess:"Linked list cleared!",errorNoValue:"Please enter a value!",errorInsert:"Error inserting value",errorDelete:"Error deleting value",errorSearch:"Error searching value",errorClear:"Error clearing list"},H1=[{type:"color",className:"head-color",label:"Head Node"},{type:"color",className:"node-color",label:"Node"},{type:"icon",icon:"ArrowRight",color:"#8b5cf6",label:"Pointer"}],U1={concept:M1,properties:A1,comparison:F1,types:D1,complexity:V1,operations:$1,infoLabels:B1,messages:q1,legend:H1},W1={title:"What is a Binary Tree?",description:"A Binary Tree is a hierarchical data structure where each node has at most two children (left and right).",codeExample:`       [5]
      /   \\
    [3]   [7]
   /  \\     \\
 [1]  [4]   [9]`,analogy:"Like a family tree - each person can have at most two children!"},K1={title:"Binary Tree Properties",items:[{label:"Structure",value:"Hierarchical (nodes + edges)"},{label:"Children",value:"At most 2 per node"},{label:"Root",value:"Topmost node (no parent)"},{label:"Leaf",value:"Node with no children"}]},G1={title:"Types of Binary Trees",items:[{name:"Full Binary Tree",description:"Every node has 0 or 2 children"},{name:"Complete Binary Tree",description:"All levels filled except possibly last"},{name:"Perfect Binary Tree",description:"All internal nodes have 2 children, leaves at same level"},{name:"Binary Search Tree",description:"Left < Parent < Right ordering"}]},Q1={title:"Tree Traversals",items:[{name:"Inorder",order:"Left → Root → Right",use:"BST gives sorted order"},{name:"Preorder",order:"Root → Left → Right",use:"Copy tree, prefix expression"},{name:"Postorder",order:"Left → Right → Root",use:"Delete tree, postfix expression"},{name:"Level Order",order:"Level by level (BFS)",use:"Print by levels"}]},X1={title:"Time Complexity (BST)",operations:[{name:"Search",average:"O(log n)",worst:"O(n)",description:"Find element"},{name:"Insert",average:"O(log n)",worst:"O(n)",description:"Add element"},{name:"Delete",average:"O(log n)",worst:"O(n)",description:"Remove element"},{name:"Traversal",average:"O(n)",worst:"O(n)",description:"Visit all nodes"}],note:"Worst case O(n) occurs when tree becomes a linked list (unbalanced)"},Y1={title:"Common Use Cases",items:["Binary Search Trees (fast lookup)","Expression trees (parsing)","Huffman coding (compression)","Heaps (priority queues)","File system structure"]},J1={insert:{label:"Insert Value",placeholder:"Value",buttonText:"Insert"},delete:{label:"Delete Value",placeholder:"Value",buttonText:"Delete"},search:{label:"Search Value",placeholder:"Value",buttonText:"Search"},traversals:{inorder:"Inorder",preorder:"Preorder",postorder:"Postorder",levelorder:"Level Order"},clear:{buttonText:"Clear"}},Z1={size:"Nodes",height:"Height",root:"Root"},ej={emptyTree:"Binary tree is empty. Insert some values!",insertSuccess:"Inserted {value}",deleteSuccess:"Deleted {value}",deleteNotFound:"Value {value} not found",searchFound:"Found {value}",searchNotFound:"Value {value} not found",clearSuccess:"Tree cleared!",traversalResult:"{type} traversal: {result}",errorNoValue:"Please enter a value!",errorInsert:"Error inserting value",errorDelete:"Error deleting value",errorSearch:"Error searching value",errorClear:"Error clearing tree"},nj=[{type:"color",className:"root-color",label:"Root"},{type:"color",className:"node-color",label:"Node"},{type:"color",className:"leaf-color",label:"Leaf"},{type:"color",className:"highlight-color",label:"Current/Found"}],tj={concept:W1,properties:K1,types:G1,traversals:Q1,complexity:X1,useCases:Y1,operations:J1,infoLabels:Z1,messages:ej,legend:nj},rj={title:"What is a Hash Table?",description:"A Hash Table is a data structure that maps keys to values using a hash function for O(1) average access time.",codeExample:'hash("apple") → 3 → table[3] = "apple"',analogy:"Like a library catalog - the book title (key) tells you exactly which shelf (index) to find it!"},sj={title:"Hash Table Properties",items:[{label:"Access",value:"O(1) average time"},{label:"Hash Function",value:"Maps key → index"},{label:"Load Factor",value:"size / capacity"},{label:"Collision",value:"When two keys hash to same index"}]},ij={title:"Collision Resolution: Linear Probing",description:"When a collision occurs, probe sequentially until an empty slot is found.",steps:["Calculate hash index","If slot occupied, try next slot","Repeat until empty slot found","Insert at empty slot"],formula:"index = (hash(key) + i) % capacity, where i = 0, 1, 2, ..."},aj={title:"Linear vs Quadratic Probing",linear:{label:"Linear Probing:",color:"#3b82f6",points:["Simple: check next slot","Primary clustering problem","Cache-friendly"]},quadratic:{label:"Quadratic Probing:",color:"#f59e0b",points:["Jump by squares: 1, 4, 9...","Reduces primary clustering","May not find empty slot"]},summary:"Linear probing is simpler but can cause clustering. Quadratic probing spreads entries better."},lj={title:"Load Factor",description:"Load factor = size / capacity. Measures how full the table is.",threshold:.7,warningMessage:"High load ({loadFactor}) - consider rehashing!",safeMessage:"Load factor: {loadFactor}"},oj={title:"Time Complexity",operations:[{name:"Insert",average:"O(1)",worst:"O(n)",description:"Add key-value"},{name:"Search",average:"O(1)",worst:"O(n)",description:"Find by key"},{name:"Delete",average:"O(1)",worst:"O(n)",description:"Remove by key"},{name:"Rehash",average:"O(n)",worst:"O(n)",description:"Resize table"}],note:"Worst case O(n) when many collisions or poor hash function"},cj={title:"Common Use Cases",items:["Dictionaries/Maps","Caching (memoization)","Database indexing","Symbol tables (compilers)","Counting frequencies"]},dj={insert:{label:"Insert Key-Value",keyPlaceholder:"Key",valuePlaceholder:"Value",buttonText:"Insert"},delete:{label:"Delete Key",placeholder:"Key",buttonText:"Delete"},search:{label:"Search Key",placeholder:"Key",buttonText:"Search"},clear:{buttonText:"Clear"},rehash:{buttonText:"Rehash"}},uj={items:"Items",capacity:"Capacity",load:"Load",collisions:"Collisions"},hj={emptyTable:"Hash table is empty. Insert some key-value pairs!",insertSuccess:'Inserted "{key}" at slot {index}',insertUpdated:'Updated "{key}" at slot {index}',insertCollision:"Collision at slot {original}! Probed to slot {index}",deleteSuccess:'Deleted "{key}"',searchFound:'Found: "{key}" = {value}',searchNotFound:'Key "{key}" not found',clearSuccess:"Hash table cleared!",rehashSuccess:"Rehashed! Capacity: {oldCapacity} → {newCapacity}",rehashEmpty:"Nothing to rehash - table is empty!",tableFull:"Table is full! Consider rehashing.",errorNoKey:"Please enter a key!",errorNoKeyValue:"Please enter both key and value!",errorInsert:"Error inserting. Is Flask running?",errorDelete:"Error deleting. Is Flask running?",errorSearch:"Error searching item",errorClear:"Error clearing hash table",errorRehash:"Error rehashing. Is Flask running?"},pj=[{type:"color",className:"key-color",label:"Key"},{type:"color",className:"index-color",label:"Index"},{type:"color",className:"value-color",label:"Value"},{type:"color",className:"probe-color",label:"Probed Slot"},{type:"color",className:"collision-color",label:"Collision"}],fj={concept:rj,properties:sj,collisionResolution:ij,comparison:aj,loadFactor:lj,complexity:oj,useCases:cj,operations:dj,infoLabels:uj,messages:hj,legend:pj},mj={title:"What is Quadratic Probing?",description:"Quadratic Probing is a collision resolution technique that uses a quadratic function to find the next available slot.",codeExample:"index = (hash(key) + i²) % capacity, where i = 0, 1, 2, 3...",analogy:"Like jumping farther each time - first 1 step, then 4, then 9, then 16!"},gj={title:"Quadratic Probing Properties",items:[{label:"Probe Sequence",value:"+1, +4, +9, +16, +25..."},{label:"Formula",value:"(hash + i²) % capacity"},{label:"Clustering",value:"Reduces primary clustering"},{label:"Load Factor",value:"Must stay below 0.5 for guarantee"}]},xj={title:"Quadratic vs Linear Probing",quadratic:{label:"Quadratic:",color:"#f59e0b",points:["Jumps by squares: 1, 4, 9...","Less primary clustering","May miss empty slots"]},linear:{label:"Linear:",color:"#3b82f6",points:["Steps by 1 each time","Primary clustering issue","Always finds empty slot"]},summary:"Quadratic probing reduces clustering but requires load factor < 0.5 and prime table size for guaranteed insertion."},vj={title:"Clustering Problem",primary:{name:"Primary Clustering",description:"Long runs of occupied slots form clusters",cause:"Linear probing - same probe sequence for nearby hashes",solution:"Use quadratic or double hashing"},secondary:{name:"Secondary Clustering",description:"Keys with same hash follow same probe sequence",cause:"Probe sequence depends only on initial hash",solution:"Use double hashing"}},yj={title:"Load Factor Warning",description:"Quadratic probing may fail to find empty slots if load factor > 0.5",threshold:.5,warningMessage:"Warning: Load factor ({loadFactor}) > 0.5 - insertions may fail!",safeMessage:"Load factor: {loadFactor}"},jj={title:"Time Complexity",operations:[{name:"Insert",average:"O(1)",worst:"O(n)",description:"Add key-value"},{name:"Search",average:"O(1)",worst:"O(n)",description:"Find by key"},{name:"Delete",average:"O(1)",worst:"O(n)",description:"Remove by key"},{name:"Rehash",average:"O(n)",worst:"O(n)",description:"Resize table"}],note:"Requires prime table size and load factor < 0.5 for guaranteed O(1)"},Nj={insert:{label:"Insert Key-Value",keyPlaceholder:"Key",valuePlaceholder:"Value",buttonText:"Insert"},delete:{label:"Delete Key",placeholder:"Key",buttonText:"Delete"},search:{label:"Search Key",placeholder:"Key",buttonText:"Search"},clear:{buttonText:"Clear"},rehash:{buttonText:"Rehash"}},bj={items:"Items",capacity:"Capacity",load:"Load",collisions:"Collisions"},kj={emptyTable:"Hash table is empty. Insert some key-value pairs!",insertSuccess:'Inserted "{key}" at slot {index}',insertUpdated:'Updated "{key}" at slot {index}',insertCollision:"Collision! Quadratic probed to slot {index} (i={probeCount})",deleteSuccess:'Deleted "{key}"',searchFound:'Found: "{key}" = {value}',searchNotFound:'Key "{key}" not found',clearSuccess:"Hash table cleared!",rehashSuccess:"Rehashed! Capacity: {oldCapacity} → {newCapacity}",rehashEmpty:"Nothing to rehash - table is empty!",tableFull:"Cannot insert - no empty slot found after full probe cycle!",errorNoKey:"Please enter a key!",errorNoKeyValue:"Please enter both key and value!",errorInsert:"Error inserting. Is Flask running?",errorDelete:"Error deleting. Is Flask running?",errorSearch:"Error searching item",errorClear:"Error clearing hash table",errorRehash:"Error rehashing. Is Flask running?"},wj=[{type:"color",className:"key-color",label:"Key"},{type:"color",className:"index-color",label:"Index"},{type:"color",className:"value-color",label:"Value"},{type:"color",className:"probe-color",label:"Quadratic Probe"}],Sj={concept:mj,properties:gj,comparison:xj,clustering:vj,loadFactor:yj,complexity:jj,operations:Nj,infoLabels:bj,messages:kj,legend:wj},Cj={title:"What is a Binary Search Tree?",description:"A Binary Search Tree (BST) is a binary tree where each node follows the ordering property: all left descendants < node < all right descendants.",codeExample:`       [50]
      /    \\
   [30]    [70]
   /  \\    /  \\
 [20][40][60][80]

Left < Parent < Right`,analogy:"Like a dictionary - words are sorted alphabetically, so you can quickly find any word by comparing!"},Tj={title:"BST Properties",items:[{label:"Ordering",value:"Left < Parent < Right"},{label:"Search",value:"O(log n) average"},{label:"Inorder",value:"Gives sorted sequence"},{label:"No Duplicates",value:"Typically unique keys"}]},_j={insert:{label:"Insert Value",placeholder:"Value",buttonText:"Insert"},delete:{label:"Delete Value",placeholder:"Value",buttonText:"Delete"},search:{label:"Search Value",placeholder:"Value",buttonText:"Search"},traversals:{inorder:"Inorder (Sorted)",preorder:"Preorder",postorder:"Postorder",levelorder:"Level Order"},clear:{buttonText:"Clear"}},Lj={title:"BST Delete Cases",items:[{name:"Leaf Node",description:"Simply remove (no children)"},{name:"One Child",description:"Replace with child"},{name:"Two Children",description:"Replace with inorder successor (smallest in right subtree)"}]},Ej={title:"Tree Traversals",items:[{name:"Inorder",order:"Left -> Root -> Right",use:"Returns SORTED order in BST"},{name:"Preorder",order:"Root -> Left -> Right",use:"Copy/serialize tree"},{name:"Postorder",order:"Left -> Right -> Root",use:"Delete tree safely"},{name:"Level Order",order:"Level by level (BFS)",use:"Print by levels"}]},Oj={title:"Time Complexity",operations:[{name:"Search",average:"O(log n)",worst:"O(n)",description:"Binary search principle"},{name:"Insert",average:"O(log n)",worst:"O(n)",description:"Find position + insert"},{name:"Delete",average:"O(log n)",worst:"O(n)",description:"Find + restructure"},{name:"Min/Max",average:"O(log n)",worst:"O(n)",description:"Leftmost/rightmost"}],note:"Worst case O(n) when tree is unbalanced (degenerates to linked list). Use AVL/Red-Black trees for guaranteed O(log n)."},Rj={title:"Common Use Cases",items:["Database indexing (B-trees)","Symbol tables in compilers","Priority queues","Auto-complete suggestions","Range queries (find all values between X and Y)"]},Pj={title:"BST vs Other Structures",items:[{vs:"Array",advantage:"O(log n) insert/delete vs O(n)"},{vs:"Hash Table",advantage:"Ordered data, range queries"},{vs:"Linked List",advantage:"O(log n) search vs O(n)"}]},Ij={size:"Nodes",height:"Height",root:"Root"},zj={emptyTree:"BST is empty. Insert some values!",insertSuccess:"Inserted {value}",deleteSuccess:"Deleted {value}",deleteNotFound:"Value {value} not found",searchFound:"Found {value}",searchNotFound:"Value {value} not found",clearSuccess:"BST cleared!",traversalResult:"{type}: {result}",errorNoValue:"Please enter a value!",errorInsert:"Error inserting value",errorDelete:"Error deleting value",errorSearch:"Error searching value",errorClear:"Error clearing BST"},Mj=[{type:"color",className:"root-color",label:"Root"},{type:"color",className:"node-color",label:"Node"},{type:"color",className:"leaf-color",label:"Leaf"},{type:"color",className:"highlight-color",label:"Current/Found"}],Aj={concept:Cj,properties:Tj,operations:_j,deleteCases:Lj,traversals:Ej,complexity:Oj,useCases:Rj,comparison:Pj,infoLabels:Ij,messages:zj,legend:Mj},Fj={title:"What is an AVL Tree?",description:"An AVL Tree is a self-balancing Binary Search Tree where the height difference between left and right subtrees (balance factor) is at most 1 for every node.",codeExample:`       [50]  BF=0
      /    \\
   [30]    [70]  
  BF=0     BF=0
   /  \\      \\
 [20][40]   [80]

Balance Factor = Height(Left) - Height(Right)
BF must be -1, 0, or 1`,analogy:"Like a well-organized library that automatically reorganizes shelves whenever books are added or removed to ensure quick access!"},Dj={title:"AVL Properties",items:[{label:"Balance Factor",value:"-1, 0, or 1 for all nodes"},{label:"Height",value:"O(log n) guaranteed"},{label:"Self-Balancing",value:"Rotations on insert/delete"},{label:"BST Property",value:"Left < Parent < Right"}]},Vj={insert:{label:"Insert Value",placeholder:"Value",buttonText:"Insert"},delete:{label:"Delete Value",placeholder:"Value",buttonText:"Delete"},search:{label:"Search Value",placeholder:"Value",buttonText:"Search"},traversals:{inorder:"Inorder (Sorted)",preorder:"Preorder",postorder:"Postorder",levelorder:"Level Order"},clear:{buttonText:"Clear"}},$j={title:"AVL Rotations",items:[{name:"Left-Left (LL)",description:"Right rotation",when:"BF > 1, Left child BF >= 0"},{name:"Right-Right (RR)",description:"Left rotation",when:"BF < -1, Right child BF <= 0"},{name:"Left-Right (LR)",description:"Left then Right rotation",when:"BF > 1, Left child BF < 0"},{name:"Right-Left (RL)",description:"Right then Left rotation",when:"BF < -1, Right child BF > 0"}]},Bj={title:"Tree Traversals",items:[{name:"Inorder",order:"Left -> Root -> Right",use:"Returns SORTED order"},{name:"Preorder",order:"Root -> Left -> Right",use:"Copy/serialize tree"},{name:"Postorder",order:"Left -> Right -> Root",use:"Delete tree safely"},{name:"Level Order",order:"Level by level (BFS)",use:"Print by levels"}]},qj={title:"Time Complexity",operations:[{name:"Search",average:"O(log n)",worst:"O(log n)",description:"Height always balanced"},{name:"Insert",average:"O(log n)",worst:"O(log n)",description:"Insert + rebalance"},{name:"Delete",average:"O(log n)",worst:"O(log n)",description:"Delete + rebalance"},{name:"Rotation",average:"O(1)",worst:"O(1)",description:"Constant time fix"}],note:"Unlike regular BST, AVL guarantees O(log n) even in worst case because the tree is always balanced!"},Hj={title:"Common Use Cases",items:["Database indexing with frequent lookups","In-memory databases","Dictionary implementations","When guaranteed O(log n) is critical","Real-time systems needing predictable performance"]},Uj={title:"AVL vs Other Trees",items:[{vs:"BST",advantage:"Guaranteed O(log n) vs O(n) worst case"},{vs:"Red-Black",advantage:"More rigidly balanced (faster lookup)"},{vs:"B-Tree",advantage:"Better for in-memory operations"}]},Wj={size:"Nodes",height:"Height",root:"Root"},Kj={emptyTree:"AVL Tree is empty. Insert some values!",insertSuccess:"Inserted {value} (tree rebalanced)",deleteSuccess:"Deleted {value} (tree rebalanced)",deleteNotFound:"Value {value} not found",searchFound:"Found {value}",searchNotFound:"Value {value} not found",clearSuccess:"AVL Tree cleared!",traversalResult:"{type}: {result}",errorNoValue:"Please enter a value!",errorInsert:"Error inserting value",errorDelete:"Error deleting value",errorSearch:"Error searching value",errorClear:"Error clearing AVL Tree"},Gj=[{type:"color",className:"root-color",label:"Root"},{type:"color",className:"balanced-color",label:"Balanced (|BF| <= 1)"},{type:"color",className:"leaf-color",label:"Leaf"},{type:"color",className:"highlight-color",label:"Current/Found"}],Qj={concept:Fj,properties:Dj,operations:Vj,rotations:$j,traversals:Bj,complexity:qj,useCases:Hj,comparison:Uj,infoLabels:Wj,messages:Kj,legend:Gj},Xj={title:"What is a Splay Tree?",description:"A Splay Tree is a self-adjusting Binary Search Tree that moves frequently accessed elements closer to the root through rotations (splaying), providing amortized O(log n) performance.",codeExample:`After searching for 20:

Before:        After Splay:
   [50]           [20]
   /                  \\
 [30]                [50]
 /                   /
[20]  <-- found   [30]

Accessed node moves to root!`,analogy:"Like keeping frequently used items at the front of your desk - recently used elements stay easily accessible!"},Yj={title:"Splay Tree Properties",items:[{label:"Self-Adjusting",value:"Accessed nodes move to root"},{label:"No Balance Info",value:"No height/color stored"},{label:"Amortized O(log n)",value:"Good average performance"},{label:"Cache Friendly",value:"Hot nodes stay near root"}]},Jj={insert:{label:"Insert Value",placeholder:"Value",buttonText:"Insert"},delete:{label:"Delete Value",placeholder:"Value",buttonText:"Delete"},search:{label:"Search Value",placeholder:"Value",buttonText:"Search"},traversals:{inorder:"Inorder (Sorted)",preorder:"Preorder",postorder:"Postorder",levelorder:"Level Order"},clear:{buttonText:"Clear"}},Zj={title:"Splay Operations",items:[{name:"Zig",description:"Single rotation when parent is root",when:"Parent is root"},{name:"Zig-Zig",description:"Both node and parent are left (or both right) children",when:"Same side grandchild"},{name:"Zig-Zag",description:"Node is left child, parent is right (or vice versa)",when:"Opposite side grandchild"}]},e0={title:"Tree Traversals",items:[{name:"Inorder",order:"Left -> Root -> Right",use:"Returns SORTED order"},{name:"Preorder",order:"Root -> Left -> Right",use:"Copy/serialize tree"},{name:"Postorder",order:"Left -> Right -> Root",use:"Delete tree safely"},{name:"Level Order",order:"Level by level (BFS)",use:"Print by levels"}]},n0={title:"Time Complexity",operations:[{name:"Search",average:"O(log n)*",worst:"O(n)",description:"Amortized logarithmic"},{name:"Insert",average:"O(log n)*",worst:"O(n)",description:"Amortized logarithmic"},{name:"Delete",average:"O(log n)*",worst:"O(n)",description:"Amortized logarithmic"},{name:"Splay",average:"O(log n)*",worst:"O(n)",description:"Brings node to root"}],note:"* Amortized - while single operations can be O(n), any sequence of m operations takes O(m log n) total time."},t0={title:"Common Use Cases",items:["Cache implementations (LRU-like behavior)","Garbage collectors","Network routers (IP lookup)","Situations with temporal locality","When same elements accessed repeatedly"]},r0={title:"Splay Tree vs Other Trees",items:[{vs:"AVL",advantage:"Simpler (no balance info), better for skewed access"},{vs:"Red-Black",advantage:"Self-optimizing for access patterns"},{vs:"BST",advantage:"Better amortized performance"}]},s0={size:"Nodes",height:"Height",root:"Root"},i0={emptyTree:"Splay Tree is empty. Insert some values!",insertSuccess:"Inserted {value} (now at root)",deleteSuccess:"Deleted {value}",deleteNotFound:"Value {value} not found",searchFound:"Found {value} (splayed to root)",searchNotFound:"Value {value} not found",clearSuccess:"Splay Tree cleared!",traversalResult:"{type}: {result}",errorNoValue:"Please enter a value!",errorInsert:"Error inserting value",errorDelete:"Error deleting value",errorSearch:"Error searching value",errorClear:"Error clearing Splay Tree"},a0=[{type:"color",className:"root-color",label:"Root (Most Recent)"},{type:"color",className:"node-color",label:"Node"},{type:"color",className:"leaf-color",label:"Leaf"},{type:"color",className:"highlight-color",label:"Current/Found"}],l0={concept:Xj,properties:Yj,operations:Jj,splayOperations:Zj,traversals:e0,complexity:n0,useCases:t0,comparison:r0,infoLabels:s0,messages:i0,legend:a0},o0={title:"What is a Min Heap?",description:"A Min Heap is a complete binary tree where each parent node is smaller than or equal to its children. The minimum element is always at the root, making it perfect for priority queues.",codeExample:`       [1]  <- Min at root
      /    \\
    [3]    [2]
   /  \\    /
 [7]  [6][4]

Array: [1, 3, 2, 7, 6, 4]
Parent always <= Children`,analogy:"Like a tournament bracket where the winner (smallest) rises to the top - the champion is always at the root!"},c0={title:"Min Heap Properties",items:[{label:"Heap Property",value:"Parent <= Children"},{label:"Complete Tree",value:"Filled level by level"},{label:"Array Storage",value:"Parent(i)=(i-1)/2"},{label:"Min Access",value:"O(1) to get minimum"}]},d0={insert:{label:"Insert Value",placeholder:"Value",buttonText:"Insert"},extract:{label:"Extract Min",buttonText:"Extract Min"},peek:{label:"Peek Min",buttonText:"Peek"},build:{label:"Build from Array",placeholder:"e.g., 5,3,8,1,2",buttonText:"Build Heap"},clear:{buttonText:"Clear"}},u0={title:"Heap Operations",items:[{name:"Insert",description:"Add at end, bubble up (heapify up)",complexity:"O(log n)"},{name:"Extract Min",description:"Remove root, replace with last, bubble down",complexity:"O(log n)"},{name:"Peek",description:"Return root without removing",complexity:"O(1)"},{name:"Build Heap",description:"Heapify from array (bottom-up)",complexity:"O(n)"}]},h0={title:"Array Representation",items:[{formula:"Parent(i)",value:"(i - 1) / 2"},{formula:"Left Child(i)",value:"2*i + 1"},{formula:"Right Child(i)",value:"2*i + 2"}]},p0={title:"Time Complexity",operations:[{name:"Insert",average:"O(log n)",worst:"O(log n)",description:"Bubble up to root"},{name:"Extract Min",average:"O(log n)",worst:"O(log n)",description:"Bubble down"},{name:"Peek/Get Min",average:"O(1)",worst:"O(1)",description:"Always at root"},{name:"Build Heap",average:"O(n)",worst:"O(n)",description:"Bottom-up heapify"}],note:"Space complexity is O(n). Complete tree structure ensures height is always O(log n)."},f0={title:"Common Use Cases",items:["Priority Queues (process by priority)","Dijkstra's shortest path algorithm","Prim's minimum spanning tree","Huffman coding (compression)","Event-driven simulation","K smallest/largest elements"]},m0={title:"Min Heap vs Other Structures",items:[{vs:"Sorted Array",advantage:"O(log n) insert vs O(n)"},{vs:"BST",advantage:"O(1) get min vs O(log n)"},{vs:"Max Heap",advantage:"Fast min access vs fast max"}]},g0={size:"Size",height:"Height",min:"Min"},x0={emptyHeap:"Min Heap is empty. Insert some values!",insertSuccess:"Inserted {value}",extractSuccess:"Extracted minimum: {value}",peekSuccess:"Minimum element is {value}",buildSuccess:"Built heap from array",clearSuccess:"Heap cleared!",errorNoValue:"Please enter a value!",errorEmpty:"Heap is empty!",errorFull:"Heap is full!",errorInsert:"Error inserting value",errorExtract:"Error extracting minimum"},v0=[{type:"color",className:"root-color",label:"Root (Min)"},{type:"color",className:"node-color",label:"Internal Node"},{type:"color",className:"leaf-color",label:"Leaf"},{type:"color",className:"highlight-color",label:"Current/Swapping"}],y0={concept:o0,properties:c0,operations:d0,heapOperations:u0,arrayRepresentation:h0,complexity:p0,useCases:f0,comparison:m0,infoLabels:g0,messages:x0,legend:v0},j0={title:"What is a Max Heap?",description:"A Max Heap is a complete binary tree where each parent node is greater than or equal to its children. The maximum element is always at the root, ideal for priority queues where largest = highest priority.",codeExample:`       [9]  <- Max at root
      /    \\
    [7]    [8]
   /  \\    /
 [3]  [5][6]

Array: [9, 7, 8, 3, 5, 6]
Parent always >= Children`,analogy:"Like a corporate hierarchy - the CEO (maximum) is at the top, and each manager has authority over their subordinates!"},N0={title:"Max Heap Properties",items:[{label:"Heap Property",value:"Parent >= Children"},{label:"Complete Tree",value:"Filled level by level"},{label:"Array Storage",value:"Parent(i)=(i-1)/2"},{label:"Max Access",value:"O(1) to get maximum"}]},b0={insert:{label:"Insert Value",placeholder:"Value",buttonText:"Insert"},extract:{label:"Extract Max",buttonText:"Extract Max"},peek:{label:"Peek Max",buttonText:"Peek"},build:{label:"Build from Array",placeholder:"e.g., 5,3,8,1,2",buttonText:"Build Heap"},clear:{buttonText:"Clear"}},k0={title:"Heap Operations",items:[{name:"Insert",description:"Add at end, bubble up (heapify up)",complexity:"O(log n)"},{name:"Extract Max",description:"Remove root, replace with last, bubble down",complexity:"O(log n)"},{name:"Peek",description:"Return root without removing",complexity:"O(1)"},{name:"Build Heap",description:"Heapify from array (bottom-up)",complexity:"O(n)"}]},w0={title:"Array Representation",items:[{formula:"Parent(i)",value:"(i - 1) / 2"},{formula:"Left Child(i)",value:"2*i + 1"},{formula:"Right Child(i)",value:"2*i + 2"}]},S0={title:"Time Complexity",operations:[{name:"Insert",average:"O(log n)",worst:"O(log n)",description:"Bubble up to root"},{name:"Extract Max",average:"O(log n)",worst:"O(log n)",description:"Bubble down"},{name:"Peek/Get Max",average:"O(1)",worst:"O(1)",description:"Always at root"},{name:"Build Heap",average:"O(n)",worst:"O(n)",description:"Bottom-up heapify"}],note:"Space complexity is O(n). Complete tree structure ensures height is always O(log n)."},C0={title:"Common Use Cases",items:["Priority Queues (largest = highest priority)","Heap Sort algorithm","Job scheduling (highest priority first)","Finding K largest elements","Median maintenance (with min heap)","Stock trading (highest bid)"]},T0={title:"Max Heap vs Other Structures",items:[{vs:"Sorted Array",advantage:"O(log n) insert vs O(n)"},{vs:"BST",advantage:"O(1) get max vs O(log n)"},{vs:"Min Heap",advantage:"Fast max access vs fast min"}]},_0={size:"Size",height:"Height",max:"Max"},L0={emptyHeap:"Max Heap is empty. Insert some values!",insertSuccess:"Inserted {value}",extractSuccess:"Extracted maximum: {value}",peekSuccess:"Maximum element is {value}",buildSuccess:"Built heap from array",clearSuccess:"Heap cleared!",errorNoValue:"Please enter a value!",errorEmpty:"Heap is empty!",errorFull:"Heap is full!",errorInsert:"Error inserting value",errorExtract:"Error extracting maximum"},E0=[{type:"color",className:"root-color",label:"Root (Max)"},{type:"color",className:"node-color",label:"Internal Node"},{type:"color",className:"leaf-color",label:"Leaf"},{type:"color",className:"highlight-color",label:"Current/Swapping"}],O0={concept:j0,properties:N0,operations:b0,heapOperations:k0,arrayRepresentation:w0,complexity:S0,useCases:C0,comparison:T0,infoLabels:_0,messages:L0,legend:E0},R0={title:"What is a Treap?",description:"A Treap is a combination of a Binary Search Tree (BST) and a Heap. Each node has a key (follows BST ordering: left < parent < right) and a random priority (follows max-heap ordering: parent priority >= child priority). Rotations maintain the heap property after insertions.",codeExample:`       [50, p:95]
      /          \\
  [30, p:80]   [70, p:60]
   /     \\         \\
[20,p:40][40,p:55] [80,p:30]

BST on keys | Max-Heap on priorities`,analogy:"Like a tournament bracket where seeded players (priorities) determine placement, but match order follows alphabetical (BST) rules!"},P0={title:"Treap Properties",items:[{label:"Keys",value:"BST order (Left < Parent < Right)"},{label:"Priorities",value:"Max-heap order (Parent >= Children)"},{label:"Balance",value:"Expected O(log n) height"},{label:"Randomized",value:"Priorities assigned randomly"}]},I0={title:"Time Complexity",operations:[{name:"Search",average:"O(log n)",worst:"O(n)",description:"BST search on keys"},{name:"Insert",average:"O(log n)",worst:"O(n)",description:"BST insert + rotate up"},{name:"Delete",average:"O(log n)",worst:"O(n)",description:"Rotate down + remove leaf"},{name:"Split/Merge",average:"O(log n)",worst:"O(n)",description:"Divide/combine treaps"}],note:"Random priorities give O(log n) expected height, making worst-case O(n) extremely unlikely."},z0={title:"Common Use Cases",items:["Implicit key treaps for sequence operations","Efficient split and merge operations","Randomized balanced BST without complex rebalancing","Competitive programming (flexible tree operations)","Persistent data structures"]},M0={title:"Treap vs Other Trees",items:[{vs:"BST",advantage:"Expected O(log n) balance via random priorities"},{vs:"AVL Tree",advantage:"Simpler implementation, supports split/merge"},{vs:"Red-Black Tree",advantage:"Easier to code, natural split/merge"},{vs:"Skip List",advantage:"Tree structure, supports order statistics"}]},A0={concept:R0,properties:P0,complexity:I0,useCases:z0,comparison:M0},F0={stack:S1,queue:z1,linkedlist:U1,binarytree:tj,hashtable:fj,hashtableChaining:ne,hashtableQuadratic:Sj,bst:Aj,avl:Qj,splay:l0,minheap:y0,maxheap:O0,treap:A0};function Ar({dataStructure:n}){const t=F0[n];return t?e.jsxs("div",{className:"concepts-panel",children:[t.concept&&e.jsxs("div",{className:"concept-box",children:[e.jsxs("div",{className:"concept-header",children:[e.jsx(Fe,{className:"icon-sm"}),e.jsx("span",{children:t.concept.title})]}),e.jsxs("div",{className:"concept-content",children:[e.jsx("p",{children:t.concept.description}),t.concept.codeExample&&e.jsx("pre",{className:"concept-code-example",children:e.jsx("code",{children:t.concept.codeExample})}),t.concept.analogy&&e.jsxs("div",{className:"concept-analogy",children:[e.jsx(ye,{}),e.jsx("span",{children:t.concept.analogy})]})]})]}),t.properties&&e.jsxs("div",{className:"concept-box",children:[e.jsxs("div",{className:"concept-header",children:[e.jsx(it,{className:"icon-sm"}),e.jsx("span",{children:t.properties.title})]}),e.jsx("div",{className:"concept-content",children:e.jsx("div",{className:"properties-grid",children:t.properties.items.map((r,s)=>e.jsxs("div",{className:"property-item",children:[e.jsx("span",{className:"property-label",children:r.label}),e.jsx("span",{className:"property-value",children:r.value})]},s))})})]}),t.complexity&&e.jsxs("div",{className:"concept-box",children:[e.jsxs("div",{className:"concept-header",children:[e.jsx(Jl,{className:"icon-sm"}),e.jsx("span",{children:t.complexity.title})]}),e.jsxs("div",{className:"concept-content",children:[e.jsx("div",{className:"complexity-table",children:t.complexity.operations.map((r,s)=>e.jsxs("div",{className:"complexity-row",children:[e.jsx("span",{className:"complexity-name",children:r.name}),r.time&&e.jsx("code",{className:"complexity-time",children:r.time}),r.average&&e.jsxs(e.Fragment,{children:[e.jsx("code",{className:"complexity-avg",children:r.average}),r.worst&&e.jsx("code",{className:"complexity-worst",children:r.worst})]}),r.description&&e.jsx("span",{className:"complexity-desc",children:r.description})]},s))}),t.complexity.note&&e.jsx("p",{className:"complexity-note",children:t.complexity.note})]})]}),t.useCases&&e.jsxs("div",{className:"concept-box",children:[e.jsxs("div",{className:"concept-header",children:[e.jsx(Mr,{className:"icon-sm"}),e.jsx("span",{children:t.useCases.title})]}),e.jsx("div",{className:"concept-content",children:e.jsx("ul",{className:"use-cases-list",children:t.useCases.items.map((r,s)=>e.jsxs("li",{children:[e.jsx(en,{className:"icon-xs"}),e.jsx("span",{children:r})]},s))})})]}),t.traversals&&e.jsxs("div",{className:"concept-box",children:[e.jsxs("div",{className:"concept-header",children:[e.jsx(it,{className:"icon-sm"}),e.jsx("span",{children:t.traversals.title})]}),e.jsx("div",{className:"concept-content",children:e.jsx("div",{className:"traversals-list",children:t.traversals.items.map((r,s)=>e.jsxs("div",{className:"traversal-item",children:[e.jsx("span",{className:"traversal-name",children:r.name}),e.jsx("span",{className:"traversal-order",children:r.order}),e.jsx("span",{className:"traversal-use",children:r.use})]},s))})})]}),t.deleteCases&&e.jsxs("div",{className:"concept-box",children:[e.jsxs("div",{className:"concept-header",children:[e.jsx(it,{className:"icon-sm"}),e.jsx("span",{children:t.deleteCases.title})]}),e.jsx("div",{className:"concept-content",children:e.jsx("div",{className:"delete-cases-grid",children:t.deleteCases.items.map((r,s)=>e.jsxs("div",{className:"delete-case-item",children:[e.jsx("span",{className:"case-number",children:s+1}),e.jsxs("div",{children:[e.jsx("strong",{children:r.name}),e.jsx("p",{children:r.description})]})]},s))})})]}),t.comparison&&e.jsxs("div",{className:"concept-box",children:[e.jsxs("div",{className:"concept-header",children:[e.jsx(it,{className:"icon-sm"}),e.jsx("span",{children:t.comparison.title})]}),e.jsx("div",{className:"concept-content",children:e.jsx("div",{className:"comparison-list",children:t.comparison.items.map((r,s)=>e.jsxs("div",{className:"comparison-item",children:[e.jsxs("span",{className:"comparison-vs",children:["vs ",r.vs]}),e.jsx("span",{className:"comparison-advantage",children:r.advantage})]},s))})})]})]}):e.jsx("div",{className:"concepts-panel",children:e.jsx("p",{children:"Concepts not available for this data structure."})})}const D0={search:"BST Search",identify_leaves:"Leaf Hunt",inorder_start:"Inorder Sequence"},V0={search:"search",identify_leaves:"leaves",inorder_start:"inorder"};function $0(){return e.jsxs("div",{className:"challenge-loading",children:[e.jsx("div",{className:"challenge-mode-dot"}),"Generating challenge…"]})}function B0({challenge:n,clickCount:t,onNewChallenge:r,onExit:s}){return e.jsxs("div",{className:"challenge-result success",children:[e.jsx("div",{className:"challenge-result-icon",children:"🎉"}),e.jsx("p",{className:"challenge-result-title",children:"Challenge Complete!"}),e.jsxs("p",{className:"challenge-result-subtitle",children:[e.jsx("em",{children:n.title})," — solved in ",t," click",t!==1?"s":""]}),e.jsxs("div",{className:"challenge-result-actions",children:[e.jsxs("button",{className:"btn btn-insert",onClick:r,children:[e.jsx(Mr,{size:13})," New Challenge"]}),e.jsx("button",{className:"btn btn-secondary",onClick:s,children:"Exit"})]})]})}function q0({challenge:n,userClicks:t,onRetry:r,onExit:s}){const i=n.expected_steps[t.length];return e.jsxs("div",{className:"challenge-result failed",children:[e.jsx("div",{className:"challenge-result-icon",children:"❌"}),e.jsx("p",{className:"challenge-result-title",children:"Wrong node!"}),e.jsx("p",{className:"challenge-result-subtitle",children:n.type==="identify_leaves"?"That node isn't part of the solution — look carefully.":`Expected step ${t.length+1} (value ${i}). Reset and try again.`}),e.jsxs("div",{className:"challenge-result-actions",children:[e.jsx("button",{className:"btn btn-insert",onClick:r,children:"Try Again"}),e.jsx("button",{className:"btn btn-secondary",onClick:s,children:"Exit"})]})]})}function H0({challenge:n,userClicks:t,onExit:r}){const[s,i]=p.useState(!1),a=n.expected_steps.length,l=t.length,o=n.type!=="identify_leaves";return e.jsxs("div",{className:"challenge-banner",children:[e.jsxs("div",{className:"challenge-header-row",children:[e.jsxs("div",{className:"challenge-title-group",children:[e.jsx("span",{className:`challenge-type-badge ${V0[n.type]||"search"}`,children:D0[n.type]||n.type}),e.jsx("h3",{className:"challenge-title",children:n.title})]}),e.jsxs("button",{className:"challenge-exit-btn",onClick:r,children:[e.jsx(As,{size:13})," Exit"]})]}),e.jsx("p",{className:"challenge-description",children:n.description}),o?e.jsxs("div",{className:"challenge-progress-row",children:[n.expected_steps.map((c,d)=>{const u=d<l,h=d===l;return e.jsxs(_e.Fragment,{children:[d>0&&e.jsx(Hn,{size:11,className:"challenge-progress-arrow"}),e.jsx("div",{className:`challenge-step-dot ${u?"done":h?"next":"pending"}`,children:u?"✓":d+1})]},d)}),e.jsxs("span",{className:"challenge-step-label",children:[l,"/",a]})]}):e.jsxs("div",{className:"challenge-identify-progress",children:[e.jsx("span",{className:"challenge-identify-count",children:l}),e.jsx("span",{className:"challenge-identify-sep",children:" / "}),e.jsx("span",{className:"challenge-identify-total",children:a}),e.jsx("span",{className:"challenge-identify-label",children:" leaf nodes found"})]}),e.jsxs("div",{className:"challenge-hint-row",children:[e.jsxs("button",{className:"challenge-hint-toggle",onClick:()=>i(c=>!c),children:[e.jsx(ye,{size:12}),s?"Hide hint":"Need a hint?"]}),s&&e.jsx("p",{className:"challenge-hint-text",children:n.hint})]})]})}function U0({challenge:n,userClicks:t,status:r,onExit:s,onRetry:i,onNewChallenge:a}){return r==="loading"?e.jsx($0,{}):r==="success"&&n?e.jsx(B0,{challenge:n,clickCount:t.length,onNewChallenge:a,onExit:s}):r==="failed"&&n?e.jsx(q0,{challenge:n,userClicks:t,onRetry:i,onExit:s}):r==="active"&&n?e.jsx(H0,{challenge:n,userClicks:t,onExit:s}):null}const dr=7,W0={inorder:{name:"Inorder Traversal",order:"Left -> Root -> Right",description:"Returns elements in SORTED order for BST. This is the key property of BST!",useCase:["Get sorted elements","Validate BST","Range queries"],complexity:{time:"O(n)",space:"O(h)"}},preorder:{name:"Preorder Traversal",order:"Root -> Left -> Right",description:"Process root first. Useful for copying/serializing the BST structure.",useCase:["Copy tree structure","Serialize BST","Prefix expressions"],complexity:{time:"O(n)",space:"O(h)"}},postorder:{name:"Postorder Traversal",order:"Left -> Right -> Root",description:"Process children before root. Essential for safely deleting the tree.",useCase:["Delete tree safely","Calculate subtree sizes","Postfix expressions"],complexity:{time:"O(n)",space:"O(h)"}},levelorder:{name:"Level Order Traversal",order:"Level by Level (BFS)",description:"Visit nodes level by level using a queue. Shows tree structure clearly.",useCase:["Level-wise printing","Find width","Serialize for reconstruction"],complexity:{time:"O(n)",space:"O(w)"}}},ao=(n,t=0)=>n?Math.max(ao(n.left,t+1),ao(n.right,t+1)):t-1,K0=(n,t)=>{const r=[];let s=n;for(;s&&(r.push(s.value),s.value!==t);)t<s.value?s=s.left:s=s.right;return r};function G0({insertValue:n,deleteValue:t,searchValue:r,size:s,height:i,message:a,tree:l,isAnimating:o,visitedNodes:c,searchPath:d,searchResult:u,isChallengeMode:h,challengeStatus:g,onInsertValueChange:b,onDeleteValueChange:N,onSearchValueChange:y,onInsert:j,onDelete:f,onSearch:m,onTraversal:x,onClear:C,onResetTraversal:v,onStartChallenge:P}){const S=(M,E)=>{const q=M.target.value;(q===""||q==="-"||/^-?\d*\.?\d*$/.test(q))&&E(q)},D=o||h;return e.jsxs("div",{className:"control-panel",children:[e.jsx("h2",{children:"Binary Search Tree"}),h?e.jsxs("div",{className:"challenge-mode-indicator",children:[e.jsx("div",{className:"challenge-mode-dot"}),"Challenge Mode Active — click nodes in the tree"]}):e.jsx("div",{className:"operation-group",children:e.jsxs("button",{className:"btn btn-challenge",onClick:P,disabled:o||!l||s<2,title:s<2?"Insert at least 2 nodes first":"Start an AI-generated challenge",children:[e.jsx(Mr,{size:15})," Start Challenge"]})}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{htmlFor:"insertValue",children:"Insert Value"}),e.jsxs("div",{className:"input-group",children:[e.jsx("input",{type:"number",id:"insertValue",value:n,onChange:M=>S(M,b),onKeyDown:M=>M.key==="Enter"&&j(),placeholder:"Enter a number",disabled:D}),e.jsx("button",{onClick:j,className:"btn btn-insert",disabled:D,children:"Insert"})]})]}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{htmlFor:"searchValue",children:"Search Value"}),e.jsxs("div",{className:"input-group",children:[e.jsx("input",{type:"number",id:"searchValue",value:r,onChange:M=>S(M,y),onKeyDown:M=>M.key==="Enter"&&m(),placeholder:"Enter a number",disabled:D}),e.jsxs("button",{onClick:m,className:"btn btn-search",disabled:D||!l,children:[e.jsx(Bt,{size:16})," Search"]})]}),d.length>0&&e.jsxs("div",{className:"search-path-display",children:[e.jsx("span",{className:"search-path-label",children:"Path:"}),e.jsx("div",{className:"search-path-nodes",children:d.map((M,E)=>e.jsxs(_e.Fragment,{children:[e.jsx("span",{className:`search-path-node ${E===d.length-1?u?"found":"not-found":""}`,children:M}),E<d.length-1&&e.jsx(me,{size:14,className:"search-path-arrow"})]},E))})]})]}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{htmlFor:"deleteValue",children:"Delete Value"}),e.jsxs("div",{className:"input-group",children:[e.jsx("input",{type:"number",id:"deleteValue",value:t,onChange:M=>S(M,N),onKeyDown:M=>M.key==="Enter"&&f(),placeholder:"Enter a number",disabled:D}),e.jsx("button",{onClick:f,className:"btn btn-delete",disabled:D,children:"Delete"})]})]}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{children:"Traversals"}),e.jsx("div",{className:"btn-group",children:["inorder","preorder","postorder","levelorder"].map(M=>e.jsxs("button",{onClick:()=>x(M),className:`btn btn-traversal ${M==="inorder"?"btn-traversal-primary":""}`,disabled:D||!l,title:M==="inorder"?"Returns sorted order!":"",children:[M==="levelorder"?"Level Order":M.charAt(0).toUpperCase()+M.slice(1),M==="inorder"&&e.jsx("span",{className:"sorted-badge",children:"Sorted!"})]},M))}),c.length>0&&!D&&e.jsx("button",{onClick:v,className:"btn btn-secondary",style:{marginTop:"0.5rem",width:"100%"},children:"Reset Colors"})]}),e.jsxs("div",{className:"traversal-legend",children:[e.jsxs("div",{className:"legend-item",children:[e.jsx("span",{className:"legend-dot legend-dot--default"}),e.jsx("span",{children:"Not visited"})]}),e.jsxs("div",{className:"legend-item",children:[e.jsx("span",{className:"legend-dot legend-dot--visiting"}),e.jsx("span",{children:"Current"})]}),e.jsxs("div",{className:"legend-item",children:[e.jsx("span",{className:"legend-dot legend-dot--visited"}),e.jsx("span",{children:"Visited"})]}),e.jsxs("div",{className:"legend-item",children:[e.jsx("span",{className:"legend-dot legend-dot--search"}),e.jsx("span",{children:"Search path"})]})]}),e.jsxs("div",{className:"info-panel",children:[e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Nodes:"}),e.jsx("span",{className:"info-value",children:s})]}),e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Height:"}),e.jsx("span",{className:"info-value",children:i})]}),e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Max:"}),e.jsx("span",{className:"info-value",children:dr})]})]}),s>=dr*.8&&s<dr&&e.jsxs("div",{className:"warning-box",children:[e.jsx(bn,{size:18}),e.jsxs("div",{children:[e.jsx("strong",{children:"Tree filling up!"})," ",s,"/",dr," nodes."]})]}),e.jsx("div",{className:"operation-group",children:e.jsx("button",{onClick:C,className:"btn btn-clear",disabled:D,children:"Clear Tree"})}),a&&e.jsx("div",{className:`message message-${a.includes("Error")||a.includes("error")||a.includes("not found")?"error":/success|complete|Inserted|Deleted|cleared|Found/i.test(a)?"success":a.includes("full")?"warning":"info"}`,children:a})]})}function Q0({tree:n,currentNode:t,visitedNodes:r,searchPath:s,searchResult:i,isChallengeMode:a=!1,challengeClickedNodes:l=[],challengeWrongClick:o=null,onNodeClick:c=null}){const d=N=>{if(a)return N===o?{color:"#ef4444",glow:"drop-shadow(0 0 14px rgba(239,68,68,0.9))",radius:28,stroke:3,fontSize:14,fontWeight:"bold"}:l.includes(N)?{color:"#10b981",glow:"drop-shadow(0 0 10px rgba(16,185,129,0.8))",radius:28,stroke:3,fontSize:14,fontWeight:"bold"}:{color:"#6366f1",glow:"none",radius:25,stroke:2,fontSize:14,fontWeight:"normal"};const y=t===N,j=r.includes(N),f=s.includes(N),m=s.length>0&&s[s.length-1]===N;let x="#6366f1",C="none";return y?(x="#f59e0b",C="drop-shadow(0 0 12px #f59e0b) drop-shadow(0 0 20px #f59e0b)"):m?(x=i?"#10b981":"#ef4444",C=i?"drop-shadow(0 0 12px #10b981)":"drop-shadow(0 0 12px #ef4444)"):f?(x="#3b82f6",C="drop-shadow(0 0 8px #3b82f6)"):j&&(x="#10b981",C="drop-shadow(0 0 6px #10b981)"),{color:x,glow:C,radius:y||m?30:25,stroke:y||m?3:2,fontSize:y||m?16:14,fontWeight:y||m?"bold":"normal"}},u=(N,y,j,f,m)=>{if(!N)return[];const x=Math.pow(2,m-f)*50,C=d(N.value),v=[];if(N.left){const P=!a&&s.includes(N.value)&&s.includes(N.left.value);v.push(e.jsx("line",{x1:y,y1:j,x2:y-x,y2:j+100,stroke:P?"#3b82f6":"rgba(255,255,255,0.3)",strokeWidth:P?3:2},`l-${N.value}-l`)),v.push(...u(N.left,y-x,j+100,f+1,m))}if(N.right){const P=!a&&s.includes(N.value)&&s.includes(N.right.value);v.push(e.jsx("line",{x1:y,y1:j,x2:y+x,y2:j+100,stroke:P?"#3b82f6":"rgba(255,255,255,0.3)",strokeWidth:P?3:2},`l-${N.value}-r`)),v.push(...u(N.right,y+x,j+100,f+1,m))}return v.push(e.jsxs("g",{style:{filter:C.glow,transition:"all 0.3s ease",cursor:a?"pointer":"default"},onClick:a&&c?()=>c(N.value):void 0,children:[e.jsx("circle",{cx:y,cy:j,r:C.radius,fill:C.color,stroke:"white",strokeWidth:C.stroke,style:{transition:"all 0.3s ease"}}),e.jsx("text",{x:y,y:j,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:C.fontSize,fontWeight:C.fontWeight,children:N.value})]},`n-${N.value}-${y}`)),v};if(!n)return e.jsxs("div",{className:"tree-empty",children:[e.jsx("p",{children:"BST is empty. Insert some values!"}),e.jsx("p",{className:"tree-empty-hint",children:"Try: 50, 30, 70, 20, 40, 60, 80"})]});const h=ao(n),g=(h+1)*100+50,b=Math.max(800,Math.pow(2,Math.max(h,1))*80);return e.jsx("svg",{width:b,height:g,className:"tree-svg",children:u(n,b/2,50,0,h)})}function X0({traversalType:n,traversalResult:t,isAnimating:r,traversalComplete:s}){if(!n||t.length===0&&!r)return null;const i=W0[n];return e.jsxs("div",{className:"traversal-output-panel",children:[e.jsxs("div",{style:{marginBottom:"1rem"},children:[e.jsxs("h3",{className:"traversal-title",children:[i==null?void 0:i.name,n==="inorder"&&e.jsx("span",{className:"sorted-indicator",children:"Returns Sorted Order!"}),r&&e.jsx("span",{className:"traversal-badge traversal-badge--running",children:"Running..."}),s&&e.jsx("span",{className:"traversal-badge traversal-badge--complete",children:"Complete"})]}),e.jsxs("p",{className:"traversal-order",children:[e.jsx("strong",{children:"Order:"})," ",i==null?void 0:i.order]}),e.jsx("p",{className:"traversal-description",children:i==null?void 0:i.description})]}),e.jsxs("div",{className:"traversal-output-box",children:[e.jsx("div",{className:"traversal-output-label",children:"Output Sequence:"}),e.jsx("div",{className:"traversal-sequence-container",children:t.length===0&&r?e.jsx("span",{style:{color:"var(--text-muted)",fontStyle:"italic"},children:"Traversing..."}):t.map((a,l)=>e.jsx("span",{className:`traversal-node ${l===t.length-1&&!s?"traversal-node--current":"traversal-node--complete"}`,children:a},l))})]}),s&&t.length>0&&e.jsxs("div",{className:"traversal-array-section",children:[e.jsx("div",{className:"traversal-array-label",children:"Array Output:"}),e.jsxs("code",{className:"traversal-array-output",children:["[",t.join(", "),"]"]}),n==="inorder"&&e.jsx("p",{className:"traversal-sorted-note",children:"Notice: The output is sorted! This is the BST property."}),e.jsxs("p",{className:"traversal-use-case",children:["Use case: ",i==null?void 0:i.useCase.join(" | ")]}),e.jsxs("div",{className:"traversal-complexity",children:[e.jsx("strong",{children:"Time:"})," ",e.jsx("code",{className:"complexity-value",children:i==null?void 0:i.complexity.time}),e.jsx("br",{}),e.jsx("strong",{children:"Space:"})," ",e.jsx("code",{className:"complexity-value",children:i==null?void 0:i.complexity.space})]})]})]})}function lo(n){return n?[...lo(n.left),n.value,...lo(n.right)]:[]}function Y0(){const[n,t]=p.useState(null),[r,s]=p.useState(0),[i,a]=p.useState(-1),[l,o]=p.useState(""),[c,d]=p.useState(""),[u,h]=p.useState(""),[g,b]=p.useState(""),[N,y]=p.useState([]),[j,f]=p.useState(null),[m,x]=p.useState([]),[C,v]=p.useState(!1),[P,S]=p.useState(null),[D,M]=p.useState([]),[E,q]=p.useState(null),[K,O]=p.useState(!1),[A,k]=p.useState(!1),[L,V]=p.useState(null),[T,_]=p.useState([]),[z,F]=p.useState("idle"),[B,I]=p.useState(null);p.useEffect(()=>{$()},[]);const $=async()=>{try{const ue=await(await fetch("/api/bst")).json();t(ue.tree),s(ue.size||0),a(ue.height!==void 0?ue.height:-1)}catch(Z){console.error("Error loading BST:",Z)}},R=Z=>{b(Z),setTimeout(()=>b(""),3e3)},w=()=>{y([]),f(null)},H=async()=>{if(!l.trim()){R("Please enter a number!");return}const Z=Number(l);if(isNaN(Z)){R("Please enter a valid number!");return}if(r>=dr){R(`Tree is full! Maximum size is ${dr} nodes.`);return}w(),Q();try{const he=await(await fetch("/api/bst/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:Z})})).json();if(he.error){R(he.error);return}t(he.tree),s(he.size||0),a(he.height!==void 0?he.height:-1),R(`Inserted ${Z}`),o("")}catch{R("Error inserting node")}},Y=async()=>{if(!c.trim()){R("Please enter a number!");return}const Z=Number(c);if(isNaN(Z)){R("Please enter a valid number!");return}w(),Q();try{const he=await(await fetch("/api/bst/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:Z})})).json();if(he.error){R(he.error);return}t(he.tree),s(he.size||0),a(he.height!==void 0?he.height:-1),R(`Deleted ${Z}`),d("")}catch{R("Error deleting node")}},ee=async()=>{if(!u.trim()){R("Please enter a number!");return}const Z=Number(u);if(isNaN(Z)){R("Please enter a valid number!");return}if(!n){R("Tree is empty!");return}Q(),v(!0);const ue=K0(n,Z);for(let he=0;he<ue.length;he++)y(ue.slice(0,he+1)),await new Promise(De=>setTimeout(De,500));try{const De=await(await fetch(`/api/bst/search?value=${Z}`)).json();f(De.found),R(De.found?`Found ${Z}!`:`${Z} not found in BST`)}catch{R("Error searching")}v(!1),h("")},te=async()=>{try{await fetch("/api/bst/clear",{method:"POST"}),t(null),s(0),a(-1),Q(),w(),R("BST cleared!")}catch{R("Error clearing tree")}},U=async Z=>{if(!n){R("Tree is empty! Insert some nodes first.");return}w(),v(!0),x([]),S(null),M([]),q(Z),O(!1);try{const De=(await(await fetch(`/api/bst/${Z}`)).json()).traversal||[];if(De.length===0){R("Tree is empty!"),v(!1);return}for(let Xn=0;Xn<De.length;Xn++)S(De[Xn]),await new Promise(On=>setTimeout(On,600)),M(On=>[...On,De[Xn]]),x(On=>[...On,De[Xn]]),await new Promise(On=>setTimeout(On,200));S(null),O(!0),v(!1);const qt=Z.charAt(0).toUpperCase()+Z.slice(1);R(`${qt} traversal complete!${Z==="inorder"?" (Sorted!)":""}`)}catch(ue){console.error("Traversal error:",ue),R("Error performing traversal"),v(!1)}},Q=()=>{x([]),S(null),M([]),q(null),O(!1)},ce=async()=>{if(!n||r<2){R("Insert at least 2 nodes before starting a challenge!");return}k(!0),F("loading"),V(null),_([]),I(null),Q(),w();try{const Z=await fetch("/api/generate-challenge",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tree_values:lo(n),root_value:n.value,tree_dict:n})}),ue=await Z.json();if(!Z.ok){R(ue.error||"Failed to generate challenge"),k(!1),F("idle");return}V(ue),F("active")}catch{R("Failed to generate challenge — check your connection"),k(!1),F("idle")}},re=Z=>{if(z!=="active"||!L)return;const{type:ue,expected_steps:he}=L;if(ue==="search"||ue==="inorder_start"){const De=he[T.length];if(Z===De){const qt=[...T,Z];_(qt),qt.length===he.length&&F("success")}else I(Z),setTimeout(()=>{I(null),F("failed")},600)}else if(ue==="identify_leaves"){if(T.includes(Z))return;if(he.includes(Z)){const De=[...T,Z];_(De),De.length===he.length&&F("success")}else I(Z),setTimeout(()=>{I(null),F("failed")},600)}},je=()=>{k(!1),V(null),_([]),F("idle"),I(null)},de=()=>{_([]),I(null),F("active")},ln=()=>ce();return e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"intro-layout",children:[e.jsx("div",{className:"intro-left",children:e.jsx(Ar,{dataStructure:"bst"})}),e.jsx(be,{context:"Binary Search Tree (BST) data structure, search, insert, delete operations, and traversals"})]}),e.jsxs("div",{className:"visualizer-layout",children:[e.jsx(G0,{insertValue:l,deleteValue:c,searchValue:u,size:r,height:i,message:g,tree:n,isAnimating:C,visitedNodes:D,searchPath:N,searchResult:j,isChallengeMode:A,challengeStatus:z,onInsertValueChange:o,onDeleteValueChange:d,onSearchValueChange:h,onInsert:H,onDelete:Y,onSearch:ee,onTraversal:U,onClear:te,onResetTraversal:()=>{Q(),w()},onStartChallenge:ce}),e.jsxs("div",{className:"visual-panel",children:[e.jsx("h2",{children:"BST Visualization"}),e.jsxs("p",{className:"bst-property-reminder",children:["Remember: ",e.jsxs("code",{children:["Left ","<"," Parent ","<"," Right"]})]}),A&&e.jsx(U0,{challenge:L,userClicks:T,status:z,onExit:je,onRetry:de,onNewChallenge:ln}),e.jsx("div",{className:"tree-container",children:e.jsx(Q0,{tree:n,currentNode:P,visitedNodes:D,searchPath:N,searchResult:j,isChallengeMode:A,challengeClickedNodes:T,challengeWrongClick:B,onNodeClick:re})}),e.jsx(X0,{traversalType:E,traversalResult:m,isAnimating:C,traversalComplete:K})]})]}),e.jsx(Ce,{dataStructure:"bst"})]})}const ur=7,J0={inorder:{name:"Inorder Traversal",order:"Left -> Root -> Right",description:"Returns elements in SORTED order.",useCase:["Get sorted elements","Validate BST property"],complexity:{time:"O(n)",space:"O(h)"}},preorder:{name:"Preorder Traversal",order:"Root -> Left -> Right",description:"Process root first. Useful for copying tree structure.",useCase:["Copy tree structure","Serialize AVL"],complexity:{time:"O(n)",space:"O(h)"}},postorder:{name:"Postorder Traversal",order:"Left -> Right -> Root",description:"Process children before root.",useCase:["Delete tree safely","Calculate subtree info"],complexity:{time:"O(n)",space:"O(h)"}},levelorder:{name:"Level Order Traversal",order:"Level by Level (BFS)",description:"Visit nodes level by level using a queue.",useCase:["Level-wise printing","Find width"],complexity:{time:"O(n)",space:"O(w)"}}},oo=(n,t=0)=>n?Math.max(oo(n.left,t+1),oo(n.right,t+1)):t-1,Z0=(n,t)=>{const r=[];let s=n;for(;s&&(r.push(s.value),s.value!==t);)t<s.value?s=s.left:s=s.right;return r};function eN({insertValue:n,deleteValue:t,searchValue:r,size:s,height:i,message:a,tree:l,isAnimating:o,visitedNodes:c,searchPath:d,searchResult:u,onInsertValueChange:h,onDeleteValueChange:g,onSearchValueChange:b,onInsert:N,onDelete:y,onSearch:j,onTraversal:f,onClear:m,onResetTraversal:x}){const C=(v,P)=>{const S=v.target.value;(S===""||S==="-"||/^-?\d*\.?\d*$/.test(S))&&P(S)};return e.jsxs("div",{className:"control-panel",children:[e.jsx("h2",{children:"AVL Tree"}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{htmlFor:"insertValue",children:"Insert Value"}),e.jsxs("div",{className:"input-group",children:[e.jsx("input",{type:"number",id:"insertValue",value:n,onChange:v=>C(v,h),onKeyDown:v=>v.key==="Enter"&&N(),placeholder:"Enter a number",disabled:o}),e.jsx("button",{onClick:N,className:"btn btn-insert",disabled:o,children:"Insert"})]})]}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{htmlFor:"searchValue",children:"Search Value"}),e.jsxs("div",{className:"input-group",children:[e.jsx("input",{type:"number",id:"searchValue",value:r,onChange:v=>C(v,b),onKeyDown:v=>v.key==="Enter"&&j(),placeholder:"Enter a number",disabled:o}),e.jsxs("button",{onClick:j,className:"btn btn-search",disabled:o||!l,children:[e.jsx(Bt,{size:16})," Search"]})]}),d.length>0&&e.jsxs("div",{className:"search-path-display",children:[e.jsx("span",{className:"search-path-label",children:"Path:"}),e.jsx("div",{className:"search-path-nodes",children:d.map((v,P)=>e.jsxs(_e.Fragment,{children:[e.jsx("span",{className:`search-path-node ${P===d.length-1?u?"found":"not-found":""}`,children:v}),P<d.length-1&&e.jsx(me,{size:14,className:"search-path-arrow"})]},P))})]})]}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{htmlFor:"deleteValue",children:"Delete Value"}),e.jsxs("div",{className:"input-group",children:[e.jsx("input",{type:"number",id:"deleteValue",value:t,onChange:v=>C(v,g),onKeyDown:v=>v.key==="Enter"&&y(),placeholder:"Enter a number",disabled:o}),e.jsx("button",{onClick:y,className:"btn btn-delete",disabled:o,children:"Delete"})]})]}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{children:"Traversals"}),e.jsx("div",{className:"btn-group",children:["inorder","preorder","postorder","levelorder"].map(v=>e.jsx("button",{onClick:()=>f(v),className:"btn btn-traversal",disabled:o||!l,children:v==="levelorder"?"Level Order":v.charAt(0).toUpperCase()+v.slice(1)},v))}),c.length>0&&!o&&e.jsx("button",{onClick:x,className:"btn btn-secondary",style:{marginTop:"0.5rem",width:"100%"},children:"Reset Colors"})]}),e.jsxs("div",{className:"traversal-legend",children:[e.jsxs("div",{className:"legend-item",children:[e.jsx("span",{className:"legend-dot legend-dot--default"}),e.jsx("span",{children:"Not visited"})]}),e.jsxs("div",{className:"legend-item",children:[e.jsx("span",{className:"legend-dot legend-dot--visiting"}),e.jsx("span",{children:"Current"})]}),e.jsxs("div",{className:"legend-item",children:[e.jsx("span",{className:"legend-dot legend-dot--visited"}),e.jsx("span",{children:"Visited"})]}),e.jsxs("div",{className:"legend-item",children:[e.jsx("span",{className:"legend-dot legend-dot--search"}),e.jsx("span",{children:"Search path"})]})]}),e.jsxs("div",{className:"info-panel",children:[e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Nodes:"}),e.jsx("span",{className:"info-value",children:s})]}),e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Height:"}),e.jsx("span",{className:"info-value",children:i})]}),e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Max:"}),e.jsx("span",{className:"info-value",children:ur})]})]}),s>=ur*.8&&s<ur&&e.jsxs("div",{className:"warning-box",children:[e.jsx(bn,{size:18}),e.jsxs("div",{children:[e.jsx("strong",{children:"Tree filling up!"})," ",s,"/",ur," nodes."]})]}),e.jsx("div",{className:"operation-group",children:e.jsx("button",{onClick:m,className:"btn btn-clear",disabled:o,children:"Clear Tree"})}),a&&e.jsx("div",{className:`message message-${a.includes("Error")||a.includes("error")||a.includes("not found")?"error":/success|complete|Inserted|Deleted|cleared|Found|rebalanced/i.test(a)?"success":a.includes("full")?"warning":"info"}`,children:a})]})}function nN({tree:n,currentNode:t,visitedNodes:r,searchPath:s,searchResult:i}){const a=u=>{const h=t===u,g=r.includes(u),b=s.includes(u),N=s.length>0&&s[s.length-1]===u;let y="#8b5cf6",j="none";return h?(y="#f59e0b",j="drop-shadow(0 0 12px #f59e0b) drop-shadow(0 0 20px #f59e0b)"):N?(y=i?"#10b981":"#ef4444",j=i?"drop-shadow(0 0 12px #10b981)":"drop-shadow(0 0 12px #ef4444)"):b?(y="#3b82f6",j="drop-shadow(0 0 8px #3b82f6)"):g&&(y="#10b981",j="drop-shadow(0 0 6px #10b981)"),{color:y,glow:j,radius:h||N?30:25,stroke:h||N?3:2,fontSize:h||N?16:14,fontWeight:h||N?"bold":"normal"}},l=(u,h,g,b,N)=>{if(!u)return[];const y=Math.pow(2,N-b)*50,j=a(u.value),f=[];if(u.left){const m=s.includes(u.value)&&s.includes(u.left.value);f.push(e.jsx("line",{x1:h,y1:g,x2:h-y,y2:g+100,stroke:m?"#3b82f6":"rgba(255,255,255,0.3)",strokeWidth:m?3:2},`l-${u.value}-l`)),f.push(...l(u.left,h-y,g+100,b+1,N))}if(u.right){const m=s.includes(u.value)&&s.includes(u.right.value);f.push(e.jsx("line",{x1:h,y1:g,x2:h+y,y2:g+100,stroke:m?"#3b82f6":"rgba(255,255,255,0.3)",strokeWidth:m?3:2},`l-${u.value}-r`)),f.push(...l(u.right,h+y,g+100,b+1,N))}return f.push(e.jsxs("g",{style:{filter:j.glow,transition:"all 0.3s ease"},children:[e.jsx("circle",{cx:h,cy:g,r:j.radius,fill:j.color,stroke:"white",strokeWidth:j.stroke,style:{transition:"all 0.3s ease"}}),e.jsx("text",{x:h,y:g,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:j.fontSize,fontWeight:j.fontWeight,children:u.value}),u.balance!==void 0&&e.jsxs("g",{children:[e.jsx("circle",{cx:h+20,cy:g-20,r:10,fill:Math.abs(u.balance)<=1?"#10b981":"#ef4444"}),e.jsx("text",{x:h+20,y:g-20,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:10,fontWeight:"bold",children:u.balance})]})]},`n-${u.value}-${h}`)),f};if(!n)return e.jsxs("div",{className:"tree-empty",children:[e.jsx("p",{children:"AVL Tree is empty. Insert some values!"}),e.jsx("p",{className:"tree-empty-hint",children:"Try: 30, 20, 40, 10 (watch it balance!)"})]});const o=oo(n),c=(o+1)*100+50,d=Math.max(800,Math.pow(2,Math.max(o,1))*80);return e.jsx("svg",{width:d,height:c,className:"tree-svg",children:l(n,d/2,50,0,o)})}function tN({traversalType:n,traversalResult:t,isAnimating:r,traversalComplete:s}){if(!n||t.length===0&&!r)return null;const i=J0[n];return e.jsxs("div",{className:"traversal-output-panel",children:[e.jsxs("div",{style:{marginBottom:"1rem"},children:[e.jsxs("h3",{className:"traversal-title",children:[i==null?void 0:i.name,r&&e.jsx("span",{className:"traversal-badge traversal-badge--running",children:"Running..."}),s&&e.jsx("span",{className:"traversal-badge traversal-badge--complete",children:"Complete"})]}),e.jsxs("p",{className:"traversal-order",children:[e.jsx("strong",{children:"Order:"})," ",i==null?void 0:i.order]}),e.jsx("p",{className:"traversal-description",children:i==null?void 0:i.description})]}),e.jsxs("div",{className:"traversal-output-box",children:[e.jsx("div",{className:"traversal-output-label",children:"Output Sequence:"}),e.jsx("div",{className:"traversal-sequence-container",children:t.length===0&&r?e.jsx("span",{style:{color:"var(--text-muted)",fontStyle:"italic"},children:"Traversing..."}):t.map((a,l)=>e.jsx("span",{className:`traversal-node ${l===t.length-1&&!s?"traversal-node--current":"traversal-node--complete"}`,children:a},l))})]}),s&&t.length>0&&e.jsxs("div",{className:"traversal-array-section",children:[e.jsx("div",{className:"traversal-array-label",children:"Array Output:"}),e.jsxs("code",{className:"traversal-array-output",children:["[",t.join(", "),"]"]}),e.jsxs("p",{className:"traversal-use-case",children:["Use case: ",i==null?void 0:i.useCase.join(" | ")]}),e.jsxs("div",{className:"traversal-complexity",children:[e.jsx("strong",{children:"Time:"})," ",e.jsx("code",{className:"complexity-value",children:i==null?void 0:i.complexity.time}),e.jsx("br",{}),e.jsx("strong",{children:"Space:"})," ",e.jsx("code",{className:"complexity-value",children:i==null?void 0:i.complexity.space})]})]})]})}function rN(){const[n,t]=p.useState(null),[r,s]=p.useState(0),[i,a]=p.useState(-1),[l,o]=p.useState(""),[c,d]=p.useState(""),[u,h]=p.useState(""),[g,b]=p.useState(""),[N,y]=p.useState([]),[j,f]=p.useState(null),[m,x]=p.useState([]),[C,v]=p.useState(!1),[P,S]=p.useState(null),[D,M]=p.useState([]),[E,q]=p.useState(null),[K,O]=p.useState(!1);p.useEffect(()=>{A()},[]);const A=async()=>{try{const $=await(await fetch("/api/avl")).json();t($.tree),s($.size||0),a($.height!==void 0?$.height:-1)}catch(I){console.error("Error loading AVL:",I)}},k=I=>{b(I),setTimeout(()=>b(""),3e3)},L=()=>{y([]),f(null)},V=async()=>{if(!l.trim()){k("Please enter a number!");return}const I=Number(l);if(isNaN(I)){k("Please enter a valid number!");return}if(r>=ur){k(`Tree is full! Maximum size is ${ur} nodes.`);return}L(),B();try{const R=await(await fetch("/api/avl/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:I})})).json();if(R.error){k(R.error);return}t(R.tree),s(R.size||0),a(R.height!==void 0?R.height:-1),k(`Inserted ${I} (tree rebalanced)`),o("")}catch{k("Error inserting node")}},T=async()=>{if(!c.trim()){k("Please enter a number!");return}const I=Number(c);if(isNaN(I)){k("Please enter a valid number!");return}L(),B();try{const R=await(await fetch("/api/avl/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:I})})).json();if(R.error){k(R.error);return}t(R.tree),s(R.size||0),a(R.height!==void 0?R.height:-1),k(`Deleted ${I} (tree rebalanced)`),d("")}catch{k("Error deleting node")}},_=async()=>{if(!u.trim()){k("Please enter a number!");return}const I=Number(u);if(isNaN(I)){k("Please enter a valid number!");return}if(!n){k("Tree is empty!");return}B(),v(!0);const $=Z0(n,I);for(let R=0;R<$.length;R++)y($.slice(0,R+1)),await new Promise(w=>setTimeout(w,500));try{const w=await(await fetch(`/api/avl/search?value=${I}`)).json();f(w.found),w.found?k(`Found ${I}!`):k(`${I} not found in AVL Tree`)}catch{k("Error searching")}v(!1),h("")},z=async()=>{try{await fetch("/api/avl/clear",{method:"POST"}),t(null),s(0),a(-1),B(),L(),k("AVL Tree cleared!")}catch{k("Error clearing tree")}},F=async I=>{if(!n){k("Tree is empty! Insert some nodes first.");return}L(),v(!0),x([]),S(null),M([]),q(I),O(!1);try{const w=(await(await fetch(`/api/avl/${I}`)).json()).traversal||[];if(w.length===0){k("Tree is empty!"),v(!1);return}for(let Y=0;Y<w.length;Y++)S(w[Y]),await new Promise(ee=>setTimeout(ee,600)),M(ee=>[...ee,w[Y]]),x(ee=>[...ee,w[Y]]),await new Promise(ee=>setTimeout(ee,200));S(null),O(!0),v(!1);const H=I.charAt(0).toUpperCase()+I.slice(1);k(`${H} traversal complete!`)}catch($){console.error("Traversal error:",$),k("Error performing traversal"),v(!1)}},B=()=>{x([]),S(null),M([]),q(null),O(!1)};return e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"intro-layout",children:[e.jsx("div",{className:"intro-left",children:e.jsx(Ar,{dataStructure:"avl"})}),e.jsx(be,{context:"AVL Tree data structure, self-balancing BST, rotations, balance factors, and O(log n) guaranteed operations"})]}),e.jsxs("div",{className:"visualizer-layout",children:[e.jsx(eN,{insertValue:l,deleteValue:c,searchValue:u,size:r,height:i,message:g,tree:n,isAnimating:C,visitedNodes:D,searchPath:N,searchResult:j,onInsertValueChange:o,onDeleteValueChange:d,onSearchValueChange:h,onInsert:V,onDelete:T,onSearch:_,onTraversal:F,onClear:z,onResetTraversal:()=>{B(),L()}}),e.jsxs("div",{className:"visual-panel",children:[e.jsx("h2",{children:"AVL Tree Visualization"}),e.jsxs("p",{className:"bst-property-reminder",children:["Self-balancing: ",e.jsx("code",{children:"|Balance Factor| <= 1"})," for all nodes"]}),e.jsx("div",{className:"tree-container",children:e.jsx(nN,{tree:n,currentNode:P,visitedNodes:D,searchPath:N,searchResult:j})}),e.jsx(tN,{traversalType:E,traversalResult:m,isAnimating:C,traversalComplete:K})]})]}),e.jsx(Ce,{dataStructure:"avl"})]})}const hr=7,sN={inorder:{name:"Inorder Traversal",order:"Left -> Root -> Right",description:"Returns elements in SORTED order.",useCase:["Get sorted elements","Validate BST property"],complexity:{time:"O(n)",space:"O(h)"}},preorder:{name:"Preorder Traversal",order:"Root -> Left -> Right",description:"Process root first. Root shows most recently accessed!",useCase:["See access pattern","Serialize structure"],complexity:{time:"O(n)",space:"O(h)"}},postorder:{name:"Postorder Traversal",order:"Left -> Right -> Root",description:"Process children before root.",useCase:["Delete tree safely","Calculate subtree info"],complexity:{time:"O(n)",space:"O(h)"}},levelorder:{name:"Level Order Traversal",order:"Level by Level (BFS)",description:"Visit nodes level by level.",useCase:["Level-wise printing","Find width"],complexity:{time:"O(n)",space:"O(w)"}}},co=(n,t=0)=>n?Math.max(co(n.left,t+1),co(n.right,t+1)):t-1;function iN({insertValue:n,deleteValue:t,searchValue:r,size:s,height:i,message:a,tree:l,isAnimating:o,visitedNodes:c,lastSplayedValue:d,onInsertValueChange:u,onDeleteValueChange:h,onSearchValueChange:g,onInsert:b,onDelete:N,onSearch:y,onTraversal:j,onClear:f,onResetTraversal:m}){const x=(C,v)=>{const P=C.target.value;(P===""||P==="-"||/^-?\d*\.?\d*$/.test(P))&&v(P)};return e.jsxs("div",{className:"control-panel",children:[e.jsx("h2",{children:"Splay Tree"}),e.jsxs("div",{className:"splay-info-box",children:[e.jsx("strong",{children:"Key Feature:"})," Accessed nodes move to root!"]}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{htmlFor:"insertValue",children:"Insert Value"}),e.jsxs("div",{className:"input-group",children:[e.jsx("input",{type:"number",id:"insertValue",value:n,onChange:C=>x(C,u),onKeyDown:C=>C.key==="Enter"&&b(),placeholder:"Enter a number",disabled:o}),e.jsx("button",{onClick:b,className:"btn btn-insert",disabled:o,children:"Insert"})]})]}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{htmlFor:"searchValue",children:"Search Value (Splays to Root!)"}),e.jsxs("div",{className:"input-group",children:[e.jsx("input",{type:"number",id:"searchValue",value:r,onChange:C=>x(C,g),onKeyDown:C=>C.key==="Enter"&&y(),placeholder:"Enter a number",disabled:o}),e.jsxs("button",{onClick:y,className:"btn btn-search",disabled:o||!l,children:[e.jsx(Bt,{size:16})," Search"]})]})]}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{htmlFor:"deleteValue",children:"Delete Value"}),e.jsxs("div",{className:"input-group",children:[e.jsx("input",{type:"number",id:"deleteValue",value:t,onChange:C=>x(C,h),onKeyDown:C=>C.key==="Enter"&&N(),placeholder:"Enter a number",disabled:o}),e.jsx("button",{onClick:N,className:"btn btn-delete",disabled:o,children:"Delete"})]})]}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{children:"Traversals"}),e.jsx("div",{className:"btn-group",children:["inorder","preorder","postorder","levelorder"].map(C=>e.jsx("button",{onClick:()=>j(C),className:"btn btn-traversal",disabled:o||!l,children:C==="levelorder"?"Level Order":C.charAt(0).toUpperCase()+C.slice(1)},C))}),c.length>0&&!o&&e.jsx("button",{onClick:m,className:"btn btn-secondary",style:{marginTop:"0.5rem",width:"100%"},children:"Reset Colors"})]}),e.jsxs("div",{className:"traversal-legend",children:[e.jsxs("div",{className:"legend-item",children:[e.jsx("span",{className:"legend-dot legend-dot--default"}),e.jsx("span",{children:"Not visited"})]}),e.jsxs("div",{className:"legend-item",children:[e.jsx("span",{className:"legend-dot legend-dot--visiting"}),e.jsx("span",{children:"Current"})]}),e.jsxs("div",{className:"legend-item",children:[e.jsx("span",{className:"legend-dot legend-dot--visited"}),e.jsx("span",{children:"Visited"})]}),e.jsxs("div",{className:"legend-item",children:[e.jsx("span",{className:"legend-dot",style:{background:"#ec4899"}}),e.jsx("span",{children:"Root (Splayed)"})]})]}),e.jsxs("div",{className:"info-panel",children:[e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Nodes:"}),e.jsx("span",{className:"info-value",children:s})]}),e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Height:"}),e.jsx("span",{className:"info-value",children:i})]}),e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Max:"}),e.jsx("span",{className:"info-value",children:hr})]})]}),d!==null&&e.jsxs("div",{className:"splay-result-box",children:[e.jsx("strong",{children:"Root:"})," ",d," (most recently accessed)"]}),s>=hr*.8&&s<hr&&e.jsxs("div",{className:"warning-box",children:[e.jsx(bn,{size:18}),e.jsxs("div",{children:[e.jsx("strong",{children:"Tree filling up!"})," ",s,"/",hr," nodes."]})]}),e.jsx("div",{className:"operation-group",children:e.jsx("button",{onClick:f,className:"btn btn-clear",disabled:o,children:"Clear Tree"})}),a&&e.jsx("div",{className:`message message-${a.includes("Error")||a.includes("error")||a.includes("not found")?"error":/success|complete|Inserted|Deleted|cleared|Found|root/i.test(a)?"success":a.includes("full")?"warning":"info"}`,children:a})]})}function aN({tree:n,currentNode:t,visitedNodes:r,lastSplayedValue:s}){const i=(d,u)=>{const h=t===d,g=r.includes(d),b=u&&s===d;let N="#06b6d4",y="none";return h?(N="#f59e0b",y="drop-shadow(0 0 12px #f59e0b) drop-shadow(0 0 20px #f59e0b)"):b?(N="#ec4899",y="drop-shadow(0 0 15px #ec4899) drop-shadow(0 0 25px #ec4899)"):u?(N="#8b5cf6",y="drop-shadow(0 0 8px #8b5cf6)"):g&&(N="#10b981",y="drop-shadow(0 0 6px #10b981)"),{color:N,glow:y,radius:h||b?30:u?28:25,stroke:h||b?3:2,fontSize:h||b?16:14,fontWeight:h||b||u?"bold":"normal"}},a=(d,u,h,g,b,N=!1)=>{if(!d)return[];const y=Math.pow(2,b-g)*50,j=i(d.value,N),f=[];return d.left&&(f.push(e.jsx("line",{x1:u,y1:h,x2:u-y,y2:h+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:2},`l-${d.value}-l`)),f.push(...a(d.left,u-y,h+100,g+1,b,!1))),d.right&&(f.push(e.jsx("line",{x1:u,y1:h,x2:u+y,y2:h+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:2},`l-${d.value}-r`)),f.push(...a(d.right,u+y,h+100,g+1,b,!1))),f.push(e.jsxs("g",{style:{filter:j.glow,transition:"all 0.3s ease"},children:[e.jsx("circle",{cx:u,cy:h,r:j.radius,fill:j.color,stroke:"white",strokeWidth:j.stroke,style:{transition:"all 0.3s ease"}}),e.jsx("text",{x:u,y:h,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:j.fontSize,fontWeight:j.fontWeight,children:d.value}),N&&e.jsx("text",{x:u,y:h+j.radius+15,textAnchor:"middle",fill:"#ec4899",fontSize:10,fontWeight:"bold",children:"ROOT"})]},`n-${d.value}-${u}`)),f};if(!n)return e.jsxs("div",{className:"tree-empty",children:[e.jsx("p",{children:"Splay Tree is empty. Insert some values!"}),e.jsx("p",{className:"tree-empty-hint",children:"Try inserting: 50, 30, 70, then search for 30!"})]});const l=co(n),o=(l+1)*100+70,c=Math.max(800,Math.pow(2,Math.max(l,1))*80);return e.jsx("svg",{width:c,height:o,className:"tree-svg",children:a(n,c/2,50,0,l,!0)})}function lN({traversalType:n,traversalResult:t,isAnimating:r,traversalComplete:s}){if(!n||t.length===0&&!r)return null;const i=sN[n];return e.jsxs("div",{className:"traversal-output-panel",children:[e.jsxs("div",{style:{marginBottom:"1rem"},children:[e.jsxs("h3",{className:"traversal-title",children:[i==null?void 0:i.name,r&&e.jsx("span",{className:"traversal-badge traversal-badge--running",children:"Running..."}),s&&e.jsx("span",{className:"traversal-badge traversal-badge--complete",children:"Complete"})]}),e.jsxs("p",{className:"traversal-order",children:[e.jsx("strong",{children:"Order:"})," ",i==null?void 0:i.order]}),e.jsx("p",{className:"traversal-description",children:i==null?void 0:i.description})]}),e.jsxs("div",{className:"traversal-output-box",children:[e.jsx("div",{className:"traversal-output-label",children:"Output Sequence:"}),e.jsx("div",{className:"traversal-sequence-container",children:t.length===0&&r?e.jsx("span",{style:{color:"var(--text-muted)",fontStyle:"italic"},children:"Traversing..."}):t.map((a,l)=>e.jsx("span",{className:`traversal-node ${l===t.length-1&&!s?"traversal-node--current":"traversal-node--complete"}`,children:a},l))})]}),s&&t.length>0&&e.jsxs("div",{className:"traversal-array-section",children:[e.jsx("div",{className:"traversal-array-label",children:"Array Output:"}),e.jsxs("code",{className:"traversal-array-output",children:["[",t.join(", "),"]"]}),n==="preorder"&&e.jsx("p",{className:"traversal-sorted-note",children:"Note: First element is the root (most recently accessed)!"}),e.jsxs("p",{className:"traversal-use-case",children:["Use case: ",i==null?void 0:i.useCase.join(" | ")]}),e.jsxs("div",{className:"traversal-complexity",children:[e.jsx("strong",{children:"Time:"})," ",e.jsx("code",{className:"complexity-value",children:i==null?void 0:i.complexity.time}),e.jsx("br",{}),e.jsx("strong",{children:"Space:"})," ",e.jsx("code",{className:"complexity-value",children:i==null?void 0:i.complexity.space})]})]})]})}function oN(){const[n,t]=p.useState(null),[r,s]=p.useState(0),[i,a]=p.useState(-1),[l,o]=p.useState(""),[c,d]=p.useState(""),[u,h]=p.useState(""),[g,b]=p.useState(""),[N,y]=p.useState(null),[j,f]=p.useState([]),[m,x]=p.useState(!1),[C,v]=p.useState(null),[P,S]=p.useState([]),[D,M]=p.useState(null),[E,q]=p.useState(!1);p.useEffect(()=>{K()},[]);const K=async()=>{try{const F=await(await fetch("/api/splay")).json();t(F.tree),s(F.size||0),a(F.height!==void 0?F.height:-1)}catch(z){console.error("Error loading Splay Tree:",z)}},O=z=>{b(z),setTimeout(()=>b(""),3e3)},A=async()=>{if(!l.trim()){O("Please enter a number!");return}const z=Number(l);if(isNaN(z)){O("Please enter a valid number!");return}if(r>=hr){O(`Tree is full! Maximum size is ${hr} nodes.`);return}_(),y(null);try{const B=await(await fetch("/api/splay/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:z})})).json();if(B.error){O(B.error);return}t(B.tree),s(B.size||0),a(B.height!==void 0?B.height:-1),y(z),O(`Inserted ${z} (now at root!)`),o("")}catch{O("Error inserting node")}},k=async()=>{if(!c.trim()){O("Please enter a number!");return}const z=Number(c);if(isNaN(z)){O("Please enter a valid number!");return}_(),y(null);try{const B=await(await fetch("/api/splay/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:z})})).json();if(B.error){O(B.error);return}t(B.tree),s(B.size||0),a(B.height!==void 0?B.height:-1),O(`Deleted ${z}`),d("")}catch{O("Error deleting node")}},L=async()=>{if(!u.trim()){O("Please enter a number!");return}const z=Number(u);if(isNaN(z)){O("Please enter a valid number!");return}if(!n){O("Tree is empty!");return}_(),x(!0);try{const B=await(await fetch(`/api/splay/search?value=${z}`)).json();B.tree&&t(B.tree),B.found?(y(z),O(`Found ${z}! (splayed to root)`)):(y(null),O(`${z} not found in Splay Tree`)),await K()}catch{O("Error searching")}x(!1),h("")},V=async()=>{try{await fetch("/api/splay/clear",{method:"POST"}),t(null),s(0),a(-1),_(),y(null),O("Splay Tree cleared!")}catch{O("Error clearing tree")}},T=async z=>{if(!n){O("Tree is empty! Insert some nodes first.");return}y(null),x(!0),f([]),v(null),S([]),M(z),q(!1);try{const I=(await(await fetch(`/api/splay/${z}`)).json()).traversal||[];if(I.length===0){O("Tree is empty!"),x(!1);return}for(let R=0;R<I.length;R++)v(I[R]),await new Promise(w=>setTimeout(w,600)),S(w=>[...w,I[R]]),f(w=>[...w,I[R]]),await new Promise(w=>setTimeout(w,200));v(null),q(!0),x(!1);const $=z.charAt(0).toUpperCase()+z.slice(1);O(`${$} traversal complete!`)}catch(F){console.error("Traversal error:",F),O("Error performing traversal"),x(!1)}},_=()=>{f([]),v(null),S([]),M(null),q(!1)};return e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"intro-layout",children:[e.jsx("div",{className:"intro-left",children:e.jsx(Ar,{dataStructure:"splay"})}),e.jsx(be,{context:"Splay Tree data structure, self-adjusting BST, splay operations, zig-zig, zig-zag rotations, amortized O(log n)"})]}),e.jsxs("div",{className:"visualizer-layout",children:[e.jsx(iN,{insertValue:l,deleteValue:c,searchValue:u,size:r,height:i,message:g,tree:n,isAnimating:m,visitedNodes:P,lastSplayedValue:N,onInsertValueChange:o,onDeleteValueChange:d,onSearchValueChange:h,onInsert:A,onDelete:k,onSearch:L,onTraversal:T,onClear:V,onResetTraversal:()=>{_(),y(null)}}),e.jsxs("div",{className:"visual-panel",children:[e.jsx("h2",{children:"Splay Tree Visualization"}),e.jsxs("p",{className:"bst-property-reminder",children:["Self-adjusting: ",e.jsx("code",{children:"Recently accessed = Root"})]}),e.jsx("div",{className:"tree-container",children:e.jsx(aN,{tree:n,currentNode:C,visitedNodes:P,lastSplayedValue:N})}),e.jsx(lN,{traversalType:D,traversalResult:j,isAnimating:m,traversalComplete:E})]})]}),e.jsx(Ce,{dataStructure:"splay"})]})}const pr=15,cN={inorder:{name:"Inorder Traversal",order:"Left -> Root -> Right",description:"Returns elements in SORTED order (BST property preserved in treap).",useCase:["Get sorted elements","Validate BST property","Range queries"],complexity:{time:"O(n)",space:"O(h)"}},preorder:{name:"Preorder Traversal",order:"Root -> Left -> Right",description:"Process root first. Shows the priority-based structure of the treap.",useCase:["Copy tree structure","Serialize treap","Prefix expressions"],complexity:{time:"O(n)",space:"O(h)"}},postorder:{name:"Postorder Traversal",order:"Left -> Right -> Root",description:"Process children before root. Useful for deletion operations.",useCase:["Delete tree safely","Calculate subtree sizes","Postfix expressions"],complexity:{time:"O(n)",space:"O(h)"}},levelorder:{name:"Level Order Traversal",order:"Level by Level (BFS)",description:"Visit nodes level by level. Reveals the heap-ordered priority structure.",useCase:["Level-wise printing","Verify heap property","Serialize for reconstruction"],complexity:{time:"O(n)",space:"O(w)"}}},uo=(n,t=0)=>n?Math.max(uo(n.left,t+1),uo(n.right,t+1)):t-1,dN=(n,t)=>{const r=[];let s=n;for(;s&&(r.push(s.value),s.value!==t);)t<s.value?s=s.left:s=s.right;return r},uN=n=>{const r=40+n/100*60,s=55-n/100*15;return`hsl(260, ${r}%, ${s}%)`};function hN({insertValue:n,deleteValue:t,searchValue:r,size:s,height:i,message:a,tree:l,isAnimating:o,visitedNodes:c,searchPath:d,searchResult:u,onInsertValueChange:h,onDeleteValueChange:g,onSearchValueChange:b,onInsert:N,onDelete:y,onSearch:j,onTraversal:f,onClear:m,onResetTraversal:x}){const C=(v,P)=>{const S=v.target.value;(S===""||S==="-"||/^-?\d*\.?\d*$/.test(S))&&P(S)};return e.jsxs("div",{className:"control-panel",children:[e.jsx("h2",{children:"Treap"}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{htmlFor:"insertValue",children:"Insert Value"}),e.jsxs("div",{className:"input-group",children:[e.jsx("input",{type:"number",id:"insertValue",value:n,onChange:v=>C(v,h),onKeyDown:v=>v.key==="Enter"&&N(),placeholder:"Enter a number",disabled:o}),e.jsx("button",{onClick:N,className:"btn btn-insert",disabled:o,children:"Insert"})]})]}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{htmlFor:"searchValue",children:"Search Value"}),e.jsxs("div",{className:"input-group",children:[e.jsx("input",{type:"number",id:"searchValue",value:r,onChange:v=>C(v,b),onKeyDown:v=>v.key==="Enter"&&j(),placeholder:"Enter a number",disabled:o}),e.jsxs("button",{onClick:j,className:"btn btn-search",disabled:o||!l,children:[e.jsx(Bt,{size:16})," Search"]})]}),d.length>0&&e.jsxs("div",{className:"search-path-display",children:[e.jsx("span",{className:"search-path-label",children:"Path:"}),e.jsx("div",{className:"search-path-nodes",children:d.map((v,P)=>e.jsxs(_e.Fragment,{children:[e.jsx("span",{className:`search-path-node ${P===d.length-1?u?"found":"not-found":""}`,children:v}),P<d.length-1&&e.jsx(me,{size:14,className:"search-path-arrow"})]},P))})]})]}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{htmlFor:"deleteValue",children:"Delete Value"}),e.jsxs("div",{className:"input-group",children:[e.jsx("input",{type:"number",id:"deleteValue",value:t,onChange:v=>C(v,g),onKeyDown:v=>v.key==="Enter"&&y(),placeholder:"Enter a number",disabled:o}),e.jsx("button",{onClick:y,className:"btn btn-delete",disabled:o,children:"Delete"})]})]}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{children:"Traversals"}),e.jsx("div",{className:"btn-group",children:["inorder","preorder","postorder","levelorder"].map(v=>e.jsxs("button",{onClick:()=>f(v),className:`btn btn-traversal ${v==="inorder"?"btn-traversal-primary":""}`,disabled:o||!l,title:v==="inorder"?"Returns sorted order!":"",children:[v==="levelorder"?"Level Order":v.charAt(0).toUpperCase()+v.slice(1),v==="inorder"&&e.jsx("span",{className:"sorted-badge",children:"Sorted!"})]},v))}),c.length>0&&!o&&e.jsx("button",{onClick:x,className:"btn btn-secondary",style:{marginTop:"0.5rem",width:"100%"},children:"Reset Colors"})]}),e.jsxs("div",{className:"traversal-legend",children:[e.jsxs("div",{className:"legend-item",children:[e.jsx("span",{className:"legend-dot legend-dot--default"}),e.jsx("span",{children:"Not visited"})]}),e.jsxs("div",{className:"legend-item",children:[e.jsx("span",{className:"legend-dot legend-dot--visiting"}),e.jsx("span",{children:"Current"})]}),e.jsxs("div",{className:"legend-item",children:[e.jsx("span",{className:"legend-dot legend-dot--visited"}),e.jsx("span",{children:"Visited"})]}),e.jsxs("div",{className:"legend-item",children:[e.jsx("span",{className:"legend-dot legend-dot--search"}),e.jsx("span",{children:"Search path"})]})]}),e.jsxs("div",{className:"info-panel",children:[e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Nodes:"}),e.jsx("span",{className:"info-value",children:s})]}),e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Height:"}),e.jsx("span",{className:"info-value",children:i})]}),e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Max:"}),e.jsx("span",{className:"info-value",children:pr})]})]}),s>=pr*.8&&s<pr&&e.jsxs("div",{className:"warning-box",children:[e.jsx(bn,{size:18}),e.jsxs("div",{children:[e.jsx("strong",{children:"Tree filling up!"})," ",s,"/",pr," nodes."]})]}),e.jsx("div",{className:"operation-group",children:e.jsx("button",{onClick:m,className:"btn btn-clear",disabled:o,children:"Clear Tree"})}),a&&e.jsx("div",{className:`message message-${a.includes("Error")||a.includes("error")||a.includes("not found")||a.includes("already exists")?"error":/success|complete|Inserted|Deleted|cleared|Found/i.test(a)?"success":a.includes("full")?"warning":"info"}`,children:a})]})}function pN({tree:n,currentNode:t,visitedNodes:r,searchPath:s,searchResult:i}){const a=u=>{const h=t===u,g=r.includes(u),b=s.includes(u),N=s.length>0&&s[s.length-1]===u;let y="#6366f1",j="none";return h?(y="#f59e0b",j="drop-shadow(0 0 12px #f59e0b) drop-shadow(0 0 20px #f59e0b)"):N?(y=i?"#10b981":"#ef4444",j=i?"drop-shadow(0 0 12px #10b981)":"drop-shadow(0 0 12px #ef4444)"):b?(y="#3b82f6",j="drop-shadow(0 0 8px #3b82f6)"):g&&(y="#10b981",j="drop-shadow(0 0 6px #10b981)"),{color:y,glow:j,radius:h||N?30:25,stroke:h||N?3:2,fontSize:h||N?15:13,fontWeight:h||N?"bold":"normal"}},l=(u,h,g,b,N)=>{if(!u)return[];const y=Math.pow(2,N-b)*50,j=a(u.value),f=[],x=j.color==="#6366f1"?uN(u.priority):j.color;if(u.left){const C=s.includes(u.value)&&s.includes(u.left.value);f.push(e.jsx("line",{x1:h,y1:g,x2:h-y,y2:g+100,stroke:C?"#3b82f6":"rgba(255,255,255,0.3)",strokeWidth:C?3:2},`l-${u.value}-l`)),f.push(...l(u.left,h-y,g+100,b+1,N))}if(u.right){const C=s.includes(u.value)&&s.includes(u.right.value);f.push(e.jsx("line",{x1:h,y1:g,x2:h+y,y2:g+100,stroke:C?"#3b82f6":"rgba(255,255,255,0.3)",strokeWidth:C?3:2},`l-${u.value}-r`)),f.push(...l(u.right,h+y,g+100,b+1,N))}return f.push(e.jsxs("g",{style:{filter:j.glow,transition:"all 0.3s ease"},children:[e.jsx("circle",{cx:h,cy:g,r:j.radius,fill:x,stroke:"white",strokeWidth:j.stroke,style:{transition:"all 0.3s ease"}}),e.jsx("text",{x:h,y:g-5,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:j.fontSize,fontWeight:j.fontWeight,children:u.value}),e.jsxs("text",{x:h,y:g+11,textAnchor:"middle",dominantBaseline:"middle",fill:"rgba(255,255,255,0.7)",fontSize:9,fontWeight:"normal",children:["p:",u.priority]})]},`n-${u.value}-${h}`)),f};if(!n)return e.jsxs("div",{className:"tree-empty",children:[e.jsx("p",{children:"Treap is empty. Insert some values!"}),e.jsx("p",{className:"tree-empty-hint",children:"Try: 50, 30, 70, 20, 40, 60, 80"})]});const o=uo(n),c=(o+1)*100+50,d=Math.max(800,Math.pow(2,Math.max(o,1))*80);return e.jsx("svg",{width:d,height:c,className:"tree-svg",children:l(n,d/2,50,0,o)})}function fN({traversalType:n,traversalResult:t,isAnimating:r,traversalComplete:s}){if(!n||t.length===0&&!r)return null;const i=cN[n];return e.jsxs("div",{className:"traversal-output-panel",children:[e.jsxs("div",{style:{marginBottom:"1rem"},children:[e.jsxs("h3",{className:"traversal-title",children:[i==null?void 0:i.name,n==="inorder"&&e.jsx("span",{className:"sorted-indicator",children:"Returns Sorted Order!"}),r&&e.jsx("span",{className:"traversal-badge traversal-badge--running",children:"Running..."}),s&&e.jsx("span",{className:"traversal-badge traversal-badge--complete",children:"Complete"})]}),e.jsxs("p",{className:"traversal-order",children:[e.jsx("strong",{children:"Order:"})," ",i==null?void 0:i.order]}),e.jsx("p",{className:"traversal-description",children:i==null?void 0:i.description})]}),e.jsxs("div",{className:"traversal-output-box",children:[e.jsx("div",{className:"traversal-output-label",children:"Output Sequence:"}),e.jsx("div",{className:"traversal-sequence-container",children:t.length===0&&r?e.jsx("span",{style:{color:"var(--text-muted)",fontStyle:"italic"},children:"Traversing..."}):t.map((a,l)=>e.jsx("span",{className:`traversal-node ${l===t.length-1&&!s?"traversal-node--current":"traversal-node--complete"}`,children:a},l))})]}),s&&t.length>0&&e.jsxs("div",{className:"traversal-array-section",children:[e.jsx("div",{className:"traversal-array-label",children:"Array Output:"}),e.jsxs("code",{className:"traversal-array-output",children:["[",t.join(", "),"]"]}),n==="inorder"&&e.jsx("p",{className:"traversal-sorted-note",children:"Notice: The output is sorted! BST property is maintained in the treap."}),e.jsxs("p",{className:"traversal-use-case",children:["Use case: ",i==null?void 0:i.useCase.join(" | ")]}),e.jsxs("div",{className:"traversal-complexity",children:[e.jsx("strong",{children:"Time:"})," ",e.jsx("code",{className:"complexity-value",children:i==null?void 0:i.complexity.time}),e.jsx("br",{}),e.jsx("strong",{children:"Space:"})," ",e.jsx("code",{className:"complexity-value",children:i==null?void 0:i.complexity.space})]})]})]})}function mN(){const[n,t]=p.useState(null),[r,s]=p.useState(0),[i,a]=p.useState(-1),[l,o]=p.useState(""),[c,d]=p.useState(""),[u,h]=p.useState(""),[g,b]=p.useState(""),[N,y]=p.useState([]),[j,f]=p.useState(null),[m,x]=p.useState([]),[C,v]=p.useState(!1),[P,S]=p.useState(null),[D,M]=p.useState([]),[E,q]=p.useState(null),[K,O]=p.useState(!1);p.useEffect(()=>{A()},[]);const A=async()=>{try{const $=await(await fetch("/api/treap")).json();t($.tree),s($.size||0),a($.height!==void 0?$.height:-1)}catch(I){console.error("Error loading Treap:",I)}},k=I=>{b(I),setTimeout(()=>b(""),3e3)},L=()=>{y([]),f(null)},V=async()=>{if(!l.trim()){k("Please enter a number!");return}const I=Number(l);if(isNaN(I)){k("Please enter a valid number!");return}if(r>=pr){k(`Tree is full! Maximum size is ${pr} nodes.`);return}L(),B();try{const R=await(await fetch("/api/treap/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:I})})).json();if(R.error){k(R.error);return}t(R.tree),s(R.size||0),a(R.height!==void 0?R.height:-1),k(`Inserted ${I}`),o("")}catch{k("Error inserting node")}},T=async()=>{if(!c.trim()){k("Please enter a number!");return}const I=Number(c);if(isNaN(I)){k("Please enter a valid number!");return}L(),B();try{const R=await(await fetch("/api/treap/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:I})})).json();if(R.error){k(R.error);return}t(R.tree),s(R.size||0),a(R.height!==void 0?R.height:-1),k(`Deleted ${I}`),d("")}catch{k("Error deleting node")}},_=async()=>{if(!u.trim()){k("Please enter a number!");return}const I=Number(u);if(isNaN(I)){k("Please enter a valid number!");return}if(!n){k("Tree is empty!");return}B(),v(!0);const $=dN(n,I);for(let R=0;R<$.length;R++)y($.slice(0,R+1)),await new Promise(w=>setTimeout(w,500));try{const w=await(await fetch(`/api/treap/search?value=${I}`)).json();f(w.found),w.found?k(`Found ${I}!`):k(`${I} not found in treap`)}catch{k("Error searching")}v(!1),h("")},z=async()=>{try{await fetch("/api/treap/clear",{method:"POST"}),t(null),s(0),a(-1),B(),L(),k("Treap cleared!")}catch{k("Error clearing tree")}},F=async I=>{if(!n){k("Tree is empty! Insert some nodes first.");return}L(),v(!0),x([]),S(null),M([]),q(I),O(!1);try{const w=(await(await fetch(`/api/treap/${I}`)).json()).traversal||[];if(w.length===0){k("Tree is empty!"),v(!1);return}for(let Y=0;Y<w.length;Y++)S(w[Y]),await new Promise(ee=>setTimeout(ee,600)),M(ee=>[...ee,w[Y]]),x(ee=>[...ee,w[Y]]),await new Promise(ee=>setTimeout(ee,200));S(null),O(!0),v(!1);const H=I.charAt(0).toUpperCase()+I.slice(1);k(`${H} traversal complete!${I==="inorder"?" (Sorted!)":""}`)}catch($){console.error("Traversal error:",$),k("Error performing traversal"),v(!1)}},B=()=>{x([]),S(null),M([]),q(null),O(!1)};return e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"intro-layout",children:[e.jsx("div",{className:"intro-left",children:e.jsx(Ar,{dataStructure:"treap"})}),e.jsx(be,{context:"Treap data structure, combining BST and heap properties, random priorities, rotations, insert, delete, search operations"})]}),e.jsxs("div",{className:"visualizer-layout",children:[e.jsx(hN,{insertValue:l,deleteValue:c,searchValue:u,size:r,height:i,message:g,tree:n,isAnimating:C,visitedNodes:D,searchPath:N,searchResult:j,onInsertValueChange:o,onDeleteValueChange:d,onSearchValueChange:h,onInsert:V,onDelete:T,onSearch:_,onTraversal:F,onClear:z,onResetTraversal:()=>{B(),L()}}),e.jsxs("div",{className:"visual-panel",children:[e.jsx("h2",{children:"Treap Visualization"}),e.jsxs("p",{className:"treap-property-reminder",children:[e.jsx("code",{children:"BST"})," on keys | ",e.jsx("code",{children:"Max-Heap"})," on priorities (p:)"]}),e.jsx("div",{className:"tree-container",children:e.jsx(pN,{tree:n,currentNode:P,visitedNodes:D,searchPath:N,searchResult:j})}),e.jsx(fN,{traversalType:E,traversalResult:m,isAnimating:C,traversalComplete:K})]})]}),e.jsx(Ce,{dataStructure:"treap"})]})}const Et=7;function gN({insertValue:n,buildArray:t,size:r,height:s,min:i,message:a,heap:l,isAnimating:o,onInsertValueChange:c,onBuildArrayChange:d,onInsert:u,onExtract:h,onPeek:g,onBuild:b,onClear:N}){const y=(j,f)=>{const m=j.target.value;(m===""||m==="-"||/^-?\d*\.?\d*$/.test(m))&&f(m)};return e.jsxs("div",{className:"control-panel",children:[e.jsx("h2",{children:"Min Heap"}),e.jsxs("div",{className:"heap-info-box",children:[e.jsx("strong",{children:"Priority Queue:"})," Minimum always at root!"]}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{htmlFor:"insertValue",children:"Insert Value"}),e.jsxs("div",{className:"input-group",children:[e.jsx("input",{type:"number",id:"insertValue",value:n,onChange:j=>y(j,c),onKeyDown:j=>j.key==="Enter"&&u(),placeholder:"Enter a number",disabled:o}),e.jsx("button",{onClick:u,className:"btn btn-insert",disabled:o,children:"Insert"})]})]}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{children:"Heap Operations"}),e.jsxs("div",{className:"btn-group-vertical",children:[e.jsxs("button",{onClick:h,className:"btn btn-extract",disabled:o||l.length===0,children:[e.jsx($x,{size:16})," Extract Min"]}),e.jsx("button",{onClick:g,className:"btn btn-peek",disabled:o||l.length===0,children:"Peek Min"})]})]}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{htmlFor:"buildArray",children:"Build from Array"}),e.jsxs("div",{className:"input-group",children:[e.jsx("input",{type:"text",id:"buildArray",value:t,onChange:j=>d(j.target.value),onKeyDown:j=>j.key==="Enter"&&b(),placeholder:"e.g., 5, 3, 8, 1, 2",disabled:o}),e.jsx("button",{onClick:b,className:"btn btn-build",disabled:o,children:"Build"})]})]}),e.jsxs("div",{className:"traversal-legend",children:[e.jsxs("div",{className:"legend-item",children:[e.jsx("span",{className:"legend-dot",style:{background:"#10b981"}}),e.jsx("span",{children:"Root (Min)"})]}),e.jsxs("div",{className:"legend-item",children:[e.jsx("span",{className:"legend-dot",style:{background:"#6366f1"}}),e.jsx("span",{children:"Internal"})]}),e.jsxs("div",{className:"legend-item",children:[e.jsx("span",{className:"legend-dot",style:{background:"#8b5cf6"}}),e.jsx("span",{children:"Leaf"})]}),e.jsxs("div",{className:"legend-item",children:[e.jsx("span",{className:"legend-dot",style:{background:"#f59e0b"}}),e.jsx("span",{children:"Highlighted"})]})]}),e.jsxs("div",{className:"info-panel",children:[e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Size:"}),e.jsx("span",{className:"info-value",children:r})]}),e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Height:"}),e.jsx("span",{className:"info-value",children:s})]}),e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Min:"}),e.jsx("span",{className:"info-value",children:i??"-"})]})]}),r>=Et*.8&&r<Et&&e.jsxs("div",{className:"warning-box",children:[e.jsx(bn,{size:18}),e.jsxs("div",{children:[e.jsx("strong",{children:"Heap filling up!"})," ",r,"/",Et," elements."]})]}),e.jsx("div",{className:"operation-group",children:e.jsx("button",{onClick:N,className:"btn btn-clear",disabled:o,children:"Clear Heap"})}),a&&e.jsx("div",{className:`message message-${a.includes("Error")||a.includes("error")?"error":/success|complete|Inserted|Extracted|cleared|Built/i.test(a)?"success":a.includes("full")||a.includes("empty")?"warning":"info"}`,children:a})]})}function xN({tree:n,heap:t,highlightedIndex:r,swappingIndices:s}){const i=u=>{const h=r===u,g=s.includes(u),b=u===0;let N="#6366f1",y="none";return h||g?(N="#f59e0b",y="drop-shadow(0 0 12px #f59e0b)"):b&&(N="#10b981",y="drop-shadow(0 0 8px #10b981)"),{color:N,glow:y,radius:h||b?28:25}},a=(u,h=0)=>u?Math.max(a(u.left,h+1),a(u.right,h+1)):h-1,l=(u,h,g,b,N)=>{if(!u)return[];const y=Math.pow(2,N-b)*50,j=i(u.index),f=[];return u.left&&(f.push(e.jsx("line",{x1:h,y1:g,x2:h-y,y2:g+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:2},`l-${u.index}-l`)),f.push(...l(u.left,h-y,g+100,b+1,N))),u.right&&(f.push(e.jsx("line",{x1:h,y1:g,x2:h+y,y2:g+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:2},`l-${u.index}-r`)),f.push(...l(u.right,h+y,g+100,b+1,N))),f.push(e.jsxs("g",{style:{filter:j.glow,transition:"all 0.3s ease"},children:[e.jsx("circle",{cx:h,cy:g,r:j.radius,fill:j.color,stroke:"white",strokeWidth:2}),e.jsx("text",{x:h,y:g,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:14,fontWeight:"bold",children:u.value}),e.jsxs("text",{x:h,y:g+j.radius+12,textAnchor:"middle",fill:"rgba(255,255,255,0.6)",fontSize:10,children:["[",u.index,"]"]})]},`n-${u.index}`)),f};if(!n||t.length===0)return e.jsxs("div",{className:"tree-empty",children:[e.jsx("p",{children:"Min Heap is empty. Insert some values!"}),e.jsx("p",{className:"tree-empty-hint",children:"Try: 5, 3, 8, 1, 2 or build from array"})]});const o=a(n),c=(o+1)*100+80,d=Math.max(600,Math.pow(2,Math.max(o,1))*70);return e.jsx("svg",{width:d,height:c,className:"tree-svg",children:l(n,d/2,50,0,o)})}function vN({heap:n,highlightedIndex:t,swappingIndices:r}){return n.length===0?e.jsx("div",{className:"heap-array-empty",children:e.jsx("code",{children:"[ ]"})}):e.jsxs("div",{className:"heap-array-container",children:[e.jsx("div",{className:"heap-array",children:n.map((s,i)=>{const a=t===i,l=r.includes(i),o=i===0;return e.jsxs("div",{className:`heap-array-cell ${a||l?"highlighted":""} ${o?"root":""}`,children:[e.jsx("span",{className:"heap-array-index",children:i}),e.jsx("span",{className:"heap-array-value",children:s})]},i)})}),e.jsxs("div",{className:"heap-array-formulas",children:[e.jsxs("div",{className:"formula-item",children:[e.jsx("strong",{children:"Parent(i):"})," ",e.jsx("code",{children:"(i - 1) / 2"})]}),e.jsxs("div",{className:"formula-item",children:[e.jsx("strong",{children:"Left(i):"})," ",e.jsx("code",{children:"2*i + 1"})]}),e.jsxs("div",{className:"formula-item",children:[e.jsx("strong",{children:"Right(i):"})," ",e.jsx("code",{children:"2*i + 2"})]})]})]})}function yN(){const[n,t]=p.useState([]),[r,s]=p.useState(null),[i,a]=p.useState(0),[l,o]=p.useState(-1),[c,d]=p.useState(null),[u,h]=p.useState(""),[g,b]=p.useState(""),[N,y]=p.useState(""),[j,f]=p.useState(!1),[m,x]=p.useState(null),[C,v]=p.useState([]);p.useEffect(()=>{P()},[]);const P=async()=>{try{const A=await(await fetch("/api/minheap")).json();t(A.heap||[]),s(A.tree),a(A.size||0),o(A.height!==void 0?A.height:-1),d(A.min)}catch(O){console.error("Error loading Min Heap:",O)}},S=O=>{y(O),setTimeout(()=>y(""),3e3)},D=async()=>{if(!u.trim()){S("Please enter a number!");return}const O=Number(u);if(isNaN(O)){S("Please enter a valid number!");return}if(i>=Et){S(`Heap is full! Maximum size is ${Et}.`);return}f(!0);try{const k=await(await fetch("/api/minheap/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:O})})).json();if(k.error){S(k.error),f(!1);return}t(k.heap||[]),s(k.tree),a(k.size||0),o(k.height!==void 0?k.height:-1),d(k.min),S(`Inserted ${O}`),h("")}catch{S("Error inserting element")}f(!1)},M=async()=>{if(i===0){S("Heap is empty!");return}f(!0),x(0),await new Promise(O=>setTimeout(O,500));try{const A=await(await fetch("/api/minheap/extract",{method:"POST"})).json();if(A.error){S(A.error),f(!1),x(null);return}t(A.heap||[]),s(A.tree),a(A.size||0),o(A.height!==void 0?A.height:-1),d(A.min),S(`Extracted minimum: ${A.extracted}`)}catch{S("Error extracting minimum")}x(null),f(!1)},E=async()=>{if(i===0){S("Heap is empty!");return}x(0),S(`Minimum element is ${c}`),await new Promise(O=>setTimeout(O,1500)),x(null)},q=async()=>{if(!g.trim()){S("Please enter an array of numbers!");return}const O=g.split(",").map(A=>{const k=Number(A.trim());return isNaN(k)?null:k}).filter(A=>A!==null);if(O.length===0){S("Please enter valid numbers separated by commas!");return}if(O.length>Et){S(`Array too large! Maximum size is ${Et}.`);return}f(!0);try{const k=await(await fetch("/api/minheap/build",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({array:O})})).json();if(k.error){S(k.error),f(!1);return}t(k.heap||[]),s(k.tree),a(k.size||0),o(k.height!==void 0?k.height:-1),d(k.min),S("Built heap from array!"),b("")}catch{S("Error building heap")}f(!1)},K=async()=>{try{await fetch("/api/minheap/clear",{method:"POST"}),t([]),s(null),a(0),o(-1),d(null),x(null),v([]),S("Heap cleared!")}catch{S("Error clearing heap")}};return e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"intro-layout",children:[e.jsx("div",{className:"intro-left",children:e.jsx(Ar,{dataStructure:"minheap"})}),e.jsx(be,{context:"Min Heap data structure, priority queue, heapify operations, O(log n) insert and extract, O(1) peek minimum"})]}),e.jsxs("div",{className:"visualizer-layout",children:[e.jsx(gN,{insertValue:u,buildArray:g,size:i,height:l,min:c,message:N,heap:n,isAnimating:j,onInsertValueChange:h,onBuildArrayChange:b,onInsert:D,onExtract:M,onPeek:E,onBuild:q,onClear:K}),e.jsxs("div",{className:"visual-panel",children:[e.jsx("h2",{children:"Min Heap Visualization"}),e.jsxs("p",{className:"bst-property-reminder",children:["Heap Property: ",e.jsx("code",{children:"Parent <= Children"})," (Min at root)"]}),e.jsxs("div",{className:"heap-tree-section",children:[e.jsx("h3",{children:"Tree View"}),e.jsx("div",{className:"tree-container",children:e.jsx(xN,{tree:r,heap:n,highlightedIndex:m,swappingIndices:C})})]}),e.jsxs("div",{className:"heap-array-section",children:[e.jsx("h3",{children:"Array Representation"}),e.jsx(vN,{heap:n,highlightedIndex:m,swappingIndices:C})]})]})]}),e.jsx(Ce,{dataStructure:"minheap"})]})}const Ot=7;function jN({insertValue:n,buildArray:t,size:r,height:s,max:i,message:a,heap:l,isAnimating:o,onInsertValueChange:c,onBuildArrayChange:d,onInsert:u,onExtract:h,onPeek:g,onBuild:b,onClear:N}){const y=(j,f)=>{const m=j.target.value;(m===""||m==="-"||/^-?\d*\.?\d*$/.test(m))&&f(m)};return e.jsxs("div",{className:"control-panel",children:[e.jsx("h2",{children:"Max Heap"}),e.jsxs("div",{className:"heap-info-box max-heap",children:[e.jsx("strong",{children:"Priority Queue:"})," Maximum always at root!"]}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{htmlFor:"insertValue",children:"Insert Value"}),e.jsxs("div",{className:"input-group",children:[e.jsx("input",{type:"number",id:"insertValue",value:n,onChange:j=>y(j,c),onKeyDown:j=>j.key==="Enter"&&u(),placeholder:"Enter a number",disabled:o}),e.jsx("button",{onClick:u,className:"btn btn-insert",disabled:o,children:"Insert"})]})]}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{children:"Heap Operations"}),e.jsxs("div",{className:"btn-group-vertical",children:[e.jsxs("button",{onClick:h,className:"btn btn-extract-max",disabled:o||l.length===0,children:[e.jsx(qx,{size:16})," Extract Max"]}),e.jsx("button",{onClick:g,className:"btn btn-peek",disabled:o||l.length===0,children:"Peek Max"})]})]}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{htmlFor:"buildArray",children:"Build from Array"}),e.jsxs("div",{className:"input-group",children:[e.jsx("input",{type:"text",id:"buildArray",value:t,onChange:j=>d(j.target.value),onKeyDown:j=>j.key==="Enter"&&b(),placeholder:"e.g., 5, 3, 8, 1, 2",disabled:o}),e.jsx("button",{onClick:b,className:"btn btn-build",disabled:o,children:"Build"})]})]}),e.jsxs("div",{className:"traversal-legend",children:[e.jsxs("div",{className:"legend-item",children:[e.jsx("span",{className:"legend-dot",style:{background:"#ef4444"}}),e.jsx("span",{children:"Root (Max)"})]}),e.jsxs("div",{className:"legend-item",children:[e.jsx("span",{className:"legend-dot",style:{background:"#6366f1"}}),e.jsx("span",{children:"Internal"})]}),e.jsxs("div",{className:"legend-item",children:[e.jsx("span",{className:"legend-dot",style:{background:"#8b5cf6"}}),e.jsx("span",{children:"Leaf"})]}),e.jsxs("div",{className:"legend-item",children:[e.jsx("span",{className:"legend-dot",style:{background:"#f59e0b"}}),e.jsx("span",{children:"Highlighted"})]})]}),e.jsxs("div",{className:"info-panel",children:[e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Size:"}),e.jsx("span",{className:"info-value",children:r})]}),e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Height:"}),e.jsx("span",{className:"info-value",children:s})]}),e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Max:"}),e.jsx("span",{className:"info-value",children:i??"-"})]})]}),r>=Ot*.8&&r<Ot&&e.jsxs("div",{className:"warning-box",children:[e.jsx(bn,{size:18}),e.jsxs("div",{children:[e.jsx("strong",{children:"Heap filling up!"})," ",r,"/",Ot," elements."]})]}),e.jsx("div",{className:"operation-group",children:e.jsx("button",{onClick:N,className:"btn btn-clear",disabled:o,children:"Clear Heap"})}),a&&e.jsx("div",{className:`message message-${a.includes("Error")||a.includes("error")?"error":/success|complete|Inserted|Extracted|cleared|Built/i.test(a)?"success":a.includes("full")||a.includes("empty")?"warning":"info"}`,children:a})]})}function NN({tree:n,heap:t,highlightedIndex:r,swappingIndices:s}){const i=u=>{const h=r===u,g=s.includes(u),b=u===0;let N="#6366f1",y="none";return h||g?(N="#f59e0b",y="drop-shadow(0 0 12px #f59e0b)"):b&&(N="#ef4444",y="drop-shadow(0 0 8px #ef4444)"),{color:N,glow:y,radius:h||b?28:25}},a=(u,h=0)=>u?Math.max(a(u.left,h+1),a(u.right,h+1)):h-1,l=(u,h,g,b,N)=>{if(!u)return[];const y=Math.pow(2,N-b)*50,j=i(u.index),f=[];return u.left&&(f.push(e.jsx("line",{x1:h,y1:g,x2:h-y,y2:g+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:2},`l-${u.index}-l`)),f.push(...l(u.left,h-y,g+100,b+1,N))),u.right&&(f.push(e.jsx("line",{x1:h,y1:g,x2:h+y,y2:g+100,stroke:"rgba(255,255,255,0.3)",strokeWidth:2},`l-${u.index}-r`)),f.push(...l(u.right,h+y,g+100,b+1,N))),f.push(e.jsxs("g",{style:{filter:j.glow,transition:"all 0.3s ease"},children:[e.jsx("circle",{cx:h,cy:g,r:j.radius,fill:j.color,stroke:"white",strokeWidth:2}),e.jsx("text",{x:h,y:g,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:14,fontWeight:"bold",children:u.value}),e.jsxs("text",{x:h,y:g+j.radius+12,textAnchor:"middle",fill:"rgba(255,255,255,0.6)",fontSize:10,children:["[",u.index,"]"]})]},`n-${u.index}`)),f};if(!n||t.length===0)return e.jsxs("div",{className:"tree-empty",children:[e.jsx("p",{children:"Max Heap is empty. Insert some values!"}),e.jsx("p",{className:"tree-empty-hint",children:"Try: 5, 3, 8, 1, 9 or build from array"})]});const o=a(n),c=(o+1)*100+80,d=Math.max(600,Math.pow(2,Math.max(o,1))*70);return e.jsx("svg",{width:d,height:c,className:"tree-svg",children:l(n,d/2,50,0,o)})}function bN({heap:n,highlightedIndex:t,swappingIndices:r}){return n.length===0?e.jsx("div",{className:"heap-array-empty",children:e.jsx("code",{children:"[ ]"})}):e.jsxs("div",{className:"heap-array-container",children:[e.jsx("div",{className:"heap-array",children:n.map((s,i)=>{const a=t===i,l=r.includes(i),o=i===0;return e.jsxs("div",{className:`heap-array-cell ${a||l?"highlighted":""} ${o?"root-max":""}`,children:[e.jsx("span",{className:"heap-array-index",children:i}),e.jsx("span",{className:"heap-array-value",children:s})]},i)})}),e.jsxs("div",{className:"heap-array-formulas",children:[e.jsxs("div",{className:"formula-item",children:[e.jsx("strong",{children:"Parent(i):"})," ",e.jsx("code",{children:"(i - 1) / 2"})]}),e.jsxs("div",{className:"formula-item",children:[e.jsx("strong",{children:"Left(i):"})," ",e.jsx("code",{children:"2*i + 1"})]}),e.jsxs("div",{className:"formula-item",children:[e.jsx("strong",{children:"Right(i):"})," ",e.jsx("code",{children:"2*i + 2"})]})]})]})}function kN(){const[n,t]=p.useState([]),[r,s]=p.useState(null),[i,a]=p.useState(0),[l,o]=p.useState(-1),[c,d]=p.useState(null),[u,h]=p.useState(""),[g,b]=p.useState(""),[N,y]=p.useState(""),[j,f]=p.useState(!1),[m,x]=p.useState(null),[C,v]=p.useState([]);p.useEffect(()=>{P()},[]);const P=async()=>{try{const A=await(await fetch("/api/maxheap")).json();t(A.heap||[]),s(A.tree),a(A.size||0),o(A.height!==void 0?A.height:-1),d(A.max)}catch(O){console.error("Error loading Max Heap:",O)}},S=O=>{y(O),setTimeout(()=>y(""),3e3)},D=async()=>{if(!u.trim()){S("Please enter a number!");return}const O=Number(u);if(isNaN(O)){S("Please enter a valid number!");return}if(i>=Ot){S(`Heap is full! Maximum size is ${Ot}.`);return}f(!0);try{const k=await(await fetch("/api/maxheap/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:O})})).json();if(k.error){S(k.error),f(!1);return}t(k.heap||[]),s(k.tree),a(k.size||0),o(k.height!==void 0?k.height:-1),d(k.max),S(`Inserted ${O}`),h("")}catch{S("Error inserting element")}f(!1)},M=async()=>{if(i===0){S("Heap is empty!");return}f(!0),x(0),await new Promise(O=>setTimeout(O,500));try{const A=await(await fetch("/api/maxheap/extract",{method:"POST"})).json();if(A.error){S(A.error),f(!1),x(null);return}t(A.heap||[]),s(A.tree),a(A.size||0),o(A.height!==void 0?A.height:-1),d(A.max),S(`Extracted maximum: ${A.extracted}`)}catch{S("Error extracting maximum")}x(null),f(!1)},E=async()=>{if(i===0){S("Heap is empty!");return}x(0),S(`Maximum element is ${c}`),await new Promise(O=>setTimeout(O,1500)),x(null)},q=async()=>{if(!g.trim()){S("Please enter an array of numbers!");return}const O=g.split(",").map(A=>{const k=Number(A.trim());return isNaN(k)?null:k}).filter(A=>A!==null);if(O.length===0){S("Please enter valid numbers separated by commas!");return}if(O.length>Ot){S(`Array too large! Maximum size is ${Ot}.`);return}f(!0);try{const k=await(await fetch("/api/maxheap/build",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({array:O})})).json();if(k.error){S(k.error),f(!1);return}t(k.heap||[]),s(k.tree),a(k.size||0),o(k.height!==void 0?k.height:-1),d(k.max),S("Built heap from array!"),b("")}catch{S("Error building heap")}f(!1)},K=async()=>{try{await fetch("/api/maxheap/clear",{method:"POST"}),t([]),s(null),a(0),o(-1),d(null),x(null),v([]),S("Heap cleared!")}catch{S("Error clearing heap")}};return e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"intro-layout",children:[e.jsx("div",{className:"intro-left",children:e.jsx(Ar,{dataStructure:"maxheap"})}),e.jsx(be,{context:"Max Heap data structure, priority queue, heapify operations, O(log n) insert and extract, O(1) peek maximum, heap sort"})]}),e.jsxs("div",{className:"visualizer-layout",children:[e.jsx(jN,{insertValue:u,buildArray:g,size:i,height:l,max:c,message:N,heap:n,isAnimating:j,onInsertValueChange:h,onBuildArrayChange:b,onInsert:D,onExtract:M,onPeek:E,onBuild:q,onClear:K}),e.jsxs("div",{className:"visual-panel",children:[e.jsx("h2",{children:"Max Heap Visualization"}),e.jsxs("p",{className:"bst-property-reminder",children:["Heap Property: ",e.jsx("code",{children:"Parent >= Children"})," (Max at root)"]}),e.jsxs("div",{className:"heap-tree-section",children:[e.jsx("h3",{children:"Tree View"}),e.jsx("div",{className:"tree-container",children:e.jsx(NN,{tree:r,heap:n,highlightedIndex:m,swappingIndices:C})})]}),e.jsxs("div",{className:"heap-array-section",children:[e.jsx("h3",{children:"Array Representation"}),e.jsx(bN,{heap:n,highlightedIndex:m,swappingIndices:C})]})]})]}),e.jsx(Ce,{dataStructure:"maxheap"})]})}function wN(){const[n,t]=p.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=p.useState(""),[i,a]=p.useState(""),[l,o]=p.useState(""),[c,d]=p.useState("1"),[u,h]=p.useState(null),[g,b]=p.useState(null),[N,y]=p.useState(null),[j,f]=p.useState({}),{message:m,showMessage:x}=Ge(3e3);p.useEffect(()=>{v()},[]),p.useEffect(()=>{n.vertices.length>0&&C()},[n.vertices]),p.useEffect(()=>{if(u||g){const k=setTimeout(()=>{h(null),b(null),y(null)},2e3);return()=>clearTimeout(k)}},[u,g]);const C=p.useCallback(()=>{const _=Math.min(450,300)*.38,z={},F=n.vertices.length;n.vertices.forEach((B,I)=>{const $=2*Math.PI*I/F-Math.PI/2;z[B]={x:225+_*Math.cos($),y:150+_*Math.sin($)}}),f(z)},[n.vertices]),v=async()=>{try{const k=await fe("/api/graph");t(k)}catch(k){console.error("Error loading graph:",k)}},P=async()=>{if(!r.trim()){x("Please enter a vertex name!","error");return}try{const k=await se("/api/graph/vertex",{vertex:r.trim()});if(k.error){x(k.error,"error");return}t(k),h(r.trim().toUpperCase()),y("add-vertex"),x(`Added vertex '${r}' - Created new entry in adjacency list`,"success"),s("")}catch{x("Error adding vertex","error")}},S=async k=>{try{const L=await Wi(`/api/graph/vertex/${k}`);if(L.error){x(L.error,"error");return}t(L),x(`Removed vertex '${k}' - Deleted from list and all references`,"success")}catch{x("Error removing vertex","error")}},D=async()=>{if(!i.trim()||!l.trim()){x("Please select both vertices!","error");return}const k=parseInt(c)||1;try{const L=await se("/api/graph/edge",{from:i.trim(),to:l.trim(),weight:k});if(L.error){x(L.error,"error");return}t(L),b({from:i,to:l}),y("add-edge"),x(`Added edge ${i}→${l} (weight: ${k}) - Appended to ${i}'s neighbor list`,"success"),a(""),o(""),d("1")}catch{x("Error adding edge","error")}},M=async()=>{if(!i.trim()||!l.trim()){x("Please select both vertices!","error");return}try{const k=await Wi("/api/graph/edge",{from:i.trim(),to:l.trim()});if(k.error){x(k.error,"error");return}t(k),x(`Removed edge ${i}→${l} - Removed from neighbor lists`,"success"),a(""),o("")}catch{x("Error removing edge","error")}},E=async k=>{try{const L=await se(`/api/graph/preset/${k}`,{});if(L.error){x(L.error,"error");return}t(L),x(`Loaded '${k}' graph preset`,"success")}catch{x("Error loading preset","error")}},q=async()=>{try{const k=await se("/api/graph/clear",{});t(k),x("Graph cleared","success")}catch{x("Error clearing graph","error")}},K=(k,L)=>{k.key==="Enter"&&L()},O=k=>u===k&&N==="add-vertex"?"graph-node highlighted-new":g&&(g.from===k||g.to===k)?"graph-node highlighted-edge":"graph-node",A=(k,L)=>g&&(g.from===k&&g.to===L||g.from===L&&g.to===k)?"graph-edge highlighted":"graph-edge";return e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"intro-layout",children:[e.jsxs("div",{className:"concept-box",children:[e.jsxs("div",{className:"concept-header",children:[e.jsx(Fe,{className:"icon-sm"}),e.jsx("span",{children:"What is an Adjacency List?"})]}),e.jsxs("div",{className:"concept-content",children:[e.jsxs("p",{children:["An ",e.jsx("strong",{children:"Adjacency List"})," represents a graph using a collection of lists. Each vertex stores a list of its neighboring vertices."]}),e.jsxs("div",{className:"concept-analogy",children:[e.jsx(ye,{}),e.jsx("span",{children:"Like a contact list - each person has their own list of friends they're connected to!"})]}),e.jsxs("div",{className:"concept-operations",children:[e.jsxs("div",{className:"op-item",children:[e.jsx("span",{className:"op-name",children:"Add Vertex"}),e.jsx("span",{className:"op-desc",children:"Create new list"}),e.jsx("span",{className:"op-complexity",children:"O(1)"})]}),e.jsxs("div",{className:"op-item",children:[e.jsx("span",{className:"op-name",children:"Add Edge"}),e.jsx("span",{className:"op-desc",children:"Append to list"}),e.jsx("span",{className:"op-complexity",children:"O(1)"})]}),e.jsxs("div",{className:"op-item",children:[e.jsx("span",{className:"op-name",children:"Remove Edge"}),e.jsx("span",{className:"op-desc",children:"Search & delete"}),e.jsx("span",{className:"op-complexity",children:"O(E)"})]}),e.jsxs("div",{className:"op-item",children:[e.jsx("span",{className:"op-name",children:"Find Neighbors"}),e.jsx("span",{className:"op-desc",children:"Return list"}),e.jsx("span",{className:"op-complexity",children:"O(1)"})]})]}),e.jsxs("div",{className:"concept-uses",children:[e.jsx("strong",{children:"Why Adjacency List?"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Space efficient for sparse graphs: O(V + E)"}),e.jsx("li",{children:"Fast iteration over neighbors"}),e.jsx("li",{children:"Easy to add vertices and edges"}),e.jsx("li",{children:"Supports weighted edges naturally"})]})]})]})]}),e.jsx(be,{context:"Adjacency List graph representation, graph data structure"})]}),e.jsxs("div",{className:"visualizer-layout",children:[e.jsxs("div",{className:"control-panel",children:[e.jsx("h2",{children:"Operations"}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{children:"Load Preset"}),e.jsxs("div",{className:"btn-group preset-group",children:[e.jsx("button",{onClick:()=>E("simple"),className:"btn btn-preset",children:"Simple"}),e.jsx("button",{onClick:()=>E("tree"),className:"btn btn-preset",children:"Tree"}),e.jsx("button",{onClick:()=>E("cyclic"),className:"btn btn-preset",children:"Cyclic"})]})]}),e.jsxs("div",{className:"operation-group",children:[e.jsxs("label",{htmlFor:"vertexInput",children:[e.jsx(Ui,{size:14})," Add Vertex"]}),e.jsxs("div",{className:"input-group",children:[e.jsx("input",{type:"text",id:"vertexInput",value:r,onChange:k=>s(k.target.value.toUpperCase()),onKeyPress:k=>K(k,P),placeholder:"Name (e.g., A)",maxLength:3}),e.jsx("button",{onClick:P,className:"btn btn-add",children:"Add"})]}),e.jsx("span",{className:"operation-hint",children:"Creates a new empty list entry"})]}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{children:"Add/Remove Edge (with Weight)"}),e.jsxs("div",{className:"edge-inputs",children:[e.jsxs("select",{value:i,onChange:k=>a(k.target.value),className:"vertex-select",children:[e.jsx("option",{value:"",children:"From"}),n.vertices.map(k=>e.jsx("option",{value:k,children:k},k))]}),e.jsx("span",{className:"edge-arrow",children:"→"}),e.jsxs("select",{value:l,onChange:k=>o(k.target.value),className:"vertex-select",children:[e.jsx("option",{value:"",children:"To"}),n.vertices.map(k=>e.jsx("option",{value:k,children:k},k))]})]}),e.jsxs("div",{className:"weight-input",children:[e.jsx("label",{htmlFor:"weightInput",children:"Weight:"}),e.jsx("input",{type:"number",id:"weightInput",value:c,onChange:k=>d(k.target.value),min:"1",max:"99",className:"weight-field"})]}),e.jsxs("div",{className:"btn-group",children:[e.jsxs("button",{onClick:D,className:"btn btn-add",children:[e.jsx(Ui,{size:14})," Add Edge"]}),e.jsxs("button",{onClick:M,className:"btn btn-remove",children:[e.jsx(no,{size:14})," Remove"]})]}),e.jsx("span",{className:"operation-hint",children:"Appends neighbor to the vertex's list"})]}),e.jsx("div",{className:"operation-group",children:e.jsx("button",{onClick:q,className:"btn btn-clear full-width",children:"Clear Graph"})}),e.jsxs("div",{className:"info-panel",children:[e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Vertices (V):"}),e.jsx("span",{className:"info-value",children:n.vertex_count||0})]}),e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Edges (E):"}),e.jsx("span",{className:"info-value",children:n.edge_count||0})]}),e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Space:"}),e.jsx("span",{className:"info-value",children:"O(V + E)"})]})]}),e.jsx(Ke,{message:m})]}),e.jsxs("div",{className:"visual-panel",children:[e.jsx("h2",{children:"Graph View"}),e.jsx("div",{className:"graph-container",children:n.vertices.length===0?e.jsx("div",{className:"graph-empty",children:"Graph is empty. Add vertices or load a preset!"}):e.jsxs("svg",{className:"graph-svg",viewBox:"0 0 450 300",children:[n.edges.map(([k,L,V],T)=>{const _=j[k],z=j[L];if(!_||!z)return null;const F=(_.x+z.x)/2,B=(_.y+z.y)/2;return e.jsxs("g",{children:[e.jsx("line",{x1:_.x,y1:_.y,x2:z.x,y2:z.y,className:A(k,L)}),e.jsx("circle",{cx:F,cy:B,r:12,className:"weight-bg"}),e.jsx("text",{x:F,y:B,className:"weight-label",dominantBaseline:"central",textAnchor:"middle",children:V})]},`edge-${T}`)}),n.vertices.map(k=>{const L=j[k];return L?e.jsxs("g",{className:O(k),children:[e.jsx("circle",{cx:L.x,cy:L.y,r:22,className:"node-circle"}),e.jsx("text",{x:L.x,y:L.y,className:"node-label",dominantBaseline:"central",textAnchor:"middle",children:k})]},k):null})]})}),e.jsxs("div",{className:"adjacency-list-section",children:[e.jsx("h3",{children:"Behind the Scenes: Adjacency List Structure"}),e.jsx("p",{className:"adj-explanation",children:"Each vertex has its own linked list of neighbors. When you add an edge A→B, we append B to A's list (and A to B's list for undirected graphs)."}),e.jsx("div",{className:"adj-list-visual",children:n.vertices.length===0?e.jsx("div",{className:"adj-empty",children:"No vertices in graph"}):n.vertices.map(k=>{const L=n.adjacency_list[k]||[],V=u===k||g&&(g.from===k||g.to===k);return e.jsxs("div",{className:`adj-row-visual ${V?"highlighted":""}`,children:[e.jsx("div",{className:"adj-vertex-box",children:e.jsx("span",{className:"adj-vertex-label",children:k})}),e.jsx("div",{className:"adj-pointer",children:e.jsx(me,{size:16})}),e.jsxs("div",{className:"adj-linked-list",children:[L.length===0?e.jsx("div",{className:"adj-null",children:"null"}):L.map(([T,_],z)=>{const F=g&&g.from===k&&g.to===T;return e.jsxs(_e.Fragment,{children:[e.jsxs("div",{className:`adj-neighbor-node ${F?"highlighted":""}`,children:[e.jsx("span",{className:"neighbor-vertex",children:T}),e.jsxs("span",{className:"neighbor-weight",children:["w:",_]})]}),z<L.length-1&&e.jsx("div",{className:"adj-link",children:e.jsx(me,{size:14})})]},`${k}-${T}`)}),L.length>0&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"adj-link",children:e.jsx(me,{size:14})}),e.jsx("div",{className:"adj-null",children:"null"})]})]}),e.jsx("button",{className:"adj-remove-btn",onClick:()=>S(k),title:`Remove vertex ${k}`,children:e.jsx(no,{size:14})})]},k)})}),e.jsxs("div",{className:"memory-hint",children:[e.jsx("strong",{children:"Memory Layout:"})," An array/hashmap stores vertex references, each pointing to the head of a linked list containing (neighbor, weight) pairs."]})]})]})]}),e.jsx(Ce,{dataStructure:"graph"})]})}function SN(){const[n,t]=p.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=p.useState([]),[i,a]=p.useState([]),[l,o]=p.useState(""),[c,d]=p.useState(""),[u,h]=p.useState(""),[g,b]=p.useState("1"),[N,y]=p.useState(null),[j,f]=p.useState(null),[m,x]=p.useState({}),{message:C,showMessage:v}=Ge(3e3);p.useEffect(()=>{S()},[]),p.useEffect(()=>{n.vertices.length>0?(D(),P()):(s([]),a([]))},[n]),p.useEffect(()=>{if(N){const T=setTimeout(()=>{y(null)},2e3);return()=>clearTimeout(T)}},[N]);const P=p.useCallback(()=>{const B=Math.min(350,250)*.38,I={},$=n.vertices.length;n.vertices.forEach((R,w)=>{const H=2*Math.PI*w/$-Math.PI/2;I[R]={x:175+B*Math.cos(H),y:125+B*Math.sin(H)}}),x(I)},[n.vertices]),S=async()=>{try{const T=await fe("/api/graph");t(T)}catch(T){console.error("Error loading graph:",T)}},D=async()=>{try{const T=await fe("/api/graph/matrix");s(T.matrix),a(T.vertices)}catch(T){console.error("Error loading matrix:",T)}},M=async()=>{if(!l.trim()){v("Please enter a vertex name!","error");return}try{const T=await se("/api/graph/vertex",{vertex:l.trim()});if(T.error){v(T.error,"error");return}t(T),v(`Added vertex '${l}' - Added new row and column to matrix`,"success"),o("")}catch{v("Error adding vertex","error")}},E=async T=>{try{const _=await Wi(`/api/graph/vertex/${T}`);if(_.error){v(_.error,"error");return}t(_),v(`Removed vertex '${T}' - Removed row and column from matrix`,"success")}catch{v("Error removing vertex","error")}},q=async()=>{if(!c.trim()||!u.trim()){v("Please select both vertices!","error");return}const T=parseInt(g)||1;try{const _=await se("/api/graph/edge",{from:c.trim(),to:u.trim(),weight:T});if(_.error){v(_.error,"error");return}t(_);const z=i.indexOf(c),F=i.indexOf(u);y({row:z,col:F}),v(`Added edge: matrix[${c}][${u}] = ${T}`,"success"),d(""),h(""),b("1")}catch{v("Error adding edge","error")}},K=async()=>{if(!c.trim()||!u.trim()){v("Please select both vertices!","error");return}try{const T=await Wi("/api/graph/edge",{from:c.trim(),to:u.trim()});if(T.error){v(T.error,"error");return}t(T),v(`Removed edge: matrix[${c}][${u}] = 0`,"success"),d(""),h("")}catch{v("Error removing edge","error")}},O=()=>{var B;if(!c.trim()||!u.trim()){v("Please select both vertices to check!","error");return}const T=i.indexOf(c),_=i.indexOf(u);if(T===-1||_===-1){v("Vertex not found!","error");return}const z=((B=r[T])==null?void 0:B[_])||0,F=z>0;y({row:T,col:_}),f({from:c,to:u,exists:F,weight:z}),v(F?`Edge exists! matrix[${c}][${u}] = ${z} (O(1) lookup)`:`No edge: matrix[${c}][${u}] = 0 (O(1) lookup)`,F?"success":"info")},A=async T=>{try{const _=await se(`/api/graph/preset/${T}`,{});if(_.error){v(_.error,"error");return}t(_),f(null),v(`Loaded '${T}' graph preset`,"success")}catch{v("Error loading preset","error")}},k=async()=>{try{const T=await se("/api/graph/clear",{});t(T),s([]),a([]),f(null),v("Graph cleared","success")}catch{v("Error clearing graph","error")}},L=(T,_)=>{T.key==="Enter"&&_()},V=(T,_,z)=>{let F="matrix-cell";return N&&N.row===T&&N.col===_&&(F+=" highlighted"),N&&N.row===_&&N.col===T&&(F+=" highlighted"),z>0&&(F+=" has-edge"),T===_&&(F+=" diagonal"),F};return e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"intro-layout",children:[e.jsxs("div",{className:"concept-box",children:[e.jsxs("div",{className:"concept-header",children:[e.jsx(Fe,{className:"icon-sm"}),e.jsx("span",{children:"What is an Adjacency Matrix?"})]}),e.jsxs("div",{className:"concept-content",children:[e.jsxs("p",{children:["An ",e.jsx("strong",{children:"Adjacency Matrix"})," is a 2D array where ",e.jsx("code",{children:"matrix[i][j]"})," represents the edge weight between vertex i and j (0 if no edge)."]}),e.jsxs("div",{className:"concept-analogy",children:[e.jsx(ye,{}),e.jsx("span",{children:"Like a spreadsheet where rows and columns are people, and cells show if they're friends!"})]}),e.jsxs("div",{className:"concept-operations",children:[e.jsxs("div",{className:"op-item",children:[e.jsx("span",{className:"op-name",children:"Check Edge"}),e.jsx("span",{className:"op-desc",children:"Direct lookup"}),e.jsx("span",{className:"op-complexity",children:"O(1)"})]}),e.jsxs("div",{className:"op-item",children:[e.jsx("span",{className:"op-name",children:"Add Edge"}),e.jsx("span",{className:"op-desc",children:"Set cell value"}),e.jsx("span",{className:"op-complexity",children:"O(1)"})]}),e.jsxs("div",{className:"op-item",children:[e.jsx("span",{className:"op-name",children:"Add Vertex"}),e.jsx("span",{className:"op-desc",children:"Resize matrix"}),e.jsx("span",{className:"op-complexity",children:"O(V²)"})]}),e.jsxs("div",{className:"op-item",children:[e.jsx("span",{className:"op-name",children:"Space"}),e.jsx("span",{className:"op-desc",children:"2D array"}),e.jsx("span",{className:"op-complexity",children:"O(V²)"})]})]}),e.jsxs("div",{className:"concept-uses",children:[e.jsx("strong",{children:"When to Use:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Dense graphs (many edges)"}),e.jsx("li",{children:"Fast edge existence checks needed"}),e.jsx("li",{children:"Small number of vertices"}),e.jsx("li",{children:"Frequent edge weight updates"})]})]})]})]}),e.jsx(be,{context:"Adjacency Matrix graph representation"})]}),e.jsxs("div",{className:"visualizer-layout",children:[e.jsxs("div",{className:"control-panel",children:[e.jsx("h2",{children:"Operations"}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{children:"Load Preset"}),e.jsxs("div",{className:"btn-group preset-group",children:[e.jsx("button",{onClick:()=>A("simple"),className:"btn btn-preset",children:"Simple"}),e.jsx("button",{onClick:()=>A("complete"),className:"btn btn-preset",children:"Complete"}),e.jsx("button",{onClick:()=>A("cyclic"),className:"btn btn-preset",children:"Cyclic"})]})]}),e.jsxs("div",{className:"operation-group",children:[e.jsxs("label",{htmlFor:"vertexInput",children:[e.jsx(Ui,{size:14})," Add Vertex"]}),e.jsxs("div",{className:"input-group",children:[e.jsx("input",{type:"text",id:"vertexInput",value:l,onChange:T=>o(T.target.value.toUpperCase()),onKeyPress:T=>L(T,M),placeholder:"Name (e.g., A)",maxLength:3}),e.jsx("button",{onClick:M,className:"btn btn-add",children:"Add"})]}),e.jsx("span",{className:"operation-hint",children:"Adds new row & column (O(V²) resize)"})]}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{children:"Edge Operations"}),e.jsxs("div",{className:"edge-inputs",children:[e.jsxs("select",{value:c,onChange:T=>d(T.target.value),className:"vertex-select",children:[e.jsx("option",{value:"",children:"From"}),n.vertices.map(T=>e.jsx("option",{value:T,children:T},T))]}),e.jsx("span",{className:"edge-arrow",children:"→"}),e.jsxs("select",{value:u,onChange:T=>h(T.target.value),className:"vertex-select",children:[e.jsx("option",{value:"",children:"To"}),n.vertices.map(T=>e.jsx("option",{value:T,children:T},T))]})]}),e.jsxs("div",{className:"weight-input",children:[e.jsx("label",{htmlFor:"weightInput",children:"Weight:"}),e.jsx("input",{type:"number",id:"weightInput",value:g,onChange:T=>b(T.target.value),min:"1",max:"99",className:"weight-field"})]}),e.jsxs("div",{className:"btn-group",children:[e.jsxs("button",{onClick:q,className:"btn btn-add",children:[e.jsx(Ui,{size:14})," Add"]}),e.jsxs("button",{onClick:K,className:"btn btn-remove",children:[e.jsx(no,{size:14})," Remove"]}),e.jsxs("button",{onClick:O,className:"btn btn-check",children:[e.jsx(Bt,{size:14})," Check"]})]}),e.jsx("span",{className:"operation-hint",children:"O(1) direct cell access"})]}),e.jsx("div",{className:"operation-group",children:e.jsx("button",{onClick:k,className:"btn btn-clear full-width",children:"Clear Graph"})}),e.jsxs("div",{className:"info-panel",children:[e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Vertices (V):"}),e.jsx("span",{className:"info-value",children:n.vertex_count||0})]}),e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Edges (E):"}),e.jsx("span",{className:"info-value",children:n.edge_count||0})]}),e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Matrix Size:"}),e.jsxs("span",{className:"info-value",children:[i.length," × ",i.length]})]}),e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Space Used:"}),e.jsxs("span",{className:"info-value",children:["O(",i.length,"²) = ",i.length*i.length," cells"]})]})]}),j&&e.jsxs("div",{className:`lookup-result ${j.exists?"exists":"not-exists"}`,children:[e.jsx("strong",{children:"Lookup Result:"}),e.jsxs("code",{children:["matrix[",j.from,"][",j.to,"] = ",j.weight]}),e.jsx("span",{children:j.exists?"Edge exists!":"No edge"})]}),e.jsx(Ke,{message:C})]}),e.jsxs("div",{className:"visual-panel",children:[e.jsxs("div",{className:"mini-graph-section",children:[e.jsx("h3",{children:"Graph View"}),e.jsx("div",{className:"mini-graph-container",children:n.vertices.length===0?e.jsx("div",{className:"graph-empty-mini",children:"Empty graph"}):e.jsxs("svg",{className:"mini-graph-svg",viewBox:"0 0 350 250",children:[n.edges.map(([T,_,z],F)=>{const B=m[T],I=m[_];return!B||!I?null:e.jsx("line",{x1:B.x,y1:B.y,x2:I.x,y2:I.y,className:"mini-edge"},`edge-${F}`)}),n.vertices.map(T=>{const _=m[T];return _?e.jsxs("g",{className:"mini-node",children:[e.jsx("circle",{cx:_.x,cy:_.y,r:18}),e.jsx("text",{x:_.x,y:_.y,dominantBaseline:"central",textAnchor:"middle",children:T})]},T):null})]})})]}),e.jsxs("div",{className:"matrix-section",children:[e.jsx("h3",{children:"Adjacency Matrix"}),e.jsxs("p",{className:"matrix-explanation",children:["Each cell ",e.jsx("code",{children:"matrix[row][col]"})," stores the edge weight (0 = no edge). Undirected graphs have symmetric matrices."]}),i.length===0?e.jsx("div",{className:"matrix-empty",children:"No vertices in graph. Add vertices or load a preset!"}):e.jsx("div",{className:"matrix-container",children:e.jsxs("table",{className:"adjacency-matrix",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"matrix-corner"}),i.map((T,_)=>e.jsx("th",{className:"matrix-header col-header",children:T},T))]})}),e.jsx("tbody",{children:i.map((T,_)=>e.jsxs("tr",{children:[e.jsxs("th",{className:"matrix-header row-header",children:[T,e.jsx("button",{className:"remove-vertex-btn",onClick:()=>E(T),title:`Remove ${T}`,children:"×"})]}),i.map((z,F)=>{var B,I,$;return e.jsx("td",{className:V(_,F,(B=r[_])==null?void 0:B[F]),title:`matrix[${T}][${z}] = ${((I=r[_])==null?void 0:I[F])||0}`,children:(($=r[_])==null?void 0:$[F])||0},`${_}-${F}`)})]},T))})]})}),e.jsxs("div",{className:"comparison-hint",children:[e.jsx("strong",{children:"vs Adjacency List:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("span",{className:"pro",children:"Pro:"})," O(1) edge lookup vs O(degree) for list"]}),e.jsxs("li",{children:[e.jsx("span",{className:"con",children:"Con:"})," O(V²) space vs O(V+E) for list"]}),e.jsxs("li",{children:[e.jsx("span",{className:"pro",children:"Pro:"})," Better for dense graphs (E ≈ V²)"]}),e.jsxs("li",{children:[e.jsx("span",{className:"con",children:"Con:"})," Wastes space for sparse graphs"]})]})]})]})]})]}),e.jsx(Ce,{dataStructure:"graph"})]})}const vc=_e.memo(function({currentStepIndex:t,totalSteps:r,isPlaying:s,isAtStart:i,isAtEnd:a,currentSnapshot:l,algorithmLabel:o,onPlay:c,onPause:d,onStepForward:u,onStepBackward:h,onScrub:g,onJumpToStart:b,onJumpToEnd:N}){var m;const y=p.useCallback(x=>g(parseInt(x.target.value,10)),[g]),j=r>1?t/(r-1)*100:0,f=t+1;return e.jsxs("div",{className:"debugger-suite",children:[e.jsxs("div",{className:"debugger-header",children:[e.jsx(ev,{size:16,"aria-hidden":"true"}),e.jsx("h3",{children:"Time-Travel Debugger"}),o&&e.jsx("span",{className:"scrubber-algo-badge",children:o})]}),e.jsxs("div",{className:"scrubber-controls",children:[e.jsx("button",{onClick:b,disabled:i,className:"step-btn","aria-label":"Jump to start",title:"Jump to start",children:e.jsx(cv,{size:16})}),e.jsx("button",{onClick:h,disabled:i,className:"step-btn","aria-label":"Previous step",title:"Previous step (←)",children:e.jsx(Wx,{size:20})}),e.jsx("button",{onClick:s?d:c,className:"play-pause-btn","aria-label":s?"Pause":"Play",title:s?"Pause":"Play",children:s?e.jsx(Pr,{size:20}):e.jsx(ze,{size:20})}),e.jsx("button",{onClick:u,disabled:a,className:"step-btn","aria-label":"Next step",title:"Next step (→)",children:e.jsx(Hn,{size:20})}),e.jsx("button",{onClick:N,disabled:a,className:"step-btn","aria-label":"Jump to end",title:"Jump to end",children:e.jsx(Ir,{size:16})})]}),e.jsxs("div",{className:"slider-container",children:[e.jsxs("div",{className:"slider-track-wrapper",children:[e.jsx("div",{className:"slider-progress-fill",style:{width:`${j}%`},"aria-hidden":"true"}),e.jsx("input",{type:"range",min:0,max:Math.max(0,r-1),value:t<0?0:t,onChange:y,className:"history-slider","aria-label":"Algorithm step scrubber","aria-valuemin":0,"aria-valuemax":r-1,"aria-valuenow":t,"aria-valuetext":`Step ${f} of ${r}`})]}),e.jsxs("div",{className:"slider-labels",children:[e.jsxs("span",{className:"slider-step-label",children:["Step ",f]}),e.jsxs("span",{className:"slider-total-label",children:["of ",r]})]})]}),l&&e.jsxs("div",{className:"step-details",children:[e.jsx("span",{className:"step-action-badge","data-action":l.action,children:(m=l.action)==null?void 0:m.toUpperCase()}),e.jsx("p",{className:"step-description",children:l.description}),e.jsxs("div",{className:"step-state-row",children:[e.jsxs("span",{className:"state-pill state-pill--visited",children:["Visited: ",l.visited.length]}),e.jsxs("span",{className:"state-pill state-pill--frontier",children:[l.algorithm==="bfs"?"Queue":"Stack",":"," ",l.frontier.length>0?`[${l.frontier.join(" → ")}]`:"empty"]})]})]})]})});function yc(n=800){const[t,r]=p.useState([]),[s,i]=p.useState(-1),[a,l]=p.useState(!1),o=p.useRef(null),c=p.useRef(-1),d=p.useRef(0);p.useEffect(()=>{c.current=s},[s]),p.useEffect(()=>()=>{o.current&&(clearInterval(o.current),o.current=null)},[]);const u=p.useCallback(()=>{o.current&&(clearInterval(o.current),o.current=null)},[]),h=p.useCallback((D,M)=>{if(D>=M-1){l(!1);return}u(),l(!0),o.current=setInterval(()=>{const E=c.current+1;if(E>=d.current){clearInterval(o.current),o.current=null,l(!1);return}c.current=E,i(E)},n)},[n,u]),g=p.useCallback(D=>{u(),l(!1),d.current=D.length,c.current=0,r(D),i(0),requestAnimationFrame(()=>{h(0,D.length)})},[h,u]),b=p.useCallback(()=>{u(),l(!1)},[u]),N=p.useCallback(()=>{c.current<d.current-1&&h(c.current,d.current)},[h]),y=p.useCallback(()=>{l(D=>D?(u(),!1):(c.current<d.current-1&&requestAnimationFrame(()=>N()),D))},[u,N]),j=p.useCallback(()=>{u(),l(!1),i(D=>{const M=Math.min(D+1,d.current-1);return c.current=M,M})},[u]),f=p.useCallback(()=>{u(),l(!1),i(D=>{const M=Math.max(D-1,0);return c.current=M,M})},[u]),m=p.useCallback(D=>{const M=Math.max(0,Math.min(D,d.current-1));o.current&&(clearInterval(o.current),o.current=null,l(!1)),c.current=M,i(M)},[]),x=p.useCallback(()=>{u(),l(!1),r([]),i(-1),c.current=-1,d.current=0},[u]),C=t[s]??null,v=t.length,P=s<=0,S=s>=v-1&&v>0;return{history:t,currentStepIndex:s,currentSnapshot:C,isPlaying:a,totalSteps:v,isAtStart:P,isAtEnd:S,loadHistory:g,pause:b,resume:N,togglePlayPause:y,stepForward:j,stepBackward:f,scrubTo:m,reset:x}}const CN={bfs:{visit:n=>`Dequeued "${n}" from the queue. Marking visited and scanning neighbors.`,enqueue:n=>`Enqueued "${n}" → added to back of queue for later processing.`,explore:n=>`Exploring neighbors of "${n}". Unvisited neighbors will be enqueued.`,done:()=>"BFS complete. All reachable nodes have been visited."},dfs:{visit:n=>`Visiting "${n}". Exploring as deep as possible from here.`,push:n=>`Pushed "${n}" onto the stack.`,pop:n=>`Popped "${n}" from stack.`,backtrack:n=>`Backtracking from "${n}". All neighbors exhausted.`,done:()=>"DFS complete. All reachable nodes have been visited."}};function TN(n,t){const s=(CN[t]??{})[n.action];return s?s(n.vertex):`Processing node "${n.vertex}" (${n.action}).`}function _N(n,t,r,s){const i=r==="bfs",a=Object.freeze(structuredClone(n.visited??[])),l=Object.freeze(structuredClone(i?n.queue??[]:n.stack??[]));return Object.freeze({vertices:s.vertices,edges:s.edges,step:t,action:n.action,currentNode:n.action==="visit"?n.vertex:null,visited:a,frontier:l,description:TN(n,r),algorithm:r})}function Gp(n,t,r){return Object.freeze(n.map((s,i)=>_N(s,i,t,r)))}function LN(){const[n,t]=p.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=p.useState(""),[i,a]=p.useState({}),{message:l,showMessage:o}=Ge(3e3),{currentStepIndex:c,currentSnapshot:d,isPlaying:u,totalSteps:h,isAtStart:g,isAtEnd:b,loadHistory:N,pause:y,resume:j,stepForward:f,stepBackward:m,scrubTo:x,reset:C}=yc(900),v=new Set((d==null?void 0:d.visited)??[]),P=(d==null?void 0:d.currentNode)??null,S=(d==null?void 0:d.frontier)??[];p.useEffect(()=>{M()},[]),p.useEffect(()=>{n.vertices.length>0&&D()},[n.vertices]);const D=p.useCallback(()=>{const V=Math.min(500,350)*.35,T={},_=n.vertices.length;n.vertices.forEach((z,F)=>{const B=2*Math.PI*F/_-Math.PI/2;T[z]={x:250+V*Math.cos(B),y:175+V*Math.sin(B)}}),a(T)},[n.vertices]),M=async()=>{try{const O=await fe("/api/graph");O.vertices.length===0?await E("simple"):t(O)}catch(O){console.error("Error loading graph:",O)}},E=async O=>{try{const A=await se(`/api/graph/preset/${O}`,{});if(A.error){o(A.error,"error");return}t(A),C(),o(`Loaded '${O}' preset`,"success")}catch{o("Error loading preset","error")}},q=async()=>{if(!r.trim()){o("Please select a starting vertex!","error");return}try{const O=await fe(`/api/graph/bfs/${r}`);if(O.error){o(O.error,"error");return}const A=Gp(O.steps,"bfs",n);N(A),o("BFS complete — use the scrubber to explore each step.","info")}catch(O){console.error("BFS Error:",O),o("Error running BFS","error")}},K=O=>P===O?"graph-node current":v.has(O)?"graph-node visited":S.includes(O)?"graph-node queued":"graph-node";return e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"intro-layout",children:[e.jsxs("div",{className:"concept-box",children:[e.jsxs("div",{className:"concept-header",children:[e.jsx(Fe,{className:"icon-sm"}),e.jsx("span",{children:"What is Breadth-First Search?"})]}),e.jsxs("div",{className:"concept-content",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"BFS"})," explores a graph level by level, visiting all neighbors of a node before moving to the next level."]}),e.jsxs("div",{className:"concept-analogy",children:[e.jsx(ye,{}),e.jsx("span",{children:"Like ripples spreading outward when you drop a stone in water!"})]}),e.jsxs("div",{className:"concept-operations",children:[e.jsxs("div",{className:"op-item",children:[e.jsx("span",{className:"op-name",children:"Time"}),e.jsx("span",{className:"op-desc",children:"Visit all nodes"}),e.jsx("span",{className:"op-complexity",children:"O(V+E)"})]}),e.jsxs("div",{className:"op-item",children:[e.jsx("span",{className:"op-name",children:"Space"}),e.jsx("span",{className:"op-desc",children:"Queue storage"}),e.jsx("span",{className:"op-complexity",children:"O(V)"})]}),e.jsxs("div",{className:"op-item",children:[e.jsx("span",{className:"op-name",children:"Structure"}),e.jsx("span",{className:"op-desc",children:"Uses a Queue"}),e.jsx("span",{className:"op-complexity",children:"FIFO"})]})]})]})]}),e.jsx(be,{context:"Breadth-First Search (BFS) algorithm on graphs"})]}),e.jsxs("div",{className:"visualizer-layout",children:[e.jsxs("div",{className:"control-panel",children:[e.jsx("h2",{children:"BFS Controls"}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{children:"Load Graph Preset"}),e.jsxs("div",{className:"btn-group preset-group",children:[e.jsx("button",{onClick:()=>E("simple"),className:"btn btn-preset",disabled:u,children:"Simple"}),e.jsx("button",{onClick:()=>E("tree"),className:"btn btn-preset",disabled:u,children:"Tree"}),e.jsx("button",{onClick:()=>E("cyclic"),className:"btn btn-preset",disabled:u,children:"Cyclic"})]})]}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{children:"Start BFS From"}),e.jsxs("select",{value:r,onChange:O=>s(O.target.value),className:"vertex-select full-width",disabled:u,children:[e.jsx("option",{value:"",children:"Select start vertex"}),n.vertices.map(O=>e.jsx("option",{value:O,children:O},O))]})]}),e.jsx("div",{className:"operation-group",children:e.jsxs("div",{className:"btn-group",children:[e.jsxs("button",{onClick:q,className:"btn btn-bfs",disabled:u,children:[e.jsx(ze,{size:14})," Run BFS"]}),e.jsx("button",{onClick:C,className:"btn btn-reset",children:e.jsx(mn,{size:14})})]})}),h>0&&e.jsx(vc,{currentStepIndex:c,totalSteps:h,isPlaying:u,isAtStart:g,isAtEnd:b,currentSnapshot:d,algorithmLabel:"BFS",onPlay:j,onPause:y,onStepForward:f,onStepBackward:m,onScrub:x,onJumpToStart:()=>x(0),onJumpToEnd:()=>x(h-1)}),e.jsxs("div",{className:"info-panel",children:[e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Vertices:"}),e.jsx("span",{className:"info-value",children:n.vertices.length})]}),e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Queue:"}),e.jsxs("span",{className:"info-value",children:["[",S.join(", "),"]"]})]}),e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Visited:"}),e.jsxs("span",{className:"info-value",children:[v.size," / ",n.vertices.length]})]})]}),e.jsx(Ke,{message:l})]}),e.jsxs("div",{className:"visual-panel",children:[e.jsx("h2",{children:"BFS Visualization"}),e.jsx("div",{className:"graph-container",children:n.vertices.length===0?e.jsx("div",{className:"graph-empty",children:"Loading graph..."}):e.jsxs("svg",{className:"graph-svg",viewBox:"0 0 500 350",children:[n.edges.map(([O,A],k)=>{const L=i[O],V=i[A];return!L||!V?null:e.jsx("line",{x1:L.x,y1:L.y,x2:V.x,y2:V.y,className:"graph-edge"},`edge-${k}`)}),n.vertices.map(O=>{const A=i[O];return A?e.jsxs("g",{className:K(O),children:[e.jsx("circle",{cx:A.x,cy:A.y,r:25,className:"node-circle"}),e.jsx("text",{x:A.x,y:A.y,className:"node-label",dominantBaseline:"central",textAnchor:"middle",children:O})]},O):null})]})})]})]}),e.jsx(Ce,{dataStructure:"bfs"})]})}function EN(){const[n,t]=p.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=p.useState(""),[i,a]=p.useState({}),{message:l,showMessage:o}=Ge(3e3),{currentStepIndex:c,currentSnapshot:d,isPlaying:u,totalSteps:h,isAtStart:g,isAtEnd:b,loadHistory:N,pause:y,resume:j,stepForward:f,stepBackward:m,scrubTo:x,reset:C}=yc(900),v=new Set((d==null?void 0:d.visited)??[]),P=(d==null?void 0:d.currentNode)??null,S=(d==null?void 0:d.frontier)??[];p.useEffect(()=>{M()},[]),p.useEffect(()=>{n.vertices.length>0&&D()},[n.vertices]);const D=p.useCallback(()=>{const V=Math.min(500,350)*.35,T={},_=n.vertices.length;n.vertices.forEach((z,F)=>{const B=2*Math.PI*F/_-Math.PI/2;T[z]={x:250+V*Math.cos(B),y:175+V*Math.sin(B)}}),a(T)},[n.vertices]),M=async()=>{try{const O=await fe("/api/graph");O.vertices.length===0?await E("simple"):t(O)}catch(O){console.error("Error loading graph:",O)}},E=async O=>{try{const A=await se(`/api/graph/preset/${O}`,{});if(A.error){o(A.error,"error");return}t(A),C(),o(`Loaded '${O}' preset`,"success")}catch{o("Error loading preset","error")}},q=async()=>{if(!r.trim()){o("Please select a starting vertex!","error");return}try{const O=await fe(`/api/graph/dfs/${r}`);if(O.error){o(O.error,"error");return}const A=Gp(O.steps,"dfs",n);N(A),o("DFS complete — use the scrubber to explore each step.","info")}catch(O){console.error("DFS Error:",O),o("Error running DFS","error")}},K=O=>P===O?"graph-node current":v.has(O)?"graph-node visited":S.includes(O)?"graph-node stacked":"graph-node";return e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"intro-layout",children:[e.jsxs("div",{className:"concept-box",children:[e.jsxs("div",{className:"concept-header",children:[e.jsx(Fe,{className:"icon-sm"}),e.jsx("span",{children:"What is Depth-First Search?"})]}),e.jsxs("div",{className:"concept-content",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"DFS"})," explores a graph by going as deep as possible along each branch before backtracking."]}),e.jsxs("div",{className:"concept-analogy",children:[e.jsx(ye,{}),e.jsx("span",{children:"Like exploring a maze by following one path to its end before trying another!"})]}),e.jsxs("div",{className:"concept-operations",children:[e.jsxs("div",{className:"op-item",children:[e.jsx("span",{className:"op-name",children:"Time"}),e.jsx("span",{className:"op-desc",children:"Visit all nodes"}),e.jsx("span",{className:"op-complexity",children:"O(V+E)"})]}),e.jsxs("div",{className:"op-item",children:[e.jsx("span",{className:"op-name",children:"Space"}),e.jsx("span",{className:"op-desc",children:"Stack storage"}),e.jsx("span",{className:"op-complexity",children:"O(V)"})]}),e.jsxs("div",{className:"op-item",children:[e.jsx("span",{className:"op-name",children:"Structure"}),e.jsx("span",{className:"op-desc",children:"Uses a Stack"}),e.jsx("span",{className:"op-complexity",children:"LIFO"})]})]})]})]}),e.jsx(be,{context:"Depth-First Search (DFS) algorithm on graphs"})]}),e.jsxs("div",{className:"visualizer-layout",children:[e.jsxs("div",{className:"control-panel",children:[e.jsx("h2",{children:"DFS Controls"}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{children:"Load Graph Preset"}),e.jsxs("div",{className:"btn-group preset-group",children:[e.jsx("button",{onClick:()=>E("simple"),className:"btn btn-preset",disabled:u,children:"Simple"}),e.jsx("button",{onClick:()=>E("tree"),className:"btn btn-preset",disabled:u,children:"Tree"}),e.jsx("button",{onClick:()=>E("cyclic"),className:"btn btn-preset",disabled:u,children:"Cyclic"})]})]}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{children:"Start DFS From"}),e.jsxs("select",{value:r,onChange:O=>s(O.target.value),className:"vertex-select full-width",disabled:u,children:[e.jsx("option",{value:"",children:"Select start vertex"}),n.vertices.map(O=>e.jsx("option",{value:O,children:O},O))]})]}),e.jsx("div",{className:"operation-group",children:e.jsxs("div",{className:"btn-group",children:[e.jsxs("button",{onClick:q,className:"btn btn-dfs",disabled:u,children:[e.jsx(ze,{size:14})," Run DFS"]}),e.jsx("button",{onClick:C,className:"btn btn-reset",children:e.jsx(mn,{size:14})})]})}),h>0&&e.jsx(vc,{currentStepIndex:c,totalSteps:h,isPlaying:u,isAtStart:g,isAtEnd:b,currentSnapshot:d,algorithmLabel:"DFS",onPlay:j,onPause:y,onStepForward:f,onStepBackward:m,onScrub:x,onJumpToStart:()=>x(0),onJumpToEnd:()=>x(h-1)}),e.jsxs("div",{className:"info-panel",children:[e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Vertices:"}),e.jsx("span",{className:"info-value",children:n.vertices.length})]}),e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Stack:"}),e.jsxs("span",{className:"info-value",children:["[",S.join(", "),"]"]})]}),e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Visited:"}),e.jsxs("span",{className:"info-value",children:[v.size," / ",n.vertices.length]})]})]}),e.jsx(Ke,{message:l})]}),e.jsxs("div",{className:"visual-panel",children:[e.jsx("h2",{children:"DFS Visualization"}),e.jsx("div",{className:"graph-container",children:n.vertices.length===0?e.jsx("div",{className:"graph-empty",children:"Loading graph..."}):e.jsxs("svg",{className:"graph-svg",viewBox:"0 0 500 350",children:[n.edges.map(([O,A],k)=>{const L=i[O],V=i[A];return!L||!V?null:e.jsx("line",{x1:L.x,y1:L.y,x2:V.x,y2:V.y,className:"graph-edge"},`edge-${k}`)}),n.vertices.map(O=>{const A=i[O];return A?e.jsxs("g",{className:K(O),children:[e.jsx("circle",{cx:A.x,cy:A.y,r:25,className:"node-circle"}),e.jsx("text",{x:A.x,y:A.y,className:"node-label",dominantBaseline:"central",textAnchor:"middle",children:O})]},O):null})]})})]})]}),e.jsx(Ce,{dataStructure:"dfs"})]})}function ON(){const[n,t]=p.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=p.useState(""),[i,a]=p.useState(""),[l,o]=p.useState({}),[c,d]=p.useState({}),[u,h]=p.useState([]),[g,b]=p.useState(-1),[N,y]=p.useState(!1),[j,f]=p.useState(!1),[m,x]=p.useState(new Set),[C,v]=p.useState(null),[P,S]=p.useState(null),[D,M]=p.useState({}),{message:E,showMessage:q}=Ge(3e3),K=p.useRef(null),O=p.useRef(0);p.useEffect(()=>{k()},[]),p.useEffect(()=>{n.vertices.length>0&&A()},[n.vertices]);const A=p.useCallback(()=>{const te=Math.min(500,350)*.35,U={},Q=n.vertices.length;n.vertices.forEach((ce,re)=>{const je=2*Math.PI*re/Q-Math.PI/2;U[ce]={x:250+te*Math.cos(je),y:175+te*Math.sin(je)}}),M(U)},[n.vertices]),k=async()=>{try{const w=await fe("/api/graph");w.vertices.length===0?await L("weighted"):t(w)}catch(w){console.error("Error loading graph:",w)}},L=async w=>{try{const H=await se(`/api/graph/preset/${w}`,{});if(H.error){q(H.error,"error");return}t(H),B(),q(`Loaded '${w}' preset`,"success")}catch{q("Error loading preset","error")}},V=async()=>{if(!r){q("Please select a start vertex!","error");return}try{const w=i?`/api/graph/dijkstra/${r}?end=${i}`:`/api/graph/dijkstra/${r}`,H=await fe(w);if(H.error){q(H.error,"error");return}o(H.distances),d(H.paths),h(H.steps),q("Starting Dijkstra's algorithm...","info"),T(H.steps)}catch{q("Error running Dijkstra's algorithm","error")}},T=w=>{K.current&&clearInterval(K.current),y(!0),f(!1),x(new Set),v(null),S(null),b(-1),O.current=0,K.current=setInterval(()=>{if(O.current>=w.length){clearInterval(K.current),y(!1),v(null),S(null),q("Dijkstra's algorithm complete!","success");return}const H=w[O.current];b(O.current),o(H.distances||{}),x(new Set(H.visited||[])),H.action==="visit"?(v(H.current),S(null)):(H.action==="check"||H.action==="update")&&(v(H.current),S({from:H.current,to:H.neighbor})),O.current++},1200)},_=()=>{j?(f(!1),z()):(f(!0),K.current&&clearInterval(K.current))},z=()=>{K.current&&clearInterval(K.current),K.current=setInterval(()=>{if(O.current>=u.length){clearInterval(K.current),y(!1),v(null),S(null);return}const w=u[O.current];b(O.current),o(w.distances||{}),x(new Set(w.visited||[])),w.action==="visit"?(v(w.current),S(null)):(w.action==="check"||w.action==="update")&&(v(w.current),S({from:w.current,to:w.neighbor})),O.current++},1200)},F=()=>{if(O.current>=u.length)return;const w=u[O.current];b(O.current),o(w.distances||{}),x(new Set(w.visited||[])),w.action==="visit"?(v(w.current),S(null)):(w.action==="check"||w.action==="update")&&(v(w.current),S({from:w.current,to:w.neighbor})),O.current++,O.current>=u.length&&(y(!1),v(null),S(null))},B=()=>{K.current&&clearInterval(K.current),o({}),d({}),h([]),b(-1),x(new Set),v(null),S(null),y(!1),f(!1),O.current=0},I=w=>C===w?"graph-node current":m.has(w)?"graph-node visited":"graph-node",$=(w,H)=>P&&(P.from===w&&P.to===H||P.from===H&&P.to===w)?"graph-edge checking":"graph-edge",R=()=>g>=0&&g<u.length?u[g].message:"";return e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"intro-layout",children:[e.jsxs("div",{className:"concept-box",children:[e.jsxs("div",{className:"concept-header",children:[e.jsx(Fe,{className:"icon-sm"}),e.jsx("span",{children:"What is Dijkstra's Algorithm?"})]}),e.jsxs("div",{className:"concept-content",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Dijkstra's Algorithm"})," finds the shortest path from a source vertex to all other vertices in a weighted graph with non-negative weights."]}),e.jsxs("div",{className:"concept-analogy",children:[e.jsx(ye,{}),e.jsx("span",{children:"Like GPS finding the quickest route - always picks the closest unvisited location!"})]}),e.jsxs("div",{className:"concept-operations",children:[e.jsxs("div",{className:"op-item",children:[e.jsx("span",{className:"op-name",children:"Time"}),e.jsx("span",{className:"op-desc",children:"With min-heap"}),e.jsx("span",{className:"op-complexity",children:"O((V+E)logV)"})]}),e.jsxs("div",{className:"op-item",children:[e.jsx("span",{className:"op-name",children:"Space"}),e.jsx("span",{className:"op-desc",children:"Distance array"}),e.jsx("span",{className:"op-complexity",children:"O(V)"})]}),e.jsxs("div",{className:"op-item",children:[e.jsx("span",{className:"op-name",children:"Strategy"}),e.jsx("span",{className:"op-desc",children:"Greedy"}),e.jsx("span",{className:"op-complexity",children:"Min first"})]})]}),e.jsxs("div",{className:"concept-uses",children:[e.jsx("strong",{children:"Common Uses:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"GPS navigation systems"}),e.jsx("li",{children:"Network routing protocols"}),e.jsx("li",{children:"Social network analysis"}),e.jsx("li",{children:"Game pathfinding"})]})]})]})]}),e.jsx(be,{context:"Dijkstra's shortest path algorithm"})]}),e.jsxs("div",{className:"visualizer-layout",children:[e.jsxs("div",{className:"control-panel",children:[e.jsx("h2",{children:"Dijkstra's Algorithm"}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{children:"Load Preset"}),e.jsxs("div",{className:"btn-group preset-group",children:[e.jsx("button",{onClick:()=>L("weighted"),className:"btn btn-preset",disabled:N,children:"Weighted"}),e.jsx("button",{onClick:()=>L("simple"),className:"btn btn-preset",disabled:N,children:"Simple"})]})]}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{children:"Start Vertex"}),e.jsxs("select",{value:r,onChange:w=>s(w.target.value),className:"vertex-select full-width",disabled:N,children:[e.jsx("option",{value:"",children:"Select start"}),n.vertices.map(w=>e.jsx("option",{value:w,children:w},w))]})]}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{children:"End Vertex (Optional)"}),e.jsxs("select",{value:i,onChange:w=>a(w.target.value),className:"vertex-select full-width",disabled:N,children:[e.jsx("option",{value:"",children:"All vertices"}),n.vertices.map(w=>e.jsx("option",{value:w,children:w},w))]})]}),e.jsx("div",{className:"operation-group",children:e.jsxs("div",{className:"btn-group",children:[e.jsxs("button",{onClick:V,className:"btn btn-dijkstra",disabled:N&&!j,children:[e.jsx(ze,{size:14})," Run"]}),N&&e.jsx("button",{onClick:_,className:"btn btn-pause",children:j?e.jsx(ze,{size:14}):e.jsx(Pr,{size:14})}),j&&e.jsx("button",{onClick:F,className:"btn btn-step",children:e.jsx(Ir,{size:14})}),e.jsx("button",{onClick:B,className:"btn btn-reset",children:e.jsx(mn,{size:14})})]})}),Object.keys(l).length>0&&e.jsxs("div",{className:"distance-table",children:[e.jsxs("h3",{children:["Distances from ",r]}),e.jsx("div",{className:"distance-grid",children:n.vertices.map(w=>e.jsxs("div",{className:`distance-item ${m.has(w)?"visited":""} ${C===w?"current":""}`,children:[e.jsx("span",{className:"vertex-label",children:w}),e.jsx("span",{className:"distance-value",children:l[w]==="inf"||l[w]===null?"∞":l[w]})]},w))})]}),g>=0&&e.jsxs("div",{className:"current-step-box",children:[e.jsxs("strong",{children:["Step ",g+1,":"]}),e.jsx("p",{children:R()})]}),e.jsx(Ke,{message:E}),e.jsxs("div",{className:"legend",children:[e.jsx("h3",{children:"Legend"}),e.jsxs("div",{className:"legend-items",children:[e.jsxs("div",{className:"legend-item",children:[e.jsx("span",{className:"legend-color unvisited"}),e.jsx("span",{children:"Unvisited"})]}),e.jsxs("div",{className:"legend-item",children:[e.jsx("span",{className:"legend-color current"}),e.jsx("span",{children:"Current"})]}),e.jsxs("div",{className:"legend-item",children:[e.jsx("span",{className:"legend-color visited"}),e.jsx("span",{children:"Visited"})]})]})]})]}),e.jsxs("div",{className:"visual-panel",children:[e.jsx("h2",{children:"Visualization"}),e.jsx("div",{className:"graph-container",children:n.vertices.length===0?e.jsx("div",{className:"graph-empty",children:"Loading graph..."}):e.jsxs("svg",{className:"graph-svg",viewBox:"0 0 500 350",children:[n.edges.map(([w,H,Y],ee)=>{const te=D[w],U=D[H];if(!te||!U)return null;const Q=(te.x+U.x)/2,ce=(te.y+U.y)/2;return e.jsxs("g",{children:[e.jsx("line",{x1:te.x,y1:te.y,x2:U.x,y2:U.y,className:$(w,H)}),e.jsx("circle",{cx:Q,cy:ce,r:12,className:"weight-bg"}),e.jsx("text",{x:Q,y:ce,className:"weight-label",dominantBaseline:"central",textAnchor:"middle",children:Y})]},`edge-${ee}`)}),n.vertices.map(w=>{const H=D[w];return H?e.jsxs("g",{className:I(w),children:[e.jsx("circle",{cx:H.x,cy:H.y,r:25,className:"node-circle"}),e.jsx("text",{x:H.x,y:H.y,className:"node-label",dominantBaseline:"central",textAnchor:"middle",children:w}),l[w]!==void 0&&e.jsxs("text",{x:H.x,y:H.y+38,className:"distance-label",dominantBaseline:"central",textAnchor:"middle",children:["d=",l[w]==="inf"||l[w]===null?"∞":l[w]]})]},w):null})]})}),Object.keys(c).length>0&&!N&&e.jsxs("div",{className:"paths-section",children:[e.jsxs("h3",{children:["Shortest Paths from ",r]}),e.jsx("div",{className:"paths-list",children:Object.entries(c).map(([w,H])=>e.jsxs("div",{className:"path-item",children:[e.jsxs("span",{className:"path-target",children:[w,":"]}),e.jsx("span",{className:"path-route",children:H.join(" → ")}),e.jsxs("span",{className:"path-distance",children:["(dist: ",l[w]===null?"∞":l[w],")"]})]},w))})]})]})]}),e.jsx(Ce,{dataStructure:"dijkstra"})]})}function RN(){const[n,t]=p.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=p.useState(""),[i,a]=p.useState([]),[l,o]=p.useState(0),[c,d]=p.useState([]),[u,h]=p.useState(-1),[g,b]=p.useState(!1),[N,y]=p.useState(!1),[j,f]=p.useState(new Set),[m,x]=p.useState(null),[C,v]=p.useState(null),[P,S]=p.useState({}),{message:D,showMessage:M}=Ge(3e3),E=p.useRef(null),q=p.useRef(0);p.useEffect(()=>{O()},[]),p.useEffect(()=>{n.vertices.length>0&&K()},[n.vertices]);const K=p.useCallback(()=>{const ee=Math.min(500,350)*.35,te={},U=n.vertices.length;n.vertices.forEach((Q,ce)=>{const re=2*Math.PI*ce/U-Math.PI/2;te[Q]={x:250+ee*Math.cos(re),y:175+ee*Math.sin(re)}}),S(te)},[n.vertices]),O=async()=>{try{const R=await fe("/api/graph");R.vertices.length===0?await A("weighted"):t(R)}catch(R){console.error("Error loading graph:",R)}},A=async R=>{try{const w=await se(`/api/graph/preset/${R}`,{});if(w.error){M(w.error,"error");return}t(w),z(),M(`Loaded '${R}' preset`,"success")}catch{M("Error loading preset","error")}},k=async()=>{try{const R=r?`/api/graph/mst?start=${r}`:"/api/graph/mst",w=await fe(R);if(w.error){M(w.error,"error");return}d(w.steps),M("Starting Prim's MST algorithm...","info"),L(w.steps,w.mst_edges,w.total_weight)}catch{M("Error running MST algorithm","error")}},L=(R,w,H)=>{E.current&&clearInterval(E.current),b(!0),y(!1),f(new Set),a([]),o(0),x(null),v(null),h(-1),q.current=0,E.current=setInterval(()=>{if(q.current>=R.length){clearInterval(E.current),b(!1),x(null),v(null),a(w),o(H),M(`MST complete! Total weight: ${H}`,"success");return}const Y=R[q.current];h(q.current),f(new Set(Y.visited||[])),a(Y.mst_edges||[]),o(Y.total_weight||0),Y.action==="add"?(x(Y.current),v(null)):Y.action==="consider"&&(x(Y.current),v({from:Y.current,to:Y.neighbor,weight:Y.weight})),q.current++},1e3)},V=()=>{N?(y(!1),T()):(y(!0),E.current&&clearInterval(E.current))},T=()=>{E.current&&clearInterval(E.current),E.current=setInterval(()=>{if(q.current>=c.length){clearInterval(E.current),b(!1),x(null),v(null);return}const R=c[q.current];h(q.current),f(new Set(R.visited||[])),a(R.mst_edges||[]),o(R.total_weight||0),R.action==="add"?(x(R.current),v(null)):R.action==="consider"&&(x(R.current),v({from:R.current,to:R.neighbor,weight:R.weight})),q.current++},1e3)},_=()=>{if(q.current>=c.length)return;const R=c[q.current];h(q.current),f(new Set(R.visited||[])),a(R.mst_edges||[]),o(R.total_weight||0),R.action==="add"?(x(R.current),v(null)):R.action==="consider"&&(x(R.current),v({from:R.current,to:R.neighbor,weight:R.weight})),q.current++,q.current>=c.length&&(b(!1),x(null),v(null))},z=()=>{E.current&&clearInterval(E.current),a([]),o(0),d([]),h(-1),f(new Set),x(null),v(null),b(!1),y(!1),q.current=0},F=R=>m===R?"graph-node current":j.has(R)?"graph-node visited":"graph-node",B=(R,w)=>i.some(([H,Y])=>H===R&&Y===w||H===w&&Y===R),I=(R,w)=>C&&(C.from===R&&C.to===w||C.from===w&&C.to===R)?"graph-edge considering":B(R,w)?"graph-edge mst":"graph-edge",$=()=>u>=0&&u<c.length?c[u].message:"";return e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"intro-layout",children:[e.jsxs("div",{className:"concept-box",children:[e.jsxs("div",{className:"concept-header",children:[e.jsx(Fe,{className:"icon-sm"}),e.jsx("span",{children:"What is Minimum Spanning Tree?"})]}),e.jsxs("div",{className:"concept-content",children:[e.jsxs("p",{children:["A ",e.jsx("strong",{children:"Minimum Spanning Tree (MST)"})," connects all vertices with the minimum total edge weight, without any cycles."]}),e.jsxs("div",{className:"concept-analogy",children:[e.jsx(ye,{}),e.jsx("span",{children:"Like finding the cheapest way to connect all cities with roads!"})]}),e.jsxs("div",{className:"concept-operations",children:[e.jsxs("div",{className:"op-item",children:[e.jsx("span",{className:"op-name",children:"Time"}),e.jsx("span",{className:"op-desc",children:"Prim's with heap"}),e.jsx("span",{className:"op-complexity",children:"O((V+E)logV)"})]}),e.jsxs("div",{className:"op-item",children:[e.jsx("span",{className:"op-name",children:"Edges"}),e.jsx("span",{className:"op-desc",children:"In MST"}),e.jsx("span",{className:"op-complexity",children:"V - 1"})]}),e.jsxs("div",{className:"op-item",children:[e.jsx("span",{className:"op-name",children:"Strategy"}),e.jsx("span",{className:"op-desc",children:"Greedy"}),e.jsx("span",{className:"op-complexity",children:"Min edge"})]})]}),e.jsxs("div",{className:"concept-uses",children:[e.jsx("strong",{children:"Common Uses:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Network design (cables, pipes)"}),e.jsx("li",{children:"Cluster analysis"}),e.jsx("li",{children:"Image segmentation"}),e.jsx("li",{children:"Approximation algorithms"})]})]})]})]}),e.jsx(be,{context:"Minimum Spanning Tree, Prim's algorithm"})]}),e.jsxs("div",{className:"visualizer-layout",children:[e.jsxs("div",{className:"control-panel",children:[e.jsx("h2",{children:"Prim's MST Algorithm"}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{children:"Load Preset"}),e.jsxs("div",{className:"btn-group preset-group",children:[e.jsx("button",{onClick:()=>A("weighted"),className:"btn btn-preset",disabled:g,children:"Weighted"}),e.jsx("button",{onClick:()=>A("complete"),className:"btn btn-preset",disabled:g,children:"Complete"})]})]}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{children:"Start Vertex (Optional)"}),e.jsxs("select",{value:r,onChange:R=>s(R.target.value),className:"vertex-select full-width",disabled:g,children:[e.jsx("option",{value:"",children:"Auto (first vertex)"}),n.vertices.map(R=>e.jsx("option",{value:R,children:R},R))]})]}),e.jsx("div",{className:"operation-group",children:e.jsxs("div",{className:"btn-group",children:[e.jsxs("button",{onClick:k,className:"btn btn-mst",disabled:g&&!N,children:[e.jsx(ze,{size:14})," Run MST"]}),g&&e.jsx("button",{onClick:V,className:"btn btn-pause",children:N?e.jsx(ze,{size:14}):e.jsx(Pr,{size:14})}),N&&e.jsx("button",{onClick:_,className:"btn btn-step",children:e.jsx(Ir,{size:14})}),e.jsx("button",{onClick:z,className:"btn btn-reset",children:e.jsx(mn,{size:14})})]})}),e.jsxs("div",{className:"info-panel",children:[e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"MST Edges:"}),e.jsxs("span",{className:"info-value",children:[i.length," / ",n.vertices.length-1]})]}),e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Total Weight:"}),e.jsx("span",{className:"info-value mst-weight",children:l})]}),e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Visited:"}),e.jsxs("span",{className:"info-value",children:[j.size," / ",n.vertices.length]})]})]}),u>=0&&e.jsxs("div",{className:"current-step-box",children:[e.jsxs("strong",{children:["Step ",u+1,":"]}),e.jsx("p",{children:$()})]}),e.jsx(Ke,{message:D}),e.jsxs("div",{className:"legend",children:[e.jsx("h3",{children:"Legend"}),e.jsxs("div",{className:"legend-items",children:[e.jsxs("div",{className:"legend-item",children:[e.jsx("span",{className:"legend-color unvisited"}),e.jsx("span",{children:"Unvisited"})]}),e.jsxs("div",{className:"legend-item",children:[e.jsx("span",{className:"legend-color current"}),e.jsx("span",{children:"Current"})]}),e.jsxs("div",{className:"legend-item",children:[e.jsx("span",{className:"legend-color visited"}),e.jsx("span",{children:"In MST"})]}),e.jsxs("div",{className:"legend-item",children:[e.jsx("span",{className:"legend-line mst"}),e.jsx("span",{children:"MST Edge"})]})]})]})]}),e.jsxs("div",{className:"visual-panel",children:[e.jsx("h2",{children:"Visualization"}),e.jsx("div",{className:"graph-container",children:n.vertices.length===0?e.jsx("div",{className:"graph-empty",children:"Loading graph..."}):e.jsxs("svg",{className:"graph-svg",viewBox:"0 0 500 350",children:[n.edges.map(([R,w,H],Y)=>{const ee=P[R],te=P[w];if(!ee||!te)return null;const U=(ee.x+te.x)/2,Q=(ee.y+te.y)/2;return e.jsxs("g",{children:[e.jsx("line",{x1:ee.x,y1:ee.y,x2:te.x,y2:te.y,className:I(R,w)}),e.jsx("circle",{cx:U,cy:Q,r:12,className:"weight-bg"}),e.jsx("text",{x:U,y:Q,className:"weight-label",dominantBaseline:"central",textAnchor:"middle",children:H})]},`edge-${Y}`)}),n.vertices.map(R=>{const w=P[R];return w?e.jsxs("g",{className:F(R),children:[e.jsx("circle",{cx:w.x,cy:w.y,r:25,className:"node-circle"}),e.jsx("text",{x:w.x,y:w.y,className:"node-label",dominantBaseline:"central",textAnchor:"middle",children:R})]},R):null})]})}),i.length>0&&e.jsxs("div",{className:"mst-edges-section",children:[e.jsx("h3",{children:"MST Edges"}),e.jsx("div",{className:"mst-edges-list",children:i.map(([R,w,H],Y)=>e.jsxs("div",{className:"mst-edge-item",children:[e.jsxs("span",{children:[R," — ",w]}),e.jsxs("span",{className:"edge-weight",children:["(w: ",H,")"]})]},Y))}),e.jsx("div",{className:"mst-total",children:e.jsxs("strong",{children:["Total MST Weight: ",l]})})]})]})]}),e.jsx(Ce,{dataStructure:"graph"})]})}function PN(){const[n,t]=p.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=p.useState([]),[i,a]=p.useState({}),[l,o]=p.useState([]),[c,d]=p.useState(-1),[u,h]=p.useState(!1),[g,b]=p.useState(!1),[N,y]=p.useState(new Set),[j,f]=p.useState(null),[m,x]=p.useState([]),[C,v]=p.useState(!1),[P,S]=p.useState({}),{message:D,showMessage:M}=Ge(3e3),E=p.useRef(null),q=p.useRef(0);p.useEffect(()=>{O()},[]),p.useEffect(()=>{n.vertices.length>0&&K()},[n.vertices]);const K=p.useCallback(()=>{const H=Math.min(500,350)*.35,Y={},ee=n.vertices.length;n.vertices.forEach((te,U)=>{const Q=2*Math.PI*U/ee-Math.PI/2;Y[te]={x:250+H*Math.cos(Q),y:175+H*Math.sin(Q)}}),S(Y)},[n.vertices]),O=async()=>{try{const I=await fe("/api/graph");I.vertices.length===0?await A("dag"):t(I)}catch(I){console.error("Error loading graph:",I)}},A=async I=>{try{const $=await se(`/api/graph/preset/${I}`,{});if($.error){M($.error,"error");return}t($),z(),M(`Loaded '${I}' preset`,"success")}catch{M("Error loading preset","error")}},k=async()=>{try{const I=await fe("/api/graph/topological");if(I.error){M(I.error,"error");return}if(I.has_cycle){v(!0),M("Graph has a cycle - topological sort not possible!","error");return}v(!1),s(I.sorted||[]),o(I.steps),M("Starting Topological Sort (Kahn's Algorithm)...","info"),L(I.steps,I.sorted||[])}catch{M("Error running topological sort","error")}},L=(I,$=[])=>{E.current&&clearInterval(E.current),h(!0),b(!1),y(new Set),f(null),x([]),a({}),d(-1),q.current=0,E.current=setInterval(()=>{if(q.current>=I.length){clearInterval(E.current),h(!1),f(null),M(`Topological Sort Complete: ${$.join(" → ")}`,"success");return}const R=I[q.current];d(q.current),a(R.in_degrees||{}),x(R.queue||[]),R.action==="process"?(f(R.vertex),y(new Set(R.result||[]))):R.action==="decrement"||R.action==="enqueue"?f(R.vertex||R.neighbor):R.action==="init"&&(a(R.in_degrees||{}),x(R.queue||[])),q.current++},1e3)},V=()=>{g?(b(!1),T()):(b(!0),E.current&&clearInterval(E.current))},T=()=>{E.current&&clearInterval(E.current),E.current=setInterval(()=>{if(q.current>=l.length){clearInterval(E.current),h(!1),f(null);return}const I=l[q.current];d(q.current),a(I.in_degrees||{}),x(I.queue||[]),I.action==="process"?(f(I.vertex),y(new Set(I.result||[]))):(I.action==="decrement"||I.action==="enqueue")&&f(I.vertex||I.neighbor),q.current++},1e3)},_=()=>{if(q.current>=l.length)return;const I=l[q.current];d(q.current),a(I.in_degrees||{}),x(I.queue||[]),I.action==="process"?(f(I.vertex),y(new Set(I.result||[]))):(I.action==="decrement"||I.action==="enqueue")&&f(I.vertex||I.neighbor),q.current++,q.current>=l.length&&(h(!1),f(null))},z=()=>{E.current&&clearInterval(E.current),s([]),a({}),o([]),d(-1),y(new Set),f(null),x([]),v(!1),h(!1),b(!1),q.current=0},F=I=>j===I?"graph-node current":N.has(I)?"graph-node visited":m.includes(I)?"graph-node queued":"graph-node",B=()=>c>=0&&c<l.length?l[c].message:"";return e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"intro-layout",children:[e.jsxs("div",{className:"concept-box",children:[e.jsxs("div",{className:"concept-header",children:[e.jsx(Fe,{className:"icon-sm"}),e.jsx("span",{children:"What is Topological Sort?"})]}),e.jsxs("div",{className:"concept-content",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Topological Sort"})," orders vertices in a directed acyclic graph (DAG) so that for every edge u→v, u comes before v in the ordering."]}),e.jsxs("div",{className:"concept-analogy",children:[e.jsx(ye,{}),e.jsx("span",{children:"Like scheduling tasks - you must complete prerequisites before dependent tasks!"})]}),e.jsxs("div",{className:"concept-operations",children:[e.jsxs("div",{className:"op-item",children:[e.jsx("span",{className:"op-name",children:"Time"}),e.jsx("span",{className:"op-desc",children:"Kahn's Algorithm"}),e.jsx("span",{className:"op-complexity",children:"O(V+E)"})]}),e.jsxs("div",{className:"op-item",children:[e.jsx("span",{className:"op-name",children:"Space"}),e.jsx("span",{className:"op-desc",children:"In-degree array"}),e.jsx("span",{className:"op-complexity",children:"O(V)"})]}),e.jsxs("div",{className:"op-item",children:[e.jsx("span",{className:"op-name",children:"Requirement"}),e.jsx("span",{className:"op-desc",children:"Graph type"}),e.jsx("span",{className:"op-complexity",children:"DAG only"})]})]}),e.jsxs("div",{className:"concept-uses",children:[e.jsx("strong",{children:"Common Uses:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Task scheduling with dependencies"}),e.jsx("li",{children:"Build systems (Makefile)"}),e.jsx("li",{children:"Course prerequisite planning"}),e.jsx("li",{children:"Package dependency resolution"})]})]})]})]}),e.jsx(be,{context:"Topological Sort using Kahn's Algorithm on directed acyclic graphs"})]}),e.jsxs("div",{className:"visualizer-layout",children:[e.jsxs("div",{className:"control-panel",children:[e.jsx("h2",{children:"Topological Sort"}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{children:"Load Graph Preset"}),e.jsxs("div",{className:"btn-group preset-group",children:[e.jsx("button",{onClick:()=>A("dag"),className:"btn btn-preset",disabled:u,children:"DAG"}),e.jsx("button",{onClick:()=>A("tree"),className:"btn btn-preset",disabled:u,children:"Tree"}),e.jsx("button",{onClick:()=>A("simple"),className:"btn btn-preset",disabled:u,children:"Simple"})]})]}),e.jsx("div",{className:"operation-group",children:e.jsxs("div",{className:"btn-group",children:[e.jsxs("button",{onClick:k,className:"btn btn-bfs",disabled:u&&!g,children:[e.jsx(ze,{size:14})," Run Sort"]}),u&&e.jsx("button",{onClick:V,className:"btn btn-pause",children:g?e.jsx(ze,{size:14}):e.jsx(Pr,{size:14})}),g&&e.jsx("button",{onClick:_,className:"btn btn-step",children:e.jsx(Ir,{size:14})}),e.jsx("button",{onClick:z,className:"btn btn-reset",children:e.jsx(mn,{size:14})})]})}),Object.keys(i).length>0&&e.jsxs("div",{className:"distance-table",children:[e.jsx("h3",{children:"In-Degrees"}),e.jsx("div",{className:"distance-grid",children:n.vertices.map(I=>e.jsxs("div",{className:`distance-item ${N.has(I)?"visited":""} ${j===I?"current":""}`,children:[e.jsx("span",{className:"vertex-label",children:I}),e.jsx("span",{className:"distance-value",children:i[I]??"-"})]},I))})]}),e.jsxs("div",{className:"info-panel",children:[e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Vertices:"}),e.jsx("span",{className:"info-value",children:n.vertex_count||n.vertices.length})]}),e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Edges:"}),e.jsx("span",{className:"info-value",children:n.edge_count||0})]}),m.length>0&&e.jsxs("div",{className:"info-item queue-display",children:[e.jsx("span",{className:"info-label",children:"Queue:"}),e.jsxs("span",{className:"info-value queue-items",children:["[",m.join(", "),"]"]})]}),r.length>0&&!u&&e.jsxs("div",{className:"info-item traversal-result",children:[e.jsx("span",{className:"info-label",children:"Order:"}),e.jsx("span",{className:"info-value",children:r.join(" → ")})]})]}),c>=0&&e.jsxs("div",{className:"current-step-box",children:[e.jsxs("strong",{children:["Step ",c+1,":"]}),e.jsx("p",{children:B()})]}),e.jsx(Ke,{message:D}),C&&e.jsxs("div",{className:"warning-box",children:[e.jsx("strong",{children:"Cycle Detected!"}),e.jsx("p",{children:"Topological sort is only possible on Directed Acyclic Graphs (DAGs)."})]}),e.jsxs("div",{className:"legend",children:[e.jsx("h3",{children:"Legend"}),e.jsxs("div",{className:"legend-items",children:[e.jsxs("div",{className:"legend-item",children:[e.jsx("span",{className:"legend-color unvisited"}),e.jsx("span",{children:"Unprocessed"})]}),e.jsxs("div",{className:"legend-item",children:[e.jsx("span",{className:"legend-color queued"}),e.jsx("span",{children:"In Queue (in-degree 0)"})]}),e.jsxs("div",{className:"legend-item",children:[e.jsx("span",{className:"legend-color current"}),e.jsx("span",{children:"Current"})]}),e.jsxs("div",{className:"legend-item",children:[e.jsx("span",{className:"legend-color visited"}),e.jsx("span",{children:"Processed"})]})]})]})]}),e.jsxs("div",{className:"visual-panel",children:[e.jsx("h2",{children:"Visualization"}),e.jsx("div",{className:"graph-container",children:n.vertices.length===0?e.jsx("div",{className:"graph-empty",children:"Loading graph..."}):e.jsxs("svg",{className:"graph-svg",viewBox:"0 0 500 350",children:[n.edges.map(([I,$,R],w)=>{const H=P[I],Y=P[$];if(!H||!Y)return null;const ee=Y.x-H.x,te=Y.y-H.y,U=Math.sqrt(ee*ee+te*te),Q=ee/U,ce=te/U,re=H.x+Q*25,je=H.y+ce*25,de=Y.x-Q*30,ln=Y.y-ce*30;return e.jsxs("g",{children:[e.jsx("defs",{children:e.jsx("marker",{id:`arrowhead-${w}`,markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#64748b"})})}),e.jsx("line",{x1:re,y1:je,x2:de,y2:ln,className:"graph-edge",markerEnd:`url(#arrowhead-${w})`})]},`edge-${w}`)}),n.vertices.map(I=>{const $=P[I];return $?e.jsxs("g",{className:F(I),children:[e.jsx("circle",{cx:$.x,cy:$.y,r:25,className:"node-circle"}),e.jsx("text",{x:$.x,y:$.y,className:"node-label",dominantBaseline:"central",textAnchor:"middle",children:I}),i[I]!==void 0&&e.jsxs("text",{x:$.x,y:$.y+38,className:"distance-label",dominantBaseline:"central",textAnchor:"middle",children:["in=",i[I]]})]},I):null})]})}),e.jsxs("div",{className:"algorithm-steps",children:[e.jsx("h3",{children:"Kahn's Algorithm Steps"}),e.jsx("div",{className:"steps-content",children:e.jsxs("ol",{children:[e.jsx("li",{className:c===0?"active":"",children:"Calculate in-degree for all vertices"}),e.jsx("li",{className:m.length>0?"active":"",children:"Add vertices with in-degree 0 to queue"}),e.jsx("li",{className:j?"active":"",children:"Dequeue vertex and add to result"}),e.jsx("li",{children:"Decrement in-degree of neighbors"}),e.jsx("li",{children:"Add neighbors with in-degree 0 to queue"}),e.jsx("li",{children:"Repeat until queue is empty"})]})})]})]})]}),e.jsx(Ce,{dataStructure:"topological"})]})}function IN(){const[n,t]=p.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=p.useState(""),[i,a]=p.useState({}),[l,o]=p.useState({}),[c,d]=p.useState([]),[u,h]=p.useState(-1),[g,b]=p.useState(0),[N,y]=p.useState(!1),[j,f]=p.useState(!1),[m,x]=p.useState(null),[C,v]=p.useState(null),[P,S]=p.useState(!1),[D,M]=p.useState({}),{message:E,showMessage:q}=Ge(3e3),K=p.useRef(null),O=p.useRef(0);p.useEffect(()=>{k()},[]),p.useEffect(()=>{n.vertices.length>0&&A()},[n.vertices]);const A=p.useCallback(()=>{const te=Math.min(500,350)*.35,U={},Q=n.vertices.length;n.vertices.forEach((ce,re)=>{const je=2*Math.PI*re/Q-Math.PI/2;U[ce]={x:250+te*Math.cos(je),y:175+te*Math.sin(je)}}),M(U)},[n.vertices]),k=async()=>{try{const w=await fe("/api/graph");w.vertices.length===0?await L("weighted"):t(w)}catch(w){console.error("Error loading graph:",w)}},L=async w=>{try{const H=await se(`/api/graph/preset/${w}`,{});if(H.error){q(H.error,"error");return}t(H),B(),q(`Loaded '${w}' preset`,"success")}catch{q("Error loading preset","error")}},V=async()=>{if(!r){q("Please select a start vertex!","error");return}try{const w=await fe(`/api/graph/bellman-ford/${r}`);if(w.error){q(w.error,"error");return}a(w.distances),o(w.paths),d(w.steps),S(w.has_negative_cycle),w.has_negative_cycle?q("Negative cycle detected in graph!","error"):q("Starting Bellman-Ford algorithm...","info"),T(w.steps)}catch{q("Error running Bellman-Ford algorithm","error")}},T=w=>{K.current&&clearInterval(K.current),y(!0),f(!1),x(null),v(null),b(0),h(-1),O.current=0,K.current=setInterval(()=>{if(O.current>=w.length){clearInterval(K.current),y(!1),x(null),v(null),P||q("Bellman-Ford algorithm complete!","success");return}const H=w[O.current];h(O.current),a(H.distances||{}),H.iteration&&b(H.iteration),H.action==="check"?(x({from:H.from,to:H.to}),v(null)):H.action==="update"?(x({from:H.from,to:H.to}),v(H.to)):H.action==="negative_cycle"?x({from:H.from,to:H.to}):(x(null),v(null)),O.current++},800)},_=()=>{j?(f(!1),z()):(f(!0),K.current&&clearInterval(K.current))},z=()=>{K.current&&clearInterval(K.current),K.current=setInterval(()=>{if(O.current>=c.length){clearInterval(K.current),y(!1),x(null),v(null);return}const w=c[O.current];h(O.current),a(w.distances||{}),w.iteration&&b(w.iteration),w.action==="check"?(x({from:w.from,to:w.to}),v(null)):w.action==="update"?(x({from:w.from,to:w.to}),v(w.to)):(x(null),v(null)),O.current++},800)},F=()=>{if(O.current>=c.length)return;const w=c[O.current];h(O.current),a(w.distances||{}),w.iteration&&b(w.iteration),w.action==="check"?(x({from:w.from,to:w.to}),v(null)):w.action==="update"?(x({from:w.from,to:w.to}),v(w.to)):(x(null),v(null)),O.current++,O.current>=c.length&&(y(!1),x(null),v(null))},B=()=>{K.current&&clearInterval(K.current),a({}),o({}),d([]),h(-1),b(0),x(null),v(null),S(!1),y(!1),f(!1),O.current=0},I=w=>C===w?"graph-node current":w===r&&!N&&Object.keys(i).length>0?"graph-node visited":"graph-node",$=(w,H)=>m&&(m.from===w&&m.to===H||m.from===H&&m.to===w)?"graph-edge checking":"graph-edge",R=()=>u>=0&&u<c.length?c[u].message:"";return e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"intro-layout",children:[e.jsxs("div",{className:"concept-box",children:[e.jsxs("div",{className:"concept-header",children:[e.jsx(Fe,{className:"icon-sm"}),e.jsx("span",{children:"What is Bellman-Ford Algorithm?"})]}),e.jsxs("div",{className:"concept-content",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Bellman-Ford Algorithm"})," finds shortest paths from a source vertex, even with negative edge weights. It can also detect negative cycles."]}),e.jsxs("div",{className:"concept-analogy",children:[e.jsx(ye,{}),e.jsx("span",{children:"Unlike Dijkstra, it checks ALL edges V-1 times - slower but handles negative weights!"})]}),e.jsxs("div",{className:"concept-operations",children:[e.jsxs("div",{className:"op-item",children:[e.jsx("span",{className:"op-name",children:"Time"}),e.jsx("span",{className:"op-desc",children:"V-1 iterations"}),e.jsx("span",{className:"op-complexity",children:"O(V*E)"})]}),e.jsxs("div",{className:"op-item",children:[e.jsx("span",{className:"op-name",children:"Space"}),e.jsx("span",{className:"op-desc",children:"Distance array"}),e.jsx("span",{className:"op-complexity",children:"O(V)"})]}),e.jsxs("div",{className:"op-item",children:[e.jsx("span",{className:"op-name",children:"Feature"}),e.jsx("span",{className:"op-desc",children:"Negative weights"}),e.jsx("span",{className:"op-complexity",children:"Supported"})]})]}),e.jsxs("div",{className:"concept-uses",children:[e.jsx("strong",{children:"Common Uses:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Currency exchange arbitrage detection"}),e.jsx("li",{children:"Network routing (RIP protocol)"}),e.jsx("li",{children:"Graphs with negative weights"}),e.jsx("li",{children:"Detecting negative cycles"})]})]})]})]}),e.jsx(be,{context:"Bellman-Ford shortest path algorithm with negative weight handling"})]}),e.jsxs("div",{className:"visualizer-layout",children:[e.jsxs("div",{className:"control-panel",children:[e.jsx("h2",{children:"Bellman-Ford Algorithm"}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{children:"Load Preset"}),e.jsxs("div",{className:"btn-group preset-group",children:[e.jsx("button",{onClick:()=>L("weighted"),className:"btn btn-preset",disabled:N,children:"Weighted"}),e.jsx("button",{onClick:()=>L("simple"),className:"btn btn-preset",disabled:N,children:"Simple"})]})]}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{children:"Start Vertex"}),e.jsxs("select",{value:r,onChange:w=>s(w.target.value),className:"vertex-select full-width",disabled:N,children:[e.jsx("option",{value:"",children:"Select start"}),n.vertices.map(w=>e.jsx("option",{value:w,children:w},w))]})]}),e.jsx("div",{className:"operation-group",children:e.jsxs("div",{className:"btn-group",children:[e.jsxs("button",{onClick:V,className:"btn btn-dijkstra",disabled:N&&!j,children:[e.jsx(ze,{size:14})," Run"]}),N&&e.jsx("button",{onClick:_,className:"btn btn-pause",children:j?e.jsx(ze,{size:14}):e.jsx(Pr,{size:14})}),j&&e.jsx("button",{onClick:F,className:"btn btn-step",children:e.jsx(Ir,{size:14})}),e.jsx("button",{onClick:B,className:"btn btn-reset",children:e.jsx(mn,{size:14})})]})}),g>0&&e.jsx("div",{className:"info-panel",children:e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Iteration:"}),e.jsxs("span",{className:"info-value",children:[g," / ",n.vertices.length-1]})]})}),Object.keys(i).length>0&&e.jsxs("div",{className:"distance-table",children:[e.jsxs("h3",{children:["Distances from ",r]}),e.jsx("div",{className:"distance-grid",children:n.vertices.map(w=>e.jsxs("div",{className:`distance-item ${C===w?"current":""}`,children:[e.jsx("span",{className:"vertex-label",children:w}),e.jsx("span",{className:"distance-value",children:i[w]==="inf"||i[w]===null?"∞":i[w]})]},w))})]}),u>=0&&e.jsxs("div",{className:"current-step-box",children:[e.jsxs("strong",{children:["Step ",u+1,":"]}),e.jsx("p",{children:R()})]}),e.jsx(Ke,{message:E}),P&&e.jsxs("div",{className:"warning-box",children:[e.jsx("strong",{children:"Negative Cycle Detected!"}),e.jsx("p",{children:"The graph contains a negative weight cycle. Shortest paths are undefined."})]}),e.jsxs("div",{className:"legend",children:[e.jsx("h3",{children:"Legend"}),e.jsxs("div",{className:"legend-items",children:[e.jsxs("div",{className:"legend-item",children:[e.jsx("span",{className:"legend-color unvisited"}),e.jsx("span",{children:"Unprocessed"})]}),e.jsxs("div",{className:"legend-item",children:[e.jsx("span",{className:"legend-color current"}),e.jsx("span",{children:"Updated"})]}),e.jsxs("div",{className:"legend-item",children:[e.jsx("span",{className:"legend-color checking"}),e.jsx("span",{children:"Checking Edge"})]})]})]})]}),e.jsxs("div",{className:"visual-panel",children:[e.jsx("h2",{children:"Visualization"}),e.jsx("div",{className:"graph-container",children:n.vertices.length===0?e.jsx("div",{className:"graph-empty",children:"Loading graph..."}):e.jsxs("svg",{className:"graph-svg",viewBox:"0 0 500 350",children:[n.edges.map(([w,H,Y],ee)=>{const te=D[w],U=D[H];if(!te||!U)return null;const Q=(te.x+U.x)/2,ce=(te.y+U.y)/2;return e.jsxs("g",{children:[e.jsx("line",{x1:te.x,y1:te.y,x2:U.x,y2:U.y,className:$(w,H)}),e.jsx("circle",{cx:Q,cy:ce,r:12,className:"weight-bg"}),e.jsx("text",{x:Q,y:ce,className:"weight-label",dominantBaseline:"central",textAnchor:"middle",children:Y})]},`edge-${ee}`)}),n.vertices.map(w=>{const H=D[w];return H?e.jsxs("g",{className:I(w),children:[e.jsx("circle",{cx:H.x,cy:H.y,r:25,className:"node-circle"}),e.jsx("text",{x:H.x,y:H.y,className:"node-label",dominantBaseline:"central",textAnchor:"middle",children:w}),i[w]!==void 0&&e.jsxs("text",{x:H.x,y:H.y+38,className:"distance-label",dominantBaseline:"central",textAnchor:"middle",children:["d=",i[w]==="inf"||i[w]===null?"∞":i[w]]})]},w):null})]})}),e.jsxs("div",{className:"algorithm-steps",children:[e.jsx("h3",{children:"Bellman-Ford vs Dijkstra"}),e.jsxs("div",{className:"comparison-table",children:[e.jsxs("div",{className:"comparison-row header",children:[e.jsx("span",{children:"Feature"}),e.jsx("span",{children:"Bellman-Ford"}),e.jsx("span",{children:"Dijkstra"})]}),e.jsxs("div",{className:"comparison-row",children:[e.jsx("span",{children:"Time Complexity"}),e.jsx("span",{children:"O(V*E)"}),e.jsx("span",{children:"O((V+E)logV)"})]}),e.jsxs("div",{className:"comparison-row",children:[e.jsx("span",{children:"Negative Weights"}),e.jsx("span",{className:"yes",children:"Yes"}),e.jsx("span",{className:"no",children:"No"})]}),e.jsxs("div",{className:"comparison-row",children:[e.jsx("span",{children:"Detects Neg. Cycles"}),e.jsx("span",{className:"yes",children:"Yes"}),e.jsx("span",{className:"no",children:"No"})]})]})]}),Object.keys(l).length>0&&!N&&!P&&e.jsxs("div",{className:"paths-section",children:[e.jsxs("h3",{children:["Shortest Paths from ",r]}),e.jsx("div",{className:"paths-list",children:Object.entries(l).map(([w,H])=>e.jsxs("div",{className:"path-item",children:[e.jsxs("span",{className:"path-target",children:[w,":"]}),e.jsx("span",{className:"path-route",children:H.join(" → ")}),e.jsxs("span",{className:"path-distance",children:["(dist: ",i[w]===null?"∞":i[w],")"]})]},w))})]})]})]}),e.jsx(Ce,{dataStructure:"bellman-ford"})]})}function zN(){const[n,t]=p.useState({vertices:[],edges:[],adjacency_list:{}}),[r,s]=p.useState([]),[i,a]=p.useState([]),[l,o]=p.useState(0),[c,d]=p.useState([]),[u,h]=p.useState([]),[g,b]=p.useState(-1),[N,y]=p.useState(!1),[j,f]=p.useState(!1),[m,x]=p.useState(null),[C,v]=p.useState({}),{message:P,showMessage:S}=Ge(3e3),D=p.useRef(null),M=p.useRef(0);p.useEffect(()=>{q()},[]),p.useEffect(()=>{n.vertices.length>0&&E()},[n.vertices]);const E=p.useCallback(()=>{const Y=Math.min(500,350)*.35,ee={},te=n.vertices.length;n.vertices.forEach((U,Q)=>{const ce=2*Math.PI*Q/te-Math.PI/2;ee[U]={x:250+Y*Math.cos(ce),y:175+Y*Math.sin(ce)}}),v(ee)},[n.vertices]),q=async()=>{try{const $=await fe("/api/graph");$.vertices.length===0?await K("weighted"):t($)}catch($){console.error("Error loading graph:",$)}},K=async $=>{try{const R=await se(`/api/graph/preset/${$}`,{});if(R.error){S(R.error,"error");return}t(R),T(),S(`Loaded '${$}' preset`,"success")}catch{S("Error loading preset","error")}},O=async()=>{try{const $=await fe("/api/graph/kruskal");if($.error){S($.error,"error");return}h($.steps);const R=$.steps.find(w=>w.action==="init");R&&d(R.edges_sorted||[]),S("Starting Kruskal's MST algorithm...","info"),A($.steps,$.mst_edges,$.total_weight)}catch{S("Error running Kruskal's algorithm","error")}},A=($,R,w)=>{D.current&&clearInterval(D.current),y(!0),f(!1),s([]),a([]),o(0),x(null),b(-1),M.current=0,D.current=setInterval(()=>{if(M.current>=$.length){clearInterval(D.current),y(!1),x(null),s(R),o(w),S(`MST complete! Total weight: ${w}`,"success");return}const H=$[M.current];b(M.current),s(H.mst_edges||[]),o(H.total_weight||0),H.action==="consider"?x({from:H.from,to:H.to,weight:H.weight}):(H.action==="add"||H.action==="reject"&&a(Y=>[...Y,{from:H.from,to:H.to,weight:H.weight}]),x(null)),M.current++},1e3)},k=()=>{j?(f(!1),L()):(f(!0),D.current&&clearInterval(D.current))},L=()=>{D.current&&clearInterval(D.current),D.current=setInterval(()=>{if(M.current>=u.length){clearInterval(D.current),y(!1),x(null);return}const $=u[M.current];b(M.current),s($.mst_edges||[]),o($.total_weight||0),$.action==="consider"?x({from:$.from,to:$.to,weight:$.weight}):($.action==="add"||$.action==="reject"&&a(R=>[...R,{from:$.from,to:$.to,weight:$.weight}]),x(null)),M.current++},1e3)},V=()=>{if(M.current>=u.length)return;const $=u[M.current];b(M.current),s($.mst_edges||[]),o($.total_weight||0),$.action==="consider"?x({from:$.from,to:$.to,weight:$.weight}):($.action==="add"||$.action==="reject"&&a(R=>[...R,{from:$.from,to:$.to,weight:$.weight}]),x(null)),M.current++,M.current>=u.length&&(y(!1),x(null))},T=()=>{D.current&&clearInterval(D.current),s([]),a([]),o(0),d([]),h([]),b(-1),x(null),y(!1),f(!1),M.current=0},_=($,R)=>r.some(([w,H])=>w===$&&H===R||w===R&&H===$),z=($,R)=>i.some(w=>w.from===$&&w.to===R||w.from===R&&w.to===$),F=$=>r.some(([w,H])=>w===$||H===$)?"graph-node visited":"graph-node",B=($,R)=>m&&(m.from===$&&m.to===R||m.from===R&&m.to===$)?"graph-edge considering":_($,R)?"graph-edge mst":z($,R)?"graph-edge rejected":"graph-edge",I=()=>g>=0&&g<u.length?u[g].message:"";return e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"intro-layout",children:[e.jsxs("div",{className:"concept-box",children:[e.jsxs("div",{className:"concept-header",children:[e.jsx(Fe,{className:"icon-sm"}),e.jsx("span",{children:"What is Kruskal's Algorithm?"})]}),e.jsxs("div",{className:"concept-content",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Kruskal's Algorithm"})," builds the MST by sorting all edges by weight and adding them if they don't create a cycle (using Union-Find)."]}),e.jsxs("div",{className:"concept-analogy",children:[e.jsx(ye,{}),e.jsx("span",{children:"Like building a network by always picking the cheapest cable that connects new areas!"})]}),e.jsxs("div",{className:"concept-operations",children:[e.jsxs("div",{className:"op-item",children:[e.jsx("span",{className:"op-name",children:"Time"}),e.jsx("span",{className:"op-desc",children:"Sort + Union-Find"}),e.jsx("span",{className:"op-complexity",children:"O(E log E)"})]}),e.jsxs("div",{className:"op-item",children:[e.jsx("span",{className:"op-name",children:"Space"}),e.jsx("span",{className:"op-desc",children:"Union-Find array"}),e.jsx("span",{className:"op-complexity",children:"O(V)"})]}),e.jsxs("div",{className:"op-item",children:[e.jsx("span",{className:"op-name",children:"Strategy"}),e.jsx("span",{className:"op-desc",children:"Global greedy"}),e.jsx("span",{className:"op-complexity",children:"Min edge"})]})]}),e.jsxs("div",{className:"concept-uses",children:[e.jsx("strong",{children:"Kruskal vs Prim:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Better for sparse graphs (fewer edges)"}),e.jsx("li",{children:"Processes edges globally, not locally"}),e.jsx("li",{children:"Uses Union-Find for cycle detection"}),e.jsx("li",{children:"Easier to parallelize"})]})]})]})]}),e.jsx(be,{context:"Kruskal's Minimum Spanning Tree algorithm with Union-Find"})]}),e.jsxs("div",{className:"visualizer-layout",children:[e.jsxs("div",{className:"control-panel",children:[e.jsx("h2",{children:"Kruskal's MST Algorithm"}),e.jsxs("div",{className:"operation-group",children:[e.jsx("label",{children:"Load Preset"}),e.jsxs("div",{className:"btn-group preset-group",children:[e.jsx("button",{onClick:()=>K("weighted"),className:"btn btn-preset",disabled:N,children:"Weighted"}),e.jsx("button",{onClick:()=>K("complete"),className:"btn btn-preset",disabled:N,children:"Complete"})]})]}),e.jsx("div",{className:"operation-group",children:e.jsxs("div",{className:"btn-group",children:[e.jsxs("button",{onClick:O,className:"btn btn-mst",disabled:N&&!j,children:[e.jsx(ze,{size:14})," Run Kruskal's"]}),N&&e.jsx("button",{onClick:k,className:"btn btn-pause",children:j?e.jsx(ze,{size:14}):e.jsx(Pr,{size:14})}),j&&e.jsx("button",{onClick:V,className:"btn btn-step",children:e.jsx(Ir,{size:14})}),e.jsx("button",{onClick:T,className:"btn btn-reset",children:e.jsx(mn,{size:14})})]})}),e.jsxs("div",{className:"info-panel",children:[e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"MST Edges:"}),e.jsxs("span",{className:"info-value",children:[r.length," / ",n.vertices.length-1]})]}),e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Total Weight:"}),e.jsx("span",{className:"info-value mst-weight",children:l})]}),e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"info-label",children:"Rejected:"}),e.jsx("span",{className:"info-value",children:i.length})]})]}),c.length>0&&e.jsxs("div",{className:"sorted-edges-panel",children:[e.jsx("h3",{children:"Edges (sorted by weight)"}),e.jsx("div",{className:"sorted-edges-list",children:c.map(([$,R,w],H)=>{const Y=_($,R),ee=z($,R);return e.jsxs("div",{className:`sorted-edge-item ${Y?"in-mst":""} ${ee?"rejected":""}`,children:[e.jsxs("span",{children:[$,"—",R]}),e.jsxs("span",{className:"edge-weight",children:["w=",w]})]},H)})})]}),g>=0&&e.jsxs("div",{className:"current-step-box",children:[e.jsxs("strong",{children:["Step ",g+1,":"]}),e.jsx("p",{children:I()})]}),e.jsx(Ke,{message:P}),e.jsxs("div",{className:"legend",children:[e.jsx("h3",{children:"Legend"}),e.jsxs("div",{className:"legend-items",children:[e.jsxs("div",{className:"legend-item",children:[e.jsx("span",{className:"legend-color unvisited"}),e.jsx("span",{children:"Unconnected"})]}),e.jsxs("div",{className:"legend-item",children:[e.jsx("span",{className:"legend-color visited"}),e.jsx("span",{children:"In MST"})]}),e.jsxs("div",{className:"legend-item",children:[e.jsx("span",{className:"legend-line considering"}),e.jsx("span",{children:"Considering"})]}),e.jsxs("div",{className:"legend-item",children:[e.jsx("span",{className:"legend-line mst"}),e.jsx("span",{children:"MST Edge"})]}),e.jsxs("div",{className:"legend-item",children:[e.jsx("span",{className:"legend-line rejected"}),e.jsx("span",{children:"Rejected (cycle)"})]})]})]})]}),e.jsxs("div",{className:"visual-panel",children:[e.jsx("h2",{children:"Visualization"}),e.jsx("div",{className:"graph-container",children:n.vertices.length===0?e.jsx("div",{className:"graph-empty",children:"Loading graph..."}):e.jsxs("svg",{className:"graph-svg",viewBox:"0 0 500 350",children:[n.edges.map(([$,R,w],H)=>{const Y=C[$],ee=C[R];if(!Y||!ee)return null;const te=(Y.x+ee.x)/2,U=(Y.y+ee.y)/2;return e.jsxs("g",{children:[e.jsx("line",{x1:Y.x,y1:Y.y,x2:ee.x,y2:ee.y,className:B($,R)}),e.jsx("circle",{cx:te,cy:U,r:12,className:"weight-bg"}),e.jsx("text",{x:te,y:U,className:"weight-label",dominantBaseline:"central",textAnchor:"middle",children:w})]},`edge-${H}`)}),n.vertices.map($=>{const R=C[$];return R?e.jsxs("g",{className:F($),children:[e.jsx("circle",{cx:R.x,cy:R.y,r:25,className:"node-circle"}),e.jsx("text",{x:R.x,y:R.y,className:"node-label",dominantBaseline:"central",textAnchor:"middle",children:$})]},$):null})]})}),e.jsxs("div",{className:"algorithm-steps",children:[e.jsx("h3",{children:"Kruskal vs Prim"}),e.jsxs("div",{className:"comparison-table",children:[e.jsxs("div",{className:"comparison-row header",children:[e.jsx("span",{children:"Feature"}),e.jsx("span",{children:"Kruskal's"}),e.jsx("span",{children:"Prim's"})]}),e.jsxs("div",{className:"comparison-row",children:[e.jsx("span",{children:"Time Complexity"}),e.jsx("span",{children:"O(E log E)"}),e.jsx("span",{children:"O((V+E)logV)"})]}),e.jsxs("div",{className:"comparison-row",children:[e.jsx("span",{children:"Best for"}),e.jsx("span",{children:"Sparse graphs"}),e.jsx("span",{children:"Dense graphs"})]}),e.jsxs("div",{className:"comparison-row",children:[e.jsx("span",{children:"Data Structure"}),e.jsx("span",{children:"Union-Find"}),e.jsx("span",{children:"Priority Queue"})]}),e.jsxs("div",{className:"comparison-row",children:[e.jsx("span",{children:"Strategy"}),e.jsx("span",{children:"Global (all edges)"}),e.jsx("span",{children:"Local (neighbors)"})]})]})]}),r.length>0&&e.jsxs("div",{className:"mst-edges-section",children:[e.jsx("h3",{children:"MST Edges"}),e.jsx("div",{className:"mst-edges-list",children:r.map(([$,R,w],H)=>e.jsxs("div",{className:"mst-edge-item",children:[e.jsxs("span",{children:[$," — ",R]}),e.jsxs("span",{className:"edge-weight",children:["(w: ",w,")"]})]},H))}),e.jsx("div",{className:"mst-total",children:e.jsxs("strong",{children:["Total MST Weight: ",l]})})]})]})]}),e.jsx(Ce,{dataStructure:"kruskal"})]})}function Xd(n,t){(t==null||t>n.length)&&(t=n.length);for(var r=0,s=Array(t);r<t;r++)s[r]=n[r];return s}function MN(n){if(Array.isArray(n))return n}function AN(n,t,r){return(t=HN(t))in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}function FN(n,t){var r=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(r!=null){var s,i,a,l,o=[],c=!0,d=!1;try{if(a=(r=r.call(n)).next,t!==0)for(;!(c=(s=a.call(r)).done)&&(o.push(s.value),o.length!==t);c=!0);}catch(u){d=!0,i=u}finally{try{if(!c&&r.return!=null&&(l=r.return(),Object(l)!==l))return}finally{if(d)throw i}}return o}}function DN(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Yd(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),r.push.apply(r,s)}return r}function Jd(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Yd(Object(r),!0).forEach(function(s){AN(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):Yd(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function VN(n,t){if(n==null)return{};var r,s,i=$N(n,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(n,r)&&(i[r]=n[r])}return i}function $N(n,t){if(n==null)return{};var r={};for(var s in n)if({}.hasOwnProperty.call(n,s)){if(t.indexOf(s)!==-1)continue;r[s]=n[s]}return r}function BN(n,t){return MN(n)||FN(n,t)||UN(n,t)||DN()}function qN(n,t){if(typeof n!="object"||!n)return n;var r=n[Symbol.toPrimitive];if(r!==void 0){var s=r.call(n,t);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}function HN(n){var t=qN(n,"string");return typeof t=="symbol"?t:t+""}function UN(n,t){if(n){if(typeof n=="string")return Xd(n,t);var r={}.toString.call(n).slice(8,-1);return r==="Object"&&n.constructor&&(r=n.constructor.name),r==="Map"||r==="Set"?Array.from(n):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Xd(n,t):void 0}}function WN(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}function Zd(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),r.push.apply(r,s)}return r}function eu(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Zd(Object(r),!0).forEach(function(s){WN(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):Zd(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function KN(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return function(s){return t.reduceRight(function(i,a){return a(i)},s)}}function Jr(n){return function t(){for(var r=this,s=arguments.length,i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];return i.length>=n.length?n.apply(this,i):function(){for(var l=arguments.length,o=new Array(l),c=0;c<l;c++)o[c]=arguments[c];return t.apply(r,[].concat(i,o))}}}function Ki(n){return{}.toString.call(n).includes("Object")}function GN(n){return!Object.keys(n).length}function _s(n){return typeof n=="function"}function QN(n,t){return Object.prototype.hasOwnProperty.call(n,t)}function XN(n,t){return Ki(t)||mt("changeType"),Object.keys(t).some(function(r){return!QN(n,r)})&&mt("changeField"),t}function YN(n){_s(n)||mt("selectorType")}function JN(n){_s(n)||Ki(n)||mt("handlerType"),Ki(n)&&Object.values(n).some(function(t){return!_s(t)})&&mt("handlersType")}function ZN(n){n||mt("initialIsRequired"),Ki(n)||mt("initialType"),GN(n)&&mt("initialContent")}function eb(n,t){throw new Error(n[t]||n.default)}var nb={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},mt=Jr(eb)(nb),ri={changes:XN,selector:YN,handler:JN,initial:ZN};function tb(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};ri.initial(n),ri.handler(t);var r={current:n},s=Jr(ib)(r,t),i=Jr(sb)(r),a=Jr(ri.changes)(n),l=Jr(rb)(r);function o(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(u){return u};return ri.selector(d),d(r.current)}function c(d){KN(s,i,a,l)(d)}return[o,c]}function rb(n,t){return _s(t)?t(n.current):t}function sb(n,t){return n.current=eu(eu({},n.current),t),t}function ib(n,t,r){return _s(t)?t(n.current):Object.keys(r).forEach(function(s){var i;return(i=t[s])===null||i===void 0?void 0:i.call(t,n.current[s])}),r}var ab={create:tb},lb={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function ob(n){return function t(){for(var r=this,s=arguments.length,i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];return i.length>=n.length?n.apply(this,i):function(){for(var l=arguments.length,o=new Array(l),c=0;c<l;c++)o[c]=arguments[c];return t.apply(r,[].concat(i,o))}}}function cb(n){return{}.toString.call(n).includes("Object")}function db(n){return n||nu("configIsRequired"),cb(n)||nu("configType"),n.urls?(ub(),{paths:{vs:n.urls.monacoBase}}):n}function ub(){console.warn(Qp.deprecation)}function hb(n,t){throw new Error(n[t]||n.default)}var Qp={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},nu=ob(hb)(Qp),pb={config:db},fb=function(){for(var t=arguments.length,r=new Array(t),s=0;s<t;s++)r[s]=arguments[s];return function(i){return r.reduceRight(function(a,l){return l(a)},i)}};function Xp(n,t){return Object.keys(t).forEach(function(r){t[r]instanceof Object&&n[r]&&Object.assign(t[r],Xp(n[r],t[r]))}),Jd(Jd({},n),t)}var mb={type:"cancelation",msg:"operation is manually canceled"};function Va(n){var t=!1,r=new Promise(function(s,i){n.then(function(a){return t?i(mb):s(a)}),n.catch(i)});return r.cancel=function(){return t=!0},r}var gb=["monaco"],xb=ab.create({config:lb,isInitialized:!1,resolve:null,reject:null,monaco:null}),Yp=BN(xb,2),Fs=Yp[0],ua=Yp[1];function vb(n){var t=pb.config(n),r=t.monaco,s=VN(t,gb);ua(function(i){return{config:Xp(i.config,s),monaco:r}})}function yb(){var n=Fs(function(t){var r=t.monaco,s=t.isInitialized,i=t.resolve;return{monaco:r,isInitialized:s,resolve:i}});if(!n.isInitialized){if(ua({isInitialized:!0}),n.monaco)return n.resolve(n.monaco),Va($a);if(window.monaco&&window.monaco.editor)return Jp(window.monaco),n.resolve(window.monaco),Va($a);fb(jb,bb)(kb)}return Va($a)}function jb(n){return document.body.appendChild(n)}function Nb(n){var t=document.createElement("script");return n&&(t.src=n),t}function bb(n){var t=Fs(function(s){var i=s.config,a=s.reject;return{config:i,reject:a}}),r=Nb("".concat(t.config.paths.vs,"/loader.js"));return r.onload=function(){return n()},r.onerror=t.reject,r}function kb(){var n=Fs(function(r){var s=r.config,i=r.resolve,a=r.reject;return{config:s,resolve:i,reject:a}}),t=window.require;t.config(n.config),t(["vs/editor/editor.main"],function(r){var s=r.m||r;Jp(s),n.resolve(s)},function(r){n.reject(r)})}function Jp(n){Fs().monaco||ua({monaco:n})}function wb(){return Fs(function(n){var t=n.monaco;return t})}var $a=new Promise(function(n,t){return ua({resolve:n,reject:t})}),Zp={config:vb,init:yb,__getMonacoInstance:wb},Sb={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},Ba=Sb,Cb={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},Tb=Cb;function _b({children:n}){return _e.createElement("div",{style:Tb.container},n)}var Lb=_b,Eb=Lb;function Ob({width:n,height:t,isEditorReady:r,loading:s,_ref:i,className:a,wrapperProps:l}){return _e.createElement("section",{style:{...Ba.wrapper,width:n,height:t},...l},!r&&_e.createElement(Eb,null,s),_e.createElement("div",{ref:i,style:{...Ba.fullWidth,...!r&&Ba.hide},className:a}))}var Rb=Ob,ef=p.memo(Rb);function Pb(n){p.useEffect(n,[])}var nf=Pb;function Ib(n,t,r=!0){let s=p.useRef(!0);p.useEffect(s.current||!r?()=>{s.current=!1}:n,t)}var cn=Ib;function os(){}function fr(n,t,r,s){return zb(n,s)||Mb(n,t,r,s)}function zb(n,t){return n.editor.getModel(tf(n,t))}function Mb(n,t,r,s){return n.editor.createModel(t,r,s?tf(n,s):void 0)}function tf(n,t){return n.Uri.parse(t)}function Ab({original:n,modified:t,language:r,originalLanguage:s,modifiedLanguage:i,originalModelPath:a,modifiedModelPath:l,keepCurrentOriginalModel:o=!1,keepCurrentModifiedModel:c=!1,theme:d="light",loading:u="Loading...",options:h={},height:g="100%",width:b="100%",className:N,wrapperProps:y={},beforeMount:j=os,onMount:f=os}){let[m,x]=p.useState(!1),[C,v]=p.useState(!0),P=p.useRef(null),S=p.useRef(null),D=p.useRef(null),M=p.useRef(f),E=p.useRef(j),q=p.useRef(!1);nf(()=>{let k=Zp.init();return k.then(L=>(S.current=L)&&v(!1)).catch(L=>(L==null?void 0:L.type)!=="cancelation"&&console.error("Monaco initialization: error:",L)),()=>P.current?A():k.cancel()}),cn(()=>{if(P.current&&S.current){let k=P.current.getOriginalEditor(),L=fr(S.current,n||"",s||r||"text",a||"");L!==k.getModel()&&k.setModel(L)}},[a],m),cn(()=>{if(P.current&&S.current){let k=P.current.getModifiedEditor(),L=fr(S.current,t||"",i||r||"text",l||"");L!==k.getModel()&&k.setModel(L)}},[l],m),cn(()=>{let k=P.current.getModifiedEditor();k.getOption(S.current.editor.EditorOption.readOnly)?k.setValue(t||""):t!==k.getValue()&&(k.executeEdits("",[{range:k.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),k.pushUndoStop())},[t],m),cn(()=>{var k,L;(L=(k=P.current)==null?void 0:k.getModel())==null||L.original.setValue(n||"")},[n],m),cn(()=>{let{original:k,modified:L}=P.current.getModel();S.current.editor.setModelLanguage(k,s||r||"text"),S.current.editor.setModelLanguage(L,i||r||"text")},[r,s,i],m),cn(()=>{var k;(k=S.current)==null||k.editor.setTheme(d)},[d],m),cn(()=>{var k;(k=P.current)==null||k.updateOptions(h)},[h],m);let K=p.useCallback(()=>{var V;if(!S.current)return;E.current(S.current);let k=fr(S.current,n||"",s||r||"text",a||""),L=fr(S.current,t||"",i||r||"text",l||"");(V=P.current)==null||V.setModel({original:k,modified:L})},[r,t,i,n,s,a,l]),O=p.useCallback(()=>{var k;!q.current&&D.current&&(P.current=S.current.editor.createDiffEditor(D.current,{automaticLayout:!0,...h}),K(),(k=S.current)==null||k.editor.setTheme(d),x(!0),q.current=!0)},[h,d,K]);p.useEffect(()=>{m&&M.current(P.current,S.current)},[m]),p.useEffect(()=>{!C&&!m&&O()},[C,m,O]);function A(){var L,V,T,_;let k=(L=P.current)==null?void 0:L.getModel();o||((V=k==null?void 0:k.original)==null||V.dispose()),c||((T=k==null?void 0:k.modified)==null||T.dispose()),(_=P.current)==null||_.dispose()}return _e.createElement(ef,{width:b,height:g,isEditorReady:m,loading:u,_ref:D,className:N,wrapperProps:y})}var Fb=Ab;p.memo(Fb);function Db(n){let t=p.useRef();return p.useEffect(()=>{t.current=n},[n]),t.current}var Vb=Db,si=new Map;function $b({defaultValue:n,defaultLanguage:t,defaultPath:r,value:s,language:i,path:a,theme:l="light",line:o,loading:c="Loading...",options:d={},overrideServices:u={},saveViewState:h=!0,keepCurrentModel:g=!1,width:b="100%",height:N="100%",className:y,wrapperProps:j={},beforeMount:f=os,onMount:m=os,onChange:x,onValidate:C=os}){let[v,P]=p.useState(!1),[S,D]=p.useState(!0),M=p.useRef(null),E=p.useRef(null),q=p.useRef(null),K=p.useRef(m),O=p.useRef(f),A=p.useRef(),k=p.useRef(s),L=Vb(a),V=p.useRef(!1),T=p.useRef(!1);nf(()=>{let F=Zp.init();return F.then(B=>(M.current=B)&&D(!1)).catch(B=>(B==null?void 0:B.type)!=="cancelation"&&console.error("Monaco initialization: error:",B)),()=>E.current?z():F.cancel()}),cn(()=>{var B,I,$,R;let F=fr(M.current,n||s||"",t||i||"",a||r||"");F!==((B=E.current)==null?void 0:B.getModel())&&(h&&si.set(L,(I=E.current)==null?void 0:I.saveViewState()),($=E.current)==null||$.setModel(F),h&&((R=E.current)==null||R.restoreViewState(si.get(a))))},[a],v),cn(()=>{var F;(F=E.current)==null||F.updateOptions(d)},[d],v),cn(()=>{!E.current||s===void 0||(E.current.getOption(M.current.editor.EditorOption.readOnly)?E.current.setValue(s):s!==E.current.getValue()&&(T.current=!0,E.current.executeEdits("",[{range:E.current.getModel().getFullModelRange(),text:s,forceMoveMarkers:!0}]),E.current.pushUndoStop(),T.current=!1))},[s],v),cn(()=>{var B,I;let F=(B=E.current)==null?void 0:B.getModel();F&&i&&((I=M.current)==null||I.editor.setModelLanguage(F,i))},[i],v),cn(()=>{var F;o!==void 0&&((F=E.current)==null||F.revealLine(o))},[o],v),cn(()=>{var F;(F=M.current)==null||F.editor.setTheme(l)},[l],v);let _=p.useCallback(()=>{var F;if(!(!q.current||!M.current)&&!V.current){O.current(M.current);let B=a||r,I=fr(M.current,s||n||"",t||i||"",B||"");E.current=(F=M.current)==null?void 0:F.editor.create(q.current,{model:I,automaticLayout:!0,...d},u),h&&E.current.restoreViewState(si.get(B)),M.current.editor.setTheme(l),o!==void 0&&E.current.revealLine(o),P(!0),V.current=!0}},[n,t,r,s,i,a,d,u,h,l,o]);p.useEffect(()=>{v&&K.current(E.current,M.current)},[v]),p.useEffect(()=>{!S&&!v&&_()},[S,v,_]),k.current=s,p.useEffect(()=>{var F,B;v&&x&&((F=A.current)==null||F.dispose(),A.current=(B=E.current)==null?void 0:B.onDidChangeModelContent(I=>{T.current||x(E.current.getValue(),I)}))},[v,x]),p.useEffect(()=>{if(v){let F=M.current.editor.onDidChangeMarkers(B=>{var $;let I=($=E.current.getModel())==null?void 0:$.uri;if(I&&B.find(R=>R.path===I.path)){let R=M.current.editor.getModelMarkers({resource:I});C==null||C(R)}});return()=>{F==null||F.dispose()}}return()=>{}},[v,C]);function z(){var F,B;(F=A.current)==null||F.dispose(),g?h&&si.set(a,E.current.saveViewState()):(B=E.current.getModel())==null||B.dispose(),E.current.dispose()}return _e.createElement(ef,{width:b,height:N,isEditorReady:v,loading:c,_ref:q,className:y,wrapperProps:j})}var Bb=$b,qb=p.memo(Bb),rf=qb;const tu={python:{monacoLang:"python",defaultCode:`def solution(nums):
    # Write your solution here
    pass
`}};function Hb({language:n,code:t,onChange:r,decorations:s=[],onEditorMount:i,theme:a="vs-dark"}){const l=tu[n]||tu.python,o=p.useRef(null),c=p.useRef(null),d=p.useRef([]),u=(b,N)=>{o.current=b,c.current=N,i&&i(b,N)};p.useEffect(()=>{if(o.current&&c.current){const b=o.current,N=c.current;if(d.current=b.deltaDecorations(d.current,[]),s.length>0){const y=s.map(j=>({range:new N.Range(j.startLine,1,j.endLine,1),options:{isWholeLine:!0,className:j.className||"ai-code-issue-highlight",glyphMarginClassName:j.glyphClassName||"ai-code-issue-glyph",hoverMessage:{value:j.hoverMessage}}}));d.current=b.deltaDecorations([],y)}}},[s]);const h=b=>{r(b||"")},g={minimap:{enabled:!1},fontSize:14,fontFamily:"'Fira Code', 'JetBrains Mono', Consolas, monospace",fontLigatures:!0,lineNumbers:"on",roundedSelection:!0,scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,wordWrap:"on",padding:{top:16,bottom:16},glyphMargin:!0,suggest:{showKeywords:!0,showSnippets:!0}};return e.jsx("div",{className:"code-editor-container",children:e.jsx(rf,{height:"400px",language:l.monacoLang,value:t,theme:a,onMount:u,onChange:h,options:g,loading:e.jsx("div",{className:"editor-loading",children:"Loading editor..."})})})}const qa=[{id:"arrays-hashing",title:"Arrays & Hashing",icon:"grid",color:"#10b981",description:"Foundation of DSA - array manipulation and hash maps",problems:["two-sum","valid-anagram","contains-duplicate","group-anagrams"]},{id:"two-pointers",title:"Two Pointers",icon:"pointer",color:"#3b82f6",description:"Efficient array traversal techniques",problems:["valid-palindrome","two-sum-sorted","container-with-most-water"]},{id:"stack",title:"Stack",icon:"layers",color:"#8b5cf6",description:"LIFO data structure problems",problems:["valid-parentheses","min-stack","evaluate-reverse-polish-notation"]},{id:"binary-search",title:"Binary Search",icon:"search",color:"#f59e0b",description:"Divide and conquer search technique",problems:["binary-search","search-rotated-array","find-minimum-in-rotated-sorted-array"]},{id:"linked-list",title:"Linked List",icon:"link",color:"#ec4899",description:"Pointer-based data structures",problems:["reverse-linked-list","merge-two-lists","linked-list-cycle","reorder-list"]},{id:"trees",title:"Trees",icon:"tree",color:"#14b8a6",description:"Hierarchical data structures",problems:["invert-tree","max-depth-tree","same-tree","kth-smallest-element-in-a-bst"]},{id:"graphs",title:"Graphs",icon:"network",color:"#6366f1",description:"Graph traversal and algorithms",problems:["bfs-traversal","dfs-traversal","number-of-islands"]},{id:"dynamic-programming",title:"Dynamic Programming",icon:"puzzle",color:"#ef4444",description:"Optimization through memoization",problems:["climbing-stairs","house-robber"]},{id:"sorting",title:"Sorting",icon:"sort",color:"#84cc16",description:"Classic sorting algorithms",problems:["merge-sort","quick-sort"]}],Qt={"two-sum":{id:"two-sum",title:"Two Sum",difficulty:"Easy",category:"Arrays & Hashing",description:"Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\n\nYou can return the answer in any order.",examples:[{input:"nums = [2,7,11,15], target = 9",output:"[0,1]",explanation:"Because nums[0] + nums[1] == 9, we return [0, 1]."},{input:"nums = [3,2,4], target = 6",output:"[1,2]",explanation:"Because nums[1] + nums[2] == 6, we return [1, 2]."}],constraints:["2 <= nums.length <= 10^4","-10^9 <= nums[i] <= 10^9","Only one valid answer exists."],testCases:[{input:"[2,7,11,15], 9",expected:"[0, 1]"},{input:"[3,2,4], 6",expected:"[1, 2]"},{input:"[3,3], 6",expected:"[0, 1]"}],starterCode:{python:`class Solution:
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

print(solution([3,6,8,10,1,2,1]))`}},hints:["Pick a pivot (last element is common).","Partition: smaller left, larger right.","Recurse on both partitions."]}},sf=Object.values(Qt);[...new Set(sf.map(n=>n.category))];const Ha={grid:Yx,pointer:sv,layers:mc,search:Bt,link:Zl,tree:Xx,network:iv,puzzle:av,sort:Bx};function ru(){const{problemId:n}=hx(),t=Pp(),[r,s]=p.useState(null),[i,a]=p.useState("python"),[l,o]=p.useState(""),[c,d]=p.useState(!1),[u,h]=p.useState(null),[g,b]=p.useState(null),[N,y]=p.useState(!1),[j,f]=p.useState(0),[m,x]=p.useState("description"),[C,v]=p.useState(!n),[P,S]=p.useState(()=>{const U=localStorage.getItem("completedProblems");return U?JSON.parse(U):[]}),[D,M]=p.useState(null),[E,q]=p.useState("map"),[K,O]=p.useState(null),[A,k]=p.useState(null),[L,V]=p.useState(!1),[T,_]=p.useState(null),[z,F]=p.useState(null),[B,I]=p.useState([]),$=p.useRef(null);p.useEffect(()=>{$.current&&($.current.scrollTop=0)},[m,r]);const R=async()=>{if(l.trim()){V(!0),_(null),F(null),I([]);try{const U=await fetch("/api/code-review",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:l,language:i})}),Q=await U.json();if(U.ok){if(_(Q),Q.optimizations&&Array.isArray(Q.optimizations)){const ce=Q.optimizations.map(re=>({startLine:re.startLine,endLine:re.endLine,className:"ai-code-issue-highlight",glyphClassName:"ai-code-issue-glyph",hoverMessage:`**Issue:** ${re.issue}

**Suggestion:** ${re.suggestion}`}));I(ce)}x("ai")}else F(Q.error||`Review failed (${U.status})`),x("ai")}catch{F("Could not reach the review service. Is the server running?"),x("ai")}finally{V(!1)}}};p.useEffect(()=>{localStorage.setItem("completedProblems",JSON.stringify(P))},[P]),p.useEffect(()=>{if(n&&Qt[n]){const U=Qt[n];s(U),o(U.starterCode[i]||U.starterCode.python),h(null),b(null),y(!1),f(0),v(!1),window.scrollTo(0,0)}else n||(v(!0),window.scrollTo(0,0))},[n]),p.useEffect(()=>{r&&o(r.starterCode[i]||r.starterCode.python)},[i,r]);const w=U=>{P.includes(U)||S([...P,U])},H=async()=>{d(!0),h(null),b(null);try{const Q=await(await fetch("/api/practice/execute",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({language:i,code:l})})).json();h({stdout:Q.output||"",stderr:Q.error||"",success:Q.success})}catch(U){h({stdout:"",stderr:`Error: ${U.message}`,success:!1})}finally{d(!1)}},Y=async()=>{if(r){d(!0),h(null),b(null);try{const Q=await(await fetch("/api/practice/run-tests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({language:i,code:l,testCases:r.testCases,functionName:"solution"})})).json();b(Q),Q.allPassed&&w(r.id)}catch(U){h({stdout:"",stderr:`Error running tests: ${U.message}`,success:!1})}finally{d(!1)}}},ee=()=>{r&&(o(r.starterCode[i]||r.starterCode.python),h(null),b(null))},te=()=>{r&&j<r.hints.length&&(y(!0),f(U=>Math.min(U+1,r.hints.length)))};if(C){const U=sf.length,Q=P.length,ce=Math.round(Q/U*100);return e.jsx("div",{className:"practice-container",children:e.jsxs("div",{className:"roadmap-page",children:[e.jsxs("div",{className:"roadmap-header",children:[e.jsxs("div",{className:"roadmap-title",children:[e.jsx(Kd,{size:32}),e.jsxs("div",{children:[e.jsx("h1",{children:"DSA Roadmap"}),e.jsx("p",{children:"Master data structures and algorithms step by step"})]})]}),e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:e.jsxs("div",{className:"progress-stats",children:[e.jsxs("div",{className:"progress-circle",children:[e.jsxs("svg",{viewBox:"0 0 36 36",children:[e.jsx("path",{className:"progress-bg",d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"}),e.jsx("path",{className:"progress-fill",strokeDasharray:`${ce}, 100`,d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"})]}),e.jsxs("span",{className:"progress-text",children:[ce,"%"]})]}),e.jsxs("div",{className:"progress-info",children:[e.jsxs("span",{className:"completed-count",children:[Q,"/",U]}),e.jsx("span",{className:"completed-label",children:"Problems Solved"})]})]})})]}),E==="map"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"roadmap-visual-map",children:qa.map(re=>{const je=re.problems.map(ue=>Qt[ue]).filter(Boolean),de=je.filter(ue=>P.includes(ue.id)).length,ln=Math.round(de/je.length*100),Z=D===re.id;return e.jsxs("div",{className:`map-node ${Z?"active":""}`,style:{"--node-color":re.color},onClick:()=>M(Z?null:re.id),children:[de===je.length?e.jsx("div",{className:"map-node-badge completed",children:e.jsx(en,{size:14})}):de>0?e.jsx("div",{className:"map-node-badge in-progress",children:de}):null,e.jsxs("div",{className:"map-node-header",children:[e.jsx("span",{className:"map-node-icon",children:(()=>{const ue=Ha[re.icon];return ue?e.jsx(ue,{size:20}):null})()}),e.jsx("span",{className:"map-node-title",children:re.title})]}),e.jsx("p",{className:"map-node-description",children:re.description}),e.jsxs("div",{className:"map-node-progress",children:[e.jsx("div",{className:"map-node-progress-bar",children:e.jsx("div",{className:"map-node-progress-fill",style:{width:`${ln}%`}})}),e.jsxs("span",{className:"map-node-progress-text",children:[de,"/",je.length]})]})]},re.id)})}),D&&e.jsx("div",{className:"expanded-section",children:(()=>{const re=qa.find(de=>de.id===D),je=re.problems.map(de=>Qt[de]).filter(Boolean);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"expanded-section-header",children:[e.jsxs("div",{className:"expanded-section-title",children:[e.jsx("span",{className:"section-icon-wrapper",children:(()=>{const de=Ha[re.icon];return de?e.jsx(de,{size:24}):null})()}),e.jsx("h3",{children:re.title})]}),e.jsx("button",{className:"close-section-btn",onClick:de=>{de.stopPropagation(),M(null)},children:e.jsx(As,{size:16})})]}),e.jsx("div",{className:"problem-grid",children:je.map(de=>{const ln=P.includes(de.id);return e.jsxs("div",{className:`problem-item ${ln?"completed":""}`,onClick:()=>t(`/practice/${de.id}`),children:[e.jsx("div",{className:`problem-status-icon ${ln?"done":"pending"}`,children:ln?e.jsx(en,{size:16}):e.jsx(vi,{size:16})}),e.jsxs("div",{className:"problem-item-info",children:[e.jsx("div",{className:"problem-item-title",children:de.title}),e.jsx("div",{className:"problem-item-meta",children:e.jsx("span",{className:`problem-item-difficulty ${de.difficulty.toLowerCase()}`,children:de.difficulty})})]}),e.jsx(Hn,{size:16,className:"problem-item-arrow"})]},de.id)})})]})})()})]}),E==="list"&&e.jsx("div",{className:"roadmap-container",children:qa.map((re,je)=>{const de=re.problems.map(Z=>Qt[Z]).filter(Boolean),ln=de.filter(Z=>P.includes(Z.id)).length;return e.jsxs("div",{className:"roadmap-section",children:[je>0&&e.jsx("div",{className:"roadmap-connector"}),e.jsxs("div",{className:"section-card",style:{"--section-color":re.color},children:[e.jsxs("div",{className:"section-header",children:[e.jsx("span",{className:"section-icon",children:(()=>{const Z=Ha[re.icon];return Z?e.jsx(Z,{size:24}):null})()}),e.jsxs("div",{className:"section-info",children:[e.jsx("h2",{children:re.title}),e.jsx("p",{children:re.description})]}),e.jsx("div",{className:"section-progress",children:e.jsxs("span",{children:[ln,"/",de.length]})})]}),e.jsx("div",{className:"section-problems",children:de.map((Z,ue)=>{const he=P.includes(Z.id);return e.jsxs("div",{className:`problem-node ${he?"completed":""}`,onClick:()=>t(`/practice/${Z.id}`),children:[ue>0&&e.jsx("div",{className:"node-connector"}),e.jsx("div",{className:"node-circle",children:he?e.jsx(en,{size:16}):e.jsx("span",{className:"node-number",children:ue+1})}),e.jsxs("div",{className:"node-info",children:[e.jsx("span",{className:"node-title",children:Z.title}),e.jsx("span",{className:`node-difficulty ${Z.difficulty.toLowerCase()}`,children:Z.difficulty})]}),e.jsx(Hn,{size:16,className:"node-arrow"})]},Z.id)})})]})]},re.id)})})]})})}return r?e.jsx("div",{className:"practice-container",children:e.jsxs("div",{className:"practice-layout",children:[e.jsxs("div",{className:"problem-panel",children:[e.jsxs("div",{className:"problem-header",children:[e.jsxs("button",{className:"back-btn",onClick:()=>v(!0),children:[e.jsx(Kd,{size:16})," Roadmap"]}),e.jsx("h1",{children:r.title}),e.jsx("span",{className:`difficulty ${r.difficulty.toLowerCase()}`,children:r.difficulty}),P.includes(r.id)&&e.jsxs("span",{className:"solved-badge",children:[e.jsx(en,{size:14})," Solved"]})]}),e.jsxs("div",{className:"problem-tabs",children:[e.jsx("button",{className:m==="description"?"active":"",onClick:()=>x("description"),children:"Description"}),e.jsx("button",{className:m==="hints"?"active":"",onClick:()=>x("hints"),children:"Hints"}),e.jsxs("button",{className:m==="solutions"?"active":"",onClick:()=>x("solutions"),children:[e.jsx(Hi,{size:14}),"Solutions"]}),e.jsxs("button",{className:m==="ai"?"active":"",onClick:()=>x("ai"),children:[e.jsx(Fp,{size:14}),"AI Assistant"]})]}),e.jsxs("div",{className:"problem-content",ref:$,children:[m==="description"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"description",children:r.description.split(`
`).map((U,Q)=>e.jsx("p",{children:U},Q))}),e.jsxs("div",{className:"examples",children:[e.jsx("h3",{children:"Examples"}),r.examples.map((U,Q)=>e.jsxs("div",{className:"example",children:[e.jsxs("div",{className:"example-label",children:["Example ",Q+1,":"]}),e.jsxs("div",{className:"example-content",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Input:"})," ",e.jsx("code",{children:U.input})]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Output:"})," ",e.jsx("code",{children:U.output})]}),U.explanation&&e.jsxs("div",{children:[e.jsx("strong",{children:"Explanation:"})," ",U.explanation]})]})]},Q))]}),e.jsxs("div",{className:"constraints",children:[e.jsx("h3",{children:"Constraints"}),e.jsx("ul",{children:r.constraints.map((U,Q)=>e.jsx("li",{children:e.jsx("code",{children:U})},Q))})]})]}),m==="hints"&&e.jsxs("div",{className:"hints-section",children:[e.jsxs("div",{className:"hints-header",children:[e.jsx(ye,{size:20}),e.jsx("span",{children:"Need help? Reveal hints one at a time."})]}),r.hints.slice(0,j).map((U,Q)=>e.jsxs("div",{className:"hint",children:[e.jsxs("span",{className:"hint-number",children:["Hint ",Q+1,":"]}),U]},Q)),j<r.hints.length&&e.jsxs("button",{className:"reveal-hint-btn",onClick:te,children:[e.jsx(ye,{size:14}),"Reveal Hint ",j+1]}),j>=r.hints.length&&e.jsx("div",{className:"all-hints-shown",children:"All hints revealed!"})]}),m==="solutions"&&r.solutions&&e.jsxs("div",{className:"solutions-section",children:[e.jsxs("div",{className:"solutions-header",children:[e.jsx(Hi,{size:20}),e.jsx("span",{children:"Multiple approaches with different time/space complexities"})]}),e.jsx("div",{className:"solutions-list",children:Object.entries(r.solutions).map(([U,Q])=>{const ce=K===U,re=A===U;return e.jsxs("div",{className:`solution-card ${ce?"expanded":""}`,children:[e.jsxs("div",{className:"solution-card-header",onClick:()=>O(ce?null:U),children:[e.jsxs("div",{className:"solution-info",children:[e.jsx("h4",{className:"solution-name",children:Q.name}),e.jsxs("div",{className:"solution-complexity",children:[e.jsxs("span",{className:"complexity-badge time",children:[e.jsx(Jl,{size:12}),Q.timeComplexity]}),e.jsxs("span",{className:"complexity-badge space",children:[e.jsx(Gx,{size:12}),Q.spaceComplexity]})]})]}),e.jsx(Hn,{size:18,className:`solution-expand-icon ${ce?"rotated":""}`})]}),ce&&e.jsxs("div",{className:"solution-card-body",children:[e.jsx("p",{className:"solution-description",children:Q.description}),e.jsxs("div",{className:"solution-code-container",children:[e.jsxs("div",{className:"solution-code-header",children:[e.jsx("span",{children:"Python"}),e.jsx("button",{className:"copy-solution-btn",onClick:je=>{je.stopPropagation(),navigator.clipboard.writeText(Q.code),k(U),setTimeout(()=>k(null),2e3)},children:re?e.jsxs(e.Fragment,{children:[e.jsx(uc,{size:14}),"Copied!"]}):e.jsxs(e.Fragment,{children:[e.jsx(pc,{size:14}),"Copy"]})})]}),e.jsx("pre",{className:"solution-code",children:e.jsx("code",{children:Q.code})})]}),e.jsxs("button",{className:"use-solution-btn",onClick:je=>{je.stopPropagation(),o(Q.code),x("description")},children:[e.jsx(vi,{size:14}),"Use This Solution"]})]})]},U)})})]}),m==="ai"&&e.jsxs("div",{className:"ai-assistant-tab",children:[z&&e.jsxs("div",{className:"review-error-banner",children:[e.jsx(Nr,{size:16}),e.jsx("span",{children:z})]}),T&&e.jsxs("div",{className:"ai-review-results",children:[e.jsxs("div",{className:"review-header",children:[e.jsxs("div",{className:"logic-score",children:[e.jsx("span",{className:"score-label",children:"Logic Score"}),e.jsxs("div",{className:"score-circle",children:[e.jsx("span",{className:"score-value",children:T.logicScore}),e.jsx("span",{className:"score-total",children:"/10"})]})]}),e.jsxs("div",{className:"complexity-info",children:[e.jsxs("div",{className:"complexity-item",children:[e.jsx(Jl,{size:14}),e.jsxs("span",{children:["Time: ",e.jsx("strong",{children:T.timeComplexity})]})]}),e.jsxs("div",{className:"complexity-item",children:[e.jsx(mc,{size:14}),e.jsxs("span",{children:["Space: ",e.jsx("strong",{children:T.spaceComplexity})]})]})]})]}),e.jsxs("div",{className:"review-feedback",children:[e.jsx("h4",{children:"Senior Reviewer Feedback"}),e.jsx("p",{children:T.generalFeedback})]}),T.optimizations&&T.optimizations.length>0&&e.jsxs("div",{className:"review-optimizations",children:[e.jsx("h4",{children:"Line-by-Line Optimizations"}),e.jsx("div",{className:"optimizations-list",children:T.optimizations.map((U,Q)=>e.jsxs("div",{className:"opt-card",children:[e.jsxs("div",{className:"opt-card-header",children:[e.jsxs("span",{className:"line-badge",children:["Lines ",U.startLine,"-",U.endLine]}),e.jsx(Mr,{size:14,className:"zap-icon"})]}),e.jsxs("div",{className:"opt-issue",children:[e.jsx("strong",{children:"Issue:"})," ",U.issue]}),e.jsxs("div",{className:"opt-suggestion",children:[e.jsx("strong",{children:"Suggestion:"})," ",U.suggestion]}),U.improvedCode&&e.jsx("div",{className:"opt-code",children:e.jsx("pre",{children:e.jsx("code",{children:U.improvedCode})})})]},Q))})]}),e.jsx("div",{className:"review-divider",children:e.jsx("span",{children:"Chat with Assistant below"})})]}),e.jsx(be,{context:`Problem: ${r.title}

Description: ${r.description}

User's current code (${i}):
${l}`})]})]})]}),e.jsxs("div",{className:"editor-panel",children:[e.jsxs("div",{className:"editor-header",children:[e.jsxs("div",{className:"language-selector",children:[e.jsx(vi,{size:16}),e.jsx("span",{className:"language-label",children:"Python"})]}),e.jsx("div",{className:"editor-actions",children:e.jsx("button",{className:"btn btn-reset",onClick:ee,disabled:c,title:"Reset code",children:e.jsx(mn,{size:14})})})]}),e.jsx(Hb,{language:i,code:l,onChange:o,decorations:B}),e.jsxs("div",{className:"run-actions",children:[e.jsxs("button",{className:"btn btn-run",onClick:H,disabled:c||L,children:[e.jsx(ze,{size:14}),c?"Running...":"Run Code"]}),e.jsxs("button",{className:"btn btn-submit",onClick:Y,disabled:c||L,children:[e.jsx(en,{size:14}),c?"Testing...":"Submit"]}),e.jsxs("button",{className:`btn btn-review ${L?"loading":""}`,onClick:R,disabled:c||L,title:"Get a Senior Code Review from Gemini",children:[e.jsx(ov,{size:14}),L?"Reviewing...":"AI Review"]})]}),e.jsxs("div",{className:"output-panel",children:[e.jsxs("div",{className:"output-header",children:[e.jsx("span",{children:"Output"}),u&&e.jsx("span",{className:`status ${u.success?"success":"error"}`,children:u.success?"Success":"Error"})]}),e.jsxs("div",{className:"output-content",children:[!u&&!g&&e.jsx("div",{className:"output-placeholder",children:"Run your code to see output here..."}),u&&e.jsxs(e.Fragment,{children:[u.stdout&&e.jsxs("div",{className:"stdout",children:[e.jsx("div",{className:"output-label",children:"stdout:"}),e.jsx("pre",{children:u.stdout})]}),u.stderr&&e.jsxs("div",{className:"stderr",children:[e.jsx("div",{className:"output-label",children:"stderr:"}),e.jsx("pre",{children:u.stderr})]})]}),g&&e.jsxs("div",{className:"test-results",children:[e.jsx("div",{className:"test-summary",children:e.jsx("span",{className:g.allPassed?"all-passed":"some-failed",children:g.allPassed?e.jsxs(e.Fragment,{children:[e.jsx(en,{size:16})," All tests passed!"]}):e.jsxs(e.Fragment,{children:[e.jsx(Nr,{size:16})," ",g.summary.passed,"/",g.summary.total," tests passed"]})})}),e.jsx("div",{className:"test-cases",children:g.results.map((U,Q)=>e.jsxs("div",{className:`test-case ${U.passed?"passed":"failed"}`,children:[e.jsxs("div",{className:"test-case-header",children:[U.passed?e.jsx(en,{size:14}):e.jsx(Nr,{size:14}),e.jsxs("span",{children:["Test Case ",U.testCase]})]}),e.jsxs("div",{className:"test-case-details",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Input:"})," ",e.jsx("code",{children:U.input})]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Expected:"})," ",e.jsx("code",{children:U.expected})]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Actual:"})," ",e.jsx("code",{children:U.actual||"(empty)"})]}),U.error&&e.jsxs("div",{className:"test-error",children:[e.jsx("strong",{children:"Error:"})," ",U.error]})]})]},Q))})]})]})]})]})]})}):e.jsx("div",{className:"practice-container",children:e.jsx("div",{className:"loading",children:"Loading problem..."})})}async function Ub(n){const t=await fetch("/api/sandbox/run",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:n})});if(!t.ok)throw new Error(`Server error (${t.status})`);return t.json()}const Wb=`# Push values onto the stack, then pop them all
for i in range(1, 6):
    my_stack.push(i * 10)

while not my_stack.is_empty:
    my_stack.pop()`,Kb=[{label:"my_stack",color:"#6366f1",methods:[{sig:"my_stack.push(value)",desc:"Push a value onto the top"},{sig:"my_stack.pop()",desc:"Remove & return the top value"},{sig:"my_stack.peek()",desc:"Return top value without removing"},{sig:"my_stack.size",desc:"Number of items (property)"},{sig:"my_stack.is_empty",desc:"True if empty (property)"}]},{label:"my_queue",color:"#06b6d4",methods:[{sig:"my_queue.enqueue(value)",desc:"Add a value to the back"},{sig:"my_queue.dequeue()",desc:"Remove & return the front value"},{sig:"my_queue.peek()",desc:"Return front value without removing"},{sig:"my_queue.size",desc:"Number of items (property)"},{sig:"my_queue.is_empty",desc:"True if empty (property)"}]},{label:"my_list",color:"#f59e0b",methods:[{sig:"my_list.insert_head(value)",desc:"Add node at the front"},{sig:"my_list.insert_tail(value)",desc:"Add node at the back"},{sig:"my_list.delete(value)",desc:"Remove first node with that value"},{sig:"my_list.find(value)",desc:"Returns True if value exists"},{sig:"my_list.size",desc:"Number of nodes (property)"},{sig:"my_list.is_empty",desc:"True if empty (property)"}]}],Gb=[{label:"Stack",code:`# Push 1–5, then pop all
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
my_list.delete(200)`}];function Qb({snap:n}){if(!n)return null;const r={push:"#6366f1",pop:"#6366f1",enqueue:"#06b6d4",dequeue:"#06b6d4",insertHead:"#f59e0b",insertTail:"#f59e0b",delete:"#ef4444",find:"#10b981"}[n.operation]??"var(--accent-primary)";return e.jsxs("div",{className:"sandbox-step-banner",style:{"--op-color":r},children:[e.jsx("span",{className:"sandbox-step-op",children:n.operation}),e.jsx("span",{className:"sandbox-step-desc",children:n.description}),n.lineNumber&&e.jsxs("span",{className:"sandbox-step-line",children:["line ",n.lineNumber]})]})}function Ua({title:n,color:t,children:r,defaultOpen:s=!0}){const[i,a]=p.useState(s);return e.jsxs("div",{className:"sandbox-ds-section",style:{"--ds-color":t},children:[e.jsxs("button",{className:"sandbox-ds-header",onClick:()=>a(l=>!l),children:[e.jsx("span",{className:"sandbox-ds-dot"}),e.jsx("span",{className:"sandbox-ds-title",children:n}),i?e.jsx(Ms,{size:13}):e.jsx(Hn,{size:13})]}),i&&e.jsx("div",{className:"sandbox-ds-body",children:r})]})}function Xb({items:n,activeValue:t}){const r=[...n].reverse();return e.jsxs("div",{className:"sandbox-stack-container",children:[e.jsx("div",{className:"sandbox-stack-shaft",children:r.length===0?e.jsx("p",{className:"sandbox-ds-empty",children:"Empty"}):r.map((s,i)=>{const a=i===0,l=a&&s===t;return e.jsxs("div",{className:`sandbox-stack-block${a?" sandbox-stack-block--top":""}${l?" sandbox-item--active":""}`,children:[a&&e.jsx("span",{className:"sandbox-top-badge",children:"TOP"}),e.jsx("span",{className:"sandbox-stack-val",children:String(s)})]},i)})}),e.jsx("div",{className:"sandbox-stack-base",children:e.jsx("span",{className:"sandbox-stack-base-label",children:"▲ BOTTOM ▲"})})]})}function Yb({items:n,activeValue:t}){return n.length===0?e.jsx("div",{className:"sandbox-queue-track sandbox-queue-track--empty",children:e.jsx("p",{className:"sandbox-ds-empty",children:"Empty"})}):e.jsxs("div",{className:"sandbox-queue-wrapper",children:[e.jsxs("div",{className:"sandbox-queue-track",children:[e.jsxs("div",{className:"sandbox-queue-end sandbox-queue-end--out",children:[e.jsx("span",{children:"OUT"}),e.jsx("span",{className:"sandbox-queue-end-arrow",children:"←"})]}),n.map((r,s)=>e.jsxs(_e.Fragment,{children:[e.jsx("div",{className:`sandbox-queue-cell${r===t?" sandbox-item--active":""}`,children:String(r)}),s<n.length-1&&e.jsx("span",{className:"sandbox-queue-conn",children:"→"})]},s)),e.jsxs("div",{className:"sandbox-queue-end sandbox-queue-end--in",children:[e.jsx("span",{className:"sandbox-queue-end-arrow",children:"→"}),e.jsx("span",{children:"IN"})]})]}),e.jsxs("div",{className:"sandbox-queue-footer",children:[e.jsx("span",{className:"sandbox-queue-label",children:"FRONT (dequeue)"}),e.jsx("span",{className:"sandbox-queue-label",children:"BACK (enqueue)"})]})]})}function Jb({nodes:n,activeValue:t}){return n.length===0?e.jsx("div",{className:"sandbox-ll-empty-track",children:e.jsx("p",{className:"sandbox-ds-empty",children:"Empty"})}):e.jsx("div",{className:"sandbox-ll-container",children:n.map((r,s)=>{const i=s===0,a=s===n.length-1,l=r.value===t;return e.jsxs(_e.Fragment,{children:[e.jsxs("div",{className:"sandbox-ll-node-wrapper",children:[e.jsxs("div",{className:`sandbox-ll-node-box${l?" sandbox-item--active":""}`,children:[e.jsx("div",{className:"sandbox-ll-data",children:String(r.value)}),e.jsx("div",{className:"sandbox-ll-ptr",children:a?"∅":"→"})]}),e.jsx("span",{className:"sandbox-ll-label",children:i&&a?"HEAD/TAIL":i?"HEAD":a?"TAIL":""})]}),!a&&e.jsxs("div",{className:"sandbox-ll-connector",children:[e.jsx("div",{className:"sandbox-ll-conn-line"}),e.jsx("span",{className:"sandbox-ll-conn-arrow",children:"▶"})]})]},r.id)})})}function Zb(){const[n,t]=p.useState(!1);return e.jsxs("div",{className:"sandbox-api-ref",children:[e.jsxs("button",{className:"sandbox-api-ref-toggle",onClick:()=>t(r=>!r),children:[n?e.jsx(Ms,{size:13}):e.jsx(Hn,{size:13}),"Python API Reference"]}),n&&e.jsxs("div",{className:"sandbox-api-ref-body",children:[Kb.map(r=>e.jsxs("div",{className:"sandbox-api-group",children:[e.jsx("div",{className:"sandbox-api-group-label",style:{color:r.color},children:r.label}),r.methods.map(s=>e.jsxs("div",{className:"sandbox-api-row",children:[e.jsx("code",{className:"sandbox-api-sig",children:s.sig}),e.jsx("span",{className:"sandbox-api-desc",children:s.desc})]},s.sig))]},r.label)),e.jsxs("p",{className:"sandbox-api-note",children:["Built-ins available: ",e.jsx("code",{children:"range"}),", ",e.jsx("code",{children:"len"}),", ",e.jsx("code",{children:"str"}),", ",e.jsx("code",{children:"int"}),",",e.jsx("code",{children:"float"}),", ",e.jsx("code",{children:"list"}),", ",e.jsx("code",{children:"sorted"}),", ",e.jsx("code",{children:"min"}),", ",e.jsx("code",{children:"max"}),", ",e.jsx("code",{children:"sum"}),", ",e.jsx("code",{children:"enumerate"}),", ",e.jsx("code",{children:"zip"})," …"]})]})]})}function ek(){var A,k,L,V,T,_;const[n,t]=p.useState(Wb),[r,s]=p.useState(null),[i,a]=p.useState(!1),[l,o]=p.useState(""),[c,d]=p.useState(""),[u,h]=p.useState(""),g=p.useRef(null),b=p.useRef(null),N=p.useRef([]),y=yc(),j=p.useCallback(z=>{const F=b.current,B=g.current;if(!(!B||!F)){if(!z){N.current=B.deltaDecorations(N.current,[]);return}N.current=B.deltaDecorations(N.current,[{range:new F.Range(z,1,z,1),options:{isWholeLine:!0,className:"sandbox-active-line"}}])}},[]);p.useEffect(()=>{var z;j(((z=y.currentSnapshot)==null?void 0:z.lineNumber)??null)},[y.currentSnapshot,j]);const f=async()=>{y.reset(),s(null),a(!0),j(null);try{const{snapshots:z,error:F,errorLine:B}=await Ub(n);if(F&&(!z||z.length===0)){s({message:F,line:B});return}(z==null?void 0:z.length)>0&&y.loadHistory(z),F&&s({message:F,line:B})}catch(z){s({message:z.message,line:null})}finally{a(!1)}},m=()=>{y.reset(),s(null),j(null)},x=async()=>{h("Saving…");try{const z=await fetch("/api/sandbox/scripts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:"Untitled",code:n})});if(!z.ok)throw new Error("Server error");const F=await z.json();o(F.id),h(`Saved! ID: ${F.id}`)}catch{h("Save failed")}},C=async()=>{if(c.trim()){h("Loading…");try{const z=await fetch(`/api/sandbox/scripts/${c.trim()}`);if(!z.ok)throw new Error("Not found");const F=await z.json();t(F.code),y.reset(),s(null),h("Loaded!")}catch{h("Script not found")}}},v=y.currentSnapshot,P=((k=(A=v==null?void 0:v.state)==null?void 0:A.stack)==null?void 0:k.items)??[],S=((V=(L=v==null?void 0:v.state)==null?void 0:L.queue)==null?void 0:V.items)??[],D=((_=(T=v==null?void 0:v.state)==null?void 0:T.linkedList)==null?void 0:_.nodes)??[],M=(v==null?void 0:v.value)??(v==null?void 0:v.result),E=(v==null?void 0:v.dsType)==="stack"?M:void 0,q=(v==null?void 0:v.dsType)==="queue"?M:void 0,K=(v==null?void 0:v.dsType)==="linkedList"?M:void 0,O=y.totalSteps>0;return e.jsxs("div",{className:"sandbox-page",children:[e.jsxs("div",{className:"sandbox-header",children:[e.jsx("div",{className:"sandbox-header-icon",children:e.jsx(eo,{size:20})}),e.jsxs("div",{children:[e.jsx("h1",{className:"sandbox-title",children:"Python Code Sandbox"}),e.jsxs("p",{className:"sandbox-subtitle",children:["Write Python using ",e.jsx("code",{children:"my_stack"}),", ",e.jsx("code",{children:"my_queue"}),", or ",e.jsx("code",{children:"my_list"})," — step through each operation and watch your data structures animate."]})]})]}),e.jsxs("div",{className:"sandbox-examples",children:[e.jsx("span",{className:"sandbox-examples-label",children:"Examples:"}),Gb.map(z=>e.jsx("button",{className:"sandbox-example-btn",onClick:()=>{t(z.code),y.reset(),s(null)},children:z.label},z.label))]}),e.jsxs("div",{className:"sandbox-layout",children:[e.jsxs("div",{className:"sandbox-editor-panel",children:[e.jsx("div",{className:"sandbox-editor-wrapper",children:e.jsx(rf,{height:"380px",language:"python",theme:"vs-dark",value:n,onChange:z=>t(z??""),onMount:(z,F)=>{g.current=z,b.current=F},options:{minimap:{enabled:!1},fontSize:13,lineNumbers:"on",scrollBeyondLastLine:!1,wordWrap:"on",renderLineHighlight:"none"}})}),e.jsxs("div",{className:"sandbox-controls",children:[e.jsxs("div",{className:"sandbox-ctrl-left",children:[e.jsx("button",{className:"btn btn-primary sandbox-run-btn",onClick:f,disabled:i,children:i?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"sandbox-spinner"}),"Running…"]}):e.jsxs(e.Fragment,{children:[e.jsx(ze,{size:14}),"Run"]})}),e.jsxs("button",{className:"btn btn-secondary",onClick:y.pause,disabled:!y.isPlaying,children:[e.jsx(dv,{size:14}),"Stop"]}),e.jsxs("button",{className:"btn btn-secondary",onClick:m,disabled:!O&&!r,children:[e.jsx(mn,{size:14}),"Reset"]})]}),e.jsxs("div",{className:"sandbox-ctrl-right",children:[e.jsxs("button",{className:"btn btn-secondary sandbox-save-btn",onClick:x,children:[e.jsx(lv,{size:14}),"Save"]}),e.jsx("input",{className:"sandbox-load-input",placeholder:"Script ID…",value:c,onChange:z=>d(z.target.value),onKeyDown:z=>z.key==="Enter"&&C()}),e.jsxs("button",{className:"btn btn-secondary",onClick:C,children:[e.jsx(Qx,{size:14}),"Load"]})]})]}),u&&e.jsx("div",{className:"sandbox-save-status",children:u}),r&&e.jsxs("div",{className:"sandbox-error-banner",children:[e.jsxs("strong",{children:["Error",r.line?` (line ${r.line})`:"",":"]})," ",r.message]}),e.jsx(Zb,{})]}),e.jsx("div",{className:"sandbox-visual-panel",children:O?e.jsxs(e.Fragment,{children:[e.jsx(Qb,{snap:v}),e.jsx(Ua,{title:"Stack",color:"#6366f1",children:e.jsx(Xb,{items:P,activeValue:E})}),e.jsx(Ua,{title:"Queue",color:"#06b6d4",children:e.jsx(Yb,{items:S,activeValue:q})}),e.jsx(Ua,{title:"Linked List",color:"#f59e0b",children:e.jsx(Jb,{nodes:D,activeValue:K})}),e.jsx(vc,{currentStepIndex:y.currentStepIndex,totalSteps:y.totalSteps,isPlaying:y.isPlaying,isAtStart:y.isAtStart,isAtEnd:y.isAtEnd,currentSnapshot:y.currentSnapshot,algorithmLabel:"Sandbox",onPlay:y.resume,onPause:y.pause,onStepForward:y.stepForward,onStepBackward:y.stepBackward,onScrub:y.scrubTo,onJumpToStart:()=>y.scrubTo(0),onJumpToEnd:()=>y.scrubTo(y.totalSteps-1)})]}):e.jsxs("div",{className:"sandbox-empty-state",children:[e.jsx(eo,{size:40,className:"sandbox-empty-icon"}),e.jsx("p",{className:"sandbox-empty-title",children:"Nothing to visualize yet"}),e.jsxs("p",{className:"sandbox-empty-hint",children:["Write Python code in the editor and click ",e.jsx("strong",{children:"Run"})," to watch each operation step by step."]})]})})]})]})}const wn=11,nk=[{label:"5 Keys",keys:["cat","dog","fox","ant","bee"]},{label:"8 Keys",keys:["cat","dog","fox","ant","bee","cow","hen","pig"]},{label:"8 Names",keys:["alice","bob","carol","dave","eve","frank","grace","hank"]}];function jc(n,t){let r=0;for(let s=0;s<n.length;s++)r=(r*31+n.charCodeAt(s))%t;return r}function Wt(n){return{cap:n,table:Array(n).fill(null),size:0,totalProbes:0,collisions:0,maxProbes:0,log:[]}}function Wa(n){return{cap:n,table:Array.from({length:n},()=>[]),size:0,totalProbes:0,collisions:0,maxChain:0,log:[]}}function su(n,t){if(n.size>=n.cap)return n;const{cap:r,table:s}=n;let a=jc(t,r),l=0;for(;s[a]!==null&&s[a]!==t;)if(a=(a+1)%r,l++,l>=r)return n;if(s[a]===t)return n;const o=l+1,c=l>0,d=[...s];return d[a]=t,{...n,table:d,size:n.size+1,totalProbes:n.totalProbes+o,collisions:n.collisions+(c?1:0),maxProbes:Math.max(n.maxProbes,o),log:[{key:t,slot:a,probes:o,collision:c},...n.log.slice(0,7)]}}function iu(n,t){if(n.size>=n.cap)return n;const{cap:r,table:s}=n,i=jc(t,r);let a=0,l=i;for(let u=0;u<r&&(l=(i+u*u)%r,s[l]!==null);u++){if(s[l]===t)return n;a++}if(s[l]!==null)return n;const o=a+1,c=a>0,d=[...s];return d[l]=t,{...n,table:d,size:n.size+1,totalProbes:n.totalProbes+o,collisions:n.collisions+(c?1:0),maxProbes:Math.max(n.maxProbes,o),log:[{key:t,slot:l,probes:o,collision:c},...n.log.slice(0,7)]}}function au(n,t){const{cap:r,table:s}=n,i=jc(t,r),a=s[i];if(a.includes(t))return n;const l=a.length,o=a.length>0,c=s.map((d,u)=>u===i?[...d,t]:d);return{...n,table:c,size:n.size+1,totalProbes:n.totalProbes+l,collisions:n.collisions+(o?1:0),maxChain:Math.max(n.maxChain,a.length+1),log:[{key:t,slot:i,probes:l,collision:o},...n.log.slice(0,7)]}}function ii({label:n,value:t}){return e.jsxs("div",{className:"hc-metric",children:[e.jsx("span",{className:"hc-metric-value",children:t}),e.jsx("span",{className:"hc-metric-label",children:n})]})}function Ka({name:n,formula:t,color:r,state:s,currentKey:i,isChaining:a,isWinner:l}){const o=s.log[0],c=(o==null?void 0:o.key)===i?o.slot:null,d=s.size/s.cap;return e.jsxs("div",{className:`hc-column${l&&s.size>0?" hc-column--winner":""}`,style:{"--col-color":r},children:[e.jsxs("div",{className:"hc-col-header",children:[e.jsxs("div",{className:"hc-col-title-group",children:[e.jsx("span",{className:"hc-col-dot"}),e.jsx("span",{className:"hc-col-name",children:n})]}),l&&s.size>0&&e.jsxs("span",{className:"hc-winner-badge",children:[e.jsx(zr,{size:11})," Best"]})]}),e.jsx("p",{className:"hc-col-formula",children:t}),e.jsxs("div",{className:"hc-metrics",children:[e.jsx(ii,{label:"Total Probes",value:s.totalProbes}),e.jsx(ii,{label:"Collisions",value:s.collisions}),e.jsx(ii,{label:a?"Max Chain":"Max Probes/Insert",value:a?s.maxChain:s.maxProbes}),e.jsx(ii,{label:"Load Factor",value:`${(d*100).toFixed(0)}%`})]}),e.jsx("div",{className:"hc-load-bar",children:e.jsx("div",{className:"hc-load-fill",style:{width:`${Math.min(d*100,100)}%`,background:d>.7?"#ef4444":d>.5?"#f59e0b":r}})}),e.jsx("div",{className:"hc-slots",children:a?s.table.map((u,h)=>e.jsxs("div",{className:`hc-slot${u.length>0?" filled":" empty"}${c===h?" newly-inserted":""}`,children:[e.jsx("div",{className:"hc-slot-index",children:h}),e.jsx("div",{className:"hc-chain-items",children:u.length===0?e.jsx("span",{className:"hc-empty-label",children:"—"}):u.map((g,b)=>e.jsxs(_e.Fragment,{children:[b>0&&e.jsx(Hn,{size:9,className:"hc-chain-sep"}),e.jsx("span",{className:`hc-chain-key${g===i?" hc-new-key":""}`,children:g})]},b))})]},h)):s.table.map((u,h)=>e.jsxs("div",{className:`hc-slot${u?" filled":" empty"}${c===h?" newly-inserted":""}`,children:[e.jsx("div",{className:"hc-slot-index",children:h}),e.jsx("div",{className:"hc-slot-key",children:u?e.jsx("span",{className:u===i?"hc-new-key":"",children:u}):e.jsx("span",{className:"hc-empty-label",children:"—"})})]},h))}),s.log.length>0&&e.jsxs("div",{className:"hc-log",children:[e.jsx("div",{className:"hc-log-title",children:"Recent Inserts"}),s.log.slice(0,5).map((u,h)=>e.jsxs("div",{className:`hc-log-entry${u.collision?" hc-log-collision":""}`,children:[e.jsxs("span",{className:"hc-log-key",children:['"',u.key,'"']}),e.jsxs("span",{className:"hc-log-detail",children:["→ [",u.slot,"] · ",u.probes,"p"]}),u.collision&&e.jsx("span",{className:"hc-log-flag",children:"col"})]},h))]})]})}function tk(){const[n,t]=p.useState(()=>Wt(wn)),[r,s]=p.useState(()=>Wt(wn)),[i,a]=p.useState(()=>Wa(wn)),[l,o]=p.useState(null),[c,d]=p.useState(""),[u,h]=p.useState(!1),g=()=>{const v=c.trim();!v||u||(o(v),t(P=>su(P,v)),s(P=>iu(P,v)),a(P=>au(P,v)),d(""),setTimeout(()=>o(P=>P===v?null:P),1400))},b=async v=>{if(u)return;h(!0);let P=Wt(wn),S=Wt(wn),D=Wa(wn);t(P),s(S),a(D),o(null),await new Promise(M=>setTimeout(M,60));for(const M of v)P=su(P,M),S=iu(S,M),D=au(D,M),o(M),t(P),s(S),a(D),await new Promise(E=>setTimeout(E,300));o(null),h(!1)},N=()=>{u||(t(Wt(wn)),s(Wt(wn)),a(Wa(wn)),o(null),d(""))},y=n.size>0,j=y?Math.min(n.totalProbes,r.totalProbes,i.totalProbes):-1,f=y&&n.totalProbes===j,m=y&&r.totalProbes===j,x=y&&i.totalProbes===j,C=[f&&"Linear",m&&"Quadratic",x&&"Chaining"].filter(Boolean).join(" & ");return e.jsxs("div",{className:"container hc-page",children:[e.jsxs("div",{className:"hc-header",children:[e.jsx("div",{className:"hc-header-icon",children:e.jsx(Vp,{size:22})}),e.jsxs("div",{children:[e.jsx("h1",{className:"hc-title",children:"Hash Table Comparison"}),e.jsxs("p",{className:"hc-subtitle",children:["Insert the same keys into all three collision strategies simultaneously. Table size: ",e.jsx("strong",{children:wn})," (prime) ·"," ","Hash: ",e.jsxs("code",{children:["h = (h × 31 + charCode) % ",wn]})]})]})]}),e.jsxs("div",{className:"hc-controls",children:[e.jsxs("div",{className:"hc-input-row",children:[e.jsx("input",{className:"hc-key-input",type:"text",placeholder:"Type a key…",value:c,onChange:v=>d(v.target.value),onKeyDown:v=>v.key==="Enter"&&g(),disabled:u}),e.jsx("button",{className:"btn btn-insert hc-insert-btn",onClick:g,disabled:!c.trim()||u,children:"Insert into All"})]}),e.jsxs("div",{className:"hc-preset-row",children:[e.jsx("span",{className:"hc-preset-label",children:"Presets:"}),nk.map(v=>e.jsxs("button",{className:"btn hc-preset-btn",onClick:()=>b(v.keys),disabled:u,children:[e.jsx(ze,{size:11})," ",v.label]},v.label)),e.jsxs("button",{className:"btn btn-clear hc-reset-btn",onClick:N,disabled:u,children:[e.jsx(xc,{size:12})," Reset"]})]})]}),y&&e.jsxs("div",{className:"hc-winner-banner",children:[e.jsx(zr,{size:14}),e.jsxs("span",{children:[e.jsx("strong",{children:C})," used fewest total probes (",j,")"]})]}),l&&e.jsxs("div",{className:"hc-current-key-banner",children:["Inserting ",e.jsxs("strong",{children:['"',l,'"']}),"…"]}),e.jsxs("div",{className:"hc-grid",children:[e.jsx(Ka,{name:"Linear Probing",formula:"h(k,i) = (h₀ + i) % cap",color:"#6366f1",state:n,currentKey:l,isChaining:!1,isWinner:f}),e.jsx(Ka,{name:"Quadratic Probing",formula:"h(k,i) = (h₀ + i²) % cap",color:"#f59e0b",state:r,currentKey:l,isChaining:!1,isWinner:m}),e.jsx(Ka,{name:"Separate Chaining",formula:"slot = h(k) % cap, chain appended",color:"#10b981",state:i,currentKey:l,isChaining:!0,isWinner:x})]}),e.jsxs("div",{className:"hc-legend",children:[e.jsx("span",{className:"hc-legend-title",children:"Probe count:"}),e.jsx("span",{className:"hc-legend-item",children:"Open addressing — slots examined until empty slot found (min 1)"}),e.jsx("span",{className:"hc-legend-sep",children:"·"}),e.jsx("span",{className:"hc-legend-item",children:"Chaining — nodes traversed in chain before appending (0 if bucket empty)"})]})]})}const rk=[{id:"sorting",label:"Sorting Race",Icon:Hx},{id:"searching",label:"Searching",Icon:Bt},{id:"hashing",label:"Hash Tables",Icon:Jx}],Kt=["bubble","insertion","merge","quick"],sk={bubble:{label:"Bubble Sort",color:"#6366f1",complexity:"O(n²)",swap:"Swaps"},insertion:{label:"Insertion Sort",color:"#f59e0b",complexity:"O(n²)",swap:"Swaps"},merge:{label:"Merge Sort",color:"#10b981",complexity:"O(n log n)",swap:"Writes"},quick:{label:"Quick Sort",color:"#ef4444",complexity:"O(n log n)",swap:"Swaps"}},lu=[{label:"Fast",ms:8},{label:"Medium",ms:30},{label:"Slow",ms:80}];function Ga(n){return Array.from({length:n},()=>Math.floor(Math.random()*80)+15)}function af(n){return Array.from({length:n},(t,r)=>Math.round(15+r/(n-1)*80))}function ik(n){return af(n).reverse()}function Xe(n,t,r,s,i,a=!1){return{array:[...n],comparing:t,swapping:r,comparisons:s,swaps:i,done:a}}function ak(n){const t=[],r=[...n],s=r.length;let i=0,a=0;for(let l=0;l<s-1;l++)for(let o=0;o<s-l-1;o++)i++,t.push(Xe(r,[o,o+1],[],i,a)),r[o]>r[o+1]&&([r[o],r[o+1]]=[r[o+1],r[o]],a++,t.push(Xe(r,[],[o,o+1],i,a)));return t.push(Xe(r,[],[],i,a,!0)),t}function lk(n){const t=[],r=[...n];let s=0,i=0;for(let a=1;a<r.length;a++){let l=a;for(;l>0&&(s++,t.push(Xe(r,[l-1,l],[],s,i)),r[l-1]>r[l]);)[r[l-1],r[l]]=[r[l],r[l-1]],i++,t.push(Xe(r,[],[l-1,l],s,i)),l--}return t.push(Xe(r,[],[],s,i,!0)),t}function ok(n){const t=[],r=[...n];let s=0,i=0;function a(o,c,d){const u=r.slice(o,c+1),h=r.slice(c+1,d+1);let g=0,b=0,N=o;for(;g<u.length&&b<h.length;)s++,t.push(Xe(r,[o+g,c+1+b],[],s,i)),r[N++]=u[g]<=h[b]?u[g++]:h[b++],i++,t.push(Xe(r,[],[N-1],s,i));for(;g<u.length;)r[N++]=u[g++],i++,t.push(Xe(r,[],[N-1],s,i));for(;b<h.length;)r[N++]=h[b++],i++,t.push(Xe(r,[],[N-1],s,i))}function l(o,c){if(o>=c)return;const d=o+c>>1;l(o,d),l(d+1,c),a(o,d,c)}return l(0,r.length-1),t.push(Xe(r,[],[],s,i,!0)),t}function ck(n){const t=[],r=[...n];let s=0,i=0;function a(o,c){const d=r[c];let u=o-1;for(let h=o;h<c;h++)s++,t.push(Xe(r,[h,c],[],s,i)),r[h]<=d&&(u++,u!==h&&([r[u],r[h]]=[r[h],r[u]],i++,t.push(Xe(r,[],[u,h],s,i))));return[r[u+1],r[c]]=[r[c],r[u+1]],i++,t.push(Xe(r,[],[u+1,c],s,i)),u+1}function l(o,c){if(o>=c)return;const d=a(o,c);l(o,d-1),l(d+1,c)}return l(0,r.length-1),t.push(Xe(r,[],[],s,i,!0)),t}const dk={bubble:ak,insertion:lk,merge:ok,quick:ck},Qa=18;function ou(n){return{array:[...n],comparing:[],swapping:[],comparisons:0,swaps:0,done:!1}}function uk(){const[n,t]=p.useState(Qa),[r,s]=p.useState(1),[i,a]=p.useState(!1),[l,o]=p.useState(()=>Ga(Qa)),[c,d]=p.useState(()=>Object.fromEntries(Kt.map(m=>[m,ou(Ga(Qa))]))),u=p.useRef({}),h=p.useRef({}),g=p.useRef(null),b=()=>{clearInterval(g.current),g.current=null},N=(m,x=n)=>{b(),a(!1);const C=m==="sorted"?af(x):m==="reverse"?ik(x):Ga(x);o(C),d(Object.fromEntries(Kt.map(v=>[v,ou(C)]))),u.current={},h.current={}},y=()=>{if(!i){for(const m of Kt)u.current[m]=dk[m](l),h.current[m]=0;d(Object.fromEntries(Kt.map(m=>[m,{...u.current[m][0],done:!1}]))),a(!0),g.current=setInterval(()=>{const m={};let x=!0;for(const C of Kt){const v=u.current[C],P=h.current[C],S=Math.min(P+1,v.length-1);h.current[C]=S,m[C]=v[S],S<v.length-1&&(x=!1)}d(m),x&&(b(),a(!1))},lu[r].ms)}},j=()=>N("random"),f=Math.max(...l,1);return e.jsxs("div",{className:"ac-section",children:[e.jsxs("div",{className:"ac-controls",children:[e.jsxs("div",{className:"ac-ctrl-row",children:[e.jsxs("div",{className:"ac-ctrl-group",children:[e.jsxs("span",{className:"ac-label",children:["Array size: ",e.jsx("strong",{children:n})]}),e.jsx("input",{type:"range",min:8,max:30,value:n,className:"ac-range",disabled:i,onChange:m=>{const x=+m.target.value;t(x),N("random",x)}})]}),e.jsxs("div",{className:"ac-ctrl-group",children:[e.jsx("span",{className:"ac-label",children:"Speed"}),e.jsx("div",{className:"ac-btn-group",children:lu.map((m,x)=>e.jsx("button",{className:`ac-tog-btn ${r===x?"active":""}`,onClick:()=>s(x),disabled:i,children:m.label},m.label))})]}),e.jsxs("div",{className:"ac-ctrl-group",children:[e.jsx("span",{className:"ac-label",children:"Array type"}),e.jsx("div",{className:"ac-btn-group",children:["random","sorted","reverse"].map(m=>e.jsx("button",{className:"ac-tog-btn",onClick:()=>N(m),disabled:i,children:m.charAt(0).toUpperCase()+m.slice(1)},m))})]})]}),e.jsxs("div",{className:"ac-action-row",children:[e.jsxs("button",{className:"btn btn-insert ac-run-btn",onClick:y,disabled:i,children:[e.jsx(ze,{size:13})," Start Race"]}),e.jsxs("button",{className:"btn btn-clear",onClick:j,disabled:i,children:[e.jsx(mn,{size:12})," Reset"]})]})]}),e.jsx("div",{className:"ac-sort-grid",children:Kt.map(m=>{const x=sk[m],C=c[m];return C?e.jsxs("div",{className:`ac-sort-col${C.done?" ac-sort-col--done":""}`,style:{"--sort-color":x.color},children:[e.jsxs("div",{className:"ac-sort-header",children:[e.jsx("span",{className:"ac-sort-name",children:x.label}),e.jsx("span",{className:"ac-badge",children:x.complexity})]}),C.done&&e.jsx("div",{className:"ac-done-badge",children:"Done ✓"}),e.jsx("div",{className:"ac-bars",children:C.array.map((v,P)=>{const S=C.comparing.includes(P),D=C.swapping.includes(P);return e.jsx("div",{className:`ac-bar${S?" ac-bar--cmp":""}${D?" ac-bar--swp":""}${C.done?" ac-bar--done":""}`,style:{height:`${v/f*100}%`}},P)})}),e.jsxs("div",{className:"ac-sort-metrics",children:[e.jsxs("div",{className:"ac-sm",children:[e.jsx("span",{className:"ac-sm-val",children:C.comparisons}),e.jsx("span",{className:"ac-sm-lbl",children:"Comparisons"})]}),e.jsxs("div",{className:"ac-sm",children:[e.jsx("span",{className:"ac-sm-val",children:C.swaps}),e.jsx("span",{className:"ac-sm-lbl",children:x.swap})]})]})]},m):null})}),e.jsxs("div",{className:"ac-legend",children:[e.jsxs("span",{className:"ac-leg",children:[e.jsx("span",{className:"ac-leg-dot",style:{background:"#fbbf24"}}),"Comparing"]}),e.jsxs("span",{className:"ac-leg",children:[e.jsx("span",{className:"ac-leg-dot",style:{background:"#ef4444"}}),"Swapping/Writing"]}),e.jsxs("span",{className:"ac-leg",children:[e.jsx("span",{className:"ac-leg-dot",style:{background:"#10b981"}}),"Sorted"]})]})]})}const hk=16;function pk(){const n=new Set;for(;n.size<hk;)n.add(Math.floor(Math.random()*85)+10);return[...n].sort((t,r)=>t-r)}function fk(n,t){const r=[];for(let s=0;s<n.length;s++){const i=n[s]===t;if(r.push({checking:s,found:i,done:i,notFound:!1,comparisons:s+1}),i)return r}return r.push({checking:-1,found:!1,done:!0,notFound:!0,comparisons:n.length}),r}function mk(n,t){const r=[];let s=0,i=n.length-1,a=0;for(;s<=i;){const l=s+i>>1;a++;const o=n[l]===t;if(r.push({lo:s,hi:i,mid:l,found:o,done:o,notFound:!1,comparisons:a}),o)return r;n[l]<t?s=l+1:i=l-1}return r.push({lo:-1,hi:-1,mid:-1,found:!1,done:!0,notFound:!0,comparisons:a}),r}const Xa={checking:-1,found:!1,done:!1,notFound:!1,comparisons:0},Ya={lo:-1,hi:-1,mid:-1,found:!1,done:!1,notFound:!1,comparisons:0};function gk(){const[n]=p.useState(pk),[t,r]=p.useState(""),[s,i]=p.useState(Xa),[a,l]=p.useState(Ya),[o,c]=p.useState(!1),d=p.useRef(0),u=p.useRef(0),h=p.useRef([]),g=p.useRef([]),b=p.useRef(null),N=()=>{const f=parseInt(t,10);isNaN(f)||(clearInterval(b.current),h.current=fk(n,f),g.current=mk(n,f),d.current=0,u.current=0,i(Xa),l({...Ya,lo:0,hi:n.length-1}),c(!0),b.current=setInterval(()=>{const m=d.current,x=u.current,C=h.current,v=g.current;m<C.length&&(i(C[m]),d.current=m+1),x<v.length&&(l(v[x]),u.current=x+1),m>=C.length-1&&x>=v.length-1&&(clearInterval(b.current),c(!1))},400))},y=()=>{clearInterval(b.current),c(!1),r(""),i(Xa),l(Ya)},j=({state:f,isLinear:m})=>f.notFound?e.jsxs("span",{className:"ac-result-notfound",children:["Not found — ",f.comparisons," step",f.comparisons!==1?"s":""]}):f.found?e.jsxs("span",{className:"ac-result-found",children:["Found in ",f.comparisons," step",f.comparisons!==1?"s":"","!"]}):f.comparisons>0?e.jsxs("span",{className:"ac-result-idle",children:[f.comparisons," step",f.comparisons!==1?"s":"","…"]}):e.jsx("span",{className:"ac-result-idle",children:"Awaiting search"});return e.jsxs("div",{className:"ac-section",children:[e.jsx("div",{className:"ac-controls",children:e.jsxs("div",{className:"ac-ctrl-row",children:[e.jsxs("div",{className:"ac-ctrl-group",children:[e.jsx("span",{className:"ac-label",children:"Target value"}),e.jsxs("div",{className:"ac-search-input-row",children:[e.jsx("input",{type:"number",className:"ac-num-input",placeholder:"Enter a number…",value:t,onChange:f=>r(f.target.value),onKeyDown:f=>f.key==="Enter"&&!o&&N(),disabled:o}),e.jsxs("button",{className:"btn btn-insert",onClick:N,disabled:o||!t,children:[e.jsx(ze,{size:13})," Search"]}),e.jsxs("button",{className:"btn btn-clear",onClick:y,children:[e.jsx(mn,{size:12})," Reset"]})]})]}),e.jsx("p",{className:"ac-search-hint",children:"Click a value below to autofill, or type any number (even one not in the array)."})]})}),e.jsx("div",{className:"ac-search-label",children:"Sorted array (click a value to target it):"}),e.jsx("div",{className:"ac-arr-pills",children:n.map((f,m)=>e.jsx("button",{className:"ac-pill",onClick:()=>r(String(f)),disabled:o,children:f},m))}),e.jsxs("div",{className:"ac-search-grid",children:[e.jsxs("div",{className:"ac-search-col",style:{"--sc":"#6366f1"},children:[e.jsxs("div",{className:"ac-search-col-hd",children:[e.jsx("span",{className:"ac-search-col-dot"}),e.jsx("span",{className:"ac-search-col-name",children:"Linear Search"}),e.jsx("span",{className:"ac-badge",children:"O(n)"})]}),e.jsx("div",{className:"ac-search-vis",children:n.map((f,m)=>{const x=s.checking===m,C=s.found&&x,v=!s.notFound&&s.checking>m;return e.jsx("div",{className:`ac-sv-box${C?" ac-sv--found":x?" ac-sv--checking":v?" ac-sv--past":""}`,children:f},m)})}),e.jsx("div",{className:"ac-result",children:e.jsx(j,{state:s,isLinear:!0})})]}),e.jsxs("div",{className:"ac-search-col",style:{"--sc":"#10b981"},children:[e.jsxs("div",{className:"ac-search-col-hd",children:[e.jsx("span",{className:"ac-search-col-dot"}),e.jsx("span",{className:"ac-search-col-name",children:"Binary Search"}),e.jsx("span",{className:"ac-badge",children:"O(log n)"})]}),e.jsx("div",{className:"ac-search-vis",children:n.map((f,m)=>{const x=a.lo!==-1&&m>=a.lo&&m<=a.hi,C=a.mid===m,v=a.found&&C,P=a.lo!==-1&&!x;return e.jsx("div",{className:`ac-sv-box${v?" ac-sv--found":C?" ac-sv--checking":P?" ac-sv--elim":x?" ac-sv--range":""}`,children:f},m)})}),e.jsx("div",{className:"ac-result",children:e.jsx(j,{state:a})})]})]}),e.jsxs("div",{className:"ac-legend",children:[e.jsxs("span",{className:"ac-leg",children:[e.jsx("span",{className:"ac-leg-dot",style:{background:"#fbbf24"}}),"Checking"]}),e.jsxs("span",{className:"ac-leg",children:[e.jsx("span",{className:"ac-leg-dot",style:{background:"#10b981"}}),"Found"]}),e.jsxs("span",{className:"ac-leg",children:[e.jsx("span",{className:"ac-leg-dot",style:{background:"#6b7280"}}),"Eliminated"]}),e.jsxs("span",{className:"ac-leg",children:[e.jsx("span",{className:"ac-leg-dot",style:{background:"#6366f1",opacity:.4}}),"Active range (binary)"]})]})]})}const An=11,xk=[{label:"5 Keys",keys:["cat","dog","fox","ant","bee"]},{label:"8 Keys",keys:["cat","dog","fox","ant","bee","cow","hen","pig"]},{label:"8 Names",keys:["alice","bob","carol","dave","eve","frank","grace","hank"]}];function Nc(n,t){let r=0;for(let s=0;s<n.length;s++)r=(r*31+n.charCodeAt(s))%t;return r}function Gt(n){return{cap:n,table:Array(n).fill(null),size:0,totalProbes:0,collisions:0,maxProbes:0,log:[]}}function Ja(n){return{cap:n,table:Array.from({length:n},()=>[]),size:0,totalProbes:0,collisions:0,maxChain:0,log:[]}}function cu(n,t){if(n.size>=n.cap)return n;let s=Nc(t,n.cap),i=0;for(;n.table[s]!==null&&n.table[s]!==t;)if(s=(s+1)%n.cap,i++,i>=n.cap)return n;if(n.table[s]===t)return n;const a=i+1,l=i>0,o=[...n.table];return o[s]=t,{...n,table:o,size:n.size+1,totalProbes:n.totalProbes+a,collisions:n.collisions+(l?1:0),maxProbes:Math.max(n.maxProbes,a),log:[{key:t,slot:s,probes:a,collision:l},...n.log.slice(0,6)]}}function du(n,t){if(n.size>=n.cap)return n;const r=Nc(t,n.cap);let s=0,i=r;for(let c=0;c<n.cap&&(i=(r+c*c)%n.cap,n.table[i]!==null);c++){if(n.table[i]===t)return n;s++}if(n.table[i]!==null)return n;const a=s+1,l=s>0,o=[...n.table];return o[i]=t,{...n,table:o,size:n.size+1,totalProbes:n.totalProbes+a,collisions:n.collisions+(l?1:0),maxProbes:Math.max(n.maxProbes,a),log:[{key:t,slot:i,probes:a,collision:l},...n.log.slice(0,6)]}}function uu(n,t){const r=Nc(t,n.cap),s=n.table[r];if(s.includes(t))return n;const i=s.length,a=s.length>0,l=n.table.map((o,c)=>c===r?[...o,t]:o);return{...n,table:l,size:n.size+1,totalProbes:n.totalProbes+i,collisions:n.collisions+(a?1:0),maxChain:Math.max(n.maxChain,s.length+1),log:[{key:t,slot:r,probes:i,collision:a},...n.log.slice(0,6)]}}function Za({name:n,formula:t,color:r,state:s,currentKey:i,isChaining:a,isWinner:l}){const o=s.log[0],c=(o==null?void 0:o.key)===i?o.slot:null,d=s.size/s.cap;return e.jsxs("div",{className:`hc-column${l&&s.size>0?" hc-column--winner":""}`,style:{"--col-color":r},children:[e.jsxs("div",{className:"hc-col-header",children:[e.jsxs("div",{className:"hc-col-title-group",children:[e.jsx("span",{className:"hc-col-dot"}),e.jsx("span",{className:"hc-col-name",children:n})]}),l&&s.size>0&&e.jsxs("span",{className:"hc-winner-badge",children:[e.jsx(zr,{size:11})," Best"]})]}),e.jsx("p",{className:"hc-col-formula",children:t}),e.jsxs("div",{className:"hc-metrics",children:[e.jsxs("div",{className:"hc-metric",children:[e.jsx("span",{className:"hc-metric-value",children:s.totalProbes}),e.jsx("span",{className:"hc-metric-label",children:"Total Probes"})]}),e.jsxs("div",{className:"hc-metric",children:[e.jsx("span",{className:"hc-metric-value",children:s.collisions}),e.jsx("span",{className:"hc-metric-label",children:"Collisions"})]}),e.jsxs("div",{className:"hc-metric",children:[e.jsx("span",{className:"hc-metric-value",children:a?s.maxChain:s.maxProbes}),e.jsx("span",{className:"hc-metric-label",children:a?"Max Chain":"Max Probes"})]}),e.jsxs("div",{className:"hc-metric",children:[e.jsx("span",{className:"hc-metric-value",children:`${(d*100).toFixed(0)}%`}),e.jsx("span",{className:"hc-metric-label",children:"Load Factor"})]})]}),e.jsx("div",{className:"hc-load-bar",children:e.jsx("div",{className:"hc-load-fill",style:{width:`${Math.min(d*100,100)}%`,background:d>.7?"#ef4444":d>.5?"#f59e0b":r}})}),e.jsx("div",{className:"hc-slots",children:a?s.table.map((u,h)=>e.jsxs("div",{className:`hc-slot${u.length>0?" filled":" empty"}${c===h?" newly-inserted":""}`,children:[e.jsx("div",{className:"hc-slot-index",children:h}),e.jsx("div",{className:"hc-chain-items",children:u.length===0?e.jsx("span",{className:"hc-empty-label",children:"—"}):u.map((g,b)=>e.jsxs(_e.Fragment,{children:[b>0&&e.jsx(Hn,{size:9,className:"hc-chain-sep"}),e.jsx("span",{className:`hc-chain-key${g===i?" hc-new-key":""}`,children:g})]},b))})]},h)):s.table.map((u,h)=>e.jsxs("div",{className:`hc-slot${u?" filled":" empty"}${c===h?" newly-inserted":""}`,children:[e.jsx("div",{className:"hc-slot-index",children:h}),e.jsx("div",{className:"hc-slot-key",children:u?e.jsx("span",{className:u===i?"hc-new-key":"",children:u}):e.jsx("span",{className:"hc-empty-label",children:"—"})})]},h))})]})}function vk(){const[n,t]=p.useState(()=>Gt(An)),[r,s]=p.useState(()=>Gt(An)),[i,a]=p.useState(()=>Ja(An)),[l,o]=p.useState(null),[c,d]=p.useState(""),[u,h]=p.useState(!1),g=()=>{const v=c.trim();!v||u||(o(v),t(P=>cu(P,v)),s(P=>du(P,v)),a(P=>uu(P,v)),d(""),setTimeout(()=>o(P=>P===v?null:P),1400))},b=async v=>{if(u)return;h(!0);let P=Gt(An),S=Gt(An),D=Ja(An);t(P),s(S),a(D),o(null),await new Promise(M=>setTimeout(M,60));for(const M of v)P=cu(P,M),S=du(S,M),D=uu(D,M),o(M),t(P),s(S),a(D),await new Promise(E=>setTimeout(E,300));o(null),h(!1)},N=()=>{u||(t(Gt(An)),s(Gt(An)),a(Ja(An)),o(null),d(""))},y=n.size>0,j=y?Math.min(n.totalProbes,r.totalProbes,i.totalProbes):-1,f=y&&n.totalProbes===j,m=y&&r.totalProbes===j,x=y&&i.totalProbes===j,C=[f&&"Linear",m&&"Quadratic",x&&"Chaining"].filter(Boolean).join(" & ");return e.jsxs("div",{className:"ac-section",children:[e.jsx("div",{className:"ac-controls",children:e.jsxs("div",{className:"ac-ctrl-row ac-hash-row",children:[e.jsx("input",{className:"hc-key-input",type:"text",placeholder:"Type a key…",value:c,onChange:v=>d(v.target.value),onKeyDown:v=>v.key==="Enter"&&g(),disabled:u}),e.jsx("button",{className:"btn btn-insert",onClick:g,disabled:!c.trim()||u,children:"Insert into All"}),xk.map(v=>e.jsxs("button",{className:"btn hc-preset-btn",onClick:()=>b(v.keys),disabled:u,children:[e.jsx(ze,{size:11})," ",v.label]},v.label)),e.jsxs("button",{className:"btn btn-clear",onClick:N,disabled:u,children:[e.jsx(mn,{size:12})," Reset"]})]})}),y&&e.jsxs("div",{className:"hc-winner-banner",children:[e.jsx(zr,{size:14}),e.jsxs("span",{children:[e.jsx("strong",{children:C})," used fewest total probes (",j,")"]})]}),l&&e.jsxs("div",{className:"hc-current-key-banner",children:["Inserting ",e.jsxs("strong",{children:['"',l,'"']}),"…"]}),e.jsxs("div",{className:"hc-grid",children:[e.jsx(Za,{name:"Linear Probing",formula:"h(k,i) = (h₀ + i) % cap",color:"#6366f1",state:n,currentKey:l,isChaining:!1,isWinner:f}),e.jsx(Za,{name:"Quadratic Probing",formula:"h(k,i) = (h₀ + i²) % cap",color:"#f59e0b",state:r,currentKey:l,isChaining:!1,isWinner:m}),e.jsx(Za,{name:"Separate Chaining",formula:"slot = h(k), chain append",color:"#10b981",state:i,currentKey:l,isChaining:!0,isWinner:x})]}),e.jsxs("div",{className:"hc-legend",children:[e.jsx("span",{className:"hc-legend-title",children:"Probe count:"}),e.jsx("span",{className:"hc-legend-item",children:"Open addressing — slots examined (min 1)"}),e.jsx("span",{className:"hc-legend-sep",children:"·"}),e.jsx("span",{className:"hc-legend-item",children:"Chaining — chain nodes traversed before append (0 if empty)"})]})]})}function yk(){const[n,t]=p.useState("sorting");return e.jsxs("div",{className:"container ac-page",children:[e.jsxs("div",{className:"ac-header",children:[e.jsx("h1",{className:"ac-title",children:"Algorithm Comparison"}),e.jsx("p",{className:"ac-subtitle",children:"Run algorithms side-by-side on the same data — watch how they differ in speed, comparisons, and strategy in real time."})]}),e.jsx("div",{className:"ac-tab-bar",children:rk.map(({id:r,label:s,Icon:i})=>e.jsxs("button",{className:`ac-tab-btn${n===r?" active":""}`,onClick:()=>t(r),children:[e.jsx(i,{size:15})," ",s]},r))}),n==="sorting"&&e.jsx(uk,{}),n==="searching"&&e.jsx(gk,{}),n==="hashing"&&e.jsx(vk,{})]})}function Kr(n,t){return n.split(/(`[^`\n]+`|\*\*[^*\n]+\*\*|\*[^*\n]+\*)/g).map((s,i)=>{const a=`${t}-i${i}`;return s.startsWith("`")&&s.endsWith("`")&&s.length>2?e.jsx("code",{className:"ai-inline-code",children:s.slice(1,-1)},a):s.startsWith("**")&&s.endsWith("**")&&s.length>4?e.jsx("strong",{children:s.slice(2,-2)},a):s.startsWith("*")&&s.endsWith("*")&&s.length>2?e.jsx("em",{className:"ai-md-em",children:s.slice(1,-1)},a):s||null})}function jk(n,t){const r=n.split(`
`),s=[];let i=[],a=[],l=null;const o=()=>{const d=i.join(" ").trim();d&&s.push({type:"p",content:d}),i=[]},c=()=>{a.length&&(s.push({type:l,items:[...a]}),a=[],l=null)};for(const d of r){const u=d.trim();if(!u){o(),c();continue}const h=u.match(/^## (.+)$/),g=u.match(/^### (.+)$/),b=u.match(/^[-*+] (.+)$/),N=u.match(/^\d+\. (.+)$/);h||g?(o(),c(),s.push({type:g?"h3":"h2",content:(g||h)[1]})):b?(o(),l&&l!=="ul"&&c(),l="ul",a.push(b[1])):N?(o(),l&&l!=="ol"&&c(),l="ol",a.push(N[1])):(c(),i.push(d))}return o(),c(),s.map((d,u)=>{const h=`${t}-b${u}`;switch(d.type){case"h2":return e.jsx("p",{className:"ai-md-h2",children:Kr(d.content,h)},h);case"h3":return e.jsx("p",{className:"ai-md-h3",children:Kr(d.content,h)},h);case"ul":return e.jsx("ul",{className:"ai-md-ul",children:d.items.map((g,b)=>e.jsx("li",{children:Kr(g,`${h}-li${b}`)},b))},h);case"ol":return e.jsx("ol",{className:"ai-md-ol",children:d.items.map((g,b)=>e.jsx("li",{children:Kr(g,`${h}-li${b}`)},b))},h);case"p":return e.jsx("p",{className:"ai-md-p",children:Kr(d.content,h)},h);default:return null}})}function Nk(n){return n>=8?"var(--success)":n>=6?"var(--warning)":"var(--danger)"}function bk({score:n}){const r=2*Math.PI*34,s=n/10*r,i=Nk(n);return e.jsxs("div",{className:"rr-score-circle",children:[e.jsxs("svg",{width:"88",height:"88",viewBox:"0 0 88 88",children:[e.jsx("circle",{className:"rr-score-circle-bg",cx:"44",cy:"44",r:34}),e.jsx("circle",{className:"rr-score-circle-fill",cx:"44",cy:"44",r:34,stroke:i,strokeDasharray:r,strokeDashoffset:r-s})]}),e.jsxs("span",{className:"rr-score-number",style:{color:i},children:[n,"/10"]})]})}function kk(n){return n>=75?"var(--success)":n>=50?"var(--warning)":"var(--danger)"}function wk({score:n}){const r=2*Math.PI*40,s=n/100*r,i=kk(n);return e.jsxs("div",{className:"rr-ats-circle",children:[e.jsxs("svg",{width:"100",height:"100",viewBox:"0 0 100 100",children:[e.jsx("circle",{className:"rr-score-circle-bg",cx:"50",cy:"50",r:40}),e.jsx("circle",{className:"rr-score-circle-fill",cx:"50",cy:"50",r:40,stroke:i,strokeDasharray:r,strokeDashoffset:r-s})]}),e.jsxs("div",{className:"rr-ats-circle-inner",children:[e.jsxs("span",{className:"rr-ats-number",style:{color:i},children:[n,"%"]}),e.jsx("span",{className:"rr-ats-sublabel",children:"ATS"})]})]})}function ho({text:n,className:t=""}){const[r,s]=p.useState(!1),i=()=>{navigator.clipboard.writeText(n).then(()=>{s(!0),setTimeout(()=>s(!1),2e3)})};return e.jsxs("button",{className:`rr-copy-btn ${t}`,onClick:i,title:"Copy to clipboard",children:[r?e.jsx(uc,{size:12}):e.jsx(pc,{size:12}),r?"Copied":"Copy"]})}function Sk({rewrite:n,index:t}){const[r,s]=p.useState(!0);return e.jsxs("div",{className:"rr-rewrite-card",children:[e.jsxs("div",{className:"rr-rewrite-header",onClick:()=>s(i=>!i),children:[e.jsxs("div",{className:"rr-rewrite-badge",children:["#",t+1]}),n.section&&e.jsx("span",{className:"rr-rewrite-section",children:n.section}),e.jsx("span",{className:"rr-rewrite-toggle",children:r?e.jsx(hc,{size:14}):e.jsx(Ms,{size:14})})]}),r&&e.jsxs("div",{className:"rr-rewrite-body",children:[e.jsxs("div",{className:"rr-rewrite-original",children:[e.jsx("div",{className:"rr-rewrite-label rr-label-before",children:"Before"}),e.jsx("p",{className:"rr-rewrite-text",children:n.original})]}),e.jsx("div",{className:"rr-rewrite-arrow",children:e.jsx(me,{size:16})}),e.jsxs("div",{className:"rr-rewrite-new",children:[e.jsxs("div",{className:"rr-rewrite-label-row",children:[e.jsx("div",{className:"rr-rewrite-label rr-label-after",children:"After"}),e.jsx(ho,{text:n.rewritten})]}),e.jsx("p",{className:"rr-rewrite-text rr-rewrite-text-new",children:n.rewritten})]}),n.reason&&e.jsxs("div",{className:"rr-rewrite-reason",children:[e.jsx(ye,{size:11}),e.jsx("span",{children:n.reason})]})]})]})}const el=/^[•\-\*►▸▪◦‣]\s+/,po=/^[A-Z][A-Z\s&\/\-–]{2,}:?\s*$/,hu=/^[-─═=_]{3,}\s*$/,Ct=/(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\.?\s+\d{4}\s*[-–—]\s*(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\.?\s+\d{4}|\b\d{4}\s*[-–—]\s*(?:\d{4}|Present|Current|Now|Today)\b|(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\.?\s+\d{4}/gi;function Ck(n){const t=[...n.matchAll(Ct)];if(!t.length)return{main:n,date:""};const r=t.length>=2?`${t[0][0]} – ${t[t.length-1][0]}`:t[0][0];return{main:n.replace(Ct,"").replace(/\s*[|•–—]\s*$/,"").replace(/^\s*[|•–—]\s*/,"").trim()||n,date:r}}function pu(n,t){const r=/SKILL|TECH|TOOL|LANGUAGE|FRAMEWORK|STACK|COMPETENC|PROFICIEN/i.test(n),s=[];let i=0;for(;i<t.length;){const a=t[i].trim();if(!a){i++;continue}if(el.test(a)){s.push({type:"bullet",text:a.replace(el,"")}),i++;continue}if(r&&a.includes(",")){const o=a.indexOf(":");if(o>0&&o<28){const c=a.slice(0,o).trim(),d=a.slice(o+1).split(",").map(u=>u.trim()).filter(Boolean);s.push({type:"skill-row",category:c,skills:d})}else s.push({type:"skill-row",category:"",skills:a.split(",").map(c=>c.trim()).filter(Boolean)});i++;continue}const l=Ct.test(a);if(Ct.lastIndex=0,l){const{main:o,date:c}=Ck(a);for(s.push({type:"entry-header",main:o,date:c}),i++;i<t.length&&!t[i].trim();)i++;if(i<t.length){const d=t[i].trim();d&&!el.test(d)&&!po.test(d)&&!Ct.test(d)&&d.length<90&&(Ct.lastIndex=0,s.push({type:"subtitle",text:d}),i++),Ct.lastIndex=0}continue}if(a.length<72&&!a.includes(",")&&!/[.!?]$/.test(a)){s.push({type:"entry-header",main:a,date:""}),i++;continue}s.push({type:"text",text:a}),i++}return s}function Tk(n){var c;const t=n.split(`
`).map(d=>d.trimEnd());let r=0;for(;r<t.length&&!t[r].trim();)r++;const s=((c=t[r])==null?void 0:c.trim())||"";r++;const i=[];for(let d=0;d<6&&r<t.length;d++,r++){const u=t[r].trim();if(u){if(po.test(u)||hu.test(u))break;u.split(/\s*[|•]\s*/).map(h=>h.trim()).filter(Boolean).forEach(h=>i.push(h))}}const a=[];let l=null,o=[];for(;r<t.length;r++){const d=t[r],u=d.trim();if(!hu.test(u)){if(!u){o.length&&o.push("");continue}if(po.test(u)||/^#{1,3}\s+/.test(u)){l!==null&&a.push({title:l,blocks:pu(l,o)}),l=u.replace(/^#+\s+/,"").replace(/:$/,"").trim(),o=[];continue}l!==null&&o.push(d)}}return l!==null&&o.length&&a.push({title:l,blocks:pu(l,o)}),{name:s,contactItems:i,sections:a}}const _k=`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');
*{box-sizing:border-box;margin:0;padding:0}
body{background:#fff;color:#1a1a1a;font-family:Georgia,"Times New Roman",serif;font-size:10.5pt;line-height:1.5;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.paper{padding:.65in .75in}
.rh{padding-bottom:.3rem;border-bottom:2.5px solid #0f2044;margin-bottom:.15rem}
.rname{font-family:Montserrat,sans-serif;font-size:24pt;font-weight:800;color:#0f2044;letter-spacing:-.02em;line-height:1.1}
.rrole{font-family:Montserrat,sans-serif;font-size:11pt;font-weight:500;color:#1d4ed8;margin-top:.15rem}
.rcontact{display:flex;flex-wrap:wrap;align-items:center;font-family:Montserrat,sans-serif;font-size:8.5pt;color:#555;padding:.25rem 0 .3rem;border-bottom:1px solid #dde}
.csep{margin:0 .4rem;color:#bbb}
.rsec{margin-top:.45rem}
.rsec-title{font-family:Montserrat,sans-serif;font-size:8pt;font-weight:800;text-transform:uppercase;letter-spacing:.12em;color:#0f2044;border-bottom:1.5px solid #0f2044;padding-bottom:.1rem;margin-bottom:.25rem}
.reh{display:flex;justify-content:space-between;align-items:baseline;gap:.5rem;margin-top:.35rem;margin-bottom:.03rem}
.reh-co{font-family:Montserrat,sans-serif;font-size:10.5pt;font-weight:700;color:#0f2044}
.reh-date{font-family:Montserrat,sans-serif;font-size:8.5pt;color:#666;white-space:nowrap;flex-shrink:0}
.rsub{font-size:10pt;color:#1d4ed8;font-style:italic;margin-bottom:.1rem}
.rb{display:flex;align-items:flex-start;gap:.35rem;margin:.09rem 0;padding-left:.05rem;font-size:10pt;color:#333;line-height:1.45}
.rdot{color:#1d4ed8;font-size:9pt;margin-top:.08rem;flex-shrink:0}
.rsr{display:flex;align-items:flex-start;gap:.4rem;margin:.18rem 0}
.rsr-cat{font-family:Montserrat,sans-serif;font-size:8.5pt;font-weight:700;color:#0f2044;white-space:nowrap;min-width:85px;padding-top:2px}
.rskills{display:flex;flex-wrap:wrap;gap:.2rem}
.rchip{font-family:Montserrat,sans-serif;font-size:8pt;padding:1px 6px;background:#eff6ff;border:1px solid #bfdbfe;border-radius:3px;color:#1e40af}
.rtext{font-size:10pt;color:#333;margin:.05rem 0;line-height:1.5}
@page{size:letter;margin:0}
`;function Lk({section:n}){return e.jsxs("div",{className:"rv-section",children:[e.jsx("h2",{className:"rv-sec-title",children:n.title}),e.jsx("div",{className:"rv-sec-body",children:n.blocks.map((t,r)=>{switch(t.type){case"entry-header":return e.jsxs("div",{className:"rv-entry-header",children:[e.jsx("span",{className:"rv-entry-company",children:t.main}),t.date&&e.jsx("span",{className:"rv-entry-date",children:t.date})]},r);case"subtitle":return e.jsx("div",{className:"rv-entry-subtitle",children:t.text},r);case"bullet":return e.jsxs("div",{className:"rv-bullet",children:[e.jsx("span",{className:"rv-bullet-dot",children:"▸"}),e.jsx("span",{children:t.text})]},r);case"skill-row":return e.jsxs("div",{className:"rv-skill-row",children:[t.category&&e.jsx("span",{className:"rv-skill-cat",children:t.category}),e.jsx("div",{className:"rv-skills",children:t.skills.map((s,i)=>e.jsx("span",{className:"rv-chip",children:s},i))})]},r);case"text":return e.jsx("p",{className:"rv-text",children:t.text},r);default:return null}})})]})}function Ek({text:n,targetRole:t,onClose:r}){const{name:s,contactItems:i,sections:a}=Tk(n);p.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}),[]);const l=()=>{const o=window.open("","_blank","width=900,height=700");if(!o)return;const c=i.map((h,g)=>g===0?`<span>${h}</span>`:`<span class="csep">•</span><span>${h}</span>`).join(""),d=h=>{switch(h.type){case"entry-header":return`<div class="reh"><span class="reh-co">${h.main}</span>${h.date?`<span class="reh-date">${h.date}</span>`:""}</div>`;case"subtitle":return`<div class="rsub">${h.text}</div>`;case"bullet":return`<div class="rb"><span class="rdot">▸</span><span>${h.text}</span></div>`;case"skill-row":return`<div class="rsr">${h.category?`<span class="rsr-cat">${h.category}</span>`:""}<div class="rskills">${h.skills.map(g=>`<span class="rchip">${g}</span>`).join("")}</div></div>`;case"text":return`<p class="rtext">${h.text}</p>`;default:return""}},u=a.map(h=>`
      <div class="rsec">
        <div class="rsec-title">${h.title}</div>
        ${h.blocks.map(d).join("")}
      </div>`).join("");o.document.write(`<!DOCTYPE html>
<html><head><meta charset="utf-8"/><title>${s} — Resume</title><style>${_k}</style></head>
<body><div class="paper">
  <div class="rh">
    <div class="rname">${s}</div>
    ${t?`<div class="rrole">${t}</div>`:""}
  </div>
  ${i.length?`<div class="rcontact">${c}</div>`:""}
  ${u}
</div></body></html>`),o.document.close(),o.focus(),setTimeout(()=>{o.print(),o.close()},700)};return e.jsx("div",{className:"rr-pdf-modal-overlay",onClick:r,children:e.jsxs("div",{className:"rr-pdf-modal-shell",onClick:o=>o.stopPropagation(),children:[e.jsxs("div",{className:"rr-pdf-toolbar",children:[e.jsxs("div",{className:"rr-pdf-toolbar-left",children:[e.jsx(or,{size:15}),e.jsx("span",{children:"Resume Preview"}),t&&e.jsx("span",{className:"rr-pdf-role-badge",children:t})]}),e.jsxs("div",{className:"rr-pdf-toolbar-right",children:[e.jsxs("button",{className:"rr-pdf-print-btn",onClick:l,children:[e.jsx(Dp,{size:14})," Save as PDF"]}),e.jsx("button",{className:"rr-pdf-close-btn",onClick:r,title:"Close",children:e.jsx(As,{size:15})})]})]}),e.jsx("div",{className:"rr-pdf-scroll",children:e.jsxs("div",{className:"rr-pdf-paper",children:[e.jsxs("div",{className:"rv-header",children:[e.jsx("h1",{className:"rv-name",children:s}),t&&e.jsx("div",{className:"rv-role",children:t})]}),i.length>0&&e.jsx("div",{className:"rv-contact",children:i.map((o,c)=>e.jsxs("span",{className:"rv-contact-item",children:[c>0&&e.jsx("span",{className:"rv-contact-sep",children:"|"}),o]},c))}),a.map((o,c)=>e.jsx(Lk,{section:o},c))]})})]})})}const nl=2e4,Ok=".pdf,.docx,.txt";function Rk(){var Xn,On,bc,kc,wc;const[n,t]=p.useState(""),[r,s]=p.useState(""),[i,a]=p.useState(!1),[l,o]=p.useState(null),[c,d]=p.useState(""),[u,h]=p.useState(null),[g,b]=p.useState(!1),[N,y]=p.useState(!1),j=p.useRef(null),[f,m]=p.useState("review"),[x,C]=p.useState(""),[v,P]=p.useState(!1),[S,D]=p.useState(null),[M,E]=p.useState(""),[q,K]=p.useState(new Set),[O,A]=p.useState(!1),[k,L]=p.useState(""),[V,T]=p.useState(""),[_,z]=p.useState([]),[F,B]=p.useState(""),[I,$]=p.useState("improved"),[R,w]=p.useState(!0),[H,Y]=p.useState(!1),ee=J=>{t(J.target.value),u&&h(null),l&&o(null),S&&D(null),c&&d("")},te=async J=>{if(!J)return;const ie=J.name.split(".").pop().toLowerCase();if(!["pdf","docx","txt"].includes(ie)){d("Unsupported file type. Please upload a PDF, DOCX, or TXT file.");return}b(!0),d(""),o(null),D(null);try{const bt=new FormData;bt.append("file",J);const Sc=await fetch("/api/resume-upload",{method:"POST",body:bt}),Cc=await Sc.json();if(!Sc.ok){d(Cc.error||"Failed to parse file.");return}t(Cc.text),h(J.name)}catch{d("Network error. Make sure the server is running.")}finally{b(!1)}},U=J=>te(J.target.files[0]),Q=J=>{J.preventDefault(),y(!1),te(J.dataTransfer.files[0])},ce=()=>{h(null),t(""),o(null),D(null),d(""),j.current&&(j.current.value="")},re=async()=>{if(n.trim()){A(!0),L(""),T(""),z([]),B(""),$("improved");try{const J=await fetch("/api/resume-improve",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({resume:n,targetRole:r})}),ie=await J.json();if(!J.ok){B(ie.error||"Something went wrong.");return}L(ie.improved_resume),T(ie.improved_resume),z(ie.changes_made||[])}catch{B("Network error. Make sure the server is running.")}finally{A(!1)}}},je=()=>Y(!0),de=()=>{T(k),$("improved")},ln=async()=>{if(n.trim()){a(!0),o(null),d("");try{const J=await fetch("/api/resume-review",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({resume:n,targetRole:r})}),ie=await J.json();if(!J.ok){d(ie.error||"Something went wrong. Please try again.");return}o(ie),m("review")}catch{d("Network error. Make sure the server is running.")}finally{a(!1)}}},Z=async()=>{if(!(!n.trim()||!x.trim())){P(!0),D(null),E(""),K(new Set);try{const J=await fetch("/api/resume-tailor",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({resume:n,jobDescription:x,targetRole:r})}),ie=await J.json();if(!J.ok){E(ie.error||"Something went wrong.");return}D(ie)}catch{E("Network error. Make sure the server is running.")}finally{P(!1)}}},ue=J=>{K(ie=>{const bt=new Set(ie);return bt.has(J)?bt.delete(J):bt.add(J),bt})},he=n.length,De=he>nl*.85,qt=n.trim()&&x.trim();return e.jsxs("div",{className:"rr-page",children:[H&&e.jsx(Ek,{text:V,targetRole:r,onClose:()=>Y(!1)}),e.jsxs("div",{className:"rr-header",children:[e.jsx("div",{className:"rr-header-icon",children:e.jsx(or,{size:24})}),e.jsxs("div",{children:[e.jsx("h1",{className:"rr-title",children:"Resume Reviewer"}),e.jsx("p",{className:"rr-subtitle",children:"Get honest, brutally direct feedback from an AI with 15+ years of hiring experience. Then tailor your resume to any job description with ATS optimization and AI rewrites."})]})]}),e.jsxs("div",{className:"rr-layout",children:[e.jsxs("div",{className:"rr-input-panel",children:[e.jsxs("div",{children:[e.jsx("div",{className:"rr-panel-label",children:"Your Resume"}),e.jsxs("div",{className:`rr-upload-zone${N?" rr-upload-dragging":""}`,onClick:()=>{var J;return!g&&((J=j.current)==null?void 0:J.click())},onDragOver:J=>{J.preventDefault(),y(!0)},onDragLeave:()=>y(!1),onDrop:Q,children:[e.jsx("input",{ref:j,type:"file",accept:Ok,style:{display:"none"},onChange:U}),g?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"rr-spinner rr-spinner-upload"}),e.jsx("span",{children:"Extracting text…"})]}):u?e.jsxs(e.Fragment,{children:[e.jsx(or,{size:18,className:"rr-upload-icon-success"}),e.jsx("span",{className:"rr-upload-filename",children:u}),e.jsx("button",{className:"rr-upload-clear",onClick:J=>{J.stopPropagation(),ce()},title:"Remove file",children:e.jsx(As,{size:14})})]}):e.jsxs(e.Fragment,{children:[e.jsx(pv,{size:18}),e.jsxs("span",{children:[e.jsx("strong",{children:"Upload resume"})," or drag & drop"]}),e.jsx("span",{className:"rr-upload-hint",children:"PDF, DOCX, or TXT"})]})]}),e.jsx("div",{className:"rr-divider",children:e.jsx("span",{children:"or paste text below"})}),e.jsx("textarea",{className:"rr-textarea",placeholder:`Paste your resume text here...

Tip: Copy-paste from your PDF or Word document. Include all sections: contact info, summary, experience, education, skills, projects.`,value:n,onChange:ee,maxLength:nl,spellCheck:!1})]}),e.jsxs("div",{className:"rr-role-row",children:[e.jsx("div",{className:"rr-panel-label",children:"Target Role (optional)"}),e.jsx("input",{type:"text",className:"rr-role-input",placeholder:"e.g. Backend Software Engineer, ML Intern, Frontend Developer",value:r,onChange:J=>s(J.target.value)})]}),e.jsxs("div",{className:`rr-char-count ${De?"rr-char-warn":""}`,children:[he.toLocaleString()," / ",nl.toLocaleString()," characters"]}),e.jsx("button",{className:"rr-submit-btn",onClick:ln,disabled:i||!n.trim(),children:i?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"rr-spinner"}),"Analyzing..."]}):e.jsxs(e.Fragment,{children:[e.jsx(or,{size:16}),"Review My Resume"]})}),e.jsxs("div",{className:"rr-tailor-cta",onClick:()=>m("tailor"),children:[e.jsx(Ut,{size:14}),e.jsxs("span",{children:["Have a job description? ",e.jsx("strong",{children:"Tailor your resume"})," for it."]})]})]}),e.jsxs("div",{className:"rr-results-panel",children:[e.jsxs("div",{className:"rr-tabs",children:[e.jsxs("button",{className:`rr-tab${f==="review"?" rr-tab-active":""}`,onClick:()=>m("review"),children:[e.jsx(Hi,{size:14}),"Review",l&&e.jsxs("span",{className:"rr-tab-badge",children:[l.overall_score,"/10"]})]}),e.jsxs("button",{className:`rr-tab rr-tab-tailor${f==="tailor"?" rr-tab-active":""}`,onClick:()=>m("tailor"),children:[e.jsx(Ut,{size:14}),"Tailor",S&&e.jsxs("span",{className:`rr-tab-badge rr-tab-badge-ats ${S.ats_score>=75?"rr-badge-green":S.ats_score>=50?"rr-badge-amber":"rr-badge-red"}`,children:[S.ats_score,"%"]})]}),e.jsxs("button",{className:`rr-tab rr-tab-improve${f==="improve"?" rr-tab-active":""}`,onClick:()=>m("improve"),children:[e.jsx(ti,{size:14}),"Improve",k&&e.jsx("span",{className:"rr-tab-badge rr-badge-sparkle",children:"ready"})]})]}),f==="review"&&e.jsxs(e.Fragment,{children:[c&&e.jsxs("div",{className:"rr-error",children:[e.jsx(Wr,{size:16}),c]}),!l&&!c&&e.jsxs("div",{className:"rr-empty",children:[e.jsx("div",{className:"rr-empty-icon",children:e.jsx(or,{size:52})}),e.jsxs("p",{children:["Paste your resume on the left and click ",e.jsx("strong",{children:"Review My Resume"}),".",e.jsx("br",{}),"You'll get an honest score, specific strengths, improvements, and detailed feedback."]})]}),l&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"rr-score-card",children:[e.jsx(bk,{score:l.overall_score}),e.jsxs("div",{className:"rr-score-info",children:[e.jsx("div",{className:"rr-score-label",children:"Overall Score"}),e.jsx("p",{className:"rr-score-summary",children:l.summary})]})]}),e.jsxs("div",{className:"rr-cards-row",children:[e.jsxs("div",{className:"rr-card rr-card-green",children:[e.jsxs("div",{className:"rr-card-header",children:[e.jsx(en,{size:14}),e.jsx("span",{className:"rr-card-title",children:"Strengths"})]}),e.jsx("ul",{children:l.strengths.map((J,ie)=>e.jsx("li",{children:J},ie))})]}),e.jsxs("div",{className:"rr-card rr-card-amber",children:[e.jsxs("div",{className:"rr-card-header",children:[e.jsx(bn,{size:14}),e.jsx("span",{className:"rr-card-title",children:"Improvements"})]}),e.jsx("ul",{children:l.improvements.map((J,ie)=>e.jsx("li",{children:J},ie))})]}),l.missing_sections&&l.missing_sections.length>0&&e.jsxs("div",{className:"rr-card rr-card-red rr-card-full",children:[e.jsxs("div",{className:"rr-card-header",children:[e.jsx(Nr,{size:14}),e.jsx("span",{className:"rr-card-title",children:"Missing / Weak Sections"})]}),e.jsx("ul",{children:l.missing_sections.map((J,ie)=>e.jsx("li",{children:J},ie))})]})]}),e.jsxs("div",{className:"rr-feedback-box",children:[e.jsxs("div",{className:"rr-feedback-header",children:[e.jsx(ye,{size:16}),e.jsx("span",{className:"rr-feedback-title",children:"Detailed Feedback"})]}),e.jsx("div",{className:"rr-feedback-content",children:jk(l.actionable_feedback,"feedback")})]}),e.jsxs("button",{className:"rr-tailor-prompt-btn",onClick:()=>m("tailor"),children:[e.jsx(Ut,{size:15}),"Tailor this resume for a specific job",e.jsx(me,{size:14})]})]})]}),f==="improve"&&e.jsxs("div",{className:"rr-improve-tab",children:[!k&&!O&&e.jsxs("div",{className:"rr-improve-intro",children:[e.jsx("div",{className:"rr-improve-intro-icon",children:e.jsx(ti,{size:28})}),e.jsxs("div",{children:[e.jsx("div",{className:"rr-improve-intro-title",children:"AI Resume Rewriter"}),e.jsx("p",{className:"rr-improve-intro-desc",children:"The AI will rewrite your entire resume — stronger verbs, quantified impact, tighter bullets, and a punchy summary — while keeping all your real experience intact. Download the result as a polished, print-ready PDF."})]})]}),!n.trim()&&e.jsxs("div",{className:"rr-tailor-warn",children:[e.jsx(Wr,{size:14}),e.jsx("span",{children:"Please paste or upload your resume on the left first."})]}),F&&e.jsxs("div",{className:"rr-error",children:[e.jsx(Wr,{size:16}),F]}),!k&&e.jsx("button",{className:"rr-improve-btn",onClick:re,disabled:O||!n.trim(),children:O?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"rr-spinner rr-spinner-gold"}),"Rewriting your resume..."]}):e.jsxs(e.Fragment,{children:[e.jsx(ti,{size:16}),"Rewrite & Improve My Resume"]})}),k&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"rr-improve-toolbar",children:[e.jsxs("div",{className:"rr-view-toggle",children:[e.jsxs("button",{className:`rr-view-btn${I==="original"?" rr-view-active":""}`,onClick:()=>$("original"),children:[e.jsx(Ud,{size:12})," Original"]}),e.jsxs("button",{className:`rr-view-btn${I==="improved"?" rr-view-active":""}`,onClick:()=>$("improved"),children:[e.jsx(Gd,{size:12})," Improved"]})]}),e.jsxs("div",{className:"rr-improve-actions",children:[I==="improved"&&V!==k&&e.jsxs("button",{className:"rr-reset-btn",onClick:de,title:"Reset to AI version",children:[e.jsx(mn,{size:12})," Reset"]}),e.jsx(ho,{text:V}),e.jsxs("button",{className:"rr-download-btn",onClick:je,children:[e.jsx(Dp,{size:13})," Download PDF"]})]})]}),e.jsx("div",{className:"rr-view-label",children:I==="original"?e.jsxs(e.Fragment,{children:[e.jsx(Ud,{size:11})," Original resume (read-only)"]}):e.jsxs(e.Fragment,{children:[e.jsx(Gd,{size:11})," AI-improved version — edit freely, then download as PDF"]})}),I==="original"?e.jsx("textarea",{className:"rr-improve-textarea rr-improve-textarea-readonly",value:n,readOnly:!0,spellCheck:!1}):e.jsx("textarea",{className:"rr-improve-textarea",value:V,onChange:J=>T(J.target.value),spellCheck:!1,placeholder:"Your improved resume will appear here..."}),_.length>0&&e.jsxs("div",{className:"rr-changes-box",children:[e.jsxs("div",{className:"rr-changes-header",onClick:()=>w(J=>!J),children:[e.jsx(tv,{size:14}),e.jsx("span",{className:"rr-changes-title",children:"What the AI Changed"}),e.jsxs("span",{className:"rr-changes-count",children:[_.length," improvements"]}),R?e.jsx(hc,{size:13}):e.jsx(Ms,{size:13})]}),R&&e.jsx("ul",{className:"rr-changes-list",children:_.map((J,ie)=>e.jsxs("li",{className:"rr-changes-item",children:[e.jsx(en,{size:12,className:"rr-changes-icon"}),e.jsx("span",{children:J})]},ie))})]}),e.jsxs("button",{className:"rr-reimprove-btn",onClick:()=>{L(""),T(""),z([])},children:[e.jsx(ti,{size:13})," Generate a New Version"]})]})]}),f==="tailor"&&e.jsxs("div",{className:"rr-tailor-tab",children:[!S&&e.jsxs("div",{className:"rr-tailor-intro",children:[e.jsx("div",{className:"rr-tailor-intro-icon",children:e.jsx(hv,{size:24})}),e.jsxs("div",{children:[e.jsx("div",{className:"rr-tailor-intro-title",children:"ATS Optimization & Tailoring"}),e.jsx("p",{className:"rr-tailor-intro-desc",children:"Paste a job description below. The AI will calculate your ATS match score, find keyword gaps, rewrite weak bullets, and give you a role-specific summary."})]})]}),!n.trim()&&e.jsxs("div",{className:"rr-tailor-warn",children:[e.jsx(Wr,{size:14}),e.jsx("span",{children:"Please paste or upload your resume on the left first."})]}),e.jsxs("div",{className:"rr-jd-section",children:[e.jsx("div",{className:"rr-panel-label",children:"Job Description"}),e.jsx("textarea",{className:"rr-jd-textarea",placeholder:`Paste the full job description here...

Include requirements, responsibilities, and qualifications. The more complete, the better the tailoring.`,value:x,onChange:J=>C(J.target.value),spellCheck:!1})]}),e.jsx("button",{className:"rr-tailor-btn",onClick:Z,disabled:v||!qt,children:v?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"rr-spinner rr-spinner-dark"}),"Tailoring your resume..."]}):e.jsxs(e.Fragment,{children:[e.jsx(Ut,{size:16}),"Tailor My Resume for This Role"]})}),M&&e.jsxs("div",{className:"rr-error",children:[e.jsx(Wr,{size:16}),M]}),S&&e.jsxs("div",{className:"rr-tailor-results",children:[e.jsxs("div",{className:"rr-ats-hero",children:[e.jsx(wk,{score:S.ats_score}),e.jsxs("div",{className:"rr-ats-hero-info",children:[e.jsx("div",{className:"rr-ats-hero-label",children:"ATS Match Score"}),e.jsx("p",{className:"rr-ats-hero-summary",children:S.ats_summary}),e.jsx("div",{className:"rr-ats-hero-hint",children:S.ats_score>=75?e.jsxs(e.Fragment,{children:[e.jsx(en,{size:13})," Strong match — focus on the gaps below to push higher."]}):S.ats_score>=50?e.jsxs(e.Fragment,{children:[e.jsx(bn,{size:13})," Moderate match — incorporate the missing keywords and rewrites below."]}):e.jsxs(e.Fragment,{children:[e.jsx(Nr,{size:13})," Weak match — significant tailoring needed. Follow all suggestions below."]})})]})]}),e.jsxs("div",{className:"rr-keyword-section",children:[e.jsxs("div",{className:"rr-section-header",children:[e.jsx(Mr,{size:15}),e.jsx("span",{className:"rr-section-title",children:"Keyword Analysis"})]}),e.jsxs("div",{className:"rr-keyword-cols",children:[e.jsxs("div",{className:"rr-keyword-col",children:[e.jsxs("div",{className:"rr-keyword-col-label rr-kw-present-label",children:[e.jsx(en,{size:12})," Present (",((Xn=S.keywords_present)==null?void 0:Xn.length)||0,")"]}),e.jsx("div",{className:"rr-chips",children:(S.keywords_present||[]).map((J,ie)=>e.jsx("span",{className:"rr-chip rr-chip-green",children:J},ie))})]}),e.jsxs("div",{className:"rr-keyword-col",children:[e.jsxs("div",{className:"rr-keyword-col-label rr-kw-gap-label",children:[e.jsx(Nr,{size:12})," Missing (",((On=S.keyword_gaps)==null?void 0:On.length)||0,")"]}),e.jsx("div",{className:"rr-chips",children:(S.keyword_gaps||[]).map((J,ie)=>e.jsx("span",{className:"rr-chip rr-chip-red",children:J},ie))})]})]})]}),((bc=S.skills_to_highlight)==null?void 0:bc.length)>0&&e.jsxs("div",{className:"rr-skills-section",children:[e.jsxs("div",{className:"rr-section-header",children:[e.jsx(uv,{size:15}),e.jsx("span",{className:"rr-section-title",children:"Skills to Feature Prominently"})]}),e.jsx("div",{className:"rr-chips",children:S.skills_to_highlight.map((J,ie)=>e.jsx("span",{className:"rr-chip rr-chip-blue",children:J},ie))})]}),S.summary_rewrite&&e.jsxs("div",{className:"rr-summary-rewrite",children:[e.jsxs("div",{className:"rr-summary-rewrite-header",children:[e.jsxs("div",{className:"rr-section-header",children:[e.jsx(Ut,{size:15}),e.jsx("span",{className:"rr-section-title",children:"AI-Rewritten Professional Summary"})]}),e.jsx(ho,{text:S.summary_rewrite,className:"rr-copy-summary"})]}),e.jsx("p",{className:"rr-summary-rewrite-text",children:S.summary_rewrite})]}),((kc=S.bullet_rewrites)==null?void 0:kc.length)>0&&e.jsxs("div",{className:"rr-rewrites-section",children:[e.jsxs("div",{className:"rr-section-header",children:[e.jsx(me,{size:15}),e.jsx("span",{className:"rr-section-title",children:"Bullet Point Rewrites"}),e.jsxs("span",{className:"rr-section-count",children:[S.bullet_rewrites.length," suggested"]})]}),e.jsx("div",{className:"rr-rewrites-list",children:S.bullet_rewrites.map((J,ie)=>e.jsx(Sk,{rewrite:J,index:ie},ie))})]}),((wc=S.tailoring_tips)==null?void 0:wc.length)>0&&e.jsxs("div",{className:"rr-tips-section",children:[e.jsxs("div",{className:"rr-section-header",children:[e.jsx(en,{size:15}),e.jsx("span",{className:"rr-section-title",children:"Tailoring Action Items"}),e.jsxs("span",{className:"rr-tips-progress",children:[q.size,"/",S.tailoring_tips.length," done"]})]}),e.jsx("div",{className:"rr-tips-list",children:S.tailoring_tips.map((J,ie)=>e.jsxs("div",{className:`rr-tip-item${q.has(ie)?" rr-tip-done":""}`,onClick:()=>ue(ie),children:[e.jsx("div",{className:`rr-tip-check${q.has(ie)?" rr-tip-checked":""}`,children:q.has(ie)&&e.jsx(uc,{size:10})}),e.jsx("span",{className:"rr-tip-text",children:J})]},ie))}),q.size===S.tailoring_tips.length&&e.jsxs("div",{className:"rr-tips-complete",children:[e.jsx(en,{size:14})," All done — your resume is ready to submit!"]})]}),e.jsxs("button",{className:"rr-retailor-btn",onClick:()=>D(null),children:[e.jsx(Ut,{size:14})," Tailor for a Different Role"]})]})]})]})]})]})}function Pk(){return e.jsxs("div",{className:"homepage-body",children:[e.jsx(mv,{}),e.jsxs("main",{className:"main-content",children:[e.jsxs(_x,{children:[e.jsx(le,{path:"/",element:e.jsx(Pv,{})}),e.jsx(le,{path:"/algorithms",element:e.jsx(Iv,{})}),e.jsx(le,{path:"/contact",element:e.jsx(zv,{})}),e.jsx(le,{path:"/contributions",element:e.jsx(Mv,{})}),e.jsx(le,{path:"/stack",element:e.jsx(Qy,{})}),e.jsx(le,{path:"/queue",element:e.jsx(Xy,{})}),e.jsx(le,{path:"/linkedlist",element:e.jsx(Yy,{})}),e.jsx(le,{path:"/skiplist",element:e.jsx(Jy,{})}),e.jsx(le,{path:"/hashtable_linear",element:e.jsx(Zy,{})}),e.jsx(le,{path:"/hashtable_quadratic",element:e.jsx(c1,{})}),e.jsx(le,{path:"/hashtable_chaining",element:e.jsx(o1,{})}),e.jsx(le,{path:"/binarytree",element:e.jsx(g1,{})}),e.jsx(le,{path:"/bst",element:e.jsx(Y0,{})}),e.jsx(le,{path:"/avl",element:e.jsx(rN,{})}),e.jsx(le,{path:"/splay",element:e.jsx(oN,{})}),e.jsx(le,{path:"/treap",element:e.jsx(mN,{})}),e.jsx(le,{path:"/minheap",element:e.jsx(yN,{})}),e.jsx(le,{path:"/maxheap",element:e.jsx(kN,{})}),e.jsx(le,{path:"/adjacency-list",element:e.jsx(wN,{})}),e.jsx(le,{path:"/adjacency-matrix",element:e.jsx(SN,{})}),e.jsx(le,{path:"/bfs",element:e.jsx(LN,{})}),e.jsx(le,{path:"/dfs",element:e.jsx(EN,{})}),e.jsx(le,{path:"/dijkstra",element:e.jsx(ON,{})}),e.jsx(le,{path:"/bellman-ford",element:e.jsx(IN,{})}),e.jsx(le,{path:"/prim-mst",element:e.jsx(RN,{})}),e.jsx(le,{path:"/kruskal-mst",element:e.jsx(zN,{})}),e.jsx(le,{path:"/topological-sort",element:e.jsx(PN,{})}),e.jsx(le,{path:"/practice",element:e.jsx(ru,{})}),e.jsx(le,{path:"/practice/:problemId",element:e.jsx(ru,{})}),e.jsx(le,{path:"/sandbox",element:e.jsx(ek,{})}),e.jsx(le,{path:"/compare-hash",element:e.jsx(tk,{})}),e.jsx(le,{path:"/compare",element:e.jsx(yk,{})}),e.jsx(le,{path:"/resume-reviewer",element:e.jsx(Rk,{})})]}),e.jsx(gv,{})]})]})}tl.createRoot(document.getElementById("root")).render(e.jsx(_e.StrictMode,{children:e.jsx(zx,{children:e.jsx(Pk,{})})}));
