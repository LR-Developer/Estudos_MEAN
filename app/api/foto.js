var mongoose = require('mongoose');

module.exports = function(app) {

    var api = {};
    var model = mongoose.model('Foto');

    api.listar = function(req, res) {
        
        model.find()
            .then(function(fotos) {
                res.json(fotos);
            },
            function(error) {
                console.log(error);
                res.sendStatus(500);
            });
    };

    api.listarPorId = function(req, res) {

        model.findById(req.params.id)
            .then(function(foto){
                if (!foto) throw Error('Foto não encontrada.')
                res.json(foto);
            },
            function(error){
                console.log(error);
                res.sendStatus(404);
            })
    };

    api.incluir = function(req, res) {

        model.create(req.body)
            .then(function(foto){
                res.json(foto);
                res.sendStatus(200);
            },
            function(error){
                console.log(error);
                res.sendStatus(500);
            });
    };

    api.alterarPorId = function(req, res) {

        model.findByIdAndUpdate(req.params.id, req.body)
            .then(function(foto){
                res.json(foto);
                res.sendStatus(200);
            },
            function(error){
                console.log(error);
                res.sendStatus(500);
            });
    };

    api.deletarPorId = function(req, res) {

        model.remove({_id: req.params.id})
            .then(function() {
                res.sendStatus(204);
            },
            function(error) {
                console.log(error);
                res.sendStatus(500);
            })
    };

    return api;
}