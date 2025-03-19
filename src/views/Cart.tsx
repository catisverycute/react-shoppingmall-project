import { JSX } from "react";
import CartView from "../components/carts/CartView";

const Cart = (): JSX.Element => {
  return (
    <section className="pt-6 lg:pt-12 pb-6 lg:pb-12 px-4 xl:px-2 xl:container mx-auto">
      <CartView />
    </section>
  );
};

export default Cart;
