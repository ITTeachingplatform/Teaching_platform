var mysql = require('mysql');
var settings = require('./setting');

module.exports.getConnection = function () {
if ((module.exports.connection) && (module.exports.connection.socket) && (module.exports.connection._socket.readable) && (module.exports.connection._socket.writable)) {
    return module.exports.connection;
}
console.log(((module.exports.connection) ? "UNHEALTHY SQL CONNECTION; RE" : "") + "CONNECT TO SQL.");
var connection = mysql.createConnection({
        host: settings.mysql.host,
        port: settings.mysql.port,
        database: settings.mysql.database,
        user: settings.mysql.user,
        password: settings.mysql.password,
        charset: "utf8"
});
connection.connect(function (err) {
        if (err) {
            console.log("SQL CONNECT ERROR: ", err);
        } else {
            console.log("SQL CONNECT SUCCESSFUL.");
        }
});
connection.on("close", function(err) {
        console.log("SQL CONNECTION CLOSED.");
});
connection.on("error", function(err) {
        console.log("SQL CONNECTION ERROR: ." + err);
});
module.exports.connection = connection;
return module.exports.connection;
};

module.exports.getConnection();