//object

const bk = {
    name: 'bk',
    age: 25,
}; // object literal
const obj = new Object(); // object constructor syntax

// computed properties
console.log(bk.name);
console.log(bk['name']); // key값을 string type으로 꼭 넣어줘야함
// 원하는 키가 뭔지 정확히 모를 떄 쓰자.
function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(bk, 'name');

// property value shorthand

function makePerson(name, age) {
    return {
        name,
        age,
    };
} // key, value 이름이 같으면 생략!

// constuctor function
// 생성자 함수(객체를 만드는)

function Person(name, age) {
    // this = {};     -> 객체를 생성할 떄 new를 붙이면 일어나는 작업
    this.name = name;
    this.age = age;
    // return this
}

// in operator
console.log('name' in bk); // true

//for in

for (let key in bk) {
    console.log(key);
    console.log(bk[key]);
}

// fun cloning

const user = { name: 'elie', age: 25 };
const user2 = user;
console.log(user === user2); // true
const user3 = Object.assign({}, user);
console.log(user === user3); // false
