// **************** Require's ******************************//
const express = require ('express');

// ******************* express.Router() - don't touch ******************* //
const router = express.Router();

// ****************** controller require ***************************** // 
const usersController = require ('../controllers/usersController.js');


// ***************** CREATE ONE USER ******************//
router.get('/create',usersController.create); 




module.exports = router; 