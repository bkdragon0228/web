//string methods

// length로 길이 구할 수 있고, 인덱스로 접근 가능

// slice(n,m) 인덱스 n부터 m-1 까지
let list = [
    '01. 들어가며',
    '02. js의 역사',
    '03. 자료형',
    '04. 함수',
    '05. 배열',
];

// 숫자제거하고 이름만
for (let item of list) {
    console.log(item.slice(4));
}

//indexOf, 넣은 문자열이 있는지 확인 없으면 -1을 반환
function hasCola(str) {
    if (str.indexOf('콜라') > -1) {
        // str.includes('콜라') => true or false로 반환
        console.log('금칙어가 있습니다.');
    } else {
        console.log('통과');
    }
}
hasCola('사이다가 짱이다.');
hasCola('펩시가 짱이야.');
hasCola('콜라가 짱이야.');

// 대문자, 소문자

let desc = 'hi guys. nice to meet you.';
console.log(desc.toUpperCase()); // 대문자로
// toLowerCase() -> 소문자로

// 앞 뒤 공백 제거
desc = ' coding     ';
console.log(desc.trim());
