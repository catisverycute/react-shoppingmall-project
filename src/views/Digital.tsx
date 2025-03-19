import { JSX } from "react";
import ProductsLoad from "../components/products/ProductsLoad";

const Digital = (): JSX.Element => {
  return (
    <section className="pt-6 lg:pt-12 pb-6 lg:pb-12 px-4 xl:px-2 xl:container mx-auto">
      <ProductsLoad crumb="digital" categoryTitle="디지털" />
    </section>
  );
};

export default Digital;
