
var audio0 = document.createElement('audio');
 audio0.setAttribute('src', 'https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
var audio1 = document.createElement('audio');
 audio1.setAttribute('src', 'https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
var audio2 = document.createElement('audio');
 audio2.setAttribute('src', 'https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
var audio3 = document.createElement('audio');
 audio3.setAttribute('src', 'https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');



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

let sonido =
[audio0, audio1, audio2, audio3
];


// imprime colores
for (let i = 1; i < 21; i++) {
    let circulo = document.getElementById('circle-'+i);
    circulo.style.background = colores[i-1];
}



var maquina = [];
var secuencias = [];
var usuario = [];
var nivel = 2;

var intervalID = 0;


for(let i=0; i<21; i++) {
    maquina.push( Math.floor(Math.random() * (20 - 1)) + 1);

}

function updateGame() {
    //audio0.play();
    gotSequence(nivel)
}

function gotSequence(nivel) {
    usuario = [];
    secuencias = [];
    ClearElements();

    var contador = 1;

    intervalID = setInterval(() => {

        //aqui va el if
        let idCirculo = Math.floor(Math.random() * (20 - 1)) + 1;
        let idSonido = Math.floor(Math.random()*(4-1))+1;
        drawSequence(idCirculo, idSonido);
         if(secuencias.length>1){
            //[3,5]
            let position = secuencias.length-2;
            // position 0
            let idCirculo2 = secuencias[position]
            elementEraser(idCirculo2);

        } 
         
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




function drawSequence(idCirculo, idSonido) {


 
    let circulo = document.getElementById('circle-'+idCirculo)
    //Set timeout
    let color = colorBorder[idCirculo-1];

    secuencias.push(idCirculo);

    circulo.style.border = "10px solid "+ color;
    sonido[idSonido].play();

 
    //agregamos el id a la maquina
}
  

function ClearElements() {
    for (let i = 1; i < 21; i++) {
        console.log();
        let circulo = document.getElementById('circle-'+i);
        circulo.style.border = "none" ;

    }
}

function elementEraser(idCirculo){
        let circulo = document.getElementById("circle-"+idCirculo);
        circulo.style.border = "none" ;
}

function elementEraserAlone(idCirculo){
        let circulo = document.getElementById("circle-"+idCirculo);
        circulo.style.border = "none" ;
}

window.onload = function() {
    


    updateGame();

}

function valida(circulo) {
    var arrayC = circulo.id.split("-");

    usuario.push(arrayC[1]);
    
    for(var i=0; i< usuario.length; i++){
        if(usuario[i]!=secuencias[i])

            document.getElementById('perdiste').style.display = 'block';

    }

    if (usuario.length === secuencias.length) {
        console.log("hola ganaste");
        secuencias = [];
        nivel++;
        updateGame();
    }
}