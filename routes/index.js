const express = require("express");
const LivrosController = require("../controllers/LivrosController");
const router = express.Router();

//listar
router.get('/livros', LivrosController.index);
// mostrar um livro especifico
router.get('/livros/:id', LivrosController.show);
// criar livro
router.post('/livros/', LivrosController.create);
// atualizar livro
router.put('/livros/:id', LivrosController.update);
// apagar livro
router.delete('/livros/:id', LivrosController.delete);

module.exports = router;