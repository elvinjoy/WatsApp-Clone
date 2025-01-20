import grid from "gridfs-stream";
import mongoose from "mongoose";

const url = "http://localhost:8000";

let gfs, gridFSBucket;
const conn = mongoose.connection;
conn.once("open", () => {
    gridFSBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: "fs",
    });
    gfs = grid(conn.db, mongoose.mongo);
    gfs.collection("fs");
})

export const uploadFile = async (req, res) => {
    if (!req.file) {
        return res.status(404).json({ error: "File not found" });
    }

    const image = `${url}/file/${req.file.filename}`;
    return res.status(200).json({ image });
};

export const getImage = async (req, res) => {
    try {
        const file = await gfs.files.findOne({ filename: req.params.filename });
        const readStream = gridFSBucket.openDownloadStream(file._id);
        readStream.pipe(res);

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}