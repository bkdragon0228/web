// 화살표함수
// arrow function

let sum = function(a,b) {
    return a+b;
}

// -> 

let sum1 = (a,b) => a+b; // return 생략가능

// 인수가 하나라면 인수를 감싸는 괄호 생략가능
// 인수가 하나도 없을 땐 빈 괄호로 두면 됨.

let sayHi = () => console.log(`hi`);

// 본문이 여러줄이면 줄괄호로 감싸준다. 그리고 return이 필요하면 써줘야함.

let sum2 = (a,b) => {
    let result = a + b + 2;
    return result;
} 
