const body = document.querySelector('body');
window.onload = function() {

    // CONST image de fond
    const rearPaint =  document.createElement('section');
    rearPaint.id = 'rearPaint';
    rearPaint.style= 'background-color:rgba(242, 242, 255, 0.9)';
    body.appendChild(rearPaint);
    // CONST DIV POUR CENTRER LE TOUT 
    const frame = document.createElement('div');
    frame.id = 'frame';
    rearPaint.appendChild(frame);
    // CONST CANVAS   
    const anime = document.createElement('canvas');
    let animeText = "Image d'un pars de pizza";
    anime.title = "Observez la lune en mouvement";    
    anime.id = 'anime';
    anime.textContent = animeText;
    anime.width = 400;
    anime.height = 400;
    frame.appendChild(anime);

    if (anime.getContext) {
        var ctx = anime.getContext("2d");
        
        function cercle(x, y, w) {
            ctx.beginPath();
            ctx.arc(x, y, w/2, 0, Math.PI * 2);
            ctx.fill();
        }

        function RainDrop(max, min) {
            this.x = Math.floor(Math.random() * (max - min) + min);
            this.y = Math.floor(Math.random() * (max - min) + min);
            this.b = 20;
            this.bw = this.b/2;
            this.bar = Math.floor(Math.random() * (20 - 9) + 9);
        }

        RainDrop.prototype.draw = function() {
                ctx.fillStyle = 'rgba(110, 132, 230)';
                ctx.beginPath();
                ctx.moveTo(this.x+0/100*this.b, this.y%400-300/100*this.b);
                ctx.lineTo(this.x-10/100*this.b, this.y%400-1/100*this.b);
                ctx.lineTo(this.x+10/100*this.b, this.y%400+1/100*this.b);
                ctx.closePath();
                ctx.fill();
                ctx.lineWidth = 1.5;
                ctx.strokeStyle = 'rgba(70, 140, 184)';
                ctx.fillStyle = 'rgba(49, 76, 130)';
                cercle(this.x+1/100*this.b, this.y%400+1/100*this.b, this.bw);
                ctx.stroke();
                ctx.fillStyle = 'rgba(67, 140, 217)';
                cercle(this.x+5/100*this.b, this.y%400+15/100*this.b, this.bw-31/100*this.b);
        }

        RainDrop.prototype.update = function() {
            this.y += this.bar;
        }

        // on initialise un tableau
        let rainDrop = [];
        // ici on initialise une valeur min
        let rainDropMin = 0;

        for (let i = 0; i < 8; i++) {
            // ici on initilise la valeur max
            let rainDropMax = rainDropMin + 50;
            for (let y = 0; y < 3; y++) {
                let drop = new RainDrop(rainDropMin,rainDropMax);
                rainDrop.push(drop);
            }
            rainDropMin += 50;
        }

        anime.addEventListener('mousemove', function(e){
                mouseX = e.offsetX;
                mouseY = e.offsetY;
                return mouseX;
              }
           );

        anime.onclick = function() {
            let drop = new RainDrop(mouseX,mouseX);
            rainDrop.push(drop);
        };

        function loop() {
            ctx.fillStyle = 'rgba(63, 70, 87)';
            ctx.fillRect(0, 0,  400, 400);
            for (let i = 0; i < rainDrop.length; i++) {
                rainDrop[i].draw();
                rainDrop[i].update();
            }
            requestAnimationFrame(loop);
        }
        loop();
    }
}