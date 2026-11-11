const forma = document.getElementById("forma");
const naziv = document.getElementById("naziv");
const iznos = document.getElementById("iznos");
const greska = document.getElementById("greska");

const stavke = document.getElementById("stavke");
const zbir = document.getElementById("zbir");
const brojStavki = document.getElementById("brojStavki");

function izracunajZbirUFeningima() {
    let ukupno = 0;

    for (const red of stavke.rows) {
        const vrijednost = Number(red.cells[1].textContent);

        ukupno += Math.round(vrijednost * 100);
    }

    return ukupno;
}

function azurirajSazetak() {
    const ukupno = izracunajZbirUFeningima();

    zbir.textContent = (ukupno / 100).toFixed(2);
    brojStavki.textContent = "Broj stavki: " + stavke.rows.length;
}

forma.addEventListener("submit", function (event) {
    event.preventDefault();

    const uneseniNaziv = naziv.value.trim();

    const uneseniIznos = iznos.value.trim().replace(",", ".");

    // Sve provjere obavljamo prije promjene tabele.
    if (uneseniNaziv === "" || uneseniIznos === "") {
        greska.textContent = "Popunite naziv i iznos.";
        return;
    }

    const vrijednost = Number(uneseniIznos);

    if (!Number.isFinite(vrijednost) || vrijednost < 0) {
        greska.textContent =
            "Iznos mora biti konačan nenegativan broj.";
        return;
    }

    // Novčani iznos unosimo kao decimalni broj,
    // s najviše dvije cifre iza decimalnog separatora.
    if (!/^\d+(\.\d{1,2})?$/.test(uneseniIznos)) {
        greska.textContent =
            "Unesite iznos poput 12, 12.50 ili 12,50.";
        return;
    }

    const feningi = Math.round(vrijednost * 100);
    const noviZbir = izracunajZbirUFeningima() + feningi;

    if (
        !Number.isSafeInteger(feningi) ||
        !Number.isSafeInteger(noviZbir)
    ) {
        greska.textContent = "Uneseni iznos je prevelik.";
        return;
    }

    // Dodajemo na kraj tbody dijela, neposredno prije tfoot zbira.
    const noviRed = stavke.insertRow(-1);
    const celijaNaziv = noviRed.insertCell(0);
    const celijaIznos = noviRed.insertCell(1);

    // Korisnički unos prikazujemo isključivo kao tekst.
    celijaNaziv.textContent = uneseniNaziv;
    celijaIznos.textContent = (feningi / 100).toFixed(2);

    greska.textContent = "";
    azurirajSazetak();

    forma.reset();
    naziv.focus();
});

azurirajSazetak();