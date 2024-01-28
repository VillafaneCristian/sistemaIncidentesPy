const db = require ('../data/db.js');

const operatorsService = {

    generateId: db.operators.generateId(),

    operatorInDB: function(field,text){
        return db.operators.findByField(field,text);
    },

    storeOperator: function(oneOperator){
        db.operators.storeOperator(oneOperator);
    }

};

module.exports = operatorsService;