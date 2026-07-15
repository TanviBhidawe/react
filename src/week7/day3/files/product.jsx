const products = [
  {
    id: 1,
    name: "Smartphone",
    price: 25000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
  },
  {
    id: 2,
    name: "Laptop",
    price: 55000,
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400",
  },
  {
    id: 3,
    name: "Headphones",
    price: 3000,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 8000,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
  },
    {
    id: 5,
    name: "bluetooth",
    price: 8000,
    image: "https://rukminim2.flixcart.com/image/480/640/xif0q/headphone/d/f/4/latest-bluetooth-earbuds-2024-new-tws-wireless-headphones-5-0-original-imahfynqb7rhezad.jpeg?q=90",
  },
    {
    id: 6,
    name: "tablet",
    price: 8000,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS9df8ug6ZrbAEmZCbaz5bvgP2HVHRLscsIRreEwMWWie1UGDWGqXcK4v4LFhwku3aCvda_SUFxft6uNempj8FVATnL5kuJq1F_-Ijy_Is9bu8Mv29_OhLcULk",
  },


];
function Product() {
  return (
    <div>
      <h1>Products</h1>

      <div className="cards">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export{products}
export default Product;