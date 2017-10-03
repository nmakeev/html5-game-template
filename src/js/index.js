import * as PIXI from 'pixi.js';

var app = new PIXI.Application({
    width: 760,
    height: 760,
    backgroundColor: '0xFFFFFF'
});
document.body.appendChild(app.view);


var graphics = new PIXI.Graphics();

graphics.beginFill(0xFF0000);

graphics.drawRect(0, 0, 100, 100);
graphics.endFill();

app.stage.addChild(graphics);

graphics.x = graphics.y = 100;
