const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0"); //.getHours() 현재시간 호출 + .padStart(2,"0") 한자리를 두자리로 만들고 첫번째 자리를 0으로 선언
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = (`${hours}:${minutes}:${seconds}`); //id = clock h2에 시간을 띄움
}

getClock(); //interval이 1초를 기다려야지 시간이 뜨기 때문에, 바로 시간 출력을 위해 getClock함수를 먼저 불러온다.
setInterval(getClock, 1000);