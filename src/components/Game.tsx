import React, { useState } from 'react';
import styles from "../styles/components/Game.module.scss";
import Welcome from "./Welcome";
import PointsControl from "./PointsControl";
import MultiplierControl from "./MultiplierControl";
import CurrentRound from "./CurrentRound";
import SpeedControl from "./SpeedControl";
import MultiplierChart from "./MultiplierChart";
import currentRound from "./CurrentRound";
import UserInfo from "./UserInfo";
import Chat from "./Chat";
import Ranking from "./Ranking";

const generatePositiveGradientData = (target: number) => {
  const data = [];
  let value = 0;
  const steps = 5;
  const totalIncrement = target / ((steps * (steps + 1)) / 2);

  for (let i = 0; i < 3; i++) {
    data.push({ value });
  }

  for (let i = 1; i <= steps; i++) {
    value += i * totalIncrement;
    data.push({ value });
  }

  if (data.length > 0) {
    data[data.length - 1] = { value: target };
  }

  return data;
};

const Game = () => {
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const [username, setUsername] = useState("");
  const [points, setPoints] = useState(100);
  const [userPoints, setUserPoints] = useState(1000);
  const [multiplier, setMultiplier] = useState(1);
  const [speed, setSpeed] = useState(1);
  const [result, setResult] = useState(0);
  const [revealCurrentRoundResult, setRevealCurrentRoundResult] = useState(false);
  const [buttonState, setButtonState] = useState({ text: "Start", disabled: false });
  const [data, setData] = useState(generatePositiveGradientData(9));
  const [records, setRecords] = useState([]);
  const [allResults, setAllResults] = useState([]);
  const [currentRound, setCurrentRound] = useState(
    [
      { username: username, points: points, multiplier: multiplier },
      { username: "cpu0", points: 0, multiplier: 1 },
      { username: "cpu1", points: 0, multiplier: 1 },
      { username: "cpu2", points: 0, multiplier: 1 },
      { username: "cpu3", points: 0, multiplier: 1 },
    ]
  )

  const handleNameSubmit = (username: string) => {
    setCurrentRound(
      [
        { username: username, points: points, multiplier: multiplier },
        { username: "cpu0", points: 0, multiplier: 1 },
        { username: "cpu1", points: 0, multiplier: 1 },
        { username: "cpu2", points: 0, multiplier: 1 },
        { username: "cpu3", points: 0, multiplier: 1 },
      ]
    )
    setUsername(username);
  };

  const reEnableStartButton = () => {
    setButtonState({ text: "Start Again", disabled: false });
  };

  const disableGraph = () => {
    setTriggerAnimation(false);
  };

  const revealResult =  () => {
    setRevealCurrentRoundResult(true);
  }

  const handleStartClick = () => {
    setUserPoints(userPoints-points);
    const result_new = (Math.floor(Math.random() * 90)) / 10 + 1;
    setResult(result_new);
    setData(generatePositiveGradientData(result_new));
    setTriggerAnimation(true);
    setButtonState({ text: "Started", disabled: true });
    setTimeout(reEnableStartButton, 2000);
    setTimeout(disableGraph, 20000 / speed);
    
    const roundResults = [
      { username: username, points: points, multiplier: multiplier },
      { username: "cpu0", points: Math.floor(Math.random() * 24 + 1) * 25, multiplier: (Math.floor(Math.random() * 100)) / 10 },
      { username: "cpu1", points: Math.floor(Math.random() * 24 + 1) * 25, multiplier: (Math.floor(Math.random() * 100)) / 10 },
      { username: "cpu2", points: Math.floor(Math.random() * 24 + 1) * 25, multiplier: (Math.floor(Math.random() * 100)) / 10 },
      { username: "cpu3", points: Math.floor(Math.random() * 24 + 1) * 25, multiplier: (Math.floor(Math.random() * 100)) / 10 }
    ];
    setRevealCurrentRoundResult(false);
    
    setTimeout(() => {
      revealResult();
      setCurrentRound(roundResults);
    },  12000 / speed);
    
    if (result_new > multiplier) { // won
      setUserPoints(userPoints + (points * multiplier));
    }
    
    const newResults = roundResults.map(result => ({
      username: result.username,
      score: Math.floor(result.points * result.multiplier)
    }));
    
    const validResults = newResults.filter(result => result.score > 0);
    
    const uniqueResults = [...allResults, ...validResults].reduce((acc, current) => {
      const x = acc.find(item => item.username === current.username);
      if (!x) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, []);
    
    const topResults = uniqueResults.sort((a, b) => b.score - a.score).slice(0, 5);
    
    setAllResults(uniqueResults);
    setRecords(topResults);
    
  };

  return (
    <div className={styles.game}>
      <div className={styles.topPane}>
        <div className={styles.topPaneLeft}>
          {!username && (
              <Welcome handleNameSubmit={handleNameSubmit} />
          )}
          {username && (
            <center>
              <div className={styles.row}>
                <PointsControl points={points} setPoints={setPoints} userPoints={userPoints}/>
                <MultiplierControl multiplier={multiplier} setMultiplier={setMultiplier} />
              </div>
              <div>
                <button
                  className={styles.start_button}
                  onClick={handleStartClick}
                  disabled={buttonState.disabled}
                >
                  {buttonState.text}
                </button>
              </div>
              <CurrentRound currentRound={currentRound} username={username} multiplier={result} reveal={revealCurrentRoundResult} />
              <SpeedControl speed={speed} setSpeed={setSpeed} />
            </center>
          )}
        </div>
        <div className={styles.topPaneRight}>
          <UserInfo username={username} points={userPoints} />
          <MultiplierChart data={data} animationDuration={12000 / speed} triggerAnimation={triggerAnimation} />
        </div>
      </div>
      <div className={styles.bottomPane}>
        <Ranking username={username} records={records} />
        <Chat username={username} />
      </div>
    </div>
  );
};

export default Game;
