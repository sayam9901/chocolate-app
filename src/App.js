
import React, { useState } from 'react';
import './App.css';

function App() {
  const [chocolates, setChocolates] = useState([]);
  const [cart, setCart] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [showCart, setShowCart] = useState(false);

  const handleAddChocolate = () => {
    if (name && description && price > 0) {
      const newChocolate = { name, description, price };
      setChocolates([...chocolates, newChocolate]);
      setName('');
      setDescription('');
      setPrice(0);
    }
  };

  const handleBuy = (amount , chocolatePrice , name) => {
    const totalPrice = amount * chocolatePrice;
    console.log(totalPrice)
    setCart([...cart, { name, amount, totalPrice }]);
  };

  const openCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Chocolate Stock</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <button onClick={handleAddChocolate}>Add</button>
        </div>
        <button onClick={openCart}>Cart ({cart.length})</button>
      </header>
      <div className="chocolates-container">
        {chocolates.map((chocolate, index) => (
          <div className="chocolate" key={index}>
            <h2>{chocolate.name}</h2>
            <p>{chocolate.description}</p>
            <p>${chocolate.price}</p>
            <button onClick={() => handleBuy(1 , chocolate.price , chocolate.name)}>Buy One</button>
            <button onClick={() => handleBuy(2, chocolate.price , chocolate.name)}>Buy Two</button>
            <button onClick={() => handleBuy(3, chocolate.price , chocolate.name)}>Buy Three</button>
          </div>
        ))}
      </div>
      {showCart && (
        <div className="cart">
          <h2>Cart</h2>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - Quantity: {item.amount} - Total Price: ${item.totalPrice}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
