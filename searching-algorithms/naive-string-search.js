function stringSearch(str, substr){
    let count = 0;

    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < substr.length; j++){
            if(str[i] === substr[j]) i++;
            else break;

            if(j === substr.length - 1) 
            {
                count++;
                i--;
            }
        }
    }
    return count;
}
