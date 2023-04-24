// main.js

/* 주메뉴 */
//각li에 마우스를 올리면 (높이값 가져와서 ) 폴다운 메뉴 내려오고 보여야 됨.
// 키보드 탭으로 움직여야됨.

const gnbMenu = document.querySelectorAll('.gnb>ul>li');
const headerWrap = document.querySelector(".header_wrap");

for(var i=0; i<gnbMenu.length; i++){
  gnbMenu[i].addEventListener('mouseover',e =>{
    e.currentTarget.classList.add('on');
    var ht =e.currentTarget.children[1].offsetHeight;
    headerWrap.style.height='70px';
  })

  gnbMenu[i].addEventListener('mouseout', e => {
    e.currentTarget.classList.remove('on');
    headerWrap.style.height='70px';
  })

  gnbMenu[i].children[0].addEventListener('focus', e =>{
    e.currentTarget.parentElement.classList.add('on');
    var ht =e.currentTarget.nextElementSibling.offsetHeight;
    headerWrap.style.height = `${70+ht}px`;
  })
  gnbMenu[i].children[0].addEventListener('blur', e =>{
    e.currentTarget.parentElement.classList.remove('on');
    headerWrap.style.height='70px';
  })
}

/*검색박스 */
//검색버튼 누르면 검색박스 보이고
//닫기버튼 누르면 검색박스 안보이고
const btnSrch= document.querySelector(".btn_srch");
const srchWrap = document.querySelector(".srch_wrap");
const btnSrchClose = document.querySelector(".btn_srch_close");

btnSrch.addEventListener("click", e => {
  e.preventDefault();
  srchWrap.classList.add("on");
});

btnSrchClose.addEventListener("click",e=>{
  e.preventDefault();
  srchWrap.classList.remove("on");
})

/* 오토배너 */

const btnNext = document.querySelector(".btn_next");
const btnPrev = document.querySelector(".btn_prev");
let slide = document.querySelectorAll("li.slide");
let slideRoll = document.querySelectorAll(".slide_roll li");
console.log(slide);


let bnnNum=0;
let lastNum= document.querySelectorAll(".slide_wrap > li").length - 1;


function activation(index,list){
  for(let el of list){
    el.classList.remove("on", "active");
  }
  list[index].classList.add("on", "active");
}



//next 버튼 클릭
// li.slide.active
// .slide_roll>ul>li.on>a
btnNext.addEventListener('click', e =>{
  e.preventDefault();
  bnnNum++;
  if(bnnNum>lastNum) bnnNum=0;
  activation(bnnNum,slide);
  activation(bnnNum, slideRoll);

  // slide.forEach(item =>{
  //   item.classList.remove('active');
  // });
  // slide[bnnNum].classList.add('active');

  // slideRoll.forEach(idx =>{
  //   idx.classList.remove('on');
  // });
  // slideRoll[bnnNum].classList.add('on');




});

//prev버튼 클릭

btnPrev.addEventListener('click',e =>{
  e.preventDefault();
  bnnNum--;
  if(bnnNum<0) bnnNum=lastNum;
  activation(bnnNum,slide);
  activation(bnnNum, slideRoll);

});



//오토배너 5초마다

function autoBanner(){
  //next버튼 눌렀을때
  bnnNum++;
  if(bnnNum>lastNum) bnnNum=0;
  activation(bnnNum,slide);
  activation(bnnNum, slideRoll);
  autoBnn = setTimeout(autoBanner,5000); //재귀함수

}

let autoBnn =setTimeout(autoBanner,5000);//최초호출


//배너 재생 멈춤 버튼
//배너 멈추고 이미지 바뀌고
//배너 재생 이미지 바뀌고
let flag = true;
const btnPlay = document.querySelector("a.btn_play");

btnPlay.addEventListener('click', e =>{
  e.preventDefault();
  if(flag){//멈춤
    btnPlay.classList.add('on');
    clearTimeout(autoBnn);
    flag = false;
  }else{//재생
    btnPlay.classList.remove('on');
    autoBnn = setTimeout(autoBanner,5000);
    flag = true;
  }
})

//롤링버튼클릭
//해당 배너로 이동

for(let i=0; i<slideRoll.length; i++){
  slideRoll[i].addEventListener('click', e =>{
    e.preventDefault();
    activation(bnnNum,slide);
    activation(bnnNum,slideRoll);
  })
}