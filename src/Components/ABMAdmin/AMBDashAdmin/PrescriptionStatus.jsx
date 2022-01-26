import React from 'react';
import { useSelector } from 'react-redux';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { SpinnerCircular } from "spinners-react";

ChartJS.register(ArcElement, Tooltip, Legend);
 







export function PrescriptionStatus() {
  const { presStat, isLoadingPresStat } = useSelector((state) => state.ABMAdmin);

   const data = {
    labels: ['autorizadas','rechazadas','pendientes'],
    datasets: [
      {
        label: '# of Votes',
        data: [presStat.autorizada , presStat.rechazada ,presStat.pendiente],
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          ,
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          
        ],
        borderWidth: 1,
      },
    ],
    
  };
  const options = {
    responsive: true,
    maintainAspectRatio :false,
    
    plugins: {
      
      title: {
        display: true,
        text: "Status recetas",
      },
    },
    
  };
  
  
  return isLoadingPresStat? (<SpinnerCircular style={{ margin: 'auto', paddingTop: '20px' }}/>) : (<Doughnut data={data} options={options}/>);
}

  