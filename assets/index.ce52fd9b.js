var q=Object.defineProperty,Q=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var A=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var x=(e,n,t)=>n in e?q(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,E=(e,n)=>{for(var t in n||(n={}))Y.call(n,t)&&x(e,t,n[t]);if(A)for(var t of A(n))Z.call(n,t)&&x(e,t,n[t]);return e},N=(e,n)=>Q(e,J(n));var w=(e,n,t)=>(x(e,typeof n!="symbol"?n+"":n,t),t);import{_ as v,s as ee,u as P,r as ne,m as te,b as oe}from"./index.3ef92ccf.js";import{aK as f,r as o,o as r,aL as m,aV as u,M as se,g as ae,V as ce,b as M,A as H,b6 as h,b3 as O,aU as i,aQ as $,aR as S,aO as R,aP as W,aS as V,aW as k,b7 as D,j as g,aN as j,aM as z,b8 as re,b9 as le,ba as T,aT as ue,a_ as ie}from"./vendor.f90c7c72.js";const _e=f({name:"LayoutContent",setup(){return{}}}),de={class:"layout-content-container"};function pe(e,n,t,l,s,a){const c=o("router-view");return r(),m("div",de,[u(c)])}var me=v(_e,[["render",pe],["__scopeId","data-v-04ac938a"]]);const fe=f({name:"LayoutFooter",setup(){return{}}}),he={class:"layout-footer-container"};function ge(e,n,t,l,s,a){return r(),m("div",he," LayoutFooter-container ")}var ve=v(fe,[["render",ge]]),ye=Object.defineProperty,$e=Object.getOwnPropertyDescriptor,C=(e,n,t,l)=>{for(var s=l>1?void 0:l?$e(n,t):n,a=e.length-1,c;a>=0;a--)(c=e[a])&&(s=(l?c(n,t,s):c(s))||s);return l&&s&&ye(n,t,s),s};const Ce="layout";let y=class extends ce{constructor(){super(...arguments);w(this,"isCollapse",!1);w(this,"windowsHeight",0);w(this,"footerHeirght",48);w(this,"headerHeirght",48);w(this,"loadingInstance",null)}get getIsCollapse(){return this.isCollapse}get getWindowsHeight(){return this.windowsHeight}get getLoadingInstance(){return this.loadingInstance}get getContentHeight(){return this.windowsHeight-this.footerHeirght-this.headerHeirght}commitIsCollapse(e){this.isCollapse=e}commitWindowsHeight(e){e<400&&(e=400),this.windowsHeight=e}commitLoadingInstance(e){this.loadingInstance=e}setIsCollapse(e){this.commitIsCollapse(e)}setWindowsHeight(e){this.commitWindowsHeight(e)}setLoadingInstance(e){this.commitLoadingInstance(e)}};C([M],y.prototype,"commitIsCollapse",1);C([M],y.prototype,"commitWindowsHeight",1);C([M],y.prototype,"commitLoadingInstance",1);C([H],y.prototype,"setIsCollapse",1);C([H],y.prototype,"setWindowsHeight",1);C([H],y.prototype,"setLoadingInstance",1);y=C([se({dynamic:!0,namespaced:!0,store:ee,name:Ce})],y);const b=ae(y);const we=f({name:"Breadcrumb",setup(){const e=h(()=>b.getIsCollapse),n=h(()=>e.value?"el-icon-s-unfold":"el-icon-s-fold");function t(){b.setIsCollapse(!e.value)}return{iconClass:n,changCollapse:t}}}),Ie={class:"breadcrumb"};function be(e,n,t,l,s,a){const c=o("el-icon");return r(),m("div",Ie,[u(c,{class:O(e.iconClass),onClick:e.changCollapse},null,8,["class","onClick"])])}var Le=v(we,[["render",be],["__scopeId","data-v-f6762e76"]]);const Oe=f({setup(){const e=h(()=>P.getUserInfoState);function n(){P.confirmLoginOut()}return{logout:n,userInfo:e}}}),Se=e=>(R("data-v-0fee3b9c"),e=e(),W(),e),xe={class:"user-dropdown"},Me={class:"el-dropdown-link"},He={class:"user-name"},ke=Se(()=>$("i",{class:"el-icon-arrow-down el-icon--right"},null,-1)),Te=V(" \u767B\u51FA ");function Be(e,n,t,l,s,a){const c=o("el-icon"),p=o("el-dropdown-item"),_=o("el-dropdown-menu"),d=o("el-dropdown");return r(),m("div",xe,[u(d,null,{dropdown:i(()=>[u(_,null,{default:i(()=>[u(p,{icon:"el-icon-switch-button",onClick:e.logout},{default:i(()=>[Te]),_:1},8,["onClick"])]),_:1})]),default:i(()=>[$("div",Me,[u(c,{class:"el-icon-user-solid"}),$("span",He,S(e.userInfo.username),1),ke])]),_:1})])}var Ae=v(Oe,[["render",Be],["__scopeId","data-v-0fee3b9c"]]);const Ee=f({name:"LayoutHeader",components:{Breadcrumb:Le,UserDropdown:Ae},setup(){return{}}}),Ne={class:"layout-header-container"};function Pe(e,n,t,l,s,a){const c=o("breadcrumb"),p=o("el-col"),_=o("user-dropdown"),d=o("el-row");return r(),m("div",Ne,[u(d,null,{default:i(()=>[u(p,{span:12},{default:i(()=>[u(c)]),_:1}),u(p,{span:12,class:"header-right-container"},{default:i(()=>[u(_)]),_:1})]),_:1})])}var Re=v(Ee,[["render",Pe],["__scopeId","data-v-7ec70b74"]]);const We=["xlink:href"],Ve=f({props:{prefix:{type:String,default:"icon"},name:{type:String,required:!0},size:{type:[Number,String],default:16},spin:{type:Boolean,default:!1}},setup(e){const n=e,t=h(()=>`#${n.prefix}-${n.name}`),l=h(()=>{const{size:s}=n;let a=`${s}`;return a=`${a.replace("px","")}px`,{width:a,height:a}});return(s,a)=>(r(),m("svg",{class:O(["svg-icon",s.$attrs.class,e.spin&&"svg-icon-spin"]),style:D(k(l)),"aria-hidden":"true"},[$("use",{"xlink:href":k(t)},null,8,We)],6))}});var U=v(Ve,[["__scopeId","data-v-f1db07a6"]]);function De(e){console.error(e)}function F(){const{push:e}=ne;function n(t){!t||e(t).catch(De)}return n}const je=f({name:"MyMenuItem"});function ze(e){const n=e,t=F(),l=h(()=>n.menu.children.length>0);function s(a){t(a.path)}return(a,c)=>{const p=o("MyMenuItem"),_=o("el-sub-menu"),d=o("el-menu-item");return k(l)?(r(),g(_,{key:0,index:e.menu.name},{title:i(()=>[e.menu.icon.includes("el")?(r(),m("i",{key:0,class:O(e.menu.icon)},null,2)):(r(),g(U,{key:1,name:e.menu.icon},null,8,["name"])),$("span",null,S(e.menu.title),1)]),default:i(()=>[(r(!0),m(z,null,j(e.menu.children,I=>(r(),g(p,{menu:I,key:I.path},null,8,["menu"]))),128))]),_:1},8,["index"])):(r(),g(d,{key:1,index:e.menu.name,onClick:c[0]||(c[0]=I=>s(e.menu))},{title:i(()=>[V(S(e.menu.title),1)]),default:i(()=>[e.menu.icon.includes("el")?(r(),m("i",{key:0,class:O(e.menu.icon)},null,2)):(r(),g(U,{key:1,name:e.menu.icon},null,8,["name"]))]),_:1},8,["index"]))}}const Ue=f(N(E({},je),{props:{menu:{type:Object,default:{}}},setup:ze}));var L;(function(e){e.BACKGROUND_COLOR="#282c34",e.TEXT_COLOR="#fff",e.ACTIVE_TEXT_COLOR="#1890ff"})(L||(L={}));function Fe(){return{"background-color":L.BACKGROUND_COLOR,"text-color":L.TEXT_COLOR,"active-text-color":L.ACTIVE_TEXT_COLOR}}const Ge=f({components:{MenuItem:Ue},setup(){const e=h(()=>b.getIsCollapse),n=h(()=>te.getMenus),l=re().name,s=F();function a(_){s(_.path)}function c(_,d){console.log(_,d)}function p(_,d){console.log(_,d)}return{menus:n,isCollapse:e,handleOpen:c,handleClose:p,getMenuColor:Fe,defaultActive:l,onClick:a}}});function Xe(e,n,t,l,s,a){const c=o("MenuItem"),p=o("el-menu"),_=o("el-scrollbar");return r(),g(_,{"wrap-class":"scrollbar-wrapper"},{default:i(()=>[u(p,le({defaultActive:e.defaultActive,class:"el-menu-vertical-demo",onOpen:e.handleOpen,onClose:e.handleClose,collapse:e.isCollapse},e.getMenuColor()),{default:i(()=>[(r(!0),m(z,null,j(e.menus,d=>(r(),g(c,{menu:d,key:d.path},null,8,["menu"]))),128))]),_:1},16,["defaultActive","onOpen","onClose","collapse"])]),_:1})}var Ke=v(Ge,[["render",Xe],["__scopeId","data-v-443b01ab"]]),qe="/assets/logo.a67ad87f.svg";const Qe=f({name:"Menu",components:{MenuBar:Ke},setup(){const e=h(()=>b.getIsCollapse),n=h(()=>({width:e.value?"64px":"200px"})),{shortName:t,title:l}=oe();return{appTitle:h(()=>l),getTitleStyle:n,isCollapse:e}}}),Je=e=>(R("data-v-44b6dac3"),e=e(),W(),e),Ye={class:"menu-container"},Ze=Je(()=>$("img",{src:qe},null,-1)),en={key:0},nn={class:"menu"};function tn(e,n,t,l,s,a){const c=o("menu-bar");return r(),m("div",Ye,[$("div",{class:"app-title",style:D(e.getTitleStyle),onClick:n[0]||(n[0]=p=>e.$router.push("/"))},[Ze,e.isCollapse?T("",!0):(r(),m("span",en,S(e.appTitle),1))],4),$("div",nn,[u(c)])])}var on=v(Qe,[["render",tn],["__scopeId","data-v-44b6dac3"]]);const sn=f({name:"Layout",components:{LayoutContent:me,LayoutFooter:ve,LayoutHeader:Re,LayoutMenu:on},setup(){const e=ue({header:!0,footer:!1});return ie(()=>{const n=()=>{const t=window.innerHeight||document.documentElement.clientWidth||document.body.clientHeight;b.setWindowsHeight(t)};n(),window.addEventListener("resize",n)}),{isShow:e}}});function an(e,n,t,l,s,a){const c=o("layout-menu"),p=o("el-aside"),_=o("layout-header"),d=o("el-header"),I=o("layout-content"),G=o("el-main"),X=o("layout-footer"),K=o("el-footer"),B=o("el-container");return r(),g(B,null,{default:i(()=>[u(p,{width:"inherit"},{default:i(()=>[u(c)]),_:1}),u(B,null,{default:i(()=>[e.isShow.header?(r(),g(d,{key:0},{default:i(()=>[u(_)]),_:1})):T("",!0),u(G,null,{default:i(()=>[u(I)]),_:1}),e.isShow.footer?(r(),g(K,{key:1},{default:i(()=>[u(X)]),_:1})):T("",!0)]),_:1})]),_:1})}var un=v(sn,[["render",an],["__scopeId","data-v-d9f17f4a"]]);export{un as default};
