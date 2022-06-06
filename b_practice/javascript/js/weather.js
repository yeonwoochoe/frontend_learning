const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

const API_KEY = "b2e3e4594fd21962119708f10d2eec4b";

function onGeoOk(position) {
  //위치파악성공
  console.log(position);
  const lat = position.coords.latitude;
  //coords 좌표
  //latitude 위도
  const lon = position.coords.longitude;
  //longitude 경도

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  console.log(url);
  fetch(url)
    .then(response => response.json())
    .then(data => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError() {
  //위치파악실패
  alert("Can't find you. No weather for you.");
}
//b2e3e4594fd21962119708f10d2eec4b
//https://api.openweathermap.org/data/2.5/weather?lat=37.3432561&lon=126.9408984&appid=b2e3e4594fd21962119708f10d2eec4b
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
//navigator 브라우져에서 위치 좌표를 주는 함수
//Geolocation API는 사용자의 현재 위치를 가져오는 API
//Geolocation.getCurrentPosition() 메서드는 장치의 현재 위치를 가져옵니다.
