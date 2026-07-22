const OpenAI = require("openai");
const hotelService = require("./hotelService");
const promptService = require("./promptService");

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});


const responseStyles = {

    freundlich:
        "Antworte herzlich, höflich und persönlich. Der Gast soll sich willkommen fühlen.",

    elegant:
        "Antworte professionell, gehoben und stilvoll wie ein hochwertiges Hotel.",

    luxus:
        "Antworte sehr exklusiv, besonders aufmerksam und auf dem Niveau eines 5-Sterne-Hotels.",

    locker:
        "Antworte entspannt, sympathisch und etwas persönlicher, aber weiterhin professionell."

};



async function generateHotelResponse(message, style) {


    // Hotelinformationen laden
    const hotelInformation =
        hotelService.getHotelInformation();


    // System Prompt erstellen
    let systemPrompt =
        promptService.createSystemPrompt(
            hotelInformation
        );


    // Antwortstil hinzufügen
    const selectedStyle =
        responseStyles[style] || responseStyles.freundlich;


    systemPrompt += `

Gewünschter Antwortstil:

${selectedStyle}

`;



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