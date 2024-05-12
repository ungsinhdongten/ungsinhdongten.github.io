function o(t){return[...t].sort((e,r)=>{const a=new Date(e.frontmatter.date).getTime();return new Date(r.frontmatter.date).getTime()-a})}export{o as g};
