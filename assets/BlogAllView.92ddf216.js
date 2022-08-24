import{Q as c,a as w,b as p}from"./QTabPanels.67a5ffc2.js";import{Q as T}from"./QTabs.ba4006ba.js";import{Q as h}from"./QImg.7433367a.js";import{A as y,r as V,l as a,m as i,p as o,f as t,C as s,D as q,B as g,E as u,F as v,aZ as b,aQ as x,aX as n,K as m,aY as d}from"./index.049d7952.js";import{Q as B}from"./QSplitter.4130e6c8.js";import{a as F,S as P}from"./user.ae2e6362.js";import{a as S}from"./aos.2e9a6e46.js";import"./use-panel.46993b9d.js";import"./touch.70a9dd44.js";import"./selection.c5927061.js";import"./use-cache.b0833c75.js";import"./QResizeObserver.04897a7f.js";import"./rtl.4b414a6d.js";import"./TouchPan.cac13427.js";const $={id:"BlogAllView"},H={class:"insideView"},I=o("div",{class:"text-h1 q-mb-md space"},[m("History of "),o("br"),m(" Turkey")],-1),N={key:0,class:"text-h1 q-mb-md"},A={class:"row History"},G={class:"title"},j={class:"HistoryContent content"},D=o("div",{class:"text-h1 q-mb-md"},"Geography",-1),E={class:"column Geography"},U={class:"title"},K={class:"GeoContent content"},L=o("div",{class:"text-h1 q-mb-md text-center"},"Culture & Foods",-1),X={key:0,class:"text-h1 q-mb-md"},Y={class:"row Culture"},Z={class:"title"},z={class:"CultureContent content"},ut={__name:"BlogAllView",setup(J){S.init();const k=y([]),C=y([]),Q=y([]);V(!0);const _=V("history");return(async()=>{try{const{data:l}=await F.get("/posts");k.push(...l.result.filter(r=>r.category==="History")),C.push(...l.result.filter(r=>r.category==="Geography")),Q.push(...l.result.filter(r=>r.category==="Culture & Foods"))}catch{P.fire({icon:"error",title:"failed",text:"\u4F3A\u670D\u5668\u932F\u8AA4"})}})(),(l,r)=>{const f=q("router-link");return a(),i("div",$,[o("div",H,[t(B,{style:{height:"100vh - 51px"}},{before:s(()=>[t(T,{modelValue:_.value,"onUpdate:modelValue":r[0]||(r[0]=e=>_.value=e),vertical:"",class:"tabs"},{default:s(()=>[t(c,{name:"history",class:"textTab",label:"History of Turkey"}),l.$q.screen.lt.md?(a(),g(c,{key:0,name:"history",icon:"auto_stories"})):u("",!0),t(c,{name:"geography",class:"textTab",label:"Geography"}),l.$q.screen.lt.md?(a(),g(c,{key:1,name:"geography",icon:"travel_explore"})):u("",!0),t(c,{name:"culture",class:"textTab",label:"Culture in Turkey"}),l.$q.screen.lt.md?(a(),g(c,{key:2,name:"culture",icon:"diversity_3"})):u("",!0)]),_:1},8,["modelValue"])]),after:s(()=>[t(w,{modelValue:_.value,"onUpdate:modelValue":r[1]||(r[1]=e=>_.value=e),animated:"",swipeable:"",vertical:"","transition-prev":"jump-up","transition-next":"jump-up"},{default:s(()=>[t(p,{name:"history"},{default:s(()=>[I,l.$q.screen.lt.md?(a(),i("div",N,"History of Turkey")):u("",!0),o("div",A,[(a(!0),i(v,null,b(k,e=>(a(),i("div",{class:"col",key:e._id},[t(x,{flat:"",class:"my-card row","data-aos":"fade-left","data-aos-offset":"40"},{default:s(()=>[t(n,{class:"left col-xl-5 col-lg-5 col-md-12"},{default:s(()=>[t(h,{class:"HistoryImg",src:e.image,position:"45% 35%"},null,8,["src"])]),_:2},1024),t(n,{class:"right col-xl-7 col-lg-7 col-md-12"},{default:s(()=>[o("div",G,[t(f,{to:"/post/"+e._id},{default:s(()=>[m(d(e.title),1)]),_:2},1032,["to"])]),o("p",j,d(e.content),1)]),_:2},1024)]),_:2},1024)]))),128))])]),_:1}),t(p,{name:"geography"},{default:s(()=>[D,o("div",E,[(a(!0),i(v,null,b(C,e=>(a(),i("div",{class:"col",key:e._id},[t(x,{flat:"",class:"my-card row","data-aos":"fade-right"},{default:s(()=>[t(n,{class:"info col-xl-6 col-lg-6 col-md-12"},{default:s(()=>[o("div",U,[t(f,{to:"/post/"+e._id},{default:s(()=>[m(d(e.title),1)]),_:2},1032,["to"])]),o("div",K,[o("p",null,d(e.content),1)])]),_:2},1024),t(n,{class:"image col-xl-6 col-lg-6 col-md-12"},{default:s(()=>[t(h,{class:"GeoImg",src:e.image},null,8,["src"])]),_:2},1024)]),_:2},1024)]))),128))])]),_:1}),t(p,{name:"culture"},{default:s(()=>[L,l.$q.screen.lt.md?(a(),i("div",X,"Culture & Foods")):u("",!0),o("div",Y,[(a(!0),i(v,null,b(Q,e=>(a(),i("div",{class:"col",key:e._id},[t(x,{flat:"",class:"my-card row","data-aos":"fade-left"},{default:s(()=>[t(n,{class:"image col-xl-12 col-lg-12 col-md-12"},{default:s(()=>[t(h,{class:"CultureImg",src:e.image},null,8,["src"])]),_:2},1024),t(n,{class:"info col-xl-12 col-lg-12 col-md-12"},{default:s(()=>[o("div",Z,[t(f,{to:"/post/"+e._id},{default:s(()=>[m(d(e.title),1)]),_:2},1032,["to"])]),o("div",z,[o("p",null,d(e.content),1)])]),_:2},1024)]),_:2},1024)]))),128))])]),_:1})]),_:1},8,["modelValue"])]),_:1})])])}}};export{ut as default};
