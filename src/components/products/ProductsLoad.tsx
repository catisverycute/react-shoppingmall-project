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
    <div>
      <BreadCrumb category="HOME" crumb={crumb} />
      <article className="pt-2 lg:pt-4 pb-4 lg:pb-8 px-4 xl:px-2 mb-20 xl:container mx-auto">
        <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">
          {categoryTitle}
        </h2>
        <ProductsList products={products} selectedCategory={categoryTitle} />
      </article>
    </div>
  );
}
