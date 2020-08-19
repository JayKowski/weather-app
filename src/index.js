import './styles.css';
import { timeUTC } from './timeconvert';
import fixData from './datafix';

const weatherData = {};

const dataAPI = async (input) => {
  await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${input}&APPID=7248a4efe2e1d579af3b160607466f42`)
    .then((result) => result.json())
    .then((result) => {
      if (result.cod === '404') {
        // eslint-disable-next-line no-alert
        alert('city not found');
      } else {
        weatherData.wind = result.wind.speed;
        weatherData.temp = Math.floor(result.main.temp - 273);
        weatherData.date = result.dt;
        weatherData.country = result.sys.country;
        weatherData.city = result.name;
        weatherData.Min_Temp = Math.floor(result.main.temp_min - 273);
        weatherData.Max_Temp = Math.floor(result.main.temp_max - 273);
        weatherData.type = result.weather[0].main;
        weatherData.desc = result.weather[0].description;
        weatherData.humid = result.main.humidity;
        weatherData.icon = result.weather[0].icon;
        weatherData.time = timeUTC(result.timezone);
      }
      return weatherData;
    }).then((data) => {
      fixData(data);
    })
    .catch((error) => {
      // eslint-disable-next-line no-alert
      alert(`OOPS! : ${error}`);
    });
  return weatherData;
};

const search = document.querySelector('.nav-item.center');
search.addEventListener('click', (e) => {
  if (e.target.className === 'srch-btn') {
    const btn = e.target;
    const val = btn.parentElement.children[0].value.toString().toLowerCase();
    weatherData.kbInput = val;
    dataAPI(weatherData.kbInput);
  } else if (e.target.className === 'fas fa-search') {
    const btn = e.target;
    const val = btn.parentElement.parentElement.children[0].value
      .toString()
      .toLowerCase();
    weatherData.kbInput = val;
    dataAPI(weatherData.kbInput);
  }
});