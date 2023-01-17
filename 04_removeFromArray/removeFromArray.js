const removeFromArray = function (array, ...args) {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] == args) {
            array.splice(i, 1);
        }
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
