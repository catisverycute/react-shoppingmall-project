import useProducts from "../../store/useProducts";
import ProductsList from "../products/ProductsList";

interface ProductProps {
  productTitle?: string;
  limit?: number;
}

export default function ItemList({ productTitle, limit = 4 }: ProductProps) {
  const { products } = useProducts();
  return (
    <div>
      <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">
        {productTitle}
      </h2>
      <ProductsList
        products={products}
        selectedCategory={productTitle}
        limit={limit}
      />
    </div>
  );
}
