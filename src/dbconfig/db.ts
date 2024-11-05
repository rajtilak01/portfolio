import mongoose from 'mongoose'
import getEnv from '../../envLoader';


const env = getEnv();
export async function dbconnect() {
    try {
        mongoose.connect(env.DB_URI);
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('MongoDB connected');
        })
        
        connection.on('error', (err) => {
            console.log("Mongodb connection error" + err);
            process.exit(1);
        })

    } catch (error) {
        console.log("error in db connection");
        console.log(error);
    }
}