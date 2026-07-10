function ShopCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />

      <h3>{product.title}</h3>

      <p>₹{product.price}</p>

      <p>{product.category}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ShopCard;