const API_KEY = "0ce0f114bdb894280d846fcbf495b3f4";

function onGeoOk(position) {
    //위도와 경도
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url)
        .then((reponse) => reponse.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        });
}

function onGeoError() {
    alert("Can't find you. No weather for you!")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); //왼쪽은 성공 했을 때, 오른쪽은 실패 했을 때의 경우