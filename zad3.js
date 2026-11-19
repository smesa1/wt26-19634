function napraviResurs(pocetnaKolicina) {
    if (!Number.isFinite(pocetnaKolicina) || pocetnaKolicina < 0) {
        throw new Error("Početna količina mora biti nenegativan broj.");
    }

    let stanje = pocetnaKolicina;

    return {
        potrosi: function (kolicina) {
            if (
                !Number.isFinite(kolicina) ||
                kolicina < 0 ||
                kolicina > stanje
            ) {
                return false;
            }

            stanje = stanje - kolicina;
            return true;
        },

        preostalo: function () {
            return stanje;
        }
    };
}

// Dvije nezavisne instance
const papir1 = napraviResurs(100);
const papir2 = napraviResurs(50);

console.log("Početno stanje prvog:", papir1.preostalo()); // 100
console.log("Početno stanje drugog:", papir2.preostalo()); // 50

// Uspješna potrošnja
console.log(papir1.potrosi(30)); // true
console.log(papir1.preostalo()); // 70

// Druga instanca se nije promijenila
console.log(papir2.preostalo()); // 50

// Odbijeno: više od raspoloživog
console.log(papir1.potrosi(80)); // false
console.log(papir1.preostalo()); // 70

// Odbijeno: negativna količina
console.log(papir1.potrosi(-10)); // false
console.log(papir1.preostalo());  // 70

// Potrošnja iz druge instance
console.log(papir2.potrosi(20)); // true
console.log(papir2.preostalo()); // 30

// Prva instanca se nije promijenila
console.log(papir1.preostalo()); // 70

// Privatno stanje nije dostupno kao svojstvo objekta
console.log(papir1.stanje); // undefined