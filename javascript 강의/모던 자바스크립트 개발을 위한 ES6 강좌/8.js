// map & weakmap
// Array -> set, weakset
// object -> map ,weakmap 개선했다고 보면 된다.

// map은 key/value
// key가 중복되지 않는다. 하나의 key에는 하나의 value만

let me = new Map();
me.set('name', 'bk'); // 넣는 메소드
me.set('age', 25);

console.log(me); //Map(2) { 'name' => 'bk', 'age' => 25 }
console.log(me.get('age')); // 25, 꺼내는 메소드

// has : key가 존재하는지 확인
// size : map에 담겨진 개수를 조회
// delete : 주어진 key값 그거에 연결된 value를 삭제
// cleak : 모든 값 삭제

console.log(me.keys()); // [Map Iterator] { 'name', 'age' }
console.log(me.values()); // [Map Iterator] { 'bk', 25 }
// map 안의 key 혹은 value 들을 순회!!!할 수 있는 iterable object 를 반환

// for of
let we = new Map().set('car', 30).set('bus', 45);
for (let [key, value] of we) {
    console.log(`${key}^${value}`);
}

// forEach
we.forEach((value, key, map) => {
    //인자 순서가 반대이다.
    console.log(`${key}->${value}`);
});

//weak map

let wm = new WeakMap();
let myfun = function () {};
wm.set(myfun, 0);
console.log(wm);

// weakMap 클래스 인스턴스 변수 보호하기(활용)

function Area(height, width) {
    this.height = height;
    this.width = width;
}
Area.prototype.getArea = function () {
    return this.height * this.width;
};

let myarea = new Area(10, 20);
console.log(myarea.getArea()); // 200
console.log(myarea.height); // 이 값에 대한 접근을 막고 싶을 떄

const wm2 = new WeakMap();

function Area2(height, width) {
    wm.set(this, { height, width }); // 현재객체에 ogject타입을 넣은것
}
Area2.prototype.getArea2 = function () {
    const { height: h, width: w } = wm.get(this);
    return h * w;
};
let myArea2 = new Area2(20, 30);
console.log(myArea2.getArea2());
console.log(myArea2.height); // undefined
