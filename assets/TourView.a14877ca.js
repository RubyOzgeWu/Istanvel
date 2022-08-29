import{Q as m}from"./QImg.5db0995d.js";import{C as y,E as p,r as d,k as x,l as T,n as e,f as s,H as r,b0 as a,aW as w,b2 as Q,aT as k,aU as I,aV as C,aX as _,K as U,N as D,Q as f,O as L}from"./index.2be97d02.js";import{Q as N,a as S}from"./QPopupProxy.16a7e703.js";import{Q as q}from"./QForm.23ee760b.js";import{C as B}from"./ClosePopup.d70e8ffa.js";import"./use-cache.b0833c75.js";import"./QMenu.9e87c88c.js";import"./selection.815d1c0b.js";const P={class:"q-pa-md",id:"TourView"},R={class:"banner"},E={class:"absolute-full text-subtitle2 flex column flex-center"},M={class:"text-center"},O={class:"background"},j={class:"row content"},A={class:"col-sm-8 col-xs-12 info"},F={class:"title"},H={class:"description"},K={class:"text-white table"},W=e("thead",null,[e("th"),e("th")],-1),X=e("td",null,[e("p",null,"Included")],-1),$=e("td",null,[e("p",null,"Departure Time")],-1),z=e("td",null,[e("p",null,"Departure Location")],-1),G=e("td",null,[e("p",null,"Note")],-1),J={class:"col-sm-4 col-xs-12 order"},Y=e("h4",null,"Package Options",-1),Z={class:"row items-center justify-end"},ee={class:"total"},te=L("add to the cart"),me={__name:"TourView",setup(le){const h=Q(),v=k(),b=y(),t=p({_id:"",name:"",description:"",departureLocation:"",departureTime:"",included:"",notIncluded:"",openTime:"",address:"",note:"",image:"",price:0,category:"",sell:!1}),i=d("2022/01/01"),u=d(0),V=p([l=>l>=1||"At least one ticket"]),c=d(!1);(async()=>{try{const{data:l}=await I.get("/tours/"+h.params.id);t._id=l.result._id,t.name=l.result.name,t.description=l.result.description,t.departureLocation=l.result.departureLocation,t.departureTime=l.result.departureTime,t.included=l.result.included,t.notIncluded=l.result.notIncluded,t.openTime=l.result.openTime,t.address=l.result.address,t.note=l.result.note,t.image=l.result.image,t.price=l.result.price,t.category=l.result.category,t.sell=l.result.sell}catch{C.fire({icon:"error",title:"failed",text:"failed to get the tour info."}),v.go(-1)}})();const g=()=>{b.addCart({tour:t._id,date:i.value,quantity:u.value},1)};return(l,o)=>(x(),T("div",P,[e("div",R,[s(m,{src:t.image},{default:r(()=>[e("div",E,[e("h2",M,a(t.name),1)])]),_:1},8,["src"])]),e("div",O,[e("div",j,[e("div",A,[e("p",F,a(t.name),1),e("p",H,a(t.description),1),e("table",K,[W,e("tbody",null,[e("tr",null,[X,e("td",null,[e("p",null,a(t.included),1)])]),e("tr",null,[$,e("td",null,[e("p",null,a(t.departureTime),1)])]),e("tr",null,[z,e("td",null,[e("p",null,a(t.departureLocation),1)])]),e("tr",null,[G,e("td",null,[e("p",null,a(t.note),1)])])])]),s(m,{src:t.image,class:"image"},null,8,["src"])]),e("div",J,[Y,s(q,{modelValue:c.value,"onUpdate:modelValue":o[3]||(o[3]=n=>c.value=n),onSubmit:w(g,["prevent"])},{default:r(()=>[s(_,{filled:"",modelValue:i.value,"onUpdate:modelValue":o[1]||(o[1]=n=>i.value=n),mask:"date",rules:["date"]},{append:r(()=>[s(U,{name:"event",class:"cursor-pointer"},{default:r(()=>[s(N,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:r(()=>[s(S,{modelValue:i.value,"onUpdate:modelValue":o[0]||(o[0]=n=>i.value=n)},{default:r(()=>[e("div",Z,[D(s(f,{label:"Close",color:"primary",flat:""},null,512),[[B]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),s(_,{filled:"",modelValue:u.value,"onUpdate:modelValue":o[2]||(o[2]=n=>u.value=n),modelModifiers:{number:!0},type:"number",label:"number of ticket",rules:V},null,8,["modelValue","rules"]),e("p",ee,"Total $ "+a(t.price*u.value),1),s(f,{color:"secondary",type:"submit",class:"submit"},{default:r(()=>[te]),_:1})]),_:1},8,["modelValue","onSubmit"])])])])]))}};export{me as default};
