import { Link } from "react-router-dom";
import BreadCrumb from "../common/BreadCrumb";
import Confirm from "../common/Confirm";
import CartList from "./CartList";
import { JSX, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { cartState } from "../../constants/atoms";
import { toCurrencyFormat } from "../../helpers/helpers";
import { CART_ITEM } from "../../constants/constants";

const CartView = (): JSX.Element => {
  const cart = useRecoilValue(cartState);
  const [cartItems, setCartItems] = useState<CART_ITEM[]>([]);
  useEffect(() => {
    if (Array.isArray(cart)) {
      setCartItems(cart);
    } else {
      console.warn("cartState가 배열이 아닙니다! 빈 배열로 변환합니다.", cart);
      setCartItems([]);
    }
  }, [cart]);

  const totalPrice = (cart || []).reduce(
    (total, idx) => total + (idx.quantity || 0) * (idx.price || 0),
    0
  );

  useEffect(() => {
    const storedCart = localStorage.getItem("cart_item");
    if (storedCart) {
      try {
        const parsedCart = JSON.parse(storedCart);
        if (Array.isArray(parsedCart)) {
          setCartItems(parsedCart);
        } else {
          console.error("cart_item이 배열이 아닙니다:", parsedCart);
          setCartItems([]);
        }
      } catch (error) {
        console.error("장바구니 데이터를 불러오는 중 오류 발생:", error);
        setCartItems([]);
      }
    }
  }, []);

  return (
    <div className="lg:mx-36 mx-auto">
      <BreadCrumb category="홈" crumb="장바구니" />
      <div className="mt-6 md:mt-14 px-2 lg:px-0">
        <div className="lg:flex justify-between mb-20">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-start ">
              <h1 className="text-2xl">장바구니에 물품이 없습니다.</h1>
              <Link to="/" className="btn btn-primary mt-10">
                담으러 가기
              </Link>
            </div>
          ) : (
            <CartList />
          )}
          <div className="self-start shrink-0 flex items-center mt-10 mb-20">
            <span className="text-xl md:text-2xl">
              총 : {toCurrencyFormat(totalPrice)}
            </span>
            <label
              htmlFor="confirm-modal"
              className="modal-button btn btn-primary ml-5"
            >
              구매하기
            </label>
          </div>
        </div>
        <Confirm />
      </div>
    </div>
  );
};

export default CartView;
