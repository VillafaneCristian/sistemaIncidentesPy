const db = require ('../data/db.js');

const dependenciesServices = {
    storeDependencie: function(dependencie){
        db.dependencies.store(dependencie);
    },
    getAllDependencies: function(){
        return db.dependencies.findAll()
    },

    getDependencieById: function(id){
        return db.dependencies.findByPk(id);
    },

    updateDependencie: function(id,dependencie){
        db.dependencies.update(id,dependencie); 
    },

    deleteDependencie: function(id){
        db.dependencies.delete(id);
    }


}


module.exports = dependenciesServices;