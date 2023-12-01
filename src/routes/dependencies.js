// ************************ Require's ****************************//
const express = require ('express');

// ***************** express.Router() - don't touch **************** //
const router = express.Router();

// **************** controller Require ******************* // 
const dependenciesController = require ('../controllers/dependenciesController.js');

// **************** CREATE ONE DEPENDENCIE ****************** //
router.get('/create', dependenciesController.create); 
router.post('/store',dependenciesController.store);




module.exports = router; 