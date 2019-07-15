// O(N) solution
function validAnagram(arr1, arr2){
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    if (arr1.length !== arr2.length){
        return false;
    }

    for (let i = 0; i < arr1.length; i++){
        let letter1 = arr1[i];
        let letter2 = arr2[i];
        // check if a value of a key already exists in the object
        frequencyCounter1[letter1] ? frequencyCounter1[letter1] += 1 : frequencyCounter1[letter1] = 1;
        frequencyCounter2[letter2] ? frequencyCounter2[letter2] += 1 : frequencyCounter2[letter2] = 1;
    }

    console.log(frequencyCounter1);
    console.log(frequencyCounter2);

    // check key length in both objects
    if(Object.keys(frequencyCounter1).length !== Object.keys(frequencyCounter2).length){
        return false;
    }
    
   for (let val in frequencyCounter1){
        if (!(val in frequencyCounter2)){
            return false;
        }

        console.log(val);
        console.log(frequencyCounter2[val]);

        // frequencyCounter2[val] means look up the value of a key named 'val'.
        if(frequencyCounter2[val] !== frequencyCounter1[val]){
            return false;
        }
   }
    return true;
}

// another O(N) solution
function validAnagram(arr1, arr2){
    if (arr1.length !== arr2.length){
        return false;
    }

    let lookup = {};

    for (let i = 0; i < arr1.length; i++){
        let letter = arr1[i];
        // if letter exists, increment by 1. Otherwise, set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for (let i = 0; i < arr2.length; i++){
        let letter = arr2[i];
        // if can't find letter or letter is zero then it's not an anagram
        if (!lookup[letter]){
            return false;
        }
        else{
            lookup[letter] -= 1;
        }
    }
    return true;
}