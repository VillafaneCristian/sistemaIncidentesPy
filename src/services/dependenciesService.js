const db = require ('../data/db.js');

const dependenciesServices = {
    createDependencie: (dependencie)=>{
        db.dependencies.create(dependencie);
    }
}

module.exports = dependenciesServices;