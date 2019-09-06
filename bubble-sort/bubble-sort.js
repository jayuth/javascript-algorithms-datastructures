function bubbleSort(arr){
    let noSwaps;
    // i will be a counter for j starting from arr.length and decrease by 1 (i - 1) as the inner loop goes through
    for(let i = arr.length; i > 0 ; i--){
        // reset noSwaps to true for every new iteration
        noSwaps = true;
        for(let j = 0; j < i - 1; j++){
            console.log(arr, arr[j], arr[j+1]);
            if(arr[j + 1] < arr[j]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwaps = false;
            }
        }
        if(noSwaps) break;
        console.log(arr);
        console.log("PASS");
    }
    return arr;
}

   