const pool = require('../config/db');
const fs = require('fs');
const path = require('path');

const init = async () => {
  try {
    const schemaPath = path.join(__dirname, '..', '..', 'schema.sql');
    const schema = fs.readFileSync(schemaPath, 'utf-8');
    await pool.query(schema);
    console.log('Database schema initialized successfully.');
    pool.end();
  } catch (err) {
    console.error('Error initializing database schema:', err.message);
    pool.end();
  }
};

init();
