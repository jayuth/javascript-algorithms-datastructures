// Given two positive integers, find out if the two numbers have the same frequency of digits
function sameFrequency(num1, num2){
    let arr1 = num1.toString();
    let arr2 = num2.toString();
    let counter1 = {};
    let counter2 = {};

    if (arr1.length !== arr2.length) return false;

    for (let i = 0; i < arr1.length; i++){
        counter1[arr1[i]] > 0 ? counter1[arr1[i]] += 1 : counter1[arr1[i]] = 1; 
    }

    for (let i = 0; i < arr2.length; i++){
        counter2[arr2[i]] > 0 ? counter2[arr2[i]] += 1 : counter2[arr2[i]] = 1; 
    }

    for (let key in counter1){
        console.log(key);
        if (!(key in counter2)) return false;

        if (counter2[key] !== counter1[key]) return false;
    }

    return true;
}