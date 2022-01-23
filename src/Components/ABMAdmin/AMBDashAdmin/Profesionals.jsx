import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
export const options = {
    responsive: true,
    maintainAspectRatio :false,
    // aspectRatio: 1,
    plugins: {
      // legend: {
      //   position: 'top' as const,
      // },
      title: {
        display: true,
        text: "Prestadores por especialidad",
      },
    },
    
  };

export const data = {
  labels: ['Clinica Medica', 'Traumatologia', 'Bioquimicos', 'Diagnostico por Imagen', 'Nutricion', 'Optica'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export function Profesionals() {
  return <Doughnut data={data} options={options}/>;
}