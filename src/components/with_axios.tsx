import React, { useState } from "react";
import { Search, Feather, Printer, Edit, Trash } from "react-feather"
import axios from "axios";
import { API_URL } from "../utils/constants";

interface TableComponentProps {
    data: any[]; // Prop untuk data yang diterima
}

const TableComponent: React.FC<TableComponentProps> = ({ data }) => {

    const handleInputSubmit = (e: any) => {
    e.preventDefault();
    const newData = {
        name: selectedItem.name,
        active: selectedItem.active,
    };
    axios.post(API_URL + 'categories/', newData)
        .then((response) => {
        console.log('Data has been sent successfully:', response.data);
        })
        .catch((error) => {
        console.error('Error sending data:', error);
        });
        window.location.reload();
    };

    const [selectedItem, setSelectedItem] = useState<any>(null);
    const [update, setUpdate] = useState<boolean>(false)
    const openEditModal = (item: any) => {
      setSelectedItem(item);
      setUpdate(true)
    };
    const openInputModal = () => {
      setSelectedItem(null);
      setUpdate(false)
    };

    const handleEditSubmit = (e: any) => {
    e.preventDefault();
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const activeElement = document.getElementById('active') as HTMLSelectElement;
    if (!nameElement || !activeElement) {
        console.error('DOM elements not found.');
        return;
    }
    const updatedData = {
        name: nameElement.value,
        active: activeElement.value === '1',
    };
    axios.put(`${API_URL}categories/${selectedItem.id}`, updatedData)
        .then((response) => {
        console.log('Data has been updated successfully:', response.data);
        })
        .catch((error) => {
        console.error('Error updating data:', error);
        });
        window.location.reload();
    };
      
    const handleDelete = (item: any) => {
    if (!window.confirm('Are you sure you want to delete this item?')) {
        return;
    }
    axios
        .delete(`${API_URL}categories/${item.id}`)
        .then((response) => {
        console.log('Data has been deleted successfully:', response.data);
        })
        .catch((error) => {
        console.error('Error deleting data:', error);
        });
        window.location.reload();
    };

    return (
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
                        <Feather size={18} onClick={() => openInputModal()} />
                        </a>
                    </div>
                    </div>
                    <div className="card-body">
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
                                    onClick={() => openEditModal(item)}
                                >
                                    <Edit size={18} />
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-danger delete rounded-circle p-2 ms-1"
                                    onClick={() => handleDelete(item)}
                                >
                                    <Trash size={18}  />
                                </button>
                                </div>
                            </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
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
                    <form>
                    <div className='modal-body'>
                        <div className='mb-2'>
                        <label className='form-label'>Code</label>
                        <input type='text' className='form-control' name='id' id='id' value={selectedItem ? selectedItem.id : ''} onChange={(e) => setSelectedItem({ ...selectedItem, id: e.target.value })} />
                        </div>
                        <div className='mb-2'>
                        <label className='form-label'>Category Name</label>
                        <input type='text' className='form-control' name='name' id='name' value={selectedItem ? selectedItem.name : ''} onChange={(e) => setSelectedItem({ ...selectedItem, name: e.target.value })} />
                        </div>
                        <div className='mb-2'>
                        <label className='form-label'>Status</label>
                        <select className='form-select' name='active' id='active' onChange={(e) => setSelectedItem({ ...selectedItem, active: e.target.value })}>
                            <option value=''>{!selectedItem ? '.. pilih ..' : (selectedItem.active ? 'Active' : 'Inactive')}</option>
                            <option value='1'>Active</option>
                            <option value='0'>Inactive</option>
                        </select>
                        </div>
                    </div>
                    <div className='modal-footer'>
                        <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>Tutup</button>
                        {update ? (
                            <button type='button' className='btn btn-primary' onClick={handleEditSubmit}>Update</button>
                        ) : (
                            <button type='button' className='btn btn-primary' onClick={handleInputSubmit}>Save</button>
                        )}
                    </div>
                    </form>
                </div>
                </div>
            </div>
        </div>
    );
};

export default TableComponent;