import React, { useState } from "react";
import { Search, Feather, Printer, Edit, Trash } from "react-feather"

interface TableComponentProps {
  data: any[]; 
  dataType: string; 
  table: string; 
  onDelete: any;
  onSave: any;
}

const defaultFormData = {
    name: "",
    active: "",
}

const TableComponent: React.FC<TableComponentProps> = ({ data, table, onDelete, onSave }) => {  
    const [formData, setFormData ] = useState(defaultFormData)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    return (
        <div>
            <h1 className="h3 mb-3">Data <strong>{table.replace(/\b\w/g, char => char.toUpperCase())}</strong></h1>
            <div>
                <div className="row">
                    <div className="col-12">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between">
                        <form action="" method="post">
                            <div className="input-group col-12 col-lg-4">
                            <span className="input-group-text"><Search /></span>
                            <input type="text" className="form-control" name="cari" id="cari" placeholder="Pencarian" />
                            </div>
                        </form>
                        <div className="btn-group">
                            <a href="#" className="btn btn-primary inputBarang rounded-pill" data-bs-toggle="modal" data-bs-target="#modalBarang">
                            <Feather size={18} />
                            </a>
                        </div>
                        </div>
                        <div className="card-body">
                        {data && Array.isArray(data) && data.length > 0 ? (
                            <table className="table table-hover table-sm">
                                <thead className="table-active text-center">
                                <tr>
                                    <th>No</th>
                                    <th>Code</th>
                                    <th>Category</th>
                                    <th>Status</th>
                                    <th>Opsi</th>
                                </tr>
                                </thead>
                                <tbody>
                                {data.map((item, i) => (
                                    <tr className="text-center" key={item.id}>
                                    <td>{i + 1}</td>
                                    <td>000{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.active == true ? 'Active' : 'Inactive'}</td>
                                    <td>
                                        <div className="btn-group">
                                        <button
                                            type="button"
                                            className="btn btn-success editBarang rounded-circle p-2 ms-1"
                                            data-bs-toggle="modal"
                                            data-bs-target="#modalBarang"
                                        >
                                            <Edit size={18} />
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-danger delete rounded-circle p-2 ms-1"
                                            onClick={() => onDelete(item.id)}
                                        >
                                            <Trash size={18}  />
                                        </button>
                                        </div>
                                    </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        ) : (
                            <div className="text-center">No data to display.</div>
                        )}
                        </div>
                    </div>
                    </div>
                </div>
                <div className='modal fade' id='modalBarang' data-bs-backdrop='static' data-bs-keyboard='false' tabIndex={-1} aria-labelledby='modalBarangLabel' aria-hidden='true'>
                    <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                        <h5 className='modal-title' id='modalBarangLabel'></h5>
                        <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                        </div>
                        <form onSubmit={(e) => onSave(e, formData)}>
                        <div className='modal-body'>
                            <div className='mb-2'>
                            <label className='form-label'>Code</label>
                            <input type='text' className='form-control' name='id' id='id' />
                            </div>
                            <div className='mb-2'>
                            <label className='form-label'>Name</label>
                            <input type='text' className='form-control' name='name' id='name' value={formData.name} onChange={handleInputChange} />
                            </div>
                            <div className='mb-2'>
                            <label className='form-label'>Status</label>
                            <select className='form-select' name='active' id='active' value={formData.active} onChange={handleSelectChange} >
                                <option value=''></option>
                                <option value='1'>Active</option>
                                <option value='0'>Inactive</option>
                            </select>
                            </div>
                        </div>
                        <div className='modal-footer'>
                            <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>Tutup</button>
                            <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Save</button>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TableComponent;