let ball
let velocity
let angle
let size

let angle_text
let velocity_text

let time_text
let h_max_text
let path_text

let g

function setup() {
  g = 9.81
  
  createCanvas(800, 400).parent('model_div')

  velocity_text = createP("Ταχύτητα: 4 m/s").parent('model_div')
  velocity = createSlider(0, 15, 4).parent('model_div')
  angle_text = createP("Γωνία: 45°").parent('model_div')
  angle = createSlider(0, 90, 45).parent('model_div')
  createP("Μέγεθος:").parent('model_div')
  size = createSlider(10, 40, 32).parent('model_div')
  
  velocity.input(() => velocity_text.html("Ταχύτητα: " + velocity.value() + " m/s"))
  angle.input(() => angle_text.html("Γωνία: " + angle.value() + "°"))
  size.input(() => ball = new Ball(null, null, size.value()))
  
  btn = createButton("Έναρξη").parent('model_div')
  btn.mousePressed(configure)
  
  createP("Δεδομένα για τη κίνηση:").parent('model_div')
  time_text = createP("Ολικός Χρόνος Κίνησης: ").parent('model_div')
  path_text = createP("Βεληνεκές: ").parent('model_div')
  h_max_text = createP("Μέγιστος Ύψος: ").parent('model_div')

  configure()
}

function draw() {
  background(43)
  ball.update()
  ball.show()
}

function configure() {
  angle_val = angle.value() * PI / 180
  
  time = 2 * velocity.value() * sin(angle_val) / g
  path = 2 * velocity.value() ^ 2 * sin(2 * angle_val) / g
  h_max = velocity.value() ^ 2 * sin(angle_val) ^ 2 / (2 * g)
  
  time_text.html("Ολικός Χρόνος Κίνησης: " + time + " sec")
  path_text.html("Βεληνεκές: " + path + " m")
  h_max_text.html("Μέγιστο Ύψος: " + h_max + " m")
  
  ball = new Ball(velocity.value(), angle_val, size.value(), g);
}
