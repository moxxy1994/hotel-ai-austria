const aiService = require("../services/aiService");

function detectCategory(message) {
  const text = message.toLowerCase();

  if (text.includes("frühstück") || text.includes("breakfast") || text.includes("reggeli") || text.includes("doručak")) {
    return "🍳 Frühstück";
  }

  if (text.includes("park") || text.includes("garage") || text.includes("parking")) {
    return "🚗 Parkplatz";
  }

  if (text.includes("haustier") || text.includes("hund") || text.includes("pet") || text.includes("állat") || text.includes("kućni ljubimac")) {
    return "🐕 Haustiere";
  }

  if (text.includes("wellness") || text.includes("spa") || text.includes("szauna")) {
    return "🧖 Wellness";
  }

  if (text.includes("buchen") || text.includes("reserv") || text.includes("book") || text.includes("foglal") || text.includes("rezerv")) {
    return "🛏️ Reservierung";
  }

  return "❓ Allgemein";
}

exports.generateResponse = async (req, res) => {
  try {
    const message = req.body.message;
    const hotelId = req.body.hotelId || "001";

    const category = detectCategory(message);

    const answer = await aiService.generateHotelResponse(message, hotelId);

    res.json({
      reply: answer,
      category: category
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      reply: "Die KI konnte momentan nicht erreicht werden.",
      category: "❌ Fehler"
    });
  }
};