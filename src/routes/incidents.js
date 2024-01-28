const express = require ('express');
const router = express.Router();

const incidentsController = require ('../controllers/incidentsControllers.js');

router.get('/create', incidentsController.create);
router.post('/store',incidentsController.store); 


module.exports = router;