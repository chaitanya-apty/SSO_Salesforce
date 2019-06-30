const { getAccessToken } = require('./signin');

async function signout(req, res, next) {
    const accessTokenResp = getAccessToken();
    if(accessToken) {
        await accessTokenResp.revoke('access_token');
        await accessTokenResp.revoke('refresh_token');
    }
    res.send('You Have Been Logged Out From Session');
}
module.exports = {
 signout
}