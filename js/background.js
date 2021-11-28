const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg", "8.jpeg", "9.jpeg", "10.jpeg",
    "11.jpeg", "12.jpeg", "13.jpeg", "14.jpeg", "15.jpeg", "16.jpeg", "17.jpeg", "18.jpeg", "19.jpeg", "20.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

//기존 랜덤이미지 추가를 위한 코드
// const bgImage = document.createElement("img");
// bgImage.src = `img/${chosenImage}`;
// document.body.appendChild(bgImage);


//이미지를 백그라운드형식으로 넣기위해서 코드 변경
document.body.style = `background-image:url(img/${chosenImage}); background-size:cover;`;