import{_,u as f,b as s,d as g,c as p,a as n,n as h,t as b,e as y,F as B,o as x}from"./index-BqF8Ftm5.js";const u=["머리가 너무 아프다.","어떻게, 어떻게 된 거지? 여긴 어디지?","나는, 누구지?"],N={name:"NextPage",setup(){const v=f(),a=s(!1),r=s(""),t=s(0),o=s(0),l=s(!1),i=s(null),c=e=>{t.value<e.length?(r.value+=e[t.value],t.value++,setTimeout(()=>c(e),100)):a.value=!0};g(()=>{l.value=!0,c(u[o.value])});const m=()=>{o.value<u.length-1?(d(i),o.value++,r.value="",t.value=0,a.value=!1,l.value=!1,setTimeout(()=>{c(u[o.value]),l.value=!0},300)):v.push("stage_1")},d=e=>{e.value&&(e.value.pause(),e.value.currentTime=0,e.value.play(),e.value.onended=()=>{e.value.pause(),e.value.currentTime=0})};return{showBtn:a,goNext:m,texts:u,displayedText:r,isVisible:l,playSound:d,nextSound:i}}},T={class:"page intro"},k={class:"narration"},S={class:"narration-border"},V={ref:"nextSound",src:"https://legavin1023.github.io/DA-Escape-Room/sound/페이지넘김.wav"};function w(v,a,r,t,o,l){return x(),p(B,null,[n("div",T,[a[1]||(a[1]=n("div",{class:"dim"},null,-1)),n("div",k,[n("div",S,[n("p",{class:h(["narration-text",{visible:t.isVisible}])},b(t.displayedText),3)])]),t.showBtn?(x(),p("button",{key:0,class:"collect-nextBtn",onClick:a[0]||(a[0]=(...i)=>t.goNext&&t.goNext(...i))},"->")):y("",!0)]),n("audio",V,null,512)],64)}const D=_(N,[["render",w]]);export{D as default};
