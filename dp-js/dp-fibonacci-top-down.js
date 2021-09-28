let numCalculations = 0;
// topdown - memoization
function dynamicFibonacci() {
    let dict = {};
    
    return function fib(n) {
        numCalculations++;
        // check jika sudah pernah dihitung
        if (n in dict) {
            return dict[n];
        } else if (n < 2) { 
            return n;
        } else {
            // simpan hasil di cache
            dict[n] = fib(n - 1) + fib(n - 2);
            return dict[n];
        }
    }
}

const callFib = dynamicFibonacci();
console.log(callFib(10)); // 55
console.log(numCalculations);

//pakai yang ini saja

let count = 0;
let mem = [];
let fibRecursiveMem = function (n) {
    count++;
    //jika sudah pernah dihitung sebelumnya, maka ambil dari kamus
    if (mem[n]) return mem[n];

    // jika belum pernah dihitung, maka hitung, dan masukkan ke kamus dan return
    if (n<=1) mem[n] = n;
    else {
        mem[n] = fibRecursiveMem(n-1) + fibRecursiveMem(n-2);
    }
    return mem[n];
}

console.log(fibRecursiveMem(50)); //12586269025
console.log(count);

/*
Top Down - Memoization
fibo(15) = fibo(14) + fibo(13)
fibo(14) = fibo(13) + fibo(12)
.....
fibo(1) = 1
fibo(0) = 0

Top Down Vs Bottom Up
- tidak bisa ditentukan, karena ada kelebihan dan kekurangan masing"
- bottom up = punya kecenderungan menyelesaikan lebih dari seharusnya
			misal fibonacci, maka punya kecenderungan kita telah menghitung nilai" sebelumnya yang lebih kecil

			- namun dibeberapa kasus, ada kondisi dimana sebenarnya kita tidak perlu menghitung seluruh data jika memang tidak dibutuhkan.

- Top down = lebih ke rekursif, ada kemungkinan perhitungannya lebih berat

*/