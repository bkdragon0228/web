//operator

// string concatenation
console.log('my' + 'cat');
console.log('1' + 2); //12
console.log(`string literals : 


1+2 = ${1 + 2}`); // 띄어쓰기도 포함해서 출력

// numeric operator
// 사칙연산, 제곱, 나머지 등의 연산이 가능

// Increment add decrement operator

let counter = 2;
const preIncrement = ++counter; //3
// counter = counter + 1;
// preIncrement = counter; 와 같다.
const postIncerment = counter++;
// pre와 다르게 먼저 대입 후 값을 올린다.
console.log(`post : ${postIncerment}, counter : ${counter}`);
// 3과 4가 출력된다. 먼저 대입했으니 3이 post에 들어가는것!

// Assigment operators
let x = 3;
let y = 6;
x += y; // x = x+y

// comparison operators (비교)

// logical operators
const value1 = false;
const value2 = 4 < 2; // false
const value3 = true;

function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log(`gigle`);
    }
    return true;
}

console.log(`or : ${value1 || value2 || check()}`);
// or은 하나라도 트루면 다 트루
// 인자중에 true가 나오면 뒤에는 보지도 않고 true를 반환
console.log(`or : ${value3 || value2 || check()}`);
// gigle이 출력이 안되는 걸 확인할 수 있다.

// and는 모두가 trun여야 true
// !(not) true, false를 반대루

// equality
// == 타입까진 확인안한다.
// === 타입까지 확인한다.
// null == undefined : true
// null === undefined : false

// conditional operators : if
// if, else if, else

const name = 'bk';
if (name === 'elie') {
    console.log('welcome elie');
} else if (name == 'bkboy') {
    console.log('welcome bkboy');
} else {
    console.log('welcome bk');
}

// ternary operator : ?
// codition ? value1 : value2;

console.log(name === 'bk' ? 'yes' : 'no');

// switch statement

const brower = 'IE';

switch (brower) {
    case 'IE':
        console.log('go way');
        break;
    case 'chrome':
        console.log('love you');
        break;
    case 'firefox':
        console.log('love you');
        break;
    default:
        console.log('hate you');
        break;
}
