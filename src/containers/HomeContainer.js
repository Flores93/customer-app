import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import AppFrame from "./../components/AppFrame";
import CustomerActions from "./../components/Customer/CustomerActions";

class HomeContainer extends Component {
  handleOnClick = () => {
    this.props.history.push("/customers");
  };
  render() {
    return (
      <div>
        <AppFrame
          header="Home"
          body={
            <div>
              Pantalla inicial
              <br />
              <CustomerActions>
                <button onClick={this.handleOnClick}>
                  Listado de clientes
                </button>
              </CustomerActions>
            </div>
          }
        />
      </div>
    );
  }
}

export default withRouter(HomeContainer);
