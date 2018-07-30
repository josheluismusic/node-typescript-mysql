"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
class MySQL {
    constructor() {
        console.log('MySQL', 'clase inicializada');
        this.cnn = mysql_1.default.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'node-db'
        });
        this.connectDB();
    }
    connectDB() {
        this.cnn.connect((err) => {
            if (err) {
                console.log('MySQL', err.message);
                return;
            }
            console.log('MySQL', 'Base de datos iniciada');
        });
    }
}
exports.default = MySQL;
