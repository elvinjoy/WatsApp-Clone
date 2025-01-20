import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";
import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const storage = new GridFsStorage({
  url: `mongodb://${USERNAME}:${PASSWORD}@cluster0-shard-00-00.wi2m5.mongodb.net:27017,cluster0-shard-00-01.wi2m5.mongodb.net:27017,cluster0-shard-00-02.wi2m5.mongodb.net:27017/?ssl=true&replicaSet=atlas-zbg59k-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`,
  options: { useUnifiedTopology: true, useNewUrlParser: true },
  file: (req, file) => {
    const match = ["image/png", "image/jpeg, image/jpg"];

    if (match.indexOf(file.mimetype) === -1) {
      return `${Date.now()}-file-${file.originalname}`;
    }
    return {
      bucketName: "photos",
      filename: `${Date.now()}-file-${file.originalname}`,
    }
  },
});


 export default multer({ storage })