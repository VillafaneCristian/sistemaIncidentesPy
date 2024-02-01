const path = require ('path');
const fs = require ('fs');

const incidents = {

    fileName: path.join(__dirname,'./incidentsDataBase.json'),

    getData: function(){ 
        return JSON.parse(fs.readFileSync(this.fileName,'utf-8'));
    },

    saveData: function(incidentData){
        fs.writeFileSync(this.fileName, JSON.stringify(incidentData,null,2));
    },

    generateId: function(){
        const allIncidents = this.findAll();
        const lastIncident = allIncidents.pop();
        if (lastIncident){
            return lastIncident.id + 1;
        }
        return 1;
    },
   
    findAll: function (){
        return this.getData();
    },

    findByPk: function(id){
        const allIncidents = this.findAll();
        const incidentFound = allIncidents.find((oneIncident) => oneIncident.id == id);
        return incidentFound;
    },

    findByField: function(field,text){
        const allIncidents = this.findAll();
        const incidentFound = allIncidents.find((oneIncident) => oneIncident[field] == text)
        return incidentFound;
    }, 

    store: function(incidentData){
        console.log('Creating a new incident')
        const allIncidents = this.findAll();
        const newIncident = {
            id: this.generateId(),
            ...incidentData
        }
        allIncidents.push(newIncident);
        this.saveData(allIncidents);
    }, 

    delete: function(id){
        console.log('Deleting one incident')
        const allIncidents = this.findAll();
        const nonDeletedIncidents = allIncidents.filter((oneIncident) => oneIncident.id != id);
        this.saveData(nonDeletedIncidents); 
    },

    update: function (id, incidentData) {
        console.log('updating one incident'); 
        const allIncidents = this.findAll();
        const incidentToEdit = allIncidents.find((oneIncident) => oneIncident.id == id );
        Object.assign(incidentToEdit,incidentData); 
        this.saveData(allIncidents); 
    }
};

module.exports = incidents;