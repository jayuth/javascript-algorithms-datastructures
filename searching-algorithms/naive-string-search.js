function stringSearch(str, substr){
    let count = 0;

    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < substr.length; j++){
            // i + j to allow us to move on to the next index if there is a match
            if(str[i + j] !== substr[j]) break;
            if(j === substr.length - 1) count++;
        }
    }
    return count;
}

