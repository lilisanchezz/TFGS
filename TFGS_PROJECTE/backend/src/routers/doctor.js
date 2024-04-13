const express = require('express');
const router = express.Router();
const controller = require('../controllers/doctor');
const auth = require('../services/auth');
const { requireLogin } = require('../middlewares/auth');

router.post('/login', controller.login);
router.put('/id/:id', [requireLogin], controller.update);
router.get('/:id/cites', [requireLogin], controller.getCites);
router.get('/:id/resultats', [requireLogin], controller.getResultats);
router.post('/:id/cites', [requireLogin], controller.postCites);
router.post('/:id/resultats', [requireLogin], controller.postResultats);


module.exports = router;
