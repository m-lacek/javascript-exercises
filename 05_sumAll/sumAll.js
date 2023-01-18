const sumAll = function (num1, num2) {
    if (num1 < 0 || num2 < 0) {
        return "ERROR"
    }
    if (Number.isInteger(num1) == false || Number.isInteger(num2) == false) {
        return "ERROR"
    }
    let larger = num1;
    let smaller = num2;
    let sum = 0;
    if (num2 > num1) {
        larger = num2
        smaller = num1
    }
    for (i = smaller; i <= larger; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
