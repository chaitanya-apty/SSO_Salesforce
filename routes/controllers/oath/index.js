const { callback, isAuthenticated, accessToken } = require('./signin');
const { initialise, getOauthInstance } = require('./initialise');
const { signout } = require('./signout');

module.exports  = {
    callback,
    getOauthInstance,
    isAuthenticated,
    accessToken,
    signout,
    initialise
}