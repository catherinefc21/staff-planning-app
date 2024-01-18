import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChartBar, FaCog, FaChartLine, FaMoneyBillAlt } from "react-icons/fa";
import { MdPerson } from "react-icons/md";

const Sidebar = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className='sidebar'>
      <div className='options'>
        <Link
          to='/contrataciones-modalidad'
          className={`option ${
            selectedOption === "contrataciones" ? "selected" : ""
          }`}
          onClick={() => handleOptionClick("Modalidad")}
        >
          <FaChartBar /> Contrataciones
        </Link>

        <Link
          to='/costos-personal'
          className={`option ${selectedOption === "Costos" ? "selected" : ""}`}
          onClick={() => handleOptionClick("Costos")}
        >
          <FaMoneyBillAlt /> Costos dotación
        </Link>

        <Link>
          <FaChartLine /> Otros indicadores
        </Link>
      </div>

      <div className='config-cuenta-container'>
        <Link>
          <FaCog /> Configuración
        </Link>

        <Link>
          <MdPerson /> Cuenta
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
