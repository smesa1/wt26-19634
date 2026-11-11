const forma = document.getElementById("forma");
const naslov = document.getElementById("naslov");
const tekst = document.getElementById("tekst");
const kategorija = document.getElementById("kategorija");
const greska = document.getElementById("greska");

const pregled = document.getElementById("pregled");
const pregledNaslov = document.getElementById("pregledNaslov");
const pregledTekst = document.getElementById("pregledTekst");
const pregledKategorija = document.getElementById("pregledKategorija");

forma.addEventListener("submit", function (event) {
    // Sprečavamo slanje forme i osvježavanje stranice.
    event.preventDefault();

    const uneseniNaslov = naslov.value.trim();
    const uneseniTekst = tekst.value.trim();
    const odabranaKategorija = kategorija.value;

    // Prvo provjeravamo sve podatke, bez mijenjanja pregleda.
    if (uneseniNaslov === "" || uneseniTekst === "") {
        greska.textContent = "Popunite naslov i tekst obavijesti.";
        return;
    }

    if (
        odabranaKategorija !== "informacija" &&
        odabranaKategorija !== "upozorenje"
    ) {
        greska.textContent = "Odaberite ispravnu kategoriju.";
        return;
    }

    // Tek nakon uspješne provjere ažuriramo postojeće elemente.
    greska.textContent = "";
    pregledNaslov.textContent = uneseniNaslov;
    pregledTekst.textContent = uneseniTekst;

    pregledKategorija.textContent =
        odabranaKategorija === "informacija"
            ? "Informacija"
            : "Upozorenje";

    // Uklanjamo prethodni stil i postavljamo novi.
    pregled.classList.remove("informacija", "upozorenje");
    pregled.classList.add(odabranaKategorija);
});

forma.addEventListener("reset", function () {
    // Polja se automatski vraćaju na početne vrijednosti.
    // Posebno vraćamo poruku greške i pregled.
    greska.textContent = "";

    pregledNaslov.textContent = "Naslov obavijesti";
    pregledTekst.textContent =
        "Ovdje će biti prikazan tekst obavijesti.";
    pregledKategorija.textContent = "Kategorija nije odabrana.";

    pregled.classList.remove("informacija", "upozorenje");
});