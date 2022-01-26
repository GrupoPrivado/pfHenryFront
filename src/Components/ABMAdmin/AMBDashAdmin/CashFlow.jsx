import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: 'Flujo de Caja',
    },
  },
};

const labels = ['Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre','Enero'];

export const data = {
  labels,
  datasets: [
    {
      label: '2020',
      data: [11300,5600,33334,13254,54745,21222],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: '2021',
      data: [34554,45590,19888,21444,33988,28888],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function CashFlow() {
  return <Line options={options} data={data} />;
}