const express = require('express');
const router = express.Router();
const usuariosControllers = require('../controllers/usuariosControllers');

/* rotas a partir de '/usuarios' definido em rotas no arquivo index.js */
router.get('/', usuariosControllers.index); //solicita  //http://localhost:300/usuarios/
router.post('/', usuariosControllers.create); //envia //http://localhost:300/usuarios/
router.put('/:id', usuariosControllers.update); //atualiza //http://localhost:300/usuarios/id
router.delete('/:id', usuariosControllers.delete); //deleta //http://localhost:300/usuarios/id

module.exports = router;