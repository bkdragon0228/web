// arrow function 활용

// setTimeout(() => {
//     console.log('settimeout arrow');
// }, 1000);

let newArr = [1, 2, 3, 4, 5].map((value, index, obj) => value * 2);
console.log(newArr);

// this context of Arrow function
// 실행 컨텍스트 : 실행 가능한 코드가 실행되는 환경

const myObj = {
    runTimeout() {
        setTimeout(() => {
            console.log(this === global);
            console.log(this);
            this.printData();
        }, 200);
    },
    printData() {
        console.log('hi~~');
    },
};

myObj.runTimeout();
