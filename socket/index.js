import { Server } from 'socket.io';

const io = new Server(9000, {
    cors: {
        origin: "http://localhost:3000"
    }
});

let users = []; // Changed from const to let

// Add user to the list
const addUser = (userData, socketId) => {
    if (!users.some(user => user.sub === userData.sub)) {
        users.push({ ...userData, socketId });
    }
}

// Remove user from the list
const removeUser = (socketId) => {
    users = users.filter(user => user.socketId !== socketId); // Works because `users` is now `let`
}

// Get user by ID
const getUser = (userId) => {
    return users.find(user => user.sub === userId);
}

io.on('connection', (socket) => {
    console.log('User connected');

    socket.on("addUser", userData => {
        addUser(userData, socket.id);
        io.emit("getUsers", users);
    });

    socket.on('sendMessage', (message) => {
        const receiver = getUser(message.receiverId);
        if (receiver) {
            io.to(receiver.socketId).emit('getMessage', message);
        }
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
        removeUser(socket.id);
        io.emit("getUsers", users);
    });
});
