//1)
// function palindrome(str) {
//    str = str.toLowerCase().replace(/[^a-z0-9]+/g,"");
//    return str === str.split('').reverse().join('');
//
//  }
//  palindrome();


//2))
//  const vowelsArr = ['a', 'e', 'i', 'o', 'u'];
//  const findVowels = str => {
//     return [...str.toLowerCase()].reduce((acc, cur) => {
//       const isInclude = vowelsArr.includes(cur);
//       if(isInclude){
//           return acc += 1;
//       }
//       return acc;
//     }, 0);
//  };
//    findVowels()


//3))
//  Array.prototype.superFilter = function (predicate, context) {
//    const result = [];
//
//    if (!this.length) {
//      return [];
//    }
//
//    if (typeof predicate !== 'function') {
//      console.error(`${predicate} is not a function`);
//      return [];
//    }
//
//    for (let i = 0; i < this.length; i++) {
//      const predicateResult = predicate(this[i], i, context || this);
//
//      if (predicateResult) {
//        result.push(this[i]);
//      }
//    }
//
//    return result;
//  }
//   const array = [1, null, Number.NaN, 'a', '', undefined, Infinity, 1n, 0, false, true, {}, NaN];
//   const stingArray = [1, 2, 3, 4, 5, 6, 7];
//   const predicate = (el) => el ;
//   console.log(array.superFilter(predicate,{}))
