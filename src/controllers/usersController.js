const usersController = {
    create: function(req,res){
        res.render('./users/users-create-form.ejs');
    }

}

module.exports = usersController;