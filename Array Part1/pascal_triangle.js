// Ques- Pascal's Triangle
// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
// Example 1: 
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
//   1
//  1 1
// 1 2 1
//1 3 3 1





// Type-1 nth element on rth row
// This would be n-1Cr-1 (n combinations r) n!/r!(n-r)!
// 
function nCr(n,r){
    res=1;
    for(let i=0; i < r; i++){
        res = res * (n-i)/(i+1);
    }
    return res;
}

console.log(nCr(4,2)) // This will br the element at 3rd position of 5th row


// Type2 -> nth row of the pascal triangle

// Approach1- O(n) + O(r)
function nthRowPascal(n){
    let res = [1];
    for(let i=1; i < n-1; i++){
        res.push(nCr(n-1, i));
    }
    res.push(1)
    return res;
}
console.log(nthRowPascal(6))

//Approach2 - Optimised O(n)
function nthRowPascalOptimised(n){
    let res = [1];
    for(let i=1; i < n-1; i++){
       res.push(res[i-1] * (n-i)/i)
    }
    res.push(1)
    return res;
}
console.log(nthRowPascalOptimised(6))


// Type-3 -> Generate the Pascal tree 
// O(n*n)
function pascalTree(n){
    res = [];
    for(let row=0; row < n ; row++){
        if (row==0){
            res.push([1]);
            continue;
        }
        let temp = [1]
        for(let col=1; col < row; col++){
            temp.push(temp[col-1] * (row-col+1)/col)
        }
        temp.push(1)
        res.push(temp);
    }
    return res;
}

console.log(pascalTree(5))

