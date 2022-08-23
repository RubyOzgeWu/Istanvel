import{b as k}from"./QSelect.65860bdc.js";import{a as I,b as x,Q as b}from"./QTabPanels.e8d1e7e6.js";import{Q as R}from"./QTabs.d312b738.js";import{Q as H}from"./QSplitter.c7e21e72.js";import{Q as h}from"./QImg.2af157fb.js";import{L as y}from"./index.esm.8e494e23.js";import{A as o,l as M,m as w,p as t,f as s,C as r,r as $,K as T,aR as q}from"./index.164d3cae.js";import"./QItem.afebba27.js";import"./QMenu.15163526.js";import"./selection.98a27e5c.js";import"./rtl.4b414a6d.js";import"./use-panel.bebfd641.js";import"./touch.70a9dd44.js";import"./use-cache.b0833c75.js";import"./QResizeObserver.3b2607c5.js";import"./TouchPan.7325044c.js";const C={class:"row card"},A=t("div",{class:"col-8 column left"},[t("div",{id:"map"})],-1),E={class:"col-4 column right"},z={class:"col"},B=t("div",{class:"absolute-full text-subtitle2 flex column flex-center"},[t("h3",null,"Hagia Sophia")],-1),K=t("h2",null,"hagia sophia",-1),W=t("p",null,"Hagia Sophia is the most popular site in Istanbul",-1),O=t("div",{class:"absolute-full text-subtitle2 flex column flex-center"},[t("h3",null,"Hagia Sophia")],-1),N=t("div",{class:"absolute-full text-subtitle2 flex column flex-center"},[t("h3",null,"Hagia Sophia")],-1),F=t("div",{class:"absolute-full text-subtitle2 flex column flex-center"},[t("h3",null,"Hagia Sophia")],-1),U=t("div",{class:"absolute-full text-subtitle2 flex column flex-center"},[t("h3",null,"Hagia Sophia")],-1),D={__name:"M1Card",setup(S){const a=o({google:null,map:null,markers:null}),i=o([]),l=o([]),f=o([41.0101944649691,41.015637550979484,41.02160502023441,41.01466468022397]),_=o([28.94883369988674,28.95025855386467,28.926040684546248,28.955843786327804]),g=o(["Murat Pasha Mosque","Column of Marcian","Byzantine wall","Sarachane Park"]);let p,n;const d=async()=>{const c=new y({apiKey:"AIzaSyCfNMx1g2cIcioxRHUxOKHGEBFIlJpJhuU",version:"weekly",libraries:["places"],language:"zh-TW"});a.google=await c.load(),a.map=new a.google.maps.Map(document.getElementById("map"),{center:{lat:41.084153235890845,lng:28.81618672479194},zoom:14,mapTypeControl:!1,fullscreenControl:!1}),p=new a.google.maps.DirectionsService,n=new a.google.maps.DirectionsRenderer,n.setMap(a.map),m()},m=()=>{const c={origin:{lat:41.0057759736486,lng:28.951441730050323},destination:{lat:41.033818957756615,lng:28.84281201296241},travelMode:"TRANSIT"};p.route(c,function(u,v){if(v==="OK"){u.routes[0].legs[0].steps;for(let e=0;e<=3;e++)i[e]=new a.google.maps.Marker({position:{lat:f[e],lng:_[e]},map:a.map,label:{text:`${e+1}`,color:"#fff"}}),l[e]=new a.google.maps.InfoWindow({content:g[e]}),i[e].addListener("click",function(){l[e].anchor?l[e].close():l[e].open(a.map,i[e])});n.setDirections(u)}})};return setTimeout(()=>{d()},400),(c,u)=>(M(),w("div",C,[A,t("div",E,[t("div",z,[s(h,{src:"https://cdn.quasar.dev/img/parallax2.jpg"},{default:r(()=>[B]),_:1}),K,W,s(h,{src:"https://cdn.quasar.dev/img/parallax2.jpg"},{default:r(()=>[O]),_:1}),s(h,{src:"https://cdn.quasar.dev/img/parallax2.jpg"},{default:r(()=>[N]),_:1}),s(h,{src:"https://cdn.quasar.dev/img/parallax2.jpg"},{default:r(()=>[F]),_:1}),s(h,{src:"https://cdn.quasar.dev/img/parallax2.jpg"},{default:r(()=>[U]),_:1})])])]))}};const V={class:"row card"},P=t("div",{class:"col-8 column left"},[t("div",{id:"map"})],-1),j={class:"col-4 column right"},J={class:"col"},L=t("div",{class:"absolute-full text-subtitle2 flex column flex-center"},[t("h3",null,"Hagia Sophia")],-1),Q=t("h2",null,"hagia sophia",-1),G=t("p",null,"Hagia Sophia is the most popular site in Istanbul",-1),Y=t("div",{class:"absolute-full text-subtitle2 flex column flex-center"},[t("h3",null,"Hagia Sophia")],-1),X={__name:"M2Card",setup(S){const a=o({google:null,map:null,markers:null}),i=o([]),l=o([]),f=o([41.0085897,41.01011326,41.01185542,41.00914523,41.00996409,41.01042438,41.01329268,41.01638709,41.01615222,41.01745548,41.01466468,41.02450076,41.02595063,41.03201022,41.03253419,41.02707333,41.02790213,41.03806963,41.04486655396734,41.04841500711954,41.04955127405445,41.05657818351158,41.085171832869285,41.096557758632024,41.14645602053973,41.13436797796986]),_=o([28.955665824973337,28.956688142029563,28.981394857371743,28.9666399979861,28.961541069150638,28.965256242163424,28.960296209631593,28.960192267302606,28.964056928669972,28.963810165374785,28.955843786327804,28.971112599834715,28.97422680155211,28.975221755657586,28.976897363606387,28.972583182644687,28.976840899834766,28.984834177213436,28.9862291421642,28.988013944012458,28.99440904401254,28.98713582682264,29.00636856730424,28.989195953810828,29.016304869153878,29.032339840842432]),g=o(["Bodrum Mosque","Laleli Mosque","Istanbul Archaeology Museums","Beyazit Square","Bayezid II Hamam","Bayezid II Mosque","Kalenderhane Mosque","Church-Mosque of Vefa","S\xFCleymaniye Mosque","Mimar Sinan T\xFCrbesi","Sarachane Park","Arap Camii","Galata Tower","Pera Museum","The Church of St. Anthony of Padua","Neve Shalom Synagogue","Crimea Memorial Church","Taksim Square","Cathedral of the Holy Spirit","Harbiye Military Museum and Cultural Site Command","Te\u015Fvikiye Camii","Atat\xFCrk Museum","Istanbul Sapphire observation deck","Sakl\u0131g\xF6l","Fatih Forest Nature Park","Atat\xFCrk Kent Orman\u0131"]);let p,n;const d=async()=>{const c=new y({apiKey:"AIzaSyCfNMx1g2cIcioxRHUxOKHGEBFIlJpJhuU",version:"weekly",libraries:["places"],language:"zh-TW"});a.google=await c.load(),a.map=new a.google.maps.Map(document.getElementById("map"),{center:{lat:41.015637550979484,lng:28.95025855386467},zoom:14,mapTypeControl:!1,fullscreenControl:!1}),p=new a.google.maps.DirectionsService,n=new a.google.maps.DirectionsRenderer,n.setMap(a.map),m()},m=()=>{const c={origin:{lat:41.00609960361108,lng:28.951570296095493},destination:{lat:41.13997814478381,lng:29.03074866549749},travelMode:"TRANSIT"};p.route(c,function(u,v){if(v==="OK"){u.routes[0].legs[0].steps;for(let e=0;e<=24;e++)i[e]=new a.google.maps.Marker({position:{lat:f[e],lng:_[e]},map:a.map,label:{text:`${e+1}`,color:"#fff"}}),l[e]=new a.google.maps.InfoWindow({content:g[e]}),i[e].addListener("click",function(){l[e].anchor?l[e].close():l[e].open(a.map,i[e])});n.setDirections(u)}})};return setTimeout(()=>{d()},400),(c,u)=>(M(),w("div",V,[P,t("div",j,[t("div",J,[s(h,{src:"https://cdn.quasar.dev/img/parallax2.jpg"},{default:r(()=>[L]),_:1}),Q,G,s(h,{src:"https://cdn.quasar.dev/img/parallax2.jpg"},{default:r(()=>[Y]),_:1})])])]))}},Z={class:"row card"},ee=t("div",{class:"col-8 column left"},[t("div",{id:"map"})],-1),te={class:"col-4 column right"},ae={class:"col"},oe=t("div",{class:"absolute-full text-subtitle2 flex column flex-center"},[t("h3",null,"Hagia Sophia")],-1),se=t("h2",null,"hagia sophia",-1),le=t("p",null,"Hagia Sophia is the most popular site in Istanbul",-1),ne=t("div",{class:"absolute-full text-subtitle2 flex column flex-center"},[t("h3",null,"Hagia Sophia")],-1),ie={__name:"M3Card",setup(S){const a=o({google:null,map:null,markers:null}),i=o([]),l=o([]),f=o([41.06268780531423,41.099245508571]),_=o([28.80776376915187,28.80780936915275]),g=o(["Mall of Istanbul","Water Valley Park"]);let p,n;const d=async()=>{const c=new y({apiKey:"AIzaSyCfNMx1g2cIcioxRHUxOKHGEBFIlJpJhuU",version:"weekly",libraries:["places"],language:"zh-TW"});a.google=await c.load(),a.map=new a.google.maps.Map(document.getElementById("map"),{center:{lat:41.015637550979484,lng:28.95025855386467},zoom:14,mapTypeControl:!1,fullscreenControl:!1}),p=new a.google.maps.DirectionsService,n=new a.google.maps.DirectionsRenderer,n.setMap(a.map),m()},m=()=>{const c={origin:{lat:41.11014624730951,lng:28.800815680119133},destination:{lat:41.033414159987075,lng:28.842282060255833},travelMode:"TRANSIT",transitOptions:{modes:["SUBWAY"],routingPreference:"FEWER_TRANSFERS"}};p.route(c,function(u,v){if(v==="OK"){u.routes[0].legs[0].steps[1];for(let e=0;e<=1;e++)i[e]=new a.google.maps.Marker({position:{lat:f[e],lng:_[e]},map:a.map,label:{text:`${e+1}`,color:"#fff"}}),l[e]=new a.google.maps.InfoWindow({content:g[e]}),i[e].addListener("click",function(){l[e].anchor?l[e].close():l[e].open(a.map,i[e])});n.setDirections(u)}})};return setTimeout(()=>{d()},400),(c,u)=>(M(),w("div",Z,[ee,t("div",te,[t("div",ae,[s(h,{src:"https://cdn.quasar.dev/img/parallax2.jpg"},{default:r(()=>[oe]),_:1}),se,le,s(h,{src:"https://cdn.quasar.dev/img/parallax2.jpg"},{default:r(()=>[ne]),_:1})])])]))}},ce={class:"row card"},re=t("div",{class:"col-8 column left"},[t("div",{id:"map"})],-1),ue={class:"col-4 column right"},de={class:"col"},pe=t("div",{class:"absolute-full text-subtitle2 flex column flex-center"},[t("h3",null,"Hagia Sophia")],-1),me=t("h2",null,"hagia sophia",-1),ge=t("p",null,"Hagia Sophia is the most popular site in Istanbul",-1),fe=t("div",{class:"absolute-full text-subtitle2 flex column flex-center"},[t("h3",null,"Hagia Sophia")],-1),_e={__name:"M4Card",setup(S){const a=o({google:null,map:null,markers:null}),i=o([]),l=o([]),f=o([40.99273603659175,40.990120750104566,40.99085434507776,40.99114204089927,40.991241633649864,40.9971468172588,40.97918337189312,40.98016327408239]),_=o([29.014894355656573,29.024443284491944,29.024914224972825,29.026090113327456,29.026722840314683,29.023247467302106,29.025012653808037,29.026945069149974]),g=o(["Kad\u0131k\xF6y \u0130nciburnu Feneri","Armenian Church of Surp Takavor","Greek Orthodox Church of Ayia Efimia","Osman Aga Mosque","Osman Aga Fountain","Haydarpasa Mosque","Moda Pier","Moda Coastal Park and Pathway"]);let p,n;const d=async()=>{const c=new y({apiKey:"AIzaSyCfNMx1g2cIcioxRHUxOKHGEBFIlJpJhuU",version:"weekly",libraries:["places"],language:"zh-TW"});a.google=await c.load(),a.map=new a.google.maps.Map(document.getElementById("map"),{center:{lat:41.084153235890845,lng:28.81618672479194},zoom:14,mapTypeControl:!1,fullscreenControl:!1}),p=new a.google.maps.DirectionsService,n=new a.google.maps.DirectionsRenderer,n.setMap(a.map),m()},m=()=>{const c={origin:{lat:40.991208447315486,lng:29.022243518099568},destination:{lat:40.88220175293726,lng:29.2485060010489},travelMode:"TRANSIT",transitOptions:{modes:["SUBWAY"],routingPreference:"FEWER_TRANSFERS"}};p.route(c,function(u,v){if(v==="OK"){u.routes[0].legs[0].steps;for(let e=0;e<=7;e++)i[e]=new a.google.maps.Marker({position:{lat:f[e],lng:_[e]},map:a.map,label:{text:`${e+1}`,color:"#fff"}}),l[e]=new a.google.maps.InfoWindow({content:g[e]}),i[e].addListener("click",function(){l[e].anchor?l[e].close():l[e].open(a.map,i[e])});n.setDirections(u)}})};return setTimeout(()=>{d()},400),(c,u)=>(M(),w("div",ce,[re,t("div",ue,[t("div",de,[s(h,{src:"https://cdn.quasar.dev/img/parallax2.jpg"},{default:r(()=>[pe]),_:1}),me,ge,s(h,{src:"https://cdn.quasar.dev/img/parallax2.jpg"},{default:r(()=>[fe]),_:1})])])]))}},he={class:"row card"},ve=t("div",{class:"col-8 column left"},[t("div",{id:"map"})],-1),xe={class:"col-4 column right"},Me={class:"col"},we=t("div",{class:"absolute-full text-subtitle2 flex column flex-center"},[t("h3",null,"Hagia Sophia")],-1),Se=t("h2",null,"hagia sophia",-1),be=t("p",null,"Hagia Sophia is the most popular site in Istanbul",-1),ye=t("div",{class:"absolute-full text-subtitle2 flex column flex-center"},[t("h3",null,"Hagia Sophia")],-1),$e={__name:"M5Card",setup(S){const a=o({google:null,map:null,markers:null}),i=o([]),l=o([]),f=o([41.0254670064689,41.02609255847969,41.02491124961364,41.02245283952033,41.0084604902293,41.03734594190852,41.01376689781175]),_=o([29.009996511480086,29.011274923125573,29.01509862682192,29.014312742163558,28.98118696730233,29.030101069151304,29.04189051147985]),g=o(["\xDCsk\xFCdar Han\u0131m Sultans Museum","\u015Eemsi Pasha Mosque","Yeni Valide Mosque","Aziz Mahmud H\xFCdayi Mosque","Fountain Sultan Ahmed III","Kuzguncuk Sahili","Hababam S\u0131n\u0131f\u0131 Museum"]);let p,n;const d=async()=>{const c=new y({apiKey:"AIzaSyCfNMx1g2cIcioxRHUxOKHGEBFIlJpJhuU",version:"weekly",libraries:["places"],language:"zh-TW"});a.google=await c.load(),a.map=new a.google.maps.Map(document.getElementById("map"),{center:{lat:41.084153235890845,lng:28.81618672479194},zoom:14,mapTypeControl:!1,fullscreenControl:!1}),p=new a.google.maps.DirectionsService,n=new a.google.maps.DirectionsRenderer,n.setMap(a.map),m()},m=()=>{const c={origin:{lat:41.02631687799154,lng:29.01491294024716},destination:{lat:41.01457963805404,lng:29.18952013664088},travelMode:"TRANSIT",transitOptions:{modes:["SUBWAY"],routingPreference:"FEWER_TRANSFERS"}};p.route(c,function(u,v){if(v==="OK"){u.routes[0].legs[0].steps;for(let e=0;e<=6;e++)i[e]=new a.google.maps.Marker({position:{lat:f[e],lng:_[e]},map:a.map,label:{text:`${e+1}`,color:"#fff"}}),l[e]=new a.google.maps.InfoWindow({content:g[e]}),i[e].addListener("click",function(){l[e].anchor?l[e].close():l[e].open(a.map,i[e])});n.setDirections(u)}})};return setTimeout(()=>{d()},400),(c,u)=>(M(),w("div",he,[ve,t("div",xe,[t("div",Me,[s(h,{src:"https://cdn.quasar.dev/img/parallax2.jpg"},{default:r(()=>[we]),_:1}),Se,be,s(h,{src:"https://cdn.quasar.dev/img/parallax2.jpg"},{default:r(()=>[ye]),_:1})])])]))}},Ie={class:"row card"},Te=t("div",{class:"col-8 column left"},[t("div",{id:"map"})],-1),ke={class:"col-4 column right"},Re={class:"col"},He=t("div",{class:"absolute-full text-subtitle2 flex column flex-center"},[t("h3",null,"Hagia Sophia")],-1),qe=t("h2",null,"hagia sophia",-1),Ce=t("p",null,"Hagia Sophia is the most popular site in Istanbul",-1),Ae=t("div",{class:"absolute-full text-subtitle2 flex column flex-center"},[t("h3",null,"Hagia Sophia")],-1),Ee={__name:"M6Card",setup(S){const a=o({google:null,map:null,markers:null}),i=o([]),l=o([]);o([41.0254670064689,41.02609255847969,41.02491124961364,41.02245283952033,41.0084604902293,41.03734594190852,41.01376689781175]),o([29.009996511480086,29.011274923125573,29.01509862682192,29.014312742163558,28.98118696730233,29.030101069151304,29.04189051147985]),o(["\xDCsk\xFCdar Han\u0131m Sultans Museum","\u015Eemsi Pasha Mosque","Yeni Valide Mosque","Aziz Mahmud H\xFCdayi Mosque","Fountain Sultan Ahmed III","Kuzguncuk Sahili","Hababam S\u0131n\u0131f\u0131 Museum"]);let f,_;const g=async()=>{const n=new y({apiKey:"AIzaSyCfNMx1g2cIcioxRHUxOKHGEBFIlJpJhuU",version:"weekly",libraries:["places"],language:"zh-TW"});a.google=await n.load(),a.map=new a.google.maps.Map(document.getElementById("map"),{center:{lat:41.084153235890845,lng:28.81618672479194},zoom:14,mapTypeControl:!1,fullscreenControl:!1}),f=new a.google.maps.DirectionsService,_=new a.google.maps.DirectionsRenderer,_.setMap(a.map),p()},p=()=>{const n={origin:{lat:41.07603613213615,lng:29.014320176451115},destination:{lat:41.085097327418936,lng:29.045561366553958},travelMode:"TRANSIT",transitOptions:{modes:["SUBWAY"],routingPreference:"FEWER_TRANSFERS"}};f.route(n,function(d,m){m==="OK"&&(d.routes[0].legs[0].steps,i[0]=new a.google.maps.Marker({position:{lat:41.08499220032258,lng:29.056676440006523},map:a.map,label:{text:"1",color:"#fff"}}),l[0]=new a.google.maps.InfoWindow({content:"Rumeli Hisar\u0131"}),i[0].addListener("click",function(){l[0].anchor?l[0].close():l[0].open(a.map,i[0])}),_.setDirections(d))})};return setTimeout(()=>{g()},400),(n,d)=>(M(),w("div",Ie,[Te,t("div",ke,[t("div",Re,[s(h,{src:"https://cdn.quasar.dev/img/parallax2.jpg"},{default:r(()=>[He]),_:1}),qe,Ce,s(h,{src:"https://cdn.quasar.dev/img/parallax2.jpg"},{default:r(()=>[Ae]),_:1})])])]))}},ze={class:"row card"},Be=t("div",{class:"col-8 column left"},[t("div",{id:"map"})],-1),Ke={class:"col-4 column right"},We={class:"col"},Oe=t("div",{class:"absolute-full text-subtitle2 flex column flex-center"},[t("h3",null,"Hagia Sophia")],-1),Ne=t("h2",null,"hagia sophia",-1),Fe=t("p",null,"Hagia Sophia is the most popular site in Istanbul",-1),Ue=t("div",{class:"absolute-full text-subtitle2 flex column flex-center"},[t("h3",null,"Hagia Sophia")],-1),De={__name:"M7Card",setup(S){const a=o({google:null,map:null,markers:null}),i=o([]),l=o([]),f=o([41.080619760600825,41.08132213108819]),_=o([28.92724455524889,28.87765643813402]),g=o(["Ey\xFCpark Shopping Mall","Venezia Mega Outlet"]);let p,n;const d=async()=>{const c=new y({apiKey:"AIzaSyCfNMx1g2cIcioxRHUxOKHGEBFIlJpJhuU",version:"weekly",libraries:["places"],language:"zh-TW"});a.google=await c.load(),a.map=new a.google.maps.Map(document.getElementById("map"),{center:{lat:41.084153235890845,lng:28.81618672479194},zoom:14,mapTypeControl:!1,fullscreenControl:!1}),p=new a.google.maps.DirectionsService,n=new a.google.maps.DirectionsRenderer,n.setMap(a.map),m()},m=()=>{const c={origin:{lat:41.06698730768906,lng:28.994570831942674},destination:{lat:41.05522686876301,lng:28.83045791589575},travelMode:"TRANSIT",transitOptions:{modes:["SUBWAY"],routingPreference:"FEWER_TRANSFERS"}};p.route(c,function(u,v){if(v==="OK"){u.routes[0].legs[0].steps;for(let e=0;e<=1;e++)i[e]=new a.google.maps.Marker({position:{lat:f[e],lng:_[e]},map:a.map,label:{text:`${e+1}`,color:"#fff"}}),l[e]=new a.google.maps.InfoWindow({content:g[e]}),i[e].addListener("click",function(){l[e].anchor?l[e].close():l[e].open(a.map,i[e])});n.setDirections(u)}})};return setTimeout(()=>{d()},400),(c,u)=>(M(),w("div",ze,[Be,t("div",Ke,[t("div",We,[s(h,{src:"https://cdn.quasar.dev/img/parallax2.jpg"},{default:r(()=>[Oe]),_:1}),Ne,Fe,s(h,{src:"https://cdn.quasar.dev/img/parallax2.jpg"},{default:r(()=>[Ue]),_:1})])])]))}},Ve={class:"row card"},Pe=t("div",{class:"col-8 column left"},[t("div",{id:"map"})],-1),je={class:"col-4 column right"},Je={class:"col"},Le=t("div",{class:"absolute-full text-subtitle2 flex column flex-center"},[t("h3",null,"Hagia Sophia")],-1),Qe=t("h2",null,"hagia sophia",-1),Ge=t("p",null,"Hagia Sophia is the most popular site in Istanbul",-1),Ye=t("div",{class:"absolute-full text-subtitle2 flex column flex-center"},[t("h3",null,"Hagia Sophia")],-1),Xe={__name:"M9Card",setup(S){const a=o({google:null,map:null,markers:null}),i=o([]),l=o([]),f=o([41.06316354244396,41.07548184588771]),_=o([28.807582171220165,28.768444115253242]),g=o(["Mall of Istanbul","Atat\xFCrk Olympic Stadium"]);let p,n;const d=async()=>{const c=new y({apiKey:"AIzaSyCfNMx1g2cIcioxRHUxOKHGEBFIlJpJhuU",version:"weekly",libraries:["places"],language:"zh-TW"});a.google=await c.load(),a.map=new a.google.maps.Map(document.getElementById("map"),{center:{lat:41.084153235890845,lng:28.81618672479194},zoom:14,mapTypeControl:!1,fullscreenControl:!1}),p=new a.google.maps.DirectionsService,n=new a.google.maps.DirectionsRenderer,n.setMap(a.map),m()},m=()=>{const c={origin:{lat:41.05863375845782,lng:28.79924950637295},destination:{lat:41.07957684194953,lng:28.76849765610976},travelMode:"TRANSIT",transitOptions:{modes:["SUBWAY"],routingPreference:"FEWER_TRANSFERS"}};p.route(c,function(u,v){if(v==="OK"){u.routes[0].legs[0].steps;for(let e=0;e<=1;e++)i[e]=new a.google.maps.Marker({position:{lat:f[e],lng:_[e]},map:a.map,label:{text:`${e+1}`,color:"#fff"}}),l[e]=new a.google.maps.InfoWindow({content:g[e]}),i[e].addListener("click",function(){l[e].anchor?l[e].close():l[e].open(a.map,i[e])});n.setDirections(u)}})};return setTimeout(()=>{d()},400),(c,u)=>(M(),w("div",Ve,[Pe,t("div",je,[t("div",Je,[s(h,{src:"https://cdn.quasar.dev/img/parallax2.jpg"},{default:r(()=>[Le]),_:1}),Qe,Ge,s(h,{src:"https://cdn.quasar.dev/img/parallax2.jpg"},{default:r(()=>[Ye]),_:1})])])]))}};const Ze={class:"q-pa-md Metro",id:"TransportView"},et={class:"row header"},tt=t("div",{class:"title col-9"},[t("h2",{class:"text-left"},"Metro "),t("p",{class:"text-left"},[T("There are 11 metro lines in Istanbul."),t("br"),T("Taking the M2 line can reach most of popular sites in Istanbul. ")])],-1),at={class:"q-pa-md row main"},ot={class:"col-12 showBox"},Mt={__name:"MetroView",setup(S){const a=q(),i=$("metro"),l=$("M1"),f=$("Metro"),_=o(["Tramvay","Marmaray"]),g=o([]),p=async n=>{g.splice(0,g.length),g.push(n),console.log(g),g.includes("Tramvay")?a.push("/tramvay"):g.includes("Marmaray")&&a.push("/Marmaray")};return(n,d)=>(M(),w("div",Ze,[t("div",et,[tt,s(k,{class:"col-3 navigator",outlined:"",modelValue:f.value,"onUpdate:modelValue":[d[0]||(d[0]=m=>f.value=m),p],options:_},null,8,["modelValue","options"])]),t("div",at,[t("div",ot,[s(I,{modelValue:i.value,"onUpdate:modelValue":d[3]||(d[3]=m=>i.value=m),animated:""},{default:r(()=>[s(x,{name:"metro",class:"q-pa-none"},{default:r(()=>[s(H,null,{before:r(()=>[s(R,{modelValue:l.value,"onUpdate:modelValue":d[1]||(d[1]=m=>l.value=m),vertical:"",class:"text-teal"},{default:r(()=>[s(b,{name:"M1",label:"M1"}),s(b,{name:"M2",label:"M2"}),s(b,{name:"M3",label:"M3"}),s(b,{name:"M4",label:"M4"}),s(b,{name:"M5",label:"M5"}),s(b,{name:"M6",label:"M6"}),s(b,{name:"M7",label:"M7"}),s(b,{name:"M9",label:"M9"})]),_:1},8,["modelValue"])]),after:r(()=>[s(I,{modelValue:l.value,"onUpdate:modelValue":d[2]||(d[2]=m=>l.value=m),animated:"","transition-prev":"slide-down","transition-next":"slide-up"},{default:r(()=>[s(x,{name:"M1"},{default:r(()=>[s(D)]),_:1}),s(x,{name:"M2"},{default:r(()=>[s(X)]),_:1}),s(x,{name:"M3"},{default:r(()=>[s(ie)]),_:1}),s(x,{name:"M4"},{default:r(()=>[s(_e)]),_:1}),s(x,{name:"M5"},{default:r(()=>[s($e)]),_:1}),s(x,{name:"M6"},{default:r(()=>[s(Ee)]),_:1}),s(x,{name:"M7"},{default:r(()=>[s(De)]),_:1}),s(x,{name:"M9"},{default:r(()=>[s(Xe)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])])])]))}};export{Mt as default};