var mysql = require('mysql');
var Promise = require("bluebird");

Promise.promisifyAll(mysql);
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

var pool = mysql.createPool({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'Sharp@1991'
});

function getSqlConnection() {
    return pool.getConnectionAsync().disposer(function (connection) {
        console.log("Releasing connection back to pool")
        connection.release();
    });
}

function querySql (query, params) {
    return Promise.using(getSqlConnection(), function (connection) {
        console.log("Got connection from pool");
        if (typeof params !== 'undefined'){
            return connection.queryAsync(query, params);
        } else {
            return connection.queryAsync(query);
        }
    });
};

module.exports = {
    getSqlConnection : getSqlConnection,
    querySql : querySql
};

// var express = require('express');
// var router = express.Router();

// var dateFormat = require('dateformat');
// var db = require('../my_modules/db');
// var getSqlConnection = db.getSqlConnection;
// var querySql = db.querySql;

// var Promise = require("bluebird");

// function retrieveUser(token) {
//   var userQuery = "select id, email from users where token = ?";
//   return querySql(userQuery, [token])
//      .then(function(rows){
//         if (rows.length == 0) {
//           return Promise.reject("did not find user");
//         }

//         var user = rows[0];
//         return user;
//      });
// }

// router.post('/', function (req, res, next) {

//   Promise.resolve().then(function () {
//     return retrieveUser(req.body.token);
//   })
//     .then(function (user){
//       email = user.email;
//       res.status(200).json({ "code": 0, "message": "success", "email": email});
//     })
//     .catch(function (err) {
//       console.error("got error: " + err);
//       if (err instanceof Error) {
//         res.status(400).send("General error");
//       } else {
//         res.status(200).json({ "code": 1000, "message": err });
//       }
//     });
// });

// module.exports = router;