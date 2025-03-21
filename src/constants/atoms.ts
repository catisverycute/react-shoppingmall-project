import { atom } from "recoil";

interface CART_ITEM {
  id: number;
  title: string;
  image: string;
  price: number;
  quantity: number;
}

export const cartState = atom<CART_ITEM[]>({
  key: "cart_item",
  default: [],
  effects_UNSTABLE: [
    ({ setSelf }) => {
      const savedCart = localStorage.getItem("cart_item");
      if (savedCart) {
        try {
          const parsedCart = JSON.parse(savedCart);
          if (Array.isArray(parsedCart)) {
            setSelf(parsedCart);
          } else {
            console.warn(
              "cart_item 데이터가 배열이 아닙니다. 기본값 []로 설정됨:",
              parsedCart
            );
            setSelf([]);
          }
        } catch (error) {
          console.error(" cart_item 데이터 파싱 오류:", error);
          setSelf([]);
        }
      }
    },
  ],
});
