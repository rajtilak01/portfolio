import mongoose from 'mongoose'
import getEnv from '../../envLoader';

const env = getEnv();

let isConnected = false;
export async function dbconnect() {
    try {
        if (isConnected) {
            console.log('MongoDB is already connected');
            return;
        }
        mongoose.connect(env.DB_URI);
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('MongoDB connected');
            isConnected = true;
        })
        
        connection.on('error', (err) => {
            console.log("Mongodb connection error" + err);
            isConnected = false;
            process.exit(1);
        })

        connection.on('disconnected', () => {
            console.log('MongoDB disconnected');
            isConnected = false;
        })

    } catch (error) {
        console.log("error in db connection");
        console.log(error);
    }
}