import{_ as w,u as y,b as t,d as T,c as u,a as n,n as B,t as N,e as k,F as E,o as c}from"./index-BpyRU80t.js";const l=["머리가 너무 아프다.","어떻게, 어떻게 된 거지? 여긴 어디지?","나는, 누구지?"],I={name:"NextPage",setup(){const r=y(),s=t(!1),p=t(""),a=t(0),o=t(0),m=t(!1),i=t(null),_=e=>{a.value<e.length?(p.value+=e[a.value],a.value++,setTimeout(()=>_(e),100)):s.value=!0};T(()=>{m.value=!0,_(l[o.value])});const d=()=>{o.value<l.length-1?(g(i),o.value++,p.value="",a.value=0,s.value=!1,m.value=!1,setTimeout(()=>{_(l[o.value]),m.value=!0},300)):r.push("stage_1")},g=e=>{e.value&&(e.value.pause(),e.value.currentTime=0,e.value.play(),e.value.onended=()=>{e.value.pause(),e.value.currentTime=0});const v=f=>{f.forEach(h=>{const b=new Image;b.src=new URL(h,import.meta.url).href})},x=["@/assets/image/map1/background_1.png","@/assets/image/next_btn.png","@/assets/image/clue_ui.png","@/assets/image/map1/map_1_1.png","@/assets/image/map1/map_1_2_1.png","@/assets/image/map1/map_1_2_2.png","@/assets/image/map1/map_1_3_1.png","@/assets/image/map1/map_1_3_2.png","@/assets/image/map2/map_2_1.png","@/assets/image/map2/map_2_2_1.png","@/assets/image/map2/map_2_2_2.png","@/assets/image/map2/map_2_3.png","@/assets/image/map2/map_2_4.png","@/assets/image/map3/map_3_1.png","@/assets/image/map3/map_3_2_1.png","@/assets/image/map3/map_3_2_2.png","@/assets/image/map3/map_3_3_1.png","@/assets/image/map3/map_3_3_2.png"];window.addEventListener("load",()=>{v(x)})};return{showBtn:s,goNext:d,texts:l,displayedText:p,isVisible:m,playSound:g,nextSound:i,preloadImages}}},S={class:"page intro"},V={class:"narration"},C={class:"narration-border"},R={ref:"nextSound",src:"https://legavin1023.github.io/DA-Escape-Room/sound/페이지넘김.wav"};function D(r,s,p,a,o,m){return c(),u(E,null,[n("div",S,[s[1]||(s[1]=n("div",{class:"dim"},null,-1)),n("div",V,[n("div",C,[n("p",{class:B(["narration-text",{visible:a.isVisible}])},N(a.displayedText),3)])]),a.showBtn?(c(),u("button",{key:0,class:"collect-nextBtn",onClick:s[0]||(s[0]=(...i)=>a.goNext&&a.goNext(...i))},"->")):k("",!0)]),n("audio",R,null,512)],64)}const L=w(I,[["render",D]]);export{L as default};
