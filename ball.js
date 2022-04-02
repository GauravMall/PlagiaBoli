class Ball {
    constructor(mag, angle, size, gravity) {    
      this.size = size
      this.pos = createVector(size / 2, height - size / 2)
      
      if (mag != null && angle != null) {
        this.run = true;
        var vel_x = mag * cos(angle)
      var vel_y = mag * sin(angle)
      this.velocity = createVector(vel_x, -vel_y)
      
      this.acceleration = createVector(0, gravity)
      this.acceleration.setMag(0.1)
      } else {
        this.run = false;
      }
    }

    update() {
      if (this.run) {
        this.velocity.add(this.acceleration)
      this.pos.add(this.velocity)
      }
    }

    show() {
        stroke(255)
        strokeWeight(2)
        fill(255, 100)
        ellipse(this.pos.x, this.pos.y, this.size)
      
      if(this.pos.x > (width - this.size/2) || this.pos.y > (height - this.size / 2)) {
        this.acceleration = createVector();
        this.velocity = createVector();
      }
    }
}
