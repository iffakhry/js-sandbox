let count = 0;
let mem = [];
let fibTopDown = function (n) {
    count++;
    //jika sudah pernah dihitung sebelumnya, maka ambil dari kamus
    if (mem[n]) return mem[n];

    // jika belum pernah dihitung, maka hitung, dan masukkan ke kamus dan return
    if (n<=1) mem[n] = n;
    else {
        mem[n] = fibTopDown(n-1) + fibTopDown(n-2);
    }
    return mem[n];
}

console.log(fibTopDown(50)); //12586269025
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