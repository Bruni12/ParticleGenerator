const canvas = document.getElementById("canvas1");
console.log(canvas);
const ctx = canvas.getContext('2d');
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
let particleArray;

// create constructor function
function Particle(x,y, directionX, directionY, size, color){
    this.x = x,
    this.y = y;
    this.directionX = directionX;
    this.directionY = directonY;
    this.size = size;
    this.color = color;
}
// add draw method to particle prototype
Particle.prototype.draw = function(){
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
}
const particle1 = new Particle(10,10,1,1,20, 'white');