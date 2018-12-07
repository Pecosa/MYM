var canvas = document.getElementById("plano");
var X,Y;

inicializarCanvas();

function inicializarCanvas(){
    var ctx = canvas.getContext("2d");
    var s = getComputedStyle(canvas);
    var w = s.width;
    var h = s.height;
    var padding= (canvas.width/16);
    canvas.width=w.split("px")[0];
    canvas.height=h.split("px")[0];
    X=canvas.width/8;
    Y=canvas.height/8;
    dibujar(ctx);
}

function dibujar(ctx){
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            
            ctx.fillStyle = 'hsl(' + 360 * Math.random() + ', 50%, 50%)';
            ctx.beginPath();
            ctx.arc(X+ j*(X*2), Y + i *(Y*1.5), X/1.5, 0, Math.PI * 2, true);
            ctx.fill();
        }
    }
}
