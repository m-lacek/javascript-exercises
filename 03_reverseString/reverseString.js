const reverseString = function (string) {
    chars = string.split('');
    result = ''
    for (let i = string.length - 1; i >= 0; i--) {
        result += string[i];
    }
    return result
};

// Do not edit below this line
module.exports = reverseString;
