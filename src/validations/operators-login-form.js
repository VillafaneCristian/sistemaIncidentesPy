const {body} = require ('express-validator');

module.exports = [
 body('cuil').notEmpty().withMessage('El campo CUIL no puede estar vacío'),
 body('password').notEmpty().withMessage('El campo Password no puede estar vacío')
];

