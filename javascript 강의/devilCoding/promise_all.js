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
            res('3번 주문 완료');
            // rej(new Error('no reason'));1
        }, 2000);
    });
};

//Promise.all
Promise.all([f1(), f2(), f3()]).then((res) => {
    console.log(res);
});
