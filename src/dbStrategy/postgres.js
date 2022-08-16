import pg from 'pg';
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

let databaseConfig;

if(process.env.MODE=="heroku"){
    databaseConfig = {
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    }
}else if(process.env.MODE=="local"){
    databaseConfig = {
    
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        password: '123',
        database: 'la_boleria'
    }
}else{
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
