// 1. Početna verzija – izlaže originalni objekat
function napraviProfilNezasticen() {
    let profil = { naziv: "Početni" };

    return {
        pregled: function () {
            return profil;
        },

        postaviNaziv: function (n) {
            profil.naziv = n;
        }
    };
}

const prviProfil = napraviProfilNezasticen();

console.log("Prije izmjene:", prviProfil.pregled().naziv);
// Početni

const dobijeniProfil = prviProfil.pregled();
dobijeniProfil.naziv = "Izmijenjen izvana";

console.log("Nakon vanjske izmjene:", prviProfil.pregled().naziv);
// Izmijenjen izvana


// 2. Ispravljena verzija – vraća novi objekat
// 3. Dodano primitivno svojstvo: brojGodina
function napraviProfil() {
    let profil = {
        naziv: "Početni",
        brojGodina: 20
    };

    return {
        pregled: function () {
            return {
                naziv: profil.naziv,
                brojGodina: profil.brojGodina
            };
        },

        postaviNaziv: function (n) {
            profil.naziv = n;
        }
    };
}

const drugiProfil = napraviProfil();

const kopijaProfila = drugiProfil.pregled();

kopijaProfila.naziv = "Pokušaj vanjske izmjene";
kopijaProfila.brojGodina = 99;

console.log("Izmijenjena kopija:", kopijaProfila);
// { naziv: "Pokušaj vanjske izmjene", brojGodina: 99 }

console.log("Originalni naziv:", drugiProfil.pregled().naziv);
// Početni

console.log("Originalne godine:", drugiProfil.pregled().brojGodina);
// 20

drugiProfil.postaviNaziv("Novi naziv");

console.log("Nakon poziva metode:", drugiProfil.pregled().naziv);