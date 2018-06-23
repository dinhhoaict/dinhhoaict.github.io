module.exports.config = {
    "appenders": {
        "everything": {
            "type": "dateFile",
            "filename": "E:\\server.log",
            "pattern": ".yyyy-MM-dd-hh",
            "compress": true
        },
        "error": {
            "type": "logLevelFilter",
            "filename": "E:\\error.log"
        },
        "console": {
            "type": "console"
        }

    },
    "categories": {
        "api": {
            "appenders": ["everything", "console"],
            "level": "debug"
        },
        "default": {
            "appenders": ["everything", "console"],
            "level": "debug"
        }
    }
};