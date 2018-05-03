module.exports = function(app) {

    var api = app.api.foto;

    app.get('/v1/fotos', api.listar);
    app.get('/v1/fotos/:id', api.listarPorId);

    app.get('/v1/fotos/:id/tipo/:idTipo', function(req, res) {

        var coringa01 = req.params.id;
        var coringa02 = req.params.idTipo;

        console.log('coringa01: ' + coringa01);
        console.log('coringa02: ' + coringa02);
     });
};