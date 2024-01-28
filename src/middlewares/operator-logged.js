module.exports = (req,res,next) => {

    res.locals.operatorLogged = req.session.operatorLogged;
    next(); 

}