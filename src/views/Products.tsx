import { JSX } from "react";
import ProductsView from "../components/products/ProductsView";

const Products = (): JSX.Element => {
  return (
    <section className="pt-6 lg:pt-12 pb-6 lg:pb-12 px-4 xl:px-2 xl:container mx-auto">
      <ProductsView />
    </section>
  );
};

export default Products;
