import{A as f,y as C,k as c,l as n,n as l,F as k,a$ as y,bc as g,aT as v,D as w,B as A,C as s,f as a,K as _,a_ as i,aZ as r,Q as B,aQ as x}from"./index.a8cc4891.js";const Q={class:"q-pa-md"},H=l("h3",null,"\u6211\u7684\u6536\u85CF",-1),S={class:"q-pa-md column"},V=_("\u79FB\u9664"),E={__name:"CH_ArchiveView",setup(N){const t=f([]),d=C(),u=async e=>{await d.CH_deleteArchive({post:t[e].post._id})&&t.splice(e,1)};return(async()=>{try{const{data:e}=await g.get("/users/archivePost");t.splice(0,t.length),t.push(...e.result)}catch(e){console.log(e),v.fire({icon:"error",title:"\u5931\u6557",text:e.isAxiosError?e.response.data.message:e.message})}})(),(e,p)=>{const m=w("router-link");return c(),n("div",Q,[H,l("div",S,[(c(!0),n(k,null,y(t,(o,h)=>(c(),A(x,{bordered:"",class:"my-card col-12 row",key:o._id},{default:s(()=>[a(r,{class:"col-3"},{default:s(()=>[a(m,{to:"/post/"+o.post._id},{default:s(()=>[_(i(o.post.CH_title),1)]),_:2},1032,["to"])]),_:2},1024),a(r,{class:"col-8"},{default:s(()=>[l("p",null,i(o.post.CH_content),1)]),_:2},1024),a(r,{class:"col-1"},{default:s(()=>[a(B,{color:"secondary",onClick:q=>u(h)},{default:s(()=>[V]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128))])])}}};export{E as default};