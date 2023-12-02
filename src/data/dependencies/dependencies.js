const fs = require ('fs');
const path = require ('path');
const {v4:uuidv4} = require ('uuid');

const dependencies = {
    dependenciesFilePath: path.join(__dirname,'./dependenciesDataBase.json'),
   
    getAllDependencies: function(){
        const dependencies = JSON.parse(fs.readFileSync(this.dependenciesFilePath,'utf-8'));
        return dependencies;
    },
    
    saveAllDependencies: function(dependencies){
        fs.writeFileSync(this.dependenciesFilePath,JSON.stringify(dependencies,null,2));
    },
    
    findAllDependencies: function(){
        return this.getAllDependencies();
    },

    findById: function(id){
        const dependencie = this.getAllDependencies().find((dependencie)=>dependencie.id==id);
        return dependencie;  
    },
    
    create: function (dependencie) {
        console.log(`Creating dependencie ${dependencie.name}`);
        const dependencies = this.getAllDependencies();
        const newDependencie = {
            id: uuidv4(),
            ...dependencie,
        };
        dependencies.push(newDependencie);
        this.saveAllDependencies(dependencies);
    }
}



module.exports = dependencies;


