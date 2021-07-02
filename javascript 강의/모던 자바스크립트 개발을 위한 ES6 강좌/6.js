// destructuring
const data = ['crong', 'honux', 'jk', 'jinny'];

let [jisu, , jung] = data;
// let jisu = data[0];
// let jung = data[2]; 와 같은 작업

console.log(jisu, jung); // crong jk

// destructuring object

const obj = {
    name: 'crong',
    address: 'korea',
    age: 25,
};

let { name, age } = obj; //key값과 같은 변수이름
let { name: myname, address: myaddress } = obj; // 새로운 변수이름
console.log(name, age, myname, myaddress); // crong 25 crong korea

//추가내용
// destruncturing (구조분해)
let a, b, rest;
[a, b] = [1, 2];
console.log(a, b); // 1 2
[a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(rest); // 나머지를 배열 형태로 저장

// 배열
const arr = ['one', 'two', 'three'];
let [one, twe, three] = arr;
console.log(one, twe, three);

//값교환, 배열 구조분해를 이용

let num1 = 1;
let num2 = 2;
[num1, num2] = [num2, num1];
console.log(num1, num2);

//객체 구조분해
let o = {
    p: 42,
    q: true,
};
let { p, q } = o;
console.log(p, q);
