const express = require('express');
const app = express();

require('dotenv').config({path: './config/.env'});

app.get('/', (req, res) => res.send('Hello'));

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
});