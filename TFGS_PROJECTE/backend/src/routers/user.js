const express = require('express');
const router = express.Router();
const controller = require('../controllers/user');
const auth = require('../services/auth');
const { requireLogin } = require('../middlewares/auth');

router.post('/register', controller.create);
router.post('/login', controller.login);
router.put('/id/:id', [requireLogin], controller.update);
router.get('/:id/cites', [requireLogin], controller.getCites);
router.get('/:id/resultats', [requireLogin], controller.getResultats);


module.exports = router;
