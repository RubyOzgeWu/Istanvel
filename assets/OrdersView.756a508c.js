import{r as m,A as u,k as p,l as f,f as o,C as c,bd as g,aV as b,aX as h,G as w}from"./index.1af9d501.js";import{Q as _}from"./QTable.5e4768da.js";import"./QList.f08dd725.js";import"./QMarkupTable.6ab7694f.js";import"./QSelect.4bc5697e.js";import"./QItem.c4254061.js";import"./QMenu.7079edfb.js";import"./selection.13c9e09e.js";import"./rtl.4b414a6d.js";import"./use-fullscreen.7a1e9363.js";const I={class:"q-pa-md",id:"OrdersView"},O={__name:"OrdersView",setup(V){const a=m(""),n=u([]),d=[{name:"ID",required:!0,label:"ID",align:"left",field:e=>e._id,format:e=>`${e}`,sortable:!0},{name:"account",align:"center",field:e=>e.user.account,label:"\u8A02\u55AE\u5E33\u6236"},{name:"name",align:"center",field:e=>e.orderInfo[0].name,label:"\u8A02\u8CFC\u4EBA\u59D3\u540D"},{name:"name",align:"center",field:e=>e.orderInfo[0].email,label:"\u8A02\u8CFC\u4EBA\u4FE1\u7BB1"},{name:"name",align:"center",field:e=>e.orderInfo[0].phone,label:"\u8A02\u8CFC\u4EBA\u96FB\u8A71"},{name:"date",align:"center",field:e=>new Date(e.date).toLocaleDateString(),label:"\u8A02\u55AE\u65E5\u671F"},{name:"edit",label:"total",field:e=>e.totalPrice,sortable:!0}];return(async()=>{try{const{data:e}=await g.get("/orders/all");n.push(...e.result.map(t=>(t.totalPrice=t.order.reduce((r,l)=>{var i,s;return r+((i=l.tour)==null?void 0:i.price)||((s=l.activity)==null?void 0:s.price)*l.quantity},0),t)))}catch(e){console.log(e),b.fire({icon:"error",title:"failed",text:"Cannot get the order"})}})(),(e,t)=>(p(),f("div",I,[o(_,{grid:e.$q.screen.lt.md,title:"\u8A02\u55AE\u7BA1\u7406",rows:n,columns:d,"row-key":"name",filter:a.value},{"top-right":c(()=>[o(h,{borderless:"",dense:"",debounce:"300",modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=r=>a.value=r),placeholder:"Search"},{append:c(()=>[o(w,{name:"search"})]),_:1},8,["modelValue"])]),_:1},8,["grid","rows","filter"])]))}};export{O as default};