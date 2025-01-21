const removeFromArray = function(array,...args) {
    let len = array.length;
    let argLen = args.length;
    let newArray=[];
    for(let i=0; i<len;i++){
        for (let j=0;j<argLen;j++){
            if (array[i]===args[j]){
                delete array[i];
            }
        }
    }
    array = array.filter(item=>item !==undefined);
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
