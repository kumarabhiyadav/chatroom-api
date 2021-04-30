const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

//Loading Enviroment Variables
dotenv.config({ path: "./config/config.env" });

//Route Files
const message = require("./routes/messages");

// Connect to DataBase
connectDB();

const PORT = process.env.PORT;

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server Running Test");
});

app.use("/api/message", message);

const server = app.listen(PORT, console.log(`Server Listening on : ${PORT}`));
