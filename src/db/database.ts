// const knex = require('knex');
// const config = require('./knexfile')
// import parseDbUrl from 'parse-database-url'
// const parseDbUrl = require('parse-database-url')
// export const db = knex(config.development)
 
import Knex from 'knex';
import knexConfig from './knexfile';

// Set environment from `.env`
const knex = Knex(knexConfig.development);

export default knex;
