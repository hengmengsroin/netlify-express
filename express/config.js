var config = {
    // DB CONFIG
    mongoDB: {
        mongodb_host: "eventober.ibpgs.mongodb.net",
        mongodb_user: "eventober",
        mongodb_pwd: "eventober",
        db_name: "eventoberme",
        auth_db: "admin",
    },

    // JWT CONFIG
    salt_rounds: 10,
    token_duration: 259200, // 3days, Token expired duration in seconds
    jwt_private_key: 'oOjETTWcIHg4rrCE',
    refresh_token_duration: 604800, // 7days
    refresh_jwt_private_key: 's3WCksfJnd7z1nsv',
};

module.exports = config;