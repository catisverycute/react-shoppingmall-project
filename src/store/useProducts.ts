import { useState, useEffect } from "react";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
  rating: Rating;
}

interface Rating {
  count: number;
  rate: number;
}

export default function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  async function fetchProducts() {
    const response = await axios.get("https://fakestoreapi.com/products");
    setProducts(response.data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products };
}