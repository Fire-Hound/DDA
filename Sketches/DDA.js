let x1 = 0
let y1 = 0
let x2 = 1000
let y2 = 1000
let dx;
let dy;

function setup()
{
  createCanvas(1000,1000)
  background(0)
  dx = abs( x2 - x1 )
  dy = abs( y2 - y1 )
}

function draw()
{
  let pixel;
  stroke(255)
  if(dx>dy) pixel=dx
  else      pixel=dy

  dx = dx/pixel
  dy = dy/pixel

  let endx
  if(x1<x2)
  {
    x = x1
    y = y1
    endx = x2
  }
  else
  {
    x = x2
    y = y2
    endx = x1
  }

  while(x<endx)
  {
    point(x,y)
    x += dx
    y += dy
  }
}
