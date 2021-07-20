//1))
/*
 const entryPoint = 'a.b.c.d';

 function objectHell(str) {
   const initialArr = str.split('.').reverse();
   return initialArr.reduce((acc,current, index) => {
     if(index === 0) {
       acc = {[current]: null}
       return acc;
     }
     acc = {
       [current]: acc
     }
     return acc
   }, {})
 }

 console.log(objectHell(entryPoint));

 */
/*
 const entryPoint = 'x.x.x.x.x.x.x.x.x.xx.x.x.xxx.x';

 function objectHell(str) {
   const initialArr = str.split('.').reverse();
   return initialArr.reduce((acc,current, index) => {
     if(!index) {
       return { [current]: null };
     }
     return { [current]: acc };
   }, {})
 }
 console.log(objectHell(entryPoint));

 */
/*
const entryPoint = 'a.b.c.d';

function objectHell(str) {
  return str.split('.').reverse().reduce((acc,current, index) => {
    return !index ? { [current]: null } :  { [current]: acc };
  }, {})
}
console.log(objectHell(entryPoint));
(objectHell(entryPoint));


 */

//2))
/*
function debounceFunction(callback, delay) {
  let timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(callback, delay);
  };
}

const log100 = () => console.log(1000);
const instance = debounceFunction(log100, 1000);

setTimeout(instance, 1000);

 */

//3)
/*


const person = {
  name: 'Maxim'
}

function info(phone, email) {
  console.log(`Name: ${this.name}, Tell: ${phone}, Email: ${email}`);
}

function bind(fn, context, ...rest) {
  return function(...args) {
    // return fn.apply(context, rest.concat(args));
    return fn.call(context, ...rest.concat(args));
  }
}

bind(info, person)('093-600-4444', 'maxrad@gmail.com');
bind(info, person, '093-600-4444')('maxrad@gmail.com');
bind(info, person, '093-600-4444', 'maxrad@gmail.com')();

 */