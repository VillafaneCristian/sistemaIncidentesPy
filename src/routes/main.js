// ************* Require's *************** // 
const express = require ('express');


// ************** express.Router() - don't touch *************** //
const router = express.Router();


// *************** controllers Requires ****************** // 
const mainController = require ('../controllers/mainController.js');


// ****************** main routes ********************** //
router.get('/', mainController.index);

// ****************** dependencies routes ************** //
const dependenciesRouter = require ('./dependencies.js');
router.use('/dependencies',dependenciesRouter);

// ****************** users routes ********************* //
const usersRouter = require ('./users.js');
router.use('/users',usersRouter);

// ***************** operators routes ****************** //
const operatorsRouter = require ('./operators.js');
router.use('/operators',operatorsRouter);

// ***************** equipment routes ***************** //
const equipmentRouter = require ('./equipment.js');
router.use('/equipment',equipmentRouter);

module.exports = router; 