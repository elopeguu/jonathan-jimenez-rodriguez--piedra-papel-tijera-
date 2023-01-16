let random = 0
input.onButtonPressed(Button.A, function () {
    random = randint(1, 3)
    basic.pause(1000)
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    if (random == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
    if (random == 2) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    }
    if (random == 3) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
})
