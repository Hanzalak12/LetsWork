// Filter.js
import React from 'react';

const Filter = ({ filters, onFilterChange }) => {
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        onFilterChange(name, value);
    };

    return (
        <div class="form-group col-sm-12 col-md-6 row">
            <div className='col-sm-6 col-md-6 row'>
                <label class="col-sm-4 col-md-4 col-form-label">Category:</label>
                <div class="col-sm-8 col-md-8">
                    <select class="form-control" name="category" value={filters.category} onChange={handleFilterChange}>
                        <option value="">All</option>
                        <option value="1 star">1 star</option>
                        <option value="2 star">2 star</option>
                        <option value="3 star">3 star</option>
                        <option value="4 star">4 star</option>
                        <option value="5 star">5 star</option>
                    </select>
                </div>
            </div>
            <div className='col-sm-6 col-md-6 row'>
                <label class="col-sm-4 col-form-label">Type:</label>
                <div class="col-sm-8 col-md-8">
                    <select class="form-control" name="type" value={filters.type} onChange={handleFilterChange}>
                        <option value="">All</option>
                        <option value="Hostel">Hostel</option>
                        <option value="Hotel">Hotel</option>
                        <option value="Motel">Motel</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Filter;
