const bcryptjs = require ('bcryptjs');
const operatorsService = require("../services/operatorsService");

module.exports = (req,res,next) => {

    const operatorInDB = operatorsService.operatorInDB('cuil',req.body.cuil);

    if (!operatorInDB){
        req.session.errors = {
            cuil:{
                msg: 'Usuario incorrecto'
            }
        }
        req.session.oldData = req.body;
        res.redirect('/operators/login');
    }else{
        let isOkThePassword = bcryptjs.compareSync(req.body.password, operatorInDB.password);

        if (!isOkThePassword){
            req.session.errors = {
                password:{
                    msg: 'Credenciales Inválidas'
                }
            }
            req.session.oldData = req.body;
            res.redirect('/operators/login');
        }else{
            delete operatorInDB.password;
            req.session.operatorLogged = operatorInDB;
            next();
        }
    }

}