import React from "react";
import PropTypes from "prop-types";
import CustomerListItem from "./CustomerListItem";

const CustomerList = ({ customers, url_base }) => {
  return (
    <div>
      <div className="customers-list">
        {customers.map((c) => (
          <CustomerListItem
            key={c.dni}
            nombre={c.nombre}
            editAction={"editar"}
            delAction={"eliminar"}
            urlPath={url_base}
            dni={c.dni}
          />
        ))}
      </div>
    </div>
  );
};

CustomerList.propTypes = {
  customers: PropTypes.array.isRequired,
  url_base: PropTypes.string.isRequired,
};

export default CustomerList;
