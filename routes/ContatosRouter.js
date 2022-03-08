const express = require('express');
const router = express.Router();
const ContatosController = require('../Controllers/ContatosController')
/**
Listar contatos                              | GET     | /contatos
Listar informações de um contato específico  | GET     | /contatos/:id
Cadastrar um contato                         | POST    | /contatos
Deletar um contato                           | DELETE  | /contatos/:id
Alterar um contato                           | UPDATE  | /contatos/:id
*/

router.get('/', ContatosController.index);
router.get('/:id', ContatosController.show);
router.get('/search', ContatosController.search)
router.post('/', ContatosController.create);
router.delete('/:id', ContatosController.destroy);
router.put('/:id', ContatosController.update);

module.exports = router;