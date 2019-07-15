/*
// o(n) solution
function same(arr1, arr2){
    if (arr1.length !== arr2.length){
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let val of arr1){
        // (frequencyCounter1[val] || 0) means checking if the there is a key
        // if there isn't, add key(n) and set key(n) value of zero. Otherwise, value of key(n) +1 
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);

    for (let key in frequencyCounter1){
        // check if a key exists in frequencyCounter2
        if(!(key ** 2 in frequencyCounter2)){
            return false;
        }
         // check if a value of key(n) in frequencyCounter1 is equal to a value of jey()n in frequencyCounter2
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false;
        }
        return true;
    }
}
*/

/*
// naive solution - time complexity = o(n^2) bc of using for and indexOf 
function same(arr1, arr2){
    if (arr1.length !== arr2.length){
        return false;
    }
    for (let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if (correctIndex === -1){
            return false;
        }
        console.log(arr2);
        // remove correctIndex element from arr2; 
        arr2.splice(correctIndex, 1); // splice(start, deleteCount)
    }
    return true;
}

// using a separate loop (n+n+...+n) is better than a nested loop (n*n*...*n)
*/

// my solution
function same(arr1, arr2){
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    if (arr1.length !== arr2.length){
        return false;
    }

    for (let i = 0; i < arr1.length; i++){
        if (frequencyCounter1[arr1[i] ** 2] > 0){
            frequencyCounter1[arr1[i] ** 2]++; //result[arr1[i]] ** 2++;
        }
        else{
            frequencyCounter1[arr1[i] ** 2 ] = 1;
        }

        if (frequencyCounter2[arr2[i]] > 0){
            frequencyCounter2[arr2[i]]++;
        }
        else{
            frequencyCounter2[arr2[i]] = 1;
        }
    }

    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    
    // object with number-type key is always sorted by a compiler
    for (let i = 0; i < Object.keys(frequencyCounter1).length; i++){
        if (frequencyCounter1[Object.keys(frequencyCounter1)[i]] !== frequencyCounter2[Object.keys(frequencyCounter2)[i]]){
            return false;
        }
    }
    return true;
    }