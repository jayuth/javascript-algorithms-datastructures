function areThereDuplicates2(...arr){
    let left = 0;
    let right = 1;

    while(right < arr.length){
        if(arr[left] === arr[right]){
            return true;
        }
        left++;
        right++;
    }
    return false;
}