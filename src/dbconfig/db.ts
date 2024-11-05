import mongoose from "mongoose";
import getEnv from "../../envLoader";

const env = getEnv();

const dbConnect = () => {
    mongoose.connect(env.DB_URI)
    .then(()=> (console.log("DB connection done")))
    .catch((error) =>{
        console.log("Error in db connection", error);
        process.exit(1);
    })
}

export default dbConnect