import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useGameContext } from "../context/GameContext";
import styles from "../styles/components/MultiplierChart.module.scss";

interface DataPoint {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

const MultiplierChart = () => {
  const { chatHistory } = useGameContext();

  const data: DataPoint[] = chatHistory.map((message, index) => ({
    name: `Point ${index + 1}`,
    uv: parseFloat(message), // assuming message is a string of number
    pv: parseFloat(message), // duplicate for example purposes
    amt: parseFloat(message), // duplicate for example purposes
  }));

  return (
    <div className={styles.chartContainer}>
      <h2>Multiplier Chart</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="uv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MultiplierChart;
