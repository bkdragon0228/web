// 구조분해할당
// 배열이나 객체의 속성을 분해해서 그 값을 변수 에 담을 수 있게 하는 표현식

// 배열 구조 분해
let [x, y] = [1, 2];

let users = ['bk', 'bkboy', 'mike'];
let [user1, user2, user3] = users;
// 각 변수에 배열의 요소들을 대입한 것
// let user1 = users[0], let user2 = users[1], let user3 = users[2] 와 동일한 동작

let str = 'Mike-Tom-Jane';
[user1, user2, user3] = str.split('-');

// 기본값

let [a = 3, b = 4, c = 5] = [1, 2];
// 기본값이 없으면 c는 undefiend

// 일부 반환 값 무시

let [man1, , man2] = ['mike', 'tom', 'jane', 'tony'];
// tom, tony는 무시된다.

// 바꿔치기

[a, b] = [b, a];
// 새로운 변수를 생성할 필요 없이 바꿀 수 있다.

// 객체 구조 분해
let user = {
    name: 'mike',
    age: 30,
};
let { name, age } = user;
// let name = user.name
// let age = user.age 와 같은 동작
// 선언하는 변수가 key값과 같아야함

// 변수명 바꾸는 법

let { name: userName, age: userAge } = user;
console.log(userName); // mike

// 기본값을 할 수 있다.
