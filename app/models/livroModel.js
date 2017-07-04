var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var livroSchema = new Schema({
    nome: {
        type: String,
        Required: 'Favor digitar nome'
    },
    datadePublicacao: {
        type: Date,
        default: Date.now,
        Required: 'Favor digitar DatadePublicacao'
    },
    editora: {
        type: String,
        Required: 'Favor digitar nome da Editora'
    
    },
    autor: {
        type: String,
        Required: 'Favor digitar nome do Autor'
        
    }


});

module.exports = mongoose.model('Livro',livroSchema);