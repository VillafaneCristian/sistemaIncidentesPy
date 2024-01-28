// ************************ Require's ****************************//
const express = require ('express');

// ***************** express.Router() - don't touch **************** //
const router = express.Router();

//***************** validations Requires ********************//
const validations = require ('../validations/dependencies-create-form.js');
const validateForm = require ('../middlewares/validations-dependencies-create-form.js');

// **************** controller Require ******************* // 
const dependenciesController = require ('../controllers/dependenciesController.js');

// **************** SHOW ALL DEPENDENCIES ******************* //
router.get('/show',dependenciesController.show);

// **************** CREATE ONE DEPENDENCIE ****************** //
router.get('/create', dependenciesController.create); 
router.post('/store',validations,validateForm,dependenciesController.store);

// **************** EDIT ONE DEPENDENCIE ******************** //
router.get('/edit/:id',dependenciesController.edit);
router.put('/:id',dependenciesController.update);

// **************** DELETE ONE DEPENDENCIE ******************* //
router.delete('/:id', dependenciesController.delete);




module.exports = router; 