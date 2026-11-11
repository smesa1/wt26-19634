const lista = document.getElementById("lista");
const sazetak = document.getElementById("sazetak");
const reset = document.getElementById("reset");
const stavke = lista.querySelectorAll("li");

function azurirajSazetak() {
    const ukupno = lista.querySelectorAll("li").length;
    const zavrseno = lista.querySelectorAll("li.zavrseno").length;

    sazetak.textContent = "Završeno: " + zavrseno + " / " + ukupno;
}

function azurirajDugme(stavka) {
    const dugme = stavka.querySelector("button");
    const zavrsena = stavka.classList.contains("zavrseno");

    dugme.textContent = zavrsena ? "Nije zavrseno" : "Zavrseno";

    dugme.setAttribute("aria-pressed", String(zavrsena));
}

for (const stavka of stavke) {
    stavka.addEventListener("click", function () {
        stavka.classList.toggle("zavrseno");
        azurirajDugme(stavka);
        azurirajSazetak();
    });
}

reset.addEventListener("click", function () {
    for (const stavka of stavke) {
        stavka.classList.remove("zavrseno");
        azurirajDugme(stavka);
    }

    azurirajSazetak();
});

azurirajSazetak();