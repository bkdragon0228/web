// Array

const arr1 = new Array();
const arr2 = [];

//index position

const fruits = ['apple', 'banana'];
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);
console.log(fruits[2]); // undefined

// console.clear(); // 콘솔창 정리
// looping over array
for (let item of fruits) {
    console.log(item);
}

fruits.forEach((v, i) => {
    console.log(`value : ${v}, index : ${i}`);
});

// push, pop
// unshift: 앞에 넣기
// shift : 앞에 빼기

// shift, unshift는 pop, push에 비해 엄청 느리다.

// shift, unshift는 pop, push에 비해 엄청 느리다.
