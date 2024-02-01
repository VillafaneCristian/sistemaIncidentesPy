const db = require ('../data/db.js');

const incidentService = {

    getId: function(){
        return db.incidents.generateId(); 
    },

    storeIncident: function(incidentData){
        db.incidents.store(incidentData);
    },

    update: function(id, incidentData){
        db.incidents.update(id, incidentData); 
    },

    getIncidentById: function(id){
        return db.incidents.findByPk(id);
    },

    getIncidentsOpenForOperator: function(operatorLogged){
        //console.log(operatorLogged); 
        const allIncidents = db.incidents
        .findAll();
        const openIncidents = allIncidents.filter((oneIncident) => oneIncident.state == 'open');
        const incidentsOpenForOperator = openIncidents.filter((oneIncident) => oneIncident.operatorAsigned == operatorLogged.cuil);
        return incidentsOpenForOperator;
    },

    getIncidentsOpenForTaller: function(){
        const allIncidents = db.incidents
        .findAll();
        const openIncidents = allIncidents.filter((oneIncident) => oneIncident.state == 'open');
        const incidentsOpenForTaller = openIncidents.filter((oneIncident) => oneIncident.operatorAsigned == 'taller');
        return incidentsOpenForTaller;
    },

    getIncidentsOpenForPrestamo: function(){
        const allIncidents = db.incidents
        .findAll();
        const openIncidents = allIncidents.filter((oneIncident) => oneIncident.state == 'open');
        const incidentsOpenForPrestamo = openIncidents.filter((oneIncident) => oneIncident.operatorAsigned == 'prestamo');
        return incidentsOpenForPrestamo;
    }

}

module.exports = incidentService;