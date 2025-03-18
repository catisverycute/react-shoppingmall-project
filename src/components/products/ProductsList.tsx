import { Link } from "react-router-dom";
import { Category } from "../../constants/constants";
import { toCurrencyFormat } from "../../helpers/helpers";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
}

interface ProductsListProps {
  products: Product[];
  selectedCategory?: string;
  limit?: number;
}

export default function ProductsList({
  products,
  selectedCategory,
  limit,
}: ProductsListProps) {
  const filteredProducts = selectedCategory
    ? products.filter(
        (product) => Category[product.category] === selectedCategory
      )
    : products;
  const displayedProducts = limit
    ? filteredProducts.slice(0, limit)
    : filteredProducts;

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list p-4">
      {displayedProducts.map((product) => (
        <Link
          key={product.id}
          to={`/product/${product.id}`}
          className="card card-bordered border-gray-300 shadow-sm hover:shadow-md rounded-lg transition-all duration-300"
        >
          <figure className="flex h-64 bg-white overflow-hidden p-4">
            <img
              src={product.image}
              alt="상품이미지"
              className="w-full h-full object-contain mx-auto transition-transform duration-300 hover:scale-105"
            />
          </figure>
          <div className="card-body bg-gray-50 dark:bg-gray-800 text-center p-4">
            <p className="card-title text-lg font-semibold text-gray-800 dark:text-white">
              {product.title}
            </p>
            <p className="text-lg font-bold text-gray-600 dark:text-gray-300">
              {toCurrencyFormat(product.price)}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
