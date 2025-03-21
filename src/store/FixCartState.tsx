import { useRecoilState } from "recoil";
import { cartState } from "../constants/atoms";
import { useEffect } from "react";

const FixCartState = () => {
  const [cart, setCart] = useRecoilState(cartState);

  useEffect(() => {
    if (!Array.isArray(cart)) {
      console.warn(
        "cartState가 배열이 아닙니다! 빈 배열로 초기화합니다.",
        cart
      );
      setCart([]);
    }
  }, [cart, setCart]);

  return null;
};

export default FixCartState;
