// ************************ Require's ****************************//
const express = require ('express');

// ***************** express.Router() - don't touch **************** //
const router = express.Router();

// **************** controller Require ******************* // 
const dependenciesController = require ('../controllers/dependenciesController.js');

// **************** SHOW ALL DEPENDENCIES ******************* //
router.get('/show',dependenciesController.show);

// **************** CREATE ONE DEPENDENCIE ****************** //
router.get('/create', dependenciesController.create); 
router.post('/store',dependenciesController.store);

// **************** EDIT ONE DEPENDENCIE ******************** //
router.get('/edit/:id',dependenciesController.edit);
router.put('/:id',dependenciesController.update);




module.exports = router; 