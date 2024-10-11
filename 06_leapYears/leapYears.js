const leapYears = function(year) {
    const isDivisibleByFour = year % 4 === 0;
    const isCentury = year % 100 === 0;
    const isFourCentury = year % 400 === 0;
    if (isDivisibleByFour && (!isCentury || isFourCentury)){
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
