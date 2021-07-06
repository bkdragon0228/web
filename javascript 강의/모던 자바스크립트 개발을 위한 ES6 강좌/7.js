// set, 중복을 제거한 값들의 집합

let mySet = new Set();
mySet.add('crong');
mySet.add('hary');
mySet.add('crong');
// mySet.delete('crong'); 삭제
// clear : 모든 요소 제거
//  size : 요소의 갯수 반환
console.log(mySet); // Set(2) { 'crong', 'hary' }
console.log(mySet.has('crong')); // true

mySet.forEach((value) => {
    console.log(value);
});

//weakset
// 참조를 가지고 있는 객체만 저장이 가능하다.
// 객체형태를 중복없이 저장하려고 할 때 유용하다.

let arr = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
let obj = { arr, arr2 };
let ws = new WeakSet();

ws.add(arr);
// ws.add(function () {}); 가능!!!

// ws.add(111);
// ws.add('111');  넣을 수 없다.

ws.add(arr2);
ws.add(obj);

console.log(ws);
