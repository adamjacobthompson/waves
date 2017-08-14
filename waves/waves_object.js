function Waves (xposition, yposition, zposition, xspeed, yspeed, s, speedtheta) {
    this.xposition = xposition;
    this.yposition = yposition;
    this.zposition = zposition;
    this.xspeed = xspeed;
    this.yspeed = yspeed;
    this.speedtheta = speedtheta;
    this.s = s;
    this.opac = 255;
    this.theta = 0;
    
    //this.f = loadFont('Arial.ttf');
    
    
    this.index = int(random(individualwords.length));
    this.textHolder = individualwords[this.index];
    //textHolder = textHolder.toLowerCase();
  
    this.display = function() {
        //this.theta += this.speedtheta;

        fill(255, 255, 255, this.opac);
        textFont(f);
        textAlign(CENTER); // PROBLEM
        textSize(this.zposition);
        //push();
        //translate(0, 0);
        //rotateX(radians(this.theta));
        //rotateY(radians(this.theta));
        //rotateZ(radians(this.theta));
        text(this.textHolder, this.xposition, this.yposition); // ALSO PROBLEM?
        //pop();
    }
    
    this.move = function() {
        this.xposition = this.xposition + this.xspeed;
        this.yposition = this.yposition + this.yspeed;
        if (this.xposition > width+10) {
        this.xposition = -100;
    }
}
    
    this.sink = function() {
        if (this.xposition < width) {
            if (this.s > 100 ) {
            this.zposition = this.zposition - 0.01;
            } else {
            this.zposition = this.zposition + 0.01;
            } 
        }
      
        if (this.zposition < 1) {
        this.zposition = 1;
        }
        
        if (this.zposition > 25) {
      this.zposition = 25;
        }
    
    if (this.xposition < width) {
      if (this.s > 100 ) {
      this.opac = this.opac - 0.25;
      } else { 
        //(s < 100) {
        this.opac = this.opac + 0.25;
        
        if (this.yposition < 150) {
          this.yposition = this.yposition + .05;
        }
        
        if (this.yposition > height - 150) {
          this.yposition = this.yposition - .05;
        }
    }
  }
    }
    }
