import{_ as ao,b as a,u as no,d as to,c as i,a as o,n as f,t as co,e as _,F as io,o as u}from"./index-B0DO5-aW.js";import{g as uo}from"./base64-BbY-I90a.js";import{o as x,a as k}from"./on-DVkZbVtQ.js";const mo={mounted(){this.$audio.play().catch(c=>{console.error("오디오 재생 오류:",c)})},setup(){const c=a(0),e=a([!1,!1,!1]),E=no(),l=a(!1),b=a(null),m=a(!1),n=k,j=k,G=k,H=k,J=x,K=x,P=x,Q=x,T=a([n,j,G,H]),U=a(null),A=a(null),D=a(null),R=a(null),L=a(null),N=a(null),O=a(null),q=a(null),F=a(null),V=a("편안해보이는 침대다. 오랜만, 이던가?"),h=a(""),g=a("");let S=null;const v=a(!1);to(()=>{z(V.value,!1)});const W=()=>{v.value=!0;let s=0;S=setInterval(()=>{s<h.value.length?(g.value+=h.value[s],s++):(clearInterval(S),v.value=!1)},100)},z=(s,t=!1)=>{v.value&&(clearInterval(S),g.value="",v.value=!1);const r=document.querySelector(".narration_text");r&&r.classList.remove("visible"),g.value="",h.value=s,t?(g.value=s,v.value=!1):W(),setTimeout(()=>{r&&r.classList.add("visible")},1)},d=s=>{s.value&&(s.value.pause(),s.value.currentTime=0,s.value.play(),s.value.onended=()=>{s.value.pause(),s.value.currentTime=0})},y=(s,t,r)=>{const B=document.querySelector(s);B&&(B.classList.add(t),setTimeout(()=>{B.classList.remove(t)},r))},X=()=>{d(O),y(".map_btn","map_flap",1500)},Y=()=>{d(q),y(".logo_btn","logo_hidden",600)},Z=()=>{d(L),y(".crow_btn","crwow_move",2500)},$=()=>{T.value.every(t=>t===x)&&(l.value=!0)},I=a(!1),M=a(!1),w=a(!1),C=a(!1),oo=s=>{b.value=s,s===1?(d(A),c.value++,p(0),I.value?document.querySelector(".modal_box_1").classList.add("done"):I.value=!0):s===2?d(D):s===3?(d(N),c.value++,p(2),w.value?document.querySelector(".modal_box_3").classList.add("done"):w.value=!0):s===4&&(d(F),c.value++,p(3),C.value?document.querySelector(".modal_box_4").classList.add("done"):C.value=!0)},lo=()=>{b.value=null,m.value=!1},eo=s=>{s===2&&!m.value&&(m.value=!0,c.value++,p(1),d(R),M.value?document.querySelector(".modal_box_2").classList.add("done"):M.value=!0)},so=()=>{m.value=!1},p=s=>{const t=[J,K,P,Q];T.value[s]=t[s],$()};return{count:c,buttonsClicked:e,openModal:oo,closeModal:lo,openNestedModal:eo,closeNestedModal2:so,showBtn:l,goNext:()=>{E.push(`/${uo.encode("stage_3")}`)},collectImages:T,changeImage:p,activeModal:b,activeNestedModal2:m,handleAnimation:y,click_map_btn:X,click_logo_btn:Y,click_crow_btn:Z,playSound:d,nextSound:U,bed1Sound:A,bed2_1_Sound:D,crowSound:L,necklaceSound:N,mapSound:O,logoSound:q,candleSound:F,defaultText:V,displayedText:g,displayText:z,isTyping:v,modalOpenedOnce1:I,modalOpenedOnce2:M,modalOpenedOnce3:w,modalOpenedOnce4:C,bed2_2_Sound:R}}},vo={class:"page map2"},ro={class:"narration"},_o={class:"narration-border"},go={class:"collect"},po=["src"],fo=["src"],xo=["src"],bo=["src"],yo={class:"effect"},ko={class:"modal_box_1"},To={key:0,class:"modal"},ho={class:"modal-content modal_2_1"},So={key:0,class:"modal"},Io={class:"modal-content modal_2_2_1"},Mo={class:"modal_box_2"},wo={key:0,class:"modal"},Co={class:"modal-content modal_2_2_2"},Bo={class:"modal_box_3"},Eo={key:0,class:"modal"},Ao={class:"modal-content modal_2_3"},Do={class:"modal_box_4"},Ro={key:0,class:"modal"},Lo={class:"modal-content modal_2_4"},No={ref:"nextSound",src:"https://legavin1023.github.io/DA-Escape-Room/sound/페이지넘김.wav"},Oo={ref:"crowSound",src:"https://legavin1023.github.io/DA-Escape-Room/sound/map_2/까마귀소리.mp3"},qo={ref:"necklaceSound",src:"https://legavin1023.github.io/DA-Escape-Room/sound/map_2/목걸이.wav"},Fo={ref:"mapSound",src:"https://legavin1023.github.io/DA-Escape-Room/sound/map_2/부스럭소리.mp3"},Vo={ref:"bed1Sound",src:"https://legavin1023.github.io/DA-Escape-Room/sound/map_2/시트소리.wav"},zo={ref:"logoSound",src:"https://legavin1023.github.io/DA-Escape-Room/sound/map_2/로고.wav"},jo={ref:"candleSound",src:"https://legavin1023.github.io/DA-Escape-Room/sound/map_2/초켜는소리.wav"},Go={ref:"bed2_1_Sound",src:"https://legavin1023.github.io/DA-Escape-Room/sound/map_2/침대삐걱.wav"},Ho={ref:"bed2_2_Sound",src:"https://legavin1023.github.io/DA-Escape-Room/sound/map_2/놀라는남자소리.wav"};function Jo(c,e,E,l,b,m){return u(),i(io,null,[o("div",vo,[o("button",{class:"page-2-1",onClick:e[0]||(e[0]=n=>(l.openModal(1),l.displayText("두 사람이 누울 수 있는 침대. 잘 정리되어 있다.마치 아무 일도 없었던 것처럼.")))}),o("button",{class:"page-2-2",onClick:e[1]||(e[1]=n=>(l.openModal(2),l.displayText("침대 아래는 잘 관리되어 의외로 깨끗하다.")))}),o("button",{class:"page-2-3",onClick:e[2]||(e[2]=n=>(l.openModal(3),l.displayText("독특한 문양이 그려진 목걸이가 걸려 있다. 누군가 늘 지니고 다녔던 듯 조금 흠집이 나 있다.")))}),o("button",{class:"page-2-4 candle",onClick:e[3]||(e[3]=n=>(l.openModal(4),l.displayText("거의 다 닳아 있는 초.금방 꺼질 것만 같다.")))}),o("div",ro,[o("div",_o,[o("p",{class:f(["narration-text",{visible:l.displayedText}])},co(l.displayedText||l.defaultText),3)])]),o("div",go,[o("img",{class:"collect-1",src:l.collectImages[0],alt:"Image 1"},null,8,po),o("img",{class:"collect-2",src:l.collectImages[1],alt:"Image 2"},null,8,fo),o("img",{class:"collect-3",src:l.collectImages[2],alt:"Image 3"},null,8,xo),o("img",{class:"collect-4",src:l.collectImages[3],alt:"Image 4"},null,8,bo)]),l.showBtn?(u(),i("button",{key:0,class:f(["collect-nextBtn",{disabled:l.activeModal!==null}]),onClick:e[4]||(e[4]=(...n)=>l.goNext&&l.goNext(...n))},null,2)):_("",!0),o("div",yo,[o("div",{class:f(["logo_btn",{disabled:l.isTyping}]),onClick:e[5]||(e[5]=n=>(l.displayText("얼룩... 그을린 건가? 용 같은 모양이네."),l.click_logo_btn()))},null,2),o("div",{class:f(["crow_btn",{disabled:l.isTyping}]),onClick:e[6]||(e[6]=n=>(l.displayText("까마귀. 누군가는 이 동물을 친구라고 칭했던 것 같은데."),l.click_crow_btn()))},null,2),o("div",{class:f(["map_btn",{disabled:l.isTyping}]),onClick:e[7]||(e[7]=n=>(l.displayText("내일은... 어디로 가기로 했더라...? 그전에 우리가 어디서 왔었지?"),l.click_map_btn()))},null,2)])]),o("div",ko,[l.activeModal===1?(u(),i("div",To,[o("div",ho,[o("span",{class:"close",onClick:e[8]||(e[8]=n=>{l.closeModal(),l.displayText("편안해보이는 침대다. 오랜만, 이던가?")})},"×"),e[14]||(e[14]=o("p",{class:"modal-content-get"},[o("span",null,"체크")],-1))])])):_("",!0)]),l.activeModal===2?(u(),i("div",So,[o("div",Io,[o("button",{onClick:e[9]||(e[9]=n=>(l.openNestedModal(2),l.displayText("잘 보관된 인형이다.왠지 섬뜩하다.")))}),o("span",{class:"close",onClick:e[10]||(e[10]=n=>{l.closeModal(),l.displayText("편안해보이는 침대다. 오랜만, 이던가?")})},"×")])])):_("",!0),o("div",Mo,[l.activeNestedModal2?(u(),i("div",wo,[o("div",Co,[o("span",{class:"close",onClick:e[11]||(e[11]=n=>{l.closeNestedModal2(),l.displayText("침대 아래는 잘 관리되어 의외로 깨끗하다.")})},"×"),e[15]||(e[15]=o("p",{class:"modal-content-get"},[o("span",null,"체크")],-1))])])):_("",!0)]),o("div",Bo,[l.activeModal===3?(u(),i("div",Eo,[o("div",Ao,[o("span",{class:"close",onClick:e[12]||(e[12]=n=>{l.closeModal(),l.displayText("편안해보이는 침대다. 오랜만, 이던가?")})},"×"),e[16]||(e[16]=o("p",{class:"modal-content-get"},[o("span",null,"체크")],-1))])])):_("",!0)]),o("div",Do,[l.activeModal===4?(u(),i("div",Ro,[o("div",Lo,[o("span",{class:"close",onClick:e[13]||(e[13]=n=>{l.closeModal(),l.displayText("편안해보이는 침대다. 오랜만, 이던가?")})},"×"),e[17]||(e[17]=o("p",{class:"modal-content-get"},[o("span",null,"체크")],-1))])])):_("",!0)]),o("audio",No,null,512),o("audio",Oo,null,512),o("audio",qo,null,512),o("audio",Fo,null,512),o("audio",Vo,null,512),o("audio",zo,null,512),o("audio",jo,null,512),o("audio",Go,null,512),o("audio",Ho,null,512)],64)}const Wo=ao(mo,[["render",Jo]]);export{Wo as default};
