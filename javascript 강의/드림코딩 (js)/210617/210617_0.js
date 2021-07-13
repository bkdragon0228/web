// 배열 메소드 공부

// pop 배열 뒷부분의 값을 삭제
// push 배열 뒷부분에 값을 삽입
// unshift 배열 앞부분에 값을 삽입
// shift 배열 앞부분의 값을 삭제

// splice
//배열의 특정위치에 요소를 추가하거나 삭제
const arr4 = [1, 2, 3, 4, 5, 6, 7];
arr4.splice(3, 2); // 3번 인덱스부터 2개 제거
console.log(arr4); // [1,2,3,6,7];
// concat() 요소를 합쳐준다.

let a = [1, 2, 3, 4, 5];
let b = a.concat(6);
console.log(b); // [ 1, 2, 3, 4, 5, 6 ]

// join
// 배열을 문자열로 변형시켜준다, 괄호 안의 문자열로 구분지어 준다. 기본 값은 쉼표

let c = [1, 2, 3, 4, 5];
let d = c.join();
let e = c.join('');
console.log(d); // 1,2,3,4,5 ->문자열임
console.log(e); // 12345

// join과 split(문자열 분리 메소드) 다루기

let str = 'hello, world hi';

let s1 = str.split(''); // 문자열을 분리해서 배열에 넣었다
s1.join(''); // 분리한 문자열을 원상 복구 한것

// indexOf  배열 안에 해당 원소가 몇번째 인덱스에 있는지 찾는다
// 중복의 경우 앞부터, 없을 땐 -1을 return

let arr = [1, 2, 3, 4, 5];
console.log(arr.indexOf(2)); // index값 1

// slice 기존 배열을 잘라 새로운 배열을 만든다. 기존 배열은 변하지 않음.

const arr2 = [1, 2, 3, 4, 5];
const arr3 = arr2.slice(2, 4); // 2번 인덱스부터 (4-1) 인덱스까지 배열을 만든다.
console.log(arr3); // [3,4]

// 배열을 순회하는 방법

// 1. for문

const array = [1, 2, 3, 4];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

//2. forEach

array.forEach((value) => {
    console.log(value);
});

//3. for of

for (let item of array) {
    console.log(item);
}

// 전개 구문(spread operator)

let array2 = ['hello', 'bye', 'nice', 'meet'];
let newArray2 = [...array2];
console.log(array2 === newArray2); // false
let newArray3 = [100, ...array2, 250];

console.log(newArray3);

// map
// 첫번째 요소는 현재의 값, 두번째 요소 index, 세번째 요소는 배열 그 자체를 나타냄
// 반복문 처럼 배열을 요소들을 돈다.
// map은 새로운 배열으로 반환하기 떄문에 기존 배열이 변경되지 않는다.

const days = ['mon', 'tue', 'wed', 'thus', 'fri'];
const addSmile = days.map((x) => `^^${x}`);
console.log(addSmile);

// object가 요소인 배열을 컨트롤

const testJson = [
    { name: '이건', salary: 50000000 },
    { name: '홍길동', salary: 1000000 },
    { name: '임신구', salary: 3000000 },
    { name: '이승룡', salary: 2000000 },
];
const newJson = testJson.map((ele, idx) => {
    console.log(ele);
    let returnObj = {};
    returnObj[ele.name] = ele.salary; // 새로운 object에
    return returnObj;
});

console.log(newJson);

// reduce
// 매개변수로 누적값, 현재값, 인덱스, 요소를 받아서 사용한다.

const abc = [1, 2, 3];
let result = abc.reduce((acc, cur, i) => {
    console.log(acc, cur, i);
    return acc + cur; // 리턴하는데로 acc에 누적
}, 0); // 0은 초깃값 acc가 0이라는 소리

console.log(result);
