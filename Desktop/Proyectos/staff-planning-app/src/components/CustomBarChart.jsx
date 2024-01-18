import React from "react";
import { Bar } from "react-chartjs-2";

function CustomBarChart({ title, labels, data1, data2 }) {
  return (
    <div className='data-card'>
      <Bar
        data={{
          labels: labels,
          datasets: [
            {
              label: "Recomendación SP",
              data: data1,
              backgroundColor: ["rgba(64, 196, 196, 0.527)"],
            },
            {
              label: "Contratación real",
              data: data2,
              backgroundColor: ["rgba(155, 34, 139, 0.425)"],
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

export default CustomBarChart;
