var player, zombie, bullet






function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255, 255, 255);

  console.log(frameCount)
  if (keyDown("UP_ARROW")) {
    player.y -= 10
  }
  if (keyDown("DOWN_ARROW")) {
    player.y += 10
  }
  if (keyDown("space")) {
    shoot();
  }

  drawZombies()
  drawSprites();
}




female.mousePressed(() => {
  player2 = createInput("name")
  player2.position(width / 2, height / 2)
  submit2 = createButton("submit")
  submit2.position(width / 2 + 50, height / 2 + 35)
  submit2.mousePressed(() => {
      girl.visible = false
      boy.visible = false
      female.hide()
      male.hide()
      player2.hide()
      submit2.hide()
      gameState = "3"
  })
})


if (gameState === "3") {
  background("black")
  if (zombieGroup.isTouching(player)) {
      for (var i = 0; i < zombieGroup.length; i++) {
          if (zombieGroup[i].isTouching(player)) {
              zombieGroup[i].destroy()
              gameState = "4"

              heart3.visible = false
              heart2.visible = true
              heart1.visible = false
              console.log("2 went")


          }
      }
  }
}

if(gameState==="4"){
  background("black")
  console.log("3 went")
}
