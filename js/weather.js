const cities = ['London', 'Tokio', 'Kyiv', 'Odessa', 'Minsk'];
const randomCity =  cities[Math.floor(Math.random() * (cities.length))];

function getAndRenderData(city = 'Черкассы', withTitle = false) {
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=82ae147423266d75fdbac9b22aeacb65&cnt=5`)
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      if (withTitle) {
        const title = document.createElement('h3');
         title.classList.add('title')
         title.textContent = city;
        document.body.appendChild(title);
      }
      const list = document.createElement('ul');
      list.classList.add('text');

      data.list.forEach( (elem) => {
        console.log(Math.round(elem.main.temp - 273))
        const listItem =  document.createElement('li');
        listItem.textContent = Math.round(elem.main.temp - 273) + '°' ;
        list.appendChild(listItem);
      })
      document.body.appendChild(list);
    })
}

getAndRenderData('Черкассы', true);
getAndRenderData(randomCity, true);