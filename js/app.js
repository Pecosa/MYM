var canvas = document.getElementById('circle-random'),
    c = canvas.getContext('2d'),
    w = window.innerWidth,
    h = window.innerHeight,
    opt = {
        amount: 20,
        direction: [
            [1,1],
            [-1,1],
            [1,-1],
            [-1,-1],
            [1,0],
            [-1, 0],
            [0, 1],
            [0, -1]
        ],
        speed: .5,
        size: 15
    },
    Particle = function(x, y){
        this.x = x || 0;
        this.y = y || 0;
        this.direction = opt.direction[Math.floor(Math.random() * opt.direction.length)];
        this.speed = opt.speed * Math.random();
        this.size = opt.size + Math.random() * 20;
        var color = randomColor();

        this.update = function(){

            this.x += this.direction[0] * this.speed;
            this.y += this.direction[1] * this.speed;

        };

        this.render = function() {
            this.colision();

            c.fillStyle = 'rgba(' + color[0] + ','+ color[1] +','+ color[2] ;
            c.beginPath();
            c.arc(this.x, this.y, this.size , 0, 5 * Math.PI, false);
            c.fill();

        };

        this.colision = function() {
            if(this.x < 0 - this.size) {
                this.x = w;
            }
            if(this.x > w + this.size) {
                this.x = 0;
            }
            if(this.y < 0 - this.size) {
                this.y = h;
            }
            if(this.y  > h + this.size) {
                this.y = 0;
            }

        }

    },
    circle = [];


canvas.width = w;
canvas.height = h;

window.addEventListener('resize', function() {
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
});

function randomColor() {
    var color = [
        [48, 35, 174],
        [180, 236, 81],
        [245, 81, 95],
        [48, 35, 174],
        [250, 217, 97],
        [124, 179, 252],
        [175, 101, 189],
        [182, 64, 106],
        [77, 53, 169]
    ];

    return color[Math.floor(Math.random() * color.length)];
}


(function setup() {

    for(var i = 0; i < opt.amount; i++) {
        circle.push(new Particle(
            Math.random() * w,
            Math.random() * h
        ));
    }

    setTimeout(function(){
        window.requestAnimationFrame(loop);
    }, 1000 / 30);
})();

function loop() {
    c.clearRect(0, 0, w, h);

    circle.map(function(C) {
        C.update();
        C.render();
    });

    setTimeout(function(){
        window.requestAnimationFrame(loop);
    }, 1000 / 50);
};

