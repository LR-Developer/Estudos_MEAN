module.exports = function(app) {

    var api = app.api.foto;

    app.route('/v1/fotos')
        .get(api.listar)
        .post(api.incluir);

    app.route('/v1/fotos/:id')
        .get(api.listarPorId)
        .delete(api.deletarPorId);
};