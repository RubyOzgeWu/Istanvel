import{Q as b}from"./QImg.7d7e8fac.js";import{A as m,r as d,l as h,m as Q,p as a,f as o,C as r,aY as n,aS as w,a_ as x,aR as T,aT as p,G as S,J as C,Q as f,K as I}from"./index.2dd91d1a.js";import{Q as k,a as q}from"./QPopupProxy.dae68cad.js";import{Q as U}from"./QForm.0ada9d0b.js";import{C as B}from"./ClosePopup.ab3b4512.js";import{u as R,a as D,S as L}from"./user.0f3afc9a.js";import"./use-cache.b0833c75.js";import"./QMenu.6fe1a7c2.js";import"./selection.0a2eb727.js";const N={class:"q-pa-md",id:"TourView"},P={class:"banner"},j={class:"absolute-full text-subtitle2 flex column flex-center"},A={class:"row"},M={class:"col-9"},E={class:"col-3"},F={class:"row items-center justify-end"},G=I("add to the cart"),te={__name:"TourView",setup(J){const _=x(),v=T(),V=R(),e=m({_id:"",name:"123",description:"",departureLocation:"",departureTime:"",included:"",notIncluded:"",openTime:"",address:"",note:"",image:"",price:0,category:"",sell:!1}),i=d("2022/01/01"),u=d(0),y=m([t=>t>=1||"At least one ticket"]),c=d(!1);(async()=>{try{const{data:t}=await D.get("/tours/"+_.params.id);e._id=t.result._id,e.name=t.result.name,e.description=t.result.description,e.departureLocation=t.result.departureLocation,e.departureTime=t.result.departureTime,e.included=t.result.included,e.notIncluded=t.result.notIncluded,e.openTime=t.result.openTime,e.address=t.result.address,e.note=t.result.note,e.image=t.result.image,e.price=t.result.price,e.category=t.result.category,e.sell=t.result.sell}catch{L.fire({icon:"error",title:"failed",text:"failed to get the tour info."}),v.go(-1)}})();const g=()=>{V.addCart({tour:e._id,date:i.value,quantity:u.value},1)};return(t,s)=>(h(),Q("div",N,[a("div",P,[o(b,{src:"https://cdn.quasar.dev/img/parallax2.jpg"},{default:r(()=>[a("div",j,[a("h1",null,n(e.name),1)])]),_:1})]),a("div",A,[a("div",M,[a("h1",null,n(e.name),1),a("span",null,n(e.description),1)]),a("div",E,[o(U,{modelValue:c.value,"onUpdate:modelValue":s[3]||(s[3]=l=>c.value=l),onSubmit:w(g,["prevent"])},{default:r(()=>[o(p,{filled:"",modelValue:i.value,"onUpdate:modelValue":s[1]||(s[1]=l=>i.value=l),mask:"date",rules:["date"]},{append:r(()=>[o(S,{name:"event",class:"cursor-pointer"},{default:r(()=>[o(k,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:r(()=>[o(q,{modelValue:i.value,"onUpdate:modelValue":s[0]||(s[0]=l=>i.value=l)},{default:r(()=>[a("div",F,[C(o(f,{label:"Close",color:"primary",flat:""},null,512),[[B]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),o(p,{filled:"",modelValue:u.value,"onUpdate:modelValue":s[2]||(s[2]=l=>u.value=l),modelModifiers:{number:!0},type:"number",label:"number of ticket",rules:y},null,8,["modelValue","rules"]),o(f,{color:"secondary",type:"submit"},{default:r(()=>[G]),_:1})]),_:1},8,["modelValue","onSubmit"])])])]))}};export{te as default};
