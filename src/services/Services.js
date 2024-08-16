const { Transaction } = require('sequelize')
const dataSource = require('../database/models') //chamando o index dentro de models

class Services {
    constructor(nomeDoModel) {
        this.model = nomeDoModel
    }

    async pegaTodosOsRegistros(where = {}) {
        return dataSource[this.model].findAll({where: {...where}})
    }

    async pegaRegistrosPorEscopo(escopo) {
        return dataSource[this.model].scope(escopo).findAll()
    }

    async pegaUmRegistroPorId(id) {
        return dataSource[this.model].findByPk(id)
    }

    async pegaUmRegistro(where) {
        return dataSource[this.model].findOne({where: {...where}})
    }

    async pegaEContaRegistros(options) {
        return dataSource[this.model].findAndCountAll({...options})
    }

    async criaRegistro(dadosDoRegistro) {
        return dataSource[this.model].create(dadosDoRegistro)
    }

    async atualizaRegistro(dadosAtualizados, where, transacao = {}) {
        const listaDeRegistrosAtualizados = await dataSource[this.model]
        .update(dadosAtualizados, {
            where: {...where},
            transaction: transacao
        })
        if (listaDeRegistrosAtualizados[0] === 0) {
            return false
        }
        return true
    }

    async deletaRegistro(id) {
        return dataSource[this.model].destroy({where: {id: id}})
    }
}

module.exports = Services

// usar query string na rota /cursos?data_inicial=2023-01-01&data_final=2024-09-01 para filtrar por data, código no CursoController