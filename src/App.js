import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import MenuItem from './components/MenuItem';

// import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];


function App() {
  const [cart, setCart] = useState({});

  const handleIncrement = (itemId) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      newCart[itemId] = (newCart[itemId] || 0) + 1;
      return newCart;
    });
  };

  const handleDecrement = (itemId) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[itemId]) {
        newCart[itemId] = Math.max(0, newCart[itemId] - 1);
      }
      return newCart;
    });
  };

  const handleClearAll = () => {
    setCart({});
  };

  const subtotal = menuItems.reduce((acc, item) => {
    const count = cart[item.id] || 0;
    return acc + (item.price * count);
  }, 0);

  const handleOrder = () => {
    const itemsInCart = menuItems.filter(item => (cart[item.id] || 0) > 0);
  
    if (itemsInCart.length === 0) {
      alert("No items in cart");  // This will show only "OK"
      return;
    }
  
    const orderDetails = itemsInCart
      .map(item => `${item.title} x ${cart[item.id]}`)
      .join('\n');
  
    alert(`Order placed:\n${orderDetails}\n\nSubtotal: $${subtotal.toFixed(2)}`);
  };  

  return (
    <div className="container py-5">
      {/* Pass the header props here */}
      <Header
        webTitle="P3 - Campus Cafe"
        logoPath="images/os-campus-cafe-logo-2x.png"
        cursiveText="Delicious, From-Scratch Recipes Close at Hand"
        subHeadingText="The Fresh Choice of UT!"
      />

      {/* Menu items */}
      <div className="row g-4">
        {menuItems.map((item) => (
          <MenuItem
            key={item.id}
            title={item.title}
            description={item.description}
            imageName={item.imageName}
            price={item.price}
            count={cart[item.id] || 0}
            onIncrement={() => handleIncrement(item.id)}
            onDecrement={() => handleDecrement(item.id)}
          />
        ))}
      </div>

      {/* Cart Total */}
      <div className="cart-total mt-4 d-flex align-items-center">
        <h4 className="me-auto">Subtotal: ${subtotal.toFixed(2)}</h4>
        <div className="d-flex">
        <button className="btn btn-primary me-2 btn-oval" onClick={handleOrder}>Order</button>
        <button className="btn btn-secondary btn-oval" onClick={handleClearAll}>Clear All</button>
        </div>
      </div>
    </div>
  );
}

export default App;
