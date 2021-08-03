// call
// 모든 함수에서 사용할 수 있으며, this를 특정값으로 지정할 수 있다.

const mike = {
    name: 'mike',
};

const tom = {
    name: 'tom',
};

const bk = {
    name: 'bk',
};
function showThisName() {
    console.log(this.name);
}

showThisName();
showThisName.call(mike); // this로 사용할 객체를 매개변수로 넘겨준다.

function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}

update.call(mike, 1997, 'producer'); // mike객체에 추가시킨다.
console.log(mike);

// apply
// 함수 매개변수를 처리하는 방법을 제외하면 call과 완전히 같다.
// apply는 매개변수를 배열로 받는다. => this로 사용할 객체 이후의 값을 배열로 받는다!

update.apply(tom, [2002, 'rapper']);
console.log(tom);

//활용
const nums = [1, 2, 3, 4, 5];
const maxNum = Math.max.apply(null, nums);
console.log(maxNum);

// bind
// 함수의 this 값을 영구히 바꿀 수 있다.

const updateBk = update.bind(bk);
// update의 this를 bk객체로 고정하고 updateBk를 만들었다.
updateBk(1997, 'student');
console.log(bk);

const user = {
    name: 'bk',
    showName: function () {
        console.log(`hello, ${this.name}`);
    },
};
user.showName(); // hello, bk

let fn = user.showName;
fn(); // hello, undefined
// this를 잃어버림.

let boundfn = fn.bind(user);
boundfn(); // hello, bk
