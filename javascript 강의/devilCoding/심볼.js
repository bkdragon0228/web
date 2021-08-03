// 심볼, 유일성 보장

const a = Symbol();
const b = Symbol();

console.log(a == b); // false

const id = Symbol('id');
const id2 = Symbol('id');
console.log(id == id2); // false

console.log(id.description); // id , 심볼 key값 얻기

const user = {
    name: 'mike',
    age: 30,
};

// user.showName = function () {};
const showName = Symbol('show name');
user[showName] = function () {
    console.log(this.name);
};
// 심볼로 만들었기 떄문에 for in 문에서 나타나지 않는다.
// Object.keys, values, entries method는 key가 symbol형이면 건너뛴다.

for (let key in user) {
    console.log(`his ${key} is ${user[key]}.`);
    //his showName is function () {}. 이 메시지를 감추고 싶다
}

console.log(user); // 여기선 보인다.
user[showName]();

// 전역 심볼
const id1 = Symbol.for('yes');
const id3 = Symbol.for('yes');
const id4 = Symbol.for('yes');
console.log(id1 === id3); // true
console.log(id3 === id4); // true

console.log(Symbol.keyFor(id1)); // 심볼의 key값을 반환
