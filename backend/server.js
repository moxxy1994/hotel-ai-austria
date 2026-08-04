const adminRoutes = require("./routes/adminRoutes");

require("dotenv").config();

const express = require("express");
const cors = require("cors");

const chatRoutes = require("./routes/chatRoutes");
const hotelRoutes = require("./routes/hotelRoutes");


const app = express();


app.use(cors());

app.use(express.json());



app.use("/api/chat", chatRoutes);

app.use("/api/hotels", hotelRoutes);

app.use("/api/admin", adminRoutes);


app.get("/", (req, res) => {

    res.json({

        message: "HotelAI Backend läuft 🚀"

    });

});



app.listen(3000, () => {

    console.log(
        "Server läuft auf Port 3000"
    );

});