var D=Object.defineProperty;var x=(e,n,o)=>n in e?D(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o;var C=(e,n,o)=>(x(e,typeof n!="symbol"?n+"":n,o),o);import{_ as f,s as j,u as A,r as F,m as U,a as z}from"./index.3d38941d.js";import{aK as h,r as t,o as u,aL as m,aR as a,M as G,g as X,V as K,b as M,A as H,b2 as y,aN as S,aS as c,aM as w,aQ as L,a$ as Q,b0 as q,aT as T,j as v,b3 as O,b4 as B,a_ as E,b5 as J,b6 as Y,aO as Z,b1 as ee,aP as ne,aV as oe}from"./vendor.02714a01.js";const te=h({name:"LayoutContent",setup(){return{}}}),se={class:"layout-content-container"};function ae(e,n,o,l,r,d){const s=t("router-view");return u(),m("div",se,[a(s)])}var re=f(te,[["render",ae],["__scopeId","data-v-009fd276"]]);const ce=h({name:"LayoutFooter",setup(){return{}}}),le={class:"layout-footer-container"};function ue(e,n,o,l,r,d){return u(),m("div",le," LayoutFooter-container ")}var ie=f(ce,[["render",ue]]),_e=Object.defineProperty,de=Object.getOwnPropertyDescriptor,$=(e,n,o,l)=>{for(var r=l>1?void 0:l?de(n,o):n,d=e.length-1,s;d>=0;d--)(s=e[d])&&(r=(l?s(n,o,r):s(r))||r);return l&&r&&_e(n,o,r),r};const pe="layout";let g=class extends K{constructor(){super(...arguments);C(this,"isCollapse",!1);C(this,"windowsHeight",0);C(this,"footerHeirght",48);C(this,"headerHeirght",48);C(this,"loadingInstance",null)}get getIsCollapse(){return this.isCollapse}get getWindowsHeight(){return this.windowsHeight}get getLoadingInstance(){return this.loadingInstance}get getContentHeight(){return this.windowsHeight-this.footerHeirght-this.headerHeirght}commitIsCollapse(e){this.isCollapse=e}commitWindowsHeight(e){e<400&&(e=400),this.windowsHeight=e}commitLoadingInstance(e){this.loadingInstance=e}setIsCollapse(e){this.commitIsCollapse(e)}setWindowsHeight(e){this.commitWindowsHeight(e)}setLoadingInstance(e){this.commitLoadingInstance(e)}};$([M],g.prototype,"commitIsCollapse",1);$([M],g.prototype,"commitWindowsHeight",1);$([M],g.prototype,"commitLoadingInstance",1);$([H],g.prototype,"setIsCollapse",1);$([H],g.prototype,"setWindowsHeight",1);$([H],g.prototype,"setLoadingInstance",1);g=$([G({dynamic:!0,namespaced:!0,store:j,name:pe})],g);const I=X(g);const me=h({name:"Breadcrumb",setup(){const e=y(()=>I.getIsCollapse),n=y(()=>e.value?"el-icon-s-unfold":"el-icon-s-fold");function o(){I.setIsCollapse(!e.value)}return{iconClass:n,changCollapse:o}}}),fe={class:"breadcrumb"};function he(e,n,o,l,r,d){const s=t("el-icon");return u(),m("div",fe,[a(s,{class:S(e.iconClass),onClick:e.changCollapse},null,8,["class","onClick"])])}var ge=f(me,[["render",he],["__scopeId","data-v-f6762e76"]]);const ve=h({setup(){const e=y(()=>A.getUserInfoState);function n(){A.confirmLoginOut()}return{logout:n,userInfo:e}}}),ye=e=>(Q("data-v-10bfff0c"),e=e(),q(),e),$e={class:"user-dropdown"},Ce={class:"el-dropdown-link"},we={class:"user-name"},Ie=ye(()=>w("i",{class:"el-icon-arrow-down el-icon--right"},null,-1)),be=T("\u4E2A\u4EBA\u4E2D\u5FC3"),Le=T("\u767B\u51FA");function Oe(e,n,o,l,r,d){const s=t("el-icon"),p=t("el-dropdown-item"),i=t("el-dropdown-menu"),_=t("el-dropdown");return u(),m("div",$e,[a(_,null,{dropdown:c(()=>[a(i,null,{default:c(()=>[a(p,{icon:"el-icon-user"},{default:c(()=>[be]),_:1}),a(p,{icon:"el-icon-switch-button",onClick:e.logout},{default:c(()=>[Le]),_:1},8,["onClick"])]),_:1})]),default:c(()=>[w("div",Ce,[a(s,{class:"el-icon-user-solid"}),w("span",we,L(e.userInfo.username),1),Ie])]),_:1})])}var Me=f(ve,[["render",Oe],["__scopeId","data-v-10bfff0c"]]);const He=h({name:"LayoutHeader",components:{Breadcrumb:ge,UserDropdown:Me},setup(){return{}}}),Se={class:"layout-header-container"};function Te(e,n,o,l,r,d){const s=t("breadcrumb"),p=t("el-col"),i=t("user-dropdown"),_=t("el-row");return u(),m("div",Se,[a(_,null,{default:c(()=>[a(p,{span:12},{default:c(()=>[a(s)]),_:1}),a(p,{span:12,class:"header-right-container"},{default:c(()=>[a(i)]),_:1})]),_:1})])}var ke=f(He,[["render",Te],["__scopeId","data-v-7ec70b74"]]);function Ae(e){console.error(e)}function P(){const{push:e}=F;function n(o){!o||e(o).catch(Ae)}return n}const Be=h({name:"MyMenuItem",props:{menu:{type:Object,default:{}}},setup(e){const n=P(),o=y(()=>e.menu.children.length>0);function l(r){n(r.path)}return{onClick:l,isSubmenu:o}}});function Ee(e,n,o,l,r,d){const s=t("MyMenuItem"),p=t("el-sub-menu"),i=t("el-menu-item");return e.isSubmenu?(u(),v(p,{key:0,index:e.menu.name},{title:c(()=>[e.menu.icon?(u(),m("i",{key:0,class:S(e.menu.icon)},null,2)):O("",!0),w("span",null,L(e.menu.title),1)]),default:c(()=>[(u(!0),m(E,null,B(e.menu.children,_=>(u(),v(s,{menu:_,key:_.path},null,8,["menu"]))),128))]),_:1},8,["index"])):(u(),v(i,{key:1,index:e.menu.name,onClick:n[0]||(n[0]=_=>e.onClick(e.menu))},{title:c(()=>[T(L(e.menu.title),1)]),default:c(()=>[e.menu.icon?(u(),m("i",{key:0,class:S(e.menu.icon)},null,2)):O("",!0)]),_:1},8,["index"]))}var Pe=f(Be,[["render",Ee]]),b;(function(e){e.BACKGROUND_COLOR="#282c34",e.TEXT_COLOR="#fff",e.ACTIVE_TEXT_COLOR="#1890ff"})(b||(b={}));function Re(){return{"background-color":b.BACKGROUND_COLOR,"text-color":b.TEXT_COLOR,"active-text-color":b.ACTIVE_TEXT_COLOR}}const Ne=h({components:{MenuItem:Pe},setup(){const e=y(()=>I.getIsCollapse),n=y(()=>U.getMenus),l=J().name;console.log(l);const r=P();function d(i){console.log(i),r(i.path)}function s(i,_){console.log(i,_)}function p(i,_){console.log(i,_)}return{menus:n,isCollapse:e,handleOpen:s,handleClose:p,getMenuColor:Re,defaultActive:l,onClick:d}}});function Ve(e,n,o,l,r,d){const s=t("MenuItem"),p=t("el-menu"),i=t("el-scrollbar");return u(),v(i,{"wrap-class":"scrollbar-wrapper"},{default:c(()=>[a(p,Y({defaultActive:e.defaultActive,class:"el-menu-vertical-demo",onOpen:e.handleOpen,onClose:e.handleClose,collapse:e.isCollapse},e.getMenuColor()),{default:c(()=>[(u(!0),m(E,null,B(e.menus,_=>(u(),v(s,{menu:_,key:_.path},null,8,["menu"]))),128))]),_:1},16,["defaultActive","onOpen","onClose","collapse"])]),_:1})}var We=f(Ne,[["render",Ve],["__scopeId","data-v-51d009aa"]]);const De=h({name:"Menu",components:{MenuBar:We},setup(){const e=y(()=>({width:I.getIsCollapse?"64px":"200px"})),{shortName:n}=z();return{appTitle:Z(n),getTitleStyle:e}}}),xe={class:"menu-container"},je={class:"menu"};function Fe(e,n,o,l,r,d){const s=t("menu-bar");return u(),m("div",xe,[w("div",{class:"app-title",style:ee(e.getTitleStyle)},L(e.appTitle),5),w("div",je,[a(s)])])}var Ue=f(De,[["render",Fe],["__scopeId","data-v-e0b2b482"]]);const ze=h({name:"Layout",components:{LayoutContent:re,LayoutFooter:ie,LayoutHeader:ke,LayoutMenu:Ue},setup(){const e=ne({header:!0,footer:!1});return oe(()=>{const n=()=>{const o=window.innerHeight||document.documentElement.clientWidth||document.body.clientHeight;I.setWindowsHeight(o)};n(),window.addEventListener("resize",n)}),{isShow:e}}});function Ge(e,n,o,l,r,d){const s=t("layout-menu"),p=t("el-aside"),i=t("layout-header"),_=t("el-header"),R=t("layout-content"),N=t("el-main"),V=t("layout-footer"),W=t("el-footer"),k=t("el-container");return u(),v(k,null,{default:c(()=>[a(p,{width:"inherit"},{default:c(()=>[a(s)]),_:1}),a(k,null,{default:c(()=>[e.isShow.header?(u(),v(_,{key:0},{default:c(()=>[a(i)]),_:1})):O("",!0),a(N,null,{default:c(()=>[a(R)]),_:1}),e.isShow.footer?(u(),v(W,{key:1},{default:c(()=>[a(V)]),_:1})):O("",!0)]),_:1})]),_:1})}var qe=f(ze,[["render",Ge],["__scopeId","data-v-d9f17f4a"]]);export{qe as default};