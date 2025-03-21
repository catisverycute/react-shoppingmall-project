import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { RecoilRoot } from "recoil";
import { cartState } from "./constants/atoms.ts";
import { DebugObserver } from "./constants/DebugObserver.tsx";

const CART_ITEM = "cart_item";
const initialValue = (() => {
  try {
    const storedCart = JSON.parse(localStorage.getItem(CART_ITEM) as string);
    return Array.isArray(storedCart) ? storedCart : [];
  } catch (error) {
    console.warn("cart_item 파싱 오류:", error);
    return [];
  }
})();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RecoilRoot
      initializeState={({ set }) => {
        set(cartState, initialValue);
      }}
    >
      <DebugObserver />
      <App />
    </RecoilRoot>
  </StrictMode>
);
