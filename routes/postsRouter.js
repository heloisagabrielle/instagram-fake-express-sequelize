const express = require('express');
const app = require('../app');
const router = express.Router();
const postsControllers = require('../controllers/postsControllers');

// rotas após '/posts'
router.get('/', postsControllers.index); //mostrar todos os posts
router.post('/', postsControllers.create); //criar post
router.put('/:id', postsControllers.update); //atualizar post pelo id
router.delete('/:id', postsControllers.delete); //deletar post pelo id

module.exports = router;