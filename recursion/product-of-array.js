function productOfArray(arr){
    let sum = 1;

    if(arr.length === 0) return 0; 

    function helper(helperInput){
        if(helperInput.length === 0) return;

        sum *= helperInput[0];
        console.log(sum);
        helper(helperInput.slice(1));
    }

    helper(arr);

    return sum;
}