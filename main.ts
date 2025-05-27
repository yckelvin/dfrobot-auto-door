let distance = 1000
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P13,
    DigitalPin.P14,
    PingUnit.Centimeters
    )
    if (distance < 5) {
        microIoT.microIoT_ServoRun(microIoT.aServos.S2, 0)
    } else {
        microIoT.microIoT_ServoRun(microIoT.aServos.S2, 90)
    }
})
