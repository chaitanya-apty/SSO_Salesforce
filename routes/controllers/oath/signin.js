const { getTokenConfig } = require('../helpers/auth.helpers');
const { getOauthInstance } = require('./initialise');
let accessTokenResponse;
let authToken,instanceUrl;

async function callback(req, res) {
    const code = req.query['code'];
    const oauth2    = getOauthInstance();
    const tokenConfig = getTokenConfig(code);

    const result = await oauth2.authorizationCode.getToken(tokenConfig)
    accessTokenResponse = oauth2.accessToken.create(result);
    const authTokenObject = accessTokenResponse.token;
    
    instanceUrl = authTokenObject.instance_url;
    authToken = authTokenObject.access_token;

    res.status(200).json({
        status: 'Signed Succesfully...',
        token: authToken
    })
}

async function isAuthenticated(req, res, next) {
    if (accessTokenResponse && accessTokenResponse.expired()) {
        await accessTokenResponse.refresh();
        res.redirect('http://localhost:5000/auth/signin');
    } else {
        next();
    }
}

 function getAccessToken() {
    return accessTokenResponse;
}

function getAuthToken() {
    return authToken;
}

function getInstanceUrl() {
    return instanceUrl;
}

module.exports = {
    callback,
    getAccessToken,
    getAuthToken,
    getInstanceUrl,
    isAuthenticated
}