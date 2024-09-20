const dotenv = require('dotenv');

const env = process.env.NODE_ENV || 'development';
const envFile = `.env.${env}`;

dotenv.config({ path: envFile });

const config = {
    db: process.env.DB_CONNECTION_STRING,
    version: process.env.VERSION,
    port: process.env.PORT,
    jwt_expiration: process.env.JWT_EXPIRATION,
    jwt_secret: process.env.JWT_SECRET
};

// console.log(`Environment: ${env}`);
    
module.exports = config;
