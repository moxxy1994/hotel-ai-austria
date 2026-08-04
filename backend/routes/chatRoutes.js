const express = require("express");

const router = express.Router();

const aiService = require("../services/aiService");



router.post("/", async (req,res)=>{


    try {


        const {
            message,
            hotelId,
            style
        } = req.body;



        const answer =
            await aiService.generateHotelResponse(
                message,
                hotelId,
                style
            );



        res.json(answer);



    } catch(error){


        console.error(error);


        res.status(500).json({

            category:"Fehler",

            reply:
            "Die KI konnte momentan nicht erreicht werden."

        });


    }


});



module.exports = router;