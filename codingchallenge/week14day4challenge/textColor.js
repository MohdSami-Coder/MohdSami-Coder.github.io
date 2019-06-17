class ColorConsole {

    constructor(color) {
        this.color = color;

    }

    log(text) {
       let color = {
            red: "\x1b[31m",
            green: "\x1b[32m",
            yellow: "\x1b[33m"

        }
        if (this.color == "red") {
            return console.log(color.red, text)
        }

        if (this.color == "green") {
            return console.log(color.green, text);
        }

        if (this.color == "yellow") {

            return console.log(color.yellow, text);

        }
    }
}

let myConsole1 = new ColorConsole("red");
myConsole1.log("AttainU University");

let myConsole2 = new ColorConsole("yellow");
myConsole2.log("AttainU University");

let myConsole3 = new ColorConsole("green");
myConsole3.log("AttainU University");

