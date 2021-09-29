/*
Bottom Up - Tabulation
fibo(0) =0
fibo(1) =1
fibo(2) = 1
fibo(3)= 2
.....
fibo(15) = ...
*/

let count=0;
// DP Bottom Up approach (Optimized runtime)
let fibBottomUp = (n) => {
    let mem = [];
    for (let i=0; i <=n; i++) {
        count++;
        if (i<=1){
            mem[i]=i;
        }
        else {
            mem[i] = mem[i-1] + mem[i-2];
        }
    }
    return mem[n];
}

// console.log(fibBottomUp(10)); //55
console.log(fibBottomUp(50)); // 12586269025
console.log(count);