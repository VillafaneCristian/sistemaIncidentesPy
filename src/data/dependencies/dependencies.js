const fs = require ('fs');
const path = require ('path');
const {v4 : uuidv4} = require ('uuid');

const dependencies = {
    fileName: path.join(__dirname,'./dependenciesDataBase.json'),

    getData: function(){
        return JSON.parse(fs.readFileSync(this.fileName,'utf-8'));
    },

    saveData: function(dependencieData){
        fs.writeFileSync(this.fileName,JSON.stringify(dependencieData,null,' '));
    },

    findAll: function(){
        return this.getData();
    },

    
    findByPk: function(id){
        const allDependencies = this.findAll();
        const dependencieFound = allDependencies.find(oneDependencie => oneDependencie.id === id); 
        return dependencieFound;
    },

    findByField: function(field,text){
        const allDependencies = this.findAll();
        const dependencieFound = allDependencies.find(oneDependencie => oneDependencie[field]===text);
        return dependencieFound;
    },

    store: function(dependencieData){
        console.log(`Creating Dependencie ${dependencieData.name}`);
        const allDependencies = this.findAll();
        const newDependencie = {
            id: uuidv4(),
            ...dependencieData
        }
        allDependencies.push(newDependencie);
        this.saveData(allDependencies);
    },

    update: function(id,dependencieData){
        console.log(`Updating dependencie ${dependencieData.name}`);
        const allDependencies = this.findAll();
        const dependencieToEdit = allDependencies.find(oneDependencie => oneDependencie.id === id);
        Object.assign(dependencieToEdit,dependencieData);        
        this.saveData(allDependencies);
    },
    
    delete: function(id){
        console.log(`Deleting Dependencie with id ${id}`);
        const allDependencies = this.findAll();
        const nonDeletedDependencies = allDependencies.filter(oneDependencie => oneDependencie.id !== id);
        this.saveData(nonDeletedDependencies); 
    }

}

module.exports = dependencies;