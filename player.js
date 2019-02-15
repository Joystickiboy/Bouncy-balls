function Player(){
    this.x = width / 2;
    this.xdir = 0;
    this.width = width / 8;
    this.height = height - 300;

    this.show = function(){
        fill(255, 255, 50);
        rectMode(CENTER);
        rect(this.x, this.height, this.width, 50);
    }

    this.setDir = function(dir){
        this.xdir = dir;
    }

    this.move = function() {
        this.x += this.xdir *30;
    }

}