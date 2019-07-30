const fs = require("fs");

function search(fileName, searchWord){

    fs.readFile(fileName, "utf-8", (error, data) => {

        if(error) { return console.log("Error reading file", fileName); }

        data = data.split("\n");

        // for(let i = 0; i < data.length; i++){
        //     if(data[i].includes(searchWord)){
        //         console.log("Line No:", i+1, data[i]);
        //     }
        // }


        data.forEach((d, i) => {
            if(d.includes(searchWord)){
                console.log("Line No: ", i, d);
            };
        });


    });
}


function main(){
    if(process.argv.length !== 4){
        console.log("Please provide filename and string");
        return;
    }

    let fileName = process.argv[2];
    let searchWord = process.argv[3];

    search(fileName, searchWord);
}

main();