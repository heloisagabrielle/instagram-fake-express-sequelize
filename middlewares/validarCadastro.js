const { Usuario } = require('../models');

module.exports = async (req, res, next) => {
    let {email, nome, senha} = req.body
    let user = await Usuario.findAll({ where: {email} } )
    if(user.length){
        res.status(400).json({ erro: "Email já cadastrado" });
        return;
    }else{
        let userName = await Usuario.findAll({ where: {nome}})
        if(!userName.lenght){
            res.status(400).json({ erro: "Campo nome é obrigatório" });
            return;
        }else{
            next();
        }
    }
}