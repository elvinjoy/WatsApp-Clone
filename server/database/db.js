import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const connection = async () => {
    const URL = `mongodb://${USERNAME}:${PASSWORD}@cluster0-shard-00-00.wi2m5.mongodb.net:27017,cluster0-shard-00-01.wi2m5.mongodb.net:27017,cluster0-shard-00-02.wi2m5.mongodb.net:27017/?ssl=true&replicaSet=atlas-zbg59k-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`;
    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Error while connecting with the database", error.message);
    }
}

export default connection;