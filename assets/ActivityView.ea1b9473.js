import{Q as b}from"./QImg.7d7e8fac.js";import{A as c,r as d,l as h,m as Q,p as a,f as s,C as i,aY as u,aS as g,a_ as w,aR as x,aT as p,G as E,J as C,Q as f,K as k}from"./index.2dd91d1a.js";import{Q as q,a as U}from"./QPopupProxy.dae68cad.js";import{Q as A}from"./QForm.0ada9d0b.js";import{C as B}from"./ClosePopup.ab3b4512.js";import{u as R,a as D,S as I}from"./user.0f3afc9a.js";import"./use-cache.b0833c75.js";import"./QMenu.6fe1a7c2.js";import"./selection.0a2eb727.js";const N={class:"q-pa-md",id:"ActivityView"},P={class:"banner"},j={class:"absolute-full text-subtitle2 flex column flex-center"},M={class:"row"},T={class:"col-9"},F={class:"col-3"},G={class:"row items-center justify-end"},J=k("add to the cart"),te={__name:"ActivityView",setup(K){const v=w(),_=x(),V=R(),e=c({_id:"",name:"123",description:"",location:"",dateStart:"",dateEnd:"",timeStart:"",timeEnd:"",image:"",price:0,sell:!1}),r=d("2022/01/01"),n=d(0),y=c([t=>t>=1||"At least one ticket"]),m=d(!1);(async()=>{try{const{data:t}=await D.get("/activities/"+v.params.id);e._id=t.result._id,e.name=t.result.name,e.description=t.result.description,e.location=t.result.location,e.dateStart=t.result.dateStart,e.dateEnd=t.result.dateEnd,e.timeStart=t.result.timeStart,e.timeEnd=t.result.timeEnd,e.image=t.result.image,e.price=t.result.price,e.sell=t.result.sell}catch{I.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u5546\u54C1\u8CC7\u6599\u5931\u6557"}),_.go(-1)}})();const S=()=>{console.log(e._id),V.addCart({activity:e._id,date:r.value,quantity:n.value},2)};return(t,l)=>(h(),Q("div",N,[a("div",P,[s(b,{src:"https://cdn.quasar.dev/img/parallax2.jpg"},{default:i(()=>[a("div",j,[a("h1",null,u(e.name),1)])]),_:1})]),a("div",M,[a("div",T,[a("h1",null,u(e.name),1),a("span",null,u(e.description),1)]),a("div",F,[s(A,{modelValue:m.value,"onUpdate:modelValue":l[3]||(l[3]=o=>m.value=o),onSubmit:g(S,["prevent"])},{default:i(()=>[s(p,{filled:"",modelValue:r.value,"onUpdate:modelValue":l[1]||(l[1]=o=>r.value=o),mask:"date",rules:["date"]},{append:i(()=>[s(E,{name:"event",class:"cursor-pointer"},{default:i(()=>[s(q,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:i(()=>[s(U,{modelValue:r.value,"onUpdate:modelValue":l[0]||(l[0]=o=>r.value=o)},{default:i(()=>[a("div",G,[C(s(f,{label:"Close",color:"primary",flat:""},null,512),[[B]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),s(p,{filled:"",modelValue:n.value,"onUpdate:modelValue":l[2]||(l[2]=o=>n.value=o),modelModifiers:{number:!0},type:"number",label:"number of ticket",rules:y},null,8,["modelValue","rules"]),s(f,{color:"secondary",type:"submit"},{default:i(()=>[J]),_:1})]),_:1},8,["modelValue","onSubmit"])])])]))}};export{te as default};
