
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



const Footer = () => (
  <footer>
    <a href="" className="footer_logo">Mohamed Ayman</a>
    <ul className="linkes">
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#skills">Skills</a>
      </li>
      <li>
        <a href="services">Services</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
    <div className="footer_social">
      <a href="" target="_blank"><FaFacebookF /></a>
      <a href="" target="_blank"><FaInstagram /></a>
      <a href="" target="_blank"><FaXTwitter /></a>
    </div>
    <div className="copyright">
      <small>&copy; <a href="">Mohamed Ayman</a> All rights reserved</small>
    </div>
  </footer>
);

export default Footer;
