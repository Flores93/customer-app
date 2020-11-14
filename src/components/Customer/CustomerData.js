import React from "react";
import PropTypes from "prop-types";

const CustomerData = ({ nombre, dni, edad }) => {
  return (
    <div className="costumer-data">
      <h2>Datos del cliente: </h2>
      <div>
        <strong>Nombre: </strong>
        <i>{nombre}</i>
      </div>
      <div>
        <strong>DNI: </strong>
        <i>{dni}</i>
      </div>
      <div>
        <strong>Edad: </strong>
        <i>{edad}</i>
      </div>
    </div>
  );
};

CustomerData.propTypes = {
  nombre: PropTypes.string.isRequired,
  dni: PropTypes.string.isRequired,
  edad: PropTypes.number,
};

export default CustomerData;
