// 배열 method

// make a string out of an array
// make an array out of a string
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(' ');
    console.log(result);
    const result2 = result.split(' ');
    console.log(result2);
}

// reverse
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
    console.log(array); // 배열 자체도 변했다.
}

// make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    // const result = array.splice(0, 2);
    // console.log(result); // 삭제한 요소를 반환한다.
    // console.log(array); // 원 배열에는 삭제한 요소를 제외하고 남게 된다.
    const result2 = array.slice(2, 5); // 특정부분만 리턴해온다.
    console.log(result2);
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 85),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// find a student with the score 90
{
    const result = students.find((el) => el.score === 90);
    console.log(result);
}

// make an array of enrrolled students
{
    const result = students.filter((el) => el.enrolled === true);
    console.log(result);
}

// make an array containing only the students' scores
{
    const result = [];
    students.forEach((el) => {
        result.push(el.score);
    });
    console.log(result);

    const result2 = students.map((el) => el.score);
    console.log(result2);
}

// check if there is a student with the score lower than 50
{
    const result = students.some((el) => el.score < 50);
    console.log(result);
    const result2 = !students.every((el) => el.score >= 50);
    console.log(result2);
}

// compute stdents' avrage score
{
    const average =
        students.reduce((acc, cur) => acc + cur.score, 0) / students.length;

    console.log(average);
}

//make a string a containing all the scores
{
    const result = students.map((el) => el.score).join(', ');
    console.log(result);
}

// sorted in ascending order
{
    const result = students
        .map((el) => el.score)
        .sort((a, b) => a - b)
        .join(', ');
    console.log(result);
}
