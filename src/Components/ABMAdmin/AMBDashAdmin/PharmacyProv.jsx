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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
 





export function PharmacyProv() {



  const { pharmCity, isLoadingPharmCity } = useSelector((state) => state.ABMAdmin);

  const labels = pharmCity.map((e)=> e.nombre);
  //const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const options = {
    indexAxis: 'y'  ,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
       display:false ,
      },
      title: {
        display: true,
        text: 'Farmacias por provincia',
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        
        data: pharmCity.map((e)=> e.pharmCount ),
        borderColor: 'rgb(41, 128, 185)',
        backgroundColor: 'rgba(41, 128, 185, 0.5)',
      },
      
    ],
  };
  return isLoadingPharmCity? (<SpinnerCircular style={{ margin: 'auto', paddingTop: '20px' }}/>) : (<Bar options={options} data={data} />);
}