// src/context/GameContext.tsx

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { useWebSocket } from "../hooks/useWebSocket";

interface Player {
  id: string;
  name: string;
  score: number;
}

interface GameContextProps {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  currentRound: Player[];
  setCurrentRound: React.Dispatch<React.SetStateAction<Player[]>>;
  chatHistory: string[];
  setChatHistory: React.Dispatch<React.SetStateAction<string[]>>;
  points: number;
  setPoints: React.Dispatch<React.SetStateAction<number>>;
  multiplier: number;
  setMultiplier: React.Dispatch<React.SetStateAction<number>>;
  sendMessage: (message: string) => void;
  subscribeToMessages: (callback: (message: string) => void) => () => void;
}

const GameContext = createContext<GameContextProps | undefined>(undefined);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [userName, setUserName] = useState<string>("");
  const [currentRound, setCurrentRound] = useState<Player[]>([]);
  const [chatHistory, setChatHistory] = useState<string[]>([]);
  const [points, setPoints] = useState<number>(1000); // Initial points as per requirement
  const [multiplier, setMultiplier] = useState<number>(1);

  const { sendMessage, subscribeToMessages } = useWebSocket(
    "ws://localhost:8080"
  );

  useEffect(() => {
    const unsubscribe = subscribeToMessages((message: string) => {
      setChatHistory((prevHistory) => [...prevHistory, message]);
    });

    return () => {
      unsubscribe();
    };
  }, [subscribeToMessages]);

  return (
    <GameContext.Provider
      value={{
        userName,
        setUserName,
        currentRound,
        setCurrentRound,
        chatHistory,
        setChatHistory,
        points,
        setPoints,
        multiplier,
        setMultiplier,
        sendMessage,
        subscribeToMessages,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error("useGameContext must be used within a GameProvider");
  }
  return context;
};
