//spread operator, 펼침 연산자.

const pre = ['apple', 'orange', 100];
const newData = [...pre]; // concat과 같은 효과!
console.log(newData);
console.log(pre === newData); // false

const pre2 = [100, 200, 'hello', null];
const newData2 = [0, 1, 2, 3, ...pre2, 4];
// pre2를 펼쳐서 그 사이에 넣음
console.log(newData2);

const pre3 = [100, 200, 300];
const sum = (a, b, c) => {
    return a + b + c;
};
console.log(sum(...pre3)); // 매개변수로 배열 요소를 넣어주기위해 펼쳐서 넣음
