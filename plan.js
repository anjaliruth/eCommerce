//initialise node.js
//
//install cors, express, mongoose, (nodemon and dotenv as dev dependencies)
//add start and dev scripts to package.json start: node server.js dev: nodemon server.js
//create .env file and .gitignore file
//add .env and nodemodules to gitignore file

//in server.js
//require express - pulls in express library
//create app variable and assign it to express() - allows us to configure server
//create app.listen(PORT,()=>console.log( "message"))

//require mongoose - pulls in mongoose library
//mongoose.connect() - to connect to mongoose db and put process.env.DB_STRING as your argument and make sure to store DB_STRING as a key with the connection string as its value in the .env. 2nd argument should be {useNewUrlParser: true}
//error handling for when mongoose connects and when it doesnt connect, and when it does counterIncrement: // (db.on for error) (db.once for open)
//since you used .env here, you need to : require('dotenv').config() at the start of the document.


//set up our server to accept json as a body = app.use(express.json())


