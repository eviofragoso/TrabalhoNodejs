var express = require('express');
Livro = require('../models/livroModel');
//Livro = mongoose.model('Livro');
module.exports = (function() {
    
    var router = express.Router();

    router.route('/')
    .get(function (req,res){
        Livro.find({}, function(err,livro){
            if(err)
                res.send(err);
            res.json(livro);
        });
    })

   .post(function (req,res){
       var novo_livro = new Livro(req.body);
       novo_livro.save({}, function(err,livro){
            if(err)
                res.send(err);
            res.json(livro);
        });
    });

    router.route('/:idLivro')
    .get(function (req,res){
        Livro.findById(req.params.idLivro, function(err,livro){
            if(err)
                res.send(err);
            res.json(livro);
        });
    })

    .put(function (req,res){
        Livro.findOneAndUpdate({_id: req.params.idLivro},req.body,{new: true}, function(err,livro){
            if(err)
                res.send(err);
            res.json(livro);
        });
    })

    .delete(function (req,res){
        Livro.remove({_id: req.params.idLivro}, function(err,livro){
            if(err)
                res.send(err);
            res.json({message: "Livro removido com sucesso"});
        });
    });

    return router;

});