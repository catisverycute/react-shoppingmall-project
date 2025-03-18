import { JSX } from "react";
import ProductsLoad from "../components/products/ProductsLoad";

const Accessory = (): JSX.Element => {
  return (
    <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
      <ProductsLoad crumb="accessory" categoryTitle="액세서리"/>
    </section>
  );
};

export default Accessory;
