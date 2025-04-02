function Calculer() {
    let total = 0;

    // Vérification des boutons radio sélectionnés
    if (document.getElementById("partie1").checked) {
        total += 8.90;
    } else if(document.getElementById("partie2").checked) {
        total += 14;
    }

    // Vérification des cases à cocher
    if (document.getElementById("participation_deco").checked) {
        total += 2;
    }
    if (document.getElementById("repa").checked) {
        total += 10;
    }

    // Affichage du résultat
    document.getElementById("reslutat").value = total.toFixed(2) + " €";
}
