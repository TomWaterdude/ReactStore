import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import { useEffect, useState } from "react";

export default function Catalog() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
      fetch("http://localhost:5000/api/products")
        .then((response) => response.json())
        .then((data) => setProducts(data));
      // using an empty array as a dependency ensures that this will only be called once. If you forget, this is going to get called again on every re-render... and setProducts causes a re-render (because it updates the state), so this would call an endless loop to the API
    }, []);
  
  return (
    <>
      <ProductList products={products}></ProductList>
    </>
  );
}


