require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Product = require("./ProductModel.js")
const PORT = 5001

//Initialise express application
const app = express()
//Connect to Mongo useing mongoose
mongoose.connect(process.env.DB_STRING,{useNewUrlParser: true})
//Default connection
const db = mongoose.connection
//Bind connection to error event to be notified of errors
db.on("error", (error)=> console.error(error))
//Bind connection to open event to be notified whed when connection is made
db.once("open", ()=> console.log("Connected to database"))

//Uses middleware to parse incoming requests as json body
app.use(express.json())
//Use cors middleware to handle Cross Origin Resource Sharing
app.use(cors)

//routes to backend







app.listen(PORT, ()=> console.log(`Server is listening on PORT ${PORT}`))