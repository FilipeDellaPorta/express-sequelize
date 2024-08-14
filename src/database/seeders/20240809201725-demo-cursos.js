'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('cursos', [
      {
        titulo: 'API com Express',
        descricao: 'Curso de API com Express e MongoDB',
        data_inicio: '2023-01-01',
        categoria_id: 17,
        docente_id: 37,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'SpringBoot',
        descricao: 'Curso de Java com Spring Framework',
        data_inicio: '2023-01-01',
        categoria_id: 18,
        docente_id: 39,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'Python Web com Django',
        descricao: 'Curso de aplicações web com Django',
        data_inicio: '2023-01-01',
        categoria_id: 19,
        docente_id: 41,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'Orientação a Objetos com C#',
        descricao: 'Curso de C#: coleções, arquivos e libs',
        data_inicio: '2023-01-01',
        categoria_id: 20,
        docente_id: 43,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'Desenvolvimento Fullstack com JavaScript',
        descricao: 'Curso completo de desenvolvimento web com JavaScript',
        data_inicio: '2023-03-15',
        categoria_id: 17,
        docente_id: 37,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        titulo: 'Java Avançado com Spring Boot',
        descricao: 'Curso de desenvolvimento backend com Spring Boot',
        data_inicio: '2023-06-10',
        categoria_id: 18,
        docente_id: 39,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        titulo: 'Machine Learning com Python',
        descricao: 'Curso de introdução ao Machine Learning com Python',
        data_inicio: '2023-09-01',
        categoria_id: 19,
        docente_id: 41,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        titulo: 'Desenvolvimento Mobile com Flutter',
        descricao: 'Curso de criação de aplicativos móveis com Flutter',
        data_inicio: '2024-02-05',
        categoria_id: 18,
        docente_id: 43,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        titulo: 'Design de APIs RESTful',
        descricao: 'Curso de criação e consumo de APIs RESTful',
        data_inicio: '2024-05-25',
        categoria_id: 17,
        docente_id: 37,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    ], {});

  },

  async down (queryInterface, Sequelize) {

   await queryInterface.bulkDelete('cursos', null, {});
    
  }
};
