// Gallery.js
import React from 'react';
import ImageCard from './ImageCard';

const Gallery = ({ items, onUpdate, onDelete, onSelect }) => {

    return (
        <div class="gallery-container">
            {items?.length ?
                <div class="row">
                    {items.map((item, index) => (
                        <ImageCard item={item} onUpdate={onUpdate} onDelete={onDelete} onSelect={onSelect} />
                    ))}
                </div>
                :
                <h1 className='text-center'>No Images found</h1>}
        </div>
    );
};

export default Gallery;
