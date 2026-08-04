const express = require("express");

const router = express.Router();

const hotelService = require("../services/hotelService");



router.get("/:hotelId", (req, res) => {


    console.log(
        "Hotel Anfrage:",
        req.params.hotelId
    );



    try {


        const hotel = hotelService.getHotelInformation(

            req.params.hotelId

        );



        res.json(hotel);



    } catch(error) {


        console.error(error);


        res.status(404).json({

            error: error.message

        });


    }


});



module.exports = router;