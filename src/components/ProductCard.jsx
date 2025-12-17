function ProductCard({ name, price, onAdd }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <button onClick={onAdd}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
