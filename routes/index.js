const oathRoute = require('./oauth-route');
const salesforce = require('./salesforce.api');

module.exports = function routesInitiate(app) {
    app.use('/auth', oathRoute);
    app.use('/salesforce', salesforce);
}