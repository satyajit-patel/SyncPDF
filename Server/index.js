const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
require("dotenv").config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("New client connected");

  // Listen for admin's file selection
  socket.on("fileSelected", (fileUrl) => {
    console.log("file selected");
    io.emit("fileSelected", fileUrl);
  });

  // Listen for admin's page change
  socket.on("adminPageChange", (page) => {
    console.log("page changed");
    io.emit("pageChange", page);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

app.get("/", (req, res) => {
    res.send("SERVER IS UP");
});
const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
