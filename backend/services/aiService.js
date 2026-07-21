const hotelService = require("./hotelService");
const OpenAI = require("openai");

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});


async function generateHotelResponse(message) {

    const hotelInformation =
    hotelService.getHotelInformation();

    const response = await client.chat.completions.create({

        model: "gpt-4.1-mini",

        messages: [

            {
                role: "system",
                content:
                `
Du bist ein professioneller KI-Rezeptionsassistent
für österreichische Hotels.

Du arbeitest für folgendes Hotel:

${JSON.stringify(hotelInformation, null, 2)}


Regeln:

- Antworte immer höflich und professionell.
- Verwende die Sprache des Gastes.
- Verwende die Hotelinformationen für deine Antwort.
- Erfinde keine Informationen.
- Wenn etwas nicht bekannt ist, sage ehrlich,
  dass ein Mitarbeiter helfen muss.
- Unterstützte Sprachen:
  Deutsch, Englisch, Ungarisch und Kroatisch.
`
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