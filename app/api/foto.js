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

    };

    api.incluir = function(req, res) {

    };

    api.alterarPorId = function(req, res) {

    };

    api.deletarPorId = function(req, res) {

    };

    return api;
}