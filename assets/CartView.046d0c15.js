import{Q as k}from"./QSelect.2a051dab.js";import{y as G,r as P,A as w,c as z,k as d,l as v,f as a,C as l,bc as $,aU as S,D as X,Q as u,B as h,E as Q,n as p,aR as x,q as Z,F as N,b0 as D,K as m,a$ as _,p as ee,H as V,b9 as te,a_ as q,aV as le,aW as E,J as L}from"./index.5ef8ba6c.js";import{Q as M}from"./QAvatar.90e980d2.js";import{Q as Y,a as O}from"./QItem.b1783696.js";import{Q as ae}from"./QList.5ff5e0fa.js";import{Q as B}from"./QTd.a2050118.js";import{Q as oe}from"./QTable.71dea2ca.js";import{Q as ne,a as ie,b as T}from"./QStepper.b7726e87.js";import{Q as re}from"./QForm.aa9c5075.js";import{C as R}from"./ClosePopup.1c28ff9a.js";import{v as se}from"./index.0517b504.js";import"./QMenu.f1fe4bfb.js";import"./selection.7286b50e.js";import"./rtl.4b414a6d.js";import"./QMarkupTable.cd57968b.js";import"./use-fullscreen.ed49a465.js";import"./use-panel.593a0cb1.js";import"./touch.70a9dd44.js";import"./use-cache.b0833c75.js";const ue={class:"q-pa-md"},de=m("-"),me=m("+"),ce=m("delete"),pe=["src"],fe=m("-"),_e=m("+"),ye=m("Delete"),ge=["src"],ve=m("Enter Info"),he=p("div",{class:"text-h6"},"Enter info",-1),be=m("edit"),Ce=p("p",null,"choose the payment",-1),ke=m("checkout"),Oe={__name:"CartView",setup(we){const b=G(),y=P(1),H=[{name:"name",required:!0,label:"Name",align:"left",field:t=>{var o,i;return((o=t.tour)==null?void 0:o.name)||((i=t.activity)==null?void 0:i.name)},format:t=>`${t}`,sortable:!0},{name:"image",align:"center",label:"image",sortable:!0},{name:"edit",label:"quantity",field:t=>t.quantity,sortable:!0},{name:"deleteIt",label:"delete",field:t=>t.quantity,sortable:!0}],r=w([]),U=z(()=>r.reduce((t,o)=>{var i,e;return t+((i=o.tour)==null?void 0:i.price)||((e=o.activity)==null?void 0:e.price)*o.quantity},0)),J=P(""),K=w([t=>!!t||"email is required",t=>se.exports.isEmail(t)||"please enter with email type"]),n=w({_id:"",name:"",email:"",phone:"",idx:-1,dialog:!1,submitting:!1}),A=t=>{n._id=t;const o=t===""?-1:f.findIndex(i=>i._id===t);o>-1?(n.name=f[o].name,n.email=f[o].email,n.phone=f[o].phone):(n.name="",n.email="",n.phone=""),n.idx=o,n.dialog=!0,n.submitting=!1},g=async(t,o)=>{const i=r.findIndex(e=>e._id===t);r[i].tour?await b.updateCart({tour:r[i].tour._id,quantity:o})&&(o===0?r.splice(i,1):r[i].quantity=o):r[i].activity&&await b.updateCart({activity:r[i].activity._id,quantity:o})&&(o===0?r.splice(i,1):r[i].quantity=o)};(async()=>{try{const{data:t}=await $.get("/users/cart");r.splice(0,r.length),r.push(...t.result)}catch(t){console.log(t),S.fire({icon:"error",title:"failed",text:t.isAxiosError?t.response.data.message:t.message})}})();const f=w([]),I=async()=>{try{const{data:t}=await $.get("/users/orderInfo");f.splice(0,r.length),f.push(...t.result)}catch(t){console.log(t),S.fire({icon:"error",title:"failed",text:t.isAxiosError?t.response.data.message:t.message})}};I();const W=async()=>{n.submitting=!0;try{if(n._id.length===0)b.addOrderInfo({name:n.name,email:n.email,phone:n.phone}),I();else{const{data:t}=await $.patch("/users/orderInfo",{_id:n._id,name:n.name,email:n.email,phone:n.phone});I()}}catch(t){S.fire({icon:"error",title:"\u5931\u6557",text:t.isAxiosError?t.response.data.message:t.message})}n.submitting=!1},F=()=>f.length!==0,j=z(()=>r.length>0&&!r.some(t=>{var o,i;return!(((o=t.tour)==null?void 0:o.sell)||((i=t.activity)==null?void 0:i.sell))}));return(t,o)=>{const i=X("q-card-action");return d(),v("div",ue,[a(ne,{modelValue:y.value,"onUpdate:modelValue":o[7]||(o[7]=e=>y.value=e),ref:"stepper",color:"primary",animated:""},{navigation:l(()=>[a(ie,null,{default:l(()=>[a(u,{onClick:o[5]||(o[5]=e=>t.$refs.stepper.next()),color:"primary",label:y.value===4?"Finish":"Continue"},null,8,["label"]),y.value>1?(d(),h(u,{key:0,flat:"",color:"primary",onClick:o[6]||(o[6]=e=>t.$refs.stepper.previous()),label:"Back",class:"q-ml-sm"})):Q("",!0)]),_:1})]),default:l(()=>[a(T,{name:1,title:"My cart",icon:"settings",done:y.value>1},{default:l(()=>[a(oe,{grid:t.$q.screen.lt.md,title:"My Cart",rows:r,columns:H,"row-key":"quantity",filter:J.value},{item:l(e=>[p("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:ee(e.selected?"transform: scale(0.95);":"")},[a(x,{class:Z(e.selected?"bg-grey-2":"")},{default:l(()=>[(d(!0),v(N,null,D(e.cols,s=>(d(),h(ae,{key:s.name},{default:l(()=>[a(Y,null,{default:l(()=>[a(O,null,{default:l(()=>[a(Y,null,{default:l(()=>[s.name!=="image"&&s.name!=="edit"&&s.name!=="deleteIt"?(d(),h(k,{key:0,caption:""},{default:l(()=>[m(_(s.value),1)]),_:2},1024)):Q("",!0),s.name==="edit"?(d(),h(k,{key:1,caption:""},{default:l(()=>[a(i,null,{default:l(()=>[a(u,{onClick:c=>g(e.row._id,e.row.quantity-1),variant:"text"},{default:l(()=>[de]),_:2},1032,["onClick"]),m(" "+_(s.value)+" ",1),a(u,{onClick:c=>g(e.row._id,e.row.quantity+1),variant:"text"},{default:l(()=>[me]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)):Q("",!0),s.name==="deleteIt"?(d(),h(k,{key:2,caption:""},{default:l(()=>[a(i,null,{default:l(()=>[a(u,{onClick:c=>g(e.row._id,0)},{default:l(()=>[ce]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)):s.name=="image"?(d(),h(M,{key:3,square:""},{default:l(()=>{var c,C;return[p("img",{src:((c=e.row.tour)==null?void 0:c.image)||((C=e.row.activity)==null?void 0:C.image),alt:""},null,8,pe)]}),_:2},1024)):Q("",!0)]),_:2},1024)]),_:2},1024),a(O,{side:""},{default:l(()=>[a(k,{caption:""})]),_:1})]),_:2},1024)]),_:2},1024))),128))]),_:2},1032,["class"])],4)]),"body-cell-edit":l(e=>[a(B,{edit:e},{default:l(()=>{var s,c;return[a(u,{onClick:C=>g(e.row._id,e.row.quantity-1),variant:"text"},{default:l(()=>[fe]),_:2},1032,["onClick"]),m(" "+_(e.row.quantity)+" ",1),a(u,{onClick:C=>g(e.row._id,e.row.quantity+1),variant:"text"},{default:l(()=>[_e]),_:2},1032,["onClick"]),p("p",null,"price: "+_(((s=e.row.tour)==null?void 0:s.price)||((c=e.row.activity)==null?void 0:c.price)*e.row.quantity)+" NTD",1)]}),_:2},1032,["edit"])]),"body-cell-deleteIt":l(e=>[a(B,null,{default:l(()=>[a(u,{onClick:s=>g(e.row._id,0)},{default:l(()=>[ye]),_:2},1032,["onClick"])]),_:2},1024)]),"body-cell-image":l(e=>[a(B,null,{default:l(()=>[a(M,{square:"",size:"100px"},{default:l(()=>{var s,c;return[p("img",{src:((s=e.row.tour)==null?void 0:s.image)||((c=e.row.activity)==null?void 0:c.image),alt:""},null,8,ge)]}),_:2},1024)]),_:2},1024)]),_:1},8,["grid","rows","filter"]),p("p",null,"Total: "+_(V(U))+" NTD",1)]),_:1},8,["done"]),a(T,{name:2,title:"Enter Info",icon:"create_new_folder",done:y.value>2},{default:l(()=>[a(u,{color:"secondary",onClick:o[0]||(o[0]=e=>A("")),disabled:F()},{default:l(()=>[ve]),_:1},8,["disabled"]),a(te,{modelValue:n.dialog,"onUpdate:modelValue":o[4]||(o[4]=e=>n.dialog=e),persistent:""},{default:l(()=>[a(x,{style:{"min-width":"700px"}},{default:l(()=>[a(q,null,{default:l(()=>[he]),_:1}),a(q,{class:"q-pt-none"},{default:l(()=>[a(re,{onSubmit:le(W,["prevent"])},{default:l(()=>[a(E,{filled:"",modelValue:n.name,"onUpdate:modelValue":o[1]||(o[1]=e=>n.name=e),label:"Your name",rules:[e=>e&&e.length>0||"Please enter your name"]},null,8,["modelValue","rules"]),a(E,{filled:"",modelValue:n.email,"onUpdate:modelValue":o[2]||(o[2]=e=>n.email=e),label:"Your email",rules:K},null,8,["modelValue","rules"]),a(E,{filled:"",modelValue:n.phone,"onUpdate:modelValue":o[3]||(o[3]=e=>n.phone=e),label:"Your phone number",rules:[e=>e&&e.length>0||"Please enter your phone number"]},null,8,["modelValue","rules"]),L(a(u,{flat:"",label:"Cancel"},null,512),[[R]]),L(a(u,{flat:"",label:"Save",type:"submit"},null,512),[[R]])]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),a(x,{class:"my-card"},{default:l(()=>[a(q,null,{default:l(()=>[(d(!0),v(N,null,D(f,e=>(d(),v("div",{key:e._id},[p("p",null,"Name: "+_(e.name),1),p("p",null,"email: "+_(e.email),1),p("p",null,"phone: "+_(e.phone),1),a(u,{onClick:s=>A(e._id),flat:""},{default:l(()=>[be]),_:2},1032,["onClick"])]))),128))]),_:1})]),_:1})]),_:1},8,["done"]),a(T,{name:3,title:"Check Out",icon:"assignment"},{default:l(()=>[a(x,{class:"my-card"},{default:l(()=>[a(q,null,{default:l(()=>[(d(!0),v(N,null,D(f,e=>(d(),v("div",{key:e._id},[p("p",null,"total: "+_(V(U))+" NTD",1),Ce]))),128))]),_:1})]),_:1}),a(u,{color:"secondary",onClick:V(b).checkout,disabled:!F()||!V(j)},{default:l(()=>[ke]),_:1},8,["onClick","disabled"])]),_:1})]),_:1},8,["modelValue"])])}}};export{Oe as default};
