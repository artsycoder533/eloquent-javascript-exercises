/*
For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.
*/

function reverseArray(arr) {
    let newArray = [];
    for (num of arr){
        newArray.unshift(num);
    }
    return newArray;
}

function reverseArrayInPlace(arr) {
    let first = "";
    for (let i = 0; i < Math.floor(arr.length) / 2; i++){
        // keep track of first element of array
        first = arr[i];
        //set the first element of the array to the last, move inward
        arr[i] = arr[arr.length - 1 - i];
        //set the last element of the array to what was the first
        arr[arr.length - 1 - i] = first;
    }
    return arr;
}

console.log(reverseArray(["A", "B", "C"]));
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);