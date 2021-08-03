//__proto__, prototype
// 객체에서 프로퍼티를 읽고 없으면 프로토타입에서 찾음

const car = {
    wheels: 4,
    drive() {
        console.log('drive..');
    },
};

const bmw = {
    color: 'red',
    navigation: 1,
};
const benz = {
    color: 'black',
};
const audi = {
    color: 'blue',
};
const x5 = {
    color: 'white',
    name: 'x5',
};

// 상속
// car가 다른 차들엥 프로토타입이 된다.
bmw.__proto__ = car;
benz.__proto__ = car;
audi.__proto__ = car;

x5.__proto__ = bmw;
// 상속에 상속을 이어갈 수 있다.

function Car(color) {
    this.color = color;
    this.wheels = 4;
    this.drive = function () {
        console.log('drive...');
    };
}

Car.prototype.navigation = 1;
Car.prototype.stop = function () {
    console.log('stop');
};

const k7 = new Car('red');
const z4 = new Car('blue');

//instanceof

console.log(z4 instanceof Car); // true
