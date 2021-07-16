'use strict';

// 객체

let user = new Object(); // 객체 생성자 문법
user = {}; // 객체 리터럴 문법

let user2 = {
    name: 'bk', // key값은 자동으로 문자열로 변환
    age: 25,
};

user2.isAdmin = 'true'; // 프로퍼티(키,벨류) 추가
delete user.age; //프로퍼티 삭제
console.log(user2);

const user3 = {
    name: 'John',
    'like bird': true,
    // 복수의 단어는 ""로 묶어야함
};

user3.name = 'bkboy'; // const 객체도 수정될 수 있음, 객체 자체를 바꾸는것은 안됨.
console.log(user3);

// console.log(user3.like bird); 오류
console.log(user3['like bird']); // 가능, ''로 묶어줘야함.

// 계산된 프로퍼티
let fruit = 'apple'; // 브라우저환경에선 prompt로 받아온 값을 사용 할 수 있다.
let bag = {
    [fruit]: 5,
    banana: 3,
};

console.log(bag);
// key이 바뀔 수 있어 실용적이다.

// in 연산자

let users = {
    name: 'bk',
    age: 30,
};

console.log('name' in users);

// for in 반복문 : 객체의 key를 순회함!

for (let key in users) {
    console.log(key);
    console.log(users[key]);
    // 이 떄 변수 key는 문자열로 알아서 인식되기 때문에 ''로 안 감싸도 된다.
}

console.clear();

// 참조에 의한 객체 복사
// 객체는 변수에 객체가 그대로 저장되는 것이 아니라, 객체가 저장되어있는 '메모리 주소'인
// 객체에 대한 참조 값이 저장된다.

// 원시타입의 경우
let message = 'hello';
let phrase = message;
phrase = 'hi';
console.log(message === phrase); // false

let people = { name: 'bk' };
let admin = people; // 참조에 의한 복사
people.name = 'peter';
// people과 admin에 각각 객체의 참조값이 들어가 있다.
console.log(people === admin); // true

// 객체의 완전한 복사

let player = { name: 'bk' };

let permissions1 = { canView: true };
let permisiions2 = { canEdit: true };

let newPlayer = Object.assign(player, permisiions2, permissions1);
console.log(newPlayer);

let clone = Object.assign({}, player); // 빈객체에 player를 합침
console.log(clone === player); // false

console.clear();
// 메서드와 this
// this 값은 호출 시점에 결정된다.

let man = {
    name: 'bk',
    age: 28,
    // sayHello = function (){

    // }, 단축해서 아래처럼
    sayHello() {
        console.log(`hello my name is ${this.name}`);
    },
};

man.sayHi = function () {
    console.log('hi');
};

let user5 = { name: 'John' };
let admin5 = { name: 'Admin' };

function sayHi2() {
    console.log(this.name);
}

// 별개의 객체에서 동일한 함수를 사용함
user.f = sayHi2;
admin.f = sayHi2;

// 'this'는 '점(.) 앞의' 객체를 참조하기 때문에
// this 값이 달라짐
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

// this가 없는 화살표 함수

console.clear();

// 생성자 함수

function User(name) {
    // 의도적으로 첫글자를 대문자로
    // this = {};
    this.name = name;
    this.isAdmin = false;
    this.sayName = function () {
        console.log(`my name is ${this.name}`);
    };
    // return this;
}

let bk = new User('범규'); // this 호출 시점, this는 bk가 된다.

// 옵셔널 체이닝 - x

// 심볼형
// 심볼은 유일한 식별자를 만들고 싶을 떄 사용한다.

let id = Symbol('id');
let id2 = Symbol('id');
console.log(id === id2); // false
