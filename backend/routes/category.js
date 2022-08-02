const express = require('express');
const router = express.Router();

const { test } = require('../controllers/categoryController');
//MVC = Models Viem Controller

router.get('/', test);

module.exports = router;