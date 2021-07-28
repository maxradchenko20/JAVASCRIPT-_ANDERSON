const CITIES = ['London', 'Tokio', 'Kyiv', 'Odessa', 'Minsk'];
const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';
const DEFAULT_CITY_ID = '710791';
const DEFAULT_CITY_NAME = 'Черкассы';
const APP_ID = '82ae147423266d75fdbac9b22aeacb65';
const CITIES_SIZE = 5;

const DEFAULT_PARAMS = {  q: DEFAULT_CITY_NAME, appid: APP_ID, cnt: CITIES_SIZE };

const getRandomCity = () => {
  return CITIES[Math.floor(Math.random() * (CITIES.length))]
}

const getRequestUrl = (params) => {
  const url = new URL(BASE_URL);
  url.search = new URLSearchParams(params).toString();
  return url;
};

const fetchData = async (params = DEFAULT_PARAMS) => {
  const response = await fetch(getRequestUrl(params));

  return await response.json();
};


const getTitle = (response) => {
  return response.city.name;
};

const getTempInCelsius = (entity) => {
  return `${Math.round(entity.main.temp - 273) + '°'}`
}

const renderTitle = (title = DEFAULT_CITY_NAME) => {
  const h3 = document.createElement('h3');
  h3.textContent = title;
  document.body.appendChild(h3);
}

const renderData = (data) => {
  renderTitle(getTitle(data));

  const list = document.createElement('ul');

  data.list.forEach((entity) => {
    const listItem = document.createElement('li');
    listItem.textContent = getTempInCelsius(entity);
    list.appendChild(listItem);
  });

  document.body.appendChild(list);
}

const renderAfterFetch = (promise) => {
  promise.then((response) => renderData(response));
};

renderAfterFetch(fetchData());
renderAfterFetch(fetchData({ ...DEFAULT_PARAMS, q: getRandomCity() }));