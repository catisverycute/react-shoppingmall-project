import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { RecoilRoot } from "recoil";
import { cartState } from "./constants/atoms.ts";

const CART_ITEM = "cart_item";
const initialValue =
  JSON.parse(localStorage.getItem(CART_ITEM) as string) ?? {};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RecoilRoot
      initializeState={({ set }) => {
        set(cartState, initialValue);
      }}
    >
      <App />
    </RecoilRoot>
  </StrictMode>
);
