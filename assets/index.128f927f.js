var Me=Object.defineProperty,Ce=Object.defineProperties;var Re=Object.getOwnPropertyDescriptors;var te=Object.getOwnPropertySymbols;var Ie=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable;var $=(e,t,r)=>t in e?Me(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,O=(e,t)=>{for(var r in t||(t={}))Ie.call(t,r)&&$(e,r,t[r]);if(te)for(var r of te(t))we.call(t,r)&&$(e,r,t[r]);return e},y=(e,t)=>Ce(e,Re(t));var h=(e,t,r)=>($(e,typeof t!="symbol"?t+"":t,r),r);import{c as Be,a as Le,M as z,g as Y,b as B,A as F,V as J,E as D,d as i,l as Ue,e as H,f as ke,n as C,h as Ne,i as $e,r as je,o as Ve,j as He,I as re,k as xe,m as qe,p as Ge}from"./vendor.7220154e.js";const ze=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}};ze();const Ye="modulepreload",ne={},Je="/",c=function(t,r){return!r||r.length===0?t():Promise.all(r.map(n=>{if(n=`${Je}${n}`,n in ne)return;ne[n]=!0;const o=n.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${s}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":Ye,o||(u.as="script",u.crossOrigin=""),u.href=n,document.head.appendChild(u),o)return new Promise((l,a)=>{u.addEventListener("load",l),u.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>t())};var g=(e=>(e.BASE_HOME="/home",e.BASE_LOGIN="/login",e))(g||{});const S="Redirect",_=()=>c(()=>import("./index.140350b4.js"),["assets/index.140350b4.js","assets/index.5249962d.css","assets/vendor.7220154e.js","assets/ElIcon.6c31bb28.js"]),Ke={path:"/redirect",name:S,component:_,meta:{title:S,hideBreadcrumb:!0},children:[{path:"/redirect/:path(.*)",name:S,component:()=>c(()=>import("./Redirect.788b2e1e.js"),["assets/Redirect.788b2e1e.js","assets/vendor.7220154e.js"]),meta:{title:S,hideBreadcrumb:!0}}]},fe={path:"/:path(.*)*",name:"ErrorPage",component:_,meta:{title:"ErrorPage",hideBreadcrumb:!0},children:[{path:"/:path(.*)*",name:"ErrorPage",component:()=>c(()=>import("./404.1f458269.js"),["assets/404.1f458269.js","assets/404.8f188612.css","assets/vendor.7220154e.js"]),meta:{title:"ErrorPage",hideBreadcrumb:!0}}]},We={path:"/",name:"Root",redirect:g.BASE_HOME,meta:{title:"Root"}},Xe={path:"/login",name:"Login",component:()=>c(()=>import("./Login.1e4b7392.js"),["assets/Login.1e4b7392.js","assets/Login.aa53a475.css","assets/vendor.7220154e.js"]),meta:{title:"\u767B\u5F55"}};var Ze=[We,Xe,fe,Ke];const Qe=[{path:"/about",name:"About",component:_,redirect:"/about/index",meta:{title:"\u5173\u4E8E\u6211",icon:"user",menuNum:100},children:[{path:"index",name:"About",component:()=>c(()=>import("./About.7a99be03.js"),["assets/About.7a99be03.js","assets/About.3c679e20.css","assets/vendor.7220154e.js"]),meta:{title:"\u5173\u4E8E\u6211",hideMenu:!0}}]}];var et=Object.freeze(Object.defineProperty({__proto__:null,default:Qe},Symbol.toStringTag,{value:"Module"}));const tt=[{path:"/comps",name:"Components",component:_,redirect:"/comps/dialog",meta:{title:"\u7EC4\u4EF6",icon:"Grid",menuNum:70},children:[{path:"dialog",name:"Dialog",component:()=>c(()=>import("./Dialog.89ddd575.js"),["assets/Dialog.89ddd575.js","assets/vendor.7220154e.js","assets/vue.dc8ef42c.js"]),meta:{title:"\u5F39\u7A97"}},{path:"drawer",name:"Drawer",component:()=>c(()=>import("./Drawer.4634d443.js"),["assets/Drawer.4634d443.js","assets/vendor.7220154e.js","assets/vue.dc8ef42c.js"]),meta:{title:"\u62BD\u5C49"}}]}];var rt=Object.freeze(Object.defineProperty({__proto__:null,default:tt},Symbol.toStringTag,{value:"Module"}));const nt=[{path:"/form",name:"Form",component:_,redirect:"/form/step",meta:{title:"\u8868\u5355",icon:"Tickets",menuNum:50},children:[{path:"base",name:"BaseForm",component:()=>c(()=>import("./BaseForm.5a2a2891.js"),["assets/BaseForm.5a2a2891.js","assets/vendor.7220154e.js"]),meta:{title:"\u57FA\u7840\u8868\u5355"}},{path:"step",name:"StepForm",component:()=>c(()=>import("./StepForm.1f4e9610.js"),["assets/StepForm.1f4e9610.js","assets/StepForm.7511213c.css","assets/vendor.7220154e.js"]),meta:{title:"\u5206\u5E03\u8868\u5355"}},{path:"use-form",name:"UseForm",component:()=>c(()=>import("./UseForm.a795beae.js"),["assets/UseForm.a795beae.js","assets/vendor.7220154e.js","assets/log.b4d653eb.js"]),meta:{title:"UseForm"}}]}];var ot=Object.freeze(Object.defineProperty({__proto__:null,default:nt},Symbol.toStringTag,{value:"Module"}));const ut=[{path:"/home",name:"Home",component:_,redirect:"/home/index",meta:{title:"\u5206\u6790\u9875",icon:"House",menuNum:10},children:[{path:"index",name:"Home",component:()=>c(()=>import("./Home.40153fa3.js"),["assets/Home.40153fa3.js","assets/Home.2e82c08d.css","assets/ElIcon.6c31bb28.js","assets/vendor.7220154e.js"]),meta:{title:"\u5206\u6790\u9875",hideMenu:!0}}]}];var st=Object.freeze(Object.defineProperty({__proto__:null,default:ut},Symbol.toStringTag,{value:"Module"}));const at=[{path:"/icon",name:"Icon",component:_,redirect:"/icon/index",meta:{title:"\u56FE\u6807",icon:"Eleme",menuNum:10},children:[{path:"index",name:"Icon",component:()=>c(()=>import("./Icon.65e5b940.js"),["assets/Icon.65e5b940.js","assets/Icon.3c45979f.css","assets/ElIcon.6c31bb28.js","assets/vendor.7220154e.js"]),meta:{title:"\u56FE\u6807",hideMenu:!0}}]}];var it=Object.freeze(Object.defineProperty({__proto__:null,default:at},Symbol.toStringTag,{value:"Module"}));const ct=[{path:"/table",name:"Table",component:_,redirect:"/table/normal",meta:{title:"\u8868\u683C",icon:"SetUp",menuNum:30},children:[{path:"normal",name:"NormalTable",component:()=>c(()=>import("./NormalTable.8499b114.js"),["assets/NormalTable.8499b114.js","assets/NormalTable.3341d676.css","assets/TableHeader.1f45fedf.js","assets/TableHeader.6b9b9461.css","assets/vendor.7220154e.js"]),meta:{title:"\u666E\u901A\u8868\u683C"}},{path:"tree",name:"TreeTable",component:()=>c(()=>import("./TreeTable.0ca4ab70.js"),["assets/TreeTable.0ca4ab70.js","assets/TableHeader.1f45fedf.js","assets/TableHeader.6b9b9461.css","assets/vendor.7220154e.js"]),meta:{title:"\u6811\u578B\u8868\u683C"}},{path:"use",name:"UseTable",component:()=>c(()=>import("./UseTable.8c695880.js"),["assets/UseTable.8c695880.js","assets/vendor.7220154e.js","assets/log.b4d653eb.js","assets/TableHeader.1f45fedf.js","assets/TableHeader.6b9b9461.css"]),meta:{title:"UseTable"}}]}];var lt=Object.freeze(Object.defineProperty({__proto__:null,default:ct},Symbol.toStringTag,{value:"Module"}));function mt(){return!1}function Or(){return!0}Be.rawError=!0;const L=Le({strict:mt()});function dt(e){e.use(L)}var pt=Object.defineProperty,ft=Object.getOwnPropertyDescriptor,K=(e,t,r,n)=>{for(var o=n>1?void 0:n?ft(t,r):t,s=e.length-1,u;s>=0;s--)(u=e[s])&&(o=(n?u(t,r,o):u(o))||o);return n&&o&&pt(t,r,o),o};const _t="menu";let v=class extends J{constructor(){super(...arguments);h(this,"menus",[])}get getMenus(){return this.menus}commitMenus(e){this.menus=e}setMenusAction(e){this.commitMenus(e)}};K([B],v.prototype,"commitMenus",1);K([F],v.prototype,"setMenusAction",1);v=K([z({dynamic:!0,namespaced:!0,store:L,name:_t})],v);const ht=Y(v);function Et(e){const t=_e(e);ht.setMenusAction(t)}function _e(e,t=""){const r=[];return e.sort((n,o)=>n.meta.menuNum&&o.meta.menuNum?n.meta.menuNum-o.meta.menuNum:1),e.forEach(n=>{if(!n.meta.hideMenu){const o={path:t?gt([t,n.path]):n.path,title:n.meta.title,name:n.name,icon:n.meta.icon||"",children:[]};n.children&&n.children.length!==0&&(o.children=_e(n.children,o.path)),r.push(o)}}),r}function gt(e){return e.reduce((t,r)=>(t=t.trim().replace("/",""),r=r.trim().replace("/",""),`/${t}/${r}`))}const oe="TOKEN__",ue="USER__INFO__";var W=(e=>(e[e.SUCCESS=1e4]="SUCCESS",e[e.ERROR=10001]="ERROR",e[e.TIMEOUT=401]="TIMEOUT",e.TYPE="success",e))(W||{}),U=(e=>(e.MESSAGE="message",e.MODEL="model",e))(U||{}),E=(e=>(e.GET="GET",e.POST="POST",e.PUT="PUT",e.DELETE="DELETE",e))(E||{}),X=(e=>(e.JSON="application/json;charset=UTF-8",e.FORM_URLENCODED="application/x-www-form-urlencoded;charset=UTF-8",e.FORM_DATA="multipart/form-data;charset=UTF-8",e))(X||{});function Z(e,t){return toString.call(e)===`[object ${t}]`}function P(e){return Z(e,"String")}function x(e){return typeof e=="function"}function At(e){return e&&Array.isArray(e)}function Ot(e){return e!==null&&Z(e,"Object")}function Tt(e){return Z(e,"Date")}function bt(e){return typeof e=="object"}function se(e=!1){const t=new Date().getTime();return e?`?_t=${t}`:{_t:t}}const yt="YYYY-MM-DD HH:mm";function he(e){for(const t in e){if(e[t]&&e[t]._isAMomentObject&&(e[t]=e[t].format(yt)),P(t)){const r=e[t];if(r)try{e[t]=P(r)?r.trim():r}catch(n){throw new Error(n)}}Ot(e[t])&&he(e[t])}}const T="__ERROR_RESULT__",m={"401":"\u7528\u6237\u6CA1\u6709\u6743\u9650\uFF08\u4EE4\u724C\u3001\u7528\u6237\u540D\u3001\u5BC6\u7801\u9519\u8BEF\uFF09!","403":"\u7528\u6237\u5F97\u5230\u6388\u6743\uFF0C\u4F46\u662F\u8BBF\u95EE\u662F\u88AB\u7981\u6B62\u7684!","404":"\u7F51\u7EDC\u8BF7\u6C42\u9519\u8BEF,\u672A\u627E\u5230\u8BE5\u8D44\u6E90!","405":"\u7F51\u7EDC\u8BF7\u6C42\u9519\u8BEF,\u8BF7\u6C42\u65B9\u6CD5\u672A\u5141\u8BB8!","408":"\u7F51\u7EDC\u8BF7\u6C42\u8D85\u65F6!","500":"\u670D\u52A1\u5668\u9519\u8BEF,\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458!","501":"\u7F51\u7EDC\u672A\u5B9E\u73B0!","502":"\u7F51\u7EDC\u9519\u8BEF!","503":"\u670D\u52A1\u4E0D\u53EF\u7528\uFF0C\u670D\u52A1\u5668\u6682\u65F6\u8FC7\u8F7D\u6216\u7EF4\u62A4!","504":"\u7F51\u7EDC\u8D85\u65F6!","505":"http\u7248\u672C\u4E0D\u652F\u6301\u8BE5\u8BF7\u6C42!"};function j(e){return 1e4+e%1e4===W.SUCCESS}function St(e,t){var u;const{isCacheData:r,apiUrl:n,formatDate:o}=t;n&&P(n)&&(e.url=`${n}${e.url}`);const s=e.params||{};return((u=e.method)==null?void 0:u.toUpperCase())===E.GET?P(s)?(e.url=e.url+s+`${r?"":se(!0)}`,e.params=void 0):!r&&(e.params=Object.assign(s||{},se(!1))):P(s)?(e.url=e.url+s,e.params=void 0):(o&&he(s),e.data=s,e.params=void 0),e}const V=(e,t)=>{const{isTransformRequestResult:r}=t;if(!r)return e.data;if(!e.data)return T;const{code:n,data:o,message:s}=e.data,u=s||e.data.msg;if(!(j(n)&&(o||u)))return u&&(t.errorMessageMode===U.MODEL?D({title:"\u9519\u8BEF\u63D0\u793A",message:u}):t.errorMessageMode==="message"&&i.error(u)),Promise.reject(new Error(u)),T;if(j(n))return o||u;if(n===W.TIMEOUT){const a="\u767B\u5F55\u8D85\u65F6,\u8BF7\u91CD\u65B0\u767B\u5F55!";return D({title:"\u64CD\u4F5C\u5931\u8D25",message:a}),Promise.reject(new Error(a)),T}if(!j(n)){if(u)i.error(u),Promise.reject(new Error(u));else{const a="\u64CD\u4F5C\u5931\u8D25,\u7CFB\u7EDF\u5F02\u5E38!";i.error(a),Promise.reject(new Error(a))}return T}return T};function ae(e){return e}function Pt(e){var n;const t=e==null?void 0:e.headers;return((t==null?void 0:t["Content-Type"])||(t==null?void 0:t["content-type"]))!==X.FORM_URLENCODED||!Reflect.has(e,"data")||((n=e.method)==null?void 0:n.toUpperCase())===E.GET?e:y(O({},e),{data:Ue.stringify(e.data)})}function Dt(e){var u,l,a,p,Q,ee;const{response:t,code:r,message:n}=e||{},o=(a=(l=(u=t==null?void 0:t.data)==null?void 0:u.error)==null?void 0:l.message)!=null?a:"",s=(Q=(p=e==null?void 0:e.toString)==null?void 0:p.call(e))!=null?Q:"";try{r==="ECONNABORTED"&&n.indexOf("timeout")!==-1&&D({title:"\u8BF7\u6C42\u5931\u8D25",message:e.message,type:"error"}),s!=null&&s.includes("Network Error")&&D({title:"\u7F51\u7EDC\u5F02\u5E38",message:"\u8BF7\u68C0\u67E5\u60A8\u7684\u7F51\u7EDC\u8FDE\u63A5\u662F\u5426\u6B63\u5E38\uFF01",type:"error"})}catch(Fe){throw new Error(Fe)}return vt((ee=e==null?void 0:e.response)==null?void 0:ee.status,o),Promise.reject(e)}function vt(e,t){switch(e){case 400:i.error(t);break;case 401:i.error(m["401"]),b.logout();break;case 403:i.error(m["403"]);break;case 404:i.error(m["404"]);break;case 405:i.error(m["405"]);break;case 408:i.error(m["408"]);break;case 500:i.error(m["500"]);break;case 501:i.error(m["501"]);break;case 502:i.error(m["502"]);break;case 503:i.error(m["503"]);break;case 504:i.error(m["504"]);break;case 505:i.error(m["505"]);break}}let f=new Map;class Ee{addPending(t){this.removePending(t);const r=ie(t);t.cancelToken=t.cancelToken||new H.CancelToken(n=>{f.has(r)||f.set(r,n)})}removeAllPending(){f.forEach(t=>{t&&x(t)&&t()}),f.clear()}removePending(t){const r=ie(t);if(f.has(r)){const n=f.get(r);n&&n(r),f.delete(r)}}reset(){f=new Map}}function ie(e){const t=e.params;let r="";return t&&(r=Reflect.ownKeys(t).reduce((n,o)=>(o==="_t"||(n+=o+"="+t[o]+"&"),n),"?")),[e.method,e.url,r].join("&")}function ge(e){const t=At(e)?[]:{};for(const r in e)if(Reflect.has(e,r)){const n=e[r];bt(n)?t[r]=ge(n):Tt(n)?t[r]=new Date(n):t[r]=n}return t}function Ft(e){return e.replace(/_(\w)/g,function(t,r){return r.toUpperCase()})}function R(e,t=!0){return e instanceof Array?e.forEach(function(r){R(r,t)}):e instanceof Object&&Object.keys(e).forEach(function(r){const n=Ft(r);n!==r&&(e[n]=e[r],t&&delete e[r]),R(e[n],t)}),e}class Mt{constructor(t){h(this,"config");h(this,"instance");this.config=t,this.instance=H.create(t),this.setInterceptors(this.instance)}get getConfig(){return this.config}get getinstance(){return this.instance}create(t){this.instance=H.create(t)}setHeader(t){!this.instance||Object.assign(this.instance.defaults.headers,t)}setInterceptors(t){const r=new Ee;t.interceptors.request.use(n=>{var u;const{headers:{ignoreCancelToken:o}}=n;return!(o!==void 0?o:(u=this.config.requestOptions)==null?void 0:u.ignoreCancelToken)&&r.addPending(n),n.headers.Authorization=b.getTokenState||"",n},void 0),t.interceptors.response.use(n=>(n&&r.removePending(n.config),n),Dt)}configAxios(t){!this.instance||this.create(t)}request(t,r){let n=ge(t);const{requestOptions:o}=this.config,s=Object.assign({},o,r);return n=St(n,s),n=Pt(n),new Promise((u,l)=>{this.instance.request(n).then(a=>{if(V&&x(V)){const p=V(a,s);R(p,!1),p!==T?u(p):l(new Error("request error!"));return}R(a,!1),u(a)}).catch(a=>{if(ae&&x(ae)){l(a);return}l(a)})})}get(t,r,n){return this.request({url:t,params:r,method:E.GET},n)}post(t,r,n){return this.request({url:t,params:r,method:E.POST},n)}put(t,r,n){return this.request({url:t,params:r,method:E.PUT},n)}delete(t,r,n){return this.request({url:t,params:r,method:E.DELETE},n)}}function Ct(e={}){return new Mt(O({baseURL:"/mock-api/",timeout:1e4,withCredentials:!0,headers:{"Content-Type":X.JSON},requestOptions:{isTransformRequestResult:!0,formatDate:!0,apiUrl:"",errorMessageMode:U.MESSAGE,isCacheData:!1,ignoreCancelToken:!0}},e))}const k=Ct();function Rt(e,t=U.MODEL){return k.request({url:"/login",method:"POST",params:e},{errorMessageMode:t})}function It(e){return k.get("/getuserinfo",e)}function Tr(e){return k.get("/table/list",e)}function br(e){return k.get("/table/treelist",e)}var wt=Object.defineProperty,Bt=Object.getOwnPropertyDescriptor,A=(e,t,r,n)=>{for(var o=n>1?void 0:n?Bt(t,r):t,s=e.length-1,u;s>=0;s--)(u=e[s])&&(o=(n?u(t,r,o):u(o))||o);return n&&o&&wt(t,r,o),o};const Lt="user";function ce(e){const t=localStorage.getItem(e)||"";return t.includes("{")?JSON.parse(t):t}function le(e,t){localStorage.setItem(e,JSON.stringify(t))}let d=class extends J{constructor(){super(...arguments);h(this,"token","");h(this,"userInfo",{})}get getTokenState(){return this.token||ce(oe)}get getUserInfoState(){return this.userInfo.username?this.userInfo:ce(ue)}commitToken(e){this.token=e,le(oe,e)}commitUserInfo(e){this.userInfo=e,le(ue,e)}async loginAction(e){try{const{token:t}=await Rt(e);this.commitToken(t);const r=await this.getUserInfoAction();return await w.replace(g.BASE_HOME),r}catch{return null}}logout(e=!1){e&&w.push(g.BASE_LOGIN)}async getUserInfoAction(){const e=await It({token:"token__token"});return this.commitUserInfo(e),e}async confirmLoginOut(){ke.confirm("\u6E29\u99A8\u63D0\u793A","\u662F\u5426\u786E\u8BA4\u9000\u51FA\u7CFB\u7EDF\uFF1F",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"info"}).then(()=>{this.logout(!0)}).catch(()=>{})}};A([B],d.prototype,"commitToken",1);A([B],d.prototype,"commitUserInfo",1);A([F],d.prototype,"loginAction",1);A([F],d.prototype,"logout",1);A([F],d.prototype,"getUserInfoAction",1);A([F],d.prototype,"confirmLoginOut",1);d=A([z({dynamic:!0,namespaced:!0,store:L,name:Lt})],d);const b=Y(d);var Ut=Object.defineProperty,kt=Object.getOwnPropertyDescriptor,Ae=(e,t,r,n)=>{for(var o=n>1?void 0:n?kt(t,r):t,s=e.length-1,u;s>=0;s--)(u=e[s])&&(o=(n?u(t,r,o):u(o))||o);return n&&o&&Ut(t,r,o),o};const Nt="permission";let I=class extends J{constructor(){super(...arguments);h(this,"isDynamicAddedRouteState",!1)}get getIsDynamicAddedRouteState(){return this.isDynamicAddedRouteState}commitDynamicAddedRouteState(e){this.isDynamicAddedRouteState=e}};Ae([B],I.prototype,"commitDynamicAddedRouteState",1);I=Ae([z({dynamic:!0,namespaced:!0,store:L,name:Nt})],I);const me=Y(I),q=g.BASE_LOGIN;C.exports.configure({showSpinner:!1});const $t=[q];function jt(e){e.beforeEach((t,r,n)=>{if(C.exports.start(),r.path===q&&t.name===fe.name){n(g.BASE_HOME);return}if($t.includes(t.path)){C.exports.done(),n();return}if(!b.getTokenState){const a={path:q,replace:!0};t.path&&(a.query=y(O({},a.query),{redirect:encodeURIComponent(t.fullPath)})),n(a);return}if(me.getIsDynamicAddedRouteState){n();return}const s=r.query.redirect||t.path,u=decodeURIComponent(s),l=u===t.path?y(O({},t),{replace:!0}):u;me.commitDynamicAddedRouteState(!0),n(l)}),e.afterEach(()=>{C.exports.done()})}const Vt=e=>/^(\/|#)/.test(e);function Ht(e){const t=document.body;e.afterEach(async r=>(Vt(r==null?void 0:r.href)&&t.scrollTo(0,0),!0))}const Oe={closeMessageOnSwitch:!0,removeAllHttpPending:!1};function xt(e){const{closeMessageOnSwitch:t}=Oe;e.beforeEach(async()=>{try{t&&(D.closeAll(),i.closeAll())}catch(r){console.warn("message guard error:"+r)}return!0})}function qt(e){const{removeAllHttpPending:t}=Oe;let r;t&&(r=new Ee),e.beforeEach(async()=>(t&&(r==null||r.removeAllPending()),!0))}const Te={}.VITE_GLOB_APP_TITLE;function Gt(e){console.warn(`[${Te} warn]:${e}`)}function yr(e){throw new Error(`[${Te} error]:${e}`)}function zt(){return{VITE_PUBLIC_PATH:"/",VITE_APP_TITLE:"Vele-Admin",VITE_APP_SHORT_NAME:"Vue3",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}}const Yt=()=>{const{VITE_APP_TITLE:e,VITE_API_URL:t,VITE_APP_SHORT_NAME:r,VITE_API_URL_PREFIX:n,VITE_UPLOAD_URL:o}=zt();return/[a-zA-Z\_]*/.test(r)||Gt("VITE_APP_SHORT_NAME Variables can only be characters/underscores, please modify in the environment variables and re-running."),{title:e,apiUrl:t,shortName:r,urlPrefix:n,uploadUrl:o}};function Jt(e){document.title=e;const t=navigator.userAgent;if(/\bMicroMessenger\/([\d.]+)/.test(t)&&/ip(hone|od|ad)/i.test(t)){const n=document.createElement("iframe");n.src="/favicon.ico",n.style.display="none",n.onload=function(){setTimeout(function(){n.remove()},9)},document.body.appendChild(n)}}function Kt(e,t){if(e){const r=e?` ${e} - ${t} `:`${t}`;Jt(r)}}const Wt=Yt();function Xt(e){e.afterEach(async t=>(t.name!==S&&Kt(t.meta.title,Wt.title),!0))}function Zt(e){const r=[g.BASE_HOME];e.beforeEach(async n=>{var o;if(n.name&&r.includes(n.path))try{const s=await b.getUserInfoAction(),u=((o=b.getTokenState)==null?void 0:o.split("."))||[];if(!u.length)return!0;const l=u.length>1?JSON.parse(decodeURIComponent(atob(u[1]))):"",a=l.iat*1e3,p=new Date(s.updated_at).getTime();(a<p||s.roles!==l.role_id)&&b.logout(!0)}catch(s){console.log(s)}return!0})}function Qt(e){qt(e),Ht(e),xt(e),Xt(e),jt(e),Zt(e)}const de={"./modules/about.ts":et,"./modules/components.ts":rt,"./modules/form.ts":ot,"./modules/home.ts":st,"./modules/icons.ts":it,"./modules/table.ts":lt},be=Object.keys(de).reduce((e,t)=>[...e,...de[t].default],[]),er=[...be,...Ze];Et(be);const w=Ne({history:$e(),routes:er});function tr(e){e.use(w),Qt(w)}var rr=(e,t)=>{const r=e.__vccOpts||e;for(const[n,o]of t)r[n]=o;return r};const nr={};function or(e,t){const r=je("router-view");return Ve(),He(r)}var ur=rr(nr,[["render",or]]);function sr(e){for(const t in re)e.component(t,re[t])}function ar(e){sr(e)}function N(e,{message:t="ok"}={}){return{code:0,data:e,message:t,type:"success"}}function G(e,t,r,{message:n="ok"}={}){const o=Se(e,t,r);return y(O({},N(o)),{total:r.length,message:n})}function ye(e="Request failed",{code:t=-1,result:r=null}={}){return{code:t,result:r,message:e,type:"error"}}function Se(e,t,r){const n=(e-1)*Number(t);return n+Number(t)>=r.length?r.slice(n,r.length):r.slice(n,n+Number(t))}function Pe({headers:e}){return e==null?void 0:e.authorization}var ir=Object.freeze(Object.defineProperty({__proto__:null,resultSuccess:N,resultPageSuccess:G,resultError:ye,pagination:Se,getRequestToken:Pe},Symbol.toStringTag,{value:"Module"}));const cr=(()=>new Array(50).fill("").map((e,t)=>({id:t,date:"@datetime",name:"@cname()",email:"@email",address:"@county(true)"})))(),lr=(()=>new Array(10).fill("").map((e,t)=>({id:`${t}`,date:"@date('yyyy-MM-dd')",name:"@cname()",email:"@email",address:"@province",children:new Array(Math.floor(Math.random()*20+1)).fill("").map((r,n)=>({id:`${t}-${n}`,date:"@date('yyyy-MM-dd')",name:"@cname()",email:"@email",address:"@province"}))})))();var mr=[{url:"/mock-api/table/list",timeout:100,method:"get",response:({query:e})=>{const{page:t=1,pageSize:r=20}=e;return G(t,r,cr)}},{url:"/mock-api/table/treelist",timeout:100,method:"get",response:({query:e})=>{const{page:t=1,pageSize:r=20}=e;return G(t,r,lr)}}],dr=Object.freeze(Object.defineProperty({__proto__:null,default:mr},Symbol.toStringTag,{value:"Module"}));const De=[{id:1,username:"admin",token:"user_token_1",password:"123456"},{id:2,username:"test",token:"user_token_2",password:"123456"}],pr={url:"/mock-api/login",timeout:200,method:"post",response:({body:e})=>{const{username:t,password:r}=e,n=De.find(o=>o.username===t&&o.password===r);return N(n)}},fr={url:"/mock-api/getuserinfo",method:"get",response:e=>{const t=Pe(e);if(!t)return ye("Invalid token");const r=De.find(n=>n.token===t);return N(r)}};var _r=[pr,fr],hr=Object.freeze(Object.defineProperty({__proto__:null,default:_r},Symbol.toStringTag,{value:"Module"}));const pe={"./_util.ts":ir,"./data/table.ts":dr,"./sys/user.ts":hr},ve=[];Object.keys(pe).forEach(e=>{e.includes("/_")||ve.push(...pe[e].default)});function Er(){xe(ve)}const M=qe(ur);ar(M);tr(M);dt(M);M.use(Ge);M.mount("#app");Er();export{rr as _,Or as a,br as b,Yt as c,ge as d,yr as e,Tr as g,P as i,ht as m,w as r,L as s,b as u};
