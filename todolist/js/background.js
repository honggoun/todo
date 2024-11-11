const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];
 
const choseonImage = images[Math.floor(Math.random() * images.length)];
 
const bgImage = `img/${choseonImage}`;
 
const bg = document.querySelector("#bgimg");
 
bg.background = bgImage;