let Circle = function (x,y,r){
    this.x = x;
    this.y = y;
    this.r = r;
}
function createCircle(){
    let x = Math.random()*window.innerWidth;
    let y = Math.random()*window.innerHeight;
    let r = Math.random()*100;
    let color = getRandomColor();
    let circle = new Circle(x,y,r);
    let ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.beginPath();
    ctx.arc(x,y,r,0,2*Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}
function getRandomColor(){
    let r = getRandomHex();
    let g = getRandomHex();
    let b = getRandomHex();
    return "rgb("+r+","+g+","+b+")";
}
function getRandomHex(){
    return Math.floor(Math.random()*255);
}
function getMultipleCircle(x){
    for (let i = 0; i < x; i++) {
        createCircle();
    }
}
getMultipleCircle(50);