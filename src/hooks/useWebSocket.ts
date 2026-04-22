import { useEffect, useRef } from "react";

export const useWebSocket = (url: string) => {
  const socket = useRef<WebSocket | null>(null);

  useEffect(() => {
    socket.current = new WebSocket(url);
    socket.current.onopen = () => console.log("WebSocket connected");
    socket.current.onclose = () => console.log("WebSocket disconnected");

    return () => {
      socket.current?.close();
    };
  }, [url]);

  const sendMessage = (message: string) => {
    if (socket.current?.readyState === WebSocket.OPEN) {
      socket.current.send(message);
    }
  };

  const subscribeToMessages = (callback: (message: string) => void) => {
    if (socket.current) {
      socket.current.onmessage = (event) => {
        const receivedMessage = event.data;
        callback(receivedMessage);
      };
    }
    return () => {
      if (socket.current) {
        socket.current.onmessage = null;
      }
    };
  };

  return { sendMessage, subscribeToMessages };
};
