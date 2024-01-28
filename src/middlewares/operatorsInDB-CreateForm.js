const operatorsService = require ('../services/operatorsService.js');

module.exports = (req,res,next) => {

    const operatorInDB = operatorsService.operatorInDB('cuil',req.body.cuil);

    if (operatorInDB){
        req.session.errors={
            cuil:{
                msg:'Ya existe un operador con ese CUIL en la base de datos'
            }
        };
        req.session.oldData = req.body;
        res.redirect('/operators/create');
    }else{
        next();
    }

}