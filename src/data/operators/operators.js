const fs = require ('fs');
const path = require ('path');
const {v4: uuidv4} = require ('uuid');

const operators = {
    filename: path.join(__dirname,'./operatorsDataBase.json'),
    getData: function(){
        return JSON.parse(fs.readFileSync(this.filename,'utf-8'));
    },

    saveData: function(operatorData){
        fs.writeFileSync(this.filename, JSON.stringify(operatorData,null,' '));
    },

    generateId: function(){
        const allOperators = this.findAll();
        const lastOperator = allOperators.pop();
        if (lastOperator){
            return lastOperator.id + 1;
        }
        return 1;        
    },

    findAll: function(){
        return this.getData();
    },

    findByPk: function(id){
        const allOperators = this.findAll();
        const operatorFound = allOperators.find(oneOperator => oneOperator.id === id);
        return operatorFound;
    },

    findByField: function(field,text){
        const allOperators = this.findAll();
        const operatorFound = allOperators.find(oneOperator => oneOperator[field] === text);
        return operatorFound;

    },

    storeOperator: function(operatorData){
        const allOperators = this.findAll();
        const newOperator ={
            id: uuidv4(),
            ...operatorData
        }
        allOperators.push(newOperator);
        this.saveData(allOperators);
        return true;
    },

    delete: function(id){
        const allOperators = this.findAll();
        const finalOperators = allOperators.filter(oneOperator => oneOperator.id !== id);
        this.saveData(finalOperators);
        return true;
    }

}


module.exports = operators; 



