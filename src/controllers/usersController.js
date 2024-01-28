const usersServices = require ('../services/usersServices.js');
const dependenciesServices = require ('../services/dependenciesService.js');

const usersController = {
    create: function(req,res){
        const errors = req.session.errors;
        const oldData = req.session.oldData;
        const allDependencies = dependenciesServices.getAllDependencies();
        req.session.errors = null;
        req.session.oldData = null;
        res.render('./users/users-create-form.ejs',{
            errors:errors ? errors : null, 
            oldData:oldData ? oldData : null,
            allDependencies: allDependencies ? allDependencies:null
        });
    },
    
    show: function(req,res){
        const users = usersServices.getAllUsers();
        res.render('users/users-show-all.ejs',{users});
    },
    
    store: function(req,res){
        usersServices.store(req.body);
        res.redirect('/users/show');
    },
    
    edit: function (req,res){
        const userId = req.params.id;
        const allDependencies = dependenciesServices.getAllDependencies();
        const user = usersServices.getUserById(userId);
        res.render('users/users-edit-form.ejs',{
            allDependencies:allDependencies?allDependencies:null,
            user:user?user:null});
    }, 

    update: function(req,res){
        const id = req.params.id;
        const userData = req.body
        usersServices.update(id,userData);
        res.redirect('/users/show');
    },

    delete: function(req,res){
        const id = req.params.id;
        usersServices.delete(id);
        res.redirect('/users/show');
    }

}

module.exports = usersController;