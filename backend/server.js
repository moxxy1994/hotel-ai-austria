require("dotenv").config();

const express = require("express");
const cors = require("cors");

const chatRoutes = require("./routes/chatRoutes");
const hotelRoutes = require("./routes/hotelRoutes");


const app = express();


app.use(cors());

app.use(express.json());



// Chat API

app.use("/api/chat", chatRoutes);



// Hotel API

app.use("/api/hotels", hotelRoutes);



app.get("/", (req, res) => {

    res.json({

        message: "HotelAI Backend läuft 🚀"

    });

});



app.listen(3000, () => {

    console.log("Server läuft auf Port 3000");

});