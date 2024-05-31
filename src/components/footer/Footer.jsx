import React from "react";
import "./footer.css";

export const Footer = () => {
    return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Siva Sankar</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" 
                    className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio"
                     className="footer__link"> Projects</a>
                </li>   
            </ul>

            <div className="footer__social">
            <a href="https://www.instagram.com/___s.i.v.a___/" 
            className="footer__social-link" target="_blank">
            <i class="bx bxl-instagram"></i>
            </a>

            <a href="https://www.linkedin.com/in/siva-sankar-314b04242/"
             className="footer__social-link" target="_blank">
            <i class="bx bxl-linkedin"></i>
            </a>

            <a href="https://github.com/sivasankar10"
             className="footer__social-link" target="_blank">
            <i class="bx bxl-github"></i>
            </a>
            </div>

            <span className="footer__copy">
                &#169; Siva Sankar. All rights reserved
            </span>
         </div>
    </footer>
    )
}

export default Footer