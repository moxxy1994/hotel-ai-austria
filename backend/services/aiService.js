const OpenAI = require("openai");
const hotelService = require("./hotelService");
const promptService = require("./promptService");

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

async function generateHotelResponse(message) {

    // Hotelinformationen laden
    const hotelInformation = hotelService.getHotelInformation();

    // System Prompt erstellen
    const systemPrompt = promptService.createSystemPrompt(hotelInformation);

    // Anfrage an OpenAI senden
    const response = await client.chat.completions.create({

        model: "gpt-4.1-mini",

        messages: [

            {
                role: "system",
                content: systemPrompt
            },

            {
                role: "user",
                content: message
            }

        ]

    });

    return response.choices[0].message.content;
}

module.exports = {
    generateHotelResponse
};