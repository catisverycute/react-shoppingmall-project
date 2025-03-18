export const Category: { [key: string]: string } = {
  "men's clothing": "패션",
  "women's clothing": "패션",
  electronics: "디지털",
  jewelery: "액세서리",
} as const;

export const MENUS = {
  HOME: "홈",
  FASHION: "패션",
  ACCESSORY: "액세서리",
  DIGITAL: "디지털",
} as const;

// export const CART_ITEM = "CART_ITEM";

export interface CART_ITEM {
  id: number; // 상품 ID
  title: string; // 상품 이름
  price: number; // 가격
  image: string; // 이미지 URL
  quantity: number; // 수량
}

// type categoryType = (typeof Category)[keyof typeof Category];
