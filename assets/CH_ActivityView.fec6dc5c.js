import{Q as b}from"./QImg.6ad42e2f.js";import{y as S,A as m,r as d,k as Q,l as g,n as a,f as s,C as i,a_ as u,aU as h,b1 as w,aR as x,aS as H,aT as E,aV as p,G as U,J as q,Q as _,K as k}from"./index.a8cc4891.js";import{Q as B,a as R}from"./QPopupProxy.4519e654.js";import{Q as A}from"./QForm.028c178d.js";import{C as D}from"./ClosePopup.cabadc2a.js";import"./use-cache.b0833c75.js";import"./QMenu.15a86a7d.js";import"./selection.4c00b57a.js";const I={class:"q-pa-md",id:"ActivityView"},N={class:"banner"},P={class:"absolute-full text-subtitle2 flex column flex-center"},j={class:"row"},M={class:"col-9"},T={class:"col-3"},F={class:"row items-center justify-end"},G=k("\u8A02\u7968"),ee={__name:"CH_ActivityView",setup(J){const v=w(),f=x(),V=S(),e=m({_id:"",CH_name:"",CH_description:"",location:"",dateStart:"",dateEnd:"",timeStart:"",timeEnd:"",image:"",price:0,sell:!1}),r=d("2022/01/01"),n=d(0),y=m([t=>t>=1||"\u6578\u91CF\u932F\u8AA4"]),c=d(!1);(async()=>{try{const{data:t}=await H.get("/activities/"+v.params.id);e._id=t.result._id,e.CH_name=t.result.CH_name,e.CH_description=t.result.CH_description,e.location=t.result.location,e.dateStart=t.result.dateStart,e.dateEnd=t.result.dateEnd,e.timeStart=t.result.timeStart,e.timeEnd=t.result.timeEnd,e.image=t.result.image,e.price=t.result.price,e.sell=t.result.sell}catch{E.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u5546\u54C1\u8CC7\u6599\u5931\u6557"}),f.go(-1)}})();const C=()=>{console.log(e._id),V.addCart({activity:e._id,date:r.value,quantity:n.value},2)};return(t,l)=>(Q(),g("div",I,[a("div",N,[s(b,{src:"https://cdn.quasar.dev/img/parallax2.jpg"},{default:i(()=>[a("div",P,[a("h1",null,u(e.CH_name),1)])]),_:1})]),a("div",j,[a("div",M,[a("h1",null,u(e.CH_name),1),a("span",null,u(e.CH_description),1)]),a("div",T,[s(A,{modelValue:c.value,"onUpdate:modelValue":l[3]||(l[3]=o=>c.value=o),onSubmit:h(C,["prevent"])},{default:i(()=>[s(p,{filled:"",modelValue:r.value,"onUpdate:modelValue":l[1]||(l[1]=o=>r.value=o),mask:"date",rules:["date"]},{append:i(()=>[s(U,{name:"event",class:"cursor-pointer"},{default:i(()=>[s(B,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:i(()=>[s(R,{modelValue:r.value,"onUpdate:modelValue":l[0]||(l[0]=o=>r.value=o)},{default:i(()=>[a("div",F,[q(s(_,{label:"Close",color:"primary",flat:""},null,512),[[D]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),s(p,{filled:"",modelValue:n.value,"onUpdate:modelValue":l[2]||(l[2]=o=>n.value=o),modelModifiers:{number:!0},type:"number",label:"\u7968\u6578",rules:y},null,8,["modelValue","rules"]),s(_,{color:"secondary",type:"submit"},{default:i(()=>[G]),_:1})]),_:1},8,["modelValue","onSubmit"])])])]))}};export{ee as default};
