const {Post, sequelize} = require('../models');

const postsControllers = {
    index: async (req, res) => {
        let posts = await Post.findAll();
        return res.json(posts);
    },
    create: async (req,res) => {
        let {texto, img, n_likes, usuarios_id} = req.body;
        let criarPost = await Post.create({
            texto,
            img,
            n_likes,
            usuarios_id
        });
        return res.json(criarPost);
    },
    update: async (req,res) => {
        let {id} = req.params;
        let {texto, n_likes} = req.body;
        let alterarPost = await Post.update({
            texto,
            n_likes
        },{
            where:{id}
        });
        return res.json(alterarPost);
    },
    delete: async (req,res) => {
        let {id} = req.params;
        let deletarPost = await Post.destroy({
            where: {id}
        })
        return res.json(deletarPost);
    }
}

module.exports = postsControllers;