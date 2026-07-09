function ProductCard({ image, title, price, category }) {
  return (
    <div className="card">
      <img src={image} alt={title} />

      <h3>{title}</h3>

      <p className="price"> {price}$</p>

      <p className="category">{category}</p>
    </div>
  );
}

export default ProductCard;