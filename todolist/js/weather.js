//const API = "bb4e5d21ab845ddedf9de1e1f3d8148e"
function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("you live in",lat,lon)
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=bb4e5d21ab845ddedf9de1e1f3d8148e&units=metric`
    fetch(url).then(Response => Response.json().then(
        data => {
            const weatherElement = document.querySelector("#weather");
            const weather = weatherElement.querySelector("span:first-child");
            const city = weatherElement.querySelector("span:last-child");
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`; 
            city.innerText= data.name;
            }))
}

function onGeoError() {
    alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
