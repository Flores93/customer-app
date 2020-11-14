import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

import AppFrame from "../components/AppFrame";
import { getCostumerByDni } from "./../selectors/customers";
import CustomerData from "./../components/Customer/CustomerData";
import CustomerEdit from "../components/Customer/CustomerEdit";

class CustomerContainer extends Component {
  // <div>
  //   <p>Datos del cliente"{this.props.costumers.nombre}"</p>
  // </div>
  renderBody = () => (
    <Route
      path="/customers/:dni/edit"
      children={({ match }) => {
        const CustomerControl = match ? CustomerEdit : CustomerData;
        return <CustomerControl {...this.props.costumers} />;
      }}
    />
  );
  render() {
    return (
      <div>
        <AppFrame
          header={`Cliente ${this.props.dni}`}
          body={this.renderBody()}
        ></AppFrame>
      </div>
    );
  }
}

CustomerContainer.propTypes = {
  dni: PropTypes.string.isRequired,
  costumers: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
  costumers: getCostumerByDni(state, props),
});

export default connect(mapStateToProps, null)(CustomerContainer);
