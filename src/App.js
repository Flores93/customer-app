import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CustomersContainer from "./containers/CustomersContainer";
import CustomerContainer from "./containers/CustomerContainer";
import HomeContainer from "./containers/HomeContainer";

import "./App.css";

class App extends Component {
  renderHome = () => <HomeContainer />;

  renderCustomerListContainer = () => <CustomersContainer />;

  renderCustomerNewContainer = () => <h1>Customer New Container</h1>;

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" render={this.renderHome} />
          <Route
            exact
            path="/customers"
            render={this.renderCustomerListContainer}
          />
          <Switch>
            <Route
              path="/customers/new"
              render={this.renderCustomerNewContainer}
            />
            <Route
              path="/customers/:dni"
              render={(props) => (
                <CustomerContainer {...props} dni={props.match.params.dni} />
              )}
            />
          </Switch>
          <div>Aplicación Customers</div>
        </div>
      </Router>
    );
  }
}

export default App;
