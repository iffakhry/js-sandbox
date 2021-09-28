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
//pakai yang ini saja
// DP Bottom Up approach (Optimized runtime)
let fibBottomUp = (n) => {
    let mem = [];
    for (let i=0; i <=n; i++) {
        count++;
        // if (i == 0) mem[i] = 0;
        // else if (i <=2) mem[i] = 1;
        if (i<=1){
            mem[i]=i;
        }
        else {
            mem[i] = mem[i-1] + mem[i-2];
        }
    }
    return mem[n];
}

//tidak dipakai
// DP Bottom Up approach (Optimized space)
// let fibBottomUp2 = (n) => {
//     let first, second = 0;
//     for (let i=1; i <=n; i++) {
//         if (i == 1) second = 1
//         else {
//             let temp = second;
//             second = first + second;
//             first = temp;    
//         }
//     }
//     return second;
// }

// console.log(fibBottomUp(10)); //55
console.log(fibBottomUp(50)); // 12586269025
console.log(count);
// console.log(fibBottomUp2(10));