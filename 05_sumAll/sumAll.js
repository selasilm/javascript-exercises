const sumAll = function(start,end) {
    let sum = 0;
    if (start <0||end<0){
        return 'ERROR';
    }
    if (!Number.isInteger(start)||!Number.isInteger(end)){
        return 'ERROR';
    }
    if(Number.isInteger(start) && Number.isInteger(end)){
        for (let i=Math.min(start,end);i<=Math.max(start,end);i++){
            sum+=i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
