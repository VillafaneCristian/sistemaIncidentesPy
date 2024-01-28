module.exports = (req, res, next) => {

    if (req.session.operatorLogged) {
        res.redirect('/');
    }else{
        next();
    }

};