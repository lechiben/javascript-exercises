const removeFromArray = function(array, ...itemToRemoved) {
    return array.filter(item => !itemToRemoved.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
