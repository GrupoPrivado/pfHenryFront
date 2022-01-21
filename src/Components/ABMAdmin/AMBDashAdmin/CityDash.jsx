import React, { useMemo } from "react";

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

export const options = {
  responsive: true,
  plugins: {
    // legend: {
    //   position: 'top' as const,
    // },
    // title: {
    //   display: true,
    //   text: "Asociados por provincia",
    // },
  },
};

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
  const data = useMemo(() => {
    return {
      datasets: [
        {
          label: "Asociados por provincia",
          data: [188, 55, 56,445,74 , 200, 23],
          backgroundColor: "rgba(169, 110, 247 , 0.8)",
        },
        // {
        //   label: "Dataset 2",
        //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        //   backgroundColor: "rgba(53, 162, 235, 0.5)",
        // },
      ],
      labels,
    };
  }, []);
 return(
     <div>
         <Bar data={data} options={options}/>
     </div>
 )
}
// export function CityDash() {
//   return <Bar options={options} data={data} />;
// }
