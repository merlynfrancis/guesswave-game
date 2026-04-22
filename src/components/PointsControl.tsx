// src/components/PointsControl.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/components/PointsControl.module.scss";

const PointsControl = ({ points, setPoints, userPoints }) => {
  return (
    <div className={styles.control}>
      <span>Points</span>
      <div className={styles.controlInner}>
        <button onClick={() => setPoints((prev) => prev - 25)}>
          <FontAwesomeIcon icon={faArrowDown} />
        </button>
        <input
          max={userPoints}
          // type="number"
          value={points}
          onChange={(e) => setPoints(parseInt(e.target.value))}
        />
        <button onClick={() => setPoints((prev) => prev + 25)}>
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      </div>
    </div>
  );
};

export default PointsControl;
