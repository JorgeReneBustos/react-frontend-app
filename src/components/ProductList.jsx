import { useState } from "react";
import ProductCard from "./ProductCard";
import productsData from "../data/products";

function ProductList() {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  const filteredProducts = productsData.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="controls">
        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => setSearch("")}>Reset</button>
      </div>

      <p>
        Showing <strong>{filteredProducts.length}</strong> products
      </p>

      <div className="list">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            onAdd={() => addToCart(product)}
          />
        ))}
      </div>

      <h2>Cart ({cart.length})</h2>

      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductList;
