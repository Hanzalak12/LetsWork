import React, { useEffect } from 'react';
import Star from './Star';

const ImageCard = ({ item, onUpdate, onDelete, onSelect }) => {
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    console.log(Date.now(), 'loading Start', item.id)
  }, [])
  const handleSelect = (item) => {
    // You can pass the item to the parent component for update
    onSelect(item);
  };

  const handleDelete = (itemId) => {
    // You can pass the itemId to the parent component for deletion
    onDelete(itemId);
  };

  return (
    // <div class="widget-container center">
    //   <div class="card">
    //     <div class="card-top">
    //       <img
    //         class="main-image"
    //         src={item.img}
    //         alt={item.property}
    //         style={{ width: '100%', height: '15vw', objectFit: 'cover' }}
    //       />
    //     </div>
    //     <div class="card-description row">
    //       <div class="col-md-7">
    //         <div class="hotel-name">
    //           {item.type}
    //           <Star value={item.category.substr(0, 1)} />
    //         </div>
    //         <div class="hotel-location">
    //           {item.property}
    //         </div>
    //       </div>
    //       <div class="col-md-5 center-vertically">
    //         <button class="book-button">BOOK NOW</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div class="col-lg-3 col-md-4 col-sm-4 mt-3">
      <div class="card">
        <img
          onLoad={() => { setLoading(false); console.log(Date.now(), 'loading', item.id) }}
          src={item.img}
          class="card-img-top"
          alt={item.property}
          style={{ width: '100%', height: '200px', objectFit: 'cover' }}
        />
        <div class="card-body pl-2">
          <div class="content">
            {loading && <div class="spinner-border text-primary" role="status">
              <span>Loading...</span>
            </div>
            }
            <div className='tag'>
              <span class="badge badge-warning float-right">{item.type}</span>
              {/* <span class="badge badge-pill badge-info m-1 float-right">{item.category}</span> */}
            </div>
            <p class="card-text">{item.property}</p>

            <Star value={item.category.substr(0, 1)} />
            <div className='actions'>
              <ul class="list-inline m-0">
                <li class="list-inline-item">
                  <button onClick={() => handleSelect(item)}  data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo" class="btn btn-success btn-sm rounded-0" type="button" title="Edit"><i class="fa fa-edit"></i></button>
                </li>
                <li class="list-inline-item">
                  <button onClick={() => handleDelete(item.id)}  class="btn btn-danger btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i class="fa fa-trash"></i></button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
