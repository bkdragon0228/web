//데이터타입, 호이스팅

// 변수, variable
// let (added im ES6)

let name = 'bk';
console.log(name);
name = 'bkboy';
console.log(name);

// block scope

{
    let name2 = 'bkgirl'; // block 안에서만 사용가능
}
// console.log(name2);

// var를 사용하면 안된다!!
// 변수를 선언하기도 전에 할당하거나 출력할 수 있다
// var hoisting 이라고 한다.
// move declaration from bottom to top
// var는 block scope를 무시한다. 오류가 생기기 쉬움
{
    var age = 4;
}
console.log(age);

// constant
// 할당하면 값이 바뀌지 않는
// immutable data type
// 보안, 실수의 방지

const daysInWeek = 7;
const maxNumber = 5;

// Variable types
// 숫자, 문자열, 불리안, null, undefied, symbol
// 객체
// 함수

// number
const count = 17;
const size = 17.1; // 숫자에서 사이즈나 형태별로 다른 방법을 변수 선언하지 않아도 된다.
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`); // template literals
const bigint = 12121212121211212121212121212121212121212121212n; // 끝에 n추기
console.log(`value: ${bigint}, type: ${typeof bigint}`);

// string
const char = 'c';
const brendan = 'brendan'; // 한문자나 문장이다 다 같은 string
const greeting = 'hello' + brendan;

//boolean
// false : 0, null, undefined, nan, ""
// true: any otherthings

// null
// 할당이 텅텅 비어있는

// undefined
// 할당이 안되어있는것

//symbol
const symbol1 = Symbol('id'); // 고유 식별자
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);

// Dynamic typing : dynamically typed language
// 선언할 때 데이터 타입을 정하지않고 런타임으로 할당된 값에 따라
// 타입이 결정이 된다.
