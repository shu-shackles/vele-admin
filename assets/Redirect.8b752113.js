import{q as o,a1 as c,B as p}from"./vendor.b909feb4.js";const i=o({name:"Redirect",setup(){const{currentRoute:t,replace:r}=c(),{params:a,query:n}=p(t),{path:e}=a,s=Array.isArray(e)?e.join("/"):e;return r({path:"/"+s,query:n}),{}}});export{i as default};
