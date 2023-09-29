import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories, deleteCategoryOnServer } from '../actions/categoriesAction';
import TableComponent from '../components/TableComponent';

interface CategoryListProps {
  Categories: Category[]; 
  fetchCategories: () => void; 
  deleteCategoryOnServer: (categoryId: any) => void;
}

interface Category {
  id: number;
  name: string;
  active: boolean;
}

class CategoriesContainer extends Component<CategoryListProps> {
  componentDidMount() {
    this.props.fetchCategories();
  }
  
  handleDelete = (categoryId: any) => {
    this.props.deleteCategoryOnServer(categoryId);
    this.props.fetchCategories();
  };

  render() {
    const { Categories } = this.props; 
    return (
      <main className="content">
        <div className="container-fluid p-0">
          <TableComponent data={Categories} dataType="Category" table="categories" onDelete={this.handleDelete} onSave={""} />
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state: any) => ({
  Categories: state.categories.categories, 
});

const mapDispatchToProps = {
  fetchCategories, 
  deleteCategoryOnServer,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer);