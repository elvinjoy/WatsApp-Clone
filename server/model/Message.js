import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    conversationId: {
        type: String,
    },
    senderId: {
        type: String,
        required: true
    },
    receiverId: {
        type: String,
        required: true
    },
    type: {
        type: String,
    },
    text: {
        type: String
    },
},
{
    timestamps: true,
});

const message = mongoose.model("Message", messageSchema)

export default message