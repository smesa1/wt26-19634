const brojac = (function () {
    let vrijednost = 0;

    return {
        dodaj: function () {
            vrijednost += 1;
            return vrijednost;
        },

        resetuj: function () {
            vrijednost = 0;
            return vrijednost;
        }
    };
})();

// Primjer korištenja
console.log(brojac.dodaj());   // 1
console.log(brojac.dodaj());   // 2
console.log(brojac.dodaj());   // 3

console.log(brojac.resetuj()); // 0

console.log(brojac.dodaj());   // 1
console.log(brojac.dodaj());   // 2