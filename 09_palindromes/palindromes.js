const palindromes = function (str) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const cleanString = str
    .toLowerCase()
    .split('')
    .filter((characters) => alphanumerical.includes(characters))
    .join('');

    const reverseString = cleanString.split('').reverse().join('');
    
    return cleanString == reverseString;
};

// Do not edit below this line
module.exports = palindromes;


//step 1: remove all the space in the string. 
//step 2: check if  string[0] = string[string.length]