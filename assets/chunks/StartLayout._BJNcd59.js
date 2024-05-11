import{_ as m,d as p,h as r,D as d,o as l,c as u,I as i,w as g,T as f,ab as s}from"./framework.iYlBf-hB.js";const v=p({name:"StartLayout",setup(){const e=r(!1),o=r([]),n=Object.values(Object.assign({"/images/discontentment/bg01.jpg":()=>s(()=>import("./bg01.2GGotYSI.js"),__vite__mapDeps([])),"/images/discontentment/bg02.jpg":()=>s(()=>import("./bg02.-gNfajzw.js"),__vite__mapDeps([])),"/images/discontentment/bg03.jpg":()=>s(()=>import("./bg03.pC1Lr3cl.js"),__vite__mapDeps([])),"/images/discontentment/bg04.jpg":()=>s(()=>import("./bg04.r9ip7OvO.js"),__vite__mapDeps([]))})).map(t=>t());return Promise.all(n).then(t=>{t.forEach(a=>{o.value.push({src:a.default[0],srcset:`${a.default[0]} 600w, ${a.default[1]} 800w`,sizes:"600px, 800px"})}),e.value=!0}),{ready:e,images:o}}}),E={class:"start-page"};function b(e,o,_,n,t,a){const c=d("Gallery");return l(),u("div",E,[i(f,{name:"fade"},{default:g(()=>[i(c,{images:e.images},null,8,["images"])]),_:1})])}const D=m(v,[["render",b]]);export{D as S};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}