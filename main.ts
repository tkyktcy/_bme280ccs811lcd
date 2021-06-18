input.onButtonPressed(Button.A, function () {
    ログ有効 = 1
})
input.onButtonPressed(Button.B, function () {
    ログ有効 = 0
})
let ログ有効 = 0
makerbit.connectLcd(27)
makerbit.setLcdBacklight(LcdBacklight.On)
BME280.PowerOn()
BME280.Address(0x76)
SG33.address(true)
ログ有効 = 0
let Temp値 = 0
let Humid値 = 0
let Press値 = 0
let Dewp値 = 0
let eCO2値 = 0
let TVOC値 = 0
basic.forever(function () {
    Temp値 = BME280.temperature(BME280_T.T_C)
    Humid値 = BME280.humidity()
    Press値 = BME280.pressure(BME280_P.hPa)
    Dewp値 = BME280.Dewpoint()
    eCO2値 = SG33.eCO2()
    TVOC値 = SG33.TVOC()
    makerbit.showStringOnLcd2004("Temp.", makerbit.position2004(LcdPosition2004.Pos1), 6)
    makerbit.showStringOnLcd2004("" + (Temp値), makerbit.position2004(LcdPosition2004.Pos23), 3)
    makerbit.showStringOnLcd2004("Humid.", makerbit.position2004(LcdPosition2004.Pos8), 6)
    makerbit.showStringOnLcd2004("" + (Humid値), makerbit.position2004(LcdPosition2004.Pos30), 3)
    makerbit.showStringOnLcd2004("Press.", makerbit.position2004(LcdPosition2004.Pos15), 6)
    makerbit.showStringOnLcd2004("" + (Press値), makerbit.position2004(LcdPosition2004.Pos37), 4)
    makerbit.showStringOnLcd2004("Dewp.", makerbit.position2004(LcdPosition2004.Pos41), 6)
    makerbit.showStringOnLcd2004("" + (Dewp値), makerbit.position2004(LcdPosition2004.Pos62), 3)
    makerbit.showStringOnLcd2004("eCO2.", makerbit.position2004(LcdPosition2004.Pos48), 6)
    makerbit.showStringOnLcd2004("" + (eCO2値), makerbit.position2004(LcdPosition2004.Pos69), 5)
    makerbit.showStringOnLcd2004("TVOC.", makerbit.position2004(LcdPosition2004.Pos55), 6)
    makerbit.showStringOnLcd2004("" + (TVOC値), makerbit.position2004(LcdPosition2004.Pos75), 5)
    if (ログ有効 == 1) {
        basic.showIcon(IconNames.Yes)
        serial.writeString("Temp. ")
        serial.writeNumber(Temp値)
        serial.writeString(" ")
        serial.writeString("Humid. ")
        serial.writeNumber(Humid値)
        serial.writeString(" ")
        serial.writeString("eCO2. ")
        serial.writeNumber(eCO2値)
        serial.writeLine(" ")
        basic.pause(500)
    } else if (ログ有効 == 0) {
        basic.clearScreen()
        basic.pause(500)
    }
    basic.pause(500)
})
