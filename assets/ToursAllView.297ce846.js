import{Q as p}from"./QImg.cfd35a2a.js";import{_ as h}from"./merveilleux.28a72bfd.js";import{I as x,k as a,l as o,f as t,H as c,a$ as n,n as s,O as v,b0 as d,aS as g,E as k,F as u,b1 as m,aU as w,aV as T}from"./index.1d8df0df.js";import{a as q}from"./aos.2f410487.js";const C={class:"q-pa-xl-lg q-pa-lg-md q-pa-md-md q-pa-sm-sm q-pa-xs-xs row items-start q-gutter-md",id:"TourCard","data-aos":"fade-left"},b={class:"tourName"},y={class:"price"},_={__name:"TourCard",props:["tour"],setup(e){return(i,f)=>{const r=x("router-link");return a(),o("div",C,[t(g,{class:"my-card column"},{default:c(()=>[t(n,{class:"col-6 col-md-7 image"},{default:c(()=>[t(p,{src:e.tour.image},null,8,["src"])]),_:1}),t(n,{class:"col-6 col-md-5 info"},{default:c(()=>[s("div",b,[t(r,{to:"/tour/"+e.tour._id,class:"nameLink"},{default:c(()=>[v(d(e.tour.name),1)]),_:1},8,["to"])]),s("div",y,[s("p",null,"NT$ "+d(e.tour.price),1)])]),_:1})]),_:1})])}}},V={class:"q-pa-md",id:"ToursAllView"},$={class:"banner"},N=s("div",{class:"absolute-full text-subtitle2 flex column flex-center"},[s("h1",null,"Package Tours"),s("p",null,"Find the most special, impressive and fantastic journey in Istanbul")],-1),Q={class:"q-pa-md background"},S={class:"tours row"},B={class:"col-12 row"},F={class:"col-12 row"},D={__name:"ToursAllView",setup(e){q.init();const i=k([]);return(async()=>{try{const{data:r}=await w.get("/tours");i.push(...r.result)}catch{T.fire({icon:"error",title:"failed",text:"\u4F3A\u670D\u5668\u932F\u8AA4"})}})(),(r,I)=>(a(),o("div",V,[s("div",$,[t(p,{src:h},{default:c(()=>[N]),_:1})]),s("div",Q,[s("div",S,[s("div",B,[(a(!0),o(u,null,m(i,l=>(a(),o("div",{class:"col col-xl-3 col-sm-3 col-md-3 col-xs-6",key:l._id},[t(_,{tour:l,id:"TourCard"},null,8,["tour"])]))),128))]),s("div",F,[(a(!0),o(u,null,m(i,l=>(a(),o("div",{class:"col col-xl-3 col-sm-3 col-md-3 col-xs-6",key:l._id},[t(_,{tour:l,id:"TourCard"},null,8,["tour"])]))),128))])])])]))}};export{D as default};