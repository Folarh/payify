

// import { Link } from "react-router-dom";

//*style
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer">
        <div className="footer-one">
        
          <h1 className="footer-one-logo">Payify</h1>
            

          <p>Address:  alimosho Lagos</p>
          <p>Phone: +12345</p>
          <p>Email: hireme@gmail.com</p>
        </div>

        <div className="footer-two">
          <h5>Useful Links</h5>

          <ul className="footer-two-link">
           
              <li>About Us</li>
           
            
              <li>Contact</li>
           
            
              <li>FAq</li>
           
          
          </ul>
        </div>

        <div className="footer-three">
          <h5>Join Our Newsletter Now</h5>

          <p>Get E-mail updates about our latest shop and special offers.</p>

          <div className="footer-three-input">
            <input
              type="text"
              placeholder="Enter your mail"
              autoComplete="off"
            />
            <button>SUBSCRIBE</button>
          </div>

          <div className="footer-three-media">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-twitter"></i>
          </div>
        </div>
      </div>

      <p className="footer-end">
        Copyright ©2023  | Made with love by Taiwo
      </p>
    </footer>
  );
};

export default Footer;