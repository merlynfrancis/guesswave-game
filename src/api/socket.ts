import { io } from "socket.io-client";

const socket = io("ws://localhost:8080");

socket.on("connect", () => {
  console.log("Connected to WebSocket server");
});

export const sendMessage = (message: string) => {
  socket.emit("message", message);
};

export const onMessage = (callback: (message: string) => void) => {
  socket.on("message", callback);
};

export default socket;
