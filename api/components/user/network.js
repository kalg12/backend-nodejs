const express = require('express');

const router = express.Router();

//importamos el response
const response = require('../../../network/response');

//importamos el controlador
const controller = require('./controller');

router.get('/', (req, res) => {
    const lista = controller.list();
    response.sucess(req, res, lista, 200);
});

module.exports = router;