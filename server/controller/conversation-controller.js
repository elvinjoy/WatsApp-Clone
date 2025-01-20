import Conversation from "../model/conversation.js";

export const newConversation = async (req, res) => {
  try {
    const senderId = req.body.senderId;
    const receiverId = req.body.receiverId;

    const exist = await Conversation.findOne({
      members: { $all: [senderId, receiverId] },
    });

    if (exist) {
      return res.status(200).json({ msg: "Conversation already exists" });
    }

    const newConversation = new Conversation({
      members: [senderId, receiverId],
    });

    await newConversation.save();
    return res.status(200).json("conversation saved successfully");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getConversation = async (req, res) => {
    const senderId = req.body.senderId;
    const receiverId = req.body.receiverId;

  try {
    let conversation = await Conversation.findOne({ members: { $all: [senderId, receiverId] }});
    return res.status(200).json(conversation);
} catch (error) {
    return res.status(500).json({ error: error.message });
}
};
