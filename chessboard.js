/*
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
*/

let size = +prompt("enter size", 8);
let count = 1;
let chessboard = "";

for (let i = 1; i <= size; i++){
    for (let j = 1; j <= size; j++){
        // if i is odd and count is even
        if (i % 2 !== 0 && count % 2 === 0) {
            chessboard += "#";
            count++;
        }
        //if i is odd and count is odd
        else if (i % 2 !== 0 && count % 2 !== 0) {
            chessboard += " ";
            count++;
        }
        //if i is even and count is odd
        else if (i % 2 === 0 && count % 2 !== 0) {
            chessboard += "#";
			count++;
        }
        else if (i % 2 === 0 && count % 2 === 0) {
            chessboard += " ";
			count++;
        }
    }
    console.log(chessboard.substr(chessboard.length-size, chessboard.length), "\n");
}


