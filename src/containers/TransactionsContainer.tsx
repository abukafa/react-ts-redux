import React, { Component } from "react"
import TableComponent from "../components/TableComponent";

class CategoriesContainer extends Component {
  render() {
    return (
      <main className="content">
        <div className="container-fluid p-0">
          <TableComponent data={[]} dataType="" table="transactions" onDelete={""} onSave={""} />
        </div>
      </main>
    );
  }
};

export default CategoriesContainer;