const {sequelize} = require('../database/models');


const AuthController = {
    login:async (req,res) =>{
   
let {email,senha}= req.body;
let sql= `SELECT id FROM usuarios WHERE email = '${email}'`;
let resultados = await sequelize.query(sql, {type:sequelize.QueryTypes.SELECT});

if(resultados.length == 0){
    return res.status(403).json({msg:"falha no login"})
}else {
    return res.status(200).json({msg:"encontrou usuario"})
}

}
}

module.exports = AuthController;