import { useRecoilState } from "recoil";
import { cartState } from "../constants/atoms";
import { CART_ITEM } from "../constants/constants";

export function useCart() {
  const [cart, setCart] = useRecoilState(cartState);

  const addCart = (product: CART_ITEM) => {
    const foundProduct = cart.find((item) => item.id === product.id);

    if (foundProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    console.log("카드에 상품 추가");
  };

  return { cart, addCart };
}
