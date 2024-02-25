const express = require("express")
const path = require('path')
const cors = require("cors");
const bodyParser = require("body-parser")
const apiRouter = require('./src/routes/apiRoute')
require('dotenv').config({path:path.resolve(__dirname, '..', '.env')})

const port = process.env.PORT || 8000
const app = express();

app.use(cors())
app.use(bodyParser.json());

app.use('/api', apiRouter)

app.listen(port);
console.log("Server listening on port: " + port)