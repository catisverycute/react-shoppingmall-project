import { JSX } from "react";

const Confirm = (): JSX.Element => {
  return (
    <div className="modal-box">
      <h3 className="font-bold text-lg">정말로 구매하시겠습니까?</h3>
      <p className="py-4">장바구니의 모든 상품들이 삭제됩니다.</p>
      <div className="modal-action">
        <label
          htmlFor="confirm-modal"
          className="btn btn-primary"
          data-cart="[object Object]"
        >
          네
        </label>
        <label htmlFor="confirm-modal" className="btn btn-outline">
          아니요
        </label>
      </div>
    </div>
  );
};

export default Confirm;
