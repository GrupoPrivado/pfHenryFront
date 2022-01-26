import React from "react";
import { useSelector } from 'react-redux';
import { SpinnerCircular } from "spinners-react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



const labels = [
  "Buenos Aires",
  "Cordoba",
  "San Juan",
  "La pampa",
  "CABA",
  "Salta",
  "Jujuy",
];

export default function CityDash() {
  const { afilProv, isLoadingAfilProv } = useSelector((state) => state.ABMAdmin);

   const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
      display: true,
      text: "Asociados por provincia",
    },

      
    },
  };
  const data = {
    
      datasets: [
        {
          label: "Asociados por provincia",
          data: afilProv.map((e)=> e.affilCoutn),
          backgroundColor: "rgba(39, 174, 96, 0.8)",
        },
       
      ],
      labels: afilProv.map((e)=> e.nombre)
    };
  

 return(
     
         isLoadingAfilProv? (<SpinnerCircular style={{ margin: 'auto', paddingTop: '20px' }}/>) : (<Bar data={data} options={options}/>)
     
 )
}

