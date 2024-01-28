const {body} = require ('express-validator');


module.exports = [
    
    body('first_name').notEmpty().withMessage('El campo Nombre no puede estar vacío'),
    body('last_name').notEmpty().withMessage('El campo Apellido no puede estar vacío'),
    body('cuil').notEmpty().withMessage('El campo CUIL no puede estar vacío'),
    body('email')
        .notEmpty().withMessage('El campo E-Mail no puede estar vacío')
        .isEmail().withMessage('Debe ingresar un E-Mail válido')
        .bail(),
    body('dependencie').notEmpty().withMessage('Debe seleccionar una opción')
];