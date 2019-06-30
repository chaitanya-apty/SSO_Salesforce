
const cors = require('cors');
const bodyParser = require('body-parser');
const {appGuards} = require('./routes/error-handler/error');

module.exports =  function settings(app) {
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    appGuards();
}