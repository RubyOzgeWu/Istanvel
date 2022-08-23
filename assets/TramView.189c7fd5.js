import{b as R}from"./QSelect.9af855fb.js";import{a as M,b as x,Q as y}from"./QTabPanels.d83532a9.js";import{Q as C}from"./QTabs.2f200828.js";import{Q as H}from"./QSplitter.60fff252.js";import{Q as p}from"./QImg.593d4b2d.js";import{L as q}from"./index.esm.8e494e23.js";import{A as n,l as b,m as S,p as e,f as l,C as o,r as T,K as I,aR as $}from"./index.b25a853a.js";import"./QItem.cb402279.js";import"./QMenu.3d95e989.js";import"./selection.43233a4d.js";import"./rtl.4b414a6d.js";import"./use-panel.b3c5d004.js";import"./touch.70a9dd44.js";import"./use-cache.b0833c75.js";import"./QResizeObserver.fc61cf65.js";import"./TouchPan.f5d18d19.js";const k={class:"row card"},V=e("div",{class:"col-8 column left"},[e("div",{id:"map"})],-1),P={class:"col-4 column right"},A={class:"col"},B=e("div",{class:"absolute-full text-subtitle2 flex column flex-center"},[e("h3",null,"Hagia Sophia")],-1),E=e("h2",null,"hagia sophia",-1),j=e("p",null,"Hagia Sophia is the most popular site in Istanbul",-1),Q=e("div",{class:"absolute-full text-subtitle2 flex column flex-center"},[e("h3",null,"Hagia Sophia")],-1),z=e("div",{class:"absolute-full text-subtitle2 flex column flex-center"},[e("h3",null,"Hagia Sophia")],-1),K=e("div",{class:"absolute-full text-subtitle2 flex column flex-center"},[e("h3",null,"Hagia Sophia")],-1),F=e("div",{class:"absolute-full text-subtitle2 flex column flex-center"},[e("h3",null,"Hagia Sophia")],-1),N={__name:"T1Card",setup(w){const t=n({google:null,map:null,markers:null}),c=n([]),s=n([]),g=n([41.00872061287202,41.005555315974014,41.008444297995865,41.00595869374599,41.00581230832557,41.00654743413211,41.00598828654755,41.00854590160801,41.007584388952075,41.0087335816696,41.01084669595379,41.00900766512918,41.02938665038105,41.009573919099935,41.032463886347855,41.03070203395343,41.02656696949414,41.02692023192094,41.026860250467145,41.02735591209257,41.023274293843905,41.01667817187497,41.017196650737546,41.016286677757826,41.01519556181798,41.015397902318156,41.01172996820429,41.01848132054741,41.02154019799798]),_=n([28.980142811534765,28.97692108639225,28.981144052018266,28.975123969205136,28.975077198040346,28.974602080853305,28.974380540370063,28.9778458115348,28.97248075755707,28.97131744221636,28.968014453864505,28.96862481153483,28.935779426876,28.961763082699736,28.990498525029732,28.983709201733518,28.98086778454643,28.98125146920558,28.983003228722346,28.98235052687599,28.975385796194438,28.9705515845461,28.971937940370243,28.972596813381323,28.97358099619431,28.976477781624816,28.983314525029353,28.9202755826851,28.92605140053191]),u=n(["Hagia Sofia","Sultan Ahmet Mosque","Fountain Sultan Ahmed III","Hippodrome of Constantinople","Serpent Column","Museum of Turkish and Islamic Arts","Ibrahim Pasha Palace","Basilica Cistern","Theodosius Cistern","Column of Constantine","Grand Bazaar","Sinan Pasha Tomb","Mihrimah Sultan Mosque","Theodosius Forumu","Molla \xC7elebi Mosque","Orhan Kemal Museum","K\u0131l\u0131\xE7 Ali Pasha Complex","Tophane Fountain","Tophane-i Amire Sanjak Tower","Tophane Pavilion","Karak\xF6y Palace","Spice Bazaar","Yeni Mosque","Turkey \u0130\u015F Bank Museum","PTT Museum","Istanbul Railway Museum","Topkap\u0131 Palace","Panorama 1453 History Museum","Byzantine Walls"]);let h,d;const i=async()=>{const m=new q({apiKey:"AIzaSyCfNMx1g2cIcioxRHUxOKHGEBFIlJpJhuU",version:"weekly",libraries:["places"],language:"zh-TW"});t.google=await m.load(),t.map=new t.google.maps.Map(document.getElementById("map"),{center:{lat:41.084153235890845,lng:28.81618672479194},zoom:14,mapTypeControl:!1,fullscreenControl:!1}),h=new t.google.maps.DirectionsService,d=new t.google.maps.DirectionsRenderer,d.setMap(t.map),r()},r=()=>{const m={origin:{lat:41.03339389864939,lng:28.860787869901504},destination:{lat:41.03445878919029,lng:28.99275484167178},travelMode:"TRANSIT",transitOptions:{modes:["RAIL"],routingPreference:"FEWER_TRANSFERS"}};h.route(m,function(f,v){if(v==="OK"){f.routes[0].legs[0].steps;for(let a=0;a<=28;a++)c[a]=new t.google.maps.Marker({position:{lat:g[a],lng:_[a]},map:t.map,label:{text:`${a+1}`,color:"#fff"}}),s[a]=new t.google.maps.InfoWindow({content:u[a]}),c[a].addListener("click",function(){s[a].anchor?s[a].close():s[a].open(t.map,c[a])});d.setDirections(f)}})};return setTimeout(()=>{i()},400),(m,f)=>(b(),S("div",k,[V,e("div",P,[e("div",A,[l(p,{src:"https://cdn.quasar.dev/img/parallax2.jpg"},{default:o(()=>[B]),_:1}),E,j,l(p,{src:"https://cdn.quasar.dev/img/parallax2.jpg"},{default:o(()=>[Q]),_:1}),l(p,{src:"https://cdn.quasar.dev/img/parallax2.jpg"},{default:o(()=>[z]),_:1}),l(p,{src:"https://cdn.quasar.dev/img/parallax2.jpg"},{default:o(()=>[K]),_:1}),l(p,{src:"https://cdn.quasar.dev/img/parallax2.jpg"},{default:o(()=>[F]),_:1})])])]))}},U={class:"row card"},O=e("div",{class:"col-8 column left"},[e("div",{id:"map"})],-1),W={class:"col-4 column right"},D={class:"col"},L=e("div",{class:"absolute-full text-subtitle2 flex column flex-center"},[e("h3",null,"Hagia Sophia")],-1),G=e("h2",null,"hagia sophia",-1),J=e("p",null,"Hagia Sophia is the most popular site in Istanbul",-1),Y=e("div",{class:"absolute-full text-subtitle2 flex column flex-center"},[e("h3",null,"Hagia Sophia")],-1),X=e("div",{class:"absolute-full text-subtitle2 flex column flex-center"},[e("h3",null,"Hagia Sophia")],-1),Z=e("div",{class:"absolute-full text-subtitle2 flex column flex-center"},[e("h3",null,"Hagia Sophia")],-1),ee=e("div",{class:"absolute-full text-subtitle2 flex column flex-center"},[e("h3",null,"Hagia Sophia")],-1),ae={__name:"T5Card",setup(w){const t=n({google:null,map:null,markers:null}),c=n([]),s=n([]),g=n([41.02699857468409,41.02909219592859,40.958506845625465,41.029207344408356,41.02808904101996,41.02693827481015,41.02676655682241,41.03392727420108]),_=n([28.956321199887075,28.95199145571126,28.82251492190739,28.9464674403704,28.945886540370537,28.947952028722344,28.9514214692055,28.940506455711382]),u=n(["G\xFCl Mosque","The Ecumenical Patriarchate","St. Stephen Catholic Church","Pammakaristos Church","Hirami Ahmet Pasha Mosque","Ismail Aga Mosque","Yavuz Sultan Selim Mosque","Palace of Blachernae"]);let h,d;const i=async()=>{const m=new q({apiKey:"AIzaSyCfNMx1g2cIcioxRHUxOKHGEBFIlJpJhuU",version:"weekly",libraries:["places"],language:"zh-TW"});t.google=await m.load(),t.map=new t.google.maps.Map(document.getElementById("map"),{center:{lat:41.084153235890845,lng:28.81618672479194},zoom:14,mapTypeControl:!1,fullscreenControl:!1}),h=new t.google.maps.DirectionsService,d=new t.google.maps.DirectionsRenderer,d.setMap(t.map),r()},r=()=>{const m={origin:{lat:41.024488999638436,lng:28.960251966959984},destination:{lat:41.08713508458404,lng:28.943878907876684},travelMode:"TRANSIT",transitOptions:{modes:["RAIL"],routingPreference:"FEWER_TRANSFERS"}};h.route(m,function(f,v){if(v==="OK"){f.routes[0].legs[0].steps;for(let a=0;a<=7;a++)c[a]=new t.google.maps.Marker({position:{lat:g[a],lng:_[a]},map:t.map,label:{text:`${a+1}`,color:"#fff"}}),s[a]=new t.google.maps.InfoWindow({content:u[a]}),c[a].addListener("click",function(){s[a].anchor?s[a].close():s[a].open(t.map,c[a])});d.setDirections(f)}})};return setTimeout(()=>{i()},400),(m,f)=>(b(),S("div",U,[O,e("div",W,[e("div",D,[l(p,{src:"https://cdn.quasar.dev/img/parallax2.jpg"},{default:o(()=>[L]),_:1}),G,J,l(p,{src:"https://cdn.quasar.dev/img/parallax2.jpg"},{default:o(()=>[Y]),_:1}),l(p,{src:"https://cdn.quasar.dev/img/parallax2.jpg"},{default:o(()=>[X]),_:1}),l(p,{src:"https://cdn.quasar.dev/img/parallax2.jpg"},{default:o(()=>[Z]),_:1}),l(p,{src:"https://cdn.quasar.dev/img/parallax2.jpg"},{default:o(()=>[ee]),_:1})])])]))}};const te={class:"q-pa-md Tramvay",id:"TransportView"},le={class:"row header"},oe=e("div",{class:"title col-9"},[e("h2",{class:"text-left"},"Tramvay"),e("p",{class:"text-left"},[I("There are 5 tram lines in Istanbul."),e("br"),I("Most of popular sites in Istanbul are on T1 and T5. ")])],-1),se={class:"q-pa-md row main"},ne={class:"col-12 showBox"},we={__name:"TramView",setup(w){const t=$(),c=T("tramvay"),s=T("T1"),g=T("Tramvay"),_=n(["Metro","Marmaray"]),u=n([]),h=async d=>{u.splice(0,u.length),u.push(d),console.log(u),u.includes("Metro")?t.push("/metro"):u.includes("Marmaray")&&t.push("/Marmaray")};return(d,i)=>(b(),S("div",te,[e("div",le,[oe,l(R,{class:"col-3 navigator",outlined:"",modelValue:g.value,"onUpdate:modelValue":[i[0]||(i[0]=r=>g.value=r),h],options:_},null,8,["modelValue","options"])]),e("div",se,[e("div",ne,[l(M,{modelValue:c.value,"onUpdate:modelValue":i[3]||(i[3]=r=>c.value=r),animated:""},{default:o(()=>[l(x,{name:"tramvay",class:"q-pa-none"},{default:o(()=>[l(H,null,{before:o(()=>[l(C,{modelValue:s.value,"onUpdate:modelValue":i[1]||(i[1]=r=>s.value=r),vertical:"",class:"text-teal"},{default:o(()=>[l(y,{name:"T1",label:"T1"}),l(y,{name:"T5",label:"T5"})]),_:1},8,["modelValue"])]),after:o(()=>[l(M,{modelValue:s.value,"onUpdate:modelValue":i[2]||(i[2]=r=>s.value=r),animated:"","transition-prev":"slide-down","transition-next":"slide-up"},{default:o(()=>[l(x,{name:"T1"},{default:o(()=>[l(N)]),_:1}),l(x,{name:"T5"},{default:o(()=>[l(ae)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])])])]))}};export{we as default};
