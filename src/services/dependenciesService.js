const db = require ('../data/db.js');

const dependenciesServices = {
    createDependencie: function(dependencie){
        db.dependencies.create(dependencie);
    },
    getAllDependencies: function(){
        return db.dependencies.findAllDependencies()
    },

    getDependencieById: function(id){
        return db.dependencies.findById(id);
    }
}


module.exports = dependenciesServices;