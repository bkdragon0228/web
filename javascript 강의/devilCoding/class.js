// class

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showName() {
        console.log(`i'm ${this.name}`);
    } // proto에 저장된다.
}

const bk = new User('bk', 25);

for (let i in bk) {
    console.log(i);
    // 프로토타입이 출력 안된다. 좋은거!
}

// extends 상속

class Car {
    constructor(color) {
        this.color = color;
        this.wheels = 4;
    }
    drive() {
        console.log('drive..');
    }
    stop() {
        console.log('stop');
    }
}

class Bmw extends Car {
    constructor(color) {
        super(color); // 부모 클래스의 constructor를 실행해줌
        this.navigation = 1;
    }
    stop() {
        super.stop(); // Car의 stop도 사용하게 된다.
        console.log('OFF'); // 오버라이딩, 덮어쓴다.
    }
}
