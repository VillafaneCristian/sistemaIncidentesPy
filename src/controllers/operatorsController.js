const bcryptjs = require ('bcryptjs');

const operatorsService = require('../services/operatorsService.js');
const operatorsServie = require ('../services/operatorsService.js');

const operatorsControllers = {

    //Form to create one operator
    create: function (req,res){
        const errors = req.session.errors;
        const oldData = req.session.oldData;
        req.session.errors = null;
        req.session.oldData = null;
        res.render('./operators/operators-create-form.ejs',{
            errors: errors ? errors : null,
            oldData: oldData ? oldData : null
        });
    },

    store: function (req,res){
       
        const oneOperator = {
            ...req.body,
            avatar:'default-user.jpg',
            password:  bcryptjs.hashSync(req.body.password)
        }
        operatorsService.storeOperator(oneOperator);
        res.redirect('/');       
        
    },

    login: function (req,res){
        const errors = req.session.errors;
        const oldData = req.session.oldData;
        req.session.errors = null;
        req.session.oldData = null;
        res.render('./operators/login.ejs',{
            errors: errors ? errors : null,
            oldData: oldData ? oldData : null
        });
    },

    loginProcess: function(req,res){   
        res.redirect('/');
    }, 

    logout: function (req,res){
        req.session.destroy();
        res.redirect('/operators/login');
    }
}

module.exports = operatorsControllers;