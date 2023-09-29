import React, { Component } from "react";
import BlankComponent from "../components/BlankComponent";
import BioComponent from "../components/BioComponent";
import ActivitiesComponent from "../components/ActivitiesComponent";

class ProfileContainer extends Component {
  render() {
    return (
			<main className="content">
				<div className="container-fluid p-0">

					<div className="mb-3">
						<h1 className="h3 d-inline align-middle">My Page</h1>
						<a className="badge bg-dark text-white ms-2" href="https://abukafa.github.io">
                Portfolio
            </a>
					</div>
					<div className="row justify-content-center">
						<div className="col-12">
              <BioComponent />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default ProfileContainer;
