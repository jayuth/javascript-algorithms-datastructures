function minSubArrayLen(arr, num){
    let sum = 0;
    let total = 0;
    let len = 0;
    let i = arr.length;

    while(len <= arr.length){
        if(i > arr.length - len - 1){
            len++;
            i = 0;
            total = total + arr[len - 1];
            sum = total; 
        }

        if(sum >= num) return len;
        
        else{
            sum = sum - arr[i] + (arr[i + len]);
            if(sum >= num) return len;
            i++;
        }
    }
    return 0;
}