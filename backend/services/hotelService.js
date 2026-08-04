const fs = require("fs");
const path = require("path");


function getHotelInformation(hotelId = "001") {


    const filePath = path.join(
        __dirname,
        "../data",
        `hotel${hotelId}.json`
    );


    console.log("-------------------------");
    console.log("Gesuchte Datei:");
    console.log(filePath);
    console.log("-------------------------");



    if (!fs.existsSync(filePath)) {

        throw new Error(
            "Datei existiert nicht"
        );

    }



    const hotelData = fs.readFileSync(
        filePath,
        "utf-8"
    );



    return JSON.parse(hotelData);

}



module.exports = {

    getHotelInformation

};