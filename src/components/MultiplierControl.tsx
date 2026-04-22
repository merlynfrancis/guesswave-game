import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/components/MultiplierControl.module.scss";

interface MultiplierControlProps {
  multiplier: number;
  setMultiplier: (multiplier: number) => void;
}

const MultiplierControl: React.FC<MultiplierControlProps> = ({ multiplier, setMultiplier }) => {
  return (
    <div className={styles.control}>
      <span>Multiplier</span>
      <div className={styles.controlInner}>
        <button onClick={() => setMultiplier((prev) => prev - 0.25)}>
          <FontAwesomeIcon icon={faArrowDown} />
        </button>
        <input
          type="number"
          value={multiplier}
          step="0.01"
          onChange={(e) => setMultiplier(parseFloat(e.target.value))}
          className={styles.input}
        />
        <button onClick={() => setMultiplier((prev) => prev + 0.25)}>
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      </div>
    </div>
  );
};

export default MultiplierControl;
