const express = require ('express');
const router = express.Router();
const operatorsController = require ('../controllers/operatorsController.js');

router.get('/create',operatorsController.create);


module.exports = router;