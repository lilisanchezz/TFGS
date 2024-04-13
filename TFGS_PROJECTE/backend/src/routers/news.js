const express = require('express');
const router = express.Router();
const controller = require('../controllers/news');

router.get('/', controller.getAllNews);
router.get('/:id', controller.getOneNew);
module.exports = router;