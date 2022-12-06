import React from 'react';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import theme from '../../styles/theme';

Chart.register(ArcElement, Tooltip, Legend);

interface GraphProps {
  correct: number;
  incorrect: number;
}

const Graph: React.FC<GraphProps> = ({ correct, incorrect }) => {
  const data = {
    labels: ['정답', '오답'],
    datasets: [
      {
        label: 'Final Result',
        data: [correct, incorrect],
        backgroundColor: [theme.colors.green[500], theme.colors.red[100]],
      },
    ],
  };
  return <Doughnut id="doughnut-graph" data={data} />;
};

export default Graph;
