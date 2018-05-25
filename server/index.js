const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const dotenv = require('dotenv');
const PORT = 3214;
const app = express();

app.use(bodyParser.json());
app.get("/" , (req, res) => {
    res.status(200).send('hey')
})
massive(process.env.CONNECTION_STRING).then(database => {
    app.set('db', database)
})

app.listen(PORT, () => console.log(`${PORT} people dancing in the moonlight`))