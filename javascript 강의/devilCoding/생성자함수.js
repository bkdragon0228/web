// 생성자 함수

function Item(title, price) {
    //this = {}
    this.title = title;
    this.price = price;
    this.showPrice = function () {
        console.log(`가격은 ${this.price}원 입니다.`);
    };

    // return this;
    // 호출이 new가 해주는 역할
}

const item1 = new Item('인형', 3000);

console.log(item1);
item1.showPrice();
