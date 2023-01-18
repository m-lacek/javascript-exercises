const removeFromArray = function (array, ...args) {
    let inputs = Array.from(arguments)
    for (let i = 1; i < inputs.length; i++) {
        let index = array.indexOf(inputs[i]);
        if (index > -1) {
            array.splice(index, 1);
        }
    }
    return array
}

// Do not edit below this line
module.exports = removeFromArray;
