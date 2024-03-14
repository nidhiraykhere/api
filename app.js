require("dotenv").config({path: "./.env"});
const express = require('express');
const app = express();

//routes
const userRouter = require("./routes/userRoute");


//logger
const logger = require("morgan")
app.use(logger("tiny"));

//parser
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/user", userRouter);

require("./models/dbconfig").dbconnection();

//server

app.listen(process.env.PORT, () => {
    console.log(`The server is running on port ${process.env.PORT}`);
});