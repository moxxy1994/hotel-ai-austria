const fs = require("fs");
const path = require("path");


function getHotelFile(hotelId) {


    return path.join(

        __dirname,

        "../data",

        `hotel${hotelId}.json`

    );

}



function getHotelInformation(hotelId) {


    const filePath = getHotelFile(hotelId);



    if(!fs.existsSync(filePath)){


        throw new Error(
            "Hotel nicht gefunden: " + filePath
        );


    }



    const data =
        fs.readFileSync(
            filePath,
            "utf-8"
        );



    return JSON.parse(data);


}



function updateHotelInformation(hotelId, hotelData){


    const filePath =
        getHotelFile(hotelId);



    fs.writeFileSync(

        filePath,

        JSON.stringify(
            hotelData,
            null,
            2
        )

    );


    return hotelData;


}



module.exports = {


    getHotelInformation,

    updateHotelInformation


};