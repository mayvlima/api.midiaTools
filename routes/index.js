const express = require('express')
const routes = express.Router()
const {check} = require('express-validator');


const usuarioController = require('../controllers/usuarioController')
const loginController = require('../controllers/loginController')
const newsController = require('../controllers/newsController')

routes.post('/cadastro', [check("userGithub").isLength({min:3}).withMessage("O nome do usuario tem que conter no minimo 3 caracteres!"), 
check("email").isEmail().withMessage("Digite um email válido!"),
check("password").isLength({min:6}).withMessage("A senha tem que conter no mínimo 6 caracteres!"),
check("cnpj").isLength({min:3}).withMessage("O CNPJ tem que conter no minimo 14 caracteres!")
], usuarioController.store);

routes.get('/login', loginController.store);

routes.post('/newsletter', newsController.store);


module.exports = routes;