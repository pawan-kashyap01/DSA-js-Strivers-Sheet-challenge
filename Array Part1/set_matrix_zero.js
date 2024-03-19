// Ques- Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
// Link- https://leetcode.com/problems/set-matrix-zeroes/description/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let temp = []
    for(let row = 0; row< matrix.length; row++){
        let flag = false;
        for(let col = 0; col< matrix[row].length; col++){
            if(matrix[row][col] === 0){
                flag =true;
                temp.push(col);
            }
        }
        if(flag){
            matrix[row].fill(0)
        }
    }


    for(let row = 0; row< matrix.length; row++){
        for(let col = 0; col< matrix[row].length; col++){
            if(temp.includes(col)){
                matrix[row][col] = 0
            }
        }
    }
};

let matrix = [[1,1,1],[1,0,1],[1,1,1]]
setZeroes(matrix)
console.log(matrix);