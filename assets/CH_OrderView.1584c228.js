import{Q as s}from"./QTable.855044b7.js";import{A as c,k as m,l as p,f as d,bc as u,aT as f}from"./index.a8cc4891.js";import"./QList.8d104970.js";import"./QMarkupTable.48448a8b.js";import"./QSelect.971ca32f.js";import"./QItem.5db34851.js";import"./QMenu.15a86a7d.js";import"./selection.4c00b57a.js";import"./rtl.4b414a6d.js";import"./use-fullscreen.f19dab9e.js";const _={class:"q-pa-md"},P={__name:"CH_OrderView",setup(w){const a=c([]),l=[{name:"ID",required:!0,label:"ID",align:"left",field:e=>e._id,format:e=>`${e}`,sortable:!0},{name:"date",align:"center",field:e=>new Date(e.date).toLocaleDateString(),label:"\u65E5\u671F"},{name:"edit",label:"\u7E3D\u5171",field:e=>e.totalPrice,sortable:!0}];return(async()=>{try{const{data:e}=await u.get("/orders");a.push(...e.result.map(t=>(t.totalPrice=t.order.reduce((n,r)=>{var i,o;return n+((i=r.tour)==null?void 0:i.price)||((o=r.activity)==null?void 0:o.price)*r.quantity},0),t)))}catch(e){console.log(e),f.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u8A02\u55AE\u5931\u6557"})}})(),(e,t)=>(m(),p("div",_,[d(s,{grid:e.$q.screen.lt.md,title:"\u6211\u7684\u8A02\u55AE",rows:a,columns:l,"row-key":"name",filter:e.filter},null,8,["grid","rows","filter"])]))}};export{P as default};
