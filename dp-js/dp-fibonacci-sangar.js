/*
pemanfaatan DP dengan lebih optimal,(jika dibanding dengan pendekatan TopDown atau BottomUp)
karena kita tidak menggunakan variabel map untuk penampung data yang telah kita hitung.
kita hanya memanfaatkan variabel biasa untuk menyimpan data perhitungan dua angka sebelumnya.

*/
let fiboDPSangar = (n) => {
    if (n <= 1) {
        return n;
    }

    let fiboIMinSatu = 1, fiboIMinDua=0, fiboI=-1;
    for (let i=2; i <=n; i++) {
        fiboI =  fiboIMinSatu + fiboIMinDua;
        fiboIMinDua = fiboIMinSatu;
        fiboIMinSatu = fiboI
    }
    return fiboI;
}

console.log(fiboDPSangar(10));