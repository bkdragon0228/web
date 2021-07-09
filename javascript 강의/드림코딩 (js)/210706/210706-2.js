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

//splice
// 시작(인덱스값)부터 몇개나 지울 것인지
// 몇개인지를 입력 안하면 그 인덱스부터 다 지움
fruits.push('lemon', 'peach', 'berry');
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(0, 2, 'watermelon', 'apple'); // 지우고 그자리에 추가!
console.log(fruits);

//combine two arrays
const fruits2 = ['sweetpotato'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

console.clear();
// searching
console.log(fruits.indexOf('apple')); // 1
// 인덱스값을 리턴, 없을 떄 -1을 리턴
console.log(fruits.includes('coconat'));
// 포함하는지 true or false

//lastindexof
fruits.push('apple');
console.log(fruits.indexOf('apple')); //1
console.log(fruits.lastIndexOf('apple')); //4
