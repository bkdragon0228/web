// class , object
// class : template, 붕어빵틀
// object : instance of a class, 붕어빵

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log(`${this.name}: hello`);
    }
}
const bk = new Person('bk', 25);
console.log(bk);
bk.speak();

// getter and setters

class User {
    constructor(firstNum, lastNum, age) {
        this.firstNum = firstNum;
        this.lastNum = lastNum;
        this.age = age;
    }

    get age() {
        // 획득자, this.age를 호출하면 실행된다.
        return this._age;
    }

    set age(v) {
        //설정자 , this.age를 호출하면 실행된다.
        this._age = v < 0 ? 0 : v;
    }
}

const user1 = new User('steve', 'job', -1);
console.log(user1.age);

//public, private

class Experiment {
    publicFieled = 2;
    #privateField = 0; // class 밖에서 접근할 수 없음
}

// static
// object에 상관없이 공통된 변수나 메소드에 사용하면 좋다.
class Article {
    static publisher = 'dream coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

console.log(Article.publisher); // 클래스 자체에 할당되어있다.

// 상속 & 다양성

class Shape {
    constructor(w, h, color) {
        this.w = w;
        this.h = h;
        this.color = color;
    }
    draw() {
        console.log(`drwaing ${this.color} color of`);
    }
    getArea() {
        return this.w * this.h;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw(); // 부모의 함수를 쓰고
        console.log(`세모`); // 새로운걸 추가
    }
    getArea() {
        return (this.w * this.h) / 2; //부모함수에 덮어씌움
    }
}

const retangle = new Rectangle(20, 30, 'blue');
const triangle = new Triangle(20, 20, 'red');
console.log(retangle.getArea());
console.log(triangle.getArea);
triangle.draw();

// class checking instanceOF
console.log(retangle instanceof Rectangle);
console.log(retangle instanceof Shape); // true
console.log(triangle instanceof Object); //true
