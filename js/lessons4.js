
/*
const button = document.querySelector('.button');

  button.addEventListener('click', () => {
    Promise.resolve().then(() => console.log('Microtask 1'));
   console.log('Listener 1');
 })

 button.addEventListener('click', () => {
    Promise.resolve().then(() => console.log('Microtask 2'));
    console.log('Listener 2');
   });

  Код виповнюється синхронно (по строково). Спочатку навішується той 'addEventListener' який перший по коду, потім наступний або наступні.
  Коли ми клікаємо, то спочатку викликається той 'addEventListener' який перший по коду, і додаєтся у 'Event loop'. Далі додаються всі наступні.
  Потім в кожному 'addEventListener' в першу чергу виконуються всі синхронні дії(тобто console.log). Далі викинуються асинхронні дії такі як: Promise, setTimeout;
  Як би ми юзали конструкцію async/await або через ф-ції генератори (function*) і ключове слово yield то наш код виконувався послідновно.

  Listener 1
  Microtask 1
  Listener 2
  Microtask 2
     */

/*
const MAX_RANDOM_RANGE = 2000;

const getRandomDelay = () => {
  return Math.floor(Math.random() * MAX_RANDOM_RANGE) + 1;
}

const request = (url) => {
  return new Promise((resolve) => {
    const delayTime = getRandomDelay();

    const callback = () => {
      resolve(url)
    }

    setTimeout(callback, delayTime);
  });
}

const resolveAll = (resolve) => async (allPromises, currentPromise, index, promises) => {
  let  { result = [], count = 0 } = await allPromises;
  result[index] = await currentPromise;

  if(promises.length === ++count) {
    return resolve(result);
  }

  return { result, count };
}

const willGetUrls = (urls) =>  {
  return new Promise(resolve => {
    urls
      .map(request)
      .reduce(resolveAll(resolve), {});
  });
}

const urls = ["maxim", "valik", "andre", "slava"];
willGetUrls(urls).then(console.log);

 */










