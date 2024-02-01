const express = require ('express');
const router = express.Router();

const incidentsController = require ('../controllers/incidentsControllers.js');

router.get('/create', incidentsController.create);
router.post('/store',incidentsController.store); 

router.get('/StateOpenList', incidentsController.stateOpenList);

router.get('/edit/:id', incidentsController.edit);
router.put('/:id', incidentsController.update);


module.exports = router;