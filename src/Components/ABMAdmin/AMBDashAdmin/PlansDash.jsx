import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

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
      text: "Asociados por tipo de plan",
    },
  },
  // scales: {
  //   y: {
  //     stacked: false,
  //     // grid: {
  //     //   display: true,
  //     //   color: "rgba(255,99,132,0.2)"
  //     // }
  //   },
  //   x: {
  //     // grid: {
  //     //   display: false
  //     // }
  //   }
  // }
};

export const data = {
  labels: ['ORO', 'PLATA', 'BRONCE',],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3,],
      backgroundColor: [
        'rgba(241, 196, 15 , 0.5)',
        'rgba(171, 178, 185, 0.5)',
        'rgba(211, 84, 0, 0.5)',
        
      ],
      borderColor: [
        'rgba(241, 196, 15 , 1)',
        'rgba(171, 178, 185, 1)',
        'rgba(211, 84, 0, 1)',
        
      ],
      borderWidth: 1,
    },
  ],
};

export function PlansDash() {
  return <Pie data={data} options={options}/>;
}