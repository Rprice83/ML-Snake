scl = 20;

function Snake() {
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.tail = [];
  this.total = 0;
  
  this.show = function() {
    fill(255);
    for(var i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl/2, scl/2);
    }
    rect(this.x, this.y, scl/2, scl/2);
  }
  
  this.update = function() {
    for(var i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i+1];
    }
    if(this.total >= 1) {
      this.tail[this.total - 1] = createVector(this.x, this.y);
    }
    
    this.x += this.xspeed * scl/2;
    this.y += this.yspeed * scl/2;
    
    this.x = constrain(this.x, 0, width-10);
    this.y = constrain(this.y, 0, height-10);
    
  }
  
  this.eat = function(pos) {
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1) {
      this.total++;
      return true;
    } else {
      return false;
    }
  }
  
  this.death = function() {
    for(var i = 0; i < this.tail.length; i++) {
      var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        console.log('Game over, restarting....')
        this.total = 0;
        this.tail = [];
      }
    }
  }
}
