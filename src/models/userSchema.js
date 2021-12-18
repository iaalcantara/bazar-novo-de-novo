const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    telefone: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    cidade: {
        type: String,
        require: true
    },
    bairro: { type: String },
    categoria: {
        type: String,
        require: true
    },
    nomeProduto: {
        type: String,
        require: true
    }, 
    descricao:  { type: String },
    like:  { type: Number }
})

module.exports = mongoose.model("user", UserSchema)