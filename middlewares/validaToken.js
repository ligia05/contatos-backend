const jwt= require('jsonwebtoken');
const validaToken = (req, res, next)=>{
// Verificando se o campo authorization existe como header
if(req.headers.authorization == undefined){
    res.status(400).json({msg:"Requisição sem campo authorization"});
}

let token = req.headers.authorization.replace('bearer ','');
let usuario;
try{
    usuario = jwt.verify(token,"SEGREDO")
} catch (error) {
    res.status(403).json({msg:error.msg});
}
req.usuario = usuario;
next();

}
module.exports= validaToken;