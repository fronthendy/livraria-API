const {
    Livros
} = require('../models/');

const LivrosController = {
    index: async (req, res) => {
        const livros = await Livros.findAll();

        return res.json(livros);
    },
    show: async (req, res) => {
        const {
            id
        } = req.params;
        const livro = await Livros.findByPk(id);

        return res.json(livro);
    },
    create: async (req, res) => {
        const {
            id
        } = req.params;

        const {
            titulo,
            quantidade_paginas,
            autor,
            ano_lancamento,
            estoque
        } = req.body;

        const livroCriado = await Livros.create({
            titulo,
            quantidade_paginas,
            autor,
            ano_lancamento,
            estoque
        });

        res.json(livroCriado);

    },
    update: async (req, res) => {
        const {
            id
        } = req.params;

        const {
            titulo,
            quantidade_paginas,
            autor,
            ano_lancamento,
            estoque
        } = req.body;

        const livroAtualizado = await Livros.update({
            titulo,
            quantidade_paginas,
            autor,
            ano_lancamento,
            estoque
        }, {
            where: {
                id
            }
        });

        res.json(livroAtualizado);

    },
    delete: async (req, res) => {
        const {
            id
        } = req.params;

        const livro = await Livros.destroy({
            where: {
                id
            }
        });

        res.json(livro);
    }
}

module.exports = LivrosController;