// Practice Work:

// 1)WAP to print  the sum of outer layers in the matrix

// 2 3 4
// 3 4 2
// 3 4 1


// 2+3+4+3+3+4+1+2 = ? (sum)

rows = +prompt("Enter rows: ")
cols = +prompt("Enter cols: ")
M1=[],sum=0
for(i=1;i<=rows;i++){
x=[]
for(j=1;j<=cols;j++){
console.log("Enter "+i+""+j+" element: ")
ele = +prompt()
x.push(ele)
}
M1.push(x)
}
sum=0
for(i=0;i<M1.length;i++){ //M1[i]=[5,4,1]
for(j=0;j<M1[i].length;j++){
if(i==0 || i==rows-1 || j==0 || j==cols-1){
sum=sum+M1[i][j]
}
}
}
console.log(sum)
