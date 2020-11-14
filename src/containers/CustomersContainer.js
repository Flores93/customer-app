import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import AppFrame from "../components/AppFrame";
import CustomerActions from "../components/Customer/CustomerActions";
import CustomerList from "../components/Customer/CustomerList";
import { fetchCustomers } from "../actions/fetchCustomers";
import { getCostumers } from "../selectors/customers";

class CustomersContainer extends Component {
  componentDidMount() {
    this.props.fetchCustomers();
  }

  renderBody = (customers) => (
    <CustomerList customers={customers} url_base={"customers/"} />
  );

  handleAddNew = () => {
    this.props.history.push("/customers/new");
  };

  handleBackHome = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <AppFrame
          header="Listado de Clientes"
          body={this.renderBody(this.props.costumers)}
        />
        <CustomerActions>
          <button onClick={this.handleAddNew}>Nuevo cliente</button>
          <button onClick={this.handleBackHome}>Volver a home</button>
        </CustomerActions>
      </div>
    );
  }
}

CustomersContainer.propTypes = {
  fetchCustomers: PropTypes.func.isRequired,
  costumers: PropTypes.array.isRequired,
};

CustomersContainer.defaultProps = {
  costumers: [],
};

const mapDispatchToProps = { fetchCustomers };

const mapStateToProps = (state) => ({
  costumers: getCostumers(state),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CustomersContainer)
);
