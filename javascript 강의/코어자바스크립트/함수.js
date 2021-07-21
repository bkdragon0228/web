'use strict';

// 나머지 매개변수

function sumAll(...args) {
    // 배열 형태로 들어간다.
    let sum = 0;
    // console.log(args);
    for (let a of args) {
        sum += args;
    }
    return sum;
}
sumAll(1, 2, 3, 4, 5);
// 나머지 매개변수는 항상 마지막에 있어야한다.

// spread 문법

let arr = [3, 5, 1, 4];

console.log(Math.max(...arr, 10)); // 배열요소를 펼쳐(spread)서 매개변수로 줬다.
// 평범한 값과 혼합해서도 사용할  수 있다.

let arr2 = [3, 5, 1];
let arr3 = [2, 4, 6];
let newArr = [...arr2, ...arr3];
console.log(newArr); // 새로운 배열을 만드는데 활용할 수 있다.
// 배열이 아니더라도 순회가능한(이터러블) 객체면 전개문법을 쓸 수 있다.

// 클로저
// 함수와 렉시컬 환경의 조합
// 함수가 생성될 당시의 외부 변수를 기억하고 생성 이후에도 계속 접근가능
// 외부함수의 실행이 끝나고 내부함수가 실행되어도 내부함수는 외부함수의 지역변수나
// 매개변수에 접근이 가능하다.

function makeCounter() {
    let num = 0;

    return function () {
        return num++;
    };
}
let counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter()); //2

//counter가 num에 접근이 가능하다.
// num 변수는 private하다.

console.clear();

// 함수의 자료형 ? : 객체!

function sayHi() {
    console.log('hi');
}
console.log(sayHi.name); // 함수의 이름을 반환
console.log(sayHi.length); // 매개변수의 개수를 반환

// 커스텀 프로퍼티

function sayHello() {
    console.log('hello');

    sayHello.counter++;
}
sayHello.counter = 0; // 변수가 아님!
sayHello();
sayHello();
sayHello();
console.log(`${sayHello.counter}회 호출`);

// 클로저를 커스텀 프로퍼티로 대체

function makeCounter2() {
    function counter2() {
        return counter2.count++;
    }
    counter2.count = 0; // 커스텀 프로퍼티

    return counter2;
}

let c = makeCounter2();
console.log(c());
console.log(c());
c.count = 10;
console.log(c()); // 10, 접근이 가능하다는 점에서 클로저와는 다름

console.clear();

// setTimeout

function sayNice(s) {
    console.log(`${s} Nice!`);
}
setTimeout(sayNice, 1000, '아주'); // 1000밀리초, 1초 뒤에 sayNice를 실행, 세번째 매개변수부터는 함수의 인자

// clearTimeout으로 스케줄링 취소하기

let timeId = setTimeout(() => {
    console.log('x');
}, 2000);
// console.log(timeId);
clearTimeout(timeId); // 취소 되었기때문에 아무것도 출력 안됨

// setunterval
// setTimeout과 동일한 문법
//  함수를 주기적으로 실행한다.

let timeId2 = setInterval(() => {
    console.log('째깍');
}, 2000);

setTimeout(() => {
    clearInterval(timeId2);
    console.log('정지');
}, 5000); // 5초뒤 정지

// 중첩 setTimeout ...
