import{_ as x,u as _,b as n,d as f,c as d,a as r,n as m,t as p,e as g,o as v}from"./index-B5HZYJm4.js";const i=["머리가 너무 아프다.","어떻게, 어떻게 된 거지? 여긴 어디지?","나는, 누구지?"],N={name:"NextPage",setup(){const u=_(),t=n(!1),l=n(""),e=n(0),s=n(0),a=n(!1),o=c=>{e.value<c.length?(l.value+=c[e.value],e.value++,setTimeout(()=>o(c),100)):t.value=!0};return f(()=>{a.value=!0,o(i[s.value])}),{showBtn:t,goNext:()=>{s.value<i.length-1?(s.value++,l.value="",e.value=0,t.value=!1,a.value=!1,setTimeout(()=>{o(i[s.value]),a.value=!0},300)):u.push("/stage_1")},texts:i,displayedText:l,isVisible:a}}},b={class:"page intro"},B={class:"narration"},h={class:"narration-border"};function y(u,t,l,e,s,a){return v(),d("div",b,[t[1]||(t[1]=r("div",{class:"dim"},null,-1)),r("div",B,[r("div",h,[r("p",{class:m(["narration-text",{visible:e.isVisible}])},p(e.displayedText),3)])]),e.showBtn?(v(),d("button",{key:0,class:"collect-nextBtn",onClick:t[0]||(t[0]=(...o)=>e.goNext&&e.goNext(...o))},"->")):g("",!0)])}const V=x(N,[["render",y]]);export{V as default};
