'use strict';
const bcrypt = require('bcrypt')
module.exports = {
  async up (queryInterface, Sequelize) {
   
       await queryInterface.bulkInsert(
         'usuarios', [
     {
       id: 1,
      nome: "Zé",
    email:'ze@mail.com',
  senha: bcrypt.hashSync('123456',10)
},
     {
       id: 2,
      nome: "maria",
      email:'maria@mail.com',
    senha: bcrypt.hashSync('123456',10)
  },
     {
       id: 3,
      nome: "mané",
      email:'mane@mail.com',
    senha: bcrypt.hashSync('123456',10)}
    ], 
      {});
   
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('usuarios', null, {});
     
  }
};
