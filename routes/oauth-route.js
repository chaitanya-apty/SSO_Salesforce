const express = require('express');

const { wrap } =  require('./error-handler/error');
const {
    callback,
    isAuthenticated,
    initialise,
    signout
} = require('./controllers/oath');

const oathRoute = express.Router();

oathRoute.get('/signin', wrap(initialise));
oathRoute.get('/salesforce/callback', wrap(callback));
oathRoute.get('/logout', wrap(isAuthenticated), wrap(signout))

module.exports = oathRoute;