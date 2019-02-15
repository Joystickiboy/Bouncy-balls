let x;
let y;

let xSpeed = 20;
let ySpeed = 20;

let player;


function setup(){
    createCanvas(windowWidth - 10, windowHeight - 20);
    x = random(windowWidth / 2 - 100, windowWidth / 2 + 100);
    y = random(windowHeight / 2 - 100, windowHeight / 2 + 100);
    console.log(height+";"+width);
    player = new Player();
}

function draw(){
    background(0);


    //######### Bouncing square beginning
    fill(255);
    ellipse(x, y, 200, 200)

    x += xSpeed;
    y += ySpeed;


    if (x >= width - 100){
        x = width - 100;
        xSpeed = -xSpeed;
    } else if (x - 100 <= 0){
        x = 100;
        xSpeed = -xSpeed;
    }
    if (y >= height - 100){
        y = height - 100;
        ySpeed = -ySpeed;
    } else if(y - 100<= 0){
        y = 100;
        ySpeed = -ySpeed;
    }
    //######### Bouncing square end
    player.show();
    player.move();

    if (x > player.x - (player.width/2) && x < player.x + (player.width/2) && (y + 100) >= (player.height)){
       ySpeed = -ySpeed;
    }
   
}

function keyReleased(){
    player.setDir(0);
}

function keyPressed(){
    if (keyCode == RIGHT_ARROW){
        player.setDir(1);
    } else if (keyCode == LEFT_ARROW) {
        player.setDir(-1);
    }
}