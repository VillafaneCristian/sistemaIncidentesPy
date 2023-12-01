const dependenciesService = require ('../services/dependenciesService.js');

const dependenciesController = {
    create: function (req,res){
        res.render('./dependencies/dependencies-create-form.ejs'); 
    },
    store: function(req,res){
        const dependencie = {
            name: req.body.name,
            code: req.body.code,
            subCode: req.body.subCode,
            email: req.body.email,
            floor: req.body.floor,
            side: req.body.side,
        };
        dependenciesService.createDependencie(dependencie);
        res.render('./main/index.ejs');
    }

};

module.exports = dependenciesController; 