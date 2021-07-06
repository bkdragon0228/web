// this

console.log(this) // 그냥 찍으면 this는 window(전역객체)를 가리킨다.

// 일반 함수에서 this

function x(){
    return this; // 전역을 가리킨다.
}

// 객체 method의 this

const person1 = {
    name : 'bk',
    age : 25,
    sayHello : function () {
        console.log(`my name is ${this.name}`);
    },
}; 
// 객체 안의 method에 this는 객체에 연결


// 생성자 함수의 this

function Person2(name , age){ // 생성자 함수는 첫글자 대문자로 하기로 약속
    this.name = name;
    this.age = age;
    this.sayHi = function(){
        console.log(`hi my name is ${this.name}`);
    }


}
// 생성자 함수내의 this는 생성한 인스턴스(객체)에 바인딩
// 생성자 함수로 인스턴스(객체)를 만드려면  앞에 new를 붙여야한다.
// new가 없으면 this는 전역객체와 바인딩

function Person3 (name){
    this.name = name;
}
Person3.prototype.sayBye = function(){
    console.log(`im ${this.name} bye see you later`);
};

// 생성자 함수일 떄와 같은 생성한 인스턴스(객체)에 바인딩

// call 

let person4 = {
    name : "bkdragon",
}
function showMyName(){
    console.log(this.name) // 이 때 this는 전역객체, 일반함수임으로
}

showMyName.call(person4); // 이 함수를 person4의 method인 것처럼 동작하게 함.

//apply

function logName(a,b,c){
    console.log(this.name); //  전역이여서 undefinded
    console.log(this.nationality);
    console.log(a,b,c);
}
const person0 = {
    name :'Ryan',
    nationality :'South Korea',
}
const nums = [1,2,3];

logName.apply(person0, nums); // 인자를 배열로 넣음, 배열자체가 가는것이 아닌 그 요소가 전달된다.
logName.call(person0,...nums); // call로 해서 전개구문을 이용해서 넣는게 나을 것 같다.

// logName();