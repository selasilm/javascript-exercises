const palindromes = function (str) {
    let lower = str.toLowerCase();
    let raw = lower.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    let ns = raw.replace(/\s/g,'');
    let rev = ""
    let arr = ns.split('');
    let len = arr.length-1;
    for(let i=0;i<=len;i++){
        rev += arr[len-i];
    }
    if(rev===ns){
        return true;
    }else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
