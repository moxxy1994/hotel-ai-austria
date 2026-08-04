const express = require("express");

const router = express.Router();

const hotelService = require("../services/hotelService");



// Hotel laden

router.get("/:hotelId", (req,res)=>{


    try {


        const hotel =
            hotelService.getHotelInformation(
                req.params.hotelId
            );


        res.json(hotel);



    } catch(error){


        res.status(404).json({

            error:error.message

        });


    }


});





// Hotel speichern

router.put("/:hotelId", (req,res)=>{


    try {


        const updatedHotel =
            hotelService.updateHotelInformation(

                req.params.hotelId,

                req.body

            );



        res.json({

            message:
            "Hotel erfolgreich gespeichert",

            hotel:
            updatedHotel

        });



    } catch(error){


        res.status(500).json({

            error:error.message

        });


    }


});



module.exports = router;