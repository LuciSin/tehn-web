let tabel = document.getElementById("performanta");  
if (!tabel) {
    console.log("Tabelul cu id 'performanta' nu a fost găsit!");
} else {
    let tbody = tabel.getElementsByTagName("tbody")[0];
    if (!tbody) {
        console.log("Corpul tabelului (tbody) nu a fost găsit!");
    } else {
        let randuri = tbody.getElementsByTagName("tr");  // obtinem toate randurile din tabel
        if (randuri.length === 0) {
            console.log("Nu există rânduri în tabel!");
        } else {
            for (let i = 0; i < randuri.length; i++) {
                let celule = randuri[i].getElementsByTagName("td");

                // gen valori aleatoare pentru Viteza Medie (km/h) 8 si 20km/h, cu 2 zecimale
                let td_viteza = celule[2];
                if (parseFloat(td_viteza.innerHTML) === 0) {
                    td_viteza.innerHTML = (Math.random() * (20 - 8) + 8).toFixed(2);  // Viteza aleatoare intre 8 - 20
                }

                // valori aleatore pt distanta intre 5 si 15 km
                let td_distanta = celule[3];
                if (parseFloat(td_distanta.innerHTML) === 0) {
                    td_distanta.innerHTML = Math.round(Math.random() * (15 - 5) + 5);  
                }

                // durata antrenamentului in minute, intre 60 si 30 min
                let td_durata = celule[4];
                if (parseInt(td_durata.innerHTML) === 0) {
                    td_durata.innerHTML = Math.round(Math.random() * (60 - 30) + 30);  // Durata aleatoare
                }
            }
        }
    }
}

let buton = document.getElementById("calculeaza");

buton.onclick = function() {
    // verificam daca tabelul exista, pls work
    let tabel = document.getElementById("performanta");
    if (!tabel) {
        console.log("Tabelul cu id 'performanta' nu a fost găsit!");
        return;
    }

    let tbody = tabel.getElementsByTagName("tbody")[0];
    if (!tbody) {
        console.log("Corpul tabelului (tbody) nu a fost găsit!");
        return;
    }

    let randuri = tbody.getElementsByTagName("tr");
    if (randuri.length === 0) {
        console.log("Nu există rânduri în tabel!");
        return;
    }


    let minim = 9999999;
    let maxim = 0;
    let suma = 0;
    
    // Parcurgem fiecare rand si calc val
    for (let i = 0; i < randuri.length; i++) {
        let celule = randuri[i].getElementsByTagName("td");
        let valoare = parseFloat(celule[2].innerHTML); //
        
        if (!isNaN(valoare)) { 
            if (valoare < minim) minim = valoare;
            if (valoare > maxim) maxim = valoare;
            suma += valoare;
        }
    }

    // media
    let medie = suma / randuri.length;

    // paragraf pt rezultate
    let p = document.createElement("p");

    // debug pt statistici, sterge rand daca unul deja exista in prealabil
    let statisticiDiv = document.getElementById("statistici");
    if (statisticiDiv) {
        statisticiDiv.innerHTML = '';
        p.innerHTML = `Minim: ${minim} | Maxim: ${maxim} | Medie: ${medie.toFixed(2)}`;
        statisticiDiv.appendChild(p);
    } else {
        console.log("Elementul cu id 'statistici' nu a fost gasit!");
    }

    console.log(`Calcul finalizat! Minim: ${minim}, Maxim: ${maxim}, Medie: ${medie.toFixed(2)}`);
};
