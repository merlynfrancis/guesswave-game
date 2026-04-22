import React, { useState } from "react";
import styles from "../styles/components/Welcome.module.scss";

interface WelcomeProps {
  handleNameSubmit: (username: string) => void;
}

const Welcome: React.FC<WelcomeProps> = ({ handleNameSubmit }) => {
  const [name, setName] = useState("");

  const handleAccept = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleNameSubmit(name);
  };

  return (
    <div className={styles.welcomeContainer}>
      <form className={styles.welcomeCard} onSubmit={handleAccept}>
        <h1>Welcome</h1>
        <p>Please Enter Your Name</p>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Accept</button>
      </form>
    </div>
  );
};

export default Welcome;
