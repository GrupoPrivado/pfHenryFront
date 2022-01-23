import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  maintainAspectRatio :false,
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Evolucion Afiliados',
    },
  },
};

const labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

export const data = {
  labels,
  datasets: [
    {
      label: '2019',
      data: [100,-12,2,55,-83,30,29,-6,423,5,-111,21],
      borderColor: 'rgb(41, 128, 185)',
      backgroundColor: 'rgba(41, 128, 185, 0.5)',
    },
    {
      label: '2020',
      data: [300,-123,92,-25,3,-38,29,16,-623,55,553,-321],
      borderColor: 'rgb(39, 174, 96 )',
      backgroundColor: 'rgba(39, 174, 96 , 0.5)',
    },
  ],
};

export function AfiliateEvolution() {
  return <Bar options={options} data={data} />;
}