const express = require('express');
const routesInitiate = require('./routes');
const settings = require('./settings');
const { appErrorHandler, notFound } = require('./routes/error-handler/error');

const app = express();

settings(app);
routesInitiate(app);

app.use(notFound)
app.use(appErrorHandler);

app.listen(5000, 'localhost', () => console.log('App started'))