var Fe=Object.defineProperty,Re=Object.defineProperties;var Ce=Object.getOwnPropertyDescriptors;var te=Object.getOwnPropertySymbols;var Ie=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable;var j=(e,t,r)=>t in e?Fe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,O=(e,t)=>{for(var r in t||(t={}))Ie.call(t,r)&&j(e,r,t[r]);if(te)for(var r of te(t))we.call(t,r)&&j(e,r,t[r]);return e},D=(e,t)=>Re(e,Ce(t));var h=(e,t,r)=>(j(e,typeof t!="symbol"?t+"":t,r),r);import{c as Be,a as Le,M as z,g as Y,b as B,A as M,V as J,E as P,d as i,l as Ue,e as H,f as ke,n as R,h as Ne,i as je,r as $e,o as Ve,j as He,I as re,k as xe,m as qe,p as Ge}from"./vendor.3f72d0a7.js";const ze=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}};ze();const Ye="modulepreload",ne={},Je="/",c=function(t,r){return!r||r.length===0?t():Promise.all(r.map(n=>{if(n=`${Je}${n}`,n in ne)return;ne[n]=!0;const o=n.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${s}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":Ye,o||(u.as="script",u.crossOrigin=""),u.href=n,document.head.appendChild(u),o)return new Promise((l,a)=>{u.addEventListener("load",l),u.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>t())};var g=(e=>(e.BASE_HOME="/home",e.BASE_LOGIN="/login",e))(g||{});const y="Redirect",p=()=>c(()=>import("./index.c6ceb790.js"),["assets/index.c6ceb790.js","assets/index.ab75ef69.css","assets/vendor.3f72d0a7.js"]),Ke={path:"/redirect",name:y,component:p,meta:{title:y,hideBreadcrumb:!0},children:[{path:"/redirect/:path(.*)",name:y,component:()=>c(()=>import("./Redirect.02fb084e.js"),["assets/Redirect.02fb084e.js","assets/vendor.3f72d0a7.js"]),meta:{title:y,hideBreadcrumb:!0}}]},_e={path:"/:path(.*)*",name:"ErrorPage",component:p,meta:{title:"ErrorPage",hideBreadcrumb:!0},children:[{path:"/:path(.*)*",name:"ErrorPage",component:()=>c(()=>import("./404.1c5bf1cd.js"),["assets/404.1c5bf1cd.js","assets/404.8f188612.css","assets/vendor.3f72d0a7.js"]),meta:{title:"ErrorPage",hideBreadcrumb:!0}}]},We={path:"/",name:"Root",redirect:g.BASE_HOME,meta:{title:"Root"}},Xe={path:"/login",name:"Login",component:()=>c(()=>import("./Login.bf09a699.js"),["assets/Login.bf09a699.js","assets/Login.aa53a475.css","assets/vendor.3f72d0a7.js"]),meta:{title:"\u767B\u5F55"}};var Ze=[We,Xe,_e,Ke];const Qe=[{path:"/about",name:"About",component:p,redirect:"/about/index",meta:{title:"\u5173\u4E8E\u6211",icon:"user",menuNum:100},children:[{path:"index",name:"About",component:()=>c(()=>import("./About.6d202958.js"),["assets/About.6d202958.js","assets/About.3c679e20.css","assets/vendor.3f72d0a7.js"]),meta:{title:"\u5173\u4E8E\u6211",hideMenu:!0}}]}];var et=Object.freeze(Object.defineProperty({__proto__:null,default:Qe},Symbol.toStringTag,{value:"Module"}));const tt=[{path:"/comps",name:"Components",component:p,redirect:"/comps/dialog",meta:{title:"\u7EC4\u4EF6",icon:"Grid",menuNum:70},children:[{path:"dialog",name:"Dialog",component:()=>c(()=>import("./Dialog.0a93d038.js"),["assets/Dialog.0a93d038.js","assets/vendor.3f72d0a7.js","assets/vue.60829ce4.js"]),meta:{title:"\u5F39\u7A97"}},{path:"drawer",name:"Drawer",component:()=>c(()=>import("./Drawer.c75c99d4.js"),["assets/Drawer.c75c99d4.js","assets/vendor.3f72d0a7.js","assets/vue.60829ce4.js"]),meta:{title:"\u62BD\u5C49"}}]}];var rt=Object.freeze(Object.defineProperty({__proto__:null,default:tt},Symbol.toStringTag,{value:"Module"}));const nt=[{path:"/demo",name:"Demo",component:p,redirect:"/demo/draggable",meta:{title:"Demos",icon:"Monitor",menuNum:50},children:[{path:"draggable",name:"Draggable",component:()=>c(()=>import("./VueDraggable.69ca0ec8.js"),["assets/VueDraggable.69ca0ec8.js","assets/vendor.3f72d0a7.js"]),meta:{title:"\u7EC4\u4EF6\u62D6\u62FD"}}]}];var ot=Object.freeze(Object.defineProperty({__proto__:null,default:nt},Symbol.toStringTag,{value:"Module"}));const ut=[{path:"/form",name:"Form",component:p,redirect:"/form/step",meta:{title:"\u8868\u5355",icon:"Tickets",menuNum:50},children:[{path:"base",name:"BaseForm",component:()=>c(()=>import("./BaseForm.0a310de9.js"),["assets/BaseForm.0a310de9.js","assets/vendor.3f72d0a7.js"]),meta:{title:"\u57FA\u7840\u8868\u5355"}},{path:"step",name:"StepForm",component:()=>c(()=>import("./StepForm.ae9245f5.js"),["assets/StepForm.ae9245f5.js","assets/StepForm.7511213c.css","assets/vendor.3f72d0a7.js"]),meta:{title:"\u5206\u5E03\u8868\u5355"}},{path:"use-form",name:"UseForm",component:()=>c(()=>import("./UseForm.d6df63d8.js"),["assets/UseForm.d6df63d8.js","assets/vendor.3f72d0a7.js","assets/log.b4d653eb.js"]),meta:{title:"UseForm"}}]}];var st=Object.freeze(Object.defineProperty({__proto__:null,default:ut},Symbol.toStringTag,{value:"Module"}));const at=[{path:"/home",name:"Home",component:p,redirect:"/home/index",meta:{title:"\u5206\u6790\u9875",icon:"House",menuNum:10},children:[{path:"index",name:"Home",component:()=>c(()=>import("./Home.9dfd8fcb.js"),["assets/Home.9dfd8fcb.js","assets/Home.2e82c08d.css","assets/vendor.3f72d0a7.js"]),meta:{title:"\u5206\u6790\u9875",hideMenu:!0}}]}];var it=Object.freeze(Object.defineProperty({__proto__:null,default:at},Symbol.toStringTag,{value:"Module"}));const ct=[{path:"/icon",name:"Icon",component:p,redirect:"/icon/index",meta:{title:"\u56FE\u6807",icon:"Eleme",menuNum:10},children:[{path:"index",name:"Icon",component:()=>c(()=>import("./Icon.3dc476e4.js"),["assets/Icon.3dc476e4.js","assets/Icon.f9afff52.css","assets/vendor.3f72d0a7.js"]),meta:{title:"\u56FE\u6807",hideMenu:!0}}]}];var lt=Object.freeze(Object.defineProperty({__proto__:null,default:ct},Symbol.toStringTag,{value:"Module"}));const mt=[{path:"/table",name:"Table",component:p,redirect:"/table/normal",meta:{title:"\u8868\u683C",icon:"SetUp",menuNum:30},children:[{path:"normal",name:"NormalTable",component:()=>c(()=>import("./NormalTable.0fec0f0b.js"),["assets/NormalTable.0fec0f0b.js","assets/NormalTable.3341d676.css","assets/TableHeader.0c62e297.js","assets/TableHeader.6b9b9461.css","assets/vendor.3f72d0a7.js"]),meta:{title:"\u666E\u901A\u8868\u683C"}},{path:"tree",name:"TreeTable",component:()=>c(()=>import("./TreeTable.4e08d7d4.js"),["assets/TreeTable.4e08d7d4.js","assets/TableHeader.0c62e297.js","assets/TableHeader.6b9b9461.css","assets/vendor.3f72d0a7.js"]),meta:{title:"\u6811\u578B\u8868\u683C"}},{path:"use",name:"UseTable",component:()=>c(()=>import("./UseTable.568eb28c.js"),["assets/UseTable.568eb28c.js","assets/vendor.3f72d0a7.js","assets/log.b4d653eb.js","assets/TableHeader.0c62e297.js","assets/TableHeader.6b9b9461.css"]),meta:{title:"UseTable"}}]}];var dt=Object.freeze(Object.defineProperty({__proto__:null,default:mt},Symbol.toStringTag,{value:"Module"}));function pt(){return!1}function br(){return!0}Be.rawError=!0;const L=Le({strict:pt()});function _t(e){e.use(L)}var ft=Object.defineProperty,ht=Object.getOwnPropertyDescriptor,K=(e,t,r,n)=>{for(var o=n>1?void 0:n?ht(t,r):t,s=e.length-1,u;s>=0;s--)(u=e[s])&&(o=(n?u(t,r,o):u(o))||o);return n&&o&&ft(t,r,o),o};const Et="menu";let v=class extends J{constructor(){super(...arguments);h(this,"menus",[])}get getMenus(){return this.menus}get getAllMenus(){return this.menus.reduce((e,t)=>[...e,t,...t.children],[])}commitMenus(e){this.menus=e}setMenusAction(e){this.commitMenus(e)}};K([B],v.prototype,"commitMenus",1);K([M],v.prototype,"setMenusAction",1);v=K([z({dynamic:!0,namespaced:!0,store:L,name:Et})],v);const gt=Y(v);function At(e){const t=fe(e);gt.setMenusAction(t)}function fe(e,t=""){const r=[];return e.sort((n,o)=>n.meta.menuNum&&o.meta.menuNum?n.meta.menuNum-o.meta.menuNum:1),e.forEach(n=>{if(!n.meta.hideMenu){const o={path:t?Ot([t,n.path]):n.path,title:n.meta.title,name:n.name,icon:n.meta.icon||"",children:[]};n.children&&n.children.length!==0&&(o.children=fe(n.children,o.path)),r.push(o)}}),r}function Ot(e){return e.reduce((t,r)=>(t=t.trim().replace("/",""),r=r.trim().replace("/",""),`/${t}/${r}`))}const oe="TOKEN__",ue="USER__INFO__";var W=(e=>(e[e.SUCCESS=1e4]="SUCCESS",e[e.ERROR=10001]="ERROR",e[e.TIMEOUT=401]="TIMEOUT",e.TYPE="success",e))(W||{}),U=(e=>(e.MESSAGE="message",e.MODEL="model",e))(U||{}),E=(e=>(e.GET="GET",e.POST="POST",e.PUT="PUT",e.DELETE="DELETE",e))(E||{}),X=(e=>(e.JSON="application/json;charset=UTF-8",e.FORM_URLENCODED="application/x-www-form-urlencoded;charset=UTF-8",e.FORM_DATA="multipart/form-data;charset=UTF-8",e))(X||{});function Z(e,t){return toString.call(e)===`[object ${t}]`}function S(e){return Z(e,"String")}function x(e){return typeof e=="function"}function Tt(e){return e&&Array.isArray(e)}function bt(e){return e!==null&&Z(e,"Object")}function Dt(e){return Z(e,"Date")}function yt(e){return typeof e=="object"}function se(e=!1){const t=new Date().getTime();return e?`?_t=${t}`:{_t:t}}const St="YYYY-MM-DD HH:mm";function he(e){for(const t in e){if(e[t]&&e[t]._isAMomentObject&&(e[t]=e[t].format(St)),S(t)){const r=e[t];if(r)try{e[t]=S(r)?r.trim():r}catch(n){throw new Error(n)}}bt(e[t])&&he(e[t])}}const T="__ERROR_RESULT__",m={"401":"\u7528\u6237\u6CA1\u6709\u6743\u9650\uFF08\u4EE4\u724C\u3001\u7528\u6237\u540D\u3001\u5BC6\u7801\u9519\u8BEF\uFF09!","403":"\u7528\u6237\u5F97\u5230\u6388\u6743\uFF0C\u4F46\u662F\u8BBF\u95EE\u662F\u88AB\u7981\u6B62\u7684!","404":"\u7F51\u7EDC\u8BF7\u6C42\u9519\u8BEF,\u672A\u627E\u5230\u8BE5\u8D44\u6E90!","405":"\u7F51\u7EDC\u8BF7\u6C42\u9519\u8BEF,\u8BF7\u6C42\u65B9\u6CD5\u672A\u5141\u8BB8!","408":"\u7F51\u7EDC\u8BF7\u6C42\u8D85\u65F6!","500":"\u670D\u52A1\u5668\u9519\u8BEF,\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458!","501":"\u7F51\u7EDC\u672A\u5B9E\u73B0!","502":"\u7F51\u7EDC\u9519\u8BEF!","503":"\u670D\u52A1\u4E0D\u53EF\u7528\uFF0C\u670D\u52A1\u5668\u6682\u65F6\u8FC7\u8F7D\u6216\u7EF4\u62A4!","504":"\u7F51\u7EDC\u8D85\u65F6!","505":"http\u7248\u672C\u4E0D\u652F\u6301\u8BE5\u8BF7\u6C42!"};function $(e){return 1e4+e%1e4===W.SUCCESS}function Pt(e,t){var u;const{isCacheData:r,apiUrl:n,formatDate:o}=t;n&&S(n)&&(e.url=`${n}${e.url}`);const s=e.params||{};return((u=e.method)==null?void 0:u.toUpperCase())===E.GET?S(s)?(e.url=e.url+s+`${r?"":se(!0)}`,e.params=void 0):!r&&(e.params=Object.assign(s||{},se(!1))):S(s)?(e.url=e.url+s,e.params=void 0):(o&&he(s),e.data=s,e.params=void 0),e}const V=(e,t)=>{const{isTransformRequestResult:r}=t;if(!r)return e.data;if(!e.data)return T;const{code:n,data:o,message:s}=e.data,u=s||e.data.msg;if(!($(n)&&(o||u)))return u&&(t.errorMessageMode===U.MODEL?P({title:"\u9519\u8BEF\u63D0\u793A",message:u}):t.errorMessageMode==="message"&&i.error(u)),Promise.reject(new Error(u)),T;if($(n))return o||u;if(n===W.TIMEOUT){const a="\u767B\u5F55\u8D85\u65F6,\u8BF7\u91CD\u65B0\u767B\u5F55!";return P({title:"\u64CD\u4F5C\u5931\u8D25",message:a}),Promise.reject(new Error(a)),T}if(!$(n)){if(u)i.error(u),Promise.reject(new Error(u));else{const a="\u64CD\u4F5C\u5931\u8D25,\u7CFB\u7EDF\u5F02\u5E38!";i.error(a),Promise.reject(new Error(a))}return T}return T};function ae(e){return e}function vt(e){var n;const t=e==null?void 0:e.headers;return((t==null?void 0:t["Content-Type"])||(t==null?void 0:t["content-type"]))!==X.FORM_URLENCODED||!Reflect.has(e,"data")||((n=e.method)==null?void 0:n.toUpperCase())===E.GET?e:D(O({},e),{data:Ue.stringify(e.data)})}function Mt(e){var u,l,a,_,Q,ee;const{response:t,code:r,message:n}=e||{},o=(a=(l=(u=t==null?void 0:t.data)==null?void 0:u.error)==null?void 0:l.message)!=null?a:"",s=(Q=(_=e==null?void 0:e.toString)==null?void 0:_.call(e))!=null?Q:"";try{r==="ECONNABORTED"&&n.indexOf("timeout")!==-1&&P({title:"\u8BF7\u6C42\u5931\u8D25",message:e.message,type:"error"}),s!=null&&s.includes("Network Error")&&P({title:"\u7F51\u7EDC\u5F02\u5E38",message:"\u8BF7\u68C0\u67E5\u60A8\u7684\u7F51\u7EDC\u8FDE\u63A5\u662F\u5426\u6B63\u5E38\uFF01",type:"error"})}catch(Me){throw new Error(Me)}return Ft((ee=e==null?void 0:e.response)==null?void 0:ee.status,o),Promise.reject(e)}function Ft(e,t){switch(e){case 400:i.error(t);break;case 401:i.error(m["401"]),b.logout();break;case 403:i.error(m["403"]);break;case 404:i.error(m["404"]);break;case 405:i.error(m["405"]);break;case 408:i.error(m["408"]);break;case 500:i.error(m["500"]);break;case 501:i.error(m["501"]);break;case 502:i.error(m["502"]);break;case 503:i.error(m["503"]);break;case 504:i.error(m["504"]);break;case 505:i.error(m["505"]);break}}let f=new Map;class Ee{addPending(t){this.removePending(t);const r=ie(t);t.cancelToken=t.cancelToken||new H.CancelToken(n=>{f.has(r)||f.set(r,n)})}removeAllPending(){f.forEach(t=>{t&&x(t)&&t()}),f.clear()}removePending(t){const r=ie(t);if(f.has(r)){const n=f.get(r);n&&n(r),f.delete(r)}}reset(){f=new Map}}function ie(e){const t=e.params;let r="";return t&&(r=Reflect.ownKeys(t).reduce((n,o)=>(o==="_t"||(n+=o+"="+t[o]+"&"),n),"?")),[e.method,e.url,r].join("&")}function ge(e){const t=Tt(e)?[]:{};for(const r in e)if(Reflect.has(e,r)){const n=e[r];yt(n)?t[r]=ge(n):Dt(n)?t[r]=new Date(n):t[r]=n}return t}function Rt(e){return e.replace(/_(\w)/g,function(t,r){return r.toUpperCase()})}function C(e,t=!0){return e instanceof Array?e.forEach(function(r){C(r,t)}):e instanceof Object&&Object.keys(e).forEach(function(r){const n=Rt(r);n!==r&&(e[n]=e[r],t&&delete e[r]),C(e[n],t)}),e}class Ct{constructor(t){h(this,"config");h(this,"instance");this.config=t,this.instance=H.create(t),this.setInterceptors(this.instance)}get getConfig(){return this.config}get getinstance(){return this.instance}create(t){this.instance=H.create(t)}setHeader(t){!this.instance||Object.assign(this.instance.defaults.headers,t)}setInterceptors(t){const r=new Ee;t.interceptors.request.use(n=>{var u;const{headers:{ignoreCancelToken:o}}=n;return!(o!==void 0?o:(u=this.config.requestOptions)==null?void 0:u.ignoreCancelToken)&&r.addPending(n),n.headers.Authorization=b.getTokenState||"",n},void 0),t.interceptors.response.use(n=>(n&&r.removePending(n.config),n),Mt)}configAxios(t){!this.instance||this.create(t)}request(t,r){let n=ge(t);const{requestOptions:o}=this.config,s=Object.assign({},o,r);return n=Pt(n,s),n=vt(n),new Promise((u,l)=>{this.instance.request(n).then(a=>{if(V&&x(V)){const _=V(a,s);C(_,!1),_!==T?u(_):l(new Error("request error!"));return}C(a,!1),u(a)}).catch(a=>{if(ae&&x(ae)){l(a);return}l(a)})})}get(t,r,n){return this.request({url:t,params:r,method:E.GET},n)}post(t,r,n){return this.request({url:t,params:r,method:E.POST},n)}put(t,r,n){return this.request({url:t,params:r,method:E.PUT},n)}delete(t,r,n){return this.request({url:t,params:r,method:E.DELETE},n)}}function It(e={}){return new Ct(O({baseURL:"/mock-api/",timeout:1e4,withCredentials:!0,headers:{"Content-Type":X.JSON},requestOptions:{isTransformRequestResult:!0,formatDate:!0,apiUrl:"",errorMessageMode:U.MESSAGE,isCacheData:!1,ignoreCancelToken:!0}},e))}const k=It();function wt(e,t=U.MODEL){return k.request({url:"/login",method:"POST",params:e},{errorMessageMode:t})}function Bt(e){return k.get("/getuserinfo",e)}function Dr(e){return k.get("/table/list",e)}function yr(e){return k.get("/table/treelist",e)}var Lt=Object.defineProperty,Ut=Object.getOwnPropertyDescriptor,A=(e,t,r,n)=>{for(var o=n>1?void 0:n?Ut(t,r):t,s=e.length-1,u;s>=0;s--)(u=e[s])&&(o=(n?u(t,r,o):u(o))||o);return n&&o&&Lt(t,r,o),o};const kt="user";function ce(e){const t=localStorage.getItem(e)||"";return t.includes("{")?JSON.parse(t):t}function le(e,t){localStorage.setItem(e,JSON.stringify(t))}let d=class extends J{constructor(){super(...arguments);h(this,"token","");h(this,"userInfo",{})}get getTokenState(){return this.token||ce(oe)}get getUserInfoState(){return this.userInfo.username?this.userInfo:ce(ue)}commitToken(e){this.token=e,le(oe,e)}commitUserInfo(e){this.userInfo=e,le(ue,e)}async loginAction(e){try{const{token:t}=await wt(e);this.commitToken(t);const r=await this.getUserInfoAction();return await w.replace(g.BASE_HOME),r}catch{return null}}logout(e=!1){e&&w.push(g.BASE_LOGIN)}async getUserInfoAction(){const e=await Bt({token:"token__token"});return this.commitUserInfo(e),e}async confirmLoginOut(){ke.confirm("\u6E29\u99A8\u63D0\u793A","\u662F\u5426\u786E\u8BA4\u9000\u51FA\u7CFB\u7EDF\uFF1F",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"info"}).then(()=>{this.logout(!0)}).catch(()=>{})}};A([B],d.prototype,"commitToken",1);A([B],d.prototype,"commitUserInfo",1);A([M],d.prototype,"loginAction",1);A([M],d.prototype,"logout",1);A([M],d.prototype,"getUserInfoAction",1);A([M],d.prototype,"confirmLoginOut",1);d=A([z({dynamic:!0,namespaced:!0,store:L,name:kt})],d);const b=Y(d);var Nt=Object.defineProperty,jt=Object.getOwnPropertyDescriptor,Ae=(e,t,r,n)=>{for(var o=n>1?void 0:n?jt(t,r):t,s=e.length-1,u;s>=0;s--)(u=e[s])&&(o=(n?u(t,r,o):u(o))||o);return n&&o&&Nt(t,r,o),o};const $t="permission";let I=class extends J{constructor(){super(...arguments);h(this,"isDynamicAddedRouteState",!1)}get getIsDynamicAddedRouteState(){return this.isDynamicAddedRouteState}commitDynamicAddedRouteState(e){this.isDynamicAddedRouteState=e}};Ae([B],I.prototype,"commitDynamicAddedRouteState",1);I=Ae([z({dynamic:!0,namespaced:!0,store:L,name:$t})],I);const me=Y(I),q=g.BASE_LOGIN;R.exports.configure({showSpinner:!1});const Vt=[q];function Ht(e){e.beforeEach((t,r,n)=>{if(R.exports.start(),r.path===q&&t.name===_e.name){n(g.BASE_HOME);return}if(Vt.includes(t.path)){R.exports.done(),n();return}if(!b.getTokenState){const a={path:q,replace:!0};t.path&&(a.query=D(O({},a.query),{redirect:encodeURIComponent(t.fullPath)})),n(a);return}if(me.getIsDynamicAddedRouteState){n();return}const s=r.query.redirect||t.path,u=decodeURIComponent(s),l=u===t.path?D(O({},t),{replace:!0}):u;me.commitDynamicAddedRouteState(!0),n(l)}),e.afterEach(()=>{R.exports.done()})}const xt=e=>/^(\/|#)/.test(e);function qt(e){const t=document.body;e.afterEach(async r=>(xt(r==null?void 0:r.href)&&t.scrollTo(0,0),!0))}const Oe={closeMessageOnSwitch:!0,removeAllHttpPending:!1};function Gt(e){const{closeMessageOnSwitch:t}=Oe;e.beforeEach(async()=>{try{t&&(P.closeAll(),i.closeAll())}catch(r){console.warn("message guard error:"+r)}return!0})}function zt(e){const{removeAllHttpPending:t}=Oe;let r;t&&(r=new Ee),e.beforeEach(async()=>(t&&(r==null||r.removeAllPending()),!0))}const Te={}.VITE_GLOB_APP_TITLE;function Yt(e){console.warn(`[${Te} warn]:${e}`)}function Sr(e){throw new Error(`[${Te} error]:${e}`)}function Jt(){return{VITE_PUBLIC_PATH:"/",VITE_APP_TITLE:"Vele-Admin",VITE_APP_SHORT_NAME:"Vue3",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}}const Kt=()=>{const{VITE_APP_TITLE:e,VITE_API_URL:t,VITE_APP_SHORT_NAME:r,VITE_API_URL_PREFIX:n,VITE_UPLOAD_URL:o}=Jt();return/[a-zA-Z\_]*/.test(r)||Yt("VITE_APP_SHORT_NAME Variables can only be characters/underscores, please modify in the environment variables and re-running."),{title:e,apiUrl:t,shortName:r,urlPrefix:n,uploadUrl:o}};function Wt(e){document.title=e;const t=navigator.userAgent;if(/\bMicroMessenger\/([\d.]+)/.test(t)&&/ip(hone|od|ad)/i.test(t)){const n=document.createElement("iframe");n.src="/favicon.ico",n.style.display="none",n.onload=function(){setTimeout(function(){n.remove()},9)},document.body.appendChild(n)}}function Xt(e,t){if(e){const r=e?` ${e} - ${t} `:`${t}`;Wt(r)}}const Zt=Kt();function Qt(e){e.afterEach(async t=>(t.name!==y&&Xt(t.meta.title,Zt.title),!0))}function er(e){const r=[g.BASE_HOME];e.beforeEach(async n=>{var o;if(n.name&&r.includes(n.path))try{const s=await b.getUserInfoAction(),u=((o=b.getTokenState)==null?void 0:o.split("."))||[];if(!u.length)return!0;const l=u.length>1?JSON.parse(decodeURIComponent(atob(u[1]))):"",a=l.iat*1e3,_=new Date(s.updated_at).getTime();(a<_||s.roles!==l.role_id)&&b.logout(!0)}catch(s){console.log(s)}return!0})}function tr(e){zt(e),qt(e),Gt(e),Qt(e),Ht(e),er(e)}const de={"./modules/about.ts":et,"./modules/components.ts":rt,"./modules/demos.ts":ot,"./modules/form.ts":st,"./modules/home.ts":it,"./modules/icons.ts":lt,"./modules/table.ts":dt},be=Object.keys(de).reduce((e,t)=>[...e,...de[t].default],[]),rr=[...be,...Ze];At(be);const w=Ne({history:je(),routes:rr});function nr(e){e.use(w),tr(w)}var or=(e,t)=>{const r=e.__vccOpts||e;for(const[n,o]of t)r[n]=o;return r};const ur={};function sr(e,t){const r=$e("router-view");return Ve(),He(r)}var ar=or(ur,[["render",sr]]);function ir(e){for(const t in re)e.component(t,re[t])}function cr(e){ir(e)}function N(e,{message:t="ok"}={}){return{code:0,data:e,message:t,type:"success"}}function G(e,t,r,{message:n="ok"}={}){const o=ye(e,t,r);return D(O({},N(o)),{total:r.length,message:n})}function De(e="Request failed",{code:t=-1,result:r=null}={}){return{code:t,result:r,message:e,type:"error"}}function ye(e,t,r){const n=(e-1)*Number(t);return n+Number(t)>=r.length?r.slice(n,r.length):r.slice(n,n+Number(t))}function Se({headers:e}){return e==null?void 0:e.authorization}var lr=Object.freeze(Object.defineProperty({__proto__:null,resultSuccess:N,resultPageSuccess:G,resultError:De,pagination:ye,getRequestToken:Se},Symbol.toStringTag,{value:"Module"}));const mr=(()=>new Array(50).fill("").map((e,t)=>({id:t,date:"@datetime",name:"@cname()",email:"@email",address:"@county(true)"})))(),dr=(()=>new Array(10).fill("").map((e,t)=>({id:`${t}`,date:"@date('yyyy-MM-dd')",name:"@cname()",email:"@email",address:"@province",children:new Array(Math.floor(Math.random()*20+1)).fill("").map((r,n)=>({id:`${t}-${n}`,date:"@date('yyyy-MM-dd')",name:"@cname()",email:"@email",address:"@province"}))})))();var pr=[{url:"/mock-api/table/list",timeout:100,method:"get",response:({query:e})=>{const{page:t=1,pageSize:r=20}=e;return G(t,r,mr)}},{url:"/mock-api/table/treelist",timeout:100,method:"get",response:({query:e})=>{const{page:t=1,pageSize:r=20}=e;return G(t,r,dr)}}],_r=Object.freeze(Object.defineProperty({__proto__:null,default:pr},Symbol.toStringTag,{value:"Module"}));const Pe=[{id:1,username:"admin",token:"user_token_1",password:"123456"},{id:2,username:"test",token:"user_token_2",password:"123456"}],fr={url:"/mock-api/login",timeout:200,method:"post",response:({body:e})=>{const{username:t,password:r}=e,n=Pe.find(o=>o.username===t&&o.password===r);return N(n)}},hr={url:"/mock-api/getuserinfo",method:"get",response:e=>{const t=Se(e);if(!t)return De("Invalid token");const r=Pe.find(n=>n.token===t);return N(r)}};var Er=[fr,hr],gr=Object.freeze(Object.defineProperty({__proto__:null,default:Er},Symbol.toStringTag,{value:"Module"}));const pe={"./_util.ts":lr,"./data/table.ts":_r,"./sys/user.ts":gr},ve=[];Object.keys(pe).forEach(e=>{e.includes("/_")||ve.push(...pe[e].default)});function Ar(){xe(ve)}const F=qe(ar);cr(F);nr(F);_t(F);F.use(Ge);F.mount("#app");Ar();export{or as _,br as a,yr as b,Kt as c,ge as d,Sr as e,Dr as g,S as i,gt as m,w as r,L as s,b as u};
