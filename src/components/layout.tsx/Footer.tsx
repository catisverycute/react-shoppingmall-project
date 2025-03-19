import { Link } from "react-router-dom";
import facebook from "../../public/svg/facebook.svg";
import facebookDark from "../../public/svg/facebookDark.svg";
import instagram from "../../public/svg/instagram.svg";
import instagramDark from "../../public/svg/instagramDark.svg";
import github from "../../public/svg/github.svg";
import githubDark from "../../public/svg/githubDark.svg";
import visa from "../../public/svg/visa.svg";
import master from "../../public/svg/mastercard.svg";
import amex from "../../public/svg/amex.svg";
import paypal from "../../public/svg/paypal.svg";
import diners from "../../public/svg/diners.svg";
import discover from "../../public/svg/discover.svg";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col w-full p-10 bg-base-200 text-base-content footer footer-center">
      <div className="grid grid-flow-col gap-4 ">
        <Link
          to="https://zero-base.co.kr/"
          target="_blank"
          rel="noreferrer noopener external"
          className="link link-hover"
        >
          제로베이스
        </Link>
      </div>
      <ul className="flex">
        <li>
          <img src={visa} alt="visa" className="w-9" />
        </li>
        <li>
          <img src={master} alt="mastercard" className="w-9" />
        </li>
        <li>
          <img src={amex} alt="amex" className="w-8" />
        </li>
        <li>
          <img src={paypal} alt="paypal" className="w-9" />
        </li>
        <li>
          <img src={diners} alt="diners" className="w-9" />
        </li>
        <li>
          <img src={discover} alt="discover" className="w-9" />
        </li>
      </ul>
      <div className="grid grid-flow-col gap-4">
        <Link
          to="https://www.facebook.com/0base"
          target="_blank"
          rel="noreferrer noopener external"
          data-tip="facebook"
          className="tooltip"
        >
          <img
            src={facebook}
            alt="facebook"
            className="w-6 block dark:hidden"
          />
          <img
            src={facebookDark}
            alt="facebook"
            className="w-6 hidden dark:block"
          />
        </Link>
        <Link
          to="https://www.instagram.com/zerobase.official/#"
          target="_blank"
          rel="noreferrer noopener external"
          data-tip="instagram"
          className="tooltip"
        >
          <img
            src={instagram}
            alt="instagram"
            className="w-6 block dark:hidden"
          />
          <img
            src={instagramDark}
            alt="instagram"
            className="w-6  hidden dark:block"
          />
        </Link>
        <Link
          to="https://github.com/catisverycute"
          target="_blank"
          rel="noreferrer noopener external"
          data-tip="github"
          className="tooltip"
        >
          <img src={github} alt="github" className="w-6 block dark:hidden" />
          <img
            src={githubDark}
            alt="github"
            className="w-6  hidden dark:block"
          />
        </Link>
      </div>
      <div>
        <p>Copyright © 2022 Zero Base</p>
      </div>
    </footer>
  );
};

export default Footer;
