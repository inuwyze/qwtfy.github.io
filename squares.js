const canvas=document.getElementById('canvas');
const ctx=canvas.getContext('2d');

square1={
    h:100,
    w:100,
    dx:2,
    dy:4,
    x:0,
    y:0,
    c:'black'
}
square2={
    h:100,
    w:100,
    dx:-2,
    dy:-2,
    x:200,
    y:250,
    c:'red'
}

function drawSquare(square){
    ctx.beginPath();
    ctx.rect(square.x,square.y,square.w,square.h);
    ctx.fillStyle=square.c;
    ctx.fill();
    ctx.closePath();
}

function moveSquare(){
    square1.x+=square1.dx;
    square1.y+=square1.dy;
    square2.x+=square2.dx;
    square2.y+=square2.dy;

    // left right wall collision
    if(square1.x<0 || square1.x+square1.w>canvas.width)
        square1.dx*=-1;
    if(square2.x<0 || square2.x+square2.w>canvas.width)
        square2.dx*=-1;

    // top bot wall collsion 
    if(square1.y<0 || square1.y+square1.h>canvas.height)
        square1.dy*=-1;
    if(square2.y<0 || square2.y+square2.h>canvas.height)
        square2.dy*=-1;

        // square to square collsion

        if (square1.x < square2.x + square2.w &&
            square1.x + square1.w > square2.x &&
            square1.y < square2.y + square2.h &&
            square1.y + square1.h > square2.y) {
             // collision detected!
             console.log('collision')
         }
        // sides
        if(square2.x<square1.x+square1.w&&square1.x<square2.x+square2.w&&(Math.abs(square1.y-square2.y)<70))
            {
                console.log('sides');
                // console.log(square1.x,square1.x+square1.w,square2.x)
                square1.dx*=-1;
                square2.dx*=-1;
            }
        else if((square2.y<=square1.y+square1.h&&square1.y<=square2.y+square2.h) && (Math.abs(square1.x-square2.x)<70))
            {
                console.log('tops');
                
                square1.dy*=-1;
                square2.dy*=-1;
                
             

            }
}

function update(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawSquare(square1);
    drawSquare(square2);
    moveSquare();
    requestAnimationFrame(update);
}
update();