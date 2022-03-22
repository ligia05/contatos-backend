

const { sequelize } = require('../database/models');

const uid = 1;


module.exports = {
    index: async (req, res) => {
        let sql = `SELECT id,nome FROM contatos WHERE usuarios_id=${uid}`;
        let contatos = await sequelize.query(sql, { type: sequelize.QueryTypes.SELECT });
        res.status(200).json(contatos);
    },

    show:async (req, res) => {
        let sql = `SELECT id,nome FROM contatos WHERE usuarios_id=${uid} AND id=${req.params.id}`;
        let resultado = await sequelize.query(sql, { type: sequelize.QueryTypes.SELECT });
        if(resultado.length==0){
            res.status(404).json({msg:'contato inexistente'});
        } else{
            res.status(200).res.json(resultado[0]);
        }
    
 
    },
    search: async (req, res) => { 
        let trechoBuscado= req.query.q;
        let sql = `SELECT id, nome FROM contatos WHERE usuarios_id=${uid} AND nome LIKE '%${trechoBuscado}%'`;

       let resultado = await sequelize.query(sql, { type: sequelize.QueryTypes.SELECT });
       res.status(200).res.json(resultado);
    },
    create: async (req, res) => { 
        let {nome, emails, telenones} = req.body;
 
let sql = `INSERT INTO contatos (nome, usuarios_id) VALUES ("${nome}","${uid}")`;
let resultado = await sequelize.query(sql,{type: sequelize.QueryTypes.INSERT}); 
let [idCriado, nLinhas]= resultado;

emails = emails.map((e)=>{return{email:e,contatos_id:idCriado}});
sequelize.queryInterface.bulkInsert("emails",emails);


telefones = telefones.map((e)=>{return{telefone:t,contatos_id:idCriado}});
sequelize.queryInterface.bulkInsert("telefones",telefones);




        res.json({msg:"ok", idCriado})

    },
    destroy: (req, res) => { res.send('função destroy') },
    update: (req, res) => { res.send('função update') }
}



// Capturando as info do body


// Salvar o nome contato

// Levantar o ID do contato recém criado

// Salvar os emails 

// Salvar os telefones

// Enviar uma resposta para o cliente
