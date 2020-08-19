import { dateToday } from './timeconvert';

function fixData(param) {
  const dt = document.querySelector('.nav-item.left');
  const cityCountry = document.querySelector('.nav-item.right');
  const tmp = document.querySelector('.curr-temp');
  const mxTmp = document.querySelector('.right-temp .temp');
  const mnTmp = document.querySelector('.left-temp .temp');
  const infCt = document.querySelector('.locality .city');
  const wndSpd = document.querySelector('.more-info .wind');
  const humidity = document.querySelector('.more-info .humi');
  const descr = document.querySelector('.more-info .desc');
  const image = document.querySelector('.symbol img');
  const cityTime = document.querySelector('.more-info .time');
  // ////
  dt.innerHTML = `${dateToday()}`;
  cityCountry.innerHTML = `${param.city}, ${param.country}`;
  tmp.innerHTML = `${param.temp} &deg;C`;
  mxTmp.innerHTML = `${param.Max_Temp} &deg;C`;
  mnTmp.innerHTML = `${param.Min_Temp} &deg;C`;
  infCt.innerHTML = `${param.city}`;
  cityTime.innerHTML = `local time: ${param.time}`;
  wndSpd.innerHTML = `wind speed: ${param.wind} m/s`;
  humidity.innerHTML = `Humidity: ${param.humid} &percnt;`;
  descr.innerHTML = `${param.desc}`;
  image.src = `http://openweathermap.org/img/wn/${param.icon}@2x.png`;
}

export default fixData;