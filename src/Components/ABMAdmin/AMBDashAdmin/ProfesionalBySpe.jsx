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







export function ProfesionalBySpe() {

    const { profEspec, isLoadingProfEspec } = useSelector((state) => state.ABMAdmin);

    const labels = profEspec.map((e)=> e.nombre);

     const data = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: profEspec.map((e)=> e.profCoutn),
            backgroundColor: 'rgba(2241, 196, 15)',
          },
          
        ],
      };

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' ,
            display: false,
          },
          title: {
            display: true,
            text: 'Profesionales por Especialidad',
          },
        },
      };
  return isLoadingProfEspec? (<SpinnerCircular style={{ margin: 'auto', paddingTop: '20px' }}/>) : (<Bar options={options} data={data} />)
}