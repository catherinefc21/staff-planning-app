import React, { useEffect, useState } from "react";
import readCSVFile from "./FileReader";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import CustomBarChart from "./CustomBarChart";

function ContractCharts() {
  const [data, setData] = useState([]);
  const [selectedStore, setSelectedStore] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const contrato_data = await readCSVFile("/test_contrato_monthly.csv");
        console.log("contratoData:", contrato_data);
        setData(contrato_data);
      } catch (error) {
        console.error("Error al cargar datos:", error);
      }
    };

    fetchData();
  }, []);
  // Data tienda 1
  const store1 = data.filter((data) => data.tienda == 1);

  // tienda 1 : FULL TIME
  const store1Fulltime = store1.filter(
    (data) => data.nombre == "TEST CAJERO FULLTIME"
  );

  // tienda 1 : Part - TIME
  const store1Parttime = store1.filter(
    (data) => data.nombre == "TEST CAJERO PART TIME"
  );

  // Data tienda 2
  const store2 = data.filter((data) => data.tienda == 2);

  // tienda 2: FULL TIME
  const store2Fulltime = store2.filter(
    (data) => data.nombre == "TEST CAJERO FULLTIME"
  );

  // tienda 2: Part TIME
  const store2Parttime = store2.filter(
    (data) => data.nombre == "TEST CAJERO PART TIME"
  );

  // tienda 2: 3x4Partime
  const store23x4 = store2.filter(
    (data) => data.nombre == "TEST 3X4 PART TIME"
  );

  // tienda 2: PICK TIME
  const store2PickTime = store2.filter(
    (data) => data.nombre == "TEST PICK TIME"
  );

  return (
    <>
      <div className='select-store'>
        <label>
          Selecciona una tienda:
          <select
            id='storeSelect'
            onChange={(e) => setSelectedStore(parseInt(e.target.value))}
            value={selectedStore}
          >
            <option value={1}>Tienda 1</option>
            <option value={2}>Tienda 2</option>
          </select>
        </label>
      </div>
      {selectedStore === 1 && (
        <div className='work-mode-charts'>
          <CustomBarChart
            title='Contrataciones modalidad Full-Time'
            labels={store1Fulltime.map((item) => "Mes " + item.mes)}
            data1={store1Fulltime.map((item) => item.contratados_sp)}
            data2={store1Fulltime.map((item) => item.contratados_ne)}
          />
          <CustomBarChart
            title='Contrataciones modalidad Part-Time'
            labels={store1Parttime.map((item) => "Mes " + item.mes)}
            data1={store1Parttime.map((item) => item.contratados_sp)}
            data2={store1Parttime.map((item) => item.contratados_ne)}
          />
        </div>
      )}
      {selectedStore === 2 && (
        <div className='work-mode-charts'>
          <CustomBarChart
            title='Contrataciones modalidad Full-Time'
            labels={store2Fulltime.map((item) => "Mes " + item.mes)}
            data1={store2Fulltime.map((item) => item.contratados_sp)}
            data2={store2Fulltime.map((item) => item.contratados_ne)}
          />
          <CustomBarChart
            title='Contrataciones modalidad Part-Time'
            labels={store2Parttime.map((item) => "Mes " + item.mes)}
            data1={store2Parttime.map((item) => item.contratados_sp)}
            data2={store2Parttime.map((item) => item.contratados_ne)}
          />
          <CustomBarChart
            title='Contrataciones modalidad 3x4 Part-Time'
            labels={store23x4.map((item) => "Mes " + item.mes)}
            data1={store23x4.map((item) => item.contratados_sp)}
            data2={store23x4.map((item) => item.contratados_ne)}
          />
          <CustomBarChart
            title='Contrataciones modalidad Pick-time'
            labels={store2PickTime.map((item) => "Mes " + item.mes)}
            data1={store2PickTime.map((item) => item.contratados_sp)}
            data2={store2PickTime.map((item) => item.contratados_ne)}
          />
        </div>
      )}
    </>
  );
}
export default ContractCharts;
