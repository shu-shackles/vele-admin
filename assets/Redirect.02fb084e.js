import{q as o,an as c,O as p}from"./vendor.3f72d0a7.js";const i=o({name:"Redirect",setup(){const{currentRoute:t,replace:r}=c(),{params:a,query:n}=p(t),{path:e}=a,s=Array.isArray(e)?e.join("/"):e;return r({path:"/"+s,query:n}),{}}});export{i as default};
