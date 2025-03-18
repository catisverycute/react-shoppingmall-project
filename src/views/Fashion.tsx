import { JSX } from "react";
import ProductsLoad from "../components/products/ProductsLoad";

const Fashion = (): JSX.Element => {
  return (
    <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
      <ProductsLoad crumb="fashion" categoryTitle="패션" />
    </section>
  );
};

export default Fashion;
