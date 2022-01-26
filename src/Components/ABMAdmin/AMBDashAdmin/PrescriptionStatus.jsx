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
  plugins: {
    title: {
      display: true,
      text: 'Status de recetas',
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Rechazadas',
      data:[3,0,10,2,4,20,9,12,1,4,0,2],
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'Pendientes',
      data: [1,3,0,0,2,3,9,1,0,4,0,7],
      backgroundColor: 'rgb(253, 249, 4 )',
    },
    {
      label: 'Aprobadas',
      data: [33,44,10,42,44,60,21,69,11,64,70,52] ,
      backgroundColor: 'rgb(53, 162, 235)',
    },
  ],
};

export function PrescriptionStatus() {
  return <Bar options={options} data={data} />;
}