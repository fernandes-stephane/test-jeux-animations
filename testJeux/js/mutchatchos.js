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

      // variables
      let mouseX = 0;
      let mouseY = 0;

      anime.addEventListener('mousemove', function(e){
            mouseX = e.offsetX;
            mouseY = e.offsetY;
         }
      );

      function cercle(x, y, w) {
         ctx.beginPath();
         ctx.arc(x, y, w/2, 0, Math.PI * 2);
         ctx.fill();
         ctx.stroke()
      }

      function ellipse(x, y, w, h, angle, start, stop, fill, stroke) {
         ctx.beginPath();
         ctx.ellipse(x, y, w/2, h/2, angle,  (Math.PI/180)*start, (Math.PI/180)*stop);
         if (fill) {
            ctx.fill();
         } if(stroke) {
            ctx.stroke();   
         }
      }

      function rect (x, y, w, h) {
         ctx.fillRect(x, y, w, h);
         ctx.strokeRect(x, y, w, h);
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


      function draw() {

         let head= 61-1/15*mouseX;
         let headX= mouseX/1.5+210;
         let headY= 200-1/3*mouseX;
         let chap= 200/130*head;
         let headW= head;
         let headH= 267/200* head; 
         let chapY= headY-84/200*chap;
         let chapW= 15/10* chap;
         let chapH= 4.5/10* chap;
         let chapX= headX;
         let trait=2/130*head;
         let bodyX=headX+4/62*head;
         let bodyY=headY+35/62*head;
         let bodyW=headW+78/62*head;
         let bodyH=headH+8/62*head;
         let bea =50+1/8*mouseX;
         let beaX=mouseX;
         let beaY=mouseY;
         let beaW=210/200*bea;
         let beaH=160/200*bea;
         let traitB= 3/200*bea;

         // background
         ctx.fillStyle = 'rgba(138, 208, 255)';
         ctx.fillRect(0, 0,  400, 400);

         ctx.lineWidth = 2;
         ctx.fillStyle = 'rgba(250, 250, 65)';
         cercle(360, 10, 180);// sun

         ctx.fillStyle = 'rgba(219, 165, 90)';
         ctx.beginPath();// floor
         ctx.moveTo(0, 270);
         ctx.lineTo(400, 209);
         ctx.lineTo(400, 400);
         ctx.lineTo(0, 400);
         ctx.closePath();
         ctx.fill();
         ctx.stroke();

         ctx.fillStyle = 'rgba(189, 172, 151)';
         ctx.beginPath();// road
         ctx.moveTo(333, 220);
         ctx.lineTo(602, 178);
         ctx.lineTo(302, 400);
         ctx.lineTo(-56, 400);
         ctx.closePath();
         ctx.fill();
         ctx.stroke();

         ctx.fillStyle = 'rgba(136, 217, 65)';// cactus
         ellipse(45, 224, 57, 19, 0, 0, 360, true, true);
         ellipse(69, 284, 39, 255, 0, 181, 360, true, true);
         ellipse(24, 223, 16, 37, 0, 175, 349, true, true);
         ellipse(79, 196, 34, 15, 0, 258, 464, true, true);
         ellipse(90, 195, 11, 30, 0, 179, 368, true, true);

         ctx.beginPath();
         ctx.moveTo(65, 200);
         ctx.lineTo(62, 278);
         ctx.moveTo(76, 216);
         ctx.lineTo(74, 266);
         ctx.moveTo(56, 167);
         ctx.lineTo(63, 174);
         ctx.moveTo(52, 173);
         ctx.lineTo(62, 179);
         ctx.stroke();

         // HAT
         ctx.lineWidth = (3/2*trait);
         ctx.fillStyle = 'rgba(230, 168, 69)';
         ellipse(chapX, chapY- 1/10*chap, chapW- 21/20*chap, chapH+ 1/2*chap, 0, 0, 360, true, true);
         ctx.fillStyle = 'rgba(225, 170, 35)';
         ellipse(chapX, chapY-3/50*chap, chapW+ 1.5/20*chap, chapH+ 2.5/20*chap, 0, 0, 360, true, true);
         ctx.fillStyle = 'rgba(219, 185, 83)';
         ellipse(chapX, chapY, chapW, chapH, 0, 0, 360, true, true);
         ctx.fillStyle = 'rgba(0, 0, 0)';
         ellipse(chapX, chapY+1/20*chap, chapW- 18.5/20*chap, chapH- 2.5/10*chap, 0, 0, 360, true, true);

         // legs
         ctx.fillStyle = 'rgba(191, 97, 57)';
         rect(bodyX-58/62*head, bodyY+30/62*head, bodyW-20/62*head, bodyH+20/62*head);

         // foots
         ctx.fillStyle = 'rgba(138, 72, 45)';
         ellipse(bodyX-34/62*head, bodyY+129/62*head, bodyW-65/62*head, bodyH-45/62*head, 0, 0, 360, true, true);
         rect(bodyX-69/62*head, bodyY+138/62*head, bodyW-71/62*head, bodyH-75/62*head);
         ellipse(bodyX+36/62*head, bodyY+129/62*head, bodyW-65/62*head, bodyH-45/62*head, 0, 0, 360, true, true);
         rect(bodyX+11/62*head, bodyY+138/62*head, bodyW-79/62*head, bodyH-75/62*head);

         // body
         ctx.fillStyle = 'rgba(128, 133, 29)';
         triangle(bodyX-67/62*head, bodyY+15/62*head, bodyX+66/62*head, bodyY+15/62*head, bodyX+6/62*head, bodyY+152/62*head);
         ctx.fillStyle = 'rgba(201, 44, 44)';
         triangle(bodyX-57/62*head, bodyY+15/62*head, bodyX+56/62*head, bodyY+15/62*head, bodyX+6/62*head, bodyY+132/62*head);
         ctx.fillStyle = 'rgba(189, 140, 56)';
         triangle(bodyX-47/62*head, bodyY+15/62*head, bodyX+46/62*head, bodyY+15/62*head, bodyX+6/62*head, bodyY+117/62*head);
         ctx.fillStyle = 'rgba(181, 131, 43)';
         ellipse(bodyX, bodyY, bodyW, bodyH, 0, 0, 360, true, true);

         // left hand
         ctx.fillStyle = 'rgba(232, 139, 173)';
         ellipse(bodyX-54/62*head, bodyY+18/62*head, bodyW-90/62*head, bodyH-73/62*head, 0, 0, 360, true, true);
         ellipse(bodyX-99/62*head, bodyY-3/62*head, bodyW-126/62*head, bodyH-63/62*head, 0, 0, 360, true, true);
         ellipse(bodyX-87/62*head, bodyY-15/62*head, bodyW-125/62*head, bodyH-58/62*head, 0, 0, 360, true, true);
         ellipse(bodyX-74/62*head, bodyY-15/62*head, bodyW-125/62*head, bodyH-43/62*head, 0, 0, 360, true, true);
         ellipse(bodyX-59/62*head, bodyY-15/62*head, bodyW-125/62*head, bodyH-59/62*head, 0, 0, 360, true, true);
         ellipse(bodyX-76/62*head, bodyY+11/62*head, bodyW-80/62*head, bodyH-45/62*head, 0, 0, 360, true, true);

         //right hand
         ellipse(bodyX+36/62*head, bodyY+18/62*head, bodyW-90/62*head, bodyH-73/62*head, 0, 0, 360, true, true);
         ellipse(bodyX+82/62*head, bodyY-3/62*head, bodyW-126/62*head, bodyH-63/62*head, 0, 0, 360, true, true);
         ellipse(bodyX+69/62*head, bodyY-15/62*head, bodyW-125/62*head, bodyH-58/62*head, 0, 0, 360, true, true);
         ellipse(bodyX+54/62*head, bodyY-15/62*head, bodyW-125/62*head, bodyH-43/62*head, 0, 0, 360, true, true);
         ellipse(bodyX+39/62*head, bodyY-15/62*head, bodyW-125/62*head, bodyH-59/62*head, 0, 0, 360, true, true);
         ellipse(bodyX+59/62*head, bodyY+11/62*head, bodyW-80/62*head, bodyH-45/62*head, 0, 0, 360, true, true);

         // head
         ctx.fillStyle = 'rgba(232, 139, 173)';
         ctx.lineWidth = (3/2*trait);
         ellipse(headX, headY, headW, headH, 0, 0, 360, true, true);
         ctx.fillStyle = 'rgba(255, 255, 255)';
         ctx.lineWidth = (trait);
         ellipse(headX- 8.5/20*head, headY-2/10*head, headW- 14.5/20*head, headH-19.5/20*head, 0, 0, 360, true, true);
         ellipse(headX- 3/200*head, headY-40/200*head, headW- 129/200*head, headH-182/200*head, 0, 0, 360, true, true);
         ctx.fillStyle = 'rgba(0, 0, 0)';
         ellipse(headX-2.4/5*head, headY-3.3/20*head, headW-17.8/20*head, headH-22.5/20*head, 0, 0, 360, true, true);
         ellipse(headX- 7/100*head, headY-35/200*head, headW-174/200*head, headH-225/200*head, 0, 0, 360, true, true);
         ctx.fillStyle = 'rgba(255, 255, 255)';
         ellipse(headX-9.2/20*head, headY-3/20*head, headW-19/20*head, headH-24.7/20*head, 0, 0, 360, true, true);
         ellipse(headX- 1/20*head, headY-3/20*head,headW-19/20*head, headH-24.7/20*head, 0, 0, 360, true, true);
         ctx.fillStyle = 'rgba(0, 0, 0)';
         ellipse(headX- 4.3/10*head, headY+3.5/20*head, headW-8.8/20*head, headH-18.1/20*head, 0, 64, 182, true, true);
         ctx.fillStyle = 'rgba(235, 140, 170)';
         ellipse(headX- 4.3/10*head, headY+2/20*head, headW-12/20*head, headH-17.7/20*head, 0, 140, 323, true, true);
         ctx.lineWidth = (1/2*trait);
         ctx.fillStyle = 'rgba(0,0,0)';
         ellipse(headX-107/200*head, headY+55/200*head, headW-153/200*head, headH-223/200*head, 0, 0, 360, true, true);
         ellipse(headX-80/200*head, headY+48/200*head, headW-140/200*head, headH-205/200*head, 0, 0, 360, true, true);
         ctx.lineWidth = (trait);
         ellipse(headX+23/200*head, headY+32/200*head, headW-63/200*head, headH-181/200*head, 0, 10, 175, true, true);
         ellipse(headX-1.5/20*head, headY+5/20*head, headW-12/20*head, headH-202/200*head, 0, 0, 360, true, true);
         ctx.fillStyle = 'rgba(235, 140, 170)';
         ellipse(headX+5/200*head, headY+9/200*head, headW-104/200*head, headH-201/200*head, 0, 200, 360, true, true);
         ellipse(headX-5.5/20*head,headY+1.3/20*head, headW-13/20*head, headH-20.7/20*head, 0, 9, 342, true, true);
         ctx.fillStyle = 'rgba(255, 0, 0)';
         ellipse(headX-5.5/20*head, headY+4/10*head, headW-17/20*head, headH-222/200*head, 0, 0, 360, true, true);
         ctx.lineWidth = (4/1*trait);
         ellipse(headX-94/200*head, headY-3/10*head, headW-6/10*head, headH-21.7/20*head, 0, 225, 340, false, true);
         ellipse(headX+1.8/20*head, headY-4.3/20*head, headW-7/20*head, headH-14.9/20*head, 0, 207, 297, false, true);
         ctx.lineWidth = (3/2*trait);
         ctx.fillStyle = 'rgba(235, 140, 170)';
         ellipse(headX+1/2*head, headY-1/10*head, headW-13.9/20*head, headH-18.7/20*head, 0, 228, 523, true, true);
         ctx.lineWidth = (trait);
         ellipse(headX+9.6/20*head, headY-1/10*head, headW-16.5/20*head, headH-21.5/20*head, 0, 263, 496, true, true);

         // BEA
         ctx.lineWidth = (traitB+1/200*bea);
         ctx.fillStyle = 'rgba(255, 255, 255)';
         triangle(beaX-12/20*bea, beaY+2/200*bea, beaX+1/200*bea, beaY, beaX-1/2*bea, beaY+72/200*bea);
         ctx.fillStyle = 'rgba(142, 226, 237)';
         ellipse(beaX-357/200*bea, beaY-93/200*bea, beaW-26/200*bea, beaH+1/200*bea, 0, 0, 360, true, true);
         ctx.fillStyle = 'rgba(232,200,58)';
         ellipse(beaX-175/200*bea, beaY+44/200*bea, beaW+1/200*bea, beaH-1/200*bea, 0, 0, 360, true, true);
         ellipse(beaX-221/200*bea, beaY+26/200*bea, beaW-75/200*bea, beaH+1/200*bea, 0, -50, 123, false, true);
         ellipse(beaX-18/20*bea, beaY+4/20*bea, beaW-89/200*bea, beaH+1/20*bea, 0, -58, 77, false, true);
         ctx.fillStyle = 'rgba(69, 65, 65)';
         ellipse(beaX-229/200*bea, beaY+18/200*bea, beaW-113/200*bea, beaH-65/200*bea, 0, 0, 360, true, true);
         ctx.fillStyle = 'rgba(232,200,58)';
         ellipse(beaX-230/200*bea, beaY-75/200*bea, beaW-82/200*bea, beaH+35/200*bea, 0, 0, 360, true, true);
         ctx.fillStyle = 'rgba(142, 226, 237)';
         ellipse(beaX-349/200*bea, beaY-63/200*bea, beaW+1/200*bea, beaH-33/200*bea, 0, 0, 360, true, true);
         ellipse(beaX-339/200*bea, beaY-59/200*bea, beaW-77/200*bea, beaH-86/200*bea, 0, 260, 336, true, true);
         ctx.fillStyle = 'rgba(232, 200, 58)';
         ellipse(beaX-217/200*bea, beaY-155/200*bea, beaW-3/10*bea, beaH-65/200*bea, 0, 0, 360, true, true);
         ctx.fillStyle = 'rgba(69, 65, 65)';
         ellipse(beaX-154/200*bea, beaY-146/200*bea, beaW-17/20*bea, beaH-12/20*bea, 0, 0, 360, true, true);
         ellipse(beaX-184/200*bea, beaY-75/200*bea, beaW-195/200*bea, beaH-146/200*bea, 0, 0, 360, true, true);
         ctx.fillStyle = 'rgba(255, 255, 255)';
         ellipse(beaX-14/20*bea, beaY-154/200*bea, beaW-200/200*bea, beaH-150/200*bea, 0, 0, 360, true, true);

         let gant= 22/200*bea;
         let gantX= beaX-130/200*bea;
         let gantY= beaY-82/200*bea;
         let gantW= gant;
         let gantH= gant;

         ctx.fillStyle = 'rgba(242, 52, 19)';
         ellipse(gantX+22/60*gant, gantY-41/60*gant, gant+2/3*gant, gant+2/3*gant, 0, 136, 502, true, true);
         ellipse(gantX, gantY, gant, gant, 0, -32, 251, true, true);
         ctx.lineWidth = (traitB+6/200*bea);
         ctx.beginPath();
         ctx.moveTo(beaX-183/200*bea, beaY-74/200*bea);
         ctx.lineTo(beaX-15/20*bea, beaY-47/200*bea);
         ctx.lineWidth = (traitB+3/200*bea);
         ctx.moveTo(beaX-148/200*bea, beaY-43/200*bea);
         ctx.lineTo(beaX-131/200*bea, beaY-77/200*bea);
         ctx.stroke();

         let hat=bea+155/200*bea;
         let hatX=beaX-22/20*bea;
         let hatY=beaY-20/20*bea;
         let hatW=hat;
         let hatH=74/260*hat;

         ctx.lineWidth = (traitB+1/200*bea);
         ctx.fillStyle = 'rgba(217, 135, 21)';
         ellipse(hatX, hatY, hatW, hatH, 0, 0, 360, true, true);
         ellipse(hatX, hatY-10/260*hat, hatW-29/260*hat, hatH-36/260*hat, 0, 0, 185, true, true);
         ellipse(hatX, hatY+3/260*hat,hatW-168/260*hat, hatH+84/260*hat, 0, 180,360, true, true);
         ctx.fillStyle = 'rgba(207, 126, 12)';
         ellipse(hatX+21/260*hat, hatY-48/260*hat, hatW-226/260*hat, hatH-44/260*hat, 0, 53,226, true, true);
         ellipse(hatX-30/260*hat, hatY-47/260*hat, hatW-230/260*hat, hatH-50/260*hat, 0, -33,68, true, true);
      }

      function loop() {
         draw();
         requestAnimationFrame(loop);
      }
      loop();

   }
}