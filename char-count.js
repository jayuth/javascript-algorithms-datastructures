/*
function charCount(str){
    var result = {};

    for(var i = 0; i < str.length; i++){
        var char = str[i].toLowerCase();
         // if the char is a number/letter AND is a key in object, add one to count
        if(result[char] > 0){
            result[char]++;
        }
        // if the char is a number/letter AND not in object, add it to object and set value to 1
        else{
            result[char] = 1;
        }
    }
    return result;
}
*/

function charCount(str){
    var result = {};

    for(var char of str){
        if(isAlphaNumeric(char)){
            char = char.toLowerCase();
            result[char] = ++result[char] || 1;
        }
    }
    return result;
}

function isAlphaNumeric(char){
    var code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) &&
        !(code > 64 && code < 91) &&
        !(code > 96 && code < 123)) {
            return false;
    }
    return true;
}



