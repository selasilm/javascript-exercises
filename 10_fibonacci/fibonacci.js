const fibonacci = function(num) {
    num = parseInt(num);
    if (num >= 2){
        return fibonacci(num-1)+fibonacci(num-2);
    }else if (num < 0){
        return "OOPS";
    }else{
        return num;
    }
};

// Do not edit below this line
module.exports = fibonacci;
