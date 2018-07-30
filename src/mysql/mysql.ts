import mysql from "mysql";

export default class MySQL {

    private static _instance: MySQL;

    cnn: mysql.Connection;

    constructor() {
        console.log('MySQL', 'clase inicializada');

        this.cnn = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'node-db'
        });

        this.connectDB()
    }

    private connectDB() {
        this.cnn.connect( (err: mysql.MysqlError) => {
            if (err) {
                console.log('MySQL', err.message);
                return;     
            }

            console.log('MySQL', 'Base de datos iniciada');
        });
    } 
}