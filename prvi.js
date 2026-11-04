const p1 = 10;
const p2 = 30;

function procijeniZaVoditeljaPoslovnice(vrijednost, p1, p2) {
     if (vrijednost>p1 && vrijednost <= p2) {
        return "Povećano čekanje";
    } else if(vrijednost > p2) {
        return "Potrebna intervencija";
    }
    return("Prihvatljivo");
}

const unos = prompt("Unesite vrijeme čekanja u minutama:");

if (unos === null) {
    alert("Unos je otkazan.");
} else if (unos.trim() === "") {
    alert("Morate unijeti vrijednost.");
} else {
    const vrijeme = Number(unos);

    if (!Number.isFinite(vrijeme)) {
        alert("Unesite ispravan, konačan broj.");
    } else if (vrijeme < 0) {
        alert("Vrijeme čekanja ne može biti negativno.");
    } else {
        const kategorija = procijeniZaVoditeljaPoslovnice(
            vrijeme, p1, p2
        );

        alert("Procjena: " + kategorija);
    }
}