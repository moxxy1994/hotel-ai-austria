const aiService = require("../services/aiService");



exports.generateResponse = async (req, res) => {


    try {


        const message = req.body.message;

        const hotelId = req.body.hotelId || "001";



        const answer = await aiService.generateHotelResponse(

            message,

            hotelId

        );



        res.json({

            reply: answer

        });



    } catch(error) {


        console.error(error);



        res.status(500).json({

            reply:
            "Die KI konnte momentan nicht erreicht werden."

        });


    }


};