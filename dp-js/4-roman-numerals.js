let number = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
let roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

let romanNumerals = (value) => {
    let result = "";
    for (let i = 0; i < number.length; i++) {
        while (value >= number[i]) {
            result += roman[i]
            value -= number[i]
        }
        
    }
    return result
}

console.log(romanNumerals(6)); //VI
console.log(romanNumerals(9)); //IX
console.log(romanNumerals(23)); //XXIII
console.log(romanNumerals(2021)); // MMXXI
console.log(romanNumerals(1646)); // MDCXLVI