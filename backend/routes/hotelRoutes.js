const express = require("express");

const router = express.Router();

const hotelService = require("../services/hotelService");



// Hotelinformationen laden

router.get("/:hotelId", (req, res) => {


    try {


        const hotelId = req.params.hotelId;



        const hotelInformation =
            hotelService.getHotelInformation(hotelId);



        res.json(hotelInformation);



    } catch(error) {


        console.error(error);



        res.status(404).json({

            message: "Hotel nicht gefunden"

        });


    }


});



module.exports = router;