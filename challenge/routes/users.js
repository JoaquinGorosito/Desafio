const express = require('express');
const router = express.Router();

const { body } = require('express-validator');

const usersController = require ('../controllers/usersController');

const validations = [
    body('nombre').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('apellido').notEmpty().withMessage('Tienes que escribir un apellido'),
    body('email').notEmpty().withMessage('Tienes que escribir un email'),
    body('password').notEmpty().withMessage('Tienes que escribir una contraseña')
]

router.get('/register' ,usersController.register);

router.post('/register', validations, usersController.processRegister);

router.get('/login', usersController.login)

module.exports = router;