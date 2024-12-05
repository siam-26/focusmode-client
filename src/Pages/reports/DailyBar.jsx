


import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js';
import { Line } from 'react-chartjs-2'; // Or any other chart type you're using

// Import necessary chart.js elements
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register chart elements
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const Dailybar = () => {
  const chartRef = useRef(null);

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'My Chart Title',
      },
    },
  };

  useEffect(() => {
    // Create the chart instance
    const chartInstance = new Chart(chartRef.current, {
      type: 'line', // Use line chart or your chart type
      data: data,
      options: options,
    });

    // Cleanup on component unmount
    return () => {
      chartInstance.destroy();
    };
  }, []);

  return (
    <div className="chart-container w-full">
     
      {/* React Chart.js 2 uses the 'ref' to bind the chart */}
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default Dailybar;




