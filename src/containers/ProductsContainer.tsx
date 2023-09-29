import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts, deleteproductOnServer, createProduct } from '../actions/productsAction';
import TableComponent from '../components/TableComponent';

interface ProductListProps {
  Products: Product[]; 
  fetchProducts: () => void; 
  deleteproductOnServer: (productId: any) => void;
  createProduct: (arg0: FormData) => void;
}

interface Product {
  id: number;
  name: string;
  active: boolean;
}

class ProductsContainer extends Component<ProductListProps> {
  componentDidMount() {
    this.props.fetchProducts();
  }
  
  handleDelete = (productId: any) => {
    this.props.deleteproductOnServer(productId);
    this.props.fetchProducts();
  };

  handleSave = (e: React.FormEvent, formData: FormData) => {
    e.preventDefault()
    console.log('Data form  = ', formData);
    this.props.createProduct(formData); // Panggil fungsi createProduct dengan formData sebagai argumen
    this.props.fetchProducts(); // Ambil data terbaru setelah mengirim data ke server
  }

  render() {
    const { Products } = this.props; 
    return (
      <main className="content">
        <div className="container-fluid p-0">
          <TableComponent data={Products} dataType="Product" table="products" onDelete={this.handleDelete} onSave={this.handleSave} />
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state: any) => ({
  Products: state.products.products, 
});

const mapDispatchToProps = {
  fetchProducts, 
  deleteproductOnServer,
  createProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);