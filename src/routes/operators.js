const express = require ('express');
const router = express.Router();


/********************* constroller require ***************************************/
const operatorsController = require ('../controllers/operatorsController.js');

//******************** validations requires  *************************************/
const validationsLoginForm = require ('../validations/operators-login-form.js');
const validateLoginForm = require ('../middlewares/validations-operators-login-form.js');

const validationsCreateForm = require ('../validations/operators-create-form-js');
const validateCreateForm = require ('../middlewares/validations-operators-create-form.js');

//******************* middlewares requires  **************************************/
const operatorInDBCreateForm = require ('../middlewares/operatorsInDB-CreateForm.js');
const operatorInDBLoginForm = require ('../middlewares/operatorInDB-loginForm.js');
const operatorAuthenticated = require ('../middlewares/operator-Authenticated.js');
const operatorGuest = require ('../middlewares/operator-guest.js');


// *********** CREATE ONE OPERATOR ************ //
router.get('/create', operatorAuthenticated, operatorsController.create);
router.post('/store', validationsCreateForm, validateCreateForm, operatorInDBCreateForm, operatorsController.store);


// ************* LOGIN OPERATOR ***************** //
router.get('/login', operatorGuest, operatorsController.login);
router.post('/login',validationsLoginForm, validateLoginForm, operatorInDBLoginForm , operatorsController.loginProcess);


// ************** LOGOUT OPERATOR **************** //

router.post ('/logout', operatorsController.logout); 


module.exports = router;