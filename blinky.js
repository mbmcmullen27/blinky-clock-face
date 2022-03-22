const frames = require('bw-frames.js')
let i = 0;
var opts = {scale:0.8}
function draw() {
  i=i<4?i+1:i=0;
  g.drawImage(imgs[i],0,10,opts)
  setWatch(draw, (process.env.HWVERSION==2) ? BTN1 : BTN2)
}
g.drawString("BLINKY",0,0)
Bangle.setLCDPower(1);
draw()