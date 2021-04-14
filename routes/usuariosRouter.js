const express = require('express');
const router = express.Router();
const validarCadastro = require('../middlewares/validarCadastro');
const usuariosControllers = require('../controllers/usuariosControllers'); 

//rotas após '/usuarios'
router.get('/', usuariosControllers.index); //solicita  //http://localhost:300/usuarios/
router.post('/', validarCadastro, usuariosControllers.create); //envia //http://localhost:300/usuarios/
router.put('/:id', usuariosControllers.update); //atualiza pelo id //http://localhost:300/usuarios/id
router.delete('/:id', usuariosControllers.delete); //deleta pelo id //http://localhost:300/usuarios/id

module.exports = router;