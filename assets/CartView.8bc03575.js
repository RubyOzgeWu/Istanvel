import{Q as C}from"./QSelect.93dfbdd2.js";import{C as j,r as F,E as w,c as L,k as m,l as h,f as a,H as l,n as i,bd as $,aV as S,I as K,Q as d,G as v,J as Q,aS as x,q as Z,F as E,b1 as N,O as c,b0 as _,p as ee,L as V,ba as te,a$ as q,aW as le,aX as D,N as M}from"./index.65f6b6f4.js";import{Q as z}from"./QAvatar.6b86ddd9.js";import{Q as O,a as Y}from"./QItem.45da507a.js";import{Q as ae}from"./QList.62833a02.js";import{Q as T}from"./QTd.3ef6c8fa.js";import{Q as oe}from"./QTable.d6eeabea.js";import{Q as ne,a as se,b as A}from"./QStepper.954301fe.js";import{Q as ie}from"./QForm.0d0a586a.js";import{Q as re}from"./QMarkupTable.39ca9a18.js";import{C as G}from"./ClosePopup.fdf96be0.js";import{v as ue}from"./index.0517b504.js";import"./QMenu.1ce68605.js";import"./selection.3c5b81b6.js";import"./rtl.4b414a6d.js";import"./use-fullscreen.2e1383fd.js";import"./use-panel.c56125d0.js";import"./touch.70a9dd44.js";import"./use-cache.b0833c75.js";const de={class:"q-pa-md",id:"CartView"},me=i("h2",{class:"cartTitle"},"My Cart",-1),ce=c("-"),fe=c("+"),pe=c("delete"),_e=["src"],ye=c("-"),ge=c("+"),he=c("Delete"),ve=["src"],be={class:"total text-right"},ke=i("p",{class:"title"},"Enter Info",-1),Ce=c("Enter Info"),we=i("div",{class:"text-h5",style:{"font-weight":"700",color:"#A10D48"}},"Enter info",-1),Qe=i("td",null,"Name",-1),xe=i("td",null,"Email",-1),Ve=i("td",null,"Phone",-1),qe=c("edit"),Ie=i("p",null,"choose the payment",-1),$e=c("checkout"),je={__name:"CartView",setup(Se){const b=j(),y=F(1),H=[{name:"name",required:!0,label:"Name",align:"left",field:t=>{var o,s;return((o=t.tour)==null?void 0:o.name)||((s=t.activity)==null?void 0:s.name)},format:t=>`${t}`,sortable:!0},{name:"image",align:"center",label:"image",sortable:!0},{name:"edit",label:"quantity",field:t=>t.quantity,sortable:!0},{name:"deleteIt",label:"delete",field:t=>t.quantity,sortable:!0}],r=w([]),B=L(()=>r.reduce((t,o)=>{var s,e;return t+(((s=o.tour)==null?void 0:s.price)||((e=o.activity)==null?void 0:e.price))*o.quantity},0)),J=F(""),R=w([t=>!!t||"email is required",t=>ue.exports.isEmail(t)||"please enter with email type"]),n=w({_id:"",name:"",email:"",phone:"",idx:-1,dialog:!1,submitting:!1}),P=t=>{n._id=t;const o=t===""?-1:p.findIndex(s=>s._id===t);o>-1?(n.name=p[o].name,n.email=p[o].email,n.phone=p[o].phone):(n.name="",n.email="",n.phone=""),n.idx=o,n.dialog=!0,n.submitting=!1},g=async(t,o)=>{const s=r.findIndex(e=>e._id===t);r[s].tour?await b.updateCart({tour:r[s].tour._id,quantity:o})&&(o===0?r.splice(s,1):r[s].quantity=o):r[s].activity&&await b.updateCart({activity:r[s].activity._id,quantity:o})&&(o===0?r.splice(s,1):r[s].quantity=o)};(async()=>{try{const{data:t}=await $.get("/users/cart");r.splice(0,r.length),r.push(...t.result)}catch(t){console.log(t),S.fire({icon:"error",title:"failed",text:t.isAxiosError?t.response.data.message:t.message})}})();const p=w([]),I=async()=>{try{const{data:t}=await $.get("/users/orderInfo");p.splice(0,r.length),p.push(...t.result)}catch(t){console.log(t),S.fire({icon:"error",title:"failed",text:t.isAxiosError?t.response.data.message:t.message})}};I();const W=async()=>{n.submitting=!0;try{if(n._id.length===0)b.addOrderInfo({name:n.name,email:n.email,phone:n.phone}),I();else{const{data:t}=await $.patch("/users/orderInfo",{_id:n._id,name:n.name,email:n.email,phone:n.phone})}I()}catch(t){S.fire({icon:"error",title:"\u5931\u6557",text:t.isAxiosError?t.response.data.message:t.message})}n.submitting=!1},U=()=>p.length!==0,X=L(()=>r.length>0&&!r.some(t=>{var o,s;return!(((o=t.tour)==null?void 0:o.sell)||((s=t.activity)==null?void 0:s.sell))}));return(t,o)=>{const s=K("q-card-action");return m(),h("div",de,[me,a(ne,{modelValue:y.value,"onUpdate:modelValue":o[7]||(o[7]=e=>y.value=e),ref:"stepper",color:"primary",animated:""},{navigation:l(()=>[a(se,null,{default:l(()=>[a(d,{onClick:o[5]||(o[5]=e=>t.$refs.stepper.next()),color:"secondary",label:y.value===4?"Finish":"Continue"},null,8,["label"]),y.value>1?(m(),v(d,{key:0,flat:"",color:"primary",onClick:o[6]||(o[6]=e=>t.$refs.stepper.previous()),label:"Back",class:"q-ml-sm"})):Q("",!0)]),_:1})]),default:l(()=>[a(A,{name:1,title:"My cart",icon:"settings",done:y.value>1},{default:l(()=>[a(oe,{grid:t.$q.screen.lt.md,rows:r,columns:H,"row-key":"quantity",filter:J.value,"hide-header":"",class:"cart"},{item:l(e=>[i("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:ee(e.selected?"transform: scale(0.95);":"")},[a(x,{class:Z(e.selected?"bg-grey-2":"")},{default:l(()=>[(m(!0),h(E,null,N(e.cols,u=>(m(),v(ae,{key:u.name},{default:l(()=>[a(O,null,{default:l(()=>[a(Y,null,{default:l(()=>[a(O,null,{default:l(()=>[u.name!=="image"&&u.name!=="edit"&&u.name!=="deleteIt"?(m(),v(C,{key:0,caption:""},{default:l(()=>[c(_(u.value),1)]),_:2},1024)):Q("",!0),u.name==="edit"?(m(),v(C,{key:1,caption:""},{default:l(()=>[a(s,null,{default:l(()=>[a(d,{onClick:f=>g(e.row._id,e.row.quantity-1),variant:"text"},{default:l(()=>[ce]),_:2},1032,["onClick"]),c(" "+_(u.value)+" ",1),a(d,{onClick:f=>g(e.row._id,e.row.quantity+1),variant:"text"},{default:l(()=>[fe]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)):Q("",!0),u.name==="deleteIt"?(m(),v(C,{key:2,caption:""},{default:l(()=>[a(s,null,{default:l(()=>[a(d,{onClick:f=>g(e.row._id,0)},{default:l(()=>[pe]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)):u.name=="image"?(m(),v(z,{key:3,square:""},{default:l(()=>{var f,k;return[i("img",{src:((f=e.row.tour)==null?void 0:f.image)||((k=e.row.activity)==null?void 0:k.image),alt:""},null,8,_e)]}),_:2},1024)):Q("",!0)]),_:2},1024)]),_:2},1024),a(Y,{side:""},{default:l(()=>[a(C,{caption:""})]),_:1})]),_:2},1024)]),_:2},1024))),128))]),_:2},1032,["class"])],4)]),"body-cell-edit":l(e=>[a(T,{edit:e},{default:l(()=>{var u,f;return[a(d,{onClick:k=>g(e.row._id,e.row.quantity-1),variant:"text"},{default:l(()=>[ye]),_:2},1032,["onClick"]),c(" "+_(e.row.quantity)+" ",1),a(d,{onClick:k=>g(e.row._id,e.row.quantity+1),variant:"text"},{default:l(()=>[ge]),_:2},1032,["onClick"]),i("p",null,"price: "+_(((u=e.row.tour)==null?void 0:u.price)*e.row.quantity||((f=e.row.activity)==null?void 0:f.price)*e.row.quantity)+" NTD",1)]}),_:2},1032,["edit"])]),"body-cell-deleteIt":l(e=>[a(T,null,{default:l(()=>[a(d,{color:"secondary",onClick:u=>g(e.row._id,0)},{default:l(()=>[he]),_:2},1032,["onClick"])]),_:2},1024)]),"body-cell-image":l(e=>[a(T,null,{default:l(()=>[a(z,{square:"",size:"100px"},{default:l(()=>{var u,f;return[i("img",{src:((u=e.row.tour)==null?void 0:u.image)||((f=e.row.activity)==null?void 0:f.image),alt:""},null,8,ve)]}),_:2},1024)]),_:2},1024)]),_:1},8,["grid","rows","filter"]),i("p",be,"Total: "+_(V(B))+" NTD",1)]),_:1},8,["done"]),a(A,{name:2,title:"Enter Info",icon:"create_new_folder",done:y.value>2},{default:l(()=>[ke,a(d,{color:"secondary",onClick:o[0]||(o[0]=e=>P("")),disabled:U()},{default:l(()=>[Ce]),_:1},8,["disabled"]),a(te,{modelValue:n.dialog,"onUpdate:modelValue":o[4]||(o[4]=e=>n.dialog=e),persistent:""},{default:l(()=>[a(x,{style:{"min-width":"700px"}},{default:l(()=>[a(q,null,{default:l(()=>[we]),_:1}),a(q,{class:"q-pt-none"},{default:l(()=>[a(ie,{onSubmit:le(W,["prevent"])},{default:l(()=>[a(D,{filled:"",modelValue:n.name,"onUpdate:modelValue":o[1]||(o[1]=e=>n.name=e),label:"Your name",rules:[e=>e&&e.length>0||"Please enter your name"]},null,8,["modelValue","rules"]),a(D,{filled:"",modelValue:n.email,"onUpdate:modelValue":o[2]||(o[2]=e=>n.email=e),label:"Your email",rules:R},null,8,["modelValue","rules"]),a(D,{filled:"",modelValue:n.phone,"onUpdate:modelValue":o[3]||(o[3]=e=>n.phone=e),label:"Your phone number",rules:[e=>e&&e.length>0||"Please enter your phone number"]},null,8,["modelValue","rules"]),M(a(d,{flat:"",label:"Cancel"},null,512),[[G]]),M(a(d,{flat:"",label:"Save",type:"submit",color:"secondary"},null,512),[[G]])]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),a(x,{class:"my-card info"},{default:l(()=>[a(q,null,{default:l(()=>[(m(!0),h(E,null,N(p,e=>(m(),h("div",{key:e._id},[a(re,null,{default:l(()=>[i("tr",null,[Qe,i("td",null,_(e.name),1)]),i("tr",null,[xe,i("td",null,_(e.email),1)]),i("tr",null,[Ve,i("td",null,_(e.phone),1)])]),_:2},1024),a(d,{onClick:u=>P(e._id),flat:""},{default:l(()=>[qe]),_:2},1032,["onClick"])]))),128))]),_:1})]),_:1})]),_:1},8,["done"]),a(A,{name:3,title:"Check Out",icon:"assignment"},{default:l(()=>[a(x,{class:"my-card checkoutPage"},{default:l(()=>[a(q,null,{default:l(()=>[(m(!0),h(E,null,N(p,e=>(m(),h("div",{key:e._id},[i("p",null,"total: "+_(V(B))+" NTD",1),Ie]))),128))]),_:1})]),_:1}),a(d,{color:"secondary",onClick:V(b).checkout,disabled:!U()||!V(X)},{default:l(()=>[$e]),_:1},8,["onClick","disabled"])]),_:1})]),_:1},8,["modelValue"])])}}};export{je as default};
