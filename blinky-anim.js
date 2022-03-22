let i = 0;
var opts = {scale:0.8}
function draw() {
  if (i<=4) {
    g.drawImage(imgs[i],0,10,opts)
    setTimeout(draw,15)
    i++
  } else {
    i=0
    setTimeout(draw,2000)
  }
}
g.drawString("BLINKY",0,0)
Bangle.setLCDPower(1);
draw()