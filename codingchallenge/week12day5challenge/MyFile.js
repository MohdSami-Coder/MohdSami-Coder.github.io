var fs = require("fs");

class MyFile{

    constructor(fileName){

        this.fileName = fileName;
    }

    get data(){
        
        return fs.readFileSync(this.fileName, "utf-8")
    }

    set data(value){

        fs.writeFileSync(this.fileName, value, "utf-8");

    }
}

let file = new MyFile("challenge.txt");

file.data = "This is a synchronous read and write file coding challenge";
console.log(file.data);
