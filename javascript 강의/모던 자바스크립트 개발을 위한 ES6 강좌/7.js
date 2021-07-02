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
