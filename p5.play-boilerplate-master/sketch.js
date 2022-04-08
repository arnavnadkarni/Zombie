var boy
// var girl
var male
var gameState = "1"
var bgImg, bg2Img, player, playerImg, zombieImg, boyImg, girlImg

var zombieGroup, bulletGroup

var gameOver

var heart1, heart1img
var heart2, heart2img
var heart3, heart3img

var explosion, lose

// var life = 3

function preload() {
    bgImg = loadImage("assets/bg.jpeg")
    bg2Img = loadImage("assets/bg2.jfif")
    boyImg = loadImage("assets/boy.png")
    girlImg = loadImage("assets/girl.png")
    playerImg = loadImage("assets/shooter_2.png")
    playerImg2 = loadImage("assets/shooter_3.png")
    zombieImg = loadImage("assets/zombie.png")
    heart1img = loadImage("assets/heart_1.png")
    heart2img = loadImage("assets/heart_2.png")
    heart3img = loadImage("assets/heart_3.png")
    gameOverImg = loadImage("assets/gameover.jpg")
    explosion = loadSound("assets/explosion.mp3")
    lose = loadSound("assets/lose.mp3")
}
function setup() {
    createCanvas(windowWidth, windowHeight)
    boy = createSprite(100, 100, 20, 20)
    // girl = createSprite(200, 100, 20, 20)
    boy.visible = true
    // girl.visible = false
    male = createButton("click to play")
    // female = createButton("female")
    player = createSprite(200, 200, 50, 50);
    player.debug = true
    player.setCollider("rectangle", 0, 0, 200, 200)
    player.addImage(playerImg)
    player.scale = 0.3
    heart1 = createSprite(width - 100, 50, 50, 50)
    heart1.addImage(heart1img)
    heart1.scale = 0.25
    heart1.visible = false

    heart2 = createSprite(width - 100, 50, 50, 50)
    heart2.addImage(heart2img)
    heart2.scale = 0.25
    heart2.visible = false

    heart3 = createSprite(width - 100, 50, 50, 50)
    heart3.addImage(heart3img)
    heart3.scale = 0.25
    heart3.visible = false


    zombieGroup = new Group()
    bulletGroup = new Group()

}


function draw() {
    if (gameState === "1") {
        boy.visible = true
        // girl.visible = true
        background(bg2Img)
        player.visible = false
        male.position(boy.x - 20, boy.y + 20)
        // female.position(girl.x - 20, girl.y + 20)
        heart1.visible = false
        heart2.visible = false
        heart3.visible = false
        // gameOver.visible = false
        image(boyImg, 80, 70, 50, 50)
        image(girlImg, 115, 70, 50, 50)



        male.mousePressed(() => {
            player1 = createInput().attribute("placeholder", "name")
            player1.position(width / 2, height / 2)
            submit1 = createButton("submit")
            submit1.position(width / 2 + 50, height / 2 + 35)
            submit1.mousePressed(() => {
                // girl.visible = false
                boy.visible = false
                // female.hide()
                male.hide()
                player1.hide()
                submit1.hide()
                gameState = "2"
            })
        })
    }


    if (gameState === "2") {
        background(bgImg)
        player.visible = true
        // girl.visible = false
        boy.visible = false
        heart3.visible = true
        heart2.visible = false
        heart1.visible = false
        // gameOver.visible = false
        // female.hide()
        male.hide()
        if (keyDown("UP_ARROW")) {
            player.y -= 10
        }
        if (keyDown("DOWN_ARROW")) {
            player.y += 10
        }
        if (keyDown("space")) {
            player.addImage(playerImg2)
            shoot();
        }

        if (bulletGroup.isTouching(zombieGroup)) {
            

            for (var i = 0; i < zombieGroup.length; i++) {
                if (zombieGroup[i].isTouching(bulletGroup)) {
                    zombieGroup[i].destroy()
                    bulletGroup.destroyEach()
                    explosion.play()
                }
            }
        }


        if (zombieGroup.isTouching(player)) {
            
            for (var i = 0; i < zombieGroup.length; i++) {
                if (zombieGroup[i].isTouching(player)) {
                    zombieGroup[i].destroy()
                    lose.play()
                    gameState = "3"
                    console.log("1 heart went")

                }
            }
        }

        drawSprites();
        drawZombies()
    }

    if (gameState === "3") {
        background(bgImg)
        player.visible = true
        // girl.visible = false
        boy.visible = false
        heart3.visible = false
        heart2.visible = true
        heart1.visible = false
        // gameOver.visible = false

        // female.hide()
        male.hide()
        if (keyDown("UP_ARROW")) {
            player.y -= 10
        }
        if (keyDown("DOWN_ARROW")) {
            player.y += 10
        }
        if (keyDown("space")) {
            player.addImage(playerImg2)
            shoot();
        }

        if (bulletGroup.isTouching(zombieGroup)) {
           
            for (var i = 0; i < zombieGroup.length; i++) {
                if (zombieGroup[i].isTouching(bulletGroup)) {
                    zombieGroup[i].destroy()
                    bulletGroup.destroyEach()
                    explosion.play()
                }
            }
        }


        if (zombieGroup.isTouching(player)) {
            for (var i = 0; i < zombieGroup.length; i++) {
                if (zombieGroup[i].isTouching(player)) {
                    zombieGroup[i].destroy()
                    lose.play()

                    gameState = "4"

                    console.log("2 heart went")

                }
            }
        }

        drawSprites();
        drawZombies()
    }
    if (gameState === "4") {
        background(bgImg)
        player.visible = true
        // girl.visible = false
        boy.visible = false
        heart3.visible = false
        heart2.visible = false
        heart1.visible = true
        // gameOver.visible = false

        // female.hide()
        male.hide()
        if (keyDown("UP_ARROW")) {
            player.y -= 10
        }
        if (keyDown("DOWN_ARROW")) {
            player.y += 10
        }
        if (keyDown("space")) {
            player.addImage(playerImg2)
            shoot();
        }

        if (bulletGroup.isTouching(zombieGroup)) {
            
            for (var i = 0; i < zombieGroup.length; i++) {
                if (zombieGroup[i].isTouching(bulletGroup)) {
                    zombieGroup[i].destroy()
                    bulletGroup.destroyEach()
                    explosion.play()

                }
            }
        }


        if (zombieGroup.isTouching(player)) {
            for (var i = 0; i < zombieGroup.length; i++) {
                if (zombieGroup[i].isTouching(player)) {
                    zombieGroup[i].destroy()
                    lose.play()
                    gameState = "5"
                    console.log("3 heart went")

                }
            }
        }

        drawSprites();
        drawZombies()
    }

    if (gameState === "5") {
        background(gameOverImg)
        textSize(50)
        fill("white")
        text("PRESS SPACE TO", width / 2 - 200, 1200)
        // gameOver.visible = true
        // gameOver = createSprite(width / 2, height / 2, 100, 100)
        // gameOver.addImage(gameOverImg)
        // // gameOver.visible = false

        if (keyDown("space")) {
            location.reload()
        }
    }

}




function shoot() {
    bullet = createSprite(player.x, player.y, 5, 5)
    bullet.velocityX = 15
    bulletGroup.add(bullet)

}

function drawZombies() {
    if (frameCount % 60 === 0) {
        zombie = createSprite(100, 100, 40, 40)
        zombie.addImage(zombieImg)
        zombie.x = Math.round(random(windowWidth / 2, windowWidth))
        zombie.y = Math.round(random(0, windowHeight))
        zombie.scale = 0.15

        zombie.velocityX = -3
        zombieGroup.add(zombie)
    }

}