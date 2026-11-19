function dodajDva(broj) {
    return broj + 2;
}

function jednom(callback) {
    let pozvana = false;
    let rezultat;

    return function (broj) {
        if (!pozvana) {
            rezultat = callback(broj);
            pozvana = true;
        }

        return rezultat;
    };
}

// Provjera funkcije dodajDva
console.log(dodajDva(1));  // 3
console.log(dodajDva(2));  // 4
console.log(dodajDva(10)); // 12

// Kreiranje funkcije koja callback poziva samo jednom
const jednomFunkcija = jednom(dodajDva);

console.log(jednomFunkcija(4));    // 6
console.log(jednomFunkcija(10));   // 6
console.log(jednomFunkcija(9001)); // 6