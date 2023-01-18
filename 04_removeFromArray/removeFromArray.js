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

// Can use Array.from(arguments) to create an array with the arguments. then just start it at 1?
// Do not edit below this line
module.exports = removeFromArray;
