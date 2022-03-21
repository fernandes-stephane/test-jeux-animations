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

        function ellipse(x, y, w, h, startAngle=0, endAngle=360, stroke=true, fill=true, rotation=0) {
            radian = (Math.PI/180)
            ctx.beginPath();
            ctx.ellipse(x, y, w/2, h/2, rotation, startAngle*radian, endAngle*radian);
            if (fill) {
                ctx.fill();    
            } if(stroke) {
                ctx.stroke();   
            }
        }

        function triangle(a,b,c,d,e,f){
            ctx.beginPath();
            ctx.moveTo(a, b);
            ctx.lineTo(c, d);
            ctx.lineTo(e, f);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        }

            //BACKGROUND//
        anime.style.background = 'rgb(51, 124, 214)';
            //SUND//
        ctx.lineWidth = 2.2;
        ctx.fillStyle = 'rgba(237, 211, 135)';
        ellipse(195, 425, 1544, 300);//sund
        ellipse(248, 454, 939, 312, 259, 287);//sund_detail.1
        ellipse(248, 464, 939, 312, 272, 282);//sund_detail.2
        ellipse(260, 478, 939, 312, 275, 279);//sund_detail.3
        ellipse(413, 520, 939, 312, 258, 260);//sund_detail.4
        ellipse(66, 505, 1200, 265, 265, 279);//sund_detail.5

                    //ALGAE//
        let algae =function(aX, aY){
            ellipse(aX+102, aY+-24, 227, 184, 155, 206, true, false);//algae_detail.1
            ellipse(aX+157, aY+-26, 303, 208, 182, 203, true, false);//algae_detail.2
            ellipse(aX+300, aY+84, 603, 543, 195, 211, true, false);//algae_detail.3

            ctx.fillStyle = 'rgba(60, 150, 83)';
            ellipse(aX+11, aY-40, 45, 33, 90, 443);//algae.1
            ellipse(aX+2, aY-26, 34, 24, 270, 455);//algae.2
            ellipse(aX, aY, 30, 20, 90, 270);//algae.3
            ellipse(aX, aY-7, 30, 20, 270, 455);//algae.4
            ellipse(aX+3, aY-20, 30, 20, 90, 270);//algae.5
        };

                    //PEBLLES//
        let pebbles=function(pX, pY){
            ctx.fillStyle = 'rgba(126, 142, 145)';
            ellipse(pX, pY, 55, 70);//peblle.1
            ellipse(pX+16, pY+24, 30, 32);//peblle.2
            ellipse(pX-32, pY+27, 62, 28);//peblle.3

            ctx.fillStyle = 'rgba(172, 191, 196)';
            ellipse(pX, pY+9, 44, 78, 180, 270, false);//peblle_detail.1
            ctx.lineTo(pX, pY+9);
            ctx.closePath();
            ctx.fill();

            ctx.fillStyle = 'rgba(126, 142, 145)';
            ellipse(pX+3, pY+10, 42, 51, 180, 270, false);//peblle_detail.2
            ctx.lineTo(pX+3, pY+10);
            ctx.closePath();
            ctx.fill();
            ctx.fillStyle = 'rgba(172, 191, 196)';
            ellipse(pX-35, pY+25, 50, 20, 0, 360, false);//peblle_detail.3
            ellipse(pX+18, pY+22, 21, 22, 0, 360, false); //peblle_detail.4
        };

                    //BUBBLE//
        var bubble=function(){ 
            var B=100;
            var bX= Math.floor(Math.random() * (400 - 0) + 0);
            var bY= Math.floor(Math.random() * (250 - 50) + 50);
            var bW= B/2;//50
            var bH=B/2;//50
            ctx.lineWidth = 1.4;
            ctx.fillStyle = 'rgba(0, 162, 255)';
            ellipse(bX, bY, bW, bH);//bubble_1
            ellipse(bX+22/100*B, bY+0/100*B, bW-20/100*B, bH-20/100*B);//bubble_2
            ellipse(bX+10/100*B, bY+26/100*B, bW-30/100*B, bH-30/100*B);//bullble_3
            ellipse(bX-12/100*B, bY+36/100*B, bW-35/100*B, bH-35/100*B);//bullble_4
            ellipse(bX+0/100*B, bY+49/100*B, bW-40/100*B, bH-40/100*B);//bullble_5
            ellipse(bX+6/100*B, bY+64/100*B, bW-40/100*B, bH-40/100*B);//bullble_6
            ctx.fillStyle = 'rgba(168, 241, 255)';
            ellipse(bX-35/300*B, bY-25/300*B, bW-98/300*B, bH-95/300*B, 0, 360, false);//bubble_detail.1
            ellipse(bX+46/300*B, bY-22/300*B, bW-133/300*B, bH-132/300*B, 0, 360, false);//bubble_detail.2
            ellipse(bX+19/300*B, bY+76/300*B, bW-123/300*B, bH-115/300*B, 0, 360, false);//bubble_detail.3
            ellipse(bX-42/300*B, bY+108/300*B, bW-123/300*B, bH-114/300*B, 0, 360, false);//bubble_detail.4
            ellipse(bX-3/300*B, bY+146/300*B, bW-129/300*B, bH-129/300*B, 0, 360, false);//bubble_detail.5
            ellipse(bX+10/300*B, bY+187/300*B, bW-143/300*B, bH-141/300*B, 0, 360, false);//bubble_detail.6
        };

        var fish=function (fX, fY, fW){

            var fH=fW/2;
            ctx.lineWidth = 1.6;
            ctx.fillStyle = `rgba(${fX}, ${fY}, 30)`;
            triangle(fX+-139/200*fW, fY+-47/200*fW, fX+-24/200*fW, fY+-1/200*fW, fX+-149/200*fW, fY+53/200*fW);//fishtail.1
            ellipse(fX+-6/200*fW, fY+-24/200*fW, fW+-54/200*fW, fH+24/200*fW, 89, 450);//dorsal_fin
            ellipse(fX, fY, fW, fH+21/200*fW);//fish_body
            ellipse(fX+-7/200*fW, fY+9/200*fW, fW+-114/200*fW, fH+-30/200*fW, 49, 302);//fin
            ctx.fillStyle = 'rgba(72, 122, 156)';
            ellipse(fX+68/200*fW, fY+-31/200*fW, fW+-158/200*fW, fH+-60/200*fW);//fish_eye
            ctx.fillStyle = 'rgba(0, 0, 0)';
            ellipse(fX+70/200*fW, fY+-28/200*fW, fW+-172/200*fW, fH+-72/200*fW);//fish_eye2
            ctx.fillStyle = 'rgba(255, 98, 0)';
            triangle(fX+105/200*fW, fY+-13/200*fW, fX+92/200*fW, fY+41/200*fW, fX+35/200*fW, fY+20/200*fW);//fish_lips.1
            ellipse(fX+97/200*fW, fY+10/200*fW, fW+-158/200*fW, fH+-52/200*fW, 289, 360, false);//fish_lips.2
            ctx.lineTo(fX+97/200*fW , fY+10/200*fW);
            ctx.fill();
            ctx.stroke();
            ellipse(fX+91/200*fW, fY+22/200*fW, fW+-125/200*fW, fH+-62/200*fW, 280, 450);//fish_lips.3
        };

        anime.addEventListener('mousemove', function(e){
                mouseX = e.offsetX;
                mouseY = e.offsetY;
                anime.onclick = function() {
                    fish(mouseX, mouseY, Math.floor(Math.random() * (200 - 100) + 100));
                };
            }
        );

        pebbles(378, 362);
        pebbles(60, 330); 
        pebbles(300, 241);
        algae(336, 295);
        algae(10, 276);
        algae(94, 365);
        bubble();
        bubble();
        bubble();
        bubble();
    }
}