const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/example', apiController.example);

module.exports = router;