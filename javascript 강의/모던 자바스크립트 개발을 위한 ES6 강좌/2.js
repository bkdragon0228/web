//ES2015 string에 새로운 메서드

let str = 'hello world ! ^^ ~~';

console.log(str.startsWith('hello')); // true
console.log(str.startsWith('helloo')); // false
console.log(str.endsWith('^^ ~~')); // true
// 시작과 끝을 비교~~

console.log(str.includes('world')); //true
// 포함하고 있는지를 확인~~
