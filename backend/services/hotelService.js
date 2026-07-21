const fs = require("fs");
const path = require("path");


function getHotelInformation() {

    const filePath = path.join(
        __dirname,
        "../data/hotels/hotel001.json"
    );


    const data = fs.readFileSync(
        filePath,
        "utf-8"
    );


    return JSON.parse(data);

}


module.exports = {
    getHotelInformation
};