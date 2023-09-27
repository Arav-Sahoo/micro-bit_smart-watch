input.onPinPressed(TouchPin.P0, function () {
    basic.clearScreen()
    if (timevalue * 1000 > 0) {
        basic.showString("It has been" + timevalue + "seconds")
    }
})
bluetooth.onBluetoothConnected(function () {
    bluetooth.startUartService()
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    if (tempvalue > 20) {
        basic.showString("It is" + tempvalue + "degrees C")
    } else if (tempvalue <= 20) {
        basic.showString("It is" + tempvalue + "degrees C")
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    if (directionvalue < 90) {
        basic.showString("Compass :" + directionvalue + "degrees")
    } else if (directionvalue < 180) {
        basic.showString("Compass :" + directionvalue + "degrees")
    }
    if (directionvalue < 270) {
        basic.showString("Compass :" + directionvalue + "degrees")
    } else if (directionvalue < 360) {
        basic.showString("Compass :" + directionvalue + "degrees")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    if (lightvalue > 128) {
        basic.showString("It is" + lightvalue + "lux")
    } else if (lightvalue <= 128) {
        basic.showString("It is" + lightvalue + "lux")
    }
})
input.onGesture(Gesture.Shake, function () {
    steps += 1
})
let timevalue = 0
let directionvalue = 0
let tempvalue = 0
let lightvalue = 0
basic.showIcon(IconNames.Heart)
basic.pause(2000)
serial.redirect(
SerialPin.USB_TX,
SerialPin.USB_RX,
BaudRate.BaudRate115200
)
let steps = 0
lightvalue = 0
tempvalue = 0
directionvalue = 0
timevalue = 0
loops.everyInterval(500, function () {
    lightvalue = input.lightLevel()
    tempvalue = input.temperature()
    directionvalue = input.compassHeading()
    timevalue = input.runningTime()
    serial.writeNumbers([steps])
    serial.writeLine("")
})
basic.forever(function () {
    basic.showString("" + (steps))
})
