const repeatString = function(add, num) {
    if(num<0) return "ERROR";
    let str="";
    for(let i =0;i<num;i++){
        str += add;
    }
    return str;
};

// Do not edit below this line
module.exports = repeatString;
