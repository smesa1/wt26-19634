// Pauza slijedi nakon svakih k ponavljanja,
// osim nakon posljednjeg ponavljanja.

function generisiPlanVjezbanja(n, k) {
    let plan = "";

    for (let i = 1; i <= n; i++) {
        plan += "Ponavljanje " + i + "\n";

        if (i % k === 0 && i < n) {
            plan += "Pauza\n";
        }
    }

    plan += "Vježbanje je završeno!";
    return plan;
}

const unosN = prompt("Unesite ukupan broj ponavljanja (n):");
const unosK = prompt("Unesite broj ponavljanja između pauza (k):");

if (unosN === null || unosK === null) {
    alert("Unos je otkazan.");
} else if (unosN.trim() === "" || unosK.trim() === "") {
    alert("Oba podatka moraju biti unesena.");
} else {
    const n = Number(unosN);
    const k = Number(unosK);

    if (!Number.isSafeInteger(n) || n <= 0 || !Number.isSafeInteger(k) || k <= 0) {
        alert("n i k moraju biti pozitivni cijeli brojevi u sigurnom rasponu.");
    } else {
        const plan = generisiPlanVjezbanja(n, k);
        console.log(plan);
        alert(plan);
    }
}