const incidentsController = {

    create: function (req,res){
        res.render('incidents/incidents-create-form.ejs');
    },

    store: function (req,res){
        res.send('fui por post');
    }
};

module.exports = incidentsController; 