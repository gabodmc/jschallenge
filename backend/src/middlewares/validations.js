const { body, params } = require('express-validator');


const validateTransaction = [
    body('concept')
        .notEmpty().withMessage('Recordá ingresar concepto').bail()
        .isLength({ min: 2 }).withMessage('El concepto debe tener mas de dos caracteres'),
    body('amount')
        .notEmpty().withMessage('El campo de monto es obligatorio')
        .bail().isNumeric().withMessage('El monto debe ser numérico')
        .bail().isFloat({max : 9000000}),
    body('date')
        .notEmpty().withMessage('El campo de fecha es obligatorio')
        .bail().isDate().withMessage('El campo debe ser en formato fecha'),
    body('revenue')
        .notEmpty().withMessage('Debes seleccionar un tipo de operación'),
];

const editTransaction = [
    body('amount')
        .isFloat({max : 9000000}).withMessage('El valor máximo es 9 millones'),
];

const userLogin = [
    body('email').notEmpty().withMessage('El campo de email es obligatorio')
    .isLength({min: 3}).withMessage('El email debe tener al menos 3 caracteres'),
]


module.exports = { validateTransaction, editTransaction, userLogin };
