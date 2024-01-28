const dependenciesService = require ('../services/dependenciesService.js');

const dependenciesController = {
    show: function(req,res){
        const dependencies = dependenciesService.getAllDependencies();
        res.render('dependencies/dependencies-show-all.ejs',{dependencies}); 
    },
    create: function (req,res){
        const errors = req.session.errors;
        const oldData = req.session.oldData;
        req.session.errors = null;
        req.session.oldData = null;
        res.render('./dependencies/dependencies-create-form.ejs',{
            errors: errors ? errors:null,
            oldData: oldData ? oldData:null
        }); 
    },
    store: function(req,res){
        const dependencie = {
            name: req.body.name,
            code: req.body.code,
            subCode: req.body.subCode,
            email: req.body.email,
            floor: req.body.floor,
            side: req.body.side,
            observations: req.body.observations
        };
        dependenciesService.storeDependencie(dependencie);
        res.redirect('/');
    },
    edit: function(req,res){
        const id = req.params.id;
        const dependencie = dependenciesService.getDependencieById(id); 
        res.render('./dependencies/dependencies-edit-form.ejs',{dependencie});
    }, 
    update:function(req,res){
        const dependencie = req.body;
        const id = req.params.id;
        dependenciesService.updateDependencie(id,dependencie);
        res.redirect('/');
    },

    delete: function(req,res){
        const id = req.params.id;
        dependenciesService.deleteDependencie(id);
        res.redirect('/dependencies/show');
    }

};

module.exports = dependenciesController; 