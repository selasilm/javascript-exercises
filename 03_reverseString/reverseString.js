const reverseString = function(word) {
    const array = word.split("");
    let rev = "";
    let len = array.length-1
    for(let i=0; i<=len;i++){
        rev += array[len-i];
    }
    return rev;
};

// Do not edit below this line
module.exports = reverseString;
