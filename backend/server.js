const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

/*
  USERS STORAGE (temporary memory)
  Later we will replace this with MongoDB
*/
let users = {}; // socketId -> { role, room }

/*
  SOCKET CONNECTION
*/
io.on("connection", (socket) => {
  console.log("🔵 User connected:", socket.id);

  // JOIN ROOM (user or admin)
  socket.on("join_room", (room) => {
    socket.join(room);

    users[socket.id] = {
      room,
    };

    console.log(`📥 ${socket.id} joined room: ${room}`);
  });

  // SEND MESSAGE
  socket.on("send_message", (data) => {
    /*
      data = {
        room,
        text,
        sender: "user" | "admin",
        time
      }
    */

    if (!data.room) return;

    // broadcast ONLY inside room
    io.to(data.room).emit("receive_message", data);
  });

  // ONLINE STATUS (basic version)
  socket.on("get_online_users", () => {
    socket.emit("online_users", Object.keys(users));
  });

  // DISCONNECT
  socket.on("disconnect", () => {
    console.log("🔴 Disconnected:", socket.id);
    delete users[socket.id];
  });
});

/*
  TEST ROUTE
*/
app.get("/", (req, res) => {
  res.send("Support Chat Server Running 🚀");
});

/*
  START SERVER
*/
server.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});