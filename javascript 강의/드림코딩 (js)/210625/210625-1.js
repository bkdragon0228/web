//functions, 함수
// 하나의 함수는 하나의 일만
// 동사형태로 이름지정
// function in ogject in JS

function printHello() {
    console.log('hello');
}

// 매개변수
// premitive parameters : passed by value
// object parameters : passed by reference
function changeName(obj) {
    obj.name = 'bk';
}
const bkboy = { name: 'bkboy' };
changeName(bkboy);
console.log(bkboy);

// defalut parameters
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('hello');

// rest parameters
function printAll(...arg) {
    // 인자갯수를 알수 없을 떄 여러개를 받아 배열로 만듦
    for (let i = 0; i < arg.length; i++) {
        console.log(arg[i]);
        console.log(i);
    }
}
printAll('dream', 'bk', 'youngju');

// local scope

let globalMessage = 'global';
function printMessage() {
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
}
printMessage();
//밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.

//return a value

function sum(a, b) {
    return a + b;
}

// early return, early exit

//function expression
const print = function () {
    console.log('print');
};
print();
// 호이스팅이 안됨

//callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

const printYes = function () {
    console.log('yes!');
};
const printNo = function () {
    console.log(`no!`);
};

randomQuiz('love you', printYes, printNo);

//arrow function
const simplePrint = () => {
    console.log(`simplePrint`);
};
const add = (a, b) => a + b;
const add2 = (a, b) => {
    return a + b + 2;
};
