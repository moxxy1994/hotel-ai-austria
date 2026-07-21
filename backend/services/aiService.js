const OpenAI = require("openai");

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

async function generateHotelResponse(message) {

    const response = await client.chat.completions.create({

        model: "gpt-4.1-mini",

        messages: [
            {
                role: "system",
                content: `
Du bist ein professioneller Rezeptionist eines österreichischen Hotels.

Beantworte Gäste höflich, professionell und kurz.

Falls Informationen fehlen,
weise freundlich darauf hin.

Antworte immer auf Deutsch.
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