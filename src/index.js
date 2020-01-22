import  * as PIXI from 'pixi.js'

const app = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight
})
document.body.appendChild(app.view)

app.loader.add('logo', './assets/logo.png')
app.loader.load(() => {
  const sprite = PIXI.Sprite.from('logo')
  sprite.anchor.set(.5)
  app.stage.addChild(sprite)

  sprite.x = app.screen.width * .5
  sprite.y = app.screen.height * .5

  var size = Math.min(app.screen.width, app.screen.height) * .8
  sprite.width = size
  sprite.height = size

  app.ticker.add(delta => {
    sprite.rotation += .02 * delta
  })
})


