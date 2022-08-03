const express = require('express');
const router = express.Router();

const { list, create } = require('../controllers/categoryController');
//MVC = Models Viem Controller

router.get('/categories', list);
router.post('/create', create);

module.exports = router;