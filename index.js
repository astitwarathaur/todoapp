const express = require('express');
const app = express();

// load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// middleware to parse json req body
app.use(express.json());

// import route from Todo api
const todoRoutes = require("./routes/todos");

// mount the todo api routes
app.use("/api/v1", todoRoutes);

// START server
app.listen(PORT, () => {
    console.log(`Server started successfully at ${PORT}`);
})

// Connect db
const dbConnect = require("./config/database");
dbConnect();

//default route 
app.get("/", (req, res) => {
    res.send(`<h1>This is Homepage </h1>`);
})

