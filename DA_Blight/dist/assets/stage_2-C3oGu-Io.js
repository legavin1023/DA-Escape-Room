import{_ as C,b as a,u as b,c as u,a as t,n as l,e as k,F as g,o as v}from"./index-B5HZYJm4.js";const f={setup(){const n=a(0),o=a([!1,!1,!1,!1]),d=b(),s=a(!1),c=i=>{o.value.length>i&&!o.value[i]&&(o.value[i]=!0,n.value++,n.value===4&&r())},r=()=>{s.value=!0};return{count:n,buttonsClicked:o,incrementCount:c,showBtn:s,goNext:()=>{d.push("/stage_3")}}}},m={class:"page"},_=["disabled"],x=["disabled"],p=["disabled"],B=["disabled"],N={class:"collect"},M={class:"collect-box"};function P(n,o,d,s,c,r){return v(),u(g,null,[t("div",null,[t("div",m,[t("button",{class:"page-2-1",onClick:o[0]||(o[0]=e=>s.incrementCount(0)),disabled:s.buttonsClicked[0]}," Click Me! ",8,_),t("button",{class:"page-2-2",onClick:o[1]||(o[1]=e=>s.incrementCount(1)),disabled:s.buttonsClicked[1]}," Click Me! ",8,x),t("button",{class:"page-2-3",onClick:o[2]||(o[2]=e=>s.incrementCount(2)),disabled:s.buttonsClicked[2]}," Click Me! ",8,p),t("button",{class:"page-2-3",onClick:o[3]||(o[3]=e=>s.incrementCount(3)),disabled:s.buttonsClicked[3]}," Click Me! ",8,B)]),t("div",N,[t("div",M,[t("div",{class:l({colored:s.count>=1})},"1",2),t("div",{class:l({colored:s.count>=2})},"2",2),t("div",{class:l({colored:s.count>=3})},"3",2),t("div",{class:l({colored:s.count>=4})},"4",2)]),s.showBtn?(v(),u("button",{key:0,class:"collect-nextBtn",onClick:o[4]||(o[4]=(...e)=>s.goNext&&s.goNext(...e))},"->")):k("",!0)])]),o[5]||(o[5]=t("div",{class:"Popup-2-1"},null,-1)),o[6]||(o[6]=t("div",{class:"Popup-2-2"},null,-1)),o[7]||(o[7]=t("div",{class:"Popup-2-3"},null,-1))],64)}const F=C(f,[["render",P]]);export{F as default};
