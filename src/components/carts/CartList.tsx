import { Link } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { cartState } from "../../constants/atoms";
import { JSX, useEffect } from "react";
import { toCurrencyFormat } from "../../helpers/helpers";

const CartList = (): JSX.Element => {
  const cartItems = useRecoilValue(cartState);
  const setCart = useSetRecoilState(cartState);

  const productPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const formattedProductPrice = toCurrencyFormat(productPrice);
  const addCart = (productId: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const deleteCart = (productId: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId && item.quantity === 1
            ? null
            : item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item !== null)
    );
  };

  useEffect(() => {
    localStorage.setItem("cart_item", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div>
      {cartItems.map((items) => (
        <div className="lg:flex lg:items-center mt-4 px-2 lg:px-0">
          <Link to={`/product/${items.id}`}>
            <figure className="w-56 min-w-full shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white">
              <img src={items.image} />
            </figure>
          </Link>
          <div className="card-body px-1 lg:px-12">
            <h2 className="card-title">
              <Link to={`/product/${items.id}`} className="link link-hover">
                {items.title}
              </Link>
            </h2>
            <p className="mt-2 mb-4 text-3xl">
              {formattedProductPrice}
              <span className="text-2xl pl-2">{`(${toCurrencyFormat(
                items.price
              )})`}</span>
            </p>
          </div>
          <div className="card-actions">
            <div className="btn-group">
              <button
                className="btn btn-primary"
                onClick={() => deleteCart(items.id)}
              >
                -
              </button>
              <button className="btn btn-ghost animate-none">
                {items.quantity}
              </button>
              <button
                className="btn btn-primary"
                onClick={() => addCart(items.id)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartList;
