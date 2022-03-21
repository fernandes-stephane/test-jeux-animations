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
        //               <------- !!! BEGIN ANNIMATION !!! ------->                //
        var Scene;
        var ss =  'sans-serif';
        var f = 'cursive';
        var xx = -200;
        var Speed = 4;
        var hooperLeftDirection = false;
        var hooperRightDirection = false;

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

        function rect(x, y, w, h, stroke=true, fill=true) {
            ctx.beginPath();
            ctx.rect(x, y, w, h);
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

        var roundRect = function (x, y, width, height, radius) {
            if (width < 2 * radius) radius = width / 2;
            if (height < 2 * radius) radius = height / 2;
            ctx.beginPath();
            ctx.moveTo(x + radius, y);
            ctx.arcTo(x + width, y, x + width, y + height, radius);
            ctx.arcTo(x + width, y + height, x, y + height, radius);
            ctx.arcTo(x, y + height, x, y, radius);
            ctx.arcTo(x, y, x + width, y, radius);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        };

        var Button = function (config) {
            this.x = config.x || 200;
            this.y = config.y || 200;
            this.w = config.w || 100;
            this.h = config.h ||40;
            this.color = config.color || 'rgb(255, 255, 255)';
            this.textFont = config.textFont || ss;
            this.textColor = config.textColor || 'rgb(0, 0, 0)';
            this.label = config.label;
        };

        Button.prototype.draw = function() {
            ctx.lineWidth = 2;
            ctx.fillStyle = 'rgba(196, 157, 157)';
            roundRect(this.x, this.y, this.w, this.h, 8);
            ctx.fill();
            ctx.stroke();
            ctx.font= `16px ${ss}`;
            ctx.textAlign="center";
            ctx.textBaseline = 'middle';
            ctx.fillStyle = 'rgba(0, 0, 0)';
            ctx.fillText(this.label, this.x+(this.w/2), this.y+(this.h/2));
        };

        var btn = new Button ( {
            x: 50,
            y: 320,
            label: "help ",
            color : 'rgb(255, 255, 255)'
        });

        var btn2 = new Button ( {
            x: 250,
            y: 320,
            label: "Start ",
        });

        var btn3 = new Button ( {
            x :30, 
            y: 30, 
            label: "back"
        });

        var DrawScene1 = function () {
            this.xText = -195;
        }

        DrawScene1.prototype.draw = function () {
            anime.style.background = 'rgb(84, 43, 43)';
            ctx.fillStyle = 'rgb(84, 43, 43)';
            ctx.fillRect(0, 0, 400, 400);
            let text = ["HOOPER","CAN'T","DRIVE"];
            let yText = 75;
            ctx.textAlign="center";
            ctx.textBaseline = 'middle';
            ctx.font= `80px ${f}`;
            ctx.fillStyle = 'rgb(0,0,0)';
            for (let i = 0; i < text.length; i++) {
                ctx.fillStyle = 'rgb(0,0,0)';
                ctx.fillText(text[i], this.xText-5, yText);
                ctx.fillStyle = 'rgb(255,0,0)';
                ctx.fillText(text[i], this.xText, yText-5);
                yText += 85;
            }
            btn.draw();
            btn2.draw();
        };

        DrawScene1.prototype.update = function() {
            this.xText += 0.5;
        }

        var drawScene2 = function () {
            anime.style.background = 'rgb(84, 43, 43)';
            ctx.fillStyle = 'rgb(84, 43, 43)';
            ctx.fillRect(0, 0, 400, 400);
            ctx.textAlign="center";
            ctx.textBaseline = 'middle';
            ctx.font= `30px ${ss}`;
            ctx.fillStyle = 'rgba(0, 0, 0)';
            let text = ["the rabbits have fled and are","walking on the road. Help","Hooper get home, but be",
            "careful not to crush the","rabbit. Use the left arrow to","turn left and the right arrow","to turn to the right"];
            let yText = 115;
            for (let i = 0; i < text.length; i++) {
                ctx.fillText(text[i], 200, yText);
                yText += 30;
            }
            btn3.draw();
        };

        // function for draw the sun
        var Sun = function() {
            // sun.2
            ctx.fillStyle = 'rgba(217, 66, 24, 0.78)';
            ellipse(200, 186, 350, 280, 180, 360, false);
            // sun.1
            ctx.fillStyle = 'rgb(227, 74, 28)';
            ellipse(200, 186, 200, 180, 180, 360);
        };

        // function for add properties of Hooper
        var Hooper = function ( x, y, t) {
            this.x = x;
            this.y = y;
            this.t = t;
            this.sticks = 0;
        };

        // function for draw Hooper
        Hooper.prototype.draw= function() {  
            var w = this.t*2;
            var h = this.t*2;
            var sw = 2/30*this.t;
            //head
            ctx.lineWidth = sw;
            ctx.fillStyle = 'rgb(209, 179, 88)';
            ellipse(this.x, this.y, w, h);
            //cokbit.2
            ctx.fillStyle = 'rgb(224, 113, 49)';
            triangle(this.x-20/30*this.t, this.y+20/30*this.t,
                     this.x+0/30*this.t, this.y+0/30*this.t,
                     this.x+20/30*this.t, this.y+20/30*this.t);
            // cokbit
            rect(this.x - 32/30*this.t, this.y+20/30*this.t, w+6/30*this.t, h-30/30*this.t);
            // roue gauche
            ctx.fillStyle = 'rgb(69, 69, 69)';
            roundRect(this.x - 82/30*this.t, this.y+0/30*this.t, w-10/30*this.t, h, 12/30*this.t);
            // roue droite
            roundRect(this.x+32/30*this.t, this.y+0/30*this.t, w-10/30*this.t, h, 12/30*this.t);
            // aileron_central
            ctx.fillStyle = 'rgb(122, 122, 122)';
            rect(this.x-70/30*this.t, this.y+-15/30*this.t, w+80/30*this.t, h+-51/30*this.t);
            // porte aileron_droite
            rect(this.x-27/30*this.t, this.y+-10/30*this.t, w-53/30*this.t, h+9/30*this.t);
            // porte aileron_gauche
            rect(this.x+21/30*this.t, this.y+-10/30*this.t, w-53/30*this.t, h+9/30*this.t);
        };

        // function for draw move Hooper left
        Hooper.prototype.left= function() {
            var w = this.t*2;
            var h = this.t*2;
            var sw = 2/30*this.t;
            ctx.lineWidth = sw;
            if (this.x > 90) {
                // roue gauche.2
                ctx.fillStyle = 'rgb(69, 69, 69)';
                roundRect(this.x - 98/30*this.t, this.y+20/30*this.t,
                w-23/30*this.t, h-24/30*this.t, 9/30*this.t);
                //depart fumée
                ctx.fillStyle = 'rgb(135, 136, 138)';
                triangle(this.x+70/30*this.t, this.y+60/30*this.t,
                    this.x+112/30*this.t, this.y+31/30*this.t,
                    this.x+122/30*this.t, this.y+59/30*this.t);
                // fumée_detail.1
                ellipse(this.x + 115/30*this.t, this.y+45/30*this.t,
                w+-26/30*this.t, h-29/30*this.t,
                255, 465);
                //fumée_detail.2
                ellipse(this.x + 105/30*this.t, this.y+40/30*this.t,
                w-40/30*this.t, h-39/30*this.t,
                150, 320);
                // fumée_detail.3
                ellipse(this.x + 109/30*this.t, this.y+55/30*this.t,
                w+-35/30*this.t, h-38/30*this.t, 
                -22, 195);
                this.x -= 7;
            }
        };

        // function for draw move Hooper right
        Hooper.prototype.right= function() {
            var w = this.t*2;
            var h = this.t*2;
            var sw = 2/30*this.t;
            ctx.lineWidth = sw;
            if (this.x < 310) {
                // roue droite.2
                ctx.fillStyle = 'rgb(69, 69, 69)';
                roundRect(this.x + 60/30*this.t, this.y+20/30*this.t,
                w-23/30*this.t, h-24/30*this.t, 9/30*this.t);
                //depart fumée
                ctx.fillStyle = 'rgb(135, 136, 138)';
                triangle(this.x-70/30*this.t, this.y+60/30*this.t,
                    this.x-112/30*this.t, this.y+31/30*this.t,
                    this.x-122/30*this.t, this.y+59/30*this.t);
                // fumée_detail.1
                ellipse(this.x - 115/30*this.t, this.y+45/30*this.t,
                w+-26/30*this.t, h-29/30*this.t,
                74, 343);
                //fumée_detail.2
                ellipse(this.x - 105/30*this.t, this.y+40/30*this.t,
                w-40/30*this.t, h-39/30*this.t,
                220, 390);
                // fumée_detail.3
                ellipse(this.x - 109/30*this.t, this.y+55/30*this.t,
                w+-35/30*this.t, h-38/30*this.t, 
                -11, 202);
                this.x += 7;
            }
        };

        // function for collisions
        Hooper.prototype.checkForRabbitGrab= function (rabbit) {
            if ((rabbit.x+30)>= (this.x-80) && (rabbit.x-30)<=(this.x+85) && 
                (rabbit.y+30)>= (this.y+10) && (rabbit.y-30)<=(this.y+60)) {
            this.sticks += rabbit.life;
            rabbit.b = 0;   
            rabbit.life = 0;
            }
        };

        // fuction for add properties of rabbits
        var Rabbit = function (x, y, t, b, c) {
            this.x= x;
            this.y = y;
            this.t = 35;
            this.b = 500;
            this.c = 600;
            this.w = this.t/5;
            this.h = this.t/5;
            this.life = 1;    
        };

        // function for draw rabbits
        Rabbit.prototype.draw= function() {
            ctx.lineWidth = 2;
            // paws_back
            ctx.fillStyle = 'rgb(255, 255, 255)';
            roundRect((this.x+this.c) + -1/1*this.t, this.y + 64/100*this.t, this.w + 18/10*this.t, this.h + 18/100*this.t, 20);
            // body 
            ellipse((this.x+this.c), this.y + 28/100*this.t, this.w + 13/10*this.t, this.h + 13/10*this.t);
            // left ear
            ellipse((this.x+this.c)+ -23/100*this.t, this.y + -81/100*this.t, this.w + 3/10*this.t, this.h + 15/10*this.t);
            // left ear_detail
            ctx.fillStyle = 'rgb(255, 161, 192)';
            ellipse((this.x+this.c)+ -23/100*this.t, this.y + -76/100*this.t, this.w + 1/10*this.t, this.h + 75/100*this.t);
            // right ear.1
            ctx.fillStyle = 'rgb(255, 255, 255)';
            ellipse((this.x+this.c)+ 22/100*this.t, this.y + -81/100*this.t, this.w + 3/10*this.t, this.h + 15/10*this.t, -19, 206);
            // left ear_detail
            ctx.fillStyle = 'rgb(255, 161, 192)';
            ellipse((this.x+this.c)+ 23/100*this.t, this.y + -72/100*this.t, this.w + 8/100*this.t, this.h + 56/100*this.t);
            // right ear.2
            ctx.fillStyle = 'rgb(255, 255, 255)';
            ellipse((this.x+this.c)+ 38/100*this.t, this.y + -115/100*this.t, this.w + 58/100*this.t, this.h + 16/100*this.t, 0, 360);
            // paws_front.1
            ellipse((this.x+this.c)+ -35/100*this.t, this.y + 55/100*this.t, this.w + 3/10*this.t, this.h + 9/10*this.t, 15, 185);
            // paws_front.2
            ellipse((this.x+this.c)+ 35/100*this.t, this.y + 55/100*this.t, this.w + 3/10*this.t, this.h + 9/10*this.t, -5, 165);
            // head
            ellipse((this.x+this.c), this.y + -21/100*this.t, this.w + 1/1*this.t, this.h + 8/10*this.t);
            // left eyes
            ctx.fillStyle = 'rgb(0, 0, 0)';
            roundRect((this.x+this.c)+ -36/100*this.t, this.y + -5/10*this.t, this.w, this.h + 18/100*this.t, 20);
            // right eyes
            roundRect((this.x+this.c)+ 16/100*this.t, this.y + -5/10*this.t, this.w, this.h + 18/100*this.t, 20);
            // left tooth
            ctx.fillStyle = 'rgb(255, 255, 255)';
            rect((this.x+this.c) -2/10*this.t, this.y + 25/100*this.t, this.w, this.h + 3/100*this.t);
            // right tooth
            rect((this.x+this.c)+0/100*this.t , this.y + 25/100*this.t, this.w, this.h + 3/100*this.t);
            // left mouth
            ellipse((this.x+this.c)+ -20/100*this.t, this.y + 10/100*this.t, this.w + 3/10*this.t, this.h + 3/10*this.t, 34, 180);
            // right mouth
            ellipse((this.x+this.c) + 2/10*this.t, this.y + 1/10*this.t, this.w + 3/10*this.t, this.h + 3/10*this.t, 0, 148);
            // nose
            ctx.fillStyle = 'rgb(255, 161, 192)';
            ellipse((this.x+this.c), this.y, this.w, this.h);
            // blood
            ctx.fillStyle = 'rgb(255, 0, 0)';
            ellipse((this.x+this.c)+this.b, this.y, 60, 80);
        };

        Rabbit.prototype.update = function() {
            this.y += Speed;
            if (this.y >145) { 
                this.c = 0;
            }
        }

        var WhiteStroke = function (x, y) {
            this.x = x;
            this.y = y;
        };

        WhiteStroke.prototype.draw = function() {
            ctx.lineWidth = 2;
            ctx.fillStyle = 'rgb(255, 255, 255)';
            rect(this.x, this.y, 20, 100);
        };

        WhiteStroke.prototype.update = function() {
            this.y += Speed;
            if (this.y >= 500) {
                this.y = 50;
            }
        }

        // road
        var road = [];

        // for white strokes
        for ( let i= 0; i<3; i++) {
            road.push(150+i*150);
        }

        var wStrokes_array = [];

        // bandes blanches_route
        for (let i = 0; i<road.length; i++) {
            for (let y = 0; y < road[i]; y++) {
                
            let wStrokes = new WhiteStroke(10+y*180, road[i]);
            wStrokes_array.push(wStrokes);

            }
        }

        // loop for add rabbits
        var rabbit = [];

        for (var i = 0; i < 10; i++) {
            rabbit.push( new Rabbit( Math.floor(Math.random() * (350 - 50) + 50),-250*i -500 ));
        }

        // function for add properties of buildings (bat) 
        var bat = function (x, y) {
            x = x;
            y = y;
            ctx.fillStyle = 'rgb(84, 82, 82)';
            rect(x-24, y+9, 17, 30);
            rect(x, y, 20, 39);
            rect(x-15, y+24, 30, 15);
        };
        var bats = [];

        var drawScene1 = new DrawScene1();

        function Scene1() {
            drawScene1.draw();
            if (drawScene1.xText !== 200) {
                drawScene1.update();
            }
            scene1 = requestAnimationFrame(Scene1);
        }

        function Scene2() {
            drawScene2();
            scene2 = requestAnimationFrame(Scene2);
        }

        function keyW(e) {
            if(e.keyCode === 37){
               hooperLeftDirection = true;
            } else if (e.keyCode === 39){
                hooperRightDirection = true;
            };
        }

        function keyWWW(e) {
            if(e.keyCode === 37){
               hooperLeftDirection = false;
            } else if (e.keyCode === 39){
                hooperRightDirection = false;
            };
        }

        document.onkeydown = keyW;
        document.onkeyup = keyWWW;


        function changeScene(e) {

            let x = e.clientX-anime.offsetLeft;
            let y = e.clientY-anime.offsetTop;

            if (Scene == 1 && x > btn.x && x < (btn.x + btn.w) &&
            y > btn.y && y < (btn.y + btn.h)) {
                Scene = 2;
                cancelAnimationFrame(scene1);
                Scene2();}

            if (Scene == 1 && x > btn2.x && x < (btn2.x + btn2.w) &&
            y > btn2.y && y < (btn2.y + btn2.h)) {
                Scene = 3;
                cancelAnimationFrame(scene1);
                Scene3();}

            if (Scene == 2 && x > btn3.x && x < (btn3.x + btn3.w) &&
            y > btn3.y && y < (btn3.y + btn3.h)) {
                Scene = 1;
                cancelAnimationFrame(scene2);
                Scene1();}
        }

        // new properties for Hooper
        var hooper = new Hooper (200, 325, 30);

        function Scene3() {

            // STATIC
            //road gray
            ctx.fillStyle = 'rgb(94, 105, 105)';
            rect(0, 0, 400, 400);
            // loop for draw whites strokes on raod
            for (let i = 0; i < wStrokes_array.length; i++) {
                wStrokes_array[i].draw();
                wStrokes_array[i].update();
            }
            //background.2
            ctx.lineWidth = 2;
            ctx.fillStyle = 'rgb(224, 201, 201)';
            rect(-1, -3, 403, 190);
            // draw sun
            Sun();
            // boucle for bats
            for (var i = 0; i <4; i++) {
                bat(115*i+30,147);
            }
            // loop for draw rabbits && function for collisions
            for (let i = 0; i < rabbit.length; i++) {
                rabbit[i].draw();
                rabbit[i].update();
                hooper.checkForRabbitGrab(rabbit[i]);
            }

            // function if for LOOSE
            if (hooper.sticks >= 2) {
                ctx.textAlign="center";
                ctx.textBaseline = 'middle';
                ctx.fillStyle = 'rgb(255,0,0)';
                ctx.font= `40px ${ss}`;
                ctx.fillText("YOU LOOSE!!", 200, 50);
            }
            
            // function if for WIN
            else if (hooper.sticks < 30 && rabbit[(rabbit.length-1)].y>500) {
                ctx.textAlign="center";
                ctx.textBaseline = 'middle';
                ctx.fillStyle = 'rgb(100, 200, 300)';
                ctx.font= `40px ${ss}`;
                ctx.fillText("YOU WIN!!", 200, 50);
                Speed = 0;

                if(hooper.y >= 185) {
                    hooper.y -=2;
                    hooper.t -=0.2;

                    if (hooper.y >= 300 && hooper.y <= 325) {
                        
                        hooperLeftDirection = true;
                        hooperRightDirection = true;
                    } else {
                        hooperLeftDirection = false;
                        hooperRightDirection = false;
                    }
                } else if (hooper.y <= 185 && hooper.t > 2) {
                    hooper.t -=0.1;
                } else if (hooper.t <= 2) {
                    hooper.x =600;
                }
            }
            
            if (hooperLeftDirection) {
                hooper.left();
            };
            if (hooperRightDirection) {
                hooper.right();
            };
            hooper.draw();
            var scene3 = requestAnimationFrame(Scene3);
        }

        Scene = 1;
        anime.onclick = changeScene;
        Scene1();
    }
}