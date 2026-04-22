import React from "react";
import styles from "../styles/components/SpeedControl.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";

interface SpeedControlProps {
  speed: number;
  setSpeed: (speed: number) => void;
}

const SpeedControl: React.FC<SpeedControlProps> = ({ speed, setSpeed }) => {
  const handleSpeedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpeed(parseFloat(event.target.value));
  };

  return (
    <div className={styles.speedControl}>
      <div className={styles.header}>
        <FontAwesomeIcon icon={faTachometerAlt} className={styles.speedIcon} />
        <h2>Speed Control</h2>
      </div>
      <div className={styles.slider}>
        <input
          type="range"
          min="1"
          max="6"
          step="0.1"
          value={speed}
          onChange={handleSpeedChange}
          className={styles.rangeSlider}
          style={{
            background: "linear-gradient(90deg, rgba(227,57,125,1) 35%, rgba(252,95,70,1) 100%)"
          }}
        />
        <div className={styles.labels}>
          {[1, 2, 3, 4, 5, 6].map((value) => (
            <span key={value} className={styles.label}>
              {value}x
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpeedControl;
