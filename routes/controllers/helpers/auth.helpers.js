const env = require('../../../env');

function getTokenConfig(code) {
    return {
        code,
        redirect_uri: env.CALLBACK_URI,
    }
}

module.exports = {
    getTokenConfig
}