function findLongestSubString(str){
    let obj = {};
    let counter = 0;
    let start = 0;
    let longest = 0;

    while(start < str.length){
        if(!(obj[str[start]])){
            obj[str[start]] = 1;
            console.log(str[start]);
            // move to the nexr index when not duplicated
            start++;
        }
        else{
            obj = {};
            // move to the next index (start from index 1) when duplicated
            counter++;
            start = counter;
        }

        if(Object.keys(obj).length > longest){
            longest = Object.keys(obj).length ;
        }
    }
    console.log(obj);
    return longest;
}