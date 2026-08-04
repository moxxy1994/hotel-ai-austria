const OpenAI = require("openai");

const hotelService = require("./hotelService");
const promptService = require("./promptService");


const client = new OpenAI({

    apiKey: process.env.OPENAI_API_KEY

});



async function generateHotelResponse(message, hotelId, style) {


    const hotelInformation =
        hotelService.getHotelInformation(hotelId);



    const systemPrompt =
        promptService.createSystemPrompt(
            hotelInformation
        );



    const response =
        await client.chat.completions.create({

            model: "gpt-4.1-mini",


            messages: [

                {
                    role: "system",
                    content: systemPrompt
                },


                {
                    role: "user",
                    content:
                    `
Antwortstil:
${style}

Gast:
${message}
`
                }

            ]

        });



    const aiResponse =
        response.choices[0].message.content;



    return JSON.parse(aiResponse);


}



module.exports = {

    generateHotelResponse

};