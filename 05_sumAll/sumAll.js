const sumAll = function (num1, num2) {
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
