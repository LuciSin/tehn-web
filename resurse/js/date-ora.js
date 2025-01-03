window.onload = function() {
    let data = new Date(); // obtinem data si ora curenta

    // vectori pt zilele sapt si lunii in lb romana
    let vectorZile = ["Duminica", "Luni", "Marti", "Miercuri", "Joi", "Vineri", "Sambata"];
    let vectorLuni = ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"];

    // formatarea datei si orei
    let ziuaSaptamanii = vectorZile[data.getDay()];
    let luna = vectorLuni[data.getMonth()];
    let ziuaLunii = data.getDate();
    let an = data.getFullYear();
    let ora = data.getHours().toString().padStart(2, '0');
    let minute = data.getMinutes().toString().padStart(2, '0');
    let secunde = data.getSeconds().toString().padStart(2, '0');

    // Crearea unui element p pt afissarea datei si orei
    let p = document.getElementById("data-ora-afisata");

    // stilizare personalizata <3
    p.innerHTML = `<span style="color: #FF5733;">${ziuaSaptamanii}</span>, ${ziuaLunii} <span style="color: #2E86C1;">${luna}</span> ${an} <span style="color: #7D3C98;">${ora}:${minute}:${secunde}</span>`;
};
