import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVariants, deleteVariantOnServer } from '../actions/variantsAction';
import TableComponent from '../components/TableComponent';

interface VariantListProps {
  Variants: Variant[]; 
  fetchVariants: () => void; 
  deleteVariantOnServer: (variantId: any) => void; 
}

interface Variant {
  id: number;
  name: string;
  active: boolean;
}

class VariantsContainer extends Component<VariantListProps> {
  componentDidMount() {
    this.props.fetchVariants();
  }

  handleDelete = (variantId: any) => {
    this.props.deleteVariantOnServer(variantId);
    this.props.fetchVariants();
  };

  render() {
    const { Variants } = this.props; 
    return (
      <main className="content">
        <div className="container-fluid p-0">
          <TableComponent data={Variants} dataType="Variant" table="variants" onDelete={this.handleDelete} onSave={""} />
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state: any) => ({
  Variants: state.variants.variants, 
});

const mapDispatchToProps = {
  fetchVariants, 
  deleteVariantOnServer,
};

export default connect(mapStateToProps, mapDispatchToProps)(VariantsContainer);