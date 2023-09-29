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
						<h1 className="h3 d-inline align-middle">Profile</h1>
						<a className="badge bg-dark text-white ms-2" href="upgrade-to-pro.html">
                Get more page examples
            </a>
					</div>
					<div className="row">
						<div className="col-md-4 col-xl-3">
              <BioComponent />
            </div>
						<div className="col-md-8 col-xl-9">
              <ActivitiesComponent />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default ProfileContainer;
