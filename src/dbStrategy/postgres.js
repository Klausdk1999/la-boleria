import pg from 'pg';
import env from "dotenv";

const { Pool } = pg;

let databaseConfig;

if(process.env.mode=="heroku"){
    databaseConfig = {
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    }
}

if(process.env.mode=="local"){
    databaseConfig = {
    
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '123',
    database: 'la_boleria'
    }
}

const connection = new Pool(databaseConfig);

export default connection;
