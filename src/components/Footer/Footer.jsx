import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__icons">
        <FaFacebookF className="icons" />
        <FaTwitter className="icons" />
        <FaInstagram className="icons" />
      </div>
    </footer>
  );
};
