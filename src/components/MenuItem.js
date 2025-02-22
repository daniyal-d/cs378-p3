import React from 'react';

// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
function MenuItem({ title, description, imageName, price, count, onIncrement, onDecrement }) {
  const imagePath = `${process.env.PUBLIC_URL}/images/${imageName}`;
  
    return (
      <div className="col-12 d-flex align-items-center">
        {/* Food image */}
        <div className="food-img">
          <img src={imagePath} alt={title} />
        </div>
  
        {/* Info */}
        <div className="flex-grow-1 ms-3">
          <h4 className="mb-1">{title}</h4>
          <p className="mb-1">{description}</p>
          {/* Price & Add Button */}
          <div className="col-12 d-flex align-items-center">
            <p className="price mb-0">${price.toFixed(2)}</p>
            <div className="ms-auto d-flex align-items-center">
              <button className="btn-quantity" onClick={onDecrement}>−</button>
              <span className="mx-2">{count}</span>
              <button className="btn-quantity" onClick={onIncrement}>+</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default MenuItem;  