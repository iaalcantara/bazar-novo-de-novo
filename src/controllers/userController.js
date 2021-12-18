const models = require('../models/userSchema');

// Cadastro (Método POST)
const cadastrarUser = async (req, res) => {
    try {

        const usuario = await models.create({
            nome: req.body.nome,
            telefone: req.body.telefone,
            email: req.body.email,
            cidade: req.body.cidade,
            bairro: req.body.bairro,
            categoria: req.body.categoria,
            nomeProduto: req.body.nomeProduto,
            descricao: req.body.descricao,
            like: 0,
        })

        res.status(201).json({
            usuario,
            message: "Usuário cadastrado com sucesso!"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


// Busca todos cadastrados (Método GET)
const getAll = async (req, res) => {
    const { cidade, bairro, categoria } = req.query
    let filtro = {}

    if(cidade) filtro.cidade = cidade
    if(bairro) filtro.bairro = bairro
    if(categoria) filtro.categoria = categoria

    const usuarios = await models.find(filtro)
    res.status(200).send(usuarios)
}

// Busca  pelo id (Método GET)
const getId = async (req, res) => {
    try {
        const usuario = await models.findById(req.params.id)
        if (!usuario) {
            return res.status(200).json({ message: "Não encontrado!" })
        }
        return res.status(200).json(usuario)
    } catch (error) {
        res.status(500).json({
            message: "Código inválido!"
        })
    }
}


// Botão like (Método PATCH)
const like = async (req, res) => {

    try {

        const found = await models.findById(req.params.id)

        if (!found) {
            return res.status(200).json({ message: "Não encontrado!" })
        }
        found.like += 1
        await found.save()

        return res.status(200).send(found)
    } catch (error) {
        res.status(500).json({
            message: "Código inválido!"
        })
    }
}

// Deleta cadastrados (Método DELETE)
const removeUser = async (req, res) => {
    try {
        await models.findByIdAndDelete(req.params.id)
        return res.status(200).send({ message: `Usuário deletado com sucesso!` })
    } catch (error) {
        res.status(500).json({
            message: "Código inválido!"
        })
    }
}

// Atualiza informações cadastradas (Método PUT)
const updateUser = async (req, res) => {

    const {
        nome,
        telefone,
        email,
        cidade,
        bairro,
        categoria,
        nomeProduto,
        descricao
    } = req.body

    try {
        const usuario = await models.findById(req.params.id)
        if (!usuario) {
            return res.status(200).json({ message: "Não encontrado!" })
        }

        await models.findByIdAndUpdate(req.params.id, {
            nome,
            telefone,
            email,
            cidade,
            bairro,
            categoria,
            nomeProduto,
            descricao
        })
        res.status(200).send({ message: "Dados atualizados com sucesso!" })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: "Código inválido!"
        })
    }
}

module.exports = {

    cadastrarUser,
    getAll,
    getId,
    like,
    removeUser,
    updateUser
}