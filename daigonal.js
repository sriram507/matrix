// 2) WAP to print the sum of diagonal elements in the matrix

// output: 2+4+1+4+4 (sum)

let rows = +prompt("Enter rows: ");
let cols = +prompt("Enter cols: ");
let M1 = [];
let sum = 0;

// Input matrix elements
for (let i = 1; i <= rows; i++) {
    let x = [];
    for (let j = 1; j <= cols; j++) {
        let ele = +prompt(`Enter element at position [${i},${j}]: `);
        x.push(ele);
    }
    M1.push(x);
}

// Calculate the sum of diagonal elements
for (let i = 0; i < rows; i++) {
    // Add the primary diagonal element (top-left to bottom-right)
    sum += M1[i][i];

    // Add the secondary diagonal element (top-right to bottom-left), if it's not the same as the primary
    if (i !== cols - 1 - i) {
        sum += M1[i][cols - 1 - i];
    }
}

console.log("Sum of diagonal elements:", sum);
