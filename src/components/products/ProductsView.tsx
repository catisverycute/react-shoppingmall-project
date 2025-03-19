import { Link, useParams } from "react-router-dom";
import BreadCrumb from "../common/BreadCrumb";
import useProducts from "../../store/useProducts";
import { useEffect, useState } from "react";
import Rating from "../common/Rating";
import { Category } from "../../constants/constants";
import { useRecoilState } from "recoil";
import { cartState } from "../../constants/atoms";
import { toCurrencyFormat } from "../../helpers/helpers";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
  rating: Rating;
}

interface Rating {
  count: number;
  rate: number;
}

export default function ProductsView() {
  const { id } = useParams<{ id: string }>();
  const { products } = useProducts();
  const [product, setProduct] = useState<Product | null>(null);
  const [cart, setCart] = useRecoilState(cartState);

  useEffect(() => {
    if (id && products.length > 0) {
      const foundProduct = products.find((p) => p.id === Number(id));
      setProduct(foundProduct || null);
    }
  }, [id, products]);

  const productCategoryKorean = product ? Category[product.category] : "";

  const addCart = () => {
    if (!product) return;

    const findProduct = cart.find((item) => item.id === product.id);

    if (findProduct) {
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
  };

  useEffect(() => {
    localStorage.setItem("cart_item", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="lg:mx-36 mx-auto">
      <BreadCrumb category={productCategoryKorean} crumb={product?.title} />
      <div className="lg:flex lg:items-center mt-6 md:mt-14 px-2 lg:px-0">
        <figure className="flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white view_image">
          <img
            className="object-contain w-full h-72"
            src={product?.image}
            alt="상품이미지"
          />
        </figure>
        <div className="card-body px-1 lg:px-12">
          <h2 className="card-title">
            {product?.title}
            <span className="badge badge-accent ml-2">NEW</span>
          </h2>
          <p>{product?.description}</p>
          <div className="flex items-center mt-3">
            <Rating rate={product?.rating.rate} />
            <div className="ml-2">
              {product?.rating.rate} / {product?.rating.count} 참여
            </div>
          </div>
          <p className="flex items-start mt-2 mb-4 text-3xl">
            {toCurrencyFormat(product?.price || 0)}
          </p>
          <div className="card-actions">
            <button className="btn btn-primary" onClick={addCart}>
              장바구니에 담기
            </button>
            <Link to="/cart" className="btn btn-outline ml-1">
              장바구니로 이동
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
