//promise
const pr = new Promise((resolve, reject) => {});
// resolve는 성공시 , reject는 실패시 실행하는 함수

const pro = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('OK');
        // reject(new Error('err...'));
    }, 3000);
});
// new Promise 는 state와 result를 가진 객체이다.
//  state: pending(대기), fulfilled(성공), rejected(실패)
// result  : undefined, value, error
//then...
console.log('start');
pro.then((result) => {
    // result(then의 매개변수)는 resolve가 보낸 값
    console.log(result);
})
    .catch((err) => {
        // err(catch의 매개변수)는 reject가 보낸 값
        console.log(err);
    })
    .finally(() => {
        console.log('----end----');
    });

console.clear();

const f1 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('1번 주문 완료');
        }, 1000);
    });
};

const f2 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('2번 주문 완료');
        }, 3000);
    });
};

const f3 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            // res('3번 주문 완료');
            rej(new Error('no reason'));
        }, 2000);
    });
};

// Promise chaining
console.log('시작');
f1()
    .then((res) => f2(res)) // 1번주문완료
    .then((res) => f3(res)) // 2번주문완료
    .then((res) => console.log(res)) //3번주문완료
    .catch((err) => console.log(err)) // 오류가 나면 바로 이 줄이 실행됨.
    .finally(() => {
        console.log('end');
    });
