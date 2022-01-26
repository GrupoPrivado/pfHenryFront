import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { SpinnerCircular } from "spinners-react";

ChartJS.register(ArcElement, Tooltip, Legend);


export function PlansDash() {
  const { allPlan, isLoadingAllPlans } = useSelector((state) => state.ABMAdmin);

  const options = {
    responsive: true,
    maintainAspectRatio :false,
    
    plugins: {
      
      title: {
        display: true,
        text: "Asociados por tipo de plan",
      },
    },
    
  };
  
   const data = {
    labels: allPlan.map((e)=> e.nombre),
    datasets: [
      {
        label: '# of Votes',
        data: allPlan.map((e)=> e.affilCoutn),
        backgroundColor: [
          'rgba(211, 84, 0, 0.5)',
          'rgba(241, 196, 15 , 0.5)',
          'rgba(98, 101, 103 , 0.5)',
          'rgba(234, 236, 238 , 0.5)',
           
          
          
        ],
        borderColor: [
          'rgba(211, 84, 0, 1)',
          'rgba(241, 196, 15 , 1)',
          'rgba(171, 178, 185, 1)',
          'rgba(234, 236, 238 , 1)'
          
          
        ],
        borderWidth: 1,
      },
    ],
  };



  return isLoadingAllPlans? (<SpinnerCircular style={{ margin: 'auto', paddingTop: '20px' }}/>) : (<Pie data={data} options={options}/>);
}