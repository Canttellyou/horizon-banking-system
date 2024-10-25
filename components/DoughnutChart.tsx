"use client";

import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const accountNames = accounts.map((a) => a.name);

  const balances = accounts.map((a) => a.currentBalance);

  const data = {
    datasets: [
      {
        data: balances,
        backgroundColor: [
          "#0747b6",
          "#2265d8",
          "#2f91fa",
          "#38598d",
          "#4575b4",
          "#5499ce",
          "#63b6e0",
          "#73c6e6",
          "#82d9ea",
          "#91ecec",
          "#a0f0f6",
          "#b0f6fc",
          "#c0f9ff",
          "#d1fdff",
        ],
        label: "Banking Accounts",
      },
    ],
    labels: accountNames,
  };

  const options = {
    cutout: "60%",
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
