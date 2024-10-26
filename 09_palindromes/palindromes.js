const input = document.getElementById("input")

function reverseString(str){
    return str.split("").reverse().join("")
}

function check(){
    const value = input.value
    const reverse = reverseString(value)
    if (value === reverse) {
        alert("Palindrome")
    } else {
        alert("Not Palindrome")
    }
    input.value = ""
}

// // Do not edit below this line
// module.exports = palindromes;