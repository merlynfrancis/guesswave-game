import React, { useEffect, useState } from "react";
import styles from "../styles/components/UserInfo.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCoins, faClock } from "@fortawesome/free-solid-svg-icons";

interface UserInfoProps {
  username: string;
  points: number;
}

const UserInfo: React.FC<UserInfoProps> = ({ username, points }) => {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.userInfo}>
      <div className={styles.infoBox}>
        <FontAwesomeIcon icon={faCoins} className={styles.icon} />
        {username && <span>{points} Points</span>}
      </div>
      <div className={styles.infoBox}>
        <FontAwesomeIcon icon={faUser} className={styles.icon} />
        {username && <span>{username}</span>}
      </div>
      <div className={styles.infoBox}>
        <FontAwesomeIcon icon={faClock} className={styles.icon} />
        {username && <span>{currentTime}</span>}
      </div>
    </div>
  );
};

export default UserInfo;
