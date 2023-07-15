// function solution(number) {
//     // when number is negative return zero
//     if (number < 0) { return 0 }

//     //let dividedNumbers = new Set();
//     let result = 0;

//     for (let i = 1; i < number; i++) {
//         if (i % 3 == 0 || i % 5 == 0) {
//             result += i;
//         }
//     }

//     let dividedArray = Array.from(dividedNumbers);
//     return dividedArray.reduce((previous, current) => previous + current, 0);
//     //return result;

// }

// function solution(str) {
//     if (str.length % 2 !== 0) { str = str + "_" };
//     let arr = [];
//     for (let i = 0; i < str.length; i += 2) {
//         arr.push(str.substring(i, i + 2));

//     }
//     return arr;
// }

// console.log(solution("abcde"));

function sortedCommByDigs(arr1, arr2) {
    var setB = new Set(arr2);
    let commonNumbers = [...new Set(arr1)].filter(x => setB.has(x));
    let mapOfNums = new Map();

    commonNumbers.forEach(x => {
        mapOfNums.set(x, sumOfEachNumber(x) + powerOfEachNumber(sumOfEachNumber(x)));
    });

    return Array.from(new Map([...mapOfNums].sort((a, b) => compareMap(a, b))).keys());

    function sumOfEachNumber(num) {
        return Array.from(num.toString()).reduce((p, c) => parseInt(p) + parseInt(c), 0);
    }

    function powerOfEachNumber(num) {
        return Array.from(num.toString()).reduce((p, c) => parseInt(p) + Math.pow(parseInt(c), 2), 0);
    }

    function compareMap(a, b) {
        return a[1] === b[1] ? a[0] - b[0] : b[1] - a[1];
    }
}

console.log(sortedCommByDigs([5, 56, 28, 35, 12, 27, 64, 19, 99, 18, 31, 14, 6], [28, 17, 19, 31, 63, 64, 5, 18, 17, 95, 56, 37, 5, 28, 16]))
