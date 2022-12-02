import React from 'react';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieData = () => {
  const labelss = ['Sales', 'Stock', 'Total User'];
  const data = {
    labels: ['Sales', 'Stock', 'Total User'],
    datasets: [
      {
        label: 'Grow ',
        data: [100, 34, 58],
        backgroundColor: ['#17A589', '#F1C40F', '#2471A3'],

        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <div className="w-96 h-96">
        <h1 className="text-center text-3xl my-4 ">Total Sales</h1>
        <Pie data={data} />
      </div>
    </div>
  );
};

export default PieData;
