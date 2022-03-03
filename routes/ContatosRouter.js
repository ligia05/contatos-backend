const express = requires('express');
const router = express.Router();

/*
Listar contatos                              | GET     | /contatos
Listar informações de um contato específico  | GET     | /contatos/:id
Cadastrar um contato                         | POST    | /contatos
Deletar um contato                           | DELETE  | /contatos/:id
Alterar um contato                           | UPDATE  | /contatos/:id
*/

router.get('/contatos',(req,res)=>{});
router.get('/contatos:id',(req,res)=>{});
router.post('/contatos',(req,res)=>{});
router.delete('/contatos/:id',(req,res)=>{});
router.update('/contatos:id',(req,res)=>{});

module.exports = router