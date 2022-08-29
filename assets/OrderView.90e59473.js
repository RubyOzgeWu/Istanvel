import{Q as D}from"./QMarkupTable.f708a3d2.js";import{E as x,r as w,k as l,l as r,n as e,G as C,H as o,J as O,f as u,ba as P,bd as N,aV as S,I as T,F as y,b1 as v,b0 as c,O as V,aS as B,a$ as b,bx as $,N as q,Q as A}from"./index.2be97d02.js";import{C as I}from"./ClosePopup.d70e8ffa.js";const L={id:"OrderView"},U=e("h2",{class:"orderTitle"},"My Orders",-1),E={class:"order"},F=e("thead",null,[e("th",null,"Order ID"),e("th",null,"Order"),e("th",null,"Ordered date"),e("th",null,"Total")],-1),M=e("thead",null,[e("th",null,"Order ID"),e("th",null,"Ordered date")],-1),z=["onClick"],G=e("div",{class:"text-h6 details",style:{color:"#A10D48","font-family":"'Ubuntu', sans-serif"}},"Details",-1),H={class:"price text-right",style:{color:"#A10D48","font-size":"1.25rem","font-family":"'Ubuntu', sans-serif","font-weight":"500","margin-top":"10%"}},X={__name:"OrderView",setup(J){const s=x([]),p=x({order:"",name:"",totalPrice:""}),g=w(!1),Q=n=>{const i=n===""?-1:s.findIndex(_=>_._id===n);i!==-1&&(g.value=!0,p.order=s[i].order,p.totalPrice=s[i].totalPrice)};return(async()=>{try{const{data:n}=await N.get("/orders");s.splice(0,s.length),s.push(...n.result.map(i=>(i.totalPrice=i.order.reduce((_,t)=>{var a,d;return _+(((a=t.tour)==null?void 0:a.price)||((d=t.activity)==null?void 0:d.price))*t.quantity},0),i)))}catch(n){console.log(n),S.fire({icon:"error",title:"failed",text:"Cannot get the order"})}})(),(n,i)=>{const _=T("router-link");return l(),r("div",L,[U,e("div",E,[n.$q.screen.gt.xs?(l(),C(D,{key:0},{default:o(()=>[F,e("tbody",null,[(l(!0),r(y,null,v(s,t=>(l(),r("tr",{key:t._id},[e("td",null,c(t._id),1),e("td",null,[e("ul",null,[(l(!0),r(y,null,v(t.order,a=>{var d,f,m;return l(),r("li",{key:a._id},[u(_,{to:(d=a.tour)!=null&&d._id?"/tour/"+((f=a.tour)==null?void 0:f._id):"/activity/"+((m=a.activity)==null?void 0:m._id)},{default:o(()=>{var h,k;return[V(c(((h=a.tour)==null?void 0:h.name)||((k=a.activity)==null?void 0:k.name)),1)]}),_:2},1032,["to"])])}),128))])]),e("td",null,c(new Date(t.date).toLocaleDateString()),1),e("td",null,"NTD "+c(t.totalPrice),1)]))),128))])]),_:1})):O("",!0),n.$q.screen.lt.sm?(l(),C(D,{key:1},{default:o(()=>[M,e("tbody",null,[(l(!0),r(y,null,v(s,t=>(l(),r("tr",{key:t._id},[e("td",{class:"id",onClick:a=>Q(t._id)},c(t._id),9,z),e("td",null,c(new Date(t.date).toLocaleDateString()),1)]))),128))])]),_:1})):O("",!0)]),e("div",null,[u(P,{modelValue:g.value,"onUpdate:modelValue":i[0]||(i[0]=t=>g.value=t),"full-width":""},{default:o(()=>[u(B,{style:{width:"700px","max-width":"80vw"}},{default:o(()=>[u(b,null,{default:o(()=>[G]),_:1}),u(b,{class:"q-pt-none"},{default:o(()=>[(l(!0),r(y,null,v(p.order,t=>{var a,d,f;return l(),r("div",{key:t._id},[u(_,{to:(a=t.tour)!=null&&a._id?"/tour/"+((d=t.tour)==null?void 0:d._id):"/activity/"+((f=t.activity)==null?void 0:f._id)},{default:o(()=>{var m,h;return[V(c(((m=t.tour)==null?void 0:m.name)||((h=t.activity)==null?void 0:h.name)),1)]}),_:2},1032,["to"])])}),128)),e("p",H,"Total: "+c(p.totalPrice)+" $",1)]),_:1}),u($,{align:"right",class:"text-teal"},{default:o(()=>[q(u(A,{flat:"",label:"OK"},null,512),[[I]])]),_:1})]),_:1})]),_:1},8,["modelValue"])])])}}};export{X as default};