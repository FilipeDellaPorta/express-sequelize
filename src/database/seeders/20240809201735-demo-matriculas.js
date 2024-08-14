'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('matriculas', [
        {
          estudante_id: 33,
          curso_id: 13,
          status: 'matriculado',
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          estudante_id: 34,
          curso_id: 14,
          status: 'matriculado',
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          estudante_id: 35,
          curso_id: 15,
          status: 'matriculado',
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          estudante_id: 36,
          curso_id: 16,
          status: 'matriculado',
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          estudante_id: 33,
          curso_id: 17,
          status: 'cancelado',
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          estudante_id: 34,
          curso_id: 18,
          status: 'matriculado',
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          estudante_id: 35,
          curso_id: 19,
          status: 'matriculado',
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          estudante_id: 36,
          curso_id: 20,
          status: 'cancelado',
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          estudante_id: 33,
          curso_id: 21,
          status: 'matriculado',
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          estudante_id: 34,
          curso_id: 13,
          status: 'matriculado',
          createdAt: new Date(),
          updatedAt: new Date(),
      },
    ], {});

  },

  async down (queryInterface, Sequelize) {
   
    await queryInterface.bulkDelete('matriculas', null, {});

  }
};
