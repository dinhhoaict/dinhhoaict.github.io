var mysql = require("mysql");

var pool = mysql.createPool({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'Sharp@1991'
});


/**
 *
 *@constructor DB class
 */
exports.query = function (query, callback) {
    pool.getConnection(
        function (err, connection) {
            if (err) {
                connection.release();
                callback(null, err);
                throw err;
            }

            connection.query(query, function (err, rows) {
                connection.release();
                if (err) {
                    callback(null, err);
                } else {
                    callback(rows);
                }
            });

            connection.on('error', function (err) {
                connection.release();
                callback(null, err);
                throw (err);
            });
        }
    );
};

/**
 * Execute query
 *
 * @param {*} query Query string
 * @param {*} params Query's parameter
 * @param {*} callback Callback result
 */