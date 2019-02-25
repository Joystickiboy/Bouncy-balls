let x;
let y;

let r = 100;

let xSpeed = 10;
let ySpeed = 10;

let player;


function setup(){
    createCanvas(windowWidth - 10, windowHeight - 20);
    x = random(windowWidth / 2 - 100, windowWidth / 2 + 100);
    y = random(windowHeight / 2 - 100, windowHeight / 2 + 100);
    console.log(height+";"+width);
    //player = new Player();
}

function draw(){
    background(0);


    //######### Bouncing square beginning
    fill(255);
    ellipse(x, y, r, r)

    x += xSpeed;
    y += ySpeed;


    if (x >= width - (r/2)){
        x = width - (r/2);
        xSpeed = -xSpeed;
    } else if (x - (r/2) <= 0){
        x = r/2;
        xSpeed = -xSpeed;
    }
    if (y >= height - (r/2)){
        y = height - (r/2);
        ySpeed = -ySpeed;
    } else if(y - (r/2)<= 0){
        y = r/2;
        ySpeed = -ySpeed;
    }
    //######### Bouncing square end
    /*player.show();
    player.move();*/

    /*if (x > player.x - (player.width/2) && x < player.x + (player.width/2) && (y + (r/2 + 10)) >= (player.height)){
       ySpeed = -ySpeed;
    }*/
   
}

/*function keyReleased(){
    player.setDir(0);
}*/

/*function keyPressed(){
    if (keyCode == RIGHT_ARROW){
        player.setDir(1);
    } else if (keyCode == LEFT_ARROW) {
        player.setDir(-1);
    }
}*/