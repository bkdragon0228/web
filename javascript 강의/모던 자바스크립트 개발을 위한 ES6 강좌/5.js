//ES2015 from method
// from : 배열로 반환하고자 하는 유사 배열 객체나 반복가능한 객체를 배욜로 바꿈

function addMark() {
    const newData = [];
    for (let i = 0; i < arguments.length; i++) {
        newData.push(arguments[i] + '!');
    }
    console.log(newData);
}
//인자 몇개받을지 모를 떄 막강한 기능 (argument)

addMark(1, 2, 3, 4, 5);

const addMark2 = () => {
    let newArray = Array.from(arguments); // arguments로 부터 배열을 만든다.
    let newData2 = newArray.map((value) => {
        return value + '!';
    });
    console.log(newData2);
};

addMark2(1, 2, 3, 4, 5, 6, 7, 8, 9);

const foo = Array.from('foo');
console.log(foo); //[ 'f', 'o', 'o' ]

let str = '123';
const arr = Array.from(str, (value) => {
    return value + 1; // str의 요소에 접근해 변경
});

console.log(arr); // [ '11', '21', '31' ]
