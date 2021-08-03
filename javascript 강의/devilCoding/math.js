//math

let num = 10;
num.toString(); // '10'
num.toString(2); // '1010' , 2진수
num = 255;
console.log(num.toString(16)); //'ff'

console.log(Math.PI);
// Math.ceil(); 올림
// Math.floor(); 내림
// Math.round(); 반올림

let userRate = 30.1234;
// 소수점 둘째자리 까지 표현 (셋째자리에서 반올림)
console.log(Math.round(userRate * 100) / 100);

console.log(userRate.toFixed(2));
console.log(userRate.toFixed(6)); //30.123400
// tofixed는 문자열로 반환한다.

console.log(Math.random()); // 0 ~ 1 사이 랜덤 숫자

//1 ~ 100 사이 임의의 숫자를 뽑고 싶다면
console.log(Math.floor(Math.random() * 100) + 1);

// 최댓값, 최소값
const arr = [1, 2, 3, 4, 5];

console.log(Math.max(...arr)); // 5
console.log(Math.min(...arr)); // 1

Math.abs(-1); // 절댓값
Math.pow(2, 10); // 2의 10제곱, 1024
Math.sqrt(16); // 제곱근, 4
