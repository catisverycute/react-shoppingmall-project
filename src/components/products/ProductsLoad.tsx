import ProductsList from "./ProductsList";
import BreadCrumb from "../common/BreadCrumb";
import useProducts from "../../store/useProducts";

interface CategoryProps {
  category?: string;
  crumb?: string;
  categoryTitle?: string;
}

export default function ProductsLoad({ categoryTitle, crumb }: CategoryProps) {
  const { products } = useProducts();

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 xl:px-2">
      <div className="mb-6 lg:mb-10 w-full">
        <BreadCrumb category="HOME" crumb={crumb} />
      </div>

      <article className="mt-8 lg:mt-12 pb-6 lg:pb-12 w-full">
        <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">
          {categoryTitle}
        </h2>
        <ProductsList products={products} selectedCategory={categoryTitle} />
      </article>
    </div>
  );
}
