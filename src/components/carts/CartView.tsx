import { Link } from "react-router-dom";
import BreadCrumb from "../common/BreadCrumb";
import Confirm from "../common/Confirm";
import CartList from "./CartList";
import useProducts from "../../store/useProducts";
import { JSX } from "react";
import { useRecoilValue } from "recoil";
import { cartState } from "../../constants/atoms";
import { toCurrencyFormat } from "../../helpers/helpers";

const CartView = (): JSX.Element => {
  const { products } = useProducts();
  const cart = useRecoilValue(cartState);
  console.log(products);

  const totalPrice = cart.reduce(
    (total, idx) => total + idx.quantity * idx.price,
    0
  );
  console.log(totalPrice);

  return (
    <div>
      <BreadCrumb category="홈" crumb="장바구니" />
      <div className="mt-6 md:mt-14 px-2 lg:px-0">
        <div className="flex flex-col items-start ">
          <h1 className="text-2xl">장바구니에 물품이 없습니다.</h1>
          <Link to="/" className="btn btn-primary mt-10">
            담으러 가기
          </Link>
        </div>
        <CartList />
        <div className="flex lg:flex justify-between mb-20">
          <div></div>
          <div className="self-start shrink-0 flex items-center mt-10 mb-20">
            <span className="text-xl md:text-2xl">
              총 :{toCurrencyFormat(totalPrice)}
            </span>
            <label
              htmlFor="confirm-modal"
              className="modal-button btn btn-primary ml-5"
            >
              구매하기
            </label>
          </div>
        </div>
      </div>
      <Confirm />
    </div>
  );
};

export default CartView;
