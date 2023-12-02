const dependenciesService = require ('../services/dependenciesService.js');

const dependenciesController = {
    show: function(req,res){
        const dependencies = dependenciesService.getAllDependencies();
        res.render('./dependencies/dependencies-show-all.ejs',{dependencies}); 
    },
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
    },
    edit: function(req,res){
        const id = req.params.id;
        const dependencie = dependenciesService.getDependencieById(id); 
        res.render('./dependencies/dependencies-edit-form.ejs',{dependencie});
    }, 
    update:function(req,res){
        res.send('viaje por put');
    }

};

module.exports = dependenciesController; 