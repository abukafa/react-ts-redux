import React, { Component } from "react";
import BlankComponent from "../components/BlankComponent";
// import { connect } from "react-redux";
// import { getUsersList, deleteDataUser } from '../actions/userAction'

class HomeContainer extends Component {
//   componentDidMount() {
//     this.props.dispatch(getUsersList());
//     this.props.dispatch(deleteDataUser());
//   }
  render() {
    return (
        <main className="content">
            <div className="container-fluid p-0">
					    <h1 className="h3 mb-3"><strong>Welcome</strong> Home</h1>
              <BlankComponent />
            </div>
        </main>
    );
  }
}

export default HomeContainer;
// export default connect()(HomeContainer);
