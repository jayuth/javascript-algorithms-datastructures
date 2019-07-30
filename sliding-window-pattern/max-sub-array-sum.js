function maxSubArraySum(arr, length){
    if(length > arr.length) return null;

    let firstSum = 0;

    for(let i = 0; i < length; i++){
        firstSum += arr[i];
    }

    let max = 0;

    for(let i = 0; i < arr.length - length; i++){
        firstSum = firstSum - arr[i] + arr[i + length]; 

        if(firstSum > max){
            max = firstSum;
        }
    }
    return max;    
}