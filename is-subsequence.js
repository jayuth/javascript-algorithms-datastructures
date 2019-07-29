function isSubsequence(s1, s2){
    let firstLeft = 0;
    let secondLeft = 0;

    while(secondLeft < s2.length){
        if(s1[firstLeft] === s2[secondLeft]){
            firstLeft++;
        }

        if(firstLeft === s1.length){
            return true;
        }
        
        secondLeft++;
    }
    return false;;
}