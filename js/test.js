const age = 96; //나이 = 외국나이

function krAgeCalcul(foreinAge){
  return foreinAge + 2;
} //한국나이 계산기 = 외국나이 + 2

const krAge = krAgeCalcul(age); //한국나이 = 외국나이를 한국나이 계산기로 계산한 값(return)

console.log(krAge); //한국나이 출력

const age2 = "15"; //string
const age3 = parseInt(age2); //int
console.log(age2, age3);

//isNaN을 이용한 숫자 판별법
if (isNaN(prompt("나이입력해주세요"))) { //prompt를 이용하여 숫자입력을 유도한 후, isNaN으로 숫자 판별
  console.log("숫자를 입력하세요");
} else {
  console.log("숫자가 맞습니다");
}

//html요소 선택
const helloo = document.querySelector(".test")

//선택한 요소에 텍스트 넣기
helloo.innerText = "Engeng Choon";

//클릭 이벤트
function click() {

  console.log("click!");
  helloo.innerText = "click!";
  helloo.classList.toggle("active");
}

//마우스 올려두기 이벤드
function mouseenter() {
  helloo.innerText = "enter!";
}

//마우스 떠나기 이벤트
function mouseleave() {
  helloo.innerText = "leave!";
}

function resize() {
  document.body.style.backgroundColor = "blue";
}

function copy() {
  alert("copy!");
}


helloo.onclick = click; // 다른 방법으로는 helloo.addEventListener("click", click);
helloo.addEventListener("mouseenter", mouseenter);
helloo.addEventListener("mouseleave", mouseleave);
window.addEventListener("resize", resize);
window.addEventListener("copy", copy);


