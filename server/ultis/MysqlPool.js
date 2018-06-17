var mysql = require("mysql");
var Promise = require("promise");
var pool = mysql.createPool({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'Sharp@1991'
});


/**
 * Execute query
 *
 * @param {*} query Query string
 * @param {*} params Query's parameter
 * @param {Integer} ms Query timeout in miliseconds
 * @return Promise
 */
exports.executeReturn = async function(query, params, ms = 1){
    try {
        var execute = new Promise(function(resolve, reject){
            pool.getConnection(
                function (err, connection) {
                    if (err) {
                        connection.release();
                        reject(err);
                    }
                    if (params) {
                        connection.query(query, params, function (err, rows) {
                            connection.release();
                            if (err){
                                reject(err);
                            }
                                
                            resolve(rows);
                        });
                    } else {
                        connection.query(query, function (err, rows) {
                            connection.release();
                            if (err)
                                return reject({err_code: 1, msg: err});
                            return resolve(rows);
                        });
                    }
    
                    connection.on('error', function (err) {
                        connection.release();
                        return reject(err);
                    });
                }
            );
        });
        var timeout = new Promise(function(resolve, reject){
            setTimeout(function(){
                resolve("timeout");
                reject("timeout");
            }, ms);
        });
        return new Promise.race([
            execute,
            timeout]);
    } catch (error) {
        console.log("error: ", error);
        return null;
    }
    
};
exports.executeNonReturn = async function(query, params){
    return new Promise(function(resolve, reject){
        pool.getConnection(
            function (err, connection) {
                if (err) {
                    connection.release();
                    return reject(err);
                }
                if (params) {
                    connection.query(query, params, function (err, rows) {
                        connection.release();
                        if (err)
                            return reject(err);
                        return resolve(rows);
                    });
                } else {
                    connection.query(query, function (err, rows) {
                        connection.release();
                        if (err)
                            return reject(err);
                        return resolve(rows);
                    });
                }

                connection.on('error', function (err) {
                    connection.release();
                    return reject(err);
                });
            }
        );
    });
}