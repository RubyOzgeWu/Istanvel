import{x as $,c as o,h as t,P as L,S as M,V,w as k,o as O,z as U,aA as j,g as G,aL as H,Q as _,A as J}from"./index.1d8df0df.js";import{u as K,a as R,b as W,c as X}from"./use-panel.e054c222.js";import{u as Y,a as Z,b as p}from"./use-fullscreen.8fe471f3.js";var le=$({name:"QCarouselSlide",props:{...K,imgSrc:String},setup(e,{slots:r}){const l=o(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>t("div",{class:"q-carousel__slide",style:l.value},L(r.default))}});const ee=["top","right","bottom","left"],ae=["regular","flat","outline","push","unelevated"];var re=$({name:"QCarousel",props:{...M,...R,...Y,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>ae.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>ee.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...Z,...W],setup(e,{slots:r}){const{proxy:{$q:l}}=G(),T=V(e,l);let c,s;const{updatePanelsList:B,getPanelContent:Q,panelDirectives:A,goToPanel:f,previousPanel:h,nextPanel:q,getEnabledPanels:D,panelIndex:u}=X(),{inFullscreen:C}=p(),F=o(()=>C.value!==!0&&e.height!==void 0?{height:e.height}:{}),v=o(()=>e.vertical===!0?"vertical":"horizontal"),N=o(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(C.value===!0?" fullscreen":"")+(T.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${v.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${P.value}`:"")),x=o(()=>{const a=[e.prevIcon||l.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||l.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&l.lang.rtl===!0?a.reverse():a}),S=o(()=>e.navigationIcon||l.iconSet.carousel.navigationIcon),z=o(()=>e.navigationActiveIcon||S.value),P=o(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),g=o(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));k(()=>e.modelValue,()=>{e.autoplay&&(clearInterval(c),d())}),k(()=>e.autoplay,a=>{a?d():clearInterval(c)});function d(){const a=H(e.autoplay)===!0?e.autoplay:5e3;c=setTimeout(a>=0?q:h,Math.abs(a))}O(()=>{e.autoplay&&d()}),U(()=>{clearInterval(c)});function b(a,i){return t("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${a} q-carousel__navigation--${P.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[t("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},D().map(i))])}function E(){const a=[];if(e.navigation===!0){const i=r["navigation-icon"]!==void 0?r["navigation-icon"]:n=>t(_,{key:"nav"+n.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${n.active===!0?"":"in"}active`,...n.btnProps,onClick:n.onClick}),m=s-1;a.push(b("buttons",(n,y)=>{const I=n.props.name,w=u.value===y;return i({index:y,maxIndex:m,name:I,active:w,btnProps:{icon:w===!0?z.value:S.value,size:"sm",...g.value},onClick:()=>{f(I)}})}))}else if(e.thumbnails===!0){const i=e.controlColor!==void 0?` text-${e.controlColor}`:"";a.push(b("thumbnails",m=>{const n=m.props;return t("img",{key:"tmb#"+n.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${n.name===e.modelValue?"":"in"}active`+i,src:n.imgSrc||n["img-src"],onClick:()=>{f(n.name)}})}))}return e.arrows===!0&&u.value>=0&&((e.infinite===!0||u.value>0)&&a.push(t("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${v.value} absolute flex flex-center`},[t(_,{icon:x.value[0],...g.value,onClick:h})])),(e.infinite===!0||u.value<s-1)&&a.push(t("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${v.value} absolute flex flex-center`},[t(_,{icon:x.value[1],...g.value,onClick:q})]))),J(r.control,a)}return()=>(s=B(r),t("div",{class:N.value,style:F.value},[j("div",{class:"q-carousel__slides-container"},Q(),"sl-cont",e.swipeable,()=>A.value)].concat(E())))}});export{re as Q,le as a};