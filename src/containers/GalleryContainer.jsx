import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Gallery from '../components/Gallery';
import Pagination from '../components/Pagination';
import Filter from '../components/Filter';
import CRUDForm from './GalleryCURD';
import Modal from '../components/Modal';
import { setFilters, addItem, updateItem, deleteItem, setCurrentPage } from '../redux/Gallery/actions';

const GalleryContainer = () => {
  const jsonData = useSelector(state => state.gallery.jsonData);
  const filters = useSelector(state => state.gallery.filters);
  const currentPage = useSelector(state => state.gallery.currentPage);
  const dispatch = useDispatch();
  const itemsPerPage = 10;
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFilterChange = (type, value) => {
    dispatch(setFilters({ ...filters, [type]: value }));
  };

  const handleAddItem = (item) => {
    dispatch(addItem(item));
    setIsModalOpen(false);
  };

  const handleUpdateItem = (item) => {
    dispatch(updateItem(item));
    setIsModalOpen(false);
  };

  const handleDeleteItem = (itemId) => {
    dispatch(deleteItem(itemId));
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
  };

  const filteredData = jsonData.filter(item => {
    return (
      (filters.category === '' || item.category === filters.category) &&
      (filters.type === '' || item.type === filters.type)
    );
  });

  const paginate = pageNumber => {
    dispatch(setCurrentPage(pageNumber));
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className='mt-5'>
      <h1 className='text-center'>LetsWork</h1>

      <p class="page-description text-center">Design Gallery for LetsWork</p>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <CRUDForm
            onAdd={handleAddItem}
            onUpdate={handleUpdateItem}
            selectedItem={selectedItem}
          />
        </Modal>
      )}
      <div class='row topBar'>
        <Filter filters={filters} onFilterChange={handleFilterChange} />
        <button type="button" onClick={() => { setSelectedItem(null); setIsModalOpen(true); }} class="btn btn-primary col-md-2 col-sm-4 ml-3 mr-3" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo"><i class="fa fa-edit"></i>Add</button>
      </div>
      <Gallery
        items={currentItems}
        onUpdate={handleUpdateItem}
        onDelete={handleDeleteItem}
        onSelect={handleSelectItem}
      />
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={filteredData.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default GalleryContainer;