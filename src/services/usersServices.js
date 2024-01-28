const db = require ('../data/db.js');

const usersServices = {

    getAllUsers: function(){
        return db.users.findAll();
    },

    getUserById: function(id){
        return db.users.findByPk(id);
    },

    store: function(userData){
        db.users.store(userData);
    },

    update: function(id,userData){
        db.users.update(id,userData);
    },

    delete: function(id){
        db.users.delete(id);
    }
    

}

module.exports = usersServices;