const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");   // ✅ add this
require("dotenv").config();

const app = express();

app.use(cors());        // ✅ VERY IMPORTANT
app.use(express.json());

const authRoutes = require("./routes/auth");

app.use(authRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(() => {

    console.log("MongoDB Connected");

    app.listen(5000, () => {
        console.log("Server running");
    });

})
.catch(err => console.log(err));