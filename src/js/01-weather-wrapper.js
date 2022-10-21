import { compareAsc, format } from 'date-fns';

const weathrWrapperRef = document.querySelector('.weather__wrapper');

function createMarkup({ name, clouds, weather, main, sys }) {
  const sunrise = format(new Date(sys.sunrise * 1000), 'HH:mm');
  const sunset = format(new Date(sys.sunset * 1000), 'HH:mm');
  return `
  <div class="weather__card">
      <h2 class="city-name">${name}</h2>
      <ul class="weather-info list">
        <li class="weather-info-item">
          <p class="temp">Температура${main.temp}<sub>&#176;</sub></p>
        </li>
        <li class="weather-info-item">
          <p class="feels-like-temp">Відчувається як: ${
            main.feels - like
          }<sub>&#176;</sub></p>
        </li>
        <li class="weather-info-item">
          <p class="sunrise-time">Схід сонця: ${sunrise}</p>
        </li>
        <li class="weather-info-item">
          <p class="sunrise-time">Захід сонця: ${sunset}</p>
        </li>
        <li class="weather-info-item">
          <p class="clouds">Хмарність: ${clouds.all}</p>
        </li>
        <li><img src="https://api.openweathermap.org/img/wn/${
          weather[0].icon
        }@2x.png" alt="${weather[0].description}" /></li>
      </ul>
    </div>`;
}

navigator.geolocation?.getCurrentPosition(({ coords }) => {
  const { latitude, longitude } = coords;

  getWeatherByCords(latitude, longitude)
    .then(data => {
      const markup = createMarkup(data);
      weathrWrapperRef.innerHTML = markup;
    })
    .catch(error => {
      console.log('catch ');
      console.log(error.message);
      weathrWrapperRef.innerHTML = '';
    });
});

function getWeatherByCords(lat, lon) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=95632b02f9162f375a368971925f5209&units=metric`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
