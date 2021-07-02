// const, immutable array

function home() {
    const list = ['apple', 'orange', 'watermelon'];
    // list = 'sdsdf' 불가능!
    list.push('banana'); // 가능 !
    console.log(list);
}

// const를 사용하더라도 배열과 오브젝트의 값을 변경하는 것은 가능하다.
// immutable(불변) array를 만드는 법

const list = ['apple', 'orange', 'watermelon'];
list2 = [].concat(list, 'banana');
console.log(list); // 불변!
console.log(list2);
console.log(list === list2); //false
