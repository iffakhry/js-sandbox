
let frogJumps = (jumps) => {
    let n = jumps.length;
    let dp = [];
    dp[0] = 0;
    dp[1] = Math.abs(jumps[1]- jumps[0]);

    for (let i = 2; i < n; i++){
        let jump1 = Math.abs(jumps[i]-jumps[i-1]) + dp[i-1];
        let jump2 = Math.abs(jumps[i]-jumps[i-2]) + dp[i-2];
        dp[i] = Math.min(jump1, jump2);
       
    }

    return dp[n-1]
}

console.log(frogJumps([10, 30, 40, 20])); // 30
console.log(frogJumps([30, 10, 60, 10, 60, 50])); // 40