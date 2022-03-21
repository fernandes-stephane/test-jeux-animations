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

        // variable vitesse de dépacement
        let xPos = -60;
        let yPos = 320;
        let sP = 4;
        let tP = 4;
        let etX = -580;
        let etY = 75;

        var stars =[
            [[20,156],[24,162],[16,162],[16,158],[24,158],[20,164]], //star1
            [[75,351],[79,357],[71,357],[71,353],[79,353],[75,359]], //star2
            [[145,106],[149,112],[141,112],[141,108],[149,108],[145,114]], //star3
            [[170,46],[174,52],[166,52],[166,48],[174,48],[170,54]], //star4
            [[210,206],[214,212],[206,212],[206,208],[214,208],[210,214]], //star5
            [[270,71],[274,77],[266,77],[266,73],[274,73],[270,79]], //star6
            [[305,306],[309,312],[301,312],[301,308],[309,308],[305,314]], //star7
            [[380,366],[384,372],[376,372],[376,368],[384,368],[380,374]] //star8
        ];

        // Moon
        var moon1 = [[-25,20,50] , [26,-36,15], [12,-40,6], [28,-22,6]]
        var moon2 = [[-25,20,44] , [26,-36,12], [12,-40,4], [28,-22,4]]

        function cercle(x, y, w) {
            ctx.beginPath();
            ctx.arc(xPos+ x, yPos+ y, w/2, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke()
        }

        function draw() {

            // Stars
            ctx.fillStyle = 'rgb(196, 190, 76)';

            for (var i = 0; i < stars.length; i++) {
                ctx.beginPath();
                for (var j = 0; j < stars[i].length; j++) {
                    if (j === 0 || j === 3){
                        ctx.moveTo(sP+ stars[i][j][0], tP+ stars[i][j][1]);
                    } else {
                        ctx.lineTo(sP+ stars[i][j][0], tP+ stars[i][j][1]);
                    }
                }
                ctx.closePath();
                ctx.fill();
            }

            ctx.lineWidth = 2;
            cercle(0,0,120);

            ctx.lineWidth = 4;
            ctx.strokeStyle = 'rgb(255, 250, 181)';
            ctx.fillStyle = 'rgb(196, 184, 10)';

            for (var i = 0; i < moon1.length; i++) {
                cercle(moon1[i][0],moon1[i][1],moon1[i][2])
            }

            ctx.lineWidth = 0.20;
            ctx.strokeStyle = 'rgb(0, 0, 0)';
            ctx.fillStyle = 'rgb(219, 219, 168)';

            for (var i = 0; i < moon2.length; i++) {
                cercle(moon2[i][0],moon2[i][1],moon2[i][2])
            }

            //      E.T.            //
            function cercleET(x, y, w) {
                ctx.beginPath();
                ctx.arc(etX+ x, etY+ y, w/2, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke()
            }

            ctx.fillStyle = 'rgb(0, 0, 0)';
            ctx.beginPath();
            ctx.moveTo(etX+ 45, etY+ 10);
            ctx.lineTo(etX+ 65, etY+ 65);
            ctx.lineTo(etX+ 10, etY+ 40);
            ctx.closePath();
            ctx.fill();
            cercleET(45, 10, 20)

            ctx.fillRect(etX+ 65, etY+ 9, 20, 35);
            cercleET(87, 10, 26);
            cercleET(73, 67, 40);
            cercleET(23, 76, 40);

            ctx.lineWidth = 8;
            ctx.beginPath();
            ctx.moveTo(etX+ 45, etY+ 28);
            ctx.lineTo(etX+ 75, etY+ 22);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(etX+ 23, etY+ 76);
            ctx.lineTo(etX+ 73, etY+ 67);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(etX+ 23, etY+ 76);
            ctx.lineTo(etX+ 41, etY+ 50);
            ctx.stroke();

        }

        function update() {
            xPos= xPos+ 0.5;
            yPos= yPos- 0.23;
            etX= etX+ 1.5;
            etY= etY+ 0.19;
            sP= sP+ 0.01;
            tP= tP+ 0.01;  
        }

        function loop() {
            ctx.fillStyle = 'rgba(34, 34, 82)';
            ctx.fillRect(0, 0,  400, 400);
            draw();
            update();
            requestAnimationFrame(loop);
        }
        loop();
    }
}