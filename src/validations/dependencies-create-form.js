const {body} = require ('express-validator');

const validations = [
body('name').notEmpty().withMessage('Debe ingresar un Nombre'),
body('code').notEmpty().withMessage('Debe ingresar un Codigo'),
body('email')
    .notEmpty().withMessage('Debe ingresar un E-mail')
    .isEmail().withMessage('Debe Ingresar un E-Mail Válido')
    .bail(),
body('floor').notEmpty().withMessage('Debe seleccionar una opción'),
body('side').notEmpty().withMessage('Debe seleccionar una opción')
]

module.exports = validations;