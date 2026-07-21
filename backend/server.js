require("dotenv").config();

const express = require("express");
const cors = require("cors");

const chatRoutes = require("./routes/chatRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/chat", chatRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "HotelAI Backend läuft 🚀"
    });
});

app.listen(3000, () => {
    console.log("Server läuft auf Port 3000");
});