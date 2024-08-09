class Controller {
    constructor(entidadeService) {
        this.entidadeService = entidadeService
    }

    async pegaTodos(req, res) {
        try {
            const listaDeRegistro = await this.entidadeService.pegaTodosOsRegistros()
            return res.status(200).json(listaDeRegistro)
        } catch (erro) {
            
        }
    }

    async pegaUmPorId(req, res) {
        const {id} = req.params
        try {
            const umRegistro = await this.entidadeService.pegaUmRegistroPorId(Number(id))
            return res.status(200).json(umRegistro)
        } catch (erro) {
            
        }
    }

    async criaNovo(req, res) {
        const dadosParaCriacao = req.body
        try {
            const novoRegistroCriado = await this.entidadeService.criaRegistro(dadosParaCriacao)
            return res.status(200).json(novoRegistroCriado)
        } catch (erro) {
            
        }
    }

    async atualiza(req, res) {
        const {id} = req.params
        const dadosAtualizados = req.body
        try {
            const foiAtualizado = await this.entidadeService.atualizaRegistro(dadosAtualizados, Number(id))
            if(!foiAtualizado) {
                return res.status(400).json({mensagem: 'registro não foi atualizado'})
            }
            return res.status(200).json({mensagem: 'atualizado com sucesso'})
        } catch (erro) {
            
        }
    }

    async deleta(req, res) {
        const {id} = req.params
        try {
            await this.entidadeService.deletaRegistro(Number(id))
            return res.status(200).json({mensagem: `id ${id} deletado`})
        } catch (erro) {
            return res.status(500).json(erro.message)
        }
    }
}

module.exports = Controller