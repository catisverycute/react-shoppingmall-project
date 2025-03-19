import { JSX } from "react";
import { useSetRecoilState } from "recoil";
import { cartState } from "../../constants/atoms";

const Confirm = (): JSX.Element => {
  const setCart = useSetRecoilState(cartState);

  const handleConfirm = () => {
    setCart([]);
    localStorage.setItem("cart_item", JSON.stringify([]));
    closeModal();
  };

  const closeModal = () => {
    const modal = document.getElementById("confirm-modal") as HTMLInputElement;
    if (modal) {
      document.documentElement.classList.remove("modal-toggle");
    }
  };

  return (
    <>
      <input type="checkbox" id="confirm-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <div className="flex flex-col items-start">
            <h3 className="font-bold text-lg">정말로 구매하시겠습니까?</h3>
            <p className="py-4">장바구니의 모든 상품들이 삭제됩니다.</p>
          </div>
          <div className="modal-action">
            <label
              htmlFor="confirm-modal"
              className="btn btn-primary"
              onClick={handleConfirm}
            >
              네
            </label>
            <label
              htmlFor="confirm-modal"
              className="btn btn-outline"
              onClick={closeModal}
            >
              아니요
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Confirm;
