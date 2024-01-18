import React, { useEffect, useState } from "react";
import readCSVFile from "../utils/FileReader";
import CustomLineChart from "./CustomLineChart";

function CostCharts() {
  const [costData, setCostData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cost_data = await readCSVFile(
          "/test_output_planning_monthly.csv"
        );
        setCostData(cost_data);
      } catch (error) {
        console.error("Error al cargar datos:", error);
      }
    };

    fetchData();
  }, []);

  // data tienda 1
  const store_1 = costData.filter((data) => data.tienda == 1);
  console.log(store_1);

  // data tienda 2
  const store_2 = costData.filter((data) => data.tienda == 2);
  console.log(store_2);

  return (
    <>
      <div className='work-mode-charts'>
        <CustomLineChart
          title='Comparación costo dotación tienda 1'
          labels={store_1.map((item) => "Mes " + item.mes)}
          data1={store_1.map((item) => item.costo_dotacion_sp)}
          data2={store_1.map((item) => item.costo_dotacion_real)}
        />
        <CustomLineChart
          title='Comparación costo dotación tienda 2'
          labels={store_2.map((item) => "Mes " + item.mes)}
          data1={store_2.map((item) => item.costo_dotacion_sp)}
          data2={store_2.map((item) => item.costo_dotacion_real)}
        />
      </div>
    </>
  );
}

export default CostCharts;
