import { JSX } from "react";
import ProductsLoad from "../components/products/ProductsLoad";

const Accessory = (): JSX.Element => {
  return (
    <section className="pt-6 lg:pt-12 pb-6 lg:pb-12 px-4 xl:px-2 xl:container mx-auto">
      <ProductsLoad crumb="accessory" categoryTitle="액세서리" />
    </section>
  );
};

export default Accessory;
