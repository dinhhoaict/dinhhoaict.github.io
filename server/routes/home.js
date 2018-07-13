var express =require("express");
var router = express.Router();
var DB = require("../ultis/MysqlPool");

async function _get_product(app_id, version){
    var query = `SELECT * FROM products.app WHERE app_id = "${app_id}" AND version = "${version}" order by id desc LIMIT 1`;
    var result = await DB.executeReturn(query, null);
    if(result.err_code){
        return null;
    }
    var rows = result.data;
    var product = rows[0];
    return {
        "app_id": product["app_id"],
        "version": product["version"],
        "feature": product["feature_option"],
        "payment": product["payment_option"],
        "ads": product["ads_option"],
        "review": product["review_option"]
    }
}

/**
 * @example: http://127.0.0.1:8686/app/init?app_id=new&version=1.0.0
 * @method get
 * @param {string} app_id application id
 * @param {string} version application version
 */
router.get('/init', async function(req, res, next){
    var appid = req.query["app_id"];
    var version = req.query["version"];
    var result = await _get_product(appid, version);
    res.json({err_code: 0, data: result});
});

module.exports = router;