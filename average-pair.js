/* 
multiple pointers approach

find possible pair in array:
averagePair([1,2,3], 2.5)
1 + 2 / 2 = false 
1 + 3 / 2 = false
2 + 3 / 2 = true
*/

function averagePair(arr, avg){
    let left = 0;
    let right = 1;
    let bool = false;

    // we minus 2 because the value of left starts from 0 
    // and the the farthest the left index can go is the index before the last index
    while(left < arr.length - 2){
        if(right === arr.length){
            left++;
            // reset the value of right index to be the index next to the left index
            // e.g. left index = 1, so, right index = 1 + 1 = 2
            right = left + 1;
        }

        if(arr[left] + arr[right] / 2 === avg){
            bool = true;
            return bool;
        }
        else right++;
    }
    return bool;
}
