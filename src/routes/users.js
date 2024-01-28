// **************** Require's ******************************//
const express = require ('express');

// ******************* express.Router() - don't touch ******************* //
const router = express.Router();

// ****************** controller require ***************************** // 
const usersController = require ('../controllers/usersController.js');

//******************* validations requires ***************************//
const validations = require ('../validations/users-create-form.js');
const validateForm = require ('../middlewares/validations-users-create-form.js');

// ***************** CREATE ONE USER ******************//
router.get('/create',usersController.create); 
router.post('/store',validations, validateForm, usersController.store);

// **************** SHOW ALL USERS *******************//
router.get('/show',usersController.show); 

// **************** EDIT UNE USER *********************//
router.get('/edit/:id',usersController.edit);
router.put('/:id',usersController.update);

// **************** DELETE ONE USER *******************//
router.delete('/:id', usersController.delete);


module.exports = router; 