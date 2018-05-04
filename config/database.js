module.exports = function(uri) {

    var mongoose = require('mongoose');

    mongoose.connect('mongodb://' + uri);

    mongoose.connection.on('connected', function(){
        console.log('Mongo conectado!');
    });

    mongoose.connection.on('error', function(error) {
        console.log('Erro na conexão com o Mongo: ' + error);
    });

    mongoose.connection.on('disconnected', function() {
        console.log('Mongo desconectado.');
    });

    process.on('SIGINT', function() {
        mongoose.connection.close(function() {
            console.log('Conexão com o Mongo fechada.');
            process.exit(0);
        });
    });
};