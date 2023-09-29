import React, { Component } from "react"
import CardComponent from "../components/CardComponent"

class StoreContainer extends Component {
  render() {
    return (
      <main className="content">
        <div className="container-fluid p-0">

          <div className="mb-3">
            <h1 className="h3 d-inline align-middle">Cards</h1>
            <a className="badge bg-dark text-white ms-2" href="upgrade-to-pro.html">
              Get more card examples
            </a>
          </div>
          <div className="row">
            <div className="col-6 col-md-4">
              <CardComponent />
            </div>
            <div className="col-6 col-md-4">
              <CardComponent />
            </div>
            <div className="col-6 col-md-4">
              <CardComponent />
            </div>
            <div className="col-6 col-md-4">
              <CardComponent />
            </div>
            <div className="col-6 col-md-4">
              <CardComponent />
            </div>
            <div className="col-6 col-md-4">
              <CardComponent />
            </div>
          </div>
        </div>
      </main>
    );
  }
};

export default StoreContainer;