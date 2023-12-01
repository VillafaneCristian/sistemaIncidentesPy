// *************** Requires's ********************* // 
const express = require ('express');
const router = express.Router();


// ******************* controller require ********************//
const equipmentsController = require ('../controllers/equipmentController.js');

// ******************* CREATE ONE EQUIPMENT *************** //
router.get('/create',equipmentsController.create);



module.exports = router;