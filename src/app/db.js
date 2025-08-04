import mysql from 'mysql2/promise';
    
 export async function conectacao() {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '1234',
        database: process.env.DB_NAME || 'parking_system',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    });
    return connection;
 }  
    