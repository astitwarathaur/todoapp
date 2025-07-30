const mongoose = require("mongoose");

require("dotenv").config();

const dbconnect = () => {
    mongoose.connect(process.env.DATABASE_URL)
        .then(() => {
            console.log("Database connected successfully");
        })
        .catch((error) => {
            console.log("Database connection error");
            console.error(error.messge);
            process.exit(1);
        });
}
module.exports = dbconnect;