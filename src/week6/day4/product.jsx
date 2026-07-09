import { useEffect, useState } from "react";
import "./product.css";
import ProductCard from "./productcard";

function Product() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    try {
      const response = await fetch("https://dummyjson.com/products?limit=194");

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response.json();
      setItems(data.products);
       setTimeout(() => {
      setItems(data.products);
      setLoading(false);
    }, 2000); 
    }catch (err) {
    setError(err.message);
    setLoading(false);
  }
  }

 
  const searchProducts = items.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <h2>Loading Products...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className="container">
      <h1>Product Listing Application</h1>

      <input type="text" placeholder="Search Product..." value={search}onChange={(e) => setSearch(e.target.value)}
        className="search"/>

      <div className="product-container">
        {searchProducts.length > 0 ? (
          searchProducts.map((product) => (
            <ProductCard
              key={product.id}
              image={product.thumbnail}
              title={product.title}
              price={product.price}
              category={product.category}
            />
          ))
        ) : (
          <h2>No Products Found</h2>
        )}
      </div>
    </div>
  );
}

export default Product;