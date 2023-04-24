// main.js

window.addEventListener('load',() => {

// 주메뉴
const menu = document.querySelectorAll(".gnb>ul>li>a");
let header = document.querySelector(".header_wrap");
let height = document.querySelectorAll(".gnb>ul>li>div");
menu.forEach((el,i) =>{
  el.addEventListener("mouseenter", e=>{
    e.preventDefault();
    activation(menu,i);
    header.style.height = height[i].offsetHeight+70+"px";
  });
  el.addEventListener("focus", e=>{
    e.preventDefault();
    activation(menu,i);
    header.style.height = height[i].offsetHeight+70+"px";
  });
  el.addEventListener("mouseleave", e=>{
    for(let el of menu) el.closest("li").classList.remove("on");
    header.style.height = 70+"px"
  });
})







// 검색박스
const srch_btn = document.querySelector(".btn_srch");
const srch_wrap = document.querySelector(".srch_wrap");
const srch_close = document.querySelector(".btn_srch_close");
srch_btn.addEventListener("click", e=>{
  e.preventDefault();
 srch_wrap.classList.add("on");
});
srch_close.addEventListener("click", e=>{
  e.preventDefault();
 srch_wrap.classList.remove("on");
})

// 탑메뉴
const top_btn = document.querySelectorAll(".top_menu>dd>a");
console.log(top_btn);

top_btn.forEach((el, i) =>{
  el.addEventListener("click", e=>{
    el.nextElementSibling.classList.add("on");
    console.log(el.nextElementSibling);
  })
})

function activation(aa, idx){
  for(let el of aa) el.closest("li").classList.remove("on");
  aa[idx].closest("li").classList.add("on");
}


// /* 오토배너 */

const btnNext = document.querySelector(".btn_next");
const btnPrev = document.querySelector(".btn_prev");
let slide = document.querySelectorAll("li.slide");
let slideRoll = document.querySelectorAll(".slide_roll li");
console.log(slide);


let bnnNum=0;
let lastNum= document.querySelectorAll(".slide_wrap > li").length - 1;


function activation2(index,list){
  for(let el of list){
    el.classList.remove("on", "active");
  }
  list[index].classList.add("on", "active");
}



// //next 버튼 클릭
// // li.slide.active
// // .slide_roll>ul>li.on>a
btnNext.addEventListener("click", e =>{
  e.preventDefault();
  bnnNum++;
  if(bnnNum>lastNum) bnnNum=0;
  activation2(bnnNum,slide);
  activation2(bnnNum, slideRoll);

  // slide.forEach(item =>{
  //   item.classList.remove('active');
  // });
  // slide[bnnNum].classList.add('active');

  // slideRoll.forEach(idx =>{
  //   idx.classList.remove('on');
  // });
  // slideRoll[bnnNum].classList.add('on');


});

// //prev버튼 클릭

btnPrev.addEventListener("click",e =>{
  e.preventDefault();
  bnnNum--;
  if(bnnNum<0) bnnNum=lastNum;
  activation2(bnnNum,slide);
  activation2(bnnNum, slideRoll);

});



// //오토배너 5초마다

function autoBanner(){
  //next버튼 눌렀을때
  bnnNum++;
  if(bnnNum>lastNum) bnnNum=0;
  activation2(bnnNum,slide);
  activation2(bnnNum, slideRoll);
  autoBnn = setTimeout(autoBanner,5000); //재귀함수

}

let autoBnn =setTimeout(autoBanner,5000);//최초호출



// //배너 재생 멈춤 버튼
// //배너 멈추고 이미지 바뀌고
// //배너 재생 이미지 바뀌고
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

// //롤링버튼클릭
// //해당 배너로 이동

for(let i=0; i<slideRoll.length; i++){
  slideRoll[i].addEventListener('click', e =>{
    e.preventDefault();
    activation2(i,slide);
    activation2(i,slideRoll);
  })
}

// top버튼
// 클릭하면 스크롤이 맨위로 올라감
// 스크롤을 움직이면 스크롤 위치에 따라서 탑버튼이 바뀜
 const btnTop = document.querySelector("a.btn_top");


 btnTop.addEventListener('click', e =>{
  e.preventDefault();
  window.scroll({
    top:0,
    left:0,
    behavior:'smooth'
  });
})




window.addEventListener('scroll',()=>{
  let scroll = document.querySelector("html").scrollTop;
  //let scroll = window.pageYOffset;
  console.log(scroll);

  if(scroll<=0){
    btnTop.classList.remove("on","ab");
  }else if(scroll > 2700){
    btnTop.classList.add("ab");
    btnTop.classList.add("on");
  }else{
    btnTop.classList.remove("ab");
    btnTop.classList.add("on");
  }
});


// step1

let step1 = document.querySelectorAll(".step1 li a");
console.log(step1);

step1.forEach((el,i)=>{
  el.addEventListener("click", e=>{
    e.preventDefault();
    for(let i=0; i<step1.length; i++){
      step1[i].style.backgroundColor = `transparent`;
      step1[i].style.backgroundImage = `url(../images/ico_inquiry_0${i+1}.png)`;
      step1[i].style.color = `#333`;     
    }
      el.style.backgroundColor=`#043285`;
      el.style.backgroundImage= `url(../images/ico_inquiry_on_0${i+1}.png)`;
      el.style.color = `#fff`;
  });
});

});
