const express = require('express');

const { wrap } =  require('./error-handler/error');
const { createOpportunity } = require('./controllers/salesforce');
const { isAuthenticated } = require('./controllers/oath/signin');

const salesforce = express.Router();

salesforce.post('/opportunity', wrap(isAuthenticated), wrap(createOpportunity));

module.exports = salesforce;