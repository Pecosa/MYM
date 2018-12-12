
$("#sonido").click(function() {
    $(this).find('img').toggle();
});
$("#play").click(function() {
    $(this).find('img').toggle();
});

$("#recarga").click(function() {
    $(this).find('img').toggle();
});


let colores =
    ["#8230df", "#b4ec51", "#f5515f" , "#3023ae",
    "#fad961", "#7cb3fc", "#af65bd", "#b6406a",
    "#e74454", "#4d35a9", "#da505f", "#aa5fcf",
    "#9b57ca", "#5da82c",  "#b6192e", "#63ade0",
    "#fad961", "#7cb3fc",  "#af65bd", "#b6406a"];

let colorBorder=
    ["#b483ec", "#d2f497", "#f9979f", "#837bce",
    "#fce8a0", "#b0d1fd", "#cfa3d7", "#d38ca6",
    "#f18f98", "#9486cb", "#e9969f", "#cc9fe2",
    "#c39adf", "#9ecb80", "#d37582", "#a1ceec",
    "#fce8a0", "#b0d1fd", "#cfa3d7", "#d38ca6"];


// imprime colores
for (let i = 1; i < 21; i++) {
    let circulo = document.getElementById('circle-'+i);
    circulo.style.background = colores[i-1];
}

var maquina = [];
var secuencias = [];
var usuario = [];
var nivel = 3;

var intervalID = 0;


for(let i=0; i<21; i++) {
    maquina.push( Math.floor(Math.random() * (20 - 1)) + 1);

}

function updateGame() {

    gotSequence(nivel)
}

function gotSequence(nivel) {
    var usuario = [];
    var secuencia = [];
    //Pintar los colores en la secuencia correcta
    for(var i = 1; i <= nivel; i++) {
        

    }

    var contador = 1;

    intervalID = setInterval(() => {
        let idCirculo = Math.floor(Math.random() * (20 - 1)) + 1;
        drawSequence(idCirculo)
        contador++;
        if(contador > nivel) {
            stop();
        }
    }, 1000);

    
}

function stop() {
    console.log(secuencias);
    clearInterval(intervalID);
}




function drawSequence(idCirculo) {
    let circulo = document.getElementById('circle-'+idCirculo)
    //Set timeout
    let color = colorBorder[idCirculo-1];

    circulo.style.border = "6px solid "+ color;
    //agregamos el id a la maquina
    secuencias.push(idCirculo);
    //Despintar la border
}

window.onload = function() {
    updateGame();



}

function valida(circulo) {
    var arrayC = circulo.id.split("-");

    usuario.push(arrayC[1]);
    
    for(var i=0; i< usuario.length; i++){
        if(usuario[i]!=secuencias[i])
            console.log("perdiste");
            
    }

    if (usuario.length === secuencias.length) {
        console.log("hola ganaste");
        for (let i = 1; i < 21; i++) {
    let circulo = document.getElementById('circle-'+i);
    circulo.style.background = colores[i-1];
}
        updateGame();
    }
}