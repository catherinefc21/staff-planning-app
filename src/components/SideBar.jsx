import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChartBar, FaCog, FaStore, FaMoneyBillAlt } from "react-icons/fa";
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
            selectedOption === "Modalidad" ? "selected" : ""
          }`}
          onClick={() => handleOptionClick("Modalidad")}
        >
          <FaChartBar /> Gestión de personas
        </Link>

        <Link
          to='/costos-personal'
          className={`option ${selectedOption === "Costos" ? "selected" : ""}`}
          onClick={() => handleOptionClick("Costos")}
        >
          <FaMoneyBillAlt /> Costos
        </Link>

        <Link>
          <FaStore /> Tiendas
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
