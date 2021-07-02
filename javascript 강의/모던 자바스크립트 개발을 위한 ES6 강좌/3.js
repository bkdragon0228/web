// for of(배열 순회)

const data = [1, 2, undefined, NaN, null, ''];
Array.prototype.getIndex = function () {};

for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
}

data.forEach((value, index, arr) => {
    console.log(value);
});

for (let i in data) {
    console.log(data[i]);
}
// for in 문제 : 원래는 object를 순회할 때 쓰는 것
// prototype으로 추가한 객체가 나오기 때문에 for in을 배열에 쓰지 않는다.

for (let item of data) {
    console.log(item);
}

let str = 'hello world!';

for (let value of str) {
    console.log(value);
}
// 문자열 순회도 가능~~
