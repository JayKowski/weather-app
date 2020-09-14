import { dateToday } from './timeconvert';

const mxTmp = document.querySelector('.right-temp .temp');
const mnTmp = document.querySelector('.left-temp .temp');
const tmp = document.querySelector('.curr-temp');

function fixData(param) {
  const dt = document.querySelector('.nav-item.left');
  const cityCountry = document.querySelector('.nav-item.right');
  const infCt = document.querySelector('.locality .city');
  const wndSpd = document.querySelector('.more-info .wind');
  const humidity = document.querySelector('.more-info .humi');
  const descr = document.querySelector('.more-info .desc');
  const image = document.querySelector('.symbol img');
  const cityTime = document.querySelector('.more-info .time');
  // ////
  dt.innerHTML = `${dateToday()}`;
  cityCountry.innerHTML = `${param.city}, ${param.country}`;
  tmp.innerHTML = `${param.temp}&deg;C`;
  mxTmp.innerHTML = `${param.Max_Temp}&deg;C`;
  mnTmp.innerHTML = `${param.Min_Temp}&deg;C`;
  infCt.innerHTML = `${param.city}`;
  cityTime.innerHTML = `local time: ${param.time}`;
  wndSpd.innerHTML = `wind speed: ${param.wind} m/s`;
  humidity.innerHTML = `Humidity: ${param.humid} &percnt;`;
  descr.innerHTML = `${param.desc}`;
  image.src = `http://openweathermap.org/img/wn/${param.icon}@2x.png`;
}


function farenheit(temp) {
  const far = (temp * (9 / 5)) + 32;
  return Math.ceil(far);
}

function unitConvert(par, targ) {
  if (targ.innerHTML === 'units: °C') {
    targ.innerHTML = 'units: F';
    mxTmp.innerHTML = `${farenheit(par.Max_Temp)}F`;
    mnTmp.innerHTML = `${farenheit(par.Min_Temp)}F`;
    tmp.innerHTML = `${farenheit(par.temp)}F`;
  } else {
    targ.innerHTML = 'units: °C';
    mxTmp.innerHTML = `${par.Max_Temp}&deg;C`;
    mnTmp.innerHTML = `${par.Min_Temp}&deg;C`;
    tmp.innerHTML = `${par.temp}&deg;C`;
  }
}

export { fixData, unitConvert };