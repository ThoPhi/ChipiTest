enum CamBien {
    //% block="Nút nhấn"
    Button,
    //% block="Chạm"
    TiltUp,
    //% block="Ánh sáng"
    TiltDown,
    //% block="Âm thanh"
    TiltLeft,
    //% block="Mở cửa"
    TiltRight,
    //% block="Khí gas"
    FaceUp,
    //% block="Độ ẩm đất"
    FaceDown,
    //% block="Nhiệt độ"
    FreeFall

}

enum PinToRead {
    //% block="P0"
    P0,
    //% block="P1"
    P1,
    //% block="P2"
    P2,
    //% block="P3"
    P3,
    //% block="P4"
    P4,
    //% block="P5"
    P5,
    //% block="P6"
    P6,
    //% block="P7"
    P7
}


//% color="#0A278D"
namespace ThoPhiChipi {
    
    /**
   * This is a statement block
   */
    //% block
    export function show() {

    }

    /**
     * This is a statement block with a parameter
     */
    //% block
    export function move(steps: number) {

    }

    /**
     * This is a reporter block that returns a number
     */
    //% block
    export function randomNumber(): number {
        return 0;
    }

    /**
     * This is a reporter block that returns a boolean
     */
    //% block
    export function randomBoolean(): boolean {
        return false;
    }

    /**
     * This is an event handler block
     */
    //% block="on event"
    export function onEvent(handler: () => void) {

    }

    //% block="pause $ms"
    //% ms.shadow="timePicker"
    export function pause(ms: number) {

    }

    /**
     * Custom text dropdown
     */

    /**
      * Get the word field editor
      * @param word eg: Hello
      */
    //% blockId=wordPicker block="$word"
    //% blockHidden=true
    //% colorSecondary="#FFFFFF"
    //% word.fieldEditor="textdropdown" word.fieldOptions.decompileLiterals=true
    //% word.fieldOptions.values='[["Hi"], ["How are you?"]]'
    export function __wordPicker(word: string): string {
        return word;
    }


    //% block="say $word"
    //% word.shadow="wordPicker"
    export function say(word: string) {

    }


    //% block
    //% cambien.fieldEditor="gridpicker"
    //% cambien.fieldOptions.width=220
    //% cambien.fieldOptions.columns=3
    export function onGesture(cambien: CamBien) {

    }

    /**
    * Runs the motor at the given speed
    */
    //% block="Chạy robot với tốc độ $speed và độ bẻ lái $turn"
    //% turn.shadow="speedPicker"
    //% speed.min=0 speed.max=255
    export function run(speed: number, turn: number) {

    }

    //% block
    //% gesture.fieldEditor="gridpicker"
    //% gesture.fieldOptions.width=220
    //% gesture.fieldOptions.columns=3
    //% block="Đọc cảm biến $gesture tại chân số $pin"
    export function Đọc_cảm_biến(gesture: CamBien, pin: PinToRead): boolean {
        return true;
    }

}
