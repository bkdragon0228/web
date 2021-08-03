//arguments: 이제 안 쓰는 추세
// 화살표 함수에서 사용할 수 없다.
function callName(name) {
    console.log(arguments.length);
    for (let item of arguments) {
        // arguments는 유사배열
        // 배열의 내장 메서드를 사용할 수 없다.
        console.log(item);
    }
}

callName('bk', 'yj'); // 2, bk, yj 가 출력 됨
console.clear();

// Rest parameters
// 정해지지 않은 매개변수를 배열로 나타낸다.

function add(...numbers) {
    // let result = 0;
    // numbers.forEach((el) => (result += el)); // numbers는 배열이다.
    // return result;
    return numbers.reduce((prev, cur) => prev + cur, 0); // 이렇게도 됨 배열이니까!
}

console.log(add(1, 2, 3, 4, 5));

function User(name, age, ...skills) {
    // 나머지 매개변수는 마지막에 매개변수로 써줘야함
    this.name = name;
    this.age = age;
    this.skills = skills;
}

const user1 = new User('bk', 30, 'html', 'css', 'javascript');

console.log(user1);

// Spread syntax, 전개 구문

// 전개구문, 배열

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let newArr = [0, ...arr1, ...arr2, 7, 8, 9]; //배열의 요소를 풀어준다

// 전개구문, 객체

let obj = { name: 'bk', age: 25 };
let newOjb = { ...obj, gender: 'male' }; // Object.assign({}) 없이 간편하게 복제 가능
