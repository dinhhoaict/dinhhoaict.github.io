var mysql = require("mysql");
var Promise = require("promise");
var pool = mysql.createPool({
    host: '178.128.210.122',
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
exports._executeReturn = async function(query, params, ms = 1000){
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

exports.executeReturn = async function(query, params){
    var result;
    await exports._executeReturn(query, null)
        .then(function (rows) {
            console.log(rows);
            result = {err_code: 0, data: rows};
        })
        .catch(function (err) {
            console.log(err);
            result = {err_code: 1,msg: err};
        });
    return result;
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