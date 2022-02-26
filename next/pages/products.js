import { useState, useEffect } from "react";
import axios from "axios";
import ProductsList from "../components/ProductsList";

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:1337/api/products").then((res) => {
      setProducts(res.data.data);
      console.log(res.data.data);
    });
  }, []);
  return (
    <div>
      <ProductsList products={products} />
    </div>
  );
}
