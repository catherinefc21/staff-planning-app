import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/SideBar";
import CostCharts from "./components/CostCharts";
import ContractCharts from "./components/ContractCharts";
import "./App.css";

function App() {
  return (
    <Router>
      <div className='app'>
        <Navbar />
        <Sidebar />
        <main className='main-content'>
          <Routes>
            <Route
              path='/contrataciones-modalidad'
              element={<ContractCharts />}
            />
            <Route path='/costos-personal' element={<CostCharts />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
