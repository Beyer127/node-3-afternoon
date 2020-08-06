require('dotenv').config()
const express = require('express')
const massive = require('massive')
const app = express()

const { SERVER_PORT, CONNECTION_STRING} = process.env

massive({
    connection_string = CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db)
}).catch(err => console.log(err))

app.use(express.json())

// app.get('/api/', ctrl.)

app.listen(SERVER_PORT, () => {
 `listening on port ${SERVER_PORT}` 
});