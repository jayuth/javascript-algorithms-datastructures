function minSubArrayLen(arr, num){
    let sum = 0;
    let total = 0;
    let sum2 = 0
    let len = 0;
    let i = arr.length - 1;

    while(len <= arr.length){
        if(sum >= num){
            console.log(sum);
            return len;
        }
        else{
            sum = sum - arr[i] + (arr[i + len]);
            i++;
        }

        console.log(sum);

        if(i > arr.length - len - 1){
            console.log("*********************");
            len++;
            i = 0;
            total = total + arr[len - 1];
            sum = total; 
            console.log(sum);
        }
    }




    return 0;
}