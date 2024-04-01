// CRUDForm.js
import React, { useEffect, useState } from 'react';

const CRUDForm = ({ onAdd, onUpdate, selectedItem }) => {
    const [formData, setFormData] = useState({
        id: 0,
        property: '',
        category: '',
        type: '',
        img: ''
    });

    useEffect(() => {
        if (selectedItem) {
            setFormData(selectedItem);
        }
        else{
            setFormData({
                id: 0,
                property: '',
                category: '',
                type: '',
                img: ''
            });
        }
    }, [selectedItem]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedItem) {
            onUpdate(formData);
        } else {
            onAdd(formData);
        }
        setFormData({
            id: 0,
            property: '',
            category: '',
            type: '',
            img: ''
        });
    };

    return (
        <div>
            <h3>{selectedItem ? 'Update' : 'Add New'} Image</h3>
                <div class="form-group">
                    <label for="recipient-name" class="col-form-label">Property:</label>
                    <input type="text" class="form-control" value={formData.property} onChange={handleChange} required name="property" />
                </div>

                <div class="form-group">
                    <label for="recipient-name" class="col-form-label">Category:</label>
                    <select  class="form-control" name="category" value={formData.category} onChange={handleChange} required>
                        <option value="1 star">1 star</option>
                        <option value="2 star">2 star</option>
                        <option value="3 star">3 star</option>
                        <option value="4 star">4 star</option>
                        <option value="5 star">5 star</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="recipient-name" class="col-form-label">Type:</label>
                    <select  class="form-control" name="type" value={formData.type} onChange={handleChange} required>
                        <option value="Hostel">Hostel</option>
                        <option value="Hotel">Hotel</option>
                        <option value="Motel">Motel</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="recipient-name" class="col-form-label">Image URL:</label>
                    <input type="text" class="form-control" value={formData.img} onChange={handleChange} required name="img" />
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" onClick={handleSubmit} class="btn btn-primary"  data-dismiss="modal">{selectedItem ? 'Update' : 'Add'}</button>
                </div>
        </div>
    );
};

export default CRUDForm;
