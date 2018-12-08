let colores = ["#8230DF", "#B4EC51", "#F5515F" , "#FAD961",
               "#7CB3FC", "#AF65BD", "#E74454", "#4D35A9",
               "#DA505F", "#9B57CA", "#5DA82C", "#B6192E",
               "#7CB3FC", "#AF65BD",  "#E74454", "#4D35A9"];

let colorBorder=["#d2f497", "#b483ec", "#f9979f", "#fce8a0",
    "#d2f497", "#b483ec", "#f9979f", "#fce8a0",
    "#d2f497", "#b483ec", "#f9979f", "#fce8a0",
    "#d2f497", "#b483ec", "#f9979f", "#fce8a0"];



for (let i = 1; i < 17; i++) {
    let circulo = document.getElementById('circle-'+i);
    circulo.style.background = colores[i-1];
}

var maquina = [];


for(let i=0; i<24; i++) {
    maquina.push( Math.floor(Math.random() * (16 - 1)) + 1);
}

let running = true;
let nivelActual = 1;

function secuenciaNivel(secuencia, nivel) {
    return secuencia.slice(0,nivel+1);
}

while (running === true) {
    let camino = secuenciaNivel(maquina, nivelActual);


     if (gotCorrectSequence(camino)) {
         nivelActual = nivelActual + 1;
     }
    else {
         running = false;
     }
    //Pinta secuencia nivel n
    //Checa si usuario responde bien
    //Si usuario responde mal, running = false
    //Si usuario responde bien, nivel = n + 1
}

function gotCorrectSequence(seq) {
    var usuario = [];
    //Pintar los colores en la secuencia correcta
    seq.forEach(id => {
        let circulo = document.getElementById('circle-'+id);
        //Set timeout
        let color = colorBorder[id-1];
        circulo.style.border = "6px solid "+ color;
        //Despintar la border
});
    //Escuchar al usuario
    //Llenar usuario con los movimientos del usuario

    //Secuencia contiene lo mismo que usuario?????
    //Si las secuencias contienen lo mismo, return true
    //Si las secuencias contienen cosas diferentes, return false
    //Si se acaba el tiempo, return false
}

//Llena array de longitud 25
//Con nùmeros aleatorios del 1 al 16
//

//interaccion
//let color = colorBorder[i-1];
//circulo.style.border = "6px solid "+ color;

//var x = document.getElementById("circle-1");

//x.style.background = "#8230DF";