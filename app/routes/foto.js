module.exports = function(app) {

    var api = app.api.foto;

    app.get('/v1/fotos', api.listar);

    app.route('/v1/fotos/:id')
        .get(api.listarPorId)
        .delete(api.deletarPorId);
};