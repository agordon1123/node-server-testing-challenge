const knex = require('knex');
const config = require('../knexfile');
const secrets = require('../config/secrets');

const environment = secrets.environment || 'development';

// Will need to change when prepping to go onto Heroku
module.exports = knex(config.development);
