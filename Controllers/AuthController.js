const {sequelize} = require('../database/models');
const bcrypt = require ('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const jwt = require('jsonwebtoken');

const AuthController = {
    login:async (req, res) => {
   
let {email, senha} = req.body;
let sql= `SELECT id,senha, nome FROM usuarios WHERE email = '${email}'`;
let resultados = await sequelize.query(sql, {type:sequelize.QueryTypes.SELECT});


if(resultados.length == 0){
    return res.status(403).json({msg:"falha no login"});
}
 
let id = resultados[0].id ; 
let senhaCriptografada = resultados[0].senha; 
let nome = resultados[0].nome;


if(!bcrypt.compareSync(senha, senhaCriptografada)){ 
    return res.status(403).json({msg:"falha no login"});
}

let usuario= {
    id,
    nome,
    email
}

let token = jwt.sign(usuario, "SEGREDO");
return res.status(200).json({token, usuario});
}
}

module.exports = AuthController;