/*
In this example, the  helper() is a recusive function, not collectOddValues().
If collectOddValues() was a recursive function, an array would be reset everytime it calls itself.
This example is useful for dealing with data structures such as array.  
*/

function collectOddValues(arr){
    let result = [];

    function helper(helperInput){
        // base case
        if(helperInput.length === 0){
            return;
        }

        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0]);
        }
        // shrink the array by 1 everytime
        helper(helperInput.slice(1));
    }
    helper(arr);
    return result;
}