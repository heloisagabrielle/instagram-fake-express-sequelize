const {Usuario, sequelize} = require('../models');

const usuariosControllers = {
    index: async (req, res) => {
        let usuarios = await Usuario.findAll()//Nao usar no assync //.then((resultado) => { console.table(resultado.map(user => user.toJSON()));});;
        return res.json(usuarios);
    },
    create: async (req, res) => {
        let {nome,email,senha} = req.body;
        let novoUsuario = await Usuario.create({
            nome, email, senha
        });
        return res.json(novoUsuario);
    },
    update: async (req, res) => {
        let {id} = req.params;
        let {nome, email, senha} = req.body;
        let atualizarUsuario = await Usuario.update({
            nome,
            email,
            senha
        },{
            where: {id}
        })
        return res.json(atualizarUsuario);
    },
    delete: async (req,res) => {
        let {id} = req.params;
        let deletarUsuario = await Usuario.destroy({
            where: {id}
        })
        return res.json(deletarUsuario);
    }
}

module.exports = usuariosControllers;