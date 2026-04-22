import React, { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Dot,
} from 'recharts';
import styles from "../styles/components/MultiplierChart.module.scss";

interface DataPoint {
  value: number;
}

interface MultiplierChartProps {
  data: DataPoint[];
  animationDuration?: number;
  triggerAnimation?: boolean;
}

const MultiplierChart: React.FC<MultiplierChartProps> = ({
  data,
  animationDuration = 2000,
  triggerAnimation = false,
}) => {
  const [maxDataValue, setMaxDataValue] = useState(0);

  useEffect(() => {
    if (triggerAnimation) {
      const maxValue = Math.max(...data.map(item => item.value));
      setMaxDataValue(maxValue);
    } else {
      setMaxDataValue(0);
    }
  }, [triggerAnimation, data]);

  const CustomDot = (props: any) => {
    const { cx, cy, index } = props;
    if (index === data.length - 1) {
      return <Dot cx={cx} cy={cy} r={8} fill="#feb722" />;
    }
    return null;
  };

  if (!triggerAnimation) {
    return (
      <ResponsiveContainer className={styles.chartContainer} width="100%" height={400}>
        <LineChart data={[]}>
          <XAxis domain={[0, 10]} />
          <YAxis domain={[0, 10]} hide={true} />
        </LineChart>
      </ResponsiveContainer>
    );
  }

  return (
    <ResponsiveContainer className={styles.chartContainer} width="100%" height={400}>
      <LineChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
      >
        <defs>
          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis domain={[0, data.length - 1]} />
        <YAxis domain={[0, maxDataValue * 2]} hide={true} />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#f75451"
          strokeWidth={4}
          dot={<CustomDot />}
          animationDuration={animationDuration}
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          style={{ fontSize: '4rem', fontWeight: 'bold', fill: '#fff' }}
        >
          {maxDataValue}x
        </text>
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MultiplierChart;
