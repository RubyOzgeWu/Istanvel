import{Q as f}from"./QImg.6ad42e2f.js";import{y as m,A as H,k as h,l as v,n as r,f as e,C as s,aQ as g,b1 as x,aR as Q,aS as S,aT as b,D as k,aZ as o,a_ as l,K as n,I as c,Q as w}from"./index.a8cc4891.js";const y={class:"q-pa-md",id:"CH_BlogView"},B={class:"banner"},q=r("div",{class:"absolute-full text-subtitle2 flex column flex-center"},null,-1),V={class:"q-pa-md"},D={class:"text-h2"},j={__name:"CH_BlogView",setup(N){const d=x(),_=Q(),u=m(),t=H({_id:"",CH_title:"",CH_author:"",CH_content:"",date:"",image:"",sell:!1});(async()=>{try{const{data:a}=await S.get("/posts/"+d.params.id);t._id=a.result._id,t.CH_title=a.result.CH_title,t.CH_author=a.result.CH_author,t.CH_content=a.result.CH_content,t.date=new Date(a.result.date).toLocaleString(),t.sell=a.result.sell}catch{b.fire({icon:"error",title:"failed",text:"failed to load the post"}),_.go(-1)}})();const p=()=>{u.CH_addArchive({post:t._id})};return(a,i)=>{const C=k("q-card-action");return h(),v("div",y,[r("div",B,[e(f,{src:"https://cdn.quasar.dev/img/parallax2.jpg"},{default:s(()=>[q]),_:1})]),r("div",V,[e(g,{flat:"",bordered:"",class:"my-card"},{default:s(()=>[e(o,null,{default:s(()=>[r("div",D,l(t.CH_title),1)]),_:1}),e(o,{class:"q-pt-none"},{default:s(()=>[n("\u4F5C\u8005\uFF1A"+l(t.CH_author),1)]),_:1}),e(c,{inset:""}),e(o,null,{default:s(()=>[n(l(t.CH_content),1)]),_:1}),e(c,{inset:""}),e(o,null,{default:s(()=>[n(l(t.date),1)]),_:1}),e(C,null,{default:s(()=>[e(w,{color:"secondary",icon:"bookmark",onClick:i[0]||(i[0]=A=>p())})]),_:1})]),_:1})])])}}};export{j as default};
