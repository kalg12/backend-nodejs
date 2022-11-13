const express = require('express');
const app = express();

const config = require("../config.js")

const user = require('./components/user/network');

//ROUTES
app.use("/api/user", user);


app.listen(config.api.port, () => {
    console.log(`Listening http://localhost:${config.api.port}`);
});