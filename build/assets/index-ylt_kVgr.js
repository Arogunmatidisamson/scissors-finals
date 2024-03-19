function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Vi(t,e){const n=new Set(t.split(","));return e?r=>n.has(r.toLowerCase()):r=>n.has(r)}const ne={},gn=[],Pe=()=>{},U0=()=>!1,ds=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ji=t=>t.startsWith("onUpdate:"),ge=Object.assign,qi=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},F0=Object.prototype.hasOwnProperty,z=(t,e)=>F0.call(t,e),V=Array.isArray,mn=t=>fs(t)==="[object Map]",Bc=t=>fs(t)==="[object Set]",q=t=>typeof t=="function",ue=t=>typeof t=="string",An=t=>typeof t=="symbol",ie=t=>t!==null&&typeof t=="object",$c=t=>(ie(t)||q(t))&&q(t.then)&&q(t.catch),Hc=Object.prototype.toString,fs=t=>Hc.call(t),B0=t=>fs(t).slice(8,-1),Vc=t=>fs(t)==="[object Object]",Wi=t=>ue(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Wn=Vi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),hs=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},$0=/-(\w)/g,nt=hs(t=>t.replace($0,(e,n)=>n?n.toUpperCase():"")),H0=/\B([A-Z])/g,kn=hs(t=>t.replace(H0,"-$1").toLowerCase()),ps=hs(t=>t.charAt(0).toUpperCase()+t.slice(1)),Bs=hs(t=>t?`on${ps(t)}`:""),Ut=(t,e)=>!Object.is(t,e),Lr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},zr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},di=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let qo;const jc=()=>qo||(qo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Gi(t){if(V(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ue(r)?W0(r):Gi(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ue(t)||ie(t))return t}const V0=/;(?![^(]*\))/g,j0=/:([^]+)/,q0=/\/\*[^]*?\*\//g;function W0(t){const e={};return t.replace(q0,"").split(V0).forEach(n=>{if(n){const r=n.split(j0);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function zi(t){let e="";if(ue(t))e=t;else if(V(t))for(let n=0;n<t.length;n++){const r=zi(t[n]);r&&(e+=r+" ")}else if(ie(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const G0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",z0=Vi(G0);function qc(t){return!!t||t===""}const ht=t=>ue(t)?t:t==null?"":V(t)||ie(t)&&(t.toString===Hc||!q(t.toString))?JSON.stringify(t,Wc,2):String(t),Wc=(t,e)=>e&&e.__v_isRef?Wc(t,e.value):mn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[$s(r,i)+" =>"]=s,n),{})}:Bc(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>$s(n))}:An(e)?$s(e):ie(e)&&!V(e)&&!Vc(e)?String(e):e,$s=(t,e="")=>{var n;return An(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Me;class K0{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Me,!e&&Me&&(this.index=(Me.scopes||(Me.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Me;try{return Me=this,e()}finally{Me=n}}}on(){Me=this}off(){Me=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function J0(t,e=Me){e&&e.active&&e.effects.push(t)}function Q0(){return Me}let zt;class Ki{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,J0(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,nn();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(Z0(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),rn()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Lt,n=zt;try{return Lt=!0,zt=this,this._runnings++,Wo(this),this.fn()}finally{Go(this),this._runnings--,zt=n,Lt=e}}stop(){var e;this.active&&(Wo(this),Go(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function Z0(t){return t.value}function Wo(t){t._trackId++,t._depsLength=0}function Go(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Gc(t.deps[e],t);t.deps.length=t._depsLength}}function Gc(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Lt=!0,fi=0;const zc=[];function nn(){zc.push(Lt),Lt=!1}function rn(){const t=zc.pop();Lt=t===void 0?!0:t}function Ji(){fi++}function Qi(){for(fi--;!fi&&hi.length;)hi.shift()()}function Kc(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Gc(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const hi=[];function Jc(t,e,n){Ji();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&hi.push(r.scheduler)))}Qi()}const Qc=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},pi=new WeakMap,Kt=Symbol(""),gi=Symbol("");function Te(t,e,n){if(Lt&&zt){let r=pi.get(t);r||pi.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Qc(()=>r.delete(n))),Kc(zt,s)}}function pt(t,e,n,r,s,i){const o=pi.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&V(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||!An(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":V(t)?Wi(n)&&a.push(o.get("length")):(a.push(o.get(Kt)),mn(t)&&a.push(o.get(gi)));break;case"delete":V(t)||(a.push(o.get(Kt)),mn(t)&&a.push(o.get(gi)));break;case"set":mn(t)&&a.push(o.get(Kt));break}Ji();for(const c of a)c&&Jc(c,4);Qi()}const Y0=Vi("__proto__,__v_isRef,__isVue"),Zc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(An)),zo=X0();function X0(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=K(this);for(let i=0,o=this.length;i<o;i++)Te(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(K)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){nn(),Ji();const r=K(this)[e].apply(this,n);return Qi(),rn(),r}}),t}function e2(t){const e=K(this);return Te(e,"has",t),e.hasOwnProperty(t)}class Yc{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const s=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?h2:nl:i?tl:el).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=V(e);if(!s){if(o&&z(zo,n))return Reflect.get(zo,n,r);if(n==="hasOwnProperty")return e2}const a=Reflect.get(e,n,r);return(An(n)?Zc.has(n):Y0(n))||(s||Te(e,"get",n),i)?a:Se(a)?o&&Wi(n)?a:a.value:ie(a)?s?sl(a):ms(a):a}}class Xc extends Yc{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._shallow){const c=En(i);if(!Kr(r)&&!En(r)&&(i=K(i),r=K(r)),!V(e)&&Se(i)&&!Se(r))return c?!1:(i.value=r,!0)}const o=V(e)&&Wi(n)?Number(n)<e.length:z(e,n),a=Reflect.set(e,n,r,s);return e===K(s)&&(o?Ut(r,i)&&pt(e,"set",n,r):pt(e,"add",n,r)),a}deleteProperty(e,n){const r=z(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&pt(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!An(n)||!Zc.has(n))&&Te(e,"has",n),r}ownKeys(e){return Te(e,"iterate",V(e)?"length":Kt),Reflect.ownKeys(e)}}class t2 extends Yc{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const n2=new Xc,r2=new t2,s2=new Xc(!0),Zi=t=>t,gs=t=>Reflect.getPrototypeOf(t);function Ir(t,e,n=!1,r=!1){t=t.__v_raw;const s=K(t),i=K(e);n||(Ut(e,i)&&Te(s,"get",e),Te(s,"get",i));const{has:o}=gs(s),a=r?Zi:n?eo:Xn;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Rr(t,e=!1){const n=this.__v_raw,r=K(n),s=K(t);return e||(Ut(t,s)&&Te(r,"has",t),Te(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Tr(t,e=!1){return t=t.__v_raw,!e&&Te(K(t),"iterate",Kt),Reflect.get(t,"size",t)}function Ko(t){t=K(t);const e=K(this);return gs(e).has.call(e,t)||(e.add(t),pt(e,"add",t,t)),this}function Jo(t,e){e=K(e);const n=K(this),{has:r,get:s}=gs(n);let i=r.call(n,t);i||(t=K(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Ut(e,o)&&pt(n,"set",t,e):pt(n,"add",t,e),this}function Qo(t){const e=K(this),{has:n,get:r}=gs(e);let s=n.call(e,t);s||(t=K(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&pt(e,"delete",t,void 0),i}function Zo(){const t=K(this),e=t.size!==0,n=t.clear();return e&&pt(t,"clear",void 0,void 0),n}function Sr(t,e){return function(r,s){const i=this,o=i.__v_raw,a=K(o),c=e?Zi:t?eo:Xn;return!t&&Te(a,"iterate",Kt),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function Ar(t,e,n){return function(...r){const s=this.__v_raw,i=K(s),o=mn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Zi:e?eo:Xn;return!e&&Te(i,"iterate",c?gi:Kt),{next(){const{value:d,done:p}=l.next();return p?{value:d,done:p}:{value:a?[u(d[0]),u(d[1])]:u(d),done:p}},[Symbol.iterator](){return this}}}}function bt(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function i2(){const t={get(i){return Ir(this,i)},get size(){return Tr(this)},has:Rr,add:Ko,set:Jo,delete:Qo,clear:Zo,forEach:Sr(!1,!1)},e={get(i){return Ir(this,i,!1,!0)},get size(){return Tr(this)},has:Rr,add:Ko,set:Jo,delete:Qo,clear:Zo,forEach:Sr(!1,!0)},n={get(i){return Ir(this,i,!0)},get size(){return Tr(this,!0)},has(i){return Rr.call(this,i,!0)},add:bt("add"),set:bt("set"),delete:bt("delete"),clear:bt("clear"),forEach:Sr(!0,!1)},r={get(i){return Ir(this,i,!0,!0)},get size(){return Tr(this,!0)},has(i){return Rr.call(this,i,!0)},add:bt("add"),set:bt("set"),delete:bt("delete"),clear:bt("clear"),forEach:Sr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Ar(i,!1,!1),n[i]=Ar(i,!0,!1),e[i]=Ar(i,!1,!0),r[i]=Ar(i,!0,!0)}),[t,n,e,r]}const[o2,a2,c2,l2]=i2();function Yi(t,e){const n=e?t?l2:c2:t?a2:o2;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(z(n,s)&&s in r?n:r,s,i)}const u2={get:Yi(!1,!1)},d2={get:Yi(!1,!0)},f2={get:Yi(!0,!1)},el=new WeakMap,tl=new WeakMap,nl=new WeakMap,h2=new WeakMap;function p2(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function g2(t){return t.__v_skip||!Object.isExtensible(t)?0:p2(B0(t))}function ms(t){return En(t)?t:Xi(t,!1,n2,u2,el)}function rl(t){return Xi(t,!1,s2,d2,tl)}function sl(t){return Xi(t,!0,r2,f2,nl)}function Xi(t,e,n,r,s){if(!ie(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=g2(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function _n(t){return En(t)?_n(t.__v_raw):!!(t&&t.__v_isReactive)}function En(t){return!!(t&&t.__v_isReadonly)}function Kr(t){return!!(t&&t.__v_isShallow)}function il(t){return _n(t)||En(t)}function K(t){const e=t&&t.__v_raw;return e?K(e):t}function ol(t){return Object.isExtensible(t)&&zr(t,"__v_skip",!0),t}const Xn=t=>ie(t)?ms(t):t,eo=t=>ie(t)?sl(t):t;class al{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Ki(()=>e(this._value),()=>Nr(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=K(this);return(!e._cacheable||e.effect.dirty)&&Ut(e._value,e._value=e.effect.run())&&Nr(e,4),cl(e),e.effect._dirtyLevel>=2&&Nr(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function m2(t,e,n=!1){let r,s;const i=q(t);return i?(r=t,s=Pe):(r=t.get,s=t.set),new al(r,s,i||!s,n)}function cl(t){var e;Lt&&zt&&(t=K(t),Kc(zt,(e=t.dep)!=null?e:t.dep=Qc(()=>t.dep=void 0,t instanceof al?t:void 0)))}function Nr(t,e=4,n){t=K(t);const r=t.dep;r&&Jc(r,e)}function Se(t){return!!(t&&t.__v_isRef===!0)}function be(t){return ll(t,!1)}function _2(t){return ll(t,!0)}function ll(t,e){return Se(t)?t:new y2(t,e)}class y2{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:K(e),this._value=n?e:Xn(e)}get value(){return cl(this),this._value}set value(e){const n=this.__v_isShallow||Kr(e)||En(e);e=n?e:K(e),Ut(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Xn(e),Nr(this,4))}}function yn(t){return Se(t)?t.value:t}const v2={get:(t,e,n)=>yn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Se(s)&&!Se(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function ul(t){return _n(t)?t:new Proxy(t,v2)}/**
* @vue/runtime-core v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Nt(t,e,n,r){try{return r?t(...r):t()}catch(s){_s(s,e,n)}}function $e(t,e,n,r){if(q(t)){const i=Nt(t,e,n,r);return i&&$c(i)&&i.catch(o=>{_s(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push($e(t[i],e,n,r));return s}function _s(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Nt(c,null,10,[t,o,a]);return}}w2(t,n,s,r)}function w2(t,e,n,r=!0){console.error(t)}let er=!1,mi=!1;const _e=[];let Ye=0;const vn=[];let Rt=null,qt=0;const dl=Promise.resolve();let to=null;function fl(t){const e=to||dl;return t?e.then(this?t.bind(this):t):e}function b2(t){let e=Ye+1,n=_e.length;for(;e<n;){const r=e+n>>>1,s=_e[r],i=tr(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function no(t){(!_e.length||!_e.includes(t,er&&t.allowRecurse?Ye+1:Ye))&&(t.id==null?_e.push(t):_e.splice(b2(t.id),0,t),hl())}function hl(){!er&&!mi&&(mi=!0,to=dl.then(gl))}function E2(t){const e=_e.indexOf(t);e>Ye&&_e.splice(e,1)}function C2(t){V(t)?vn.push(...t):(!Rt||!Rt.includes(t,t.allowRecurse?qt+1:qt))&&vn.push(t),hl()}function Yo(t,e,n=er?Ye+1:0){for(;n<_e.length;n++){const r=_e[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;_e.splice(n,1),n--,r()}}}function pl(t){if(vn.length){const e=[...new Set(vn)].sort((n,r)=>tr(n)-tr(r));if(vn.length=0,Rt){Rt.push(...e);return}for(Rt=e,qt=0;qt<Rt.length;qt++)Rt[qt]();Rt=null,qt=0}}const tr=t=>t.id==null?1/0:t.id,I2=(t,e)=>{const n=tr(t)-tr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function gl(t){mi=!1,er=!0,_e.sort(I2);try{for(Ye=0;Ye<_e.length;Ye++){const e=_e[Ye];e&&e.active!==!1&&Nt(e,null,14)}}finally{Ye=0,_e.length=0,pl(),er=!1,to=null,(_e.length||vn.length)&&gl()}}function R2(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ne;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:p}=r[u]||ne;p&&(s=n.map(m=>ue(m)?m.trim():m)),d&&(s=n.map(di))}let a,c=r[a=Bs(e)]||r[a=Bs(nt(e))];!c&&i&&(c=r[a=Bs(kn(e))]),c&&$e(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,$e(l,t,6,s)}}function ml(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!q(t)){const c=l=>{const u=ml(l,e,!0);u&&(a=!0,ge(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ie(t)&&r.set(t,null),null):(V(i)?i.forEach(c=>o[c]=null):ge(o,i),ie(t)&&r.set(t,o),o)}function ys(t,e){return!t||!ds(e)?!1:(e=e.slice(2).replace(/Once$/,""),z(t,e[0].toLowerCase()+e.slice(1))||z(t,kn(e))||z(t,e))}let Ie=null,vs=null;function Jr(t){const e=Ie;return Ie=t,vs=t&&t.type.__scopeId||null,e}function ro(t){vs=t}function so(){vs=null}function fr(t,e=Ie,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&la(-1);const i=Jr(e);let o;try{o=t(...s)}finally{Jr(i),r._d&&la(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Hs(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:d,data:p,setupState:m,ctx:_,inheritAttrs:E}=t;let A,T;const D=Jr(t);try{if(n.shapeFlag&4){const $=s||r,Y=$;A=Ze(u.call(Y,$,d,i,m,p,_)),T=c}else{const $=e;A=Ze($.length>1?$(i,{attrs:c,slots:a,emit:l}):$(i,null)),T=e.props?c:T2(c)}}catch($){Kn.length=0,_s($,t,1),A=oe(Qt)}let L=A;if(T&&E!==!1){const $=Object.keys(T),{shapeFlag:Y}=L;$.length&&Y&7&&(o&&$.some(ji)&&(T=S2(T,o)),L=In(L,T))}return n.dirs&&(L=In(L),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),A=L,Jr(D),A}const T2=t=>{let e;for(const n in t)(n==="class"||n==="style"||ds(n))&&((e||(e={}))[n]=t[n]);return e},S2=(t,e)=>{const n={};for(const r in t)(!ji(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function A2(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Xo(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const p=u[d];if(o[p]!==r[p]&&!ys(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Xo(r,o,l):!0:!!o;return!1}function Xo(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ys(n,i))return!0}return!1}function k2({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const _l="components";function hr(t,e){return P2(_l,t,!0,e)||t}const O2=Symbol.for("v-ndc");function P2(t,e,n=!0,r=!1){const s=Ie||ye;if(s){const i=s.type;if(t===_l){const a=Id(i,!1);if(a&&(a===e||a===nt(e)||a===ps(nt(e))))return i}const o=ea(s[t]||i[t],e)||ea(s.appContext[t],e);return!o&&r?i:o}}function ea(t,e){return t&&(t[e]||t[nt(e)]||t[ps(nt(e))])}const x2=t=>t.__isSuspense;function L2(t,e){e&&e.pendingBranch?V(t)?e.effects.push(...t):e.effects.push(t):C2(t)}const N2=Symbol.for("v-scx"),M2=()=>gt(N2),kr={};function Mr(t,e,n){return yl(t,e,n)}function yl(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=ne){if(e&&i){const B=e;e=(...ae)=>{B(...ae),Y()}}const c=ye,l=B=>r===!0?B:Wt(B,r===!1?1:void 0);let u,d=!1,p=!1;if(Se(t)?(u=()=>t.value,d=Kr(t)):_n(t)?(u=()=>l(t),d=!0):V(t)?(p=!0,d=t.some(B=>_n(B)||Kr(B)),u=()=>t.map(B=>{if(Se(B))return B.value;if(_n(B))return l(B);if(q(B))return Nt(B,c,2)})):q(t)?e?u=()=>Nt(t,c,2):u=()=>(m&&m(),$e(t,c,3,[_])):u=Pe,e&&r){const B=u;u=()=>Wt(B())}let m,_=B=>{m=L.onStop=()=>{Nt(B,c,4),m=L.onStop=void 0}},E;if(Is)if(_=Pe,e?n&&$e(e,c,3,[u(),p?[]:void 0,_]):u(),s==="sync"){const B=M2();E=B.__watcherHandles||(B.__watcherHandles=[])}else return Pe;let A=p?new Array(t.length).fill(kr):kr;const T=()=>{if(!(!L.active||!L.dirty))if(e){const B=L.run();(r||d||(p?B.some((ae,de)=>Ut(ae,A[de])):Ut(B,A)))&&(m&&m(),$e(e,c,3,[B,A===kr?void 0:p&&A[0]===kr?[]:A,_]),A=B)}else L.run()};T.allowRecurse=!!e;let D;s==="sync"?D=T:s==="post"?D=()=>Ce(T,c&&c.suspense):(T.pre=!0,c&&(T.id=c.uid),D=()=>no(T));const L=new Ki(u,Pe,D),$=Q0(),Y=()=>{L.stop(),$&&qi($.effects,L)};return e?n?T():A=L.run():s==="post"?Ce(L.run.bind(L),c&&c.suspense):L.run(),E&&E.push(Y),Y}function D2(t,e,n){const r=this.proxy,s=ue(t)?t.includes(".")?vl(r,t):()=>r[t]:t.bind(r,r);let i;q(e)?i=e:(i=e.handler,n=e);const o=pr(this),a=yl(s,i.bind(r),n);return o(),a}function vl(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Wt(t,e,n=0,r){if(!ie(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(r=r||new Set,r.has(t))return t;if(r.add(t),Se(t))Wt(t.value,e,n,r);else if(V(t))for(let s=0;s<t.length;s++)Wt(t[s],e,n,r);else if(Bc(t)||mn(t))t.forEach(s=>{Wt(s,e,n,r)});else if(Vc(t))for(const s in t)Wt(t[s],e,n,r);return t}function Cn(t,e){if(Ie===null)return t;const n=Rs(Ie)||Ie.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=ne]=e[s];i&&(q(i)&&(i={mounted:i,updated:i}),i.deep&&Wt(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function Ht(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(nn(),$e(c,n,8,[t.el,a,t,e]),rn())}}/*! #__NO_SIDE_EFFECTS__ */function it(t,e){return q(t)?ge({name:t.name},e,{setup:t}):t}const Dr=t=>!!t.type.__asyncLoader,wl=t=>t.type.__isKeepAlive;function U2(t,e){bl(t,"a",e)}function F2(t,e){bl(t,"da",e)}function bl(t,e,n=ye){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ws(e,r,n),n){let s=n.parent;for(;s&&s.parent;)wl(s.parent.vnode)&&B2(r,e,n,s),s=s.parent}}function B2(t,e,n,r){const s=ws(e,t,r,!0);El(()=>{qi(r[e],s)},n)}function ws(t,e,n=ye,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;nn();const a=pr(n),c=$e(e,n,t,o);return a(),rn(),c});return r?s.unshift(i):s.push(i),i}}const yt=t=>(e,n=ye)=>(!Is||t==="sp")&&ws(t,(...r)=>e(...r),n),$2=yt("bm"),io=yt("m"),H2=yt("bu"),V2=yt("u"),j2=yt("bum"),El=yt("um"),q2=yt("sp"),W2=yt("rtg"),G2=yt("rtc");function z2(t,e=ye){ws("ec",t,e)}function Cl(t,e,n,r){let s;const i=n&&n[r];if(V(t)||ue(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(ie(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const _i=t=>t?Ml(t)?Rs(t)||t.proxy:_i(t.parent):null,Gn=ge(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>_i(t.parent),$root:t=>_i(t.root),$emit:t=>t.emit,$options:t=>oo(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,no(t.update)}),$nextTick:t=>t.n||(t.n=fl.bind(t.proxy)),$watch:t=>D2.bind(t)}),Vs=(t,e)=>t!==ne&&!t.__isScriptSetup&&z(t,e),K2={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Vs(r,e))return o[e]=1,r[e];if(s!==ne&&z(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&z(l,e))return o[e]=3,i[e];if(n!==ne&&z(n,e))return o[e]=4,n[e];yi&&(o[e]=0)}}const u=Gn[e];let d,p;if(u)return e==="$attrs"&&Te(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==ne&&z(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,z(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Vs(s,e)?(s[e]=n,!0):r!==ne&&z(r,e)?(r[e]=n,!0):z(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==ne&&z(t,o)||Vs(e,o)||(a=i[0])&&z(a,o)||z(r,o)||z(Gn,o)||z(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:z(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ta(t){return V(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let yi=!0;function J2(t){const e=oo(t),n=t.proxy,r=t.ctx;yi=!1,e.beforeCreate&&na(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:d,mounted:p,beforeUpdate:m,updated:_,activated:E,deactivated:A,beforeDestroy:T,beforeUnmount:D,destroyed:L,unmounted:$,render:Y,renderTracked:B,renderTriggered:ae,errorCaptured:de,serverPrefetch:We,expose:Oe,inheritAttrs:vt,components:$t,directives:Ge,filters:Mn}=e;if(l&&Q2(l,r,null),o)for(const X in o){const J=o[X];q(J)&&(r[X]=J.bind(n))}if(s){const X=s.call(n,n);ie(X)&&(t.data=ms(X))}if(yi=!0,i)for(const X in i){const J=i[X],lt=q(J)?J.bind(n,n):q(J.get)?J.get.bind(n,n):Pe,wt=!q(J)&&q(J.set)?J.set.bind(n):Pe,ze=Ue({get:lt,set:wt});Object.defineProperty(r,X,{enumerable:!0,configurable:!0,get:()=>ze.value,set:Ee=>ze.value=Ee})}if(a)for(const X in a)Il(a[X],r,n,X);if(c){const X=q(c)?c.call(n):c;Reflect.ownKeys(X).forEach(J=>{Ur(J,X[J])})}u&&na(u,t,"c");function fe(X,J){V(J)?J.forEach(lt=>X(lt.bind(n))):J&&X(J.bind(n))}if(fe($2,d),fe(io,p),fe(H2,m),fe(V2,_),fe(U2,E),fe(F2,A),fe(z2,de),fe(G2,B),fe(W2,ae),fe(j2,D),fe(El,$),fe(q2,We),V(Oe))if(Oe.length){const X=t.exposed||(t.exposed={});Oe.forEach(J=>{Object.defineProperty(X,J,{get:()=>n[J],set:lt=>n[J]=lt})})}else t.exposed||(t.exposed={});Y&&t.render===Pe&&(t.render=Y),vt!=null&&(t.inheritAttrs=vt),$t&&(t.components=$t),Ge&&(t.directives=Ge)}function Q2(t,e,n=Pe){V(t)&&(t=vi(t));for(const r in t){const s=t[r];let i;ie(s)?"default"in s?i=gt(s.from||r,s.default,!0):i=gt(s.from||r):i=gt(s),Se(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function na(t,e,n){$e(V(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Il(t,e,n,r){const s=r.includes(".")?vl(n,r):()=>n[r];if(ue(t)){const i=e[t];q(i)&&Mr(s,i)}else if(q(t))Mr(s,t.bind(n));else if(ie(t))if(V(t))t.forEach(i=>Il(i,e,n,r));else{const i=q(t.handler)?t.handler.bind(n):e[t.handler];q(i)&&Mr(s,i,t)}}function oo(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Qr(c,l,o,!0)),Qr(c,e,o)),ie(e)&&i.set(e,c),c}function Qr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Qr(t,i,n,!0),s&&s.forEach(o=>Qr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Z2[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Z2={data:ra,props:sa,emits:sa,methods:Vn,computed:Vn,beforeCreate:we,created:we,beforeMount:we,mounted:we,beforeUpdate:we,updated:we,beforeDestroy:we,beforeUnmount:we,destroyed:we,unmounted:we,activated:we,deactivated:we,errorCaptured:we,serverPrefetch:we,components:Vn,directives:Vn,watch:X2,provide:ra,inject:Y2};function ra(t,e){return e?t?function(){return ge(q(t)?t.call(this,this):t,q(e)?e.call(this,this):e)}:e:t}function Y2(t,e){return Vn(vi(t),vi(e))}function vi(t){if(V(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function we(t,e){return t?[...new Set([].concat(t,e))]:e}function Vn(t,e){return t?ge(Object.create(null),t,e):e}function sa(t,e){return t?V(t)&&V(e)?[...new Set([...t,...e])]:ge(Object.create(null),ta(t),ta(e??{})):e}function X2(t,e){if(!t)return e;if(!e)return t;const n=ge(Object.create(null),t);for(const r in e)n[r]=we(t[r],e[r]);return n}function Rl(){return{app:null,config:{isNativeTag:U0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ed=0;function td(t,e){return function(r,s=null){q(r)||(r=ge({},r)),s!=null&&!ie(s)&&(s=null);const i=Rl(),o=new WeakSet;let a=!1;const c=i.app={_uid:ed++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Td,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&q(l.install)?(o.add(l),l.install(c,...u)):q(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,d){if(!a){const p=oe(r,s);return p.appContext=i,d===!0?d="svg":d===!1&&(d=void 0),u&&e?e(p,l):t(p,l,d),a=!0,c._container=l,l.__vue_app__=c,Rs(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){const u=zn;zn=c;try{return l()}finally{zn=u}}};return c}}let zn=null;function Ur(t,e){if(ye){let n=ye.provides;const r=ye.parent&&ye.parent.provides;r===n&&(n=ye.provides=Object.create(r)),n[t]=e}}function gt(t,e,n=!1){const r=ye||Ie;if(r||zn){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:zn._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&q(e)?e.call(r&&r.proxy):e}}function nd(t,e,n,r=!1){const s={},i={};zr(i,Es,1),t.propsDefaults=Object.create(null),Tl(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:rl(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function rd(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=K(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let p=u[d];if(ys(t.emitsOptions,p))continue;const m=e[p];if(c)if(z(i,p))m!==i[p]&&(i[p]=m,l=!0);else{const _=nt(p);s[_]=wi(c,a,_,m,t,!1)}else m!==i[p]&&(i[p]=m,l=!0)}}}else{Tl(t,e,s,i)&&(l=!0);let u;for(const d in a)(!e||!z(e,d)&&((u=kn(d))===d||!z(e,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(s[d]=wi(c,a,d,void 0,t,!0)):delete s[d]);if(i!==a)for(const d in i)(!e||!z(e,d))&&(delete i[d],l=!0)}l&&pt(t,"set","$attrs")}function Tl(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Wn(c))continue;const l=e[c];let u;s&&z(s,u=nt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:ys(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=K(n),l=a||ne;for(let u=0;u<i.length;u++){const d=i[u];n[d]=wi(s,c,d,l[d],t,!z(l,d))}}return o}function wi(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=z(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&q(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=pr(s);r=l[n]=c.call(null,e),u()}}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===kn(n))&&(r=!0))}return r}function Sl(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!q(t)){const u=d=>{c=!0;const[p,m]=Sl(d,e,!0);ge(o,p),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return ie(t)&&r.set(t,gn),gn;if(V(i))for(let u=0;u<i.length;u++){const d=nt(i[u]);ia(d)&&(o[d]=ne)}else if(i)for(const u in i){const d=nt(u);if(ia(d)){const p=i[u],m=o[d]=V(p)||q(p)?{type:p}:ge({},p);if(m){const _=ca(Boolean,m.type),E=ca(String,m.type);m[0]=_>-1,m[1]=E<0||_<E,(_>-1||z(m,"default"))&&a.push(d)}}}const l=[o,a];return ie(t)&&r.set(t,l),l}function ia(t){return t[0]!=="$"&&!Wn(t)}function oa(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function aa(t,e){return oa(t)===oa(e)}function ca(t,e){return V(e)?e.findIndex(n=>aa(n,t)):q(e)&&aa(e,t)?0:-1}const Al=t=>t[0]==="_"||t==="$stable",ao=t=>V(t)?t.map(Ze):[Ze(t)],sd=(t,e,n)=>{if(e._n)return e;const r=fr((...s)=>ao(e(...s)),n);return r._c=!1,r},kl=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Al(s))continue;const i=t[s];if(q(i))e[s]=sd(s,i,r);else if(i!=null){const o=ao(i);e[s]=()=>o}}},Ol=(t,e)=>{const n=ao(e);t.slots.default=()=>n},id=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=K(e),zr(e,"_",n)):kl(e,t.slots={})}else t.slots={},e&&Ol(t,e);zr(t.slots,Es,1)},od=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ne;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ge(s,e),!n&&a===1&&delete s._):(i=!e.$stable,kl(e,s)),o=e}else e&&(Ol(t,e),o={default:1});if(i)for(const a in s)!Al(a)&&o[a]==null&&delete s[a]};function bi(t,e,n,r,s=!1){if(V(t)){t.forEach((p,m)=>bi(p,e&&(V(e)?e[m]:e),n,r,s));return}if(Dr(r)&&!s)return;const i=r.shapeFlag&4?Rs(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ne?a.refs={}:a.refs,d=a.setupState;if(l!=null&&l!==c&&(ue(l)?(u[l]=null,z(d,l)&&(d[l]=null)):Se(l)&&(l.value=null)),q(c))Nt(c,a,12,[o,u]);else{const p=ue(c),m=Se(c);if(p||m){const _=()=>{if(t.f){const E=p?z(d,c)?d[c]:u[c]:c.value;s?V(E)&&qi(E,i):V(E)?E.includes(i)||E.push(i):p?(u[c]=[i],z(d,c)&&(d[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else p?(u[c]=o,z(d,c)&&(d[c]=o)):m&&(c.value=o,t.k&&(u[t.k]=o))};o?(_.id=-1,Ce(_,n)):_()}}}const Ce=L2;function ad(t){return cd(t)}function cd(t,e){const n=jc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:p,setScopeId:m=Pe,insertStaticContent:_}=t,E=(f,h,g,b=null,y=null,R=null,O=void 0,I=null,S=!!h.dynamicChildren)=>{if(f===h)return;f&&!Un(f,h)&&(b=w(f),Ee(f,y,R,!0),f=null),h.patchFlag===-2&&(S=!1,h.dynamicChildren=null);const{type:C,ref:x,shapeFlag:F}=h;switch(C){case bs:A(f,h,g,b);break;case Qt:T(f,h,g,b);break;case Fr:f==null&&D(h,g,b,O);break;case De:$t(f,h,g,b,y,R,O,I,S);break;default:F&1?Y(f,h,g,b,y,R,O,I,S):F&6?Ge(f,h,g,b,y,R,O,I,S):(F&64||F&128)&&C.process(f,h,g,b,y,R,O,I,S,M)}x!=null&&y&&bi(x,f&&f.ref,R,h||f,!h)},A=(f,h,g,b)=>{if(f==null)r(h.el=a(h.children),g,b);else{const y=h.el=f.el;h.children!==f.children&&l(y,h.children)}},T=(f,h,g,b)=>{f==null?r(h.el=c(h.children||""),g,b):h.el=f.el},D=(f,h,g,b)=>{[f.el,f.anchor]=_(f.children,h,g,b,f.el,f.anchor)},L=({el:f,anchor:h},g,b)=>{let y;for(;f&&f!==h;)y=p(f),r(f,g,b),f=y;r(h,g,b)},$=({el:f,anchor:h})=>{let g;for(;f&&f!==h;)g=p(f),s(f),f=g;s(h)},Y=(f,h,g,b,y,R,O,I,S)=>{h.type==="svg"?O="svg":h.type==="math"&&(O="mathml"),f==null?B(h,g,b,y,R,O,I,S):We(f,h,y,R,O,I,S)},B=(f,h,g,b,y,R,O,I)=>{let S,C;const{props:x,shapeFlag:F,transition:U,dirs:j}=f;if(S=f.el=o(f.type,R,x&&x.is,x),F&8?u(S,f.children):F&16&&de(f.children,S,null,b,y,js(f,R),O,I),j&&Ht(f,null,b,"created"),ae(S,f,f.scopeId,O,b),x){for(const ee in x)ee!=="value"&&!Wn(ee)&&i(S,ee,null,x[ee],R,f.children,b,y,me);"value"in x&&i(S,"value",null,x.value,R),(C=x.onVnodeBeforeMount)&&Je(C,b,f)}j&&Ht(f,null,b,"beforeMount");const W=ld(y,U);W&&U.beforeEnter(S),r(S,h,g),((C=x&&x.onVnodeMounted)||W||j)&&Ce(()=>{C&&Je(C,b,f),W&&U.enter(S),j&&Ht(f,null,b,"mounted")},y)},ae=(f,h,g,b,y)=>{if(g&&m(f,g),b)for(let R=0;R<b.length;R++)m(f,b[R]);if(y){let R=y.subTree;if(h===R){const O=y.vnode;ae(f,O,O.scopeId,O.slotScopeIds,y.parent)}}},de=(f,h,g,b,y,R,O,I,S=0)=>{for(let C=S;C<f.length;C++){const x=f[C]=I?Tt(f[C]):Ze(f[C]);E(null,x,h,g,b,y,R,O,I)}},We=(f,h,g,b,y,R,O)=>{const I=h.el=f.el;let{patchFlag:S,dynamicChildren:C,dirs:x}=h;S|=f.patchFlag&16;const F=f.props||ne,U=h.props||ne;let j;if(g&&Vt(g,!1),(j=U.onVnodeBeforeUpdate)&&Je(j,g,h,f),x&&Ht(h,f,g,"beforeUpdate"),g&&Vt(g,!0),C?Oe(f.dynamicChildren,C,I,g,b,js(h,y),R):O||J(f,h,I,null,g,b,js(h,y),R,!1),S>0){if(S&16)vt(I,h,F,U,g,b,y);else if(S&2&&F.class!==U.class&&i(I,"class",null,U.class,y),S&4&&i(I,"style",F.style,U.style,y),S&8){const W=h.dynamicProps;for(let ee=0;ee<W.length;ee++){const se=W[ee],he=F[se],Ne=U[se];(Ne!==he||se==="value")&&i(I,se,he,Ne,y,f.children,g,b,me)}}S&1&&f.children!==h.children&&u(I,h.children)}else!O&&C==null&&vt(I,h,F,U,g,b,y);((j=U.onVnodeUpdated)||x)&&Ce(()=>{j&&Je(j,g,h,f),x&&Ht(h,f,g,"updated")},b)},Oe=(f,h,g,b,y,R,O)=>{for(let I=0;I<h.length;I++){const S=f[I],C=h[I],x=S.el&&(S.type===De||!Un(S,C)||S.shapeFlag&70)?d(S.el):g;E(S,C,x,null,b,y,R,O,!0)}},vt=(f,h,g,b,y,R,O)=>{if(g!==b){if(g!==ne)for(const I in g)!Wn(I)&&!(I in b)&&i(f,I,g[I],null,O,h.children,y,R,me);for(const I in b){if(Wn(I))continue;const S=b[I],C=g[I];S!==C&&I!=="value"&&i(f,I,C,S,O,h.children,y,R,me)}"value"in b&&i(f,"value",g.value,b.value,O)}},$t=(f,h,g,b,y,R,O,I,S)=>{const C=h.el=f?f.el:a(""),x=h.anchor=f?f.anchor:a("");let{patchFlag:F,dynamicChildren:U,slotScopeIds:j}=h;j&&(I=I?I.concat(j):j),f==null?(r(C,g,b),r(x,g,b),de(h.children||[],g,x,y,R,O,I,S)):F>0&&F&64&&U&&f.dynamicChildren?(Oe(f.dynamicChildren,U,g,y,R,O,I),(h.key!=null||y&&h===y.subTree)&&Pl(f,h,!0)):J(f,h,g,x,y,R,O,I,S)},Ge=(f,h,g,b,y,R,O,I,S)=>{h.slotScopeIds=I,f==null?h.shapeFlag&512?y.ctx.activate(h,g,b,O,S):Mn(h,g,b,y,R,O,S):cn(f,h,S)},Mn=(f,h,g,b,y,R,O)=>{const I=f.component=vd(f,b,y);if(wl(f)&&(I.ctx.renderer=M),wd(I),I.asyncDep){if(y&&y.registerDep(I,fe),!f.el){const S=I.subTree=oe(Qt);T(null,S,h,g)}}else fe(I,f,h,g,y,R,O)},cn=(f,h,g)=>{const b=h.component=f.component;if(A2(f,h,g))if(b.asyncDep&&!b.asyncResolved){X(b,h,g);return}else b.next=h,E2(b.update),b.effect.dirty=!0,b.update();else h.el=f.el,b.vnode=h},fe=(f,h,g,b,y,R,O)=>{const I=()=>{if(f.isMounted){let{next:x,bu:F,u:U,parent:j,vnode:W}=f;{const dn=xl(f);if(dn){x&&(x.el=W.el,X(f,x,O)),dn.asyncDep.then(()=>{f.isUnmounted||I()});return}}let ee=x,se;Vt(f,!1),x?(x.el=W.el,X(f,x,O)):x=W,F&&Lr(F),(se=x.props&&x.props.onVnodeBeforeUpdate)&&Je(se,j,x,W),Vt(f,!0);const he=Hs(f),Ne=f.subTree;f.subTree=he,E(Ne,he,d(Ne.el),w(Ne),f,y,R),x.el=he.el,ee===null&&k2(f,he.el),U&&Ce(U,y),(se=x.props&&x.props.onVnodeUpdated)&&Ce(()=>Je(se,j,x,W),y)}else{let x;const{el:F,props:U}=h,{bm:j,m:W,parent:ee}=f,se=Dr(h);if(Vt(f,!1),j&&Lr(j),!se&&(x=U&&U.onVnodeBeforeMount)&&Je(x,ee,h),Vt(f,!0),F&&re){const he=()=>{f.subTree=Hs(f),re(F,f.subTree,f,y,null)};se?h.type.__asyncLoader().then(()=>!f.isUnmounted&&he()):he()}else{const he=f.subTree=Hs(f);E(null,he,g,b,f,y,R),h.el=he.el}if(W&&Ce(W,y),!se&&(x=U&&U.onVnodeMounted)){const he=h;Ce(()=>Je(x,ee,he),y)}(h.shapeFlag&256||ee&&Dr(ee.vnode)&&ee.vnode.shapeFlag&256)&&f.a&&Ce(f.a,y),f.isMounted=!0,h=g=b=null}},S=f.effect=new Ki(I,Pe,()=>no(C),f.scope),C=f.update=()=>{S.dirty&&S.run()};C.id=f.uid,Vt(f,!0),C()},X=(f,h,g)=>{h.component=f;const b=f.vnode.props;f.vnode=h,f.next=null,rd(f,h.props,b,g),od(f,h.children,g),nn(),Yo(f),rn()},J=(f,h,g,b,y,R,O,I,S=!1)=>{const C=f&&f.children,x=f?f.shapeFlag:0,F=h.children,{patchFlag:U,shapeFlag:j}=h;if(U>0){if(U&128){wt(C,F,g,b,y,R,O,I,S);return}else if(U&256){lt(C,F,g,b,y,R,O,I,S);return}}j&8?(x&16&&me(C,y,R),F!==C&&u(g,F)):x&16?j&16?wt(C,F,g,b,y,R,O,I,S):me(C,y,R,!0):(x&8&&u(g,""),j&16&&de(F,g,b,y,R,O,I,S))},lt=(f,h,g,b,y,R,O,I,S)=>{f=f||gn,h=h||gn;const C=f.length,x=h.length,F=Math.min(C,x);let U;for(U=0;U<F;U++){const j=h[U]=S?Tt(h[U]):Ze(h[U]);E(f[U],j,g,null,y,R,O,I,S)}C>x?me(f,y,R,!0,!1,F):de(h,g,b,y,R,O,I,S,F)},wt=(f,h,g,b,y,R,O,I,S)=>{let C=0;const x=h.length;let F=f.length-1,U=x-1;for(;C<=F&&C<=U;){const j=f[C],W=h[C]=S?Tt(h[C]):Ze(h[C]);if(Un(j,W))E(j,W,g,null,y,R,O,I,S);else break;C++}for(;C<=F&&C<=U;){const j=f[F],W=h[U]=S?Tt(h[U]):Ze(h[U]);if(Un(j,W))E(j,W,g,null,y,R,O,I,S);else break;F--,U--}if(C>F){if(C<=U){const j=U+1,W=j<x?h[j].el:b;for(;C<=U;)E(null,h[C]=S?Tt(h[C]):Ze(h[C]),g,W,y,R,O,I,S),C++}}else if(C>U)for(;C<=F;)Ee(f[C],y,R,!0),C++;else{const j=C,W=C,ee=new Map;for(C=W;C<=U;C++){const Ae=h[C]=S?Tt(h[C]):Ze(h[C]);Ae.key!=null&&ee.set(Ae.key,C)}let se,he=0;const Ne=U-W+1;let dn=!1,Ho=0;const Dn=new Array(Ne);for(C=0;C<Ne;C++)Dn[C]=0;for(C=j;C<=F;C++){const Ae=f[C];if(he>=Ne){Ee(Ae,y,R,!0);continue}let Ke;if(Ae.key!=null)Ke=ee.get(Ae.key);else for(se=W;se<=U;se++)if(Dn[se-W]===0&&Un(Ae,h[se])){Ke=se;break}Ke===void 0?Ee(Ae,y,R,!0):(Dn[Ke-W]=C+1,Ke>=Ho?Ho=Ke:dn=!0,E(Ae,h[Ke],g,null,y,R,O,I,S),he++)}const Vo=dn?ud(Dn):gn;for(se=Vo.length-1,C=Ne-1;C>=0;C--){const Ae=W+C,Ke=h[Ae],jo=Ae+1<x?h[Ae+1].el:b;Dn[C]===0?E(null,Ke,g,jo,y,R,O,I,S):dn&&(se<0||C!==Vo[se]?ze(Ke,g,jo,2):se--)}}},ze=(f,h,g,b,y=null)=>{const{el:R,type:O,transition:I,children:S,shapeFlag:C}=f;if(C&6){ze(f.component.subTree,h,g,b);return}if(C&128){f.suspense.move(h,g,b);return}if(C&64){O.move(f,h,g,M);return}if(O===De){r(R,h,g);for(let F=0;F<S.length;F++)ze(S[F],h,g,b);r(f.anchor,h,g);return}if(O===Fr){L(f,h,g);return}if(b!==2&&C&1&&I)if(b===0)I.beforeEnter(R),r(R,h,g),Ce(()=>I.enter(R),y);else{const{leave:F,delayLeave:U,afterLeave:j}=I,W=()=>r(R,h,g),ee=()=>{F(R,()=>{W(),j&&j()})};U?U(R,W,ee):ee()}else r(R,h,g)},Ee=(f,h,g,b=!1,y=!1)=>{const{type:R,props:O,ref:I,children:S,dynamicChildren:C,shapeFlag:x,patchFlag:F,dirs:U}=f;if(I!=null&&bi(I,null,g,f,!0),x&256){h.ctx.deactivate(f);return}const j=x&1&&U,W=!Dr(f);let ee;if(W&&(ee=O&&O.onVnodeBeforeUnmount)&&Je(ee,h,f),x&6)Cr(f.component,g,b);else{if(x&128){f.suspense.unmount(g,b);return}j&&Ht(f,null,h,"beforeUnmount"),x&64?f.type.remove(f,h,g,y,M,b):C&&(R!==De||F>0&&F&64)?me(C,h,g,!1,!0):(R===De&&F&384||!y&&x&16)&&me(S,h,g),b&&ln(f)}(W&&(ee=O&&O.onVnodeUnmounted)||j)&&Ce(()=>{ee&&Je(ee,h,f),j&&Ht(f,null,h,"unmounted")},g)},ln=f=>{const{type:h,el:g,anchor:b,transition:y}=f;if(h===De){un(g,b);return}if(h===Fr){$(f);return}const R=()=>{s(g),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(f.shapeFlag&1&&y&&!y.persisted){const{leave:O,delayLeave:I}=y,S=()=>O(g,R);I?I(f.el,R,S):S()}else R()},un=(f,h)=>{let g;for(;f!==h;)g=p(f),s(f),f=g;s(h)},Cr=(f,h,g)=>{const{bum:b,scope:y,update:R,subTree:O,um:I}=f;b&&Lr(b),y.stop(),R&&(R.active=!1,Ee(O,f,h,g)),I&&Ce(I,h),Ce(()=>{f.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},me=(f,h,g,b=!1,y=!1,R=0)=>{for(let O=R;O<f.length;O++)Ee(f[O],h,g,b,y)},w=f=>f.shapeFlag&6?w(f.component.subTree):f.shapeFlag&128?f.suspense.next():p(f.anchor||f.el);let P=!1;const k=(f,h,g)=>{f==null?h._vnode&&Ee(h._vnode,null,null,!0):E(h._vnode||null,f,h,null,null,null,g),P||(P=!0,Yo(),pl(),P=!1),h._vnode=f},M={p:E,um:Ee,m:ze,r:ln,mt:Mn,mc:de,pc:J,pbc:Oe,n:w,o:t};let Q,re;return e&&([Q,re]=e(M)),{render:k,hydrate:Q,createApp:td(k,Q)}}function js({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Vt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ld(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Pl(t,e,n=!1){const r=t.children,s=e.children;if(V(r)&&V(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Tt(s[i]),a.el=o.el),n||Pl(o,a)),a.type===bs&&(a.el=o.el)}}function ud(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function xl(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:xl(e)}const dd=t=>t.__isTeleport,De=Symbol.for("v-fgt"),bs=Symbol.for("v-txt"),Qt=Symbol.for("v-cmt"),Fr=Symbol.for("v-stc"),Kn=[];let Fe=null;function le(t=!1){Kn.push(Fe=t?null:[])}function fd(){Kn.pop(),Fe=Kn[Kn.length-1]||null}let nr=1;function la(t){nr+=t}function Ll(t){return t.dynamicChildren=nr>0?Fe||gn:null,fd(),nr>0&&Fe&&Fe.push(t),t}function pe(t,e,n,r,s,i){return Ll(N(t,e,n,r,s,i,!0))}function hd(t,e,n,r,s){return Ll(oe(t,e,n,r,s,!0))}function Ei(t){return t?t.__v_isVNode===!0:!1}function Un(t,e){return t.type===e.type&&t.key===e.key}const Es="__vInternal",Nl=({key:t})=>t??null,Br=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ue(t)||Se(t)||q(t)?{i:Ie,r:t,k:e,f:!!n}:t:null);function N(t,e=null,n=null,r=0,s=null,i=t===De?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Nl(e),ref:e&&Br(e),scopeId:vs,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ie};return a?(co(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ue(n)?8:16),nr>0&&!o&&Fe&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Fe.push(c),c}const oe=pd;function pd(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===O2)&&(t=Qt),Ei(t)){const a=In(t,e,!0);return n&&co(a,n),nr>0&&!i&&Fe&&(a.shapeFlag&6?Fe[Fe.indexOf(t)]=a:Fe.push(a)),a.patchFlag|=-2,a}if(Rd(t)&&(t=t.__vccOpts),e){e=gd(e);let{class:a,style:c}=e;a&&!ue(a)&&(e.class=zi(a)),ie(c)&&(il(c)&&!V(c)&&(c=ge({},c)),e.style=Gi(c))}const o=ue(t)?1:x2(t)?128:dd(t)?64:ie(t)?4:q(t)?2:0;return N(t,e,n,r,s,o,i,!0)}function gd(t){return t?il(t)||Es in t?ge({},t):t:null}function In(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?md(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Nl(a),ref:e&&e.ref?n&&s?V(s)?s.concat(Br(e)):[s,Br(e)]:Br(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==De?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&In(t.ssContent),ssFallback:t.ssFallback&&In(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function On(t=" ",e=0){return oe(bs,null,t,e)}function Pn(t,e){const n=oe(Fr,null,t);return n.staticCount=e,n}function Cs(t="",e=!1){return e?(le(),hd(Qt,null,t)):oe(Qt,null,t)}function Ze(t){return t==null||typeof t=="boolean"?oe(Qt):V(t)?oe(De,null,t.slice()):typeof t=="object"?Tt(t):oe(bs,null,String(t))}function Tt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:In(t)}function co(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(V(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),co(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Es in e)?e._ctx=Ie:s===3&&Ie&&(Ie.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else q(e)?(e={default:e,_ctx:Ie},n=32):(e=String(e),r&64?(n=16,e=[On(e)]):n=8);t.children=e,t.shapeFlag|=n}function md(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=zi([e.class,r.class]));else if(s==="style")e.style=Gi([e.style,r.style]);else if(ds(s)){const i=e[s],o=r[s];o&&i!==o&&!(V(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Je(t,e,n,r=null){$e(t,e,7,[n,r])}const _d=Rl();let yd=0;function vd(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||_d,i={uid:yd++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new K0(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Sl(r,s),emitsOptions:ml(r,s),emit:null,emitted:null,propsDefaults:ne,inheritAttrs:r.inheritAttrs,ctx:ne,data:ne,props:ne,attrs:ne,slots:ne,refs:ne,setupState:ne,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=R2.bind(null,i),t.ce&&t.ce(i),i}let ye=null,Zr,Ci;{const t=jc(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Zr=e("__VUE_INSTANCE_SETTERS__",n=>ye=n),Ci=e("__VUE_SSR_SETTERS__",n=>Is=n)}const pr=t=>{const e=ye;return Zr(t),t.scope.on(),()=>{t.scope.off(),Zr(e)}},ua=()=>{ye&&ye.scope.off(),Zr(null)};function Ml(t){return t.vnode.shapeFlag&4}let Is=!1;function wd(t,e=!1){e&&Ci(e);const{props:n,children:r}=t.vnode,s=Ml(t);nd(t,n,s,e),id(t,r);const i=s?bd(t,e):void 0;return e&&Ci(!1),i}function bd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ol(new Proxy(t.ctx,K2));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Cd(t):null,i=pr(t);nn();const o=Nt(r,t,0,[t.props,s]);if(rn(),i(),$c(o)){if(o.then(ua,ua),e)return o.then(a=>{da(t,a,e)}).catch(a=>{_s(a,t,0)});t.asyncDep=o}else da(t,o,e)}else Dl(t,e)}function da(t,e,n){q(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ie(e)&&(t.setupState=ul(e)),Dl(t,n)}let fa;function Dl(t,e,n){const r=t.type;if(!t.render){if(!e&&fa&&!r.render){const s=r.template||oo(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=ge(ge({isCustomElement:i,delimiters:a},o),c);r.render=fa(s,l)}}t.render=r.render||Pe}{const s=pr(t);nn();try{J2(t)}finally{rn(),s()}}}function Ed(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Te(t,"get","$attrs"),e[n]}}))}function Cd(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Ed(t)},slots:t.slots,emit:t.emit,expose:e}}function Rs(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(ul(ol(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Gn)return Gn[n](t)},has(e,n){return n in e||n in Gn}}))}function Id(t,e=!0){return q(t)?t.displayName||t.name:t.name||e&&t.__name}function Rd(t){return q(t)&&"__vccOpts"in t}const Ue=(t,e)=>m2(t,e,Is);function Ul(t,e,n){const r=arguments.length;return r===2?ie(e)&&!V(e)?Ei(e)?oe(t,null,[e]):oe(t,e):oe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ei(n)&&(n=[n]),oe(t,e,n))}const Td="3.4.19";/**
* @vue/runtime-dom v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Sd="http://www.w3.org/2000/svg",Ad="http://www.w3.org/1998/Math/MathML",St=typeof document<"u"?document:null,ha=St&&St.createElement("template"),kd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?St.createElementNS(Sd,t):e==="mathml"?St.createElementNS(Ad,t):St.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>St.createTextNode(t),createComment:t=>St.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>St.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{ha.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const a=ha.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Od=Symbol("_vtc");function Pd(t,e,n){const r=t[Od];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const rr=Symbol("_vod"),xd={beforeMount(t,{value:e},{transition:n}){t[rr]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Fn(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e==!n&&(t.style.display===t[rr]||!e)||(r?e?(r.beforeEnter(t),Fn(t,!0),r.enter(t)):r.leave(t,()=>{Fn(t,!1)}):Fn(t,e))},beforeUnmount(t,{value:e}){Fn(t,e)}};function Fn(t,e){t.style.display=e?t[rr]:"none"}const Ld=Symbol(""),Nd=/(^|;)\s*display\s*:/;function Md(t,e,n){const r=t.style,s=ue(n),i=r.display;let o=!1;if(n&&!s){if(e&&!ue(e))for(const a in e)n[a]==null&&Ii(r,a,"");for(const a in n)a==="display"&&(o=!0),Ii(r,a,n[a])}else if(s){if(e!==n){const a=r[Ld];a&&(n+=";"+a),r.cssText=n,o=Nd.test(n)}}else e&&t.removeAttribute("style");rr in t&&(t[rr]=o?r.display:"",r.display=i)}const pa=/\s*!important$/;function Ii(t,e,n){if(V(n))n.forEach(r=>Ii(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Dd(t,e);pa.test(n)?t.setProperty(kn(r),n.replace(pa,""),"important"):t[r]=n}}const ga=["Webkit","Moz","ms"],qs={};function Dd(t,e){const n=qs[e];if(n)return n;let r=nt(e);if(r!=="filter"&&r in t)return qs[e]=r;r=ps(r);for(let s=0;s<ga.length;s++){const i=ga[s]+r;if(i in t)return qs[e]=i}return e}const ma="http://www.w3.org/1999/xlink";function Ud(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ma,e.slice(6,e.length)):t.setAttributeNS(ma,e,n);else{const i=z0(e);n==null||i&&!qc(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Fd(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=qc(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function fn(t,e,n,r){t.addEventListener(e,n,r)}function Bd(t,e,n,r){t.removeEventListener(e,n,r)}const _a=Symbol("_vei");function $d(t,e,n,r,s=null){const i=t[_a]||(t[_a]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Hd(e);if(r){const l=i[e]=qd(r,s);fn(t,a,l,c)}else o&&(Bd(t,a,o,c),i[e]=void 0)}}const ya=/(?:Once|Passive|Capture)$/;function Hd(t){let e;if(ya.test(t)){e={};let r;for(;r=t.match(ya);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):kn(t.slice(2)),e]}let Ws=0;const Vd=Promise.resolve(),jd=()=>Ws||(Vd.then(()=>Ws=0),Ws=Date.now());function qd(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;$e(Wd(r,n.value),e,5,[r])};return n.value=t,n.attached=jd(),n}function Wd(t,e){if(V(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const va=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Gd=(t,e,n,r,s,i,o,a,c)=>{const l=s==="svg";e==="class"?Pd(t,r,l):e==="style"?Md(t,n,r):ds(e)?ji(e)||$d(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):zd(t,e,r,l))?Fd(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Ud(t,e,r,l))};function zd(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&va(e)&&q(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return va(e)&&ue(n)?!1:e in t}const wa=t=>{const e=t.props["onUpdate:modelValue"]||!1;return V(e)?n=>Lr(e,n):e};function Kd(t){t.target.composing=!0}function ba(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Gs=Symbol("_assign"),sr={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Gs]=wa(s);const i=r||s.props&&s.props.type==="number";fn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=di(a)),t[Gs](a)}),n&&fn(t,"change",()=>{t.value=t.value.trim()}),e||(fn(t,"compositionstart",Kd),fn(t,"compositionend",ba),fn(t,"change",ba))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[Gs]=wa(i),t.composing)return;const o=s||t.type==="number"?di(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===a)||(t.value=a))}},Jd=["ctrl","shift","alt","meta"],Qd={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Jd.some(n=>t[`${n}Key`]&&!e.includes(n))},lo=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=Qd[e[o]];if(a&&a(s,e))return}return t(s,...i)})},Zd=ge({patchProp:Gd},kd);let Ea;function Yd(){return Ea||(Ea=ad(Zd))}const Xd=(...t)=>{const e=Yd().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=tf(r);if(!s)return;const i=e._component;!q(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,ef(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function ef(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function tf(t){return ue(t)?document.querySelector(t):t}const nf=it({__name:"App",setup(t){return(e,n)=>{const r=hr("RouterView");return le(),pe("div",null,[oe(r)])}}}),rf="modulepreload",sf=function(t){return"/"+t},Ca={},of=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link");s=Promise.all(n.map(o=>{if(o=sf(o),o in Ca)return;Ca[o]=!0;const a=o.endsWith(".css"),c=a?'[rel="stylesheet"]':"";if(!!r)for(let d=i.length-1;d>=0;d--){const p=i[d];if(p.href===o&&(!a||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${c}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":rf,a||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),a)return new Promise((d,p)=>{u.addEventListener("load",d),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${o}`)))})}))}return s.then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const hn=typeof window<"u";function af(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Z=Object.assign;function zs(t,e){const n={};for(const r in e){const s=e[r];n[r]=He(s)?s.map(t):t(s)}return n}const Jn=()=>{},He=Array.isArray,cf=/\/$/,lf=t=>t.replace(cf,"");function Ks(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=hf(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function uf(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ia(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function df(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Rn(e.matched[r],n.matched[s])&&Fl(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Rn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Fl(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!ff(t[n],e[n]))return!1;return!0}function ff(t,e){return He(t)?Ra(t,e):He(e)?Ra(e,t):t===e}function Ra(t,e){return He(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function hf(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var ir;(function(t){t.pop="pop",t.push="push"})(ir||(ir={}));var Qn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Qn||(Qn={}));function pf(t){if(!t)if(hn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),lf(t)}const gf=/^[^#]+#/;function mf(t,e){return t.replace(gf,"#")+e}function _f(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ts=()=>({left:window.pageXOffset,top:window.pageYOffset});function yf(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=_f(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Ta(t,e){return(history.state?history.state.position-e:-1)+t}const Ri=new Map;function vf(t,e){Ri.set(t,e)}function wf(t){const e=Ri.get(t);return Ri.delete(t),e}let bf=()=>location.protocol+"//"+location.host;function Bl(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Ia(c,"")}return Ia(n,t)+r+s}function Ef(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const m=Bl(t,location),_=n.value,E=e.value;let A=0;if(p){if(n.value=m,e.value=p,o&&o===_){o=null;return}A=E?p.position-E.position:0}else r(m);s.forEach(T=>{T(n.value,_,{delta:A,type:ir.pop,direction:A?A>0?Qn.forward:Qn.back:Qn.unknown})})};function c(){o=n.value}function l(p){s.push(p);const m=()=>{const _=s.indexOf(p);_>-1&&s.splice(_,1)};return i.push(m),m}function u(){const{history:p}=window;p.state&&p.replaceState(Z({},p.state,{scroll:Ts()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:d}}function Sa(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ts():null}}function Cf(t){const{history:e,location:n}=window,r={value:Bl(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const d=t.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+c:bf()+t+c;try{e[u?"replaceState":"pushState"](l,"",p),s.value=l}catch(m){console.error(m),n[u?"replace":"assign"](p)}}function o(c,l){const u=Z({},e.state,Sa(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=Z({},s.value,e.state,{forward:c,scroll:Ts()});i(u.current,u,!0);const d=Z({},Sa(r.value,c,null),{position:u.position+1},l);i(c,d,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function If(t){t=pf(t);const e=Cf(t),n=Ef(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Z({location:"",base:t,go:r,createHref:mf.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Rf(t){return typeof t=="string"||t&&typeof t=="object"}function $l(t){return typeof t=="string"||typeof t=="symbol"}const Et={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Hl=Symbol("");var Aa;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Aa||(Aa={}));function Tn(t,e){return Z(new Error,{type:t,[Hl]:!0},e)}function ut(t,e){return t instanceof Error&&Hl in t&&(e==null||!!(t.type&e))}const ka="[^/]+?",Tf={sensitive:!1,strict:!1,start:!0,end:!0},Sf=/[.+*?^${}()[\]/\\]/g;function Af(t,e){const n=Z({},Tf,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let d=0;d<l.length;d++){const p=l[d];let m=40+(n.sensitive?.25:0);if(p.type===0)d||(s+="/"),s+=p.value.replace(Sf,"\\$&"),m+=40;else if(p.type===1){const{value:_,repeatable:E,optional:A,regexp:T}=p;i.push({name:_,repeatable:E,optional:A});const D=T||ka;if(D!==ka){m+=10;try{new RegExp(`(${D})`)}catch($){throw new Error(`Invalid custom RegExp for param "${_}" (${D}): `+$.message)}}let L=E?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;d||(L=A&&l.length<2?`(?:/${L})`:"/"+L),A&&(L+="?"),s+=L,m+=20,A&&(m+=-8),E&&(m+=-20),D===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),d={};if(!u)return null;for(let p=1;p<u.length;p++){const m=u[p]||"",_=i[p-1];d[_.name]=m&&_.repeatable?m.split("/"):m}return d}function c(l){let u="",d=!1;for(const p of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const m of p)if(m.type===0)u+=m.value;else if(m.type===1){const{value:_,repeatable:E,optional:A}=m,T=_ in l?l[_]:"";if(He(T)&&!E)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const D=He(T)?T.join("/"):T;if(!D)if(A)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${_}"`);u+=D}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function kf(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Of(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=kf(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Oa(r))return 1;if(Oa(s))return-1}return s.length-r.length}function Oa(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Pf={type:0,value:""},xf=/[a-zA-Z0-9_]/;function Lf(t){if(!t)return[[]];if(t==="/")return[[Pf]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function d(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&d(),o()):c===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:xf.test(c)?p():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),d(),o(),s}function Nf(t,e,n){const r=Af(Lf(t.path),n),s=Z(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Mf(t,e){const n=[],r=new Map;e=La({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,d,p){const m=!p,_=Df(u);_.aliasOf=p&&p.record;const E=La(e,u),A=[_];if("alias"in u){const L=typeof u.alias=="string"?[u.alias]:u.alias;for(const $ of L)A.push(Z({},_,{components:p?p.record.components:_.components,path:$,aliasOf:p?p.record:_}))}let T,D;for(const L of A){const{path:$}=L;if(d&&$[0]!=="/"){const Y=d.record.path,B=Y[Y.length-1]==="/"?"":"/";L.path=d.record.path+($&&B+$)}if(T=Nf(L,d,E),p?p.alias.push(T):(D=D||T,D!==T&&D.alias.push(T),m&&u.name&&!xa(T)&&o(u.name)),_.children){const Y=_.children;for(let B=0;B<Y.length;B++)i(Y[B],T,p&&p.children[B])}p=p||T,(T.record.components&&Object.keys(T.record.components).length||T.record.name||T.record.redirect)&&c(T)}return D?()=>{o(D)}:Jn}function o(u){if($l(u)){const d=r.get(u);d&&(r.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let d=0;for(;d<n.length&&Of(u,n[d])>=0&&(u.record.path!==n[d].record.path||!Vl(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!xa(u)&&r.set(u.record.name,u)}function l(u,d){let p,m={},_,E;if("name"in u&&u.name){if(p=r.get(u.name),!p)throw Tn(1,{location:u});E=p.record.name,m=Z(Pa(d.params,p.keys.filter(D=>!D.optional).map(D=>D.name)),u.params&&Pa(u.params,p.keys.map(D=>D.name))),_=p.stringify(m)}else if("path"in u)_=u.path,p=n.find(D=>D.re.test(_)),p&&(m=p.parse(_),E=p.record.name);else{if(p=d.name?r.get(d.name):n.find(D=>D.re.test(d.path)),!p)throw Tn(1,{location:u,currentLocation:d});E=p.record.name,m=Z({},d.params,u.params),_=p.stringify(m)}const A=[];let T=p;for(;T;)A.unshift(T.record),T=T.parent;return{name:E,path:_,params:m,matched:A,meta:Ff(A)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Pa(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Df(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Uf(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Uf(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function xa(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Ff(t){return t.reduce((e,n)=>Z(e,n.meta),{})}function La(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Vl(t,e){return e.children.some(n=>n===t||Vl(t,n))}const jl=/#/g,Bf=/&/g,$f=/\//g,Hf=/=/g,Vf=/\?/g,ql=/\+/g,jf=/%5B/g,qf=/%5D/g,Wl=/%5E/g,Wf=/%60/g,Gl=/%7B/g,Gf=/%7C/g,zl=/%7D/g,zf=/%20/g;function uo(t){return encodeURI(""+t).replace(Gf,"|").replace(jf,"[").replace(qf,"]")}function Kf(t){return uo(t).replace(Gl,"{").replace(zl,"}").replace(Wl,"^")}function Ti(t){return uo(t).replace(ql,"%2B").replace(zf,"+").replace(jl,"%23").replace(Bf,"%26").replace(Wf,"`").replace(Gl,"{").replace(zl,"}").replace(Wl,"^")}function Jf(t){return Ti(t).replace(Hf,"%3D")}function Qf(t){return uo(t).replace(jl,"%23").replace(Vf,"%3F")}function Zf(t){return t==null?"":Qf(t).replace($f,"%2F")}function Yr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Yf(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(ql," "),o=i.indexOf("="),a=Yr(o<0?i:i.slice(0,o)),c=o<0?null:Yr(i.slice(o+1));if(a in e){let l=e[a];He(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Na(t){let e="";for(let n in t){const r=t[n];if(n=Jf(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(He(r)?r.map(i=>i&&Ti(i)):[r&&Ti(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Xf(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=He(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const eh=Symbol(""),Ma=Symbol(""),fo=Symbol(""),Kl=Symbol(""),Si=Symbol("");function Bn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function At(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=d=>{d===!1?a(Tn(4,{from:n,to:e})):d instanceof Error?a(d):Rf(d)?a(Tn(2,{from:e,to:d})):(i&&r.enterCallbacks[s]===i&&typeof d=="function"&&i.push(d),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(d=>a(d))})}function Js(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(th(a)){const l=(a.__vccOpts||a)[e];l&&s.push(At(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=af(l)?l.default:l;i.components[o]=u;const p=(u.__vccOpts||u)[e];return p&&At(p,n,r,i,o)()}))}}return s}function th(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Da(t){const e=gt(fo),n=gt(Kl),r=Ue(()=>e.resolve(yn(t.to))),s=Ue(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],d=n.matched;if(!u||!d.length)return-1;const p=d.findIndex(Rn.bind(null,u));if(p>-1)return p;const m=Ua(c[l-2]);return l>1&&Ua(u)===m&&d[d.length-1].path!==m?d.findIndex(Rn.bind(null,c[l-2])):p}),i=Ue(()=>s.value>-1&&ih(n.params,r.value.params)),o=Ue(()=>s.value>-1&&s.value===n.matched.length-1&&Fl(n.params,r.value.params));function a(c={}){return sh(c)?e[yn(t.replace)?"replace":"push"](yn(t.to)).catch(Jn):Promise.resolve()}return{route:r,href:Ue(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const nh=it({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Da,setup(t,{slots:e}){const n=ms(Da(t)),{options:r}=gt(fo),s=Ue(()=>({[Fa(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Fa(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Ul("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),rh=nh;function sh(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ih(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!He(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Ua(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Fa=(t,e,n)=>t??e??n,oh=it({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=gt(Si),s=Ue(()=>t.route||r.value),i=gt(Ma,0),o=Ue(()=>{let l=yn(i);const{matched:u}=s.value;let d;for(;(d=u[l])&&!d.components;)l++;return l}),a=Ue(()=>s.value.matched[o.value]);Ur(Ma,Ue(()=>o.value+1)),Ur(eh,a),Ur(Si,s);const c=be();return Mr(()=>[c.value,a.value,t.name],([l,u,d],[p,m,_])=>{u&&(u.instances[d]=l,m&&m!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!Rn(u,m)||!p)&&(u.enterCallbacks[d]||[]).forEach(E=>E(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,d=a.value,p=d&&d.components[u];if(!p)return Ba(n.default,{Component:p,route:l});const m=d.props[u],_=m?m===!0?l.params:typeof m=="function"?m(l):m:null,A=Ul(p,Z({},_,e,{onVnodeUnmounted:T=>{T.component.isUnmounted&&(d.instances[u]=null)},ref:c}));return Ba(n.default,{Component:A,route:l})||A}}});function Ba(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const ah=oh;function ch(t){const e=Mf(t.routes,t),n=t.parseQuery||Yf,r=t.stringifyQuery||Na,s=t.history,i=Bn(),o=Bn(),a=Bn(),c=_2(Et);let l=Et;hn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=zs.bind(null,w=>""+w),d=zs.bind(null,Zf),p=zs.bind(null,Yr);function m(w,P){let k,M;return $l(w)?(k=e.getRecordMatcher(w),M=P):M=w,e.addRoute(M,k)}function _(w){const P=e.getRecordMatcher(w);P&&e.removeRoute(P)}function E(){return e.getRoutes().map(w=>w.record)}function A(w){return!!e.getRecordMatcher(w)}function T(w,P){if(P=Z({},P||c.value),typeof w=="string"){const h=Ks(n,w,P.path),g=e.resolve({path:h.path},P),b=s.createHref(h.fullPath);return Z(h,g,{params:p(g.params),hash:Yr(h.hash),redirectedFrom:void 0,href:b})}let k;if("path"in w)k=Z({},w,{path:Ks(n,w.path,P.path).path});else{const h=Z({},w.params);for(const g in h)h[g]==null&&delete h[g];k=Z({},w,{params:d(h)}),P.params=d(P.params)}const M=e.resolve(k,P),Q=w.hash||"";M.params=u(p(M.params));const re=uf(r,Z({},w,{hash:Kf(Q),path:M.path})),f=s.createHref(re);return Z({fullPath:re,hash:Q,query:r===Na?Xf(w.query):w.query||{}},M,{redirectedFrom:void 0,href:f})}function D(w){return typeof w=="string"?Ks(n,w,c.value.path):Z({},w)}function L(w,P){if(l!==w)return Tn(8,{from:P,to:w})}function $(w){return ae(w)}function Y(w){return $(Z(D(w),{replace:!0}))}function B(w){const P=w.matched[w.matched.length-1];if(P&&P.redirect){const{redirect:k}=P;let M=typeof k=="function"?k(w):k;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=D(M):{path:M},M.params={}),Z({query:w.query,hash:w.hash,params:"path"in M?{}:w.params},M)}}function ae(w,P){const k=l=T(w),M=c.value,Q=w.state,re=w.force,f=w.replace===!0,h=B(k);if(h)return ae(Z(D(h),{state:typeof h=="object"?Z({},Q,h.state):Q,force:re,replace:f}),P||k);const g=k;g.redirectedFrom=P;let b;return!re&&df(r,M,k)&&(b=Tn(16,{to:g,from:M}),ze(M,M,!0,!1)),(b?Promise.resolve(b):Oe(g,M)).catch(y=>ut(y)?ut(y,2)?y:wt(y):J(y,g,M)).then(y=>{if(y){if(ut(y,2))return ae(Z({replace:f},D(y.to),{state:typeof y.to=="object"?Z({},Q,y.to.state):Q,force:re}),P||g)}else y=$t(g,M,!0,f,Q);return vt(g,M,y),y})}function de(w,P){const k=L(w,P);return k?Promise.reject(k):Promise.resolve()}function We(w){const P=un.values().next().value;return P&&typeof P.runWithContext=="function"?P.runWithContext(w):w()}function Oe(w,P){let k;const[M,Q,re]=lh(w,P);k=Js(M.reverse(),"beforeRouteLeave",w,P);for(const h of M)h.leaveGuards.forEach(g=>{k.push(At(g,w,P))});const f=de.bind(null,w,P);return k.push(f),me(k).then(()=>{k=[];for(const h of i.list())k.push(At(h,w,P));return k.push(f),me(k)}).then(()=>{k=Js(Q,"beforeRouteUpdate",w,P);for(const h of Q)h.updateGuards.forEach(g=>{k.push(At(g,w,P))});return k.push(f),me(k)}).then(()=>{k=[];for(const h of re)if(h.beforeEnter)if(He(h.beforeEnter))for(const g of h.beforeEnter)k.push(At(g,w,P));else k.push(At(h.beforeEnter,w,P));return k.push(f),me(k)}).then(()=>(w.matched.forEach(h=>h.enterCallbacks={}),k=Js(re,"beforeRouteEnter",w,P),k.push(f),me(k))).then(()=>{k=[];for(const h of o.list())k.push(At(h,w,P));return k.push(f),me(k)}).catch(h=>ut(h,8)?h:Promise.reject(h))}function vt(w,P,k){a.list().forEach(M=>We(()=>M(w,P,k)))}function $t(w,P,k,M,Q){const re=L(w,P);if(re)return re;const f=P===Et,h=hn?history.state:{};k&&(M||f?s.replace(w.fullPath,Z({scroll:f&&h&&h.scroll},Q)):s.push(w.fullPath,Q)),c.value=w,ze(w,P,k,f),wt()}let Ge;function Mn(){Ge||(Ge=s.listen((w,P,k)=>{if(!Cr.listening)return;const M=T(w),Q=B(M);if(Q){ae(Z(Q,{replace:!0}),M).catch(Jn);return}l=M;const re=c.value;hn&&vf(Ta(re.fullPath,k.delta),Ts()),Oe(M,re).catch(f=>ut(f,12)?f:ut(f,2)?(ae(f.to,M).then(h=>{ut(h,20)&&!k.delta&&k.type===ir.pop&&s.go(-1,!1)}).catch(Jn),Promise.reject()):(k.delta&&s.go(-k.delta,!1),J(f,M,re))).then(f=>{f=f||$t(M,re,!1),f&&(k.delta&&!ut(f,8)?s.go(-k.delta,!1):k.type===ir.pop&&ut(f,20)&&s.go(-1,!1)),vt(M,re,f)}).catch(Jn)}))}let cn=Bn(),fe=Bn(),X;function J(w,P,k){wt(w);const M=fe.list();return M.length?M.forEach(Q=>Q(w,P,k)):console.error(w),Promise.reject(w)}function lt(){return X&&c.value!==Et?Promise.resolve():new Promise((w,P)=>{cn.add([w,P])})}function wt(w){return X||(X=!w,Mn(),cn.list().forEach(([P,k])=>w?k(w):P()),cn.reset()),w}function ze(w,P,k,M){const{scrollBehavior:Q}=t;if(!hn||!Q)return Promise.resolve();const re=!k&&wf(Ta(w.fullPath,0))||(M||!k)&&history.state&&history.state.scroll||null;return fl().then(()=>Q(w,P,re)).then(f=>f&&yf(f)).catch(f=>J(f,w,P))}const Ee=w=>s.go(w);let ln;const un=new Set,Cr={currentRoute:c,listening:!0,addRoute:m,removeRoute:_,hasRoute:A,getRoutes:E,resolve:T,options:t,push:$,replace:Y,go:Ee,back:()=>Ee(-1),forward:()=>Ee(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:fe.add,isReady:lt,install(w){const P=this;w.component("RouterLink",rh),w.component("RouterView",ah),w.config.globalProperties.$router=P,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>yn(c)}),hn&&!ln&&c.value===Et&&(ln=!0,$(s.location).catch(Q=>{}));const k={};for(const Q in Et)Object.defineProperty(k,Q,{get:()=>c.value[Q],enumerable:!0});w.provide(fo,P),w.provide(Kl,rl(k)),w.provide(Si,c);const M=w.unmount;un.add(w),w.unmount=function(){un.delete(w),un.size<1&&(l=Et,Ge&&Ge(),Ge=null,c.value=Et,ln=!1,X=!1),M()}}};function me(w){return w.reduce((P,k)=>P.then(()=>We(k)),Promise.resolve())}return Cr}function lh(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Rn(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Rn(l,c))||s.push(c))}return[n,r,s]}const uh="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAAABmJLR0QA/wD/AP+gvaeTAAACo0lEQVRIibWVTWwNURTHf/9pK9o0tWBDdaEkRIKuLCQSVpJ+hGqCsiDV91gQK7qwaUgEGxuE19aChARRhDQ0ofXRdGEpEguJjcRG2qRFE+Yei/fezJ2+qT5JndXcM+ee3/nfcz/gf1h3eIaMmyIT5gC04IBseBHTyWhcq5rKf0rQbRvBtSNtAJYg+wrBGFXc5Yq+lQCwO1wKfpanJGvLMLsG7CZd/TTwCmj2fA+R9pDTr/khXdZIhT0HVpdVUN4GkfaS0y/mqCoJqLQRjIaCxyG7hwseUcEEIeuQnQVqoznGOwJtKQIA5u5JKWAaqYNc8DyKyYTbQbWJeWI9lSwFvhZdQZmA7wRqIScfcB50yptVrLyG3xzw05VC0gCmVq7rVRRz2NpAPV71D5BORGOzrX7K5HLld9EzD/ADqY0+jSTiAqq90SBoH0ZTDKH+L0rcJWBNBDC1kdPLErX13MfUjelYtIsC6jxlM+lKum0VZt5aqpN+vSgBAPTKAQPJ+lxLvFntfbqSgF3EUUP06XEqIM2O2CbQ0bi+YND/HStxbj0qMExPI3/GOjDqWMktevW7BJC1dTgbgqhP4+QYTofIa2bAdB4QngfrQcAXVQNXE4AuW4vZC2B5wTNJqEMg88P8xn+JvsxtLJwDf5smJtJla6lIAKZwauWGPs4WG0MUxOcAHU8A4D4r6EsBrCh4ppGaGdDb2YAkZIJh4HNhVOUpeIC0P+pHxppKAKZmcnqTBsin8C0T3gZ1eh4Hdg4F4xiLwe0AHQQWJQD9ej0XIAnJhBdm3UXz2QSmnfMBoLhcpYBRLL5FU2wUp83lAAAqydppzHxA/kUTVRjtmNuG1ADMgH2A4Al9GisnedFE1n3CaEwAvAdnISwAXQamwG4yGT+ZC2l/AIrZ9mk07LczAAAAAElFTkSuQmCC",dh="data:image/svg+xml,%3csvg%20width='3'%20height='26'%20viewBox='0%200%203%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1.08649%201V25'%20stroke='%230065FE'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e",fh="data:image/svg+xml,%3csvg%20width='14'%20height='8'%20viewBox='0%200%2014%208'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1.08649%201L7.08649%207L13.0865%201'%20stroke='%23141414'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",hh="data:image/svg+xml,%3csvg%20width='174'%20height='21'%20viewBox='0%200%20174%2021'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M162.517%200.905029C75.1007%201.58333%2017.7488%2011.4833%200%2016.3486L9.28502%2015.694L2.32125%2017.9693L10.2135%2017.6848L6.03526%2019.3913L12.0705%2020.8133C52.0748%2016.4528%20149.09%206.6406%20173.63%205.2387L155.524%204.88668C165.556%203.5543%20166.666%203.60686%20166.666%203.60686C166.666%203.60686%20162.517%202.61145%20162.517%200.905029Z'%20fill='%23005AE2'/%3e%3c/svg%3e",Or="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2075.33%2035.33'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:none;stroke:%23141414;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}%3c/style%3e%3c/defs%3e%3ctitle%3eAsset%201%3c/title%3e%3cg%20id='Layer_2'%20data-name='Layer%202'%3e%3cg%20id='Layer_1-2'%20data-name='Layer%201'%3e%3cpath%20class='cls-1'%20d='M47.67,1h10A16.7,16.7,0,0,1,69.45,5.88a16.65,16.65,0,0,1,0,23.57,16.7,16.7,0,0,1-11.78,4.88h-10m-20,0h-10A16.67,16.67,0,1,1,17.67,1h10'/%3e%3cpath%20class='cls-1'%20d='M24.33,17.67H51'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",ph="data:image/svg+xml,%3csvg%20width='41'%20height='12'%20viewBox='0%200%2041%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1%205C0.447715%205%200%205.44772%200%206C0%206.55228%200.447715%207%201%207L1%205ZM41%206L31%200.226497V11.7735L41%206ZM1%207L32%207V5L1%205L1%207Z'%20fill='%23005AE2'/%3e%3c/svg%3e",gh="data:image/svg+xml,%3csvg%20width='247'%20height='258'%20viewBox='0%200%20247%20258'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M86.6771%2041.1107C135.228%20-63.1745%20174.407%2059.5845%20198.623%20107.021C233.043%20174.448%20318.301%20234.6%20115.971%20255.011C-86.3584%20275.422%2025.9891%20171.467%2086.6771%2041.1107Z'%20fill='%23E2E9F0'/%3e%3c/svg%3e",mh="data:image/svg+xml,%3csvg%20width='1440'%20height='93'%20viewBox='0%200%201440%2093'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M201.516%209.70664C217.021%203.29808%20233.634%200%20250.411%200H1186.9C1203.48%200%201219.89%203.21974%201235.24%209.48037L1440%2093H0L201.516%209.70664Z'%20fill='%23F8F7F7'/%3e%3c/svg%3e",_h="data:image/svg+xml,%3csvg%20width='964'%20height='57'%20viewBox='0%200%20964%2057'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_d_1_138)'%3e%3cellipse%20cx='482'%20cy='24.5'%20rx='478'%20ry='24.5'%20fill='url(%23paint0_linear_1_138)'%20fill-opacity='0.7'%20shape-rendering='crispEdges'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d_1_138'%20x='0'%20y='0'%20width='964'%20height='57'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dy='4'/%3e%3cfeGaussianBlur%20stdDeviation='2'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='out'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200.0705882%200%200%200%200%200.141176%200%200%200%200%200.34902%200%200%200%200.35%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_1_138'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_1_138'%20result='shape'/%3e%3c/filter%3e%3clinearGradient%20id='paint0_linear_1_138'%20x1='482'%20y1='0'%20x2='482'%20y2='49'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0.106755'%20stop-color='%23E2E9F0'/%3e%3cstop%20offset='0.440102'%20stop-color='%23DCE4EB'/%3e%3cstop%20offset='1'%20stop-color='%23E2E9F0'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",$a="data:image/svg+xml,%3csvg%20width='6'%20height='48'%20viewBox='0%200%206%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3%200V48'%20stroke='url(%23paint0_linear_1_196)'%20stroke-width='5'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_1_196'%20x1='3.05'%20y1='0'%20x2='3.05'%20y2='48'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23112232'/%3e%3cstop%20offset='1'%20stop-color='%234D6B88'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",yh="data:image/svg+xml,%3csvg%20width='25'%20height='24'%20viewBox='0%200%2025%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1_203)'%3e%3cpath%20d='M15.1%207H18.1C18.7566%207%2019.4068%207.12933%2020.0134%207.3806C20.6201%207.63188%2021.1712%208.00017%2021.6355%208.46447C22.0998%208.92876%2022.4681%209.47996%2022.7194%2010.0866C22.9707%2010.6932%2023.1%2011.3434%2023.1%2012C23.1%2012.6566%2022.9707%2013.3068%2022.7194%2013.9134C22.4681%2014.52%2022.0998%2015.0712%2021.6355%2015.5355C21.1712%2015.9998%2020.6201%2016.3681%2020.0134%2016.6194C19.4068%2016.8707%2018.7566%2017%2018.1%2017H15.1M9.10001%2017H6.10001C5.4434%2017%204.79322%2016.8707%204.18659%2016.6194C3.57996%2016.3681%203.02877%2015.9998%202.56447%2015.5355C1.62679%2014.5979%201.10001%2013.3261%201.10001%2012C1.10001%2010.6739%201.62679%209.40215%202.56447%208.46447C3.50215%207.52678%204.77392%207%206.10001%207H9.10001'%20stroke='%23141414'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8.10001%2012H16.1'%20stroke='%23005AE2'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_203'%3e%3crect%20width='24'%20height='24'%20fill='white'%20transform='translate(0.100006)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",vh="data:image/svg+xml,%3csvg%20width='25'%20height='24'%20viewBox='0%200%2025%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11.1%204H4.10001C3.56957%204%203.06087%204.21071%202.68579%204.58579C2.31072%204.96086%202.10001%205.46957%202.10001%206V20C2.10001%2020.5304%202.31072%2021.0391%202.68579%2021.4142C3.06087%2021.7893%203.56957%2022%204.10001%2022H18.1C18.6304%2022%2019.1391%2021.7893%2019.5142%2021.4142C19.8893%2021.0391%2020.1%2020.5304%2020.1%2020V13'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M18.6%202.49998C18.9978%202.10216%2019.5374%201.87866%2020.1%201.87866C20.6626%201.87866%2021.2022%202.10216%2021.6%202.49998C21.9978%202.89781%2022.2213%203.43737%2022.2213%203.99998C22.2213%204.56259%2021.9978%205.10216%2021.6%205.49998L12.1%2015L8.10001%2016L9.10001%2012L18.6%202.49998Z'%20stroke='%23005AE2'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",wh="data:image/svg+xml,%3csvg%20width='25'%20height='25'%20viewBox='0%200%2025%2025'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.8859%203.06763H3.88589V10.0676H10.8859V3.06763Z'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M21.8859%203.06763H14.8859V10.0676H21.8859V3.06763Z'%20stroke='%23005AE2'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M21.8859%2014.0676H14.8859V21.0676H21.8859V14.0676Z'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M10.8859%2014.0676H3.88589V21.0676H10.8859V14.0676Z'%20stroke='%23005AE2'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",bh="data:image/svg+xml,%3csvg%20width='25'%20height='24'%20viewBox='0%200%2025%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1_236)'%3e%3cpath%20d='M21.1%2012H17.1L14.1%2021L8.10001%203L5.10001%2012H1.10001'%20stroke='%230065FE'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_236'%3e%3crect%20width='24'%20height='24'%20fill='white'%20transform='translate(0.100006)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Qe="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1_252)'%3e%3cpath%20d='M14.6667%207.38668V8.00001C14.6659%209.43763%2014.2003%2010.8365%2013.3396%2011.9879C12.4788%2013.1393%2011.2689%2013.9817%209.89025%2014.3893C8.51163%2014.7969%207.03818%2014.7479%205.68966%2014.2497C4.34113%2013.7515%203.18978%2012.8307%202.40732%2011.6247C1.62485%2010.4187%201.2532%208.99205%201.34779%207.55755C1.44239%206.12305%201.99815%204.75756%202.9322%203.66473C3.86625%202.57189%205.12853%201.81027%206.5308%201.49344C7.93307%201.17662%209.40019%201.32157%2010.7133%201.90668'%20stroke='%23005AE2'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M14.6667%202.66666L8%209.33999L6%207.33999'%20stroke='%23005AE2'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_252'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",$n="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1_316)'%3e%3cpath%20d='M14.6667%207.38668V8.00001C14.6658%209.43763%2014.2003%2010.8365%2013.3396%2011.9879C12.4788%2013.1393%2011.2689%2013.9817%209.89023%2014.3893C8.51162%2014.7969%207.03817%2014.7479%205.68964%2014.2497C4.34112%2013.7515%203.18976%2012.8307%202.4073%2011.6247C1.62484%2010.4187%201.25319%208.99205%201.34778%207.55755C1.44237%206.12305%201.99813%204.75756%202.93218%203.66473C3.86623%202.57189%205.12852%201.81027%206.53079%201.49344C7.93306%201.17662%209.40017%201.32157%2010.7133%201.90668'%20stroke='white'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M14.6667%202.66666L8%209.33999L6%207.33999'%20stroke='white'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_316'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Eh="data:image/svg+xml,%3csvg%20width='668'%20height='299'%20viewBox='0%200%20668%20299'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.5'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M43%20192.107C-13.417%20169.4%20-91.4973%20207.114%20-122.5%20165.197C-151.311%20126.244%20-160.612%2044.6091%20-156.682%200.194901C-152.913%20-42.405%20-129.881%20-80.1686%20-105.252%20-118.689C-73.6885%20-168.054%20-65.0909%20-244.326%206.63529%20-255.235C80.4193%20-266.456%20128.261%20-196.084%20189.698%20-163.545C230.539%20-141.915%20270.367%20-123.208%20305.807%20-96.7871C349.903%20-63.9117%20421.468%20-37.7091%20420.926%208.84397C420.385%2055.3315%20334.746%2072.5759%20303.366%20112.714C264.745%20162.117%20286.756%20241.729%20218.553%20267.706C152.499%20292.865%20108.273%20218.379%2043%20192.107Z'%20fill='url(%23paint0_linear_1_444)'%20fill-opacity='0.3'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M130%20156.975C77.1864%20142.346%2013.321%20143.549%20-20.5001%20109.883C-51.9311%2078.5958%20-50.7569%2074.6479%20-54.5753%2035.6263C-58.2382%20-1.8013%20-44.3437%20-36.7734%20-29.1826%20-72.5491C-9.75197%20-118.397%20-14.6996%20-185.578%2045.9617%20-201.606C108.364%20-218.094%20161.481%20-161.191%20220.268%20-138.461C259.346%20-123.351%20297.068%20-110.693%20332.225%20-90.9206C375.971%20-66.3182%20442.541%20-50.0253%20449.657%20-9.45126C456.763%2031.067%20385.023%2053.8784%20364.249%2091.678C338.681%20138.202%20370.818%20205.501%20315.679%20234.327C262.279%20262.243%20191.104%20173.9%20130%20156.975Z'%20fill='url(%23paint1_linear_1_444)'%20fill-opacity='0.4'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M167.5%2093.0639C123.721%2069.6206%2011.8413%2073.3034%20-8.00005%2035.88C-26.4387%201.10235%2085.3641%209.05234%2095.0001%20-27.6575C104.243%20-62.8673%2080.953%20-62.5497%20107%20-92.69C140.382%20-131.316%20181.646%20-89.3365%20243%20-92.69C306.114%20-96.1401%20300.736%20-178.991%20356.14%20-165.456C417.702%20-150.417%20330.381%20-66.3471%20356.14%20-41.4862C388.191%20-10.5521%20531.325%20-42.0129%20524.207%20-3.24956C517.098%2035.4605%20443.239%2042.9825%20411.333%2073.9319C372.062%20112.023%20379.01%20180.15%20318.434%20196.348C259.769%20212.034%20218.149%20120.188%20167.5%2093.0639Z'%20fill='url(%23paint2_linear_1_444)'%20fill-opacity='0.6'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_1_444'%20x1='396.928'%20y1='-77.634'%20x2='140.688'%20y2='285.345'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%239EE6F7'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%239EE6F7'%20stop-opacity='0.46'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_1_444'%20x1='414.67'%20y1='-82.5464'%20x2='238.043'%20y2='250.013'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%239EE6F7'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%239EE6F7'%20stop-opacity='0.46'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_1_444'%20x1='516.586'%20y1='-77.2588'%20x2='255.452'%20y2='208.884'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23005AE2'/%3e%3cstop%20offset='1'%20stop-color='%2373E6FF'%20stop-opacity='0.38'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",Ch="data:image/svg+xml,%3csvg%20width='579'%20height='299'%20viewBox='0%200%20579%20299'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.7'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M66.5001%20329.647C76.7663%20282.37%20156.045%20188.03%20198.905%20152.427C238.736%20119.339%20259.063%20106.675%20316.5%2094.9325C371.591%2083.6695%20457.248%2099.0958%20514%20103.902C586.73%20110.063%20690.641%2074.3523%20727.879%20121.456C766.186%20169.911%20692.853%20226.712%20671.799%20280.75C657.803%20316.673%20647.172%20350.924%20625.353%20384.597C598.203%20426.495%20588.469%20485.616%20529.435%20500.451C470.484%20515.265%20420.688%20460.404%20359.683%20451.358C284.599%20440.224%20191.141%20481.798%20136.002%20442.109C82.602%20403.67%2054.6225%20384.347%2066.5001%20329.647Z'%20fill='url(%23paint0_linear_1_440)'%20fill-opacity='0.3'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M178.135%20349.119C179.366%20307.028%20192.737%20265.722%20224.246%20230.825C253.527%20198.393%20298.799%20177.668%20346.886%20162.214C393.008%20147.392%20432.814%20163.199%20483.001%20162.214C547.318%20160.953%20639.588%20118.073%20679.682%20155.687C720.927%20194.38%20666.348%20250.505%20656.828%20299.465C650.499%20332.01%20646.827%20362.796%20633.322%20394.095C616.517%20433.041%20617.68%20485.395%20568.708%20503.685C519.804%20521.95%20467.513%20478.728%20412.932%20476.409C345.754%20473.555%20271.173%20518.258%20216.704%20488.729C163.953%20460.131%20176.711%20397.818%20178.135%20349.119Z'%20fill='url(%23paint1_linear_1_440)'%20fill-opacity='0.4'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M277.126%20342.229C292.454%20303.639%20318.715%20268.061%20359.543%20241.811C397.485%20217.417%20446.23%20206.831%20495.792%20201.638C543.329%20196.658%20588.843%20204.353%20635.464%20212.901C695.211%20223.856%20780.641%20216.076%20804.937%20258.322C829.93%20301.78%20760.666%20343.262%20735.375%20386.624C718.564%20415.448%20704.797%20443.151%20681.786%20469.474C653.153%20502.228%20636.573%20550.734%20585.238%20558.377C533.973%20566.009%20500.319%20516.292%20450.76%20503.869C389.764%20488.579%20305.903%20515.758%20265.622%20478.26C226.612%20441.945%20259.391%20386.876%20277.126%20342.229Z'%20fill='url(%23paint2_linear_1_440)'%20fill-opacity='0.6'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_1_440'%20x1='637.675'%20y1='444.148'%20x2='212.299'%20y2='187.426'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%239EE6F7'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%239EE6F7'%20stop-opacity='0.46'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_1_440'%20x1='649.685'%20y1='455.075'%20x2='229.608'%20y2='290.592'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%239EE6F7'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%239EE6F7'%20stop-opacity='0.46'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_1_440'%20x1='676.316'%20y1='528.8'%20x2='365.121'%20y2='272.69'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23005AE2'/%3e%3cstop%20offset='1'%20stop-color='%2373E6FF'%20stop-opacity='0.38'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",Ih="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M23.5606%200.439381C22.9748%20-0.14646%2022.0167%20-0.14646%2021.4308%200.439381L18.3778%203.49483C17.1269%202.66275%2015.6915%202.24971%2014.25%202.24971C12.331%202.24971%2010.3872%202.98219%208.94718%204.44691L4.44716%208.94716C1.88083%2011.5106%201.56451%2015.4747%203.4922%2018.384L0.439382%2021.4394C-0.146461%2022.0253%20-0.146461%2022.9745%200.439382%2023.5606C0.732424%2023.8536%201.11619%2024%201.49995%2024C1.88395%2024%202.26747%2023.8536%202.56051%2023.5606L5.61333%2020.5051C6.86445%2021.3372%208.30854%2021.7502%209.74999%2021.7502C11.6441%2021.7502%2013.5878%2021.0178%2015.0528%2019.553L19.5442%2015.053C22.1105%2012.4893%2022.4269%208.52524%2020.4989%205.61595L23.5606%202.56051C24.1465%201.97466%2024.1465%201.02522%2023.5606%200.439381ZM18.7412%209.74996C18.7412%2010.9512%2018.2724%2012.0821%2017.4231%2012.9317L12.9317%2017.4317C12.0792%2018.2813%2010.9265%2018.75%209.74999%2018.75C9.0703%2018.75%208.4199%2018.5832%207.8223%2018.2988L10.0358%2016.0605C10.6217%2015.4747%2010.6217%2014.5255%2010.0358%2013.9394C9.47471%2013.3536%208.5255%2013.3536%207.93966%2013.9394L5.70141%2016.1777C5.41437%2015.5829%205.25021%2014.9325%205.25021%2014.25C5.25021%2013.0488%205.71893%2011.9179%206.56853%2011.0683L11.0436%206.56828C11.8932%205.71867%2013.0488%205.24995%2014.25%205.24995C14.9297%205.24995%2015.577%205.41675%2016.1748%205.70115L13.8926%207.9862C13.3068%208.57204%2013.3068%209.52124%2013.8926%2010.1073C14.1857%2010.4004%2014.5692%2010.5468%2014.9532%2010.5468C15.3341%2010.5468%2015.7179%2010.4004%2016.0107%2010.1073L18.2902%207.82228C18.577%208.41676%2018.7412%209.0674%2018.7412%209.74996Z'%20fill='%23001F3F'/%3e%3c/svg%3e",Rh="data:image/svg+xml,%3csvg%20width='2'%20height='26'%20viewBox='0%200%202%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1%201V25'%20stroke='%23141414'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e",Th="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M23.0859%205.47656C22.3438%206.53125%2021.5625%207.35156%2020.7422%207.9375V8.52344C20.7422%2011.9609%2019.5215%2015.0664%2017.0801%2017.8398C14.6387%2020.6133%2011.3672%2022%207.26562%2022C4.60938%2022%202.1875%2021.2969%200%2019.8906C0.234375%2019.9297%200.605469%2019.9492%201.11328%2019.9492C3.30078%2019.9492%205.27344%2019.2656%207.03125%2017.8984C6.01562%2017.8594%205.09766%2017.5371%204.27734%2016.9316C3.45703%2016.3262%202.89062%2015.5547%202.57812%2014.6172C2.96875%2014.6953%203.26172%2014.7344%203.45703%2014.7344C3.88672%2014.7344%204.31641%2014.6758%204.74609%2014.5586C3.65234%2014.3633%202.74414%2013.8262%202.02148%2012.9473C1.29883%2012.0684%200.9375%2011.0625%200.9375%209.92969V9.8125C1.71875%2010.2422%202.42188%2010.457%203.04688%2010.457C1.67969%209.51953%200.996094%208.19141%200.996094%206.47266C0.996094%205.57422%201.19141%204.79297%201.58203%204.12891C4.12109%207.21484%207.38281%208.85547%2011.3672%209.05078C11.2891%208.58203%2011.25%208.23047%2011.25%207.99609C11.25%206.66797%2011.709%205.54492%2012.627%204.62695C13.5449%203.70898%2014.668%203.25%2015.9961%203.25C17.4023%203.25%2018.5547%203.73828%2019.4531%204.71484C20.5469%204.48047%2021.543%204.10938%2022.4414%203.60156C22.0898%204.73438%2021.4062%205.59375%2020.3906%206.17969C21.2891%206.0625%2022.1875%205.82812%2023.0859%205.47656Z'%20fill='%23141414'/%3e%3c/svg%3e",Sh="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M17%202H7C4.23858%202%202%204.23858%202%207V17C2%2019.7614%204.23858%2022%207%2022H17C19.7614%2022%2022%2019.7614%2022%2017V7C22%204.23858%2019.7614%202%2017%202Z'%20stroke='%23141414'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M16%2011.3701C16.1234%2012.2023%2015.9813%2013.0523%2015.5938%2013.7991C15.2063%2014.5459%2014.5932%2015.1515%2013.8416%2015.5297C13.0901%2015.908%2012.2385%2016.0397%2011.4078%2015.906C10.5771%2015.7723%209.80977%2015.3801%209.21485%2014.7852C8.61993%2014.1903%208.22774%2013.4229%208.09408%2012.5923C7.96042%2011.7616%208.09208%2010.91%208.47034%2010.1584C8.8486%209.40691%209.4542%208.7938%2010.201%208.4063C10.9478%208.0188%2011.7978%207.87665%2012.63%208.00006C13.4789%208.12594%2014.2649%208.52152%2014.8717%209.12836C15.4785%209.73521%2015.8741%2010.5211%2016%2011.3701Z'%20stroke='%23141414'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",Ah="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20.7005%201.4375C21.1302%201.4375%2021.511%201.58398%2021.843%201.87695C22.1751%202.16992%2022.3411%202.53125%2022.3411%202.96094V21.4766C22.3411%2021.9062%2022.1751%2022.2676%2021.843%2022.5605C21.511%2022.8535%2021.1302%2023%2020.7005%2023H2.30203C1.87234%2023%201.50125%2022.8535%201.18875%2022.5605C0.876251%2022.2676%200.720001%2021.9062%200.720001%2021.4766V2.96094C0.720001%202.53125%200.876251%202.16992%201.18875%201.87695C1.50125%201.58398%201.87234%201.4375%202.30203%201.4375H20.7005ZM7.10672%2019.8359V9.52344H3.94266V19.8359H7.10672ZM5.52469%208.11719C6.0325%208.11719%206.47195%207.93164%206.84305%207.56055C7.21414%207.18945%207.39969%206.75%207.39969%206.24219C7.39969%205.73438%207.21414%205.29492%206.84305%204.92383C6.47195%204.55273%206.0325%204.36719%205.52469%204.36719C5.01688%204.36719%204.57742%204.55273%204.20633%204.92383C3.83524%205.29492%203.64969%205.73438%203.64969%206.24219C3.64969%206.78906%203.82547%207.23828%204.17703%207.58984C4.52859%207.94141%204.97781%208.11719%205.52469%208.11719ZM19.1184%2019.8359V14.1523C19.1184%2012.5898%2018.8548%2011.3887%2018.3274%2010.5488C17.8001%209.70898%2016.7942%209.28906%2015.3098%209.28906C13.8255%209.28906%2012.8098%209.83594%2012.263%2010.9297H12.2044V9.52344H9.1575V19.8359H12.3216V14.7383C12.3216%2012.9805%2012.9661%2012.1016%2014.2552%2012.1016C14.763%2012.1016%2015.1438%2012.2676%2015.3977%2012.5996C15.6516%2012.9316%2015.7981%2013.2441%2015.8372%2013.5371C15.8763%2013.8301%2015.8958%2014.25%2015.8958%2014.7969V19.8359H19.1184Z'%20fill='%23141414'/%3e%3c/svg%3e",kh="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M21.9706%201.4375C22.2831%201.4375%2022.5663%201.55469%2022.8202%201.78906C23.0741%202.02344%2023.2011%202.29688%2023.2011%202.60938V21.8281C23.2011%2022.1406%2023.0741%2022.4141%2022.8202%2022.6484C22.5663%2022.8828%2022.2831%2023%2021.9706%2023H16.4628V14.6797H19.2753L19.6855%2011.3984H16.4628V9.28906C16.4628%208.23438%2017.0097%207.70703%2018.1034%207.70703H19.8026V4.83594C19.2167%204.71875%2018.3769%204.66016%2017.2831%204.66016C16.0331%204.66016%2015.0273%205.04102%2014.2655%205.80273C13.5038%206.56445%2013.123%207.62891%2013.123%208.99609V11.3984H10.3105V14.6797H13.123V23H2.75186C2.43936%2023%202.16592%2022.8828%201.93155%2022.6484C1.69717%2022.4141%201.57999%2022.1406%201.57999%2021.8281V2.60938C1.57999%202.29688%201.69717%202.02344%201.93155%201.78906C2.16592%201.55469%202.43936%201.4375%202.75186%201.4375H21.9706Z'%20fill='%23141414'/%3e%3c/svg%3e",ho="data:image/svg+xml,%3csvg%20width='508'%20height='541'%20viewBox='0%200%20508%20541'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.8'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M76.21%2062.958C123.75%2071.9324%20220.214%20148.611%20256.972%20190.486C291.132%20229.401%20304.345%20249.375%20317.648%20306.471C330.408%20361.235%20317.321%20447.28%20314.062%20504.142C309.886%20577.013%20348.414%20679.912%20302.342%20718.42C254.948%20758.032%20196.17%20686.275%20141.579%20666.7C105.289%20653.688%2070.7602%20643.994%2036.5056%20623.1C-6.11627%20597.102%20-65.4808%20588.983%20-81.9188%20530.375C-98.3333%20471.849%20-44.8493%20420.576%20-37.468%20359.348C-28.3839%20283.988%20-72.4886%20191.697%20-34.3162%20135.498C2.6531%2081.0705%2021.2074%2052.575%2076.21%2062.958Z'%20fill='url(%23paint0_linear_1_495)'%20fill-opacity='0.3'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M59.7867%20175.082C101.896%20175.166%20143.55%20187.407%20179.293%20217.953C212.51%20246.34%20234.462%20291.03%20251.219%20338.678C267.293%20384.379%20252.576%20424.602%20254.927%20474.743C257.94%20539.002%20303.318%20630.069%20266.811%20671.173C229.255%20713.457%20171.664%20660.428%20122.464%20652.245C89.758%20646.804%2058.8835%20643.972%2027.2275%20631.325C-12.1614%20615.588%20-64.4639%20618.176%20-84.0816%20569.721C-103.672%20521.333%20-61.8906%20467.883%20-61.0591%20413.259C-60.0362%20346.029%20-106.754%20272.693%20-78.7202%20217.44C-51.5701%20163.93%2011.0671%20174.985%2059.7867%20175.082Z'%20fill='url(%23paint1_linear_1_495)'%20fill-opacity='0.4'/%3e%3cpath%20opacity='0.4'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M69.371%20273.849C108.365%20288.12%20144.644%20313.402%20171.997%20353.5C197.416%20390.763%20209.325%20439.201%20215.867%20488.604C222.141%20535.987%20215.688%20581.694%20208.414%20628.531C199.09%20688.553%20209.195%20773.74%20167.626%20799.178C124.865%20825.346%2081.5112%20757.237%2037.4765%20733.137C8.20472%20717.117%20-19.8625%20704.11%20-46.8031%20681.825C-80.325%20654.095%20-129.264%20638.843%20-138.303%20587.735C-147.329%20536.697%20-98.5467%20501.701%20-87.4787%20451.822C-73.8563%20390.432%20-103.309%20307.342%20-66.9225%20266.054C-31.6835%20226.07%2024.2572%20257.336%2069.371%20273.849Z'%20fill='url(%23paint2_linear_1_495)'%20fill-opacity='0.6'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_1_495'%20x1='-22.6874'%20y1='637.041'%20x2='222.351'%20y2='204.828'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%239EE6F7'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%239EE6F7'%20stop-opacity='0.46'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_1_495'%20x1='-33.2834'%20y1='649.344'%20x2='119.695'%20y2='224.941'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%239EE6F7'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%239EE6F7'%20stop-opacity='0.46'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_1_495'%20x1='-106.255'%20y1='677.973'%20x2='141.281'%20y2='359.916'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23005AE2'/%3e%3cstop%20offset='1'%20stop-color='%2373E6FF'%20stop-opacity='0.38'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",Oh="data:image/svg+xml,%3csvg%20width='543'%20height='358'%20viewBox='0%200%20543%20358'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.7'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M74.4161%20555.549C59.9173%20509.393%2082.0605%20388.172%20101.659%20336.012C119.873%20287.541%20131.258%20266.471%20175.338%20227.821C217.618%20190.749%20299.67%20161.723%20351.352%20137.789C417.586%20107.116%20490.166%2024.6264%20545.847%2047.1018C603.125%2070.2218%20567.554%20155.888%20576.029%20213.26C581.664%20251.399%20589.393%20286.419%20587.117%20326.479C584.285%20376.323%20605.112%20432.504%20561.176%20474.632C517.302%20516.7%20446.87%20493.706%20389.393%20516.064C318.652%20543.582%20258.055%20625.989%20190.497%20618.821C125.068%20611.878%2091.1911%20608.95%2074.4161%20555.549Z'%20fill='url(%23paint0_linear_1_491)'%20fill-opacity='0.3'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M181.04%20517.17C161.261%20479.995%20152.418%20437.489%20162.504%20391.567C171.878%20348.89%20200.941%20308.462%20235.06%20271.219C267.785%20235.498%20310.195%20229.513%20353.306%20203.8C408.555%20170.847%20467.471%2087.8944%20520.932%20100.711C575.928%20113.895%20556.314%20189.685%20572.294%20236.933C582.915%20268.34%20594.974%20296.903%20598.745%20330.783C603.437%20372.939%20630.378%20417.844%20596.895%20457.989C563.458%20498.079%20496.623%20486.432%20448.059%20511.451C388.287%20542.246%20345.639%20618.021%20283.695%20619.348C223.705%20620.632%20203.924%20560.181%20181.04%20517.17Z'%20fill='url(%23paint1_linear_1_491)'%20fill-opacity='0.4'/%3e%3cpath%20opacity='0.5'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M263.622%20462.153C257.824%20421.037%20263.015%20377.123%20285.481%20334.097C306.359%20294.112%20343.461%20260.772%20383.944%20231.712C422.774%20203.84%20466.124%20187.981%20510.858%20172.315C568.187%20152.239%20638.548%20103.166%20680.579%20127.832C723.817%20153.204%20684.193%20223.548%20683.699%20273.744C683.372%20307.111%20685.134%20337.996%20678.182%20372.261C669.532%20414.897%20679.154%20465.247%20638.344%20497.313C597.59%20529.335%20543.729%20502.814%20494.522%20516.57C433.961%20533.499%20374.571%20598.647%20321.005%20586.024C269.13%20573.798%20270.329%20509.724%20263.622%20462.153Z'%20fill='url(%23paint2_linear_1_491)'%20fill-opacity='0.6'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_1_491'%20x1='627.318'%20y1='372.108'%20x2='130.63'%20y2='359.783'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%239EE6F7'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%239EE6F7'%20stop-opacity='0.46'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_1_491'%20x1='643.164'%20y1='375.652'%20x2='196.766'%20y2='440.831'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%239EE6F7'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%239EE6F7'%20stop-opacity='0.46'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_1_491'%20x1='702.815'%20y1='426.507'%20x2='305.621'%20y2='358.159'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23005AE2'/%3e%3cstop%20offset='1'%20stop-color='%2373E6FF'%20stop-opacity='0.38'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",Ph="data:image/svg+xml,%3csvg%20width='350'%20height='860'%20viewBox='0%200%20350%20860'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.8'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M-81.7899%20-40.0418C-34.25%20-31.0674%2062.214%2045.6115%2098.9723%2087.4865C133.132%20126.401%20146.346%20146.375%20159.649%20203.471C172.408%20258.235%20159.321%20344.28%20156.062%20401.142C151.886%20474.013%20190.414%20576.912%20144.342%20615.42C96.9481%20655.032%2038.1705%20583.275%20-16.4212%20563.7C-52.7113%20550.688%20-87.2397%20540.994%20-121.494%20520.1C-164.116%20494.102%20-223.481%20485.983%20-239.919%20427.375C-256.333%20368.849%20-202.849%20317.576%20-195.468%20256.348C-186.384%20180.988%20-230.488%2088.6975%20-192.316%2032.4982C-155.347%20-21.9293%20-136.792%20-50.4248%20-81.7899%20-40.0418Z'%20fill='url(%23paint0_linear_1_430)'%20fill-opacity='0.3'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M-98.2132%2072.0822C-56.1038%2072.1661%20-14.4496%2084.4072%2021.2936%20114.953C54.5106%20143.34%2076.4616%20188.03%2093.2194%20235.678C109.293%20281.379%2094.576%20321.602%2096.9275%20371.743C99.9403%20436.002%20145.318%20527.069%20108.811%20568.173C71.2553%20610.458%2013.6644%20557.428%20-35.5363%20549.245C-68.2419%20543.804%20-99.1163%20540.973%20-130.772%20528.325C-170.161%20512.588%20-222.464%20515.176%20-242.081%20466.721C-261.672%20418.333%20-219.89%20364.883%20-219.059%20310.259C-218.036%20243.029%20-264.754%20169.693%20-236.72%20114.44C-209.57%2060.9296%20-146.933%2071.9854%20-98.2132%2072.0822Z'%20fill='url(%23paint1_linear_1_430)'%20fill-opacity='0.4'/%3e%3cpath%20opacity='0.4'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M-88.6289%20170.849C-49.6353%20185.12%20-13.3557%20210.402%2013.997%20250.5C39.4159%20287.763%2051.3256%20336.202%2057.867%20385.604C64.1407%20432.987%2057.6883%20478.694%2050.4137%20525.531C41.0901%20585.554%2051.1947%20670.74%209.62603%20696.178C-33.1347%20722.346%20-76.4887%20654.238%20-120.523%20630.137C-149.795%20614.117%20-177.862%20601.11%20-204.803%20578.825C-238.325%20551.095%20-287.264%20535.843%20-296.302%20484.735C-305.328%20433.697%20-256.547%20398.701%20-245.479%20348.822C-231.856%20287.432%20-261.309%20204.342%20-224.922%20163.054C-189.683%20123.07%20-133.743%20154.336%20-88.6289%20170.849Z'%20fill='url(%23paint2_linear_1_430)'%20fill-opacity='0.6'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_1_430'%20x1='-180.687'%20y1='534.041'%20x2='64.3511'%20y2='101.829'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%239EE6F7'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%239EE6F7'%20stop-opacity='0.46'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_1_430'%20x1='-191.283'%20y1='546.344'%20x2='-38.3052'%20y2='121.941'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%239EE6F7'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%239EE6F7'%20stop-opacity='0.46'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_1_430'%20x1='-264.255'%20y1='574.973'%20x2='-16.7186'%20y2='256.916'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23005AE2'/%3e%3cstop%20offset='1'%20stop-color='%2373E6FF'%20stop-opacity='0.38'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",xh="data:image/svg+xml,%3csvg%20width='374'%20height='439'%20viewBox='0%200%20374%20439'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.7'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M74.416%20555.548C59.9172%20509.393%2082.0604%20388.171%20101.659%20336.012C119.872%20287.54%20131.258%20266.471%20175.338%20227.82C217.618%20190.749%20299.67%20161.723%20351.352%20137.789C417.585%20107.116%20490.166%2024.626%20545.847%2047.1014C603.125%2070.2215%20567.554%20155.888%20576.029%20213.26C581.663%20251.398%20589.393%20286.419%20587.117%20326.478C584.284%20376.323%20605.112%20432.504%20561.176%20474.631C517.302%20516.7%20446.87%20493.706%20389.393%20516.063C318.651%20543.581%20258.055%20625.988%20190.497%20618.82C125.068%20611.878%2091.191%20608.95%2074.416%20555.548Z'%20fill='url(%23paint0_linear_1_434)'%20fill-opacity='0.3'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M181.04%20517.17C161.261%20479.995%20152.418%20437.489%20162.504%20391.566C171.877%20348.889%20200.94%20308.461%20235.06%20271.219C267.785%20235.497%20310.195%20229.513%20353.306%20203.799C408.554%20170.847%20467.471%2087.8941%20520.932%20100.71C575.928%20113.895%20556.313%20189.685%20572.293%20236.932C582.915%20268.34%20594.974%20296.903%20598.745%20330.783C603.436%20372.939%20630.378%20417.843%20596.895%20457.988C563.458%20498.079%20496.623%20486.431%20448.059%20511.451C388.287%20542.245%20345.639%20618.021%20283.695%20619.347C223.705%20620.632%20203.924%20560.181%20181.04%20517.17Z'%20fill='url(%23paint1_linear_1_434)'%20fill-opacity='0.4'/%3e%3cpath%20opacity='0.5'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M263.622%20462.153C257.824%20421.037%20263.015%20377.123%20285.481%20334.096C306.359%20294.111%20343.461%20260.772%20383.944%20231.712C422.774%20203.839%20466.124%20187.981%20510.858%20172.314C568.187%20152.238%20638.548%20103.165%20680.579%20127.831C723.817%20153.204%20684.192%20223.548%20683.699%20273.744C683.372%20307.111%20685.134%20337.995%20678.182%20372.261C669.532%20414.897%20679.154%20465.246%20638.344%20497.313C597.59%20529.335%20543.728%20502.814%20494.522%20516.569C433.961%20533.499%20374.571%20598.647%20321.005%20586.023C269.13%20573.798%20270.329%20509.723%20263.622%20462.153Z'%20fill='url(%23paint2_linear_1_434)'%20fill-opacity='0.6'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_1_434'%20x1='627.318'%20y1='372.107'%20x2='130.63'%20y2='359.782'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%239EE6F7'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%239EE6F7'%20stop-opacity='0.46'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_1_434'%20x1='643.164'%20y1='375.651'%20x2='196.765'%20y2='440.831'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%239EE6F7'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%239EE6F7'%20stop-opacity='0.46'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_1_434'%20x1='702.815'%20y1='426.507'%20x2='305.621'%20y2='358.159'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23005AE2'/%3e%3cstop%20offset='1'%20stop-color='%2373E6FF'%20stop-opacity='0.38'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",po=t=>(ro("data-v-fdbfcf14"),t=t(),so(),t),Lh={class:"faq-container"},Nh=po(()=>N("h1",null,"FAQs",-1)),Mh=po(()=>N("p",null,"Find answers to common questions about our service.",-1)),Dh=["onClick"],Uh={key:0},Fh={key:1},Bh={class:"faq-dropdown"},$h=po(()=>N("div",null,[N("img",{class:"background-image",src:Ph,alt:"Background Image 3"}),N("img",{class:"background-image",src:xh,alt:"Background Image 4"})],-1)),Hh=it({__name:"Faq",setup(t){const e=be([{question:"How does it work?",answer:"URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.",open:!1},{question:"Is it necessary to create an account to use the URLshortening service?",answer:"URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL.When a user clicks on the shortened link, they are redirected to the intended destination.",open:!1},{question:"Are the shortened links permanent? Will they expire?",answer:"URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.",open:!1},{question:"Are there any limitations on the number of URLs I can shorten?",answer:"URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.",open:!1},{question:"Can I track the performance of my shortened URLs?",answer:"If you have any more questions or concerns, feel free to reach out to us. We are here to help!",open:!1},{question:"Can I customize the shortened URLs to reflect my brand or content?",answer:"If you have any more questions or concerns, feel free to reach out to us. We are here to help!",open:!1},{question:"Still have any question?",answer:"If you have any more questions or concerns, feel free to reach out to us. We are here to help!",open:!1}]),n=r=>{e.value[r].open=!e.value[r].open};return(r,s)=>(le(),pe("div",Lh,[Nh,Mh,N("ul",null,[(le(!0),pe(De,null,Cl(e.value,(i,o)=>(le(),pe("li",{key:o,class:"faq-item"},[N("div",{class:"faq-header",onClick:a=>n(o)},[N("h3",null,ht(i.question),1),i.open?(le(),pe("span",Uh,"▲")):(le(),pe("span",Fh,"▼"))],8,Dh),Cn(N("div",Bh,[N("p",null,ht(i.answer),1)],512),[[xd,i.open]])]))),128))]),$h]))}}),Ss=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Vh=Ss(Hh,[["__scopeId","data-v-fdbfcf14"]]),jh="data:image/svg+xml,%3csvg%20width='25'%20height='25'%20viewBox='0%200%2025%2025'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.45883%208.31606C9.43987%208.54147%209.11187%208.59847%209.00637%208.39468L8.4383%207.29755C8.40156%207.22646%208.3267%207.17895%208.24205%207.1728L6.9348%207.07797C6.69196%207.06037%206.63057%206.75589%206.85011%206.65794L8.03191%206.13061C8.10844%206.09645%208.15973%206.02703%208.16628%205.94842L8.26845%204.73482C8.28741%204.50941%208.61541%204.45241%208.7209%204.6562L9.28897%205.75334C9.32571%205.82443%209.40048%205.87195%209.48523%205.87808L10.7925%205.97291C11.0353%205.99051%2011.0967%206.29499%2010.8772%206.39294L9.69536%206.92027C9.61874%206.95445%209.56755%207.02385%209.56099%207.10247L9.45883%208.31606Z'%20fill='white'/%3e%3cpath%20d='M5.70599%209.1442C5.67434%209.25336%205.50749%209.25336%205.47583%209.1442L5.30536%208.55649C5.29435%208.51841%205.26227%208.48867%205.22127%208.47842L4.58821%208.32018C4.4706%208.29079%204.4706%208.13591%204.58821%208.10652L5.22127%207.94828C5.26227%207.93802%205.29435%207.90828%205.30536%207.87021L5.47583%207.28249C5.50749%207.17333%205.67434%207.17333%205.70599%207.28249L5.87646%207.87021C5.88747%207.90828%205.91951%207.93802%205.96055%207.94828L6.59362%208.10652C6.71122%208.13591%206.71122%208.29079%206.59362%208.32018L5.96055%208.47842C5.91951%208.48867%205.88747%208.51841%205.87646%208.55649L5.70599%209.1442Z'%20fill='white'/%3e%3cpath%20d='M7.88781%2012.5199C7.85615%2012.6291%207.68931%2012.6291%207.65765%2012.5199L7.48718%2011.9322C7.47617%2011.8941%207.44409%2011.8644%207.40309%2011.8541L6.77002%2011.6959C6.65242%2011.6665%206.65242%2011.5116%206.77002%2011.4822L7.40309%2011.324C7.44409%2011.3138%207.47617%2011.284%207.48718%2011.2459L7.65765%2010.6582C7.68931%2010.5491%207.85615%2010.5491%207.88781%2010.6582L8.05828%2011.2459C8.06929%2011.284%208.10132%2011.3138%208.14237%2011.324L8.77544%2011.4822C8.89304%2011.5116%208.89304%2011.6665%208.77544%2011.6959L8.14237%2011.8541C8.10132%2011.8644%208.06929%2011.8941%208.05828%2011.9322L7.88781%2012.5199Z'%20fill='white'/%3e%3cpath%20d='M6.03127%2011.1969C6.01016%2011.2697%205.89893%2011.2697%205.87783%2011.1969L5.76418%2010.8051C5.75684%2010.7797%205.73545%2010.7599%205.70812%2010.7531L5.28608%2010.6476C5.20767%2010.628%205.20767%2010.5247%205.28608%2010.5052L5.70812%2010.3997C5.73545%2010.3928%205.75684%2010.373%205.76418%2010.3476L5.87783%209.9558C5.89893%209.88303%206.01016%209.88303%206.03127%209.9558L6.14491%2010.3476C6.15225%2010.373%206.17361%2010.3928%206.20097%2010.3997L6.62302%2010.5052C6.70142%2010.5247%206.70142%2010.628%206.62302%2010.6476L6.20097%2010.7531C6.17361%2010.7599%206.15225%2010.7797%206.14491%2010.8051L6.03127%2011.1969Z'%20fill='white'/%3e%3cpath%20d='M11.1222%209.84666C11.1011%209.91944%2010.9898%209.91944%2010.9687%209.84666L10.8551%209.45485C10.8478%209.42947%2010.8264%209.40964%2010.799%209.40281L10.377%209.29731C10.2986%209.27772%2010.2986%209.17447%2010.377%209.15487L10.799%209.04938C10.8264%209.04254%2010.8478%209.02272%2010.8551%208.99733L10.9687%208.60552C10.9898%208.53275%2011.1011%208.53275%2011.1222%208.60552L11.2358%208.99733C11.2432%209.02272%2011.2645%209.04254%2011.2919%209.04938L11.7139%209.15487C11.7923%209.17447%2011.7923%209.27772%2011.7139%209.29731L11.2919%209.40281C11.2645%209.40964%2011.2432%209.42947%2011.2358%209.45485L11.1222%209.84666Z'%20fill='white'/%3e%3cpath%20d='M18.3182%2018.003L17.5909%2018.6782M8.15778%209.04228L19.9624%2019.0877C20.2555%2019.3371%2020.2654%2019.7629%2019.9843%2020.0239V20.0239C19.7043%2020.2839%2019.2496%2020.2777%2018.9805%2020.008C14.9047%2015.9231%207.72842%208.70747%208.15778%209.04228Z'%20stroke='white'/%3e%3c/svg%3e";function Jl(t,e){return function(){return t.apply(e,arguments)}}const{toString:qh}=Object.prototype,{getPrototypeOf:go}=Object,As=(t=>e=>{const n=qh.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),ot=t=>(t=t.toLowerCase(),e=>As(e)===t),ks=t=>e=>typeof e===t,{isArray:xn}=Array,or=ks("undefined");function Wh(t){return t!==null&&!or(t)&&t.constructor!==null&&!or(t.constructor)&&xe(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Ql=ot("ArrayBuffer");function Gh(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Ql(t.buffer),e}const zh=ks("string"),xe=ks("function"),Zl=ks("number"),Os=t=>t!==null&&typeof t=="object",Kh=t=>t===!0||t===!1,$r=t=>{if(As(t)!=="object")return!1;const e=go(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},Jh=ot("Date"),Qh=ot("File"),Zh=ot("Blob"),Yh=ot("FileList"),Xh=t=>Os(t)&&xe(t.pipe),ep=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||xe(t.append)&&((e=As(t))==="formdata"||e==="object"&&xe(t.toString)&&t.toString()==="[object FormData]"))},tp=ot("URLSearchParams"),np=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function gr(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,s;if(typeof t!="object"&&(t=[t]),xn(t))for(r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let a;for(r=0;r<o;r++)a=i[r],e.call(null,t[a],a,t)}}function Yl(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,s;for(;r-- >0;)if(s=n[r],e===s.toLowerCase())return s;return null}const Xl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,eu=t=>!or(t)&&t!==Xl;function Ai(){const{caseless:t}=eu(this)&&this||{},e={},n=(r,s)=>{const i=t&&Yl(e,s)||s;$r(e[i])&&$r(r)?e[i]=Ai(e[i],r):$r(r)?e[i]=Ai({},r):xn(r)?e[i]=r.slice():e[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&gr(arguments[r],n);return e}const rp=(t,e,n,{allOwnKeys:r}={})=>(gr(e,(s,i)=>{n&&xe(s)?t[i]=Jl(s,n):t[i]=s},{allOwnKeys:r}),t),sp=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),ip=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},op=(t,e,n,r)=>{let s,i,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),i=s.length;i-- >0;)o=s[i],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&go(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},ap=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},cp=t=>{if(!t)return null;if(xn(t))return t;let e=t.length;if(!Zl(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},lp=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&go(Uint8Array)),up=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let s;for(;(s=r.next())&&!s.done;){const i=s.value;e.call(t,i[0],i[1])}},dp=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},fp=ot("HTMLFormElement"),hp=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Ha=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),pp=ot("RegExp"),tu=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};gr(n,(s,i)=>{let o;(o=e(s,i,t))!==!1&&(r[i]=o||s)}),Object.defineProperties(t,r)},gp=t=>{tu(t,(e,n)=>{if(xe(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(xe(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},mp=(t,e)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return xn(t)?r(t):r(String(t).split(e)),n},_p=()=>{},yp=(t,e)=>(t=+t,Number.isFinite(t)?t:e),Qs="abcdefghijklmnopqrstuvwxyz",Va="0123456789",nu={DIGIT:Va,ALPHA:Qs,ALPHA_DIGIT:Qs+Qs.toUpperCase()+Va},vp=(t=16,e=nu.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function wp(t){return!!(t&&xe(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const bp=t=>{const e=new Array(10),n=(r,s)=>{if(Os(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[s]=r;const i=xn(r)?[]:{};return gr(r,(o,a)=>{const c=n(o,s+1);!or(c)&&(i[a]=c)}),e[s]=void 0,i}}return r};return n(t,0)},Ep=ot("AsyncFunction"),Cp=t=>t&&(Os(t)||xe(t))&&xe(t.then)&&xe(t.catch),v={isArray:xn,isArrayBuffer:Ql,isBuffer:Wh,isFormData:ep,isArrayBufferView:Gh,isString:zh,isNumber:Zl,isBoolean:Kh,isObject:Os,isPlainObject:$r,isUndefined:or,isDate:Jh,isFile:Qh,isBlob:Zh,isRegExp:pp,isFunction:xe,isStream:Xh,isURLSearchParams:tp,isTypedArray:lp,isFileList:Yh,forEach:gr,merge:Ai,extend:rp,trim:np,stripBOM:sp,inherits:ip,toFlatObject:op,kindOf:As,kindOfTest:ot,endsWith:ap,toArray:cp,forEachEntry:up,matchAll:dp,isHTMLForm:fp,hasOwnProperty:Ha,hasOwnProp:Ha,reduceDescriptors:tu,freezeMethods:gp,toObjectSet:mp,toCamelCase:hp,noop:_p,toFiniteNumber:yp,findKey:Yl,global:Xl,isContextDefined:eu,ALPHABET:nu,generateString:vp,isSpecCompliantForm:wp,toJSONObject:bp,isAsyncFn:Ep,isThenable:Cp};function G(t,e,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}v.inherits(G,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:v.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const ru=G.prototype,su={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{su[t]={value:t}});Object.defineProperties(G,su);Object.defineProperty(ru,"isAxiosError",{value:!0});G.from=(t,e,n,r,s,i)=>{const o=Object.create(ru);return v.toFlatObject(t,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),G.call(o,t.message,e,n,r,s),o.cause=t,o.name=t.name,i&&Object.assign(o,i),o};const Ip=null;function ki(t){return v.isPlainObject(t)||v.isArray(t)}function iu(t){return v.endsWith(t,"[]")?t.slice(0,-2):t}function ja(t,e,n){return t?t.concat(e).map(function(s,i){return s=iu(s),!n&&i?"["+s+"]":s}).join(n?".":""):e}function Rp(t){return v.isArray(t)&&!t.some(ki)}const Tp=v.toFlatObject(v,{},null,function(e){return/^is[A-Z]/.test(e)});function Ps(t,e,n){if(!v.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=v.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(E,A){return!v.isUndefined(A[E])});const r=n.metaTokens,s=n.visitor||u,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&v.isSpecCompliantForm(e);if(!v.isFunction(s))throw new TypeError("visitor must be a function");function l(_){if(_===null)return"";if(v.isDate(_))return _.toISOString();if(!c&&v.isBlob(_))throw new G("Blob is not supported. Use a Buffer instead.");return v.isArrayBuffer(_)||v.isTypedArray(_)?c&&typeof Blob=="function"?new Blob([_]):Buffer.from(_):_}function u(_,E,A){let T=_;if(_&&!A&&typeof _=="object"){if(v.endsWith(E,"{}"))E=r?E:E.slice(0,-2),_=JSON.stringify(_);else if(v.isArray(_)&&Rp(_)||(v.isFileList(_)||v.endsWith(E,"[]"))&&(T=v.toArray(_)))return E=iu(E),T.forEach(function(L,$){!(v.isUndefined(L)||L===null)&&e.append(o===!0?ja([E],$,i):o===null?E:E+"[]",l(L))}),!1}return ki(_)?!0:(e.append(ja(A,E,i),l(_)),!1)}const d=[],p=Object.assign(Tp,{defaultVisitor:u,convertValue:l,isVisitable:ki});function m(_,E){if(!v.isUndefined(_)){if(d.indexOf(_)!==-1)throw Error("Circular reference detected in "+E.join("."));d.push(_),v.forEach(_,function(T,D){(!(v.isUndefined(T)||T===null)&&s.call(e,T,v.isString(D)?D.trim():D,E,p))===!0&&m(T,E?E.concat(D):[D])}),d.pop()}}if(!v.isObject(t))throw new TypeError("data must be an object");return m(t),e}function qa(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function mo(t,e){this._pairs=[],t&&Ps(t,this,e)}const ou=mo.prototype;ou.append=function(e,n){this._pairs.push([e,n])};ou.toString=function(e){const n=e?function(r){return e.call(this,r,qa)}:qa;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Sp(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function au(t,e,n){if(!e)return t;const r=n&&n.encode||Sp,s=n&&n.serialize;let i;if(s?i=s(e,n):i=v.isURLSearchParams(e)?e.toString():new mo(e,n).toString(r),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class Wa{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){v.forEach(this.handlers,function(r){r!==null&&e(r)})}}const cu={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ap=typeof URLSearchParams<"u"?URLSearchParams:mo,kp=typeof FormData<"u"?FormData:null,Op=typeof Blob<"u"?Blob:null,Pp={isBrowser:!0,classes:{URLSearchParams:Ap,FormData:kp,Blob:Op},protocols:["http","https","file","blob","url","data"]},lu=typeof window<"u"&&typeof document<"u",xp=(t=>lu&&["ReactNative","NativeScript","NS"].indexOf(t)<0)(typeof navigator<"u"&&navigator.product),Lp=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Np=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:lu,hasStandardBrowserEnv:xp,hasStandardBrowserWebWorkerEnv:Lp},Symbol.toStringTag,{value:"Module"})),Xe={...Np,...Pp};function Mp(t,e){return Ps(t,new Xe.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return Xe.isNode&&v.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function Dp(t){return v.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Up(t){const e={},n=Object.keys(t);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],e[i]=t[i];return e}function uu(t){function e(n,r,s,i){let o=n[i++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),c=i>=n.length;return o=!o&&v.isArray(s)?s.length:o,c?(v.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!v.isObject(s[o]))&&(s[o]=[]),e(n,r,s[o],i)&&v.isArray(s[o])&&(s[o]=Up(s[o])),!a)}if(v.isFormData(t)&&v.isFunction(t.entries)){const n={};return v.forEachEntry(t,(r,s)=>{e(Dp(r),s,n,0)}),n}return null}function Fp(t,e,n){if(v.isString(t))try{return(e||JSON.parse)(t),v.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const _o={transitional:cu,adapter:["xhr","http"],transformRequest:[function(e,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=v.isObject(e);if(i&&v.isHTMLForm(e)&&(e=new FormData(e)),v.isFormData(e))return s?JSON.stringify(uu(e)):e;if(v.isArrayBuffer(e)||v.isBuffer(e)||v.isStream(e)||v.isFile(e)||v.isBlob(e))return e;if(v.isArrayBufferView(e))return e.buffer;if(v.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Mp(e,this.formSerializer).toString();if((a=v.isFileList(e))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return Ps(a?{"files[]":e}:e,c&&new c,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),Fp(e)):e}],transformResponse:[function(e){const n=this.transitional||_o.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(e&&v.isString(e)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?G.from(a,G.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Xe.classes.FormData,Blob:Xe.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};v.forEach(["delete","get","head","post","put","patch"],t=>{_o.headers[t]={}});const yo=_o,Bp=v.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),$p=t=>{const e={};let n,r,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||e[n]&&Bp[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},Ga=Symbol("internals");function Hn(t){return t&&String(t).trim().toLowerCase()}function Hr(t){return t===!1||t==null?t:v.isArray(t)?t.map(Hr):String(t)}function Hp(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const Vp=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Zs(t,e,n,r,s){if(v.isFunction(r))return r.call(this,e,n);if(s&&(e=n),!!v.isString(e)){if(v.isString(r))return e.indexOf(r)!==-1;if(v.isRegExp(r))return r.test(e)}}function jp(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function qp(t,e){const n=v.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(s,i,o){return this[r].call(this,e,s,i,o)},configurable:!0})})}class xs{constructor(e){e&&this.set(e)}set(e,n,r){const s=this;function i(a,c,l){const u=Hn(c);if(!u)throw new Error("header name must be a non-empty string");const d=v.findKey(s,u);(!d||s[d]===void 0||l===!0||l===void 0&&s[d]!==!1)&&(s[d||c]=Hr(a))}const o=(a,c)=>v.forEach(a,(l,u)=>i(l,u,c));return v.isPlainObject(e)||e instanceof this.constructor?o(e,n):v.isString(e)&&(e=e.trim())&&!Vp(e)?o($p(e),n):e!=null&&i(n,e,r),this}get(e,n){if(e=Hn(e),e){const r=v.findKey(this,e);if(r){const s=this[r];if(!n)return s;if(n===!0)return Hp(s);if(v.isFunction(n))return n.call(this,s,r);if(v.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Hn(e),e){const r=v.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||Zs(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let s=!1;function i(o){if(o=Hn(o),o){const a=v.findKey(r,o);a&&(!n||Zs(r,r[a],a,n))&&(delete r[a],s=!0)}}return v.isArray(e)?e.forEach(i):i(e),s}clear(e){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!e||Zs(this,this[i],i,e,!0))&&(delete this[i],s=!0)}return s}normalize(e){const n=this,r={};return v.forEach(this,(s,i)=>{const o=v.findKey(r,i);if(o){n[o]=Hr(s),delete n[i];return}const a=e?jp(i):String(i).trim();a!==i&&delete n[i],n[a]=Hr(s),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return v.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=e&&v.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[Ga]=this[Ga]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=Hn(o);r[a]||(qp(s,o),r[a]=!0)}return v.isArray(e)?e.forEach(i):i(e),this}}xs.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);v.reduceDescriptors(xs.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});v.freezeMethods(xs);const mt=xs;function Ys(t,e){const n=this||yo,r=e||n,s=mt.from(r.headers);let i=r.data;return v.forEach(t,function(a){i=a.call(n,i,s.normalize(),e?e.status:void 0)}),s.normalize(),i}function du(t){return!!(t&&t.__CANCEL__)}function mr(t,e,n){G.call(this,t??"canceled",G.ERR_CANCELED,e,n),this.name="CanceledError"}v.inherits(mr,G,{__CANCEL__:!0});function Wp(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new G("Request failed with status code "+n.status,[G.ERR_BAD_REQUEST,G.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Gp=Xe.hasStandardBrowserEnv?{write(t,e,n,r,s,i){const o=[t+"="+encodeURIComponent(e)];v.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),v.isString(r)&&o.push("path="+r),v.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function zp(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function Kp(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function fu(t,e){return t&&!zp(e)?Kp(t,e):e}const Jp=Xe.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const a=v.isString(o)?s(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function Qp(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function Zp(t,e){t=t||10;const n=new Array(t),r=new Array(t);let s=0,i=0,o;return e=e!==void 0?e:1e3,function(c){const l=Date.now(),u=r[i];o||(o=l),n[s]=c,r[s]=l;let d=i,p=0;for(;d!==s;)p+=n[d++],d=d%t;if(s=(s+1)%t,s===i&&(i=(i+1)%t),l-o<e)return;const m=u&&l-u;return m?Math.round(p*1e3/m):void 0}}function za(t,e){let n=0;const r=Zp(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,a=i-n,c=r(a),l=i<=o;n=i;const u={loaded:i,total:o,progress:o?i/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&l?(o-i)/c:void 0,event:s};u[e?"download":"upload"]=!0,t(u)}}const Yp=typeof XMLHttpRequest<"u",Xp=Yp&&function(t){return new Promise(function(n,r){let s=t.data;const i=mt.from(t.headers).normalize();let{responseType:o,withXSRFToken:a}=t,c;function l(){t.cancelToken&&t.cancelToken.unsubscribe(c),t.signal&&t.signal.removeEventListener("abort",c)}let u;if(v.isFormData(s)){if(Xe.hasStandardBrowserEnv||Xe.hasStandardBrowserWebWorkerEnv)i.setContentType(!1);else if((u=i.getContentType())!==!1){const[E,...A]=u?u.split(";").map(T=>T.trim()).filter(Boolean):[];i.setContentType([E||"multipart/form-data",...A].join("; "))}}let d=new XMLHttpRequest;if(t.auth){const E=t.auth.username||"",A=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";i.set("Authorization","Basic "+btoa(E+":"+A))}const p=fu(t.baseURL,t.url);d.open(t.method.toUpperCase(),au(p,t.params,t.paramsSerializer),!0),d.timeout=t.timeout;function m(){if(!d)return;const E=mt.from("getAllResponseHeaders"in d&&d.getAllResponseHeaders()),T={data:!o||o==="text"||o==="json"?d.responseText:d.response,status:d.status,statusText:d.statusText,headers:E,config:t,request:d};Wp(function(L){n(L),l()},function(L){r(L),l()},T),d=null}if("onloadend"in d?d.onloadend=m:d.onreadystatechange=function(){!d||d.readyState!==4||d.status===0&&!(d.responseURL&&d.responseURL.indexOf("file:")===0)||setTimeout(m)},d.onabort=function(){d&&(r(new G("Request aborted",G.ECONNABORTED,t,d)),d=null)},d.onerror=function(){r(new G("Network Error",G.ERR_NETWORK,t,d)),d=null},d.ontimeout=function(){let A=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const T=t.transitional||cu;t.timeoutErrorMessage&&(A=t.timeoutErrorMessage),r(new G(A,T.clarifyTimeoutError?G.ETIMEDOUT:G.ECONNABORTED,t,d)),d=null},Xe.hasStandardBrowserEnv&&(a&&v.isFunction(a)&&(a=a(t)),a||a!==!1&&Jp(p))){const E=t.xsrfHeaderName&&t.xsrfCookieName&&Gp.read(t.xsrfCookieName);E&&i.set(t.xsrfHeaderName,E)}s===void 0&&i.setContentType(null),"setRequestHeader"in d&&v.forEach(i.toJSON(),function(A,T){d.setRequestHeader(T,A)}),v.isUndefined(t.withCredentials)||(d.withCredentials=!!t.withCredentials),o&&o!=="json"&&(d.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&d.addEventListener("progress",za(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&d.upload&&d.upload.addEventListener("progress",za(t.onUploadProgress)),(t.cancelToken||t.signal)&&(c=E=>{d&&(r(!E||E.type?new mr(null,t,d):E),d.abort(),d=null)},t.cancelToken&&t.cancelToken.subscribe(c),t.signal&&(t.signal.aborted?c():t.signal.addEventListener("abort",c)));const _=Qp(p);if(_&&Xe.protocols.indexOf(_)===-1){r(new G("Unsupported protocol "+_+":",G.ERR_BAD_REQUEST,t));return}d.send(s||null)})},Oi={http:Ip,xhr:Xp};v.forEach(Oi,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Ka=t=>`- ${t}`,e1=t=>v.isFunction(t)||t===null||t===!1,hu={getAdapter:t=>{t=v.isArray(t)?t:[t];const{length:e}=t;let n,r;const s={};for(let i=0;i<e;i++){n=t[i];let o;if(r=n,!e1(n)&&(r=Oi[(o=String(n)).toLowerCase()],r===void 0))throw new G(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([a,c])=>`adapter ${a} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=e?i.length>1?`since :
`+i.map(Ka).join(`
`):" "+Ka(i[0]):"as no adapter specified";throw new G("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:Oi};function Xs(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new mr(null,t)}function Ja(t){return Xs(t),t.headers=mt.from(t.headers),t.data=Ys.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),hu.getAdapter(t.adapter||yo.adapter)(t).then(function(r){return Xs(t),r.data=Ys.call(t,t.transformResponse,r),r.headers=mt.from(r.headers),r},function(r){return du(r)||(Xs(t),r&&r.response&&(r.response.data=Ys.call(t,t.transformResponse,r.response),r.response.headers=mt.from(r.response.headers))),Promise.reject(r)})}const Qa=t=>t instanceof mt?t.toJSON():t;function Sn(t,e){e=e||{};const n={};function r(l,u,d){return v.isPlainObject(l)&&v.isPlainObject(u)?v.merge.call({caseless:d},l,u):v.isPlainObject(u)?v.merge({},u):v.isArray(u)?u.slice():u}function s(l,u,d){if(v.isUndefined(u)){if(!v.isUndefined(l))return r(void 0,l,d)}else return r(l,u,d)}function i(l,u){if(!v.isUndefined(u))return r(void 0,u)}function o(l,u){if(v.isUndefined(u)){if(!v.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function a(l,u,d){if(d in e)return r(l,u);if(d in t)return r(void 0,l)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,u)=>s(Qa(l),Qa(u),!0)};return v.forEach(Object.keys(Object.assign({},t,e)),function(u){const d=c[u]||s,p=d(t[u],e[u],u);v.isUndefined(p)&&d!==a||(n[u]=p)}),n}const pu="1.6.7",vo={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{vo[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const Za={};vo.transitional=function(e,n,r){function s(i,o){return"[Axios v"+pu+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(e===!1)throw new G(s(o," has been removed"+(n?" in "+n:"")),G.ERR_DEPRECATED);return n&&!Za[o]&&(Za[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};function t1(t,e,n){if(typeof t!="object")throw new G("options must be an object",G.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const i=r[s],o=e[i];if(o){const a=t[i],c=a===void 0||o(a,i,t);if(c!==!0)throw new G("option "+i+" must be "+c,G.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new G("Unknown option "+i,G.ERR_BAD_OPTION)}}const Pi={assertOptions:t1,validators:vo},Ct=Pi.validators;class Xr{constructor(e){this.defaults=e,this.interceptors={request:new Wa,response:new Wa}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const i=s.stack?s.stack.replace(/^.+\n/,""):"";r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Sn(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&Pi.assertOptions(r,{silentJSONParsing:Ct.transitional(Ct.boolean),forcedJSONParsing:Ct.transitional(Ct.boolean),clarifyTimeoutError:Ct.transitional(Ct.boolean)},!1),s!=null&&(v.isFunction(s)?n.paramsSerializer={serialize:s}:Pi.assertOptions(s,{encode:Ct.function,serialize:Ct.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&v.merge(i.common,i[n.method]);i&&v.forEach(["delete","get","head","post","put","patch","common"],_=>{delete i[_]}),n.headers=mt.concat(o,i);const a=[];let c=!0;this.interceptors.request.forEach(function(E){typeof E.runWhen=="function"&&E.runWhen(n)===!1||(c=c&&E.synchronous,a.unshift(E.fulfilled,E.rejected))});const l=[];this.interceptors.response.forEach(function(E){l.push(E.fulfilled,E.rejected)});let u,d=0,p;if(!c){const _=[Ja.bind(this),void 0];for(_.unshift.apply(_,a),_.push.apply(_,l),p=_.length,u=Promise.resolve(n);d<p;)u=u.then(_[d++],_[d++]);return u}p=a.length;let m=n;for(d=0;d<p;){const _=a[d++],E=a[d++];try{m=_(m)}catch(A){E.call(this,A);break}}try{u=Ja.call(this,m)}catch(_){return Promise.reject(_)}for(d=0,p=l.length;d<p;)u=u.then(l[d++],l[d++]);return u}getUri(e){e=Sn(this.defaults,e);const n=fu(e.baseURL,e.url);return au(n,e.params,e.paramsSerializer)}}v.forEach(["delete","get","head","options"],function(e){Xr.prototype[e]=function(n,r){return this.request(Sn(r||{},{method:e,url:n,data:(r||{}).data}))}});v.forEach(["post","put","patch"],function(e){function n(r){return function(i,o,a){return this.request(Sn(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}Xr.prototype[e]=n(),Xr.prototype[e+"Form"]=n(!0)});const Vr=Xr;class wo{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},e(function(i,o,a){r.reason||(r.reason=new mr(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new wo(function(s){e=s}),cancel:e}}}const n1=wo;function r1(t){return function(n){return t.apply(null,n)}}function s1(t){return v.isObject(t)&&t.isAxiosError===!0}const xi={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(xi).forEach(([t,e])=>{xi[e]=t});const i1=xi;function gu(t){const e=new Vr(t),n=Jl(Vr.prototype.request,e);return v.extend(n,Vr.prototype,e,{allOwnKeys:!0}),v.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return gu(Sn(t,s))},n}const ce=gu(yo);ce.Axios=Vr;ce.CanceledError=mr;ce.CancelToken=n1;ce.isCancel=du;ce.VERSION=pu;ce.toFormData=Ps;ce.AxiosError=G;ce.Cancel=ce.CanceledError;ce.all=function(e){return Promise.all(e)};ce.spread=r1;ce.isAxiosError=s1;ce.mergeConfig=Sn;ce.AxiosHeaders=mt;ce.formToJSON=t=>uu(v.isHTMLForm(t)?new FormData(t):t);ce.getAdapter=hu.getAdapter;ce.HttpStatusCode=i1;ce.default=ce;const o1=t=>(ro("data-v-32f75fe2"),t=t(),so(),t),a1={key:0,class:"qr-code-section"},c1=o1(()=>N("h2",{class:"qr-code-header"},"QR Code for Shortened URL",-1)),l1={class:"qr-code"},u1=["src"],d1=it({__name:"QRCode",props:["shortenedURL"],setup(t){const e=be(""),{shortenedURL:n}=t,r=async()=>{const o=localStorage.getItem("shortenedURL");if(o&&o!=="")try{const a=await fetch(`https://quickchart.io/qr?text=${encodeURIComponent(o)}&size=150`);a.ok?e.value=URL.createObjectURL(await a.blob()):console.error("Failed to generate QR code:",a.statusText)}catch(a){console.error("Error generating QR code:",a)}};io(()=>{r()}),localStorage.setItem("shortenedURL",n.value);const s=()=>{const o=document.createElement("a");o.href=e.value,o.download="qr_code.png",document.body.appendChild(o),o.click(),document.body.removeChild(o)},i=()=>{navigator.share?navigator.share({title:"QR Code for Shortened URL",text:"Check out this QR code!",url:n}).then(()=>console.log("Shared successfully")).catch(o=>console.error("Error sharing:",o)):alert("Sharing is not supported on this device/browser.")};return(o,a)=>t.shortenedURL?(le(),pe("div",a1,[c1,N("div",l1,[N("img",{src:e.value,alt:"QR Code"},null,8,u1)]),N("button",{onClick:s,class:"download-button"}," Download QR Code "),N("button",{onClick:i,class:"share-button"},"Share QR Code")])):Cs("",!0)}}),f1=Ss(d1,[["__scopeId","data-v-32f75fe2"]]),_r=t=>(ro("data-v-188485c1"),t=t(),so(),t),h1={class:"container"},p1=_r(()=>N("h1",{class:"header"},"Shorten Your Long URL Here",-1)),g1=_r(()=>N("p",{class:"para"}," Enter your long URL here to create a short link and generate QR code. ",-1)),m1=_r(()=>N("p",{class:"para"}," Example: http://www.linksift.io/generate-qr-code=and-customize-your-link-effortlessly ",-1)),_1=_r(()=>N("button",{type:"submit",class:"shorten-button"},"Shorten",-1)),y1=_r(()=>N("img",{src:jh,alt:"magic wand"},null,-1)),v1={key:0,class:"pif"},w1=["href"],b1=it({__name:"ShortenUrl",setup(t){const e=be(""),n=be(""),r=be(""),s=be("Copy"),i=async()=>{try{const c=await ce.get(`https://tinyurl.com/api-create.php?url=${e.value}`);n.value=c.data,r.value="";const l=JSON.parse(localStorage.getItem("shortenedURLs")||"[]");l.push(n.value),localStorage.setItem("shortenedURLs",JSON.stringify(l))}catch(c){console.error("Error shortening URL:",c),r.value="An error occurred. Please try again later."}},o=()=>{navigator.clipboard.writeText(n.value).then(()=>{s.value="Copied!",setTimeout(()=>{s.value="Copy"},2e3)}).catch(c=>{console.error("Copy failed:",c),r.value="Copy failed. Please try again."})},a=c=>{const l=document.createElement("a");l.href=c,l.download="qr_code.png",document.body.appendChild(l),l.click(),document.body.removeChild(l)};return(c,l)=>(le(),pe("div",h1,[p1,g1,m1,N("form",{onSubmit:lo(i,["prevent"]),class:"form"},[Cn(N("input",{type:"text","onUpdate:modelValue":l[0]||(l[0]=u=>e.value=u),placeholder:"Enter URL",class:"url-input"},null,512),[[sr,e.value]]),_1,y1],32),n.value?(le(),pe("p",v1,[On(" Shortened URL: "),N("a",{href:n.value,target:"_blank"},ht(n.value),9,w1),N("button",{onClick:o,class:"copy-button"},ht(s.value),1)])):Cs("",!0),oe(f1,{shortenedURL:n.value,onDownloadQRCode:a,class:"qrcode"},null,8,["shortenedURL"])]))}}),mu=Ss(b1,[["__scopeId","data-v-188485c1"]]),E1=Object.freeze(Object.defineProperty({__proto__:null,default:mu},Symbol.toStringTag,{value:"Module"})),C1={class:"body"},I1=Pn('<h2 class="header-title"><span class="header-title-icon1"><img src="'+uh+'" alt=""></span><span class="header-title-icon2"><img src="'+dh+'" alt=""></span><span class="scissor"><a href="#"> scissor</a></span></h2>',1),R1={class:"top-menu-container"},T1=Pn('<li><a class="my-urls" href="#myurls">My URLs</a></li><li><a class="features" href="#">Features <span><img src="'+fh+'" alt=""></span></a><div class="sub-menu"><ul><li class="branded"><a href="#">Branded Links</a></li><li><a href="#">Mobile Links</a></li><li><a href="#">Campaign</a></li><li><a href="#">Management &amp; Analytics</a></li><li><a href="#">QR Code generation</a></li></ul></div></li><li><a href="#pricing">Pricing</a></li>',3),S1=N("li",null,[N("a",{href:"#faq"},"FAQs")],-1),A1=Pn('<section class="part-one"><div class="optimize"><h1> Optimize Your Online Experience with Our Advanced <span> URL Shortening</span> Solution </h1><div class="optimize-logo-container"><img src="'+hh+'" alt="A Logo"></div></div><div class="first-para-container"><p> Personalize your shortened URLs to align with your brand identity. Utilize custom slugs, branded links, and domain customization options to reinforce your brand presence and enhance user engagement. </p></div><div class="signUp-learnMore-container"><button>Sign Up</button><div><a class="learn-more" href="">Learn more</a></div></div></section>',1),k1=Pn('<section class="part-two"><div class="box-below-signUp"><div class="links-container"><img src="'+Or+'" alt="A link symbol"><img src="'+Or+'" alt="A link symbol"><img src="'+Or+'" alt="A link symbol"><img src="'+ph+'" alt="A link symbol"><img src="'+Or+'" alt="A link symbol"></div><p> Seamlessly transform your long URLs into concise <br> and shareable links with just few clicks. </p></div><div class="ash"><img src="'+gh+'" alt="background image"></div><div class="trapezium-container"><img class="trapezium" src="'+mh+'" alt="rectanglar design"><img class="ellipse" src="'+_h+'" alt="reactanglar design"></div></section><section class="part-three"><div class="onestop-bg-color"><div class="onestop-line-container"><div class="onestop"><h2>One Stop. <br>Four <span>Possibilities.</span></h2></div><div class="test"><div class="three-m"><p>3M</p><p>Active users</p></div><div class="sixty-m"><p>60M</p><p>Links &amp; QR <br>codes created</p></div><div class="one-b"><p>1B</p><p> Clicked &amp; Scanned<br> connections </p></div><div class="three-hundred-k"><p>300k</p><p>App Integrations</p></div></div></div></div><div class="why-choose-main-container"><div class="why-choose-container"><div style="display:flex;column-gap:0.5rem;"><div class="line-70"><img src="'+$a+'" alt=""></div><div style="padding-top:8px;"><h2>Why choose <span>Scissors</span></h2></div></div><div style="padding-left:20px;padding-right:20px;"><p> Scissors is the hub of everything that has to do with your link management. We shorten your URLs, allow you creating custom ones for your personal, business, event usage. Our swift QR code creation, management and usage tracking with advance analytics for all of these is second to none. </p></div></div><div class="main-icon-section-cover"><div class="icon-section-cover add-margin"><div><div class="icon-cover"><img src="'+yh+'" alt=""></div><h3>URL Shortening</h3><p> Scissor allows you to shorten URLs of your business, events. Shorten your URL at scale, URL redirects. </p></div><div><div class="icon-cover"><img src="'+vh+'" alt=""></div><h3>Custom URLs</h3><p> With Scissor, you can create custom URLs, with the length you want! A solution for socials and businesses. </p></div></div><div class="icon-section-cover"><div><div class="icon-cover"><img src="'+wh+'" alt=""></div><h3>QR Codes</h3><p> Generate QR codes to your business, events. Bring your audience and customers to your doorstep with this scan and go solution. </p></div><div><div class="icon-cover"><img src="'+bh+'" alt=""></div><h3>Data Analytics</h3><p> Receive data on the usage of either your shortened URL, custom URLs or generated QR codes. Embedded to monitor progress. </p></div></div></div></div></section><section class="part-four" id="pricing"><div class="price-perfect-main-conatiner" id="pricing"><div class="line70-section"><div class="line-70"><img src="'+$a+'" alt=""></div><div style="padding-top:5px;"><h2>Why choose <span>A price perfect</span> for your needs.</h2><p> From catering for your personal, business, event, socials needs, you can be rest assured <br> we have you in mind in our pricing. </p></div></div><div class="subscription-container"><div class="basic-container"><div class="basic"><p>Basic</p></div><div><h2>Free</h2></div><div><p>Free plan for all users</p></div><div class="check-icon-container"><img src="'+Qe+'" alt="check image"><p>Unlimited URL Shortening</p></div><div class="check-icon-container"><img src="'+Qe+'" alt="check image"><p>Basic Link Analytics</p></div><div class="check-icon-container"><img src="'+Qe+'" alt="check image"><p>Customizable Short Links</p></div><div class="check-icon-container"><img src="'+Qe+'" alt="check image"><p>Standard Support</p></div><div class="check-icon-container"><img src="'+Qe+'" alt="check image"><p>Ad-supported</p></div></div><div class="basic-container professional-container"><div class="basic"><p>Professional</p></div><div><h2>$15/month</h2></div><div><p>Ideal for business creators</p></div><div class="check-icon-container"><img src="'+$n+'" alt="check image"><p>Enhanced Link Analytics</p></div><div class="check-icon-container"><img src="'+$n+'" alt="check image"><p>Custom Branded Domains</p></div><div class="check-icon-container"><img src="'+$n+'" alt="check image"><p>Advanced Link Customization</p></div><div class="check-icon-container"><img src="'+$n+'" alt="check image"><p>Priority Support</p></div><div class="check-icon-container"><img src="'+$n+'" alt="check image"><p>Ad-free Experience</p></div></div><div class="team-container"><div class="basic"><p>Team</p></div><div><h2>$25/month</h2></div><div><p>Share with up to 10 users</p></div><div class="check-icon-container"><img src="'+Qe+'" alt="check image"><p>Team Collaboration</p></div><div class="check-icon-container"><img src="'+Qe+'" alt="check image"><p>User Roles and Permissions</p></div><div class="check-icon-container"><img src="'+Qe+'" alt="check image"><p>Enhanced Security</p></div><div class="check-icon-container"><img src="'+Qe+'" alt="check image"><p>API Access</p></div><div class="check-icon-container"><img src="'+Qe+'" alt="check image"><p>Dedicated Account Manager</p></div></div></div><div class="pricing-button"><button class="no-bg-color">Get Custom Pricing</button><button>Select Pricing</button></div></div></section>',3),O1=Pn('<section class="part-seven"><div class="Revolutionizing"><div><h2>Revolutionizing Link Optimization</h2></div><div><button>Get Started</button></div><div class="group5"><img src="'+Eh+'" alt="background image"></div><div class="group6"><img src="'+Ch+'" alt="background image"></div></div></section>',1),P1=Pn('<footer><section class="part-eight"><div class="footer-main-container"><div class="logo-and-social-container"><div><h3 class="header-title footer-title"><span class="header-title-icon1"><img src="'+Ih+'" alt=""></span><span class="header-title-icon2"><img src="'+Rh+'" alt=""></span><span class="scissor-footer"><a href="#"> scissor</a></span></h3><div class="social-icons"><a href="https://twitter.com"><img src="'+Th+'" alt="twitter"></a><a href="https://instagram.com"><img src="'+Sh+'" alt="instagram"></a><a href="https://linkedin.com"><img src="'+Ah+'" alt="linkedin"></a><a href="https://facebook.com"><img src="'+kh+'" alt="facebook"></a></div></div></div><div class="footer-items"><div class="from-why-scissor"><p style="font-weight:bold;"><a href="#"> Why Scissor ?</a></p><p><a href="#"> Scissor 101</a><a href="#"> Integrations &amp; API?</a> <br><a href="#"> Pricing?</a></p></div><div class="solutions"><p style="font-weight:bold;"><a href="#"> Solutions ? </a></p><p><a href="#"> Social Media</a> <br><a href="#"> Digital Marketing</a> <br><a href="#"> Customer Service</a> <br><a href="#"> For Developers</a></p></div><div class="products"><p style="font-weight:bold;"><a href="#"> Products</a></p><p><a href="#"> Link Management</a> <br><a href="#"> QR Codes</a> <br> Link-in-bio </p></div><div class="company"><p style="font-weight:bold;"><a href="#"> Company</a></p><p><a href="#"> About Scissor</a> <br><a href="#"> Careers</a> <br><a href="#"> Partners</a> <br><a href="#"> Press</a> <br><a href="#">Contact</a> <br><a href="#">Reviews</a></p></div><div class="feature"><p style="font-weight:bold;"><a href="#">Resources</a></p><p><a href="#">Blog</a> <br><a href="#">Resource Library</a> <br><a href="#">Developers</a> <br><a href="#">App Connectors</a> <br><a href="#">Support</a> <br><a href="#">Trust Center</a> <br><a href="#">Browser Extension</a> <br><a href="#">Mobile App</a></p></div><div class="feature"><p style="font-weight:900;"><a href="#">Features </a></p><p><a href="#">Branded Links</a><br><a href="#">Mobile Links</a><br><a href="#">Campaign</a><br><a href="#">Management &amp;</a><br><a href="#">nalytics</a><br><a href="#">QR Code generation</a></p></div><div class="legal"><p style="font-weight:bold;"><a href="#">Legal</a></p><p><a href="#">Blog</a> <a href="#">Privacy Policy</a> <br><a href="#">Cookie Policy</a> <br><a href="#">Terms of Service</a> <br><a href="#">Acceptable Use Policy</a><br><a href="#">Code of Conduct</a></p></div></div><div class="group7"><img src="'+ho+'" alt="background image"></div><div class="group8"><img src="'+Oh+'" alt="background image"></div></div></section></footer>',1),x1=it({__name:"HomeView",setup(t){return(e,n)=>{const r=hr("router-link");return le(),pe("div",null,[N("body",C1,[N("header",null,[I1,N("ul",R1,[T1,oe(r,{to:"/analytics"},{default:fr(()=>[On("Analytics")]),_:1}),S1]),A1]),N("main",null,[k1,oe(mu,{id:"myurls",class:"shortenUrl"}),oe(Vh,{id:"faq"}),O1]),P1])])}}}),L1="data:image/svg+xml,%3csvg%20width='979'%20height='523'%20viewBox='0%200%20979%20523'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.5'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M43%20516.042C-13.417%20455.046%20-91.4972%20556.354%20-122.5%20443.756C-151.311%20339.118%20-160.612%20119.83%20-156.682%200.523692C-152.913%20-113.909%20-129.881%20-215.35%20-105.252%20-318.824C-73.6885%20-451.43%20-65.0909%20-656.313%206.63529%20-685.615C80.4193%20-715.758%20128.261%20-526.723%20189.698%20-439.318C230.539%20-381.215%20270.367%20-330.964%20305.807%20-259.991C349.903%20-171.681%20421.468%20-101.295%20420.927%2023.7569C420.385%20148.633%20334.746%20194.955%20303.367%20302.775C264.745%20435.481%20286.756%20649.336%20218.553%20719.117C152.499%20786.698%20108.273%20586.614%2043%20516.042Z'%20fill='url(%23paint0_linear_1_343)'%20fill-opacity='0.3'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M130%20421.669C77.1864%20382.372%2013.321%20385.604%20-20.5%20295.168C-51.931%20211.125%20-50.7568%20200.521%20-54.5752%2095.6999C-58.2382%20-4.83867%20-44.3437%20-98.7814%20-29.1825%20-194.883C-9.75192%20-318.04%20-14.6996%20-498.502%2045.9618%20-541.557C108.365%20-585.848%20161.481%20-432.993%20220.268%20-371.936C259.346%20-331.346%20297.068%20-297.345%20332.225%20-244.232C375.971%20-178.145%20442.541%20-134.379%20449.657%20-25.3881C456.763%2083.4527%20385.023%20144.729%20364.249%20246.267C338.681%20371.239%20370.818%20552.021%20315.679%20629.453C262.279%20704.442%20191.104%20467.134%20130%20421.669Z'%20fill='url(%23paint1_linear_1_343)'%20fill-opacity='0.4'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M167.5%20249.99C123.721%20187.016%2011.8414%20196.909%20-8.00002%2096.3815C-26.4387%202.96118%2085.3641%2024.3165%2095.0001%20-74.2939C104.243%20-168.875%2080.953%20-168.022%20107%20-248.985C140.382%20-352.742%20181.646%20-239.977%20243%20-248.985C306.114%20-258.253%20300.736%20-480.809%20356.14%20-444.452C417.702%20-404.052%20330.381%20-178.223%20356.14%20-111.441C388.191%20-28.3452%20531.325%20-112.856%20524.207%20-8.72904C517.098%2095.2545%20443.239%20115.46%20411.333%20198.597C372.063%20300.919%20379.01%20483.922%20318.434%20527.433C259.769%20569.57%20218.149%20322.85%20167.5%20249.99Z'%20fill='url(%23paint2_linear_1_343)'%20fill-opacity='0.6'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_1_343'%20x1='396.928'%20y1='-208.541'%20x2='-205.863'%20y2='109.336'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%239EE6F7'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%239EE6F7'%20stop-opacity='0.46'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_1_343'%20x1='414.67'%20y1='-221.738'%20x2='-123.642'%20y2='155.579'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%239EE6F7'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%239EE6F7'%20stop-opacity='0.46'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_1_343'%20x1='516.586'%20y1='-207.534'%20x2='23.891'%20y2='-6.55255'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23005AE2'/%3e%3cstop%20offset='1'%20stop-color='%2373E6FF'%20stop-opacity='0.38'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",bo="data:image/svg+xml,%3csvg%20width='926'%20height='523'%20viewBox='0%200%20926%20523'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.7'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M413.5%20885.504C423.766%20758.506%20503.045%20505.09%20545.905%20409.451C585.736%20320.572%20606.063%20286.553%20663.5%20255.009C718.591%20224.755%20804.248%20266.193%20861%20279.105C933.73%20295.652%201037.64%20199.727%201074.88%20326.258C1113.19%20456.419%201039.85%20608.999%201018.8%20754.157C1004.8%20850.651%20994.171%20942.658%20972.353%201033.11C945.203%201145.66%20935.469%201304.47%20876.435%201344.32C817.484%201384.11%20767.688%201236.75%20706.683%201212.44C631.599%201182.54%20538.141%201294.21%20483.002%201187.6C429.602%201084.35%20401.623%201032.44%20413.5%20885.504Z'%20fill='url(%23paint0_linear_1_339)'%20fill-opacity='0.3'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M525.135%20937.809C526.366%20824.743%20539.737%20713.788%20571.246%20620.045C600.527%20532.927%20645.799%20477.254%20693.886%20435.743C740.008%20395.926%20779.814%20438.388%20830.001%20435.743C894.318%20432.355%20986.588%20317.17%201026.68%20418.209C1067.93%20522.147%201013.35%20672.911%201003.83%20804.427C997.499%20891.85%20993.827%20974.548%20980.322%201058.63C963.517%201163.24%20964.68%201303.87%20915.708%201353.01C866.804%201402.07%20814.513%201285.97%20759.932%201279.74C692.754%201272.07%20618.173%201392.15%20563.704%201312.83C510.953%201236.01%20523.711%201068.63%20525.135%20937.809Z'%20fill='url(%23paint1_linear_1_339)'%20fill-opacity='0.4'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M624.126%20919.301C639.454%20815.639%20665.715%20720.071%20706.543%20649.557C744.485%20584.029%20793.23%20555.593%20842.792%20541.643C890.329%20528.265%20935.843%20548.936%20982.464%20571.897C1042.21%20601.325%201127.64%20580.426%201151.94%20693.909C1176.93%20810.645%201107.67%20922.076%201082.38%201038.56C1065.56%201115.98%201051.8%201190.4%201028.79%201261.11C1000.15%201349.09%20983.573%201479.39%20932.238%201499.92C880.973%201520.42%20847.319%201386.87%20797.76%201353.5C736.764%201312.43%20652.903%201385.44%20612.621%201284.71C573.612%201187.16%20606.391%201039.23%20624.126%20919.301Z'%20fill='url(%23paint2_linear_1_339)'%20fill-opacity='0.6'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_1_339'%20x1='984.675'%20y1='1193.08'%20x2='432.248'%20y2='1068.96'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%239EE6F7'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%239EE6F7'%20stop-opacity='0.46'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_1_339'%20x1='996.685'%20y1='1222.43'%20x2='522.283'%20y2='1153.28'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%239EE6F7'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%239EE6F7'%20stop-opacity='0.46'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_1_339'%20x1='1023.32'%20y1='1420.47'%20x2='546.136'%20y2='1274.27'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23005AE2'/%3e%3cstop%20offset='1'%20stop-color='%2373E6FF'%20stop-opacity='0.38'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";var Ya={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},N1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},yu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,d=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(p=64)),r.push(n[u],n[d],n[p],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(_u(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):N1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||d==null)throw new M1;const p=i<<2|a>>4;if(r.push(p),l!==64){const m=a<<4&240|l>>2;if(r.push(m),d!==64){const _=l<<6&192|d;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class M1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const D1=function(t){const e=_u(t);return yu.encodeByteArray(e,!0)},es=function(t){return D1(t).replace(/\./g,"")},vu=function(t){try{return yu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F1=()=>U1().__FIREBASE_DEFAULTS__,B1=()=>{if(typeof process>"u"||typeof Ya>"u")return;const t=Ya.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},$1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&vu(t[1]);return e&&JSON.parse(e)},Eo=()=>{try{return F1()||B1()||$1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},wu=t=>{var e,n;return(n=(e=Eo())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},H1=t=>{const e=wu(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},bu=()=>{var t;return(t=Eo())===null||t===void 0?void 0:t.config},Eu=t=>{var e;return(e=Eo())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[es(JSON.stringify(n)),es(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function q1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ve())}function Cu(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function W1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function G1(){const t=ve();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Iu(){try{return typeof indexedDB=="object"}catch{return!1}}function Ru(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function z1(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K1="FirebaseError";class qe extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=K1,Object.setPrototypeOf(this,qe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,sn.prototype.create)}}class sn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?J1(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new qe(s,a,r)}}function J1(t,e){return t.replace(Q1,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Q1=/\{\$([^}]+)}/g;function Z1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ar(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Xa(i)&&Xa(o)){if(!ar(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Xa(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function jn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function qn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Y1(t,e){const n=new X1(t,e);return n.subscribe.bind(n)}class X1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");eg(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ei),s.error===void 0&&(s.error=ei),s.complete===void 0&&(s.complete=ei);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function eg(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ei(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg=1e3,ng=2,rg=4*60*60*1e3,sg=.5;function ec(t,e=tg,n=ng){const r=e*Math.pow(n,t),s=Math.round(sg*r*(Math.random()-.5)*2);return Math.min(rg,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(t){return t&&t._delegate?t._delegate:t}class Ve{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new V1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ag(e))try{this.getOrInitializeService({instanceIdentifier:jt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=jt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=jt){return this.instances.has(e)}getOptions(e=jt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:og(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=jt){return this.component?this.component.multipleInstances?e:jt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function og(t){return t===jt?void 0:t}function ag(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ig(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const lg={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},ug=te.INFO,dg={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},fg=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=dg[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Co{constructor(e){this.name=e,this._logLevel=ug,this._logHandler=fg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const hg=(t,e)=>e.some(n=>t instanceof n);let tc,nc;function pg(){return tc||(tc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gg(){return nc||(nc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Tu=new WeakMap,Li=new WeakMap,Su=new WeakMap,ti=new WeakMap,Io=new WeakMap;function mg(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Mt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Tu.set(n,t)}).catch(()=>{}),Io.set(e,t),e}function _g(t){if(Li.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Li.set(t,e)}let Ni={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Li.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Su.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function yg(t){Ni=t(Ni)}function vg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ni(this),e,...n);return Su.set(r,e.sort?e.sort():[e]),Mt(r)}:gg().includes(t)?function(...e){return t.apply(ni(this),e),Mt(Tu.get(this))}:function(...e){return Mt(t.apply(ni(this),e))}}function wg(t){return typeof t=="function"?vg(t):(t instanceof IDBTransaction&&_g(t),hg(t,pg())?new Proxy(t,Ni):t)}function Mt(t){if(t instanceof IDBRequest)return mg(t);if(ti.has(t))return ti.get(t);const e=wg(t);return e!==t&&(ti.set(t,e),Io.set(e,t)),e}const ni=t=>Io.get(t);function Au(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Mt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Mt(o.result),c.oldVersion,c.newVersion,Mt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const bg=["get","getKey","getAll","getAllKeys","count"],Eg=["put","add","delete","clear"],ri=new Map;function rc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ri.get(e))return ri.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Eg.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||bg.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return ri.set(e,i),i}yg(t=>({...t,get:(e,n,r)=>rc(e,n)||t.get(e,n,r),has:(e,n)=>!!rc(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ig(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ig(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Mi="@firebase/app",sc="0.9.28";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt=new Co("@firebase/app"),Rg="@firebase/app-compat",Tg="@firebase/analytics-compat",Sg="@firebase/analytics",Ag="@firebase/app-check-compat",kg="@firebase/app-check",Og="@firebase/auth",Pg="@firebase/auth-compat",xg="@firebase/database",Lg="@firebase/database-compat",Ng="@firebase/functions",Mg="@firebase/functions-compat",Dg="@firebase/installations",Ug="@firebase/installations-compat",Fg="@firebase/messaging",Bg="@firebase/messaging-compat",$g="@firebase/performance",Hg="@firebase/performance-compat",Vg="@firebase/remote-config",jg="@firebase/remote-config-compat",qg="@firebase/storage",Wg="@firebase/storage-compat",Gg="@firebase/firestore",zg="@firebase/firestore-compat",Kg="firebase",Jg="10.8.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di="[DEFAULT]",Qg={[Mi]:"fire-core",[Rg]:"fire-core-compat",[Sg]:"fire-analytics",[Tg]:"fire-analytics-compat",[kg]:"fire-app-check",[Ag]:"fire-app-check-compat",[Og]:"fire-auth",[Pg]:"fire-auth-compat",[xg]:"fire-rtdb",[Lg]:"fire-rtdb-compat",[Ng]:"fire-fn",[Mg]:"fire-fn-compat",[Dg]:"fire-iid",[Ug]:"fire-iid-compat",[Fg]:"fire-fcm",[Bg]:"fire-fcm-compat",[$g]:"fire-perf",[Hg]:"fire-perf-compat",[Vg]:"fire-rc",[jg]:"fire-rc-compat",[qg]:"fire-gcs",[Wg]:"fire-gcs-compat",[Gg]:"fire-fst",[zg]:"fire-fst-compat","fire-js":"fire-js",[Kg]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts=new Map,Ui=new Map;function Zg(t,e){try{t.container.addComponent(e)}catch(n){Zt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function rt(t){const e=t.name;if(Ui.has(e))return Zt.debug(`There were multiple attempts to register component ${e}.`),!1;Ui.set(e,t);for(const n of ts.values())Zg(n,t);return!0}function on(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Dt=new sn("app","Firebase",Yg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ve("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Dt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln=Jg;function ku(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Di,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Dt.create("bad-app-name",{appName:String(s)});if(n||(n=bu()),!n)throw Dt.create("no-options");const i=ts.get(s);if(i){if(ar(n,i.options)&&ar(r,i.config))return i;throw Dt.create("duplicate-app",{appName:s})}const o=new cg(s);for(const c of Ui.values())o.addComponent(c);const a=new Xg(n,r,o);return ts.set(s,a),a}function Ro(t=Di){const e=ts.get(t);if(!e&&t===Di&&bu())return ku();if(!e)throw Dt.create("no-app",{appName:t});return e}function Le(t,e,n){var r;let s=(r=Qg[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zt.warn(a.join(" "));return}rt(new Ve(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e3="firebase-heartbeat-database",t3=1,cr="firebase-heartbeat-store";let si=null;function Ou(){return si||(si=Au(e3,t3,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(cr)}catch(n){console.warn(n)}}}}).catch(t=>{throw Dt.create("idb-open",{originalErrorMessage:t.message})})),si}async function n3(t){try{const n=(await Ou()).transaction(cr),r=await n.objectStore(cr).get(Pu(t));return await n.done,r}catch(e){if(e instanceof qe)Zt.warn(e.message);else{const n=Dt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Zt.warn(n.message)}}}async function ic(t,e){try{const r=(await Ou()).transaction(cr,"readwrite");await r.objectStore(cr).put(e,Pu(t)),await r.done}catch(n){if(n instanceof qe)Zt.warn(n.message);else{const r=Dt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Zt.warn(r.message)}}}function Pu(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r3=1024,s3=30*24*60*60*1e3;class i3{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new a3(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=oc();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=s3}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=oc(),{heartbeatsToSend:r,unsentEntries:s}=o3(this._heartbeatsCache.heartbeats),i=es(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function oc(){return new Date().toISOString().substring(0,10)}function o3(t,e=r3){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ac(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ac(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class a3{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Iu()?Ru().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await n3(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ic(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ic(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ac(t){return es(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c3(t){rt(new Ve("platform-logger",e=>new Cg(e),"PRIVATE")),rt(new Ve("heartbeat",e=>new i3(e),"PRIVATE")),Le(Mi,sc,t),Le(Mi,sc,"esm2017"),Le("fire-js","")}c3("");var l3="firebase",u3="10.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Le(l3,u3,"app");const xu="@firebase/installations",To="0.6.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu=1e4,Nu=`w:${To}`,Mu="FIS_v2",d3="https://firebaseinstallations.googleapis.com/v1",f3=60*60*1e3,h3="installations",p3="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g3={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Yt=new sn(h3,p3,g3);function Du(t){return t instanceof qe&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uu({projectId:t}){return`${d3}/projects/${t}/installations`}function Fu(t){return{token:t.token,requestStatus:2,expiresIn:_3(t.expiresIn),creationTime:Date.now()}}async function Bu(t,e){const r=(await e.json()).error;return Yt.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function $u({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function m3(t,{refreshToken:e}){const n=$u(t);return n.append("Authorization",y3(e)),n}async function Hu(t){const e=await t();return e.status>=500&&e.status<600?t():e}function _3(t){return Number(t.replace("s","000"))}function y3(t){return`${Mu} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v3({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Uu(t),s=$u(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:Mu,appId:t.appId,sdkVersion:Nu},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Hu(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Fu(l.authToken)}}else throw await Bu("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w3(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b3=/^[cdef][\w-]{21}$/,Fi="";function E3(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=C3(t);return b3.test(n)?n:Fi}catch{return Fi}}function C3(t){return w3(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju=new Map;function qu(t,e){const n=Ls(t);Wu(n,e),I3(n,e)}function Wu(t,e){const n=ju.get(t);if(n)for(const r of n)r(e)}function I3(t,e){const n=R3();n&&n.postMessage({key:t,fid:e}),T3()}let Gt=null;function R3(){return!Gt&&"BroadcastChannel"in self&&(Gt=new BroadcastChannel("[Firebase] FID Change"),Gt.onmessage=t=>{Wu(t.data.key,t.data.fid)}),Gt}function T3(){ju.size===0&&Gt&&(Gt.close(),Gt=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S3="firebase-installations-database",A3=1,Xt="firebase-installations-store";let ii=null;function So(){return ii||(ii=Au(S3,A3,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Xt)}}})),ii}async function ns(t,e){const n=Ls(t),s=(await So()).transaction(Xt,"readwrite"),i=s.objectStore(Xt),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&qu(t,e.fid),e}async function Gu(t){const e=Ls(t),r=(await So()).transaction(Xt,"readwrite");await r.objectStore(Xt).delete(e),await r.done}async function Ns(t,e){const n=Ls(t),s=(await So()).transaction(Xt,"readwrite"),i=s.objectStore(Xt),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&qu(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ao(t){let e;const n=await Ns(t.appConfig,r=>{const s=k3(r),i=O3(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===Fi?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function k3(t){const e=t||{fid:E3(),registrationStatus:0};return zu(e)}function O3(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Yt.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=P3(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:x3(t)}:{installationEntry:e}}async function P3(t,e){try{const n=await v3(t,e);return ns(t.appConfig,n)}catch(n){throw Du(n)&&n.customData.serverCode===409?await Gu(t.appConfig):await ns(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function x3(t){let e=await cc(t.appConfig);for(;e.registrationStatus===1;)await Vu(100),e=await cc(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Ao(t);return r||n}return e}function cc(t){return Ns(t,e=>{if(!e)throw Yt.create("installation-not-found");return zu(e)})}function zu(t){return L3(t)?{fid:t.fid,registrationStatus:0}:t}function L3(t){return t.registrationStatus===1&&t.registrationTime+Lu<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N3({appConfig:t,heartbeatServiceProvider:e},n){const r=M3(t,n),s=m3(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:Nu,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Hu(()=>fetch(r,a));if(c.ok){const l=await c.json();return Fu(l)}else throw await Bu("Generate Auth Token",c)}function M3(t,{fid:e}){return`${Uu(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ko(t,e=!1){let n;const r=await Ns(t.appConfig,i=>{if(!Ku(i))throw Yt.create("not-registered");const o=i.authToken;if(!e&&F3(o))return i;if(o.requestStatus===1)return n=D3(t,e),i;{if(!navigator.onLine)throw Yt.create("app-offline");const a=$3(i);return n=U3(t,a),a}});return n?await n:r.authToken}async function D3(t,e){let n=await lc(t.appConfig);for(;n.authToken.requestStatus===1;)await Vu(100),n=await lc(t.appConfig);const r=n.authToken;return r.requestStatus===0?ko(t,e):r}function lc(t){return Ns(t,e=>{if(!Ku(e))throw Yt.create("not-registered");const n=e.authToken;return H3(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function U3(t,e){try{const n=await N3(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await ns(t.appConfig,r),n}catch(n){if(Du(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Gu(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ns(t.appConfig,r)}throw n}}function Ku(t){return t!==void 0&&t.registrationStatus===2}function F3(t){return t.requestStatus===2&&!B3(t)}function B3(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+f3}function $3(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function H3(t){return t.requestStatus===1&&t.requestTime+Lu<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V3(t){const e=t,{installationEntry:n,registrationPromise:r}=await Ao(e);return r?r.catch(console.error):ko(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j3(t,e=!1){const n=t;return await q3(n),(await ko(n,e)).token}async function q3(t){const{registrationPromise:e}=await Ao(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W3(t){if(!t||!t.options)throw oi("App Configuration");if(!t.name)throw oi("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw oi(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function oi(t){return Yt.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju="installations",G3="installations-internal",z3=t=>{const e=t.getProvider("app").getImmediate(),n=W3(e),r=on(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},K3=t=>{const e=t.getProvider("app").getImmediate(),n=on(e,Ju).getImmediate();return{getId:()=>V3(n),getToken:s=>j3(n,s)}};function J3(){rt(new Ve(Ju,z3,"PUBLIC")),rt(new Ve(G3,K3,"PRIVATE"))}J3();Le(xu,To);Le(xu,To,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs="analytics",Q3="firebase_id",Z3="origin",Y3=60*1e3,X3="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Oo="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re=new Co("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ke=new sn("analytics","Analytics",em);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tm(t){if(!t.startsWith(Oo)){const e=ke.create("invalid-gtag-resource",{gtagURL:t});return Re.warn(e.message),""}return t}function Qu(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function nm(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function rm(t,e){const n=nm("firebase-js-sdk-policy",{createScriptURL:tm}),r=document.createElement("script"),s=`${Oo}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function sm(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function im(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const c=(await Qu(n)).find(l=>l.measurementId===s);c&&await e[c.appId]}}catch(a){Re.error(a)}t("config",s,i)}async function om(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await Qu(n);for(const c of o){const l=a.find(d=>d.measurementId===c),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){Re.error(i)}}function am(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[a,c]=o;await om(t,e,n,a,c)}else if(i==="config"){const[a,c]=o;await im(t,e,n,r,a,c)}else if(i==="consent"){const[a]=o;t("consent","update",a)}else if(i==="get"){const[a,c,l]=o;t("get",a,c,l)}else if(i==="set"){const[a]=o;t("set",a)}else t(i,...o)}catch(a){Re.error(a)}}return s}function cm(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=am(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function lm(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Oo)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const um=30,dm=1e3;class fm{constructor(e={},n=dm){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Zu=new fm;function hm(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function pm(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:hm(r)},i=X3.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw ke.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function gm(t,e=Zu,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw ke.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw ke.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new ym;return setTimeout(async()=>{a.abort()},n!==void 0?n:Y3),Yu({appId:r,apiKey:s,measurementId:i},o,a,e)}async function Yu(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=Zu){var i;const{appId:o,measurementId:a}=t;try{await mm(r,e)}catch(c){if(a)return Re.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await pm(t);return s.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!_m(l)){if(s.deleteThrottleMetadata(o),a)return Re.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?ec(n,s.intervalMillis,um):ec(n,s.intervalMillis),d={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(o,d),Re.debug(`Calling attemptFetch again in ${u} millis`),Yu(t,d,r,s)}}function mm(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(ke.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function _m(t){if(!(t instanceof qe)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class ym{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function vm(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wm(){if(Iu())try{await Ru()}catch(t){return Re.warn(ke.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Re.warn(ke.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function bm(t,e,n,r,s,i,o){var a;const c=gm(t);c.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&Re.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>Re.error(m)),e.push(c);const l=wm().then(m=>{if(m)return r.getId()}),[u,d]=await Promise.all([c,l]);lm(i)||rm(i,u.measurementId),s("js",new Date);const p=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return p[Z3]="firebase",p.update=!0,d!=null&&(p[Q3]=d),s("config",u.measurementId,p),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(e){this.app=e}_delete(){return delete Zn[this.app.options.appId],Promise.resolve()}}let Zn={},uc=[];const dc={};let ai="dataLayer",Cm="gtag",fc,Xu,hc=!1;function Im(){const t=[];if(Cu()&&t.push("This is a browser extension environment."),z1()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=ke.create("invalid-analytics-context",{errorInfo:e});Re.warn(n.message)}}function Rm(t,e,n){Im();const r=t.options.appId;if(!r)throw ke.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Re.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ke.create("no-api-key");if(Zn[r]!=null)throw ke.create("already-exists",{id:r});if(!hc){sm(ai);const{wrappedGtag:i,gtagCore:o}=cm(Zn,uc,dc,ai,Cm);Xu=i,fc=o,hc=!0}return Zn[r]=bm(t,uc,dc,e,fc,ai,n),new Em(t)}function Tm(t=Ro()){t=at(t);const e=on(t,rs);return e.isInitialized()?e.getImmediate():Sm(t)}function Sm(t,e={}){const n=on(t,rs);if(n.isInitialized()){const s=n.getImmediate();if(ar(e,n.getOptions()))return s;throw ke.create("already-initialized")}return n.initialize({options:e})}function Am(t,e,n,r){t=at(t),vm(Xu,Zn[t.app.options.appId],e,n,r).catch(s=>Re.error(s))}const pc="@firebase/analytics",gc="0.10.1";function km(){rt(new Ve(rs,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return Rm(r,s,n)},"PUBLIC")),rt(new Ve("analytics-internal",t,"PRIVATE")),Le(pc,gc),Le(pc,gc,"esm2017");function t(e){try{const n=e.getProvider(rs).getImmediate();return{logEvent:(r,s,i)=>Am(n,r,s,i)}}catch(n){throw ke.create("interop-component-reg-failed",{reason:n})}}}km();function Po(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function e0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Om=e0,t0=new sn("auth","Firebase",e0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss=new Co("@firebase/auth");function Pm(t,...e){ss.logLevel<=te.WARN&&ss.warn(`Auth (${Ln}): ${t}`,...e)}function jr(t,...e){ss.logLevel<=te.ERROR&&ss.error(`Auth (${Ln}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(t,...e){throw xo(t,...e)}function et(t,...e){return xo(t,...e)}function xm(t,e,n){const r=Object.assign(Object.assign({},Om()),{[e]:n});return new sn("auth","Firebase",r).create(e,{appName:t.name})}function xo(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return t0.create(t,...e)}function H(t,e,...n){if(!t)throw xo(e,...n)}function dt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw jr(e),new Error(e)}function _t(t,e){t||dt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Lm(){return mc()==="http:"||mc()==="https:"}function mc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Lm()||Cu()||"connection"in navigator)?navigator.onLine:!0}function Mm(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e,n){this.shortDelay=e,this.longDelay=n,_t(n>e,"Short delay should be less than long delay!"),this.isMobile=q1()||W1()}get(){return Nm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(t,e){_t(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;dt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;dt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;dt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um=new vr(3e4,6e4);function Ft(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Bt(t,e,n,r,s={}){return r0(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=yr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),n0.fetch()(s0(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function r0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Dm),e);try{const s=new Bm(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Pr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Pr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Pr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Pr(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw xm(t,u,l);je(t,u)}}catch(s){if(s instanceof qe)throw s;je(t,"network-request-failed",{message:String(s)})}}async function wr(t,e,n,r,s={}){const i=await Bt(t,e,n,r,s);return"mfaPendingCredential"in i&&je(t,"multi-factor-auth-required",{_serverResponse:i}),i}function s0(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Lo(t.config,s):`${t.config.apiScheme}://${s}`}function Fm(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Bm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(et(this.auth,"network-request-failed")),Um.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Pr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=et(t,e,r);return s.customData._tokenResponse=n,s}function _c(t){return t!==void 0&&t.enterprise!==void 0}class $m{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Fm(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Hm(t,e){return Bt(t,"GET","/v2/recaptchaConfig",Ft(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vm(t,e){return Bt(t,"POST","/v1/accounts:delete",e)}async function jm(t,e){return Bt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qm(t,e=!1){const n=at(t),r=await n.getIdToken(e),s=No(r);H(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Yn(ci(s.auth_time)),issuedAtTime:Yn(ci(s.iat)),expirationTime:Yn(ci(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ci(t){return Number(t)*1e3}function No(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return jr("JWT malformed, contained fewer than 3 sections"),null;try{const s=vu(n);return s?JSON.parse(s):(jr("Failed to decode base64 JWT payload"),null)}catch(s){return jr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Wm(t){const e=No(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof qe&&Gm(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Gm({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Yn(this.lastLoginAt),this.creationTime=Yn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function is(t){var e;const n=t.auth,r=await t.getIdToken(),s=await lr(t,jm(n,{idToken:r}));H(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Qm(i.providerUserInfo):[],a=Jm(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new i0(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function Km(t){const e=at(t);await is(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Jm(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Qm(t){return t.map(e=>{var{providerId:n}=e,r=Po(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zm(t,e){const n=await r0(t,{},async()=>{const r=yr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=s0(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",n0.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Ym(t,e){return Bt(t,"POST","/v2/accounts:revokeToken",Ft(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Wm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return H(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Zm(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ur;return r&&(H(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(H(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(H(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ur,this.toJSON())}_performRefresh(){return dt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Jt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Po(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new zm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new i0(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await lr(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return qm(this,e)}reload(){return Km(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Jt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await is(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await lr(this,Vm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,A=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,T=(l=n.createdAt)!==null&&l!==void 0?l:void 0,D=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:L,emailVerified:$,isAnonymous:Y,providerData:B,stsTokenManager:ae}=n;H(L&&ae,e,"internal-error");const de=ur.fromJSON(this.name,ae);H(typeof L=="string",e,"internal-error"),It(d,e.name),It(p,e.name),H(typeof $=="boolean",e,"internal-error"),H(typeof Y=="boolean",e,"internal-error"),It(m,e.name),It(_,e.name),It(E,e.name),It(A,e.name),It(T,e.name),It(D,e.name);const We=new Jt({uid:L,auth:e,email:p,emailVerified:$,displayName:d,isAnonymous:Y,photoURL:_,phoneNumber:m,tenantId:E,stsTokenManager:de,createdAt:T,lastLoginAt:D});return B&&Array.isArray(B)&&(We.providerData=B.map(Oe=>Object.assign({},Oe))),A&&(We._redirectEventId=A),We}static async _fromIdTokenResponse(e,n,r=!1){const s=new ur;s.updateFromServerResponse(n);const i=new Jt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await is(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yc=new Map;function ft(t){_t(t instanceof Function,"Expected a class definition");let e=yc.get(t);return e?(_t(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,yc.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}o0.type="NONE";const vc=o0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(t,e,n){return`firebase:${t}:${e}:${n}`}class wn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=qr(this.userKey,s.apiKey,i),this.fullPersistenceKey=qr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Jt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new wn(ft(vc),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||ft(vc);const o=qr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const d=Jt._fromJSON(e,u);l!==i&&(a=d),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new wn(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new wn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(l0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(a0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(d0(e))return"Blackberry";if(f0(e))return"Webos";if(Mo(e))return"Safari";if((e.includes("chrome/")||c0(e))&&!e.includes("edge/"))return"Chrome";if(u0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function a0(t=ve()){return/firefox\//i.test(t)}function Mo(t=ve()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function c0(t=ve()){return/crios\//i.test(t)}function l0(t=ve()){return/iemobile/i.test(t)}function u0(t=ve()){return/android/i.test(t)}function d0(t=ve()){return/blackberry/i.test(t)}function f0(t=ve()){return/webos/i.test(t)}function Ms(t=ve()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Xm(t=ve()){var e;return Ms(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function e_(){return G1()&&document.documentMode===10}function h0(t=ve()){return Ms(t)||u0(t)||f0(t)||d0(t)||/windows phone/i.test(t)||l0(t)}function t_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p0(t,e=[]){let n;switch(t){case"Browser":n=wc(ve());break;case"Worker":n=`${wc(ve())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ln}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r_(t,e={}){return Bt(t,"GET","/v2/passwordPolicy",Ft(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_=6;class i_{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:s_,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new bc(this),this.idTokenSubscription=new bc(this),this.beforeStateQueue=new n_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=t0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ft(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await wn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await is(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Mm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?at(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ft(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await r_(this),n=new i_(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new sn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Ym(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ft(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await wn.create(this,[ft(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=p0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Pm(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function an(t){return at(t)}class bc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Y1(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ds={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function a_(t){Ds=t}function g0(t){return Ds.loadJS(t)}function c_(){return Ds.recaptchaEnterpriseScript}function l_(){return Ds.gapiScript}function u_(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const d_="recaptcha-enterprise",f_="NO_RECAPTCHA";class h_{constructor(e){this.type=d_,this.auth=an(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Hm(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new $m(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;_c(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(f_)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&_c(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=c_();c.length!==0&&(c+=a),g0(c).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Ec(t,e,n,r=!1){const s=new h_(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function $i(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Ec(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Ec(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p_(t,e){const n=on(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ar(i,e??{}))return s;je(s,"already-initialized")}return n.initialize({options:e})}function g_(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ft);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function m_(t,e,n){const r=an(t);H(r._canInitEmulator,r,"emulator-config-failed"),H(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=m0(e),{host:o,port:a}=__(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||y_()}function m0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function __(t){const e=m0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Cc(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Cc(o)}}}function Cc(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function y_(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return dt("not implemented")}_getIdTokenResponse(e){return dt("not implemented")}_linkToIdToken(e,n){return dt("not implemented")}_getReauthenticationResolver(e){return dt("not implemented")}}async function v_(t,e){return Bt(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w_(t,e){return wr(t,"POST","/v1/accounts:signInWithPassword",Ft(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b_(t,e){return wr(t,"POST","/v1/accounts:signInWithEmailLink",Ft(t,e))}async function E_(t,e){return wr(t,"POST","/v1/accounts:signInWithEmailLink",Ft(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends Do{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new dr(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new dr(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $i(e,n,"signInWithPassword",w_);case"emailLink":return b_(e,{email:this._email,oobCode:this._password});default:je(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $i(e,r,"signUpPassword",v_);case"emailLink":return E_(e,{idToken:n,email:this._email,oobCode:this._password});default:je(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bn(t,e){return wr(t,"POST","/v1/accounts:signInWithIdp",Ft(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_="http://localhost";class en extends Do{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new en(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):je("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Po(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new en(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return bn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,bn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,bn(e,n)}buildRequest(){const e={requestUri:C_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=yr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I_(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function R_(t){const e=jn(qn(t)).link,n=e?jn(qn(e)).deep_link_id:null,r=jn(qn(t)).deep_link_id;return(r?jn(qn(r)).link:null)||r||n||e||t}class Uo{constructor(e){var n,r,s,i,o,a;const c=jn(qn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,d=I_((s=c.mode)!==null&&s!==void 0?s:null);H(l&&u&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=R_(e);try{return new Uo(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(){this.providerId=Nn.PROVIDER_ID}static credential(e,n){return dr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Uo.parseLink(n);return H(r,"argument-error"),dr._fromEmailAndCode(e,r.code,r.tenantId)}}Nn.PROVIDER_ID="password";Nn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Nn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br extends _0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends br{constructor(){super("facebook.com")}static credential(e){return en._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kt.credential(e.oauthAccessToken)}catch{return null}}}kt.FACEBOOK_SIGN_IN_METHOD="facebook.com";kt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends br{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return en._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ot.credential(n,r)}catch{return null}}}Ot.GOOGLE_SIGN_IN_METHOD="google.com";Ot.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends br{constructor(){super("github.com")}static credential(e){return en._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pt.credential(e.oauthAccessToken)}catch{return null}}}Pt.GITHUB_SIGN_IN_METHOD="github.com";Pt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt extends br{constructor(){super("twitter.com")}static credential(e,n){return en._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return xt.credential(n,r)}catch{return null}}}xt.TWITTER_SIGN_IN_METHOD="twitter.com";xt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T_(t,e){return wr(t,"POST","/v1/accounts:signUp",Ft(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Jt._fromIdTokenResponse(e,r,s),o=Ic(r);return new tn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Ic(r);return new tn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Ic(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os extends qe{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,os.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new os(e,n,r,s)}}function y0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?os._fromErrorAndOperation(t,i,e,r):i})}async function S_(t,e,n=!1){const r=await lr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return tn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A_(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await lr(t,y0(r,s,e,t),n);H(i.idToken,r,"internal-error");const o=No(i.idToken);H(o,r,"internal-error");const{sub:a}=o;return H(t.uid===a,r,"user-mismatch"),tn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&je(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v0(t,e,n=!1){const r="signIn",s=await y0(t,r,e),i=await tn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function k_(t,e){return v0(an(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w0(t){const e=an(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function O_(t,e,n){const r=an(t),o=await $i(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",T_).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&w0(t),c}),a=await tn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function P_(t,e,n){return k_(at(t),Nn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&w0(t),r})}function x_(t,e,n,r){return at(t).onIdTokenChanged(e,n,r)}function L_(t,e,n){return at(t).beforeAuthStateChanged(e,n)}const as="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(as,"1"),this.storage.removeItem(as),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_(){const t=ve();return Mo(t)||Ms(t)}const M_=1e3,D_=10;class E0 extends b0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=N_()&&t_(),this.fallbackToPolling=h0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);e_()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,D_):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},M_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}E0.type="LOCAL";const U_=E0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0 extends b0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}C0.type="SESSION";const I0=C0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F_(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Us(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await F_(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Us.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fo(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Fo("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const p=d;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(){return window}function $_(t){tt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R0(){return typeof tt().WorkerGlobalScope<"u"&&typeof tt().importScripts=="function"}async function H_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function V_(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function j_(){return R0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T0="firebaseLocalStorageDb",q_=1,cs="firebaseLocalStorage",S0="fbase_key";class Er{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Fs(t,e){return t.transaction([cs],e?"readwrite":"readonly").objectStore(cs)}function W_(){const t=indexedDB.deleteDatabase(T0);return new Er(t).toPromise()}function Hi(){const t=indexedDB.open(T0,q_);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(cs,{keyPath:S0})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(cs)?e(r):(r.close(),await W_(),e(await Hi()))})})}async function Rc(t,e,n){const r=Fs(t,!0).put({[S0]:e,value:n});return new Er(r).toPromise()}async function G_(t,e){const n=Fs(t,!1).get(e),r=await new Er(n).toPromise();return r===void 0?null:r.value}function Tc(t,e){const n=Fs(t,!0).delete(e);return new Er(n).toPromise()}const z_=800,K_=3;class A0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hi(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>K_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return R0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Us._getInstance(j_()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await H_(),!this.activeServiceWorker)return;this.sender=new B_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||V_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hi();return await Rc(e,as,"1"),await Tc(e,as),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Rc(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>G_(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Tc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Fs(s,!1).getAll();return new Er(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),z_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}A0.type="LOCAL";const J_=A0;new vr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q_(t,e){return e?ft(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo extends Do{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return bn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return bn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return bn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Z_(t){return v0(t.auth,new Bo(t),t.bypassAuthState)}function Y_(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),A_(n,new Bo(t),t.bypassAuthState)}async function X_(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),S_(n,new Bo(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Z_;case"linkViaPopup":case"linkViaRedirect":return X_;case"reauthViaPopup":case"reauthViaRedirect":return Y_;default:je(this.auth,"internal-error")}}resolve(e){_t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e4=new vr(2e3,1e4);class pn extends k0{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,pn.currentPopupAction&&pn.currentPopupAction.cancel(),pn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){_t(this.filter.length===1,"Popup operations only handle one event");const e=Fo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(et(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,e4.get())};e()}}pn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t4="pendingRedirect",Wr=new Map;class n4 extends k0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Wr.get(this.auth._key());if(!e){try{const r=await r4(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Wr.set(this.auth._key(),e)}return this.bypassAuthState||Wr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function r4(t,e){const n=o4(e),r=i4(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function s4(t,e){Wr.set(t._key(),e)}function i4(t){return ft(t._redirectPersistence)}function o4(t){return qr(t4,t.config.apiKey,t.name)}async function a4(t,e,n=!1){const r=an(t),s=Q_(r,e),o=await new n4(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c4=10*60*1e3;class l4{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!u4(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!O0(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(et(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=c4&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sc(e))}saveEventToCache(e){this.cachedEventUids.add(Sc(e)),this.lastProcessedEventTime=Date.now()}}function Sc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function O0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function u4(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return O0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d4(t,e={}){return Bt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f4=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,h4=/^https?/;async function p4(t){if(t.config.emulator)return;const{authorizedDomains:e}=await d4(t);for(const n of e)try{if(g4(n))return}catch{}je(t,"unauthorized-domain")}function g4(t){const e=Bi(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!h4.test(n))return!1;if(f4.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m4=new vr(3e4,6e4);function Ac(){const t=tt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function _4(t){return new Promise((e,n)=>{var r,s,i;function o(){Ac(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ac(),n(et(t,"network-request-failed"))},timeout:m4.get()})}if(!((s=(r=tt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=tt().gapi)===null||i===void 0)&&i.load)o();else{const a=u_("iframefcb");return tt()[a]=()=>{gapi.load?o():n(et(t,"network-request-failed"))},g0(`${l_()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Gr=null,e})}let Gr=null;function y4(t){return Gr=Gr||_4(t),Gr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v4=new vr(5e3,15e3),w4="__/auth/iframe",b4="emulator/auth/iframe",E4={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},C4=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function I4(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Lo(e,b4):`https://${t.config.authDomain}/${w4}`,r={apiKey:e.apiKey,appName:t.name,v:Ln},s=C4.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${yr(r).slice(1)}`}async function R4(t){const e=await y4(t),n=tt().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:I4(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:E4,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=et(t,"network-request-failed"),a=tt().setTimeout(()=>{i(o)},v4.get());function c(){tt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T4={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},S4=500,A4=600,k4="_blank",O4="http://localhost";class kc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function P4(t,e,n,r=S4,s=A4){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},T4),{width:r.toString(),height:s.toString(),top:i,left:o}),l=ve().toLowerCase();n&&(a=c0(l)?k4:n),a0(l)&&(e=e||O4,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[m,_])=>`${p}${m}=${_},`,"");if(Xm(l)&&a!=="_self")return x4(e||"",a),new kc(null);const d=window.open(e||"",a,u);H(d,t,"popup-blocked");try{d.focus()}catch{}return new kc(d)}function x4(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L4="__/auth/handler",N4="emulator/auth/handler",M4=encodeURIComponent("fac");async function Oc(t,e,n,r,s,i){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ln,eventId:s};if(e instanceof _0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Z1(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries(i||{}))o[u]=d}if(e instanceof br){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${M4}=${encodeURIComponent(c)}`:"";return`${D4(t)}?${yr(a).slice(1)}${l}`}function D4({config:t}){return t.emulator?Lo(t,N4):`https://${t.authDomain}/${L4}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li="webStorageSupport";class U4{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=I0,this._completeRedirectFn=a4,this._overrideRedirectResult=s4}async _openPopup(e,n,r,s){var i;_t((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Oc(e,n,r,Bi(),s);return P4(e,o,Fo())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Oc(e,n,r,Bi(),s);return $_(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(_t(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await R4(e),r=new l4(e);return n.register("authEvent",s=>(H(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(li,{type:li},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[li];o!==void 0&&n(!!o),je(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=p4(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return h0()||Mo()||Ms()}}const F4=U4;var Pc="@firebase/auth",xc="1.6.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B4{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $4(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function H4(t){rt(new Ve("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:p0(t)},l=new o_(r,s,i,c);return g_(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),rt(new Ve("auth-internal",e=>{const n=an(e.getProvider("auth").getImmediate());return(r=>new B4(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Le(Pc,xc,$4(t)),Le(Pc,xc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V4=5*60,j4=Eu("authIdTokenMaxAge")||V4;let Lc=null;const q4=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>j4)return;const s=n==null?void 0:n.token;Lc!==s&&(Lc=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function W4(t=Ro()){const e=on(t,"auth");if(e.isInitialized())return e.getImmediate();const n=p_(t,{popupRedirectResolver:F4,persistence:[J_,U_,I0]}),r=Eu("authTokenSyncURL");if(r){const i=q4(r);L_(n,i,()=>i(n.currentUser)),x_(n,o=>i(o))}const s=wu("auth");return s&&m_(n,`http://${s}`),n}function G4(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}a_({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=et("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",G4().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});H4("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P0="firebasestorage.googleapis.com",z4="storageBucket",K4=2*60*1e3,J4=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct extends qe{constructor(e,n,r=0){super(ui(e),`Firebase Storage: ${n} (${ui(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ct.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ui(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var st;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(st||(st={}));function ui(t){return"storage/"+t}function Q4(){const t="An unknown error occurred, please check the error payload for server response.";return new ct(st.UNKNOWN,t)}function Z4(){return new ct(st.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Y4(){return new ct(st.CANCELED,"User canceled the upload/download.")}function X4(t){return new ct(st.INVALID_URL,"Invalid URL '"+t+"'.")}function e6(t){return new ct(st.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Nc(t){return new ct(st.INVALID_ARGUMENT,t)}function x0(){return new ct(st.APP_DELETED,"The Firebase app was deleted.")}function t6(t){return new ct(st.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Be.makeFromUrl(e,n)}catch{return new Be(e,"")}if(r.path==="")return r;throw e6(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i($){$.path.charAt($.path.length-1)==="/"&&($.path_=$.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function l($){$.path_=decodeURIComponent($.path)}const u="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",m=new RegExp(`^https?://${d}/${u}/b/${s}/o${p}`,"i"),_={bucket:1,path:3},E=n===P0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,A="([^?#]*)",T=new RegExp(`^https?://${E}/${s}/${A}`,"i"),L=[{regex:a,indices:c,postModify:i},{regex:m,indices:_,postModify:l},{regex:T,indices:{bucket:1,path:2},postModify:l}];for(let $=0;$<L.length;$++){const Y=L[$],B=Y.regex.exec(e);if(B){const ae=B[Y.indices.bucket];let de=B[Y.indices.path];de||(de=""),r=new Be(ae,de),Y.postModify(r);break}}if(r==null)throw X4(e);return r}}class n6{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r6(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...A){l||(l=!0,e.apply(null,A))}function d(A){s=setTimeout(()=>{s=null,t(m,c())},A)}function p(){i&&clearTimeout(i)}function m(A,...T){if(l){p();return}if(A){p(),u.call(null,A,...T);return}if(c()||o){p(),u.call(null,A,...T);return}r<64&&(r*=2);let L;a===1?(a=2,L=0):L=(r+Math.random())*1e3,d(L)}let _=!1;function E(A){_||(_=!0,p(),!l&&(s!==null?(A||(a=2),clearTimeout(s),d(0)):A||(a=1)))}return d(0),i=setTimeout(()=>{o=!0,E(!0)},n),E}function s6(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i6(t){return t!==void 0}function Mc(t,e,n,r){if(r<e)throw Nc(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Nc(`Invalid value for '${t}'. Expected ${n} or less.`)}function o6(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ls;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ls||(ls={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a6(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c6{constructor(e,n,r,s,i,o,a,c,l,u,d,p=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=d,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,_)=>{this.resolve_=m,this.reject_=_,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new xr(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===ls.NO_ERROR,c=i.getStatus();if(!a||a6(c,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===ls.ABORT;r(!1,new xr(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new xr(l,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());i6(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=Q4();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?x0():Y4();o(c)}else{const c=Z4();o(c)}};this.canceled_?n(!1,new xr(!1,null,!0)):this.backoffId_=r6(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&s6(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class xr{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function l6(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function u6(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function d6(t,e){e&&(t["X-Firebase-GMPID"]=e)}function f6(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function h6(t,e,n,r,s,i,o=!0){const a=o6(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return d6(l,e),l6(l,n),u6(l,i),f6(l,r),new c6(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p6(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function g6(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,n){this._service=e,n instanceof Be?this._location=n:this._location=Be.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new us(e,n)}get root(){const e=new Be(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return g6(this._location.path)}get storage(){return this._service}get parent(){const e=p6(this._location.path);if(e===null)return null;const n=new Be(this._location.bucket,e);return new us(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw t6(e)}}function Dc(t,e){const n=e==null?void 0:e[z4];return n==null?null:Be.makeFromBucketSpec(n,t)}function m6(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:j1(s,t.app.options.projectId))}class _6{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=P0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=K4,this._maxUploadRetryTime=J4,this._requests=new Set,s!=null?this._bucket=Be.makeFromBucketSpec(s,this._host):this._bucket=Dc(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Be.makeFromBucketSpec(this._url,e):this._bucket=Dc(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Mc("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Mc("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new us(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new n6(x0());{const o=h6(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Uc="@firebase/storage",Fc="0.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L0="storage";function y6(t=Ro(),e){t=at(t);const r=on(t,L0).getImmediate({identifier:e}),s=H1("storage");return s&&v6(r,...s),r}function v6(t,e,n,r={}){m6(t,e,n,r)}function w6(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new _6(n,r,s,e,Ln)}function b6(){rt(new Ve(L0,w6,"PUBLIC").setMultipleInstances(!0)),Le(Uc,Fc,""),Le(Uc,Fc,"esm2017")}b6();const E6={apiKey:"AIzaSyAdXcu2UuL3CNVhhwa0HWSLWSvy2VgjWtw",authDomain:"final-scissors.firebaseapp.com",projectId:"final-scissors",storageBucket:"final-scissors.appspot.com",messagingSenderId:"57938130438",appId:"1:57938130438:web:2cb7d089814df930d77587",measurementId:"G-5MQDWFVXG2"},N0=ku(E6),M0=W4(N0);Tm(N0);y6();const C6={class:"signup"},I6={class:"signupform"},R6=N("h1",null,"SIGNUP",-1),T6=N("button",{type:"submit"},"Sign Up",-1),S6={key:0},A6=N("div",{class:"group1"},[N("img",{src:L1,alt:"background image"})],-1),k6=N("div",{class:"group2"},[N("img",{src:bo,alt:"background image"})],-1),O6=it({__name:"SignUp",setup(t){const e=be(""),n=be(""),r=be(""),s=async()=>{r.value="";try{const i=await O_(M0,e.value,n.value);console.log(i.user),$o.push("/home")}catch(i){console.error("error",i.message||i),r.value="invalid email or password"}};return(i,o)=>{const a=hr("router-link");return le(),pe("div",C6,[N("div",I6,[N("form",{onSubmit:lo(s,["prevent"])},[R6,Cn(N("input",{type:"email","onUpdate:modelValue":o[0]||(o[0]=c=>e.value=c),placeholder:"Email",required:""},null,512),[[sr,e.value]]),Cn(N("input",{type:"password","onUpdate:modelValue":o[1]||(o[1]=c=>n.value=c),placeholder:"Password",required:""},null,512),[[sr,n.value]]),T6,r.value?(le(),pe("p",S6,ht(r.value),1)):Cs("",!0),oe(a,{to:"/login"},{default:fr(()=>[On("already have an account?,Login")]),_:1}),A6,k6],32)])])}}}),P6={class:"login"},x6={class:"loginform"},L6=N("h1",null,"LOGIN",-1),N6=N("button",{type:"submit"},"Login",-1),M6={key:0},D6=N("div",{class:"group1"},[N("img",{src:ho,alt:"background image"})],-1),U6=N("div",{class:"group2"},[N("img",{src:bo,alt:"background image"})],-1),F6=it({__name:"Login",setup(t){const e=be(""),n=be(""),r=be(""),s=async()=>{r.value="";try{const i=await P_(M0,e.value,n.value);console.log(i.user),$o.push("/home")}catch(i){console.error("error",i.message||i),r.value="invalid email or password"}};return(i,o)=>{const a=hr("router-link");return le(),pe("div",P6,[N("div",x6,[N("form",{onSubmit:lo(s,["prevent"])},[L6,Cn(N("input",{type:"email","onUpdate:modelValue":o[0]||(o[0]=c=>e.value=c),placeholder:"Email",required:""},null,512),[[sr,e.value]]),Cn(N("input",{type:"password","onUpdate:modelValue":o[1]||(o[1]=c=>n.value=c),placeholder:"Password",required:""},null,512),[[sr,n.value]]),N6,r.value?(le(),pe("p",M6,ht(r.value),1)):Cs("",!0),oe(a,{to:"/signup"},{default:fr(()=>[On("don't have an account, sign up")]),_:1}),D6,U6],32)])])}}}),B6={};function $6(t,e,n,r,s,i){return le(),pe("div")}const H6=Ss(B6,[["render",$6]]),V6={class:"analytics"},j6=N("h1",{class:"header"},"Analytics",-1),q6={class:"analyticscontent"},W6={class:"homebutton"},G6=N("div",{class:"group1"},[N("img",{src:ho,alt:"background image"})],-1),z6=N("div",{class:"group2"},[N("img",{src:bo,alt:"background image"})],-1),K6=it({__name:"Analytic",setup(t){const e=be(0),n=be({});return io(()=>{const r=JSON.parse(localStorage.getItem("shortenedURLs")||"[]");e.value=r.length,r.forEach(s=>{const i=new Date(s.date).toDateString();n.value[i]||(n.value[i]=0),n.value[i]++})}),(r,s)=>{const i=hr("router-link");return le(),pe("div",V6,[j6,N("div",q6,[N("p",null,"Total links shortened: "+ht(e.value),1),(le(!0),pe(De,null,Cl(n.value,(o,a)=>(le(),pe("div",{key:a},[N("p",null,ht(a)+": "+ht(o),1)]))),128))]),N("button",W6,[oe(i,{to:"/home"},{default:fr(()=>[On("Go back home")]),_:1})]),G6,z6])}}}),$o=ch({history:If("/"),routes:[{path:"/",redirect:"/signup"},{path:"/home",name:"home",component:x1},{path:"/about",name:"about",component:()=>of(()=>Promise.resolve().then(()=>E1),void 0)},{path:"/signup",name:"signup",component:O6},{path:"/login",name:"login",component:F6},{path:"/profile",name:"profile",component:H6},{path:"/analytics",name:"analytics",component:K6}]}),D0=Xd(nf);D0.use($o);D0.mount("#app");
