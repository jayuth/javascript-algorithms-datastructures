function binarySearch(arr, num){
    let left = 0;
    let right = arr.length - 1; 
    
    while(left <= right){
        // find a middle position in an array
        // e.g. arr = [1, 2, 3, 4, 5];
        // (0 + 4) / 2 = 2. So, arr[2] = 3
        let middle = Math.floor((left + right) / 2);

        console.log(arr[middle]);

        // return the index of found number 
        if(arr[middle] === num) return middle;
        
        // if arr[middle] is too low, move a left pointer to be after the current middle value 
        if(num > arr[middle]) left = middle + 1; 
        else right = middle - 1;
    }

    return -1;
}
