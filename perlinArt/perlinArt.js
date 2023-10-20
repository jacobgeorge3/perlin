let particles = []; //Array or particles
const num = 1000; //Number of particles in the array
const noiseScale = 0.01;//Affects the distribution of noise
function setup() {
  createCanvas(400,400);
  for(let i = 0; i < num; i++){
      particles.push(createVector(random(width), random(height)));//Creating random vectors that equate to particle positions
  }
  stroke(255);
}


function draw() {
  background(0, 10);
  for(let i = 0; i < num; i++){
    let p = particles[i];
    point(p.x, p.y);//Placing particles at randomly created positions
    let n = noise(p.x * noiseScale, p.y * noiseScale);
    let a = TAU * n;//TAU = 2 * pi. Creating a random angle per particle
    //Trig to convert angle to x and y vals
    p.x += cos(a);
    p.y += sin(a);
    
    if(!onScreen(p)){//Checking if on screen
       p.x = random(width); //Assigning new random values if not on screen
       p.y = random(height);
    }
  }
}

function mouseReleased(){
  noiseSeed(millis());
}

function onScreen(v){
   return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
}
