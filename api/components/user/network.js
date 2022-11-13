const express = require('express');

const router = express.Router();

//importamos el response
const response = require('../../../network/response');

router.get('/', (req, res) => {
    res.send('Todo funciona');
    response.sucess(req, res, 'Todo bien', 200);
});

module.exports = router;