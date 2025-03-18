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
});
