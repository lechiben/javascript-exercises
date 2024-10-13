const fibonacci = function(countArg) {
    // Create a function that returns a specific member of the Fibonacci sequence:
    let count;
    if (typeof countArg !== 'number'){
        countArg = parseInt(countArg);
        count = countArg;
    } else {
        count = countArg;
    }

    if (count < 0) return "OOPS";
    if (count == 0) return 0;
    
    let firstPrev = 1;
    let secondPrev = 0;
    for (let i = 2; i <= count; i++){
        let current = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = current;
    }
    return firstPrev;


};

// Do not edit below this line
module.exports = fibonacci;
