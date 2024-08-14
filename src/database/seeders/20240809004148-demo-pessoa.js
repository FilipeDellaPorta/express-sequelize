'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pessoas', [
      {
        nome: 'Solange Estudante',
        email: 'solange@email.com',
        cpf: '63058133022',
        ativo: true,
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Igor Estudante',
        email: 'igor@email.com',
        cpf: '99018205028',
        ativo: true,
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Aline Estudante',
        email: 'aline@email.com',
        cpf: '92797497066',
        ativo: true,
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Fernando Estudante',
        email: 'fernando@email.com',
        cpf: '17195730000',
        ativo: true,
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Ricardo Docente',
        email: 'ricardo@email.com',
        cpf: '06946507061',
        ativo: true,
        role: 'docente',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Dine Docente',
        email: 'dine@email.com',
        cpf: '80941142078',
        ativo: false,
        role: 'docente',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Laura Silva',
        email: 'laura.silva@email.com',
        cpf: '12345678901',
        ativo: true,
        role: 'docente',
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        nome: 'Paulo Sousa',
        email: 'paulo.sousa@email.com',
        cpf: '98765432100',
        ativo: false,
        role: 'docente',
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        nome: 'Ana Pereira',
        email: 'ana.pereira@email.com',
        cpf: '45678912345',
        ativo: true,
        role: 'docente',
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        nome: 'Carlos Lima',
        email: 'carlos.lima@email.com',
        cpf: '87654321098',
        ativo: false,
        role: 'docente',
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        nome: 'Mariana Rocha',
        email: 'mariana.rocha@email.com',
        cpf: '78901234567',
        ativo: true,
        role: 'docente',
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pessoas', null, {});
  }
};
