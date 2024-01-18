import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function CustomLineChart({ title, labels, data1, data2 }) {
  return (
    <div className='data-card'>
      <Line
        data={{
          labels: labels,
          datasets: [
            {
              label: "Costo dotación según SP",
              data: data1,
              borderColor: ["rgba(64, 196, 196, 0.527)"],
              pointBackgroundColor: ["rgba(64, 196, 196, 0.527)"],
            },
            {
              label: "Costo dotación real",
              data: data2,
              borderColor: ["rgba(155, 34, 139, 0.425)"],
              pointBackgroundColor: ["rgba(155, 34, 139, 0.425)"],
            },
          ],
        }}
        options={{
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: title,
              color: "black",
              font: {
                size: 16,
                weight: "bold",
              },
            },
          },
          scales: {
            x: {
              ticks: {
                font: {
                  size: 12,
                  weight: "bold",
                },
              },
            },
            y: {
              ticks: {
                font: {
                  size: 12,
                  weight: "bold",
                },
              },
            },
          },
        }}
      />
    </div>
  );
}

export default CustomLineChart;
