// computed property

let n = 'name';
let a = 'age';

const user = {
    [n]: 'bk',
    [a]: 30,
    [1 + 4]: 5,
};

console.log(user);

function makeObj(key, val) {
    return {
        [key]: val,
    };
}

const obj = makeObj('성별', 'male');
// key값이 어떤게 나올지 모를 때 유용
console.log(obj);

console.clear();
// object method

const users = {
    name: 'mike',
    age: 30,
};
const users2 = Object.assign({}, users);
users2.name = 'bkboy';
console.log(users2);
// 완전한 복제가 이뤄진다.

console.log(Object.keys(users2)); // key 값들을 배열로 반환
// Object.values, entries (밸류만 반환, 키와 벨류를 배열로 담은 배열을 반환)

let arr = [
    ['mon', '월'],
    ['tue', '화'],
];
const result = Object.fromEntries(arr);
console.log(result);
//객체로 만들어준다.
