// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");
require("dotenv").config();

// Routers
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const conversationRoutes = require("./routes/conversationRoutes");
const messageRoutes = require("./routes/messageRoutes");
const profileRoutes = require("./routes/profileRoutes");
const postRoutes = require("./routes/postRoutes");

const app = express();
const server = http.createServer(app);

// Allowed client origins
const CLIENT_URLS = [
    "http://localhost:5173",
    "http://localhost:5176",
];

// Socket.IO
const io = new Server(server, {
    cors: {
        origin: CLIENT_URLS,
        methods: ["GET", "POST"],
        credentials: true,
    },
});

app.set("io", io);

// Middleware
app.use(express.json());
app.use(
    cors({
        origin: CLIENT_URLS,
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE"],
    })
);

// Static uploads (profile image, cover image, post images)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", conversationRoutes);
app.use("/api", messageRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/posts", postRoutes);

// Env
const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;
const JWT_SECRET = process.env.JWT_SECRET;

if (!MONGO_URL || !JWT_SECRET) {
    console.error("❌ Missing env variables");
    process.exit(1);
}

// MongoDB
mongoose
    .connect(MONGO_URL)
    .then(() => console.log("✅ MongoDB Connected"))
    .catch((err) => console.error("❌ MongoDB Error:", err));

// Socket handlers
const onlineUsers = new Map();

io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("user_online", (userId) => {
        onlineUsers.set(userId, socket.id);
    });

    socket.on("join_conversation", (id) => socket.join(id));
    socket.on("leave_conversation", (id) => socket.leave(id));

    socket.on("disconnect", () => {
        for (const [u, s] of onlineUsers.entries()) {
            if (s === socket.id) {
                onlineUsers.delete(u);
                break;
            }
        }
        console.log("User disconnected:", socket.id);
    });
});

// Start
server.listen(PORT, () =>
    console.log(`🚀 Server running on port ${PORT}`)
);
