module.exports = (req, res , next) => {
    if(!req.session.operatorLogged){
        res.redirect('/operators/login');
    }else{
        next();
    }

}