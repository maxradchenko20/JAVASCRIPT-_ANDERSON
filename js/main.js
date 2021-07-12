/*
1) написать функцию которая поверхностно должна сравнить 2 обьекта , резульат true если обьекты идентичны и false если разные
*/
const isEqual = (firstObj, secondObj) => {
    // // return Object.keys(firstObj).every(key => {
    //     return firstObj[key] === secondObj[key];
    // });
    return JSON.stringify(firstObj) === JSON.stringify(secondObj);
};
const data = {a: 1,b: 1,},
      data2 = {a: 1,b: 1},
      data3 = {a: 1,b: 2};

console.log(isEqual(data,data2));
console.log(isEqual(data,data3));

/*
2) Написать функц которая делает поверхностную првоерку обьекта на пустоту
пример
({}) => true
({a: undefined}) => true
({a: 1}) => false */

const isEmpty = (object) => {
    return  JSON.stringify(object) === '{}';
}
const data = { a: 1, b: undefined };
const data2 = { a: undefined };

console.log(isEmpty(data)); //false
console.log(isEmpty(data2)); //true


/*
3)Напишите функц которая возвращает вложеный массив вида `[[key, value], [key, value]]`,
Рез ({a:1, b:2}) => [['a',1],['b',2]]

 */

const makePairs = (object) => {
    return Object.entries(object);
};
const data = {a: 1, b: 2 };
console.log(makePairs(data)); // [['a', 1], ['b', 2]]

