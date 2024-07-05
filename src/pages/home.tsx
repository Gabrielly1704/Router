import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "../dto/ProductDTO";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/products").then((data) =>
      data.json().then((products) => setProducts(products))
    );
  }, []);

  return (
    <div>
      {products.map((product) => (
        <Link
          to={`detail/${product.id}`}
          style={{
            display: "flex",
            gap: 10,
            textDecoration: "none",
            background: "red",
            marginBottom: 10,
          }}
        >
          <h2>{product.id}</h2>
          <h2>{product.name}</h2>
        </Link>
      ))}
    </div>
  );
};

export default Home;
