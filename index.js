require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const bootstrap = require('./bootstrap')
const api = require('./api')

bootstrap()

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(api)

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`App run with port ${PORT}`)
})