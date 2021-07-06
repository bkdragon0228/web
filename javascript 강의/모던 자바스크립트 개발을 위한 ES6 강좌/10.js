//default parameters

const sum = (value, size = 1) => {
    //입력 안하면 기본값
    return value * size;
};

console.log(sum(3, 10));

//rest prameters

// const checkNum = () => {
//     const argArray = Array.prototype.slice.call(arguments);
//     console.log(toString.call(argArray));
// };

// const result = checkNum();
