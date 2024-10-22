import Produto from '../models/produto-model.js';

export const store = async (req, res) => {
    try {
        const produto = await Produto.create(req.body);
        return res.status(201).json(produto);
    } catch (error) {
        return res.status(500).json({ error: error });
    }
};

export const index = async (req, res) => {
    try {
        const produtos = await Produto.find().exec();
        return res.status(200).json(produtos);
    } catch (error) {
        return res.status(500).json({ error: error });
    }
};