const express = require('express');
const router = express.Router();
const controller = require('../controllers/activities');

router.get('/', controller.getAllActivity);
router.get('/:id', controller.getOneActivity);
module.exports = router;