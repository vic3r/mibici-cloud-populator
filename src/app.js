require('dotenv').load();
const config = require('config');
const API = require('./api');

const api = API();

api.listen(config.port);
console.log(`server started at localhost: ${config.port}`);
