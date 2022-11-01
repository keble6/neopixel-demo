let z = 0
let y = 0
let x = 0
let ring = neopixel.create(DigitalPin.P2, 24, NeoPixelMode.RGB)
basic.forever(function () {
    x = input.acceleration(Dimension.X) / 2
    y = input.acceleration(Dimension.Y) / 2
    z = input.acceleration(Dimension.Z) / 2
    ring.rotate(1)
    ring.setPixelColor(0, neopixel.rgb(x, y, 0 - z))
    ring.show()
    basic.pause(100)
})
