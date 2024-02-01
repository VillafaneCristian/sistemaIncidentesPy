const incidentService = require ('../services/incidentService.js'); 

const incidentsController = {

    create: function (req,res){
        res.render('incidents/incidents-create-form.ejs');
    },

    store: function (req,res){
        console.log(req.session.operatorLogged); 
        const newIncident = {
            id: incidentService.getId(),
            operatorCreator: req.session.operatorLogged.cuil,
            operatorAsigned: req.session.operatorLogged.cuil,
            state: 'open',
            progress: '',
            ...req.body  
        }
        incidentService.storeIncident(newIncident);
        res.redirect('/incidents/stateopenlist'); 
    },

    edit: function (req,res){
        const id = req.params.id; 
        const incident = incidentService.getIncidentById(id);
        res.render('incidents/incidents-edit-form.ejs',
        {incident});

    },

    update: function (req,res){
        const id = req.params.id;
        incidentService.update(id,req.body);
        res.redirect('/incidents/stateopenlist');
    },

    stateOpenList: function (req,res){
        const incidentsStateOpenForOperator = incidentService.getIncidentsOpenForOperator(req.session.operatorLogged);
        const incidentsStateOpenForTaller = incidentService.getIncidentsOpenForTaller();
        const incidentsStateOpenForPrestamo = incidentService.getIncidentsOpenForPrestamo();
        res.render('incidents/incidents-stateOpen-list.ejs',
        {incidentsStateOpenForOperator: incidentsStateOpenForOperator ? incidentsStateOpenForOperator : null,
         incidentsStateOpenForTaller: incidentsStateOpenForTaller ? incidentsStateOpenForTaller : null,
         incidentsStateOpenForPrestamo : incidentsStateOpenForPrestamo ? incidentsStateOpenForPrestamo : null    
        }
        );
    }
};

module.exports = incidentsController; 