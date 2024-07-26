const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const connectDB=require("./config/db");
const rootroute = require("./routes/rootroute");
const courseroute=require("./routes/courseroute");

const PORT = process.env.PORT || 8000 || 6000;                    //******doubt********
const app = express();
connectDB();

app.use("/", rootroute);
app.use("/courses", courseroute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.yellow);
  });
  
