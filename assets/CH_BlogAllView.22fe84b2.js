import{Q as c,a as k,b as _}from"./QTabPanels.0c2048c1.js";import{Q as P}from"./QTabs.2c8422b4.js";import{Q as m}from"./QImg.d85144a0.js";import{A as p,r as Q,k as o,l as r,f as t,C as s,aU as w,aV as S,D as j,n as a,F as f,b1 as h,aS as v,a$ as x,K as b,b0 as i,I as y}from"./index.1af9d501.js";import{Q as B}from"./QSplitter.89e38d28.js";import"./use-panel.f33b8201.js";import"./touch.70a9dd44.js";import"./selection.13c9e09e.js";import"./use-cache.b0833c75.js";import"./QResizeObserver.d848625c.js";import"./rtl.4b414a6d.js";import"./TouchPan.ec3f6182.js";const T={id:"CH_BlogAllView"},L={class:"banner"},M=a("div",{class:"absolute-full text-subtitle2 flex column flex-center"},[a("h1",null,"\u6B77\u53F2\u5C0F\u6545\u4E8B")],-1),U={class:"historyPosts column"},q={class:"text-subtitle2"},A={class:"banner"},F=a("div",{class:"absolute-full text-subtitle2 flex column flex-center"},[a("h1",null,"\u5730\u7406\u63A2\u7D22")],-1),N={class:"geographyPosts column"},D={class:"text-subtitle2"},G={class:"banner"},I=a("div",{class:"absolute-full text-subtitle2 flex column flex-center"},[a("h1",null,"\u4EBA\u6587\u98A8\u60C5")],-1),E={class:"culturePosts column"},K={class:"text-subtitle2"},ot={__name:"CH_BlogAllView",setup($){const g=p([]),C=p([]),V=p([]),u=Q("history"),H=Q(20);return(async()=>{try{const{data:n}=await w.get("/posts");g.push(...n.result.filter(l=>l.category==="History")),C.push(...n.result.filter(l=>l.category==="Geography")),V.push(...n.result.filter(l=>l.category==="Culture & Foods"))}catch{S.fire({icon:"error",title:"failed",text:"\u4F3A\u670D\u5668\u932F\u8AA4"})}})(),(n,l)=>{const d=j("router-link");return o(),r("div",T,[t(B,{modelValue:H.value,"onUpdate:modelValue":l[2]||(l[2]=e=>H.value=e),style:{height:"100vh - 51px"}},{before:s(()=>[t(P,{modelValue:u.value,"onUpdate:modelValue":l[0]||(l[0]=e=>u.value=e),vertical:"",class:"text-teal"},{default:s(()=>[t(c,{name:"history",label:"\u6B77\u53F2\u5C0F\u6545\u4E8B"}),t(c,{name:"geography",label:"\u5730\u7406\u63A2\u7D22"}),t(c,{name:"culture",label:"\u4EBA\u6587\u98A8\u60C5"})]),_:1},8,["modelValue"])]),after:s(()=>[t(k,{modelValue:u.value,"onUpdate:modelValue":l[1]||(l[1]=e=>u.value=e),animated:"",swipeable:"",vertical:"","transition-prev":"jump-up","transition-next":"jump-up"},{default:s(()=>[t(_,{name:"history"},{default:s(()=>[a("div",L,[t(m,{src:"https://cdn.quasar.dev/img/parallax2.jpg"},{default:s(()=>[M]),_:1})]),a("div",U,[(o(!0),r(f,null,h(g,e=>(o(),r("div",{class:"history col-12",key:e._id},[t(v,{class:"my-card"},{default:s(()=>[t(x,null,{default:s(()=>[t(d,{to:"/CH_MainLayout/post/"+e._id,class:"text-h3"},{default:s(()=>[b(i(e.CH_title),1)]),_:2},1032,["to"]),a("div",q,i(e.CH_content),1)]),_:2},1024),t(y,{dark:"",inset:""})]),_:2},1024)]))),128))])]),_:1}),t(_,{name:"geography"},{default:s(()=>[a("div",A,[t(m,{src:"https://cdn.quasar.dev/img/parallax2.jpg"},{default:s(()=>[F]),_:1})]),a("div",N,[(o(!0),r(f,null,h(C,e=>(o(),r("div",{class:"history col-12",key:e._id},[t(v,{class:"my-card"},{default:s(()=>[t(x,null,{default:s(()=>[t(d,{to:"/CH_MainLayout/post/"+e._id,class:"text-h3"},{default:s(()=>[b(i(e.CH_title),1)]),_:2},1032,["to"]),a("div",D,i(e.CH_content),1)]),_:2},1024),t(y,{dark:"",inset:""})]),_:2},1024)]))),128))])]),_:1}),t(_,{name:"culture"},{default:s(()=>[a("div",G,[t(m,{src:"https://cdn.quasar.dev/img/parallax2.jpg"},{default:s(()=>[I]),_:1})]),a("div",E,[(o(!0),r(f,null,h(V,e=>(o(),r("div",{class:"history col-12",key:e._id},[t(v,{class:"my-card"},{default:s(()=>[t(x,null,{default:s(()=>[t(d,{to:"/CH_MainLayout/post/"+e._id,class:"text-h3"},{default:s(()=>[b(i(e.CH_title),1)]),_:2},1032,["to"]),a("div",K,i(e.CH_content),1)]),_:2},1024),t(y,{dark:"",inset:""})]),_:2},1024)]))),128))])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])])}}};export{ot as default};