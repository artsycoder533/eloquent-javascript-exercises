/*
Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
*/

function range(start, end) {
    let result = [];
    for (let i = start; i <= end; i++){
        result.push(i);
    }
    return result;
}
console.log(range(1, 10));

/*
Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.
*/

// function sum(arr) {
//     let result = 0;
//     for (let i = 0; i < arr.length; i++){
//         result += arr[i];
//     }
//     return result;
// }

//rewrite using for of
function sum(arr) {
    let result = 0;
    for (num of arr) {
        result += num;
    }
    return result;
}
console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));


/*As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array.If no step is given, the elements go up by increments of one, corresponding to the old behavior.The function call range(1, 10, 2) should return [1, 3, 5, 7, 9].Make sure it also works with negative step values so that range(5, 2, -1) produces[5, 4, 3, 2].
*/

function range(start, end, step = 1) {
    let result = [];
    if (step < 0) {
        for (let i = start; i >= end; i--) {
            result.push(i);
        }
    }
    else {
        for (let i = start; i <= end; i++) {
            result.push(i);
        }
    }
	return result;
}
console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));