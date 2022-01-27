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
import { useSelector } from 'react-redux';
import { SpinnerCircular } from "spinners-react";
import { NOT_AUTHENTICATED } from '../../../actions/actionAuth';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



const labels = ['Afiliados Totales', 'Activos', 'Alta'];



export function AfiliateEvolution() {

  const {afilStat, isLoadingAfilStat } = useSelector((state) => state.ABMAdmin);

   const data = {
    labels,
    datasets: [
      {
         
        data: [afilStat.affilTotal,afilStat.activo, afilStat.alta],
        borderColor: ['rgb(255, 99, 132)','rgb(53, 162, 235)','rgb(69, 179, 157)'],
        backgroundColor: ['rgba(255, 99, 132, 0.5)','rgba(53, 162, 235, 0.5)','rgba(69, 179, 157, 0.5)'],
      },
      
    ],
  };


   const options = {
    indexAxis: 'y' ,
    responsive: true,
    maintainAspectRatio :false,
    // elements: {
    //   bar: {
    //     borderWidth: 2,
    //   },
    // },
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: "Afiliados por Status",
      },
    },
    
    
  };
  return isLoadingAfilStat? (<SpinnerCircular style={{ margin: 'auto', paddingTop: '20px' }}/>) : <Bar options={options} data={data} />;

 
}