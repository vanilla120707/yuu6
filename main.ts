input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 4; index++) {
        music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Once)
        basic.showIcon(IconNames.Happy)
        basic.pause(100)
        basic.showIcon(IconNames.Surprised)
    }
    no = randint(0, 200)
    basic.showNumber(no / 1)
})
let no = 0
basic.showIcon(IconNames.SmallHeart)
music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once)
