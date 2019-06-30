const env = require('../../../env');
let oauth2;


async function initialise(req, res, next) {
    const credentials = {
        client: {
            id: env.KEY,
            secret: env.CLIENT_SEC
        },
        auth: {
            tokenHost: env.TOKEN_HOST,
            tokenPath: env.TOKEN_URI,
            authorizePath: env.AUTH_URI,
        }
    };

    oauth2 = require('simple-oauth2').create(credentials);

    // Authorization oauth2 URI
    const authorizationUri = oauth2.authorizationCode.authorizeURL({
        redirect_uri: env.CALLBACK_URI,
    });

    // Jump to Client Page
    res.redirect(authorizationUri);
}

function getOauthInstance() {
    return oauth2;
}
module.exports = {
    initialise,
    getOauthInstance
}