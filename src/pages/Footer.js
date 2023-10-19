import github from "../Assets/images/github.png";
import facebook from "../Assets/images/facebook.png";
import instagram from "../Assets/images/instagram.png";
import youtube from "../Assets/images/youtube.png";
import twitter from "../Assets/images/twitter.png";
import linkedin from "../Assets/images/linkedin.png";
import "./Styles.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <div className="footer-first-content">
          <div className="social">
            <Image src={github} alt="social" className="p-1" />
            <Image src={facebook} alt="social" className="p-1" />
            <Image src={instagram} alt="social" className="p-1" />
            <Image src={youtube} alt="social" className="p-1" />
            <Image src={twitter} alt="social" className="p-1" />
            <Image src={linkedin} alt="social" className="p-1" />
          </div>
          <div>
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              PRODUCT
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="footer-items">Pricing</a>
              </li>
              <li>
                <a className="footer-items">List Your API</a>
              </li>
              <li>
                <a className="footer-items">Why choose us?</a>
              </li>
              <li>
                <a className="footer-items">Fourth Link</a>
              </li>
              <li>
                <a className="footer-items">Marketplace</a>
              </li>
            </nav>
          </div>
          <div>
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              DOCS & HELP
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="footer-items">Documentation</a>
              </li>
              <li>
                <a className="footer-items">Blog</a>
              </li>
              <li>
                <a className="footer-items">FAQs</a>
              </li>
              <li>
                <a className="footer-items">Press</a>
              </li>
            </nav>
          </div>
          <div>
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              ACCOUNT
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="footer-items">Log In</a>
              </li>
              <li>
                <a className="footer-items">Forgot Password</a>
              </li>
              <li>
                <a className="footer-items">FREE Signup</a>
              </li>
            </nav>
          </div>
          <div>
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              GET IN TOUCH
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="footer-items">Contact</a>
              </li>
              <li>
                <a className="footer-items">Get a quote</a>
              </li>
            </nav>
          </div>
        </div>
        <div className="footer-sec">
          <p className="f-text">
            Imprint / Legal | Privacy | Terms | Cookie Preference | Sitemap
          </p>
        </div>
        <div>
          <p className="copy-right-text">
            © 2022 Exchagerate API, an APILayer product. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
