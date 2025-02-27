import "./Footer.css";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="footer-div">
      <a
        href="https://github.com/recep-demir"
        target="_blank"
        rel="noopener noreferrer"
        className="brand"
        
      >
        <FaGithub />
      </a>
      <p>Recep Demir</p>
      
      <span>Copyright {new Date().getFullYear()}</span>
    </div>
  );
};

export default Footer;
