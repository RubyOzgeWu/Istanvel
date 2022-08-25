import{Q as c,a as k,b as _}from"./QTabPanels.927b6425.js";import{Q as P}from"./QTabs.7758f59d.js";import{Q as m}from"./QImg.6ad42e2f.js";import{A as p,r as H,k as o,l as r,f as t,C as a,aS as w,aT as S,D as T,n as s,F as f,a$ as h,aQ as v,aZ as x,K as y,a_ as i,I as b}from"./index.a8cc4891.js";import{Q as j}from"./QSplitter.945c2b4e.js";import"./use-panel.6c90b8ba.js";import"./touch.70a9dd44.js";import"./selection.4c00b57a.js";import"./use-cache.b0833c75.js";import"./QResizeObserver.00de80c4.js";import"./rtl.4b414a6d.js";import"./TouchPan.12eff1d9.js";const B={id:"CH_BlogAllView"},L={class:"banner"},M=s("div",{class:"absolute-full text-subtitle2 flex column flex-center"},[s("h1",null,"\u6B77\u53F2\u5C0F\u6545\u4E8B")],-1),q={class:"historyPosts column"},A={class:"text-subtitle2"},F={class:"banner"},N=s("div",{class:"absolute-full text-subtitle2 flex column flex-center"},[s("h1",null,"\u5730\u7406\u63A2\u7D22")],-1),U={class:"geographyPosts column"},D={class:"text-subtitle2"},G={class:"banner"},I=s("div",{class:"absolute-full text-subtitle2 flex column flex-center"},[s("h1",null,"\u4EBA\u6587\u98A8\u60C5")],-1),E={class:"culturePosts column"},K={class:"text-subtitle2"},ot={__name:"CH_BlogAllView",setup(Z){const g=p([]),C=p([]),Q=p([]),u=H("history"),V=H(20);return(async()=>{try{const{data:n}=await w.get("/posts");g.push(...n.result.filter(l=>l.category==="History")),C.push(...n.result.filter(l=>l.category==="Geography")),Q.push(...n.result.filter(l=>l.category==="Culture & Foods"))}catch{S.fire({icon:"error",title:"failed",text:"\u4F3A\u670D\u5668\u932F\u8AA4"})}})(),(n,l)=>{const d=T("router-link");return o(),r("div",B,[t(j,{modelValue:V.value,"onUpdate:modelValue":l[2]||(l[2]=e=>V.value=e),style:{height:"100vh - 51px"}},{before:a(()=>[t(P,{modelValue:u.value,"onUpdate:modelValue":l[0]||(l[0]=e=>u.value=e),vertical:"",class:"text-teal"},{default:a(()=>[t(c,{name:"history",label:"\u6B77\u53F2\u5C0F\u6545\u4E8B"}),t(c,{name:"geography",label:"\u5730\u7406\u63A2\u7D22"}),t(c,{name:"culture",label:"\u4EBA\u6587\u98A8\u60C5"})]),_:1},8,["modelValue"])]),after:a(()=>[t(k,{modelValue:u.value,"onUpdate:modelValue":l[1]||(l[1]=e=>u.value=e),animated:"",swipeable:"",vertical:"","transition-prev":"jump-up","transition-next":"jump-up"},{default:a(()=>[t(_,{name:"history"},{default:a(()=>[s("div",L,[t(m,{src:"https://cdn.quasar.dev/img/parallax2.jpg"},{default:a(()=>[M]),_:1})]),s("div",q,[(o(!0),r(f,null,h(g,e=>(o(),r("div",{class:"history col-12",key:e._id},[t(v,{class:"my-card"},{default:a(()=>[t(x,null,{default:a(()=>[t(d,{to:"/CH_MainLayout/post/"+e._id,class:"text-h3"},{default:a(()=>[y(i(e.CH_title),1)]),_:2},1032,["to"]),s("div",A,i(e.CH_content),1)]),_:2},1024),t(b,{dark:"",inset:""})]),_:2},1024)]))),128))])]),_:1}),t(_,{name:"geography"},{default:a(()=>[s("div",F,[t(m,{src:"https://cdn.quasar.dev/img/parallax2.jpg"},{default:a(()=>[N]),_:1})]),s("div",U,[(o(!0),r(f,null,h(C,e=>(o(),r("div",{class:"history col-12",key:e._id},[t(v,{class:"my-card"},{default:a(()=>[t(x,null,{default:a(()=>[t(d,{to:"/CH_MainLayout/post/"+e._id,class:"text-h3"},{default:a(()=>[y(i(e.CH_title),1)]),_:2},1032,["to"]),s("div",D,i(e.CH_content),1)]),_:2},1024),t(b,{dark:"",inset:""})]),_:2},1024)]))),128))])]),_:1}),t(_,{name:"culture"},{default:a(()=>[s("div",G,[t(m,{src:"https://cdn.quasar.dev/img/parallax2.jpg"},{default:a(()=>[I]),_:1})]),s("div",E,[(o(!0),r(f,null,h(Q,e=>(o(),r("div",{class:"history col-12",key:e._id},[t(v,{class:"my-card"},{default:a(()=>[t(x,null,{default:a(()=>[t(d,{to:"/CH_MainLayout/post/"+e._id,class:"text-h3"},{default:a(()=>[y(i(e.CH_title),1)]),_:2},1032,["to"]),s("div",K,i(e.CH_content),1)]),_:2},1024),t(b,{dark:"",inset:""})]),_:2},1024)]))),128))])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])])}}};export{ot as default};
