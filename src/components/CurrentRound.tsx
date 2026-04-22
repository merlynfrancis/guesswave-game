import React from "react";
import styles from "../styles/components/CurrentRound.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

interface Player {
  username: string;
  points: number;
  multiplier: number;
}

interface CurrentRoundProps {
  currentRound: Player[];
  username: string;
  reveal: boolean;
  multiplier: number;
}

const CurrentRound: React.FC<CurrentRoundProps> = ({ currentRound, username, reveal, multiplier }) => {
  const players = currentRound as Player[];

  return (
    <div>
      <div className={styles.header}>
        <FontAwesomeIcon icon={faTrophy} className={styles.trophyIcon} />
        <h2>Current Round</h2>
      </div>
      {players.length === 0 ? (
        <p>No data available</p>
      ) : (
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Username</th>
                <th>Points</th>
                <th>Multiplier</th>
              </tr>
            </thead>
            <tbody>
              {players && players.map((player, index) => (
                <tr
                  key={index}
                  className={`${styles.tableRow} ${player.username === username ? styles.highlightRow : index % 2 === 0 ? styles.background1 : styles.background2}`}
                  style={{ color: reveal ? (player.multiplier < multiplier ? "green" : "red") : "#fff" }}
                >
                  <td className={styles.username}>{player.username}</td>
                  <td>{player.points}</td>
                  <td >
                    {player.multiplier}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CurrentRound;
