// promise
// promise is a js object for 비동기!

// state: pending => fulfilled or rejected (성공 or 실패)
// producer vs consumer

// producer
const promise = new Promise((resolve, reject) => {
    // 시간이 걸리는 작업은 비동기적으로
    console.log('doing something...'); // 바로 실행된다. 요청이 없음에도 바로 실행하는 것!
    setTimeout(() => {
        // resolve('bk'); // 일이 잘 마무리 되면 resolve를 호출하며, bk값을 전달한다.
        reject(new Error('no network')); // error객체
    }, 2000);
});

// consumer
// promise가 정상적으로 실행되면~~ 그러면~~ then~~
promise
    .then((value) => {
        // 여기서 value느 resolve가 넘겨준 bk
        console.log(value);
    })
    .catch((error) => {
        // error 객체, reject콜백함수가 보낸 에러를 받아옴
        console.log(error);
    })
    .finally(() => {
        // 성공 or 실패 이후 마지막으로 실행되는 것
        console.log('end');
    });

//promise chaining

const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 1000);
});

fetchNumber
    .then((num) => num * 2) //2
    .then((num) => num * 3) //6
    .then((num) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(num - 1); // 5
            }, 1000);
        });
    })
    .then((num) => console.log(num));
