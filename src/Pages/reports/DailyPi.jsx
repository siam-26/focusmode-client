import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js';
import { Pie } from 'react-chartjs-2'; // Import Pie chart type from react-chartjs-2

// Import necessary chart.js elements
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the chart.js elements we need
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChartComponent = () => {
  const chartRef = useRef(null);

  const data = {
    labels: ['24 HR', 'Break Time', 'Study Time'],
    datasets: [
      {
        label: 'Pie Chart Example',
        data: [300, 50, 100],
        backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.label + ': ' + tooltipItem.raw + ' units';
          },
        },
      },
    },
  };

  useEffect(() => {
    // Create the chart instance
    const chartInstance = new Chart(chartRef.current, {
      type: 'pie', // Use 'pie' for pie chart
      data: data,
      options: options,
    });

    // Cleanup on component unmount
    return () => {
      chartInstance.destroy();
    };
  }, []);

  return (
    <div className="chart-container w-[60%]">
     
      {/* React Chart.js 2 uses the 'ref' to bind the chart */}
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default PieChartComponent;
