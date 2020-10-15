var mongoose = require('mongoose');
const CONFIG = require('../config');
var connect = function () {
    //mongoose.Promise = global.Promise
    return mongoose.connect("mongodb+srv://" + CONFIG.mongoDB.mongodb_user + ":" + CONFIG.mongoDB.mongodb_pwd + "@" + CONFIG.mongoDB.mongodb_host + "/" + CONFIG.mongoDB.db_name, {
        // authSource: CONFIG.mongoDB.auth_db,
        // auth: {
        //     user: CONFIG.mongoDB.mongodb_user,
        //     password: CONFIG.mongoDB.mongodb_pwd,
        // },
        // replicaSet: "rs0",
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        poolSize: 25,
        useUnifiedTopology: true
    });
};

//mongoose.Promise = global.Promise;

mongoose.connection.on('connected', function () {
    console.log('Mongoose connected');
});

mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error: ' + err)
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected')
});

//if node process ends, close mongoose connection
process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('Mongoose disconnected due to app termination');
        process.exit(0);
    });
});

connect().catch((err) => console.error(err));

module.exports = {
    mongoose: mongoose,
}