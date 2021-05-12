namespace SpriteKind {
    export const Big_Bad_Boss = SpriteKind.create()
    export const Boss_Projectile = SpriteKind.create()
    export const Poison_Projectile = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Poison_Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy()
    for (let index = 0; index < randint(2, 10); index++) {
        timer.after(1000, function () {
            info.changeLifeBy(-1)
        })
    }
})
function make_big_bad_boss () {
    Big_Bad_boss_health = 100
    Boss = sprites.create(Big_Bad_Boss_Images.shift(), SpriteKind.Big_Bad_Boss)
    Boss.right = 160
    Boss.y = 60
    Boss.vy = 25
    statusbar = statusbars.create(47, 8, StatusBarKind.EnemyHealth)
    statusbar.max = Big_Bad_boss_health
    statusbar.value = statusbar.max
    statusbar.setBarBorder(1, 11)
    statusbar.right = 158
    statusbar.top = 2
    game.splash("Boss:", Big_Bad_Boss_Names.shift())
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Open) {
        Open = false
        mySprite.destroy()
        Set_Bosses()
        make_big_bad_boss()
        info.setLife(100)
        scene.setBackgroundColor(8)
        tiles.setTilemap(tilemap`level1`)
        thePlayer = sprites.create(img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 2 2 2 f . . . 
            . . . . . e d d e 2 2 2 f . . . 
            . . . . . f e e f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `, SpriteKind.Player)
        controller.moveSprite(thePlayer, 100, 0)
        thePlayer.ay = 500
        character.loopFrames(
        thePlayer,
        [img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 2 2 2 f . . . 
            . . . . . e d d e 2 2 2 f . . . 
            . . . . . f e e f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e e e d d d f . . . 
            . . . . . f 4 d d e 4 e f . . . 
            . . . . . f e d d e 2 2 f . . . 
            . . . . f f f e e f 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `,img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 2 2 2 f . . . 
            . . . . . e d d e 2 2 2 f . . . 
            . . . . . f e e f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . 4 d d e 4 4 4 e f . . . 
            . . . . e d d e 2 2 2 2 f . . . 
            . . . . f e e f 4 4 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `],
        100,
        character.rule(Predicate.MovingRight)
        )
        character.loopFrames(
        thePlayer,
        [img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 2 2 2 e d d 4 . . . . . 
            . . . f 2 2 2 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d e e e e e f . . . 
            . . . f e 4 e d d 4 f . . . . . 
            . . . f 2 2 e d d e f . . . . . 
            . . f f 5 5 f e e f f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `,img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 2 2 2 e d d 4 . . . . . 
            . . . f 2 2 2 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e d d 4 . . . . 
            . . . f 2 2 2 2 e d d e . . . . 
            . . f f 5 5 4 4 f e e f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `],
        100,
        character.rule(Predicate.MovingLeft)
        )
    } else {
        if (thePlayer.isHittingTile(CollisionDirection.Bottom)) {
            thePlayer.vy = -200
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    character.setCharacterState(thePlayer, character.rule(Predicate.FacingLeft, Predicate.MovingLeft))
})
function Set_Bosses () {
    Big_Bad_Boss_Images = [
    img`
        . . . . . . . . . . . . . . e e 
        . . . . . . . . . . . . . e e e 
        . . . . . . . . . . . . e e 2 2 
        . . . . . . . . . . . . e 2 2 4 
        . . . . . . . . . . . e f 4 4 2 
        . . . . . . . . . . e e f 2 2 2 
        . . . . . . . . e e e 4 e 2 2 2 
        d d d b f 2 f 2 4 4 e 2 e 2 2 2 
        c c c c f c f e e 2 c 2 c 2 e e 
        . . . . . . . . e e c 2 c e e e 
        . . . . . . . . . . c e f e c c 
        . . . . . . . . . . . e f c c c 
        . . . . . . . . . . . . f c c c 
        . . . . . . . . . . . . c c c c 
        . . . . . . . . . . . . . c c c 
        . . . . . . . . . . . . . . c c 
        `,
    img`
        . . . . f f f f . . . . 
        . . f f 1 1 1 1 f f . . 
        . f b 1 1 1 1 1 1 b f . 
        . f 1 1 1 1 1 1 1 d f . 
        f d 1 1 1 1 1 1 1 d d f 
        f d 1 1 1 1 1 1 d d d f 
        f d 1 1 1 d d d d d d f 
        f d 1 d f b d d d d b f 
        f b d d f c d b b b c f 
        . f 1 1 1 1 1 b b c f . 
        . f 1 b 1 f f f f f . . 
        . f b f c 1 1 1 b f . . 
        . . f f 1 b 1 b f f . . 
        . . . f b f b f f f . f 
        . . . . f f f f f f f f 
        . . . . . . f f f f f . 
        `,
    img`
        ........................
        ........................
        ..........ccc...........
        .........cccc...........
        ...11111111c..ccc.......
        ..1111111111ccccc.......
        1111111111111bcc........
        11115555111115b..cc.....
        1155551ff111155bccc.....
        155d55ff51111555bc......
        15555555511115555b......
        1cbb31bb51111d555b.cc...
        1c5333b551111dd55dccc...
        11533b551111ddddddb.....
        .11555dd11115bdddddccc..
        ..11111111155bdddddccc..
        ...111111555bddddddcc...
        ....ccbc55bc5ddddddbcccc
        .....cbbcc5555dddddddddc
        .....ccbbb555ddbddddddc.
        .....cdcbc55ddbbbdddcc..
        ...ccdddccddddbcbbcc....
        ...ccccccd555ddccc......
        ........cccccccc........
        `,
    img`
        . . . . f f f f f f f f . . . . 
        . . f f f f f f f f f f f f . . 
        . f f f f f f f f f f f f f f . 
        . f f f f f f f f f f f f f f . 
        f f 2 2 f f f f f f f 2 2 f f f 
        f f f f 2 2 f f f 2 2 f f f f f 
        f f f f f f 2 2 2 f f f f f f f 
        f f f 2 2 f f f f f 2 2 f f f f 
        f f f 2 2 f f f f f 2 2 f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f 2 2 f f f f f f f 2 2 f f f 
        . f f f 2 2 f f f 2 2 f f f f f 
        . f f f f f 2 2 2 f f f f f f . 
        . . f f f f f f f f f f f f . . 
        . . . . f f f f f f f f . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 7 . . . 7 . . . . . 
        . . . . . . 7 7 . 7 7 . . . . . 
        . . . . . . 7 7 7 7 7 . . . . . 
        . . . . . . 7 2 7 2 7 . . . . . 
        . . . . . . 7 7 7 7 7 . . . . . 
        . . . . . . 7 f f f 7 . . . . . 
        . . . . . . . 7 7 7 . . . . . . 
        . . . . . . 7 . 7 . 7 . . . . . 
        . . . . . 7 . . 7 . . 7 . . . . 
        . . . . 7 . . . 7 . . . 7 . . . 
        . . . . . . . . 7 . . . . . . . 
        . . . . . . . . 7 . . . . . . . 
        . . . . . . . . 7 . . . . . . . 
        . . . . . . . 7 . 7 . . . . . . 
        . . . . . . 7 . . . 7 . . . . . 
        `,
    img`
        . . . . . . . c c . . . . . . . 
        . . . . . . c 7 c . . . . . . . 
        . . . . c c 7 7 7 c c c . . . . 
        . . c c c c 7 7 7 7 c 6 c c . . 
        . c 6 6 7 6 7 7 7 7 6 7 6 6 c . 
        . c 6 7 7 6 6 7 7 6 6 7 7 6 c . 
        . . c 7 7 7 6 6 6 6 7 7 7 f . . 
        . . . f 7 7 7 7 7 7 7 7 f f . . 
        . . . . f 7 7 7 f b 7 7 f f . . 
        . . . . f 7 6 6 f 1 6 f f f . . 
        . . . . f 6 6 6 6 6 6 f f . . . 
        . . . . . f 7 7 7 7 f 7 7 . . . 
        . . . . . f 7 6 6 7 6 6 7 . . . 
        . . . . f 7 7 7 7 7 6 6 7 . . . 
        . . . . c 6 7 7 7 7 7 7 . . . . 
        . . . . . f f f f f f . . . . . 
        `
    ]
    Big_Bad_Boss_Names = [
    "Ship-o-Droid",
    "Skelly",
    "Space Kaiju",
    "Dark Spirit",
    "Horrifying Stick",
    "Man-Eating-Goblin"
    ]
}
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    character.setCharacterState(thePlayer, character.rule(Predicate.FacingRight))
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    character.setCharacterState(thePlayer, character.rule(Predicate.FacingLeft))
})
sprites.onOverlap(SpriteKind.Boss_Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeLifeBy(-1)
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    if (Big_Bad_Boss_Images.length == 0) {
        info.setScore(100 - game.runtime() / 1000 + info.life())
        game.over(true, effects.confetti)
    } else {
        Boss.destroy()
        timer.after(1000, function () {
            make_big_bad_boss()
        })
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    character.setCharacterState(thePlayer, character.rule(Predicate.FacingRight, Predicate.MovingRight))
})
function boss_Attack () {
    if (Boss.image.equals(img`
        . . . . . . . . . . . . . . e e 
        . . . . . . . . . . . . . e e e 
        . . . . . . . . . . . . e e 2 2 
        . . . . . . . . . . . . e 2 2 4 
        . . . . . . . . . . . e f 4 4 2 
        . . . . . . . . . . e e f 2 2 2 
        . . . . . . . . e e e 4 e 2 2 2 
        d d d b f 2 f 2 4 4 e 2 e 2 2 2 
        c c c c f c f e e 2 c 2 c 2 e e 
        . . . . . . . . e e c 2 c e e e 
        . . . . . . . . . . c e f e c c 
        . . . . . . . . . . . e f c c c 
        . . . . . . . . . . . . f c c c 
        . . . . . . . . . . . . c c c c 
        . . . . . . . . . . . . . c c c 
        . . . . . . . . . . . . . . c c 
        `) || Boss.image.equals(img`
        ........................
        ........................
        ..........ccc...........
        .........cccc...........
        ...11111111c..ccc.......
        ..1111111111ccccc.......
        1111111111111bcc........
        11115555111115b..cc.....
        1155551ff111155bccc.....
        155d55ff51111555bc......
        15555555511115555b......
        1cbb31bb51111d555b.cc...
        1c5333b551111dd55dccc...
        11533b551111ddddddb.....
        .11555dd11115bdddddccc..
        ..11111111155bdddddccc..
        ...111111555bddddddcc...
        ....ccbc55bc5ddddddbcccc
        .....cbbcc5555dddddddddc
        .....ccbbb555ddbddddddc.
        .....cdcbc55ddbbbdddcc..
        ...ccdddccddddbcbbcc....
        ...ccccccd555ddccc......
        ........cccccccc........
        `)) {
        for (let index = 0; index < 16; index++) {
            projectile2 = sprites.createProjectileFromSprite(img`
                d d 
                d d 
                `, Boss, -120, 0)
            projectile2.setKind(SpriteKind.Boss_Projectile)
            projectile2.y += randint(-16, 16)
        }
    } else if (Boss.image.equals(img`
        . . . . f f f f . . . . 
        . . f f 1 1 1 1 f f . . 
        . f b 1 1 1 1 1 1 b f . 
        . f 1 1 1 1 1 1 1 d f . 
        f d 1 1 1 1 1 1 1 d d f 
        f d 1 1 1 1 1 1 d d d f 
        f d 1 1 1 d d d d d d f 
        f d 1 d f b d d d d b f 
        f b d d f c d b b b c f 
        . f 1 1 1 1 1 b b c f . 
        . f 1 b 1 f f f f f . . 
        . f b f c 1 1 1 b f . . 
        . . f f 1 b 1 b f f . . 
        . . . f b f b f f f . f 
        . . . . f f f f f f f f 
        . . . . . . f f f f f . 
        `)) {
        for (let index = 0; index < 4; index++) {
            projectile2 = sprites.createProjectileFromSprite(img`
                1 1 . . . 
                1 1 . . . 
                . . 1 . . 
                . . . 1 1 
                . . . 1 1 
                `, Boss, -120, 0)
            projectile2.setKind(SpriteKind.Boss_Projectile)
            projectile2.y += randint(-16, 16)
            effects.blizzard.startScreenEffect(100)
        }
    } else if (Boss.image.equals(img`
        . . . . f f f f f f f f . . . . 
        . . f f f f f f f f f f f f . . 
        . f f f f f f f f f f f f f f . 
        . f f f f f f f f f f f f f f . 
        f f 2 2 f f f f f f f 2 2 f f f 
        f f f f 2 2 f f f 2 2 f f f f f 
        f f f f f f 2 2 2 f f f f f f f 
        f f f 2 2 f f f f f 2 2 f f f f 
        f f f 2 2 f f f f f 2 2 f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f 2 2 f f f f f f f 2 2 f f f 
        . f f f 2 2 f f f 2 2 f f f f f 
        . f f f f f 2 2 2 f f f f f f . 
        . . f f f f f f f f f f f f . . 
        . . . . f f f f f f f f . . . . 
        `)) {
        for (let index = 0; index < 10; index++) {
            projectile2 = sprites.createProjectileFromSprite(img`
                f f 
                f f 
                `, Boss, -120, 0)
            projectile2.setKind(SpriteKind.Boss_Projectile)
            projectile2.y += randint(-16, 16)
        }
    } else if (Boss.image.equals(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 7 . . . 7 . . . . . 
        . . . . . . 7 7 . 7 7 . . . . . 
        . . . . . . 7 7 7 7 7 . . . . . 
        . . . . . . 7 2 7 2 7 . . . . . 
        . . . . . . 7 7 7 7 7 . . . . . 
        . . . . . . 7 f f f 7 . . . . . 
        . . . . . . . 7 7 7 . . . . . . 
        . . . . . . 7 . 7 . 7 . . . . . 
        . . . . . 7 . . 7 . . 7 . . . . 
        . . . . 7 . . . 7 . . . 7 . . . 
        . . . . . . . . 7 . . . . . . . 
        . . . . . . . . 7 . . . . . . . 
        . . . . . . . . 7 . . . . . . . 
        . . . . . . . 7 . 7 . . . . . . 
        . . . . . . 7 . . . 7 . . . . . 
        `)) {
        for (let index = 0; index < 4; index++) {
            projectile2 = sprites.createProjectileFromSprite(img`
                7 . . . . 
                . 7 . . . 
                . . 7 . . 
                . . . 7 . 
                . . . . 7 
                `, Boss, -120, 0)
            projectile2.setKind(SpriteKind.Boss_Projectile)
            projectile2.y += randint(-16, 16)
        }
    } else if (Boss.image.equals(img`
        . . . . . . . c c . . . . . . . 
        . . . . . . c 7 c . . . . . . . 
        . . . . c c 7 7 7 c c c . . . . 
        . . c c c c 7 7 7 7 c 6 c c . . 
        . c 6 6 7 6 7 7 7 7 6 7 6 6 c . 
        . c 6 7 7 6 6 7 7 6 6 7 7 6 c . 
        . . c 7 7 7 6 6 6 6 7 7 7 f . . 
        . . . f 7 7 7 7 7 7 7 7 f f . . 
        . . . . f 7 7 7 f b 7 7 f f . . 
        . . . . f 7 6 6 f 1 6 f f f . . 
        . . . . f 6 6 6 6 6 6 f f . . . 
        . . . . . f 7 7 7 7 f 7 7 . . . 
        . . . . . f 7 6 6 7 6 6 7 . . . 
        . . . . f 7 7 7 7 7 6 6 7 . . . 
        . . . . c 6 7 7 7 7 7 7 . . . . 
        . . . . . f f f f f f . . . . . 
        `)) {
        for (let index = 0; index < 8; index++) {
            projectile2 = sprites.createProjectileFromSprite(img`
                . . 1 1 1 
                . 1 1 1 1 
                1 1 1 1 1 
                1 1 . . . 
                1 . . . . 
                `, Boss, -120, 0)
            projectile2.setKind(SpriteKind.Poison_Projectile)
            projectile2.y += randint(-16, 16)
        }
    }
}
scene.onOverlapTile(SpriteKind.Big_Bad_Boss, assets.tile`myTile1`, function (sprite, location) {
    sprite.vy = 25
    boss_Attack()
    if (Boss.image.equals(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 7 . . . 7 . . . . . 
        . . . . . . 7 7 . 7 7 . . . . . 
        . . . . . . 7 7 7 7 7 . . . . . 
        . . . . . . 7 2 7 2 7 . . . . . 
        . . . . . . 7 7 7 7 7 . . . . . 
        . . . . . . 7 f f f 7 . . . . . 
        . . . . . . . 7 7 7 . . . . . . 
        . . . . . . 7 . 7 . 7 . . . . . 
        . . . . . 7 . . 7 . . 7 . . . . 
        . . . . 7 . . . 7 . . . 7 . . . 
        . . . . . . . . 7 . . . . . . . 
        . . . . . . . . 7 . . . . . . . 
        . . . . . . . . 7 . . . . . . . 
        . . . . . . . 7 . 7 . . . . . . 
        . . . . . . 7 . . . 7 . . . . . 
        `)) {
        sprite.vy = 50
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Big_Bad_Boss, function (sprite, otherSprite) {
    sprite.destroy()
    Big_Bad_boss_health += -1
    statusbar.value += -1
})
scene.onOverlapTile(SpriteKind.Big_Bad_Boss, assets.tile`myTile0`, function (sprite, location) {
    sprite.vy = -25
    timer.after(randint(500, 3000), function () {
        boss_Attack()
    })
})
let projectile: Sprite = null
let projectile2: Sprite = null
let thePlayer: Sprite = null
let Big_Bad_Boss_Names: string[] = []
let statusbar: StatusBarSprite = null
let Big_Bad_Boss_Images: Image[] = []
let Boss: Sprite = null
let Big_Bad_boss_health = 0
let mySprite: Sprite = null
let Open = false
Open = true
mySprite = sprites.create(img`
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddccccccccccccccccccccccddddddddddddddddddddddccccccccccccccccccccccddddddddddddddddddddddccccccccccccccccccccccddddddddddddddddddddddddddddddddddddddddddddd
    dddddcccccccccccccccccccccccdddddddddddddddddddddcccccccccccccccccccccccdddddddddddddddddddddcccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddd
    dddddccccccccccccccccccccccccddddddddddddddddddddccccccccccccccccccccccccddddddddddddddddddddccccccccccccccccccccccccdddddddddddddddcccddddddddddddddddddddddddd
    dddddcccccccccccccccccccccccccdddddddddddddddddddcccccccccccccccccccccccccdddddddddddddddddddcccccccccccccccccccccccccddddddddddddddcccddddddddddddddddddddddddd
    dddddccccccccccccccccccccccccccddddddddddddddddddccccccccccccccccccccccccccddddddddddddddddddccccccccccccccccccccccccccdddddddddddddcccddddddddddddddddddddddddd
    ddddccccccccccccccccccccccccccccddddddddddddddddccccccccccccccccccccccccccccddddddddddddddddccccccccccccccccccccccccccccddddddddddddcccddddddddddddddddddddddddd
    ddddccccccccccccccccccccccccccccccddddddddddddddccccccccccccccccccccccccccccccddddddddddddddccccccccccccccccccccccccccccccddddddddddcccddddddddddddddddddddddddd
    ddddccccccccccdddccccccccccccccccccdddddddddddddccccccccccdddccccccccccccccccccdddddddddddddccccccccccdddccccccccccccccccccdddddddddcccddddddddddddddddddddddddd
    ddddccccccccccdddddddcccccccccccccccddddddddddddccccccccccdddddddcccccccccccccccddddddddddddccccccccccdddddddcccccccccccccccddddddddcccddddddddddddddddddddddddd
    dddccccccccccddddddddddccccccccccccccddddddddddccccccccccddddddddddccccccccccccccddddddddddccccccccccddddddddddccccccccccccccddddddddddddddddddddddddddddddddddd
    dddccccccccccdddddddddddccccccccccccccdddddddddccccccccccdddddddddddccccccccccccccdddddddddccccccccccdddddddddddccccccccccccccdddddddddddddddddddddddddddddddddd
    dddccccccccccdddddddddddccccccccccccccccdddddddccccccccccdddddddddddccccccccccccccccdddddddccccccccccdddddddddddccccccccccccccccdddddddddddddddddddddddddddddddd
    dddccccccccccddddddddddccccccccccccccccddddddddccccccccccddddddddddccccccccccccccccddddddddccccccccccddddddddddccccccccccccccccddddddddddddddddddddddcccccdddddd
    dddcccccccccddddddddddccccccccccccccccdddddddddcccccccccddddddddddccccccccccccccccdddddddddcccccccccddddddddddccccccccccccccccdddddddddddddddddcccccccccccdddddd
    ddccccccccccdddddddddcccccccccccccccddddddddddccccccccccdddddddddcccccccccccccccddddddddddccccccccccdddddddddcccccccccccccccdddddddddddddddddcccccccccccccdddddd
    ddccccccccccddddddddcccccccccccccccdddddddddddccccccccccddddddddcccccccccccccccdddddddddddccccccccccddddddddcccccccccccccccddddddddddddddddddccccccccccddddddddd
    ddccccccccccccccccccccccccccccccccddddddddddddccccccccccccccccccccccccccccccccddddddddddddccccccccccccccccccccccccccccccccddddddddddddddddddcccccddddddddddddddd
    ddccccccccccccccccccccccccccccccddddddddddddddccccccccccccccccccccccccccccccddddddddddddddccccccccccccccccccccccccccccccdddddddddddddddddddcccccdddddddddddddddd
    dccccccccccccccccccccccccccccccddddddddddddddccccccccccccccccccccccccccccccddddddddddddddccccccccccccccccccccccccccccccddddddddddddddddddddccccddddddddddddddddd
    dcccccccccccccccccccccccccccccdddddddddddddddcccccccccccccccccccccccccccccdddddddddddddddcccccccccccccccccccccccccccccdddddddddddddddddddddcccdddddddddddddddddd
    dcccccccccccccccccccccccccccdddddddddddddddddcccccccccccccccccccccccccccdddddddddddddddddcccccccccccccccccccccccccccdddddddddddddddddddddddcccdddddddddddddddddd
    dccccccccccccccccccccccccccddddddddddddddddddccccccccccccccccccccccccccddddddddddddddddddccccccccccccccccccccccccccddddddddddddddddddddddddcccdddddddddddddddddd
    dcccccccccccccccccccccccccccdddddddddddddddddcccccccccccccccccccccccccccdddddddddddddddddcccccccccccccccccccccccccccdddddddddddddddddddddddcccdddddddddddddddddd
    ccccccccccccccccccccccccccccccddddddddddddddccccccccccccccccccccccccccccccddddddddddddddccccccccccccccccccccccccccccccdddddddddddddddddddddccccddddddddddddddddd
    ccccccccccccccccccccccccccccccccddddddddddddccccccccccccccccccccccccccccccccddddddddddddccccccccccccccccccccccccccccccccdddddddddddddddddddcccccdddddddddddddddd
    ccccccccccccccccccccccccccccccccccddddddddddccccccccccccccccccccccccccccccccccddddddddddccccccccccccccccccccccccccccccccccddddddddddddddddddccccccdddddddddddddd
    ccccccccccccccccccccccccccccccccccccddddddddccccccccccccccccccccccccccccccccccccddddddddccccccccccccccccccccccccccccccccccccdddddddddddddddddccccccddddddddddddd
    cccccccccccccddddddddcccccccccccccccccdddddccccccccccccccddddddddcccccccccccccccccdddddccccccccccccccddddddddcccccccccccccccccddddddddddddddddccccccccdddddddddd
    cccccccccccccdddddddddccccccccccccccccccddddcccccccccccccdddddddddccccccccccccccccccddddcccccccccccccdddddddddccccccccccccccccccddddddddddddddddccccccdddddddddd
    dccccccccccccddddddddddcccccccccccccccccccdddccccccccccccddddddddddcccccccccccccccccccdddccccccccccccddddddddddcccccccccccccccccccdddddddddddddddccccccddddddddd
    dcccccccccccccddddddddddcccccccccccccccccccddcccccccccccccddddddddddcccccccccccccccccccddcccccccccccccddddddddddcccccccccccccccccccddddddddddddddddccccccddddddd
    ddccccccccccccdddddddddddcccccccccccccccccccddccccccccccccdddddddddddcccccccccccccccccccddccccccccccccdddddddddddcccccccccccccccccccddddddddddddddddccccccdddddd
    dddcccccccccccdddddddddddccccccccccccccccccddddcccccccccccdddddddddddccccccccccccccccccddddcccccccccccdddddddddddccccccccccccccccccddddddddddddddddddcccccdddddd
    dddcccccccccccddddddddddccccccccccccccccccdddddcccccccccccddddddddddccccccccccccccccccdddddcccccccccccddddddddddccccccccccccccccccdddddddddddddddddddddcccdddddd
    ddddcccccccccccdddddddccccccccccccccccccccddddddcccccccccccdddddddccccccccccccccccccccddddddcccccccccccdddddddccccccccccccccccccccdddddddddddddddddddddccccddddd
    ddddcccccccccccdddcccccccccccccccccccccccdddddddcccccccccccdddcccccccccccccccccccccccdddddddcccccccccccdddcccccccccccccccccccccccddddddddddddddddddddddccccddddd
    dddddcccccccccccccccccccccccccccccccccccdddddddddcccccccccccccccccccccccccccccccccccdddddddddcccccccccccccccccccccccccccccccccccddddddddddddddddddddddddcccddddd
    dddddccccccccccccccccccccccccccccccccccddddddddddccccccccccccccccccccccccccccccccccddddddddddccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddcccddddd
    ddddddcccccccccccccccccccccccccccccccccdddddddddddcccccccccccccccccccccccccccccccccdddddddddddcccccccccccccccccccccccccccccccccdddddddddddddddddddddddddcccddddd
    ddddddccccccccccccccccccccccccccccccccddddddddddddccccccccccccccccccccccccccccccccddddddddddddccccccccccccccccccccccccccccccccddddddddddddddddddddddddddcccddddd
    dddddddccccccccccccccccccccccccccccccddddddddddddddccccccccccccccccccccccccccccccddddddddddddddccccccccccccccccccccccccccccccddddddddddddddddddddddddddccccddddd
    ddddddddccccccccccccccccccccccccccccddddddddddddddddccccccccccccccccccccccccccccddddddddddddddddccccccccccccccccccccccccccccddddddddddddddddddddddddddcccccddddd
    ddddddddccccccccccccccccccccccccccccddddddddddddddddccccccccccccccccccccccccccccddddddddddddddddccccccccccccccccccccccccccccddddddddddddddddddddddddcccccccddddd
    dddddddddccccccccccccccccccccccccccddddddddddddddddddccccccccccccccccccccccccccddddddddddddddddddccccccccccccccccccccccccccddddddddddddddddddddddccccccccddddddd
    dddddddddccccccccccccccccccccccccccddddddddddddddddddccccccccccccccccccccccccccddddddddddddddddddccccccccccccccccccccccccccdddddddddddddddddccccccccccccdddddddd
    ddddddddddccccccccccccddddddddddddddddddddddddddddddddccccccccccccddddddddddddddddddddddddddddddddccccccccccccddddddddddddddddddddddddddddddccccccccccdddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcccccccddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddc222222222222222222222cddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddc2cddddcddddddddddddddddddddddddddddddddddddddddd
    ddc2222222222222222222222cddddddddddddddddddccccccccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddc22ccdddddddddddddddddddddddddddddddddddddddddddd
    ddc22222222222222222222222cddddddddddddddddc2222222222222cddddddddddddddddddddddddddccccccccccccccddddddddddddc22222ccdddddddddddddddddddddddddddddddddddddddddd
    ddc222222222222222222222222cddddddddddddddc222222222222222cddddddddddddddddddddddddc2222222222222cddddddddddddc222222cdddddddddddddddddddddddddddddddddddddddddd
    dc22222222222222222222222222cdddddddddddddc2222222222222222cddddddddddddddddddddddc222222222222222cddddddddddc2222222cdddddddddddddddddddddddddddddddddddddddddd
    dc22222222cccc222222222222222ccddddddddddc22222222222222222cddddddddddddddddddddddc2222222222222222cdddddddddc222222cddddddddddddddddddddddddddddddddddddddddddd
    dc22222222cdddcccc2222222222222cddddddddc2222222cccccc222222cddddddddddddddddddddc22222222222222222cdddddddddc222222cddddddddddddddddddddddddddddddddddddddddddd
    dc22222222cdddddddcc222222222222cdddddddc222222cddddddc222222cddddddddddddddddddc2222222cccccc222222cdddddddc222222cdddddddddddddddddddddddddddddddddddddddddddd
    c22222222cddddddddddc222222222222cdddddc2222222cdddddddc222222cdddddddddddddddddc222222cddddddc222222cddddddc22222cddddddddddddddddddddddddddddddddddddddddddddd
    c22222222cdddddddddddcc22222222222cdddc2222222cdddddddddc222222cdddddddddddddddc2222222cdddddddc222222cddddc222222cddddddddddddddddddddddddddddddddddddddddddddd
    c22222222cdddddddddddc2222222222222ccdc222222cdddddddddddc22222cddddddddddddddc2222222cdddddddddc2222c2cdddc22222cdddddddddddddddddddddddddddddddddddddddddddddd
    c22222222cddddddddddc22222222222222c.c2222222cccccccccccccc22222cdddddddddddddc222222cdddddddddddc222c2cddc222222cddddddddccccccccccdddddddddddddddddddddddddddd
    c2222222cddddddddddc2222222222222ccdc2222222222222222222222222222cdddddddddddc2222222cccccccccccccc22222cdc22222cccccccccc2222222222cddddddddddddddddddddddddddd
    c2222222cdddddddddc2222222222222cdddc22222222222222222222222222222cdddddddddc2222222222222222222222222222c22222222222222222222222222cddddddddddddddddddddddddddd
    c2222222cddddddddc2222222222222cdddc222222cccccccccccccccccccccccccdddddddddc2222222222222222222222222222c222222222222222222222222222cdddddddddddddddddddddddddd
    c222222cccccccccc222222222222ccddddc22222cdddddddddddddddddddddddddddddddddc222222cccccccccccccccccccccccc2222222222222222222222222222cddddddddddddddddddddddddd
    c222222222222222222222222222cddddddc22222cddddddddddddddddddcddddddddddddddc22222ccdddddddddddddddddddddc22222222222222222222222222222cddddddddddddddddddddddddd
    c22222222222222222222222222cdddddddc222222cdddddddddddddddddcccddddddddddddc22222cddddddddddddddddddddddc22222222c222222222222c22222222cdddddddddddddddddddddddd
    c222222222222222222222222ccdddddddddc22222cddddddddddddddddddc2ccccddddddddc222222cddddddddddddddddddddc22222222ccccccccccccccdc22222222cddddddddddddddddddddddd
    c22222222222222222222222cdddddddddddc222222cdddddddddddddddddc22222cdddddddcc22222cddddddddddddddddddddc22222222cddddddddddddddc22222222cddddddddddddddddddddddd
    c222222222222222222222ccdddddddddddddc222222cddddddddddddddddc22222cddddddc2c222222cddddddddddddddddddc22222222cddddddddddddddddc22222222cdddddddddddddddddddddd
    c222222222222222222222222dddddddddddddc22222cdddddddddddddddddc2222cddddddc22c222222cdddddddddddddddddc2222222cddddddddddddddddddc22222222cddddddddddddddddddddd
    c222222222222222222222222ccdddddddddddc222222cddddddddddddddddc22222cdddddc222c22222cdddddddddddddddddc2222222cddddddddddddddddddc22222222cccccccddddddddddddddd
    c22222222222222222222222222ccddddddddddc22222cdddddddddddddddddc2222cddddc2222c222222cddddddddddddddddc222222cddddddddddddddddddddc2222222ccccccccddddddcccccddd
    c2222222222222222222222222222ccddddddddc222222cddddddddddddddddc2222cddddc2222cc22222cdddddddddddddddddc2222cdddddddddddddddddddddcc22222cccccccccddddcccccccccd
    c2222222cccccccccc2222222222222ccdddddddc22222cdddddddddddddddddc2222cdddc222cdc222222cddddddddddddddddc2222cdddddddddddddddddddddc22222cccccddccccddccccccccccc
    c22222222cddddddddc22222222222222ccdddddc222222cdddddddcccccccddc2222cddc2222cddc22222cdddddddddddddddddc222cdddddddddddddddddddddc22222ccccdddccccddccccccccccc
    c22222222cdddddddddc222222222222222ccddddc222222ccccccc2222222cddc222cddc222cdddc222222cdddddddcccccccddc2222cdddddddddddddddddddc222222ccccdddccccdcccccdddcccc
    c22222222cddddddddddc2222222222222222ccdddc2222222222222222222cddc222cddc222cddddc222222ccccccc2222222cdc22222cddddddddddddddddddc222222cccdddddcccdccccdddddccc
    c222222222cddddddddddc22222222222222222cddc22222222222222222222cdc2222cc222cddddddc2222222222222222222cddc2222cdddddddddddddddddc2222222cccdddddcccdcccccccccccc
    c222222222cdddddddddddc22222222222222222cddc2222222222222222222cddc222cc222cddddddc22222222222222222222cdc22222cddddddddddddddddc2222222cccddddccccccccccccccccc
    c222222222cdddddddddddccc22222222222222cdddc2222222222222222222cddc222cc22cddddddddc2222222222222222222cddc22222cddddddddddddddc22222222cccddddccccccccccccccccc
    c222222222cddddddddddddddc222222222222cdddddccccccccccccccccccccdddc22c222cddddddddc2222222222222222222cddc22222cddddddddddddddc2222222cccccddcccccccccddddddddd
    dc222222222cddddddddddddddc22222222222cddddddddddddddddddddddddddddc22222cddddddddddccccccccccccccccccccddc222222cddddddddddddc22222222cccccccccccccccccdddddddd
    dc222222222cdddddddddddddddc222222222cddddddddddddddddddddddddddddddc2222cdddddddddddddddddddddddddddddddddc222cccddddddddddddc22222222ccccccccccccccccccddddddd
    ddc222222222cdddddddddddddddcc222222cdddddddddddddddddddddddddddddddc222cddddddddddddddddddddddddddddddddddccccdddddddddddddddcc222222cdddcccccccccdccccccdddddd
    ddc222222222cdddddddddddddddddc2222cddddddddddddddddddddddddddddddddc222cdddddddddddddddddddddddddddddddddddcdddddddddddddddddddcc2222cddddddddccccddccccccccccd
    dddc22222222cddddddddddddddddddc222cdddddddddddddddddddddddddddddddddc2cddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcc22cdddddddccccddddcccccccccd
    dddc22222222cdddddddddddddddddddc2cddddddddddddddddddddddddddddddddddc2cddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccdddddddcccccdddddccccccccd
    ddddc22222222cdddddddddddddddddddcddddddddddddddddddddddddddddddddddddcdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccccccdddddddddddddd
    dddddc2222222cdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccccccccddddddddddddddd
    dddddc2222222cdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcccccccccccdddddddddddddddd
    ddddddc222222ccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcccccccccdddddddddddddddddd
    ddddddc2222222cddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcccccccdddddddddddddddddddd
    dddddddccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `, SpriteKind.Player)
game.onUpdate(function () {
    if (Open) {
    	
    } else {
        timer.after(1000, function () {
            if (controller.B.isPressed()) {
                if (character.matchesRule(thePlayer, character.rule(Predicate.FacingRight))) {
                    projectile = sprites.createProjectileFromSprite(img`
                        . 2 2 . 
                        2 2 2 2 
                        2 2 2 2 
                        . 2 2 . 
                        `, thePlayer, 150, 0)
                } else if (character.matchesRule(thePlayer, character.rule(Predicate.FacingLeft))) {
                    projectile = sprites.createProjectileFromSprite(img`
                        . 2 2 . 
                        2 2 2 2 
                        2 2 2 2 
                        . 2 2 . 
                        `, thePlayer, -150, 0)
                }
                projectile.y += randint(-8, 8)
            }
        })
    }
})
