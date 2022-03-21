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
    anime.title = "Observez une pars de pizza";    
    anime.id = 'anime';
    anime.textContent = animeText;
    anime.width = 400;
    anime.height = 400;
    frame.appendChild(anime);

    if (anime.getContext) {
        var ctx = anime.getContext("2d");
        anime.style.background = 'rgb(186, 145, 20)';

        let chorizo = [ 
            [137, 188],
            [184, 130],
            [173, 170],
            [212, 166],
            [193, 209],
            [238, 196],
            [233, 226]
        ];
            
        // PLATE
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(200, 200, 350/2, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke()

        // SECONDE PLATE
        ctx.beginPath();
        ctx.arc(200, 200, 300/2, 0, Math.PI * 2);
        ctx.stroke();

        //part of pizza
        ctx.fillStyle = 'rgb(255, 221, 0)';
        ctx.beginPath();
        ctx.moveTo(299, 262);
        ctx.lineTo(89, 199);
        ctx.lineTo(183, 89);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //croute
        ctx.lineWidth = 2;
        ctx.fillStyle = 'rgb(201, 118, 40)';
        ctx.beginPath();
        ctx.moveTo(89, 199);
        ctx.bezierCurveTo(38, 218, 190, 31, 183, 89);
        ctx.fill();
        ctx.stroke();

        // chrizo
        ctx.fillStyle = 'rgb(209, 55, 20)';
        for (var i = 0; i < chorizo.length; i++) {
            ctx.beginPath();
            ctx.arc(chorizo[i][0],chorizo[i][1], 18/2, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
        }
    }
}