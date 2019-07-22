/*
logic: 
left
[1, 2, 3, 4, 5, 6, 1, 2]
    right  
*/

function areThereDuplicates(...arr){
    let left = 0; // index 0
    let right = 1; // index 1
    let bool = false;

    // keep looping until left index reaches the index before the last index
    while(left < arr.length - 2){
        if(right === arr.length){
            left++;
            right = left + 1;
        }
        // check if left index is equal to right index
        if(arr[left] === arr[right]){
            bool = true;
            break;
        }
        // if not, move right index one more
        else right++;
    }
    return bool;
}